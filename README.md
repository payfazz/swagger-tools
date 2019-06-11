# Swagger Tools
This tools is for API documentation using Swagger.
Able to provide mock API using APISprout

# How To Use
Run docker image using volume to specify the `swagger.yaml` file 
<pre><code>docker run -v {SWAGGER_FILE_PATH}:/usr/share/nginx/html/swagger.yaml -e SPEC_URL=swagger.yaml -p 5000:5000 -p 80:80 swagger-tools:0.02</code></pre>
<br> Port 5000 is where the <a href=https://github.com/danielgtaylor/apisprout>apisprout</a> is exposed. </br>
<br> This image uses <a href=https://hub.docker.com/r/redocly/redoc>redocly/redoc</a>. You can refer to the overview page regarding the environment variables. </br>
