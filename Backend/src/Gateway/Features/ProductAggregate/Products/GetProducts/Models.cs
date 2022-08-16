using FastEndpoints;
using FluentValidation;
using Gateway.Features.ProductAggregate.Dto;
using Microsoft.AspNetCore.Mvc;
namespace Gateway.Features.ProductAggregate.Products.GetProducts;

public class Request 
{
    [FromQuery]
    public Guid Category { get; set; }
    
    // [FromBody]
    // public List<Guid>? Brands { get; set; }
    //
    // [FromBody]
    // public List<Guid>? Shops { get; set; }
}

public class Validator: Validator<Request>
{
    public Validator()
    {
        RuleFor(x => x.Category)
            .NotEmpty()
            .WithMessage("Category is required")
            .NotEqual(Guid.Empty)
            .WithMessage("Category is required");
    }
}

public class Response
{
    public IEnumerable<ProductDto> Products { get; set; }
    
}