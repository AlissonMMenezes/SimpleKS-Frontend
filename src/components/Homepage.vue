<template>
    <container>
        <b-row class="p-2 pl-3">
        <b-col class="p-2">    
            <b-card no-body class="overflow-hidden" border-variant="light">
                <b-card-img :src="info.posts[0].thumbnail" alt="Image" style="max-width: 376px; max-height: 282px; text-align: center;"></b-card-img>
                <b-card-body>
                    <b-card-title>
                        <a style="font-size: 22px;" v-bind:href="'/'+info.posts[0].post_name" >{{info.posts[0].title}}</a>
                    </b-card-title>
                    <b-card-text v-html="info.posts[0].content" style="font-size: 18px;"></b-card-text>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col>
            <ul class="list-unstyled">
                <b-media v-for="p in info.posts.slice(1,6)" :key="p" tag="li" class="p-2">
                    <template #aside>
                        <b-img v-if="p.thumbnail" :src="p.thumbnail" alt="Image" class="rounded-0" style="max-width: 100px; height: 100px"></b-img>
                        <b-img v-else :src="p.category.thumbnail" alt="Image" class="rounded-0" style="mac-width: 100px; height: 100px"></b-img>
                    </template>
                    <a class="mt-0 mb-1" style="font-size: 16px;" v-bind:href="'/'+p.post_name">{{p.title}}</a>
                    <p class="mb-0" style="font-size: 16px;">
                        {{ p.post_date | moment  }}
                    </p>
                 </b-media>
            </ul>                        
        </b-col>
        <b-col>
            <Subscribe/>
            <br/>
            <h5>Últimos Comentarios</h5>
            <ul class="list-unstyled">
                <b-media v-for="c in comments.comments.slice(0,5)" :key="c" tag="li" class="p-2">
                    <a class="mt-0 mb-1" style="font-size: 16px;" v-bind:href="'/'+c.post_name+''">{{c.comment_author}} - {{c.comment_date | moment}}</a>
                    <p class="mb-0" style="font-size: 16px;" v-html="c.comment_content.substring(0,200)"></p>
                 </b-media>
            </ul> 
        </b-col>
        </b-row>
        <hr/>
        <b-card-group class="pl-4" columns>
             <b-card v-for="p in info.posts.slice(6,)" :key="p" no-body border-variant="light" class="overflow-hidden p-2 h-50">
                 <b-row no-gutters>
                    <b-col md="3">
                        <b-card-img v-if="p.thumbnail" :src="p.thumbnail" style="max-width: 100px; height: 100px" alt="Image" class="rounded-0" ></b-card-img>
                        <b-card-img v-else :src="p.category.thumbnail" style="max-width: 100px; height: 100px" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="9">
                        <b-card-body>
                            <a style="font-size: 16px;" v-bind:href="'/'+p.post_name" >{{p.title}}</a>
                        </b-card-body>
                    </b-col>
                </b-row>            
            </b-card>            
        </b-card-group>

    </container>
</template>
<script>
export default {
  components: { Subscribe },
  name: 'Homepage',
  data:function(){  
      return {
          info : [],
          comments: []
      }    
  },
  mounted:function(){  
      axios.get('/posts')
      .then(response => (this.info = response.data))
      axios.get('comments')
      .then(response => this.comments = response.data)
  },
  filters: {
        moment: function (date) {
            return moment(date).format('DD/MM/yyyy');
        }
    }
}


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import Subscribe from './Subscribe.vue'
import moment from 'moment'


</script>
<style scoped>
</style>