using Core.OrderAggregate;
namespace Infrastructure.Data.Seed.OrderAggregate;

public static class CustomerSeedData
{
    public static readonly Customer[] SeedCustomers = new Customer[5]
    {
        new Customer("Burak", "Gozen","burakgozen38@gmail.com"),
        new Customer("Omer", "Altin","omer.altin@gmail.com"),
        new Customer("Efekan", "Horzun","efekan.horzum@gmail.com"),
        new Customer("Hakan", "Gokalp","hakan.gokalp@gmail.com"),
        new Customer("Bedirhan", "Bel","bedirhan.bel@gmail.com"),
    };
}
