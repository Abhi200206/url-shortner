# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
