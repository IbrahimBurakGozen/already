using Ardalis.Specification;
namespace Core.OrderAggregate.Specifications;

public class OrdersByCustomerSpec : Specification<Order>
{
    public OrdersByCustomerSpec(Guid customerId)
    {
        Query
            .Where(x => x.CustomerId == customerId)
            .Include(x => x.OrderItems).ThenInclude(x => x.ProductVariant)
            .Include(x => x.Customer);
    }
}
