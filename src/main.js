// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Appp from './App';
import router from './router';

// import {FormInput} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { NavbarPlugin, ButtonPlugin, FormInputPlugin, LayoutPlugin, FormPlugin, BFormGroup,
  FormSelectPlugin, FormGroupPlugin, FormCheckboxPlugin,
  CardPlugin, AlertPlugin, ProgressPlugin, BreadcrumbPlugin,
  ButtonGroupPlugin, ListGroupPlugin, CarouselPlugin } from 'bootstrap-vue';
import { BFormSelect } from 'bootstrap-vue';
import store from './store/index.js'; //ini buat ngejalanin index.js jadi harus di import

Vue.config.productionTip = false;
Vue.use(NavbarPlugin);
Vue.use(ButtonPlugin);
Vue.use(FormInputPlugin);
Vue.use(LayoutPlugin);
Vue.use(FormPlugin);
Vue.use(FormSelectPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(CardPlugin);
Vue.use(AlertPlugin);
Vue.use(ProgressPlugin);
Vue.use(BreadcrumbPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(ListGroupPlugin);
Vue.use(CarouselPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,

  // BootstrapVue,
  components: { Appp,
  	'b-form-select' : BFormSelect, //tapi ini masih belum berjalan jadi masih pake import Vue.use
  	'b-form-group' : BFormGroup}, //https://forum.vuejs.org/t/how-to-use-multiple-vue-components-on-single-page/10559/5
  template: '<Appp/>'
})
