import Vue from 'vue'
import App from './App.vue'
import router from './router'
//样式
import './assets/scss/style.scss'
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/swiper-bundle.css'


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
