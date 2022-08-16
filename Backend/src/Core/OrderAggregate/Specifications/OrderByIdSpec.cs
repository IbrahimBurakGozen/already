using Ardalis.Specification;
namespace Core.OrderAggregate.Specifications;

public class OrderByIdSpec : Specification<Order>, ISingleResultSpecification
{
    public OrderByIdSpec(Guid orderId)
    {
        Query
            .Where(x => x.Id == orderId)
            .Include(x => x.Customer)
            .Include(x => x.OrderItems).ThenInclude(x => x.ProductVariant).ThenInclude(x => x.Product);
    }
}
