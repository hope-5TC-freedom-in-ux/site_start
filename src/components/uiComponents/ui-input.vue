<template>
  <b-col>
    <b-form-input class="myInput" />
  </b-col>
</template>

<script>
export default {
  name: 'ui-input',
  methods:{
    trigger(){
      this.$emit("clicked")
    }
  }
}
</script>

<style>

.form-control:focus,.form-control:active {
  outline:none;
   border-color:var(--light-color) !important;
   box-shadow: none !important;
}

.myInput{
  font-size:1.5rem!important;
  border-radius: 200px !important;
  color:var(--light-color) !important;
  background-color:var(--dark-color) !important;
  font-weight:300 !important;
}

</style>
