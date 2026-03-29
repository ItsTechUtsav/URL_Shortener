pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t url-shortener .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag url-shortener itstechutsav/url-shortener'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push itstechutsav/url-shortener'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 itstechutsav/url-shortener'
            }
        }
    }
}