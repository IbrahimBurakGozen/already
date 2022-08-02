using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class ProductOptionsSeedData
{
    public static readonly ProductOption[] Data = new ProductOption[]
    {
        new ProductOption("Size", new List<ProductOptionValue>()
        {
            new ProductOptionValue("S"),
            new ProductOptionValue("M"),
        }),
        new ProductOption("Material", new List<ProductOptionValue>()
        {
            new ProductOptionValue("Rubber"),
            new ProductOptionValue("Metal"),
        }),
    };
}
