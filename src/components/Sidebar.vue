<template>
    <div>        
        <div class="p-3">
            <h4 id="sidebar-no-header-title">Categorias</h4>        
            <nav class="mb-3">
            <b-nav vertical  v-for="c in info.categories" :key="c"> 
                <a class="nav-link" v-bind:href="'/category/'+c" tag="b-nav-item">{{c}}</a>             
            </b-nav>
            </nav>
        </div>        
    </div>  
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
