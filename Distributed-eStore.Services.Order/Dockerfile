FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS base
WORKDIR /app

ADD Distributed-eStore.Services.Order Distributed-eStore.Services.Order
ADD Distributed-eStore.Common Distributed-eStore.Common

WORKDIR /app/Distributed-eStore.Services.Order
RUN dotnet restore Distributed-eStore.Services.Order.sln
RUN dotnet publish Distributed-eStore.Services.Order.sln -c Release -o publish

FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /app
COPY --from=base /app/Distributed-eStore.Services.Order/publish .
EXPOSE 5006

ENTRYPOINT ["dotnet", "Distributed-eStore.Services.Order.dll"]