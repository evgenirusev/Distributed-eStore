FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS base
WORKDIR /app

ADD Distributed-eStore.UI Distributed-eStore.UI
ADD Distributed-eStore.Common Distributed-eStore.Common

WORKDIR /app/Distributed-eStore.UI

ENV NODE_VERSION=14.15.4
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

RUN dotnet restore Distributed-eStore.UI.sln
RUN dotnet publish Distributed-eStore.UI.sln -c Release -o publish

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS build
WORKDIR /app
COPY --from=base /app/Distributed-eStore.UI/publish .
EXPOSE 80

ENTRYPOINT ["dotnet", "Distributed-eStore.UI.dll"]