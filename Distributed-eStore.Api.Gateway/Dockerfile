FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS base
WORKDIR /app

COPY ./src/*.csproj .
RUN dotnet restore

COPY . ./
RUN dotnet publish ./Distributed-eStore.Api.Gateway.sln -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS build
WORKDIR /app
COPY --from=base /app/out .
EXPOSE 5000

ENTRYPOINT ["dotnet", "Distributed-eStore.Api.Gateway.dll"]