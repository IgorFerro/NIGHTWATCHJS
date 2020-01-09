pipeline {
    agent {
        docker {image "node"}
    }
    stages {
        stage('Build') {
             steps {
         sh  "ping registry.npmjs"      
         sh "npm install"
        }

     }
    stage('Tests') {
       steps {
    sh "npm run test:ci"
    }
}
}
}
