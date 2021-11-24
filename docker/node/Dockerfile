ARG NODE_VERSION
FROM node:${NODE_VERSION}
WORKDIR /var/www/html/frontend/

RUN apt-get update && \
    npm install vue@3.* && \
    npm install @vue/cli -g && \
    npm install webpack -g && \
    npm install webpack-cli -g && \
    npm install webpack-dev-server -g && \
    npm update


CMD tail -f /dev/null