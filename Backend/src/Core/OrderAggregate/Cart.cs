using Ardalis.GuardClauses;
using Shared;
using Shared.Interfaces;
namespace Core.OrderAggregate;

public class Cart : BaseEntity, IAggregateRoot
{
    // Relations
    public Guid? CustomerId { get; private set; }
    public Customer? Customer { get; private set; }
    
    private readonly List<CartLine> _cartLines = new();
    public IReadOnlyCollection<CartLine> CartLines => _cartLines.AsReadOnly();

    
    // Constructors
    public Cart(){}
    
    public Cart(Customer customer)
    {
       SetCustomer(customer);
    }
    
    public Cart(CartLine line)
    {
        AddCartLine(line);
    }

    public Cart(List<CartLine> lines)
    {
        AddCartLine(lines);
    }

    public Cart(Customer customer, List<CartLine> lines)
    {
        SetCustomer(customer);
        AddCartLine(lines);
    }
    
    
    
    // Getters
    public double GetTotal()
    {
        return _cartLines.Sum(x => x.GetTotal());
    }
    

    // Adding
    public void AddCartLine(CartLine line)
    {
        Guard.Against.Null(line, nameof(line));
        line.SetCart(this);
        _cartLines.Add(line);
    }
    
    public void AddCartLine(List<CartLine> lines)
    {
        foreach (var line in lines)
        {
            AddCartLine(line);
        }
    }
    
    
    // Removing
    public void RemoveCartLine(CartLine line)
    {
        Guard.Against.Null(line, nameof(line));
        _cartLines.Remove(line);
    }
    
    public void RemoveCartLine(List<CartLine> lines)
    {
        foreach (var line in lines)
        {
            RemoveCartLine(line);
        }
    }
    
    
    // Has
    public bool HasCartLine(CartLine line)
    {
        return _cartLines.Find(x => x.Id == line.Id) != null;
    }
    
    
    
    // Setters
    public void SetCustomer(Customer customer)
    {
        Guard.Against.Null(customer);
        Customer = customer;
        CustomerId = customer.Id;
    }
}
