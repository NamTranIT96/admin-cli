(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6cacad26"],{"16c3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("header-mobile",{attrs:{name_header_mobile:"Plan and billings"}})],1),n("div",{staticClass:"plan-and-billing-wrapper q-pa-md"},[n("div",{staticClass:"text-center q-mb-md view-on-desk-top",staticStyle:{"font-size":"24px","font-weight":"bold"}},[t._v("Plan And Billing Mangement")]),n("q-separator",{staticClass:"view-on-desk-top"}),t.is_role_admin?n("div",{staticClass:"flex q-mt-md"},[n("div",{staticClass:"billing-wrapper w-50-per"},[n("div",{staticClass:"billing-title"},[t._v("Billing infomation")]),n("div",{staticClass:"q-pl-md"},[n("div",{staticClass:"q-pt-md q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Company name:")]),t._v("\n            "+t._s(t.info_company.companyName)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Company phone:")]),t._v("\n            "+t._s(t.info_company.companyPhone)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Type of package:")]),t._v("\n            "+t._s(t.info_company.planNote)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Total allowed user:")]),t._v("\n            "+t._s(t.info_company.totalAllowedUsers)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Total allowed branch:")]),t._v("\n            "+t._s(t.info_company.totalAllowedBranches)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Number user used:")]),t._v("\n            "+t._s(t.info_company.usedUsers)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Number branch used:")]),t._v("\n            "+t._s(t.info_company.usedBranches)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Noted of system:")]),t._v("\n            "+t._s(t.info_company.note)+"\n          ")]),n("div",{staticClass:"q-pt-sm q-pb-sm item-billing flex"},[n("div",{staticClass:"sub-title-billing"},[t._v("Date expired:")]),t._v("\n            "+t._s(t._f("formatDateSystem2")(t.info_company.dateExpired))+"\n          ")])])]),n("div",{staticClass:"plan-wrapper w-50-per"},[n("div",{staticClass:"plan-title"},[t._v("Plan infomation")]),n("div",{staticClass:"q-mt-md q-pl-md"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:20},placeholder:"Input plan of company"},model:{value:t.info_company.clientNotePlan,callback:function(e){t.$set(t.info_company,"clientNotePlan",e)},expression:"info_company.clientNotePlan"}})],1),n("div",{staticClass:"button-wrapper text-center q-mt-lg"},[n("q-btn",{attrs:{size:"md",icon:"check",label:"Save",color:"primary"},on:{click:function(e){return t.savePlanNote()}}})],1)])]):n("div",{staticClass:"text-center q-mt-lg"},[t._v("You can not have perrmission to view")])],1)])},s=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("8993")),o=n.n(a),l=n("c47a"),r=n.n(l),c=n("2f62"),p=n("7dae");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"plan-and-billing-manage",filters:{},computed:m({},Object(c["b"])({current_user_logged_info:"login/getUserLoggedInfo",current_branch_id:"login/getCurrentBranchId",is_role_admin:"login/getRoleAdmin"})),watch:{current_branch_id:function(t){!isNaN(t)&&parseInt(t)}},data:function(){return{info_company:{companyName:"",companyPhone:"",totalAllowedUsers:0,totalAllowedBranches:0,usedUsers:0,usedBranches:0,planNote:"",note:"",dateExpired:"",clientNotePlan:""}}},methods:{savePlanNote:function(){var t=this,e=localStorage.getItem("user_token_fisheye_client"),n={clientNotePlan:t.info_company.clientNotePlan};this.$axios.put("/api/Companies/Update",JSON.stringify(n),{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){t.$q.notify({color:"secondary",position:"top-right",icon:"tag_faces",message:"Update successfully!"})})).catch((function(e){if(e.response.data){if("string"==typeof e.response.data)""!=e.response.data?t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:e.response.data}):e.response.statusText&&t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:e.response.statusText});else if("object"==o()(e.response.data)){var n=Object.keys(e.response.data);n.length>0&&t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:e.response.data[n[0]]})}}else t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:"Have error"})}))},getInfoCompany:function(){var t=this,e=localStorage.getItem("user_token_fisheye_client");this.$axios.get("/api/Companies/GetMyCompany",{headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){t.info_company=e.data})).catch((function(e){if(e.response.data){if("string"==typeof e.response.data)""!=e.response.data?t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:e.response.data}):e.response.statusText&&t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:e.response.statusText});else if("object"==o()(e.response.data)){var n=Object.keys(e.response.data);n.length>0&&t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:e.response.data[n[0]]})}}else t.$q.notify({color:"red-5",textColor:"white",position:"top-right",icon:"warning",message:"Have error"})}))}},components:{"header-mobile":p["a"]},mounted:function(){this.getInfoCompany()}},g=f,u=n("2877"),b=n("fe09"),v=Object(u["a"])(g,i,s,!1,null,null,null);e["default"]=v.exports;v.options.components=Object.assign({QSeparator:b["C"],QBtn:b["c"]},v.options.components||{})},"7dae":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 header-mobile-wrapper"},[n("div",{staticClass:"h-100-per"},[n("div",{staticClass:"h-100-per"},[n("div",{staticClass:"text-header flex items-center"},[n("div",{staticClass:"q-pl-md name-product"},[t._v(t._s(t.name_header_mobile))])])])])])},s=[],a={name:"HeaderMobileCreateProduct",props:{name_header_mobile:{type:String,default:""}},data:function(){return{}},methods:{}},o=a,l=n("2877"),r=Object(l["a"])(o,i,s,!1,null,null,null);e["a"]=r.exports}}]);