using Core.OrderAggregate;
using Core.OrderAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.OrderAggregate.Orders.GetOrderById;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Order> _repository;
  
    public Endpoint(IRepository<Order> repository)
    {
        _repository = repository;
    }
    
    public override void Configure()
    {
        Get("/orders/{Id}");
        AllowAnonymous();
    }
    
    
    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        var spec = new OrderByIdSpec(req.Id);
        var order = await _repository.GetBySpecAsync(spec, ct);

        if (order == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }

        var dtos = new OrderDto(order);

        Response.Order = dtos;
        await SendAsync(Response, cancellation: ct);
    }
}
