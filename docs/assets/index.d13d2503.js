import{p as e}from"./vendor.bf7538fb.js";let t;const o={},r=function(e,r){if(!r||0===r.length)return e();if(void 0===t){const e=document.createElement("link").relList;t=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(r.map((e=>{if((e=`/${e}`)in o)return;o[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":t,r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},n=document.querySelector("tbody"),s=document.querySelector("meter"),a=document.querySelector(".meter"),d=document.querySelector("label"),i=document.querySelector("code");let l=0,p=0;window.addEventListener("load",(async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.register("./sw.js");let t=await Promise.all(Object.entries(e).map((e=>new Promise((async t=>{e[1].supported=await e[1].supported,e[1].supported&&p++,void 0!==e[1].supported&&l++,t(e)})))));t=t.sort(((e,t)=>!e[1].supported&&t[1].supported?1:e[1].supported&&!t[1].supported?-1:0)),t=[!0,!1,void 0].map((e=>t.filter((t=>t[1].supported===e)).sort(((e,t)=>(e=e[0].toLowerCase())>(t=t[0].toLowerCase())?1:e<t?-1:0)))).flat();for(const[e,r]of t){const t=document.createElement("tr");n.append(t);const o=document.createElement("td"),s=document.createElement("td");t.append(o),t.append(s);const a=document.createElement("a");a.textContent=e,a.href=r.documentation,o.append(a),s.classList.add("icon"),s.textContent=r.supported?"✅ Yes":void 0===r.supported?"🤷 Unknown":"🚫 No"}n.parentNode.hidden=!1;const o=`${Math.floor(p/l*100)}%`;s.max=l,s.low=Math.floor(.2*l),s.high=Math.floor(.8*l),s.optimum=Math.floor(.9*l),s.value=p,a.querySelector("span").style.width=o,s.value<s.low?a.classList.add("red"):s.value<=s.low&&s.value<=s.high?a.classList.add("orange"):a.classList.add("green"),d.textContent=o,d.parentNode.hidden=!1,i.textContent=navigator.userAgent,"share"in navigator&&r((()=>import("./share.72817cf4.js")),[]),/Apple/.test(navigator.vendor)&&r((()=>import("./pwacompat.e2d4ab51.js")),[])}));
