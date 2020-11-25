import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios' 
import VueHighlightJS from 'vue-highlight.js';
import VueRouter from 'vue-router'

import VueCodeHighlight from 'vue-code-highlight';
import powershell from 'highlight.js/lib/languages/powershell';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/default.css';


// Components load
import Homepage from './components/Homepage.vue'
import Post from './components/Post.vue'
import PostCategory from './components/PostCategory.vue'
import PostSearch from './components/PostSearch.vue'



Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		powershell,
    python,
    javascript
		
	}
});

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueCodeHighlight)

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL


const routes = [
  { path: '/', component: Homepage }, 
  { path: "/:post_name", component: Post},
  { path: "/category/:category_name", component: PostCategory},
  { path: "/search/:term", component: PostSearch},

]

const router = new VueRouter({
  mode: 'history',
  routes 
})


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
