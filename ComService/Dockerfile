FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=7700

EXPOSE 7700

CMD [ "npm", "start" ]