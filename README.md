<div style="text-align:center"><h1>Nuxt Client Boiler Blade For APIATO</h1></div>
<hr>
<div style='text-align: center'>
<img src='https://img.shields.io/badge/nuxt.js-00C58E?style=for-the-badge&logo=nuxtdotjs&logoColor=white' alt=''>
<img src='https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white' alt=''>
<img src='https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D' alt=''>
<img src='https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white' alt=''>
</div>

### This project is just for fun feel free to download and use at your own need

## Build Setup
Change the environment variable base one your backend
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Setup With Docker
```bash
# Clone the project
$ git clone https://github.com/nuolmakara16/nuxt-client.git

# Go to cloned folder
$ cd nuxt-client

# List all containers
$ sudo docker ps -a

# List all images
$ sudo docker images -a

# Remove all unused images
$ sudo docker image prune -a

# Delete all stopped container
$ sudo docker system prune

# Stop a running container
$ sudo docker stop [container_name]

# Start a container
$ sudo docker start [container_name]

# Build docker image.FYI: -t is for tag
$ sudo docker build -t [image-name]:[tag-name] .
$ sudo docker build -t nuxt-client:v0.0.1-production .

# Build docker image by without specifying tag
$ sudo docker build -t [image-name].
$ sudo docker build -t nuxt-client .

# Run docker container in detach mode and bind docker port 3000 to host 80
$ sudo docker run -d -p 80:3000 [image-name]:[tag-name]
$ sudo docker run -d -p 80:3000 nuxt-client:v0.0.1-production

# Run docker container in detach mode and bind docker port 3000 to host port 80 without using tag-name
$ sudo docker run -d -p 80:3000 [image-name]
$ sudo docker run -d -p 80:3000 nuxt-client

```

### Reference
- [How to Push and Pull a Docker Image from Docker Hub](https://www.youtube.com/watch?v=EIHY_CY5J0k)

- [Learn more about docker](https://docs.docker.com)

- [nuxt/auth](https://auth.nuxtjs.org/)
