import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app';
//＃ifdef H5
import jwx from '@/owo/h5wxjssdk'
Vue.prototype.$jwx = jwx;
//＃endif
const app = new Vue({
  ...App
})
app.$mount()
