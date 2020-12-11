<template>
  <div id="app">
    <Headers />
    <b-container class="bv-example-row">
          <b-row class="justify-content-md-left">
              <b-col col lg="8">
                <router-view></router-view>
              </b-col>
              <b-col col lg="4">
                <Subscribe />
                <Sidebar />
              </b-col>
          </b-row>         
      </b-container>    
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
  MetaInfo: {
      title: 'Alisson Machado',
    }
}
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
body {
white-space: pre-wrap !important; 
word-wrap: break-word !important;
font-family: inherit !important;
}
</style>
