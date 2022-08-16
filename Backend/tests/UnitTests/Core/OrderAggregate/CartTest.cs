using System.Collections.Generic;
using System.Linq;
using Core.OrderAggregate;
using UnitTests.Core.TestFactories.OrderAggregates;
using UnitTests.Core.TestFactories.ProductAggregates;
using Xunit;
namespace UnitTests.Core.OrderAggregate;

public class CartTest
{
    [Fact]
    public void InitialCartLine()
    {
        var testLines = new List<CartLine>()
        {
            new CartLine( 1, TestProductVariantFactory.Create())
        };
        var cart = new Cart(testLines);

        Assert.Equal(1,cart.CartLines.Count);
        Assert.Equal(testLines,cart.CartLines);
        Assert.Equal(cart,cart.CartLines.First().Cart);
    }
    
    [Fact]
    public void AddCartLine()
    {
        var cart = new Cart(); 
        var testLine = new CartLine( 1, TestProductVariantFactory.Create());
        
        cart.AddCartLine(testLine);
        
        Assert.Equal(1,cart.CartLines.Count);
        Assert.Equal(testLine,cart.CartLines.First());
    }
    
    [Fact]
    public void RemoveCartLine()
    {
        var cart = new Cart(); 
        var testLine = new CartLine( 1, TestProductVariantFactory.Create());
        
        cart.AddCartLine(testLine);
        cart.RemoveCartLine(testLine);
        
        Assert.Equal(0,cart.CartLines.Count);
    }
    
    [Fact]
    public void SetCustomerToCart()
    {
        var testCustomer = TestCustomerFactory.Create();
        var cart = new Cart(testCustomer);
    
        Assert.Equal(cart.Customer, testCustomer);
        Assert.NotNull(cart);
    }
}
