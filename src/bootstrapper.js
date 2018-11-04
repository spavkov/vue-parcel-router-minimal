import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '/src/App.vue';
import Routes from '/src/routes.js'

Vue.use(VueRouter);

var data = {

};

var router = new VueRouter({
    mode: 'history',
    routes: Routes.createRoutes()
});

new Vue({
  el: '#app',
  router: router,
  created: function(){
    console.log('app created');
    },
  render: h => h(App)
});