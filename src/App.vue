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
<style>
.ql-syntax {
  background: black;
  color: white;
  padding: 10px;
  margin-bottom: 0rem;
}
.card-body{
  padding: 10px;
}
p {
  margin-bottom: 0rem;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #767676;
}

.card{
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.navbar{
  border-bottom: solid 1px #e6e6e6;

}

h1, h2, h3, h4, h5, h6 {
    font-family: "Proxima Nova", "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
    font-style: normal;
    font-weight: normal;
    color: inherit;
    text-rendering: optimizeLegibility;

}
a {
  color: black;
}
</style>
