import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import apicardPage from "./apicardPage.vue"
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: "/",
      name: "drinks",
      component: apicardPage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
