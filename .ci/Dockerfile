FROM node:8.15

RUN mkdir /work
WORKDIR /work
COPY . /work
COPY ./apisprout /usr/bin/
RUN mkdir /data
RUN npm install
CMD ["./start.sh"]