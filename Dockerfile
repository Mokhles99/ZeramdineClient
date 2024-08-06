FROM node:20.15.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
