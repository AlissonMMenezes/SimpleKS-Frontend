<template>
    <el-col style="margin-top:30px;">
        <el-card>
            <div slot="header" class="clearfix">
                <span><h5>Inscreva-se</h5></span>
            </div>
            <div>
                <el-row>            
                    <el-col sm="9">
                    <el-input id="input-none" :state="null" v-on:keyup.enter="sendSubscription" v-model="email" placeholder="Seu email aqui"></el-input>
                    </el-col>
                </el-row>
                <el-row >
                    <el-col sm="9">
                    <el-button v-on:click="sendSubscription">Cadastrar</el-button>
                    </el-col>         
                </el-row>
             </div>
        </el-card>           
    </el-col>   
    
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
        this.$alert(self.message,"Mensagem",{confirmButtonText:"Ok"})
      }      
  }
  
}
import axios from 'axios'
</script>
<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>