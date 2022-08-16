using Gateway.Features.OrderAggregate.Dto;
namespace Gateway.Features.OrderAggregate.Carts.Create;

public class Request
{
    /**
    *
    * 
    * BuyerRequest
    **/
    // [FromBody] 
    // public BuyerRequest? Buyer { get; set; }
    //
    // public class BuyerRequest
    // {
    //     public Guid Id { get; set; }
    // }
    
    
    /**
    *
    * 
    * LineItemRequest
    **/
    // [FromBody]
    // public List<LineRequest>? CartLines { get; set; }
    //
    // public class LineRequest
    // {
    //     public Guid Id { get; set; }
    //     public int Quantity { get; set; }
    // }
}

public class Response
{
    public CartDto Cart { get; set; }
}
