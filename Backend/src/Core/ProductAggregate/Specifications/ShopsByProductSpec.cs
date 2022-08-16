using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class ShopsByProductSpec : Specification<Shop>
{
    public ShopsByProductSpec(Guid productId)
    {
        // Query.Where(x => x. == productId);
    }
}
