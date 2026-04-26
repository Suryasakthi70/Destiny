pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Suryasakthi70/Destiny.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Destiny Website...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Destiny Website...'
            }
        }
    }
}
