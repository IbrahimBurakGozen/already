using Core.ProductAggregate;
namespace Gateway.Features.ProductAggregate.Dto;

public class ProductImageDto
{
    public string Url { get; set; }
    public string Alt { get; set; }

    public ProductImageDto(ProductImage productImage)
    {
        Url = productImage.Url;
        Alt = productImage.Alt;
    }
}
