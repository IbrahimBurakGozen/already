using System.Collections.Generic;
using Core.ProductAggregate;
using Xunit;
namespace UnitTests.Core.ProductAggregateTests;

public class CategoryTest
{
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Name()
    {
        var category = new Category(null, "Category");
        Assert.Equal("Category", category.Title);
    }
    
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Name_And_Description()
    {
        var category = new Category(null, "Category", "Description");
        Assert.Equal("Description", category.Description);
    }
    
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Name_And_Image()
    {
        var image = new Image("image.jpg", "image/jpg");
        var category = new Category(null, "Category",  image);
        Assert.Equal(image, category.Image);
    }
    
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Name_And_Image_And_Description()
    {
        var image = new Image("image.jpg", "image/jpg");
        var category = new Category(null, "Category",  image, "Description");
        Assert.Equal("Description", category.Description);
    }
    
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Children()
    {
        var children = new List<Category>()
        {
            new Category(null, "Test"),
            new Category(null, "Test2"),
            new Category(null, "Test3")
        };
        var category = new Category(null, children, "Category");
        Assert.Equal(children, category.Children);
    }
    
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Children_And_Description()
    {
        var children = new List<Category>()
        {
            new Category(null, "Test"),
            new Category(null, "Test2"),
            new Category(null, "Test3")
        };
        var category = new Category(null, children, "Category", "Description");
        Assert.Equal("Description", category.Description);
    }
    
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Children_And_Image()
    {
        var image = new Image("image.jpg", "image/jpg");
        var children = new List<Category>()
        {
            new Category(null, "Test"),
            new Category(null, "Test2"),
            new Category(null, "Test3")
        };
        var category = new Category(null, children, "Category", image);
        Assert.Equal(image, category.Image);
    }
    
    [Fact]
    public void Category_Should_Be_Created_With_Valid_Children_And_Image_And_Description()
    {
        var image = new Image("image.jpg", "image/jpg");
        var children = new List<Category>()
        {
            new Category(null, "Test"),
            new Category(null, "Test2"),
            new Category(null, "Test3")
        };
        var category = new Category(null, children, "Category", image, "Description");
        Assert.Equal("Description", category.Description);
    }
    
    [Fact]
    public void Category_Should_Return_Self_As_Leaf()
    {
        var category = new Category(null, "Category");
        Assert.Equal(new List<Category>()
        {
            category
        }, category.GetLeafs());
    }
    
    [Fact]
    public void Category_Should_Return_Children_As_Leafs()
    {
        var children = new List<Category>()
        {
            new Category(null, "Test"),
            new Category(null, "Test2"),
            new Category(null, "Test3")
        };
        
        var category = new Category(null, children, "Category");
        Assert.Equal(children, category.GetLeafs());
    }
}
