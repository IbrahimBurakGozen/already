using Core.ProcessAggregate.Exceptions;
namespace Core.ProcessAggregate.ProcessStates;

public class ProcessPickedState : IProcessState
{
    public ProcessPickedState(Process order): base(order)
    {
    }

    public override void Pick()
    {
        throw new ProcessStateNotPermittedException(this, nameof(ProcessPickedState));
    }

    public override void Pack()
    {
        Process.SetState(new ProcessPackedState(Process));
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
