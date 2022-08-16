using FastEndpoints;
using FluentValidation;
using Gateway.Features.OrderAggregate.Dto;
using Microsoft.AspNetCore.Mvc;
namespace Gateway.Features.OrderAggregate.Orders.GetOrderById;

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
            .WithMessage("Category is required")
            .NotEqual(Guid.Empty)
            .WithMessage("Category is required");
    }
}

public class Response
{
    // public CustomerDto? Customr { get; set; }
    public OrderDto Order { get; set; }
    
}