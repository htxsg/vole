# Introduction 

Vole is a simple tester to test your web deployment. It is basd on [expressJS](http://expressjs.com) backend web sever. The home page uses the [bootstrap CSS](https://getbootstrap.com/docs/3.4/css/).

## Installation

Pre-requisite is that [node](https://nodejs.org/en/download/) is installed on developer machine. Execute the following commands:

```
$ git clone https://github.com/htxsg/vole.git
$ cd vole
$ npm install basic-auth
$ npm install cookie-parser
$ npm install axios
$ sudo pm install nodemon -g
```
**Note:** 
- [basic-auth](https://www.npmjs.com/package/basic-auth) is for basic HTTP authentication if needed
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) as the name describe is to parse cookie.
- [axios](https://axios-http.com/docs/intro) is a http client to perform API calls.
- [nodemon](https://www.npmjs.com/package/nodemon) is for development purpose to auto reload with code change.

### Running

## Running locally
In the vole directory run the following command:
```
nodemon app.js 
```
With nodemon, one can edit the code with the node server is running and it will automatically refresh without needing one to restart. Really useful for development.

## Running as container 
1. This repo contains a `Dockerfile` to run a nodeJS in a docker container.

2. To build the container image locally:
```
$ docker build -t vole .
```

3. Execute the following command to run the docker container:
```
$ docker run -p 8888:80 vole 
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

-  [CSS](https://getbootstrap.com/docs/3.4/css/)
-  [Express Web Framework](http://expressjs.com)
-  [Runnning HTTPS Server](https://adamtheautomator.com/https-nodejs/)
-  [HTTPbin](http://httpbin.org) for testing of HTTP calls

