import{aA as P,y as A,z as I,r as g,n as ne,q as se,t as oe,G as O,e as F,s as re,J as q,ah as ce}from"./index-ee9a4261.js";import{a as ae}from"./index-eb89c5ee.js";let w;const Pe=e=>{var n;if(!P)return 0;if(w!==void 0)return w;const s=document.createElement("div");s.className="".concat(e,"-scrollbar__wrap"),s.style.visibility="hidden",s.style.width="100px",s.style.position="absolute",s.style.top="-9999px",document.body.appendChild(s);const o=s.offsetWidth;s.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",s.appendChild(r);const a=r.offsetWidth;return(n=s.parentNode)==null||n.removeChild(s),w=o-a,w};function ge(e,n){if(!P)return;if(!n){e.scrollTop=0;return}const s=[];let o=n.offsetParent;for(;o!==null&&e!==o&&e.contains(o);)s.push(o),o=o.offsetParent;const r=n.offsetTop+s.reduce((m,T)=>m+T.offsetTop,0),a=r+n.offsetHeight,f=e.scrollTop,v=f+e.clientHeight;r<f?e.scrollTop=r:a>v&&(e.scrollTop=a-e.clientHeight)}const Z={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"};let E=[];const M=e=>{const n=e;n.key===Z.esc&&E.forEach(s=>s(n))},ue=e=>{A(()=>{E.length===0&&document.addEventListener("keydown",M),P&&E.push(e)}),I(()=>{E=E.filter(n=>n!==e),E.length===0&&P&&document.removeEventListener("keydown",M)})},N="focus-trap.focus-after-trapped",k="focus-trap.focus-after-released",ie="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},de={cancelable:!0,bubbles:!1},J="focusAfterTrapped",z="focusAfterReleased",fe=Symbol("elFocusTrap"),U=g(),S=g(0),D=g(0);let b=0;const ee=e=>{const n=[],s=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;s.nextNode();)n.push(s.currentNode);return n},G=(e,n)=>{for(const s of e)if(!le(s,n))return s},le=(e,n)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},pe=e=>{const n=ee(e),s=G(n,e),o=G(n.reverse(),e);return[s,o]},ve=e=>e instanceof HTMLInputElement&&"select"in e,p=(e,n)=>{if(e&&e.focus){const s=document.activeElement;e.focus({preventScroll:!0}),D.value=window.performance.now(),e!==s&&ve(e)&&n&&e.select()}};function Y(e,n){const s=[...e],o=e.indexOf(n);return o!==-1&&s.splice(o,1),s}const Ee=()=>{let e=[];return{push:o=>{const r=e[0];r&&o!==r&&r.pause(),e=Y(e,o),e.unshift(o)},remove:o=>{var r,a;e=Y(e,o),(a=(r=e[0])==null?void 0:r.resume)==null||a.call(r)}}},me=(e,n=!1)=>{const s=document.activeElement;for(const o of e)if(p(o,n),document.activeElement!==s)return},Q=Ee(),Te=()=>S.value>D.value,y=()=>{U.value="pointer",S.value=window.performance.now()},X=()=>{U.value="keyboard",S.value=window.performance.now()},he=()=>(A(()=>{b===0&&(document.addEventListener("mousedown",y),document.addEventListener("touchstart",y),document.addEventListener("keydown",X)),b++}),I(()=>{b--,b<=0&&(document.removeEventListener("mousedown",y),document.removeEventListener("touchstart",y),document.removeEventListener("keydown",X))}),{focusReason:U,lastUserFocusTimestamp:S,lastAutomatedFocusTimestamp:D}),_=e=>new CustomEvent(ie,{...de,detail:e}),Fe=se({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[J,z,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:n}){const s=g();let o,r;const{focusReason:a}=he();ue(t=>{e.trapped&&!f.paused&&n("release-requested",t)});const f={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},v=t=>{if(!e.loop&&!e.trapped||f.paused)return;const{key:c,altKey:u,ctrlKey:i,metaKey:d,currentTarget:V,shiftKey:W}=t,{loop:$}=e,te=c===Z.tab&&!u&&!i&&!d,h=document.activeElement;if(te&&h){const C=V,[L,R]=pe(C);if(L&&R){if(!W&&h===R){const l=_({focusReason:a.value});n("focusout-prevented",l),l.defaultPrevented||(t.preventDefault(),$&&p(L,!0))}else if(W&&[L,C].includes(h)){const l=_({focusReason:a.value});n("focusout-prevented",l),l.defaultPrevented||(t.preventDefault(),$&&p(R,!0))}}else if(h===C){const l=_({focusReason:a.value});n("focusout-prevented",l),l.defaultPrevented||t.preventDefault()}}};oe(fe,{focusTrapRef:s,onKeydown:v}),O(()=>e.focusTrapEl,t=>{t&&(s.value=t)},{immediate:!0}),O([s],([t],[c])=>{t&&(t.addEventListener("keydown",v),t.addEventListener("focusin",K),t.addEventListener("focusout",H)),c&&(c.removeEventListener("keydown",v),c.removeEventListener("focusin",K),c.removeEventListener("focusout",H))});const m=t=>{n(J,t)},T=t=>n(z,t),K=t=>{const c=F(s);if(!c)return;const u=t.target,i=t.relatedTarget,d=u&&c.contains(u);e.trapped||i&&c.contains(i)||(o=i),d&&n("focusin",t),!f.paused&&e.trapped&&(d?r=u:p(r,!0))},H=t=>{const c=F(s);if(!(f.paused||!c))if(e.trapped){const u=t.relatedTarget;!ae(u)&&!c.contains(u)&&setTimeout(()=>{if(!f.paused&&e.trapped){const i=_({focusReason:a.value});n("focusout-prevented",i),i.defaultPrevented||p(r,!0)}},0)}else{const u=t.target;u&&c.contains(u)||n("focusout",t)}};async function B(){await q();const t=F(s);if(t){Q.push(f);const c=t.contains(document.activeElement)?o:document.activeElement;if(o=c,!t.contains(c)){const i=new Event(N,j);t.addEventListener(N,m),t.dispatchEvent(i),i.defaultPrevented||q(()=>{let d=e.focusStartEl;ce(d)||(p(d),document.activeElement!==d&&(d="first")),d==="first"&&me(ee(t),!0),(document.activeElement===c||d==="container")&&p(t)})}}}function x(){const t=F(s);if(t){t.removeEventListener(N,m);const c=new CustomEvent(k,{...j,detail:{focusReason:a.value}});t.addEventListener(k,T),t.dispatchEvent(c),!c.defaultPrevented&&(a.value=="keyboard"||!Te()||t.contains(document.activeElement))&&p(o!=null?o:document.body),t.removeEventListener(k,T),Q.remove(f)}}return A(()=>{e.trapped&&B(),O(()=>e.trapped,t=>{t?B():x()})}),I(()=>{e.trapped&&x()}),{onKeydown:v}}});function we(e,n,s,o,r,a){return re(e.$slots,"default",{handleKeydown:e.onKeydown})}var Se=ne(Fe,[["render",we],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Z as E,fe as F,Se as a,Pe as g,ge as s};
