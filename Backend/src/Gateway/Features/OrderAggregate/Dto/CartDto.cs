using Core.OrderAggregate;
namespace Gateway.Features.OrderAggregate.Dto;

public class CartDto : BaseDto
{
    public IEnumerable<CartLineDto> Lines { get; set; }

    public CartDto(Cart cart) : base(cart.Id, cart.CreatedAt, cart.UpdatedAt)
    {
        Lines = cart.CartLines.Select(x => new CartLineDto(x));
    }
    
}
