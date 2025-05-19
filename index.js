import{a as m,S as p,i}from"./assets/vendor-CrlV4O_2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="50315100-ca810647875799483dbf10da6",g="https://pixabay.com/api/";async function h(s){const a=await m.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("PIXABAY RESPONSE:",a.data),a.data.hits}let c;function v(s){const a=document.querySelector(".gallery"),o=s.map(({webformatURL:t,largeImageURL:e,tags:r,likes:n,views:d,comments:u,downloads:f})=>`
  <li class="card">
    <a class="card__link" href="${e}">
      <img class="card__img" src="${t}" alt="${r}" />
    </a>
    <div class="card__info">
      <div class="card__info-item">
        <span class="label">Likes</span>
        <span class="value">${n}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Views</span>
        <span class="value">${d}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Comments</span>
        <span class="value">${u}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Downloads</span>
        <span class="value">${f}</span>
      </div>
    </div>
  </li>
`).join("");a.insertAdjacentHTML("beforeend",o),c=new p(".gallery a"),c.refresh()}function _(){document.querySelector(".gallery").innerHTML=""}const l=document.querySelector(".search-form");document.querySelector(".gallery");function L(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}l.addEventListener("submit",async s=>{s.preventDefault();const o=new FormData(l).get("searchQuery").trim();if(!o){i.warning({title:"Warning",message:"Enter a search term"});return}_(),L();try{const t=await h(o);if(t.length===0){i.info({title:"Info",message:"No images found"});return}v(t)}catch(t){i.error({title:"Error",message:"Something went wrong"}),console.error(t)}finally{b()}});
//# sourceMappingURL=index.js.map
