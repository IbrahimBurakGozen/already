using Core.OrderAggregate;
namespace Gateway.Features.OrderAggregate.Dto;

public class WishlistDto: BaseDto
{
    public IEnumerable<WishlistLineDto> Lines { get; set; }

    public WishlistDto(Wishlist wishlist) : base(wishlist.Id, wishlist.CreatedAt, wishlist.UpdatedAt)
    {
        Lines = wishlist.WishlistLines.Select(x => new WishlistLineDto(x));
    }
}
