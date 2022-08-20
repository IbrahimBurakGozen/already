using Core.ProcessAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config.ProcessAggregate;

public class ProcessConfig : IEntityTypeConfiguration<Process>
{
    public void Configure(EntityTypeBuilder<Process> builder)
    {
        // Properties
        builder.Property(x => x.ProcessPlacedDate)
            .IsRequired();
        
        
        
        // Relations
        builder
            .HasOne(x => x.Order);
    }
}
