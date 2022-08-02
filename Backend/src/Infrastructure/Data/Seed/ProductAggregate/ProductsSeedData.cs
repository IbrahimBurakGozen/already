using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class ProductsSeedData
{
    public static Product[] Data(Brand[] brands, Category[] categories, Shop[] shops, ProductOption[] productOptions)
    {
        return new [] {
        new Product(
            "Coca Cola 200ml Light",
            "Dit is een product beschrijving",
            brands[0],
            categories[0],
            shops[0],
            new ProductVariant(20,80)),
        new Product(
            "Coca Cola 200ml Light",
            "Dit is een product beschrijving",
            brands[1],
            categories[1],
            shops[1],
            new ProductVariant(30,50)),
        new Product(
            "Coca Cola 200ml Light",
            "Dit is een product beschrijving",
            brands[2],
            categories[2],
            shops[2],
            new ProductVariant(50,60)),
        new Product(
            "Coca Cola 200ml Light",
            "Dit is een product beschrijving",
            brands[3],
            categories[3],
            shops[3],
            new ProductVariant(10,90)),
        new Product(
            "Coca Cola 200ml Light",
            "Dit is een product beschrijving",
            brands[4],
            categories[4],
            shops[4],
            new List<ProductVariant>()
            {
                new ProductVariant( 40, 90, new List<ProductOptionValue>()
                {
                   productOptions[0].Values.First(),
                   productOptions[1].Values.First(),
                }),
                new ProductVariant( 40, 90, new List<ProductOptionValue>()
                {
                   productOptions[0].Values.First(),
                   productOptions[1].Values.Last(),
                }),
                new ProductVariant( 40, 90, new List<ProductOptionValue>()
                {
                   productOptions[0].Values.Last(),
                   productOptions[1].Values.First(),
                }),
                new ProductVariant( 40, 90, new List<ProductOptionValue>()
                {
                   productOptions[0].Values.Last(),
                   productOptions[1].Values.Last(),
                }),
            })
    };
    }
         
   
}
