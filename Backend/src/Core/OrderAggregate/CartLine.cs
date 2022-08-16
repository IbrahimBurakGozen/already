using Ardalis.GuardClauses;
using Core.ProductAggregate;
using Shared;
using Shared.Interfaces;
namespace Core.OrderAggregate;

public class CartLine: BaseEntity, IAggregateRoot
{
    // Properties
    public int Quantity { get; private set; }
    
    
    // Relations 
    public Guid CartId { get; set; }
    public Cart Cart { get; set; }

    public Guid ProductVariantId { get; set; }
    public ProductVariant ProductVariant { get; set; }
    
    
    // Constructors
    private CartLine() {}
    
    public CartLine(int quantity, ProductVariant productVariant)
    {
        Quantity = Guard.Against.NegativeOrZero(quantity, nameof(quantity));
        ProductVariant = Guard.Against.Null(productVariant, nameof(productVariant));
    }
   
    
    // Setters
    public void SetCart(Cart cart)
    {
        Guard.Against.Null(cart);
        Cart = cart;
        CartId = cart.Id;
    }
    
    public void SetQuantity(int quantity)
    {
        Quantity = Guard.Against.NegativeOrZero(quantity, nameof(quantity));
    }
}
