(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,,,function(e,t,n){e.exports=n.p+"static/media/profile.b263d7a8.jpg"},,,,function(e,t,n){e.exports=n(40)},,,,,function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(14),o=n.n(c),l=n(8),i=(n(25),n(26),n(15)),u=n.n(i),s=n(0),m=n(2);n(30);var d=function(e){var t=e.onClick,n=e.target;return r.a.createElement("div",{className:"Arrow"},r.a.createElement(s.b.Provider,{value:{color:"white",size:"3rem"}},r.a.createElement("button",{className:"Arrow-button animated infinite heartBeat slower delay-1s",type:"button",onClick:function(){return t(n)}},"Home"===n?r.a.createElement(m.c,null):r.a.createElement(m.b,null))))};n(31),n(32);var E=function(e){var t=e.setRef,n=e.onClick;return r.a.createElement("div",{className:"Home",ref:function(e){return t("Home",e)}},r.a.createElement("div",{className:"Home-gradient-background"}),r.a.createElement("div",{className:"Home-radial-background"},r.a.createElement("div",{className:"Home-content"},r.a.createElement(u.a,{animateIn:"Home-type-writer",className:"Home-text"},r.a.createElement("h1",null,"Hello World"),r.a.createElement("h1",null,"Hubert Hung")),r.a.createElement(d,{onClick:n,target:"About"}))))},f=n(4);n(33);function v(e){var t=e.onClick,n=Object(a.useState)(window.innerWidth),c=Object(f.a)(n,2),o=c[0],l=c[1];return Object(a.useEffect)(function(){window.addEventListener("resize",function(){l(window.innerWidth)})}),o<768?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b.Provider,{value:{className:"NavBar-button"}},r.a.createElement("button",{type:"button",onClick:function(){return t("Home")}},r.a.createElement(m.d,null))),r.a.createElement(s.b.Provider,{value:{className:"NavBar-button"}},r.a.createElement("button",{type:"button",onClick:function(){return t("Home")}},r.a.createElement(m.e,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"NavBar-button NavBar-button-home",type:"button",onClick:function(){return t("Home")}},"Home"),["About","Experience","Contact","Resume"].map(function(e){return r.a.createElement("button",{key:e,className:"NavBar-button",type:"button",onClick:function(){return t(e)}},e)}))}var h=function(e){return r.a.createElement("header",{className:"NavBar"},r.a.createElement("div",{className:"NavBar-content"},r.a.createElement(v,e)),r.a.createElement("div",{className:"NavBar-bottom-line"}))},b=n(17),g=n(16),p=n.n(g);n(34);function w(){var e=["","Beginner","Elementary","Intermediate"],t={"C++":"Intermediate",Javascript:"Elementary",React:"Elementary",AngularJs:"Elementary",PHP:"Elementary",Python:"Elementary",MySQL:"Elementary"};return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},e.map(function(e){return r.a.createElement("h4",{className:"col-md-3",key:e},e)})),Object.keys(t).map(function(n){return r.a.createElement("div",{className:"row",key:n},r.a.createElement("h4",{className:"col-md-3"},n),Array.from(Array(e.indexOf(t[n])),function(e,t){return r.a.createElement("div",{className:"col-md-3",key:t},r.a.createElement(b.a,null))}))}))}var N=function(e){var t=e.setRef,n=Object(a.useRef)(),c=Object(a.useRef)();return r.a.createElement("div",{className:"section-container",ref:function(e){return t("About",e)}},r.a.createElement("h2",{className:"section-title"},"About"),r.a.createElement("div",{className:"section-content"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:p.a,alt:"Profile Pic",className:"img-fluid rounded",ref:n}),r.a.createElement("h3",{className:"About-basic-info-text",ref:c},"\n    Tzu-Fan Hung\n  ")),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h3",null,"University of Michigan, Ann Arbor"),r.a.createElement("h3",null,"Computer Science Engineering"),r.a.createElement("h3",null,"GPA: 3.83"),r.a.createElement(w,null))))};n(12),n(35);function k(e){var t=e.onClick,n=e.cardTitle;return r.a.createElement("div",{className:"Experience-overlay"},r.a.createElement("button",{className:"Experience-overlay-button",type:"button",onClick:function(){return t(n)}},"Learn More"))}function y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"I implemented a new feature that allows teachers to generate reward cards and students to redeem them through QR codes to increase student and teacher interaction with our products even offline"),r.a.createElement("button",{className:"Experience-overlay-button",type:"button"},"View Demo"))}var C=function(e){var t=e.setRef,n=Object(a.useState)(null),c=Object(f.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(null),u=Object(f.a)(i,2),d=u[0],E=u[1];function v(e){l(e.currentTarget.innerText)}function h(){l(null)}function b(e){h(),E(e)}return null!==d?r.a.createElement("div",{className:"section-container",ref:function(e){return t("Experience",e)}},r.a.createElement("div",{className:"Experience-card-detail-title-div"},r.a.createElement(s.b.Provider,{value:{color:"white",size:"3rem"}},r.a.createElement("button",{type:"button",onClick:function(){E(null)}},r.a.createElement(m.a,null))),r.a.createElement("h2",{className:"section-title Experience-card-detail-title"},d)),r.a.createElement("div",{className:"section-content Experience-card-detail-content"},function(){switch(d){case"Learning A-Z":return r.a.createElement(y,null);default:return r.a.createElement("p",null,"NULL")}}())):r.a.createElement("div",{className:"section-container",ref:function(e){return t("Experience",e)}},r.a.createElement("h2",{className:"section-title"},"Experience"),r.a.createElement("div",{className:"section-content"},r.a.createElement("div",{className:"Experience-main-card",onMouseEnter:v,onMouseLeave:h},r.a.createElement("h3",{className:"Experience-card-title"},"Learning A-Z"),"Learning A-Z"===o?r.a.createElement(k,{onClick:b,cardTitle:"Learning A-Z"}):null),r.a.createElement("div",{className:"Experience-sub-div"},["Data Analysis on Canvas","Mobile Phone Laser Tag","A Light in the Darkness","Rube Goldberg Machine"].map(function(e){return r.a.createElement("div",{key:e,className:"Experience-sub-card",onMouseEnter:v,onMouseLeave:h},r.a.createElement("h4",{className:"Experience-card-title"},e),o===e?r.a.createElement(k,{onClick:b,cardTitle:e}):null)}))))},x=n(5);n(36);var A=function(e){var t=e.setRef;return r.a.createElement("div",{className:"section-container",ref:function(e){return t("Contact",e)}},r.a.createElement("h2",{className:"section-title"},"Contact"),r.a.createElement("div",{className:"container row flex-wrap"},r.a.createElement("h3",null,"I am currently looking for an internship for summer 2020. \n    Whether if you just want to chat about technology, want to know me better, \n    or provide me with an opportunity, feel free to contact me via:\n  "),r.a.createElement(s.b.Provider,{value:{size:"5em",color:"white"}},r.a.createElement("a",{className:"Contact-link",href:"https://github.com/hubert322",target:"blank"},r.a.createElement(x.a,null)),r.a.createElement("a",{className:"Contact-link",href:"https://www.linkedin.com/in/tzu-fan-hubert-hung",target:"blank"},r.a.createElement(x.c,null)),r.a.createElement("a",{className:"Contact-link",href:"https://www.instagram.com/huberthung322",target:"blank"},r.a.createElement(x.b,null)),r.a.createElement("a",{className:"Contact-link",href:"mailto:huberth@umich.edu"},r.a.createElement(x.d,null)))))};n(37);var H=function(){var e={};function t(t,n){e[t]=n}function n(t){if(t in e){var n=.1*window.innerHeight,a=document.body.getBoundingClientRect().top,r=e[t].getBoundingClientRect().top-a-n;window.scrollTo({top:r,behavior:"smooth"})}}return r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center App"},r.a.createElement(E,{setRef:t,onClick:n}),r.a.createElement(h,{onClick:n}),r.a.createElement(N,{setRef:t}),r.a.createElement(d,{onClick:n,target:"Experience"}),r.a.createElement(C,{setRef:t}),r.a.createElement(d,{onClick:n,target:"Contact"}),r.a.createElement(A,{setRef:t}),r.a.createElement(d,{onClick:n,target:"Home"}))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(l.a,null,r.a.createElement(H,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hubert322.github.io",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/hubert322.github.io","/service-worker.js");R?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()}],[[20,1,2]]]);
//# sourceMappingURL=main.58b5cbad.chunk.js.map