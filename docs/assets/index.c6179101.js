import{p as e}from"./vendor.bf7538fb.js";let t;const o={},r=document.querySelector("tbody"),n=document.querySelector("meter"),d=document.querySelector(".meter"),s=document.querySelector("label"),a=document.querySelector("code");let l=0,i=0;window.addEventListener("load",(async()=>{await navigator.serviceWorker.register("./sw.js");let c=await Promise.all(Object.entries(e).map((e=>new Promise((async t=>{e[1].supported=await e[1].supported,e[1].supported&&i++,void 0!==e[1].supported&&l++,t(e)})))));c=c.sort(((e,t)=>!e[1].supported&&t[1].supported?1:e[1].supported&&!t[1].supported?-1:0)),c=[!0,!1,void 0].map((e=>c.filter((t=>t[1].supported===e)).sort(((e,t)=>(e=e[0].toLowerCase())>(t=t[0].toLowerCase())?1:e<t?-1:0)))).flat();for(const[e,t]of c){const o=document.createElement("tr");r.append(o);const n=document.createElement("td"),d=document.createElement("td");o.append(n),o.append(d);const s=document.createElement("a");s.textContent=e,s.href=t.documentation,n.append(s),d.classList.add("icon"),d.textContent=t.supported?"✅":void 0===t.supported?"🤷":"🚫"}r.parentNode.hidden=!1;const p=`${Math.floor(i/l*100)}%`;n.max=l,n.low=Math.floor(.2*l),n.high=Math.floor(.8*l),n.optimum=Math.floor(.9*l),n.value=i,d.querySelector("span").style.width=p,n.value<n.low?d.classList.add("red"):n.value<=n.low&&n.value<=n.high?d.classList.add("orange"):d.classList.add("green"),s.textContent=p,s.parentNode.hidden=!1,a.textContent=navigator.userAgent,"share"in navigator&&function(e,r){if(!r||0===r.length)return e();if(void 0===t){const e=document.createElement("link").relList;t=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}Promise.all(r.map((e=>{if((e=`/${e}`)in o)return;o[e]=!0;const r=e.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const d=document.createElement("link");return d.rel=r?"stylesheet":t,r||(d.as="script",d.crossOrigin=""),d.href=e,document.head.appendChild(d),r?new Promise(((e,t)=>{d.addEventListener("load",e),d.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./share.0777bdad.js")),[])}));
