(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),i=n.n(s),r=(n(48),n(49),n(11)),l=n(4),o=n.p+"static/media/patit.2c1dbbaa.png",m=n(0);function u(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"landing",children:"WELCOME TO DOG BREED APP"}),Object(m.jsx)(r.b,{to:"/home",children:Object(m.jsx)("button",{className:"button",children:"Enter"})}),Object(m.jsx)("img",{className:"animation",src:o,alt:""})]})}var j=n(13),h=n(7),d=n(12),b=n(16),p=n(17),g=n.n(p);function O(){return function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://calm-castle-65099.herokuapp.com/dogs");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_DOGS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(){return function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://calm-castle-65099.herokuapp.com/temperament");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_TEMPERAMENTS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var f=n.p+"static/media/ouch.aa9695ca.png";function v(e){var t=e.name,n=e.img,a=e.temperaments,c=e.wMin,s=e.wMax,i=e.created;return Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("img",{className:"img",src:n||f,alt:t}),Object(m.jsx)("h3",{className:"info",children:t.toUpperCase()}),Object(m.jsxs)("p",{className:"info",children:["Temperament: ",Object(m.jsx)("br",{}),i?a.map((function(e){return Object(m.jsxs)("span",{children:[" - ",e.name]},e.name)})):a.map((function(e){return Object(m.jsxs)("span",{children:[" - ",e]},e)}))]}),Object(m.jsxs)("p",{className:"info",children:[c,"Kg - ",s,"Kg"]})]})}function M(e){for(var t=e.dogsPerPage,n=e.allDogs,a=e.pages,c=e.current,s=[],i=1;i<=Math.ceil(n/t);i++)s.push(i);return Object(m.jsxs)("nav",{children:[Object(m.jsx)("div",{children:"Pages"}),Object(m.jsx)("div",{className:"pages",children:s&&s.map((function(e){return Object(m.jsx)("div",{className:e===c?"number selected":"number",children:Object(m.jsxs)("a",{onClick:function(){return a(e)},children:["-",e,"-"]})},e)}))})]})}function N(e){var t=e.page1,n=Object(h.b)(),c=Object(a.useState)(""),s=Object(j.a)(c,2),i=s[0],r=s[1];function l(e){e.preventDefault(),i.length?n(function(e){return function(){var t=Object(b.a)(Object(d.a)().mark((function t(n){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("https://calm-castle-65099.herokuapp.com/dogs?name="+e);case 3:return a=t.sent,t.abrupt("return",n({type:"GET_NAME_DOGS",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(i)):alert("Please enter a name"),r(""),t(1)}return Object(m.jsxs)("div",{className:"filter-item sel",children:[Object(m.jsx)("input",{className:"input",type:"text",value:i,placeholder:"Search",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value),console.log(i)}(e)}}),Object(m.jsx)("button",{className:"button",type:"submit",onClick:function(e){return l(e)},children:"Search"})]})}var w=n.p+"static/media/all4.66587314.png",y=n.p+"static/media/all3.ea35ddbd.png";function E(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.dogs})),n=Object(a.useState)(""),c=Object(j.a)(n,2),s=(c[0],c[1]),i=Object(a.useState)(1),l=Object(j.a)(i,2),o=l[0],u=l[1],d=Object(a.useState)(8),b=Object(j.a)(d,1)[0],p=o*b,g=p-b,f=t.slice(g,p),E=Object(h.c)((function(e){return e.temperaments}));return Object(a.useEffect)((function(){e(O())}),[e]),Object(a.useEffect)((function(){e(x())}),[e]),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{className:"imgbk",src:w,alt:"puppies"}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("h1",{children:"Dog breed database"}),Object(m.jsx)("p",{children:"get information about dog breeds"})]}),Object(m.jsx)("img",{className:"imgbk",src:y,alt:"puppies"})]}),Object(m.jsxs)("div",{className:"back-head",children:[Object(m.jsxs)("div",{className:"filters",children:[Object(m.jsx)("button",{className:"button",onClick:function(t){!function(t){t.preventDefault(),e(O())}(t)},children:"Reset"}),Object(m.jsx)(r.b,{className:"link_to",to:"/create",children:Object(m.jsx)("button",{className:"button",children:"new breed"})}),Object(m.jsxs)("div",{className:"filter-item sel",children:[Object(m.jsx)("div",{children:"Sort by breed name"}),Object(m.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_NAME",payload:t.target.value}),s("Ordenado ".concat(t.target.value)),u(1)}(t)},children:[Object(m.jsx)("option",{value:"x",children:" Select"}),Object(m.jsx)("option",{value:"asc",children:" A-Z"}),Object(m.jsx)("option",{value:"desc",children:"Z-A"})]})]}),Object(m.jsxs)("div",{className:"filter-item sel",children:[Object(m.jsx)("div",{children:"Sort by weight "}),Object(m.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_WEIGHT",payload:t.target.value}),u(1),s("Ordenado ".concat(t.target.value))}(t)},children:[Object(m.jsx)("option",{value:"x",children:" Select"}),Object(m.jsx)("option",{value:"asc",children:" Min-Max"}),Object(m.jsx)("option",{value:"desc",children:"Max-Min"})]})]}),Object(m.jsxs)("div",{className:"filter-item sel",children:[Object(m.jsx)("div",{children:"Filter by origin"}),Object(m.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),u(1),e({type:"FILTER_BY_ORIGIN",payload:t.target.value})}(t)},children:[Object(m.jsx)("option",{value:"all",children:"All breeds"}),Object(m.jsx)("option",{value:"api",children:"Registered breeds"}),Object(m.jsx)("option",{value:"created",children:"Created breeds"})]})]}),Object(m.jsxs)("div",{className:"filter-item sel",children:[Object(m.jsx)("div",{children:"Filter by temperament"}),Object(m.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),u(1),e({type:"FILTER_BY_TEMPERAMENT",payload:t.target.value})}(t)},children:[Object(m.jsx)("option",{value:"all",children:"All temperaments"},0),null===E||void 0===E?void 0:E.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})]}),Object(m.jsxs)("div",{className:"filter-item sbp",children:[Object(m.jsx)(N,{page1:u}),Object(m.jsx)(M,{dogsPerPage:b,allDogs:t.length,pages:function(e){return u(e)},current:o})]})]}),Object(m.jsxs)("div",{className:"cards",children:[0===t.length?Object(m.jsx)("div",{className:"landing",children:"Loading..."}):"",null===f||void 0===f?void 0:f.map((function(e){return Object(m.jsx)("div",{className:"card",children:Object(m.jsx)(r.b,{to:"/home/"+e.id,children:Object(m.jsx)(v,{name:e.name,img:e.image,temperaments:e.temperaments,wMin:e.weightMin,wMax:e.weightMax,created:e.createdInDb})})},e.id)}))]})]})}var D=n(43),I=n(20),_=n(2),C=n.p+"static/media/lookingatyou.515e3679.png",T=n.p+"static/media/waitting.7742d17f.png";function k(e){var t={};return e.name?null==e.name.match("^[ a-zA-Z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda]+$")?t.name="only can use letters and spaces for name":null!==e.name.match(/(\s{2,})/g)?t.name="you can't use two spaces in a row in the breed name":e.name.length>25||e.name.length<3?t.name="the breed name must be between 3 and 25 characters":null==e.name.match("^[a-zA-Z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda]")&&(t.name="the breed name must be begin with a letter"):t.name="name is required",e.heightMin?e.heightMin<10?t.heightMin="min height, I've never seen a Dog that shorty":/^[0-9]+$/.test(e.heightMin)||(t.heightMin="minimum height must be a number"):t.heightMin="minimum height is required",e.heightMax?e.heightMax>200?t.heightMax="max height, I've never seen a Dog that tall":/^[0-9]+$/.test(e.heightMax)?parseInt(e.heightMax)<parseInt(e.heightMin)&&(t.heightMax="max height must be greater than min height"):t.heightMax="maximum height must be a number":t.heightMax="maximum height is required",e.weightMin?e.weightMin<1?t.weightMin="min weight, I've never seen a Dog that small":/^[0-9]+$/.test(e.weightMin)||(t.weightMin="minimum weight must be a number"):t.weightMin="minimum weight is required",e.weightMax?e.weightMax>100?t.weightMax="max weight, I've never seen a Dog that big":/^[0-9]+$/.test(e.weightMax)?parseInt(e.weightMax)<parseInt(e.weightMin)&&(t.weightMax="max weight must be greater than min weight"):t.weightMax="maximum weight must be a number":t.weightMax="maximum weight is required",t}function S(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.temperaments})),n=Object(l.f)(),c=Object(a.useState)({}),s=Object(j.a)(c,2),i=s[0],o=s[1],u=Object(a.useState)({name:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[]}),p=Object(j.a)(u,2),O=p[0],f=p[1];function M(e){f(Object(_.a)(Object(_.a)({},O),{},Object(I.a)({},e.target.name,e.target.value))),o(k(Object(_.a)(Object(_.a)({},O),{},Object(I.a)({},e.target.name,e.target.value))))}function N(t){t.preventDefault();var a,c=k(O),s=Object.values(c);console.log(s),0===s.length?(console.log(O),e((a=O,function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://calm-castle-65099.herokuapp.com/dogs",a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Breed created"),f({name:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[]}),n.push("/home")):alert(s.join("\n"))}return Object(a.useEffect)((function(){e(x())}),[e]),Object(m.jsxs)("div",{className:"formContainer",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{className:"imgbk",src:C,alt:"puppy1"}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)(r.b,{to:"/home",children:[" ",Object(m.jsx)("button",{className:"button",children:" Back to home"})]}),Object(m.jsx)("h1",{children:"Create your dog's breed"})]}),Object(m.jsx)("img",{className:"imgbk",src:T,alt:"puppy2"})]}),Object(m.jsxs)("div",{className:"createContent",children:[Object(m.jsxs)("form",{className:"form",onSubmit:function(e){return N(e)},children:[Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{className:"label",children:"Breed's Name :"}),i.name&&Object(m.jsx)("span",{className:"danger",children:"\u274c"}),Object(m.jsx)("input",{className:"input",type:"text",value:O.name,onChange:function(e){return M(e)},name:"name",placeholder:"input breed name"})]}),Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{children:"Minimun Height:"}),i.heightMin&&Object(m.jsx)("span",{className:"danger",children:"\u274c"}),Object(m.jsx)("input",{className:"input",type:"text",value:O.heightMin,onChange:function(e){return M(e)},name:"heightMin",placeholder:"input minimun height"})]}),Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{children:"Maximun Height:"}),i.heightMax&&Object(m.jsx)("span",{className:"danger",children:"\u274c"}),Object(m.jsx)("input",{className:"input",type:"text",value:O.heightMax,onChange:function(e){return M(e)},name:"heightMax",placeholder:"input maximun height"})]}),Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{children:"Minimun Weight:"}),i.weightMin&&Object(m.jsx)("span",{className:"danger",children:"\u274c"}),Object(m.jsx)("input",{className:"input",type:"text",value:O.weightMin,onChange:function(e){return M(e)},name:"weightMin",placeholder:"input minimun weight"})]}),Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{children:"Maximun Weight:"}),i.weightMax&&Object(m.jsx)("span",{className:"danger",children:"\u274c"}),Object(m.jsx)("input",{className:"input",type:"text",value:O.weightMax,onChange:function(e){return M(e)},name:"weightMax",placeholder:"input maximun weight"})]}),Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{children:"Life Span:"}),Object(m.jsx)("input",{className:"input",type:"text",value:O.life_span,onChange:function(e){return M(e)},name:"life_span",placeholder:"input life span"})]}),Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{children:"Image's Route:"}),Object(m.jsx)("input",{className:"input",type:"text",value:O.image,onChange:function(e){return M(e)},name:"image",placeholder:"input breed image's route"})]}),Object(m.jsxs)("div",{className:"formItem",children:[Object(m.jsx)("label",{children:"Select temperaments:"}),Object(m.jsxs)("select",{className:"input",onChange:function(e){return function(e){f(Object(_.a)(Object(_.a)({},O),{},{temperaments:[].concat(Object(D.a)(O.temperaments),[e.target.value])}))}(e)},children:[Object(m.jsx)("option",{value:"",children:"Select"},0),t.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e){return O.temperaments.includes(e.name)?null:Object(m.jsx)("option",{value:e.name,children:e.name})}))]})]}),O.temperaments.map((function(e){return Object(m.jsxs)("div",{className:"temps",onClick:function(){return t=e,void f(Object(_.a)(Object(_.a)({},O),{},{temperaments:O.temperaments.filter((function(e){return e!==t}))}));var t},children:[e," [x]"]})})),Object(m.jsx)("button",{className:"button",type:"submit",children:"Create"})]}),Object(m.jsx)("div",{className:"form",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsx)(v,{name:O.name,img:O.image,temperaments:O.temperaments,wMin:O.weightMin,wMax:O.weightMax},O.name)})})]})]})}function R(e){console.log(e);var t=Object(h.b)(),n=e.match.params.id;Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(b.a)(Object(d.a)().mark((function t(n){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("https://calm-castle-65099.herokuapp.com/dogs/"+e);case 3:return a=t.sent,t.abrupt("return",n({type:"GET_DETAIL",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[t,n]);var c=Object(h.c)((function(e){return e.detail}));return console.log(c[0]),Object(m.jsx)("div",{children:c.length>0?Object(m.jsxs)("div",{className:"detail",children:[Object(m.jsx)("h1",{className:"landing",children:c[0].name.toUpperCase()}),Object(m.jsxs)("div",{className:"detailContent",children:[Object(m.jsx)("div",{className:"leftDet",children:Object(m.jsx)("img",{className:"imgDetail",src:c[0].image||f,alt:"No Pic in database"})}),Object(m.jsxs)("div",{className:"rightDet",children:[Object(m.jsxs)("h5",{className:"info",children:["Height: ",c[0].heightMin," Cms- ",c[0].heightMax," Cms"]}),Object(m.jsxs)("h5",{className:"info",children:["Weight: ",c[0].weightMin," Kgs- ",c[0].weightMax," Kgs"]}),Object(m.jsxs)("h5",{className:"info",children:["Life span: ",c[0].life_span]}),Object(m.jsx)("div",{children:Object(m.jsxs)("h5",{className:"info",children:["Temperament: ",c[0].createdInDb?c[0].temperaments.map((function(e){return Object(m.jsxs)("p",{children:[" - ",e.name]},e.name)})):c[0].temperaments.map((function(e){return Object(m.jsxs)("p",{children:[" - ",e]},e)}))]})}),Object(m.jsxs)(r.b,{to:"/home",children:[" ",Object(m.jsx)("button",{onClick:n="zz",className:"button",children:" back to home"})]})]})]})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Loading..."}),Object(m.jsx)("p",{children:"if this take more than 5 seconds, please return to home"}),Object(m.jsx)("img",{src:T,alt:"waitting"}),Object(m.jsxs)(r.b,{to:"/home",children:[" ",Object(m.jsx)("button",{className:"button",children:" back to home"})]})]})})}var A=function(){return Object(m.jsx)(r.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(m.jsx)(l.a,{exact:!0,path:"/home",component:E}),Object(m.jsx)(l.a,{path:"/create",component:S}),Object(m.jsx)(l.a,{path:"/home/:id",component:R})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},P=n(24),B=n(41),L=n(42),F={dogs:[],allDogs:[],temperaments:[],detail:[]};var Y=Object(P.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DOGS":return Object(_.a)(Object(_.a)({},e),{},{dogs:t.payload,allDogs:t.payload});case"FILTER_BY_ORIGIN":var n=e.allDogs,a="api"===t.payload?n.filter((function(e){return!e.createdInDb})):"created"===t.payload?n.filter((function(e){return e.createdInDb})):n;return Object(_.a)(Object(_.a)({},e),{},{dogs:a});case"FILTER_BY_TEMPERAMENT":var c=e.allDogs;console.log(t.payload);var s="all"===t.payload?c:c.filter((function(e){return"string"===typeof e.temperaments?e.temperaments.includes(t.payload):!Array.isArray(e.temperaments)||e.temperaments.map((function(e){return e.name})).includes(t.payload)}));return s.filter((function(e){return null!==e.temperaments})),console.log(s),Object(_.a)(Object(_.a)({},e),{},{dogs:s});case"ORDER_BY_NAME":var i=e.dogs,r="asc"===t.payload?i.sort((function(e,t){return e.name>t.name?1:-1})):"desc"===t.payload?i.sort((function(e,t){return e.name<t.name?1:-1})):i;return Object(_.a)(Object(_.a)({},e),{},{dogs:r});case"ORDER_BY_WEIGHT":var l=e.dogs,o="asc"===t.payload?l.sort((function(e,t){return parseInt(e.weightMin)>parseInt(t.weightMin)?1:-1})):"desc"===t.payload?l.sort((function(e,t){return parseInt(e.weightMax)<parseInt(t.weightMax)?1:-1})):l;return Object(_.a)(Object(_.a)({},e),{},{dogs:o});case"GET_NAME_DOGS":return Object(_.a)(Object(_.a)({},e),{},{dogs:t.payload});case"POST_DOG":return Object(_.a)({},e);case"GET_TEMPERAMENTS":return Object(_.a)(Object(_.a)({},e),{},{temperaments:t.payload});case"GET_DETAIL":return Object(_.a)(Object(_.a)({},e),{},{detail:t.payload});default:return e}}),Object(B.composeWithDevTools)(Object(P.applyMiddleware)(L.a)));i.a.render(Object(m.jsxs)(h.a,{store:Y,children:[Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(A,{})}),","]}),document.getElementById("root")),G()}},[[82,1,2]]]);
//# sourceMappingURL=main.a4197136.chunk.js.map