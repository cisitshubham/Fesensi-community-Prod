FROM node:20-alpine

# Install Git & Bash (required for webhook clone/pull)
RUN apk add --no-cache git bash

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code and build
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]