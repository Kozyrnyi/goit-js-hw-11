import{S as f,i as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="/goit-js-hw-11/assets/error_icon-4567d441.svg";function m(o){const i=`https://pixabay.com/api/?key=42305957-2425bb18c357c2a7b9cbd48a2&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>e.json())}function p({webformatURL:o,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:n}){return`<a href="${r}" class="gallery-item">
                <img src="${o}" alt="" title="${s}">
                <div class="info-block">
                    <div class="info-item likes">
                        <span>Likes</span>${i}
                    </div>
                    <div class="info-item views">
                        <span>Views</span>${e}
                    </div>
                    <div class="info-item comments">
                        <span>Comments</span>${t}
                    </div>
                    <div class="info-item downloads">
                        <span>Downloads</span>${n}
                    </div>
                </div>
            </a>`}function h(o){return o.map(p).join("")}function g(o,r){const s=h(r);o.insertAdjacentHTML("afterbegin",s)}const l=document.querySelector(".search-form"),a=document.querySelector(".items-wrap"),c=document.querySelector(".gallery");l.addEventListener("submit",y);function y(o){o.preventDefault(),c.innerHTML="";const r=l.elements.searchField.value.trim();r&&(a.classList.add("loading"),m(r).then(s=>{a.classList.remove("loading"),s.hits.length!==0?(g(c,s.hits),v()):b()}).catch(s=>{console.log(s),a.classList.remove("loading")}))}function v(){new f(".gallery a").refresh()}function b(){u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#EF4040",theme:"dark",iconUrl:d,position:"topRight",timeout:3e3,progressBarColor:"#B51B1B",animateInside:!1,transitionIn:"fadeIn"})}
//# sourceMappingURL=commonHelpers.js.map
