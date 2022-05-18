# Introduction 

Vole is a simple tester to test your web deployment. It is basd on expressJS backend sever. The home page uses the bootstep CSS.

## Installation

Pre-requisite is that node is install on developer machine. Execute the following commands

```
$ git clone https://github.com/htxsg/vole.git
$ cd vole
$ npm install basic-auth --save
$ npm install cookie-parser --save
$ npm install nodemon -g
```
*Note: nodemon is for development purpose to auto reload with code change*

### Running

Developement start (on local machhine):
```
nodemon app.js 
```


## Running as container locally
1. This repo contains a `Dockerfile` to run a nodeJS in a docker container.

2. To build the contsainer image locally:
```
$ docker build -t vole .
```

3. Execute the following command to run the docker container:
```
$ docker run -p 8888:8888 vole 
server is listening on 8888
```
when the container is up, open  your browser and go to the following URL: [http://localhost:8888](http://localhost:8888)

4. Note that `nodejs` container cannot exit wiht `CTRL-C` command. Open another shell, look for running container and stop it:
```
$ docker ps -a | grep vole
cd8962478178   vole                            "docker-entrypoint.s…"   23 seconds ago      Up 22 seconds                  0.0.0.0:8888->8888/tcp   blissful_faraday
$ docker stop cd8962478178
```  


# Useful References

[CSS](https://getbootstrap.com/docs/3.4/css/)
[Express Web Framework](http://expressjs.com)
[Runnning HTTPS Server](https://adamtheautomator.com/https-nodejs/)

