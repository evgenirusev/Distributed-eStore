FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS base
WORKDIR /app

ADD Distributed-eStore.UI Distributed-eStore.UI
ADD Distributed-eStore.Common Distributed-eStore.Common

WORKDIR /app/Distributed-eStore.UI

RUN apk update
RUN curl -sL https://deb.nodesource.com/setup_10.x
RUN apk add --update nodejs
RUN apk add --update npm

RUN dotnet restore Distributed-eStore.UI.sln
RUN dotnet publish Distributed-eStore.UI.sln -c Release -o publish

FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
WORKDIR /app
COPY --from=base /app/Distributed-eStore.UI/publish .
EXPOSE 80

ENTRYPOINT ["dotnet", "Distributed-eStore.UI.dll"]