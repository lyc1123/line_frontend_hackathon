(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a59912fa"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"552c60d8"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"093f":function(e,t,n){"use strict";var r=n("f52f"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"container"},[e._m(1),n("p",[e._v("成員")]),n("div",{staticClass:"member_group"},[n("img",{staticClass:"circle_wrapper",attrs:{id:"profile_img",src:e.UserImg}}),n("div",{staticClass:"circle_wrapper invite_wrapper",on:{click:e.shareTarget}},[n("i",{staticClass:"fas fa-share fa-2x"})])]),n("input",{attrs:{type:"submit",value:"創建",form:"form_project"}})])])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image_container"},[n("img",{attrs:{id:"cover",src:"https://tnimage.s3.hicloud.net.tw/photos/2019/10/07/1570443526-5d9b1106c7c9c.jpg"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{method:"POST",id:"form_project"}},[n("p",[e._v("旅程名稱")]),n("input",{attrs:{name:"project_name"}}),n("p",[e._v("地點")]),n("input",{attrs:{id:"place",name:"place"}}),n("p",[e._v("日期")]),n("input",{staticClass:"calendar",attrs:{type:"text",id:"text-calendar",name:"date"}})])}],d={name:"Home",components:{},data:function(){return{UserImg:"../assets/logo.png",UserName:""}},beforeCreate:function(){var e=this;window.$(document).ready((function(){console.log("aaaaaaaaaa"),window.$(".calendar").pignoseCalendar({multiple:!0,buttons:!0})}));var t="1655093786-Joa47Erb";window.liff.init({liffId:t}).then((function(){console.log("LIFF init"),window.liff.isLoggedIn()?window.liff.getProfile().then((function(t){e.UserName=t.displayName,e.UserImg=t.pictureUrl})):window.liff.login()}))},methods:{shareTarget:function(){console.log(document.getElementsByName("project_name")[0].value),window.liff.shareTargetPicker([{type:"flex",altText:"Flex Message",contents:{type:"bubble",hero:{type:"image",url:document.getElementById("cover").src,size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},body:{type:"box",layout:"vertical",contents:[{type:"text",text:document.getElementsByName("project_name")[0].value,weight:"bold",size:"xl"},{type:"box",layout:"vertical",margin:"lg",spacing:"sm",contents:[{type:"box",layout:"baseline",contents:[{type:"text",text:"邀請人",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:this.UserName,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",contents:[{type:"text",text:"Time",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:document.getElementsByName("date")[0].value,wrap:!0,color:"#666666",size:"sm",flex:5}]}]}]},footer:{type:"box",layout:"vertical",spacing:"sm",contents:[{type:"button",style:"link",height:"sm",action:{type:"uri",label:"加入",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},{type:"spacer",size:"sm"}],flex:0}}}])}}},m=d,g=(n("093f"),Object(i["a"])(m,p,f,!1,null,"25ed0876",null)),h=g.exports;r["a"].use(u["a"]);var v=[{path:"/",name:"Home",component:h},{path:"/project",name:"Project",component:function(){return n.e("about").then(n.bind(null,"07bd"))}}],y=new u["a"]({mode:"history",base:"/",routes:v}),b=y;r["a"].config.productionTip=!1,new r["a"]({router:b,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},f52f:function(e,t,n){}});
//# sourceMappingURL=app.3b56cfaa.js.map