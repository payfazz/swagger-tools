FROM node:8.15

RUN mkdir /work
WORKDIR /work
COPY . /work
COPY ./apisprout /usr/bin/
RUN mkdir /data
# VOLUME [ "/data" ]
# EXPOSE 5000
# EXPOSE 3000
RUN npm install
CMD ["./start.sh"]