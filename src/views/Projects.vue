<template>
  <b-container>

    <b-row class="m-1">

      <b-col lg=5 cols=12 class="round-edge neumorphic mr-lg-5 mt-lg-2 mb-2 pt-lg-5 p-4">
        <h4><Typewriter text="Skills 🛠️ I 👜" /></h4>
        <hr style="background: var(--accent)">
        <b-row class="neumorphic m-3 round-edge m-lg-3 p-3 p-lg-3">
          <b-col lg=12 cols=12><hr>Competencies<hr style="background: var(--accent)"></b-col>
          <b-col lg=12 class="tile" cols=12 v-for="skill of skills" :key="skill" v-html="skill">{{skill}}</b-col>
          <b-col lg=12 cols=12><hr>Languages<hr style="background: var(--accent)"></b-col>
          <b-col lg=12 class="tile" cols=12 v-for="language of languages" :key="language" v-html="language">{{language}}</b-col>
        </b-row>
      </b-col>
      <b-col lg=6 class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 p-4">
        <h4><Typewriter text="Projects that are 🔥"/></h4>
        <hr class="seperator">
        <b-row cols=12 lg=6>
            <b-col>
                <b-card
                  class="overflow-hidden mb-3"
                  style="max-width: 500px; border:none; background:#00000000"
                  v-for="project of projects" :key="project.source"
                >
                  <a :href="project.source">
                  <b-row no-gutters>
                    
                    <b-col lg="12">
                      <b-card-body :title="project.title" class="un neumorphic round-edge p-4 n-button">
                        <b-card-text>
                          <fa :icon="['fab', 'github']" class="round-edge" />
                          {{ project.description }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                  </a>
                </b-card>
              
            </b-col>
        </b-row>
      </b-col>
    
    </b-row>

  </b-container>

</template>

<script>
import Typewriter from "../components/Typewriter"
import firebase from 'firebase/app'

export default {
  name: 'Projects',
  components: {
    Typewriter,
  },
  data(){
    return{
      skills: [],
      languages: [],
      projects: [],
    }
  },

  created(){
    const db = firebase.database()
    db.ref('/skills/skill').once('value').then(snapshot => this.skills=snapshot.val())
    db.ref('/skills/languages').once('value').then(snapshot => this.languages=snapshot.val())
    db.ref('/projects').once('value').then(snapshot => this.projects=snapshot.val())
  }
}
</script>

<style scoped>
  .tile{
    border-left: 1px solid;
    border-image-source: radial-gradient(#ffffff00, var(--accent), #00000000);
    border-image-slice: 1;
  }
  .un {
   display: inline-block;
   text-decoration: none;
  }
  .un:after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    background: var(--accent);
    transition: 300ms;
  }
  .un:hover:after {
    width: 100%;
  }
</style>