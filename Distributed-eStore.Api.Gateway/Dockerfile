FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS base
WORKDIR /app

ADD Distributed-eStore.Api.Gateway Distributed-eStore.Api.Gateway
ADD Distributed-eStore.Common Distributed-eStore.Common

WORKDIR /app/Distributed-eStore.Api.Gateway
RUN dotnet restore Distributed-eStore.Api.Gateway.sln
RUN dotnet publish Distributed-eStore.Api.Gateway.sln -c Release -o publish

FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /app
COPY --from=base /app/Distributed-eStore.Api.Gateway/publish .
EXPOSE 80

ENTRYPOINT ["dotnet", "Distributed-eStore.Api.Gateway.dll"]