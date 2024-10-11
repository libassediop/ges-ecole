# Use the official Node.js image as the base image
FROM node:16.20.2 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps


# Copy the rest of the application code
COPY . .

# Expose port 80 to the outside world
EXPOSE 4200

# Start Nginx when the container starts
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--disable-host-check"]
