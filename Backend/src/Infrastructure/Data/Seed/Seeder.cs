using Infrastructure.Data.Seed.ProductAggregate;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Shared;
namespace Infrastructure.Data.Seed;

public static class Seeder
{
    public static void Execute(WebApplication app)
    {
        
            using var scope = app.Services.CreateScope();
            var services = scope.ServiceProvider;
            // var logger = services.GetRequiredService<ILogger>();
       
            try
            {
                var context = services.GetRequiredService<AppDbContext>();
                context.Database.Migrate();
                context.Database.EnsureCreated();
                var logString = Initialize(services);
                Console.WriteLine(logString);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
    }
    
    private static string Initialize(IServiceProvider serviceProvider)
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
    
    private static void PopulateTestData(AppDbContext dbContext)
    {
        var tableNames = dbContext.Model.GetEntityTypes()
            // .Where(w => w.ClrType.IsSubclassOf(typeof(IBaseEntity)))
            .Select(t => t.GetTableName())
            .Distinct()
            .ToList();
        
        
        foreach (var tableName in tableNames)
        {
            dbContext.Database.ExecuteSqlRaw($@"TRUNCATE TABLE ""{tableName}"" RESTART IDENTITY CASCADE;");
        }
        
        dbContext.SaveChanges();
        

        BrandSeedData.Init(50);
        ShopSeedData.Init(50);
        CategorySeedData.Init();
        
        ProductsSeedData.Init(500, BrandSeedData.Data, CategorySeedData.LeafData, ShopSeedData.Data);

        dbContext.AddRange(BrandSeedData.Data);
        dbContext.AddRange(CategorySeedData.Data);
        dbContext.AddRange(ShopSeedData.Data);
        
        dbContext.AddRange(ProductsSeedData.Data);
        
        
        dbContext.SaveChanges();
    }
}
