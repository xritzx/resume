<template>
  <b-container>

    <b-row class="m-1">

      <b-col lg=3 cols=0 class=" text-center round-edge neumorphic mr-lg-5 mt-lg-2 mb-2 pt-lg-5 p-4">
        <h4><Typewriter text="Skills 🛠️ I 👜" /></h4>
        <hr>
          <p>skils a lot of hanging over me</p>
      </b-col>

      <b-col lg=8 class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 p-4">
        <h4><Typewriter text="Projects that are 🔥"/></h4>
        <hr class="seperator">
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </b-col>
    
    </b-row>

  </b-container>

</template>

<script>
import Typewriter from "../components/Typewriter";

export default {
  name: 'Projects',
  components: {
    Typewriter,
  }
}
</script>

<style scoped>
 
</style>