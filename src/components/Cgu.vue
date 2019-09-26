<template>
  <b-col class="main">
    <slot>

    </slot>
    <br />
    <span class="little-link">pour en savoir plus, cliquez <a @click="read">ici</a></span>

    <b-modal size="xl" title="Nos CGU" hide-footer id="cgu_modal" class="container">
      <p>
        <vue-simple-markdown class="cgu" :source="cgu">
        </vue-simple-markdown>
        Si vous ne souhaitez pas accepter ces paramètres, cliquez <span @click="refuse">ici</span>
      </p>
      <ui-button class="mt-2" variant="outline-primary" block @clicked="accept">Accept</ui-button>
    </b-modal>
  </b-col>
</template>

<script>
import UiButton from './uiComponents/ui-button.vue'
import txt from 'raw-loader!../assets/cgu.txt'
export default {
  name:'cgu',
  data(){
    return{
      cgu:"",
    }
  },
  components:{
    UiButton
  },
  methods:{
    read(){
      console.log("you read")
      this.$emit("cguRead");
      this.$bvModal.show("cgu_modal")
    },
    refuse(){
      this.$emit("cguRefused")
      console.log("you refused")
      this.$bvModal.hide("cgu_modal")
    },
    accept(){
      this.$emit("cguAccepted")
      console.log("you accepted")
      this.$bvModal.hide("cgu_modal")
    }
  },
  mounted(){
    this.cgu=txt
  }
}
</script>

<style scoped>
.text-lg{
  font-size: 120%;
  font-weight: bold;
  line-height: 3rem;
}
.main{
  font-size:2rem;
}
.little-link{
  text-align:left;
  font-size: 1rem;
}

.cgu{
  text-align: justify;
}
.container{
  font-size:1rem;
  overflow-y: scroll;
  text-align: justify !important;
  height:80%;
  border:1px solid var(--light-color);
}
</style>
