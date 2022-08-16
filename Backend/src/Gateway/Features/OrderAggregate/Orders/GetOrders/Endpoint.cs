using Core.OrderAggregate;
using Core.OrderAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.OrderAggregate.Orders.GetOrders;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Order> _repository;
  
    public Endpoint(IRepository<Order> repository)
    {
        _repository = repository;
    }
    
    public override void Configure()
    {
        Get("/orders");
        AllowAnonymous();
    }
    
    
    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        var spec = new OrdersByCustomerSpec(req.CustomerId);
        var orders = await _repository.ListAsync(spec, ct);

        if (orders == null || orders.Count == 0)
        {
            await SendNotFoundAsync(ct);
            return;
        }

        var dtos = orders.Select(x => new OrderDto(x)).ToList();

        Response.Orders = dtos;
        await SendAsync(Response, cancellation: ct);
    }

 
   
}
