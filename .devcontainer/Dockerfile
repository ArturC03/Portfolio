FROM archlinux:latest

# Set the working directory to /app
WORKDIR /app

# Update the package list and install necessary packages
RUN pacman -Syy && pacman -S --noconfirm base-devel git curl

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_latest.x | bash
RUN pacman -S --noconfirm nodejs

# Set the environment variables
ENV NODE_ENV=development

# Expose the port
EXPOSE 3000

# Run the command to start the development server
CMD ["npm", "run", "dev"]
