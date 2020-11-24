FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
COPY ./src/DShop.Api/bin/docker .
ENV ASPNETCORE_URLS http://*:5000
ENV ASPNETCORE_ENVIRONMENT docker
EXPOSE 5000
ENTRYPOINT dotnet DShop.Api.dll2