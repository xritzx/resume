<template>
  <b-container>
    <b-row class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 p-4 mx-1">
        <b-col cols=12 lg=12><h4><Typewriter text="Blog Single 🔥"/></h4>
        <hr class="seperator"></b-col>

        <b-col cols=12 lg=12>
            <b-card
              no-body
              class="overflow-hidden mb-3 p-0"
              style="max-width: 1000px; border:none; background:#00000000;"
            >
              <b-row no-gutters>
                <b-col lg=12>
                    <b-card-img :src="post.img" class="rounded-0 fit"></b-card-img>
                </b-col>
                <b-col lg=12>
                  <b-card-body :title="post.title">
                    <b-card-text>
                      <small>{{ post.caption }}<br>{{ post.date }}</small>
                      <hr style="background: var(--accent)">
                        <vue-markdown :source="blog" @rendered="update" />
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
import "prismjs/themes/prism-okaidia.css"
import 'prismjs/components/prism-go.min'

export default {
  name: 'Blog',
  props: ['post'],
  components: {
    Typewriter,
  },
  data(){
    return{
      blog: '',
    }
  },
  created(){
    this.blog=String(this.post.body).split(":::").join("\n")
    console.log(this.blog)
  },
  methods: {
    update() {
      this.$nextTick(() => Prism.highlightAll())
    }
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