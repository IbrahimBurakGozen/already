using Ardalis.GuardClauses;
using Core.ProductAggregate;
using Shared;
using Shared.Interfaces;
namespace Core.OrderAggregate;

public class WishlistLine: BaseEntity, IAggregateRoot
{
    // Relations 
    public Guid WishlistId { get; set; }
    public Wishlist Wishlist { get; set; }

    public Guid ProductVariantId { get; set; }
    public ProductVariant ProductVariant { get; set; }
    
    
    // Constructors
    private WishlistLine() {}
    
    public WishlistLine(ProductVariant productVariant)
    {
        ProductVariant = Guard.Against.Null(productVariant, nameof(productVariant));
    }
    
    
    // Setters
    public void SetWishlist(Wishlist cart)
    {
        Guard.Against.Null(cart);
        Wishlist = cart;
        WishlistId = cart.Id;
    }
}