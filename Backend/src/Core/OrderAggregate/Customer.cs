using Ardalis.GuardClauses;
using Core.IdentityAggregate;
using Core.ProductAggregate;
using Shared.Interfaces;
namespace Core.OrderAggregate;

public class Customer : ApplicationUser, IBaseEntity
{
    // Relations
    private List<Order> _orders = new();
    public IReadOnlyCollection<Order> Orders => _orders.AsReadOnly();
    
    public Guid? CartId { get; private set; }
    public Cart? Cart { get; private set; }

    public Guid? WishlistId { get; private set; }
    public Wishlist? Wishlist { get; private set; }
    
    // Constructors
    public Customer(string firstName, string lastName, string email): base(firstName, lastName, email)
    {
        // if (Cart is null)
        // {
        //     var basket = new Cart();
        //     basket.SetCustomer(this);
        //     Cart = basket;
        //     CartId = basket.Id;
        // }
    }
    
    
    
    // Adding
    public void AddOrder(Order order)
    {
        Guard.Against.Null(order, nameof(order));
        order.SetCustomer(this);
        _orders.Add(order);
    }
}
