<template>
    <div>        
        <div class="p-3">
            <h3 id="sidebar-no-header-title">Categorias</h3>        
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
<style scoped>
h3, #sidebars .widget h3 a {
    font-weight: 600;
    line-height: 20px;
    font-size: 20px;
    color: #000;
    margin: 20px 0 5px 0;
        margin-top: 20px;
    padding: 10px 0;
        padding-top: 10px;
}
</style>