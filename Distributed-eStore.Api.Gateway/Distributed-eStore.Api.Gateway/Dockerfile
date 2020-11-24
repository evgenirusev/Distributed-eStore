FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["Distributed-eStore.Api.Gateway/Distributed-eStore.Api.Gateway.csproj", "Distributed-eStore.Api.Gateway/"]
RUN dotnet restore "Distributed-eStore.Api.Gateway/Distributed-eStore.Api.Gateway.csproj"
COPY . .
WORKDIR "/src/Distributed-eStore.Api.Gateway"
RUN dotnet build "Distributed-eStore.Api.Gateway.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Distributed-eStore.Api.Gateway.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Distributed-eStore.Api.Gateway.dll"]