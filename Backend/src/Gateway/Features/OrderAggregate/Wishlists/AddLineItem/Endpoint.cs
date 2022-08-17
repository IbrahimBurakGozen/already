using Core.OrderAggregate;
using Core.OrderAggregate.Specifications;
using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.OrderAggregate.Wishlists.AddLineItem;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Wishlist> _wishlistRepository;
    private readonly IRepository<WishlistLine> _wishlistLineRepository;
    private readonly IRepository<ProductVariant> _productVariantRepository;
  
    public Endpoint(IRepository<Wishlist> wishlistRepository,IRepository<WishlistLine> wishlistLineRepository, IRepository<ProductVariant> productVariantRepository)
    {
        _wishlistRepository = wishlistRepository;
        _wishlistLineRepository = wishlistLineRepository;
        _productVariantRepository = productVariantRepository;
        
    }

    public override void Configure()
    {
        Post("/wishlists/lines");
        AllowAnonymous();
    }

    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        var spec = new WishlistByIdSpec(req.WishlistId);
        var wishlist = await _wishlistRepository.GetBySpecAsync(spec, ct);
        
        if(wishlist == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }

        try
        {
            var productVariantSpec = new ProductVariantByIdSpec(req.Line.Id);
            var productVariant = await _productVariantRepository.GetBySpecAsync(productVariantSpec, ct);

            if(productVariant == null)
            {
                throw new Exception("ProductVariant not found");
            }

            var wishlistLine = new WishlistLine(productVariant);

            wishlist.AddWishlistLine(wishlistLine);

            await _wishlistLineRepository.AddAsync(wishlistLine, ct);
            await _wishlistLineRepository.SaveChangesAsync(ct);

            var dto = new WishlistDto(wishlist);
            Response.Wishlist = dto;
            await SendAsync(Response, cancellation: ct);
        }
        catch(Exception e)
        {
            await SendErrorsAsync(500, ct);
            throw;
        }
    }
}
