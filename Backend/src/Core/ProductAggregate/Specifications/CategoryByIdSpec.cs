using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class CategoryByIdSpec :Specification<Category>, ISingleResultSpecification
{
    public CategoryByIdSpec(Guid categoryId)
    {
        Query
            .Where(x => x.Id == categoryId)
            .Include(x => x.Parent)
            .Include(x => x.Children)
            .Include(x => x.Image);
    }
}
