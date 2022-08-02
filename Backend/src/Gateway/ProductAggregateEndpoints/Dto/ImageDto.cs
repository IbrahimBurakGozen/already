using Core.ProductAggregate;
namespace Gateway.ProductAggregateEndpoints.Dto;

public class ImageDto 
{
    public string Url { get; set; }
    public string Alt { get; set; }
    
    public ImageDto(Image image) 
    {
        Url = image.Url;
        Alt = image.Alt;
    }
   
}
