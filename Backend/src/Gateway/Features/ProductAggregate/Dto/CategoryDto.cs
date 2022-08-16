using Core.ProductAggregate;
namespace Gateway.Features.ProductAggregate.Dto;

public class CategoryDto : BaseDto
{
    public string Title { get; set; }
    public string? Description { get; set; }
    
    public bool HasChildren { get; set; }
    public bool HasParent { get; set; }

    public CategoryDto? Parent { get; set; }
    public string? ParentId { get; set; }

    public ImageDto? Image { get; set; }



    public CategoryDto(Category category) : base(category.Id, category.CreatedAt, category.UpdatedAt)
    {
        Title = category.Title;
        Description = category.Description;
        HasChildren = category.Children is {Count: > 0};
        HasParent = category.Parent != null;
        
        // Next = category.Next;
        
        Parent = category.Parent is null ? null : new CategoryDto(category.Parent);
        ParentId = category.Parent?.Id.ToString();
        
        Image = category.Image is null ? null : new ImageDto(category.Image);
    }
}

public class CategoryWithRelationsDto : CategoryDto
{
    public List<CategoryDto>? Children { get; set; }
    
    public CategoryWithRelationsDto(Category category) : base(category)
    {
        Children = category.Children?.Select(c => new CategoryDto(c)).ToList();
    }
}

// public class CategoryListDto
// {
//     public CategoryDto? Parent { get; set; }
//     public List<CategoryWithRelationsDto>? Categories { get; set; }
//     
//     public CategoryListDto(List<Category> categories)
//     {
//         Categories = categories.Select(c => new CategoryWithRelationsDto(c)).ToList();
//     }
//     
//     public CategoryListDto(Category parent, List<Category> categories)
//     {
//         Parent = new CategoryDto(parent);
//         Categories = categories.Select(c => new CategoryWithRelationsDto(c)).ToList();
//     }
// }