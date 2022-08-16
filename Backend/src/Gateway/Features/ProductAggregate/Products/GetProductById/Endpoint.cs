using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.ProductAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.ProductAggregate.Products.GetProductById;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Product> _repository;
  
    public Endpoint(IRepository<Product> repository)
    {
        _repository = repository;
    }
    
    public override void Configure()
    {
        Get("/products/{Id}");
        AllowAnonymous();
    }
    
    
    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        var spec = new ProductByIdSpec(req.Id);
        var product = await _repository.GetBySpecAsync(spec, ct);

        if (product == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }
        
        var dto = new ProductDto(product);
        
        Response.Product = dto;
        await SendAsync(Response, cancellation: ct);
    }
}
