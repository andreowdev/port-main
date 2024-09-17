import{g as vn,R as Te,r as te,j as m}from"./index-jYC2OvX-.js";import{u as xn,H as wn,F as An}from"./footer-Ci3OCa8H.js";const at={_origin:"https://api.emailjs.com"},kn=(t,e="https://api.emailjs.com")=>{at._userID=t,at._origin=e},Ie=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ee{constructor(e){this.status=e.status,this.text=e.responseText}}const _e=(t,e,n={})=>new Promise((a,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:i})=>{const o=new ee(i);o.status===200||o.text==="OK"?a(o):r(o)}),s.addEventListener("error",({target:i})=>{r(new ee(i))}),s.open("POST",at._origin+t,!0),Object.keys(n).forEach(i=>{s.setRequestHeader(i,n[i])}),s.send(e)}),On=(t,e,n,a)=>{const r=a||at._userID;return Ie(r,t,e),_e("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},Nn=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},Sn=(t,e,n,a)=>{const r=a||at._userID,s=Nn(n);Ie(r,t,e);const i=new FormData(s);return i.append("lib_version","3.2.0"),i.append("service_id",t),i.append("template_id",e),i.append("user_id",r),_e("/api/v1.0/email/send-form",i)},Pn={init:kn,send:On,sendForm:Sn},En={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},ne=()=>{};let Ut={},je={},Fe=null,Me={mark:ne,measure:ne};try{typeof window<"u"&&(Ut=window),typeof document<"u"&&(je=document),typeof MutationObserver<"u"&&(Fe=MutationObserver),typeof performance<"u"&&(Me=performance)}catch{}const{userAgent:ae=""}=Ut.navigator||{},D=Ut,h=je,re=Fe,lt=Me;D.document;const L=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Le=~ae.indexOf("MSIE")||~ae.indexOf("Trident/");var b="classic",Re="duotone",O="sharp",N="sharp-duotone",Cn=[b,Re,O,N],Tn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},se={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},In=["kit"],_n=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,jn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Fn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Mn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ln={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Rn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},zn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Dn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ze={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Yn=["solid","regular","light","thin","duotone","brands"],De=[1,2,3,4,5,6,7,8,9,10],Wn=De.concat([11,12,13,14,15,16,17,18,19,20]),Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Un=[...Object.keys(Rn),...Yn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY].concat(De.map(t=>"".concat(t,"x"))).concat(Wn.map(t=>"w-".concat(t))),Hn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Gn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ie={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const F="___FONT_AWESOME___",Nt=16,Ye="fa",We="svg-inline--fa",G="data-fa-i2svg",St="data-fa-pseudo-element",Bn="data-fa-pseudo-element-pending",Ht="data-prefix",Xt="data-icon",oe="fontawesome-i2svg",Vn="async",$n=["HTML","HEAD","STYLE","SCRIPT"],Ue=(()=>{try{return!0}catch{return!1}})(),He=[b,O,N];function it(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[b]}})}const Xe={...ze};Xe[b]={...ze[b],...se.kit,...se["kit-duotone"]};const H=it(Xe),Pt={...Dn};Pt[b]={...Pt[b],...ie.kit,...ie["kit-duotone"]};const rt=it(Pt),Et={...zn};Et[b]={...Et[b],...Gn.kit};const X=it(Et),Ct={...Ln};Ct[b]={...Ct[b],...Xn.kit};const qn=it(Ct),Kn=_n,Ge="fa-layers-text",Jn=jn,Qn={...Tn};it(Qn);const Zn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=Z,K=new Set;Object.keys(rt[b]).map(K.add.bind(K));Object.keys(rt[O]).map(K.add.bind(K));Object.keys(rt[N]).map(K.add.bind(K));const ta=[...In,...Un],et=D.FontAwesomeConfig||{};function ea(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function na(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=na(ea(n));r!=null&&(et[a]=r)});const Be={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ye,replacementClass:We,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};et.familyPrefix&&(et.cssPrefix=et.familyPrefix);const J={...Be,...et};J.autoReplaceSvg||(J.observeMutations=!1);const f={};Object.keys(Be).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){J[t]=e,nt.forEach(n=>n(f))},get:function(){return J[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){J.cssPrefix=t,nt.forEach(e=>e(f))},get:function(){return J.cssPrefix}});D.FontAwesomeConfig=f;const nt=[];function aa(t){return nt.push(t),()=>{nt.splice(nt.indexOf(t),1)}}const R=Nt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ra(t){if(!t||!L)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return h.head.insertBefore(e,a),t}const sa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){let t=12,e="";for(;t-- >0;)e+=sa[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ve(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ia(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ve(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Bt(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function oa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function la(t){let{transform:e,width:n=Nt,height:a=Nt,startCentered:r=!1}=t,s="";return r&&Le?s+="translate(".concat(e.x/R-n/2,"em, ").concat(e.y/R-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/R,"em), calc(-50% + ").concat(e.y/R,"em)) "):s+="translate(".concat(e.x/R,"em, ").concat(e.y/R,"em) "),s+="scale(".concat(e.size/R*(e.flipX?-1:1),", ").concat(e.size/R*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var ca=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $e(){const t=Ye,e=We,n=f.cssPrefix,a=f.replacementClass;let r=ca;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let le=!1;function xt(){f.autoAddCss&&!le&&(ra($e()),le=!0)}var fa={mixout(){return{dom:{css:$e,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}};const M=D||{};M[F]||(M[F]={});M[F].styles||(M[F].styles={});M[F].hooks||(M[F].hooks={});M[F].shims||(M[F].shims=[]);var I=M[F];const qe=[],Ke=function(){h.removeEventListener("DOMContentLoaded",Ke),ut=1,qe.map(t=>t())};let ut=!1;L&&(ut=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),ut||h.addEventListener("DOMContentLoaded",Ke));function ua(t){L&&(ut?setTimeout(t,0):qe.push(t))}function ot(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ve(t):"<".concat(e," ").concat(ia(n),">").concat(a.map(ot).join(""),"</").concat(e,">")}function ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,c,l,u;for(a===void 0?(c=1,u=e[s[0]]):(c=0,u=a);c<i;c++)l=s[c],u=o(u,e[l],l,e);return u};function ma(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Tt(t){const e=ma(t);return e.length===1?e[0].toString(16):null}function da(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function fe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function It(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=fe(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,fe(e)):I.styles[t]={...I.styles[t]||{},...r},t==="fas"&&It("fa",e)}const{styles:U,shims:pa}=I,ga={[b]:Object.values(X[b]),[O]:Object.values(X[O]),[N]:Object.values(X[N])};let Vt=null,Je={},Qe={},Ze={},tn={},en={};const ha={[b]:Object.keys(H[b]),[O]:Object.keys(H[O]),[N]:Object.keys(H[N])};function ba(t){return~ta.indexOf(t)}function ya(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ba(r)?r:null}const nn=()=>{const t=a=>wt(U,(r,s,i)=>(r[i]=wt(s,a,{}),r),{});Je=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Qe=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),en=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in U||f.autoFetchSvg,n=wt(pa,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Ze=n.names,tn=n.unicodes,Vt=gt(f.styleDefault,{family:f.familyDefault})};aa(t=>{Vt=gt(t.styleDefault,{family:f.familyDefault})});nn();function $t(t,e){return(Je[t]||{})[e]}function va(t,e){return(Qe[t]||{})[e]}function z(t,e){return(en[t]||{})[e]}function an(t){return Ze[t]||{prefix:null,iconName:null}}function xa(t){const e=tn[t],n=$t("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return Vt}const qt=()=>({prefix:null,iconName:null,rest:[]});function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=b}=e,a=H[n][t],r=rt[n][t]||rt[n][a],s=t in I.styles?t:null;return r||s||null}const wa={[b]:Object.keys(X[b]),[O]:Object.keys(X[O]),[N]:Object.keys(X[N])};function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[b]:"".concat(f.cssPrefix,"-").concat(b),[O]:"".concat(f.cssPrefix,"-").concat(O),[N]:"".concat(f.cssPrefix,"-").concat(N)};let r=null,s=b;const i=Cn.filter(c=>c!==Re);i.forEach(c=>{(t.includes(a[c])||t.some(l=>wa[c].includes(l)))&&(s=c)});const o=t.reduce((c,l)=>{const u=ya(f.cssPrefix,l);if(U[l]?(l=ga[s].includes(l)?qn[s][l]:l,r=l,c.prefix=l):ha[s].indexOf(l)>-1?(r=l,c.prefix=gt(l,{family:s})):u?c.iconName=u:l!==f.replacementClass&&!i.some(g=>l===a[g])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const g=r==="fa"?an(c.iconName):{},p=z(c.prefix,c.iconName);g.prefix&&(r=null),c.iconName=g.iconName||p||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!U.far&&U.fas&&!f.autoFetchSvg&&(c.prefix="fas")}return c},qt());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===O&&(U.fass||f.autoFetchSvg)&&(o.prefix="fass",o.iconName=z(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===N&&(U.fasds||f.autoFetchSvg)&&(o.prefix="fasds",o.iconName=z(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=Y()||"fas"),o}class Aa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},It(s,r[s]);const i=X[b][s];i&&It(i,r[s]),nn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],c=o[2];e[s]||(e[s]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[s][l]=o)}),e[s][i]=o}),e}}let ue=[],V={};const q={},ka=Object.keys(q);function Oa(t,e){let{mixoutsTo:n}=e;return ue=t,V={},Object.keys(q).forEach(a=>{ka.indexOf(a)===-1&&delete q[a]}),ue.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{V[i]||(V[i]=[]),V[i].push(s[i])})}a.provides&&a.provides(q)}),n}function _t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(V[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function B(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(V[t]||[]).forEach(s=>{s.apply(null,n)})}function W(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return q[t]?q[t].apply(null,e):void 0}function jt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=z(n,e)||e,ce(rn.definitions,n,e)||ce(I.styles,n,e)}const rn=new Aa,Na=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,B("noAuto")},Sa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(B("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,ua(()=>{Ea({autoReplaceSvgRoot:e}),B("watch",t)})}},Pa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gt(t[0]);return{prefix:n,iconName:z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(Kn))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:z(e,t)||t}}}},S={noAuto:Na,config:f,dom:Sa,parse:Pa,library:rn,findIconDefinition:jt,toHtml:ot},Ea=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(I.styles).length>0||f.autoFetchSvg)&&L&&f.autoReplaceSvg&&S.dom.i2svg({node:e})};function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ot(n))}}),Object.defineProperty(t,"node",{get:function(){if(!L)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ca(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Bt(i)&&n.found&&!a.found){const{width:o,height:c}=n,l={x:o/c/2,y:.5};r.style=pt({...s,"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Ta(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:i},children:a}]}]}function Kt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:c,titleId:l,extra:u,watchable:g=!1}=t,{width:p,height:v}=n.found?n:e,k=a==="fak",P=[f.replacementClass,r?"".concat(f.cssPrefix,"-").concat(r):""].filter(E=>u.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(u.classes).join(" ");let y={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:P,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)}};const w=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};g&&(y.attributes[G]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[o]}),delete y.attributes.title);const x={...y,prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:s,symbol:i,styles:{...w,...u.styles}},{children:A,attributes:j}=n.found&&e.found?W("generateAbstractMask",x)||{children:[],attributes:{}}:W("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=A,x.attributes=j,i?Ta(x):Ca(x)}function me(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,c={...i.attributes,...s?{title:s}:{},class:i.classes.join(" ")};o&&(c[G]="");const l={...i.styles};Bt(r)&&(l.transform=la({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=pt(l);u.length>0&&(c.style=u);const g=[];return g.push({tag:"span",attributes:c,children:[e]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function Ia(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},s=pt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:At}=I;function Ft(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const _a={found:!1,width:512,height:512};function ja(t,e){!Ue&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Mt(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=Y()),new Promise((a,r)=>{if(n==="fa"){const s=an(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&At[e]&&At[e][t]){const s=At[e][t];return a(Ft(s))}ja(t,e),a({..._a,icon:f.showMissingIcons&&t?W("missingIconAbstract")||{}:{}})})}const de=()=>{},Lt=f.measurePerformance&&lt&&lt.mark&&lt.measure?lt:{mark:de,measure:de},tt='FA "6.6.0"',Fa=t=>(Lt.mark("".concat(tt," ").concat(t," begins")),()=>sn(t)),sn=t=>{Lt.mark("".concat(tt," ").concat(t," ends")),Lt.measure("".concat(tt," ").concat(t),"".concat(tt," ").concat(t," begins"),"".concat(tt," ").concat(t," ends"))};var Jt={begin:Fa,end:sn};const ct=()=>{};function pe(t){return typeof(t.getAttribute?t.getAttribute(G):null)=="string"}function Ma(t){const e=t.getAttribute?t.getAttribute(Ht):null,n=t.getAttribute?t.getAttribute(Xt):null;return e&&n}function La(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function Ra(){return f.autoReplaceSvg===!0?ft.replace:ft[f.autoReplaceSvg]||ft.replace}function za(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Da(t){return h.createElement(t)}function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?za:Da}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(on(s,{ceFn:n}))}),a}function Ya(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ft={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(on(n),e)}),e.getAttribute(G)===null&&f.keepOriginalSource){let n=h.createComment(Ya(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Gt(e).indexOf(f.replacementClass))return ft.replace(t);const a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===f.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>ot(s)).join(`
`);e.setAttribute(G,""),e.innerHTML=r}};function ge(t){t()}function ln(t,e){const n=typeof e=="function"?e:ct;if(t.length===0)n();else{let a=ge;f.mutateApproach===Vn&&(a=D.requestAnimationFrame||ge),a(()=>{const r=Ra(),s=Jt.begin("mutate");t.map(r),s(),n()})}}let Qt=!1;function cn(){Qt=!0}function Rt(){Qt=!1}let mt=null;function he(t){if(!re||!f.observeMutations)return;const{treeCallback:e=ct,nodeCallback:n=ct,pseudoElementsCallback:a=ct,observeMutationsRoot:r=h}=t;mt=new re(s=>{if(Qt)return;const i=Y();Q(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!pe(o.addedNodes[0])&&(f.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&pe(o.target)&&~Zn.indexOf(o.attributeName))if(o.attributeName==="class"&&Ma(o.target)){const{prefix:c,iconName:l}=ht(Gt(o.target));o.target.setAttribute(Ht,c||i),l&&o.target.setAttribute(Xt,l)}else La(o.target)&&n(o.target)})}),L&&mt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Wa(){mt&&mt.disconnect()}function Ua(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Ha(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ht(Gt(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=va(r.prefix,t.innerText)||$t(r.prefix,Tt(t.innerText))),!r.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Xa(t){const e=Q(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||st()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ga(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ha(t),s=Xa(t),i=_t("parseNodeAttributes",{},t);let o=e.styleParser?Ua(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s},...i}}const{styles:Ba}=I;function fn(t){const e=f.autoReplaceSvg==="nest"?be(t,{styleParser:!1}):be(t);return~e.extra.classes.indexOf(Ge)?W("generateLayersText",t,e):W("generateSvgReplacementMutation",t,e)}let _=new Set;He.map(t=>{_.add("fa-".concat(t))});Object.keys(H[b]).map(_.add.bind(_));Object.keys(H[O]).map(_.add.bind(_));Object.keys(H[N]).map(_.add.bind(_));_=[..._];function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();const n=h.documentElement.classList,a=u=>n.add("".concat(oe,"-").concat(u)),r=u=>n.remove("".concat(oe,"-").concat(u)),s=f.autoFetchSvg?_:He.map(u=>"fa-".concat(u)).concat(Object.keys(Ba));s.includes("fa")||s.push("fa");const i=[".".concat(Ge,":not([").concat(G,"])")].concat(s.map(u=>".".concat(u,":not([").concat(G,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=Q(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Jt.begin("onTree"),l=o.reduce((u,g)=>{try{const p=fn(g);p&&u.push(p)}catch(p){Ue||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,g)=>{Promise.all(l).then(p=>{ln(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(p=>{c(),g(p)})})}function Va(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fn(t).then(n=>{n&&ln([n],e)})}function $a(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:jt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:jt(r||{})),t(a,{...n,mask:r})}}const qa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:c=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:v}=t;return bt({type:"icon",...t},()=>(B("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(i?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||st()):(l["aria-hidden"]="true",l.focusable="false")),Kt({icons:{main:Ft(v),mask:r?Ft(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:{...T,...n},symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:l,styles:u,classes:c}})))};var Ka={mixout(){return{icon:$a(qa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ye,t.nodeCallback=Va,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return ye(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:c,mask:l,maskId:u,extra:g}=n;return new Promise((p,v)=>{Promise.all([Mt(a,i),l.iconName?Mt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[P,y]=k;p([e,Kt({icons:{main:P,mask:y},prefix:i,iconName:a,transform:o,symbol:c,maskId:u,title:r,titleId:s,extra:g,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=pt(i);o.length>0&&(a.style=o);let c;return Bt(s)&&(c=W("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Ja={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bt({type:"layer"},()=>{B("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Qa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return bt({type:"counter",content:t},()=>(B("beforeDOMElementCreation",{content:t,params:e}),Ia({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},Za={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return bt({type:"text",content:t},()=>(B("beforeDOMElementCreation",{content:t,params:e}),me({content:t,transform:{...T,...n},title:a,extra:{attributes:s,styles:i,classes:["".concat(f.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Le){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/c,o=l.height/c}return f.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,me({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const tr=new RegExp('"',"ug"),ve=[1105920,1112319],xe={FontAwesome:{normal:"fas",400:"fas"},...Mn,...Fn,...Hn},zt=Object.keys(xe).reduce((t,e)=>(t[e.toLowerCase()]=xe[e],t),{}),er=Object.keys(zt).reduce((t,e)=>{const n=zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function nr(t){const e=t.replace(tr,""),n=da(e,0),a=n>=ve[0]&&n<=ve[1],r=e.length===2?e[0]===e[1]:!1;return{value:Tt(r?e[0]:e),isSecondary:a||r}}function ar(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(zt[n]||{})[r]||er[n]}function we(t,e){const n="".concat(Bn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=Q(t.children).filter(p=>p.getAttribute(St)===e)[0],o=D.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),l=c.match(Jn),u=o.getPropertyValue("font-weight"),g=o.getPropertyValue("content");if(i&&!l)return t.removeChild(i),a();if(l&&g!=="none"&&g!==""){const p=o.getPropertyValue("content");let v=ar(c,u);const{value:k,isSecondary:P}=nr(p),y=l[0].startsWith("FontAwesome");let w=$t(v,k),x=w;if(y){const A=xa(k);A.iconName&&A.prefix&&(w=A.iconName,v=A.prefix)}if(w&&!P&&(!i||i.getAttribute(Ht)!==v||i.getAttribute(Xt)!==x)){t.setAttribute(n,x),i&&t.removeChild(i);const A=Ga(),{extra:j}=A;j.attributes[St]=e,Mt(w,v).then(E=>{const bn=Kt({...A,icons:{main:E,mask:qt()},prefix:v,iconName:x,extra:j,watchable:!0}),yt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(yt,t.firstChild):t.appendChild(yt),yt.outerHTML=bn.map(yn=>ot(yn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function rr(t){return Promise.all([we(t,"::before"),we(t,"::after")])}function sr(t){return t.parentNode!==document.head&&!~$n.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(St)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ae(t){if(L)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(sr).map(rr),r=Jt.begin("searchPseudoElements");cn(),Promise.all(a).then(()=>{r(),Rt(),e()}).catch(()=>{r(),Rt(),n()})})}var ir={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ae,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;f.searchPseudoElements&&Ae(n)}}};let ke=!1;var or={mixout(){return{dom:{unwatch(){cn(),ke=!0}}}},hooks(){return{bootstrap(){he(_t("mutationObserverCallbacks",{}))},noAuto(){Wa()},watch(t){const{observeMutationsRoot:e}=t;ke?Rt():he(_t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Oe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var lr={mixout(){return{parse:{transform:t=>Oe(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Oe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(l)},g={transform:"translate(".concat(s/2*-1," -256)")},p={outer:i,inner:u,path:g};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const kt={x:0,y:0,width:"100%",height:"100%"};function Ne(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function cr(t){return t.tag==="g"?t.children:[t]}var fr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(r=>r.trim())):qt();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:c,icon:l}=r,{width:u,icon:g}=s,p=oa({transform:o,containerWidth:u,iconWidth:c}),v={tag:"rect",attributes:{...kt,fill:"white"}},k=l.children?{children:l.children.map(Ne)}:{},P={tag:"g",attributes:{...p.inner},children:[Ne({tag:l.tag,attributes:{...l.attributes,...p.path},...k})]},y={tag:"g",attributes:{...p.outer},children:[P]},w="mask-".concat(i||st()),x="clip-".concat(i||st()),A={tag:"mask",attributes:{...kt,id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,y]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:cr(g)},A]};return n.push(j,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(w,")"),...kt}}),{children:n,attributes:a}}}},ur={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},i={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},mr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},dr=[fa,Ka,Ja,Qa,Za,ir,or,lr,fr,ur,mr];Oa(dr,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;const Dt=S.parse;S.findIconDefinition;S.toHtml;const pr=S.icon;S.layer;S.text;S.counter;var un={exports:{}},gr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hr=gr,br=hr;function mn(){}function dn(){}dn.resetWarningCache=mn;var yr=function(){function t(a,r,s,i,o,c){if(c!==br){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:dn,resetWarningCache:mn};return n.PropTypes=n,n};un.exports=yr();var vr=un.exports;const d=vn(vr);function Se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(n),!0).forEach(function(a){$(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,s;for(s=0;s<a.length;s++)r=a[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function wr(t,e){if(t==null)return{};var n=xr(t,e),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Yt(t){return Ar(t)||kr(t)||Or(t)||Nr()}function Ar(t){if(Array.isArray(t))return Wt(t)}function kr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Or(t,e){if(t){if(typeof t=="string")return Wt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wt(t,e)}}function Wt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Nr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,s=t.bounce,i=t.shake,o=t.flash,c=t.spin,l=t.spinPulse,u=t.spinReverse,g=t.pulse,p=t.fixedWidth,v=t.inverse,k=t.border,P=t.listItem,y=t.flip,w=t.size,x=t.rotation,A=t.pull,j=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":i,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":g,"fa-fw":p,"fa-inverse":v,"fa-border":k,"fa-li":P,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},$(e,"fa-".concat(w),typeof w<"u"&&w!==null),$(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),$(e,"fa-pull-".concat(A),typeof A<"u"&&A!==null),$(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(j).map(function(E){return j[E]?E:null}).filter(function(E){return E})}function Pr(t){return t=t-0,t===t}function pn(t){return Pr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Er=["style"];function Cr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Tr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=pn(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?e[Cr(r)]=s:e[r]=s,e},{})}function gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return gn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.attrs.className=u,delete e.attributes.class;break;case"style":c.attrs.style=Tr(u);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?c.attrs[l.toLowerCase()]=u:c.attrs[pn(l)]=u}return c},{attrs:{}}),s=n.style,i=s===void 0?{}:s,o=wr(n,Er);return r.attrs.style=C(C({},r.attrs.style),i),t.apply(void 0,[e.tag,C(C({},r.attrs),o)].concat(Yt(a)))}var hn=!1;try{hn=!0}catch{}function Ir(){if(!hn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Pe(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Dt.icon)return Dt.icon(t);if(t===null)return null;if(t&&dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ot(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$({},t,e):{}}var Ee={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Zt=Te.forwardRef(function(t,e){var n=C(C({},Ee),t),a=n.icon,r=n.mask,s=n.symbol,i=n.className,o=n.title,c=n.titleId,l=n.maskId,u=Pe(a),g=Ot("classes",[].concat(Yt(Sr(n)),Yt((i||"").split(" ")))),p=Ot("transform",typeof n.transform=="string"?Dt.transform(n.transform):n.transform),v=Ot("mask",Pe(r)),k=pr(u,C(C(C(C({},g),p),v),{},{symbol:s,title:o,titleId:c,maskId:l}));if(!k)return Ir("Could not find icon",u),null;var P=k.abstract,y={ref:e};return Object.keys(n).forEach(function(w){Ee.hasOwnProperty(w)||(y[w]=n[w])}),_r(P[0],y)});Zt.displayName="FontAwesomeIcon";Zt.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var _r=gn.bind(null,Te.createElement);const Ce={name:"",email:"",message:""},jr=t=>{const[e,n]=te.useState(Ce),[a,r]=te.useState(!1),{t:s}=xn(),i=l=>{const{name:u,value:g}=l.target;n(p=>({...p,[u]:g}))},o=l=>{l.preventDefault(),Pn.sendForm("service_mjhh8bk","template_vjsjysw",l.target,"lP7SL1kR-MI11unzn").then(u=>{console.log(u.text),n(Ce),r(!0),setTimeout(()=>{window.location.reload()},3e3)},u=>{console.log(u.text)})},c=()=>{r(!1)};return m.jsxs("div",{children:[m.jsxs("div",{id:"contact",className:"py-14 rounded-lg  bg-opacity-35",children:[m.jsx("div",{className:"container mx-auto px-4",children:m.jsxs("div",{className:"max-w-3xl mx-auto",children:[m.jsx("div",{className:"text-center mb-12",children:m.jsx("h2",{className:"text-4xl font-bold text-white",children:s("Contact.title")})}),m.jsxs("form",{name:"contactForm",onSubmit:o,children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[m.jsx("div",{children:m.jsx("input",{type:"text",id:"name",name:"name",className:"form-input block w-full py-3 px-4 mb-3 rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:s("Contact.placeholderName"),value:e.name,onChange:i,required:!0})}),m.jsx("div",{children:m.jsx("input",{type:"email",id:"email",name:"email",className:"form-input block w-full py-3 px-4 mb-3 rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:s("Contact.placeholderEmail"),value:e.email,onChange:i,required:!0})})]}),m.jsx("div",{children:m.jsx("textarea",{name:"message",id:"message",className:"form-textarea block w-full py-3 px-4 mb-3 rounded-md bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500",rows:"4",placeholder:s("Contact.placeholderMessage"),value:e.message,onChange:i,required:!0})}),m.jsx("div",{className:"text-center",children:m.jsx("button",{type:"submit",className:"btn bg-[#3282B8] hover:bg-[#5aabb8] mt-3 text-white font-bold py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",children:m.jsx("p",{children:s("Contact.submitButton")})})})]})]})}),m.jsx("div",{className:"col-md-12 mt-12",children:m.jsx("div",{className:"row",children:m.jsx("div",{className:"social flex justify-center",children:m.jsxs("ul",{className:"flex",children:[m.jsx("li",{className:"mr-4",children:m.jsx("a",{href:s("socials.whatsapp"),className:"text-gray-600 hover:text-blue-500",children:m.jsx(Zt,{icon:En,color:"white",size:"4x"})})}),m.jsx("li",{className:"mr-4"})]})})})})]}),a&&m.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none",children:m.jsx("div",{className:"relative w-auto max-w-3xl mx-auto my-6",children:m.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("h2",{className:"text-xl font-bold mb-4",children:s("contact.modalSuccessTitle")}),m.jsx("p",{className:"text-gray-700",children:s("contact.modalSuccessSubtitle")})]}),m.jsx("div",{className:"text-center mt-6",children:m.jsx("button",{className:"btn bg-[#3282B8] hover:bg-[#5aabb8] text-white font-bold py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",onClick:c,children:s("contact.modalCloseButton")})})]})})})]})},Fr=jr;function Rr(){return m.jsx("div",{className:"min-h-screen flex flex-col items-center   text-white py-14",children:m.jsxs("div",{className:"container max-w-screen-lg   bg-opacity-20 rounded-lg",children:[m.jsx(wn,{}),m.jsx("main",{children:m.jsx("div",{className:"flex flex-col lg:flex-row justify-center mt-8",children:m.jsx(Fr,{})})}),m.jsx("div",{className:" lg:flex-row justify-center mt-8",children:m.jsx(An,{})})]})})}export{Rr as default};
