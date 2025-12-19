# Dockerfile for Vue.js (Vite) project
# Use official Node.js image as the base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port Vite uses (default 5173, but 3000 is also common)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
