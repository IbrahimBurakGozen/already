using Core.ProcessAggregate.ProcessStates;
namespace Core.ProcessAggregate.Exceptions;

public class ProcessStateNotPermittedException : Exception
{
    public ProcessStateNotPermittedException(IProcessState thisState, string toState) :base($"Setting {toState.ToString()} is not permitted on {thisState.ToString()}") {}
}
