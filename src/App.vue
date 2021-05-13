<template>
  <div id="app">
    <Headers />
    <b-main>
        <router-view></router-view>        
    </b-main>         
  </div>
</template>

<script>
import Headers from './components/Headers.vue'

export default {
  name: 'App',
  components: {
    Headers,
  },
  metaInfo: {
      title: 'Alisson Machado',
    }
}
</script>
<style>
.ql-syntax {
  background: black;
  color: white;
  padding: 10px;
  margin-bottom: 0rem;
}

p {
  margin-bottom: 0rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #767676;
}


.navbar{
  border-bottom: solid 1px #e6e6e6;

}

a {
  color: black;
}
</style>
