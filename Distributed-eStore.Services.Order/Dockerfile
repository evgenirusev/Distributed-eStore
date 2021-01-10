FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS base
WORKDIR /app

ADD Distributed-eStore.Services.Product Distributed-eStore.Services.Product
ADD Distributed-eStore.Common Distributed-eStore.Common

WORKDIR /app/Distributed-eStore.Services.Product
RUN dotnet restore Distributed-eStore.Services.Product.sln
RUN dotnet publish Distributed-eStore.Services.Product.sln -c Release -o publish

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS build
WORKDIR /app
COPY --from=base /app/Distributed-eStore.Services.Product/publish .
EXPOSE 5000

ENTRYPOINT ["dotnet", "Distributed-eStore.Services.Product.dll"]