<template>
  <div class="home">
    <div class="image_container">
      <img class="cover" src="https://tnimage.s3.hicloud.net.tw/photos/2019/10/07/1570443526-5d9b1106c7c9c.jpg"/>
    </div>
    <div class="container">
      <form method="POST" id="form_project">
        <p>旅程名稱</p>
        <input name="project_name">
        <p>地點</p>
        <input id="place">
        <p>日期</p>
        <input type="text" id="text-calendar" class="calendar" />
      </form>
      <p>成員</p>
      <div class="member_group">
        <img class="circle_wrapper" id="profile_img" :src=UserImg>
        <div class="circle_wrapper invite_wrapper" @click="shareTarget">
            <i class="fas fa-share fa-2x"></i>
        </div>
      </div>
      <input type="submit" value="創建" form="form_project">
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
      UserName: '',
    }
  },
  beforeCreate(){
    window.$( document ).ready(()=>{
      console.log('aaaaaaaaaa')
      window.$('.calendar').pignoseCalendar({multiple: true});
    })
    // var liffID = '1655093786-Joa47Erb';
    // window.liff.init({
    // liffId: liffID
    // })
    // .then(()=> {
    //   console.log('LIFF init');

    //   if (!window.liff.isLoggedIn()) {
    //     window.liff.login();
    //   }
    //   else{
    //     window.liff.getProfile()
    //     .then((profile)=>{
    //       this.UserName = profile.displayName;
    //       this.UserImg = profile.pictureUrl;
    //     });
    //   }
    // });
  },
  methods:{
    shareTarget: function(){
      window.liff.shareTargetPicker([
    {"type": "flex",
    "altText": "Flex Message",
    "contents":{
  "type": "bubble",
  "hero": {
    "type": "image",
    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
    "size": "full",
    "aspectRatio": "20:13",
    "aspectMode": "cover",
    "action": {
      "type": "uri",
      "uri": "http://linecorp.com/"
    }
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "Brown Cafe",
        "weight": "bold",
        "size": "xl"
      },
      {
        "type": "box",
        "layout": "baseline",
        "margin": "md",
        "contents": [
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
          },
          {
            "type": "icon",
            "size": "sm",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
          },
          {
            "type": "text",
            "text": "4.0",
            "size": "sm",
            "color": "#999999",
            "margin": "md",
            "flex": 0
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "spacing": "sm",
        "contents": [
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Place",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 1
              },
              {
                "type": "text",
                "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 5
              }
            ]
          },
          {
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "Time",
                "color": "#aaaaaa",
                "size": "sm",
                "flex": 1
              },
              {
                "type": "text",
                "text": "10:00 - 23:00",
                "wrap": true,
                "color": "#666666",
                "size": "sm",
                "flex": 5
              }
            ]
          }
        ]
      }
    ]
  },
  "footer": {
    "type": "box",
    "layout": "vertical",
    "spacing": "sm",
    "contents": [
      {
        "type": "button",
        "style": "link",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "CALL",
          "uri": "https://linecorp.com"
        }
      },
      {
        "type": "button",
        "style": "link",
        "height": "sm",
        "action": {
          "type": "uri",
          "label": "WEBSITE",
          "uri": "https://linecorp.com"
        }
      },
      {
        "type": "spacer",
        "size": "sm"
      }
    ],
    "flex": 0
  }
}
    }]);
    }
  }
}
</script>

<style scoped>
.home{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container{
    width: 80vw;
}
p{
    font-size: 5vw;
    margin: 2vw 0;
}
input{
    font-size: 5vw;
    width: 80vw;
}
input[type='submit']{
    width: 20vw;
    margin-top: 2vw;
}
.image_container{
    width: 100vw;
}
.cover{
    width: 100vw;
    height: 60vw;
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
.member_group{
    display: flex;
    flex-direction: row;
    align-items: center;
}
#profile_img{
    border: black 1px solid;
}
</style>
