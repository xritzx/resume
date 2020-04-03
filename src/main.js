import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import BootstrapVue from 'bootstrap-vue'
import { Material } from 'vue-color'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/analytics'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

let firebaseConfig = {
  apiKey: "AIzaSyCLJR-7Qp-9ESQnWFeV3QFOLNWf_ObTolU",
  authDomain: "x-ritz-x.firebaseapp.com",
  databaseURL: "https://x-ritz-x.firebaseio.com",
  projectId: "x-ritz-x",
  storageBucket: "x-ritz-x.appspot.com",
  messagingSenderId: "1034636935541",
  appId: "1:1034636935541:web:02273e9afca9222465133c",
  measurementId: "G-VCVF96X0GG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

library.add(faUserSecret, faFacebook, faInstagram, faTwitter, faLinkedin, faGithub, faMedium) 
Vue.component('fa', FontAwesomeIcon)
Vue.component('material-picker', Material)
Vue.component('vue-markdown', VueMarkdown)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
