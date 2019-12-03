import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/scss/style.scss'

// import VueMermaid from 'vue-mermaid' // flowchart diagrams

// Vue.use(VueMermaid)
Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({ routes })
/* eslint-disable-next-line no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
