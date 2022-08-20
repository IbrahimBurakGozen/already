using FastEndpoints;
using FluentValidation;
using Gateway.Features.OrderAggregate.Dto;
using Microsoft.AspNetCore.Mvc;
namespace Gateway.Features.OrderAggregate.Orders.Create;

public class Request 
{
    public Guid CartId { get; set; }
}

public class Validator: Validator<Request>
{
    public Validator()
    {
        RuleFor(x => x.CartId)
            .NotEmpty()
            .WithMessage("CartId is required")
            .NotEqual(Guid.Empty)
            .WithMessage("CartId is required");
    }
}

public class Response
{
    public OrderDto Order { get; set; }
    
}