(function(e){function t(t){for(var a,o,l=t[0],s=t[1],u=t[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"adb3f3d1"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"11678baf"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===r))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){u=p[l],c=u.getAttribute("data-href");if(c===a||c===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("034f"),n("2877")),l={},s=Object(i["a"])(l,o,r,!1,null,null,null),u=s.exports,c=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"container"},[n("form",{attrs:{method:"POST",id:"form_project"}},[n("p",[e._v("旅程名稱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.project_name,expression:"project_name"}],attrs:{name:"project_name"},domProps:{value:e.project_name},on:{input:function(t){t.target.composing||(e.project_name=t.target.value)}}}),n("p",[e._v("地點")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.place,expression:"place"}],attrs:{name:"place"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.place=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Keelung"}},[e._v("基隆")]),n("option",{attrs:{value:"NewTaipei"}},[e._v("新北")]),n("option",{attrs:{value:"Taipei"}},[e._v("臺北")]),n("option",{attrs:{value:"Yilan"}},[e._v("宜蘭")]),n("option",{attrs:{value:"Taoyuan"}},[e._v("桃園")]),n("option",{attrs:{value:"Hsinchu"}},[e._v("新竹")]),n("option",{attrs:{value:"Miaoli"}},[e._v("苗栗")]),n("option",{attrs:{value:"Taichung"}},[e._v("臺中")]),n("option",{attrs:{value:"Changhua"}},[e._v("彰化")]),n("option",{attrs:{value:"Nantou"}},[e._v("南投")]),n("option",{attrs:{value:"Yunlin"}},[e._v("雲林")]),n("option",{attrs:{value:"Chiayi"}},[e._v("嘉義")]),n("option",{attrs:{value:"Tainan"}},[e._v("臺南")]),n("option",{attrs:{value:"Kaohsiung"}},[e._v("高雄")]),n("option",{attrs:{value:"Pingtung"}},[e._v("屏東")]),n("option",{attrs:{value:"Taitung"}},[e._v("臺東")]),n("option",{attrs:{value:"Hualien"}},[e._v("花蓮")]),n("option",{attrs:{value:"Penghu"}},[e._v("澎湖")]),n("option",{attrs:{value:"Kinmen"}},[e._v("金門")]),n("option",{attrs:{value:"Lienchiang"}},[e._v("連江")])]),n("p",[e._v("日期")]),n("input",{staticClass:"calendar",attrs:{type:"text",id:"text-calendar",name:"date"}})]),n("p",[e._v("成員")]),n("div",{staticClass:"member_group"},[n("img",{staticClass:"circle_wrapper",attrs:{id:"profile_img",src:e.UserImg}}),n("div",{staticClass:"circle_wrapper invite_wrapper",on:{click:e.shareTarget}},[n("i",{staticClass:"fas fa-share fa-2x"})])]),n("input",{attrs:{type:"submit",value:"創建",form:"form_project"},on:{click:e.uploadData}})])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image_container"},[n("img",{attrs:{id:"cover",src:"https://tnimage.s3.hicloud.net.tw/photos/2019/10/07/1570443526-5d9b1106c7c9c.jpg"}})])}],m={name:"Home",components:{},data:function(){return{UserImg:"../assets/logo.png",UserName:"",project_name:null,place:null}},beforeCreate:function(){var e=this;window.$(document).ready((function(){console.log("aaaaaaaaaa"),window.$(".calendar").pignoseCalendar({multiple:!0,buttons:!0})}));var t="1655093786-Joa47Erb";window.liff.init({liffId:t}).then((function(){console.log("LIFF init"),window.liff.isLoggedIn()?window.liff.getProfile().then((function(t){e.UserName=t.displayName,e.UserImg=t.pictureUrl})):window.liff.login()}))},methods:{uploadData:function(){},shareTarget:function(){console.log(document.getElementsByName("project_name")[0].value),window.liff.shareTargetPicker([{type:"flex",altText:"Flex Message",contents:{type:"bubble",hero:{type:"image",url:document.getElementById("cover").src,size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},body:{type:"box",layout:"vertical",contents:[{type:"text",text:document.getElementsByName("project_name")[0].value,weight:"bold",size:"xl"},{type:"box",layout:"vertical",margin:"lg",spacing:"sm",contents:[{type:"box",layout:"baseline",contents:[{type:"text",text:"邀請人",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:this.UserName,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",contents:[{type:"text",text:"Time",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:document.getElementsByName("date")[0].value,wrap:!0,color:"#666666",size:"sm",flex:5}]}]}]},footer:{type:"box",layout:"vertical",spacing:"sm",contents:[{type:"button",style:"link",height:"sm",action:{type:"uri",label:"加入",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},{type:"spacer",size:"sm"}],flex:0}}}])}}},v=m,d=(n("e590"),Object(i["a"])(v,p,f,!1,null,"df050114",null)),g=d.exports;a["a"].use(c["a"]);var h=[{path:"/",name:"Home",component:g},{path:"/bookkeeping",name:"BookKeeping",component:function(){return n.e("about").then(n.bind(null,"1e8a"))}}],y=new c["a"]({mode:"history",base:"/",routes:h}),b=y;a["a"].config.productionTip=!1,new a["a"]({router:b,render:function(e){return e(u)}}).$mount("#app")},"666c":function(e,t,n){},"85ec":function(e,t,n){},e590:function(e,t,n){"use strict";var a=n("666c"),o=n.n(a);o.a}});
//# sourceMappingURL=app.d5a7f531.js.map