using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class ProductVariantByIdSpec: Specification<ProductVariant>, ISingleResultSpecification
{
    public ProductVariantByIdSpec(Guid productVariantId)
    {
        Query
            .Where(x => x.Id == productVariantId);
    }
  
}
// .Include(x=>x.Product).ThenInclude(x => x.ProductImages);
