# Base image
FROM node:20.11.1
WORKDIR /usr/src/discordapp
RUN npm install -g yarn || echo "Yarn is already installed"
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 8292
CMD ["yarn", "start"]