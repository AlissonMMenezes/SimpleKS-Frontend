<template>
    <sui-menu secondary>
        <a is="sui-menu-item" v-bind:href="'/'" content="Alisson Machado" />
        <a is="sui-menu-item" v-for="p in info.pages" :key="p.post_name" :content="p.title" v-bind:href="'/'+p.post_name" />
        <sui-menu-menu position="right">
            <sui-menu-item>
            <sui-input transparent icon="search" placeholder="Search..." />
            </sui-menu-item>
        </sui-menu-menu>
    </sui-menu>        
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

import axios from 'axios'
</script>
