import{a as g,i as p,S as h}from"./assets/vendor-427610a5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function f(s,t){const o=`https://pixabay.com/api/?key=42241202-737945e445eb9c5ec6bcca7e8&q=${s}&${t}`;return(await g.get(o)).data}let u;function y(s){return s.hits.length===0&&(u=s.hits.length,p.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),s.hits.map(a=>`
            <li class="gallery-item">
            <a class="gallery-link" href="${a.largeImageURL}">
              <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" />
            </a>
            <div class="image-text">
             <div class="image-text-item">
              <h2>Likes</h2>
              <span class="span-size">${a.likes}</span>
             </div>
             <div class="image-text-item">
              <h2>Views</h2>
              <span class="span-size">${a.views}</span>
             </div>
             <div class="image-text-item">
              <h2>Comments</h2>
              <span class="span-size">${a.comments}</span>
             </div>
             <div class="image-text-item">
              <h2>Downloads</h2>
              <span class="span-size">${a.downloads}</span>
             </div>
            </div>
          </li>`).join("")}const c=document.querySelector(".gallery"),d=document.querySelector(".form"),l=document.querySelector(".loader"),n=document.querySelector(".btn"),L={captionSelector:"img",captionsData:"alt",captionDelay:250};let v=1,b=15;const x=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,page:v,per_page:b});let m;l.classList.add("hide");n.classList.add("hide");const S=new h(".gallery a",L);d.addEventListener("submit",s=>{s.preventDefault(),m=s.target.elements.search.value,l.classList.remove("hide"),f(m,x).then(t=>y(t)).then(t=>$(t)).catch(t=>p.error({maxWidth:"432px",messageColor:"rgb(250, 250, 251)",messageSize:"16px",backgroundColor:"rgb(239, 64, 64)",position:"topRight",message:`${t}`})),d.reset()});function $(s){c.innerHTML="",c.innerHTML=s,u===0?n.classList.add("hide"):n.classList.remove("hide"),S.refresh(),l.classList.add("hide")}
//# sourceMappingURL=commonHelpers.js.map
