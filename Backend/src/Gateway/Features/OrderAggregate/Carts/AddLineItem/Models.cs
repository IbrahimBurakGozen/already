using FastEndpoints;
using FluentValidation;
using Gateway.Features.OrderAggregate.Dto;
namespace Gateway.Features.OrderAggregate.Carts.AddLineItem;

public class Request
{
    public Guid CartId { get; set; }
    
    public CartLineRequest Line { get; set; }
    
    public class CartLineRequest
    {
        public Guid Id { get; set; }
        public int Quantity { get; set; }
    }
}

public class Validator: Validator<Request>
{
    public Validator()
    {
        RuleFor(x => x.CartId)
            .NotEmpty()
            .WithMessage("CartId is required");
        RuleFor(x => x.Line)
            .NotEmpty()
            .WithMessage("LineItems is required")
            .Must(x => x.Id != Guid.Empty)
            .WithMessage("LineItem Id is required")
            .Must(x => x.Quantity > 0)
            .WithMessage("LineItem Quantity is required");
        

    }
}

public class Response
{
    public CartDto Cart { get; set; }
}