#FROM node:12-alpine

#WORKDIR /

#COPY . .

#COPY package*.json ./


#RUN npm install

#RUN npm install bcrypt

#ENV PORT=80

#EXPOSE  80

#CMD ["npm", "start"] 


FROM node:17-alpine3.14

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN apk add --no-cache make gcc g++ python3 && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

#RUN npm install

COPY . /app

EXPOSE  80

CMD ["node", "index.js"]
