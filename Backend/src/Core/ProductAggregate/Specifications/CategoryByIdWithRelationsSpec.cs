using Ardalis.Specification;
namespace Core.ProductAggregate.Specifications;

public class CategoryByIdWithRelationsSpec :Specification<Category>, ISingleResultSpecification
{
    public CategoryByIdWithRelationsSpec(Guid categoryId)
    {
        Query
            .Where(x => x.Id == categoryId)
            .Include(x => x.Parent)
            .Include(x => x.Children)
            .Include(x => x.Image);
    }
}
