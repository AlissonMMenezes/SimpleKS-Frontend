<template>
    <div>        
        <b-navbar>
            <b-navbar-brand href="/">Alisson Machado</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav  v-for="p in info.pages" :key="p">
                    <b-nav-item class="nav-link" v-bind:href="'/'+p.page_name/">{{p.title}}</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-form-input size="sm" v-on:keyup.enter="search"  class="mr-sm-2" v-model="term" :placeholder="term"></b-form-input>
                    <b-button size="sm" v-on:click="search"  class="my-2 my-sm-0" type="button">Buscar</b-button>
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
</script>
<style scoped>
</style>
