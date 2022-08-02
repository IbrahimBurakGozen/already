using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class ShopSeedData
{
    public static readonly Shop[] Data = new Shop[]
    {
        new Shop("Carrefour", 7, "logoImageUrl"),
        new Shop("Aldi", 5, "logoImageUrl"),
        new Shop("Lidl", 3, "logoImageUrl"),
        new Shop("Albert Hein", 2, "logoImageUrl"),
        new Shop("Jumbo", 1, "logoImageUrl"),
    };
}
