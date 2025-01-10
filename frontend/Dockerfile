# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy all other files into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]

