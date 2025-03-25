FROM node:20 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build CSS
RUN npm run build:css

# Install Hugo
RUN curl -L https://github.com/gohugoio/hugo/releases/download/v0.120.3/hugo_extended_0.120.3_linux-amd64.tar.gz | tar -xz
RUN mv hugo /usr/local/bin/

# Build the site
RUN hugo --minify

# Use Nginx for serving the static site
FROM nginx:alpine

# Copy the built site
COPY --from=build /app/public /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]