(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(12),a=n.n(s),i=(n(43),n.p,n(44),n(15)),j=n(16),d=n(38),h=n(37),l=n(33),o=n.n(l),b=new(function(){function e(){Object(i.a)(this,e)}return Object(j.a)(e,[{key:"getUsers",value:function(){return o.a.get("http://localhost:8080/userslist")}}]),e}()),u=n(72),O=n(74),x=n(73),f=n(36),m=n(71),p=n(5),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={users:[]},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.getUsers().then((function(t){e.setState({users:t.data})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(u.a,{bg:"dark",variant:"dark",children:[Object(p.jsx)(u.a.Brand,{href:"#home",children:"project"}),Object(p.jsxs)(O.a,{className:"mr-auto",children:[Object(p.jsx)(O.a.Link,{href:"#home",children:"Home"}),Object(p.jsx)(O.a.Link,{href:"#features",children:"Features"}),Object(p.jsx)(O.a.Link,{href:"#pricing",children:"Product Details"})]}),Object(p.jsxs)(x.a,{inline:!0,children:[Object(p.jsx)(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(p.jsx)(m.a,{variant:"outline-info",children:"Search"})]})]}),Object(p.jsx)("h1",{className:"text-center",children:"Customers List"}),Object(p.jsxs)("table",{className:"table table-striped",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Customer Id"}),Object(p.jsx)("th",{children:"First Name"}),Object(p.jsx)("th",{children:"Last Name"}),Object(p.jsx)("th",{children:"Email Id"})]})}),Object(p.jsx)("tbody",{children:this.state.users.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:e.firstName}),Object(p.jsx)("td",{children:e.lastName}),Object(p.jsx)("td",{children:e.email})]},e.id)}))})]})]})}}]),n}(r.a.Component);var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(v,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(67);a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),k()}},[[68,1,2]]]);
//# sourceMappingURL=main.bcd17242.chunk.js.map