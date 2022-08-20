using Shared;
namespace Core.OrderAggregate.Events;

public class OrderPlacedEvent : BaseDomainEvent
{
    public Order CreatedOrder { get; set; }
    
    public OrderPlacedEvent(Order order)
    {
        CreatedOrder = order;
    }
}
