<template>
  <div class="home">
    <div class="member_group">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <img class="circle_wrapper" id="profile_img" :src=UserImg>
      <div class="circle_wrapper invite_wrapper">
        <i class="fas fa-share fa-2x"></i>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return {
      UserImg: '../assets/logo.png',
    }
  },
  beforeCreate(){
    var liffID = '1655093786-Joa47Erb';
    window.liff.init({
    liffId: liffID
    })
    .then(function() {
      console.log('LIFF init');

      if (!window.liff.isLoggedIn()) {
        window.liff.login();
      }
      else{
        window.liff.getProfile()
        .then(function(profile){
          console.log(this)
          this.getUserImg();
        });
      }
    });
  },
  methods:{
    getUserImg: function(){
      window.liff.getProfile()
      .then((profile)=>{
        this.UserImg = profile.pictureUrl;
      })
    }
  }
}
</script>

<style scoped>
.member_group{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.circle_wrapper{
    border-radius: 50%;
    width: 16vw;
    height: 16vw;
    margin-right: 1.5em;
}
.invite_wrapper{
    background-color: #2fabb7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
}
.invite_wrapper:hover{
    cursor: pointer;
    background-color: #49c4d0;
}
</style>
