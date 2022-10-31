pipeline {

    agent any

    stages {
        stage("build") {

            steps {
                echo 'building app'
                sh 'npm install'
            }
        }
        stage("test") {
            
            steps {
                echo 'testing the app'
            }
        }
        stage("deploy") {
            
            steps {
                echo 'deploying app'
            }
        }
    }
}