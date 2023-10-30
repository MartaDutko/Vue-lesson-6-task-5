(function(){"use strict";var e={5461:function(e,t,o){var l=o(9242),r=o(3396);function a(e,t,o,l,a,i){const s=(0,r.up)("products-filters"),c=(0,r.up)("product-list");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s,{dataList:a.dataProduct,seller:a.sellerVal,"onUpdate:seller":t[0]||(t[0]=e=>a.sellerVal=e),sellerModifiers:{check:!0},model:a.modelVal,"onUpdate:model":t[1]||(t[1]=e=>a.modelVal=e),modelModifiers:{check:!0}},null,8,["dataList","seller","model"]),(0,r.Wm)(c,{dataList:i.filterProductList},null,8,["dataList"])],64)}var i=o(7139);const s={key:0,class:"block__product"},c=["href"],n=["src"],d={class:"tittle"},u={class:"price"},p={key:1,class:"block__product"};function m(e,t,o,l,a,m){return m.isExist?((0,r.wg)(),(0,r.iD)("div",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.dataList,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"product__card"},[(0,r._)("a",{href:e.link},[(0,r._)("img",{src:e.imgSrc},null,8,n),(0,r._)("p",d,(0,i.zw)(e.tittle),1),(0,r._)("p",u,(0,i.zw)(e.price)+" ₴",1)],8,c)])))),128))])):((0,r.wg)(),(0,r.iD)("div",p,"Oops nothing found"))}var f={name:"ProductList",props:{dataList:{type:Array}},computed:{isExist(){return this.dataList.length>0}}},h=o(89);const g=(0,h.Z)(f,[["render",m],["__scopeId","data-v-5e76e3f1"]]);var k=g;const v=e=>((0,r.dD)("data-v-47ebc7e3"),e=e(),(0,r.Cn)(),e),_={class:"block__product"},b=v((()=>(0,r._)("option",{disabled:"",value:""},"Виберіть продавця",-1))),A=["value"],w=v((()=>(0,r._)("option",{disabled:"",value:""},"Виберіть бренд",-1))),y=["value"];function j(e,t,o,a,s,c){return(0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("label",null,[(0,r.Uk)(" Виберіть продавця: "),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.sellerValue=e),class:(0,i.C_)(s.sellerColor)},[b,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.sellerList,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:e},(0,i.zw)(e),9,A)))),128))],2),[[l.bM,c.sellerValue]])]),(0,r._)("label",null,[(0,r.Uk)("Виберіть бренд: "),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.modelValue=e),class:(0,i.C_)(s.modelColor)},[w,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.modelList,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e,value:e},(0,i.zw)(e),9,y)))),128))],2),[[l.bM,c.modelValue]])])])}var C={name:"ProductsFilters",data(){return{sellerColor:"choossInpup",modelColor:"choossInpup"}},props:{dataList:{type:Array},seller:{type:String},sellerModifiers:{default:()=>({})},model:{type:String},modelModifiers:{default:()=>({})}},computed:{sellerList(){let e=new Set;return this.dataList.forEach((t=>{e.add(t.seller)})),e},sellerValue:{get(){return this.seller},set(e){this.sellerModifiers.check&&(this.sellerColor=null),this.$emit("update:seller",e)}},modelList(){const e=new Set;return this.dataList.forEach((t=>{e.add(t.model)})),e},modelValue:{get(){return this.model},set(e){this.modelModifiers.check&&(this.modelColor=null),this.$emit("update:model",e)}}}};const L=(0,h.Z)(C,[["render",j],["__scopeId","data-v-47ebc7e3"]]);var S=L;const M=[{id:1,seller:"comfy",tittle:"Ноутбук Asus Vivobook 15 X1502ZA-BQ1209 Icelight Silver",model:"Asus",imgSrc:"https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/9/c/9c1f5be23_249034_b.jpg/w_600",link:"https://comfy.ua/ua/noutbuk-asus-vivobook-15-x1502za-bq1209-icelight-silver.html?gclid=Cj0KCQjwhfipBhCqARIsAH9msbkh29J_SoOhr50qSoxWfCzgJSl_CJ1i6Qy3Ea4ISmlrljFOlCIkHL4aAqgDEALw_wcB",price:17999},{id:2,seller:"comfy",tittle:"Ноутбук Asus Vivobook 17 X1502ZA-BQ1209 Icelight Silver",model:"Asus",imgSrc:"https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/5/2/527fc5a6c_233647_b_1.jpg/w_600",link:"https://comfy.ua/noutbuk-asus-vivobook-17-x712ea-x712ea-bx868-silver.html?gclid=Cj0KCQjwhfipBhCqARIsAH9msblMlvIV7q5WvKpBBjLt93QxcDaGxN2nRY-1XaSdmS1PQetN5CNXENYaAjmQEALw_wcB",price:17999},{id:3,seller:"comfy",tittle:"Ноутбук Lenovo IdeaPad Slim 3 15AMN8 (82XQ009GRA) Arctic Grey",model:"Lenovo",imgSrc:"https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/g/h/ghgj_k.jpg/w_600",link:"https://comfy.ua/ua/noutbuk-lenovo-ideapad-slim-3-15amn8-82xq009gra-arctic-grey.html?gclid=Cj0KCQjwhfipBhCqARIsAH9msblC3feIhMfsNaGmmhAMUlr4FuZl1V4TgE5Ebe2chNv0OkKGw5k0XYcaAjfcEALw_wcB",price:17499},{id:4,seller:"comfy",tittle:"Ноутбук HP 15-fd0053ua (834P2EA) White",model:"HP",imgSrc:"https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/9/2/92d8e9b9f31111edad9600155d05f304_318e6882044611eead9600155d05f304_10.jpg/w_600",link:"https://comfy.ua/noutbuk-hp-15-fd0053ua-834p2ea-white.html?gclid=Cj0KCQjwhfipBhCqARIsAH9msblaXV6ZYurXXnIvdxR9Fne40-jXCd5erwza7v3y-AlEOkTZ6rYznSYaAm5BEALw_wcB",price:16499},{id:5,seller:"moyo",tittle:"Ноутбук Lenovo IdeaPad 1 15ADA7 (82R10048RA) Cloud Grey",model:"Lenovo",imgSrc:"https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/d/ideapad_1_15ada7_ct1_04.jpg/w_600",link:"https://comfy.ua/noutbuk-lenovo-ideapad-1-15ada7-82r10048ra-cloud-grey.html",price:14999},{id:6,seller:"rozetka",tittle:'Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN93) Silver',model:"MacBook",imgSrc:"https://content.rozetka.com.ua/goods/images/big/215770075.jpg",link:"https://rozetka.com.ua/apple_macbook_air_13_m1_256gb_2020_silver/p245161903/?gad_source=1&gclid=Cj0KCQjwhfipBhCqARIsAH9msbn9cnOwxK9mHDHxnk5et7dNrNwpUJLfjGv6Ji5UO_NnDMj2KFgnhxsaAkFbEALw_wcB",price:43499},{id:7,seller:"rozetka",tittle:'Ноутбук Apple MacBook Air 13.6" M2 8/256GB 2022 (MLY13UA/A) Starlight',model:"MacBook",imgSrc:"https://content.rozetka.com.ua/goods/images/big/269257669.jpg",link:"https://rozetka.com.ua/apple-macbook-air-136-m2-256gb-2022-starlight/p343436317/",price:53499},{id:8,seller:"rozetka",tittle:'Ноутбук Apple MacBook Pro 13" M2 8/512Gb 2022 (MNEQ3UA/A) Silver',model:"MacBook",imgSrc:"https://content.rozetka.com.ua/goods/images/big/269271821.jpg",link:"https://rozetka.com.ua/apple-macbook-pro-13-m2-512gb-2022-silver/p343443691/",price:71499},{id:9,seller:"rozetka",tittle:"Ноутбук Acer Aspire 7 A715-42G-R0VS (NH.QBFEU.00A)",model:"Acer",imgSrc:"https://content2.rozetka.com.ua/goods/images/big/343097444.jpg",link:"https://rozetka.com.ua/acer_nh_qbfeu_00a/p282286938/",price:28999},{id:10,seller:"rozetka",tittle:"Ноутбук Acer Nitro 5 AN517-41-R8F9 (NH.QBHEU.00F)",model:"Acer",imgSrc:"https://content.rozetka.com.ua/goods/images/big/349458888.jpg",link:"https://rozetka.com.ua/acer-nhqbheu00f/p386693064/",price:64999}];var B={name:"App",components:{ProductsFilters:S,ProductList:k},data(){return{dataProduct:M,sellerVal:null,modelVal:null}},computed:{filterProductList(){return this.sellerVal||this.modelVal?this.dataProduct.filter((e=>this.search(e))):this.dataProduct}},methods:{isExist(e,t,o){return!o||e[t]===o},search(e){return this.isExist(e,"seller",this.sellerVal)&&this.isExist(e,"model",this.modelVal)}}};const V=(0,h.Z)(B,[["render",a]]);var z=V;(0,l.ri)(z).mount("#app")}},t={};function o(l){var r=t[l];if(void 0!==r)return r.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,l,r,a){if(!l){var i=1/0;for(d=0;d<e.length;d++){l=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<l.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](l[c])}))?l.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var n=r();void 0!==n&&(t=n)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[l,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,a,i=l[0],s=l[1],c=l[2],n=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var d=c(o)}for(t&&t(l);n<i.length;n++)a=i[n],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},l=self["webpackChunktask5"]=self["webpackChunktask5"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[998],(function(){return o(5461)}));l=o.O(l)})();
//# sourceMappingURL=app.b458806a.js.map