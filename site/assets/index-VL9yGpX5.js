var vp=Object.defineProperty;var xp=(e,t,n)=>t in e?vp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var de=(e,t,n)=>xp(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Di(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ee={},Nt=[],Xe=()=>{},is=()=>!1,Yn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Kn=e=>e.startsWith("onUpdate:"),ue=Object.assign,Fi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kp=Object.prototype.hasOwnProperty,z=(e,t)=>kp.call(e,t),N=Array.isArray,Dt=e=>xn(e)==="[object Map]",os=e=>xn(e)==="[object Set]",lo=e=>xn(e)==="[object Date]",G=e=>typeof e=="function",re=e=>typeof e=="string",Ze=e=>typeof e=="symbol",X=e=>e!==null&&typeof e=="object",ss=e=>(X(e)||G(e))&&G(e.then)&&G(e.catch),rs=Object.prototype.toString,xn=e=>rs.call(e),yp=e=>xn(e).slice(8,-1),cs=e=>xn(e)==="[object Object]",Bi=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qt=Di(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Tp=/-\w/g,Me=qn(e=>e.replace(Tp,t=>t.slice(1).toUpperCase())),Ap=/\B([A-Z])/g,St=qn(e=>e.replace(Ap,"-$1").toLowerCase()),as=qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ci=qn(e=>e?`on${as(e)}`:""),Je=(e,t)=>!Object.is(e,t),Sn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ls=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Hi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},bp=e=>{const t=re(e)?Number(e):NaN;return isNaN(t)?e:t};let po;const Wn=()=>po||(po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fe(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=re(i)?wp(i):Fe(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(re(e)||X(e))return e}const Lp=/;(?![^(]*\))/g,Pp=/:([^]+)/,Op=/\/\*[^]*?\*\//g;function wp(e){const t={};return e.replace(Op,"").split(Lp).forEach(n=>{if(n){const i=n.split(Pp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ke(e){let t="";if(re(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const i=ke(e[n]);i&&(t+=i+" ")}else if(X(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Rp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sp=Di(Rp);function ps(e){return!!e||e===""}function Ep(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ji(e[i],t[i]);return n}function ji(e,t){if(e===t)return!0;let n=lo(e),i=lo(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=Ze(e),i=Ze(t),n||i)return e===t;if(n=N(e),i=N(t),n||i)return n&&i?Ep(e,t):!1;if(n=X(e),i=X(t),n||i){if(!n||!i)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const r in e){const c=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(c&&!a||!c&&a||!ji(e[r],t[r]))return!1}}return String(e)===String(t)}const us=e=>!!(e&&e.__v_isRef===!0),H=e=>re(e)?e:e==null?"":N(e)||X(e)&&(e.toString===rs||!G(e.toString))?us(e)?H(e.value):JSON.stringify(e,_s,2):String(e),_s=(e,t)=>us(t)?_s(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],s)=>(n[ai(i,s)+" =>"]=o,n),{})}:os(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ai(n))}:Ze(t)?ai(t):X(t)&&!N(t)&&!cs(t)?String(t):t,ai=(e,t="")=>{var n;return Ze(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ve;class Cp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ve&&(ve.active?(this.parent=ve,this.index=(ve.scopes||(ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=ve;try{return ve=this,t()}finally{ve=n}}}on(){++this._on===1&&(this.prevScope=ve,ve=this)}off(){if(this._on>0&&--this._on===0){if(ve===this)ve=this.prevScope;else{let t=ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,i=o.length;n<i;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Ip(){return ve}let ne;const li=new WeakSet;class ds{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ve&&(ve.active?ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,li.has(this)&&(li.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uo(this),ms(this);const t=ne,n=Ne;ne=this,Ne=!0;try{return this.fn()}finally{hs(this),ne=t,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Vi(t);this.deps=this.depsTail=void 0,uo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?li.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yi(this)&&this.run()}get dirty(){return yi(this)}}let fs=0,en,tn;function gs(e,t=!1){if(e.flags|=8,t){e.next=tn,tn=e;return}e.next=en,en=e}function Gi(){fs++}function Ui(){if(--fs>0)return;if(tn){let t=tn;for(tn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;en;){let t=en;for(en=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function ms(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function hs(e){let t,n=e.depsTail,i=n;for(;i;){const o=i.prevDep;i.version===-1?(i===n&&(n=o),Vi(i),$p(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=t,e.depsTail=n}function yi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(vs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function vs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===cn)||(e.globalVersion=cn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!yi(e))))return;e.flags|=2;const t=e.dep,n=ne,i=Ne;ne=e,Ne=!0;try{ms(e);const o=e.fn(e._value);(t.version===0||Je(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{ne=n,Ne=i,hs(e),e.flags&=-3}}function Vi(e,t=!1){const{dep:n,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Vi(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $p(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ne=!0;const xs=[];function ct(){xs.push(Ne),Ne=!1}function at(){const e=xs.pop();Ne=e===void 0?!0:e}function uo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let cn=0;class Mp{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Ne||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new Mp(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,ks(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=i)}return n}trigger(t){this.version++,cn++,this.notify(t)}notify(t){Gi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ui()}}}function ks(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)ks(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ti=new WeakMap,Lt=Symbol(""),Ai=Symbol(""),an=Symbol("");function ye(e,t,n){if(Ne&&ne){let i=Ti.get(e);i||Ti.set(e,i=new Map);let o=i.get(n);o||(i.set(n,o=new Yi),o.map=i,o.key=n),o.track()}}function st(e,t,n,i,o,s){const r=Ti.get(e);if(!r){cn++;return}const c=a=>{a&&a.trigger()};if(Gi(),t==="clear")r.forEach(c);else{const a=N(e),u=a&&Bi(n);if(a&&n==="length"){const p=Number(i);r.forEach((d,m)=>{(m==="length"||m===an||!Ze(m)&&m>=p)&&c(d)})}else switch((n!==void 0||r.has(void 0))&&c(r.get(n)),u&&c(r.get(an)),t){case"add":a?u&&c(r.get("length")):(c(r.get(Lt)),Dt(e)&&c(r.get(Ai)));break;case"delete":a||(c(r.get(Lt)),Dt(e)&&c(r.get(Ai)));break;case"set":Dt(e)&&c(r.get(Lt));break}}Ui()}function Et(e){const t=q(e);return t===e?t:(ye(t,"iterate",an),Ie(e)?t:t.map(Be))}function zn(e){return ye(e=q(e),"iterate",an),e}function We(e,t){return lt(e)?Ht(Pt(e)?Be(t):t):Be(t)}const Np={__proto__:null,[Symbol.iterator](){return pi(this,Symbol.iterator,e=>We(this,e))},concat(...e){return Et(this).concat(...e.map(t=>N(t)?Et(t):t))},entries(){return pi(this,"entries",e=>(e[1]=We(this,e[1]),e))},every(e,t){return tt(this,"every",e,t,void 0,arguments)},filter(e,t){return tt(this,"filter",e,t,n=>n.map(i=>We(this,i)),arguments)},find(e,t){return tt(this,"find",e,t,n=>We(this,n),arguments)},findIndex(e,t){return tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tt(this,"findLast",e,t,n=>We(this,n),arguments)},findLastIndex(e,t){return tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ui(this,"includes",e)},indexOf(...e){return ui(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return ui(this,"lastIndexOf",e)},map(e,t){return tt(this,"map",e,t,void 0,arguments)},pop(){return qt(this,"pop")},push(...e){return qt(this,"push",e)},reduce(e,...t){return _o(this,"reduce",e,t)},reduceRight(e,...t){return _o(this,"reduceRight",e,t)},shift(){return qt(this,"shift")},some(e,t){return tt(this,"some",e,t,void 0,arguments)},splice(...e){return qt(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return qt(this,"unshift",e)},values(){return pi(this,"values",e=>We(this,e))}};function pi(e,t,n){const i=zn(e),o=i[t]();return i!==e&&!Ie(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.done||(s.value=n(s.value)),s}),o}const Dp=Array.prototype;function tt(e,t,n,i,o,s){const r=zn(e),c=r!==e&&!Ie(e),a=r[t];if(a!==Dp[t]){const d=a.apply(e,s);return c?Be(d):d}let u=n;r!==e&&(c?u=function(d,m){return n.call(this,We(e,d),m,e)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,e)}));const p=a.call(r,u,i);return c&&o?o(p):p}function _o(e,t,n,i){const o=zn(e),s=o!==e&&!Ie(e);let r=n,c=!1;o!==e&&(s?(c=i.length===0,r=function(u,p,d){return c&&(c=!1,u=We(e,u)),n.call(this,u,We(e,p),d,e)}):n.length>3&&(r=function(u,p,d){return n.call(this,u,p,d,e)}));const a=o[t](r,...i);return c?We(e,a):a}function ui(e,t,n){const i=q(e);ye(i,"iterate",an);const o=i[t](...n);return(o===-1||o===!1)&&zi(n[0])?(n[0]=q(n[0]),i[t](...n)):o}function qt(e,t,n=[]){ct(),Gi();const i=q(e)[t].apply(e,n);return Ui(),at(),i}const Fp=Di("__proto__,__v_isRef,__isVue"),ys=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ze));function Bp(e){Ze(e)||(e=String(e));const t=q(this);return ye(t,"has",e),t.hasOwnProperty(e)}class Ts{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(o?s?zp:Ps:s?Ls:bs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=N(t);if(!o){let a;if(r&&(a=Np[n]))return a;if(n==="hasOwnProperty")return Bp}const c=Reflect.get(t,n,Te(t)?t:i);if((Ze(n)?ys.has(n):Fp(n))||(o||ye(t,"get",n),s))return c;if(Te(c)){const a=r&&Bi(n)?c:c.value;return o&&X(a)?Li(a):a}return X(c)?o?Li(c):qi(c):c}}class As extends Ts{constructor(t=!1){super(!1,t)}set(t,n,i,o){let s=t[n];const r=N(t)&&Bi(n);if(!this._isShallow){const u=lt(s);if(!Ie(i)&&!lt(i)&&(s=q(s),i=q(i)),!r&&Te(s)&&!Te(i))return u||(s.value=i),!0}const c=r?Number(n)<t.length:z(t,n),a=Reflect.set(t,n,i,Te(t)?t:o);return t===q(o)&&a&&(c?Je(i,s)&&st(t,"set",n,i):st(t,"add",n,i)),a}deleteProperty(t,n){const i=z(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&st(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!Ze(n)||!ys.has(n))&&ye(t,"has",n),i}ownKeys(t){return ye(t,"iterate",N(t)?"length":Lt),Reflect.ownKeys(t)}}class Hp extends Ts{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const jp=new As,Gp=new Hp,Up=new As(!0);const bi=e=>e,Ln=e=>Reflect.getPrototypeOf(e);function Vp(e,t,n){return function(...i){const o=this.__v_raw,s=q(o),r=Dt(s),c=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,u=o[e](...i),p=n?bi:t?Ht:Be;return!t&&ye(s,"iterate",a?Ai:Lt),ue(Object.create(u),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:c?[p(d[0]),p(d[1])]:p(d),done:m}}})}}function Pn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yp(e,t){const n={get(o){const s=this.__v_raw,r=q(s),c=q(o);e||(Je(o,c)&&ye(r,"get",o),ye(r,"get",c));const{has:a}=Ln(r),u=t?bi:e?Ht:Be;if(a.call(r,o))return u(s.get(o));if(a.call(r,c))return u(s.get(c));s!==r&&s.get(o)},get size(){const o=this.__v_raw;return!e&&ye(q(o),"iterate",Lt),o.size},has(o){const s=this.__v_raw,r=q(s),c=q(o);return e||(Je(o,c)&&ye(r,"has",o),ye(r,"has",c)),o===c?s.has(o):s.has(o)||s.has(c)},forEach(o,s){const r=this,c=r.__v_raw,a=q(c),u=t?bi:e?Ht:Be;return!e&&ye(a,"iterate",Lt),c.forEach((p,d)=>o.call(s,u(p),u(d),r))}};return ue(n,e?{add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear")}:{add(o){const s=q(this),r=Ln(s),c=q(o),a=!t&&!Ie(o)&&!lt(o)?c:o;return r.has.call(s,a)||Je(o,a)&&r.has.call(s,o)||Je(c,a)&&r.has.call(s,c)||(s.add(a),st(s,"add",a,a)),this},set(o,s){!t&&!Ie(s)&&!lt(s)&&(s=q(s));const r=q(this),{has:c,get:a}=Ln(r);let u=c.call(r,o);u||(o=q(o),u=c.call(r,o));const p=a.call(r,o);return r.set(o,s),u?Je(s,p)&&st(r,"set",o,s):st(r,"add",o,s),this},delete(o){const s=q(this),{has:r,get:c}=Ln(s);let a=r.call(s,o);a||(o=q(o),a=r.call(s,o)),c&&c.call(s,o);const u=s.delete(o);return a&&st(s,"delete",o,void 0),u},clear(){const o=q(this),s=o.size!==0,r=o.clear();return s&&st(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Vp(o,e,t)}),n}function Ki(e,t){const n=Yp(e,t);return(i,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(z(n,o)&&o in i?n:i,o,s)}const Kp={get:Ki(!1,!1)},qp={get:Ki(!1,!0)},Wp={get:Ki(!0,!1)};const bs=new WeakMap,Ls=new WeakMap,Ps=new WeakMap,zp=new WeakMap;function Jp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qi(e){return lt(e)?e:Wi(e,!1,jp,Kp,bs)}function Xp(e){return Wi(e,!1,Up,qp,Ls)}function Li(e){return Wi(e,!0,Gp,Wp,Ps)}function Wi(e,t,n,i,o){if(!X(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const r=Jp(yp(e));if(r===0)return e;const c=new Proxy(e,r===2?i:n);return o.set(e,c),c}function Pt(e){return lt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function lt(e){return!!(e&&e.__v_isReadonly)}function Ie(e){return!!(e&&e.__v_isShallow)}function zi(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Zp(e){return!z(e,"__v_skip")&&Object.isExtensible(e)&&ls(e,"__v_skip",!0),e}const Be=e=>X(e)?qi(e):e,Ht=e=>X(e)?Li(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function pe(e){return Os(e,!1)}function Jn(e){return Os(e,!0)}function Os(e,t){return Te(e)?e:new Qp(e,t)}class Qp{constructor(t,n){this.dep=new Yi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:q(t),this._value=n?t:Be(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ie(t)||lt(t);t=i?t:q(t),Je(t,n)&&(this._rawValue=t,this._value=i?t:Be(t),this.dep.trigger())}}function O(e){return Te(e)?e.value:e}const eu={get:(e,t,n)=>t==="__v_raw"?e:O(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return Te(o)&&!Te(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function ws(e){return Pt(e)?e:new Proxy(e,eu)}class tu{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Yi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return gs(this,!0),!0}get value(){const t=this.dep.track();return vs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function nu(e,t,n=!1){let i,o;return G(e)?i=e:(i=e.get,o=e.set),new tu(i,o,n)}const On={},Mn=new WeakMap;let bt;function iu(e,t=!1,n=bt){if(n){let i=Mn.get(n);i||Mn.set(n,i=[]),i.push(e)}}function ou(e,t,n=ee){const{immediate:i,deep:o,once:s,scheduler:r,augmentJob:c,call:a}=n,u=R=>o?R:Ie(R)||o===!1||o===0?rt(R,1):rt(R);let p,d,m,k,B=!1,T=!1;if(Te(e)?(d=()=>e.value,B=Ie(e)):Pt(e)?(d=()=>u(e),B=!0):N(e)?(T=!0,B=e.some(R=>Pt(R)||Ie(R)),d=()=>e.map(R=>{if(Te(R))return R.value;if(Pt(R))return u(R);if(G(R))return a?a(R,2):R()})):G(e)?t?d=a?()=>a(e,2):e:d=()=>{if(m){ct();try{m()}finally{at()}}const R=bt;bt=p;try{return a?a(e,3,[k]):e(k)}finally{bt=R}}:d=Xe,t&&o){const R=d,W=o===!0?1/0:o;d=()=>rt(R(),W)}const $=Ip(),U=()=>{p.stop(),$&&$.active&&Fi($.effects,p)};if(s&&t){const R=t;t=(...W)=>{const ce=R(...W);return U(),ce}}let S=T?new Array(e.length).fill(On):On;const V=R=>{if(!(!(p.flags&1)||!p.dirty&&!R))if(t){const W=p.run();if(R||o||B||(T?W.some((ce,fe)=>Je(ce,S[fe])):Je(W,S))){m&&m();const ce=bt;bt=p;try{const fe=[W,S===On?void 0:T&&S[0]===On?[]:S,k];S=W,a?a(t,3,fe):t(...fe)}finally{bt=ce}}}else p.run()};return c&&c(V),p=new ds(d),p.scheduler=r?()=>r(V,!1):V,k=R=>iu(R,!1,p),m=p.onStop=()=>{const R=Mn.get(p);if(R){if(a)a(R,4);else for(const W of R)W();Mn.delete(p)}},t?i?V(!0):S=p.run():r?r(V.bind(null,!0),!0):p.run(),U.pause=p.pause.bind(p),U.resume=p.resume.bind(p),U.stop=U,U}function rt(e,t=1/0,n){if(t<=0||!X(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Te(e))rt(e.value,t,n);else if(N(e))for(let i=0;i<e.length;i++)rt(e[i],t,n);else if(os(e)||Dt(e))e.forEach(i=>{rt(i,t,n)});else if(cs(e)){for(const i in e)rt(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&rt(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kn(e,t,n,i){try{return i?e(...i):e()}catch(o){Xn(o,t,n)}}function $e(e,t,n,i){if(G(e)){const o=kn(e,t,n,i);return o&&ss(o)&&o.catch(s=>{Xn(s,t,n)}),o}if(N(e)){const o=[];for(let s=0;s<e.length;s++)o.push($e(e[s],t,n,i));return o}}function Xn(e,t,n,i=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||ee;if(t){let c=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,a,u)===!1)return}c=c.parent}if(s){ct(),kn(s,null,10,[e,a,u]),at();return}}su(e,n,o,i,r)}function su(e,t,n,i=!0,o=!1){if(o)throw e;console.error(e)}const Le=[];let Ke=-1;const Ft=[];let ft=null,Ct=0;const Rs=Promise.resolve();let Nn=null;function ru(e){const t=Nn||Rs;return e?t.then(this?e.bind(this):e):t}function cu(e){let t=Ke+1,n=Le.length;for(;t<n;){const i=t+n>>>1,o=Le[i],s=ln(o);s<e||s===e&&o.flags&2?t=i+1:n=i}return t}function Ji(e){if(!(e.flags&1)){const t=ln(e),n=Le[Le.length-1];!n||!(e.flags&2)&&t>=ln(n)?Le.push(e):Le.splice(cu(t),0,e),e.flags|=1,Ss()}}function Ss(){Nn||(Nn=Rs.then(Cs))}function au(e){if(!N(e))ft&&e.id===-1?ft.splice(Ct+1,0,e):e.flags&1||(Ft.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Ft.push(e[t]);Ss()}function fo(e,t,n=Ke+1){for(;n<Le.length;n++){const i=Le[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Le.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Es(e){if(Ft.length){const t=[...new Set(Ft)].sort((n,i)=>ln(n)-ln(i));if(Ft.length=0,ft){for(let n=0;n<t.length;n++)ft.push(t[n]);return}for(ft=t,Ct=0;Ct<ft.length;Ct++){const n=ft[Ct];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ft=null,Ct=0}}const ln=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Cs(e){try{for(Ke=0;Ke<Le.length;Ke++){const t=Le[Ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),kn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ke<Le.length;Ke++){const t=Le[Ke];t&&(t.flags&=-2)}Ke=-1,Le.length=0,Es(),Nn=null,(Le.length||Ft.length)&&Cs()}}let Ce=null,Is=null;function Dn(e){const t=Ce;return Ce=e,Is=e&&e.type.__scopeId||null,t}function $s(e,t=Ce,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Lo(-1);const s=Dn(t),r=Ot.length;let c;try{c=e(...o)}finally{for(let a=Ot.length;a>r;a--)rr();Dn(s),i._d&&Lo(1)}return c};return i._n=!0,i._c=!0,i._d=!0,i}function lu(e,t){if(Ce===null)return e;const n=ni(Ce),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,c,a=ee]=t[o];s&&(G(s)&&(s={mounted:s,updated:s}),s.deep&&rt(r),i.push({dir:s,instance:n,value:r,oldValue:void 0,arg:c,modifiers:a}))}return e}function kt(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const c=o[r];s&&(c.oldValue=s[r].value);let a=c.dir[i];a&&(ct(),$e(a,n,8,[e.el,c,e,t]),at())}}function pu(e,t){if(Pe){let n=Pe.provides;const i=Pe.parent&&Pe.parent.provides;i===n&&(n=Pe.provides=Object.create(i)),n[e]=t}}function En(e,t,n=!1){const i=pr();if(i||Bt){let o=Bt?Bt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&G(t)?t.call(i&&i.proxy):t}}const uu=Symbol.for("v-scx"),_u=()=>En(uu);function De(e,t,n){return Ms(e,t,n)}function Ms(e,t,n=ee){const{immediate:i,deep:o,flush:s,once:r}=n,c=ue({},n),a=t&&i||!t&&s!=="post";let u;if(dn){if(s==="sync"){const k=_u();u=k.__watcherHandles||(k.__watcherHandles=[])}else if(!a){const k=()=>{};return k.stop=Xe,k.resume=Xe,k.pause=Xe,k}}const p=Pe;c.call=(k,B,T)=>$e(k,p,B,T);let d=!1;s==="post"?c.scheduler=k=>{Oe(k,p&&p.suspense)}:s!=="sync"&&(d=!0,c.scheduler=(k,B)=>{B?k():Ji(k)}),c.augmentJob=k=>{t&&(k.flags|=4),d&&(k.flags|=2,p&&(k.id=p.uid,k.i=p))};const m=ou(e,t,c);return dn&&(u?u.push(m):a&&m()),m}function du(e,t,n){const i=this.proxy,o=re(e)?e.includes(".")?Ns(i,e):()=>i[e]:e.bind(i,i);let s;G(t)?s=t:(s=t.handler,n=t);const r=Tn(this),c=Ms(o,s.bind(i),n);return r(),c}function Ns(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}const fu=Symbol("_vte"),Zn=e=>e.__isTeleport,qe=Symbol("_leaveCb"),Wt=Symbol("_enterCb");function gu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zi(()=>{e.isMounted=!0}),Gs(()=>{e.isUnmounting=!0}),e}const Ee=[Function,Array],mu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ee,onEnter:Ee,onAfterEnter:Ee,onEnterCancelled:Ee,onBeforeLeave:Ee,onLeave:Ee,onAfterLeave:Ee,onLeaveCancelled:Ee,onBeforeAppear:Ee,onAppear:Ee,onAfterAppear:Ee,onAppearCancelled:Ee};function hu(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Qe){t=n;break}}return t}function vu(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Pi(e,t,n,i,o){const{appear:s,mode:r,persisted:c=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:m,onLeave:k,onAfterLeave:B,onLeaveCancelled:T,onBeforeAppear:$,onAppear:U,onAfterAppear:S,onAppearCancelled:V}=t,R=String(e.key),W=vu(n,e),ce=(E,F)=>{E&&$e(E,i,9,F)},fe=(E,F)=>{const K=F[1];ce(E,F),N(E)?E.every(w=>w.length<=1)&&K():E.length<=1&&K()},ge={mode:r,persisted:c,beforeEnter(E){let F=a;if(!n.isMounted)if(s)F=$||a;else return;E[qe]&&E[qe](!0);const K=W[R];K&&It(e,K)&&K.el[qe]&&K.el[qe](),ce(F,[E])},enter(E){if(W[R]===e)return;let F=u,K=p,w=d;if(!n.isMounted)if(s)F=U||u,K=S||p,w=V||d;else return;let J=!1;E[Wt]=et=>{J||(J=!0,et?ce(w,[E]):ce(K,[E]),ge.delayedLeave&&ge.delayedLeave(),E[Wt]=void 0)};const me=E[Wt].bind(null,!1);F?fe(F,[E,me]):me()},leave(E,F){const K=String(e.key);if(E[Wt]&&E[Wt](!0),n.isUnmounting)return F();ce(m,[E]);let w=!1;E[qe]=me=>{w||(w=!0,F(),me?ce(T,[E]):ce(B,[E]),E[qe]=void 0,W[K]===e&&delete W[K])};const J=E[qe].bind(null,!1);W[K]=e,k?fe(k,[E,J]):J()},clone(E){return Pi(E,t,n,i)}};return ge}function Ds(e){if(!Xi(e))return Zn(e.type)&&e.children?hu(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&G(n.default))return n.default()}}function pn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;pn(Zn(n.type)&&Ds(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fs(e,t=!1,n){let i=[],o=0;for(let s=0;s<e.length;s++){let r=e[s];const c=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===xe?(r.patchFlag&128&&o++,i=i.concat(Fs(r.children,t,c))):(t||r.type!==Qe)&&i.push(c!=null?Rt(r,{key:c}):r)}if(o>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function pt(e,t){return G(e)?ue({name:e.name},t,{setup:e}):e}function Bs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function go(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Fn=new WeakMap;function nn(e,t,n,i,o=!1){if(N(e)){e.forEach((T,$)=>nn(T,t&&(N(t)?t[$]:t),n,i,o));return}if(on(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&nn(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?ni(i.component):i.el,r=o?null:s,{i:c,r:a}=e,u=t&&t.r,p=c.refs===ee?c.refs={}:c.refs,d=c.setupState,m=q(d),k=d===ee?is:T=>go(p,T)?!1:z(m,T),B=(T,$)=>!($&&go(p,$));if(u!=null&&u!==a){if(mo(t),re(u))p[u]=null,k(u)&&(d[u]=null);else if(Te(u)){const T=t;B(u,T.k)&&(u.value=null),T.k&&(p[T.k]=null)}}if(G(a))kn(a,c,12,[r,p]);else{const T=re(a),$=Te(a);if(T||$){const U=()=>{if(e.f){const S=T?k(a)?d[a]:p[a]:B()||!e.k?a.value:p[e.k];if(o)N(S)&&Fi(S,s);else if(N(S))S.includes(s)||S.push(s);else if(T)p[a]=[s],k(a)&&(d[a]=p[a]);else{const V=[s];B(a,e.k)&&(a.value=V),e.k&&(p[e.k]=V)}}else T?(p[a]=r,k(a)&&(d[a]=r)):$&&(B(a,e.k)&&(a.value=r),e.k&&(p[e.k]=r))};if(r){const S=()=>{U(),Fn.delete(e)};S.id=-1,Fn.set(e,S),Oe(S,n)}else mo(e),U()}}}function mo(e){const t=Fn.get(e);t&&(t.flags|=8,Fn.delete(e))}Wn().requestIdleCallback;Wn().cancelIdleCallback;const on=e=>!!e.type.__asyncLoader,Xi=e=>e.type.__isKeepAlive;function xu(e,t){Hs(e,"a",t)}function ku(e,t){Hs(e,"da",t)}function Hs(e,t,n=Pe){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Qn(t,i,n),n){let o=n.parent;for(;o&&o.parent;)Xi(o.parent.vnode)&&yu(i,t,n,o),o=o.parent}}function yu(e,t,n,i){const o=Qn(t,e,i,!0);Gt(()=>{Fi(i[t],o)},n)}function Qn(e,t,n=Pe,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{ct();const c=Tn(n),a=$e(t,n,e,r);return c(),at(),a});return i?o.unshift(s):o.push(s),s}}const ut=e=>(t,n=Pe)=>{(!dn||e==="sp")&&Qn(e,(...i)=>t(...i),n)},Tu=ut("bm"),Zi=ut("m"),Au=ut("bu"),js=ut("u"),Gs=ut("bum"),Gt=ut("um"),bu=ut("sp"),Lu=ut("rtg"),Pu=ut("rtc");function Ou(e,t=Pe){Qn("ec",e,t)}const wu=Symbol.for("v-ndc");function yn(e,t,n,i){let o;const s=n,r=N(e);if(r||re(e)){const c=r&&Pt(e);let a=!1,u=!1;c&&(a=!Ie(e),u=lt(e),e=zn(e)),o=new Array(e.length);for(let p=0,d=e.length;p<d;p++)o[p]=t(a?u?Ht(Be(e[p])):Be(e[p]):e[p],p,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,s)}else if(X(e))if(e[Symbol.iterator])o=Array.from(e,(c,a)=>t(c,a,void 0,s));else{const c=Object.keys(e);o=new Array(c.length);for(let a=0,u=c.length;a<u;a++){const p=c[a];o[a]=t(e[p],p,a,s)}}else o=[];return o}const Oi=e=>e?ur(e)?ni(e):Oi(e.parent):null,sn=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oi(e.parent),$root:e=>Oi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Vs(e),$forceUpdate:e=>e.f||(e.f=()=>{Ji(e.update)}),$nextTick:e=>e.n||(e.n=ru.bind(e.proxy)),$watch:e=>du.bind(e)}),_i=(e,t)=>e!==ee&&!e.__isScriptSetup&&z(e,t),Ru={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:c,appContext:a}=e;if(t[0]!=="$"){const m=r[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(_i(i,t))return r[t]=1,i[t];if(o!==ee&&z(o,t))return r[t]=2,o[t];if(z(s,t))return r[t]=3,s[t];if(n!==ee&&z(n,t))return r[t]=4,n[t];wi&&(r[t]=0)}}const u=sn[t];let p,d;if(u)return t==="$attrs"&&ye(e.attrs,"get",""),u(e);if((p=c.__cssModules)&&(p=p[t]))return p;if(n!==ee&&z(n,t))return r[t]=4,n[t];if(d=a.config.globalProperties,z(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return _i(o,t)?(o[t]=n,!0):i!==ee&&z(i,t)?(i[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,props:s,type:r}},c){let a;return!!(n[c]||e!==ee&&c[0]!=="$"&&z(e,c)||_i(t,c)||z(s,c)||z(i,c)||z(sn,c)||z(o.config.globalProperties,c)||(a=r.__cssModules)&&a[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ho(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wi=!0;function Su(e){const t=Vs(e),n=e.proxy,i=e.ctx;wi=!1,t.beforeCreate&&vo(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:c,provide:a,inject:u,created:p,beforeMount:d,mounted:m,beforeUpdate:k,updated:B,activated:T,deactivated:$,beforeDestroy:U,beforeUnmount:S,destroyed:V,unmounted:R,render:W,renderTracked:ce,renderTriggered:fe,errorCaptured:ge,serverPrefetch:E,expose:F,inheritAttrs:K,components:w,directives:J,filters:me}=t;if(u&&Eu(u,i,null),r)for(const ie in r){const te=r[ie];G(te)&&(i[ie]=te.bind(n))}if(o){const ie=o.call(n,n);X(ie)&&(e.data=qi(ie))}if(wi=!0,s)for(const ie in s){const te=s[ie],vt=G(te)?te.bind(n,n):G(te.get)?te.get.bind(n,n):Xe,An=!G(te)&&G(te.set)?te.set.bind(n):Xe,xt=oe({get:vt,set:An});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>xt.value,set:He=>xt.value=He})}if(c)for(const ie in c)Us(c[ie],i,n,ie);if(a){const ie=G(a)?a.call(n):a;Reflect.ownKeys(ie).forEach(te=>{pu(te,ie[te])})}p&&vo(p,e,"c");function _e(ie,te){N(te)?te.forEach(vt=>ie(vt.bind(n))):te&&ie(te.bind(n))}if(_e(Tu,d),_e(Zi,m),_e(Au,k),_e(js,B),_e(xu,T),_e(ku,$),_e(Ou,ge),_e(Pu,ce),_e(Lu,fe),_e(Gs,S),_e(Gt,R),_e(bu,E),N(F))if(F.length){const ie=e.exposed||(e.exposed={});F.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:vt=>n[te]=vt,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===Xe&&(e.render=W),K!=null&&(e.inheritAttrs=K),w&&(e.components=w),J&&(e.directives=J),E&&Bs(e)}function Eu(e,t,n=Xe){N(e)&&(e=Ri(e));for(const i in e){const o=e[i];let s;X(o)?"default"in o?s=En(o.from||i,o.default,!0):s=En(o.from||i):s=En(o),Te(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function vo(e,t,n){$e(N(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Us(e,t,n,i){let o=i.includes(".")?Ns(n,i):()=>n[i];if(re(e)){const s=t[e];G(s)&&De(o,s)}else if(G(e))De(o,e.bind(n));else if(X(e))if(N(e))e.forEach(s=>Us(s,t,n,i));else{const s=G(e.handler)?e.handler.bind(n):t[e.handler];G(s)&&De(o,s,e)}}function Vs(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,c=s.get(t);let a;return c?a=c:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(u=>Bn(a,u,r,!0)),Bn(a,t,r)),X(t)&&s.set(t,a),a}function Bn(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&Bn(e,s,n,!0),o&&o.forEach(r=>Bn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const c=Cu[r]||n&&n[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const Cu={data:xo,props:ko,emits:ko,methods:Xt,computed:Xt,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Xt,directives:Xt,watch:$u,provide:xo,inject:Iu};function xo(e,t){return t?e?function(){return ue(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Iu(e,t){return Xt(Ri(e),Ri(t))}function Ri(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Xt(e,t){return e?ue(Object.create(null),e,t):t}function ko(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:ue(Object.create(null),ho(e),ho(t??{})):t}function $u(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const i in t)n[i]=Ae(e[i],t[i]);return n}function Ys(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mu=0;function Nu(e,t){return function(i,o=null){G(i)||(i=ue({},i)),o!=null&&!X(o)&&(o=null);const s=Ys(),r=new WeakSet,c=[];let a=!1;const u=s.app={_uid:Mu++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:d_,get config(){return s.config},set config(p){},use(p,...d){return r.has(p)||(p&&G(p.install)?(r.add(p),p.install(u,...d)):G(p)&&(r.add(p),p(u,...d))),u},mixin(p){return s.mixins.includes(p)||s.mixins.push(p),u},component(p,d){return d?(s.components[p]=d,u):s.components[p]},directive(p,d){return d?(s.directives[p]=d,u):s.directives[p]},mount(p,d,m){if(!a){const k=u._ceVNode||Se(i,o);return k.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(k,p,m),a=!0,u._container=p,p.__vue_app__=u,ni(k.component)}},onUnmount(p){c.push(p)},unmount(){a&&($e(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(p,d){return s.provides[p]=d,u},runWithContext(p){const d=Bt;Bt=u;try{return p()}finally{Bt=d}}};return u}}let Bt=null;const Du=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Me(t)}Modifiers`]||e[`${St(t)}Modifiers`];function Fu(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||ee;let o=n;const s=t.startsWith("update:"),r=s&&Du(i,t.slice(7));r&&(r.trim&&(o=n.map(p=>re(p)?p.trim():p)),r.number&&(o=n.map(Hi)));let c,a=i[c=ci(t)]||i[c=ci(Me(t))];!a&&s&&(a=i[c=ci(St(t))]),a&&$e(a,e,6,o);const u=i[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,$e(u,e,6,o)}}const Bu=new WeakMap;function Ks(e,t,n=!1){const i=n?Bu:t.emitsCache,o=i.get(e);if(o!==void 0)return o;const s=e.emits;let r={},c=!1;if(!G(e)){const a=u=>{const p=Ks(u,t,!0);p&&(c=!0,ue(r,p))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(X(e)&&i.set(e,null),null):(N(s)?s.forEach(a=>r[a]=null):ue(r,s),X(e)&&i.set(e,r),r)}function ei(e,t){return!e||!Yn(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,St(t))||z(e,t))}function yo(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:c,emit:a,render:u,renderCache:p,props:d,data:m,setupState:k,ctx:B,inheritAttrs:T}=e,$=Dn(e);let U,S;try{if(n.shapeFlag&4){const R=o||i,W=R;U=ze(u.call(W,R,p,d,k,m,B)),S=c}else{const R=t;U=ze(R.length>1?R(d,{attrs:c,slots:r,emit:a}):R(d,null)),S=t.props?c:Hu(c)}}catch(R){Ot.length=0,Xn(R,e,1),U=Se(Qe)}let V=U;if(S&&T!==!1){const R=Object.keys(S),{shapeFlag:W}=V;R.length&&W&7&&(s&&R.some(Kn)&&(S=ju(S,s)),V=Rt(V,S,!1,!0))}if(n.dirs&&(V=Rt(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition){const R=Zn(V.type)&&Ds(V)||V;pn(R,n.transition)}return U=V,Dn($),U}const Hu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},ju=(e,t)=>{const n={};for(const i in e)(!Kn(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Gu(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:c,patchFlag:a}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?To(i,r,u):!!r;if(a&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const m=p[d];if(qs(r,i,m)&&!ei(u,m))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:i===r?!1:i?r?To(i,r,u):!0:!!r;return!1}function To(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(qs(t,e,s)&&!ei(n,s))return!0}return!1}function qs(e,t,n){const i=e[n],o=t[n];return n==="style"&&X(i)&&X(o)?!ji(i,o):i!==o}function Uu({vnode:e,parent:t,suspense:n},i){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=i,e=o),o===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const Ws={},zs=()=>Object.create(Ws),Js=e=>Object.getPrototypeOf(e)===Ws;function Vu(e,t,n,i=!1){const o={},s=zs();e.propsDefaults=Object.create(null),Xs(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Xp(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Yu(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,c=q(o),[a]=e.propsOptions;let u=!1;if((i||r>0)&&!(r&16)){if(r&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let m=p[d];if(ei(e.emitsOptions,m))continue;const k=t[m];if(a)if(z(s,m))k!==s[m]&&(s[m]=k,u=!0);else{const B=Me(m);o[B]=Si(a,c,B,k,e,!1)}else k!==s[m]&&(s[m]=k,u=!0)}}}else{Xs(e,t,o,s)&&(u=!0);let p;for(const d in c)(!t||!z(t,d)&&((p=St(d))===d||!z(t,p)))&&(a?n&&(n[d]!==void 0||n[p]!==void 0)&&(o[d]=Si(a,c,d,void 0,e,!0)):delete o[d]);if(s!==c)for(const d in s)(!t||!z(t,d))&&(delete s[d],u=!0)}u&&st(e.attrs,"set","")}function Xs(e,t,n,i){const[o,s]=e.propsOptions;let r=!1,c;if(t)for(let a in t){if(Qt(a))continue;const u=t[a];let p;o&&z(o,p=Me(a))?!s||!s.includes(p)?n[p]=u:(c||(c={}))[p]=u:ei(e.emitsOptions,a)||(!(a in i)||u!==i[a])&&(i[a]=u,r=!0)}if(s){const a=q(n),u=c||ee;for(let p=0;p<s.length;p++){const d=s[p];n[d]=Si(o,a,d,u[d],e,!z(u,d))}}return r}function Si(e,t,n,i,o,s){const r=e[n];if(r!=null){const c=z(r,"default");if(c&&i===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&G(a)){const{propsDefaults:u}=o;if(n in u)i=u[n];else{const p=Tn(o);i=u[n]=a.call(null,t),p()}}else i=a;o.ce&&o.ce._setProp(n,i)}r[0]&&(s&&!c?i=!1:r[1]&&(i===""||i===St(n))&&(i=!0))}return i}const Ku=new WeakMap;function Zs(e,t,n=!1){const i=n?Ku:t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},c=[];let a=!1;if(!G(e)){const p=d=>{a=!0;const[m,k]=Zs(d,t,!0);ue(r,m),k&&c.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!s&&!a)return X(e)&&i.set(e,Nt),Nt;if(N(s))for(let p=0;p<s.length;p++){const d=Me(s[p]);Ao(d)&&(r[d]=ee)}else if(s)for(const p in s){const d=Me(p);if(Ao(d)){const m=s[p],k=r[d]=N(m)||G(m)?{type:m}:ue({},m),B=k.type;let T=!1,$=!0;if(N(B))for(let U=0;U<B.length;++U){const S=B[U],V=G(S)&&S.name;if(V==="Boolean"){T=!0;break}else V==="String"&&($=!1)}else T=G(B)&&B.name==="Boolean";k[0]=T,k[1]=$,(T||z(k,"default"))&&c.push(d)}}const u=[r,c];return X(e)&&i.set(e,u),u}function Ao(e){return e[0]!=="$"&&!Qt(e)}const Qi=e=>e==="_"||e==="_ctx"||e==="$stable",eo=e=>N(e)?e.map(ze):[ze(e)],qu=(e,t,n)=>{if(t._n)return t;const i=$s((...o)=>eo(t(...o)),n);return i._c=!1,i},Qs=(e,t,n)=>{const i=e._ctx;for(const o in e){if(Qi(o))continue;const s=e[o];if(G(s))t[o]=qu(o,s,i);else if(s!=null){const r=eo(s);t[o]=()=>r}}},er=(e,t)=>{const n=eo(t);e.slots.default=()=>n},tr=(e,t,n)=>{for(const i in t)(n||!Qi(i))&&(e[i]=t[i])},Wu=(e,t,n)=>{const i=e.slots=zs();if(e.vnode.shapeFlag&32){const o=t._;o?(tr(i,t,n),n&&ls(i,"_",o,!0)):Qs(t,i)}else t&&er(e,t)},zu=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=ee;if(i.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:tr(o,t,n):(s=!t.$stable,Qs(t,o)),r=t}else t&&(er(e,t),r={default:1});if(s)for(const c in o)!Qi(c)&&r[c]==null&&delete o[c]},Oe=e_;function Ju(e){return Xu(e)}function Xu(e,t){const n=Wn();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:c,createComment:a,setText:u,setElementText:p,parentNode:d,nextSibling:m,setScopeId:k=Xe,insertStaticContent:B}=e,T=(l,_,f,x=null,v=null,g=null,L=void 0,A=null,y=!!_.dynamicChildren)=>{if(l===_)return;l&&!It(l,_)&&(x=bn(l),He(l,v,g,!0),l=null),_.patchFlag===-2&&(y=!1,_.dynamicChildren=null);const{type:h,ref:M,shapeFlag:P}=_;switch(h){case ti:$(l,_,f,x);break;case Qe:U(l,_,f,x);break;case Cn:l==null&&S(_,f,x,L);break;case xe:w(l,_,f,x,v,g,L,A,y);break;default:P&1?W(l,_,f,x,v,g,L,A,y):P&6?J(l,_,f,x,v,g,L,A,y):(P&64||P&128)&&h.process(l,_,f,x,v,g,L,A,y,Yt)}M!=null&&v?nn(M,l&&l.ref,g,_||l,!_):M==null&&l&&l.ref!=null&&nn(l.ref,null,g,l,!0)},$=(l,_,f,x)=>{if(l==null)i(_.el=c(_.children),f,x);else{const v=_.el=l.el;_.children!==l.children&&u(v,_.children)}},U=(l,_,f,x)=>{l==null?i(_.el=a(_.children||""),f,x):_.el=l.el},S=(l,_,f,x)=>{[l.el,l.anchor]=B(l.children,_,f,x,l.el,l.anchor)},V=({el:l,anchor:_},f,x)=>{let v;for(;l&&l!==_;)v=m(l),i(l,f,x),l=v;i(_,f,x)},R=({el:l,anchor:_})=>{let f;for(;l&&l!==_;)f=m(l),o(l),l=f;o(_)},W=(l,_,f,x,v,g,L,A,y)=>{if(_.type==="svg"?L="svg":_.type==="math"&&(L="mathml"),l==null)ce(_,f,x,v,g,L,A,y);else{const h=l.el&&l.el._isVueCE?l.el:null;try{h&&h._beginPatch(),E(l,_,v,g,L,A,y)}finally{h&&h._endPatch()}}},ce=(l,_,f,x,v,g,L,A)=>{let y,h;const{props:M,shapeFlag:P,transition:C,dirs:D}=l;if(y=l.el=r(l.type,g,M&&M.is,M),P&8?p(y,l.children):P&16&&ge(l.children,y,null,x,v,di(l,g),L,A),D&&kt(l,null,x,"created"),fe(y,l,l.scopeId,L,x),M){for(const Q in M)Q!=="value"&&!Qt(Q)&&s(y,Q,null,M[Q],g,x);"value"in M&&s(y,"value",null,M.value,g),(h=M.onVnodeBeforeMount)&&Ve(h,x,l)}D&&kt(l,null,x,"beforeMount");const Y=Zu(v,C);Y&&C.beforeEnter(y),i(y,_,f),((h=M&&M.onVnodeMounted)||Y||D)&&Oe(()=>{try{h&&Ve(h,x,l),Y&&C.enter(y),D&&kt(l,null,x,"mounted")}finally{}},v)},fe=(l,_,f,x,v)=>{if(f&&k(l,f),x)for(let g=0;g<x.length;g++)k(l,x[g]);if(v){let g=v.subTree;if(_===g||sr(g.type)&&(g.ssContent===_||g.ssFallback===_)){const L=v.vnode;fe(l,L,L.scopeId,L.slotScopeIds,v.parent)}}},ge=(l,_,f,x,v,g,L,A,y=0)=>{for(let h=y;h<l.length;h++){const M=l[h]=A?ot(l[h]):ze(l[h]);T(null,M,_,f,x,v,g,L,A)}},E=(l,_,f,x,v,g,L)=>{const A=_.el=l.el;let{patchFlag:y,dynamicChildren:h,dirs:M}=_;y|=l.patchFlag&16;const P=l.props||ee,C=_.props||ee;let D;if(f&&yt(f,!1),(D=C.onVnodeBeforeUpdate)&&Ve(D,f,_,l),M&&kt(_,l,f,"beforeUpdate"),f&&yt(f,!0),h&&(!l.dynamicChildren||l.dynamicChildren.length!==h.length)&&(y=0,L=!1,h=null),(P.innerHTML&&C.innerHTML==null||P.textContent&&C.textContent==null)&&p(A,""),h?F(l.dynamicChildren,h,A,f,x,di(_,v),g):L||te(l,_,A,null,f,x,di(_,v),g,!1),y>0){if(y&16)K(A,P,C,f,v);else if(y&2&&P.class!==C.class&&s(A,"class",null,C.class,v),y&4&&s(A,"style",P.style,C.style,v),y&8){const Y=_.dynamicProps;for(let Q=0;Q<Y.length;Q++){const Z=Y[Q],le=P[Z],he=C[Z];(he!==le||Z==="value")&&s(A,Z,le,he,v,f)}}y&1&&l.children!==_.children&&p(A,_.children)}else!L&&h==null&&K(A,P,C,f,v);((D=C.onVnodeUpdated)||M)&&Oe(()=>{D&&Ve(D,f,_,l),M&&kt(_,l,f,"updated")},x)},F=(l,_,f,x,v,g,L)=>{for(let A=0;A<_.length;A++){const y=l[A],h=_[A],M=y.el&&(y.type===xe||!It(y,h)||y.shapeFlag&198)?d(y.el):f;T(y,h,M,null,x,v,g,L,!0)}},K=(l,_,f,x,v)=>{if(_!==f){if(_!==ee)for(const g in _)!Qt(g)&&!(g in f)&&s(l,g,_[g],null,v,x);for(const g in f){if(Qt(g))continue;const L=f[g],A=_[g];L!==A&&g!=="value"&&s(l,g,A,L,v,x)}"value"in f&&s(l,"value",_.value,f.value,v)}},w=(l,_,f,x,v,g,L,A,y)=>{const h=_.el=l?l.el:c(""),M=_.anchor=l?l.anchor:c("");let{patchFlag:P,dynamicChildren:C,slotScopeIds:D}=_;D&&(A=A?A.concat(D):D),l==null?(i(h,f,x),i(M,f,x),ge(_.children||[],f,M,v,g,L,A,y)):P>0&&P&64&&C&&l.dynamicChildren&&l.dynamicChildren.length===C.length?(F(l.dynamicChildren,C,f,v,g,L,A),(_.key!=null||v&&_===v.subTree)&&nr(l,_,!0)):te(l,_,f,M,v,g,L,A,y)},J=(l,_,f,x,v,g,L,A,y)=>{_.slotScopeIds=A,l==null?_.shapeFlag&512?v.ctx.activate(_,f,x,L,y):me(_,f,x,v,g,L,y):et(l,_,y)},me=(l,_,f,x,v,g,L)=>{const A=l.component=c_(l,x,v);if(Xi(l)&&(A.ctx.renderer=Yt),a_(A,!1,L),A.asyncDep){if(v&&v.registerDep(A,_e,L),!l.el){const y=A.subTree=Se(Qe);U(null,y,_,f),l.placeholder=y.el}}else _e(A,l,_,f,v,g,L)},et=(l,_,f)=>{const x=_.component=l.component;if(Gu(l,_,f))if(x.asyncDep&&!x.asyncResolved){ie(x,_,f);return}else x.next=_,x.update();else _.el=l.el,x.vnode=_},_e=(l,_,f,x,v,g,L)=>{const A=()=>{if(l.isMounted){let{next:P,bu:C,u:D,parent:Y,vnode:Q}=l;{const Ge=ir(l);if(Ge){P&&(P.el=Q.el,ie(l,P,L)),Ge.asyncDep.then(()=>{Oe(()=>{l.isUnmounted||h()},v)});return}}let Z=P,le;yt(l,!1),P?(P.el=Q.el,ie(l,P,L)):P=Q,C&&Sn(C),(le=P.props&&P.props.onVnodeBeforeUpdate)&&Ve(le,Y,P,Q),yt(l,!0);const he=yo(l),je=l.subTree;l.subTree=he,T(je,he,d(je.el),bn(je),l,v,g),P.el=he.el,Z===null&&Uu(l,he.el),D&&Oe(D,v),(le=P.props&&P.props.onVnodeUpdated)&&Oe(()=>Ve(le,Y,P,Q),v)}else{let P;const{el:C,props:D}=_,{bm:Y,m:Q,parent:Z,root:le,type:he}=l,je=on(_);yt(l,!1),Y&&Sn(Y),!je&&(P=D&&D.onVnodeBeforeMount)&&Ve(P,Z,_),yt(l,!0);{le.ce&&le.ce._hasShadowRoot()&&le.ce._injectChildStyle(he,l.parent?l.parent.type:void 0);const Ge=l.subTree=yo(l);T(null,Ge,f,x,l,v,g),_.el=Ge.el}if(Q&&Oe(Q,v),!je&&(P=D&&D.onVnodeMounted)){const Ge=_;Oe(()=>Ve(P,Z,Ge),v)}(_.shapeFlag&256||Z&&on(Z.vnode)&&Z.vnode.shapeFlag&256)&&l.a&&Oe(l.a,v),l.isMounted=!0,_=f=x=null}};l.scope.on();const y=l.effect=new ds(A);l.scope.off();const h=l.update=y.run.bind(y),M=l.job=y.runIfDirty.bind(y);M.i=l,M.id=l.uid,y.scheduler=()=>Ji(M),yt(l,!0),h()},ie=(l,_,f)=>{_.component=l;const x=l.vnode.props;l.vnode=_,l.next=null,Yu(l,_.props,x,f),zu(l,_.children,f),ct(),fo(l),at()},te=(l,_,f,x,v,g,L,A,y=!1)=>{const h=l&&l.children,M=l?l.shapeFlag:0,P=_.children,{patchFlag:C,shapeFlag:D}=_;if(C>0){if(C&128){An(h,P,f,x,v,g,L,A,y);return}else if(C&256){vt(h,P,f,x,v,g,L,A,y);return}}D&8?(M&16&&Vt(h,v,g),P!==h&&p(f,P)):M&16?D&16?An(h,P,f,x,v,g,L,A,y):Vt(h,v,g,!0):(M&8&&p(f,""),D&16&&ge(P,f,x,v,g,L,A,y))},vt=(l,_,f,x,v,g,L,A,y)=>{l=l||Nt,_=_||Nt;const h=l.length,M=_.length,P=Math.min(h,M);let C;for(C=0;C<P;C++){const D=_[C]=y?ot(_[C]):ze(_[C]);T(l[C],D,f,null,v,g,L,A,y)}h>M?Vt(l,v,g,!0,!1,P):ge(_,f,x,v,g,L,A,y,P)},An=(l,_,f,x,v,g,L,A,y)=>{let h=0;const M=_.length;let P=l.length-1,C=M-1;for(;h<=P&&h<=C;){const D=l[h],Y=_[h]=y?ot(_[h]):ze(_[h]);if(It(D,Y))T(D,Y,f,null,v,g,L,A,y);else break;h++}for(;h<=P&&h<=C;){const D=l[P],Y=_[C]=y?ot(_[C]):ze(_[C]);if(It(D,Y))T(D,Y,f,null,v,g,L,A,y);else break;P--,C--}if(h>P){if(h<=C){const D=C+1,Y=D<M?_[D].el:x;for(;h<=C;)T(null,_[h]=y?ot(_[h]):ze(_[h]),f,Y,v,g,L,A,y),h++}}else if(h>C)for(;h<=P;)He(l[h],v,g,!0),h++;else{const D=h,Y=h,Q=new Map;for(h=Y;h<=C;h++){const we=_[h]=y?ot(_[h]):ze(_[h]);we.key!=null&&Q.set(we.key,h)}let Z,le=0;const he=C-Y+1;let je=!1,Ge=0;const Kt=new Array(he);for(h=0;h<he;h++)Kt[h]=0;for(h=D;h<=P;h++){const we=l[h];if(le>=he){He(we,v,g,!0);continue}let Ue;if(we.key!=null)Ue=Q.get(we.key);else for(Z=Y;Z<=C;Z++)if(Kt[Z-Y]===0&&It(we,_[Z])){Ue=Z;break}Ue===void 0?He(we,v,g,!0):(Kt[Ue-Y]=h+1,Ue>=Ge?Ge=Ue:je=!0,T(we,_[Ue],f,null,v,g,L,A,y),le++)}const ro=je?Qu(Kt):Nt;for(Z=ro.length-1,h=he-1;h>=0;h--){const we=Y+h,Ue=_[we],co=_[we+1],ao=we+1<M?co.el||or(co):x;Kt[h]===0?T(null,Ue,f,ao,v,g,L,A,y):je&&(Z<0||h!==ro[Z]?xt(Ue,f,ao,2):Z--)}}},xt=(l,_,f,x,v=null)=>{const{el:g,type:L,transition:A,children:y,shapeFlag:h}=l;if(h&6){xt(l.component.subTree,_,f,x);return}if(h&128){l.suspense.move(_,f,x);return}if(h&64){L.move(l,_,f,Yt);return}if(L===xe){i(g,_,f);for(let P=0;P<y.length;P++)xt(y[P],_,f,x);i(l.anchor,_,f);return}if(L===Cn){V(l,_,f);return}if(x!==2&&h&1&&A)if(x===0)A.persisted&&!g[qe]?i(g,_,f):(A.beforeEnter(g),i(g,_,f),Oe(()=>A.enter(g),v));else{const{leave:P,delayLeave:C,afterLeave:D}=A,Y=()=>{l.ctx.isUnmounted?o(g):i(g,_,f)},Q=()=>{const Z=g._isLeaving||!!g[qe];g._isLeaving&&g[qe](!0),A.persisted&&!Z?Y():P(g,()=>{Y(),D&&D()})};C?C(g,Y,Q):Q()}else i(g,_,f)},He=(l,_,f,x=!1,v=!1)=>{const{type:g,props:L,ref:A,children:y,dynamicChildren:h,shapeFlag:M,patchFlag:P,dirs:C,cacheIndex:D,memo:Y}=l;if(P===-2&&(v=!1),A!=null&&(ct(),nn(A,null,f,l,!0),at()),D!=null&&(_.renderCache[D]=void 0),M&256){_.ctx.deactivate(l);return}const Q=M&1&&C,Z=!on(l);let le;if(Z&&(le=L&&L.onVnodeBeforeUnmount)&&Ve(le,_,l),M&6)hp(l.component,f,x);else{if(M&128){l.suspense.unmount(f,x);return}Q&&kt(l,null,_,"beforeUnmount"),M&64?l.type.remove(l,_,f,Yt,x):h&&!h.hasOnce&&(g!==xe||P>0&&P&64)?Vt(h,_,f,!1,!0):(g===xe&&P&384||!v&&M&16)&&Vt(y,_,f),x&&oo(l)}const he=Y!=null&&D==null;(Z&&(le=L&&L.onVnodeUnmounted)||Q||he)&&Oe(()=>{le&&Ve(le,_,l),Q&&kt(l,null,_,"unmounted"),he&&(l.el=null)},f)},oo=l=>{const{type:_,el:f,anchor:x,transition:v}=l;if(_===xe){mp(f,x);return}if(_===Cn){R(l);return}const g=()=>{o(f),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(l.shapeFlag&1&&v&&!v.persisted){const{leave:L,delayLeave:A}=v,y=()=>L(f,g);A?A(l.el,g,y):y()}else g()},mp=(l,_)=>{let f;for(;l!==_;)f=m(l),o(l),l=f;o(_)},hp=(l,_,f)=>{const{bum:x,scope:v,job:g,subTree:L,um:A,m:y,a:h}=l;bo(y),bo(h),x&&Sn(x),v.stop(),g&&(g.flags|=8,He(L,l,_,f)),A&&Oe(A,_),Oe(()=>{l.isUnmounted=!0},_)},Vt=(l,_,f,x=!1,v=!1,g=0)=>{for(let L=g;L<l.length;L++)He(l[L],_,f,x,v)},bn=l=>{if(l.shapeFlag&6)return bn(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const _=m(l.anchor||l.el),f=_&&_[fu];return f?m(f):_};let ri=!1;const so=(l,_,f)=>{let x;l==null?_._vnode&&(He(_._vnode,null,null,!0),x=_._vnode.component):T(_._vnode||null,l,_,null,null,null,f),_._vnode=l,ri||(ri=!0,fo(x),Es(),ri=!1)},Yt={p:T,um:He,m:xt,r:oo,mt:me,mc:ge,pc:te,pbc:F,n:bn,o:e};return{render:so,hydrate:void 0,createApp:Nu(so)}}function di({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function yt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Zu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function nr(e,t,n=!1){const i=e.children,o=t.children;if(N(i)&&N(o))for(let s=0;s<i.length;s++){const r=i[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=ot(o[s]),c.el=r.el),!n&&c.patchFlag!==-2&&nr(r,c)),c.type===ti&&(c.patchFlag===-1&&(c=o[s]=ot(c)),c.el=r.el),c.type===Qe&&!c.el&&(c.el=r.el)}}function Qu(e){const t=e.slice(),n=[0];let i,o,s,r,c;const a=e.length;for(i=0;i<a;i++){const u=e[i];if(u!==0){if(o=n[n.length-1],e[o]<u){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)c=s+r>>1,e[n[c]]<u?s=c+1:r=c;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function ir(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ir(t)}function bo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function or(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?or(t.subTree):null}const sr=e=>e.__isSuspense;function e_(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):au(e)}const xe=Symbol.for("v-fgt"),ti=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Cn=Symbol.for("v-stc"),Ot=[];let Re=null;function I(e=!1){Ot.push(Re=e?null:[])}function rr(){Ot.pop(),Re=Ot[Ot.length-1]||null}let un=1;function Lo(e,t=!1){un+=e,e<0&&Re&&t&&(Re.hasOnce=!0)}function cr(e){return e.dynamicChildren=un>0?Re||Nt:null,rr(),un>0&&Re&&Re.push(e),e}function j(e,t,n,i,o,s){return cr(b(e,t,n,i,o,s,!0))}function nt(e,t,n,i,o){return cr(Se(e,t,n,i,o,!0))}function ar(e){return e?e.__v_isVNode===!0:!1}function It(e,t){return e.type===t.type&&e.key===t.key}const lr=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||Te(e)||G(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function b(e,t=null,n=null,i=0,o=null,s=e===xe?0:1,r=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lr(t),ref:t&&In(t),scopeId:Is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ce};return c?(Hn(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=re(n)?8:16),un>0&&!r&&Re&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Re.push(a),a}const Se=t_;function t_(e,t=null,n=null,i=0,o=null,s=!1){if((!e||e===wu)&&(e=Qe),ar(e)){const c=Rt(e,t,!0);return n&&Hn(c,n),un>0&&!s&&Re&&(c.shapeFlag&6?Re[Re.indexOf(e)]=c:Re.push(c)),c.patchFlag=-2,c}if(__(e)&&(e=e.__vccOpts),t){t=n_(t);let{class:c,style:a}=t;c&&!re(c)&&(t.class=ke(c)),X(a)&&(zi(a)&&!N(a)&&(a=ue({},a)),t.style=Fe(a))}const r=re(e)?1:sr(e)?128:Zn(e)?64:X(e)?4:G(e)?2:0;return b(e,t,n,i,o,r,s,!0)}function n_(e){return e?zi(e)||Js(e)?ue({},e):e:null}function Rt(e,t,n=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:c,transition:a}=e,u=t?o_(o||{},t):o,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&lr(u),ref:t&&t.ref?n&&s?N(s)?s.concat(In(t)):[s,In(t)]:In(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rt(e.ssContent),ssFallback:e.ssFallback&&Rt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&pn(p,a.clone(p)),p}function i_(e=" ",t=0){return Se(ti,null,e,t)}function fi(e,t){const n=Se(Cn,null,e);return n.staticCount=t,n}function be(e="",t=!1){return t?(I(),nt(Qe,null,e)):Se(Qe,null,e)}function ze(e){return e==null||typeof e=="boolean"?Se(Qe):N(e)?Se(xe,null,e.slice()):ar(e)?ot(e):Se(ti,null,String(e))}function ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Rt(e)}function Hn(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),Hn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Js(t)?t._ctx=Ce:o===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(G(t)){if(i&65){Hn(e,{default:t});return}t={default:t,_ctx:Ce},n=32}else t=String(t),i&64?(n=16,t=[i_(t)]):n=8;e.children=t,e.shapeFlag|=n}function o_(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=ke([t.class,i.class]));else if(o==="style")t.style=Fe([t.style,i.style]);else if(Yn(o)){const s=t[o],r=i[o];r&&s!==r&&!(N(s)&&s.includes(r))?t[o]=s?[].concat(s,r):r:r==null&&s==null&&!Kn(o)&&(t[o]=r)}else o!==""&&(t[o]=i[o])}return t}function Ve(e,t,n,i=null){$e(e,t,7,[n,i])}const s_=Ys();let r_=0;function c_(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||s_,s={uid:r_++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zs(i,o),emitsOptions:Ks(i,o),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:i.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Fu.bind(null,s),e.ce&&e.ce(s),s}let Pe=null;const pr=()=>Pe||Ce;let jn,_n;{const e=Wn(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};jn=t("__VUE_INSTANCE_SETTERS__",n=>Pe=n),_n=t("__VUE_SSR_SETTERS__",n=>dn=n)}const Tn=e=>{const t=Pe;return jn(e),e.scope.on(),()=>{e.scope.off(),jn(t)}},Po=()=>{Pe&&Pe.scope.off(),jn(null)};function ur(e){return e.vnode.shapeFlag&4}let dn=!1;function a_(e,t=!1,n=!1){t&&_n(t);const{props:i,children:o}=e.vnode,s=ur(e);Vu(e,i,s,t),Wu(e,o,n||t);const r=s?l_(e,t):void 0;return t&&_n(!1),r}function l_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ru);const{setup:i}=n;if(i){ct();const o=e.setupContext=i.length>1?u_(e):null,s=Tn(e),r=kn(i,e,0,[e.props,o]),c=ss(r);if(at(),s(),(c||e.sp)&&!on(e)&&Bs(e),c){if(r.then(Po,Po),t)return r.then(a=>{_n(!0);try{Oo(e,a,t)}finally{_n(!1)}}).catch(a=>{Xn(a,e,0)});e.asyncDep=r}else Oo(e,r)}else _r(e)}function Oo(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:X(t)&&(e.setupState=ws(t)),_r(e)}function _r(e,t,n){const i=e.type;e.render||(e.render=i.render||Xe);{const o=Tn(e);ct();try{Su(e)}finally{at(),o()}}}const p_={get(e,t){return ye(e,"get",""),e[t]}};function u_(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,p_),slots:e.slots,emit:e.emit,expose:t}}function ni(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ws(Zp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in sn)return sn[n](e)},has(t,n){return n in t||n in sn}})):e.proxy}function __(e){return G(e)&&"__vccOpts"in e}const oe=(e,t)=>nu(e,t,dn),d_="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ei;const wo=typeof window<"u"&&window.trustedTypes;if(wo)try{Ei=wo.createPolicy("vue",{createHTML:e=>e})}catch{}const dr=Ei?e=>Ei.createHTML(e):e=>e,f_="http://www.w3.org/2000/svg",g_="http://www.w3.org/1998/Math/MathML",it=typeof document<"u"?document:null,Ro=it&&it.createElement("template"),m_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?it.createElementNS(f_,e):t==="mathml"?it.createElementNS(g_,e):n?it.createElement(e,{is:n}):it.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Ro.innerHTML=dr(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const c=Ro.content;if(i==="svg"||i==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_t="transition",zt="animation",jt=Symbol("_vtc"),fr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},h_=ue({},mu,fr),Tt=(e,t=[])=>{N(e)?e.forEach(n=>n(...t)):e&&e(...t)},So=e=>e?N(e)?e.some(t=>t.length>1):e.length>1:!1;function v_(e){const t={};for(const w in e)w in fr||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=s,appearActiveClass:u=r,appearToClass:p=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=e,B=x_(o),T=B&&B[0],$=B&&B[1],{onBeforeEnter:U,onEnter:S,onEnterCancelled:V,onLeave:R,onLeaveCancelled:W,onBeforeAppear:ce=U,onAppear:fe=S,onAppearCancelled:ge=V}=t,E=(w,J,me,et)=>{w._enterCancelled=et,dt(w,J?p:c),dt(w,J?u:r),me&&me()},F=(w,J)=>{w._isLeaving=!1,dt(w,d),dt(w,k),dt(w,m),J&&J()},K=w=>(J,me)=>{const et=w?fe:S,_e=()=>E(J,w,me);Tt(et,[J,_e]),Eo(()=>{dt(J,w?a:s),Ye(J,w?p:c),So(et)||Co(J,i,T,_e)})};return ue(t,{onBeforeEnter(w){Tt(U,[w]),Ye(w,s),Ye(w,r)},onBeforeAppear(w){Tt(ce,[w]),Ye(w,a),Ye(w,u)},onEnter:K(!1),onAppear:K(!0),onLeave(w,J){w._isLeaving=!0;const me=()=>F(w,J);Ye(w,d),w._enterCancelled?(Ye(w,m),Ci(w)):(Ci(w),Ye(w,m)),Eo(()=>{w._isLeaving&&(dt(w,d),Ye(w,k),So(R)||Co(w,i,$,me))}),Tt(R,[w,me])},onEnterCancelled(w){E(w,!1,void 0,!0),Tt(V,[w])},onAppearCancelled(w){E(w,!0,void 0,!0),Tt(ge,[w])},onLeaveCancelled(w){F(w),Tt(W,[w])}})}function x_(e){if(e==null)return null;if(X(e))return[gi(e.enter),gi(e.leave)];{const t=gi(e);return[t,t]}}function gi(e){return bp(e)}function Ye(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[jt]||(e[jt]=new Set)).add(t)}function dt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[jt];n&&(n.delete(t),n.size||(e[jt]=void 0))}function Eo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let k_=0;function Co(e,t,n,i){const o=e._endId=++k_,s=()=>{o===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:r,timeout:c,propCount:a}=gr(e,t);if(!r)return i();const u=r+"end";let p=0;const d=()=>{e.removeEventListener(u,m),s()},m=k=>{k.target===e&&++p>=a&&d()};setTimeout(()=>{p<a&&d()},c+1),e.addEventListener(u,m)}function gr(e,t){const n=window.getComputedStyle(e),i=B=>(n[B]||"").split(", "),o=i(`${_t}Delay`),s=i(`${_t}Duration`),r=Io(o,s),c=i(`${zt}Delay`),a=i(`${zt}Duration`),u=Io(c,a);let p=null,d=0,m=0;t===_t?r>0&&(p=_t,d=r,m=s.length):t===zt?u>0&&(p=zt,d=u,m=a.length):(d=Math.max(r,u),p=d>0?r>u?_t:zt:null,m=p?p===_t?s.length:a.length:0);const k=p===_t&&/\b(?:transform|all)(?:,|$)/.test(i(`${_t}Property`).toString());return{type:p,timeout:d,propCount:m,hasTransform:k}}function Io(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>$o(n)+$o(e[i])))}function $o(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ci(e){return(e?e.ownerDocument:document).body.offsetHeight}function y_(e,t,n){const i=e[jt];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Mo=Symbol("_vod"),mr=Symbol("_vsh"),T_=Symbol(""),A_=/(?:^|;)\s*display\s*:/;function b_(e,t,n){const i=e.style,o=re(n);let s=!1;if(n&&!o){if(t)if(re(t))for(const r of t.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&Zt(i,c,"")}else for(const r in t)n[r]==null&&Zt(i,r,"");for(const r in n){r==="display"&&(s=!0);const c=n[r];c!=null?P_(e,r,!re(t)&&t?t[r]:void 0,c)||Zt(i,r,c):Zt(i,r,"")}}else if(o){if(t!==n){const r=i[T_];r&&(n+=";"+r),i.cssText=n,s=A_.test(n)}}else t&&e.removeAttribute("style");Mo in e&&(e[Mo]=s?i.display:"",e[mr]&&(i.display="none"))}const No=/\s*!important$/;function Zt(e,t,n){if(N(n))n.forEach(i=>Zt(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=L_(e,t);No.test(n)?e.setProperty(St(i),n.replace(No,""),"important"):e[i]=n}}const Do=["Webkit","Moz","ms"],mi={};function L_(e,t){const n=mi[t];if(n)return n;let i=Me(t);if(i!=="filter"&&i in e)return mi[t]=i;i=as(i);for(let o=0;o<Do.length;o++){const s=Do[o]+i;if(s in e)return mi[t]=s}return t}function P_(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&re(i)&&n===i}const Fo="http://www.w3.org/1999/xlink";function Bo(e,t,n,i,o,s=Sp(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Fo,t.slice(6,t.length)):e.setAttributeNS(Fo,t,n):n==null||s&&!ps(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ze(n)?String(n):n)}function Ho(e,t,n,i,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?dr(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ps(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function $t(e,t,n,i){e.addEventListener(t,n,i)}function O_(e,t,n,i){e.removeEventListener(t,n,i)}const jo=Symbol("_vei");function w_(e,t,n,i,o=null){const s=e[jo]||(e[jo]={}),r=s[t];if(i&&r)r.value=i;else{const[c,a]=E_(t);if(i){const u=s[t]=$_(i,o);$t(e,c,u,a)}else r&&(O_(e,c,r,a),s[t]=void 0)}}const R_=/(Once|Passive|Capture)$/,S_=/^on:?(?:Once|Passive|Capture)$/;function E_(e){let t,n;for(;(n=e.match(R_))&&!S_.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let hi=0;const C_=Promise.resolve(),I_=()=>hi||(C_.then(()=>hi=0),hi=Date.now());function $_(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const o=n.value;if(N(o)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const r=o.slice(),c=[i];for(let a=0;a<r.length&&!i._stopped;a++){const u=r[a];u&&$e(u,t,5,c)}}else $e(o,t,5,[i])};return n.value=e,n.attached=I_(),n}const Go=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,M_=(e,t,n,i,o,s)=>{const r=o==="svg";t==="class"?y_(e,i,r):t==="style"?b_(e,n,i):Yn(t)?Kn(t)||w_(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):N_(e,t,i,r))?(Ho(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Bo(e,t,i,r,s,t!=="value")):e._isVueCE&&(D_(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!re(i)))?Ho(e,Me(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Bo(e,t,i,r))};function N_(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Go(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Go(t)&&re(n)?!1:t in e}function D_(e,t){const n=e._def.props;if(!n)return!1;const i=Me(t);return Array.isArray(n)?n.some(o=>Me(o)===i):Object.keys(n).some(o=>Me(o)===i)}const hr=new WeakMap,vr=new WeakMap,Gn=Symbol("_moveCb"),Uo=Symbol("_enterCb"),F_=e=>(delete e.props.mode,e),B_=F_({name:"TransitionGroup",props:ue({},h_,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=pr(),i=gu();let o,s;return js(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!V_(o[0].el,n.vnode.el,r)){o=[];return}o.forEach(j_),o.forEach(G_);const c=o.filter(U_);Ci(n.vnode.el),c.forEach(a=>{const u=a.el,p=u.style;Ye(u,r),p.transform=p.webkitTransform=p.transitionDuration="";const d=u[Gn]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[Gn]=null,dt(u,r))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const r=q(e),c=v_(r);let a=r.tag||xe;if(o=[],s)for(let u=0;u<s.length;u++){const p=s[u];p.el&&p.el instanceof Element&&!p.el[mr]&&(o.push(p),pn(p,Pi(p,c,i,n)),hr.set(p,xr(p.el)))}s=t.default?Fs(t.default()):[];for(let u=0;u<s.length;u++){const p=s[u];p.key!=null&&pn(p,Pi(p,c,i,n))}return Se(a,null,s)}}}),H_=B_;function j_(e){const t=e.el;t[Gn]&&t[Gn](),t[Uo]&&t[Uo]()}function G_(e){vr.set(e,xr(e.el))}function U_(e){const t=hr.get(e),n=vr.get(e),i=t.left-n.left,o=t.top-n.top;if(i||o){const s=e.el,r=s.style,c=s.getBoundingClientRect();let a=1,u=1;return s.offsetWidth&&(a=c.width/s.offsetWidth),s.offsetHeight&&(u=c.height/s.offsetHeight),(!Number.isFinite(a)||a===0)&&(a=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(a-1)<.01&&(a=1),Math.abs(u-1)<.01&&(u=1),r.transform=r.webkitTransform=`translate(${i/a}px,${o/u}px)`,r.transitionDuration="0s",e}}function xr(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function V_(e,t,n){const i=e.cloneNode(),o=e[jt];o&&o.forEach(c=>{c.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(c=>c&&i.classList.add(c)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=gr(i);return s.removeChild(i),r}const Vo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>Sn(t,n):t};function Y_(e){e.target.composing=!0}function Yo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const wn=Symbol("_assign"),Rn=Symbol("_initialValue");function vi(e,t,n){return t&&(e=e.trim()),n&&(e=Hi(e)),e}const K_={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e.parentNode&&(e.type==="text"?e[Rn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Rn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[wn]=Vo(o);const s=i||o.props&&o.props.type==="number";$t(e,t?"change":"input",r=>{r.target.composing||e[wn](vi(e.value,n,s))}),(n||s)&&$t(e,"change",()=>{e.value=vi(e.value,n,s)}),t||($t(e,"compositionstart",Y_),$t(e,"compositionend",Yo),$t(e,"change",Yo))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const o=t??"",s=e[Rn];delete e[Rn],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[wn](vi(e.value,n,i)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:o,number:s}},r){if(e[wn]=Vo(r),e.composing)return;const c=(s||e.type==="number")&&!/^0\d/.test(e.value)?Hi(e.value):e.value,a=t??"";if(c===a)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(i&&t===n||o&&e.value.trim()===a)||(e.value=a)}},q_=["ctrl","shift","alt","meta"],W_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>q_.some(n=>e[`${n}Key`]&&!t.includes(n))},Ko=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(o,...s)=>{for(let r=0;r<t.length;r++){const c=W_[t[r]];if(c&&c(o,t))return}return e(o,...s)})},z_=ue({patchProp:M_},m_);let qo;function J_(){return qo||(qo=Ju(z_))}const X_=(...e)=>{const t=J_().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=Q_(i);if(!o)return;const s=t._component;!G(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,Z_(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function Z_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Q_(e){return re(e)?document.querySelector(e):e}const fn={MIN:0,MAX:100},rn={BASE_DECAY:3,PRESSURE_COEF:2,RECORDER_RELIEF:3,INITIATIVE_COST_BASE:1,INITIATIVE_COST_STEP:1},$n={T1:50,T2:30,T3:15},Wo={DEFAULT:8,PANIC:4},Ii={DESTROY_EVIDENCE_CAP:-20,HUSH_MONEY_EVIDENCE_CAP:30},xi={PLAYBOOK_EVIDENCE:5,NOTARY_RISK:-5,CALM_BREATH_COMPOSURE:30};function kr(e){return Math.min(fn.MAX,Math.max(fn.MIN,e))}function to(e){return{...e,flags:new Set(e.flags),items:new Set(e.items)}}function ed(e,t,n,i){let o=n;return t.items.has("item_calm_breathing")&&e.tag==="BREATH"&&(o={...o,composure:xi.CALM_BREATH_COMPOSURE}),t.items.has("item_hr_playbook")&&i===3&&e.initiative===3&&(o={...o,evidence:(o.evidence??0)+xi.PLAYBOOK_EVIDENCE}),t.items.has("item_notary_habit")&&i===4&&e.initiative===3&&(o={...o,risk:(o.risk??0)+xi.NOTARY_RISK}),o}function td(e){return e.tag==="PHYSICAL"?{forcedEnding:e.next}:null}function nd(e,t){switch(t){case"G_NEG_DESTROYED_EVIDENCE":e.evidenceCap=fn.MAX+Ii.DESTROY_EVIDENCE_CAP;break;case"G_NEG_HUSH_MONEY":e.evidence=Math.min(e.evidence,Ii.HUSH_MONEY_EVIDENCE_CAP);break}}function zo(e,t,n=1,i=0){const o=to(e),s=ed(t,o,t.effects??{},n),r=["evidence","opinion","composure","risk"];for(const c of r){const a=s[c];a!==void 0&&(o[c]+=a)}if(t.initiative>=2&&t.tag!=="BREATH"){const c=(t.initiative-1)*(rn.INITIATIVE_COST_BASE+rn.INITIATIVE_COST_STEP*Math.floor(i/2));o.composure-=c}o.evidence>o.evidenceCap&&(o.evidence=o.evidenceCap);for(const c of r)o[c]=kr(o[c]);for(const c of s.addFlags??[])o.flags.add(c),nd(o,c);for(const c of s.removeFlags??[])o.flags.delete(c);for(const c of s.addItems??[])o.items.add(c);return o.turn+=1,o}function id(e,t){const n=to(e),i=rn.BASE_DECAY+t.pressure*rn.PRESSURE_COEF,o=n.items.has("item_recorder")?rn.RECORDER_RELIEF:0;return n.composure=kr(n.composure-i+o),n}class ae extends Error{constructor(t){super(t),this.name="ContentError"}}function yr(e,t){return{evidence:e.evidence,opinion:e.opinion,composure:e.composure,risk:e.risk,dEvidence:e.evidence-t.evidence,dOpinion:e.opinion-t.opinion,dComposure:e.composure-t.composure,dRisk:e.risk-t.risk,flags:e.flags,items:e.items,turn:e.turn}}const od=new Set(["evidence","opinion","composure","risk","dEvidence","dOpinion","dComposure","dRisk","turn"]);function sd(e){const t=[];let n=0;for(;n<e.length;){const i=e[n];if(i===" "||i==="	"||i===`
`||i==="\r"){n+=1;continue}if(i>="0"&&i<="9"){let r=n;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:Number(e.slice(n,r))}),n=r;continue}if(/[A-Za-z_]/.test(i)){let r=n;for(;r<e.length&&/[A-Za-z0-9_]/.test(e[r]);)r+=1;t.push({t:"id",v:e.slice(n,r)}),n=r;continue}if(i==="'"||i==='"'){let r=n+1;for(;r<e.length&&e[r]!==i;)r+=1;if(r>=e.length)throw new ae(`unterminated string in condition: ${e}`);t.push({t:"str",v:e.slice(n+1,r)}),n=r+1;continue}const o=e.slice(n,n+2);if(o==="&&"||o==="||"||o===">="||o==="<="||o==="=="||o==="!="){t.push({t:"op",v:o}),n+=2;continue}const s=e[n+1];if(i==="-"&&s!==void 0&&s>="0"&&s<="9"&&(t.length===0||t[t.length-1].t==="op")){let r=n+1;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:-Number(e.slice(n+1,r))}),n=r;continue}if(i===">"||i==="<"||i==="!"||i==="("||i===")"){t.push({t:"op",v:i}),n+=1;continue}throw new ae(`illegal character '${i}' in condition: ${e}`)}return t}class rd{constructor(t){de(this,"pos",0);this.tokens=t}peek(){return this.tokens[this.pos]}next(){const t=this.tokens[this.pos];if(t===void 0)throw new ae("unexpected end of condition");return this.pos+=1,t}eatOp(t){const n=this.next();if(n.t!=="op"||n.v!==t)throw new ae(`expected '${t}', got '${n.t==="op"?n.v:n.t}'`)}parse(){const t=this.parseOr();if(this.pos!==this.tokens.length){const n=this.peek();throw new ae(`unexpected trailing token '${n?n.t==="op"?n.v:n.t:"?"}'`)}return t}parseOr(){let t=this.parseAnd();for(;this.matchOp("||");)t={kind:"binary",op:"||",left:t,right:this.parseAnd()};return t}parseAnd(){let t=this.parseCompare();for(;this.matchOp("&&");)t={kind:"binary",op:"&&",left:t,right:this.parseCompare()};return t}parseCompare(){const t=this.parseUnary(),n=this.peek();return n!==void 0&&n.t==="op"&&[">=",">","<=","<","==","!="].includes(n.v)?(this.pos+=1,{kind:"compare",op:n.v,left:t,right:this.parseUnary()}):t}parseUnary(){return this.matchOp("!")?{kind:"unary",op:"!",operand:this.parseUnary()}:this.parseAtom()}parseAtom(){const t=this.next();if(t.t==="num")return{kind:"num",value:t.v};if(t.t==="str")throw new ae("string literal only allowed as function argument");if(t.t==="op"&&t.v==="("){const n=this.parseOr();return this.eatOp(")"),n}if(t.t==="id"){if(t.v==="has"||t.v==="hasItem"){this.eatOp("(");const n=this.next();if(n.t!=="str")throw new ae(`'${t.v}' expects a quoted string argument`);return this.eatOp(")"),{kind:"call",fn:t.v,arg:n.v}}if(!od.has(t.v))throw new ae(`unknown identifier '${t.v}' in condition`);return{kind:"var",name:t.v}}throw new ae(`unexpected operator '${t.v}' in condition`)}matchOp(t){const n=this.peek();return n!==void 0&&n.t==="op"&&n.v===t?(this.pos+=1,!0):!1}}const Jo=new Map;function cd(e){const t=Jo.get(e);if(t!==void 0)return t;const n=new rd(sd(e)).parse();return Jo.set(e,n),n}function Mt(e,t){switch(e.kind){case"num":return e.value!==0;case"var":return Tr(e.name,t)!==0;case"call":return e.fn==="has"?t.flags.has(e.arg):t.items.has(e.arg);case"unary":return!Mt(e.operand,t);case"binary":return e.op==="&&"?Mt(e.left,t)&&Mt(e.right,t):Mt(e.left,t)||Mt(e.right,t);case"compare":{const n=Xo(e.left,t),i=Xo(e.right,t);switch(e.op){case">=":return n>=i;case">":return n>i;case"<=":return n<=i;case"<":return n<i;case"==":return n===i;case"!=":return n!==i}}}}function Xo(e,t){if(e.kind==="num")return e.value;if(e.kind==="var")return Tr(e.name,t);throw new ae("comparison operands must be numbers")}function Tr(e,t){switch(e){case"evidence":return t.evidence;case"opinion":return t.opinion;case"composure":return t.composure;case"risk":return t.risk;case"dEvidence":return t.dEvidence;case"dOpinion":return t.dOpinion;case"dComposure":return t.dComposure;case"dRisk":return t.dRisk;case"turn":return t.turn;default:throw new ae(`unknown identifier '${e}'`)}}function Ar(e,t){return e.trim()==="true"?!0:Mt(cd(e),t)}function ad(e){return e<$n.T3||e<$n.T2?2:e<$n.T1?1:0}function ld(e,t){const n=i=>{let o=0;const s=`${t}/${i}`;for(let r=0;r<s.length;r+=1)o=Math.imul(o,31)+s.charCodeAt(r)|0;return(o>>>1&2147483647)/2147483648};return[...e].sort((i,o)=>n(i.id)-n(o.id))}function Zo(e,t,n=new Set){const i=e.options.filter(c=>c.oncePerNode===!0&&n.has(c.id)?!1:c.requires===void 0?!0:Ar(c.requires,yr(t,pd))),o=ad(t.composure),r=e.impulsePool.filter(c=>t.composure<c.unlockBelow).slice(0,o);return ld([...i,...r],e.id)}const pd={evidence:0,opinion:0,composure:0,risk:0};function ud(e,t){return t.composure<$n.T3?Wo.PANIC:e.timer??Wo.DEFAULT}function _d(e,t,n){if(t.flags.has("FORCED_F")){const o=e.endings.find(s=>s.condition==="FORCED");if(o===void 0)throw new ae(`level ${e.id} has FORCED_F state but no FORCED ending`);return o}const i=yr(t,n);for(const o of e.endings)if(o.condition!=="FORCED"&&Ar(o.condition,i))return o;throw new ae(`level ${e.id}: no ending condition matched (missing 'true' fallback?)`)}const dd="__END__";function ki(e){return e.type==="choice"}class no{constructor(t,n){de(this,"nodeMap");de(this,"endingMap");de(this,"initMeter");de(this,"current");de(this,"currentNodeId");de(this,"usedThisVisit",new Set);this.level=t,this.nodeMap=new Map(t.nodes.map(i=>[i.id,i])),this.endingMap=new Map(t.endings.map(i=>[i.id,i])),this.initMeter=t.initState,this.current=this.buildInitialState(n),this.currentNodeId=t.entryNode}buildInitialState(t){const n=new Set([...t.flags].filter(s=>s.startsWith("G_"))),i=n.has("G_NEG_DESTROYED_EVIDENCE")?fn.MAX+Ii.DESTROY_EVIDENCE_CAP:fn.MAX,o=n.has("G_NEG_ASSAULT")?15:0;return{evidence:this.level.initState.evidence,opinion:this.level.initState.opinion,composure:this.level.initState.composure,risk:this.level.initState.risk+o,flags:n,items:new Set(t.items),turn:0,evidenceCap:i}}get state(){return this.current}start(){return this.advanceFrom(this.currentNodeId)}choose(t){const n=this.getNode(this.currentNodeId);if(!ki(n))throw new ae(`choose() called on non-choice node ${n.id} in level ${this.level.id}`);const o=Zo(n,this.current,this.usedThisVisit).find(s=>s.id===t);if(o===void 0)throw new ae(`option '${t}' not available at node ${n.id} (level ${this.level.id})`);return this.applyChoice(n,o)}timeout(){const t=this.getNode(this.currentNodeId);if(!ki(t))throw new ae(`timeout() called on non-choice node ${t.id} in level ${this.level.id}`);const n=t.options.find(i=>i.id===t.timeoutOption);if(n===void 0)throw new ae(`timeoutOption '${t.timeoutOption}' not found in node ${t.id}`);return this.applyChoice(t,n)}getNode(t){const n=this.nodeMap.get(t);if(n===void 0)throw new ae(`node not found: ${t} (level ${this.level.id})`);return n}applyChoice(t,n){const i=td(n);return i!==null?(this.current=zo(this.current,n,this.level.act,t.pressure),this.current.flags.add("FORCED_F"),this.current.flags.add("G_NEG_ASSAULT"),this.finishWith(i.forcedEnding)):(n.oncePerNode===!0&&this.usedThisVisit.add(n.id),this.current=zo(this.current,n,this.level.act,t.pressure),this.current=id(this.current,t),this.advanceFrom(n.next))}advanceFrom(t){if(t===dd)return this.finishWith(null);let n=t;for(let i=0;i<fd;i+=1){const o=this.endingMap.get(n);if(o!==void 0)return this.finishWith(o.id);const s=this.getNode(n);return ki(s)?(n!==this.currentNodeId&&(this.usedThisVisit=new Set),this.currentNodeId=s.id,{type:"options",options:Zo(s,this.current,this.usedThisVisit),timer:ud(s,this.current),timeoutOptionId:s.timeoutOption}):(this.currentNodeId=s.id,{type:"node",node:s})}throw new ae(`node chain too deep at ${n} (level ${this.level.id})`)}proceed(){const t=this.getNode(this.currentNodeId);if(t.next===void 0)throw new ae(`node ${t.id} has no next (level ${this.level.id})`);return this.advanceFrom(t.next)}finishWith(t){const n=t!==null?this.endingMap.get(t):void 0;if(t!==null&&n===void 0)throw new ae(`ending not found: ${t} (level ${this.level.id})`);const i=to(this.current);return{type:"ending",ending:n!==void 0?n:_d(this.level,this.current,this.initMeter),state:i}}static simulate(t,n,i){const o=new no(t,n);let s=o.start(),r=0;for(;;){if(s.type==="ending")return{rank:s.ending.rank,state:s.state};if(s.type==="node"){s=o.proceed();continue}if(s.type==="options"){const c=i[r];if(r+=1,c===void 0)throw new ae(`simulate path exhausted at node in level ${t.id}`);s=o.choose(c);continue}}}}const fd=200,br="poju_shilu_save_v1";function Qo(){return{version:1,flags:[],items:[],levelResults:{},cards:[],settings:{mode:"NORMAL",sound:!0}}}const Un=globalThis.localStorage,Lr=typeof Un<"u"&&Un!==null;function gd(){if(!Lr)return Qo();const e=Un.getItem(br);return e===null?Qo():JSON.parse(e)}function md(e){Lr&&Un.setItem(br,JSON.stringify(e))}const hd={L01:{flag:"G_EV_SUBWAY",minRank:["S","A"]},L02:{flag:"G_EV_ELEVATOR",minRank:["S","A"]},L03:{flag:"G_EV_MALL",minRank:["S","A"]},L04:{flag:"G_EV_NIGHTWALK",minRank:["S","A"]},L05:{flag:"G_EV_GYM",minRank:["S","A"]},L06:{flag:"G_EV_BETROTHAL",minRank:["S","A"]},L07:{flag:"G_EV_TRANSFER",minRank:["S","A"]},L08:{flag:"G_EV_PATERNITY",minRank:["S","A"]},L09:{flag:"G_EV_PRESERVATION",minRank:["S","A"]},L10:{flag:"G_EV_PROTECTION_ORDER",minRank:["S","A"]},L11:{flag:"G_EV_HR_WRITTEN",minRank:["S","A"]},L12:{flag:"G_EV_EMAIL_CHAIN",minRank:["S","A"]},L13:{flag:"G_EV_FULL_AUDIO",minRank:["S","A"]},L14:{flag:"G_EV_SUSPENSION",minRank:["S","A"]},L15:{flag:"G_EV_EXTORTION",minRank:["S","A"]},L16:{flag:"G_EV_ORIGINAL_CLIP",minRank:["S","A"]},L17:{flag:"G_EV_DOXX_NOTARY",minRank:["S","A"]},L18:{flag:"G_EV_LIVE_RECORD",minRank:["S","A"]},L19:{flag:"G_EV_PLATFORM",minRank:["S","A"]}},vd={L02:"G_NEG_DESTROYED_EVIDENCE",L07:"G_NEG_HUSH_MONEY",L10:"L10_VIOLATED",L13:"G_NEG_APOLOGY_LETTER",L17:"G_NEG_DOXXED_BACK"};function xd(e,t){switch(e){case"L01":return t==="S"||t==="A"?["item_recorder"]:[];case"L02":return["item_shen_card"];case"L08":return t==="S"?["item_calm_breathing"]:[];case"L11":return t==="S"||t==="A"?["item_hr_playbook"]:[];case"L16":return t==="S"||t==="A"?["item_notary_habit"]:[];default:return[]}}function kd(e,t,n,i,o){const s={...e,flags:[...e.flags],items:[...e.items],levelResults:{...e.levelResults},cards:[...e.cards]},r=new Set(s.flags);for(const d of i.flags)d.startsWith("G_")&&r.add(d);const c=hd[t];if(c!==void 0&&c.minRank.includes(n.rank)){const d=vd[t];d!==void 0&&(r.has(d)||i.flags.has(d))||r.add(c.flag)}const a=xd(t,n.rank),u=new Set(s.items);for(const d of a)u.add(d);n.unlock!==void 0&&!s.cards.includes(n.unlock)&&s.cards.push(n.unlock);const p=o==null?void 0:o.now;return s.levelResults[t]={rank:n.rank,endingId:n.id,ts:p},s.flags=[...r].filter(d=>d.startsWith("G_")),s.items=[...u],s}const Pr="L01",Or="第01关 · 地铁三分钟",wr=1,Rr={evidence:20,opinion:50,composure:80,risk:10},Sr=["hero","npc_l01_woman","crowd","officer_lin"],Er="n_01",Cr="card_law_L01",Ir=["T1","T2"],$r=[{id:"n_01",type:"cutscene",pressure:1,script:`三点十四分，三号线。车厢是满的，不算挤。
列车进站前一次急刹，所有人往前倾了半步。
你的手一直在门边的扶杆上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l01_woman",emotion:"shout",text:"谁摸我？！——就是你。你别动。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"半节车厢的人都转过头了。她的手指停在离你鼻尖十公分的地方。",timer:8,timeoutOption:"opt_freeze",options:[{id:"opt_hands_up",text:"（把双手举到胸前）我的手一直在扶杆上。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:-5,risk:-10,addFlags:["L01_HANDS_VISIBLE"]},next:"n_04"},{id:"opt_explain",text:"你误会了，刚才急刹车，大家都往前挤——",tag:"NEUTRAL",aggression:1,initiative:1,effects:{evidence:5,opinion:-5,composure:-10,risk:10},next:"n_04"},{id:"opt_freeze",text:"（愣住了，一个字也说不出来）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-5,opinion:-15,composure:-15,risk:10},next:"n_04"},{id:"opt_leave",text:"（转身往车门那边走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-20,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（手机一部接一部举起来了。有人小声说：拍下来拍下来。）",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"她压低了声音，只有你们两个人听得见：「私了。两万。不然我现在就报警。」",timer:8,timeoutOption:"opt_hesitate",options:[{id:"opt_call_first",text:"（掏出手机）110 吗，三号线车厢，有人指认我。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10,addFlags:["L01_CALLED_POLICE_FIRST"]},next:"n_06"},{id:"opt_agree_police",text:"行，你报。我在这儿等着，哪儿也不去。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:10,opinion:10,composure:5,risk:-5},next:"n_06"},{id:"opt_pay",text:"两万是吧。我转你，别闹了。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:15,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06"},{id:"opt_hesitate",text:"……能不能少点？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-20,composure:-10,risk:15},next:"n_06"}],impulsePool:[{id:"imp_curse_01",text:"你他妈讹上瘾了是吧。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_06"}]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l01_woman",emotion:"perform",text:"（转向车厢，音量陡然拔高）大家都看看啊！他还想跑！",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她一句话说三遍，每一遍都对着不同的镜头。",timer:8,timeoutOption:"opt_pay_now",options:[{id:"opt_refuse_settle",text:"不私了。等民警来，该怎么查怎么查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,risk:-10},next:"n_08"},{id:"opt_ask_price",text:"你刚才说多少来着？大点声，我这边在录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:-5,composure:-5,risk:5,addFlags:["L01_PRICE_ON_RECORD"]},next:"n_08"},{id:"opt_pay_now",text:"（点开转账页面）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:10,risk:20,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_08"},{id:"opt_mock",text:"两万？你这价开得挺熟啊。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-15,composure:-5,risk:15},next:"n_08"}],impulsePool:[{id:"imp_curse_02",text:"你演够了没有？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08"},{id:"imp_shove_07",text:"（一把推开她举着的手机）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:5,speaker:"npc_l01_woman",emotion:"perform",text:"（举起手机怼到你脸前）你看镜头。你敢不敢看镜头。",next:"n_09"},{id:"n_09",type:"choice",pressure:5,prompt:"镜头离你的脸不到二十公分。车厢里已经有人开了直播。",timer:8,timeoutOption:"opt_silent",options:[{id:"opt_let_her_talk",text:"你把刚才那个数字，对着镜头再说一遍。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:10,opinion:20,composure:5,risk:-5},next:"n_10"},{id:"opt_silent",text:"（不说话。站在原地，录音开着）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_10"},{id:"opt_appeal_crowd",text:"大家都听到了！她一直在管我要钱！",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-10,composure:-10,risk:10},next:"n_10"},{id:"opt_block_camera",text:"（伸手去挡她的镜头）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_10"},{id:"opt_breath_l01",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_shout_09",text:"你他妈到底想干什么！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_shove_09",text:"（一把推开她）",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:3,script:`列车停在站台上没有再走。
两名民警从车头方向挤过来。走在前面的那位胸前的执法记录仪亮着红灯。
「都别动。谁报的警？」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭翻开笔录本，笔尖悬在纸上。她看着你，也看着她，眼神完全一样。",timer:8,timeoutOption:"opt_emotional",options:[{id:"opt_demand_footage",text:"麻烦先调这节车厢的监控，越快越好。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:5,risk:-5,addFlags:["L01_DEMANDED_FOOTAGE"]},next:"n_12"},{id:"opt_factual",text:"三点十四分上车，一直站在门边扶杆。有监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:5,composure:10,risk:-10},next:"n_12"},{id:"opt_accuse",text:"你们先查她。她刚才管我要两万。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:5,opinion:-10,composure:-5,risk:10},next:"n_12"},{id:"opt_emotional",text:"我真没有！你们要相信我啊！",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-5,opinion:-10,composure:-10,risk:5},next:"n_12"}],impulsePool:[{id:"imp_shove_11",text:"（冲上去抓她）你跟警察说清楚！",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`站务室。屏幕上是三号线中部车厢的俯视角。
林昭把进度条往回拖了三分钟。`,next:"__END__"}],Mr=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 互殴",script:`你的手推在她身上。她后退半步，尖叫。
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
标题里有你公司的名字。`}],yd={id:Pr,title:Or,act:wr,initState:Rr,cast:Sr,entryNode:Er,lawyerCard:Cr,satireTargets:Ir,nodes:$r,endings:Mr},Td=Object.freeze(Object.defineProperty({__proto__:null,act:wr,cast:Sr,default:yd,endings:Mr,entryNode:Er,id:Pr,initState:Rr,lawyerCard:Cr,nodes:$r,satireTargets:Ir,title:Or},Symbol.toStringTag,{value:"Module"})),Nr="L02",Dr="第02关 · 电梯里的镜头",Fr=1,Br={evidence:25,opinion:45,composure:75,risk:10},Hr=["hero","npc_l02_woman","crowd","shen_li","officer_lin"],jr="n_01",Gr="card_law_L02",Ur=["T1","T2"],Vr=[{id:"n_01",type:"cutscene",pressure:1,script:`写字楼，十八层下行。
电梯里六个人。你刚把手机从口袋里摸出来看时间。
数字停在 18:41。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l02_woman",emotion:"cold",text:"你刚才，是不是在拍我。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"电梯还有九层。另外四个人都低头看着自己的鞋。",timer:8,timeoutOption:"opt_hand_over",options:[{id:"opt_show_lock",text:"（把手机举起，屏幕朝外）锁屏的。我不解锁。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_deny_calm",text:"没有。我拿出来看时间。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:-5,risk:-5},next:"n_04"},{id:"opt_annoyed",text:"你说话过过脑子。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"},{id:"opt_hand_over",text:"（把手机直接递过去）你自己看。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:5,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（电梯到一层。门开了，前台和几个等电梯的人转过头来。没人出去。）",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她挡在门口：「解锁给我看。不然我现在就报警。」",timer:8,timeoutOption:"opt_unlock",options:[{id:"opt_refuse_search",text:"解锁不行。你要报警现在就报，手机一直在我手上。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15,addFlags:["L02_REFUSED_SEARCH"]},next:"n_06"},{id:"opt_call_self",text:"（自己拨号）110 吗，这边有个纠纷。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_06"},{id:"opt_unlock",text:"（解锁递过去）看吧，我没什么好藏的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:15},next:"n_06"},{id:"opt_delete",text:"（当场删掉相册最近几张）删了，行了吧。",tag:"DESTROY_EVIDENCE",aggression:0,initiative:1,effects:{evidence:-30,opinion:-15,composure:5,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE"]},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l02_woman",emotion:"calm_press",text:"你越是不给看，越说明有问题。你在怕什么？",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她说得很慢，很平静。大堂里已经站了十几个人。",timer:8,timeoutOption:"opt_over_explain",options:[{id:"opt_refuse_frame",text:"这个问题我不回答。等民警来，当他面查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_08"},{id:"opt_silent_wait",text:"（不接话，站着等）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-5},next:"n_08"},{id:"opt_counter",text:"你凭什么怀疑我？你有证据吗？",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_08"},{id:"opt_over_explain",text:"我真没拍！我可以发誓！我平时根本不……",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-15,composure:-10,risk:5},next:"n_08"},{id:"opt_breath_l02",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l02",text:"你他妈有完没完。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"}]},{id:"n_08",type:"cutscene",pressure:3,script:`一个穿深色西装的女人从旋转门进来，脚步慢下来，看了两秒。
她走过来，从名片夹里抽出一张，递给你。
「沈骊。十一楼，律所。需要的话叫我一声。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"名片停在你和她之间。对方的表情第一次有了变化。",timer:8,timeoutOption:"opt_take_card",options:[{id:"opt_accept_help",text:"麻烦您。等民警来的时候，能请您在场吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:10,composure:15,risk:-10},next:"n_10"},{id:"opt_take_card",text:"（接过名片）谢谢。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:5,composure:10,risk:-5},next:"n_10"},{id:"opt_refuse_help",text:"不用了，我自己能说清楚。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-10,opinion:-5,composure:-5,risk:10},next:"n_10"},{id:"opt_vent",text:"您评评理，这不是讹人吗！",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:10},next:"n_10"}],impulsePool:[{id:"imp_shove_l02",text:"（伸手去推开挡在门口的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`民警来了。查验在两个人面前进行：相册按时间倒序翻，最近一张是三天前的猫。
执法记录仪红灯亮着。
她往门口挪了半步。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭抬头：「查验完了。双方还有什么要说的？」",timer:8,timeoutOption:"opt_let_go",options:[{id:"opt_request_record",text:"麻烦把查验结果写进笔录。她刚才的话我也录了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-10},next:"n_12"},{id:"opt_factual_02",text:"我没别的要求，按流程走就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:10,risk:-5},next:"n_12"},{id:"opt_demand_apology",text:"她得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_12"},{id:"opt_let_go",text:"算了，查清楚就行，让她走吧。",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:5,risk:10},next:"n_12"}],impulsePool:[{id:"imp_shove_l02b",text:"（一把拽住要走的她）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`大堂的人散了。你低头看手里那张名片。
烫金的字，边角很硬。`,next:"__END__"}],Yr=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你先动的手",script:`大堂的监控拍得很清楚：她站着，你伸的手。

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

