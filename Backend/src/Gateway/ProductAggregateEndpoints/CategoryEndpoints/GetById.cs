using Ardalis.ApiEndpoints;
using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using Gateway.ProductAggregateEndpoints.Dto;
using Gateway.ProductAggregateEndpoints.ProductEndpoints;
using Microsoft.AspNetCore.Mvc;
using Shared.Interfaces;
using Swashbuckle.AspNetCore.Annotations;
namespace Gateway.ProductAggregateEndpoints.CategoryEndpoints;

public class GetById 
    : EndpointBaseAsync
    .WithRequest<BaseRequestById>
    .WithActionResult<BaseCategoryResponse<CategoryDto>>
{
    private readonly IRepository<Category> _repository;
    
    public GetById(IRepository<Category> repository)
    {
        _repository = repository;
    }
    
    [HttpGet(BaseRequest.CategoryRoute + "/{Id}")]
    [SwaggerOperation(
        Summary = "Gets a single Category",
        Description = "Gets a single Category by Id",
        Tags = new[] { "Categories" })
    ]
    public override async Task<ActionResult<BaseCategoryResponse<CategoryDto>>> HandleAsync([FromRoute] BaseRequestById request, CancellationToken cancellationToken = new CancellationToken())
    {
        var spec = new CategoryByIdWithRelationsSpec(request.Id);
        var product = await _repository.GetBySpecAsync(spec, cancellationToken);
        if (product == null) return NotFound($"Order by id:{request.Id} not found");
        
        var dto = new CategoryDto(product);
        var response = new BaseCategoryResponse<CategoryDto>(dto);
        return Ok(response);
    }
}

