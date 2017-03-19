// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Nav from './components/navigator.vue'
import Ranklist from './components/RankList.vue'
import Footbar from './components/Footbar.vue'

Vue.component('navigator', Nav)
Vue.component('rank-list', Ranklist)
Vue.component('footbar', Footbar)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
