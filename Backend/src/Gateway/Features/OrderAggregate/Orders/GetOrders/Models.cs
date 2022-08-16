using FastEndpoints;
using FluentValidation;
using Gateway.Features.OrderAggregate.Dto;
using Microsoft.AspNetCore.Mvc;
namespace Gateway.Features.OrderAggregate.Orders.GetOrders;

public class Request 
{
    [FromQuery]
    public Guid CustomerId { get; set; }

}

public class Validator: Validator<Request>
{
    public Validator()
    {
        RuleFor(x => x.CustomerId)
            .NotEmpty()
            .WithMessage("Category is required")
            .NotEqual(Guid.Empty)
            .WithMessage("Category is required");
    }
}

public class Response
{
    // public CustomerDto? Customr { get; set; }
    public IEnumerable<OrderDto> Orders { get; set; }
    
}