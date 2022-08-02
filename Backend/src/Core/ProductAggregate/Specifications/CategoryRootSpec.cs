using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class CategoryRootSpec: Specification<Category>
{
    public CategoryRootSpec()
    {
        Query
            .Where(x => x.ParentId == null)
            .Include(x => x.Children)
            .Include(x => x.Image);
    }
}
