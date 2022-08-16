using Core.OrderAggregate;
using Core.OrderAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.OrderAggregate.Carts.GetById
{
    public class Endpoint : Endpoint<Request, Response>
    {
        private readonly IRepository<Cart> _repository;
  
        public Endpoint(IRepository<Cart> repository)
        {
            _repository = repository;
        }
    
        public override void Configure()
        {
            Get("/carts/{Id}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request req, CancellationToken ct)
        {
            var spec = new CartByIdSpec(req.Id);
            var cart = await _repository.GetBySpecAsync(spec, ct);
            
            if (cart == null)
            {
                await SendNotFoundAsync(ct);
                return;
            }

            var dto = new CartDto(cart);
            Response.Cart = dto;
            await SendAsync(Response, cancellation: ct);
        }
    }
}
