pipeline {
    agent {
        docker {image "217306aaaa/node-wd"
               }
    }
    stages {
        stage('Build') {
             steps {   
         sh "npm install"
        }

     }
    stage('Tests') {
       steps {
    sh "npm run test:ci"
    
    }
    post {
        always {
        junit testDataPublishers:[[$class: 'AttachmentPublisher']], testResults: "tests_output/**/*.xml"
        }
    }
}
}
}
