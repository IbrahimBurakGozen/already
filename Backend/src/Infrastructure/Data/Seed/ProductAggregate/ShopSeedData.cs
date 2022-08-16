using Bogus;
using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class ShopSeedData
{
    public static readonly List<Shop> Data = new ()
    {
        new Shop("Carrefour", 7, "logoImageUrl"),
        new Shop("Aldi", 5, "logoImageUrl"),
        new Shop("Lidl", 3, "logoImageUrl"),
        new Shop("Albert Hein", 2, "logoImageUrl"),
        new Shop("Jumbo", 1, "logoImageUrl"),
    };
    
    public static void Init(int count)
    {
        var data = new Faker<Shop>()
            .CustomInstantiator(f => new Shop(f.Company.CompanyName(), f.Random.Number(1,10), "logoImageUrl"));

        Data.AddRange(data.Generate(count));
    }
    
    
    private static readonly string[] Names = 
    {
        "Albert Heijn",
        "Aldi",
        "Alvo",
        "Au Bon Marché",
        "Bio-Planet",
        "Carrefour",	
        "Cash & Fresh",
        "Champion",
        "Colruyt",
        "Cora",
        "Cora",
        "Cru",
        "Delhaize",	
        "Grand Bazar",	
        "Intermarché",	
        "Innovation",	
        "Jawa",	
        "Jumbo",	
        "Lidl",	
        "Louis Delhaize",	
        "Makro",
        "Match",
        "OKay",
        "Prima",	
        "Sarma",
        "Smatch",
        "Spar",
        
    };
}



    	
