var k=Object.defineProperty;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&w(e,o,t[o]);if(i)for(var o of i(t))m.call(t,o)&&w(e,o,t[o]);return e};var p=(e,t)=>{var o={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(o[r]=e[r]);return o};import{j as g,l as v,f as x,a as y,b as R,c as N,d as T,R as j,e as L,H as A,g as F,h as c,F as O,r as E}from"./vendor.ef06624e.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};M();const n=g.exports.jsx,l=g.exports.jsxs,q=new URL("/assets/logo.51cbb2c8.png",self.location).href;function I(e){return n("img",d({src:q},e))}function S(o){var r=o,{className:e}=r,t=p(r,["className"]);return n("button",d({className:"btn "+e},t))}v.add(x,y,R,N,T);function B({href:e=""}){return()=>{window.open(e,"_blank")}}const C=[{text:"Twitch",icon:"twitch",background:"var(--twitch)",href:"https://twitch.tv/strangewolflive"},{text:"Facebook",icon:"facebook",background:"var(--facebook)",href:"https://www.facebook.com/strangewolfofficial"},{text:"Twitter",icon:"twitter-square",background:"var(--twitter)",href:"https://twitter.com/strangewolflive"},{text:"TikTok",icon:"tiktok",background:"var(--tiktok)",href:"https://tiktok.com/@strangewolflive"},{text:"Exclusive Merch",icon:["fas","tshirt"],background:"var(--bs-gray-400)",href:"https://www.bonfire.com/store/strangewolflive/"}],b=()=>n("div",{className:"vh-100 d-flex flex-column overflow-hidden",style:{background:"var(--bs-secondary)"},children:l("div",{className:"mx-auto mt-5 p-3 pt-0 shadow",style:{background:"var(--bs-white)",maxWidth:350},children:[n(I,{style:{width:320,height:320}}),n("div",{className:"d-grid gap-2 mx-auto",children:C.map(({text:e,icon:t,background:o,href:r},s)=>l(S,{className:"btn-lg text-start",style:{background:o},onClick:B({href:r}),children:[n(O,{icon:Array.isArray(t)?t:["fab",t]}),"\xA0",n("strong",{children:e})]},s))})]})}),u=({to:e})=>(E.exports.useEffect(()=>{location.href=e}),null);j.render(n(L.StrictMode,{children:l(A,{children:[n(b,{}),l(F,{children:[n(c,{path:"",element:n(b,{})}),n(c,{path:"twitch",element:n(u,{to:"https://twitch.tv/strangewolflive"})}),n(c,{path:"facebook",element:n(u,{to:"https://www.facebook.com/strangewolfofficial"})}),n(c,{path:"merch",element:n(u,{to:"https://www.bonfire.com/store/strangewolflive/"})})]})]})}),document.getElementById("app"));
