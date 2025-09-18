# ---- Stage 1: Build the Next.js app ----
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# ---- Stage 2: Run the Next.js app ----
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/next.config.js ./

# Expose app port
EXPOSE 3000

# Run in production mode
CMD ["npm", "run", "start"]
