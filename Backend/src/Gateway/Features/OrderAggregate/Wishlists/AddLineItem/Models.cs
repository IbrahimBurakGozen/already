using FastEndpoints;
using FluentValidation;
using Gateway.Features.OrderAggregate.Dto;
namespace Gateway.Features.OrderAggregate.Wishlists.AddLineItem;

public class Request
{
    public Guid WishlistId { get; set; }
    
    public WishlistineRequest Line { get; set; }
    
    public class WishlistineRequest
    {
        public Guid Id { get; set; }
    }
}

public class Validator: Validator<Request>
{
    public Validator()
    {
        RuleFor(x => x.WishlistId)
            .NotEmpty()
            .WithMessage("CartId is required");

        RuleFor(x => x.Line)
            .NotEmpty()
            .WithMessage("LineItems is required")
            .Must(x => x.Id != Guid.Empty)
            .WithMessage("LineItem Id is required");


    }
}

public class Response
{
    public WishlistDto Wishlist { get; set; }
}