!function(){var n=function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=77)}([function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t){n.exports=__mipComponentsWebpackHelpers__["vue-loader/lib/runtime/componentNormalizer"]},function(n,t){var e=n.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(n,t,e){var r=e(11),o=e(19);n.exports=e(4)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){n.exports=!e(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},,function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var r=e(8);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){var r=e(32),o=e(12);n.exports=function(n){return r(o(n))}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t,e){var r=e(7),o=e(28),a=e(29),i=Object.defineProperty;t.f=e(4)?Object.defineProperty:function(n,t,e){if(r(n),t=a(t,!0),r(e),o)try{return i(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t){n.exports=function(n){if(void 0==n)throw TypeError("Can't call method on  "+n);return n}},function(n,t,e){var r=e(21)("keys"),o=e(23);n.exports=function(n){return r[n]||(r[n]=o(n))}},function(n,t){n.exports=__mipComponentsWebpackHelpers__["css-loader/lib/css-base"]},function(n,t){n.exports=__mipComponentsWebpackHelpers__["vue-style-loader/lib/addStylesClient"]},,function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t,e){var r=e(8),o=e(0).document,a=r(o)&&r(o.createElement);n.exports=function(n){return a?o.createElement(n):{}}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t,e){var r=e(2),o=e(0),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(n.exports=function(n,t){return a[n]||(a[n]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:e(22)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(n,t){n.exports=!0},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},function(n,t){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(n,t,e){var r=e(0),o=e(2),a=e(26),i=e(3),s=e(6),c=function(n,t,e){var u,d,f,l=n&c.F,p=n&c.G,b=n&c.S,v=n&c.P,x=n&c.B,m=n&c.W,g=p?o:o[t]||(o[t]={}),h=g.prototype,_=p?r:b?r[t]:(r[t]||{}).prototype;for(u in p&&(e=t),e)(d=!l&&_&&void 0!==_[u])&&s(g,u)||(f=d?_[u]:e[u],g[u]=p&&"function"!=typeof _[u]?e[u]:x&&d?a(f,r):m&&_[u]==f?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t.prototype=n.prototype,t}(f):v&&"function"==typeof f?a(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[u]=f,n&c.R&&h&&!h[u]&&i(h,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,n.exports=c},function(n,t,e){var r=e(27);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,e){n.exports=!e(4)&&!e(17)(function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a})},function(n,t,e){var r=e(8);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var r=e(31),o=e(24);n.exports=Object.keys||function(n){return r(n,o)}},function(n,t,e){var r=e(6),o=e(9),a=e(33)(!1),i=e(13)("IE_PROTO");n.exports=function(n,t){var e,s=o(n),c=0,u=[];for(e in s)e!=i&&r(s,e)&&u.push(e);for(;t.length>c;)r(s,e=t[c++])&&(~a(u,e)||u.push(e));return u}},function(n,t,e){var r=e(20);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==r(n)?n.split(""):Object(n)}},function(n,t,e){var r=e(9),o=e(34),a=e(35);n.exports=function(n){return function(t,e,i){var s,c=r(t),u=o(c.length),d=a(i,u);if(n&&e!=e){for(;u>d;)if((s=c[d++])!=s)return!0}else for(;u>d;d++)if((n||d in c)&&c[d]===e)return n||d||0;return!n&&-1}}},function(n,t,e){var r=e(10),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t,e){var r=e(10),o=Math.max,a=Math.min;n.exports=function(n,t){return(n=r(n))<0?o(n+t,0):a(n,t)}},,,,function(n,t,e){var r=e(67);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(15).default)("7d134ced",r,!0,{})},,,,,,,,,,,,,,,,,,,,,,function(n,t,e){n.exports={default:e(62),__esModule:!0}},function(n,t,e){e(63),n.exports=e(2).Object.values},function(n,t,e){var r=e(25),o=e(64)(!1);r(r.S,"Object",{values:function(n){return o(n)}})},function(n,t,e){var r=e(30),o=e(9),a=e(65).f;n.exports=function(n){return function(t){for(var e,i=o(t),s=r(i),c=s.length,u=0,d=[];c>u;)a.call(i,e=s[u++])&&d.push(n?[e,i[e]]:i[e]);return d}}},function(n,t){t.f={}.propertyIsEnumerable},function(n,t,e){"use strict";var r=e(39);e.n(r).a},function(n,t,e){(n.exports=e(14)(!1)).push(["5673a90bc31c8bcf","\n.wrapper[data-v-75a71ba8] {\n  overflow-y:scroll;\n  margin-top: -2px;\n}\ndiv[data-v-75a71ba8],\nspan[data-v-75a71ba8],\nimg[data-v-75a71ba8] {\n  -webkit-tap-highlight-color: transparent;\n}\n.btn-more[data-v-75a71ba8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  line-height: 3.2em;\n  height: 3.2em;\n}\nbody[data-v-75a71ba8] {\n  background-color: #fff;\n}\n.co_red[data-v-75a71ba8] {\n  color: #e4393c;\n}\n.orderfooter[data-v-75a71ba8] {\n  height: 13.6vw;\n}\n.orderListItem[data-v-75a71ba8] {\n  /* padding: 10px; */\n  border-bottom: 2.6vw solid #e8e8ed;\n  font-size: 3.2vw;\n}\n.orderListItem i[data-v-75a71ba8] {\n  font-style: normal;\n}\n.orderHeader[data-v-75a71ba8] {\n  border-bottom: 0.7px solid rgba(0, 0, 0, 0.08);\n  padding: 3vw;\n}\n.orderHeader .goPay[data-v-75a71ba8] {\n  margin-left: 10px;\n  border: 1px solid;\n  padding: 3px 13px;\n  border-radius: 5px;\n  border-color: #f44336;\n  color: #f44336;\n  margin-bottom: 3px;\n}\n.orderListItem .box_hd[data-v-75a71ba8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 3.8vw;\n}\n.orderListItem .box_hd .orderNum[data-v-75a71ba8] {\n  color: #999;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.orderListItem .box_hd .orderNum i[data-v-75a71ba8] {\n  color: #333;\n}\n.orderList[data-v-75a71ba8] {\n  /* margin-top: 30px; */\n  border-top: 1px solid #dcdcdc;\n  list-style: none;\n}\n\n/* status: ({10:'等待支付', 20: '已支付', 30:'未取', 40:'已取', 50: '运送中', 60:'已送达' })[order.status], */\n.box_hd .status[data-v-75a71ba8] {\n  font-size: 3.2vw;\n  color: rgba(0, 0, 0, 0.65);\n  padding: 1.2vw 1vw;\n  line-height: 1;\n  text-align: center;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  background: #fafafa;\n  white-space: nowrap;\n  margin-left: 2.6vw;\n}\n.box_hd .status_10[data-v-75a71ba8] {\n  color: #eb2f96;\n  background: #fff0f6;\n  border-color: #ffadd2;\n}\n.box_hd .status_20[data-v-75a71ba8] {\n  color: #1890ff;\n  background: #e6f7ff;\n  border-color: #91d5ff;\n}\n.box_hd .status_30[data-v-75a71ba8] {\n  color: #fa541c;\n  background: #fff2e8;\n  border-color: #ffbb96;\n}\n.box_hd .status_40[data-v-75a71ba8] {\n  color: #13c2c2;\n  background: #e6fffb;\n  border-color: #87e8de;\n}\n.box_hd .status_50[data-v-75a71ba8] {\n  color: #52c41a;\n  background: #f6ffed;\n  border-color: #b7eb8f;\n}\n.box_hd .status_60[data-v-75a71ba8] {\n  color: #722ed1;\n  background: #f9f0ff;\n  border-color: #d3adf7;\n}\n.box_header[data-v-75a71ba8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.box_header .price[data-v-75a71ba8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.box_header .timeshow[data-v-75a71ba8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  color: #c8c8c8;\n}\n.productList[data-v-75a71ba8] {\n  padding: 3vw;\n}\n.productItem[data-v-75a71ba8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 2.6vw;\n}\n.productItem .cover[data-v-75a71ba8] {\n  margin-right: 2.6vw;\n  background-size: cover;\n  width: 20vw;\n  height: 20vw;\n  background-color: #f3f3f3;\n}\n.goodsinfo[data-v-75a71ba8] {\n  color: #999;\n}\n.goodsinfo .name[data-v-75a71ba8] {\n  color: #333;\n  font-size: 3.2vw;\n  font-weight: bold;\n}\n.mip-wecoffee-infinitescroll-loading[data-v-75a71ba8],\n.mip-wecoffee-infinitescroll-loading[data-v-75a71ba8] {\n  padding: 10vw;\n  text-align: center;\n  color: #999;\n}\n.rt-order[data-v-75a71ba8] {\n  padding-top: 40px;\n}\n",""])},,,,,,,,,,function(n,t,e){"use strict";e.r(t);var r=e(61),o=e.n(r),a={props:{info:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{isPay:!0,goodsData:[],orderLists:[],renderLists:[],pn:1,pg:10,message:null}},mounted:function(){var n=MIP.sandbox.this(this);setTimeout(function(){n.sessionId=n.info.sessionId,n.getOrderLists(),n.message="点击加载更多"},200)},methods:{goPayCode:function(n,t,e){50===n&&"现场点单"===e&&MIP.sandbox.window.MIP.viewer.open("./orderTake.html?orderId="+t+"&r="+(new Date).getTime(),{isMipLink:!0})},getMore:function(){++MIP.sandbox.this(this).pn,MIP.sandbox.this(this).getOrderLists()},getOrderLists:function(){var n=MIP.sandbox.this(this),t="/api/orders/"+MIP.sandbox.this(this).pn+"/"+MIP.sandbox.this(this).pg;fetchJsonp(t,{jsonpCallback:"callback",timeout:5e3}).then(function(n){return n.json()}).then(function(t){t&&0===parseInt(t.status,10)&&0!==t.data.orders.length?t.data.orders.map(function(t,e){var r=new Date(t.createdAt),a={id:t.id,price:t.priceCent/100,timeshow:r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+" "+r.getHours()+":"+r.getMinutes(),idx:e,status:{10:"等待支付",20:"已支付",30:"商家已接单",40:"制作中",50:2===t.orderType?"去取单":"运送中",60:2===t.orderType?"已取单":"已送达"}[t.status],statusNum:t.status,orderType:2==+t.orderType?"现场点单":"远程点单",isPay:!0,isOrder:!0};a.products=t.items.map(function(n){var t=n.sku.product,e=JSON.parse(n.extra).spec,r=o()(e).join("/").substring(0,40);return{cover:t.imageUri,name:t.name,spec:r,count:n.count,price:n.sku.priceCent/100}}),10===t.status&&t.exprieTime>0?a.isPay=!0:a.isPay=!1,10==+t.status&&(+t.exprieTime>0?a.payLink="/orderPay.html?orderId="+t.id:(a.status="订单取消",a.statusNum=-1)),2!==t.orderType&&(a.isOrder=!1),t.temData=a,n.orderLists.push(a)}):n.message="没有更多订单"}).catch(function(n){console.log(n)})}}},i=(e(66),e(1)),s=e.n(i)()(a,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"wrapper"},[n._l(n.orderLists,function(t){return e("div",{key:t,staticClass:"orderList"},[e("li",{staticClass:"orderListItem"},[e("div",{staticClass:"box_hd orderHeader"},[e("span",{staticClass:"orderNum"},[n._v("订单号：\n          "),e("i",[n._v(n._s(t.id))])]),n._v(" "),e("span",{staticClass:"status "},[n._v(n._s(t.orderType))]),n._v(" "),e("span",{class:"status status_"+t.statusNum,on:{click:function(e){n.goPayCode(t.statusNum,t.id,t.orderType)}}},[n._v("\n          "+n._s(t.status)+"\n        ")])]),n._v(" "),e("div",{staticClass:"box_header orderHeader"},[e("span",{staticClass:"price"},[n._v("总价:\n          "),e("i",{staticClass:"co_red"},[n._v(n._s(t.price))])]),n._v(" "),e("span",{staticClass:"timeshow"},[t.isPay?e("a",{staticClass:"goPay",attrs:{href:t.payLink,"data-sf-href":t.payLink,"data-sf-options":'{"title":{"html":"支付中心"}}',"data-type":"mip"}},[n._v("去支付")]):n._e(),n._v(n._s(t.timeshow)+"\n        ")])]),n._v(" "),n._l(t.products,function(t){return e("div",{key:t,staticClass:"productList"},[e("div",{staticClass:"productItem"},[e("mip-img",{staticClass:"cover",attrs:{src:t.cover,layout:"responsive",width:"20vw",height:"20vw"}},[e("mip-showcase-icon",{staticClass:"img-placeholder",attrs:{type:"weeLogo"}})],1),n._v(" "),e("div",{staticClass:"goodsinfo"},[e("div",{staticClass:"name"},[n._v(n._s(t.name))]),n._v(" "),e("div",{staticClass:"price"},[n._v("价格："+n._s(t.price))]),n._v(" "),e("div",{staticClass:"price"},[n._v(n._s(t.count)+"杯 "+n._s(t.spec))])])],1)])})],2)])}),n._v(" "),e("div",{staticClass:"btn-more",on:{click:n.getMore}},[n._v("\n    "+n._s(n.message)+"\n  ")])],2)},[],!1,null,"75a71ba8",null);s.options.__file="mip-wecoffee-orderlist.vue";t.default=s.exports}]);n=n.default||n,MIP["function"==typeof n?"registerCustomElement":"registerVueCustomElement"]("mip-wecoffee-orderlist",n)}();