FROM node:12-alpine

WORKDIR /

COPY . .

COPY package*.json ./


RUN npm install

RUN npm install bcrypt

ENV PORT=80

EXPOSE  80

CMD ["npm", "start"] 