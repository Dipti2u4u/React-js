##Define the base image 
FROM node:17-alpine

##Set the working directory
WORKDIR /app

##Copy package.json and package-lock.json in side the directory that you have created
COPY package*.json ./

##Install the required dependancies
RUN npm install

##Copy the entire application code inside the app directory
COPY . .

##Build the react application
RUN npm run build

##Exposing the port
EXPOSE 3000

##Specify the command that will be ececuted when the docker container will start
CMD ["npm" , "start"]