import component from './component.vue'

export default function install (Vue, options) {
  // Usage: <auto-form action="/user/login"><input...></auto-form>
  Vue.component('auto-form', component)
}
