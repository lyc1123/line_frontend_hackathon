(function(e){function t(t){for(var a,r,s=t[0],l=t[1],u=t[2],c=0,p=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"404a8b6d"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"4d7829bf"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],c=u.getAttribute("data-href");if(c===a||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,r,o,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[0==e.state?n("div",[e._m(0),n("div",{staticClass:"container"},[n("form",{attrs:{method:"POST",id:"form_project"}},[n("p",[e._v("旅程名稱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.project_name,expression:"project_name"}],attrs:{name:"project_name"},domProps:{value:e.project_name},on:{input:function(t){t.target.composing||(e.project_name=t.target.value)}}}),n("p",[e._v("地點")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.place,expression:"place"}],attrs:{name:"place"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.place=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Keelung"}},[e._v("基隆")]),n("option",{attrs:{value:"NewTaipei"}},[e._v("新北")]),n("option",{attrs:{value:"Taipei"}},[e._v("臺北")]),n("option",{attrs:{value:"Yilan"}},[e._v("宜蘭")]),n("option",{attrs:{value:"Taoyuan"}},[e._v("桃園")]),n("option",{attrs:{value:"Hsinchu"}},[e._v("新竹")]),n("option",{attrs:{value:"Miaoli"}},[e._v("苗栗")]),n("option",{attrs:{value:"Taichung"}},[e._v("臺中")]),n("option",{attrs:{value:"Changhua"}},[e._v("彰化")]),n("option",{attrs:{value:"Nantou"}},[e._v("南投")]),n("option",{attrs:{value:"Yunlin"}},[e._v("雲林")]),n("option",{attrs:{value:"Chiayi"}},[e._v("嘉義")]),n("option",{attrs:{value:"Tainan"}},[e._v("臺南")]),n("option",{attrs:{value:"Kaohsiung"}},[e._v("高雄")]),n("option",{attrs:{value:"Pingtung"}},[e._v("屏東")]),n("option",{attrs:{value:"Taitung"}},[e._v("臺東")]),n("option",{attrs:{value:"Hualien"}},[e._v("花蓮")]),n("option",{attrs:{value:"Penghu"}},[e._v("澎湖")]),n("option",{attrs:{value:"Kinmen"}},[e._v("金門")]),n("option",{attrs:{value:"Lienchiang"}},[e._v("連江")])]),n("p",[e._v("日期")]),n("input",{staticClass:"calendar",attrs:{type:"text",id:"text-calendar",name:"date"}})]),n("input",{attrs:{type:"submit",value:"創建",form:"form_project"},on:{click:e.uploadData}})])]):e._e(),1==e.state?n("div",[n("p",[e._v("成員")]),n("div",{staticClass:"member_group"},[n("img",{staticClass:"circle_wrapper",attrs:{id:"profile_img",src:e.UserImg}}),n("div",{staticClass:"circle_wrapper invite_wrapper",on:{click:e.shareTarget}},[n("i",{staticClass:"fas fa-share fa-2x"})])])]):e._e()])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image_container"},[n("img",{attrs:{id:"cover",src:"https://tnimage.s3.hicloud.net.tw/photos/2019/10/07/1570443526-5d9b1106c7c9c.jpg"}})])}],v={name:"Home",components:{},data:function(){return{UserImg:"../assets/logo.png",UserName:"",project_name:null,place:null,date:null,state:0}},beforeCreate:function(){var e=this;window.$(document).ready((function(){window.$(".calendar").pignoseCalendar({multiple:!0,buttons:!0})}));var t="1655093786-Joa47Erb";window.liff.init({liffId:t}).then((function(){console.log("LIFF init"),window.liff.isLoggedIn()?window.liff.getProfile().then((function(t){e.UserName=t.displayName,e.UserImg=t.pictureUrl})):window.liff.login()}))},methods:{uploadData:function(){this.state=1,this.date=document.getElementsByName("date")[0].value},shareTarget:function(){window.liff.shareTargetPicker([{type:"flex",altText:"Flex Message",contents:{type:"bubble",hero:{type:"image",url:"https://tnimage.s3.hicloud.net.tw/photos/2019/10/07/1570443526-5d9b1106c7c9c.jpg",size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},body:{type:"box",layout:"vertical",contents:[{type:"text",text:this.project_name,weight:"bold",size:"xl"},{type:"box",layout:"vertical",margin:"lg",spacing:"sm",contents:[{type:"box",layout:"baseline",contents:[{type:"text",text:"邀請人",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:this.UserName,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",contents:[{type:"text",text:"Time",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:this.date,wrap:!0,color:"#666666",size:"sm",flex:5}]}]}]},footer:{type:"box",layout:"vertical",spacing:"sm",contents:[{type:"button",style:"link",height:"sm",action:{type:"uri",label:"加入",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},{type:"spacer",size:"sm"}],flex:0}}}])}}},d=v,m=(n("ea08"),Object(i["a"])(d,p,f,!1,null,"14d2c730",null)),h=m.exports;a["a"].use(c["a"]);var g=[{path:"/",name:"Home",component:h},{path:"/bookkeeping",name:"BookKeeping",component:function(){return n.e("about").then(n.bind(null,"1e8a"))}}],b=new c["a"]({mode:"history",base:"/",routes:g}),y=b;a["a"].config.productionTip=!1,new a["a"]({router:y,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){},b433:function(e,t,n){},ea08:function(e,t,n){"use strict";var a=n("b433"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7285c87c.js.map