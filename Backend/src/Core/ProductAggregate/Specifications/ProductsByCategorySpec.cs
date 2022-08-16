using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class ProductsByCategorySpec : Specification<Product>
{
    public ProductsByCategorySpec(Guid categoryId)
    {
        Query
            .Where(x => x.CategoryId == categoryId)
            // .Where(x => brandIds.Contains(x.BrandId))
            // .Where(x => shopIds.Contains(x.ShopId))
            .Where(x => x.State == ProductState.Active)
            .Include(x => x.Brand)
            .Include(x => x.Shop)
            .Include(x => x.Category)
            .Include(x => x.ProductImages)
            .Include(x => x.ProductVariants).ThenInclude(x=> x.ProductOptionValues).ThenInclude(x => x.ProductOption)
            .Include(x => x.ProductOptions).ThenInclude(x=> x.Values);
    }
}
// ,List<Guid> brandIds, List<Guid> shopIds