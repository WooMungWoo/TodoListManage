(function(t){function e(e){for(var n,s,l=e[0],i=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,l=1;l<o.length;l++){var i=o[l];0!==a[i]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},3389:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("TodoHeader"),o("TotoInput",{on:{addTodo:t.addTodo}}),o("TodoList",{attrs:{propsdata:t.todoItems}}),o("TodoFooter",{on:{clearAll:t.clearAll}})],1)},r=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h1",[t._v("형그니 연습중임다")])},l=[],i={},c=i,u=(o("5a88"),o("2877")),d=Object(u["a"])(c,s,l,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"inputBox shadow"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",placeholder:"Type what you have to do"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),o("span",{staticClass:"addContainer",on:{click:t.addTodo}},[o("i",{staticClass:"addBtn fas fa-plus",attrs:{"aria-hidden":"true"}})]),t.show?o("modal",{on:{close:function(e){t.show=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고")]),o("span",{attrs:{slot:"body"},slot:"body"},[t._v("할 일을 입력하세요.")]),o("span",{attrs:{slot:"footer"},on:{click:function(e){t.show=!1}},slot:"footer"},[o("button",[t._v("확인")]),o("i",{attrs:{classs:"closeModalBtn fas fa-fimes","aria-hidden":"true"}})])]):t._e()],1)},h=[],m=(o("498a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{staticClass:"modal-wrapper"},[o("div",{staticClass:"modal-container"},[o("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v("default header")]}))],2),o("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v("default body")]}))],2),o("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),o("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v("OK")])]}))],2)])])])])}),v=[],b=(o("a9dc"),{}),_=Object(u["a"])(b,m,v,!1,null,null,null),y=_.exports,T={data:function(){return{newTodoItem:"",show:!1}},methods:{addTodo:function(){if(""!=this.newTodoItem){var t=this.newTodoItem&&this.newTodoItem.trim();this.$emit("addTodo",t),this.clearInput()}else this.show=!this.show},clearInput:function(){this.newTodoItem=""}},components:{Modal:y}},w=T,g=(o("f2c7"),Object(u["a"])(w,p,h,!1,null,"33a73857",null)),C=g.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.propsdata,(function(e,n){return o("li",{key:e,staticClass:"shadow"},[o("i",{staticClass:"checkBtn fas fa-check",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(e)+" "),o("span",{staticClass:"removeBtn",attrs:{type:"button"},on:{click:function(o){return t.removeTodo(e,n)}}},[o("i",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"}})])])})),0)],1)},O=[],k=(o("a434"),{props:["propsdata"],methods:{removeTodo:function(t,e){console.log(t+","+e),localStorage.removeItem(t),this.propsdata.splice(e,1)}}}),x=k,j=(o("ed30"),o("7202"),Object(u["a"])(x,I,O,!1,null,"2ab2ba59",null)),S=j.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearAllContainer"},[o("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])},P=[],A={methods:{clearTodo:function(){this.$emit("clearAll")}}},E=A,B=(o("85a9"),Object(u["a"])(E,$,P,!1,null,null,null)),M=B.exports,F={data:function(){return{todoItems:[]}},components:{TodoHeader:f,TotoInput:C,TodoList:S,TodoFooter:M},methods:{addTodo:function(t){localStorage.setItem(t,t),this.todoItems.push(t)},clearAll:function(){localStorage.clear(),this.todoItems=[]}},created:function(){if(localStorage.length>0)for(var t=0;t<localStorage.length;t++)this.todoItems.push(localStorage.key(t))}},H=F,J=(o("034f"),Object(u["a"])(H,a,r,!1,null,null,null)),L=J.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(L)}}).$mount("#app")},"5a88":function(t,e,o){"use strict";o("b486")},7202:function(t,e,o){"use strict";o("9db6")},"85a9":function(t,e,o){"use strict";o("f3a5")},"85ec":function(t,e,o){},"89d2":function(t,e,o){},"9db6":function(t,e,o){},a9dc:function(t,e,o){"use strict";o("3389")},b486:function(t,e,o){},ed30:function(t,e,o){"use strict";o("89d2")},f2c7:function(t,e,o){"use strict";o("fc83")},f3a5:function(t,e,o){},fc83:function(t,e,o){}});
//# sourceMappingURL=app.f13bf440.js.map