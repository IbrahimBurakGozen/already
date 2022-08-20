using Ardalis.Specification;
namespace Core.OrderAggregate.Specifications;

public class CartByIdSpec: Specification<Cart>, ISingleResultSpecification
{
    public CartByIdSpec(Guid cartId)
    {
        Query
            .Where(x => x.Id == cartId && x.OrderPlaced == false)
            .Include(x => x.CartLines).ThenInclude(x => x.ProductVariant).ThenInclude(x => x.Product).ThenInclude(x => x.ProductImages)
            .Include(x => x.Customer);
    }
}
