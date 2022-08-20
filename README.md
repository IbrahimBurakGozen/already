# Development

&nbsp;

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTGRES_DB`

`POSTGRES_USER`

`POSTGRES_PASSWORD`

`ASPNETCORE_ENVIRONMENT`

`NODE_ENV`

`SENDGRID_API_KEY`

`ADMIN_EMAIL`

&nbsp;

### Run

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd ./already
```

Docker Compose up

```bash
  docker-compose up --build
```

Fontend link

```bash
  http://localhost
```

Backend link

```bash
  http://localhost:8080
```

&nbsp;

### Adding Migrations

Go into the container

```bash
  docker exec -it [BACKEND_CONTAINER] /bin/bash
```

Go to the Gateway directory

```bash
  cd ./src/Gateway
```

Create Migration

```bash
   dotnet ef migrations add [MIGRATION_NAME] --context appdbcontext -p ../Infrastructure/Infrastructure.csproj -s Gateway.csproj -o Data/Migrations
```

Update Database

```bash
  dotnet ef database update
```

\
\
\
\
\
\
\
\
\
&nbsp;

# Production

Om de applicatie is het best om de App Platform van DigitalOcean te gebruiken. Meer informatie hierover kan je terugvinden op https://www.digitalocean.com/products/app-platform

WIl je het op een VM of andere environment hosten? Dat kan zeker met de Dockerfile die zich bevinden in de applicatie folders. Maar deze is niet inbegrepen in de frontend folder. Daarom zou je deze zelf even moeten teoveogen.

&nbsp;

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

&nbsp;

#### Backend

`CONNECTION_STRINGS` host=[POSTGRES_DB];port=5432;database=[POSTGRES_DB];username=[POSTGRES_USER];password=[POSTGRES_PASSWORD];

`PORT`

&nbsp;

#### Frontend

`API_PATH` (url naar de backend api, bv. https://api.already.shopping)

`NODE_ENV`

`SENDGRID_API_KEY`

`ADMIN_EMAIL`
