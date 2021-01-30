# Distributed-eStore

Containerized .NET Core Online Store application with a microservices architecture. Utilizing React and Redux as a frontend solution.
Technologies used - RabbitMQ, .NET Core, .NET Core MVC, MongoDB, React, Redux, Docker, Consul, Fabio, Swagger, Vault.

## Architecture:
![Sorry, error loading image of diagram](architecture.png)

## How to run
1. Prerequisites:
* Docker
* Running MongoDB service (check connection string in appsettings.json)
2. Run _docker-compose -f ./compose/compose.yml up -d_
3. Open http://localhost:44310/
