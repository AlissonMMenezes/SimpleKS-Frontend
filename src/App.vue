<template>
  <div id="app">
    <Headers /> 
    <sui-grid style="margin-left: 10px;">
      <sui-grid-row>
        <sui-grid-column :width="13">
          <sui-container>
            <router-view></router-view>
          </sui-container>          
        </sui-grid-column>
        <sui-grid-column :width="2">
          <Subscribe />
          <Sidebar /> 
        </sui-grid-column>  
      </sui-grid-row>
    </sui-grid>
  </div>
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
  metaInfo:{
    title: "Alisson Machado"
  } 
}
</script>
