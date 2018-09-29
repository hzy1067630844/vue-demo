// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'


Vue.config.productionTip = false;

Vue.use(VueRouter);
// Vue.use(Vuex);

// var store = new Vuex.store({
// 	state:{},
// 	mutations:{},
// 	getters:{
		
// 	}
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c=>c(App)
})
