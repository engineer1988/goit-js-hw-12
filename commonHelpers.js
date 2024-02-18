import{a as w,i as d,S as $}from"./assets/vendor-427610a5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();let f;async function y(e,o,r){const n=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:r}),s=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${e}&${n}`,a=await w.get(s);return f=a.data.totalHits,a.data}let c;function b(e){return c=e.hits.length,c===0&&d.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),e.hits.map(r=>`
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
          </li>`).join("")}let i=1,h=15,p,L;const l=document.querySelector(".gallery");document.querySelector(".gallery-item");const g=document.querySelector(".form"),v=document.querySelector(".loader"),u=document.querySelector(".btn"),k={captionSelector:"img",captionsData:"alt",captionDelay:250};let m;const z=new $(".gallery a",k);g.addEventListener("submit",e=>{e.preventDefault(),i=1,m=e.target.elements.search.value.trim(),y(m,i,h).then(o=>b(o)).then(o=>x(o)).catch(o=>d.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${o}`})),g.reset()});u.addEventListener("click",()=>{C(),i+=1,y(m,i,h).then(e=>b(e)).then(e=>x(e)).catch(e=>d.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${e}`})),g.reset()});function x(e){i===1?(l.innerHTML="",l.innerHTML=e):l.insertAdjacentHTML("beforeend",e),L=l.getBoundingClientRect().height/2,R(),B(),P(),z.refresh(),H()}function C(){v.classList.remove("hidden")}function R(){v.classList.add("hidden")}function q(){u.classList.remove("hidden")}function S(){u.classList.add("hidden")}function B(){c===0?S():q()}function P(){p=Math.ceil(f/h),i>=p&&c!==0&&(S(),d.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}function H(){window.scrollBy({top:L,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
