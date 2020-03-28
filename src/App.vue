<template>
  <div id="app">

  <section>
      <div class="m-nav">
          <ul class="m-nav-items">
              <li><img src="./assets/logo.png" alt=""></li>
              <router-link to="/about" class="m-nav-item neumorphic">Who's xritzx 😄?</router-link>
              <router-link to="/" class="m-nav-item neumorphic">Say Hi 👋!</router-link>
              <router-link to="/about" class="m-nav-item neumorphic">Blog 📙</router-link>
          </ul>
      </div>
      <hr class="seperator" style="border: 1px solid var(--accent)">
  </section>
  <section class="body">
    <router-view/>
  </section>
  </div>
</template>

<style>
  :root{
     --m-grey1: #fefefe;
     --m-grey2: #efefef;
     --m-grey3: #cfcfcf;
     --m-grey4: #4f4f4f;
     --m-grey5: #333333;
     --m-grey6: #212121;
     --m-grey7: #111111;

     --bg-white: #e5e5e9;
     --bg-black: #32323a;
     
     --accent: #FFAA22;
  }
  *{
    font-family: 'Comfortaa', cursive;
    margin: 0;
    padding: 0;
    background-color: var(--bg-white);
    color: var(--m-grey4);
    font-size: 1em;
    line-height: 1.618;
  }

  .m-nav{
        background-color: var(--m-grey2) !important;
  }
  .m-nav-items{
      list-style: none;
      height: 100px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-around;
      text-decoration: none;
      font-weight: bold;  
    }
  .m-nav-items img{
      width: 3rem;
      margin-right: 5rem;
  }

  .m-nav-items a{
    text-decoration: none;
    padding: 1rem 1.61rem;
    border-radius: 10px;
  }
  /* Custom css */
  .neumorphic {
    background-color: var(--bg-white);
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255,255,255, 0.5);
  }
  .seperator{
    margin: 1rem 0;
  }

</style>
