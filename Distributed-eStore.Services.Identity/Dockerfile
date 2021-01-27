FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS base
WORKDIR /app

ADD Distributed-eStore.Services.Identity Distributed-eStore.Services.Identity
ADD Distributed-eStore.Common Distributed-eStore.Common

WORKDIR /app/Distributed-eStore.Services.Identity
RUN dotnet restore Distributed-eStore.Services.Identity.sln
RUN dotnet publish Distributed-eStore.Services.Identity.sln -c Release -o publish

FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /app
COPY --from=base /app/Distributed-eStore.Services.Identity/publish .
EXPOSE 5000

ENTRYPOINT ["dotnet", "Distributed-eStore.Services.Identity.dll"]