<template>
  <b-col vertical-align="center" cols="12" class="main">
    <slot>
    </slot>
    <b-row align-h="center">
      <b-col cols="3">
        <ui-input :length="length" :errorMessage="errorMessage" @validate="$emit('validate')" class="input"></ui-input>
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
    length:Number
  },
  data(){
    return{
      counter:0,
    }
  },
  components:{
    UiInput
  },
  methods:{
    count(){
      console.log("clicked");
      this.counter+=1;
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
