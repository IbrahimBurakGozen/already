using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class ProductByCategorySpec : Specification<Product>
{
    public ProductByCategorySpec(Guid categoryId)
    {
        Query
            .Where(x => x.CategoryId == categoryId)
            .Include(x => x.Brand)
            .Include(x => x.Shop)
            .Include(x => x.Category)
            .Include(x => x.ProductVariants).ThenInclude(x=> x.ProductOptionValues)
            .Include(x => x.ProductOptions).ThenInclude(x=> x.Values);
    }
}