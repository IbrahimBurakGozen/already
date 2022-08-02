using Ardalis.GuardClauses;
using Shared;
namespace Core.ProductAggregate;

public class Image : BaseEntity
{
    public string Url { get; private set; }
    public string Alt { get; private set; }
    
    public Image(string url, string alt)
    {
        Url = Guard.Against.NullOrEmpty(url, nameof(url));
        Alt = Guard.Against.NullOrEmpty(alt, nameof(alt));
    }
}
