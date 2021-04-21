FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=7600

EXPOSE 7600

CMD [ "npm", "start" ]