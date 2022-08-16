using Core.ProductAggregate;
namespace Gateway.Features.ProductAggregate.Dto;

public class ProductDto : BaseDto
{
    public string Title { get; set; }
    public string Description { get; set; }
    public ProductPriceDto Price { get; set; }
    public ProductImageDto? FeaturedImage { get; set; }

    public BrandDto? Brand { get; set; }
    public CategoryDto? Category { get; set; }
    public ShopDto? Shop { get; set; }

    public IEnumerable<ProductVariantDto> Variants { get; set; }
    public IEnumerable<ProductOptionDto> Options { get; set; }
    public IEnumerable<ProductImageDto> Images { get; set; }

    public ProductDto(Product product):base(product.Id, product.CreatedAt,product.UpdatedAt)
    {
        Title = product.Title;
        Description = product.Description;
        Price = new ProductPriceDto(product);

        Brand = new BrandDto(product.Brand);
        Category = new CategoryDto(product.Category);
        Shop = new ShopDto(product.Shop);
        
        Variants = product.ProductVariants.Count > 1 ? 
            product.ProductVariants.Select(x=> new ProductVariantDto(x)) : 
            new List<ProductVariantDto>(){ new (product.ProductVariants.First(), true)};
        
        Options = product.ProductOptions.Select(x => new ProductOptionDto(x));
        
        var images =  product.ProductImages.Select(x => new ProductImageDto(x));
        Images = images;
        FeaturedImage = images.FirstOrDefault();
    }
}

