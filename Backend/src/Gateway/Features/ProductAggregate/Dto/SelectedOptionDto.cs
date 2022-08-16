using Core.ProductAggregate;
namespace Gateway.Features.ProductAggregate.Dto;

public class SelectedOptionDto
{
    public String Name { get; set; }
    public String Value { get; set; }
    
    public SelectedOptionDto(ProductOptionValue productOptionValue)
    {
        Name = productOptionValue.ProductOption.Name;
        Value = productOptionValue.Value;
    }
}
