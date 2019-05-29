#!/bin/bash

# index=0
# pid_array=()
# for entry in ./api/*
# do
#     echo "$entry"
#     apisprout -p $(( 5000 + index )) $entry &
#     pid_array+=" $!"
#     index=$(( index + 1 ))
# done
# function finish {
#     for id in $pid_array
#     do
#         kill "$id"
#     done
# }
apisprout -p 5000 /data/swagger.yaml &
function finish {
    kill "$!"
}
trap finish EXIT
npm start