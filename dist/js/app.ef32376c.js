(function(e){function t(t){for(var n,r,s=t[0],l=t[1],u=t[2],c=0,p=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);v&&v(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"404a8b6d"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"4d7829bf"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],c=u.getAttribute("data-href");if(c===n||c===o)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],v.parentNode.removeChild(v),a(i)},v.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(v);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var v=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var v=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("034f"),a("2877")),s={},l=Object(i["a"])(s,r,o,!1,null,null,null),u=l.exports,c=(a("d3b7"),a("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[0==e.state?a("div",[e._m(0),a("div",{staticClass:"container"},[a("form",{attrs:{method:"POST",id:"form_project"}},[a("p",[e._v("旅程名稱:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.project_name,expression:"project_name"}],attrs:{name:"project_name"},domProps:{value:e.project_name},on:{input:function(t){t.target.composing||(e.project_name=t.target.value)}}}),a("p",[e._v("日期:")]),a("input",{staticClass:"calendar",attrs:{type:"text",id:"text-calendar",name:"date"}}),a("p",[e._v("地點:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.place,expression:"place"}],attrs:{name:"place"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.place=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Keelung"}},[e._v("基隆")]),a("option",{attrs:{value:"NewTaipei"}},[e._v("新北")]),a("option",{attrs:{value:"Taipei"}},[e._v("臺北")]),a("option",{attrs:{value:"Yilan"}},[e._v("宜蘭")]),a("option",{attrs:{value:"Taoyuan"}},[e._v("桃園")]),a("option",{attrs:{value:"Hsinchu"}},[e._v("新竹")]),a("option",{attrs:{value:"Miaoli"}},[e._v("苗栗")]),a("option",{attrs:{value:"Taichung"}},[e._v("臺中")]),a("option",{attrs:{value:"Changhua"}},[e._v("彰化")]),a("option",{attrs:{value:"Nantou"}},[e._v("南投")]),a("option",{attrs:{value:"Yunlin"}},[e._v("雲林")]),a("option",{attrs:{value:"Chiayi"}},[e._v("嘉義")]),a("option",{attrs:{value:"Tainan"}},[e._v("臺南")]),a("option",{attrs:{value:"Kaohsiung"}},[e._v("高雄")]),a("option",{attrs:{value:"Pingtung"}},[e._v("屏東")]),a("option",{attrs:{value:"Taitung"}},[e._v("臺東")]),a("option",{attrs:{value:"Hualien"}},[e._v("花蓮")]),a("option",{attrs:{value:"Penghu"}},[e._v("澎湖")]),a("option",{attrs:{value:"Kinmen"}},[e._v("金門")]),a("option",{attrs:{value:"Lienchiang"}},[e._v("連江")])])]),a("input",{attrs:{type:"submit",value:"創建 >>",form:"form_project"},on:{click:e.uploadData}})])]):e._e(),1==e.state?a("div",[a("p",[e._v("將旅程分享給你的夥伴")]),a("div",{staticClass:"member_group"},[a("img",{staticClass:"circle_wrapper",attrs:{id:"profile_img",src:e.UserImg}}),a("div",{staticClass:"circle_wrapper invite_wrapper",on:{click:e.shareTarget}},[a("i",{staticClass:"fas fa-share fa-2x"})])])]):e._e()])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image_container"},[a("img",{attrs:{id:"cover",src:"https://tnimage.s3.hicloud.net.tw/photos/2019/10/07/1570443526-5d9b1106c7c9c.jpg"}}),a("div",{staticClass:"img_filter"}),a("h1",[e._v("創建旅程")])])}],f={name:"Home",data:function(){return{UserImg:"../assets/logo.png",UserName:"",project_name:null,place:null,date:null,state:0}},beforeCreate:function(){window.$(document).ready((function(){window.$(".calendar").pignoseCalendar({multiple:!0,buttons:!0})}))},methods:{uploadData:function(){this.state=1,this.date=document.getElementsByName("date")[0].value},shareTarget:function(){window.liff.shareTargetPicker([{type:"flex",altText:"Flex Message",contents:{type:"bubble",hero:{type:"image",url:"https://tnimage.s3.hicloud.net.tw/photos/2019/10/07/1570443526-5d9b1106c7c9c.jpg",size:"full",aspectRatio:"20:13",aspectMode:"cover",action:{type:"uri",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},body:{type:"box",layout:"vertical",contents:[{type:"text",text:this.project_name,weight:"bold",size:"xl"},{type:"box",layout:"vertical",margin:"lg",spacing:"sm",contents:[{type:"box",layout:"baseline",contents:[{type:"text",text:"邀請人",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:this.UserName,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",contents:[{type:"text",text:"時間",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:this.date,wrap:!0,color:"#666666",size:"sm",flex:5}]},{type:"box",layout:"baseline",contents:[{type:"text",text:"地點",color:"#aaaaaa",size:"sm",flex:2},{type:"text",text:this.place,wrap:!0,color:"#666666",size:"sm",flex:5}]}]}]},footer:{type:"box",layout:"vertical",spacing:"sm",contents:[{type:"button",style:"link",height:"sm",action:{type:"uri",label:"加入",uri:"https://liff.line.me/1655093786-Joa47Erb/project"}},{type:"spacer",size:"sm"}],flex:0}}}])}}},d=f,m=(a("e76a"),Object(i["a"])(d,p,v,!1,null,"7a75e2cd",null)),h=m.exports;n["a"].use(c["a"]);var g=[{path:"/",name:"Home",component:h},{path:"/bookkeeping",name:"BookKeeping",component:function(){return a.e("about").then(a.bind(null,"1e8a"))}}],y=new c["a"]({mode:"history",base:"/",routes:g}),b=y;n["a"].config.productionTip=!1,new n["a"]({router:b,render:function(e){return e(u)}}).$mount("#app")},6723:function(e,t,a){},"85ec":function(e,t,a){},e76a:function(e,t,a){"use strict";var n=a("6723"),r=a.n(n);r.a}});
//# sourceMappingURL=app.ef32376c.js.map