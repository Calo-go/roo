(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46331488"],{"1c4c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["step-item",t.link?"linkable":null],on:{click:t.go}},[a("span",{style:t.titleStyle},[t._v(t._s(t.title))]),t.icon?a("a-icon",{style:t.iconStyle,attrs:{type:t.icon}}):t._e(),t._t("default")],2)},i=[],r=(a("c975"),a("9911"),{name:"AStepItemGroup",props:{align:{type:String,default:"center",validator:function(t){return-1!=["left","center","right"].indexOf(t)}}},render:function(t){return t("div",{attrs:{style:"text-align: ".concat(this.align,"; margin-top: 8px")}},[t("div",{attrs:{style:"text-align: left; display: inline-block;"}},[this.$slots.default])])}}),s={name:"AStepItem",Group:r,props:["title","icon","link","titleStyle","iconStyle"],methods:{go:function(){var t=this.link;t&&this.$router.push(t)}}},u=s,c=(a("95eb"),a("0c7c")),o=Object(c["a"])(u,n,i,!1,null,"2267d9fc",null);e["a"]=o.exports},4266:function(t,e,a){},"42a1":function(t,e,a){},"45eb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout"},[a("div",{ref:"page",class:["page-content",t.layout,t.pageWidth]},[t._t("default")],2)])},i=[],r=(a("4160"),a("159b"),a("5530")),s=a("5880"),u=a("89a5"),c={name:"PageLayout",props:["desc","logo","title","avatar","linkList","linkList2","extraImage"],data:function(){return{page:{},pageHeaderHeight:0}},watch:{$route:function(){this.page=this.$route.meta.page}},updated:function(){this._inactive||this.updatePageHeight()},activated:function(){this.updatePageHeight()},deactivated:function(){this.updatePageHeight(0)},mounted:function(){this.updatePageHeight()},created:function(){this.page=this.$route.meta.page},beforeDestroy:function(){this.updatePageHeight(0)},computed:Object(r["a"])(Object(r["a"])({},Object(s["mapState"])("setting",["layout","multiPage","pageMinHeight","pageWidth","customTitles"])),{},{pageTitle:function(){var t=this.page&&this.page.title;return this.customTitle||t&&this.$t(t)||this.title||this.routeName},routeName:function(){var t=this.$route;return this.$t(Object(u["b"])(t.matched[t.matched.length-1].path))},breadcrumb:function(){var t=this,e=this.page,a=e&&e.breadcrumb;if(a){var n=[];return a.forEach((function(e){n.push(t.$t(e))})),n}return this.getRouteBreadcrumb()},marginCorrect:function(){return this.multiPage?24:0}}),methods:Object(r["a"])(Object(r["a"])({},Object(s["mapMutations"])("setting",["correctPageMinHeight"])),{},{getRouteBreadcrumb:function(){var t=this,e=this.$route.matched,a=[];e.forEach((function(e){var n=0===e.path.length?"/home":e.path;a.push(t.$t(Object(u["b"])(n)))}));var n=this.page&&this.page.title;return(this.customTitle||n)&&(a[a.length-1]=this.customTitle||n),a},updatePageHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.marginCorrect;this.correctPageMinHeight(this.pageHeaderHeight-t),this.pageHeaderHeight=t}})},o=c,l=(a("d0b3"),a("7fae"),a("0c7c")),d=Object(l["a"])(o,n,i,!1,null,"5f96653e",null);e["a"]=d.exports},6531:function(t,e,a){"use strict";var n=a("42a1"),i=a.n(n);i.a},6627:function(t,e,a){"use strict";var n=a("4266"),i=a.n(n);i.a},"6c85":function(t,e,a){},"779e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))])])},i=[],r={name:"HeadInfo",props:["title","content","bordered"]},s=r,u=(a("6627"),a("0c7c")),c=Object(u["a"])(s,n,i,!1,null,"46a43dda",null);e["a"]=c.exports},"7fae":function(t,e,a){"use strict";var n=a("9dfc"),i=a.n(n);i.a},"89cd":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return s}));var n=[{key:"op1",type:"订购关系生效",name:"曲丽丽",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"},{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",memo:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"},{key:"op4",type:"提交订单",name:"林东东",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"很棒"},{key:"op5",type:"创建订单",name:"汗牙牙",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"}],i=[{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",memo:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"},{key:"op4",type:"提交订单",name:"林东东",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"很棒"}],r=[{key:"op2",type:"财务复审",name:"付小小",status:"reject",updatedAt:"2017-10-03  19:23:12",memo:"不通过原因"},{key:"op3",type:"部门初审",name:"周毛毛",status:"agree",updatedAt:"2017-10-03  19:23:12",memo:"-"}],s=[{title:"操作类型",dataIndex:"type",key:"type"},{title:"操作人",dataIndex:"name",key:"name"},{title:"执行结果",dataIndex:"status",key:"status"},{title:"操作时间",dataIndex:"updatedAt",key:"updatedAt"},{title:"备注",dataIndex:"memo",key:"memo"}]},"95eb":function(t,e,a){"use strict";var n=a("6c85"),i=a.n(n);i.a},"9dfc":function(t,e,a){},a7d1:function(t,e,a){},c340:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["detail-list","small"===t.size?"small":"large","vertical"===t.layout?"vertical":"horizontal"]},[t.title?a("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),a("a-row",[t._t("default")],2)],1)},i=[],r=(a("a9e3"),a("da05")),s={name:"DetailListItem",props:{term:{type:String,required:!1}},inject:{col:{type:Number}},methods:{renderTerm:function(t,e){return e?t("div",{attrs:{class:"term"}},[e]):null},renderContent:function(t,e){return t("div",{attrs:{class:"content"}},[e])}},render:function(t){var e=this.renderTerm(t,this.$props.term),a=this.renderContent(t,this.$slots.default);return t(r["b"],{props:u[this.col]},[e,a])}},u={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6}},c={name:"DetailList",Item:s,props:{title:{type:String,required:!1},col:{type:Number,required:!1,default:3},size:{type:String,required:!1,default:"large"},layout:{type:String,required:!1,default:"horizontal"}},provide:function(){return{col:this.col>4?4:this.col}}},o=c,l=(a("6531"),a("0c7c")),d=Object(l["a"])(o,n,i,!1,null,null,null);e["a"]=d.exports},d0b3:function(t,e,a){"use strict";var n=a("a7d1"),i=a.n(n);i.a}}]);