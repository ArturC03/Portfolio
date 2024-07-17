# Use an official Node.js 16 image as a base
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["npm", "run", "dev"]
