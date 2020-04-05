<template>
  <div id="app">

  <section>
      <nav class="m-nav neumorphic mx-lg-5 px-lg-5 my-lg-4 mt-3">
          <ul class="m-navbar-nav text-center">
              <router-link tag="li" :to="{name: 'home'}" ><img class="brand" src="./assets/logo.png" alt=""></router-link>
              <router-link tag="li" :to="{name: 'about'}" class="m-nav-item circle">🧬Me</router-link>
              <router-link tag="li" :to="{name: 'projects'}" class="m-nav-item circle">💡Projects</router-link>
              <router-link tag="li" :to="{name: 'blogs'}" class="m-nav-item circle">📖Blog</router-link>
              <li @click="changeTheme()" style="font-size:2em;" >{{emoji}}</li>
          </ul>
      </nav>
      <hr class="seperator" style="border: 1px solid var(--accent)">
  </section>
  <section>
    <router-view/>
  </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: ()=>{
    return{
      emoji:"🌚",
    }
  },
  methods: {
      changeTheme () {
        document.getElementById("main").classList.toggle('light');
        document.getElementById("main").classList.toggle('dark');
        this.emoji=this.emoji=="🌚"?"🌝":"🌚";
        localStorage.setItem('emoji',this.emoji);
        localStorage.setItem('theme', this.emoji=="🌚"?'light':'dark');
        this.$emit('theme');
      }
    },
  mounted(){
    const theme = localStorage.getItem('theme');
    const emoji = localStorage.getItem('emoji');
    if(emoji){
      this.emoji = emoji;
    }
    if(theme){
      document.getElementById("main").classList.remove('light');
      document.getElementById("main").classList.add(theme);
    }
  }
}
</script>

<style>
  :root{
     --m-grey1: #fefefe;
     --m-grey2: #efefef;
     --m-grey3: #cacaca;
     --m-grey4: #4f4f4f;
     --m-grey5: #313131;
     --m-grey6: #212121;
     --m-grey7: #111111;

     --bg-white: #f0f0f0;
     --bg-black: #1f1f1f;
     --shadow-up-light: rgba(255, 255, 255, 0.9);
     --shadow-down-light: rgba(0, 0, 0, 0.2);
     --shadow-up-dark: #2d2d2dda;
     --shadow-down-dark: #000000da;
     
     --accent: #FFAA22;
     --b-radius : 1.3em;

  }
  .light{
    --bg: var(--bg-white);
    --text-color: var(--m-grey4);
    --shadow-up: var(--shadow-up-light);
    --shadow-down : var(--shadow-down-light);
  }
  .dark{
    --bg: var(--bg-black);
    --text-color: var(--m-grey3);
    --shadow-up: var(--shadow-up-dark);
    --shadow-down : var(--shadow-down-dark);
  }
  router-link-exact-active, router-link-active{
    text-decoration: none;
  }
  
  *{
    font-family: 'Comfortaa', cursive;
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text-color);
    font-size: 1em;
    line-height: 1.618;
    list-style: none;
    transition: background 500ms ease-in-out, color 1000ms ease-in-out, box-shadow 500ms ease-in-out;
   
  }
  *::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background: var(--bg);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-radius: var(--b-radius);
  }

  a{
    text-decoration: none;
  }

  .m-nav{
      padding: 1em;
      background-color: var(--bg);
      border-radius: var(--b-radius);
  }
 
  .brand{
      width: 4rem;
      margin: 0 0rem;
  }

  .m-nav-item {
    color: var(--text-color);
    font-size: 0.9em;
    padding: 1rem 1.618rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    cursor: pointer;
  }
  .m-navbar-nav {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }


  /* Custom css */
  .neumorphic {
    background-color: var(--bg);
    box-shadow: -3px -6px 10px 2px var(--shadow-up),
                 3px 6px 10px 2px var(--shadow-down);
  }
  .seperator{
    background: var(--text-color);
    margin: 1rem 0;
  }
  .round-edge{
    border-radius: var(--b-radius);
  }

  .circle-inv {
    margin-left: 20px;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: var(--bg);
    box-shadow: inset 3px 6px 4px 1px var(--shadow-down),
      inset -3px -6px 4px 1px var(--shadow-up);
  }

  .circle {
    height: 80px;
    width: 80px;
    border-radius: 40px;
    background-color: var(--bg);
    box-shadow: -3px -6px 10px 1px var(--shadow-up),
                 3px 6px 10px 1px var(--shadow-down);
    animation: shadowFadeOut 0.05s;
  }

  .circle:active {
    box-shadow: inset 3px 6px 4px 1px var(--shadow-down),
      inset -3px -6px 4px 1px var(--shadow-up);
    animation: shadowFadeIn 0.05s;
  }
  
  .n-button{
    background-color: var(--bg);
    box-shadow: -3px -6px 10px 1px var(--shadow-up),
                 3px 6px 10px 1px var(--shadow-down);
      animation: shadowFadeOut 0.05s;
  }
  .n-button:active{
    box-shadow: inset 3px 6px 4px 1px var(--shadow-down),
      inset -3px -6px 4px 1px var(--shadow-up);
    animation: shadowFadeIn 0.05s;
  }

  @keyframes shadowFadeIn {
    0% {
      box-shadow: 0px -6px 10px 0px var(--shadow-up),
        0px 6px 10px 0px var(--shadow-down);
    }
    50% {
      box-shadow: none;
    }
    100% {
      box-shadow: inset 0px 6px 4px 0px var(--shadow-down),
        inset 0px -6px 4px 0px var(--shadow-up);
    }
  }

  @keyframes shadowFadeOut {
    0% {
      box-shadow: inset 0px 6px 4px 0px var(--shadow-down),
        inset 0px -6px 4px 0px var(--shadow-up);
    }
    50% {
      box-shadow: none;
    }
    100% {
      box-shadow: 0px -6px 10px 0px var(--shadow-up),
        0px 6px 10px 0px var(--shadow-down);
    }
  }

</style>
