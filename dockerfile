FROM node:12

RUN mkdir /opt/app
COPY src /opt/app
COPY server.js /opt/app
COPY package.json /opt/app
COPY start.sh /opt/app

RUN chmod 744 /opt/app/start.sh

EXPOSE 9999

CMD ["/opt/app/start.sh"] 
