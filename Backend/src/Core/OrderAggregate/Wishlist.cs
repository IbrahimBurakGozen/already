using Ardalis.GuardClauses;
using Shared;
using Shared.Interfaces;
namespace Core.OrderAggregate;

public class Wishlist: BaseEntity, IAggregateRoot
{
    // Relations
    public Guid? CustomerId { get; private set; }
    public Customer? Customer { get; private set; }
    
    private readonly List<WishlistLine> _wishlistLines = new();
    public IReadOnlyCollection<WishlistLine> WishlistLines => _wishlistLines.AsReadOnly();

    
    // Constructors
    public Wishlist(){}
    
    public Wishlist(Customer customer)
    {
        SetCustomer(customer);
    }
    
    public Wishlist(WishlistLine line)
    {
        AddWishlistLine(line);
    }

    public Wishlist(List<WishlistLine> lines)
    {
        AddWishlistLine(lines);
    }

    public Wishlist(Customer customer, List<WishlistLine> lines)
    {
        SetCustomer(customer);
        AddWishlistLine(lines);
    }
    
    

    // Adding
    public void AddWishlistLine(WishlistLine line)
    {
        Guard.Against.Null(line, nameof(line));
        line.SetWishlist(this);
        _wishlistLines.Add(line);
    }
    
    public void AddWishlistLine(List<WishlistLine> lines)
    {
        foreach (var line in lines)
        {
            AddWishlistLine(line);
        }
    }
    
    
    // Removing
    public void RemoveWishlistLine(WishlistLine line)
    {
        Guard.Against.Null(line, nameof(line));
        _wishlistLines.Remove(line);
    }
    
    public void RemoveWishlistLine(List<WishlistLine> lines)
    {
        foreach (var line in lines)
        {
            RemoveWishlistLine(line);
        }
    }
    
    
    // Has
    public bool HasWishlistLine(WishlistLine line)
    {
        return _wishlistLines.Find(x => x.Id == line.Id) != null;
    }
    
    
    
    // Setters
    public void SetCustomer(Customer customer)
    {
        Guard.Against.Null(customer);
        Customer = customer;
        CustomerId = customer.Id;
    }
}
