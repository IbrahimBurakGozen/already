using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class CategoryWithRelationsSpec: Specification<Category>
{
    public CategoryWithRelationsSpec()
    {
        Query
            .Include(x => x.Parent)
            .Include(x => x.Children)
            .Include(x => x.Image);
    }
}

