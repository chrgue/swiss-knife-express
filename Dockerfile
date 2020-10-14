FROM node:14-slim

# change directory INSIDE the container
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm install

# copy source files
COPY . .

# run build
RUN npm run build

# numeric representation of 'node' user provided by the base image
USER 1000

# application port
EXPOSE 3000

# run start
CMD [ "npm", "start" ]
