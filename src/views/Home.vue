<template>
  <b-container>

    <b-row class="m-1">

      <b-col lg=3 cols=0 class=" text-center round-edge neumorphic mr-lg-5 mt-lg-2 mb-2 pt-lg-5 p-4">
        <h4><Typewriter text="Lets connect 🔗" /></h4>
        <hr>
        <b-row class="text-center">
          <b-col cols=2 lg=8 class="p-2"><a :href="links.linkedin" ><fa :icon="['fab', 'linkedin']" size="2x"/></a></b-col>
          <b-col cols=2 lg=8 class="p-2"><a :href="links.twitter"><fa :icon="['fab', 'twitter']" size="2x" /></a></b-col>
          <b-col cols=2 lg=8 class="p-2"><a :href="links.github"><fa :icon="['fab', 'github']" size="2x" /></a></b-col>
          <b-col cols=2 lg=8 class="p-2"><a :href="links.medium"><fa :icon="['fab', 'medium']" size="2x" /></a></b-col>
          <b-col cols=2 lg=8 class="p-2"><a :href="links.instagram"><fa :icon="['fab', 'instagram']" size="2x" /></a></b-col>
          <b-col cols=2 lg=8 class="p-2"><a :href="links.facebook"><fa :icon="['fab', 'facebook']" size="2x" /></a></b-col>
        </b-row>
      </b-col>

      <b-col lg=8 class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 p-4">
        <h4><Typewriter text="Glad to see you here ❣️"/></h4>
        <hr class="seperator">
        <p> {{ this.home }}</p>
      </b-col>
    
    </b-row>

  </b-container>

</template>

<script>
import Typewriter from "../components/Typewriter"
import firebase from 'firebase/app'

export default {
  name: 'Home',
  components: {
    Typewriter,
  },
  data() {
    return {
      home: '',
      links: {},
    }
  },
  created() {
    const db = firebase.database()
    db.ref('/links').once('value').then(snapshot => this.links=snapshot.val());
    db.ref('/home').once('value').then(snapshot => this.home=snapshot.val());
  }
}
</script>

<style scoped>
 
</style>