using Gateway.Features.ProductAggregate.Dto;
using Microsoft.AspNetCore.Mvc;
namespace Gateway.Features.ProductAggregate.Categories.GetCategories;

public class Request 
{
    [FromQuery]
    public Guid? Parent { get; set; }

}

public class Response
{
    public CategoryDto? Parent { get; set; }
    public IEnumerable<CategoryWithRelationsDto> Categories { get; set; }
    
}