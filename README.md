# Distributed-eStore

Containerized .NET Core Online Store application with a microservices architecture. Utilizing React and Redux as a frontend solution.
Technologies used - RabbitMQ, .NET Core, .NET Core MVC, MongoDB, React, Redux, Docker, Consul, Fabio, Swagger, Vault.

## Architecture:
![Sorry, error loading image of diagram](architecture.png)

## Steps to run locally
1. Prerequisites:
* - Docker
* - A running MongoDB service (check connection string in appsettings.json)
2. Run _docker-compose -f ./compose/compose.yml up -d_
3. Open http://localhost:44310/

## Demo

### Products
![Sorry, error loading image of diagram](products1.png)
![Sorry, error loading image of diagram](products2.png)

### Product View
![Sorry, error loading image of diagram](product.png)

### Shopping Cart
![Sorry, error loading image of diagram](cart.png)
