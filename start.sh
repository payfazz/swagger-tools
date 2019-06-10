#!/bin/sh
apisprout -p 5000 /usr/share/nginx/html/swagger.yaml &
function finish {
    kill "$!"
}
trap finish EXIT

chmod a+x /usr/local/bin/docker-run.sh
/usr/local/bin/docker-run.sh