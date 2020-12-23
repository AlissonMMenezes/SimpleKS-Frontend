<template>
    <div style="margin-left: 10px;">
        <b-card :title="info.title" style="margin-top: 10px;">
            <b-card-text v-html="info.content">            
            </b-card-text>
        </b-card>
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
