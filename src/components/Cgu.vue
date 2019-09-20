<template>
  <b-col class="main">
    <slot>

    </slot>
    <br />
    <span class="little-link">pour en savoir plus, cliquez <a @click="refuse">ici</a></span>

    <b-modal id="cgu_modal" class="container">
        {{cgu}}
        <br/>
        Si vous ne souhaitez pas accepter ces paramètres, cliquez <span @click="refuse">ici</span>
    </b-modal>
  </b-col>
</template>

<script>
import txt from 'raw-loader!../assets/cgu.txt'
export default {
  name:'cgu',
  data(){
    return{
      cgu:"",
    }
  },
  methods:{
    refuse(){
      console.log("you refused")
      this.$bvModal.show("cgu_modal")
    }
  },
  mounted(){
    this.cgu=txt
  }
}
</script>

<style scoped>
.main{
  font-size:2rem;
}
.little-link{
  text-align:left;
  font-size: 1rem;
}
.container{
  font-size:1rem;
  overflow-y: scroll;
  text-align: justify !important;
  height:80%;
  border:1px solid var(--light-color);
}
</style>
