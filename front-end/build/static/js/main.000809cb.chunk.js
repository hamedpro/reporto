(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t),r.d(t,"new_report",(function(){return i})),r.d(t,"get_reports",(function(){return o})),r.d(t,"toggle_report_status",(function(){return d})),r.d(t,"reset_database",(function(){return h}));var c=r(11),n=r.n(c),s=r(14);function i(e,t,r){return a.apply(this,arguments)}function a(){return(a=Object(s.a)(n.a.mark((function e(t,r,c){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:7777/new_report?driver_code=".concat(t,"&driver_name=").concat(r,"&report_text=").concat(c));case 2:return s=e.sent,e.next=5,s.text();case 5:return e.t0=e.sent,e.abrupt("return","ok"===e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:7777/reports");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:7777/toggle_report_status?report_code="+t);case 2:return r=e.sent,e.next=5,r.text();case 5:return e.t0=e.sent,e.abrupt("return","ok"===e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:7777/reset_database");case 2:return t=e.sent,e.next=5,t.text();case 5:return e.t0=e.sent,e.abrupt("return","ok"===e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},21:function(e,t,r){},29:function(e,t,r){},31:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(22),s=r.n(n),i=(r(15),r(21),r(29),r(0));var a=function(e){return Object(i.jsx)("div",{className:"appFrame",children:e.children})},o=r(7),l=r(8),d=r(10),j=r(9),h=(r(31),r(16)),p=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"discard",value:function(){document.getElementById("driver_code").value="",document.getElementById("driver_name").value="",document.getElementById("report_text").value=""}},{key:"add_new_report",value:function(){var e=Number(document.getElementById("driver_code").value),t=document.getElementById("driver_name").value,r=document.getElementById("report_text").value;h.new_report(e,t,r).then((function(e){e&&console.log("done")}))}},{key:"render",value:function(){return Object(i.jsx)("div",{id:"new-report",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("div",{className:"row mt-2 dir-rtl",children:Object(i.jsx)("h2",{style:{color:"aqua"},children:"\u062b\u0628\u062a \u06af\u0632\u0627\u0631\u0634 \u062c\u062f\u06cc\u062f"})}),Object(i.jsx)("hr",{className:"bg-light mb-4"}),Object(i.jsxs)("div",{className:"row mb-1 dir-rtl",children:[Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)("h5",{style:{color:"white"},children:"\u06a9\u062f \u0631\u0627\u0646\u0646\u062f\u0647 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 :"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("input",{type:"number",className:"form-control ",min:"0",id:"driver_code"})})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row mb-2 dir-rtl",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)("h5",{style:{color:"white"},children:"\u0646\u0627\u0645 \u06a9\u0627\u0645\u0644 \u0631\u0627\u0646\u0646\u062f\u0647 :"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("input",{className:"form-control ",type:"text",id:"driver_name"})})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"row mb-3 dir-rtl",children:Object(i.jsx)("h5",{style:{color:"white"},children:"\u0645\u062a\u0646 \u06af\u0632\u0627\u0631\u0634 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f :"})}),Object(i.jsx)("div",{className:"row d-flex justify-content-center",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("textarea",{className:"form-control   dir-rtl",id:"report_text"})})}),Object(i.jsx)("div",{className:"row mt-3 mb-3",style:{padding:"0px 12px 0px 12px"},children:Object(i.jsx)("div",{className:"col g-0",children:Object(i.jsx)("button",{className:"btn btn-primary w-100",id:"add_new_report",onClick:this.add_new_report,children:"\u062b\u0628\u062a \u0646\u0647\u0627\u06cc\u06cc \u06af\u0632\u0627\u0631\u0634"})})})]})})}}]),r}(c.Component);r(33),r(34);var u=function(e){return Object(i.jsxs)("div",{className:"row report-option",style:{direction:"rtl"},onClick:function(){return window.location.replace("#/result/"+e.id)},children:[Object(i.jsx)("div",{className:"col-3 d-flex align-items-center justify-content-center",children:Object(i.jsxs)("h6",{className:"bg-warning rounded p-1",children:["#",e.id]})}),Object(i.jsxs)("div",{className:"col-7 d-flex flex-column",style:{overflow:"hidden"},children:[Object(i.jsx)("div",{children:Object(i.jsx)("h4",{className:"text-info",children:e.title})}),Object(i.jsx)("h6",{className:"text-secondary",children:e.info})]}),Object(i.jsx)("div",{className:"col-2 d-flex align-items-center",children:Object(i.jsx)("svg",{width:"1em",id:"arrow-icon",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-right-short",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"})})})]})},b=r(16),x=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var c;return Object(o.a)(this,r),(c=t.call(this,e)).next_category=function(){"all_reports"===c.state.reports_category&&b.get_reports().then((function(e){e=e.filter((function(e){return e.is_open})),c.setState({reports_to_show:e.map((function(e){return{id:e.id,title:e.driver_name,info:"some info",is_open:e.is_open}}))}),c.setState({reports_category:"open_reports"})})),"open_reports"===c.state.reports_category&&b.get_reports().then((function(e){e=e.filter((function(e){return!e.is_open})),c.setState({reports_to_show:e.map((function(e){return{id:e.id,title:e.driver_name,info:"some info",is_open:e.is_open}}))}),c.setState({reports_category:"closed_reports"})})),"closed_reports"===c.state.reports_category&&(b.get_reports().then((function(e){c.setState({reports_to_show:e.map((function(e){return{id:e.id,title:e.driver_name,info:"some info",is_open:e.is_open}}))})})),c.setState({reports_category:"all_reports"}))},c.reports_category_in_persian=function(){return"all_reports"===c.state.reports_category?"\u0647\u0645\u0647 \u06af\u0632\u0627\u0631\u0634 \u0647\u0627":"open_reports"===c.state.reports_category?"\u0631\u0633\u06cc\u062f\u06af\u06cc \u0646\u0634\u062f\u0647 \u0647\u0627":"closed_reports"===c.state.reports_category?"\u0631\u0633\u06cc\u062f\u06af\u06cc \u0634\u062f\u0647 \u0647\u0627":void 0},c.state={reports_to_show:[],reports_category:"all_reports"},b.get_reports().then((function(e){c.setState({reports_to_show:e.map((function(e){return{id:e.id,title:e.driver_name,info:"some info",is_open:e.is_open}}))})})),c}return Object(l.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsxs)("div",{className:"row mt-2 dir-rtl",children:[Object(i.jsx)("div",{className:"col-9",children:Object(i.jsx)("h2",{className:"r-title",children:this.reports_category_in_persian()})}),Object(i.jsx)("div",{className:"align-items-center col-3 d-flex justify-content-center",id:"sort-icon-container",children:Object(i.jsx)("svg",{onClick:this.next_category,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"})})})]}),Object(i.jsx)("hr",{className:"bg-light mt-2"}),Object(i.jsx)("div",{id:"reports",children:this.state.reports_to_show.map((function(e,t){return Object(i.jsx)(u,{id:e.id,info:e.info,title:e.title},t)}))})]})}}]),r}(c.Component),m=r(16),v=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var c;Object(o.a)(this,r),(c=t.call(this,e)).toggle_report_status_button_onclick=function(){m.toggle_report_status(Number(c.props.report_code)).then((function(e){e&&c.setState({is_open:!c.state.is_open})}))};var n="loading ...";return c.state={driver_code:n,driver_name:n,is_open:!0,report_text:n,report_code:Number(c.props.report_code)},c}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;m.get_reports().then((function(t){t.forEach((function(t){t.id===Number(e.props.report_code)&&e.setState({report_code:t.id,driver_code:t.driver_code,driver_name:t.driver_name,is_open:t.is_open,report_text:t.report_text})}))}))}},{key:"go_back_button_handler",value:function(){window.location.assign("#/reports")}},{key:"render",value:function(){return Object(i.jsxs)("div",{id:"result",className:"container-fluid",children:[Object(i.jsx)("div",{className:"row dir-rtl",children:Object(i.jsx)("h1",{className:"text-light mt-2",children:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062b\u0628\u062a \u0634\u062f !"})}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row dir-rtl",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)("h5",{className:"text-info",children:"\u06a9\u062f \u06af\u0632\u0627\u0631\u0634 :"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h5",{className:"text-warning",id:"report_code",children:this.state.report_code})})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row dir-rtl",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)("h5",{className:"text-info",children:"\u0646\u0627\u0645 \u0631\u0627\u0646\u0646\u062f\u0647 :"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h5",{className:"text-warning",id:"driver_name",children:this.state.driver_name})})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row dir-rtl",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)("h5",{className:"text-info",children:"\u06a9\u062f \u0631\u0627\u0646\u0646\u062f\u0647 :"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h5",{className:"text-warning",id:"driver_code",children:this.state.driver_code})})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row dir-rtl",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)("h5",{className:"text-info",children:"\u0645\u062a\u0646 \u06af\u0632\u0627\u0631\u0634 :"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h5",{className:"text-warning",id:"report_text",children:this.state.report_text})})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"row dir-rtl",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)("h5",{className:"text-info",children:"\u0648\u0636\u0639\u06cc\u062a \u06af\u0632\u0627\u0631\u0634 :"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("h5",{className:"text-warning",id:"status_text",children:this.state.is_open?"\u0628\u0647 \u06af\u0632\u0627\u0631\u0634 \u0631\u0633\u06cc\u062f\u06af\u06cc \u0646\u0634\u062f\u0647 \u0627\u0633\u062a":"\u0642\u0628\u0644\u0627 \u0628\u0647 \u06af\u0632\u0627\u0631\u0634 \u0631\u0633\u06cc\u062f\u06af\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("button",{className:"btn btn-dark btn-sm",id:"toggle_button",onClick:this.toggle_report_status_button_onclick,children:"\u062a\u063a\u06cc\u06cc\u0631 \u0648\u0636\u0639\u06cc\u062a"})})]}),Object(i.jsx)("div",{className:"row ml-1 mb-3 mt-4",children:Object(i.jsx)("div",{className:"col  ml-1",children:Object(i.jsx)("button",{className:"btn btn-info w-100",onClick:this.go_back_button_handler,children:"\u0628\u0627\u0632\u06af\u0634\u062a"})})})]})}}]),r}(c.Component),O=(r(35),r(16)),_=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"reset_factory",value:function(){O.reset_database().then((function(e){e&&window.location.assign("#/new_report")}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{id:"settings",children:[Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsx)("div",{className:"row mt-2 dir-rtl",children:Object(i.jsx)("h2",{className:"text-light",children:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"})})}),Object(i.jsx)("hr",{className:"bg-light mx-auto",style:{width:"90%"}}),Object(i.jsx)("div",{className:"row mb-2 mx-1 dir-rtl",children:Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)("button",{className:"btn btn-info",id:"reset_factory",onClick:this.reset_factory,children:"\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06cc \u06a9\u0627\u0631\u062e\u0627\u0646\u0647"})})})]})}}]),r}(c.Component),f=r(23),w=r(2);r(36);var g=function(e){return Object(i.jsx)("div",{className:"content-container",children:e.children})},N=(r(37),function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).optionClickHandler1=function(){window.location.assign("#/new_report"),e.setState({activeOption:"new_report"})},e.optionClickHandler2=function(){window.location.assign("#/reports"),e.setState({activeOption:"reports"})},e.optionClickHandler3=function(){window.location.assign("#/settings"),e.setState({activeOption:"settings"})},e.state={activeOption:"new_report"},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"SideBar",children:[Object(i.jsx)("div",{id:"main-window-buttons"}),Object(i.jsx)("div",{className:"subject-option",children:"\u0628\u0647 \u0631\u06cc\u067e\u0648\u0631\u062a\u0648 \u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f"}),Object(i.jsxs)("div",{active:"new_report"===this.state.activeOption?"active":void 0,className:"option first-option",id:"go_to_new_reports_page",onClick:this.optionClickHandler1,children:[Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-clipboard-plus",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{fillRule:"evenodd",d:"M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"}),Object(i.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),Object(i.jsx)("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})]}),Object(i.jsx)("h1",{className:"title",children:"\u06af\u0632\u0627\u0631\u0634 \u062c\u062f\u06cc\u062f"})]}),Object(i.jsxs)("div",{active:"reports"===this.state.activeOption?"active":void 0,className:"option",id:"go_to_reports_page",onClick:this.optionClickHandler2,children:[Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",className:"bi bi-clipboard-check",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{fillRule:"evenodd",d:"M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"}),Object(i.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),Object(i.jsx)("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})]}),Object(i.jsx)("h1",{className:"title",children:"\u06af\u0632\u0627\u0631\u0634 \u0647\u0627"})]}),Object(i.jsxs)("div",{active:"settings"===this.state.activeOption?"active":void 0,className:"option",id:"go_to_settings_page",onClick:this.optionClickHandler3,children:[Object(i.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-gear",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("path",{fillRule:"evenodd",d:"M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"}),Object(i.jsx)("path",{fillRule:"evenodd",d:"M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"})]}),Object(i.jsx)("h1",{className:"title",children:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"})]})]})}}]),r}(c.Component));var y=function(){return Object(i.jsxs)(a,{children:[Object(i.jsx)(g,{children:Object(i.jsx)(f.a,{children:Object(i.jsxs)(w.c,{children:[Object(i.jsx)(w.a,{exact:!0,path:"/",render:function(e){return Object(i.jsx)(p,{})}}),Object(i.jsx)(w.a,{path:"/reports",render:function(e){return Object(i.jsx)(x,{})}}),Object(i.jsx)(w.a,{path:"/settings",render:function(e){return Object(i.jsx)(_,{})}}),Object(i.jsx)(w.a,{path:"/result/:report_code",render:function(e){return Object(i.jsx)(v,{report_code:e.match.params.report_code})}}),Object(i.jsx)(w.a,{path:"/new_report",render:function(e){return Object(i.jsx)(p,{})}})]})})}),Object(i.jsx)(N,{})]})};s.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.000809cb.chunk.js.map