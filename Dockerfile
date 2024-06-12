# Use the official Node.js image
FROM node:20.14.0-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Install build tools for compiling native modules
RUN apk add --no-cache python3 make g++

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

ENV WATCHPACK_POLLING true

# Copy local code to the container image
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
