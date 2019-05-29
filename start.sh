#!/bin/bash

apisprout -p 5000 /data/swagger.yaml &
function finish {
    kill "$!"
}
trap finish EXIT
npm start