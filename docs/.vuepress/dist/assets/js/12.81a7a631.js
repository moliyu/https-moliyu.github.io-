(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{454:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},457:function(t,e,n){var o=n(17),i="["+n(454)+"]",s=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},464:function(t,e,n){"use strict";var o=n(0),i=n(457).trim;o({target:"String",proto:!0,forced:n(470)("trim")},{trim:function(){return i(this)}})},470:function(t,e,n){var o=n(1),i=n(454);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},593:function(t,e,n){"use strict";n.r(e);n(34),n(54),n(464);var o={name:"demo",mixins:[{data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick((function(){!0===e.isShow[t]?e.codeParent[t].style.height=+e.codeHeightArr[t]+"px":e.codeParent[t].style.height=0}))},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick((function(){t.getCodesHeight()}))}}],components:{},props:{name:null,detail:null,tableIndex:{default:0}},data:function(){return{codeStr:"\n        <g-button>默认按钮</g-button>\n        <g-button>默认按钮</g-button>\n      ".replace(/^\s*/gm,"").trim()}}},i=n(33),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h3",[t._v(t._s(t.name))]),t._v(" "),n("p",[t._v(t._s(t.detail))]),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[t._t("code")],2)]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(t.tableIndex)}}},[n("span",{staticClass:"code-text"},[t._v(t._s(!1===t.isShow[t.tableIndex]?"显示代码":"隐藏代码"))])])])])}),[],!1,null,"0d6f2f93",null);e.default=s.exports}}]);