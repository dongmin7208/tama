ARG APP_HOME=/tamastudy
#편하게작성

# build stage
FROM node:16-alpine as build
WORKDIR ${APP_HOME}

COPY package*.json ./
RUN yarn install


COPY . ${APP_HOME}
RUN yarn build

# deploy stage
FROM nginx:alpine
COPY --from=build ${APP_HOME}/build /var/www
COPY ./nginx /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]