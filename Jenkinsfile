pipeline {

    agent any

    stages {
        stage("build") {

            steps {
                echo 'building app'
                script {
                    npm install
                }
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