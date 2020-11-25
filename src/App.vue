<template>
  <div id="app">
    <Headers />
    <b-container class="bv-example-row">
          <b-row class="justify-content-md-left">
              <b-col col lg="8">
                <router-view></router-view>
              </b-col>
              <b-col col lg="4">
                <Sidebar />
              </b-col>
          </b-row>         
      </b-container>    
  </div>
</template>

<script>
import Headers from './components/Headers.vue'
import Sidebar from './components/Sidebar.vue'


export default {
  name: 'App',
  components: {
    Headers,
    Sidebar
  }
}
</script>