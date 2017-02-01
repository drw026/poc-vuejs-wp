import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import Content from './components/content/Content.vue'
import Links from './components/links/Links.vue'

Vue.$http = Axios;

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Content },
    { path: '/links', component: Links },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
