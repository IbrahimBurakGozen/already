using Bogus;
using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class BrandSeedData
{
    public static readonly List<Brand> Data = new();

    // public static readonly Brand[] Data = new Brand[]
    // {
    //     new Brand("Coca Cola"), 
    //     new Brand("Fanta"),    
    //     new Brand("Sprite"),    
    //     new Brand("Everyday"),    
    //     new Brand("Lipton"),
    // };
    //
    public static void Init(int count)
    {
        var data = new Faker<Brand>()
            .CustomInstantiator(f => new Brand(f.PickRandom(Names)));

        Data.AddRange(data.Generate(count));
    }

    private static readonly string[] Names = 
    {
        "Coca Cola",
        "Fanta",
        "Sprite",
        "Everyday",
        "Lipton",
        "Milsbona",
        "Becel",
        "Carrefour",
        "Carrefour Bio",
        "Carrefour Selection",
        "N°1",
        "Alpro",
        "Pur Natur",
        "Campina",
        "Activia",
        "La Laitière",
        "Oikos",
        "Danone",
        "Dilea",
        "Entremont",
        "Président",
        "Galbani",
        "Lactel",
        "Philadelphia",
        "Actimel",
        "Becel",
        "Boursin",
        "Maredsous",
        "Cécémel",
        "Danio",
        "La Vache Qui Rit",
        "Rians",
        "Witte producten",
        "Carlsbourg",
        "Danette",
        "Parmareggio",
        "Simpl",
        "Leerdammer",
        "Solo",
        "Balade",
        "Joyvalle",
        "Vitalinea",
        "Yoplait",
        "Arla",
        "Fairebel",
        "Nestlé",
        "Paysan Breton",
        "Vache Bleue",
        "Chavroux",
        "Le Viennois",
        "Light & Free",
        "Benecol",
        "Caprice des Dieux",
        "Chimay",
        "ERU",
        "Fristi",
        "Herta",
        "HiPRO",
        "Kiri",
        "Lucien Massaux",
        "NAN",
        "Nutroma",
        "Passendale",
        "Planta",
        "Salakis",
        "St Môret",
        "Apéricube",
        "Beemster",
        "Bjorg",
        "Chaumes",
        "Columbus",
        "Danonino",
        "Flandrien",
        "7UP",
        "Coca-Cola",
        "Schweppes",
        "Lipton",
        "Fuze Tea",
        "Fanta",
        "Pepsi",
        "Aquarius",
        "Fever-Tree",
        "Oasis",
        "Fiesta",
        "Nalu",
        "Red Bull",
        "Sprite",
        "Monster",
        "Monster Energy",
        "Arizona",
        "Capri-Sun",
    };
}

