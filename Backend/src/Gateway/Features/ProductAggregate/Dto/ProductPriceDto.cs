using Core.ProductAggregate;
namespace Gateway.Features.ProductAggregate.Dto;

public class ProductPriceDto
{
    public double MinPrice { get; set; }
    public double MaxPrice { get; set; }
    
    public ProductPriceDto(Product product)
    {
        MinPrice = product.ProductVariants.Min( x => x.Price);
        MaxPrice = product.ProductVariants.Max( x => x.Price);
    }
}
