import{a as m,i as l,S as u}from"./assets/vendor-2610a5a2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(o){const s=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${o.target.elements.search.value}&image_type=photo&orientation=horizontal&safesearch=true`;return(await m.get(s)).data}const n=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".btn");function f(o){o.hits.length===0&&l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const r=o.hits.map(s=>`
            <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
              <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
            </a>
            <div class="image-text">
             <div class="image-text-item">
              <h2>Likes</h2>
              <span class="span-size">${s.likes}</span>
             </div>
             <div class="image-text-item">
              <h2>Views</h2>
              <span class="span-size">${s.views}</span>
             </div>
             <div class="image-text-item">
              <h2>Comments</h2>
              <span class="span-size">${s.comments}</span>
             </div>
             <div class="image-text-item">
              <h2>Downloads</h2>
              <span class="span-size">${s.downloads}</span>
             </div>
            </div>
          </li>`).join("");n.innerHTML="",n.innerHTML=r,g.classList.add("hide"),h.classList.remove("hide")}const c=document.querySelector(".form"),d=document.querySelector(".loader"),y=document.querySelector(".btn");d.classList.add("hide");y.classList.add("hide");c.addEventListener("submit",o=>{o.preventDefault(),d.classList.remove("hide"),p(o).then(r=>f(r)).catch(r=>l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${r}`})),c.reset()});const v={captionSelector:"img",captionsData:"alt",captionDelay:250};new u(".gallery a",v).refresh();
//# sourceMappingURL=commonHelpers.js.map
