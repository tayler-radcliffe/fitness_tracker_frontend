(this.webpackJsonpstranger_things=this.webpackJsonpstranger_things||[]).push([[0],{37:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),c=n(15),s=n.n(c),i=n(6),o=n.n(i),u=n(10);function l(e){localStorage.setItem("token",e)}function j(){return localStorage.getItem("token")}function d(){localStorage.removeItem("token")}var b=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fitnesstrac-kr.herokuapp.com/api/routines",{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),e.prev=1,e.next=4,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/".concat(t,"/routines"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/activities",{headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/me",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,console.log(r),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=(n(85),n(35)),m=n.n(x),f=n(36),v=n.n(f),y=n(50),g=n.n(y),N=n(16),k=n(12),w=n(56),C=n(34),S=n(71),U=n(70),P=n(1),A=(a.PureComponent,n(87),n(133)),F=n(130),T=n(137),R=n(140),z=function(e){var t=e.currentUser,n=e.setCurrentUser,c=e.username,s=e.password,i=e.confirmedPassword,j=e.setUsername,d=e.setPassword,b=e.setConfirmedPassword,p=e.setMyRoutines,O=Object(a.useState)(""),x=Object(r.a)(O,2),m=x[0],f=x[1],v=function(){var e=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===i){e.next=4;break}alert("Passwords must match"),e.next=6;break;case 4:return e.next=6,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?(alert(e.message),j(""),d(""),b("")):(console.log("This is your login token",e.token),f(e.token),l(e.token),j(""),d(""),b(""))})).catch(console.error);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(o.a.mark((function e(r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),v(c,s),n(c),e.next=5,h(t);case 5:a=e.sent,p(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"250px",margin:e.spacing(2),marginTop:"5px"}}}))();return m?Object(P.jsx)(N.a,{to:"/myroutines"}):Object(P.jsx)("div",{className:"register-container",children:Object(P.jsxs)("form",{className:"register-form",onSubmit:y,children:[Object(P.jsx)("h2",{children:"Create an Account"}),Object(P.jsxs)(A.a,{variant:"outlined",className:g.formControl,children:[Object(P.jsx)(R.a,{className:g.textFields,type:"text",value:c,variant:"outlined",InputLabelProps:{shrink:!0},label:"Username",min:"8",max:"20",required:!0,onChange:function(e){return j(e.target.value)}}),Object(P.jsx)(R.a,{className:g.textFields,type:"password",value:s,variant:"outlined",InputLabelProps:{shrink:!0},label:"Password",minLength:"7",required:!0,onChange:function(e){return d(e.target.value)}}),Object(P.jsx)(R.a,{className:g.textFields,type:"password",value:i,variant:"outlined",InputLabelProps:{shrink:!0},label:"Confirm Password",minLength:"7",required:!0,onChange:function(e){return b(e.target.value)}}),Object(P.jsx)("div",{className:"register-button",children:Object(P.jsx)(T.a,{size:"large",type:"submit",color:"primary",variant:"contained",children:"Register"})}),Object(P.jsx)(k.b,{to:"/login",className:"register-link",children:"Already have an account? Sign in"})]})]})})},I=(n(97),function(e){var t=e.username,n=e.setUsername,c=e.password,s=e.setPassword,i=e.setCurrentUser,j=e.setMyRoutines,d=e.currentUser,b=Object(a.useState)(""),p=Object(r.a)(b,2),O=p[0],x=p[1],m=function(){var e=Object(u.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fitnesstrac-kr.herokuapp.com/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:r})}).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.error)alert(e.message),n(""),s("");else{var t=e.token;console.log("This is your login token",t),x(t),l(t),n(""),s("")}})).catch(console.error);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),i(t),m(t,c),e.next=5,h(d);case 5:r=e.sent,j(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"250px",margin:e.spacing(2),marginTop:"5px"}}}))();return O?Object(P.jsx)(N.a,{to:"/myroutines"}):Object(P.jsx)("div",{className:"login-container",children:Object(P.jsxs)("form",{className:"login-form",onSubmit:f,children:[Object(P.jsx)("h2",{children:"Login here"}),Object(P.jsxs)(A.a,{variant:"outlined",className:v.formControl,children:[Object(P.jsx)(R.a,{className:v.textFields,type:"text",value:t,variant:"outlined",InputLabelProps:{shrink:!0},label:"Username",min:"8",max:"20",required:!0,onChange:function(e){return n(e.target.value)}}),Object(P.jsx)(R.a,{className:v.textFields,type:"password",value:c,variant:"outlined",InputLabelProps:{shrink:!0},label:"Password",min:"8",max:"20",required:!0,onChange:function(e){return s(e.target.value)}}),Object(P.jsx)("div",{className:"login-button",children:Object(P.jsx)(T.a,{size:"large",type:"submit",color:"primary",variant:"contained",onClick:function(){return f},children:"Login"})}),Object(P.jsx)(k.b,{to:"/",className:"login-link",children:"Don't have an account? Sign Up"})]})]})})}),D=n(9);function W(e){var t=e.activity;return Object(P.jsxs)("div",{class:"activity-card",children:[Object(P.jsxs)("h4",{children:["Name: ",t.name]}),Object(P.jsxs)("h4",{children:["Description: ",t.description]}),Object(P.jsxs)("h4",{children:["Duration: ",t.duration]}),Object(P.jsxs)("h4",{children:["Count: ",t.count]})]})}var E=n(138),M=n(142),L=n(143),B=function(e){var t=e.setIsOpen,n=e.open,c=e.routine,s=e.setMyRoutines,i=e.currentUser,l=Object(a.useState)([]),d=Object(r.a)(l,2),b=d[0],O=d[1],x=Object(a.useState)(""),m=Object(r.a)(x,2),f=m[0],v=m[1],y=Object(a.useState)(""),g=Object(r.a)(y,2),N=g[0],k=g[1],w=Object(a.useState)(""),C=Object(r.a)(w,2),S=C[0],U=C[1],z=function(e){var t=e.activity,n=e.count,r=e.duration;fetch("https://fitnesstrac-kr.herokuapp.com/api/routines/".concat(c.id,"/activities"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j())},body:JSON.stringify({activityId:t,count:n,duration:r})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?alert("That activity already exists under this routine."):alert("Your activity was added.")})).catch(console.error)};Object(a.useEffect)((function(){Promise.all([p()]).then((function(e){var t=Object(r.a)(e,1)[0];O(t)}))}),[]);var I=Object(F.a)((function(e){return{textFields:{width:"300px",margin:e.spacing(1)},selector:{width:"300px",margin:e.spacing(1)}}}))();return!0===n?Object(P.jsx)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),z({activity:f,count:S,duration:N}),e.next=4,h(i);case 4:r=e.sent,s(r),v(""),U(""),k(""),t(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(P.jsxs)(A.a,{variant:"outlined",children:[Object(P.jsx)(M.a,{id:"demo-simple-select-outlined-label",className:I.selector,children:"Activity"}),Object(P.jsx)(E.a,{className:I.selector,id:"demo-simple-select-outlined",value:f,label:"activity",size:"small",onChange:function(e){v(e.target.value)},children:b.map((function(e,t){return Object(P.jsx)(L.a,{value:e.id,children:e.name},t)}))}),Object(P.jsx)(R.a,{className:I.textFields,label:"Count",defaultValue:"",variant:"outlined",size:"small",value:S,onChange:function(e){return U(e.target.value)}}),Object(P.jsx)(R.a,{className:I.textFields,label:"Duration",defaultValue:"",size:"small",variant:"outlined",value:N,onChange:function(e){return k(e.target.value)}}),Object(P.jsx)(T.a,{className:I.textFields,variant:"contained",color:"primary",type:"submit",onClick:function(){return z},children:"Add Activity"})]})}):Object(P.jsx)("div",{})},q=(n(37),function(e){var t=e.setIsOpen,n=e.open,c=e.setActivities,s=Object(a.useState)(""),i=Object(r.a)(s,2),l=i[0],j=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),h=b[0],O=b[1],x=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"300px",margin:e.spacing(1)}}}))();return!0===n?Object(P.jsx)("div",{className:"activity-form",children:Object(P.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),G({activityName:l,activityDescription:h}),e.next=4,p();case 4:r=e.sent,c(r),j(""),O(""),t(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(P.jsx)(R.a,{className:x.textFields,label:"Name",variant:"outlined",size:"small",required:!0,onChange:function(e){return j(e.target.value)},value:l}),Object(P.jsx)(R.a,{className:x.textFields,label:"Description",size:"small",variant:"outlined",required:!0,onChange:function(e){return O(e.target.value)},value:h}),Object(P.jsx)(T.a,{className:x.textFields,color:"primary",variant:"contained",type:"submit",children:"Create Activity"})]})}):Object(P.jsx)("div",{})}),G=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.activityName,r=t.activityDescription,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/activities",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j())},body:JSON.stringify({name:n,description:r})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?alert(e.error):alert("Your activity has been created")})).catch(console.error);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],u=i[1],l=Object(a.useState)(!1),d=Object(r.a)(l,2),b=d[0],h=d[1];Object(a.useEffect)((function(){Promise.all([p()]).then((function(e){var t=Object(r.a)(e,1)[0];c(t)}))}),[]);var O=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",position:"relative",margin:"10px"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"350px",margin:e.spacing(2)}}}))();return j()?Object(P.jsxs)("div",{className:"activities",children:[Object(P.jsx)("h1",{children:"Activities"}),Object(P.jsx)(T.a,{className:O.container,onClick:function(){h(!1===b)},color:"secondary",variant:"contained",children:"Create A New Activity"}),Object(P.jsx)(q,{setIsOpen:h,open:b,setActivities:c}),n?n.map((function(e,t){return Object(P.jsx)(W,{creator:o,setCreator:u,activity:e},t)})):null]}):Object(P.jsxs)("div",{className:"activities",children:[Object(P.jsx)("h1",{children:"Activities"}),n?n.map((function(e,t){return Object(P.jsx)(W,{creator:o,setCreator:u,activity:e},t)})):null]})},H=n(139),Y=function(e){var t=e.currentUser,n=e.setMyRoutines,c=e.setIsRoutineOpen,s=e.routineOpen,i=e.routine,l=Object(a.useState)(""),d=Object(r.a)(l,2),b=d[0],p=d[1],O=Object(a.useState)(""),x=Object(r.a)(O,2),m=x[0],f=x[1],v=Object(a.useState)(!1),y=Object(r.a)(v,2),g=y[0],N=y[1],k=function(e){var t=e.routineName,n=e.routineGoal,r=e.isPublic;fetch("http://fitnesstrac-kr.herokuapp.com/api/routines/".concat(i.id),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j())},body:JSON.stringify({name:t,goal:n,isPublic:r})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.error)},w=Object(F.a)((function(e){return Object(D.a)({container:{display:"flex",flexWrap:"wrap"},textFields:{width:"250px",margin:e.spacing(1)}},"textFields",{width:"250px",margin:e.spacing(1)})}))();return!0===s?Object(P.jsx)("div",{className:"updateRoutineForm",children:Object(P.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),k({routineName:b,routineGoal:m}),alert("Your routine has been updated!"),e.next=5,h(t);case 5:a=e.sent,n(a),p(""),f(""),c(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(P.jsx)(R.a,{className:w.textFields,onChange:function(e){return p(e.target.value)},value:b,size:"small",variant:"outlined",label:"Name"}),Object(P.jsx)(R.a,{className:w.textFields,onChange:function(e){return f(e.target.value)},label:"Goal",value:m,size:"small",variant:"outlined"}),Object(P.jsx)("label",{className:w.textFields,children:"Allow others to see? "}),Object(P.jsx)(H.a,{value:g,type:"checkbox",color:"primary",onClick:function(){N(!1===g)}}),Object(P.jsx)(T.a,{className:w.textFields,type:"submit",color:"primary",variant:"contained",children:"Update Routine"})]})}):Object(P.jsx)("div",{})};var _=function(e){var t,n=e.routine,c=e.currentUser,s=(e.setCurrentUser,Object(a.useState)(!1)),i=Object(r.a)(s,2),o=i[0],u=i[1],l=Object(a.useState)(!1),d=Object(r.a)(l,2),b=d[0],h=d[1],p=function(){u(!1===o)};return!0===n.isPublic&&c===n.creatorName?Object(P.jsxs)("div",{class:"routine-card",children:[Object(P.jsx)("h2",{className:"routine-title",children:n.name}),Object(P.jsxs)("div",{className:"routine-content",children:[Object(P.jsxs)("h3",{children:[Object(P.jsx)("strong",{children:"Goal: "}),n.goal]}),Object(P.jsxs)("h3",{children:[Object(P.jsx)("strong",{children:"Creator: "})," ",n.creatorName]}),Object(P.jsx)("h3",{children:Object(P.jsx)("strong",{children:"Activities include:"})}),Object(P.jsx)("h4",{children:n.activities.map((function(e,t){return Object(P.jsx)(W,{routine:n,activity:e},t)}))}),Object(P.jsx)(T.a,{className:"routine-button",color:"secondary",onClick:p,variant:"contained",children:o?"Hide":"Add an Activity"}),Object(P.jsx)(B,{setIsOpen:u,routine:n,open:o}),Object(P.jsx)(T.a,{className:"routine-button",color:"secondary",variant:"contained",onClick:function(){h(!1===b)},children:b?"Hide":"Update Routine"}),Object(P.jsx)(Y,{setIsRoutineOpen:h,routineOpen:b,routine:n}),Object(P.jsx)(T.a,(t={className:"routine-button",color:"secondary",onClick:p,variant:"contained"},Object(D.a)(t,"onClick",(function(){fetch("https://fitnesstrac-kr.herokuapp.com/api/routines/".concat(n.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j())}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.error)})),Object(D.a)(t,"children","Delete Entire Routine"),t)),Object(P.jsxs)("h4",{children:["This routine is ",n.isPublic?"public.":"private."]})]})]}):Object(P.jsxs)("div",{class:"routine-card",children:[Object(P.jsx)("h2",{className:"routine-title",children:n.name}),Object(P.jsxs)("div",{className:"routine-content",children:[Object(P.jsxs)("h3",{children:[Object(P.jsx)("strong",{children:"Goal: "}),n.goal]}),Object(P.jsxs)("h3",{children:[Object(P.jsx)("strong",{children:"Creator: "})," ",n.creatorName]}),Object(P.jsx)("h3",{children:Object(P.jsx)("strong",{children:"Activities include:"})}),Object(P.jsx)("h4",{children:n.activities.map((function(e,t){return Object(P.jsx)(W,{routine:n,activity:e},t)}))})]})]})},V=function(e){var t,n=e.setIsOpen,c=e.open,s=e.setMyRoutines,i=e.currentUser,l=Object(a.useState)(""),j=Object(r.a)(l,2),d=j[0],b=j[1],p=Object(a.useState)(""),O=Object(r.a)(p,2),x=O[0],m=O[1],f=Object(a.useState)(!1),v=Object(r.a)(f,2),y=v[0],g=v[1],N=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"300px",margin:e.spacing(1)}}}))(),k=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.routineName,r=t.routineGoal,a=t.isPublic,c=localStorage.getItem("token"),e.next=4,fetch("https://fitnesstrac-kr.herokuapp.com/api/routines",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify({name:n,goal:r,isPublic:a})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?alert("Sorry, that routine already exists. Please try again."):alert("Your routine has been created!")})).catch(console.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return!0===c?Object(P.jsx)("div",{className:"routineform",children:Object(P.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k({routineName:d,routineGoal:x,isPublic:y}),e.next=4,h(i);case 4:r=e.sent,s(r),b(""),m(""),g(!1),n(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(P.jsx)(R.a,{className:N.textFields,id:"outlined-basic",label:"Name",variant:"outlined",size:"small",required:!0,onChange:function(e){return b(e.target.value)},value:d}),Object(P.jsx)(R.a,{className:N.textFields,id:"outlined-basic",label:"Goal",size:"small",variant:"outlined",required:!0,onChange:function(e){return m(e.target.value)},value:x}),Object(P.jsx)("label",(t={className:"label"},Object(D.a)(t,"className",N.textFields),Object(D.a)(t,"children","Allow others to see? "),t)),Object(P.jsx)(H.a,{type:"checkbox",size:"small",value:y,color:"primary",onClick:function(){return g(!0)}}),Object(P.jsx)(T.a,{className:N.textFields,color:"primary",variant:"contained",type:"submit",children:"Create Routine"})]})}):Object(P.jsx)("div",{})},K=function(e){var t=e.currentUser,n=e.setCurrentUser,c=Object(a.useState)([]),s=Object(r.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)(""),l=Object(r.a)(u,2),d=l[0],h=l[1],p=Object(a.useState)(!1),O=Object(r.a)(p,2),x=O[0],m=O[1];Object(a.useEffect)((function(){Promise.all([b()]).then((function(e){var t=Object(r.a)(e,1)[0];o(t)}))}),[]);var f=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",position:"relative",margin:"10px"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"350px",margin:e.spacing(2)}}}))();return j()?Object(P.jsxs)("div",{className:"routine-card",children:[Object(P.jsx)("h1",{children:"Fitness Routines"}),Object(P.jsx)(T.a,{className:f.container,color:"secondary",variant:"contained",type:"submit",onClick:function(){m(!1===x)},children:"Create A New Routine"}),Object(P.jsx)(V,{routines:i,open:x}),i?i.map((function(e,r){return Object(P.jsx)(_,{currentUser:t,setCurrentUser:n,creator:d,setCreator:h,routine:e},r)})):null]}):Object(P.jsxs)("div",{className:"publicRoutines",children:[Object(P.jsx)("h1",{children:"Fitness Routines"}),i?i.map((function(e,r){return Object(P.jsx)(_,{currentUser:t,setCurrentUser:n,creator:d,setCreator:h,routine:e},r)})):null]})},Q=function(e){var t=e.activity,n=e.open,c=e.setIsOpen,s=e.currentUser,i=e.setMyRoutines,l=Object(a.useState)(""),d=Object(r.a)(l,2),b=d[0],p=d[1],O=Object(a.useState)(""),x=Object(r.a)(O,2),m=x[0],f=x[1],v=t.routineActivityId,y=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.count,r=t.duration,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/routine_activities/".concat(v),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j())},body:JSON.stringify({count:n,duration:r})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?alert("Please use integer."):alert("The activity has been updated.")})).catch(console.error);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",position:"relative",margin:"10px"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"350px",margin:e.spacing(2)}}}))();return!0===n?Object(P.jsx)("div",{children:Object(P.jsx)(A.a,{className:g.container,children:Object(P.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y({count:b,duration:m}),e.next=4,h(s);case 4:n=e.sent,i(n),f(""),p(""),c(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(P.jsx)(R.a,{label:"Duration",variant:"outlined",size:"small",onChange:function(e){return f(e.target.value)}}),Object(P.jsx)(R.a,{label:"Count",size:"small",variant:"outlined",onChange:function(e){return p(e.target.value)}}),Object(P.jsx)(T.a,{color:"primary",variant:"contained",type:"submit",children:"Update Activity"})]})})}):Object(P.jsx)("div",{})};function X(e){var t,n,c=e.activity,s=e.currentUser,i=e.setMyRoutines,l=c.routineActivityId,d=Object(a.useState)(!1),b=Object(r.a)(d,2),p=b[0],O=b[1],x=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://fitnesstrac-kr.herokuapp.com/api/routine_activities/".concat(l),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j())}}).then((function(e){return e.json()})).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),alert("Your activity has been deleted."),e.next=4,h(s);case 4:n=e.sent,i(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(console.error);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(j())return Object(P.jsxs)("div",{class:"activity-card",children:[Object(P.jsxs)("h4",{children:["Name: ",c.name]}),Object(P.jsxs)("h4",{children:["Description: ",c.description]}),Object(P.jsxs)("h4",{children:["Duration: ",c.duration]}),Object(P.jsxs)("h4",{children:["Count: ",c.count]}),Object(P.jsx)(T.a,(t={className:"routine-button",onClick:function(){O(!1===p)}},Object(D.a)(t,"className","editbutton"),Object(D.a)(t,"color","secondary"),Object(D.a)(t,"variant","contained"),Object(D.a)(t,"children",p?"Hide":"Update Activity"),t)),Object(P.jsx)(Q,{id:"activityform",currentUser:s,setMyRoutines:i,activity:c,setIsOpen:O,open:p}),Object(P.jsx)(T.a,(n={className:"routine-button",onClick:x},Object(D.a)(n,"className","editbutton"),Object(D.a)(n,"color","secondary"),Object(D.a)(n,"variant","contained"),Object(D.a)(n,"children","Delete Activity"),n))]})}var Z=function(e){var t,n,c=e.currentUser,s=e.routine,i=e.setMyRoutines,l=Object(a.useState)(!1),d=Object(r.a)(l,2),b=d[0],p=d[1],O=Object(a.useState)(!1),x=Object(r.a)(O,2),m=x[0],f=x[1],v=function(){p(!1===b)},y=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://fitnesstrac-kr.herokuapp.com/api/routines/".concat(s.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(j())}}).then((function(e){return e.json()})).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),alert("Your routine has been deleted."),e.next=4,h(c);case 4:n=e.sent,i(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(console.error);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{class:"routine-card",children:[Object(P.jsx)("h2",{className:"routine-title",children:s.name}),Object(P.jsxs)("div",{className:"routine-content",children:[Object(P.jsxs)("h3",{children:[Object(P.jsx)("strong",{children:"Goal: "}),s.goal]}),Object(P.jsxs)("h3",{children:[Object(P.jsx)("strong",{children:"Creator: "})," ",s.creatorName]}),Object(P.jsx)("h3",{children:Object(P.jsx)("strong",{children:"Activities include:"})}),Object(P.jsx)("h4",{children:s.activities.map((function(e,t){return Object(P.jsx)(X,{currentUser:c,setMyRoutines:i,routine:s,activity:e},t)}))}),Object(P.jsx)(T.a,{className:"button",color:"secondary",onClick:v,variant:"contained",children:b?"Hide":"Add an Activity"}),Object(P.jsx)(B,{currentUser:c,setMyRoutines:i,routine:s,setIsOpen:p,open:b}),Object(P.jsx)(T.a,{className:"button",color:"secondary",variant:"contained",onClick:function(){f(!1===m)},children:m?"Hide":"Update Routine"}),Object(P.jsx)(Y,(t={currentUser:c,setMyRoutines:i,setIsRoutineOpen:f},Object(D.a)(t,"setMyRoutines",i),Object(D.a)(t,"routineOpen",m),Object(D.a)(t,"routine",s),t)),Object(P.jsx)(T.a,(n={className:"button",color:"secondary",onClick:v,variant:"contained"},Object(D.a)(n,"onClick",y),Object(D.a)(n,"children","Delete Entire Routine"),n)),Object(P.jsxs)("h4",{children:["This routine is ",s.isPublic?"public.":"private."]})]})]})},$=function(e){var t=e.currentUser,n=Object(a.useState)([]),c=Object(r.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),u=Object(r.a)(o,2),l=u[0],j=u[1],d=Object(a.useState)(!1),b=Object(r.a)(d,2),p=b[0],O=b[1];Object(a.useEffect)((function(){Promise.all([h(t)]).then((function(e){var t=Object(r.a)(e,1)[0];i(t)}))}),[]);var x=Object(F.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",position:"relative",margin:"10px"},formControl:{margin:e.spacing(2),minWidth:120},textFields:{width:"350px",margin:e.spacing(2)}}}))();return Object(P.jsxs)("div",{className:"routine-card",children:[Object(P.jsxs)("h1",{children:["Welcome, ",t,"!"]}),Object(P.jsx)("h2",{children:"Routines you've created:"}),Object(P.jsx)(T.a,{className:x.container,color:"secondary",variant:"contained",type:"submit",onClick:function(){O(!1===p)},children:p?"Hide":"Create A New Routine"}),Object(P.jsx)(V,{setIsOpen:O,currentUser:t,setMyRoutines:i,open:p}),s?s.map((function(e,n){return Object(P.jsx)(Z,{currentUser:t,setMyRoutines:i,creator:l,setCreator:j,routine:e},n)})):Object(P.jsx)("h1",{children:"Use the form above to start creating routines."})]})},ee=function(){Object(N.g)();var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],u=i[1],l=Object(a.useState)(""),j=Object(r.a)(l,2),b=j[0],p=j[1],x=Object(a.useState)(""),f=Object(r.a)(x,2),y=f[0],w=f[1],C=Object(a.useState)([]),S=Object(r.a)(C,2),U=S[0],A=S[1];return Object(a.useEffect)((function(){Promise.all([O()]).then((function(e){var t=Object(r.a)(e,1)[0];w(t.username)}))}),[]),Object(a.useEffect)((function(){Promise.all([h(y)]).then((function(e){var t=Object(r.a)(e,1)[0];A(t)}))}),[]),Object(P.jsx)(k.a,{children:Object(P.jsxs)("div",{className:"app",children:[Object(P.jsx)("div",{className:"headerspacer"}),Object(P.jsx)("main",{children:Object(P.jsxs)(N.d,{children:[Object(P.jsxs)(N.b,{exact:!0,path:"/",children:[Object(P.jsxs)("div",{className:"introbg",children:[Object(P.jsx)("h1",{className:"intro",children:"Welcome to Fitness Tracker"}),Object(P.jsxs)("nav",{className:"intronav",children:[Object(P.jsxs)(k.b,{to:"/publicroutines",children:[Object(P.jsx)(m.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/publicactivities",children:[Object(P.jsx)(v.a,{className:"textmiddle"})," "]})]})]}),Object(P.jsx)(z,{currentUser:y,setCurrentUser:w,username:n,setUsername:c,password:o,setPassword:u,confirmedPassword:b,setConfirmedPassword:p,setMyRoutines:A})]}),Object(P.jsxs)(N.b,{exact:!0,path:"/publicroutines",children:[Object(P.jsxs)("nav",{className:"intronavtwo",children:[Object(P.jsxs)(k.b,{to:"/",children:[Object(P.jsx)(g.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/publicroutines",children:[Object(P.jsx)(m.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/publicactivities",children:[Object(P.jsx)(v.a,{className:"textmiddle"})," "]})]}),Object(P.jsx)(K,{setCurrentUser:w,currentUser:y})]}),Object(P.jsxs)(N.b,{exact:!0,path:"/publicactivities",children:[Object(P.jsxs)("nav",{className:"intronavtwo",children:[Object(P.jsxs)(k.b,{to:"/",children:[Object(P.jsx)(g.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/publicroutines",children:[Object(P.jsx)(m.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/publicactivities",children:[Object(P.jsx)(v.a,{className:"textmiddle"})," "]})]}),Object(P.jsx)(J,{})]}),Object(P.jsxs)(N.b,{exact:!0,path:"/myroutines",children:[Object(P.jsxs)("header",{className:"authorizedheader",children:[Object(P.jsx)("h1",{children:"Fitness Tracker"}),Object(P.jsxs)("nav",{className:"authorizednav",children:[Object(P.jsxs)(k.b,{to:"/myroutines",children:[Object(P.jsx)(g.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/routines",children:[Object(P.jsx)(m.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/activities",children:[Object(P.jsx)(v.a,{className:"textmiddle"})," "]}),Object(P.jsx)(k.b,{to:"/",onClick:function(){d(),w("")},children:"Logout"})]})]}),Object(P.jsx)("div",{class:"spacer"}),Object(P.jsx)($,{myRoutines:U,setMyRoutines:A,setCurrentUser:w,currentUser:y})]}),Object(P.jsxs)(N.b,{exact:!0,path:"/routines",children:[Object(P.jsxs)("header",{className:"authorizedheader",children:[Object(P.jsx)("h1",{children:"Fitness Tracker"}),Object(P.jsxs)("nav",{className:"authorizednav",children:[Object(P.jsxs)(k.b,{to:"/myroutines",children:[Object(P.jsx)(g.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/routines",children:[Object(P.jsx)(m.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/activities",children:[Object(P.jsx)(v.a,{className:"textmiddle"})," "]}),Object(P.jsx)(k.b,{to:"/",onClick:function(){d(),w("")},children:"Logout"})]})]}),Object(P.jsx)("div",{class:"spacer"}),Object(P.jsx)(K,{})]}),Object(P.jsxs)(N.b,{exact:!0,path:"/activities",children:[Object(P.jsxs)("header",{className:"authorizedheader",children:[Object(P.jsx)("h1",{children:"Fitness Tracker"}),Object(P.jsxs)("nav",{className:"authorizednav",children:[Object(P.jsxs)(k.b,{to:"/myroutines",children:[Object(P.jsx)(g.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/routines",children:[Object(P.jsx)(m.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/activities",children:[Object(P.jsx)(v.a,{className:"textmiddle"})," "]}),Object(P.jsx)(k.b,{to:"/",onClick:function(){d(),w("")},children:"Logout"})]})]}),Object(P.jsx)("div",{class:"spacer"}),Object(P.jsx)(J,{})]}),Object(P.jsx)(N.b,{exact:!0,path:"/login",children:Object(P.jsxs)("div",{className:"introbg",children:[Object(P.jsx)("h1",{className:"intro",children:"Welcome to Fitness Tracker"}),Object(P.jsxs)("nav",{className:"intronav",children:[Object(P.jsxs)(k.b,{to:"/publicroutines",children:[Object(P.jsx)(m.a,{className:"textmiddle"})," "]}),Object(P.jsxs)(k.b,{to:"/publicactivities",children:[Object(P.jsx)(v.a,{className:"textmiddle"})," "]})]}),Object(P.jsx)(I,{setMyRoutines:A,username:n,setUsername:c,password:o,setPassword:u,confirmedPassword:b,setConfirmedPassword:p,setCurrentUser:w,currentUser:y})]})})]})})]})})};s.a.render(Object(P.jsx)(k.a,{children:Object(P.jsx)(ee,{})}),document.getElementById("app"))}},[[99,1,2]]]);
//# sourceMappingURL=main.605ae66d.chunk.js.map