using Autofac;
using Autofac.Extensions.DependencyInjection;
using Core;
using Core.IdentityAggregate;
using Gateway;
using Infrastructure;
using Infrastructure.Data;
using Infrastructure.Data.Seed;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
var url = $"http://0.0.0.0:{port}";
var target = Environment.GetEnvironmentVariable("TARGET") ?? "World";

// Add services to the container.
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

builder.Services.AddControllers();

// DB options
string? connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRINGS");

Console.WriteLine(connectionString);

if (connectionString != null)
{

    builder.Services.AddDbContext<AppDbContext>(c => c.UseNpgsql(connectionString));
}

// Identity
builder.Services.AddDefaultIdentity<ApplicationUser>()
    .AddEntityFrameworkStores<AppDbContext>();


// Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => {
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    c.EnableAnnotations();
});


// Default Module Configure
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    containerBuilder.RegisterModule(new DefaultCoreModule());
    containerBuilder.RegisterModule(new DefaultInfrastructureModule(builder.Environment.EnvironmentName == "Development"));
});

// Build
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// Seed Database
if (app.Environment.IsDevelopment())
{
    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogInformation("Environment Development");
        
        try
        {
            var context = services.GetRequiredService<AppDbContext>();
            context.Database.Migrate();
            context.Database.EnsureCreated();
            var logString = Seeder.Initialize(services);
            logger.LogInformation(logString);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "An error occurred seeding the DB.");
        }
    }
}

// Database Migrations Production
// if (app.Environment.IsProduction())
// {
//     using (var scope = app.Services.CreateScope())
//     {
//         var services = scope.ServiceProvider;
//         var logger = services.GetRequiredService<ILogger<Program>>();
//         logger.LogInformation("Environment Production");
//
//         try
//         {
//             var context = services.GetRequiredService<AppDbContext>();
//             logger.LogCritical(services.);
//
//             context.Database.EnsureCreated();
//             context.Database.Migrate();
//         }
//         catch (Exception ex)
//         {
//             logger.LogError(ex, "An error occurred seeding the DB.");
//         }
//     }
// }

app.MapGet("/", () => $"Welcome to the already backend :)");

app.Run(url);