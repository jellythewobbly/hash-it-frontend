@Library('Hash-it-Pipeline-Library') _

useTipPodTemplate('Implementation_hashit'){


        stage ('Checkout') {
                deleteDir()
                checkout scm
        }

        stage("Docker Build & Push") {
           container('build-docker2'){
             useDockerRegistry{  
               sh './deploy_docker.sh'
            } 
          }
        }


        stage("Kubernetes") {
          container('kubectl'){
              withEnv(['K8_NAMESPACE=hash-it-dev']) {
              sh './deploy_k8s.sh'
            }
          }
        }
}
