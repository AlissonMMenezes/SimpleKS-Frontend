import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' 
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics';
import VueMeta from 'vue-meta';
import VueHighlightJS from 'vue-highlight.js';
import 'vue-highlight.js/lib/allLanguages'
import 'highlight.js/styles/default.css';
import SuiVue from "semantic-ui-vue";
import 'semantic-ui-css/semantic.min.css';

// Components load
import Homepage from './components/Homepage.vue'
import Post from './components/Post.vue'
import PostCategory from './components/PostCategory.vue'
import PostSearch from './components/PostSearch.vue'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(VueHighlightJS);
Vue.use(SuiVue);
Vue.use(VueMeta);
Vue.use(VueRouter)
Vue.use(VueAnalytics, {
  id: 'GOOGLE_ANALYTICS_ID',
  router
});

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
