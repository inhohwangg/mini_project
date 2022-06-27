FROM node:16.14.2

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

EXPOSE 443

CMD ["node", "app.js"]