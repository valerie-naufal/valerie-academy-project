# Stage 1: Build Angular app
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular dist files
COPY --from=builder /app/dist/valerie-academy-project /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
