FROM node:16.17.0-alpine
#ENV NODE_ENV=develope
WORKDIR /playsound-app
COPY ["package*.json","./"]
RUN npm i
COPY . .
# EXPOSE 3000
CMD ["npm","start"]