<template>
    <div>
        <div class="p-3">
            <h4 id="sidebar-no-header-title">Inscreva-se</h4>
            <b-row class="my-1">            
                <b-col sm="9">
                <b-form-input id="input-none" :state="null" v-model="email" placeholder="Seu email aqui"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1">
                <b-col sm="9">
                <b-button>Cadastrar</b-button>
                </b-col>         
            </b-row>
        </div>
    </div>        
</template>

<script>


export default {
  name: 'Subscribe',
}
</script>