using Gateway.Features.OrderAggregate.Dto;
using Microsoft.AspNetCore.Mvc;
namespace Gateway.Features.OrderAggregate.Carts.GetById;

public class Request
{
    [FromRoute]
    public Guid Id { get; set; }
}

public class Response
{
    public CartDto Cart { get; set; }
}
