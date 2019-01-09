// Import Vue
import Vue from 'vue';

// Import Vuelidate
import Vuelidate from 'vuelidate'

//Import vuex
import store from './vuex/index.js';

// Import axios
import axios from 'axios';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import App Component
import App from './app';
import vuex from './vuex/index.js';


// Init F7 Vue Plugin
Framework7.use(Framework7Vue)
//axios.defaults.withCredentials = true
axios.defaults.withCredentials-true;
axios.defaults.baseURL="http://188.188.1.15:3000";//"http://192.168.123.151:3000";//'http://localhost:3000/'
///axios.defaults.baseURL='http://192.168.123.194:3000/'
Vue.prototype.$reqs=axios;
Vue.use(Vuelidate)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  store,
  // Register App Component
  components: {
    app: App
  }
});
