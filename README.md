# Swagger Tools
This tools is for API documentation using Swagger.
Able to provide mock API using APISprout

# How To Use
Run docker image using volume to specify the `swagger.yaml` file 
<pre><code>`docker run -v {SWAGGER_FILE_PATH}:/usr/share/nginx/html/swagger.yaml -e SPEC_URL=swagger.yaml -p 5000:5000 -p 80:80 swagger-tools:0.02`</code></pre>

