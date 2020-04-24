<template>
  <b-container>
    <b-row class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 py-4 px-2 mx-1">
        <b-col cols=12 lg=12><h4><Typewriter text="Blogs 🔥"/></h4>
        <hr class="seperator"></b-col>

        <b-col cols=12 lg=12 v-for="blog of blogs" :key="blog.date + blog.title">
            <b-card
              no-body
              class="overflow-hidden mb-3 p-0"
              style="max-width: 1000px; border:none; background:#00000000;"
            >
              <b-row no-gutters>
                <b-col lg=6 class="mb-lg-3">
                    <!-- <b-card-img :src="blog.img" class="rounded-0 fit"></b-card-img> -->
                    <b-img :src="blog.img" fluid center alt="Oh snap 💩, blog image not visible !"></b-img>
                </b-col>
                <b-col lg=6  class="mb-3 mb-lg-3" @click="visitPost(blog.id)">
                  <b-card-body :title="blog.title" class="un scoped-n-button">
                    <b-card-text>
                      <hr style="background: var(--accent)">
                        <vue-markdown class :source="blog.caption" @rendered="update" />
                        {{blog.date}}
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>

          </b-col>
      </b-row>

  </b-container>

</template>

<script>
import Typewriter from '../components/Typewriter'
import firebase from 'firebase/app'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-go.min'

export default {
  name: 'Blogs',
  components: {
    Typewriter,
  },
  data(){
    return{
      blogs: [],
    }
  },
  methods: {
    update() {
      this.$nextTick(() => Prism.highlightAll())
    },
    visitPost(id){
        console.log("Trigger");   
        this.$router.push({name: 'blog', params: {id: id, post:this.blogs[id] }})
    }
  },
  created(){
    const db = firebase.database()
    db.ref('/blog').once('value').then(snapshot => this.blogs=snapshot.val())
  }
}
</script>

<style scoped>

  .un {
   display: block;
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
  .fit{
      max-width: 500px;
      max-height: 200px;
      min-height: 150px;
      object-fit: scale-down;
  }
  .scoped-n-button{
    background-color: var(--bg);
    box-shadow: none;
  }
  .scoped-n-button:active{
    box-shadow: inset 3px 6px 4px 1px var(--shadow-down),
      inset -3px -6px 4px 1px var(--shadow-up);
    animation: shadowFadeIn 0.05s;
  }
</style>