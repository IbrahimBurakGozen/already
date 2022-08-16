using Autofac;
using Autofac.Extensions.DependencyInjection;
using Core;
using Core.IdentityAggregate;
using FastEndpoints;
using FastEndpoints.Swagger;
using Infrastructure;
using Infrastructure.Data;
using Infrastructure.Data.Seed;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// Get port from environment and store in config
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
var url = $"http://0.0.0.0:{port}";


// Add services to the container.
builder.Services.AddFastEndpoints();
builder.Services.AddSwaggerDoc();


// DB options
var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRINGS");
if (connectionString != null) builder.Services.AddDbContext<AppDbContext>(c => c.UseNpgsql(connectionString));


// Identity
builder.Services.AddDefaultIdentity<ApplicationUser>()
    .AddEntityFrameworkStores<AppDbContext>();


// Dependency injection
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    containerBuilder.RegisterModule(new DefaultCoreModule());
    containerBuilder.RegisterModule(new DefaultInfrastructureModule(builder.Environment.EnvironmentName == "Development"));
});



// Build
var app = builder.Build();
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseFastEndpoints();
app.UseOpenApi();
app.UseSwaggerUi3(c => c.ConfigureDefaults());


// Seed
Seeder.Execute(app);


// Run
app.Run(url);