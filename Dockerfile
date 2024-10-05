# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache bash python3 make g++

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the project
RUN yarn build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Install runtime dependencies (if any)
RUN apk add --no-cache bash

# Copy necessary files from the builder stage
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs .
COPY --from=builder /app/ecosystem.config.js .
COPY --from=builder /app/.env .

# Install PM2 globally
RUN yarn global add pm2

# Add a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8082

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
