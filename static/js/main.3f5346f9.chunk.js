(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),i=n.n(s),r=(n(48),n(49),n(11)),l=n(4),o=n.p+"static/media/patit.2c1dbbaa.png",u=n(0);function m(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"landing",children:"WELCOME TO DOGS BREEDS APP"}),Object(u.jsx)(r.b,{to:"/home",children:Object(u.jsx)("button",{className:"button",children:"Enter"})}),Object(u.jsx)("img",{className:"animation",src:o,alt:""})]})}var j=n(13),h=n(7),d=n(12),b=n(16),p=n(17),g=n.n(p);function O(){return function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://calm-castle-65099.herokuapp.com/dogs");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_DOGS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function x(){return function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://calm-castle-65099.herokuapp.com/temperament");case 2:return n=e.sent,e.abrupt("return",t({type:"GET_TEMPERAMENTS",payload:n.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}n.p;function f(e){var t=e.name,n=e.img,a=e.temperaments,c=e.wMin,s=e.wMax,i=e.created;return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("img",{className:"img",src:n,alt:t}),Object(u.jsx)("h3",{className:"info",children:t.toUpperCase()}),Object(u.jsxs)("p",{className:"info",children:["Temperament: ",Object(u.jsx)("br",{}),i?a.map((function(e){return Object(u.jsxs)("span",{children:[e.name,", "]})})):a]}),Object(u.jsxs)("p",{className:"info",children:[c,"Kg - ",s,"Kg"]})]})}function v(e){for(var t=e.dogsPerPage,n=e.allDogs,a=e.pages,c=e.current,s=[],i=1;i<=Math.ceil(n/t);i++)s.push(i);return Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{children:"Pages"}),Object(u.jsx)("div",{className:"pages",children:s&&s.map((function(e){return Object(u.jsx)("div",{className:e===c?"number selected":"number",children:Object(u.jsxs)("a",{onClick:function(){return a(e)},children:["-",e,"-"]})},e)}))})]})}function M(){var e=Object(h.b)(),t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1];function i(t){t.preventDefault(),e(function(e){return function(){var t=Object(b.a)(Object(d.a)().mark((function t(n){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("https://calm-castle-65099.herokuapp.com/dogs?name="+e);case 3:return a=t.sent,t.abrupt("return",n({type:"GET_NAME_DOGS",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c)),s("")}return Object(u.jsxs)("div",{className:"filter-item sel",children:[Object(u.jsx)("input",{className:"input",type:"text",value:c,placeholder:"Search",onChange:function(e){return function(e){e.preventDefault(),s(e.target.value),console.log(c)}(e)}}),Object(u.jsx)("button",{className:"button",type:"submit",onClick:function(e){return i(e)},children:"Search"})]})}var N=n.p+"static/media/all4.66587314.png",w=n.p+"static/media/all3.ea35ddbd.png";function y(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.dogs})),n=Object(a.useState)(""),c=Object(j.a)(n,2),s=(c[0],c[1]),i=Object(a.useState)(1),l=Object(j.a)(i,2),o=l[0],m=l[1],d=Object(a.useState)(8),b=Object(j.a)(d,1)[0],p=o*b,g=p-b,y=t.slice(g,p),E=Object(h.c)((function(e){return e.temperaments}));return Object(a.useEffect)((function(){e(O())}),[e]),Object(a.useEffect)((function(){e(x())}),[e]),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{className:"imgbk",src:N,alt:"puppies"}),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)("h1",{children:"Dogs breed database"}),Object(u.jsx)("p",{children:"get information about dog breeds"})]}),Object(u.jsx)("img",{className:"imgbk",src:w,alt:"puppies"})]}),Object(u.jsxs)("div",{className:"back-head",children:[Object(u.jsxs)("div",{className:"filters",children:[Object(u.jsx)("button",{className:"button",onClick:function(t){!function(t){t.preventDefault(),e(O())}(t)},children:"Reset dogs"}),Object(u.jsx)(r.b,{className:"link_to",to:"/create",children:Object(u.jsx)("button",{className:"button",children:"new breed"})}),Object(u.jsxs)("div",{className:"filter-item sel",children:[Object(u.jsx)("div",{children:"Sort by breed name"}),Object(u.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_NAME",payload:t.target.value}),s("Ordenado ".concat(t.target.value)),m(1)}(t)},children:[Object(u.jsx)("option",{value:"x",children:" Select"}),Object(u.jsx)("option",{value:"asc",children:" A-Z"}),Object(u.jsx)("option",{value:"desc",children:"Z-A"})]})]}),Object(u.jsxs)("div",{className:"filter-item sel",children:[Object(u.jsx)("div",{children:"Sort by weight "}),Object(u.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),e({type:"ORDER_BY_WEIGHT",payload:t.target.value}),m(1),s("Ordenado ".concat(t.target.value))}(t)},children:[Object(u.jsx)("option",{value:"x",children:" Select"}),Object(u.jsx)("option",{value:"asc",children:" Min-Max"}),Object(u.jsx)("option",{value:"desc",children:"Max-Min"})]})]}),Object(u.jsxs)("div",{className:"filter-item sel",children:[Object(u.jsx)("div",{children:"Filter by origin"}),Object(u.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),m(1),e({type:"FILTER_BY_ORIGIN",payload:t.target.value})}(t)},children:[Object(u.jsx)("option",{value:"all",children:"All breeds"}),Object(u.jsx)("option",{value:"api",children:"Registered breeds"}),Object(u.jsx)("option",{value:"created",children:"Created breeds"})]})]}),Object(u.jsxs)("div",{className:"filter-item sel",children:[Object(u.jsx)("div",{children:"Filter by temperament"}),Object(u.jsxs)("select",{onChange:function(t){return function(t){t.preventDefault(),m(1),e({type:"FILTER_BY_TEMPERAMENT",payload:t.target.value})}(t)},children:[Object(u.jsx)("option",{value:"all",children:"All temperaments"},0),null===E||void 0===E?void 0:E.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]})]}),Object(u.jsxs)("div",{className:"filter-item sbp",children:[Object(u.jsx)(M,{}),Object(u.jsx)(v,{dogsPerPage:b,allDogs:t.length,pages:function(e){return m(e)},current:o})]})]}),Object(u.jsx)("div",{className:"cards",children:null===y||void 0===y?void 0:y.map((function(e){return Object(u.jsx)("div",{className:"card",children:Object(u.jsx)(r.b,{to:"/home/"+e.id,children:Object(u.jsx)(f,{name:e.name,img:e.image,temperaments:e.temperaments,wMin:e.weightMin,wMax:e.weightMax,created:e.createdInDb})})},e.id)}))})]})}var E=n(43),D=n(20),I=n(2),_=n.p+"static/media/lookingatyou.515e3679.png",C=n.p+"static/media/waitting.7742d17f.png";function T(e){var t={};return e.name?null==e.name.match("^[ a-zA-Z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda]+$")&&(t.name="only can use letters and spaces for name"):t.name="name is required",e.heightMin?e.heightMin<10?t.heightMin="min height, I've never seen a Dog that shorty":/^[0-9]+$/.test(e.heightMin)||(t.heightMin="minimum height must be a number"):t.heightMin="minimum height is required",e.heightMax?e.heightMax>200?t.heightMax="max height, I've never seen a Dog that tall":/^[0-9]+$/.test(e.heightMax)?parseInt(e.heightMax)<parseInt(e.heightMin)&&(t.heightMax="max height must be greater than min height"):t.heightMax="maximum height must be a number":t.heightMax="maximum height is required",e.weightMin?e.weightMin<1?t.weightMin="min weight, I've never seen a Dog that small":/^[0-9]+$/.test(e.weightMin)||(t.weightMin="minimum weight must be a number"):t.weightMin="minimum weight is required",e.weightMax?e.weightMax>100?t.weightMax="max weight, I've never seen a Dog that big":/^[0-9]+$/.test(e.weightMax)?parseInt(e.weightMax)<parseInt(e.weightMin)&&(t.weightMax="max weight must be greater than min weight"):t.weightMax="maximum weight must be a number":t.weightMax="maximum weight is required",t}function S(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.temperaments})),n=Object(l.f)(),c=Object(a.useState)({}),s=Object(j.a)(c,2),i=s[0],o=s[1],m=Object(a.useState)({name:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[]}),p=Object(j.a)(m,2),O=p[0],v=p[1];function M(e){v(Object(I.a)(Object(I.a)({},O),{},Object(D.a)({},e.target.name,e.target.value))),o(T(Object(I.a)(Object(I.a)({},O),{},Object(D.a)({},e.target.name,e.target.value))))}function N(t){t.preventDefault();var a,c=T(O),s=Object.values(c);console.log(s),0===s.length?(console.log(O),e((a=O,function(){var e=Object(b.a)(Object(d.a)().mark((function e(t){var n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://calm-castle-65099.herokuapp.com/dogs",a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("Breed created"),v({name:"",heightMin:"",heightMax:"",weightMin:"",weightMax:"",life_span:"",image:"",temperaments:[]}),n.push("/home")):alert(s.join("\n"))}return Object(a.useEffect)((function(){e(x())}),[e]),Object(u.jsxs)("div",{className:"formContainer",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("img",{className:"imgbk",src:_,alt:"puppy1"}),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)(r.b,{to:"/home",children:[" ",Object(u.jsx)("button",{className:"button",children:" Back to home"})]}),Object(u.jsx)("h1",{children:"Create your dog's breed"})]}),Object(u.jsx)("img",{className:"imgbk",src:C,alt:"puppy2"})]}),Object(u.jsxs)("div",{className:"createContent",children:[Object(u.jsxs)("form",{className:"form",onSubmit:function(e){return N(e)},children:[Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{className:"label",children:"Breed's Name :"}),i.name&&Object(u.jsx)("span",{className:"danger",children:"\u274c"}),Object(u.jsx)("input",{className:"input",type:"text",value:O.name,onChange:function(e){return M(e)},name:"name",placeholder:"input breed name"})]}),Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{children:"Minimun Height:"}),i.heightMin&&Object(u.jsx)("span",{className:"danger",children:"\u274c"}),Object(u.jsx)("input",{className:"input",type:"text",value:O.heightMin,onChange:function(e){return M(e)},name:"heightMin",placeholder:"input minimun height"})]}),Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{children:"Maximun Height:"}),i.heightMax&&Object(u.jsx)("span",{className:"danger",children:"\u274c"}),Object(u.jsx)("input",{className:"input",type:"text",value:O.heightMax,onChange:function(e){return M(e)},name:"heightMax",placeholder:"input maximun height"})]}),Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{children:"Minimun Weight:"}),i.weightMin&&Object(u.jsx)("span",{className:"danger",children:"\u274c"}),Object(u.jsx)("input",{className:"input",type:"text",value:O.weightMin,onChange:function(e){return M(e)},name:"weightMin",placeholder:"input minimun weight"})]}),Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{children:"Maximun Weight:"}),i.weightMax&&Object(u.jsx)("span",{className:"danger",children:"\u274c"}),Object(u.jsx)("input",{className:"input",type:"text",value:O.weightMax,onChange:function(e){return M(e)},name:"weightMax",placeholder:"input maximun weight"})]}),Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{children:"Life Span:"}),Object(u.jsx)("input",{className:"input",type:"text",value:O.life_span,onChange:function(e){return M(e)},name:"life_span",placeholder:"input life span"})]}),Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{children:"Image's Route:"}),Object(u.jsx)("input",{className:"input",type:"text",value:O.image,onChange:function(e){return M(e)},name:"image",placeholder:"input breed image's route"})]}),Object(u.jsxs)("div",{className:"formItem",children:[Object(u.jsx)("label",{children:"Select temperaments:"}),Object(u.jsx)("select",{className:"input",onChange:function(e){return function(e){v(Object(I.a)(Object(I.a)({},O),{},{temperaments:[].concat(Object(E.a)(O.temperaments),[e.target.value])}))}(e)},children:t.map((function(e){return Object(u.jsx)("option",{value:e.name,children:e.name})}))})]}),O.temperaments.map((function(e){return Object(u.jsxs)("div",{className:"temps",onClick:function(){return t=e,void v(Object(I.a)(Object(I.a)({},O),{},{temperaments:O.temperaments.filter((function(e){return e!==t}))}));var t},children:[e," [x]"]})})),Object(u.jsx)("button",{className:"button",type:"submit",children:"Create"})]}),Object(u.jsx)("div",{className:"form",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsx)(f,{name:O.name,img:O.image,temperaments:O.temperaments,wMin:O.weightMin,wMax:O.weightMax},O.name)})})]})]})}function k(e){console.log(e);var t=Object(h.b)(),n=e.match.params.id;Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(b.a)(Object(d.a)().mark((function t(n){var a;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("https://calm-castle-65099.herokuapp.com/dogs/"+e);case 3:return a=t.sent,t.abrupt("return",n({type:"GET_DETAIL",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[t,n]);var c=Object(h.c)((function(e){return e.detail}));return console.log(c[0]),Object(u.jsx)("div",{children:c.length>0?Object(u.jsxs)("div",{className:"detail",children:[Object(u.jsx)("h1",{className:"landing",children:c[0].name.toUpperCase()}),Object(u.jsxs)("div",{className:"detailContent",children:[Object(u.jsx)("div",{className:"leftDet",children:Object(u.jsx)("img",{className:"imgDetail",src:c[0].image,alt:"No Pic in database"})}),Object(u.jsxs)("div",{className:"rightDet",children:[Object(u.jsxs)("h5",{className:"info",children:["Height: ",c[0].heightMin," Cms- ",c[0].heightMax," Cms"]}),Object(u.jsxs)("h5",{className:"info",children:["Weight: ",c[0].weightMin," Kgs- ",c[0].weightMax," Kgs"]}),Object(u.jsxs)("h5",{className:"info",children:["Life span: ",c[0].life_span]}),Object(u.jsx)("div",{children:Object(u.jsxs)("h5",{className:"info",children:["Temperament: ",c[0].createdInDb?c[0].temperaments.map((function(e){return Object(u.jsxs)("span",{children:[e.name,", "]})})):c[0].temperaments]})}),Object(u.jsxs)(r.b,{to:"/home",children:[" ",Object(u.jsx)("button",{className:"button",children:" back to home"})]})]})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Loading..."}),Object(u.jsx)("img",{src:"../images/ouch.png",alt:"ouch"}),Object(u.jsxs)(r.b,{to:"/home",children:[" ",Object(u.jsx)("button",{className:"button",children:" back to home"})]})]})})}var R=function(){return Object(u.jsx)(r.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:m}),Object(u.jsx)(l.a,{exact:!0,path:"/home",component:y}),Object(u.jsx)(l.a,{path:"/create",component:S}),Object(u.jsx)(l.a,{path:"/home/:id",component:k})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},G=n(24),P=n(41),B=n(42),L={dogs:[],allDogs:[],temperaments:[],detail:[]};var F=Object(G.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DOGS":return Object(I.a)(Object(I.a)({},e),{},{dogs:t.payload,allDogs:t.payload});case"FILTER_BY_ORIGIN":var n=e.allDogs,a="api"===t.payload?n.filter((function(e){return!e.createdInDb})):"created"===t.payload?n.filter((function(e){return e.createdInDb})):n;return Object(I.a)(Object(I.a)({},e),{},{dogs:a});case"FILTER_BY_TEMPERAMENT":var c=e.allDogs;console.log(t.payload);var s="all"===t.payload?c:c.filter((function(e){return"string"===typeof e.temperaments?e.temperaments.includes(t.payload):!Array.isArray(e.temperaments)||e.temperaments.map((function(e){return e.name})).includes(t.payload)}));return s.filter((function(e){return null!==e.temperaments})),console.log(s),Object(I.a)(Object(I.a)({},e),{},{dogs:s});case"ORDER_BY_NAME":var i=e.dogs,r="asc"===t.payload?i.sort((function(e,t){return e.name>t.name?1:-1})):"desc"===t.payload?i.sort((function(e,t){return e.name<t.name?1:-1})):i;return Object(I.a)(Object(I.a)({},e),{},{dogs:r});case"ORDER_BY_WEIGHT":var l=e.dogs,o="asc"===t.payload?l.sort((function(e,t){return parseInt(e.weightMin)>parseInt(t.weightMin)?1:-1})):"desc"===t.payload?l.sort((function(e,t){return parseInt(e.weightMax)<parseInt(t.weightMax)?1:-1})):l;return Object(I.a)(Object(I.a)({},e),{},{dogs:o});case"GET_NAME_DOGS":return Object(I.a)(Object(I.a)({},e),{},{dogs:t.payload});case"POST_DOG":return Object(I.a)({},e);case"GET_TEMPERAMENTS":return Object(I.a)(Object(I.a)({},e),{},{temperaments:t.payload});case"GET_DETAIL":return Object(I.a)(Object(I.a)({},e),{},{detail:t.payload});default:return e}}),Object(P.composeWithDevTools)(Object(G.applyMiddleware)(B.a)));i.a.render(Object(u.jsxs)(h.a,{store:F,children:[Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(R,{})}),","]}),document.getElementById("root")),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.3f5346f9.chunk.js.map