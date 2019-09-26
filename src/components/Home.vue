<template>
  <b-col vertical-align="center" cols="12" class="main">
    <slot>
    </slot>
    <b-row align-h="center">
      <b-col cols="3">
        <ui-input class="input":length="length" v-model="input" :errorMessage="errorMessage"
        @validate="validate"></ui-input>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import UiInput from "./uiComponents/ui-input.vue"
export default {
  name: 'Home',
  props:{
    errorMessage:String,
    length:Number,
  },
  data(){
    return{
      counter:0,
      input:"",
    }
  },
  components:{
    UiInput
  },
  methods:{
    makeAcceptable(){
      this.$emit("acceptable");
    },
    validate(){
      this.$emit('validate',this.input);
    }
  },
  mounted(){
    this.msg_home=this.msg
  }
}
</script>

<style scoped>
.main{
  font-size:2rem;
}

.input{
  margin-top:2rem;
}
</style>
