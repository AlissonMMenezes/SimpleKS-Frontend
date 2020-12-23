<template>
    <div style="margin-left: 10px;" >
        <div v-for="p in info.posts" :key="p" style="margin-left: 10px; float: left; display: block;    " class="overflow-hidden">
        <b-card  style="margin-top: 10px; max-height: 200px; max-width: 650px;">
            <b-row no-gutters>            
            <b-col md="8">
                <b-card-body>
                    <b-card-title>
                        <a v-bind:href="'/'+p.post_name" >{{p.title}}</a>
                    </b-card-title>
                    <b-card-sub-title>
                        {{ p.post_date }}
                    </b-card-sub-title>

                </b-card-body>
            </b-col>
            <b-col md="4">
                <b-card-img v-if="p.thumbnail != null" :src="p.thumbnail" alt="Image" class="rounded-0" style="wdith: 209.333px; height: 175.283px"></b-card-img>
                <b-card-img v-else :src="p.category.thumbnail" alt="Image" class="rounded-0"></b-card-img>

            </b-col>
            </b-row>
        </b-card>
        </div>
    </div>
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
</style>