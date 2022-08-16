using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.ProductAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.ProductAggregate.Categories.GetCategories;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Category> _repository;
  
    public Endpoint(IRepository<Category> repository)
    {
        _repository = repository;
    }
    
    public override void Configure()
    {
        Get("/categories");
        AllowAnonymous();
    }
    
    
    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        if(req.Parent == null)
        {
            Response.Parent = null;
            Response.Categories = await GetWithoutParent(ct);
            await SendAsync(Response, cancellation: ct);
            return;
        }
        //
        //
        // With Parent
        var spec = new CategoryByIdSpec(req.Parent ?? Guid.Empty);
        var parent = await _repository.GetBySpecAsync(spec, ct);

        if (parent == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }
 
        var parentDto = new CategoryDto(parent);
        var childrenDto = parent.Children.Select(x => new CategoryWithRelationsDto(x)).ToList();
     
        Response.Parent = parentDto;
        Response.Categories = childrenDto;
        await SendAsync(Response, cancellation: ct);
    }

    private async Task<List<CategoryWithRelationsDto>> GetWithoutParent(CancellationToken ct)
    {
        var spec = new CategoryRootSpec();
        var categories = await _repository.ListAsync(spec, ct);
        var dtos  = categories.Select(x => new CategoryWithRelationsDto(x)).ToList();
        
        return dtos;
    }
   
}
