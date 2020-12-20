<template>
    <sui-card-group :items-per-row="1">
        <sui-card v-for="p in info.posts" :key="p.post_name">
            <sui-card-content>
            <sui-card-header><router-link :to="p.post_name">{{p.title}}</router-link></sui-card-header>
            <sui-card-meta>{{p.post_date}}</sui-card-meta>
            <sui-card-description v-html="p.content" ></sui-card-description>
            </sui-card-content>
        </sui-card>        
    </sui-card-group>
</template>


<script>
export default {
  name: 'Homepage',
  data:function(){  
      return {
          info : []
      }    
  },
  mounted:function(){  
      axios.get('/posts')
      .then(response => (this.info = response.data))
  }
}
import axios from 'axios'
</script>