import{a as b,S as w,i}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const S="50315100-ca810647875799483dbf10da6",q="https://pixabay.com/api/";async function u(o,r=1){return(await b.get(q,{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}let d;function m(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:c,largeImageURL:e,tags:t,likes:a,views:g,comments:v,downloads:L})=>`
    <li class="card">
      <a class="card__link" href="${e}">
        <img class="card__img" src="${c}" alt="${t}" />
      </a>
      <div class="card__info">
  <div class="info-item">
    <p class="label">Likes</p>
    <p class="value">${a}</p>
  </div>
  <div class="info-item">
    <p class="label">Views</p>
    <p class="value">${g}</p>
  </div>
  <div class="info-item">
    <p class="label">Comments</p>
    <p class="value">${v}</p>
  </div>
  <div class="info-item">
    <p class="label">Downloads</p>
    <p class="value">${L}</p>
  </div>
</div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",s),d=new w(".gallery a"),d.refresh()}function _(){document.querySelector(".gallery").innerHTML=""}function f(){document.querySelector(".loader").classList.remove("hidden")}function p(){document.querySelector(".loader").classList.add("hidden")}function E(){document.querySelector(".load-more").classList.remove("hidden")}function y(){document.querySelector(".load-more").classList.add("hidden")}const P=document.querySelector(".search-form"),B=document.querySelector(".load-more");let n=1,l="";const h=15;P.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.searchQuery.value.trim();if(!r){i.warning({title:"Warning",message:"Enter a search term"});return}l=r,n=1,_(),y(),f();try{const s=await u(l,n);if(s.hits.length===0){i.info({title:"Info",message:"No images found"});return}m(s.hits),s.totalHits>h&&E()}catch{i.error({title:"Error",message:"Something went wrong"})}finally{p()}});B.addEventListener("click",async()=>{n++,f();try{const o=await u(l,n);m(o.hits);const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"}),n*h>=o.totalHits&&(y(),i.info({message:"We're sorry, but you've reached the end of search results."}))}catch{i.error({message:"Failed to load more images"})}finally{p()}});
//# sourceMappingURL=index.js.map
