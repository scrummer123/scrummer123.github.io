_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"0G5g":function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof self&&self.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)};t.default=r},"23aj":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,"__N_SSG",(function(){return f}));var o=n("nKUr"),a=n("Aiso"),c=n.n(a),s=n("q1tI"),l=n.n(s),u=n("ma3e"),d=n("GIBj"),f=!0;t.default=function(e){e.error;var t=e.data,n=Object(d.b)(),r=n.theme,a=n.toggleTheme,s=l.a.useRef(null),f=i(l.a.useState(!1),2),m=f[0],b=f[1];l.a.useEffect((function(){new IntersectionObserver((function(e){var t=i(e,1)[0];return b(!t.isIntersecting)})).observe(document.querySelector("#infoBox"))}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{id:"infoBox",children:Object(o.jsx)("button",{"aria-label":"Show work experience",className:"w-full rounded-none hover:bg-indigo-500 shadow-none",children:"Bekijk werkervaring"})}),Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("div",{"data-stuck":m,className:"custom-container flex justify-between",children:[Object(o.jsx)("h1",{className:"text-5xl font-rewind mt-1.5",children:"Simon"}),Object(o.jsxs)("div",{className:"nav-container",children:[Object(o.jsx)("a",{href:"/?status=WIP",className:"nav-item",children:"Home"}),Object(o.jsx)("a",{href:"/?status=WIP",className:"nav-item",children:"About"}),Object(o.jsx)("button",{"aria-label":"Toggle dark mode",onClick:function(){return a()},className:"icon-button dark:bg-indigo-900 my-4 shadow-none",children:Object(o.jsx)(u.a,{size:"15px",color:"dark"===r?"#fff":"#000"})})]})]})}),Object(o.jsx)("div",{id:"custom-container-root","data-stuck":m}),Object(o.jsxs)("div",{className:"custom-container-narrow",children:[Object(o.jsx)("div",{className:"lg:flex-2 sm:flex-1 hidden sm:block h-full",children:Object(o.jsx)(c.a,{src:"/img/me.jpeg",alt:"me",height:1e4,width:1e4,className:"rounded-full"})}),Object(o.jsxs)("div",{className:"flex-2 lg:flex-5 2xl:flex-6 ml-0 sm:ml-6 xl:ml-12",children:[Object(o.jsx)("h1",{className:"font-nunito my-2",children:"Wie ben ik?"}),Object(o.jsx)("p",{children:"Leuk dat je besloot een kijkje te nemen naar mijn personalia. Mijn naam is Simon, ik ben een software ontwikkelaar met veel passie en ambitie voor alles wat ik maak. Wil je meer over mij weten? Neem dan een kijkje op mijn site..."}),Object(o.jsx)("button",{"aria-label":"Scroll down",className:"mt-4",onClick:function(){return s.current.scrollIntoView()},children:"Lees meer"})]})]}),Object(o.jsxs)("div",{className:"custom-container-narrow flex-col my-5",id:"projectsContainer",ref:s,children:[Object(o.jsx)("h1",{className:"font-nunito mb-5 mt-24 cursor-pointer",onClick:function(){return s.current.scrollIntoView()},children:"Projecten"}),t&&t.map((function(e,t){return Object(o.jsxs)("a",{href:e.html_url,rel:"noopener",target:"_blank",className:"project-item",children:[Object(o.jsx)("span",{className:"font-nunito text-xl",children:e.name}),Object(o.jsx)("p",{children:e.description})]},t)}))]})]})}},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GIBj:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n("nKUr"),i=n("q1tI"),o=Object(i.createContext)(null),a=function(e){var t=e.children,n=Object(i.useState)("dark"),a=n[0],c=n[1];Object(i.useEffect)((function(){c(localStorage.getItem("theme")||"dark")}),[]),Object(i.useEffect)((function(){localStorage.setItem("theme",a),"dark"===a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),[a]);return Object(r.jsx)(o.Provider,{value:{theme:a,setTheme:c,toggleTheme:function(){var e=("dark"===a?"light":"dark")||"dark";c(e),localStorage.setItem("theme",e)}},children:t})},c=function(){var e=Object(i.useContext)(o);if(void 0===e)throw new Error("ThemeProvider: `context` is undefined");return e}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},J4zp:function(e,t,n){var r=n("wTVA"),i=n("m0LI"),o=n("ZhPi"),a=n("wkBT");e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||a()}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),i=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=i.a.createContext&&i.a.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function l(e){return e&&e.map((function(e,t){return i.a.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return i.a.createElement(d,c({attr:c({},e.attr)},t),l(e.child))}}function d(e){var t=function(t){var n,r=e.attr,o=e.size,a=e.title,l=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&i.a.createElement("title",null,a),e.children)};return void 0!==a?i.a.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||i(e)||o(e)||a()}},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var r=n("J4zp"),i=n("RIqP"),o=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,c=void 0!==o&&o,u=e.priority,f=void 0!==u&&u,m=e.loading,h=e.className,v=e.quality,p=e.width,x=e.height,w=e.objectFit,O=e.objectPosition,k=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),A=n?"responsive":"intrinsic",S=!1;"unsized"in k?(S=Boolean(k.unsized),delete k.unsized):"layout"in k&&(k.layout&&(A=k.layout),delete k.layout);0;var I=!f&&("lazy"===m||"undefined"===typeof m);t&&t.startsWith("data:")&&(c=!0,I=!1);var E,N,_,z=(0,d.useIntersection)({rootMargin:"200px",disabled:!I}),q=r(z,2),P=q[0],T=q[1],C=!I||T,L=j(p),R=j(x),M=j(v),B={visibility:C?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:O};if("undefined"!==typeof L&&"undefined"!==typeof R&&"fill"!==A){var D=R/L,W=isNaN(D)?"100%":"".concat(100*D,"%");"responsive"===A?(E={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={display:"block",boxSizing:"border-box",paddingTop:W}):"intrinsic"===A?(E={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={boxSizing:"border-box",display:"block",maxWidth:"100%"},_='<svg width="'.concat(L,'" height="').concat(R,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===A&&(E={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:L,height:R})}else"undefined"===typeof L&&"undefined"===typeof R&&"fill"===A&&(E={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var V={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};C&&(V=function(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes;if(n)return{src:t};var s=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:b,kind:"w"};return{widths:i(new Set([e,2*e,3*e].map((function(e){return g.find((function(t){return t>=e}))||g[g.length-1]})))),kind:"x"}}(o,r),l=s.widths,u=s.kind,d=l.length-1,f=l.map((function(e,n){return"".concat(y({src:t,quality:a,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", ");c||"w"!==u||(c="100vw");return{src:t=y({src:t,quality:a,width:l[d]}),sizes:c,srcSet:f}}({src:t,unoptimized:c,layout:A,width:L,quality:M,sizes:n}));S&&(E=void 0,N=void 0,B=void 0);return s.default.createElement("div",{style:E},N?s.default.createElement("div",{style:N},_?s.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(_))}):null):null,s.default.createElement("img",Object.assign({},k,V,{decoding:"async",className:h,ref:P,style:B})))};var a=o(n("8OQS")),c=o(n("pVnL")),s=o(n("q1tI")),l=n("dEHY"),u=n("UWYU"),d=n("vNVm");var f=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["auto=format","fit=max","w="+r],a="";i&&o.push("q="+i);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(x(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(x(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(x(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,b=m.deviceSizes,h=m.imageSizes,v=m.loader,p=m.path,g=(m.domains,[].concat(i(b),i(h)));function y(e){var t=f.get(v);if(t)return t((0,c.default)({root:p},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),g.sort((function(e,t){return e-t}))},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),i=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),d=u[0],f=u[1],m=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||d||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){c||d||(0,a.default)((function(){return f(!0)}))}),[d]),[m,d]};var o=n("q1tI"),a=i(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}},[["/EDR",0,1,3]]]);