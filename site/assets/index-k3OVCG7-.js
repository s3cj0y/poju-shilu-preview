var ap=Object.defineProperty;var lp=(e,t,n)=>t in e?ap(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ae=(e,t,n)=>lp(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function so(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const pe={},Wt=[],rt=()=>{},bs=()=>!1,oi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),si=e=>e.startsWith("onUpdate:"),be=Object.assign,ro=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},up=Object.prototype.hasOwnProperty,re=(e,t)=>up.call(e,t),K=Array.isArray,zt=e=>Rn(e)==="[object Map]",As=e=>Rn(e)==="[object Set]",$o=e=>Rn(e)==="[object Date]",X=e=>typeof e=="function",he=e=>typeof e=="string",ct=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",ws=e=>(ce(e)||X(e))&&X(e.then)&&X(e.catch),Os=Object.prototype.toString,Rn=e=>Os.call(e),pp=e=>Rn(e).slice(8,-1),Ps=e=>Rn(e)==="[object Object]",co=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dn=so(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ri=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},dp=/-\w/g,We=ri(e=>e.replace(dp,t=>t.slice(1).toUpperCase())),_p=/\B([A-Z])/g,Vt=ri(e=>e.replace(_p,"-$1").toLowerCase()),Rs=ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),Li=ri(e=>e?`on${Rs(e)}`:""),st=(e,t)=>!Object.is(e,t),Hn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ss=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},ao=e=>{const t=parseFloat(e);return isNaN(t)?e:t},fp=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let Mo;const ci=()=>Mo||(Mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Be(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=he(i)?hp(i):Be(i);if(o)for(const s in o)t[s]=o[s]}return t}else if(he(e)||ce(e))return e}const gp=/;(?![^(]*\))/g,mp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function hp(e){const t={};return e.replace(vp,"").split(gp).forEach(n=>{if(n){const i=n.split(mp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function me(e){let t="";if(he(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const i=me(e[n]);i&&(t+=i+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=so(xp);function Es(e){return!!e||e===""}function yp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=lo(e[i],t[i]);return n}function lo(e,t){if(e===t)return!0;let n=$o(e),i=$o(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=ct(e),i=ct(t),n||i)return e===t;if(n=K(e),i=K(t),n||i)return n&&i?yp(e,t):!1;if(n=ce(e),i=ce(t),n||i){if(!n||!i)return!1;const o=Object.keys(e).length,s=Object.keys(t).length;if(o!==s)return!1;for(const r in e){const c=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(c&&!a||!c&&a||!lo(e[r],t[r]))return!1}}return String(e)===String(t)}const Is=e=>!!(e&&e.__v_isRef===!0),P=e=>he(e)?e:e==null?"":K(e)||ce(e)&&(e.toString===Os||!X(e.toString))?Is(e)?P(e.value):JSON.stringify(e,Cs,2):String(e),Cs=(e,t)=>Is(t)?Cs(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,o],s)=>(n[Ti(i,s)+" =>"]=o,n),{})}:As(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ti(n))}:ct(t)?Ti(t):ce(t)&&!K(t)&&!Ps(t)?String(t):t,Ti=(e,t="")=>{var n;return ct(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Lp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Pe&&(Pe.active?(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const i=this.effects.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){if(this._on>0&&--this._on===0){if(Pe===this)Pe=this.prevScope;else{let t=Pe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,i=o.length;n<i;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Tp(){return Pe}let fe;const bi=new WeakSet;class $s{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&(Pe.active?Pe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bi.has(this)&&(bi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ns(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,No(this),Fs(this);const t=fe,n=ze;fe=this,ze=!0;try{return this.fn()}finally{Ds(this),fe=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_o(t);this.deps=this.depsTail=void 0,No(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bi(this)&&this.run()}get dirty(){return Bi(this)}}let Ms=0,_n,fn;function Ns(e,t=!1){if(e.flags|=8,t){e.next=fn,fn=e;return}e.next=_n,_n=e}function uo(){Ms++}function po(){if(--Ms>0)return;if(fn){let t=fn;for(fn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;_n;){let t=_n;for(_n=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Fs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ds(e){let t,n=e.depsTail,i=n;for(;i;){const o=i.prevDep;i.version===-1?(i===n&&(n=o),_o(i),bp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=o}e.deps=t,e.depsTail=n}function Bi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Hs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Hs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kn)||(e.globalVersion=kn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Bi(e))))return;e.flags|=2;const t=e.dep,n=fe,i=ze;fe=e,ze=!0;try{Fs(e);const o=e.fn(e._value);(t.version===0||st(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{fe=n,ze=i,Ds(e),e.flags&=-3}}function _o(e,t=!1){const{dep:n,prevSub:i,nextSub:o}=e;if(i&&(i.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)_o(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function bp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const Bs=[];function gt(){Bs.push(ze),ze=!1}function mt(){const e=Bs.pop();ze=e===void 0?!0:e}function No(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let kn=0;class Ap{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!ze||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Ap(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=i)}return n}trigger(t){this.version++,kn++,this.notify(t)}notify(t){uo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{po()}}}function Gs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Gs(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Gi=new WeakMap,Ft=Symbol(""),Vi=Symbol(""),yn=Symbol("");function Re(e,t,n){if(ze&&fe){let i=Gi.get(e);i||Gi.set(e,i=new Map);let o=i.get(n);o||(i.set(n,o=new fo),o.map=i,o.key=n),o.track()}}function _t(e,t,n,i,o,s){const r=Gi.get(e);if(!r){kn++;return}const c=a=>{a&&a.trigger()};if(uo(),t==="clear")r.forEach(c);else{const a=K(e),u=a&&co(n);if(a&&n==="length"){const l=Number(i);r.forEach((_,v)=>{(v==="length"||v===yn||!ct(v)&&v>=l)&&c(_)})}else switch((n!==void 0||r.has(void 0))&&c(r.get(n)),u&&c(r.get(yn)),t){case"add":a?u&&c(r.get("length")):(c(r.get(Ft)),zt(e)&&c(r.get(Vi)));break;case"delete":a||(c(r.get(Ft)),zt(e)&&c(r.get(Vi)));break;case"set":zt(e)&&c(r.get(Ft));break}}po()}function Ut(e){const t=se(e);return t===e?t:(Re(t,"iterate",yn),Ye(e)?t:t.map(Xe))}function ai(e){return Re(e=se(e),"iterate",yn),e}function it(e,t){return vt(e)?Zt(Dt(e)?Xe(t):t):Xe(t)}const wp={__proto__:null,[Symbol.iterator](){return Ai(this,Symbol.iterator,e=>it(this,e))},concat(...e){return Ut(this).concat(...e.map(t=>K(t)?Ut(t):t))},entries(){return Ai(this,"entries",e=>(e[1]=it(this,e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(i=>it(this,i)),arguments)},find(e,t){return lt(this,"find",e,t,n=>it(this,n),arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,n=>it(this,n),arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return wi(this,"includes",e)},indexOf(...e){return wi(this,"indexOf",e)},join(e){return Ut(this).join(e)},lastIndexOf(...e){return wi(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return cn(this,"pop")},push(...e){return cn(this,"push",e)},reduce(e,...t){return Fo(this,"reduce",e,t)},reduceRight(e,...t){return Fo(this,"reduceRight",e,t)},shift(){return cn(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return cn(this,"splice",e)},toReversed(){return Ut(this).toReversed()},toSorted(e){return Ut(this).toSorted(e)},toSpliced(...e){return Ut(this).toSpliced(...e)},unshift(...e){return cn(this,"unshift",e)},values(){return Ai(this,"values",e=>it(this,e))}};function Ai(e,t,n){const i=ai(e),o=i[t]();return i!==e&&!Ye(e)&&(o._next=o.next,o.next=()=>{const s=o._next();return s.done||(s.value=n(s.value)),s}),o}const Op=Array.prototype;function lt(e,t,n,i,o,s){const r=ai(e),c=r!==e&&!Ye(e),a=r[t];if(a!==Op[t]){const _=a.apply(e,s);return c?Xe(_):_}let u=n;r!==e&&(c?u=function(_,v){return n.call(this,it(e,_),v,e)}:n.length>2&&(u=function(_,v){return n.call(this,_,v,e)}));const l=a.call(r,u,i);return c&&o?o(l):l}function Fo(e,t,n,i){const o=ai(e),s=o!==e&&!Ye(e);let r=n,c=!1;o!==e&&(s?(c=i.length===0,r=function(u,l,_){return c&&(c=!1,u=it(e,u)),n.call(this,u,it(e,l),_,e)}):n.length>3&&(r=function(u,l,_){return n.call(this,u,l,_,e)}));const a=o[t](r,...i);return c?it(e,a):a}function wi(e,t,n){const i=se(e);Re(i,"iterate",yn);const o=i[t](...n);return(o===-1||o===!1)&&ho(n[0])?(n[0]=se(n[0]),i[t](...n)):o}function cn(e,t,n=[]){gt(),uo();const i=se(e)[t].apply(e,n);return po(),mt(),i}const Pp=so("__proto__,__v_isRef,__isVue"),Vs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ct));function Rp(e){ct(e)||(e=String(e));const t=se(this);return Re(t,"has",e),t.hasOwnProperty(e)}class js{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(o?s?Hp:qs:s?Ks:Ys).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const r=K(t);if(!o){let a;if(r&&(a=wp[n]))return a;if(n==="hasOwnProperty")return Rp}const c=Reflect.get(t,n,Ee(t)?t:i);if((ct(n)?Vs.has(n):Pp(n))||(o||Re(t,"get",n),s))return c;if(Ee(c)){const a=r&&co(n)?c:c.value;return o&&ce(a)?Ui(a):a}return ce(c)?o?Ui(c):mo(c):c}}class Us extends js{constructor(t=!1){super(!1,t)}set(t,n,i,o){let s=t[n];const r=K(t)&&co(n);if(!this._isShallow){const u=vt(s);if(!Ye(i)&&!vt(i)&&(s=se(s),i=se(i)),!r&&Ee(s)&&!Ee(i))return u||(s.value=i),!0}const c=r?Number(n)<t.length:re(t,n),a=Reflect.set(t,n,i,Ee(t)?t:o);return t===se(o)&&a&&(c?st(i,s)&&_t(t,"set",n,i):_t(t,"add",n,i)),a}deleteProperty(t,n){const i=re(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&i&&_t(t,"delete",n,void 0),o}has(t,n){const i=Reflect.has(t,n);return(!ct(n)||!Vs.has(n))&&Re(t,"has",n),i}ownKeys(t){return Re(t,"iterate",K(t)?"length":Ft),Reflect.ownKeys(t)}}class Sp extends js{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ep=new Us,Ip=new Sp,Cp=new Us(!0);const ji=e=>e,$n=e=>Reflect.getPrototypeOf(e);function $p(e,t,n){return function(...i){const o=this.__v_raw,s=se(o),r=zt(s),c=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,u=o[e](...i),l=n?ji:t?Zt:Xe;return!t&&Re(s,"iterate",a?Vi:Ft),be(Object.create(u),{next(){const{value:_,done:v}=u.next();return v?{value:_,done:v}:{value:c?[l(_[0]),l(_[1])]:l(_),done:v}}})}}function Mn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Mp(e,t){const n={get(o){const s=this.__v_raw,r=se(s),c=se(o);e||(st(o,c)&&Re(r,"get",o),Re(r,"get",c));const{has:a}=$n(r),u=t?ji:e?Zt:Xe;if(a.call(r,o))return u(s.get(o));if(a.call(r,c))return u(s.get(c));s!==r&&s.get(o)},get size(){const o=this.__v_raw;return!e&&Re(se(o),"iterate",Ft),o.size},has(o){const s=this.__v_raw,r=se(s),c=se(o);return e||(st(o,c)&&Re(r,"has",o),Re(r,"has",c)),o===c?s.has(o):s.has(o)||s.has(c)},forEach(o,s){const r=this,c=r.__v_raw,a=se(c),u=t?ji:e?Zt:Xe;return!e&&Re(a,"iterate",Ft),c.forEach((l,_)=>o.call(s,u(l),u(_),r))}};return be(n,e?{add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear")}:{add(o){const s=se(this),r=$n(s),c=se(o),a=!t&&!Ye(o)&&!vt(o)?c:o;return r.has.call(s,a)||st(o,a)&&r.has.call(s,o)||st(c,a)&&r.has.call(s,c)||(s.add(a),_t(s,"add",a,a)),this},set(o,s){!t&&!Ye(s)&&!vt(s)&&(s=se(s));const r=se(this),{has:c,get:a}=$n(r);let u=c.call(r,o);u||(o=se(o),u=c.call(r,o));const l=a.call(r,o);return r.set(o,s),u?st(s,l)&&_t(r,"set",o,s):_t(r,"add",o,s),this},delete(o){const s=se(this),{has:r,get:c}=$n(s);let a=r.call(s,o);a||(o=se(o),a=r.call(s,o)),c&&c.call(s,o);const u=s.delete(o);return a&&_t(s,"delete",o,void 0),u},clear(){const o=se(this),s=o.size!==0,r=o.clear();return s&&_t(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=$p(o,e,t)}),n}function go(e,t){const n=Mp(e,t);return(i,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(re(n,o)&&o in i?n:i,o,s)}const Np={get:go(!1,!1)},Fp={get:go(!1,!0)},Dp={get:go(!0,!1)};const Ys=new WeakMap,Ks=new WeakMap,qs=new WeakMap,Hp=new WeakMap;function Bp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mo(e){return vt(e)?e:vo(e,!1,Ep,Np,Ys)}function Gp(e){return vo(e,!1,Cp,Fp,Ks)}function Ui(e){return vo(e,!0,Ip,Dp,qs)}function vo(e,t,n,i,o){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=o.get(e);if(s)return s;const r=Bp(pp(e));if(r===0)return e;const c=new Proxy(e,r===2?i:n);return o.set(e,c),c}function Dt(e){return vt(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function Ye(e){return!!(e&&e.__v_isShallow)}function ho(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function Vp(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&Ss(e,"__v_skip",!0),e}const Xe=e=>ce(e)?mo(e):e,Zt=e=>ce(e)?Ui(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function ee(e){return Ws(e,!1)}function li(e){return Ws(e,!0)}function Ws(e,t){return Ee(e)?e:new jp(e,t)}class jp{constructor(t,n){this.dep=new fo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:se(t),this._value=n?t:Xe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ye(t)||vt(t);t=i?t:se(t),st(t,n)&&(this._rawValue=t,this._value=i?t:Xe(t),this.dep.trigger())}}function h(e){return Ee(e)?e.value:e}const Up={get:(e,t,n)=>t==="__v_raw"?e:h(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return Ee(o)&&!Ee(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function zs(e){return Dt(e)?e:new Proxy(e,Up)}class Yp{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new fo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Ns(this,!0),!0}get value(){const t=this.dep.track();return Hs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Kp(e,t,n=!1){let i,o;return X(e)?i=e:(i=e.get,o=e.set),new Yp(i,o,n)}const Nn={},Un=new WeakMap;let Mt;function qp(e,t=!1,n=Mt){if(n){let i=Un.get(n);i||Un.set(n,i=[]),i.push(e)}}function Wp(e,t,n=pe){const{immediate:i,deep:o,once:s,scheduler:r,augmentJob:c,call:a}=n,u=w=>o?w:Ye(w)||o===!1||o===0?ft(w,1):ft(w);let l,_,v,g,A=!1,M=!1;if(Ee(e)?(_=()=>e.value,A=Ye(e)):Dt(e)?(_=()=>u(e),A=!0):K(e)?(M=!0,A=e.some(w=>Dt(w)||Ye(w)),_=()=>e.map(w=>{if(Ee(w))return w.value;if(Dt(w))return u(w);if(X(w))return a?a(w,2):w()})):X(e)?t?_=a?()=>a(e,2):e:_=()=>{if(v){gt();try{v()}finally{mt()}}const w=Mt;Mt=l;try{return a?a(e,3,[g]):e(g)}finally{Mt=w}}:_=rt,t&&o){const w=_,Q=o===!0?1/0:o;_=()=>ft(w(),Q)}const z=Tp(),J=()=>{l.stop(),z&&z.active&&ro(z.effects,l)};if(s&&t){const w=t;t=(...Q)=>{const ae=w(...Q);return J(),ae}}let U=M?new Array(e.length).fill(Nn):Nn;const H=w=>{if(!(!(l.flags&1)||!l.dirty&&!w))if(t){const Q=l.run();if(w||o||A||(M?Q.some((ae,ke)=>st(ae,U[ke])):st(Q,U))){v&&v();const ae=Mt;Mt=l;try{const ke=[Q,U===Nn?void 0:M&&U[0]===Nn?[]:U,g];U=Q,a?a(t,3,ke):t(...ke)}finally{Mt=ae}}}else l.run()};return c&&c(H),l=new $s(_),l.scheduler=r?()=>r(H,!1):H,g=w=>qp(w,!1,l),v=l.onStop=()=>{const w=Un.get(l);if(w){if(a)a(w,4);else for(const Q of w)Q();Un.delete(l)}},t?i?H(!0):U=l.run():r?r(H.bind(null,!0),!0):l.run(),J.pause=l.pause.bind(l),J.resume=l.resume.bind(l),J.stop=J,J}function ft(e,t=1/0,n){if(t<=0||!ce(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))ft(e.value,t,n);else if(K(e))for(let i=0;i<e.length;i++)ft(e[i],t,n);else if(As(e)||zt(e))e.forEach(i=>{ft(i,t,n)});else if(Ps(e)){for(const i in e)ft(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&ft(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sn(e,t,n,i){try{return i?e(...i):e()}catch(o){ui(o,t,n)}}function Ke(e,t,n,i){if(X(e)){const o=Sn(e,t,n,i);return o&&ws(o)&&o.catch(s=>{ui(s,t,n)}),o}if(K(e)){const o=[];for(let s=0;s<e.length;s++)o.push(Ke(e[s],t,n,i));return o}}function ui(e,t,n,i=!0){const o=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||pe;if(t){let c=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const l=c.ec;if(l){for(let _=0;_<l.length;_++)if(l[_](e,a,u)===!1)return}c=c.parent}if(s){gt(),Sn(s,null,10,[e,a,u]),mt();return}}zp(e,n,o,i,r)}function zp(e,t,n,i=!0,o=!1){if(o)throw e;console.error(e)}const Ce=[];let nt=-1;const Xt=[];let Tt=null,Yt=0;const Xs=Promise.resolve();let Yn=null;function xo(e){const t=Yn||Xs;return e?t.then(this?e.bind(this):e):t}function Xp(e){let t=nt+1,n=Ce.length;for(;t<n;){const i=t+n>>>1,o=Ce[i],s=Ln(o);s<e||s===e&&o.flags&2?t=i+1:n=i}return t}function ko(e){if(!(e.flags&1)){const t=Ln(e),n=Ce[Ce.length-1];!n||!(e.flags&2)&&t>=Ln(n)?Ce.push(e):Ce.splice(Xp(t),0,e),e.flags|=1,Js()}}function Js(){Yn||(Yn=Xs.then(Zs))}function Jp(e){if(!K(e))Tt&&e.id===-1?Tt.splice(Yt+1,0,e):e.flags&1||(Xt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Xt.push(e[t]);Js()}function Do(e,t,n=nt+1){for(;n<Ce.length;n++){const i=Ce[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Ce.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qs(e){if(Xt.length){const t=[...new Set(Xt)].sort((n,i)=>Ln(n)-Ln(i));if(Xt.length=0,Tt){for(let n=0;n<t.length;n++)Tt.push(t[n]);return}for(Tt=t,Yt=0;Yt<Tt.length;Yt++){const n=Tt[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,Yt=0}}const Ln=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Zs(e){try{for(nt=0;nt<Ce.length;nt++){const t=Ce[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Sn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;nt<Ce.length;nt++){const t=Ce[nt];t&&(t.flags&=-2)}nt=-1,Ce.length=0,Qs(),Yn=null,(Ce.length||Xt.length)&&Zs()}}let Ue=null,er=null;function Kn(e){const t=Ue;return Ue=e,er=e&&e.type.__scopeId||null,t}function yo(e,t=Ue,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Xn(-1);const s=Kn(t),r=Ht.length;let c;try{c=e(...o)}finally{for(let a=Ht.length;a>r;a--)Rr();Kn(s),i._d&&Xn(1)}return c};return i._n=!0,i._c=!0,i._d=!0,i}function Qp(e,t){if(Ue===null)return e;const n=mi(Ue),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,r,c,a=pe]=t[o];s&&(X(s)&&(s={mounted:s,updated:s}),s.deep&&ft(r),i.push({dir:s,instance:n,value:r,oldValue:void 0,arg:c,modifiers:a}))}return e}function Et(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const c=o[r];s&&(c.oldValue=s[r].value);let a=c.dir[i];a&&(gt(),Ke(a,n,8,[e.el,c,e,t]),mt())}}function Zp(e,t){if(Me){let n=Me.provides;const i=Me.parent&&Me.parent.provides;i===n&&(n=Me.provides=Object.create(i)),n[e]=t}}function Bn(e,t,n=!1){const i=Ao();if(i||Jt){let o=Jt?Jt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&X(t)?t.call(i&&i.proxy):t}}const ed=Symbol.for("v-scx"),td=()=>Bn(ed);function Se(e,t,n){return tr(e,t,n)}function tr(e,t,n=pe){const{immediate:i,deep:o,flush:s,once:r}=n,c=be({},n),a=t&&i||!t&&s!=="post";let u;if(wn){if(s==="sync"){const g=td();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=rt,g.resume=rt,g.pause=rt,g}}const l=Me;c.call=(g,A,M)=>Ke(g,l,A,M);let _=!1;s==="post"?c.scheduler=g=>{Ne(g,l&&l.suspense)}:s!=="sync"&&(_=!0,c.scheduler=(g,A)=>{A?g():ko(g)}),c.augmentJob=g=>{t&&(g.flags|=4),_&&(g.flags|=2,l&&(g.id=l.uid,g.i=l))};const v=Wp(e,t,c);return wn&&(u?u.push(v):a&&v()),v}function nd(e,t,n){const i=this.proxy,o=he(e)?e.includes(".")?nr(i,e):()=>i[e]:e.bind(i,i);let s;X(t)?s=t:(s=t.handler,n=t);const r=En(this),c=tr(o,s.bind(i),n);return r(),c}function nr(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}const id=Symbol("_vte"),pi=e=>e.__isTeleport,je=Symbol("_leaveCb"),an=Symbol("_enterCb");function ir(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nn(()=>{e.isMounted=!0}),pr(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],or={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},sr=e=>{const t=e.subTree;return t.component?sr(t.component):t},od={name:"BaseTransition",props:or,setup(e,{slots:t}){const n=Ao(),i=ir();return()=>{const o=t.default&&Lo(t.default(),!0),s=o&&o.length?rr(o):n.subTree?ne():void 0;if(!s)return;const r=se(e),{mode:c}=r;if(i.isLeaving)return Oi(s);const a=qn(s);if(!a)return Oi(s);let u=Tn(a,r,i,n,_=>u=_);a.type!==$e&&Bt(a,u);let l=n.subTree&&qn(n.subTree);if(l&&l.type!==$e&&!Nt(l,a)&&sr(n).type!==$e){let _=Tn(l,r,i,n);if(Bt(l,_),c==="out-in"&&a.type!==$e)return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete _.afterLeave,l=void 0},Oi(s);c==="in-out"&&a.type!==$e?_.delayLeave=(v,g,A)=>{const M=cr(i,l);M[String(l.key)]=l,v[je]=()=>{g(),v[je]=void 0,delete u.delayedLeave,l=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return s}}};function rr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==$e){t=n;break}}return t}const sd=od;function cr(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Tn(e,t,n,i,o){const{appear:s,mode:r,persisted:c=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:l,onEnterCancelled:_,onBeforeLeave:v,onLeave:g,onAfterLeave:A,onLeaveCancelled:M,onBeforeAppear:z,onAppear:J,onAfterAppear:U,onAppearCancelled:H}=t,w=String(e.key),Q=cr(n,e),ae=($,I)=>{$&&Ke($,i,9,I)},ke=($,I)=>{const V=I[1];ae($,I),K($)?$.every(S=>S.length<=1)&&V():$.length<=1&&V()},ge={mode:r,persisted:c,beforeEnter($){let I=a;if(!n.isMounted)if(s)I=z||a;else return;$[je]&&$[je](!0);const V=Q[w];V&&Nt(e,V)&&V.el[je]&&V.el[je](),ae(I,[$])},enter($){if(Q[w]===e)return;let I=u,V=l,S=_;if(!n.isMounted)if(s)I=J||u,V=U||l,S=H||_;else return;let Z=!1;$[an]=j=>{Z||(Z=!0,j?ae(S,[$]):ae(V,[$]),ge.delayedLeave&&ge.delayedLeave(),$[an]=void 0)};const de=$[an].bind(null,!1);I?ke(I,[$,de]):de()},leave($,I){const V=String(e.key);if($[an]&&$[an](!0),n.isUnmounting)return I();ae(v,[$]);let S=!1;$[je]=de=>{S||(S=!0,I(),de?ae(M,[$]):ae(A,[$]),$[je]=void 0,Q[V]===e&&delete Q[V])};const Z=$[je].bind(null,!1);Q[V]=e,g?ke(g,[$,Z]):Z()},clone($){const I=Tn($,t,n,i,o);return o&&o(I),I}};return ge}function Oi(e){if(di(e))return e=Ot(e),e.children=null,e}function qn(e){if(!di(e))return pi(e.type)&&e.children?rr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&X(n.default))return n.default()}}function Bt(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Bt(pi(n.type)&&qn(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Lo(e,t=!1,n){let i=[],o=0;for(let s=0;s<e.length;s++){let r=e[s];const c=n==null?r.key:String(n)+String(r.key!=null?r.key:s);r.type===Te?(r.patchFlag&128&&o++,i=i.concat(Lo(r.children,t,c))):(t||r.type!==$e)&&i.push(c!=null?Ot(r,{key:c}):r)}if(o>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function at(e,t){return X(e)?be({name:e.name},t,{setup:e}):e}function ar(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ho(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Wn=new WeakMap;function gn(e,t,n,i,o=!1){if(K(e)){e.forEach((M,z)=>gn(M,t&&(K(t)?t[z]:t),n,i,o));return}if(mn(i)&&!o){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gn(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?mi(i.component):i.el,r=o?null:s,{i:c,r:a}=e,u=t&&t.r,l=c.refs===pe?c.refs={}:c.refs,_=c.setupState,v=se(_),g=_===pe?bs:M=>Ho(l,M)?!1:re(v,M),A=(M,z)=>!(z&&Ho(l,z));if(u!=null&&u!==a){if(Bo(t),he(u))l[u]=null,g(u)&&(_[u]=null);else if(Ee(u)){const M=t;A(u,M.k)&&(u.value=null),M.k&&(l[M.k]=null)}}if(X(a))Sn(a,c,12,[r,l]);else{const M=he(a),z=Ee(a);if(M||z){const J=()=>{if(e.f){const U=M?g(a)?_[a]:l[a]:A()||!e.k?a.value:l[e.k];if(o)K(U)&&ro(U,s);else if(K(U))U.includes(s)||U.push(s);else if(M)l[a]=[s],g(a)&&(_[a]=l[a]);else{const H=[s];A(a,e.k)&&(a.value=H),e.k&&(l[e.k]=H)}}else M?(l[a]=r,g(a)&&(_[a]=r)):z&&(A(a,e.k)&&(a.value=r),e.k&&(l[e.k]=r))};if(r){const U=()=>{J(),Wn.delete(e)};U.id=-1,Wn.set(e,U),Ne(U,n)}else Bo(e),J()}}}function Bo(e){const t=Wn.get(e);t&&(t.flags|=8,Wn.delete(e))}ci().requestIdleCallback;ci().cancelIdleCallback;const mn=e=>!!e.type.__asyncLoader,di=e=>e.type.__isKeepAlive;function rd(e,t){lr(e,"a",t)}function cd(e,t){lr(e,"da",t)}function lr(e,t,n=Me){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(_i(t,i,n),n){let o=n.parent;for(;o&&o.parent;)di(o.parent.vnode)&&ad(i,t,n,o),o=o.parent}}function ad(e,t,n,i){const o=_i(t,e,i,!0);jt(()=>{ro(i[t],o)},n)}function _i(e,t,n=Me,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{gt();const c=En(n),a=Ke(t,n,e,r);return c(),mt(),a});return i?o.unshift(s):o.push(s),s}}const ht=e=>(t,n=Me)=>{(!wn||e==="sp")&&_i(e,(...i)=>t(...i),n)},ld=ht("bm"),nn=ht("m"),ud=ht("bu"),ur=ht("u"),pr=ht("bum"),jt=ht("um"),pd=ht("sp"),dd=ht("rtg"),_d=ht("rtc");function fd(e,t=Me){_i("ec",e,t)}const gd=Symbol.for("v-ndc");function wt(e,t,n,i){let o;const s=n,r=K(e);if(r||he(e)){const c=r&&Dt(e);let a=!1,u=!1;c&&(a=!Ye(e),u=vt(e),e=ai(e)),o=new Array(e.length);for(let l=0,_=e.length;l<_;l++)o[l]=t(a?u?Zt(Xe(e[l])):Xe(e[l]):e[l],l,void 0,s)}else if(typeof e=="number"){o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,s)}else if(ce(e))if(e[Symbol.iterator])o=Array.from(e,(c,a)=>t(c,a,void 0,s));else{const c=Object.keys(e);o=new Array(c.length);for(let a=0,u=c.length;a<u;a++){const l=c[a];o[a]=t(e[l],l,a,s)}}else o=[];return o}const Yi=e=>e?Ir(e)?mi(e):Yi(e.parent):null,vn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yi(e.parent),$root:e=>Yi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_r(e),$forceUpdate:e=>e.f||(e.f=()=>{ko(e.update)}),$nextTick:e=>e.n||(e.n=xo.bind(e.proxy)),$watch:e=>nd.bind(e)}),Pi=(e,t)=>e!==pe&&!e.__isScriptSetup&&re(e,t),md={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:c,appContext:a}=e;if(t[0]!=="$"){const v=r[t];if(v!==void 0)switch(v){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(Pi(i,t))return r[t]=1,i[t];if(o!==pe&&re(o,t))return r[t]=2,o[t];if(re(s,t))return r[t]=3,s[t];if(n!==pe&&re(n,t))return r[t]=4,n[t];Ki&&(r[t]=0)}}const u=vn[t];let l,_;if(u)return t==="$attrs"&&Re(e.attrs,"get",""),u(e);if((l=c.__cssModules)&&(l=l[t]))return l;if(n!==pe&&re(n,t))return r[t]=4,n[t];if(_=a.config.globalProperties,re(_,t))return _[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return Pi(o,t)?(o[t]=n,!0):i!==pe&&re(i,t)?(i[t]=n,!0):re(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,props:s,type:r}},c){let a;return!!(n[c]||e!==pe&&c[0]!=="$"&&re(e,c)||Pi(t,c)||re(s,c)||re(i,c)||re(vn,c)||re(o.config.globalProperties,c)||(a=r.__cssModules)&&a[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:re(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Go(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ki=!0;function vd(e){const t=_r(e),n=e.proxy,i=e.ctx;Ki=!1,t.beforeCreate&&Vo(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:c,provide:a,inject:u,created:l,beforeMount:_,mounted:v,beforeUpdate:g,updated:A,activated:M,deactivated:z,beforeDestroy:J,beforeUnmount:U,destroyed:H,unmounted:w,render:Q,renderTracked:ae,renderTriggered:ke,errorCaptured:ge,serverPrefetch:$,expose:I,inheritAttrs:V,components:S,directives:Z,filters:de}=t;if(u&&hd(u,i,null),r)for(const B in r){const ie=r[B];X(ie)&&(i[B]=ie.bind(n))}if(o){const B=o.call(n,n);ce(B)&&(e.data=mo(B))}if(Ki=!0,s)for(const B in s){const ie=s[B],T=X(ie)?ie.bind(n,n):X(ie.get)?ie.get.bind(n,n):rt,C=!X(ie)&&X(ie.set)?ie.set.bind(n):rt,_e=te({get:T,set:C});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>_e.value,set:q=>_e.value=q})}if(c)for(const B in c)dr(c[B],i,n,B);if(a){const B=X(a)?a.call(n):a;Reflect.ownKeys(B).forEach(ie=>{Zp(ie,B[ie])})}l&&Vo(l,e,"c");function D(B,ie){K(ie)?ie.forEach(T=>B(T.bind(n))):ie&&B(ie.bind(n))}if(D(ld,_),D(nn,v),D(ud,g),D(ur,A),D(rd,M),D(cd,z),D(fd,ge),D(_d,ae),D(dd,ke),D(pr,U),D(jt,w),D(pd,$),K(I))if(I.length){const B=e.exposed||(e.exposed={});I.forEach(ie=>{Object.defineProperty(B,ie,{get:()=>n[ie],set:T=>n[ie]=T,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===rt&&(e.render=Q),V!=null&&(e.inheritAttrs=V),S&&(e.components=S),Z&&(e.directives=Z),$&&ar(e)}function hd(e,t,n=rt){K(e)&&(e=qi(e));for(const i in e){const o=e[i];let s;ce(o)?"default"in o?s=Bn(o.from||i,o.default,!0):s=Bn(o.from||i):s=Bn(o),Ee(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:r=>s.value=r}):t[i]=s}}function Vo(e,t,n){Ke(K(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function dr(e,t,n,i){let o=i.includes(".")?nr(n,i):()=>n[i];if(he(e)){const s=t[e];X(s)&&Se(o,s)}else if(X(e))Se(o,e.bind(n));else if(ce(e))if(K(e))e.forEach(s=>dr(s,t,n,i));else{const s=X(e.handler)?e.handler.bind(n):t[e.handler];X(s)&&Se(o,s,e)}}function _r(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,c=s.get(t);let a;return c?a=c:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(u=>zn(a,u,r,!0)),zn(a,t,r)),ce(t)&&s.set(t,a),a}function zn(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&zn(e,s,n,!0),o&&o.forEach(r=>zn(e,r,n,!0));for(const r in t)if(!(i&&r==="expose")){const c=xd[r]||n&&n[r];e[r]=c?c(e[r],t[r]):t[r]}return e}const xd={data:jo,props:Uo,emits:Uo,methods:un,computed:un,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:un,directives:un,watch:yd,provide:jo,inject:kd};function jo(e,t){return t?e?function(){return be(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function kd(e,t){return un(qi(e),qi(t))}function qi(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?be(Object.create(null),e,t):t}function Uo(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:be(Object.create(null),Go(e),Go(t??{})):t}function yd(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const i in t)n[i]=Ie(e[i],t[i]);return n}function fr(){return{app:null,config:{isNativeTag:bs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ld=0;function Td(e,t){return function(i,o=null){X(i)||(i=be({},i)),o!=null&&!ce(o)&&(o=null);const s=fr(),r=new WeakSet,c=[];let a=!1;const u=s.app={_uid:Ld++,_component:i,_props:o,_container:null,_context:s,_instance:null,version:e_,get config(){return s.config},set config(l){},use(l,..._){return r.has(l)||(l&&X(l.install)?(r.add(l),l.install(u,..._)):X(l)&&(r.add(l),l(u,..._))),u},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),u},component(l,_){return _?(s.components[l]=_,u):s.components[l]},directive(l,_){return _?(s.directives[l]=_,u):s.directives[l]},mount(l,_,v){if(!a){const g=u._ceVNode||we(i,o);return g.appContext=s,v===!0?v="svg":v===!1&&(v=void 0),e(g,l,v),a=!0,u._container=l,l.__vue_app__=u,mi(g.component)}},onUnmount(l){c.push(l)},unmount(){a&&(Ke(c,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(l,_){return s.provides[l]=_,u},runWithContext(l){const _=Jt;Jt=u;try{return l()}finally{Jt=_}}};return u}}let Jt=null;const bd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${Vt(t)}Modifiers`];function Ad(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||pe;let o=n;const s=t.startsWith("update:"),r=s&&bd(i,t.slice(7));r&&(r.trim&&(o=n.map(l=>he(l)?l.trim():l)),r.number&&(o=n.map(ao)));let c,a=i[c=Li(t)]||i[c=Li(We(t))];!a&&s&&(a=i[c=Li(Vt(t))]),a&&Ke(a,e,6,o);const u=i[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ke(u,e,6,o)}}const wd=new WeakMap;function gr(e,t,n=!1){const i=n?wd:t.emitsCache,o=i.get(e);if(o!==void 0)return o;const s=e.emits;let r={},c=!1;if(!X(e)){const a=u=>{const l=gr(u,t,!0);l&&(c=!0,be(r,l))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!c?(ce(e)&&i.set(e,null),null):(K(s)?s.forEach(a=>r[a]=null):be(r,s),ce(e)&&i.set(e,r),r)}function fi(e,t){return!e||!oi(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),re(e,t[0].toLowerCase()+t.slice(1))||re(e,Vt(t))||re(e,t))}function Yo(e){const{type:t,vnode:n,proxy:i,withProxy:o,propsOptions:[s],slots:r,attrs:c,emit:a,render:u,renderCache:l,props:_,data:v,setupState:g,ctx:A,inheritAttrs:M}=e,z=Kn(e);let J,U;try{if(n.shapeFlag&4){const w=o||i,Q=w;J=ot(u.call(Q,w,l,_,g,v,A)),U=c}else{const w=t;J=ot(w.length>1?w(_,{attrs:c,slots:r,emit:a}):w(_,null)),U=t.props?c:Od(c)}}catch(w){Ht.length=0,ui(w,e,1),J=we($e)}let H=J;if(U&&M!==!1){const w=Object.keys(U),{shapeFlag:Q}=H;w.length&&Q&7&&(s&&w.some(si)&&(U=Pd(U,s)),H=Ot(H,U,!1,!0))}if(n.dirs&&(H=Ot(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition){const w=pi(H.type)&&qn(H)||H;Bt(w,n.transition)}return J=H,Kn(z),J}const Od=e=>{let t;for(const n in e)(n==="class"||n==="style"||oi(n))&&((t||(t={}))[n]=e[n]);return t},Pd=(e,t)=>{const n={};for(const i in e)(!si(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function Rd(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:c,patchFlag:a}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?Ko(i,r,u):!!r;if(a&8){const l=t.dynamicProps;for(let _=0;_<l.length;_++){const v=l[_];if(mr(r,i,v)&&!fi(u,v))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:i===r?!1:i?r?Ko(i,r,u):!0:!!r;return!1}function Ko(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(mr(t,e,s)&&!fi(n,s))return!0}return!1}function mr(e,t,n){const i=e[n],o=t[n];return n==="style"&&ce(i)&&ce(o)?!lo(i,o):i!==o}function Sd({vnode:e,parent:t,suspense:n},i){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=i,e=o),o===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const vr={},hr=()=>Object.create(vr),xr=e=>Object.getPrototypeOf(e)===vr;function Ed(e,t,n,i=!1){const o={},s=hr();e.propsDefaults=Object.create(null),kr(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Gp(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Id(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,c=se(o),[a]=e.propsOptions;let u=!1;if((i||r>0)&&!(r&16)){if(r&8){const l=e.vnode.dynamicProps;for(let _=0;_<l.length;_++){let v=l[_];if(fi(e.emitsOptions,v))continue;const g=t[v];if(a)if(re(s,v))g!==s[v]&&(s[v]=g,u=!0);else{const A=We(v);o[A]=Wi(a,c,A,g,e,!1)}else g!==s[v]&&(s[v]=g,u=!0)}}}else{kr(e,t,o,s)&&(u=!0);let l;for(const _ in c)(!t||!re(t,_)&&((l=Vt(_))===_||!re(t,l)))&&(a?n&&(n[_]!==void 0||n[l]!==void 0)&&(o[_]=Wi(a,c,_,void 0,e,!0)):delete o[_]);if(s!==c)for(const _ in s)(!t||!re(t,_))&&(delete s[_],u=!0)}u&&_t(e.attrs,"set","")}function kr(e,t,n,i){const[o,s]=e.propsOptions;let r=!1,c;if(t)for(let a in t){if(dn(a))continue;const u=t[a];let l;o&&re(o,l=We(a))?!s||!s.includes(l)?n[l]=u:(c||(c={}))[l]=u:fi(e.emitsOptions,a)||(!(a in i)||u!==i[a])&&(i[a]=u,r=!0)}if(s){const a=se(n),u=c||pe;for(let l=0;l<s.length;l++){const _=s[l];n[_]=Wi(o,a,_,u[_],e,!re(u,_))}}return r}function Wi(e,t,n,i,o,s){const r=e[n];if(r!=null){const c=re(r,"default");if(c&&i===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&X(a)){const{propsDefaults:u}=o;if(n in u)i=u[n];else{const l=En(o);i=u[n]=a.call(null,t),l()}}else i=a;o.ce&&o.ce._setProp(n,i)}r[0]&&(s&&!c?i=!1:r[1]&&(i===""||i===Vt(n))&&(i=!0))}return i}const Cd=new WeakMap;function yr(e,t,n=!1){const i=n?Cd:t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},c=[];let a=!1;if(!X(e)){const l=_=>{a=!0;const[v,g]=yr(_,t,!0);be(r,v),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!a)return ce(e)&&i.set(e,Wt),Wt;if(K(s))for(let l=0;l<s.length;l++){const _=We(s[l]);qo(_)&&(r[_]=pe)}else if(s)for(const l in s){const _=We(l);if(qo(_)){const v=s[l],g=r[_]=K(v)||X(v)?{type:v}:be({},v),A=g.type;let M=!1,z=!0;if(K(A))for(let J=0;J<A.length;++J){const U=A[J],H=X(U)&&U.name;if(H==="Boolean"){M=!0;break}else H==="String"&&(z=!1)}else M=X(A)&&A.name==="Boolean";g[0]=M,g[1]=z,(M||re(g,"default"))&&c.push(_)}}const u=[r,c];return ce(e)&&i.set(e,u),u}function qo(e){return e[0]!=="$"&&!dn(e)}const To=e=>e==="_"||e==="_ctx"||e==="$stable",bo=e=>K(e)?e.map(ot):[ot(e)],$d=(e,t,n)=>{if(t._n)return t;const i=yo((...o)=>bo(t(...o)),n);return i._c=!1,i},Lr=(e,t,n)=>{const i=e._ctx;for(const o in e){if(To(o))continue;const s=e[o];if(X(s))t[o]=$d(o,s,i);else if(s!=null){const r=bo(s);t[o]=()=>r}}},Tr=(e,t)=>{const n=bo(t);e.slots.default=()=>n},br=(e,t,n)=>{for(const i in t)(n||!To(i))&&(e[i]=t[i])},Md=(e,t,n)=>{const i=e.slots=hr();if(e.vnode.shapeFlag&32){const o=t._;o?(br(i,t,n),n&&Ss(i,"_",o,!0)):Lr(t,i)}else t&&Tr(e,t)},Nd=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=pe;if(i.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:br(o,t,n):(s=!t.$stable,Lr(t,o)),r=t}else t&&(Tr(e,t),r={default:1});if(s)for(const c in o)!To(c)&&r[c]==null&&delete o[c]},Ne=Gd;function Fd(e){return Dd(e)}function Dd(e,t){const n=ci();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:r,createText:c,createComment:a,setText:u,setElementText:l,parentNode:_,nextSibling:v,setScopeId:g=rt,insertStaticContent:A}=e,M=(p,d,m,L=null,y=null,x=null,E=void 0,O=null,b=!!d.dynamicChildren)=>{if(p===d)return;p&&!Nt(p,d)&&(L=Cn(p),q(p,y,x,!0),p=null),d.patchFlag===-2&&(b=!1,d.dynamicChildren=null);const{type:k,ref:Y,shapeFlag:N}=d;switch(k){case gi:z(p,d,m,L);break;case $e:J(p,d,m,L);break;case Gn:p==null&&U(d,m,L,E);break;case Te:S(p,d,m,L,y,x,E,O,b);break;default:N&1?Q(p,d,m,L,y,x,E,O,b):N&6?Z(p,d,m,L,y,x,E,O,b):(N&64||N&128)&&k.process(p,d,m,L,y,x,E,O,b,sn)}Y!=null&&y?gn(Y,p&&p.ref,x,d||p,!d):Y==null&&p&&p.ref!=null&&gn(p.ref,null,x,p,!0)},z=(p,d,m,L)=>{if(p==null)i(d.el=c(d.children),m,L);else{const y=d.el=p.el;d.children!==p.children&&u(y,d.children)}},J=(p,d,m,L)=>{p==null?i(d.el=a(d.children||""),m,L):d.el=p.el},U=(p,d,m,L)=>{[p.el,p.anchor]=A(p.children,d,m,L,p.el,p.anchor)},H=({el:p,anchor:d},m,L)=>{let y;for(;p&&p!==d;)y=v(p),i(p,m,L),p=y;i(d,m,L)},w=({el:p,anchor:d})=>{let m;for(;p&&p!==d;)m=v(p),o(p),p=m;o(d)},Q=(p,d,m,L,y,x,E,O,b)=>{if(d.type==="svg"?E="svg":d.type==="math"&&(E="mathml"),p==null)ae(d,m,L,y,x,E,O,b);else{const k=p.el&&p.el._isVueCE?p.el:null;try{k&&k._beginPatch(),$(p,d,y,x,E,O,b)}finally{k&&k._endPatch()}}},ae=(p,d,m,L,y,x,E,O)=>{let b,k;const{props:Y,shapeFlag:N,transition:G,dirs:W}=p;if(b=p.el=r(p.type,x,Y&&Y.is,Y),N&8?l(b,p.children):N&16&&ge(p.children,b,null,L,y,Ri(p,x),E,O),W&&Et(p,null,L,"created"),ke(b,p,p.scopeId,E,L),Y){for(const ue in Y)ue!=="value"&&!dn(ue)&&s(b,ue,null,Y[ue],x,L);"value"in Y&&s(b,"value",null,Y.value,x),(k=Y.onVnodeBeforeMount)&&et(k,L,p)}W&&Et(p,null,L,"beforeMount");const oe=Hd(y,G);oe&&G.beforeEnter(b),i(b,d,m),((k=Y&&Y.onVnodeMounted)||oe||W)&&Ne(()=>{try{k&&et(k,L,p),oe&&G.enter(b),W&&Et(p,null,L,"mounted")}finally{}},y)},ke=(p,d,m,L,y)=>{if(m&&g(p,m),L)for(let x=0;x<L.length;x++)g(p,L[x]);if(y){let x=y.subTree;if(d===x||Pr(x.type)&&(x.ssContent===d||x.ssFallback===d)){const E=y.vnode;ke(p,E,E.scopeId,E.slotScopeIds,y.parent)}}},ge=(p,d,m,L,y,x,E,O,b=0)=>{for(let k=b;k<p.length;k++){const Y=p[k]=O?dt(p[k]):ot(p[k]);M(null,Y,d,m,L,y,x,E,O)}},$=(p,d,m,L,y,x,E)=>{const O=d.el=p.el;let{patchFlag:b,dynamicChildren:k,dirs:Y}=d;b|=p.patchFlag&16;const N=p.props||pe,G=d.props||pe;let W;if(m&&It(m,!1),(W=G.onVnodeBeforeUpdate)&&et(W,m,d,p),Y&&Et(d,p,m,"beforeUpdate"),m&&It(m,!0),k&&(!p.dynamicChildren||p.dynamicChildren.length!==k.length)&&(b=0,E=!1,k=null),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&l(O,""),k?I(p.dynamicChildren,k,O,m,L,Ri(d,y),x):E||ie(p,d,O,null,m,L,Ri(d,y),x,!1),b>0){if(b&16)V(O,N,G,m,y);else if(b&2&&N.class!==G.class&&s(O,"class",null,G.class,y),b&4&&s(O,"style",N.style,G.style,y),b&8){const oe=d.dynamicProps;for(let ue=0;ue<oe.length;ue++){const le=oe[ue],Le=N[le],Oe=G[le];(Oe!==Le||le==="value")&&s(O,le,Le,Oe,y,m)}}b&1&&p.children!==d.children&&l(O,d.children)}else!E&&k==null&&V(O,N,G,m,y);((W=G.onVnodeUpdated)||Y)&&Ne(()=>{W&&et(W,m,d,p),Y&&Et(d,p,m,"updated")},L)},I=(p,d,m,L,y,x,E)=>{for(let O=0;O<d.length;O++){const b=p[O],k=d[O],Y=b.el&&(b.type===Te||!Nt(b,k)||b.shapeFlag&198)?_(b.el):m;M(b,k,Y,null,L,y,x,E,!0)}},V=(p,d,m,L,y)=>{if(d!==m){if(d!==pe)for(const x in d)!dn(x)&&!(x in m)&&s(p,x,d[x],null,y,L);for(const x in m){if(dn(x))continue;const E=m[x],O=d[x];E!==O&&x!=="value"&&s(p,x,O,E,y,L)}"value"in m&&s(p,"value",d.value,m.value,y)}},S=(p,d,m,L,y,x,E,O,b)=>{const k=d.el=p?p.el:c(""),Y=d.anchor=p?p.anchor:c("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:W}=d;W&&(O=O?O.concat(W):W),p==null?(i(k,m,L),i(Y,m,L),ge(d.children||[],m,Y,y,x,E,O,b)):N>0&&N&64&&G&&p.dynamicChildren&&p.dynamicChildren.length===G.length?(I(p.dynamicChildren,G,m,y,x,E,O),(d.key!=null||y&&d===y.subTree)&&Ar(p,d,!0)):ie(p,d,m,Y,y,x,E,O,b)},Z=(p,d,m,L,y,x,E,O,b)=>{d.slotScopeIds=O,p==null?d.shapeFlag&512?y.ctx.activate(d,m,L,E,b):de(d,m,L,y,x,E,b):j(p,d,b)},de=(p,d,m,L,y,x,E)=>{const O=p.component=qd(p,L,y);if(di(p)&&(O.ctx.renderer=sn),Wd(O,!1,E),O.asyncDep){if(y&&y.registerDep(O,D,E),!p.el){const b=O.subTree=we($e);J(null,b,d,m),p.placeholder=b.el}}else D(O,p,d,m,y,x,E)},j=(p,d,m)=>{const L=d.component=p.component;if(Rd(p,d,m))if(L.asyncDep&&!L.asyncResolved){B(L,d,m);return}else L.next=d,L.update();else d.el=p.el,L.vnode=d},D=(p,d,m,L,y,x,E)=>{const O=()=>{if(p.isMounted){let{next:N,bu:G,u:W,parent:oe,vnode:ue}=p;{const Qe=wr(p);if(Qe){N&&(N.el=ue.el,B(p,N,E)),Qe.asyncDep.then(()=>{Ne(()=>{p.isUnmounted||k()},y)});return}}let le=N,Le;It(p,!1),N?(N.el=ue.el,B(p,N,E)):N=ue,G&&Hn(G),(Le=N.props&&N.props.onVnodeBeforeUpdate)&&et(Le,oe,N,ue),It(p,!0);const Oe=Yo(p),Je=p.subTree;p.subTree=Oe,M(Je,Oe,_(Je.el),Cn(Je),p,y,x),N.el=Oe.el,le===null&&Sd(p,Oe.el),W&&Ne(W,y),(Le=N.props&&N.props.onVnodeUpdated)&&Ne(()=>et(Le,oe,N,ue),y)}else{let N;const{el:G,props:W}=d,{bm:oe,m:ue,parent:le,root:Le,type:Oe}=p,Je=mn(d);It(p,!1),oe&&Hn(oe),!Je&&(N=W&&W.onVnodeBeforeMount)&&et(N,le,d),It(p,!0);{Le.ce&&Le.ce._hasShadowRoot()&&Le.ce._injectChildStyle(Oe,p.parent?p.parent.type:void 0);const Qe=p.subTree=Yo(p);M(null,Qe,m,L,p,y,x),d.el=Qe.el}if(ue&&Ne(ue,y),!Je&&(N=W&&W.onVnodeMounted)){const Qe=d;Ne(()=>et(N,le,Qe),y)}(d.shapeFlag&256||le&&mn(le.vnode)&&le.vnode.shapeFlag&256)&&p.a&&Ne(p.a,y),p.isMounted=!0,d=m=L=null}};p.scope.on();const b=p.effect=new $s(O);p.scope.off();const k=p.update=b.run.bind(b),Y=p.job=b.runIfDirty.bind(b);Y.i=p,Y.id=p.uid,b.scheduler=()=>ko(Y),It(p,!0),k()},B=(p,d,m)=>{d.component=p;const L=p.vnode.props;p.vnode=d,p.next=null,Id(p,d.props,L,m),Nd(p,d.children,m),gt(),Do(p),mt()},ie=(p,d,m,L,y,x,E,O,b=!1)=>{const k=p&&p.children,Y=p?p.shapeFlag:0,N=d.children,{patchFlag:G,shapeFlag:W}=d;if(G>0){if(G&128){C(k,N,m,L,y,x,E,O,b);return}else if(G&256){T(k,N,m,L,y,x,E,O,b);return}}W&8?(Y&16&&on(k,y,x),N!==k&&l(m,N)):Y&16?W&16?C(k,N,m,L,y,x,E,O,b):on(k,y,x,!0):(Y&8&&l(m,""),W&16&&ge(N,m,L,y,x,E,O,b))},T=(p,d,m,L,y,x,E,O,b)=>{p=p||Wt,d=d||Wt;const k=p.length,Y=d.length,N=Math.min(k,Y);let G;for(G=0;G<N;G++){const W=d[G]=b?dt(d[G]):ot(d[G]);M(p[G],W,m,null,y,x,E,O,b)}k>Y?on(p,y,x,!0,!1,N):ge(d,m,L,y,x,E,O,b,N)},C=(p,d,m,L,y,x,E,O,b)=>{let k=0;const Y=d.length;let N=p.length-1,G=Y-1;for(;k<=N&&k<=G;){const W=p[k],oe=d[k]=b?dt(d[k]):ot(d[k]);if(Nt(W,oe))M(W,oe,m,null,y,x,E,O,b);else break;k++}for(;k<=N&&k<=G;){const W=p[N],oe=d[G]=b?dt(d[G]):ot(d[G]);if(Nt(W,oe))M(W,oe,m,null,y,x,E,O,b);else break;N--,G--}if(k>N){if(k<=G){const W=G+1,oe=W<Y?d[W].el:L;for(;k<=G;)M(null,d[k]=b?dt(d[k]):ot(d[k]),m,oe,y,x,E,O,b),k++}}else if(k>G)for(;k<=N;)q(p[k],y,x,!0),k++;else{const W=k,oe=k,ue=new Map;for(k=oe;k<=G;k++){const Fe=d[k]=b?dt(d[k]):ot(d[k]);Fe.key!=null&&ue.set(Fe.key,k)}let le,Le=0;const Oe=G-oe+1;let Je=!1,Qe=0;const rn=new Array(Oe);for(k=0;k<Oe;k++)rn[k]=0;for(k=W;k<=N;k++){const Fe=p[k];if(Le>=Oe){q(Fe,y,x,!0);continue}let Ze;if(Fe.key!=null)Ze=ue.get(Fe.key);else for(le=oe;le<=G;le++)if(rn[le-oe]===0&&Nt(Fe,d[le])){Ze=le;break}Ze===void 0?q(Fe,y,x,!0):(rn[Ze-oe]=k+1,Ze>=Qe?Qe=Ze:Je=!0,M(Fe,d[Ze],m,null,y,x,E,O,b),Le++)}const Eo=Je?Bd(rn):Wt;for(le=Eo.length-1,k=Oe-1;k>=0;k--){const Fe=oe+k,Ze=d[Fe],Io=d[Fe+1],Co=Fe+1<Y?Io.el||Or(Io):L;rn[k]===0?M(null,Ze,m,Co,y,x,E,O,b):Je&&(le<0||k!==Eo[le]?_e(Ze,m,Co,2):le--)}}},_e=(p,d,m,L,y=null)=>{const{el:x,type:E,transition:O,children:b,shapeFlag:k}=p;if(k&6){_e(p.component.subTree,d,m,L);return}if(k&128){p.suspense.move(d,m,L);return}if(k&64){E.move(p,d,m,sn);return}if(E===Te){i(x,d,m);for(let N=0;N<b.length;N++)_e(b[N],d,m,L);i(p.anchor,d,m);return}if(E===Gn){H(p,d,m);return}if(L!==2&&k&1&&O)if(L===0)O.persisted&&!x[je]?i(x,d,m):(O.beforeEnter(x),i(x,d,m),Ne(()=>O.enter(x),y));else{const{leave:N,delayLeave:G,afterLeave:W}=O,oe=()=>{p.ctx.isUnmounted?o(x):i(x,d,m)},ue=()=>{const le=x._isLeaving||!!x[je];x._isLeaving&&x[je](!0),O.persisted&&!le?oe():N(x,()=>{oe(),W&&W()})};G?G(x,oe,ue):ue()}else i(x,d,m)},q=(p,d,m,L=!1,y=!1)=>{const{type:x,props:E,ref:O,children:b,dynamicChildren:k,shapeFlag:Y,patchFlag:N,dirs:G,cacheIndex:W,memo:oe}=p;if(N===-2&&(y=!1),O!=null&&(gt(),gn(O,null,m,p,!0),mt()),W!=null&&(d.renderCache[W]=void 0),Y&256){d.ctx.deactivate(p);return}const ue=Y&1&&G,le=!mn(p);let Le;if(le&&(Le=E&&E.onVnodeBeforeUnmount)&&et(Le,d,p),Y&6)cp(p.component,m,L);else{if(Y&128){p.suspense.unmount(m,L);return}ue&&Et(p,null,d,"beforeUnmount"),Y&64?p.type.remove(p,d,m,sn,L):k&&!k.hasOnce&&(x!==Te||N>0&&N&64)?on(k,d,m,!1,!0):(x===Te&&N&384||!y&&Y&16)&&on(b,d,m),L&&kt(p)}const Oe=oe!=null&&W==null;(le&&(Le=E&&E.onVnodeUnmounted)||ue||Oe)&&Ne(()=>{Le&&et(Le,d,p),ue&&Et(p,null,d,"unmounted"),Oe&&(p.el=null)},m)},kt=p=>{const{type:d,el:m,anchor:L,transition:y}=p;if(d===Te){In(m,L);return}if(d===Gn){w(p);return}const x=()=>{o(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(p.shapeFlag&1&&y&&!y.persisted){const{leave:E,delayLeave:O}=y,b=()=>E(m,x);O?O(p.el,x,b):b()}else x()},In=(p,d)=>{let m;for(;p!==d;)m=v(p),o(p),p=m;o(d)},cp=(p,d,m)=>{const{bum:L,scope:y,job:x,subTree:E,um:O,m:b,a:k}=p;Wo(b),Wo(k),L&&Hn(L),y.stop(),x&&(x.flags|=8,q(E,p,d,m)),O&&Ne(O,d),Ne(()=>{p.isUnmounted=!0},d)},on=(p,d,m,L=!1,y=!1,x=0)=>{for(let E=x;E<p.length;E++)q(p[E],d,m,L,y)},Cn=p=>{if(p.shapeFlag&6)return Cn(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const d=v(p.anchor||p.el),m=d&&d[id];return m?v(m):d};let yi=!1;const So=(p,d,m)=>{let L;p==null?d._vnode&&(q(d._vnode,null,null,!0),L=d._vnode.component):M(d._vnode||null,p,d,null,null,null,m),d._vnode=p,yi||(yi=!0,Do(L),Qs(),yi=!1)},sn={p:M,um:q,m:_e,r:kt,mt:de,mc:ge,pc:ie,pbc:I,n:Cn,o:e};return{render:So,hydrate:void 0,createApp:Td(So)}}function Ri({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function It({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ar(e,t,n=!1){const i=e.children,o=t.children;if(K(i)&&K(o))for(let s=0;s<i.length;s++){const r=i[s];let c=o[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[s]=dt(o[s]),c.el=r.el),!n&&c.patchFlag!==-2&&Ar(r,c)),c.type===gi&&(c.patchFlag===-1&&(c=o[s]=dt(c)),c.el=r.el),c.type===$e&&!c.el&&(c.el=r.el)}}function Bd(e){const t=e.slice(),n=[0];let i,o,s,r,c;const a=e.length;for(i=0;i<a;i++){const u=e[i];if(u!==0){if(o=n[n.length-1],e[o]<u){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)c=s+r>>1,e[n[c]]<u?s=c+1:r=c;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,r=n[s-1];s-- >0;)n[s]=r,r=t[r];return n}function wr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wr(t)}function Wo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Or(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Or(t.subTree):null}const Pr=e=>e.__isSuspense;function Gd(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Jp(e)}const Te=Symbol.for("v-fgt"),gi=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),Gn=Symbol.for("v-stc"),Ht=[];let He=null;function R(e=!1){Ht.push(He=e?null:[])}function Rr(){Ht.pop(),He=Ht[Ht.length-1]||null}let bn=1;function Xn(e,t=!1){bn+=e,e<0&&He&&t&&(He.hasOnce=!0)}function Sr(e){return e.dynamicChildren=bn>0?He||Wt:null,Rr(),bn>0&&He&&He.push(e),e}function F(e,t,n,i,o,s){return Sr(f(e,t,n,i,o,s,!0))}function qe(e,t,n,i,o){return Sr(we(e,t,n,i,o,!0))}function Jn(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const Er=({key:e})=>e??null,Vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Ee(e)||X(e)?{i:Ue,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,i=0,o=null,s=e===Te?0:1,r=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Er(t),ref:t&&Vn(t),scopeId:er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ue};return c?(Qn(a,n),s&128&&e.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),bn>0&&!r&&He&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&He.push(a),a}const we=Vd;function Vd(e,t=null,n=null,i=0,o=null,s=!1){if((!e||e===gd)&&(e=$e),Jn(e)){const c=Ot(e,t,!0);return n&&Qn(c,n),bn>0&&!s&&He&&(c.shapeFlag&6?He[He.indexOf(e)]=c:He.push(c)),c.patchFlag=-2,c}if(Qd(e)&&(e=e.__vccOpts),t){t=jd(t);let{class:c,style:a}=t;c&&!he(c)&&(t.class=me(c)),ce(a)&&(ho(a)&&!K(a)&&(a=be({},a)),t.style=Be(a))}const r=he(e)?1:Pr(e)?128:pi(e)?64:ce(e)?4:X(e)?2:0;return f(e,t,n,i,o,r,s,!0)}function jd(e){return e?ho(e)||xr(e)?be({},e):e:null}function Ot(e,t,n=!1,i=!1){const{props:o,ref:s,patchFlag:r,children:c,transition:a}=e,u=t?Ud(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Er(u),ref:t&&t.ref?n&&s?K(s)?s.concat(Vn(t)):[s,Vn(t)]:Vn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&i&&Bt(l,a.clone(l)),l}function bt(e=" ",t=0){return we(gi,null,e,t)}function Si(e,t){const n=we(Gn,null,e);return n.staticCount=t,n}function ne(e="",t=!1){return t?(R(),qe($e,null,e)):we($e,null,e)}function ot(e){return e==null||typeof e=="boolean"?we($e):K(e)?we(Te,null,e.slice()):Jn(e)?dt(e):we(gi,null,String(e))}function dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function Qn(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),Qn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!xr(t)?t._ctx=Ue:o===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(X(t)){if(i&65){Qn(e,{default:t});return}t={default:t,_ctx:Ue},n=32}else t=String(t),i&64?(n=16,t=[bt(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ud(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=me([t.class,i.class]));else if(o==="style")t.style=Be([t.style,i.style]);else if(oi(o)){const s=t[o],r=i[o];r&&s!==r&&!(K(s)&&s.includes(r))?t[o]=s?[].concat(s,r):r:r==null&&s==null&&!si(o)&&(t[o]=r)}else o!==""&&(t[o]=i[o])}return t}function et(e,t,n,i=null){Ke(e,t,7,[n,i])}const Yd=fr();let Kd=0;function qd(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||Yd,s={uid:Kd++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yr(i,o),emitsOptions:gr(i,o),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:i.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ad.bind(null,s),e.ce&&e.ce(s),s}let Me=null;const Ao=()=>Me||Ue;let Zn,An;{const e=ci(),t=(n,i)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(i),s=>{o.length>1?o.forEach(r=>r(s)):o[0](s)}};Zn=t("__VUE_INSTANCE_SETTERS__",n=>Me=n),An=t("__VUE_SSR_SETTERS__",n=>wn=n)}const En=e=>{const t=Me;return Zn(e),e.scope.on(),()=>{e.scope.off(),Zn(t)}},zo=()=>{Me&&Me.scope.off(),Zn(null)};function Ir(e){return e.vnode.shapeFlag&4}let wn=!1;function Wd(e,t=!1,n=!1){t&&An(t);const{props:i,children:o}=e.vnode,s=Ir(e);Ed(e,i,s,t),Md(e,o,n||t);const r=s?zd(e,t):void 0;return t&&An(!1),r}function zd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,md);const{setup:i}=n;if(i){gt();const o=e.setupContext=i.length>1?Jd(e):null,s=En(e),r=Sn(i,e,0,[e.props,o]),c=ws(r);if(mt(),s(),(c||e.sp)&&!mn(e)&&ar(e),c){if(r.then(zo,zo),t)return r.then(a=>{An(!0);try{Xo(e,a,t)}finally{An(!1)}}).catch(a=>{ui(a,e,0)});e.asyncDep=r}else Xo(e,r)}else Cr(e)}function Xo(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=zs(t)),Cr(e)}function Cr(e,t,n){const i=e.type;e.render||(e.render=i.render||rt);{const o=En(e);gt();try{vd(e)}finally{mt(),o()}}}const Xd={get(e,t){return Re(e,"get",""),e[t]}};function Jd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Xd),slots:e.slots,emit:e.emit,expose:t}}function mi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(zs(Vp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)},has(t,n){return n in t||n in vn}})):e.proxy}function Qd(e){return X(e)&&"__vccOpts"in e}const te=(e,t)=>Kp(e,t,wn);function Zd(e,t,n){try{Xn(-1);const i=arguments.length;return i===2?ce(t)&&!K(t)?Jn(t)?we(e,null,[t]):we(e,t):we(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Jn(n)&&(n=[n]),we(e,t,n))}finally{Xn(1)}}const e_="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zi;const Jo=typeof window<"u"&&window.trustedTypes;if(Jo)try{zi=Jo.createPolicy("vue",{createHTML:e=>e})}catch{}const $r=zi?e=>zi.createHTML(e):e=>e,t_="http://www.w3.org/2000/svg",n_="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,Qo=pt&&pt.createElement("template"),i_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t==="svg"?pt.createElementNS(t_,e):t==="mathml"?pt.createElementNS(n_,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Qo.innerHTML=$r(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const c=Qo.content;if(i==="svg"||i==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yt="transition",ln="animation",en=Symbol("_vtc"),Mr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Nr=be({},or,Mr),o_=e=>(e.displayName="Transition",e.props=Nr,e),s_=o_((e,{slots:t})=>Zd(sd,Fr(e),t)),Ct=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},Zo=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function Fr(e){const t={};for(const S in e)S in Mr||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=s,appearActiveClass:u=r,appearToClass:l=c,leaveFromClass:_=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,A=r_(o),M=A&&A[0],z=A&&A[1],{onBeforeEnter:J,onEnter:U,onEnterCancelled:H,onLeave:w,onLeaveCancelled:Q,onBeforeAppear:ae=J,onAppear:ke=U,onAppearCancelled:ge=H}=t,$=(S,Z,de,j)=>{S._enterCancelled=j,Lt(S,Z?l:c),Lt(S,Z?u:r),de&&de()},I=(S,Z)=>{S._isLeaving=!1,Lt(S,_),Lt(S,g),Lt(S,v),Z&&Z()},V=S=>(Z,de)=>{const j=S?ke:U,D=()=>$(Z,S,de);Ct(j,[Z,D]),es(()=>{Lt(Z,S?a:s),tt(Z,S?l:c),Zo(j)||ts(Z,i,M,D)})};return be(t,{onBeforeEnter(S){Ct(J,[S]),tt(S,s),tt(S,r)},onBeforeAppear(S){Ct(ae,[S]),tt(S,a),tt(S,u)},onEnter:V(!1),onAppear:V(!0),onLeave(S,Z){S._isLeaving=!0;const de=()=>I(S,Z);tt(S,_),S._enterCancelled?(tt(S,v),Xi(S)):(Xi(S),tt(S,v)),es(()=>{S._isLeaving&&(Lt(S,_),tt(S,g),Zo(w)||ts(S,i,z,de))}),Ct(w,[S,de])},onEnterCancelled(S){$(S,!1,void 0,!0),Ct(H,[S])},onAppearCancelled(S){$(S,!0,void 0,!0),Ct(ge,[S])},onLeaveCancelled(S){I(S),Ct(Q,[S])}})}function r_(e){if(e==null)return null;if(ce(e))return[Ei(e.enter),Ei(e.leave)];{const t=Ei(e);return[t,t]}}function Ei(e){return fp(e)}function tt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[en]||(e[en]=new Set)).add(t)}function Lt(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[en];n&&(n.delete(t),n.size||(e[en]=void 0))}function es(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let c_=0;function ts(e,t,n,i){const o=e._endId=++c_,s=()=>{o===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:r,timeout:c,propCount:a}=Dr(e,t);if(!r)return i();const u=r+"end";let l=0;const _=()=>{e.removeEventListener(u,v),s()},v=g=>{g.target===e&&++l>=a&&_()};setTimeout(()=>{l<a&&_()},c+1),e.addEventListener(u,v)}function Dr(e,t){const n=window.getComputedStyle(e),i=A=>(n[A]||"").split(", "),o=i(`${yt}Delay`),s=i(`${yt}Duration`),r=ns(o,s),c=i(`${ln}Delay`),a=i(`${ln}Duration`),u=ns(c,a);let l=null,_=0,v=0;t===yt?r>0&&(l=yt,_=r,v=s.length):t===ln?u>0&&(l=ln,_=u,v=a.length):(_=Math.max(r,u),l=_>0?r>u?yt:ln:null,v=l?l===yt?s.length:a.length:0);const g=l===yt&&/\b(?:transform|all)(?:,|$)/.test(i(`${yt}Property`).toString());return{type:l,timeout:_,propCount:v,hasTransform:g}}function ns(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>is(n)+is(e[i])))}function is(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Xi(e){return(e?e.ownerDocument:document).body.offsetHeight}function a_(e,t,n){const i=e[en];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const os=Symbol("_vod"),Hr=Symbol("_vsh"),l_=Symbol(""),u_=/(?:^|;)\s*display\s*:/;function p_(e,t,n){const i=e.style,o=he(n);let s=!1;if(n&&!o){if(t)if(he(t))for(const r of t.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&pn(i,c,"")}else for(const r in t)n[r]==null&&pn(i,r,"");for(const r in n){r==="display"&&(s=!0);const c=n[r];c!=null?__(e,r,!he(t)&&t?t[r]:void 0,c)||pn(i,r,c):pn(i,r,"")}}else if(o){if(t!==n){const r=i[l_];r&&(n+=";"+r),i.cssText=n,s=u_.test(n)}}else t&&e.removeAttribute("style");os in e&&(e[os]=s?i.display:"",e[Hr]&&(i.display="none"))}const ss=/\s*!important$/;function pn(e,t,n){if(K(n))n.forEach(i=>pn(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=d_(e,t);ss.test(n)?e.setProperty(Vt(i),n.replace(ss,""),"important"):e[i]=n}}const rs=["Webkit","Moz","ms"],Ii={};function d_(e,t){const n=Ii[t];if(n)return n;let i=We(t);if(i!=="filter"&&i in e)return Ii[t]=i;i=Rs(i);for(let o=0;o<rs.length;o++){const s=rs[o]+i;if(s in e)return Ii[t]=s}return t}function __(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&he(i)&&n===i}const cs="http://www.w3.org/1999/xlink";function as(e,t,n,i,o,s=kp(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(cs,t.slice(6,t.length)):e.setAttributeNS(cs,t,n):n==null||s&&!Es(n)?e.removeAttribute(t):e.setAttribute(t,s?"":ct(n)?String(n):n)}function ls(e,t,n,i,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?$r(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Es(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Kt(e,t,n,i){e.addEventListener(t,n,i)}function f_(e,t,n,i){e.removeEventListener(t,n,i)}const us=Symbol("_vei");function g_(e,t,n,i,o=null){const s=e[us]||(e[us]={}),r=s[t];if(i&&r)r.value=i;else{const[c,a]=h_(t);if(i){const u=s[t]=y_(i,o);Kt(e,c,u,a)}else r&&(f_(e,c,r,a),s[t]=void 0)}}const m_=/(Once|Passive|Capture)$/,v_=/^on:?(?:Once|Passive|Capture)$/;function h_(e){let t,n;for(;(n=e.match(m_))&&!v_.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let Ci=0;const x_=Promise.resolve(),k_=()=>Ci||(x_.then(()=>Ci=0),Ci=Date.now());function y_(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const o=n.value;if(K(o)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const r=o.slice(),c=[i];for(let a=0;a<r.length&&!i._stopped;a++){const u=r[a];u&&Ke(u,t,5,c)}}else Ke(o,t,5,[i])};return n.value=e,n.attached=k_(),n}const ps=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,L_=(e,t,n,i,o,s)=>{const r=o==="svg";t==="class"?a_(e,i,r):t==="style"?p_(e,n,i):oi(t)?si(t)||g_(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):T_(e,t,i,r))?(ls(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&as(e,t,i,r,s,t!=="value")):e._isVueCE&&(b_(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!he(i)))?ls(e,We(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),as(e,t,i,r))};function T_(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&ps(t)&&X(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ps(t)&&he(n)?!1:t in e}function b_(e,t){const n=e._def.props;if(!n)return!1;const i=We(t);return Array.isArray(n)?n.some(o=>We(o)===i):Object.keys(n).some(o=>We(o)===i)}const Br=new WeakMap,Gr=new WeakMap,ei=Symbol("_moveCb"),ds=Symbol("_enterCb"),A_=e=>(delete e.props.mode,e),w_=A_({name:"TransitionGroup",props:be({},Nr,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ao(),i=ir();let o,s;return ur(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!E_(o[0].el,n.vnode.el,r)){o=[];return}o.forEach(P_),o.forEach(R_);const c=o.filter(S_);Xi(n.vnode.el),c.forEach(a=>{const u=a.el,l=u.style;tt(u,r),l.transform=l.webkitTransform=l.transitionDuration="";const _=u[ei]=v=>{v&&v.target!==u||(!v||v.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",_),u[ei]=null,Lt(u,r))};u.addEventListener("transitionend",_)}),o=[]}),()=>{const r=se(e),c=Fr(r);let a=r.tag||Te;if(o=[],s)for(let u=0;u<s.length;u++){const l=s[u];l.el&&l.el instanceof Element&&!l.el[Hr]&&(o.push(l),Bt(l,Tn(l,c,i,n)),Br.set(l,Vr(l.el)))}s=t.default?Lo(t.default()):[];for(let u=0;u<s.length;u++){const l=s[u];l.key!=null&&Bt(l,Tn(l,c,i,n))}return we(a,null,s)}}}),O_=w_;function P_(e){const t=e.el;t[ei]&&t[ei](),t[ds]&&t[ds]()}function R_(e){Gr.set(e,Vr(e.el))}function S_(e){const t=Br.get(e),n=Gr.get(e),i=t.left-n.left,o=t.top-n.top;if(i||o){const s=e.el,r=s.style,c=s.getBoundingClientRect();let a=1,u=1;return s.offsetWidth&&(a=c.width/s.offsetWidth),s.offsetHeight&&(u=c.height/s.offsetHeight),(!Number.isFinite(a)||a===0)&&(a=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(a-1)<.01&&(a=1),Math.abs(u-1)<.01&&(u=1),r.transform=r.webkitTransform=`translate(${i/a}px,${o/u}px)`,r.transitionDuration="0s",e}}function Vr(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function E_(e,t,n){const i=e.cloneNode(),o=e[en];o&&o.forEach(c=>{c.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(c=>c&&i.classList.add(c)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:r}=Dr(i);return s.removeChild(i),r}const _s=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>Hn(t,n):t};function I_(e){e.target.composing=!0}function fs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Fn=Symbol("_assign"),Dn=Symbol("_initialValue");function $i(e,t,n){return t&&(e=e.trim()),n&&(e=ao(e)),e}const C_={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e.parentNode&&(e.type==="text"?e[Dn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Dn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Fn]=_s(o);const s=i||o.props&&o.props.type==="number";Kt(e,t?"change":"input",r=>{r.target.composing||e[Fn]($i(e.value,n,s))}),(n||s)&&Kt(e,"change",()=>{e.value=$i(e.value,n,s)}),t||(Kt(e,"compositionstart",I_),Kt(e,"compositionend",fs),Kt(e,"change",fs))},mounted(e,{value:t,modifiers:{trim:n,number:i}}){const o=t??"",s=e[Dn];delete e[Dn],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[Fn]($i(e.value,n,i)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:o,number:s}},r){if(e[Fn]=_s(r),e.composing)return;const c=(s||e.type==="number")&&!/^0\d/.test(e.value)?ao(e.value):e.value,a=t??"";if(c===a)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(i&&t===n||o&&e.value.trim()===a)||(e.value=a)}},$_=["ctrl","shift","alt","meta"],M_={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$_.some(n=>e[`${n}Key`]&&!t.includes(n))},Ve=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(o,...s)=>{for(let r=0;r<t.length;r++){const c=M_[t[r]];if(c&&c(o,t))return}return e(o,...s)})},N_=be({patchProp:L_},i_);let gs;function F_(){return gs||(gs=Fd(N_))}const D_=(...e)=>{const t=F_().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=B_(i);if(!o)return;const s=t._component;!X(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,H_(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function H_(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function B_(e){return he(e)?document.querySelector(e):e}const tn={MIN:0,MAX:100},hn={BASE_DECAY:3,PRESSURE_COEF:2,RECORDER_RELIEF:3,INITIATIVE_COST_BASE:1,INITIATIVE_COST_STEP:1},jn={T1:50,T2:30,T3:15},ms={DEFAULT:20,PANIC:12},Ji={DESTROY_EVIDENCE_CAP:-20,HUSH_MONEY_EVIDENCE_CAP:30},ut={EV_WEIGHT:5,OPINION_BASE:30,OPINION_EV_COEF:2,OPINION_NEG_COST:8,COMPOSURE_FIXED:60,RISK_BASE:50,RISK_EV_RELIEF:2,RISK_NEG_ADD:10,TRUE_EV_MIN:15},Mi={PLAYBOOK_EVIDENCE:5,NOTARY_RISK:-5,CALM_BREATH_COMPOSURE:30};function xn(e){return Math.min(tn.MAX,Math.max(tn.MIN,e))}function wo(e){return{...e,flags:new Set(e.flags),items:new Set(e.items)}}function G_(e,t,n,i){let o=n;return t.items.has("item_calm_breathing")&&e.tag==="BREATH"&&(o={...o,composure:Mi.CALM_BREATH_COMPOSURE}),t.items.has("item_hr_playbook")&&i===3&&e.initiative===3&&(o={...o,evidence:(o.evidence??0)+Mi.PLAYBOOK_EVIDENCE}),t.items.has("item_notary_habit")&&i===4&&e.initiative===3&&(o={...o,risk:(o.risk??0)+Mi.NOTARY_RISK}),o}function V_(e){return e.tag==="PHYSICAL"?{forcedEnding:e.next}:null}function j_(e,t){switch(t){case"G_NEG_DESTROYED_EVIDENCE":e.evidenceCap=tn.MAX+Ji.DESTROY_EVIDENCE_CAP;break;case"G_NEG_HUSH_MONEY":e.evidence=Math.min(e.evidence,Ji.HUSH_MONEY_EVIDENCE_CAP);break}}function vs(e,t,n=1,i=0){const o=wo(e),s=G_(t,o,t.effects??{},n),r=["evidence","opinion","composure","risk"];for(const c of r){const a=s[c];a!==void 0&&(o[c]+=a)}if(t.initiative>=2&&t.tag!=="BREATH"){const c=(t.initiative-1)*(hn.INITIATIVE_COST_BASE+hn.INITIATIVE_COST_STEP*Math.floor(i/2));o.composure-=c}o.evidence>o.evidenceCap&&(o.evidence=o.evidenceCap);for(const c of r)o[c]=xn(o[c]);for(const c of s.addFlags??[])o.flags.add(c),j_(o,c);for(const c of s.removeFlags??[])o.flags.delete(c);for(const c of s.addItems??[])o.items.add(c);return o.turn+=1,o}function U_(e,t){const n=wo(e),i=hn.BASE_DECAY+t.pressure*hn.PRESSURE_COEF,o=n.items.has("item_recorder")?hn.RECORDER_RELIEF:0;return n.composure=xn(n.composure-i+o),n}class xe extends Error{constructor(t){super(t),this.name="ContentError"}}function jr(e,t){return{evidence:e.evidence,opinion:e.opinion,composure:e.composure,risk:e.risk,dEvidence:e.evidence-t.evidence,dOpinion:e.opinion-t.opinion,dComposure:e.composure-t.composure,dRisk:e.risk-t.risk,flags:e.flags,items:e.items,turn:e.turn}}const Y_=new Set(["evidence","opinion","composure","risk","dEvidence","dOpinion","dComposure","dRisk","turn"]);function K_(e){const t=[];let n=0;for(;n<e.length;){const i=e[n];if(i===" "||i==="	"||i===`
`||i==="\r"){n+=1;continue}if(i>="0"&&i<="9"){let r=n;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:Number(e.slice(n,r))}),n=r;continue}if(/[A-Za-z_]/.test(i)){let r=n;for(;r<e.length&&/[A-Za-z0-9_]/.test(e[r]);)r+=1;t.push({t:"id",v:e.slice(n,r)}),n=r;continue}if(i==="'"||i==='"'){let r=n+1;for(;r<e.length&&e[r]!==i;)r+=1;if(r>=e.length)throw new xe(`unterminated string in condition: ${e}`);t.push({t:"str",v:e.slice(n+1,r)}),n=r+1;continue}const o=e.slice(n,n+2);if(o==="&&"||o==="||"||o===">="||o==="<="||o==="=="||o==="!="){t.push({t:"op",v:o}),n+=2;continue}const s=e[n+1];if(i==="-"&&s!==void 0&&s>="0"&&s<="9"&&(t.length===0||t[t.length-1].t==="op")){let r=n+1;for(;r<e.length&&e[r]>="0"&&e[r]<="9";)r+=1;t.push({t:"num",v:-Number(e.slice(n+1,r))}),n=r;continue}if(i===">"||i==="<"||i==="!"||i==="("||i===")"){t.push({t:"op",v:i}),n+=1;continue}throw new xe(`illegal character '${i}' in condition: ${e}`)}return t}class q_{constructor(t){Ae(this,"pos",0);this.tokens=t}peek(){return this.tokens[this.pos]}next(){const t=this.tokens[this.pos];if(t===void 0)throw new xe("unexpected end of condition");return this.pos+=1,t}eatOp(t){const n=this.next();if(n.t!=="op"||n.v!==t)throw new xe(`expected '${t}', got '${n.t==="op"?n.v:n.t}'`)}parse(){const t=this.parseOr();if(this.pos!==this.tokens.length){const n=this.peek();throw new xe(`unexpected trailing token '${n?n.t==="op"?n.v:n.t:"?"}'`)}return t}parseOr(){let t=this.parseAnd();for(;this.matchOp("||");)t={kind:"binary",op:"||",left:t,right:this.parseAnd()};return t}parseAnd(){let t=this.parseCompare();for(;this.matchOp("&&");)t={kind:"binary",op:"&&",left:t,right:this.parseCompare()};return t}parseCompare(){const t=this.parseUnary(),n=this.peek();return n!==void 0&&n.t==="op"&&[">=",">","<=","<","==","!="].includes(n.v)?(this.pos+=1,{kind:"compare",op:n.v,left:t,right:this.parseUnary()}):t}parseUnary(){return this.matchOp("!")?{kind:"unary",op:"!",operand:this.parseUnary()}:this.parseAtom()}parseAtom(){const t=this.next();if(t.t==="num")return{kind:"num",value:t.v};if(t.t==="str")throw new xe("string literal only allowed as function argument");if(t.t==="op"&&t.v==="("){const n=this.parseOr();return this.eatOp(")"),n}if(t.t==="id"){if(t.v==="has"||t.v==="hasItem"){this.eatOp("(");const n=this.next();if(n.t!=="str")throw new xe(`'${t.v}' expects a quoted string argument`);return this.eatOp(")"),{kind:"call",fn:t.v,arg:n.v}}if(!Y_.has(t.v))throw new xe(`unknown identifier '${t.v}' in condition`);return{kind:"var",name:t.v}}throw new xe(`unexpected operator '${t.v}' in condition`)}matchOp(t){const n=this.peek();return n!==void 0&&n.t==="op"&&n.v===t?(this.pos+=1,!0):!1}}const hs=new Map;function W_(e){const t=hs.get(e);if(t!==void 0)return t;const n=new q_(K_(e)).parse();return hs.set(e,n),n}function qt(e,t){switch(e.kind){case"num":return e.value!==0;case"var":return Ur(e.name,t)!==0;case"call":return e.fn==="has"?t.flags.has(e.arg):t.items.has(e.arg);case"unary":return!qt(e.operand,t);case"binary":return e.op==="&&"?qt(e.left,t)&&qt(e.right,t):qt(e.left,t)||qt(e.right,t);case"compare":{const n=xs(e.left,t),i=xs(e.right,t);switch(e.op){case">=":return n>=i;case">":return n>i;case"<=":return n<=i;case"<":return n<i;case"==":return n===i;case"!=":return n!==i}}}}function xs(e,t){if(e.kind==="num")return e.value;if(e.kind==="var")return Ur(e.name,t);throw new xe("comparison operands must be numbers")}function Ur(e,t){switch(e){case"evidence":return t.evidence;case"opinion":return t.opinion;case"composure":return t.composure;case"risk":return t.risk;case"dEvidence":return t.dEvidence;case"dOpinion":return t.dOpinion;case"dComposure":return t.dComposure;case"dRisk":return t.dRisk;case"turn":return t.turn;default:throw new xe(`unknown identifier '${e}'`)}}function Yr(e,t){return e.trim()==="true"?!0:qt(W_(e),t)}function z_(e){return e<jn.T3||e<jn.T2?2:e<jn.T1?1:0}function X_(e,t){const n=i=>{let o=0;const s=`${t}/${i}`;for(let r=0;r<s.length;r+=1)o=Math.imul(o,31)+s.charCodeAt(r)|0;return(o>>>1&2147483647)/2147483648};return[...e].sort((i,o)=>n(i.id)-n(o.id))}function ks(e,t,n=new Set){const i=e.options.filter(c=>c.oncePerNode===!0&&n.has(c.id)?!1:c.requires===void 0?!0:Yr(c.requires,jr(t,J_))),o=z_(t.composure),r=e.impulsePool.filter(c=>t.composure<c.unlockBelow).slice(0,o);return X_([...i,...r],e.id)}const J_={evidence:0,opinion:0,composure:0,risk:0};function Q_(e,t){return t.composure<jn.T3?ms.PANIC:e.timer??ms.DEFAULT}function Z_(e,t,n){if(t.flags.has("FORCED_F")){const o=e.endings.find(s=>s.condition==="FORCED");if(o===void 0)throw new xe(`level ${e.id} has FORCED_F state but no FORCED ending`);return o}const i=jr(t,n);for(const o of e.endings)if(o.condition!=="FORCED"&&Yr(o.condition,i))return o;throw new xe(`level ${e.id}: no ending condition matched (missing 'true' fallback?)`)}const ef="__END__";function Ni(e){return e.type==="choice"}class Oo{constructor(t,n){Ae(this,"nodeMap");Ae(this,"endingMap");Ae(this,"initMeter");Ae(this,"current");Ae(this,"currentNodeId");Ae(this,"usedThisVisit",new Set);Ae(this,"pendingOutcome",null);this.level=t,this.nodeMap=new Map(t.nodes.map(i=>[i.id,i])),this.endingMap=new Map(t.endings.map(i=>[i.id,i])),this.initMeter=t.initState,this.current=this.buildInitialState(n),this.currentNodeId=t.entryNode}buildInitialState(t){const n=new Set([...t.flags].filter(s=>s.startsWith("G_"))),i=n.has("G_NEG_DESTROYED_EVIDENCE")?tn.MAX+Ji.DESTROY_EVIDENCE_CAP:tn.MAX,o=n.has("G_NEG_ASSAULT")?15:0;return{evidence:this.level.initState.evidence,opinion:this.level.initState.opinion,composure:this.level.initState.composure,risk:this.level.initState.risk+o,flags:n,items:new Set(t.items),turn:0,evidenceCap:i}}get state(){return this.current}start(){return this.advanceFrom(this.currentNodeId)}choose(t){const n=this.getNode(this.currentNodeId);if(!Ni(n))throw new xe(`choose() called on non-choice node ${n.id} in level ${this.level.id}`);const o=ks(n,this.current,this.usedThisVisit).find(s=>s.id===t);if(o===void 0)throw new xe(`option '${t}' not available at node ${n.id} (level ${this.level.id})`);return this.applyChoice(n,o)}timeout(){const t=this.getNode(this.currentNodeId);if(!Ni(t))throw new xe(`timeout() called on non-choice node ${t.id} in level ${this.level.id}`);const n=t.options.find(i=>i.id===t.timeoutOption);if(n===void 0)throw new xe(`timeoutOption '${t.timeoutOption}' not found in node ${t.id}`);return this.applyChoice(t,n)}getNode(t){const n=this.nodeMap.get(t);if(n===void 0)throw new xe(`node not found: ${t} (level ${this.level.id})`);return n}applyChoice(t,n){const i=V_(n);return i!==null?(this.current=vs(this.current,n,this.level.act,t.pressure),this.current.flags.add("FORCED_F"),this.current.flags.add("G_NEG_ASSAULT"),this.finishWith(i.forcedEnding)):(n.oncePerNode===!0&&this.usedThisVisit.add(n.id),this.current=vs(this.current,n,this.level.act,t.pressure),this.current=U_(this.current,t),n.outcome!==void 0&&n.outcome!==""?(this.pendingOutcome={script:n.outcome,next:n.next},{type:"node",node:{id:t.id+"-react",type:"cutscene",pressure:t.pressure,script:n.outcome,next:n.next}}):this.advanceFrom(n.next))}advanceFrom(t){if(t===ef)return this.finishWith(null);let n=t;for(let i=0;i<tf;i+=1){const o=this.endingMap.get(n);if(o!==void 0)return this.finishWith(o.id);const s=this.getNode(n);return Ni(s)?(n!==this.currentNodeId&&(this.usedThisVisit=new Set),this.currentNodeId=s.id,{type:"options",options:ks(s,this.current,this.usedThisVisit),timer:Q_(s,this.current),timeoutOptionId:s.timeoutOption,prompt:s.prompt,pressure:s.pressure,nodeId:s.id}):(this.currentNodeId=s.id,{type:"node",node:s})}throw new xe(`node chain too deep at ${n} (level ${this.level.id})`)}proceed(){if(this.pendingOutcome!==null){const{next:n}=this.pendingOutcome;return this.pendingOutcome=null,this.advanceFrom(n)}const t=this.getNode(this.currentNodeId);if(t.next===void 0)throw new xe(`node ${t.id} has no next (level ${this.level.id})`);return this.advanceFrom(t.next)}finishWith(t){const n=t!==null?this.endingMap.get(t):void 0;if(t!==null&&n===void 0)throw new xe(`ending not found: ${t} (level ${this.level.id})`);const i=wo(this.current);return{type:"ending",ending:n!==void 0?n:Z_(this.level,this.current,this.initMeter),state:i}}static simulate(t,n,i){const o=new Oo(t,n);let s=o.start(),r=0;for(;;){if(s.type==="ending")return{rank:s.ending.rank,state:s.state};if(s.type==="node"){s=o.proceed();continue}if(s.type==="options"){const c=i[r];if(r+=1,c===void 0)throw new xe(`simulate path exhausted at node in level ${t.id}`);s=o.choose(c);continue}}}}const tf=200,Kr="poju_shilu_save_v1";function Qi(){return{version:1,flags:[],items:[],levelResults:{},cards:[],settings:{mode:"NORMAL",sound:!0}}}const ti=globalThis.localStorage,qr=typeof ti<"u"&&ti!==null;function nf(){if(!qr)return Qi();const e=ti.getItem(Kr);return e===null?Qi():JSON.parse(e)}function of(e){qr&&ti.setItem(Kr,JSON.stringify(e))}const sf={L01:{flag:"G_EV_SUBWAY",minRank:["S","A"]},L02:{flag:"G_EV_ELEVATOR",minRank:["S","A"]},L03:{flag:"G_EV_MALL",minRank:["S","A"]},L04:{flag:"G_EV_NIGHTWALK",minRank:["S","A"]},L05:{flag:"G_EV_GYM",minRank:["S","A"]},L06:{flag:"G_EV_BETROTHAL",minRank:["S","A"]},L07:{flag:"G_EV_TRANSFER",minRank:["S","A"]},L08:{flag:"G_EV_PATERNITY",minRank:["S","A"]},L09:{flag:"G_EV_PRESERVATION",minRank:["S","A"]},L10:{flag:"G_EV_PROTECTION_ORDER",minRank:["S","A"]},L11:{flag:"G_EV_HR_WRITTEN",minRank:["S","A"]},L12:{flag:"G_EV_EMAIL_CHAIN",minRank:["S","A"]},L13:{flag:"G_EV_FULL_AUDIO",minRank:["S","A"]},L14:{flag:"G_EV_SUSPENSION",minRank:["S","A"]},L15:{flag:"G_EV_EXTORTION",minRank:["S","A"]},L16:{flag:"G_EV_ORIGINAL_CLIP",minRank:["S","A"]},L17:{flag:"G_EV_DOXX_NOTARY",minRank:["S","A"]},L18:{flag:"G_EV_LIVE_RECORD",minRank:["S","A"]},L19:{flag:"G_EV_PLATFORM",minRank:["S","A"]}},rf={L02:"G_NEG_DESTROYED_EVIDENCE",L07:"G_NEG_HUSH_MONEY",L10:"L10_VIOLATED",L13:"G_NEG_APOLOGY_LETTER",L17:"G_NEG_DOXXED_BACK"};function cf(e,t){switch(e){case"L01":return t==="S"||t==="A"?["item_recorder"]:[];case"L02":return["item_shen_card"];case"L08":return t==="S"?["item_calm_breathing"]:[];case"L11":return t==="S"||t==="A"?["item_hr_playbook"]:[];case"L16":return t==="S"||t==="A"?["item_notary_habit"]:[];default:return[]}}function af(e,t,n,i,o){const s={...e,flags:[...e.flags],items:[...e.items],levelResults:{...e.levelResults},cards:[...e.cards]},r=new Set(s.flags);for(const g of i.flags)g.startsWith("G_")&&r.add(g);const c=sf[t];if(c!==void 0&&c.minRank.includes(n.rank)){const g=rf[t];g!==void 0&&(r.has(g)||i.flags.has(g))||r.add(c.flag)}const a=cf(t,n.rank),u=new Set(s.items);for(const g of a)u.add(g);n.unlock!==void 0&&!s.cards.includes(n.unlock)&&s.cards.push(n.unlock);const l=o==null?void 0:o.now,_={S:5,A:4,B:3,C:2,F:1},v=s.levelResults[t];return v===void 0||_[n.rank]>_[v.rank]?s.levelResults[t]={rank:n.rank,endingId:n.id,ts:l}:_[n.rank]<_[v.rank]&&(s.levelResults[t]={...v,lastRank:n.rank,lastEndingId:n.id,lastTs:l}),s.flags=[...r].filter(g=>g.startsWith("G_")),s.items=[...u],s}const lf={G_NEG_ASSAULT:40,G_NEG_DOXXED_BACK:35,G_NEG_DESTROYED_EVIDENCE:30,G_NEG_APOLOGY_LETTER:25,G_NEG_HUSH_MONEY:20,G_NEG_LIED:15,G_NEG_FLED:10};function Wr(e){return e.startsWith("G_NEG_")}function zr(e){let t=0;for(const n of e)n.startsWith("G_EV_")&&(t+=1);return t}function Zi(e){let t=0;for(const n of e)Wr(n)&&(t+=1);return t}function uf(e){const t=new Set(e.flags),n=zr(t),o=[...t].filter(Wr).reduce((s,r)=>s+(lf[r]??0),0);return{evidence:xn(n*ut.EV_WEIGHT-o),opinion:xn(ut.OPINION_BASE+n*ut.OPINION_EV_COEF-Zi(t)*ut.OPINION_NEG_COST),composure:ut.COMPOSURE_FIXED,risk:xn(ut.RISK_BASE-n*ut.RISK_EV_RELIEF+Zi(t)*ut.RISK_NEG_ADD),flags:t,items:new Set(e.items),turn:0,evidenceCap:tn.MAX}}function pf(e,t){const n=zr(new Set(e.flags)),i=Zi(new Set(e.flags));return n>=ut.TRUE_EV_MIN&&i===0&&t==="S"?"TRUE":t==="S"||t==="A"?"WIN":"COSTLY"}const Xr="L01",Jr="第01关 · 一秒与一分五十秒",Qr=1,Zr={evidence:20,opinion:50,composure:80,risk:10},ec=["hero","npc_l01_woman","crowd","shen_li"],tc="n_01",nc="card_law_L01",ic=["T1","T2"],oc=[{id:"n_01",type:"cutscene",pressure:1,script:`【改编自 2026-08-26 真实事件】

周末中午，商场连锁餐厅门口。
你在收银台边低头扫码，四岁的儿子举着刚买的玩具枪从店里冲出来——
「让一让——」
过道窄。他侧身往排队的人缝里钻，脚下一绊，身体失衡，
左手擦到了前面女子的臀部。
不到一秒。
他浑然不觉，跑出门去。
`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l01_woman",emotion:"shout",text:"（她转身追上孩子，一把攥住他的衣领）他摸我。你儿子，摸了我。你别想走。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"孩子的脚离了地，哭声变了调，脖子上已经勒出红印。半间餐厅的人都转过头来。",timer:28,timeoutOption:"opt_freeze",options:[{id:"opt_hands_up",text:"按住她手腕，声音不高：「请松手，孩子脖子勒出印了。」蹲下：「撞到姐姐了，说什么？」回头对店长：「监控，封存。」",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:-5,risk:-10,addFlags:["L01_HANDS_VISIBLE"]},next:"n_04",outcome:"她的手腕僵了一下，劲松了半分。儿子吸着鼻子说：「撞到姐姐，对不起。」店长朝收银台比了个手势——监控在。"},{id:"opt_explain",text:"他不是故意的，他喊了让一让，他只有四岁——",tag:"NEUTRAL",aggression:1,initiative:1,effects:{evidence:5,opinion:-5,composure:-10,risk:10},next:"n_04",outcome:"「四岁？」她抬高声音，「四岁就可以随便摸人？」围观的人，又多了两个。"},{id:"opt_freeze",text:"“……”（脑子嗡的一声，看着孩子被攥着领子晃，说不出话）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-5,opinion:-15,composure:-15,risk:10},next:"n_04",outcome:"你的沉默被她当成了默认。攥着孩子领子的那只手，又紧了一格。"},{id:"opt_leave",text:"掰开她的手拉起孩子就走：多一事不如少一事……",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-20,risk:15,addFlags:["G_NEG_FLED"]},next:"n_04",outcome:"你拽着孩子挤出人群。身后的声音追出来：「都看到了啊——他跑了！」"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:3,next:"n_05",script:"（围观的人举起了手机。她拨了报警电话：「喂，警察吗？我被人摸了，未成年的那种。」）"},{id:"n_05",type:"choice",pressure:4,prompt:`派出所，第一次调解。她的条件：「书面道歉、承诺管教，加精神损失费。」
你看着孩子脖子上的勒痕——她到现在没提过一个「对不起」。`,timer:28,timeoutOption:"opt_hesitate",options:[{id:"opt_call_first",text:"「无心之失，我带孩子道歉、医药费照付——但道歉里不写『猥亵』二字。孩子的伤，也要个说法。」请民警调监控。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10,addFlags:["L01_CALLED_POLICE_FIRST"]},next:"n_06",outcome:"民警在笔录上记下「不认可猥亵定性」。她盯着这行字，第一次没有接话。"},{id:"opt_agree_police",text:"行……都依你。书面道歉我写，承诺书我签，钱我给。别再把事情闹大就行。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:10,opinion:10,composure:15,risk:-5},next:"n_06",outcome:"道歉书写到第三行，你的手停了一下。「猥亵」两个字，白纸黑字。"},{id:"opt_pay",text:"精神损失费是吧……加到五千，转账现结，这事今天就翻篇。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:15,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06",outcome:"到账提示音响起的同时，一张写着「精神损失费」的收条推了过来。"},{id:"opt_hesitate",text:"……能不能少点？孩子也不是故意的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-20,composure:-10,risk:15},next:"n_06",outcome:"「少？」她笑了，「你觉得你儿子摸的，是多少钱的地方？」"}],impulsePool:[{id:"imp_curse_01",text:"松手！你掐的是四岁的孩子！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_06"}]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l01_woman",emotion:"perform",text:"（三次调解。她拿出两次送医记录：呼吸性碱中毒、失眠。谈崩在同一个地方——她不肯为孩子颈上的勒痕道一次歉。）",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:`当晚，她的视频上了热搜：《四岁男孩当街摸臀，家长态度嚣张》。
配文有「被摸臀」三个字。评论区涌进八万条，有人已经认出了你的孩子。`,timer:31,timeoutOption:"opt_pay_now",options:[{id:"opt_refuse_settle",text:"晒出三次调解记录、孩子颈部照片：「无心之失我认，法律我陪。但把镜头从四岁孩子身上挪开——要挂，挂我。」",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,risk:-10},next:"n_08",outcome:"那条动态两小时转了三千次。最热的评论是：「这才是当爹的样子。」也有人在扒你是谁。"},{id:"opt_ask_price",text:"不接舆论的招。委托律师发函：要求平台对涉未成年人画面打码、下架引导性内容，同时申请证据保全公证监控原件。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:-5,composure:-5,risk:5,addFlags:["L01_PRICE_ON_RECORD"]},next:"n_08",outcome:"平台回了工单号。三天后孩子脸部第一次被打码——视频还在，码不在你手里。"},{id:"opt_pay_now",text:"连夜托中间人递话：钱可以再谈，视频能不能先删。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:10,risk:20,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_08",outcome:"中间人回话：她说五十万，少一分免谈。你转的五千，成了「心虚的实锤」。"},{id:"opt_mock",text:"开直播回击：「她自己就是干自媒体的，她要的就是流量！」",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-15,composure:-5,risk:15},next:"n_08",outcome:"直播间在线冲到四千。你骂得越痛快，切片传得越广——标题都替你起好了。"}],impulsePool:[{id:"imp_curse_02",text:"你演够了没有？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08"},{id:"imp_shove_07",text:"冲过去掰开她攥着孩子衣领的手，用力过猛。",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:5,next:"n_09",script:"（完整监控流出：玩具枪、「让一让」、绊了一下，左手擦过，不到一秒——她攥着衣领，是一分五十秒。）"},{id:"n_09",type:"choice",pressure:5,prompt:`她正式起诉了：要求书面道歉与精神损害赔偿。
传票到你手上的那天，孩子问你：「爸爸，我是坏人吗？」`,timer:32,timeoutOption:"opt_silent",options:[{id:"opt_let_her_talk",text:"只应诉，不上热搜——她要的热闹，一个字不给。证据交法庭；她更正、道歉那天，收手，一分赔偿不追。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:10,opinion:20,composure:5,risk:-5},next:"n_09a",outcome:"你在答辩状末尾划掉了全部索赔项。沈骊看了你一眼，没说话，把笔递了过来。"},{id:"opt_silent",text:"应诉，并且反诉——不为索赔，只求事实定性，胜诉款全额捐出。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:10,composure:-10,risk:-10},next:"n_09b",outcome:"反诉状递进去那天，热搜挂到第七位。「四岁男童父亲反诉」，标题很齐。"},{id:"opt_appeal_crowd",text:"接受媒体专访，把前因后果从头讲一遍。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-10,composure:-10,risk:10},next:"n_10",outcome:"专访播出很完整，也很没人看。评论区第一条：「炒作吧？孩子都拿出来卖惨。」"},{id:"opt_block_camera",text:"在粉丝群里发她的照片和单位：「大家帮我人肉她，让她也尝尝被网暴的滋味。」",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_10",outcome:"粉丝群一夜沸腾。地址、单位、母校被拼成一张图。你盯着那张图，胃里发凉——那不再是她一个人的事了。"},{id:"opt_breath_l01",text:"深吸一口气，把「凭什么」三个字咽回去。开庭还长，先睡觉。",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"夜里十二点，你把手机扣在桌上。窗外环卫车驶过，很响。你数着呼吸，睡着了。"}],impulsePool:[{id:"imp_shout_09",text:"你他妈到底想干什么！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_shove_09",text:"调解室里，你把桌子掀了。",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09a",type:"cutscene",pressure:5,script:`当晚，你把答辩状最后一页改完：索赔项，全部划掉。
只留一句——请求确认「无意触碰」。
沈骊回消息：可以。明天见。
没有热搜，没有声明。这一夜安静得，像什么都没发生过。
也像什么都还没有开始。`,next:"n_10"},{id:"n_09b",type:"cutscene",pressure:5,script:`反诉状递进去第三天，「四岁男童父亲反诉」挂上了热搜第七。
支持你的和骂你的，在评论区互相引用。
你把手机调成灰度，屏幕暗了一半——世界喧哗，
而明天的法庭，不看你今天说了什么。
沈骊发来一行字：睡。明天，纸对纸。`,next:"n_10"},{id:"n_10",type:"cutscene",pressure:3,script:`开庭前夜。
沈骊把一沓材料推到你面前：监控公证、病历、调解记录、平台下架函。
「明天进法庭，你只需要记住一件事——
我们不是去吵赢谁。我们是去把『发生了什么』，一个字一个字地钉在纸上。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"法庭。对方律师念完诉求，审判长看向你：「被告方，发表答辩意见。」",timer:30,timeoutOption:"opt_emotional",options:[{id:"opt_demand_footage",text:"「请法庭当庭播放完整监控——那不到一秒的触碰，和之后一分五十秒的抓拽，在同一帧画面里。」",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:5,risk:-5,addFlags:["L01_DEMANDED_FOOTAGE"]},next:"n_12",outcome:"大屏幕亮起。一秒与一分五十秒在同一帧里——旁听席有人低声「嚯」了一下。"},{id:"opt_factual",text:"「四岁。」你把这三个字放慢，「无民事行为能力人，不存在猥亵故意。无心之失我方认；孩子颈伤，另案主张。」",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:5,composure:10,risk:-10},next:"n_12",outcome:"「四岁」三个字落地，对方律师翻材料的手停了半拍。审判长在本子上记着什么。"},{id:"opt_accuse",text:"「先查她！发视频网暴我孩子的是她！」",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:5,opinion:-10,composure:-5,risk:10},next:"n_12",outcome:"「与本案无关。」审判长打断你。对方律师的嘴角，动了一下。"},{id:"opt_emotional",text:"「她就是个炒流量的！我孩子才四岁啊！」（声音失控，审判长敲了法槌）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-5,opinion:-10,composure:-10,risk:5,addFlags:["L01_F_BEHAVIOR"]},next:"n_12",outcome:"法槌落下。你的声音在法庭里荡成回声——所有人看着你，没人听你在说什么。"}],impulsePool:[{id:"imp_shove_11",text:"庭审中途冲向对方席位，被法警按住。",unlockBelow:15,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`法庭的屏幕亮起，进度的指针回到那天中午。
一分五十秒，开始倒数。`,next:"__END__"}],sc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 动手了",script:`你掰开她手的那一刻用了力。她坐在地上，举起手机对准自己：「大家看到了，孩子他爸打人了。」

——三天后——

行政拘留七日，罚款。
她的置顶视频换成了《我被孩子父亲当街推倒》，涨粉四十一万。

完整监控还在，一秒还是一秒，一分五十秒还是一分五十秒。
可现在没人讨论那两段时间了。

你本来是要给孩子讨一个定性。
现在，定性给了你。`,unlock:"card_L01_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=20 && opinion>=70 && composure>=30",title:"名场面 · 没有变成「事件」",script:`开庭前一周，她的律师先打来了电话：完整监控做了公证，她愿意公开更正、当面道歉。
你撤了答辩里所有索赔项，只留一条：请求确认「无意触碰」。

从她报警那天起，你只做对了一件事：没按她写好的剧本走。
她要的对骂、她要的热搜、她要的「猥亵」二字——你一个都没给。
事实自己会说话。而事实，站在你这边。

和解笔录签完，她起身时说：「那天……我也吓到了。」
你说：「孩子后来问你为什么掐他。我到现在不知道怎么答。」
她没有再说话。第二天，视频下架，更正声明置顶。

这件事从头到尾，没有热搜挂过一天。
没有赢家通吃，没有谁社死——
它没有变成「事件」，它只是变成了大人们处理掉的一件事。

回家路上孩子问：「爸爸，结束了吗？」
「结束了。」「那我可以跑了吗？」
「可以。跑慢一点。」`,unlock:"card_L01_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=15",title:"赢了定性，输了三周",script:`判决书第七页：「……系奔跑失衡状态下的无意触碰。」
定性拿到了，一个字不差。

但热搜挂了十一天，幼儿园换了两个，你请了三次假。
宣判那天她没来，律师代领的判决书。

你赢了纸上的每一个字——
只是每个字，都要解释给别人听。

（真实事件里，这位父亲走的就是这条路——诉讼仍在进行。）`},{id:"e_b_rank",rank:"B",condition:"risk<=50",title:"惨胜",script:`官司拖了四个月，赢了。
判决定性「无意触碰」，她的索赔被驳回。

可热搜挂过十一天，评论区的弹药换了一茬又一茬，
孩子的幼儿园换了两个——总有家长认出他。

清算下来：正义到了，只是迟到了，
而且到的时候，车上坐满了别人。`},{id:"e_c_rank",rank:"C",condition:"risk<=70",title:"吃了闷亏",script:`书面道歉签了，承诺书签了，精神损失费转了。
她收了钱，删了视频，临走说：「其实我也知道他不是故意的。」

那句话让你在停车场坐了半个小时。
道歉信的复印件还在她手里——上面有「对患儿行为给原告造成的影响深表歉意」。
这句话裁出来，可以是什么意思，全看她怎么用。

孩子后来问你：爸爸，我做错了什么，要写那个东西？
你说：你没有做错。
他说：那为什么要写？
这一问，你答了三年。`},{id:"e_f_rank",rank:"F",condition:"has('L01_F_BEHAVIOR')",title:"翻车 · 说不清了",script:`庭审失控的片段被人剪出来，四十秒，配着煽动字幕。
「四岁孩子父亲当庭咆哮」冲上热搜第九。

判决其实赢了。没人看。
你在别人的转述里，从「孩子家长」变成了「那个暴怒的男人」。

事实需要一分钟讲完。
情绪只要七秒。`},{id:"e_f_generic",rank:"F",condition:"true",title:"翻车 · 说不清了",script:`到这一步，你心里那口气，先散了。

不是哪一步做错——是每一步都差了半分。该留的监控没保全，该拒的定性没拒掉，
该等法庭说话的时候，你在网上说了。

事情过去了。你在热搜、在群聊、在别人的转述里，越传越走样。

没有人来对质。也没有人来道歉。
你把那一秒钟在脑子里过了一遍又一遍，每过一遍，就多一个「当时要是」。

——情绪也是一种预算。这一次，你在它身上透支了。`}],df={id:Xr,title:Jr,act:Qr,initState:Zr,cast:ec,entryNode:tc,lawyerCard:nc,satireTargets:ic,nodes:oc,endings:sc},rc=Object.freeze(Object.defineProperty({__proto__:null,act:Qr,cast:ec,default:df,endings:sc,entryNode:tc,id:Xr,initState:Zr,lawyerCard:nc,nodes:oc,satireTargets:ic,title:Jr},Symbol.toStringTag,{value:"Module"})),cc="L02",ac="第02关 · 电梯里的镜头",lc=1,uc={evidence:25,opinion:45,composure:75,risk:10},pc=["hero","npc_l02_woman","crowd","shen_li","officer_lin"],dc="n_01",_c="card_law_L02",fc=["T1","T2"],gc=[{id:"n_01",type:"cutscene",pressure:1,script:`写字楼，十八层下行。
电梯里六个人。你刚把手机从口袋里摸出来看时间。
数字停在 18:41。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l02_woman",emotion:"cold",text:"你刚才，是不是在拍我。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"电梯还有九层。另外四个人都低头看着自己的鞋。",timer:22,timeoutOption:"opt_hand_over",options:[{id:"opt_show_lock",text:"把黑屏手机翻过来，屏幕朝外：「锁着的。想看？两个办法——我解锁，或者民警面前解锁。」",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,risk:-5},next:"n_04",outcome:"她盯着黑屏看了两秒，音量没降：「锁着？锁着更说明有问题。」"},{id:"opt_deny_calm",text:"没有。我拿出来看时间。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:15,composure:-5,risk:-5},next:"n_04",outcome:"「看时间？」她指了指腕表，「现在六点四十一。你手机对着我，是几秒？」"},{id:"opt_annoyed",text:"你说话过过脑子。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04",outcome:"「态度！」她的声音一下子立起来了，「大家听听，这就是他的态度！」"},{id:"opt_hand_over",text:"被逼无奈递过手机：行，你爱查自己拿去看。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:5,composure:-10,risk:15},next:"n_04",outcome:"她接手机的动作很快。锁屏密码亮着——她抬头：「密码。」"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"crowd",emotion:"neutral",text:"（电梯到一层。门开了，前台和几个等电梯的人转过头来。没人出去。）",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她挡在门口：「解锁给我看。不然我现在就报警。」",timer:27,timeoutOption:"opt_unlock",options:[{id:"opt_refuse_search",text:"「解锁，不行。」你把手机举到她眼前，「报警现在就报。民警来之前，它一直在我在手上。」",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15,addFlags:["L02_REFUSED_SEARCH"]},next:"n_06",outcome:"「行，都别动，等警察。」她抱臂靠上前台。你把手机放回口袋，屏幕贴着大腿。"},{id:"opt_call_self",text:"抢先拨打 110 开免提：大堂有人强行搜查我手机，请民警到场。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_06",outcome:"免提里传来「您好，110」。整个大堂静了半秒——这一次，等的人换成了她。"},{id:"opt_unlock",text:"息事宁人主动解锁递出：看吧，我问心无愧没什么好藏的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:15},next:"n_06",outcome:"她翻相册的拇指越滑越快。最近一张是三天前的猫，再往前——你想起体检单的照片还在。"},{id:"opt_delete",text:"心虚慌乱清空相册：我已经全删了，行了吧！",tag:"DESTROY_EVIDENCE",aggression:0,initiative:1,effects:{evidence:-30,opinion:-15,composure:5,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE","L02_F_BEHAVIOR"]},next:"n_06",outcome:"删除进度条走完的瞬间，电梯口有人低声说：「他删了。」你听见了。她也听见了。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l02_woman",emotion:"calm_press",text:"你越是不给看，越说明有问题。你在怕什么？",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她说得很慢，很平静。大堂里已经站了十几个人。",timer:26,timeoutOption:"opt_over_explain",options:[{id:"opt_refuse_frame",text:"「这个问题，我不回答。」你抬眼看了看电梯口的摄像头，「等民警来，当他面查。」",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:10,composure:5,risk:-10},next:"n_08",outcome:"你抬头指了指电梯口的摄像头。她顺着你的手看过去，喉结动了一下。"},{id:"opt_silent_wait",text:"不接话茬，抱臂在原地等民警到场。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:-10,risk:-5},next:"n_08",outcome:"沉默拖到第三十秒，先移开视线的是她。"},{id:"opt_counter",text:"你凭什么怀疑我？你有证据吗？",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_08",outcome:"「证据？」她冷笑，「我自己的感觉就是证据。」围观的人点了点头。你心沉了半寸。"},{id:"opt_over_explain",text:"我真没拍！我可以发誓！我平时根本不……",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-15,composure:-10,risk:5},next:"n_08",outcome:"「发誓」一出口，你自己都听出了慌。她的眉头舒展开——那是追击的姿势。"},{id:"opt_breath_l02",text:"深吸一口气闭上眼睛，强行把话咽回去保持冷静。",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0,outcome:"电梯门开了又关，关了又开。你把那口气咽下去，胸口松了一寸。"}],impulsePool:[{id:"imp_curse_l02",text:"你他妈有完没完。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"}]},{id:"n_08",type:"cutscene",pressure:3,script:`一个穿深色西装的女人从旋转门进来，脚步慢下来，看了两秒。
她走过来，从名片夹里抽出一张，递给你。
「沈骊。十一楼，律所。需要的话叫我一声。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"名片停在你和她之间。对方的表情第一次有了变化。",timer:20,timeoutOption:"opt_take_card",options:[{id:"opt_accept_help",text:"麻烦您。等民警来的时候，能请您在场吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:10,composure:15,risk:-10},next:"n_10",outcome:"沈骊站到你身侧半步的位置，不说话。就这半步，前台的眼神先稳了。"},{id:"opt_take_card",text:"双手接过沈律师名片：非常感谢您，沈律师。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:20,opinion:5,composure:10,risk:-5},next:"n_10",outcome:"名片边角很硬，硌手。她瞥见「律师」两个字，往后退了小半步。"},{id:"opt_refuse_help",text:"不用了，我自己能说清楚。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-10,opinion:-5,composure:-5,risk:10},next:"n_10",outcome:"「好。」沈骊没多说，把名片在桌上又推近两厘米，转身走了。"},{id:"opt_vent",text:"您评评理，这不是讹人吗！",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:10},next:"n_10",outcome:"「我不想评理。」她说，「我想等警察。」你剩下的话，卡在了喉咙里。"}],impulsePool:[{id:"imp_shove_l02",text:"失去理智伸手猛推挡在门口的她。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`民警来了。查验在两个人面前进行：相册按时间倒序翻，最近一张是三天前的猫。
执法记录仪红灯亮着。
她往门口挪了半步。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"林昭抬头：「查验完了。双方还有什么要说的？」",timer:22,timeoutOption:"opt_let_go",options:[{id:"opt_request_record",text:"「麻烦把查验结果写进笔录。」你顿了一下，「刚才她说的那句『是不是在拍我』，也请记上。」",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-10},next:"n_12",outcome:"林昭写下「未发现相关影像」，笔尖一顿，抬头看她：「您还有补充吗？」"},{id:"opt_factual_02",text:"我没别的要求，按流程走就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:10,composure:10,risk:-5},next:"n_12",outcome:"流程走完，前后四十分钟。她签完字，笔放下的时候很重。"},{id:"opt_demand_apology",text:"她得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-15,composure:-5,risk:10},next:"n_12",outcome:"「我为什么道歉？」她的声音又起来了，「我只是怀疑！」"},{id:"opt_let_go",text:"算了，查清楚就行，让她走吧。",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:5,risk:10},next:"n_12",outcome:"她走得很快。到门口停了半秒——没回头，还是走了。"}],impulsePool:[{id:"imp_shove_l02b",text:"气急败坏一把拽住想要开溜的她。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`大堂的人散了。你低头看手里那张名片。
烫金的字，边角很硬。`,next:"__END__"}],mc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你先动的手",script:`大堂的监控拍得很清楚：她站着，你伸的手。

行政拘留五日。
物业把你公司的门禁权限暂停了三天，理由是「配合调查」。
HR 找你谈话的时候，桌上摊着那段十七秒的视频。

手机相册里最近一张还是三天前的猫。
没人再想看那张照片了。`,unlock:"card_L02_F"},{id:"e_s_rank",rank:"S",condition:"evidence>=80 && risk<=20 && opinion>=70 && composure>=60",title:"名场面 · 我不解锁",script:`「查验结果：未发现相关影像。」林昭在笔录上写完，把本子转过来。

她说她要走。
沈骊在旁边开口，声音不高：
「查验是在她要求下进行的。既然她提出了主张，那笔录里也得有她的部分。」
林昭点点头：「请留步。」

大堂很静。她站在原地，手里攥着自己的手机，
这一次，轮到她解释「我没有别的意思」。
没人接话。前台低下了头，等电梯的人看鞋尖。

两分钟后，她在「无理主张」一栏签了字。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L02_F"}],_f={id:cc,title:ac,act:lc,initState:uc,cast:pc,entryNode:dc,lawyerCard:_c,satireTargets:fc,nodes:gc,endings:mc},vc=Object.freeze(Object.defineProperty({__proto__:null,act:lc,cast:pc,default:_f,endings:mc,entryNode:dc,id:cc,initState:uc,lawyerCard:_c,nodes:gc,satireTargets:fc,title:ac},Symbol.toStringTag,{value:"Module"})),hc="L03",xc="第03关 · 爸爸和女儿",kc=1,yc={evidence:15,opinion:25,composure:60,risk:30},Lc=["hero","npc_l03_daughter","npc_l03_woman","crowd","officer_lin"],Tc="n_01",bc="card_law_L03",Ac=["T1","T2","T3"],wc=[{id:"n_01",type:"cutscene",pressure:1,script:`周六下午，商场三楼，玩具区门口。
六岁的陈念看上了一个娃娃，你说家里已经有三个了。
她把手从你手里抽出来，坐在地上。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l03_daughter",emotion:"cry",text:"我不要跟你走！",next:"n_03"},{id:"n_03",type:"dialogue",pressure:3,speaker:"npc_l03_woman",emotion:"alarmed",text:"（挡在你和孩子中间）这是你孩子吗？",next:"n_04"},{id:"n_04",type:"choice",pressure:3,prompt:"她的手已经搭在陈念肩上。周围三四个人停下了脚步。",timer:23,timeoutOption:"opt_pull_away",options:[{id:"opt_squat_down",text:"蹲下平视女儿柔声说：“念念别怕，告诉阿姨我是谁？”",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_05",outcome:"念念抹着眼泪看了阿姨一眼，又看你：「这是我爸爸。」声音很小，但没抖。"},{id:"opt_show_id",text:"亮出手机存件举过头顶：「出生证明、户口本都在这儿。看清楚——然后，帮我叫警察。」",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,risk:-5},next:"n_05",outcome:"有人凑近看了眼屏幕，小声说：「是他闺女，长得真像。」拦你的女士没松口：「照片说明不了。」"},{id:"opt_annoyed",text:"关你什么事？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_05",outcome:"「全社会都有事！」人群里立刻有人接话。你被围得更紧了。"},{id:"opt_pull_away",text:"拉起女儿就想快步避开人群往扶梯走。",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-25,composure:-5,risk:15,addFlags:["G_NEG_FLED","L03_F_BEHAVIOR"]},next:"n_05",outcome:"你刚迈出两步，两个男人站到了扶梯口。「先别让他走」——这句话像点着了什么。"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（两个男人站到了扶梯口。有人说：先别让他走。）",next:"n_06"},{id:"n_06",type:"choice",pressure:4,prompt:"十几个人围了过来。陈念还在哭，声音更大了。",timer:24,timeoutOption:"opt_push_through",options:[{id:"opt_call_police_self",text:"拨通 110 开免提：“民警同志，我在商场三楼，有人报警怀疑我拐卖女儿，请民警到场。”",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5,addFlags:["L03_CALLED_POLICE_FIRST"]},next:"n_07",outcome:"「民警同志」四个字一出，喊得最响的人先哑了。手机还举着，但没人再喊。"},{id:"opt_call_wife",text:"立刻给孩子妈妈拨通视频，将镜头对准女儿正面。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-10},next:"n_07",outcome:"屏幕里妈妈的声音穿过嘈杂：「念念！念念！」孩子在人群里哭出声，朝屏幕伸手。"},{id:"opt_stay_put",text:"我不走。我在这儿等警察。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:15,composure:5,risk:-5},next:"n_07",outcome:"你说不走，就真没动。人群围着你，像潮水围着礁石——潮水先觉得没意思了。"},{id:"opt_push_through",text:"一把抱起孩子就想强行往人墙外面挤。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_07",outcome:"你抱着孩子往外撞，有人拽住你的衣角。念念的哭声炸开——这一声，把怀疑坐实了半分。"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:5,speaker:"crowd",emotion:"neutral",text:"（七八部手机举起来。有人喊：录下来，别让他跑了！）",next:"n_08"},{id:"n_08",type:"choice",pressure:5,prompt:"陈念被人群吓到了，扑过来抱住你的腿，哭得喘不上气。",timer:25,timeoutOption:"opt_beg",options:[{id:"opt_hold_child",text:"把女儿抱紧在怀里背对围观镜头：“念念不怕，爸爸在这儿哪儿也不去。”",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:10,opinion:20,composure:15,risk:-10},next:"n_09",outcome:"念念把脸埋进你肩膀。镜头里，是一个后脑勺和一双稳稳的手。"},{id:"opt_let_record",text:"都拍。从头拍，别剪。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_09",outcome:"「别剪」三个字说完，最前面那个人反而把手机放低了两寸。"},{id:"opt_beg",text:"求求你们，这真是我女儿，你们别吓着她……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-10,opinion:-10,composure:-15,risk:10},next:"n_09",outcome:"「求」字一出口，人群里的笃定又厚了一层。没人安慰你，也没人松开。"},{id:"opt_yell",text:"你们谁敢碰我孩子！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:20},next:"n_09",outcome:"你的音量赢了这一秒。下一秒，七八部手机全部对准了你。"},{id:"opt_ally_l03",text:"当场拨通电话：“沈律师，我在商场三楼遭遇误解，需要您指导。”",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09",outcome:"沈骊的电话十秒接通：「别争对错。三句话：孩子是我的、等警察、调监控。」"}],impulsePool:[{id:"imp_shove_l03",text:"暴怒推开堵在扶梯口的人：“给我让开！”",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"dialogue",pressure:5,speaker:"npc_l03_woman",emotion:"firm",text:"孩子自己说的不要跟你走。这么多人都听见了。",next:"n_10"},{id:"n_10",type:"choice",pressure:5,prompt:"陈念的脸埋在你肩膀上，哭声闷成一团。她攥着你的衣领，攥得很紧。",timer:28,timeoutOption:"opt_defend",options:[{id:"opt_ask_daughter",text:"低头轻抚女儿的背：“念念，告诉阿姨——你刚才为什么说不要跟爸爸走？”",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_11",outcome:"念念吸了吸鼻子，看看你，又看看那位阿姨。所有人都安静下来——包括举着手机的。"},{id:"opt_full_sentence",text:"她那句还有后半句——「我要买那个娃娃」。七八部手机录到底，谁听全了？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:30,composure:5,risk:-10},next:"n_11",outcome:"「……我要买那个娃娃。」半句补全的瞬间，最前排一个人慢慢把手机放下了。"},{id:"opt_silent_hold",text:"不作无谓争吵，抱紧女儿静等警察到场。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:-10,risk:-5},next:"n_11",outcome:"你不再说话，只把孩子抱得更稳。争吵失去了对手，渐渐没了声量。"},{id:"opt_defend",text:"我说了这是我女儿！你们听不懂人话吗！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_11",outcome:"「你还凶！」人群立刻有了新的话头。你抱着孩子的手，紧了又紧。"},{id:"opt_breath_l03",text:"深吸一口气闭上眼睛，强行把话咽回去保持冷静。",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0,outcome:"人群的声音退成一层壳。你闻到女儿头发上的汗味，数了三下，把火压了回去。"}],impulsePool:[{id:"imp_shout_l03",text:"你们他妈的都给我滚开！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_11"},{id:"imp_shove_l03b",text:"情绪失控一把推开挡在面前的阻拦者。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:3,script:`警察上来了。林昭走在前面，先看的是孩子。
「小朋友，别怕。阿姨问你一句话——」
她蹲下来，和陈念平视。
「抱着你的这个人，你认识吗？」`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"陈念从你肩膀上抬起头，眼睛肿着。整个三楼安静下来。",timer:25,timeoutOption:"opt_exhausted",options:[{id:"opt_provide_all",text:"「三样一起验：户口本在手机里，妈妈视频还在线，监控——请从玩具区开始调。」",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-10},next:"n_13",outcome:"三样东西在桌上一字排开。林昭先拿起户口本——那位女士的目光跟了过去。"},{id:"opt_factual_l03",text:"条理清晰陈述经过：“刚才在玩具店她要买娃娃我不给，这才哭闹起来。”",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:15,composure:5,risk:-5},next:"n_13",outcome:"「娃娃」两个字一出口，那位女士的肩膀松了一下。她低下头，第一次没接话。"},{id:"opt_demand",text:"拦我那个人得道歉。当着这些人。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_13",outcome:"「道歉……」她搓着手，「我也是怕孩子出事。」声音越来越小。"},{id:"opt_exhausted",text:"筋疲力尽地紧抱女儿，喉咙发紧说不出话。",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-5,opinion:10,composure:-10,risk:10},next:"n_13",outcome:"你张了张嘴，喉咙里全是砂纸。林昭摆摆手：「不急，材料会说话。」"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`陈念指着玩具区的方向，抽噎着说了三个字。
那三个字很小，但离得近的人都听见了。`,next:"__END__"}],Oc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 她摔在扶梯口",script:`你推开了挡路的人。人群晃了一下。
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
路过玩具区，你停了一下——这次进去了。
清白不用买。娃娃要买。`,unlock:"card_L03_S"},{id:"e_a_rank",rank:"A",condition:"risk<=30 && evidence>=60 && composure>=15",title:"干净脱身",script:`户口本、视频、监控，三样对上，事情很快就清楚了。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L03_F"}],ff={id:hc,title:xc,act:kc,initState:yc,cast:Lc,entryNode:Tc,lawyerCard:bc,satireTargets:Ac,nodes:wc,endings:Oc},Pc=Object.freeze(Object.defineProperty({__proto__:null,act:kc,cast:Lc,default:ff,endings:Oc,entryNode:Tc,id:hc,initState:yc,lawyerCard:bc,nodes:wc,satireTargets:Ac,title:xc},Symbol.toStringTag,{value:"Module"})),Rc="L04",Sc="第04关 · 深夜同行",Ec=1,Ic={evidence:20,opinion:35,composure:55,risk:35},Cc=["hero","npc_l04_woman","officer_lin","crowd"],$c="n_01",Mc="card_law_L04",Nc=["T1","T3"],Fc=[{id:"n_01",type:"cutscene",pressure:1,script:`十一点四十，出地铁 C 口。加了四个小时班，你只想快点到家。
从这里到小区北门，一条路，走了三年。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:1,script:`第二个路口开始，前面十几米有个女生，同方向。
她回头看了一眼。又看了一眼。
然后你听见她加快了脚步。`,next:"n_03"},{id:"n_03",type:"choice",pressure:1,prompt:"还有三百米就到小区门口。这条路只有这一条。",timer:21,timeoutOption:"opt_ignore",options:[{id:"opt_slow_down",text:"放慢步速拉开三十米，顺手开启行程导航留痕。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-15},next:"n_04",outcome:"三十米的距离，你在暗她在亮。耳机的导航报出路线——记录，开始了。"},{id:"opt_cross_road",text:"直接走过斑马线，换到马路对侧的人行道。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:25,opinion:15,risk:-10},next:"n_04",outcome:"斑马线走完，你和她隔了一条马路。她回头看你的次数，变成了零。"},{id:"opt_ignore",text:"没做亏心事，保持常速各走各的。",tag:"NEUTRAL",aggression:0,initiative:1,effects:{opinion:-10,composure:-5,risk:15},next:"n_04",outcome:"同速走到第二个路口，她第三次回头——这一次，掏出了手机。"},{id:"opt_speed_up",text:"加班太累了，快走两步超过去早点回家。",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-20,composure:-5,risk:20},next:"n_04",outcome:"你加速的瞬间，她的脚步乱了一拍。身后传来急促的脚步声——她也在加速。"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:2,script:`小区北门口停着一辆警车，警灯没开。
两名民警下车，其中一位朝你走过来。她胸前的执法记录仪亮着红灯。
那个女生站在警车另一侧，抱着手臂。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:3,speaker:"officer_lin",emotion:"neutral",text:"您好。有人报警说被跟踪。麻烦配合一下。",next:"n_06"},{id:"n_06",type:"choice",pressure:3,prompt:"小区门口的保安探出头来看。有个遛狗的邻居停下了脚步。",timer:22,timeoutOption:"opt_defensive",options:[{id:"opt_full_cooperate",text:"配合。我住这个小区，这条路每天走。导航和门禁记录都能调。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_07",outcome:"「每天走这条路」六个字，让执法记录仪后的眉头松了半格：「好，我们核对一下。」"},{id:"opt_ask_basis",text:"可以配合。能先说一下是什么情况吗？",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:15,risk:-5},next:"n_07",outcome:"「有人报警，说被同方向尾随。」民警指了指警车另一侧，「就是这位女士。」"},{id:"opt_defensive",text:"我跟踪谁了？我下班回家！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_07",outcome:"「我没说你跟踪！」她的声音尖起来，「我说的被跟踪！你对号入座什么？」"},{id:"opt_lie",text:"我不走这条路的，我刚才在前面拐了个弯。",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:20,addFlags:["G_NEG_LIED","L04_F_BEHAVIOR"]},next:"n_07",outcome:"「刚才拐弯？」民警看了眼记录仪，「这条路是直的。」你听见了自己的心跳。"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:4,speaker:"npc_l04_woman",emotion:"tense",text:"他从地铁口就跟在我后面。三个路口，我走他也走。",next:"n_08"},{id:"n_08",type:"choice",pressure:4,prompt:"她说得很快，手在抖。你看得出来她是真的害怕。",timer:24,timeoutOption:"opt_apologize_l04",options:[{id:"opt_request_footage",text:"沿路有监控。麻烦从我出地铁口那一刻开始调。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_09",outcome:"「可以。沿路四个探头，明早出片。」她说「这么麻烦」——没人接她的话。"},{id:"opt_show_route",text:"亮出手机导航历史：“这三个月，我每天下班都是同一路线。”",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_09",outcome:"三个月、九十多条同时段的导航记录铺在屏上。她盯了很久：「……这不能说明什么。」声音小了。"},{id:"opt_apologize_l04",text:"不好意思吓着你了，我不是故意的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_09",outcome:"「对不起」出口的瞬间，她挺直了背：「你看，他自己都承认吓到我了。」"},{id:"opt_argue_l04",text:"是她自己疑神疑鬼。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_09",outcome:"「我疑神疑鬼？」她的眼圈一下子红了。围观住户的目光，转向了你。"},{id:"opt_breath_l04",text:"深吸一口气闭上眼睛，强行把话咽回去保持冷静。",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_08",oncePerNode:!0,outcome:"深夜的风穿过楼道。你把「凭什么」咽回去，胃里泛起一点酸。"}],impulsePool:[{id:"imp_curse_l04",text:"我他妈住这儿！你要我怎么走？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_09"},{id:"imp_shove_l04",text:"情绪失控推开民警：“让开，我要回家！”",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"choice",pressure:3,prompt:`林昭把笔录本递过来：「您看一下，没问题就签字。」
第三行写着：「本人一直跟在报警人后方行走。」`,timer:24,timeoutOption:"opt_sign_fast",options:[{id:"opt_read_carefully",text:"第三行改一下。前两个路口是我在前面，她从后面超过去的。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_10",outcome:"民警重读了一遍，抬头：「您确定？」——「确定。这一行，对她有利。」"},{id:"opt_add_statement",text:"我要求把导航记录和门禁记录附进笔录。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-5},next:"n_10",outcome:"「导航记录、门禁记录，附卷。」那一行字，比你说过的所有话都稳。"},{id:"opt_sign_fast",text:"实在太疲惫了，扫了一眼就草草签字。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:5,risk:25},next:"n_10",outcome:"签完走到门口，你才想起第三行写反了前后。夜风一吹，后背有点凉。"},{id:"opt_refuse_sign",text:"我不签。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-15,composure:-5,risk:20},next:"n_10",outcome:"「不签是您的权利。」民警的语气平了，「但这一条，也得记进去。」"},{id:"opt_ally_l04",text:"当场拨通电话：“沈律师，我被民警核查情况，能不能麻烦您听一下。”",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_10",outcome:"沈骊在电话那头只说一句：「什么都别补充。让监控先说。」"}],impulsePool:[{id:"imp_tear_l04",text:"一把将笔录本推回去：“爱怎么写怎么写，我不伺候了！”",unlockBelow:50,tag:"TRAP",aggression:3,initiative:0,effects:{evidence:-20,opinion:-20,composure:-5,risk:20},next:"n_10"}]},{id:"n_10",type:"cutscene",pressure:2,script:`警务室的屏幕上，四个路口的画面拼在一起。

23:41，地铁 C 口，你先出来的。
23:44，第一个路口，你在前，她在后十几米。
23:47，第二个路口，你停下来买了包烟。她从你身边走过去了。
23:52，第三个路口——她在前，你在后。

林昭把进度条倒回 23:47，又放了一遍。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那个女生盯着屏幕，脸慢慢红了。她张了张嘴，没出声。",timer:22,timeoutOption:"opt_quiet_l04",options:[{id:"opt_request_conclusion",text:"「麻烦出一份情况说明：未发现违法事实。白纸黑字，一式两份——我留档。」",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_12",outcome:"打印机吐出两页纸。「未发现违法事实」——八个字，油墨还热着。你折好，放进内袋。"},{id:"opt_quiet_l04",text:"默默点头收好文书，转身拖着疲惫身躯回家。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_12",outcome:"你点头收好文书。走到北门，保安探出头，你摆摆手——今晚什么都不想说。"},{id:"opt_demand_l04",text:"她得道歉。害我在这儿站两个小时。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12",outcome:"「道歉……」她搓着衣角，「我一个女的，深夜……」后面没说完，但足够了。"},{id:"opt_lecture",text:"以后报警之前，先想清楚。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-5,risk:10},next:"n_12",outcome:"「下次？」她的声音又起来了，「被跟着的时候，我哪知道有没有下次？」你一时语塞。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`凌晨一点二十，你刷卡进北门。
保安探出头：「陈哥，没事吧？」
你说没事。

第二天下班，你在地铁 C 口站了一会儿，绕了远路回家。
多走了十一分钟。`,next:"__END__"}],Dc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你推的是警察",script:`执法记录仪全程都在录。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L04_F"}],gf={id:Rc,title:Sc,act:Ec,initState:Ic,cast:Cc,entryNode:$c,lawyerCard:Mc,satireTargets:Nc,nodes:Fc,endings:Dc},Hc=Object.freeze(Object.defineProperty({__proto__:null,act:Ec,cast:Cc,default:gf,endings:Dc,entryNode:$c,id:Rc,initState:Ic,lawyerCard:Mc,nodes:Fc,satireTargets:Nc,title:Sc},Symbol.toStringTag,{value:"Module"})),Bc="L05",Gc="第05关 · 托杠铃的那一下",Vc=1,jc={evidence:20,opinion:30,composure:50,risk:40},Uc=["hero","npc_l05_woman","npc_l05_manager","npc_l05_witness","crowd"],Yc="n_01",Kc="card_law_L05",qc=["T1","T5"],Wc=[{id:"n_01",type:"cutscene",pressure:1,script:`自由重量区，晚上八点半。
隔壁卧推架上一个女生在推空杆加两片，最后一组第七下卡住了。
杠铃开始往下沉。她的手在抖，没有保护员。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`你两步冲过去，掌心向上，从下面托住杠铃杆，往上带。
杠铃回到架子上，哐一声。

托的时候，你的手背蹭到了她的手臂外侧。
零点几秒。`,next:"n_03"},{id:"n_03",type:"dialogue",pressure:1,speaker:"npc_l05_woman",emotion:"shaken",text:"（坐起来，喘着气）……谢谢。",next:"n_04"},{id:"n_04",type:"cutscene",pressure:2,script:`十分钟后，店长带着她走过来。
她的表情变了。不是愤怒，是那种想了很久之后的确信。`,next:"n_05"},{id:"n_05",type:"dialogue",pressure:2,speaker:"npc_l05_woman",emotion:"cold",text:"他刚才碰到我了。",next:"n_06"},{id:"n_06",type:"choice",pressure:2,prompt:"器械区安静了一片。店长搓着手，看着你身后的某个位置。",timer:20,timeoutOption:"opt_apologize_l05",options:[{id:"opt_admit_and_frame",text:"碰到了。托杠铃的时候手背蹭到她手臂，零点几秒。监控有。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_07",outcome:"「零点几秒」五个字，店长的表情先松了——能说清的事，就还不是事。"},{id:"opt_ask_footage_l05",text:"卧推架正对着监控。麻烦现在就调。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-5},next:"n_07",outcome:"「调监控」落地，她安静了半拍。店长看了眼表：「要等店长权限。」「我等。」"},{id:"opt_deny_l05",text:"我没碰她。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-25,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_LIED","L05_F_BEHAVIOR"]},next:"n_07",outcome:"「没碰？」她抬高手机，「我手臂上还有你手背的温度！」——这句话本身，就说明她想了十分钟。"},{id:"opt_apologize_l05",text:"不好意思，我可能手滑了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_07",outcome:"「手滑」——你亲手把「碰」坐实了。她的下巴，抬了起来。"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:3,speaker:"npc_l05_woman",emotion:"calm_press",text:"你为什么要过来？我又没有叫你。",next:"n_08"},{id:"n_08",type:"choice",pressure:3,prompt:"这句话把你问住了半秒。你确实没等她开口。",timer:21,timeoutOption:"opt_withdraw",options:[{id:"opt_explain_duty",text:"杠铃已经压到你胸口了。我不过去，落下来是三十公斤。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_09",outcome:"「三十公斤」和「压到胸口」，让围观者的目光第一次分裂了。"},{id:"opt_procedural_l05",text:"等监控。你怎么想是一件事，发生了什么是另一件事。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-15},next:"n_09",outcome:"「发生了什么」这五个字像一把尺子，把情绪和事实摆到了两边。她没再说话。"},{id:"opt_hurt",text:"我救了你，你就这么说我？",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_09",outcome:"「救？」她的声音抖了，「谁要你救？」天平，又晃了一下。"},{id:"opt_withdraw",text:"行。是我多管闲事。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:15},next:"n_09",outcome:"你转身的那三秒，议论声清晰起来——两边都有，但没人再拦你。"}],impulsePool:[{id:"imp_curse_l05a",text:"早知道让它砸下来。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-30,composure:-10,risk:20},next:"n_09"}]},{id:"n_09",type:"dialogue",pressure:3,speaker:"npc_l05_manager",emotion:"appease",text:"小陈啊，你看这样行不行，你先别来了，等风头过去。",next:"n_10"},{id:"n_10",type:"choice",pressure:3,prompt:"他压低了声音，像是在帮你。你卡里还有十四个月。",timer:25,timeoutOption:"opt_comply_l05",options:[{id:"opt_written_reason",text:"不来可以。请书面写明理由，我签字留档。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-10},next:"n_11",outcome:"「书面」两个字让店长的手指在桌沿敲了两下：「不至于，不至于。」「那就写上不至于。」"},{id:"opt_ask_process",text:"你们的投诉流程是什么？监控什么时候调？",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-5},next:"n_11",outcome:"「流程是……」店长翻了翻手机，「先登记投诉……」「好，登记。编号给我。」"},{id:"opt_argue_manager",text:"出了事你就把我推出去？",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-15,composure:-10,risk:15},next:"n_11",outcome:"「推出去？」店长脸红了，「我们是暂停——」「暂停也要书面。」你把话接得很平。"},{id:"opt_comply_l05",text:"低头咽下憋屈，默默去更衣室收拾东西。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_11",outcome:"更衣室的柜门关上，隔断了外面的一切。你的手在抖——不是怕，是憋的。"},{id:"opt_ally_l05",text:"走到角落拨通电话：“沈律师，健身房这边起了纠纷，需要您指导两分钟。”",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_11",outcome:"沈骊听了四十秒，只回三句：「不辞职、要书面、等监控。」"}],impulsePool:[{id:"imp_curse_l05b",text:"你们这店我记住了。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_11"}]},{id:"n_11",type:"dialogue",pressure:4,speaker:"npc_l05_woman",emotion:"cold",text:"（举起手机）他那种眼神，我见得多了。",next:"n_12"},{id:"n_12",type:"choice",pressure:4,prompt:"又有两个人举起了手机。店长往旁边挪了半步，装作没看见。",timer:23,timeoutOption:"opt_over_defend_l05",options:[{id:"opt_witness",text:"刚才旁边那位在做深蹲，全程都看着。能请他说一句吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_13",outcome:"做深蹲的大哥摘下一只耳机：「我全程看着。杠铃压到她身上了。」——这句话，比一百句自辩都硬。"},{id:"opt_stay_calm",text:"眼神我不解释。我等监控。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:10,risk:-10},next:"n_13",outcome:"「眼神」两个字悬在空气里。你不接，它就落不了地。三十秒后，先垂眼的是她。"},{id:"opt_over_defend_l05",text:"我什么眼神？你说清楚！",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-15,composure:-15,risk:10},next:"n_13",outcome:"「什么眼神？！」你越急，那句「我见得多了」就越像真的。店长的目光飘向了别处。"},{id:"opt_leave_l05",text:"拎起运动包甩手就走，一秒也不想多留。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-5,risk:15,addFlags:["G_NEG_FLED"]},next:"n_13",outcome:"你推门的瞬间，身后有人小声说了句「至于吗」。门合上，把那句话关在了里面。"},{id:"opt_breath_l05",text:"深吸一口气闭上眼睛，强行把话咽回去保持冷静。",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_12",oncePerNode:!0,outcome:"杠铃片的碰撞声从远处传来。你数了三次呼吸，把「凭什么」放回了架子上。"}],impulsePool:[{id:"imp_shout_l05",text:"你他妈把话说清楚！",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_13"},{id:"imp_shove_l05",text:"盛怒之下一把打掉她举着的手机。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_13",type:"cutscene",pressure:2,script:`办公室，监控回放。

20:31:14 杠铃开始下沉，第七下没推上去。
20:31:19 杠铃压到胸口，她的手肘外翻。
20:31:21 你入画，掌心向上，托住杠铃杆。
20:31:23 杠铃回架。

林昭——不，是店长——把进度条往前拖了二十分钟。
20:09，同一个架子。一个男会员卡住，你走过去，一模一样的动作，一模一样的手位。`,next:"n_14"},{id:"n_14",type:"choice",pressure:2,prompt:"屏幕停在 20:09 那一帧。办公室里没人说话。",timer:21,timeoutOption:"opt_quiet_l05",options:[{id:"opt_request_written_l05",text:"结果出一份书面的。另外，她刚才那句话，也麻烦记一下。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_15",outcome:"「她刚才那句话」六个字让她抬起了头。店长的笔，悬在纸上。"},{id:"opt_quiet_l05",text:"平静地点了点头，回去把剩下两组卧推做完。",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:20,composure:10,risk:-5},next:"n_15",outcome:"你回到卧推架，把剩下两组做完。没人说话——但有人悄悄打开了原片。"},{id:"opt_demand_l05",text:"她得当着所有人道歉。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_15",outcome:"「道歉」一出口，她的眼泪反而下来了。围观的人开始散——他们只看到了眼泪。"},{id:"opt_quit_gym",text:"看透了场馆嘴脸，当场要求退卡结清走人。",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-15,opinion:-10,composure:-5,risk:15},next:"n_15",outcome:"退卡单据上，你的签名很稳。走出大门，你回头看了一眼那个卧推架。"}],impulsePool:[]},{id:"n_15",type:"cutscene",pressure:1,script:`三个月后，同一个架子。
又有人推不上去了，杠铃往下沉。

器械区有七八个人。所有人都看见了。
没有人过去。`,next:"__END__"}],zc=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一巴掌",script:`手机摔在地胶上，屏幕裂成蛛网。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L05_F"}],mf={id:Bc,title:Gc,act:Vc,initState:jc,cast:Uc,entryNode:Yc,lawyerCard:Kc,satireTargets:qc,nodes:Wc,endings:zc},Xc=Object.freeze(Object.defineProperty({__proto__:null,act:Vc,cast:Uc,default:mf,endings:zc,entryNode:Yc,id:Bc,initState:jc,lawyerCard:Kc,nodes:Wc,satireTargets:qc,title:Gc},Symbol.toStringTag,{value:"Module"})),Jc="L06",Qc="第06关 · 三十八万八",Zc=2,ea={evidence:30,opinion:50,composure:48,risk:20},ta=["hero","npc_l06_girlfriend","npc_l06_mother","crowd"],na="n_01",ia="card_law_L06",oa=["T1","T3"],sa=[{id:"n_01",type:"cutscene",pressure:1,script:`女方家客厅。茶几上摆着切好的果盘，没人动。
谈了三年，今天是第一次两家坐下来说结婚的事。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l06_mother",emotion:"matter_of_fact",text:"三十八万八，房本加名，车全款。这是行情，不是我要的。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"你家全部积蓄四十一万，是你爸的退休金。你妈在旁边搓着手。",timer:20,timeoutOption:"opt_agree_first",options:[{id:"opt_write_down",text:"这几条我记一下。数字和条件都写清楚，省得以后有出入。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"你低头记数字的样子，让桌上安静了两秒。她妈的茶杯停在半空——这个女婿在记录。"},{id:"opt_ask_detail",text:"彩礼这笔钱，婚后是归我们小家，还是归您？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,risk:-5},next:"n_04",outcome:"「归小家还是归您」——她妈的笑容顿了一下，筷子在碟子上磕了磕。前女友低头扒饭。"},{id:"opt_agree_first",text:"行，我想想办法。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-10,risk:20},next:"n_04",outcome:"「想想办法」三个字出口，她妈立刻接上：「下个月八号之前。」——原来早就备好了日子。"},{id:"opt_object",text:"这不是卖女儿吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04",outcome:"「卖女儿」三个字砸在桌上。前女友的眼圈红了，她妈反而笑了：你看，急了。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l06_girlfriend",emotion:"hurt",text:"你是不是嫌我？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她眼睛红了。这三年她没跟你要过一件贵东西。",timer:21,timeoutOption:"opt_cave",options:[{id:"opt_equal_terms",text:"不嫌。钱我出，名我加。那也写一条：婚后共同还贷，离婚按出资分。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06",outcome:"「婚后共同还贷，离婚按出资分」——念到这一句，她妈抬起了老花镜。前女友看了你一眼。"},{id:"opt_separate",text:"我们俩的事，能不能我们俩先谈？",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_06",outcome:"「我们俩谈」——她妈把筷子放下：两个人？两个人的日子，钱从哪儿来？"},{id:"opt_hurt_l06",text:"谈钱的时候，你怎么不说爱不爱。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_06",outcome:"「谈钱的时候不说爱」——这句话让前女友把手放到了桌下。她妈接得很快：爱能当首付吗？"},{id:"opt_cave",text:"不嫌不嫌，我砸锅卖铁也给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20,addFlags:["L06_F_BEHAVIOR"]},next:"n_06",outcome:"「砸锅卖铁」四个字一出，她妈的腰明显直了：那行，再加八万八，凑个整数。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l06_mother",emotion:"cold",text:"共同还贷？那是你们小两口的事。我说的是彩礼，两码事。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"你妈的手在膝盖上攥紧了。她今天穿了压箱底那件衣服。",timer:24,timeoutOption:"opt_loan",options:[{id:"opt_parents_present",text:"这么大的事，得四个人一起谈。咱们再约个时间。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08",outcome:"「四个人一起谈」——她妈愣了半秒。这种事，一个人是被拿捏，四个人是谈判。"},{id:"opt_show_numbers",text:"（打开手机）我家全部积蓄四十一万，是我爸的退休金。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:-5,risk:-5},next:"n_08",outcome:"四十一万这个数字念出来，桌上静了很久。那是她妈第一次没接话。"},{id:"opt_loan",text:"（在桌子底下点开了网贷 App）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:25},next:"n_08",outcome:"桌子底下，网贷 App 的额度页亮着：可借 20 万，日息万五。你的拇指悬在上面。"},{id:"opt_walk",text:"（起身要走）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-10,opinion:-20,composure:-5,risk:15},next:"n_08",outcome:"你起身的瞬间，前女友抓住了你的袖子。她妈的声音从背后追上来：坐下，话还没说完。"},{id:"opt_ally_l06",text:"（去阳台拨号）沈律师，有个协议我想请您看一眼。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08",outcome:"沈骊在电话里听完，只问了一句：她们说的每一句，你都记下来了吗？"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l06_girlfriend",emotion:"cry",text:"你不给，就是不爱我。就这么简单。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"客厅安静得能听见挂钟。四个人都在等你开口。",timer:22,timeoutOption:"opt_beg_l06",options:[{id:"opt_refuse_frame_l06",text:"爱不爱不用钱证明。真要证明，那就两边都拿出来。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:5,risk:-10},next:"n_10",outcome:"「两边都拿出来」——她妈的算盘声停了。原来爱是双方的证明题，不是单方的转账。"},{id:"opt_calm_l06",text:"（把刚才记下的条件，一条一条念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_10",outcome:"你一条一条念完，桌上没人说话。数字不会吵架，数字只会躺在那里。"},{id:"opt_beg_l06",text:"你别这么说……我真的尽力了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-15,opinion:-10,composure:-15,risk:15},next:"n_10",outcome:"「尽力了」三个字一出口，她妈叹了口气——那声叹气里，有怜悯，也有定论。"},{id:"opt_break_up",text:"那就算了吧。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{evidence:-5,opinion:-15,composure:-10,risk:10},next:"n_10",outcome:"「就算了吧」说完，前女友的筷子停了。她妈反倒摆手：年轻人，话别说死。"},{id:"opt_breath_l06",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"阳台的风把烟灰吹散。你数了三次呼吸，把「凭什么」咽了回去。"}],impulsePool:[{id:"imp_curse_l06",text:"你们这就是明码标价。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l06",text:"（推开挡在门口的岳母）我要走了。",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`你从包里抽出两页 A4，放在果盘旁边。

「三十八万八，我给。房本加名，我同意。」
「这上面写清楚了：钱的用途、归属，还有一条——如果两年内离婚，怎么算。」

她妈没有伸手去拿。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"那两页纸在茶几上放了很久。谁也没碰。",timer:18,timeoutOption:"opt_wait",options:[{id:"opt_propose_agreement",text:"钱照给，一分不少。签个字，两家都踏实。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,risk:-15},next:"n_12",outcome:"「签个字」——她妈把协议接过去，正反看了两遍。前女友在桌子底下，握了一下你的手。"},{id:"opt_wait",text:"那……我再想想。",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-5,opinion:-10,composure:-5,risk:15},next:"n_12",outcome:"「再想想」的沉默里，她妈把水果盘往前推了推：想归想，饭要吃。"},{id:"opt_verbal_promise",text:"不签也行，就这么说定了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:20},next:"n_12",outcome:"「说定了」——没有纸。她妈笑得很慈祥：好孩子。三个月后你才知道这句话的分量。"},{id:"opt_ultimatum",text:"签就结，不签就散。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-5,risk:15},next:"n_12",outcome:"「签就结，不签就散」——前女友的眼泪掉下来了。她妈把纸推了回来：再看看，不急这一晚。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`回去的路上，你妈一直没说话。
快到家的时候她说：「那两页纸，你写得挺好。」
又走了一段，她说：「我跟你爸商量过了，钱我们出。」

你说不用。
她说：「我知道不用。我就是想让你知道，我们出得起。」`,next:"__END__"}],ra=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一下",script:`你推开她的时候，她的后腰撞在鞋柜角上。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L06_F"}],vf={id:Jc,title:Qc,act:Zc,initState:ea,cast:ta,entryNode:na,lawyerCard:ia,satireTargets:oa,nodes:sa,endings:ra},ca=Object.freeze(Object.defineProperty({__proto__:null,act:Zc,cast:ta,default:vf,endings:ra,entryNode:na,id:Jc,initState:ea,lawyerCard:ia,nodes:sa,satireTargets:oa,title:Qc},Symbol.toStringTag,{value:"Module"})),aa="L07",la="第07关 · 青春损失费",ua=2,pa={evidence:35,opinion:45,composure:45,risk:30},da=["hero","npc_l07_ex","shen_li"],_a="n_01",fa="card_law_L07",ga=["T1","T4"],ma=[{id:"n_01",type:"cutscene",pressure:1,script:`分手第九天。她约你在常去的那家咖啡馆。
还是靠窗那张桌子。她比你先到。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l07_ex",emotion:"flat",text:"三年。二十万。给了这事就过去了。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"她说得很平静，像是排练过。手边放着手机，屏幕朝下。",timer:19,timeoutOption:"opt_negotiate_l07",options:[{id:"opt_record_now",text:"（把手机放到桌上，屏幕朝上）你刚才那句，再说一遍。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04",outcome:"屏幕朝上，红点在跳。她的表情变了三次，最后定格在「你敢」上——但她没再说一遍。"},{id:"opt_ask_basis_l07",text:"二十万这个数，是按什么算出来的？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,risk:-5},next:"n_04",outcome:"「按什么算的」——她张了张嘴：青春……损失。这两个词她自己念着都不顺。"},{id:"opt_negotiate_l07",text:"……能不能少点？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-5,risk:20},next:"n_04",outcome:"「能不能少点」——她立刻坐直了：二十万是看你三年感情的折扣价。"},{id:"opt_angry_l07",text:"你疯了吧？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:10},next:"n_04",outcome:"「你疯了」三个字出口，她的手机已经横过来了：那你就在视频里说。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l07_ex",emotion:"cold",text:"不给，我就去派出所报案。你猜他们信谁。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"咖啡凉了。你听见自己心跳的声音。",timer:20,timeoutOption:"opt_pay_l07",options:[{id:"opt_call_police_l07",text:"（当场拨号）110 吗，有人以报案相要挟，向我索要二十万。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06",outcome:"「以报案相要挟索要二十万」——这句话说完，她的脸白了一层。敲诈勒索四个字，是法律词。"},{id:"opt_lawyer",text:"（拨沈骊的电话，开免提放在桌上）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-10},next:"n_06",outcome:"沈骊的免提一开，她的音量自动降了三格。有人开始录音，就有人开始收敛。"},{id:"opt_pay_l07",text:"（打开转账页面）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06",outcome:"转账密码输到一半，你的拇指停了。页面弹出来：请再次确认金额 ¥200,000.00。"},{id:"opt_threaten_l07",text:"你敢报，我就告你诬告。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_06",outcome:"「告我诬告？」她笑了，「那你先证明你没碰我。」——战场被她拖进了泥地。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l07_ex",emotion:"waver",text:"我不是那个意思……我就是，这三年我什么都没落着。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"她的声音软下来了。你想起她生病那年，是你请了半个月假。",timer:23,timeoutOption:"opt_delete_l07",options:[{id:"opt_keep_record",text:"我理解。但刚才那句我已经录下来了，这个改不了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08",outcome:"「改不了」三个字落地，她的肩膀垮了半寸。录音在谁手里，谁就拿着牌。"},{id:"opt_empathy",text:"三年我也在。分开是两个人的事，不是谁欠谁。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:5,opinion:25,composure:5,risk:-5},next:"n_08",outcome:"「两个人的事」——她沉默了。三秒。然后说：少二十万，就当买断。"},{id:"opt_delete_l07",text:"（心软了，把刚才的录音删掉）",tag:"DESTROY_EVIDENCE",aggression:0,initiative:0,effects:{evidence:-30,opinion:5,composure:-5,risk:25,addFlags:["G_NEG_DESTROYED_EVIDENCE","L07_F_BEHAVIOR"]},next:"n_08",outcome:"删除确认框弹出来，你的指尖悬着。三秒后，它消失了——连同你最后一张牌。"},{id:"opt_mock_l07",text:"什么都没落着？这三年房租谁付的。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:10},next:"n_08",outcome:"「房租谁付的」——这句话让她的眼泪立刻下来了。要钱的谈判，变成了互相清算。"},{id:"opt_ally_l07",text:"（拨沈骊的电话，放在桌上开免提）",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08",outcome:"沈骊的声音从桌上传来：您好，我是他的代理律师。她的手指，从拨号键上移开了。"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l07_ex",emotion:"cold",text:"（十分钟后，手机震了。是她发来的语音）你要是不给，我明天就去。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"语音三秒，你听了四遍。窗外天已经黑了。",timer:23,timeoutOption:"opt_argue_l07b",options:[{id:"opt_save_all",text:"（截图、录屏、云备份。一条都不删）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10",outcome:"云备份的进度条走完。你把手机锁屏——这一次，东西丢不了了。"},{id:"opt_reply_carefully",text:"（回一条文字：我拒绝支付。你有任何主张，请走法律程序）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_10",outcome:"「请走法律程序」八个字发出去，像一块石头进了深井。她那边，显示「正在输入」很久。"},{id:"opt_block",text:"（拉黑，删除所有聊天记录）",tag:"DESTROY_EVIDENCE",aggression:1,initiative:0,effects:{evidence:-30,opinion:-5,composure:5,risk:25,addFlags:["G_NEG_DESTROYED_EVIDENCE"]},next:"n_10",outcome:"拉黑键按下去的瞬间，聊天记录开始滚动删除。你删掉的是她，也是证据。"},{id:"opt_argue_l07b",text:"（打回去，对骂了四十分钟）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_10",outcome:"四十分钟骂战结束，你嗓子哑了，她截图满了。谁也没赢，素材都归了她。"},{id:"opt_breath_l07",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"你把手机扣在桌上，盯着天花板。怒气像退潮，退到一半，卡住了。"}],impulsePool:[{id:"imp_curse_l07",text:"你他妈就是想讹钱。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_10"},{id:"imp_grab_l07",text:"（冲过去抢她的手机）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊把材料翻了一遍，抬头。

「我先说清楚一件事。」
「真正的受害者，不会先开价。」
「她要是去报案，警察会依法受理、依法调查，那是她的权利，也是应该的。」
「但她刚才做的不是报案。她是拿报案当价码——」
「这个在法律上有名字，叫敲诈勒索。」

她把那段语音又放了一遍。
「二十万。这个数字是她自己说的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊合上材料夹：「现在你说，怎么办。」",timer:20,timeoutOption:"opt_drop",options:[{id:"opt_full_legal",text:"按敲诈勒索报案，同时发律师函。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12",outcome:"「报案加律师函」——沈骊在电话里说：好。这个字她咬得很重。"},{id:"opt_lawyer_letter",text:"先发律师函，看她什么反应。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:20,composure:5,risk:-10},next:"n_12",outcome:"律师函的 EMS 单号发过去。已读，不回。第二天，她的朋友圈清空了。"},{id:"opt_drop",text:"算了吧。毕竟三年。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-5,risk:20},next:"n_12",outcome:"「算了」说出口的那一刻，她发来一个红包表情：还是你懂事。"},{id:"opt_revenge",text:"把那段语音发到朋友圈，让大家都看看。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,composure:5,risk:25},next:"n_12",outcome:"发出去三分钟后你删了。但截图已经飞了——伤人一千，自损八百，还要留案底。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`走出律所已经十点多。
你翻到相册最底下，三年前那张，两个人在山顶，风把她头发吹到你脸上。

你没删。
沈骊说过：一条都不要删。`,next:"__END__"}],va=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你抢了她的手机",script:`咖啡馆有监控，两个服务员看着。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L07_F"}],hf={id:aa,title:la,act:ua,initState:pa,cast:da,entryNode:_a,lawyerCard:fa,satireTargets:ga,nodes:ma,endings:va},ha=Object.freeze(Object.defineProperty({__proto__:null,act:ua,cast:da,default:hf,endings:va,entryNode:_a,id:aa,initState:pa,lawyerCard:fa,nodes:ma,satireTargets:ga,title:la},Symbol.toStringTag,{value:"Module"})),xa="L08",ka="第08关 · 孩子不是你的",ya=2,La={evidence:25,opinion:40,composure:40,risk:25},Ta=["hero","npc_l08_wife","npc_l08_mother","npc_l08_child","shen_li"],ba="n_01",Aa="card_law_L08",wa=["T1","T3"],Oa=[{id:"n_01",type:"cutscene",pressure:1,script:`念念三岁体检，血型 AB。
你 O 型，她妈妈 O 型。
护士说了句「这个不太可能啊」，然后马上改口说仪器可能有误。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`你没跟任何人说。
第二天请了半天假，拿着念念的头发去了一家机构。

十四天后，报告到了。
你在楼下车里坐着，拆了三次才拆开。`,next:"n_03"},{id:"n_03",type:"dialogue",pressure:2,speaker:"hero",emotion:"cold",text:"（排除亲子关系。三个字，加粗。）",next:"n_04"},{id:"n_04",type:"choice",pressure:2,prompt:"楼上厨房的灯亮着。念念今天上小班，回来会跑到门口。",timer:21,timeoutOption:"opt_confront_now",options:[{id:"opt_keep_calm",text:"（把报告收进包里。先约律师，什么都不说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_05",outcome:"报告在包里，一条折痕都没有。你拨通沈骊电话的时候，声音平得吓自己一跳。"},{id:"opt_second_test",text:"（再做一次，换一家有司法资质的机构）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:-5,risk:-5},next:"n_05",outcome:"第二家机构的采样棉签封进试管。司法资质四个字，你特意圈了——这次是给法庭用的。"},{id:"opt_confront_now",text:"（上楼，把报告摔在餐桌上）这是什么？",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-10,opinion:-15,composure:-20,risk:15},next:"n_05",outcome:"报告拍在桌上的脆响，把厨房里的她引了出来。三秒沉默后，她先哭了——哭声比解释先到。"},{id:"opt_denial",text:"（把报告撕了。就当没看见）",tag:"DESTROY_EVIDENCE",aggression:0,initiative:0,effects:{evidence:-30,composure:-10,risk:20,addFlags:["G_NEG_DESTROYED_EVIDENCE","L08_F_BEHAVIOR"]},next:"n_05",outcome:"碎纸机的声音持续了四秒。这四秒里，你三年的人生变成了纸屑。你按住了它的电源。"}],impulsePool:[]},{id:"n_05",type:"dialogue",pressure:3,speaker:"npc_l08_wife",emotion:"furious",text:"你背着我去做鉴定？陈屿，你还是不是人。",next:"n_06"},{id:"n_06",type:"choice",pressure:3,prompt:"她的手在抖。但她没有问「结果是什么」。",timer:20,timeoutOption:"opt_apologize_l08",options:[{id:"opt_reframe_l08",text:"做鉴定是我不对。但报告上写的东西，和我不对，是两件事。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_07",outcome:"「两件事」——她的嘴张了张，没接上。这三年她赢你，靠的都是把两件事说成一件。"},{id:"opt_quiet_l08",text:"（不接话，把报告推过去）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:20,opinion:15,risk:-10},next:"n_07",outcome:"报告推过去的动作很轻。她看了一眼标题，手就没再动。"},{id:"opt_explode",text:"我不是人？那你告诉我孩子他爸是谁。",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-10,opinion:-20,composure:-20,risk:10},next:"n_07",outcome:"「孩子他爸是谁」——这句话出口，屋里死一样静。丈母娘从沙发上站了起来。"},{id:"opt_apologize_l08",text:"对不起……是我多心了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-10,risk:20},next:"n_07",outcome:"「对不起」说出口的瞬间，她挺直了背：你看，是你自己心虚。"}],impulsePool:[]},{id:"n_07",type:"dialogue",pressure:3,speaker:"npc_l08_mother",emotion:"dismissive",text:"多大点事。男人心眼这么小，日子还过不过了。",next:"n_08"},{id:"n_08",type:"choice",pressure:3,prompt:"她坐在沙发上没起来，遥控器还捏在手里。",timer:23,timeoutOption:"opt_retreat_l08",options:[{id:"opt_facts_only",text:"阿姨，这事不看心眼大小。报告在这儿，您可以看。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_09",outcome:"「报告在这儿，您可以看」——丈母娘没接。她盯着报告的塑封边，像盯着一枚钉子。"},{id:"opt_procedural_l08",text:"后面的事我会走法律程序。今天不吵。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:10,risk:-10},next:"n_09",outcome:"「走法律程序」五个字让屋子静了。丈母娘的声音低下来：真要到那一步？"},{id:"opt_argue_l08",text:"心眼小？您女儿干的事，您问过没有？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:15},next:"n_09",outcome:"「您问过没有」——丈母娘的脸涨红了：我不问她问谁！我女儿我能不向着她？"},{id:"opt_retreat_l08",text:"（起身回房间，关上门）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_09",outcome:"门关上的声音在身后。门外，哭声和指责混在一起，一句也听不清——也不想听清。"},{id:"opt_ally_l08",text:"（下楼拨号）沈律师，我这儿出事了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_09",outcome:"沈骊听了四十秒：什么都别说。带孩子的出生记录、你的鉴定书，明早我都要。"}],impulsePool:[{id:"imp_curse_l08",text:"你们一家子都知道，是不是。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_09"}]},{id:"n_09",type:"dialogue",pressure:4,speaker:"npc_l08_child",emotion:"happy",text:"（从房间里跑出来，举着手）爸爸抱！",next:"n_10"},{id:"n_10",type:"choice",pressure:4,prompt:"她今天在幼儿园得了一朵小红花，贴在手背上。举着手跑过来给你看。",timer:21,timeoutOption:"opt_step_back",options:[{id:"opt_hold_kid",text:"（蹲下来，把她抱起来）爸爸在。",tag:"OPTIMAL",aggression:0,initiative:2,effects:{evidence:5,opinion:30,composure:20,risk:-10},next:"n_11",outcome:"女儿趴在你肩上，小手抓着你的领子。她什么都不懂，她只知道爸爸在。"},{id:"opt_take_photo",text:"（抱起来，顺手拍了段视频存着）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:10,composure:5,risk:-5},next:"n_11",outcome:"视频里，女儿笑着喊爸爸。你按了停止——这条视频，将来要在法庭上放的。"},{id:"opt_step_back",text:"（僵在那儿，手没抬起来）",tag:"TRAP",aggression:0,initiative:0,effects:{opinion:-25,composure:-20,risk:10},next:"n_11",outcome:"你的手抬到一半，停在空气里。女儿的眼睛在问：爸爸为什么不抱我。"},{id:"opt_leave_room",text:"（转身走开）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-10,opinion:-25,composure:-15,risk:10},next:"n_11",outcome:"你转身的瞬间，女儿的哭声追了出来。这一步走出去，再回头就难了。"},{id:"opt_breath_l08",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_10",oncePerNode:!0,outcome:"儿童房的贴纸在夜光里发着微光。你数着呼吸，把「为什么是我」咽了回去。"}],impulsePool:[{id:"imp_shout_l08",text:"别叫我爸爸！",unlockBelow:30,tag:"TRAP",aggression:3,initiative:0,effects:{opinion:-30,composure:-20,risk:20},next:"n_11"},{id:"imp_shove_l08",text:"（推开挡在门口的妻子）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_11",type:"cutscene",pressure:2,script:`沈骊把两份报告并排放好，看了很久。

「三件事。」她说。
「第一，鉴定要有司法资质的机构重做一次，程序上才站得住。」
「第二，你这三年支出的抚养费，可以起诉返还。这是有法律依据的。」
「第三——」

她停了一下，把老花镜摘下来。

「第三件事跟法律没关系。那孩子三岁，她什么都不知道。
　你怎么处理她妈是一回事，你怎么跟她告别是另一回事。
　别把这两件事混在一起。」`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"窗外天黑了。你手机屏保还是念念上个月拍的，糊得看不清脸。",timer:19,timeoutOption:"opt_stay",options:[{id:"opt_full_claim",text:"离婚。抚养费返还诉讼一起走，三年的钱一分不少。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:5,risk:-15},next:"n_13",outcome:"「一分不少」四个字，沈骊在电话里重复了一遍：好，我们一样一样来。"},{id:"opt_divorce_only",text:"离婚就行。钱算了。",tag:"NEUTRAL",aggression:0,initiative:2,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_13",outcome:"「钱算了」——沈骊沉默了两秒：你确定？三年的支出，单据我都留着。"},{id:"opt_stay",text:"为了孩子……先不离吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_13",outcome:"「为了孩子」——这五个字说出口，你在镜子里看见了自己：一夜老了五岁。"},{id:"opt_revenge_l08",text:"我要让所有人都知道她干了什么。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:25},next:"n_13",outcome:"编辑框里的文字删了又写。发送键上方，沈骊的头像在闪——你先接了电话。"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`凌晨一点，你站在儿童房门口。
念念睡成一个大字，小红花掉在枕头边上。

你把被角掖好，退出去，把门带上。

那三年是真的。这一点，报告上没写。`,next:"__END__"}],Pa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口那一推",script:`你推开挡在门口的她。她撞到门框，额角青了一块。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L08_F"}],xf={id:xa,title:ka,act:ya,initState:La,cast:Ta,entryNode:ba,lawyerCard:Aa,satireTargets:wa,nodes:Oa,endings:Pa},Ra=Object.freeze(Object.defineProperty({__proto__:null,act:ya,cast:Ta,default:xf,endings:Pa,entryNode:ba,id:xa,initState:La,lawyerCard:Aa,nodes:Oa,satireTargets:wa,title:ka},Symbol.toStringTag,{value:"Module"})),Sa="L09",Ea="第09关 · 冷静期",Ia=2,Ca={evidence:40,opinion:45,composure:42,risk:35},$a=["hero","npc_l09_wife","npc_l09_cousin","shen_li"],Ma="n_01",Na="card_law_L09",Fa=["T2","T4"],Da=[{id:"n_01",type:"cutscene",pressure:1,script:`民政局。离婚登记申请交上去了，三十天冷静期。
工作人员说：三十天后你们再一起来一趟。

出门的时候她说：这三十天，咱们都别为难对方。
你说好。`,next:"n_02"},{id:"n_02",type:"cutscene",pressure:2,script:`第九天，你在 App 上查房贷余额，顺手翻了下联名账户。

八十二万，只剩两万四。
七笔转账，分七天，每笔不到十万。`,next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"最早那一笔的时间是——你们从民政局出来的当天下午。",timer:19,timeoutOption:"opt_ask_her",options:[{id:"opt_fix_evidence",text:"（去银行打全部流水，柜台盖章。截图另存一份）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04",outcome:"柜台的章盖下来的时候，你数了数：流水 47 页。纸比人有记性。"},{id:"opt_call_lawyer_l09",text:"（拍下来，发给沈骊）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-5},next:"n_04",outcome:"照片发过去，沈骊十秒回复：先别质问她。明天上午十点，法院门口见。"},{id:"opt_ask_her",text:"（直接问她：钱呢）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-15,opinion:-5,composure:-10,risk:15},next:"n_04",outcome:"「钱呢」两个字发出去。她回得很快：家里急用。四个字，没有一个能查证的。"},{id:"opt_transfer_back",text:"（把剩下的两万四也转到自己名下）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-15,composure:5,risk:20,addFlags:["L09_F_BEHAVIOR"]},next:"n_04",outcome:"两万四转回你名下的瞬间，她的电话进来了。你没接——这笔转账，会成为呈堂证供。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l09_wife",emotion:"calm",text:"我爸住院要用钱。这个你也要管？",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"她爸上个月刚体检完，报告你还帮着看过。",timer:19,timeoutOption:"opt_believe",options:[{id:"opt_preservation",text:"（当天向法院申请财产保全，提交流水和登记回执）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_06",outcome:"保全申请的回执盖着蓝章。从这一刻起，那八十万在哪儿，法院说了算。"},{id:"opt_request_proof",text:"住院记录和缴费单，给我看一下。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:25,opinion:20,risk:-5},next:"n_06",outcome:"「住院记录给我看」——她沉默了。半小时后发来一张模糊的缴费单，日期是去年的。"},{id:"opt_believe",text:"行，那你先用着。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:5,risk:25},next:"n_06",outcome:"「先用着」发出去，她的头像亮了又暗。你看着那串「已收款」，胃里发沉。"},{id:"opt_argue_l09",text:"你爸生病要八十万？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_06",outcome:"「你爸生病要八十万？」——她反手一个红包截图：给你看我爸的病危通知。日期，是P过的。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l09_wife",emotion:"flat",text:"（递过来一张纸）对了，这个也得算共同债务。我表哥的，四十万。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"欠条落款是去年三月。你想了很久，那个月你们在还房贷，一分闲钱没有。",timer:23,timeoutOption:"opt_sign_l09",options:[{id:"opt_challenge_debt",text:"这笔我不认。要认，请出借人到庭，说清楚钱怎么给的。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_08",outcome:"「请出借人到庭」——她的表哥从此失联。法庭传票寄到老家，签收人是空的。"},{id:"opt_check_flow",text:"（申请法院调取她表哥同期的银行流水）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-10},next:"n_08",outcome:"调查令申请交上去，沈骊说：这张纸，比一百句争辩都硬。"},{id:"opt_sign_l09",text:"（她说签个字好办手续，你签了）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,composure:5,risk:25},next:"n_08",outcome:"签字的时候你瞄到一行小字：债务确认。笔尖顿了半秒——还是签了。"},{id:"opt_yell_l09",text:"这就是伪造！",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_08",outcome:"「伪造」两个字喊出来，调解员皱了眉：请你注意情绪。对面，她低头抹泪。"},{id:"opt_ally_l09",text:"（拨号）沈律师，账户被转空了，我该先做什么。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08",outcome:"沈骊：三步。保全、流水、别见面。你把这三行字，设成了屏保。"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:4,speaker:"npc_l09_wife",emotion:"cold",text:"都要离了，你还查我。有意思吗。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"还剩十八天。她把行李箱推到了玄关。",timer:21,timeoutOption:"opt_beg_l09",options:[{id:"opt_procedural_l09",text:"有意思。这不是查你，是把账算清楚。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:20,composure:10,risk:-10},next:"n_10",outcome:"「把账算清楚」——这句话让调解室安静下来。她抬起头：你是早有准备。"},{id:"opt_silent_l09",text:"（不回，继续整理材料）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:25,opinion:10,composure:-5,risk:-5},next:"n_10",outcome:"你没回消息，继续整理材料。凌晨一点，材料的边角比你的情绪整齐。"},{id:"opt_beg_l09",text:"我们能不能好聚好散？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10",outcome:"「好聚好散」——她回了：散可以，好就不必了。后面跟着一个转账请求。"},{id:"opt_expose",text:"（把转账记录发到家族群）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:25},next:"n_10",outcome:"家族群炸了。有人骂她，也有人问你：家丑外扬，你还是不是男人。"},{id:"opt_breath_l09",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"深夜的厨房只有冰箱在响。你数着呼吸，把「那是我的钱」咽了回去。"}],impulsePool:[{id:"imp_curse_l09",text:"你早就算计好了是不是。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_10"},{id:"imp_shove_l09",text:"（拦住她，抢那个行李箱）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`第十四天，保全裁定送达。
剩余账户、一套房产、一辆车，全部冻结。

她表哥的银行流水也调出来了：去年三月，那个账户的余额是一千两百块。
四十万从来没有出现过。

沈骊把两页纸并排放着，说了句：
「虚构债务这条，比转移财产严重得多。这个她自己应该清楚。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"对方律师打来电话，说想谈谈。",timer:19,timeoutOption:"opt_settle_l09",options:[{id:"opt_full_l09",text:"保全维持。虚假债务另案主张，材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-15},next:"n_12",outcome:"「保全维持，虚假债务另案主张」——沈骊念完你发的话，回了两个字：可以。"},{id:"opt_settle_l09",text:"（各让一步，把钱分清楚就行）",tag:"NEUTRAL",aggression:0,initiative:2,effects:{evidence:5,opinion:15,composure:5,risk:-5},next:"n_12",outcome:"「各让一步」——调解笔录签得很快。快到你在回家路上才想起：让的那一步，是二十万。"},{id:"opt_drop_l09",text:"算了。钱没了就没了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12",outcome:"「钱没了就没了」——这条消息发出去，你删了聊天框。删的时候，手在抖。"},{id:"opt_gloat",text:"（把裁定书拍照发给她）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:5,risk:20},next:"n_12",outcome:"裁定书照片发出去，配了个「微笑」。三分钟后你撤回了——赢了官司，输了体面，不值。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`第三十天，民政局。
两个人隔着一个位置坐着，谁也没说话。

出来的时候下雨了。她往左，你往右。

她那句「这三十天，咱们都别为难对方」——
你后来想了很久。她说的是真心话。
她只是没打算把「为难」这两个字算在自己头上。`,next:"__END__"}],Ha=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 玄关那一下",script:`抢行李箱的时候她摔在鞋柜上，手腕骨裂。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L09_F"}],kf={id:Sa,title:Ea,act:Ia,initState:Ca,cast:$a,entryNode:Ma,lawyerCard:Na,satireTargets:Fa,nodes:Da,endings:Ha},Ba=Object.freeze(Object.defineProperty({__proto__:null,act:Ia,cast:$a,default:kf,endings:Ha,entryNode:Ma,id:Sa,initState:Ca,lawyerCard:Na,nodes:Da,satireTargets:Fa,title:Ea},Symbol.toStringTag,{value:"Module"})),Ga="L10",Va="第10关 · 二十米",ja=2,Ua={evidence:30,opinion:35,composure:38,risk:45},Ya=["hero","npc_l10_exwife","npc_l10_child","npc_l10_teacher","shen_li"],Ka="n_01",qa="card_law_L10",Wa=["T1","T2"],za=[{id:"n_01",type:"cutscene",pressure:2,script:`抚养费返还的判决生效了。执行立案的第三天，
法院的人把另一份裁定书送到了公司前台。

人身安全保护令。
禁止实施家庭暴力。禁止骚扰、跟踪、接触申请人及其相关近亲属。
禁止在申请人及其女儿的住所、学校二百米范围内活动。

你不是念念的生父，这一点法律上已经写死了。
你争的是探视——三年，你想再见她。

有效期六个月。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"hero",emotion:"cold",text:"（申请书写的是：长期恐吓，多次推搡。落款上周三。）",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"上周三你在南京出差。高铁票、酒店、打卡记录都在。",timer:20,timeoutOption:"opt_call_her",options:[{id:"opt_comply_and_appeal",text:"（严格遵守。同时当天递交复议申请，附行程材料）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"复议申请的回执编号发给了沈骊。遵守二十米——但每一个字都在准备翻案。"},{id:"opt_call_lawyer_l10",text:"（先给沈骊打电话，一个字不多说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:10,composure:10,risk:-10},next:"n_04",outcome:"沈骊听完只说：从现在起，你说的每一句话都可能是证据。少说。"},{id:"opt_call_her",text:"（打电话质问她）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-10,risk:15},next:"n_04",outcome:"电话响了两声被挂断。第三声，是她律师接的：请勿再联系当事人。"},{id:"opt_ignore_order",text:"（不管这个，照常去接孩子）",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-25,opinion:-20,risk:25,addFlags:["L10_VIOLATED"]},next:"n_04",outcome:"你还是去了。五十米外，警灯亮着——这一次，解释权不在你手里。"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:3,script:`周四下午四点二十。
你把车停在幼儿园斜对面，隔着两条车道，大概二十米。

放学铃响了。念念背着小书包出来，站在门口找人。

然后她看见你了。`,next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"她举起手，往马路这边跑过来。老师在后面喊她的名字。",timer:21,timeoutOption:"opt_hug_child",options:[{id:"opt_walk_away",text:"（转身。走到街角，站住，看着老师把她牵回去）",tag:"OPTIMAL",aggression:0,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:-10,risk:-10},next:"n_06",outcome:"转身的那七步你数得很清楚。街角的墙上贴着小广告，你盯着它看了很久。"},{id:"opt_call_teacher",text:"（退到更远，打电话给老师说明情况）",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:-5,risk:-10},next:"n_06",outcome:"电话里老师的声音很客气：明白，那……以后让她妈妈来接吧。挂断后，门口空荡荡的。"},{id:"opt_wave",text:"（远远地挥了挥手）",tag:"NEUTRAL",aggression:0,initiative:1,effects:{evidence:-10,composure:-5,risk:15},next:"n_06",outcome:"女儿看见了，也举起小手挥了挥。老师牵着她进了校门——她回头了三次。"},{id:"opt_hug_child",text:"（蹲下来，张开手）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-25,opinion:-15,composure:10,risk:20,addFlags:["L10_VIOLATED","L10_F_BEHAVIOR"]},next:"n_06",outcome:"你蹲下来张开手，女儿跑过来的瞬间，校门口有人举起了手机。"},{id:"opt_ally_l10",text:"（拨号）沈律师，法院送来一份保护令。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06",outcome:"沈骊：三件事——不违反、不接触、留存她违规的证据。保护好自己，才能保护探视权。"}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:2,script:`沈骊的办公室。她听完，把笔放下了。

「我先说一件事，说完再谈你的案子。」

「人身安全保护令是个好东西。我办过的案子里，有女人靠它活下来——
　真的，字面意思的活下来。」

「正因为这样，拿它来抢孩子的人，我最恨。」
「她们每用一次，下一个真需要它的人，就难一分。
　法官会多犹豫一秒，材料会多要一份，签字会多想一天。
　那一秒、那一份、那一天，是从别人命里扣出来的。」

她把复议申请书推过来。

「所以这个我们要打。不光为你。」`,next:"n_07"},{id:"n_07",type:"choice",pressure:2,prompt:"沈骊：「复议要在收到裁定后五日内提。今天第三天。」",timer:20,timeoutOption:"opt_wait_l10",options:[{id:"opt_gather_evidence",text:"（调小区监控、通话记录，找当晚在场的邻居）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-15},next:"n_08",outcome:"小区监控的申请函打印了三份。保安看了看你，又看了看那份盖着章的纸。"},{id:"opt_apply_investigation",text:"（申请法院调查令，调取她申请书里那几天的记录）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_08",outcome:"调查令的申请里写着她的申请书日期。那几天——你在南京。高铁票还留着。"},{id:"opt_counter_accuse",text:"（那我也去申请一个，告她家暴）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,composure:5,risk:20},next:"n_08",outcome:"「我也告她家暴」——沈骊按住了你：以谎对谎，法官只会各打五十大板。"},{id:"opt_wait_l10",text:"（等开庭再说吧）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_08",outcome:"「等开庭」——等待的日子里，她的消息一条没来。二十米，变成了两千公里。"}],impulsePool:[]},{id:"n_08",type:"dialogue",pressure:3,speaker:"npc_l10_exwife",emotion:"provoke",text:"（微信）念念今天问你去哪了。我说爸爸不要你了。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"凌晨一点十七。这是这周第九条。",timer:21,timeoutOption:"opt_argue_l10",options:[{id:"opt_no_reply",text:"（截图，存证，不回）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:-5,risk:-10},next:"n_10",outcome:"截图，存证，不回。对话框安静得像一口井——井底是你留着的一切。"},{id:"opt_formal_reply",text:"（回一条：有事请通过律师联系。然后截图）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_10",outcome:"「有事请通过律师联系」发出后，她回了个「呵呵」。截图，存证，关闭。"},{id:"opt_argue_l10",text:"（回过去，吵到三点）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-15,composure:-15,risk:15},next:"n_10",outcome:"吵到凌晨三点，最后一个字是「行」。你赢了嘴仗，输了一觉——明天还要上班。"},{id:"opt_go_there",text:"（穿上外套，开车过去）",tag:"TRAP",aggression:3,initiative:0,effects:{evidence:-25,opinion:-15,composure:-5,risk:25,addFlags:["L10_VIOLATED"]},next:"n_10",outcome:"车开到一半，你在路边停下了。挡风玻璃外是她的小区——离保护令说的距离，还差得很远。你调了头。"},{id:"opt_breath_l10",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"夜里的车内很静。你把额头抵在方向盘上，数了十次呼吸，才点火。"}],impulsePool:[{id:"imp_curse_l10",text:"你他妈跟一个三岁的孩子说这种话？",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:20},next:"n_10"},{id:"imp_break_l10",text:"（砸开她家的门）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`复议听证。

申请书上写的三次「推搡」：
三月十一日晚——你在南京，高铁票、酒店入住、公司打卡。
四月二日晚——小区门口监控，你八点十二分离开，没有再回来。
四月十九日晚——通话记录显示，那一整晚你在跟客户开电话会，两小时四十分钟。

沈骊把三份材料按时间顺序放好，一句评论也没加。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"审判长问：「申请人对此有什么说明？」对面沉默了很久。",timer:21,timeoutOption:"opt_concede",options:[{id:"opt_present_all",text:"（把监控、通话记录、邻居证言一次性提交，不多说一个字）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12",outcome:"三份材料递交的顺序，是沈骊排的：监控、通话、证言。递完，你说：完毕。"},{id:"opt_calm_statement",text:"（平静陈述事实。不提她一句不是）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:10,risk:-10},next:"n_12",outcome:"你陈述了四分钟，没有提她一个字的不是。法官抬头看了你两次。"},{id:"opt_attack_l10",text:"（当庭指责她诬告）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_12",outcome:"「诬告」两个字出口，她的眼泪同步落下。法官敲了法槌——这一锤，一半敲在你身上。"},{id:"opt_concede",text:"（太累了。同意调解，探视权也不争了）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12",outcome:"「调解吧，探视权……算了」——律师笔录合上的声音很轻。轻得像你以后见她的次数。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`出法院的时候快五点了。

斜对面就是那家幼儿园。放学铃刚响过，门口空了。

沈骊在台阶下等你。
「二十米。」她说，「那天你退到二十米外，这件事我在庭上没提。」
「因为不需要提。」

她顿了一下。
「但你自己得记着。」`,next:"__END__"}],Xa=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那扇门",script:`凌晨两点，你砸开了那扇门。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L10_F"}],yf={id:Ga,title:Va,act:ja,initState:Ua,cast:Ya,entryNode:Ka,lawyerCard:qa,satireTargets:Wa,nodes:za,endings:Xa},Ja=Object.freeze(Object.defineProperty({__proto__:null,act:ja,cast:Ya,default:yf,endings:Xa,entryNode:Ka,id:Ga,initState:Ua,lawyerCard:qa,nodes:za,satireTargets:Wa,title:Va},Symbol.toStringTag,{value:"Module"})),Qa="L11",Za="第11关 · 面试第七问",el=3,tl={evidence:20,opinion:40,composure:45,risk:20},nl=["hero","npc_l11_hr","shen_li"],il="n_01",ol="card_law_L11",sl=["T3","T5"],rl=[{id:"n_01",type:"cutscene",pressure:1,script:`终面，第四十分钟。前六个问题答得都不错。
你上个月主动离的职，赔偿金撑到十一月。房贷每月一万四。

这是手上最后一个 offer。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"candid",text:"我直说吧。这个岗同分的话，我们优先女性。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"他说得很坦然，像在说食堂几点开饭。",timer:20,timeoutOption:"opt_accept_l11",options:[{id:"opt_record_l11",text:"（口袋里的手机按了录音）这个我理解，能再具体说说吗？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04",outcome:"「具体说说」——HR 的语速慢了下来，用词开始小心。你的拇指在口袋里轻轻按下了停止。"},{id:"opt_ask_written_l11",text:"如果最终没通过，能给一份书面反馈吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,risk:-5},next:"n_04",outcome:"「书面反馈」四个字让 HR 抬了下眉毛：这个……我们一般电话通知。你的手机在口袋里，亮着。"},{id:"opt_accept_l11",text:"我理解，这也是应该的。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:10,composure:-5,risk:20},next:"n_04",outcome:"「应该的」——这两个字换来一个礼貌的微笑。门关上之后，你的面试评分表上多了一行备注。"},{id:"opt_angry_l11",text:"这不就是歧视吗？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04",outcome:"「歧视」两个字出口，HR 的表情凝固了半秒：我不是这个意思。但她的手，已经放到了结束键上。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"official",text:"集团今年有多元化指标。这个我们也是执行。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"他把简历合上了，往桌子中间推了推。",timer:20,timeoutOption:"opt_beg_l11",options:[{id:"opt_ask_policy_l11",text:"指标是公开的吗？能给我看一下相关制度文件？",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06",outcome:"「制度文件」——HR 翻了翻文件夹：这个……内部资料。她说这话的时候，没有看你的眼睛。"},{id:"opt_neutral_l11",text:"明白了。那我按正常流程等结果。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:25,composure:5,risk:-5},next:"n_06",outcome:"「等结果」——HR 点点头，把你送到门口。电梯里你回放了录音：生育计划、婚否、年龄。一样都没少问。"},{id:"opt_beg_l11",text:"我下个月还有房贷……能不能通融一下？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15,risk:10},next:"n_06",outcome:"「房贷」两个字说出口，你看得到她眼里的同情——和结论。同情不改变结论，从来如此。"},{id:"opt_lecture_l11",text:"多元化不是这么搞的。",tag:"TRAP",aggression:2,initiative:1,effects:{opinion:-20,composure:-5,risk:15},next:"n_06",outcome:"你说完那句多元，屋里安静了。HR 笑了笑：我们今天到此为止。椅子还没坐热。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l11_hr",emotion:"cooling",text:"制度文件是内部的。你要是接受不了，我们也理解。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室的空调声突然很清楚。",timer:22,timeoutOption:"opt_thank_leave",options:[{id:"opt_confirm_record",text:"我把今天聊的整理一下发您邮箱，您确认下有没有出入。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08",outcome:"邮件发送成功的提示弹出来。从今天起，「谁说过什么」这件事，有了第三方存证。"},{id:"opt_thank_leave",text:"（正常道谢，起身离开）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:20,composure:5,risk:-5},next:"n_08",outcome:"道谢，起身，轻轻带上门。走廊里你的心跳了三下——录音在，那三个问题就在。"},{id:"opt_argue_l11b",text:"那我今天来面的是什么？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08",outcome:"「面的是什么」——她的声音冷了下来：请注意态度。你听见的却是：没词了。"},{id:"opt_give_up",text:"（当场说算了，不用等结果了）",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-20,opinion:-10,composure:-10,risk:15},next:"n_08",outcome:"「不用等了」——她愣了一下，随即释然：好的，祝您顺利。那份没有归档的录音，成了你一个人的秘密。"},{id:"opt_ally_l11",text:"（出会议室拨号）沈律师，我刚录了一段东西。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08",outcome:"沈骊听完录音，只说了四个字：先书面，后投诉。顺序不能乱。"}],impulsePool:[{id:"imp_curse_l11",text:"你们这叫指标？这叫明抢。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_flip_l11",text:"（一把掀翻会议桌）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:2,speaker:"npc_l11_hr",emotion:"official",text:"（三天后，邮件）感谢您的时间。经综合评估，暂不匹配。祝顺利。",next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"赔偿金还剩两个月。手机里那段录音四十一分钟。",timer:23,timeoutOption:"opt_swallow",options:[{id:"opt_labor_complaint",text:"（向劳动监察部门投诉，附录音和邮件）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_10",outcome:"劳动监察的受理短信弹出来，编号的后四位是 0073。手机屏幕上，它亮了很久。"},{id:"opt_request_reason",text:"（回信，要求书面说明未录用的具体原因）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_10",outcome:"「书面说明未录用原因」发送。二十四小时后，回信来了——措辞客气，一个字都没提那三个问题。"},{id:"opt_post_online_l11",text:"（把录音发到职场社区，@这家公司）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-20,composure:5,risk:25,addFlags:["L11_F_BEHAVIOR"]},next:"n_10",outcome:"帖子三小时冲到热榜。评论区骂公司的占一半，扒你简历占一半。第二天，那家公司发了声明：绝不姑息。你成了声明里的「某求职者」。"},{id:"opt_swallow",text:"（算了。接着投别家）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-10,risk:15},next:"n_10",outcome:"「接着投」——简历改了三版，投了十七家。每一次填「婚育状况」，笔都停一下。"},{id:"opt_breath_l11",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"写字楼的洗手间很静。你看着镜子里的自己，数了三次呼吸，把「凭什么」咽了回去。"}],impulsePool:[{id:"imp_flip_l11b",text:"（冲回那家公司，砸了前台）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`沈骊听完录音，倒回去又放了一遍第七分钟。

「『同分优先女性』——这句是他自己说的，说得很清楚。」
「后面那句『集团有多元化指标』更好，那是把个人行为说成公司政策。」

她合上笔记本。
「你要清楚一件事：真正的平权是把门槛拉平，不是换个人挡在门口。
　这两样长得像，但方向是反的。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「你要什么结果？出气，还是解决问题。」",timer:19,timeoutOption:"opt_drop_l11",options:[{id:"opt_full_l11",text:"投诉，同时保留起诉的权利。材料我都留着。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12",outcome:"「材料我都留着」——这句话发出去，对面沉默了一分钟，然后回：稍等，我们领导想约您谈谈。"},{id:"opt_complaint_only",text:"投诉就行，不想打官司。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:20,composure:5,risk:-10},next:"n_12",outcome:"投诉提交，页面显示「已受理」。你没打官司——但那三个问题，从此进了他们的整改清单。"},{id:"opt_drop_l11",text:"算了。这行就这么大，得罪不起。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12",outcome:"「得罪不起」——消息没发出去。三年后同行聚会，你听说他们还在问同样的问题。问的是别人。"},{id:"opt_revenge_l11",text:"把录音发给他们竞争对手。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_12",outcome:"录音发给了竞争对手的 HR 邮箱。三天后，对方回复：谢谢，但我们不参与同行事务。伤敌零，自耗一。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`投诉受理回执上编号很长。

两周后那家公司来了电话，语气客气了很多，说岗位还在，问你有没有兴趣再聊聊。

你说谢谢，不用了。
挂了电话，你把回执拍照存进云盘，文件名写的是日期。`,next:"__END__"}],cl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你掀了桌子。笔记本电脑砸在他小腿上。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L11_F"}],Lf={id:Qa,title:Za,act:el,initState:tl,cast:nl,entryNode:il,lawyerCard:ol,satireTargets:sl,nodes:rl,endings:cl},al=Object.freeze(Object.defineProperty({__proto__:null,act:el,cast:nl,default:Lf,endings:cl,entryNode:il,id:Qa,initState:tl,lawyerCard:ol,nodes:rl,satireTargets:sl,title:Za},Symbol.toStringTag,{value:"Module"})),ll="L12",ul="第12关 · 署名顺序",pl=3,dl={evidence:45,opinion:42,composure:42,risk:25},_l=["hero","npc_l12_colleague","npc_l12_boss","zhou_you"],fl="n_01",gl="card_law_L12",ml=["T1","T3"],vl=[{id:"n_01",type:"cutscene",pressure:1,script:`项目做了十一个月。方案是你出的，架构是你搭的，上线那周你在公司睡了四天。
结项材料要报集团评奖。署名表发到群里，第一作者那一栏空着。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:2,speaker:"npc_l12_colleague",emotion:"earnest",text:"一作能不能给我？这个领域女性太少了，需要有人被看见。",next:"n_03"},{id:"n_03",type:"choice",pressure:2,prompt:"她是真心这么想的。这十一个月她也熬过三个通宵。",timer:19,timeoutOption:"opt_yield_l12",options:[{id:"opt_quantify",text:"咱们把各自做的部分列一下，按贡献排。我先列我的。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_04",outcome:"「我先列我的」——你打开笔记本的动作，让会议室安静了两度。白板上很快有了两列字。"},{id:"opt_email_it",text:"这个事我们邮件里说吧，抄送一下主管。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,risk:-10},next:"n_04",outcome:"「抄送主管」四个字出口，她的表情变了一下：至于吗？至于——邮件会留下来。"},{id:"opt_yield_l12",text:"行吧，给你。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:10,composure:-10,risk:20},next:"n_04",outcome:"「给你」两个字说出口，她愣了半秒，随即笑了：谢谢理解。评奖名单公示那天，你的名字在第二位。"},{id:"opt_refuse_flat",text:"凭什么？活是我干的。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_04",outcome:"「活是我干的」——会议室的温度降了五度。老板抬手：都少说两句。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l12_boss",emotion:"smooth",text:"小陈啊，格局大一点。一个署名而已，你以后机会多的是。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"主管说这话的时候没抬头。他年底也要报评优。",timer:21,timeoutOption:"opt_cave_l12",options:[{id:"opt_written_criteria",text:"行。那署名规则按哪条来？咱们把标准写下来，以后都照这个。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:5,risk:-10},next:"n_06",outcome:"「把标准写下来」——老板翻了翻评审办法，没找到对应条款。找不到条款，就只能现写。写，就要写清楚。"},{id:"opt_co_first",text:"共同一作，附一份分工说明。两个人的贡献都写清楚。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:10,risk:-10},next:"n_06",outcome:"「共同一作，附分工说明」——她看着这份方案看了很久。它不完美，但它把两个人都装进去了。"},{id:"opt_cave_l12",text:"……那就这样吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-15,risk:20},next:"n_06",outcome:"「就这样吧」——散会的时候没人说话。你知道她们签了字，她们知道你咽了话。"},{id:"opt_confront_boss",text:"格局？这十一个月您来过几次？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:20},next:"n_06",outcome:"「来过几次」——老板的脸沉了。会议室安静得能听见空调声。你赢了这一句，输了这场会。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l12_colleague",emotion:"hurt",text:"你这么坚持……是不是就是不想给女性机会。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"会议室门开着。外面工位上有人抬起了头。",timer:26,timeoutOption:"opt_defend_l12",options:[{id:"opt_refuse_frame_l12",text:"我不接这个说法。我们现在谈的是这个项目谁做了什么。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:10,risk:-10},next:"n_08",outcome:"「我不接这个说法」——你把话题从帽子拉回清单。她张了张嘴，开始翻自己的记录。"},{id:"opt_facts_l12",text:"（把 commit 记录和评审纪要投到屏幕上）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,risk:-10},next:"n_08",outcome:"commit 记录投上大屏：绿色的提交点连成一片。她负责的部分，是两段孤岛。屏幕不吵架，屏幕只显示。"},{id:"opt_defend_l12",text:"我什么时候不给女性机会了？你别乱扣帽子。",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-10,opinion:-20,composure:-15,risk:10},next:"n_08",outcome:"「乱扣帽子」——她的声音立刻高了八度：数据不会说谎！会议室的门被走廊的人听见了。"},{id:"opt_sarcasm_l12",text:"那我要是女的，这一作是不是就归我了。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-5,risk:15,addFlags:["L12_F_BEHAVIOR"]},next:"n_08",outcome:"「我要是女的」——这句话出口的瞬间你就知道错了。它出现在第二天的部门群截图里，配文断了一半。"},{id:"opt_ally_l12",text:"（拨号问一句）沈律师，署名这个事有没有说法。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08",outcome:"沈骊：署名没有硬法条，但有惯例和校规。先把事实清单做扎实，别在情绪上赢。"}],impulsePool:[{id:"imp_curse_l12",text:"少拿性别说事。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l12",text:"（一把把笔记本电脑摔在桌上）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:2,script:`周攸从工位上站起来，走到门口。

「我插一句。」她说，「我也是女的。」

「这个项目从立项我就在旁边看着。架构评审那两周，会议室灯天天亮到十一点，
　里面坐的是谁，这层楼的人都知道。」

她顿了一下，转向林悦。

「你要一作，可以争，按贡献争。」
「但你不能拿'女性需要被看见'这句话来争。」
「因为下一次真有女的被压了署名，别人会想起今天。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"屋里静了。主管的手指在桌上敲了两下，停住了。",timer:25,timeoutOption:"opt_press_advantage",options:[{id:"opt_formalize",text:"谢谢周攸。那我们把标准和分工都写进邮件，抄送评奖组。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:10,risk:-15},next:"n_10",outcome:"邮件发出，抄送评奖组。标题是《关于 XX 项目署名与分工的说明》。从今天起，这件事有编号了。"},{id:"opt_offer_second",text:"二作给你，分工说明我来写，写清楚你做了哪几块。",tag:"GOOD",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:5,risk:-10},next:"n_10",outcome:"「你做了哪几块」——分工说明写到第三条，她补了一句：数据库迁移，也算你吧。你写：算。"},{id:"opt_press_advantage",text:"（趁势追击）刚才那句话，你自己听听像不像样。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_10",outcome:"追击的话说到一半，周攸在桌子底下踢了你一下。你看见了老板皱起的眉——赢了道理，输了风度。"},{id:"opt_soft_now",text:"算了，都不容易，一作还是给她吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:20},next:"n_10",outcome:"「还是给她吧」——散会后周攸没说话。评奖公示那天，他请了你一顿饭。饭桌上谁都没提这件事。"},{id:"opt_breath_l12",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"茶水间的饮水机咕咚了一声。你数了三次呼吸，把「凭什么」放回了杯子里。"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`邮件发出去了，抄送七个人。
正文里是一张表：模块、负责人、起止时间、评审记录链接。

十一个月，一百四十三条记录，时间戳全在。

评奖组回了一句：材料清楚，按此执行。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"散会后林悦在茶水间等你。「刚才……对不起。」",timer:18,timeoutOption:"opt_cold_l12",options:[{id:"opt_move_on",text:"没事。下个项目你带，我给你写评审意见。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:15,risk:-10},next:"n_12",outcome:"「下个项目你带」——周攸愣了两秒：真的？真的。有些账，这么结比赢回来更划算。"},{id:"opt_neutral_l12b",text:"过去了。（点点头，走开）",tag:"GOOD",aggression:0,initiative:1,effects:{evidence:5,opinion:15,composure:20,risk:-5},next:"n_12",outcome:"「过去了」——两个字，一扇门。她松了口气，你也是。"},{id:"opt_cold_l12",text:"以后有事走邮件。",tag:"NEUTRAL",aggression:2,initiative:2,effects:{opinion:-15,composure:5,risk:10},next:"n_12",outcome:"「以后走邮件」——从此你们的对话都有了主题、抄送和落款。效率很高，温度很低。"},{id:"opt_gloat_l12",text:"记住今天。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-5,risk:15},next:"n_12",outcome:"「记住今天」——你说这话的时候看着她。她低下头。但周围的同事，看到的只是你在欺负人。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`评奖结果下来那天，署名表贴在楼道公告栏上。
第一作者一栏是你的名字，后面跟着一行小字：
「分工说明见附件」。

周攸路过看了一眼，说：「这行小字挺好。」
你说：「这行小字是你换来的。」`,next:"__END__"}],hl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 摔的那一下",script:`笔记本砸在桌上，屏幕裂了，碎片弹到她手背上。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L12_F"}],Tf={id:ll,title:ul,act:pl,initState:dl,cast:_l,entryNode:fl,lawyerCard:gl,satireTargets:ml,nodes:vl,endings:hl},xl=Object.freeze(Object.defineProperty({__proto__:null,act:pl,cast:_l,default:Tf,endings:hl,entryNode:fl,id:ll,initState:dl,lawyerCard:gl,nodes:vl,satireTargets:ml,title:ul},Symbol.toStringTag,{value:"Module"})),kl="L13",yl="第13关 · 团建那句玩笑",Ll=3,Tl={evidence:25,opinion:35,composure:36,risk:40},bl=["hero","npc_l13_hr","npc_l13_complainant","zhou_you","shen_li"],Al="n_01",wl="card_law_L13",Ol=["T1","T5"],Pl=[{id:"n_01",type:"cutscene",pressure:1,script:`三周前，部门团建，KTV 包厢。
十一个人，两箱啤酒，唱到十一点半。
那天晚上很吵，你只记得笑得挺开心。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l13_hr",emotion:"official",text:"有同事投诉你，在团建上有不当言论。涉及性骚扰。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"小会议室，摄像头对着门。她面前摊着一个本子，写了半页。",timer:21,timeoutOption:"opt_scramble_l13",options:[{id:"opt_ask_specific",text:"具体是哪句话？什么时间说的？请给我完整原话。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"「完整原话」——HR 翻文件的手停了：投诉里……没有写那么细。没有原话的指控，是一团雾。"},{id:"opt_ask_written_l13",text:"投诉是书面的吗？我能看到投诉材料吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:10,composure:10,risk:-10},next:"n_04",outcome:"「书面的吗」——她迟疑了一下：是邮件转述。转述。你把这两个字记了下来。"},{id:"opt_scramble_l13",text:"我说了什么？我……我想想，那天喝了点酒……",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-15,composure:-15,risk:10},next:"n_04",outcome:"你越回忆，细节越乱。HR 的笔在本子上划了三行——你亲手给雾加了水汽。"},{id:"opt_deny_all_l13",text:"我什么都没说过。",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-5,risk:15},next:"n_04",outcome:"「什么都没说过」——她合上本子：好的。但她眼神里的问号，变成了感叹号。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l13_hr",emotion:"evasive",text:"投诉人希望保密。你先自己想想，那天说过什么。",next:"n_05"},{id:"n_05",type:"choice",pressure:3,prompt:"「你先自己想想」——这句话把举证责任整个翻了过来。",timer:23,timeoutOption:"opt_self_search",options:[{id:"opt_refuse_burden",text:"我没法对着空气回忆。请给我具体指控，我逐条回应。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06",outcome:"「对着空气回忆」——这句话让 HR 停了笔。她承认了：具体内容，投诉人没有提供。"},{id:"opt_find_video",text:"那天有同事全程拍视频发朋友圈。原片能调，我建议先看原片。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_06",outcome:"「先看原片」——HR 说要请示。你听见了键盘声：她在给上级发消息。五分钟后：可以调。"},{id:"opt_self_search",text:"（努力回忆，把能想起来的都说了一遍）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:-15,risk:15},next:"n_06",outcome:"你说了十分钟，说到自己都乱了。散会时你的喉咙是干的——举证的负担，落在了你身上。"},{id:"opt_demand_name",text:"是谁投诉的？你让她出来当面对质。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:15},next:"n_06",outcome:"「当面对质」——HR 摇头：投诉人信息保密。你的拳头在桌子底下攥了一下。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l13_hr",emotion:"appease",text:"这样吧，你写个情况说明，态度诚恳点，这事就过去了。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她把一张空白 A4 推过来，笔帽已经拧开了。",timer:24,timeoutOption:"opt_write_apology",options:[{id:"opt_refuse_apology",text:"我可以写说明，但不写道歉。没查清之前，道歉就是认定。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-15},next:"n_08",outcome:"「道歉就是认定」——HR 拿笔的手悬在半空。这行字她没法写进纪要，但它留在了你这里。"},{id:"opt_ask_process_l13",text:"公司的投诉处理规程能给我一份吗？我按规程配合。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-10},next:"n_08",outcome:"「规程」——她打印了一份，三页。你当着她的面用手机拍了照：谢谢，我按规程来。"},{id:"opt_write_apology",text:"（拿起笔，写了一份道歉说明）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_APOLOGY_LETTER","L13_F_BEHAVIOR"]},next:"n_08",outcome:"道歉说明写到第二行，你的笔停了——「造成不适」四个字，从此有了你的签名。"},{id:"opt_walk_out_l13",text:"（把纸推回去，起身走人）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-20,composure:-5,risk:20},next:"n_08",outcome:"门摔上的声音在走廊里荡。第二天，纪要里多了一行：「拒绝配合，情绪激动」。那是他们的走廊，他们的纪要。"},{id:"opt_ally_l13",text:"（走廊拨号）沈律师，HR 让我写份说明。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08",outcome:"沈骊：写「情况说明」，不写「道歉信」。一字之差，天地之别。"}],impulsePool:[{id:"imp_curse_l13",text:"你们这叫调查？这叫定罪。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l13",text:"（把桌上的东西全扫到地上）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:3,script:`晚上周攸在楼下等你。她抱着电脑，站了很久的样子。

「我那天在场。」她说。
「但我真的记不清了。十一个人，那么吵。」

她抬起头。
「陈屿，我不想问，但我得问——你到底说没说过？」`,next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"她的手在电脑包带子上攥着。这个问题她想了三天。",timer:23,timeoutOption:"opt_hurt_l13",options:[{id:"opt_honest_l13",text:"我不知道。那天我喝了酒。所以我要看原片，不是要你信我。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_10",outcome:"「我要看原片」——会议室静了。这句话的诚实，让 HR 抬头看了你一眼：……我去申请。"},{id:"opt_ask_help_l13",text:"你能帮我一件事吗？帮我问问那天谁拍了视频。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_10",outcome:"她犹豫了一下：我尽量。三天后，她发来一个名字——拍视频的同事，愿意出原件。"},{id:"opt_hurt_l13",text:"连你也怀疑我。",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-15,opinion:-20,composure:-15,risk:10},next:"n_10",outcome:"「连你也怀疑我」——她往后退了半步：我不是怀疑……这半步，比怀疑更疼。"},{id:"opt_pressure_l13",text:"你是证人。你得帮我作证。",tag:"TRAP",aggression:3,initiative:2,effects:{evidence:-20,opinion:-20,composure:-5,risk:20},next:"n_10",outcome:"「你得帮我作证」——她低下头：我……那天我提前走了。朋友，也被你推远了半步。"},{id:"opt_breath_l13",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"楼梯间的声控灯灭了。你在黑暗里数了三次呼吸，灯又亮了——你想起了那句「先看原片」。"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`原片找到了。同事发朋友圈那条，四分十七秒，没剪。

02:31 —— 包厢里在玩接歌词的游戏。
02:33 —— 投诉人先起的头，说了那句话的前半句。
02:35 —— 你接了后半句，接得挺顺。
02:36 —— 满屋子笑。

笑得最大声的，是她。画面正中，笑到往后仰。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"HR 看完，把播放器暂停在 02:36。她没说话。",timer:22,timeoutOption:"opt_let_go_l13",options:[{id:"opt_written_conclusion",text:"麻烦出一份书面结论，写明调查结果。我要留档。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12",outcome:"书面结论的打印稿盖了章：「未查实」。两个字，你等了四十天。"},{id:"opt_process_fix",text:"另外我建议一件事：以后投诉受理，得有具体事实和时间。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:25,composure:5,risk:-10},next:"n_12",outcome:"「具体事实和时间」——HR 把这句记了下来，抬头：这个建议，我会往上提。第一次，规则因为你动了一格。"},{id:"opt_counter_l13",text:"我要反过来投诉她。诬告。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:20},next:"n_12",outcome:"「反诉诬告」——沈骊按住了你：查不实不等于诬告。这条线，一碰就输。"},{id:"opt_let_go_l13",text:"（松了口气）那这事就算过去了吧。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:10,risk:20},next:"n_12",outcome:"「算过去了」——HR 笑了笑。你也笑了笑。只有你知道，哪些东西没有过去。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`书面结论下来那天，周攸给你发了条消息，就三个字：

「对不起。」

你回：不用。你那天问我那句话，问得对。`,next:"__END__"}],Rl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 小会议室",script:`杯子摔了，笔记本飞到墙上。HR 的手背划破了。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L13_F"}],bf={id:kl,title:yl,act:Ll,initState:Tl,cast:bl,entryNode:Al,lawyerCard:wl,satireTargets:Ol,nodes:Pl,endings:Rl},Sl=Object.freeze(Object.defineProperty({__proto__:null,act:Ll,cast:bl,default:bf,endings:Rl,entryNode:Al,id:kl,initState:Tl,lawyerCard:wl,nodes:Pl,satireTargets:Ol,title:yl},Symbol.toStringTag,{value:"Module"})),El="L14",Il="第14关 · 匿名举报",Cl=3,$l={evidence:30,opinion:35,composure:34,risk:45},Ml=["hero","npc_l14_hr","npc_l14_director","zhou_you","shen_li"],Nl="n_01",Fl="card_law_L14",Dl=["T1","T5"],Hl=[{id:"n_01",type:"cutscene",pressure:2,script:`晋升公示第七天，最后一天。
名单贴出去六天了，没人有异议。明天就走流程。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l14_hr",emotion:"official",text:"今早收到一封匿名举报。指控你长期言语骚扰女同事。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"信是打印的，没有署名，没有日期，没有一件具体的事。",timer:22,timeoutOption:"opt_panic_l14",options:[{id:"opt_ask_content",text:"举报的具体内容是什么？时间、地点、当事人，我要逐条看到。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"「逐条看到」——总监把平板转过来：举报信只有一页，没有时间地点。一页纸，停了你全部的工作。"},{id:"opt_ask_rule_l14",text:"公司投诉受理规程是怎么规定的？匿名件能受理吗？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:10,risk:-10},next:"n_04",outcome:"「匿名件能受理吗」——总监翻开了员工手册，翻了很久。没有那一页。没有规定，就有空子。"},{id:"opt_panic_l14",text:"谁写的？是不是有人不想我升？",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-20,opinion:-15,composure:-15,risk:10},next:"n_04",outcome:"「不想我升」——这个念头说出口，总监的表情变了：现在不是猜动机的时候。但你看见他记了一笔。"},{id:"opt_selfdoubt_l14",text:"……会不会是我平时哪句话没注意？",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_04",outcome:"「哪句话没注意」——你开始复盘三个月的每一句话。当天夜里，你失眠到三点。雾，开始往你心里钻。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:4,speaker:"npc_l14_hr",emotion:"appease",text:"先停职配合调查吧。这样对你也好，省得大家议论。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"公示期停职，晋升自动作废。这一点她没说，你们都知道。",timer:24,timeoutOption:"opt_accept_suspension",options:[{id:"opt_demand_written",text:"停职可以。请出书面通知，写明系公司决定，与本人申请无关。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06",outcome:"书面通知打印出来，「公司决定」四个字盖着章。你签收、拍照、归档——停职期间的权利，白纸黑字。"},{id:"opt_refuse_suspension",text:"在查清之前停职，等于先定罪。我要求正常出勤配合调查。",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_06",outcome:"「先定罪」——总监沉了脸：这是保护性措施。你说：那就请写进通知里，「保护」两个字。"},{id:"opt_accept_suspension",text:"行吧。那我先回去等消息。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:-10,risk:25},next:"n_06",outcome:"「等消息」——工牌交出去的那一刻，前台小妹的眼神躲了一下。回家路上，你的工位已经被人清了桌面。"},{id:"opt_yell_l14",text:"凭一封匿名信就停我职？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_06",outcome:"「凭一封匿名信」——你的音量换来的是保安。声音越大，越像匿名信里写的那个人。"},{id:"opt_ally_l14",text:"（拨号）沈律师，他们要我先停职配合。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06",outcome:"沈骊：三个要求——书面通知、正常发薪、调查时限。少一个，都别签字。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:3,speaker:"npc_l14_hr",emotion:"stuck",text:"（笔停在纸上）这个……写成书面的，我得请示一下。",next:"n_07"},{id:"n_07",type:"choice",pressure:3,prompt:"她请示不下来。写了，公司就要为「凭匿名件停职」这件事签字。",timer:22,timeoutOption:"opt_wait_l14",options:[{id:"opt_email_summary",text:"（当场发邮件，把刚才的沟通复述一遍，抄送她和分管领导）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-15},next:"n_08",outcome:"邮件发出的提示音响起。抄送栏里，分管领导的名字排在第三位。从这一刻起，「谁说过什么」不再靠记忆。"},{id:"opt_union",text:"我申请工会和法务同时介入，全程留痕。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_08",outcome:"工会主席的回电很快：我们介入。四个字，第一次让你觉得「组织」不是个虚词。"},{id:"opt_ask_around",text:"（私下去问几个女同事，是不是她们写的）",tag:"TRAP",aggression:1,initiative:2,effects:{evidence:-25,opinion:-15,composure:-5,risk:25,addFlags:["L14_F_BEHAVIOR"]},next:"n_08",outcome:"你问了三个人。第三个人的眼神变了——从那以后，部门里的女同事路过你工位，都会快走两步。雾，是你自己撒的。"},{id:"opt_wait_l14",text:"（回工位等，什么也不做）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-10,risk:15},next:"n_08",outcome:"等待的第五天，OA 系统里你的权限被降级了。没人通知你——等，也是有代价的。"}],impulsePool:[{id:"imp_curse_l14",text:"这封信谁写的，我早晚知道。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_08"}]},{id:"n_08",type:"dialogue",pressure:3,speaker:"npc_l14_director",emotion:"smooth",text:"小陈，我给你个建议——主动申请调个岗，体面。硬扛对谁都不好。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"分管领导亲自来的。他手上端着咖啡，站着没坐。",timer:24,timeoutOption:"opt_transfer",options:[{id:"opt_hold_line",text:"我不申请。查清楚之前，我做的任何动作都会被当成默认。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-10},next:"n_10",outcome:"「任何动作都会被当成默认」——HR 总监看了你十秒：你想清楚了？想清楚了。这十秒，是这四十天里最安静的十秒。"},{id:"opt_ask_him_written",text:"这个建议，能麻烦您也写进邮件里吗？我按建议办。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_10",outcome:"「也写进邮件」——他笑了，是那种被将了一军的笑。邮件发送成功。他的建议，从此也是呈堂的。"},{id:"opt_transfer",text:"（想了想，还是提交了调岗申请）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:-10,risk:25},next:"n_10",outcome:"调岗申请提交的瞬间，OA 弹出确认框。你点了确定——从那天起，会议室里少了你的座位，也少了你的名字。"},{id:"opt_resign_l14",text:"（当场提了离职）",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-25,opinion:-15,composure:-5,risk:25},next:"n_10",outcome:"辞职信递出去的时候，总监没拦你。收拾工位只用了二十分钟——三年，原来只有二十分钟。"},{id:"opt_breath_l14",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"消防通道的门推开，天台的风很大。你数了三次呼吸，把「就这样吧」咽了回去。"}],impulsePool:[{id:"imp_shove_l14",text:"（一把推开挡在门口的他）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:2,script:`两周后，调查结论出来了。

举报信没有任何具体事实指向。调查组约谈了全组十四人，无一人证实。
发件邮箱是临时注册的，IP 指向公司内网访客网络。

结论一句话：投诉不成立。

沈骊看完，只说了一句：
「他们查了两周，最后查出来的其实是另一件事——
　凭这样一封信就能停一个人的职。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"HR 问：「那这个事，就到这儿了？」",timer:21,timeoutOption:"opt_end_it",options:[{id:"opt_fix_process_l14",text:"结论书面给我一份。另外，受理规程该改了——匿名件不能直接启动调查。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_12",outcome:"「匿名件不能直接启动调查」——新规程公示那天，你的名字在修订建议栏里。全公司都看见了。"},{id:"opt_written_only",text:"结论书面给我一份就行。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_12",outcome:"结论盖章：「未发现违纪事实」。一张纸，换了四十天。你把纸放进文件夹，和停职通知钉在一起。"},{id:"opt_hunt",text:"我要查是谁写的。公司必须给我一个说法。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-10,opinion:-25,risk:20},next:"n_12",outcome:"「查是谁写的」——你调了打印机记录、门禁记录。两周后你有了答案，也失去了整个部门的目光。真相和同事，你选了一个。"},{id:"opt_end_it",text:"到这儿吧。累了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:5,composure:-10,risk:20},next:"n_12",outcome:"「累了」——案子结了，你请了年假。海边的手机信号不好，正好。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`晋升补发了，日期倒签回原公示期。

新的受理规程挂在内网上，第三条加了一句：
「投诉须载明具体事实、时间及当事人，匿名件不予直接启动调查程序。」

周攸看到那条，截图发给你：「第三条。」
你回：「嗯。」`,next:"__END__"}],Bl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 门口",script:`你推开了他。他手里的咖啡洒了一身，人撞在门框上。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L14_F"}],Af={id:El,title:Il,act:Cl,initState:$l,cast:Ml,entryNode:Nl,lawyerCard:Fl,satireTargets:Dl,nodes:Hl,endings:Bl},Gl=Object.freeze(Object.defineProperty({__proto__:null,act:Cl,cast:Ml,default:Af,endings:Bl,entryNode:Nl,id:El,initState:$l,lawyerCard:Fl,nodes:Hl,satireTargets:Dl,title:Il},Symbol.toStringTag,{value:"Module"})),Vl="L15",jl="第15关 · 最后一张牌",Ul=3,Yl={evidence:40,opinion:40,composure:32,risk:50},Kl=["hero","npc_l15_broker","npc_l15_hr","shen_li"],ql="n_01",Wl="card_law_L15",zl=["T4"],Xl=[{id:"n_01",type:"cutscene",pressure:2,script:`裁员名单下来了，你在上面。
公司给的方案是 N。按法律该是 2N，差了十九万。

谈判第三轮，人事说：这已经是最好的了。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l15_broker",emotion:"friendly",text:"（前同事，在楼下咖啡厅）陈哥，我这儿有份材料。你要是不签，它就得交上去。",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"他把手机屏幕转过来一秒又收回去。你只看清了一个词：投诉。",timer:20,timeoutOption:"opt_beg_l15",options:[{id:"opt_record_l15",text:"（手机放桌上，屏幕朝上）什么材料？你把话说完整。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04",outcome:"手机屏幕朝上，红点在跳。他盯着那个红点看了三秒，端杯子的手换了一只。"},{id:"opt_ask_price_l15",text:"你想要什么？直接说数。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,risk:-5},next:"n_04",outcome:"「直接说数」——他沉默了。要挟这种事，最怕的就是被要求说清楚。说清楚，就成了证据。"},{id:"opt_beg_l15",text:"兄弟，咱们这么多年了，你别这样。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_04",outcome:"「这么多年」——他叹了口气：我也没办法，兄弟。叫兄弟的人，刀最稳。"},{id:"opt_rage_l15",text:"你他妈也是个东西。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-15,risk:15},next:"n_04",outcome:"你骂完的第三秒就后悔了。他举起手机：这句我录了。你亲手给他递了刀。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l15_broker",emotion:"cold",text:"八万。你签 N 走人，八万给我。这材料就烂在我手里。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"他说完喝了口咖啡。杯子放下的时候手很稳。",timer:22,timeoutOption:"opt_pay_l15",options:[{id:"opt_police_l15",text:"（当场报警）有人以举报相要挟，向我索要八万。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_06",outcome:"「以举报相要挟索要八万」——接警员的语速快了：您先别挂。他的脸，以肉眼可见的速度白了。"},{id:"opt_confirm_price",text:"八万。刚才这个数，你再说一遍，我没听清。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-15},next:"n_06",outcome:"「再说一遍」——他真的又说了一遍。八万，一字不差。录音的红点，稳稳地跳着。"},{id:"opt_pay_l15",text:"（打开转账）行，八万。",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_06",outcome:"转账成功的提示音很轻。他收起手机，笑了笑：兄弟，懂事。三个月后，第二张截图来了：十五万。"},{id:"opt_threaten_l15",text:"你敢交上去，我弄死你。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-10,risk:25},next:"n_06",outcome:"「弄死你」——他愣了一秒，随即笑了：你听听，谁才该被举报？你的 threats，成了他的素材。"},{id:"opt_ally_l15",text:"（拨号）沈律师，有人拿举报跟我要钱。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06",outcome:"沈骊：不要转账，不要回复，不要删除。三条聊天记录都留着——现在，报警。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l15_hr",emotion:"smooth",text:"（下午，会议室）小陈，我们收到点情况反映。你看，N 是不是也挺好。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"上午八万，下午 N。这两件事之间隔着四个小时。",timer:24,timeoutOption:"opt_sign_l15",options:[{id:"opt_link_them",text:"什么情况反映？麻烦书面给我。另外今天上午的事，我已经报警了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-15},next:"n_08",outcome:"「我已经报警了」——对面沉默了十秒。然后那个「情况反映」的邮箱，自动退信了。"},{id:"opt_arbitration",text:"赔偿按法定标准。谈不拢，我走劳动仲裁。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-10},next:"n_08",outcome:"「法定标准」四个字一出，HR 翻出了计算器。谈不拢的意思是：他们开始算了。"},{id:"opt_sign_l15",text:"（签了 N 的协议）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-5,composure:5,risk:25},next:"n_08",outcome:"你签了 N。笔放下的时候，HR 松了口气——你看得出来，他们怕的是你不签。"},{id:"opt_blowup_l15",text:"（在会议室拍桌子）你们是不是串通好的？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-15,risk:15},next:"n_08",outcome:"「串通好的」——会议室的门开着。第二天，这三句话出现在内部通报里：情绪失控，拒绝沟通。"},{id:"opt_breath_l15",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0,outcome:"会议室的白板上还留着上一场会的字。你盯着「Q3」两个字，数了三次呼吸。"}],impulsePool:[{id:"imp_curse_l15",text:"一个个的，都不是人。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:20},next:"n_08"},{id:"imp_hit_l15",text:"（下楼堵住他，一拳打过去）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:2,script:`沈骊把录音听完，停在第四分十一秒。

「八万。你签 N 走人，八万给我。这材料就烂在我手里。」

「这一句就够了。」她说，「以举报相要挟索取财物，数额较大。
　这不是职场纠纷，这是刑事案件。」

她把两条线画在纸上。
「刑事这条，公安办。劳动这条，仲裁办。」
「两条线分开走，谁也别耽误谁。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:3,prompt:"沈骊：「有一件事你得想清楚——报警之后，公司也会知道。」",timer:21,timeoutOption:"opt_hesitate_l15",options:[{id:"opt_both_lines",text:"两条线一起走。刑事报案，仲裁同时立。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_10",outcome:"「同时立」——沈骊在电话里说：对。他跟你讲感情，你就跟他讲程序。"},{id:"opt_arb_only",text:"先走仲裁。刑事那条留着。",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:15,opinion:10,composure:15,risk:-10},next:"n_10",outcome:"仲裁受理通知发到邮箱。刑事那条线，你留着——不是心软，是程序有余地。"},{id:"opt_hesitate_l15",text:"……那算了，别报警了。这行就这么大。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:20},next:"n_10",outcome:"「别报警了」——消息发出去，对面回了个「够意思」。第二天，你在行业群里看到了自己的名字。"},{id:"opt_expose_l15",text:"把录音发到行业群，让所有人看看他什么货色。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25,addFlags:["L15_F_BEHAVIOR"]},next:"n_10",outcome:"录音发进行业群的三小时里，你被 @ 了两百次。有人叫好，有人问你要证据链——你忽然发现，自己也成了情绪流量的一部分。"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`刑事立案通知书下来那天，人事主动打了电话。

「陈先生，之前的方案我们再研究了一下。」
「2N，另外这个月的绩效正常发。」

那份「情况反映」，从头到尾没人再提过。
因为它压根就不存在——立案后调查组问过，他一个字都拿不出来。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"他给你发了条微信，很长。最后一句是：能不能撤案。",timer:18,timeoutOption:"opt_soften_l15",options:[{id:"opt_no_withdraw",text:"（截图存证。回一句：这个不归我决定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12",outcome:"「这个不归我决定」——这句话发出去，对面沉默了。撤案的意思，被你原样退回：程序说了算。"},{id:"opt_no_reply_l15",text:"（不回。截图交给办案民警）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:5,risk:-10},next:"n_12",outcome:"截图交给民警，民警扫码归档。他没有再发消息——谅解这种事，沉默就是回答。"},{id:"opt_soften_l15",text:"（回：我尽量。）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-5,composure:-5,risk:20},next:"n_12",outcome:"「我尽量」发出去，对面立刻回：兄弟，够意思。四十八小时后，办案民警问你：你同意撤案？"},{id:"opt_taunt_l15",text:"（回：你也有今天。）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-10,opinion:-20,composure:5,risk:20},next:"n_12",outcome:"「你也有今天」——他截了图。三个月后量刑建议书里有一条：受害者态度强硬，拒不谅解。你的爽，贵了两个月。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`离职手续办完那天，他被取保候审。

出公司大门的时候你回头看了一眼那栋楼。
十一年。

沈骊在路边等你，车窗摇下来：「上车吧，堵着呢。」`,next:"__END__"}],Jl=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 那一拳",script:`你在楼下堵住他，一拳打在他脸上。鼻梁骨折。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L15_F"}],wf={id:Vl,title:jl,act:Ul,initState:Yl,cast:Kl,entryNode:ql,lawyerCard:Wl,satireTargets:zl,nodes:Xl,endings:Jl},Ql=Object.freeze(Object.defineProperty({__proto__:null,act:Ul,cast:Kl,default:wf,endings:Jl,entryNode:ql,id:Vl,initState:Yl,lawyerCard:Wl,nodes:Xl,satireTargets:zl,title:jl},Symbol.toStringTag,{value:"Module"})),Zl="L16",eu="第16关 · 三十秒剪辑",tu=4,nu={evidence:35,opinion:20,composure:40,risk:40},iu=["hero","npc_l16_account","shen_li","zhou_you","crowd"],ou="n_01",su="card_law_L16",ru=["T2","T4"],cu=[{id:"n_01",type:"cutscene",pressure:3,script:`周一早上七点，你在地铁上刷到自己。

三十秒。标题是《扒一扒身边的连环猎手》。

地铁那三分钟，剪了五秒——只有她指着你的那一下。
健身房，剪了四秒——只有你伸手的那一帧。
团建包厢，剪了三秒——只有你说话的那半句。

拼在一起，是一个人的十一年。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:4,speaker:"crowd",emotion:"neutral",text:"（转发四万二。评论区最上面那条：这种人怎么还在上班。）",next:"n_03"},{id:"n_03",type:"choice",pressure:4,prompt:"手机在你手里烫。还有六站到公司。",timer:21,timeoutOption:"opt_comment_fight",options:[{id:"opt_notarize",text:"（先做证据保全公证。截图、录屏、转发数，全部固定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04",outcome:"公证处的回执开出：截图 47 张、录屏 3 段、转发量存证 1 份。纸张比热搜活得久。"},{id:"opt_platform_report",text:"（走平台投诉通道，提交完整原片作为对照）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"平台工单回复：已收到，处理周期 7 个工作日。热搜的周期是 48 小时。你算了一下这两个数字。"},{id:"opt_comment_fight",text:"（在评论区下场，一条一条回）",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-20,composure:-15,risk:15},next:"n_04",outcome:"你回了两百条。第一百零一条开始，对面换用了你的原话——断章的那半句。评论区成了绞肉机，两边都在流血。"},{id:"opt_beg_delete",text:"（私信对方：求你删了，我给你钱）",tag:"HUSH_MONEY",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-5,risk:25,addFlags:["G_NEG_HUSH_MONEY"]},next:"n_04",outcome:"「给你钱」三个字发出去，对方回了个收款码，附言：再加点，我让你上不了热搜也下不来。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:5,speaker:"npc_l16_account",emotion:"businesslike",text:"（私信回复）视频是网友投稿，我们只是转发。有异议走平台申诉哦～",next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"转发破十万。你妈打来电话，问你是不是出事了。",timer:24,timeoutOption:"opt_panic_l16",options:[{id:"opt_release_full",text:"（把三段完整原片一次性发出来，附每一段的书面结论）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:30,composure:5,risk:-5},next:"n_06",outcome:"三段原片同时发出。第一条评论是：等一个反转。第三个小时，热评第一变成了：反转了。"},{id:"opt_lawyer_letter_l16",text:"（律师函，同时向平台提交完整证据包）",tag:"GOOD",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-10},next:"n_06",outcome:"律师函的扫描件挂了出来。评论区安静了一半——剩下的一半，开始逐帧对比原片和剪辑版。"},{id:"opt_panic_l16",text:"（发一条长文自证，写了两千字）",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-10,opinion:-20,composure:-15,risk:15},next:"n_06",outcome:"两千字长文发出，两小时后你数了一下：被引用最多的，是被断章的那三句话。自证，是绞索的一种。"},{id:"opt_counter_edit",text:"（自己也剪一个，把对方的黑历史拼进去）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-25,opinion:-20,risk:25,addFlags:["L16_F_BEHAVIOR"]},next:"n_06",outcome:"你的「黑历史合集」剪到一半，沈骊的电话进来了：停。你剪的那一刻，你就成了他。"},{id:"opt_breath_l16",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_05",oncePerNode:!0,outcome:"手机扣在桌上。热搜还在涨，像潮水拍门。你数了三次呼吸——门是关着的。"}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:4,script:`完整版发出去了。

地铁监控：三分十七秒，双手一直在扶杆上。
健身房监控：20:31:21 入画，掌心向上托住杠铃杆。20:09 同一个动作，救的是个男的。
团建原片：02:33 她先起的头，02:36 满屋子笑，笑得最大声的是她。

三份书面结论附在后面。派出所的、健身房的、公司的。
每一份都有编号，有日期，有章。`,next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"第一个小时，转发一千二。第二个小时，两万。风向在转，但很慢。",timer:20,timeoutOption:"opt_push_hard",options:[{id:"opt_stay_quiet",text:"（发完就不再说话。让材料自己走）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:15,risk:-10},next:"n_08",outcome:"你退出了热搜页。第二天早上，原片的转发超过了剪辑版。材料自己走到了你前面。"},{id:"opt_supplement",text:"（只补一条：原片链接与结论编号，其余不回应）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_08",outcome:"「原片链接与结论编号」——这条置顶了。所有骂声撞在这条上，都变成了「已阅」。"},{id:"opt_push_hard",text:"（挨个回复质疑者，一条都不放过）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-20,composure:-20,risk:15},next:"n_08",outcome:"你逐条回复到凌晨三点。第二天你数了数：反对你的人没少，黑眼圈多了两个。"},{id:"opt_demand_apology_l16",text:"（公开点名要求对方道歉）",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-15,composure:-10,risk:20},next:"n_08",outcome:"公开点名的那条发出后，对方瞬间转发：看！他网暴我！你的正确，被做成了他的弹药。"}],impulsePool:[{id:"imp_rage_l16",text:"（发了一条骂人的，三分钟后删了）",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_08"},{id:"imp_smash_l16",text:"（冲去他们公司楼下堵门）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:3,speaker:"zhou_you",emotion:"firm",text:"（转发了完整版，配文四个字）我在现场。",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"她的号只有两百个粉丝。但她实名，头像是工牌照。",timer:23,timeoutOption:"opt_let_her",options:[{id:"opt_protect_her",text:"（私信她：谢谢。但你别再转了，他们会去扒你）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:30,composure:10,risk:-10},next:"n_10",outcome:"私信发出去，她回：谢谢你。原来被扒的不止我一个。这条私信，后来出现在判决书里。"},{id:"opt_thank_public",text:"（公开道谢，同时提醒大家不要去她主页）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:20,opinion:25,composure:5,risk:-5},next:"n_10",outcome:"公开道谢的那条，评论区风向变了：原来帮他的那个人，也被挂过。正义第一次有了具体的脸。"},{id:"opt_let_her",text:"（没管。她的转发确实帮了大忙）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:5,opinion:-20,composure:-10,risk:20},next:"n_10",outcome:"她的转发确实帮了大忙。两周后她发了一条：不想再谈这件事了，求放过。她的主页，停更在那天。"},{id:"opt_amplify",text:"（把她的转发置顶，让更多人看见）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:10,opinion:-25,composure:-5,risk:25},next:"n_10",outcome:"置顶了她的转发。三天后她私信你：能不能撤下来，他们开始扒我了。你撤了。迟了。"},{id:"opt_ally_l16",text:"（拨号）沈律师，我上热搜了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_10",outcome:"沈骊：三件事——公证、原片、不起诉和解。热搜是他们的战场，法庭是你的。"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`第三天，那条三十秒的视频删了。
没有道歉，没有说明。

后台数据是沈骊后来通过平台调出来的：
剪辑版，播放两千一百万。
完整版，播放四十七万。

「差了四十五倍。」她说。
「这不是意外。这是这门生意的毛利率。」`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「删了不等于完了。你要不要往下走？」",timer:19,timeoutOption:"opt_stop_l16",options:[{id:"opt_sue_l16",text:"起诉。名誉权，要判决书，不要和解。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:10,risk:-15},next:"n_12",outcome:"「要判决书，不要和解」——沈骊重复了一遍：确定？确定。判决书会公开，和解协议不会。你要的是「公开」两个字。"},{id:"opt_trace_source",text:"先查投稿来源。我想知道那三段是谁拼的。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10,addFlags:["L16_TRACED"]},next:"n_12",outcome:"投稿溯源的报告三天后出来：三个投稿账号，同一台设备。再往上，是一家 MCN 的签约号。"},{id:"opt_stop_l16",text:"删了就算了。我累了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-10,risk:20},next:"n_12",outcome:"「算了」——热搜退了，你也退了。三个月后，同样的三段剪辑，配上了另一个人的名字。"},{id:"opt_public_war",text:"我要把这个号做掉。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:25},next:"n_12",outcome:"「做掉这个号」的动员令发出，一夜聚集了五千人。号没了。第二天，你的粉丝群被封了——理由是网暴。"}],impulsePool:[{id:"imp_smash_l16b",text:"（查到地址，冲过去砸了他们的设备）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_12",type:"cutscene",pressure:1,script:`投稿邮箱查到了。不是网友。

是一家 MCN 的内容中台，账号矩阵的第十一个号。
营业执照上的法人代表，名字叫贺松。

沈骊把那张工商信息截图放大，看了很久。
「这个人，我见过两次。」
「两次都在别人的案子里。」`,next:"__END__"}],au=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 找上门",script:`你找到了那家公司的地址，冲进去把设备砸了。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L16_F"}],Of={id:Zl,title:eu,act:tu,initState:nu,cast:iu,entryNode:ou,lawyerCard:su,satireTargets:ru,nodes:cu,endings:au},lu=Object.freeze(Object.defineProperty({__proto__:null,act:tu,cast:iu,default:Of,endings:au,entryNode:ou,id:Zl,initState:nu,lawyerCard:su,nodes:cu,satireTargets:ru,title:eu},Symbol.toStringTag,{value:"Module"})),uu="L17",pu="第17关 · 人肉",du=4,_u={evidence:40,opinion:10,composure:28,risk:45},fu=["hero","npc_l17_father","npc_l17_hr","shen_li","crowd"],gu="n_01",mu="card_law_L17",vu=["T2","T4"],hu=[{id:"n_01",type:"cutscene",pressure:4,script:`周四凌晨两点，一个文档在群里传开了。

姓名、身份证号、公司地址、工位号。
父母的住址，你爸的手机号。
念念的幼儿园名字，和班级。

标题是：《人肉不是目的，正义才是》。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:5,speaker:"npc_l17_father",emotion:"confused",text:"（清晨五点四十的电话）小屿，家里电话一晚上没停。你妈吓得没睡。",next:"n_03"},{id:"n_03",type:"choice",pressure:5,prompt:"他没问你做了什么。他只问：要不要报警。",timer:25,timeoutOption:"opt_collapse_l17",options:[{id:"opt_protect_parents",text:"爸，现在关机。我今天回去接你们，先住我这儿。我来报警。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:25,opinion:20,composure:15,risk:-10},next:"n_04",outcome:"电话那头的老房子先安静了，然后是你妈的声音：好，都听你的。你听见了她压着的哭腔。"},{id:"opt_notarize_l17",text:"（先做全网证据公证，把那个文档和传播路径全部固定）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:10,composure:5,risk:-10},next:"n_04",outcome:"公证员的打印机响了四十分钟。三百一十七个传播节点，每一个都变成了 PDF 的一页。"},{id:"opt_collapse_l17",text:"（说不出话，挂了电话）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-20,risk:15},next:"n_04",outcome:"电话挂断之后，你在工位坐了很久。屏幕上那个文档还在被转发——数字每跳一下，你都看得见。"},{id:"opt_doxx_back",text:"（开始扒对方。三个小时后你有了他的住址）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-30,opinion:-15,risk:25,addFlags:["G_NEG_DOXXED_BACK","L17_F_BEHAVIOR"]},next:"n_04",outcome:"三个小时后你有了他的住址、单位、女儿的学校。你盯着「学校」两个字，把页面关了——你差一点，就变成了他。"},{id:"opt_ally_l17",text:"（拨号，声音发抖）沈律师……我爸妈那边。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_04",outcome:"沈骊的声音很稳：先说三遍——不是你的错。然后我们一件一件来。你听见自己说：好。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:5,speaker:"npc_l17_hr",emotion:"pressured",text:"陈屿，前台今天接了六百多个电话。老板问我们要个说法。",next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"幼儿园老师也发了消息，问最近要不要换人接送。",timer:25,timeoutOption:"opt_resign_l17",options:[{id:"opt_full_response",text:"（给公司一份完整证据包 + 公证书 + 报案回执。请公司走法务）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06",outcome:"证据包发出两小时后，公司法务回电：我们以公司名义发函。第一次，你不是一个人在扛。"},{id:"opt_report_crime",text:"（向公安报案：侵犯公民个人信息、寻衅滋事）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_06",outcome:"报案回执的编号很短：受案字第 0417 号。侵犯公民个人信息——这九个字，第一次属于你爸妈。"},{id:"opt_resign_l17",text:"（提离职。不想连累公司）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-30,opinion:-10,composure:-10,risk:20},next:"n_06",outcome:"离职申请递上去，总监按住：不至于。你觉得连累公司——公司觉得，走的人越多，造谣的越开心。"},{id:"opt_public_beg",text:"（发一条公开求饶：放过我家人，冲我来）",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-15,opinion:-25,composure:-15,risk:15},next:"n_06",outcome:"「冲我来」那条发出后，转发破了十万。他们真的冲你来了——你的住址两小时后出现在同一批账号上。"},{id:"opt_breath_l17",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_05",oncePerNode:!0,outcome:"爸妈的旧房间还是高中时的样子。你坐在那张床上，数了三次呼吸，才敢开手机。"}],impulsePool:[]},{id:"n_06",type:"cutscene",pressure:4,script:`沈骊来的时候你在楼道抽烟。已经抽到第七根。

她站了一会儿，没说话。然后把手里的东西递过来——
一份报案回执，一份公证书，还有一杯豆浆。

「回执我替你交了。」
「公证做完了，全网三百一十七个转发节点，全部固定。」

她顿了很久。

「陈屿。」
「这不是你的错。这一句我只说一次。」`,next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"豆浆还是热的。你的手抖得握不住。",timer:19,timeoutOption:"opt_break_l17",options:[{id:"opt_keep_going",text:"（喝了一口。谢谢。下一步做什么）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:15,composure:25,risk:-10},next:"n_08",outcome:"豆浆还温着。你喝了一口，说：下一步。沈骊愣了半秒——这半秒里，有心疼，也有认可。"},{id:"opt_ask_family",text:"我爸妈那边先安排好，然后我们再谈案子。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:25,composure:20,risk:-10},next:"n_08",outcome:"「先安排爸妈」——当晚他们住进了你订的酒店。你妈拉着行李箱回头看了眼老房子：钥匙……带着呢。她带着的，是三十年。"},{id:"opt_break_l17",text:"（蹲下去，说不出话）",tag:"NEUTRAL",aggression:0,initiative:0,effects:{evidence:-10,opinion:5,composure:-15,risk:10},next:"n_08",outcome:"你蹲在律所的落地窗边，说不出话。沈骊没催。窗外是晚高峰，一城的灯火，没有一盏为你亮——但桌上那杯豆浆是热的。"},{id:"opt_lash_out",text:"有什么用？他们已经赢了。",tag:"TRAP",aggression:2,initiative:0,effects:{evidence:-15,opinion:-10,composure:-20,risk:15},next:"n_08",outcome:"「他们赢了」——沈骊摇头：他们赢的是流量。你现在做的每一个动作，决定他们输不输官司。"}],impulsePool:[{id:"imp_rage_l17",text:"（把那个文档转发到自己所有群，配文：来吧）",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-25,opinion:-25,composure:-5,risk:15},next:"n_08"},{id:"imp_go_find_l17",text:"（按扒到的地址找过去）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"dialogue",pressure:5,speaker:"crowd",emotion:"neutral",text:"（新话题上来了。有人在群里说：这事好像有反转？——然后没人接话）",next:"n_09"},{id:"n_09",type:"choice",pressure:4,prompt:"热度在掉。掉得比涨的时候慢很多。",timer:21,timeoutOption:"opt_chase_l17",options:[{id:"opt_silent_build",text:"（不发声。把三百一十七个节点逐个整理成证据清单）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_10",outcome:"三百一十七个节点整理成表：账号、时间、转发量、截图编号。做完抬头，天亮了。"},{id:"opt_platform_l17",text:"（向平台批量举报，同时向网信部门投诉）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_10",outcome:"平台批量举报提交 217 条，网信投诉提交 1 份。四十八小时后，第一批账号开始消失。"},{id:"opt_chase_l17",text:"（挨个私信转发的人，要求删除）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:-10,opinion:-20,composure:-20,risk:15},next:"n_10",outcome:"你私信了两百个人。删的有一半，骂你的有三成，剩下一成说：我也是被转的。追着浪花跑，浪不会停。"},{id:"opt_give_up_l17",text:"（卸载了所有 App）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:5,risk:20},next:"n_10",outcome:"App 卸载的那一晚，你睡了九个小时。第二天你妈打电话：楼下有人问起你工资……声音没了，问题还在。"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`两个月后，公安立案。侵犯公民个人信息。

第一个被找到的是个大二学生，他说他只是转发。
第二个是个自媒体，粉丝八千。
第三个——

第三个的服务器日志指向那家 MCN 的内容中台。
和 L16 那个投稿邮箱，是同一台机器。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊：「学生那个，家长找过来了。孩子今年十九。」",timer:20,timeoutOption:"opt_all_out",options:[{id:"opt_focus_source",text:"转发的从轻。我要的是最上面那个。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-15},next:"n_12",outcome:"「要最上面那个」——沈骊调出了资金流向图：三个头部的广告分成，流向同一家空壳公司。链条的顶端，有名字。"},{id:"opt_measured",text:"（学生这个撤诉，其余的继续）",tag:"GOOD",aggression:0,initiative:2,effects:{evidence:10,opinion:25,composure:10,risk:-10},next:"n_12",outcome:"学生那个撤了。他发来长信：我转的时候，真的以为在帮人。你回：下次先看原片。这一条，也进了案卷。"},{id:"opt_all_out",text:"一个都不放过。三百一十七个，一个一个来。",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:10,opinion:-25,composure:-10,risk:20},next:"n_12",outcome:"三百一十七个，一个不放过。三个月后你赢了全部立案——也错过了孩子的家长会，和自己公司的年终评审。"},{id:"opt_drop_all",text:"都撤了吧。我不想再看见这些名字。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-5,risk:20},next:"n_12",outcome:"「都撤了吧」——沈骊看了你很久：可以。但你爸妈的名字，会留在这三百一十七个页面里。你改了主意。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`你爸在你家住了三个月。走的那天他把阳台的花都浇了一遍。

下楼的时候他说：「那个电话，我后来接了几个。」
「有个姑娘骂到一半哭了，说对不起，她不知道是真是假。」

「小屿，」他说，「你别恨她们。」
「你就把这事办完。」`,next:"__END__"}],xu=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 你找过去了",script:`你按扒到的地址找过去，砸了门，打了人。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L17_F"}],Pf={id:uu,title:pu,act:du,initState:_u,cast:fu,entryNode:gu,lawyerCard:mu,satireTargets:vu,nodes:hu,endings:xu},ku=Object.freeze(Object.defineProperty({__proto__:null,act:du,cast:fu,default:Pf,endings:xu,entryNode:gu,id:uu,initState:_u,lawyerCard:mu,nodes:hu,satireTargets:vu,title:pu},Symbol.toStringTag,{value:"Module"})),yu="L18",Lu="第18关 · 直播间的生意",Tu=4,bu={evidence:55,opinion:30,composure:38,risk:35},Au=["hero","npc_l18_streamer","shen_li","crowd"],wu="n_01",Ou="card_law_L18",Pu=["T4"],Ru=[{id:"n_01",type:"cutscene",pressure:2,script:`一个百万粉的账号发来连线邀请。
主题写着：《正面对话：被网暴的他，和为她们说话的我》。

沈骊说别去。
然后她说：「但你要是去，我们先把要问的问题写出来。」`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l18_streamer",emotion:"warm_pro",text:"（开播）欢迎陈先生。我们今天不吵架，我们讲事实，好吗？",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"在线四万七。弹幕已经刷满了。她笑得很真诚。",timer:22,timeoutOption:"opt_defend_l18",options:[{id:"opt_agree_terms",text:"好。那我们先约定：讲事实的时候，材料要能查证。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-10},next:"n_04",outcome:"「材料要能查证」——她笑了笑：都像你这么谈，我们就没饭吃了。玩笑里有一半是真的。"},{id:"opt_open_materials",text:"（把三份书面结论的编号，直接念了一遍）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"三个编号念完，直播间安静了五秒。弹幕从「来了来了」变成了：「编号是什么？我去查。」"},{id:"opt_defend_l18",text:"我先说明一下，那个视频是剪辑的……",tag:"TRAP",aggression:0,initiative:1,effects:{evidence:-15,opinion:-20,composure:-15,risk:15},next:"n_04",outcome:"「视频是剪辑的」——你一句话没说完，弹幕已经刷起来了：洗白开始了。对方要的就是你解释。"},{id:"opt_attack_l18",text:"你敢不敢先说说你一个月靠这个赚多少？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-10,risk:15},next:"n_04",outcome:"「赚多少」——她反手把打赏榜贴了出来：都不容易。你的问题，成了她的苦情戏台本。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:4,speaker:"npc_l18_streamer",emotion:"pivot",text:"可是陈先生，这么多女性都感到被冒犯，这个感受总不会是假的吧？",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"弹幕瞬间刷成一片。这个问题她问过很多次，答案她也准备好了。",timer:22,timeoutOption:"opt_flustered_l18",options:[{id:"opt_two_things",text:"感受不假。我从没否认过。但处理指控要靠事实——这两件事不冲突。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:25,opinion:30,composure:10,risk:-5},next:"n_06",outcome:"「感受不假，事实另算」——这句话被弹幕反复刷。有人开始说：等等，他好像没否认过感受。"},{id:"opt_ask_which",text:"「这么多女性」是多少位？她们各自被冒犯的是哪一件事？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_06",outcome:"「多少位、哪一件」——她顿了三秒：你这是在逼她们站出来。弹幕分裂成了两派。裂缝，就是光的入口。"},{id:"opt_flustered_l18",text:"我……我不是这个意思。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-20,composure:-15,risk:15},next:"n_06",outcome:"「不是这个意思」——你的支吾被剪成了高光。十秒的片段，第二天成了新视频的封面。"},{id:"opt_dismiss_l18",text:"感受不能当证据。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_06",outcome:"「感受不能当证据」——这句话单独被截出去，配文：他居然说感受不重要。你的准确，成了她的断章。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l18_streamer",emotion:"pro",text:"我们不纠结细节。我想聊的是这个现象背后的结构性问题。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"她转向大屏，准备切下一个话题。运营在给她比手势。",timer:25,timeoutOption:"opt_follow_l18",options:[{id:"opt_hold_topic",text:"细节就是这件事本身。您先把刚才那个数字说完，我们再聊结构。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_08",outcome:"「先把数字说完」——她的语速第一次乱了：数字……数字重要吗？弹幕回答了她：重要。"},{id:"opt_data_l18",text:"（放出两组数据：剪辑版两千一百万，完整版四十七万）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_08",outcome:"两千一百万和四十七万并排打出。弹幕停了两秒，然后是一排问号——问号，是思考的开始。"},{id:"opt_follow_l18",text:"（跟着她聊结构性问题）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-15,composure:-10,risk:15},next:"n_08",outcome:"你跟着聊了四十分钟结构性问题。下播后你看回放：你的三个数据，一个都没被记住。"},{id:"opt_rage_l18",text:"别装了。你就是靠这个吃饭的。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-15,risk:15},next:"n_08",outcome:"「靠这个吃饭」——她的眼泪当场下来了。你赢了攻击，输了直播——下一秒你就是「围哭女主播」的男嘉宾。"},{id:"opt_ally_l18",text:"（连线前拨号）沈律师，问题我拟好了，您看一下。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_08",outcome:"沈骊：问题只留一类——可验证的。她逃得掉观点，逃不掉数字。"}],impulsePool:[{id:"imp_curse_l18",text:"你他妈才是那个吃人血馒头的。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-20,composure:-10,risk:20,addFlags:["L18_F_BEHAVIOR"]},next:"n_08"},{id:"imp_smash_l18",text:"（摔了耳机，掀翻桌上的补光灯）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:5,script:`你把最后一张图放上去了。

不是数据，是一张工商信息截图。

某某文化传媒有限公司，法人代表贺松。
下面列着它备案的十七个账号。

第三个，是她。
第十一个，是那个发三十秒剪辑的号。
第十四个，账号名带着「男性权益」四个字。`,next:"n_09"},{id:"n_09",type:"choice",pressure:5,prompt:"直播间安静了大概两秒。这两秒里，在线人数涨到十一万。",timer:23,timeoutOption:"opt_gloat_l18",options:[{id:"opt_ask_calmly",text:"我不问您立场。我只问一句：这三个号，是不是一家公司的？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_10",outcome:"「是不是一家公司」——她沉默了七秒。七秒，直播间的永恒。然后她笑了：我们下期再聊。下期再也没有来。"},{id:"opt_state_fact",text:"（不提问。只念了一遍那十七个账号的名字）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:30,opinion:25,composure:5,risk:-10},next:"n_10",outcome:"十七个账号名念完，弹幕里有人开始@这些号。三个小时后，其中五个号悄悄改了名。"},{id:"opt_gloat_l18",text:"怎么不说话了？",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-30,composure:-5,risk:20},next:"n_10",outcome:"「怎么不说话了」——她立刻接住：大家看，他急了。你的得意，是她最后的人设燃料。"},{id:"opt_accuse_l18",text:"你就是贺松养的一条狗。",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-20,opinion:-20,composure:-10,risk:20},next:"n_10",outcome:"「贺松养的狗」——骂声出口的瞬间，直播间的风向变了：从讨论剪辑，变成了讨伐你。你替她完成了一次危机公关。"},{id:"opt_breath_l18",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_09",oncePerNode:!0,outcome:"连麦等待音在响。你数了三次呼吸，把准备好的二十句话，删成了三个数字。"}],impulsePool:[{id:"imp_smash_l18b",text:"（一脚踹翻摄像机支架）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_10",type:"cutscene",pressure:3,script:`连线断了。

她的画面变成一片蓝，然后是「主播已离开」。

直播间还开着四十秒，弹幕一条一条往上滚。
然后整个房间被关闭了。

你的手机开始震，一直震。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"沈骊在耳返里说：「录屏存了。现在，你什么都别发。」",timer:19,timeoutOption:"opt_post_l18",options:[{id:"opt_stay_silent_l18",text:"（关掉手机。一个字不发）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:15,risk:-15},next:"n_12",outcome:"手机关机。世界安静得像深海。第二天醒来，事情的热度，比你想象中退得快。"},{id:"opt_submit_l18",text:"（把录屏和工商信息一起提交给平台和网信部门）",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:5,risk:-10},next:"n_12",outcome:"录屏和工商信息打包提交。回执编号发到邮箱：网信 2026-0917。三个数字的编号，替你说了所有的话。"},{id:"opt_post_l18",text:"（发一条：她挂我电话了）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:-15,opinion:-25,composure:5,risk:20},next:"n_12",outcome:"「她挂了」那条发出后，她立刻发了小作文：我一直很尊重他，直到今天。你给她递了新剧本。"},{id:"opt_victory_lap",text:"（连开三个直播复盘）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-20,opinion:-25,composure:-5,risk:20},next:"n_12",outcome:"三场复盘直播，场观一场比一场少。爽是别人的流量，判决才是你的——这句话你想起来的时候，已经晚了。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`第二天她发了条道歉声明，说自己「对合作方背景了解不足」。
三天后账号改名了，赛道换成了美妆。

沈骊把那十七个账号的清单打印出来，用红笔划掉了第三个。

「还有十六个。」她说。
「不过没关系。这十七个后面只有一个人。」`,next:"__END__"}],Su=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 直播事故",script:`你在连线里失控了，摔了东西，骂了整整四十秒。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L18_F"}],Rf={id:yu,title:Lu,act:Tu,initState:bu,cast:Au,entryNode:wu,lawyerCard:Ou,satireTargets:Pu,nodes:Ru,endings:Su},Eu=Object.freeze(Object.defineProperty({__proto__:null,act:Tu,cast:Au,default:Rf,endings:Su,entryNode:wu,id:yu,initState:bu,lawyerCard:Ou,nodes:Ru,satireTargets:Pu,title:Lu},Symbol.toStringTag,{value:"Module"})),Iu="L19",Cu="第19关 · 各执一词",$u=4,Mu={evidence:60,opinion:45,composure:42,risk:30},Nu=["hero","npc_l19_moderator","npc_l19_pr","shen_li"],Fu="n_01",Du="card_law_L19",Hu=["T5"],Bu=[{id:"n_01",type:"cutscene",pressure:2,script:`平台申诉结果：不予处理。

理由一行字：「双方各执一词，暂无法认定。」

你提交的是三份盖章的书面结论、一份公证书、一份立案回执。
对方提交的是零。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:3,speaker:"npc_l19_moderator",emotion:"scripted",text:"（客服）您好，我们已按规则审核。如有异议可以再次提交哦～",next:"n_03"},{id:"n_03",type:"choice",pressure:3,prompt:"「再次提交」的入口，指向刚才那个已经驳回的表单。",timer:21,timeoutOption:"opt_resubmit",options:[{id:"opt_ask_rule_l19",text:"请告知本次适用的具体规则条款，以及「各执一词」的认定标准。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,risk:-10},next:"n_04",outcome:"「认定标准」——客服转了三级，最后转到规则组。规则组发来的条款里，「各执一词」四个字，没有定义。"},{id:"opt_escalate",text:"我要求上级复核，并请给出书面答复。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:20,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"复核申请提交，编号尾号 881。四十八小时后，答复来了：维持原判。理由栏，是空的。"},{id:"opt_resubmit",text:"（又提交了一次，附上同样的材料）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-15},next:"n_04",outcome:"同样的材料交了第二次。系统提示：请勿重复提交。机器比你诚实——它知道一样就是一样。"},{id:"opt_rage_l19",text:"你们这审核就是走过场吧？",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04",outcome:"「走过场」——客服的回复变成了模板：您的情绪我们理解。情绪理解了，事情没人管。"}],impulsePool:[]},{id:"n_04",type:"dialogue",pressure:3,speaker:"npc_l19_pr",emotion:"smooth",text:"（公关负责人）陈先生，我们理解您。但平台不是裁判机构，我们只能中立。",next:"n_05"},{id:"n_05",type:"choice",pressure:4,prompt:"「中立」这个词他说了三遍。",timer:24,timeoutOption:"opt_accept_l19",options:[{id:"opt_define_neutral",text:"一方有六份盖章材料，一方零份。判成平手不叫中立，叫选边。",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:25,opinion:30,composure:10,risk:-5},next:"n_06",outcome:"「判平手叫选边」——这句话发过去十分钟，人工客服第一次出现：您好，专员将介入。"},{id:"opt_regulator",text:"既然平台不裁判，那我向网信部门投诉，请监管来看这个流程。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,risk:-10},next:"n_06",outcome:"网信投诉提交成功。四十八小时后，平台的推送变了：您的申诉已转专人处理。监管两个字，比用户的名字管用。"},{id:"opt_accept_l19",text:"那……我还能怎么办呢。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-10,composure:-15,risk:15},next:"n_06",outcome:"「还能怎么办」——对话框关掉的那一刻，那条「各执一词」的判定，成了平台的挡箭牌，也成了你的天花板。"},{id:"opt_threaten_l19",text:"信不信我把你们也告了。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_06",outcome:"「告你们」——客服回复：这是您的权利。权利两个字，被他们用成了挡箭牌。"},{id:"opt_ally_l19",text:"（拨号）沈律师，平台驳回了。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06",outcome:"沈骊：别跟客服吵，吵赢客服不等于赢平台。三步：条款、复核、监管。你已经在第三步了。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:4,speaker:"npc_l19_pr",emotion:"stuck",text:"……这个说法，我需要向上反馈一下。",next:"n_07"},{id:"n_07",type:"choice",pressure:4,prompt:"沈骊在旁边把笔记本打开了，一直在记。",timer:24,timeoutOption:"opt_wait_l19",options:[{id:"opt_written_all",text:"麻烦把今天的沟通形成书面纪要，双方签字。我这边也记了。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:15,composure:5,risk:-10},next:"n_08",outcome:"纪要双方签字，一式两份。平台代表签字的时候，你注意到他的工号——以后，这个人要为这份纪要负责。"},{id:"opt_timeline",text:"请给一个明确的答复时限。到期没有答复，我按无答复处理。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:5,risk:-10},next:"n_08",outcome:"「答复时限」——对面犹豫了一下：七个工作日。第九个工作日，修订公示挂了出来。"},{id:"opt_wait_l19",text:"（等他们反馈）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:-5,composure:-10,risk:15},next:"n_08",outcome:"等了两周，工单自动关闭：超时未响应。你的等待，成了系统的结案率。"},{id:"opt_media_l19",text:"（把整个申诉过程发到网上）",tag:"TRAP",aggression:3,initiative:3,effects:{evidence:-15,opinion:-20,risk:20,addFlags:["L19_F_BEHAVIOR"]},next:"n_08",outcome:"申诉过程发上网，热搜第三。平台连夜联系你撤稿——撤稿的条件，你写在了备忘录里：先改规则，再谈撤稿。"},{id:"opt_breath_l19",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_07",oncePerNode:!0,outcome:"客服电话的等待音乐是首轻音乐。你跟着旋律数了三次呼吸——第九次转接，接通了。"}],impulsePool:[{id:"imp_curse_l19",text:"你们就是等我耗死。",unlockBelow:50,tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_08"},{id:"imp_smash_l19",text:"（把材料摔在会议桌上，推翻椅子走人）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_08",type:"cutscene",pressure:3,script:`网信部门的约谈函发过去了第九天，平台复核结果出来了。

原处理结果撤销。侵权内容全部下架。
涉事账号矩阵中的十一个，永久封禁。

附件里有一份《社区规则修订说明》。
第 4.3 条改了：
「当一方提供司法机关、行政机关或具有资质的第三方出具的书面结论，
　而另一方未能提供相应材料时，不适用『各执一词』条款。」`,next:"n_09"},{id:"n_09",type:"choice",pressure:2,prompt:"公关负责人又打来电话，说想请你吃个饭，聊聊「后续合作」。",timer:20,timeoutOption:"opt_dinner",options:[{id:"opt_decline_clean",text:"不用了。规则改了就行，这比吃饭有用。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:30,composure:15,risk:-10},next:"n_10",outcome:"「规则改了就行」——对面愣了愣：您真是个……少见的用户。公示栏挂出修订那天，附了你的工单号。"},{id:"opt_ask_public",text:"不吃饭。但这条修订，能不能公开挂出来？",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:5,risk:-10},next:"n_10",outcome:"「公开挂出来」——三天后，规则修订公示，落款日期和你的工单编号并排。后来者会看见规则，不会看见你——这就够了。"},{id:"opt_dinner",text:"（去了。席间他敬了三杯酒，什么也没谈成）",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-15,composure:-5,risk:15},next:"n_10",outcome:"三杯酒喝完，话题从规则聊到了孩子上学。饭局散了，规则的事，一句没落地。"},{id:"opt_demand_comp",text:"吃饭可以。先谈赔偿。",tag:"TRAP",aggression:2,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_10",outcome:"「先谈赔偿」——对方的脸僵了：这个……不在流程里。不在流程里的东西，谈不拢；在流程里的，你已经拿到了。"}],impulsePool:[]},{id:"n_10",type:"cutscene",pressure:2,script:`第 4.3 条挂在了社区规则公示页，生效日期是下个月一号。

沈骊把那一页截图，存进案卷。

「这一条，」她说，「以后每一个拿着结论去申诉的人都用得上。」
「他们不会知道是谁改的。」

「不用知道。」你说。`,next:"n_11"},{id:"n_11",type:"choice",pressure:2,prompt:"封禁名单出来了。十一个号，都在那份十七个的清单上。",timer:20,timeoutOption:"opt_stop_here",options:[{id:"opt_go_source",text:"还剩六个。而且这十七个后面只有一个人。走到底。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:20,composure:10,risk:-15},next:"n_12",outcome:"「十七个后面只有一个人」——沈骊把 4.3 条的修订记录和十七个账号的注册信息并排放着：下一次开庭，用得上。"},{id:"opt_prepare_suit",text:"（把全部材料整理成一份，交给沈骊）起诉吧。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:30,opinion:20,composure:10,risk:-10},next:"n_12",outcome:"材料装订成册，一共 214 页。沈骊掂了掂：这一摞，是两年的重量。起诉吧。"},{id:"opt_stop_here",text:"到这儿吧。已经够了。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-25,opinion:5,composure:-5,risk:20},next:"n_12",outcome:"「够了」——你合上电脑。六家没投诉的机构里，有一家三个月后用同样的理由驳了别人。天花板没拆，只是换了个屋子。"},{id:"opt_celebrate",text:"（发了条庆祝的动态）",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-25,risk:15},next:"n_12",outcome:"庆祝动态发出两小时，贺松那边的账号转了：他急了。你的胜利宣言，成了对手的流量——最后一课，免费。"}],impulsePool:[]},{id:"n_12",type:"cutscene",pressure:1,script:`起诉状递上去那天，被告栏里第一次出现了三个字。

贺　松。

沈骊把回执递给你：「立案了。」
「开庭大概在三个月后。」`,next:"__END__"}],Gu=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 会议室",script:`你把材料摔了，推翻了椅子，一个工作人员的手被划伤。

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

——情绪也是一种预算。这一次，你在它身上透支了。`,unlock:"card_L19_F"}],Sf={id:Iu,title:Cu,act:$u,initState:Mu,cast:Nu,entryNode:Fu,lawyerCard:Du,satireTargets:Hu,nodes:Bu,endings:Gu},Vu=Object.freeze(Object.defineProperty({__proto__:null,act:$u,cast:Nu,default:Sf,endings:Gu,entryNode:Fu,id:Iu,initState:Mu,lawyerCard:Du,nodes:Bu,satireTargets:Hu,title:Cu},Symbol.toStringTag,{value:"Module"})),ju="L20",Uu="第20关 · 对簿",Yu=4,Ku={evidence:60,opinion:50,composure:60,risk:30},qu=["hero","he_song","zhou_you","shen_li","crowd"],Wu="n_01",zu="card_law_L20",Xu=["T2","T4","T5"],Ju=[{id:"n_01",type:"cutscene",pressure:3,script:`开庭。第三法庭，旁听席坐满了。

名誉权纠纷，一审。原告陈屿，被告某某文化传媒有限公司及贺松。

沈骊的证据目录一共四十七页。
每一页对应你这两年里的某一天。`,next:"n_02"},{id:"n_02",type:"dialogue",pressure:4,speaker:"he_song",emotion:"relaxed",text:"（庭前休息，走廊上）陈先生。我看过你所有材料。做得挺好。",next:"n_03"},{id:"n_03",type:"choice",pressure:4,prompt:"他四十一岁，穿得很随意，手里端着自动贩卖机的咖啡。",timer:18,timeoutOption:"opt_engage_he",options:[{id:"opt_no_talk",text:"（点了下头，走开。什么也没说）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:15,risk:-10},next:"n_04",outcome:"你点头的幅度不超过一厘米。他等了三秒，没等到他要的表情——转身走了，背影有点乱。"},{id:"opt_record_he",text:"（打开录音）您要说什么，庭上说。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:15,composure:5,risk:-10},next:"n_04",outcome:"录音的红点亮着。他看了一眼那点红，话在喉咙里转了个弯：没什么，祝你好运。"},{id:"opt_engage_he",text:"你到底图什么？",tag:"TRAP",aggression:2,initiative:1,effects:{evidence:-15,opinion:-10,composure:-15,risk:15},next:"n_04",outcome:"「你图什么」——他笑了，笑得很慢：我等这一天等了两年。你终于问了这句话——他等的可能就是这句。"},{id:"opt_taunt_he",text:"今天就是你的日子了。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-20,composure:-10,risk:15},next:"n_04",outcome:"「你的日子」——他上前了半步，法警咳嗽了一声。你的痛快，差一点变成他的「被威胁」。"}],impulsePool:[]},{id:"n_04",type:"cutscene",pressure:4,script:`举证阶段。沈骊一页一页地念，念了四十分钟。

地铁监控。健身房 20:09 和 20:31。团建原片 02:33。
派出所情况说明三份。健身房书面结论一份。公司调查结论一份。
劳动监察整改通知一份。财产保全裁定一份。司法鉴定报告一份。
人身安全保护令复议撤销裁定一份。刑事立案通知书两份。
证据保全公证书两份。平台复核决定与规则修订说明各一份。

每一份都有编号，有日期，有章。

审判长问被告方：「对以上证据有无异议？」`,next:"n_05"},{id:"n_05",type:"choice",pressure:5,prompt:"被告席上，贺松的律师翻了很久材料。贺松没看材料，他在看你。",timer:23,timeoutOption:"opt_speech_l20",options:[{id:"opt_chain",text:"（只补一句：请法庭注意这十七个账号的备案主体，是同一个）",tag:"OPTIMAL",aggression:1,initiative:3,decisive:!0,effects:{evidence:30,opinion:25,composure:10,risk:-5},next:"n_06",outcome:"「备案主体是同一个」——对方律师的起立慢了半拍。这半拍，被审判长看见了。"},{id:"opt_silent_l20",text:"（不补充。材料已经说完了）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:25,composure:15,risk:-10},next:"n_06",outcome:"你没有补充。卷宗在法官手里翻页的声音，是法庭里最响的声音。"},{id:"opt_speech_l20",text:"（站起来，讲了五分钟这两年有多难）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-20,opinion:-15,composure:-10,risk:15},next:"n_06",outcome:"五分钟的陈情讲到一半，审判长抬手：请围绕证据。你的两年，被浓缩成了这句提醒。"},{id:"opt_point_l20",text:"（指着被告席）就是他。",tag:"TRAP",aggression:3,initiative:1,effects:{opinion:-25,composure:-10,risk:15},next:"n_06",outcome:"你指向被告席的手，被法警的目光接住了。审判长说：请遵守庭规。手指收回来的时候，你自己知道：刚才那一下，输了气势。"},{id:"opt_ally_l20",text:"（庭前拨号）沈律师，他刚才在走廊跟我说话。",tag:"ALLY",aggression:0,initiative:3,requires:"hasItem('item_shen_card')",effects:{evidence:10,composure:30,risk:-5},next:"n_06",outcome:"沈骊：他说了什么？原话。一个字都别改——原话进笔录，比你的愤怒有用十倍。"}],impulsePool:[]},{id:"n_06",type:"dialogue",pressure:5,speaker:"he_song",emotion:"amused",text:"（举手）审判长，我能说两句吗？我不辩解，我就说说这门生意。",next:"n_07"},{id:"n_07",type:"cutscene",pressure:5,script:`「对立是最便宜的流量。」

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
「广告位是我卖的。」`,next:"n_08"},{id:"n_08",type:"choice",pressure:5,prompt:"旁听席炸了。法槌敲了三下。你的手在桌子底下攥着。",timer:22,timeoutOption:"opt_rage_l20",options:[{id:"opt_ask_record",text:"审判长，我请求把被告刚才这段话，完整记入庭审笔录。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_09",outcome:"「完整记入笔录」——书记员的键盘声响了起来。对方律师的反对，慢了一步。"},{id:"opt_nothing_l20",text:"（什么也没说。他自己说完了）",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:30,composure:10,risk:-10},next:"n_09",outcome:"你什么都没说。他把自己说完了——说到了审判长第二次抬眼。"},{id:"opt_rage_l20",text:"你他妈把人当什么了？",tag:"TRAP",aggression:3,initiative:1,effects:{evidence:-15,opinion:-15,composure:-20,risk:20},next:"n_09",outcome:"「把人当什么」——你的音量在法庭里炸开的那一秒，对方律师低头写了一行字。你知道那行字是什么。"},{id:"opt_bitter_l20",text:"那这两年算什么？",tag:"TRAP",aggression:1,initiative:0,effects:{evidence:-15,opinion:-10,composure:-20,risk:15},next:"n_09",outcome:"「这两年算什么」——这个问题问出去，没有人能回答。法庭安静了五秒，这五秒里，你听见了自己的血。"},{id:"opt_breath_l20",text:"（停一秒。深吸一口气，把要说的话咽回去）",tag:"BREATH",aggression:0,initiative:1,effects:{composure:20,opinion:-5,risk:5},next:"n_08",oncePerNode:!0,outcome:"法庭的空调声很匀。你数了三次呼吸——两年来的每一次「凭什么」，都压在这三秒里。"}],impulsePool:[{id:"imp_charge_l20",text:"（越过栏杆冲向被告席）",unlockBelow:30,tag:"PHYSICAL",aggression:3,initiative:0,next:"e_assault"}]},{id:"n_09",type:"cutscene",pressure:4,script:`证人出庭。周攸。

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
「你卖的是以后每一个真的受了委屈的女人，说话时别人脸上那半秒的迟疑。」`,next:"n_10"},{id:"n_10",type:"choice",pressure:4,prompt:"周攸说完就坐下了。审判长问原告：「还有什么要陈述的？」",timer:19,timeoutOption:"opt_long_speech",options:[{id:"opt_end_clean",text:"没有了。证据都在卷里。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:20,opinion:20,composure:15,risk:-15},next:"n_11",outcome:"「证据都在卷里」——五个字，审判长点了下头。两年的材料，配得上这一句短。"},{id:"opt_add_ask",text:"只补一个请求：判决书公开，不要匿名化处理。",tag:"OPTIMAL",aggression:1,initiative:3,effects:{evidence:25,opinion:25,composure:10,risk:-10},next:"n_11",outcome:"「判决书公开」——书记员抬头看了你一眼。这个请求很少见——但它会留在案卷里，谁也拿不走。"},{id:"opt_long_speech",text:"（又讲了十分钟）",tag:"TRAP",aggression:1,initiative:1,effects:{evidence:-20,opinion:-20,composure:-10,risk:15},next:"n_11",outcome:"十分钟的补充陈述，被书记员摘要成三行。你的十个月，缩成了三行——多余的话，都是打折的。"},{id:"opt_demand_max",text:"我要求顶格赔偿，一分都不能少。",tag:"TRAP",aggression:3,initiative:2,effects:{opinion:-25,composure:-5,risk:15},next:"n_11",outcome:"「顶格」——对方律师立刻接：原告情绪化诉求。审判长的笔停了停。你要的是一分不能少，法官记下的是「情绪化」。"}],impulsePool:[]},{id:"n_11",type:"cutscene",pressure:2,script:`宣判在三周后。

被告构成名誉权侵权，赔礼道歉、消除影响、赔偿损失。
判决书全文公开，不作匿名化处理。

庭审笔录里，贺松那段话一字未删。

第七页有一行：
「被告当庭陈述其同时运营立场对立之账号矩阵并以此获利，
　该陈述与在案证据相互印证，本院予以确认。」

三个月后，市场监管部门以这份判决为线索，立了另一个案子。
那个案子不归你管了。`,next:"n_12"},{id:"n_12",type:"choice",pressure:2,prompt:"沈骊把判决书递给你：「拿好。这是你两年换来的。」",timer:19,timeoutOption:"opt_celebrate_l20",options:[{id:"opt_thanks_quiet",text:"（接过来，折好，放进内袋）谢谢。",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:15,opinion:20,composure:20,risk:-15},next:"n_13",outcome:"判决书折好，放进内袋——和 L04 那张情况说明、L16 那份公证书，放在同一层。你的口袋，装着一整套法治。"},{id:"opt_ask_zhou",text:"（先去找周攸）刚才那段，你准备了多久？",tag:"OPTIMAL",aggression:0,initiative:3,effects:{evidence:10,opinion:30,composure:20,risk:-10},next:"n_13",outcome:"「准备了多久」——周攸想了想：从你被停职那天起。他没说下去。有些仗，是一个人打的，但粮草是一群人筹的。"},{id:"opt_celebrate_l20",text:"（把判决书拍照发了出去）",tag:"TRAP",aggression:2,initiative:2,effects:{evidence:-15,opinion:-25,composure:5,risk:20},next:"n_13",outcome:"判决书照片发出十分钟，评论破千。半小时后你删了——和解协议第五条：不得公开贬损对方。赢了官司，别输在最后一条。"},{id:"opt_hollow_l20",text:"（没接）赢了又怎么样。",tag:"TRAP",aggression:0,initiative:0,effects:{evidence:-20,opinion:-10,composure:-20,risk:15},next:"n_13",outcome:"「赢了又怎么样」——你没接判决书，它被放在了桌上。走出法院，阳光很刺眼。沈骊在台阶下等你，手里拿着两张纸：一张是判决书复印件，一张是 4.3 条的公示。都接了吧。"}],impulsePool:[]},{id:"n_13",type:"cutscene",pressure:1,script:`走出法院大门，下午四点二十。
台阶上有风。

手机震了一下。推送。

新的热搜，新的话题，新的两方，新的一群人在对骂。

你看了两秒。

划掉了。`,next:"__END__"}],Qu=[{id:"e_assault",rank:"F",condition:"FORCED",title:"翻车 · 最后一步",script:`你越过栏杆冲了过去。法警拦下你的时候，你已经碰到了他。

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

划掉了。`,unlock:"card_L20_F"}],Ef={id:ju,title:Uu,act:Yu,initState:Ku,cast:qu,entryNode:Wu,lawyerCard:zu,satireTargets:Xu,nodes:Ju,endings:Qu},Zu=Object.freeze(Object.defineProperty({__proto__:null,act:Yu,cast:qu,default:Ef,endings:Qu,entryNode:Wu,id:ju,initState:Ku,lawyerCard:zu,nodes:Ju,satireTargets:Xu,title:Uu},Symbol.toStringTag,{value:"Module"})),If=Object.assign({"../../content/levels/L01.json":rc,"../../content/levels/L02.json":vc,"../../content/levels/L03.json":Pc,"../../content/levels/L04.json":Hc,"../../content/levels/L05.json":Xc,"../../content/levels/L06.json":ca,"../../content/levels/L07.json":ha,"../../content/levels/L08.json":Ra,"../../content/levels/L09.json":Ba,"../../content/levels/L10.json":Ja,"../../content/levels/L11.json":al,"../../content/levels/L12.json":xl,"../../content/levels/L13.json":Sl,"../../content/levels/L14.json":Gl,"../../content/levels/L15.json":Ql,"../../content/levels/L16.json":lu,"../../content/levels/L17.json":ku,"../../content/levels/L18.json":Eu,"../../content/levels/L19.json":Vu,"../../content/levels/L20.json":Zu}),At=Object.values(If).map(e=>e.default).sort((e,t)=>e.id.localeCompare(t.id)),Cf="破局实录",$f="互动普法叙事 · 二十案全章",Mf={evidence:"证据",opinion:"舆论",composure:"情绪",risk:"风险"},Nf={hero:"陈屿",shen_li:"沈骊",officer_lin:"林昭",zhou_you:"周攸",he_song:"贺松",crowd:"围观者",narrator:"",npc_l01_woman:"涉事女子",npc_l02_woman:"住户女子",npc_l03_woman:"路人女子",npc_l03_daughter:"念念",npc_l04_woman:"报警人",npc_l05_woman:"女子",npc_l05_manager:"值班经理",npc_l05_witness:"目击大哥",npc_l06_girlfriend:"前女友",npc_l06_mother:"她母亲",npc_l07_ex:"前女友",npc_l08_wife:"妻子",npc_l08_mother:"岳母",npc_l08_child:"孩子",npc_l09_wife:"妻子",npc_l09_cousin:"表哥",npc_l10_exwife:"前妻",npc_l10_child:"女儿",npc_l10_teacher:"班主任",npc_l11_hr:"HR",npc_l12_colleague:"同事",npc_l12_boss:"部门老板",npc_l13_hr:"HR",npc_l13_complainant:"投诉人",npc_l14_hr:"HR 总监",npc_l14_director:"总监",npc_l15_broker:"中介",npc_l15_hr:"HR",npc_l16_account:"商务",npc_l17_father:"父亲",npc_l17_hr:"HR",npc_l18_streamer:"主播",npc_l19_moderator:"版务",npc_l19_pr:"公关",npc_l20_judge:"审判长",npc_l20_lawyer:"对方律师"},Ff={1:"第一幕 · 流量即真相",2:"第二幕 · 亲密关系的账",3:"第三幕 · 职场的规则",4:"第四幕 · 收网"},Df={tapToContinue:"点击继续",secondsUnit:"s",endingTitle:"结局",restart:"再玩一次",nextLevel:"下一关",levelSelect:"选择关卡",lockedLevel:"未解锁",rankNames:{S:"名场面",A:"稳住了",B:"有惊无险",C:"勉强收场",F:"翻车"},finalMeters:"最终仪表",disclaimer:"本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。",progressLabel:"进度",soundToggle:"M",studyIntro:"测试开始前\\n请输入现场编号（如 P01）\\n\\n然后独立游玩前五关\\n过程中不会有任何提示\\n做完自动出现数据回收",studyPidPlaceholder:"现场编号",studyStart:"开始",studyDoneTitle:"第一幕完成",studyCopy:"导出数据（JSON）",studySummaryHeader:"参与者 {p} · {n} 次游玩",studySummaryLine:"{lv}: {rank}「{title}」 用时{s}秒 抉择{c}次 重玩{r}",stanceLow:"稳住",stanceHigh:"顶回去",pileALabel:"这条",pileBLabel:"那条",pileListHint:"选一个",swipeHint:"左右滑动选择 · 点按也可以",settlePhase1:"结算中",settleStampS:"教科书式破局",settleStampA:"稳稳落地",settleStampB:"有惊无险",settleStampC:"伤敌自伤",settleStampF:"满盘皆输",settleMetersTitle:"终局面",teachingHintComposure:"提示：在对方施压下稳住情绪，是达成最高评级的关键。",settleReplay:"本关重打",settleNext:"下一关",lawyerCardTitle:"【沈骊说】案情法律与应对实务复盘",lawyerCardBadge:"核心普法",lawyerCardBtn:"查看沈律师专业点评与法条依据",lawyerModalHeader:"沈骊律师 · 案情实务备忘录",lawyerModalClose:"已掌握破局要点",appTagline:"你不需要嘴更毒，你只需要比对手更懂规则",startAdventure:"开始破局",continueAdventure:"继续破局",recapTitle:"关键因果复盘",costComposure:"情绪",gainBreath:"恢复情绪",dangerImpulse:"极度危险",containsOptions:"内含 {n} 项应对",duelHeader:"危机对峙 · 抉择时刻",stanceCounter:"取证反制",stanceRebuttal:"拍案驳斥",stanceEvidence:"锁定证据",stanceHold:"稳守不自证",stanceBreath:"平复呼吸",stanceImpulse:"冲动失控",stanceNegotiate:"据理交涉",btnLog:"笔录",btnAuto:"自动",btnSkip:"快进",btnHide:"隐藏",backlogTitle:"案情对话笔录",backlogEmpty:"暂无历史笔录",backlogClose:"关闭笔录",tapToRestore:"点击任意处恢复界面",autoPlaying:"自动播放中",finaleTrue:"真结局 · 收网",finaleWin:"终局 · 胜诉",finaleCostly:"终局 · 惨胜",resumePrompt:"继续作答",timeoutNotice:"超时未决 · 系统替你选了",hookL01:"四岁儿子被指「猥亵」，全程不到一秒。这一次，你来当这个爸。",hookL02:"电梯里的镜头拍到了什么，取决于你按住谁。",hookL03:"爸爸和女儿在客厅对峙——你进门的时机，就是全部。",hookL04:"深夜送同事回家，门关上前的三秒钟。",hookL05:"托杠铃的那一下，到底碰没碰到？",hookL06:"彩礼三十八万八，分手后这笔账怎么算？",hookL07:"前女友要「青春损失费」：给，还是不给？",hookL08:"「孩子不是你的。」她说完这句，在等你的反应。",hookL09:"离婚冷静期第一天，她搬走了什么？",hookL10:"二十米的距离，决定了这是不是骚扰。",hookL11:"面试第七问：「你打算什么时候要孩子？」",hookL12:"论文署名顺序定了，可贡献该怎么算？",hookL13:"团建那句玩笑，第二天传遍了全公司。",hookL14:"匿名举报信是谁写的？第一个被约谈的是你。",hookL15:"裁员名单确定前夜，你手里还有最后一张牌。",hookL16:"三十秒的剪辑，足以让一个人社会性死亡。",hookL17:"人肉开盒的链条上，每一环都觉得自己无辜。",hookL18:"直播间的生意：眼泪是标价的。",hookL19:"各执一词的会议室，监控恰好坏了。",hookL20:"二十个案子走到公堂——等你收官。",endingTease:"本关还有一页你没翻到",endingTeaseS:"S 级结局",endingTeaseHint:"同一件事，另一种走法",stampEvidenceUp:"证据 · 锁定",stampEvidenceDown:"证据 · 受损",stampOpinionUp:"舆论 · 逆转",stampOpinionDown:"舆论 · 逆风",stampComposureUp:"情绪 · 稳住",stampComposureDown:"情绪 · 失守",stampRiskUp:"风险 · 引爆",stampRiskDown:"风险 · 拆雷",gapTitle:"离最高评级还差",gapNeed:"{name} 还差 {n} 点",gapOver:"{name} 高出 {n} 点",gapHintBreath:"（情绪靠「深呼吸」回）",nextCasePrefix:"下一案",endingsCount:"结局 {n}/{m}"},Hf={L01:{label:"餐厅门口",hue:30,motif:"table"},L02:{label:"住宅电梯",hue:220,motif:"elevator"},L03:{label:"商场中庭",hue:35,motif:"mall"},L04:{label:"深夜街道",hue:235,motif:"street"},L05:{label:"健身房",hue:15,motif:"gym"},L06:{label:"两家饭桌",hue:28,motif:"table"},L07:{label:"出租屋",hue:200,motif:"room"},L08:{label:"客厅",hue:40,motif:"room"},L09:{label:"民政局外",hue:210,motif:"office"},L10:{label:"学校门口",hue:45,motif:"street"},L11:{label:"面试间",hue:215,motif:"office"},L12:{label:"开放工位",hue:210,motif:"office"},L13:{label:"会议室",hue:220,motif:"office"},L14:{label:"总监办公室",hue:225,motif:"office"},L15:{label:"写字楼楼下",hue:200,motif:"street"},L16:{label:"剪辑室",hue:260,motif:"studio"},L17:{label:"家中",hue:30,motif:"room"},L18:{label:"直播间后台",hue:320,motif:"studio"},L19:{label:"平台工单页",hue:190,motif:"office"},L20:{label:"法院走廊",hue:210,motif:"court"}},Bf={calm:["前排","吃瓜","蹲后续","录下来了","别急，等反转","让子弹飞一会儿"],tense:["什么情况？","有人认识吗","这女的厉害","这男的稳住啊","报警了吗","快报警","别拍了先帮个忙啊","主播别切","全网都在看"],hot:["热搜第一预定","已经录屏了","传到群里了","反转了反转了","坐等打脸","这瓜保熟","直播间炸了","三分钟了还在吵"]},Gf={hero:210,shen_li:280,officer_lin:195,zhou_you:150,he_song:350,npc_l01_woman:350,npc_l02_woman:330,npc_l03_woman:320,npc_l03_daughter:45,npc_l04_woman:160,npc_l05_woman:340,npc_l05_manager:30,npc_l05_witness:200,npc_l06_girlfriend:315,npc_l06_mother:280,npc_l07_ex:300,npc_l08_wife:330,npc_l08_mother:275,npc_l08_child:50,npc_l09_wife:320,npc_l09_cousin:25,npc_l10_exwife:310,npc_l10_child:55,npc_l10_teacher:165,npc_l11_hr:220,npc_l12_colleague:145,npc_l12_boss:25,npc_l13_hr:215,npc_l13_complainant:345,npc_l14_hr:225,npc_l14_director:20,npc_l15_broker:40,npc_l15_hr:218,npc_l16_account:35,npc_l17_father:205,npc_l17_hr:222,npc_l18_streamer:325,npc_l19_moderator:195,npc_l19_pr:285,crowd:0},Vf={appTitle:Cf,appSub:$f,meters:Mf,speakerNames:Nf,actNames:Ff,ui:Df,scenes:Hf,danmaku:Bf,speakerHues:Gf},ve=Vf;function $t(e){const t=ve.ui[e];return typeof t=="string"?t:""}function Po(e){return!e||e==="null"?"":ve.speakerNames[e]??e}function ni(e){return ve.speakerHues[e]??220}function ep(e){return ve.scenes[e]??{label:"",hue:210,motif:"room"}}const tp="poju-study-v1",jf=()=>typeof location<"u"&&new URLSearchParams(location.search).get("study")==="1";function St(){if(typeof localStorage>"u")return{sessionId:"",participant:"",startedAt:0,runs:[]};const e=localStorage.getItem(tp);return e===null?{sessionId:"",participant:"",startedAt:0,runs:[]}:JSON.parse(e)}function vi(e){typeof localStorage<"u"&&localStorage.setItem(tp,JSON.stringify(e))}function Uf(e){const t={sessionId:`S-${performance.now().toString(36)}`,participant:e,startedAt:performance.now(),runs:[]};return hi=t,vi(t),t}function Yf(e,t,n){const i={level:t,startedAt:performance.now(),endedAt:0,totalMs:0,choices:[],endingRank:"",endingTitle:"",finalMeters:{evidence:0,opinion:0,composure:0,risk:0},replayed:n},o=hi??St();return o.runs.push(i),vi(o),i}let eo=0,np="",hi=null;function ii(e){eo=performance.now(),np=e}let to=!1;function Kf(){to=!0}function qf(e,t,n,i,o){const s=to;to=!1,e.choices.push({level:n,nodeId:np,optionId:i,ms:eo>0?performance.now()-eo:0,meters:{...o},...s?{timedOut:!0}:{}});const r=hi??St();vi(r)}function Wf(e,t,n,i,o){e.endedAt=performance.now(),e.totalMs=e.endedAt-e.startedAt,e.endingRank=n,e.endingTitle=i,e.finalMeters={...o},vi(hi??St())}function zf(){return JSON.stringify(St(),null,2)}function Xf(){const e=St(),n=[ve.ui.studySummaryHeader.replace("{p}",e.participant).replace("{n}",String(e.runs.length))],i=new Map;for(const o of e.runs){const s=i.get(o.level)??[];s.push(o),i.set(o.level,s)}for(const[o,s]of[...i.entries()].sort()){const r=s[0],c=Math.round(r.totalMs/1e3),a=ve.ui.studySummaryLine;n.push(a.replace("{lv}",o).replace("{rank}",r.endingRank).replace("{title}",r.endingTitle).replace("{s}",String(c)).replace("{c}",String(r.choices.length)).replace("{r}",s.length>1?"Y":"N"))}return n.join(`
`)}const Jf=15,Qf=45;function Zf(e){if(e===void 0)return null;const t=["evidence","opinion","composure","risk"];let n=0,i="evidence",o=0;for(const c of t){const a=e[c];typeof a=="number"&&(o+=Math.abs(a),Math.abs(a)>n&&(n=Math.abs(a),i=c))}if(n===0||n<Jf&&o<Qf)return null;const s=e[i],r=i==="risk"?s<0:s>0;return{dim:i,positive:r,peak:n}}const no="poju-seen-text",ys=3e3,io="poju-endings-seen";function xi(e){if(typeof localStorage>"u")return[];try{const t=localStorage.getItem(e),n=t===null?[]:JSON.parse(t);return Array.isArray(n)?n:[]}catch{return[]}}function ip(e,t){if(!(typeof localStorage>"u"))try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function Fi(e){if(e.length===0)return;const t=xi(no);t.length>=ys&&t.splice(0,t.length-ys+1),t.includes(e)||(t.push(e),ip(no,t))}function Di(e){return e.length===0?!1:xi(no).includes(e)}function e0(e,t){const n=xi(io),i=e+":"+t;n.includes(i)||(n.push(i),ip(io,n))}function t0(e){return xi(io).filter(t=>t.startsWith(e+":")).length}const n0={class:"hud"},i0={class:"label"},o0={class:"icon","aria-hidden":"true"},s0={class:"bar"},r0={class:"val-wrap"},c0={class:"num"},a0=at({__name:"MeterHud",props:{state:{}},setup(e){const t=e;let n=0;const i=ee({evidence:null,opinion:null,composure:null,risk:null}),o={};Se(()=>({...t.state}),(c,a)=>{if(!a)return;const u=["evidence","opinion","composure","risk"];for(const l of u){const _=c[l]-a[l];if(_!==0){n+=1;const v=l==="risk"?_<0:_>0;i.value[l]={text:(_>0?"+":"")+_,dir:v?"pos":"neg",key:n},o[l]!==void 0&&clearTimeout(o[l]),o[l]=setTimeout(()=>{i.value[l]=null},1400)}}});const s={evidence:"⚖️",opinion:"📢",composure:"🧘",risk:"⚡"},r=te(()=>[{k:"evidence",kind:"good"},{k:"opinion",kind:"good"},{k:"composure",kind:"good"},{k:"risk",kind:"bad"}].map(({k:a,kind:u})=>({key:a,label:ve.meters[a],value:t.state[a],kind:u})));return(c,a)=>(R(),F("div",n0,[(R(!0),F(Te,null,wt(r.value,u=>(R(),F("div",{key:u.key,class:me(["meter",[u.key,u.kind,{"is-tense":u.key==="composure"&&u.value<30,"is-crisis":u.key==="risk"&&u.value>=70}]])},[f("span",i0,[f("i",o0,P(s[u.key]),1),bt(P(u.label),1)]),f("div",s0,[f("div",{class:"fill",style:Be({width:Math.min(100,Math.max(0,u.value))+"%"})},null,4)]),f("div",r0,[f("span",c0,P(u.value),1),we(s_,{name:"float"},{default:yo(()=>[i.value[u.key]?(R(),F("span",{key:i.value[u.key].key,class:me(["delta",i.value[u.key].dir])},P(i.value[u.key].text),3)):ne("",!0)]),_:2},1024)])],2))),128))]))}}),xt=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n},l0=xt(a0,[["__scopeId","data-v-f8bd0050"]]);function u0(e,t){const n=220*Math.pow(2,Math.round(e/30)%12/12);return t==="tense"?{root:n,steps:[0,2,3,5,7,8,10]}:t==="panic"?{root:n,steps:[0,1,3,6,7,9,10]}:{root:n*1.5,steps:[0,2,4,7,9,12,14]}}function Ls(e,t){const n=Math.floor(t/e.steps.length),i=(t%e.steps.length+e.steps.length)%e.steps.length;return e.root*Math.pow(2,(e.steps[i]??0)/12+n)}function Ts(e){let t=e|0;return()=>(t=Math.imul(t,1664525)+1013904223|0,(t>>>8&16777215)/16777216)}class p0{constructor(){Ae(this,"ctx",null);Ae(this,"master",null);Ae(this,"bgmGain",null);Ae(this,"sfxGain",null);Ae(this,"bgmTimer",null);Ae(this,"mood","calm");Ae(this,"hue",210);Ae(this,"step",0);Ae(this,"rnd",Ts(42));Ae(this,"muted",!1)}unlock(){if(this.ctx===null){const t=globalThis.AudioContext;if(t===void 0)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.value=.5,this.bgmGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.9,this.sfxGain.connect(this.master)}this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master!==null&&this.ctx!==null&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone(t,n,i,o,s,r=0){if(this.ctx===null)return;const c=this.ctx.currentTime+r,a=this.ctx.createOscillator(),u=this.ctx.createGain();a.type=o,a.frequency.value=t,u.gain.setValueAtTime(0,c),u.gain.linearRampToValueAtTime(i,c+.012),u.gain.exponentialRampToValueAtTime(1e-4,c+n),a.connect(u),u.connect(s),a.start(c),a.stop(c+n+.05)}pad(t,n){if(this.bgmGain===null||this.ctx===null)return;const i=this.ctx.currentTime,o=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900,o.type="sawtooth",o.frequency.value=t/2,s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+n*.3),s.gain.linearRampToValueAtTime(1e-4,i+n),o.connect(r),r.connect(s),s.connect(this.bgmGain),o.start(i),o.stop(i+n+.1)}scene(t,n,i,o){const s=o<15||i>=4?"panic":i>=3||o<40?"tense":"calm";let r=0;for(let c=0;c<t.length;c+=1)r=r*31+t.charCodeAt(c)|0;(s!==this.mood||n!==this.hue)&&(this.mood=s,this.hue=n,this.rnd=Ts(r),this.step=0)}tick(){if(this.ctx===null||this.bgmGain===null||this.muted)return;const t=u0(this.hue,this.mood),n=this.step%8,i=this.mood==="calm"?.35:this.mood==="tense"?.55:.75;if(this.rnd()<i){const o=Math.floor(this.rnd()*8),s=Ls(t,o);this.tone(s,this.mood==="calm"?.9:.45,.06,this.mood==="calm"?"sine":"triangle",this.bgmGain)}n===0&&this.pad(Ls(t,0),this.mood==="calm"?6.4:3.2),this.mood==="panic"&&(n===0||n===4)&&(this.tone(52,.14,.16,"sine",this.bgmGain),this.tone(52,.12,.12,"sine",this.bgmGain,.18)),this.step+=1}sfx(t){if(!(this.ctx===null||this.sfxGain===null||this.muted))switch(t){case"click":this.tone(880,.06,.1,"sine",this.sfxGain);break;case"stamp":this.tone(85,.22,.28,"sine",this.sfxGain),this.tone(220,.12,.18,"triangle",this.sfxGain,.01),this.tone(580,.06,.1,"sine",this.sfxGain,.02);break;case"decision":this.tone(660,.05,.12,"sine",this.sfxGain),this.tone(990,.09,.14,"triangle",this.sfxGain,.02);break;case"drawer":this.tone(440,.08,.06,"triangle",this.sfxGain),this.tone(554,.1,.05,"sine",this.sfxGain,.04);break;case"flash":this.tone(880,.06,.1,"sine",this.sfxGain),this.tone(1320,.12,.12,"sine",this.sfxGain,.04),this.tone(1760,.16,.1,"sine",this.sfxGain,.08);break;case"options":this.tone(523,.08,.09,"sine",this.sfxGain),this.tone(784,.1,.09,"sine",this.sfxGain,.07);break;case"tick":this.tone(1245,.04,.07,"square",this.sfxGain);break;case"ending":{const n=this.sfxGain;n!==null&&[523,659,784,1047].forEach((i,o)=>this.tone(i,.5,.08,"sine",n,o*.13));break}case"bad":{const n=this.sfxGain;n!==null&&[330,294,262,196].forEach((i,o)=>this.tone(i,.35,.09,"triangle",n,o*.15));break}}}startLoop(){if(this.bgmTimer!==null)return;const t=800;typeof setInterval=="function"&&(this.bgmTimer=setInterval(()=>this.tick(),t))}stopLoop(){this.bgmTimer!==void 0&&this.bgmTimer!==null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}}const ye=new p0,d0={key:0,class:"nameplate"},_0={class:"np-name"},f0={class:"textbox"},g0={class:"text"},m0={key:0,class:"next-indicator"},v0=at({__name:"StoryBox",props:{speaker:{},text:{},kind:{},autoActive:{type:Boolean,default:!1},instant:{type:Boolean,default:!1}},emits:["advance","openLog","toggleAuto","skip","hideUi"],setup(e,{emit:t}){const n=e,i=t,o=ve.ui,s=te(()=>n.speaker&&n.speaker!=="null"?Po(n.speaker):""),r=te(()=>n.speaker?ni(n.speaker):220),c=ee(""),a=te(()=>c.value.length>=n.text.length);let u;function l(g){if(c.value="",u!==void 0&&clearInterval(u),n.instant||typeof setInterval!="function"){c.value=g;return}let A=0;u=setInterval(()=>{A+=2,c.value=g.slice(0,A),A>=g.length&&u!==void 0&&(clearInterval(u),u=void 0)},26)}Se(()=>n.text,g=>l(g),{immediate:!0});function _(){ye.sfx("click"),a.value?i("advance"):(c.value=n.text,u!==void 0&&(clearInterval(u),u=void 0))}function v(g){var M,z;const A=(z=(M=g.target)==null?void 0:M.tagName)==null?void 0:z.toLowerCase();A==="input"||A==="textarea"||(g.key===" "||g.key==="Enter"?(g.preventDefault(),_()):g.key==="l"||g.key==="L"?(g.preventDefault(),i("openLog")):g.key==="a"||g.key==="A"?(g.preventDefault(),i("toggleAuto")):(g.key==="h"||g.key==="H")&&(g.preventDefault(),i("hideUi")))}return nn(()=>{typeof window<"u"&&window.addEventListener("keydown",v)}),jt(()=>{u!==void 0&&clearInterval(u),typeof window<"u"&&window.removeEventListener("keydown",v)}),(g,A)=>(R(),F("div",{class:me(["gal-message-window",e.kind]),style:Be({"--h":r.value}),onClick:_},[e.kind==="dialogue"&&s.value?(R(),F("div",d0,[A[5]||(A[5]=f("span",{class:"np-dot"},null,-1)),f("span",_0,P(s.value),1)])):ne("",!0),f("div",f0,[f("p",g0,P(c.value),1),a.value?(R(),F("span",m0,"▼")):ne("",!0)]),f("div",{class:"quick-bar",onClick:A[4]||(A[4]=Ve(()=>{},["stop"]))},[f("button",{class:"qb-btn",onClick:A[0]||(A[0]=M=>g.$emit("openLog"))},[A[6]||(A[6]=f("i",{class:"qb-icon"},"📜",-1)),bt(" "+P(h(o).btnLog),1)]),f("button",{class:me(["qb-btn",{active:e.autoActive}]),onClick:A[1]||(A[1]=M=>g.$emit("toggleAuto"))},[A[7]||(A[7]=f("i",{class:"qb-icon"},"⚡",-1)),bt(" "+P(h(o).btnAuto),1)],2),f("button",{class:"qb-btn",onClick:A[2]||(A[2]=M=>g.$emit("skip"))},[A[8]||(A[8]=f("i",{class:"qb-icon"},"⏩",-1)),bt(" "+P(h(o).btnSkip),1)]),f("button",{class:"qb-btn",onClick:A[3]||(A[3]=M=>g.$emit("hideUi"))},[A[9]||(A[9]=f("i",{class:"qb-icon"},"👁",-1)),bt(" "+P(h(o).btnHide),1)])])],6))}}),Hi=xt(v0,[["__scopeId","data-v-670c0f2a"]]),h0={key:0,class:"duel-strike-flash","aria-hidden":"true"},x0={class:"duel-blades-container"},k0=["disabled","onClick"],y0={class:"opt-content"},L0={class:"opt-text"},T0={class:"ribbon-badges"},b0={key:1,class:"opt-tag breath"},A0={key:2,class:"opt-tag warn"},w0={key:3,class:"opt-tag cost"},O0={class:"duel-anchored-box"},P0={class:"gauge-track"},R0=["aria-label"],S0={class:"duel-context-body"},E0={class:"prompt-row"},I0={class:"duel-badge"},C0={class:"duel-title"},$0={key:0,class:"scene-prompt"},M0={class:"resume-text"},N0=at({__name:"ChoiceLayer",props:{options:{},timer:{},timeoutOptionId:{},prompt:{}},emits:["choose","openLog","timeout"],setup(e,{expose:t,emit:n}){const i=e,o=n,s=ve.ui,r=te(()=>i.prompt??""),c=ee(!1),a=ee(null),u=ee(!1),l=ee(!1),_=ee(!1);Se(()=>i.options,()=>{var j,D;c.value=!1,a.value=null,u.value=!1,l.value=!1,_.value=!1,(D=(j=de.value)==null?void 0:j.scrollTo)==null||D.call(j,{top:0})});function v(j){c.value||u.value||(c.value=!0,a.value=j.id,ye.sfx("stamp"),ye.sfx("decision"),Q(),l.value=!0,_.value=!0,setTimeout(()=>{l.value=!1,_.value=!1},280),o("choose",j.id))}const g=ee(i.timer),A=ee(i.timer||12);let M,z=!1,J;const U=te(()=>Math.max(0,Math.min(100,g.value/(A.value||12)*100)));function H(){if(!z&&(g.value-=1,g.value<=4&&g.value>0&&ye.sfx("tick"),g.value<=0&&(Q(),!c.value))){c.value=!0;const j=i.options.find(D=>D.id===i.timeoutOptionId);j!==void 0&&(o("timeout",j.text),o("choose",j.id))}}function w(){Q(),typeof setInterval=="function"&&(M=setInterval(H,1e3))}function Q(){M!==void 0&&(clearInterval(M),M=void 0)}function ae(){z=!0}function ke(j=!1){j?(z=!1,u.value=!1):u.value=!0}function ge(){u.value=!1,z=!1,ye.sfx("click")}t({pause:ae,resume:ke});function $(j){var ie,T;if(c.value||z||u.value)return;const D=(T=(ie=j.target)==null?void 0:ie.tagName)==null?void 0:T.toLowerCase();if(D==="input"||D==="textarea")return;const B=parseInt(j.key,10);if(!isNaN(B)&&B>=1&&B<=i.options.length){const C=i.options[B-1];C&&(j.preventDefault(),v(C))}}nn(()=>{w(),J=()=>{z=document.hidden},document.addEventListener("visibilitychange",J),typeof window<"u"&&window.addEventListener("keydown",$)}),jt(()=>{Q(),document.removeEventListener("visibilitychange",J),typeof window<"u"&&window.removeEventListener("keydown",$)}),Se(()=>i.timer,j=>{g.value=j,A.value=j||12});function I(j){return j.unlockBelow!==void 0||j.tag==="PHYSICAL"}function V(j){return j.tag==="BREATH"}function S(j){const D=j.initiative??0;return D>=2?D-1:0}function Z(j){return j.tag==="BREATH"?{label:s.stanceBreath??"",icon:"🧘",kind:"breath"}:I(j)?{label:s.stanceImpulse??"",icon:"⚠️",kind:"impulse"}:{label:"",icon:"",kind:null}}const de=ee(null);return(j,D)=>(R(),F("div",{class:me(["choice-layer confrontation-duel",{"duel-shaking":_.value,"clash-panic":g.value<=4}])},[l.value?(R(),F("div",h0)):ne("",!0),f("div",{ref_key:"listEl",ref:de,class:"duel-stage scroll"},[f("div",x0,[(R(!0),F(Te,null,wt(e.options,B=>(R(),F("button",{key:B.id,type:"button",class:me(["opt duel-blade galgame-ribbon",{impulse:I(B),breath:V(B),selected:a.value===B.id}]),disabled:c.value,onClick:ie=>v(B)},[D[3]||(D[3]=f("span",{class:"ribbon-pointer","aria-hidden":"true"},"◆",-1)),f("div",y0,[D[1]||(D[1]=f("span",{class:"blade-quote-mark left-quote","aria-hidden":"true"},"“",-1)),f("span",L0,P(B.text),1),D[2]||(D[2]=f("span",{class:"blade-quote-mark right-quote","aria-hidden":"true"},"”",-1))]),f("div",T0,[Z(B).kind?(R(),F("span",{key:0,class:me(["stance-badge",Z(B).kind])},P(Z(B).icon)+" "+P(Z(B).label),3)):ne("",!0),V(B)?(R(),F("span",b0,"🌿 +"+P(h(s).gainBreath),1)):I(B)?(R(),F("span",A0,"⚠️ "+P(h(s).dangerImpulse),1)):S(B)>0?(R(),F("span",w0,"⚡️ "+P(h(s).costComposure)+" -"+P(S(B)),1)):ne("",!0)]),D[4]||(D[4]=f("div",{class:"blade-glow","aria-hidden":"true"},null,-1))],10,k0))),128))])],512),f("div",O0,[f("div",{class:me(["duel-tension-gauge",{panic:g.value<=4}])},[f("div",P0,[f("div",{class:"gauge-fill",style:Be({width:`${U.value}%`})},null,4)]),f("div",{class:me(["time",{panic:g.value<=4}]),role:"timer","aria-label":`剩余 ${g.value} 秒`},[f("span",null,P(g.value),1)],10,R0)],2),f("div",S0,[f("div",E0,[f("div",I0,[D[5]||(D[5]=f("span",{class:"duel-dot"},null,-1)),f("span",C0,P(h(s).duelHeader),1)]),f("button",{type:"button",class:"choice-log-btn",onClick:D[0]||(D[0]=B=>j.$emit("openLog"))}," 📜 "+P(h(s).btnLog),1)]),r.value?(R(),F("p",$0,P(r.value),1)):ne("",!0)])]),u.value?(R(),F("div",{key:1,class:"resume-shield",onClick:Ve(ge,["stop"])},[f("button",{type:"button",class:"resume-btn",onClick:Ve(ge,["stop"])},[D[6]||(D[6]=f("span",{class:"resume-icon"},"▶",-1)),f("span",M0,P(h(s).resumePrompt||"继续作答"),1)])])):ne("",!0)],2))}}),F0=xt(N0,[["__scopeId","data-v-5293e52d"]]),D0=""+new URL("rank_A-Buk7knaJ.mp4",import.meta.url).href,H0=""+new URL("rank_B-MEHXL8TX.mp4",import.meta.url).href,B0=""+new URL("rank_C-DOkhQSQI.mp4",import.meta.url).href,G0=""+new URL("rank_F-DPh74h1I.mp4",import.meta.url).href,V0=""+new URL("rank_S-BXJbetyP.mp4",import.meta.url).href,j0=[{id:"card_law_L01",level:"L01",body:`【公开口径实录】本关不提供律师意见

取材事件仍在司法程序中，争议未平。以下是截至发稿，公开报道中出现过的口径——
本作只做汇编，不做裁断：

■ 完整监控（已公开）
　玩具枪、「让一让」、绊了一下、左手擦过，不足一秒；
　此后抓拽持续约一分五十秒，孩子颈部留下勒痕。

■ 律师公开发声（多家媒体报道）
　「男童行为不构成性骚扰」——无民事行为能力，无主观故意；
　「（女子）拉扯行为超出合理限度」。

■ 人民网锐评
　《四岁男童的肢体接触，不是制造流量漩涡的素材》——
　质疑视频「被摸臀」等措辞有引导舆论之嫌。

■ 新华社评论
　「一场被放大的公共冲突」。

■ 男童父亲公开表态
　愿意为孩子的无心之失道歉；「不为索赔，只求事实定性」；
　胜诉赔偿将全额捐赠。

■ 涉事女子公开回应
　三次调解未达成和解；因情绪问题两次送医；
　面对「蹭流量」质疑，回应「我是干自媒体的，当然需要（关注）」。

■ 网友主流意见（本关评级依据）
　「四岁的无心之失，当场一句真诚的道歉，五分钟就能解决」——
　最高赞评论的共同点：最好的结局，是它根本不该成为「事件」；
　反诉被普遍认可为正当，但也被普遍认为「赢的是代价」。

——
事件仍在发展。以上口径可能随司法程序更新。
本汇编不构成法律意见，不代表本作立场；
两个当事人各自的处境，都值得被程序公正地对待。

（本内容为情景演绎与公开报道汇编。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"HIGH",reviewStatus:"PENDING",reviewedBy:"",reviewedAt:"",citations:[]},{id:"card_law_L02",level:"L02",body:`【沈骊说】

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

（本内容为情景演绎，不构成法律意见。具体个案请咨询执业律师。）`,disclaimer:"ui.lawyer.disclaimer",riskLevel:"MAX",reviewStatus:"APPROVED",reviewedBy:"外部执业律师（所有者 2026-08-28 转达通过）",reviewedAt:"2026-08-28",citations:[]}],U0=["data-rank"],Y0=["src"],K0={class:"stamp"},q0={key:0,class:"finale-badge"},W0={class:"rk"},z0={class:"word"},X0={class:"title"},J0={class:"script"},Q0={class:"lb-left"},Z0={class:"lb-badge"},eg={class:"lb-title"},tg={class:"lb-btn"},ng={class:"meters-card"},ig={class:"mc-title"},og={class:"bars"},sg={class:"lbl"},rg={class:"track"},cg={class:"num"},ag={key:1,class:"teaching-hint"},lg={class:"th-text"},ug={class:"rt-mark"},pg={class:"rt-text"},dg={key:3,class:"gap-diagnosis"},_g={class:"gd-title"},fg={class:"disclaimer"},gg={class:"acts"},mg={key:0,class:"next-hook"},vg={class:"ld-head"},hg={class:"ld-title-group"},xg={class:"ld-badge"},kg={class:"ld-title"},yg={class:"ld-body"},Lg={class:"ld-text"},Tg={class:"ld-foot"},bg=at({__name:"EndingCard",props:{ending:{},state:{},levelId:{default:""},finaleTier:{default:null}},emits:["restart","next"],setup(e,{emit:t}){const n=e,i=ee(1),o=ee(!1),s=ee(!1),r=ve.ui,c=te(()=>["L01","L02","L03","L04","L05"].includes(n.levelId)),a=te(()=>c.value&&n.ending.rank!=="S"&&n.ending.rank!=="A"&&n.state.composure<30),u=te(()=>r["settleStamp"+n.ending.rank]??""),l=te(()=>{if(!n.levelId)return null;const I=Object.entries(Object.assign({"../../../content/levels/L01.json":rc,"../../../content/levels/L02.json":vc,"../../../content/levels/L03.json":Pc,"../../../content/levels/L04.json":Hc,"../../../content/levels/L05.json":Xc,"../../../content/levels/L06.json":ca,"../../../content/levels/L07.json":ha,"../../../content/levels/L08.json":Ra,"../../../content/levels/L09.json":Ba,"../../../content/levels/L10.json":Ja,"../../../content/levels/L11.json":al,"../../../content/levels/L12.json":xl,"../../../content/levels/L13.json":Sl,"../../../content/levels/L14.json":Gl,"../../../content/levels/L15.json":Ql,"../../../content/levels/L16.json":lu,"../../../content/levels/L17.json":ku,"../../../content/levels/L18.json":Eu,"../../../content/levels/L19.json":Vu,"../../../content/levels/L20.json":Zu})).find(([V])=>V.endsWith("/"+n.levelId+".json"));return(I==null?void 0:I[1])??null}),_=te(()=>{var $,I,V;return((V=(I=($=l.value)==null?void 0:$.endings)==null?void 0:I.find(S=>S.rank==="S"))==null?void 0:V.title)??null}),v=te(()=>n.ending.rank!=="S"&&_.value!==null),g=te(()=>{var de,j;if(n.ending.rank==="S"||l.value===null)return[];const $=(de=l.value.endings)==null?void 0:de.find(D=>D.rank==="S"),V=[...(($==null?void 0:$.condition)??"").matchAll(/(\w+)\s*(>=|<=)\s*(\d+)/g)],S=ve.meters,Z=[];for(const[,D,B,ie]of V){const T=Number(ie);let C;if(D==="dOpinion")C=n.state.opinion-(((j=l.value.initState)==null?void 0:j.opinion)??0);else if(D==="evidence"||D==="opinion"||D==="composure"||D==="risk")C=n.state[D];else continue;const _e=S[D==="dOpinion"?"opinion":D]??D;if(B===">="&&C<T)Z.push({line:(r.gapNeed??"").replace("{name}",_e).replace("{n}",String(T-C)),gap:T-C});else if(B==="<="&&C>T){const q=C-T;Z.push({line:(r.gapOver??"").replace("{name}",_e).replace("{n}",String(q)),gap:q})}}return Z.sort((D,B)=>B.gap-D.gap),Z.slice(0,2).map(D=>D.line)}),A=te(()=>{if(!n.levelId||n.levelId.startsWith("L20"))return null;const $=Number(n.levelId.slice(1));return ve.ui["hookL"+String($+1).padStart(2,"0")]??null}),M=te(()=>({TRUE:r.finaleTrue??"",WIN:r.finaleWin??"",COSTLY:r.finaleCostly??""})),z=te(()=>n.levelId==="L20"&&n.finaleTier!==null?M.value[n.finaleTier]??"":""),J=te(()=>{const I=Object.entries(Object.assign({"../../../content/art/endings/rank_A.mp4":D0,"../../../content/art/endings/rank_B.mp4":H0,"../../../content/art/endings/rank_C.mp4":B0,"../../../content/art/endings/rank_F.mp4":G0,"../../../content/art/endings/rank_S.mp4":V0})).find(([V])=>V.endsWith("/rank_"+n.ending.rank+".mp4"));return(I==null?void 0:I[1])??""}),U=te(()=>{const $=j0;if(n.levelId){const I=$.find(V=>V.level===n.levelId);if(I!==void 0)return I}return $.find(I=>n.ending.id.includes(I.level))??$[0]});let H,w;function Q(){ye.sfx("stamp"),n.ending.rank==="S"||n.ending.rank==="A"?ye.sfx("ending"):n.ending.rank==="F"&&ye.sfx("bad")}nn(()=>{if(typeof setTimeout!="function"){i.value=3;return}H=setTimeout(()=>{i.value=2,Q()},1200),w=setTimeout(()=>{i.value=3},2600)}),jt(()=>{H!==void 0&&clearTimeout(H),w!==void 0&&clearTimeout(w)});function ae(){i.value<2&&Q(),H!==void 0&&(clearTimeout(H),H=void 0),w!==void 0&&(clearTimeout(w),w=void 0),i.value=3}function ke($){$.stopPropagation(),ye.sfx("drawer"),s.value=!0}function ge($){$.stopPropagation(),ye.sfx("click"),s.value=!1}return($,I)=>(R(),F("div",{class:"cinema","data-rank":e.ending.rank,onClick:ae},[J.value?(R(),F("video",{key:0,class:"bgvid",src:J.value,autoplay:"",muted:"",loop:"",playsinline:"",onCanplay:I[0]||(I[0]=V=>o.value=!0)},null,40,Y0)):ne("",!0),f("div",{class:me(["dim",{deeper:i.value>=2}])},null,2),f("div",{class:me(["stamp-wrap",{show:i.value>=2}])},[f("div",K0,[z.value?(R(),F("span",q0,P(z.value),1)):ne("",!0),f("span",W0,P(e.ending.rank),1),f("span",z0,P(u.value),1)])],2),f("div",{class:me(["sheet",{show:i.value>=3}])},[f("h2",X0,P(e.ending.title),1),f("p",J0,P(e.ending.script),1),U.value?(R(),F("div",{key:0,class:"lawyer-bar",onClick:Ve(ke,["stop"])},[f("div",Q0,[f("span",Z0,P(h(r).lawyerCardBadge),1),f("span",eg,P(h(r).lawyerCardTitle),1)]),f("span",tg,[bt(P(h(r).lawyerCardBtn)+" ",1),I[5]||(I[5]=f("i",{class:"arr"},"›",-1))])])):ne("",!0),f("div",ng,[f("div",ig,P(h(r).settleMetersTitle),1),f("div",og,[(R(),F(Te,null,wt(["evidence","opinion","composure","risk"],V=>f("div",{key:V,class:"bar"},[f("span",sg,P(h(ve).meters[V]),1),f("span",rg,[f("i",{style:Be({width:Math.min(100,e.state[V])+"%"}),class:me(V)},null,6)]),f("span",cg,P(e.state[V]),1)])),64))])]),a.value?(R(),F("div",ag,[I[6]||(I[6]=f("span",{class:"th-bulb"},"💡",-1)),f("span",lg,P(h(r).teachingHintComposure),1)])):ne("",!0),v.value?(R(),F("button",{key:2,class:"replay-tease",onClick:I[1]||(I[1]=Ve(V=>$.$emit("restart"),["stop"]))},[f("span",ug,P(h(r).endingTeaseS),1),f("span",pg,"《"+P(_.value)+"》 · "+P(h(r).endingTeaseHint),1),I[7]||(I[7]=f("span",{class:"rt-arr"},"›",-1))])):ne("",!0),g.value.length>0?(R(),F("div",dg,[f("span",_g,P(h(r).gapTitle),1),(R(!0),F(Te,null,wt(g.value,(V,S)=>(R(),F("span",{key:S,class:"gd-line"},P(V),1))),128))])):ne("",!0),f("p",fg,P(h(ve).ui.disclaimer),1),f("div",gg,[f("button",{onClick:I[2]||(I[2]=Ve(V=>$.$emit("restart"),["stop"]))},P(h(r).settleReplay),1),f("button",{class:"primary",onClick:I[3]||(I[3]=Ve(V=>$.$emit("next"),["stop"]))},[f("span",null,P(h(r).settleNext),1),A.value?(R(),F("span",mg,P(A.value),1)):ne("",!0)])])],2),s.value&&U.value?(R(),F("div",{key:1,class:"lawyer-mask",onClick:Ve(ge,["stop"])},[f("div",{class:"lawyer-drawer",onClick:I[4]||(I[4]=Ve(()=>{},["stop"]))},[f("header",vg,[f("div",hg,[f("span",xg,P(h(r).lawyerCardBadge),1),f("span",kg,P(h(r).lawyerModalHeader),1)]),f("button",{class:"ld-close",onClick:Ve(ge,["stop"])},"✕")]),f("div",yg,[f("div",Lg,P(U.value.body),1)]),f("footer",Tg,[f("button",{class:"ld-ok",onClick:Ve(ge,["stop"])},P(h(r).lawyerModalClose),1)])])])):ne("",!0)],8,U0))}}),Ag=xt(bg,[["__scopeId","data-v-c28401a0"]]),wg={class:"select"},Og={class:"sel-header"},Pg={class:"header-top"},Rg={class:"app-title"},Sg={class:"tagline"},Eg={class:"hero-cta-wrap"},Ig={class:"cta-left"},Cg={class:"cta-txt-group"},$g={class:"cta-action"},Mg={class:"cta-sub"},Ng={class:"list"},Fg={key:0,class:"act-title"},Dg={class:"act-levels"},Hg=["onClick"],Bg={class:"tid"},Gg={class:"gal-count"},Vg={class:"ttitle"},jg={class:"foot"},Ug=at({__name:"LevelSelect",props:{levels:{},best:{}},emits:["pick"],setup(e){const t=e,n=ve.ui,i=l=>l===void 0?"":"r"+l,o=new Map(At.map(l=>[l.id,l.endings.length])),s=l=>(n.endingsCount??"").replace("{n}",String(t0(l))).replace("{m}",String(o.get(l)??0)),r=te(()=>{var l;for(const _ of t.levels)if(!t.best[_.id])return _.id;return((l=t.levels[0])==null?void 0:l.id)??"L01"}),c=te(()=>Object.keys(t.best).length>0),a=te(()=>n["hook"+r.value]??n.appTagline),u=te(()=>{const l={};for(const _ of t.levels)(l[_.act]??(l[_.act]=[])).push(_);return Object.entries(l).map(([_,v])=>({act:Number(_),name:ve.actNames[_]??"",levels:v}))});return(l,_)=>(R(),F("div",wg,[f("header",Og,[f("div",Pg,[f("h1",Rg,P(h(ve).appTitle),1)]),f("p",Sg,P(h(n).appTagline),1),f("div",Eg,[f("button",{class:"hero-cta",onClick:_[0]||(_[0]=v=>l.$emit("pick",r.value))},[f("div",Ig,[_[1]||(_[1]=f("span",{class:"play-btn"},"▶",-1)),f("div",Cg,[f("span",$g,P(c.value?h(n).continueAdventure:h(n).startAdventure),1),f("span",Mg,P(a.value),1)])]),_[2]||(_[2]=f("span",{class:"cta-arrow"},"›",-1))])])]),f("div",Ng,[(R(!0),F(Te,null,wt(u.value,v=>(R(),F("div",{key:v.act,class:"act-section"},[v.name?(R(),F("div",Fg,P(v.name),1)):ne("",!0),f("div",Dg,[(R(!0),F(Te,null,wt(v.levels,g=>(R(),F("button",{key:g.id,class:"level-btn",onClick:A=>l.$emit("pick",g.id)},[f("span",Bg,[bt(P(g.id),1),f("i",Gg,P(s(g.id)),1)]),f("span",Vg,P(g.title),1),f("span",{class:me(["badge",i(e.best[g.id])])},P(e.best[g.id]??"·"),3)],8,Hg))),128))])]))),128))]),f("footer",jg,P(h(ve).ui.disclaimer),1)]))}}),Yg=xt(Ug,[["__scopeId","data-v-fb72a828"]]),Kg=""+new URL("L01-DW1w2hpH.png",import.meta.url).href,qg=""+new URL("L02-Cgrrfiit.png",import.meta.url).href,Wg=""+new URL("L03-Dhb-92UY.png",import.meta.url).href,zg=""+new URL("L04-Dxn6iz_R.png",import.meta.url).href,Xg=""+new URL("L05-BCX3gD5-.png",import.meta.url).href,Jg=""+new URL("L06-DPfiJfY4.png",import.meta.url).href,Qg=""+new URL("L07-DgpRWPjk.png",import.meta.url).href,Zg=""+new URL("L08-HGz_P2cJ.png",import.meta.url).href,em=""+new URL("L09-VpgvEvrb.png",import.meta.url).href,tm=""+new URL("L10-D_mOdB4H.png",import.meta.url).href,nm=""+new URL("L11-BXLJJDeb.png",import.meta.url).href,im=""+new URL("L12-DemYAPsM.png",import.meta.url).href,om=""+new URL("L13-Dn-DLBYO.png",import.meta.url).href,sm=""+new URL("L14-BLDD-heh.png",import.meta.url).href,rm=""+new URL("L15-BVYsTDdi.png",import.meta.url).href,cm=""+new URL("L16-kHk4EBk-.png",import.meta.url).href,am=""+new URL("L17-BomGMZbR.png",import.meta.url).href,lm=""+new URL("L18-B2bLjWIc.png",import.meta.url).href,um=""+new URL("L19-DHpwxvAB.png",import.meta.url).href,pm=""+new URL("L20-CyAYX9HG.png",import.meta.url).href,dm=["src"],_m={key:1,class:"photo-shade"},fm={key:2,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},gm={key:3,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},mm={key:4,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},vm={key:5,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},hm={key:6,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},xm={key:7,class:"art",viewBox:"0 0 400 600",preserveAspectRatio:"xMidYMid slice"},km={class:"tag"},ym=at({__name:"SceneBackdrop",props:{levelId:{},pressure:{}},setup(e){const t=e,n=Object.assign({"../../../content/art/scenes/L01.png":Kg,"../../../content/art/scenes/L02.png":qg,"../../../content/art/scenes/L03.png":Wg,"../../../content/art/scenes/L04.png":zg,"../../../content/art/scenes/L05.png":Xg,"../../../content/art/scenes/L06.png":Jg,"../../../content/art/scenes/L07.png":Qg,"../../../content/art/scenes/L08.png":Zg,"../../../content/art/scenes/L09.png":em,"../../../content/art/scenes/L10.png":tm,"../../../content/art/scenes/L11.png":nm,"../../../content/art/scenes/L12.png":im,"../../../content/art/scenes/L13.png":om,"../../../content/art/scenes/L14.png":sm,"../../../content/art/scenes/L15.png":rm,"../../../content/art/scenes/L16.png":cm,"../../../content/art/scenes/L17.png":am,"../../../content/art/scenes/L18.png":lm,"../../../content/art/scenes/L19.png":um,"../../../content/art/scenes/L20.png":pm}),i=ee("");Se(()=>t.levelId,c=>{const a=Object.entries(n).find(([u])=>u.endsWith("/"+c+".png"));i.value=a!==void 0?a[1]:""},{immediate:!0});const o=te(()=>ep(t.levelId)),s=te(()=>{const c=o.value.hue,a=8+Math.round(t.pressure*.8);return{background:`radial-gradient(120% 70% at 50% 18%, hsl(${c} 32% ${a+10}%) 0%, hsl(${c} 38% ${a}%) 45%, hsl(${c} 45% ${Math.max(4,a-4)}%) 100%)`}}),r=te(()=>o.value.motif);return(c,a)=>(R(),F("div",{class:"backdrop",style:Be(s.value)},[i.value?(R(),F("img",{key:0,class:"photo",src:i.value,alt:""},null,8,dm)):ne("",!0),i.value?(R(),F("div",_m)):ne("",!0),r.value==="subway"?(R(),F("svg",fm,[...a[0]||(a[0]=[Si('<rect x="40" y="80" width="320" height="180" rx="14" class="win" data-v-b08529d1></rect><rect x="52" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="132" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="212" y="92" width="70" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="292" y="92" width="56" height="156" rx="4" class="win2" data-v-b08529d1></rect><rect x="0" y="300" width="400" height="10" class="rail" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',7)])])):r.value==="elevator"?(R(),F("svg",gm,[...a[1]||(a[1]=[f("rect",{x:"120",y:"60",width:"160",height:"440",rx:"6",class:"door"},null,-1),f("line",{x1:"200",y1:"60",x2:"200",y2:"500",class:"seam"},null,-1),f("circle",{cx:"200",cy:"530",r:"12",class:"lamp"},null,-1),f("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="street"?(R(),F("svg",mm,[...a[2]||(a[2]=[Si('<line x1="60" y1="0" x2="60" y2="380" class="pole" data-v-b08529d1></line><rect x="48" y="380" width="24" height="8" rx="3" class="lamp" data-v-b08529d1></rect><rect x="0" y="430" width="400" height="6" class="rail" data-v-b08529d1></rect><rect x="0" y="470" width="400" height="4" class="rail dim" data-v-b08529d1></rect><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):r.value==="court"?(R(),F("svg",vm,[...a[3]||(a[3]=[f("rect",{x:"80",y:"120",width:"240",height:"90",rx:"4",class:"win"},null,-1),f("rect",{x:"100",y:"300",width:"200",height:"14",rx:"3",class:"desk"},null,-1),f("rect",{x:"60",y:"380",width:"280",height:"10",rx:"3",class:"desk dim"},null,-1),f("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])):r.value==="studio"?(R(),F("svg",hm,[...a[4]||(a[4]=[Si('<rect x="40" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><rect x="230" y="90" width="130" height="80" rx="6" class="win" data-v-b08529d1></rect><circle cx="200" cy="260" r="8" class="lamp" data-v-b08529d1></circle><line x1="200" y1="0" x2="200" y2="252" class="pole thin" data-v-b08529d1></line><line x1="0" y1="560" x2="400" y2="560" class="floor" data-v-b08529d1></line>',5)])])):(R(),F("svg",xm,[...a[5]||(a[5]=[f("rect",{x:"50",y:"110",width:"140",height:"100",rx:"6",class:"win"},null,-1),f("rect",{x:"220",y:"110",width:"130",height:"70",rx:"6",class:"win dim"},null,-1),f("line",{x1:"0",y1:"560",x2:"400",y2:"560",class:"floor"},null,-1)])])),f("div",km,P(o.value.label),1)],4))}}),Lm=xt(ym,[["__scopeId","data-v-b08529d1"]]),Tm={class:"danmaku","aria-hidden":"true"},bm=at({__name:"DanmakuLayer",props:{pressure:{},active:{type:Boolean}},setup(e){const t=e,n=ee([]);let i=0,o;function s(){return t.pressure>=4?ve.danmaku.hot:t.pressure>=3?ve.danmaku.tense:ve.danmaku.calm}function r(){if(!t.active)return;const c=s();if(c.length===0)return;const a=c[Math.floor(Math.random()*c.length)]??"";n.value.push({id:i+=1,text:a,lane:Math.floor(Math.random()*4),speed:t.pressure>=4?7+Math.random()*3:10+Math.random()*4,bold:Math.random()<.25}),n.value.length>14&&(n.value=n.value.slice(-14))}return typeof setInterval=="function"&&(o=setInterval(r,t.pressure>=4?900:1800),Se(()=>t.pressure,()=>{})),jt(()=>{o!==void 0&&clearInterval(o)}),(c,a)=>(R(),F("div",Tm,[we(O_,{name:"fly"},{default:yo(()=>[(R(!0),F(Te,null,wt(n.value,u=>(R(),F("span",{key:u.id,class:me(["line",{bold:u.bold}]),style:Be({top:12+u.lane*34+"px","--dur":u.speed+"s"})},P(u.text),7))),128))]),_:1})]))}}),Am=xt(bm,[["__scopeId","data-v-55cd0013"]]),wm=""+new URL("he_song-DAGlX_4O.png",import.meta.url).href,Om=""+new URL("hero-BAfbz0Vs.png",import.meta.url).href,Pm=""+new URL("npc_l01_woman-DbGv3OTN.png",import.meta.url).href,Rm=""+new URL("npc_l02_woman-qXhWvPKu.png",import.meta.url).href,Sm=""+new URL("npc_l03_daughter-Dt2TiO8f.png",import.meta.url).href,Em=""+new URL("npc_l03_woman-BQ3wIsYH.png",import.meta.url).href,Im=""+new URL("npc_l04_woman-CZQbIvDG.png",import.meta.url).href,Cm=""+new URL("npc_l05_manager-Ce6F9DQj.png",import.meta.url).href,$m=""+new URL("npc_l05_woman-BXLOsOGn.png",import.meta.url).href,Mm=""+new URL("npc_l06_girlfriend-CrncpSA3.png",import.meta.url).href,Nm=""+new URL("npc_l06_mother-BJuBbFLU.png",import.meta.url).href,Fm=""+new URL("npc_l07_ex-CEJAEgFV.png",import.meta.url).href,Dm=""+new URL("npc_l08_child-Bm0Rde6F.png",import.meta.url).href,Hm=""+new URL("npc_l08_mother-tu98VogT.png",import.meta.url).href,Bm=""+new URL("npc_l08_wife-Cy9DZe9m.png",import.meta.url).href,Gm=""+new URL("npc_l09_wife-CJUlJISq.png",import.meta.url).href,Vm=""+new URL("npc_l10_exwife-D0NJtWQK.png",import.meta.url).href,jm=""+new URL("npc_l11_hr-Dqx_GpDt.png",import.meta.url).href,Um=""+new URL("npc_l12_boss-nYTyR_X5.png",import.meta.url).href,Ym=""+new URL("npc_l12_colleague-BD3ntBZW.png",import.meta.url).href,Km=""+new URL("npc_l13_hr-Dovjb9V8.png",import.meta.url).href,qm=""+new URL("npc_l14_director-B-efKLNg.png",import.meta.url).href,Wm=""+new URL("npc_l14_hr-DRiqQqX2.png",import.meta.url).href,zm=""+new URL("npc_l15_broker-CqY8iI1Q.png",import.meta.url).href,Xm=""+new URL("npc_l15_hr-CSF8zzWx.png",import.meta.url).href,Jm=""+new URL("npc_l16_account-D825uOC6.png",import.meta.url).href,Qm=""+new URL("npc_l17_father-jYHQ9zlG.png",import.meta.url).href,Zm=""+new URL("npc_l17_hr-D3pAIKo4.png",import.meta.url).href,e1=""+new URL("npc_l18_streamer-CYlpG6aq.png",import.meta.url).href,t1=""+new URL("npc_l19_moderator-CoZr2C0k.png",import.meta.url).href,n1=""+new URL("npc_l19_pr-Do-3PPx1.png",import.meta.url).href,i1=""+new URL("officer_lin-Bduk5y-m.png",import.meta.url).href,o1=""+new URL("shen_li-Bd_DLpmj.png",import.meta.url).href,s1=""+new URL("zhou_you-DSERK5v3.png",import.meta.url).href,r1={key:0,class:"duo","aria-hidden":"true"},c1=["src"],a1=["src","alt"],l1=at({__name:"PortraitSlot",props:{speaker:{},visible:{type:Boolean},impact:{type:Boolean,default:!1}},setup(e){const t=e,n=Object.assign({"../../../content/art/characters/he_song.png":wm,"../../../content/art/characters/hero.png":Om,"../../../content/art/characters/npc_l01_woman.png":Pm,"../../../content/art/characters/npc_l02_woman.png":Rm,"../../../content/art/characters/npc_l03_daughter.png":Sm,"../../../content/art/characters/npc_l03_woman.png":Em,"../../../content/art/characters/npc_l04_woman.png":Im,"../../../content/art/characters/npc_l05_manager.png":Cm,"../../../content/art/characters/npc_l05_woman.png":$m,"../../../content/art/characters/npc_l06_girlfriend.png":Mm,"../../../content/art/characters/npc_l06_mother.png":Nm,"../../../content/art/characters/npc_l07_ex.png":Fm,"../../../content/art/characters/npc_l08_child.png":Dm,"../../../content/art/characters/npc_l08_mother.png":Hm,"../../../content/art/characters/npc_l08_wife.png":Bm,"../../../content/art/characters/npc_l09_wife.png":Gm,"../../../content/art/characters/npc_l10_exwife.png":Vm,"../../../content/art/characters/npc_l11_hr.png":jm,"../../../content/art/characters/npc_l12_boss.png":Um,"../../../content/art/characters/npc_l12_colleague.png":Ym,"../../../content/art/characters/npc_l13_hr.png":Km,"../../../content/art/characters/npc_l14_director.png":qm,"../../../content/art/characters/npc_l14_hr.png":Wm,"../../../content/art/characters/npc_l15_broker.png":zm,"../../../content/art/characters/npc_l15_hr.png":Xm,"../../../content/art/characters/npc_l16_account.png":Jm,"../../../content/art/characters/npc_l17_father.png":Qm,"../../../content/art/characters/npc_l17_hr.png":Zm,"../../../content/art/characters/npc_l18_streamer.png":e1,"../../../content/art/characters/npc_l19_moderator.png":t1,"../../../content/art/characters/npc_l19_pr.png":n1,"../../../content/art/characters/officer_lin.png":i1,"../../../content/art/characters/shen_li.png":o1,"../../../content/art/characters/zhou_you.png":s1});function i(v){if(v===null)return{url:"",ok:!1};const g=Object.entries(n).find(([A])=>A.endsWith("/"+v+".png"));return g!==void 0?{url:g[1],ok:!0}:{url:"",ok:!1}}const o=i("hero"),s=ni("hero"),r=te(()=>t.speaker===null||t.speaker==="hero"?null:t.speaker),c=te(()=>i(r.value)),a=te(()=>ni(r.value??"")),u=te(()=>r.value===null?"":Po(r.value)),l=ee(!1);Se(()=>t.speaker,()=>{l.value=!1});const _=te(()=>t.speaker==="hero");return(v,g)=>e.visible?(R(),F("div",r1,[h(o).ok?(R(),F("div",{key:0,class:me(["who hero",{talking:_.value}]),style:Be({"--h":h(s)})},[f("img",{class:"pt art",src:h(o).url,alt:""},null,8,c1)],6)):ne("",!0),r.value!==null&&c.value.ok&&!l.value?(R(),F("div",{key:1,class:me(["who guest",{talking:!0,impact:e.impact}]),style:Be({"--h":a.value})},[f("img",{class:"pt art",src:c.value.url,alt:u.value,onError:g[0]||(g[0]=A=>l.value=!0)},null,40,a1)],6)):ne("",!0)])):ne("",!0)}}),u1=xt(l1,[["__scopeId","data-v-10f0d9cf"]]),p1={class:"backlog-panel"},d1={class:"bl-header"},_1={class:"bl-title-group"},f1={class:"bl-title"},g1={key:0,class:"bl-empty"},m1={key:0,class:"bl-speaker"},v1={class:"bl-sp-name"},h1={class:"bl-text"},x1={class:"bl-footer"},k1=at({__name:"BacklogModal",props:{history:{}},emits:["close"],setup(e,{emit:t}){const n=t,i=ve.ui,o=ee(null);function s(){xo(()=>{o.value&&(o.value.scrollTop=o.value.scrollHeight)})}function r(c){c.key==="Escape"&&n("close")}return nn(()=>{s(),typeof window<"u"&&window.addEventListener("keydown",r)}),jt(()=>{typeof window<"u"&&window.removeEventListener("keydown",r)}),(c,a)=>(R(),F("div",{class:"backlog-mask",onClick:a[2]||(a[2]=Ve(u=>c.$emit("close"),["self"]))},[f("div",p1,[f("header",d1,[f("div",_1,[a[3]||(a[3]=f("span",{class:"bl-badge"},"LOG",-1)),f("h3",f1,P(h(i).backlogTitle),1)]),f("button",{class:"bl-close",onClick:a[0]||(a[0]=u=>c.$emit("close"))},"✕")]),f("div",{ref_key:"scrollRef",ref:o,class:"bl-list"},[e.history.length===0?(R(),F("div",g1,P(h(i).backlogEmpty),1)):ne("",!0),(R(!0),F(Te,null,wt(e.history,(u,l)=>(R(),F("div",{key:l,class:me(["bl-item",u.kind]),style:Be({"--h":u.speaker?h(ni)(u.speaker):220})},[u.kind==="dialogue"&&u.speaker?(R(),F("div",m1,[f("span",v1,P(h(Po)(u.speaker)),1)])):ne("",!0),f("p",h1,P(u.text),1)],6))),128))],512),f("footer",x1,[f("button",{class:"bl-confirm-btn",onClick:a[1]||(a[1]=u=>c.$emit("close"))},P(h(i).backlogClose??h(i).lawyerModalClose),1)])])]))}}),y1=xt(k1,[["__scopeId","data-v-ad553f48"]]),L1={key:0,class:"stage-strike-flash","aria-hidden":"true"},T1={key:4,class:"topbar"},b1={class:"lv-title"},A1={key:5,class:"study-entry"},w1={class:"sub"},O1=["placeholder"],P1=["disabled"],R1={key:6,class:"study-done"},S1={class:"sum"},E1={key:1,class:"story"},I1={key:10,class:"timeout-toast"},C1={class:"tt-label"},$1={class:"tt-text"},M1={name:"App"},N1=at({...M1,props:{ctx:{}},setup(e){const n=e.ctx;Se(n.event,T=>{T!==null&&T.type==="ending"&&(n.settle(),ye.sfx(T.ending.rank==="S"||T.ending.rank==="A"?"ending":"bad"),M.value!==null&&e0(M.value,T.ending.id))}),Se(n.event,T=>{var _e,q,kt;if(T===null)return;const C=ep(((_e=n.current.value)==null?void 0:_e.id)??"L01").hue;T.type==="node"?ye.scene(((q=n.current.value)==null?void 0:q.id)??"L01",C,T.node.pressure??0,n.meters.value.composure):T.type==="options"&&(ye.sfx("options"),ye.scene(((kt=n.current.value)==null?void 0:kt.id)??"L01",C,3,n.meters.value.composure))});const i=ee(0),o=ee(null),s=ee(null);Se(n.event,T=>{if(T===null){i.value=0,o.value=null,s.value=null;return}if(T.type==="node"){i.value=T.node.pressure??0;const C="speaker"in T.node?T.node.speaker:null;o.value=C!=null&&String(C)!=="null"&&String(C).trim()!==""?String(C):null,o.value!==null&&(s.value=o.value)}else T.type==="options"&&(i.value=T.options.length>0?i.value:0,o.value=null)});const r=te(()=>{const T=n.meters.value.composure;return T>=50||n.screen.value!=="level"?{opacity:0}:{opacity:(.25+(50-T)/50*.55).toFixed(2),animation:T<15?"throb 1.1s ease-in-out infinite":"none"}}),c=te(()=>n.screen.value==="level"),a=ee(""),u=te(()=>n.STUDY_LEVELS.every(T=>{try{return n.studySummary().includes(T)}catch{return!1}}));function l(){const T=n.studyExport();typeof navigator<"u"&&navigator.clipboard!==void 0&&navigator.clipboard.writeText(T);const C=new Blob([T],{type:"application/json"}),_e=document.createElement("a");_e.href=URL.createObjectURL(C),_e.download=`study-${a.value||"anon"}.json`,_e.click()}const _=ee(!1),v=te(()=>_.value?"x":"m");function g(){_.value=!_.value,ye.setMuted(_.value)}function A(){ye.unlock(),ye.startLoop()}document.addEventListener("pointerdown",A,{once:!0});const M=te(()=>n.current.value?n.current.value.id:"L01"),z=ee([]),J=ee(!1),U=ee(!1),H=ee(!1);let w;const Q=ee(null);function ae(){var T;ye.sfx("drawer"),J.value=!0,(T=Q.value)==null||T.pause()}function ke(){var T;ye.sfx("click"),J.value=!1,(T=Q.value)==null||T.resume()}function ge(){if(!H.value)return;w!==void 0&&clearTimeout(w);const T=n.event.value;if(T===null||T.type!=="node")return;const C="text"in T.node?String(T.node.text).length:20,_e=Math.max(1800,C*55);w=setTimeout(()=>{var q;H.value&&((q=n.event.value)==null?void 0:q.type)==="node"&&n.advance()},_e)}Se(H,T=>{T?ge():w!==void 0&&(clearTimeout(w),w=void 0)}),Se(n.event,T=>{if(T===null){w!==void 0&&clearTimeout(w);return}T.type==="node"?("script"in T.node&&T.node.script?(z.value.push({speaker:null,text:String(T.node.script),kind:"cutscene"}),Fi(String(T.node.script))):"speaker"in T.node&&T.node.text&&T.node.speaker!=null&&String(T.node.speaker)!=="null"?(z.value.push({speaker:String(T.node.speaker),text:String(T.node.text),kind:"dialogue"}),Fi(String(T.node.text))):"text"in T.node&&T.node.text&&(z.value.push({speaker:null,text:String(T.node.text),kind:"cutscene"}),Fi(String(T.node.text))),ge()):T.type==="options"?(w!==void 0&&(clearTimeout(w),w=void 0),J.value&&xo(()=>{var C;return(C=Q.value)==null?void 0:C.pause()})):T.type==="ending"&&w!==void 0&&(clearTimeout(w),w=void 0)});const $=ee(null);let I;function V(T){Kf(),$.value=T,ye.sfx("bad"),I!==void 0&&clearTimeout(I),I=setTimeout(()=>{$.value=null},2200)}const S=ee(!1),Z=ee(!1);let de;const j=ee(null);let D,B;function ie(T){S.value=!0,Z.value=!0,de!==void 0&&clearTimeout(de),de=setTimeout(()=>{S.value=!1,Z.value=!1},260);const C=n.event.value;if(C!==null&&C.type==="options"){const _e=C.options.find(kt=>kt.id===T),q=Zf(_e==null?void 0:_e.effects);if(q!==null){const In=ve.ui["stamp"+q.dim.charAt(0).toUpperCase()+q.dim.slice(1)+(q.positive?"Up":"Down")]??"";In!==""&&(D!==void 0&&clearTimeout(D),B!==void 0&&clearTimeout(B),D=setTimeout(()=>{j.value={word:In,positive:q.positive},ye.sfx(q.positive?"stamp":"bad")},240),B=setTimeout(()=>{j.value=null},1250))}}n.choose(T)}return Se(M,()=>{z.value=[],H.value=!1,J.value=!1,U.value=!1,o.value=null,s.value=null,i.value=0,w!==void 0&&clearTimeout(w)}),(T,C)=>{var _e;return R(),F("div",{class:me(["stage",{"stage-shake":Z.value}])},[S.value?(R(),F("div",L1)):ne("",!0),j.value!==null?(R(),F("div",{key:1,class:me(["stage-impact-stamp",j.value.positive?"good":"evil"]),"aria-hidden":"true"},P(j.value.word),3)):ne("",!0),c.value?(R(),qe(Lm,{key:2,"level-id":M.value,pressure:i.value},null,8,["level-id","pressure"])):ne("",!0),c.value&&((_e=h(n).event.value)==null?void 0:_e.type)!=="ending"?(R(),qe(Am,{key:3,pressure:i.value,active:c.value},null,8,["pressure","active"])):ne("",!0),c.value?(R(),F("header",T1,[f("button",{class:"back",onClick:C[0]||(C[0]=q=>h(n).toSelect())},"‹"),f("span",b1,P(h(n).banner.value),1),f("button",{class:me(["mute",{off:_.value}]),onClick:C[1]||(C[1]=q=>g())},P(v.value),3)])):ne("",!0),h(n).studyOn&&h(n).studyScreen.value==="entry"?(R(),F("div",A1,[f("h1",null,P(h(ve).appTitle),1),f("p",w1,P(h($t)("studyIntro")),1),Qp(f("input",{"onUpdate:modelValue":C[2]||(C[2]=q=>a.value=q),class:"pid",placeholder:h($t)("studyPidPlaceholder"),maxlength:"8"},null,8,O1),[[C_,a.value]]),f("button",{class:"go",disabled:a.value.trim().length===0,onClick:C[3]||(C[3]=q=>h(n).studyBegin(a.value.trim()))},P(h($t)("studyStart")),9,P1)])):h(n).studyOn&&h(n).studyScreen.value==="done"&&u.value?(R(),F("div",R1,[f("h2",null,P(h($t)("studyDoneTitle")),1),f("pre",S1,P(h(n).studySummary()),1),f("button",{class:"go",onClick:l},P(h($t)("studyCopy")),1)])):h(n).screen.value==="select"?(R(),qe(Yg,{key:7,levels:h(n).studyOn?h(At).filter(q=>h(n).STUDY_LEVELS.includes(q.id)):h(At),best:h(n).best.value,onPick:h(n).startLevel},null,8,["levels","best","onPick"])):h(n).event.value?(R(),F(Te,{key:8},[h(n).event.value.type!=="ending"?(R(),qe(l0,{key:0,state:h(n).meters.value},null,8,["state"])):ne("",!0),we(u1,{speaker:o.value??s.value,visible:h(n).event.value.type!=="ending"&&(o.value??s.value)!==null,impact:S.value},null,8,["speaker","visible","impact"]),U.value?(R(),F("div",{key:2,class:"restore-hud-trigger",onClick:C[16]||(C[16]=q=>U.value=!1)},[f("span",null,P(h($t)("tapToRestore")),1)])):(R(),F("div",E1,[h(n).event.value.type==="node"&&"script"in h(n).event.value.node?(R(),qe(Hi,{key:0,kind:"cutscene",text:String(h(n).event.value.node.script??""),instant:h(Di)(String(h(n).event.value.node.script??"")),"auto-active":H.value,onAdvance:C[4]||(C[4]=q=>h(n).advance()),onOpenLog:ae,onToggleAuto:C[5]||(C[5]=q=>H.value=!H.value),onSkip:C[6]||(C[6]=q=>h(n).advance()),onHideUi:C[7]||(C[7]=q=>U.value=!0)},null,8,["text","instant","auto-active"])):h(n).event.value.type==="node"&&"speaker"in h(n).event.value.node&&h(n).event.value.node.speaker!=null&&String(h(n).event.value.node.speaker)!=="null"&&String(h(n).event.value.node.speaker).trim()!==""?(R(),qe(Hi,{key:1,kind:"dialogue",speaker:String(h(n).event.value.node.speaker),text:String(h(n).event.value.node.text??""),instant:h(Di)(String(h(n).event.value.node.text??"")),"auto-active":H.value,onAdvance:C[8]||(C[8]=q=>h(n).advance()),onOpenLog:ae,onToggleAuto:C[9]||(C[9]=q=>H.value=!H.value),onSkip:C[10]||(C[10]=q=>h(n).advance()),onHideUi:C[11]||(C[11]=q=>U.value=!0)},null,8,["speaker","text","instant","auto-active"])):h(n).event.value.type==="node"&&"text"in h(n).event.value.node?(R(),qe(Hi,{key:2,kind:"cutscene",text:String(h(n).event.value.node.text??""),instant:h(Di)(String(h(n).event.value.node.text??"")),"auto-active":H.value,onAdvance:C[12]||(C[12]=q=>h(n).advance()),onOpenLog:ae,onToggleAuto:C[13]||(C[13]=q=>H.value=!H.value),onSkip:C[14]||(C[14]=q=>h(n).advance()),onHideUi:C[15]||(C[15]=q=>U.value=!0)},null,8,["text","instant","auto-active"])):h(n).event.value.type==="options"?(R(),qe(F0,{key:3,ref_key:"choiceLayerRef",ref:Q,options:h(n).event.value.options,timer:h(n).event.value.timer,"timeout-option-id":h(n).event.value.timeoutOptionId,prompt:h(n).event.value.prompt??"",onChoose:ie,onTimeout:V,onOpenLog:ae},null,8,["options","timer","timeout-option-id","prompt"])):h(n).event.value.type==="ending"?(R(),qe(Ag,{key:4,"level-id":M.value,ending:h(n).event.value.ending,state:h(n).event.value.state,"finale-tier":h(n).finaleTier.value,onRestart:h(n).restart,onNext:h(n).nextLevel},null,8,["level-id","ending","state","finale-tier","onRestart","onNext"])):ne("",!0)]))],64)):ne("",!0),J.value?(R(),qe(y1,{key:9,history:z.value,onClose:ke},null,8,["history"])):ne("",!0),$.value?(R(),F("div",I1,[f("span",C1,P(h($t)("timeoutNotice")),1),f("span",$1,"「"+P($.value)+"」",1)])):ne("",!0),c.value?(R(),F("div",{key:11,class:"vignette",style:Be(r.value)},null,4)):ne("",!0)],2)}}}),On=ee("select"),Pt=li(null),De=li(null),Gt=ee(nf()),op=ee(""),ki=li(null),Ro=ee({evidence:0,opinion:0,composure:0,risk:0}),sp=ee(null),Rt=jf(),oo=["L01","L02","L03","L04","L05"],rp=ee("entry"),Pn=li(null),F1=ee(0);function D1(e){Gt.value=Qi(),Uf(e),rp.value="done",Qt("L01")}function Qt(e){const t=At.find(o=>o.id===e)??null;if(t===null)return;Pt.value=t,op.value=t.title;let n=t;if(e==="L20"&&!Rt){const o=uf(Gt.value);n={...t,initState:{evidence:o.evidence,opinion:o.opinion,composure:o.composure,risk:o.risk}}}const i=new Oo(n,Gt.value);if(ki.value=i,De.value=i.start(),Ro.value={...i.state},On.value="level",Rt){const o=St(),s=o.runs.some(r=>r.level===e&&r.endingRank!=="");Pn.value=Yf(o,e,s),ii("entry")}}function H1(){const e=ki.value;e!==null&&(De.value=e.proceed(),Rt&&De.value.type==="node"&&ii(String(De.value.node.id)),Rt&&De.value.type==="options"&&De.value.nodeId!==void 0&&ii(De.value.nodeId))}function B1(e){const t=ki.value;t!==null&&(De.value=t.choose(e),Ro.value={...t.state},Rt&&Pn.value!==null&&Pt.value!==null&&(qf(Pn.value,St(),Pt.value.id,e,t.state),De.value.type==="options"&&De.value.nodeId!==void 0&&ii(De.value.nodeId)))}function G1(){const e=ki.value,t=Pt.value,n=De.value;if(e===null||t===null||n===null||n.type!=="ending")return;if(Rt){Pn.value!==null&&Wf(Pn.value,St(),n.ending.rank,n.ending.title,e.state),F1.value+=1;return}const i=af(Gt.value,t.id,n.ending,n.state,{now:0});Gt.value=i,of(i),t.id==="L20"&&(sp.value=pf(i,n.ending.rank))}function V1(){Pt.value!==null&&Qt(Pt.value.id)}function j1(){const e=Pt.value;if(e===null)return;if(Rt){const s=oo.indexOf(e.id),r=s>=0?oo[s+1]:void 0;if(r===void 0){On.value="select";return}Qt(r);return}const t=At.findIndex(s=>s.id===e.id),n=At.find(s=>!(s.id in Gt.value.levelResults)),i=n!==void 0?At.findIndex(s=>s.id===n.id):-1;if(n!==void 0&&i>t+1){Qt(n.id);return}const o=At[t+1];if(o===void 0){On.value="select";return}Qt(o.id)}function U1(){On.value="select"}const Y1=te(()=>{const e={};for(const[t,n]of Object.entries(Gt.value.levelResults))e[t]=n.rank;return e}),K1={screen:On,current:Pt,event:De,banner:op,best:Y1,meters:Ro,finaleTier:sp,startLevel:Qt,advance:H1,choose:B1,settle:G1,restart:V1,nextLevel:j1,toSelect:U1,studyOn:Rt,STUDY_LEVELS:oo,studyScreen:rp,studyBegin:D1,studyExport:()=>zf(),studySummary:()=>Xf()},q1=D_(N1,{ctx:K1});q1.mount("#app");
