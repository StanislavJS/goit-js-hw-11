import{a as m,S as p,i as o}from"./assets/vendor-1AYLTIiv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(a){const r="https://pixabay.com/api/",s={q:a,key:"50332373-9569dbbbff196a639bf3485f1",image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(r,{params:s}).then(i=>i.data).catch(i=>{throw new Error("Error!")})}let g=new p(".gallery a");const l=document.querySelector(".gallery"),u=document.querySelector(".loader");function y(a){l.innerHTML=a.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:d})=>`
      <li class="gallery-item">
        <a href="${s}" class="gallery-link">
          <img src="${r}" alt="${i}" />
        </a>
        <div class="image-descr">
          <div class="image-descr-box">
            <p class="image-subtitle">likes</p>
            <span class="image-subtitle-quantity">${e}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">views</p>
            <span class="image-subtitle-quantity">${t}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">comments</p>
            <span class="image-subtitle-quantity">${n}</span>
          </div>
          <div class="image-descr-box">
            <p class="image-subtitle">downloads</p>
            <span class="image-subtitle-quantity">${d}</span>
          </div>
        </div>
      </li>
        `).join(""),g.refresh()}function h(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const c=document.querySelector(".form"),L=c.querySelector('input[name="search-text"]');c.addEventListener("submit",q);function q(a){a.preventDefault();const r=L.value.trim().toLowerCase();if(!r){o.warning({message:"The input field is empty, try again.",position:"center"});return}h(),b(),f(r).then(s=>{if(s.hits.length===0){o.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}const i=s.hits;y(i),c.reset()}).catch(s=>{o.warning({message:"An error occurred. Please try again later.",position:"center"}),console.error(s)}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
