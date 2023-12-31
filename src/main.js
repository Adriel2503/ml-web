import './assets/main.css'

//import Vue from 'vue'
import 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
