# From the base image node
FROM node:14-slim
WORKDIR /HotelManagementSystem
ENV NODE_ENV=DEV

# Copy all the files from your file system to the container file system
COPY ["package.json", "package-lock.json*", "./"]

# Install all dependencies
RUN npm install
RUN npm ci --only=production

# Copy other files as well
COPY . .

# Expose the port
EXPOSE 80

# Command to execute when the image is instantiated
CMD [ "node", "app.js" ]