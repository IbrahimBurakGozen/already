using Core.ProductAggregate;
namespace Gateway.Features.ProductAggregate.Dto;

public class ProductOptionDto 
{
    public string Name { get; set; }
    public IEnumerable<string> Values { get; set; }

    public ProductOptionDto(ProductOption productOption)
    {
        Name = productOption.Name;
        Values = productOption.Values.Select(x=> x.Value);
    }
}
