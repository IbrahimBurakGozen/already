using System.ComponentModel.DataAnnotations.Schema;
using Core.OrderAggregate;
using Core.ProcessAggregate.ProcessStates;
using Shared;
using Shared.Interfaces;

namespace Core.ProcessAggregate;

public class Process: BaseEntity, IAggregateRoot
{
    // Relations
    public Guid OrderId { get; set; }
    public Order Order { get; private set; }
    
    // Properties
    public DateTimeOffset ProcessPlacedDate { get; set; }
    
    // State
    [NotMapped]
    public IProcessState State { get; private set; }
    
    private string StateType
    {
        get => State.GetType().Name ?? nameof(ProcessPlacedState);
        set
        {
            var types = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(s => s.GetTypes())
                .Where(p => typeof(IProcessState).IsAssignableFrom(p)).ToList();
            var foundState = types.Find(x => x.Name == value);
            State = Activator.CreateInstance(foundState, this) as IProcessState ?? new ProcessPlacedState(this);
        }
    }
    
    
    
    // Constructors
    private Process()
    {
        ProcessPlacedDate = DateTimeOffset.Now;
        State = new ProcessPlacedState(this);
    }
    
    public Process(Order order) : this()
    {
        Order = order;
    }
    
    
    
    // State Methods
    public void Pick() => State.Pick();
    public void Pack() => State.Pack();
    public void Ship() => State.Ship();
    public void Deliver() => State.Deliver();
    
    
    // Setters
    public void SetState(IProcessState state)
    {
        State = state;
    }

}
