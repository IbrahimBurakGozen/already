using Core.OrderAggregate;
namespace Gateway.Features.OrderAggregate.Dto;

public class OrderDto : BaseDto
{
    public string State { get; set; }
    public CustomerDto? Customer { get; set; }
    public IEnumerable<OrderItemDto> OrderItems { get; set; }

    
    public OrderDto(Order order): base(order.Id, order.CreatedAt, order.UpdatedAt)
    {
        State = order.State.GetType().Name;
        Customer = order.Customer != null ? new CustomerDto(order.Customer) : null;
        OrderItems = order.OrderItems.Select(x => new OrderItemDto(x));
    }
}
