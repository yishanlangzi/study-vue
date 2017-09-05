// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui' // New Added
import 'element-ui/lib/theme-default/index.css' // New Added
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI) // New Added
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
