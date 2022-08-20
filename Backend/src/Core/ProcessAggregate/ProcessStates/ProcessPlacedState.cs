using Core.ProcessAggregate.Exceptions;
namespace Core.ProcessAggregate.ProcessStates;

public class ProcessPlacedState : IProcessState
{
    public ProcessPlacedState(Process order): base(order)
    {
    }

    public override void Pick()
    {
        Process.SetState(new ProcessPickedState(Process));
    }

    public override void Pack()
    {
        throw new ProcessStateNotPermittedException(this, nameof(ProcessPackedState));
    }

    public override void Ship()
    {
        throw new ProcessStateNotPermittedException(this, nameof(ProcessShippedState));
    }

    public override void Deliver()
    {
        throw new ProcessStateNotPermittedException(this, nameof(ProcessDeliveredState));
    }
}
