var $p=Object.defineProperty;var Mp=(e,t,n)=>t in e?$p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ye=(e,t,n)=>Mp(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Kt=[],st=()=>{},mo=()=>!1,ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ii=e=>e.startsWith("onUpdate:"),he=Object.assign,Zi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Np=Object.prototype.hasOwnProperty,ie=(e,t)=>Np.call(e,t),H=Array.isArray,Wt=e=>Pn(e)==="[object Map]",vo=e=>Pn(e)==="[object Set]",ws=e=>Pn(e)==="[object Date]",K=e=>typeof e=="function",ue=e=>typeof e=="string",ot=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",ho=e=>(oe(e)||K(e))&&K(e.then)&&K(e.catch),xo=Object.prototype.toString,Pn=e=>xo.call(e),Fp=e=>Pn(e).slice(8,-1),ko=e=>Pn(e)==="[object Object]",Qi=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,un=Ji(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),si=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Dp=/-\w/g,Ye=si(e=>e.replace(Dp,t=>t.slice(1).toUpperCase())),Bp=/\B([A-Z])/g,Gt=si(e=>e.replace(Bp,"-$1").toLowerCase()),yo=si(e=>e.charAt(0).toUpperCase()+e.slice(1)),xi=si(e=>e?`on${yo(e)}`:""),it=(e,t)=>!Object.is(e,t),Fn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},To=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},es=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Hp=e=>{const t=ue(e)?Number(e):NaN;return isNaN(t)?e:t};let Os;const oi=()=>Os||(Os=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ne(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=ue(i)?jp(i):Ne(i);if(s)for(const o in s)t[o]=s[o]}return t}else if(ue(e)||oe(e))return e}const Gp=/;(?![^(]*\))/g,Vp=/:([^]+)/,Up=/\/\*[^]*?\*\//g;function jp(e){const t={};return e.replace(Up,"").split(Gp).forEach(n=>{if(n){const i=n.split(Vp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function _e(e){let t="";if(ue(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const i=_e(e[n]);i&&(t+=i+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=Ji(Yp);function Lo(e){return!!e||e===""}function Kp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ts(e[i],t[i]);return n}function ts(e,t){if(e===t)return!0;let n=ws(e),i=ws(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=ot(e),i=ot(t),n||i)return e===t;if(n=H(e),i=H(t),n||i)return n&&i?Kp(e,t):!1;if(n=oe(e),i=oe(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,o=Object.keys(t).length;if(s!==o)return!1;for(const r in e){const a=e.hasOwnProperty(r),c=t.hasOwnProperty(r);if(a&&!c||!a&&c||!ts(e[r],t[r]))return!1}}return String(e)===String(t)}const bo=e=>!!(e&&e.__v_isRef===!0),I=e=>ue(e)?e:e==null?"":H(e)||oe(e)&&(e.toString===xo||!K(e.toString))?bo(e)?I(e.value):JSON.stringify(e,Ao,2):String(e),Ao=(e,t)=>bo(t)?Ao(e,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],o)=>(n[ki(i,o)+" =>"]=s,n),{})}:vo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ki(n))}:ot(t)?ki(t):oe(t)&&!H(t)&&!ko(t)?String(t):t,ki=(e,t="")=>{var n;return ot(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class Wp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&be&&(be.active?(this.parent=be,this.index=(be.scopes||(be.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){if(this._on>0&&--this._on===0){if(be===this)be=this.prevScope;else{let t=be;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function zp(){return be}let pe;const yi=new WeakSet;class wo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&(be.active?be.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yi.has(this)&&(yi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Po(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ps(this),Ro(this);const t=pe,n=qe;pe=this,qe=!0;try{return this.fn()}finally{Eo(this),pe=t,qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ss(t);this.deps=this.depsTail=void 0,Ps(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mi(this)&&this.run()}get dirty(){return Mi(this)}}let Oo=0,dn,_n;function Po(e,t=!1){if(e.flags|=8,t){e.next=_n,_n=e;return}e.next=dn,dn=e}function ns(){Oo++}function is(){if(--Oo>0)return;if(_n){let t=_n;for(_n=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Ro(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Eo(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),ss(i),Xp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Mi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(So(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function So(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xn)||(e.globalVersion=xn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Mi(e))))return;e.flags|=2;const t=e.dep,n=pe,i=qe;pe=e,qe=!0;try{Ro(e);const s=e.fn(e._value);(t.version===0||it(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{pe=n,qe=i,Eo(e),e.flags&=-3}}function ss(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)ss(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let qe=!0;const Io=[];function _t(){Io.push(qe),qe=!1}function ft(){const e=Io.pop();qe=e===void 0?!0:e}function Ps(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=pe;pe=void 0;try{t()}finally{pe=n}}}let xn=0;class Jp{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class os{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!pe||!qe||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new Jp(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,Co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=i)}return n}trigger(t){this.version++,xn++,this.notify(t)}notify(t){ns();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{is()}}}function Co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Co(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ni=new WeakMap,Mt=Symbol(""),Fi=Symbol(""),kn=Symbol("");function Ae(e,t,n){if(qe&&pe){let i=Ni.get(e);i||Ni.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new os),s.map=i,s.key=n),s.track()}}function ut(e,t,n,i,s,o){const r=Ni.get(e);if(!r){xn++;return}const a=c=>{c&&c.trigger()};if(ns(),t==="clear")r.forEach(a);else{const c=H(e),l=c&&Qi(n);if(c&&n==="length"){const p=Number(i);r.forEach((_,h)=>{(h==="length"||h===kn||!ot(h)&&h>=p)&&a(_)})}else switch((n!==void 0||r.has(void 0))&&a(r.get(n)),l&&a(r.get(kn)),t){case"add":c?l&&a(r.get("length")):(a(r.get(Mt)),Wt(e)&&a(r.get(Fi)));break;case"delete":c||(a(r.get(Mt)),Wt(e)&&a(r.get(Fi)));break;case"set":Wt(e)&&a(r.get(Mt));break}}is()}function Ut(e){const t=ee(e);return t===e?t:(Ae(t,"iterate",kn),He(e)?t:t.map(Ke))}function ri(e){return Ae(e=ee(e),"iterate",kn),e}function tt(e,t){return gt(e)?Zt(Nt(e)?Ke(t):t):Ke(t)}const Zp={__proto__:null,[Symbol.iterator](){return Ti(this,Symbol.iterator,e=>tt(this,e))},concat(...e){return Ut(this).concat(...e.map(t=>H(t)?Ut(t):t))},entries(){return Ti(this,"entries",e=>(e[1]=tt(this,e[1]),e))},every(e,t){return at(this,"every",e,t,void 0,arguments)},filter(e,t){return at(this,"filter",e,t,n=>n.map(i=>tt(this,i)),arguments)},find(e,t){return at(this,"find",e,t,n=>tt(this,n),arguments)},findIndex(e,t){return at(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return at(this,"findLast",e,t,n=>tt(this,n),arguments)},findLastIndex(e,t){return at(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return at(this,"forEach",e,t,void 0,arguments)},includes(...e){return Li(this,"includes",e)},indexOf(...e){return Li(this,"indexOf",e)},join(e){return Ut(this).join(e)},lastIndexOf(...e){return Li(this,"lastIndexOf",e)},map(e,t){return at(this,"map",e,t,void 0,arguments)},pop(){return rn(this,"pop")},push(...e){return rn(this,"push",e)},reduce(e,...t){return Rs(this,"reduce",e,t)},reduceRight(e,...t){return Rs(this,"reduceRight",e,t)},shift(){return rn(this,"shift")},some(e,t){return at(this,"some",e,t,void 0,arguments)},splice(...e){return rn(this,"splice",e)},toReversed(){return Ut(this).toReversed()},toSorted(e){return Ut(this).toSorted(e)},toSpliced(...e){return Ut(this).toSpliced(...e)},unshift(...e){return rn(this,"unshift",e)},values(){return Ti(this,"values",e=>tt(this,e))}};function Ti(e,t,n){const i=ri(e),s=i[t]();return i!==e&&!He(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const Qp=Array.prototype;function at(e,t,n,i,s,o){const r=ri(e),a=r!==e&&!He(e),c=r[t];if(c!==Qp[t]){const _=c.apply(e,o);return a?Ke(_):_}let l=n;r!==e&&(a?l=function(_,h){return n.call(this,tt(e,_),h,e)}:n.length>2&&(l=function(_,h){return n.call(this,_,h,e)}));const p=c.call(r,l,i);return a&&s?s(p):p}function Rs(e,t,n,i){const s=ri(e),o=s!==e&&!He(e);let r=n,a=!1;s!==e&&(o?(a=i.length===0,r=function(l,p,_){return a&&(a=!1,l=tt(e,l)),n.call(this,l,tt(e,p),_,e)}):n.length>3&&(r=function(l,p,_){return n.call(this,l,p,_,e)}));const c=s[t](r,...i);return a?tt(e,c):c}function Li(e,t,n){const i=ee(e);Ae(i,"iterate",kn);const s=i[t](...n);return(s===-1||s===!1)&&ls(n[0])?(n[0]=ee(n[0]),i[t](...n)):s}function rn(e,t,n=[]){_t(),ns();const i=ee(e)[t].apply(e,n);return is(),ft(),i}const eu=Ji("__proto__,__v_isRef,__isVue"),$o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ot));function tu(e){ot(e)||(e=String(e));const t=ee(this);return Ae(t,"has",e),t.hasOwnProperty(e)}class Mo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?uu:Bo:o?Do:Fo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=H(t);if(!s){let c;if(r&&(c=Zp[n]))return c;if(n==="hasOwnProperty")return tu}const a=Reflect.get(t,n,Oe(t)?t:i);if((ot(n)?$o.has(n):eu(n))||(s||Ae(t,"get",n),o))return a;if(Oe(a)){const c=r&&Qi(n)?a:a.value;return s&&oe(c)?Bi(c):c}return oe(a)?s?Bi(a):as(a):a}}class No extends Mo{constructor(t=!1){super(!1,t)}set(t,n,i,s){let o=t[n];const r=H(t)&&Qi(n);if(!this._isShallow){const l=gt(o);if(!He(i)&&!gt(i)&&(o=ee(o),i=ee(i)),!r&&Oe(o)&&!Oe(i))return l||(o.value=i),!0}const a=r?Number(n)<t.length:ie(t,n),c=Reflect.set(t,n,i,Oe(t)?t:s);return t===ee(s)&&c&&(a?it(i,o)&&ut(t,"set",n,i):ut(t,"add",n,i)),c}deleteProperty(t,n){const i=ie(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&ut(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!ot(n)||!$o.has(n))&&Ae(t,"has",n),i}ownKeys(t){return Ae(t,"iterate",H(t)?"length":Mt),Reflect.ownKeys(t)}}class nu extends Mo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const iu=new No,su=new nu,ou=new No(!0);const Di=e=>e,In=e=>Reflect.getPrototypeOf(e);function ru(e,t,n){return function(...i){const s=this.__v_raw,o=ee(s),r=Wt(o),a=e==="entries"||e===Symbol.iterator&&r,c=e==="keys"&&r,l=s[e](...i),p=n?Di:t?Zt:Ke;return!t&&Ae(o,"iterate",c?Fi:Mt),he(Object.create(l),{next(){const{value:_,done:h}=l.next();return h?{value:_,done:h}:{value:a?[p(_[0]),p(_[1])]:p(_),done:h}}})}}function Cn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function au(e,t){const n={get(s){const o=this.__v_raw,r=ee(o),a=ee(s);e||(it(s,a)&&Ae(r,"get",s),Ae(r,"get",a));const{has:c}=In(r),l=t?Di:e?Zt:Ke;if(c.call(r,s))return l(o.get(s));if(c.call(r,a))return l(o.get(a));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Ae(ee(s),"iterate",Mt),s.size},has(s){const o=this.__v_raw,r=ee(o),a=ee(s);return e||(it(s,a)&&Ae(r,"has",s),Ae(r,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const r=this,a=r.__v_raw,c=ee(a),l=t?Di:e?Zt:Ke;return!e&&Ae(c,"iterate",Mt),a.forEach((p,_)=>s.call(o,l(p),l(_),r))}};return he(n,e?{add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear")}:{add(s){const o=ee(this),r=In(o),a=ee(s),c=!t&&!He(s)&&!gt(s)?a:s;return r.has.call(o,c)||it(s,c)&&r.has.call(o,s)||it(a,c)&&r.has.call(o,a)||(o.add(c),ut(o,"add",c,c)),this},set(s,o){!t&&!He(o)&&!gt(o)&&(o=ee(o));const r=ee(this),{has:a,get:c}=In(r);let l=a.call(r,s);l||(s=ee(s),l=a.call(r,s));const p=c.call(r,s);return r.set(s,o),l?it(o,p)&&ut(r,"set",s,o):ut(r,"add",s,o),this},delete(s){const o=ee(this),{has:r,get:a}=In(o);let c=r.call(o,s);c||(s=ee(s),c=r.call(o,s)),a&&a.call(o,s);const l=o.delete(s);return c&&ut(o,"delete",s,void 0),l},clear(){const s=ee(this),o=s.size!==0,r=s.clear();return o&&ut(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ru(s,e,t)}),n}function rs(e,t){const n=au(e,t);return(i,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(ie(n,s)&&s in i?n:i,s,o)}const cu={get:rs(!1,!1)},lu={get:rs(!1,!0)},pu={get:rs(!0,!1)};const Fo=new WeakMap,Do=new WeakMap,Bo=new WeakMap,uu=new WeakMap;function du(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function as(e){return gt(e)?e:cs(e,!1,iu,cu,Fo)}function _u(e){return cs(e,!1,ou,lu,Do)}function Bi(e){return cs(e,!0,su,pu,Bo)}function cs(e,t,n,i,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const r=du(Fp(e));if(r===0)return e;const a=new Proxy(e,r===2?i:n);return s.set(e,a),a}function Nt(e){return gt(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function gt(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function ls(e){return e?!!e.__v_raw:!1}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function fu(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&To(e,"__v_skip",!0),e}const Ke=e=>oe(e)?as(e):e,Zt=e=>oe(e)?Bi(e):e;function Oe(e){return e?e.__v_isRef===!0:!1}function J(e){return Ho(e,!1)}function ai(e){return Ho(e,!0)}function Ho(e,t){return Oe(e)?e:new gu(e,t)}class gu{constructor(t,n){this.dep=new os,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ee(t),this._value=n?t:Ke(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||He(t)||gt(t);t=i?t:ee(t),it(t,n)&&(this._rawValue=t,this._value=i?t:Ke(t),this.dep.trigger())}}function L(e){return Oe(e)?e.value:e}const mu={get:(e,t,n)=>t==="__v_raw"?e:L(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function Go(e){return Nt(e)?e:new Proxy(e,mu)}class vu{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new os(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Po(this,!0),!0}get value(){const t=this.dep.track();return So(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function hu(e,t,n=!1){let i,s;return K(e)?i=e:(i=e.get,s=e.set),new vu(i,s,n)}const $n={},Vn=new WeakMap;let St;function xu(e,t=!1,n=St){if(n){let i=Vn.get(n);i||Vn.set(n,i=[]),i.push(e)}}function ku(e,t,n=le){const{immediate:i,deep:s,once:o,scheduler:r,augmentJob:a,call:c}=n,l=b=>s?b:He(b)||s===!1||s===0?dt(b,1):dt(b);let p,_,h,g,A=!1,S=!1;if(Oe(e)?(_=()=>e.value,A=He(e)):Nt(e)?(_=()=>l(e),A=!0):H(e)?(S=!0,A=e.some(b=>Nt(b)||He(b)),_=()=>e.map(b=>{if(Oe(b))return b.value;if(Nt(b))return l(b);if(K(b))return c?c(b,2):b()})):K(e)?t?_=c?()=>c(e,2):e:_=()=>{if(h){_t();try{h()}finally{ft()}}const b=St;St=p;try{return c?c(e,3,[g]):e(g)}finally{St=b}}:_=st,t&&s){const b=_,N=s===!0?1/0:s;_=()=>dt(b(),N)}const q=zp(),W=()=>{p.stop(),q&&q.active&&Zi(q.effects,p)};if(o&&t){const b=t;t=(...N)=>{const z=b(...N);return W(),z}}let G=S?new Array(e.length).fill($n):$n;const F=b=>{if(!(!(p.flags&1)||!p.dirty&&!b))if(t){const N=p.run();if(b||s||A||(S?N.some((z,xe)=>it(z,G[xe])):it(N,G))){h&&h();const z=St;St=p;try{const xe=[N,G===$n?void 0:S&&G[0]===$n?[]:G,g];G=N,c?c(t,3,xe):t(...xe)}finally{St=z}}}else p.run()};return a&&a(F),p=new wo(_),p.scheduler=r?()=>r(F,!1):F,g=b=>xu(b,!1,p),h=p.onStop=()=>{const b=Vn.get(p);if(b){if(c)c(b,4);else for(const N of b)N();Vn.delete(p)}},t?i?F(!0):G=p.run():r?r(F.bind(null,!0),!0):p.run(),W.pause=p.pause.bind(p),W.resume=p.resume.bind(p),W.stop=W,W}function dt(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Oe(e))dt(e.value,t,n);else if(H(e))for(let i=0;i<e.length;i++)dt(e[i],t,n);else if(vo(e)||Wt(e))e.forEach(i=>{dt(i,t,n)});else if(ko(e)){for(const i in e)dt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&dt(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rn(e,t,n,i){try{return i?e(...i):e()}catch(s){ci(s,t,n)}}function Ge(e,t,n,i){if(K(e)){const s=Rn(e,t,n,i);return s&&ho(s)&&s.catch(o=>{ci(o,t,n)}),s}if(H(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Ge(e[o],t,n,i));return s}}function ci(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||le;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const p=a.ec;if(p){for(let _=0;_<p.length;_++)if(p[_](e,c,l)===!1)return}a=a.parent}if(o){_t(),Rn(o,null,10,[e,c,l]),ft();return}}yu(e,n,s,i,r)}function yu(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const Re=[];let et=-1;const zt=[];let kt=null,jt=0;const Vo=Promise.resolve();let Un=null;function ps(e){const t=Un||Vo;return e?t.then(this?e.bind(this):e):t}function Tu(e){let t=et+1,n=Re.length;for(;t<n;){const i=t+n>>>1,s=Re[i],o=yn(s);o<e||o===e&&s.flags&2?t=i+1:n=i}return t}function us(e){if(!(e.flags&1)){const t=yn(e),n=Re[Re.length-1];!n||!(e.flags&2)&&t>=yn(n)?Re.push(e):Re.splice(Tu(t),0,e),e.flags|=1,Uo()}}function Uo(){Un||(Un=Vo.then(Yo))}function Lu(e){if(!H(e))kt&&e.id===-1?kt.splice(jt+1,0,e):e.flags&1||(zt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)zt.push(e[t]);Uo()}function Es(e,t,n=et+1){for(;n<Re.length;n++){const i=Re[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Re.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jo(e){if(zt.length){const t=[...new Set(zt)].sort((n,i)=>yn(n)-yn(i));if(zt.length=0,kt){for(let n=0;n<t.length;n++)kt.push(t[n]);return}for(kt=t,jt=0;jt<kt.length;jt++){const n=kt[jt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kt=null,jt=0}}const yn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Yo(e){try{for(et=0;et<Re.length;et++){const t=Re[et];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Rn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;et<Re.length;et++){const t=Re[et];t&&(t.flags&=-2)}et=-1,Re.length=0,jo(),Un=null,(Re.length||zt.length)&&Yo()}}let Be=null,qo=null;function jn(e){const t=Be;return Be=e,qo=e&&e.type.__scopeId||null,t}function ds(e,t=Be,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&Wn(-1);const o=jn(t),r=Ft.length;let a;try{a=e(...s)}finally{for(let c=Ft.length;c>r;c--)yr();jn(o),i._d&&Wn(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function bu(e,t){if(Be===null)return e;const n=fi(Be),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,r,a,c=le]=t[s];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&dt(r),i.push({dir:o,instance:n,value:r,oldValue:void 0,arg:a,modifiers:c}))}return e}function Ot(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const a=s[r];o&&(a.oldValue=o[r].value);let c=a.dir[i];c&&(_t(),Ge(c,n,8,[e.el,a,e,t]),ft())}}function Au(e,t){if(Se){let n=Se.provides;const i=Se.parent&&Se.parent.provides;i===n&&(n=Se.provides=Object.create(i)),n[e]=t}}function Dn(e,t,n=!1){const i=ms();if(i||Xt){let s=Xt?Xt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(i&&i.proxy):t}}const wu=Symbol.for("v-scx"),Ou=()=>Dn(wu);function we(e,t,n){return Ko(e,t,n)}function Ko(e,t,n=le){const{immediate:i,deep:s,flush:o,once:r}=n,a=he({},n),c=t&&i||!t&&o!=="post";let l;if(An){if(o==="sync"){const g=Ou();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=st,g.resume=st,g.pause=st,g}}const p=Se;a.call=(g,A,S)=>Ge(g,p,A,S);let _=!1;o==="post"?a.scheduler=g=>{Ie(g,p&&p.suspense)}:o!=="sync"&&(_=!0,a.scheduler=(g,A)=>{A?g():us(g)}),a.augmentJob=g=>{t&&(g.flags|=4),_&&(g.flags|=2,p&&(g.id=p.uid,g.i=p))};const h=ku(e,t,a);return An&&(l?l.push(h):c&&h()),h}function Pu(e,t,n){const i=this.proxy,s=ue(e)?e.includes(".")?Wo(i,e):()=>i[e]:e.bind(i,i);let o;K(t)?o=t:(o=t.handler,n=t);const r=En(this),a=Ko(s,o.bind(i),n);return r(),a}function Wo(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Ru=Symbol("_vte"),li=e=>e.__isTeleport,De=Symbol("_leaveCb"),an=Symbol("_enterCb");function zo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),ir(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],Xo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},Jo=e=>{const t=e.subTree;return t.component?Jo(t.component):t},Eu={name:"BaseTransition",props:Xo,setup(e,{slots:t}){const n=ms(),i=zo();return()=>{const s=t.default&&_s(t.default(),!0),o=s&&s.length?Zo(s):n.subTree?se():void 0;if(!o)return;const r=ee(e),{mode:a}=r;if(i.isLeaving)return bi(o);const c=Yn(o);if(!c)return bi(o);let l=Tn(c,r,i,n,_=>l=_);c.type!==Ee&&Dt(c,l);let p=n.subTree&&Yn(n.subTree);if(p&&p.type!==Ee&&!It(p,c)&&Jo(n).type!==Ee){let _=Tn(p,r,i,n);if(Dt(p,_),a==="out-in"&&c.type!==Ee)return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete _.afterLeave,p=void 0},bi(o);a==="in-out"&&c.type!==Ee?_.delayLeave=(h,g,A)=>{const S=Qo(i,p);S[String(p.key)]=p,h[De]=()=>{g(),h[De]=void 0,delete l.delayedLeave,p=void 0},l.delayedLeave=()=>{A(),delete l.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return o}}};function Zo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ee){t=n;break}}return t}const Su=Eu;function Qo(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Tn(e,t,n,i,s){const{appear:o,mode:r,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:p,onEnterCancelled:_,onBeforeLeave:h,onLeave:g,onAfterLeave:A,onLeaveCancelled:S,onBeforeAppear:q,onAppear:W,onAfterAppear:G,onAppearCancelled:F}=t,b=String(e.key),N=Qo(n,e),z=(V,X)=>{V&&Ge(V,i,9,X)},xe=(V,X)=>{const re=X[1];z(V,X),H(V)?V.every(v=>v.length<=1)&&re():V.length<=1&&re()},ge={mode:r,persisted:a,beforeEnter(V){let X=c;if(!n.isMounted)if(o)X=q||c;else return;V[De]&&V[De](!0);const re=N[b];re&&It(e,re)&&re.el[De]&&re.el[De](),z(X,[V])},enter(V){if(N[b]===e)return;let X=l,re=p,v=_;if(!n.isMounted)if(o)X=W||l,re=G||p,v=F||_;else return;let O=!1;V[an]=$=>{O||(O=!0,$?z(v,[V]):z(re,[V]),ge.delayedLeave&&ge.delayedLeave(),V[an]=void 0)};const te=V[an].bind(null,!1);X?xe(X,[V,te]):te()},leave(V,X){const re=String(e.key);if(V[an]&&V[an](!0),n.isUnmounting)return X();z(h,[V]);let v=!1;V[De]=te=>{v||(v=!0,X(),te?z(S,[V]):z(A,[V]),V[De]=void 0,N[re]===e&&delete N[re])};const O=V[De].bind(null,!1);N[re]=e,g?xe(g,[V,O]):O()},clone(V){const X=Tn(V,t,n,i,s);return s&&s(X),X}};return ge}function bi(e){if(pi(e))return e=yt(e),e.children=null,e}function Yn(e){if(!pi(e))return li(e.type)&&e.children?Zo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function Dt(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Dt(li(n.type)&&Yn(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _s(e,t=!1,n){let i=[],s=0;for(let o=0;o<e.length;o++){let r=e[o];const a=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===ke?(r.patchFlag&128&&s++,i=i.concat(_s(r.children,t,a))):(t||r.type!==Ee)&&i.push(a!=null?yt(r,{key:a}):r)}if(s>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function rt(e,t){return K(e)?he({name:e.name},t,{setup:e}):e}function er(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ss(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const qn=new WeakMap;function fn(e,t,n,i,s=!1){if(H(e)){e.forEach((S,q)=>fn(S,t&&(H(t)?t[q]:t),n,i,s));return}if(gn(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&fn(e,t,n,i.component.subTree);return}const o=i.shapeFlag&4?fi(i.component):i.el,r=s?null:o,{i:a,r:c}=e,l=t&&t.r,p=a.refs===le?a.refs={}:a.refs,_=a.setupState,h=ee(_),g=_===le?mo:S=>Ss(p,S)?!1:ie(h,S),A=(S,q)=>!(q&&Ss(p,q));if(l!=null&&l!==c){if(Is(t),ue(l))p[l]=null,g(l)&&(_[l]=null);else if(Oe(l)){const S=t;A(l,S.k)&&(l.value=null),S.k&&(p[S.k]=null)}}if(K(c))Rn(c,a,12,[r,p]);else{const S=ue(c),q=Oe(c);if(S||q){const W=()=>{if(e.f){const G=S?g(c)?_[c]:p[c]:A()||!e.k?c.value:p[e.k];if(s)H(G)&&Zi(G,o);else if(H(G))G.includes(o)||G.push(o);else if(S)p[c]=[o],g(c)&&(_[c]=p[c]);else{const F=[o];A(c,e.k)&&(c.value=F),e.k&&(p[e.k]=F)}}else S?(p[c]=r,g(c)&&(_[c]=r)):q&&(A(c,e.k)&&(c.value=r),e.k&&(p[e.k]=r))};if(r){const G=()=>{W(),qn.delete(e)};G.id=-1,qn.set(e,G),Ie(G,n)}else Is(e),W()}}}function Is(e){const t=qn.get(e);t&&(t.flags|=8,qn.delete(e))}oi().requestIdleCallback;oi().cancelIdleCallback;const gn=e=>!!e.type.__asyncLoader,pi=e=>e.type.__isKeepAlive;function Iu(e,t){tr(e,"a",t)}function Cu(e,t){tr(e,"da",t)}function tr(e,t,n=Se){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ui(t,i,n),n){let s=n.parent;for(;s&&s.parent;)pi(s.parent.vnode)&&$u(i,t,n,s),s=s.parent}}function $u(e,t,n,i){const s=ui(t,e,i,!0);Vt(()=>{Zi(i[t],s)},n)}function ui(e,t,n=Se,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{_t();const a=En(n),c=Ge(t,n,e,r);return a(),ft(),c});return i?s.unshift(o):s.push(o),o}}const mt=e=>(t,n=Se)=>{(!An||e==="sp")&&ui(e,(...i)=>t(...i),n)},Mu=mt("bm"),tn=mt("m"),Nu=mt("bu"),nr=mt("u"),ir=mt("bum"),Vt=mt("um"),Fu=mt("sp"),Du=mt("rtg"),Bu=mt("rtc");function Hu(e,t=Se){ui("ec",e,t)}const Gu=Symbol.for("v-ndc");function Bt(e,t,n,i){let s;const o=n,r=H(e);if(r||ue(e)){const a=r&&Nt(e);let c=!1,l=!1;a&&(c=!He(e),l=gt(e),e=ri(e)),s=new Array(e.length);for(let p=0,_=e.length;p<_;p++)s[p]=t(c?l?Zt(Ke(e[p])):Ke(e[p]):e[p],p,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const p=a[c];s[c]=t(e[p],p,c,o)}}else s=[];return s}const Hi=e=>e?br(e)?fi(e):Hi(e.parent):null,mn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hi(e.parent),$root:e=>Hi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>or(e),$forceUpdate:e=>e.f||(e.f=()=>{us(e.update)}),$nextTick:e=>e.n||(e.n=ps.bind(e.proxy)),$watch:e=>Pu.bind(e)}),Ai=(e,t)=>e!==le&&!e.__isScriptSetup&&ie(e,t),Vu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:r,type:a,appContext:c}=e;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Ai(i,t))return r[t]=1,i[t];if(s!==le&&ie(s,t))return r[t]=2,s[t];if(ie(o,t))return r[t]=3,o[t];if(n!==le&&ie(n,t))return r[t]=4,n[t];Gi&&(r[t]=0)}}const l=mn[t];let p,_;if(l)return t==="$attrs"&&Ae(e.attrs,"get",""),l(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==le&&ie(n,t))return r[t]=4,n[t];if(_=c.config.globalProperties,ie(_,t))return _[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return Ai(s,t)?(s[t]=n,!0):i!==le&&ie(i,t)?(i[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:o,type:r}},a){let c;return!!(n[a]||e!==le&&a[0]!=="$"&&ie(e,a)||Ai(t,a)||ie(o,a)||ie(i,a)||ie(mn,a)||ie(s.config.globalProperties,a)||(c=r.__cssModules)&&c[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Cs(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gi=!0;function Uu(e){const t=or(e),n=e.proxy,i=e.ctx;Gi=!1,t.beforeCreate&&$s(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:a,provide:c,inject:l,created:p,beforeMount:_,mounted:h,beforeUpdate:g,updated:A,activated:S,deactivated:q,beforeDestroy:W,beforeUnmount:G,destroyed:F,unmounted:b,render:N,renderTracked:z,renderTriggered:xe,errorCaptured:ge,serverPrefetch:V,expose:X,inheritAttrs:re,components:v,directives:O,filters:te}=t;if(l&&ju(l,i,null),r)for(const Y in r){const Q=r[Y];K(Q)&&(i[Y]=Q.bind(n))}if(s){const Y=s.call(n,n);oe(Y)&&(e.data=as(Y))}if(Gi=!0,o)for(const Y in o){const Q=o[Y],Ve=K(Q)?Q.bind(n,n):K(Q.get)?Q.get.bind(n,n):st,At=!K(Q)&&K(Q.set)?Q.set.bind(n):st,wt=ne({get:Ve,set:At});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>wt.value,set:We=>wt.value=We})}if(a)for(const Y in a)sr(a[Y],i,n,Y);if(c){const Y=K(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(Q=>{Au(Q,Y[Q])})}p&&$s(p,e,"c");function j(Y,Q){H(Q)?Q.forEach(Ve=>Y(Ve.bind(n))):Q&&Y(Q.bind(n))}if(j(Mu,_),j(tn,h),j(Nu,g),j(nr,A),j(Iu,S),j(Cu,q),j(Hu,ge),j(Bu,z),j(Du,xe),j(ir,G),j(Vt,b),j(Fu,V),H(X))if(X.length){const Y=e.exposed||(e.exposed={});X.forEach(Q=>{Object.defineProperty(Y,Q,{get:()=>n[Q],set:Ve=>n[Q]=Ve,enumerable:!0})})}else e.exposed||(e.exposed={});N&&e.render===st&&(e.render=N),re!=null&&(e.inheritAttrs=re),v&&(e.components=v),O&&(e.directives=O),V&&er(e)}function ju(e,t,n=st){H(e)&&(e=Vi(e));for(const i in e){const s=e[i];let o;oe(s)?"default"in s?o=Dn(s.from||i,s.default,!0):o=Dn(s.from||i):o=Dn(s),Oe(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[i]=o}}function $s(e,t,n){Ge(H(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function sr(e,t,n,i){let s=i.includes(".")?Wo(n,i):()=>n[i];if(ue(e)){const o=t[e];K(o)&&we(s,o)}else if(K(e))we(s,e.bind(n));else if(oe(e))if(H(e))e.forEach(o=>sr(o,t,n,i));else{const o=K(e.handler)?e.handler.bind(n):t[e.handler];K(o)&&we(s,o,e)}}function or(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!i?c=t:(c={},s.length&&s.forEach(l=>Kn(c,l,r,!0)),Kn(c,t,r)),oe(t)&&o.set(t,c),c}function Kn(e,t,n,i=!1){const{mixins:s,extends:o}=t;o&&Kn(e,o,n,!0),s&&s.forEach(r=>Kn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const a=Yu[r]||n&&n[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Yu={data:Ms,props:Ns,emits:Ns,methods:ln,computed:ln,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:ln,directives:ln,watch:Ku,provide:Ms,inject:qu};function Ms(e,t){return t?e?function(){return he(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function qu(e,t){return ln(Vi(e),Vi(t))}function Vi(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function ln(e,t){return e?he(Object.create(null),e,t):t}function Ns(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:he(Object.create(null),Cs(e),Cs(t??{})):t}function Ku(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const i in t)n[i]=Pe(e[i],t[i]);return n}function rr(){return{app:null,config:{isNativeTag:mo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wu=0;function zu(e,t){return function(i,s=null){K(i)||(i=he({},i)),s!=null&&!oe(s)&&(s=null);const o=rr(),r=new WeakSet,a=[];let c=!1;const l=o.app={_uid:Wu++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:wd,get config(){return o.config},set config(p){},use(p,..._){return r.has(p)||(p&&K(p.install)?(r.add(p),p.install(l,..._)):K(p)&&(r.add(p),p(l,..._))),l},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),l},component(p,_){return _?(o.components[p]=_,l):o.components[p]},directive(p,_){return _?(o.directives[p]=_,l):o.directives[p]},mount(p,_,h){if(!c){const g=l._ceVNode||Te(i,s);return g.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),e(g,p,h),c=!0,l._container=p,p.__vue_app__=l,fi(g.component)}},onUnmount(p){a.push(p)},unmount(){c&&(Ge(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(p,_){return o.provides[p]=_,l},runWithContext(p){const _=Xt;Xt=l;try{return p()}finally{Xt=_}}};return l}}let Xt=null;const Xu=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function Ju(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||le;let s=n;const o=t.startsWith("update:"),r=o&&Xu(i,t.slice(7));r&&(r.trim&&(s=n.map(p=>ue(p)?p.trim():p)),r.number&&(s=n.map(es)));let a,c=i[a=xi(t)]||i[a=xi(Ye(t))];!c&&o&&(c=i[a=xi(Gt(t))]),c&&Ge(c,e,6,s);const l=i[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ge(l,e,6,s)}}const Zu=new WeakMap;function ar(e,t,n=!1){const i=n?Zu:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const o=e.emits;let r={},a=!1;if(!K(e)){const c=l=>{const p=ar(l,t,!0);p&&(a=!0,he(r,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(oe(e)&&i.set(e,null),null):(H(o)?o.forEach(c=>r[c]=null):he(r,o),oe(e)&&i.set(e,r),r)}function di(e,t){return!e||!ni(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Gt(t))||ie(e,t))}function Fs(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:r,attrs:a,emit:c,render:l,renderCache:p,props:_,data:h,setupState:g,ctx:A,inheritAttrs:S}=e,q=jn(e);let W,G;try{if(n.shapeFlag&4){const b=s||i,N=b;W=nt(l.call(N,b,p,_,g,h,A)),G=a}else{const b=t;W=nt(b.length>1?b(_,{attrs:a,slots:r,emit:c}):b(_,null)),G=t.props?a:Qu(a)}}catch(b){Ft.length=0,ci(b,e,1),W=Te(Ee)}let F=W;if(G&&S!==!1){const b=Object.keys(G),{shapeFlag:N}=F;b.length&&N&7&&(o&&b.some(ii)&&(G=ed(G,o)),F=yt(F,G,!1,!0))}if(n.dirs&&(F=yt(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition){const b=li(F.type)&&Yn(F)||F;Dt(b,n.transition)}return W=F,jn(q),W}const Qu=e=>{let t;for(const n in e)(n==="class"||n==="style"||ni(n))&&((t||(t={}))[n]=e[n]);return t},ed=(e,t)=>{const n={};for(const i in e)(!ii(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function td(e,t,n){const{props:i,children:s,component:o}=e,{props:r,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Ds(i,r,l):!!r;if(c&8){const p=t.dynamicProps;for(let _=0;_<p.length;_++){const h=p[_];if(cr(r,i,h)&&!di(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===r?!1:i?r?Ds(i,r,l):!0:!!r;return!1}function Ds(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(cr(t,e,o)&&!di(n,o))return!0}return!1}function cr(e,t,n){const i=e[n],s=t[n];return n==="style"&&oe(i)&&oe(s)?!ts(i,s):i!==s}function nd({vnode:e,parent:t,suspense:n},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const lr={},pr=()=>Object.create(lr),ur=e=>Object.getPrototypeOf(e)===lr;function id(e,t,n,i=!1){const s={},o=pr();e.propsDefaults=Object.create(null),dr(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=i?s:_u(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function sd(e,t,n,i){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,a=ee(s),[c]=e.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const p=e.vnode.dynamicProps;for(let _=0;_<p.length;_++){let h=p[_];if(di(e.emitsOptions,h))continue;const g=t[h];if(c)if(ie(o,h))g!==o[h]&&(o[h]=g,l=!0);else{const A=Ye(h);s[A]=Ui(c,a,A,g,e,!1)}else g!==o[h]&&(o[h]=g,l=!0)}}}else{dr(e,t,s,o)&&(l=!0);let p;for(const _ in a)(!t||!ie(t,_)&&((p=Gt(_))===_||!ie(t,p)))&&(c?n&&(n[_]!==void 0||n[p]!==void 0)&&(s[_]=Ui(c,a,_,void 0,e,!0)):delete s[_]);if(o!==a)for(const _ in o)(!t||!ie(t,_))&&(delete o[_],l=!0)}l&&ut(e.attrs,"set","")}function dr(e,t,n,i){const[s,o]=e.propsOptions;let r=!1,a;if(t)for(let c in t){if(un(c))continue;const l=t[c];let p;s&&ie(s,p=Ye(c))?!o||!o.includes(p)?n[p]=l:(a||(a={}))[p]=l:di(e.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,r=!0)}if(o){const c=ee(n),l=a||le;for(let p=0;p<o.length;p++){const _=o[p];n[_]=Ui(s,c,_,l[_],e,!ie(l,_))}}return r}function Ui(e,t,n,i,s,o){const r=e[n];if(r!=null){const a=ie(r,"default");if(a&&i===void 0){const c=r.default;if(r.type!==Function&&!r.skipFactory&&K(c)){const{propsDefaults:l}=s;if(n in l)i=l[n];else{const p=En(s);i=l[n]=c.call(null,t),p()}}else i=c;s.ce&&s.ce._setProp(n,i)}r[0]&&(o&&!a?i=!1:r[1]&&(i===""||i===Gt(n))&&(i=!0))}return i}const od=new WeakMap;function _r(e,t,n=!1){const i=n?od:t.propsCache,s=i.get(e);if(s)return s;const o=e.props,r={},a=[];let c=!1;if(!K(e)){const p=_=>{c=!0;const[h,g]=_r(_,t,!0);he(r,h),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!c)return oe(e)&&i.set(e,Kt),Kt;if(H(o))for(let p=0;p<o.length;p++){const _=Ye(o[p]);Bs(_)&&(r[_]=le)}else if(o)for(const p in o){const _=Ye(p);if(Bs(_)){const h=o[p],g=r[_]=H(h)||K(h)?{type:h}:he({},h),A=g.type;let S=!1,q=!0;if(H(A))for(let W=0;W<A.length;++W){const G=A[W],F=K(G)&&G.name;if(F==="Boolean"){S=!0;break}else F==="String"&&(q=!1)}else S=K(A)&&A.name==="Boolean";g[0]=S,g[1]=q,(S||ie(g,"default"))&&a.push(_)}}const l=[r,a];return oe(e)&&i.set(e,l),l}function Bs(e){return e[0]!=="$"&&!un(e)}const fs=e=>e==="_"||e==="_ctx"||e==="$stable",gs=e=>H(e)?e.map(nt):[nt(e)],rd=(e,t,n)=>{if(t._n)return t;const i=ds((...s)=>gs(t(...s)),n);return i._c=!1,i},fr=(e,t,n)=>{const i=e._ctx;for(const s in e){if(fs(s))continue;const o=e[s];if(K(o))t[s]=rd(s,o,i);else if(o!=null){const r=gs(o);t[s]=()=>r}}},gr=(e,t)=>{const n=gs(t);e.slots.default=()=>n},mr=(e,t,n)=>{for(const i in t)(n||!fs(i))&&(e[i]=t[i])},ad=(e,t,n)=>{const i=e.slots=pr();if(e.vnode.shapeFlag&32){const s=t._;s?(mr(i,t,n),n&&To(i,"_",s,!0)):fr(t,i)}else t&&gr(e,t)},cd=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,r=le;if(i.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:mr(s,t,n):(o=!t.$stable,fr(t,s)),r=t}else t&&(gr(e,t),r={default:1});if(o)for(const a in s)!fs(a)&&r[a]==null&&delete s[a]},Ie=_d;function ld(e){return pd(e)}function pd(e,t){const n=oi();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:r,createText:a,createComment:c,setText:l,setElementText:p,parentNode:_,nextSibling:h,setScopeId:g=st,insertStaticContent:A}=e,S=(u,d,m,T=null,y=null,x=null,R=void 0,P=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!It(u,d)&&(T=Sn(u),We(u,y,x,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:k,ref:B,shapeFlag:C}=d;switch(k){case _i:q(u,d,m,T);break;case Ee:W(u,d,m,T);break;case Bn:u==null&&G(d,m,T,R);break;case ke:v(u,d,m,T,y,x,R,P,w);break;default:C&1?N(u,d,m,T,y,x,R,P,w):C&6?O(u,d,m,T,y,x,R,P,w):(C&64||C&128)&&k.process(u,d,m,T,y,x,R,P,w,sn)}B!=null&&y?fn(B,u&&u.ref,x,d||u,!d):B==null&&u&&u.ref!=null&&fn(u.ref,null,x,u,!0)},q=(u,d,m,T)=>{if(u==null)i(d.el=a(d.children),m,T);else{const y=d.el=u.el;d.children!==u.children&&l(y,d.children)}},W=(u,d,m,T)=>{u==null?i(d.el=c(d.children||""),m,T):d.el=u.el},G=(u,d,m,T)=>{[u.el,u.anchor]=A(u.children,d,m,T,u.el,u.anchor)},F=({el:u,anchor:d},m,T)=>{let y;for(;u&&u!==d;)y=h(u),i(u,m,T),u=y;i(d,m,T)},b=({el:u,anchor:d})=>{let m;for(;u&&u!==d;)m=h(u),s(u),u=m;s(d)},N=(u,d,m,T,y,x,R,P,w)=>{if(d.type==="svg"?R="svg":d.type==="math"&&(R="mathml"),u==null)z(d,m,T,y,x,R,P,w);else{const k=u.el&&u.el._isVueCE?u.el:null;try{k&&k._beginPatch(),V(u,d,y,x,R,P,w)}finally{k&&k._endPatch()}}},z=(u,d,m,T,y,x,R,P)=>{let w,k;const{props:B,shapeFlag:C,transition:D,dirs:U}=u;if(w=u.el=r(u.type,x,B&&B.is,B),C&8?p(w,u.children):C&16&&ge(u.children,w,null,T,y,wi(u,x),R,P),U&&Ot(u,null,T,"created"),xe(w,u,u.scopeId,R,T),B){for(const ce in B)ce!=="value"&&!un(ce)&&o(w,ce,null,B[ce],x,T);"value"in B&&o(w,"value",null,B.value,x),(k=B.onVnodeBeforeMount)&&Ze(k,T,u)}U&&Ot(u,null,T,"beforeMount");const Z=ud(y,D);Z&&D.beforeEnter(w),i(w,d,m),((k=B&&B.onVnodeMounted)||Z||U)&&Ie(()=>{try{k&&Ze(k,T,u),Z&&D.enter(w),U&&Ot(u,null,T,"mounted")}finally{}},y)},xe=(u,d,m,T,y)=>{if(m&&g(u,m),T)for(let x=0;x<T.length;x++)g(u,T[x]);if(y){let x=y.subTree;if(d===x||kr(x.type)&&(x.ssContent===d||x.ssFallback===d)){const R=y.vnode;xe(u,R,R.scopeId,R.slotScopeIds,y.parent)}}},ge=(u,d,m,T,y,x,R,P,w=0)=>{for(let k=w;k<u.length;k++){const B=u[k]=P?pt(u[k]):nt(u[k]);S(null,B,d,m,T,y,x,R,P)}},V=(u,d,m,T,y,x,R)=>{const P=d.el=u.el;let{patchFlag:w,dynamicChildren:k,dirs:B}=d;w|=u.patchFlag&16;const C=u.props||le,D=d.props||le;let U;if(m&&Pt(m,!1),(U=D.onVnodeBeforeUpdate)&&Ze(U,m,d,u),B&&Ot(d,u,m,"beforeUpdate"),m&&Pt(m,!0),k&&(!u.dynamicChildren||u.dynamicChildren.length!==k.length)&&(w=0,R=!1,k=null),(C.innerHTML&&D.innerHTML==null||C.textContent&&D.textContent==null)&&p(P,""),k?X(u.dynamicChildren,k,P,m,T,wi(d,y),x):R||Q(u,d,P,null,m,T,wi(d,y),x,!1),w>0){if(w&16)re(P,C,D,m,y);else if(w&2&&C.class!==D.class&&o(P,"class",null,D.class,y),w&4&&o(P,"style",C.style,D.style,y),w&8){const Z=d.dynamicProps;for(let ce=0;ce<Z.length;ce++){const ae=Z[ce],me=C[ae],Le=D[ae];(Le!==me||ae==="value")&&o(P,ae,me,Le,y,m)}}w&1&&u.children!==d.children&&p(P,d.children)}else!R&&k==null&&re(P,C,D,m,y);((U=D.onVnodeUpdated)||B)&&Ie(()=>{U&&Ze(U,m,d,u),B&&Ot(d,u,m,"updated")},T)},X=(u,d,m,T,y,x,R)=>{for(let P=0;P<d.length;P++){const w=u[P],k=d[P],B=w.el&&(w.type===ke||!It(w,k)||w.shapeFlag&198)?_(w.el):m;S(w,k,B,null,T,y,x,R,!0)}},re=(u,d,m,T,y)=>{if(d!==m){if(d!==le)for(const x in d)!un(x)&&!(x in m)&&o(u,x,d[x],null,y,T);for(const x in m){if(un(x))continue;const R=m[x],P=d[x];R!==P&&x!=="value"&&o(u,x,P,R,y,T)}"value"in m&&o(u,"value",d.value,m.value,y)}},v=(u,d,m,T,y,x,R,P,w)=>{const k=d.el=u?u.el:a(""),B=d.anchor=u?u.anchor:a("");let{patchFlag:C,dynamicChildren:D,slotScopeIds:U}=d;U&&(P=P?P.concat(U):U),u==null?(i(k,m,T),i(B,m,T),ge(d.children||[],m,B,y,x,R,P,w)):C>0&&C&64&&D&&u.dynamicChildren&&u.dynamicChildren.length===D.length?(X(u.dynamicChildren,D,m,y,x,R,P),(d.key!=null||y&&d===y.subTree)&&vr(u,d,!0)):Q(u,d,m,B,y,x,R,P,w)},O=(u,d,m,T,y,x,R,P,w)=>{d.slotScopeIds=P,u==null?d.shapeFlag&512?y.ctx.activate(d,m,T,R,w):te(d,m,T,y,x,R,w):$(u,d,w)},te=(u,d,m,T,y,x,R)=>{const P=u.component=xd(u,T,y);if(pi(u)&&(P.ctx.renderer=sn),kd(P,!1,R),P.asyncDep){if(y&&y.registerDep(P,j,R),!u.el){const w=P.subTree=Te(Ee);W(null,w,d,m),u.placeholder=w.el}}else j(P,u,d,m,y,x,R)},$=(u,d,m)=>{const T=d.component=u.component;if(td(u,d,m))if(T.asyncDep&&!T.asyncResolved){Y(T,d,m);return}else T.next=d,T.update();else d.el=u.el,T.vnode=d},j=(u,d,m,T,y,x,R)=>{const P=()=>{if(u.isMounted){let{next:C,bu:D,u:U,parent:Z,vnode:ce}=u;{const Xe=hr(u);if(Xe){C&&(C.el=ce.el,Y(u,C,R)),Xe.asyncDep.then(()=>{Ie(()=>{u.isUnmounted||k()},y)});return}}let ae=C,me;Pt(u,!1),C?(C.el=ce.el,Y(u,C,R)):C=ce,D&&Fn(D),(me=C.props&&C.props.onVnodeBeforeUpdate)&&Ze(me,Z,C,ce),Pt(u,!0);const Le=Fs(u),ze=u.subTree;u.subTree=Le,S(ze,Le,_(ze.el),Sn(ze),u,y,x),C.el=Le.el,ae===null&&nd(u,Le.el),U&&Ie(U,y),(me=C.props&&C.props.onVnodeUpdated)&&Ie(()=>Ze(me,Z,C,ce),y)}else{let C;const{el:D,props:U}=d,{bm:Z,m:ce,parent:ae,root:me,type:Le}=u,ze=gn(d);Pt(u,!1),Z&&Fn(Z),!ze&&(C=U&&U.onVnodeBeforeMount)&&Ze(C,ae,d),Pt(u,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(Le,u.parent?u.parent.type:void 0);const Xe=u.subTree=Fs(u);S(null,Xe,m,T,u,y,x),d.el=Xe.el}if(ce&&Ie(ce,y),!ze&&(C=U&&U.onVnodeMounted)){const Xe=d;Ie(()=>Ze(C,ae,Xe),y)}(d.shapeFlag&256||ae&&gn(ae.vnode)&&ae.vnode.shapeFlag&256)&&u.a&&Ie(u.a,y),u.isMounted=!0,d=m=T=null}};u.scope.on();const w=u.effect=new wo(P);u.scope.off();const k=u.update=w.run.bind(w),B=u.job=w.runIfDirty.bind(w);B.i=u,B.id=u.uid,w.scheduler=()=>us(B),Pt(u,!0),k()},Y=(u,d,m)=>{d.component=u;const T=u.vnode.props;u.vnode=d,u.next=null,sd(u,d.props,T,m),cd(u,d.children,m),_t(),Es(u),ft()},Q=(u,d,m,T,y,x,R,P,w=!1)=>{const k=u&&u.children,B=u?u.shapeFlag:0,C=d.children,{patchFlag:D,shapeFlag:U}=d;if(D>0){if(D&128){At(k,C,m,T,y,x,R,P,w);return}else if(D&256){Ve(k,C,m,T,y,x,R,P,w);return}}U&8?(B&16&&nn(k,y,x),C!==k&&p(m,C)):B&16?U&16?At(k,C,m,T,y,x,R,P,w):nn(k,y,x,!0):(B&8&&p(m,""),U&16&&ge(C,m,T,y,x,R,P,w))},Ve=(u,d,m,T,y,x,R,P,w)=>{u=u||Kt,d=d||Kt;const k=u.length,B=d.length,C=Math.min(k,B);let D;for(D=0;D<C;D++){const U=d[D]=w?pt(d[D]):nt(d[D]);S(u[D],U,m,null,y,x,R,P,w)}k>B?nn(u,y,x,!0,!1,C):ge(d,m,T,y,x,R,P,w,C)},At=(u,d,m,T,y,x,R,P,w)=>{let k=0;const B=d.length;let C=u.length-1,D=B-1;for(;k<=C&&k<=D;){const U=u[k],Z=d[k]=w?pt(d[k]):nt(d[k]);if(It(U,Z))S(U,Z,m,null,y,x,R,P,w);else break;k++}for(;k<=C&&k<=D;){const U=u[C],Z=d[D]=w?pt(d[D]):nt(d[D]);if(It(U,Z))S(U,Z,m,null,y,x,R,P,w);else break;C--,D--}if(k>C){if(k<=D){const U=D+1,Z=U<B?d[U].el:T;for(;k<=D;)S(null,d[k]=w?pt(d[k]):nt(d[k]),m,Z,y,x,R,P,w),k++}}else if(k>D)for(;k<=C;)We(u[k],y,x,!0),k++;else{const U=k,Z=k,ce=new Map;for(k=Z;k<=D;k++){const Ce=d[k]=w?pt(d[k]):nt(d[k]);Ce.key!=null&&ce.set(Ce.key,k)}let ae,me=0;const Le=D-Z+1;let ze=!1,Xe=0;const on=new Array(Le);for(k=0;k<Le;k++)on[k]=0;for(k=U;k<=C;k++){const Ce=u[k];if(me>=Le){We(Ce,y,x,!0);continue}let Je;if(Ce.key!=null)Je=ce.get(Ce.key);else for(ae=Z;ae<=D;ae++)if(on[ae-Z]===0&&It(Ce,d[ae])){Je=ae;break}Je===void 0?We(Ce,y,x,!0):(on[Je-Z]=k+1,Je>=Xe?Xe=Je:ze=!0,S(Ce,d[Je],m,null,y,x,R,P,w),me++)}const Ls=ze?dd(on):Kt;for(ae=Ls.length-1,k=Le-1;k>=0;k--){const Ce=Z+k,Je=d[Ce],bs=d[Ce+1],As=Ce+1<B?bs.el||xr(bs):T;on[k]===0?S(null,Je,m,As,y,x,R,P,w):ze&&(ae<0||k!==Ls[ae]?wt(Je,m,As,2):ae--)}}},wt=(u,d,m,T,y=null)=>{const{el:x,type:R,transition:P,children:w,shapeFlag:k}=u;if(k&6){wt(u.component.subTree,d,m,T);return}if(k&128){u.suspense.move(d,m,T);return}if(k&64){R.move(u,d,m,sn);return}if(R===ke){i(x,d,m);for(let C=0;C<w.length;C++)wt(w[C],d,m,T);i(u.anchor,d,m);return}if(R===Bn){F(u,d,m);return}if(T!==2&&k&1&&P)if(T===0)P.persisted&&!x[De]?i(x,d,m):(P.beforeEnter(x),i(x,d,m),Ie(()=>P.enter(x),y));else{const{leave:C,delayLeave:D,afterLeave:U}=P,Z=()=>{u.ctx.isUnmounted?s(x):i(x,d,m)},ce=()=>{const ae=x._isLeaving||!!x[De];x._isLeaving&&x[De](!0),P.persisted&&!ae?Z():C(x,()=>{Z(),U&&U()})};D?D(x,Z,ce):ce()}else i(x,d,m)},We=(u,d,m,T=!1,y=!1)=>{const{type:x,props:R,ref:P,children:w,dynamicChildren:k,shapeFlag:B,patchFlag:C,dirs:D,cacheIndex:U,memo:Z}=u;if(C===-2&&(y=!1),P!=null&&(_t(),fn(P,null,m,u,!0),ft()),U!=null&&(d.renderCache[U]=void 0),B&256){d.ctx.deactivate(u);return}const ce=B&1&&D,ae=!gn(u);let me;if(ae&&(me=R&&R.onVnodeBeforeUnmount)&&Ze(me,d,u),B&6)Cp(u.component,m,T);else{if(B&128){u.suspense.unmount(m,T);return}ce&&Ot(u,null,d,"beforeUnmount"),B&64?u.type.remove(u,d,m,sn,T):k&&!k.hasOnce&&(x!==ke||C>0&&C&64)?nn(k,d,m,!1,!0):(x===ke&&C&384||!y&&B&16)&&nn(w,d,m),T&&ys(u)}const Le=Z!=null&&U==null;(ae&&(me=R&&R.onVnodeUnmounted)||ce||Le)&&Ie(()=>{me&&Ze(me,d,u),ce&&Ot(u,null,d,"unmounted"),Le&&(u.el=null)},m)},ys=u=>{const{type:d,el:m,anchor:T,transition:y}=u;if(d===ke){Ip(m,T);return}if(d===Bn){b(u);return}const x=()=>{s(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:P}=y,w=()=>R(m,x);P?P(u.el,x,w):w()}else x()},Ip=(u,d)=>{let m;for(;u!==d;)m=h(u),s(u),u=m;s(d)},Cp=(u,d,m)=>{const{bum:T,scope:y,job:x,subTree:R,um:P,m:w,a:k}=u;Hs(w),Hs(k),T&&Fn(T),y.stop(),x&&(x.flags|=8,We(R,u,d,m)),P&&Ie(P,d),Ie(()=>{u.isUnmounted=!0},d)},nn=(u,d,m,T=!1,y=!1,x=0)=>{for(let R=x;R<u.length;R++)We(u[R],d,m,T,y)},Sn=u=>{if(u.shapeFlag&6)return Sn(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=h(u.anchor||u.el),m=d&&d[Ru];return m?h(m):d};let hi=!1;const Ts=(u,d,m)=>{let T;u==null?d._vnode&&(We(d._vnode,null,null,!0),T=d._vnode.component):S(d._vnode||null,u,d,null,null,null,m),d._vnode=u,hi||(hi=!0,Es(T),jo(),hi=!1)},sn={p:S,um:We,m:wt,r:ys,mt:te,mc:ge,pc:Q,pbc:X,n:Sn,o:e};return{render:Ts,hydrate:void 0,createApp:zu(Ts)}}function wi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Pt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ud(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vr(e,t,n=!1){const i=e.children,s=t.children;if(H(i)&&H(s))for(let o=0;o<i.length;o++){const r=i[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=pt(s[o]),a.el=r.el),!n&&a.patchFlag!==-2&&vr(r,a)),a.type===_i&&(a.patchFlag===-1&&(a=s[o]=pt(a)),a.el=r.el),a.type===Ee&&!a.el&&(a.el=r.el)}}function dd(e){const t=e.slice(),n=[0];let i,s,o,r,a;const c=e.length;for(i=0;i<c;i++){const l=e[i];if(l!==0){if(s=n[n.length-1],e[s]<l){t[i]=s,n.push(i);continue}for(o=0,r=n.length-1;o<r;)a=o+r>>1,e[n[a]]<l?o=a+1:r=a;l<e[n[o]]&&(o>0&&(t[i]=n[o-1]),n[o]=i)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function hr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hr(t)}function Hs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function xr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?xr(t.subTree):null}const kr=e=>e.__isSuspense;function _d(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Lu(e)}const ke=Symbol.for("v-fgt"),_i=Symbol.for("v-txt"),Ee=Symbol.for("v-cmt"),Bn=Symbol.for("v-stc"),Ft=[];let Me=null;function E(e=!1){Ft.push(Me=e?null:[])}function yr(){Ft.pop(),Me=Ft[Ft.length-1]||null}let Ln=1;function Wn(e,t=!1){Ln+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function Tr(e){return e.dynamicChildren=Ln>0?Me||Kt:null,yr(),Ln>0&&Me&&Me.push(e),e}function M(e,t,n,i,s,o){return Tr(f(e,t,n,i,s,o,!0))}function Ue(e,t,n,i,s){return Tr(Te(e,t,n,i,s,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const Lr=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||Oe(e)||K(e)?{i:Be,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,i=0,s=null,o=e===ke?0:1,r=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lr(t),ref:t&&Hn(t),scopeId:qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Be};return a?(Xn(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Ln>0&&!r&&Me&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Me.push(c),c}const Te=fd;function fd(e,t=null,n=null,i=0,s=null,o=!1){if((!e||e===Gu)&&(e=Ee),zn(e)){const a=yt(e,t,!0);return n&&Xn(a,n),Ln>0&&!o&&Me&&(a.shapeFlag&6?Me[Me.indexOf(e)]=a:Me.push(a)),a.patchFlag=-2,a}if(bd(e)&&(e=e.__vccOpts),t){t=gd(t);let{class:a,style:c}=t;a&&!ue(a)&&(t.class=_e(a)),oe(c)&&(ls(c)&&!H(c)&&(c=he({},c)),t.style=Ne(c))}const r=ue(e)?1:kr(e)?128:li(e)?64:oe(e)?4:K(e)?2:0;return f(e,t,n,i,s,r,o,!0)}function gd(e){return e?ls(e)||ur(e)?he({},e):e:null}function yt(e,t,n=!1,i=!1){const{props:s,ref:o,patchFlag:r,children:a,transition:c}=e,l=t?md(s||{},t):s,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Lr(l),ref:t&&t.ref?n&&o?H(o)?o.concat(Hn(t)):[o,Hn(t)]:Hn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yt(e.ssContent),ssFallback:e.ssFallback&&yt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&Dt(p,c.clone(p)),p}function Ct(e=" ",t=0){return Te(_i,null,e,t)}function Oi(e,t){const n=Te(Bn,null,e);return n.staticCount=t,n}function se(e="",t=!1){return t?(E(),Ue(Ee,null,e)):Te(Ee,null,e)}function nt(e){return e==null||typeof e=="boolean"?Te(Ee):H(e)?Te(ke,null,e.slice()):zn(e)?pt(e):Te(_i,null,String(e))}function pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:yt(e)}function Xn(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Xn(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!ur(t)?t._ctx=Be:s===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(K(t)){if(i&65){Xn(e,{default:t});return}t={default:t,_ctx:Be},n=32}else t=String(t),i&64?(n=16,t=[Ct(t)]):n=8;e.children=t,e.shapeFlag|=n}function md(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=_e([t.class,i.class]));else if(s==="style")t.style=Ne([t.style,i.style]);else if(ni(s)){const o=t[s],r=i[s];r&&o!==r&&!(H(o)&&o.includes(r))?t[s]=o?[].concat(o,r):r:r==null&&o==null&&!ii(s)&&(t[s]=r)}else s!==""&&(t[s]=i[s])}return t}function Ze(e,t,n,i=null){Ge(e,t,7,[n,i])}const vd=rr();let hd=0;function xd(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||vd,o={uid:hd++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_r(i,s),emitsOptions:ar(i,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:i.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Ju.bind(null,o),e.ce&&e.ce(o),o}let Se=null;const ms=()=>Se||Be;let Jn,bn;{const e=oi(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};Jn=t("__VUE_INSTANCE_SETTERS__",n=>Se=n),bn=t("__VUE_SSR_SETTERS__",n=>An=n)}const En=e=>{const t=Se;return Jn(e),e.scope.on(),()=>{e.scope.off(),Jn(t)}},Gs=()=>{Se&&Se.scope.off(),Jn(null)};function br(e){return e.vnode.shapeFlag&4}let An=!1;function kd(e,t=!1,n=!1){t&&bn(t);const{props:i,children:s}=e.vnode,o=br(e);id(e,i,o,t),ad(e,s,n||t);const r=o?yd(e,t):void 0;return t&&bn(!1),r}function yd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vu);const{setup:i}=n;if(i){_t();const s=e.setupContext=i.length>1?Ld(e):null,o=En(e),r=Rn(i,e,0,[e.props,s]),a=ho(r);if(ft(),o(),(a||e.sp)&&!gn(e)&&er(e),a){if(r.then(Gs,Gs),t)return r.then(c=>{bn(!0);try{Vs(e,c,t)}finally{bn(!1)}}).catch(c=>{ci(c,e,0)});e.asyncDep=r}else Vs(e,r)}else Ar(e)}function Vs(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Go(t)),Ar(e)}function Ar(e,t,n){const i=e.type;e.render||(e.render=i.render||st);{const s=En(e);_t();try{Uu(e)}finally{ft(),s()}}}const Td={get(e,t){return Ae(e,"get",""),e[t]}};function Ld(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Td),slots:e.slots,emit:e.emit,expose:t}}function fi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Go(fu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}})):e.proxy}function bd(e){return K(e)&&"__vccOpts"in e}const ne=(e,t)=>hu(e,t,An);function Ad(e,t,n){try{Wn(-1);const i=arguments.length;return i===2?oe(t)&&!H(t)?zn(t)?Te(e,null,[t]):Te(e,t):Te(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&zn(n)&&(n=[n]),Te(e,t,n))}finally{Wn(1)}}const wd="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ji;const Us=typeof window<"u"&&window.trustedTypes;if(Us)try{ji=Us.createPolicy("vue",{createHTML:e=>e})}catch{}const wr=ji?e=>ji.createHTML(e):e=>e,Od="http://www.w3.org/2000/svg",Pd="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,js=lt&&lt.createElement("template"),Rd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?lt.createElementNS(Od,e):t==="mathml"?lt.createElementNS(Pd,e):n?lt.createElement(e,{is:n}):lt.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{js.innerHTML=wr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=js.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ht="transition",cn="animation",Qt=Symbol("_vtc"),Or={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pr=he({},Xo,Or),Ed=e=>(e.displayName="Transition",e.props=Pr,e),Sd=Ed((e,{slots:t})=>Ad(Su,Rr(e),t)),Rt=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ys=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Rr(e){const t={};for(const v in e)v in Or||(t[v]=e[v]);if(e.css===!1)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:l=r,appearToClass:p=a,leaveFromClass:_=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,A=Id(s),S=A&&A[0],q=A&&A[1],{onBeforeEnter:W,onEnter:G,onEnterCancelled:F,onLeave:b,onLeaveCancelled:N,onBeforeAppear:z=W,onAppear:xe=G,onAppearCancelled:ge=F}=t,V=(v,O,te,$)=>{v._enterCancelled=$,xt(v,O?p:a),xt(v,O?l:r),te&&te()},X=(v,O)=>{v._isLeaving=!1,xt(v,_),xt(v,g),xt(v,h),O&&O()},re=v=>(O,te)=>{const $=v?xe:G,j=()=>V(O,v,te);Rt($,[O,j]),qs(()=>{xt(O,v?c:o),Qe(O,v?p:a),Ys($)||Ks(O,i,S,j)})};return he(t,{onBeforeEnter(v){Rt(W,[v]),Qe(v,o),Qe(v,r)},onBeforeAppear(v){Rt(z,[v]),Qe(v,c),Qe(v,l)},onEnter:re(!1),onAppear:re(!0),onLeave(v,O){v._isLeaving=!0;const te=()=>X(v,O);Qe(v,_),v._enterCancelled?(Qe(v,h),Yi(v)):(Yi(v),Qe(v,h)),qs(()=>{v._isLeaving&&(xt(v,_),Qe(v,g),Ys(b)||Ks(v,i,q,te))}),Rt(b,[v,te])},onEnterCancelled(v){V(v,!1,void 0,!0),Rt(F,[v])},onAppearCancelled(v){V(v,!0,void 0,!0),Rt(ge,[v])},onLeaveCancelled(v){X(v),Rt(N,[v])}})}function Id(e){if(e==null)return null;if(oe(e))return[Pi(e.enter),Pi(e.leave)];{const t=Pi(e);return[t,t]}}function Pi(e){return Hp(e)}function Qe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Qt]||(e[Qt]=new Set)).add(t)}function xt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Qt];n&&(n.delete(t),n.size||(e[Qt]=void 0))}function qs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cd=0;function Ks(e,t,n,i){const s=e._endId=++Cd,o=()=>{s===e._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:a,propCount:c}=Er(e,t);if(!r)return i();const l=r+"end";let p=0;const _=()=>{e.removeEventListener(l,h),o()},h=g=>{g.target===e&&++p>=c&&_()};setTimeout(()=>{p<c&&_()},a+1),e.addEventListener(l,h)}function Er(e,t){const n=window.getComputedStyle(e),i=A=>(n[A]||"").split(", "),s=i(`${ht}Delay`),o=i(`${ht}Duration`),r=Ws(s,o),a=i(`${cn}Delay`),c=i(`${cn}Duration`),l=Ws(a,c);let p=null,_=0,h=0;t===ht?r>0&&(p=ht,_=r,h=o.length):t===cn?l>0&&(p=cn,_=l,h=c.length):(_=Math.max(r,l),p=_>0?r>l?ht:cn:null,h=p?p===ht?o.length:c.length:0);const g=p===ht&&/\b(?:transform|all)(?:,|$)/.test(i(`${ht}Property`).toString());return{type:p,timeout:_,propCount:h,hasTransform:g}}function Ws(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>zs(n)+zs(e[i])))}function zs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Yi(e){return(e?e.ownerDocument:document).body.offsetHeight}function $d(e,t,n){const i=e[Qt];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xs=Symbol("_vod"),Sr=Symbol("_vsh"),Md=Symbol(""),Nd=/(?:^|;)\s*display\s*:/;function Fd(e,t,n){const i=e.style,s=ue(n);let o=!1;if(n&&!s){if(t)if(ue(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();n[a]==null&&pn(i,a,"")}else for(const r in t)n[r]==null&&pn(i,r,"");for(const r in n){r==="display"&&(o=!0);const a=n[r];a!=null?Bd(e,r,!ue(t)&&t?t[r]:void 0,a)||pn(i,r,a):pn(i,r,"")}}else if(s){if(t!==n){const r=i[Md];r&&(n+=";"+r),i.cssText=n,o=Nd.test(n)}}else t&&e.removeAttribute("style");Xs in e&&(e[Xs]=o?i.display:"",e[Sr]&&(i.display="none"))}const Js=/\s*!important$/;function pn(e,t,n){if(H(n))n.forEach(i=>pn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Dd(e,t);Js.test(n)?e.setProperty(Gt(i),n.replace(Js,""),"important"):e[i]=n}}const Zs=["Webkit","Moz","ms"],Ri={};function Dd(e,t){const n=Ri[t];if(n)return n;let i=Ye(t);if(i!=="filter"&&i in e)return Ri[t]=i;i=yo(i);for(let s=0;s<Zs.length;s++){const o=Zs[s]+i;if(o in e)return Ri[t]=o}return t}function Bd(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(i)&&n===i}const Qs="http://www.w3.org/1999/xlink";function eo(e,t,n,i,s,o=qp(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Qs,t.slice(6,t.length)):e.setAttributeNS(Qs,t,n):n==null||o&&!Lo(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ot(n)?String(n):n)}function to(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?wr(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Lo(n):n==null&&a==="string"?(n="",r=!0):a==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function Yt(e,t,n,i){e.addEventListener(t,n,i)}function Hd(e,t,n,i){e.removeEventListener(t,n,i)}const no=Symbol("_vei");function Gd(e,t,n,i,s=null){const o=e[no]||(e[no]={}),r=o[t];if(i&&r)r.value=i;else{const[a,c]=jd(t);if(i){const l=o[t]=Kd(i,s);Yt(e,a,l,c)}else r&&(Hd(e,a,r,c),o[t]=void 0)}}const Vd=/(Once|Passive|Capture)$/,Ud=/^on:?(?:Once|Passive|Capture)$/;function jd(e){let t,n;for(;(n=e.match(Vd))&&!Ud.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Ei=0;const Yd=Promise.resolve(),qd=()=>Ei||(Yd.then(()=>Ei=0),Ei=Date.now());function Kd(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(H(s)){const o=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{o.call(i),i._stopped=!0};const r=s.slice(),a=[i];for(let c=0;c<r.length&&!i._stopped;c++){const l=r[c];l&&Ge(l,t,5,a)}}else Ge(s,t,5,[i])};return n.value=e,n.attached=qd(),n}const io=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wd=(e,t,n,i,s,o)=>{const r=s==="svg";t==="class"?$d(e,i,r):t==="style"?Fd(e,n,i):ni(t)?ii(t)||Gd(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zd(e,t,i,r))?(to(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&eo(e,t,i,r,o,t!=="value")):e._isVueCE&&(Xd(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(i)))?to(e,Ye(t),i,o,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),eo(e,t,i,r))};function zd(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&io(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return io(t)&&ue(n)?!1:t in e}function Xd(e,t){const n=e._def.props;if(!n)return!1;const i=Ye(t);return Array.isArray(n)?n.some(s=>Ye(s)===i):Object.keys(n).some(s=>Ye(s)===i)}const Ir=new WeakMap,Cr=new WeakMap,Zn=Symbol("_moveCb"),so=Symbol("_enterCb"),Jd=e=>(delete e.props.mode,e),Zd=Jd({name:"TransitionGroup",props:he({},Pr,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ms(),i=zo();let s,o;return nr(()=>{if(!s.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!i_(s[0].el,n.vnode.el,r)){s=[];return}s.forEach(e_),s.forEach(t_);const a=s.filter(n_);Yi(n.vnode.el),a.forEach(c=>{const l=c.el,p=l.style;Qe(l,r),p.transform=p.webkitTransform=p.transitionDuration="";const _=l[Zn]=h=>{h&&h.target!==l||(!h||h.propertyName.endsWith("transform"))&&(l.removeEventListener("transitionend",_),l[Zn]=null,xt(l,r))};l.addEventListener("transitionend",_)}),s=[]}),()=>{const r=ee(e),a=Rr(r);let c=r.tag||ke;if(s=[],o)for(let l=0;l<o.length;l++){const p=o[l];p.el&&p.el instanceof Element&&!p.el[Sr]&&(s.push(p),Dt(p,Tn(p,a,i,n)),Ir.set(p,$r(p.el)))}o=t.default?_s(t.default()):[];for(let l=0;l<o.length;l++){const p=o[l];p.key!=null&&Dt(p,Tn(p,a,i,n))}return Te(c,null,o)}}}),Qd=Zd;function e_(e){const t=e.el;t[Zn]&&t[Zn](),t[so]&&t[so]()}function t_(e){Cr.set(e,$r(e.el))}function n_(e){const t=Ir.get(e),n=Cr.get(e),i=t.left-n.left,s=t.top-n.top;if(i||s){const o=e.el,r=o.style,a=o.getBoundingClientRect();let c=1,l=1;return o.offsetWidth&&(c=a.width/o.offsetWidth),o.offsetHeight&&(l=a.height/o.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(l)||l===0)&&(l=1),Math.abs(c-1)<.01&&(c=1),Math.abs(l-1)<.01&&(l=1),r.transform=r.webkitTransform=`translate(${i/c}px,${s/l}px)`,r.transitionDuration="0s",e}}function $r(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function i_(e,t,n){const i=e.cloneNode(),s=e[Qt];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&i.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(i);const{hasTransform:r}=Er(i);return o.removeChild(i),r}const oo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Fn(t,n):t};function s_(e){e.target.composing=!0}function ro(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mn=Symbol("_assign"),Nn=Symbol("_initialValue");function Si(e,t,n){return t&&(e=e.trim()),n&&(e=es(e)),e}const o_={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e.parentNode&&(e.type==="text"?e[Nn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Nn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Mn]=oo(s);const o=i||s.props&&s.props.type==="number";Yt(e,t?"change":"input",r=>{r.target.composing||e[Mn](Si(e.value,n,o))}),(n||o)&&Yt(e,"change",()=>{e.value=Si(e.value,n,o)}),t||(Yt(e,"compositionstart",s_),Yt(e,"compositionend",ro),Yt(e,"change",ro))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const s=t??"",o=e[Nn];delete e[Nn],o!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==o?e[Mn](Si(e.value,n,i)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:o}},r){if(e[Mn]=oo(r),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?es(e.value):e.value,c=t??"";if(a===c)return;const l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===c)||(e.value=c)}},r_=["ctrl","shift","alt","meta"],a_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>r_.some(n=>e[`${n}Key`]&&!t.includes(n))},je=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(s,...o)=>{for(let r=0;r<t.length;r++){const a=a_[t[r]];if(a&&a(s,t))return}return e(s,...o)})},c_=he({patchProp:Wd},Rd);let ao;function l_(){return ao||(ao=ld(c_))}const p_=(...e)=>{const t=l_().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=d_(i);if(!s)return;const o=t._component;!K(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,u_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t};function u_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function d_(e){return ue(e)?document.querySelector(e):e}const en={MIN:0,MAX:100},vn={BASE_DECAY:3,PRESSURE_COEF:2,RECORDER_RELIEF:3,INITIATIVE_COST_BASE:1,INITIATIVE_COST_STEP:1},Gn={T1:50,T2:30,T3:15},co={DEFAULT:8,PANIC:4},qi={DESTROY_EVIDENCE_CAP:-20,HUSH_MONEY_EVIDENCE_CAP:30},ct={EV_WEIGHT:5,OPINION_BASE:30,OPINION_EV_COEF:2,OPINION_NEG_COST:8,COMPOSURE_FIXED:60,RISK_BASE:50,RISK_EV_RELIEF:2,RISK_NEG_ADD:10,TRUE_EV_MIN:15},Ii={PLAYBOOK_EVIDENCE:5,NOTARY_RISK:-5,CALM_BREATH_COMPOSURE:30};function hn(e){return Math.min(en.MAX,Math.max(en.MIN,e))}function vs(e){return{...e,flags:new Set(e.flags),items:new Set(e.items)}}function __(e,t,n,i){let s=n;return t.items.has("item_calm_breathing")&&e.tag==="BREATH"&&(s={...s,composure:Ii.CALM_BREATH_COMPOSURE}),t.items.has("item_hr_playbook")&&i===3&&e.initiative===3&&(s={...s,evidence:(s.evidence??0)+Ii.PLAYBOOK_EVIDENCE}),t.items.has("item_notary_habit")&&i===4&&e.initiative===3&&(s={...s,risk:(s.risk??0)+Ii.NOTARY_RISK}),s}function f_(e){return e.tag==="PHYSICAL"?{forcedEnding:e.next}:null}function g_(e,t){switch(t){case"G_NEG_DESTROYED_EVIDENCE":e.evidenceCap=en.MAX+qi.DESTROY_EVIDENCE_CAP;break;case"G_NEG_HUSH_MONEY":e.evidence=Math.min(e.evidence,qi.HUSH_MONEY_EVIDENCE_CAP);break}}function lo(e,t,n=1,i=0){const s=vs(e),o=__(t,s,t.effects??{},n),r=["evidence","opinion","composure","risk"];for(const a of r){const c=o[a];c!==void 0&&(s[a]+=c)}if(t.initiative>=2&&t.tag!=="BREATH"){const a=(t.initiative-1)*(vn.INITIATIVE_COST_BASE+vn.INITIATIVE_COST_STEP*Math.floor(i/2));s.composure-=a}s.evidence>s.evidenceCap&&(s.evidence=s.evidenceCap);for(const a of r)s[a]=hn(s[a]);for(const a of o.addFlags??[])s.flags.add(a),g_(s,a);for(const a of o.removeFlags??[])s.flags.delete(a);for(const a of o.addItems??[])s.items.add(a);return s.turn+=1,s}function m_(e,t){const n=vs(e),i=vn.BASE_DECAY+t.pressure*vn.PRESSURE_COEF,s=n.items.has("item_recorder")?vn.RECORDER_RELIEF:0;return n.composure=hn(n.composure-i+s),n}class de extends Error{constructor(t){super(t),this.name="ContentError"}}function Mr(e,t){return{evidence:e.evidence,opinion:e.opinion,composure:e.composure,risk:e.risk,dEvidence:e.evidence-t.evidence,dOpinion:e.opinion-t.opinion,dComposure:e.composure-t.composure,dRisk:e.risk-t.risk,flags:e.flags,items:e.items,turn:e.turn}}const v_=new Set(["evidence","opinion","composure","risk","dEvidence","dOpinion","dComposure","dRisk","turn"]);function h_(e){const t=[];let n=0;for(;n<e.length;){const i=e[n];if(i===" "||i==="	"||i===`
`||i==="\r"){n+=1;continue}if(i>="0"&&i<="9"){let r=n;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:Number(e.slice(n,r))}),n=r;continue}if(/[A-Za-z_]/.test(i)){let r=n;for(;r<e.length&&/[A-Za-z0-9_]/.test(e[r]);)r+=1;t.push({t:"id",v:e.slice(n,r)}),n=r;continue}if(i==="'"||i==='"'){let r=n+1;for(;r<e.length&&e[r]!==i;)r+=1;if(r>=e.length)throw new de(`unterminated string in condition: ${e}`);t.push({t:"str",v:e.slice(n+1,r)}),n=r+1;continue}const s=e.slice(n,n+2);if(s==="&&"||s==="||"||s===">="||s==="<="||s==="=="||s==="!="){t.push({t:"op",v:s}),n+=2;continue}const o=e[n+1];if(i==="-"&&o!==void 0&&o>="0"&&o<="9"&&(t.length===0||t[t.length-1].t==="op")){let r=n+1;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:-Number(e.slice(n+1,r))}),n=r;continue}if(i===">"||i==="<"||i==="!"||i==="("||i===")"){t.push({t:"op",v:i}),n+=1;continue}throw new de(`illegal character '${i}' in condition: ${e}`)}return t}class x_{constructor(t){ye(this,"pos",0);this.tokens=t}peek(){return this.tokens[this.pos]}next(){const t=this.tokens[this.pos];if(t===void 0)throw new de("unexpected end of condition");return this.pos+=1,t}eatOp(t){const n=this.next();if(n.t!=="op"||n.v!==t)throw new de(`expected '${t}', got '${n.t==="op"?n.v:n.t}'`)}parse(){const t=this.parseOr();if(this.pos!==this.tokens.length){const n=this.peek();throw new de(`unexpected trailing token '${n?n.t==="op"?n.v:n.t:"?"}'`)}return t}parseOr(){let t=this.parseAnd();for(;this.matchOp("||");)t={kind:"binary",op:"||",left:t,right:this.parseAnd()};return t}parseAnd(){let t=this.parseCompare();for(;this.matchOp("&&");)t={kind:"binary",op:"&&",left:t,right:this.parseCompare()};return t}parseCompare(){const t=this.parseUnary(),n=this.peek();return n!==void 0&&n.t==="op"&&[">=",">","<=","<","==","!="].includes(n.v)?(this.pos+=1,{kind:"compare",op:n.v,left:t,right:this.parseUnary()}):t}parseUnary(){return this.matchOp("!")?{kind:"unary",op:"!",operand:this.parseUnary()}:this.parseAtom()}parseAtom(){const t=this.next();if(t.t==="num")return{kind:"num",value:t.v};if(t.t==="str")throw new de("string literal only allowed as function argument");if(t.t==="op"&&t.v==="("){const n=this.parseOr();return this.eatOp(")"),n}if(t.t==="id"){if(t.v==="has"||t.v==="hasItem"){this.eatOp("(");const n=this.next();if(n.t!=="str")throw new de(`'${t.v}' expects a quoted string argument`);return this.eatOp(")"),{kind:"call",fn:t.v,arg:n.v}}if(!v_.has(t.v))throw new de(`unknown identifier '${t.v}' in condition`);return{kind:"var",name:t.v}}throw new de(`unexpected operator '${t.v}' in condition`)}matchOp(t){const n=this.peek();return n!==void 0&&n.t==="op"&&n.v===t?(this.pos+=1,!0):!1}}const po=new Map;function k_(e){const t=po.get(e);if(t!==void 0)return t;const n=new x_(h_(e)).parse();return po.set(e,n),n}function qt(e,t){switch(e.kind){case"num":return e.value!==0;case"var":return Nr(e.name,t)!==0;case"call":return e.fn==="has"?t.flags.has(e.arg):t.items.has(e.arg);case"unary":return!qt(e.operand,t);case"binary":return e.op==="&&"?qt(e.left,t)&&qt(e.right,t):qt(e.left,t)||qt(e.right,t);case"compare":{const n=uo(e.left,t),i=uo(e.right,t);switch(e.op){case">=":return n>=i;case">":return n>i;case"<=":return n<=i;case"<":return n<i;case"==":return n===i;case"!=":return n!==i}}}}function uo(e,t){if(e.kind==="num")return e.value;if(e.kind==="var")return Nr(e.name,t);throw new de("comparison operands must be numbers")}function Nr(e,t){switch(e){case"evidence":return t.evidence;case"opinion":return t.opinion;case"composure":return t.composure;case"risk":return t.risk;case"dEvidence":return t.dEvidence;case"dOpinion":return t.dOpinion;case"dComposure":return t.dComposure;case"dRisk":return t.dRisk;case"turn":return t.turn;default:throw new de(`unknown identifier '${e}'`)}}function Fr(e,t){return e.trim()==="true"?!0:qt(k_(e),t)}function y_(e){return e<Gn.T3||e<Gn.T2?2:e<Gn.T1?1:0}function T_(e,t){const n=i=>{let s=0;const o=`${t}/${i}`;for(let r=0;r<o.length;r+=1)s=Math.imul(s,31)+o.charCodeAt(r)|0;return(s>>>1&2147483647)/2147483648};return[...e].sort((i,s)=>n(i.id)-n(s.id))}function _o(e,t,n=new Set){const i=e.options.filter(a=>a.oncePerNode===!0&&n.has(a.id)?!1:a.requires===void 0?!0:Fr(a.requires,Mr(t,L_))),s=y_(t.composure),r=e.impulsePool.filter(a=>t.composure<a.unlockBelow).slice(0,s);return T_([...i,...r],e.id)}const L_={evidence:0,opinion:0,composure:0,risk:0};function b_(e,t){return t.composure<Gn.T3?co.PANIC:e.timer??co.DEFAULT}function A_(e,t,n){if(t.flags.has("FORCED_F")){const s=e.endings.find(o=>o.condition==="FORCED");if(s===void 0)throw new de(`level ${e.id} has FORCED_F state but no FORCED ending`);return s}const i=Mr(t,n);for(const s of e.endings)if(s.condition!=="FORCED"&&Fr(s.condition,i))return s;throw new de(`level ${e.id}: no ending condition matched (missing 'true' fallback?)`)}const w_="__END__";function Ci(e){return e.type==="choice"}class hs{constructor(t,n){ye(this,"nodeMap");ye(this,"endingMap");ye(this,"initMeter");ye(this,"current");ye(this,"currentNodeId");ye(this,"usedThisVisit",new Set);this.level=t,this.nodeMap=new Map(t.nodes.map(i=>[i.id,i])),this.endingMap=new Map(t.endings.map(i=>[i.id,i])),this.initMeter=t.initState,this.current=this.buildInitialState(n),this.currentNodeId=t.entryNode}buildInitialState(t){const n=new Set([...t.flags].filter(o=>o.startsWith("G_"))),i=n.has("G_NEG_DESTROYED_EVIDENCE")?en.MAX+qi.DESTROY_EVIDENCE_CAP:en.MAX,s=n.has("G_NEG_ASSAULT")?15:0;return{evidence:this.level.initState.evidence,opinion:this.level.initState.opinion,composure:this.level.initState.composure,risk:this.level.initState.risk+s,flags:n,items:new Set(t.items),turn:0,evidenceCap:i}}get state(){return this.current}start(){return this.advanceFrom(this.currentNodeId)}choose(t){const n=this.getNode(this.currentNodeId);if(!Ci(n))throw new de(`choose() called on non-choice node ${n.id} in level ${this.level.id}`);const s=_o(n,this.current,this.usedThisVisit).find(o=>o.id===t);if(s===void 0)throw new de(`option '${t}' not available at node ${n.id} (level ${this.level.id})`);return this.applyChoice(n,s)}timeout(){const t=this.getNode(this.currentNodeId);if(!Ci(t))throw new de(`timeout() called on non-choice node ${t.id} in level ${this.level.id}`);const n=t.options.find(i=>i.id===t.timeoutOption);if(n===void 0)throw new de(`timeoutOption '${t.timeoutOption}' not found in node ${t.id}`);return this.applyChoice(t,n)}getNode(t){const n=this.nodeMap.get(t);if(n===void 0)throw new de(`node not found: ${t} (level ${this.level.id})`);return n}applyChoice(t,n){const i=f_(n);return i!==null?(this.current=lo(this.current,n,this.level.act,t.pressure),this.current.flags.add("FORCED_F"),this.current.flags.add("G_NEG_ASSAULT"),this.finishWith(i.forcedEnding)):(n.oncePerNode===!0&&this.usedThisVisit.add(n.id),this.current=lo(this.current,n,this.level.act,t.pressure),this.current=m_(this.current,t),this.advanceFrom(n.next))}advanceFrom(t){if(t===w_)return this.finishWith(null);let n=t;for(let i=0;i<O_;i+=1){const s=this.endingMap.get(n);if(s!==void 0)return this.finishWith(s.id);const o=this.getNode(n);return Ci(o)?(n!==this.currentNodeId&&(this.usedThisVisit=new Set),this.currentNodeId=o.id,{type:"options",options:_o(o,this.current,this.usedThisVisit),timer:b_(o,this.current),timeoutOptionId:o.timeoutOption,prompt:o.prompt,pressure:o.pressure,nodeId:o.id}):(this.currentNodeId=o.id,{type:"node",node:o})}throw new de(`node chain too deep at ${n} (level ${this.level.id})`)}proceed(){const t=this.getNode(this.currentNodeId);if(t.next===void 0)throw new de(`node ${t.id} has no next (level ${this.level.id})`);return this.advanceFrom(t.next)}finishWith(t){const n=t!==null?this.endingMap.get(t):void 0;if(t!==null&&n===void 0)throw new de(`ending not found: ${t} (level ${this.level.id})`);const i=vs(this.current);return{type:"ending",ending:n!==void 0?n:A_(this.level,this.current,this.initMeter),state:i}}static simulate(t,n,i){const s=new hs(t,n);let o=s.start(),r=0;for(;;){if(o.type==="ending")return{rank:o.ending.rank,state:o.state};if(o.type==="node"){o=s.proceed();continue}if(o.type==="options"){const a=i[r];if(r+=1,a===void 0)throw new de(`simulate path exhausted at node in level ${t.id}`);o=s.choose(a);continue}}}}const O_=200,Dr="poju_shilu_save_v1";function Ki(){return{version:1,flags:[],items:[],levelResults:{},cards:[],settings:{mode:"NORMAL",sound:!0}}}const Qn=globalThis.localStorage,Br=typeof Qn<"u"&&Qn!==null;function P_(){if(!Br)return Ki();const e=Qn.getItem(Dr);return e===null?Ki():JSON.parse(e)}function R_(e){Br&&Qn.setItem(Dr,JSON.stringify(e))}const E_={L01:{flag:"G_EV_SUBWAY",minRank:["S","A"]},L02:{flag:"G_EV_ELEVATOR",minRank:["S","A"]},L03:{flag:"G_EV_MALL",minRank:["S","A"]},L04:{flag:"G_EV_NIGHTWALK",minRank:["S","A"]},L05:{flag:"G_EV_GYM",minRank:["S","A"]},L06:{flag:"G_EV_BETROTHAL",minRank:["S","A"]},L07:{flag:"G_EV_TRANSFER",minRank:["S","A"]},L08:{flag:"G_EV_PATERNITY",minRank:["S","A"]},L09:{flag:"G_EV_PRESERVATION",minRank:["S","A"]},L10:{flag:"G_EV_PROTECTION_ORDER",minRank:["S","A"]},L11:{flag:"G_EV_HR_WRITTEN",minRank:["S","A"]},L12:{flag:"G_EV_EMAIL_CHAIN",minRank:["S","A"]},L13:{flag:"G_EV_FULL_AUDIO",minRank:["S","A"]},L14:{flag:"G_EV_SUSPENSION",minRank:["S","A"]},L15:{flag:"G_EV_EXTORTION",minRank:["S","A"]},L16:{flag:"G_EV_ORIGINAL_CLIP",minRank:["S","A"]},L17:{flag:"G_EV_DOXX_NOTARY",minRank:["S","A"]},L18:{flag:"G_EV_LIVE_RECORD",minRank:["S","A"]},L19:{flag:"G_EV_PLATFORM",minRank:["S","A"]}},S_={L02:"G_NEG_DESTROYED_EVIDENCE",L07:"G_NEG_HUSH_MONEY",L10:"L10_VIOLATED",L13:"G_NEG_APOLOGY_LETTER",L17:"G_NEG_DOXXED_BACK"};function I_(e,t){switch(e){case"L01":return t==="S"||t==="A"?["item_recorder"]:[];case"L02":return["item_shen_card"];case"L08":return t==="S"?["item_calm_breathing"]:[];case"L11":return t==="S"||t==="A"?["item_hr_playbook"]:[];case"L16":return t==="S"||t==="A"?["item_notary_habit"]:[];default:return[]}}function C_(e,t,n,i,s){const o={...e,flags:[...e.flags],items:[...e.items],levelResults:{...e.levelResults},cards:[...e.cards]},r=new Set(o.flags);for(const g of i.flags)g.startsWith("G_")&&r.add(g);const a=E_[t];if(a!==void 0&&a.minRank.includes(n.rank)){const g=S_[t];g!==void 0&&(r.has(g)||i.flags.has(g))||r.add(a.flag)}const c=I_(t,n.rank),l=new Set(o.items);for(const g of c)l.add(g);n.unlock!==void 0&&!o.cards.includes(n.unlock)&&o.cards.push(n.unlock);const p=s==null?void 0:s.now,_={S:5,A:4,B:3,C:2,F:1},h=o.levelResults[t];return h===void 0||_[n.rank]>_[h.rank]?o.levelResults[t]={rank:n.rank,endingId:n.id,ts:p}:_[n.rank]<_[h.rank]&&(o.levelResults[t]={...h,lastRank:n.rank,lastEndingId:n.id,lastTs:p}),o.flags=[...r].filter(g=>g.startsWith("G_")),o.items=[...l],o}const $_={G_NEG_ASSAULT:40,G_NEG_DOXXED_BACK:35,G_NEG_DESTROYED_EVIDENCE:30,G_NEG_APOLOGY_LETTER:25,G_NEG_HUSH_MONEY:20,G_NEG_LIED:15,G_NEG_FLED:10};function Hr(e){return e.startsWith("G_NEG_")}function Gr(e){let t=0;for(const n of e)n.startsWith("G_EV_")&&(t+=1);return t}function Wi(e){let t=0;for(const n of e)Hr(n)&&(t+=1);return t}function M_(e){const t=new Set(e.flags),n=Gr(t),s=[...t].filter(Hr).reduce((o,r)=>o+($_[r]??0),0);return{evidence:hn(n*ct.EV_WEIGHT-s),opinion:hn(ct.OPINION_BASE+n*ct.OPINION_EV_COEF-Wi(t)*ct.OPINION_NEG_COST),composure:ct.COMPOSURE_FIXED,risk:hn(ct.RISK_BASE-n*ct.RISK_EV_RELIEF+Wi(t)*ct.RISK_NEG_ADD),flags:t,items:new Set(e.items),turn:0,evidenceCap:en.MAX}}function N_(e,t){const n=Gr(new Set(e.flags)),i=Wi(new Set(e.flags));return n>=ct.TRUE_EV_MIN&&i===0&&t==="S"?"TRUE":t==="S"||t==="A"?"WIN":"COSTLY"}const Vr="L01",Ur="第01关 · 地铁三分钟",jr=1,Yr={evidence:20,opinion:50,composure:80,risk:10},qr=["hero","npc_l01_woman","crowd","officer_lin"],Kr="n_01",Wr="card_law_L01",zr=["T1","T2"],Xr=[{id:"n_01",type:"cutscene",pressure:1,script:`三点十四分，三号线。车厢是满的，不算挤。
列车进站前一次急刹，所有人往前倾了半步。
你的手一直在门边的扶杆上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l01_woman",emotion:"shout",text:"谁摸我？！——就是你。你别动。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"半节车厢的人都转过头了。她的手指停在离你鼻尖十公分的地方。",timer:12,timeoutOption:"opt_freeze",options:[{id:"opt_hands_up",text:"（把双手举到胸前）我的手一直在扶杆上。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:-5,risk:-10,addFlags:["L01_HANDS_VISIBLE"]},next:"n_04"},{id:"opt_explain",text:"你误会了，刚才急刹车，大家都往前挤——",tag:"NEUTRAL",aggression:1,initiative:1,effects:{evidence:5,opinion:-5,composure:-10,risk:10},next:"n_04"},{id:"opt_freeze",text:"（愣住了，一个字也说不出来）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-5,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_leave",text:"（转身往车门那边走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-20,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（手机一部接一部举起来了。有人小声说：拍下来拍下来。）",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"她压低了声音，只有你们两个人听得见：「私了。两万。不然我现在就报警。」",timer:12,timeoutOption:"opt_hesitate",options:[{id:"opt_call_first",text:"（掏出手机）110 吗，三号线车厢，有人指认我。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10,addFlags:["L01_CALLED_POLICE_FIRST"]},next:"n_06"},{id:"opt_agree_police",text:"行，你报。我在这儿等着，哪儿也不去。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:10,opinion:10,composure:5,risk:-5},next:"n_06"},{id:"opt_pay",text:"两万是吧。我转你，别闹了。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:15,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_hesitate",text:"……能不能少点？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[{id:"imp_curse_01",text:"你他妈讹上瘾了是吧。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_06"}]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l01_woman",emotion:"perform",text:"（转向车厢，音量陡然拔高）大家都看看啊！他还想跑！",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她一句话说三遍，每一遍都对着不同的镜头。",timer:12,timeoutOption:"opt_pay_now",options:[{id:"opt_refuse_settle",text:"不私了。等民警来，该怎么查怎么查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,risk:-10},next:"n_08"},{id:"opt_ask_price",text:"你刚才说多少来着？大点声，我这边在录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:-5,composure:-5,risk:5,addFlags:["L01_PRICE_ON_RECORD"]},next:"n_08"},{id:"opt_pay_now",text:"（点开转账页面）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:10,risk:20,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_08"},{id:"opt_mock",text:"两万？你这价开得挺熟啊。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-15,composure:-5,risk:15},next:"n_08"}],impulsePool:[{id:"imp_curse_02",text:"你演够了没有？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08"},{id:"imp_shove_07",text:"（一把推开她举着的手机）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:5,speaker:"npc_l01_woman",emotion:"perform",text:"（举起手机怼到你脸前）你看镜头。你敢不敢看镜头。",next:"n_09"},{id:"n_09",type:"choice",pressure:5,prompt:"镜头离你的脸不到二十公分。车厢里已经有人开了直播。",timer:12,timeoutOption:"opt_silent",options:[{id:"opt_let_her_talk",text:"你把刚才那个数字，对着镜头再说一遍。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:10,opinion:20,composure:5,risk:-5},next:"n_10"},{id:"opt_silent",text:"（不说话。站在原地，录音开着）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_10"},{id:"opt_appeal_crowd",text:"大家都听到了！她一直在管我要钱！",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-10,composure:-10,risk:10},next:"n_10"},{id:"opt_block_camera",text:"（伸手去挡她的镜头）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_10"},{id:"opt_breath_l01",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_shout_09",text:"你他妈到底想干什么！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_shove_09",text:"（一把推开她）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:3,script:`列车停在站台上没有再走。
两名民警从车头方向挤过来。走在前面的那位胸前的执法记录仪亮着红灯。
「都别动。谁报的警？」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭翻开笔录本，笔尖悬在纸上。她看着你，也看着她，眼神完全一样。",timer:12,timeoutOption:"opt_emotional",options:[{id:"opt_demand_footage",text:"麻烦先调这节车厢的监控，越快越好。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:5,risk:-5,addFlags:["L01_DEMANDED_FOOTAGE"]},next:"n_12"},{id:"opt_factual",text:"三点十四分上车，一直站在门边扶杆。有监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:5,composure:10,risk:-10},next:"n_12"},{id:"opt_accuse",text:"你们先查她。她刚才管我要两万。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:5,opinion:-10,composure:-5,risk:10},next:"n_12"},{id:"opt_emotional",text:"我真没有！你们要相信我啊！",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-5,opinion:-10,composure:-10,risk:5,addFlags:["L01_F_BEHAVIOR"]},next:"n_12"}],impulsePool:[{id:"imp_shove_11",text:"（冲上去抓她）你跟警察说清楚！",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`站务室。屏幕上是三号线中部车厢的俯视角。
林昭把进度条往回拖了三分钟。`,next:"__END__"}],Jr=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 互殴",script:`你的手推在她身上。她后退半步，尖叫。
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
或者说，它能说明的那件事，对你不利。`},{id:"e_f_rank",rank:"F",condition:"has('L01_F_BEHAVIOR')",title:"翻车 · 说不清了",script:`你解释得越多，看起来越像在辩解。
笔录上你的陈述前后差了两处，一处是时间，一处是手的位置。
你自己都记不清了——因为你从来没想过需要记这个。

视频当晚就上了热搜第七。
标题里有你公司的名字。`},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 说不清了",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`}],F_={id:Vr,title:Ur,act:jr,initState:Yr,cast:qr,entryNode:Kr,lawyerCard:Wr,satireTargets:zr,nodes:Xr,endings:Jr},D_=Object.freeze(Object.defineProperty({__proto__:null,act:jr,cast:qr,default:F_,endings:Jr,entryNode:Kr,id:Vr,initState:Yr,lawyerCard:Wr,nodes:Xr,satireTargets:zr,title:Ur},Symbol.toStringTag,{value:"Module"})),Zr="L02",Qr="第02关 · 电梯里的镜头",ea=1,ta={evidence:25,opinion:45,composure:75,risk:10},na=["hero","npc_l02_woman","crowd","shen_li","officer_lin"],ia="n_01",sa="card_law_L02",oa=["T1","T2"],ra=[{id:"n_01",type:"cutscene",pressure:1,script:`写字楼，十八层下行。
电梯里六个人。你刚把手机从口袋里摸出来看时间。
数字停在 18:41。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l02_woman",emotion:"cold",text:"你刚才，是不是在拍我。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"电梯还有九层。另外四个人都低头看着自己的鞋。",timer:12,timeoutOption:"opt_hand_over",options:[{id:"opt_show_lock",text:"（把手机举起，屏幕朝外）锁屏的。我不解锁。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_deny_calm",text:"没有。我拿出来看时间。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:-5,risk:-5},next:"n_04"},{id:"opt_annoyed",text:"你说话过过脑子。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"},{id:"opt_hand_over",text:"（把手机直接递过去）你自己看。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:5,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（电梯到一层。门开了，前台和几个等电梯的人转过头来。没人出去。）",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她挡在门口：「解锁给我看。不然我现在就报警。」",timer:12,timeoutOption:"opt_unlock",options:[{id:"opt_refuse_search",text:"解锁不行。你要报警现在就报，手机一直在我手上。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15,addFlags:["L02_REFUSED_SEARCH"]},next:"n_06"},{id:"opt_call_self",text:"（自己拨号）110 吗，这边有个纠纷。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_unlock",text:"（解锁递过去）看吧，我没什么好藏的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:15},next:"n_06"},{id:"opt_delete",text:"（当场删掉相册最近几张）删了，行了吧。",tag:"DESTROY_EVIDENCE",aggression:0,initiative:1,effects:{evidence:-30,opinion:-15,composure:5,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE","L02_F_BEHAVIOR"]},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l02_woman",emotion:"calm_press",text:"你越是不给看，越说明有问题。你在怕什么？",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她说得很慢，很平静。大堂里已经站了十几个人。",timer:12,timeoutOption:"opt_over_explain",options:[{id:"opt_refuse_frame",text:"这个问题我不回答。等民警来，当他面查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_08"},{id:"opt_silent_wait",text:"（不接话，站着等）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_08"},{id:"opt_counter",text:"你凭什么怀疑我？你有证据吗？",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_08"},{id:"opt_over_explain",text:"我真没拍！我可以发誓！我平时根本不……",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-15,composure:-10,risk:5},next:"n_08"},{id:"opt_breath_l02",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l02",text:"你他妈有完没完。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"}]},{id:"n_08",type:"cutscene",pressure:3,script:`一个穿深色西装的女人从旋转门进来，脚步慢下来，看了两秒。
她走过来，从名片夹里抽出一张，递给你。
「沈骊。十一楼，律所。需要的话叫我一声。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"名片停在你和她之间。对方的表情第一次有了变化。",timer:12,timeoutOption:"opt_take_card",options:[{id:"opt_accept_help",text:"麻烦您。等民警来的时候，能请您在场吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:10,composure:15,risk:-10},next:"n_10"},{id:"opt_take_card",text:"（接过名片）谢谢。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:5,composure:10,risk:-5},next:"n_10"},{id:"opt_refuse_help",text:"不用了，我自己能说清楚。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-10,opinion:-5,composure:-5,risk:10},next:"n_10"},{id:"opt_vent",text:"您评评理，这不是讹人吗！",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:10},next:"n_10"}],impulsePool:[{id:"imp_shove_l02",text:"（伸手去推开挡在门口的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`民警来了。查验在两个人面前进行：相册按时间倒序翻，最近一张是三天前的猫。
执法记录仪红灯亮着。
她往门口挪了半步。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭抬头：「查验完了。双方还有什么要说的？」",timer:12,timeoutOption:"opt_let_go",options:[{id:"opt_request_record",text:"麻烦把查验结果写进笔录。她刚才的话我也录了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_factual_02",text:"我没别的要求，按流程走就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:10,risk:-5},next:"n_12"},{id:"opt_demand_apology",text:"她得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_12"},{id:"opt_let_go",text:"算了，查清楚就行，让她走吧。",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:5,risk:10},next:"n_12"}],impulsePool:[{id:"imp_shove_l02b",text:"（一把拽住要走的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`大堂的人散了。你低头看手里那张名片。
烫金的字，边角很硬。`,next:"__END__"}],aa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你先动的手",script:`大堂的监控拍得很清楚：她站着，你伸的手。

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
可你也说不清，自己到底被看走了什么。`},{id:"e_f_rank",rank:"F",condition:"has('L02_F_BEHAVIOR')",title:"翻车 · 删了就说不清了",script:`你当着十几个人的面删了相册。

这一下，事情从「有没有拍」变成了「删了什么」。
民警来的时候，第一个问题是：刚才删的是什么？
你说没什么。

没什么——是这世上最没用的一句辩解。`,unlock:"card_L02_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 删了就说不清了",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L02_F"}],B_={id:Zr,title:Qr,act:ea,initState:ta,cast:na,entryNode:ia,lawyerCard:sa,satireTargets:oa,nodes:ra,endings:aa},H_=Object.freeze(Object.defineProperty({__proto__:null,act:ea,cast:na,default:B_,endings:aa,entryNode:ia,id:Zr,initState:ta,lawyerCard:sa,nodes:ra,satireTargets:oa,title:Qr},Symbol.toStringTag,{value:"Module"})),ca="L03",la="第03关 · 爸爸和女儿",pa=1,ua={evidence:15,opinion:25,composure:60,risk:30},da=["hero","npc_l03_daughter","npc_l03_woman","crowd","officer_lin"],_a="n_01",fa="card_law_L03",ga=["T1","T2","T3"],ma=[{id:"n_01",type:"cutscene",pressure:1,script:`周六下午，商场三楼，玩具区门口。
六岁的陈念看上了一个娃娃，你说家里已经有三个了。
她把手从你手里抽出来，坐在地上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l03_daughter",emotion:"cry",text:"我不要跟你走！",next:"n_03"},{id:"n_03",type:"dialogue",pressure:3,speaker:"npc_l03_woman",emotion:"alarmed",text:"（挡在你和孩子中间）这是你孩子吗？",next:"n_04"},{id:"n_04",type:"choice",pressure:3,prompt:"她的手已经搭在陈念肩上。周围三四个人停下了脚步。",timer:12,timeoutOption:"opt_pull_away",options:[{id:"opt_squat_down",text:"（蹲下来看着女儿）爸爸在这儿。你跟阿姨说，我是谁？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_05"},{id:"opt_show_id",text:"（掏手机）出生证明照片在这儿，户口本也有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_05"},{id:"opt_annoyed",text:"关你什么事？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_05"},{id:"opt_pull_away",text:"（拉起女儿快步往扶梯走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-25,composure:-5,risk:15,addFlags:["G_NEG_FLED","L03_F_BEHAVIOR"]},next:"n_05"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（两个男人站到了扶梯口。有人说：先别让他走。）",next:"n_06"},{id:"n_06",type:"choice",pressure:4,prompt:"十几个人围了过来。陈念还在哭，声音更大了。",timer:12,timeoutOption:"opt_push_through",options:[{id:"opt_call_police_self",text:"（拨号，开免提）我在商场三楼，有人认为我拐孩子，请你们来。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5,addFlags:["L03_CALLED_POLICE_FIRST"]},next:"n_07"},{id:"opt_call_wife",text:"（给孩子妈妈打视频，把镜头对准女儿）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-5},next:"n_07"},{id:"opt_stay_put",text:"我不走。我在这儿等警察。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:15,composure:5,risk:-5},next:"n_07"},{id:"opt_push_through",text:"（抱起孩子往人群外挤）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:5,speaker:"crowd",emotion:"neutral",text:"（七八部手机举起来。有人喊：录下来，别让他跑了！）",next:"n_08"},{id:"n_08",type:"choice",pressure:5,prompt:"陈念被人群吓到了，扑过来抱住你的腿，哭得喘不上气。",timer:12,timeoutOption:"opt_beg",options:[{id:"opt_hold_child",text:"（把她抱起来，背对人群）不怕。爸爸在这儿，哪儿也不去。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:10,opinion:20,composure:15,risk:-10},next:"n_09"},{id:"opt_let_record",text:"都拍。从头拍，别剪。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_09"},{id:"opt_beg",text:"求求你们，这真是我女儿，你们别吓着她……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-10,composure:-15,risk:10},next:"n_09"},{id:"opt_yell",text:"你们谁敢碰我孩子！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:20},next:"n_09"},{id:"opt_ally_l03",text:"（掏出那张名片，当场拨过去）沈律师，我在商场三楼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09"}],impulsePool:[{id:"imp_shove_l03",text:"（推开堵在扶梯口的那个人）让开。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"dialogue",pressure:5,speaker:"npc_l03_woman",emotion:"firm",text:"孩子自己说的不要跟你走。这么多人都听见了。",next:"n_10"},{id:"n_10",type:"choice",pressure:5,prompt:"陈念的脸埋在你肩膀上，哭声闷成一团。她攥着你的衣领，攥得很紧。",timer:12,timeoutOption:"opt_defend",options:[{id:"opt_ask_daughter",text:"（低头）宝宝，你告诉阿姨——你为什么不要跟爸爸走？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_11"},{id:"opt_full_sentence",text:"她说的是：我不要跟你走，我要买那个娃娃。你们只听了半句。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:30,composure:5,risk:-10},next:"n_11"},{id:"opt_silent_hold",text:"（不说话，抱紧她，等警察）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:-10,risk:-5},next:"n_11"},{id:"opt_defend",text:"我说了这是我女儿！你们听不懂人话吗！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_11"},{id:"opt_breath_l03",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l03",text:"你们他妈的都给我滚开！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_11"},{id:"imp_shove_l03b",text:"（一把推开挡在前面的女人）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:3,script:`警察上来了。林昭走在前面，先看的是孩子。
「小朋友，别怕。阿姨问你一句话——」
她蹲下来，和陈念平视。
「抱着你的这个人，你认识吗？」`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"陈念从你肩膀上抬起头，眼睛肿着。整个三楼安静下来。",timer:12,timeoutOption:"opt_exhausted",options:[{id:"opt_provide_all",text:"户口本在手机里，孩子妈妈视频还连着，监控从玩具区调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-10},next:"n_13"},{id:"opt_factual_l03",text:"（把经过如实说了一遍，包括她为什么哭）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-5},next:"n_13"},{id:"opt_demand",text:"拦我那个人得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_13"},{id:"opt_exhausted",text:"（抱着孩子，一个字也说不出来）",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:-10,risk:10},next:"n_13"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`陈念指着玩具区的方向，抽噎着说了三个字。
那三个字很小，但离得近的人都听见了。`,next:"__END__"}],va=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 她摔在扶梯口",script:`你推开了挡路的人。人群晃了一下。
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

她再没提过那个娃娃。`},{id:"e_f_rank",rank:"F",condition:"has('L03_F_BEHAVIOR')",title:"翻车 · 你先拉着她跑了",script:`你拉起她就往扶梯走。

在所有人眼里，这一下坐实了全部猜想。
七八个人追上来，有人抓住你的胳膊，有人去拽孩子。
拉扯里陈念的鞋掉了一只。

警察来了以后一切都查清楚了。
可那段视频的前十秒是你拉着一个哭喊的孩子往外走——
后面查清楚的部分，没人愿意再看第二遍。

三天后你接到学校电话，问你要不要给孩子换个班。
「有家长在群里传了个视频。」老师说得很委婉。`,unlock:"card_L03_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 你先拉着她跑了",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L03_F"}],G_={id:ca,title:la,act:pa,initState:ua,cast:da,entryNode:_a,lawyerCard:fa,satireTargets:ga,nodes:ma,endings:va},V_=Object.freeze(Object.defineProperty({__proto__:null,act:pa,cast:da,default:G_,endings:va,entryNode:_a,id:ca,initState:ua,lawyerCard:fa,nodes:ma,satireTargets:ga,title:la},Symbol.toStringTag,{value:"Module"})),ha="L04",xa="第04关 · 深夜同行",ka=1,ya={evidence:20,opinion:35,composure:55,risk:35},Ta=["hero","npc_l04_woman","officer_lin","crowd"],La="n_01",ba="card_law_L04",Aa=["T1","T3"],wa=[{id:"n_01",type:"cutscene",pressure:1,script:`十一点四十，出地铁 C 口。加了四个小时班，你只想快点到家。
从这里到小区北门，一条路，走了三年。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:1,script:`第二个路口开始，前面十几米有个女生，同方向。
她回头看了一眼。又看了一眼。
然后你听见她加快了脚步。`,next:"n_03"},{id:"n_03",type:"choice",pressure:1,prompt:"还有三百米就到小区门口。这条路只有这一条。",timer:12,timeoutOption:"opt_ignore",options:[{id:"opt_slow_down",text:"（放慢脚步拉开距离，顺手打开导航）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-15},next:"n_04"},{id:"opt_cross_road",text:"（横穿马路，走到对面去）",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:15,risk:-10},next:"n_04"},{id:"opt_ignore",text:"（正常速度，继续走自己的）",tag:"NEUTRAL",aggression:0,initiative:1,effects:{opinion:-10,composure:-5,risk:15},next:"n_04"},{id:"opt_speed_up",text:"（累了，加快脚步想早点到家）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-20,composure:-5,risk:20},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:2,script:`小区北门口停着一辆警车，警灯没开。
两名民警下车，其中一位朝你走过来。她胸前的执法记录仪亮着红灯。
那个女生站在警车另一侧，抱着手臂。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:3,speaker:"officer_lin",emotion:"neutral",text:"您好。有人报警说被跟踪。麻烦配合一下。",next:"n_06"},{id:"n_06",type:"choice",pressure:3,prompt:"小区门口的保安探出头来看。有个遛狗的邻居停下了脚步。",timer:12,timeoutOption:"opt_defensive",options:[{id:"opt_full_cooperate",text:"配合。我住这个小区，这条路每天走。导航和门禁记录都能调。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_07"},{id:"opt_ask_basis",text:"可以配合。能先说一下是什么情况吗？",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-5},next:"n_07"},{id:"opt_defensive",text:"我跟踪谁了？我下班回家！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_07"},{id:"opt_lie",text:"我不走这条路的，我刚才在前面拐了个弯。",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:20,addFlags:["G_NEG_LIED","L04_F_BEHAVIOR"]},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:4,speaker:"npc_l04_woman",emotion:"tense",text:"他从地铁口就跟在我后面。三个路口，我走他也走。",next:"n_08"},{id:"n_08",type:"choice",pressure:4,prompt:"她说得很快，手在抖。你看得出来她是真的害怕。",timer:12,timeoutOption:"opt_apologize_l04",options:[{id:"opt_request_footage",text:"沿路有监控。麻烦从我出地铁口那一刻开始调。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_09"},{id:"opt_show_route",text:"（打开导航历史）这三个月，每天同一条路，同一个时间段。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_09"},{id:"opt_apologize_l04",text:"不好意思吓着你了，我不是故意的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_09"},{id:"opt_argue_l04",text:"是她自己疑神疑鬼。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_09"},{id:"opt_breath_l04",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_08",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l04",text:"我他妈住这儿！你要我怎么走？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_09"},{id:"imp_shove_l04",text:"（一把推开挡在前面的民警）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"choice",pressure:3,prompt:`林昭把笔录本递过来：「您看一下，没问题就签字。」
第三行写着：「本人一直跟在报警人后方行走。」`,timer:12,timeoutOption:"opt_sign_fast",options:[{id:"opt_read_carefully",text:"第三行改一下。前两个路口是我在前面，她从后面超过去的。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_10"},{id:"opt_add_statement",text:"我要求把导航记录和门禁记录附进笔录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_10"},{id:"opt_sign_fast",text:"（太累了，扫了一眼直接签）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:5,risk:25},next:"n_10"},{id:"opt_refuse_sign",text:"我不签。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-15,composure:-5,risk:20},next:"n_10"},{id:"opt_ally_l04",text:"（拨号）沈律师，我被警察拦下了，您能不能听一下。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_10"}],impulsePool:[{id:"imp_tear_l04",text:"（把笔录本推回去）你们爱怎么写怎么写。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:0,effects:{evidence:-20,opinion:-20,composure:-5,risk:20},next:"n_10"}]},{id:"n_10",type:"cutscene",pressure:2,script:`警务室的屏幕上，四个路口的画面拼在一起。

23:41，地铁 C 口，你先出来的。
23:44，第一个路口，你在前，她在后十几米。
23:47，第二个路口，你停下来买了包烟。她从你身边走过去了。
23:52，第三个路口——她在前，你在后。

林昭把进度条倒回 23:47，又放了一遍。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那个女生盯着屏幕，脸慢慢红了。她张了张嘴，没出声。",timer:12,timeoutOption:"opt_quiet_l04",options:[{id:"opt_request_conclusion",text:"麻烦出一份情况说明，写明未发现违法事实。我要留档。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_12"},{id:"opt_quiet_l04",text:"（点点头，准备回家）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_12"},{id:"opt_demand_l04",text:"她得道歉。害我在这儿站两个小时。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12"},{id:"opt_lecture",text:"以后报警之前，先想清楚。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-5,risk:10},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`凌晨一点二十，你刷卡进北门。
保安探出头：「陈哥，没事吧？」
你说没事。

第二天下班，你在地铁 C 口站了一会儿，绕了远路回家。
多走了十一分钟。`,next:"__END__"}],Oa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你推的是警察",script:`执法记录仪全程都在录。

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

三年的路，说不走就不走了。`},{id:"e_f_rank",rank:"F",condition:"has('L04_F_BEHAVIOR')",title:"翻车 · 那句谎",script:`「我不走这条路的，我刚才在前面拐了个弯。」

监控调出来，你没拐。

从这一刻起，谈话的内容变了。
不再是「你有没有跟踪」，而是「你为什么要说谎」。

后面那个问题，你答不上来。
因为真实答案是：我怕。
而「我怕」这三个字，在笔录里从来不是一个能用的理由。`,unlock:"card_L04_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 那句谎",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L04_F"}],U_={id:ha,title:xa,act:ka,initState:ya,cast:Ta,entryNode:La,lawyerCard:ba,satireTargets:Aa,nodes:wa,endings:Oa},j_=Object.freeze(Object.defineProperty({__proto__:null,act:ka,cast:Ta,default:U_,endings:Oa,entryNode:La,id:ha,initState:ya,lawyerCard:ba,nodes:wa,satireTargets:Aa,title:xa},Symbol.toStringTag,{value:"Module"})),Pa="L05",Ra="第05关 · 托杠铃的那一下",Ea=1,Sa={evidence:20,opinion:30,composure:50,risk:40},Ia=["hero","npc_l05_woman","npc_l05_manager","npc_l05_witness","crowd"],Ca="n_01",$a="card_law_L05",Ma=["T1","T5"],Na=[{id:"n_01",type:"cutscene",pressure:1,script:`自由重量区，晚上八点半。
隔壁卧推架上一个女生在推空杆加两片，最后一组第七下卡住了。
杠铃开始往下沉。她的手在抖，没有保护员。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`你两步冲过去，掌心向上，从下面托住杠铃杆，往上带。
杠铃回到架子上，哐一声。

托的时候，你的手背蹭到了她的手臂外侧。
零点几秒。`,next:"n_03"},{id:"n_03",type:"dialogue",pressure:1,speaker:"npc_l05_woman",emotion:"shaken",text:"（坐起来，喘着气）……谢谢。",next:"n_04"},{id:"n_04",type:"cutscene",pressure:2,script:`十分钟后，店长带着她走过来。
她的表情变了。不是愤怒，是那种想了很久之后的确信。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:2,speaker:"npc_l05_woman",emotion:"cold",text:"他刚才碰到我了。",next:"n_06"},{id:"n_06",type:"choice",pressure:2,prompt:"器械区安静了一片。店长搓着手，看着你身后的某个位置。",timer:12,timeoutOption:"opt_apologize_l05",options:[{id:"opt_admit_and_frame",text:"碰到了。托杠铃的时候手背蹭到她手臂，零点几秒。监控有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_07"},{id:"opt_ask_footage_l05",text:"卧推架正对着监控。麻烦现在就调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-5},next:"n_07"},{id:"opt_deny_l05",text:"我没碰她。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_LIED","L05_F_BEHAVIOR"]},next:"n_07"},{id:"opt_apologize_l05",text:"不好意思，我可能手滑了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:3,speaker:"npc_l05_woman",emotion:"calm_press",text:"你为什么要过来？我又没有叫你。",next:"n_08"},{id:"n_08",type:"choice",pressure:3,prompt:"这句话把你问住了半秒。你确实没等她开口。",timer:12,timeoutOption:"opt_withdraw",options:[{id:"opt_explain_duty",text:"杠铃已经压到你胸口了。我不过去，落下来是三十公斤。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_09"},{id:"opt_procedural_l05",text:"等监控。你怎么想是一件事，发生了什么是另一件事。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_09"},{id:"opt_hurt",text:"我救了你，你就这么说我？",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_09"},{id:"opt_withdraw",text:"行。是我多管闲事。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:15},next:"n_09"}],impulsePool:[{id:"imp_curse_l05a",text:"早知道让它砸下来。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-30,composure:-10,risk:20},next:"n_09"}]},{id:"n_09",type:"dialogue",pressure:3,speaker:"npc_l05_manager",emotion:"appease",text:"小陈啊，你看这样行不行，你先别来了，等风头过去。",next:"n_10"},{id:"n_10",type:"choice",pressure:3,prompt:"他压低了声音，像是在帮你。你卡里还有十四个月。",timer:12,timeoutOption:"opt_comply_l05",options:[{id:"opt_written_reason",text:"不来可以。请书面写明理由，我签字留档。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_11"},{id:"opt_ask_process",text:"你们的投诉流程是什么？监控什么时候调？",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_11"},{id:"opt_argue_manager",text:"出了事你就把我推出去？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:15},next:"n_11"},{id:"opt_comply_l05",text:"（默默去更衣室收拾东西）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_11"},{id:"opt_ally_l05",text:"（走到角落拨号）沈律师，我这边需要您两分钟。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_11"}],impulsePool:[{id:"imp_curse_l05b",text:"你们这店我记住了。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_11"}]},{id:"n_11",type:"dialogue",pressure:4,speaker:"npc_l05_woman",emotion:"cold",text:"（举起手机）他那种眼神，我见得多了。",next:"n_12"},{id:"n_12",type:"choice",pressure:4,prompt:"又有两个人举起了手机。店长往旁边挪了半步，装作没看见。",timer:12,timeoutOption:"opt_over_defend_l05",options:[{id:"opt_witness",text:"刚才旁边那位在做深蹲，全程都看着。能请他说一句吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_13"},{id:"opt_stay_calm",text:"眼神我不解释。我等监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:10,risk:-10},next:"n_13"},{id:"opt_over_defend_l05",text:"我什么眼神？你说清楚！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_13"},{id:"opt_leave_l05",text:"（拿包就走）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_13"},{id:"opt_breath_l05",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_12",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l05",text:"你他妈把话说清楚！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_13"},{id:"imp_shove_l05",text:"（一把打掉她举着的手机）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_13",type:"cutscene",pressure:2,script:`办公室，监控回放。

20:31:14 杠铃开始下沉，第七下没推上去。
20:31:19 杠铃压到胸口，她的手肘外翻。
20:31:21 你入画，掌心向上，托住杠铃杆。
20:31:23 杠铃回架。

林昭——不，是店长——把进度条往前拖了二十分钟。
20:09，同一个架子。一个男会员卡住，你走过去，一模一样的动作，一模一样的手位。`,next:"n_14"},{id:"n_14",type:"choice",pressure:2,prompt:"屏幕停在 20:09 那一帧。办公室里没人说话。",timer:12,timeoutOption:"opt_quiet_l05",options:[{id:"opt_request_written_l05",text:"结果出一份书面的。另外，她刚才那句话，也麻烦记一下。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_15"},{id:"opt_quiet_l05",text:"（点点头，回去把剩下两组做完）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:20,composure:10,risk:-5},next:"n_15"},{id:"opt_demand_l05",text:"她得当着所有人道歉。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_15"},{id:"opt_quit_gym",text:"（当场退卡走人）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-15,opinion:-10,composure:-5,risk:15},next:"n_15"}],impulsePool:[]},{id:"n_15",type:"cutscene",pressure:1,script:`三个月后，同一个架子。
又有人推不上去了，杠铃往下沉。

器械区有七八个人。所有人都看见了。
没有人过去。`,next:"__END__"}],Fa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一巴掌",script:`手机摔在地胶上，屏幕裂成蛛网。

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
新的那家你从来不去自由重量区。`},{id:"e_f_rank",rank:"F",condition:"has('L05_F_BEHAVIOR')",title:"翻车 · 我没碰她",script:`「我没碰她。」

监控 20:31:21，你的手背蹭在她手臂外侧，零点几秒。
清清楚楚。

从这一帧开始，事情不再是「碰得对不对」，而是「你为什么撒谎」。

托杠铃这件事，本来是你唯一的底气。
你自己把它扔了。

处理结果写着：情况属实，永久取消会员资格。
「情况属实」四个字指的是撒谎，不是别的。
但没人会去分辨这个。`,unlock:"card_L05_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 我没碰她",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L05_F"}],Y_={id:Pa,title:Ra,act:Ea,initState:Sa,cast:Ia,entryNode:Ca,lawyerCard:$a,satireTargets:Ma,nodes:Na,endings:Fa},q_=Object.freeze(Object.defineProperty({__proto__:null,act:Ea,cast:Ia,default:Y_,endings:Fa,entryNode:Ca,id:Pa,initState:Sa,lawyerCard:$a,nodes:Na,satireTargets:Ma,title:Ra},Symbol.toStringTag,{value:"Module"})),Da="L06",Ba="第06关 · 三十八万八",Ha=2,Ga={evidence:30,opinion:50,composure:48,risk:20},Va=["hero","npc_l06_girlfriend","npc_l06_mother","crowd"],Ua="n_01",ja="card_law_L06",Ya=["T1","T3"],qa=[{id:"n_01",type:"cutscene",pressure:1,script:`女方家客厅。茶几上摆着切好的果盘，没人动。
谈了三年，今天是第一次两家坐下来说结婚的事。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l06_mother",emotion:"matter_of_fact",text:"三十八万八，房本加名，车全款。这是行情，不是我要的。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"你家全部积蓄四十一万，是你爸的退休金。你妈在旁边搓着手。",timer:8,timeoutOption:"opt_agree_first",options:[{id:"opt_write_down",text:"这几条我记一下。数字和条件都写清楚，省得以后有出入。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_detail",text:"彩礼这笔钱，婚后是归我们小家，还是归您？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_agree_first",text:"行，我想想办法。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-10,risk:20},next:"n_04"},{id:"opt_object",text:"这不是卖女儿吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l06_girlfriend",emotion:"hurt",text:"你是不是嫌我？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她眼睛红了。这三年她没跟你要过一件贵东西。",timer:8,timeoutOption:"opt_cave",options:[{id:"opt_equal_terms",text:"不嫌。钱我出，名我加。那也写一条：婚后共同还贷，离婚按出资分。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_separate",text:"我们俩的事，能不能我们俩先谈？",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_hurt_l06",text:"谈钱的时候，你怎么不说爱不爱。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_06"},{id:"opt_cave",text:"不嫌不嫌，我砸锅卖铁也给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20,addFlags:["L06_F_BEHAVIOR"]},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l06_mother",emotion:"cold",text:"共同还贷？那是你们小两口的事。我说的是彩礼，两码事。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"你妈的手在膝盖上攥紧了。她今天穿了压箱底那件衣服。",timer:8,timeoutOption:"opt_loan",options:[{id:"opt_parents_present",text:"这么大的事，得四个人一起谈。咱们再约个时间。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_show_numbers",text:"（打开手机）我家全部积蓄四十一万，是我爸的退休金。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:-5,risk:-5},next:"n_08"},{id:"opt_loan",text:"（在桌子底下点开了网贷 App）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:25},next:"n_08"},{id:"opt_walk",text:"（起身要走）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-20,composure:-5,risk:15},next:"n_08"},{id:"opt_ally_l06",text:"（去阳台拨号）沈律师，有个协议我想请您看一眼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l06_girlfriend",emotion:"cry",text:"你不给，就是不爱我。就这么简单。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"客厅安静得能听见挂钟。四个人都在等你开口。",timer:8,timeoutOption:"opt_beg_l06",options:[{id:"opt_refuse_frame_l06",text:"爱不爱不用钱证明。真要证明，那就两边都拿出来。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:5,risk:-10},next:"n_10"},{id:"opt_calm_l06",text:"（把刚才记下的条件，一条一条念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_10"},{id:"opt_beg_l06",text:"你别这么说……我真的尽力了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:-10,composure:-15,risk:15},next:"n_10"},{id:"opt_break_up",text:"那就算了吧。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:-5,opinion:-15,composure:-10,risk:10},next:"n_10"},{id:"opt_breath_l06",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l06",text:"你们这就是明码标价。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l06",text:"（推开挡在门口的岳母）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`你从包里抽出两页 A4，放在果盘旁边。

「三十八万八，我给。房本加名，我同意。」
「这上面写清楚了：钱的用途、归属，还有一条——如果两年内离婚，怎么算。」

她妈没有伸手去拿。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那两页纸在茶几上放了很久。谁也没碰。",timer:8,timeoutOption:"opt_wait",options:[{id:"opt_propose_agreement",text:"钱照给，一分不少。签个字，两家都踏实。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_wait",text:"那……我再想想。",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-5,opinion:-10,composure:-5,risk:15},next:"n_12"},{id:"opt_verbal_promise",text:"不签也行，就这么说定了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:20},next:"n_12"},{id:"opt_ultimatum",text:"签就结，不签就散。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`回去的路上，你妈一直没说话。
快到家的时候她说：「那两页纸，你写得挺好。」
又走了一段，她说：「我跟你爸商量过了，钱我们出。」

你说不用。
她说：「我知道不用。我就是想让你知道，我们出得起。」`,next:"__END__"}],Ka=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一下",script:`你推开她的时候，她的后腰撞在鞋柜角上。

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
什么也没签。`},{id:"e_f_rank",rank:"F",condition:"has('L06_F_BEHAVIOR')",title:"翻车 · 砸锅卖铁",script:`「我砸锅卖铁也给你。」

这句话说出口的那一刻，谈判就结束了。
后面所有的条件都是往上加的：车要全款，酒席要五星，蜜月要出国。

每加一条，你都说好。因为第一条你就说了好。

婚礼前一个月你爸住院了。
医生问要不要用进口的那款药，一个疗程四万。
你说，先用便宜的吧。`,unlock:"card_L06_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 砸锅卖铁",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L06_F"}],K_={id:Da,title:Ba,act:Ha,initState:Ga,cast:Va,entryNode:Ua,lawyerCard:ja,satireTargets:Ya,nodes:qa,endings:Ka},W_=Object.freeze(Object.defineProperty({__proto__:null,act:Ha,cast:Va,default:K_,endings:Ka,entryNode:Ua,id:Da,initState:Ga,lawyerCard:ja,nodes:qa,satireTargets:Ya,title:Ba},Symbol.toStringTag,{value:"Module"})),Wa="L07",za="第07关 · 青春损失费",Xa=2,Ja={evidence:35,opinion:45,composure:45,risk:30},Za=["hero","npc_l07_ex","shen_li"],Qa="n_01",ec="card_law_L07",tc=["T1","T4"],nc=[{id:"n_01",type:"cutscene",pressure:1,script:`分手第九天。她约你在常去的那家咖啡馆。
还是靠窗那张桌子。她比你先到。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l07_ex",emotion:"flat",text:"三年。二十万。给了这事就过去了。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"她说得很平静，像是排练过。手边放着手机，屏幕朝下。",timer:8,timeoutOption:"opt_negotiate_l07",options:[{id:"opt_record_now",text:"（把手机放到桌上，屏幕朝上）你刚才那句，再说一遍。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_basis_l07",text:"二十万这个数，是按什么算出来的？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_04"},{id:"opt_negotiate_l07",text:"……能不能少点？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:20},next:"n_04"},{id:"opt_angry_l07",text:"你疯了吧？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l07_ex",emotion:"cold",text:"不给，我就去派出所报案。你猜他们信谁。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"咖啡凉了。你听见自己心跳的声音。",timer:8,timeoutOption:"opt_pay_l07",options:[{id:"opt_call_police_l07",text:"（当场拨号）110 吗，有人以报案相要挟，向我索要二十万。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_lawyer",text:"（拨沈骊的电话，开免提放在桌上）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-5},next:"n_06"},{id:"opt_pay_l07",text:"（打开转账页面）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_threaten_l07",text:"你敢报，我就告你诬告。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l07_ex",emotion:"waver",text:"我不是那个意思……我就是，这三年我什么都没落着。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"她的声音软下来了。你想起她生病那年，是你请了半个月假。",timer:8,timeoutOption:"opt_delete_l07",options:[{id:"opt_keep_record",text:"我理解。但刚才那句我已经录下来了，这个改不了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_empathy",text:"三年我也在。分开是两个人的事，不是谁欠谁。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:5,opinion:25,composure:5,risk:-5},next:"n_08"},{id:"opt_delete_l07",text:"（心软了，把刚才的录音删掉）",tag:"DESTROY_EVIDENCE",aggression:0,initiative:0,effects:{evidence:-30,opinion:5,composure:-5,risk:25,addFlags:["G_NEG_DESTROYED_EVIDENCE","L07_F_BEHAVIOR"]},next:"n_08"},{id:"opt_mock_l07",text:"什么都没落着？这三年房租谁付的。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:10},next:"n_08"},{id:"opt_ally_l07",text:"（拨沈骊的电话，放在桌上开免提）",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l07_ex",emotion:"cold",text:"（十分钟后，手机震了。是她发来的语音）你要是不给，我明天就去。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"语音三秒，你听了四遍。窗外天已经黑了。",timer:8,timeoutOption:"opt_argue_l07b",options:[{id:"opt_save_all",text:"（截图、录屏、云备份。一条都不删）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_reply_carefully",text:"（回一条文字：我拒绝支付。你有任何主张，请走法律程序）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_10"},{id:"opt_block",text:"（拉黑，删除所有聊天记录）",tag:"DESTROY_EVIDENCE",aggression:1,initiative:0,effects:{evidence:-30,opinion:-5,composure:5,risk:25,addFlags:["G_NEG_DESTROYED_EVIDENCE"]},next:"n_10"},{id:"opt_argue_l07b",text:"（打回去，对骂了四十分钟）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_10"},{id:"opt_breath_l07",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l07",text:"你他妈就是想讹钱。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_grab_l07",text:"（冲过去抢她的手机）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊把材料翻了一遍，抬头。

「我先说清楚一件事。」
「真正的受害者，不会先开价。」
「她要是去报案，警察会依法受理、依法调查，那是她的权利，也是应该的。」
「但她刚才做的不是报案。她是拿报案当价码——」
「这个在法律上有名字，叫敲诈勒索。」

她把那段语音又放了一遍。
「二十万。这个数字是她自己说的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊合上材料夹：「现在你说，怎么办。」",timer:8,timeoutOption:"opt_drop",options:[{id:"opt_full_legal",text:"按敲诈勒索报案，同时发律师函。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_lawyer_letter",text:"先发律师函，看她什么反应。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_drop",text:"算了吧。毕竟三年。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_12"},{id:"opt_revenge",text:"把那段语音发到朋友圈，让大家都看看。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,composure:5,risk:25},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`走出律所已经十点多。
你翻到相册最底下，三年前那张，两个人在山顶，风把她头发吹到你脸上。

你没删。
沈骊说过：一条都不要删。`,next:"__END__"}],ic=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你抢了她的手机",script:`咖啡馆有监控，两个服务员看着。

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
你划过去的时候手停了一下，然后接着往下划。`},{id:"e_f_rank",rank:"F",condition:"has('L07_F_BEHAVIOR')",title:"翻车 · 你把录音删了",script:`你心软，把那段录音删了。

三天后她还是去了派出所。
笔录做了六个小时。

民警问你：她之前有没有向你索要过财物？
你说有，二十万。
民警问：有证据吗？

你打开手机，翻到那个空白的录音文件夹。

最后案子因证据不足没有立案。
没有立案的意思是——它既没有被证实，也没有被证伪。

它就那么挂着。挂了很多年。`,unlock:"card_L07_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 你把录音删了",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L07_F"}],z_={id:Wa,title:za,act:Xa,initState:Ja,cast:Za,entryNode:Qa,lawyerCard:ec,satireTargets:tc,nodes:nc,endings:ic},X_=Object.freeze(Object.defineProperty({__proto__:null,act:Xa,cast:Za,default:z_,endings:ic,entryNode:Qa,id:Wa,initState:Ja,lawyerCard:ec,nodes:nc,satireTargets:tc,title:za},Symbol.toStringTag,{value:"Module"})),sc="L08",oc="第08关 · 孩子不是你的",rc=2,ac={evidence:25,opinion:40,composure:40,risk:25},cc=["hero","npc_l08_wife","npc_l08_mother","npc_l08_child","shen_li"],lc="n_01",pc="card_law_L08",uc=["T1","T3"],dc=[{id:"n_01",type:"cutscene",pressure:1,script:`念念三岁体检，血型 AB。
你 O 型，她妈妈 O 型。
护士说了句「这个不太可能啊」，然后马上改口说仪器可能有误。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`你没跟任何人说。
第二天请了半天假，拿着念念的头发去了一家机构。

十四天后，报告到了。
你在楼下车里坐着，拆了三次才拆开。`,next:"n_03"},{id:"n_03",type:"dialogue",pressure:2,speaker:"hero",emotion:"cold",text:"（排除亲子关系。三个字，加粗。）",next:"n_04"},{id:"n_04",type:"choice",pressure:2,prompt:"楼上厨房的灯亮着。念念今天上小班，回来会跑到门口。",timer:8,timeoutOption:"opt_confront_now",options:[{id:"opt_keep_calm",text:"（把报告收进包里。先约律师，什么都不说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_05"},{id:"opt_second_test",text:"（再做一次，换一家有司法资质的机构）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:5,composure:-5,risk:-5},next:"n_05"},{id:"opt_confront_now",text:"（上楼，把报告摔在餐桌上）这是什么？",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-10,opinion:-15,composure:-20,risk:15},next:"n_05"},{id:"opt_denial",text:"（把报告撕了。就当没看见）",tag:"DESTROY_EVIDENCE",aggression:0,initiative:0,effects:{evidence:-30,composure:-10,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE","L08_F_BEHAVIOR"]},next:"n_05"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:3,speaker:"npc_l08_wife",emotion:"furious",text:"你背着我去做鉴定？陈屿，你还是不是人。",next:"n_06"},{id:"n_06",type:"choice",pressure:3,prompt:"她的手在抖。但她没有问「结果是什么」。",timer:8,timeoutOption:"opt_apologize_l08",options:[{id:"opt_reframe_l08",text:"做鉴定是我不对。但报告上写的东西，和我不对，是两件事。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_07"},{id:"opt_quiet_l08",text:"（不接话，把报告推过去）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:20,opinion:15,risk:-5},next:"n_07"},{id:"opt_explode",text:"我不是人？那你告诉我孩子他爸是谁。",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-10,opinion:-20,composure:-20,risk:10},next:"n_07"},{id:"opt_apologize_l08",text:"对不起……是我多心了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-10,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:3,speaker:"npc_l08_mother",emotion:"dismissive",text:"多大点事。男人心眼这么小，日子还过不过了。",next:"n_08"},{id:"n_08",type:"choice",pressure:3,prompt:"她坐在沙发上没起来，遥控器还捏在手里。",timer:8,timeoutOption:"opt_retreat_l08",options:[{id:"opt_facts_only",text:"阿姨，这事不看心眼大小。报告在这儿，您可以看。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_09"},{id:"opt_procedural_l08",text:"后面的事我会走法律程序。今天不吵。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-10},next:"n_09"},{id:"opt_argue_l08",text:"心眼小？您女儿干的事，您问过没有？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:15},next:"n_09"},{id:"opt_retreat_l08",text:"（起身回房间，关上门）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_09"},{id:"opt_ally_l08",text:"（下楼拨号）沈律师，我这儿出事了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09"}],impulsePool:[{id:"imp_curse_l08",text:"你们一家子都知道，是不是。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_09"}]},{id:"n_09",type:"dialogue",pressure:4,speaker:"npc_l08_child",emotion:"happy",text:"（从房间里跑出来，举着手）爸爸抱！",next:"n_10"},{id:"n_10",type:"choice",pressure:4,prompt:"她今天在幼儿园得了一朵小红花，贴在手背上。举着手跑过来给你看。",timer:8,timeoutOption:"opt_step_back",options:[{id:"opt_hold_kid",text:"（蹲下来，把她抱起来）爸爸在。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:5,opinion:30,composure:20,risk:-10},next:"n_11"},{id:"opt_take_photo",text:"（抱起来，顺手拍了段视频存着）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_11"},{id:"opt_step_back",text:"（僵在那儿，手没抬起来）",tag:"TRAP",aggression:0,initiative:0,effects:{opinion:-25,composure:-20,risk:10},next:"n_11"},{id:"opt_leave_room",text:"（转身走开）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-25,composure:-15,risk:10},next:"n_11"},{id:"opt_breath_l08",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l08",text:"别叫我爸爸！",unlockBelow:30,tag:"TRAP",aggression:3,initiative:0,effects:{opinion:-30,composure:-20,risk:20},next:"n_11"},{id:"imp_shove_l08",text:"（推开挡在门口的妻子）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:2,script:`沈骊把两份报告并排放好，看了很久。

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

那三年是真的。这一点，报告上没写。`,next:"__END__"}],_c=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一推",script:`你推开挡在门口的她。她撞到门框，额角青了一块。

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

你现在还在付。`},{id:"e_f_rank",rank:"F",condition:"has('L08_F_BEHAVIOR')",title:"翻车 · 撕掉的那张纸",script:`你把报告撕了。碎片冲进了马桶。

那天以后你什么都没提，日子照过。
只是每次念念叫爸爸，你都要在心里过一遍那三个字。

第六年，她提离婚，要抚养费，还要房子。
你说孩子不是我的。

她问：证据呢。

你重新去做了一次鉴定。这一次她拒绝配合，孩子也带走了。
法院说，现有证据不足以推翻婚生子女的推定。

那张纸，你只有过一次机会。`,unlock:"card_L08_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 撕掉的那张纸",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L08_F"}],J_={id:sc,title:oc,act:rc,initState:ac,cast:cc,entryNode:lc,lawyerCard:pc,satireTargets:uc,nodes:dc,endings:_c},Z_=Object.freeze(Object.defineProperty({__proto__:null,act:rc,cast:cc,default:J_,endings:_c,entryNode:lc,id:sc,initState:ac,lawyerCard:pc,nodes:dc,satireTargets:uc,title:oc},Symbol.toStringTag,{value:"Module"})),fc="L09",gc="第09关 · 冷静期",mc=2,vc={evidence:40,opinion:45,composure:42,risk:35},hc=["hero","npc_l09_wife","npc_l09_cousin","shen_li"],xc="n_01",kc="card_law_L09",yc=["T2","T4"],Tc=[{id:"n_01",type:"cutscene",pressure:1,script:`民政局。离婚登记申请交上去了，三十天冷静期。
工作人员说：三十天后你们再一起来一趟。

出门的时候她说：这三十天，咱们都别为难对方。
你说好。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`第九天，你在 App 上查房贷余额，顺手翻了下联名账户。

八十二万，只剩两万四。
七笔转账，分七天，每笔不到十万。`,next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"最早那一笔的时间是——你们从民政局出来的当天下午。",timer:8,timeoutOption:"opt_ask_her",options:[{id:"opt_fix_evidence",text:"（去银行打全部流水，柜台盖章。截图另存一份）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_call_lawyer_l09",text:"（拍下来，发给沈骊）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-5},next:"n_04"},{id:"opt_ask_her",text:"（直接问她：钱呢）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-15,opinion:-5,composure:-10,risk:15},next:"n_04"},{id:"opt_transfer_back",text:"（把剩下的两万四也转到自己名下）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:20,addFlags:["L09_F_BEHAVIOR"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l09_wife",emotion:"calm",text:"我爸住院要用钱。这个你也要管？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她爸上个月刚体检完，报告你还帮着看过。",timer:8,timeoutOption:"opt_believe",options:[{id:"opt_preservation",text:"（当天向法院申请财产保全，提交流水和登记回执）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_06"},{id:"opt_request_proof",text:"住院记录和缴费单，给我看一下。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_06"},{id:"opt_believe",text:"行，那你先用着。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:25},next:"n_06"},{id:"opt_argue_l09",text:"你爸生病要八十万？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l09_wife",emotion:"flat",text:"（递过来一张纸）对了，这个也得算共同债务。我表哥的，四十万。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"欠条落款是去年三月。你想了很久，那个月你们在还房贷，一分闲钱没有。",timer:8,timeoutOption:"opt_sign_l09",options:[{id:"opt_challenge_debt",text:"这笔我不认。要认，请出借人到庭，说清楚钱怎么给的。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_08"},{id:"opt_check_flow",text:"（申请法院调取她表哥同期的银行流水）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_08"},{id:"opt_sign_l09",text:"（她说签个字好办手续，你签了）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,composure:5,risk:25},next:"n_08"},{id:"opt_yell_l09",text:"这就是伪造！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08"},{id:"opt_ally_l09",text:"（拨号）沈律师，账户被转空了，我该先做什么。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l09_wife",emotion:"cold",text:"都要离了，你还查我。有意思吗。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"还剩十八天。她把行李箱推到了玄关。",timer:8,timeoutOption:"opt_beg_l09",options:[{id:"opt_procedural_l09",text:"有意思。这不是查你，是把账算清楚。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:20,composure:10,risk:-10},next:"n_10"},{id:"opt_silent_l09",text:"（不回，继续整理材料）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:-5,risk:-5},next:"n_10"},{id:"opt_beg_l09",text:"我们能不能好聚好散？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10"},{id:"opt_expose",text:"（把转账记录发到家族群）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:25},next:"n_10"},{id:"opt_breath_l09",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l09",text:"你早就算计好了是不是。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l09",text:"（拦住她，抢那个行李箱）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`第十四天，保全裁定送达。
剩余账户、一套房产、一辆车，全部冻结。

她表哥的银行流水也调出来了：去年三月，那个账户的余额是一千两百块。
四十万从来没有出现过。

沈骊把两页纸并排放着，说了句：
「虚构债务这条，比转移财产严重得多。这个她自己应该清楚。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"对方律师打来电话，说想谈谈。",timer:8,timeoutOption:"opt_settle_l09",options:[{id:"opt_full_l09",text:"保全维持。虚假债务另案主张，材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_12"},{id:"opt_settle_l09",text:"（各让一步，把钱分清楚就行）",tag:"NEUTRAL",aggression:0,initiative:2,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_12"},{id:"opt_drop_l09",text:"算了。钱没了就没了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"},{id:"opt_gloat",text:"（把裁定书拍照发给她）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:5,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`第三十天，民政局。
两个人隔着一个位置坐着，谁也没说话。

出来的时候下雨了。她往左，你往右。

她那句「这三十天，咱们都别为难对方」——
你后来想了很久。她说的是真心话。
她只是没打算把「为难」这两个字算在自己头上。`,next:"__END__"}],Lc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 玄关那一下",script:`抢行李箱的时候她摔在鞋柜上，手腕骨裂。

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
沈骊没再说话。`},{id:"e_f_rank",rank:"F",condition:"has('L09_F_BEHAVIOR')",title:"翻车 · 你也转了",script:`你把剩下的两万四也转走了。

开庭的时候，对方律师第一个拿出来的就是这笔。
「双方均存在转移共同财产的行为。」

这一句话，把八十二万和两万四放在了同一个天平上。
法官不看金额，法官看性质。

最后判：各自名下财产归各自所有。

她名下有八十万。你名下有两万四。`,unlock:"card_L09_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 你也转了",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L09_F"}],Q_={id:fc,title:gc,act:mc,initState:vc,cast:hc,entryNode:xc,lawyerCard:kc,satireTargets:yc,nodes:Tc,endings:Lc},ef=Object.freeze(Object.defineProperty({__proto__:null,act:mc,cast:hc,default:Q_,endings:Lc,entryNode:xc,id:fc,initState:vc,lawyerCard:kc,nodes:Tc,satireTargets:yc,title:gc},Symbol.toStringTag,{value:"Module"})),bc="L10",Ac="第10关 · 二十米",wc=2,Oc={evidence:30,opinion:35,composure:38,risk:45},Pc=["hero","npc_l10_exwife","npc_l10_child","npc_l10_teacher","shen_li"],Rc="n_01",Ec="card_law_L10",Sc=["T1","T2"],Ic=[{id:"n_01",type:"cutscene",pressure:2,script:`抚养费返还的判决生效了。执行立案的第三天，
法院的人把另一份裁定书送到了公司前台。

人身安全保护令。
禁止实施家庭暴力。禁止骚扰、跟踪、接触申请人及其相关近亲属。
禁止在申请人及其女儿的住所、学校二百米范围内活动。

你不是念念的生父，这一点法律上已经写死了。
你争的是探视——三年，你想再见她。

有效期六个月。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"hero",emotion:"cold",text:"（申请书写的是：长期恐吓，多次推搡。落款上周三。）",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"上周三你在南京出差。高铁票、酒店、打卡记录都在。",timer:8,timeoutOption:"opt_call_her",options:[{id:"opt_comply_and_appeal",text:"（严格遵守。同时当天递交复议申请，附行程材料）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_call_lawyer_l10",text:"（先给沈骊打电话，一个字不多说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:10,composure:10,risk:-10},next:"n_04"},{id:"opt_call_her",text:"（打电话质问她）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-10,risk:15},next:"n_04"},{id:"opt_ignore_order",text:"（不管这个，照常去接孩子）",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-25,opinion:-20,risk:25,addFlags:["L10_VIOLATED"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:3,script:`周四下午四点二十。
你把车停在幼儿园斜对面，隔着两条车道，大概二十米。

放学铃响了。念念背着小书包出来，站在门口找人。

然后她看见你了。`,next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"她举起手，往马路这边跑过来。老师在后面喊她的名字。",timer:8,timeoutOption:"opt_hug_child",options:[{id:"opt_walk_away",text:"（转身。走到街角，站住，看着老师把她牵回去）",tag:"OPTIMAL",aggression:0,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:-10,risk:-10},next:"n_06"},{id:"opt_call_teacher",text:"（退到更远，打电话给老师说明情况）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:-5,risk:-10},next:"n_06"},{id:"opt_wave",text:"（远远地挥了挥手）",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-10,composure:-5,risk:15},next:"n_06"},{id:"opt_hug_child",text:"（蹲下来，张开手）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-25,opinion:-15,composure:10,risk:20,addFlags:["L10_VIOLATED","L10_F_BEHAVIOR"]},next:"n_06"},{id:"opt_ally_l10",text:"（拨号）沈律师，法院送来一份保护令。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:2,script:`沈骊的办公室。她听完，把笔放下了。

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
「但你自己得记着。」`,next:"__END__"}],Cc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那扇门",script:`凌晨两点，你砸开了那扇门。

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

那些材料现在还在她的柜子里，标签写着你的名字。三年了。`},{id:"e_f_rank",rank:"F",condition:"has('L10_F_BEHAVIOR')",title:"翻车 · 蹲下来那一下",script:`她朝你跑过来。你蹲下去，张开手。

她扑进你怀里的那三秒，是那半年里最好的三秒。

幼儿园门口有监控。
对方律师在庭上放了这段，只放了十七秒。

「被申请人在保护令有效期内，出现在幼儿园门口，并与被保护人发生身体接触。」

违反保护令，拘留五日。
探视申请驳回。

那三条不在场证明，法院也查明了。
没有用。

沈骊后来只说了一句：「我知道你忍不住。」
「可法律不看你忍不忍得住，只看你忍没忍住。」`,unlock:"card_L10_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 蹲下来那一下",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L10_F"}],tf={id:bc,title:Ac,act:wc,initState:Oc,cast:Pc,entryNode:Rc,lawyerCard:Ec,satireTargets:Sc,nodes:Ic,endings:Cc},nf=Object.freeze(Object.defineProperty({__proto__:null,act:wc,cast:Pc,default:tf,endings:Cc,entryNode:Rc,id:bc,initState:Oc,lawyerCard:Ec,nodes:Ic,satireTargets:Sc,title:Ac},Symbol.toStringTag,{value:"Module"})),$c="L11",Mc="第11关 · 面试第七问",Nc=3,Fc={evidence:20,opinion:40,composure:45,risk:20},Dc=["hero","npc_l11_hr","shen_li"],Bc="n_01",Hc="card_law_L11",Gc=["T3","T5"],Vc=[{id:"n_01",type:"cutscene",pressure:1,script:`终面，第四十分钟。前六个问题答得都不错。
你上个月主动离的职，赔偿金撑到十一月。房贷每月一万四。

这是手上最后一个 offer。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"candid",text:"我直说吧。这个岗同分的话，我们优先女性。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"他说得很坦然，像在说食堂几点开饭。",timer:8,timeoutOption:"opt_accept_l11",options:[{id:"opt_record_l11",text:"（口袋里的手机按了录音）这个我理解，能再具体说说吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_written_l11",text:"如果最终没通过，能给一份书面反馈吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_04"},{id:"opt_accept_l11",text:"我理解，这也是应该的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:20},next:"n_04"},{id:"opt_angry_l11",text:"这不就是歧视吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"official",text:"集团今年有多元化指标。这个我们也是执行。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"他把简历合上了，往桌子中间推了推。",timer:8,timeoutOption:"opt_beg_l11",options:[{id:"opt_ask_policy_l11",text:"指标是公开的吗？能给我看一下相关制度文件？",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_neutral_l11",text:"明白了。那我按正常流程等结果。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-5},next:"n_06"},{id:"opt_beg_l11",text:"我下个月还有房贷……能不能通融一下？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15,risk:10},next:"n_06"},{id:"opt_lecture_l11",text:"多元化不是这么搞的。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-5,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"cooling",text:"制度文件是内部的。你要是接受不了，我们也理解。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室的空调声突然很清楚。",timer:8,timeoutOption:"opt_thank_leave",options:[{id:"opt_confirm_record",text:"我把今天聊的整理一下发您邮箱，您确认下有没有出入。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_thank_leave",text:"（正常道谢，起身离开）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_08"},{id:"opt_argue_l11b",text:"那我今天来面的是什么？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"opt_give_up",text:"（当场说算了，不用等结果了）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_08"},{id:"opt_ally_l11",text:"（出会议室拨号）沈律师，我刚录了一段东西。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l11",text:"你们这叫指标？这叫明抢。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_flip_l11",text:"（一把掀翻会议桌）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"official",text:"（三天后，邮件）感谢您的时间。经综合评估，暂不匹配。祝顺利。",next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"赔偿金还剩两个月。手机里那段录音四十一分钟。",timer:8,timeoutOption:"opt_swallow",options:[{id:"opt_labor_complaint",text:"（向劳动监察部门投诉，附录音和邮件）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_request_reason",text:"（回信，要求书面说明未录用的具体原因）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_post_online_l11",text:"（把录音发到职场社区，@这家公司）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-20,composure:5,risk:25,addFlags:["L11_F_BEHAVIOR"]},next:"n_10"},{id:"opt_swallow",text:"（算了。接着投别家）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10"},{id:"opt_breath_l11",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_flip_l11b",text:"（冲回那家公司，砸了前台）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊听完录音，倒回去又放了一遍第七分钟。

「『同分优先女性』——这句是他自己说的，说得很清楚。」
「后面那句『集团有多元化指标』更好，那是把个人行为说成公司政策。」

她合上笔记本。
「你要清楚一件事：真正的平权是把门槛拉平，不是换个人挡在门口。
　这两样长得像，但方向是反的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「你要什么结果？出气，还是解决问题。」",timer:8,timeoutOption:"opt_drop_l11",options:[{id:"opt_full_l11",text:"投诉，同时保留起诉的权利。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_complaint_only",text:"投诉就行，不想打官司。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-10},next:"n_12"},{id:"opt_drop_l11",text:"算了。这行就这么大，得罪不起。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"},{id:"opt_revenge_l11",text:"把录音发给他们竞争对手。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`投诉受理回执上编号很长。

两周后那家公司来了电话，语气客气了很多，说岗位还在，问你有没有兴趣再聊聊。

你说谢谢，不用了。
挂了电话，你把回执拍照存进云盘，文件名写的是日期。`,next:"__END__"}],Uc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你掀了桌子。笔记本电脑砸在他小腿上。

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
它确实什么都没说，也确实什么都说了。`},{id:"e_f_rank",rank:"F",condition:"has('L11_F_BEHAVIOR')",title:"翻车 · 发出去的那段",script:`你把录音发到了职场社区，@了那家公司。

三万转发。评论区吵翻天。
第二天公司发声明，说录音经过剪辑，已报警处理。

录音没剪。但你证明不了——你发出去的是转码压缩过的版本，
原始文件在你手机里，可你已经点了删除，因为内存满了。

猎头开始不接你电话。
这行就这么大。`,unlock:"card_L11_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 发出去的那段",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L11_F"}],sf={id:$c,title:Mc,act:Nc,initState:Fc,cast:Dc,entryNode:Bc,lawyerCard:Hc,satireTargets:Gc,nodes:Vc,endings:Uc},of=Object.freeze(Object.defineProperty({__proto__:null,act:Nc,cast:Dc,default:sf,endings:Uc,entryNode:Bc,id:$c,initState:Fc,lawyerCard:Hc,nodes:Vc,satireTargets:Gc,title:Mc},Symbol.toStringTag,{value:"Module"})),jc="L12",Yc="第12关 · 署名顺序",qc=3,Kc={evidence:45,opinion:42,composure:42,risk:25},Wc=["hero","npc_l12_colleague","npc_l12_boss","zhou_you"],zc="n_01",Xc="card_law_L12",Jc=["T1","T3"],Zc=[{id:"n_01",type:"cutscene",pressure:1,script:`项目做了十一个月。方案是你出的，架构是你搭的，上线那周你在公司睡了四天。
结项材料要报集团评奖。署名表发到群里，第一作者那一栏空着。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l12_colleague",emotion:"earnest",text:"一作能不能给我？这个领域女性太少了，需要有人被看见。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"她是真心这么想的。这十一个月她也熬过三个通宵。",timer:8,timeoutOption:"opt_yield_l12",options:[{id:"opt_quantify",text:"咱们把各自做的部分列一下，按贡献排。我先列我的。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_04"},{id:"opt_email_it",text:"这个事我们邮件里说吧，抄送一下主管。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,risk:-10},next:"n_04"},{id:"opt_yield_l12",text:"行吧，给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20},next:"n_04"},{id:"opt_refuse_flat",text:"凭什么？活是我干的。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l12_boss",emotion:"smooth",text:"小陈啊，格局大一点。一个署名而已，你以后机会多的是。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"主管说这话的时候没抬头。他年底也要报评优。",timer:8,timeoutOption:"opt_cave_l12",options:[{id:"opt_written_criteria",text:"行。那署名规则按哪条来？咱们把标准写下来，以后都照这个。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:5,risk:-10},next:"n_06"},{id:"opt_co_first",text:"共同一作，附一份分工说明。两个人的贡献都写清楚。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_cave_l12",text:"……那就这样吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-15,risk:20},next:"n_06"},{id:"opt_confront_boss",text:"格局？这十一个月您来过几次？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:20},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l12_colleague",emotion:"hurt",text:"你这么坚持……是不是就是不想给女性机会。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室门开着。外面工位上有人抬起了头。",timer:8,timeoutOption:"opt_defend_l12",options:[{id:"opt_refuse_frame_l12",text:"我不接这个说法。我们现在谈的是这个项目谁做了什么。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:10,risk:-10},next:"n_08"},{id:"opt_facts_l12",text:"（把 commit 记录和评审纪要投到屏幕上）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,risk:-10},next:"n_08"},{id:"opt_defend_l12",text:"我什么时候不给女性机会了？你别乱扣帽子。",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_08"},{id:"opt_sarcasm_l12",text:"那我要是女的，这一作是不是就归我了。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-5,risk:15,addFlags:["L12_F_BEHAVIOR"]},next:"n_08"},{id:"opt_ally_l12",text:"（拨号问一句）沈律师，署名这个事有没有说法。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l12",text:"少拿性别说事。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l12",text:"（一把把笔记本电脑摔在桌上）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:2,script:`周攸从工位上站起来，走到门口。

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
你说：「这行小字是你换来的。」`,next:"__END__"}],Qc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 摔的那一下",script:`笔记本砸在桌上，屏幕裂了，碎片弹到她手背上。

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
评委问主管这个项目谁主导的，主管说：这个……材料上写着呢。`},{id:"e_f_rank",rank:"F",condition:"has('L12_F_BEHAVIOR')",title:"翻车 · 那句反问",script:`「那我要是女的，这一作是不是就归我了。」

这句话被人录了下来，发在部门群里，只有这一句。

没有上下文，没有前面那十一个月。
投诉当天就到了 HR。

三个月后你走了。离职原因写的是个人发展。

那一百四十三条 commit 记录，到最后也没人问起过。`,unlock:"card_L12_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 那句反问",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L12_F"}],rf={id:jc,title:Yc,act:qc,initState:Kc,cast:Wc,entryNode:zc,lawyerCard:Xc,satireTargets:Jc,nodes:Zc,endings:Qc},af=Object.freeze(Object.defineProperty({__proto__:null,act:qc,cast:Wc,default:rf,endings:Qc,entryNode:zc,id:jc,initState:Kc,lawyerCard:Xc,nodes:Zc,satireTargets:Jc,title:Yc},Symbol.toStringTag,{value:"Module"})),el="L13",tl="第13关 · 团建那句玩笑",nl=3,il={evidence:25,opinion:35,composure:36,risk:40},sl=["hero","npc_l13_hr","npc_l13_complainant","zhou_you","shen_li"],ol="n_01",rl="card_law_L13",al=["T1","T5"],cl=[{id:"n_01",type:"cutscene",pressure:1,script:`三周前，部门团建，KTV 包厢。
十一个人，两箱啤酒，唱到十一点半。
那天晚上很吵，你只记得笑得挺开心。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l13_hr",emotion:"official",text:"有同事投诉你，在团建上有不当言论。涉及性骚扰。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"小会议室，摄像头对着门。她面前摊着一个本子，写了半页。",timer:8,timeoutOption:"opt_scramble_l13",options:[{id:"opt_ask_specific",text:"具体是哪句话？什么时间说的？请给我完整原话。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_written_l13",text:"投诉是书面的吗？我能看到投诉材料吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_scramble_l13",text:"我说了什么？我……我想想，那天喝了点酒……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_deny_all_l13",text:"我什么都没说过。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-5,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l13_hr",emotion:"evasive",text:"投诉人希望保密。你先自己想想，那天说过什么。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"「你先自己想想」——这句话把举证责任整个翻了过来。",timer:8,timeoutOption:"opt_self_search",options:[{id:"opt_refuse_burden",text:"我没法对着空气回忆。请给我具体指控，我逐条回应。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_find_video",text:"那天有同事全程拍视频发朋友圈。原片能调，我建议先看原片。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_self_search",text:"（努力回忆，把能想起来的都说了一遍）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:-15,risk:15},next:"n_06"},{id:"opt_demand_name",text:"是谁投诉的？你让她出来当面对质。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l13_hr",emotion:"appease",text:"这样吧，你写个情况说明，态度诚恳点，这事就过去了。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她把一张空白 A4 推过来，笔帽已经拧开了。",timer:8,timeoutOption:"opt_write_apology",options:[{id:"opt_refuse_apology",text:"我可以写说明，但不写道歉。没查清之前，道歉就是认定。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-15},next:"n_08"},{id:"opt_ask_process_l13",text:"公司的投诉处理规程能给我一份吗？我按规程配合。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_write_apology",text:"（拿起笔，写了一份道歉说明）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_APOLOGY_LETTER","L13_F_BEHAVIOR"]},next:"n_08"},{id:"opt_walk_out_l13",text:"（把纸推回去，起身走人）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-20,composure:-5,risk:20},next:"n_08"},{id:"opt_ally_l13",text:"（走廊拨号）沈律师，HR 让我写份说明。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l13",text:"你们这叫调查？这叫定罪。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l13",text:"（把桌上的东西全扫到地上）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:3,script:`晚上周攸在楼下等你。她抱着电脑，站了很久的样子。

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

你回：不用。你那天问我那句话，问得对。`,next:"__END__"}],ll=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 小会议室",script:`杯子摔了，笔记本飞到墙上。HR 的手背划破了。

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

你想问哪件事，最后没问。`},{id:"e_f_rank",rank:"F",condition:"has('L13_F_BEHAVIOR')",title:"翻车 · 那份说明",script:`你写了。

「关于团建当晚言行不当一事，本人深感抱歉……」

这份说明被归进人事档案，摘要一句：
「经沟通，该员工已认识到问题并致歉。」

三周后原片被人翻出来了。02:36，笑得最大声的是她。

你去找 HR，说你看这个。
她说：可是你已经道歉了呀。

道歉这个动作，在流程里从来只有一种解释。`,unlock:"card_L13_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 那份说明",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L13_F"}],cf={id:el,title:tl,act:nl,initState:il,cast:sl,entryNode:ol,lawyerCard:rl,satireTargets:al,nodes:cl,endings:ll},lf=Object.freeze(Object.defineProperty({__proto__:null,act:nl,cast:sl,default:cf,endings:ll,entryNode:ol,id:el,initState:il,lawyerCard:rl,nodes:cl,satireTargets:al,title:tl},Symbol.toStringTag,{value:"Module"})),pl="L14",ul="第14关 · 匿名举报",dl=3,_l={evidence:30,opinion:35,composure:34,risk:45},fl=["hero","npc_l14_hr","npc_l14_director","zhou_you","shen_li"],gl="n_01",ml="card_law_L14",vl=["T1","T5"],hl=[{id:"n_01",type:"cutscene",pressure:2,script:`晋升公示第七天，最后一天。
名单贴出去六天了，没人有异议。明天就走流程。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l14_hr",emotion:"official",text:"今早收到一封匿名举报。指控你长期言语骚扰女同事。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"信是打印的，没有署名，没有日期，没有一件具体的事。",timer:8,timeoutOption:"opt_panic_l14",options:[{id:"opt_ask_content",text:"举报的具体内容是什么？时间、地点、当事人，我要逐条看到。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_rule_l14",text:"公司投诉受理规程是怎么规定的？匿名件能受理吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_panic_l14",text:"谁写的？是不是有人不想我升？",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_selfdoubt_l14",text:"……会不会是我平时哪句话没注意？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:4,speaker:"npc_l14_hr",emotion:"appease",text:"先停职配合调查吧。这样对你也好，省得大家议论。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"公示期停职，晋升自动作废。这一点她没说，你们都知道。",timer:8,timeoutOption:"opt_accept_suspension",options:[{id:"opt_demand_written",text:"停职可以。请出书面通知，写明系公司决定，与本人申请无关。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_refuse_suspension",text:"在查清之前停职，等于先定罪。我要求正常出勤配合调查。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_accept_suspension",text:"行吧。那我先回去等消息。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:-10,risk:25},next:"n_06"},{id:"opt_yell_l14",text:"凭一封匿名信就停我职？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_06"},{id:"opt_ally_l14",text:"（拨号）沈律师，他们要我先停职配合。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l14_hr",emotion:"stuck",text:"（笔停在纸上）这个……写成书面的，我得请示一下。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"她请示不下来。写了，公司就要为「凭匿名件停职」这件事签字。",timer:8,timeoutOption:"opt_wait_l14",options:[{id:"opt_email_summary",text:"（当场发邮件，把刚才的沟通复述一遍，抄送她和分管领导）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_08"},{id:"opt_union",text:"我申请工会和法务同时介入，全程留痕。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_ask_around",text:"（私下去问几个女同事，是不是她们写的）",tag:"TRAP",aggression:1,initiative:2,effects:{evidence:-25,opinion:-15,composure:-5,risk:25,addFlags:["L14_F_BEHAVIOR"]},next:"n_08"},{id:"opt_wait_l14",text:"（回工位等，什么也不做）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-10,risk:15},next:"n_08"}],impulsePool:[{id:"imp_curse_l14",text:"这封信谁写的，我早晚知道。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_08"}]},{id:"n_08",type:"dialogue",pressure:3,speaker:"npc_l14_director",emotion:"smooth",text:"小陈，我给你个建议——主动申请调个岗，体面。硬扛对谁都不好。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"分管领导亲自来的。他手上端着咖啡，站着没坐。",timer:8,timeoutOption:"opt_transfer",options:[{id:"opt_hold_line",text:"我不申请。查清楚之前，我做的任何动作都会被当成默认。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-10},next:"n_10"},{id:"opt_ask_him_written",text:"这个建议，能麻烦您也写进邮件里吗？我按建议办。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_10"},{id:"opt_transfer",text:"（想了想，还是提交了调岗申请）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:-10,risk:25},next:"n_10"},{id:"opt_resign_l14",text:"（当场提了离职）",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-25,opinion:-15,composure:-5,risk:25},next:"n_10"},{id:"opt_breath_l14",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_shove_l14",text:"（一把推开挡在门口的他）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`两周后，调查结论出来了。

举报信没有任何具体事实指向。调查组约谈了全组十四人，无一人证实。
发件邮箱是临时注册的，IP 指向公司内网访客网络。

结论一句话：投诉不成立。

沈骊看完，只说了一句：
「他们查了两周，最后查出来的其实是另一件事——
　凭这样一封信就能停一个人的职。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"HR 问：「那这个事，就到这儿了？」",timer:8,timeoutOption:"opt_end_it",options:[{id:"opt_fix_process_l14",text:"结论书面给我一份。另外，受理规程该改了——匿名件不能直接启动调查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_12"},{id:"opt_written_only",text:"结论书面给我一份就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:20,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_hunt",text:"我要查是谁写的。公司必须给我一个说法。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:20},next:"n_12"},{id:"opt_end_it",text:"到这儿吧。累了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`晋升补发了，日期倒签回原公示期。

新的受理规程挂在内网上，第三条加了一句：
「投诉须载明具体事实、时间及当事人，匿名件不予直接启动调查程序。」

周攸看到那条，截图发给你：「第三条。」
你回：「嗯。」`,next:"__END__"}],xl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口",script:`你推开了他。他手里的咖啡洒了一身，人撞在门框上。

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
那封匿名信也没人再提——它已经完成了它的全部工作。`},{id:"e_f_rank",rank:"F",condition:"has('L14_F_BEHAVIOR')",title:"翻车 · 你去问了",script:`你私下找了三个女同事，一个一个问：是不是你写的。

第二天，新的投诉进来了。这一次是实名的，三个人。
内容是：被举报人在调查期间私下接触潜在证人，施加压力。

这一条，你没法否认。因为你确实做了。

原来那封匿名信到最后也没查出是谁写的。
它不需要。它只需要你自己动起来。`,unlock:"card_L14_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 你去问了",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L14_F"}],pf={id:pl,title:ul,act:dl,initState:_l,cast:fl,entryNode:gl,lawyerCard:ml,satireTargets:vl,nodes:hl,endings:xl},uf=Object.freeze(Object.defineProperty({__proto__:null,act:dl,cast:fl,default:pf,endings:xl,entryNode:gl,id:pl,initState:_l,lawyerCard:ml,nodes:hl,satireTargets:vl,title:ul},Symbol.toStringTag,{value:"Module"})),kl="L15",yl="第15关 · 最后一张牌",Tl=3,Ll={evidence:40,opinion:40,composure:32,risk:50},bl=["hero","npc_l15_broker","npc_l15_hr","shen_li"],Al="n_01",wl="card_law_L15",Ol=["T4"],Pl=[{id:"n_01",type:"cutscene",pressure:2,script:`裁员名单下来了，你在上面。
公司给的方案是 N。按法律该是 2N，差了十九万。

谈判第三轮，人事说：这已经是最好的了。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l15_broker",emotion:"friendly",text:"（前同事，在楼下咖啡厅）陈哥，我这儿有份材料。你要是不签，它就得交上去。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"他把手机屏幕转过来一秒又收回去。你只看清了一个词：投诉。",timer:8,timeoutOption:"opt_beg_l15",options:[{id:"opt_record_l15",text:"（手机放桌上，屏幕朝上）什么材料？你把话说完整。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_price_l15",text:"你想要什么？直接说数。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:5,risk:-5},next:"n_04"},{id:"opt_beg_l15",text:"兄弟，咱们这么多年了，你别这样。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_04"},{id:"opt_rage_l15",text:"你他妈也是个东西。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l15_broker",emotion:"cold",text:"八万。你签 N 走人，八万给我。这材料就烂在我手里。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"他说完喝了口咖啡。杯子放下的时候手很稳。",timer:8,timeoutOption:"opt_pay_l15",options:[{id:"opt_police_l15",text:"（当场报警）有人以举报相要挟，向我索要八万。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_confirm_price",text:"八万。刚才这个数，你再说一遍，我没听清。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_06"},{id:"opt_pay_l15",text:"（打开转账）行，八万。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_threaten_l15",text:"你敢交上去，我弄死你。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:25},next:"n_06"},{id:"opt_ally_l15",text:"（拨号）沈律师，有人拿举报跟我要钱。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l15_hr",emotion:"smooth",text:"（下午，会议室）小陈，我们收到点情况反映。你看，N 是不是也挺好。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"上午八万，下午 N。这两件事之间隔着四个小时。",timer:8,timeoutOption:"opt_sign_l15",options:[{id:"opt_link_them",text:"什么情况反映？麻烦书面给我。另外今天上午的事，我已经报警了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-15},next:"n_08"},{id:"opt_arbitration",text:"赔偿按法定标准。谈不拢，我走劳动仲裁。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_sign_l15",text:"（签了 N 的协议）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:5,risk:25},next:"n_08"},{id:"opt_blowup_l15",text:"（在会议室拍桌子）你们是不是串通好的？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:15},next:"n_08"},{id:"opt_breath_l15",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l15",text:"一个个的，都不是人。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_08"},{id:"imp_hit_l15",text:"（下楼堵住他，一拳打过去）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:2,script:`沈骊把录音听完，停在第四分十一秒。

「八万。你签 N 走人，八万给我。这材料就烂在我手里。」

「这一句就够了。」她说，「以举报相要挟索取财物，数额较大。
　这不是职场纠纷，这是刑事案件。」

她把两条线画在纸上。
「刑事这条，公安办。劳动这条，仲裁办。」
「两条线分开走，谁也别耽误谁。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"沈骊：「有一件事你得想清楚——报警之后，公司也会知道。」",timer:8,timeoutOption:"opt_hesitate_l15",options:[{id:"opt_both_lines",text:"两条线一起走。刑事报案，仲裁同时立。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_10"},{id:"opt_arb_only",text:"先走仲裁。刑事那条留着。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_hesitate_l15",text:"……那算了，别报警了。这行就这么大。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:20},next:"n_10"},{id:"opt_expose_l15",text:"把录音发到行业群，让所有人看看他什么货色。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25,addFlags:["L15_F_BEHAVIOR"]},next:"n_10"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`刑事立案通知书下来那天，人事主动打了电话。

「陈先生，之前的方案我们再研究了一下。」
「2N，另外这个月的绩效正常发。」

那份「情况反映」，从头到尾没人再提过。
因为它压根就不存在——立案后调查组问过，他一个字都拿不出来。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"他给你发了条微信，很长。最后一句是：能不能撤案。",timer:8,timeoutOption:"opt_soften_l15",options:[{id:"opt_no_withdraw",text:"（截图存证。回一句：这个不归我决定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_no_reply_l15",text:"（不回。截图交给办案民警）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-10},next:"n_12"},{id:"opt_soften_l15",text:"（回：我尽量。）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-5,risk:20},next:"n_12"},{id:"opt_taunt_l15",text:"（回：你也有今天。）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-10,opinion:-20,composure:5,risk:20},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`离职手续办完那天，他被取保候审。

出公司大门的时候你回头看了一眼那栋楼。
十一年。

沈骊在路边等你，车窗摇下来：「上车吧，堵着呢。」`,next:"__END__"}],Rl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一拳",script:`你在楼下堵住他，一拳打在他脸上。鼻梁骨折。

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
定了价的东西，后面都是复购。`},{id:"e_f_rank",rank:"F",condition:"has('L15_F_BEHAVIOR')",title:"翻车 · 发出去的那段",script:`你把录音发到了行业群，两百多人。

当天下午群里就有人截图转出去了，加了配文。
第二天他发了律师函，说你侵犯名誉权、泄露个人信息。

他敲诈这件事，警察还在查。
你发录音这件事，一天就查完了。

最后各罚一半：他赔你，你赔他。
数额差不多，抵了。

2N 的仲裁开庭那天，公司提交了一份材料：
员工在离职期间将内部沟通录音公开传播。`,unlock:"card_L15_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 发出去的那段",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L15_F"}],df={id:kl,title:yl,act:Tl,initState:Ll,cast:bl,entryNode:Al,lawyerCard:wl,satireTargets:Ol,nodes:Pl,endings:Rl},_f=Object.freeze(Object.defineProperty({__proto__:null,act:Tl,cast:bl,default:df,endings:Rl,entryNode:Al,id:kl,initState:Ll,lawyerCard:wl,nodes:Pl,satireTargets:Ol,title:yl},Symbol.toStringTag,{value:"Module"})),El="L16",Sl="第16关 · 三十秒剪辑",Il=4,Cl={evidence:35,opinion:20,composure:40,risk:40},$l=["hero","npc_l16_account","shen_li","zhou_you","crowd"],Ml="n_01",Nl="card_law_L16",Fl=["T2","T4"],Dl=[{id:"n_01",type:"cutscene",pressure:3,script:`周一早上七点，你在地铁上刷到自己。

三十秒。标题是《扒一扒身边的连环猎手》。

地铁那三分钟，剪了五秒——只有她指着你的那一下。
健身房，剪了四秒——只有你伸手的那一帧。
团建包厢，剪了三秒——只有你说话的那半句。

拼在一起，是一个人的十一年。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（转发四万二。评论区最上面那条：这种人怎么还在上班。）",next:"n_03"},{id:"n_03",type:"choice",pressure:4,prompt:"手机在你手里烫。还有六站到公司。",timer:8,timeoutOption:"opt_comment_fight",options:[{id:"opt_notarize",text:"（先做证据保全公证。截图、录屏、转发数，全部固定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_platform_report",text:"（走平台投诉通道，提交完整原片作为对照）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_comment_fight",text:"（在评论区下场，一条一条回）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-20,composure:-15,risk:15},next:"n_04"},{id:"opt_beg_delete",text:"（私信对方：求你删了，我给你钱）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:5,speaker:"npc_l16_account",emotion:"businesslike",text:"（私信回复）视频是网友投稿，我们只是转发。有异议走平台申诉哦～",next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"转发破十万。你妈打来电话，问你是不是出事了。",timer:8,timeoutOption:"opt_panic_l16",options:[{id:"opt_release_full",text:"（把三段完整原片一次性发出来，附每一段的书面结论）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:30,composure:5,risk:-5},next:"n_06"},{id:"opt_lawyer_letter_l16",text:"（律师函，同时向平台提交完整证据包）",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-10},next:"n_06"},{id:"opt_panic_l16",text:"（发一条长文自证，写了两千字）",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-10,opinion:-20,composure:-15,risk:15},next:"n_06"},{id:"opt_counter_edit",text:"（自己也剪一个，把对方的黑历史拼进去）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-25,opinion:-20,risk:25,addFlags:["L16_F_BEHAVIOR"]},next:"n_06"},{id:"opt_breath_l16",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_05",oncePerNode:!0}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:4,script:`完整版发出去了。

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
「两次都在别人的案子里。」`,next:"__END__"}],Bl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 找上门",script:`你找到了那家公司的地址，冲进去把设备砸了。

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

你才明白：你付的不是删帖费，是订阅费。`},{id:"e_f_rank",rank:"F",condition:"has('L16_F_BEHAVIOR')",title:"翻车 · 你也剪了一个",script:`你自己剪了一个，把对方的黑历史拼进去，发了出来。

三小时后对方发了声明：本人遭遇恶意剪辑，已报警。

他们说的是真的。你确实剪了。

从这一刻起，这件事不再是「谁在造谣」，
而是「两个剪视频的人在互相造谣」。

完整版你也发了。没人看。
因为你已经不是那个只有完整版的人了。`,unlock:"card_L16_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 你也剪了一个",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L16_F"}],ff={id:El,title:Sl,act:Il,initState:Cl,cast:$l,entryNode:Ml,lawyerCard:Nl,satireTargets:Fl,nodes:Dl,endings:Bl},gf=Object.freeze(Object.defineProperty({__proto__:null,act:Il,cast:$l,default:ff,endings:Bl,entryNode:Ml,id:El,initState:Cl,lawyerCard:Nl,nodes:Dl,satireTargets:Fl,title:Sl},Symbol.toStringTag,{value:"Module"})),Hl="L17",Gl="第17关 · 人肉",Vl=4,Ul={evidence:40,opinion:10,composure:28,risk:45},jl=["hero","npc_l17_father","npc_l17_hr","shen_li","crowd"],Yl="n_01",ql="card_law_L17",Kl=["T2","T4"],Wl=[{id:"n_01",type:"cutscene",pressure:4,script:`周四凌晨两点，一个文档在群里传开了。

姓名、身份证号、公司地址、工位号。
父母的住址，你爸的手机号。
念念的幼儿园名字，和班级。

标题是：《人肉不是目的，正义才是》。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:5,speaker:"npc_l17_father",emotion:"confused",text:"（清晨五点四十的电话）小屿，家里电话一晚上没停。你妈吓得没睡。",next:"n_03"},{id:"n_03",type:"choice",pressure:5,prompt:"他没问你做了什么。他只问：要不要报警。",timer:8,timeoutOption:"opt_collapse_l17",options:[{id:"opt_protect_parents",text:"爸，现在关机。我今天回去接你们，先住我这儿。我来报警。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:15,risk:-10},next:"n_04"},{id:"opt_notarize_l17",text:"（先做全网证据公证，把那个文档和传播路径全部固定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_collapse_l17",text:"（说不出话，挂了电话）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-20,risk:15},next:"n_04"},{id:"opt_doxx_back",text:"（开始扒对方。三个小时后你有了他的住址）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-30,opinion:-15,risk:25,addFlags:["G_NEG_DOXXED_BACK","L17_F_BEHAVIOR"]},next:"n_04"},{id:"opt_ally_l17",text:"（拨号，声音发抖）沈律师……我爸妈那边。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:5,speaker:"npc_l17_hr",emotion:"pressured",text:"陈屿，前台今天接了六百多个电话。老板问我们要个说法。",next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"幼儿园老师也发了消息，问最近要不要换人接送。",timer:8,timeoutOption:"opt_resign_l17",options:[{id:"opt_full_response",text:"（给公司一份完整证据包 + 公证书 + 报案回执。请公司走法务）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06"},{id:"opt_report_crime",text:"（向公安报案：侵犯公民个人信息、寻衅滋事）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_resign_l17",text:"（提离职。不想连累公司）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:-10,risk:20},next:"n_06"},{id:"opt_public_beg",text:"（发一条公开求饶：放过我家人，冲我来）",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-15,opinion:-25,composure:-15,risk:15},next:"n_06"},{id:"opt_breath_l17",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_05",oncePerNode:!0}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:4,script:`沈骊来的时候你在楼道抽烟。已经抽到第七根。

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
「你就把这事办完。」`,next:"__END__"}],zl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你找过去了",script:`你按扒到的地址找过去，砸了门，打了人。

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

你没问是不是因为那件事。`},{id:"e_f_rank",rank:"F",condition:"has('L17_F_BEHAVIOR')",title:"翻车 · 你也扒了他",script:`你花了三个小时，扒到了他的住址、单位、他老婆的名字。
然后你发出去了。

那一刻很爽。真的很爽。

第二天他报警了。侵犯公民个人信息，你被立案。

案卷里现在有两份文档：他扒你的，你扒他的。
办案民警把两份并排放着，问你有什么要说的。

你说他先扒的我。
民警点点头，在笔录上记了一行。
然后翻页，继续问下一个问题。

从这一页开始，你们是同一类案由。`,unlock:"card_L17_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 你也扒了他",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L17_F"}],mf={id:Hl,title:Gl,act:Vl,initState:Ul,cast:jl,entryNode:Yl,lawyerCard:ql,satireTargets:Kl,nodes:Wl,endings:zl},vf=Object.freeze(Object.defineProperty({__proto__:null,act:Vl,cast:jl,default:mf,endings:zl,entryNode:Yl,id:Hl,initState:Ul,lawyerCard:ql,nodes:Wl,satireTargets:Kl,title:Gl},Symbol.toStringTag,{value:"Module"})),Xl="L18",Jl="第18关 · 直播间的生意",Zl=4,Ql={evidence:55,opinion:30,composure:38,risk:35},ep=["hero","npc_l18_streamer","shen_li","crowd"],tp="n_01",np="card_law_L18",ip=["T4"],sp=[{id:"n_01",type:"cutscene",pressure:2,script:`一个百万粉的账号发来连线邀请。
主题写着：《正面对话：被网暴的他，和为她们说话的我》。

沈骊说别去。
然后她说：「但你要是去，我们先把要问的问题写出来。」`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l18_streamer",emotion:"warm_pro",text:"（开播）欢迎陈先生。我们今天不吵架，我们讲事实，好吗？",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"在线四万七。弹幕已经刷满了。她笑得很真诚。",timer:8,timeoutOption:"opt_defend_l18",options:[{id:"opt_agree_terms",text:"好。那我们先约定：讲事实的时候，材料要能查证。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-10},next:"n_04"},{id:"opt_open_materials",text:"（把三份书面结论的编号，直接念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_defend_l18",text:"我先说明一下，那个视频是剪辑的……",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-15,opinion:-20,composure:-15,risk:15},next:"n_04"},{id:"opt_attack_l18",text:"你敢不敢先说说你一个月靠这个赚多少？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:4,speaker:"npc_l18_streamer",emotion:"pivot",text:"可是陈先生，这么多女性都感到被冒犯，这个感受总不会是假的吧？",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"弹幕瞬间刷成一片。这个问题她问过很多次，答案她也准备好了。",timer:8,timeoutOption:"opt_flustered_l18",options:[{id:"opt_two_things",text:"感受不假。我从没否认过。但处理指控要靠事实——这两件事不冲突。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:25,opinion:30,composure:10,risk:-5},next:"n_06"},{id:"opt_ask_which",text:"「这么多女性」是多少位？她们各自被冒犯的是哪一件事？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_flustered_l18",text:"我……我不是这个意思。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-20,composure:-15,risk:15},next:"n_06"},{id:"opt_dismiss_l18",text:"感受不能当证据。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l18_streamer",emotion:"pro",text:"我们不纠结细节。我想聊的是这个现象背后的结构性问题。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她转向大屏，准备切下一个话题。运营在给她比手势。",timer:8,timeoutOption:"opt_follow_l18",options:[{id:"opt_hold_topic",text:"细节就是这件事本身。您先把刚才那个数字说完，我们再聊结构。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_08"},{id:"opt_data_l18",text:"（放出两组数据：剪辑版两千一百万，完整版四十七万）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_08"},{id:"opt_follow_l18",text:"（跟着她聊结构性问题）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-15,composure:-10,risk:15},next:"n_08"},{id:"opt_rage_l18",text:"别装了。你就是靠这个吃饭的。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-15,risk:15},next:"n_08"},{id:"opt_ally_l18",text:"（连线前拨号）沈律师，问题我拟好了，您看一下。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l18",text:"你他妈才是那个吃人血馒头的。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-20,composure:-10,risk:20,addFlags:["L18_F_BEHAVIOR"]},next:"n_08"},{id:"imp_smash_l18",text:"（摔了耳机，掀翻桌上的补光灯）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:5,script:`你把最后一张图放上去了。

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
「不过没关系。这十七个后面只有一个人。」`,next:"__END__"}],op=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 直播事故",script:`你在连线里失控了，摔了东西，骂了整整四十秒。

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
你说的每一句都是真的，加起来却像在狡辩。`},{id:"e_f_rank",rank:"F",condition:"has('L18_F_BEHAVIOR')",title:"翻车 · 那句人血馒头",script:`「你他妈才是那个吃人血馒头的。」

这一句被切出来，配上她当时的表情。
播放四千三百万。

她第二天发了条视频，说自己「第一次在直播里被这样辱骂」，
哭了大概十五秒。涨粉六十万。

那十七个账号的工商信息，你也发了。
转发一千二。

这就是这门生意的全部：
真相跑不过一句脏话。`,unlock:"card_L18_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 那句人血馒头",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L18_F"}],hf={id:Xl,title:Jl,act:Zl,initState:Ql,cast:ep,entryNode:tp,lawyerCard:np,satireTargets:ip,nodes:sp,endings:op},xf=Object.freeze(Object.defineProperty({__proto__:null,act:Zl,cast:ep,default:hf,endings:op,entryNode:tp,id:Xl,initState:Ql,lawyerCard:np,nodes:sp,satireTargets:ip,title:Jl},Symbol.toStringTag,{value:"Module"})),rp="L19",ap="第19关 · 各执一词",cp=4,lp={evidence:60,opinion:45,composure:42,risk:30},pp=["hero","npc_l19_moderator","npc_l19_pr","shen_li"],up="n_01",dp="card_law_L19",_p=["T5"],fp=[{id:"n_01",type:"cutscene",pressure:2,script:`平台申诉结果：不予处理。

理由一行字：「双方各执一词，暂无法认定。」

你提交的是三份盖章的书面结论、一份公证书、一份立案回执。
对方提交的是零。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l19_moderator",emotion:"scripted",text:"（客服）您好，我们已按规则审核。如有异议可以再次提交哦～",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"「再次提交」的入口，指向刚才那个已经驳回的表单。",timer:8,timeoutOption:"opt_resubmit",options:[{id:"opt_ask_rule_l19",text:"请告知本次适用的具体规则条款，以及「各执一词」的认定标准。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_04"},{id:"opt_escalate",text:"我要求上级复核，并请给出书面答复。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_resubmit",text:"（又提交了一次，附上同样的材料）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15},next:"n_04"},{id:"opt_rage_l19",text:"你们这审核就是走过场吧？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l19_pr",emotion:"smooth",text:"（公关负责人）陈先生，我们理解您。但平台不是裁判机构，我们只能中立。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"「中立」这个词他说了三遍。",timer:8,timeoutOption:"opt_accept_l19",options:[{id:"opt_define_neutral",text:"一方有六份盖章材料，一方零份。判成平手不叫中立，叫选边。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:25,opinion:30,composure:10,risk:-5},next:"n_06"},{id:"opt_regulator",text:"既然平台不裁判，那我向网信部门投诉，请监管来看这个流程。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,risk:-10},next:"n_06"},{id:"opt_accept_l19",text:"那……我还能怎么办呢。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_06"},{id:"opt_threaten_l19",text:"信不信我把你们也告了。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_06"},{id:"opt_ally_l19",text:"（拨号）沈律师，平台驳回了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l19_pr",emotion:"stuck",text:"……这个说法，我需要向上反馈一下。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"沈骊在旁边把笔记本打开了，一直在记。",timer:8,timeoutOption:"opt_wait_l19",options:[{id:"opt_written_all",text:"麻烦把今天的沟通形成书面纪要，双方签字。我这边也记了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_timeline",text:"请给一个明确的答复时限。到期没有答复，我按无答复处理。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_08"},{id:"opt_wait_l19",text:"（等他们反馈）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:15},next:"n_08"},{id:"opt_media_l19",text:"（把整个申诉过程发到网上）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:20,addFlags:["L19_F_BEHAVIOR"]},next:"n_08"},{id:"opt_breath_l19",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l19",text:"你们就是等我耗死。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l19",text:"（把材料摔在会议桌上，推翻椅子走人）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:3,script:`网信部门的约谈函发过去了第九天，平台复核结果出来了。

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
「开庭大概在三个月后。」`,next:"__END__"}],gp=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你把材料摔了，推翻了椅子，一个工作人员的手被划伤。

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

系统提示：您本月的申诉次数已用完。`},{id:"e_f_rank",rank:"F",condition:"has('L19_F_BEHAVIOR')",title:"翻车 · 发出去的申诉记录",script:`你把整个申诉过程发到了网上，包括客服的对话截图。

平台以「泄露平台内部沟通内容」为由，判定你违反用户协议。
账号永久封禁。

那六份盖章材料还在你手上。
只是现在，你没有地方提交它们了。`,unlock:"card_L19_F"},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 发出去的申诉记录",script:`到这一步，你心里那口气，先散了。

不是因为哪一步做错——是每一步都差了半分。该留下的没留全，该说的没说稳，该等的没等住。

事情过去了。你在名单上、在截图里、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那天在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L19_F"}],kf={id:rp,title:ap,act:cp,initState:lp,cast:pp,entryNode:up,lawyerCard:dp,satireTargets:_p,nodes:fp,endings:gp},yf=Object.freeze(Object.defineProperty({__proto__:null,act:cp,cast:pp,default:kf,endings:gp,entryNode:up,id:rp,initState:lp,lawyerCard:dp,nodes:fp,satireTargets:_p,title:ap},Symbol.toStringTag,{value:"Module"})),mp="L20",vp="第20关 · 对簿",hp=4,xp={evidence:60,opinion:50,composure:60,risk:30},kp=["hero","he_song","zhou_you","shen_li","crowd"],yp="n_01",Tp="card_law_L20",Lp=["T2","T4","T5"],bp=[{id:"n_01",type:"cutscene",pressure:3,script:`开庭。第三法庭，旁听席坐满了。

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

划掉了。`,next:"__END__"}],Ap=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 最后一步",script:`你越过栏杆冲了过去。法警拦下你的时候，你已经碰到了他。

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

划掉了。`,unlock:"card_L20_F"}],Tf={id:mp,title:vp,act:hp,initState:xp,cast:kp,entryNode:yp,lawyerCard:Tp,satireTargets:Lp,nodes:bp,endings:Ap},Lf=Object.freeze(Object.defineProperty({__proto__:null,act:hp,cast:kp,default:Tf,endings:Ap,entryNode:yp,id:mp,initState:xp,lawyerCard:Tp,nodes:bp,satireTargets:Lp,title:vp},Symbol.toStringTag,{value:"Module"})),bf=Object.assign({"../../content/levels/L01.json":D_,"../../content/levels/L02.json":H_,"../../content/levels/L03.json":V_,"../../content/levels/L04.json":j_,"../../content/levels/L05.json":q_,"../../content/levels/L06.json":W_,"../../content/levels/L07.json":X_,"../../content/levels/L08.json":Z_,"../../content/levels/L09.json":ef,"../../content/levels/L10.json":nf,"../../content/levels/L11.json":of,"../../content/levels/L12.json":af,"../../content/levels/L13.json":lf,"../../content/levels/L14.json":uf,"../../content/levels/L15.json":_f,"../../content/levels/L16.json":gf,"../../content/levels/L17.json":vf,"../../content/levels/L18.json":xf,"../../content/levels/L19.json":yf,"../../content/levels/L20.json":Lf}),$t=Object.values(bf).map(e=>e.default).sort((e,t)=>e.id.localeCompare(t.id)),Af="破局实录",wf="开发预览 · M3 前置切片",Of={evidence:"证据",opinion:"舆论",composure:"情绪",risk:"风险"},Pf={hero:"陈屿",shen_li:"沈骊",officer_lin:"林昭",zhou_you:"周攸",he_song:"贺松",crowd:"围观者",narrator:"",npc_l01_woman:"红衣女子",npc_l02_woman:"住户女子",npc_l03_woman:"路人女子",npc_l03_daughter:"念念",npc_l04_woman:"报警人",npc_l05_woman:"女子",npc_l05_manager:"值班经理",npc_l05_witness:"目击大哥",npc_l06_girlfriend:"前女友",npc_l06_mother:"她母亲",npc_l07_ex:"前女友",npc_l08_wife:"妻子",npc_l08_mother:"岳母",npc_l08_child:"孩子",npc_l09_wife:"妻子",npc_l09_cousin:"表哥",npc_l10_exwife:"前妻",npc_l10_child:"女儿",npc_l10_teacher:"班主任",npc_l11_hr:"HR",npc_l12_colleague:"同事",npc_l12_boss:"部门老板",npc_l13_hr:"HR",npc_l13_complainant:"投诉人",npc_l14_hr:"HR 总监",npc_l14_director:"总监",npc_l15_broker:"中介",npc_l15_hr:"HR",npc_l16_account:"商务",npc_l17_father:"父亲",npc_l17_hr:"HR",npc_l18_streamer:"主播",npc_l19_moderator:"版务",npc_l19_pr:"公关",npc_l20_judge:"审判长",npc_l20_lawyer:"对方律师"},Rf={1:"第一幕 · 流量即真相",2:"第二幕 · 亲密关系的账",3:"第三幕 · 职场的规则",4:"第四幕 · 收网"},Ef={tapToContinue:"点击继续",secondsUnit:"s",endingTitle:"结局",restart:"再玩一次",nextLevel:"下一关",levelSelect:"选择关卡",lockedLevel:"未解锁",rankNames:{S:"名场面",A:"稳住了",B:"有惊无险",C:"勉强收场",F:"翻车"},finalMeters:"最终仪表",disclaimer:"本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。",progressLabel:"进度",soundToggle:"M",studyIntro:"测试开始前\\n请输入现场编号（如 P01）\\n\\n然后独立游玩前五关\\n过程中不会有任何提示\\n做完自动出现数据回收",studyPidPlaceholder:"现场编号",studyStart:"开始",studyDoneTitle:"第一幕完成",studyCopy:"导出数据（JSON）",studySummaryHeader:"参与者 {p} · {n} 次游玩",studySummaryLine:"{lv}: {rank}「{title}」 用时{s}秒 抉择{c}次 重玩{r}",stanceLow:"稳住",stanceHigh:"顶回去",pileALabel:"这条",pileBLabel:"那条",pileListHint:"选一个",swipeHint:"左右滑动选择 · 点按也可以",settlePhase1:"结算中",settleStampS:"教科书式破局",settleStampA:"稳稳落地",settleStampB:"有惊无险",settleStampC:"伤敌自伤",settleStampF:"满盘皆输",settleMetersTitle:"终局面",teachingHintComposure:"提示：在对方施压下稳住情绪，是达成最高评级的关键。",settleReplay:"本关重打",settleNext:"下一关",lawyerCardTitle:"【沈骊说】案情法律与应对实务复盘",lawyerCardBadge:"核心普法",lawyerCardBtn:"查看沈律师专业点评与法条依据",lawyerModalHeader:"沈骊律师 · 案情实务备忘录",lawyerModalClose:"已掌握破局要点",appTagline:"你不需要嘴更毒，你只需要比对手更懂规则",startAdventure:"开始破局",continueAdventure:"继续破局",recapTitle:"关键因果复盘",costComposure:"情绪",gainBreath:"恢复情绪",dangerImpulse:"极度危险",containsOptions:"内含 {n} 项应对",duelHeader:"危机对峙 · 抉择时刻",stanceCounter:"取证反制",stanceRebuttal:"拍案驳斥",stanceEvidence:"锁定证据",stanceHold:"稳守不自证",stanceBreath:"平复呼吸",stanceImpulse:"冲动失控",stanceNegotiate:"据理交涉",btnLog:"笔录",btnAuto:"自动",btnSkip:"快进",btnHide:"隐藏",backlogTitle:"案情对话笔录",backlogEmpty:"暂无历史笔录",tapToRestore:"点击任意处恢复界面",autoPlaying:"自动播放中",finaleTrue:"真结局 · 收网",finaleWin:"终局 · 胜诉",finaleCostly:"终局 · 惨胜",resumePrompt:"继续作答",timeoutNotice:"超时未决 · 系统替你选了"},Sf={L01:{label:"地铁三号线",hue:205,motif:"subway"},L02:{label:"住宅电梯",hue:220,motif:"elevator"},L03:{label:"商场中庭",hue:35,motif:"mall"},L04:{label:"深夜街道",hue:235,motif:"street"},L05:{label:"健身房",hue:15,motif:"gym"},L06:{label:"两家饭桌",hue:28,motif:"table"},L07:{label:"出租屋",hue:200,motif:"room"},L08:{label:"客厅",hue:40,motif:"room"},L09:{label:"民政局外",hue:210,motif:"office"},L10:{label:"学校门口",hue:45,motif:"street"},L11:{label:"面试间",hue:215,motif:"office"},L12:{label:"开放工位",hue:210,motif:"office"},L13:{label:"会议室",hue:220,motif:"office"},L14:{label:"总监办公室",hue:225,motif:"office"},L15:{label:"写字楼楼下",hue:200,motif:"street"},L16:{label:"剪辑室",hue:260,motif:"studio"},L17:{label:"家中",hue:30,motif:"room"},L18:{label:"直播间后台",hue:320,motif:"studio"},L19:{label:"平台工单页",hue:190,motif:"office"},L20:{label:"法院走廊",hue:210,motif:"court"}},If={calm:["前排","吃瓜","蹲后续","录下来了","别急，等反转","让子弹飞一会儿"],tense:["什么情况？?","有人认识吗","这女的厉害","这男的稳住啊","报警了吗","快报警","别拍了先帮个忙啊","主播别切","全网都在看"],hot:["热搜第一预定","已经录屏了","传到群里了","反转了反转了","坐等打脸","这瓜保熟","直播间炸了","三分钟了还在吵"]},Cf={hero:210,shen_li:280,officer_lin:195,zhou_you:150,he_song:350,npc_l01_woman:350,npc_l02_woman:330,npc_l03_woman:320,npc_l03_daughter:45,npc_l04_woman:160,npc_l05_woman:340,npc_l05_manager:30,npc_l05_witness:200,npc_l06_girlfriend:315,npc_l06_mother:280,npc_l07_ex:300,npc_l08_wife:330,npc_l08_mother:275,npc_l08_child:50,npc_l09_wife:320,npc_l09_cousin:25,npc_l10_exwife:310,npc_l10_child:55,npc_l10_teacher:165,npc_l11_hr:220,npc_l12_colleague:145,npc_l12_boss:25,npc_l13_hr:215,npc_l13_complainant:345,npc_l14_hr:225,npc_l14_director:20,npc_l15_broker:40,npc_l15_hr:218,npc_l16_account:35,npc_l17_father:205,npc_l17_hr:222,npc_l18_streamer:325,npc_l19_moderator:195,npc_l19_pr:285,crowd:0},$f={appTitle:Af,appSub:wf,meters:Of,speakerNames:Pf,actNames:Rf,ui:Ef,scenes:Sf,danmaku:If,speakerHues:Cf},fe=$f;function Et(e){const t=fe.ui[e];return typeof t=="string"?t:""}function xs(e){return!e||e==="null"?"":fe.speakerNames[e]??e}function ei(e){return fe.speakerHues[e]??220}function wp(e){return fe.scenes[e]??{label:"",hue:210,motif:"room"}}const Mf={class:"hud"},Nf={class:"label"},Ff={class:"icon","aria-hidden":"true"},Df={class:"bar"},Bf={class:"val-wrap"},Hf={class:"num"},Gf=rt({__name:"MeterHud",props:{state:{}},setup(e){const t=e;let n=0;const i=J({evidence:null,opinion:null,composure:null,risk:null}),s={};we(()=>({...t.state}),(a,c)=>{if(!c)return;const l=["evidence","opinion","composure","risk"];for(const p of l){const _=a[p]-c[p];if(_!==0){n+=1;const h=p==="risk"?_<0:_>0;i.value[p]={text:(_>0?"+":"")+_,dir:h?"pos":"neg",key:n},s[p]!==void 0&&clearTimeout(s[p]),s[p]=setTimeout(()=>{i.value[p]=null},1400)}}});const o={evidence:"⚖️",opinion:"📢",composure:"🧘",risk:"⚡"},r=ne(()=>[{k:"evidence",kind:"good"},{k:"opinion",kind:"good"},{k:"composure",kind:"good"},{k:"risk",kind:"bad"}].map(({k:c,kind:l})=>({key:c,label:fe.meters[c],value:t.state[c],kind:l})));return(a,c)=>(E(),M("div",Mf,[(E(!0),M(ke,null,Bt(r.value,l=>(E(),M("div",{key:l.key,class:_e(["meter",[l.key,l.kind,{"is-tense":l.key==="composure"&&l.value<30,"is-crisis":l.key==="risk"&&l.value>=70}]])},[f("span",Nf,[f("i",Ff,I(o[l.key]),1),Ct(I(l.label),1)]),f("div",Df,[f("div",{class:"fill",style:Ne({width:Math.min(100,Math.max(0,l.value))+"%"})},null,4)]),f("div",Bf,[f("span",Hf,I(l.value),1),Te(Sd,{name:"float"},{default:ds(()=>[i.value[l.key]?(E(),M("span",{key:i.value[l.key].key,class:_e(["delta",i.value[l.key].dir])},I(i.value[l.key].text),3)):se("",!0)]),_:2},1024)])],2))),128))]))}}),vt=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},Vf=vt(Gf,[["__scopeId","data-v-f8bd0050"]]);function Uf(e,t){const n=220*Math.pow(2,Math.round(e/30)%12/12);return t==="tense"?{root:n,steps:[0,2,3,5,7,8,10]}:t==="panic"?{root:n,steps:[0,1,3,6,7,9,10]}:{root:n*1.5,steps:[0,2,4,7,9,12,14]}}function fo(e,t){const n=Math.floor(t/e.steps.length),i=(t%e.steps.length+e.steps.length)%e.steps.length;return e.root*Math.pow(2,(e.steps[i]??0)/12+n)}function go(e){let t=e|0;return()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>8&16777215)/16777216)}class jf{constructor(){ye(this,"ctx",null);ye(this,"master",null);ye(this,"bgmGain",null);ye(this,"sfxGain",null);ye(this,"bgmTimer",null);ye(this,"mood","calm");ye(this,"hue",210);ye(this,"step",0);ye(this,"rnd",go(42));ye(this,"muted",!1)}unlock(){if(this.ctx===null){const t=globalThis.AudioContext;if(t===void 0)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.5,this.bgmGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.9,this.sfxGain.connect(this.master)}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master!==null&&this.ctx!==null&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone(t,n,i,s,o,r=0){if(this.ctx===null)return;const a=this.ctx.currentTime+r,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=s,c.frequency.value=t,l.gain.setValueAtTime(0,a),l.gain.linearRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+n),c.connect(l),l.connect(o),c.start(a),c.stop(a+n+.05)}pad(t,n){if(this.bgmGain===null||this.ctx===null)return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),o=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900,s.type="sawtooth",s.frequency.value=t/2,o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.05,i+n*.3),o.gain.linearRampToValueAtTime(1e-4,i+n),s.connect(r),r.connect(o),o.connect(this.bgmGain),s.start(i),s.stop(i+n+.1)}scene(t,n,i,s){const o=s<15||i>=4?"panic":i>=3||s<40?"tense":"calm";let r=0;for(let a=0;a<t.length;a+=1)r=r*31+t.charCodeAt(a)|0;(o!==this.mood||n!==this.hue)&&(this.mood=o,this.hue=n,this.rnd=go(r),this.step=0)}tick(){if(this.ctx===null||this.bgmGain===null||this.muted)return;const t=Uf(this.hue,this.mood),n=this.step%8,i=this.mood==="calm"?.35:this.mood==="tense"?.55:.75;if(this.rnd()<i){const s=Math.floor(this.rnd()*8),o=fo(t,s);this.tone(o,this.mood==="calm"?.9:.45,.06,this.mood==="calm"?"sine":"triangle",this.bgmGain)}n===0&&this.pad(fo(t,0),this.mood==="calm"?6.4:3.2),this.mood==="panic"&&(n===0||n===4)&&(this.tone(52,.14,.16,"sine",this.bgmGain),this.tone(52,.12,.12,"sine",this.bgmGain,.18)),this.step+=1}sfx(t){if(!(this.ctx===null||this.sfxGain===null||this.muted))switch(t){case"click":this.tone(880,.06,.1,"sine",this.sfxGain);break;case"stamp":this.tone(85,.22,.28,"sine",this.sfxGain),this.tone(220,.12,.18,"triangle",this.sfxGain,.01),this.tone(580,.06,.1,"sine",this.sfxGain,.02);break;case"decision":this.tone(660,.05,.12,"sine",this.sfxGain),this.tone(990,.09,.14,"triangle",this.sfxGain,.02);break;case"drawer":this.tone(440,.08,.06,"triangle",this.sfxGain),this.tone(554,.1,.05,"sine",this.sfxGain,.04);break;case"flash":this.tone(880,.06,.1,"sine",this.sfxGain),this.tone(1320,.12,.12,"sine",this.sfxGain,.04),this.tone(1760,.16,.1,"sine",this.sfxGain,.08);break;case"options":this.tone(523,.08,.09,"sine",this.sfxGain),this.tone(784,.1,.09,"sine",this.sfxGain,.07);break;case"tick":this.tone(1245,.04,.07,"square",this.sfxGain);break;case"ending":{const n=this.sfxGain;n!==null&&[523,659,784,1047].forEach((i,s)=>this.tone(i,.5,.08,"sine",n,s*.13));break}case"bad":{const n=this.sfxGain;n!==null&&[330,294,262,196].forEach((i,s)=>this.tone(i,.35,.09,"triangle",n,s*.15));break}}}startLoop(){if(this.bgmTimer!==null)return;const t=800;typeof setInterval=="function"&&(this.bgmTimer=setInterval(()=>this.tick(),t))}stopLoop(){this.bgmTimer!==void 0&&this.bgmTimer!==null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}}const ve=new jf,Yf={key:0,class:"nameplate"},qf={class:"np-name"},Kf={class:"textbox"},Wf={class:"text"},zf={key:0,class:"next-indicator"},Xf=rt({__name:"StoryBox",props:{speaker:{},text:{},kind:{},autoActive:{type:Boolean,default:!1}},emits:["advance","openLog","toggleAuto","skip","hideUi"],setup(e,{emit:t}){const n=e,i=t,s=fe.ui,o=ne(()=>n.speaker&&n.speaker!=="null"?xs(n.speaker):""),r=ne(()=>n.speaker?ei(n.speaker):220),a=J(""),c=ne(()=>a.value.length>=n.text.length);let l;function p(g){if(a.value="",l!==void 0&&clearInterval(l),typeof setInterval!="function"){a.value=g;return}let A=0;l=setInterval(()=>{A+=2,a.value=g.slice(0,A),A>=g.length&&l!==void 0&&(clearInterval(l),l=void 0)},26)}we(()=>n.text,g=>p(g),{immediate:!0});function _(){ve.sfx("click"),c.value?i("advance"):(a.value=n.text,l!==void 0&&(clearInterval(l),l=void 0))}function h(g){var S,q;const A=(q=(S=g.target)==null?void 0:S.tagName)==null?void 0:q.toLowerCase();A==="input"||A==="textarea"||(g.key===" "||g.key==="Enter"?(g.preventDefault(),_()):g.key==="l"||g.key==="L"?(g.preventDefault(),i("openLog")):g.key==="a"||g.key==="A"?(g.preventDefault(),i("toggleAuto")):(g.key==="h"||g.key==="H")&&(g.preventDefault(),i("hideUi")))}return tn(()=>{typeof window<"u"&&window.addEventListener("keydown",h)}),Vt(()=>{l!==void 0&&clearInterval(l),typeof window<"u"&&window.removeEventListener("keydown",h)}),(g,A)=>(E(),M("div",{class:_e(["gal-message-window",e.kind]),style:Ne({"--h":r.value}),onClick:_},[e.kind==="dialogue"&&o.value?(E(),M("div",Yf,[A[5]||(A[5]=f("span",{class:"np-dot"},null,-1)),f("span",qf,I(o.value),1)])):se("",!0),f("div",Kf,[f("p",Wf,I(a.value),1),c.value?(E(),M("span",zf,"▼")):se("",!0)]),f("div",{class:"quick-bar",onClick:A[4]||(A[4]=je(()=>{},["stop"]))},[f("button",{class:"qb-btn",onClick:A[0]||(A[0]=S=>g.$emit("openLog"))},[A[6]||(A[6]=f("i",{class:"qb-icon"},"📜",-1)),Ct(" "+I(L(s).btnLog),1)]),f("button",{class:_e(["qb-btn",{active:e.autoActive}]),onClick:A[1]||(A[1]=S=>g.$emit("toggleAuto"))},[A[7]||(A[7]=f("i",{class:"qb-icon"},"⚡",-1)),Ct(" "+I(L(s).btnAuto),1)],2),f("button",{class:"qb-btn",onClick:A[2]||(A[2]=S=>g.$emit("skip"))},[A[8]||(A[8]=f("i",{class:"qb-icon"},"⏩",-1)),Ct(" "+I(L(s).btnSkip),1)]),f("button",{class:"qb-btn",onClick:A[3]||(A[3]=S=>g.$emit("hideUi"))},[A[9]||(A[9]=f("i",{class:"qb-icon"},"👁",-1)),Ct(" "+I(L(s).btnHide),1)])])],6))}}),$i=vt(Xf,[["__scopeId","data-v-14ecfe62"]]),Jf={key:0,class:"duel-strike-flash","aria-hidden":"true"},Zf={class:"duel-blades-container"},Qf=["disabled","onClick"],e0={class:"card-meta"},t0={class:"meta-left"},n0={class:"key-badge","aria-hidden":"true"},i0={class:"meta-right"},s0={key:0,class:"opt-tag breath"},o0={key:1,class:"opt-tag warn"},r0={key:2,class:"opt-tag cost"},a0={class:"opt-row"},c0={class:"opt-content"},l0={class:"opt-text"},p0={class:"duel-anchored-box"},u0={class:"gauge-track"},d0=["aria-label"],_0={class:"duel-context-body"},f0={class:"prompt-row"},g0={class:"duel-badge"},m0={class:"duel-title"},v0={key:0,class:"scene-prompt"},h0={class:"resume-text"},x0=rt({__name:"ChoiceLayer",props:{options:{},timer:{},timeoutOptionId:{},prompt:{}},emits:["choose","openLog","timeout"],setup(e,{expose:t,emit:n}){const i=e,s=n,o=fe.ui,r=ne(()=>i.prompt??""),a=J(!1),c=J(null),l=J(!1),p=J(!1),_=J(!1);we(()=>i.options,()=>{var $,j;a.value=!1,c.value=null,l.value=!1,p.value=!1,_.value=!1,(j=($=te.value)==null?void 0:$.scrollTo)==null||j.call($,{top:0})});function h($){a.value||l.value||(a.value=!0,c.value=$.id,ve.sfx("stamp"),ve.sfx("decision"),N(),p.value=!0,_.value=!0,setTimeout(()=>{p.value=!1,_.value=!1},280),s("choose",$.id))}const g=J(i.timer),A=J(i.timer||12);let S,q=!1,W;const G=ne(()=>Math.max(0,Math.min(100,g.value/(A.value||12)*100)));function F(){if(!q&&(g.value-=1,g.value<=4&&g.value>0&&ve.sfx("tick"),g.value<=0&&(N(),!a.value))){a.value=!0;const $=i.options.find(j=>j.id===i.timeoutOptionId);$!==void 0&&(s("timeout",$.text),s("choose",$.id))}}function b(){N(),typeof setInterval=="function"&&(S=setInterval(F,1e3))}function N(){S!==void 0&&(clearInterval(S),S=void 0)}function z(){q=!0}function xe($=!1){$?(q=!1,l.value=!1):l.value=!0}function ge(){l.value=!1,q=!1,ve.sfx("click")}t({pause:z,resume:xe});function V($){var Q,Ve;if(a.value||q||l.value)return;const j=(Ve=(Q=$.target)==null?void 0:Q.tagName)==null?void 0:Ve.toLowerCase();if(j==="input"||j==="textarea")return;const Y=parseInt($.key,10);if(!isNaN(Y)&&Y>=1&&Y<=i.options.length){const At=i.options[Y-1];At&&($.preventDefault(),h(At))}}tn(()=>{b(),W=()=>{q=document.hidden},document.addEventListener("visibilitychange",W),typeof window<"u"&&window.addEventListener("keydown",V)}),Vt(()=>{N(),document.removeEventListener("visibilitychange",W),typeof window<"u"&&window.removeEventListener("keydown",V)}),we(()=>i.timer,$=>{g.value=$,A.value=$||12});function X($){return $.unlockBelow!==void 0||$.tag==="PHYSICAL"}function re($){return $.tag==="BREATH"}function v($){const j=$.initiative??0;return j>=2?j-1:0}function O($){return $.tag==="BREATH"?{label:o.stanceBreath??"",icon:"🧘",kind:"breath"}:X($)?{label:o.stanceImpulse??"",icon:"⚠️",kind:"impulse"}:{label:"",icon:"",kind:null}}const te=J(null);return($,j)=>(E(),M("div",{class:_e(["choice-layer confrontation-duel",{"duel-shaking":_.value,"clash-panic":g.value<=4}])},[p.value?(E(),M("div",Jf)):se("",!0),f("div",{ref_key:"listEl",ref:te,class:"duel-stage scroll"},[f("div",Zf,[(E(!0),M(ke,null,Bt(e.options,(Y,Q)=>(E(),M("button",{key:Y.id,type:"button",class:_e(["opt duel-blade",{impulse:X(Y),breath:re(Y),selected:c.value===Y.id,staggered:Q%2===1}]),disabled:a.value,onClick:Ve=>h(Y)},[f("div",e0,[f("div",t0,[f("span",n0,I(Q+1),1),O(Y).kind?(E(),M("span",{key:0,class:_e(["stance-badge",O(Y).kind])},I(O(Y).icon)+" "+I(O(Y).label),3)):se("",!0)]),f("div",i0,[re(Y)?(E(),M("span",s0,"🌿 +"+I(L(o).gainBreath),1)):X(Y)?(E(),M("span",o0,"⚠️ "+I(L(o).dangerImpulse),1)):v(Y)>0?(E(),M("span",r0,"⚡️ "+I(L(o).costComposure)+" -"+I(v(Y)),1)):se("",!0)])]),f("div",a0,[f("div",c0,[j[1]||(j[1]=f("span",{class:"blade-quote-mark left-quote","aria-hidden":"true"},"“",-1)),f("span",l0,I(Y.text),1),j[2]||(j[2]=f("span",{class:"blade-quote-mark right-quote","aria-hidden":"true"},"”",-1))])]),j[3]||(j[3]=f("div",{class:"blade-glow","aria-hidden":"true"},null,-1))],10,Qf))),128))])],512),f("div",p0,[f("div",{class:_e(["duel-tension-gauge",{panic:g.value<=4}])},[f("div",u0,[f("div",{class:"gauge-fill",style:Ne({width:`${G.value}%`})},null,4)]),f("div",{class:_e(["time",{panic:g.value<=4}]),role:"timer","aria-label":`剩余 ${g.value} 秒`},[f("span",null,I(g.value),1)],10,d0)],2),f("div",_0,[f("div",f0,[f("div",g0,[j[4]||(j[4]=f("span",{class:"duel-dot"},null,-1)),f("span",m0,I(L(o).duelHeader),1)]),f("button",{type:"button",class:"choice-log-btn",onClick:j[0]||(j[0]=Y=>$.$emit("openLog"))}," 📜 "+I(L(o).btnLog),1)]),r.value?(E(),M("p",v0,I(r.value),1)):se("",!0)])]),l.value?(E(),M("div",{key:1,class:"resume-shield",onClick:je(ge,["stop"])},[f("button",{type:"button",class:"resume-btn",onClick:je(ge,["stop"])},[j[5]||(j[5]=f("span",{class:"resume-icon"},"▶",-1)),f("span",h0,I(L(o).resumePrompt||"继续作答"),1)])])):se("",!0)],2))}}),k0=vt(x0,[["__scopeId","data-v-e35d72ed"]]),y0=""+new URL("rank_A-Buk7knaJ.mp4",import.meta.url).href,T0=""+new URL("rank_B-MEHXL8TX.mp4",import.meta.url).href,L0=""+new URL("rank_C-DOkhQSQI.mp4",import.meta.url).href,b0=""+new URL("rank_F-DPh74h1I.mp4",import.meta.url).href,A0=""+new URL("rank_S-BXJbetyP.mp4",import.meta.url).href,w0=[{id:"card_law_L01",level:"L01",body:`【沈骊说】

被指认的那一刻，你只有一件事要做：别让证据的天平继续往一边倒。

一、把手举起来。不是投降，是留证。周围二十个镜头，这一刻全是你的证人。
二、别走。转身离开在任何一段监控回放里，都长得像心虚。
三、报警人写你的名字。谁先报警，谁先陈述，谁掌握叙事的顺序——
　　这不是玄学，是实务。
四、当场要求调取监控。公共场所的监控存在覆盖周期，越早提出越好。
五、一分钱都别给。私下转账，事后很难解释成"息事宁人"以外的东西。

至于动手——
你但凡碰她一下，你的问题就从"有没有做过"变成"做了什么"。
前者可能查清，后者已经发生。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MEDIUM",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L02",level:"L02",body:`【沈骊说】

有人要求你解锁手机的时候，先分清两件事：谁在要求，以及凭什么。

一、私人之间没有搜查权。她可以怀疑，可以报警，唯独不能自己查。
二、你可以给她看锁屏，可以给她看你手机在哪，就是不解锁。
三、警察来了要查，那是另一回事，有程序，有记录，有边界。
四、什么都别删。你删的那一秒，问题就从「有没有」变成「删了什么」。
五、查验完了，要求把结果写进笔录。口头说清楚，等于没清楚。

最后一句给你记着：
配合，和放弃权利，长得很像。差别是后者你收不回来。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"HIGH",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L03",level:"L03",body:`【沈骊说】

先说最重要的：**别跑，别拉着孩子跑。**
在旁观者眼里，那一下等于认罪。而且孩子会被拽伤。

一、蹲下来，让孩子面对你，问她一句话。
　　她说不清没关系，她的反应本身就是回答。
二、你自己报警。开免提，让所有人听见你在报警。
三、身份材料随身：户口本照片、出生证明、亲子合照，存在手机里。
　　这不是防贼，是防「万一」。
四、当场要求调监控。你和孩子一路是怎么走过来的，监控比谁都清楚。
五、有人录，好事。请他从头录。
　　这类事情翻车，永远翻在只有半句话被听见。

至于动手——
这一次代价不落在你身上，落在你怀里那个人身上。
你推人的那一下，人群会晃。孩子会掉下去。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"LOW",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L04",level:"L04",body:`【沈骊说】

先说一句你可能不爱听的：她报警没有错。

一、看见前面独行的女生在回头，主动拉开距离，或者换条路。
　　这不是你有义务，是这么做对你自己最有利。
二、顺手打开导航。行程记录是你唯一能自动生成的证据。
三、警察来了，配合。别跑，别急，别喊冤。
　　「我下班回家」这句话，配上门禁记录才有分量，单说没用。
四、**笔录一定要逐行看完。**
　　里面每一句可能都是真的，但顺序、措辞、有没有省略，全是空间。
　　有异议当场提出来，让他改。改完再签。
五、查清楚以后，要一份书面情况说明。
　　三年后你填某张表，有一栏问你是否被公安机关询问过。
　　到那时候，你手上有没有这张纸，是两种人生。

最后：千万别撒谎。
你一撒谎，问题就从「你做没做」变成「你为什么骗我」。
后一个问题，没有好答案。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L05",level:"L05",body:`【沈骊说】

这一关我要先说件跟法律无关的事：你做得对。
杠铃压下来是要出人命的，你过去托那一下，没有任何问题。

然后说怎么保住你自己。

一、**别否认接触。** 有接触就是有接触。
　　你一说"我没碰"，监控一放，你就从被冤枉的人变成撒谎的人。
二、承认事实，然后立刻给出性质：碰在哪、多久、为什么。
　　「碰到了，托杠铃时手背蹭到手臂，零点几秒，监控有」——这一句话三层，缺一不可。
三、当场要求调监控。商业场所的存储周期通常很短。
四、找目击者。当场问，当场留联系方式。事后再找，人就散了。
五、**别接受口头处置。** 「你先别来了，等风头过去」听着是台阶，
　　实际是在没有认定的情况下让你承担后果。
　　不来可以，请书面写明理由。
六、查清之后要一份书面结果。理由不是为了出气。

　　理由是：下次杠铃压下来的时候，你还得能过去。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MEDIUM",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L06",level:"L06",body:`【沈骊说】

彩礼这件事，法律管得比你想的多。

一、把口头要求写下来。写的时候不是不信任，是把话说清楚。
　　一份写明用途与归属的协议，护的是两个人，不是防着谁。
二、提对等条件。对方要的如果是公平，她会答应；
　　如果一提对等就翻脸，那你已经知道答案了。
三、别借网贷。婚前的债，婚后大概率是你一个人的。
四、大额款项转账写清备注，留好凭证。
五、双方父母在场谈，别让两个年轻人单独扛。

最后一句：
真要谈钱，就把它当合同谈。
把合同谈成感情考验的那一方，通常不是想要钱那么简单。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"HIGH",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L07",level:"L07",body:`【沈骊说】

先把最重要的分清楚。

**真正的受害者，不会先开价。**
她要报案，那是她的权利，警察会依法受理、依法调查，这一点谁也不能拦。
但如果她说的是"给钱就不报"——那不是维权，那有另一个名字，
叫敲诈勒索。

一、她开价的那一秒，把录音打开。数字是她自己说的，这是核心证据。
二、一条记录都别删。哪怕是对你不利的那些。
　　删除的动作本身，比记录内容更致命。
三、别转账。任何名义都不行。转出去的钱，事后只有一种解释方向。
四、别独自见面，别在私密场所见面。要见，带人，或者约在有监控的地方。
五、报警、律师函，两条线一起走。

至于"青春损失费"——
恋爱不产生债权。分手不产生赔偿义务。
这不是我的观点，这是法律的沉默：它压根没规定过这个东西。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L08",level:"L08",body:`【沈骊说】

三件事，一件比一件重要。

一、鉴定要做，就找有司法鉴定资质的机构。
　　网上几百块那种，结论可能是对的，但在法庭上一个字都不算数。
　　你只有一次机会，别浪费在一份不能用的报告上。
二、报告拿到手，先别摊牌。先见律师。
　　摊牌之后，孩子可能被带走，证据可能消失，配合可能没了。
三、三年的抚养费，是可以起诉返还的。这有法律依据，别自己放弃。

第四件事跟法律没关系，但我还是要说：

那孩子什么都不知道。
你怎么处理她妈，和你怎么跟她告别，是两件事。
别把这两件事混在一起。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L09",level:"L09",body:`【沈骊说】

离婚冷静期是给感情用的，不是给转账用的。可总有人两样都用。

一、提离婚的当天，第一件事是查流水、打流水、盖章。
　　不是不信任，是留一个基准点。
二、发现异常，立刻申请财产保全。这件事有时效，晚一天就少一笔。
三、突然冒出来的"共同债务"，一律不认。
　　要认，请出借人到庭，说清楚钱怎么给的、从哪个账户出的。
　　虚构债务比转移财产严重得多，这一点对方通常没想清楚。
四、**你自己一分钱都不能转。**
　　法官不看金额，看性质。
　　你转两万四，和她转八十二万，在"转移共同财产"这一栏里是同一个字。
五、任何文件，看清楚再签。她说"签个字好办手续"的时候，尤其。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L10",level:"L10",body:`【沈骊说】

先说清楚，这段你必须听完。

人身安全保护令是个好东西。我办过的案子里，有女人靠它活下来。
所以，拿它来抢孩子的人，我最恨——
她们每用一次，下一个真需要它的人就难一分。

现在说你怎么办。

一、**严格遵守。** 哪怕它是错的，哪怕它离谱。
　　违反保护令的后果，比保护令本身重十倍。
二、五日内提复议。别等，别拖，别想着"开庭再说"。
三、逐条对着申请书找不在场证明：行程、监控、通话记录、打卡、邻居。
　　她写得越具体，越容易被推翻。
四、她挑衅，你截图。不回，或者只回一句"请通过律师联系"。
　　凌晨一点的对骂，第二天就是她的材料。
五、别去申请一个反向的保护令。那不是反击，那是把自己变成她。

最后。
如果孩子在马路对面朝你跑过来——

你得转身走。

我知道这句话有多难。但法律不看你忍不忍得住，只看你忍没忍住。
你退的那二十米，将来是你能站住的地方。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L11",level:"L11",body:`【沈骊说】

「同分优先女性」这句话，说出口的人往往不觉得自己在说什么。

一、面试涉及录用条件的部分，你有权要求书面反馈。开口要，别怕尴尬。
二、当场把沟通内容整理成邮件发给对方，请对方确认。
　　对方回一句"没有出入"，这封邮件的分量就变了。
三、录音的合法边界：你是对话参与方，为维护自身合法权益而录，
　　不侵犯他人隐私、不用于非法目的，通常是可以作为证据的。
四、就业歧视可以向劳动监察部门投诉，也可以起诉。两条路都在。
五、别发到网上。你发出去的是压缩转码版，原始文件反而容易丢。

最后一句：
真正的平权是把门槛拉平，不是换个人挡在门口。
这两样长得像，方向是反的。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L12",level:"L12",body:`【沈骊说】

署名、功劳、绩效——这类事没有法条，只有证据。

一、贡献要留痕，而且要实时留痕。
　　commit 记录、评审纪要、周报、邮件时间戳，这些东西事后补不出来。
二、争议一出现，立刻转到邮件，抄送主管和相关方。
　　微信里说一百句，不如邮件里说一句。
三、别在私下谈。私下谈的结论，第二天就可以不认。
四、提标准，别提立场。
　　"按贡献排"是标准，"活是我干的"是立场。前者对方没法反驳。
五、标准要对称：这次我占便宜我认，这次我吃亏我也认。
　　对称的标准，话术打不动。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"LOW",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L13",level:"L13",body:`【沈骊说】

被投诉的时候，最危险的一句话是"你先自己想想说过什么"。

一、要求具体化。哪一句、什么时间、什么场合、谁在场。
　　这不是刁难，这是任何调查都该有的起点。
二、要求看到投诉材料，或至少是完整的指控内容。
　　你没法回应一个你看不见的东西。
三、**不要写道歉信。**
　　你可以写情况说明，陈述事实。但不要写"我认识到问题"。
　　这句话进了档案，就是结论。
四、找原始记录：现场视频、录音、朋友圈原片、聊天记录。
　　完整版永远比片段对你有利——如果你确实没做。
五、别去逼证人表态。那是另一件事，而且是你自己新添的一件。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"HIGH",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L14",level:"L14",body:`【沈骊说】

匿名举报最狠的地方在于：你连反驳的对象都没有。

一、先问规程。多数公司的投诉受理规程要求载明具体事实和当事人，
　　匿名件通常不能直接启动调查。把这条找出来。
二、停职这件事，一定要书面。
　　而且要写清楚：系公司决定，与本人申请无关。
　　口头停职的成本是零，书面停职的成本是全部。他们会犹豫。
三、任何"为你好"的建议——调岗、休假、主动申请——
　　凡是要你自己动手的，一律要求对方写成书面建议。
　　他们不会写。
四、把每次沟通当场整理成邮件，抄送相关方。这是你唯一能自己造的证据。
五、申请工会、法务全程在场。别一个人进那间会议室。

**千万别去私下打听是谁写的。**
那一刻起，你就从被调查的人，变成了新的被投诉的人。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"HIGH",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L15",level:"L15",body:`【沈骊说】

有人拿举报当筹码找你要钱，这件事有名字，叫敲诈勒索。

一、让他把话说完整。金额、条件、后果，一句话说全。
　　半句话在证据上是没用的。
二、报警。以举报、曝光相要挟索取财物，数额较大的，是刑事案件。
三、**刑事和劳动是两条线，分开走。**
　　刑事归公安，劳动争议归仲裁。别指望一条线解决两件事，
　　也别因为一条线卡住就放弃另一条。
四、经济补偿该是多少就是多少。谈不拢就仲裁，这是你的权利，不是撕破脸。
五、一分钱都别给。
　　第一次给钱的那一刻，你不是在解决问题，你是在给自己定价。
　　定了价的东西，后面都是复购。

最后：别打他。
他勒索的是钱，你打断的是骨头。
法律看得见后者，因为后者留在片子上。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L16",level:"L16",body:`【沈骊说】

被剪辑的时候，你要做的第一件事不是解释，是固定。

一、证据保全公证。截图、录屏、转发数、传播路径，全部固定住。
　　你以后所有的主张，都建立在这一步上。
二、走平台投诉通道，提交完整原片作对照。别在评论区打。
三、放完整版。而且只放材料，不加评论。
　　材料齐了以后，说话是减分的。
四、别自己也剪一个。
　　你剪的那一刻，这件事就从"谁在造谣"变成"两个剪视频的人互相造谣"。
五、别私信求删帖，更别给钱。你付的不是删帖费，是订阅费。

记住一个数：剪辑版两千一百万，完整版四十七万。
差四十五倍。这不是意外，这是那门生意的毛利率。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MEDIUM",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L17",level:"L17",body:`【沈骊说】

人肉这件事，法律上有明确说法：侵犯公民个人信息。
情节严重的，是刑事案件，不是"网友情绪激动"。

一、家人第一。先让父母关机、换号、必要时换个地方住几天。
　　这件事排在所有法律动作前面。
二、全网证据公证。传播节点越多，越要早固定——删得比你截得快。
三、报案。侵犯公民个人信息、寻衅滋事，两个方向都可以。
四、跟单位说清楚，给完整证据包和报案回执。
　　别自己辞职。你一辞职，公司就默认这事是你的问题。
五、**别反向人肉。**
　　你扒回去的那一刻，案卷里就有了两份文档。
　　办案人员会把它们并排放着——从那一页开始，你们是同一类案由。

还有一句：热度会掉。
掉得比涨的时候慢很多，但它会掉。你要做的是撑到那一天，
并且撑到的时候，手上有东西。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L18",level:"L18",body:`【沈骊说】

要不要去连线？我的建议是别去。
但如果你去，先把要问的问题写下来。

一、开场先约定规则：讲事实，材料要能查证。对方通常不会拒绝，
　　而这一句话之后，整场的框架就归你了。
二、不要解释，念材料。编号、日期、出具单位。
　　解释听起来永远像狡辩，编号不会。
三、遇到"这么多人都感到被冒犯"——
　　不要否认感受，也不要接受它当证据。
　　「感受不假。但处理指控要靠事实。这两件事不冲突。」
四、对方要跳到"结构性问题"的时候，把话拉回具体。
　　细节就是这件事本身。
五、全程录屏。下播之后，你什么都别发。
　　尤其是赢了的时候。

最后：别骂人。
真相跑不过一句脏话——但那句脏话只要不是你说的，就跑不动。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"LOW",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L19",level:"L19",body:`【沈骊说】

平台说"我们中立"的时候，你要问一个问题：中立的标准是什么。

一、要求告知**具体适用条款**，以及认定标准。
　　含糊的驳回理由，问一句就站不住。
二、逐级申诉，每一级都要书面答复。口头答复等于没答复。
三、要求给出**明确的答复时限**。到期无答复，按无答复处理并向上主张。
四、平台不处理，向网信部门投诉。这条路是通的，而且比你想的有效。
五、每次沟通形成书面纪要，双方签字。你自己也记一份。

关键的一句话，你可以直接用：
「一方提供了盖章的书面结论，另一方零份材料。
　判成『各执一词』，不叫中立，叫选边。」

争到最后，最有价值的不是你的号解封了，
是规则改了。规则改了，后面的人不用再走一遍。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"HIGH",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]},{id:"card_law_L20",level:"L20",body:`【沈骊说】

最后一课，讲三件事。

一、**证据是攒出来的，不是找出来的。**
　　今天这四十七页，是两年里每一个你没有偷懒的瞬间。
　　那天你在地铁里举起手；那天你没解锁手机；
　　那天你在幼儿园门口转身走了；那天你没写那封道歉信。
　　当时每一件都是小事。今天它们加在一起，叫证据链。

二、**别在最后一步动手。**
　　对方等的就是这个。你走了两年，他只需要你走过来一步。

三、**判决书要公开。**
　　匿名化对你个人没有损失，但公开的判决会成为别人的线索。
　　你的案子结了，别人的还没开始。

——

至于赢了以后。

你会走出法院，会有风，手机会震一下，
新的热搜、新的话题、新的两方、新的一群人在对骂。

你划掉就行。

你解决不了那个。你只能解决你自己那一件。
但每一个把自己那一件解决干净的人，都让下一个人容易一点。

这就够了。

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]}],O0=["data-rank"],P0=["src"],R0={class:"stamp"},E0={key:0,class:"finale-badge"},S0={class:"word"},I0={class:"title"},C0={class:"script"},$0={class:"lb-left"},M0={class:"lb-badge"},N0={class:"lb-title"},F0={class:"lb-btn"},D0={class:"meters-card"},B0={class:"mc-title"},H0={class:"bars"},G0={class:"lbl"},V0={class:"track"},U0={class:"num"},j0={key:1,class:"teaching-hint"},Y0={class:"th-text"},q0={class:"disclaimer"},K0={class:"acts"},W0={class:"ld-head"},z0={class:"ld-title-group"},X0={class:"ld-badge"},J0={class:"ld-title"},Z0={class:"ld-body"},Q0={class:"ld-text"},eg={class:"ld-foot"},tg=rt({__name:"EndingCard",props:{ending:{},state:{},levelId:{default:""},finaleTier:{default:null}},emits:["restart","next"],setup(e,{emit:t}){const n=e,i=J(1),s=J(!1),o=J(!1),r=fe.ui,a=ne(()=>["L01","L02","L03","L04","L05"].includes(n.levelId)),c=ne(()=>a.value&&n.ending.rank!=="S"&&n.ending.rank!=="A"&&n.state.composure<30),l=ne(()=>r["settleStamp"+n.ending.rank]??""),p=ne(()=>({TRUE:r.finaleTrue??"",WIN:r.finaleWin??"",COSTLY:r.finaleCostly??""})),_=ne(()=>n.levelId==="L20"&&n.finaleTier!==null?p.value[n.finaleTier]??"":""),h=ne(()=>{const N=Object.entries(Object.assign({"../../../content/art/endings/rank_A.mp4":y0,"../../../content/art/endings/rank_B.mp4":T0,"../../../content/art/endings/rank_C.mp4":L0,"../../../content/art/endings/rank_F.mp4":b0,"../../../content/art/endings/rank_S.mp4":A0})).find(([z])=>z.endsWith("/rank_"+n.ending.rank+".mp4"));return(N==null?void 0:N[1])??""}),g=ne(()=>{const b=w0;if(n.levelId){const N=b.find(z=>z.level===n.levelId);if(N!==void 0)return N}return b.find(N=>n.ending.id.includes(N.level))??b[0]});let A,S;function q(){ve.sfx("stamp"),n.ending.rank==="S"||n.ending.rank==="A"?ve.sfx("ending"):n.ending.rank==="F"&&ve.sfx("bad")}tn(()=>{if(typeof setTimeout!="function"){i.value=3;return}A=setTimeout(()=>{i.value=2,q()},1200),S=setTimeout(()=>{i.value=3},2600)}),Vt(()=>{A!==void 0&&clearTimeout(A),S!==void 0&&clearTimeout(S)});function W(){i.value<2&&q(),A!==void 0&&(clearTimeout(A),A=void 0),S!==void 0&&(clearTimeout(S),S=void 0),i.value=3}function G(b){b.stopPropagation(),ve.sfx("drawer"),o.value=!0}function F(b){b.stopPropagation(),ve.sfx("click"),o.value=!1}return(b,N)=>(E(),M("div",{class:"cinema","data-rank":e.ending.rank,onClick:W},[h.value?(E(),M("video",{key:0,class:"bgvid",src:h.value,autoplay:"",muted:"",loop:"",playsinline:"",onCanplay:N[0]||(N[0]=z=>s.value=!0)},null,40,P0)):se("",!0),f("div",{class:_e(["dim",{deeper:i.value>=2}])},null,2),f("div",{class:_e(["stamp-wrap",{show:i.value>=2}])},[f("div",R0,[_.value?(E(),M("span",E0,I(_.value),1)):se("",!0),f("span",S0,I(l.value),1)])],2),f("div",{class:_e(["sheet",{show:i.value>=3}])},[f("h2",I0,I(e.ending.title),1),f("p",C0,I(e.ending.script),1),g.value?(E(),M("div",{key:0,class:"lawyer-bar",onClick:je(G,["stop"])},[f("div",$0,[f("span",M0,I(L(r).lawyerCardBadge),1),f("span",N0,I(L(r).lawyerCardTitle),1)]),f("span",F0,[Ct(I(L(r).lawyerCardBtn)+" ",1),N[4]||(N[4]=f("i",{class:"arr"},"›",-1))])])):se("",!0),f("div",D0,[f("div",B0,I(L(r).settleMetersTitle),1),f("div",H0,[(E(),M(ke,null,Bt(["evidence","opinion","composure","risk"],z=>f("div",{key:z,class:"bar"},[f("span",G0,I(L(fe).meters[z]),1),f("span",V0,[f("i",{style:Ne({width:Math.min(100,e.state[z])+"%"}),class:_e(z)},null,6)]),f("span",U0,I(e.state[z]),1)])),64))])]),c.value?(E(),M("div",j0,[N[5]||(N[5]=f("span",{class:"th-bulb"},"💡",-1)),f("span",Y0,I(L(r).teachingHintComposure),1)])):se("",!0),f("p",q0,I(L(fe).ui.disclaimer),1),f("div",K0,[f("button",{onClick:N[1]||(N[1]=je(z=>b.$emit("restart"),["stop"]))},I(L(r).settleReplay),1),f("button",{class:"primary",onClick:N[2]||(N[2]=je(z=>b.$emit("next"),["stop"]))},I(L(r).settleNext),1)])],2),o.value&&g.value?(E(),M("div",{key:1,class:"lawyer-mask",onClick:je(F,["stop"])},[f("div",{class:"lawyer-drawer",onClick:N[3]||(N[3]=je(()=>{},["stop"]))},[f("header",W0,[f("div",z0,[f("span",X0,I(L(r).lawyerCardBadge),1),f("span",J0,I(L(r).lawyerModalHeader),1)]),f("button",{class:"ld-close",onClick:je(F,["stop"])},"✕")]),f("div",Z0,[f("div",Q0,I(g.value.body),1)]),f("footer",eg,[f("button",{class:"ld-ok",onClick:je(F,["stop"])},I(L(r).lawyerModalClose),1)])])])):se("",!0)],8,O0))}}),ng=vt(tg,[["__scopeId","data-v-145d16ad"]]),ig={class:"select"},sg={class:"sel-header"},og={class:"header-top"},rg={class:"app-title"},ag={class:"tagline"},cg={class:"hero-cta-wrap"},lg={class:"cta-left"},pg={class:"cta-txt-group"},ug={class:"cta-action"},dg={class:"cta-sub"},_g={class:"list"},fg={key:0,class:"act-title"},gg={class:"act-levels"},mg=["onClick"],vg={class:"tid"},hg={class:"ttitle"},xg={class:"foot"},kg=rt({__name:"LevelSelect",props:{levels:{},best:{}},emits:["pick"],setup(e){const t=e,n=fe.ui,i=a=>a===void 0?"":"r"+a,s=ne(()=>{var a;for(const c of t.levels)if(!t.best[c.id])return c.id;return((a=t.levels[0])==null?void 0:a.id)??"L01"}),o=ne(()=>Object.keys(t.best).length>0),r=ne(()=>{const a={};for(const c of t.levels)(a[c.act]??(a[c.act]=[])).push(c);return Object.entries(a).map(([c,l])=>({act:Number(c),name:fe.actNames[c]??"",levels:l}))});return(a,c)=>(E(),M("div",ig,[f("header",sg,[f("div",og,[f("h1",rg,I(L(fe).appTitle),1),c[1]||(c[1]=f("span",{class:"version-tag"},"M3 切片",-1))]),f("p",ag,I(L(n).appTagline),1),f("div",cg,[f("button",{class:"hero-cta",onClick:c[0]||(c[0]=l=>a.$emit("pick",s.value))},[f("div",lg,[c[2]||(c[2]=f("span",{class:"play-btn"},"▶",-1)),f("div",pg,[f("span",ug,I(o.value?L(n).continueAdventure:L(n).startAdventure),1),f("span",dg,"进入 "+I(s.value),1)])]),c[3]||(c[3]=f("span",{class:"cta-arrow"},"›",-1))])])]),f("div",_g,[(E(!0),M(ke,null,Bt(r.value,l=>(E(),M("div",{key:l.act,class:"act-section"},[l.name?(E(),M("div",fg,I(l.name),1)):se("",!0),f("div",gg,[(E(!0),M(ke,null,Bt(l.levels,p=>(E(),M("button",{key:p.id,class:"level-btn",onClick:_=>a.$emit("pick",p.id)},[f("span",vg,I(p.id),1),f("span",hg,I(p.title),1),f("span",{class:_e(["badge",i(e.best[p.id])])},I(e.best[p.id]??"·"),3)],8,mg))),128))])]))),128))]),f("footer",xg,I(L(fe).ui.disclaimer),1)]))}}),yg=vt(kg,[["__scopeId","data-v-e1c5f01f"]]),Tg=""+new URL("L01-BJmHDizO.png",import.meta.url).href,Lg=""+new URL("L02-Cgrrfiit.png",import.meta.url).href,bg=""+new URL("L03-Dhb-92UY.png",import.meta.url).href,Ag=""+new URL("L04-Dxn6iz_R.png",import.meta.url).href,wg=""+new URL("L05-BCX3gD5-.png",import.meta.url).href,Og=""+new URL("L06-DPfiJfY4.png",import.meta.url).href,Pg=""+new URL("L07-DgpRWPjk.png",import.meta.url).href,Rg=""+new URL("L08-HGz_P2cJ.png",import.meta.url).href,Eg=""+new URL("L09-VpgvEvrb.png",import.meta.url).href,Sg=""+new URL("L10-D_mOdB4H.png",import.meta.url).href,Ig=""+new URL("L11-BXLJJDeb.png",import.meta.url).href,Cg=""+new URL("L12-DemYAPsM.png",import.meta.url).href,$g=""+new URL("L13-Dn-DLBYO.png",import.meta.url).href,Mg=""+new URL("L14-BLDD-heh.png",import.meta.url).href,Ng=""+new URL("L15-BVYsTDdi.png",import.meta.url).href,Fg=""+new URL("L16-kHk4EBk-.png",import.meta.url).href,Dg=""+new URL("L17-BomGMZbR.png",import.meta.url).href,Bg=""+new URL("L18-B2bLjWIc.png",import.meta.url).href,Hg=""+new URL("L19-DHpwxvAB.png",import.meta.url).href,Gg=""+new URL("L20-CyAYX9HG.png",import.meta.url).href,Vg=["src"],Ug={key:1,class:"photo-shade"},jg={key:2,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Yg={key:3,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},qg={key:4,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Kg={key:5,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Wg={key:6,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},zg={key:7,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Xg={class:"tag"},Jg=rt({__name:"SceneBackdrop",props:{levelId:{},pressure:{}},setup(e){const t=e,n=Object.assign({"../../../content/art/scenes/L01.png":Tg,"../../../content/art/scenes/L02.png":Lg,"../../../content/art/scenes/L03.png":bg,"../../../content/art/scenes/L04.png":Ag,"../../../content/art/scenes/L05.png":wg,"../../../content/art/scenes/L06.png":Og,"../../../content/art/scenes/L07.png":Pg,"../../../content/art/scenes/L08.png":Rg,"../../../content/art/scenes/L09.png":Eg,"../../../content/art/scenes/L10.png":Sg,"../../../content/art/scenes/L11.png":Ig,"../../../content/art/scenes/L12.png":Cg,"../../../content/art/scenes/L13.png":$g,"../../../content/art/scenes/L14.png":Mg,"../../../content/art/scenes/L15.png":Ng,"../../../content/art/scenes/L16.png":Fg,"../../../content/art/scenes/L17.png":Dg,"../../../content/art/scenes/L18.png":Bg,"../../../content/art/scenes/L19.png":Hg,"../../../content/art/scenes/L20.png":Gg}),i=J("");we(()=>t.levelId,a=>{const c=Object.entries(n).find(([l])=>l.endsWith("/"+a+".png"));i.value=c!==void 0?c[1]:""},{immediate:!0});const s=ne(()=>wp(t.levelId)),o=ne(()=>{const a=s.value.hue,c=8+Math.round(t.pressure*.8);return{background:`radial-gradient(120% 70% at 50% 18%, hsl(${a} 32% ${c+10}%) 0%, hsl(${a} 38% ${c}%) 45%, hsl(${a} 45% ${Math.max(4,c-4)}%) 100%)`}}),r=ne(()=>s.value.motif);return(a,c)=>(E(),M("div",{class:"backdrop",style:Ne(o.value)},[i.value?(E(),M("img",{key:0,class:"photo",src:i.value,alt:""},null,8,Vg)):se("",!0),i.value?(E(),M("div",Ug)):se("",!0),r.value==="subway"?(E(),M("svg",jg,[...c[0]||(c[0]=[Oi('<rect x="40" y="80" width="320" height="180" rx="14" class="win" data-v-b08529d1></rect><rect x="52" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="132" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="212" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="292" y="92" width="56" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="0" y="300" width="400" height="10" class="rail" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',7)])])):r.value==="elevator"?(E(),M("svg",Yg,[...c[1]||(c[1]=[f("rect",{x:"120",y:"60",width:"160",height:"440",rx:"6",class:"door"},null,-1),f("line",{x1:"200",y1:"60",x2:"200",y2:"500",class:"seam"},null,-1),f("circle",{cx:"200",cy:"530",r:"12",class:"lamp"},null,-1),f("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="street"?(E(),M("svg",qg,[...c[2]||(c[2]=[Oi('<line x1="60" y1="0" x2="60" y2="380" class="pole" data-v-b08529d1></line><rect x="48" y="380" width="24" height="8" rx="3" class="lamp" data-v-b08529d1></rect><rect x="0" y="430" width="400" height="6" class="rail" data-v-b08529d1></rect><rect x="0" y="470" width="400" height="4" class="rail dim" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):r.value==="court"?(E(),M("svg",Kg,[...c[3]||(c[3]=[f("rect",{x:"80",y:"120",width:"240",height:"90",rx:"4",class:"win"},null,-1),f("rect",{x:"100",y:"300",width:"200",height:"14",rx:"3",class:"desk"},null,-1),f("rect",{x:"60",y:"380",width:"280",height:"10",rx:"3",class:"desk dim"},null,-1),f("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="studio"?(E(),M("svg",Wg,[...c[4]||(c[4]=[Oi('<rect x="40" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><rect x="230" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><circle cx="200" cy="260" r="8" class="lamp" data-v-b08529d1></circle><line x1="200" y1="0" x2="200" y2="252" class="pole thin" data-v-b08529d1></line><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):(E(),M("svg",zg,[...c[5]||(c[5]=[f("rect",{x:"50",y:"110",width:"140",height:"100",rx:"6",class:"win"},null,-1),f("rect",{x:"220",y:"110",width:"130",height:"70",rx:"6",class:"win dim"},null,-1),f("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])),f("div",Xg,I(s.value.label),1)],4))}}),Zg=vt(Jg,[["__scopeId","data-v-b08529d1"]]),Qg={class:"danmaku","aria-hidden":"true"},e1=rt({__name:"DanmakuLayer",props:{pressure:{},active:{type:Boolean}},setup(e){const t=e,n=J([]);let i=0,s;function o(){return t.pressure>=4?fe.danmaku.hot:t.pressure>=3?fe.danmaku.tense:fe.danmaku.calm}function r(){if(!t.active)return;const a=o();if(a.length===0)return;const c=a[Math.floor(Math.random()*a.length)]??"";n.value.push({id:i+=1,text:c,lane:Math.floor(Math.random()*4),speed:t.pressure>=4?7+Math.random()*3:10+Math.random()*4,bold:Math.random()<.25}),n.value.length>14&&(n.value=n.value.slice(-14))}return typeof setInterval=="function"&&(s=setInterval(r,t.pressure>=4?900:1800),we(()=>t.pressure,()=>{})),Vt(()=>{s!==void 0&&clearInterval(s)}),(a,c)=>(E(),M("div",Qg,[Te(Qd,{name:"fly"},{default:ds(()=>[(E(!0),M(ke,null,Bt(n.value,l=>(E(),M("span",{key:l.id,class:_e(["line",{bold:l.bold}]),style:Ne({top:12+l.lane*34+"px","--dur":l.speed+"s"})},I(l.text),7))),128))]),_:1})]))}}),t1=vt(e1,[["__scopeId","data-v-55cd0013"]]),n1=""+new URL("he_song-DAGlX_4O.png",import.meta.url).href,i1=""+new URL("hero-BAfbz0Vs.png",import.meta.url).href,s1=""+new URL("npc_l01_woman-DSDWwEL8.png",import.meta.url).href,o1=""+new URL("npc_l02_woman-qXhWvPKu.png",import.meta.url).href,r1=""+new URL("npc_l03_daughter-Dt2TiO8f.png",import.meta.url).href,a1=""+new URL("npc_l03_woman-BQ3wIsYH.png",import.meta.url).href,c1=""+new URL("npc_l04_woman-CZQbIvDG.png",import.meta.url).href,l1=""+new URL("npc_l05_manager-Ce6F9DQj.png",import.meta.url).href,p1=""+new URL("npc_l05_woman-BXLOsOGn.png",import.meta.url).href,u1=""+new URL("npc_l06_girlfriend-CrncpSA3.png",import.meta.url).href,d1=""+new URL("npc_l06_mother-BJuBbFLU.png",import.meta.url).href,_1=""+new URL("npc_l07_ex-CEJAEgFV.png",import.meta.url).href,f1=""+new URL("npc_l08_child-Bm0Rde6F.png",import.meta.url).href,g1=""+new URL("npc_l08_mother-tu98VogT.png",import.meta.url).href,m1=""+new URL("npc_l08_wife-Cy9DZe9m.png",import.meta.url).href,v1=""+new URL("npc_l09_wife-CJUlJISq.png",import.meta.url).href,h1=""+new URL("npc_l10_exwife-D0NJtWQK.png",import.meta.url).href,x1=""+new URL("npc_l11_hr-Dqx_GpDt.png",import.meta.url).href,k1=""+new URL("npc_l12_boss-nYTyR_X5.png",import.meta.url).href,y1=""+new URL("npc_l12_colleague-BD3ntBZW.png",import.meta.url).href,T1=""+new URL("npc_l13_hr-Dovjb9V8.png",import.meta.url).href,L1=""+new URL("npc_l14_director-B-efKLNg.png",import.meta.url).href,b1=""+new URL("npc_l14_hr-DRiqQqX2.png",import.meta.url).href,A1=""+new URL("npc_l15_broker-CqY8iI1Q.png",import.meta.url).href,w1=""+new URL("npc_l15_hr-CSF8zzWx.png",import.meta.url).href,O1=""+new URL("npc_l16_account-D825uOC6.png",import.meta.url).href,P1=""+new URL("npc_l17_father-jYHQ9zlG.png",import.meta.url).href,R1=""+new URL("npc_l17_hr-D3pAIKo4.png",import.meta.url).href,E1=""+new URL("npc_l18_streamer-CYlpG6aq.png",import.meta.url).href,S1=""+new URL("npc_l19_moderator-CoZr2C0k.png",import.meta.url).href,I1=""+new URL("npc_l19_pr-Do-3PPx1.png",import.meta.url).href,C1=""+new URL("officer_lin-Bduk5y-m.png",import.meta.url).href,$1=""+new URL("shen_li-Bd_DLpmj.png",import.meta.url).href,M1=""+new URL("zhou_you-DSERK5v3.png",import.meta.url).href,N1={key:0,class:"duo","aria-hidden":"true"},F1=["src"],D1={key:1,class:"pt",viewBox:"0 0 120 160"},B1=["src","alt"],H1={key:1,class:"pt",viewBox:"0 0 120 160"},G1={class:"nm"},V1=rt({__name:"PortraitSlot",props:{speaker:{},visible:{type:Boolean}},setup(e){const t=e,n=Object.assign({"../../../content/art/characters/he_song.png":n1,"../../../content/art/characters/hero.png":i1,"../../../content/art/characters/npc_l01_woman.png":s1,"../../../content/art/characters/npc_l02_woman.png":o1,"../../../content/art/characters/npc_l03_daughter.png":r1,"../../../content/art/characters/npc_l03_woman.png":a1,"../../../content/art/characters/npc_l04_woman.png":c1,"../../../content/art/characters/npc_l05_manager.png":l1,"../../../content/art/characters/npc_l05_woman.png":p1,"../../../content/art/characters/npc_l06_girlfriend.png":u1,"../../../content/art/characters/npc_l06_mother.png":d1,"../../../content/art/characters/npc_l07_ex.png":_1,"../../../content/art/characters/npc_l08_child.png":f1,"../../../content/art/characters/npc_l08_mother.png":g1,"../../../content/art/characters/npc_l08_wife.png":m1,"../../../content/art/characters/npc_l09_wife.png":v1,"../../../content/art/characters/npc_l10_exwife.png":h1,"../../../content/art/characters/npc_l11_hr.png":x1,"../../../content/art/characters/npc_l12_boss.png":k1,"../../../content/art/characters/npc_l12_colleague.png":y1,"../../../content/art/characters/npc_l13_hr.png":T1,"../../../content/art/characters/npc_l14_director.png":L1,"../../../content/art/characters/npc_l14_hr.png":b1,"../../../content/art/characters/npc_l15_broker.png":A1,"../../../content/art/characters/npc_l15_hr.png":w1,"../../../content/art/characters/npc_l16_account.png":O1,"../../../content/art/characters/npc_l17_father.png":P1,"../../../content/art/characters/npc_l17_hr.png":R1,"../../../content/art/characters/npc_l18_streamer.png":E1,"../../../content/art/characters/npc_l19_moderator.png":S1,"../../../content/art/characters/npc_l19_pr.png":I1,"../../../content/art/characters/officer_lin.png":C1,"../../../content/art/characters/shen_li.png":$1,"../../../content/art/characters/zhou_you.png":M1});function i(h){if(h===null)return{url:"",ok:!1};const g=Object.entries(n).find(([A])=>A.endsWith("/"+h+".png"));return g!==void 0?{url:g[1],ok:!0}:{url:"",ok:!1}}const s=i("hero"),o=ei("hero"),r=ne(()=>t.speaker===null||t.speaker==="hero"?null:t.speaker),a=ne(()=>i(r.value)),c=ne(()=>ei(r.value??"")),l=ne(()=>r.value===null?"":xs(r.value)),p=J(!1);we(()=>t.speaker,()=>{p.value=!1});const _=ne(()=>t.speaker==="hero");return(h,g)=>e.visible?(E(),M("div",N1,[f("div",{class:_e(["who hero",{talking:_.value}]),style:Ne({"--h":L(o)})},[L(s).ok?(E(),M("img",{key:0,class:"pt art",src:L(s).url,alt:""},null,8,F1)):(E(),M("svg",D1,[...g[1]||(g[1]=[f("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])]))],6),r.value?(E(),M("div",{key:0,class:_e(["who guest",{talking:!0}]),style:Ne({"--h":c.value})},[a.value.ok&&!p.value?(E(),M("img",{key:0,class:"pt art",src:a.value.url,alt:l.value,onError:g[0]||(g[0]=A=>p.value=!0)},null,40,B1)):(E(),M("svg",H1,[...g[2]||(g[2]=[f("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])])),f("span",G1,I(l.value),1)],4)):se("",!0)])):se("",!0)}}),U1=vt(V1,[["__scopeId","data-v-286bf6bf"]]),j1={class:"backlog-panel"},Y1={class:"bl-header"},q1={class:"bl-title-group"},K1={class:"bl-title"},W1={key:0,class:"bl-empty"},z1={key:0,class:"bl-speaker"},X1={class:"bl-sp-name"},J1={class:"bl-text"},Z1={class:"bl-footer"},Q1=rt({__name:"BacklogModal",props:{history:{}},emits:["close"],setup(e,{emit:t}){const n=t,i=fe.ui,s=J(null);function o(){ps(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})}function r(a){a.key==="Escape"&&n("close")}return tn(()=>{o(),typeof window<"u"&&window.addEventListener("keydown",r)}),Vt(()=>{typeof window<"u"&&window.removeEventListener("keydown",r)}),(a,c)=>(E(),M("div",{class:"backlog-mask",onClick:c[2]||(c[2]=je(l=>a.$emit("close"),["self"]))},[f("div",j1,[f("header",Y1,[f("div",q1,[c[3]||(c[3]=f("span",{class:"bl-badge"},"LOG",-1)),f("h3",K1,I(L(i).backlogTitle),1)]),f("button",{class:"bl-close",onClick:c[0]||(c[0]=l=>a.$emit("close"))},"✕")]),f("div",{ref_key:"scrollRef",ref:s,class:"bl-list"},[e.history.length===0?(E(),M("div",W1,I(L(i).backlogEmpty),1)):se("",!0),(E(!0),M(ke,null,Bt(e.history,(l,p)=>(E(),M("div",{key:p,class:_e(["bl-item",l.kind]),style:Ne({"--h":l.speaker?L(ei)(l.speaker):220})},[l.kind==="dialogue"&&l.speaker?(E(),M("div",z1,[f("span",X1,I(L(xs)(l.speaker)),1)])):se("",!0),f("p",J1,I(l.text),1)],6))),128))],512),f("footer",Z1,[f("button",{class:"bl-confirm-btn",onClick:c[1]||(c[1]=l=>a.$emit("close"))},I(L(i).lawyerModalClose),1)])])]))}}),em=vt(Q1,[["__scopeId","data-v-00bd7ed1"]]),tm={class:"stage"},nm={key:2,class:"topbar"},im={class:"lv-title"},sm={key:3,class:"study-entry"},om={class:"sub"},rm=["placeholder"],am=["disabled"],cm={key:4,class:"study-done"},lm={class:"sum"},pm={key:1,class:"story"},um={key:8,class:"timeout-toast"},dm={class:"tt-label"},_m={class:"tt-text"},fm={name:"App"},gm=rt({...fm,props:{ctx:{}},setup(e){const n=e.ctx;we(n.event,v=>{v!==null&&v.type==="ending"&&(n.settle(),ve.sfx(v.ending.rank==="S"||v.ending.rank==="A"?"ending":"bad"))}),we(n.event,v=>{var te,$,j;if(v===null)return;const O=wp(((te=n.current.value)==null?void 0:te.id)??"L01").hue;v.type==="node"?ve.scene((($=n.current.value)==null?void 0:$.id)??"L01",O,v.node.pressure??0,n.meters.value.composure):v.type==="options"&&(ve.sfx("options"),ve.scene(((j=n.current.value)==null?void 0:j.id)??"L01",O,3,n.meters.value.composure))});const i=J(0),s=J(null),o=J(null);we(n.event,v=>{if(v===null){i.value=0,s.value=null,o.value=null;return}if(v.type==="node"){i.value=v.node.pressure??0;const O="speaker"in v.node?v.node.speaker:null;s.value=O!=null&&String(O)!=="null"&&String(O).trim()!==""?String(O):null,s.value!==null&&(o.value=s.value)}else v.type==="options"&&(i.value=v.options.length>0?i.value:0,s.value=null)});const r=ne(()=>{const v=n.meters.value.composure;return v>=50||n.screen.value!=="level"?{opacity:0}:{opacity:(.25+(50-v)/50*.55).toFixed(2),animation:v<15?"throb 1.1s ease-in-out infinite":"none"}}),a=ne(()=>n.screen.value==="level"),c=J(""),l=ne(()=>n.STUDY_LEVELS.every(v=>{try{return n.studySummary().includes(v)}catch{return!1}}));function p(){const v=n.studyExport();typeof navigator<"u"&&navigator.clipboard!==void 0&&navigator.clipboard.writeText(v);const O=new Blob([v],{type:"application/json"}),te=document.createElement("a");te.href=URL.createObjectURL(O),te.download=`study-${c.value||"anon"}.json`,te.click()}const _=J(!1),h=ne(()=>_.value?"x":"m");function g(){_.value=!_.value,ve.setMuted(_.value)}function A(){ve.unlock(),ve.startLoop()}document.addEventListener("pointerdown",A,{once:!0});const S=ne(()=>n.current.value?n.current.value.id:"L01"),q=J([]),W=J(!1),G=J(!1),F=J(!1);let b;const N=J(null);function z(){var v;ve.sfx("drawer"),W.value=!0,(v=N.value)==null||v.pause()}function xe(){var v;ve.sfx("click"),W.value=!1,(v=N.value)==null||v.resume()}function ge(){if(!F.value)return;b!==void 0&&clearTimeout(b);const v=n.event.value;if(v===null||v.type!=="node")return;const O="text"in v.node?String(v.node.text).length:20,te=Math.max(1800,O*55);b=setTimeout(()=>{var $;F.value&&(($=n.event.value)==null?void 0:$.type)==="node"&&n.advance()},te)}we(F,v=>{v?ge():b!==void 0&&(clearTimeout(b),b=void 0)}),we(n.event,v=>{if(v===null){b!==void 0&&clearTimeout(b);return}v.type==="node"?("script"in v.node&&v.node.script?q.value.push({speaker:null,text:String(v.node.script),kind:"cutscene"}):"speaker"in v.node&&v.node.text&&v.node.speaker!=null&&String(v.node.speaker)!=="null"?q.value.push({speaker:String(v.node.speaker),text:String(v.node.text),kind:"dialogue"}):"text"in v.node&&v.node.text&&q.value.push({speaker:null,text:String(v.node.text),kind:"cutscene"}),ge()):v.type==="options"?(b!==void 0&&(clearTimeout(b),b=void 0),W.value&&ps(()=>{var O;return(O=N.value)==null?void 0:O.pause()})):v.type==="ending"&&b!==void 0&&(clearTimeout(b),b=void 0)});const V=J(null);let X;function re(v){V.value=v,ve.sfx("bad"),X!==void 0&&clearTimeout(X),X=setTimeout(()=>{V.value=null},2200)}return we(S,()=>{q.value=[],F.value=!1,W.value=!1,G.value=!1,s.value=null,o.value=null,i.value=0,b!==void 0&&clearTimeout(b)}),(v,O)=>{var te;return E(),M("div",tm,[a.value?(E(),Ue(Zg,{key:0,"level-id":S.value,pressure:i.value},null,8,["level-id","pressure"])):se("",!0),a.value&&((te=L(n).event.value)==null?void 0:te.type)!=="ending"?(E(),Ue(t1,{key:1,pressure:i.value,active:a.value},null,8,["pressure","active"])):se("",!0),a.value?(E(),M("header",nm,[f("button",{class:"back",onClick:O[0]||(O[0]=$=>L(n).toSelect())},"‹"),f("span",im,I(L(n).banner.value),1),f("button",{class:_e(["mute",{off:_.value}]),onClick:O[1]||(O[1]=$=>g())},I(h.value),3)])):se("",!0),L(n).studyOn&&L(n).studyScreen.value==="entry"?(E(),M("div",sm,[f("h1",null,I(L(fe).appTitle),1),f("p",om,I(L(Et)("studyIntro")),1),bu(f("input",{"onUpdate:modelValue":O[2]||(O[2]=$=>c.value=$),class:"pid",placeholder:L(Et)("studyPidPlaceholder"),maxlength:"8"},null,8,rm),[[o_,c.value]]),f("button",{class:"go",disabled:c.value.trim().length===0,onClick:O[3]||(O[3]=$=>L(n).studyBegin(c.value.trim()))},I(L(Et)("studyStart")),9,am)])):L(n).studyOn&&L(n).studyScreen.value==="done"&&l.value?(E(),M("div",cm,[f("h2",null,I(L(Et)("studyDoneTitle")),1),f("pre",lm,I(L(n).studySummary()),1),f("button",{class:"go",onClick:p},I(L(Et)("studyCopy")),1)])):L(n).screen.value==="select"?(E(),Ue(yg,{key:5,levels:L(n).studyOn?L($t).filter($=>L(n).STUDY_LEVELS.includes($.id)):L($t),best:L(n).best.value,onPick:L(n).startLevel},null,8,["levels","best","onPick"])):L(n).event.value?(E(),M(ke,{key:6},[L(n).event.value.type!=="ending"?(E(),Ue(Vf,{key:0,state:L(n).meters.value},null,8,["state"])):se("",!0),Te(U1,{speaker:s.value??o.value,visible:L(n).event.value.type!=="ending"&&(s.value??o.value)!==null},null,8,["speaker","visible"]),G.value?(E(),M("div",{key:2,class:"restore-hud-trigger",onClick:O[16]||(O[16]=$=>G.value=!1)},[f("span",null,I(L(Et)("tapToRestore")),1)])):(E(),M("div",pm,[L(n).event.value.type==="node"&&"script"in L(n).event.value.node?(E(),Ue($i,{key:0,kind:"cutscene",text:String(L(n).event.value.node.script??""),"auto-active":F.value,onAdvance:O[4]||(O[4]=$=>L(n).advance()),onOpenLog:z,onToggleAuto:O[5]||(O[5]=$=>F.value=!F.value),onSkip:O[6]||(O[6]=$=>L(n).advance()),onHideUi:O[7]||(O[7]=$=>G.value=!0)},null,8,["text","auto-active"])):L(n).event.value.type==="node"&&"speaker"in L(n).event.value.node&&L(n).event.value.node.speaker!=null&&String(L(n).event.value.node.speaker)!=="null"&&String(L(n).event.value.node.speaker).trim()!==""?(E(),Ue($i,{key:1,kind:"dialogue",speaker:String(L(n).event.value.node.speaker),text:String(L(n).event.value.node.text??""),"auto-active":F.value,onAdvance:O[8]||(O[8]=$=>L(n).advance()),onOpenLog:z,onToggleAuto:O[9]||(O[9]=$=>F.value=!F.value),onSkip:O[10]||(O[10]=$=>L(n).advance()),onHideUi:O[11]||(O[11]=$=>G.value=!0)},null,8,["speaker","text","auto-active"])):L(n).event.value.type==="node"&&"text"in L(n).event.value.node?(E(),Ue($i,{key:2,kind:"cutscene",text:String(L(n).event.value.node.text??""),"auto-active":F.value,onAdvance:O[12]||(O[12]=$=>L(n).advance()),onOpenLog:z,onToggleAuto:O[13]||(O[13]=$=>F.value=!F.value),onSkip:O[14]||(O[14]=$=>L(n).advance()),onHideUi:O[15]||(O[15]=$=>G.value=!0)},null,8,["text","auto-active"])):L(n).event.value.type==="options"?(E(),Ue(k0,{key:3,ref_key:"choiceLayerRef",ref:N,options:L(n).event.value.options,timer:L(n).event.value.timer,"timeout-option-id":L(n).event.value.timeoutOptionId,prompt:L(n).event.value.prompt??"",onChoose:L(n).choose,onTimeout:re,onOpenLog:z},null,8,["options","timer","timeout-option-id","prompt","onChoose"])):L(n).event.value.type==="ending"?(E(),Ue(ng,{key:4,"level-id":S.value,ending:L(n).event.value.ending,state:L(n).event.value.state,"finale-tier":L(n).finaleTier.value,onRestart:L(n).restart,onNext:L(n).nextLevel},null,8,["level-id","ending","state","finale-tier","onRestart","onNext"])):se("",!0)]))],64)):se("",!0),W.value?(E(),Ue(em,{key:7,history:q.value,onClose:xe},null,8,["history"])):se("",!0),V.value?(E(),M("div",um,[f("span",dm,I(L(Et)("timeoutNotice")),1),f("span",_m,"「"+I(V.value)+"」",1)])):se("",!0),a.value?(E(),M("div",{key:9,class:"vignette",style:Ne(r.value)},null,4)):se("",!0)])}}}),Op="poju-study-v1",mm=()=>typeof location<"u"&&new URLSearchParams(location.search).get("study")==="1";function bt(){if(typeof localStorage>"u")return{sessionId:"",participant:"",startedAt:0,runs:[]};const e=localStorage.getItem(Op);return e===null?{sessionId:"",participant:"",startedAt:0,runs:[]}:JSON.parse(e)}function gi(e){typeof localStorage<"u"&&localStorage.setItem(Op,JSON.stringify(e))}function vm(e){const t={sessionId:`S-${performance.now().toString(36)}`,participant:e,startedAt:performance.now(),runs:[]};return mi=t,gi(t),t}function hm(e,t,n){const i={level:t,startedAt:performance.now(),endedAt:0,totalMs:0,choices:[],endingRank:"",endingTitle:"",finalMeters:{evidence:0,opinion:0,composure:0,risk:0},replayed:n},s=mi??bt();return s.runs.push(i),gi(s),i}let zi=0,Pp="",mi=null;function ti(e){zi=performance.now(),Pp=e}function xm(e,t,n,i,s){e.choices.push({level:n,nodeId:Pp,optionId:i,ms:zi>0?performance.now()-zi:0,meters:{...s}});const o=mi??bt();gi(o)}function km(e,t,n,i,s){e.endedAt=performance.now(),e.totalMs=e.endedAt-e.startedAt,e.endingRank=n,e.endingTitle=i,e.finalMeters={...s},gi(mi??bt())}function ym(){return JSON.stringify(bt(),null,2)}function Tm(){const e=bt(),n=[fe.ui.studySummaryHeader.replace("{p}",e.participant).replace("{n}",String(e.runs.length))],i=new Map;for(const s of e.runs){const o=i.get(s.level)??[];o.push(s),i.set(s.level,o)}for(const[s,o]of[...i.entries()].sort()){const r=o[0],a=Math.round(r.totalMs/1e3),c=fe.ui.studySummaryLine;n.push(c.replace("{lv}",s).replace("{rank}",r.endingRank).replace("{title}",r.endingTitle).replace("{s}",String(a)).replace("{c}",String(r.choices.length)).replace("{r}",o.length>1?"Y":"N"))}return n.join(`
`)}const wn=J("select"),Tt=ai(null),$e=ai(null),Ht=J(P_()),Rp=J(""),vi=ai(null),ks=J({evidence:0,opinion:0,composure:0,risk:0}),Ep=J(null),Lt=mm(),Xi=["L01","L02","L03","L04","L05"],Sp=J("entry"),On=ai(null),Lm=J(0);function bm(e){Ht.value=Ki(),vm(e),Sp.value="done",Jt("L01")}function Jt(e){const t=$t.find(s=>s.id===e)??null;if(t===null)return;Tt.value=t,Rp.value=t.title;let n=t;if(e==="L20"&&!Lt){const s=M_(Ht.value);n={...t,initState:{evidence:s.evidence,opinion:s.opinion,composure:s.composure,risk:s.risk}}}const i=new hs(n,Ht.value);if(vi.value=i,$e.value=i.start(),ks.value={...i.state},wn.value="level",Lt){const s=bt(),o=s.runs.some(r=>r.level===e&&r.endingRank!=="");On.value=hm(s,e,o),ti("entry")}}function Am(){const e=vi.value;e!==null&&($e.value=e.proceed(),Lt&&$e.value.type==="node"&&ti(String($e.value.node.id)),Lt&&$e.value.type==="options"&&$e.value.nodeId!==void 0&&ti($e.value.nodeId))}function wm(e){const t=vi.value;t!==null&&($e.value=t.choose(e),ks.value={...t.state},Lt&&On.value!==null&&Tt.value!==null&&(xm(On.value,bt(),Tt.value.id,e,t.state),$e.value.type==="options"&&$e.value.nodeId!==void 0&&ti($e.value.nodeId)))}function Om(){const e=vi.value,t=Tt.value,n=$e.value;if(e===null||t===null||n===null||n.type!=="ending")return;if(Lt){On.value!==null&&km(On.value,bt(),n.ending.rank,n.ending.title,e.state),Lm.value+=1;return}const i=C_(Ht.value,t.id,n.ending,n.state,{now:0});Ht.value=i,R_(i),t.id==="L20"&&(Ep.value=N_(i,n.ending.rank))}function Pm(){Tt.value!==null&&Jt(Tt.value.id)}function Rm(){const e=Tt.value;if(e===null)return;if(Lt){const o=Xi.indexOf(e.id),r=o>=0?Xi[o+1]:void 0;if(r===void 0){wn.value="select";return}Jt(r);return}const t=$t.findIndex(o=>o.id===e.id),n=$t.find(o=>!(o.id in Ht.value.levelResults)),i=n!==void 0?$t.findIndex(o=>o.id===n.id):-1;if(n!==void 0&&i>t+1){Jt(n.id);return}const s=$t[t+1];if(s===void 0){wn.value="select";return}Jt(s.id)}function Em(){wn.value="select"}const Sm=ne(()=>{const e={};for(const[t,n]of Object.entries(Ht.value.levelResults))e[t]=n.rank;return e}),Im={screen:wn,current:Tt,event:$e,banner:Rp,best:Sm,meters:ks,finaleTier:Ep,startLevel:Jt,advance:Am,choose:wm,settle:Om,restart:Pm,nextLevel:Rm,toSelect:Em,studyOn:Lt,STUDY_LEVELS:Xi,studyScreen:Sp,studyBegin:bm,studyExport:()=>ym(),studySummary:()=>Tm()},Cm=p_(gm,{ctx:Im});Cm.mount("#app");
