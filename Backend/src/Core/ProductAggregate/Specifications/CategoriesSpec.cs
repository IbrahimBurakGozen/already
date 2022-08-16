using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class CategoriesSpec: Specification<Category>
{
    public CategoriesSpec()
    {
        Query
            .Include(x => x.Parent)
            .Include(x => x.Children)
            .Include(x => x.Image);
    }
}

