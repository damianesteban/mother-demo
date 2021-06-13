FROM node:14-alpine

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
COPY ./dist/apps/frontender /usr/src/app/
# Copy initial files

ENV PORT=4200
EXPOSE ${PORT}
# Populate npmrc, install dependencies
RUN yarn install --production


# Bundle app source

CMD node ./main.js
