FROM node:12

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app contents
COPY . .

# App runs on port 9999
EXPOSE 9999

# Start the app
CMD [ "npm", "start"]
