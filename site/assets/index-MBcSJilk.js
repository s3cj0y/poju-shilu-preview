var Tp=Object.defineProperty;var bp=(e,t,n)=>t in e?Tp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var me=(e,t,n)=>bp(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ki(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ne={},Vt=[],Qe=()=>{},ps=()=>!1,Jn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zn=e=>e.startsWith("onUpdate:"),fe=Object.assign,qi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ap=Object.prototype.hasOwnProperty,J=(e,t)=>Ap.call(e,t),M=Array.isArray,Yt=e=>Pn(e)==="[object Map]",us=e=>Pn(e)==="[object Set]",ho=e=>Pn(e)==="[object Date]",j=e=>typeof e=="function",pe=e=>typeof e=="string",et=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",_s=e=>(Z(e)||j(e))&&j(e.then)&&j(e.catch),ds=Object.prototype.toString,Pn=e=>ds.call(e),Lp=e=>Pn(e).slice(8,-1),fs=e=>Pn(e)==="[object Object]",Wi=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Pp=/-\w/g,Be=Qn(e=>e.replace(Pp,t=>t.slice(1).toUpperCase())),Op=/\B([A-Z])/g,Mt=Qn(e=>e.replace(Op,"-$1").toLowerCase()),gs=Qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),di=Qn(e=>e?`on${gs(e)}`:""),Ze=(e,t)=>!Object.is(e,t),Nn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ms=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},zi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},wp=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let xo;const ei=()=>xo||(xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ne(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=pe(i)?Cp(i):Ne(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(pe(e)||Z(e))return e}const Rp=/;(?![^(]*\))/g,Sp=/:([^]+)/,Ep=/\/\*[^]*?\*\//g;function Cp(e){const t={};return e.replace(Ep,"").split(Rp).forEach(n=>{if(n){const i=n.split(Sp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ve(e){let t="";if(pe(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const i=ve(e[n]);i&&(t+=i+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$p=Ki(Ip);function vs(e){return!!e||e===""}function Mp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=Xi(e[i],t[i]);return n}function Xi(e,t){if(e===t)return!0;let n=ho(e),i=ho(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=et(e),i=et(t),n||i)return e===t;if(n=M(e),i=M(t),n||i)return n&&i?Mp(e,t):!1;if(n=Z(e),i=Z(t),n||i){if(!n||!i)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const r in e){const c=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(c&&!a||!c&&a||!Xi(e[r],t[r]))return!1}}return String(e)===String(t)}const hs=e=>!!(e&&e.__v_isRef===!0),N=e=>pe(e)?e:e==null?"":M(e)||Z(e)&&(e.toString===ds||!j(e.toString))?hs(e)?N(e.value):JSON.stringify(e,xs,2):String(e),xs=(e,t)=>hs(t)?xs(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],s)=>(n[fi(i,s)+" =>"]=o,n),{})}:us(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>fi(n))}:et(t)?fi(t):Z(t)&&!M(t)&&!fs(t)?String(t):t,fi=(e,t="")=>{var n;return et(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Np{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&xe&&(xe.active?(this.parent=xe,this.index=(xe.scopes||(xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let t=xe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,i=o.length;n<i;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Dp(){return xe}let oe;const gi=new WeakSet;class ks{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&(xe.active?xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gi.has(this)&&(gi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ts(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ko(this),bs(this);const t=oe,n=He;oe=this,He=!0;try{return this.fn()}finally{As(this),oe=t,He=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qi(t);this.deps=this.depsTail=void 0,ko(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ri(this)&&this.run()}get dirty(){return Ri(this)}}let ys=0,cn,an;function Ts(e,t=!1){if(e.flags|=8,t){e.next=an,an=e;return}e.next=cn,cn=e}function Ji(){ys++}function Zi(){if(--ys>0)return;if(an){let t=an;for(an=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;cn;){let t=cn;for(cn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function bs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function As(e){let t,n=e.depsTail,i=n;for(;i;){const o=i.prevDep;i.version===-1?(i===n&&(n=o),Qi(i),Fp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=t,e.depsTail=n}function Ri(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ls(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ls(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===dn)||(e.globalVersion=dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ri(e))))return;e.flags|=2;const t=e.dep,n=oe,i=He;oe=e,He=!0;try{bs(e);const o=e.fn(e._value);(t.version===0||Ze(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{oe=n,He=i,As(e),e.flags&=-3}}function Qi(e,t=!1){const{dep:n,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Qi(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let He=!0;const Ps=[];function pt(){Ps.push(He),He=!1}function ut(){const e=Ps.pop();He=e===void 0?!0:e}function ko(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=oe;oe=void 0;try{t()}finally{oe=n}}}let dn=0;class Bp{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class eo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!oe||!He||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink=new Bp(oe,this),oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,Os(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=i)}return n}trigger(t){this.version++,dn++,this.notify(t)}notify(t){Ji();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zi()}}}function Os(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Os(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Si=new WeakMap,St=Symbol(""),Ei=Symbol(""),fn=Symbol("");function Te(e,t,n){if(He&&oe){let i=Si.get(e);i||Si.set(e,i=new Map);let o=i.get(n);o||(i.set(n,o=new eo),o.map=i,o.key=n),o.track()}}function at(e,t,n,i,o,s){const r=Si.get(e);if(!r){dn++;return}const c=a=>{a&&a.trigger()};if(Ji(),t==="clear")r.forEach(c);else{const a=M(e),u=a&&Wi(n);if(a&&n==="length"){const p=Number(i);r.forEach((d,v)=>{(v==="length"||v===fn||!et(v)&&v>=p)&&c(d)})}else switch((n!==void 0||r.has(void 0))&&c(r.get(n)),u&&c(r.get(fn)),t){case"add":a?u&&c(r.get("length")):(c(r.get(St)),Yt(e)&&c(r.get(Ei)));break;case"delete":a||(c(r.get(St)),Yt(e)&&c(r.get(Ei)));break;case"set":Yt(e)&&c(r.get(St));break}}Zi()}function Ft(e){const t=q(e);return t===e?t:(Te(t,"iterate",fn),Me(e)?t:t.map(Ge))}function ti(e){return Te(e=q(e),"iterate",fn),e}function Xe(e,t){return _t(e)?Wt(Et(e)?Ge(t):t):Ge(t)}const Hp={__proto__:null,[Symbol.iterator](){return mi(this,Symbol.iterator,e=>Xe(this,e))},concat(...e){return Ft(this).concat(...e.map(t=>M(t)?Ft(t):t))},entries(){return mi(this,"entries",e=>(e[1]=Xe(this,e[1]),e))},every(e,t){return ot(this,"every",e,t,void 0,arguments)},filter(e,t){return ot(this,"filter",e,t,n=>n.map(i=>Xe(this,i)),arguments)},find(e,t){return ot(this,"find",e,t,n=>Xe(this,n),arguments)},findIndex(e,t){return ot(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ot(this,"findLast",e,t,n=>Xe(this,n),arguments)},findLastIndex(e,t){return ot(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ot(this,"forEach",e,t,void 0,arguments)},includes(...e){return vi(this,"includes",e)},indexOf(...e){return vi(this,"indexOf",e)},join(e){return Ft(this).join(e)},lastIndexOf(...e){return vi(this,"lastIndexOf",e)},map(e,t){return ot(this,"map",e,t,void 0,arguments)},pop(){return Qt(this,"pop")},push(...e){return Qt(this,"push",e)},reduce(e,...t){return yo(this,"reduce",e,t)},reduceRight(e,...t){return yo(this,"reduceRight",e,t)},shift(){return Qt(this,"shift")},some(e,t){return ot(this,"some",e,t,void 0,arguments)},splice(...e){return Qt(this,"splice",e)},toReversed(){return Ft(this).toReversed()},toSorted(e){return Ft(this).toSorted(e)},toSpliced(...e){return Ft(this).toSpliced(...e)},unshift(...e){return Qt(this,"unshift",e)},values(){return mi(this,"values",e=>Xe(this,e))}};function mi(e,t,n){const i=ti(e),o=i[t]();return i!==e&&!Me(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.done||(s.value=n(s.value)),s}),o}const jp=Array.prototype;function ot(e,t,n,i,o,s){const r=ti(e),c=r!==e&&!Me(e),a=r[t];if(a!==jp[t]){const d=a.apply(e,s);return c?Ge(d):d}let u=n;r!==e&&(c?u=function(d,v){return n.call(this,Xe(e,d),v,e)}:n.length>2&&(u=function(d,v){return n.call(this,d,v,e)}));const p=a.call(r,u,i);return c&&o?o(p):p}function yo(e,t,n,i){const o=ti(e),s=o!==e&&!Me(e);let r=n,c=!1;o!==e&&(s?(c=i.length===0,r=function(u,p,d){return c&&(c=!1,u=Xe(e,u)),n.call(this,u,Xe(e,p),d,e)}):n.length>3&&(r=function(u,p,d){return n.call(this,u,p,d,e)}));const a=o[t](r,...i);return c?Xe(e,a):a}function vi(e,t,n){const i=q(e);Te(i,"iterate",fn);const o=i[t](...n);return(o===-1||o===!1)&&oo(n[0])?(n[0]=q(n[0]),i[t](...n)):o}function Qt(e,t,n=[]){pt(),Ji();const i=q(e)[t].apply(e,n);return Zi(),ut(),i}const Gp=Ki("__proto__,__v_isRef,__isVue"),ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(et));function Up(e){et(e)||(e=String(e));const t=q(this);return Te(t,"has",e),t.hasOwnProperty(e)}class Rs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(o?s?Qp:Is:s?Cs:Es).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=M(t);if(!o){let a;if(r&&(a=Hp[n]))return a;if(n==="hasOwnProperty")return Up}const c=Reflect.get(t,n,be(t)?t:i);if((et(n)?ws.has(n):Gp(n))||(o||Te(t,"get",n),s))return c;if(be(c)){const a=r&&Wi(n)?c:c.value;return o&&Z(a)?Ii(a):a}return Z(c)?o?Ii(c):no(c):c}}class Ss extends Rs{constructor(t=!1){super(!1,t)}set(t,n,i,o){let s=t[n];const r=M(t)&&Wi(n);if(!this._isShallow){const u=_t(s);if(!Me(i)&&!_t(i)&&(s=q(s),i=q(i)),!r&&be(s)&&!be(i))return u||(s.value=i),!0}const c=r?Number(n)<t.length:J(t,n),a=Reflect.set(t,n,i,be(t)?t:o);return t===q(o)&&a&&(c?Ze(i,s)&&at(t,"set",n,i):at(t,"add",n,i)),a}deleteProperty(t,n){const i=J(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&at(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!et(n)||!ws.has(n))&&Te(t,"has",n),i}ownKeys(t){return Te(t,"iterate",M(t)?"length":St),Reflect.ownKeys(t)}}class Vp extends Rs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Yp=new Ss,Kp=new Vp,qp=new Ss(!0);const Ci=e=>e,En=e=>Reflect.getPrototypeOf(e);function Wp(e,t,n){return function(...i){const o=this.__v_raw,s=q(o),r=Yt(s),c=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,u=o[e](...i),p=n?Ci:t?Wt:Ge;return!t&&Te(s,"iterate",a?Ei:St),fe(Object.create(u),{next(){const{value:d,done:v}=u.next();return v?{value:d,done:v}:{value:c?[p(d[0]),p(d[1])]:p(d),done:v}}})}}function Cn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zp(e,t){const n={get(o){const s=this.__v_raw,r=q(s),c=q(o);e||(Ze(o,c)&&Te(r,"get",o),Te(r,"get",c));const{has:a}=En(r),u=t?Ci:e?Wt:Ge;if(a.call(r,o))return u(s.get(o));if(a.call(r,c))return u(s.get(c));s!==r&&s.get(o)},get size(){const o=this.__v_raw;return!e&&Te(q(o),"iterate",St),o.size},has(o){const s=this.__v_raw,r=q(s),c=q(o);return e||(Ze(o,c)&&Te(r,"has",o),Te(r,"has",c)),o===c?s.has(o):s.has(o)||s.has(c)},forEach(o,s){const r=this,c=r.__v_raw,a=q(c),u=t?Ci:e?Wt:Ge;return!e&&Te(a,"iterate",St),c.forEach((p,d)=>o.call(s,u(p),u(d),r))}};return fe(n,e?{add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear")}:{add(o){const s=q(this),r=En(s),c=q(o),a=!t&&!Me(o)&&!_t(o)?c:o;return r.has.call(s,a)||Ze(o,a)&&r.has.call(s,o)||Ze(c,a)&&r.has.call(s,c)||(s.add(a),at(s,"add",a,a)),this},set(o,s){!t&&!Me(s)&&!_t(s)&&(s=q(s));const r=q(this),{has:c,get:a}=En(r);let u=c.call(r,o);u||(o=q(o),u=c.call(r,o));const p=a.call(r,o);return r.set(o,s),u?Ze(s,p)&&at(r,"set",o,s):at(r,"add",o,s),this},delete(o){const s=q(this),{has:r,get:c}=En(s);let a=r.call(s,o);a||(o=q(o),a=r.call(s,o)),c&&c.call(s,o);const u=s.delete(o);return a&&at(s,"delete",o,void 0),u},clear(){const o=q(this),s=o.size!==0,r=o.clear();return s&&at(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Wp(o,e,t)}),n}function to(e,t){const n=zp(e,t);return(i,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(J(n,o)&&o in i?n:i,o,s)}const Xp={get:to(!1,!1)},Jp={get:to(!1,!0)},Zp={get:to(!0,!1)};const Es=new WeakMap,Cs=new WeakMap,Is=new WeakMap,Qp=new WeakMap;function eu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function no(e){return _t(e)?e:io(e,!1,Yp,Xp,Es)}function tu(e){return io(e,!1,qp,Jp,Cs)}function Ii(e){return io(e,!0,Kp,Zp,Is)}function io(e,t,n,i,o){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const r=eu(Lp(e));if(r===0)return e;const c=new Proxy(e,r===2?i:n);return o.set(e,c),c}function Et(e){return _t(e)?Et(e.__v_raw):!!(e&&e.__v_isReactive)}function _t(e){return!!(e&&e.__v_isReadonly)}function Me(e){return!!(e&&e.__v_isShallow)}function oo(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function nu(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&ms(e,"__v_skip",!0),e}const Ge=e=>Z(e)?no(e):e,Wt=e=>Z(e)?Ii(e):e;function be(e){return e?e.__v_isRef===!0:!1}function ce(e){return $s(e,!1)}function ni(e){return $s(e,!0)}function $s(e,t){return be(e)?e:new iu(e,t)}class iu{constructor(t,n){this.dep=new eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:q(t),this._value=n?t:Ge(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Me(t)||_t(t);t=i?t:q(t),Ze(t,n)&&(this._rawValue=t,this._value=i?t:Ge(t),this.dep.trigger())}}function O(e){return be(e)?e.value:e}const ou={get:(e,t,n)=>t==="__v_raw"?e:O(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return be(o)&&!be(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function Ms(e){return Et(e)?e:new Proxy(e,ou)}class su{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return Ts(this,!0),!0}get value(){const t=this.dep.track();return Ls(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ru(e,t,n=!1){let i,o;return j(e)?i=e:(i=e.get,o=e.set),new su(i,o,n)}const In={},jn=new WeakMap;let Rt;function cu(e,t=!1,n=Rt){if(n){let i=jn.get(n);i||jn.set(n,i=[]),i.push(e)}}function au(e,t,n=ne){const{immediate:i,deep:o,once:s,scheduler:r,augmentJob:c,call:a}=n,u=R=>o?R:Me(R)||o===!1||o===0?lt(R,1):lt(R);let p,d,v,k,H=!1,A=!1;if(be(e)?(d=()=>e.value,H=Me(e)):Et(e)?(d=()=>u(e),H=!0):M(e)?(A=!0,H=e.some(R=>Et(R)||Me(R)),d=()=>e.map(R=>{if(be(R))return R.value;if(Et(R))return u(R);if(j(R))return a?a(R,2):R()})):j(e)?t?d=a?()=>a(e,2):e:d=()=>{if(v){pt();try{v()}finally{ut()}}const R=Rt;Rt=p;try{return a?a(e,3,[k]):e(k)}finally{Rt=R}}:d=Qe,t&&o){const R=d,V=o===!0?1/0:o;d=()=>lt(R(),V)}const F=Dp(),G=()=>{p.stop(),F&&F.active&&qi(F.effects,p)};if(s&&t){const R=t;t=(...V)=>{const ae=R(...V);return G(),ae}}let C=A?new Array(e.length).fill(In):In;const U=R=>{if(!(!(p.flags&1)||!p.dirty&&!R))if(t){const V=p.run();if(R||o||H||(A?V.some((ae,z)=>Ze(ae,C[z])):Ze(V,C))){v&&v();const ae=Rt;Rt=p;try{const z=[V,C===In?void 0:A&&C[0]===In?[]:C,k];C=V,a?a(t,3,z):t(...z)}finally{Rt=ae}}}else p.run()};return c&&c(U),p=new ks(d),p.scheduler=r?()=>r(U,!1):U,k=R=>cu(R,!1,p),v=p.onStop=()=>{const R=jn.get(p);if(R){if(a)a(R,4);else for(const V of R)V();jn.delete(p)}},t?i?U(!0):C=p.run():r?r(U.bind(null,!0),!0):p.run(),G.pause=p.pause.bind(p),G.resume=p.resume.bind(p),G.stop=G,G}function lt(e,t=1/0,n){if(t<=0||!Z(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,be(e))lt(e.value,t,n);else if(M(e))for(let i=0;i<e.length;i++)lt(e[i],t,n);else if(us(e)||Yt(e))e.forEach(i=>{lt(i,t,n)});else if(fs(e)){for(const i in e)lt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&lt(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function On(e,t,n,i){try{return i?e(...i):e()}catch(o){ii(o,t,n)}}function De(e,t,n,i){if(j(e)){const o=On(e,t,n,i);return o&&_s(o)&&o.catch(s=>{ii(s,t,n)}),o}if(M(e)){const o=[];for(let s=0;s<e.length;s++)o.push(De(e[s],t,n,i));return o}}function ii(e,t,n,i=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||ne;if(t){let c=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,a,u)===!1)return}c=c.parent}if(s){pt(),On(s,null,10,[e,a,u]),ut();return}}lu(e,n,o,i,r)}function lu(e,t,n,i=!0,o=!1){if(o)throw e;console.error(e)}const Le=[];let We=-1;const Kt=[];let kt=null,Bt=0;const Ns=Promise.resolve();let Gn=null;function pu(e){const t=Gn||Ns;return e?t.then(this?e.bind(this):e):t}function uu(e){let t=We+1,n=Le.length;for(;t<n;){const i=t+n>>>1,o=Le[i],s=gn(o);s<e||s===e&&o.flags&2?t=i+1:n=i}return t}function so(e){if(!(e.flags&1)){const t=gn(e),n=Le[Le.length-1];!n||!(e.flags&2)&&t>=gn(n)?Le.push(e):Le.splice(uu(t),0,e),e.flags|=1,Ds()}}function Ds(){Gn||(Gn=Ns.then(Bs))}function _u(e){if(!M(e))kt&&e.id===-1?kt.splice(Bt+1,0,e):e.flags&1||(Kt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Kt.push(e[t]);Ds()}function To(e,t,n=We+1){for(;n<Le.length;n++){const i=Le[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Le.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Fs(e){if(Kt.length){const t=[...new Set(Kt)].sort((n,i)=>gn(n)-gn(i));if(Kt.length=0,kt){for(let n=0;n<t.length;n++)kt.push(t[n]);return}for(kt=t,Bt=0;Bt<kt.length;Bt++){const n=kt[Bt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kt=null,Bt=0}}const gn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Bs(e){try{for(We=0;We<Le.length;We++){const t=Le[We];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),On(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;We<Le.length;We++){const t=Le[We];t&&(t.flags&=-2)}We=-1,Le.length=0,Fs(),Gn=null,(Le.length||Kt.length)&&Bs()}}let $e=null,Hs=null;function Un(e){const t=$e;return $e=e,Hs=e&&e.type.__scopeId||null,t}function js(e,t=$e,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Io(-1);const s=Un(t),r=Ct.length;let c;try{c=e(...o)}finally{for(let a=Ct.length;a>r;a--)dr();Un(s),i._d&&Io(1)}return c};return i._n=!0,i._c=!0,i._d=!0,i}function du(e,t){if($e===null)return e;const n=ai($e),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,c,a=ne]=t[o];s&&(j(s)&&(s={mounted:s,updated:s}),s.deep&&lt(r),i.push({dir:s,instance:n,value:r,oldValue:void 0,arg:c,modifiers:a}))}return e}function Lt(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const c=o[r];s&&(c.oldValue=s[r].value);let a=c.dir[i];a&&(pt(),De(a,n,8,[e.el,c,e,t]),ut())}}function fu(e,t){if(Pe){let n=Pe.provides;const i=Pe.parent&&Pe.parent.provides;i===n&&(n=Pe.provides=Object.create(i)),n[e]=t}}function Dn(e,t,n=!1){const i=vr();if(i||qt){let o=qt?qt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&j(t)?t.call(i&&i.proxy):t}}const gu=Symbol.for("v-scx"),mu=()=>Dn(gu);function je(e,t,n){return Gs(e,t,n)}function Gs(e,t,n=ne){const{immediate:i,deep:o,flush:s,once:r}=n,c=fe({},n),a=t&&i||!t&&s!=="post";let u;if(xn){if(s==="sync"){const k=mu();u=k.__watcherHandles||(k.__watcherHandles=[])}else if(!a){const k=()=>{};return k.stop=Qe,k.resume=Qe,k.pause=Qe,k}}const p=Pe;c.call=(k,H,A)=>De(k,p,H,A);let d=!1;s==="post"?c.scheduler=k=>{Oe(k,p&&p.suspense)}:s!=="sync"&&(d=!0,c.scheduler=(k,H)=>{H?k():so(k)}),c.augmentJob=k=>{t&&(k.flags|=4),d&&(k.flags|=2,p&&(k.id=p.uid,k.i=p))};const v=au(e,t,c);return xn&&(u?u.push(v):a&&v()),v}function vu(e,t,n){const i=this.proxy,o=pe(e)?e.includes(".")?Us(i,e):()=>i[e]:e.bind(i,i);let s;j(t)?s=t:(s=t.handler,n=t);const r=Rn(this),c=Gs(o,s.bind(i),n);return r(),c}function Us(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}const hu=Symbol("_vte"),oi=e=>e.__isTeleport,ze=Symbol("_leaveCb"),en=Symbol("_enterCb");function xu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return co(()=>{e.isMounted=!0}),zs(()=>{e.isUnmounting=!0}),e}const Ie=[Function,Array],ku={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie};function yu(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==tt){t=n;break}}return t}function Tu(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function $i(e,t,n,i,o){const{appear:s,mode:r,persisted:c=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:v,onLeave:k,onAfterLeave:H,onLeaveCancelled:A,onBeforeAppear:F,onAppear:G,onAfterAppear:C,onAppearCancelled:U}=t,R=String(e.key),V=Tu(n,e),ae=(I,K)=>{I&&De(I,i,9,K)},z=(I,K)=>{const ie=K[1];ae(I,K),M(I)?I.every(w=>w.length<=1)&&ie():I.length<=1&&ie()},re={mode:r,persisted:c,beforeEnter(I){let K=a;if(!n.isMounted)if(s)K=F||a;else return;I[ze]&&I[ze](!0);const ie=V[R];ie&&Ht(e,ie)&&ie.el[ze]&&ie.el[ze](),ae(K,[I])},enter(I){if(V[R]===e)return;let K=u,ie=p,w=d;if(!n.isMounted)if(s)K=G||u,ie=C||p,w=U||d;else return;let X=!1;I[en]=Fe=>{X||(X=!0,Fe?ae(w,[I]):ae(ie,[I]),re.delayedLeave&&re.delayedLeave(),I[en]=void 0)};const ge=I[en].bind(null,!1);K?z(K,[I,ge]):ge()},leave(I,K){const ie=String(e.key);if(I[en]&&I[en](!0),n.isUnmounting)return K();ae(v,[I]);let w=!1;I[ze]=ge=>{w||(w=!0,K(),ge?ae(A,[I]):ae(H,[I]),I[ze]=void 0,V[ie]===e&&delete V[ie])};const X=I[ze].bind(null,!1);V[ie]=e,k?z(k,[I,X]):X()},clone(I){return $i(I,t,n,i)}};return re}function Vs(e){if(!ro(e))return oi(e.type)&&e.children?yu(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&j(n.default))return n.default()}}function mn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;mn(oi(n.type)&&Vs(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ys(e,t=!1,n){let i=[],o=0;for(let s=0;s<e.length;s++){let r=e[s];const c=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===ke?(r.patchFlag&128&&o++,i=i.concat(Ys(r.children,t,c))):(t||r.type!==tt)&&i.push(c!=null?It(r,{key:c}):r)}if(o>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function dt(e,t){return j(e)?fe({name:e.name},t,{setup:e}):e}function Ks(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function bo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Vn=new WeakMap;function ln(e,t,n,i,o=!1){if(M(e)){e.forEach((A,F)=>ln(A,t&&(M(t)?t[F]:t),n,i,o));return}if(pn(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ln(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?ai(i.component):i.el,r=o?null:s,{i:c,r:a}=e,u=t&&t.r,p=c.refs===ne?c.refs={}:c.refs,d=c.setupState,v=q(d),k=d===ne?ps:A=>bo(p,A)?!1:J(v,A),H=(A,F)=>!(F&&bo(p,F));if(u!=null&&u!==a){if(Ao(t),pe(u))p[u]=null,k(u)&&(d[u]=null);else if(be(u)){const A=t;H(u,A.k)&&(u.value=null),A.k&&(p[A.k]=null)}}if(j(a))On(a,c,12,[r,p]);else{const A=pe(a),F=be(a);if(A||F){const G=()=>{if(e.f){const C=A?k(a)?d[a]:p[a]:H()||!e.k?a.value:p[e.k];if(o)M(C)&&qi(C,s);else if(M(C))C.includes(s)||C.push(s);else if(A)p[a]=[s],k(a)&&(d[a]=p[a]);else{const U=[s];H(a,e.k)&&(a.value=U),e.k&&(p[e.k]=U)}}else A?(p[a]=r,k(a)&&(d[a]=r)):F&&(H(a,e.k)&&(a.value=r),e.k&&(p[e.k]=r))};if(r){const C=()=>{G(),Vn.delete(e)};C.id=-1,Vn.set(e,C),Oe(C,n)}else Ao(e),G()}}}function Ao(e){const t=Vn.get(e);t&&(t.flags|=8,Vn.delete(e))}ei().requestIdleCallback;ei().cancelIdleCallback;const pn=e=>!!e.type.__asyncLoader,ro=e=>e.type.__isKeepAlive;function bu(e,t){qs(e,"a",t)}function Au(e,t){qs(e,"da",t)}function qs(e,t,n=Pe){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(si(t,i,n),n){let o=n.parent;for(;o&&o.parent;)ro(o.parent.vnode)&&Lu(i,t,n,o),o=o.parent}}function Lu(e,t,n,i){const o=si(t,e,i,!0);Xt(()=>{qi(i[t],o)},n)}function si(e,t,n=Pe,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{pt();const c=Rn(n),a=De(t,n,e,r);return c(),ut(),a});return i?o.unshift(s):o.push(s),s}}const ft=e=>(t,n=Pe)=>{(!xn||e==="sp")&&si(e,(...i)=>t(...i),n)},Pu=ft("bm"),co=ft("m"),Ou=ft("bu"),Ws=ft("u"),zs=ft("bum"),Xt=ft("um"),wu=ft("sp"),Ru=ft("rtg"),Su=ft("rtc");function Eu(e,t=Pe){si("ec",e,t)}const Cu=Symbol.for("v-ndc");function wn(e,t,n,i){let o;const s=n,r=M(e);if(r||pe(e)){const c=r&&Et(e);let a=!1,u=!1;c&&(a=!Me(e),u=_t(e),e=ti(e)),o=new Array(e.length);for(let p=0,d=e.length;p<d;p++)o[p]=t(a?u?Wt(Ge(e[p])):Ge(e[p]):e[p],p,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,s)}else if(Z(e))if(e[Symbol.iterator])o=Array.from(e,(c,a)=>t(c,a,void 0,s));else{const c=Object.keys(e);o=new Array(c.length);for(let a=0,u=c.length;a<u;a++){const p=c[a];o[a]=t(e[p],p,a,s)}}else o=[];return o}const Mi=e=>e?hr(e)?ai(e):Mi(e.parent):null,un=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mi(e.parent),$root:e=>Mi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Js(e),$forceUpdate:e=>e.f||(e.f=()=>{so(e.update)}),$nextTick:e=>e.n||(e.n=pu.bind(e.proxy)),$watch:e=>vu.bind(e)}),hi=(e,t)=>e!==ne&&!e.__isScriptSetup&&J(e,t),Iu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:c,appContext:a}=e;if(t[0]!=="$"){const v=r[t];if(v!==void 0)switch(v){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(hi(i,t))return r[t]=1,i[t];if(o!==ne&&J(o,t))return r[t]=2,o[t];if(J(s,t))return r[t]=3,s[t];if(n!==ne&&J(n,t))return r[t]=4,n[t];Ni&&(r[t]=0)}}const u=un[t];let p,d;if(u)return t==="$attrs"&&Te(e.attrs,"get",""),u(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==ne&&J(n,t))return r[t]=4,n[t];if(d=a.config.globalProperties,J(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return hi(o,t)?(o[t]=n,!0):i!==ne&&J(i,t)?(i[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,props:s,type:r}},c){let a;return!!(n[c]||e!==ne&&c[0]!=="$"&&J(e,c)||hi(t,c)||J(s,c)||J(i,c)||J(un,c)||J(o.config.globalProperties,c)||(a=r.__cssModules)&&a[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Lo(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ni=!0;function $u(e){const t=Js(e),n=e.proxy,i=e.ctx;Ni=!1,t.beforeCreate&&Po(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:c,provide:a,inject:u,created:p,beforeMount:d,mounted:v,beforeUpdate:k,updated:H,activated:A,deactivated:F,beforeDestroy:G,beforeUnmount:C,destroyed:U,unmounted:R,render:V,renderTracked:ae,renderTriggered:z,errorCaptured:re,serverPrefetch:I,expose:K,inheritAttrs:ie,components:w,directives:X,filters:ge}=t;if(u&&Mu(u,i,null),r)for(const se in r){const Q=r[se];j(Q)&&(i[se]=Q.bind(n))}if(o){const se=o.call(n,n);Z(se)&&(e.data=no(se))}if(Ni=!0,s)for(const se in s){const Q=s[se],nt=j(Q)?Q.bind(n,n):j(Q.get)?Q.get.bind(n,n):Qe,Nt=!j(Q)&&j(Q.set)?Q.set.bind(n):Qe,it=W({get:nt,set:Nt});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ce=>it.value=Ce})}if(c)for(const se in c)Xs(c[se],i,n,se);if(a){const se=j(a)?a.call(n):a;Reflect.ownKeys(se).forEach(Q=>{fu(Q,se[Q])})}p&&Po(p,e,"c");function _e(se,Q){M(Q)?Q.forEach(nt=>se(nt.bind(n))):Q&&se(Q.bind(n))}if(_e(Pu,d),_e(co,v),_e(Ou,k),_e(Ws,H),_e(bu,A),_e(Au,F),_e(Eu,re),_e(Su,ae),_e(Ru,z),_e(zs,C),_e(Xt,R),_e(wu,I),M(K))if(K.length){const se=e.exposed||(e.exposed={});K.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>n[Q],set:nt=>n[Q]=nt,enumerable:!0})})}else e.exposed||(e.exposed={});V&&e.render===Qe&&(e.render=V),ie!=null&&(e.inheritAttrs=ie),w&&(e.components=w),X&&(e.directives=X),I&&Ks(e)}function Mu(e,t,n=Qe){M(e)&&(e=Di(e));for(const i in e){const o=e[i];let s;Z(o)?"default"in o?s=Dn(o.from||i,o.default,!0):s=Dn(o.from||i):s=Dn(o),be(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function Po(e,t,n){De(M(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xs(e,t,n,i){let o=i.includes(".")?Us(n,i):()=>n[i];if(pe(e)){const s=t[e];j(s)&&je(o,s)}else if(j(e))je(o,e.bind(n));else if(Z(e))if(M(e))e.forEach(s=>Xs(s,t,n,i));else{const s=j(e.handler)?e.handler.bind(n):t[e.handler];j(s)&&je(o,s,e)}}function Js(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,c=s.get(t);let a;return c?a=c:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(u=>Yn(a,u,r,!0)),Yn(a,t,r)),Z(t)&&s.set(t,a),a}function Yn(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&Yn(e,s,n,!0),o&&o.forEach(r=>Yn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const c=Nu[r]||n&&n[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const Nu={data:Oo,props:wo,emits:wo,methods:on,computed:on,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:on,directives:on,watch:Fu,provide:Oo,inject:Du};function Oo(e,t){return t?e?function(){return fe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Du(e,t){return on(Di(e),Di(t))}function Di(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?fe(Object.create(null),e,t):t}function wo(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:fe(Object.create(null),Lo(e),Lo(t??{})):t}function Fu(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const i in t)n[i]=Ae(e[i],t[i]);return n}function Zs(){return{app:null,config:{isNativeTag:ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bu=0;function Hu(e,t){return function(i,o=null){j(i)||(i=fe({},i)),o!=null&&!Z(o)&&(o=null);const s=Zs(),r=new WeakSet,c=[];let a=!1;const u=s.app={_uid:Bu++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:v_,get config(){return s.config},set config(p){},use(p,...d){return r.has(p)||(p&&j(p.install)?(r.add(p),p.install(u,...d)):j(p)&&(r.add(p),p(u,...d))),u},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),u},component(p,d){return d?(s.components[p]=d,u):s.components[p]},directive(p,d){return d?(s.directives[p]=d,u):s.directives[p]},mount(p,d,v){if(!a){const k=u._ceVNode||Ee(i,o);return k.appContext=s,v===!0?v="svg":v===!1&&(v=void 0),e(k,p,v),a=!0,u._container=p,p.__vue_app__=u,ai(k.component)}},onUnmount(p){c.push(p)},unmount(){a&&(De(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(p,d){return s.provides[p]=d,u},runWithContext(p){const d=qt;qt=u;try{return p()}finally{qt=d}}};return u}}let qt=null;const ju=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${Mt(t)}Modifiers`];function Gu(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ne;let o=n;const s=t.startsWith("update:"),r=s&&ju(i,t.slice(7));r&&(r.trim&&(o=n.map(p=>pe(p)?p.trim():p)),r.number&&(o=n.map(zi)));let c,a=i[c=di(t)]||i[c=di(Be(t))];!a&&s&&(a=i[c=di(Mt(t))]),a&&De(a,e,6,o);const u=i[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,De(u,e,6,o)}}const Uu=new WeakMap;function Qs(e,t,n=!1){const i=n?Uu:t.emitsCache,o=i.get(e);if(o!==void 0)return o;const s=e.emits;let r={},c=!1;if(!j(e)){const a=u=>{const p=Qs(u,t,!0);p&&(c=!0,fe(r,p))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(Z(e)&&i.set(e,null),null):(M(s)?s.forEach(a=>r[a]=null):fe(r,s),Z(e)&&i.set(e,r),r)}function ri(e,t){return!e||!Jn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,Mt(t))||J(e,t))}function Ro(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:c,emit:a,render:u,renderCache:p,props:d,data:v,setupState:k,ctx:H,inheritAttrs:A}=e,F=Un(e);let G,C;try{if(n.shapeFlag&4){const R=o||i,V=R;G=Je(u.call(V,R,p,d,k,v,H)),C=c}else{const R=t;G=Je(R.length>1?R(d,{attrs:c,slots:r,emit:a}):R(d,null)),C=t.props?c:Vu(c)}}catch(R){Ct.length=0,ii(R,e,1),G=Ee(tt)}let U=G;if(C&&A!==!1){const R=Object.keys(C),{shapeFlag:V}=U;R.length&&V&7&&(s&&R.some(Zn)&&(C=Yu(C,s)),U=It(U,C,!1,!0))}if(n.dirs&&(U=It(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition){const R=oi(U.type)&&Vs(U)||U;mn(R,n.transition)}return G=U,Un(F),G}const Vu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jn(n))&&((t||(t={}))[n]=e[n]);return t},Yu=(e,t)=>{const n={};for(const i in e)(!Zn(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Ku(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:c,patchFlag:a}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?So(i,r,u):!!r;if(a&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const v=p[d];if(er(r,i,v)&&!ri(u,v))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:i===r?!1:i?r?So(i,r,u):!0:!!r;return!1}function So(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(er(t,e,s)&&!ri(n,s))return!0}return!1}function er(e,t,n){const i=e[n],o=t[n];return n==="style"&&Z(i)&&Z(o)?!Xi(i,o):i!==o}function qu({vnode:e,parent:t,suspense:n},i){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=i,e=o),o===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const tr={},nr=()=>Object.create(tr),ir=e=>Object.getPrototypeOf(e)===tr;function Wu(e,t,n,i=!1){const o={},s=nr();e.propsDefaults=Object.create(null),or(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:tu(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function zu(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,c=q(o),[a]=e.propsOptions;let u=!1;if((i||r>0)&&!(r&16)){if(r&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let v=p[d];if(ri(e.emitsOptions,v))continue;const k=t[v];if(a)if(J(s,v))k!==s[v]&&(s[v]=k,u=!0);else{const H=Be(v);o[H]=Fi(a,c,H,k,e,!1)}else k!==s[v]&&(s[v]=k,u=!0)}}}else{or(e,t,o,s)&&(u=!0);let p;for(const d in c)(!t||!J(t,d)&&((p=Mt(d))===d||!J(t,p)))&&(a?n&&(n[d]!==void 0||n[p]!==void 0)&&(o[d]=Fi(a,c,d,void 0,e,!0)):delete o[d]);if(s!==c)for(const d in s)(!t||!J(t,d))&&(delete s[d],u=!0)}u&&at(e.attrs,"set","")}function or(e,t,n,i){const[o,s]=e.propsOptions;let r=!1,c;if(t)for(let a in t){if(rn(a))continue;const u=t[a];let p;o&&J(o,p=Be(a))?!s||!s.includes(p)?n[p]=u:(c||(c={}))[p]=u:ri(e.emitsOptions,a)||(!(a in i)||u!==i[a])&&(i[a]=u,r=!0)}if(s){const a=q(n),u=c||ne;for(let p=0;p<s.length;p++){const d=s[p];n[d]=Fi(o,a,d,u[d],e,!J(u,d))}}return r}function Fi(e,t,n,i,o,s){const r=e[n];if(r!=null){const c=J(r,"default");if(c&&i===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&j(a)){const{propsDefaults:u}=o;if(n in u)i=u[n];else{const p=Rn(o);i=u[n]=a.call(null,t),p()}}else i=a;o.ce&&o.ce._setProp(n,i)}r[0]&&(s&&!c?i=!1:r[1]&&(i===""||i===Mt(n))&&(i=!0))}return i}const Xu=new WeakMap;function sr(e,t,n=!1){const i=n?Xu:t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},c=[];let a=!1;if(!j(e)){const p=d=>{a=!0;const[v,k]=sr(d,t,!0);fe(r,v),k&&c.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!a)return Z(e)&&i.set(e,Vt),Vt;if(M(s))for(let p=0;p<s.length;p++){const d=Be(s[p]);Eo(d)&&(r[d]=ne)}else if(s)for(const p in s){const d=Be(p);if(Eo(d)){const v=s[p],k=r[d]=M(v)||j(v)?{type:v}:fe({},v),H=k.type;let A=!1,F=!0;if(M(H))for(let G=0;G<H.length;++G){const C=H[G],U=j(C)&&C.name;if(U==="Boolean"){A=!0;break}else U==="String"&&(F=!1)}else A=j(H)&&H.name==="Boolean";k[0]=A,k[1]=F,(A||J(k,"default"))&&c.push(d)}}const u=[r,c];return Z(e)&&i.set(e,u),u}function Eo(e){return e[0]!=="$"&&!rn(e)}const ao=e=>e==="_"||e==="_ctx"||e==="$stable",lo=e=>M(e)?e.map(Je):[Je(e)],Ju=(e,t,n)=>{if(t._n)return t;const i=js((...o)=>lo(t(...o)),n);return i._c=!1,i},rr=(e,t,n)=>{const i=e._ctx;for(const o in e){if(ao(o))continue;const s=e[o];if(j(s))t[o]=Ju(o,s,i);else if(s!=null){const r=lo(s);t[o]=()=>r}}},cr=(e,t)=>{const n=lo(t);e.slots.default=()=>n},ar=(e,t,n)=>{for(const i in t)(n||!ao(i))&&(e[i]=t[i])},Zu=(e,t,n)=>{const i=e.slots=nr();if(e.vnode.shapeFlag&32){const o=t._;o?(ar(i,t,n),n&&ms(i,"_",o,!0)):rr(t,i)}else t&&cr(e,t)},Qu=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=ne;if(i.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:ar(o,t,n):(s=!t.$stable,rr(t,o)),r=t}else t&&(cr(e,t),r={default:1});if(s)for(const c in o)!ao(c)&&r[c]==null&&delete o[c]},Oe=o_;function e_(e){return t_(e)}function t_(e,t){const n=ei();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:c,createComment:a,setText:u,setElementText:p,parentNode:d,nextSibling:v,setScopeId:k=Qe,insertStaticContent:H}=e,A=(l,_,f,x=null,g=null,m=null,L=void 0,b=null,T=!!_.dynamicChildren)=>{if(l===_)return;l&&!Ht(l,_)&&(x=Dt(l),Ce(l,g,m,!0),l=null),_.patchFlag===-2&&(T=!1,_.dynamicChildren=null);const{type:h,ref:$,shapeFlag:P}=_;switch(h){case ci:F(l,_,f,x);break;case tt:G(l,_,f,x);break;case Fn:l==null&&C(_,f,x,L);break;case ke:w(l,_,f,x,g,m,L,b,T);break;default:P&1?V(l,_,f,x,g,m,L,b,T):P&6?X(l,_,f,x,g,m,L,b,T):(P&64||P&128)&&h.process(l,_,f,x,g,m,L,b,T,vt)}$!=null&&g?ln($,l&&l.ref,m,_||l,!_):$==null&&l&&l.ref!=null&&ln(l.ref,null,m,l,!0)},F=(l,_,f,x)=>{if(l==null)i(_.el=c(_.children),f,x);else{const g=_.el=l.el;_.children!==l.children&&u(g,_.children)}},G=(l,_,f,x)=>{l==null?i(_.el=a(_.children||""),f,x):_.el=l.el},C=(l,_,f,x)=>{[l.el,l.anchor]=H(l.children,_,f,x,l.el,l.anchor)},U=({el:l,anchor:_},f,x)=>{let g;for(;l&&l!==_;)g=v(l),i(l,f,x),l=g;i(_,f,x)},R=({el:l,anchor:_})=>{let f;for(;l&&l!==_;)f=v(l),o(l),l=f;o(_)},V=(l,_,f,x,g,m,L,b,T)=>{if(_.type==="svg"?L="svg":_.type==="math"&&(L="mathml"),l==null)ae(_,f,x,g,m,L,b,T);else{const h=l.el&&l.el._isVueCE?l.el:null;try{h&&h._beginPatch(),I(l,_,g,m,L,b,T)}finally{h&&h._endPatch()}}},ae=(l,_,f,x,g,m,L,b)=>{let T,h;const{props:$,shapeFlag:P,transition:E,dirs:D}=l;if(T=l.el=r(l.type,m,$&&$.is,$),P&8?p(T,l.children):P&16&&re(l.children,T,null,x,g,xi(l,m),L,b),D&&Lt(l,null,x,"created"),z(T,l,l.scopeId,L,x),$){for(const te in $)te!=="value"&&!rn(te)&&s(T,te,null,$[te],m,x);"value"in $&&s(T,"value",null,$.value,m),(h=$.onVnodeBeforeMount)&&Ke(h,x,l)}D&&Lt(l,null,x,"beforeMount");const Y=n_(g,E);Y&&E.beforeEnter(T),i(T,_,f),((h=$&&$.onVnodeMounted)||Y||D)&&Oe(()=>{try{h&&Ke(h,x,l),Y&&E.enter(T),D&&Lt(l,null,x,"mounted")}finally{}},g)},z=(l,_,f,x,g)=>{if(f&&k(l,f),x)for(let m=0;m<x.length;m++)k(l,x[m]);if(g){let m=g.subTree;if(_===m||_r(m.type)&&(m.ssContent===_||m.ssFallback===_)){const L=g.vnode;z(l,L,L.scopeId,L.slotScopeIds,g.parent)}}},re=(l,_,f,x,g,m,L,b,T=0)=>{for(let h=T;h<l.length;h++){const $=l[h]=b?ct(l[h]):Je(l[h]);A(null,$,_,f,x,g,m,L,b)}},I=(l,_,f,x,g,m,L)=>{const b=_.el=l.el;let{patchFlag:T,dynamicChildren:h,dirs:$}=_;T|=l.patchFlag&16;const P=l.props||ne,E=_.props||ne;let D;if(f&&Pt(f,!1),(D=E.onVnodeBeforeUpdate)&&Ke(D,f,_,l),$&&Lt(_,l,f,"beforeUpdate"),f&&Pt(f,!0),h&&(!l.dynamicChildren||l.dynamicChildren.length!==h.length)&&(T=0,L=!1,h=null),(P.innerHTML&&E.innerHTML==null||P.textContent&&E.textContent==null)&&p(b,""),h?K(l.dynamicChildren,h,b,f,x,xi(_,g),m):L||Q(l,_,b,null,f,x,xi(_,g),m,!1),T>0){if(T&16)ie(b,P,E,f,g);else if(T&2&&P.class!==E.class&&s(b,"class",null,E.class,g),T&4&&s(b,"style",P.style,E.style,g),T&8){const Y=_.dynamicProps;for(let te=0;te<Y.length;te++){const ee=Y[te],de=P[ee],he=E[ee];(he!==de||ee==="value")&&s(b,ee,de,he,g,f)}}T&1&&l.children!==_.children&&p(b,_.children)}else!L&&h==null&&ie(b,P,E,f,g);((D=E.onVnodeUpdated)||$)&&Oe(()=>{D&&Ke(D,f,_,l),$&&Lt(_,l,f,"updated")},x)},K=(l,_,f,x,g,m,L)=>{for(let b=0;b<_.length;b++){const T=l[b],h=_[b],$=T.el&&(T.type===ke||!Ht(T,h)||T.shapeFlag&198)?d(T.el):f;A(T,h,$,null,x,g,m,L,!0)}},ie=(l,_,f,x,g)=>{if(_!==f){if(_!==ne)for(const m in _)!rn(m)&&!(m in f)&&s(l,m,_[m],null,g,x);for(const m in f){if(rn(m))continue;const L=f[m],b=_[m];L!==b&&m!=="value"&&s(l,m,b,L,g,x)}"value"in f&&s(l,"value",_.value,f.value,g)}},w=(l,_,f,x,g,m,L,b,T)=>{const h=_.el=l?l.el:c(""),$=_.anchor=l?l.anchor:c("");let{patchFlag:P,dynamicChildren:E,slotScopeIds:D}=_;D&&(b=b?b.concat(D):D),l==null?(i(h,f,x),i($,f,x),re(_.children||[],f,$,g,m,L,b,T)):P>0&&P&64&&E&&l.dynamicChildren&&l.dynamicChildren.length===E.length?(K(l.dynamicChildren,E,f,g,m,L,b),(_.key!=null||g&&_===g.subTree)&&lr(l,_,!0)):Q(l,_,f,$,g,m,L,b,T)},X=(l,_,f,x,g,m,L,b,T)=>{_.slotScopeIds=b,l==null?_.shapeFlag&512?g.ctx.activate(_,f,x,L,T):ge(_,f,x,g,m,L,T):Fe(l,_,T)},ge=(l,_,f,x,g,m,L)=>{const b=l.component=u_(l,x,g);if(ro(l)&&(b.ctx.renderer=vt),__(b,!1,L),b.asyncDep){if(g&&g.registerDep(b,_e,L),!l.el){const T=b.subTree=Ee(tt);G(null,T,_,f),l.placeholder=T.el}}else _e(b,l,_,f,g,m,L)},Fe=(l,_,f)=>{const x=_.component=l.component;if(Ku(l,_,f))if(x.asyncDep&&!x.asyncResolved){se(x,_,f);return}else x.next=_,x.update();else _.el=l.el,x.vnode=_},_e=(l,_,f,x,g,m,L)=>{const b=()=>{if(l.isMounted){let{next:P,bu:E,u:D,parent:Y,vnode:te}=l;{const Ve=pr(l);if(Ve){P&&(P.el=te.el,se(l,P,L)),Ve.asyncDep.then(()=>{Oe(()=>{l.isUnmounted||h()},g)});return}}let ee=P,de;Pt(l,!1),P?(P.el=te.el,se(l,P,L)):P=te,E&&Nn(E),(de=P.props&&P.props.onVnodeBeforeUpdate)&&Ke(de,Y,P,te),Pt(l,!0);const he=Ro(l),Ue=l.subTree;l.subTree=he,A(Ue,he,d(Ue.el),Dt(Ue),l,g,m),P.el=he.el,ee===null&&qu(l,he.el),D&&Oe(D,g),(de=P.props&&P.props.onVnodeUpdated)&&Oe(()=>Ke(de,Y,P,te),g)}else{let P;const{el:E,props:D}=_,{bm:Y,m:te,parent:ee,root:de,type:he}=l,Ue=pn(_);Pt(l,!1),Y&&Nn(Y),!Ue&&(P=D&&D.onVnodeBeforeMount)&&Ke(P,ee,_),Pt(l,!0);{de.ce&&de.ce._hasShadowRoot()&&de.ce._injectChildStyle(he,l.parent?l.parent.type:void 0);const Ve=l.subTree=Ro(l);A(null,Ve,f,x,l,g,m),_.el=Ve.el}if(te&&Oe(te,g),!Ue&&(P=D&&D.onVnodeMounted)){const Ve=_;Oe(()=>Ke(P,ee,Ve),g)}(_.shapeFlag&256||ee&&pn(ee.vnode)&&ee.vnode.shapeFlag&256)&&l.a&&Oe(l.a,g),l.isMounted=!0,_=f=x=null}};l.scope.on();const T=l.effect=new ks(b);l.scope.off();const h=l.update=T.run.bind(T),$=l.job=T.runIfDirty.bind(T);$.i=l,$.id=l.uid,T.scheduler=()=>so($),Pt(l,!0),h()},se=(l,_,f)=>{_.component=l;const x=l.vnode.props;l.vnode=_,l.next=null,zu(l,_.props,x,f),Qu(l,_.children,f),pt(),To(l),ut()},Q=(l,_,f,x,g,m,L,b,T=!1)=>{const h=l&&l.children,$=l?l.shapeFlag:0,P=_.children,{patchFlag:E,shapeFlag:D}=_;if(E>0){if(E&128){Nt(h,P,f,x,g,m,L,b,T);return}else if(E&256){nt(h,P,f,x,g,m,L,b,T);return}}D&8?($&16&&gt(h,g,m),P!==h&&p(f,P)):$&16?D&16?Nt(h,P,f,x,g,m,L,b,T):gt(h,g,m,!0):($&8&&p(f,""),D&16&&re(P,f,x,g,m,L,b,T))},nt=(l,_,f,x,g,m,L,b,T)=>{l=l||Vt,_=_||Vt;const h=l.length,$=_.length,P=Math.min(h,$);let E;for(E=0;E<P;E++){const D=_[E]=T?ct(_[E]):Je(_[E]);A(l[E],D,f,null,g,m,L,b,T)}h>$?gt(l,g,m,!0,!1,P):re(_,f,x,g,m,L,b,T,P)},Nt=(l,_,f,x,g,m,L,b,T)=>{let h=0;const $=_.length;let P=l.length-1,E=$-1;for(;h<=P&&h<=E;){const D=l[h],Y=_[h]=T?ct(_[h]):Je(_[h]);if(Ht(D,Y))A(D,Y,f,null,g,m,L,b,T);else break;h++}for(;h<=P&&h<=E;){const D=l[P],Y=_[E]=T?ct(_[E]):Je(_[E]);if(Ht(D,Y))A(D,Y,f,null,g,m,L,b,T);else break;P--,E--}if(h>P){if(h<=E){const D=E+1,Y=D<$?_[D].el:x;for(;h<=E;)A(null,_[h]=T?ct(_[h]):Je(_[h]),f,Y,g,m,L,b,T),h++}}else if(h>E)for(;h<=P;)Ce(l[h],g,m,!0),h++;else{const D=h,Y=h,te=new Map;for(h=Y;h<=E;h++){const we=_[h]=T?ct(_[h]):Je(_[h]);we.key!=null&&te.set(we.key,h)}let ee,de=0;const he=E-Y+1;let Ue=!1,Ve=0;const Zt=new Array(he);for(h=0;h<he;h++)Zt[h]=0;for(h=D;h<=P;h++){const we=l[h];if(de>=he){Ce(we,g,m,!0);continue}let Ye;if(we.key!=null)Ye=te.get(we.key);else for(ee=Y;ee<=E;ee++)if(Zt[ee-Y]===0&&Ht(we,_[ee])){Ye=ee;break}Ye===void 0?Ce(we,g,m,!0):(Zt[Ye-Y]=h+1,Ye>=Ve?Ve=Ye:Ue=!0,A(we,_[Ye],f,null,g,m,L,b,T),de++)}const go=Ue?i_(Zt):Vt;for(ee=go.length-1,h=he-1;h>=0;h--){const we=Y+h,Ye=_[we],mo=_[we+1],vo=we+1<$?mo.el||ur(mo):x;Zt[h]===0?A(null,Ye,f,vo,g,m,L,b,T):Ue&&(ee<0||h!==go[ee]?it(Ye,f,vo,2):ee--)}}},it=(l,_,f,x,g=null)=>{const{el:m,type:L,transition:b,children:T,shapeFlag:h}=l;if(h&6){it(l.component.subTree,_,f,x);return}if(h&128){l.suspense.move(_,f,x);return}if(h&64){L.move(l,_,f,vt);return}if(L===ke){i(m,_,f);for(let P=0;P<T.length;P++)it(T[P],_,f,x);i(l.anchor,_,f);return}if(L===Fn){U(l,_,f);return}if(x!==2&&h&1&&b)if(x===0)b.persisted&&!m[ze]?i(m,_,f):(b.beforeEnter(m),i(m,_,f),Oe(()=>b.enter(m),g));else{const{leave:P,delayLeave:E,afterLeave:D}=b,Y=()=>{l.ctx.isUnmounted?o(m):i(m,_,f)},te=()=>{const ee=m._isLeaving||!!m[ze];m._isLeaving&&m[ze](!0),b.persisted&&!ee?Y():P(m,()=>{Y(),D&&D()})};E?E(m,Y,te):te()}else i(m,_,f)},Ce=(l,_,f,x=!1,g=!1)=>{const{type:m,props:L,ref:b,children:T,dynamicChildren:h,shapeFlag:$,patchFlag:P,dirs:E,cacheIndex:D,memo:Y}=l;if(P===-2&&(g=!1),b!=null&&(pt(),ln(b,null,f,l,!0),ut()),D!=null&&(_.renderCache[D]=void 0),$&256){_.ctx.deactivate(l);return}const te=$&1&&E,ee=!pn(l);let de;if(ee&&(de=L&&L.onVnodeBeforeUnmount)&&Ke(de,_,l),$&6)Jt(l.component,f,x);else{if($&128){l.suspense.unmount(f,x);return}te&&Lt(l,null,_,"beforeUnmount"),$&64?l.type.remove(l,_,f,vt,x):h&&!h.hasOnce&&(m!==ke||P>0&&P&64)?gt(h,_,f,!1,!0):(m===ke&&P&384||!g&&$&16)&&gt(T,_,f),x&&Sn(l)}const he=Y!=null&&D==null;(ee&&(de=L&&L.onVnodeUnmounted)||te||he)&&Oe(()=>{de&&Ke(de,_,l),te&&Lt(l,null,_,"unmounted"),he&&(l.el=null)},f)},Sn=l=>{const{type:_,el:f,anchor:x,transition:g}=l;if(_===ke){_i(f,x);return}if(_===Fn){R(l);return}const m=()=>{o(f),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:L,delayLeave:b}=g,T=()=>L(f,m);b?b(l.el,m,T):T()}else m()},_i=(l,_)=>{let f;for(;l!==_;)f=v(l),o(l),l=f;o(_)},Jt=(l,_,f)=>{const{bum:x,scope:g,job:m,subTree:L,um:b,m:T,a:h}=l;Co(T),Co(h),x&&Nn(x),g.stop(),m&&(m.flags|=8,Ce(L,l,_,f)),b&&Oe(b,_),Oe(()=>{l.isUnmounted=!0},_)},gt=(l,_,f,x=!1,g=!1,m=0)=>{for(let L=m;L<l.length;L++)Ce(l[L],_,f,x,g)},Dt=l=>{if(l.shapeFlag&6)return Dt(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const _=v(l.anchor||l.el),f=_&&_[hu];return f?v(f):_};let mt=!1;const At=(l,_,f)=>{let x;l==null?_._vnode&&(Ce(_._vnode,null,null,!0),x=_._vnode.component):A(_._vnode||null,l,_,null,null,null,f),_._vnode=l,mt||(mt=!0,To(x),Fs(),mt=!1)},vt={p:A,um:Ce,m:it,r:Sn,mt:ge,mc:re,pc:Q,pbc:K,n:Dt,o:e};return{render:At,hydrate:void 0,createApp:Hu(At)}}function xi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function n_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function lr(e,t,n=!1){const i=e.children,o=t.children;if(M(i)&&M(o))for(let s=0;s<i.length;s++){const r=i[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=ct(o[s]),c.el=r.el),!n&&c.patchFlag!==-2&&lr(r,c)),c.type===ci&&(c.patchFlag===-1&&(c=o[s]=ct(c)),c.el=r.el),c.type===tt&&!c.el&&(c.el=r.el)}}function i_(e){const t=e.slice(),n=[0];let i,o,s,r,c;const a=e.length;for(i=0;i<a;i++){const u=e[i];if(u!==0){if(o=n[n.length-1],e[o]<u){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)c=s+r>>1,e[n[c]]<u?s=c+1:r=c;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function pr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pr(t)}function Co(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ur(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?ur(t.subTree):null}const _r=e=>e.__isSuspense;function o_(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):_u(e)}const ke=Symbol.for("v-fgt"),ci=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),Fn=Symbol.for("v-stc"),Ct=[];let Se=null;function S(e=!1){Ct.push(Se=e?null:[])}function dr(){Ct.pop(),Se=Ct[Ct.length-1]||null}let vn=1;function Io(e,t=!1){vn+=e,e<0&&Se&&t&&(Se.hasOnce=!0)}function fr(e){return e.dynamicChildren=vn>0?Se||Vt:null,dr(),vn>0&&Se&&Se.push(e),e}function B(e,t,n,i,o,s){return fr(y(e,t,n,i,o,s,!0))}function st(e,t,n,i,o){return fr(Ee(e,t,n,i,o,!0))}function gr(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const mr=({key:e})=>e??null,Bn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||be(e)||j(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function y(e,t=null,n=null,i=0,o=null,s=e===ke?0:1,r=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mr(t),ref:t&&Bn(t),scopeId:Hs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:$e};return c?(Kn(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),vn>0&&!r&&Se&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Se.push(a),a}const Ee=s_;function s_(e,t=null,n=null,i=0,o=null,s=!1){if((!e||e===Cu)&&(e=tt),gr(e)){const c=It(e,t,!0);return n&&Kn(c,n),vn>0&&!s&&Se&&(c.shapeFlag&6?Se[Se.indexOf(e)]=c:Se.push(c)),c.patchFlag=-2,c}if(m_(e)&&(e=e.__vccOpts),t){t=r_(t);let{class:c,style:a}=t;c&&!pe(c)&&(t.class=ve(c)),Z(a)&&(oo(a)&&!M(a)&&(a=fe({},a)),t.style=Ne(a))}const r=pe(e)?1:_r(e)?128:oi(e)?64:Z(e)?4:j(e)?2:0;return y(e,t,n,i,o,r,s,!0)}function r_(e){return e?oo(e)||ir(e)?fe({},e):e:null}function It(e,t,n=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:c,transition:a}=e,u=t?a_(o||{},t):o,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&mr(u),ref:t&&t.ref?n&&s?M(s)?s.concat(Bn(t)):[s,Bn(t)]:Bn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&mn(p,a.clone(p)),p}function c_(e=" ",t=0){return Ee(ci,null,e,t)}function ki(e,t){const n=Ee(Fn,null,e);return n.staticCount=t,n}function ye(e="",t=!1){return t?(S(),st(tt,null,e)):Ee(tt,null,e)}function Je(e){return e==null||typeof e=="boolean"?Ee(tt):M(e)?Ee(ke,null,e.slice()):gr(e)?ct(e):Ee(ci,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function Kn(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),Kn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!ir(t)?t._ctx=$e:o===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(j(t)){if(i&65){Kn(e,{default:t});return}t={default:t,_ctx:$e},n=32}else t=String(t),i&64?(n=16,t=[c_(t)]):n=8;e.children=t,e.shapeFlag|=n}function a_(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=ve([t.class,i.class]));else if(o==="style")t.style=Ne([t.style,i.style]);else if(Jn(o)){const s=t[o],r=i[o];r&&s!==r&&!(M(s)&&s.includes(r))?t[o]=s?[].concat(s,r):r:r==null&&s==null&&!Zn(o)&&(t[o]=r)}else o!==""&&(t[o]=i[o])}return t}function Ke(e,t,n,i=null){De(e,t,7,[n,i])}const l_=Zs();let p_=0;function u_(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||l_,s={uid:p_++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Np(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sr(i,o),emitsOptions:Qs(i,o),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:i.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Gu.bind(null,s),e.ce&&e.ce(s),s}let Pe=null;const vr=()=>Pe||$e;let qn,hn;{const e=ei(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};qn=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),hn=t("__VUE_SSR_SETTERS__",n=>xn=n)}const Rn=e=>{const t=Pe;return qn(e),e.scope.on(),()=>{e.scope.off(),qn(t)}},$o=()=>{Pe&&Pe.scope.off(),qn(null)};function hr(e){return e.vnode.shapeFlag&4}let xn=!1;function __(e,t=!1,n=!1){t&&hn(t);const{props:i,children:o}=e.vnode,s=hr(e);Wu(e,i,s,t),Zu(e,o,n||t);const r=s?d_(e,t):void 0;return t&&hn(!1),r}function d_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Iu);const{setup:i}=n;if(i){pt();const o=e.setupContext=i.length>1?g_(e):null,s=Rn(e),r=On(i,e,0,[e.props,o]),c=_s(r);if(ut(),s(),(c||e.sp)&&!pn(e)&&Ks(e),c){if(r.then($o,$o),t)return r.then(a=>{hn(!0);try{Mo(e,a,t)}finally{hn(!1)}}).catch(a=>{ii(a,e,0)});e.asyncDep=r}else Mo(e,r)}else xr(e)}function Mo(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Ms(t)),xr(e)}function xr(e,t,n){const i=e.type;e.render||(e.render=i.render||Qe);{const o=Rn(e);pt();try{$u(e)}finally{ut(),o()}}}const f_={get(e,t){return Te(e,"get",""),e[t]}};function g_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,f_),slots:e.slots,emit:e.emit,expose:t}}function ai(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ms(nu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}})):e.proxy}function m_(e){return j(e)&&"__vccOpts"in e}const W=(e,t)=>ru(e,t,xn),v_="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bi;const No=typeof window<"u"&&window.trustedTypes;if(No)try{Bi=No.createPolicy("vue",{createHTML:e=>e})}catch{}const kr=Bi?e=>Bi.createHTML(e):e=>e,h_="http://www.w3.org/2000/svg",x_="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,Do=rt&&rt.createElement("template"),k_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?rt.createElementNS(h_,e):t==="mathml"?rt.createElementNS(x_,e):n?rt.createElement(e,{is:n}):rt.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Do.innerHTML=kr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const c=Do.content;if(i==="svg"||i==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ht="transition",tn="animation",zt=Symbol("_vtc"),yr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},y_=fe({},ku,yr),Ot=(e,t=[])=>{M(e)?e.forEach(n=>n(...t)):e&&e(...t)},Fo=e=>e?M(e)?e.some(t=>t.length>1):e.length>1:!1;function T_(e){const t={};for(const w in e)w in yr||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=s,appearActiveClass:u=r,appearToClass:p=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=e,H=b_(o),A=H&&H[0],F=H&&H[1],{onBeforeEnter:G,onEnter:C,onEnterCancelled:U,onLeave:R,onLeaveCancelled:V,onBeforeAppear:ae=G,onAppear:z=C,onAppearCancelled:re=U}=t,I=(w,X,ge,Fe)=>{w._enterCancelled=Fe,xt(w,X?p:c),xt(w,X?u:r),ge&&ge()},K=(w,X)=>{w._isLeaving=!1,xt(w,d),xt(w,k),xt(w,v),X&&X()},ie=w=>(X,ge)=>{const Fe=w?z:C,_e=()=>I(X,w,ge);Ot(Fe,[X,_e]),Bo(()=>{xt(X,w?a:s),qe(X,w?p:c),Fo(Fe)||Ho(X,i,A,_e)})};return fe(t,{onBeforeEnter(w){Ot(G,[w]),qe(w,s),qe(w,r)},onBeforeAppear(w){Ot(ae,[w]),qe(w,a),qe(w,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(w,X){w._isLeaving=!0;const ge=()=>K(w,X);qe(w,d),w._enterCancelled?(qe(w,v),Hi(w)):(Hi(w),qe(w,v)),Bo(()=>{w._isLeaving&&(xt(w,d),qe(w,k),Fo(R)||Ho(w,i,F,ge))}),Ot(R,[w,ge])},onEnterCancelled(w){I(w,!1,void 0,!0),Ot(U,[w])},onAppearCancelled(w){I(w,!0,void 0,!0),Ot(re,[w])},onLeaveCancelled(w){K(w),Ot(V,[w])}})}function b_(e){if(e==null)return null;if(Z(e))return[yi(e.enter),yi(e.leave)];{const t=yi(e);return[t,t]}}function yi(e){return wp(e)}function qe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zt]||(e[zt]=new Set)).add(t)}function xt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[zt];n&&(n.delete(t),n.size||(e[zt]=void 0))}function Bo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let A_=0;function Ho(e,t,n,i){const o=e._endId=++A_,s=()=>{o===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:r,timeout:c,propCount:a}=Tr(e,t);if(!r)return i();const u=r+"end";let p=0;const d=()=>{e.removeEventListener(u,v),s()},v=k=>{k.target===e&&++p>=a&&d()};setTimeout(()=>{p<a&&d()},c+1),e.addEventListener(u,v)}function Tr(e,t){const n=window.getComputedStyle(e),i=H=>(n[H]||"").split(", "),o=i(`${ht}Delay`),s=i(`${ht}Duration`),r=jo(o,s),c=i(`${tn}Delay`),a=i(`${tn}Duration`),u=jo(c,a);let p=null,d=0,v=0;t===ht?r>0&&(p=ht,d=r,v=s.length):t===tn?u>0&&(p=tn,d=u,v=a.length):(d=Math.max(r,u),p=d>0?r>u?ht:tn:null,v=p?p===ht?s.length:a.length:0);const k=p===ht&&/\b(?:transform|all)(?:,|$)/.test(i(`${ht}Property`).toString());return{type:p,timeout:d,propCount:v,hasTransform:k}}function jo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Go(n)+Go(e[i])))}function Go(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Hi(e){return(e?e.ownerDocument:document).body.offsetHeight}function L_(e,t,n){const i=e[zt];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Uo=Symbol("_vod"),br=Symbol("_vsh"),P_=Symbol(""),O_=/(?:^|;)\s*display\s*:/;function w_(e,t,n){const i=e.style,o=pe(n);let s=!1;if(n&&!o){if(t)if(pe(t))for(const r of t.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&sn(i,c,"")}else for(const r in t)n[r]==null&&sn(i,r,"");for(const r in n){r==="display"&&(s=!0);const c=n[r];c!=null?S_(e,r,!pe(t)&&t?t[r]:void 0,c)||sn(i,r,c):sn(i,r,"")}}else if(o){if(t!==n){const r=i[P_];r&&(n+=";"+r),i.cssText=n,s=O_.test(n)}}else t&&e.removeAttribute("style");Uo in e&&(e[Uo]=s?i.display:"",e[br]&&(i.display="none"))}const Vo=/\s*!important$/;function sn(e,t,n){if(M(n))n.forEach(i=>sn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=R_(e,t);Vo.test(n)?e.setProperty(Mt(i),n.replace(Vo,""),"important"):e[i]=n}}const Yo=["Webkit","Moz","ms"],Ti={};function R_(e,t){const n=Ti[t];if(n)return n;let i=Be(t);if(i!=="filter"&&i in e)return Ti[t]=i;i=gs(i);for(let o=0;o<Yo.length;o++){const s=Yo[o]+i;if(s in e)return Ti[t]=s}return t}function S_(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&pe(i)&&n===i}const Ko="http://www.w3.org/1999/xlink";function qo(e,t,n,i,o,s=$p(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ko,t.slice(6,t.length)):e.setAttributeNS(Ko,t,n):n==null||s&&!vs(n)?e.removeAttribute(t):e.setAttribute(t,s?"":et(n)?String(n):n)}function Wo(e,t,n,i,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?kr(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=vs(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function jt(e,t,n,i){e.addEventListener(t,n,i)}function E_(e,t,n,i){e.removeEventListener(t,n,i)}const zo=Symbol("_vei");function C_(e,t,n,i,o=null){const s=e[zo]||(e[zo]={}),r=s[t];if(i&&r)r.value=i;else{const[c,a]=M_(t);if(i){const u=s[t]=F_(i,o);jt(e,c,u,a)}else r&&(E_(e,c,r,a),s[t]=void 0)}}const I_=/(Once|Passive|Capture)$/,$_=/^on:?(?:Once|Passive|Capture)$/;function M_(e){let t,n;for(;(n=e.match(I_))&&!$_.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let bi=0;const N_=Promise.resolve(),D_=()=>bi||(N_.then(()=>bi=0),bi=Date.now());function F_(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const o=n.value;if(M(o)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const r=o.slice(),c=[i];for(let a=0;a<r.length&&!i._stopped;a++){const u=r[a];u&&De(u,t,5,c)}}else De(o,t,5,[i])};return n.value=e,n.attached=D_(),n}const Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,B_=(e,t,n,i,o,s)=>{const r=o==="svg";t==="class"?L_(e,i,r):t==="style"?w_(e,n,i):Jn(t)?Zn(t)||C_(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):H_(e,t,i,r))?(Wo(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qo(e,t,i,r,s,t!=="value")):e._isVueCE&&(j_(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!pe(i)))?Wo(e,Be(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),qo(e,t,i,r))};function H_(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xo(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Xo(t)&&pe(n)?!1:t in e}function j_(e,t){const n=e._def.props;if(!n)return!1;const i=Be(t);return Array.isArray(n)?n.some(o=>Be(o)===i):Object.keys(n).some(o=>Be(o)===i)}const Ar=new WeakMap,Lr=new WeakMap,Wn=Symbol("_moveCb"),Jo=Symbol("_enterCb"),G_=e=>(delete e.props.mode,e),U_=G_({name:"TransitionGroup",props:fe({},y_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=vr(),i=xu();let o,s;return Ws(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!W_(o[0].el,n.vnode.el,r)){o=[];return}o.forEach(Y_),o.forEach(K_);const c=o.filter(q_);Hi(n.vnode.el),c.forEach(a=>{const u=a.el,p=u.style;qe(u,r),p.transform=p.webkitTransform=p.transitionDuration="";const d=u[Wn]=v=>{v&&v.target!==u||(!v||v.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[Wn]=null,xt(u,r))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const r=q(e),c=T_(r);let a=r.tag||ke;if(o=[],s)for(let u=0;u<s.length;u++){const p=s[u];p.el&&p.el instanceof Element&&!p.el[br]&&(o.push(p),mn(p,$i(p,c,i,n)),Ar.set(p,Pr(p.el)))}s=t.default?Ys(t.default()):[];for(let u=0;u<s.length;u++){const p=s[u];p.key!=null&&mn(p,$i(p,c,i,n))}return Ee(a,null,s)}}}),V_=U_;function Y_(e){const t=e.el;t[Wn]&&t[Wn](),t[Jo]&&t[Jo]()}function K_(e){Lr.set(e,Pr(e.el))}function q_(e){const t=Ar.get(e),n=Lr.get(e),i=t.left-n.left,o=t.top-n.top;if(i||o){const s=e.el,r=s.style,c=s.getBoundingClientRect();let a=1,u=1;return s.offsetWidth&&(a=c.width/s.offsetWidth),s.offsetHeight&&(u=c.height/s.offsetHeight),(!Number.isFinite(a)||a===0)&&(a=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(a-1)<.01&&(a=1),Math.abs(u-1)<.01&&(u=1),r.transform=r.webkitTransform=`translate(${i/a}px,${o/u}px)`,r.transitionDuration="0s",e}}function Pr(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function W_(e,t,n){const i=e.cloneNode(),o=e[zt];o&&o.forEach(c=>{c.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(c=>c&&i.classList.add(c)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=Tr(i);return s.removeChild(i),r}const Zo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return M(t)?n=>Nn(t,n):t};function z_(e){e.target.composing=!0}function Qo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const $n=Symbol("_assign"),Mn=Symbol("_initialValue");function Ai(e,t,n){return t&&(e=e.trim()),n&&(e=zi(e)),e}const X_={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e.parentNode&&(e.type==="text"?e[Mn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Mn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[$n]=Zo(o);const s=i||o.props&&o.props.type==="number";jt(e,t?"change":"input",r=>{r.target.composing||e[$n](Ai(e.value,n,s))}),(n||s)&&jt(e,"change",()=>{e.value=Ai(e.value,n,s)}),t||(jt(e,"compositionstart",z_),jt(e,"compositionend",Qo),jt(e,"change",Qo))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const o=t??"",s=e[Mn];delete e[Mn],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[$n](Ai(e.value,n,i)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:o,number:s}},r){if(e[$n]=Zo(r),e.composing)return;const c=(s||e.type==="number")&&!/^0\d/.test(e.value)?zi(e.value):e.value,a=t??"";if(c===a)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(i&&t===n||o&&e.value.trim()===a)||(e.value=a)}},J_=["ctrl","shift","alt","meta"],Z_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>J_.some(n=>e[`${n}Key`]&&!t.includes(n))},Ut=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(o,...s)=>{for(let r=0;r<t.length;r++){const c=Z_[t[r]];if(c&&c(o,t))return}return e(o,...s)})},Q_=fe({patchProp:B_},k_);let es;function ed(){return es||(es=e_(Q_))}const td=(...e)=>{const t=ed().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=id(i);if(!o)return;const s=t._component;!j(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,nd(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function nd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function id(e){return pe(e)?document.querySelector(e):e}const kn={MIN:0,MAX:100},_n={BASE_DECAY:3,PRESSURE_COEF:2,RECORDER_RELIEF:3,INITIATIVE_COST_BASE:1,INITIATIVE_COST_STEP:1},Hn={T1:50,T2:30,T3:15},ts={DEFAULT:8,PANIC:4},ji={DESTROY_EVIDENCE_CAP:-20,HUSH_MONEY_EVIDENCE_CAP:30},Li={PLAYBOOK_EVIDENCE:5,NOTARY_RISK:-5,CALM_BREATH_COMPOSURE:30};function Or(e){return Math.min(kn.MAX,Math.max(kn.MIN,e))}function po(e){return{...e,flags:new Set(e.flags),items:new Set(e.items)}}function od(e,t,n,i){let o=n;return t.items.has("item_calm_breathing")&&e.tag==="BREATH"&&(o={...o,composure:Li.CALM_BREATH_COMPOSURE}),t.items.has("item_hr_playbook")&&i===3&&e.initiative===3&&(o={...o,evidence:(o.evidence??0)+Li.PLAYBOOK_EVIDENCE}),t.items.has("item_notary_habit")&&i===4&&e.initiative===3&&(o={...o,risk:(o.risk??0)+Li.NOTARY_RISK}),o}function sd(e){return e.tag==="PHYSICAL"?{forcedEnding:e.next}:null}function rd(e,t){switch(t){case"G_NEG_DESTROYED_EVIDENCE":e.evidenceCap=kn.MAX+ji.DESTROY_EVIDENCE_CAP;break;case"G_NEG_HUSH_MONEY":e.evidence=Math.min(e.evidence,ji.HUSH_MONEY_EVIDENCE_CAP);break}}function ns(e,t,n=1,i=0){const o=po(e),s=od(t,o,t.effects??{},n),r=["evidence","opinion","composure","risk"];for(const c of r){const a=s[c];a!==void 0&&(o[c]+=a)}if(t.initiative>=2&&t.tag!=="BREATH"){const c=(t.initiative-1)*(_n.INITIATIVE_COST_BASE+_n.INITIATIVE_COST_STEP*Math.floor(i/2));o.composure-=c}o.evidence>o.evidenceCap&&(o.evidence=o.evidenceCap);for(const c of r)o[c]=Or(o[c]);for(const c of s.addFlags??[])o.flags.add(c),rd(o,c);for(const c of s.removeFlags??[])o.flags.delete(c);for(const c of s.addItems??[])o.items.add(c);return o.turn+=1,o}function cd(e,t){const n=po(e),i=_n.BASE_DECAY+t.pressure*_n.PRESSURE_COEF,o=n.items.has("item_recorder")?_n.RECORDER_RELIEF:0;return n.composure=Or(n.composure-i+o),n}class ue extends Error{constructor(t){super(t),this.name="ContentError"}}function wr(e,t){return{evidence:e.evidence,opinion:e.opinion,composure:e.composure,risk:e.risk,dEvidence:e.evidence-t.evidence,dOpinion:e.opinion-t.opinion,dComposure:e.composure-t.composure,dRisk:e.risk-t.risk,flags:e.flags,items:e.items,turn:e.turn}}const ad=new Set(["evidence","opinion","composure","risk","dEvidence","dOpinion","dComposure","dRisk","turn"]);function ld(e){const t=[];let n=0;for(;n<e.length;){const i=e[n];if(i===" "||i==="	"||i===`
`||i==="\r"){n+=1;continue}if(i>="0"&&i<="9"){let r=n;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:Number(e.slice(n,r))}),n=r;continue}if(/[A-Za-z_]/.test(i)){let r=n;for(;r<e.length&&/[A-Za-z0-9_]/.test(e[r]);)r+=1;t.push({t:"id",v:e.slice(n,r)}),n=r;continue}if(i==="'"||i==='"'){let r=n+1;for(;r<e.length&&e[r]!==i;)r+=1;if(r>=e.length)throw new ue(`unterminated string in condition: ${e}`);t.push({t:"str",v:e.slice(n+1,r)}),n=r+1;continue}const o=e.slice(n,n+2);if(o==="&&"||o==="||"||o===">="||o==="<="||o==="=="||o==="!="){t.push({t:"op",v:o}),n+=2;continue}const s=e[n+1];if(i==="-"&&s!==void 0&&s>="0"&&s<="9"&&(t.length===0||t[t.length-1].t==="op")){let r=n+1;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:-Number(e.slice(n+1,r))}),n=r;continue}if(i===">"||i==="<"||i==="!"||i==="("||i===")"){t.push({t:"op",v:i}),n+=1;continue}throw new ue(`illegal character '${i}' in condition: ${e}`)}return t}class pd{constructor(t){me(this,"pos",0);this.tokens=t}peek(){return this.tokens[this.pos]}next(){const t=this.tokens[this.pos];if(t===void 0)throw new ue("unexpected end of condition");return this.pos+=1,t}eatOp(t){const n=this.next();if(n.t!=="op"||n.v!==t)throw new ue(`expected '${t}', got '${n.t==="op"?n.v:n.t}'`)}parse(){const t=this.parseOr();if(this.pos!==this.tokens.length){const n=this.peek();throw new ue(`unexpected trailing token '${n?n.t==="op"?n.v:n.t:"?"}'`)}return t}parseOr(){let t=this.parseAnd();for(;this.matchOp("||");)t={kind:"binary",op:"||",left:t,right:this.parseAnd()};return t}parseAnd(){let t=this.parseCompare();for(;this.matchOp("&&");)t={kind:"binary",op:"&&",left:t,right:this.parseCompare()};return t}parseCompare(){const t=this.parseUnary(),n=this.peek();return n!==void 0&&n.t==="op"&&[">=",">","<=","<","==","!="].includes(n.v)?(this.pos+=1,{kind:"compare",op:n.v,left:t,right:this.parseUnary()}):t}parseUnary(){return this.matchOp("!")?{kind:"unary",op:"!",operand:this.parseUnary()}:this.parseAtom()}parseAtom(){const t=this.next();if(t.t==="num")return{kind:"num",value:t.v};if(t.t==="str")throw new ue("string literal only allowed as function argument");if(t.t==="op"&&t.v==="("){const n=this.parseOr();return this.eatOp(")"),n}if(t.t==="id"){if(t.v==="has"||t.v==="hasItem"){this.eatOp("(");const n=this.next();if(n.t!=="str")throw new ue(`'${t.v}' expects a quoted string argument`);return this.eatOp(")"),{kind:"call",fn:t.v,arg:n.v}}if(!ad.has(t.v))throw new ue(`unknown identifier '${t.v}' in condition`);return{kind:"var",name:t.v}}throw new ue(`unexpected operator '${t.v}' in condition`)}matchOp(t){const n=this.peek();return n!==void 0&&n.t==="op"&&n.v===t?(this.pos+=1,!0):!1}}const is=new Map;function ud(e){const t=is.get(e);if(t!==void 0)return t;const n=new pd(ld(e)).parse();return is.set(e,n),n}function Gt(e,t){switch(e.kind){case"num":return e.value!==0;case"var":return Rr(e.name,t)!==0;case"call":return e.fn==="has"?t.flags.has(e.arg):t.items.has(e.arg);case"unary":return!Gt(e.operand,t);case"binary":return e.op==="&&"?Gt(e.left,t)&&Gt(e.right,t):Gt(e.left,t)||Gt(e.right,t);case"compare":{const n=os(e.left,t),i=os(e.right,t);switch(e.op){case">=":return n>=i;case">":return n>i;case"<=":return n<=i;case"<":return n<i;case"==":return n===i;case"!=":return n!==i}}}}function os(e,t){if(e.kind==="num")return e.value;if(e.kind==="var")return Rr(e.name,t);throw new ue("comparison operands must be numbers")}function Rr(e,t){switch(e){case"evidence":return t.evidence;case"opinion":return t.opinion;case"composure":return t.composure;case"risk":return t.risk;case"dEvidence":return t.dEvidence;case"dOpinion":return t.dOpinion;case"dComposure":return t.dComposure;case"dRisk":return t.dRisk;case"turn":return t.turn;default:throw new ue(`unknown identifier '${e}'`)}}function Sr(e,t){return e.trim()==="true"?!0:Gt(ud(e),t)}function _d(e){return e<Hn.T3||e<Hn.T2?2:e<Hn.T1?1:0}function dd(e,t){const n=i=>{let o=0;const s=`${t}/${i}`;for(let r=0;r<s.length;r+=1)o=Math.imul(o,31)+s.charCodeAt(r)|0;return(o>>>1&2147483647)/2147483648};return[...e].sort((i,o)=>n(i.id)-n(o.id))}function ss(e,t,n=new Set){const i=e.options.filter(c=>c.oncePerNode===!0&&n.has(c.id)?!1:c.requires===void 0?!0:Sr(c.requires,wr(t,fd))),o=_d(t.composure),r=e.impulsePool.filter(c=>t.composure<c.unlockBelow).slice(0,o);return dd([...i,...r],e.id)}const fd={evidence:0,opinion:0,composure:0,risk:0};function gd(e,t){return t.composure<Hn.T3?ts.PANIC:e.timer??ts.DEFAULT}function md(e,t,n){if(t.flags.has("FORCED_F")){const o=e.endings.find(s=>s.condition==="FORCED");if(o===void 0)throw new ue(`level ${e.id} has FORCED_F state but no FORCED ending`);return o}const i=wr(t,n);for(const o of e.endings)if(o.condition!=="FORCED"&&Sr(o.condition,i))return o;throw new ue(`level ${e.id}: no ending condition matched (missing 'true' fallback?)`)}const vd="__END__";function Pi(e){return e.type==="choice"}class uo{constructor(t,n){me(this,"nodeMap");me(this,"endingMap");me(this,"initMeter");me(this,"current");me(this,"currentNodeId");me(this,"usedThisVisit",new Set);this.level=t,this.nodeMap=new Map(t.nodes.map(i=>[i.id,i])),this.endingMap=new Map(t.endings.map(i=>[i.id,i])),this.initMeter=t.initState,this.current=this.buildInitialState(n),this.currentNodeId=t.entryNode}buildInitialState(t){const n=new Set([...t.flags].filter(s=>s.startsWith("G_"))),i=n.has("G_NEG_DESTROYED_EVIDENCE")?kn.MAX+ji.DESTROY_EVIDENCE_CAP:kn.MAX,o=n.has("G_NEG_ASSAULT")?15:0;return{evidence:this.level.initState.evidence,opinion:this.level.initState.opinion,composure:this.level.initState.composure,risk:this.level.initState.risk+o,flags:n,items:new Set(t.items),turn:0,evidenceCap:i}}get state(){return this.current}start(){return this.advanceFrom(this.currentNodeId)}choose(t){const n=this.getNode(this.currentNodeId);if(!Pi(n))throw new ue(`choose() called on non-choice node ${n.id} in level ${this.level.id}`);const o=ss(n,this.current,this.usedThisVisit).find(s=>s.id===t);if(o===void 0)throw new ue(`option '${t}' not available at node ${n.id} (level ${this.level.id})`);return this.applyChoice(n,o)}timeout(){const t=this.getNode(this.currentNodeId);if(!Pi(t))throw new ue(`timeout() called on non-choice node ${t.id} in level ${this.level.id}`);const n=t.options.find(i=>i.id===t.timeoutOption);if(n===void 0)throw new ue(`timeoutOption '${t.timeoutOption}' not found in node ${t.id}`);return this.applyChoice(t,n)}getNode(t){const n=this.nodeMap.get(t);if(n===void 0)throw new ue(`node not found: ${t} (level ${this.level.id})`);return n}applyChoice(t,n){const i=sd(n);return i!==null?(this.current=ns(this.current,n,this.level.act,t.pressure),this.current.flags.add("FORCED_F"),this.current.flags.add("G_NEG_ASSAULT"),this.finishWith(i.forcedEnding)):(n.oncePerNode===!0&&this.usedThisVisit.add(n.id),this.current=ns(this.current,n,this.level.act,t.pressure),this.current=cd(this.current,t),this.advanceFrom(n.next))}advanceFrom(t){if(t===vd)return this.finishWith(null);let n=t;for(let i=0;i<hd;i+=1){const o=this.endingMap.get(n);if(o!==void 0)return this.finishWith(o.id);const s=this.getNode(n);return Pi(s)?(n!==this.currentNodeId&&(this.usedThisVisit=new Set),this.currentNodeId=s.id,{type:"options",options:ss(s,this.current,this.usedThisVisit),timer:gd(s,this.current),timeoutOptionId:s.timeoutOption,prompt:s.prompt,pressure:s.pressure,nodeId:s.id}):(this.currentNodeId=s.id,{type:"node",node:s})}throw new ue(`node chain too deep at ${n} (level ${this.level.id})`)}proceed(){const t=this.getNode(this.currentNodeId);if(t.next===void 0)throw new ue(`node ${t.id} has no next (level ${this.level.id})`);return this.advanceFrom(t.next)}finishWith(t){const n=t!==null?this.endingMap.get(t):void 0;if(t!==null&&n===void 0)throw new ue(`ending not found: ${t} (level ${this.level.id})`);const i=po(this.current);return{type:"ending",ending:n!==void 0?n:md(this.level,this.current,this.initMeter),state:i}}static simulate(t,n,i){const o=new uo(t,n);let s=o.start(),r=0;for(;;){if(s.type==="ending")return{rank:s.ending.rank,state:s.state};if(s.type==="node"){s=o.proceed();continue}if(s.type==="options"){const c=i[r];if(r+=1,c===void 0)throw new ue(`simulate path exhausted at node in level ${t.id}`);s=o.choose(c);continue}}}}const hd=200,Er="poju_shilu_save_v1";function Gi(){return{version:1,flags:[],items:[],levelResults:{},cards:[],settings:{mode:"NORMAL",sound:!0}}}const zn=globalThis.localStorage,Cr=typeof zn<"u"&&zn!==null;function xd(){if(!Cr)return Gi();const e=zn.getItem(Er);return e===null?Gi():JSON.parse(e)}function kd(e){Cr&&zn.setItem(Er,JSON.stringify(e))}const yd={L01:{flag:"G_EV_SUBWAY",minRank:["S","A"]},L02:{flag:"G_EV_ELEVATOR",minRank:["S","A"]},L03:{flag:"G_EV_MALL",minRank:["S","A"]},L04:{flag:"G_EV_NIGHTWALK",minRank:["S","A"]},L05:{flag:"G_EV_GYM",minRank:["S","A"]},L06:{flag:"G_EV_BETROTHAL",minRank:["S","A"]},L07:{flag:"G_EV_TRANSFER",minRank:["S","A"]},L08:{flag:"G_EV_PATERNITY",minRank:["S","A"]},L09:{flag:"G_EV_PRESERVATION",minRank:["S","A"]},L10:{flag:"G_EV_PROTECTION_ORDER",minRank:["S","A"]},L11:{flag:"G_EV_HR_WRITTEN",minRank:["S","A"]},L12:{flag:"G_EV_EMAIL_CHAIN",minRank:["S","A"]},L13:{flag:"G_EV_FULL_AUDIO",minRank:["S","A"]},L14:{flag:"G_EV_SUSPENSION",minRank:["S","A"]},L15:{flag:"G_EV_EXTORTION",minRank:["S","A"]},L16:{flag:"G_EV_ORIGINAL_CLIP",minRank:["S","A"]},L17:{flag:"G_EV_DOXX_NOTARY",minRank:["S","A"]},L18:{flag:"G_EV_LIVE_RECORD",minRank:["S","A"]},L19:{flag:"G_EV_PLATFORM",minRank:["S","A"]}},Td={L02:"G_NEG_DESTROYED_EVIDENCE",L07:"G_NEG_HUSH_MONEY",L10:"L10_VIOLATED",L13:"G_NEG_APOLOGY_LETTER",L17:"G_NEG_DOXXED_BACK"};function bd(e,t){switch(e){case"L01":return t==="S"||t==="A"?["item_recorder"]:[];case"L02":return["item_shen_card"];case"L08":return t==="S"?["item_calm_breathing"]:[];case"L11":return t==="S"||t==="A"?["item_hr_playbook"]:[];case"L16":return t==="S"||t==="A"?["item_notary_habit"]:[];default:return[]}}function Ad(e,t,n,i,o){const s={...e,flags:[...e.flags],items:[...e.items],levelResults:{...e.levelResults},cards:[...e.cards]},r=new Set(s.flags);for(const d of i.flags)d.startsWith("G_")&&r.add(d);const c=yd[t];if(c!==void 0&&c.minRank.includes(n.rank)){const d=Td[t];d!==void 0&&(r.has(d)||i.flags.has(d))||r.add(c.flag)}const a=bd(t,n.rank),u=new Set(s.items);for(const d of a)u.add(d);n.unlock!==void 0&&!s.cards.includes(n.unlock)&&s.cards.push(n.unlock);const p=o==null?void 0:o.now;return s.levelResults[t]={rank:n.rank,endingId:n.id,ts:p},s.flags=[...r].filter(d=>d.startsWith("G_")),s.items=[...u],s}const Ir="L01",$r="第01关 · 地铁三分钟",Mr=1,Nr={evidence:20,opinion:50,composure:80,risk:10},Dr=["hero","npc_l01_woman","crowd","officer_lin"],Fr="n_01",Br="card_law_L01",Hr=["T1","T2"],jr=[{id:"n_01",type:"cutscene",pressure:1,script:`三点十四分，三号线。车厢是满的，不算挤。
列车进站前一次急刹，所有人往前倾了半步。
你的手一直在门边的扶杆上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l01_woman",emotion:"shout",text:"谁摸我？！——就是你。你别动。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"半节车厢的人都转过头了。她的手指停在离你鼻尖十公分的地方。",timer:8,timeoutOption:"opt_freeze",options:[{id:"opt_hands_up",text:"（把双手举到胸前）我的手一直在扶杆上。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:-5,risk:-10,addFlags:["L01_HANDS_VISIBLE"]},next:"n_04"},{id:"opt_explain",text:"你误会了，刚才急刹车，大家都往前挤——",tag:"NEUTRAL",aggression:1,initiative:1,effects:{evidence:5,opinion:-5,composure:-10,risk:10},next:"n_04"},{id:"opt_freeze",text:"（愣住了，一个字也说不出来）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-5,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_leave",text:"（转身往车门那边走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-20,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（手机一部接一部举起来了。有人小声说：拍下来拍下来。）",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"她压低了声音，只有你们两个人听得见：「私了。两万。不然我现在就报警。」",timer:8,timeoutOption:"opt_hesitate",options:[{id:"opt_call_first",text:"（掏出手机）110 吗，三号线车厢，有人指认我。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10,addFlags:["L01_CALLED_POLICE_FIRST"]},next:"n_06"},{id:"opt_agree_police",text:"行，你报。我在这儿等着，哪儿也不去。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:10,opinion:10,composure:5,risk:-5},next:"n_06"},{id:"opt_pay",text:"两万是吧。我转你，别闹了。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:15,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_hesitate",text:"……能不能少点？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[{id:"imp_curse_01",text:"你他妈讹上瘾了是吧。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_06"}]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l01_woman",emotion:"perform",text:"（转向车厢，音量陡然拔高）大家都看看啊！他还想跑！",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她一句话说三遍，每一遍都对着不同的镜头。",timer:8,timeoutOption:"opt_pay_now",options:[{id:"opt_refuse_settle",text:"不私了。等民警来，该怎么查怎么查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,risk:-10},next:"n_08"},{id:"opt_ask_price",text:"你刚才说多少来着？大点声，我这边在录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:-5,composure:-5,risk:5,addFlags:["L01_PRICE_ON_RECORD"]},next:"n_08"},{id:"opt_pay_now",text:"（点开转账页面）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:10,risk:20,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_08"},{id:"opt_mock",text:"两万？你这价开得挺熟啊。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-15,composure:-5,risk:15},next:"n_08"}],impulsePool:[{id:"imp_curse_02",text:"你演够了没有？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08"},{id:"imp_shove_07",text:"（一把推开她举着的手机）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:5,speaker:"npc_l01_woman",emotion:"perform",text:"（举起手机怼到你脸前）你看镜头。你敢不敢看镜头。",next:"n_09"},{id:"n_09",type:"choice",pressure:5,prompt:"镜头离你的脸不到二十公分。车厢里已经有人开了直播。",timer:8,timeoutOption:"opt_silent",options:[{id:"opt_let_her_talk",text:"你把刚才那个数字，对着镜头再说一遍。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:10,opinion:20,composure:5,risk:-5},next:"n_10"},{id:"opt_silent",text:"（不说话。站在原地，录音开着）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_10"},{id:"opt_appeal_crowd",text:"大家都听到了！她一直在管我要钱！",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-10,composure:-10,risk:10},next:"n_10"},{id:"opt_block_camera",text:"（伸手去挡她的镜头）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_10"},{id:"opt_breath_l01",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_shout_09",text:"你他妈到底想干什么！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_shove_09",text:"（一把推开她）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:3,script:`列车停在站台上没有再走。
两名民警从车头方向挤过来。走在前面的那位胸前的执法记录仪亮着红灯。
「都别动。谁报的警？」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭翻开笔录本，笔尖悬在纸上。她看着你，也看着她，眼神完全一样。",timer:8,timeoutOption:"opt_emotional",options:[{id:"opt_demand_footage",text:"麻烦先调这节车厢的监控，越快越好。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:5,risk:-5,addFlags:["L01_DEMANDED_FOOTAGE"]},next:"n_12"},{id:"opt_factual",text:"三点十四分上车，一直站在门边扶杆。有监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:5,composure:10,risk:-10},next:"n_12"},{id:"opt_accuse",text:"你们先查她。她刚才管我要两万。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:5,opinion:-10,composure:-5,risk:10},next:"n_12"},{id:"opt_emotional",text:"我真没有！你们要相信我啊！",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-5,opinion:-10,composure:-10,risk:5},next:"n_12"}],impulsePool:[{id:"imp_shove_11",text:"（冲上去抓她）你跟警察说清楚！",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`站务室。屏幕上是三号线中部车厢的俯视角。
林昭把进度条往回拖了三分钟。`,next:"__END__"}],Gr=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 互殴",script:`你的手推在她身上。她后退半步，尖叫。
二十个镜头同时转向你。

——三天后——

行政拘留七日。罚款。
公司通报批评，年度考核直接判定不合格。
她的账号涨了四十一万粉，置顶那条视频叫《我被推倒的那三分钟》。

监控里你的手确实一直在扶杆上。
可现在没人关心那三分钟了，大家在看后面那两秒。

你本来只需要证明一件事没发生过。
现在你要解释的，多了一件确实发生了的。`,unlock:"card_L01_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=20 && opinion>=70 && composure>=30",title:"名场面 · 全程扶杆",script:`三分十七秒。
你的左手在扶杆上，一帧没动过。急刹的时候整节车厢都在晃，只有那只手是稳的。

林昭把画面定住，转过屏幕：「你看一下。」
她看了两秒，说：「……我可能记错了。」

林昭把笔录本推过去，笔帽拧开。
「那我们就把'记错的部分'，也记一下。」

手机在你口袋里还亮着，录音条一直在走。
从她说出那个数字的那一刻起，就没停过。`,unlock:"card_L01_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=15",title:"干净脱身",script:`监控调出来了，事实清楚。
笔录做完，她被单独带去了另一间。

出站的时候天还亮着。你在台阶上站了很久，手有点抖。
不是气的，是后怕——刚才有那么一两秒，你差点就伸手了。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`查清楚了，但花了四个小时。
笔录、比对、等监控调取，一样没少。

第二天有人把车厢里的片段传上去了，三十秒，没头没尾。
评论区吵成一团，没人等到后面那段。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`钱转出去了，事也没了。
她收了钱，删了视频，下车前还看了你一眼。

那一眼你看懂了：她知道你没做，你也知道她知道。
转账记录还在。备注栏是空的，什么也说明不了——
或者说，它能说明的那件事，对你不利。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 说不清了",script:`你解释得越多，看起来越像在辩解。
笔录上你的陈述前后差了两处，一处是时间，一处是手的位置。
你自己都记不清了——因为你从来没想过需要记这个。

视频当晚就上了热搜第七。
标题里有你公司的名字。`}],Ld={id:Ir,title:$r,act:Mr,initState:Nr,cast:Dr,entryNode:Fr,lawyerCard:Br,satireTargets:Hr,nodes:jr,endings:Gr},Pd=Object.freeze(Object.defineProperty({__proto__:null,act:Mr,cast:Dr,default:Ld,endings:Gr,entryNode:Fr,id:Ir,initState:Nr,lawyerCard:Br,nodes:jr,satireTargets:Hr,title:$r},Symbol.toStringTag,{value:"Module"})),Ur="L02",Vr="第02关 · 电梯里的镜头",Yr=1,Kr={evidence:25,opinion:45,composure:75,risk:10},qr=["hero","npc_l02_woman","crowd","shen_li","officer_lin"],Wr="n_01",zr="card_law_L02",Xr=["T1","T2"],Jr=[{id:"n_01",type:"cutscene",pressure:1,script:`写字楼，十八层下行。
电梯里六个人。你刚把手机从口袋里摸出来看时间。
数字停在 18:41。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l02_woman",emotion:"cold",text:"你刚才，是不是在拍我。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"电梯还有九层。另外四个人都低头看着自己的鞋。",timer:8,timeoutOption:"opt_hand_over",options:[{id:"opt_show_lock",text:"（把手机举起，屏幕朝外）锁屏的。我不解锁。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_deny_calm",text:"没有。我拿出来看时间。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:-5,risk:-5},next:"n_04"},{id:"opt_annoyed",text:"你说话过过脑子。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"},{id:"opt_hand_over",text:"（把手机直接递过去）你自己看。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:5,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（电梯到一层。门开了，前台和几个等电梯的人转过头来。没人出去。）",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她挡在门口：「解锁给我看。不然我现在就报警。」",timer:8,timeoutOption:"opt_unlock",options:[{id:"opt_refuse_search",text:"解锁不行。你要报警现在就报，手机一直在我手上。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15,addFlags:["L02_REFUSED_SEARCH"]},next:"n_06"},{id:"opt_call_self",text:"（自己拨号）110 吗，这边有个纠纷。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_unlock",text:"（解锁递过去）看吧，我没什么好藏的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:15},next:"n_06"},{id:"opt_delete",text:"（当场删掉相册最近几张）删了，行了吧。",tag:"DESTROY_EVIDENCE",aggression:0,initiative:1,effects:{evidence:-30,opinion:-15,composure:5,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE"]},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l02_woman",emotion:"calm_press",text:"你越是不给看，越说明有问题。你在怕什么？",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她说得很慢，很平静。大堂里已经站了十几个人。",timer:8,timeoutOption:"opt_over_explain",options:[{id:"opt_refuse_frame",text:"这个问题我不回答。等民警来，当他面查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_08"},{id:"opt_silent_wait",text:"（不接话，站着等）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_08"},{id:"opt_counter",text:"你凭什么怀疑我？你有证据吗？",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_08"},{id:"opt_over_explain",text:"我真没拍！我可以发誓！我平时根本不……",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-15,composure:-10,risk:5},next:"n_08"},{id:"opt_breath_l02",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l02",text:"你他妈有完没完。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"}]},{id:"n_08",type:"cutscene",pressure:3,script:`一个穿深色西装的女人从旋转门进来，脚步慢下来，看了两秒。
她走过来，从名片夹里抽出一张，递给你。
「沈骊。十一楼，律所。需要的话叫我一声。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"名片停在你和她之间。对方的表情第一次有了变化。",timer:8,timeoutOption:"opt_take_card",options:[{id:"opt_accept_help",text:"麻烦您。等民警来的时候，能请您在场吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:10,composure:15,risk:-10},next:"n_10"},{id:"opt_take_card",text:"（接过名片）谢谢。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:5,composure:10,risk:-5},next:"n_10"},{id:"opt_refuse_help",text:"不用了，我自己能说清楚。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-10,opinion:-5,composure:-5,risk:10},next:"n_10"},{id:"opt_vent",text:"您评评理，这不是讹人吗！",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:10},next:"n_10"}],impulsePool:[{id:"imp_shove_l02",text:"（伸手去推开挡在门口的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`民警来了。查验在两个人面前进行：相册按时间倒序翻，最近一张是三天前的猫。
执法记录仪红灯亮着。
她往门口挪了半步。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭抬头：「查验完了。双方还有什么要说的？」",timer:8,timeoutOption:"opt_let_go",options:[{id:"opt_request_record",text:"麻烦把查验结果写进笔录。她刚才的话我也录了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_factual_02",text:"我没别的要求，按流程走就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:10,risk:-5},next:"n_12"},{id:"opt_demand_apology",text:"她得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_12"},{id:"opt_let_go",text:"算了，查清楚就行，让她走吧。",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:5,risk:10},next:"n_12"}],impulsePool:[{id:"imp_shove_l02b",text:"（一把拽住要走的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`大堂的人散了。你低头看手里那张名片。
烫金的字，边角很硬。`,next:"__END__"}],Zr=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你先动的手",script:`大堂的监控拍得很清楚：她站着，你伸的手。

行政拘留五日。
物业把你公司的门禁权限暂停了三天，理由是「配合调查」。
HR 找你谈话的时候，桌上摊着那段十七秒的视频。

手机相册里最近一张还是三天前的猫。
没人再想看那张照片了。`,unlock:"card_L02_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=20 && opinion>=70 && composure>=60",title:"名场面 · 我不解锁",script:`「查验结果：未发现相关影像。」林昭在笔录上写完，把本子转过来。

她说她要走。
沈骊在旁边开口，声音不高：
「查验是在她要求下进行的。既然她提出了主张，那笔录里也得有她的部分。」
林昭点点头：「请留步。」

沈骊转向你，没什么表情：
「记住今天你做对的那一件事——你没解锁。」
「配合和放弃权利，长得很像。差别是，后者你收不回来。」`,unlock:"card_L02_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=30",title:"干净脱身",script:`查验完成，事情清楚。笔录签完字，前后不到四十分钟。

你回到工位，手心还是汗。
名片夹在工牌后面，那一晚你翻出来看了三次。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`解释了很久，最后还是靠民警查验才收场。

第二天午饭时间，茶水间的话头停了一下，然后接上别的。
没人问你，也没人不看你。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`手机递出去的那一刻，事情就不是「有没有拍」了。
她翻了两分钟，翻到了三年前的合照、上个月的体检单、和一条你没删干净的聊天记录。

她什么也没找到。
可你也说不清，自己到底被看走了什么。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 删了就说不清了",script:`你当着十几个人的面删了相册。

这一下，事情从「有没有拍」变成了「删了什么」。
民警来的时候，第一个问题是：刚才删的是什么？
你说没什么。

没什么——是这世上最没用的一句辩解。`,unlock:"card_L02_F"}],Od={id:Ur,title:Vr,act:Yr,initState:Kr,cast:qr,entryNode:Wr,lawyerCard:zr,satireTargets:Xr,nodes:Jr,endings:Zr},wd=Object.freeze(Object.defineProperty({__proto__:null,act:Yr,cast:qr,default:Od,endings:Zr,entryNode:Wr,id:Ur,initState:Kr,lawyerCard:zr,nodes:Jr,satireTargets:Xr,title:Vr},Symbol.toStringTag,{value:"Module"})),Qr="L03",ec="第03关 · 爸爸和女儿",tc=1,nc={evidence:15,opinion:25,composure:60,risk:30},ic=["hero","npc_l03_daughter","npc_l03_woman","crowd","officer_lin"],oc="n_01",sc="card_law_L03",rc=["T1","T2","T3"],cc=[{id:"n_01",type:"cutscene",pressure:1,script:`周六下午，商场三楼，玩具区门口。
六岁的陈念看上了一个娃娃，你说家里已经有三个了。
她把手从你手里抽出来，坐在地上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l03_daughter",emotion:"cry",text:"我不要跟你走！",next:"n_03"},{id:"n_03",type:"dialogue",pressure:3,speaker:"npc_l03_woman",emotion:"alarmed",text:"（挡在你和孩子中间）这是你孩子吗？",next:"n_04"},{id:"n_04",type:"choice",pressure:3,prompt:"她的手已经搭在陈念肩上。周围三四个人停下了脚步。",timer:8,timeoutOption:"opt_pull_away",options:[{id:"opt_squat_down",text:"（蹲下来看着女儿）爸爸在这儿。你跟阿姨说，我是谁？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_05"},{id:"opt_show_id",text:"（掏手机）出生证明照片在这儿，户口本也有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_05"},{id:"opt_annoyed",text:"关你什么事？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_05"},{id:"opt_pull_away",text:"（拉起女儿快步往扶梯走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-25,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_05"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（两个男人站到了扶梯口。有人说：先别让他走。）",next:"n_06"},{id:"n_06",type:"choice",pressure:4,prompt:"十几个人围了过来。陈念还在哭，声音更大了。",timer:8,timeoutOption:"opt_push_through",options:[{id:"opt_call_police_self",text:"（拨号，开免提）我在商场三楼，有人认为我拐孩子，请你们来。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5,addFlags:["L03_CALLED_POLICE_FIRST"]},next:"n_07"},{id:"opt_call_wife",text:"（给孩子妈妈打视频，把镜头对准女儿）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-5},next:"n_07"},{id:"opt_stay_put",text:"我不走。我在这儿等警察。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:15,composure:5,risk:-5},next:"n_07"},{id:"opt_push_through",text:"（抱起孩子往人群外挤）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:5,speaker:"crowd",emotion:"neutral",text:"（七八部手机举起来。有人喊：录下来，别让他跑了！）",next:"n_08"},{id:"n_08",type:"choice",pressure:5,prompt:"陈念被人群吓到了，扑过来抱住你的腿，哭得喘不上气。",timer:8,timeoutOption:"opt_beg",options:[{id:"opt_hold_child",text:"（把她抱起来，背对人群）不怕。爸爸在这儿，哪儿也不去。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:10,opinion:20,composure:15,risk:-10},next:"n_09"},{id:"opt_let_record",text:"都拍。从头拍，别剪。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_09"},{id:"opt_beg",text:"求求你们，这真是我女儿，你们别吓着她……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-10,composure:-15,risk:10},next:"n_09"},{id:"opt_yell",text:"你们谁敢碰我孩子！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:20},next:"n_09"},{id:"opt_ally_l03",text:"（掏出那张名片，当场拨过去）沈律师，我在商场三楼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09"}],impulsePool:[{id:"imp_shove_l03",text:"（推开堵在扶梯口的那个人）让开。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"dialogue",pressure:5,speaker:"npc_l03_woman",emotion:"firm",text:"孩子自己说的不要跟你走。这么多人都听见了。",next:"n_10"},{id:"n_10",type:"choice",pressure:5,prompt:"陈念的脸埋在你肩膀上，哭声闷成一团。她攥着你的衣领，攥得很紧。",timer:8,timeoutOption:"opt_defend",options:[{id:"opt_ask_daughter",text:"（低头）宝宝，你告诉阿姨——你为什么不要跟爸爸走？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_11"},{id:"opt_full_sentence",text:"她说的是：我不要跟你走，我要买那个娃娃。你们只听了半句。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:30,composure:5,risk:-10},next:"n_11"},{id:"opt_silent_hold",text:"（不说话，抱紧她，等警察）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:-10,risk:-5},next:"n_11"},{id:"opt_defend",text:"我说了这是我女儿！你们听不懂人话吗！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_11"},{id:"opt_breath_l03",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l03",text:"你们他妈的都给我滚开！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_11"},{id:"imp_shove_l03b",text:"（一把推开挡在前面的女人）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:3,script:`警察上来了。林昭走在前面，先看的是孩子。
「小朋友，别怕。阿姨问你一句话——」
她蹲下来，和陈念平视。
「抱着你的这个人，你认识吗？」`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"陈念从你肩膀上抬起头，眼睛肿着。整个三楼安静下来。",timer:8,timeoutOption:"opt_exhausted",options:[{id:"opt_provide_all",text:"户口本在手机里，孩子妈妈视频还连着，监控从玩具区调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-10},next:"n_13"},{id:"opt_factual_l03",text:"（把经过如实说了一遍，包括她为什么哭）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-5},next:"n_13"},{id:"opt_demand",text:"拦我那个人得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_13"},{id:"opt_exhausted",text:"（抱着孩子，一个字也说不出来）",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:-10,risk:10},next:"n_13"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`陈念指着玩具区的方向，抽噎着说了三个字。
那三个字很小，但离得近的人都听见了。`,next:"__END__"}],ac=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 她摔在扶梯口",script:`你推开了挡路的人。人群晃了一下。
陈念从你怀里滑下去，额头磕在扶梯的金属沿上。

三厘米的口子，缝了四针。

行政拘留七日。你在里面待着的时候，她在医院。
民警最后确认了：孩子确实是你的。
商场监控里，你从玩具区一路牵着她的手，一次也没松开。

那段监控现在没人看了。
流出去的是另一段，十九秒，只有你推人的部分。
评论区第一条：这种人怎么配当爹。

她额头上那道疤，会跟着她一辈子。
是你推的那一下。`,unlock:"card_L03_F"},{id:"e_s_rank",rank:"S",condition:"dOpinion>=45 && evidence>=70 && risk<=25 && composure>=35",title:"名场面 · 后半句",script:`「宝宝，你告诉阿姨——你为什么不要跟爸爸走？」

陈念吸了口气，眼泪还挂着，声音很小，但很清楚：

「因为爸爸不给我买娃娃。」

三楼没人说话。

她刚才喊的那句「我不要跟你走」，后面还有半句。
七八个人举着手机，从头录到尾，没有一个人听全过。

林昭站起来，翻开笔录本：「谁是第一个拦下他的？」
那位女士的手往回缩了一下。

「我不是要追究您。」林昭说，「您是好心，这一点会写进去。」
她顿了顿。
「但接下来这段也得写：从他报警到我们到场，一共十一分钟。
　这十一分钟里，他一直站在原地，没有走，没有动手，
　也没有松开孩子的手。」

下楼的时候陈念趴在你肩上睡着了。
路过玩具区，你停了一下，还是没进去。`,unlock:"card_L03_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=15",title:"干净脱身",script:`户口本、视频、监控，三样对上，事情很快就清楚了。

人群散得比聚起来慢很多。
有几个人过来说了句「不好意思啊」，你都点了头。

陈念在车上一直没说话。到家才问：
「爸爸，那些叔叔阿姨为什么凶你？」
你说他们不凶，他们是怕你被坏人带走。
她想了很久，说：哦。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`查清楚了，用了一个多小时。
陈念哭到最后没力气了，趴在长椅上睡过去，脸上还是脏的。

第二天有个四十秒的片段传出来，配文是「商场惊魂」。
里面有你，有孩子，有围着的人。
没有后来那一段。

那条视频至今还在。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`你拉着孩子想走，被拦下来了。
后来警察来了，也查清楚了，但那半个小时里没有人相信你。

陈念现在不太愿意去商场。
你问她为什么，她说人多的地方吵。

她再没提过那个娃娃。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 你先拉着她跑了",script:`你拉起她就往扶梯走。

在所有人眼里，这一下坐实了全部猜想。
七八个人追上来，有人抓住你的胳膊，有人去拽孩子。
拉扯里陈念的鞋掉了一只。

警察来了以后一切都查清楚了。
可那段视频的前十秒是你拉着一个哭喊的孩子往外走——
后面查清楚的部分，没人愿意再看第二遍。

三天后你接到学校电话，问你要不要给孩子换个班。
「有家长在群里传了个视频。」老师说得很委婉。`,unlock:"card_L03_F"}],Rd={id:Qr,title:ec,act:tc,initState:nc,cast:ic,entryNode:oc,lawyerCard:sc,satireTargets:rc,nodes:cc,endings:ac},Sd=Object.freeze(Object.defineProperty({__proto__:null,act:tc,cast:ic,default:Rd,endings:ac,entryNode:oc,id:Qr,initState:nc,lawyerCard:sc,nodes:cc,satireTargets:rc,title:ec},Symbol.toStringTag,{value:"Module"})),lc="L04",pc="第04关 · 深夜同行",uc=1,_c={evidence:20,opinion:35,composure:55,risk:35},dc=["hero","npc_l04_woman","officer_lin","crowd"],fc="n_01",gc="card_law_L04",mc=["T1","T3"],vc=[{id:"n_01",type:"cutscene",pressure:1,script:`十一点四十，出地铁 C 口。加了四个小时班，你只想快点到家。
从这里到小区北门，一条路，走了三年。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:1,script:`第二个路口开始，前面十几米有个女生，同方向。
她回头看了一眼。又看了一眼。
然后你听见她加快了脚步。`,next:"n_03"},{id:"n_03",type:"choice",pressure:1,prompt:"还有三百米就到小区门口。这条路只有这一条。",timer:8,timeoutOption:"opt_ignore",options:[{id:"opt_slow_down",text:"（放慢脚步拉开距离，顺手打开导航）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-15},next:"n_04"},{id:"opt_cross_road",text:"（横穿马路，走到对面去）",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:15,risk:-10},next:"n_04"},{id:"opt_ignore",text:"（正常速度，继续走自己的）",tag:"NEUTRAL",aggression:0,initiative:1,effects:{opinion:-10,composure:-5,risk:15},next:"n_04"},{id:"opt_speed_up",text:"（累了，加快脚步想早点到家）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-20,composure:-5,risk:20},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:2,script:`小区北门口停着一辆警车，警灯没开。
两名民警下车，其中一位朝你走过来。她胸前的执法记录仪亮着红灯。
那个女生站在警车另一侧，抱着手臂。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:3,speaker:"officer_lin",emotion:"neutral",text:"您好。有人报警说被跟踪。麻烦配合一下。",next:"n_06"},{id:"n_06",type:"choice",pressure:3,prompt:"小区门口的保安探出头来看。有个遛狗的邻居停下了脚步。",timer:8,timeoutOption:"opt_defensive",options:[{id:"opt_full_cooperate",text:"配合。我住这个小区，这条路每天走。导航和门禁记录都能调。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_07"},{id:"opt_ask_basis",text:"可以配合。能先说一下是什么情况吗？",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-5},next:"n_07"},{id:"opt_defensive",text:"我跟踪谁了？我下班回家！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_07"},{id:"opt_lie",text:"我不走这条路的，我刚才在前面拐了个弯。",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:20,addFlags:["G_NEG_LIED"]},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:4,speaker:"npc_l04_woman",emotion:"tense",text:"他从地铁口就跟在我后面。三个路口，我走他也走。",next:"n_08"},{id:"n_08",type:"choice",pressure:4,prompt:"她说得很快，手在抖。你看得出来她是真的害怕。",timer:8,timeoutOption:"opt_apologize_l04",options:[{id:"opt_request_footage",text:"沿路有监控。麻烦从我出地铁口那一刻开始调。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_09"},{id:"opt_show_route",text:"（打开导航历史）这三个月，每天同一条路，同一个时间段。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_09"},{id:"opt_apologize_l04",text:"不好意思吓着你了，我不是故意的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_09"},{id:"opt_argue_l04",text:"是她自己疑神疑鬼。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_09"},{id:"opt_breath_l04",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_08",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l04",text:"我他妈住这儿！你要我怎么走？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_09"},{id:"imp_shove_l04",text:"（一把推开挡在前面的民警）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"choice",pressure:3,prompt:`林昭把笔录本递过来：「您看一下，没问题就签字。」
第三行写着：「本人一直跟在报警人后方行走。」`,timer:8,timeoutOption:"opt_sign_fast",options:[{id:"opt_read_carefully",text:"第三行改一下。前两个路口是我在前面，她从后面超过去的。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_10"},{id:"opt_add_statement",text:"我要求把导航记录和门禁记录附进笔录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_10"},{id:"opt_sign_fast",text:"（太累了，扫了一眼直接签）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:5,risk:25},next:"n_10"},{id:"opt_refuse_sign",text:"我不签。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-15,composure:-5,risk:20},next:"n_10"},{id:"opt_ally_l04",text:"（拨号）沈律师，我被警察拦下了，您能不能听一下。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_10"}],impulsePool:[{id:"imp_tear_l04",text:"（把笔录本推回去）你们爱怎么写怎么写。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:0,effects:{evidence:-20,opinion:-20,composure:-5,risk:20},next:"n_10"}]},{id:"n_10",type:"cutscene",pressure:2,script:`警务室的屏幕上，四个路口的画面拼在一起。

23:41，地铁 C 口，你先出来的。
23:44，第一个路口，你在前，她在后十几米。
23:47，第二个路口，你停下来买了包烟。她从你身边走过去了。
23:52，第三个路口——她在前，你在后。

林昭把进度条倒回 23:47，又放了一遍。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那个女生盯着屏幕，脸慢慢红了。她张了张嘴，没出声。",timer:8,timeoutOption:"opt_quiet_l04",options:[{id:"opt_request_conclusion",text:"麻烦出一份情况说明，写明未发现违法事实。我要留档。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_12"},{id:"opt_quiet_l04",text:"（点点头，准备回家）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_12"},{id:"opt_demand_l04",text:"她得道歉。害我在这儿站两个小时。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12"},{id:"opt_lecture",text:"以后报警之前，先想清楚。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-5,risk:10},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`凌晨一点二十，你刷卡进北门。
保安探出头：「陈哥，没事吧？」
你说没事。

第二天下班，你在地铁 C 口站了一会儿，绕了远路回家。
多走了十一分钟。`,next:"__END__"}],hc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你推的是警察",script:`执法记录仪全程都在录。

阻碍执行职务，行政拘留十日。
单位收到派出所的情况通报，你的年度考核和外派名额一起没了。

监控后来还是调了。
23:47，你停下来买烟，她从你身边走过去。
跟踪这件事，方向是反的。

这个结论写在案卷里，没有人再打开过。
打开的是另一份：阻碍执行职务，事实清楚，证据确凿。`,unlock:"card_L04_F"},{id:"e_s_rank",rank:"S",condition:"dOpinion>=40 && evidence>=75 && risk<=25 && composure>=40",title:"名场面 · 方向反了",script:`23:47。第二个路口。
你停在便利店门口买烟，找零花了十几秒。
她从你身后走上来，从你身边过去，往前走了。

林昭把进度条倒回去，又放了一遍。

「从地铁口到第三个路口，」她说，「前两段是他在前面。」

屋里安静了几秒。
那个女生开口，声音很轻：「……我以为。」
「我知道。」林昭说，「您害怕是真的，这一点我写进去。」
她翻了一页。
「但他没跟着您，这一点我也得写进去。这两句都得有。」

情况说明打印出来，一式两份。
你把那张纸折好，放进外套内袋。

出门的时候她叫住你，说了句对不起。
你说没事。你是真的觉得没事——她一个人走夜路，害怕是应该的。

只是第二天下班，你还是绕了远路。`,unlock:"card_L04_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=20",title:"干净脱身",script:`监控说明了一切。笔录改完签字，一点多到家。

你没要情况说明。当时觉得没必要。
三个月后公司政审填表，有一栏问「是否有被公安机关询问的记录」。
你在那一栏上停了很久。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`查清楚了，但笔录上那句「一直跟在报警人后方」你没改。

它就那么留在案卷里。事实是清楚的，措辞是模糊的。
没人会去看第二遍——除非有一天有人需要它。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`「不好意思吓着你了。」
这句话被记进了笔录，前面加了「本人承认」四个字。

事情就这么过去了，没有处罚，没有结论。
只是从那天起，你每天下班多走十一分钟。

三年的路，说不走就不走了。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 那句谎",script:`「我不走这条路的，我刚才在前面拐了个弯。」

监控调出来，你没拐。

从这一刻起，谈话的内容变了。
不再是「你有没有跟踪」，而是「你为什么要说谎」。

后面那个问题，你答不上来。
因为真实答案是：我怕。
而「我怕」这三个字，在笔录里从来不是一个能用的理由。`,unlock:"card_L04_F"}],Ed={id:lc,title:pc,act:uc,initState:_c,cast:dc,entryNode:fc,lawyerCard:gc,satireTargets:mc,nodes:vc,endings:hc},Cd=Object.freeze(Object.defineProperty({__proto__:null,act:uc,cast:dc,default:Ed,endings:hc,entryNode:fc,id:lc,initState:_c,lawyerCard:gc,nodes:vc,satireTargets:mc,title:pc},Symbol.toStringTag,{value:"Module"})),xc="L05",kc="第05关 · 托杠铃的那一下",yc=1,Tc={evidence:20,opinion:30,composure:50,risk:40},bc=["hero","npc_l05_woman","npc_l05_manager","npc_l05_witness","crowd"],Ac="n_01",Lc="card_law_L05",Pc=["T1","T5"],Oc=[{id:"n_01",type:"cutscene",pressure:1,script:`自由重量区，晚上八点半。
隔壁卧推架上一个女生在推空杆加两片，最后一组第七下卡住了。
杠铃开始往下沉。她的手在抖，没有保护员。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`你两步冲过去，掌心向上，从下面托住杠铃杆，往上带。
杠铃回到架子上，哐一声。

托的时候，你的手背蹭到了她的手臂外侧。
零点几秒。`,next:"n_03"},{id:"n_03",type:"dialogue",pressure:1,speaker:"npc_l05_woman",emotion:"shaken",text:"（坐起来，喘着气）……谢谢。",next:"n_04"},{id:"n_04",type:"cutscene",pressure:2,script:`十分钟后，店长带着她走过来。
她的表情变了。不是愤怒，是那种想了很久之后的确信。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:2,speaker:"npc_l05_woman",emotion:"cold",text:"他刚才碰到我了。",next:"n_06"},{id:"n_06",type:"choice",pressure:2,prompt:"器械区安静了一片。店长搓着手，看着你身后的某个位置。",timer:8,timeoutOption:"opt_apologize_l05",options:[{id:"opt_admit_and_frame",text:"碰到了。托杠铃的时候手背蹭到她手臂，零点几秒。监控有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_07"},{id:"opt_ask_footage_l05",text:"卧推架正对着监控。麻烦现在就调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-5},next:"n_07"},{id:"opt_deny_l05",text:"我没碰她。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_LIED"]},next:"n_07"},{id:"opt_apologize_l05",text:"不好意思，我可能手滑了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:3,speaker:"npc_l05_woman",emotion:"calm_press",text:"你为什么要过来？我又没有叫你。",next:"n_08"},{id:"n_08",type:"choice",pressure:3,prompt:"这句话把你问住了半秒。你确实没等她开口。",timer:8,timeoutOption:"opt_withdraw",options:[{id:"opt_explain_duty",text:"杠铃已经压到你胸口了。我不过去，落下来是三十公斤。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_09"},{id:"opt_procedural_l05",text:"等监控。你怎么想是一件事，发生了什么是另一件事。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_09"},{id:"opt_hurt",text:"我救了你，你就这么说我？",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_09"},{id:"opt_withdraw",text:"行。是我多管闲事。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:15},next:"n_09"}],impulsePool:[{id:"imp_curse_l05a",text:"早知道让它砸下来。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-30,composure:-10,risk:20},next:"n_09"}]},{id:"n_09",type:"dialogue",pressure:3,speaker:"npc_l05_manager",emotion:"appease",text:"小陈啊，你看这样行不行，你先别来了，等风头过去。",next:"n_10"},{id:"n_10",type:"choice",pressure:3,prompt:"他压低了声音，像是在帮你。你卡里还有十四个月。",timer:8,timeoutOption:"opt_comply_l05",options:[{id:"opt_written_reason",text:"不来可以。请书面写明理由，我签字留档。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_11"},{id:"opt_ask_process",text:"你们的投诉流程是什么？监控什么时候调？",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_11"},{id:"opt_argue_manager",text:"出了事你就把我推出去？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:15},next:"n_11"},{id:"opt_comply_l05",text:"（默默去更衣室收拾东西）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_11"},{id:"opt_ally_l05",text:"（走到角落拨号）沈律师，我这边需要您两分钟。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_11"}],impulsePool:[{id:"imp_curse_l05b",text:"你们这店我记住了。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_11"}]},{id:"n_11",type:"dialogue",pressure:4,speaker:"npc_l05_woman",emotion:"cold",text:"（举起手机）他那种眼神，我见得多了。",next:"n_12"},{id:"n_12",type:"choice",pressure:4,prompt:"又有两个人举起了手机。店长往旁边挪了半步，装作没看见。",timer:8,timeoutOption:"opt_over_defend_l05",options:[{id:"opt_witness",text:"刚才旁边那位在做深蹲，全程都看着。能请他说一句吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_13"},{id:"opt_stay_calm",text:"眼神我不解释。我等监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:10,risk:-10},next:"n_13"},{id:"opt_over_defend_l05",text:"我什么眼神？你说清楚！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_13"},{id:"opt_leave_l05",text:"（拿包就走）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_13"},{id:"opt_breath_l05",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_12",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l05",text:"你他妈把话说清楚！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_13"},{id:"imp_shove_l05",text:"（一把打掉她举着的手机）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_13",type:"cutscene",pressure:2,script:`办公室，监控回放。

20:31:14 杠铃开始下沉，第七下没推上去。
20:31:19 杠铃压到胸口，她的手肘外翻。
20:31:21 你入画，掌心向上，托住杠铃杆。
20:31:23 杠铃回架。

林昭——不，是店长——把进度条往前拖了二十分钟。
20:09，同一个架子。一个男会员卡住，你走过去，一模一样的动作，一模一样的手位。`,next:"n_14"},{id:"n_14",type:"choice",pressure:2,prompt:"屏幕停在 20:09 那一帧。办公室里没人说话。",timer:8,timeoutOption:"opt_quiet_l05",options:[{id:"opt_request_written_l05",text:"结果出一份书面的。另外，她刚才那句话，也麻烦记一下。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_15"},{id:"opt_quiet_l05",text:"（点点头，回去把剩下两组做完）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:20,composure:10,risk:-5},next:"n_15"},{id:"opt_demand_l05",text:"她得当着所有人道歉。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_15"},{id:"opt_quit_gym",text:"（当场退卡走人）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-15,opinion:-10,composure:-5,risk:15},next:"n_15"}],impulsePool:[]},{id:"n_15",type:"cutscene",pressure:1,script:`三个月后，同一个架子。
又有人推不上去了，杠铃往下沉。

器械区有七八个人。所有人都看见了。
没有人过去。`,next:"__END__"}],wc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一巴掌",script:`手机摔在地胶上，屏幕裂成蛛网。

行政拘留五日，赔偿手机款。健身房单方解约，十四个月不退。
派出所的情况通报寄到了公司。

监控最后还是调了。
20:31:21，你入画，掌心向上，托住了杠铃杆。
20:09，同一个架子，同样的动作，救的是个男的。

这些都写在案卷里。
没有人看。大家在看另外十九秒。`,unlock:"card_L05_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=25 && opinion>=65 && composure>=35",title:"名场面 · 20:09",script:`屏幕停在 20:09。
同一个架子，一个男会员第五下卡住。你走过去，掌心向上，托住杠铃杆。
和二十二分钟后那一次，一模一样。

店长的手在鼠标上停了很久。

做深蹲那位摘下耳机，开口了：
「我全程看着的。杠铃已经压到她身上了。他要是不过去，我也得过去。」

她低着头，很久没说话。最后说了一句：
「我当时……吓到了。」

「我信。」你说。
你是真的信——被三十公斤压住的时候，谁都会吓到。

「所以我不要你道歉。」你说，「我要一份书面结果。」
店长愣住：「至于吗？都说开了。」

「至于。」
「因为下次杠铃压下来的时候，我还得能过去。」`,unlock:"card_L05_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=15",title:"干净脱身",script:`监控说明了一切。店长说了句「误会误会」，招呼新会员去了。

你回去把剩下两组做完，动作有点飘。
走的时候路过卧推架，你看了一眼那个位置。

第二天你还是来了。只是从那天起，你练的时候戴着耳机，不再往旁边看。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`查清楚了，用了一个半小时。没有处理结果，也没有说法。

那条一分钟的视频还是传出去了，只有争执的部分。
播放量不高，两万多。

评论区第一条：健身房这种人真的多。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`「行。是我多管闲事。」

你说完这句就收拾东西走了。没人拦你。
卡里剩十四个月，你再没去过。

后来你换了一家健身房，离家远二十分钟。
新的那家你从来不去自由重量区。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 我没碰她",script:`「我没碰她。」

监控 20:31:21，你的手背蹭在她手臂外侧，零点几秒。
清清楚楚。

从这一帧开始，事情不再是「碰得对不对」，而是「你为什么撒谎」。

托杠铃这件事，本来是你唯一的底气。
你自己把它扔了。

处理结果写着：情况属实，永久取消会员资格。
「情况属实」四个字指的是撒谎，不是别的。
但没人会去分辨这个。`,unlock:"card_L05_F"}],Id={id:xc,title:kc,act:yc,initState:Tc,cast:bc,entryNode:Ac,lawyerCard:Lc,satireTargets:Pc,nodes:Oc,endings:wc},$d=Object.freeze(Object.defineProperty({__proto__:null,act:yc,cast:bc,default:Id,endings:wc,entryNode:Ac,id:xc,initState:Tc,lawyerCard:Lc,nodes:Oc,satireTargets:Pc,title:kc},Symbol.toStringTag,{value:"Module"})),Rc="L06",Sc="第06关 · 三十八万八",Ec=2,Cc={evidence:30,opinion:50,composure:48,risk:20},Ic=["hero","npc_l06_girlfriend","npc_l06_mother","crowd"],$c="n_01",Mc="card_law_L06",Nc=["T1","T3"],Dc=[{id:"n_01",type:"cutscene",pressure:1,script:`女方家客厅。茶几上摆着切好的果盘，没人动。
谈了三年，今天是第一次两家坐下来说结婚的事。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l06_mother",emotion:"matter_of_fact",text:"三十八万八，房本加名，车全款。这是行情，不是我要的。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"你家全部积蓄四十一万，是你爸的退休金。你妈在旁边搓着手。",timer:8,timeoutOption:"opt_agree_first",options:[{id:"opt_write_down",text:"这几条我记一下。数字和条件都写清楚，省得以后有出入。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_detail",text:"彩礼这笔钱，婚后是归我们小家，还是归您？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_agree_first",text:"行，我想想办法。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-10,risk:20},next:"n_04"},{id:"opt_object",text:"这不是卖女儿吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l06_girlfriend",emotion:"hurt",text:"你是不是嫌我？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她眼睛红了。这三年她没跟你要过一件贵东西。",timer:8,timeoutOption:"opt_cave",options:[{id:"opt_equal_terms",text:"不嫌。钱我出，名我加。那也写一条：婚后共同还贷，离婚按出资分。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_separate",text:"我们俩的事，能不能我们俩先谈？",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_hurt_l06",text:"谈钱的时候，你怎么不说爱不爱。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_06"},{id:"opt_cave",text:"不嫌不嫌，我砸锅卖铁也给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l06_mother",emotion:"cold",text:"共同还贷？那是你们小两口的事。我说的是彩礼，两码事。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"你妈的手在膝盖上攥紧了。她今天穿了压箱底那件衣服。",timer:8,timeoutOption:"opt_loan",options:[{id:"opt_parents_present",text:"这么大的事，得四个人一起谈。咱们再约个时间。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_show_numbers",text:"（打开手机）我家全部积蓄四十一万，是我爸的退休金。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:-5,risk:-5},next:"n_08"},{id:"opt_loan",text:"（在桌子底下点开了网贷 App）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:25},next:"n_08"},{id:"opt_walk",text:"（起身要走）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-20,composure:-5,risk:15},next:"n_08"},{id:"opt_ally_l06",text:"（去阳台拨号）沈律师，有个协议我想请您看一眼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l06_girlfriend",emotion:"cry",text:"你不给，就是不爱我。就这么简单。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"客厅安静得能听见挂钟。四个人都在等你开口。",timer:8,timeoutOption:"opt_beg_l06",options:[{id:"opt_refuse_frame_l06",text:"爱不爱不用钱证明。真要证明，那就两边都拿出来。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:5,risk:-10},next:"n_10"},{id:"opt_calm_l06",text:"（把刚才记下的条件，一条一条念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_10"},{id:"opt_beg_l06",text:"你别这么说……我真的尽力了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:-10,composure:-15,risk:15},next:"n_10"},{id:"opt_break_up",text:"那就算了吧。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:-5,opinion:-15,composure:-10,risk:10},next:"n_10"},{id:"opt_breath_l06",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l06",text:"你们这就是明码标价。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l06",text:"（推开挡在门口的岳母）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`你从包里抽出两页 A4，放在果盘旁边。

「三十八万八，我给。房本加名，我同意。」
「这上面写清楚了：钱的用途、归属，还有一条——如果两年内离婚，怎么算。」

她妈没有伸手去拿。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那两页纸在茶几上放了很久。谁也没碰。",timer:8,timeoutOption:"opt_wait",options:[{id:"opt_propose_agreement",text:"钱照给，一分不少。签个字，两家都踏实。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_wait",text:"那……我再想想。",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-5,opinion:-10,composure:-5,risk:15},next:"n_12"},{id:"opt_verbal_promise",text:"不签也行，就这么说定了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:20},next:"n_12"},{id:"opt_ultimatum",text:"签就结，不签就散。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`回去的路上，你妈一直没说话。
快到家的时候她说：「那两页纸，你写得挺好。」
又走了一段，她说：「我跟你爸商量过了，钱我们出。」

你说不用。
她说：「我知道不用。我就是想让你知道，我们出得起。」`,next:"__END__"}],Fc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一下",script:`你推开她的时候，她的后腰撞在鞋柜角上。

轻微伤鉴定，赔偿八千。派出所调解书上你签了字。
婚事黄了。

三个月后你听说她女儿结婚了，彩礼十六万。
比她跟你要的少一半。

她们要的从来不是三十八万八。
她们要的是你什么都答应。而你后来才明白，
那天你唯一不该做的，就是碰她。`,unlock:"card_L06_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=75 && risk<=25 && opinion>=60 && composure>=25",title:"名场面 · 那两页纸",script:`「三十八万八，我给。一分不少。」

「这上面写清楚：这笔钱归小家庭所有，用于婚房装修和共同生活。
　房本加我名字，也加她名字。
　如果两年内离婚，按出资比例分割。」

「您看一下。没问题咱们今天就签。」

她妈把老花镜戴上了，看了很久。
然后摘下来，说：「这个……不用写这么细吧。」

「要写。」你说，「写细了，是对她好。」
「万一以后我不是东西呢？这两页纸能护着她。」

她女儿在旁边突然开口：「妈，签吧。」

三个字。她妈的手停在半空。

那天最后签了。三十八万八一分没少。
只是从那天起，谈的是两个人的婚事，不是两家的买卖。`,unlock:"card_L06_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=10",title:"干净脱身",script:`条件谈拢了，比开价低一些，写进了协议。

签字那天她妈全程没笑。你也没在意。
有些事不需要所有人高兴，只需要所有人清楚。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`钱给了，协议没签成，口头约定了几条。

婚礼办得很热闹。你爸那天喝多了，拉着你的手说了半天，一句也没说清。
后来你知道他把老房子抵押了。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`三十八万八，网贷补了十二万。
房本加了名，协议一个字没写。

婚后第八个月，那笔彩礼被她妈拿去给她弟付了首付。
你问了一句，她说：那是我妈的钱。

你想起自己当初签过什么。
什么也没签。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 砸锅卖铁",script:`「我砸锅卖铁也给你。」

这句话说出口的那一刻，谈判就结束了。
后面所有的条件都是往上加的：车要全款，酒席要五星，蜜月要出国。

每加一条，你都说好。因为第一条你就说了好。

婚礼前一个月你爸住院了。
医生问要不要用进口的那款药，一个疗程四万。
你说，先用便宜的吧。`,unlock:"card_L06_F"}],Md={id:Rc,title:Sc,act:Ec,initState:Cc,cast:Ic,entryNode:$c,lawyerCard:Mc,satireTargets:Nc,nodes:Dc,endings:Fc},Nd=Object.freeze(Object.defineProperty({__proto__:null,act:Ec,cast:Ic,default:Md,endings:Fc,entryNode:$c,id:Rc,initState:Cc,lawyerCard:Mc,nodes:Dc,satireTargets:Nc,title:Sc},Symbol.toStringTag,{value:"Module"})),Bc="L07",Hc="第07关 · 青春损失费",jc=2,Gc={evidence:35,opinion:45,composure:45,risk:30},Uc=["hero","npc_l07_ex","shen_li"],Vc="n_01",Yc="card_law_L07",Kc=["T1","T4"],qc=[{id:"n_01",type:"cutscene",pressure:1,script:`分手第九天。她约你在常去的那家咖啡馆。
还是靠窗那张桌子。她比你先到。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l07_ex",emotion:"flat",text:"三年。二十万。给了这事就过去了。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"她说得很平静，像是排练过。手边放着手机，屏幕朝下。",timer:8,timeoutOption:"opt_negotiate_l07",options:[{id:"opt_record_now",text:"（把手机放到桌上，屏幕朝上）你刚才那句，再说一遍。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_basis_l07",text:"二十万这个数，是按什么算出来的？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_04"},{id:"opt_negotiate_l07",text:"……能不能少点？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:20},next:"n_04"},{id:"opt_angry_l07",text:"你疯了吧？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l07_ex",emotion:"cold",text:"不给，我就去派出所报案。你猜他们信谁。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"咖啡凉了。你听见自己心跳的声音。",timer:8,timeoutOption:"opt_pay_l07",options:[{id:"opt_call_police_l07",text:"（当场拨号）110 吗，有人以报案相要挟，向我索要二十万。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_lawyer",text:"（拨沈骊的电话，开免提放在桌上）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-5},next:"n_06"},{id:"opt_pay_l07",text:"（打开转账页面）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_threaten_l07",text:"你敢报，我就告你诬告。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l07_ex",emotion:"waver",text:"我不是那个意思……我就是，这三年我什么都没落着。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"她的声音软下来了。你想起她生病那年，是你请了半个月假。",timer:8,timeoutOption:"opt_delete_l07",options:[{id:"opt_keep_record",text:"我理解。但刚才那句我已经录下来了，这个改不了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_empathy",text:"三年我也在。分开是两个人的事，不是谁欠谁。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:5,opinion:25,composure:5,risk:-5},next:"n_08"},{id:"opt_delete_l07",text:"（心软了，把刚才的录音删掉）",tag:"DESTROY_EVIDENCE",aggression:0,initiative:0,effects:{evidence:-30,opinion:5,composure:-5,risk:25,addFlags:["G_NEG_DESTROYED_EVIDENCE"]},next:"n_08"},{id:"opt_mock_l07",text:"什么都没落着？这三年房租谁付的。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:10},next:"n_08"},{id:"opt_ally_l07",text:"（拨沈骊的电话，放在桌上开免提）",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l07_ex",emotion:"cold",text:"（十分钟后，手机震了。是她发来的语音）你要是不给，我明天就去。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"语音三秒，你听了四遍。窗外天已经黑了。",timer:8,timeoutOption:"opt_argue_l07b",options:[{id:"opt_save_all",text:"（截图、录屏、云备份。一条都不删）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_reply_carefully",text:"（回一条文字：我拒绝支付。你有任何主张，请走法律程序）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_10"},{id:"opt_block",text:"（拉黑，删除所有聊天记录）",tag:"DESTROY_EVIDENCE",aggression:1,initiative:0,effects:{evidence:-30,opinion:-5,composure:5,risk:25,addFlags:["G_NEG_DESTROYED_EVIDENCE"]},next:"n_10"},{id:"opt_argue_l07b",text:"（打回去，对骂了四十分钟）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_10"},{id:"opt_breath_l07",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l07",text:"你他妈就是想讹钱。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_grab_l07",text:"（冲过去抢她的手机）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊把材料翻了一遍，抬头。

「我先说清楚一件事。」
「真正的受害者，不会先开价。」
「她要是去报案，警察会依法受理、依法调查，那是她的权利，也是应该的。」
「但她刚才做的不是报案。她是拿报案当价码——」
「这个在法律上有名字，叫敲诈勒索。」

她把那段语音又放了一遍。
「二十万。这个数字是她自己说的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊合上材料夹：「现在你说，怎么办。」",timer:8,timeoutOption:"opt_drop",options:[{id:"opt_full_legal",text:"按敲诈勒索报案，同时发律师函。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_lawyer_letter",text:"先发律师函，看她什么反应。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_drop",text:"算了吧。毕竟三年。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_12"},{id:"opt_revenge",text:"把那段语音发到朋友圈，让大家都看看。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,composure:5,risk:25},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`走出律所已经十点多。
你翻到相册最底下，三年前那张，两个人在山顶，风把她头发吹到你脸上。

你没删。
沈骊说过：一条都不要删。`,next:"__END__"}],Wc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你抢了她的手机",script:`咖啡馆有监控，两个服务员看着。

抢夺手机，撕扯中她的手腕挫伤。
行政拘留七日，赔偿六千。

她第二天真的去派出所了。
这一次她手上有伤，有监控，有两个证人。

那段二十万的语音还在你手机里。
可现在没人会先看那一段了。`,unlock:"card_L07_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=25 && opinion>=60 && composure>=30",title:"名场面 · 开价的那一刻",script:`律师函发出去的第四天，她打来电话。

第一句是「我不是那个意思」。
第二句是「你能不能把录音删了」。

沈骊在旁边，示意你打开免提。

「删不了。」你说。
「不是我不肯，是这个东西已经不归我一个人管了。」

电话那头静了很久。

后来案子没往下走——她主动写了道歉说明，白纸黑字，一式两份。
沈骊看完，只说了句：「留好。」

出律所的时候她问你：「你恨她吗？」
你想了想，说不恨。

「那就对了。」沈骊说，
「你不需要恨她。你只需要在她开价的那一秒，把录音打开。」
「后面的事，法律替你恨。」`,unlock:"card_L07_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=20",title:"干净脱身",script:`律师函寄到了她家。一周后她回了一条短信，两个字：知道了。

没有下文，也没有再联系。
事情就这么停在那儿了。

你把那些聊天记录压缩成一个包，改了个不起眼的名字，存进云盘。
希望这辈子都用不上。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`谈到最后是三万块，签了一份「自愿补偿协议」。

她收了钱，没再来找过你。
那份协议你也留着——只是每次翻到，你都说不清自己当时到底在怕什么。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`二十万转过去了，分了三笔。

她删了聊天记录，你也删了。
干干净净，像什么都没发生过。

第二年她结婚，朋友圈发了九宫格。
你划过去的时候手停了一下，然后接着往下划。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 你把录音删了",script:`你心软，把那段录音删了。

三天后她还是去了派出所。
笔录做了六个小时。

民警问你：她之前有没有向你索要过财物？
你说有，二十万。
民警问：有证据吗？

你打开手机，翻到那个空白的录音文件夹。

最后案子因证据不足没有立案。
没有立案的意思是——它既没有被证实，也没有被证伪。

它就那么挂着。挂了很多年。`,unlock:"card_L07_F"}],Dd={id:Bc,title:Hc,act:jc,initState:Gc,cast:Uc,entryNode:Vc,lawyerCard:Yc,satireTargets:Kc,nodes:qc,endings:Wc},Fd=Object.freeze(Object.defineProperty({__proto__:null,act:jc,cast:Uc,default:Dd,endings:Wc,entryNode:Vc,id:Bc,initState:Gc,lawyerCard:Yc,nodes:qc,satireTargets:Kc,title:Hc},Symbol.toStringTag,{value:"Module"})),zc="L08",Xc="第08关 · 孩子不是你的",Jc=2,Zc={evidence:25,opinion:40,composure:40,risk:25},Qc=["hero","npc_l08_wife","npc_l08_mother","npc_l08_child","shen_li"],ea="n_01",ta="card_law_L08",na=["T1","T3"],ia=[{id:"n_01",type:"cutscene",pressure:1,script:`念念三岁体检，血型 AB。
你 O 型，她妈妈 O 型。
护士说了句「这个不太可能啊」，然后马上改口说仪器可能有误。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`你没跟任何人说。
第二天请了半天假，拿着念念的头发去了一家机构。

十四天后，报告到了。
你在楼下车里坐着，拆了三次才拆开。`,next:"n_03"},{id:"n_03",type:"dialogue",pressure:2,speaker:"hero",emotion:"cold",text:"（排除亲子关系。三个字，加粗。）",next:"n_04"},{id:"n_04",type:"choice",pressure:2,prompt:"楼上厨房的灯亮着。念念今天上小班，回来会跑到门口。",timer:8,timeoutOption:"opt_confront_now",options:[{id:"opt_keep_calm",text:"（把报告收进包里。先约律师，什么都不说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_05"},{id:"opt_second_test",text:"（再做一次，换一家有司法资质的机构）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:5,composure:-5,risk:-5},next:"n_05"},{id:"opt_confront_now",text:"（上楼，把报告摔在餐桌上）这是什么？",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-10,opinion:-15,composure:-20,risk:15},next:"n_05"},{id:"opt_denial",text:"（把报告撕了。就当没看见）",tag:"DESTROY_EVIDENCE",aggression:0,initiative:0,effects:{evidence:-30,composure:-10,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE"]},next:"n_05"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:3,speaker:"npc_l08_wife",emotion:"furious",text:"你背着我去做鉴定？陈屿，你还是不是人。",next:"n_06"},{id:"n_06",type:"choice",pressure:3,prompt:"她的手在抖。但她没有问「结果是什么」。",timer:8,timeoutOption:"opt_apologize_l08",options:[{id:"opt_reframe_l08",text:"做鉴定是我不对。但报告上写的东西，和我不对，是两件事。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_07"},{id:"opt_quiet_l08",text:"（不接话，把报告推过去）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:20,opinion:15,risk:-5},next:"n_07"},{id:"opt_explode",text:"我不是人？那你告诉我孩子他爸是谁。",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-10,opinion:-20,composure:-20,risk:10},next:"n_07"},{id:"opt_apologize_l08",text:"对不起……是我多心了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-10,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:3,speaker:"npc_l08_mother",emotion:"dismissive",text:"多大点事。男人心眼这么小，日子还过不过了。",next:"n_08"},{id:"n_08",type:"choice",pressure:3,prompt:"她坐在沙发上没起来，遥控器还捏在手里。",timer:8,timeoutOption:"opt_retreat_l08",options:[{id:"opt_facts_only",text:"阿姨，这事不看心眼大小。报告在这儿，您可以看。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_09"},{id:"opt_procedural_l08",text:"后面的事我会走法律程序。今天不吵。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-10},next:"n_09"},{id:"opt_argue_l08",text:"心眼小？您女儿干的事，您问过没有？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:15},next:"n_09"},{id:"opt_retreat_l08",text:"（起身回房间，关上门）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_09"},{id:"opt_ally_l08",text:"（下楼拨号）沈律师，我这儿出事了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09"}],impulsePool:[{id:"imp_curse_l08",text:"你们一家子都知道，是不是。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_09"}]},{id:"n_09",type:"dialogue",pressure:4,speaker:"npc_l08_child",emotion:"happy",text:"（从房间里跑出来，举着手）爸爸抱！",next:"n_10"},{id:"n_10",type:"choice",pressure:4,prompt:"她今天在幼儿园得了一朵小红花，贴在手背上。举着手跑过来给你看。",timer:8,timeoutOption:"opt_step_back",options:[{id:"opt_hold_kid",text:"（蹲下来，把她抱起来）爸爸在。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:5,opinion:30,composure:20,risk:-10},next:"n_11"},{id:"opt_take_photo",text:"（抱起来，顺手拍了段视频存着）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_11"},{id:"opt_step_back",text:"（僵在那儿，手没抬起来）",tag:"TRAP",aggression:0,initiative:0,effects:{opinion:-25,composure:-20,risk:10},next:"n_11"},{id:"opt_leave_room",text:"（转身走开）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-25,composure:-15,risk:10},next:"n_11"},{id:"opt_breath_l08",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l08",text:"别叫我爸爸！",unlockBelow:30,tag:"TRAP",aggression:3,initiative:0,effects:{opinion:-30,composure:-20,risk:20},next:"n_11"},{id:"imp_shove_l08",text:"（推开挡在门口的妻子）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:2,script:`沈骊把两份报告并排放好，看了很久。

「三件事。」她说。
「第一，鉴定要有司法资质的机构重做一次，程序上才站得住。」
「第二，你这三年支出的抚养费，可以起诉返还。这是有法律依据的。」
「第三——」

她停了一下，把老花镜摘下来。

「第三件事跟法律没关系。那孩子三岁，她什么都不知道。
　你怎么处理她妈是一回事，你怎么跟她告别是另一回事。
　别把这两件事混在一起。」`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"窗外天黑了。你手机屏保还是念念上个月拍的，糊得看不清脸。",timer:8,timeoutOption:"opt_stay",options:[{id:"opt_full_claim",text:"离婚。抚养费返还诉讼一起走，三年的钱一分不少。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-15},next:"n_13"},{id:"opt_divorce_only",text:"离婚就行。钱算了。",tag:"NEUTRAL",aggression:0,initiative:2,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_13"},{id:"opt_stay",text:"为了孩子……先不离吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_13"},{id:"opt_revenge_l08",text:"我要让所有人都知道她干了什么。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:25},next:"n_13"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`凌晨一点，你站在儿童房门口。
念念睡成一个大字，小红花掉在枕头边上。

你把被角掖好，退出去，把门带上。

那三年是真的。这一点，报告上没写。`,next:"__END__"}],oa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一推",script:`你推开挡在门口的她。她撞到门框，额角青了一块。

她当晚报了警，做了伤情鉴定。
第二天申请了人身安全保护令，法院当天下了裁定。

你被禁止进入住所，禁止接近念念。

那份亲子鉴定报告还在你包里。
可现在，离婚诉讼里第一个被认定的事实，不是它。
是你推的那一下。

念念三岁半，从此没有再见过你。`,unlock:"card_L08_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=25 && composure>=35",title:"名场面 · 两件事",script:`「做鉴定是我不对。」
「但报告上写的东西，和我不对，是两件事。」

她张了张嘴。这三年她赢过你很多次，靠的都是把两件事说成一件。
这一次不行了。

她妈在沙发上说「多大点事，男人心眼这么小」。
你把报告递过去：「阿姨，您看一下。这不看心眼大小。」

她没接。

——

司法鉴定重做了一次，结论一样。
抚养费返还诉讼立了案，三年零四个月，法院支持了大部分。
离婚判了。

最后一次去接念念的东西，她跑过来抱你的腿。
你蹲下来，把她手背上那朵小红花的贴纸抚平。

「爸爸要走了。」
「你还回来吗？」

你说不出话。沈骊在车里等你，一句也没催。

后来她说过一句：
「你把该拿回来的都拿回来了。」
「唯独那三年，谁也拿不走。她欠你的，那三年不欠。」`,unlock:"card_L08_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=15",title:"干净脱身",script:`鉴定重做，诉讼提起，离婚判了。
抚养费返还支持了一部分——三年里有些支出拿不出票据。

沈骊说这已经算好的。
你说我知道。

搬家那天你带走了两个箱子。
有一个装的全是念念的东西。你没打开过，也没扔。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`离了。财产对半，抚养费没要回来——机构没有司法资质，报告不被采信。

重做已经来不及了，孩子跟着她走了。

那份没资质的报告你还留着。它说对了一件事，
但在需要它说话的时候，它一个字也不算数。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`「为了孩子，先不离吧。」

这句话你说了三次，一次比一次轻。

第四年她提了离婚，理由是感情破裂。
那份报告的事，谁也没再提。
判决书上写着：婚生女念念，由女方抚养，男方每月支付抚养费。

你现在还在付。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 撕掉的那张纸",script:`你把报告撕了。碎片冲进了马桶。

那天以后你什么都没提，日子照过。
只是每次念念叫爸爸，你都要在心里过一遍那三个字。

第六年，她提离婚，要抚养费，还要房子。
你说孩子不是我的。

她问：证据呢。

你重新去做了一次鉴定。这一次她拒绝配合，孩子也带走了。
法院说，现有证据不足以推翻婚生子女的推定。

那张纸，你只有过一次机会。`,unlock:"card_L08_F"}],Bd={id:zc,title:Xc,act:Jc,initState:Zc,cast:Qc,entryNode:ea,lawyerCard:ta,satireTargets:na,nodes:ia,endings:oa},Hd=Object.freeze(Object.defineProperty({__proto__:null,act:Jc,cast:Qc,default:Bd,endings:oa,entryNode:ea,id:zc,initState:Zc,lawyerCard:ta,nodes:ia,satireTargets:na,title:Xc},Symbol.toStringTag,{value:"Module"})),sa="L09",ra="第09关 · 冷静期",ca=2,aa={evidence:40,opinion:45,composure:42,risk:35},la=["hero","npc_l09_wife","npc_l09_cousin","shen_li"],pa="n_01",ua="card_law_L09",_a=["T2","T4"],da=[{id:"n_01",type:"cutscene",pressure:1,script:`民政局。离婚登记申请交上去了，三十天冷静期。
工作人员说：三十天后你们再一起来一趟。

出门的时候她说：这三十天，咱们都别为难对方。
你说好。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`第九天，你在 App 上查房贷余额，顺手翻了下联名账户。

八十二万，只剩两万四。
七笔转账，分七天，每笔不到十万。`,next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"最早那一笔的时间是——你们从民政局出来的当天下午。",timer:8,timeoutOption:"opt_ask_her",options:[{id:"opt_fix_evidence",text:"（去银行打全部流水，柜台盖章。截图另存一份）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_call_lawyer_l09",text:"（拍下来，发给沈骊）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-5},next:"n_04"},{id:"opt_ask_her",text:"（直接问她：钱呢）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-15,opinion:-5,composure:-10,risk:15},next:"n_04"},{id:"opt_transfer_back",text:"（把剩下的两万四也转到自己名下）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:20},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l09_wife",emotion:"calm",text:"我爸住院要用钱。这个你也要管？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她爸上个月刚体检完，报告你还帮着看过。",timer:8,timeoutOption:"opt_believe",options:[{id:"opt_preservation",text:"（当天向法院申请财产保全，提交流水和登记回执）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_06"},{id:"opt_request_proof",text:"住院记录和缴费单，给我看一下。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_06"},{id:"opt_believe",text:"行，那你先用着。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:25},next:"n_06"},{id:"opt_argue_l09",text:"你爸生病要八十万？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l09_wife",emotion:"flat",text:"（递过来一张纸）对了，这个也得算共同债务。我表哥的，四十万。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"欠条落款是去年三月。你想了很久，那个月你们在还房贷，一分闲钱没有。",timer:8,timeoutOption:"opt_sign_l09",options:[{id:"opt_challenge_debt",text:"这笔我不认。要认，请出借人到庭，说清楚钱怎么给的。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_08"},{id:"opt_check_flow",text:"（申请法院调取她表哥同期的银行流水）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_08"},{id:"opt_sign_l09",text:"（她说签个字好办手续，你签了）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,composure:5,risk:25},next:"n_08"},{id:"opt_yell_l09",text:"这就是伪造！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08"},{id:"opt_ally_l09",text:"（拨号）沈律师，账户被转空了，我该先做什么。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l09_wife",emotion:"cold",text:"都要离了，你还查我。有意思吗。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"还剩十八天。她把行李箱推到了玄关。",timer:8,timeoutOption:"opt_beg_l09",options:[{id:"opt_procedural_l09",text:"有意思。这不是查你，是把账算清楚。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:20,composure:10,risk:-10},next:"n_10"},{id:"opt_silent_l09",text:"（不回，继续整理材料）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:-5,risk:-5},next:"n_10"},{id:"opt_beg_l09",text:"我们能不能好聚好散？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10"},{id:"opt_expose",text:"（把转账记录发到家族群）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:25},next:"n_10"},{id:"opt_breath_l09",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l09",text:"你早就算计好了是不是。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l09",text:"（拦住她，抢那个行李箱）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`第十四天，保全裁定送达。
剩余账户、一套房产、一辆车，全部冻结。

她表哥的银行流水也调出来了：去年三月，那个账户的余额是一千两百块。
四十万从来没有出现过。

沈骊把两页纸并排放着，说了句：
「虚构债务这条，比转移财产严重得多。这个她自己应该清楚。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"对方律师打来电话，说想谈谈。",timer:8,timeoutOption:"opt_settle_l09",options:[{id:"opt_full_l09",text:"保全维持。虚假债务另案主张，材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_12"},{id:"opt_settle_l09",text:"（各让一步，把钱分清楚就行）",tag:"NEUTRAL",aggression:0,initiative:2,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_12"},{id:"opt_drop_l09",text:"算了。钱没了就没了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"},{id:"opt_gloat",text:"（把裁定书拍照发给她）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:5,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`第三十天，民政局。
两个人隔着一个位置坐着，谁也没说话。

出来的时候下雨了。她往左，你往右。

她那句「这三十天，咱们都别为难对方」——
你后来想了很久。她说的是真心话。
她只是没打算把「为难」这两个字算在自己头上。`,next:"__END__"}],fa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 玄关那一下",script:`抢行李箱的时候她摔在鞋柜上，手腕骨裂。

轻伤二级立案。刑事案件。
取保候审期间，离婚诉讼开庭了。

八十二万的转移，法院查明了。
四十万的虚假债务，也查明了。

可判决书上还有一段：男方对女方实施伤害行为，系婚姻过错方。
财产分割：女方多分。

你赢了两件事，输了整场。`,unlock:"card_L09_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=30 && composure>=30",title:"名场面 · 一千两百块",script:`调查令下来那天，沈骊把两份流水并排推到桌上。

左边：去年三月，你们的联名账户，房贷刚扣完，余额三千七。
右边：同月，她表哥的账户，余额一千两百块。

「四十万。」沈骊说，「从这个账户里出来的。」
她敲了敲右边那张纸。
「一千两百块的账户，借出四十万。」

对方律师看了很久，然后合上文件夹，说了句「我们再沟通一下」。

——

最后没打成官司。
钱退回来七十六万，虚假欠条撤回，另案的事没再提。

第三十天出民政局，下雨了。
她往左，你往右。

沈骊在车里等你，递过来一把伞：
「这一关你打得干净。」
「不是因为你聪明。是因为第九天你没去问她钱呢，
　你去了银行。」`,unlock:"card_L09_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=15",title:"干净脱身",script:`保全下来了，钱冻住了大半。
虚假债务那笔没查到底，但对方主动撤了。

最后分下来，比应得的少了十几万。
沈骊说这已经不错。你说我知道。

只是有段时间，你看见任何一张手写的欠条都会本能地拍照。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`保全申请晚了六天，两笔钱已经取现，追不回来。

剩下的部分对半分，四十万的欠条法院不予认定。
算下来你亏了二十六万。

那是首付里你爸出的那一半。你一直没跟他说。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`「行，那你先用着。」

这句话之后，剩下的二十天里又走了两笔。

离婚那天，共同财产账面上是负数——因为那四十万的欠条，你签了字。

沈骊后来看了那份签字件，问你：你当时怎么想的。
你说她说签个字好办手续。
沈骊没再说话。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 你也转了",script:`你把剩下的两万四也转走了。

开庭的时候，对方律师第一个拿出来的就是这笔。
「双方均存在转移共同财产的行为。」

这一句话，把八十二万和两万四放在了同一个天平上。
法官不看金额，法官看性质。

最后判：各自名下财产归各自所有。

她名下有八十万。你名下有两万四。`,unlock:"card_L09_F"}],jd={id:sa,title:ra,act:ca,initState:aa,cast:la,entryNode:pa,lawyerCard:ua,satireTargets:_a,nodes:da,endings:fa},Gd=Object.freeze(Object.defineProperty({__proto__:null,act:ca,cast:la,default:jd,endings:fa,entryNode:pa,id:sa,initState:aa,lawyerCard:ua,nodes:da,satireTargets:_a,title:ra},Symbol.toStringTag,{value:"Module"})),ga="L10",ma="第10关 · 二十米",va=2,ha={evidence:30,opinion:35,composure:38,risk:45},xa=["hero","npc_l10_exwife","npc_l10_child","npc_l10_teacher","shen_li"],ka="n_01",ya="card_law_L10",Ta=["T1","T2"],ba=[{id:"n_01",type:"cutscene",pressure:2,script:`抚养费返还的判决生效了。执行立案的第三天，
法院的人把另一份裁定书送到了公司前台。

人身安全保护令。
禁止实施家庭暴力。禁止骚扰、跟踪、接触申请人及其相关近亲属。
禁止在申请人及其女儿的住所、学校二百米范围内活动。

你不是念念的生父，这一点法律上已经写死了。
你争的是探视——三年，你想再见她。

有效期六个月。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"hero",emotion:"cold",text:"（申请书写的是：长期恐吓，多次推搡。落款上周三。）",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"上周三你在南京出差。高铁票、酒店、打卡记录都在。",timer:8,timeoutOption:"opt_call_her",options:[{id:"opt_comply_and_appeal",text:"（严格遵守。同时当天递交复议申请，附行程材料）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_call_lawyer_l10",text:"（先给沈骊打电话，一个字不多说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:10,composure:10,risk:-10},next:"n_04"},{id:"opt_call_her",text:"（打电话质问她）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-10,risk:15},next:"n_04"},{id:"opt_ignore_order",text:"（不管这个，照常去接孩子）",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-25,opinion:-20,risk:25,addFlags:["L10_VIOLATED"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:3,script:`周四下午四点二十。
你把车停在幼儿园斜对面，隔着两条车道，大概二十米。

放学铃响了。念念背着小书包出来，站在门口找人。

然后她看见你了。`,next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"她举起手，往马路这边跑过来。老师在后面喊她的名字。",timer:8,timeoutOption:"opt_hug_child",options:[{id:"opt_walk_away",text:"（转身。走到街角，站住，看着老师把她牵回去）",tag:"OPTIMAL",aggression:0,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:-10,risk:-10},next:"n_06"},{id:"opt_call_teacher",text:"（退到更远，打电话给老师说明情况）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:-5,risk:-10},next:"n_06"},{id:"opt_wave",text:"（远远地挥了挥手）",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-10,composure:-5,risk:15},next:"n_06"},{id:"opt_hug_child",text:"（蹲下来，张开手）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-25,opinion:-15,composure:10,risk:20,addFlags:["L10_VIOLATED"]},next:"n_06"},{id:"opt_ally_l10",text:"（拨号）沈律师，法院送来一份保护令。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:2,script:`沈骊的办公室。她听完，把笔放下了。

「我先说一件事，说完再谈你的案子。」

「人身安全保护令是个好东西。我办过的案子里，有女人靠它活下来——
　真的，字面意思的活下来。」

「正因为这样，拿它来抢孩子的人，我最恨。」
「她们每用一次，下一个真需要它的人，就难一分。
　法官会多犹豫一秒，材料会多要一份，签字会多想一天。
　那一秒、那一份、那一天，是从别人命里扣出来的。」

她把复议申请书推过来。

「所以这个我们要打。不光为你。」`,next:"n_07"},{id:"n_07",type:"choice",pressure:2,prompt:"沈骊：「复议要在收到裁定后五日内提。今天第三天。」",timer:8,timeoutOption:"opt_wait_l10",options:[{id:"opt_gather_evidence",text:"（调小区监控、通话记录，找当晚在场的邻居）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-15},next:"n_08"},{id:"opt_apply_investigation",text:"（申请法院调查令，调取她申请书里那几天的记录）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_08"},{id:"opt_counter_accuse",text:"（那我也去申请一个，告她家暴）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,composure:5,risk:20},next:"n_08"},{id:"opt_wait_l10",text:"（等开庭再说吧）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:3,speaker:"npc_l10_exwife",emotion:"provoke",text:"（微信）念念今天问你去哪了。我说爸爸不要你了。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"凌晨一点十七。这是这周第九条。",timer:8,timeoutOption:"opt_argue_l10",options:[{id:"opt_no_reply",text:"（截图，存证，不回）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:-5,risk:-10},next:"n_10"},{id:"opt_formal_reply",text:"（回一条：有事请通过律师联系。然后截图）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_10"},{id:"opt_argue_l10",text:"（回过去，吵到三点）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-15,composure:-15,risk:15},next:"n_10"},{id:"opt_go_there",text:"（穿上外套，开车过去）",tag:"TRAP",aggression:3,initiative:0,effects:{evidence:-25,opinion:-15,composure:-5,risk:25,addFlags:["L10_VIOLATED"]},next:"n_10"},{id:"opt_breath_l10",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l10",text:"你他妈跟一个三岁的孩子说这种话？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:20},next:"n_10"},{id:"imp_break_l10",text:"（砸开她家的门）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`复议听证。

申请书上写的三次「推搡」：
三月十一日晚——你在南京，高铁票、酒店入住、公司打卡。
四月二日晚——小区门口监控，你八点十二分离开，没有再回来。
四月十九日晚——通话记录显示，那一整晚你在跟客户开电话会，两小时四十分钟。

沈骊把三份材料按时间顺序放好，一句评论也没加。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"审判长问：「申请人对此有什么说明？」对面沉默了很久。",timer:8,timeoutOption:"opt_concede",options:[{id:"opt_present_all",text:"（把监控、通话记录、邻居证言一次性提交，不多说一个字）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_calm_statement",text:"（平静陈述事实。不提她一句不是）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:10,risk:-10},next:"n_12"},{id:"opt_attack_l10",text:"（当庭指责她诬告）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_12"},{id:"opt_concede",text:"（太累了。同意调解，探视权也不争了）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`出法院的时候快五点了。

斜对面就是那家幼儿园。放学铃刚响过，门口空了。

沈骊在台阶下等你。
「二十米。」她说，「那天你退到二十米外，这件事我在庭上没提。」
「因为不需要提。」

她顿了一下。
「但你自己得记着。」`,next:"__END__"}],Aa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那扇门",script:`凌晨两点，你砸开了那扇门。

违反人身安全保护令，情节严重。
拘留十五日，罚款一千。

探视申请驳回。裁定书上有一行：
「申请人存在违反人身安全保护令之情形，不宜安排探视。」

那三条不在场证明，法院也查明了。
查明了，写在案卷里，然后被后面那一行盖过去了。

六个月后保护令失效，你重新申请，又被驳回一次。

再后来你就不申请了。
那扇门是你自己砸的。`,unlock:"card_L10_F"},{id:"e_s_rank",rank:"S",condition:"dOpinion>=35 && evidence>=80 && risk<=30 && composure>=25",title:"名场面 · 三月十一日",script:`「三月十一日晚八点到十点，申请人称被推搡。」

沈骊递上第一份：那天二十点零四分，被申请人的高铁在南京南站到站。
第二份：酒店入住记录，二十一点十七分。
第三份：次日上午九点，南京分公司打卡。

「四月二日。」小区门口监控，八点十二分离开，当晚未再进入。
「四月十九日。」通话记录，二十点到二十二点四十，客户电话会议，全程未中断。

她把三份材料按时间顺序摆好，退回座位。
从头到尾，没有说一句「她在撒谎」。

——

裁定撤销那天，沈骊说了句话：

「你知道这一关最难的是哪一步吗？」
「不是找证据。是那天下午四点二十。」

「她朝你跑过来，你转身走了。」
「那二十米，是你在这个案子里做过最对的一件事。
　也是最难的一件。」

——

探视权确认了。每两周一次，周六上午。

第一次去接她，念念从幼儿园门口跑出来，这一次没有人喊停。

她扑过来的时候你蹲下去，接住了。

法律上你什么都不是。
可那三年，法院这次写进去了：
「基于长期共同生活形成的情感联系，探视有利于未成年人身心健康。」`,unlock:"card_L10_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=10",title:"干净脱身",script:`保护令撤销了。三条不在场证明，撤销了两条，还有一条时间对不上。

探视权确认了，每月一次。比你想要的少一半。

第一次接的时候她在门口愣了一下，才认出你。
那半秒，你记了很多年。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`复议驳回了，六个月满了以后自然失效。

那六个月里你没见过念念。
后来探视申请重新提交，批了，每月一次。

第一次去，念念问：你为什么好久不来。
你说爸爸出差了。

这是你对她说过的唯一一句谎。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`你同意了调解。探视每季度一次，需第三方在场。

沈骊送你出门的时候什么也没说。
到楼下她才开口：「材料都在，你随时可以再来。」

你说好。

那些材料现在还在她的柜子里，标签写着你的名字。三年了。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 蹲下来那一下",script:`她朝你跑过来。你蹲下去，张开手。

她扑进你怀里的那三秒，是那半年里最好的三秒。

幼儿园门口有监控。
对方律师在庭上放了这段，只放了十七秒。

「被申请人在保护令有效期内，出现在幼儿园门口，并与被保护人发生身体接触。」

违反保护令，拘留五日。
探视申请驳回。

那三条不在场证明，法院也查明了。
没有用。

沈骊后来只说了一句：「我知道你忍不住。」
「可法律不看你忍不忍得住，只看你忍没忍住。」`,unlock:"card_L10_F"}],Ud={id:ga,title:ma,act:va,initState:ha,cast:xa,entryNode:ka,lawyerCard:ya,satireTargets:Ta,nodes:ba,endings:Aa},Vd=Object.freeze(Object.defineProperty({__proto__:null,act:va,cast:xa,default:Ud,endings:Aa,entryNode:ka,id:ga,initState:ha,lawyerCard:ya,nodes:ba,satireTargets:Ta,title:ma},Symbol.toStringTag,{value:"Module"})),La="L11",Pa="第11关 · 面试第七问",Oa=3,wa={evidence:20,opinion:40,composure:45,risk:20},Ra=["hero","npc_l11_hr","shen_li"],Sa="n_01",Ea="card_law_L11",Ca=["T3","T5"],Ia=[{id:"n_01",type:"cutscene",pressure:1,script:`终面，第四十分钟。前六个问题答得都不错。
你上个月主动离的职，赔偿金撑到十一月。房贷每月一万四。

这是手上最后一个 offer。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"candid",text:"我直说吧。这个岗同分的话，我们优先女性。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"他说得很坦然，像在说食堂几点开饭。",timer:8,timeoutOption:"opt_accept_l11",options:[{id:"opt_record_l11",text:"（口袋里的手机按了录音）这个我理解，能再具体说说吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_written_l11",text:"如果最终没通过，能给一份书面反馈吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_04"},{id:"opt_accept_l11",text:"我理解，这也是应该的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:20},next:"n_04"},{id:"opt_angry_l11",text:"这不就是歧视吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"official",text:"集团今年有多元化指标。这个我们也是执行。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"他把简历合上了，往桌子中间推了推。",timer:8,timeoutOption:"opt_beg_l11",options:[{id:"opt_ask_policy_l11",text:"指标是公开的吗？能给我看一下相关制度文件？",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_neutral_l11",text:"明白了。那我按正常流程等结果。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-5},next:"n_06"},{id:"opt_beg_l11",text:"我下个月还有房贷……能不能通融一下？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15,risk:10},next:"n_06"},{id:"opt_lecture_l11",text:"多元化不是这么搞的。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-5,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"cooling",text:"制度文件是内部的。你要是接受不了，我们也理解。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室的空调声突然很清楚。",timer:8,timeoutOption:"opt_thank_leave",options:[{id:"opt_confirm_record",text:"我把今天聊的整理一下发您邮箱，您确认下有没有出入。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_thank_leave",text:"（正常道谢，起身离开）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_08"},{id:"opt_argue_l11b",text:"那我今天来面的是什么？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"opt_give_up",text:"（当场说算了，不用等结果了）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_08"},{id:"opt_ally_l11",text:"（出会议室拨号）沈律师，我刚录了一段东西。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l11",text:"你们这叫指标？这叫明抢。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_flip_l11",text:"（一把掀翻会议桌）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"official",text:"（三天后，邮件）感谢您的时间。经综合评估，暂不匹配。祝顺利。",next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"赔偿金还剩两个月。手机里那段录音四十一分钟。",timer:8,timeoutOption:"opt_swallow",options:[{id:"opt_labor_complaint",text:"（向劳动监察部门投诉，附录音和邮件）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_request_reason",text:"（回信，要求书面说明未录用的具体原因）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_post_online_l11",text:"（把录音发到职场社区，@这家公司）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-20,composure:5,risk:25},next:"n_10"},{id:"opt_swallow",text:"（算了。接着投别家）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10"},{id:"opt_breath_l11",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_flip_l11b",text:"（冲回那家公司，砸了前台）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊听完录音，倒回去又放了一遍第七分钟。

「『同分优先女性』——这句是他自己说的，说得很清楚。」
「后面那句『集团有多元化指标』更好，那是把个人行为说成公司政策。」

她合上笔记本。
「你要清楚一件事：真正的平权是把门槛拉平，不是换个人挡在门口。
　这两样长得像，但方向是反的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「你要什么结果？出气，还是解决问题。」",timer:8,timeoutOption:"opt_drop_l11",options:[{id:"opt_full_l11",text:"投诉，同时保留起诉的权利。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_complaint_only",text:"投诉就行，不想打官司。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-10},next:"n_12"},{id:"opt_drop_l11",text:"算了。这行就这么大，得罪不起。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"},{id:"opt_revenge_l11",text:"把录音发给他们竞争对手。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`投诉受理回执上编号很长。

两周后那家公司来了电话，语气客气了很多，说岗位还在，问你有没有兴趣再聊聊。

你说谢谢，不用了。
挂了电话，你把回执拍照存进云盘，文件名写的是日期。`,next:"__END__"}],$a=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你掀了桌子。笔记本电脑砸在他小腿上。

寻衅滋事，行政拘留五日。公司报了警，还发了内部通报。
这行就这么大，通报当天就传遍了。

那段四十一分钟的录音你还有。
它证明了他说过什么。

它也录下了后面那两分钟。`,unlock:"card_L11_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=70 && risk<=25 && composure>=30",title:"名场面 · 第七分钟",script:`投诉材料递上去的第九天，劳动监察部门约谈了那家公司。

他们最先想否认。
然后调解员放了第七分钟那段：

「我直说吧。这个岗同分的话，我们优先女性。」

四十一分钟的完整录音，附一封你面试当天发出去的邮件——
「今天聊的内容我整理了一下，您看有没有出入。」
那封邮件他回了两个字：没有。

整改通知书下来了。
那家公司改了招聘流程，加了一条：
评估结论须书面记载并可追溯。

——

两周后他们打电话来，说岗位还在，问你有没有兴趣再聊聊。

你说谢谢，不用了。

沈骊后来问：「不去了？」
「不去了。」
「为什么？」

「因为这次改的是流程，不是他。」
「下一个人面试的时候能少听一句话，够了。」`,unlock:"card_L11_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=15",title:"干净脱身",script:`投诉受理了，公司出了一份书面说明，措辞谨慎，没承认什么。

没有整改，也没有下文。
但那份编号还在，回执还在。

三个月后你入职了另一家。新公司终面的时候，没人跟你聊指标。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`投诉提了，但只有一段没头没尾的录音，没有书面材料佐证。

受理了，也调查了，最后结论是「未发现明显违规」。

你在家又待了三个月。房贷断供前一周，签了一份降薪三成的 offer。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`「我理解，这也是应该的。」

这句话说完，后面就没什么可说的了。
拒信三天后到了，理由是「暂不匹配」。

你把那四个字读了好几遍。
它确实什么都没说，也确实什么都说了。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 发出去的那段",script:`你把录音发到了职场社区，@了那家公司。

三万转发。评论区吵翻天。
第二天公司发声明，说录音经过剪辑，已报警处理。

录音没剪。但你证明不了——你发出去的是转码压缩过的版本，
原始文件在你手机里，可你已经点了删除，因为内存满了。

猎头开始不接你电话。
这行就这么大。`,unlock:"card_L11_F"}],Yd={id:La,title:Pa,act:Oa,initState:wa,cast:Ra,entryNode:Sa,lawyerCard:Ea,satireTargets:Ca,nodes:Ia,endings:$a},Kd=Object.freeze(Object.defineProperty({__proto__:null,act:Oa,cast:Ra,default:Yd,endings:$a,entryNode:Sa,id:La,initState:wa,lawyerCard:Ea,nodes:Ia,satireTargets:Ca,title:Pa},Symbol.toStringTag,{value:"Module"})),Ma="L12",Na="第12关 · 署名顺序",Da=3,Fa={evidence:45,opinion:42,composure:42,risk:25},Ba=["hero","npc_l12_colleague","npc_l12_boss","zhou_you"],Ha="n_01",ja="card_law_L12",Ga=["T1","T3"],Ua=[{id:"n_01",type:"cutscene",pressure:1,script:`项目做了十一个月。方案是你出的，架构是你搭的，上线那周你在公司睡了四天。
结项材料要报集团评奖。署名表发到群里，第一作者那一栏空着。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l12_colleague",emotion:"earnest",text:"一作能不能给我？这个领域女性太少了，需要有人被看见。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"她是真心这么想的。这十一个月她也熬过三个通宵。",timer:8,timeoutOption:"opt_yield_l12",options:[{id:"opt_quantify",text:"咱们把各自做的部分列一下，按贡献排。我先列我的。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_04"},{id:"opt_email_it",text:"这个事我们邮件里说吧，抄送一下主管。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,risk:-10},next:"n_04"},{id:"opt_yield_l12",text:"行吧，给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20},next:"n_04"},{id:"opt_refuse_flat",text:"凭什么？活是我干的。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l12_boss",emotion:"smooth",text:"小陈啊，格局大一点。一个署名而已，你以后机会多的是。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"主管说这话的时候没抬头。他年底也要报评优。",timer:8,timeoutOption:"opt_cave_l12",options:[{id:"opt_written_criteria",text:"行。那署名规则按哪条来？咱们把标准写下来，以后都照这个。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:5,risk:-10},next:"n_06"},{id:"opt_co_first",text:"共同一作，附一份分工说明。两个人的贡献都写清楚。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_cave_l12",text:"……那就这样吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-15,risk:20},next:"n_06"},{id:"opt_confront_boss",text:"格局？这十一个月您来过几次？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:20},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l12_colleague",emotion:"hurt",text:"你这么坚持……是不是就是不想给女性机会。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室门开着。外面工位上有人抬起了头。",timer:8,timeoutOption:"opt_defend_l12",options:[{id:"opt_refuse_frame_l12",text:"我不接这个说法。我们现在谈的是这个项目谁做了什么。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:10,risk:-10},next:"n_08"},{id:"opt_facts_l12",text:"（把 commit 记录和评审纪要投到屏幕上）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,risk:-10},next:"n_08"},{id:"opt_defend_l12",text:"我什么时候不给女性机会了？你别乱扣帽子。",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_08"},{id:"opt_sarcasm_l12",text:"那我要是女的，这一作是不是就归我了。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-5,risk:15},next:"n_08"},{id:"opt_ally_l12",text:"（拨号问一句）沈律师，署名这个事有没有说法。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l12",text:"少拿性别说事。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l12",text:"（一把把笔记本电脑摔在桌上）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:2,script:`周攸从工位上站起来，走到门口。

「我插一句。」她说，「我也是女的。」

「这个项目从立项我就在旁边看着。架构评审那两周，会议室灯天天亮到十一点，
　里面坐的是谁，这层楼的人都知道。」

她顿了一下，转向林悦。

「你要一作，可以争，按贡献争。」
「但你不能拿'女性需要被看见'这句话来争。」
「因为下一次真有女的被压了署名，别人会想起今天。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"屋里静了。主管的手指在桌上敲了两下，停住了。",timer:8,timeoutOption:"opt_press_advantage",options:[{id:"opt_formalize",text:"谢谢周攸。那我们把标准和分工都写进邮件，抄送评奖组。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_10"},{id:"opt_offer_second",text:"二作给你，分工说明我来写，写清楚你做了哪几块。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_10"},{id:"opt_press_advantage",text:"（趁势追击）刚才那句话，你自己听听像不像样。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_10"},{id:"opt_soft_now",text:"算了，都不容易，一作还是给她吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:20},next:"n_10"},{id:"opt_breath_l12",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`邮件发出去了，抄送七个人。
正文里是一张表：模块、负责人、起止时间、评审记录链接。

十一个月，一百四十三条记录，时间戳全在。

评奖组回了一句：材料清楚，按此执行。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"散会后林悦在茶水间等你。「刚才……对不起。」",timer:8,timeoutOption:"opt_cold_l12",options:[{id:"opt_move_on",text:"没事。下个项目你带，我给你写评审意见。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:15,risk:-10},next:"n_12"},{id:"opt_neutral_l12b",text:"过去了。（点点头，走开）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:10,risk:-5},next:"n_12"},{id:"opt_cold_l12",text:"以后有事走邮件。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-15,composure:5,risk:10},next:"n_12"},{id:"opt_gloat_l12",text:"记住今天。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-5,risk:15},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`评奖结果下来那天，署名表贴在楼道公告栏上。
第一作者一栏是你的名字，后面跟着一行小字：
「分工说明见附件」。

周攸路过看了一眼，说：「这行小字挺好。」
你说：「这行小字是你换来的。」`,next:"__END__"}],Va=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 摔的那一下",script:`笔记本砸在桌上，屏幕裂了，碎片弹到她手背上。

公司认定为职场暴力行为，记大过，取消当年评优资格。
那一作最后归了她，署名表上没有分工说明。

一百四十三条 commit 记录还在仓库里。
谁也没打开过。`,unlock:"card_L12_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=20 && opinion>=70 && composure>=35",title:"名场面 · 一百四十三条",script:`「那署名规则按哪条来？」

「咱们把标准写下来，以后都照这个。」
「谁做了多少，写清楚。这次我占便宜，下次我认；这次我吃亏，下次我也认。」

主管抬起头了。这是他今天第一次抬头。

——

邮件抄送七个人。附件是一张表：
模块、负责人、起止时间、评审记录链接。一百四十三条，时间戳全在。

评奖组回了六个字：材料清楚，照此。

——

散会后林悦在茶水间等你。
「刚才……对不起。」

「没事。」你说，「下个项目你带，我给你写评审意见。」

她愣了一下：「你不生气？」

「生气。」你说，「但生气跟这个项目谁做的，是两件事。」

——

结果贴出来那天，第一作者一栏是你，后面跟一行小字：分工说明见附件。

周攸路过看了一眼，说：「这行小字挺好。」
你说：「这行小字是你换来的。」`,unlock:"card_L12_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=15",title:"干净脱身",script:`共同一作，附分工说明。评奖过了。

没人特别高兴，也没人特别不高兴。
后来那份分工说明被别的组borrow去当模板用了。

有人问是谁写的，主管说不记得了。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`一作保住了，但那句话传出去了。

「陈屿不太愿意带女生。」
没人当面说，可下个项目分组的时候，你那组全是男的。

你去问主管怎么排的，他说随机。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`「行吧，给你。」

三个字，十一个月。

评奖过了，材料上写的是她。年底晋升她过了，你没过。
评委问主管这个项目谁主导的，主管说：这个……材料上写着呢。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 那句反问",script:`「那我要是女的，这一作是不是就归我了。」

这句话被人录了下来，发在部门群里，只有这一句。

没有上下文，没有前面那十一个月。
投诉当天就到了 HR。

三个月后你走了。离职原因写的是个人发展。

那一百四十三条 commit 记录，到最后也没人问起过。`,unlock:"card_L12_F"}],qd={id:Ma,title:Na,act:Da,initState:Fa,cast:Ba,entryNode:Ha,lawyerCard:ja,satireTargets:Ga,nodes:Ua,endings:Va},Wd=Object.freeze(Object.defineProperty({__proto__:null,act:Da,cast:Ba,default:qd,endings:Va,entryNode:Ha,id:Ma,initState:Fa,lawyerCard:ja,nodes:Ua,satireTargets:Ga,title:Na},Symbol.toStringTag,{value:"Module"})),Ya="L13",Ka="第13关 · 团建那句玩笑",qa=3,Wa={evidence:25,opinion:35,composure:36,risk:40},za=["hero","npc_l13_hr","npc_l13_complainant","zhou_you","shen_li"],Xa="n_01",Ja="card_law_L13",Za=["T1","T5"],Qa=[{id:"n_01",type:"cutscene",pressure:1,script:`三周前，部门团建，KTV 包厢。
十一个人，两箱啤酒，唱到十一点半。
那天晚上很吵，你只记得笑得挺开心。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l13_hr",emotion:"official",text:"有同事投诉你，在团建上有不当言论。涉及性骚扰。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"小会议室，摄像头对着门。她面前摊着一个本子，写了半页。",timer:8,timeoutOption:"opt_scramble_l13",options:[{id:"opt_ask_specific",text:"具体是哪句话？什么时间说的？请给我完整原话。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_written_l13",text:"投诉是书面的吗？我能看到投诉材料吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_scramble_l13",text:"我说了什么？我……我想想，那天喝了点酒……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_deny_all_l13",text:"我什么都没说过。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-5,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l13_hr",emotion:"evasive",text:"投诉人希望保密。你先自己想想，那天说过什么。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"「你先自己想想」——这句话把举证责任整个翻了过来。",timer:8,timeoutOption:"opt_self_search",options:[{id:"opt_refuse_burden",text:"我没法对着空气回忆。请给我具体指控，我逐条回应。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_find_video",text:"那天有同事全程拍视频发朋友圈。原片能调，我建议先看原片。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_self_search",text:"（努力回忆，把能想起来的都说了一遍）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:-15,risk:15},next:"n_06"},{id:"opt_demand_name",text:"是谁投诉的？你让她出来当面对质。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l13_hr",emotion:"appease",text:"这样吧，你写个情况说明，态度诚恳点，这事就过去了。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她把一张空白 A4 推过来，笔帽已经拧开了。",timer:8,timeoutOption:"opt_write_apology",options:[{id:"opt_refuse_apology",text:"我可以写说明，但不写道歉。没查清之前，道歉就是认定。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-15},next:"n_08"},{id:"opt_ask_process_l13",text:"公司的投诉处理规程能给我一份吗？我按规程配合。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_write_apology",text:"（拿起笔，写了一份道歉说明）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_APOLOGY_LETTER"]},next:"n_08"},{id:"opt_walk_out_l13",text:"（把纸推回去，起身走人）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-20,composure:-5,risk:20},next:"n_08"},{id:"opt_ally_l13",text:"（走廊拨号）沈律师，HR 让我写份说明。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l13",text:"你们这叫调查？这叫定罪。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l13",text:"（把桌上的东西全扫到地上）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:3,script:`晚上周攸在楼下等你。她抱着电脑，站了很久的样子。

「我那天在场。」她说。
「但我真的记不清了。十一个人，那么吵。」

她抬起头。
「陈屿，我不想问，但我得问——你到底说没说过？」`,next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"她的手在电脑包带子上攥着。这个问题她想了三天。",timer:8,timeoutOption:"opt_hurt_l13",options:[{id:"opt_honest_l13",text:"我不知道。那天我喝了酒。所以我要看原片，不是要你信我。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_10"},{id:"opt_ask_help_l13",text:"你能帮我一件事吗？帮我问问那天谁拍了视频。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_10"},{id:"opt_hurt_l13",text:"连你也怀疑我。",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-15,opinion:-20,composure:-15,risk:10},next:"n_10"},{id:"opt_pressure_l13",text:"你是证人。你得帮我作证。",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-20,opinion:-20,composure:-5,risk:20},next:"n_10"},{id:"opt_breath_l13",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`原片找到了。同事发朋友圈那条，四分十七秒，没剪。

02:31 —— 包厢里在玩接歌词的游戏。
02:33 —— 投诉人先起的头，说了那句话的前半句。
02:35 —— 你接了后半句，接得挺顺。
02:36 —— 满屋子笑。

笑得最大声的，是她。画面正中，笑到往后仰。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"HR 看完，把播放器暂停在 02:36。她没说话。",timer:8,timeoutOption:"opt_let_go_l13",options:[{id:"opt_written_conclusion",text:"麻烦出一份书面结论，写明调查结果。我要留档。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_process_fix",text:"另外我建议一件事：以后投诉受理，得有具体事实和时间。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:5,risk:-10},next:"n_12"},{id:"opt_counter_l13",text:"我要反过来投诉她。诬告。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:20},next:"n_12"},{id:"opt_let_go_l13",text:"（松了口气）那这事就算过去了吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:10,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`书面结论下来那天，周攸给你发了条消息，就三个字：

「对不起。」

你回：不用。你那天问我那句话，问得对。`,next:"__END__"}],el=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 小会议室",script:`杯子摔了，笔记本飞到墙上。HR 的手背划破了。

公司当天启动解除劳动合同程序，理由是严重违反规章制度。
那个词你后来在竞业协议里又看到一次。

原片一直在那个同事的朋友圈里。
四分十七秒，02:36，满屋子笑，笑得最大声的是她。

没有人再需要看它了。`,unlock:"card_L13_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=75 && risk<=30 && dOpinion>=30 && composure>=20",title:"名场面 · 02:36",script:`「我可以写说明。但我不写道歉。」

「没查清之前，道歉就是认定。」
「您把这句话记进去也行——我不是不配合，我是不替你们做结论。」

——

原片四分十七秒，没剪。

02:33，投诉人先起的头，说了前半句。
02:35，你接了后半句。
02:36，满屋子笑。画面正中，她笑到往后仰。

HR 把进度条拖回 02:33，又放了一遍。然后关掉播放器。

「书面结论我今天出。」她说。

「还有一件事。」你说。
「以后受理投诉，能不能要求写清楚具体的话、具体的时间？」
「不是为我。是为下一个真被骚扰的人——」
「她要是连具体哪句话都不用写就能被受理，
　那真有事的时候，她说的话也就没有分量了。」

——

周攸后来发了三个字：对不起。

你回：不用。
你那天问我那句话，问得对。

如果连你都不问就信我，那这事就不是查清楚了，
是换了一批人瞎猜。`,unlock:"card_L13_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=10",title:"干净脱身",script:`原片调出来了，事情清楚，口头说了句「误会」。
没有书面结论。

三个月后有个跨部门项目，你的名字在候选名单上被划掉了。
没人告诉你为什么。你也没问。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`查了两周，最后不了了之。

没有处理，也没有澄清。这两样在公司里是同一件事。

年底调薪，你那一栏是零。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`「那天我喝了点酒，我想想……」

你自己回忆出来的那些话，被一条一条记进了本子。
有些是你说的，有些不是，但都在你的笔录里。

三个月后你调去了另一个组。
新组长第一天跟你说：过去的事就过去了。

你想问哪件事，最后没问。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 那份说明",script:`你写了。

「关于团建当晚言行不当一事，本人深感抱歉……」

这份说明被归进人事档案，摘要一句：
「经沟通，该员工已认识到问题并致歉。」

三周后原片被人翻出来了。02:36，笑得最大声的是她。

你去找 HR，说你看这个。
她说：可是你已经道歉了呀。

道歉这个动作，在流程里从来只有一种解释。`,unlock:"card_L13_F"}],zd={id:Ya,title:Ka,act:qa,initState:Wa,cast:za,entryNode:Xa,lawyerCard:Ja,satireTargets:Za,nodes:Qa,endings:el},Xd=Object.freeze(Object.defineProperty({__proto__:null,act:qa,cast:za,default:zd,endings:el,entryNode:Xa,id:Ya,initState:Wa,lawyerCard:Ja,nodes:Qa,satireTargets:Za,title:Ka},Symbol.toStringTag,{value:"Module"})),tl="L14",nl="第14关 · 匿名举报",il=3,ol={evidence:30,opinion:35,composure:34,risk:45},sl=["hero","npc_l14_hr","npc_l14_director","zhou_you","shen_li"],rl="n_01",cl="card_law_L14",al=["T1","T5"],ll=[{id:"n_01",type:"cutscene",pressure:2,script:`晋升公示第七天，最后一天。
名单贴出去六天了，没人有异议。明天就走流程。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l14_hr",emotion:"official",text:"今早收到一封匿名举报。指控你长期言语骚扰女同事。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"信是打印的，没有署名，没有日期，没有一件具体的事。",timer:8,timeoutOption:"opt_panic_l14",options:[{id:"opt_ask_content",text:"举报的具体内容是什么？时间、地点、当事人，我要逐条看到。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_rule_l14",text:"公司投诉受理规程是怎么规定的？匿名件能受理吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_panic_l14",text:"谁写的？是不是有人不想我升？",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_selfdoubt_l14",text:"……会不会是我平时哪句话没注意？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:4,speaker:"npc_l14_hr",emotion:"appease",text:"先停职配合调查吧。这样对你也好，省得大家议论。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"公示期停职，晋升自动作废。这一点她没说，你们都知道。",timer:8,timeoutOption:"opt_accept_suspension",options:[{id:"opt_demand_written",text:"停职可以。请出书面通知，写明系公司决定，与本人申请无关。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_refuse_suspension",text:"在查清之前停职，等于先定罪。我要求正常出勤配合调查。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_accept_suspension",text:"行吧。那我先回去等消息。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:-10,risk:25},next:"n_06"},{id:"opt_yell_l14",text:"凭一封匿名信就停我职？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"},{id:"opt_ally_l14",text:"（拨号）沈律师，他们要我先停职配合。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l14_hr",emotion:"stuck",text:"（笔停在纸上）这个……写成书面的，我得请示一下。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"她请示不下来。写了，公司就要为「凭匿名件停职」这件事签字。",timer:8,timeoutOption:"opt_wait_l14",options:[{id:"opt_email_summary",text:"（当场发邮件，把刚才的沟通复述一遍，抄送她和分管领导）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_08"},{id:"opt_union",text:"我申请工会和法务同时介入，全程留痕。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_ask_around",text:"（私下去问几个女同事，是不是她们写的）",tag:"TRAP",aggression:1,initiative:2,effects:{evidence:-25,opinion:-15,composure:-5,risk:25},next:"n_08"},{id:"opt_wait_l14",text:"（回工位等，什么也不做）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-10,risk:15},next:"n_08"}],impulsePool:[{id:"imp_curse_l14",text:"这封信谁写的，我早晚知道。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_08"}]},{id:"n_08",type:"dialogue",pressure:3,speaker:"npc_l14_director",emotion:"smooth",text:"小陈，我给你个建议——主动申请调个岗，体面。硬扛对谁都不好。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"分管领导亲自来的。他手上端着咖啡，站着没坐。",timer:8,timeoutOption:"opt_transfer",options:[{id:"opt_hold_line",text:"我不申请。查清楚之前，我做的任何动作都会被当成默认。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-10},next:"n_10"},{id:"opt_ask_him_written",text:"这个建议，能麻烦您也写进邮件里吗？我按建议办。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_10"},{id:"opt_transfer",text:"（想了想，还是提交了调岗申请）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:-10,risk:25},next:"n_10"},{id:"opt_resign_l14",text:"（当场提了离职）",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-25,opinion:-15,composure:-5,risk:25},next:"n_10"},{id:"opt_breath_l14",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_shove_l14",text:"（一把推开挡在门口的他）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`两周后，调查结论出来了。

举报信没有任何具体事实指向。调查组约谈了全组十四人，无一人证实。
发件邮箱是临时注册的，IP 指向公司内网访客网络。

结论一句话：投诉不成立。

沈骊看完，只说了一句：
「他们查了两周，最后查出来的其实是另一件事——
　凭这样一封信就能停一个人的职。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"HR 问：「那这个事，就到这儿了？」",timer:8,timeoutOption:"opt_end_it",options:[{id:"opt_fix_process_l14",text:"结论书面给我一份。另外，受理规程该改了——匿名件不能直接启动调查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_12"},{id:"opt_written_only",text:"结论书面给我一份就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:20,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_hunt",text:"我要查是谁写的。公司必须给我一个说法。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:20},next:"n_12"},{id:"opt_end_it",text:"到这儿吧。累了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`晋升补发了，日期倒签回原公示期。

新的受理规程挂在内网上，第三条加了一句：
「投诉须载明具体事实、时间及当事人，匿名件不予直接启动调查程序。」

周攸看到那条，截图发给你：「第三条。」
你回：「嗯。」`,next:"__END__"}],pl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口",script:`你推开了他。他手里的咖啡洒了一身，人撞在门框上。

当天解除劳动合同，理由：严重违反规章制度。无补偿。

两周后调查结论出来了，投诉不成立。
那份结论寄到了你家，一式一份。

它证明那封信是假的。
它证明不了你不该被开除。`,unlock:"card_L14_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=75 && risk<=30 && composure>=10",title:"名场面 · 请写成书面的",script:`「停职可以。」

「请出一份书面通知，写明：系公司主动决定，与本人申请无关。」

HR 的笔停在纸上。

因为写下来，公司就得为「凭一封匿名信停一个人的职」这件事签字。
口头说，成本是零。落到纸上，成本是全部。

她说：「这个……我得请示一下。」
请示了三天，没请示下来。

——

你没停职。公示期走完了。

两周后调查结论：举报信无任何具体事实指向，约谈全组十四人，无一人证实。
发件邮箱临时注册，IP 指向访客网络。

沈骊看完说：
「他们查了两周，查出来的其实是另一件事——
　凭这样一封信就能停一个人的职。」

——

「结论书面给我一份。」你说。
「另外，受理规程该改了。匿名件不能直接启动调查。」

HR 问：「你还惦记这个？」

「惦记。」
「因为下次那封信可能是真的。
　真的那封，得有人认真看。
　可要是什么信都能启动调查，那就等于什么信都不会被认真看。」

——

新规程第三条挂上了内网。
周攸截图发给你：「第三条。」
你回：「嗯。」`,unlock:"card_L14_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=5",title:"干净脱身",script:`没停职，调查走完了，结论不成立。晋升延后一个季度补上。

规程没改。那封信是谁写的，也没人再提。

后来每次开部门会，你都习惯性地把纪要发一份到自己邮箱。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`停职了两周。晋升自动作废，下一轮再报。

结论出来是不成立，但公示已经撤了。
重新公示要等下个周期，下个周期名额只有一个。

那个名额给了别人。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`你交了调岗申请。

人事记录上写的是：员工本人申请调岗。
六个字，把公司从这件事里摘得干干净净。

新岗位在另一栋楼。晋升的事没人再提。
那封匿名信也没人再提——它已经完成了它的全部工作。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 你去问了",script:`你私下找了三个女同事，一个一个问：是不是你写的。

第二天，新的投诉进来了。这一次是实名的，三个人。
内容是：被举报人在调查期间私下接触潜在证人，施加压力。

这一条，你没法否认。因为你确实做了。

原来那封匿名信到最后也没查出是谁写的。
它不需要。它只需要你自己动起来。`,unlock:"card_L14_F"}],Jd={id:tl,title:nl,act:il,initState:ol,cast:sl,entryNode:rl,lawyerCard:cl,satireTargets:al,nodes:ll,endings:pl},Zd=Object.freeze(Object.defineProperty({__proto__:null,act:il,cast:sl,default:Jd,endings:pl,entryNode:rl,id:tl,initState:ol,lawyerCard:cl,nodes:ll,satireTargets:al,title:nl},Symbol.toStringTag,{value:"Module"})),ul="L15",_l="第15关 · 最后一张牌",dl=3,fl={evidence:40,opinion:40,composure:32,risk:50},gl=["hero","npc_l15_broker","npc_l15_hr","shen_li"],ml="n_01",vl="card_law_L15",hl=["T4"],xl=[{id:"n_01",type:"cutscene",pressure:2,script:`裁员名单下来了，你在上面。
公司给的方案是 N。按法律该是 2N，差了十九万。

谈判第三轮，人事说：这已经是最好的了。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l15_broker",emotion:"friendly",text:"（前同事，在楼下咖啡厅）陈哥，我这儿有份材料。你要是不签，它就得交上去。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"他把手机屏幕转过来一秒又收回去。你只看清了一个词：投诉。",timer:8,timeoutOption:"opt_beg_l15",options:[{id:"opt_record_l15",text:"（手机放桌上，屏幕朝上）什么材料？你把话说完整。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_price_l15",text:"你想要什么？直接说数。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:5,risk:-5},next:"n_04"},{id:"opt_beg_l15",text:"兄弟，咱们这么多年了，你别这样。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_04"},{id:"opt_rage_l15",text:"你他妈也是个东西。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l15_broker",emotion:"cold",text:"八万。你签 N 走人，八万给我。这材料就烂在我手里。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"他说完喝了口咖啡。杯子放下的时候手很稳。",timer:8,timeoutOption:"opt_pay_l15",options:[{id:"opt_police_l15",text:"（当场报警）有人以举报相要挟，向我索要八万。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_confirm_price",text:"八万。刚才这个数，你再说一遍，我没听清。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_06"},{id:"opt_pay_l15",text:"（打开转账）行，八万。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_threaten_l15",text:"你敢交上去，我弄死你。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:25},next:"n_06"},{id:"opt_ally_l15",text:"（拨号）沈律师，有人拿举报跟我要钱。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l15_hr",emotion:"smooth",text:"（下午，会议室）小陈，我们收到点情况反映。你看，N 是不是也挺好。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"上午八万，下午 N。这两件事之间隔着四个小时。",timer:8,timeoutOption:"opt_sign_l15",options:[{id:"opt_link_them",text:"什么情况反映？麻烦书面给我。另外今天上午的事，我已经报警了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-15},next:"n_08"},{id:"opt_arbitration",text:"赔偿按法定标准。谈不拢，我走劳动仲裁。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_sign_l15",text:"（签了 N 的协议）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:5,risk:25},next:"n_08"},{id:"opt_blowup_l15",text:"（在会议室拍桌子）你们是不是串通好的？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:15},next:"n_08"},{id:"opt_breath_l15",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l15",text:"一个个的，都不是人。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_08"},{id:"imp_hit_l15",text:"（下楼堵住他，一拳打过去）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:2,script:`沈骊把录音听完，停在第四分十一秒。

「八万。你签 N 走人，八万给我。这材料就烂在我手里。」

「这一句就够了。」她说，「以举报相要挟索取财物，数额较大。
　这不是职场纠纷，这是刑事案件。」

她把两条线画在纸上。
「刑事这条，公安办。劳动这条，仲裁办。」
「两条线分开走，谁也别耽误谁。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"沈骊：「有一件事你得想清楚——报警之后，公司也会知道。」",timer:8,timeoutOption:"opt_hesitate_l15",options:[{id:"opt_both_lines",text:"两条线一起走。刑事报案，仲裁同时立。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_10"},{id:"opt_arb_only",text:"先走仲裁。刑事那条留着。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_hesitate_l15",text:"……那算了，别报警了。这行就这么大。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:20},next:"n_10"},{id:"opt_expose_l15",text:"把录音发到行业群，让所有人看看他什么货色。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_10"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`刑事立案通知书下来那天，人事主动打了电话。

「陈先生，之前的方案我们再研究了一下。」
「2N，另外这个月的绩效正常发。」

那份「情况反映」，从头到尾没人再提过。
因为它压根就不存在——立案后调查组问过，他一个字都拿不出来。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"他给你发了条微信，很长。最后一句是：能不能撤案。",timer:8,timeoutOption:"opt_soften_l15",options:[{id:"opt_no_withdraw",text:"（截图存证。回一句：这个不归我决定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_no_reply_l15",text:"（不回。截图交给办案民警）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-10},next:"n_12"},{id:"opt_soften_l15",text:"（回：我尽量。）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-5,risk:20},next:"n_12"},{id:"opt_taunt_l15",text:"（回：你也有今天。）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-10,opinion:-20,composure:5,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`离职手续办完那天，他被取保候审。

出公司大门的时候你回头看了一眼那栋楼。
十一年。

沈骊在路边等你，车窗摇下来：「上车吧，堵着呢。」`,next:"__END__"}],kl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一拳",script:`你在楼下堵住他，一拳打在他脸上。鼻梁骨折。

轻伤二级，刑事案件。你被刑事拘留。

他那边的敲诈，因为你的伤害案先立，被并案处理。
最后他缓刑，你实刑。

差别在于：他勒索的是钱，你打断的是骨头。
法律看得见后者，因为后者留在片子上。

2N 没了，N 也没了。
十九万变成了赔偿他的八万六。`,unlock:"card_L15_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=30 && composure>=15",title:"名场面 · 第四分十一秒",script:`「八万。你签 N 走人，八万给我。这材料就烂在我手里。」

四分十一秒，一句完整的话，主谓宾齐全。

沈骊把它放了三遍，然后在纸上画了两条线。

「刑事这条，公安办。劳动这条，仲裁办。」
「两条线分开走，谁也别耽误谁。」

——

立案通知书下来的第二天，人事主动打了电话。

「2N，这个月绩效正常发。」

那份所谓的「情况反映」，从头到尾没人再提。
因为它压根不存在——调查组问过，他一个字都拿不出来。

他从来就没有材料。
他只有一句话，和一个赌你不敢录音的判断。

——

最后他发来一条很长的微信，最后一句是：能不能撤案。

你截了图，回了七个字：

「这个不归我决定。」

——

办完手续那天，出大门的时候你回头看了一眼那栋楼。十一年。

沈骊在路边等你，摇下车窗：「上车吧，堵着呢。」`,unlock:"card_L15_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=5",title:"干净脱身",script:`仲裁赢了，2N 拿到手。刑事那条你没走到底，最后是调解结案。

他赔了两万，写了道歉信。
那封信你没看，直接归档了。

新工作三个月后找到的，薪水差不多。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`仲裁走了五个月，最后调解，拿了 1.5N。

那段录音在，但你当时没让他把话说完整——
只有半句，「材料」两个字前面缺了主语。

仲裁员说这个证明力有限。你说我知道。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`八万给了。N 签了。

三个月后他又找上门，说还有一份材料。

第一次给钱的那一刻，你就不是在解决问题了，
你是在给自己定一个价。
定了价的东西，后面都是复购。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 发出去的那段",script:`你把录音发到了行业群，两百多人。

当天下午群里就有人截图转出去了，加了配文。
第二天他发了律师函，说你侵犯名誉权、泄露个人信息。

他敲诈这件事，警察还在查。
你发录音这件事，一天就查完了。

最后各罚一半：他赔你，你赔他。
数额差不多，抵了。

2N 的仲裁开庭那天，公司提交了一份材料：
员工在离职期间将内部沟通录音公开传播。`,unlock:"card_L15_F"}],Qd={id:ul,title:_l,act:dl,initState:fl,cast:gl,entryNode:ml,lawyerCard:vl,satireTargets:hl,nodes:xl,endings:kl},ef=Object.freeze(Object.defineProperty({__proto__:null,act:dl,cast:gl,default:Qd,endings:kl,entryNode:ml,id:ul,initState:fl,lawyerCard:vl,nodes:xl,satireTargets:hl,title:_l},Symbol.toStringTag,{value:"Module"})),yl="L16",Tl="第16关 · 三十秒剪辑",bl=4,Al={evidence:35,opinion:20,composure:40,risk:40},Ll=["hero","npc_l16_account","shen_li","zhou_you","crowd"],Pl="n_01",Ol="card_law_L16",wl=["T2","T4"],Rl=[{id:"n_01",type:"cutscene",pressure:3,script:`周一早上七点，你在地铁上刷到自己。

三十秒。标题是《扒一扒身边的连环猎手》。

地铁那三分钟，剪了五秒——只有她指着你的那一下。
健身房，剪了四秒——只有你伸手的那一帧。
团建包厢，剪了三秒——只有你说话的那半句。

拼在一起，是一个人的十一年。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（转发四万二。评论区最上面那条：这种人怎么还在上班。）",next:"n_03"},{id:"n_03",type:"choice",pressure:4,prompt:"手机在你手里烫。还有六站到公司。",timer:8,timeoutOption:"opt_comment_fight",options:[{id:"opt_notarize",text:"（先做证据保全公证。截图、录屏、转发数，全部固定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_platform_report",text:"（走平台投诉通道，提交完整原片作为对照）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_comment_fight",text:"（在评论区下场，一条一条回）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-20,composure:-15,risk:15},next:"n_04"},{id:"opt_beg_delete",text:"（私信对方：求你删了，我给你钱）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:5,speaker:"npc_l16_account",emotion:"businesslike",text:"（私信回复）视频是网友投稿，我们只是转发。有异议走平台申诉哦～",next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"转发破十万。你妈打来电话，问你是不是出事了。",timer:8,timeoutOption:"opt_panic_l16",options:[{id:"opt_release_full",text:"（把三段完整原片一次性发出来，附每一段的书面结论）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:30,composure:5,risk:-5},next:"n_06"},{id:"opt_lawyer_letter_l16",text:"（律师函，同时向平台提交完整证据包）",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-10},next:"n_06"},{id:"opt_panic_l16",text:"（发一条长文自证，写了两千字）",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-10,opinion:-20,composure:-15,risk:15},next:"n_06"},{id:"opt_counter_edit",text:"（自己也剪一个，把对方的黑历史拼进去）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-25,opinion:-20,risk:25},next:"n_06"},{id:"opt_breath_l16",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_05",oncePerNode:!0}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:4,script:`完整版发出去了。

地铁监控：三分十七秒，双手一直在扶杆上。
健身房监控：20:31:21 入画，掌心向上托住杠铃杆。20:09 同一个动作，救的是个男的。
团建原片：02:33 她先起的头，02:36 满屋子笑，笑得最大声的是她。

三份书面结论附在后面。派出所的、健身房的、公司的。
每一份都有编号，有日期，有章。`,next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"第一个小时，转发一千二。第二个小时，两万。风向在转，但很慢。",timer:8,timeoutOption:"opt_push_hard",options:[{id:"opt_stay_quiet",text:"（发完就不再说话。让材料自己走）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:15,risk:-10},next:"n_08"},{id:"opt_supplement",text:"（只补一条：原片链接与结论编号，其余不回应）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_08"},{id:"opt_push_hard",text:"（挨个回复质疑者，一条都不放过）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-20,risk:15},next:"n_08"},{id:"opt_demand_apology_l16",text:"（公开点名要求对方道歉）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-15,composure:-10,risk:20},next:"n_08"}],impulsePool:[{id:"imp_rage_l16",text:"（发了一条骂人的，三分钟后删了）",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_08"},{id:"imp_smash_l16",text:"（冲去他们公司楼下堵门）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:3,speaker:"zhou_you",emotion:"firm",text:"（转发了完整版，配文四个字）我在现场。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"她的号只有两百个粉丝。但她实名，头像是工牌照。",timer:8,timeoutOption:"opt_let_her",options:[{id:"opt_protect_her",text:"（私信她：谢谢。但你别再转了，他们会去扒你）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:30,composure:10,risk:-10},next:"n_10"},{id:"opt_thank_public",text:"（公开道谢，同时提醒大家不要去她主页）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:25,composure:5,risk:-5},next:"n_10"},{id:"opt_let_her",text:"（没管。她的转发确实帮了大忙）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:5,opinion:-20,composure:-10,risk:20},next:"n_10"},{id:"opt_amplify",text:"（把她的转发置顶，让更多人看见）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:10,opinion:-25,composure:-5,risk:25},next:"n_10"},{id:"opt_ally_l16",text:"（拨号）沈律师，我上热搜了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_10"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`第三天，那条三十秒的视频删了。
没有道歉，没有说明。

后台数据是沈骊后来通过平台调出来的：
剪辑版，播放两千一百万。
完整版，播放四十七万。

「差了四十五倍。」她说。
「这不是意外。这是这门生意的毛利率。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「删了不等于完了。你要不要往下走？」",timer:8,timeoutOption:"opt_stop_l16",options:[{id:"opt_sue_l16",text:"起诉。名誉权，要判决书，不要和解。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_trace_source",text:"先查投稿来源。我想知道那三段是谁拼的。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10,addFlags:["L16_TRACED"]},next:"n_12"},{id:"opt_stop_l16",text:"删了就算了。我累了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-10,risk:20},next:"n_12"},{id:"opt_public_war",text:"我要把这个号做掉。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_12"}],impulsePool:[{id:"imp_smash_l16b",text:"（查到地址，冲过去砸了他们的设备）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`投稿邮箱查到了。不是网友。

是一家 MCN 的内容中台，账号矩阵的第十一个号。
营业执照上的法人代表，名字叫贺松。

沈骊把那张工商信息截图放大，看了很久。
「这个人，我见过两次。」
「两次都在别人的案子里。」`,next:"__END__"}],Sl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 找上门",script:`你找到了那家公司的地址，冲进去把设备砸了。

寻衅滋事、故意毁坏财物，两项并罚。

第二天新视频发出来了，标题是《被我们曝光后，他找上门了》。
有监控，有你砸设备的画面，播放三千八百万。

这一次他们不需要剪辑。`,unlock:"card_L16_F"},{id:"e_s_rank",rank:"S",condition:"dOpinion>=45 && evidence>=70 && risk<=30 && composure>=15",title:"名场面 · 完整版",script:`你没有解释一个字。你只发了三样东西。

地铁监控，三分十七秒。双手一直在扶杆上。
健身房监控，20:31:21 你入画托住杠铃；20:09，同样的动作，救的是个男的。
团建原片，四分十七秒。02:33 她先起的头，02:36 满屋子笑。

后面附三份书面结论。派出所的、健身房的、公司的。
每一份都有编号，有日期，有章。

——

第一个小时，转发一千二。第二个小时，两万。

然后你就不说话了。

沈骊问：「不回应？」
「不回应。」
「材料齐了以后，说话是减分的。」

——

周攸转了完整版，配文四个字：我在现场。
她只有两百个粉丝，但她实名。

你私信她：谢谢。但你别再转了，他们会去扒你。
她回：我知道。所以我转之前把朋友圈清了。

——

第三天视频删了。没有道歉，没有说明。

后台数据是沈骊调出来的：
剪辑版两千一百万，完整版四十七万。

「差了四十五倍。」她说。
「这不是意外。这是这门生意的毛利率。」

——

投稿邮箱查到了。不是网友，是一家 MCN 的内容中台。
法人代表叫贺松。

沈骊把工商信息放大，看了很久。
「这个人我见过两次。两次都在别人的案子里。」`,unlock:"card_L16_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=5",title:"干净脱身",script:`完整版发出去了，风向慢慢转了。第五天那条视频悄悄删了。

没查来源。那时候你只想让它赶紧过去。

三个月后又有人把那三十秒翻出来发了一次。
这一次转发只有八百。可你还是失眠了两天。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`你在评论区吵了三天，也发了完整版。

两样东西一起传，人们记住的是吵架那部分。

视频最后删了。搜索你名字，第一条还是那个标题。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`你私信对方，说愿意给钱，求删掉。

他们删了。
三周后又发了一条，换了个标题。

你才明白：你付的不是删帖费，是订阅费。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 你也剪了一个",script:`你自己剪了一个，把对方的黑历史拼进去，发了出来。

三小时后对方发了声明：本人遭遇恶意剪辑，已报警。

他们说的是真的。你确实剪了。

从这一刻起，这件事不再是「谁在造谣」，
而是「两个剪视频的人在互相造谣」。

完整版你也发了。没人看。
因为你已经不是那个只有完整版的人了。`,unlock:"card_L16_F"}],tf={id:yl,title:Tl,act:bl,initState:Al,cast:Ll,entryNode:Pl,lawyerCard:Ol,satireTargets:wl,nodes:Rl,endings:Sl},nf=Object.freeze(Object.defineProperty({__proto__:null,act:bl,cast:Ll,default:tf,endings:Sl,entryNode:Pl,id:yl,initState:Al,lawyerCard:Ol,nodes:Rl,satireTargets:wl,title:Tl},Symbol.toStringTag,{value:"Module"})),El="L17",Cl="第17关 · 人肉",Il=4,$l={evidence:40,opinion:10,composure:28,risk:45},Ml=["hero","npc_l17_father","npc_l17_hr","shen_li","crowd"],Nl="n_01",Dl="card_law_L17",Fl=["T2","T4"],Bl=[{id:"n_01",type:"cutscene",pressure:4,script:`周四凌晨两点，一个文档在群里传开了。

姓名、身份证号、公司地址、工位号。
父母的住址，你爸的手机号。
念念的幼儿园名字，和班级。

标题是：《人肉不是目的，正义才是》。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:5,speaker:"npc_l17_father",emotion:"confused",text:"（清晨五点四十的电话）小屿，家里电话一晚上没停。你妈吓得没睡。",next:"n_03"},{id:"n_03",type:"choice",pressure:5,prompt:"他没问你做了什么。他只问：要不要报警。",timer:8,timeoutOption:"opt_collapse_l17",options:[{id:"opt_protect_parents",text:"爸，现在关机。我今天回去接你们，先住我这儿。我来报警。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:15,risk:-10},next:"n_04"},{id:"opt_notarize_l17",text:"（先做全网证据公证，把那个文档和传播路径全部固定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_collapse_l17",text:"（说不出话，挂了电话）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-20,risk:15},next:"n_04"},{id:"opt_doxx_back",text:"（开始扒对方。三个小时后你有了他的住址）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-30,opinion:-15,risk:25,addFlags:["G_NEG_DOXXED_BACK"]},next:"n_04"},{id:"opt_ally_l17",text:"（拨号，声音发抖）沈律师……我爸妈那边。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:5,speaker:"npc_l17_hr",emotion:"pressured",text:"陈屿，前台今天接了六百多个电话。老板问我们要个说法。",next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"幼儿园老师也发了消息，问最近要不要换人接送。",timer:8,timeoutOption:"opt_resign_l17",options:[{id:"opt_full_response",text:"（给公司一份完整证据包 + 公证书 + 报案回执。请公司走法务）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_report_crime",text:"（向公安报案：侵犯公民个人信息、寻衅滋事）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_resign_l17",text:"（提离职。不想连累公司）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:-10,risk:20},next:"n_06"},{id:"opt_public_beg",text:"（发一条公开求饶：放过我家人，冲我来）",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-15,opinion:-25,composure:-15,risk:15},next:"n_06"},{id:"opt_breath_l17",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_05",oncePerNode:!0}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:4,script:`沈骊来的时候你在楼道抽烟。已经抽到第七根。

她站了一会儿，没说话。然后把手里的东西递过来——
一份报案回执，一份公证书，还有一杯豆浆。

「回执我替你交了。」
「公证做完了，全网三百一十七个转发节点，全部固定。」

她顿了很久。

「陈屿。」
「这不是你的错。这一句我只说一次。」`,next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"豆浆还是热的。你的手抖得握不住。",timer:8,timeoutOption:"opt_break_l17",options:[{id:"opt_keep_going",text:"（喝了一口。谢谢。下一步做什么）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:25,risk:-10},next:"n_08"},{id:"opt_ask_family",text:"我爸妈那边先安排好，然后我们再谈案子。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:20,risk:-10},next:"n_08"},{id:"opt_break_l17",text:"（蹲下去，说不出话）",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-10,opinion:5,composure:-15,risk:10},next:"n_08"},{id:"opt_lash_out",text:"有什么用？他们已经赢了。",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-15,opinion:-10,composure:-20,risk:15},next:"n_08"}],impulsePool:[{id:"imp_rage_l17",text:"（把那个文档转发到自己所有群，配文：来吧）",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-25,opinion:-25,composure:-5,risk:15},next:"n_08"},{id:"imp_go_find_l17",text:"（按扒到的地址找过去）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:5,speaker:"crowd",emotion:"neutral",text:"（新话题上来了。有人在群里说：这事好像有反转？——然后没人接话）",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"热度在掉。掉得比涨的时候慢很多。",timer:8,timeoutOption:"opt_chase_l17",options:[{id:"opt_silent_build",text:"（不发声。把三百一十七个节点逐个整理成证据清单）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_10"},{id:"opt_platform_l17",text:"（向平台批量举报，同时向网信部门投诉）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_10"},{id:"opt_chase_l17",text:"（挨个私信转发的人，要求删除）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:-10,opinion:-20,composure:-20,risk:15},next:"n_10"},{id:"opt_give_up_l17",text:"（卸载了所有 App）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:5,risk:20},next:"n_10"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`两个月后，公安立案。侵犯公民个人信息。

第一个被找到的是个大二学生，他说他只是转发。
第二个是个自媒体，粉丝八千。
第三个——

第三个的服务器日志指向那家 MCN 的内容中台。
和 L16 那个投稿邮箱，是同一台机器。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「学生那个，家长找过来了。孩子今年十九。」",timer:8,timeoutOption:"opt_all_out",options:[{id:"opt_focus_source",text:"转发的从轻。我要的是最上面那个。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-15},next:"n_12"},{id:"opt_measured",text:"（学生这个撤诉，其余的继续）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:25,composure:10,risk:-10},next:"n_12"},{id:"opt_all_out",text:"一个都不放过。三百一十七个，一个一个来。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:10,opinion:-25,composure:-10,risk:20},next:"n_12"},{id:"opt_drop_all",text:"都撤了吧。我不想再看见这些名字。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-5,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`你爸在你家住了三个月。走的那天他把阳台的花都浇了一遍。

下楼的时候他说：「那个电话，我后来接了几个。」
「有个姑娘骂到一半哭了，说对不起，她不知道是真是假。」

「小屿，」他说，「你别恨她们。」
「你就把这事办完。」`,next:"__END__"}],Hl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你找过去了",script:`你按扒到的地址找过去，砸了门，打了人。

非法侵入住宅、故意伤害。刑事拘留。

那个人确实转发过那份文档。
他也确实只是转发过。

第二天新的文档出来了，这一次配了你被带走的照片。
标题是：《我们就说他有暴力倾向》。

你爸妈的电话还是没停。
只是这一次，来电的人心里更踏实了。`,unlock:"card_L17_F"},{id:"e_s_rank",rank:"S",condition:"dOpinion>=40 && risk<=30 && composure>=20",title:"名场面 · 一杯豆浆",script:`沈骊在楼道找到你的时候，你已经抽到第七根。

她没说「别难过」，也没说「会过去的」。
她递过来三样东西：报案回执、公证书，和一杯豆浆。

「回执我替你交了。」
「公证做完了。全网三百一十七个转发节点，全部固定。」

然后她站了很久，很久。

「陈屿。」
「这不是你的错。这一句我只说一次。」

——

你把豆浆喝了。手还在抖，但你喝完了。

「下一步做什么。」

「先把叔叔阿姨接过来。」她说，「案子跑不了。」

——

两个月后立案。
第一个找到的是大二学生，第二个是八千粉的自媒体。
第三个的服务器日志，指向那家 MCN 的内容中台。

和那封投稿邮件，是同一台机器。

——

「学生那个，家长找来了。孩子今年十九。」

「转发的从轻。」你说。
「我要的是最上面那个。」

沈骊看了你一眼，什么也没说，在名单上划了一道。

——

你爸在你家住了三个月。走那天他把阳台的花都浇了一遍。

下楼的时候他说：「那个电话，我后来接了几个。」
「有个姑娘骂到一半哭了，说对不起，她不知道是真是假。」

「小屿，你别恨她们。」
「你就把这事办完。」`,unlock:"card_L17_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=10",title:"干净脱身",script:`报案了，公证做了，父母接过来住了一段。
热度两周后掉下去了。

案子办了大半年，处理了三个人。最上面那个没查到。

你爸妈回去以后换了号码。
新号码你妈只给了七个人。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`证据固定得晚了，好些转发已经删了，链条断在中间。

最后处理了一个自媒体，罚款三千。

你爸的手机号到现在还偶尔有陌生来电。
他不接，但也不肯换号——他说万一你有急事找不到我。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`你把所有 App 卸了，手机调成静音，在家躺了十一天。

热度自己下去了。什么也没查，什么也没处理。

三个月后你搬了家。
又过了半年，公司调你去了外地分部。

你没问是不是因为那件事。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 你也扒了他",script:`你花了三个小时，扒到了他的住址、单位、他老婆的名字。
然后你发出去了。

那一刻很爽。真的很爽。

第二天他报警了。侵犯公民个人信息，你被立案。

案卷里现在有两份文档：他扒你的，你扒他的。
办案民警把两份并排放着，问你有什么要说的。

你说他先扒的我。
民警点点头，在笔录上记了一行。
然后翻页，继续问下一个问题。

从这一页开始，你们是同一类案由。`,unlock:"card_L17_F"}],of={id:El,title:Cl,act:Il,initState:$l,cast:Ml,entryNode:Nl,lawyerCard:Dl,satireTargets:Fl,nodes:Bl,endings:Hl},sf=Object.freeze(Object.defineProperty({__proto__:null,act:Il,cast:Ml,default:of,endings:Hl,entryNode:Nl,id:El,initState:$l,lawyerCard:Dl,nodes:Bl,satireTargets:Fl,title:Cl},Symbol.toStringTag,{value:"Module"})),jl="L18",Gl="第18关 · 直播间的生意",Ul=4,Vl={evidence:55,opinion:30,composure:38,risk:35},Yl=["hero","npc_l18_streamer","shen_li","crowd"],Kl="n_01",ql="card_law_L18",Wl=["T4"],zl=[{id:"n_01",type:"cutscene",pressure:2,script:`一个百万粉的账号发来连线邀请。
主题写着：《正面对话：被网暴的他，和为她们说话的我》。

沈骊说别去。
然后她说：「但你要是去，我们先把要问的问题写出来。」`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l18_streamer",emotion:"warm_pro",text:"（开播）欢迎陈先生。我们今天不吵架，我们讲事实，好吗？",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"在线四万七。弹幕已经刷满了。她笑得很真诚。",timer:8,timeoutOption:"opt_defend_l18",options:[{id:"opt_agree_terms",text:"好。那我们先约定：讲事实的时候，材料要能查证。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-10},next:"n_04"},{id:"opt_open_materials",text:"（把三份书面结论的编号，直接念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_defend_l18",text:"我先说明一下，那个视频是剪辑的……",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-15,opinion:-20,composure:-15,risk:15},next:"n_04"},{id:"opt_attack_l18",text:"你敢不敢先说说你一个月靠这个赚多少？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:4,speaker:"npc_l18_streamer",emotion:"pivot",text:"可是陈先生，这么多女性都感到被冒犯，这个感受总不会是假的吧？",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"弹幕瞬间刷成一片。这个问题她问过很多次，答案她也准备好了。",timer:8,timeoutOption:"opt_flustered_l18",options:[{id:"opt_two_things",text:"感受不假。我从没否认过。但处理指控要靠事实——这两件事不冲突。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:25,opinion:30,composure:10,risk:-5},next:"n_06"},{id:"opt_ask_which",text:"「这么多女性」是多少位？她们各自被冒犯的是哪一件事？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_flustered_l18",text:"我……我不是这个意思。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-20,composure:-15,risk:15},next:"n_06"},{id:"opt_dismiss_l18",text:"感受不能当证据。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l18_streamer",emotion:"pro",text:"我们不纠结细节。我想聊的是这个现象背后的结构性问题。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她转向大屏，准备切下一个话题。运营在给她比手势。",timer:8,timeoutOption:"opt_follow_l18",options:[{id:"opt_hold_topic",text:"细节就是这件事本身。您先把刚才那个数字说完，我们再聊结构。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_08"},{id:"opt_data_l18",text:"（放出两组数据：剪辑版两千一百万，完整版四十七万）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_08"},{id:"opt_follow_l18",text:"（跟着她聊结构性问题）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-15,composure:-10,risk:15},next:"n_08"},{id:"opt_rage_l18",text:"别装了。你就是靠这个吃饭的。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-15,risk:15},next:"n_08"},{id:"opt_ally_l18",text:"（连线前拨号）沈律师，问题我拟好了，您看一下。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l18",text:"你他妈才是那个吃人血馒头的。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-20,composure:-10,risk:20},next:"n_08"},{id:"imp_smash_l18",text:"（摔了耳机，掀翻桌上的补光灯）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:5,script:`你把最后一张图放上去了。

不是数据，是一张工商信息截图。

某某文化传媒有限公司，法人代表贺松。
下面列着它备案的十七个账号。

第三个，是她。
第十一个，是那个发三十秒剪辑的号。
第十四个，账号名带着「男性权益」四个字。`,next:"n_09"},{id:"n_09",type:"choice",pressure:5,prompt:"直播间安静了大概两秒。这两秒里，在线人数涨到十一万。",timer:8,timeoutOption:"opt_gloat_l18",options:[{id:"opt_ask_calmly",text:"我不问您立场。我只问一句：这三个号，是不是一家公司的？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_10"},{id:"opt_state_fact",text:"（不提问。只念了一遍那十七个账号的名字）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:25,composure:5,risk:-10},next:"n_10"},{id:"opt_gloat_l18",text:"怎么不说话了？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-30,composure:-5,risk:20},next:"n_10"},{id:"opt_accuse_l18",text:"你就是贺松养的一条狗。",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-20,composure:-10,risk:20},next:"n_10"},{id:"opt_breath_l18",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_smash_l18b",text:"（一脚踹翻摄像机支架）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:3,script:`连线断了。

她的画面变成一片蓝，然后是「主播已离开」。

直播间还开着四十秒，弹幕一条一条往上滚。
然后整个房间被关闭了。

你的手机开始震，一直震。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊在耳返里说：「录屏存了。现在，你什么都别发。」",timer:8,timeoutOption:"opt_post_l18",options:[{id:"opt_stay_silent_l18",text:"（关掉手机。一个字不发）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:15,risk:-15},next:"n_12"},{id:"opt_submit_l18",text:"（把录屏和工商信息一起提交给平台和网信部门）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_12"},{id:"opt_post_l18",text:"（发一条：她挂我电话了）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:-15,opinion:-25,composure:5,risk:20},next:"n_12"},{id:"opt_victory_lap",text:"（连开三个直播复盘）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`第二天她发了条道歉声明，说自己「对合作方背景了解不足」。
三天后账号改名了，赛道换成了美妆。

沈骊把那十七个账号的清单打印出来，用红笔划掉了第三个。

「还有十六个。」她说。
「不过没关系。这十七个后面只有一个人。」`,next:"__END__"}],Xl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 直播事故",script:`你在连线里失控了，摔了东西，骂了整整四十秒。

那四十秒被剪出来，当天播放六千万。
标题是《他终于露出了真面目》。

工商信息那张图，在完整录像的第三十一分钟。
没人看到那里。`,unlock:"card_L18_F"},{id:"e_s_rank",rank:"S",condition:"dOpinion>=40 && evidence>=75 && risk<=30 && composure>=15",title:"名场面 · 十七个号",script:`「这么多女性都感到被冒犯，这个感受总不会是假的吧？」

「感受不假。我从没否认过。」
「但处理指控要靠事实。这两件事不冲突。」

她愣了半秒。这个答案不在她的稿子里。

「那我们不纠结细节，聊聊结构性问题——」

「细节就是这件事本身。」你说。
「您先把刚才那个数字说完。多少位女性，各自被冒犯的是哪一件事。」
「说完我们再聊结构。」

——

然后你放了最后一张图。

不是监控，不是结论书，是一张工商信息截图。
某某文化传媒有限公司，法人代表贺松。下面十七个备案账号。

第三个，是她。
第十一个，是发那条三十秒剪辑的号。
第十四个，账号名里带着「男性权益」四个字。

直播间安静了两秒。这两秒里在线涨到十一万。

「我不问您立场。」你说。
「我只问一句：这三个号，是不是一家公司的？」

——

连线断了。

蓝屏。「主播已离开」。四十秒后房间关闭。

沈骊在耳返里说：「录屏存了。现在，你什么都别发。」

你关掉了手机。

——

第二天她发了道歉声明，说「对合作方背景了解不足」。
三天后改名换赛道，做美妆去了。

沈骊把那份清单打印出来，红笔划掉第三个。

「还有十六个。」
「不过没关系。这十七个后面，只有一个人。」`,unlock:"card_L18_S"},{id:"e_a_rank",rank:"A",condition:"risk<=40 && evidence>=60 && composure>=5",title:"干净脱身",script:`连线聊完了，没吵起来。你把材料摆完，她把话题岔开，两个小时过去。

没有反转，也没有翻车。评论区两边都有人骂。

那十七个账号的事，你没提。当时觉得时机不对。
后来沈骊说：时机是不会对的，只有敢不敢。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`你被她带着走了大半场，最后那张图放出来的时候，在线只剩八千。

她说了句「这个我们会去核实」，然后到点下播。

切片流出来的是你结巴的那两分钟。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`整场都在解释。解释剪辑，解释监控，解释那半句话。

解释了两小时，弹幕最多的一条是：怎么这么多理由。

下播以后你把录屏看了一遍。
你说的每一句都是真的，加起来却像在狡辩。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 那句人血馒头",script:`「你他妈才是那个吃人血馒头的。」

这一句被切出来，配上她当时的表情。
播放四千三百万。

她第二天发了条视频，说自己「第一次在直播里被这样辱骂」，
哭了大概十五秒。涨粉六十万。

那十七个账号的工商信息，你也发了。
转发一千二。

这就是这门生意的全部：
真相跑不过一句脏话。`,unlock:"card_L18_F"}],rf={id:jl,title:Gl,act:Ul,initState:Vl,cast:Yl,entryNode:Kl,lawyerCard:ql,satireTargets:Wl,nodes:zl,endings:Xl},cf=Object.freeze(Object.defineProperty({__proto__:null,act:Ul,cast:Yl,default:rf,endings:Xl,entryNode:Kl,id:jl,initState:Vl,lawyerCard:ql,nodes:zl,satireTargets:Wl,title:Gl},Symbol.toStringTag,{value:"Module"})),Jl="L19",Zl="第19关 · 各执一词",Ql=4,ep={evidence:60,opinion:45,composure:42,risk:30},tp=["hero","npc_l19_moderator","npc_l19_pr","shen_li"],np="n_01",ip="card_law_L19",op=["T5"],sp=[{id:"n_01",type:"cutscene",pressure:2,script:`平台申诉结果：不予处理。

理由一行字：「双方各执一词，暂无法认定。」

你提交的是三份盖章的书面结论、一份公证书、一份立案回执。
对方提交的是零。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l19_moderator",emotion:"scripted",text:"（客服）您好，我们已按规则审核。如有异议可以再次提交哦～",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"「再次提交」的入口，指向刚才那个已经驳回的表单。",timer:8,timeoutOption:"opt_resubmit",options:[{id:"opt_ask_rule_l19",text:"请告知本次适用的具体规则条款，以及「各执一词」的认定标准。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_04"},{id:"opt_escalate",text:"我要求上级复核，并请给出书面答复。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_resubmit",text:"（又提交了一次，附上同样的材料）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15},next:"n_04"},{id:"opt_rage_l19",text:"你们这审核就是走过场吧？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l19_pr",emotion:"smooth",text:"（公关负责人）陈先生，我们理解您。但平台不是裁判机构，我们只能中立。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"「中立」这个词他说了三遍。",timer:8,timeoutOption:"opt_accept_l19",options:[{id:"opt_define_neutral",text:"一方有六份盖章材料，一方零份。判成平手不叫中立，叫选边。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:25,opinion:30,composure:10,risk:-5},next:"n_06"},{id:"opt_regulator",text:"既然平台不裁判，那我向网信部门投诉，请监管来看这个流程。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,risk:-10},next:"n_06"},{id:"opt_accept_l19",text:"那……我还能怎么办呢。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_06"},{id:"opt_threaten_l19",text:"信不信我把你们也告了。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_06"},{id:"opt_ally_l19",text:"（拨号）沈律师，平台驳回了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l19_pr",emotion:"stuck",text:"……这个说法，我需要向上反馈一下。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"沈骊在旁边把笔记本打开了，一直在记。",timer:8,timeoutOption:"opt_wait_l19",options:[{id:"opt_written_all",text:"麻烦把今天的沟通形成书面纪要，双方签字。我这边也记了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_timeline",text:"请给一个明确的答复时限。到期没有答复，我按无答复处理。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_08"},{id:"opt_wait_l19",text:"（等他们反馈）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:15},next:"n_08"},{id:"opt_media_l19",text:"（把整个申诉过程发到网上）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:20},next:"n_08"},{id:"opt_breath_l19",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l19",text:"你们就是等我耗死。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l19",text:"（把材料摔在会议桌上，推翻椅子走人）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:3,script:`网信部门的约谈函发过去了第九天，平台复核结果出来了。

原处理结果撤销。侵权内容全部下架。
涉事账号矩阵中的十一个，永久封禁。

附件里有一份《社区规则修订说明》。
第 4.3 条改了：
「当一方提供司法机关、行政机关或具有资质的第三方出具的书面结论，
　而另一方未能提供相应材料时，不适用『各执一词』条款。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:2,prompt:"公关负责人又打来电话，说想请你吃个饭，聊聊「后续合作」。",timer:8,timeoutOption:"opt_dinner",options:[{id:"opt_decline_clean",text:"不用了。规则改了就行，这比吃饭有用。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:30,composure:15,risk:-10},next:"n_10"},{id:"opt_ask_public",text:"不吃饭。但这条修订，能不能公开挂出来？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_10"},{id:"opt_dinner",text:"（去了。席间他敬了三杯酒，什么也没谈成）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-5,risk:15},next:"n_10"},{id:"opt_demand_comp",text:"吃饭可以。先谈赔偿。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_10"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`第 4.3 条挂在了社区规则公示页，生效日期是下个月一号。

沈骊把那一页截图，存进案卷。

「这一条，」她说，「以后每一个拿着结论去申诉的人都用得上。」
「他们不会知道是谁改的。」

「不用知道。」你说。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"封禁名单出来了。十一个号，都在那份十七个的清单上。",timer:8,timeoutOption:"opt_stop_here",options:[{id:"opt_go_source",text:"还剩六个。而且这十七个后面只有一个人。走到底。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_12"},{id:"opt_prepare_suit",text:"（把全部材料整理成一份，交给沈骊）起诉吧。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-10},next:"n_12"},{id:"opt_stop_here",text:"到这儿吧。已经够了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-5,risk:20},next:"n_12"},{id:"opt_celebrate",text:"（发了条庆祝的动态）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-25,risk:15},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`起诉状递上去那天，被告栏里第一次出现了三个字。

贺　松。

沈骊把回执递给你：「立案了。」
「开庭大概在三个月后。」`,next:"__END__"}],rp=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你把材料摔了，推翻了椅子，一个工作人员的手被划伤。

平台以「投诉人存在过激行为」为由中止申诉流程。
寻衅滋事，行政拘留五日。

那六份盖章材料还在他们的系统里。
状态永远停在：处理中。`,unlock:"card_L19_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=25 && composure>=25",title:"名场面 · 第 4.3 条",script:`「平台不是裁判机构，我们只能中立。」

「一方有六份盖章材料。」你说。
「另一方零份。」
「判成平手，不叫中立，叫选边。」

他说：「……这个说法，我需要向上反馈一下。」

「可以。」你说。
「麻烦把今天的沟通形成书面纪要，双方签字。我这边也记了。」

——

网信部门约谈函第九天，复核结果下来。
原处理撤销，侵权内容全部下架，十一个账号永久封禁。

附件里有一份《社区规则修订说明》。

第 4.3 条：
「当一方提供司法机关、行政机关或具有资质的第三方出具的书面结论，
　而另一方未能提供相应材料时，不适用『各执一词』条款。」

——

他们请你吃饭，聊「后续合作」。

「不用了。」你说。
「规则改了就行，这比吃饭有用。」

「不过有一件事——这条修订，能不能公开挂出来？」

——

生效日期下个月一号。

沈骊把那一页截图存进案卷。
「以后每一个拿着结论去申诉的人都用得上。」
「他们不会知道是谁改的。」

「不用知道。」

——

封禁名单十一个号，全在那份十七个的清单上。

还剩六个。

起诉状递上去那天，被告栏里第一次出现了三个字。
贺　松。`,unlock:"card_L19_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=10",title:"干净脱身",script:`复核撤销了原处理，内容下架，封了几个号。

规则没改。客服说这个属于「个案处理」。

三个月后有人在别的事上遇到同样的驳回理由，发帖问怎么办。
你回了一条很长的，把流程写清楚了。
那条回复后来被很多人收藏。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`耗了四个月，走了七轮申诉。最后下架了三条，封了一个号。

没有书面结论，没有规则修订。
客服最后一条回复还是那句：如有异议可以再次提交哦～

你把那个对话框关了，再没打开过。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`你又提交了一次，一模一样的材料。
三天后驳回，理由一模一样。

你提交了第三次。第四次。

系统提示：您本月的申诉次数已用完。`},{id:"e_f_rank",rank:"F",condition:"true",title:"翻车 · 发出去的申诉记录",script:`你把整个申诉过程发到了网上，包括客服的对话截图。

平台以「泄露平台内部沟通内容」为由，判定你违反用户协议。
账号永久封禁。

那六份盖章材料还在你手上。
只是现在，你没有地方提交它们了。`,unlock:"card_L19_F"}],af={id:Jl,title:Zl,act:Ql,initState:ep,cast:tp,entryNode:np,lawyerCard:ip,satireTargets:op,nodes:sp,endings:rp},lf=Object.freeze(Object.defineProperty({__proto__:null,act:Ql,cast:tp,default:af,endings:rp,entryNode:np,id:Jl,initState:ep,lawyerCard:ip,nodes:sp,satireTargets:op,title:Zl},Symbol.toStringTag,{value:"Module"})),cp="L20",ap="第20关 · 对簿",lp=4,pp={evidence:60,opinion:50,composure:60,risk:30},up=["hero","he_song","zhou_you","shen_li","crowd"],_p="n_01",dp="card_law_L20",fp=["T2","T4","T5"],gp=[{id:"n_01",type:"cutscene",pressure:3,script:`开庭。第三法庭，旁听席坐满了。

名誉权纠纷，一审。原告陈屿，被告某某文化传媒有限公司及贺松。

沈骊的证据目录一共四十七页。
每一页对应你这两年里的某一天。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:4,speaker:"he_song",emotion:"relaxed",text:"（庭前休息，走廊上）陈先生。我看过你所有材料。做得挺好。",next:"n_03"},{id:"n_03",type:"choice",pressure:4,prompt:"他四十一岁，穿得很随意，手里端着自动贩卖机的咖啡。",timer:8,timeoutOption:"opt_engage_he",options:[{id:"opt_no_talk",text:"（点了下头，走开。什么也没说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:15,risk:-10},next:"n_04"},{id:"opt_record_he",text:"（打开录音）您要说什么，庭上说。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_engage_he",text:"你到底图什么？",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-15,risk:15},next:"n_04"},{id:"opt_taunt_he",text:"今天就是你的日子了。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:4,script:`举证阶段。沈骊一页一页地念，念了四十分钟。

地铁监控。健身房 20:09 和 20:31。团建原片 02:33。
派出所情况说明三份。健身房书面结论一份。公司调查结论一份。
劳动监察整改通知一份。财产保全裁定一份。司法鉴定报告一份。
人身安全保护令复议撤销裁定一份。刑事立案通知书两份。
证据保全公证书两份。平台复核决定与规则修订说明各一份。

每一份都有编号，有日期，有章。

审判长问被告方：「对以上证据有无异议？」`,next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"被告席上，贺松的律师翻了很久材料。贺松没看材料，他在看你。",timer:8,timeoutOption:"opt_speech_l20",options:[{id:"opt_chain",text:"（只补一句：请法庭注意这十七个账号的备案主体，是同一个）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_silent_l20",text:"（不补充。材料已经说完了）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:25,composure:15,risk:-10},next:"n_06"},{id:"opt_speech_l20",text:"（站起来，讲了五分钟这两年有多难）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-20,opinion:-15,composure:-10,risk:15},next:"n_06"},{id:"opt_point_l20",text:"（指着被告席）就是他。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_06"},{id:"opt_ally_l20",text:"（庭前拨号）沈律师，他刚才在走廊跟我说话。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:5,speaker:"he_song",emotion:"amused",text:"（举手）审判长，我能说两句吗？我不辩解，我就说说这门生意。",next:"n_07"},{id:"n_07",type:"cutscene",pressure:5,script:`「对立是最便宜的流量。」

「一条剪辑版，成本两百块，两千一百万播放。
　一条完整版，成本是两年，四十七万播放。
　这个账，谁都会算。」

「我不恨女人，也不恨男人。」
「我恨的是没人吵架的那个月。」

他转过头看你，笑了一下。

「陈先生，你以为你在跟她们打官司？」
「第三个号是我签的。第十一个是我签的。」
「第十四个——那个叫『男性权益』的号，也是我签的。」

「你们骂了两年。」
「广告位是我卖的。」`,next:"n_08"},{id:"n_08",type:"choice",pressure:5,prompt:"旁听席炸了。法槌敲了三下。你的手在桌子底下攥着。",timer:8,timeoutOption:"opt_rage_l20",options:[{id:"opt_ask_record",text:"审判长，我请求把被告刚才这段话，完整记入庭审笔录。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_09"},{id:"opt_nothing_l20",text:"（什么也没说。他自己说完了）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:30,composure:10,risk:-10},next:"n_09"},{id:"opt_rage_l20",text:"你他妈把人当什么了？",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-15,composure:-20,risk:20},next:"n_09"},{id:"opt_bitter_l20",text:"那这两年算什么？",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-10,composure:-20,risk:15},next:"n_09"},{id:"opt_breath_l20",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_08",oncePerNode:!0}],impulsePool:[{id:"imp_charge_l20",text:"（越过栏杆冲向被告席）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"cutscene",pressure:4,script:`证人出庭。周攸。

她穿着工牌照上那件衬衫，站得很直，手在抖。

「我是原告的同事。团建那天我在场。」
「后来举报的事、署名的事，我都在场。」

她停了一下，转向被告席。

「我想说一句跟案子没关系的话，说完就完。」

「我支持性别平等。」
「正因为我支持，我才不能看着你拿它当讹人的工具。」
「你每这么干一次，真正需要它的人就难一分。」

她看着贺松。

「你卖的不是广告位。」
「你卖的是以后每一个真的受了委屈的女人，说话时别人脸上那半秒的迟疑。」`,next:"n_10"},{id:"n_10",type:"choice",pressure:4,prompt:"周攸说完就坐下了。审判长问原告：「还有什么要陈述的？」",timer:8,timeoutOption:"opt_long_speech",options:[{id:"opt_end_clean",text:"没有了。证据都在卷里。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:15,risk:-15},next:"n_11"},{id:"opt_add_ask",text:"只补一个请求：判决书公开，不要匿名化处理。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_11"},{id:"opt_long_speech",text:"（又讲了十分钟）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-20,opinion:-20,composure:-10,risk:15},next:"n_11"},{id:"opt_demand_max",text:"我要求顶格赔偿，一分都不能少。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_11"}],impulsePool:[]},{id:"n_11",type:"cutscene",pressure:2,script:`宣判在三周后。

被告构成名誉权侵权，赔礼道歉、消除影响、赔偿损失。
判决书全文公开，不作匿名化处理。

庭审笔录里，贺松那段话一字未删。

第七页有一行：
「被告当庭陈述其同时运营立场对立之账号矩阵并以此获利，
　该陈述与在案证据相互印证，本院予以确认。」

三个月后，市场监管部门以这份判决为线索，立了另一个案子。
那个案子不归你管了。`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"沈骊把判决书递给你：「拿好。这是你两年换来的。」",timer:8,timeoutOption:"opt_celebrate_l20",options:[{id:"opt_thanks_quiet",text:"（接过来，折好，放进内袋）谢谢。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:20,risk:-15},next:"n_13"},{id:"opt_ask_zhou",text:"（先去找周攸）刚才那段，你准备了多久？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:10,opinion:30,composure:20,risk:-10},next:"n_13"},{id:"opt_celebrate_l20",text:"（把判决书拍照发了出去）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:-15,opinion:-25,composure:5,risk:20},next:"n_13"},{id:"opt_hollow_l20",text:"（没接）赢了又怎么样。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-20,risk:15},next:"n_13"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`走出法院大门，下午四点二十。
台阶上有风。

手机震了一下。推送。

新的热搜，新的话题，新的两方，新的一群人在对骂。

你看了两秒。

划掉了。`,next:"__END__"}],mp=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 最后一步",script:`你越过栏杆冲了过去。法警拦下你的时候，你已经碰到了他。

扰乱法庭秩序。司法拘留十五日。
案件延期审理。

三个月后重新开庭，你的诉讼请求部分支持。
判决书上没有那段陈述——因为那天他没说完。

他后来在一个访谈里提到这件事，笑着说：
「有些人啊，你不用赢他，你只要等他自己走过来。」

两年，四十七页证据，最后差那一步。

那一步是你自己迈的。`,unlock:"card_L20_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=75 && risk<=20 && opinion>=60 && composure>=55",title:"真结局 · 收网",script:`「审判长，我请求把被告刚才这段话，完整记入庭审笔录。」

他自己说完了。你一个字都不用加。

——

周攸站起来的时候手在抖，但她站得很直。

「我支持性别平等。」
「正因为我支持，我才不能看着你拿它当讹人的工具。」
「你每这么干一次，真正需要它的人就难一分。」

「你卖的不是广告位。」
「你卖的是以后每一个真的受了委屈的女人，说话时别人脸上那半秒的迟疑。」

——

判决：侵权成立。赔礼道歉、消除影响、赔偿损失。
判决书全文公开，不作匿名化。

庭审笔录第七页：
「被告当庭陈述其同时运营立场对立之账号矩阵并以此获利，
　该陈述与在案证据相互印证，本院予以确认。」

三个月后，市场监管部门以这份判决为线索，立了另一个案子。
那个案子不归你管了。

——

出法院之前，你去找了周攸。
「刚才那段，你准备了多久？」

她想了想：「两年吧。」
「从我问你那句『你到底说没说过』那天开始。」

——

沈骊在台阶下等你，手里两杯豆浆。
「拿好。这是你两年换来的。」

你把判决书折好，放进内袋。

「沈律师。」
「嗯？」
「值吗。」

她喝了口豆浆，没马上回答。

「你记得健身房那个结果吗。」她说。
「你当时要那张纸，说是为了下次杠铃压下来的时候还能过去。」

「今天这张纸也一样。」
「不是为了你。」

——

下午四点二十。台阶上有风。

手机震了一下。推送。
新的热搜，新的话题，新的两方，新的一群人在对骂。

你看了两秒。

划掉了。`,unlock:"card_L20_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=25",title:"常规胜诉",script:`侵权成立，赔礼道歉，赔偿八万六。

判决书做了匿名化处理。贺松那段陈述没进笔录——
他的律师中途打断了他，他也就顺势停了。

公司注销了。三个月后一家新公司成立，法人代表是另一个名字。
经营范围一模一样。

沈骊看着工商信息，说了句：「换个马甲而已。」

——

下午四点二十。台阶上有风。

手机震了一下。推送。
新的热搜，新的话题，新的两方，新的一群人在对骂。

你看了两秒。

划掉了。`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`部分支持。赔偿两万三，道歉声明发在账号的第七条，挂了二十四小时。

有几份材料没被采纳——不是因为假，是因为当时没做公证、没盖章、
或者当时你签了字。

沈骊把驳回的那几页抽出来放在一边，没说话。
你也没问。你知道那都是哪几天。

——

下午四点二十。台阶上有风。

手机震了一下。推送。
新的热搜，新的话题，新的两方，新的一群人在对骂。

你看了两秒。

划掉了。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"调解结案",script:`开庭前一周，对方提出调解。赔一万五，删帖，不道歉，不担责。

沈骊说：「你可以不接。」
你说我知道。

然后你接了。因为你太累了。

调解书上有一行：双方无其他争议。
签完字，这两年就正式结束了。

——

下午四点二十。台阶上有风。

手机震了一下。推送。
新的热搜，新的话题，新的两方，新的一群人在对骂。

你看了两秒。

划掉了。`},{id:"e_f_rank",rank:"F",condition:"true",title:"败诉",script:`驳回全部诉讼请求。

理由写得很客气：现有证据不足以证明被告实施了侵权行为。

你这两年做过的每一件事都是真的。
只是有些没录音，有些删了，有些私了了，有些签了字。

每一次你都觉得那是小事。
判决书把它们加在一起，得出的结论是：不足以证明。

贺松出法庭的时候朝你点了下头。很客气，没有嘲讽。
对他来说这真的只是工作。

——

下午四点二十。台阶上有风。

手机震了一下。推送。
新的热搜，新的话题，新的两方，新的一群人在对骂。

你看了两秒。

划掉了。`,unlock:"card_L20_F"}],pf={id:cp,title:ap,act:lp,initState:pp,cast:up,entryNode:_p,lawyerCard:dp,satireTargets:fp,nodes:gp,endings:mp},uf=Object.freeze(Object.defineProperty({__proto__:null,act:lp,cast:up,default:pf,endings:mp,entryNode:_p,id:cp,initState:pp,lawyerCard:dp,nodes:gp,satireTargets:fp,title:ap},Symbol.toStringTag,{value:"Module"})),_f=Object.assign({"../../content/levels/L01.json":Pd,"../../content/levels/L02.json":wd,"../../content/levels/L03.json":Sd,"../../content/levels/L04.json":Cd,"../../content/levels/L05.json":$d,"../../content/levels/L06.json":Nd,"../../content/levels/L07.json":Fd,"../../content/levels/L08.json":Hd,"../../content/levels/L09.json":Gd,"../../content/levels/L10.json":Vd,"../../content/levels/L11.json":Kd,"../../content/levels/L12.json":Wd,"../../content/levels/L13.json":Xd,"../../content/levels/L14.json":Zd,"../../content/levels/L15.json":ef,"../../content/levels/L16.json":nf,"../../content/levels/L17.json":sf,"../../content/levels/L18.json":cf,"../../content/levels/L19.json":lf,"../../content/levels/L20.json":uf}),yn=Object.values(_f).map(e=>e.default).sort((e,t)=>e.id.localeCompare(t.id)),df="破局实录",ff="开发预览 · M3 前置切片",gf={evidence:"证据",opinion:"舆论",composure:"情绪",risk:"风险"},mf={hero:"陈屿",shen_li:"沈骊",officer_lin:"林昭",zhou_you:"周攸",he_song:"贺松",crowd:"围观者",narrator:"",npc_l01_woman:"红衣女子",npc_l02_woman:"住户女子",npc_l03_woman:"路人女子",npc_l03_daughter:"念念",npc_l04_woman:"报警人",npc_l05_woman:"女子",npc_l05_manager:"值班经理",npc_l05_witness:"目击大哥",npc_l06_girlfriend:"前女友",npc_l06_mother:"她母亲",npc_l07_ex:"前女友",npc_l08_wife:"妻子",npc_l08_mother:"岳母",npc_l08_child:"孩子",npc_l09_wife:"妻子",npc_l09_cousin:"表哥",npc_l10_exwife:"前妻",npc_l10_child:"女儿",npc_l10_teacher:"班主任",npc_l11_hr:"HR",npc_l12_colleague:"同事",npc_l12_boss:"部门老板",npc_l13_hr:"HR",npc_l13_complainant:"投诉人",npc_l14_hr:"HR 总监",npc_l14_director:"总监",npc_l15_broker:"中介",npc_l15_hr:"HR",npc_l16_account:"商务",npc_l17_father:"父亲",npc_l17_hr:"HR",npc_l18_streamer:"主播",npc_l19_moderator:"版务",npc_l19_pr:"公关",npc_l20_judge:"审判长",npc_l20_lawyer:"对方律师"},vf={1:"第一幕 · 流量即真相",2:"第二幕 · 亲密关系的账",3:"第三幕 · 职场的规则",4:"第四幕 · 收网"},hf={tapToContinue:"点击继续",secondsUnit:"s",endingTitle:"结局",restart:"再玩一次",nextLevel:"下一关",levelSelect:"选择关卡",lockedLevel:"未解锁",rankNames:{S:"名场面",A:"稳住了",B:"有惊无险",C:"勉强收场",F:"翻车"},finalMeters:"最终仪表",disclaimer:"本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。",progressLabel:"进度",soundToggle:"M",studyIntro:"测试开始前\\n请输入现场编号（如 P01）\\n\\n然后独立游玩前五关\\n过程中不会有任何提示\\n做完自动出现数据回收",studyPidPlaceholder:"现场编号",studyStart:"开始",studyDoneTitle:"第一幕完成",studyCopy:"导出数据（JSON）",studySummaryHeader:"参与者 {p} · {n} 次游玩",studySummaryLine:"{lv}: {rank}「{title}」 用时{s}秒 抉择{c}次 重玩{r}",stanceLow:"稳住",stanceHigh:"顶回去",pileALabel:"这条",pileBLabel:"那条",pileListHint:"选一个",swipeHint:"左右滑动选择 · 点按也可以",settlePhase1:"结算中",settleStampS:"教科书式破局",settleStampA:"稳稳落地",settleStampB:"有惊无险",settleStampC:"伤敌自伤",settleStampF:"满盘皆输",settleMetersTitle:"终局面",settleReplay:"本关重打",settleNext:"下一关"},xf={L01:{label:"地铁三号线",hue:205,motif:"subway"},L02:{label:"住宅电梯",hue:220,motif:"elevator"},L03:{label:"商场中庭",hue:35,motif:"mall"},L04:{label:"深夜街道",hue:235,motif:"street"},L05:{label:"健身房",hue:15,motif:"gym"},L06:{label:"两家饭桌",hue:28,motif:"table"},L07:{label:"出租屋",hue:200,motif:"room"},L08:{label:"客厅",hue:40,motif:"room"},L09:{label:"民政局外",hue:210,motif:"office"},L10:{label:"学校门口",hue:45,motif:"street"},L11:{label:"面试间",hue:215,motif:"office"},L12:{label:"开放工位",hue:210,motif:"office"},L13:{label:"会议室",hue:220,motif:"office"},L14:{label:"总监办公室",hue:225,motif:"office"},L15:{label:"写字楼楼下",hue:200,motif:"street"},L16:{label:"剪辑室",hue:260,motif:"studio"},L17:{label:"家中",hue:30,motif:"room"},L18:{label:"直播间后台",hue:320,motif:"studio"},L19:{label:"平台工单页",hue:190,motif:"office"},L20:{label:"法院走廊",hue:210,motif:"court"}},kf={calm:["前排","吃瓜","蹲后续","录下来了","别急，等反转","让子弹飞一会儿"],tense:["什么情况？?","有人认识吗","这女的厉害","这男的稳住啊","报警了吗","快报警","别拍了先帮个忙啊","主播别切","全网都在看"],hot:["热搜第一预定","已经录屏了","传到群里了","反转了反转了","坐等打脸","这瓜保熟","直播间炸了","三分钟了还在吵"]},yf={hero:210,shen_li:280,officer_lin:195,zhou_you:150,he_song:350,npc_l01_woman:350,npc_l02_woman:330,npc_l03_woman:320,npc_l03_daughter:45,npc_l04_woman:160,npc_l05_woman:340,npc_l05_manager:30,npc_l05_witness:200,npc_l06_girlfriend:315,npc_l06_mother:280,npc_l07_ex:300,npc_l08_wife:330,npc_l08_mother:275,npc_l08_child:50,npc_l09_wife:320,npc_l09_cousin:25,npc_l10_exwife:310,npc_l10_child:55,npc_l10_teacher:165,npc_l11_hr:220,npc_l12_colleague:145,npc_l12_boss:25,npc_l13_hr:215,npc_l13_complainant:345,npc_l14_hr:225,npc_l14_director:20,npc_l15_broker:40,npc_l15_hr:218,npc_l16_account:35,npc_l17_father:205,npc_l17_hr:222,npc_l18_streamer:325,npc_l19_moderator:195,npc_l19_pr:285,crowd:0},Tf={appTitle:df,appSub:ff,meters:gf,speakerNames:mf,actNames:vf,ui:hf,scenes:xf,danmaku:kf,speakerHues:yf},le=Tf;function nn(e){const t=le.ui[e];return typeof t=="string"?t:""}function bf(e){return le.speakerNames[e]??e}function Ui(e){return le.speakerHues[e]??220}function vp(e){return le.scenes[e]??{label:"",hue:210,motif:"room"}}const Af={class:"hud"},Lf={class:"label"},Pf={class:"bar"},Of={class:"num"},wf=dt({__name:"MeterHud",props:{state:{}},setup(e){const t=e,n=W(()=>[{k:"evidence",kind:"good"},{k:"opinion",kind:"good"},{k:"composure",kind:"good"},{k:"risk",kind:"bad"}].map(({k:o,kind:s})=>({key:o,label:le.meters[o],value:t.state[o],kind:s})));return(i,o)=>(S(),B("div",Af,[(S(!0),B(ke,null,wn(n.value,s=>(S(),B("div",{key:s.key,class:ve(["meter",s.kind])},[y("span",Lf,N(s.label),1),y("div",Pf,[y("div",{class:"fill",style:Ne({width:s.value+"%"})},null,4)]),y("span",Of,N(s.value),1)],2))),128))]))}}),Tt=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},Rf=Tt(wf,[["__scopeId","data-v-faea1823"]]),Sf={key:0,class:"name"},Ef={class:"text"},Cf={class:"cue"},If=dt({__name:"StoryBox",props:{speaker:{},text:{},kind:{}},emits:["advance"],setup(e,{emit:t}){const n=e,i=t,o=p=>p===void 0?"":le.speakerNames[p]??p,s=p=>p===void 0?220:Ui(p),r=ce("");let c;function a(p){if(r.value="",c!==void 0&&clearInterval(c),typeof setInterval!="function"){r.value=p;return}let d=0;c=setInterval(()=>{d+=2,r.value=p.slice(0,d),d>=p.length&&c!==void 0&&(clearInterval(c),c=void 0)},28)}je(()=>n.text,p=>a(p),{immediate:!0}),Xt(()=>{c!==void 0&&clearInterval(c)});function u(){r.value.length<n.text.length?(r.value=n.text,c!==void 0&&(clearInterval(c),c=void 0)):i("advance")}return(p,d)=>(S(),B("div",{class:ve(["box",e.kind]),style:Ne({"--h":s(e.speaker)}),onClick:u},[e.kind==="dialogue"&&e.speaker?(S(),B("div",Sf,N(o(e.speaker)),1)):ye("",!0),y("p",Ef,N(r.value),1),y("div",Cf,N(O(le).ui.tapToContinue),1)],6))}}),rs=Tt(If,[["__scopeId","data-v-716d70d8"]]);function $f(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Mf(e){let t=e>>>0;return()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Nf(e){const t=[...e],n=Mf($f(t.map(i=>i.id).join("|")));for(let i=t.length-1;i>0;i--){const o=Math.floor(n()*(i+1)),s=t[i];t[i]=t[o],t[o]=s}return{left:t.filter((i,o)=>o%2===0),right:t.filter((i,o)=>o%2===1)}}const Df={class:"swipe"},Ff={key:0,class:"scene-prompt"},Bf={class:"duo"},Hf={class:"card under-card"},jf={key:0,class:"more"},Gf={class:"tip"},Uf={class:"card"},Vf={key:0,class:"more"},Yf={class:"tip"},Kf={class:"taps"},qf=["aria-label"],Wf=["aria-label"],zf={key:2,class:"list"},Xf={class:"list-head"},Jf={class:"list-hint"},Zf=["onClick"],Qf={key:3,class:"hint"},e0={key:4,class:"hint"},Oi=96,cs=10,wi=380,t0=dt({__name:"SwipeChoice",props:{options:{},timer:{},timeoutOptionId:{},prompt:{}},emits:["choose"],setup(e,{emit:t}){const n=e,i=t,o=W(()=>Nf(n.options)),s=W(()=>o.value.left),r=W(()=>o.value.right),c=ce(0),a=ce([]),u=ce("L"),p=W(()=>(u.value==="L"?s:r).value),d=W(()=>(u.value==="L"?r:s).value),v=W(()=>p.value[0]),k=W(()=>d.value[0]),H=W(()=>u.value==="L"?mt:At),A=W(()=>u.value==="L"?At:mt);function F(l){const _=(l==="L"?s:r).value;if(_.length===1&&_[0]!==void 0){i("choose",_[0].id);return}a.value=[..._],c.value=1}function G(l){i("choose",l.id)}function C(){c.value=0}function U(){I.value||(u.value=u.value==="L"?"R":"L",z.value=0)}const R=ce(n.timer);let V=ae();je(()=>n.options,()=>{gt(),c.value=0,a.value=[],u.value="L",z.value=0,V!==void 0&&clearInterval(V),V=ae(),R.value=n.timer});function ae(){if(typeof setInterval!="function")return;const l=setInterval(()=>{if(R.value-=1,R.value<=0){clearInterval(l),V===l&&(V=void 0);const _=n.options.find(f=>f.id===n.timeoutOptionId);_!==void 0&&i("choose",_.id)}},1e3);return l}Xt(()=>{gt(),V!==void 0&&clearInterval(V)});const z=ce(0),re=ce(!1),I=ce(!1),K=ce("");let ie=0,w=-1,X;const ge=W(()=>{if(I.value){const _=K.value==="L"?-1:1;return`transform: translate(${_*640}px, ${_*60}px) rotate(${_*32}deg); opacity: 0; transition: transform ${wi}ms cubic-bezier(.2,.7,.3,1), opacity ${wi}ms;`}const l=Math.max(-cs,Math.min(cs,z.value/14));return`transform: translateX(${z.value}px) rotate(${l}deg);`}),Fe=W(()=>!re.value&&!I.value),_e=W(()=>re.value&&z.value<-Oi),se=W(()=>re.value&&z.value>Oi);function Q(l){return l instanceof Element&&l.closest(".tap, .lane.under")!==null}function nt(l){var _,f;c.value!==0||I.value||Q(l.target)||(re.value=!0,ie=l.clientX,z.value=0,w=l.pointerId,(f=(_=l.currentTarget).setPointerCapture)==null||f.call(_,l.pointerId))}function Nt(l){!re.value||l.pointerId!==w||(z.value=l.clientX-ie)}function it(l){!re.value||l.pointerId!==w||(re.value=!1,Math.abs(z.value)>=Oi?Jt(z.value<0?"L":"R"):z.value=0)}function Ce(l){!re.value||l.pointerId!==w||(re.value=!1,z.value=0)}function Sn(){c.value===0&&!I.value&&Jt("L")}function _i(){c.value===0&&!I.value&&Jt("R")}function Jt(l){I.value||(I.value=!0,K.value=l,Dt(),X=window.setTimeout(()=>{X=void 0,I.value=!1,K.value="",z.value=0,F(l)},wi))}function gt(){X!==void 0&&(clearTimeout(X),X=void 0),I.value=!1,K.value="",z.value=0}function Dt(){V!==void 0&&(clearInterval(V),V=void 0)}const mt=le.ui.pileALabel??"",At=le.ui.pileBLabel??"",vt=le.ui.pileListHint??"",fo=le.ui.swipeHint??"";return(l,_)=>{var f,x;return S(),B("div",Df,[e.prompt?(S(),B("p",Ff,N(e.prompt),1)):ye("",!0),y("div",{class:ve(["timer",{panic:R.value<=4}])},[y("span",null,N(R.value),1)],2),c.value===0?(S(),B("div",{key:1,class:ve(["stage",{settled:Fe.value}]),onPointerdown:nt,onPointermove:Nt,onPointerup:it,onPointercancel:Ce},[y("div",Bf,[y("div",{class:"lane under",onClick:_[0]||(_[0]=Ut(g=>U(),["stop"]))},[y("div",Hf,[y("p",null,N((f=k.value)==null?void 0:f.text),1),d.value.length>1?(S(),B("span",jf,N(d.value.length),1)):ye("",!0)]),y("div",Gf,N(A.value),1)]),y("div",{class:"lane main",style:Ne(ge.value)},[y("div",Uf,[y("p",null,N((x=v.value)==null?void 0:x.text),1),p.value.length>1?(S(),B("span",Vf,N(p.value.length),1)):ye("",!0)]),y("div",Yf,N(H.value),1),y("div",{class:ve(["stamp left",{on:_e.value}])},"◀ "+N(O(mt)),3),y("div",{class:ve(["stamp right",{on:se.value}])},N(O(At))+" ▶",3)],4)]),y("div",Kf,[y("button",{class:"tap",onClick:Ut(Sn,["stop"]),"aria-label":O(mt)},"◀",8,qf),y("button",{class:"tap swap",onClick:Ut(U,["stop"]),"aria-label":"换一堆"},"⇄"),y("button",{class:"tap",onClick:Ut(_i,["stop"]),"aria-label":O(At)},"▶",8,Wf)])],34)):(S(),B("div",zf,[y("div",Xf,[y("div",{class:"tip back",onClick:_[1]||(_[1]=g=>C())},"‹"),y("span",Jf,N(O(vt)),1)]),(S(!0),B(ke,null,wn(a.value,g=>(S(),B("div",{key:g.id,class:"row",onClick:m=>G(g)},[y("p",null,N(g.text),1)],8,Zf))),128))])),c.value===0?(S(),B("div",Qf,N(O(fo)),1)):(S(),B("div",e0,N(O(vt)),1))])}}}),n0=Tt(t0,[["__scopeId","data-v-3cd155be"]]),i0=""+new URL("rank_A-Buk7knaJ.mp4",import.meta.url).href,o0=""+new URL("rank_B-MEHXL8TX.mp4",import.meta.url).href,s0=""+new URL("rank_C-DOkhQSQI.mp4",import.meta.url).href,r0=""+new URL("rank_F-DPh74h1I.mp4",import.meta.url).href,c0=""+new URL("rank_S-BXJbetyP.mp4",import.meta.url).href,a0=["data-rank"],l0=["src"],p0={class:"stamp"},u0={class:"rk"},_0={class:"word"},d0={class:"title"},f0={class:"script"},g0={class:"meters-card"},m0={class:"mc-title"},v0={class:"bars"},h0={class:"lbl"},x0={class:"track"},k0={class:"num"},y0={class:"disclaimer"},T0={class:"acts"},b0=dt({__name:"EndingCard",props:{ending:{},state:{}},emits:["restart","next"],setup(e,{emit:t}){const n=e,i=ce(1),o=ce(!1),s=le.ui,r=W(()=>s["settleStamp"+n.ending.rank]??""),c=W(()=>{const v=Object.entries(Object.assign({"../../../content/art/endings/rank_A.mp4":i0,"../../../content/art/endings/rank_B.mp4":o0,"../../../content/art/endings/rank_C.mp4":s0,"../../../content/art/endings/rank_F.mp4":r0,"../../../content/art/endings/rank_S.mp4":c0})).find(([k])=>k.endsWith("/rank_"+n.ending.rank+".mp4"));return(v==null?void 0:v[1])??""});let a,u;co(()=>{if(typeof setTimeout!="function"){i.value=3;return}a=setTimeout(()=>{i.value=2},1200),u=setTimeout(()=>{i.value=3},2600)}),Xt(()=>{a!==void 0&&clearTimeout(a),u!==void 0&&clearTimeout(u)});function p(){i.value=3}return(d,v)=>(S(),B("div",{class:"cinema","data-rank":e.ending.rank,onClick:p},[c.value?(S(),B("video",{key:0,class:"bgvid",src:c.value,autoplay:"",muted:"",loop:"",playsinline:"",onCanplay:v[0]||(v[0]=k=>o.value=!0)},null,40,l0)):ye("",!0),y("div",{class:ve(["dim",{deeper:i.value>=2}])},null,2),y("div",{class:ve(["stamp-wrap",{show:i.value>=2}])},[y("div",p0,[y("span",u0,N(e.ending.rank),1),y("span",_0,N(r.value),1)])],2),y("div",{class:ve(["sheet",{show:i.value>=3}])},[y("h2",d0,N(e.ending.title),1),y("p",f0,N(e.ending.script),1),y("div",g0,[y("div",m0,N(O(s).settleMetersTitle),1),y("div",v0,[(S(),B(ke,null,wn(["evidence","opinion","composure","risk"],k=>y("div",{key:k,class:"bar"},[y("span",h0,N(O(le).meters[k]),1),y("span",x0,[y("i",{style:Ne({width:Math.min(100,e.state[k])+"%"}),class:ve(k)},null,6)]),y("span",k0,N(e.state[k]),1)])),64))])]),y("p",y0,N(O(le).ui.disclaimer),1),y("div",T0,[y("button",{onClick:v[1]||(v[1]=Ut(k=>d.$emit("restart"),["stop"]))},N(O(s).settleReplay),1),y("button",{class:"primary",onClick:v[2]||(v[2]=Ut(k=>d.$emit("next"),["stop"]))},N(O(s).settleNext),1)])],2)],8,a0))}}),A0=Tt(b0,[["__scopeId","data-v-1b16c145"]]),L0={class:"select"},P0={class:"sub"},O0={class:"list"},w0=["onClick"],R0={class:"tid"},S0={class:"ttitle"},E0={class:"foot"},C0=dt({__name:"LevelSelect",props:{levels:{},best:{}},emits:["pick"],setup(e){const t=n=>n===void 0?"":"r"+n;return(n,i)=>(S(),B("div",L0,[y("header",null,[y("h1",null,N(O(le).appTitle),1),y("p",P0,N(O(le).appSub),1)]),y("div",O0,[(S(!0),B(ke,null,wn(e.levels,o=>(S(),B("button",{key:o.id,onClick:s=>n.$emit("pick",o.id)},[y("span",R0,N(o.id),1),y("span",S0,N(o.title),1),y("span",{class:ve(["badge",t(e.best[o.id])])},N(e.best[o.id]??"·"),3)],8,w0))),128))]),y("footer",E0,N(O(le).ui.disclaimer),1)]))}}),I0=Tt(C0,[["__scopeId","data-v-c562c9d7"]]),$0=""+new URL("L01-BJmHDizO.png",import.meta.url).href,M0=""+new URL("L02-Cgrrfiit.png",import.meta.url).href,N0=""+new URL("L03-Dhb-92UY.png",import.meta.url).href,D0=""+new URL("L04-Dxn6iz_R.png",import.meta.url).href,F0=""+new URL("L05-BCX3gD5-.png",import.meta.url).href,B0=""+new URL("L06-DPfiJfY4.png",import.meta.url).href,H0=""+new URL("L07-DgpRWPjk.png",import.meta.url).href,j0=""+new URL("L08-HGz_P2cJ.png",import.meta.url).href,G0=""+new URL("L09-VpgvEvrb.png",import.meta.url).href,U0=""+new URL("L10-D_mOdB4H.png",import.meta.url).href,V0=""+new URL("L11-BXLJJDeb.png",import.meta.url).href,Y0=""+new URL("L12-DemYAPsM.png",import.meta.url).href,K0=""+new URL("L13-Dn-DLBYO.png",import.meta.url).href,q0=""+new URL("L14-BLDD-heh.png",import.meta.url).href,W0=""+new URL("L15-BVYsTDdi.png",import.meta.url).href,z0=""+new URL("L16-kHk4EBk-.png",import.meta.url).href,X0=""+new URL("L17-BomGMZbR.png",import.meta.url).href,J0=""+new URL("L18-B2bLjWIc.png",import.meta.url).href,Z0=""+new URL("L19-DHpwxvAB.png",import.meta.url).href,Q0=""+new URL("L20-CyAYX9HG.png",import.meta.url).href,eg=["src"],tg={key:1,class:"photo-shade"},ng={key:2,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},ig={key:3,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},og={key:4,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},sg={key:5,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},rg={key:6,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},cg={key:7,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},ag={class:"tag"},lg=dt({__name:"SceneBackdrop",props:{levelId:{},pressure:{}},setup(e){const t=e,n=Object.assign({"../../../content/art/scenes/L01.png":$0,"../../../content/art/scenes/L02.png":M0,"../../../content/art/scenes/L03.png":N0,"../../../content/art/scenes/L04.png":D0,"../../../content/art/scenes/L05.png":F0,"../../../content/art/scenes/L06.png":B0,"../../../content/art/scenes/L07.png":H0,"../../../content/art/scenes/L08.png":j0,"../../../content/art/scenes/L09.png":G0,"../../../content/art/scenes/L10.png":U0,"../../../content/art/scenes/L11.png":V0,"../../../content/art/scenes/L12.png":Y0,"../../../content/art/scenes/L13.png":K0,"../../../content/art/scenes/L14.png":q0,"../../../content/art/scenes/L15.png":W0,"../../../content/art/scenes/L16.png":z0,"../../../content/art/scenes/L17.png":X0,"../../../content/art/scenes/L18.png":J0,"../../../content/art/scenes/L19.png":Z0,"../../../content/art/scenes/L20.png":Q0}),i=ce("");je(()=>t.levelId,c=>{const a=Object.entries(n).find(([u])=>u.endsWith("/"+c+".png"));i.value=a!==void 0?a[1]:""},{immediate:!0});const o=W(()=>vp(t.levelId)),s=W(()=>{const c=o.value.hue,a=8+Math.round(t.pressure*.8);return{background:`radial-gradient(120% 70% at 50% 18%, hsl(${c} 32% ${a+10}%) 0%, hsl(${c} 38% ${a}%) 45%, hsl(${c} 45% ${Math.max(4,a-4)}%) 100%)`}}),r=W(()=>o.value.motif);return(c,a)=>(S(),B("div",{class:"backdrop",style:Ne(s.value)},[i.value?(S(),B("img",{key:0,class:"photo",src:i.value,alt:""},null,8,eg)):ye("",!0),i.value?(S(),B("div",tg)):ye("",!0),r.value==="subway"?(S(),B("svg",ng,[...a[0]||(a[0]=[ki('<rect x="40" y="80" width="320" height="180" rx="14" class="win" data-v-b08529d1></rect><rect x="52" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="132" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="212" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="292" y="92" width="56" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="0" y="300" width="400" height="10" class="rail" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',7)])])):r.value==="elevator"?(S(),B("svg",ig,[...a[1]||(a[1]=[y("rect",{x:"120",y:"60",width:"160",height:"440",rx:"6",class:"door"},null,-1),y("line",{x1:"200",y1:"60",x2:"200",y2:"500",class:"seam"},null,-1),y("circle",{cx:"200",cy:"530",r:"12",class:"lamp"},null,-1),y("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="street"?(S(),B("svg",og,[...a[2]||(a[2]=[ki('<line x1="60" y1="0" x2="60" y2="380" class="pole" data-v-b08529d1></line><rect x="48" y="380" width="24" height="8" rx="3" class="lamp" data-v-b08529d1></rect><rect x="0" y="430" width="400" height="6" class="rail" data-v-b08529d1></rect><rect x="0" y="470" width="400" height="4" class="rail dim" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):r.value==="court"?(S(),B("svg",sg,[...a[3]||(a[3]=[y("rect",{x:"80",y:"120",width:"240",height:"90",rx:"4",class:"win"},null,-1),y("rect",{x:"100",y:"300",width:"200",height:"14",rx:"3",class:"desk"},null,-1),y("rect",{x:"60",y:"380",width:"280",height:"10",rx:"3",class:"desk dim"},null,-1),y("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="studio"?(S(),B("svg",rg,[...a[4]||(a[4]=[ki('<rect x="40" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><rect x="230" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><circle cx="200" cy="260" r="8" class="lamp" data-v-b08529d1></circle><line x1="200" y1="0" x2="200" y2="252" class="pole thin" data-v-b08529d1></line><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):(S(),B("svg",cg,[...a[5]||(a[5]=[y("rect",{x:"50",y:"110",width:"140",height:"100",rx:"6",class:"win"},null,-1),y("rect",{x:"220",y:"110",width:"130",height:"70",rx:"6",class:"win dim"},null,-1),y("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])),y("div",ag,N(o.value.label),1)],4))}}),pg=Tt(lg,[["__scopeId","data-v-b08529d1"]]),ug={class:"danmaku","aria-hidden":"true"},_g=dt({__name:"DanmakuLayer",props:{pressure:{},active:{type:Boolean}},setup(e){const t=e,n=ce([]);let i=0,o;function s(){return t.pressure>=4?le.danmaku.hot:t.pressure>=3?le.danmaku.tense:le.danmaku.calm}function r(){if(!t.active)return;const c=s();if(c.length===0)return;const a=c[Math.floor(Math.random()*c.length)]??"";n.value.push({id:i+=1,text:a,lane:Math.floor(Math.random()*4),speed:t.pressure>=4?7+Math.random()*3:10+Math.random()*4,bold:Math.random()<.25}),n.value.length>14&&(n.value=n.value.slice(-14))}return typeof setInterval=="function"&&(o=setInterval(r,t.pressure>=4?900:1800),je(()=>t.pressure,()=>{})),Xt(()=>{o!==void 0&&clearInterval(o)}),(c,a)=>(S(),B("div",ug,[Ee(V_,{name:"fly"},{default:js(()=>[(S(!0),B(ke,null,wn(n.value,u=>(S(),B("span",{key:u.id,class:ve(["line",{bold:u.bold}]),style:Ne({top:12+u.lane*34+"px","--dur":u.speed+"s"})},N(u.text),7))),128))]),_:1})]))}}),dg=Tt(_g,[["__scopeId","data-v-55cd0013"]]),fg=""+new URL("he_song-DAGlX_4O.png",import.meta.url).href,gg=""+new URL("hero-BAfbz0Vs.png",import.meta.url).href,mg=""+new URL("npc_l01_woman-DSDWwEL8.png",import.meta.url).href,vg=""+new URL("npc_l02_woman-qXhWvPKu.png",import.meta.url).href,hg=""+new URL("npc_l03_daughter-Dt2TiO8f.png",import.meta.url).href,xg=""+new URL("npc_l03_woman-BQ3wIsYH.png",import.meta.url).href,kg=""+new URL("npc_l04_woman-CZQbIvDG.png",import.meta.url).href,yg=""+new URL("npc_l05_manager-Ce6F9DQj.png",import.meta.url).href,Tg=""+new URL("npc_l05_woman-BXLOsOGn.png",import.meta.url).href,bg=""+new URL("npc_l06_girlfriend-CrncpSA3.png",import.meta.url).href,Ag=""+new URL("npc_l06_mother-BJuBbFLU.png",import.meta.url).href,Lg=""+new URL("npc_l07_ex-CEJAEgFV.png",import.meta.url).href,Pg=""+new URL("npc_l08_child-Bm0Rde6F.png",import.meta.url).href,Og=""+new URL("npc_l08_mother-tu98VogT.png",import.meta.url).href,wg=""+new URL("npc_l08_wife-Cy9DZe9m.png",import.meta.url).href,Rg=""+new URL("npc_l09_wife-CJUlJISq.png",import.meta.url).href,Sg=""+new URL("npc_l10_exwife-D0NJtWQK.png",import.meta.url).href,Eg=""+new URL("npc_l11_hr-Dqx_GpDt.png",import.meta.url).href,Cg=""+new URL("npc_l12_boss-nYTyR_X5.png",import.meta.url).href,Ig=""+new URL("npc_l12_colleague-BD3ntBZW.png",import.meta.url).href,$g=""+new URL("npc_l13_hr-Dovjb9V8.png",import.meta.url).href,Mg=""+new URL("npc_l14_director-B-efKLNg.png",import.meta.url).href,Ng=""+new URL("npc_l14_hr-DRiqQqX2.png",import.meta.url).href,Dg=""+new URL("npc_l15_broker-CqY8iI1Q.png",import.meta.url).href,Fg=""+new URL("npc_l15_hr-CSF8zzWx.png",import.meta.url).href,Bg=""+new URL("npc_l16_account-D825uOC6.png",import.meta.url).href,Hg=""+new URL("npc_l17_father-jYHQ9zlG.png",import.meta.url).href,jg=""+new URL("npc_l17_hr-D3pAIKo4.png",import.meta.url).href,Gg=""+new URL("npc_l18_streamer-CYlpG6aq.png",import.meta.url).href,Ug=""+new URL("npc_l19_moderator-CoZr2C0k.png",import.meta.url).href,Vg=""+new URL("npc_l19_pr-Do-3PPx1.png",import.meta.url).href,Yg=""+new URL("officer_lin-Bduk5y-m.png",import.meta.url).href,Kg=""+new URL("shen_li-Bd_DLpmj.png",import.meta.url).href,qg=""+new URL("zhou_you-DSERK5v3.png",import.meta.url).href,Wg={key:0,class:"duo","aria-hidden":"true"},zg=["src"],Xg={key:1,class:"pt",viewBox:"0 0 120 160"},Jg=["src","alt"],Zg={key:1,class:"pt",viewBox:"0 0 120 160"},Qg={class:"nm"},e1=dt({__name:"PortraitSlot",props:{speaker:{},visible:{type:Boolean}},setup(e){const t=e,n=Object.assign({"../../../content/art/characters/he_song.png":fg,"../../../content/art/characters/hero.png":gg,"../../../content/art/characters/npc_l01_woman.png":mg,"../../../content/art/characters/npc_l02_woman.png":vg,"../../../content/art/characters/npc_l03_daughter.png":hg,"../../../content/art/characters/npc_l03_woman.png":xg,"../../../content/art/characters/npc_l04_woman.png":kg,"../../../content/art/characters/npc_l05_manager.png":yg,"../../../content/art/characters/npc_l05_woman.png":Tg,"../../../content/art/characters/npc_l06_girlfriend.png":bg,"../../../content/art/characters/npc_l06_mother.png":Ag,"../../../content/art/characters/npc_l07_ex.png":Lg,"../../../content/art/characters/npc_l08_child.png":Pg,"../../../content/art/characters/npc_l08_mother.png":Og,"../../../content/art/characters/npc_l08_wife.png":wg,"../../../content/art/characters/npc_l09_wife.png":Rg,"../../../content/art/characters/npc_l10_exwife.png":Sg,"../../../content/art/characters/npc_l11_hr.png":Eg,"../../../content/art/characters/npc_l12_boss.png":Cg,"../../../content/art/characters/npc_l12_colleague.png":Ig,"../../../content/art/characters/npc_l13_hr.png":$g,"../../../content/art/characters/npc_l14_director.png":Mg,"../../../content/art/characters/npc_l14_hr.png":Ng,"../../../content/art/characters/npc_l15_broker.png":Dg,"../../../content/art/characters/npc_l15_hr.png":Fg,"../../../content/art/characters/npc_l16_account.png":Bg,"../../../content/art/characters/npc_l17_father.png":Hg,"../../../content/art/characters/npc_l17_hr.png":jg,"../../../content/art/characters/npc_l18_streamer.png":Gg,"../../../content/art/characters/npc_l19_moderator.png":Ug,"../../../content/art/characters/npc_l19_pr.png":Vg,"../../../content/art/characters/officer_lin.png":Yg,"../../../content/art/characters/shen_li.png":Kg,"../../../content/art/characters/zhou_you.png":qg});function i(v){if(v===null)return{url:"",ok:!1};const k=Object.entries(n).find(([H])=>H.endsWith("/"+v+".png"));return k!==void 0?{url:k[1],ok:!0}:{url:"",ok:!1}}const o=i("hero"),s=Ui("hero"),r=W(()=>t.speaker===null||t.speaker==="hero"?null:t.speaker),c=W(()=>i(r.value)),a=W(()=>Ui(r.value??"")),u=W(()=>r.value===null?"":bf(r.value)),p=ce(!1);je(()=>t.speaker,()=>{p.value=!1});const d=W(()=>t.speaker==="hero");return(v,k)=>e.visible?(S(),B("div",Wg,[y("div",{class:ve(["who hero",{talking:d.value}]),style:Ne({"--h":O(s)})},[O(o).ok?(S(),B("img",{key:0,class:"pt art",src:O(o).url,alt:""},null,8,zg)):(S(),B("svg",Xg,[...k[1]||(k[1]=[y("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])]))],6),r.value?(S(),B("div",{key:0,class:ve(["who guest",{talking:!0}]),style:Ne({"--h":a.value})},[c.value.ok&&!p.value?(S(),B("img",{key:0,class:"pt art",src:c.value.url,alt:u.value,onError:k[0]||(k[0]=H=>p.value=!0)},null,40,Jg)):(S(),B("svg",Zg,[...k[2]||(k[2]=[y("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])])),y("span",Qg,N(u.value),1)],4)):ye("",!0)])):ye("",!0)}}),t1=Tt(e1,[["__scopeId","data-v-b5ca4a9b"]]);function n1(e,t){const n=220*Math.pow(2,Math.round(e/30)%12/12);return t==="tense"?{root:n,steps:[0,2,3,5,7,8,10]}:t==="panic"?{root:n,steps:[0,1,3,6,7,9,10]}:{root:n*1.5,steps:[0,2,4,7,9,12,14]}}function as(e,t){const n=Math.floor(t/e.steps.length),i=(t%e.steps.length+e.steps.length)%e.steps.length;return e.root*Math.pow(2,(e.steps[i]??0)/12+n)}function ls(e){let t=e|0;return()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>8&16777215)/16777216)}class i1{constructor(){me(this,"ctx",null);me(this,"master",null);me(this,"bgmGain",null);me(this,"sfxGain",null);me(this,"bgmTimer",null);me(this,"mood","calm");me(this,"hue",210);me(this,"step",0);me(this,"rnd",ls(42));me(this,"muted",!1)}unlock(){if(this.ctx===null){const t=globalThis.AudioContext;if(t===void 0)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.5,this.bgmGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.9,this.sfxGain.connect(this.master)}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master!==null&&this.ctx!==null&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone(t,n,i,o,s,r=0){if(this.ctx===null)return;const c=this.ctx.currentTime+r,a=this.ctx.createOscillator(),u=this.ctx.createGain();a.type=o,a.frequency.value=t,u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(i,c+.012),u.gain.exponentialRampToValueAtTime(1e-4,c+n),a.connect(u),u.connect(s),a.start(c),a.stop(c+n+.05)}pad(t,n){if(this.bgmGain===null||this.ctx===null)return;const i=this.ctx.currentTime,o=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900,o.type="sawtooth",o.frequency.value=t/2,s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+n*.3),s.gain.linearRampToValueAtTime(1e-4,i+n),o.connect(r),r.connect(s),s.connect(this.bgmGain),o.start(i),o.stop(i+n+.1)}scene(t,n,i,o){const s=o<15||i>=4?"panic":i>=3||o<40?"tense":"calm";let r=0;for(let c=0;c<t.length;c+=1)r=r*31+t.charCodeAt(c)|0;(s!==this.mood||n!==this.hue)&&(this.mood=s,this.hue=n,this.rnd=ls(r),this.step=0)}tick(){if(this.ctx===null||this.bgmGain===null||this.muted)return;const t=n1(this.hue,this.mood),n=this.step%8,i=this.mood==="calm"?.35:this.mood==="tense"?.55:.75;if(this.rnd()<i){const o=Math.floor(this.rnd()*8),s=as(t,o);this.tone(s,this.mood==="calm"?.9:.45,.06,this.mood==="calm"?"sine":"triangle",this.bgmGain)}n===0&&this.pad(as(t,0),this.mood==="calm"?6.4:3.2),this.mood==="panic"&&(n===0||n===4)&&(this.tone(52,.14,.16,"sine",this.bgmGain),this.tone(52,.12,.12,"sine",this.bgmGain,.18)),this.step+=1}sfx(t){if(!(this.ctx===null||this.sfxGain===null||this.muted))switch(t){case"click":this.tone(880,.06,.1,"sine",this.sfxGain);break;case"options":this.tone(523,.08,.09,"sine",this.sfxGain),this.tone(784,.1,.09,"sine",this.sfxGain,.07);break;case"tick":this.tone(1245,.04,.07,"square",this.sfxGain);break;case"ending":{const n=this.sfxGain;n!==null&&[523,659,784,1047].forEach((i,o)=>this.tone(i,.5,.08,"sine",n,o*.13));break}case"bad":{const n=this.sfxGain;n!==null&&[330,294,262,196].forEach((i,o)=>this.tone(i,.35,.09,"triangle",n,o*.15));break}}}startLoop(){if(this.bgmTimer!==null)return;const t=800;typeof setInterval=="function"&&(this.bgmTimer=setInterval(()=>this.tick(),t))}stopLoop(){this.bgmTimer!==void 0&&this.bgmTimer!==null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}}const wt=new i1,o1={class:"stage"},s1={key:2,class:"topbar"},r1={class:"lv-title"},c1={key:3,class:"study-entry"},a1={class:"sub"},l1=["placeholder"],p1=["disabled"],u1={key:4,class:"study-done"},_1={class:"sum"},d1={class:"story"},f1={name:"App"},g1=dt({...f1,props:{ctx:{}},setup(e){const n=e.ctx;je(n.event,A=>{A!==null&&A.type==="ending"&&(n.settle(),wt.sfx(A.ending.rank==="S"||A.ending.rank==="A"?"ending":"bad"))}),je(n.event,A=>{var G,C,U;if(A===null)return;const F=vp(((G=n.current.value)==null?void 0:G.id)??"L01").hue;A.type==="node"?wt.scene(((C=n.current.value)==null?void 0:C.id)??"L01",F,A.node.pressure??0,n.meters.value.composure):A.type==="options"&&(wt.sfx("options"),wt.scene(((U=n.current.value)==null?void 0:U.id)??"L01",F,3,n.meters.value.composure))});const i=ce(0),o=ce(null);je(n.event,A=>{if(A===null){i.value=0,o.value=null;return}A.type==="node"?(i.value=A.node.pressure??0,o.value="speaker"in A.node?String(A.node.speaker):null):A.type==="options"&&(i.value=A.options.length>0?i.value:0,o.value=null)});const s=W(()=>{const A=n.meters.value.composure;return A>=50||n.screen.value!=="level"?{opacity:0}:{opacity:(.25+(50-A)/50*.55).toFixed(2),animation:A<15?"throb 1.1s ease-in-out infinite":"none"}}),r=W(()=>n.screen.value==="level"),c=ce(""),a=W(()=>n.STUDY_LEVELS.every(A=>{try{return n.studySummary().includes(A)}catch{return!1}}));function u(){const A=n.studyExport();typeof navigator<"u"&&navigator.clipboard!==void 0&&navigator.clipboard.writeText(A);const F=new Blob([A],{type:"application/json"}),G=document.createElement("a");G.href=URL.createObjectURL(F),G.download=`study-${c.value||"anon"}.json`,G.click()}const p=ce(!1),d=W(()=>p.value?"x":"m");function v(){p.value=!p.value,wt.setMuted(p.value)}function k(){wt.unlock(),wt.startLoop()}document.addEventListener("pointerdown",k,{once:!0});const H=W(()=>n.current.value?n.current.value.id:"L01");return(A,F)=>{var G;return S(),B("div",o1,[r.value?(S(),st(pg,{key:0,"level-id":H.value,pressure:i.value},null,8,["level-id","pressure"])):ye("",!0),r.value&&((G=O(n).event.value)==null?void 0:G.type)!=="ending"?(S(),st(dg,{key:1,pressure:i.value,active:r.value},null,8,["pressure","active"])):ye("",!0),r.value?(S(),B("header",s1,[y("button",{class:"back",onClick:F[0]||(F[0]=C=>O(n).toSelect())},"‹"),y("span",r1,N(O(n).banner.value),1),y("button",{class:ve(["mute",{off:p.value}]),onClick:F[1]||(F[1]=C=>v())},N(d.value),3)])):ye("",!0),O(n).studyOn&&O(n).studyScreen.value==="entry"?(S(),B("div",c1,[y("h1",null,N(O(le).appTitle),1),y("p",a1,N(O(nn)("studyIntro")),1),du(y("input",{"onUpdate:modelValue":F[2]||(F[2]=C=>c.value=C),class:"pid",placeholder:O(nn)("studyPidPlaceholder"),maxlength:"8"},null,8,l1),[[X_,c.value]]),y("button",{class:"go",disabled:c.value.trim().length===0,onClick:F[3]||(F[3]=C=>O(n).studyBegin(c.value.trim()))},N(O(nn)("studyStart")),9,p1)])):O(n).studyOn&&O(n).studyScreen.value==="done"&&a.value?(S(),B("div",u1,[y("h2",null,N(O(nn)("studyDoneTitle")),1),y("pre",_1,N(O(n).studySummary()),1),y("button",{class:"go",onClick:u},N(O(nn)("studyCopy")),1)])):O(n).screen.value==="select"?(S(),st(I0,{key:5,levels:O(n).studyOn?O(yn).filter(C=>O(n).STUDY_LEVELS.includes(C.id)):O(yn),best:O(n).best.value,onPick:O(n).startLevel},null,8,["levels","best","onPick"])):O(n).event.value?(S(),B(ke,{key:6},[O(n).event.value.type!=="ending"?(S(),st(Rf,{key:0,state:O(n).meters.value},null,8,["state"])):ye("",!0),Ee(t1,{speaker:O(n).event.value.type==="node"&&"speaker"in O(n).event.value.node?o.value:null,visible:O(n).event.value.type==="node"&&"speaker"in O(n).event.value.node},null,8,["speaker","visible"]),y("div",d1,[O(n).event.value.type==="node"&&"script"in O(n).event.value.node?(S(),st(rs,{key:0,kind:"cutscene",text:String(O(n).event.value.node.script??""),onAdvance:F[4]||(F[4]=C=>O(n).advance())},null,8,["text"])):O(n).event.value.type==="node"&&"speaker"in O(n).event.value.node?(S(),st(rs,{key:1,kind:"dialogue",speaker:String(O(n).event.value.node.speaker??""),text:String(O(n).event.value.node.text??""),onAdvance:F[5]||(F[5]=C=>O(n).advance())},null,8,["speaker","text"])):O(n).event.value.type==="options"?(S(),st(n0,{key:2,options:O(n).event.value.options,timer:O(n).event.value.timer,"timeout-option-id":O(n).event.value.timeoutOptionId,prompt:O(n).event.value.prompt??"",onChoose:O(n).choose},null,8,["options","timer","timeout-option-id","prompt","onChoose"])):O(n).event.value.type==="ending"?(S(),st(A0,{key:3,ending:O(n).event.value.ending,state:O(n).event.value.state,onRestart:O(n).restart,onNext:O(n).nextLevel},null,8,["ending","state","onRestart","onNext"])):ye("",!0)])],64)):ye("",!0),r.value?(S(),B("div",{key:7,class:"vignette",style:Ne(s.value)},null,4)):ye("",!0)])}}}),hp="poju-study-v1",m1=()=>typeof location<"u"&&new URLSearchParams(location.search).get("study")==="1";function bt(){if(typeof localStorage>"u")return{sessionId:"",participant:"",startedAt:0,runs:[]};const e=localStorage.getItem(hp);return e===null?{sessionId:"",participant:"",startedAt:0,runs:[]}:JSON.parse(e)}function li(e){typeof localStorage<"u"&&localStorage.setItem(hp,JSON.stringify(e))}function v1(e){const t={sessionId:`S-${performance.now().toString(36)}`,participant:e,startedAt:performance.now(),runs:[]};return pi=t,li(t),t}function h1(e,t,n){const i={level:t,startedAt:performance.now(),endedAt:0,totalMs:0,choices:[],endingRank:"",endingTitle:"",finalMeters:{evidence:0,opinion:0,composure:0,risk:0},replayed:n},o=pi??bt();return o.runs.push(i),li(o),i}let Vi=0,xp="",pi=null;function Xn(e){Vi=performance.now(),xp=e}function x1(e,t,n,i,o){e.choices.push({level:n,nodeId:xp,optionId:i,ms:Vi>0?performance.now()-Vi:0,meters:{...o}});const s=pi??bt();li(s)}function k1(e,t,n,i,o){e.endedAt=performance.now(),e.totalMs=e.endedAt-e.startedAt,e.endingRank=n,e.endingTitle=i,e.finalMeters={...o},li(pi??bt())}function y1(){return JSON.stringify(bt(),null,2)}function T1(){const e=bt(),n=[le.ui.studySummaryHeader.replace("{p}",e.participant).replace("{n}",String(e.runs.length))],i=new Map;for(const o of e.runs){const s=i.get(o.level)??[];s.push(o),i.set(o.level,s)}for(const[o,s]of[...i.entries()].sort()){const r=s[0],c=Math.round(r.totalMs/1e3),a=le.ui.studySummaryLine;n.push(a.replace("{lv}",o).replace("{rank}",r.endingRank).replace("{title}",r.endingTitle).replace("{s}",String(c)).replace("{c}",String(r.choices.length)).replace("{r}",s.length>1?"Y":"N"))}return n.join(`
`)}const Tn=ce("select"),yt=ni(null),Re=ni(null),bn=ce(xd()),kp=ce(""),ui=ni(null),_o=ce({evidence:0,opinion:0,composure:0,risk:0}),$t=m1(),Yi=["L01","L02","L03","L04","L05"],yp=ce("entry"),An=ni(null),b1=ce(0);function A1(e){bn.value=Gi(),v1(e),yp.value="done",Ln("L01")}function Ln(e){const t=yn.find(i=>i.id===e)??null;if(t===null)return;yt.value=t,kp.value=t.title;const n=new uo(t,bn.value);if(ui.value=n,Re.value=n.start(),_o.value={...n.state},Tn.value="level",$t){const i=bt(),o=i.runs.some(s=>s.level===e&&s.endingRank!=="");An.value=h1(i,e,o),Xn("entry")}}function L1(){const e=ui.value;e!==null&&(Re.value=e.proceed(),$t&&Re.value.type==="node"&&Xn(String(Re.value.node.id)),$t&&Re.value.type==="options"&&Re.value.nodeId!==void 0&&Xn(Re.value.nodeId))}function P1(e){const t=ui.value;t!==null&&(Re.value=t.choose(e),_o.value={...t.state},$t&&An.value!==null&&yt.value!==null&&(x1(An.value,bt(),yt.value.id,e,t.state),Re.value.type==="options"&&Re.value.nodeId!==void 0&&Xn(Re.value.nodeId)))}function O1(){const e=ui.value,t=yt.value,n=Re.value;if(e===null||t===null||n===null||n.type!=="ending")return;if($t){An.value!==null&&k1(An.value,bt(),n.ending.rank,n.ending.title,e.state),b1.value+=1;return}const i=Ad(bn.value,t.id,n.ending,n.state,{now:0});bn.value=i,kd(i)}function w1(){yt.value!==null&&Ln(yt.value.id)}function R1(){const e=yt.value;if(e===null)return;if($t){const i=Yi.indexOf(e.id),o=i>=0?Yi[i+1]:void 0;if(o===void 0){Tn.value="select";return}Ln(o);return}const t=yn.findIndex(i=>i.id===e.id),n=yn[t+1];if(n===void 0){Tn.value="select";return}Ln(n.id)}function S1(){Tn.value="select"}const E1=W(()=>{const e={};for(const[t,n]of Object.entries(bn.value.levelResults))e[t]=n.rank;return e}),C1={screen:Tn,current:yt,event:Re,banner:kp,best:E1,meters:_o,startLevel:Ln,advance:L1,choose:P1,settle:O1,restart:w1,nextLevel:R1,toSelect:S1,studyOn:$t,STUDY_LEVELS:Yi,studyScreen:yp,studyBegin:A1,studyExport:()=>y1(),studySummary:()=>T1()},I1=td(g1,{ctx:C1});I1.mount("#app");
