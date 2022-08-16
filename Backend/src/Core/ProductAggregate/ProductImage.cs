using Ardalis.GuardClauses;
using Shared;
namespace Core.ProductAggregate;

public class ProductImage : BaseEntity
{
    // Relations
    public Guid? ProductId { get; private set; }
    public Product? Product { get; private set; }


    // Properties
    public string Url { get; private set; }
    public string Alt { get; private set; }

    
    // Constructors
    public ProductImage(string url, string alt)
    {
        Url = Guard.Against.NullOrEmpty(url, nameof(url));
        Alt = Guard.Against.NullOrEmpty(alt, nameof(alt));;
    }
    
    
    // Setters
    public void SetProduct(Product product)
    {
        Guard.Against.Null(product);
        Product = product;
        ProductId = product.Id;
    }
}
