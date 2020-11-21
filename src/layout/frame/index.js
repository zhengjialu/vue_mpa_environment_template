import Vue from 'vue'
import { Select, Menu, Submenu, MenuItem, Container, Header, Main, Footer } from 'element-ui'
import Frame from './frame'

const plugins = [Select, Menu, Submenu, MenuItem, Container, Header, Main, Footer]

plugins.forEach((item) => {
  // Vue.component(item.name, item)
  Vue.use(item)
})

export default Frame
