(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0ceb36"],{6127:function(e,o,s){"use strict";s.r(o);var t=function(){var e=this,o=e.$createElement,s=e._self._c||o;return s("div",{staticClass:"flex flex-center h-100vh login-wrapper"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading_reset,expression:"loading_reset"}],staticClass:"form-login-mobile"},[s("div",{staticClass:"form-2 form-login q-pa-lg q-card text-center"},[s("p",{staticClass:"text-login-system"},[e._v("RESET PASSWORD")]),s("q-input",{attrs:{type:"password",color:"primary","bottom-slots":"",label:"Input password",dense:e.dense},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(o){return e.clearText()}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("Type your password")]},proxy:!0}]),model:{value:e.password,callback:function(o){e.password=o},expression:"password"}}),s("q-input",{attrs:{type:"password",color:"primary","bottom-slots":"",label:"Retype password",dense:e.dense},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(o){return e.clearPasword()}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("Retype your password")]},proxy:!0}]),model:{value:e.re_password,callback:function(o){e.re_password=o},expression:"re_password"}}),s("q-btn",{attrs:{color:"primary q-mt-lg","icon-right":"send",label:"Reset"},on:{click:function(o){return e.resetPassword()}}})],1)])])},n=[],r={name:"PageIndex",data:function(){return{password:"",re_password:"",user_id:"",token:"",dense:!1,loading_reset:!1}},methods:{clearText:function(){this.password=""},clearPasword:function(){this.re_password=""},resetPassword:function(){var e=this;e.loading_reset=!0,e.$axios.post("/api/Accounts/ResetPassword",{usereId:e.user_id,token:e.token,password:e.password}).then((function(o){e.loading_reset=!1,e.$q.notify({color:"secondary",position:"top-right",icon:"tag_faces",message:"Reset password successfully!"}),setTimeout((function(){e.$router.push("/login")}),300)})).catch((function(o){302==o.response.status?(e.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:"Your account has been updated by your admin, try to relogin or contact your admin!"}),e.loading_reset=!1):303==o.response.status?(e.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:"Your account has expired!"}),e.loading_reset=!1):(e.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:"Username or password wrong!"}),e.loading_reset=!1)}))}},mounted:function(){var e=this.$route.params.user_id;if(e&&!isNaN(e)){var o=this.$route.query.rawToken;this.user_id=e,this.token=o}}},a=r,i=s("2877"),c=s("fe09"),p=Object(i["a"])(a,t,n,!1,null,null,null);o["default"]=p.exports;p.options.components=Object.assign({QCard:c["e"],QInput:c["p"],QIcon:c["n"],QBtn:c["c"]},p.options.components||{})}}]);