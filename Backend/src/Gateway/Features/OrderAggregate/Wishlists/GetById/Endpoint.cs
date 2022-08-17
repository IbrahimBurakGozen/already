using Core.OrderAggregate;
using Core.OrderAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.OrderAggregate.Wishlists.GetById
{
    public class Endpoint : Endpoint<Request, Response>
    {
        private readonly IRepository<Wishlist> _repository;
  
        public Endpoint(IRepository<Wishlist> repository)
        {
            _repository = repository;
        }
    
        public override void Configure()
        {
            Get("/wishlists/{Id}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request req, CancellationToken ct)
        {
            var spec = new WishlistByIdSpec(req.Id);
            var wishlist = await _repository.GetBySpecAsync(spec, ct);
            
            if (wishlist == null)
            {
                await SendNotFoundAsync(ct);
                return;
            }

            var dto = new WishlistDto(wishlist);
            Response.Wishlist = dto;
            await SendAsync(Response, cancellation: ct);
        }
    }
}
