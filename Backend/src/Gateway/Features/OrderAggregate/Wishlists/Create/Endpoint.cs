using Core.OrderAggregate;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;

namespace Gateway.Features.OrderAggregate.Wishlists.Create
{
    public class Endpoint : Endpoint<EmptyRequest, Response>
    {
        private readonly IRepository<Wishlist> _repository;
  
        public Endpoint(IRepository<Wishlist> repository)
        {
            _repository = repository;
        }
    
        public override void Configure()
        {
            Post("/wishlists/create");
            AllowAnonymous();
        }

        public override async Task HandleAsync(EmptyRequest emptyRequest, CancellationToken ct)
        {
            try
            {
                var createdWishlist =  new Wishlist();
                var response = await _repository.AddAsync(createdWishlist, ct);
                var dto = new WishlistDto(response);
                Response.Wishlist = dto;
                await SendAsync(Response, cancellation: ct);
            }
            catch (Exception e)
            {
                await SendErrorsAsync(cancellation: ct);
                throw;
            }
        }
    }
}
