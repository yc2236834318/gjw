import{ae as ne,bB as M,aS as Se,by as Le,bx as R,aT as we,bC as Be,bc as Ee,bD as $e,bE as Ie,b6 as ae,ah as K,af as q,aX as T,x as E,C as g,ao as N,G as te,J as le,S as oe,r as V,aY as B,aC as Oe,av as H,q as L,bv as se,L as D,o as y,g as re,w as ie,b as W,Q as x,e as i,a8 as $,c as C,aZ as I,U as O,bF as P,s as z,V as Pe,i as ue,a3 as de,R as G,T as ce,n as U,W as Fe,A as Te,B as Ne,t as Ve,ax as Ge,X as De,Y as be}from"./index-ee9a4261.js";import{a as ze,q as ve,b as Ue,r as Ae,e as Me,j as Re,t as Ke,U as X,h as qe,i as He}from"./isEqual-5a33b929.js";import{U as F,d as fe}from"./event-fbb285ad.js";import{c as We,b as A,a as Y,e as me}from"./use-form-item-d271546b.js";var J=Object.create,Xe=function(){function e(){}return function(n){if(!ne(n))return{};if(J)return J(n);e.prototype=n;var a=new e;return e.prototype=void 0,a}}();const Ye=Xe;function Je(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}function Hn(e,n){var a=-1,t=e.length;for(n||(n=Array(t));++a<t;)n[a]=e[a];return n}var Qe=800,Ze=16,je=Date.now;function _e(e){var n=0,a=0;return function(){var t=je(),o=Ze-(t-a);if(a=t,o>0){if(++n>=Qe)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function en(e){return function(){return e}}var nn=M?function(e,n){return M(e,"toString",{configurable:!0,enumerable:!1,value:en(n),writable:!0})}:ze;const an=nn;var tn=_e(an);const ln=tn;function Wn(e,n,a,t){var o=!a;a||(a={});for(var d=-1,c=n.length;++d<c;){var l=n[d],b=t?t(a[l],e[l],l,a,e):void 0;b===void 0&&(b=e[l]),o?Se(a,l,b):Le(a,l,b)}return a}var Q=Math.max;function on(e,n,a){return n=Q(n===void 0?e.length-1:n,0),function(){for(var t=arguments,o=-1,d=Q(t.length-n,0),c=Array(d);++o<d;)c[o]=t[n+o];o=-1;for(var l=Array(n+1);++o<n;)l[o]=t[o];return l[n]=a(c),Je(e,this,l)}}function sn(e){var n=[];if(e!=null)for(var a in Object(e))n.push(a);return n}var rn=Object.prototype,un=rn.hasOwnProperty;function dn(e){if(!ne(e))return sn(e);var n=ve(e),a=[];for(var t in e)t=="constructor"&&(n||!un.call(e,t))||a.push(t);return a}function Xn(e){return Ue(e)?Ae(e,!0):dn(e)}var Z=R?R.isConcatSpreadable:void 0;function cn(e){return we(e)||Me(e)||!!(Z&&e&&e[Z])}function pe(e,n,a,t,o){var d=-1,c=e.length;for(a||(a=cn),o||(o=[]);++d<c;){var l=e[d];n>0&&a(l)?n>1?pe(l,n-1,a,t,o):Re(o,l):t||(o[o.length]=l)}return o}function bn(e){var n=e==null?0:e.length;return n?pe(e,1):[]}function vn(e){return ln(on(e,void 0,bn),e+"")}var fn=Ke(Object.getPrototypeOf,Object);const mn=fn;var he=typeof exports=="object"&&exports&&!exports.nodeType&&exports,j=he&&typeof module=="object"&&module&&!module.nodeType&&module,pn=j&&j.exports===he,_=pn?Be.Buffer:void 0,ee=_?_.allocUnsafe:void 0;function Yn(e,n){if(n)return e.slice();var a=e.length,t=ee?ee(a):new e.constructor(a);return e.copy(t),t}function hn(e){var n=new e.constructor(e.byteLength);return new X(n).set(new X(e)),n}function Jn(e,n){var a=n?hn(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function Qn(e){return typeof e.constructor=="function"&&!ve(e)?Ye(mn(e)):{}}function gn(e,n,a){for(var t=-1,o=n.length,d={};++t<o;){var c=n[t],l=Ee(e,c);a(l,c)&&$e(d,Ie(c,e),l)}return d}function kn(e,n){return gn(e,n,function(a,t){return qe(e,t)})}var xn=vn(function(e,n){return e==null?{}:kn(e,n)});const yn=xn,ge={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ae,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ke={[F]:e=>K(e)||q(e)||T(e),change:e=>K(e)||q(e)||T(e)},w=Symbol("checkboxGroupContextKey"),Cn=({model:e,isChecked:n})=>{const a=E(w,void 0),t=g(()=>{var d,c;const l=(d=a==null?void 0:a.max)==null?void 0:d.value,b=(c=a==null?void 0:a.min)==null?void 0:c.value;return!N(l)&&e.value.length>=l&&!n.value||!N(b)&&e.value.length<=b&&n.value});return{isDisabled:We(g(()=>(a==null?void 0:a.disabled.value)||t.value)),isLimitDisabled:t}},Sn=(e,{model:n,isLimitExceeded:a,hasOwnLabel:t,isDisabled:o,isLabeledByFormItem:d})=>{const c=E(w,void 0),{formItem:l}=A(),{emit:b}=oe();function s(r){var f,m;return r===e.trueLabel||r===!0?(f=e.trueLabel)!=null?f:!0:(m=e.falseLabel)!=null?m:!1}function p(r,f){b("change",s(r),f)}function h(r){if(a.value)return;const f=r.target;b("change",s(f.checked),r)}async function S(r){a.value||!t.value&&!o.value&&d.value&&(r.composedPath().some(v=>v.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await le(),p(n.value,r)))}const u=g(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return te(()=>e.modelValue,()=>{u.value&&(l==null||l.validate("change").catch(r=>fe()))}),{handleChange:h,onClickRoot:S}},Ln=e=>{const n=V(!1),{emit:a}=oe(),t=E(w,void 0),o=g(()=>N(t)===!1),d=V(!1);return{model:g({get(){var l,b;return o.value?(l=t==null?void 0:t.modelValue)==null?void 0:l.value:(b=e.modelValue)!=null?b:n.value},set(l){var b,s;o.value&&B(l)?(d.value=((b=t==null?void 0:t.max)==null?void 0:b.value)!==void 0&&l.length>(t==null?void 0:t.max.value),d.value===!1&&((s=t==null?void 0:t.changeEvent)==null||s.call(t,l))):(a(F,l),n.value=l)}}),isGroup:o,isLimitExceeded:d}},wn=(e,n,{model:a})=>{const t=E(w,void 0),o=V(!1),d=g(()=>{const s=a.value;return T(s)?s:B(s)?Oe(e.label)?s.map(H).some(p=>He(p,e.label)):s.map(H).includes(e.label):s!=null?s===e.trueLabel:!!s}),c=Y(g(()=>{var s;return(s=t==null?void 0:t.size)==null?void 0:s.value}),{prop:!0}),l=Y(g(()=>{var s;return(s=t==null?void 0:t.size)==null?void 0:s.value})),b=g(()=>!!(n.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:o,checkboxSize:l,hasOwnLabel:b}},Bn=(e,{model:n})=>{function a(){B(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&a()},xe=(e,n)=>{const{formItem:a}=A(),{model:t,isGroup:o,isLimitExceeded:d}=Ln(e),{isFocused:c,isChecked:l,checkboxButtonSize:b,checkboxSize:s,hasOwnLabel:p}=wn(e,n,{model:t}),{isDisabled:h}=Cn({model:t,isChecked:l}),{inputId:S,isLabeledByFormItem:u}=me(e,{formItemContext:a,disableIdGeneration:p,disableIdManagement:o}),{handleChange:r,onClickRoot:f}=Sn(e,{model:t,isLimitExceeded:d,hasOwnLabel:p,isDisabled:h,isLabeledByFormItem:u});return Bn(e,{model:t}),{inputId:S,isLabeledByFormItem:u,isChecked:l,isDisabled:h,isFocused:c,checkboxButtonSize:b,checkboxSize:s,hasOwnLabel:p,model:t,handleChange:r,onClickRoot:f}},En=["tabindex","role","aria-checked"],$n=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],In=["id","aria-hidden","disabled","value","name","tabindex"],On=L({name:"ElCheckbox"}),Pn=L({...On,props:ge,emits:ke,setup(e){const n=e,a=se(),{inputId:t,isLabeledByFormItem:o,isChecked:d,isDisabled:c,isFocused:l,checkboxSize:b,hasOwnLabel:s,model:p,handleChange:h,onClickRoot:S}=xe(n,a),u=D("checkbox"),r=g(()=>[u.b(),u.m(b.value),u.is("disabled",c.value),u.is("bordered",n.border),u.is("checked",d.value)]),f=g(()=>[u.e("input"),u.is("disabled",c.value),u.is("checked",d.value),u.is("indeterminate",n.indeterminate),u.is("focus",l.value)]);return(m,v)=>(y(),re(ce(!i(s)&&i(o)?"span":"label"),{class:x(i(r)),"aria-controls":m.indeterminate?m.controls:null,onClick:i(S)},{default:ie(()=>[W("span",{class:x(i(f)),tabindex:m.indeterminate?0:void 0,role:m.indeterminate?"checkbox":void 0,"aria-checked":m.indeterminate?"mixed":void 0},[m.trueLabel||m.falseLabel?$((y(),C("input",{key:0,id:i(t),"onUpdate:modelValue":v[0]||(v[0]=k=>I(p)?p.value=k:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",name:m.name,tabindex:m.tabindex,disabled:i(c),"true-value":m.trueLabel,"false-value":m.falseLabel,onChange:v[1]||(v[1]=(...k)=>i(h)&&i(h)(...k)),onFocus:v[2]||(v[2]=k=>l.value=!0),onBlur:v[3]||(v[3]=k=>l.value=!1),onClick:v[4]||(v[4]=O(()=>{},["stop"]))},null,42,$n)),[[P,i(p)]]):$((y(),C("input",{key:1,id:i(t),"onUpdate:modelValue":v[5]||(v[5]=k=>I(p)?p.value=k:null),class:x(i(u).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",disabled:i(c),value:m.label,name:m.name,tabindex:m.tabindex,onChange:v[6]||(v[6]=(...k)=>i(h)&&i(h)(...k)),onFocus:v[7]||(v[7]=k=>l.value=!0),onBlur:v[8]||(v[8]=k=>l.value=!1),onClick:v[9]||(v[9]=O(()=>{},["stop"]))},null,42,In)),[[P,i(p)]]),W("span",{class:x(i(u).e("inner"))},null,2)],10,En),i(s)?(y(),C("span",{key:0,class:x(i(u).e("label"))},[z(m.$slots,"default"),m.$slots.default?G("v-if",!0):(y(),C(Pe,{key:0},[ue(de(m.label),1)],64))],2)):G("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Fn=U(Pn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const Tn=["name","tabindex","disabled","true-value","false-value"],Nn=["name","tabindex","disabled","value"],Vn=L({name:"ElCheckboxButton"}),Gn=L({...Vn,props:ge,emits:ke,setup(e){const n=e,a=se(),{isFocused:t,isChecked:o,isDisabled:d,checkboxButtonSize:c,model:l,handleChange:b}=xe(n,a),s=E(w,void 0),p=D("checkbox"),h=g(()=>{var u,r,f,m;const v=(r=(u=s==null?void 0:s.fill)==null?void 0:u.value)!=null?r:"";return{backgroundColor:v,borderColor:v,color:(m=(f=s==null?void 0:s.textColor)==null?void 0:f.value)!=null?m:"",boxShadow:v?"-1px 0 0 0 ".concat(v):void 0}}),S=g(()=>[p.b("button"),p.bm("button",c.value),p.is("disabled",d.value),p.is("checked",o.value),p.is("focus",t.value)]);return(u,r)=>(y(),C("label",{class:x(i(S))},[u.trueLabel||u.falseLabel?$((y(),C("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=f=>I(l)?l.value=f:null),class:x(i(p).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),"true-value":u.trueLabel,"false-value":u.falseLabel,onChange:r[1]||(r[1]=(...f)=>i(b)&&i(b)(...f)),onFocus:r[2]||(r[2]=f=>t.value=!0),onBlur:r[3]||(r[3]=f=>t.value=!1),onClick:r[4]||(r[4]=O(()=>{},["stop"]))},null,42,Tn)),[[P,i(l)]]):$((y(),C("input",{key:1,"onUpdate:modelValue":r[5]||(r[5]=f=>I(l)?l.value=f:null),class:x(i(p).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(d),value:u.label,onChange:r[6]||(r[6]=(...f)=>i(b)&&i(b)(...f)),onFocus:r[7]||(r[7]=f=>t.value=!0),onBlur:r[8]||(r[8]=f=>t.value=!1),onClick:r[9]||(r[9]=O(()=>{},["stop"]))},null,42,Nn)),[[P,i(l)]]),u.$slots.default||u.label?(y(),C("span",{key:2,class:x(i(p).be("button","inner")),style:Fe(i(o)?i(h):void 0)},[z(u.$slots,"default",{},()=>[ue(de(u.label),1)])],6)):G("v-if",!0)],2))}});var ye=U(Gn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Dn=Te({modelValue:{type:Ne(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ae,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),zn={[F]:e=>B(e),change:e=>B(e)},Un=L({name:"ElCheckboxGroup"}),An=L({...Un,props:Dn,emits:zn,setup(e,{emit:n}){const a=e,t=D("checkbox"),{formItem:o}=A(),{inputId:d,isLabeledByFormItem:c}=me(a,{formItemContext:o}),l=async s=>{n(F,s),await le(),n("change",s)},b=g({get(){return a.modelValue},set(s){l(s)}});return Ve(w,{...yn(Ge(a),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:b,changeEvent:l}),te(()=>a.modelValue,()=>{a.validateEvent&&(o==null||o.validate("change").catch(s=>fe()))}),(s,p)=>{var h;return y(),re(ce(s.tag),{id:i(d),class:x(i(t).b("group")),role:"group","aria-label":i(c)?void 0:s.label||"checkbox-group","aria-labelledby":i(c)?(h=i(o))==null?void 0:h.labelId:void 0},{default:ie(()=>[z(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Ce=U(An,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Zn=De(Fn,{CheckboxButton:ye,CheckboxGroup:Ce});be(ye);be(Ce);export{Zn as E,Hn as a,Yn as b,Wn as c,Jn as d,pe as e,hn as f,mn as g,Qn as i,Xn as k,on as o,ln as s};
