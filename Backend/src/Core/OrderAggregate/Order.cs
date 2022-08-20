using System.ComponentModel.DataAnnotations.Schema;
using Ardalis.GuardClauses;
using Core.OrderAggregate.Events;
using Core.OrderAggregate.OrderStates;
using Shared;
using Shared.Interfaces;
namespace Core.OrderAggregate;

public class Order : BaseEntity, IAggregateRoot
{
    // Relations
    public Guid? CustomerId { get; private set; }
    public Customer? Customer { get; private set; }
    
    public Guid? CartId { get; private set; }
    public Cart? Cart { get; private set; }
    
    private List<OrderItem> _orderItems = new();
    public IReadOnlyCollection<OrderItem> OrderItems => _orderItems.AsReadOnly();
    
    
    // State
    [NotMapped]
    public IOrderState State { get; private set; }

    private string StateType
    {
        get => State.GetType().Name ?? nameof(OrderPlacedState);
        set
        {
            var types = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(s => s.GetTypes())
                .Where(p => typeof(IOrderState).IsAssignableFrom(p)).ToList();
            var foundState = types.Find(x => x.Name == value);
            State = Activator.CreateInstance(foundState, this) as IOrderState ?? new OrderPlacedState(this);
        }
    }


    // Properties
    public DateTimeOffset OrderPlacedDate { get; set; }


    // Constructors
    private Order()
    {
        OrderPlacedDate = DateTimeOffset.Now;
        State = new OrderPlacedState(this);
    }

    public Order(List<OrderItem> orderItems) :this()
    {
        AddOrderItem(orderItems);
        Events.Add(new OrderPlacedEvent(this));
    }
    
    public Order(Cart cart) :this()
    {
        _orderItems = cart.CartLines.Select(x => new OrderItem(x.Quantity, x.ProductVariant)).ToList();
        SetCart(cart);
        Events.Add(new OrderPlacedEvent(this));
    }
    
    public Order(List<OrderItem> orderItems, Customer customer) :this(orderItems)
    {
        SetCustomer(customer);
    }
    
    public Order( Cart cart, Customer customer) :this(cart)
    {
        SetCustomer(customer);
    }


    
    // State Methods
    public void Process() => State.ProcessOrder();
    public void Ship() => State.ShipOrder();
    public void Receive() => State.ReceiveOrder();
    

    
    // Adding
    private void AddOrderItem(OrderItem orderItem)
    {
        Guard.Against.Null(orderItem, nameof(orderItem));
        orderItem.SetOrder(this);
        _orderItems.Add(orderItem);
    }
    
    private void AddOrderItem(List<OrderItem> orderItems)
    {
        foreach (var orderItem in orderItems)
        {
            AddOrderItem(orderItem);
        }
    }
    
    
    
    // Setters
    public void SetState(IOrderState state)
    {
        State = state;
    }
    
    public void SetCustomer(Customer customer)
    {
        Guard.Against.Null(customer);
        Customer = customer;
        CustomerId = customer.Id;
    }
    
    public void SetCart(Cart cart)
    {
        Guard.Against.Null(cart);
        Cart = cart;
        CartId = cart.Id;
    }
}
