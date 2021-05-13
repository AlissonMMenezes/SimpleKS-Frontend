<template>
    <b-form inline class="mr-2">
        <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="input-none" :state="null" v-on:keyup.enter="sendSubscription" v-model="email" placeholder="Seu email aqui"></b-form-input>
        <b-button variant="primary" v-on:click="sendSubscription">Inscrever-se</b-button> 
        <b-modal id="modal-1" title="Message">
            <p class="my-4" ref="modalmessage">{{message}}</p>
        </b-modal>     
    </b-form>
</template>

<script>


export default {
  name: 'Subscribe',
  data:function(){
      return{
          email : null,
          message: null
      }
  },
  methods:{
      async sendSubscription(){
        var self = this
        axios.post("/subscribe",
            {"email":this.email},
            {headers: {
                'Content-Type': 'application/json'
            }}
          ).then(function(response){
            return self.message = response.data.content
            
        }).catch(function(response){
            console.log(response.message)                 
            return self.message = "Invalid Domain!"            
        })
        console.log(this.message)
        this.$bvModal.show("modal-1")
      }      
  }
  
}
import axios from 'axios'
</script>