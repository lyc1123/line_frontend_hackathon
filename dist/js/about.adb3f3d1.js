(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0722":function(t,e,n){},"0b8a":function(t,e,n){"use strict";var a=n("e82f"),r=n.n(a);r.a},1148:function(t,e,n){"use strict";var a=n("a691"),r=n("1d80");t.exports="".repeat||function(t){var e=String(r(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"159b":function(t,e,n){var a=n("da84"),r=n("fdbc"),i=n("17c2"),o=n("9112");for(var c in r){var s=a[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{o(u,"forEach",i)}catch(m){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,r=n("a640"),i=n("ae40"),o=r("forEach"),c=i("forEach");t.exports=o&&c?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var a=n("d039"),r=n("b622"),i=n("2d00"),o=r("species");t.exports=function(t){return i>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1e8a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",[0==e.state?a("div",[a("h4",[e._v("帳單金額：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),a("h4",[e._v("輸入品項：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.item_name,expression:"item_name"}],domProps:{value:e.item_name},on:{input:function(t){t.target.composing||(e.item_name=t.target.value)}}}),a("h4",[e._v("備註：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.memo,expression:"memo"}],domProps:{value:e.memo},on:{input:function(t){t.target.composing||(e.memo=t.target.value)}}}),a("h4",[e._v("日期：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"calendar",attrs:{type:"text",id:"text-calendar",name:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]):e._e(),1==e.state?a("Payer",{attrs:{amount:Number(e.amount),member:e.member}}):e._e(),2==e.state?a("Paidfor",{attrs:{amount:Number(e.amount),member:e.member}}):e._e(),0==e.state&&null!=e.amount?a("div",{staticClass:"btn_next",on:{click:function(){return t.state=1}}},[e._v("Who Paid >>")]):e._e(),1==e.state&&e.checkValid(1)?a("div",{staticClass:"btn_next",on:{click:function(){return t.state=2}}},[e._v("Paid For >>")]):e._e(),2==e.state&&e.checkValid(2)?a("div",{staticClass:"btn_next"},[e._v("Save")]):e._e()],1)},r=[],i=(n("4160"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("div",{attrs:{id:"nav"}},[n("span",[t._v("For who?")]),n("span",[n("i",[t._v("$"+t._s(t.amount))])])]),n("ul",{staticClass:"member_list_wrapper",attrs:{id:"member_list_wrapper"}},t._l(t.member,(function(e,a){return n("MemberCost",{key:e.name,attrs:{index:a,name:e.name,state:e.state,cost:e.cost},on:{checkbox:t.handleCheckboxChanged,amountEdited:t.updateAmount}})})),1)])}),o=[],c=(n("4de4"),n("a9e3"),n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"todo-app__item"},[n("div",{staticClass:"todo-app__checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkboxState,expression:"checkboxState"}],attrs:{type:"checkbox",id:t.name},domProps:{checked:Array.isArray(t.checkboxState)?t._i(t.checkboxState,null)>-1:t.checkboxState},on:{change:function(e){var n=t.checkboxState,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&(t.checkboxState=n.concat([i])):o>-1&&(t.checkboxState=n.slice(0,o).concat(n.slice(o+1)))}else t.checkboxState=r}}}),n("label",{attrs:{for:t.name}})]),n("h3",{staticClass:"todo-app__item-detail"},[t._v(t._s(t.name))]),n("input",{directives:[{name:"show",rawName:"v-show",value:t.state,expression:"state"}],ref:"inputAmount",attrs:{type:"text"},domProps:{value:t.cost},on:{keyup:t.emitAmount}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.state,expression:"state"}],staticClass:"fas fa-pen",on:{click:t.editAmount}})])}),s=[],u={name:"MemberCost",props:{index:Number,name:String,state:Boolean,cost:Number},data:function(){return{checkboxState:this.state}},watch:{checkboxState:function(){this.$emit("checkbox",this.index)}},methods:{editAmount:function(){this.$refs.inputAmount.focus()},emitAmount:function(){this.$emit("amountEdited",[this.index,this.$refs.inputAmount.value])}}},m=u,l=(n("dca1"),n("2877")),d=Object(l["a"])(m,c,s,!1,null,"00034f6a",null),f=d.exports,h={name:"paidfor",components:{MemberCost:f},props:{amount:Number,member:Array},created:function(){this.member.forEach((function(t){t.edited=!1,t.state=!1}))},methods:{handleCheckboxChanged:function(t){this.member[t].state=!this.member[t].state,this.member[t].state||(this.member[t].edited=!1,this.member[t].cost=null),this.calculateAmount()},calculateAmount:function(){var t=this,e=0;this.member.filter((function(t){return t.edited})).forEach((function(t){e+=t.cost}));var n=this.member.filter((function(t){return t.state&&!t.edited}));this.member.forEach((function(a){if(a.state&&!a.edited){var r=(t.amount-e)/n.length;a.cost=Number(r.toFixed(2))}else a.state||(a.cost=null)}))},updateAmount:function(t){0!=Number(t[1])&&(this.member[t[0]].edited=!0,this.member[t[0]].cost=Number(t[1])),this.calculateAmount()}}},p=h,b=(n("f7c3"),Object(l["a"])(p,i,o,!1,null,"a22d3f66",null)),v=b.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project"},[n("div",{attrs:{id:"nav"}},[n("span",[t._v("Who paid?")]),n("span",[n("i",[t._v("$"+t._s(t.amount))])])]),n("ul",{staticClass:"member_list_wrapper",attrs:{id:"member_list_wrapper"}},t._l(t.member,(function(e,a){return n("Member",{key:e.name,attrs:{index:a,name:e.name,state:e.state,paidAmount:e.paidAmount},on:{checkbox:t.handleCheckboxChanged,amountEdited:t.updateAmount}})})),1)])},_=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"todo-app__item"},[n("div",{staticClass:"todo-app__checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkboxState,expression:"checkboxState"}],attrs:{type:"checkbox",id:t.name},domProps:{checked:Array.isArray(t.checkboxState)?t._i(t.checkboxState,null)>-1:t.checkboxState},on:{change:function(e){var n=t.checkboxState,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&(t.checkboxState=n.concat([i])):o>-1&&(t.checkboxState=n.slice(0,o).concat(n.slice(o+1)))}else t.checkboxState=r}}}),n("label",{attrs:{for:t.name}})]),n("h3",{staticClass:"todo-app__item-detail"},[t._v(t._s(t.name))]),n("input",{directives:[{name:"show",rawName:"v-show",value:t.state,expression:"state"}],ref:"inputAmount",attrs:{type:"text"},domProps:{value:t.paidAmount},on:{keyup:t.emitAmount}}),n("i",{directives:[{name:"show",rawName:"v-show",value:t.state,expression:"state"}],staticClass:"fas fa-pen",on:{click:t.editAmount}})])},g=[],k={name:"Member",props:{index:Number,name:String,state:Boolean,paidAmount:Number},data:function(){return{checkboxState:this.state}},watch:{checkboxState:function(){this.$emit("checkbox",this.index)}},methods:{editAmount:function(){this.$refs.inputAmount.focus()},emitAmount:function(){this.$emit("amountEdited",[this.index,this.$refs.inputAmount.value])}}},S=k,w=(n("c7c6"),Object(l["a"])(S,A,g,!1,null,"28ea3922",null)),N=w.exports,y={name:"payer",components:{Member:N},props:{amount:Number,member:Array},methods:{handleCheckboxChanged:function(t){this.member[t].state=!this.member[t].state,this.member[t].state||(this.member[t].edited=!1,this.member[t].paidAmount=null),this.calculateAmount()},calculateAmount:function(){var t=this,e=0;this.member.filter((function(t){return t.edited})).forEach((function(t){e+=t.paidAmount}));var n=this.member.filter((function(t){return t.state&&!t.edited}));this.member.forEach((function(a){if(a.state&&!a.edited){var r=(t.amount-e)/n.length;a.paidAmount=Number(r.toFixed(2))}else a.state||(a.paidAmount=null)}))},updateAmount:function(t){0!=Number(t[1])&&(this.member[t[0]].edited=!0,this.member[t[0]].paidAmount=Number(t[1])),this.calculateAmount()}}},E=y,C=(n("4fa1"),Object(l["a"])(E,x,_,!1,null,"2a51f913",null)),L=C.exports,I={name:"bookkeeping",components:{Payer:L,Paidfor:v},data:function(){return{state:0,amount:null,item_name:null,memo:null,date:null,member:[{name:"aaa",state:!1,edited:!1,paidAmount:null,cost:null},{name:"bbb",state:!1,edited:!1,paidAmount:null,cost:null},{name:"ccc",state:!1,edited:!1,paidAmount:null,cost:null}]}},created:function(){window.$(document).ready((function(){console.log("aaaaaaaaaa"),window.$(".calendar").pignoseCalendar({multiple:!0,buttons:!0})}))},methods:{checkValid:function(t){var e=0;return 1==t?this.member.forEach((function(t){e+=t.paidAmount})):2==t&&this.member.forEach((function(t){e+=t.cost})),Math.round(e)==this.amount}}},M=I,P=(n("0b8a"),Object(l["a"])(M,a,r,!1,null,"65436807",null));e["default"]=P.exports},"408a":function(t,e,n){var a=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},4160:function(t,e,n){"use strict";var a=n("23e7"),r=n("17c2");a({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4de4":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").filter,i=n("1dde"),o=n("ae40"),c=i("filter"),s=o("filter");a({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4fa1":function(t,e,n){"use strict";var a=n("9eb9"),r=n.n(a);r.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"65f0":function(t,e,n){var a=n("861d"),r=n("e8b5"),i=n("b622"),o=i("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var i,o;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&r(t,o),t}},"9eb9":function(t,e,n){},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),o=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),m=n("c04e"),l=n("d039"),d=n("7c73"),f=n("241c").f,h=n("06cf").f,p=n("9bf2").f,b=n("58a8").trim,v="Number",x=r[v],_=x.prototype,A=s(d(_))==v,g=function(t){var e,n,a,r,i,o,c,s,u=m(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=u.slice(2),o=i.length,c=0;c<o;c++)if(s=i.charCodeAt(c),s<48||s>r)return NaN;return parseInt(i,a)}return+u};if(i(v,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var k,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(A?l((function(){_.valueOf.call(n)})):s(n)!=v)?u(new x(g(e)),n,S):g(e)},w=a?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)c(x,k=w[N])&&!c(S,k)&&p(S,k,h(x,k));S.prototype=_,_.constructor=S,o(r,v,S)}},ae40:function(t,e,n){var a=n("83ab"),r=n("d039"),i=n("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,m=i(e,0)?e[0]:s,l=i(e,1)?e[1]:void 0;return c[t]=!!n&&!r((function(){if(u&&!a)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,m,l)}))}},b680:function(t,e,n){"use strict";var a=n("23e7"),r=n("a691"),i=n("408a"),o=n("1148"),c=n("d039"),s=1..toFixed,u=Math.floor,m=function(t,e,n){return 0===e?n:e%2===1?m(t,e-1,n*t):m(t*t,e/2,n)},l=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));a({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,n,a,c,s=i(this),d=r(t),f=[0,0,0,0,0,0],h="",p="0",b=function(t,e){var n=-1,a=e;while(++n<6)a+=t*f[n],f[n]=a%1e7,a=u(a/1e7)},v=function(t){var e=6,n=0;while(--e>=0)n+=f[e],f[e]=u(n/t),n=n%t*1e7},x=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var n=String(f[t]);e=""===e?n:e+o.call("0",7-n.length)+n}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(h="-",s=-s),s>1e-21)if(e=l(s*m(2,69,1))-69,n=e<0?s*m(2,-e,1):s/m(2,e,1),n*=4503599627370496,e=52-e,e>0){b(0,n),a=d;while(a>=7)b(1e7,0),a-=7;b(m(10,a,1),0),a=e-1;while(a>=23)v(1<<23),a-=23;v(1<<a),b(1,1),v(2),p=x()}else b(0,n),b(1<<-e,0),p=x()+o.call("0",d);return d>0?(c=p.length,p=h+(c<=d?"0."+o.call("0",d-c)+p:p.slice(0,c-d)+"."+p.slice(c-d))):p=h+p,p}})},b727:function(t,e,n){var a=n("0366"),r=n("44ad"),i=n("7b0b"),o=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,m=4==t,l=6==t,d=5==t||l;return function(f,h,p,b){for(var v,x,_=i(f),A=r(_),g=a(h,p,3),k=o(A.length),S=0,w=b||c,N=e?w(f,k):n?w(f,0):void 0;k>S;S++)if((d||S in A)&&(v=A[S],x=g(v,S,_),t))if(e)N[S]=x;else if(x)switch(t){case 3:return!0;case 5:return v;case 6:return S;case 2:s.call(N,v)}else if(m)return!1;return l?-1:u||m?m:N}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c7c6:function(t,e,n){"use strict";var a=n("da68"),r=n.n(a);r.a},da68:function(t,e,n){},dca1:function(t,e,n){"use strict";var a=n("fa8c"),r=n.n(a);r.a},e82f:function(t,e,n){},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},f7c3:function(t,e,n){"use strict";var a=n("0722"),r=n.n(a);r.a},fa8c:function(t,e,n){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.adb3f3d1.js.map