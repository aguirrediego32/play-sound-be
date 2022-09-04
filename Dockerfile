FROM node:18.8.0-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package*.json","./"]
RUN npm i --production
COPY . .
EXPOSE 3000:3000
CMD ["npm","start"]