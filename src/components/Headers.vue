<template>
    <div>
        
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">Alisson Machado</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav  v-for="p in info.pages" :key="p">
                <a class="nav-link" v-bind:href="'/'+p.post_name" tag="b-nav-item">{{p.title}}</a>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                    <b-form-input size="sm" v-on:keyup.enter="search"  class="mr-sm-2" v-model="term" :placeholder="term"></b-form-input>
                    <b-button size="sm" v-on:click="search"  class="my-2 my-sm-0" type="button">buscar</b-button>

            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>



<script>
export default {
  name: 'Headers',
  data:function(){  
      return {
          info : [],
          term: null
      }    
  },
  mounted:function(){  
      axios.get('/pages')
      .then(response => (this.info = response.data))
  },
  methods:{
      search(){
          window.location.href = "/search/"+this.term
      }
  }
}


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>
<style scoped>
a {
    transition: all 0.25s linear;
    font-size: 14px;
    color: #333;
    font-weight: 700;
    text-align: left;
    text-decoration: none;
    padding: 0 20px;
    line-height: 45px;
    font-family: 'Roboto', 'helvetica neue', helvetica, arial, sans-serif;
    display: block;
}
</style>