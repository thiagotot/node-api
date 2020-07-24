FROM node:12

COPY . .

# App runs on port 9999
EXPOSE 9999

# Start the app
CMD [ "npm", "start"]
