<template>
  <b-container>

    <b-row class="m-1">

      <b-col lg=5 cols=12 class="round-edge neumorphic mr-lg-5 mt-lg-2 mb-2 pt-lg-5 p-4">
        <h4><Typewriter text="Skills 🛠️ I 👜" /></h4>
        <hr style="background: var(--accent)">
        <b-row class="neumorphic m-3 round-edge m-lg-3 p-3 p-lg-3">
          <b-col lg=12 cols=12><hr>Competencies 🔧<hr style="background: var(--accent)"></b-col>
          <b-col lg=12 class="tile" cols=12 v-for="skill of skills" :key="skill" v-html="skill">{{skill}}</b-col>
          <b-col lg=12 cols=12><hr>Languages #️⃣<hr style="background: var(--accent)"></b-col>
          <b-col lg=12 class="tile" cols=12 v-for="language of languages" :key="language" v-html="language">{{language}}</b-col>
        </b-row>
      </b-col>

      <b-col lg=6 cols=12 class="round-edge neumorphic mr-lg-4 mt-lg-2 mb-2 pt-lg-5 p-3 mt-2">
        <h4><Typewriter text="Work Experiences 👨‍💻" /></h4>
        <hr style="background: var(--accent)">
        <b-row class="neumorphic m-1 round-edge m-lg-3 p-3 p-lg-3">
          <b-col lg=12 cols=12><hr>Internships 💻<hr style="background: var(--accent)"></b-col>
            <b-row cols=12 lg=8>
              <b-col>
                <b-card
                  class="overflow-hidden mb-2"
                  style="max-width: 600px; border:none; background:#00000000"
                  v-for="internship of internships" :key="internship.company"
                >
                  <b-row no-gutters>
                    <b-col lg="12">
                      <b-card-body :title="internship.company" class="round-edge p-3 n-button">
                        <b-card-text>
                          <h5><em>{{ internship.year }} {{ internship.season }} ({{internship.duration}})</em></h5>
                          <em style="border-bottom: 0.7px solid var(--accent)">{{ internship.role }}</em> <br><br>
                          {{ internship.description }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card> 
              </b-col>
            </b-row>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 p-4 mx-1">
        <b-col cols=12 lg=12><h4><Typewriter text="Projects that are 🔥"/></h4>
        <hr class="seperator"></b-col>
        <b-col lg=6 cols=12 v-for="project of projects" :key="project.source">
            <b-card
              class="overflow-hidden mb-3 p-0"
              style="max-width: 500px; border:none; background:#00000000; display:flex"
            >
              <a :href="project.source">
              <b-row no-gutters>
                <b-col lg="12">
                  <b-card-body :title="project.title" class="un neumorphic round-edge p-4 n-button">
                    <b-card-text>
                      <hr style="background: var(--accent)">
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
      internships: [],
    }
  },

  created(){
    const db = firebase.database()
    db.ref('/skills/skill').once('value').then(snapshot => this.skills=snapshot.val())
    db.ref('/skills/languages').once('value').then(snapshot => this.languages=snapshot.val())
    db.ref('/projects').once('value').then(snapshot => this.projects=snapshot.val())
    db.ref('/internships').once('value').then(snapshot => this.internships=snapshot.val())
    
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