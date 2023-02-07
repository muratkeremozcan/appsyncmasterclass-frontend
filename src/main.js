import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import router from './router'
import store from './store'

// the env vars are from the .env file for backend, or aws console CloudFormation
Amplify.configure({
  Auth: {
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_KuxoaK6Zm',
    userPoolWebClientId: '9mb7qdjq54f2vf8kvuobljphp',
    mandatorySignIn: true,
  },
})

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    'https://awfrp7n7rrhw5kzqimfegnqzeq.appsync-api.eu-west-1.amazonaws.com/graphql',
  aws_appsync_region: 'eu-west-1',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
}

Amplify.configure(myAppConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
