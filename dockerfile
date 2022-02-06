
FROM node:17-alpine3.14

WORKDIR /app

COPY . /app

COPY package*.json ./

RUN apk add --no-cache make gcc g++ python3 && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

#RUN npm install

COPY . /app

EXPOSE  80

CMD ["node", "index.js"]
