(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b17d881c"],{1341:function(t,i,e){"use strict";var a=e("7121"),n=e.n(a);n.a},"5e45":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"booking-status-wrapper",staticStyle:{"max-width":"1100px",margin:"50px auto",padding:"0px"}},[e("div",{staticClass:"content-wrapper"},[e("q-table",{staticClass:"my-sticky-header-column-table",attrs:{title:t.title_notification,pagination:t.pagination,data:t.list_notification_show,columns:t.columns},on:{"update:pagination":function(i){t.pagination=i},request:t.onRequest},scopedSlots:t._u([{key:"body",fn:function(i){return[e("q-tr",{class:{diff:i.row.stt%2==0},attrs:{props:i}},[e("q-td",{key:"stt",staticStyle:{width:"50px"},attrs:{props:i}},[e("div",{on:{click:function(e){return t.viewTour(i)}}},[t._v(t._s(i.row.stt))])]),e("q-td",{key:"content",attrs:{props:i}},[e("div",{on:{click:function(e){return t.viewTour(i)}}},[t._v(t._s(i.row.content))])]),e("q-td",{key:"created",attrs:{props:i}},[e("div",{on:{click:function(e){return t.viewTour(i)}}},[t._v(t._s(t._f("formatDate")(i.row.created)))])])],1)]}}])})],1),e("q-dialog",{attrs:{"transition-show":"scale","transition-hide":"scale"},model:{value:t.open_modal_view_detail_tour,callback:function(i){t.open_modal_view_detail_tour=i},expression:"open_modal_view_detail_tour"}},[e("q-card",{staticClass:"bg-primary text-white",staticStyle:{width:"1100px","max-width":"1100px"}},[e("q-card-actions",{staticClass:"section-header-detail-booking"},[t._v("View detail tour")]),e("q-card-actions",{staticClass:"bg-white text-black",staticStyle:{padding:"0px!important"}},[e("iframe",{attrs:{src:t.tour_detail.src,id:"frame_view_detail_tour"}})]),e("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[e("div",[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mr-md",attrs:{label:"Cancel",color:"white",size:"sm","text-color":"black",icon:"cancel"}})],1)])],1)],1)],1)},n=[],o=(e("2f62"),{name:"notification-manage",filters:{formatDate:function(t){var i=new Date(t);return i.toLocaleString()}},data:function(){return{title_notification:"List notification",pagination:{sortBy:"stt",descending:!1,page:1,rowsPerPage:10,rowsNumber:20},columns:[{name:"stt",label:"No",align:"left",field:function(t){return t.stt}},{name:"content",align:"left",label:"Content",field:"content"},{name:"created",align:"left",label:"Time Created",field:"created"}],list_notification_show:[],open_modal_view_detail_tour:!1,tour_detail:{src:"",class:"tour_detail_booking"}}},watch:{"pagination.rowsPerPage":function(t){this.getListNotificationOfUser()}},methods:{onRequest:function(t){this.$set(this,"pagination",t.pagination),this.getListNotificationOfUser()},viewTour:function(t){var i=this,e=t.row.content.slice(t.row.content.indexOf("tourId")+8),a=this.$router.resolve({name:"view-detail-tour",params:{tour_id:e}});i.tour_detail.src="https://admin-travel.netlify.app/"+a.href,i.open_modal_view_detail_tour=!0},getListNotificationOfUser:function(){var t=this,i=localStorage.getItem("user_token_fisheye_client");this.$axios.get("/api/Accounts/GetMyNotifications?PageSize="+t.pagination.rowsPerPage+"&PageNumber="+t.pagination.page,{headers:{Authorization:"Bearer "+i,"Content-Type":"application/json"}}).then((function(i){i.data.notificationData.forEach((function(i,e){i.stt=t.pagination.rowsPerPage*(t.pagination.page-1)+e+1})),t.list_notification_show=i.data.notificationData})).catch((function(t){}))}},mounted:function(){this.getListNotificationOfUser(),this.onRequest({pagination:this.pagination,filter:void 0})}}),s=o,r=(e("1341"),e("2877")),c=e("fe09"),l=Object(r["a"])(s,a,n,!1,null,null,null);i["default"]=l.exports;l.options.components=Object.assign({QTable:c["I"],QTr:c["Q"],QTd:c["K"],QDialog:c["k"],QCard:c["e"],QCardActions:c["f"],QBtn:c["c"]},l.options.components||{}),l.options.directives=Object.assign({ClosePopup:c["a"]},l.options.directives||{})},7121:function(t,i,e){}}]);