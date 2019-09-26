<template>
  <b-container id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
          <b-col cols="12">
            <p>
              Veuillez commencer par saisir un pseudo<br />
              <span class="text-sm">
                -au moins 4 caractères-
              </span>
            </p>
          </b-col>
          <b-col cols="3">
            <ui-input class="input":length="4" errorMessage="Le pseudo doit contenir au moins 4 caractères"
            @validate="next" @update="setPseudo"></ui-input>
          </b-col>
        </b-row>
        <ui-button v-if="pseudo.length >= 4" @clicked="next">
          Continuer
        </ui-button>
      </b-tab>
      <!-- <b-tab>
      <b-row class="step" align-h="center" align-v="center">
      <home :length="4" errorMessage="Le mail doit contenir au moins 4 caractères"
      @validate="next">Et une adresse mail comme identifiant unique</home>
    </b-row>
  </b-tab> -->
  <b-tab>
    <b-row class="step" align-h="center" align-v="center">
      <cgu>
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
      Premier piège, et vous venez d’être évalué.<br/>

      Voici votre score initial :
    </b-row>
    <ui-button @clicked="next">
      Continuer
    </ui-button>
  </b-tab>
</b-tabs>
<!-- <ui-button @clicked="next">
Continuer
</ui-button> -->
</b-container>
</template>

<script>
import Home from './components/Home.vue'
import UiInput from "./components/uiComponents/ui-input.vue"
import UiButton from "./components/uiComponents/ui-button.vue"
import Cgu from './components/Cgu.vue'
export default {
  name: 'app',
  data(){
    return{
      step:0,
      pseudo:"",
      start:null,
      end:null
    }
  },
  methods:{
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
      }
    }
  },
  components: {
    UiInput,UiButton,Cgu
  }
}
</script>

<style>
body{
  background-color: var(--dark-color) !important;
}

#app {
  color:var(--light-color) !important;
  font-family: 'Roboto','AvenirLight', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 300 !important;
  /* color: #2c3e50; */
  padding:1rem;

}

.text-panel{
  font-size:2rem;
}

.text-sm{
  font-size:1.5rem;
  font-style:italic;
}

.step{
  height:70vh;
}

.step-higher{
  height:80vh;
}
</style>
