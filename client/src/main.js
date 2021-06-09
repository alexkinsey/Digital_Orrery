import Vue from 'vue'
import App from './App.vue'
// import * as firebase from 'firebase/app'
import firebase from '@firebase/app'
firebase.initializeApp();

export default firebase

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
