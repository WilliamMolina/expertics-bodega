FROM node:8-alpine as build 
WORKDIR /home/node/app
COPY package.json .
RUN npm install

FROM node:8-alpine
WORKDIR /home/node/app
COPY . .
COPY --from=build /home/node/app/node_modules node_modules
RUN adduser -D -u 1402 nodeuser
USER nodeuser
CMD ["npm", "start"]
EXPOSE 3000