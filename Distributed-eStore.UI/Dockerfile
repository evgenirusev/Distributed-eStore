FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS base
WORKDIR /app

ADD Distributed-eStore.UI Distributed-eStore.UI
ADD Distributed-eStore.Common Distributed-eStore.Common

WORKDIR /app/Distributed-eStore.UI

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

RUN dotnet restore Distributed-eStore.UI.sln
RUN dotnet publish Distributed-eStore.UI.sln -c Release -o publish

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS build
WORKDIR /app
COPY --from=base /app/Distributed-eStore.UI/publish .
EXPOSE 80

ENTRYPOINT ["dotnet", "Distributed-eStore.UI.dll"]