# Docker compose nginx reverse proxy example

An example on how to host multiple services in docker compose and use nginx reverse proxy to redirect to the services.

The api and website containers don't have their port exposed so they are olny accessible from the nginx container.

> docker-compose up

api.localhost > api response
web-site1.localhost > static website 1
web-site2.localhost > static website 2

