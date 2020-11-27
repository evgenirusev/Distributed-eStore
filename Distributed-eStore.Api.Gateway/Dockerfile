FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base

WORKDIR /app

COPY ./src/bin/Debug/net5.0/ .

EXPOSE 5000

ENTRYPOINT dotnet Distributed-eStore.Api.Gateway.dll