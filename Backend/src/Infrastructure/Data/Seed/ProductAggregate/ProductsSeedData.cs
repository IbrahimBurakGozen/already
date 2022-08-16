using Bogus;
using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class ProductsSeedData
{
    public static List<Product> Data = new();


    public static void Init(int count, List<Brand> brands, List<Category> categories, List<Shop> shops)
    {
        var data = new Faker<Product>()
            .CustomInstantiator(
                f => 
                    new Product(
                        f.Commerce.ProductName(),
                        f.Lorem.Paragraph(),
                        f.PickRandom(brands),
                        f.PickRandom(categories),
                        f.PickRandom(shops),
                        new ProductVariant(Math.Round(f.Random.Double(1.0, 100.0), 2),f.Random.Number(1, 100)),
                        f.Make<ProductImage>(10, () => new ProductImage(f.Image.PicsumUrl(width: 1000, height: 1000), "Alt Text")) as List<ProductImage> ?? new List<ProductImage>()
                    ));
        
        
        
        var sizeOption = new ProductOption(
            "Size",
            new List<ProductOptionValue>()
            {
                new ProductOptionValue("S"),
                new ProductOptionValue("M"),
            });
        var materialOption = new ProductOption(
            "Material",
            new List<ProductOptionValue>()
            {
                new ProductOptionValue("Rubber"),
                new ProductOptionValue("Metal"),
            });

        var dataWithOptions = new Faker<Product>()
            .CustomInstantiator(
                f => 
                    new Product(
                        f.Commerce.ProductName(),
                        f.Lorem.Paragraph(),
                        f.PickRandom(brands),
                        f.PickRandom(categories),
                        f.PickRandom(shops),
                        new List<ProductVariant>()
                        {
                            new ProductVariant( Math.Round(f.Random.Double(1.0, 100.0), 2),f.Random.Number(1, 100), new List<ProductOptionValue>()
                            {
                                sizeOption.Values.First(),
                                materialOption.Values.First(),
                            }),
                            new ProductVariant( Math.Round(f.Random.Double(1.0, 100.0), 2),f.Random.Number(1, 100), new List<ProductOptionValue>()
                            {
                                sizeOption.Values.First(),
                                materialOption.Values.Last(),
                            }),
                            new ProductVariant( Math.Round(f.Random.Double(1.0, 100.0), 2),f.Random.Number(1, 100), new List<ProductOptionValue>()
                            {
                                sizeOption.Values.Last(),
                                materialOption.Values.First(),
                            }),
                            new ProductVariant( Math.Round(f.Random.Double(1.0, 100.0), 2),f.Random.Number(1, 100), new List<ProductOptionValue>()
                            {
                                sizeOption.Values.Last(),
                                materialOption.Values.Last(),
                            }),
                        },
                        f.Make<ProductImage>(10, () => new ProductImage(f.Image.PicsumUrl(width: 1000, height: 1000), "Alt Text")) as List<ProductImage> ?? new List<ProductImage>()
                    ));
        
        Data.AddRange(data.Generate(count));
        Data.AddRange(dataWithOptions.Generate(count));
    }
    
    
    
    
    // public static Product[] Data(Brand[] brands, Category[] categories, Shop[] shops, ProductOption[] productOptions)
    // {
    //     return new [] {
    //     new Product(
    //         "Coca Cola 200ml Light",
    //         "Dit is een product beschrijving",
    //         brands[0],
    //         categories[0],
    //         shops[0],
    //         new ProductVariant(20,80)),
    //     new Product(
    //         "Coca Cola 200ml Light",
    //         "Dit is een product beschrijving",
    //         brands[1],
    //         categories[1],
    //         shops[1],
    //         new ProductVariant(30,50)),
    //     new Product(
    //         "Coca Cola 200ml Light",
    //         "Dit is een product beschrijving",
    //         brands[2],
    //         categories[2],
    //         shops[2],
    //         new ProductVariant(50,60)),
    //     new Product(
    //         "Coca Cola 200ml Light",
    //         "Dit is een product beschrijving",
    //         brands[3],
    //         categories[3],
    //         shops[3],
    //         new ProductVariant(10,90)),
    //     new Product(
    //         "Coca Cola 200ml Light",
    //         "Dit is een product beschrijving",
    //         brands[4],
    //         categories[4],
    //         shops[4],
    //         new List<ProductVariant>()
    //         {
    //             new ProductVariant( 40, 90, new List<ProductOptionValue>()
    //             {
    //                productOptions[0].Values.First(),
    //                productOptions[1].Values.First(),
    //             }),
    //             new ProductVariant( 40, 90, new List<ProductOptionValue>()
    //             {
    //                productOptions[0].Values.First(),
    //                productOptions[1].Values.Last(),
    //             }),
    //             new ProductVariant( 40, 90, new List<ProductOptionValue>()
    //             {
    //                productOptions[0].Values.Last(),
    //                productOptions[1].Values.First(),
    //             }),
    //             new ProductVariant( 40, 90, new List<ProductOptionValue>()
    //             {
    //                productOptions[0].Values.Last(),
    //                productOptions[1].Values.Last(),
    //             }),
    //         })
    // };
    // }
    //      

}
