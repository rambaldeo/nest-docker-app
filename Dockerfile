#Step 1: use a Node.js base image
FROM node:18-alpine 

#Step 2: set the working directory inside the container
WORKDIR /usr/src/

#Step 3: copy package.json and package-lock.json to the working directory
COPY package*.json ./

#step 4: install the dependencies
RUN npm install

#Step 5: copy the rest of the application code to the working directory
COPY . .

#Step 6: build the NestJS application
RUN npm run build

#Step 7: expose the application port
EXPOSE 3000

#Step 8: define the command to run the application
CMD ["npm", "run", "start:prod"]


