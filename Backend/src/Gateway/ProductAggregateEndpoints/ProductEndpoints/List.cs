using Ardalis.ApiEndpoints;
using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using Gateway.ProductAggregateEndpoints.Dto;
using Microsoft.AspNetCore.Mvc;
using Shared.Interfaces;
using Swashbuckle.AspNetCore.Annotations;
namespace Gateway.ProductAggregateEndpoints.ProductEndpoints;

public class List : EndpointBaseAsync
    .WithRequest<ListProductRequest>
    .WithActionResult<BaseProductResponseList>
{
    private readonly IRepository<Product> _repository;
  
    public List(IRepository<Product> repository)
    {
        _repository = repository;
    }

    [HttpGet(BaseRequest.ProductRoute)]
    [SwaggerOperation(
        Summary = "Gets a list of Products",
        Description = "Gets a list of Products",
        Tags = new[] { "Products" })
    ]
    public override async Task<ActionResult<BaseProductResponseList>> HandleAsync([FromHeader] ListProductRequest request, CancellationToken cancellationToken = new CancellationToken())
    {
        if(request?.Category == null) return BadRequest("Category is required");
        
        var spec = new ProductByCategorySpec(request.Category ?? Guid.Empty);
        var products = await _repository.ListAsync(spec);
        var filteredProducts = products.FindAll(x => x.State == ProductState.Active);

        var dto = filteredProducts.Select(product => new ProductDto(product)).ToList();
        var response = new BaseProductResponseList(dto);
        return response;
    }

    
}
