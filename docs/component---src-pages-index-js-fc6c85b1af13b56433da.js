(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),l=a(192),i=a(202),o="1908244973";t.default=function(e){var t=e.data.allGeoFeature.edges.map(function(e){return e.node});return r.a.createElement(i.a,null,r.a.createElement("p",null,"Click on the name of a hospital below for more information and to see it's location on a map"),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",null,r.a.createElement(l.a,{to:Object(l.c)("hospital/"+e.featureFields.ID)},e.featureFields.NAME))})))}},192:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),l=a(66),i=a.n(l);a.d(t,"a",function(){return i.a}),a.d(t,"c",function(){return l.withPrefix});a(194),a(9).default.enqueue;var o=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&l(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||l,staticQueryData:e})})}},194:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Using spatial data to power a Gatsby site"}}}}},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},202:function(e,t,a){"use strict";var n=a(197),r=a(0),l=a.n(r),i=a(192),o=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"#5b6c5d",marginBottom:"0"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.defaultProps={siteTitle:"My Gatsby Site"};var u=o;a(203),t.a=function(e){var t=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{paddingTop:0}},l.a.createElement("main",null,t)),l.a.createElement("footer",{style:{padding:"0.5px 1rem",color:"#5b6c5d"}},"© ",(new Date).getFullYear()," ",l.a.createElement("a",{href:"https://www.andrewl.net"},"Andrew Larcombe"),", built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," using Open Data from ",l.a.createElement("a",{href:"http://lle.gov.wales/catalogue/item/HealthServices/?lang=en"},"Lle Geo-Portal")))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-index-js-fc6c85b1af13b56433da.js.map