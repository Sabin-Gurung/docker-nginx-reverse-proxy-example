# Docker compose nginx reverse proxy example

An example on how to host multiple services in docker compose and use nginx reverse proxy to redirect to the services.

The api and website containers don't have their port exposed so they are olny accessible from the nginx container.

> docker-compose up

- http://api.localhost > api response
- http://web-site1.localhost > static website 1   
- http://web-site2.localhost > static website 2

## Flow

![image](https://user-images.githubusercontent.com/25685062/209863882-2d4a6f8b-fedb-405b-988d-b6fc5e9ecf41.png)

## Screenshot

![image](https://user-images.githubusercontent.com/25685062/209863007-5a98198d-963c-45a2-b591-fc4218325177.png).  
![image](https://user-images.githubusercontent.com/25685062/209863031-eaa1c7b3-175c-4597-9043-76c90a6a8607.png).  
![image](https://user-images.githubusercontent.com/25685062/209863043-598e58a0-176b-4ac7-8cf4-6c83d9c26bca.png). 




