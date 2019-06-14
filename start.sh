#!/bin/sh
apisprout -p 5000 /usr/share/nginx/html/${SPEC_URL} &
chmod a+x /usr/local/bin/docker-run.sh
/usr/local/bin/docker-run.sh

function finish {
    kill "$!"
}
trap finish EXIT