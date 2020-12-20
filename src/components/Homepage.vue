<template>
    <b-container style="margin-top: 30px;">
        <b-card :title="p.title" :sub-title="p.post_date" v-for="p in info.posts" :key="p" style="margin-top: 10px;">
            <b-card-text v-html="p.content">            
            </b-card-text>
            <b-button v-bind:href="'/'+p.post_name" variant="outline-primary">Ler mais</b-button>
        </b-card>
    </b-container>
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


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
</script>
<style scoped>
h2.title {
    color: #333;
    font-weight: 400;
    line-height: 140%;
    font-size: 25px;
}

.post-content {
    font-size: 14px;
    line-height: 160%;
    color: #989898;
}
.post.excerpt {
    clear: both;
    padding: 30px 0;
    position: relative;
}
.post.excerpt h2.title a {
    color: #333;
    font-weight: 400;
    line-height: 140%;
    font-size: 25px;
}
</style>