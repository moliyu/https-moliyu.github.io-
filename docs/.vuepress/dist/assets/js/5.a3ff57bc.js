(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{459:function(t,e,s){},466:function(t,e,s){s(0)({target:"Object",stat:!0},{is:s(485)})},485:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},486:function(t,e,s){"use strict";var i=s(459);s.n(i).a},487:function(t,e,s){},503:function(t,e,s){"use strict";s(466);var i={name:"zbutton",props:{p:null,h:null,f:null,w:null,nt:{default:"#ffffff"},ht:null,at:null,normal:null,border:null,gray:null,active:null,hover:null,disable:null,bg:null,nb:{default:"transparent"},ab:null,hb:null},data:function(){return{mbg:"#409eff",mhover:"#64b0fe",mactive:"#2888eb",btclass:[],styleObject:{},isDisable:!1,bcolor:null}},created:function(){this.bg&&(this.mbg=this.bg),this.active&&(this.mactive=this.active),this.hover&&(this.mhover=this.hover),this.styleObject={padding:"0 ".concat(this.p,"px"),height:"".concat(this.h,"px"),lineHeight:"".concat(this.h,"px"),fontSize:"".concat(this.f,"px"),width:"".concat(this.w,"px"),background:this.mbg,border:"1px solid ".concat(this.nb),color:"".concat(this.nt)},Object.is(this.normal,void 0)||(this.styleObject.background="#ffffff",this.styleObject.border="1px solid rgba(220, 223, 230, 1)",this.styleObject.color="#606266"),Object.is(this.border,void 0)||(this.styleObject.background="#ffffff",this.styleObject.color="#409EFF",this.styleObject.border="1px solid #409EFF"),Object.is(this.gray,void 0)||(this.styleObject.background="#ECF5FF",this.styleObject.border="1px solid #B3D8FF",this.styleObject.color="#409EFF"),Object.is(this.disable,void 0)?this.styleObject.cursor="pointer":(this.isDisable=!0,this.styleObject.opacity=.5,this.styleObject.cursor="not-allowed")},methods:{enter:function(){if(!this.isDisable){if(!Object.is(this.normal,void 0))return this.styleObject.border="1px solid #409eff",void(this.styleObject.color="#409eff");if(!Object.is(this.border,void 0))return this.styleObject.border="1px solid #409eff",this.styleObject.color="#ffffff",void(this.styleObject.background="#409eff");if(!Object.is(this.gray,void 0))return this.styleObject.border="1px solid #409eff",this.styleObject.color="#ffffff",void(this.styleObject.background="#409eff");this.styleObject.background=this.mhover,this.styleObject.color=this.ht,this.styleObject.border="1px solid ".concat(this.hb)}},leave:function(){if(!this.isDisable){if(!Object.is(this.normal,void 0))return this.styleObject.border="1px solid rgba(220, 223, 230, 1)",void(this.styleObject.color="#606266");if(!Object.is(this.border,void 0))return this.styleObject.border="1px solid #409eff",this.styleObject.color="#409eff",void(this.styleObject.background="#ffffff");if(!Object.is(this.gray,void 0))return this.styleObject.border="1px solid #B3D8FF",this.styleObject.color="#409eff",void(this.styleObject.background="#ECF5FF");this.styleObject.background=this.mbg,this.styleObject.color=this.nt,this.styleObject.border="1px solid ".concat(this.nb)}},down:function(){if(!this.isDisable){if(!Object.is(this.normal,void 0))return this.styleObject.border="1px solid #2888eb",void(this.styleObject.color="#2888eb;");if(!Object.is(this.border,void 0))return this.styleObject.background="#2888eb",void(this.styleObject.color="#2888eb;");this.styleObject.background=this.mactive,this.styleObject.color=this.at,this.styleObject.border="1px solid ".concat(this.ab)}},up:function(){if(!this.isDisable){if(!Object.is(this.normal,void 0))return this.styleObject.border="1px solid #409eff",void(this.styleObject.color="#409eff;");if(!Object.is(this.border,void 0))return this.styleObject.background="#409eff",void(this.styleObject.color="#409eff;");this.styleObject.background=this.mhover,this.styleObject.color=this.ht,this.styleObject.border="1px solid ".concat(this.hb)}}}},o=(s(486),s(33)),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"zbutton",staticClass:"zbt",class:t.btclass,style:t.styleObject,on:{mouseenter:t.enter,mouseleave:t.leave,mousedown:t.down,mouseup:t.up}},[s("div",{staticClass:"bt"},[t._t("pre"),t._v(" "),s("div",{staticClass:"text"},[t._t("default")],2),t._v(" "),t._t("after")],2)])}),[],!1,null,"2a51108b",null);e.a=c.exports},563:function(t,e,s){"use strict";var i=s(487);s.n(i).a},589:function(t,e,s){"use strict";s.r(e);s(86);var i=s(503);i.a.install=function(t){return t.compnent(i.a.name,i.a)};var o={components:{zbutton:i.a}},c=(s(563),s(33)),r=Object(c.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button"},[s("zbutton",[t._v("主要按钮")]),t._v(" "),s("zbutton",{attrs:{normal:""}},[t._v("无背景")]),t._v(" "),s("zbutton",{attrs:{p:"30"}},[t._v("左右padding为30px")]),t._v(" "),s("zbutton",{attrs:{disable:"",f:"16"}},[t._v("字体大小16px")]),t._v(" "),s("zbutton",{attrs:{border:""}},[t._v("边框颜色")]),t._v(" "),s("zbutton",{attrs:{gray:""}},[t._v("灰色")]),t._v(" "),s("zbutton",{attrs:{bg:"#3ebe8c",hover:"yellow",active:"pink",nt:"black",ht:"green",at:"orange"}},[t._v("自定义")])],1)}),[],!1,null,"07eb18aa",null);e.default=r.exports}}]);