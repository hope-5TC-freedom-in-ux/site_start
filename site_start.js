
$(document).ready(()=>{
  console.log("readey")
  // $.get("cgu.txt",function(res){
  //   let txt = res
  // },'html')

  $.ajax({
    url: "cgu.txt",
    success: (res)=>{
      console.log(res)
      let txt = res
    },
    dataType: 'html'
  });
})



var UiInput = {
  props:{
    length:{
      type:Number,
      default:0
    },
    errorMessage:{
      type:String,
      default:"La longueur du texte ne correspond pas "
    }
  },
  methods:{
    validate(){
      if(this.text.length >= this.length){
        this.$emit("validate",this.text)
      }else{
        this.$bvToast.toast(this.errorMessage , {
          title: 'Attention',
          autoHideDelay: 2000,
          solid:true,
          appendToast: false
        })
      }
    },
    sendChange(input){
      this.$emit("update", input)
    },
    trigger(){
      this.$emit("clicked")
    }
  },
  data(){
    return{
      text:"",
    }
  },
  template:`
  <b-col>
  <b-form-input @keyup.enter="validate" @update="sendChange" class="myInput" v-model="text" placeholder="Saisir ici"/>
  </b-col>
  `
}

var UiButton = {
  methods:{
    trigger(){
      this.$emit("clicked")
    }
  },
  template:`
  <b-button pill class="button" @click="trigger">
  <slot>
  </slot>
  </b-button>
  `
}

var Cgu = {

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
    $.ajax({
      url: "cgu.txt",
      success: (res)=>{
        console.log(res)
        this.cgu = res
      },
      dataType: 'html'
    });
  },
  template:`
  <b-col class="main">
  <slot>

  </slot>
  <br/>
  <span class="little-link">pour en savoir plus, cliquez <a @click="read">ici</a></span>

  <b-modal size="xl" title="Nos CGU" hide-footer id="cgu_modal" class="container">
  <p>
  <vue-simple-markdown :emoji="false" :source="cgu"></vue-simple-markdown>
  Si vous ne souhaitez pas accepter ces paramètres, cliquez <span @click="refuse">ici</span>
  </p>
  <ui-button class="mt-2" variant="outline-primary" block @clicked="accept">Accept</ui-button>
  </b-modal>
  </b-col>
  `
}

var app = new Vue({
  el: '#app',
  data(){
    return{
      step:0,
      pseudo:"",
      start:null,
      end:null
    }
  },
  computed:{
    deltaTime(){
      if (this.start !== null && this.end !== null){
        return this.end - this.start;
      }
      else{
        return NaN;
      }
    }
  },
  methods:{
    trapNotify(trap, score){
      console.log(this.$http)
      $.ajax({
        url: "/api/v0.1/score",
        method:'PATCH',
        data:{score:score, trap:trap},
        context: document.body
      }).done(function() {
        $( this ).addClass( "done" );
      });
      console.log("A trap has been hacked")
    },
    next(){
      this.step+=1;
    },
    setPseudo(pseudo){
      console.log("Hey")
      this.pseudo=pseudo
    }
  },
  watch:{
    step(newVal){
      if(newVal==1){
        this.start=new Date().getSeconds();
        console.log("start : ", this.start)
      }else if (newVal==3) {
        this.end=new Date().getSeconds();
      }
    }
  },
  components: {
    UiInput,UiButton,Cgu
  },
  template:`
  <b-tabs small pills v-model="step">
  <b-tab>
  <b-row class="text-panel step" align-h="center" align-v="center">
  Bonjour et bienvenue sur notre outil interactif
  </b-row>
  <ui-button @clicked="next">
  Continuer
  </ui-button>
  </b-tab>

  <b-tab>
  <b-row class="step text-panel" align-h="center" align-v="center">
  <b-col cols="12" class="text-center">
  <p>
  Veuillez commencer par saisir un pseudo<br />
  <span class="text-sm">
  -au moins 4 caractères-
  </span>
  </p>
  </b-col>
  <b-col cols="3">
  <ui-input class="input" :length="4" errorMessage="Le pseudo doit contenir au moins 4 caractères"
  @validate="next" @update="setPseudo"></ui-input>
  </b-col>
  </b-row>
  <ui-button v-if="pseudo.length >= 4" @clicked="next">
  Continuer
  </ui-button>
  </b-tab>

  <b-tab>
  <b-row class="step" align-h="center" align-v="center">
  <cgu @cguRead="trapNotify('Accès CGU', 10)" @cguRefused="trapNotify('CGU refusées',20)" @cguAccepted="trapNotify('CGU acceptées')">
  Nous allons analyser votre comportement dans cette petite boîte noire d'expérimentation,
  pour cela merci d'accepter nos condiditons générales d'utilisation de ces données.
  </cgu>
  </b-row>
  <ui-button @clicked="next">
  Continuer
  </ui-button>
  </b-tab>

  <b-tab>
  <b-row class="step text-panel" align-h="center" align-v="center">
  <b-col>
  <p>
  Premier piège, et vous venez d’être évalué.<br/>

  Cliquez sur Continuer pour voir votre score
  </p>
  </b-col>
  </b-row>
  <ui-button @clicked="next">
  Prochain Challenge
  </ui-button>
  </b-tab>
  </b-tabs>
  `
})
