import regeneratorRuntime from 'regenerator-runtime'
import Vue from 'vue'
import App from './App.vue'
import VueAutoForm from '../'

Vue.config.productionTip = false
init()

function createVueApp () {
  Vue.use(VueAutoForm)
  return new Vue({
    render (h) {
      return h(App, {
        props: {
          log: this.log,
          error: this.error
        }
      })
    },
    mounted () {},
    methods: {
      log (...t) {
        console.log('app.log:', ...t)
      },
      error (...t) {
        console.error('app.log:', ...t)
      }
    }
  }).$mount('#app')
}

function init () {
  // if (window.__vue_app) {
  //   console.log('vue app already existed')
  //   return;
  // }
  window.__vue_app = createVueApp()
}
