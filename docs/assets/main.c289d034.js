import{p as e,s as t}from"./vendor.bf730d6e.js";let o;const n={},r=function(e,t){if(!t||0===t.length)return e();if(void 0===o){const e=document.createElement("link").relList;o=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in n)return;n[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":o,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))},a=document.querySelector("tbody"),s=document.querySelector("meter"),d=document.querySelector(".meter"),i=document.querySelector("label"),l=document.querySelector("code"),p=document.querySelector("template");let c=0,u=0;const m=(e,t)=>{const o=e.target.closest("svg").nextElementSibling,n=new Date(t.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});o.hidden=!1,o.textContent=`On ${n} on ${t.value.toFixed(6)}% of pages`,o.style.top=`${e.offsetY}px`,o.style.left=`${e.offsetX+20}px`},h=e=>{e.target.closest("svg").nextElementSibling.hidden=!0},f=async(e,o)=>{let n=await fetch("https://chromestatus.com/data/timeline/featurepopularity?bucket_id="+o).then((e=>e.json()));if(n=n.map((e=>({date:e.date,value:100*e.day_percentage}))),0===n.filter((e=>0!==e.value)).length){const t=e.parentNode.parentNode;return e.parentNode.remove(),void(t.textContent="No data")}t.sparkline(e,n,{onmousemove:m,onmouseout:h}),e.setAttribute("width","100%"),e.setAttribute("height","100%")};window.addEventListener("load",(async()=>{"serviceWorker"in navigator&&await navigator.serviceWorker.register("./sw.js");let t=await Promise.all(Object.entries(e).map((e=>new Promise((async t=>{e[1].supported=await e[1].supported,e[1].supported&&u++,void 0!==e[1].supported&&c++,t(e)})))));t=t.sort(((e,t)=>!e[1].supported&&t[1].supported?1:e[1].supported&&!t[1].supported?-1:0)),t=[!0,!1,void 0].map((e=>t.filter((t=>t[1].supported===e)).sort(((e,t)=>(e=e[0].toLowerCase())>(t=t[0].toLowerCase())?1:e<t?-1:0)))).flat();for(const[e,n]of t){const t=document.createElement("tr");a.append(t);const o=document.createElement("td"),r=document.createElement("td"),s=document.createElement("td");t.append(o),t.append(r),t.append(s);const d=document.createElement("a");if(d.textContent=e,d.href=n.documentation,o.append(d),r.classList.add("icon"),r.textContent=n.supported?"✅ Yes":void 0===n.supported?"🤷 Unknown":"🚫 No",n.blinkFeatureID){const e=p.content.cloneNode(!0),t=e.querySelector("svg"),o=e.querySelector("span"),r=document.createElement("a");r.href=`https://chromestatus.com/metrics/feature/timeline/popularity/${n.blinkFeatureID}`,s.append(r),r.append(t),r.append(o),f(t,n.blinkFeatureID)}else s.textContent="No data"}a.parentNode.hidden=!1;const o=`${Math.floor(u/c*100)}%`;s.max=c,s.low=Math.floor(.2*c),s.high=Math.floor(.8*c),s.optimum=Math.floor(.9*c),s.value=u,d.querySelector("span").style.width=o,s.value<s.low?d.classList.add("red"):s.value<=s.low&&s.value<=s.high?d.classList.add("orange"):d.classList.add("green"),i.textContent=o,i.parentNode.hidden=!1,l.textContent=navigator.userAgent,"share"in navigator&&r((()=>import("./share.5141a68a.js")),[]),/Apple/.test(navigator.vendor)&&r((()=>import("./pwacompat.e2d4ab51.js")),[])}));
