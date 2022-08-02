using Gateway.ProductAggregateEndpoints.Dto;
namespace Gateway.ProductAggregateEndpoints.CategoryEndpoints;

public class BaseCategoryResponse<T> where T : CategoryDto
{
    public T Category { get; set; }

    public BaseCategoryResponse(T category)
    {
        Category = category;
    }
}

public class BaseCategoryResponseList
{
    public CategoryDto? Parent { get; set; }
    public List<CategoryWithRelationsDto> Categories { get; set; }
    
    public BaseCategoryResponseList(List<CategoryWithRelationsDto> categories)
    {
        Categories = categories;
    }

    public BaseCategoryResponseList(CategoryDto parent ,List<CategoryWithRelationsDto> categories)
    {
        Parent = parent;
        Categories = categories;
    }
}
