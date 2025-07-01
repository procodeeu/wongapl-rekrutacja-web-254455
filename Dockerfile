FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production=false
COPY . .
EXPOSE 4321 4001
CMD ["npm", "run", "dev:docker"]