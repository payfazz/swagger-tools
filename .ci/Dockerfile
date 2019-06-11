# FROM node:8.15

# RUN mkdir /work
# WORKDIR /work
# COPY . /work
# COPY ./apisprout /usr/bin/
# RUN mkdir /data
# RUN npm install
# CMD ["./start.sh"]
FROM golang:1.12-alpine as builder
RUN apk add --no-cache git && \
  go get github.com/danielgtaylor/apisprout

FROM redocly/redoc:v2.0.0-rc.8-1
COPY ./start.sh .
COPY --from=builder /go/bin/apisprout /usr/local/bin/
RUN chmod a+x /usr/local/bin/docker-run.sh
CMD ["./start.sh"]