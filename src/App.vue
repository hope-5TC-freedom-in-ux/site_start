<template>
  <b-container id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-tabs small pills v-model="step">
      <b-tab>
        <b-row id="home" class="step" align-h="center" align-v="center">
          Bonjour et bienvenue sur notre outil interactif
        </b-row>
      </b-tab>
      <b-tab>
        <b-row class="step" align-h="center" align-v="center">
          <home :length="4" errorMessage="Le pseudo doit contenir au moins 4 caractères"
                @validate="next">Veuillez commencer par saisir un pseudo</home>
        </b-row>
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
      </b-tab>

    </b-tabs>
    <ui-button @clicked="next">
      Continuer
    </ui-button>
  </b-container>
</template>

<script>
import Home from './components/Home.vue'
import UiButton from "./components/uiComponents/ui-button.vue"
import Cgu from './components/Cgu.vue'
export default {
  name: 'app',
  data(){
    return{
        step:0,
    }
  },
  methods:{
    next(){
      this.step+=1;
    }
  },
  components: {
    Home,UiButton,Cgu
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

#home{
    font-size:2rem;
}

.step{
  height:70vh;
}

.step-higher{
  height:80vh;
}
</style>
