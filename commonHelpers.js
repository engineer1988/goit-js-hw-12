import{a as w,i as l,S as $}from"./assets/vendor-427610a5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();let p;async function f(e,o,r){const i=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:r}),s=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${e}&${i}`,a=await w.get(s);return p=a.data.totalHits,a.data}let y;function b(e){return e.hits.length===0&&(y=e.hits.length,l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),e.hits.map(r=>`
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
          </li>`).join("")}let n=1,g=15,u;const c=document.querySelector(".gallery"),d=document.querySelector(".form"),L=document.querySelector(".loader"),h=document.querySelector(".btn"),k={captionSelector:"img",captionsData:"alt",captionDelay:250};let m;const z=new $(".gallery a",k);d.addEventListener("submit",e=>{e.preventDefault(),m=e.target.elements.search.value.trim(),v(),n=1,f(m,n,g).then(o=>b(o)).then(o=>x(o)).catch(o=>l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${o}`})),d.reset()});h.addEventListener("click",()=>{v(),n+=1,f(m,n,g).then(e=>b(e)).then(e=>x(e)).catch(e=>l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${e}`})),d.reset()});function x(e){n===1?(c.innerHTML="",c.innerHTML=e):c.insertAdjacentHTML("beforeend",e),R(),z.refresh(),C(),q()}function v(){L.classList.remove("hidden")}function C(){L.classList.add("hidden")}function P(){h.classList.remove("hidden")}function S(){h.classList.add("hidden")}function R(){y===0?S():P()}function q(){if(u=Math.ceil(p/g),n>=u)return S(),l.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=commonHelpers.js.map
