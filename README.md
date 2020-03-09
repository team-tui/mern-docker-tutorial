## React Todo List
### Introduction
#### This is an example todo list project, developed in the following technologies:

* Node JS
* React JS
* MongoDB
* Docker
* Heroku

You can review the full tutorial from the following link:
https://dev.to/vguleaev/dockerize-a-react-app-with-node-js-backend-connected-to-mongodb-10ai

### Instructions
#### To run this project:

1. Change the api -> src -> connection.js file. Substitute the following IP your Docker IP is. (Will be localhost if using proper Docker and not VMDocker)
```
const connection = "mongodb://192.168.99.100:27017/mongo-test";
```
2. Change the ui -> src -> App.js file. Substitute the following IP your Docker IP is. (Will be localhost if using proper Docker and not VMDocker)
```
const apiUrl = `http://192.168.99.100:8080`;
```
3. Build and Run the container through 
```
docker-compose up --build
```
4. Visit the React front end through the following link. Substitute the following IP your Docker IP is. (Will be localhost if using proper Docker and not VMDocker)
```
http://192.168.99.100:3000
```
5. Congratulate Mike because it took him farking forever to get this going.