<template>
    <div>      
      <div class="single_post">
          <h2 class="single-title">{{info.title}}</h2>
          <article id="content" class="post-single-content box mark-links" v-html="info.content">
          </article>   
      </div>     
    </div>
</template>


<script>
export default {
  name: 'Post',
  data:function(){ 
    console.log(window.location.pathname) 
      return {
          info : null
      }    
  },
  mounted:function(){  
      console.log(window.location.pathname)
      axios.get('/posts/'+window.location.pathname.replace("/",""))
      .then(response => (this.info = response.data))

      let adsense = document.createElement('script')
      adsense.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
      adsense.setAttribute("data-ad-client","ca-pub-3486974141505090")
      adsense.setAttribute("async", true)
      document.head.appendChild(adsense)
  }
}


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

</script>
<style scoped>
img {
    width: 100% important! ; 
}


.single_post {
    float: left;
    width: 100%;
    box-sizing: border-box;
}
.single-title {
    float: left;
    padding: 0 0 0 0;
    font-size: 32px;
    line-height: 1.4;
    margin: 0;
}

.post-single-content {
    font-size: 14px;
    line-height: 22px;
    float: left;
    width: 100%;
}

div#content {
    padding-right: 30px;
}

p {
    margin-bottom: 20px;
}
p {
    line-height: 150%;
}

</style>