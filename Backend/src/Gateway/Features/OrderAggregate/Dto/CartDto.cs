using Core.OrderAggregate;
namespace Gateway.Features.OrderAggregate.Dto;

public class CartDto : BaseDto
{
    public double TotalPrice { get; set; }
    public IEnumerable<CartLineDto> Lines { get; set; }

    public CartDto(Cart cart) : base(cart.Id, cart.CreatedAt, cart.UpdatedAt)
    {
        TotalPrice = cart.GetTotal();
        Lines = cart.CartLines.Select(x => new CartLineDto(x));
    }
    
}
