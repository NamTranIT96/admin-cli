(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0aab97"],{"11de":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-product-component-wrapper list-product-component-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.is_view_detail_product,expression:"!is_view_detail_product"}],staticClass:"list-product-content"},t._l(t.list_product,(function(e,a){return s("div",{key:a,staticClass:"item-product-wrapper flex q-pt-md q-pb-md"},[s("div",{staticClass:"image-wrapper"},[e.photos&&e.photos.length>0?s("img",{attrs:{src:t.backend_url+e.photos[0]}}):s("img",{attrs:{src:"statics/images/no-image.png"}}),s("div",{staticClass:"status-product-wrapper flex items-center"},[0==e.status?s("div",{staticClass:"dot-draft-wrapper q-mr-sm"}):t._e(),1==e.status?s("div",{staticClass:"dot-active-wrapper q-mr-sm"}):t._e(),2==e.status?s("div",{staticClass:"dot-inactive-wrapper q-mr-sm"}):t._e(),3==e.status?s("div",{staticClass:"dot-inactive-wrapper q-mr-sm"}):t._e(),4==e.status?s("div",{staticClass:"dot-inactive-wrapper q-mr-sm"}):t._e(),s("div",{staticClass:"text-status"},[t._v(t._s(t._f("getNameStatus")(e.status)))])])]),s("div",{staticClass:"info-product-warpper"},[s("div",{staticClass:"product-name q-mb-sm",on:{click:function(s){return t.routerToDetailProduct(e)}}},[t._v(t._s(e.title))]),s("div",{staticClass:"product-code q-mb-sm"},[t._v("Product code: "+t._s(e.referenceCode))]),s("div",{staticClass:"product-code q-mb-sm"},[t._v("Location: "+t._s(e.startingPointAddress))]),s("div",{staticClass:"button-manage-wrapper button-footer-wrapper flex items-center q-mt-md"},[s("div",{staticClass:"q-mr-md"},[s("q-btn",{attrs:{outline:"",color:"primary",label:"Order",icon:"shopping_cart",size:"md"},on:{click:function(s){return t.routerToDetailProduct(e)}}})],1)])])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.is_view_detail_product,expression:"is_view_detail_product"}],staticClass:"detail-product-wrapper"},[s("div",[s("q-btn",{attrs:{flat:"",icon:"arrow_back",label:"Back",color:"primary"},on:{click:function(e){t.is_view_detail_product=!1}}})],1),s("q-separator",{staticClass:"q-mt-sm"}),s("detail-product",{attrs:{id:t.current_id_product}})],1)])},i=[],r=s("2161"),o=s("9c58"),c={name:"list-product-component-page",filters:{getNameStatus:function(t){var e="";switch(t){case 0:e="Draft";break;case 1:e="Active";break;case 2:e="InActive";break;case 3:e="Pending";break;case 4:e="NotOperating";break;default:break}return e}},data:function(){return{list_product:[],backend_url:o["a"],is_view_detail_product:!1,current_id_product:null}},methods:{routerToDetailProduct:function(t){this.current_id_product=t.id,this.is_view_detail_product=!0},getInfoListProduct:function(){var t=this,e=localStorage.getItem("user_token_fisheye_client");t.list_id.forEach((function(s){t.$axios.get("/api/Products/GetProductDetail/"+s,{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){t.list_product.push(e.data)})).catch((function(e){e.response.data?t.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:e.response.data}):t.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:"Have Error"})}))}))}},mounted:function(){var t=this.$route.query.listid;t&&(this.list_id=JSON.parse(t),this.getInfoListProduct())},components:{"detail-product":r["default"]}},n=c,d=s("2877"),p=s("fe09"),u=Object(d["a"])(n,a,i,!1,null,null,null);e["default"]=u.exports;u.options.components=Object.assign({QBtn:p["c"],QSeparator:p["C"]},u.options.components||{})}}]);