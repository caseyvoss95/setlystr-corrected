pipeline {

    agent any

    tools {nodejs "node"}

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