FROM node:16.18-bullseye-slim

COPY . /app 
WORKDIR /app 

RUN npm i @nestjs/cli -g

EXPOSE 3000

CMD ["sh"]
