import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/styles/_app.scss'
import './registerServiceWorker'
import VeeValidate, { ValidationProvider } from 'vee-validate'

Vue.config.productionTip = false

Vue.directive('visible', (el, binding) => {
  var value = binding.value;

  if (!value) {
    el.style.visibility = 'hidden';
  } else {
    el.style.visibility = 'visible';
  }
});

Vue.use(VeeValidate )
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  // components: {
  //   ValidationProvider
  // },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
