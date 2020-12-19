<template>
    <el-col>
        <el-card>
            <div slot="header" class="clearfix">
                <span><h5>Categorias</h5></span>
            </div>    
            <div vertical  v-for="c in info.categories" :key="c" class="text item">
                <a class="nav-link" v-bind:href="'/category/'+c">{{c}}</a>
             </div>
        </el-card>
    </el-col>
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
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>