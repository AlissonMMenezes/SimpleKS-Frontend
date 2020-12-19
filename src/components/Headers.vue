<template>
    <el-menu mode="horizontal">        
        <el-menu-item ><a href="/">Alisson Machado</a></el-menu-item>
        <el-menu-item  v-for="p in info.pages" :key="p">
            <a v-bind:href="'/'+p.post_name" tag="el-menu-item">{{p.title}}</a>
        </el-menu-item>
        <el-menu-item style="float: right; margin-right: 70px;">
            <el-input size="sm" v-on:keyup.enter="search()"  v-model="term"></el-input>
            <el-button size="sm" v-on:click="search()" type="button">buscar</el-button>
        </el-menu-item>
    </el-menu>

</template>


<script>
export default {
  name: 'Headers',
  data:function(){  
      return {
          info : [],
          term: null
      }    
  },
  mounted:function(){  
      axios.get('/pages')
      .then(response => (this.info = response.data))
  },
  methods:{
      search(){
          window.location.href = "/search/"+this.term
      }
  }
}


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
</script>
<style scoped>
a {
    transition: all 0.25s linear;
    font-size: 14px;
    color: #333;
    font-weight: 700;
    text-align: left;
    text-decoration: none;
    padding: 0 20px;
    line-height: 45px;
    font-family: 'Roboto', 'helvetica neue', helvetica, arial, sans-serif;
    display: block;
}
</style>