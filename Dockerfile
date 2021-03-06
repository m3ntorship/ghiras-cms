FROM strapi/base

ARG STRAPI_ADMIN_PATH
ENV STRAPI_ADMIN_PATH=$STRAPI_ADMIN_PATH
WORKDIR /m3-strapi
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY ./api ./api
COPY ./components ./components
COPY ./config ./config
COPY ./extensions ./extensions
COPY ./public ./public
COPY ./favicon.ico ./favicon.ico

ENV NODE_ENV production

RUN yarn build

CMD ["yarn", "start"]