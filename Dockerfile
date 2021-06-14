FROM node:lts-slim
RUN apt-get update && apt-get -y install procps
RUN npm i -g @nestjs/cli
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "npm-shrinkwrap.json*", "./"]
RUN yarn install && mv node_modules ../
COPY . .
EXPOSE 3000