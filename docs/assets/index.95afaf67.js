import{p as e}from"./vendor.fe20f9e1.js";let t;const o={},r=document.querySelector("tbody"),n=document.querySelector("meter"),s=document.querySelector(".meter"),d=document.querySelector("label"),a=document.querySelector("code");let l=0,i=0;window.addEventListener("load",(async()=>{await navigator.serviceWorker.register("./sw.js");let c=await Promise.all(Object.entries(e).map((e=>new Promise((async t=>{e[1].supported=await e[1].supported,e[1].supported&&i++,void 0!==e[1].supported&&l++,t(e)})))));c=c.sort(((e,t)=>!e[1].supported&&t[1].supported?1:e[1].supported&&!t[1].supported?-1:0)),c=[!0,!1,void 0].map((e=>c.filter((t=>t[1].supported===e)).sort(((e,t)=>(e=e[0].toLowerCase())>(t=t[0].toLowerCase())?1:e<t?-1:0)))).flat();for(const[e,t]of c){const o=document.createElement("tr");r.append(o);const n=document.createElement("td"),s=document.createElement("td");o.append(n),o.append(s);const d=document.createElement("a");d.textContent=e,d.href=t.documentation,n.append(d),s.classList.add("icon"),s.textContent=t.supported?"✅":void 0===t.supported?"🤷":"🚫"}r.parentNode.hidden=!1;const p=`${Math.floor(i/l*100)}%`;n.max=l,n.low=Math.floor(.2*l),n.high=Math.floor(.8*l),n.optimum=Math.floor(.9*l),n.value=i,s.querySelector("span").style.width=p,n.value<n.low?s.classList.add("red"):n.value<=n.low&&n.value<=n.high?s.classList.add("orange"):s.classList.add("green"),d.textContent=p,d.parentNode.hidden=!1,a.textContent=navigator.userAgent,"share"in navigator&&function(e,r){if(!r)return e();if(void 0===t){const e=document.createElement("link").relList;t=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}Promise.all(r.map((e=>{if(e in o)return;o[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":t,r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./share.04660ae3.js")),void 0)}));