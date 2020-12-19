<template>
  <el-container id="app">
    <el-header>
      <Headers />
    </el-header>    
    <el-container>
      <el-aside > 
        <el-row class="tac">
          <Subscribe />
        </el-row>
        <el-row class="tac">
          <Sidebar /> 
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>      
      </el-main>
    </el-container>  
    
  </el-container>
</template>

<script>
import Headers from './components/Headers.vue'
import Sidebar from './components/Sidebar.vue'
import Subscribe from './components/Subscribe.vue'

export default {
  name: 'App',
  components: {
    Headers,
    Sidebar,
    Subscribe
  },
  metaInfo: {
      title: 'Alisson Machado',
    }
}
</script>
<style scoped>

</style>
