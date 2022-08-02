using Ardalis.ApiEndpoints;
using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using Gateway.ProductAggregateEndpoints.Dto;
using Microsoft.AspNetCore.Mvc;
using Shared.Interfaces;
using Swashbuckle.AspNetCore.Annotations;
namespace Gateway.ProductAggregateEndpoints.CategoryEndpoints;

public class List : EndpointBaseAsync
    .WithRequest<ListCategoryRequest>
    .WithActionResult<BaseCategoryResponseList>
{
    private readonly IRepository<Category> _repository;


    public List(IRepository<Category> repository )
    {
        _repository = repository;

    }

    [HttpGet(BaseRequest.CategoryRoute)]
    [SwaggerOperation(
        Summary = "Gets a list of Categories",
        Description = "Gets a list of Categories",
        Tags = new[] { "Categories" })
    ]
    public override async Task<ActionResult<BaseCategoryResponseList>>  HandleAsync([FromHeader] ListCategoryRequest request, CancellationToken cancellationToken = new CancellationToken())
    {
        if(request.Parent == null)
        {
            var rootSpec = new CategoryRootSpec();
            var rootCategories = await _repository.ListAsync(rootSpec, cancellationToken);
            
            var rootDto  = rootCategories.Select(x => new CategoryWithRelationsDto(x)).ToList();
            var rootResponse = new BaseCategoryResponseList(rootDto);
            return Ok(rootResponse);
        }
        
        var childrenSpec = new CategoryByIdWithRelationsSpec(request.Parent ?? Guid.Empty);
        var parent = await _repository.GetBySpecAsync(childrenSpec, cancellationToken);
        
        if(parent == null) return NotFound("Category with id " + request.Parent + " not found");
 
        var childrenDto = parent.Children.Select(x => new CategoryWithRelationsDto(x)).ToList();
        var parentDto = new CategoryDto(parent);
        var childrenResponse = new BaseCategoryResponseList(parentDto ,childrenDto);
        return Ok(childrenResponse);
    }

    
}
