using Core.OrderAggregate.Events;
using Core.OrderAggregate.OrderStates;
using MediatR;
namespace Core.ProcessAggregate.Handlers;

public class OrderPlacedHandler : INotificationHandler<OrderPlacedEvent>
{
    public Task Handle(OrderPlacedEvent notification, CancellationToken cancellationToken)
    {
        var state = new OrderPlacedState(notification.CreatedOrder);
        notification.CreatedOrder.SetState(state);
        throw new NotImplementedException();
    }
}
