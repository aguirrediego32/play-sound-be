FROM node:18.8.0-alpine
ENV NODE_ENV=develope
WORKDIR /playsound-app
COPY ["package*.json","./"]
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]