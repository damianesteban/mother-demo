FROM node:14-alpine


# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY ./dist/apps/referrals /usr/src/app/

ENV PORT=3333
EXPOSE ${PORT}
# Populate npmrc, install dependencies
RUN yarn install --production


# Bundle app source

CMD node ./main.js
