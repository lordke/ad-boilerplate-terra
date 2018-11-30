FROM registry.api.weibo.com/ad/aion:latest

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY . /home/node/app

EXPOSE 7001

CMD ["aion-docker", "start", "aion.config.js"]
