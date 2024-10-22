FROM node:current-alpine

# Set the working directory
WORKDIR /app

# Copy package files first for caching
COPY package.json .
COPY yarn.lock .

# Install necessary dependencies on Alpine
RUN apk update && apk add --no-cache bash python3 make g++

# Install project dependencies
RUN yarn install

# Copy the rest of the files
COPY next.config.mjs .
COPY tsconfig.json .
COPY public ./public
COPY .env.production .
COPY ecosystem.config.js .
COPY next-env.d.ts .
COPY ./src ./src

# Install PM2 globally
RUN yarn global add pm2

# Build the project
RUN rm -rf node_modules/.cache
RUN yarn build

# Expose the port
EXPOSE 8083

# Start the PM2 process in production mode
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
