<template>
  <div id="app">

  <section>
      <div class="nav">
          <ul class="nav-items">
              <li><img src="./assets/logo.png" alt=""></li>
              <router-link to="/about" class="nav-item neumorphic">Who's xritzx 😄?</router-link>
              <router-link to="/" class="nav-item neumorphic">Say Hi 👋!</router-link>
              <router-link to="/about" class="nav-item neumorphic">Blog 📙</router-link>
          </ul>
      </div>
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
     --m-grey3: #afafaf;
     --m-grey4: #4f4f4f;
     --m-grey5: #333333;
     --m-grey6: #212121;
     --m-gray7: #111111;

     --bg-white: #e5e5e9;
     --bg-black: #32323a;
  }
  *{
    font-family: 'Comfortaa', cursive;
    margin: 0;
    padding: 0;
    background-color: var(--bg-white);
    color: var(--m-grey4);
  }
  .nav{
        background-color: var(--m-grey2) !important;
  }
  .nav-items{
      list-style: none;
      height: 100px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-around;
      font-size: 1em;
      text-decoration: none;
      font-weight: bold;  
    }
  .nav-items img{
      width: 3rem;
      margin-right: 5rem;
  }
  .nav-items a{
    text-decoration: none;
  }
  .nav-item{
    padding: 1rem 1.61rem;
    border-radius: 10px;
  }
  /* Custom css */
  .container{
    margin: 2% 20% 2% 20%;
    padding: 5% 10%;
  }
  .neumorphic {
    background-color: var(--bg-white);
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px    rgba(255,255,255, 0.5);
  }
  .seperator{
    margin: 1rem 0;
  }

</style>
