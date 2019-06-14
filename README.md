# Swagger Tools
This tools is for API documentation using <a href=https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md>OpenAPI</a>.
Able to provide mock API using APISprout

# How To Use
Run docker image using volume to specify the `swagger.yaml/openapi.yaml` file 
<pre><code>docker run -v {OPENAPI_FILE_PATH}:/usr/share/nginx/html -e SPEC_URL={OPENAPI_FILE_NAME} -p 5000:5000 -p 80:80 swagger-tools:0.0.2</code></pre>
<br> Port 5000 is where the <a href=https://github.com/danielgtaylor/apisprout>APISprout</a> is exposed. </br>
<br> This image uses <a href=https://hub.docker.com/r/redocly/redoc>redocly/redoc</a>. You can refer to the overview page regarding the environment variables. </br>
