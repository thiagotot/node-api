FROM node:12
RUN apt-get update && apt-get install git -y && apt-get install imagemagick -y;

WORKDIR /nodeapi

COPY package*.json ./
COPY controller controller
COPY server.js server.js

RUN npm install
RUN chown -R node:node /nodeapi

ENV NODE_ENV=production
ENV ENV_ECS=true
USER node
EXPOSE 9999

ENTRYPOINT ["npm", "start"]