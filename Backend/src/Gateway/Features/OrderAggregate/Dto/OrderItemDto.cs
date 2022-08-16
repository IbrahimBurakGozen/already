using Core.OrderAggregate;
using Gateway.Features.ProductAggregate.Dto;
namespace Gateway.Features.OrderAggregate.Dto;

public class OrderItemDto : BaseDto
{
    public double Price { get; set; }
    public int Quantity { get; set; }

    public ProductVariantDto ProductVariant { get; set; }
    
    
    public OrderItemDto(OrderItem orderItem): base(orderItem.Id, orderItem.CreatedAt, orderItem.UpdatedAt)
    {
        Price = orderItem.Price;
        Quantity = orderItem.OrderQuantity;
        ProductVariant = new ProductVariantDto(orderItem.ProductVariant);
    }
}
