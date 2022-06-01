FROM node:16 as build-stage

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV  PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g
COPY . /usr/src/app
RUN npm run build

FROM ubuntu:22.04
RUN apt update
RUN apt upgrade -y
RUN apt install nodejs nginx -y
RUN mv /etc/nginx/sites-available/default /etc/nginx/sites-available/default.BACKUP
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/sites-available/default
COPY --from=build-stage /usr/src/app/build /var/www/html/
ENTRYPOINT ["nginx", "-g", "daemon off;"]
