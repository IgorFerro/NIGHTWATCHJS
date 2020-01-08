# NIGHTWATCHJS
Nightwatch JS Project

# Install cmder full version
1. https://cmder.net/
2. Add C:\Tools\cmder\vendor\git-for-windows\bin  and C:\Tools\cmder\vendor\git-for-windows\usr\bin  in path in environment variables

# Install Express and Mocha
1. npm i express
2. npm i mocha -D

# Install Nightwacth
1. npm install nightwatch --save -dev

# Install Chromedriver
1. npm install chromedriver --save-dev

# Install Babel for transpilation
1. npm install babel-cli --save-dev
2. npm install babel-cli -g
3. npm install babel-preset-es2015
4. npm install babel-plugin-add-module-exports --save-dev

# Install Postgres
1. npm install pg --save-dev

# Run tests by group
1. npm run test:login
2. npm run test:smoke (by tags)

# Install Geckdriver
1. npm install geckodriver --save-dev

# Install Jenkins via Docker
1. docker container run ^   --name jenkins-blueocean ^   --rm ^   --detach ^   --network jenkins ^   --env DOCKER_HOST=tcp://docker:2376 ^   --env DOCKER_CERT_PATH=/certs/client ^   --env DOCKER_TLS_VERIFY=1 ^   --publish 8080:8080 ^   --publish 50000:50000 ^   --volume jenkins-data:/var/jenkins_home ^   --volume jenkins-docker-certs:/certs/client:ro ^   jenkinsci/blueocean
2. 
