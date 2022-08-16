using Ardalis.GuardClauses;
using Core.ProductAggregate.Exceptions;
using Shared;
using Shared.Interfaces;
namespace Core.ProductAggregate;

public class Category : BaseEntity, IAggregateRoot
{
    // Hierarchy
    public virtual Guid? ParentId { get; private set; }
    public virtual Category? Parent { get; private set; }

    private readonly List<Category> _children = new();
    public IReadOnlyCollection<Category>? Children => _children.Count > 0 ? _children.AsReadOnly() : null;
    
    
    
    // Relations
    private readonly List<Product> _products = new();
    public IReadOnlyCollection<Product> Products => _products.AsReadOnly();
    
    private readonly List<Shop> _shops = new();
    public IReadOnlyCollection<Shop> Shops => _shops.AsReadOnly();
    
    private readonly List<Brand> _brands = new();
    public IReadOnlyCollection<Brand> Brands => _brands.AsReadOnly();

    public Image? Image { get; private set; }
    public Guid? ImageId { get; private set; }
    
    
    // Properties
    public string Title { get; private set; }
    public string? Description { get; private set; }


    // Constructors
    public Category(Guid? parentId, string title)
    {
        ParentId = parentId;
        Title = Guard.Against.NullOrEmpty(title, nameof(title));
    }
    
    public Category(Guid? parentId, string title, Image image) : this(parentId, title)
    {
        SetImage(image);
    }
    
    public Category(Guid? parentId, string title, string description) : this(parentId, title)
    {
        Description = Guard.Against.NullOrEmpty(description, nameof(description));
    }
    
    public Category(Guid? parentId, string title,Image image, string description) : this(parentId, title, image)
    {
        Description = Guard.Against.NullOrEmpty(description, nameof(description));
    }



    public Category(Guid? parentId, List<Category> children, string title) : this(parentId, title)
    {
        Guard.Against.Null(children, nameof(children));
        AddChild(children);
    }
    
    public Category(Guid? parentId, List<Category> children, string title, Image image) : this(parentId, children, title)
    {
        SetImage(image);
    }

    public Category(Guid? parentId, List<Category> children, string title, string description) : this(parentId, children, title)
    {
        Description = Guard.Against.NullOrEmpty(description, nameof(description));
    }
    
    public Category(Guid? parentId, List<Category> children, string title,Image image, string description) : this(parentId,children, title, image)
    {
        Description = Guard.Against.NullOrEmpty(description, nameof(description));
    }
    
    
    // Getters
    public List<Category> GetLeafs()
    {
        var leafs = new List<Category>();
        
        foreach (var child in _children)
        {
            leafs.AddRange(child.GetLeafs());
        }
        if (leafs.Count == 0)
        {
            leafs.Add(this);
        }
        return leafs;
    }
    
    
    // Adding
    public void AddProduct(Product product)
    {
        Guard.Against.Null(product, nameof(product));
        product.SetCategory(this);
        _products.Add(product);
    }   
    
    public void AddChild(Category child)
    {
        Guard.Against.Null(child, nameof(child));
        child.SetParent(this);
        _children.Add(child);
    }
    
    public void AddChild(IEnumerable<Category> children)
    {
        foreach (var child in children)
        {
            AddChild(child);
        }
    }
    
    // Setters
    public void SetImage(Image image)
    {
        Guard.Against.Null(image, nameof(image));
        Image = image;
        ImageId = image.Id;
    }
    
    public void SetParent(Category parent)
    {
        Guard.Against.Null(parent, nameof(parent));
        Parent = parent;
        ParentId = parent.Id;
    }
}
