using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class BrandSeedData
{
    public static readonly Brand[] Data = new Brand[]
    {
        new Brand("Coca Cola"), 
        new Brand("Fanta"),    
        new Brand("Sprite"),    
        new Brand("Everyday"),    
        new Brand("Lipton"),
    };
}
