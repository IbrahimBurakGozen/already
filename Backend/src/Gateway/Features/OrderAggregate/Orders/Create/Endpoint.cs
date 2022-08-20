using Core.OrderAggregate;
using Core.OrderAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.OrderAggregate.Orders.Create;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Order> _orderRepository;
    private readonly IRepository<Cart> _cartRepository;
  
    public Endpoint(IRepository<Order> orderRepository, IRepository<Cart> cartRepository)
    {
        _orderRepository = orderRepository;
        _cartRepository = cartRepository;
    }
    
    public override void Configure()
    {
        Post("/orders/create");
        AllowAnonymous();
    }
    
    
    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        var spec = new CartByIdSpec(req.CartId);
        var cart = await _cartRepository.GetBySpecAsync(spec, ct);
        
        if(cart == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }
        
        if (cart.CartLines.Count == 0)
        {
            await SendNotFoundAsync(ct);
            return;
        }
        
        try
        {
            cart.SetOrderPlaced(true);
            await _cartRepository.UpdateAsync(cart, ct);
            
            var createdOrder =  new Order(cart);
            var response = await _orderRepository.AddAsync(createdOrder, ct);
            
            var dto = new OrderDto(response);
            Response.Order = dto;
            await SendAsync(Response, cancellation: ct);
        }
        catch (Exception e)
        {
            await SendErrorsAsync(cancellation: ct);
            Console.WriteLine(e);
            throw;
        }
    }
}
