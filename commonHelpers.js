import{a as S,i as c,S as w}from"./assets/vendor-427610a5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();let f;async function y(e,o,r){const n=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:r}),s=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${e}&${n}`,a=await S.get(s);return f=a.data.totalHits,a.data}let l;function b(e){return l=e.hits.length,l===0&&c.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),e.hits.map(r=>`
            <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
              <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="image-text">
             <div class="image-text-item">
              <h2>Likes</h2>
              <span class="span-size">${r.likes}</span>
             </div>
             <div class="image-text-item">
              <h2>Views</h2>
              <span class="span-size">${r.views}</span>
             </div>
             <div class="image-text-item">
              <h2>Comments</h2>
              <span class="span-size">${r.comments}</span>
             </div>
             <div class="image-text-item">
              <h2>Downloads</h2>
              <span class="span-size">${r.downloads}</span>
             </div>
            </div>
          </li>`).join("")}let i=1,p=15,u;const d=document.querySelector(".gallery"),m=document.querySelector(".form"),L=document.querySelector(".loader"),h=document.querySelector(".btn"),$={captionSelector:"img",captionsData:"alt",captionDelay:250};let g;const k=new w(".gallery a",$);m.addEventListener("submit",e=>{e.preventDefault(),i=1,g=e.target.elements.search.value.trim(),y(g,i,p).then(o=>b(o)).then(o=>x(o)).catch(o=>c.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${o}`})),m.reset()});h.addEventListener("click",()=>{z(),i+=1,y(g,i,p).then(e=>b(e)).then(e=>x(e)).catch(e=>c.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${e}`})),m.reset()});function x(e){i===1?(d.innerHTML="",d.innerHTML=e):d.insertAdjacentHTML("beforeend",e),C(),l===0?v():P(),R(),k.refresh()}function z(){L.classList.remove("hidden")}function C(){L.classList.add("hidden")}function P(){h.classList.remove("hidden")}function v(){h.classList.add("hidden")}function R(){u=Math.ceil(f/p),i>=u&&l!==0&&(v(),c.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}
//# sourceMappingURL=commonHelpers.js.map
