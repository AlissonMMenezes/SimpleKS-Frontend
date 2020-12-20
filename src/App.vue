<template>
  <div id="app">
    <Headers />
    <b-row>
        <b-col sm="9">
          <router-view></router-view>
        </b-col>
        <b-col sm="3">
          <Subscribe />
          <Sidebar />
        </b-col>
    </b-row>         
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
  metaInfo: {
      title: 'Alisson Machado',
    }
}
</script>
<style scoped>
</style>
