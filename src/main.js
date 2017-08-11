// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import App from './App'
import router from './router'
import { config } from './firebase'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    })
  }
})
