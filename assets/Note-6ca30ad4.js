import{_ as le,u as fe,s as de,r as he,o as L,c as F,a as c,b as J,w as me,t as B,d as p,e as pe,v as ge,f as W,F as K,g as Q,h as q,i as ve,n as ye,E as we,p as _e,j as Pe}from"./index-d7f298d9.js";const be="/nottee/assets/edit-95c6ab1a.svg",Ee="/nottee/assets/camara-c7452083.svg",xe="/nottee/assets/delete-793d3e56.svg";function Ae(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var Y={exports:{}};(function(E){(function(V){var l=ae(),m=se(),$=ue(),M=ce(),y={imagePlaceholder:void 0,cacheBust:!1},_={toSvg:g,toPng:Z,toJpeg:ee,toBlob:te,toPixelData:j,impl:{fontFaces:$,images:M,util:l,inliner:m,options:{}}};E.exports=_;function g(n,t){return t=t||{},ne(t),Promise.resolve(n).then(function(i){return z(i,t.filter,!0)}).then(re).then(oe).then(r).then(function(i){return ie(i,t.width||l.width(n),t.height||l.height(n))});function r(i){return t.bgcolor&&(i.style.backgroundColor=t.bgcolor),t.width&&(i.style.width=t.width+"px"),t.height&&(i.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach(function(f){i.style[f]=t.style[f]}),i}}function j(n,t){return H(n,t||{}).then(function(r){return r.getContext("2d").getImageData(0,0,l.width(n),l.height(n)).data})}function Z(n,t){return H(n,t||{}).then(function(r){return r.toDataURL()})}function ee(n,t){return t=t||{},H(n,t).then(function(r){return r.toDataURL("image/jpeg",t.quality||1)})}function te(n,t){return H(n,t||{}).then(l.canvasToBlob)}function ne(n){typeof n.imagePlaceholder>"u"?_.impl.options.imagePlaceholder=y.imagePlaceholder:_.impl.options.imagePlaceholder=n.imagePlaceholder,typeof n.cacheBust>"u"?_.impl.options.cacheBust=y.cacheBust:_.impl.options.cacheBust=n.cacheBust}function H(n,t){return g(n,t).then(l.makeImage).then(l.delay(100)).then(function(i){var f=r(n);return f.getContext("2d").drawImage(i,0,0),f});function r(i){var f=document.createElement("canvas");if(f.width=t.width||l.width(i),f.height=t.height||l.height(i),t.bgcolor){var u=f.getContext("2d");u.fillStyle=t.bgcolor,u.fillRect(0,0,f.width,f.height)}return f}}function z(n,t,r){if(!r&&t&&!t(n))return Promise.resolve();return Promise.resolve(n).then(i).then(function(o){return f(n,o,t)}).then(function(o){return u(n,o)});function i(o){return o instanceof HTMLCanvasElement?l.makeImage(o.toDataURL()):o.cloneNode(!1)}function f(o,a,b){var T=o.childNodes;if(T.length===0)return Promise.resolve(a);return v(a,l.asArray(T),b).then(function(){return a});function v(D,x,w){var A=Promise.resolve();return x.forEach(function(N){A=A.then(function(){return z(N,w)}).then(function(C){C&&D.appendChild(C)})}),A}}function u(o,a){if(!(a instanceof Element))return a;return Promise.resolve().then(b).then(T).then(v).then(D).then(function(){return a});function b(){x(window.getComputedStyle(o),a.style);function x(w,A){w.cssText?A.cssText=w.cssText:N(w,A);function N(C,k){l.asArray(C).forEach(function(e){k.setProperty(e,C.getPropertyValue(e),C.getPropertyPriority(e))})}}}function T(){[":before",":after"].forEach(function(w){x(w)});function x(w){var A=window.getComputedStyle(o,w),N=A.getPropertyValue("content");if(N===""||N==="none")return;var C=l.uid();a.className=a.className+" "+C;var k=document.createElement("style");k.appendChild(e(C,w,A)),a.appendChild(k);function e(s,h,d){var P="."+s+":"+h,S=d.cssText?X(d):G(d);return document.createTextNode(P+"{"+S+"}");function X(I){var U=I.getPropertyValue("content");return I.cssText+" content: "+U+";"}function G(I){return l.asArray(I).map(U).join("; ")+";";function U(O){return O+": "+I.getPropertyValue(O)+(I.getPropertyPriority(O)?" !important":"")}}}}}function v(){o instanceof HTMLTextAreaElement&&(a.innerHTML=o.value),o instanceof HTMLInputElement&&a.setAttribute("value",o.value)}function D(){a instanceof SVGElement&&(a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a instanceof SVGRectElement&&["width","height"].forEach(function(x){var w=a.getAttribute(x);w&&a.style.setProperty(x,w)}))}}}function re(n){return $.resolveAll().then(function(t){var r=document.createElement("style");return n.appendChild(r),r.appendChild(document.createTextNode(t)),n})}function oe(n){return M.inlineAll(n).then(function(){return n})}function ie(n,t,r){return Promise.resolve(n).then(function(i){return i.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(i)}).then(l.escapeXhtml).then(function(i){return'<foreignObject x="0" y="0" width="100%" height="100%">'+i+"</foreignObject>"}).then(function(i){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+i+"</svg>"}).then(function(i){return"data:image/svg+xml;charset=utf-8,"+i})}function ae(){return{escape:D,parseExtension:t,mimeType:r,dataAsUrl:v,isDataUrl:i,canvasToBlob:u,resolveUrl:o,getAndEncode:T,uid:a(),delay:x,asArray:w,escapeXhtml:A,makeImage:b,width:N,height:C};function n(){var e="application/font-woff",s="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:s,jpeg:s,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var s=/\.([^\.\/]*?)$/g.exec(e);return s?s[1]:""}function r(e){var s=t(e).toLowerCase();return n()[s]||""}function i(e){return e.search(/^(data:)/)!==-1}function f(e){return new Promise(function(s){for(var h=window.atob(e.toDataURL().split(",")[1]),d=h.length,P=new Uint8Array(d),S=0;S<d;S++)P[S]=h.charCodeAt(S);s(new Blob([P],{type:"image/png"}))})}function u(e){return e.toBlob?new Promise(function(s){e.toBlob(s)}):f(e)}function o(e,s){var h=document.implementation.createHTMLDocument(),d=h.createElement("base");h.head.appendChild(d);var P=h.createElement("a");return h.body.appendChild(P),d.href=s,P.href=e,P.href}function a(){var e=0;return function(){return"u"+s()+e++;function s(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function b(e){return new Promise(function(s,h){var d=new Image;d.onload=function(){s(d)},d.onerror=h,d.src=e})}function T(e){var s=3e4;return _.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime()),new Promise(function(h){var d=new XMLHttpRequest;d.onreadystatechange=X,d.ontimeout=G,d.responseType="blob",d.timeout=s,d.open("GET",e,!0),d.send();var P;if(_.impl.options.imagePlaceholder){var S=_.impl.options.imagePlaceholder.split(/,/);S&&S[1]&&(P=S[1])}function X(){if(d.readyState===4){if(d.status!==200){P?h(P):I("cannot fetch resource: "+e+", status: "+d.status);return}var U=new FileReader;U.onloadend=function(){var O=U.result.split(/,/)[1];h(O)},U.readAsDataURL(d.response)}}function G(){P?h(P):I("timeout of "+s+"ms occured while fetching resource: "+e)}function I(U){console.error(U),h("")}})}function v(e,s){return"data:"+s+";base64,"+e}function D(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function x(e){return function(s){return new Promise(function(h){setTimeout(function(){h(s)},e)})}}function w(e){for(var s=[],h=e.length,d=0;d<h;d++)s.push(e[d]);return s}function A(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function N(e){var s=k(e,"border-left-width"),h=k(e,"border-right-width");return e.scrollWidth+s+h}function C(e){var s=k(e,"border-top-width"),h=k(e,"border-bottom-width");return e.scrollHeight+s+h}function k(e,s){var h=window.getComputedStyle(e).getPropertyValue(s);return parseFloat(h.replace("px",""))}}function se(){var n=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:f,shouldProcess:t,impl:{readUrls:r,inline:i}};function t(u){return u.search(n)!==-1}function r(u){for(var o=[],a;(a=n.exec(u))!==null;)o.push(a[1]);return o.filter(function(b){return!l.isDataUrl(b)})}function i(u,o,a,b){return Promise.resolve(o).then(function(v){return a?l.resolveUrl(v,a):v}).then(b||l.getAndEncode).then(function(v){return l.dataAsUrl(v,l.mimeType(o))}).then(function(v){return u.replace(T(o),"$1"+v+"$3")});function T(v){return new RegExp(`(url\\(['"]?)(`+l.escape(v)+`)(['"]?\\))`,"g")}}function f(u,o,a){if(b())return Promise.resolve(u);return Promise.resolve(u).then(r).then(function(T){var v=Promise.resolve(u);return T.forEach(function(D){v=v.then(function(x){return i(x,D,o,a)})}),v});function b(){return!t(u)}}}function ue(){return{resolveAll:n,impl:{readAll:t}};function n(){return t().then(function(r){return Promise.all(r.map(function(i){return i.resolve()}))}).then(function(r){return r.join(`
`)})}function t(){return Promise.resolve(l.asArray(document.styleSheets)).then(i).then(r).then(function(u){return u.map(f)});function r(u){return u.filter(function(o){return o.type===CSSRule.FONT_FACE_RULE}).filter(function(o){return m.shouldProcess(o.style.getPropertyValue("src"))})}function i(u){var o=[];return u.forEach(function(a){try{l.asArray(a.cssRules||[]).forEach(o.push.bind(o))}catch(b){console.log("Error while reading CSS rules from "+a.href,b.toString())}}),o}function f(u){return{resolve:function(){var a=(u.parentStyleSheet||{}).href;return m.inlineAll(u.cssText,a)},src:function(){return u.style.getPropertyValue("src")}}}}}function ce(){return{inlineAll:t,impl:{newImage:n}};function n(r){return{inline:i};function i(f){return l.isDataUrl(r.src)?Promise.resolve():Promise.resolve(r.src).then(f||l.getAndEncode).then(function(u){return l.dataAsUrl(u,l.mimeType(r.src))}).then(function(u){return new Promise(function(o,a){r.onload=o,r.onerror=a,r.src=u})})}}function t(r){if(!(r instanceof Element))return Promise.resolve(r);return i(r).then(function(){return r instanceof HTMLImageElement?n(r).inline():Promise.all(l.asArray(r.childNodes).map(function(f){return t(f)}))});function i(f){var u=f.style.getPropertyValue("background");return u?m.inlineAll(u).then(function(o){f.style.setProperty("background",o,f.style.getPropertyPriority("background"))}).then(function(){return f}):Promise.resolve(f)}}}})()})(Y);var Ce=Y.exports;const Te=Ae(Ce);const R=E=>(_e("data-v-f20f0547"),E=E(),Pe(),E),Se={class:"header"},ke=R(()=>c("span",null,null,-1)),Ie={class:"note-container"},Ue={class:"row row-2"},Be={class:"note roasted"},Ne={class:"note grinder"},De=R(()=>c("br",null,null,-1)),Re={class:"row row-3"},Le={class:"note dripper"},Fe={class:"note gram"},Ve={class:"note temperature"},Me={class:"row"},je={class:"note strategy"},Oe={class:"time"},$e=R(()=>c("p",null,"T",-1)),He={class:"parameter-wrap"},Xe={class:"water"},Ge=R(()=>c("p",null,"ml",-1)),We={class:"parameter-wrap"},qe={class:"btn-group"},ze=R(()=>c("img",{src:be,alt:""},null,-1)),Je=[ze],Ke=["disabled"],Qe=R(()=>c("img",{src:Ee,alt:""},null,-1)),Ye=[Qe],Ze=R(()=>c("img",{src:xe,alt:""},null,-1)),et=[Ze],tt={key:0},nt={__name:"Note",setup(E){const V=fe(),{isEdit:l,currentNote:m}=de(V),$=M=>{const y=document.getElementById("note");Te.toPng(y).then(_=>{const g=document.createElement("a");g.href=_,g.download=`${M}.png`,document.body.appendChild(g),g.click(),document.body.removeChild(g)}).catch(_=>{console.error("Error:",_)})};return(M,y)=>{const _=he("router-link");return L(),F("div",{id:"note",class:ye(["container",{light:p(m).roasted==="淺焙",medium:p(m).roasted==="中焙",dark:p(m).roasted==="深焙"}])},[c("div",Se,[J(_,{to:"/"},{default:me(()=>[W(" ← ")]),_:1}),c("h3",null,B(p(m).title),1),c("div",{class:"done-btn",onClick:y[1]||(y[1]=g=>p(V).doneNote(p(m)))},[pe(c("input",{"onUpdate:modelValue":y[0]||(y[0]=g=>p(m).isDone=g),type:"checkbox"},null,512),[[ge,p(m).isDone]]),ke])]),c("div",Ie,[c("div",Ue,[c("div",Be,[c("p",null,B(p(m).roasted),1)]),c("div",Ne,[c("p",null,[W(B(p(m).grinder),1),De,W(B(p(m).fine),1)])])]),c("div",Re,[c("div",Le,[c("p",null,B(p(m).dripper),1)]),c("div",Fe,[c("p",null,B(p(m).gram)+"g",1)]),c("div",Ve,[c("p",null,B(p(m).temperature)+"°c",1)])]),c("div",Me,[c("div",je,[c("div",Oe,[$e,c("div",He,[(L(!0),F(K,null,Q(p(m).strategy,(g,j)=>(L(),F("p",{key:j},B(g.time),1))),128))])]),c("div",Xe,[Ge,c("div",We,[(L(!0),F(K,null,Q(p(m).strategy,(g,j)=>(L(),F("p",{key:j},B(g.water),1))),128))])])])])]),c("div",qe,[c("button",{type:"button",onClick:y[2]||(y[2]=q(g=>(l.value=!p(l),p(V).setTempNote()),["prevent"]))},Je),c("button",{type:"button",disabled:!p(m).isDone,onClick:y[3]||(y[3]=q(g=>$(p(m).title),["prevent"]))},Ye,8,Ke),c("button",{type:"button",onClick:y[4]||(y[4]=q(g=>p(V).removeNote(p(m).title),["prevent"]))},et)]),p(l)?(L(),F("div",tt,[J(we)])):ve("",!0)],2)}}},ot=le(nt,[["__scopeId","data-v-f20f0547"]]);export{ot as default};
