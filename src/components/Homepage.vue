<template>
    <div style="margin-left: 10px;" >
        <div v-for="p in info.posts" :key="p" style="margin-left: 10px; float: left; display: block;" class="overflow-hidden">
        <b-card  style="margin-top: 10px; max-height: 200px; width: 650px;">
            <b-row>            
            <b-col md="7">
                <b-card-body>
                    <b-card-title>
                        <a v-bind:href="'/'+p.post_name" >{{p.title}}</a>
                    </b-card-title>
                    <b-card-sub-title>
                        {{ p.post_date }}
                    </b-card-sub-title>

                </b-card-body>
            </b-col>
            <b-col md="5">
                <b-card-img v-if="p.thumbnail" :src="p.thumbnail" alt="Image" class="rounded-0" style="width: 210px; height: 175px"></b-card-img>
                <b-card-img v-else :src="p.category.thumbnail" alt="Image" class="rounded-0" style="width: 210px; height: 175px"></b-card-img>

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