<template>
  <b-container>

    <b-row class="m-1">

      <b-col lg=3 cols=0 class=" text-center round-edge neumorphic mr-lg-5 mt-lg-2 mb-2 pt-lg-5 p-4">
        <h4><Typewriter text="Lets connect !" /></h4>
        <hr>
        <b-row class="text-center">
          <b-col cols=2 lg=8 class="p-2"><fa :icon="['fab', 'linkedin']" size="2x" /></b-col>
          <b-col cols=2 lg=8 class="p-2"><fa :icon="['fab', 'twitter']" size="2x" /></b-col>
          <b-col cols=2 lg=8 class="p-2"><fa :icon="['fab', 'github']" size="2x" /></b-col>
          <b-col cols=2 lg=8 class="p-2"><fa :icon="['fab', 'medium']" size="2x" /></b-col>
          <b-col cols=2 lg=8 class="p-2"><fa :icon="['fab', 'instagram']" size="2x" /></b-col>
          <b-col cols=2 lg=8 class="p-2"><fa :icon="['fab', 'facebook']" size="2x" /></b-col>
        </b-row>
      </b-col>

      <b-col lg=8 class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 p-4">
        <h4><Typewriter text="Hey, Good to see you here !"/></h4>
        <hr class="seperator">
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </b-col>
    
    </b-row>

  </b-container>

</template>

<script>
import Typewriter from "../components/Typewriter";

export default {
  name: 'Home',
  components: {
    Typewriter,
  }
}
</script>

<style scoped>
 
</style>