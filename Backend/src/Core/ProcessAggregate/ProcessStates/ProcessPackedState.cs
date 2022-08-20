using Core.ProcessAggregate.Exceptions;
namespace Core.ProcessAggregate.ProcessStates;

public class ProcessPackedState :IProcessState
{
    public ProcessPackedState(Process order): base(order)
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
        Process.SetState(new ProcessShippedState(Process));
    }

    public override void Deliver()
    {
        throw new ProcessStateNotPermittedException(this, nameof(ProcessDeliveredState));
    }
}
