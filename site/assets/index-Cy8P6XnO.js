var $p=Object.defineProperty;var Mp=(e,t,n)=>t in e?$p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>Mp(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const oe={},jt=[],et=()=>{},gs=()=>!1,ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ii=e=>e.startsWith("onUpdate:"),ge=Object.assign,Ji=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Np=Object.prototype.hasOwnProperty,J=(e,t)=>Np.call(e,t),H=Array.isArray,Yt=e=>wn(e)==="[object Map]",ms=e=>wn(e)==="[object Set]",bo=e=>wn(e)==="[object Date]",Y=e=>typeof e=="function",pe=e=>typeof e=="string",tt=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",vs=e=>(Z(e)||Y(e))&&Y(e.then)&&Y(e.catch),hs=Object.prototype.toString,wn=e=>hs.call(e),Fp=e=>wn(e).slice(8,-1),xs=e=>wn(e)==="[object Object]",Zi=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cn=Xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Dp=/-\w/g,He=oi(e=>e.replace(Dp,t=>t.slice(1).toUpperCase())),Bp=/\B([A-Z])/g,Nt=oi(e=>e.replace(Bp,"-$1").toLowerCase()),ks=oi(e=>e.charAt(0).toUpperCase()+e.slice(1)),xi=oi(e=>e?`on${ks(e)}`:""),Qe=(e,t)=>!Object.is(e,t),Fn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ys=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Qi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Hp=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let wo;const si=()=>wo||(wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function De(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=pe(i)?jp(i):De(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(pe(e)||Z(e))return e}const Vp=/;(?![^(]*\))/g,Gp=/:([^]+)/,Up=/\/\*[^]*?\*\//g;function jp(e){const t={};return e.replace(Up,"").split(Vp).forEach(n=>{if(n){const i=n.split(Gp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function fe(e){let t="";if(pe(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const i=fe(e[n]);i&&(t+=i+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kp=Xi(Yp);function Ts(e){return!!e||e===""}function qp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=eo(e[i],t[i]);return n}function eo(e,t){if(e===t)return!0;let n=bo(e),i=bo(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=tt(e),i=tt(t),n||i)return e===t;if(n=H(e),i=H(t),n||i)return n&&i?qp(e,t):!1;if(n=Z(e),i=Z(t),n||i){if(!n||!i)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const r in e){const c=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(c&&!a||!c&&a||!eo(e[r],t[r]))return!1}}return String(e)===String(t)}const Ls=e=>!!(e&&e.__v_isRef===!0),C=e=>pe(e)?e:e==null?"":H(e)||Z(e)&&(e.toString===hs||!Y(e.toString))?Ls(e)?C(e.value):JSON.stringify(e,As,2):String(e),As=(e,t)=>Ls(t)?As(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],s)=>(n[ki(i,s)+" =>"]=o,n),{})}:ms(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ki(n))}:tt(t)?ki(t):Z(t)&&!H(t)&&!xs(t)?String(t):t,ki=(e,t="")=>{var n;return tt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ye;class Wp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ye&&(ye.active?(this.parent=ye,this.index=(ye.scopes||(ye.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){++this._on===1&&(this.prevScope=ye,ye=this)}off(){if(this._on>0&&--this._on===0){if(ye===this)ye=this.prevScope;else{let t=ye;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,i=o.length;n<i;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function zp(){return ye}let re;const yi=new WeakSet;class bs{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ye&&(ye.active?ye.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yi.has(this)&&(yi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Os(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oo(this),Ps(this);const t=re,n=Ve;re=this,Ve=!0;try{return this.fn()}finally{Rs(this),re=t,Ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)io(t);this.deps=this.depsTail=void 0,Oo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$i(this)&&this.run()}get dirty(){return $i(this)}}let ws=0,an,ln;function Os(e,t=!1){if(e.flags|=8,t){e.next=ln,ln=e;return}e.next=an,an=e}function to(){ws++}function no(){if(--ws>0)return;if(ln){let t=ln;for(ln=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;an;){let t=an;for(an=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Ps(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Rs(e){let t,n=e.depsTail,i=n;for(;i;){const o=i.prevDep;i.version===-1?(i===n&&(n=o),io(i),Xp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=t,e.depsTail=n}function $i(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Es(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Es(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===gn)||(e.globalVersion=gn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!$i(e))))return;e.flags|=2;const t=e.dep,n=re,i=Ve;re=e,Ve=!0;try{Ps(e);const o=e.fn(e._value);(t.version===0||Qe(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{re=n,Ve=i,Rs(e),e.flags&=-3}}function io(e,t=!1){const{dep:n,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)io(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ve=!0;const Ss=[];function ut(){Ss.push(Ve),Ve=!1}function dt(){const e=Ss.pop();Ve=e===void 0?!0:e}function Oo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=re;re=void 0;try{t()}finally{re=n}}}let gn=0;class Jp{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!re||!Ve||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new Jp(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,Is(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=i)}return n}trigger(t){this.version++,gn++,this.notify(t)}notify(t){to();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{no()}}}function Is(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Is(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Mi=new WeakMap,St=Symbol(""),Ni=Symbol(""),mn=Symbol("");function Le(e,t,n){if(Ve&&re){let i=Mi.get(e);i||Mi.set(e,i=new Map);let o=i.get(n);o||(i.set(n,o=new oo),o.map=i,o.key=n),o.track()}}function lt(e,t,n,i,o,s){const r=Mi.get(e);if(!r){gn++;return}const c=a=>{a&&a.trigger()};if(to(),t==="clear")r.forEach(c);else{const a=H(e),l=a&&Zi(n);if(a&&n==="length"){const p=Number(i);r.forEach((_,m)=>{(m==="length"||m===mn||!tt(m)&&m>=p)&&c(_)})}else switch((n!==void 0||r.has(void 0))&&c(r.get(n)),l&&c(r.get(mn)),t){case"add":a?l&&c(r.get("length")):(c(r.get(St)),Yt(e)&&c(r.get(Ni)));break;case"delete":a||(c(r.get(St)),Yt(e)&&c(r.get(Ni)));break;case"set":Yt(e)&&c(r.get(St));break}}no()}function Dt(e){const t=X(e);return t===e?t:(Le(t,"iterate",mn),Fe(e)?t:t.map(Ge))}function ri(e){return Le(e=X(e),"iterate",mn),e}function Je(e,t){return _t(e)?Wt(It(e)?Ge(t):t):Ge(t)}const Zp={__proto__:null,[Symbol.iterator](){return Ti(this,Symbol.iterator,e=>Je(this,e))},concat(...e){return Dt(this).concat(...e.map(t=>H(t)?Dt(t):t))},entries(){return Ti(this,"entries",e=>(e[1]=Je(this,e[1]),e))},every(e,t){return ot(this,"every",e,t,void 0,arguments)},filter(e,t){return ot(this,"filter",e,t,n=>n.map(i=>Je(this,i)),arguments)},find(e,t){return ot(this,"find",e,t,n=>Je(this,n),arguments)},findIndex(e,t){return ot(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ot(this,"findLast",e,t,n=>Je(this,n),arguments)},findLastIndex(e,t){return ot(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ot(this,"forEach",e,t,void 0,arguments)},includes(...e){return Li(this,"includes",e)},indexOf(...e){return Li(this,"indexOf",e)},join(e){return Dt(this).join(e)},lastIndexOf(...e){return Li(this,"lastIndexOf",e)},map(e,t){return ot(this,"map",e,t,void 0,arguments)},pop(){return tn(this,"pop")},push(...e){return tn(this,"push",e)},reduce(e,...t){return Po(this,"reduce",e,t)},reduceRight(e,...t){return Po(this,"reduceRight",e,t)},shift(){return tn(this,"shift")},some(e,t){return ot(this,"some",e,t,void 0,arguments)},splice(...e){return tn(this,"splice",e)},toReversed(){return Dt(this).toReversed()},toSorted(e){return Dt(this).toSorted(e)},toSpliced(...e){return Dt(this).toSpliced(...e)},unshift(...e){return tn(this,"unshift",e)},values(){return Ti(this,"values",e=>Je(this,e))}};function Ti(e,t,n){const i=ri(e),o=i[t]();return i!==e&&!Fe(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.done||(s.value=n(s.value)),s}),o}const Qp=Array.prototype;function ot(e,t,n,i,o,s){const r=ri(e),c=r!==e&&!Fe(e),a=r[t];if(a!==Qp[t]){const _=a.apply(e,s);return c?Ge(_):_}let l=n;r!==e&&(c?l=function(_,m){return n.call(this,Je(e,_),m,e)}:n.length>2&&(l=function(_,m){return n.call(this,_,m,e)}));const p=a.call(r,l,i);return c&&o?o(p):p}function Po(e,t,n,i){const o=ri(e),s=o!==e&&!Fe(e);let r=n,c=!1;o!==e&&(s?(c=i.length===0,r=function(l,p,_){return c&&(c=!1,l=Je(e,l)),n.call(this,l,Je(e,p),_,e)}):n.length>3&&(r=function(l,p,_){return n.call(this,l,p,_,e)}));const a=o[t](r,...i);return c?Je(e,a):a}function Li(e,t,n){const i=X(e);Le(i,"iterate",mn);const o=i[t](...n);return(o===-1||o===!1)&&ao(n[0])?(n[0]=X(n[0]),i[t](...n)):o}function tn(e,t,n=[]){ut(),to();const i=X(e)[t].apply(e,n);return no(),dt(),i}const eu=Xi("__proto__,__v_isRef,__isVue"),Cs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tt));function tu(e){tt(e)||(e=String(e));const t=X(this);return Le(t,"has",e),t.hasOwnProperty(e)}class $s{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(o?s?uu:Ds:s?Fs:Ns).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=H(t);if(!o){let a;if(r&&(a=Zp[n]))return a;if(n==="hasOwnProperty")return tu}const c=Reflect.get(t,n,Ae(t)?t:i);if((tt(n)?Cs.has(n):eu(n))||(o||Le(t,"get",n),s))return c;if(Ae(c)){const a=r&&Zi(n)?c:c.value;return o&&Z(a)?Di(a):a}return Z(c)?o?Di(c):ro(c):c}}class Ms extends $s{constructor(t=!1){super(!1,t)}set(t,n,i,o){let s=t[n];const r=H(t)&&Zi(n);if(!this._isShallow){const l=_t(s);if(!Fe(i)&&!_t(i)&&(s=X(s),i=X(i)),!r&&Ae(s)&&!Ae(i))return l||(s.value=i),!0}const c=r?Number(n)<t.length:J(t,n),a=Reflect.set(t,n,i,Ae(t)?t:o);return t===X(o)&&a&&(c?Qe(i,s)&&lt(t,"set",n,i):lt(t,"add",n,i)),a}deleteProperty(t,n){const i=J(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&lt(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!tt(n)||!Cs.has(n))&&Le(t,"has",n),i}ownKeys(t){return Le(t,"iterate",H(t)?"length":St),Reflect.ownKeys(t)}}class nu extends $s{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const iu=new Ms,ou=new nu,su=new Ms(!0);const Fi=e=>e,In=e=>Reflect.getPrototypeOf(e);function ru(e,t,n){return function(...i){const o=this.__v_raw,s=X(o),r=Yt(s),c=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,l=o[e](...i),p=n?Fi:t?Wt:Ge;return!t&&Le(s,"iterate",a?Ni:St),ge(Object.create(l),{next(){const{value:_,done:m}=l.next();return m?{value:_,done:m}:{value:c?[p(_[0]),p(_[1])]:p(_),done:m}}})}}function Cn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function cu(e,t){const n={get(o){const s=this.__v_raw,r=X(s),c=X(o);e||(Qe(o,c)&&Le(r,"get",o),Le(r,"get",c));const{has:a}=In(r),l=t?Fi:e?Wt:Ge;if(a.call(r,o))return l(s.get(o));if(a.call(r,c))return l(s.get(c));s!==r&&s.get(o)},get size(){const o=this.__v_raw;return!e&&Le(X(o),"iterate",St),o.size},has(o){const s=this.__v_raw,r=X(s),c=X(o);return e||(Qe(o,c)&&Le(r,"has",o),Le(r,"has",c)),o===c?s.has(o):s.has(o)||s.has(c)},forEach(o,s){const r=this,c=r.__v_raw,a=X(c),l=t?Fi:e?Wt:Ge;return!e&&Le(a,"iterate",St),c.forEach((p,_)=>o.call(s,l(p),l(_),r))}};return ge(n,e?{add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear")}:{add(o){const s=X(this),r=In(s),c=X(o),a=!t&&!Fe(o)&&!_t(o)?c:o;return r.has.call(s,a)||Qe(o,a)&&r.has.call(s,o)||Qe(c,a)&&r.has.call(s,c)||(s.add(a),lt(s,"add",a,a)),this},set(o,s){!t&&!Fe(s)&&!_t(s)&&(s=X(s));const r=X(this),{has:c,get:a}=In(r);let l=c.call(r,o);l||(o=X(o),l=c.call(r,o));const p=a.call(r,o);return r.set(o,s),l?Qe(s,p)&&lt(r,"set",o,s):lt(r,"add",o,s),this},delete(o){const s=X(this),{has:r,get:c}=In(s);let a=r.call(s,o);a||(o=X(o),a=r.call(s,o)),c&&c.call(s,o);const l=s.delete(o);return a&&lt(s,"delete",o,void 0),l},clear(){const o=X(this),s=o.size!==0,r=o.clear();return s&&lt(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=ru(o,e,t)}),n}function so(e,t){const n=cu(e,t);return(i,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(J(n,o)&&o in i?n:i,o,s)}const au={get:so(!1,!1)},lu={get:so(!1,!0)},pu={get:so(!0,!1)};const Ns=new WeakMap,Fs=new WeakMap,Ds=new WeakMap,uu=new WeakMap;function du(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ro(e){return _t(e)?e:co(e,!1,iu,au,Ns)}function _u(e){return co(e,!1,su,lu,Fs)}function Di(e){return co(e,!0,ou,pu,Ds)}function co(e,t,n,i,o){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const r=du(Fp(e));if(r===0)return e;const c=new Proxy(e,r===2?i:n);return o.set(e,c),c}function It(e){return _t(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function _t(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function ao(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function fu(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&ys(e,"__v_skip",!0),e}const Ge=e=>Z(e)?ro(e):e,Wt=e=>Z(e)?Di(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function Q(e){return Bs(e,!1)}function ci(e){return Bs(e,!0)}function Bs(e,t){return Ae(e)?e:new gu(e,t)}class gu{constructor(t,n){this.dep=new oo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:Ge(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Fe(t)||_t(t);t=i?t:X(t),Qe(t,n)&&(this._rawValue=t,this._value=i?t:Ge(t),this.dep.trigger())}}function T(e){return Ae(e)?e.value:e}const mu={get:(e,t,n)=>t==="__v_raw"?e:T(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return Ae(o)&&!Ae(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function Hs(e){return It(e)?e:new Proxy(e,mu)}class vu{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new oo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Os(this,!0),!0}get value(){const t=this.dep.track();return Es(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function hu(e,t,n=!1){let i,o;return Y(e)?i=e:(i=e.get,o=e.set),new vu(i,o,n)}const $n={},Gn=new WeakMap;let Rt;function xu(e,t=!1,n=Rt){if(n){let i=Gn.get(n);i||Gn.set(n,i=[]),i.push(e)}}function ku(e,t,n=oe){const{immediate:i,deep:o,once:s,scheduler:r,augmentJob:c,call:a}=n,l=R=>o?R:Fe(R)||o===!1||o===0?pt(R,1):pt(R);let p,_,m,v,D=!1,$=!1;if(Ae(e)?(_=()=>e.value,D=Fe(e)):It(e)?(_=()=>l(e),D=!0):H(e)?($=!0,D=e.some(R=>It(R)||Fe(R)),_=()=>e.map(R=>{if(Ae(R))return R.value;if(It(R))return l(R);if(Y(R))return a?a(R,2):R()})):Y(e)?t?_=a?()=>a(e,2):e:_=()=>{if(m){ut();try{m()}finally{dt()}}const R=Rt;Rt=p;try{return a?a(e,3,[v]):e(v)}finally{Rt=R}}:_=et,t&&o){const R=_,W=o===!0?1/0:o;_=()=>pt(R(),W)}const q=zp(),V=()=>{p.stop(),q&&q.active&&Ji(q.effects,p)};if(s&&t){const R=t;t=(...W)=>{const j=R(...W);return V(),j}}let S=$?new Array(e.length).fill($n):$n;const M=R=>{if(!(!(p.flags&1)||!p.dirty&&!R))if(t){const W=p.run();if(R||o||D||($?W.some((j,ee)=>Qe(j,S[ee])):Qe(W,S))){m&&m();const j=Rt;Rt=p;try{const ee=[W,S===$n?void 0:$&&S[0]===$n?[]:S,v];S=W,a?a(t,3,ee):t(...ee)}finally{Rt=j}}}else p.run()};return c&&c(M),p=new bs(_),p.scheduler=r?()=>r(M,!1):M,v=R=>xu(R,!1,p),m=p.onStop=()=>{const R=Gn.get(p);if(R){if(a)a(R,4);else for(const W of R)W();Gn.delete(p)}},t?i?M(!0):S=p.run():r?r(M.bind(null,!0),!0):p.run(),V.pause=p.pause.bind(p),V.resume=p.resume.bind(p),V.stop=V,V}function pt(e,t=1/0,n){if(t<=0||!Z(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ae(e))pt(e.value,t,n);else if(H(e))for(let i=0;i<e.length;i++)pt(e[i],t,n);else if(ms(e)||Yt(e))e.forEach(i=>{pt(i,t,n)});else if(xs(e)){for(const i in e)pt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&pt(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function On(e,t,n,i){try{return i?e(...i):e()}catch(o){ai(o,t,n)}}function Be(e,t,n,i){if(Y(e)){const o=On(e,t,n,i);return o&&vs(o)&&o.catch(s=>{ai(s,t,n)}),o}if(H(e)){const o=[];for(let s=0;s<e.length;s++)o.push(Be(e[s],t,n,i));return o}}function ai(e,t,n,i=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||oe;if(t){let c=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p){for(let _=0;_<p.length;_++)if(p[_](e,a,l)===!1)return}c=c.parent}if(s){ut(),On(s,null,10,[e,a,l]),dt();return}}yu(e,n,o,i,r)}function yu(e,t,n,i=!0,o=!1){if(o)throw e;console.error(e)}const we=[];let Xe=-1;const Kt=[];let ht=null,Ht=0;const Vs=Promise.resolve();let Un=null;function Gs(e){const t=Un||Vs;return e?t.then(this?e.bind(this):e):t}function Tu(e){let t=Xe+1,n=we.length;for(;t<n;){const i=t+n>>>1,o=we[i],s=vn(o);s<e||s===e&&o.flags&2?t=i+1:n=i}return t}function lo(e){if(!(e.flags&1)){const t=vn(e),n=we[we.length-1];!n||!(e.flags&2)&&t>=vn(n)?we.push(e):we.splice(Tu(t),0,e),e.flags|=1,Us()}}function Us(){Un||(Un=Vs.then(Ys))}function Lu(e){if(!H(e))ht&&e.id===-1?ht.splice(Ht+1,0,e):e.flags&1||(Kt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Kt.push(e[t]);Us()}function Ro(e,t,n=Xe+1){for(;n<we.length;n++){const i=we[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;we.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function js(e){if(Kt.length){const t=[...new Set(Kt)].sort((n,i)=>vn(n)-vn(i));if(Kt.length=0,ht){for(let n=0;n<t.length;n++)ht.push(t[n]);return}for(ht=t,Ht=0;Ht<ht.length;Ht++){const n=ht[Ht];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ht=null,Ht=0}}const vn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ys(e){try{for(Xe=0;Xe<we.length;Xe++){const t=we[Xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),On(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xe<we.length;Xe++){const t=we[Xe];t&&(t.flags&=-2)}Xe=-1,we.length=0,js(),Un=null,(we.length||Kt.length)&&Ys()}}let Ne=null,Ks=null;function jn(e){const t=Ne;return Ne=e,Ks=e&&e.type.__scopeId||null,t}function po(e,t=Ne,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Wn(-1);const s=jn(t),r=Ct.length;let c;try{c=e(...o)}finally{for(let a=Ct.length;a>r;a--)yr();jn(s),i._d&&Wn(1)}return c};return i._n=!0,i._c=!0,i._d=!0,i}function Au(e,t){if(Ne===null)return e;const n=fi(Ne),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,c,a=oe]=t[o];s&&(Y(s)&&(s={mounted:s,updated:s}),s.deep&&pt(r),i.push({dir:s,instance:n,value:r,oldValue:void 0,arg:c,modifiers:a}))}return e}function bt(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const c=o[r];s&&(c.oldValue=s[r].value);let a=c.dir[i];a&&(ut(),Be(a,n,8,[e.el,c,e,t]),dt())}}function bu(e,t){if(Re){let n=Re.provides;const i=Re.parent&&Re.parent.provides;i===n&&(n=Re.provides=Object.create(i)),n[e]=t}}function Dn(e,t,n=!1){const i=go();if(i||qt){let o=qt?qt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Y(t)?t.call(i&&i.proxy):t}}const wu=Symbol.for("v-scx"),Ou=()=>Dn(wu);function Oe(e,t,n){return qs(e,t,n)}function qs(e,t,n=oe){const{immediate:i,deep:o,flush:s,once:r}=n,c=ge({},n),a=t&&i||!t&&s!=="post";let l;if(yn){if(s==="sync"){const v=Ou();l=v.__watcherHandles||(v.__watcherHandles=[])}else if(!a){const v=()=>{};return v.stop=et,v.resume=et,v.pause=et,v}}const p=Re;c.call=(v,D,$)=>Be(v,p,D,$);let _=!1;s==="post"?c.scheduler=v=>{Ee(v,p&&p.suspense)}:s!=="sync"&&(_=!0,c.scheduler=(v,D)=>{D?v():lo(v)}),c.augmentJob=v=>{t&&(v.flags|=4),_&&(v.flags|=2,p&&(v.id=p.uid,v.i=p))};const m=ku(e,t,c);return yn&&(l?l.push(m):a&&m()),m}function Pu(e,t,n){const i=this.proxy,o=pe(e)?e.includes(".")?Ws(i,e):()=>i[e]:e.bind(i,i);let s;Y(t)?s=t:(s=t.handler,n=t);const r=Rn(this),c=qs(o,s.bind(i),n);return r(),c}function Ws(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}const Ru=Symbol("_vte"),li=e=>e.__isTeleport,Me=Symbol("_leaveCb"),nn=Symbol("_enterCb");function zs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pn(()=>{e.isMounted=!0}),ir(()=>{e.isUnmounting=!0}),e}const $e=[Function,Array],Xs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},Js=e=>{const t=e.subTree;return t.component?Js(t.component):t},Eu={name:"BaseTransition",props:Xs,setup(e,{slots:t}){const n=go(),i=zs();return()=>{const o=t.default&&uo(t.default(),!0),s=o&&o.length?Zs(o):n.subTree?ce():void 0;if(!s)return;const r=X(e),{mode:c}=r;if(i.isLeaving)return Ai(s);const a=Yn(s);if(!a)return Ai(s);let l=hn(a,r,i,n,_=>l=_);a.type!==Pe&&$t(a,l);let p=n.subTree&&Yn(n.subTree);if(p&&p.type!==Pe&&!Et(p,a)&&Js(n).type!==Pe){let _=hn(p,r,i,n);if($t(p,_),c==="out-in"&&a.type!==Pe)return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete _.afterLeave,p=void 0},Ai(s);c==="in-out"&&a.type!==Pe?_.delayLeave=(m,v,D)=>{const $=Qs(i,p);$[String(p.key)]=p,m[Me]=()=>{v(),m[Me]=void 0,delete l.delayedLeave,p=void 0},l.delayedLeave=()=>{D(),delete l.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return s}}};function Zs(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}const Su=Eu;function Qs(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function hn(e,t,n,i,o){const{appear:s,mode:r,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:p,onEnterCancelled:_,onBeforeLeave:m,onLeave:v,onAfterLeave:D,onLeaveCancelled:$,onBeforeAppear:q,onAppear:V,onAfterAppear:S,onAppearCancelled:M}=t,R=String(e.key),W=Qs(n,e),j=(w,K)=>{w&&Be(w,i,9,K)},ee=(w,K)=>{const U=K[1];j(w,K),H(w)?w.every(I=>I.length<=1)&&U():w.length<=1&&U()},b={mode:r,persisted:c,beforeEnter(w){let K=a;if(!n.isMounted)if(s)K=q||a;else return;w[Me]&&w[Me](!0);const U=W[R];U&&Et(e,U)&&U.el[Me]&&U.el[Me](),j(K,[w])},enter(w){if(W[R]===e)return;let K=l,U=p,I=_;if(!n.isMounted)if(s)K=V||l,U=S||p,I=M||_;else return;let ae=!1;w[nn]=it=>{ae||(ae=!0,it?j(I,[w]):j(U,[w]),b.delayedLeave&&b.delayedLeave(),w[nn]=void 0)};const Te=w[nn].bind(null,!1);K?ee(K,[w,Te]):Te()},leave(w,K){const U=String(e.key);if(w[nn]&&w[nn](!0),n.isUnmounting)return K();j(m,[w]);let I=!1;w[Me]=Te=>{I||(I=!0,K(),Te?j($,[w]):j(D,[w]),w[Me]=void 0,W[U]===e&&delete W[U])};const ae=w[Me].bind(null,!1);W[U]=e,v?ee(v,[w,ae]):ae()},clone(w){const K=hn(w,t,n,i,o);return o&&o(K),K}};return b}function Ai(e){if(pi(e))return e=xt(e),e.children=null,e}function Yn(e){if(!pi(e))return li(e.type)&&e.children?Zs(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Y(n.default))return n.default()}}function $t(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;$t(li(n.type)&&Yn(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function uo(e,t=!1,n){let i=[],o=0;for(let s=0;s<e.length;s++){let r=e[s];const c=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===me?(r.patchFlag&128&&o++,i=i.concat(uo(r.children,t,c))):(t||r.type!==Pe)&&i.push(c!=null?xt(r,{key:c}):r)}if(o>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function nt(e,t){return Y(e)?ge({name:e.name},t,{setup:e}):e}function er(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Eo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Kn=new WeakMap;function pn(e,t,n,i,o=!1){if(H(e)){e.forEach(($,q)=>pn($,t&&(H(t)?t[q]:t),n,i,o));return}if(un(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&pn(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?fi(i.component):i.el,r=o?null:s,{i:c,r:a}=e,l=t&&t.r,p=c.refs===oe?c.refs={}:c.refs,_=c.setupState,m=X(_),v=_===oe?gs:$=>Eo(p,$)?!1:J(m,$),D=($,q)=>!(q&&Eo(p,q));if(l!=null&&l!==a){if(So(t),pe(l))p[l]=null,v(l)&&(_[l]=null);else if(Ae(l)){const $=t;D(l,$.k)&&(l.value=null),$.k&&(p[$.k]=null)}}if(Y(a))On(a,c,12,[r,p]);else{const $=pe(a),q=Ae(a);if($||q){const V=()=>{if(e.f){const S=$?v(a)?_[a]:p[a]:D()||!e.k?a.value:p[e.k];if(o)H(S)&&Ji(S,s);else if(H(S))S.includes(s)||S.push(s);else if($)p[a]=[s],v(a)&&(_[a]=p[a]);else{const M=[s];D(a,e.k)&&(a.value=M),e.k&&(p[e.k]=M)}}else $?(p[a]=r,v(a)&&(_[a]=r)):q&&(D(a,e.k)&&(a.value=r),e.k&&(p[e.k]=r))};if(r){const S=()=>{V(),Kn.delete(e)};S.id=-1,Kn.set(e,S),Ee(S,n)}else So(e),V()}}}function So(e){const t=Kn.get(e);t&&(t.flags|=8,Kn.delete(e))}si().requestIdleCallback;si().cancelIdleCallback;const un=e=>!!e.type.__asyncLoader,pi=e=>e.type.__isKeepAlive;function Iu(e,t){tr(e,"a",t)}function Cu(e,t){tr(e,"da",t)}function tr(e,t,n=Re){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ui(t,i,n),n){let o=n.parent;for(;o&&o.parent;)pi(o.parent.vnode)&&$u(i,t,n,o),o=o.parent}}function $u(e,t,n,i){const o=ui(t,e,i,!0);Ft(()=>{Ji(i[t],o)},n)}function ui(e,t,n=Re,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{ut();const c=Rn(n),a=Be(t,n,e,r);return c(),dt(),a});return i?o.unshift(s):o.push(s),s}}const ft=e=>(t,n=Re)=>{(!yn||e==="sp")&&ui(e,(...i)=>t(...i),n)},Mu=ft("bm"),Pn=ft("m"),Nu=ft("bu"),nr=ft("u"),ir=ft("bum"),Ft=ft("um"),Fu=ft("sp"),Du=ft("rtg"),Bu=ft("rtc");function Hu(e,t=Re){ui("ec",e,t)}const Vu=Symbol.for("v-ndc");function Mt(e,t,n,i){let o;const s=n,r=H(e);if(r||pe(e)){const c=r&&It(e);let a=!1,l=!1;c&&(a=!Fe(e),l=_t(e),e=ri(e)),o=new Array(e.length);for(let p=0,_=e.length;p<_;p++)o[p]=t(a?l?Wt(Ge(e[p])):Ge(e[p]):e[p],p,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,s)}else if(Z(e))if(e[Symbol.iterator])o=Array.from(e,(c,a)=>t(c,a,void 0,s));else{const c=Object.keys(e);o=new Array(c.length);for(let a=0,l=c.length;a<l;a++){const p=c[a];o[a]=t(e[p],p,a,s)}}else o=[];return o}const Bi=e=>e?Ar(e)?fi(e):Bi(e.parent):null,dn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bi(e.parent),$root:e=>Bi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>sr(e),$forceUpdate:e=>e.f||(e.f=()=>{lo(e.update)}),$nextTick:e=>e.n||(e.n=Gs.bind(e.proxy)),$watch:e=>Pu.bind(e)}),bi=(e,t)=>e!==oe&&!e.__isScriptSetup&&J(e,t),Gu={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:c,appContext:a}=e;if(t[0]!=="$"){const m=r[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(bi(i,t))return r[t]=1,i[t];if(o!==oe&&J(o,t))return r[t]=2,o[t];if(J(s,t))return r[t]=3,s[t];if(n!==oe&&J(n,t))return r[t]=4,n[t];Hi&&(r[t]=0)}}const l=dn[t];let p,_;if(l)return t==="$attrs"&&Le(e.attrs,"get",""),l(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==oe&&J(n,t))return r[t]=4,n[t];if(_=a.config.globalProperties,J(_,t))return _[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return bi(o,t)?(o[t]=n,!0):i!==oe&&J(i,t)?(i[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,props:s,type:r}},c){let a;return!!(n[c]||e!==oe&&c[0]!=="$"&&J(e,c)||bi(t,c)||J(s,c)||J(i,c)||J(dn,c)||J(o.config.globalProperties,c)||(a=r.__cssModules)&&a[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Io(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Hi=!0;function Uu(e){const t=sr(e),n=e.proxy,i=e.ctx;Hi=!1,t.beforeCreate&&Co(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:c,provide:a,inject:l,created:p,beforeMount:_,mounted:m,beforeUpdate:v,updated:D,activated:$,deactivated:q,beforeDestroy:V,beforeUnmount:S,destroyed:M,unmounted:R,render:W,renderTracked:j,renderTriggered:ee,errorCaptured:b,serverPrefetch:w,expose:K,inheritAttrs:U,components:I,directives:ae,filters:Te}=t;if(l&&ju(l,i,null),r)for(const le in r){const se=r[le];Y(se)&&(i[le]=se.bind(n))}if(o){const le=o.call(n,n);Z(le)&&(e.data=ro(le))}if(Hi=!0,s)for(const le in s){const se=s[le],Lt=Y(se)?se.bind(n,n):Y(se.get)?se.get.bind(n,n):et,En=!Y(se)&&Y(se.set)?se.set.bind(n):et,At=ne({get:Lt,set:En});Object.defineProperty(i,le,{enumerable:!0,configurable:!0,get:()=>At.value,set:Ue=>At.value=Ue})}if(c)for(const le in c)or(c[le],i,n,le);if(a){const le=Y(a)?a.call(n):a;Reflect.ownKeys(le).forEach(se=>{bu(se,le[se])})}p&&Co(p,e,"c");function ve(le,se){H(se)?se.forEach(Lt=>le(Lt.bind(n))):se&&le(se.bind(n))}if(ve(Mu,_),ve(Pn,m),ve(Nu,v),ve(nr,D),ve(Iu,$),ve(Cu,q),ve(Hu,b),ve(Bu,j),ve(Du,ee),ve(ir,S),ve(Ft,R),ve(Fu,w),H(K))if(K.length){const le=e.exposed||(e.exposed={});K.forEach(se=>{Object.defineProperty(le,se,{get:()=>n[se],set:Lt=>n[se]=Lt,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===et&&(e.render=W),U!=null&&(e.inheritAttrs=U),I&&(e.components=I),ae&&(e.directives=ae),w&&er(e)}function ju(e,t,n=et){H(e)&&(e=Vi(e));for(const i in e){const o=e[i];let s;Z(o)?"default"in o?s=Dn(o.from||i,o.default,!0):s=Dn(o.from||i):s=Dn(o),Ae(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function Co(e,t,n){Be(H(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function or(e,t,n,i){let o=i.includes(".")?Ws(n,i):()=>n[i];if(pe(e)){const s=t[e];Y(s)&&Oe(o,s)}else if(Y(e))Oe(o,e.bind(n));else if(Z(e))if(H(e))e.forEach(s=>or(s,t,n,i));else{const s=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(s)&&Oe(o,s,e)}}function sr(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,c=s.get(t);let a;return c?a=c:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(l=>qn(a,l,r,!0)),qn(a,t,r)),Z(t)&&s.set(t,a),a}function qn(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&qn(e,s,n,!0),o&&o.forEach(r=>qn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const c=Yu[r]||n&&n[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const Yu={data:$o,props:Mo,emits:Mo,methods:sn,computed:sn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:sn,directives:sn,watch:qu,provide:$o,inject:Ku};function $o(e,t){return t?e?function(){return ge(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Ku(e,t){return sn(Vi(e),Vi(t))}function Vi(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function sn(e,t){return e?ge(Object.create(null),e,t):t}function Mo(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ge(Object.create(null),Io(e),Io(t??{})):t}function qu(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const i in t)n[i]=be(e[i],t[i]);return n}function rr(){return{app:null,config:{isNativeTag:gs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wu=0;function zu(e,t){return function(i,o=null){Y(i)||(i=ge({},i)),o!=null&&!Z(o)&&(o=null);const s=rr(),r=new WeakSet,c=[];let a=!1;const l=s.app={_uid:Wu++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:wd,get config(){return s.config},set config(p){},use(p,..._){return r.has(p)||(p&&Y(p.install)?(r.add(p),p.install(l,..._)):Y(p)&&(r.add(p),p(l,..._))),l},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),l},component(p,_){return _?(s.components[p]=_,l):s.components[p]},directive(p,_){return _?(s.directives[p]=_,l):s.directives[p]},mount(p,_,m){if(!a){const v=l._ceVNode||xe(i,o);return v.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(v,p,m),a=!0,l._container=p,p.__vue_app__=l,fi(v.component)}},onUnmount(p){c.push(p)},unmount(){a&&(Be(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(p,_){return s.provides[p]=_,l},runWithContext(p){const _=qt;qt=l;try{return p()}finally{qt=_}}};return l}}let qt=null;const Xu=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${Nt(t)}Modifiers`];function Ju(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||oe;let o=n;const s=t.startsWith("update:"),r=s&&Xu(i,t.slice(7));r&&(r.trim&&(o=n.map(p=>pe(p)?p.trim():p)),r.number&&(o=n.map(Qi)));let c,a=i[c=xi(t)]||i[c=xi(He(t))];!a&&s&&(a=i[c=xi(Nt(t))]),a&&Be(a,e,6,o);const l=i[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Be(l,e,6,o)}}const Zu=new WeakMap;function cr(e,t,n=!1){const i=n?Zu:t.emitsCache,o=i.get(e);if(o!==void 0)return o;const s=e.emits;let r={},c=!1;if(!Y(e)){const a=l=>{const p=cr(l,t,!0);p&&(c=!0,ge(r,p))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(Z(e)&&i.set(e,null),null):(H(s)?s.forEach(a=>r[a]=null):ge(r,s),Z(e)&&i.set(e,r),r)}function di(e,t){return!e||!ni(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,Nt(t))||J(e,t))}function No(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:c,emit:a,render:l,renderCache:p,props:_,data:m,setupState:v,ctx:D,inheritAttrs:$}=e,q=jn(e);let V,S;try{if(n.shapeFlag&4){const R=o||i,W=R;V=Ze(l.call(W,R,p,_,v,m,D)),S=c}else{const R=t;V=Ze(R.length>1?R(_,{attrs:c,slots:r,emit:a}):R(_,null)),S=t.props?c:Qu(c)}}catch(R){Ct.length=0,ai(R,e,1),V=xe(Pe)}let M=V;if(S&&$!==!1){const R=Object.keys(S),{shapeFlag:W}=M;R.length&&W&7&&(s&&R.some(ii)&&(S=ed(S,s)),M=xt(M,S,!1,!0))}if(n.dirs&&(M=xt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition){const R=li(M.type)&&Yn(M)||M;$t(R,n.transition)}return V=M,jn(q),V}const Qu=e=>{let t;for(const n in e)(n==="class"||n==="style"||ni(n))&&((t||(t={}))[n]=e[n]);return t},ed=(e,t)=>{const n={};for(const i in e)(!ii(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function td(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:c,patchFlag:a}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Fo(i,r,l):!!r;if(a&8){const p=t.dynamicProps;for(let _=0;_<p.length;_++){const m=p[_];if(ar(r,i,m)&&!di(l,m))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:i===r?!1:i?r?Fo(i,r,l):!0:!!r;return!1}function Fo(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(ar(t,e,s)&&!di(n,s))return!0}return!1}function ar(e,t,n){const i=e[n],o=t[n];return n==="style"&&Z(i)&&Z(o)?!eo(i,o):i!==o}function nd({vnode:e,parent:t,suspense:n},i){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=i,e=o),o===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const lr={},pr=()=>Object.create(lr),ur=e=>Object.getPrototypeOf(e)===lr;function id(e,t,n,i=!1){const o={},s=pr();e.propsDefaults=Object.create(null),dr(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:_u(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function od(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,c=X(o),[a]=e.propsOptions;let l=!1;if((i||r>0)&&!(r&16)){if(r&8){const p=e.vnode.dynamicProps;for(let _=0;_<p.length;_++){let m=p[_];if(di(e.emitsOptions,m))continue;const v=t[m];if(a)if(J(s,m))v!==s[m]&&(s[m]=v,l=!0);else{const D=He(m);o[D]=Gi(a,c,D,v,e,!1)}else v!==s[m]&&(s[m]=v,l=!0)}}}else{dr(e,t,o,s)&&(l=!0);let p;for(const _ in c)(!t||!J(t,_)&&((p=Nt(_))===_||!J(t,p)))&&(a?n&&(n[_]!==void 0||n[p]!==void 0)&&(o[_]=Gi(a,c,_,void 0,e,!0)):delete o[_]);if(s!==c)for(const _ in s)(!t||!J(t,_))&&(delete s[_],l=!0)}l&&lt(e.attrs,"set","")}function dr(e,t,n,i){const[o,s]=e.propsOptions;let r=!1,c;if(t)for(let a in t){if(cn(a))continue;const l=t[a];let p;o&&J(o,p=He(a))?!s||!s.includes(p)?n[p]=l:(c||(c={}))[p]=l:di(e.emitsOptions,a)||(!(a in i)||l!==i[a])&&(i[a]=l,r=!0)}if(s){const a=X(n),l=c||oe;for(let p=0;p<s.length;p++){const _=s[p];n[_]=Gi(o,a,_,l[_],e,!J(l,_))}}return r}function Gi(e,t,n,i,o,s){const r=e[n];if(r!=null){const c=J(r,"default");if(c&&i===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&Y(a)){const{propsDefaults:l}=o;if(n in l)i=l[n];else{const p=Rn(o);i=l[n]=a.call(null,t),p()}}else i=a;o.ce&&o.ce._setProp(n,i)}r[0]&&(s&&!c?i=!1:r[1]&&(i===""||i===Nt(n))&&(i=!0))}return i}const sd=new WeakMap;function _r(e,t,n=!1){const i=n?sd:t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},c=[];let a=!1;if(!Y(e)){const p=_=>{a=!0;const[m,v]=_r(_,t,!0);ge(r,m),v&&c.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!a)return Z(e)&&i.set(e,jt),jt;if(H(s))for(let p=0;p<s.length;p++){const _=He(s[p]);Do(_)&&(r[_]=oe)}else if(s)for(const p in s){const _=He(p);if(Do(_)){const m=s[p],v=r[_]=H(m)||Y(m)?{type:m}:ge({},m),D=v.type;let $=!1,q=!0;if(H(D))for(let V=0;V<D.length;++V){const S=D[V],M=Y(S)&&S.name;if(M==="Boolean"){$=!0;break}else M==="String"&&(q=!1)}else $=Y(D)&&D.name==="Boolean";v[0]=$,v[1]=q,($||J(v,"default"))&&c.push(_)}}const l=[r,c];return Z(e)&&i.set(e,l),l}function Do(e){return e[0]!=="$"&&!cn(e)}const _o=e=>e==="_"||e==="_ctx"||e==="$stable",fo=e=>H(e)?e.map(Ze):[Ze(e)],rd=(e,t,n)=>{if(t._n)return t;const i=po((...o)=>fo(t(...o)),n);return i._c=!1,i},fr=(e,t,n)=>{const i=e._ctx;for(const o in e){if(_o(o))continue;const s=e[o];if(Y(s))t[o]=rd(o,s,i);else if(s!=null){const r=fo(s);t[o]=()=>r}}},gr=(e,t)=>{const n=fo(t);e.slots.default=()=>n},mr=(e,t,n)=>{for(const i in t)(n||!_o(i))&&(e[i]=t[i])},cd=(e,t,n)=>{const i=e.slots=pr();if(e.vnode.shapeFlag&32){const o=t._;o?(mr(i,t,n),n&&ys(i,"_",o,!0)):fr(t,i)}else t&&gr(e,t)},ad=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=oe;if(i.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:mr(o,t,n):(s=!t.$stable,fr(t,o)),r=t}else t&&(gr(e,t),r={default:1});if(s)for(const c in o)!_o(c)&&r[c]==null&&delete o[c]},Ee=_d;function ld(e){return pd(e)}function pd(e,t){const n=si();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:c,createComment:a,setText:l,setElementText:p,parentNode:_,nextSibling:m,setScopeId:v=et,insertStaticContent:D}=e,$=(u,d,f,y=null,k=null,h=null,O=void 0,A=null,L=!!d.dynamicChildren)=>{if(u===d)return;u&&!Et(u,d)&&(y=Sn(u),Ue(u,k,h,!0),u=null),d.patchFlag===-2&&(L=!1,d.dynamicChildren=null);const{type:x,ref:B,shapeFlag:P}=d;switch(x){case _i:q(u,d,f,y);break;case Pe:V(u,d,f,y);break;case Bn:u==null&&S(d,f,y,O);break;case me:I(u,d,f,y,k,h,O,A,L);break;default:P&1?W(u,d,f,y,k,h,O,A,L):P&6?ae(u,d,f,y,k,h,O,A,L):(P&64||P&128)&&x.process(u,d,f,y,k,h,O,A,L,Qt)}B!=null&&k?pn(B,u&&u.ref,h,d||u,!d):B==null&&u&&u.ref!=null&&pn(u.ref,null,h,u,!0)},q=(u,d,f,y)=>{if(u==null)i(d.el=c(d.children),f,y);else{const k=d.el=u.el;d.children!==u.children&&l(k,d.children)}},V=(u,d,f,y)=>{u==null?i(d.el=a(d.children||""),f,y):d.el=u.el},S=(u,d,f,y)=>{[u.el,u.anchor]=D(u.children,d,f,y,u.el,u.anchor)},M=({el:u,anchor:d},f,y)=>{let k;for(;u&&u!==d;)k=m(u),i(u,f,y),u=k;i(d,f,y)},R=({el:u,anchor:d})=>{let f;for(;u&&u!==d;)f=m(u),o(u),u=f;o(d)},W=(u,d,f,y,k,h,O,A,L)=>{if(d.type==="svg"?O="svg":d.type==="math"&&(O="mathml"),u==null)j(d,f,y,k,h,O,A,L);else{const x=u.el&&u.el._isVueCE?u.el:null;try{x&&x._beginPatch(),w(u,d,k,h,O,A,L)}finally{x&&x._endPatch()}}},j=(u,d,f,y,k,h,O,A)=>{let L,x;const{props:B,shapeFlag:P,transition:F,dirs:G}=u;if(L=u.el=r(u.type,h,B&&B.is,B),P&8?p(L,u.children):P&16&&b(u.children,L,null,y,k,wi(u,h),O,A),G&&bt(u,null,y,"created"),ee(L,u,u.scopeId,O,y),B){for(const ie in B)ie!=="value"&&!cn(ie)&&s(L,ie,null,B[ie],h,y);"value"in B&&s(L,"value",null,B.value,h),(x=B.onVnodeBeforeMount)&&qe(x,y,u)}G&&bt(u,null,y,"beforeMount");const z=ud(k,F);z&&F.beforeEnter(L),i(L,d,f),((x=B&&B.onVnodeMounted)||z||G)&&Ee(()=>{try{x&&qe(x,y,u),z&&F.enter(L),G&&bt(u,null,y,"mounted")}finally{}},k)},ee=(u,d,f,y,k)=>{if(f&&v(u,f),y)for(let h=0;h<y.length;h++)v(u,y[h]);if(k){let h=k.subTree;if(d===h||kr(h.type)&&(h.ssContent===d||h.ssFallback===d)){const O=k.vnode;ee(u,O,O.scopeId,O.slotScopeIds,k.parent)}}},b=(u,d,f,y,k,h,O,A,L=0)=>{for(let x=L;x<u.length;x++){const B=u[x]=A?at(u[x]):Ze(u[x]);$(null,B,d,f,y,k,h,O,A)}},w=(u,d,f,y,k,h,O)=>{const A=d.el=u.el;let{patchFlag:L,dynamicChildren:x,dirs:B}=d;L|=u.patchFlag&16;const P=u.props||oe,F=d.props||oe;let G;if(f&&wt(f,!1),(G=F.onVnodeBeforeUpdate)&&qe(G,f,d,u),B&&bt(d,u,f,"beforeUpdate"),f&&wt(f,!0),x&&(!u.dynamicChildren||u.dynamicChildren.length!==x.length)&&(L=0,O=!1,x=null),(P.innerHTML&&F.innerHTML==null||P.textContent&&F.textContent==null)&&p(A,""),x?K(u.dynamicChildren,x,A,f,y,wi(d,k),h):O||se(u,d,A,null,f,y,wi(d,k),h,!1),L>0){if(L&16)U(A,P,F,f,k);else if(L&2&&P.class!==F.class&&s(A,"class",null,F.class,k),L&4&&s(A,"style",P.style,F.style,k),L&8){const z=d.dynamicProps;for(let ie=0;ie<z.length;ie++){const te=z[ie],_e=P[te],ke=F[te];(ke!==_e||te==="value")&&s(A,te,_e,ke,k,f)}}L&1&&u.children!==d.children&&p(A,d.children)}else!O&&x==null&&U(A,P,F,f,k);((G=F.onVnodeUpdated)||B)&&Ee(()=>{G&&qe(G,f,d,u),B&&bt(d,u,f,"updated")},y)},K=(u,d,f,y,k,h,O)=>{for(let A=0;A<d.length;A++){const L=u[A],x=d[A],B=L.el&&(L.type===me||!Et(L,x)||L.shapeFlag&198)?_(L.el):f;$(L,x,B,null,y,k,h,O,!0)}},U=(u,d,f,y,k)=>{if(d!==f){if(d!==oe)for(const h in d)!cn(h)&&!(h in f)&&s(u,h,d[h],null,k,y);for(const h in f){if(cn(h))continue;const O=f[h],A=d[h];O!==A&&h!=="value"&&s(u,h,A,O,k,y)}"value"in f&&s(u,"value",d.value,f.value,k)}},I=(u,d,f,y,k,h,O,A,L)=>{const x=d.el=u?u.el:c(""),B=d.anchor=u?u.anchor:c("");let{patchFlag:P,dynamicChildren:F,slotScopeIds:G}=d;G&&(A=A?A.concat(G):G),u==null?(i(x,f,y),i(B,f,y),b(d.children||[],f,B,k,h,O,A,L)):P>0&&P&64&&F&&u.dynamicChildren&&u.dynamicChildren.length===F.length?(K(u.dynamicChildren,F,f,k,h,O,A),(d.key!=null||k&&d===k.subTree)&&vr(u,d,!0)):se(u,d,f,B,k,h,O,A,L)},ae=(u,d,f,y,k,h,O,A,L)=>{d.slotScopeIds=A,u==null?d.shapeFlag&512?k.ctx.activate(d,f,y,O,L):Te(d,f,y,k,h,O,L):it(u,d,L)},Te=(u,d,f,y,k,h,O)=>{const A=u.component=xd(u,y,k);if(pi(u)&&(A.ctx.renderer=Qt),kd(A,!1,O),A.asyncDep){if(k&&k.registerDep(A,ve,O),!u.el){const L=A.subTree=xe(Pe);V(null,L,d,f),u.placeholder=L.el}}else ve(A,u,d,f,k,h,O)},it=(u,d,f)=>{const y=d.component=u.component;if(td(u,d,f))if(y.asyncDep&&!y.asyncResolved){le(y,d,f);return}else y.next=d,y.update();else d.el=u.el,y.vnode=d},ve=(u,d,f,y,k,h,O)=>{const A=()=>{if(u.isMounted){let{next:P,bu:F,u:G,parent:z,vnode:ie}=u;{const Ye=hr(u);if(Ye){P&&(P.el=ie.el,le(u,P,O)),Ye.asyncDep.then(()=>{Ee(()=>{u.isUnmounted||x()},k)});return}}let te=P,_e;wt(u,!1),P?(P.el=ie.el,le(u,P,O)):P=ie,F&&Fn(F),(_e=P.props&&P.props.onVnodeBeforeUpdate)&&qe(_e,z,P,ie),wt(u,!0);const ke=No(u),je=u.subTree;u.subTree=ke,$(je,ke,_(je.el),Sn(je),u,k,h),P.el=ke.el,te===null&&nd(u,ke.el),G&&Ee(G,k),(_e=P.props&&P.props.onVnodeUpdated)&&Ee(()=>qe(_e,z,P,ie),k)}else{let P;const{el:F,props:G}=d,{bm:z,m:ie,parent:te,root:_e,type:ke}=u,je=un(d);wt(u,!1),z&&Fn(z),!je&&(P=G&&G.onVnodeBeforeMount)&&qe(P,te,d),wt(u,!0);{_e.ce&&_e.ce._hasShadowRoot()&&_e.ce._injectChildStyle(ke,u.parent?u.parent.type:void 0);const Ye=u.subTree=No(u);$(null,Ye,f,y,u,k,h),d.el=Ye.el}if(ie&&Ee(ie,k),!je&&(P=G&&G.onVnodeMounted)){const Ye=d;Ee(()=>qe(P,te,Ye),k)}(d.shapeFlag&256||te&&un(te.vnode)&&te.vnode.shapeFlag&256)&&u.a&&Ee(u.a,k),u.isMounted=!0,d=f=y=null}};u.scope.on();const L=u.effect=new bs(A);u.scope.off();const x=u.update=L.run.bind(L),B=u.job=L.runIfDirty.bind(L);B.i=u,B.id=u.uid,L.scheduler=()=>lo(B),wt(u,!0),x()},le=(u,d,f)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,od(u,d.props,y,f),ad(u,d.children,f),ut(),Ro(u),dt()},se=(u,d,f,y,k,h,O,A,L=!1)=>{const x=u&&u.children,B=u?u.shapeFlag:0,P=d.children,{patchFlag:F,shapeFlag:G}=d;if(F>0){if(F&128){En(x,P,f,y,k,h,O,A,L);return}else if(F&256){Lt(x,P,f,y,k,h,O,A,L);return}}G&8?(B&16&&Zt(x,k,h),P!==x&&p(f,P)):B&16?G&16?En(x,P,f,y,k,h,O,A,L):Zt(x,k,h,!0):(B&8&&p(f,""),G&16&&b(P,f,y,k,h,O,A,L))},Lt=(u,d,f,y,k,h,O,A,L)=>{u=u||jt,d=d||jt;const x=u.length,B=d.length,P=Math.min(x,B);let F;for(F=0;F<P;F++){const G=d[F]=L?at(d[F]):Ze(d[F]);$(u[F],G,f,null,k,h,O,A,L)}x>B?Zt(u,k,h,!0,!1,P):b(d,f,y,k,h,O,A,L,P)},En=(u,d,f,y,k,h,O,A,L)=>{let x=0;const B=d.length;let P=u.length-1,F=B-1;for(;x<=P&&x<=F;){const G=u[x],z=d[x]=L?at(d[x]):Ze(d[x]);if(Et(G,z))$(G,z,f,null,k,h,O,A,L);else break;x++}for(;x<=P&&x<=F;){const G=u[P],z=d[F]=L?at(d[F]):Ze(d[F]);if(Et(G,z))$(G,z,f,null,k,h,O,A,L);else break;P--,F--}if(x>P){if(x<=F){const G=F+1,z=G<B?d[G].el:y;for(;x<=F;)$(null,d[x]=L?at(d[x]):Ze(d[x]),f,z,k,h,O,A,L),x++}}else if(x>F)for(;x<=P;)Ue(u[x],k,h,!0),x++;else{const G=x,z=x,ie=new Map;for(x=z;x<=F;x++){const Se=d[x]=L?at(d[x]):Ze(d[x]);Se.key!=null&&ie.set(Se.key,x)}let te,_e=0;const ke=F-z+1;let je=!1,Ye=0;const en=new Array(ke);for(x=0;x<ke;x++)en[x]=0;for(x=G;x<=P;x++){const Se=u[x];if(_e>=ke){Ue(Se,k,h,!0);continue}let Ke;if(Se.key!=null)Ke=ie.get(Se.key);else for(te=z;te<=F;te++)if(en[te-z]===0&&Et(Se,d[te])){Ke=te;break}Ke===void 0?Ue(Se,k,h,!0):(en[Ke-z]=x+1,Ke>=Ye?Ye=Ke:je=!0,$(Se,d[Ke],f,null,k,h,O,A,L),_e++)}const To=je?dd(en):jt;for(te=To.length-1,x=ke-1;x>=0;x--){const Se=z+x,Ke=d[Se],Lo=d[Se+1],Ao=Se+1<B?Lo.el||xr(Lo):y;en[x]===0?$(null,Ke,f,Ao,k,h,O,A,L):je&&(te<0||x!==To[te]?At(Ke,f,Ao,2):te--)}}},At=(u,d,f,y,k=null)=>{const{el:h,type:O,transition:A,children:L,shapeFlag:x}=u;if(x&6){At(u.component.subTree,d,f,y);return}if(x&128){u.suspense.move(d,f,y);return}if(x&64){O.move(u,d,f,Qt);return}if(O===me){i(h,d,f);for(let P=0;P<L.length;P++)At(L[P],d,f,y);i(u.anchor,d,f);return}if(O===Bn){M(u,d,f);return}if(y!==2&&x&1&&A)if(y===0)A.persisted&&!h[Me]?i(h,d,f):(A.beforeEnter(h),i(h,d,f),Ee(()=>A.enter(h),k));else{const{leave:P,delayLeave:F,afterLeave:G}=A,z=()=>{u.ctx.isUnmounted?o(h):i(h,d,f)},ie=()=>{const te=h._isLeaving||!!h[Me];h._isLeaving&&h[Me](!0),A.persisted&&!te?z():P(h,()=>{z(),G&&G()})};F?F(h,z,ie):ie()}else i(h,d,f)},Ue=(u,d,f,y=!1,k=!1)=>{const{type:h,props:O,ref:A,children:L,dynamicChildren:x,shapeFlag:B,patchFlag:P,dirs:F,cacheIndex:G,memo:z}=u;if(P===-2&&(k=!1),A!=null&&(ut(),pn(A,null,f,u,!0),dt()),G!=null&&(d.renderCache[G]=void 0),B&256){d.ctx.deactivate(u);return}const ie=B&1&&F,te=!un(u);let _e;if(te&&(_e=O&&O.onVnodeBeforeUnmount)&&qe(_e,d,u),B&6)Cp(u.component,f,y);else{if(B&128){u.suspense.unmount(f,y);return}ie&&bt(u,null,d,"beforeUnmount"),B&64?u.type.remove(u,d,f,Qt,y):x&&!x.hasOnce&&(h!==me||P>0&&P&64)?Zt(x,d,f,!1,!0):(h===me&&P&384||!k&&B&16)&&Zt(L,d,f),y&&ko(u)}const ke=z!=null&&G==null;(te&&(_e=O&&O.onVnodeUnmounted)||ie||ke)&&Ee(()=>{_e&&qe(_e,d,u),ie&&bt(u,null,d,"unmounted"),ke&&(u.el=null)},f)},ko=u=>{const{type:d,el:f,anchor:y,transition:k}=u;if(d===me){Ip(f,y);return}if(d===Bn){R(u);return}const h=()=>{o(f),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(u.shapeFlag&1&&k&&!k.persisted){const{leave:O,delayLeave:A}=k,L=()=>O(f,h);A?A(u.el,h,L):L()}else h()},Ip=(u,d)=>{let f;for(;u!==d;)f=m(u),o(u),u=f;o(d)},Cp=(u,d,f)=>{const{bum:y,scope:k,job:h,subTree:O,um:A,m:L,a:x}=u;Bo(L),Bo(x),y&&Fn(y),k.stop(),h&&(h.flags|=8,Ue(O,u,d,f)),A&&Ee(A,d),Ee(()=>{u.isUnmounted=!0},d)},Zt=(u,d,f,y=!1,k=!1,h=0)=>{for(let O=h;O<u.length;O++)Ue(u[O],d,f,y,k)},Sn=u=>{if(u.shapeFlag&6)return Sn(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=m(u.anchor||u.el),f=d&&d[Ru];return f?m(f):d};let hi=!1;const yo=(u,d,f)=>{let y;u==null?d._vnode&&(Ue(d._vnode,null,null,!0),y=d._vnode.component):$(d._vnode||null,u,d,null,null,null,f),d._vnode=u,hi||(hi=!0,Ro(y),js(),hi=!1)},Qt={p:$,um:Ue,m:At,r:ko,mt:Te,mc:b,pc:se,pbc:K,n:Sn,o:e};return{render:yo,hydrate:void 0,createApp:zu(yo)}}function wi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ud(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vr(e,t,n=!1){const i=e.children,o=t.children;if(H(i)&&H(o))for(let s=0;s<i.length;s++){const r=i[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=at(o[s]),c.el=r.el),!n&&c.patchFlag!==-2&&vr(r,c)),c.type===_i&&(c.patchFlag===-1&&(c=o[s]=at(c)),c.el=r.el),c.type===Pe&&!c.el&&(c.el=r.el)}}function dd(e){const t=e.slice(),n=[0];let i,o,s,r,c;const a=e.length;for(i=0;i<a;i++){const l=e[i];if(l!==0){if(o=n[n.length-1],e[o]<l){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)c=s+r>>1,e[n[c]]<l?s=c+1:r=c;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function hr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hr(t)}function Bo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function xr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?xr(t.subTree):null}const kr=e=>e.__isSuspense;function _d(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Lu(e)}const me=Symbol.for("v-fgt"),_i=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Bn=Symbol.for("v-stc"),Ct=[];let Ce=null;function E(e=!1){Ct.push(Ce=e?null:[])}function yr(){Ct.pop(),Ce=Ct[Ct.length-1]||null}let xn=1;function Wn(e,t=!1){xn+=e,e<0&&Ce&&t&&(Ce.hasOnce=!0)}function Tr(e){return e.dynamicChildren=xn>0?Ce||jt:null,yr(),xn>0&&Ce&&Ce.push(e),e}function N(e,t,n,i,o,s){return Tr(g(e,t,n,i,o,s,!0))}function We(e,t,n,i,o){return Tr(xe(e,t,n,i,o,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Lr=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||Ae(e)||Y(e)?{i:Ne,r:e,k:t,f:!!n}:e:null);function g(e,t=null,n=null,i=0,o=null,s=e===me?0:1,r=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lr(t),ref:t&&Hn(t),scopeId:Ks,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ne};return c?(Xn(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=pe(n)?8:16),xn>0&&!r&&Ce&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Ce.push(a),a}const xe=fd;function fd(e,t=null,n=null,i=0,o=null,s=!1){if((!e||e===Vu)&&(e=Pe),zn(e)){const c=xt(e,t,!0);return n&&Xn(c,n),xn>0&&!s&&Ce&&(c.shapeFlag&6?Ce[Ce.indexOf(e)]=c:Ce.push(c)),c.patchFlag=-2,c}if(Ad(e)&&(e=e.__vccOpts),t){t=gd(t);let{class:c,style:a}=t;c&&!pe(c)&&(t.class=fe(c)),Z(a)&&(ao(a)&&!H(a)&&(a=ge({},a)),t.style=De(a))}const r=pe(e)?1:kr(e)?128:li(e)?64:Z(e)?4:Y(e)?2:0;return g(e,t,n,i,o,r,s,!0)}function gd(e){return e?ao(e)||ur(e)?ge({},e):e:null}function xt(e,t,n=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:c,transition:a}=e,l=t?md(o||{},t):o,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Lr(l),ref:t&&t.ref?n&&s?H(s)?s.concat(Hn(t)):[s,Hn(t)]:Hn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xt(e.ssContent),ssFallback:e.ssFallback&&xt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&$t(p,a.clone(p)),p}function Ut(e=" ",t=0){return xe(_i,null,e,t)}function Oi(e,t){const n=xe(Bn,null,e);return n.staticCount=t,n}function ce(e="",t=!1){return t?(E(),We(Pe,null,e)):xe(Pe,null,e)}function Ze(e){return e==null||typeof e=="boolean"?xe(Pe):H(e)?xe(me,null,e.slice()):zn(e)?at(e):xe(_i,null,String(e))}function at(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xt(e)}function Xn(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),Xn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!ur(t)?t._ctx=Ne:o===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Y(t)){if(i&65){Xn(e,{default:t});return}t={default:t,_ctx:Ne},n=32}else t=String(t),i&64?(n=16,t=[Ut(t)]):n=8;e.children=t,e.shapeFlag|=n}function md(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=fe([t.class,i.class]));else if(o==="style")t.style=De([t.style,i.style]);else if(ni(o)){const s=t[o],r=i[o];r&&s!==r&&!(H(s)&&s.includes(r))?t[o]=s?[].concat(s,r):r:r==null&&s==null&&!ii(o)&&(t[o]=r)}else o!==""&&(t[o]=i[o])}return t}function qe(e,t,n,i=null){Be(e,t,7,[n,i])}const vd=rr();let hd=0;function xd(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||vd,s={uid:hd++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_r(i,o),emitsOptions:cr(i,o),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:i.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ju.bind(null,s),e.ce&&e.ce(s),s}let Re=null;const go=()=>Re||Ne;let Jn,kn;{const e=si(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};Jn=t("__VUE_INSTANCE_SETTERS__",n=>Re=n),kn=t("__VUE_SSR_SETTERS__",n=>yn=n)}const Rn=e=>{const t=Re;return Jn(e),e.scope.on(),()=>{e.scope.off(),Jn(t)}},Ho=()=>{Re&&Re.scope.off(),Jn(null)};function Ar(e){return e.vnode.shapeFlag&4}let yn=!1;function kd(e,t=!1,n=!1){t&&kn(t);const{props:i,children:o}=e.vnode,s=Ar(e);id(e,i,s,t),cd(e,o,n||t);const r=s?yd(e,t):void 0;return t&&kn(!1),r}function yd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gu);const{setup:i}=n;if(i){ut();const o=e.setupContext=i.length>1?Ld(e):null,s=Rn(e),r=On(i,e,0,[e.props,o]),c=vs(r);if(dt(),s(),(c||e.sp)&&!un(e)&&er(e),c){if(r.then(Ho,Ho),t)return r.then(a=>{kn(!0);try{Vo(e,a,t)}finally{kn(!1)}}).catch(a=>{ai(a,e,0)});e.asyncDep=r}else Vo(e,r)}else br(e)}function Vo(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Hs(t)),br(e)}function br(e,t,n){const i=e.type;e.render||(e.render=i.render||et);{const o=Rn(e);ut();try{Uu(e)}finally{dt(),o()}}}const Td={get(e,t){return Le(e,"get",""),e[t]}};function Ld(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Td),slots:e.slots,emit:e.emit,expose:t}}function fi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Hs(fu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)},has(t,n){return n in t||n in dn}})):e.proxy}function Ad(e){return Y(e)&&"__vccOpts"in e}const ne=(e,t)=>hu(e,t,yn);function bd(e,t,n){try{Wn(-1);const i=arguments.length;return i===2?Z(t)&&!H(t)?zn(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&zn(n)&&(n=[n]),xe(e,t,n))}finally{Wn(1)}}const wd="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ui;const Go=typeof window<"u"&&window.trustedTypes;if(Go)try{Ui=Go.createPolicy("vue",{createHTML:e=>e})}catch{}const wr=Ui?e=>Ui.createHTML(e):e=>e,Od="http://www.w3.org/2000/svg",Pd="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,Uo=rt&&rt.createElement("template"),Rd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?rt.createElementNS(Od,e):t==="mathml"?rt.createElementNS(Pd,e):n?rt.createElement(e,{is:n}):rt.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Uo.innerHTML=wr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const c=Uo.content;if(i==="svg"||i==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},mt="transition",on="animation",zt=Symbol("_vtc"),Or={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pr=ge({},Xs,Or),Ed=e=>(e.displayName="Transition",e.props=Pr,e),Sd=Ed((e,{slots:t})=>bd(Su,Rr(e),t)),Ot=(e,t=[])=>{H(e)?e.forEach(n=>n(...t)):e&&e(...t)},jo=e=>e?H(e)?e.some(t=>t.length>1):e.length>1:!1;function Rr(e){const t={};for(const I in e)I in Or||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=s,appearActiveClass:l=r,appearToClass:p=c,leaveFromClass:_=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,D=Id(o),$=D&&D[0],q=D&&D[1],{onBeforeEnter:V,onEnter:S,onEnterCancelled:M,onLeave:R,onLeaveCancelled:W,onBeforeAppear:j=V,onAppear:ee=S,onAppearCancelled:b=M}=t,w=(I,ae,Te,it)=>{I._enterCancelled=it,vt(I,ae?p:c),vt(I,ae?l:r),Te&&Te()},K=(I,ae)=>{I._isLeaving=!1,vt(I,_),vt(I,v),vt(I,m),ae&&ae()},U=I=>(ae,Te)=>{const it=I?ee:S,ve=()=>w(ae,I,Te);Ot(it,[ae,ve]),Yo(()=>{vt(ae,I?a:s),ze(ae,I?p:c),jo(it)||Ko(ae,i,$,ve)})};return ge(t,{onBeforeEnter(I){Ot(V,[I]),ze(I,s),ze(I,r)},onBeforeAppear(I){Ot(j,[I]),ze(I,a),ze(I,l)},onEnter:U(!1),onAppear:U(!0),onLeave(I,ae){I._isLeaving=!0;const Te=()=>K(I,ae);ze(I,_),I._enterCancelled?(ze(I,m),ji(I)):(ji(I),ze(I,m)),Yo(()=>{I._isLeaving&&(vt(I,_),ze(I,v),jo(R)||Ko(I,i,q,Te))}),Ot(R,[I,Te])},onEnterCancelled(I){w(I,!1,void 0,!0),Ot(M,[I])},onAppearCancelled(I){w(I,!0,void 0,!0),Ot(b,[I])},onLeaveCancelled(I){K(I),Ot(W,[I])}})}function Id(e){if(e==null)return null;if(Z(e))return[Pi(e.enter),Pi(e.leave)];{const t=Pi(e);return[t,t]}}function Pi(e){return Hp(e)}function ze(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zt]||(e[zt]=new Set)).add(t)}function vt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[zt];n&&(n.delete(t),n.size||(e[zt]=void 0))}function Yo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cd=0;function Ko(e,t,n,i){const o=e._endId=++Cd,s=()=>{o===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:r,timeout:c,propCount:a}=Er(e,t);if(!r)return i();const l=r+"end";let p=0;const _=()=>{e.removeEventListener(l,m),s()},m=v=>{v.target===e&&++p>=a&&_()};setTimeout(()=>{p<a&&_()},c+1),e.addEventListener(l,m)}function Er(e,t){const n=window.getComputedStyle(e),i=D=>(n[D]||"").split(", "),o=i(`${mt}Delay`),s=i(`${mt}Duration`),r=qo(o,s),c=i(`${on}Delay`),a=i(`${on}Duration`),l=qo(c,a);let p=null,_=0,m=0;t===mt?r>0&&(p=mt,_=r,m=s.length):t===on?l>0&&(p=on,_=l,m=a.length):(_=Math.max(r,l),p=_>0?r>l?mt:on:null,m=p?p===mt?s.length:a.length:0);const v=p===mt&&/\b(?:transform|all)(?:,|$)/.test(i(`${mt}Property`).toString());return{type:p,timeout:_,propCount:m,hasTransform:v}}function qo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>Wo(n)+Wo(e[i])))}function Wo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ji(e){return(e?e.ownerDocument:document).body.offsetHeight}function $d(e,t,n){const i=e[zt];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const zo=Symbol("_vod"),Sr=Symbol("_vsh"),Md=Symbol(""),Nd=/(?:^|;)\s*display\s*:/;function Fd(e,t,n){const i=e.style,o=pe(n);let s=!1;if(n&&!o){if(t)if(pe(t))for(const r of t.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&rn(i,c,"")}else for(const r in t)n[r]==null&&rn(i,r,"");for(const r in n){r==="display"&&(s=!0);const c=n[r];c!=null?Bd(e,r,!pe(t)&&t?t[r]:void 0,c)||rn(i,r,c):rn(i,r,"")}}else if(o){if(t!==n){const r=i[Md];r&&(n+=";"+r),i.cssText=n,s=Nd.test(n)}}else t&&e.removeAttribute("style");zo in e&&(e[zo]=s?i.display:"",e[Sr]&&(i.display="none"))}const Xo=/\s*!important$/;function rn(e,t,n){if(H(n))n.forEach(i=>rn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Dd(e,t);Xo.test(n)?e.setProperty(Nt(i),n.replace(Xo,""),"important"):e[i]=n}}const Jo=["Webkit","Moz","ms"],Ri={};function Dd(e,t){const n=Ri[t];if(n)return n;let i=He(t);if(i!=="filter"&&i in e)return Ri[t]=i;i=ks(i);for(let o=0;o<Jo.length;o++){const s=Jo[o]+i;if(s in e)return Ri[t]=s}return t}function Bd(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&pe(i)&&n===i}const Zo="http://www.w3.org/1999/xlink";function Qo(e,t,n,i,o,s=Kp(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zo,t.slice(6,t.length)):e.setAttributeNS(Zo,t,n):n==null||s&&!Ts(n)?e.removeAttribute(t):e.setAttribute(t,s?"":tt(n)?String(n):n)}function es(e,t,n,i,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?wr(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ts(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Vt(e,t,n,i){e.addEventListener(t,n,i)}function Hd(e,t,n,i){e.removeEventListener(t,n,i)}const ts=Symbol("_vei");function Vd(e,t,n,i,o=null){const s=e[ts]||(e[ts]={}),r=s[t];if(i&&r)r.value=i;else{const[c,a]=jd(t);if(i){const l=s[t]=qd(i,o);Vt(e,c,l,a)}else r&&(Hd(e,c,r,a),s[t]=void 0)}}const Gd=/(Once|Passive|Capture)$/,Ud=/^on:?(?:Once|Passive|Capture)$/;function jd(e){let t,n;for(;(n=e.match(Gd))&&!Ud.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let Ei=0;const Yd=Promise.resolve(),Kd=()=>Ei||(Yd.then(()=>Ei=0),Ei=Date.now());function qd(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const o=n.value;if(H(o)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const r=o.slice(),c=[i];for(let a=0;a<r.length&&!i._stopped;a++){const l=r[a];l&&Be(l,t,5,c)}}else Be(o,t,5,[i])};return n.value=e,n.attached=Kd(),n}const ns=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wd=(e,t,n,i,o,s)=>{const r=o==="svg";t==="class"?$d(e,i,r):t==="style"?Fd(e,n,i):ni(t)?ii(t)||Vd(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zd(e,t,i,r))?(es(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qo(e,t,i,r,s,t!=="value")):e._isVueCE&&(Xd(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!pe(i)))?es(e,He(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Qo(e,t,i,r))};function zd(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&ns(t)&&Y(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ns(t)&&pe(n)?!1:t in e}function Xd(e,t){const n=e._def.props;if(!n)return!1;const i=He(t);return Array.isArray(n)?n.some(o=>He(o)===i):Object.keys(n).some(o=>He(o)===i)}const Ir=new WeakMap,Cr=new WeakMap,Zn=Symbol("_moveCb"),is=Symbol("_enterCb"),Jd=e=>(delete e.props.mode,e),Zd=Jd({name:"TransitionGroup",props:ge({},Pr,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=go(),i=zs();let o,s;return nr(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!i_(o[0].el,n.vnode.el,r)){o=[];return}o.forEach(e_),o.forEach(t_);const c=o.filter(n_);ji(n.vnode.el),c.forEach(a=>{const l=a.el,p=l.style;ze(l,r),p.transform=p.webkitTransform=p.transitionDuration="";const _=l[Zn]=m=>{m&&m.target!==l||(!m||m.propertyName.endsWith("transform"))&&(l.removeEventListener("transitionend",_),l[Zn]=null,vt(l,r))};l.addEventListener("transitionend",_)}),o=[]}),()=>{const r=X(e),c=Rr(r);let a=r.tag||me;if(o=[],s)for(let l=0;l<s.length;l++){const p=s[l];p.el&&p.el instanceof Element&&!p.el[Sr]&&(o.push(p),$t(p,hn(p,c,i,n)),Ir.set(p,$r(p.el)))}s=t.default?uo(t.default()):[];for(let l=0;l<s.length;l++){const p=s[l];p.key!=null&&$t(p,hn(p,c,i,n))}return xe(a,null,s)}}}),Qd=Zd;function e_(e){const t=e.el;t[Zn]&&t[Zn](),t[is]&&t[is]()}function t_(e){Cr.set(e,$r(e.el))}function n_(e){const t=Ir.get(e),n=Cr.get(e),i=t.left-n.left,o=t.top-n.top;if(i||o){const s=e.el,r=s.style,c=s.getBoundingClientRect();let a=1,l=1;return s.offsetWidth&&(a=c.width/s.offsetWidth),s.offsetHeight&&(l=c.height/s.offsetHeight),(!Number.isFinite(a)||a===0)&&(a=1),(!Number.isFinite(l)||l===0)&&(l=1),Math.abs(a-1)<.01&&(a=1),Math.abs(l-1)<.01&&(l=1),r.transform=r.webkitTransform=`translate(${i/a}px,${o/l}px)`,r.transitionDuration="0s",e}}function $r(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function i_(e,t,n){const i=e.cloneNode(),o=e[zt];o&&o.forEach(c=>{c.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(c=>c&&i.classList.add(c)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=Er(i);return s.removeChild(i),r}const os=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Fn(t,n):t};function o_(e){e.target.composing=!0}function ss(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mn=Symbol("_assign"),Nn=Symbol("_initialValue");function Si(e,t,n){return t&&(e=e.trim()),n&&(e=Qi(e)),e}const s_={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e.parentNode&&(e.type==="text"?e[Nn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Nn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Mn]=os(o);const s=i||o.props&&o.props.type==="number";Vt(e,t?"change":"input",r=>{r.target.composing||e[Mn](Si(e.value,n,s))}),(n||s)&&Vt(e,"change",()=>{e.value=Si(e.value,n,s)}),t||(Vt(e,"compositionstart",o_),Vt(e,"compositionend",ss),Vt(e,"change",ss))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const o=t??"",s=e[Nn];delete e[Nn],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[Mn](Si(e.value,n,i)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:o,number:s}},r){if(e[Mn]=os(r),e.composing)return;const c=(s||e.type==="number")&&!/^0\d/.test(e.value)?Qi(e.value):e.value,a=t??"";if(c===a)return;const l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!=="range"&&(i&&t===n||o&&e.value.trim()===a)||(e.value=a)}},r_=["ctrl","shift","alt","meta"],c_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>r_.some(n=>e[`${n}Key`]&&!t.includes(n))},ct=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(o,...s)=>{for(let r=0;r<t.length;r++){const c=c_[t[r]];if(c&&c(o,t))return}return e(o,...s)})},a_=ge({patchProp:Wd},Rd);let rs;function l_(){return rs||(rs=ld(a_))}const p_=(...e)=>{const t=l_().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=d_(i);if(!o)return;const s=t._component;!Y(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,u_(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function u_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function d_(e){return pe(e)?document.querySelector(e):e}const Xt={MIN:0,MAX:100},_n={BASE_DECAY:3,PRESSURE_COEF:2,RECORDER_RELIEF:3,INITIATIVE_COST_BASE:1,INITIATIVE_COST_STEP:1},Vn={T1:50,T2:30,T3:15},cs={DEFAULT:8,PANIC:4},Yi={DESTROY_EVIDENCE_CAP:-20,HUSH_MONEY_EVIDENCE_CAP:30},st={EV_WEIGHT:5,OPINION_BASE:30,OPINION_EV_COEF:2,OPINION_NEG_COST:8,COMPOSURE_FIXED:60,RISK_BASE:50,RISK_EV_RELIEF:2,RISK_NEG_ADD:10,TRUE_EV_MIN:15},Ii={PLAYBOOK_EVIDENCE:5,NOTARY_RISK:-5,CALM_BREATH_COMPOSURE:30};function fn(e){return Math.min(Xt.MAX,Math.max(Xt.MIN,e))}function mo(e){return{...e,flags:new Set(e.flags),items:new Set(e.items)}}function __(e,t,n,i){let o=n;return t.items.has("item_calm_breathing")&&e.tag==="BREATH"&&(o={...o,composure:Ii.CALM_BREATH_COMPOSURE}),t.items.has("item_hr_playbook")&&i===3&&e.initiative===3&&(o={...o,evidence:(o.evidence??0)+Ii.PLAYBOOK_EVIDENCE}),t.items.has("item_notary_habit")&&i===4&&e.initiative===3&&(o={...o,risk:(o.risk??0)+Ii.NOTARY_RISK}),o}function f_(e){return e.tag==="PHYSICAL"?{forcedEnding:e.next}:null}function g_(e,t){switch(t){case"G_NEG_DESTROYED_EVIDENCE":e.evidenceCap=Xt.MAX+Yi.DESTROY_EVIDENCE_CAP;break;case"G_NEG_HUSH_MONEY":e.evidence=Math.min(e.evidence,Yi.HUSH_MONEY_EVIDENCE_CAP);break}}function as(e,t,n=1,i=0){const o=mo(e),s=__(t,o,t.effects??{},n),r=["evidence","opinion","composure","risk"];for(const c of r){const a=s[c];a!==void 0&&(o[c]+=a)}if(t.initiative>=2&&t.tag!=="BREATH"){const c=(t.initiative-1)*(_n.INITIATIVE_COST_BASE+_n.INITIATIVE_COST_STEP*Math.floor(i/2));o.composure-=c}o.evidence>o.evidenceCap&&(o.evidence=o.evidenceCap);for(const c of r)o[c]=fn(o[c]);for(const c of s.addFlags??[])o.flags.add(c),g_(o,c);for(const c of s.removeFlags??[])o.flags.delete(c);for(const c of s.addItems??[])o.items.add(c);return o.turn+=1,o}function m_(e,t){const n=mo(e),i=_n.BASE_DECAY+t.pressure*_n.PRESSURE_COEF,o=n.items.has("item_recorder")?_n.RECORDER_RELIEF:0;return n.composure=fn(n.composure-i+o),n}class ue extends Error{constructor(t){super(t),this.name="ContentError"}}function Mr(e,t){return{evidence:e.evidence,opinion:e.opinion,composure:e.composure,risk:e.risk,dEvidence:e.evidence-t.evidence,dOpinion:e.opinion-t.opinion,dComposure:e.composure-t.composure,dRisk:e.risk-t.risk,flags:e.flags,items:e.items,turn:e.turn}}const v_=new Set(["evidence","opinion","composure","risk","dEvidence","dOpinion","dComposure","dRisk","turn"]);function h_(e){const t=[];let n=0;for(;n<e.length;){const i=e[n];if(i===" "||i==="	"||i===`
`||i==="\r"){n+=1;continue}if(i>="0"&&i<="9"){let r=n;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:Number(e.slice(n,r))}),n=r;continue}if(/[A-Za-z_]/.test(i)){let r=n;for(;r<e.length&&/[A-Za-z0-9_]/.test(e[r]);)r+=1;t.push({t:"id",v:e.slice(n,r)}),n=r;continue}if(i==="'"||i==='"'){let r=n+1;for(;r<e.length&&e[r]!==i;)r+=1;if(r>=e.length)throw new ue(`unterminated string in condition: ${e}`);t.push({t:"str",v:e.slice(n+1,r)}),n=r+1;continue}const o=e.slice(n,n+2);if(o==="&&"||o==="||"||o===">="||o==="<="||o==="=="||o==="!="){t.push({t:"op",v:o}),n+=2;continue}const s=e[n+1];if(i==="-"&&s!==void 0&&s>="0"&&s<="9"&&(t.length===0||t[t.length-1].t==="op")){let r=n+1;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:-Number(e.slice(n+1,r))}),n=r;continue}if(i===">"||i==="<"||i==="!"||i==="("||i===")"){t.push({t:"op",v:i}),n+=1;continue}throw new ue(`illegal character '${i}' in condition: ${e}`)}return t}class x_{constructor(t){he(this,"pos",0);this.tokens=t}peek(){return this.tokens[this.pos]}next(){const t=this.tokens[this.pos];if(t===void 0)throw new ue("unexpected end of condition");return this.pos+=1,t}eatOp(t){const n=this.next();if(n.t!=="op"||n.v!==t)throw new ue(`expected '${t}', got '${n.t==="op"?n.v:n.t}'`)}parse(){const t=this.parseOr();if(this.pos!==this.tokens.length){const n=this.peek();throw new ue(`unexpected trailing token '${n?n.t==="op"?n.v:n.t:"?"}'`)}return t}parseOr(){let t=this.parseAnd();for(;this.matchOp("||");)t={kind:"binary",op:"||",left:t,right:this.parseAnd()};return t}parseAnd(){let t=this.parseCompare();for(;this.matchOp("&&");)t={kind:"binary",op:"&&",left:t,right:this.parseCompare()};return t}parseCompare(){const t=this.parseUnary(),n=this.peek();return n!==void 0&&n.t==="op"&&[">=",">","<=","<","==","!="].includes(n.v)?(this.pos+=1,{kind:"compare",op:n.v,left:t,right:this.parseUnary()}):t}parseUnary(){return this.matchOp("!")?{kind:"unary",op:"!",operand:this.parseUnary()}:this.parseAtom()}parseAtom(){const t=this.next();if(t.t==="num")return{kind:"num",value:t.v};if(t.t==="str")throw new ue("string literal only allowed as function argument");if(t.t==="op"&&t.v==="("){const n=this.parseOr();return this.eatOp(")"),n}if(t.t==="id"){if(t.v==="has"||t.v==="hasItem"){this.eatOp("(");const n=this.next();if(n.t!=="str")throw new ue(`'${t.v}' expects a quoted string argument`);return this.eatOp(")"),{kind:"call",fn:t.v,arg:n.v}}if(!v_.has(t.v))throw new ue(`unknown identifier '${t.v}' in condition`);return{kind:"var",name:t.v}}throw new ue(`unexpected operator '${t.v}' in condition`)}matchOp(t){const n=this.peek();return n!==void 0&&n.t==="op"&&n.v===t?(this.pos+=1,!0):!1}}const ls=new Map;function k_(e){const t=ls.get(e);if(t!==void 0)return t;const n=new x_(h_(e)).parse();return ls.set(e,n),n}function Gt(e,t){switch(e.kind){case"num":return e.value!==0;case"var":return Nr(e.name,t)!==0;case"call":return e.fn==="has"?t.flags.has(e.arg):t.items.has(e.arg);case"unary":return!Gt(e.operand,t);case"binary":return e.op==="&&"?Gt(e.left,t)&&Gt(e.right,t):Gt(e.left,t)||Gt(e.right,t);case"compare":{const n=ps(e.left,t),i=ps(e.right,t);switch(e.op){case">=":return n>=i;case">":return n>i;case"<=":return n<=i;case"<":return n<i;case"==":return n===i;case"!=":return n!==i}}}}function ps(e,t){if(e.kind==="num")return e.value;if(e.kind==="var")return Nr(e.name,t);throw new ue("comparison operands must be numbers")}function Nr(e,t){switch(e){case"evidence":return t.evidence;case"opinion":return t.opinion;case"composure":return t.composure;case"risk":return t.risk;case"dEvidence":return t.dEvidence;case"dOpinion":return t.dOpinion;case"dComposure":return t.dComposure;case"dRisk":return t.dRisk;case"turn":return t.turn;default:throw new ue(`unknown identifier '${e}'`)}}function Fr(e,t){return e.trim()==="true"?!0:Gt(k_(e),t)}function y_(e){return e<Vn.T3||e<Vn.T2?2:e<Vn.T1?1:0}function T_(e,t){const n=i=>{let o=0;const s=`${t}/${i}`;for(let r=0;r<s.length;r+=1)o=Math.imul(o,31)+s.charCodeAt(r)|0;return(o>>>1&2147483647)/2147483648};return[...e].sort((i,o)=>n(i.id)-n(o.id))}function us(e,t,n=new Set){const i=e.options.filter(c=>c.oncePerNode===!0&&n.has(c.id)?!1:c.requires===void 0?!0:Fr(c.requires,Mr(t,L_))),o=y_(t.composure),r=e.impulsePool.filter(c=>t.composure<c.unlockBelow).slice(0,o);return T_([...i,...r],e.id)}const L_={evidence:0,opinion:0,composure:0,risk:0};function A_(e,t){return t.composure<Vn.T3?cs.PANIC:e.timer??cs.DEFAULT}function b_(e,t,n){if(t.flags.has("FORCED_F")){const o=e.endings.find(s=>s.condition==="FORCED");if(o===void 0)throw new ue(`level ${e.id} has FORCED_F state but no FORCED ending`);return o}const i=Mr(t,n);for(const o of e.endings)if(o.condition!=="FORCED"&&Fr(o.condition,i))return o;throw new ue(`level ${e.id}: no ending condition matched (missing 'true' fallback?)`)}const w_="__END__";function Ci(e){return e.type==="choice"}class vo{constructor(t,n){he(this,"nodeMap");he(this,"endingMap");he(this,"initMeter");he(this,"current");he(this,"currentNodeId");he(this,"usedThisVisit",new Set);this.level=t,this.nodeMap=new Map(t.nodes.map(i=>[i.id,i])),this.endingMap=new Map(t.endings.map(i=>[i.id,i])),this.initMeter=t.initState,this.current=this.buildInitialState(n),this.currentNodeId=t.entryNode}buildInitialState(t){const n=new Set([...t.flags].filter(s=>s.startsWith("G_"))),i=n.has("G_NEG_DESTROYED_EVIDENCE")?Xt.MAX+Yi.DESTROY_EVIDENCE_CAP:Xt.MAX,o=n.has("G_NEG_ASSAULT")?15:0;return{evidence:this.level.initState.evidence,opinion:this.level.initState.opinion,composure:this.level.initState.composure,risk:this.level.initState.risk+o,flags:n,items:new Set(t.items),turn:0,evidenceCap:i}}get state(){return this.current}start(){return this.advanceFrom(this.currentNodeId)}choose(t){const n=this.getNode(this.currentNodeId);if(!Ci(n))throw new ue(`choose() called on non-choice node ${n.id} in level ${this.level.id}`);const o=us(n,this.current,this.usedThisVisit).find(s=>s.id===t);if(o===void 0)throw new ue(`option '${t}' not available at node ${n.id} (level ${this.level.id})`);return this.applyChoice(n,o)}timeout(){const t=this.getNode(this.currentNodeId);if(!Ci(t))throw new ue(`timeout() called on non-choice node ${t.id} in level ${this.level.id}`);const n=t.options.find(i=>i.id===t.timeoutOption);if(n===void 0)throw new ue(`timeoutOption '${t.timeoutOption}' not found in node ${t.id}`);return this.applyChoice(t,n)}getNode(t){const n=this.nodeMap.get(t);if(n===void 0)throw new ue(`node not found: ${t} (level ${this.level.id})`);return n}applyChoice(t,n){const i=f_(n);return i!==null?(this.current=as(this.current,n,this.level.act,t.pressure),this.current.flags.add("FORCED_F"),this.current.flags.add("G_NEG_ASSAULT"),this.finishWith(i.forcedEnding)):(n.oncePerNode===!0&&this.usedThisVisit.add(n.id),this.current=as(this.current,n,this.level.act,t.pressure),this.current=m_(this.current,t),this.advanceFrom(n.next))}advanceFrom(t){if(t===w_)return this.finishWith(null);let n=t;for(let i=0;i<O_;i+=1){const o=this.endingMap.get(n);if(o!==void 0)return this.finishWith(o.id);const s=this.getNode(n);return Ci(s)?(n!==this.currentNodeId&&(this.usedThisVisit=new Set),this.currentNodeId=s.id,{type:"options",options:us(s,this.current,this.usedThisVisit),timer:A_(s,this.current),timeoutOptionId:s.timeoutOption,prompt:s.prompt,pressure:s.pressure,nodeId:s.id}):(this.currentNodeId=s.id,{type:"node",node:s})}throw new ue(`node chain too deep at ${n} (level ${this.level.id})`)}proceed(){const t=this.getNode(this.currentNodeId);if(t.next===void 0)throw new ue(`node ${t.id} has no next (level ${this.level.id})`);return this.advanceFrom(t.next)}finishWith(t){const n=t!==null?this.endingMap.get(t):void 0;if(t!==null&&n===void 0)throw new ue(`ending not found: ${t} (level ${this.level.id})`);const i=mo(this.current);return{type:"ending",ending:n!==void 0?n:b_(this.level,this.current,this.initMeter),state:i}}static simulate(t,n,i){const o=new vo(t,n);let s=o.start(),r=0;for(;;){if(s.type==="ending")return{rank:s.ending.rank,state:s.state};if(s.type==="node"){s=o.proceed();continue}if(s.type==="options"){const c=i[r];if(r+=1,c===void 0)throw new ue(`simulate path exhausted at node in level ${t.id}`);s=o.choose(c);continue}}}}const O_=200,Dr="poju_shilu_save_v1";function Ki(){return{version:1,flags:[],items:[],levelResults:{},cards:[],settings:{mode:"NORMAL",sound:!0}}}const Qn=globalThis.localStorage,Br=typeof Qn<"u"&&Qn!==null;function P_(){if(!Br)return Ki();const e=Qn.getItem(Dr);return e===null?Ki():JSON.parse(e)}function R_(e){Br&&Qn.setItem(Dr,JSON.stringify(e))}const E_={L01:{flag:"G_EV_SUBWAY",minRank:["S","A"]},L02:{flag:"G_EV_ELEVATOR",minRank:["S","A"]},L03:{flag:"G_EV_MALL",minRank:["S","A"]},L04:{flag:"G_EV_NIGHTWALK",minRank:["S","A"]},L05:{flag:"G_EV_GYM",minRank:["S","A"]},L06:{flag:"G_EV_BETROTHAL",minRank:["S","A"]},L07:{flag:"G_EV_TRANSFER",minRank:["S","A"]},L08:{flag:"G_EV_PATERNITY",minRank:["S","A"]},L09:{flag:"G_EV_PRESERVATION",minRank:["S","A"]},L10:{flag:"G_EV_PROTECTION_ORDER",minRank:["S","A"]},L11:{flag:"G_EV_HR_WRITTEN",minRank:["S","A"]},L12:{flag:"G_EV_EMAIL_CHAIN",minRank:["S","A"]},L13:{flag:"G_EV_FULL_AUDIO",minRank:["S","A"]},L14:{flag:"G_EV_SUSPENSION",minRank:["S","A"]},L15:{flag:"G_EV_EXTORTION",minRank:["S","A"]},L16:{flag:"G_EV_ORIGINAL_CLIP",minRank:["S","A"]},L17:{flag:"G_EV_DOXX_NOTARY",minRank:["S","A"]},L18:{flag:"G_EV_LIVE_RECORD",minRank:["S","A"]},L19:{flag:"G_EV_PLATFORM",minRank:["S","A"]}},S_={L02:"G_NEG_DESTROYED_EVIDENCE",L07:"G_NEG_HUSH_MONEY",L10:"L10_VIOLATED",L13:"G_NEG_APOLOGY_LETTER",L17:"G_NEG_DOXXED_BACK"};function I_(e,t){switch(e){case"L01":return t==="S"||t==="A"?["item_recorder"]:[];case"L02":return["item_shen_card"];case"L08":return t==="S"?["item_calm_breathing"]:[];case"L11":return t==="S"||t==="A"?["item_hr_playbook"]:[];case"L16":return t==="S"||t==="A"?["item_notary_habit"]:[];default:return[]}}function C_(e,t,n,i,o){const s={...e,flags:[...e.flags],items:[...e.items],levelResults:{...e.levelResults},cards:[...e.cards]},r=new Set(s.flags);for(const _ of i.flags)_.startsWith("G_")&&r.add(_);const c=E_[t];if(c!==void 0&&c.minRank.includes(n.rank)){const _=S_[t];_!==void 0&&(r.has(_)||i.flags.has(_))||r.add(c.flag)}const a=I_(t,n.rank),l=new Set(s.items);for(const _ of a)l.add(_);n.unlock!==void 0&&!s.cards.includes(n.unlock)&&s.cards.push(n.unlock);const p=o==null?void 0:o.now;return s.levelResults[t]={rank:n.rank,endingId:n.id,ts:p},s.flags=[...r].filter(_=>_.startsWith("G_")),s.items=[...l],s}const $_={G_NEG_ASSAULT:40,G_NEG_DOXXED_BACK:35,G_NEG_DESTROYED_EVIDENCE:30,G_NEG_APOLOGY_LETTER:25,G_NEG_HUSH_MONEY:20,G_NEG_LIED:15,G_NEG_FLED:10};function Hr(e){return e.startsWith("G_NEG_")}function Vr(e){let t=0;for(const n of e)n.startsWith("G_EV_")&&(t+=1);return t}function qi(e){let t=0;for(const n of e)Hr(n)&&(t+=1);return t}function M_(e){const t=new Set(e.flags),n=Vr(t),o=[...t].filter(Hr).reduce((s,r)=>s+($_[r]??0),0);return{evidence:fn(n*st.EV_WEIGHT-o),opinion:fn(st.OPINION_BASE+n*st.OPINION_EV_COEF-qi(t)*st.OPINION_NEG_COST),composure:st.COMPOSURE_FIXED,risk:fn(st.RISK_BASE-n*st.RISK_EV_RELIEF+qi(t)*st.RISK_NEG_ADD),flags:t,items:new Set(e.items),turn:0,evidenceCap:Xt.MAX}}function N_(e,t){const n=Vr(new Set(e.flags)),i=qi(new Set(e.flags));return n>=st.TRUE_EV_MIN&&i===0&&t==="S"?"TRUE":t==="S"||t==="A"?"WIN":"COSTLY"}const Gr="L01",Ur="第01关 · 地铁三分钟",jr=1,Yr={evidence:20,opinion:50,composure:80,risk:10},Kr=["hero","npc_l01_woman","crowd","officer_lin"],qr="n_01",Wr="card_law_L01",zr=["T1","T2"],Xr=[{id:"n_01",type:"cutscene",pressure:1,script:`三点十四分，三号线。车厢是满的，不算挤。
列车进站前一次急刹，所有人往前倾了半步。
你的手一直在门边的扶杆上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l01_woman",emotion:"shout",text:"谁摸我？！——就是你。你别动。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"半节车厢的人都转过头了。她的手指停在离你鼻尖十公分的地方。",timer:8,timeoutOption:"opt_freeze",options:[{id:"opt_hands_up",text:"（把双手举到胸前）我的手一直在扶杆上。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:-5,risk:-10,addFlags:["L01_HANDS_VISIBLE"]},next:"n_04"},{id:"opt_explain",text:"你误会了，刚才急刹车，大家都往前挤——",tag:"NEUTRAL",aggression:1,initiative:1,effects:{evidence:5,opinion:-5,composure:-10,risk:10},next:"n_04"},{id:"opt_freeze",text:"（愣住了，一个字也说不出来）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-5,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_leave",text:"（转身往车门那边走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-20,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（手机一部接一部举起来了。有人小声说：拍下来拍下来。）",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"她压低了声音，只有你们两个人听得见：「私了。两万。不然我现在就报警。」",timer:8,timeoutOption:"opt_hesitate",options:[{id:"opt_call_first",text:"（掏出手机）110 吗，三号线车厢，有人指认我。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10,addFlags:["L01_CALLED_POLICE_FIRST"]},next:"n_06"},{id:"opt_agree_police",text:"行，你报。我在这儿等着，哪儿也不去。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:10,opinion:10,composure:5,risk:-5},next:"n_06"},{id:"opt_pay",text:"两万是吧。我转你，别闹了。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:15,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_hesitate",text:"……能不能少点？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[{id:"imp_curse_01",text:"你他妈讹上瘾了是吧。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_06"}]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l01_woman",emotion:"perform",text:"（转向车厢，音量陡然拔高）大家都看看啊！他还想跑！",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她一句话说三遍，每一遍都对着不同的镜头。",timer:8,timeoutOption:"opt_pay_now",options:[{id:"opt_refuse_settle",text:"不私了。等民警来，该怎么查怎么查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,risk:-10},next:"n_08"},{id:"opt_ask_price",text:"你刚才说多少来着？大点声，我这边在录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:-5,composure:-5,risk:5,addFlags:["L01_PRICE_ON_RECORD"]},next:"n_08"},{id:"opt_pay_now",text:"（点开转账页面）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:10,risk:20,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_08"},{id:"opt_mock",text:"两万？你这价开得挺熟啊。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-15,composure:-5,risk:15},next:"n_08"}],impulsePool:[{id:"imp_curse_02",text:"你演够了没有？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08"},{id:"imp_shove_07",text:"（一把推开她举着的手机）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:5,speaker:"npc_l01_woman",emotion:"perform",text:"（举起手机怼到你脸前）你看镜头。你敢不敢看镜头。",next:"n_09"},{id:"n_09",type:"choice",pressure:5,prompt:"镜头离你的脸不到二十公分。车厢里已经有人开了直播。",timer:8,timeoutOption:"opt_silent",options:[{id:"opt_let_her_talk",text:"你把刚才那个数字，对着镜头再说一遍。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:10,opinion:20,composure:5,risk:-5},next:"n_10"},{id:"opt_silent",text:"（不说话。站在原地，录音开着）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_10"},{id:"opt_appeal_crowd",text:"大家都听到了！她一直在管我要钱！",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-10,composure:-10,risk:10},next:"n_10"},{id:"opt_block_camera",text:"（伸手去挡她的镜头）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_10"},{id:"opt_breath_l01",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_shout_09",text:"你他妈到底想干什么！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_shove_09",text:"（一把推开她）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:3,script:`列车停在站台上没有再走。
两名民警从车头方向挤过来。走在前面的那位胸前的执法记录仪亮着红灯。
「都别动。谁报的警？」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭翻开笔录本，笔尖悬在纸上。她看着你，也看着她，眼神完全一样。",timer:8,timeoutOption:"opt_emotional",options:[{id:"opt_demand_footage",text:"麻烦先调这节车厢的监控，越快越好。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:5,risk:-5,addFlags:["L01_DEMANDED_FOOTAGE"]},next:"n_12"},{id:"opt_factual",text:"三点十四分上车，一直站在门边扶杆。有监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:5,composure:10,risk:-10},next:"n_12"},{id:"opt_accuse",text:"你们先查她。她刚才管我要两万。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:5,opinion:-10,composure:-5,risk:10},next:"n_12"},{id:"opt_emotional",text:"我真没有！你们要相信我啊！",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-5,opinion:-10,composure:-10,risk:5,addFlags:["L01_F_BEHAVIOR"]},next:"n_12"}],impulsePool:[{id:"imp_shove_11",text:"（冲上去抓她）你跟警察说清楚！",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`站务室。屏幕上是三号线中部车厢的俯视角。
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

——情绪也是一种预算。这一次，你在它身上透支了。`}],F_={id:Gr,title:Ur,act:jr,initState:Yr,cast:Kr,entryNode:qr,lawyerCard:Wr,satireTargets:zr,nodes:Xr,endings:Jr},D_=Object.freeze(Object.defineProperty({__proto__:null,act:jr,cast:Kr,default:F_,endings:Jr,entryNode:qr,id:Gr,initState:Yr,lawyerCard:Wr,nodes:Xr,satireTargets:zr,title:Ur},Symbol.toStringTag,{value:"Module"})),Zr="L02",Qr="第02关 · 电梯里的镜头",ec=1,tc={evidence:25,opinion:45,composure:75,risk:10},nc=["hero","npc_l02_woman","crowd","shen_li","officer_lin"],ic="n_01",oc="card_law_L02",sc=["T1","T2"],rc=[{id:"n_01",type:"cutscene",pressure:1,script:`写字楼，十八层下行。
电梯里六个人。你刚把手机从口袋里摸出来看时间。
数字停在 18:41。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l02_woman",emotion:"cold",text:"你刚才，是不是在拍我。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"电梯还有九层。另外四个人都低头看着自己的鞋。",timer:8,timeoutOption:"opt_hand_over",options:[{id:"opt_show_lock",text:"（把手机举起，屏幕朝外）锁屏的。我不解锁。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_deny_calm",text:"没有。我拿出来看时间。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:-5,risk:-5},next:"n_04"},{id:"opt_annoyed",text:"你说话过过脑子。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"},{id:"opt_hand_over",text:"（把手机直接递过去）你自己看。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:5,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（电梯到一层。门开了，前台和几个等电梯的人转过头来。没人出去。）",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她挡在门口：「解锁给我看。不然我现在就报警。」",timer:8,timeoutOption:"opt_unlock",options:[{id:"opt_refuse_search",text:"解锁不行。你要报警现在就报，手机一直在我手上。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15,addFlags:["L02_REFUSED_SEARCH"]},next:"n_06"},{id:"opt_call_self",text:"（自己拨号）110 吗，这边有个纠纷。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_unlock",text:"（解锁递过去）看吧，我没什么好藏的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:15},next:"n_06"},{id:"opt_delete",text:"（当场删掉相册最近几张）删了，行了吧。",tag:"DESTROY_EVIDENCE",aggression:0,initiative:1,effects:{evidence:-30,opinion:-15,composure:5,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE","L02_F_BEHAVIOR"]},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l02_woman",emotion:"calm_press",text:"你越是不给看，越说明有问题。你在怕什么？",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她说得很慢，很平静。大堂里已经站了十几个人。",timer:8,timeoutOption:"opt_over_explain",options:[{id:"opt_refuse_frame",text:"这个问题我不回答。等民警来，当他面查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_08"},{id:"opt_silent_wait",text:"（不接话，站着等）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_08"},{id:"opt_counter",text:"你凭什么怀疑我？你有证据吗？",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_08"},{id:"opt_over_explain",text:"我真没拍！我可以发誓！我平时根本不……",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-15,composure:-10,risk:5},next:"n_08"},{id:"opt_breath_l02",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l02",text:"你他妈有完没完。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"}]},{id:"n_08",type:"cutscene",pressure:3,script:`一个穿深色西装的女人从旋转门进来，脚步慢下来，看了两秒。
她走过来，从名片夹里抽出一张，递给你。
「沈骊。十一楼，律所。需要的话叫我一声。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"名片停在你和她之间。对方的表情第一次有了变化。",timer:8,timeoutOption:"opt_take_card",options:[{id:"opt_accept_help",text:"麻烦您。等民警来的时候，能请您在场吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:10,composure:15,risk:-10},next:"n_10"},{id:"opt_take_card",text:"（接过名片）谢谢。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:5,composure:10,risk:-5},next:"n_10"},{id:"opt_refuse_help",text:"不用了，我自己能说清楚。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-10,opinion:-5,composure:-5,risk:10},next:"n_10"},{id:"opt_vent",text:"您评评理，这不是讹人吗！",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:10},next:"n_10"}],impulsePool:[{id:"imp_shove_l02",text:"（伸手去推开挡在门口的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`民警来了。查验在两个人面前进行：相册按时间倒序翻，最近一张是三天前的猫。
执法记录仪红灯亮着。
她往门口挪了半步。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭抬头：「查验完了。双方还有什么要说的？」",timer:8,timeoutOption:"opt_let_go",options:[{id:"opt_request_record",text:"麻烦把查验结果写进笔录。她刚才的话我也录了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_factual_02",text:"我没别的要求，按流程走就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:10,risk:-5},next:"n_12"},{id:"opt_demand_apology",text:"她得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_12"},{id:"opt_let_go",text:"算了，查清楚就行，让她走吧。",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:5,risk:10},next:"n_12"}],impulsePool:[{id:"imp_shove_l02b",text:"（一把拽住要走的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`大堂的人散了。你低头看手里那张名片。
烫金的字，边角很硬。`,next:"__END__"}],cc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你先动的手",script:`大堂的监控拍得很清楚：她站着，你伸的手。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L02_F"}],B_={id:Zr,title:Qr,act:ec,initState:tc,cast:nc,entryNode:ic,lawyerCard:oc,satireTargets:sc,nodes:rc,endings:cc},H_=Object.freeze(Object.defineProperty({__proto__:null,act:ec,cast:nc,default:B_,endings:cc,entryNode:ic,id:Zr,initState:tc,lawyerCard:oc,nodes:rc,satireTargets:sc,title:Qr},Symbol.toStringTag,{value:"Module"})),ac="L03",lc="第03关 · 爸爸和女儿",pc=1,uc={evidence:15,opinion:25,composure:60,risk:30},dc=["hero","npc_l03_daughter","npc_l03_woman","crowd","officer_lin"],_c="n_01",fc="card_law_L03",gc=["T1","T2","T3"],mc=[{id:"n_01",type:"cutscene",pressure:1,script:`周六下午，商场三楼，玩具区门口。
六岁的陈念看上了一个娃娃，你说家里已经有三个了。
她把手从你手里抽出来，坐在地上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l03_daughter",emotion:"cry",text:"我不要跟你走！",next:"n_03"},{id:"n_03",type:"dialogue",pressure:3,speaker:"npc_l03_woman",emotion:"alarmed",text:"（挡在你和孩子中间）这是你孩子吗？",next:"n_04"},{id:"n_04",type:"choice",pressure:3,prompt:"她的手已经搭在陈念肩上。周围三四个人停下了脚步。",timer:8,timeoutOption:"opt_pull_away",options:[{id:"opt_squat_down",text:"（蹲下来看着女儿）爸爸在这儿。你跟阿姨说，我是谁？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_05"},{id:"opt_show_id",text:"（掏手机）出生证明照片在这儿，户口本也有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_05"},{id:"opt_annoyed",text:"关你什么事？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_05"},{id:"opt_pull_away",text:"（拉起女儿快步往扶梯走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-25,composure:-5,risk:15,addFlags:["G_NEG_FLED","L03_F_BEHAVIOR"]},next:"n_05"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（两个男人站到了扶梯口。有人说：先别让他走。）",next:"n_06"},{id:"n_06",type:"choice",pressure:4,prompt:"十几个人围了过来。陈念还在哭，声音更大了。",timer:8,timeoutOption:"opt_push_through",options:[{id:"opt_call_police_self",text:"（拨号，开免提）我在商场三楼，有人认为我拐孩子，请你们来。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5,addFlags:["L03_CALLED_POLICE_FIRST"]},next:"n_07"},{id:"opt_call_wife",text:"（给孩子妈妈打视频，把镜头对准女儿）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-5},next:"n_07"},{id:"opt_stay_put",text:"我不走。我在这儿等警察。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:15,composure:5,risk:-5},next:"n_07"},{id:"opt_push_through",text:"（抱起孩子往人群外挤）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:5,speaker:"crowd",emotion:"neutral",text:"（七八部手机举起来。有人喊：录下来，别让他跑了！）",next:"n_08"},{id:"n_08",type:"choice",pressure:5,prompt:"陈念被人群吓到了，扑过来抱住你的腿，哭得喘不上气。",timer:8,timeoutOption:"opt_beg",options:[{id:"opt_hold_child",text:"（把她抱起来，背对人群）不怕。爸爸在这儿，哪儿也不去。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:10,opinion:20,composure:15,risk:-10},next:"n_09"},{id:"opt_let_record",text:"都拍。从头拍，别剪。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_09"},{id:"opt_beg",text:"求求你们，这真是我女儿，你们别吓着她……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-10,composure:-15,risk:10},next:"n_09"},{id:"opt_yell",text:"你们谁敢碰我孩子！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:20},next:"n_09"},{id:"opt_ally_l03",text:"（掏出那张名片，当场拨过去）沈律师，我在商场三楼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09"}],impulsePool:[{id:"imp_shove_l03",text:"（推开堵在扶梯口的那个人）让开。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"dialogue",pressure:5,speaker:"npc_l03_woman",emotion:"firm",text:"孩子自己说的不要跟你走。这么多人都听见了。",next:"n_10"},{id:"n_10",type:"choice",pressure:5,prompt:"陈念的脸埋在你肩膀上，哭声闷成一团。她攥着你的衣领，攥得很紧。",timer:8,timeoutOption:"opt_defend",options:[{id:"opt_ask_daughter",text:"（低头）宝宝，你告诉阿姨——你为什么不要跟爸爸走？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_11"},{id:"opt_full_sentence",text:"她说的是：我不要跟你走，我要买那个娃娃。你们只听了半句。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:30,composure:5,risk:-10},next:"n_11"},{id:"opt_silent_hold",text:"（不说话，抱紧她，等警察）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:-10,risk:-5},next:"n_11"},{id:"opt_defend",text:"我说了这是我女儿！你们听不懂人话吗！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_11"},{id:"opt_breath_l03",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l03",text:"你们他妈的都给我滚开！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_11"},{id:"imp_shove_l03b",text:"（一把推开挡在前面的女人）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:3,script:`警察上来了。林昭走在前面，先看的是孩子。
「小朋友，别怕。阿姨问你一句话——」
她蹲下来，和陈念平视。
「抱着你的这个人，你认识吗？」`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"陈念从你肩膀上抬起头，眼睛肿着。整个三楼安静下来。",timer:8,timeoutOption:"opt_exhausted",options:[{id:"opt_provide_all",text:"户口本在手机里，孩子妈妈视频还连着，监控从玩具区调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-10},next:"n_13"},{id:"opt_factual_l03",text:"（把经过如实说了一遍，包括她为什么哭）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-5},next:"n_13"},{id:"opt_demand",text:"拦我那个人得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_13"},{id:"opt_exhausted",text:"（抱着孩子，一个字也说不出来）",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:-10,risk:10},next:"n_13"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`陈念指着玩具区的方向，抽噎着说了三个字。
那三个字很小，但离得近的人都听见了。`,next:"__END__"}],vc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 她摔在扶梯口",script:`你推开了挡路的人。人群晃了一下。
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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L03_F"}],V_={id:ac,title:lc,act:pc,initState:uc,cast:dc,entryNode:_c,lawyerCard:fc,satireTargets:gc,nodes:mc,endings:vc},G_=Object.freeze(Object.defineProperty({__proto__:null,act:pc,cast:dc,default:V_,endings:vc,entryNode:_c,id:ac,initState:uc,lawyerCard:fc,nodes:mc,satireTargets:gc,title:lc},Symbol.toStringTag,{value:"Module"})),hc="L04",xc="第04关 · 深夜同行",kc=1,yc={evidence:20,opinion:35,composure:55,risk:35},Tc=["hero","npc_l04_woman","officer_lin","crowd"],Lc="n_01",Ac="card_law_L04",bc=["T1","T3"],wc=[{id:"n_01",type:"cutscene",pressure:1,script:`十一点四十，出地铁 C 口。加了四个小时班，你只想快点到家。
从这里到小区北门，一条路，走了三年。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:1,script:`第二个路口开始，前面十几米有个女生，同方向。
她回头看了一眼。又看了一眼。
然后你听见她加快了脚步。`,next:"n_03"},{id:"n_03",type:"choice",pressure:1,prompt:"还有三百米就到小区门口。这条路只有这一条。",timer:8,timeoutOption:"opt_ignore",options:[{id:"opt_slow_down",text:"（放慢脚步拉开距离，顺手打开导航）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-15},next:"n_04"},{id:"opt_cross_road",text:"（横穿马路，走到对面去）",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:15,risk:-10},next:"n_04"},{id:"opt_ignore",text:"（正常速度，继续走自己的）",tag:"NEUTRAL",aggression:0,initiative:1,effects:{opinion:-10,composure:-5,risk:15},next:"n_04"},{id:"opt_speed_up",text:"（累了，加快脚步想早点到家）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-20,composure:-5,risk:20},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:2,script:`小区北门口停着一辆警车，警灯没开。
两名民警下车，其中一位朝你走过来。她胸前的执法记录仪亮着红灯。
那个女生站在警车另一侧，抱着手臂。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:3,speaker:"officer_lin",emotion:"neutral",text:"您好。有人报警说被跟踪。麻烦配合一下。",next:"n_06"},{id:"n_06",type:"choice",pressure:3,prompt:"小区门口的保安探出头来看。有个遛狗的邻居停下了脚步。",timer:8,timeoutOption:"opt_defensive",options:[{id:"opt_full_cooperate",text:"配合。我住这个小区，这条路每天走。导航和门禁记录都能调。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_07"},{id:"opt_ask_basis",text:"可以配合。能先说一下是什么情况吗？",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-5},next:"n_07"},{id:"opt_defensive",text:"我跟踪谁了？我下班回家！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_07"},{id:"opt_lie",text:"我不走这条路的，我刚才在前面拐了个弯。",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:20,addFlags:["G_NEG_LIED","L04_F_BEHAVIOR"]},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:4,speaker:"npc_l04_woman",emotion:"tense",text:"他从地铁口就跟在我后面。三个路口，我走他也走。",next:"n_08"},{id:"n_08",type:"choice",pressure:4,prompt:"她说得很快，手在抖。你看得出来她是真的害怕。",timer:8,timeoutOption:"opt_apologize_l04",options:[{id:"opt_request_footage",text:"沿路有监控。麻烦从我出地铁口那一刻开始调。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_09"},{id:"opt_show_route",text:"（打开导航历史）这三个月，每天同一条路，同一个时间段。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_09"},{id:"opt_apologize_l04",text:"不好意思吓着你了，我不是故意的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_09"},{id:"opt_argue_l04",text:"是她自己疑神疑鬼。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_09"},{id:"opt_breath_l04",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_08",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l04",text:"我他妈住这儿！你要我怎么走？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_09"},{id:"imp_shove_l04",text:"（一把推开挡在前面的民警）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"choice",pressure:3,prompt:`林昭把笔录本递过来：「您看一下，没问题就签字。」
第三行写着：「本人一直跟在报警人后方行走。」`,timer:8,timeoutOption:"opt_sign_fast",options:[{id:"opt_read_carefully",text:"第三行改一下。前两个路口是我在前面，她从后面超过去的。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_10"},{id:"opt_add_statement",text:"我要求把导航记录和门禁记录附进笔录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_10"},{id:"opt_sign_fast",text:"（太累了，扫了一眼直接签）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:5,risk:25},next:"n_10"},{id:"opt_refuse_sign",text:"我不签。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-15,composure:-5,risk:20},next:"n_10"},{id:"opt_ally_l04",text:"（拨号）沈律师，我被警察拦下了，您能不能听一下。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_10"}],impulsePool:[{id:"imp_tear_l04",text:"（把笔录本推回去）你们爱怎么写怎么写。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:0,effects:{evidence:-20,opinion:-20,composure:-5,risk:20},next:"n_10"}]},{id:"n_10",type:"cutscene",pressure:2,script:`警务室的屏幕上，四个路口的画面拼在一起。

23:41，地铁 C 口，你先出来的。
23:44，第一个路口，你在前，她在后十几米。
23:47，第二个路口，你停下来买了包烟。她从你身边走过去了。
23:52，第三个路口——她在前，你在后。

林昭把进度条倒回 23:47，又放了一遍。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那个女生盯着屏幕，脸慢慢红了。她张了张嘴，没出声。",timer:8,timeoutOption:"opt_quiet_l04",options:[{id:"opt_request_conclusion",text:"麻烦出一份情况说明，写明未发现违法事实。我要留档。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_12"},{id:"opt_quiet_l04",text:"（点点头，准备回家）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_12"},{id:"opt_demand_l04",text:"她得道歉。害我在这儿站两个小时。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12"},{id:"opt_lecture",text:"以后报警之前，先想清楚。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-5,risk:10},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`凌晨一点二十，你刷卡进北门。
保安探出头：「陈哥，没事吧？」
你说没事。

第二天下班，你在地铁 C 口站了一会儿，绕了远路回家。
多走了十一分钟。`,next:"__END__"}],Oc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你推的是警察",script:`执法记录仪全程都在录。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L04_F"}],U_={id:hc,title:xc,act:kc,initState:yc,cast:Tc,entryNode:Lc,lawyerCard:Ac,satireTargets:bc,nodes:wc,endings:Oc},j_=Object.freeze(Object.defineProperty({__proto__:null,act:kc,cast:Tc,default:U_,endings:Oc,entryNode:Lc,id:hc,initState:yc,lawyerCard:Ac,nodes:wc,satireTargets:bc,title:xc},Symbol.toStringTag,{value:"Module"})),Pc="L05",Rc="第05关 · 托杠铃的那一下",Ec=1,Sc={evidence:20,opinion:30,composure:50,risk:40},Ic=["hero","npc_l05_woman","npc_l05_manager","npc_l05_witness","crowd"],Cc="n_01",$c="card_law_L05",Mc=["T1","T5"],Nc=[{id:"n_01",type:"cutscene",pressure:1,script:`自由重量区，晚上八点半。
隔壁卧推架上一个女生在推空杆加两片，最后一组第七下卡住了。
杠铃开始往下沉。她的手在抖，没有保护员。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`你两步冲过去，掌心向上，从下面托住杠铃杆，往上带。
杠铃回到架子上，哐一声。

托的时候，你的手背蹭到了她的手臂外侧。
零点几秒。`,next:"n_03"},{id:"n_03",type:"dialogue",pressure:1,speaker:"npc_l05_woman",emotion:"shaken",text:"（坐起来，喘着气）……谢谢。",next:"n_04"},{id:"n_04",type:"cutscene",pressure:2,script:`十分钟后，店长带着她走过来。
她的表情变了。不是愤怒，是那种想了很久之后的确信。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:2,speaker:"npc_l05_woman",emotion:"cold",text:"他刚才碰到我了。",next:"n_06"},{id:"n_06",type:"choice",pressure:2,prompt:"器械区安静了一片。店长搓着手，看着你身后的某个位置。",timer:8,timeoutOption:"opt_apologize_l05",options:[{id:"opt_admit_and_frame",text:"碰到了。托杠铃的时候手背蹭到她手臂，零点几秒。监控有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_07"},{id:"opt_ask_footage_l05",text:"卧推架正对着监控。麻烦现在就调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-5},next:"n_07"},{id:"opt_deny_l05",text:"我没碰她。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_LIED","L05_F_BEHAVIOR"]},next:"n_07"},{id:"opt_apologize_l05",text:"不好意思，我可能手滑了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:3,speaker:"npc_l05_woman",emotion:"calm_press",text:"你为什么要过来？我又没有叫你。",next:"n_08"},{id:"n_08",type:"choice",pressure:3,prompt:"这句话把你问住了半秒。你确实没等她开口。",timer:8,timeoutOption:"opt_withdraw",options:[{id:"opt_explain_duty",text:"杠铃已经压到你胸口了。我不过去，落下来是三十公斤。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_09"},{id:"opt_procedural_l05",text:"等监控。你怎么想是一件事，发生了什么是另一件事。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_09"},{id:"opt_hurt",text:"我救了你，你就这么说我？",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_09"},{id:"opt_withdraw",text:"行。是我多管闲事。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:15},next:"n_09"}],impulsePool:[{id:"imp_curse_l05a",text:"早知道让它砸下来。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-30,composure:-10,risk:20},next:"n_09"}]},{id:"n_09",type:"dialogue",pressure:3,speaker:"npc_l05_manager",emotion:"appease",text:"小陈啊，你看这样行不行，你先别来了，等风头过去。",next:"n_10"},{id:"n_10",type:"choice",pressure:3,prompt:"他压低了声音，像是在帮你。你卡里还有十四个月。",timer:8,timeoutOption:"opt_comply_l05",options:[{id:"opt_written_reason",text:"不来可以。请书面写明理由，我签字留档。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_11"},{id:"opt_ask_process",text:"你们的投诉流程是什么？监控什么时候调？",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_11"},{id:"opt_argue_manager",text:"出了事你就把我推出去？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:15},next:"n_11"},{id:"opt_comply_l05",text:"（默默去更衣室收拾东西）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_11"},{id:"opt_ally_l05",text:"（走到角落拨号）沈律师，我这边需要您两分钟。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_11"}],impulsePool:[{id:"imp_curse_l05b",text:"你们这店我记住了。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_11"}]},{id:"n_11",type:"dialogue",pressure:4,speaker:"npc_l05_woman",emotion:"cold",text:"（举起手机）他那种眼神，我见得多了。",next:"n_12"},{id:"n_12",type:"choice",pressure:4,prompt:"又有两个人举起了手机。店长往旁边挪了半步，装作没看见。",timer:8,timeoutOption:"opt_over_defend_l05",options:[{id:"opt_witness",text:"刚才旁边那位在做深蹲，全程都看着。能请他说一句吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_13"},{id:"opt_stay_calm",text:"眼神我不解释。我等监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:10,risk:-10},next:"n_13"},{id:"opt_over_defend_l05",text:"我什么眼神？你说清楚！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_13"},{id:"opt_leave_l05",text:"（拿包就走）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_13"},{id:"opt_breath_l05",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_12",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l05",text:"你他妈把话说清楚！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_13"},{id:"imp_shove_l05",text:"（一把打掉她举着的手机）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_13",type:"cutscene",pressure:2,script:`办公室，监控回放。

20:31:14 杠铃开始下沉，第七下没推上去。
20:31:19 杠铃压到胸口，她的手肘外翻。
20:31:21 你入画，掌心向上，托住杠铃杆。
20:31:23 杠铃回架。

林昭——不，是店长——把进度条往前拖了二十分钟。
20:09，同一个架子。一个男会员卡住，你走过去，一模一样的动作，一模一样的手位。`,next:"n_14"},{id:"n_14",type:"choice",pressure:2,prompt:"屏幕停在 20:09 那一帧。办公室里没人说话。",timer:8,timeoutOption:"opt_quiet_l05",options:[{id:"opt_request_written_l05",text:"结果出一份书面的。另外，她刚才那句话，也麻烦记一下。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_15"},{id:"opt_quiet_l05",text:"（点点头，回去把剩下两组做完）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:20,composure:10,risk:-5},next:"n_15"},{id:"opt_demand_l05",text:"她得当着所有人道歉。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_15"},{id:"opt_quit_gym",text:"（当场退卡走人）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-15,opinion:-10,composure:-5,risk:15},next:"n_15"}],impulsePool:[]},{id:"n_15",type:"cutscene",pressure:1,script:`三个月后，同一个架子。
又有人推不上去了，杠铃往下沉。

器械区有七八个人。所有人都看见了。
没有人过去。`,next:"__END__"}],Fc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一巴掌",script:`手机摔在地胶上，屏幕裂成蛛网。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L05_F"}],Y_={id:Pc,title:Rc,act:Ec,initState:Sc,cast:Ic,entryNode:Cc,lawyerCard:$c,satireTargets:Mc,nodes:Nc,endings:Fc},K_=Object.freeze(Object.defineProperty({__proto__:null,act:Ec,cast:Ic,default:Y_,endings:Fc,entryNode:Cc,id:Pc,initState:Sc,lawyerCard:$c,nodes:Nc,satireTargets:Mc,title:Rc},Symbol.toStringTag,{value:"Module"})),Dc="L06",Bc="第06关 · 三十八万八",Hc=2,Vc={evidence:30,opinion:50,composure:48,risk:20},Gc=["hero","npc_l06_girlfriend","npc_l06_mother","crowd"],Uc="n_01",jc="card_law_L06",Yc=["T1","T3"],Kc=[{id:"n_01",type:"cutscene",pressure:1,script:`女方家客厅。茶几上摆着切好的果盘，没人动。
谈了三年，今天是第一次两家坐下来说结婚的事。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l06_mother",emotion:"matter_of_fact",text:"三十八万八，房本加名，车全款。这是行情，不是我要的。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"你家全部积蓄四十一万，是你爸的退休金。你妈在旁边搓着手。",timer:8,timeoutOption:"opt_agree_first",options:[{id:"opt_write_down",text:"这几条我记一下。数字和条件都写清楚，省得以后有出入。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_detail",text:"彩礼这笔钱，婚后是归我们小家，还是归您？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_agree_first",text:"行，我想想办法。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-10,risk:20},next:"n_04"},{id:"opt_object",text:"这不是卖女儿吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l06_girlfriend",emotion:"hurt",text:"你是不是嫌我？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她眼睛红了。这三年她没跟你要过一件贵东西。",timer:8,timeoutOption:"opt_cave",options:[{id:"opt_equal_terms",text:"不嫌。钱我出，名我加。那也写一条：婚后共同还贷，离婚按出资分。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_separate",text:"我们俩的事，能不能我们俩先谈？",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_hurt_l06",text:"谈钱的时候，你怎么不说爱不爱。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_06"},{id:"opt_cave",text:"不嫌不嫌，我砸锅卖铁也给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20,addFlags:["L06_F_BEHAVIOR"]},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l06_mother",emotion:"cold",text:"共同还贷？那是你们小两口的事。我说的是彩礼，两码事。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"你妈的手在膝盖上攥紧了。她今天穿了压箱底那件衣服。",timer:8,timeoutOption:"opt_loan",options:[{id:"opt_parents_present",text:"这么大的事，得四个人一起谈。咱们再约个时间。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_show_numbers",text:"（打开手机）我家全部积蓄四十一万，是我爸的退休金。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:-5,risk:-5},next:"n_08"},{id:"opt_loan",text:"（在桌子底下点开了网贷 App）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:25},next:"n_08"},{id:"opt_walk",text:"（起身要走）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-20,composure:-5,risk:15},next:"n_08"},{id:"opt_ally_l06",text:"（去阳台拨号）沈律师，有个协议我想请您看一眼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l06_girlfriend",emotion:"cry",text:"你不给，就是不爱我。就这么简单。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"客厅安静得能听见挂钟。四个人都在等你开口。",timer:8,timeoutOption:"opt_beg_l06",options:[{id:"opt_refuse_frame_l06",text:"爱不爱不用钱证明。真要证明，那就两边都拿出来。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:5,risk:-10},next:"n_10"},{id:"opt_calm_l06",text:"（把刚才记下的条件，一条一条念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_10"},{id:"opt_beg_l06",text:"你别这么说……我真的尽力了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:-10,composure:-15,risk:15},next:"n_10"},{id:"opt_break_up",text:"那就算了吧。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:-5,opinion:-15,composure:-10,risk:10},next:"n_10"},{id:"opt_breath_l06",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l06",text:"你们这就是明码标价。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l06",text:"（推开挡在门口的岳母）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`你从包里抽出两页 A4，放在果盘旁边。

「三十八万八，我给。房本加名，我同意。」
「这上面写清楚了：钱的用途、归属，还有一条——如果两年内离婚，怎么算。」

她妈没有伸手去拿。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那两页纸在茶几上放了很久。谁也没碰。",timer:8,timeoutOption:"opt_wait",options:[{id:"opt_propose_agreement",text:"钱照给，一分不少。签个字，两家都踏实。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_wait",text:"那……我再想想。",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-5,opinion:-10,composure:-5,risk:15},next:"n_12"},{id:"opt_verbal_promise",text:"不签也行，就这么说定了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:20},next:"n_12"},{id:"opt_ultimatum",text:"签就结，不签就散。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`回去的路上，你妈一直没说话。
快到家的时候她说：「那两页纸，你写得挺好。」
又走了一段，她说：「我跟你爸商量过了，钱我们出。」

你说不用。
她说：「我知道不用。我就是想让你知道，我们出得起。」`,next:"__END__"}],qc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一下",script:`你推开她的时候，她的后腰撞在鞋柜角上。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L06_F"}],q_={id:Dc,title:Bc,act:Hc,initState:Vc,cast:Gc,entryNode:Uc,lawyerCard:jc,satireTargets:Yc,nodes:Kc,endings:qc},W_=Object.freeze(Object.defineProperty({__proto__:null,act:Hc,cast:Gc,default:q_,endings:qc,entryNode:Uc,id:Dc,initState:Vc,lawyerCard:jc,nodes:Kc,satireTargets:Yc,title:Bc},Symbol.toStringTag,{value:"Module"})),Wc="L07",zc="第07关 · 青春损失费",Xc=2,Jc={evidence:35,opinion:45,composure:45,risk:30},Zc=["hero","npc_l07_ex","shen_li"],Qc="n_01",ea="card_law_L07",ta=["T1","T4"],na=[{id:"n_01",type:"cutscene",pressure:1,script:`分手第九天。她约你在常去的那家咖啡馆。
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
沈骊说过：一条都不要删。`,next:"__END__"}],ia=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你抢了她的手机",script:`咖啡馆有监控，两个服务员看着。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L07_F"}],z_={id:Wc,title:zc,act:Xc,initState:Jc,cast:Zc,entryNode:Qc,lawyerCard:ea,satireTargets:ta,nodes:na,endings:ia},X_=Object.freeze(Object.defineProperty({__proto__:null,act:Xc,cast:Zc,default:z_,endings:ia,entryNode:Qc,id:Wc,initState:Jc,lawyerCard:ea,nodes:na,satireTargets:ta,title:zc},Symbol.toStringTag,{value:"Module"})),oa="L08",sa="第08关 · 孩子不是你的",ra=2,ca={evidence:25,opinion:40,composure:40,risk:25},aa=["hero","npc_l08_wife","npc_l08_mother","npc_l08_child","shen_li"],la="n_01",pa="card_law_L08",ua=["T1","T3"],da=[{id:"n_01",type:"cutscene",pressure:1,script:`念念三岁体检，血型 AB。
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

那三年是真的。这一点，报告上没写。`,next:"__END__"}],_a=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一推",script:`你推开挡在门口的她。她撞到门框，额角青了一块。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L08_F"}],J_={id:oa,title:sa,act:ra,initState:ca,cast:aa,entryNode:la,lawyerCard:pa,satireTargets:ua,nodes:da,endings:_a},Z_=Object.freeze(Object.defineProperty({__proto__:null,act:ra,cast:aa,default:J_,endings:_a,entryNode:la,id:oa,initState:ca,lawyerCard:pa,nodes:da,satireTargets:ua,title:sa},Symbol.toStringTag,{value:"Module"})),fa="L09",ga="第09关 · 冷静期",ma=2,va={evidence:40,opinion:45,composure:42,risk:35},ha=["hero","npc_l09_wife","npc_l09_cousin","shen_li"],xa="n_01",ka="card_law_L09",ya=["T2","T4"],Ta=[{id:"n_01",type:"cutscene",pressure:1,script:`民政局。离婚登记申请交上去了，三十天冷静期。
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
她只是没打算把「为难」这两个字算在自己头上。`,next:"__END__"}],La=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 玄关那一下",script:`抢行李箱的时候她摔在鞋柜上，手腕骨裂。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L09_F"}],Q_={id:fa,title:ga,act:ma,initState:va,cast:ha,entryNode:xa,lawyerCard:ka,satireTargets:ya,nodes:Ta,endings:La},ef=Object.freeze(Object.defineProperty({__proto__:null,act:ma,cast:ha,default:Q_,endings:La,entryNode:xa,id:fa,initState:va,lawyerCard:ka,nodes:Ta,satireTargets:ya,title:ga},Symbol.toStringTag,{value:"Module"})),Aa="L10",ba="第10关 · 二十米",wa=2,Oa={evidence:30,opinion:35,composure:38,risk:45},Pa=["hero","npc_l10_exwife","npc_l10_child","npc_l10_teacher","shen_li"],Ra="n_01",Ea="card_law_L10",Sa=["T1","T2"],Ia=[{id:"n_01",type:"cutscene",pressure:2,script:`抚养费返还的判决生效了。执行立案的第三天，
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
「但你自己得记着。」`,next:"__END__"}],Ca=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那扇门",script:`凌晨两点，你砸开了那扇门。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L10_F"}],tf={id:Aa,title:ba,act:wa,initState:Oa,cast:Pa,entryNode:Ra,lawyerCard:Ea,satireTargets:Sa,nodes:Ia,endings:Ca},nf=Object.freeze(Object.defineProperty({__proto__:null,act:wa,cast:Pa,default:tf,endings:Ca,entryNode:Ra,id:Aa,initState:Oa,lawyerCard:Ea,nodes:Ia,satireTargets:Sa,title:ba},Symbol.toStringTag,{value:"Module"})),$a="L11",Ma="第11关 · 面试第七问",Na=3,Fa={evidence:20,opinion:40,composure:45,risk:20},Da=["hero","npc_l11_hr","shen_li"],Ba="n_01",Ha="card_law_L11",Va=["T3","T5"],Ga=[{id:"n_01",type:"cutscene",pressure:1,script:`终面，第四十分钟。前六个问题答得都不错。
你上个月主动离的职，赔偿金撑到十一月。房贷每月一万四。

这是手上最后一个 offer。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"candid",text:"我直说吧。这个岗同分的话，我们优先女性。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"他说得很坦然，像在说食堂几点开饭。",timer:8,timeoutOption:"opt_accept_l11",options:[{id:"opt_record_l11",text:"（口袋里的手机按了录音）这个我理解，能再具体说说吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_written_l11",text:"如果最终没通过，能给一份书面反馈吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_04"},{id:"opt_accept_l11",text:"我理解，这也是应该的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:20},next:"n_04"},{id:"opt_angry_l11",text:"这不就是歧视吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"official",text:"集团今年有多元化指标。这个我们也是执行。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"他把简历合上了，往桌子中间推了推。",timer:8,timeoutOption:"opt_beg_l11",options:[{id:"opt_ask_policy_l11",text:"指标是公开的吗？能给我看一下相关制度文件？",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_neutral_l11",text:"明白了。那我按正常流程等结果。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-5},next:"n_06"},{id:"opt_beg_l11",text:"我下个月还有房贷……能不能通融一下？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15,risk:10},next:"n_06"},{id:"opt_lecture_l11",text:"多元化不是这么搞的。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-5,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"cooling",text:"制度文件是内部的。你要是接受不了，我们也理解。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室的空调声突然很清楚。",timer:8,timeoutOption:"opt_thank_leave",options:[{id:"opt_confirm_record",text:"我把今天聊的整理一下发您邮箱，您确认下有没有出入。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_thank_leave",text:"（正常道谢，起身离开）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_08"},{id:"opt_argue_l11b",text:"那我今天来面的是什么？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"opt_give_up",text:"（当场说算了，不用等结果了）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_08"},{id:"opt_ally_l11",text:"（出会议室拨号）沈律师，我刚录了一段东西。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l11",text:"你们这叫指标？这叫明抢。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_flip_l11",text:"（一把掀翻会议桌）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"official",text:"（三天后，邮件）感谢您的时间。经综合评估，暂不匹配。祝顺利。",next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"赔偿金还剩两个月。手机里那段录音四十一分钟。",timer:8,timeoutOption:"opt_swallow",options:[{id:"opt_labor_complaint",text:"（向劳动监察部门投诉，附录音和邮件）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_request_reason",text:"（回信，要求书面说明未录用的具体原因）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_post_online_l11",text:"（把录音发到职场社区，@这家公司）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-20,composure:5,risk:25,addFlags:["L11_F_BEHAVIOR"]},next:"n_10"},{id:"opt_swallow",text:"（算了。接着投别家）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10"},{id:"opt_breath_l11",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_flip_l11b",text:"（冲回那家公司，砸了前台）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊听完录音，倒回去又放了一遍第七分钟。

「『同分优先女性』——这句是他自己说的，说得很清楚。」
「后面那句『集团有多元化指标』更好，那是把个人行为说成公司政策。」

她合上笔记本。
「你要清楚一件事：真正的平权是把门槛拉平，不是换个人挡在门口。
　这两样长得像，但方向是反的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「你要什么结果？出气，还是解决问题。」",timer:8,timeoutOption:"opt_drop_l11",options:[{id:"opt_full_l11",text:"投诉，同时保留起诉的权利。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_complaint_only",text:"投诉就行，不想打官司。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-10},next:"n_12"},{id:"opt_drop_l11",text:"算了。这行就这么大，得罪不起。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"},{id:"opt_revenge_l11",text:"把录音发给他们竞争对手。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`投诉受理回执上编号很长。

两周后那家公司来了电话，语气客气了很多，说岗位还在，问你有没有兴趣再聊聊。

你说谢谢，不用了。
挂了电话，你把回执拍照存进云盘，文件名写的是日期。`,next:"__END__"}],Ua=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你掀了桌子。笔记本电脑砸在他小腿上。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L11_F"}],of={id:$a,title:Ma,act:Na,initState:Fa,cast:Da,entryNode:Ba,lawyerCard:Ha,satireTargets:Va,nodes:Ga,endings:Ua},sf=Object.freeze(Object.defineProperty({__proto__:null,act:Na,cast:Da,default:of,endings:Ua,entryNode:Ba,id:$a,initState:Fa,lawyerCard:Ha,nodes:Ga,satireTargets:Va,title:Ma},Symbol.toStringTag,{value:"Module"})),ja="L12",Ya="第12关 · 署名顺序",Ka=3,qa={evidence:45,opinion:42,composure:42,risk:25},Wa=["hero","npc_l12_colleague","npc_l12_boss","zhou_you"],za="n_01",Xa="card_law_L12",Ja=["T1","T3"],Za=[{id:"n_01",type:"cutscene",pressure:1,script:`项目做了十一个月。方案是你出的，架构是你搭的，上线那周你在公司睡了四天。
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
你说：「这行小字是你换来的。」`,next:"__END__"}],Qa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 摔的那一下",script:`笔记本砸在桌上，屏幕裂了，碎片弹到她手背上。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L12_F"}],rf={id:ja,title:Ya,act:Ka,initState:qa,cast:Wa,entryNode:za,lawyerCard:Xa,satireTargets:Ja,nodes:Za,endings:Qa},cf=Object.freeze(Object.defineProperty({__proto__:null,act:Ka,cast:Wa,default:rf,endings:Qa,entryNode:za,id:ja,initState:qa,lawyerCard:Xa,nodes:Za,satireTargets:Ja,title:Ya},Symbol.toStringTag,{value:"Module"})),el="L13",tl="第13关 · 团建那句玩笑",nl=3,il={evidence:25,opinion:35,composure:36,risk:40},ol=["hero","npc_l13_hr","npc_l13_complainant","zhou_you","shen_li"],sl="n_01",rl="card_law_L13",cl=["T1","T5"],al=[{id:"n_01",type:"cutscene",pressure:1,script:`三周前，部门团建，KTV 包厢。
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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L13_F"}],af={id:el,title:tl,act:nl,initState:il,cast:ol,entryNode:sl,lawyerCard:rl,satireTargets:cl,nodes:al,endings:ll},lf=Object.freeze(Object.defineProperty({__proto__:null,act:nl,cast:ol,default:af,endings:ll,entryNode:sl,id:el,initState:il,lawyerCard:rl,nodes:al,satireTargets:cl,title:tl},Symbol.toStringTag,{value:"Module"})),pl="L14",ul="第14关 · 匿名举报",dl=3,_l={evidence:30,opinion:35,composure:34,risk:45},fl=["hero","npc_l14_hr","npc_l14_director","zhou_you","shen_li"],gl="n_01",ml="card_law_L14",vl=["T1","T5"],hl=[{id:"n_01",type:"cutscene",pressure:2,script:`晋升公示第七天，最后一天。
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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L14_F"}],pf={id:pl,title:ul,act:dl,initState:_l,cast:fl,entryNode:gl,lawyerCard:ml,satireTargets:vl,nodes:hl,endings:xl},uf=Object.freeze(Object.defineProperty({__proto__:null,act:dl,cast:fl,default:pf,endings:xl,entryNode:gl,id:pl,initState:_l,lawyerCard:ml,nodes:hl,satireTargets:vl,title:ul},Symbol.toStringTag,{value:"Module"})),kl="L15",yl="第15关 · 最后一张牌",Tl=3,Ll={evidence:40,opinion:40,composure:32,risk:50},Al=["hero","npc_l15_broker","npc_l15_hr","shen_li"],bl="n_01",wl="card_law_L15",Ol=["T4"],Pl=[{id:"n_01",type:"cutscene",pressure:2,script:`裁员名单下来了，你在上面。
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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L15_F"}],df={id:kl,title:yl,act:Tl,initState:Ll,cast:Al,entryNode:bl,lawyerCard:wl,satireTargets:Ol,nodes:Pl,endings:Rl},_f=Object.freeze(Object.defineProperty({__proto__:null,act:Tl,cast:Al,default:df,endings:Rl,entryNode:bl,id:kl,initState:Ll,lawyerCard:wl,nodes:Pl,satireTargets:Ol,title:yl},Symbol.toStringTag,{value:"Module"})),El="L16",Sl="第16关 · 三十秒剪辑",Il=4,Cl={evidence:35,opinion:20,composure:40,risk:40},$l=["hero","npc_l16_account","shen_li","zhou_you","crowd"],Ml="n_01",Nl="card_law_L16",Fl=["T2","T4"],Dl=[{id:"n_01",type:"cutscene",pressure:3,script:`周一早上七点，你在地铁上刷到自己。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L16_F"}],ff={id:El,title:Sl,act:Il,initState:Cl,cast:$l,entryNode:Ml,lawyerCard:Nl,satireTargets:Fl,nodes:Dl,endings:Bl},gf=Object.freeze(Object.defineProperty({__proto__:null,act:Il,cast:$l,default:ff,endings:Bl,entryNode:Ml,id:El,initState:Cl,lawyerCard:Nl,nodes:Dl,satireTargets:Fl,title:Sl},Symbol.toStringTag,{value:"Module"})),Hl="L17",Vl="第17关 · 人肉",Gl=4,Ul={evidence:40,opinion:10,composure:28,risk:45},jl=["hero","npc_l17_father","npc_l17_hr","shen_li","crowd"],Yl="n_01",Kl="card_law_L17",ql=["T2","T4"],Wl=[{id:"n_01",type:"cutscene",pressure:4,script:`周四凌晨两点，一个文档在群里传开了。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L17_F"}],mf={id:Hl,title:Vl,act:Gl,initState:Ul,cast:jl,entryNode:Yl,lawyerCard:Kl,satireTargets:ql,nodes:Wl,endings:zl},vf=Object.freeze(Object.defineProperty({__proto__:null,act:Gl,cast:jl,default:mf,endings:zl,entryNode:Yl,id:Hl,initState:Ul,lawyerCard:Kl,nodes:Wl,satireTargets:ql,title:Vl},Symbol.toStringTag,{value:"Module"})),Xl="L18",Jl="第18关 · 直播间的生意",Zl=4,Ql={evidence:55,opinion:30,composure:38,risk:35},ep=["hero","npc_l18_streamer","shen_li","crowd"],tp="n_01",np="card_law_L18",ip=["T4"],op=[{id:"n_01",type:"cutscene",pressure:2,script:`一个百万粉的账号发来连线邀请。
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
「不过没关系。这十七个后面只有一个人。」`,next:"__END__"}],sp=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 直播事故",script:`你在连线里失控了，摔了东西，骂了整整四十秒。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L18_F"}],hf={id:Xl,title:Jl,act:Zl,initState:Ql,cast:ep,entryNode:tp,lawyerCard:np,satireTargets:ip,nodes:op,endings:sp},xf=Object.freeze(Object.defineProperty({__proto__:null,act:Zl,cast:ep,default:hf,endings:sp,entryNode:tp,id:Xl,initState:Ql,lawyerCard:np,nodes:op,satireTargets:ip,title:Jl},Symbol.toStringTag,{value:"Module"})),rp="L19",cp="第19关 · 各执一词",ap=4,lp={evidence:60,opinion:45,composure:42,risk:30},pp=["hero","npc_l19_moderator","npc_l19_pr","shen_li"],up="n_01",dp="card_law_L19",_p=["T5"],fp=[{id:"n_01",type:"cutscene",pressure:2,script:`平台申诉结果：不予处理。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L19_F"}],kf={id:rp,title:cp,act:ap,initState:lp,cast:pp,entryNode:up,lawyerCard:dp,satireTargets:_p,nodes:fp,endings:gp},yf=Object.freeze(Object.defineProperty({__proto__:null,act:ap,cast:pp,default:kf,endings:gp,entryNode:up,id:rp,initState:lp,lawyerCard:dp,nodes:fp,satireTargets:_p,title:cp},Symbol.toStringTag,{value:"Module"})),mp="L20",vp="第20关 · 对簿",hp=4,xp={evidence:60,opinion:50,composure:60,risk:30},kp=["hero","he_song","zhou_you","shen_li","crowd"],yp="n_01",Tp="card_law_L20",Lp=["T2","T4","T5"],Ap=[{id:"n_01",type:"cutscene",pressure:3,script:`开庭。第三法庭，旁听席坐满了。

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

划掉了。`,next:"__END__"}],bp=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 最后一步",script:`你越过栏杆冲了过去。法警拦下你的时候，你已经碰到了他。

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

划掉了。`,unlock:"card_L20_F"}],Tf={id:mp,title:vp,act:hp,initState:xp,cast:kp,entryNode:yp,lawyerCard:Tp,satireTargets:Lp,nodes:Ap,endings:bp},Lf=Object.freeze(Object.defineProperty({__proto__:null,act:hp,cast:kp,default:Tf,endings:bp,entryNode:yp,id:mp,initState:xp,lawyerCard:Tp,nodes:Ap,satireTargets:Lp,title:vp},Symbol.toStringTag,{value:"Module"})),Af=Object.assign({"../../content/levels/L01.json":D_,"../../content/levels/L02.json":H_,"../../content/levels/L03.json":G_,"../../content/levels/L04.json":j_,"../../content/levels/L05.json":K_,"../../content/levels/L06.json":W_,"../../content/levels/L07.json":X_,"../../content/levels/L08.json":Z_,"../../content/levels/L09.json":ef,"../../content/levels/L10.json":nf,"../../content/levels/L11.json":sf,"../../content/levels/L12.json":cf,"../../content/levels/L13.json":lf,"../../content/levels/L14.json":uf,"../../content/levels/L15.json":_f,"../../content/levels/L16.json":gf,"../../content/levels/L17.json":vf,"../../content/levels/L18.json":xf,"../../content/levels/L19.json":yf,"../../content/levels/L20.json":Lf}),Tn=Object.values(Af).map(e=>e.default).sort((e,t)=>e.id.localeCompare(t.id)),bf="破局实录",wf="开发预览 · M3 前置切片",Of={evidence:"证据",opinion:"舆论",composure:"情绪",risk:"风险"},Pf={hero:"陈屿",shen_li:"沈骊",officer_lin:"林昭",zhou_you:"周攸",he_song:"贺松",crowd:"围观者",narrator:"",npc_l01_woman:"红衣女子",npc_l02_woman:"住户女子",npc_l03_woman:"路人女子",npc_l03_daughter:"念念",npc_l04_woman:"报警人",npc_l05_woman:"女子",npc_l05_manager:"值班经理",npc_l05_witness:"目击大哥",npc_l06_girlfriend:"前女友",npc_l06_mother:"她母亲",npc_l07_ex:"前女友",npc_l08_wife:"妻子",npc_l08_mother:"岳母",npc_l08_child:"孩子",npc_l09_wife:"妻子",npc_l09_cousin:"表哥",npc_l10_exwife:"前妻",npc_l10_child:"女儿",npc_l10_teacher:"班主任",npc_l11_hr:"HR",npc_l12_colleague:"同事",npc_l12_boss:"部门老板",npc_l13_hr:"HR",npc_l13_complainant:"投诉人",npc_l14_hr:"HR 总监",npc_l14_director:"总监",npc_l15_broker:"中介",npc_l15_hr:"HR",npc_l16_account:"商务",npc_l17_father:"父亲",npc_l17_hr:"HR",npc_l18_streamer:"主播",npc_l19_moderator:"版务",npc_l19_pr:"公关",npc_l20_judge:"审判长",npc_l20_lawyer:"对方律师"},Rf={1:"第一幕 · 流量即真相",2:"第二幕 · 亲密关系的账",3:"第三幕 · 职场的规则",4:"第四幕 · 收网"},Ef={tapToContinue:"点击继续",secondsUnit:"s",endingTitle:"结局",restart:"再玩一次",nextLevel:"下一关",levelSelect:"选择关卡",lockedLevel:"未解锁",rankNames:{S:"名场面",A:"稳住了",B:"有惊无险",C:"勉强收场",F:"翻车"},finalMeters:"最终仪表",disclaimer:"本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。",progressLabel:"进度",soundToggle:"M",studyIntro:"测试开始前\\n请输入现场编号（如 P01）\\n\\n然后独立游玩前五关\\n过程中不会有任何提示\\n做完自动出现数据回收",studyPidPlaceholder:"现场编号",studyStart:"开始",studyDoneTitle:"第一幕完成",studyCopy:"导出数据（JSON）",studySummaryHeader:"参与者 {p} · {n} 次游玩",studySummaryLine:"{lv}: {rank}「{title}」 用时{s}秒 抉择{c}次 重玩{r}",stanceLow:"稳住",stanceHigh:"顶回去",pileALabel:"这条",pileBLabel:"那条",pileListHint:"选一个",swipeHint:"左右滑动选择 · 点按也可以",settlePhase1:"结算中",settleStampS:"教科书式破局",settleStampA:"稳稳落地",settleStampB:"有惊无险",settleStampC:"伤敌自伤",settleStampF:"满盘皆输",settleMetersTitle:"终局面",settleReplay:"本关重打",settleNext:"下一关",lawyerCardTitle:"【沈骊说】案情法律与应对实务复盘",lawyerCardBadge:"核心普法",lawyerCardBtn:"查看沈律师专业点评与法条依据",lawyerModalHeader:"沈骊律师 · 案情实务备忘录",lawyerModalRisk:"合规风险等级",lawyerModalClose:"已掌握破局要点",appTagline:"你不需要嘴更毒，你只需要比对手更懂规则",startAdventure:"开始破局",continueAdventure:"继续破局",recapTitle:"关键因果复盘",costComposure:"耗心力",gainBreath:"平复呼吸",dangerImpulse:"冲动失控风险",containsOptions:"内含 {n} 项应对",btnLog:"笔录",btnAuto:"自动",btnSkip:"快进",btnHide:"隐藏",backlogTitle:"案情对话笔录",backlogEmpty:"暂无历史笔录",tapToRestore:"点击任意处恢复界面",autoPlaying:"自动播放中",finaleTrue:"真结局 · 收网",finaleWin:"终局 · 胜诉",finaleCostly:"终局 · 惨胜"},Sf={L01:{label:"地铁三号线",hue:205,motif:"subway"},L02:{label:"住宅电梯",hue:220,motif:"elevator"},L03:{label:"商场中庭",hue:35,motif:"mall"},L04:{label:"深夜街道",hue:235,motif:"street"},L05:{label:"健身房",hue:15,motif:"gym"},L06:{label:"两家饭桌",hue:28,motif:"table"},L07:{label:"出租屋",hue:200,motif:"room"},L08:{label:"客厅",hue:40,motif:"room"},L09:{label:"民政局外",hue:210,motif:"office"},L10:{label:"学校门口",hue:45,motif:"street"},L11:{label:"面试间",hue:215,motif:"office"},L12:{label:"开放工位",hue:210,motif:"office"},L13:{label:"会议室",hue:220,motif:"office"},L14:{label:"总监办公室",hue:225,motif:"office"},L15:{label:"写字楼楼下",hue:200,motif:"street"},L16:{label:"剪辑室",hue:260,motif:"studio"},L17:{label:"家中",hue:30,motif:"room"},L18:{label:"直播间后台",hue:320,motif:"studio"},L19:{label:"平台工单页",hue:190,motif:"office"},L20:{label:"法院走廊",hue:210,motif:"court"}},If={calm:["前排","吃瓜","蹲后续","录下来了","别急，等反转","让子弹飞一会儿"],tense:["什么情况？?","有人认识吗","这女的厉害","这男的稳住啊","报警了吗","快报警","别拍了先帮个忙啊","主播别切","全网都在看"],hot:["热搜第一预定","已经录屏了","传到群里了","反转了反转了","坐等打脸","这瓜保熟","直播间炸了","三分钟了还在吵"]},Cf={hero:210,shen_li:280,officer_lin:195,zhou_you:150,he_song:350,npc_l01_woman:350,npc_l02_woman:330,npc_l03_woman:320,npc_l03_daughter:45,npc_l04_woman:160,npc_l05_woman:340,npc_l05_manager:30,npc_l05_witness:200,npc_l06_girlfriend:315,npc_l06_mother:280,npc_l07_ex:300,npc_l08_wife:330,npc_l08_mother:275,npc_l08_child:50,npc_l09_wife:320,npc_l09_cousin:25,npc_l10_exwife:310,npc_l10_child:55,npc_l10_teacher:165,npc_l11_hr:220,npc_l12_colleague:145,npc_l12_boss:25,npc_l13_hr:215,npc_l13_complainant:345,npc_l14_hr:225,npc_l14_director:20,npc_l15_broker:40,npc_l15_hr:218,npc_l16_account:35,npc_l17_father:205,npc_l17_hr:222,npc_l18_streamer:325,npc_l19_moderator:195,npc_l19_pr:285,crowd:0},$f={appTitle:bf,appSub:wf,meters:Of,speakerNames:Pf,actNames:Rf,ui:Ef,scenes:Sf,danmaku:If,speakerHues:Cf},de=$f;function Bt(e){const t=de.ui[e];return typeof t=="string"?t:""}function ho(e){return de.speakerNames[e]??e}function ei(e){return de.speakerHues[e]??220}function wp(e){return de.scenes[e]??{label:"",hue:210,motif:"room"}}const Mf={class:"hud"},Nf={class:"label"},Ff={class:"bar"},Df={class:"val-wrap"},Bf={class:"num"},Hf=nt({__name:"MeterHud",props:{state:{}},setup(e){const t=e;let n=0;const i=Q({evidence:null,opinion:null,composure:null,risk:null}),o={};Oe(()=>({...t.state}),(r,c)=>{if(!c)return;const a=["evidence","opinion","composure","risk"];for(const l of a){const p=r[l]-c[l];if(p!==0){n+=1;const _=l==="risk"?p<0:p>0;i.value[l]={text:(p>0?"+":"")+p,dir:_?"pos":"neg",key:n},o[l]!==void 0&&clearTimeout(o[l]),o[l]=setTimeout(()=>{i.value[l]=null},1400)}}});const s=ne(()=>[{k:"evidence",kind:"good"},{k:"opinion",kind:"good"},{k:"composure",kind:"good"},{k:"risk",kind:"bad"}].map(({k:c,kind:a})=>({key:c,label:de.meters[c],value:t.state[c],kind:a})));return(r,c)=>(E(),N("div",Mf,[(E(!0),N(me,null,Mt(s.value,a=>(E(),N("div",{key:a.key,class:fe(["meter",[a.key,a.kind,{"is-tense":a.key==="composure"&&a.value<30}]])},[g("span",Nf,C(a.label),1),g("div",Ff,[g("div",{class:"fill",style:De({width:Math.min(100,Math.max(0,a.value))+"%"})},null,4)]),g("div",Df,[g("span",Bf,C(a.value),1),xe(Sd,{name:"float"},{default:po(()=>[i.value[a.key]?(E(),N("span",{key:i.value[a.key].key,class:fe(["delta",i.value[a.key].dir])},C(i.value[a.key].text),3)):ce("",!0)]),_:2},1024)])],2))),128))]))}}),gt=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},Vf=gt(Hf,[["__scopeId","data-v-08cce053"]]),Gf={key:0,class:"nameplate"},Uf={class:"np-name"},jf={class:"textbox"},Yf={class:"text"},Kf={key:0,class:"next-indicator"},qf=nt({__name:"StoryBox",props:{speaker:{},text:{},kind:{},autoActive:{type:Boolean,default:!1}},emits:["advance","openLog","toggleAuto","skip","hideUi"],setup(e,{emit:t}){const n=e,i=t,o=de.ui,s=ne(()=>n.speaker?ho(n.speaker):""),r=ne(()=>n.speaker?ei(n.speaker):220),c=Q(""),a=ne(()=>c.value.length>=n.text.length);let l;function p(m){if(c.value="",l!==void 0&&clearInterval(l),typeof setInterval!="function"){c.value=m;return}let v=0;l=setInterval(()=>{v+=2,c.value=m.slice(0,v),v>=m.length&&l!==void 0&&(clearInterval(l),l=void 0)},26)}Oe(()=>n.text,m=>p(m),{immediate:!0}),Ft(()=>{l!==void 0&&clearInterval(l)});function _(){a.value?i("advance"):(c.value=n.text,l!==void 0&&(clearInterval(l),l=void 0))}return(m,v)=>(E(),N("div",{class:fe(["gal-message-window",e.kind]),style:De({"--h":r.value}),onClick:_},[e.kind==="dialogue"&&s.value?(E(),N("div",Gf,[v[5]||(v[5]=g("span",{class:"np-dot"},null,-1)),g("span",Uf,C(s.value),1)])):ce("",!0),g("div",jf,[g("p",Yf,C(c.value),1),a.value?(E(),N("span",Kf,"▼")):ce("",!0)]),g("div",{class:"quick-bar",onClick:v[4]||(v[4]=ct(()=>{},["stop"]))},[g("button",{class:"qb-btn",onClick:v[0]||(v[0]=D=>m.$emit("openLog"))},[v[6]||(v[6]=g("i",{class:"qb-icon"},"📜",-1)),Ut(" "+C(T(o).btnLog),1)]),g("button",{class:fe(["qb-btn",{active:e.autoActive}]),onClick:v[1]||(v[1]=D=>m.$emit("toggleAuto"))},[v[7]||(v[7]=g("i",{class:"qb-icon"},"⚡",-1)),Ut(" "+C(T(o).btnAuto),1)],2),g("button",{class:"qb-btn",onClick:v[2]||(v[2]=D=>m.$emit("skip"))},[v[8]||(v[8]=g("i",{class:"qb-icon"},"⏩",-1)),Ut(" "+C(T(o).btnSkip),1)]),g("button",{class:"qb-btn",onClick:v[3]||(v[3]=D=>m.$emit("hideUi"))},[v[9]||(v[9]=g("i",{class:"qb-icon"},"👁",-1)),Ut(" "+C(T(o).btnHide),1)])])],6))}}),ds=gt(qf,[["__scopeId","data-v-3c51f43a"]]),Wf={class:"choice-layer"},zf={class:"prompt-row"},Xf={key:0,class:"scene-prompt"},Jf=["disabled","onClick"],Zf={class:"opt-text"},Qf={key:0,class:"opt-tag breath"},e0={key:1,class:"opt-tag warn"},t0={key:2,class:"opt-tag cost"},n0=["aria-label"],i0=nt({__name:"ChoiceLayer",props:{options:{},timer:{},timeoutOptionId:{},prompt:{}},emits:["choose","openLog"],setup(e,{expose:t,emit:n}){const i=e,o=n,s=de.ui,r=ne(()=>i.prompt??""),c=Q(!1);Oe(()=>i.options,j=>{var ee,b,w;c.value=!1,String(j.__round??"")+j.length+(((ee=j[0])==null?void 0:ee.id)??""),(w=(b=W.value)==null?void 0:b.scrollTo)==null||w.call(b,{top:0})});function a(j){c.value||(c.value=!0,$(),o("choose",j.id))}const l=Q(i.timer);let p,_=!1,m;function v(){if(!_&&(l.value-=1,l.value<=0&&($(),!c.value))){c.value=!0;const j=i.options.find(ee=>ee.id===i.timeoutOptionId);j!==void 0&&o("choose",j.id)}}function D(){$(),typeof setInterval=="function"&&(p=setInterval(v,1e3))}function $(){p!==void 0&&(clearInterval(p),p=void 0)}function q(){_=!0}function V(){_=!1}t({pause:q,resume:V}),Pn(()=>{D(),m=()=>{_=document.hidden},document.addEventListener("visibilitychange",m)}),Ft(()=>{$(),document.removeEventListener("visibilitychange",m)}),Oe(()=>i.timer,j=>{l.value=j});function S(j){return j.unlockBelow!==void 0||j.tag==="PHYSICAL"}function M(j){return j.tag==="BREATH"}function R(j){const ee=j.initiative??0;return ee>=2?ee-1:0}const W=Q(null);return(j,ee)=>(E(),N("div",Wf,[g("div",{ref_key:"listEl",ref:W,class:"scroll"},[g("div",zf,[r.value?(E(),N("p",Xf,C(r.value),1)):ce("",!0),g("button",{type:"button",class:"choice-log-btn",onClick:ee[0]||(ee[0]=b=>j.$emit("openLog"))}," 📜 "+C(T(s).btnLog),1)]),(E(!0),N(me,null,Mt(e.options,b=>(E(),N("button",{key:b.id,type:"button",class:fe(["opt",{impulse:S(b),breath:M(b)}]),disabled:c.value,onClick:w=>a(b)},[g("span",Zf,C(b.text),1),M(b)?(E(),N("span",Qf,"🧘 "+C(T(s).gainBreath),1)):S(b)?(E(),N("span",e0,"⚠️ "+C(T(s).dangerImpulse),1)):R(b)>0?(E(),N("span",t0,"⚡️ "+C(T(s).costComposure)+" "+C(R(b)),1)):ce("",!0)],10,Jf))),128))],512),g("div",{class:fe(["time",{panic:l.value<=4}]),role:"timer","aria-label":`剩余 ${l.value} 秒`},[g("span",null,C(l.value),1)],10,n0)]))}}),o0=gt(i0,[["__scopeId","data-v-4b4cbee9"]]),s0=""+new URL("rank_A-Buk7knaJ.mp4",import.meta.url).href,r0=""+new URL("rank_B-MEHXL8TX.mp4",import.meta.url).href,c0=""+new URL("rank_C-DOkhQSQI.mp4",import.meta.url).href,a0=""+new URL("rank_F-DPh74h1I.mp4",import.meta.url).href,l0=""+new URL("rank_S-BXJbetyP.mp4",import.meta.url).href,p0=[{id:"card_law_L01",level:"L01",body:`【沈骊说】

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

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]}],u0=["data-rank"],d0=["src"],_0={class:"stamp"},f0={key:0,class:"finale-badge"},g0={class:"word"},m0={class:"title"},v0={class:"script"},h0={class:"lb-left"},x0={class:"lb-badge"},k0={class:"lb-title"},y0={class:"lb-btn"},T0={class:"meters-card"},L0={class:"mc-title"},A0={class:"bars"},b0={class:"lbl"},w0={class:"track"},O0={class:"num"},P0={class:"disclaimer"},R0={class:"acts"},E0={class:"ld-head"},S0={class:"ld-title-group"},I0={class:"ld-badge"},C0={class:"ld-title"},$0={class:"ld-body"},M0={class:"ld-text"},N0={class:"ld-foot"},F0={class:"ld-risk"},D0={class:"ld-rk-lbl"},B0=nt({__name:"EndingCard",props:{ending:{},state:{},levelId:{default:""},finaleTier:{default:null}},emits:["restart","next"],setup(e,{emit:t}){const n=e,i=Q(1),o=Q(!1),s=Q(!1),r=de.ui,c=ne(()=>r["settleStamp"+n.ending.rank]??""),a=ne(()=>({TRUE:r.finaleTrue??"",WIN:r.finaleWin??"",COSTLY:r.finaleCostly??""})),l=ne(()=>n.levelId==="L20"&&n.finaleTier!==null?a.value[n.finaleTier]??"":""),p=ne(()=>{const S=Object.entries(Object.assign({"../../../content/art/endings/rank_A.mp4":s0,"../../../content/art/endings/rank_B.mp4":r0,"../../../content/art/endings/rank_C.mp4":c0,"../../../content/art/endings/rank_F.mp4":a0,"../../../content/art/endings/rank_S.mp4":l0})).find(([M])=>M.endsWith("/rank_"+n.ending.rank+".mp4"));return(S==null?void 0:S[1])??""}),_=ne(()=>{const V=p0;if(n.levelId){const S=V.find(M=>M.level===n.levelId);if(S!==void 0)return S}return V.find(S=>n.ending.id.includes(S.level))??V[0]});let m,v;Pn(()=>{if(typeof setTimeout!="function"){i.value=3;return}m=setTimeout(()=>{i.value=2},1200),v=setTimeout(()=>{i.value=3},2600)}),Ft(()=>{m!==void 0&&clearTimeout(m),v!==void 0&&clearTimeout(v)});function D(){m!==void 0&&(clearTimeout(m),m=void 0),v!==void 0&&(clearTimeout(v),v=void 0),i.value=3}function $(V){V.stopPropagation(),s.value=!0}function q(V){V.stopPropagation(),s.value=!1}return(V,S)=>(E(),N("div",{class:"cinema","data-rank":e.ending.rank,onClick:D},[p.value?(E(),N("video",{key:0,class:"bgvid",src:p.value,autoplay:"",muted:"",loop:"",playsinline:"",onCanplay:S[0]||(S[0]=M=>o.value=!0)},null,40,d0)):ce("",!0),g("div",{class:fe(["dim",{deeper:i.value>=2}])},null,2),g("div",{class:fe(["stamp-wrap",{show:i.value>=2}])},[g("div",_0,[l.value?(E(),N("span",f0,C(l.value),1)):ce("",!0),g("span",g0,C(c.value),1)])],2),g("div",{class:fe(["sheet",{show:i.value>=3}])},[g("h2",m0,C(e.ending.title),1),g("p",v0,C(e.ending.script),1),_.value?(E(),N("div",{key:0,class:"lawyer-bar",onClick:ct($,["stop"])},[g("div",h0,[g("span",x0,C(T(r).lawyerCardBadge),1),g("span",k0,C(T(r).lawyerCardTitle),1)]),g("span",y0,[Ut(C(T(r).lawyerCardBtn)+" ",1),S[4]||(S[4]=g("i",{class:"arr"},"›",-1))])])):ce("",!0),g("div",T0,[g("div",L0,C(T(r).settleMetersTitle),1),g("div",A0,[(E(),N(me,null,Mt(["evidence","opinion","composure","risk"],M=>g("div",{key:M,class:"bar"},[g("span",b0,C(T(de).meters[M]),1),g("span",w0,[g("i",{style:De({width:Math.min(100,e.state[M])+"%"}),class:fe(M)},null,6)]),g("span",O0,C(e.state[M]),1)])),64))])]),g("p",P0,C(T(de).ui.disclaimer),1),g("div",R0,[g("button",{onClick:S[1]||(S[1]=ct(M=>V.$emit("restart"),["stop"]))},C(T(r).settleReplay),1),g("button",{class:"primary",onClick:S[2]||(S[2]=ct(M=>V.$emit("next"),["stop"]))},C(T(r).settleNext),1)])],2),s.value&&_.value?(E(),N("div",{key:1,class:"lawyer-mask",onClick:ct(q,["stop"])},[g("div",{class:"lawyer-drawer",onClick:S[3]||(S[3]=ct(()=>{},["stop"]))},[g("header",E0,[g("div",S0,[g("span",I0,C(T(r).lawyerCardBadge),1),g("span",C0,C(T(r).lawyerModalHeader),1)]),g("button",{class:"ld-close",onClick:ct(q,["stop"])},"✕")]),g("div",$0,[g("div",M0,C(_.value.body),1)]),g("footer",N0,[g("div",F0,[g("span",D0,C(T(r).lawyerModalRisk)+":",1),g("span",{class:fe(["ld-rk-val",_.value.riskLevel])},C(_.value.riskLevel??"MEDIUM"),3)]),g("button",{class:"ld-ok",onClick:ct(q,["stop"])},C(T(r).lawyerModalClose),1)])])])):ce("",!0)],8,u0))}}),H0=gt(B0,[["__scopeId","data-v-51122b07"]]),V0={class:"select"},G0={class:"sel-header"},U0={class:"header-top"},j0={class:"app-title"},Y0={class:"tagline"},K0={class:"hero-cta-wrap"},q0={class:"cta-left"},W0={class:"cta-txt-group"},z0={class:"cta-action"},X0={class:"cta-sub"},J0={class:"list"},Z0={key:0,class:"act-title"},Q0={class:"act-levels"},eg=["onClick"],tg={class:"tid"},ng={class:"ttitle"},ig={class:"foot"},og=nt({__name:"LevelSelect",props:{levels:{},best:{}},emits:["pick"],setup(e){const t=e,n=de.ui,i=c=>c===void 0?"":"r"+c,o=ne(()=>{var c;for(const a of t.levels)if(!t.best[a.id])return a.id;return((c=t.levels[0])==null?void 0:c.id)??"L01"}),s=ne(()=>Object.keys(t.best).length>0),r=ne(()=>{const c={};for(const a of t.levels)(c[a.act]??(c[a.act]=[])).push(a);return Object.entries(c).map(([a,l])=>({act:Number(a),name:de.actNames[a]??"",levels:l}))});return(c,a)=>(E(),N("div",V0,[g("header",G0,[g("div",U0,[g("h1",j0,C(T(de).appTitle),1),a[1]||(a[1]=g("span",{class:"version-tag"},"M3 切片",-1))]),g("p",Y0,C(T(n).appTagline),1),g("div",K0,[g("button",{class:"hero-cta",onClick:a[0]||(a[0]=l=>c.$emit("pick",o.value))},[g("div",q0,[a[2]||(a[2]=g("span",{class:"play-btn"},"▶",-1)),g("div",W0,[g("span",z0,C(s.value?T(n).continueAdventure:T(n).startAdventure),1),g("span",X0,"进入 "+C(o.value),1)])]),a[3]||(a[3]=g("span",{class:"cta-arrow"},"›",-1))])])]),g("div",J0,[(E(!0),N(me,null,Mt(r.value,l=>(E(),N("div",{key:l.act,class:"act-section"},[l.name?(E(),N("div",Z0,C(l.name),1)):ce("",!0),g("div",Q0,[(E(!0),N(me,null,Mt(l.levels,p=>(E(),N("button",{key:p.id,class:"level-btn",onClick:_=>c.$emit("pick",p.id)},[g("span",tg,C(p.id),1),g("span",ng,C(p.title),1),g("span",{class:fe(["badge",i(e.best[p.id])])},C(e.best[p.id]??"·"),3)],8,eg))),128))])]))),128))]),g("footer",ig,C(T(de).ui.disclaimer),1)]))}}),sg=gt(og,[["__scopeId","data-v-e1c5f01f"]]),rg=""+new URL("L01-BJmHDizO.png",import.meta.url).href,cg=""+new URL("L02-Cgrrfiit.png",import.meta.url).href,ag=""+new URL("L03-Dhb-92UY.png",import.meta.url).href,lg=""+new URL("L04-Dxn6iz_R.png",import.meta.url).href,pg=""+new URL("L05-BCX3gD5-.png",import.meta.url).href,ug=""+new URL("L06-DPfiJfY4.png",import.meta.url).href,dg=""+new URL("L07-DgpRWPjk.png",import.meta.url).href,_g=""+new URL("L08-HGz_P2cJ.png",import.meta.url).href,fg=""+new URL("L09-VpgvEvrb.png",import.meta.url).href,gg=""+new URL("L10-D_mOdB4H.png",import.meta.url).href,mg=""+new URL("L11-BXLJJDeb.png",import.meta.url).href,vg=""+new URL("L12-DemYAPsM.png",import.meta.url).href,hg=""+new URL("L13-Dn-DLBYO.png",import.meta.url).href,xg=""+new URL("L14-BLDD-heh.png",import.meta.url).href,kg=""+new URL("L15-BVYsTDdi.png",import.meta.url).href,yg=""+new URL("L16-kHk4EBk-.png",import.meta.url).href,Tg=""+new URL("L17-BomGMZbR.png",import.meta.url).href,Lg=""+new URL("L18-B2bLjWIc.png",import.meta.url).href,Ag=""+new URL("L19-DHpwxvAB.png",import.meta.url).href,bg=""+new URL("L20-CyAYX9HG.png",import.meta.url).href,wg=["src"],Og={key:1,class:"photo-shade"},Pg={key:2,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Rg={key:3,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Eg={key:4,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Sg={key:5,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Ig={key:6,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Cg={key:7,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},$g={class:"tag"},Mg=nt({__name:"SceneBackdrop",props:{levelId:{},pressure:{}},setup(e){const t=e,n=Object.assign({"../../../content/art/scenes/L01.png":rg,"../../../content/art/scenes/L02.png":cg,"../../../content/art/scenes/L03.png":ag,"../../../content/art/scenes/L04.png":lg,"../../../content/art/scenes/L05.png":pg,"../../../content/art/scenes/L06.png":ug,"../../../content/art/scenes/L07.png":dg,"../../../content/art/scenes/L08.png":_g,"../../../content/art/scenes/L09.png":fg,"../../../content/art/scenes/L10.png":gg,"../../../content/art/scenes/L11.png":mg,"../../../content/art/scenes/L12.png":vg,"../../../content/art/scenes/L13.png":hg,"../../../content/art/scenes/L14.png":xg,"../../../content/art/scenes/L15.png":kg,"../../../content/art/scenes/L16.png":yg,"../../../content/art/scenes/L17.png":Tg,"../../../content/art/scenes/L18.png":Lg,"../../../content/art/scenes/L19.png":Ag,"../../../content/art/scenes/L20.png":bg}),i=Q("");Oe(()=>t.levelId,c=>{const a=Object.entries(n).find(([l])=>l.endsWith("/"+c+".png"));i.value=a!==void 0?a[1]:""},{immediate:!0});const o=ne(()=>wp(t.levelId)),s=ne(()=>{const c=o.value.hue,a=8+Math.round(t.pressure*.8);return{background:`radial-gradient(120% 70% at 50% 18%, hsl(${c} 32% ${a+10}%) 0%, hsl(${c} 38% ${a}%) 45%, hsl(${c} 45% ${Math.max(4,a-4)}%) 100%)`}}),r=ne(()=>o.value.motif);return(c,a)=>(E(),N("div",{class:"backdrop",style:De(s.value)},[i.value?(E(),N("img",{key:0,class:"photo",src:i.value,alt:""},null,8,wg)):ce("",!0),i.value?(E(),N("div",Og)):ce("",!0),r.value==="subway"?(E(),N("svg",Pg,[...a[0]||(a[0]=[Oi('<rect x="40" y="80" width="320" height="180" rx="14" class="win" data-v-b08529d1></rect><rect x="52" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="132" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="212" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="292" y="92" width="56" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="0" y="300" width="400" height="10" class="rail" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',7)])])):r.value==="elevator"?(E(),N("svg",Rg,[...a[1]||(a[1]=[g("rect",{x:"120",y:"60",width:"160",height:"440",rx:"6",class:"door"},null,-1),g("line",{x1:"200",y1:"60",x2:"200",y2:"500",class:"seam"},null,-1),g("circle",{cx:"200",cy:"530",r:"12",class:"lamp"},null,-1),g("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="street"?(E(),N("svg",Eg,[...a[2]||(a[2]=[Oi('<line x1="60" y1="0" x2="60" y2="380" class="pole" data-v-b08529d1></line><rect x="48" y="380" width="24" height="8" rx="3" class="lamp" data-v-b08529d1></rect><rect x="0" y="430" width="400" height="6" class="rail" data-v-b08529d1></rect><rect x="0" y="470" width="400" height="4" class="rail dim" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):r.value==="court"?(E(),N("svg",Sg,[...a[3]||(a[3]=[g("rect",{x:"80",y:"120",width:"240",height:"90",rx:"4",class:"win"},null,-1),g("rect",{x:"100",y:"300",width:"200",height:"14",rx:"3",class:"desk"},null,-1),g("rect",{x:"60",y:"380",width:"280",height:"10",rx:"3",class:"desk dim"},null,-1),g("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="studio"?(E(),N("svg",Ig,[...a[4]||(a[4]=[Oi('<rect x="40" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><rect x="230" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><circle cx="200" cy="260" r="8" class="lamp" data-v-b08529d1></circle><line x1="200" y1="0" x2="200" y2="252" class="pole thin" data-v-b08529d1></line><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):(E(),N("svg",Cg,[...a[5]||(a[5]=[g("rect",{x:"50",y:"110",width:"140",height:"100",rx:"6",class:"win"},null,-1),g("rect",{x:"220",y:"110",width:"130",height:"70",rx:"6",class:"win dim"},null,-1),g("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])),g("div",$g,C(o.value.label),1)],4))}}),Ng=gt(Mg,[["__scopeId","data-v-b08529d1"]]),Fg={class:"danmaku","aria-hidden":"true"},Dg=nt({__name:"DanmakuLayer",props:{pressure:{},active:{type:Boolean}},setup(e){const t=e,n=Q([]);let i=0,o;function s(){return t.pressure>=4?de.danmaku.hot:t.pressure>=3?de.danmaku.tense:de.danmaku.calm}function r(){if(!t.active)return;const c=s();if(c.length===0)return;const a=c[Math.floor(Math.random()*c.length)]??"";n.value.push({id:i+=1,text:a,lane:Math.floor(Math.random()*4),speed:t.pressure>=4?7+Math.random()*3:10+Math.random()*4,bold:Math.random()<.25}),n.value.length>14&&(n.value=n.value.slice(-14))}return typeof setInterval=="function"&&(o=setInterval(r,t.pressure>=4?900:1800),Oe(()=>t.pressure,()=>{})),Ft(()=>{o!==void 0&&clearInterval(o)}),(c,a)=>(E(),N("div",Fg,[xe(Qd,{name:"fly"},{default:po(()=>[(E(!0),N(me,null,Mt(n.value,l=>(E(),N("span",{key:l.id,class:fe(["line",{bold:l.bold}]),style:De({top:12+l.lane*34+"px","--dur":l.speed+"s"})},C(l.text),7))),128))]),_:1})]))}}),Bg=gt(Dg,[["__scopeId","data-v-55cd0013"]]),Hg=""+new URL("he_song-DAGlX_4O.png",import.meta.url).href,Vg=""+new URL("hero-BAfbz0Vs.png",import.meta.url).href,Gg=""+new URL("npc_l01_woman-DSDWwEL8.png",import.meta.url).href,Ug=""+new URL("npc_l02_woman-qXhWvPKu.png",import.meta.url).href,jg=""+new URL("npc_l03_daughter-Dt2TiO8f.png",import.meta.url).href,Yg=""+new URL("npc_l03_woman-BQ3wIsYH.png",import.meta.url).href,Kg=""+new URL("npc_l04_woman-CZQbIvDG.png",import.meta.url).href,qg=""+new URL("npc_l05_manager-Ce6F9DQj.png",import.meta.url).href,Wg=""+new URL("npc_l05_woman-BXLOsOGn.png",import.meta.url).href,zg=""+new URL("npc_l06_girlfriend-CrncpSA3.png",import.meta.url).href,Xg=""+new URL("npc_l06_mother-BJuBbFLU.png",import.meta.url).href,Jg=""+new URL("npc_l07_ex-CEJAEgFV.png",import.meta.url).href,Zg=""+new URL("npc_l08_child-Bm0Rde6F.png",import.meta.url).href,Qg=""+new URL("npc_l08_mother-tu98VogT.png",import.meta.url).href,e1=""+new URL("npc_l08_wife-Cy9DZe9m.png",import.meta.url).href,t1=""+new URL("npc_l09_wife-CJUlJISq.png",import.meta.url).href,n1=""+new URL("npc_l10_exwife-D0NJtWQK.png",import.meta.url).href,i1=""+new URL("npc_l11_hr-Dqx_GpDt.png",import.meta.url).href,o1=""+new URL("npc_l12_boss-nYTyR_X5.png",import.meta.url).href,s1=""+new URL("npc_l12_colleague-BD3ntBZW.png",import.meta.url).href,r1=""+new URL("npc_l13_hr-Dovjb9V8.png",import.meta.url).href,c1=""+new URL("npc_l14_director-B-efKLNg.png",import.meta.url).href,a1=""+new URL("npc_l14_hr-DRiqQqX2.png",import.meta.url).href,l1=""+new URL("npc_l15_broker-CqY8iI1Q.png",import.meta.url).href,p1=""+new URL("npc_l15_hr-CSF8zzWx.png",import.meta.url).href,u1=""+new URL("npc_l16_account-D825uOC6.png",import.meta.url).href,d1=""+new URL("npc_l17_father-jYHQ9zlG.png",import.meta.url).href,_1=""+new URL("npc_l17_hr-D3pAIKo4.png",import.meta.url).href,f1=""+new URL("npc_l18_streamer-CYlpG6aq.png",import.meta.url).href,g1=""+new URL("npc_l19_moderator-CoZr2C0k.png",import.meta.url).href,m1=""+new URL("npc_l19_pr-Do-3PPx1.png",import.meta.url).href,v1=""+new URL("officer_lin-Bduk5y-m.png",import.meta.url).href,h1=""+new URL("shen_li-Bd_DLpmj.png",import.meta.url).href,x1=""+new URL("zhou_you-DSERK5v3.png",import.meta.url).href,k1={key:0,class:"duo","aria-hidden":"true"},y1=["src"],T1={key:1,class:"pt",viewBox:"0 0 120 160"},L1=["src","alt"],A1={key:1,class:"pt",viewBox:"0 0 120 160"},b1={class:"nm"},w1=nt({__name:"PortraitSlot",props:{speaker:{},visible:{type:Boolean}},setup(e){const t=e,n=Object.assign({"../../../content/art/characters/he_song.png":Hg,"../../../content/art/characters/hero.png":Vg,"../../../content/art/characters/npc_l01_woman.png":Gg,"../../../content/art/characters/npc_l02_woman.png":Ug,"../../../content/art/characters/npc_l03_daughter.png":jg,"../../../content/art/characters/npc_l03_woman.png":Yg,"../../../content/art/characters/npc_l04_woman.png":Kg,"../../../content/art/characters/npc_l05_manager.png":qg,"../../../content/art/characters/npc_l05_woman.png":Wg,"../../../content/art/characters/npc_l06_girlfriend.png":zg,"../../../content/art/characters/npc_l06_mother.png":Xg,"../../../content/art/characters/npc_l07_ex.png":Jg,"../../../content/art/characters/npc_l08_child.png":Zg,"../../../content/art/characters/npc_l08_mother.png":Qg,"../../../content/art/characters/npc_l08_wife.png":e1,"../../../content/art/characters/npc_l09_wife.png":t1,"../../../content/art/characters/npc_l10_exwife.png":n1,"../../../content/art/characters/npc_l11_hr.png":i1,"../../../content/art/characters/npc_l12_boss.png":o1,"../../../content/art/characters/npc_l12_colleague.png":s1,"../../../content/art/characters/npc_l13_hr.png":r1,"../../../content/art/characters/npc_l14_director.png":c1,"../../../content/art/characters/npc_l14_hr.png":a1,"../../../content/art/characters/npc_l15_broker.png":l1,"../../../content/art/characters/npc_l15_hr.png":p1,"../../../content/art/characters/npc_l16_account.png":u1,"../../../content/art/characters/npc_l17_father.png":d1,"../../../content/art/characters/npc_l17_hr.png":_1,"../../../content/art/characters/npc_l18_streamer.png":f1,"../../../content/art/characters/npc_l19_moderator.png":g1,"../../../content/art/characters/npc_l19_pr.png":m1,"../../../content/art/characters/officer_lin.png":v1,"../../../content/art/characters/shen_li.png":h1,"../../../content/art/characters/zhou_you.png":x1});function i(m){if(m===null)return{url:"",ok:!1};const v=Object.entries(n).find(([D])=>D.endsWith("/"+m+".png"));return v!==void 0?{url:v[1],ok:!0}:{url:"",ok:!1}}const o=i("hero"),s=ei("hero"),r=ne(()=>t.speaker===null||t.speaker==="hero"?null:t.speaker),c=ne(()=>i(r.value)),a=ne(()=>ei(r.value??"")),l=ne(()=>r.value===null?"":ho(r.value)),p=Q(!1);Oe(()=>t.speaker,()=>{p.value=!1});const _=ne(()=>t.speaker==="hero");return(m,v)=>e.visible?(E(),N("div",k1,[g("div",{class:fe(["who hero",{talking:_.value}]),style:De({"--h":T(s)})},[T(o).ok?(E(),N("img",{key:0,class:"pt art",src:T(o).url,alt:""},null,8,y1)):(E(),N("svg",T1,[...v[1]||(v[1]=[g("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])]))],6),r.value?(E(),N("div",{key:0,class:fe(["who guest",{talking:!0}]),style:De({"--h":a.value})},[c.value.ok&&!p.value?(E(),N("img",{key:0,class:"pt art",src:c.value.url,alt:l.value,onError:v[0]||(v[0]=D=>p.value=!0)},null,40,L1)):(E(),N("svg",A1,[...v[2]||(v[2]=[g("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])])),g("span",b1,C(l.value),1)],4)):ce("",!0)])):ce("",!0)}}),O1=gt(w1,[["__scopeId","data-v-286bf6bf"]]),P1={class:"backlog-panel"},R1={class:"bl-header"},E1={class:"bl-title-group"},S1={class:"bl-title"},I1={key:0,class:"bl-empty"},C1={key:0,class:"bl-speaker"},$1={class:"bl-sp-name"},M1={class:"bl-text"},N1={class:"bl-footer"},F1=nt({__name:"BacklogModal",props:{history:{}},emits:["close"],setup(e,{emit:t}){const n=t,i=de.ui,o=Q(null);function s(){Gs(()=>{o.value&&(o.value.scrollTop=o.value.scrollHeight)})}function r(c){c.key==="Escape"&&n("close")}return Pn(()=>{s(),typeof window<"u"&&window.addEventListener("keydown",r)}),Ft(()=>{typeof window<"u"&&window.removeEventListener("keydown",r)}),(c,a)=>(E(),N("div",{class:"backlog-mask",onClick:a[2]||(a[2]=ct(l=>c.$emit("close"),["self"]))},[g("div",P1,[g("header",R1,[g("div",E1,[a[3]||(a[3]=g("span",{class:"bl-badge"},"LOG",-1)),g("h3",S1,C(T(i).backlogTitle),1)]),g("button",{class:"bl-close",onClick:a[0]||(a[0]=l=>c.$emit("close"))},"✕")]),g("div",{ref_key:"scrollRef",ref:o,class:"bl-list"},[e.history.length===0?(E(),N("div",I1,C(T(i).backlogEmpty),1)):ce("",!0),(E(!0),N(me,null,Mt(e.history,(l,p)=>(E(),N("div",{key:p,class:fe(["bl-item",l.kind]),style:De({"--h":l.speaker?T(ei)(l.speaker):220})},[l.kind==="dialogue"&&l.speaker?(E(),N("div",C1,[g("span",$1,C(T(ho)(l.speaker)),1)])):ce("",!0),g("p",M1,C(l.text),1)],6))),128))],512),g("footer",N1,[g("button",{class:"bl-confirm-btn",onClick:a[1]||(a[1]=l=>c.$emit("close"))},C(T(i).lawyerModalClose),1)])])]))}}),D1=gt(F1,[["__scopeId","data-v-00bd7ed1"]]);function B1(e,t){const n=220*Math.pow(2,Math.round(e/30)%12/12);return t==="tense"?{root:n,steps:[0,2,3,5,7,8,10]}:t==="panic"?{root:n,steps:[0,1,3,6,7,9,10]}:{root:n*1.5,steps:[0,2,4,7,9,12,14]}}function _s(e,t){const n=Math.floor(t/e.steps.length),i=(t%e.steps.length+e.steps.length)%e.steps.length;return e.root*Math.pow(2,(e.steps[i]??0)/12+n)}function fs(e){let t=e|0;return()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>8&16777215)/16777216)}class H1{constructor(){he(this,"ctx",null);he(this,"master",null);he(this,"bgmGain",null);he(this,"sfxGain",null);he(this,"bgmTimer",null);he(this,"mood","calm");he(this,"hue",210);he(this,"step",0);he(this,"rnd",fs(42));he(this,"muted",!1)}unlock(){if(this.ctx===null){const t=globalThis.AudioContext;if(t===void 0)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.5,this.bgmGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.9,this.sfxGain.connect(this.master)}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master!==null&&this.ctx!==null&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone(t,n,i,o,s,r=0){if(this.ctx===null)return;const c=this.ctx.currentTime+r,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=o,a.frequency.value=t,l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(i,c+.012),l.gain.exponentialRampToValueAtTime(1e-4,c+n),a.connect(l),l.connect(s),a.start(c),a.stop(c+n+.05)}pad(t,n){if(this.bgmGain===null||this.ctx===null)return;const i=this.ctx.currentTime,o=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900,o.type="sawtooth",o.frequency.value=t/2,s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+n*.3),s.gain.linearRampToValueAtTime(1e-4,i+n),o.connect(r),r.connect(s),s.connect(this.bgmGain),o.start(i),o.stop(i+n+.1)}scene(t,n,i,o){const s=o<15||i>=4?"panic":i>=3||o<40?"tense":"calm";let r=0;for(let c=0;c<t.length;c+=1)r=r*31+t.charCodeAt(c)|0;(s!==this.mood||n!==this.hue)&&(this.mood=s,this.hue=n,this.rnd=fs(r),this.step=0)}tick(){if(this.ctx===null||this.bgmGain===null||this.muted)return;const t=B1(this.hue,this.mood),n=this.step%8,i=this.mood==="calm"?.35:this.mood==="tense"?.55:.75;if(this.rnd()<i){const o=Math.floor(this.rnd()*8),s=_s(t,o);this.tone(s,this.mood==="calm"?.9:.45,.06,this.mood==="calm"?"sine":"triangle",this.bgmGain)}n===0&&this.pad(_s(t,0),this.mood==="calm"?6.4:3.2),this.mood==="panic"&&(n===0||n===4)&&(this.tone(52,.14,.16,"sine",this.bgmGain),this.tone(52,.12,.12,"sine",this.bgmGain,.18)),this.step+=1}sfx(t){if(!(this.ctx===null||this.sfxGain===null||this.muted))switch(t){case"click":this.tone(880,.06,.1,"sine",this.sfxGain);break;case"options":this.tone(523,.08,.09,"sine",this.sfxGain),this.tone(784,.1,.09,"sine",this.sfxGain,.07);break;case"tick":this.tone(1245,.04,.07,"square",this.sfxGain);break;case"ending":{const n=this.sfxGain;n!==null&&[523,659,784,1047].forEach((i,o)=>this.tone(i,.5,.08,"sine",n,o*.13));break}case"bad":{const n=this.sfxGain;n!==null&&[330,294,262,196].forEach((i,o)=>this.tone(i,.35,.09,"triangle",n,o*.15));break}}}startLoop(){if(this.bgmTimer!==null)return;const t=800;typeof setInterval=="function"&&(this.bgmTimer=setInterval(()=>this.tick(),t))}stopLoop(){this.bgmTimer!==void 0&&this.bgmTimer!==null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}}const Pt=new H1,V1={class:"stage"},G1={key:2,class:"topbar"},U1={class:"lv-title"},j1={key:3,class:"study-entry"},Y1={class:"sub"},K1=["placeholder"],q1=["disabled"],W1={key:4,class:"study-done"},z1={class:"sum"},X1={key:1,class:"story"},J1={name:"App"},Z1=nt({...J1,props:{ctx:{}},setup(e){const n=e.ctx;Oe(n.event,b=>{b!==null&&b.type==="ending"&&(n.settle(),Pt.sfx(b.ending.rank==="S"||b.ending.rank==="A"?"ending":"bad"))}),Oe(n.event,b=>{var K,U,I;if(b===null)return;const w=wp(((K=n.current.value)==null?void 0:K.id)??"L01").hue;b.type==="node"?Pt.scene(((U=n.current.value)==null?void 0:U.id)??"L01",w,b.node.pressure??0,n.meters.value.composure):b.type==="options"&&(Pt.sfx("options"),Pt.scene(((I=n.current.value)==null?void 0:I.id)??"L01",w,3,n.meters.value.composure))});const i=Q(0),o=Q(null),s=Q(null);Oe(n.event,b=>{if(b===null){i.value=0,o.value=null,s.value=null;return}b.type==="node"?(i.value=b.node.pressure??0,o.value="speaker"in b.node?String(b.node.speaker):null,o.value!==null&&(s.value=o.value)):b.type==="options"&&(i.value=b.options.length>0?i.value:0,o.value=null)});const r=ne(()=>{const b=n.meters.value.composure;return b>=50||n.screen.value!=="level"?{opacity:0}:{opacity:(.25+(50-b)/50*.55).toFixed(2),animation:b<15?"throb 1.1s ease-in-out infinite":"none"}}),c=ne(()=>n.screen.value==="level"),a=Q(""),l=ne(()=>n.STUDY_LEVELS.every(b=>{try{return n.studySummary().includes(b)}catch{return!1}}));function p(){const b=n.studyExport();typeof navigator<"u"&&navigator.clipboard!==void 0&&navigator.clipboard.writeText(b);const w=new Blob([b],{type:"application/json"}),K=document.createElement("a");K.href=URL.createObjectURL(w),K.download=`study-${a.value||"anon"}.json`,K.click()}const _=Q(!1),m=ne(()=>_.value?"x":"m");function v(){_.value=!_.value,Pt.setMuted(_.value)}function D(){Pt.unlock(),Pt.startLoop()}document.addEventListener("pointerdown",D,{once:!0});const $=ne(()=>n.current.value?n.current.value.id:"L01"),q=Q([]),V=Q(!1),S=Q(!1),M=Q(!1);let R;const W=Q(null);function j(){var b;V.value=!0,(b=W.value)==null||b.pause()}function ee(){var b;V.value=!1,(b=W.value)==null||b.resume()}return Oe(n.event,b=>{if(b===null){R!==void 0&&clearTimeout(R);return}if(b.type==="node"){if("script"in b.node&&b.node.script?q.value.push({speaker:null,text:String(b.node.script),kind:"cutscene"}):"speaker"in b.node&&b.node.text&&q.value.push({speaker:String(b.node.speaker),text:String(b.node.text),kind:"dialogue"}),M.value){R!==void 0&&clearTimeout(R);const w="text"in b.node?String(b.node.text).length:20,K=Math.max(1800,w*55);R=setTimeout(()=>{var U;M.value&&((U=n.event.value)==null?void 0:U.type)==="node"&&n.advance()},K)}}else(b.type==="options"||b.type==="ending")&&R!==void 0&&(clearTimeout(R),R=void 0)}),Oe($,()=>{q.value=[],M.value=!1,V.value=!1,S.value=!1,R!==void 0&&clearTimeout(R)}),(b,w)=>{var K;return E(),N("div",V1,[c.value?(E(),We(Ng,{key:0,"level-id":$.value,pressure:i.value},null,8,["level-id","pressure"])):ce("",!0),c.value&&((K=T(n).event.value)==null?void 0:K.type)!=="ending"?(E(),We(Bg,{key:1,pressure:i.value,active:c.value},null,8,["pressure","active"])):ce("",!0),c.value?(E(),N("header",G1,[g("button",{class:"back",onClick:w[0]||(w[0]=U=>T(n).toSelect())},"‹"),g("span",U1,C(T(n).banner.value),1),g("button",{class:fe(["mute",{off:_.value}]),onClick:w[1]||(w[1]=U=>v())},C(m.value),3)])):ce("",!0),T(n).studyOn&&T(n).studyScreen.value==="entry"?(E(),N("div",j1,[g("h1",null,C(T(de).appTitle),1),g("p",Y1,C(T(Bt)("studyIntro")),1),Au(g("input",{"onUpdate:modelValue":w[2]||(w[2]=U=>a.value=U),class:"pid",placeholder:T(Bt)("studyPidPlaceholder"),maxlength:"8"},null,8,K1),[[s_,a.value]]),g("button",{class:"go",disabled:a.value.trim().length===0,onClick:w[3]||(w[3]=U=>T(n).studyBegin(a.value.trim()))},C(T(Bt)("studyStart")),9,q1)])):T(n).studyOn&&T(n).studyScreen.value==="done"&&l.value?(E(),N("div",W1,[g("h2",null,C(T(Bt)("studyDoneTitle")),1),g("pre",z1,C(T(n).studySummary()),1),g("button",{class:"go",onClick:p},C(T(Bt)("studyCopy")),1)])):T(n).screen.value==="select"?(E(),We(sg,{key:5,levels:T(n).studyOn?T(Tn).filter(U=>T(n).STUDY_LEVELS.includes(U.id)):T(Tn),best:T(n).best.value,onPick:T(n).startLevel},null,8,["levels","best","onPick"])):T(n).event.value?(E(),N(me,{key:6},[T(n).event.value.type!=="ending"?(E(),We(Vf,{key:0,state:T(n).meters.value},null,8,["state"])):ce("",!0),xe(O1,{speaker:o.value??s.value,visible:T(n).event.value.type!=="ending"&&(o.value??s.value)!==null},null,8,["speaker","visible"]),S.value?(E(),N("div",{key:2,class:"restore-hud-trigger",onClick:w[12]||(w[12]=U=>S.value=!1)},[g("span",null,C(T(Bt)("tapToRestore")),1)])):(E(),N("div",X1,[T(n).event.value.type==="node"&&"script"in T(n).event.value.node?(E(),We(ds,{key:0,kind:"cutscene",text:String(T(n).event.value.node.script??""),"auto-active":M.value,onAdvance:w[4]||(w[4]=U=>T(n).advance()),onOpenLog:j,onToggleAuto:w[5]||(w[5]=U=>M.value=!M.value),onSkip:w[6]||(w[6]=U=>T(n).advance()),onHideUi:w[7]||(w[7]=U=>S.value=!0)},null,8,["text","auto-active"])):T(n).event.value.type==="node"&&"speaker"in T(n).event.value.node?(E(),We(ds,{key:1,kind:"dialogue",speaker:String(T(n).event.value.node.speaker??""),text:String(T(n).event.value.node.text??""),"auto-active":M.value,onAdvance:w[8]||(w[8]=U=>T(n).advance()),onOpenLog:j,onToggleAuto:w[9]||(w[9]=U=>M.value=!M.value),onSkip:w[10]||(w[10]=U=>T(n).advance()),onHideUi:w[11]||(w[11]=U=>S.value=!0)},null,8,["speaker","text","auto-active"])):T(n).event.value.type==="options"?(E(),We(o0,{key:2,ref_key:"choiceLayerRef",ref:W,options:T(n).event.value.options,timer:T(n).event.value.timer,"timeout-option-id":T(n).event.value.timeoutOptionId,prompt:T(n).event.value.prompt??"",onChoose:T(n).choose,onOpenLog:j},null,8,["options","timer","timeout-option-id","prompt","onChoose"])):T(n).event.value.type==="ending"?(E(),We(H0,{key:3,"level-id":$.value,ending:T(n).event.value.ending,state:T(n).event.value.state,"finale-tier":T(n).finaleTier.value,onRestart:T(n).restart,onNext:T(n).nextLevel},null,8,["level-id","ending","state","finale-tier","onRestart","onNext"])):ce("",!0)]))],64)):ce("",!0),V.value?(E(),We(D1,{key:7,history:q.value,onClose:ee},null,8,["history"])):ce("",!0),c.value?(E(),N("div",{key:8,class:"vignette",style:De(r.value)},null,4)):ce("",!0)])}}}),Op="poju-study-v1",Q1=()=>typeof location<"u"&&new URLSearchParams(location.search).get("study")==="1";function Tt(){if(typeof localStorage>"u")return{sessionId:"",participant:"",startedAt:0,runs:[]};const e=localStorage.getItem(Op);return e===null?{sessionId:"",participant:"",startedAt:0,runs:[]}:JSON.parse(e)}function gi(e){typeof localStorage<"u"&&localStorage.setItem(Op,JSON.stringify(e))}function em(e){const t={sessionId:`S-${performance.now().toString(36)}`,participant:e,startedAt:performance.now(),runs:[]};return mi=t,gi(t),t}function tm(e,t,n){const i={level:t,startedAt:performance.now(),endedAt:0,totalMs:0,choices:[],endingRank:"",endingTitle:"",finalMeters:{evidence:0,opinion:0,composure:0,risk:0},replayed:n},o=mi??Tt();return o.runs.push(i),gi(o),i}let Wi=0,Pp="",mi=null;function ti(e){Wi=performance.now(),Pp=e}function nm(e,t,n,i,o){e.choices.push({level:n,nodeId:Pp,optionId:i,ms:Wi>0?performance.now()-Wi:0,meters:{...o}});const s=mi??Tt();gi(s)}function im(e,t,n,i,o){e.endedAt=performance.now(),e.totalMs=e.endedAt-e.startedAt,e.endingRank=n,e.endingTitle=i,e.finalMeters={...o},gi(mi??Tt())}function om(){return JSON.stringify(Tt(),null,2)}function sm(){const e=Tt(),n=[de.ui.studySummaryHeader.replace("{p}",e.participant).replace("{n}",String(e.runs.length))],i=new Map;for(const o of e.runs){const s=i.get(o.level)??[];s.push(o),i.set(o.level,s)}for(const[o,s]of[...i.entries()].sort()){const r=s[0],c=Math.round(r.totalMs/1e3),a=de.ui.studySummaryLine;n.push(a.replace("{lv}",o).replace("{rank}",r.endingRank).replace("{title}",r.endingTitle).replace("{s}",String(c)).replace("{c}",String(r.choices.length)).replace("{r}",s.length>1?"Y":"N"))}return n.join(`
`)}const Ln=Q("select"),kt=ci(null),Ie=ci(null),Jt=Q(P_()),Rp=Q(""),vi=ci(null),xo=Q({evidence:0,opinion:0,composure:0,risk:0}),Ep=Q(null),yt=Q1(),zi=["L01","L02","L03","L04","L05"],Sp=Q("entry"),An=ci(null),rm=Q(0);function cm(e){Jt.value=Ki(),em(e),Sp.value="done",bn("L01")}function bn(e){const t=Tn.find(o=>o.id===e)??null;if(t===null)return;kt.value=t,Rp.value=t.title;let n=t;if(e==="L20"&&!yt){const o=M_(Jt.value);n={...t,initState:{evidence:o.evidence,opinion:o.opinion,composure:o.composure,risk:o.risk}}}const i=new vo(n,Jt.value);if(vi.value=i,Ie.value=i.start(),xo.value={...i.state},Ln.value="level",yt){const o=Tt(),s=o.runs.some(r=>r.level===e&&r.endingRank!=="");An.value=tm(o,e,s),ti("entry")}}function am(){const e=vi.value;e!==null&&(Ie.value=e.proceed(),yt&&Ie.value.type==="node"&&ti(String(Ie.value.node.id)),yt&&Ie.value.type==="options"&&Ie.value.nodeId!==void 0&&ti(Ie.value.nodeId))}function lm(e){const t=vi.value;t!==null&&(Ie.value=t.choose(e),xo.value={...t.state},yt&&An.value!==null&&kt.value!==null&&(nm(An.value,Tt(),kt.value.id,e,t.state),Ie.value.type==="options"&&Ie.value.nodeId!==void 0&&ti(Ie.value.nodeId)))}function pm(){const e=vi.value,t=kt.value,n=Ie.value;if(e===null||t===null||n===null||n.type!=="ending")return;if(yt){An.value!==null&&im(An.value,Tt(),n.ending.rank,n.ending.title,e.state),rm.value+=1;return}const i=C_(Jt.value,t.id,n.ending,n.state,{now:0});Jt.value=i,R_(i),t.id==="L20"&&(Ep.value=N_(i,n.ending.rank))}function um(){kt.value!==null&&bn(kt.value.id)}function dm(){const e=kt.value;if(e===null)return;if(yt){const i=zi.indexOf(e.id),o=i>=0?zi[i+1]:void 0;if(o===void 0){Ln.value="select";return}bn(o);return}const t=Tn.findIndex(i=>i.id===e.id),n=Tn[t+1];if(n===void 0){Ln.value="select";return}bn(n.id)}function _m(){Ln.value="select"}const fm=ne(()=>{const e={};for(const[t,n]of Object.entries(Jt.value.levelResults))e[t]=n.rank;return e}),gm={screen:Ln,current:kt,event:Ie,banner:Rp,best:fm,meters:xo,finaleTier:Ep,startLevel:bn,advance:am,choose:lm,settle:pm,restart:um,nextLevel:dm,toSelect:_m,studyOn:yt,STUDY_LEVELS:zi,studyScreen:Sp,studyBegin:cm,studyExport:()=>om(),studySummary:()=>sm()},mm=p_(Z1,{ctx:gm});mm.mount("#app");
