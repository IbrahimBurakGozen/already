using Core.OrderAggregate;
using Core.OrderAggregate.Specifications;
using Core.ProductAggregate;
using Core.ProductAggregate.Specifications;
using FastEndpoints;
using Gateway.Features.OrderAggregate.Dto;
using Shared.Interfaces;

namespace Gateway.Features.OrderAggregate.Carts.AddLineItem;

public class Endpoint : Endpoint<Request, Response>
{
    private readonly IRepository<Cart> _cartRepository;
    private readonly IRepository<CartLine> _cartLineRepository;
    private readonly IRepository<ProductVariant> _productVariantRepository;
  
    public Endpoint(IRepository<Cart> cartRepository,IRepository<CartLine> cartLineRepository, IRepository<ProductVariant> productVariantRepository)
    {
        _cartRepository = cartRepository;
        _cartLineRepository = cartLineRepository;
        _productVariantRepository = productVariantRepository;
        
    }

    public override void Configure()
    {
        Post("/carts/lines");
        AllowAnonymous();
    }

    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        var spec = new CartByIdSpec(req.CartId);
        var cart = await _cartRepository.GetBySpecAsync(spec, ct);
        
        if(cart == null)
        {
            await SendNotFoundAsync(ct);
            return;
        }

        try
        {
            var productVariantSpec = new ProductVariantByIdSpec(req.Line.Id);
            var productVariant = await _productVariantRepository.GetBySpecAsync(productVariantSpec, ct);

            if(productVariant == null)
            {
                throw new Exception("ProductVariant not found");
            }

            var cartLine = new CartLine(req.Line.Quantity, productVariant);

            cart.AddCartLine(cartLine);

            await _cartLineRepository.AddAsync(cartLine, ct);
            await _cartLineRepository.SaveChangesAsync(ct);

            var dto = new CartDto(cart);
            Response.Cart = dto;
            await SendAsync(Response, cancellation: ct);
        }
        catch(Exception e)
        {
            await SendErrorsAsync(500, ct);
            throw;
        }
    }
}


// var productVariants = products.SelectMany(x => x.ProductVariants).ToList();

// foreach (var productVariant in productVariants)
// {
//     var quantity = req.Lines.ToList().Find(x => x.Id == productVariant.Id)!.Quantity;
//     var line = new CartLine(quantity, productVariant);
//     lines.Add(line);
// }