<template>
  <b-container>
    <b-row class="m-1">

      <b-col lg=3 cols=0 class="text-center neumorphic round-edge mr-lg-5 mt-lg-2 mb-2 pt-lg-5 p-4">
        <h4><Typewriter text="Stats"/></h4>
        <b-row>
          <b-col>
            <b-button variant="success">Followers {{ this.followers }}</b-button>
          </b-col>
          <b-col>
            <b-button href="https://github.com/xritzx?tab=repositories" variant="warning">Repos {{ this.repos }}</b-button>
          </b-col>
          
        </b-row>
      </b-col>

      <b-col lg=8 class="neumorphic round-edge p-lg-5 mt-lg-2 mt-2 p-4">
        <h4><Typewriter text="Hey, Good to see you here !"/></h4>
        <b-img rounded="circle" fluid :src="this.avatar" alt="Image 1"></b-img>
        <hr class="seperator">
        <p>{{ this.about }} </p>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
import Typewriter from "../components/Typewriter"
import axois from 'axios'
import firebase from 'firebase/app'

export default {
  name: 'About',
  components:{
    Typewriter
  },
  data(){
    return {
      about: '',
      avatar: '',
      followers: '',
      repos: '',
    }
  },
  created(){
    const db = firebase.database()
    let repos = sessionStorage.getItem('repos')
    let followers = sessionStorage.getItem('followers')
    let avatar = sessionStorage.getItem('avatar')

    if(repos && followers && avatar){
      this.repos = repos
      this.followers = followers
      this.avatar = avatar
    }
    else{
      axois({
        method: 'get',
        url: 'https://api.github.com/users/xritzx',
        timeout: 2000,
      })
      .then(res => {
        this.followers = res.data.followers
        this.repos = res.data.public_repos
        this.avatar = res.data.avatar_url
        console.log(this.avatar_url);
        
        sessionStorage.setItem('followers', this.followers)
        sessionStorage.setItem('repos', this.repos)
        sessionStorage.setItem('avatar', this.avatar)
      })
      .catch(err => {
        this.repos = "Many!"
        this.followers = "I Hope you addon"
        this.avatar = "../assets/logo_min.png"
        console.error(err)
        console.log("Never mind API request limit Exceeded Visit Later")
      });
    }

    db.ref('/about').once('value').then(snapshot => this.about=snapshot.val())
  }
}
</script>

<style scoped>

</style>