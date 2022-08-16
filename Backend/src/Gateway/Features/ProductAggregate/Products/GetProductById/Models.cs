using FastEndpoints;
using FluentValidation;
using Gateway.Features.ProductAggregate.Dto;
using Microsoft.AspNetCore.Mvc;
namespace Gateway.Features.ProductAggregate.Products.GetProductById;

public class Request 
{
    [FromRoute]
    public Guid Id { get; set; }
}

public class Validator: Validator<Request>
{
    public Validator()
    {
        RuleFor(x => x.Id)
            .NotEmpty()
            .WithMessage("Id is required")
            .NotEqual(Guid.Empty)
            .WithMessage("Id is required");

    }
}

public class Response
{
    public ProductDto Product { get; set; }
    
}