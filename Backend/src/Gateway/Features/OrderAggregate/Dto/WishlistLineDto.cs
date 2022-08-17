using Core.OrderAggregate;
using Gateway.Features.ProductAggregate.Dto;
namespace Gateway.Features.OrderAggregate.Dto;

public class WishlistLineDto
{
    public string Id { get; set; }
    public string ProductId { get; set; }
    public string VariantId { get; set; }
    
    public string Title { get; set; }
    public double Price { get; set; }
    public string Description { get; set; }
    
    public ProductImageDto? Image { get; set; }


    public WishlistLineDto(WishlistLine line)
    {
        Id = line.Id.ToString();
        ProductId = line.ProductVariant.Product?.Id.ToString() ?? "";
        VariantId = line.ProductVariantId.ToString();
        
        Title = line.ProductVariant.Product?.Title ?? "";
        Price = line.ProductVariant.Price;
        Description = line.ProductVariant.Product?.Description ?? "";
           
        if(line.ProductVariant.Product != null && line.ProductVariant.Product.ProductImages.Any())
        {
            Image = new ProductImageDto(line.ProductVariant.Product.ProductImages.First());
        }
    }
}
