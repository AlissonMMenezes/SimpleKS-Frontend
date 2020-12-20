<template>
    <div>      
         <sui-menu text vertical>
            <sui-menu-item header>Categorias</sui-menu-item>
            <a is="sui-menu-item" v-for="item in info.categories" :key="item" :content="item" v-bind:href="'/category/'+item" />
        </sui-menu>
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
