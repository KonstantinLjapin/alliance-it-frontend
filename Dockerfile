FROM node:22-alpine
LABEL authors="lyapin"

WORKDIR /
COPY . .
WORKDIR frontend/
CMD npm install; npm start
