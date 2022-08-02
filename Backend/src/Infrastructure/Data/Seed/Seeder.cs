using Infrastructure.Data.Seed.ProductAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shared;
namespace Infrastructure.Data.Seed;

public static class Seeder
{
    public static string Initialize(IServiceProvider serviceProvider)
    {
        using (var dbContext = new AppDbContext(
                   serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>(),
                   null))
        {
            if (dbContext.Products.Any())
            {
                return "DB  has already been seeded"; // DB has been seeded
            }

            PopulateTestData(dbContext);
            return "Successfully seeded";
        }
    }
    
    public static void PopulateTestData(AppDbContext dbContext)
    {
        // Deleting Data
        RemoveFromDb(dbContext, dbContext.Shops);
        RemoveFromDb(dbContext, dbContext.Categories);
        RemoveFromDb(dbContext, dbContext.Brands);
        
        RemoveFromDb(dbContext, dbContext.Products);
        RemoveFromDb(dbContext, dbContext.ProductVariants);
        RemoveFromDb(dbContext, dbContext.ProductImages);
        
        RemoveFromDb(dbContext, dbContext.Images);

        dbContext.SaveChanges();

        
        // dbContext.AddRange(BrandSeedData.Data);
        dbContext.AddRange(CategorySeedData.Data);
        // dbContext.AddRange(ShopSeedData.Data);

        var products = ProductsSeedData.Data(
            BrandSeedData.Data,
            CategorySeedData.Data,
            ShopSeedData.Data,
            ProductOptionsSeedData.Data);
        dbContext.Products.AddRange(products);


        dbContext.SaveChanges();
    }
    
    // Removing
    private static void RemoveFromDb<T>(AppDbContext dbContext, DbSet<T> entities) where T: BaseEntity
    {
        foreach (var item in entities)
        {
            dbContext.Remove(item);
        }
    }
    
}
