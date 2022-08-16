using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class ProductByIdSpec : Specification<Product>, ISingleResultSpecification
{
    public ProductByIdSpec(Guid productId)
    {
        Query
            .Where(x => x.Id == productId)
            .Include(x => x.Brand)
            .Include(x => x.Shop)
            .Include(x => x.Category)
            .Include(x => x.ProductVariants).ThenInclude(x=> x.ProductOptionValues).ThenInclude(x => x.ProductOption)
            .Include(x => x.ProductOptions).ThenInclude(x=> x.Values)
            .Include(x => x.ProductImages);
    }
}
