<template>
    <b-container>
        <b-card title="Categorias" sub-title="" style="margin-top: 10px;">
            <b-card-text v-for="c in info.categories" :key="c">
                <a class="nav-link" v-bind:href="'/category/'+c" tag="b-nav-item">{{c}}</a>          
            </b-card-text>
        </b-card>
    </b-container> 
</template>

<script>
export default {
  name: 'Sidebar',
  data:function(){  
      return {
          info : []
      }    
  },
  mounted:function(){  
      axios.get('/categories')
      .then(response => (this.info = response.data))
  }
}
import axios from 'axios'

</script>
