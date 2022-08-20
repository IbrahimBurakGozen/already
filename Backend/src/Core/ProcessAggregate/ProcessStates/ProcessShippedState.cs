using Core.ProcessAggregate.Exceptions;
namespace Core.ProcessAggregate.ProcessStates;

public class ProcessShippedState : IProcessState
{
    public ProcessShippedState(Process order): base(order)
    {
    }

    public override void Pick()
    {
        throw new ProcessStateNotPermittedException(this, nameof(ProcessPickedState));
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
        Process.SetState(new ProcessDeliveredState(Process));
    }
}
