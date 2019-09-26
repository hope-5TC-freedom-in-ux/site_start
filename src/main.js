import Vue from 'vue'
import App from './App.vue'
import VueMarkdown from 'vue-markdown'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown)

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '../public/main.css'

Vue.use(BootstrapVue)
Vue.use(VueMarkdown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
