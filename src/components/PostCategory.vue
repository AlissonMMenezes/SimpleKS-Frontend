<template>
    <div>
        <article class="post excerpt" v-for="p in info.posts" :key="p">
            <h2 class="title"><a v-bind:href="'/'+p.post_name">{{p.title}}</a> </h2>
            <span class="post-content" v-html="p.content">                
            </span>        
        </article>
    </div>
</template>


<script>
export default {
  name: 'PostCategory',
  data:function(){  
      return {
          info : []
      }    
  },
  mounted:function(){  
      axios.get('/posts?category='+window.location.pathname.split("/")[2])
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