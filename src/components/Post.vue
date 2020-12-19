<template>
    <div style="margin-top: 40px;">
        <el-card style="margin-top:10px;">
            <div slot="header" class="clearfix">
                <span><h5>{{info.title}}</h5></span>
            </div>       
            <div v-html="info.content">
            </div>     
        </el-card>
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
      var post_name = String(window.location.pathname).replaceAll("/","")  
      console.log(post_name)
      axios.get('/posts/'+post_name)
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
<style >
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
body {
    white-space: pre-wrap !important; 
    word-wrap: break-word !important;
    font-family: inherit !important;
}

</style>
