webpackJsonp([1],{"4uT3":function(t,s){},NHnr:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o("7+uW"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"left-nav"},[o("ul",[o("li",[o("i",{staticClass:"icon iconfont icon-31goumaichongzhi"}),t._v(" "),o("div",[t._v("收银")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),o("div",[t._v("店铺")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),o("div",[t._v("商品")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-zuanshi"}),t._v(" "),o("div",[t._v("会员")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-31goumaichongzhi"}),t._v(" "),o("div",[t._v("统计")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-shezhi"}),t._v(" "),o("div",[t._v("设置")])])])])}]};var n={name:"App",components:{leftNav:o("VU/8")({},e,!1,function(t){o("sxJ5")},null,null).exports}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("leftNav"),this._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},staticRenderFns:[]};var l=o("VU/8")(n,i,!1,function(t){o("4uT3")},null,null).exports,c=o("/ocq"),r=o("aozt"),d=o.n(r),u={name:"pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},methods:{addOrderList:function(t){this.totalCount=0,this.totalMoney=0;for(var s=!1,o=0;o<this.tableData.length;o++)this.tableData[o].goodsId==t.goodsId&&(s=!0);if(s){this.tableData.filter(function(s){return s.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}this.getAllMoney()},removeOrderList:function(t){this.tableData=this.tableData.filter(function(s){return s.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(s){t.totalCount+=s.count,t.totalMoney=t.totalMoney+s.price*s.count})},removAllOrder:function(){this.totalCount=0,this.totalMoney=0,this.tableData=[]},checkout:function(){this.tableData[0]?(this.totalCount=0,this.totalMoney=0,this.tableData=[],this.$message({message:"结账成功，感谢您本次的消费",type:"success"})):this.$message.error("请先选择,或者过于频繁点击")}},created:function(){var t=this;d.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(s){t.oftenGoods=s.data}).catch(function(t){alert("网络错误，无法访问")}),d.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(s){t.type0Goods=s.data[0],t.type1Goods=s.data[1],t.type2Goods=s.data[2],t.type3Goods=s.data[3]}).catch(function(t){alert("网络错误，无法访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"}},v={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"pos"},[o("el-row",[o("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"点餐"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[o("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"count",label:"数量",width:"50"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(s){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.removeOrderList(s.row)}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){t.addOrderList(s.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),o("div",{},[o("small",[t._v("数量:")]),o("span",{staticStyle:{"padding-right":"30px"}},[t._v(t._s(t.totalCount))]),o("small",[t._v("金额:")]),o("span",[t._v(t._s(t.totalMoney))])]),t._v(" "),o("div",{staticClass:"div-btn"},[o("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:t.removAllOrder}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"success"},on:{click:t.checkout}},[t._v("结账")])],1)],1),t._v(" "),o("el-tab-pane",{attrs:{label:"挂单"}}),t._v(" "),o("el-tab-pane",{attrs:{label:"外卖"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:17}},[o("div",{staticClass:"often-goods"},[o("div",{staticClass:"title"},[t._v(" 常用商品 ")])]),t._v(" "),o("div",{staticClass:"often-goods-list"},[o("ul",t._l(t.oftenGoods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"o-price"},[t._v("￥"+t._s(s.price)+"元")])])}))]),t._v(" "),o("div",{staticClass:"goods-type"},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"汉堡"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),o("el-tab-pane",{attrs:{label:"小食"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),o("el-tab-pane",{attrs:{label:"饮料"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(s){return o("li",{on:{click:function(o){t.addOrderList(s)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),o("el-tab-pane",{attrs:{label:"套餐"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(s){return o("li",[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])])],1)],1)])],1)],1)},staticRenderFns:[]};var p=o("VU/8")(u,v,!1,function(t){o("X57q")},"data-v-d0756f1e",null).exports;a.default.use(c.a);var _=new c.a({routes:[{path:"/",name:"Pos",component:p}]}),f=o("xUsN"),h=o.n(f);o("NuO4");a.default.config.productionTip=!1,a.default.use(h.a),new a.default({el:"#app",router:_,components:{App:l},template:"<App/>"})},NuO4:function(t,s){},X57q:function(t,s){},sxJ5:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.d56cbb1702b72935ae9f.js.map