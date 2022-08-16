using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.ProductAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.ProductAggregate.Products.GetProducts;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Product> _repository;
  
    public Endpoint(IRepository<Product> repository)
    {
        _repository = repository;
    }
    
    public override void Configure()
    {
        Get("/products");
        AllowAnonymous();
    }

    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        Console.WriteLine($"Category {req.Category}");
        var spec = new ProductsByCategorySpec(req.Category);
        var products = await _repository.ListAsync(spec, ct);
        var activeProducts = products.FindAll(x => x.State == ProductState.Active);
        
        Console.WriteLine($"Found {activeProducts.Count} products");

        var dtos = activeProducts.Select(p => new ProductDto(p)).ToList();
        
        Console.WriteLine($"Dtos {dtos.Count}");

        Response.Products = dtos;
        await SendAsync(Response, cancellation: ct);
    }
}

