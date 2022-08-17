using Core.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Infrastructure.Data.Config.OrderAggregateConfig;

public class WishlistLineConfig: IEntityTypeConfiguration<WishlistLine>
{
    public void Configure(EntityTypeBuilder<WishlistLine> builder)
    {
        // Relations
        builder
            .HasOne(x => x.ProductVariant);
    }
}