没什么——是这世上最没用的一句辩解。`,unlock:"card_L02_F"}],Ad={id:Nr,title:Dr,act:Fr,initState:Br,cast:Hr,entryNode:jr,lawyerCard:Gr,satireTargets:Ur,nodes:Vr,endings:Yr},bd=Object.freeze(Object.defineProperty({__proto__:null,act:Fr,cast:Hr,default:Ad,endings:Yr,entryNode:jr,id:Nr,initState:Br,lawyerCard:Gr,nodes:Vr,satireTargets:Ur,title:Dr},Symbol.toStringTag,{value:"Module"})),Kr="L03",qr="第03关 · 爸爸和女儿",Wr=1,zr={evidence:15,opinion:25,composure:60,risk:30},Jr=["hero","npc_l03_daughter","npc_l03_woman","crowd","officer_lin"],Xr="n_01",Zr="card_law_L03",Qr=["T1","T2","T3"],ec=[{id:"n_01",type:"cutscene",pressure:1,script:`周六下午，商场三楼，玩具区门口。
六岁的陈念看上了一个娃娃，你说家里已经有三个了。
她把手从你手里抽出来，坐在地上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l03_daughter",emotion:"cry",text:"我不要跟你走！",next:"n_03"},{id:"n_03",type:"dialogue",pressure:3,speaker:"npc_l03_woman",emotion:"alarmed",text:"（挡在你和孩子中间）这是你孩子吗？",next:"n_04"},{id:"n_04",type:"choice",pressure:3,prompt:"她的手已经搭在陈念肩上。周围三四个人停下了脚步。",timer:8,timeoutOption:"opt_pull_away",options:[{id:"opt_squat_down",text:"（蹲下来看着女儿）爸爸在这儿。你跟阿姨说，我是谁？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_05"},{id:"opt_show_id",text:"（掏手机）出生证明照片在这儿，户口本也有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_05"},{id:"opt_annoyed",text:"关你什么事？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_05"},{id:"opt_pull_away",text:"（拉起女儿快步往扶梯走）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-25,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_05"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（两个男人站到了扶梯口。有人说：先别让他走。）",next:"n_06"},{id:"n_06",type:"choice",pressure:4,prompt:"十几个人围了过来。陈念还在哭，声音更大了。",timer:8,timeoutOption:"opt_push_through",options:[{id:"opt_call_police_self",text:"（拨号，开免提）我在商场三楼，有人认为我拐孩子，请你们来。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5,addFlags:["L03_CALLED_POLICE_FIRST"]},next:"n_07"},{id:"opt_call_wife",text:"（给孩子妈妈打视频，把镜头对准女儿）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-5},next:"n_07"},{id:"opt_stay_put",text:"我不走。我在这儿等警察。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:15,composure:5,risk:-5},next:"n_07"},{id:"opt_push_through",text:"（抱起孩子往人群外挤）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_07"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:5,speaker:"crowd",emotion:"neutral",text:"（七八部手机举起来。有人喊：录下来，别让他跑了！）",next:"n_08"},{id:"n_08",type:"choice",pressure:5,prompt:"陈念被人群吓到了，扑过来抱住你的腿，哭得喘不上气。",timer:8,timeoutOption:"opt_beg",options:[{id:"opt_hold_child",text:"（把她抱起来，背对人群）不怕。爸爸在这儿，哪儿也不去。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:10,opinion:20,composure:15,risk:-10},next:"n_09"},{id:"opt_let_record",text:"都拍。从头拍，别剪。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_09"},{id:"opt_beg",text:"求求你们，这真是我女儿，你们别吓着她……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-10,composure:-15,risk:10},next:"n_09"},{id:"opt_yell",text:"你们谁敢碰我孩子！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:20},next:"n_09"},{id:"opt_ally_l03",text:"（掏出那张名片，当场拨过去）沈律师，我在商场三楼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09"}],impulsePool:[{id:"imp_shove_l03",text:"（推开堵在扶梯口的那个人）让开。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"dialogue",pressure:5,speaker:"npc_l03_woman",emotion:"firm",text:"孩子自己说的不要跟你走。这么多人都听见了。",next:"n_10"},{id:"n_10",type:"choice",pressure:5,prompt:"陈念的脸埋在你肩膀上，哭声闷成一团。她攥着你的衣领，攥得很紧。",timer:8,timeoutOption:"opt_defend",options:[{id:"opt_ask_daughter",text:"（低头）宝宝，你告诉阿姨——你为什么不要跟爸爸走？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_11"},{id:"opt_full_sentence",text:"她说的是：我不要跟你走，我要买那个娃娃。你们只听了半句。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:30,composure:5,risk:-10},next:"n_11"},{id:"opt_silent_hold",text:"（不说话，抱紧她，等警察）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:-10,risk:-5},next:"n_11"},{id:"opt_defend",text:"我说了这是我女儿！你们听不懂人话吗！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_11"},{id:"opt_breath_l03",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0}],impulsePool:[{id:"imp_shout_l03",text:"你们他妈的都给我滚开！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_11"},{id:"imp_shove_l03b",text:"（一把推开挡在前面的女人）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:3,script:`警察上来了。林昭走在前面，先看的是孩子。
「小朋友，别怕。阿姨问你一句话——」
她蹲下来，和陈念平视。
「抱着你的这个人，你认识吗？」`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"陈念从你肩膀上抬起头，眼睛肿着。整个三楼安静下来。",timer:8,timeoutOption:"opt_exhausted",options:[{id:"opt_provide_all",text:"户口本在手机里，孩子妈妈视频还连着，监控从玩具区调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-10},next:"n_13"},{id:"opt_factual_l03",text:"（把经过如实说了一遍，包括她为什么哭）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:5,risk:-5},next:"n_13"},{id:"opt_demand",text:"拦我那个人得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_13"},{id:"opt_exhausted",text:"（抱着孩子，一个字也说不出来）",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:-10,risk:10},next:"n_13"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`陈念指着玩具区的方向，抽噎着说了三个字。
那三个字很小，但离得近的人都听见了。`,next:"__END__"}],tc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 她摔在扶梯口",script:`你推开了挡路的人。人群晃了一下。
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
「有家长在群里传了个视频。」老师说得很委婉。`,unlock:"card_L03_F"}],Ld={id:Kr,title:qr,act:Wr,initState:zr,cast:Jr,entryNode:Xr,lawyerCard:Zr,satireTargets:Qr,nodes:ec,endings:tc},Pd=Object.freeze(Object.defineProperty({__proto__:null,act:Wr,cast:Jr,default:Ld,endings:tc,entryNode:Xr,id:Kr,initState:zr,lawyerCard:Zr,nodes:ec,satireTargets:Qr,title:qr},Symbol.toStringTag,{value:"Module"})),nc="L04",ic="第04关 · 深夜同行",oc=1,sc={evidence:20,opinion:35,composure:55,risk:35},rc=["hero","npc_l04_woman","officer_lin","crowd"],cc="n_01",ac="card_law_L04",lc=["T1","T3"],pc=[{id:"n_01",type:"cutscene",pressure:1,script:`十一点四十，出地铁 C 口。加了四个小时班，你只想快点到家。
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
多走了十一分钟。`,next:"__END__"}],uc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你推的是警察",script:`执法记录仪全程都在录。

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
而「我怕」这三个字，在笔录里从来不是一个能用的理由。`,unlock:"card_L04_F"}],Od={id:nc,title:ic,act:oc,initState:sc,cast:rc,entryNode:cc,lawyerCard:ac,satireTargets:lc,nodes:pc,endings:uc},wd=Object.freeze(Object.defineProperty({__proto__:null,act:oc,cast:rc,default:Od,endings:uc,entryNode:cc,id:nc,initState:sc,lawyerCard:ac,nodes:pc,satireTargets:lc,title:ic},Symbol.toStringTag,{value:"Module"})),_c="L05",dc="第05关 · 托杠铃的那一下",fc=1,gc={evidence:20,opinion:30,composure:50,risk:40},mc=["hero","npc_l05_woman","npc_l05_manager","npc_l05_witness","crowd"],hc="n_01",vc="card_law_L05",xc=["T1","T5"],kc=[{id:"n_01",type:"cutscene",pressure:1,script:`自由重量区，晚上八点半。
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
没有人过去。`,next:"__END__"}],yc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一巴掌",script:`手机摔在地胶上，屏幕裂成蛛网。

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
但没人会去分辨这个。`,unlock:"card_L05_F"}],Rd={id:_c,title:dc,act:fc,initState:gc,cast:mc,entryNode:hc,lawyerCard:vc,satireTargets:xc,nodes:kc,endings:yc},Sd=Object.freeze(Object.defineProperty({__proto__:null,act:fc,cast:mc,default:Rd,endings:yc,entryNode:hc,id:_c,initState:gc,lawyerCard:vc,nodes:kc,satireTargets:xc,title:dc},Symbol.toStringTag,{value:"Module"})),Tc="L06",Ac="第06关 · 三十八万八",bc=2,Lc={evidence:30,opinion:50,composure:48,risk:20},Pc=["hero","npc_l06_girlfriend","npc_l06_mother","crowd"],Oc="n_01",wc="card_law_L06",Rc=["T1","T3"],Sc=[{id:"n_01",type:"cutscene",pressure:1,script:`女方家客厅。茶几上摆着切好的果盘，没人动。
谈了三年，今天是第一次两家坐下来说结婚的事。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l06_mother",emotion:"matter_of_fact",text:"三十八万八，房本加名，车全款。这是行情，不是我要的。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"你家全部积蓄四十一万，是你爸的退休金。你妈在旁边搓着手。",timer:8,timeoutOption:"opt_agree_first",options:[{id:"opt_write_down",text:"这几条我记一下。数字和条件都写清楚，省得以后有出入。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_detail",text:"彩礼这笔钱，婚后是归我们小家，还是归您？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04"},{id:"opt_agree_first",text:"行，我想想办法。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-10,risk:20},next:"n_04"},{id:"opt_object",text:"这不是卖女儿吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l06_girlfriend",emotion:"hurt",text:"你是不是嫌我？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她眼睛红了。这三年她没跟你要过一件贵东西。",timer:8,timeoutOption:"opt_cave",options:[{id:"opt_equal_terms",text:"不嫌。钱我出，名我加。那也写一条：婚后共同还贷，离婚按出资分。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_separate",text:"我们俩的事，能不能我们俩先谈？",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:5,risk:-10},next:"n_06"},{id:"opt_hurt_l06",text:"谈钱的时候，你怎么不说爱不爱。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_06"},{id:"opt_cave",text:"不嫌不嫌，我砸锅卖铁也给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l06_mother",emotion:"cold",text:"共同还贷？那是你们小两口的事。我说的是彩礼，两码事。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"你妈的手在膝盖上攥紧了。她今天穿了压箱底那件衣服。",timer:8,timeoutOption:"opt_loan",options:[{id:"opt_parents_present",text:"这么大的事，得四个人一起谈。咱们再约个时间。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_show_numbers",text:"（打开手机）我家全部积蓄四十一万，是我爸的退休金。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:-5,risk:-5},next:"n_08"},{id:"opt_loan",text:"（在桌子底下点开了网贷 App）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:25},next:"n_08"},{id:"opt_walk",text:"（起身要走）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-20,composure:-5,risk:15},next:"n_08"},{id:"opt_ally_l06",text:"（去阳台拨号）沈律师，有个协议我想请您看一眼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l06_girlfriend",emotion:"cry",text:"你不给，就是不爱我。就这么简单。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"客厅安静得能听见挂钟。四个人都在等你开口。",timer:8,timeoutOption:"opt_beg_l06",options:[{id:"opt_refuse_frame_l06",text:"爱不爱不用钱证明。真要证明，那就两边都拿出来。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:5,risk:-10},next:"n_10"},{id:"opt_calm_l06",text:"（把刚才记下的条件，一条一条念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_10"},{id:"opt_beg_l06",text:"你别这么说……我真的尽力了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:-10,composure:-15,risk:15},next:"n_10"},{id:"opt_break_up",text:"那就算了吧。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:-5,opinion:-15,composure:-10,risk:10},next:"n_10"},{id:"opt_breath_l06",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_curse_l06",text:"你们这就是明码标价。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l06",text:"（推开挡在门口的岳母）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`你从包里抽出两页 A4，放在果盘旁边。

「三十八万八，我给。房本加名，我同意。」
「这上面写清楚了：钱的用途、归属，还有一条——如果两年内离婚，怎么算。」

她妈没有伸手去拿。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那两页纸在茶几上放了很久。谁也没碰。",timer:8,timeoutOption:"opt_wait",options:[{id:"opt_propose_agreement",text:"钱照给，一分不少。签个字，两家都踏实。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_wait",text:"那……我再想想。",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-5,opinion:-10,composure:-5,risk:15},next:"n_12"},{id:"opt_verbal_promise",text:"不签也行，就这么说定了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:20},next:"n_12"},{id:"opt_ultimatum",text:"签就结，不签就散。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`回去的路上，你妈一直没说话。
快到家的时候她说：「那两页纸，你写得挺好。」
又走了一段，她说：「我跟你爸商量过了，钱我们出。」

你说不用。
她说：「我知道不用。我就是想让你知道，我们出得起。」`,next:"__END__"}],Ec=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一下",script:`你推开她的时候，她的后腰撞在鞋柜角上。

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
你说，先用便宜的吧。`,unlock:"card_L06_F"}],Ed={id:Tc,title:Ac,act:bc,initState:Lc,cast:Pc,entryNode:Oc,lawyerCard:wc,satireTargets:Rc,nodes:Sc,endings:Ec},Cd=Object.freeze(Object.defineProperty({__proto__:null,act:bc,cast:Pc,default:Ed,endings:Ec,entryNode:Oc,id:Tc,initState:Lc,lawyerCard:wc,nodes:Sc,satireTargets:Rc,title:Ac},Symbol.toStringTag,{value:"Module"})),Cc="L07",Ic="第07关 · 青春损失费",$c=2,Mc={evidence:35,opinion:45,composure:45,risk:30},Nc=["hero","npc_l07_ex","shen_li"],Dc="n_01",Fc="card_law_L07",Bc=["T1","T4"],Hc=[{id:"n_01",type:"cutscene",pressure:1,script:`分手第九天。她约你在常去的那家咖啡馆。
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
沈骊说过：一条都不要删。`,next:"__END__"}],jc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你抢了她的手机",script:`咖啡馆有监控，两个服务员看着。

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

它就那么挂着。挂了很多年。`,unlock:"card_L07_F"}],Id={id:Cc,title:Ic,act:$c,initState:Mc,cast:Nc,entryNode:Dc,lawyerCard:Fc,satireTargets:Bc,nodes:Hc,endings:jc},$d=Object.freeze(Object.defineProperty({__proto__:null,act:$c,cast:Nc,default:Id,endings:jc,entryNode:Dc,id:Cc,initState:Mc,lawyerCard:Fc,nodes:Hc,satireTargets:Bc,title:Ic},Symbol.toStringTag,{value:"Module"})),Gc="L08",Uc="第08关 · 孩子不是你的",Vc=2,Yc={evidence:25,opinion:40,composure:40,risk:25},Kc=["hero","npc_l08_wife","npc_l08_mother","npc_l08_child","shen_li"],qc="n_01",Wc="card_law_L08",zc=["T1","T3"],Jc=[{id:"n_01",type:"cutscene",pressure:1,script:`念念三岁体检，血型 AB。
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

那三年是真的。这一点，报告上没写。`,next:"__END__"}],Xc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一推",script:`你推开挡在门口的她。她撞到门框，额角青了一块。

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

那张纸，你只有过一次机会。`,unlock:"card_L08_F"}],Md={id:Gc,title:Uc,act:Vc,initState:Yc,cast:Kc,entryNode:qc,lawyerCard:Wc,satireTargets:zc,nodes:Jc,endings:Xc},Nd=Object.freeze(Object.defineProperty({__proto__:null,act:Vc,cast:Kc,default:Md,endings:Xc,entryNode:qc,id:Gc,initState:Yc,lawyerCard:Wc,nodes:Jc,satireTargets:zc,title:Uc},Symbol.toStringTag,{value:"Module"})),Zc="L09",Qc="第09关 · 冷静期",ea=2,ta={evidence:40,opinion:45,composure:42,risk:35},na=["hero","npc_l09_wife","npc_l09_cousin","shen_li"],ia="n_01",oa="card_law_L09",sa=["T2","T4"],ra=[{id:"n_01",type:"cutscene",pressure:1,script:`民政局。离婚登记申请交上去了，三十天冷静期。
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
她只是没打算把「为难」这两个字算在自己头上。`,next:"__END__"}],ca=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 玄关那一下",script:`抢行李箱的时候她摔在鞋柜上，手腕骨裂。

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

她名下有八十万。你名下有两万四。`,unlock:"card_L09_F"}],Dd={id:Zc,title:Qc,act:ea,initState:ta,cast:na,entryNode:ia,lawyerCard:oa,satireTargets:sa,nodes:ra,endings:ca},Fd=Object.freeze(Object.defineProperty({__proto__:null,act:ea,cast:na,default:Dd,endings:ca,entryNode:ia,id:Zc,initState:ta,lawyerCard:oa,nodes:ra,satireTargets:sa,title:Qc},Symbol.toStringTag,{value:"Module"})),aa="L10",la="第10关 · 二十米",pa=2,ua={evidence:30,opinion:35,composure:38,risk:45},_a=["hero","npc_l10_exwife","npc_l10_child","npc_l10_teacher","shen_li"],da="n_01",fa="card_law_L10",ga=["T1","T2"],ma=[{id:"n_01",type:"cutscene",pressure:2,script:`抚养费返还的判决生效了。执行立案的第三天，
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
「但你自己得记着。」`,next:"__END__"}],ha=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那扇门",script:`凌晨两点，你砸开了那扇门。

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
「可法律不看你忍不忍得住，只看你忍没忍住。」`,unlock:"card_L10_F"}],Bd={id:aa,title:la,act:pa,initState:ua,cast:_a,entryNode:da,lawyerCard:fa,satireTargets:ga,nodes:ma,endings:ha},Hd=Object.freeze(Object.defineProperty({__proto__:null,act:pa,cast:_a,default:Bd,endings:ha,entryNode:da,id:aa,initState:ua,lawyerCard:fa,nodes:ma,satireTargets:ga,title:la},Symbol.toStringTag,{value:"Module"})),va="L11",xa="第11关 · 面试第七问",ka=3,ya={evidence:20,opinion:40,composure:45,risk:20},Ta=["hero","npc_l11_hr","shen_li"],Aa="n_01",ba="card_law_L11",La=["T3","T5"],Pa=[{id:"n_01",type:"cutscene",pressure:1,script:`终面，第四十分钟。前六个问题答得都不错。
你上个月主动离的职，赔偿金撑到十一月。房贷每月一万四。

这是手上最后一个 offer。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"candid",text:"我直说吧。这个岗同分的话，我们优先女性。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"他说得很坦然，像在说食堂几点开饭。",timer:8,timeoutOption:"opt_accept_l11",options:[{id:"opt_record_l11",text:"（口袋里的手机按了录音）这个我理解，能再具体说说吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04"},{id:"opt_ask_written_l11",text:"如果最终没通过，能给一份书面反馈吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_04"},{id:"opt_accept_l11",text:"我理解，这也是应该的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:20},next:"n_04"},{id:"opt_angry_l11",text:"这不就是歧视吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"official",text:"集团今年有多元化指标。这个我们也是执行。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"他把简历合上了，往桌子中间推了推。",timer:8,timeoutOption:"opt_beg_l11",options:[{id:"opt_ask_policy_l11",text:"指标是公开的吗？能给我看一下相关制度文件？",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06"},{id:"opt_neutral_l11",text:"明白了。那我按正常流程等结果。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-5},next:"n_06"},{id:"opt_beg_l11",text:"我下个月还有房贷……能不能通融一下？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15,risk:10},next:"n_06"},{id:"opt_lecture_l11",text:"多元化不是这么搞的。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-5,risk:15},next:"n_06"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"cooling",text:"制度文件是内部的。你要是接受不了，我们也理解。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室的空调声突然很清楚。",timer:8,timeoutOption:"opt_thank_leave",options:[{id:"opt_confirm_record",text:"我把今天聊的整理一下发您邮箱，您确认下有没有出入。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08"},{id:"opt_thank_leave",text:"（正常道谢，起身离开）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_08"},{id:"opt_argue_l11b",text:"那我今天来面的是什么？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"opt_give_up",text:"（当场说算了，不用等结果了）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_08"},{id:"opt_ally_l11",text:"（出会议室拨号）沈律师，我刚录了一段东西。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08"}],impulsePool:[{id:"imp_curse_l11",text:"你们这叫指标？这叫明抢。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_flip_l11",text:"（一把掀翻会议桌）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"official",text:"（三天后，邮件）感谢您的时间。经综合评估，暂不匹配。祝顺利。",next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"赔偿金还剩两个月。手机里那段录音四十一分钟。",timer:8,timeoutOption:"opt_swallow",options:[{id:"opt_labor_complaint",text:"（向劳动监察部门投诉，附录音和邮件）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_request_reason",text:"（回信，要求书面说明未录用的具体原因）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_10"},{id:"opt_post_online_l11",text:"（把录音发到职场社区，@这家公司）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-20,composure:5,risk:25},next:"n_10"},{id:"opt_swallow",text:"（算了。接着投别家）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10"},{id:"opt_breath_l11",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0}],impulsePool:[{id:"imp_flip_l11b",text:"（冲回那家公司，砸了前台）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊听完录音，倒回去又放了一遍第七分钟。

「『同分优先女性』——这句是他自己说的，说得很清楚。」
「后面那句『集团有多元化指标』更好，那是把个人行为说成公司政策。」

她合上笔记本。
「你要清楚一件事：真正的平权是把门槛拉平，不是换个人挡在门口。
　这两样长得像，但方向是反的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「你要什么结果？出气，还是解决问题。」",timer:8,timeoutOption:"opt_drop_l11",options:[{id:"opt_full_l11",text:"投诉，同时保留起诉的权利。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12"},{id:"opt_complaint_only",text:"投诉就行，不想打官司。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:5,risk:-10},next:"n_12"},{id:"opt_drop_l11",text:"算了。这行就这么大，得罪不起。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12"},{id:"opt_revenge_l11",text:"把录音发给他们竞争对手。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_12"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`投诉受理回执上编号很长。

两周后那家公司来了电话，语气客气了很多，说岗位还在，问你有没有兴趣再聊聊。

你说谢谢，不用了。
挂了电话，你把回执拍照存进云盘，文件名写的是日期。`,next:"__END__"}],Oa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你掀了桌子。笔记本电脑砸在他小腿上。

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
这行就这么大。`,unlock:"card_L11_F"}],jd={id:va,title:xa,act:ka,initState:ya,cast:Ta,entryNode:Aa,lawyerCard:ba,satireTargets:La,nodes:Pa,endings:Oa},Gd=Object.freeze(Object.defineProperty({__proto__:null,act:ka,cast:Ta,default:jd,endings:Oa,entryNode:Aa,id:va,initState:ya,lawyerCard:ba,nodes:Pa,satireTargets:La,title:xa},Symbol.toStringTag,{value:"Module"})),wa="L12",Ra="第12关 · 署名顺序",Sa=3,Ea={evidence:45,opinion:42,composure:42,risk:25},Ca=["hero","npc_l12_colleague","npc_l12_boss","zhou_you"],Ia="n_01",$a="card_law_L12",Ma=["T1","T3"],Na=[{id:"n_01",type:"cutscene",pressure:1,script:`项目做了十一个月。方案是你出的，架构是你搭的，上线那周你在公司睡了四天。
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
你说：「这行小字是你换来的。」`,next:"__END__"}],Da=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 摔的那一下",script:`笔记本砸在桌上，屏幕裂了，碎片弹到她手背上。

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

那一百四十三条 commit 记录，到最后也没人问起过。`,unlock:"card_L12_F"}],Ud={id:wa,title:Ra,act:Sa,initState:Ea,cast:Ca,entryNode:Ia,lawyerCard:$a,satireTargets:Ma,nodes:Na,endings:Da},Vd=Object.freeze(Object.defineProperty({__proto__:null,act:Sa,cast:Ca,default:Ud,endings:Da,entryNode:Ia,id:wa,initState:Ea,lawyerCard:$a,nodes:Na,satireTargets:Ma,title:Ra},Symbol.toStringTag,{value:"Module"})),Fa="L13",Ba="第13关 · 团建那句玩笑",Ha=3,ja={evidence:25,opinion:35,composure:36,risk:40},Ga=["hero","npc_l13_hr","npc_l13_complainant","zhou_you","shen_li"],Ua="n_01",Va="card_law_L13",Ya=["T1","T5"],Ka=[{id:"n_01",type:"cutscene",pressure:1,script:`三周前，部门团建，KTV 包厢。
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

你回：不用。你那天问我那句话，问得对。`,next:"__END__"}],qa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 小会议室",script:`杯子摔了，笔记本飞到墙上。HR 的手背划破了。

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

道歉这个动作，在流程里从来只有一种解释。`,unlock:"card_L13_F"}],Yd={id:Fa,title:Ba,act:Ha,initState:ja,cast:Ga,entryNode:Ua,lawyerCard:Va,satireTargets:Ya,nodes:Ka,endings:qa},Kd=Object.freeze(Object.defineProperty({__proto__:null,act:Ha,cast:Ga,default:Yd,endings:qa,entryNode:Ua,id:Fa,initState:ja,lawyerCard:Va,nodes:Ka,satireTargets:Ya,title:Ba},Symbol.toStringTag,{value:"Module"})),Wa="L14",za="第14关 · 匿名举报",Ja=3,Xa={evidence:30,opinion:35,composure:34,risk:45},Za=["hero","npc_l14_hr","npc_l14_director","zhou_you","shen_li"],Qa="n_01",el="card_law_L14",tl=["T1","T5"],nl=[{id:"n_01",type:"cutscene",pressure:2,script:`晋升公示第七天，最后一天。
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
你回：「嗯。」`,next:"__END__"}],il=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口",script:`你推开了他。他手里的咖啡洒了一身，人撞在门框上。

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
它不需要。它只需要你自己动起来。`,unlock:"card_L14_F"}],qd={id:Wa,title:za,act:Ja,initState:Xa,cast:Za,entryNode:Qa,lawyerCard:el,satireTargets:tl,nodes:nl,endings:il},Wd=Object.freeze(Object.defineProperty({__proto__:null,act:Ja,cast:Za,default:qd,endings:il,entryNode:Qa,id:Wa,initState:Xa,lawyerCard:el,nodes:nl,satireTargets:tl,title:za},Symbol.toStringTag,{value:"Module"})),ol="L15",sl="第15关 · 最后一张牌",rl=3,cl={evidence:40,opinion:40,composure:32,risk:50},al=["hero","npc_l15_broker","npc_l15_hr","shen_li"],ll="n_01",pl="card_law_L15",ul=["T4"],_l=[{id:"n_01",type:"cutscene",pressure:2,script:`裁员名单下来了，你在上面。
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

沈骊在路边等你，车窗摇下来：「上车吧，堵着呢。」`,next:"__END__"}],dl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一拳",script:`你在楼下堵住他，一拳打在他脸上。鼻梁骨折。

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
员工在离职期间将内部沟通录音公开传播。`,unlock:"card_L15_F"}],zd={id:ol,title:sl,act:rl,initState:cl,cast:al,entryNode:ll,lawyerCard:pl,satireTargets:ul,nodes:_l,endings:dl},Jd=Object.freeze(Object.defineProperty({__proto__:null,act:rl,cast:al,default:zd,endings:dl,entryNode:ll,id:ol,initState:cl,lawyerCard:pl,nodes:_l,satireTargets:ul,title:sl},Symbol.toStringTag,{value:"Module"})),fl="L16",gl="第16关 · 三十秒剪辑",ml=4,hl={evidence:35,opinion:20,composure:40,risk:40},vl=["hero","npc_l16_account","shen_li","zhou_you","crowd"],xl="n_01",kl="card_law_L16",yl=["T2","T4"],Tl=[{id:"n_01",type:"cutscene",pressure:3,script:`周一早上七点，你在地铁上刷到自己。

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
「两次都在别人的案子里。」`,next:"__END__"}],Al=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 找上门",script:`你找到了那家公司的地址，冲进去把设备砸了。

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
因为你已经不是那个只有完整版的人了。`,unlock:"card_L16_F"}],Xd={id:fl,title:gl,act:ml,initState:hl,cast:vl,entryNode:xl,lawyerCard:kl,satireTargets:yl,nodes:Tl,endings:Al},Zd=Object.freeze(Object.defineProperty({__proto__:null,act:ml,cast:vl,default:Xd,endings:Al,entryNode:xl,id:fl,initState:hl,lawyerCard:kl,nodes:Tl,satireTargets:yl,title:gl},Symbol.toStringTag,{value:"Module"})),bl="L17",Ll="第17关 · 人肉",Pl=4,Ol={evidence:40,opinion:10,composure:28,risk:45},wl=["hero","npc_l17_father","npc_l17_hr","shen_li","crowd"],Rl="n_01",Sl="card_law_L17",El=["T2","T4"],Cl=[{id:"n_01",type:"cutscene",pressure:4,script:`周四凌晨两点，一个文档在群里传开了。

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
「你就把这事办完。」`,next:"__END__"}],Il=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你找过去了",script:`你按扒到的地址找过去，砸了门，打了人。

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

从这一页开始，你们是同一类案由。`,unlock:"card_L17_F"}],Qd={id:bl,title:Ll,act:Pl,initState:Ol,cast:wl,entryNode:Rl,lawyerCard:Sl,satireTargets:El,nodes:Cl,endings:Il},ef=Object.freeze(Object.defineProperty({__proto__:null,act:Pl,cast:wl,default:Qd,endings:Il,entryNode:Rl,id:bl,initState:Ol,lawyerCard:Sl,nodes:Cl,satireTargets:El,title:Ll},Symbol.toStringTag,{value:"Module"})),$l="L18",Ml="第18关 · 直播间的生意",Nl=4,Dl={evidence:55,opinion:30,composure:38,risk:35},Fl=["hero","npc_l18_streamer","shen_li","crowd"],Bl="n_01",Hl="card_law_L18",jl=["T4"],Gl=[{id:"n_01",type:"cutscene",pressure:2,script:`一个百万粉的账号发来连线邀请。
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
「不过没关系。这十七个后面只有一个人。」`,next:"__END__"}],Ul=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 直播事故",script:`你在连线里失控了，摔了东西，骂了整整四十秒。

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
真相跑不过一句脏话。`,unlock:"card_L18_F"}],tf={id:$l,title:Ml,act:Nl,initState:Dl,cast:Fl,entryNode:Bl,lawyerCard:Hl,satireTargets:jl,nodes:Gl,endings:Ul},nf=Object.freeze(Object.defineProperty({__proto__:null,act:Nl,cast:Fl,default:tf,endings:Ul,entryNode:Bl,id:$l,initState:Dl,lawyerCard:Hl,nodes:Gl,satireTargets:jl,title:Ml},Symbol.toStringTag,{value:"Module"})),Vl="L19",Yl="第19关 · 各执一词",Kl=4,ql={evidence:60,opinion:45,composure:42,risk:30},Wl=["hero","npc_l19_moderator","npc_l19_pr","shen_li"],zl="n_01",Jl="card_law_L19",Xl=["T5"],Zl=[{id:"n_01",type:"cutscene",pressure:2,script:`平台申诉结果：不予处理。

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
「开庭大概在三个月后。」`,next:"__END__"}],Ql=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你把材料摔了，推翻了椅子，一个工作人员的手被划伤。

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
只是现在，你没有地方提交它们了。`,unlock:"card_L19_F"}],of={id:Vl,title:Yl,act:Kl,initState:ql,cast:Wl,entryNode:zl,lawyerCard:Jl,satireTargets:Xl,nodes:Zl,endings:Ql},sf=Object.freeze(Object.defineProperty({__proto__:null,act:Kl,cast:Wl,default:of,endings:Ql,entryNode:zl,id:Vl,initState:ql,lawyerCard:Jl,nodes:Zl,satireTargets:Xl,title:Yl},Symbol.toStringTag,{value:"Module"})),ep="L20",tp="第20关 · 对簿",np=4,ip={evidence:60,opinion:50,composure:60,risk:30},op=["hero","he_song","zhou_you","shen_li","crowd"],sp="n_01",rp="card_law_L20",cp=["T2","T4","T5"],ap=[{id:"n_01",type:"cutscene",pressure:3,script:`开庭。第三法庭，旁听席坐满了。

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

划掉了。`,next:"__END__"}],lp=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 最后一步",script:`你越过栏杆冲了过去。法警拦下你的时候，你已经碰到了他。

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

划掉了。`,unlock:"card_L20_F"}],rf={id:ep,title:tp,act:np,initState:ip,cast:op,entryNode:sp,lawyerCard:rp,satireTargets:cp,nodes:ap,endings:lp},cf=Object.freeze(Object.defineProperty({__proto__:null,act:np,cast:op,default:rf,endings:lp,entryNode:sp,id:ep,initState:ip,lawyerCard:rp,nodes:ap,satireTargets:cp,title:tp},Symbol.toStringTag,{value:"Module"})),af=Object.assign({"../../content/levels/L01.json":Td,"../../content/levels/L02.json":bd,"../../content/levels/L03.json":Pd,"../../content/levels/L04.json":wd,"../../content/levels/L05.json":Sd,"../../content/levels/L06.json":Cd,"../../content/levels/L07.json":$d,"../../content/levels/L08.json":Nd,"../../content/levels/L09.json":Fd,"../../content/levels/L10.json":Hd,"../../content/levels/L11.json":Gd,"../../content/levels/L12.json":Vd,"../../content/levels/L13.json":Kd,"../../content/levels/L14.json":Wd,"../../content/levels/L15.json":Jd,"../../content/levels/L16.json":Zd,"../../content/levels/L17.json":ef,"../../content/levels/L18.json":nf,"../../content/levels/L19.json":sf,"../../content/levels/L20.json":cf}),gn=Object.values(af).map(e=>e.default).sort((e,t)=>e.id.localeCompare(t.id)),lf="破局实录",pf="开发预览 · M3 前置切片",uf={evidence:"证据",opinion:"舆论",composure:"情绪",risk:"风险"},_f={hero:"陈屿",shen_li:"沈骊",officer_lin:"林昭",zhou_you:"周攸",he_song:"贺松",crowd:"围观者",narrator:"",npc_l01_woman:"红衣女子",npc_l02_woman:"住户女子",npc_l03_woman:"路人女子",npc_l03_daughter:"念念",npc_l04_woman:"报警人",npc_l05_woman:"女子",npc_l05_manager:"值班经理",npc_l05_witness:"目击大哥",npc_l06_girlfriend:"前女友",npc_l06_mother:"她母亲",npc_l07_ex:"前女友",npc_l08_wife:"妻子",npc_l08_mother:"岳母",npc_l08_child:"孩子",npc_l09_wife:"妻子",npc_l09_cousin:"表哥",npc_l10_exwife:"前妻",npc_l10_child:"女儿",npc_l10_teacher:"班主任",npc_l11_hr:"HR",npc_l12_colleague:"同事",npc_l12_boss:"部门老板",npc_l13_hr:"HR",npc_l13_complainant:"投诉人",npc_l14_hr:"HR 总监",npc_l14_director:"总监",npc_l15_broker:"中介",npc_l15_hr:"HR",npc_l16_account:"商务",npc_l17_father:"父亲",npc_l17_hr:"HR",npc_l18_streamer:"主播",npc_l19_moderator:"版务",npc_l19_pr:"公关",npc_l20_judge:"审判长",npc_l20_lawyer:"对方律师"},df={1:"第一幕 · 流量即真相",2:"第二幕 · 亲密关系的账",3:"第三幕 · 职场的规则",4:"第四幕 · 收网"},ff={tapToContinue:"点击继续",secondsUnit:"s",endingTitle:"结局",restart:"再玩一次",nextLevel:"下一关",levelSelect:"选择关卡",lockedLevel:"未解锁",rankNames:{S:"名场面",A:"稳住了",B:"有惊无险",C:"勉强收场",F:"翻车"},finalMeters:"最终仪表",disclaimer:"本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。",progressLabel:"进度",soundToggle:"M",studyIntro:"测试开始前\\n请输入现场编号（如 P01）\\n\\n然后独立游玩前五关\\n过程中不会有任何提示\\n做完自动出现数据回收",studyPidPlaceholder:"现场编号",studyStart:"开始",studyDoneTitle:"第一幕完成",studyCopy:"导出数据（JSON）",studySummaryHeader:"参与者 {p} · {n} 次游玩",studySummaryLine:"{lv}: {rank}「{title}」 用时{s}秒 抉择{c}次 重玩{r}",stanceLow:"稳住",stanceHigh:"顶回去",pileALabel:"这条",pileBLabel:"那条",pileListHint:"选一个",swipeHint:"左右滑动选择 · 点按也可以",settlePhase1:"结算中",settleStampS:"教科书式破局",settleStampA:"稳稳落地",settleStampB:"有惊无险",settleStampC:"伤敌自伤",settleStampF:"满盘皆输",settleMetersTitle:"终局面",settleReplay:"本关重打",settleNext:"下一关"},gf={L01:{label:"地铁三号线",hue:205,motif:"subway"},L02:{label:"住宅电梯",hue:220,motif:"elevator"},L03:{label:"商场中庭",hue:35,motif:"mall"},L04:{label:"深夜街道",hue:235,motif:"street"},L05:{label:"健身房",hue:15,motif:"gym"},L06:{label:"两家饭桌",hue:28,motif:"table"},L07:{label:"出租屋",hue:200,motif:"room"},L08:{label:"客厅",hue:40,motif:"room"},L09:{label:"民政局外",hue:210,motif:"office"},L10:{label:"学校门口",hue:45,motif:"street"},L11:{label:"面试间",hue:215,motif:"office"},L12:{label:"开放工位",hue:210,motif:"office"},L13:{label:"会议室",hue:220,motif:"office"},L14:{label:"总监办公室",hue:225,motif:"office"},L15:{label:"写字楼楼下",hue:200,motif:"street"},L16:{label:"剪辑室",hue:260,motif:"studio"},L17:{label:"家中",hue:30,motif:"room"},L18:{label:"直播间后台",hue:320,motif:"studio"},L19:{label:"平台工单页",hue:190,motif:"office"},L20:{label:"法院走廊",hue:210,motif:"court"}},mf={calm:["前排","吃瓜","蹲后续","录下来了","别急，等反转","让子弹飞一会儿"],tense:["什么情况？?","有人认识吗","这女的厉害","这男的稳住啊","报警了吗","快报警","别拍了先帮个忙啊","主播别切","全网都在看"],hot:["热搜第一预定","已经录屏了","传到群里了","反转了反转了","坐等打脸","这瓜保熟","直播间炸了","三分钟了还在吵"]},hf={hero:210,shen_li:280,officer_lin:195,zhou_you:150,he_song:350,npc_l01_woman:350,npc_l02_woman:330,npc_l03_woman:320,npc_l03_daughter:45,npc_l04_woman:160,npc_l05_woman:340,npc_l05_manager:30,npc_l05_witness:200,npc_l06_girlfriend:315,npc_l06_mother:280,npc_l07_ex:300,npc_l08_wife:330,npc_l08_mother:275,npc_l08_child:50,npc_l09_wife:320,npc_l09_cousin:25,npc_l10_exwife:310,npc_l10_child:55,npc_l10_teacher:165,npc_l11_hr:220,npc_l12_colleague:145,npc_l12_boss:25,npc_l13_hr:215,npc_l13_complainant:345,npc_l14_hr:225,npc_l14_director:20,npc_l15_broker:40,npc_l15_hr:218,npc_l16_account:35,npc_l17_father:205,npc_l17_hr:222,npc_l18_streamer:325,npc_l19_moderator:195,npc_l19_pr:285,crowd:0},vf={appTitle:lf,appSub:pf,meters:uf,speakerNames:_f,actNames:df,ui:ff,scenes:gf,danmaku:mf,speakerHues:hf},se=vf;function Jt(e){const t=se.ui[e];return typeof t=="string"?t:""}function xf(e){return se.speakerNames[e]??e}function $i(e){return se.speakerHues[e]??220}function pp(e){return se.scenes[e]??{label:"",hue:210,motif:"room"}}const kf={class:"hud"},yf={class:"label"},Tf={class:"bar"},Af={class:"num"},bf=pt({__name:"MeterHud",props:{state:{}},setup(e){const t=e,n=oe(()=>[{k:"evidence",kind:"good"},{k:"opinion",kind:"good"},{k:"composure",kind:"good"},{k:"risk",kind:"bad"}].map(({k:o,kind:s})=>({key:o,label:se.meters[o],value:t.state[o],kind:s})));return(i,o)=>(I(),j("div",kf,[(I(!0),j(xe,null,yn(n.value,s=>(I(),j("div",{key:s.key,class:ke(["meter",s.kind])},[b("span",yf,H(s.label),1),b("div",Tf,[b("div",{class:"fill",style:Fe({width:s.value+"%"})},null,4)]),b("span",Af,H(s.value),1)],2))),128))]))}}),mt=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},Lf=mt(bf,[["__scopeId","data-v-20dd9153"]]),Pf={key:0,class:"name"},Of={class:"text"},wf={class:"cue"},Rf=pt({__name:"StoryBox",props:{speaker:{},text:{},kind:{}},emits:["advance"],setup(e,{emit:t}){const n=e,i=t,o=p=>p===void 0?"":se.speakerNames[p]??p,s=p=>p===void 0?220:$i(p),r=pe("");let c;function a(p){if(r.value="",c!==void 0&&clearInterval(c),typeof setInterval!="function"){r.value=p;return}let d=0;c=setInterval(()=>{d+=2,r.value=p.slice(0,d),d>=p.length&&c!==void 0&&(clearInterval(c),c=void 0)},28)}De(()=>n.text,p=>a(p),{immediate:!0}),Gt(()=>{c!==void 0&&clearInterval(c)});function u(){r.value.length<n.text.length?(r.value=n.text,c!==void 0&&(clearInterval(c),c=void 0)):i("advance")}return(p,d)=>(I(),j("div",{class:ke(["box",e.kind]),style:Fe({"--h":s(e.speaker)}),onClick:u},[e.kind==="dialogue"&&e.speaker?(I(),j("div",Pf,H(o(e.speaker)),1)):be("",!0),b("p",Of,H(r.value),1),b("div",wf,H(O(se).ui.tapToContinue),1)],6))}}),es=mt(Rf,[["__scopeId","data-v-716d70d8"]]);function Sf(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Ef(e){let t=e>>>0;return()=>{t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Cf(e){const t=[...e],n=Ef(Sf(t.map(i=>i.id).join("|")));for(let i=t.length-1;i>0;i--){const o=Math.floor(n()*(i+1)),s=t[i];t[i]=t[o],t[o]=s}return{left:t.filter((i,o)=>o%2===0),right:t.filter((i,o)=>o%2===1)}}const If={key:0,class:"duo"},$f={class:"card"},Mf={key:0,class:"more"},Nf={class:"tip"},Df={class:"card"},Ff={key:0,class:"more"},Bf={class:"tip"},Hf={key:1,class:"list"},jf={class:"list-head"},Gf={class:"list-hint"},Uf=["onClick"],Vf={key:2,class:"hint"},Yf={key:3,class:"hint"},Kf=pt({__name:"SwipeChoice",props:{options:{},timer:{},timeoutOptionId:{}},emits:["choose"],setup(e,{emit:t}){const n=e,i=t,o=oe(()=>Cf(n.options)),s=oe(()=>o.value.left),r=oe(()=>o.value.right),c=pe(0),a=pe([]),u=pe(""),p=oe(()=>s.value[0]),d=oe(()=>r.value[0]);function m(E){const F=(E==="L"?s:r).value;if(F.length===1&&F[0]!==void 0){i("choose",F[0].id);return}a.value=[...F],c.value=1}function k(E){i("choose",E.id)}function B(){c.value=0}const T=pe(n.timer);let $=U();De(()=>n.options,()=>{c.value=0,a.value=[],$!==void 0&&clearInterval($),$=U(),T.value=n.timer});function U(){if(typeof setInterval!="function")return;const E=setInterval(()=>{if(T.value-=1,T.value<=0){clearInterval(E),$===E&&($=void 0);const F=n.options.find(K=>K.id===n.timeoutOptionId);F!==void 0&&i("choose",F.id)}},1e3);return E}Gt(()=>{$!==void 0&&clearInterval($)});const S=pe(0);function V(E){var F,K;S.value=E.clientX,(K=(F=E.target).setPointerCapture)==null||K.call(F,E.pointerId)}function R(E){if(S.value===0)return;const F=E.clientX-S.value;u.value=F>40?"R":F<-40?"L":""}function W(){u.value!==""&&c.value===0&&m(u.value),S.value=0,u.value=""}const ce=se.ui.pileALabel??"",fe=se.ui.pileBLabel??"",ge=se.ui.pileListHint??"";return(E,F)=>{var K,w;return I(),j("div",{class:"swipe",onPointerdown:V,onPointermove:R,onPointerup:W,onPointercancel:W},[b("div",{class:ke(["timer",{panic:T.value<=4}])},[b("span",null,H(T.value),1)],2),c.value===0?(I(),j("div",If,[b("div",{class:ke(["lane left",{hot:u.value==="L"}])},[b("div",$f,[b("p",null,H((K=p.value)==null?void 0:K.text),1),s.value.length>1?(I(),j("span",Mf,H(s.value.length),1)):be("",!0)]),b("div",Nf,H(O(ce)),1)],2),F[1]||(F[1]=b("div",{class:"or"},"/",-1)),b("div",{class:ke(["lane right",{hot:u.value==="R"}])},[b("div",Df,[b("p",null,H((w=d.value)==null?void 0:w.text),1),r.value.length>1?(I(),j("span",Ff,H(r.value.length),1)):be("",!0)]),b("div",Bf,H(O(fe)),1)],2)])):(I(),j("div",Hf,[b("div",jf,[b("div",{class:"tip back",onClick:F[0]||(F[0]=J=>B())},"‹"),b("span",Gf,H(O(ge)),1)]),(I(!0),j(xe,null,yn(a.value,J=>(I(),j("div",{key:J.id,class:"row",onClick:me=>k(J)},[b("p",null,H(J.text),1)],8,Uf))),128))])),c.value===0?(I(),j("div",Vf,H(O(se).ui.swipeHint),1)):(I(),j("div",Yf,H(O(ge)),1))],32)}}}),qf=mt(Kf,[["__scopeId","data-v-073ae7c2"]]),Wf=""+new URL("rank_A-Buk7knaJ.mp4",import.meta.url).href,zf=""+new URL("rank_B-MEHXL8TX.mp4",import.meta.url).href,Jf=""+new URL("rank_C-DOkhQSQI.mp4",import.meta.url).href,Xf=""+new URL("rank_F-DPh74h1I.mp4",import.meta.url).href,Zf=""+new URL("rank_S-BXJbetyP.mp4",import.meta.url).href,Qf=["data-rank"],e0=["src"],t0={class:"stamp"},n0={class:"rk"},i0={class:"word"},o0={class:"title"},s0={class:"script"},r0={class:"meters-card"},c0={class:"mc-title"},a0={class:"bars"},l0={class:"lbl"},p0={class:"track"},u0={class:"num"},_0={class:"disclaimer"},d0={class:"acts"},f0=pt({__name:"EndingCard",props:{ending:{},state:{}},emits:["restart","next"],setup(e,{emit:t}){const n=e,i=pe(1),o=pe(!1),s=se.ui,r=oe(()=>s["settleStamp"+n.ending.rank]??""),c=oe(()=>{const m=Object.entries(Object.assign({"../../../content/art/endings/rank_A.mp4":Wf,"../../../content/art/endings/rank_B.mp4":zf,"../../../content/art/endings/rank_C.mp4":Jf,"../../../content/art/endings/rank_F.mp4":Xf,"../../../content/art/endings/rank_S.mp4":Zf})).find(([k])=>k.endsWith("/rank_"+n.ending.rank+".mp4"));return(m==null?void 0:m[1])??""});let a,u;Zi(()=>{if(typeof setTimeout!="function"){i.value=3;return}a=setTimeout(()=>{i.value=2},1200),u=setTimeout(()=>{i.value=3},2600)}),Gt(()=>{a!==void 0&&clearTimeout(a),u!==void 0&&clearTimeout(u)});function p(){i.value=3}return(d,m)=>(I(),j("div",{class:"cinema","data-rank":e.ending.rank,onClick:p},[c.value?(I(),j("video",{key:0,class:"bgvid",src:c.value,autoplay:"",muted:"",loop:"",playsinline:"",onCanplay:m[0]||(m[0]=k=>o.value=!0)},null,40,e0)):be("",!0),b("div",{class:ke(["dim",{deeper:i.value>=2}])},null,2),b("div",{class:ke(["stamp-wrap",{show:i.value>=2}])},[b("div",t0,[b("span",n0,H(e.ending.rank),1),b("span",i0,H(r.value),1)])],2),b("div",{class:ke(["sheet",{show:i.value>=3}])},[b("h2",o0,H(e.ending.title),1),b("p",s0,H(e.ending.script),1),b("div",r0,[b("div",c0,H(O(s).settleMetersTitle),1),b("div",a0,[(I(),j(xe,null,yn(["evidence","opinion","composure","risk"],k=>b("div",{key:k,class:"bar"},[b("span",l0,H(O(se).meters[k]),1),b("span",p0,[b("i",{style:Fe({width:Math.min(100,e.state[k])+"%"}),class:ke(k)},null,6)]),b("span",u0,H(e.state[k]),1)])),64))])]),b("p",_0,H(O(se).ui.disclaimer),1),b("div",d0,[b("button",{onClick:m[1]||(m[1]=Ko(k=>d.$emit("restart"),["stop"]))},H(O(s).settleReplay),1),b("button",{class:"primary",onClick:m[2]||(m[2]=Ko(k=>d.$emit("next"),["stop"]))},H(O(s).settleNext),1)])],2)],8,Qf))}}),g0=mt(f0,[["__scopeId","data-v-4ea8c84b"]]),m0={class:"select"},h0={class:"sub"},v0={class:"list"},x0=["onClick"],k0={class:"tid"},y0={class:"ttitle"},T0={class:"foot"},A0=pt({__name:"LevelSelect",props:{levels:{},best:{}},emits:["pick"],setup(e){const t=n=>n===void 0?"":"r"+n;return(n,i)=>(I(),j("div",m0,[b("header",null,[b("h1",null,H(O(se).appTitle),1),b("p",h0,H(O(se).appSub),1)]),b("div",v0,[(I(!0),j(xe,null,yn(e.levels,o=>(I(),j("button",{key:o.id,onClick:s=>n.$emit("pick",o.id)},[b("span",k0,H(o.id),1),b("span",y0,H(o.title),1),b("span",{class:ke(["badge",t(e.best[o.id])])},H(e.best[o.id]??"·"),3)],8,x0))),128))]),b("footer",T0,H(O(se).ui.disclaimer),1)]))}}),b0=mt(A0,[["__scopeId","data-v-81b5ddea"]]),L0=""+new URL("L01-BJmHDizO.png",import.meta.url).href,P0=""+new URL("L02-Cgrrfiit.png",import.meta.url).href,O0=""+new URL("L03-Dhb-92UY.png",import.meta.url).href,w0=""+new URL("L04-Dxn6iz_R.png",import.meta.url).href,R0=""+new URL("L05-BCX3gD5-.png",import.meta.url).href,S0=""+new URL("L06-DPfiJfY4.png",import.meta.url).href,E0=""+new URL("L07-DgpRWPjk.png",import.meta.url).href,C0=""+new URL("L08-HGz_P2cJ.png",import.meta.url).href,I0=""+new URL("L09-VpgvEvrb.png",import.meta.url).href,$0=""+new URL("L10-D_mOdB4H.png",import.meta.url).href,M0=""+new URL("L11-BXLJJDeb.png",import.meta.url).href,N0=""+new URL("L12-DemYAPsM.png",import.meta.url).href,D0=""+new URL("L13-Dn-DLBYO.png",import.meta.url).href,F0=""+new URL("L14-BLDD-heh.png",import.meta.url).href,B0=""+new URL("L15-BVYsTDdi.png",import.meta.url).href,H0=""+new URL("L16-kHk4EBk-.png",import.meta.url).href,j0=""+new URL("L17-BomGMZbR.png",import.meta.url).href,G0=""+new URL("L18-B2bLjWIc.png",import.meta.url).href,U0=""+new URL("L19-DHpwxvAB.png",import.meta.url).href,V0=""+new URL("L20-CyAYX9HG.png",import.meta.url).href,Y0=["src"],K0={key:1,class:"photo-shade"},q0={key:2,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},W0={key:3,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},z0={key:4,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},J0={key:5,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},X0={key:6,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Z0={key:7,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},Q0={class:"tag"},eg=pt({__name:"SceneBackdrop",props:{levelId:{},pressure:{}},setup(e){const t=e,n=Object.assign({"../../../content/art/scenes/L01.png":L0,"../../../content/art/scenes/L02.png":P0,"../../../content/art/scenes/L03.png":O0,"../../../content/art/scenes/L04.png":w0,"../../../content/art/scenes/L05.png":R0,"../../../content/art/scenes/L06.png":S0,"../../../content/art/scenes/L07.png":E0,"../../../content/art/scenes/L08.png":C0,"../../../content/art/scenes/L09.png":I0,"../../../content/art/scenes/L10.png":$0,"../../../content/art/scenes/L11.png":M0,"../../../content/art/scenes/L12.png":N0,"../../../content/art/scenes/L13.png":D0,"../../../content/art/scenes/L14.png":F0,"../../../content/art/scenes/L15.png":B0,"../../../content/art/scenes/L16.png":H0,"../../../content/art/scenes/L17.png":j0,"../../../content/art/scenes/L18.png":G0,"../../../content/art/scenes/L19.png":U0,"../../../content/art/scenes/L20.png":V0}),i=pe("");De(()=>t.levelId,c=>{const a=Object.entries(n).find(([u])=>u.endsWith("/"+c+".png"));i.value=a!==void 0?a[1]:""},{immediate:!0});const o=oe(()=>pp(t.levelId)),s=oe(()=>{const c=o.value.hue,a=8+Math.round(t.pressure*.8);return{background:`radial-gradient(120% 70% at 50% 18%, hsl(${c} 32% ${a+10}%) 0%, hsl(${c} 38% ${a}%) 45%, hsl(${c} 45% ${Math.max(4,a-4)}%) 100%)`}}),r=oe(()=>o.value.motif);return(c,a)=>(I(),j("div",{class:"backdrop",style:Fe(s.value)},[i.value?(I(),j("img",{key:0,class:"photo",src:i.value,alt:""},null,8,Y0)):be("",!0),i.value?(I(),j("div",K0)):be("",!0),r.value==="subway"?(I(),j("svg",q0,[...a[0]||(a[0]=[fi('<rect x="40" y="80" width="320" height="180" rx="14" class="win" data-v-a0709a1d></rect><rect x="52" y="92" width="70" height="156" rx="4" class="win2" data-v-a0709a1d></rect><rect x="132" y="92" width="70" height="156" rx="4" class="win2" data-v-a0709a1d></rect><rect x="212" y="92" width="70" height="156" rx="4" class="win2" data-v-a0709a1d></rect><rect x="292" y="92" width="56" height="156" rx="4" class="win2" data-v-a0709a1d></rect><rect x="0" y="300" width="400" height="10" class="rail" data-v-a0709a1d></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-a0709a1d></line>',7)])])):r.value==="elevator"?(I(),j("svg",W0,[...a[1]||(a[1]=[b("rect",{x:"120",y:"60",width:"160",height:"440",rx:"6",class:"door"},null,-1),b("line",{x1:"200",y1:"60",x2:"200",y2:"500",class:"seam"},null,-1),b("circle",{cx:"200",cy:"530",r:"12",class:"lamp"},null,-1),b("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="street"?(I(),j("svg",z0,[...a[2]||(a[2]=[fi('<line x1="60" y1="0" x2="60" y2="380" class="pole" data-v-a0709a1d></line><rect x="48" y="380" width="24" height="8" rx="3" class="lamp" data-v-a0709a1d></rect><rect x="0" y="430" width="400" height="6" class="rail" data-v-a0709a1d></rect><rect x="0" y="470" width="400" height="4" class="rail dim" data-v-a0709a1d></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-a0709a1d></line>',5)])])):r.value==="court"?(I(),j("svg",J0,[...a[3]||(a[3]=[b("rect",{x:"80",y:"120",width:"240",height:"90",rx:"4",class:"win"},null,-1),b("rect",{x:"100",y:"300",width:"200",height:"14",rx:"3",class:"desk"},null,-1),b("rect",{x:"60",y:"380",width:"280",height:"10",rx:"3",class:"desk dim"},null,-1),b("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="studio"?(I(),j("svg",X0,[...a[4]||(a[4]=[fi('<rect x="40" y="90" width="130" height="80" rx="6" class="win" data-v-a0709a1d></rect><rect x="230" y="90" width="130" height="80" rx="6" class="win" data-v-a0709a1d></rect><circle cx="200" cy="260" r="8" class="lamp" data-v-a0709a1d></circle><line x1="200" y1="0" x2="200" y2="252" class="pole thin" data-v-a0709a1d></line><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-a0709a1d></line>',5)])])):(I(),j("svg",Z0,[...a[5]||(a[5]=[b("rect",{x:"50",y:"110",width:"140",height:"100",rx:"6",class:"win"},null,-1),b("rect",{x:"220",y:"110",width:"130",height:"70",rx:"6",class:"win dim"},null,-1),b("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])),b("div",Q0,H(o.value.label),1)],4))}}),tg=mt(eg,[["__scopeId","data-v-a0709a1d"]]),ng={class:"danmaku","aria-hidden":"true"},ig=pt({__name:"DanmakuLayer",props:{pressure:{},active:{type:Boolean}},setup(e){const t=e,n=pe([]);let i=0,o;function s(){return t.pressure>=4?se.danmaku.hot:t.pressure>=3?se.danmaku.tense:se.danmaku.calm}function r(){if(!t.active)return;const c=s();if(c.length===0)return;const a=c[Math.floor(Math.random()*c.length)]??"";n.value.push({id:i+=1,text:a,lane:Math.floor(Math.random()*4),speed:t.pressure>=4?7+Math.random()*3:10+Math.random()*4,bold:Math.random()<.25}),n.value.length>14&&(n.value=n.value.slice(-14))}return typeof setInterval=="function"&&(o=setInterval(r,t.pressure>=4?900:1800),De(()=>t.pressure,()=>{})),Gt(()=>{o!==void 0&&clearInterval(o)}),(c,a)=>(I(),j("div",ng,[Se(H_,{name:"fly"},{default:$s(()=>[(I(!0),j(xe,null,yn(n.value,u=>(I(),j("span",{key:u.id,class:ke(["line",{bold:u.bold}]),style:Fe({top:12+u.lane*34+"px","--dur":u.speed+"s"})},H(u.text),7))),128))]),_:1})]))}}),og=mt(ig,[["__scopeId","data-v-55cd0013"]]),sg=""+new URL("he_song-DAGlX_4O.png",import.meta.url).href,rg=""+new URL("hero-BAfbz0Vs.png",import.meta.url).href,cg=""+new URL("npc_l01_woman-DSDWwEL8.png",import.meta.url).href,ag=""+new URL("npc_l02_woman-qXhWvPKu.png",import.meta.url).href,lg=""+new URL("npc_l03_daughter-Dt2TiO8f.png",import.meta.url).href,pg=""+new URL("npc_l03_woman-BQ3wIsYH.png",import.meta.url).href,ug=""+new URL("npc_l04_woman-CZQbIvDG.png",import.meta.url).href,_g=""+new URL("npc_l05_manager-Ce6F9DQj.png",import.meta.url).href,dg=""+new URL("npc_l05_woman-BXLOsOGn.png",import.meta.url).href,fg=""+new URL("npc_l06_girlfriend-CrncpSA3.png",import.meta.url).href,gg=""+new URL("npc_l06_mother-BJuBbFLU.png",import.meta.url).href,mg=""+new URL("npc_l07_ex-CEJAEgFV.png",import.meta.url).href,hg=""+new URL("npc_l08_child-Bm0Rde6F.png",import.meta.url).href,vg=""+new URL("npc_l08_mother-tu98VogT.png",import.meta.url).href,xg=""+new URL("npc_l08_wife-Cy9DZe9m.png",import.meta.url).href,kg=""+new URL("npc_l09_wife-CJUlJISq.png",import.meta.url).href,yg=""+new URL("npc_l10_exwife-D0NJtWQK.png",import.meta.url).href,Tg=""+new URL("npc_l11_hr-Dqx_GpDt.png",import.meta.url).href,Ag=""+new URL("npc_l12_boss-nYTyR_X5.png",import.meta.url).href,bg=""+new URL("npc_l12_colleague-BD3ntBZW.png",import.meta.url).href,Lg=""+new URL("npc_l13_hr-Dovjb9V8.png",import.meta.url).href,Pg=""+new URL("npc_l14_director-B-efKLNg.png",import.meta.url).href,Og=""+new URL("npc_l14_hr-DRiqQqX2.png",import.meta.url).href,wg=""+new URL("npc_l15_broker-CqY8iI1Q.png",import.meta.url).href,Rg=""+new URL("npc_l15_hr-CSF8zzWx.png",import.meta.url).href,Sg=""+new URL("npc_l16_account-D825uOC6.png",import.meta.url).href,Eg=""+new URL("npc_l17_father-jYHQ9zlG.png",import.meta.url).href,Cg=""+new URL("npc_l17_hr-D3pAIKo4.png",import.meta.url).href,Ig=""+new URL("npc_l18_streamer-CYlpG6aq.png",import.meta.url).href,$g=""+new URL("npc_l19_moderator-CoZr2C0k.png",import.meta.url).href,Mg=""+new URL("npc_l19_pr-Do-3PPx1.png",import.meta.url).href,Ng=""+new URL("officer_lin-Bduk5y-m.png",import.meta.url).href,Dg=""+new URL("shen_li-Bd_DLpmj.png",import.meta.url).href,Fg=""+new URL("zhou_you-DSERK5v3.png",import.meta.url).href,Bg={key:0,class:"duo","aria-hidden":"true"},Hg=["src"],jg={key:1,class:"pt",viewBox:"0 0 120 160"},Gg=["src","alt"],Ug={key:1,class:"pt",viewBox:"0 0 120 160"},Vg={class:"nm"},Yg=pt({__name:"PortraitSlot",props:{speaker:{},visible:{type:Boolean}},setup(e){const t=e,n=Object.assign({"../../../content/art/characters/he_song.png":sg,"../../../content/art/characters/hero.png":rg,"../../../content/art/characters/npc_l01_woman.png":cg,"../../../content/art/characters/npc_l02_woman.png":ag,"../../../content/art/characters/npc_l03_daughter.png":lg,"../../../content/art/characters/npc_l03_woman.png":pg,"../../../content/art/characters/npc_l04_woman.png":ug,"../../../content/art/characters/npc_l05_manager.png":_g,"../../../content/art/characters/npc_l05_woman.png":dg,"../../../content/art/characters/npc_l06_girlfriend.png":fg,"../../../content/art/characters/npc_l06_mother.png":gg,"../../../content/art/characters/npc_l07_ex.png":mg,"../../../content/art/characters/npc_l08_child.png":hg,"../../../content/art/characters/npc_l08_mother.png":vg,"../../../content/art/characters/npc_l08_wife.png":xg,"../../../content/art/characters/npc_l09_wife.png":kg,"../../../content/art/characters/npc_l10_exwife.png":yg,"../../../content/art/characters/npc_l11_hr.png":Tg,"../../../content/art/characters/npc_l12_boss.png":Ag,"../../../content/art/characters/npc_l12_colleague.png":bg,"../../../content/art/characters/npc_l13_hr.png":Lg,"../../../content/art/characters/npc_l14_director.png":Pg,"../../../content/art/characters/npc_l14_hr.png":Og,"../../../content/art/characters/npc_l15_broker.png":wg,"../../../content/art/characters/npc_l15_hr.png":Rg,"../../../content/art/characters/npc_l16_account.png":Sg,"../../../content/art/characters/npc_l17_father.png":Eg,"../../../content/art/characters/npc_l17_hr.png":Cg,"../../../content/art/characters/npc_l18_streamer.png":Ig,"../../../content/art/characters/npc_l19_moderator.png":$g,"../../../content/art/characters/npc_l19_pr.png":Mg,"../../../content/art/characters/officer_lin.png":Ng,"../../../content/art/characters/shen_li.png":Dg,"../../../content/art/characters/zhou_you.png":Fg});function i(m){if(m===null)return{url:"",ok:!1};const k=Object.entries(n).find(([B])=>B.endsWith("/"+m+".png"));return k!==void 0?{url:k[1],ok:!0}:{url:"",ok:!1}}const o=i("hero"),s=$i("hero"),r=oe(()=>t.speaker===null||t.speaker==="hero"?null:t.speaker),c=oe(()=>i(r.value)),a=oe(()=>$i(r.value??"")),u=oe(()=>r.value===null?"":xf(r.value)),p=pe(!1);De(()=>t.speaker,()=>{p.value=!1});const d=oe(()=>t.speaker==="hero");return(m,k)=>e.visible?(I(),j("div",Bg,[b("div",{class:ke(["who hero",{talking:d.value}]),style:Fe({"--h":O(s)})},[O(o).ok?(I(),j("img",{key:0,class:"pt art",src:O(o).url,alt:""},null,8,Hg)):(I(),j("svg",jg,[...k[1]||(k[1]=[b("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])]))],6),r.value?(I(),j("div",{key:0,class:ke(["who guest",{talking:!0}]),style:Fe({"--h":a.value})},[c.value.ok&&!p.value?(I(),j("img",{key:0,class:"pt art",src:c.value.url,alt:u.value,onError:k[0]||(k[0]=B=>p.value=!0)},null,40,Gg)):(I(),j("svg",Ug,[...k[2]||(k[2]=[b("path",{d:"M60 22 a20 20 0 1 1 -0.1 0 M28 160 C28 118 40 96 60 96 C80 96 92 118 92 160 Z"},null,-1)])])),b("span",Vg,H(u.value),1)],4)):be("",!0)])):be("",!0)}}),Kg=mt(Yg,[["__scopeId","data-v-b5ca4a9b"]]);function qg(e,t){const n=220*Math.pow(2,Math.round(e/30)%12/12);return t==="tense"?{root:n,steps:[0,2,3,5,7,8,10]}:t==="panic"?{root:n,steps:[0,1,3,6,7,9,10]}:{root:n*1.5,steps:[0,2,4,7,9,12,14]}}function ts(e,t){const n=Math.floor(t/e.steps.length),i=(t%e.steps.length+e.steps.length)%e.steps.length;return e.root*Math.pow(2,(e.steps[i]??0)/12+n)}function ns(e){let t=e|0;return()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>8&16777215)/16777216)}class Wg{constructor(){de(this,"ctx",null);de(this,"master",null);de(this,"bgmGain",null);de(this,"sfxGain",null);de(this,"bgmTimer",null);de(this,"mood","calm");de(this,"hue",210);de(this,"step",0);de(this,"rnd",ns(42));de(this,"muted",!1)}unlock(){if(this.ctx===null){const t=globalThis.AudioContext;if(t===void 0)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.5,this.bgmGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.9,this.sfxGain.connect(this.master)}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master!==null&&this.ctx!==null&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone(t,n,i,o,s,r=0){if(this.ctx===null)return;const c=this.ctx.currentTime+r,a=this.ctx.createOscillator(),u=this.ctx.createGain();a.type=o,a.frequency.value=t,u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(i,c+.012),u.gain.exponentialRampToValueAtTime(1e-4,c+n),a.connect(u),u.connect(s),a.start(c),a.stop(c+n+.05)}pad(t,n){if(this.bgmGain===null||this.ctx===null)return;const i=this.ctx.currentTime,o=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900,o.type="sawtooth",o.frequency.value=t/2,s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+n*.3),s.gain.linearRampToValueAtTime(1e-4,i+n),o.connect(r),r.connect(s),s.connect(this.bgmGain),o.start(i),o.stop(i+n+.1)}scene(t,n,i,o){const s=o<15||i>=4?"panic":i>=3||o<40?"tense":"calm";let r=0;for(let c=0;c<t.length;c+=1)r=r*31+t.charCodeAt(c)|0;(s!==this.mood||n!==this.hue)&&(this.mood=s,this.hue=n,this.rnd=ns(r),this.step=0)}tick(){if(this.ctx===null||this.bgmGain===null||this.muted)return;const t=qg(this.hue,this.mood),n=this.step%8,i=this.mood==="calm"?.35:this.mood==="tense"?.55:.75;if(this.rnd()<i){const o=Math.floor(this.rnd()*8),s=ts(t,o);this.tone(s,this.mood==="calm"?.9:.45,.06,this.mood==="calm"?"sine":"triangle",this.bgmGain)}n===0&&this.pad(ts(t,0),this.mood==="calm"?6.4:3.2),this.mood==="panic"&&(n===0||n===4)&&(this.tone(52,.14,.16,"sine",this.bgmGain),this.tone(52,.12,.12,"sine",this.bgmGain,.18)),this.step+=1}sfx(t){if(!(this.ctx===null||this.sfxGain===null||this.muted))switch(t){case"click":this.tone(880,.06,.1,"sine",this.sfxGain);break;case"options":this.tone(523,.08,.09,"sine",this.sfxGain),this.tone(784,.1,.09,"sine",this.sfxGain,.07);break;case"tick":this.tone(1245,.04,.07,"square",this.sfxGain);break;case"ending":{const n=this.sfxGain;n!==null&&[523,659,784,1047].forEach((i,o)=>this.tone(i,.5,.08,"sine",n,o*.13));break}case"bad":{const n=this.sfxGain;n!==null&&[330,294,262,196].forEach((i,o)=>this.tone(i,.35,.09,"triangle",n,o*.15));break}}}startLoop(){if(this.bgmTimer!==null)return;const t=800;typeof setInterval=="function"&&(this.bgmTimer=setInterval(()=>this.tick(),t))}stopLoop(){this.bgmTimer!==void 0&&this.bgmTimer!==null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}}const At=new Wg,zg={class:"stage"},Jg={key:2,class:"topbar"},Xg={class:"lv-title"},Zg={key:3,class:"study-entry"},Qg={class:"sub"},e1=["placeholder"],t1=["disabled"],n1={key:4,class:"study-done"},i1={class:"sum"},o1={class:"story"},s1={name:"App"},r1=pt({...s1,props:{ctx:{}},setup(e){const n=e.ctx;De(n.event,T=>{T!==null&&T.type==="ending"&&(n.settle(),At.sfx(T.ending.rank==="S"||T.ending.rank==="A"?"ending":"bad"))}),De(n.event,T=>{var U,S,V;if(T===null)return;const $=pp(((U=n.current.value)==null?void 0:U.id)??"L01").hue;T.type==="node"?At.scene(((S=n.current.value)==null?void 0:S.id)??"L01",$,T.node.pressure??0,n.meters.value.composure):T.type==="options"&&(At.sfx("options"),At.scene(((V=n.current.value)==null?void 0:V.id)??"L01",$,3,n.meters.value.composure))});const i=pe(0),o=pe(null);De(n.event,T=>{if(T===null){i.value=0,o.value=null;return}T.type==="node"?(i.value=T.node.pressure??0,o.value="speaker"in T.node?String(T.node.speaker):null):T.type==="options"&&(i.value=T.options.length>0?i.value:0,o.value=null)});const s=oe(()=>{const T=n.meters.value.composure;return T>=50||n.screen.value!=="level"?{opacity:0}:{opacity:(.25+(50-T)/50*.55).toFixed(2),animation:T<15?"throb 1.1s ease-in-out infinite":"none"}}),r=oe(()=>n.screen.value==="level"),c=pe(""),a=oe(()=>n.STUDY_LEVELS.every(T=>{try{return n.studySummary().includes(T)}catch{return!1}}));function u(){const T=n.studyExport();typeof navigator<"u"&&navigator.clipboard!==void 0&&navigator.clipboard.writeText(T);const $=new Blob([T],{type:"application/json"}),U=document.createElement("a");U.href=URL.createObjectURL($),U.download=`study-${c.value||"anon"}.json`,U.click()}const p=pe(!1),d=oe(()=>p.value?"x":"m");function m(){p.value=!p.value,At.setMuted(p.value)}function k(){At.unlock(),At.startLoop()}document.addEventListener("pointerdown",k,{once:!0});const B=oe(()=>n.current.value?n.current.value.id:"L01");return(T,$)=>{var U;return I(),j("div",zg,[r.value?(I(),nt(tg,{key:0,"level-id":B.value,pressure:i.value},null,8,["level-id","pressure"])):be("",!0),r.value&&((U=O(n).event.value)==null?void 0:U.type)!=="ending"?(I(),nt(og,{key:1,pressure:i.value,active:r.value},null,8,["pressure","active"])):be("",!0),r.value?(I(),j("header",Jg,[b("button",{class:"back",onClick:$[0]||($[0]=S=>O(n).toSelect())},"‹"),b("span",Xg,H(O(n).banner.value),1),b("button",{class:ke(["mute",{off:p.value}]),onClick:$[1]||($[1]=S=>m())},H(d.value),3)])):be("",!0),O(n).studyOn&&O(n).studyScreen.value==="entry"?(I(),j("div",Zg,[b("h1",null,H(O(se).appTitle),1),b("p",Qg,H(O(Jt)("studyIntro")),1),lu(b("input",{"onUpdate:modelValue":$[2]||($[2]=S=>c.value=S),class:"pid",placeholder:O(Jt)("studyPidPlaceholder"),maxlength:"8"},null,8,e1),[[K_,c.value]]),b("button",{class:"go",disabled:c.value.trim().length===0,onClick:$[3]||($[3]=S=>O(n).studyBegin(c.value.trim()))},H(O(Jt)("studyStart")),9,t1)])):O(n).studyOn&&O(n).studyScreen.value==="done"&&a.value?(I(),j("div",n1,[b("h2",null,H(O(Jt)("studyDoneTitle")),1),b("pre",i1,H(O(n).studySummary()),1),b("button",{class:"go",onClick:u},H(O(Jt)("studyCopy")),1)])):O(n).screen.value==="select"?(I(),nt(b0,{key:5,levels:O(n).studyOn?O(gn).filter(S=>O(n).STUDY_LEVELS.includes(S.id)):O(gn),best:O(n).best.value,onPick:O(n).startLevel},null,8,["levels","best","onPick"])):O(n).event.value?(I(),j(xe,{key:6},[O(n).event.value.type!=="ending"?(I(),nt(Lf,{key:0,state:O(n).meters.value},null,8,["state"])):be("",!0),Se(Kg,{speaker:O(n).event.value.type==="node"&&"speaker"in O(n).event.value.node?o.value:null,visible:O(n).event.value.type==="node"&&"speaker"in O(n).event.value.node},null,8,["speaker","visible"]),b("div",o1,[O(n).event.value.type==="node"&&"script"in O(n).event.value.node?(I(),nt(es,{key:0,kind:"cutscene",text:String(O(n).event.value.node.script??""),onAdvance:$[4]||($[4]=S=>O(n).advance())},null,8,["text"])):O(n).event.value.type==="node"&&"speaker"in O(n).event.value.node?(I(),nt(es,{key:1,kind:"dialogue",speaker:String(O(n).event.value.node.speaker??""),text:String(O(n).event.value.node.text??""),onAdvance:$[5]||($[5]=S=>O(n).advance())},null,8,["speaker","text"])):O(n).event.value.type==="options"?(I(),nt(qf,{key:2,options:O(n).event.value.options,timer:O(n).event.value.timer,"timeout-option-id":O(n).event.value.timeoutOptionId,onChoose:O(n).choose},null,8,["options","timer","timeout-option-id","onChoose"])):O(n).event.value.type==="ending"?(I(),nt(g0,{key:3,ending:O(n).event.value.ending,state:O(n).event.value.state,onRestart:O(n).restart,onNext:O(n).nextLevel},null,8,["ending","state","onRestart","onNext"])):be("",!0)])],64)):be("",!0),r.value?(I(),j("div",{key:7,class:"vignette",style:Fe(s.value)},null,4)):be("",!0)])}}}),up="poju-study-v1",c1=()=>typeof location<"u"&&new URLSearchParams(location.search).get("study")==="1";function ht(){if(typeof localStorage>"u")return{sessionId:"",participant:"",startedAt:0,runs:[]};const e=localStorage.getItem(up);return e===null?{sessionId:"",participant:"",startedAt:0,runs:[]}:JSON.parse(e)}function ii(e){typeof localStorage<"u"&&localStorage.setItem(up,JSON.stringify(e))}function a1(e){const t={sessionId:`S-${performance.now().toString(36)}`,participant:e,startedAt:performance.now(),runs:[]};return oi=t,ii(t),t}function l1(e,t,n){const i={level:t,startedAt:performance.now(),endedAt:0,totalMs:0,choices:[],endingRank:"",endingTitle:"",finalMeters:{evidence:0,opinion:0,composure:0,risk:0},replayed:n},o=oi??ht();return o.runs.push(i),ii(o),i}let Mi=0,_p="",oi=null;function dp(e){Mi=performance.now(),_p=e}function p1(e,t,n,i,o){e.choices.push({level:n,nodeId:_p,optionId:i,ms:Mi>0?performance.now()-Mi:0,meters:{...o}});const s=oi??ht();ii(s)}function u1(e,t,n,i,o){e.endedAt=performance.now(),e.totalMs=e.endedAt-e.startedAt,e.endingRank=n,e.endingTitle=i,e.finalMeters={...o},ii(oi??ht())}function _1(){return JSON.stringify(ht(),null,2)}function d1(){const e=ht(),n=[se.ui.studySummaryHeader.replace("{p}",e.participant).replace("{n}",String(e.runs.length))],i=new Map;for(const o of e.runs){const s=i.get(o.level)??[];s.push(o),i.set(o.level,s)}for(const[o,s]of[...i.entries()].sort()){const r=s[0],c=Math.round(r.totalMs/1e3),a=se.ui.studySummaryLine;n.push(a.replace("{lv}",o).replace("{rank}",r.endingRank).replace("{title}",r.endingTitle).replace("{s}",String(c)).replace("{c}",String(r.choices.length)).replace("{r}",s.length>1?"Y":"N"))}return n.join(`
`)}const mn=pe("select"),gt=Jn(null),wt=Jn(null),Vn=pe(gd()),fp=pe(""),si=Jn(null),io=pe({evidence:0,opinion:0,composure:0,risk:0}),Ut=c1(),Ni=["L01","L02","L03","L04","L05"],gp=pe("entry"),hn=Jn(null);function f1(e){a1(e),gp.value="done",vn("L01")}function vn(e){const t=gn.find(i=>i.id===e)??null;if(t===null)return;gt.value=t,fp.value=t.title;const n=new no(t,Vn.value);if(si.value=n,wt.value=n.start(),io.value={...n.state},mn.value="level",Ut){const i=ht(),o=i.runs.some(s=>s.level===e&&s.endingRank!=="");hn.value=l1(i,e,o),dp("entry")}}function g1(){const e=si.value;e!==null&&(wt.value=e.proceed(),Ut&&wt.value.type==="node"&&dp(String(wt.value.node.id)))}function m1(e){const t=si.value;t!==null&&(wt.value=t.choose(e),io.value={...t.state},Ut&&hn.value!==null&&gt.value!==null&&p1(hn.value,ht(),gt.value.id,e,t.state))}function h1(){const e=si.value,t=gt.value,n=wt.value;if(e===null||t===null||n===null||n.type!=="ending")return;const i=kd(Vn.value,t.id,n.ending,n.state,{now:0});Vn.value=i,md(i),Ut&&hn.value!==null&&u1(hn.value,ht(),n.ending.rank,n.ending.title,e.state)}function v1(){gt.value!==null&&vn(gt.value.id)}function x1(){const e=gt.value;if(e===null)return;if(Ut){const i=Ni.indexOf(e.id),o=i>=0?Ni[i+1]:void 0;if(o===void 0){mn.value="select";return}vn(o);return}const t=gn.findIndex(i=>i.id===e.id),n=gn[t+1];if(n===void 0){mn.value="select";return}vn(n.id)}function k1(){mn.value="select"}const y1=oe(()=>{const e={};for(const[t,n]of Object.entries(Vn.value.levelResults))e[t]=n.rank;return e}),T1={screen:mn,current:gt,event:wt,banner:fp,best:y1,meters:io,startLevel:vn,advance:g1,choose:m1,settle:h1,restart:v1,nextLevel:x1,toSelect:k1,studyOn:Ut,STUDY_LEVELS:Ni,studyScreen:gp,studyBegin:f1,studyExport:()=>_1(),studySummary:()=>d1()},A1=X_(r1,{ctx:T1});A1.mount("#app");
