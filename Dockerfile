FROM node:current-alpine

# Set the working directory
WORKDIR /app

# Copy package and config files for caching
COPY package.json yarn.lock next.config.mjs tsconfig.json ./

# Install necessary dependencies on Alpine and PM2
RUN apk update && apk add --no-cache bash python3 make g++ && yarn global add pm2

# Install project dependencies
RUN yarn install

# Copy the rest of the files
COPY public ./public
COPY .env.production .
COPY ecosystem.config.js .
COPY next-env.d.ts .
COPY ./src ./src

# Build the project (ensure the build step is correctly executed)
RUN yarn build --no-cache

# Expose the port
EXPOSE 8083

# Start the PM2 process in production mode
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
