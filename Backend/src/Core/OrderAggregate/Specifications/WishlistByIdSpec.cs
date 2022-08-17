using Ardalis.Specification;
namespace Core.OrderAggregate.Specifications;

public class WishlistByIdSpec: Specification<Wishlist>, ISingleResultSpecification
{
    public WishlistByIdSpec(Guid wishlistId)
    {
        Query
            .Where(x => x.Id == wishlistId)
            .Include(x => x.WishlistLines).ThenInclude(x => x.ProductVariant).ThenInclude(x => x.Product).ThenInclude(x => x.ProductImages)
            .Include(x => x.Customer);
    }
}