using Core.OrderAggregate;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;
namespace Gateway.Features.OrderAggregate.Carts.Create
{
    public class Endpoint : Endpoint<Request, Response>
    {
        private readonly IRepository<Cart> _repository;
  
        public Endpoint(IRepository<Cart> repository)
        {
            _repository = repository;
        }
    
        public override void Configure()
        {
            Post("/carts/create");
            AllowAnonymous();
        }

        public override async Task HandleAsync(Request req, CancellationToken ct)
        {
            // Console.WriteLine($"Creating cart {req.Buyer.Id} {req.CartLines.ToList().Count}");
            
            try
            {
                var createdCart =  new Cart();
                var response = await _repository.AddAsync(createdCart, ct);
                var dto = new CartDto(response);
                Response.Cart = dto;
                await SendAsync(Response, cancellation: ct);
            }
            catch (Exception e)
            {
                await SendErrorsAsync(cancellation: ct);
                Console.WriteLine(e);
                throw;
                
            }
        }
    }
}
