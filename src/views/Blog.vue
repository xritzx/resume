<template>
  <b-container>
    <b-row class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 py-4 px-1 mx-0.25" >
        <b-col cols=12 lg=12><h4><Typewriter text="Blog 📬"/></h4>
        <hr class="seperator"></b-col>

        <b-col cols=12 lg=12>
            <b-card
              no-body
              class="overflow-hidden mb-3 p-0"
              style="max-width: 1000px; border:none; background:#00000000;"
            >
              <b-row no-gutters>
                <b-col lg=12 v-if="post.img">
                    <b-img :src="post.img" fluid center alt="Oh snap 💩, blog image not visible !"></b-img>
                </b-col>
                <b-col lg=12 v-else>
                    <b-img src="../assets/spongebob.png" fluid center alt="Oh snap 💩, spongebob has turned invisible !"></b-img>
                </b-col>
                <b-col lg=12>
                  <b-card-body :title="post.title">
                    <b-card-text>
                      <small><vue-markdown :source="post.caption" @rendered="update" />{{ post.date }}</small>
                      <hr style="background: var(--accent)">
                        <vue-markdown :source="blog" @rendered="update"/>
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
import Typewriter from "../components/Typewriter"
import Prism from "prismjs"
import firebase from 'firebase/app'
import 'prismjs/components/prism-go.min'

export default {
  name: 'Blog',
  props: ['post', 'id'],
  components: {
    Typewriter,
  },
  data(){
    return{
      blog: '',
    }
  },
  created(){
    if(this.post){
      fetch(this.post.url).then(res=>res.text()).then(data=>this.blog=data)
    }else{
      const db = firebase.database();
      db.ref(`/blog/${this.id}`).once('value')
        .then(snapshot => {
          if(snapshot.val()){
            this.post = snapshot.val();
          }else{
            this.post = {
              title : "Okay, Cool! You are smart 😎 now move on smartypants!",
            };
          }
        })
        .then(()=>fetch(this.post.url).then(res=>res.text()).then(data=>this.blog=data))
    }
  },
  methods: {
    update() {
      this.$nextTick(() => {
        if(localStorage.getItem('theme')=='light'){
          import("prismjs/themes/prism.css").then(() => Prism.highlightAll())  
        }
        else{
          import("prismjs/themes/prism-okaidia.css").then(() => Prism.highlightAll())
        }      
      })
    },
  },
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
      max-width: 640px;
      max-height: 480px;
      min-height: 240px;
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