import Vue from 'vue'
import Hello from './page-hello.vue'
import store from './store'

import { Button, Message } from 'element-ui'

Vue.config.productionTip = false

const plugins = [Button]

plugins.forEach((item) => {
  // Vue.component(item.name, item)
  Vue.use(item)
})

Vue.prototype.$message = Message

new Vue({
  store,
  render: (h) => h(Hello),
}).$mount('#app')
