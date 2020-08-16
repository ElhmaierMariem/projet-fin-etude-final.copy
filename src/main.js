/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
import axios from 'axios';
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import './registerServiceWorker';



axios.defaults.baseURL = "http://localhost:9090/api"

require('@/store/subscriber')

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch); 
Vue.use(axios);

if (localStorage.getItem('user')){
  console.log(JSON.parse(localStorage.getItem('user')))
  store.dispatch('auth/attempt', JSON.parse(localStorage.getItem('user')))
}
/*axios.post("auth/signup",{
  username: "user",
  password: "12345678",
  email: "mariem@gmail.com",
  role: ["user"]
})*/

// axios.post("auth/signup",{
//   username: "maryem",
//   password: "maryem123",
//   email: "maryem@maryem.maryem",
//   role: ["admin"]
// })
/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
