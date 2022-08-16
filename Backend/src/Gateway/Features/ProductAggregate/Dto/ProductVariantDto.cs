using Core.ProductAggregate;
namespace Gateway.Features.ProductAggregate.Dto;

public class ProductVariantDto
{
    public string Id { get; set; }
    public double Price { get;  set; }
    public int Quantity { get;  set; }
    public string? Sku { get;  set; }
    public string? Barcode { get;  set; }
    public Boolean Default { get; set; }
    public List<SelectedOptionDto> SelectedOptions { get; set; }

    public ProductVariantDto(ProductVariant productVariant, Boolean? defaultVariant = false)
    {
        Id = productVariant.Id.ToString();
        Price = productVariant.Price;
        Quantity = productVariant.StockQuantity;
        Sku = productVariant.Sku;
        Barcode = productVariant.Barcode;
        Default = defaultVariant ?? false;
        SelectedOptions = productVariant.ProductOptionValues.Select(x => new SelectedOptionDto(x)).ToList();
    }
}
