(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(118)),i={id:"projects",title:"Contributions and Projects"},c={unversionedId:"projects",id:"projects",isDocsHomePage:!1,title:"Contributions and Projects",description:"Docusaurus",source:"@site/docs/projects.md",slug:"/projects",permalink:"/anshulrgoyal/projects",version:"current"},u=[{value:"Docusaurus",id:"docusaurus",children:[]},{value:"Imageflow",id:"imageflow",children:[{value:"Imageflow Node",id:"imageflow-node",children:[]},{value:"Imageflow Go",id:"imageflow-go",children:[]}]},{value:"Bust",id:"bust",children:[]},{value:"Imdb Scrapper",id:"imdb-scrapper",children:[]},{value:"Unbaked Potato",id:"unbaked-potato",children:[]}],p={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"docusaurus"},"Docusaurus"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docusaurus.io"}),"Docusaurus")," is an open-source documentation website generation. I contributing docusaurus by creating tools to migrate docusaurus version 1 to version 2. I also updated CLI for better user experience and creating a design for option and config validation provided to plugin and themes."),Object(a.b)("h2",{id:"imageflow"},"Imageflow"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"imageflow")," provides operation for GIF, PNG, WebP and JPEG. The batch operations can be performed using API which creates a directed graph."),Object(a.b)("h3",{id:"imageflow-node"},"Imageflow Node"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/imazen/imageflow-node"}),Object(a.b)("inlineCode",{parentName:"a"},"imageflow-node"))," is an image manipulation library for Node.js. ",Object(a.b)("inlineCode",{parentName:"p"},"imageflow-node")," is binding for ",Object(a.b)("inlineCode",{parentName:"p"},"libimageflow"),". ",Object(a.b)("inlineCode",{parentName:"p"},"imageflow-node")," uses NAPI for communicating with rust side of code. It is written in Rust and Typescript."),Object(a.b)("h3",{id:"imageflow-go"},"Imageflow Go"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/imazen/imageflow-go"}),Object(a.b)("inlineCode",{parentName:"a"},"imageflow-go"))," is an image manipulation library for Golang. ",Object(a.b)("inlineCode",{parentName:"p"},"imageflow-node")," is binding for ",Object(a.b)("inlineCode",{parentName:"p"},"libimageflow"),". ",Object(a.b)("inlineCode",{parentName:"p"},"imageflow-go")," uses cgo for communicating with rust side of code. It is written in Golang."),Object(a.b)("h2",{id:"bust"},"Bust"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/anshulrgoyal/bust"}),"Bust")," is cli tool for stress testing servers. It is a clobe of apache benchmark written in rust."),Object(a.b)("h2",{id:"imdb-scrapper"},"Imdb Scrapper"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/anshulrgoyal/imdb-scrapper"}),"IMDB scrapper")," is movies and tv show data scrapper from the IMDB website. It scraps data using cheerio and Node.js."),Object(a.b)("h2",{id:"unbaked-potato"},"Unbaked Potato"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://unbakedpotato.herokuapp.com"}),"unbaked potato")," is a simple blogging website written in Node.js and Angular."))}s.isMDXComponent=!0}}]);