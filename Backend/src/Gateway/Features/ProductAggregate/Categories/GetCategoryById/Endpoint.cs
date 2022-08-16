using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.ProductAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.ProductAggregate.Categories.GetCategoryById;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Category> _repository;
  
    public Endpoint(IRepository<Category> repository)
    {
        _repository = repository;
    }
    
    public override void Configure()
    {
        Get("/categories/{Id}");
        AllowAnonymous();
    }
    
    
    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
      
        var spec = new CategoryByIdSpec(req.Id);
        var product = await _repository.GetBySpecAsync(spec, ct);

        if (product == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }
        
        var dto = new CategoryDto(product);
        
        Response.Category = dto;
        await SendAsync(Response, cancellation: ct);
    }


   
}
