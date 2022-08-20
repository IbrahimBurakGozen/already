using Ardalis.GuardClauses;

namespace Core.ProcessAggregate.ProcessStates;

public abstract class IProcessState
{
    // Properties
    protected Process Process { get; init; }
    
    
    
    // Constructors
    protected IProcessState(Process process)
    {
        Process = Guard.Against.Null(process, nameof(process));
    }
    
    
    
    // Abstract methods
    public abstract void Pick();
    public abstract void Pack();
    public abstract void Ship();
    public abstract void Deliver();
}
