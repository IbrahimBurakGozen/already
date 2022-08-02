FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

ENV ASPNETCORE_URLS="https://*:8080;http://*:8000"
ENV ASPNETCORE_ENVIRONMENT="Production"

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore

RUN dotnet dev-certs https
# Build and publish a release
RUN dotnet publish -c release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app/out .
COPY --from=build /root/.dotnet/corefx/cryptography/x509stores/my/* /root/.dotnet/corefx/cryptography/x509stores/my/
EXPOSE 8080
ENTRYPOINT ["dotnet", "Gateway.dll"]