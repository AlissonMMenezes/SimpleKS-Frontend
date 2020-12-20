<template>
    <b-container style="margin-top: 30px;">
        <b-card title="Inscreva-se" sub-title="" style="margin-top: 10px;">
            <b-card-text>
                <b-row class="my-1">            
                <b-col sm="9">
                <b-form-input id="input-none" :state="null" v-on:keyup.enter="sendSubscription" v-model="email" placeholder="Seu email aqui"></b-form-input>
                </b-col>
                </b-row>
                <b-row class="my-1">
                <b-col sm="9">
                <b-button v-on:click="sendSubscription">Cadastrar</b-button>
                </b-col>         
                </b-row>     
            </b-card-text>
        </b-card>
        <b-modal id="modal-1" title="Message">
            <p class="my-4" ref="modalmessage">{{message}}</p>
        </b-modal>     
    </b-container>
   
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