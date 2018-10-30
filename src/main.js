// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from 'vue-router';
import axios from 'axios';
import calculator from './Test';

Vue.prototype.Test = calculator;
axios.defaults.baseURL = 'http://127.0.0.1:4000/';
Vue.use(axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    axios,
    components: { App },
    template: '<App/>'
});
