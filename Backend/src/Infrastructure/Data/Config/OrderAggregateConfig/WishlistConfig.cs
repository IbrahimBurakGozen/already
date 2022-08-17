using Core.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Infrastructure.Data.Config.OrderAggregateConfig;

public class WishlistConfig: IEntityTypeConfiguration<Wishlist>
{
    public void Configure(EntityTypeBuilder<Wishlist> builder)
    {
        // Relations
        builder
            .HasOne(x => x.Customer)
            .WithOne(x => x.Wishlist)
            .HasForeignKey<Wishlist>(x => x.CustomerId)
            .OnDelete(DeleteBehavior.SetNull);

        builder
            .HasMany(x => x.WishlistLines)
            .WithOne(x => x.Wishlist)
            .HasForeignKey(x => x.WishlistId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
