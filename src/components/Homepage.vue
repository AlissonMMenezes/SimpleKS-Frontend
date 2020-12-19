<template>
    <div style="margin-top: 40px;">
        <el-card v-for="p in info.posts" :key="p" style="margin-top: 10px;">
            <div slot="header" class="clearfix">
                <span><router-link :to="p.post_name">{{p.title}}</router-link></span>
            </div>
            <div :key="o" class="text item" v-html="p.content">
            </div>
        </el-card>           
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