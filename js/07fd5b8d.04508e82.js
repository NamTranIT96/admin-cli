(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["07fd5b8d"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("integer",/^-?[0-9]*$/);t.default=i},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=i},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,u=(0,n.regex)("email",i);t.default=u},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=i},"6ea8":function(e,t,r){"use strict";var n=r("a056"),i=r.n(n);i.a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,u=(0,n.regex)("url",i);t.default=u},"77c1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"page-create-product-wrapper"},[r("div",{staticClass:"q-pa-lg content-of-each-step"},[r("div",{staticClass:"step-1"},[r("q-card",{staticClass:"card-step-1 w-100-per-mobile"},[r("q-card-section",[r("div",{staticClass:"step-1-content"},[r("div",{staticClass:"text-main q-pt-lg q-pl-lg q-pr-lg"},[e._v("Why should travelers book this tour?")]),r("div",{staticClass:"q-pa-lg sub-text-1"},[e._v("Briefly describe what makes it unique")]),r("div",{staticClass:"q-pl-lg q-pr-lg q-pb-lg"},[r("el-input",{class:{"input-error":e.$v.describe_unique.$error},attrs:{type:"textarea",rows:5,placeholder:"Input describe unique"},model:{value:e.$v.describe_unique.$model,callback:function(t){e.$set(e.$v.describe_unique,"$model",t)},expression:"$v.describe_unique.$model"}}),e.$v.describe_unique.$error?r("div",{staticClass:"error-content"},[e._v("Describe unique is required")]):e._e()],1),r("div",{staticClass:"q-pl-lg q-pr-lg q-pt-lg q-pb-sm sub-text-1"},[e._v("\n              Is this a private tour?\n              "),r("q-icon",{attrs:{name:"far fa-question-circle"}})],1),r("div",{staticClass:"q-pl-lg q-pr-lg q-pb-lg"},[r("q-option-group",{attrs:{options:e.options_radio,type:"radio"},model:{value:e.is_private_tour,callback:function(t){e.is_private_tour=t},expression:"is_private_tour"}})],1),r("div",{staticClass:"q-pl-lg q-pr-lg q-pt-lg q-pb-sm sub-text-1"},[e._v("\n              Enter the maximum number of travelers who can participate\n              "),r("q-icon",{attrs:{name:"far fa-question-circle"}})],1),r("div",{staticClass:"q-pl-lg q-pr-lg q-pb-lg q-pt-sm"},[r("el-input-number",{class:{"input-error":e.$v.num_max_traveler.$error},attrs:{"controls-position":"right",min:1,max:100},model:{value:e.$v.num_max_traveler.$model,callback:function(t){e.$set(e.$v.num_max_traveler,"$model",t)},expression:"$v.num_max_traveler.$model"}}),e.$v.num_max_traveler.$error?r("div",{staticClass:"error-content"},[e._v("Maximum number of travelers is required")]):e._e()],1),r("div",{staticClass:"q-pa-lg"},[r("q-btn",{staticClass:"q-mt-lg w-100-per-mobile",attrs:{color:"primary",label:"Save & continue",size:"lg","no-caps":""},on:{click:function(t){return e.gotoStep5()}}})],1)])])],1)],1)])])},i=[],u=(r("c5f6"),r("b5ae")),o={name:"create-product-page",filters:{},props:{props_id_product:{type:Number,default:-1}},watch:{props_id_product:function(e){-1!=this.props_id_product&&this.props_id_product&&(this.product_id=this.props_id_product,this.$emit("getProductId",this.props_id_product),this.getInfoProductEdit())}},data:function(){return{num_max_traveler:1,describe_unique:"",is_private_tour:!0,options_radio:[{label:"Yes",value:!0,color:"primary"},{label:"No",value:!1,color:"primary"}],current_product_edited:{},product_id:-1}},validations:{describe_unique:{required:u["required"]},num_max_traveler:{required:u["required"]}},methods:{checkValidate:function(){return this.$v.describe_unique.$touch(),this.$v.num_max_traveler.$touch(),!this.$v.describe_unique.$error&&!this.$v.num_max_traveler.$error},gotoStep5:function(){if(this.checkValidate()){var e=this,t=localStorage.getItem("user_token_fisheye_client"),r=this.product_id,n={productId:parseInt(r),uniqueDescription:e.describe_unique,isPrivateTour:e.is_private_tour,maximumTravelers:e.num_max_traveler};6==e.current_product_edited.stepCreation&&(n.stepCreation=7),this.$axios.put("/api/Products/UpdateBasicInfo",JSON.stringify(n),{headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then((function(t){e.$q.notify({color:"secondary",position:"top-right",icon:"tag_faces",message:"Update Successfully"}),-1!=e.props_id_product&&e.props_id_product?e.$emit("done"):e.$router.push("/products/create/content/kbyg/"+r)})).catch((function(t){t.response.data?e.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:t.response.data}):e.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:"Have Error"})}))}},initDataEdit:function(){this.num_max_traveler=this.current_product_edited.maximumTravelers,this.describe_unique=this.current_product_edited.uniqueDescription,this.is_private_tour=this.current_product_edited.isPrivateTour},getInfoProductEdit:function(){var e=this,t=this.product_id;if(t){var r=localStorage.getItem("user_token_fisheye_client");this.$axios.get("/api/Products/GetProductDetail/"+t,{headers:{Authorization:"Bearer "+r,"Content-Type":"application/json"}}).then((function(t){e.current_product_edited=t.data,e.initDataEdit()})).catch((function(t){t.response.data?e.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:t.response.data}):e.$q.notify({color:"negative",icon:"report_problem",position:"top-right",message:"Have Error"})}))}}},components:{},mounted:function(){var e=this.$route.params.product_id;e&&(this.product_id=e,this.$emit("getProductId",e),this.getInfoProductEdit()),-1!=this.props_id_product&&this.props_id_product&&(this.product_id=this.props_id_product,this.$emit("getProductId",this.props_id_product),this.getInfoProductEdit())}},a=o,c=(r("6ea8"),r("2877")),s=r("fe09"),d=Object(c["a"])(a,n,i,!1,null,"5f6156ad",null);t["default"]=d.exports;d.options.components=Object.assign({QPage:s["y"],QCard:s["e"],QCardSection:s["g"],QIcon:s["n"],QOptionGroup:s["x"],QBtn:s["c"]},d.options.components||{})},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var a=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.len=a;var c=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=c;var s=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=s},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"pwa",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined",SERVICE_WORKER_FILE:"service-worker.js"}).BUILD?r("cb69").withParams:r("0234").withParams,i=n;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(u)}))};t.default=i;var u=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},a056:function(e,t,r){},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return q.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=w(r("6235")),i=w(r("3a54")),u=w(r("45b8")),o=w(r("ec11")),a=w(r("5d75")),c=w(r("c99d")),s=w(r("91d3")),d=w(r("2a12")),f=w(r("5db3")),l=w(r("d4f4")),p=w(r("aa82")),v=w(r("e652")),_=w(r("b6cb")),m=w(r("772d")),b=w(r("d294")),y=w(r("3360")),h=w(r("6417")),g=w(r("eb66")),P=w(r("46bc")),q=w(r("1331")),O=w(r("c301")),j=$(r("78ef"));function $(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=i;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},u=n.vuelidate?n.vuelidate.withParams:i;t.withParams=u}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=(0,n.withParams)({type:"required"},n.req);t.default=i},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),i=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=i}}]);