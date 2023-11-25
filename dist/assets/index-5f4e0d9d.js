(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function el(n,e){const t=Object.create(null),i=n.split(",");for(let s=0;s<i.length;s++)t[i[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const ut={},us=[],_n=()=>{},Pp=()=>!1,Lp=/^on[^a-z]/,wo=n=>Lp.test(n),tl=n=>n.startsWith("onUpdate:"),Pt=Object.assign,nl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dp=Object.prototype.hasOwnProperty,et=(n,e)=>Dp.call(n,e),We=Array.isArray,ds=n=>bo(n)==="[object Map]",yd=n=>bo(n)==="[object Set]",Je=n=>typeof n=="function",At=n=>typeof n=="string",il=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",Md=n=>mt(n)&&Je(n.then)&&Je(n.catch),Ad=Object.prototype.toString,bo=n=>Ad.call(n),Ip=n=>bo(n).slice(8,-1),Ed=n=>bo(n)==="[object Object]",sl=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,so=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Up=/-(\w)/g,gs=yo(n=>n.replace(Up,(e,t)=>t?t.toUpperCase():"")),Np=/\B([A-Z])/g,As=yo(n=>n.replace(Np,"-$1").toLowerCase()),Sd=yo(n=>n.charAt(0).toUpperCase()+n.slice(1)),jo=yo(n=>n?`on${Sd(n)}`:""),tr=(n,e)=>!Object.is(n,e),qo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},fo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Op=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let cc;const Ia=()=>cc||(cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=At(i)?zp(i):rl(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(At(n))return n;if(mt(n))return n}}const Fp=/;(?![^(]*\))/g,Bp=/:([^]+)/,Hp=/\/\*[^]*?\*\//g;function zp(n){const e={};return n.replace(Hp,"").split(Fp).forEach(t=>{if(t){const i=t.split(Bp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Mo(n){let e="";if(At(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Mo(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gp=el(kp);function Td(n){return!!n||n===""}const Sr=n=>At(n)?n:n==null?"":We(n)||mt(n)&&(n.toString===Ad||!Je(n.toString))?JSON.stringify(n,Cd,2):String(n),Cd=(n,e)=>e&&e.__v_isRef?Cd(n,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s])=>(t[`${i} =>`]=s,t),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()]}:mt(e)&&!We(e)&&!Ed(e)?String(e):e;let un;class Vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=un;try{return un=this,e()}finally{un=t}}}on(){un=this}off(){un=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Wp(n,e=un){e&&e.active&&e.effects.push(n)}function Xp(){return un}const ol=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Rd=n=>(n.w&ci)>0,Pd=n=>(n.n&ci)>0,jp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ci},qp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const s=e[i];Rd(s)&&!Pd(s)?s.delete(n):e[t++]=s,s.w&=~ci,s.n&=~ci}e.length=t}},Ua=new WeakMap;let Xs=0,ci=1;const Na=30;let hn;const Ai=Symbol(""),Oa=Symbol("");class al{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Wp(this,i)}run(){if(!this.active)return this.fn();let e=hn,t=si;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,si=!0,ci=1<<++Xs,Xs<=Na?jp(this):uc(this),this.fn()}finally{Xs<=Na&&qp(this),ci=1<<--Xs,hn=this.parent,si=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(uc(this),this.onStop&&this.onStop(),this.active=!1)}}function uc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let si=!0;const Ld=[];function Es(){Ld.push(si),si=!1}function Ss(){const n=Ld.pop();si=n===void 0?!0:n}function Zt(n,e,t){if(si&&hn){let i=Ua.get(n);i||Ua.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=ol()),Dd(s)}}function Dd(n,e){let t=!1;Xs<=Na?Pd(n)||(n.n|=ci,t=!Rd(n)):t=!n.has(hn),t&&(n.add(hn),hn.deps.push(n))}function Vn(n,e,t,i,s,r){const a=Ua.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&We(n)){const l=Number(i);a.forEach((u,f)=>{(f==="length"||f>=l)&&o.push(u)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":We(n)?sl(t)&&o.push(a.get("length")):(o.push(a.get(Ai)),ds(n)&&o.push(a.get(Oa)));break;case"delete":We(n)||(o.push(a.get(Ai)),ds(n)&&o.push(a.get(Oa)));break;case"set":ds(n)&&o.push(a.get(Ai));break}if(o.length===1)o[0]&&Fa(o[0]);else{const l=[];for(const u of o)u&&l.push(...u);Fa(ol(l))}}function Fa(n,e){const t=We(n)?n:[...n];for(const i of t)i.computed&&dc(i);for(const i of t)i.computed||dc(i)}function dc(n,e){(n!==hn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Yp=el("__proto__,__v_isRef,__isVue"),Id=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(il)),Kp=ll(),Zp=ll(!1,!0),Qp=ll(!0),fc=Jp();function Jp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=it(this);for(let r=0,a=this.length;r<a;r++)Zt(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(it)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Es();const i=it(this)[e].apply(this,t);return Ss(),i}}),n}function $p(n){const e=it(this);return Zt(e,"has",n),e.hasOwnProperty(n)}function ll(n=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(n?e?mm:Bd:e?Fd:Od).get(i))return i;const a=We(i);if(!n){if(a&&et(fc,s))return Reflect.get(fc,s,r);if(s==="hasOwnProperty")return $p}const o=Reflect.get(i,s,r);return(il(s)?Id.has(s):Yp(s))||(n||Zt(i,"get",s),e)?o:Ot(o)?a&&sl(s)?o:o.value:mt(o)?n?Hd(o):dl(o):o}}const em=Ud(),tm=Ud(!0);function Ud(n=!1){return function(t,i,s,r){let a=t[i];if(_s(a)&&Ot(a)&&!Ot(s))return!1;if(!n&&(!ho(s)&&!_s(s)&&(a=it(a),s=it(s)),!We(t)&&Ot(a)&&!Ot(s)))return a.value=s,!0;const o=We(t)&&sl(i)?Number(i)<t.length:et(t,i),l=Reflect.set(t,i,s,r);return t===it(r)&&(o?tr(s,a)&&Vn(t,"set",i,s):Vn(t,"add",i,s)),l}}function nm(n,e){const t=et(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Vn(n,"delete",e,void 0),i}function im(n,e){const t=Reflect.has(n,e);return(!il(e)||!Id.has(e))&&Zt(n,"has",e),t}function sm(n){return Zt(n,"iterate",We(n)?"length":Ai),Reflect.ownKeys(n)}const Nd={get:Kp,set:em,deleteProperty:nm,has:im,ownKeys:sm},rm={get:Qp,set(n,e){return!0},deleteProperty(n,e){return!0}},om=Pt({},Nd,{get:Zp,set:tm}),cl=n=>n,Ao=n=>Reflect.getPrototypeOf(n);function Tr(n,e,t=!1,i=!1){n=n.__v_raw;const s=it(n),r=it(e);t||(e!==r&&Zt(s,"get",e),Zt(s,"get",r));const{has:a}=Ao(s),o=i?cl:t?hl:nr;if(a.call(s,e))return o(n.get(e));if(a.call(s,r))return o(n.get(r));n!==s&&n.get(e)}function Cr(n,e=!1){const t=this.__v_raw,i=it(t),s=it(n);return e||(n!==s&&Zt(i,"has",n),Zt(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Rr(n,e=!1){return n=n.__v_raw,!e&&Zt(it(n),"iterate",Ai),Reflect.get(n,"size",n)}function hc(n){n=it(n);const e=it(this);return Ao(e).has.call(e,n)||(e.add(n),Vn(e,"add",n,n)),this}function pc(n,e){e=it(e);const t=it(this),{has:i,get:s}=Ao(t);let r=i.call(t,n);r||(n=it(n),r=i.call(t,n));const a=s.call(t,n);return t.set(n,e),r?tr(e,a)&&Vn(t,"set",n,e):Vn(t,"add",n,e),this}function mc(n){const e=it(this),{has:t,get:i}=Ao(e);let s=t.call(e,n);s||(n=it(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&Vn(e,"delete",n,void 0),r}function gc(){const n=it(this),e=n.size!==0,t=n.clear();return e&&Vn(n,"clear",void 0,void 0),t}function Pr(n,e){return function(i,s){const r=this,a=r.__v_raw,o=it(a),l=e?cl:n?hl:nr;return!n&&Zt(o,"iterate",Ai),a.forEach((u,f)=>i.call(s,l(u),l(f),r))}}function Lr(n,e,t){return function(...i){const s=this.__v_raw,r=it(s),a=ds(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=s[n](...i),f=t?cl:e?hl:nr;return!e&&Zt(r,"iterate",l?Oa:Ai),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:o?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Yn(n){return function(...e){return n==="delete"?!1:this}}function am(){const n={get(r){return Tr(this,r)},get size(){return Rr(this)},has:Cr,add:hc,set:pc,delete:mc,clear:gc,forEach:Pr(!1,!1)},e={get(r){return Tr(this,r,!1,!0)},get size(){return Rr(this)},has:Cr,add:hc,set:pc,delete:mc,clear:gc,forEach:Pr(!1,!0)},t={get(r){return Tr(this,r,!0)},get size(){return Rr(this,!0)},has(r){return Cr.call(this,r,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Pr(!0,!1)},i={get(r){return Tr(this,r,!0,!0)},get size(){return Rr(this,!0)},has(r){return Cr.call(this,r,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Lr(r,!1,!1),t[r]=Lr(r,!0,!1),e[r]=Lr(r,!1,!0),i[r]=Lr(r,!0,!0)}),[n,t,e,i]}const[lm,cm,um,dm]=am();function ul(n,e){const t=e?n?dm:um:n?cm:lm;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(et(t,s)&&s in i?t:i,s,r)}const fm={get:ul(!1,!1)},hm={get:ul(!1,!0)},pm={get:ul(!0,!1)},Od=new WeakMap,Fd=new WeakMap,Bd=new WeakMap,mm=new WeakMap;function gm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _m(n){return n.__v_skip||!Object.isExtensible(n)?0:gm(Ip(n))}function dl(n){return _s(n)?n:fl(n,!1,Nd,fm,Od)}function vm(n){return fl(n,!1,om,hm,Fd)}function Hd(n){return fl(n,!0,rm,pm,Bd)}function fl(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=_m(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function fs(n){return _s(n)?fs(n.__v_raw):!!(n&&n.__v_isReactive)}function _s(n){return!!(n&&n.__v_isReadonly)}function ho(n){return!!(n&&n.__v_isShallow)}function zd(n){return fs(n)||_s(n)}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function kd(n){return fo(n,"__v_skip",!0),n}const nr=n=>mt(n)?dl(n):n,hl=n=>mt(n)?Hd(n):n;function Gd(n){si&&hn&&(n=it(n),Dd(n.dep||(n.dep=ol())))}function Vd(n,e){n=it(n);const t=n.dep;t&&Fa(t)}function Ot(n){return!!(n&&n.__v_isRef===!0)}function wt(n){return xm(n,!1)}function xm(n,e){return Ot(n)?n:new wm(n,e)}class wm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:it(e),this._value=t?e:nr(e)}get value(){return Gd(this),this._value}set value(e){const t=this.__v_isShallow||ho(e)||_s(e);e=t?e:it(e),tr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:nr(e),Vd(this))}}function bm(n){return Ot(n)?n.value:n}const ym={get:(n,e,t)=>bm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ot(s)&&!Ot(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Wd(n){return fs(n)?n:new Proxy(n,ym)}class Mm{constructor(e,t,i,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new al(e,()=>{this._dirty||(this._dirty=!0,Vd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=it(this);return Gd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Am(n,e,t=!1){let i,s;const r=Je(n);return r?(i=n,s=_n):(i=n.get,s=n.set),new Mm(i,s,r||!s,t)}function ri(n,e,t,i){let s;try{s=i?n(...i):n()}catch(r){Eo(r,e,t)}return s}function vn(n,e,t,i){if(Je(n)){const r=ri(n,e,t,i);return r&&Md(r)&&r.catch(a=>{Eo(a,e,t)}),r}const s=[];for(let r=0;r<n.length;r++)s.push(vn(n[r],e,t,i));return s}function Eo(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const a=e.proxy,o=t;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,a,o)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ri(l,null,10,[n,a,o]);return}}Em(n,t,s,i)}function Em(n,e,t,i=!0){console.error(n)}let ir=!1,Ba=!1;const Ut=[];let En=0;const hs=[];let zn=null,wi=0;const Xd=Promise.resolve();let pl=null;function Sm(n){const e=pl||Xd;return n?e.then(this?n.bind(this):n):e}function Tm(n){let e=En+1,t=Ut.length;for(;e<t;){const i=e+t>>>1;sr(Ut[i])<n?e=i+1:t=i}return e}function ml(n){(!Ut.length||!Ut.includes(n,ir&&n.allowRecurse?En+1:En))&&(n.id==null?Ut.push(n):Ut.splice(Tm(n.id),0,n),jd())}function jd(){!ir&&!Ba&&(Ba=!0,pl=Xd.then(Yd))}function Cm(n){const e=Ut.indexOf(n);e>En&&Ut.splice(e,1)}function Rm(n){We(n)?hs.push(...n):(!zn||!zn.includes(n,n.allowRecurse?wi+1:wi))&&hs.push(n),jd()}function _c(n,e=ir?En+1:0){for(;e<Ut.length;e++){const t=Ut[e];t&&t.pre&&(Ut.splice(e,1),e--,t())}}function qd(n){if(hs.length){const e=[...new Set(hs)];if(hs.length=0,zn){zn.push(...e);return}for(zn=e,zn.sort((t,i)=>sr(t)-sr(i)),wi=0;wi<zn.length;wi++)zn[wi]();zn=null,wi=0}}const sr=n=>n.id==null?1/0:n.id,Pm=(n,e)=>{const t=sr(n)-sr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Yd(n){Ba=!1,ir=!0,Ut.sort(Pm);const e=_n;try{for(En=0;En<Ut.length;En++){const t=Ut[En];t&&t.active!==!1&&ri(t,null,14)}}finally{En=0,Ut.length=0,qd(),ir=!1,pl=null,(Ut.length||hs.length)&&Yd()}}function Lm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),a=r&&e.slice(7);if(a&&a in i){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:m}=i[f]||ut;m&&(s=t.map(_=>At(_)?_.trim():_)),p&&(s=t.map(Op))}let o,l=i[o=jo(e)]||i[o=jo(gs(e))];!l&&r&&(l=i[o=jo(As(e))]),l&&vn(l,n,6,s);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,vn(u,n,6,s)}}function Kd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Je(n)){const l=u=>{const f=Kd(u,e,!0);f&&(o=!0,Pt(a,f))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(mt(n)&&i.set(n,null),null):(We(r)?r.forEach(l=>a[l]=null):Pt(a,r),mt(n)&&i.set(n,a),a)}function So(n,e){return!n||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,As(e))||et(n,e))}let Sn=null,Zd=null;function po(n){const e=Sn;return Sn=n,Zd=n&&n.type.__scopeId||null,e}function Dm(n,e=Sn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Cc(-1);const r=po(e);let a;try{a=n(...s)}finally{po(r),i._d&&Cc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Yo(n){const{type:e,vnode:t,proxy:i,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:u,render:f,renderCache:p,data:m,setupState:_,ctx:y,inheritAttrs:b}=n;let h,g;const P=po(n);try{if(t.shapeFlag&4){const M=s||i;h=Mn(f.call(M,M,p,r,_,m,y)),g=l}else{const M=e;h=Mn(M.length>1?M(r,{attrs:l,slots:o,emit:u}):M(r,null)),g=e.props?l:Im(l)}}catch(M){Qs.length=0,Eo(M,n,1),h=Tn(Pi)}let A=h;if(g&&b!==!1){const M=Object.keys(g),{shapeFlag:C}=A;M.length&&C&7&&(a&&M.some(tl)&&(g=Um(g,a)),A=vs(A,g))}return t.dirs&&(A=vs(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),h=A,po(P),h}const Im=n=>{let e;for(const t in n)(t==="class"||t==="style"||wo(t))&&((e||(e={}))[t]=n[t]);return e},Um=(n,e)=>{const t={};for(const i in n)(!tl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Nm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?vc(i,a,u):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==i[m]&&!So(u,m))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?vc(i,a,u):!0:!!a;return!1}function vc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!So(t,r))return!0}return!1}function Om({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Fm=n=>n.__isSuspense;function Bm(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):Rm(n)}const Dr={};function Ko(n,e,t){return Qd(n,e,t)}function Qd(n,e,{immediate:t,deep:i,flush:s,onTrack:r,onTrigger:a}=ut){var o;const l=Xp()===((o=Nt)==null?void 0:o.scope)?Nt:null;let u,f=!1,p=!1;if(Ot(n)?(u=()=>n.value,f=ho(n)):fs(n)?(u=()=>n,i=!0):We(n)?(p=!0,f=n.some(M=>fs(M)||ho(M)),u=()=>n.map(M=>{if(Ot(M))return M.value;if(fs(M))return ls(M);if(Je(M))return ri(M,l,2)})):Je(n)?e?u=()=>ri(n,l,2):u=()=>{if(!(l&&l.isUnmounted))return m&&m(),vn(n,l,3,[_])}:u=_n,e&&i){const M=u;u=()=>ls(M())}let m,_=M=>{m=P.onStop=()=>{ri(M,l,4)}},y;if(or)if(_=_n,e?t&&vn(e,l,3,[u(),p?[]:void 0,_]):u(),s==="sync"){const M=Lg();y=M.__watcherHandles||(M.__watcherHandles=[])}else return _n;let b=p?new Array(n.length).fill(Dr):Dr;const h=()=>{if(P.active)if(e){const M=P.run();(i||f||(p?M.some((C,I)=>tr(C,b[I])):tr(M,b)))&&(m&&m(),vn(e,l,3,[M,b===Dr?void 0:p&&b[0]===Dr?[]:b,_]),b=M)}else P.run()};h.allowRecurse=!!e;let g;s==="sync"?g=h:s==="post"?g=()=>qt(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),g=()=>ml(h));const P=new al(u,g);e?t?h():b=P.run():s==="post"?qt(P.run.bind(P),l&&l.suspense):P.run();const A=()=>{P.stop(),l&&l.scope&&nl(l.scope.effects,P)};return y&&y.push(A),A}function Hm(n,e,t){const i=this.proxy,s=At(n)?n.includes(".")?Jd(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const a=Nt;xs(this);const o=Qd(s,r.bind(i),t);return a?xs(a):Ei(),o}function Jd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ls(n,e){if(!mt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ot(n))ls(n.value,e);else if(We(n))for(let t=0;t<n.length;t++)ls(n[t],e);else if(yd(n)||ds(n))n.forEach(t=>{ls(t,e)});else if(Ed(n))for(const t in n)ls(n[t],e);return n}function hi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Es(),vn(l,t,8,[n.el,o,n,e]),Ss())}}const ro=n=>!!n.type.__asyncLoader,$d=n=>n.type.__isKeepAlive;function zm(n,e){ef(n,"a",e)}function km(n,e){ef(n,"da",e)}function ef(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(To(e,i,t),t){let s=t.parent;for(;s&&s.parent;)$d(s.parent.vnode)&&Gm(i,e,t,s),s=s.parent}}function Gm(n,e,t,i){const s=To(e,n,i,!0);nf(()=>{nl(i[e],s)},t)}function To(n,e,t=Nt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Es(),xs(t);const o=vn(e,t,n,a);return Ei(),Ss(),o});return i?s.unshift(r):s.push(r),r}}const Xn=n=>(e,t=Nt)=>(!or||n==="sp")&&To(n,(...i)=>e(...i),t),Vm=Xn("bm"),tf=Xn("m"),Wm=Xn("bu"),Xm=Xn("u"),jm=Xn("bum"),nf=Xn("um"),qm=Xn("sp"),Ym=Xn("rtg"),Km=Xn("rtc");function Zm(n,e=Nt){To("ec",n,e)}const Qm=Symbol.for("v-ndc");function xc(n,e,t,i){let s;const r=t&&t[i];if(We(n)||At(n)){s=new Array(n.length);for(let a=0,o=n.length;a<o;a++)s[a]=e(n[a],a,void 0,r&&r[a])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,o)=>e(a,o,void 0,r&&r[o]));else{const a=Object.keys(n);s=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const u=a[o];s[o]=e(n[u],u,o,r&&r[o])}}else s=[];return t&&(t[i]=s),s}const Ha=n=>n?gf(n)?wl(n)||n.proxy:Ha(n.parent):null,Zs=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ha(n.parent),$root:n=>Ha(n.root),$emit:n=>n.emit,$options:n=>gl(n),$forceUpdate:n=>n.f||(n.f=()=>ml(n.update)),$nextTick:n=>n.n||(n.n=Sm.bind(n.proxy)),$watch:n=>Hm.bind(n)}),Zo=(n,e)=>n!==ut&&!n.__isScriptSetup&&et(n,e),Jm={get({_:n},e){const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let u;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Zo(i,e))return a[e]=1,i[e];if(s!==ut&&et(s,e))return a[e]=2,s[e];if((u=n.propsOptions[0])&&et(u,e))return a[e]=3,r[e];if(t!==ut&&et(t,e))return a[e]=4,t[e];za&&(a[e]=0)}}const f=Zs[e];let p,m;if(f)return e==="$attrs"&&Zt(n,"get",e),f(n);if((p=o.__cssModules)&&(p=p[e]))return p;if(t!==ut&&et(t,e))return a[e]=4,t[e];if(m=l.config.globalProperties,et(m,e))return m[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Zo(s,e)?(s[e]=t,!0):i!==ut&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==ut&&et(n,a)||Zo(e,a)||(o=r[0])&&et(o,a)||et(i,a)||et(Zs,a)||et(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wc(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let za=!0;function $m(n){const e=gl(n),t=n.proxy,i=n.ctx;za=!1,e.beforeCreate&&bc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:y,activated:b,deactivated:h,beforeDestroy:g,beforeUnmount:P,destroyed:A,unmounted:M,render:C,renderTracked:I,renderTriggered:D,errorCaptured:$,serverPrefetch:S,expose:L,inheritAttrs:de,components:fe,directives:V,filters:j}=e;if(u&&eg(u,i,null),a)for(const z in a){const X=a[z];Je(X)&&(i[z]=X.bind(t))}if(s){const z=s.call(t,t);mt(z)&&(n.data=dl(z))}if(za=!0,r)for(const z in r){const X=r[z],ve=Je(X)?X.bind(t,t):Je(X.get)?X.get.bind(t,t):_n,ge=!Je(X)&&Je(X.set)?X.set.bind(t):_n,K=Rg({get:ve,set:ge});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>K.value,set:ee=>K.value=ee})}if(o)for(const z in o)sf(o[z],i,t,z);if(l){const z=Je(l)?l.call(t):l;Reflect.ownKeys(z).forEach(X=>{og(X,z[X])})}f&&bc(f,n,"c");function ie(z,X){We(X)?X.forEach(ve=>z(ve.bind(t))):X&&z(X.bind(t))}if(ie(Vm,p),ie(tf,m),ie(Wm,_),ie(Xm,y),ie(zm,b),ie(km,h),ie(Zm,$),ie(Km,I),ie(Ym,D),ie(jm,P),ie(nf,M),ie(qm,S),We(L))if(L.length){const z=n.exposed||(n.exposed={});L.forEach(X=>{Object.defineProperty(z,X,{get:()=>t[X],set:ve=>t[X]=ve})})}else n.exposed||(n.exposed={});C&&n.render===_n&&(n.render=C),de!=null&&(n.inheritAttrs=de),fe&&(n.components=fe),V&&(n.directives=V)}function eg(n,e,t=_n){We(n)&&(n=ka(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=oo(s.from||i,s.default,!0):r=oo(s.from||i):r=oo(s),Ot(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function bc(n,e,t){vn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function sf(n,e,t,i){const s=i.includes(".")?Jd(t,i):()=>t[i];if(At(n)){const r=e[n];Je(r)&&Ko(s,r)}else if(Je(n))Ko(s,n.bind(t));else if(mt(n))if(We(n))n.forEach(r=>sf(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&Ko(s,r,n)}}function gl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(u=>mo(l,u,a,!0)),mo(l,e,a)),mt(e)&&r.set(e,l),l}function mo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&mo(n,r,t,!0),s&&s.forEach(a=>mo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=tg[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const tg={data:yc,props:Mc,emits:Mc,methods:js,computed:js,beforeCreate:zt,created:zt,beforeMount:zt,mounted:zt,beforeUpdate:zt,updated:zt,beforeDestroy:zt,beforeUnmount:zt,destroyed:zt,unmounted:zt,activated:zt,deactivated:zt,errorCaptured:zt,serverPrefetch:zt,components:js,directives:js,watch:ig,provide:yc,inject:ng};function yc(n,e){return e?n?function(){return Pt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function ng(n,e){return js(ka(n),ka(e))}function ka(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function zt(n,e){return n?[...new Set([].concat(n,e))]:e}function js(n,e){return n?Pt(Object.create(null),n,e):e}function Mc(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Pt(Object.create(null),wc(n),wc(e??{})):e}function ig(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=zt(n[i],e[i]);return t}function rf(){return{app:null,config:{isNativeTag:Pp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sg=0;function rg(n,e){return function(i,s=null){Je(i)||(i=Pt({},i)),s!=null&&!mt(s)&&(s=null);const r=rf(),a=new Set;let o=!1;const l=r.app={_uid:sg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Dg,get config(){return r.config},set config(u){},use(u,...f){return a.has(u)||(u&&Je(u.install)?(a.add(u),u.install(l,...f)):Je(u)&&(a.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,p){if(!o){const m=Tn(i,s);return m.appContext=r,f&&e?e(m,u):n(m,u,p),o=!0,l._container=u,u.__vue_app__=l,wl(m.component)||m.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){go=l;try{return u()}finally{go=null}}};return l}}let go=null;function og(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function oo(n,e,t=!1){const i=Nt||Sn;if(i||go){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:go._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}function ag(n,e,t,i=!1){const s={},r={};fo(r,Ro,1),n.propsDefaults=Object.create(null),of(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:vm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function lg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=it(s),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(So(n.emitsOptions,m))continue;const _=e[m];if(l)if(et(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const y=gs(m);s[y]=Ga(l,o,y,_,n,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{of(n,e,s,r)&&(u=!0);let f;for(const p in o)(!e||!et(e,p)&&((f=As(p))===p||!et(e,f)))&&(l?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=Ga(l,o,p,void 0,n,!0)):delete s[p]);if(r!==o)for(const p in r)(!e||!et(e,p))&&(delete r[p],u=!0)}u&&Vn(n,"set","$attrs")}function of(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(so(l))continue;const u=e[l];let f;s&&et(s,f=gs(l))?!r||!r.includes(f)?t[f]=u:(o||(o={}))[f]=u:So(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(r){const l=it(t),u=o||ut;for(let f=0;f<r.length;f++){const p=r[f];t[p]=Ga(s,l,p,u[p],n,!et(u,p))}}return a}function Ga(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Je(l)){const{propsDefaults:u}=s;t in u?i=u[t]:(xs(s),i=u[t]=l.call(null,e),Ei())}else i=l}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===As(t))&&(i=!0))}return i}function af(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Je(n)){const f=p=>{l=!0;const[m,_]=af(p,e,!0);Pt(a,m),_&&o.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!r&&!l)return mt(n)&&i.set(n,us),us;if(We(r))for(let f=0;f<r.length;f++){const p=gs(r[f]);Ac(p)&&(a[p]=ut)}else if(r)for(const f in r){const p=gs(f);if(Ac(p)){const m=r[f],_=a[p]=We(m)||Je(m)?{type:m}:Pt({},m);if(_){const y=Tc(Boolean,_.type),b=Tc(String,_.type);_[0]=y>-1,_[1]=b<0||y<b,(y>-1||et(_,"default"))&&o.push(p)}}}const u=[a,o];return mt(n)&&i.set(n,u),u}function Ac(n){return n[0]!=="$"}function Ec(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Sc(n,e){return Ec(n)===Ec(e)}function Tc(n,e){return We(e)?e.findIndex(t=>Sc(t,n)):Je(e)&&Sc(e,n)?0:-1}const lf=n=>n[0]==="_"||n==="$stable",_l=n=>We(n)?n.map(Mn):[Mn(n)],cg=(n,e,t)=>{if(e._n)return e;const i=Dm((...s)=>_l(e(...s)),t);return i._c=!1,i},cf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(lf(s))continue;const r=n[s];if(Je(r))e[s]=cg(s,r,i);else if(r!=null){const a=_l(r);e[s]=()=>a}}},uf=(n,e)=>{const t=_l(e);n.slots.default=()=>t},ug=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=it(e),fo(e,"_",t)):cf(e,n.slots={})}else n.slots={},e&&uf(n,e);fo(n.slots,Ro,1)},dg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=ut;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:(Pt(s,e),!t&&o===1&&delete s._):(r=!e.$stable,cf(e,s)),a=e}else e&&(uf(n,e),a={default:1});if(r)for(const o in s)!lf(o)&&!(o in a)&&delete s[o]};function Va(n,e,t,i,s=!1){if(We(n)){n.forEach((m,_)=>Va(m,e&&(We(e)?e[_]:e),t,i,s));return}if(ro(i)&&!s)return;const r=i.shapeFlag&4?wl(i.component)||i.component.proxy:i.el,a=s?null:r,{i:o,r:l}=n,u=e&&e.r,f=o.refs===ut?o.refs={}:o.refs,p=o.setupState;if(u!=null&&u!==l&&(At(u)?(f[u]=null,et(p,u)&&(p[u]=null)):Ot(u)&&(u.value=null)),Je(l))ri(l,o,12,[a,f]);else{const m=At(l),_=Ot(l);if(m||_){const y=()=>{if(n.f){const b=m?et(p,l)?p[l]:f[l]:l.value;s?We(b)&&nl(b,r):We(b)?b.includes(r)||b.push(r):m?(f[l]=[r],et(p,l)&&(p[l]=f[l])):(l.value=[r],n.k&&(f[n.k]=l.value))}else m?(f[l]=a,et(p,l)&&(p[l]=a)):_&&(l.value=a,n.k&&(f[n.k]=a))};a?(y.id=-1,qt(y,t)):y()}}}const qt=Bm;function fg(n){return hg(n)}function hg(n,e){const t=Ia();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=_n,insertStaticContent:y}=n,b=(x,N,H,Z=null,q=null,me=null,_e=!1,J=null,ce=!!N.dynamicChildren)=>{if(x===N)return;x&&!Bs(x,N)&&(Z=Ue(x),ee(x,q,me,!0),x=null),N.patchFlag===-2&&(ce=!1,N.dynamicChildren=null);const{type:he,ref:Ae,shapeFlag:E}=N;switch(he){case Co:h(x,N,H,Z);break;case Pi:g(x,N,H,Z);break;case ao:x==null&&P(N,H,Z,_e);break;case dn:fe(x,N,H,Z,q,me,_e,J,ce);break;default:E&1?C(x,N,H,Z,q,me,_e,J,ce):E&6?V(x,N,H,Z,q,me,_e,J,ce):(E&64||E&128)&&he.process(x,N,H,Z,q,me,_e,J,ce,Ge)}Ae!=null&&q&&Va(Ae,x&&x.ref,me,N||x,!N)},h=(x,N,H,Z)=>{if(x==null)i(N.el=o(N.children),H,Z);else{const q=N.el=x.el;N.children!==x.children&&u(q,N.children)}},g=(x,N,H,Z)=>{x==null?i(N.el=l(N.children||""),H,Z):N.el=x.el},P=(x,N,H,Z)=>{[x.el,x.anchor]=y(x.children,N,H,Z,x.el,x.anchor)},A=({el:x,anchor:N},H,Z)=>{let q;for(;x&&x!==N;)q=m(x),i(x,H,Z),x=q;i(N,H,Z)},M=({el:x,anchor:N})=>{let H;for(;x&&x!==N;)H=m(x),s(x),x=H;s(N)},C=(x,N,H,Z,q,me,_e,J,ce)=>{_e=_e||N.type==="svg",x==null?I(N,H,Z,q,me,_e,J,ce):S(x,N,q,me,_e,J,ce)},I=(x,N,H,Z,q,me,_e,J)=>{let ce,he;const{type:Ae,props:E,shapeFlag:w,transition:F,dirs:G}=x;if(ce=x.el=a(x.type,me,E&&E.is,E),w&8?f(ce,x.children):w&16&&$(x.children,ce,null,Z,q,me&&Ae!=="foreignObject",_e,J),G&&hi(x,null,Z,"created"),D(ce,x,x.scopeId,_e,Z),E){for(const le in E)le!=="value"&&!so(le)&&r(ce,le,null,E[le],me,x.children,Z,q,Le);"value"in E&&r(ce,"value",null,E.value),(he=E.onVnodeBeforeMount)&&yn(he,Z,x)}G&&hi(x,null,Z,"beforeMount");const se=(!q||q&&!q.pendingBranch)&&F&&!F.persisted;se&&F.beforeEnter(ce),i(ce,N,H),((he=E&&E.onVnodeMounted)||se||G)&&qt(()=>{he&&yn(he,Z,x),se&&F.enter(ce),G&&hi(x,null,Z,"mounted")},q)},D=(x,N,H,Z,q)=>{if(H&&_(x,H),Z)for(let me=0;me<Z.length;me++)_(x,Z[me]);if(q){let me=q.subTree;if(N===me){const _e=q.vnode;D(x,_e,_e.scopeId,_e.slotScopeIds,q.parent)}}},$=(x,N,H,Z,q,me,_e,J,ce=0)=>{for(let he=ce;he<x.length;he++){const Ae=x[he]=J?ei(x[he]):Mn(x[he]);b(null,Ae,N,H,Z,q,me,_e,J)}},S=(x,N,H,Z,q,me,_e)=>{const J=N.el=x.el;let{patchFlag:ce,dynamicChildren:he,dirs:Ae}=N;ce|=x.patchFlag&16;const E=x.props||ut,w=N.props||ut;let F;H&&pi(H,!1),(F=w.onVnodeBeforeUpdate)&&yn(F,H,N,x),Ae&&hi(N,x,H,"beforeUpdate"),H&&pi(H,!0);const G=q&&N.type!=="foreignObject";if(he?L(x.dynamicChildren,he,J,H,Z,G,me):_e||X(x,N,J,null,H,Z,G,me,!1),ce>0){if(ce&16)de(J,N,E,w,H,Z,q);else if(ce&2&&E.class!==w.class&&r(J,"class",null,w.class,q),ce&4&&r(J,"style",E.style,w.style,q),ce&8){const se=N.dynamicProps;for(let le=0;le<se.length;le++){const Ee=se[le],pe=E[Ee],k=w[Ee];(k!==pe||Ee==="value")&&r(J,Ee,pe,k,q,x.children,H,Z,Le)}}ce&1&&x.children!==N.children&&f(J,N.children)}else!_e&&he==null&&de(J,N,E,w,H,Z,q);((F=w.onVnodeUpdated)||Ae)&&qt(()=>{F&&yn(F,H,N,x),Ae&&hi(N,x,H,"updated")},Z)},L=(x,N,H,Z,q,me,_e)=>{for(let J=0;J<N.length;J++){const ce=x[J],he=N[J],Ae=ce.el&&(ce.type===dn||!Bs(ce,he)||ce.shapeFlag&70)?p(ce.el):H;b(ce,he,Ae,null,Z,q,me,_e,!0)}},de=(x,N,H,Z,q,me,_e)=>{if(H!==Z){if(H!==ut)for(const J in H)!so(J)&&!(J in Z)&&r(x,J,H[J],null,_e,N.children,q,me,Le);for(const J in Z){if(so(J))continue;const ce=Z[J],he=H[J];ce!==he&&J!=="value"&&r(x,J,he,ce,_e,N.children,q,me,Le)}"value"in Z&&r(x,"value",H.value,Z.value)}},fe=(x,N,H,Z,q,me,_e,J,ce)=>{const he=N.el=x?x.el:o(""),Ae=N.anchor=x?x.anchor:o("");let{patchFlag:E,dynamicChildren:w,slotScopeIds:F}=N;F&&(J=J?J.concat(F):F),x==null?(i(he,H,Z),i(Ae,H,Z),$(N.children,H,Ae,q,me,_e,J,ce)):E>0&&E&64&&w&&x.dynamicChildren?(L(x.dynamicChildren,w,H,q,me,_e,J),(N.key!=null||q&&N===q.subTree)&&df(x,N,!0)):X(x,N,H,Ae,q,me,_e,J,ce)},V=(x,N,H,Z,q,me,_e,J,ce)=>{N.slotScopeIds=J,x==null?N.shapeFlag&512?q.ctx.activate(N,H,Z,_e,ce):j(N,H,Z,q,me,_e,ce):Q(x,N,ce)},j=(x,N,H,Z,q,me,_e)=>{const J=x.component=Mg(x,Z,q);if($d(x)&&(J.ctx.renderer=Ge),Ag(J),J.asyncDep){if(q&&q.registerDep(J,ie),!x.el){const ce=J.subTree=Tn(Pi);g(null,ce,N,H)}return}ie(J,x,N,H,q,me,_e)},Q=(x,N,H)=>{const Z=N.component=x.component;if(Nm(x,N,H))if(Z.asyncDep&&!Z.asyncResolved){z(Z,N,H);return}else Z.next=N,Cm(Z.update),Z.update();else N.el=x.el,Z.vnode=N},ie=(x,N,H,Z,q,me,_e)=>{const J=()=>{if(x.isMounted){let{next:Ae,bu:E,u:w,parent:F,vnode:G}=x,se=Ae,le;pi(x,!1),Ae?(Ae.el=G.el,z(x,Ae,_e)):Ae=G,E&&qo(E),(le=Ae.props&&Ae.props.onVnodeBeforeUpdate)&&yn(le,F,Ae,G),pi(x,!0);const Ee=Yo(x),pe=x.subTree;x.subTree=Ee,b(pe,Ee,p(pe.el),Ue(pe),x,q,me),Ae.el=Ee.el,se===null&&Om(x,Ee.el),w&&qt(w,q),(le=Ae.props&&Ae.props.onVnodeUpdated)&&qt(()=>yn(le,F,Ae,G),q)}else{let Ae;const{el:E,props:w}=N,{bm:F,m:G,parent:se}=x,le=ro(N);if(pi(x,!1),F&&qo(F),!le&&(Ae=w&&w.onVnodeBeforeMount)&&yn(Ae,se,N),pi(x,!0),E&&Ve){const Ee=()=>{x.subTree=Yo(x),Ve(E,x.subTree,x,q,null)};le?N.type.__asyncLoader().then(()=>!x.isUnmounted&&Ee()):Ee()}else{const Ee=x.subTree=Yo(x);b(null,Ee,H,Z,x,q,me),N.el=Ee.el}if(G&&qt(G,q),!le&&(Ae=w&&w.onVnodeMounted)){const Ee=N;qt(()=>yn(Ae,se,Ee),q)}(N.shapeFlag&256||se&&ro(se.vnode)&&se.vnode.shapeFlag&256)&&x.a&&qt(x.a,q),x.isMounted=!0,N=H=Z=null}},ce=x.effect=new al(J,()=>ml(he),x.scope),he=x.update=()=>ce.run();he.id=x.uid,pi(x,!0),he()},z=(x,N,H)=>{N.component=x;const Z=x.vnode.props;x.vnode=N,x.next=null,lg(x,N.props,Z,H),dg(x,N.children,H),Es(),_c(),Ss()},X=(x,N,H,Z,q,me,_e,J,ce=!1)=>{const he=x&&x.children,Ae=x?x.shapeFlag:0,E=N.children,{patchFlag:w,shapeFlag:F}=N;if(w>0){if(w&128){ge(he,E,H,Z,q,me,_e,J,ce);return}else if(w&256){ve(he,E,H,Z,q,me,_e,J,ce);return}}F&8?(Ae&16&&Le(he,q,me),E!==he&&f(H,E)):Ae&16?F&16?ge(he,E,H,Z,q,me,_e,J,ce):Le(he,q,me,!0):(Ae&8&&f(H,""),F&16&&$(E,H,Z,q,me,_e,J,ce))},ve=(x,N,H,Z,q,me,_e,J,ce)=>{x=x||us,N=N||us;const he=x.length,Ae=N.length,E=Math.min(he,Ae);let w;for(w=0;w<E;w++){const F=N[w]=ce?ei(N[w]):Mn(N[w]);b(x[w],F,H,null,q,me,_e,J,ce)}he>Ae?Le(x,q,me,!0,!1,E):$(N,H,Z,q,me,_e,J,ce,E)},ge=(x,N,H,Z,q,me,_e,J,ce)=>{let he=0;const Ae=N.length;let E=x.length-1,w=Ae-1;for(;he<=E&&he<=w;){const F=x[he],G=N[he]=ce?ei(N[he]):Mn(N[he]);if(Bs(F,G))b(F,G,H,null,q,me,_e,J,ce);else break;he++}for(;he<=E&&he<=w;){const F=x[E],G=N[w]=ce?ei(N[w]):Mn(N[w]);if(Bs(F,G))b(F,G,H,null,q,me,_e,J,ce);else break;E--,w--}if(he>E){if(he<=w){const F=w+1,G=F<Ae?N[F].el:Z;for(;he<=w;)b(null,N[he]=ce?ei(N[he]):Mn(N[he]),H,G,q,me,_e,J,ce),he++}}else if(he>w)for(;he<=E;)ee(x[he],q,me,!0),he++;else{const F=he,G=he,se=new Map;for(he=G;he<=w;he++){const xe=N[he]=ce?ei(N[he]):Mn(N[he]);xe.key!=null&&se.set(xe.key,he)}let le,Ee=0;const pe=w-G+1;let k=!1,U=0;const ue=new Array(pe);for(he=0;he<pe;he++)ue[he]=0;for(he=F;he<=E;he++){const xe=x[he];if(Ee>=pe){ee(xe,q,me,!0);continue}let Me;if(xe.key!=null)Me=se.get(xe.key);else for(le=G;le<=w;le++)if(ue[le-G]===0&&Bs(xe,N[le])){Me=le;break}Me===void 0?ee(xe,q,me,!0):(ue[Me-G]=he+1,Me>=U?U=Me:k=!0,b(xe,N[Me],H,null,q,me,_e,J,ce),Ee++)}const be=k?pg(ue):us;for(le=be.length-1,he=pe-1;he>=0;he--){const xe=G+he,Me=N[xe],ze=xe+1<Ae?N[xe+1].el:Z;ue[he]===0?b(null,Me,H,ze,q,me,_e,J,ce):k&&(le<0||he!==be[le]?K(Me,H,ze,2):le--)}}},K=(x,N,H,Z,q=null)=>{const{el:me,type:_e,transition:J,children:ce,shapeFlag:he}=x;if(he&6){K(x.component.subTree,N,H,Z);return}if(he&128){x.suspense.move(N,H,Z);return}if(he&64){_e.move(x,N,H,Ge);return}if(_e===dn){i(me,N,H);for(let E=0;E<ce.length;E++)K(ce[E],N,H,Z);i(x.anchor,N,H);return}if(_e===ao){A(x,N,H);return}if(Z!==2&&he&1&&J)if(Z===0)J.beforeEnter(me),i(me,N,H),qt(()=>J.enter(me),q);else{const{leave:E,delayLeave:w,afterLeave:F}=J,G=()=>i(me,N,H),se=()=>{E(me,()=>{G(),F&&F()})};w?w(me,G,se):se()}else i(me,N,H)},ee=(x,N,H,Z=!1,q=!1)=>{const{type:me,props:_e,ref:J,children:ce,dynamicChildren:he,shapeFlag:Ae,patchFlag:E,dirs:w}=x;if(J!=null&&Va(J,null,H,x,!0),Ae&256){N.ctx.deactivate(x);return}const F=Ae&1&&w,G=!ro(x);let se;if(G&&(se=_e&&_e.onVnodeBeforeUnmount)&&yn(se,N,x),Ae&6)Ce(x.component,H,Z);else{if(Ae&128){x.suspense.unmount(H,Z);return}F&&hi(x,null,N,"beforeUnmount"),Ae&64?x.type.remove(x,N,H,q,Ge,Z):he&&(me!==dn||E>0&&E&64)?Le(he,N,H,!1,!0):(me===dn&&E&384||!q&&Ae&16)&&Le(ce,N,H),Z&&Se(x)}(G&&(se=_e&&_e.onVnodeUnmounted)||F)&&qt(()=>{se&&yn(se,N,x),F&&hi(x,null,N,"unmounted")},H)},Se=x=>{const{type:N,el:H,anchor:Z,transition:q}=x;if(N===dn){Pe(H,Z);return}if(N===ao){M(x);return}const me=()=>{s(H),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(x.shapeFlag&1&&q&&!q.persisted){const{leave:_e,delayLeave:J}=q,ce=()=>_e(H,me);J?J(x.el,me,ce):ce()}else me()},Pe=(x,N)=>{let H;for(;x!==N;)H=m(x),s(x),x=H;s(N)},Ce=(x,N,H)=>{const{bum:Z,scope:q,update:me,subTree:_e,um:J}=x;Z&&qo(Z),q.stop(),me&&(me.active=!1,ee(_e,x,N,H)),J&&qt(J,N),qt(()=>{x.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},Le=(x,N,H,Z=!1,q=!1,me=0)=>{for(let _e=me;_e<x.length;_e++)ee(x[_e],N,H,Z,q)},Ue=x=>x.shapeFlag&6?Ue(x.component.subTree):x.shapeFlag&128?x.suspense.next():m(x.anchor||x.el),Ne=(x,N,H)=>{x==null?N._vnode&&ee(N._vnode,null,null,!0):b(N._vnode||null,x,N,null,null,null,H),_c(),qd(),N._vnode=x},Ge={p:b,um:ee,m:K,r:Se,mt:j,mc:$,pc:X,pbc:L,n:Ue,o:n};let rt,Ve;return e&&([rt,Ve]=e(Ge)),{render:Ne,hydrate:rt,createApp:rg(Ne,rt)}}function pi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function df(n,e,t=!1){const i=n.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ei(s[r]),o.el=a.el),t||df(a,o)),o.type===Co&&(o.el=a.el)}}function pg(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=t[t.length-1],n[s]<u){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<u?r=o+1:a=o;u<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}const mg=n=>n.__isTeleport,dn=Symbol.for("v-fgt"),Co=Symbol.for("v-txt"),Pi=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),Qs=[];let gn=null;function at(n=!1){Qs.push(gn=n?null:[])}function gg(){Qs.pop(),gn=Qs[Qs.length-1]||null}let rr=1;function Cc(n){rr+=n}function ff(n){return n.dynamicChildren=rr>0?gn||us:null,gg(),rr>0&&gn&&gn.push(n),n}function ct(n,e,t,i,s,r){return ff(ne(n,e,t,i,s,r,!0))}function hf(n,e,t,i,s){return ff(Tn(n,e,t,i,s,!0))}function _g(n){return n?n.__v_isVNode===!0:!1}function Bs(n,e){return n.type===e.type&&n.key===e.key}const Ro="__vInternal",pf=({key:n})=>n??null,lo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Ot(n)||Je(n)?{i:Sn,r:n,k:e,f:!!t}:n:null);function ne(n,e=null,t=null,i=0,s=null,r=n===dn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&pf(e),ref:e&&lo(e),scopeId:Zd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Sn};return o?(vl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),rr>0&&!a&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Tn=vg;function vg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Qm)&&(n=Pi),_g(n)){const o=vs(n,e,!0);return t&&vl(o,t),rr>0&&!r&&gn&&(o.shapeFlag&6?gn[gn.indexOf(n)]=o:gn.push(o)),o.patchFlag|=-2,o}if(Cg(n)&&(n=n.__vccOpts),e){e=xg(e);let{class:o,style:l}=e;o&&!At(o)&&(e.class=Mo(o)),mt(l)&&(zd(l)&&!We(l)&&(l=Pt({},l)),e.style=rl(l))}const a=At(n)?1:Fm(n)?128:mg(n)?64:mt(n)?4:Je(n)?2:0;return ne(n,e,t,i,s,a,r,!0)}function xg(n){return n?zd(n)||Ro in n?Pt({},n):n:null}function vs(n,e,t=!1){const{props:i,ref:s,patchFlag:r,children:a}=n,o=e?wg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&pf(o),ref:e&&e.ref?t&&s?We(s)?s.concat(lo(e)):[s,lo(e)]:lo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==dn?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vs(n.ssContent),ssFallback:n.ssFallback&&vs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function bi(n=" ",e=0){return Tn(Co,null,n,e)}function mf(n,e){const t=Tn(ao,null,n);return t.staticCount=e,t}function Hs(n="",e=!1){return e?(at(),hf(Pi,null,n)):Tn(Pi,null,n)}function Mn(n){return n==null||typeof n=="boolean"?Tn(Pi):We(n)?Tn(dn,null,n.slice()):typeof n=="object"?ei(n):Tn(Co,null,String(n))}function ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vs(n)}function vl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),vl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Ro in e)?e._ctx=Sn:s===3&&Sn&&(Sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Sn},t=32):(e=String(e),i&64?(t=16,e=[bi(e)]):t=8);n.children=e,n.shapeFlag|=t}function wg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Mo([e.class,i.class]));else if(s==="style")e.style=rl([e.style,i.style]);else if(wo(s)){const r=e[s],a=i[s];a&&r!==a&&!(We(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function yn(n,e,t,i=null){vn(n,e,7,[t,i])}const bg=rf();let yg=0;function Mg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||bg,r={uid:yg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:af(i,s),emitsOptions:Kd(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Lm.bind(null,r),n.ce&&n.ce(r),r}let Nt=null,xl,ki,Rc="__VUE_INSTANCE_SETTERS__";(ki=Ia()[Rc])||(ki=Ia()[Rc]=[]),ki.push(n=>Nt=n),xl=n=>{ki.length>1?ki.forEach(e=>e(n)):ki[0](n)};const xs=n=>{xl(n),n.scope.on()},Ei=()=>{Nt&&Nt.scope.off(),xl(null)};function gf(n){return n.vnode.shapeFlag&4}let or=!1;function Ag(n,e=!1){or=e;const{props:t,children:i}=n.vnode,s=gf(n);ag(n,t,s,e),ug(n,i);const r=s?Eg(n,e):void 0;return or=!1,r}function Eg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=kd(new Proxy(n.ctx,Jm));const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Tg(n):null;xs(n),Es();const r=ri(i,n,0,[n.props,s]);if(Ss(),Ei(),Md(r)){if(r.then(Ei,Ei),e)return r.then(a=>{Pc(n,a,e)}).catch(a=>{Eo(a,n,0)});n.asyncDep=r}else Pc(n,r,e)}else _f(n,e)}function Pc(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=Wd(e)),_f(n,t)}let Lc;function _f(n,e,t){const i=n.type;if(!n.render){if(!e&&Lc&&!i.render){const s=i.template||gl(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,u=Pt(Pt({isCustomElement:r,delimiters:o},a),l);i.render=Lc(s,u)}}n.render=i.render||_n}xs(n),Es(),$m(n),Ss(),Ei()}function Sg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Zt(n,"get","$attrs"),e[t]}}))}function Tg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Sg(n)},slots:n.slots,emit:n.emit,expose:e}}function wl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Wd(kd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zs)return Zs[t](n)},has(e,t){return t in e||t in Zs}}))}function Cg(n){return Je(n)&&"__vccOpts"in n}const Rg=(n,e)=>Am(n,e,or),Pg=Symbol.for("v-scx"),Lg=()=>oo(Pg),Dg="3.3.4",Ig="http://www.w3.org/2000/svg",yi=typeof document<"u"?document:null,Dc=yi&&yi.createElement("template"),Ug={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e?yi.createElementNS(Ig,n):yi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>yi.createTextNode(n),createComment:n=>yi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>yi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Dc.innerHTML=i?`<svg>${n}</svg>`:n;const o=Dc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ng(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Og(n,e,t){const i=n.style,s=At(t);if(t&&!s){if(e&&!At(e))for(const r in e)t[r]==null&&Wa(i,r,"");for(const r in t)Wa(i,r,t[r])}else{const r=i.display;s?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=r)}}const Ic=/\s*!important$/;function Wa(n,e,t){if(We(t))t.forEach(i=>Wa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Fg(n,e);Ic.test(t)?n.setProperty(As(i),t.replace(Ic,""),"important"):n[i]=t}}const Uc=["Webkit","Moz","ms"],Qo={};function Fg(n,e){const t=Qo[e];if(t)return t;let i=gs(e);if(i!=="filter"&&i in n)return Qo[e]=i;i=Sd(i);for(let s=0;s<Uc.length;s++){const r=Uc[s]+i;if(r in n)return Qo[e]=r}return e}const Nc="http://www.w3.org/1999/xlink";function Bg(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Nc,e.slice(6,e.length)):n.setAttributeNS(Nc,e,t);else{const r=Gp(e);t==null||r&&!Td(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Hg(n,e,t,i,s,r,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,s,r),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const u=o==="OPTION"?n.getAttribute("value"):n.value,f=t??"";u!==f&&(n.value=f),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=Td(t):t==null&&u==="string"?(t="",l=!0):u==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function zg(n,e,t,i){n.addEventListener(e,t,i)}function kg(n,e,t,i){n.removeEventListener(e,t,i)}function Gg(n,e,t,i,s=null){const r=n._vei||(n._vei={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Vg(e);if(i){const u=r[e]=jg(i,s);zg(n,o,u,l)}else a&&(kg(n,o,a,l),r[e]=void 0)}}const Oc=/(?:Once|Passive|Capture)$/;function Vg(n){let e;if(Oc.test(n)){e={};let i;for(;i=n.match(Oc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):As(n.slice(2)),e]}let Jo=0;const Wg=Promise.resolve(),Xg=()=>Jo||(Wg.then(()=>Jo=0),Jo=Date.now());function jg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;vn(qg(i,t.value),e,5,[i])};return t.value=n,t.attached=Xg(),t}function qg(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Fc=/^on[a-z]/,Yg=(n,e,t,i,s=!1,r,a,o,l)=>{e==="class"?Ng(n,i,s):e==="style"?Og(n,t,i):wo(e)?tl(e)||Gg(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kg(n,e,i,s))?Hg(n,e,i,r,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Bg(n,e,i,s))};function Kg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Fc.test(e)&&Je(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Fc.test(e)&&At(t)?!1:e in n}const Zg=Pt({patchProp:Yg},Ug);let Bc;function Qg(){return Bc||(Bc=fg(Zg))}const Jg=(...n)=>{const e=Qg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=$g(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function $g(n){return At(n)?document.querySelector(n):n}const e_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO2ZQQ6CMBBFex85jsaF3sMlLr2zJs+QQEhETGlnpoOZt2Mz/a+lMIWUgiAI3AMcdjsmcAdewFWkYN6YJ+AJPCTCT5hIMIefKJMAuo9CjNdn8dQjQ+2VMbtUAnD8UlBlJVjO/DTWpbawugRa4S0k0A6vKYFVeA0J8/CSEs3CS0g0D18j4SZ8iYS78Fsk3IbPkXAfPqOPMe2nNFbC98xvkPAffmDlnl9s7L2F9y/BnjcxPx6VloeiInKe824l2PCScidBwRvWjQQV7UFzCQR6m2YSCDZm5hIodJVYSWi2xGhLWPTzaElYHkaQlviXj7s37ZnPWIk+1TBKmB5GmCV6qYL7/cUUBEGQNHkDnL5kP6ae71wAAAAASUVORK5CYII=",t_="/Website/assets/favicon-9a311dcb.png",n_="/Website/assets/basket-white-354b2936.png",i_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHV0lEQVR4nO2da6hVRRSAxzINM00re6ilPbVM04JekllZaliZaRlmJpFEmVGCP3uRWFKZ2cPyV5hiUhGRPVQivRXdlKsQij3MLBV7mAp6rze9XyzOOqjX65nZ5+yz98zZ5/t1Effes2bmzKxZa81axngK0A4YCDwAPAcsAL4BfgH+AHYA+4F9+rf8+1r9P4uAZ4B7gMuBDmnL4z1AB2AM8BqwGviP+DgA1AEvArcAJ6YtrxcApwIPAZ/pTE4KGdwvgYmZ+3UArYDBwEKggfTZq8vbUGmbqVSAY4F7gfX4y1rgLuAYU2EdPw7YQDhsACZI203IAAOA7wiXOuAqExrAycBbqn2EzgHgTaCzCQFgCLA1JuF3AJ8DM4BJwM1Ab+AMoJMub23073OAS4AbgYeB2frsnzG1Rd4z3PgKcBzwfImzfi/wiaqm58eodfUDHgM+BupLaF+Tytja+ARwup5Ai+EAsFw36nYJtLWjnq5XaIcWQw3Q3fgA0AfYVORsf1WWjhTbfh4wt8jzyDbg0rTanhdA1uRdERsuws4ETjOeAHQFZumkiMJO4Lq0Gj20iPVU1uBzjaeQ28hlD4o6ocYk3dDhEX+2ohUNM4EAjAR+jyCfWGXvSFLNjNL578m5wAQG0Bn4KIKc9WVfjlQH/zeCxXGaCRhyKuyUCJZa2Q/7l6sxXYCNEQ4t6WxOZQC4NsLEE+2oW9wNaK26rwuydl5oKgygL7DFsQ9qYj2sAc86fvgnoIepUIAeKqMLM+L66EDd5W2In/ZsU+EA3YHNDv0hp+xb4zi2/+bwsX+Ai0xGILccuewJ20uyourp0Eaj/EpMxgAGqew23ijFxuPygSkmowBTHY2NVxSj/7poPYtMhiHXT2JesfF9JPemHKsdzQudTMYh5/0TBcTG+CijusrhhSPLLl0gAKMd+mu9U7QFcJvDyxYnIllAaHCZjdEuL6q1vGSfzybltBAXqoN5vq5g8JcGstqYlahkAaEePhs3FXqBuOcKIR6jLolKFd4p2WY5ffdoD7d3cC8Wd6jIEMDbDpO4Y0sPStym7UCRupUTmN+iAH7tBbZoi/tbelA8V4VYZjyAHL/6bP4AVlr6cnnzB9o4LD9HjloKcJD9GjHXxngG8KCDt/DgJRHZmS0P1Pvys+dIauOKoosLtSLbQlyCCVI4jKMIs1vCyY1HOIS3zDQhQmHe9yUCA3jC0tZVJkSwI96qwR60s7+DVtneVOAA5IVLdYMWwxvwN4UZYEKDaKxK8+wCLLW0b6yp8AFAtZEpadyABOZQmKdMaFA8HwKnJNzWyZY2LTQZGoC8F29Igm21na9qShUoRJqAV4C2CYWvFGJtFgcgzw9yd6zMA9CTwmzM8gDkTSxl26Blz6Ewf2V9APJ8AZxZhgFoS2EaqgOQozoAKVFdglKkugmnhE9q6BoTGlTWQWylCQ3CMkU8amnTAhMahGWMkwSEhXjShAZhmaOXWdp3twkN3Kg6ZFIcgM1Vl2QZIRyn/NQsOeV3exiWssQ5LEUTcBSiGpgVAc1hZ0toMrR5vjfbvddqaKIjmmDQPTRRH5KM4+4BpSlBGMG5NZEDnTVpnk2165WKRGGFp1/gEJ4+odgLGnNTkSoggHmWPtxz1PT5miHWthl7k2zPN4CzHK4ozS/0gsuwMztRqQLCIRALqzXWIdl2o2/x+B6t/Q0lXVPVF41wGMUPEpMsENSvbONO15dJcgkbo8ouVSBo7Rsb65wLQwC3OyanCyOlexnR2B+XXHLjory0lSa3trG4ouuuuPWTS6bd2shlUYCLHRM2PW4yCjCtLAmbDvnAyw4fkEEaZDIGuUpQLhP09VKLq21yrHTRx2QEcgUhJHO6S9K+0pJaAdc4pq3cUsk5Q5tFPLuUaBF70AgTB8DTuCH1HHuayu78nx37YnrcqYu/cvyw5E/rbSpz2dnq2AcrYq8zo/qu6+jL9czrTWVtuDsdZZeluGu5GtJLN1wX9ldQ+vpGR5l3lb2ujMzsiKVLFicdEhjjLz5KOZP6xNRxLd4TZRC2xaYRJGfbcU1Vn2wJk2aRv1GL+Cz1Ock3ubJWn3pfxOeQBt8QobJEHvEYvSTlCI1fnqw5RdQT25m6FUBmdITSJofSIEkA03TuqBNlXpHVvEUl7Wt8QOvLfE1xNOkZYzxwQkJBU5M0dKTYUoYryqZqFosGd00vsZhnvaYAfkRV3lYxpY3prwmUlpRYRr1JZfSrmGcLaqpLNnHXNVZi7F/QCqvDdMnrpjO5tSYc7KxV8PqpcjBZL0csdcjZ48r2w8IJfQY4SS/CuRjxfEd+0e+EeJbJp+36lnBZDVxpQkbX4LHqlA6FdZpJOJobMZCBkAvSvlInoSMV1fEFSgPOL7G8eFzs0bYMyVyAAbn6K5NiUA+j0qja1X1HDZTNGuSis0dpEYTaCCZgV01mtVbyHhZkvs6kAY4HrgYmai1LWSbktP2j3oQUv4TcNBEzglTyE3foGs1cvlAyEso9XMnN6XOH/w+b6mVXe1FWUwAAAABJRU5ErkJggg==",s_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgUlEQVR4nO3XP4jPYRzA8ce/krrz74pzi4zIZLSYTM7ApJyynBtks1huvmQxGRSLRUmRulHUlXIkFGVgkCtJHSZ56amnGHDP71d3931+fV7Tb/y869vv83xSCiGEEEIIoU+YxCLmsD+1Dp/89g2nU8v83RWsSwMUlM1iOA1QUPYYW9MABWVPMZJaoc6zZqLUe4XRlR5uPXZgLw7hGM7gAmZwDXfwsAy4oDfPsaXf4TZiF/aV4Y5iAucxjau4i0d4iQ/4Yfk9yLP1ErITb3XbLaytDbqkDZdrg/Ln04pTNUHfteN1TVB+ILbifU3QC234ifGaoLwvWjC9ZEwJGsVH3XYda6qCStQm7MZBHMFJnCsLNd8qN8vzfh7v8HUFY2axIS238rIYwwEcxglM4WLeGbiBe+XUfoPPfcTMYyh1Vb5Ke4zZnrpuoGKyipgn2JZasUTMHDanlvwn5nb+t02t+UfMTPV50DX48kdI/n08tQxny2K+jz2rPU8IIYQQQkir5heZhVZR83erZAAAAABJRU5ErkJggg==",r_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERklEQVR4nO2ay48VVRDGL44ygxBlYHjs0AVEAhn4B8ANQUARMG4GYUECYYLOIwPEsOCRuCHiyoTEjWHDho0xKvEVwQloHB6+FgoMLIgCCwgQgwMEyM8U852kMunb9/bpM8yVUEknnXtOf1XVferUd6pupfJEHlMBpgCrgX3AYeAMcB24q8vu/9SYzVkFtFYaQYAWYD3wDfCA4nIf+BpYBzSPhQMTgK3AZWfUHeAIsFNfZq69ceAZXa36zcZ2AUf1TJBLQJ+9nEflxKvABWfASWAj8HwE1mRgE3DK4Z0Hlo/2MvrIKTwNLE2Ivwz4xeHvT/51gJky3ORfoAtoSqpkWE8T0AMMua89IxX4i/rcaNeZnwQ4X2c7cFY6B82GsoDTHOAJoC2ZtbV1twLHpdticmaZmAjL6UdgYnJra9swEfjJLbPiMeMC25bTlFGxtD47prpVsT9miw2BHRUTwLPaibqBd4ENwEslYmZINi0rkuxCnuiK3Hl2ADeqZPNjwIII3F4X/LWXGLDN5YlCWyzwNPAJtcXe7ssR2L/q+d56AjzQjsLJTkvIy3fA2+JSHwC33NgVYFJB/OV69u9cbiaFD3eIyJgwhhvk/Yw5c4B/3JzOgjrGuZ10bd5EY7EmGyMcWeEMvGhLocq8vW7eoQg9m/Xsl3nniftipDEEcJEoubHYfTnzOpwj/ZGJ8i5wL9NO0WuTI0XBCxryjnPk00iM7/X861mDFowmO1MYXMWAp0R1gmyLxNlTLQ4rOoJme5lIgC3OCdvBpkfirBHGZ1mD5zQ4N4XRGfizgJvOke0lsOYJ40zW4DUNTi1rdJVkFpgsuo8+zwBtwrmaNWg7gcn4soZnYL/nnDDq8kJJvGZh3XlkjgCLta0HeTMBZnOeI8mXlgjk786JjxPhtuUtreTBPiLbX0/1kqgR7F9ocFUKZSOot8lXCXHX5G2/ISHuSqjQs+EDCXH35CXEQFGOJlRomN/q6kqI2y9bV1YjY4E0Tq40qDBMbgNpfK7aJGOvJpsqDSpAp2w8nDfpLU06lUjpazp/2LUhAd444GfZ2FEr0dgx0uSVBIoPumA/mejFmPxVsw2h0j7yvKlRHGGYr/0mrO56Hmhxtd6eBnKkTzhn624KuWqFlW3aSyifDSzRtaAEzkLgdlR1R/2J8AaSU/uChfRB2fJhDECLCseokDwWRexJwIBsGIjuM+ptWHcWnbWnJbc2P/H9IN3nSzd81OgZdMsseq0XjIlB6TxX9iDmgWe4ZTYkVptZgEuwxfa5wB6ILVDUipmwAaCCcpLuqzK2tTJCnngY2KPae1fPI3x2VIvdHPMvBsVBp6MdYSkl6xbX83V6HZ1BjNTo9W4dfOap2zRel93PB97QnH5XJwi0o3us/gFh3GytFZRHFBjqlXsqDHaMiQNZYgVlO+jYqQ34XL3Ha+5PNXb/hx1PNWdl1fPEE6n8/+U/k2NewNs+vzQAAAAASUVORK5CYII=",o_="/Website/assets/facebook-ae63e442.png",a_="/Website/assets/tiktokwhite-a5e93b39.png",l_="/Website/assets/insta-ea65fa29.png",c_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAL6UlEQVR4nO2da2wT2RXHp6/t7n5q2S1qt1VbqXxY8WUlZvwY24lf8/A8siF0w+MDQjwLpBsB7QJBSAHxCCJCkE2zJBJvtkJAQVAKEo+CChQ+IUQgCwQSQoAQKSQ4DQkkdnKrM5trDVESe8aTeMbMXzqKFdvJ+Pzmnvs655ogbNmyZcuWLVu2bNmyZctEYll2YiAQ4AOBQHEoFKoKBoMXgsFgbSAQaAgEAh1+v78XbPBxg9/vr83NzT2fk5NT5ff7v8zJyeF8Pt8vMv05LCNZlj8Mh8P5oVCoIhQK1YbD4YFQKISwBYPBhAUCgbfM7/cnLDc3N2E5OTkDPp+v1ufz7cjNzf3c7XZ/kOnPaSqVlpb+kGEYH8MwNeFwuDMcDiO1GQDgLfP5fD0+n++I1+vNKyws/BHxrsrv97/PsuxShmEaGYZB2MYBQMI8Hk+Dx+NZAtdCvEthhuO4vzIM08KyLALLFACv16uYx+NpoWn6LyRJfkhks1iWzWNZ9hHHcYrjWZMAGIQA9pSm6UIi28Tz/O9Zlj0FjsdmUgAIjKbpkzRN/47IBnEcN5XjuA61880OwPM9hE6XyzWDsKoikchPOY6r4HkegVkQAAJzu9018FkIKykcDn/E8/x17HwrA6BpGrlcrv+63e4JhBXEMMwnPM/XRiIRlC0A3G432Hder/e3hJnFcdynkUikGZyfhQCQ2+1upmn6U8KMkiTp15FIpAk7P0sBIKfT+dR0IySI+ZFI5DtBEFC2A3C5XAChnqbpiYQZBCMEQRCug/NHA6B2+FBjTABA7fChNhTAoF0zxegoEon8DTt/JADgZLUDsUPD4fBbzs/AWlDCwU6nUzGHw6H8BCcnAQCv+zrTzv9C7fyRAIBjwUlbt25FZWVlaNmyZUoY8vv9yu8xlPECgB2PHQ7vKSoqQuvXr0dr165FFEWlBGDQ/pix5QVRFKPJAICjwZELFy5Ear158wZdvHgRlZSUJByHnTscALXThzp5qIGjhwOAQw12Lvzvy5cvo1gslriugYEB5XMAnFQAOJ3OlxnplEVR/KcoiigZABx+9u7di0ZSU1MT2rRpU8KxuFWAqe9qdQhRx291J4ofD/c8OBAcWlpaipqbm0e8HrgWaAX49UkAQCs6Oa7OFwRhKjg/FQAQVsCRt27dQsl0//59NG/evMQdjO/avLw8VFxcjDZs2ICqqqrQwYMH0fHjx9GJEycUO3bsGDpw4ACqrKxUwsiSJUuU/42dhB23ePFi9Pjx46TXce7cOUSSZKKlJAMARlFU3rit5wuC0KQVQHd3N0pF8XgcHT58GFVXV6Nr166hzs5OpFcvX75UQkxFRQU6efKkEl5SEbQOrQAcDkfjuGx3iqL4FXZ+MgA4/s+aNQtZSQMDA0rIwv1AKgDASJJcPqbOh3GvKIrPtAJYtGgRspp4ntcMgKKo52PaCkRRXCpJEtIKAOK61RQMBjUDgCGtw+FYPGbZC6IoNmoBAHcRAJg6dSqykmKxmDIK0gmggSCIHxgOQBTFIDhfKwA8CWtra0NWUV1dneZOWAUA4PnHAsAePQBgHgDN+fTp08gq2r1791uzYR0Adhnq/MLCwg8kSYrqbQEA4NChQ8gqqq6uTrcFdBraGefl5eVj52sBgGfBMInq7+9HVlE8Hkdz585VnIkncloAgE2ZMkU2DIAkSRVaAeAOWJZlS8V/rOfPnyszcbwyqhUARVHbDAMgy3KtVgA49o+2BmR2wdIGHg1pBUCS5E1DnF9QUDBRluUBLQBw7Ief0WgUWVXRaFRZ+AOH6mgB/SRJfpw2AEmSeAgjWgDgCdiOHTuQ1bV58+ZEh6wRABiTNgBZlou1AsDh5/r168jqunTpEnSoiTCkEUCRES2gSg8AsJ6eHmR1dXd3J5yrA0D6W5ayLJ/XAgDHf1h7zxbNnj07MTHTCOCsEQBuawUA8X/NmjUoW1RSUqIXwC0jADTpAVBeXo6yReXl5boAkCTZaASAdi0A8AgIpvPZosrKysRISGMLaEsbgCRJvXpaQDYB2L59u94Q9MaIFtCnBwDsw2aLysrK9ALoMwJAVM8oaN26dShbtHLlSr0AXhoBoEUPAMg0yxbNmTNHbyf8NG0AkiTd1TMRg9elmgZiZsFngBwlPRMxkiTrjABwVu9SxJMnT5DV1dzcrHspgiTJM2kDkGW5Rs9iHGzEQPaa1XXkyBFlCKpzLegbI1rAKq0A8Eho+fLlyOoqKipKxH8dAL4yogVwWgGow9BoSbBmF4RQ7FAd+wEQukJpA+A4boLWDRl1GNqyZQuyqjYNZknr2RGjKGrgs88++xlhhCRJeqBnTxiGowABsp6tpgcPHiQcq2dTnqKou4RRkmX5m3SyImA59/Xr18gq6u3tRTNmzEgrK4KiqArDAIiiKOkBoM4LWrVqlZLuYXb19/cr15pOXtCgRQxNzBJFsVsPAOgLcHoi7BGYuSX09vYq16ilRmwEAK8MPwRKFMVvRwOgdri6PFVdJwYQ5s+fjx49eoTMOOKZo1pywOVJOjPj9hFGS5bl8EgAcA6ousoRl51iIPA8/B7CETyuqalBr169yrTflRa5a9cuJQkLDzeTFWpnJDl3pPR03NkCCHDqnj170MaNGxVQuOIRnscV8nhkBIV3oiiinTt3osbGxnF3/LNnz5TrhWtTZ7+lUik/GgCKourHJD0dJEnSn0cCMHTWC/VdZ86cUQrscA2w+pgC3BoCgYBy982cOVMpwLt582bK9WRa4/udO3cU4FAyNVxBdqpHFYwGgCTJPxFjJehYJElqGRqC8KQLErGg/hd09uxZ1NHRoZSg5ufnDwuBGQxZGAS0ClzTO3369EQdr17Be1evXq38LVwfPDS+q0tb0wVAUVTrmBfqDVekp86Gg44Mr4LCnQxV8XBX46JrHI6GnhURHnwew4Al4IKCAgWiXkFSMFwjDi3qGuJ0DusYpQWsIMZahYWF7wmCUD/cKAhDgLWjhoYGxQk4LR1qeeEOx33CaId1BAbD0oULF1C6gppfcBQ41ajTUkYA8HDSpEnjc3iHJEkFybIiIM7iGl8IBVD2A3mW4Fw8SmKHAYA7aHi/ERs6cAPA3wJHqp1vNIBxK9TGEgThX6NtyIAjt23bpjihtbUV3b59W+kfli5dqkBQn5YSVp0NASEIws++ffuQUYKRGTgPhx6jAYz7UQUgnud/JQjCi5H2A/CdDYUOWOfPn0e1tbVK56o+EyKgOvUEh4lUjjZIVTD6AWeNEYAXDofjl0QmJAjCjGTL0TC0VK8w3rhxQwkt8LOiokIZvi5YsEAp5obsAyjoMHqm3N7ertyp4FijATgcjukZcb4KwtfJSpSGznghLq9YsUJpDSD4+fDhQ+UxhB41NCME/2+MAGwnMi2/3//jSCRycbjFOLwSCjPjoR0qDBH7+vqUx0ePHkWnTp1SHsPdX19fj4yW0QCcTucVkiR/QphBsix/PNyhfXjpASDA7lImV0KdxgKoczgcHxFmO7ZSEITG0ZajYZI2Fnf3OAN4TJKkOQ9w5ThuEs/zibNDhy5H4xEP1A3v379fmWhB/IeRUktLC7p37x66cuWKEpJMCuCRx+P5A2FmwfCU5/lbw50bql5yUB+0lzO4/qM+lszorDoDANQ5nc7fEFYQZFLwPP+fkQ5uxauhYdXkS30aogkBXPL5fD8nrCQYHfE8v0XrybkBkwGA4+tNM9rRI57np/M8/8KCANpomv6CyJYvZGNZ9h8WAnDK4/F8QmSbeJ7P5zjuvlkB0DR9D75fjMhmQTxlWbZ4pK+xCmQGwDOPx/OlpWO9nhMYWZadzzDMXfVmDAxLp02bhowW7E1Dp6peEfV6vfCtGPMmT578HvEui2EYKhgMVubm5nbApv/Vq1cNBwCbQhD6XC7X/2ia/rvX62XHLHvBqkIIvd/W1pbX1dVVHYvFvl8eNUDwt7q6umra2to+RwjZX+aZqqLR6IT29nYxGo2WdnV17evp6fl3X1/f/Xg83hqPx+EgIkg2jcPjWCzWCs/Ba7q6uvbDe+C9nZ2d5lo0s2XLli1btmzZsmXLFvGu6//3GWrOKsOZEwAAAABJRU5ErkJggg==",u_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFp0lEQVR4nO2caYhcRRDHO10zMUZJEFHjQfwk6hePDyqoIMEzoqIgIgQURY3iDSoqwuoHL4wHijEratSYnep2IxiSFUSNR7wPRAkSjYaIUXLiTtXbJKubln6T6G52nezMvve6Z6Z+ULCwMN397+rjVXe1UoIgCIIgCIIgCIIgCIIgCIIgCIIgtDJ9bh+o8GwwtEAbXglIPwPSABjaBki/a8MrwNCjgDRLdTkdurrtw+I/D6gJy1Uw7MZntFYjX9VQR9j+ozXyfbm2pX4F3GS1aPM0FRHaVm8Aw1vHL/xI04a+KWH1tHpllDA5CZAXAdJfGvkaFQqNyVyN/K4f6iqG6QbpxWaFH2FeWEO3jPh9OzBTG7pdI30+bNSsV9btG6bBzk3yw7bmNdyrrIOQI1EbficT8Ud0BM8HpOcAeRUg7Rz1/wpfEKzNJVs9fY85dIHvlBB1AaQXMhd/72vGSyHaOrzRj4wxdF9W3a5cZD20Ta4rWnxtaHm6/g2n4HYrP/ePWTmkt5TdsH8hlbBbp4PhTYWKj7RMLXRTdleh3MMnguF5fn1QRQJI6+p4yJdqCR+aex0MPVTglDOoLd+tevuP0khz0rXhvzVwpVrhSnm3d2Tj97bHRt4AyOfnVoEVrgTImwvrgLS9tG2MjllbhLONAgzx3itNOwH5qTy2qYA0q8ip5386ZYuqVI/Num3jFeC38c+b/F3JVs/ItHzDTwYWf6Of/1UoNPL7TVTaqN6BIzMp3/g4TijxaZ3qrR6jQgLITzRZ+QG/hVU9yWETKt/wmhDia8PvqSV0cHZKNisA0lkT9KIdYOiVMvLxTZb/R+Hi+7BL0budursQQ+sz8qoPNdLNyiaHj7f43VvAgq2iYkIbviPbBtKQNvSx/91Spf/UeoEubeiLwjvAr2FRsdRNBaRf8ms0DWqkr8Dws9rSrWCrl9Y6ZmAmGH6t4+I/YwGWzvaeG2A6cAHsaRUj/hM9AnFc7ob0oIqCRZungU0uGh5+LjYuw0Es3ShEwUI3ZVelVoOh+0s9ySnpoYg/DkTaHlooyMsqPFvFAhju32N47qjdOuCNwYUy+ZiPhKpY8CHn0IJAoUaDhR+61MMvSOFF4cJMG/pMxcToM+E2N+THVWx01DRkk0tUbPgv087wfvpb2epBKjqcm+QPqYMLZAqIgkaL5RntvPWE2gJ8o4qZ9GoG8pbQQkEuRkMTPTwqBP81XPQdHSjG+5erlqGHDtGG+kKLBlka8rmqpehyunZxiVe1gfg/hLrvOnG6nAbL5/nDFDD0a3AxTeOmTXK9aiUA+RlARn8Za9ffi33Cg4+jhBYTGrc1oy7gxo42fG0EwrlMvB/pctVyvOr2a+TGHERq2tDXLTv3a0OXhRYQJmQ05AONqpUB5J7wQnKzNk+1PAvdFI30SQRiugZtdbiku6yxW6fnkjhncjKk7enZdlth3eR0S9oC94Z0yHzfvPGelT4VEK3383zVCZRscjIgPZ/vdUZu1PPfjuqwvTCWJEf4JwE00pvBxPd3/Ze6qaojeaP/QDBsA4r/gf9wVB1HGi1N5haa4ThKfOorLJc5qugoJhfWgnMB532k7niyXIrA8gyNfE96bTGs8Dvaeqv5L92u7N/T0ch3aeSP/JWOoMKbdMr5ttlctKiACp2pDd+rLd3kvck/lKEt3wlID/tzgFra0FjZ5KGMBgHpgbbaZgImF4dKEYXGvL6v3EPHqbak25U18hWA/FOEwn+aPsLXEaQdQXOCRz4xXWBf9/lqqlMpWz7Bx9LrPWOTvbfz9z6lNYrM9WhwbpKP+fjnHP2nfsaL8qbaYs9X+1BG6Ka2BtZN9qNDG74SkB7zyc67IqNr0ucld787hEz+MVVA/tHnBvsgWfrgKtJtUOFz0kc+WvWcVhAEQRAEQRAEQRAEQRAEQRAEQRAEQVCdxj/A/ardACSDyAAAAABJRU5ErkJggg==",vf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAOfSURBVGhD7ZldSFNhGMf36dxQ19GzzamsCyW88KOLJaTRLMQbCykTQsFBhkgMLLwwUArmTd1Y2IVoTqLdOCdYF1pCXojEGGpIqAycG2LSFoagFaiM9bzuqZvtrB33dYLzg8N5nr8T3/85e9/neV8FPDw8PDw8PIlDjPdUIMzKyrqWkZFx7ujoaAvyQEhOLEK8Jx29Xv+ypaXlLok3Nze9o6OjrYeHh46THyaQlL0hk8k0KZFITv5ebm4uZTAYjB6PR7C3t/cRpCDRE4EI70knMzMzA8MTpFKpBEyaGxsbPwiFQhXKcZMyQ0zAm6rt6ur6BHNLj1JcpN0QQafTFfX19c0rlcpbKJ0aThgiwAqoAFMThYWF91E6FZwxRBCLxcLu7u5npaWlT1BiDacM/aGjo6OnsrLyBYSsx8dJQwSj0Wiqrq5+DaE0pMRGPIVVBMutGmqLWiaTFcClksvlKpgLapjcmpycHBrqjQrQqAEyR/D3WDE9Pf12bm6uGcLjkBKdqIZgwEoYiAEGWAIDK4Fx6Wia1mo0mny41KSW4EeTytTUlG1hYaEVwn+2S9EMiZqamuZramouYZ5WbDbbK6fTeQfCqF0FY+uTnZ19va2trQfTtFNWVnbe7/erfD7fO5QiwrgolJeXk+8tp4AHfK+4uPgRphFhNFRRUXERQ07R2dn5mKKo25iGwWhIq9XmY8gpSPFtb29/jmkYnK1D0YDyIMMwDEZDMAH9GHKOmZkZO4ZhMBpaXV1dwpBTLC4uLi0vLz/ANAxGQ+vr6+8x5AwwJtf4+HgDhD9DSjiMhnZ3dyfg2sM07WxsbLgtFktdMBj8hlJEop0pHMMT+Qpdbx1snxknYSrwer1bQ0NDV8DMF5QYiaU5FYtEogLYIp+F1aWINKAKhYKGTkIF9SAf+jw6Ly+PhjtFDj+irUCnYXt7e2dwcNAQCAQ2UYpKMo6x5NDUUlAvKOjEKWhgKXgYZ3p7e8lWgBVut9szPDxcH6sZQjIMRWRgYIDVUdXa2tr62NhYPXzNdlCKCU4WVuiqnWDmMlszBM4Zmp2dnYatwlUw8x0lVnDKkN1ut4KhGxD+Cins4YQhmPTBkZGRpw6HwwhpTFttJtJu6ODg4Ed/f/9Nl8v1ENK4z7hTZoi8BQz/srKy8tlsNl/Y399/g1LcpOy/DzRNNxQCmAqsVusQzJdmmPw+lP4voNhqq6qqLLW1tZPkvAJlHh4eHh4eHu4iEPwGUeoBBUIFKA4AAAAASUVORK5CYII=",dr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGElEQVR4nO2Y2U8TURTGjya+aXxEUdFQAQULLW3tNkilDQItncQnY6KPGjXRxO3BaAz6z7hvkRhZfDCoQeO+VIwJGDVuEW1dCTM95kxvJy0ti7TMXJj5ki80p3du7/nNuefOAGDKlClT0xDuPVoh7zvWKx068Tt5+CRmef9xlAWxIEtCdEQSxHsP1gjHgcvkD55I5CTOLO84VDCAtE+VWPH2am8n8CR537He8ZJXAIS3FRUA+Va55zrwIilf2aeT37KraMlnAuAKQpIlizf6EEdHlb/yniNFvfP5AJD7LJ4efgBIEiqSJJQDm4uefD4AXEBIpgFkaCaSHw+A7hCSHADQFUJSQwDnltZNCOG2xdM1pwHctHgmBKCcDhZ395wF8N3dhhcmqQIG4fqcBCALIv7whGm/4/lJQDysaujQ7xgURN1N7w76PQgJPACIjmgKIJn5CMwBALIJQAslzQo4mb0FDnQYewvIOw8bHED7duMCkLfu1j1p7QEc6EiVPUd3XlMAMgeJcgUg7m7DWE0gKyb5RYzVNGLCHcbPzhZ8XtOY45frAjjia8fBuiB+dDTjRPPSHPnGcAHg8doG5WWE3tzSsa+uFiX2rLoR71X68768nF1Sq4y7WGrD86V1+NvbnjVv90qXMo4gdpU58eryej4BPFyTAjC8vlWNfWEAnlRvUGN/fBEldqfCl3X9haU2JX6/SlBjb2whFRRVwrUyB15ZZucbQKwmoCycTCX+PwCoGs6U1CrJjvqj2LnCrv43aNYAOJXHUwVAMSrxPosXB9YFFCCP2LyzBsB7e7OyWPJbVsJTBdBf4VfLnvoB9ZUB68bZBWC4gB5AAOhzzyoXXiq14V9few6Ay8vsKmBqjNwAeFK9QV1oOkYwKEa9IB2jI+90SS32V2YDoITvVvpVSAlPap7X1qbUKeBpU0+ETD/NgKsrgF/eiFK+Y+NvbMGco+2dPZRz9z7Up7bO2OsJxpAtqHym79MNNu1fnggfAGSObEgAcW8Yh1zNOOAMGQ/AJ3crxhxB1YYCEPeGs5I3HIAhV7OxAQw4Q8YGEBuTvAnAYVYAmltAC8kc7P+fvsjc6gHxjKe5fIlN1ZoAkAQxMZNPc9P1i/pgQhMAsj96sZh3vhjJk185gpc1AYC+aJUkiMMz9TQ3TX8bdG9apQkAEjaIK2RBPCMJYrwQAIXu+Zgj+IPuvKbJmzJlypQpU1laAACLAaAEAMoAoBIArADgAgABABoAIAAATQAQAoBNANACABHmFhYLsTEBdo3A5rCyOcvYbyxmv6mbFgGABQDWs0VHdHKIrYHWslCLxOcDgFPHhCezk63R0ADmgQZaCADlbH/quQWCbA3lWm0BGEcTNUE/a2iNrMHRosdrgvQdjaGxdA1dO6NN8B+73L4BjeKSlQAAAABJRU5ErkJggg==",Ts="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVUlEQVR4nO2ZOUyUQRTHBxTEQgtNNOHGBKNyFCZedFYUWFsYbazksLMx0cbCCgqgsDCLlQ2gxAZi1CgxsRETwcIGFSnsrMSDQ37mhZns5GO+Y9f5lt1k/wkN+97M/33zjnlvlCqjjOIDsAdoATqBDuAIUKOKFcBB4CKQAT4Bf9kO+d8X4BHQDzQUA/HTwGNgg9whBj0HLgAVhSZ+EngRQW4d+Aq8BxaAJWAtQn4O6CoE8d3AbQcZ+ZqvgVvAKaDKoVsFtAF9wLTj1DaBUYmftMjvB94ENl0FxoDjeaxXCwwCK47TqE3DgEuBjV5JdvGwbgMwFVhbgr3VD/PsRo3AN+AXcAOo9Lx+rz5R2wi/J6H9OLV8DnQHXOptajGRshGrlhHDqtTAVqayM9w5VWoAngRcKXmxA84A88A4UJ0q0+ik8dMyoicXZUmRBudVCpAvClzWf86vCwxZPJ4lXbhJV0VzJTiUAvlKffEzuBIiV2dVbImF+qT52GC6AORDDdDyT8miN8kG4vcG1wtAPhNVFIEBS3YiySaLlkKnZ5+/FyA/FlfRdUNk8DlukxrL59Z9VcF8yQskC2ouJg5q4lKXwXKoYFb+LvBbqmUYmXzcJgjdWxg0RQm2W4IfQgWz8itRpHyQFwgXS79dJfS3hVDBrPxIGDlf5AW6qzPoUGEAmi3BpVDBeN/ela/Pu6BbUoOWKMG91kRhzdUaOnRcX3rRx5e32ljTwm7GXud1I2HQFikcbcR/k3fE5XIShUlLoS9WIavnzedtANes9SZVHPTQyWAmVmG7EcNxqTXHNWdyuhnoJtvEgRS1OrWDAH5Y/p9smqcnZgaDqbOMgM5egge5KMm4z2Blp+eYwL5cFSS/v7OMmFKlBqDLamyS3cWLDWzNKg1k1NGtSvChYi4QDyVnRG2gOktZ7/e8RwVwFXgInPW5ttmgNWAEem7T6GHto8Cste68H9buk7DdCT23Gcqn2AEngPvAn8Ca46kYYMXEiOMNbENPDwZ0T1EdMhiWJ6mbwMtAhjNJ4k5Bhrkyq3Scho11fYeXTuoj8J1ozEZ2WikZIYHXIxOzkFfJOIiR46kEbR7G1OuB2ETEM+uq/i2jX3sOq2KFjpVm3YwcAw7sNKcyylBu/AMBkex5eMS43QAAAABJRU5ErkJggg==",Cs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2ZTUgVURTHx++ihEpb9EGbMAiihRn2YZugwiSiArOFIBjVMlr0HS3SglYGlRtJNxKRmpCtFVq2iKygBKHvT0slyBTqFzfvxOny3syd67znC94fHm+YOf9zzr1z77nnnPG8LLLIYsYAcoENwGmgG3gCfAWmgO/AW+AxcBM4Bqz1MgHAcuAS8IZo+Alsm03HS4BWYBJ3HJ4t5+uAkQQOvQPagHqgXA+yAJgLLNX3DgHXgcvqvpdmx/P1rJvoB2qAPC9TwfQs3jUcHwK2e5kOpmfedL4DmJcieweBUeCWWoJxKDSXzblYPE1u74Gw1RrHhk2b8wrAUcNmrecCHUVktOlwUuR2KPYJu1+A0pkunaGgNa8Ps2/q30Kvkh0HmgJkFgEvhP2rLiesPKR2hMgrh3xUB8jtFHKjITr3CVnly7IoA1Cz5KPfQr5dyL8EihPIFAOvhNyNEJ05wEMhH/p2fWKekdvUWHBKgY9Br1zdE8+VbImF3j2CowafYzMAlVXK9CA/lDTNO2Aka1XiWZW+56POUmeBsTwrbUhnBKHNxpDg3hHc58AcoAh4Ku73RdTZLbgnohLqHTb/mOA365+PsUib0fujs1Hwu20IqhjxUR7FmOYfEfwp/XNOoYEKwR+0IaiDw0foRksSPQZInLXmOOhbLHSM2BBk/C+MalDrKNOlpA91Xeaoq1DombQhyFfulA0Cq4wB/ABWO+oqknpmcwkNxLCEPtsQVPfAx7oM2MTro27iHkFodAij4zGH0QbBv21DOCUIXRGN9QrusyQH2b2IOjsE97gNYaMgjNtGohSlEvlGjlVhW1C8FqRNlsncp4jJXGiRAuwystzc0AFo4llNmrKJ38ZrDkqn1TMf7RZ67wv5pAVQspS6GlhjKT+WgoKmRshOqOaYlyqo2dGDaLaQbdayFwJk5gPDYgBXvP8JQKexXxZ6/wuA8/yLvXEqrwS2xKYw3PkWLy4AW4FfWnGPU68meM13Gs73xtowBvYbBtRXl90uCVqCaDOcwPl42+/6gGsRb8GHan3URpktfcKqQ0rG+b8RJ6WtetXkAt4nMKw6yl36I8ZmYKXq5umCpFSXhg360JPpgY8PsW5Yixz9mpEqu2JCz/qCtDhvDGQFcNHhIx86rWgClqTd8YDPrCd1W2ZQV3ZTusZW149UPq96O7pIsUvMssgiCy8IvwHt17k7D5kv1AAAAABJRU5ErkJggg==",d_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH7ElEQVR4nO2da2xURRTHRwnKFxK+oMSon0h2eRjfQItAK4RGEJ8RETRgQIiiWAUNpPKwRm2VIopPwAYMiHwAbqG8CpRuX9vHyhba0tLH0i3bsn3u3rstbaHlmHOzvb1797Z7l625pXv+yUnI0jPT/f9m5szMhyljJBKJRCKRSCQSiUQikUgkEolEIpFIJNJQFQDcw/N8JM/ziYIg5PI8X8vzfJcgCEAhAHqBngiCkMPzfALP8xHo2f8Cwwsim4wXgh18BR6PJ3qwZ8UWAiGEugr8CAAjQoUxguf5wwRDGJQl2el0poYERRCEJIIhDGp9tFqtexljwdcVj8czu79GCwtK4csvkuGNlzfBnJmfQFTEGoqINaIX6Al6Yym43C+Ubdu2fRQUFKwbgiBYlA25XG7YmvA3REd+TAAiBh6E6FFS4gFwu91+QGw2W9XIkSOfDGapmqFG9vtv9xOIiOBWg60JB1RnSWxs7GbG2AN3XDvyzcU+HU1blgiTdx4F46HzYOBMFJxJ9GLyrhSYtjTBZ6YU5Jf6AUlLSzvGGIvRCqRQ2cCmDbtlML4Dw5EMgsD1MxCPZIgDttevzXF/+gGprq6uYoy9xRgbGxAIz/P1ygZeX/CF1MGk3ccIBjfwqjBp11HJrzde3qi2BW7xAnlCC5BuZQPPT4+VOjDS7ICAy/ThDMmv2c/F+gFxu93dXiBztSxZfg3I6wfVDJMmD+SeqXnqBfIKAeGGFJBFBIQbUkAwaMkyEJDwO6tE0Qwx6Q6BgHD6G09AOP3NJiCc/gYTEE5/UwkIp7+RBGQImGcgIPobZiAgA5vw+LEsmHumAF5Kt8Czx3M0GfZUajbMO1cIC4LIwZh6IhdeTLfA/HOFYr80Q2TmfFp4GQqa3HAbfOVo74CfympUjX47qwhyG13Qfds3q6mzC/ZWOyDypNkvx+jtq8Tl8eurpu0G/HD56qDCuetO6vjlTzgaIZDMTS6fvI1FFX6GKlUptPv1t89WF7Cv1GsN4QvkYE29jxm1bR1w8Go9JFdeg5N1jdB2q1v83NrCSzmzTudBV0+PlJPX5IKvL1XBRmsF/FJuh1K3R/y8nG/z6WtZzkUpB2GmOhoh/mIlbLlYCbsrr4G97Yb4f1ytMzyBLDRZfWAghIkpmT4/83RqNsQWXoYZp8w+s6NX+U0ucRlStv18Wj48o1jm5LMD/632O2Etmnw0MzyB/HO1b3bgqJ6Qoi3vu5JqKQ9nkdb+UmobpDysFYNl+rABUsG3SQbtKKvRnLc895LP0nOqrgnWWspgzpn8AfMSZSBxycMB8X5eCTwnm31hDYS/eUsy6DNLmeY8I2eCnMZW1YLc0nkTDtmvw+KsIr+8J1OzxRqlpmvtHbCnygEvnC0MXyCCDAiO8GByHzuaBX9U1EJz501Vg3Hm/HrFrnr2QGDt3s2CUp09PUENjmEFBLelvdp+h2v6xJRMWJRphW+Kq8Tts7vrlg8UtZnSu91+N+eSWEvOO1ugo7tv13ajuxumq5xhhj2QI7VOyYQLsm2tIYRAo3Eb3Cs8VGrJizyZC3XtfcvZ6vyS8AOyNLvvXIBKKrWpzoA3M60+J3U0fUVusXhlEmj3Jp95eHLHs8ikfra1Ra28lIfFPuyAYOAOSa5LLgF+Lq+BhJJq8axw/Uan+HlRqyDlHPAajkvLYbtTPNityiuGD/NLxSsT+VXKQtMFKQ9nIQrrzl/VDoizXoH3zMXiVYr8tgDbnXYiNzyB4MiXLzH9SX7q1nL9gdqvOPwVNrsD5iDKTUUVg/b97jogvcsSFuVqT1+R7xUWW6w1UafzpJ/HkzRelSCk/raweJo3qsD/7YpdvLBUEx5OccYM5ne7K4EorzwWZxWJhz88E+D2NtAMwyt0NPKd7Ivi1b3WIv7q+X9hpbkYlmQVwcxTfcAJyDCOqLt9hhiGWRAQTn8IBITT33gCwulvNgHh9DeYgHD6m0pAOP2NJCBDwDwDAdHfMAMB0d8kAwHR3xgDAdHfDMNwujrheb5HmRw9ve+NLHp4xhQYyJG+pzXQO6Wfbrf7djBAnMoGXp0fJ3UwMfm47qPPMMRjUnKq5Ndr8+P8gDidTlcwQC4oG9iw7nepgymrtun+hQ1DPKauTJL8ivt8px8Qm81mC+ZpjR3KBjIzLvisiVM+2A4T9p/W/YsbhlhM3HcKpry/3ccr9E7pZ3p6+knNj894PJ45akUIH+KSd4QxM2otzIpeRxG9TvRC6Q8+iKnm5fr167/yAonR+l5vqbKR5uYW2Lhhl1+nFGtUPcBX+NAzpY92u7121KhRS7xAngoIxFtHXlIji3H2dAHErv4JYlRGRLhHTNRa0ZuzaQWq3mHEx8cnygr6g5qAeKHs7K9RabdwvRHq6xso6htELwL5lZeXZ5LBmBfs+733NzQ05AbqhELQ5EF5eXnpmDFj3pEBeUgzDDmUsrKyY2S6ENLAs1gs2ePGjVsqgzGNhaB79+zZE+9wOPwOjBTCgB44HI7rSUlJ22UgMGajp6EAEaGMHTt2emJiYpLZbDbV1dU1tLa23iQggg8A9AS9MZvNGQkJCVtHjx79tgJGJGMstD9bodCjjLEXezsYP378cqPRuILCuAK9UJgvD/TsEfY/Cafbw4yxqYyxBYyxhQP8IuEaC73eTPV6FfISFaxGMsbuo2D3eb0gkUgkEolEIpFIJBKJRCKRSCQSC1f9B8GU1jHQzyiCAAAAAElFTkSuQmCC",f_="/Website/assets/htmlpage-a6760f98.png",h_="/Website/assets/csspage-e0c0c35e.png",p_="/Website/assets/jspage-a13f6e73.png",m_="/Website/assets/designpage-974c2073.png",g_="/Website/assets/packagepage-394d1d28.png",__="/Website/assets/vuepage-935798b0.png",v_="/Website/assets/tailwindpage-c361d86c.png",x_="/Website/assets/mainpage-7f3e359b.png",w_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAICklEQVR4nO2dW4gkVx3Gj+6lb1XV16rqLGIS4y0EdSXGXUgUISvmZfHF3YjCigQXfNAEFPdJyeMgRlkVYlAQVwm4BmNcMTvdM9PdVX2d6Znurp5WnEQxqy4BxSx7cTfMnPqkqnq6a6Z7pu8zVb3ng+9xpovf959v6lSdqiaEiYmJiYmJiYmJiYmJiakfYfXIUTTky6jLr6IufqSvH2IajwByAPX4a1iNw3Q9voaL5ADju0dCI36qBb/tz7EA9iqA1XjeNv2WNTnHAtgL+PX4Ix3w67LlmnSchTD5AC624ctta2YAv2YBTBL+n+X7UI+vd4VveQOa9B4WwqQC0OQf7ALfclX8PgtgEvDXIgLq8rUdwWuSUUFAVbqOcjjIQhh3AHXxmz3hb7oqfYMFME74KXIQmvRGV/h28K0AxL8bP8NCGFcAdfnzPae+Pf1GAEA19iQLYFwBaFKxJ/yqHb7pJRbAOOBXxcd6V04HfKBi+lEWwqgB1OTf9lc5W8A3HXuJBTDS9Mv3NxdXg0y9PYANlMUHWAhDT7/0wwErp+2VmOXl6HkWwDDwK8EQqtKNwSrHnPo2fCuAm1gVIiyEQQPQxHNDVM5W+GYAZgjfYgEMAr9MDqEqXhmqcjrgx4By9J/G72Qh9D390heHrpzt8JejlsvRL7AA+g2gJi6OVjk28BZ8YClSZgH0A78if2rkyrGDt3s59kkWQs8AxFfGVDmdXgz/jgWwG/yV2PtQEelYKsfupYjlxYiOcvSDLISdAqiKPxlr5djht0N4/q4LAGvv9WA5egRa7GFU5ZPQpLOoSjOoSRdQFZOoig1UYjcGn/qB4VsuRd5GKXQVi+EyiuFLKIVeQCl8DsXQGSxGTqAUfgjZKE/cIOTf5TNuhEOTTqAunoEmGwuo89Cki9CkMmryVdQkOuS1HIxUOd3gL4bbLm21XgxtMS0Gb9N86K+0EErSfPACzQdnUAg9jXzwFIrBh5GNHgHIOyd7J6ohH0NDPo36Pc+gLj+HevxF1GUFq/HXocm3e94kH/VazsqIldMNfqk3fNOFTQct5ztNc8JtmuNfpzlBoVn+RZoTnoPKPwNVOA2FPzb0nTmzNhr3LKHRsQXQtilqF/BDXT4Wh5/63SpnUPiF/uDrOWGrs3bzpqnKlfBH4hk8gNX4E13h14eE74LK0btNfaEP8LlO8KZVy1CFTw8eQD3+IFbjGwPDn/LK0fuBr7ZNVX4DWf4DAwdghSA/1QqBVQ76qZwO+BnuqaHg20I4ibp8ayKVszJFlaN2wL8DhRvPlnnzTEiT/s0qR+gTPvdfpLlPjAX+lv8JNekNdpYj7A4/w/8LSuDDY4XfCsFYzdbkKqscvgN8E34DqvfdE4HfCkELhlGVFHaWw2+DHygixcUmCn/LIq0q/eZuXFjp2ydf4UGVwCvIE9+ewG+FcJEcQEV8/m49y9Hb8H++rxuBURHPdU69ixdW2X7hc0btzBAnCBXxy6iI63dP5XAbULivEicJK9JnsRL933RXDmfAv4N04DRxolCOHMdK7D9TWzlK4C1kOGff2Ecl/BCWY1d6V85u4J1VOc3Jv4qs/yhxg8wF23JUm4bK0a3J/9PEF1gTWbCVo6qbK0e34JegcCJxo5C614ty9KV9qZzcaJXTPM28hDLxEzfLXLAtRV5wU+XoJnzuF1OzoRcg78BS+Fk3VI5uwT9vHDOZNmExkndy5ehW5+fJNMr8KyhF3nJq5ejt3r820b0++yUUIg86tXJ0w5m2keKmb/8oSqEvObFy9G3w9UwASPvPkGkTSuEf79fWEH2XyrGDN50OgKb9PyLTJhTDS06tHN0G3wwgFVgk0ySsEQ+K4TtOrRzdBr8ZwNtDbSd0qlCMHHdy5ejbnQoAC75jZFqEUujrTq4cfQt8v2mkfF8j0yJaDP7KyZWjN6d+E75huuD7JZkW0WJozemVo9vgWwH4/0KmQcgLEVoI6RO9aaKOXjktL1im834dST5K3C7kw0+4oXJ0G3zLPmDB/xnidiEf+o4bKkffBl+f9wHz3m8Tt4sWgpfcUDn6JvgmfMN03vt74nbRfPDNSVQOVbh147p90+vjqBw7/GYAbxI3C8Xg/ZOoHJrh5pAOfKj1OQr/fpoO/KHvqd+hcjo85wNSnvuIW4WC8OSY9+W8BpU7tePnpQInaMrfGLZy7OD1Oa9pJLzO3ITVj4xnZsdROVQJ3KSZwLP9XJ8xX/aUDjxNU/5rw079JnzDNOn5HnGraE5QR6kcmuEozXAXMBeQB/1s4xyepvznacq/MSx8PekFTXgU4tbdEDQn3By2cqjxwIPKj/yNGEj7P0oX/Jl+K8cO3wwg6b3lyvdQIxs8Ogx8qvD/gOo/M+5dCZjznaTzvr8NAt+yB7h8yH1fk4Vc8OwglUMV7pax3x4pkZvYMeWJD3Pec3TOd32nytkOX094gITnK8RtojnhZ31PvcpdQs57714dGxK+IzTpuUCTXn2nqd+Eb5jOHv4pcZtoVtB6P0nOLUPlHtuvY0TS9wid8+S7Tb3ddNZTI24SZuUAzQrruzzCfxUqd9YJ335n7ldK+E7RpOdKN/jNADaQIhOrxrELCvdoN/jG4/tU5Wec+DYqZAlPZz0zNOG504I/a/iwacwedM+r8JEXPt4F/svICo5/kznmPQ/QhOdlO3wzgMTBjxE3iarcd6nCXTdfWKQEHicuExKex+ns4RK9fPgGffWQM56GZGJiYmJiYmJiYmIi06D/Ay93udC5kNc0AAAAAElFTkSuQmCC",b_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN+SURBVGhD7ZhdSFNhGMe3nDT6uJBwI0YT2UhRGDOyoRcGsSCcoxAyZRTihTLYYCFSpoTrQuumJcS8CikIFo66yBHIECdhF3XlnTKGTV3uQ8fMbe67553PTc2j+2xHOD94Oc//2Xs4+++c87zPOxYDAwMDAwPDCYDD4SglEolZLBa/AXnxIFt62HgsJlyhUPhyeHhYjZo1Ozv73WKxXENZUopqiM1m13d2dn6Qy+USTKWJx+MprVZ7CmVJKdpF4BG7o9frv/9rhgCfleJJOJRiGGLz+fznBoPhY3V19TnMlY1CDVXW1dW9HRsbe/Q/78JRFGLoTHNz8yedTncfNS3I19CF9vb2+b6+PgVq2pCPIUF3d/eiUqmUoaYVFXjMFhHclfnW1tbLqLPGarU6oKzXQMiDcR5GJYw4jqKRy4ss0mg0tsbGRgHqorC3txfZ3Nz0u91uMnzb29s+v9+/FQqFvOFw2AdrmDcWi20kk8mfMN0FI5E+kYJsDQkHBgYWpVIp+YXLhsfj+T0+Pq6JRCLvMJVBNoYEvb29CzKZTIy6rDidTv/ExMQlCIMHmb85rijwenp6rHQxQ4A+sYrL5XahzOAoQ2c7OjosbW1t9ahpg0gkuoVhBpSGamtrDQqF4ipKWgFPDOX3ojSkUqnuYkg74A7xMcyA0lAwGIxgeKKgNGQ0GnVkH4OSVtjt9i0MM6A0BLXeBF20HiWtWFpa+oZhBpSGCLBqP4Oab0RJGxwOxwyGGRzbywUCgS+rq6s1LS0tUkyVFbPZ/BUeuScQHvo6ZNv6VDQ0NLzXarX3UJeUaDQahy/tga5gy+Vy/YIezwn9nX1/f98OfZ0NpgQOZmaSS3Na2dTUNNPf338bdU7s7OyE1tbWPNCIuqEn88Kd9+3u7rqhCfWAAW8ikSDDlUqlPDCdjGT6xBzJxRCBbLmnYZeqQp01arU612vlxZFF4RBiKysrD6DjfY2aduRqiJBcX1/XQkl/gZpW5GMoDbyoj4eGhh7SbfHN2xABdpuvBgcHu8gLj6myU5AhAlQo8+jo6PXl5eUNTJWVgg0RoNT+mJqaumIymRYwVTaKYgjx2mw2+cjIyFOyMGIuDXTuUQxLTq5/Yx1HKhwOL87NzVl5PN4NgUBQRZKTk5PTsNJ/Ts8oMaVc7E5zOJybJIBKaIEDLbciDAwMDAwMDJSwWH8Ab6xMXb1orQEAAAAASUVORK5CYII=";var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y_={exports:{}};/*!
* sweetalert2 v11.7.27
* Released under the MIT License.
*/(function(n,e){(function(t,i){n.exports=i()})(Kn,function(){function t(c,d){var v=s(c,d,"get");return r(c,v)}function i(c,d,v){var R=s(c,d,"set");return a(c,R,v),v}function s(c,d,v){if(!d.has(c))throw new TypeError("attempted to "+v+" private field on non-instance");return d.get(c)}function r(c,d){return d.get?d.get.call(c):d.value}function a(c,d,v){if(d.set)d.set.call(c,v);else{if(!d.writable)throw new TypeError("attempted to set read only private field");d.value=v}}function o(c,d){if(d.has(c))throw new TypeError("Cannot initialize the same private elements twice on an object")}function l(c,d,v){o(c,d),d.set(c,v)}const u=100,f={},p=()=>{f.previousActiveElement instanceof HTMLElement?(f.previousActiveElement.focus(),f.previousActiveElement=null):document.body&&document.body.focus()},m=c=>new Promise(d=>{if(!c)return d();const v=window.scrollX,R=window.scrollY;f.restoreFocusTimeout=setTimeout(()=>{p(),d()},u),window.scrollTo(v,R)});var _={innerParams:new WeakMap,domCache:new WeakMap};const y="swal2-",h=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((c,d)=>(c[d]=y+d,c),{}),P=["success","warning","info","question","error"].reduce((c,d)=>(c[d]=y+d,c),{}),A="SweetAlert2:",M=c=>c.charAt(0).toUpperCase()+c.slice(1),C=c=>{console.warn("".concat(A," ").concat(typeof c=="object"?c.join(" "):c))},I=c=>{console.error("".concat(A," ").concat(c))},D=[],$=c=>{D.includes(c)||(D.push(c),C(c))},S=(c,d)=>{$('"'.concat(c,'" is deprecated and will be removed in the next major release. Please use "').concat(d,'" instead.'))},L=c=>typeof c=="function"?c():c,de=c=>c&&typeof c.toPromise=="function",fe=c=>de(c)?c.toPromise():Promise.resolve(c),V=c=>c&&Promise.resolve(c)===c,j=()=>document.body.querySelector(".".concat(h.container)),Q=c=>{const d=j();return d?d.querySelector(c):null},ie=c=>Q(".".concat(c)),z=()=>ie(h.popup),X=()=>ie(h.icon),ve=()=>ie(h["icon-content"]),ge=()=>ie(h.title),K=()=>ie(h["html-container"]),ee=()=>ie(h.image),Se=()=>ie(h["progress-steps"]),Pe=()=>ie(h["validation-message"]),Ce=()=>Q(".".concat(h.actions," .").concat(h.confirm)),Le=()=>Q(".".concat(h.actions," .").concat(h.cancel)),Ue=()=>Q(".".concat(h.actions," .").concat(h.deny)),Ne=()=>ie(h["input-label"]),Ge=()=>Q(".".concat(h.loader)),rt=()=>ie(h.actions),Ve=()=>ie(h.footer),x=()=>ie(h["timer-progress-bar"]),N=()=>ie(h.close),H=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Z=()=>{const c=z();if(!c)return[];const d=c.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),v=Array.from(d).sort((Ie,$e)=>{const yt=parseInt(Ie.getAttribute("tabindex")||"0"),xt=parseInt($e.getAttribute("tabindex")||"0");return yt>xt?1:yt<xt?-1:0}),R=c.querySelectorAll(H),re=Array.from(R).filter(Ie=>Ie.getAttribute("tabindex")!=="-1");return[...new Set(v.concat(re))].filter(Ie=>be(Ie))},q=()=>ce(document.body,h.shown)&&!ce(document.body,h["toast-shown"])&&!ce(document.body,h["no-backdrop"]),me=()=>{const c=z();return c?ce(c,h.toast):!1},_e=()=>{const c=z();return c?c.hasAttribute("data-loading"):!1},J=(c,d)=>{if(c.textContent="",d){const R=new DOMParser().parseFromString(d,"text/html"),re=R.querySelector("head");re&&Array.from(re.childNodes).forEach($e=>{c.appendChild($e)});const Ie=R.querySelector("body");Ie&&Array.from(Ie.childNodes).forEach($e=>{$e instanceof HTMLVideoElement||$e instanceof HTMLAudioElement?c.appendChild($e.cloneNode(!0)):c.appendChild($e)})}},ce=(c,d)=>{if(!d)return!1;const v=d.split(/\s+/);for(let R=0;R<v.length;R++)if(!c.classList.contains(v[R]))return!1;return!0},he=(c,d)=>{Array.from(c.classList).forEach(v=>{!Object.values(h).includes(v)&&!Object.values(P).includes(v)&&!Object.values(d.showClass||{}).includes(v)&&c.classList.remove(v)})},Ae=(c,d,v)=>{if(he(c,d),d.customClass&&d.customClass[v]){if(typeof d.customClass[v]!="string"&&!d.customClass[v].forEach){C("Invalid type of customClass.".concat(v,'! Expected string or iterable object, got "').concat(typeof d.customClass[v],'"'));return}G(c,d.customClass[v])}},E=(c,d)=>{if(!d)return null;switch(d){case"select":case"textarea":case"file":return c.querySelector(".".concat(h.popup," > .").concat(h[d]));case"checkbox":return c.querySelector(".".concat(h.popup," > .").concat(h.checkbox," input"));case"radio":return c.querySelector(".".concat(h.popup," > .").concat(h.radio," input:checked"))||c.querySelector(".".concat(h.popup," > .").concat(h.radio," input:first-child"));case"range":return c.querySelector(".".concat(h.popup," > .").concat(h.range," input"));default:return c.querySelector(".".concat(h.popup," > .").concat(h.input))}},w=c=>{if(c.focus(),c.type!=="file"){const d=c.value;c.value="",c.value=d}},F=(c,d,v)=>{!c||!d||(typeof d=="string"&&(d=d.split(/\s+/).filter(Boolean)),d.forEach(R=>{Array.isArray(c)?c.forEach(re=>{v?re.classList.add(R):re.classList.remove(R)}):v?c.classList.add(R):c.classList.remove(R)}))},G=(c,d)=>{F(c,d,!0)},se=(c,d)=>{F(c,d,!1)},le=(c,d)=>{const v=Array.from(c.children);for(let R=0;R<v.length;R++){const re=v[R];if(re instanceof HTMLElement&&ce(re,d))return re}},Ee=(c,d,v)=>{v==="".concat(parseInt(v))&&(v=parseInt(v)),v||parseInt(v)===0?c.style[d]=typeof v=="number"?"".concat(v,"px"):v:c.style.removeProperty(d)},pe=function(c){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";c&&(c.style.display=d)},k=c=>{c&&(c.style.display="none")},U=(c,d,v,R)=>{const re=c.querySelector(d);re&&(re.style[v]=R)},ue=function(c,d){let v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";d?pe(c,v):k(c)},be=c=>!!(c&&(c.offsetWidth||c.offsetHeight||c.getClientRects().length)),xe=()=>!be(Ce())&&!be(Ue())&&!be(Le()),Me=c=>c.scrollHeight>c.clientHeight,ze=c=>{const d=window.getComputedStyle(c),v=parseFloat(d.getPropertyValue("animation-duration")||"0"),R=parseFloat(d.getPropertyValue("transition-duration")||"0");return v>0||R>0},Ye=function(c){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const v=x();v&&be(v)&&(d&&(v.style.transition="none",v.style.width="100%"),setTimeout(()=>{v.style.transition="width ".concat(c/1e3,"s linear"),v.style.width="0%"},10))},O=()=>{const c=x();if(!c)return;const d=parseInt(window.getComputedStyle(c).width);c.style.removeProperty("transition"),c.style.width="100%";const v=parseInt(window.getComputedStyle(c).width),R=d/v*100;c.style.width="".concat(R,"%")},Te=()=>typeof window>"u"||typeof document>"u",te=`
 <div aria-labelledby="`.concat(h.title,'" aria-describedby="').concat(h["html-container"],'" class="').concat(h.popup,`" tabindex="-1">
   <button type="button" class="`).concat(h.close,`"></button>
   <ul class="`).concat(h["progress-steps"],`"></ul>
   <div class="`).concat(h.icon,`"></div>
   <img class="`).concat(h.image,`" />
   <h2 class="`).concat(h.title,'" id="').concat(h.title,`"></h2>
   <div class="`).concat(h["html-container"],'" id="').concat(h["html-container"],`"></div>
   <input class="`).concat(h.input,'" id="').concat(h.input,`" />
   <input type="file" class="`).concat(h.file,`" />
   <div class="`).concat(h.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(h.select,'" id="').concat(h.select,`"></select>
   <div class="`).concat(h.radio,`"></div>
   <label class="`).concat(h.checkbox,`">
     <input type="checkbox" id="`).concat(h.checkbox,`" />
     <span class="`).concat(h.label,`"></span>
   </label>
   <textarea class="`).concat(h.textarea,'" id="').concat(h.textarea,`"></textarea>
   <div class="`).concat(h["validation-message"],'" id="').concat(h["validation-message"],`"></div>
   <div class="`).concat(h.actions,`">
     <div class="`).concat(h.loader,`"></div>
     <button type="button" class="`).concat(h.confirm,`"></button>
     <button type="button" class="`).concat(h.deny,`"></button>
     <button type="button" class="`).concat(h.cancel,`"></button>
   </div>
   <div class="`).concat(h.footer,`"></div>
   <div class="`).concat(h["timer-progress-bar-container"],`">
     <div class="`).concat(h["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),we=()=>{const c=j();return c?(c.remove(),se([document.documentElement,document.body],[h["no-backdrop"],h["toast-shown"],h["has-column"]]),!0):!1},ye=()=>{f.currentInstance.resetValidationMessage()},Ke=()=>{const c=z(),d=le(c,h.input),v=le(c,h.file),R=c.querySelector(".".concat(h.range," input")),re=c.querySelector(".".concat(h.range," output")),Ie=le(c,h.select),$e=c.querySelector(".".concat(h.checkbox," input")),yt=le(c,h.textarea);d.oninput=ye,v.onchange=ye,Ie.onchange=ye,$e.onchange=ye,yt.oninput=ye,R.oninput=()=>{ye(),re.value=R.value},R.onchange=()=>{ye(),re.value=R.value}},nt=c=>typeof c=="string"?document.querySelector(c):c,st=c=>{const d=z();d.setAttribute("role",c.toast?"alert":"dialog"),d.setAttribute("aria-live",c.toast?"polite":"assertive"),c.toast||d.setAttribute("aria-modal","true")},Bt=c=>{window.getComputedStyle(c).direction==="rtl"&&G(j(),h.rtl)},ot=c=>{const d=we();if(Te()){I("SweetAlert2 requires document to initialize");return}const v=document.createElement("div");v.className=h.container,d&&G(v,h["no-transition"]),J(v,te);const R=nt(c.target);R.appendChild(v),st(c),Bt(R),Ke()},Xt=(c,d)=>{c instanceof HTMLElement?d.appendChild(c):typeof c=="object"?Ct(c,d):c&&J(d,c)},Ct=(c,d)=>{c.jquery?gr(d,c):J(d,c.toString())},gr=(c,d)=>{if(c.textContent="",0 in d)for(let v=0;v in d;v++)c.appendChild(d[v].cloneNode(!0));else c.appendChild(d.cloneNode(!0))},wn=(()=>{if(Te())return!1;const c=document.createElement("div");return typeof c.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof c.style.animation<"u"?"animationend":!1})(),Oo=(c,d)=>{const v=rt(),R=Ge();!v||!R||(!d.showConfirmButton&&!d.showDenyButton&&!d.showCancelButton?k(v):pe(v),Ae(v,d,"actions"),Ni(v,R,d),J(R,d.loaderHtml||""),Ae(R,d,"loader"))};function Ni(c,d,v){const R=Ce(),re=Ue(),Ie=Le();!R||!re||!Ie||(jn(R,"confirm",v),jn(re,"deny",v),jn(Ie,"cancel",v),_r(R,re,Ie,v),v.reverseButtons&&(v.toast?(c.insertBefore(Ie,R),c.insertBefore(re,R)):(c.insertBefore(Ie,d),c.insertBefore(re,d),c.insertBefore(R,d))))}function _r(c,d,v,R){if(!R.buttonsStyling){se([c,d,v],h.styled);return}G([c,d,v],h.styled),R.confirmButtonColor&&(c.style.backgroundColor=R.confirmButtonColor,G(c,h["default-outline"])),R.denyButtonColor&&(d.style.backgroundColor=R.denyButtonColor,G(d,h["default-outline"])),R.cancelButtonColor&&(v.style.backgroundColor=R.cancelButtonColor,G(v,h["default-outline"]))}function jn(c,d,v){const R=M(d);ue(c,v["show".concat(R,"Button")],"inline-block"),J(c,v["".concat(d,"ButtonText")]||""),c.setAttribute("aria-label",v["".concat(d,"ButtonAriaLabel")]||""),c.className=h[d],Ae(c,v,"".concat(d,"Button"))}const vr=(c,d)=>{const v=N();v&&(J(v,d.closeButtonHtml||""),Ae(v,d,"closeButton"),ue(v,d.showCloseButton),v.setAttribute("aria-label",d.closeButtonAriaLabel||""))},Fo=(c,d)=>{const v=j();v&&(Bo(v,d.backdrop),Ho(v,d.position),T(v,d.grow),Ae(v,d,"container"))};function Bo(c,d){typeof d=="string"?c.style.background=d:d||G([document.documentElement,document.body],h["no-backdrop"])}function Ho(c,d){d&&(d in h?G(c,h[d]):(C('The "position" parameter is not valid, defaulting to "center"'),G(c,h.center)))}function T(c,d){d&&G(c,h["grow-".concat(d)])}const W=["input","file","range","select","radio","checkbox","textarea"],oe=(c,d)=>{const v=z();if(!v)return;const R=_.innerParams.get(c),re=!R||d.input!==R.input;W.forEach(Ie=>{const $e=le(v,h[Ie]);$e&&(De(Ie,d.inputAttributes),$e.className=h[Ie],re&&k($e))}),d.input&&(re&&Y(d),Fe(d))},Y=c=>{if(!c.input)return;if(!Oe[c.input]){I('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input,'"'));return}const d=je(c.input),v=Oe[c.input](d,c);pe(d),c.inputAutoFocus&&setTimeout(()=>{w(v)})},ae=c=>{for(let d=0;d<c.attributes.length;d++){const v=c.attributes[d].name;["id","type","value","style"].includes(v)||c.removeAttribute(v)}},De=(c,d)=>{const v=E(z(),c);if(v){ae(v);for(const R in d)v.setAttribute(R,d[R])}},Fe=c=>{const d=je(c.input);typeof c.customClass=="object"&&G(d,c.customClass.input)},ke=(c,d)=>{(!c.placeholder||d.inputPlaceholder)&&(c.placeholder=d.inputPlaceholder)},Be=(c,d,v)=>{if(v.inputLabel){const R=document.createElement("label"),re=h["input-label"];R.setAttribute("for",c.id),R.className=re,typeof v.customClass=="object"&&G(R,v.customClass.inputLabel),R.innerText=v.inputLabel,d.insertAdjacentElement("beforebegin",R)}},je=c=>le(z(),h[c]||h.input),He=(c,d)=>{["string","number"].includes(typeof d)?c.value="".concat(d):V(d)||C('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof d,'"'))},Oe={};Oe.text=Oe.email=Oe.password=Oe.number=Oe.tel=Oe.url=(c,d)=>(He(c,d.inputValue),Be(c,c,d),ke(c,d),c.type=d.input,c),Oe.file=(c,d)=>(Be(c,c,d),ke(c,d),c),Oe.range=(c,d)=>{const v=c.querySelector("input"),R=c.querySelector("output");return He(v,d.inputValue),v.type=d.input,He(R,d.inputValue),Be(v,c,d),c},Oe.select=(c,d)=>{if(c.textContent="",d.inputPlaceholder){const v=document.createElement("option");J(v,d.inputPlaceholder),v.value="",v.disabled=!0,v.selected=!0,c.appendChild(v)}return Be(c,c,d),c},Oe.radio=c=>(c.textContent="",c),Oe.checkbox=(c,d)=>{const v=E(z(),"checkbox");v.value="1",v.checked=!!d.inputValue;const R=c.querySelector("span");return J(R,d.inputPlaceholder),v},Oe.textarea=(c,d)=>{He(c,d.inputValue),ke(c,d),Be(c,c,d);const v=R=>parseInt(window.getComputedStyle(R).marginLeft)+parseInt(window.getComputedStyle(R).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const R=parseInt(window.getComputedStyle(z()).width),re=()=>{if(!document.body.contains(c))return;const Ie=c.offsetWidth+v(c);Ie>R?z().style.width="".concat(Ie,"px"):Ee(z(),"width",d.width)};new MutationObserver(re).observe(c,{attributes:!0,attributeFilter:["style"]})}}),c};const lt=(c,d)=>{const v=K();v&&(Ae(v,d,"htmlContainer"),d.html?(Xt(d.html,v),pe(v,"block")):d.text?(v.textContent=d.text,pe(v,"block")):k(v),oe(c,d))},ht=(c,d)=>{const v=Ve();v&&(ue(v,d.footer,"block"),d.footer&&Xt(d.footer,v),Ae(v,d,"footer"))},jt=(c,d)=>{const v=_.innerParams.get(c),R=X();if(R){if(v&&d.icon===v.icon){pt(R,d),en(R,d);return}if(!d.icon&&!d.iconHtml){k(R);return}if(d.icon&&Object.keys(P).indexOf(d.icon)===-1){I('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon,'"')),k(R);return}pe(R),pt(R,d),en(R,d),G(R,d.showClass&&d.showClass.icon)}},en=(c,d)=>{for(const[v,R]of Object.entries(P))d.icon!==v&&se(c,R);G(c,d.icon&&P[d.icon]),Pn(c,d),gt(),Ae(c,d,"icon")},gt=()=>{const c=z();if(!c)return;const d=window.getComputedStyle(c).getPropertyValue("background-color"),v=c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let R=0;R<v.length;R++)v[R].style.backgroundColor=d},Ze=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Ls=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,pt=(c,d)=>{if(!d.icon&&!d.iconHtml)return;let v=c.innerHTML,R="";d.iconHtml?R=Ds(d.iconHtml):d.icon==="success"?(R=Ze,v=v.replace(/ style=".*?"/g,"")):d.icon==="error"?R=Ls:d.icon&&(R=Ds({question:"?",warning:"!",info:"i"}[d.icon])),v.trim()!==R.trim()&&J(c,R)},Pn=(c,d)=>{if(d.iconColor){c.style.color=d.iconColor,c.style.borderColor=d.iconColor;for(const v of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])U(c,v,"backgroundColor",d.iconColor);U(c,".swal2-success-ring","borderColor",d.iconColor)}},Ds=c=>'<div class="'.concat(h["icon-content"],'">').concat(c,"</div>"),di=(c,d)=>{const v=ee();if(v){if(!d.imageUrl){k(v);return}pe(v,""),v.setAttribute("src",d.imageUrl),v.setAttribute("alt",d.imageAlt||""),Ee(v,"width",d.imageWidth),Ee(v,"height",d.imageHeight),v.className=h.image,Ae(v,d,"image")}},Is=(c,d)=>{const v=j(),R=z();if(!(!v||!R)){if(d.toast){Ee(v,"width",d.width),R.style.width="100%";const re=Ge();re&&R.insertBefore(re,X())}else Ee(R,"width",d.width);Ee(R,"padding",d.padding),d.color&&(R.style.color=d.color),d.background&&(R.style.background=d.background),k(Pe()),Rt(R,d)}},Rt=(c,d)=>{const v=d.showClass||{};c.className="".concat(h.popup," ").concat(be(c)?v.popup:""),d.toast?(G([document.documentElement,document.body],h["toast-shown"]),G(c,h.toast)):G(c,h.modal),Ae(c,d,"popup"),typeof d.customClass=="string"&&G(c,d.customClass),d.icon&&G(c,h["icon-".concat(d.icon)])},Ln=(c,d)=>{const v=Se();if(!v)return;const{progressSteps:R,currentProgressStep:re}=d;if(!R||R.length===0||re===void 0){k(v);return}pe(v),v.textContent="",re>=R.length&&C("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),R.forEach((Ie,$e)=>{const yt=Us(Ie);if(v.appendChild(yt),$e===re&&G(yt,h["active-progress-step"]),$e!==R.length-1){const xt=Ht(d);v.appendChild(xt)}})},Us=c=>{const d=document.createElement("li");return G(d,h["progress-step"]),J(d,c),d},Ht=c=>{const d=document.createElement("li");return G(d,h["progress-step-line"]),c.progressStepsDistance&&Ee(d,"width",c.progressStepsDistance),d},Ns=(c,d)=>{const v=ge();v&&(ue(v,d.title||d.titleText,"block"),d.title&&Xt(d.title,v),d.titleText&&(v.innerText=d.titleText),Ae(v,d,"title"))},xr=(c,d)=>{Is(c,d),Fo(c,d),Ln(c,d),jt(c,d),di(c,d),Ns(c,d),vr(c,d),lt(c,d),Oo(c,d),ht(c,d);const v=z();typeof d.didRender=="function"&&v&&d.didRender(v)},wr=()=>be(z()),Cl=()=>{var c;return(c=Ce())===null||c===void 0?void 0:c.click()},Yf=()=>{var c;return(c=Ue())===null||c===void 0?void 0:c.click()},Kf=()=>{var c;return(c=Le())===null||c===void 0?void 0:c.click()},Oi=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Rl=c=>{c.keydownTarget&&c.keydownHandlerAdded&&(c.keydownTarget.removeEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!1)},Zf=(c,d,v,R)=>{Rl(d),v.toast||(d.keydownHandler=re=>Jf(c,re,R),d.keydownTarget=v.keydownListenerCapture?window:z(),d.keydownListenerCapture=v.keydownListenerCapture,d.keydownTarget.addEventListener("keydown",d.keydownHandler,{capture:d.keydownListenerCapture}),d.keydownHandlerAdded=!0)},zo=(c,d)=>{const v=Z();if(v.length){c=c+d,c===v.length?c=0:c===-1&&(c=v.length-1),v[c].focus();return}z().focus()},Pl=["ArrowRight","ArrowDown"],Qf=["ArrowLeft","ArrowUp"],Jf=(c,d,v)=>{const R=_.innerParams.get(c);R&&(d.isComposing||d.keyCode===229||(R.stopKeydownPropagation&&d.stopPropagation(),d.key==="Enter"?$f(c,d,R):d.key==="Tab"?eh(d):[...Pl,...Qf].includes(d.key)?th(d.key):d.key==="Escape"&&nh(d,R,v)))},$f=(c,d,v)=>{if(L(v.allowEnterKey)&&d.target&&c.getInput()&&d.target instanceof HTMLElement&&d.target.outerHTML===c.getInput().outerHTML){if(["textarea","file"].includes(v.input))return;Cl(),d.preventDefault()}},eh=c=>{const d=c.target,v=Z();let R=-1;for(let re=0;re<v.length;re++)if(d===v[re]){R=re;break}c.shiftKey?zo(R,-1):zo(R,1),c.stopPropagation(),c.preventDefault()},th=c=>{const d=Ce(),v=Ue(),R=Le(),re=[d,v,R];if(document.activeElement instanceof HTMLElement&&!re.includes(document.activeElement))return;const Ie=Pl.includes(c)?"nextElementSibling":"previousElementSibling";let $e=document.activeElement;for(let yt=0;yt<rt().children.length;yt++){if($e=$e[Ie],!$e)return;if($e instanceof HTMLButtonElement&&be($e))break}$e instanceof HTMLButtonElement&&$e.focus()},nh=(c,d,v)=>{L(d.allowEscapeKey)&&(c.preventDefault(),v(Oi.esc))};var Os={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const ih=()=>{Array.from(document.body.children).forEach(d=>{d===j()||d.contains(j())||(d.hasAttribute("aria-hidden")&&d.setAttribute("data-previous-aria-hidden",d.getAttribute("aria-hidden")||""),d.setAttribute("aria-hidden","true"))})},Ll=()=>{Array.from(document.body.children).forEach(d=>{d.hasAttribute("data-previous-aria-hidden")?(d.setAttribute("aria-hidden",d.getAttribute("data-previous-aria-hidden")||""),d.removeAttribute("data-previous-aria-hidden")):d.removeAttribute("aria-hidden")})},Dl=typeof window<"u"&&!!window.GestureEvent,sh=()=>{if(Dl&&!ce(document.body,h.iosfix)){const c=document.body.scrollTop;document.body.style.top="".concat(c*-1,"px"),G(document.body,h.iosfix),rh()}},rh=()=>{const c=j();if(!c)return;let d;c.ontouchstart=v=>{d=oh(v)},c.ontouchmove=v=>{d&&(v.preventDefault(),v.stopPropagation())}},oh=c=>{const d=c.target,v=j(),R=K();return!v||!R||ah(c)||lh(c)?!1:d===v||!Me(v)&&d instanceof HTMLElement&&d.tagName!=="INPUT"&&d.tagName!=="TEXTAREA"&&!(Me(R)&&R.contains(d))},ah=c=>c.touches&&c.touches.length&&c.touches[0].touchType==="stylus",lh=c=>c.touches&&c.touches.length>1,ch=()=>{if(ce(document.body,h.iosfix)){const c=parseInt(document.body.style.top,10);se(document.body,h.iosfix),document.body.style.top="",document.body.scrollTop=c*-1}},uh=()=>{const c=document.createElement("div");c.className=h["scrollbar-measure"],document.body.appendChild(c);const d=c.getBoundingClientRect().width-c.clientWidth;return document.body.removeChild(c),d};let Fi=null;const dh=c=>{Fi===null&&(document.body.scrollHeight>window.innerHeight||c==="scroll")&&(Fi=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Fi+uh(),"px"))},fh=()=>{Fi!==null&&(document.body.style.paddingRight="".concat(Fi,"px"),Fi=null)};function Il(c,d,v,R){me()?Nl(c,R):(m(v).then(()=>Nl(c,R)),Rl(f)),Dl?(d.setAttribute("style","display:none !important"),d.removeAttribute("class"),d.innerHTML=""):d.remove(),q()&&(fh(),ch(),Ll()),hh()}function hh(){se([document.documentElement,document.body],[h.shown,h["height-auto"],h["no-backdrop"],h["toast-shown"]])}function qn(c){c=mh(c);const d=Os.swalPromiseResolve.get(this),v=ph(this);this.isAwaitingPromise?c.isDismissed||(Fs(this),d(c)):v&&d(c)}const ph=c=>{const d=z();if(!d)return!1;const v=_.innerParams.get(c);if(!v||ce(d,v.hideClass.popup))return!1;se(d,v.showClass.popup),G(d,v.hideClass.popup);const R=j();return se(R,v.showClass.backdrop),G(R,v.hideClass.backdrop),gh(c,d,v),!0};function Ul(c){const d=Os.swalPromiseReject.get(this);Fs(this),d&&d(c)}const Fs=c=>{c.isAwaitingPromise&&(delete c.isAwaitingPromise,_.innerParams.get(c)||c._destroy())},mh=c=>typeof c>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},c),gh=(c,d,v)=>{const R=j(),re=wn&&ze(d);typeof v.willClose=="function"&&v.willClose(d),re?_h(c,d,R,v.returnFocus,v.didClose):Il(c,R,v.returnFocus,v.didClose)},_h=(c,d,v,R,re)=>{wn&&(f.swalCloseEventFinishedCallback=Il.bind(null,c,v,R,re),d.addEventListener(wn,function(Ie){Ie.target===d&&(f.swalCloseEventFinishedCallback(),delete f.swalCloseEventFinishedCallback)}))},Nl=(c,d)=>{setTimeout(()=>{typeof d=="function"&&d.bind(c.params)(),c._destroy&&c._destroy()})},Bi=c=>{let d=z();if(d||new Er,d=z(),!d)return;const v=Ge();me()?k(X()):vh(d,c),pe(v),d.setAttribute("data-loading","true"),d.setAttribute("aria-busy","true"),d.focus()},vh=(c,d)=>{const v=rt(),R=Ge();!v||!R||(!d&&be(Ce())&&(d=Ce()),pe(v),d&&(k(d),R.setAttribute("data-button-to-replace",d.className),v.insertBefore(R,d)),G([c,v],h.loading))},xh=(c,d)=>{d.input==="select"||d.input==="radio"?Ah(c,d):["text","email","number","tel","textarea"].some(v=>v===d.input)&&(de(d.inputValue)||V(d.inputValue))&&(Bi(Ce()),Eh(c,d))},wh=(c,d)=>{const v=c.getInput();if(!v)return null;switch(d.input){case"checkbox":return bh(v);case"radio":return yh(v);case"file":return Mh(v);default:return d.inputAutoTrim?v.value.trim():v.value}},bh=c=>c.checked?1:0,yh=c=>c.checked?c.value:null,Mh=c=>c.files&&c.files.length?c.getAttribute("multiple")!==null?c.files:c.files[0]:null,Ah=(c,d)=>{const v=z();if(!v)return;const R=re=>{d.input==="select"?Sh(v,br(re),d):d.input==="radio"&&Th(v,br(re),d)};de(d.inputOptions)||V(d.inputOptions)?(Bi(Ce()),fe(d.inputOptions).then(re=>{c.hideLoading(),R(re)})):typeof d.inputOptions=="object"?R(d.inputOptions):I("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof d.inputOptions))},Eh=(c,d)=>{const v=c.getInput();v&&(k(v),fe(d.inputValue).then(R=>{v.value=d.input==="number"?"".concat(parseFloat(R)||0):"".concat(R),pe(v),v.focus(),c.hideLoading()}).catch(R=>{I("Error in inputValue promise: ".concat(R)),v.value="",pe(v),v.focus(),c.hideLoading()}))};function Sh(c,d,v){const R=le(c,h.select);if(!R)return;const re=(Ie,$e,yt)=>{const xt=document.createElement("option");xt.value=yt,J(xt,$e),xt.selected=Ol(yt,v.inputValue),Ie.appendChild(xt)};d.forEach(Ie=>{const $e=Ie[0],yt=Ie[1];if(Array.isArray(yt)){const xt=document.createElement("optgroup");xt.label=$e,xt.disabled=!1,R.appendChild(xt),yt.forEach(zi=>re(xt,zi[1],zi[0]))}else re(R,yt,$e)}),R.focus()}function Th(c,d,v){const R=le(c,h.radio);if(!R)return;d.forEach(Ie=>{const $e=Ie[0],yt=Ie[1],xt=document.createElement("input"),zi=document.createElement("label");xt.type="radio",xt.name=h.radio,xt.value=$e,Ol($e,v.inputValue)&&(xt.checked=!0);const Xo=document.createElement("span");J(Xo,yt),Xo.className=h.label,zi.appendChild(xt),zi.appendChild(Xo),R.appendChild(zi)});const re=R.querySelectorAll("input");re.length&&re[0].focus()}const br=c=>{const d=[];return c instanceof Map?c.forEach((v,R)=>{let re=v;typeof re=="object"&&(re=br(re)),d.push([R,re])}):Object.keys(c).forEach(v=>{let R=c[v];typeof R=="object"&&(R=br(R)),d.push([v,R])}),d},Ol=(c,d)=>!!d&&d.toString()===c.toString(),Ch=c=>{const d=_.innerParams.get(c);c.disableButtons(),d.input?Fl(c,"confirm"):Go(c,!0)},Rh=c=>{const d=_.innerParams.get(c);c.disableButtons(),d.returnInputValueOnDeny?Fl(c,"deny"):ko(c,!1)},Ph=(c,d)=>{c.disableButtons(),d(Oi.cancel)},Fl=(c,d)=>{const v=_.innerParams.get(c);if(!v.input){I('The "input" parameter is needed to be set when using returnInputValueOn'.concat(M(d)));return}const R=c.getInput(),re=wh(c,v);v.inputValidator?Lh(c,re,d):R&&!R.checkValidity()?(c.enableButtons(),c.showValidationMessage(v.validationMessage)):d==="deny"?ko(c,re):Go(c,re)},Lh=(c,d,v)=>{const R=_.innerParams.get(c);c.disableInput(),Promise.resolve().then(()=>fe(R.inputValidator(d,R.validationMessage))).then(Ie=>{c.enableButtons(),c.enableInput(),Ie?c.showValidationMessage(Ie):v==="deny"?ko(c,d):Go(c,d)})},ko=(c,d)=>{const v=_.innerParams.get(c||void 0);v.showLoaderOnDeny&&Bi(Ue()),v.preDeny?(c.isAwaitingPromise=!0,Promise.resolve().then(()=>fe(v.preDeny(d,v.validationMessage))).then(re=>{re===!1?(c.hideLoading(),Fs(c)):c.close({isDenied:!0,value:typeof re>"u"?d:re})}).catch(re=>Hl(c||void 0,re))):c.close({isDenied:!0,value:d})},Bl=(c,d)=>{c.close({isConfirmed:!0,value:d})},Hl=(c,d)=>{c.rejectPromise(d)},Go=(c,d)=>{const v=_.innerParams.get(c||void 0);v.showLoaderOnConfirm&&Bi(),v.preConfirm?(c.resetValidationMessage(),c.isAwaitingPromise=!0,Promise.resolve().then(()=>fe(v.preConfirm(d,v.validationMessage))).then(re=>{be(Pe())||re===!1?(c.hideLoading(),Fs(c)):Bl(c,typeof re>"u"?d:re)}).catch(re=>Hl(c||void 0,re))):Bl(c,d)};function yr(){const c=_.innerParams.get(this);if(!c)return;const d=_.domCache.get(this);k(d.loader),me()?c.icon&&pe(X()):Dh(d),se([d.popup,d.actions],h.loading),d.popup.removeAttribute("aria-busy"),d.popup.removeAttribute("data-loading"),d.confirmButton.disabled=!1,d.denyButton.disabled=!1,d.cancelButton.disabled=!1}const Dh=c=>{const d=c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));d.length?pe(d[0],"inline-block"):xe()&&k(c.actions)};function zl(){const c=_.innerParams.get(this),d=_.domCache.get(this);return d?E(d.popup,c.input):null}function kl(c,d,v){const R=_.domCache.get(c);d.forEach(re=>{R[re].disabled=v})}function Gl(c,d){const v=z();if(!(!v||!c))if(c.type==="radio"){const R=v.querySelectorAll('[name="'.concat(h.radio,'"]'));for(let re=0;re<R.length;re++)R[re].disabled=d}else c.disabled=d}function Vl(){kl(this,["confirmButton","denyButton","cancelButton"],!1)}function Wl(){kl(this,["confirmButton","denyButton","cancelButton"],!0)}function Xl(){Gl(this.getInput(),!1)}function jl(){Gl(this.getInput(),!0)}function ql(c){const d=_.domCache.get(this),v=_.innerParams.get(this);J(d.validationMessage,c),d.validationMessage.className=h["validation-message"],v.customClass&&v.customClass.validationMessage&&G(d.validationMessage,v.customClass.validationMessage),pe(d.validationMessage);const R=this.getInput();R&&(R.setAttribute("aria-invalid",!0),R.setAttribute("aria-describedby",h["validation-message"]),w(R),G(R,h.inputerror))}function Yl(){const c=_.domCache.get(this);c.validationMessage&&k(c.validationMessage);const d=this.getInput();d&&(d.removeAttribute("aria-invalid"),d.removeAttribute("aria-describedby"),se(d,h.inputerror))}const Hi={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Ih=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Uh={},Nh=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Kl=c=>Object.prototype.hasOwnProperty.call(Hi,c),Zl=c=>Ih.indexOf(c)!==-1,Ql=c=>Uh[c],Oh=c=>{Kl(c)||C('Unknown parameter "'.concat(c,'"'))},Fh=c=>{Nh.includes(c)&&C('The parameter "'.concat(c,'" is incompatible with toasts'))},Bh=c=>{const d=Ql(c);d&&S(c,d)},Hh=c=>{c.backdrop===!1&&c.allowOutsideClick&&C('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const d in c)Oh(d),c.toast&&Fh(d),Bh(d)};function Jl(c){const d=z(),v=_.innerParams.get(this);if(!d||ce(d,v.hideClass.popup)){C("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const R=zh(c),re=Object.assign({},v,R);xr(this,re),_.innerParams.set(this,re),Object.defineProperties(this,{params:{value:Object.assign({},this.params,c),writable:!1,enumerable:!0}})}const zh=c=>{const d={};return Object.keys(c).forEach(v=>{Zl(v)?d[v]=c[v]:C("Invalid parameter to update: ".concat(v))}),d};function $l(){const c=_.domCache.get(this),d=_.innerParams.get(this);if(!d){ec(this);return}c.popup&&f.swalCloseEventFinishedCallback&&(f.swalCloseEventFinishedCallback(),delete f.swalCloseEventFinishedCallback),typeof d.didDestroy=="function"&&d.didDestroy(),kh(this)}const kh=c=>{ec(c),delete c.params,delete f.keydownHandler,delete f.keydownTarget,delete f.currentInstance},ec=c=>{c.isAwaitingPromise?(Vo(_,c),c.isAwaitingPromise=!0):(Vo(Os,c),Vo(_,c),delete c.isAwaitingPromise,delete c.disableButtons,delete c.enableButtons,delete c.getInput,delete c.disableInput,delete c.enableInput,delete c.hideLoading,delete c.disableLoading,delete c.showValidationMessage,delete c.resetValidationMessage,delete c.close,delete c.closePopup,delete c.closeModal,delete c.closeToast,delete c.rejectPromise,delete c.update,delete c._destroy)},Vo=(c,d)=>{for(const v in c)c[v].delete(d)};var Gh=Object.freeze({__proto__:null,_destroy:$l,close:qn,closeModal:qn,closePopup:qn,closeToast:qn,disableButtons:Wl,disableInput:jl,disableLoading:yr,enableButtons:Vl,enableInput:Xl,getInput:zl,handleAwaitingPromise:Fs,hideLoading:yr,rejectPromise:Ul,resetValidationMessage:Yl,showValidationMessage:ql,update:Jl});const Vh=(c,d,v)=>{_.innerParams.get(c).toast?Wh(c,d,v):(jh(d),qh(d),Yh(c,d,v))},Wh=(c,d,v)=>{d.popup.onclick=()=>{const R=_.innerParams.get(c);R&&(Xh(R)||R.timer||R.input)||v(Oi.close)}},Xh=c=>c.showConfirmButton||c.showDenyButton||c.showCancelButton||c.showCloseButton;let Mr=!1;const jh=c=>{c.popup.onmousedown=()=>{c.container.onmouseup=function(d){c.container.onmouseup=void 0,d.target===c.container&&(Mr=!0)}}},qh=c=>{c.container.onmousedown=()=>{c.popup.onmouseup=function(d){c.popup.onmouseup=void 0,(d.target===c.popup||c.popup.contains(d.target))&&(Mr=!0)}}},Yh=(c,d,v)=>{d.container.onclick=R=>{const re=_.innerParams.get(c);if(Mr){Mr=!1;return}R.target===d.container&&L(re.allowOutsideClick)&&v(Oi.backdrop)}},Kh=c=>typeof c=="object"&&c.jquery,tc=c=>c instanceof Element||Kh(c),Zh=c=>{const d={};return typeof c[0]=="object"&&!tc(c[0])?Object.assign(d,c[0]):["title","html","icon"].forEach((v,R)=>{const re=c[R];typeof re=="string"||tc(re)?d[v]=re:re!==void 0&&I("Unexpected type of ".concat(v,'! Expected "string" or "Element", got ').concat(typeof re))}),d};function Qh(){const c=this;for(var d=arguments.length,v=new Array(d),R=0;R<d;R++)v[R]=arguments[R];return new c(...v)}function Jh(c){class d extends this{_main(R,re){return super._main(R,Object.assign({},c,re))}}return d}const $h=()=>f.timeout&&f.timeout.getTimerLeft(),nc=()=>{if(f.timeout)return O(),f.timeout.stop()},ic=()=>{if(f.timeout){const c=f.timeout.start();return Ye(c),c}},ep=()=>{const c=f.timeout;return c&&(c.running?nc():ic())},tp=c=>{if(f.timeout){const d=f.timeout.increase(c);return Ye(d,!0),d}},np=()=>!!(f.timeout&&f.timeout.isRunning());let sc=!1;const Wo={};function ip(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Wo[c]=this,sc||(document.body.addEventListener("click",sp),sc=!0)}const sp=c=>{for(let d=c.target;d&&d!==document;d=d.parentNode)for(const v in Wo){const R=d.getAttribute(v);if(R){Wo[v].fire({template:R});return}}};var rp=Object.freeze({__proto__:null,argsToParams:Zh,bindClickHandler:ip,clickCancel:Kf,clickConfirm:Cl,clickDeny:Yf,enableLoading:Bi,fire:Qh,getActions:rt,getCancelButton:Le,getCloseButton:N,getConfirmButton:Ce,getContainer:j,getDenyButton:Ue,getFocusableElements:Z,getFooter:Ve,getHtmlContainer:K,getIcon:X,getIconContent:ve,getImage:ee,getInputLabel:Ne,getLoader:Ge,getPopup:z,getProgressSteps:Se,getTimerLeft:$h,getTimerProgressBar:x,getTitle:ge,getValidationMessage:Pe,increaseTimer:tp,isDeprecatedParameter:Ql,isLoading:_e,isTimerRunning:np,isUpdatableParameter:Zl,isValidParameter:Kl,isVisible:wr,mixin:Jh,resumeTimer:ic,showLoading:Bi,stopTimer:nc,toggleTimer:ep});class op{constructor(d,v){this.callback=d,this.remaining=v,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(d){const v=this.running;return v&&this.stop(),this.remaining+=d,v&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const rc=["swal-title","swal-html","swal-footer"],ap=c=>{const d=typeof c.template=="string"?document.querySelector(c.template):c.template;if(!d)return{};const v=d.content;return mp(v),Object.assign(lp(v),cp(v),up(v),dp(v),fp(v),hp(v),pp(v,rc))},lp=c=>{const d={};return Array.from(c.querySelectorAll("swal-param")).forEach(R=>{fi(R,["name","value"]);const re=R.getAttribute("name"),Ie=R.getAttribute("value");typeof Hi[re]=="boolean"?d[re]=Ie!=="false":typeof Hi[re]=="object"?d[re]=JSON.parse(Ie):d[re]=Ie}),d},cp=c=>{const d={};return Array.from(c.querySelectorAll("swal-function-param")).forEach(R=>{const re=R.getAttribute("name"),Ie=R.getAttribute("value");d[re]=new Function("return ".concat(Ie))()}),d},up=c=>{const d={};return Array.from(c.querySelectorAll("swal-button")).forEach(R=>{fi(R,["type","color","aria-label"]);const re=R.getAttribute("type");d["".concat(re,"ButtonText")]=R.innerHTML,d["show".concat(M(re),"Button")]=!0,R.hasAttribute("color")&&(d["".concat(re,"ButtonColor")]=R.getAttribute("color")),R.hasAttribute("aria-label")&&(d["".concat(re,"ButtonAriaLabel")]=R.getAttribute("aria-label"))}),d},dp=c=>{const d={},v=c.querySelector("swal-image");return v&&(fi(v,["src","width","height","alt"]),v.hasAttribute("src")&&(d.imageUrl=v.getAttribute("src")),v.hasAttribute("width")&&(d.imageWidth=v.getAttribute("width")),v.hasAttribute("height")&&(d.imageHeight=v.getAttribute("height")),v.hasAttribute("alt")&&(d.imageAlt=v.getAttribute("alt"))),d},fp=c=>{const d={},v=c.querySelector("swal-icon");return v&&(fi(v,["type","color"]),v.hasAttribute("type")&&(d.icon=v.getAttribute("type")),v.hasAttribute("color")&&(d.iconColor=v.getAttribute("color")),d.iconHtml=v.innerHTML),d},hp=c=>{const d={},v=c.querySelector("swal-input");v&&(fi(v,["type","label","placeholder","value"]),d.input=v.getAttribute("type")||"text",v.hasAttribute("label")&&(d.inputLabel=v.getAttribute("label")),v.hasAttribute("placeholder")&&(d.inputPlaceholder=v.getAttribute("placeholder")),v.hasAttribute("value")&&(d.inputValue=v.getAttribute("value")));const R=Array.from(c.querySelectorAll("swal-input-option"));return R.length&&(d.inputOptions={},R.forEach(re=>{fi(re,["value"]);const Ie=re.getAttribute("value"),$e=re.innerHTML;d.inputOptions[Ie]=$e})),d},pp=(c,d)=>{const v={};for(const R in d){const re=d[R],Ie=c.querySelector(re);Ie&&(fi(Ie,[]),v[re.replace(/^swal-/,"")]=Ie.innerHTML.trim())}return v},mp=c=>{const d=rc.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(c.children).forEach(v=>{const R=v.tagName.toLowerCase();d.includes(R)||C("Unrecognized element <".concat(R,">"))})},fi=(c,d)=>{Array.from(c.attributes).forEach(v=>{d.indexOf(v.name)===-1&&C(['Unrecognized attribute "'.concat(v.name,'" on <').concat(c.tagName.toLowerCase(),">."),"".concat(d.length?"Allowed attributes are: ".concat(d.join(", ")):"To set the value, use HTML within the element.")])})},oc=10,gp=c=>{const d=j(),v=z();typeof c.willOpen=="function"&&c.willOpen(v);const re=window.getComputedStyle(document.body).overflowY;xp(d,v,c),setTimeout(()=>{_p(d,v)},oc),q()&&(vp(d,c.scrollbarPadding,re),ih()),!me()&&!f.previousActiveElement&&(f.previousActiveElement=document.activeElement),typeof c.didOpen=="function"&&setTimeout(()=>c.didOpen(v)),se(d,h["no-transition"])},ac=c=>{const d=z();if(c.target!==d||!wn)return;const v=j();d.removeEventListener(wn,ac),v.style.overflowY="auto"},_p=(c,d)=>{wn&&ze(d)?(c.style.overflowY="hidden",d.addEventListener(wn,ac)):c.style.overflowY="auto"},vp=(c,d,v)=>{sh(),d&&v!=="hidden"&&dh(v),setTimeout(()=>{c.scrollTop=0})},xp=(c,d,v)=>{G(c,v.showClass.backdrop),d.style.setProperty("opacity","0","important"),pe(d,"grid"),setTimeout(()=>{G(d,v.showClass.popup),d.style.removeProperty("opacity")},oc),G([document.documentElement,document.body],h.shown),v.heightAuto&&v.backdrop&&!v.toast&&G([document.documentElement,document.body],h["height-auto"])};var lc={email:(c,d)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid email address"),url:(c,d)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c)?Promise.resolve():Promise.resolve(d||"Invalid URL")};function wp(c){c.inputValidator||(c.input==="email"&&(c.inputValidator=lc.email),c.input==="url"&&(c.inputValidator=lc.url))}function bp(c){(!c.target||typeof c.target=="string"&&!document.querySelector(c.target)||typeof c.target!="string"&&!c.target.appendChild)&&(C('Target parameter is not valid, defaulting to "body"'),c.target="body")}function yp(c){wp(c),c.showLoaderOnConfirm&&!c.preConfirm&&C(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),bp(c),typeof c.title=="string"&&(c.title=c.title.split(`
`).join("<br />")),ot(c)}let bn;var Ar=new WeakMap;class vt{constructor(){if(l(this,Ar,{writable:!0,value:void 0}),typeof window>"u")return;bn=this;for(var d=arguments.length,v=new Array(d),R=0;R<d;R++)v[R]=arguments[R];const re=Object.freeze(this.constructor.argsToParams(v));this.params=re,this.isAwaitingPromise=!1,i(this,Ar,this._main(bn.params))}_main(d){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Hh(Object.assign({},v,d)),f.currentInstance&&(f.currentInstance._destroy(),q()&&Ll()),f.currentInstance=bn;const R=Ap(d,v);yp(R),Object.freeze(R),f.timeout&&(f.timeout.stop(),delete f.timeout),clearTimeout(f.restoreFocusTimeout);const re=Ep(bn);return xr(bn,R),_.innerParams.set(bn,R),Mp(bn,re,R)}then(d){return t(this,Ar).then(d)}finally(d){return t(this,Ar).finally(d)}}const Mp=(c,d,v)=>new Promise((R,re)=>{const Ie=$e=>{c.close({isDismissed:!0,dismiss:$e})};Os.swalPromiseResolve.set(c,R),Os.swalPromiseReject.set(c,re),d.confirmButton.onclick=()=>{Ch(c)},d.denyButton.onclick=()=>{Rh(c)},d.cancelButton.onclick=()=>{Ph(c,Ie)},d.closeButton.onclick=()=>{Ie(Oi.close)},Vh(c,d,Ie),Zf(c,f,v,Ie),xh(c,v),gp(v),Sp(f,v,Ie),Tp(d,v),setTimeout(()=>{d.container.scrollTop=0})}),Ap=(c,d)=>{const v=ap(c),R=Object.assign({},Hi,d,v,c);return R.showClass=Object.assign({},Hi.showClass,R.showClass),R.hideClass=Object.assign({},Hi.hideClass,R.hideClass),R},Ep=c=>{const d={popup:z(),container:j(),actions:rt(),confirmButton:Ce(),denyButton:Ue(),cancelButton:Le(),loader:Ge(),closeButton:N(),validationMessage:Pe(),progressSteps:Se()};return _.domCache.set(c,d),d},Sp=(c,d,v)=>{const R=x();k(R),d.timer&&(c.timeout=new op(()=>{v("timer"),delete c.timeout},d.timer),d.timerProgressBar&&(pe(R),Ae(R,d,"timerProgressBar"),setTimeout(()=>{c.timeout&&c.timeout.running&&Ye(d.timer)})))},Tp=(c,d)=>{if(!d.toast){if(!L(d.allowEnterKey)){Rp();return}Cp(c,d)||zo(-1,1)}},Cp=(c,d)=>d.focusDeny&&be(c.denyButton)?(c.denyButton.focus(),!0):d.focusCancel&&be(c.cancelButton)?(c.cancelButton.focus(),!0):d.focusConfirm&&be(c.confirmButton)?(c.confirmButton.focus(),!0):!1,Rp=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const c=new Date,d=localStorage.getItem("swal-initiation");d?(c.getTime()-Date.parse(d))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const v=document.createElement("audio");v.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",v.loop=!0,document.body.appendChild(v),setTimeout(()=>{v.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(c))}vt.prototype.disableButtons=Wl,vt.prototype.enableButtons=Vl,vt.prototype.getInput=zl,vt.prototype.disableInput=jl,vt.prototype.enableInput=Xl,vt.prototype.hideLoading=yr,vt.prototype.disableLoading=yr,vt.prototype.showValidationMessage=ql,vt.prototype.resetValidationMessage=Yl,vt.prototype.close=qn,vt.prototype.closePopup=qn,vt.prototype.closeModal=qn,vt.prototype.closeToast=qn,vt.prototype.rejectPromise=Ul,vt.prototype.update=Jl,vt.prototype._destroy=$l,Object.assign(vt,rp),Object.keys(Gh).forEach(c=>{vt[c]=function(){return bn&&bn[c]?bn[c](...arguments):null}}),vt.DismissReason=Oi,vt.version="11.7.27";const Er=vt;return Er.default=Er,Er}),typeof Kn<"u"&&Kn.Sweetalert2&&(Kn.swal=Kn.sweetAlert=Kn.Swal=Kn.SweetAlert=Kn.Sweetalert2),typeof document<"u"&&function(t,i){var s=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(s),s.styleSheet)s.styleSheet.disabled||(s.styleSheet.cssText=i);else try{s.innerHTML=i}catch{s.innerText=i}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(y_);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="156",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},M_=0,Hc=1,A_=2,xf=1,E_=2,Hn=3,ui=0,Yt=1,kn=2,oi=0,ps=1,zc=2,kc=3,Gc=4,S_=5,os=100,T_=101,C_=102,Vc=103,Wc=104,R_=200,P_=201,L_=202,D_=203,wf=204,bf=205,I_=206,U_=207,N_=208,O_=209,F_=210,B_=0,H_=1,z_=2,Xa=3,k_=4,G_=5,V_=6,W_=7,yl=0,X_=1,j_=2,ai=0,q_=1,Y_=2,K_=3,Z_=4,Q_=5,yf=300,ws=301,bs=302,ja=303,qa=304,Po=306,Ya=1e3,pn=1001,Ka=1002,Vt=1003,Xc=1004,$o=1005,sn=1006,J_=1007,ar=1008,li=1009,$_=1010,e0=1011,Ml=1012,Mf=1013,ni=1014,ii=1015,lr=1016,Af=1017,Ef=1018,Si=1020,t0=1021,mn=1023,n0=1024,i0=1025,Ti=1026,ys=1027,s0=1028,Sf=1029,r0=1030,Tf=1031,Cf=1033,ea=33776,ta=33777,na=33778,ia=33779,jc=35840,qc=35841,Yc=35842,Kc=35843,o0=36196,Zc=37492,Qc=37496,Jc=37808,$c=37809,eu=37810,tu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,lu=37818,cu=37819,uu=37820,du=37821,sa=36492,fu=36494,hu=36495,a0=36283,pu=36284,mu=36285,gu=36286,Rf=3e3,Ci=3001,l0=3200,c0=3201,Pf=0,u0=1,Ri="",dt="srgb",Rn="srgb-linear",Lo="display-p3",ra=7680,d0=519,f0=512,h0=513,p0=514,m0=515,g0=516,_0=517,v0=518,x0=519,_u=35044,vu="300 es",Za=1035,Gn=2e3,_o=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const Js=Math.PI/180,cr=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Al(n,e){return(n%e+e)%e}function w0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function b0(n,e,t){return n!==e?(t-n)/(e-n):0}function $s(n,e,t){return(1-t)*n+t*e}function y0(n,e,t,i){return $s(n,e,1-Math.exp(-t*i))}function M0(n,e=1){return e-Math.abs(Al(n,e*2)-e)}function A0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function E0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function S0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T0(n,e){return n+Math.random()*(e-n)}function C0(n){return n*(.5-Math.random())}function R0(n){n!==void 0&&(xu=n);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(n){return n*Js}function L0(n){return n*cr}function Qa(n){return(n&n-1)===0&&n!==0}function D0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function I0(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),u=r((e+i)/2),f=a((e+i)/2),p=r((e-i)/2),m=a((e-i)/2),_=r((i-e)/2),y=a((i-e)/2);switch(s){case"XYX":n.set(o*f,l*p,l*m,o*u);break;case"YZY":n.set(l*m,o*f,l*p,o*u);break;case"ZXZ":n.set(l*p,l*m,o*f,o*u);break;case"XZX":n.set(o*f,l*y,l*_,o*u);break;case"YXY":n.set(l*_,o*f,l*y,o*u);break;case"ZYZ":n.set(l*y,l*_,o*f,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function as(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const U0={DEG2RAD:Js,RAD2DEG:cr,generateUUID:Rs,clamp:It,euclideanModulo:Al,mapLinear:w0,inverseLerp:b0,lerp:$s,damp:y0,pingpong:M0,smoothstep:A0,smootherstep:E0,randInt:S0,randFloat:T0,randFloatSpread:C0,seededRandom:R0,degToRad:P0,radToDeg:L0,isPowerOfTwo:Qa,ceilPowerOfTwo:D0,floorPowerOfTwo:vo,setQuaternionFromProperEuler:I0,normalize:kt,denormalize:as};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,s,r,a,o,l,u){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,u)}set(e,t,i,s,r,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],p=i[7],m=i[2],_=i[5],y=i[8],b=s[0],h=s[3],g=s[6],P=s[1],A=s[4],M=s[7],C=s[2],I=s[5],D=s[8];return r[0]=a*b+o*P+l*C,r[3]=a*h+o*A+l*I,r[6]=a*g+o*M+l*D,r[1]=u*b+f*P+p*C,r[4]=u*h+f*A+p*I,r[7]=u*g+f*M+p*D,r[2]=m*b+_*P+y*C,r[5]=m*h+_*A+y*I,r[8]=m*g+_*M+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return t*a*f-t*o*u-i*r*f+i*o*l+s*r*u-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*a-o*u,m=o*l-f*r,_=u*r-a*l,y=t*p+i*m+s*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=p*b,e[1]=(s*u-f*i)*b,e[2]=(o*i-s*a)*b,e[3]=m*b,e[4]=(f*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=_*b,e[7]=(i*l-u*t)*b,e[8]=(a*t-i*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-s*u,s*l,-s*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Qe;function Lf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function N0(){const n=ur("canvas");return n.style.display="block",n}const wu={};function er(n){n in wu||(wu[n]=!0,console.warn(n))}function ms(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const O0=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),F0=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function B0(n){return n.convertSRGBToLinear().applyMatrix3(F0)}function H0(n){return n.applyMatrix3(O0).convertLinearToSRGB()}const z0={[Rn]:n=>n,[dt]:n=>n.convertSRGBToLinear(),[Lo]:B0},k0={[Rn]:n=>n,[dt]:n=>n.convertLinearToSRGB(),[Lo]:H0},on={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Rn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=z0[e],s=k0[t];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Wi;class Df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=ur("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ms(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ms(t[i]/255)*255):t[i]=ms(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G0=0;class If{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(la(s[a].image)):r.push(la(s[a]))}else r=la(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Df.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V0=0;class Kt extends Ui{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=pn,s=pn,r=sn,a=ar,o=mn,l=li,u=Kt.DEFAULT_ANISOTROPY,f=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Rs(),this.name="",this.source=new If(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Ci?dt:Ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Ci:Rf}set encoding(e){er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ci?dt:Ri}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=yf;Kt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,u=l[0],f=l[4],p=l[8],m=l[1],_=l[5],y=l[9],b=l[2],h=l[6],g=l[10];if(Math.abs(f-m)<.01&&Math.abs(p-b)<.01&&Math.abs(y-h)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+b)<.1&&Math.abs(y+h)<.1&&Math.abs(u+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(u+1)/2,M=(_+1)/2,C=(g+1)/2,I=(f+m)/4,D=(p+b)/4,$=(y+h)/4;return A>M&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=I/i,r=D/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=I/s,r=$/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=$/r),this.set(i,s,r,t),this}let P=Math.sqrt((h-y)*(h-y)+(p-b)*(p-b)+(m-f)*(m-f));return Math.abs(P)<.001&&(P=1),this.x=(h-y)/P,this.y=(p-b)/P,this.z=(m-f)/P,this.w=Math.acos((u+_+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W0 extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ci?dt:Ri),this.texture=new Kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new If(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends W0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uf extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X0 extends Kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],u=i[s+1],f=i[s+2],p=i[s+3];const m=r[a+0],_=r[a+1],y=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=p;return}if(o===1){e[t+0]=m,e[t+1]=_,e[t+2]=y,e[t+3]=b;return}if(p!==b||l!==m||u!==_||f!==y){let h=1-o;const g=l*m+u*_+f*y+p*b,P=g>=0?1:-1,A=1-g*g;if(A>Number.EPSILON){const C=Math.sqrt(A),I=Math.atan2(C,g*P);h=Math.sin(h*I)/C,o=Math.sin(o*I)/C}const M=o*P;if(l=l*h+m*M,u=u*h+_*M,f=f*h+y*M,p=p*h+b*M,h===1-o){const C=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=C,u*=C,f*=C,p*=C}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],u=i[s+2],f=i[s+3],p=r[a],m=r[a+1],_=r[a+2],y=r[a+3];return e[t]=o*y+f*p+l*_-u*m,e[t+1]=l*y+f*m+u*p-o*_,e[t+2]=u*y+f*_+o*m-l*p,e[t+3]=f*y-o*p-l*m-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(s/2),p=o(r/2),m=l(i/2),_=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=m*f*p+u*_*y,this._y=u*_*p-m*f*y,this._z=u*f*y+m*_*p,this._w=u*f*p-m*_*y;break;case"YXZ":this._x=m*f*p+u*_*y,this._y=u*_*p-m*f*y,this._z=u*f*y-m*_*p,this._w=u*f*p+m*_*y;break;case"ZXY":this._x=m*f*p-u*_*y,this._y=u*_*p+m*f*y,this._z=u*f*y+m*_*p,this._w=u*f*p-m*_*y;break;case"ZYX":this._x=m*f*p-u*_*y,this._y=u*_*p+m*f*y,this._z=u*f*y-m*_*p,this._w=u*f*p+m*_*y;break;case"YZX":this._x=m*f*p+u*_*y,this._y=u*_*p+m*f*y,this._z=u*f*y-m*_*p,this._w=u*f*p-m*_*y;break;case"XZY":this._x=m*f*p-u*_*y,this._y=u*_*p-m*f*y,this._z=u*f*y+m*_*p,this._w=u*f*p+m*_*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],u=t[2],f=t[6],p=t[10],m=i+o+p;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(f-l)*_,this._y=(r-u)*_,this._z=(a-s)*_}else if(i>o&&i>p){const _=2*Math.sqrt(1+i-o-p);this._w=(f-l)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+u)/_}else if(o>p){const _=2*Math.sqrt(1+o-i-p);this._w=(r-u)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(l+f)/_}else{const _=2*Math.sqrt(1+p-i-o);this._w=(a-s)/_,this._x=(r+u)/_,this._y=(l+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+a*o+s*u-r*l,this._y=s*f+a*l+r*o-i*u,this._z=r*f+a*u+i*l-s*o,this._w=a*f-i*o-s*l-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*i+t*this._x,this._y=_*s+t*this._y,this._z=_*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),p=Math.sin((1-t)*f)/u,m=Math.sin(t*f)/u;return this._w=a*p+this._w*m,this._x=i*p+this._x*m,this._y=s*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,u=l*t+a*s-o*i,f=l*i+o*t-r*s,p=l*s+r*i-a*t,m=-r*t-a*i-o*s;return this.x=u*l+m*-r+f*-o-p*-a,this.y=f*l+m*-a+p*-r-u*-o,this.z=p*l+m*-o+u*-a-f*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new B,bu=new Di;class fr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox),Xi.applyMatrix4(e.matrixWorld),this.union(Xi);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)In.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else s.boundingBox===null&&s.computeBoundingBox(),Xi.copy(s.boundingBox),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Ir.subVectors(this.max,zs),ji.subVectors(e.a,zs),qi.subVectors(e.b,zs),Yi.subVectors(e.c,zs),Zn.subVectors(qi,ji),Qn.subVectors(Yi,qi),mi.subVectors(ji,Yi);let t=[0,-Zn.z,Zn.y,0,-Qn.z,Qn.y,0,-mi.z,mi.y,Zn.z,0,-Zn.x,Qn.z,0,-Qn.x,mi.z,0,-mi.x,-Zn.y,Zn.x,0,-Qn.y,Qn.x,0,-mi.y,mi.x,0];return!ua(t,ji,qi,Yi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,ji,qi,Yi,Ir))?!1:(Ur.crossVectors(Zn,Qn),t=[Ur.x,Ur.y,Ur.z],ua(t,ji,qi,Yi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new B,new B,new B,new B,new B,new B,new B,new B],In=new B,Xi=new fr,ji=new B,qi=new B,Yi=new B,Zn=new B,Qn=new B,mi=new B,zs=new B,Ir=new B,Ur=new B,gi=new B;function ua(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){gi.fromArray(n,r);const o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),u=t.dot(gi),f=i.dot(gi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const j0=new fr,ks=new B,da=new B;class hr{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):j0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(da)),this.expandByPoint(ks.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new B,fa=new B,Nr=new B,Jn=new B,ha=new B,Or=new B,pa=new B;class Do{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fa.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(fa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Jn.dot(this.direction),l=-Jn.dot(Nr),u=Jn.lengthSq(),f=Math.abs(1-a*a);let p,m,_,y;if(f>0)if(p=a*l-o,m=a*o-l,y=r*f,p>=0)if(m>=-y)if(m<=y){const b=1/f;p*=b,m*=b,_=p*(p+a*m+2*o)+m*(a*p+m+2*l)+u}else m=r,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;else m=-r,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;else m<=-y?(p=Math.max(0,-(-a*r+o)),m=p>0?-r:Math.min(Math.max(-r,-l),r),_=-p*p+m*(m+2*l)+u):m<=y?(p=0,m=Math.min(Math.max(-r,-l),r),_=m*(m+2*l)+u):(p=Math.max(0,-(a*r+o)),m=p>0?r:Math.min(Math.max(-r,-l),r),_=-p*p+m*(m+2*l)+u);else m=a>0?-r:r,p=Math.max(0,-(a*m+o)),_=-p*p+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(fa).addScaledVector(Nr,m),_}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),s=Un.dot(Un)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,s=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,s=(e.min.x-m.x)*u),f>=0?(r=(e.min.y-m.y)*f,a=(e.max.y-m.y)*f):(r=(e.max.y-m.y)*f,a=(e.min.y-m.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-m.z)*p,l=(e.max.z-m.z)*p):(o=(e.max.z-m.z)*p,l=(e.min.z-m.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,s,r){ha.subVectors(t,e),Or.subVectors(i,e),pa.crossVectors(ha,Or);let a=this.direction.dot(pa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Or.crossVectors(Jn,Or));if(l<0)return null;const u=o*this.direction.dot(ha.cross(Jn));if(u<0||l+u>a)return null;const f=-o*Jn.dot(pa);return f<0?null:this.at(f/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,s,r,a,o,l,u,f,p,m,_,y,b,h){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,u,f,p,m,_,y,b,h)}set(e,t,i,s,r,a,o,l,u,f,p,m,_,y,b,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=u,g[6]=f,g[10]=p,g[14]=m,g[3]=_,g[7]=y,g[11]=b,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),u=Math.sin(s),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const m=a*f,_=a*p,y=o*f,b=o*p;t[0]=l*f,t[4]=-l*p,t[8]=u,t[1]=_+y*u,t[5]=m-b*u,t[9]=-o*l,t[2]=b-m*u,t[6]=y+_*u,t[10]=a*l}else if(e.order==="YXZ"){const m=l*f,_=l*p,y=u*f,b=u*p;t[0]=m+b*o,t[4]=y*o-_,t[8]=a*u,t[1]=a*p,t[5]=a*f,t[9]=-o,t[2]=_*o-y,t[6]=b+m*o,t[10]=a*l}else if(e.order==="ZXY"){const m=l*f,_=l*p,y=u*f,b=u*p;t[0]=m-b*o,t[4]=-a*p,t[8]=y+_*o,t[1]=_+y*o,t[5]=a*f,t[9]=b-m*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const m=a*f,_=a*p,y=o*f,b=o*p;t[0]=l*f,t[4]=y*u-_,t[8]=m*u+b,t[1]=l*p,t[5]=b*u+m,t[9]=_*u-y,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const m=a*l,_=a*u,y=o*l,b=o*u;t[0]=l*f,t[4]=b-m*p,t[8]=y*p+_,t[1]=p,t[5]=a*f,t[9]=-o*f,t[2]=-u*f,t[6]=_*p+y,t[10]=m-b*p}else if(e.order==="XZY"){const m=a*l,_=a*u,y=o*l,b=o*u;t[0]=l*f,t[4]=-p,t[8]=u*f,t[1]=m*p+b,t[5]=a*f,t[9]=_*p-y,t[2]=y*p-_,t[6]=o*f,t[10]=b*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q0,e,Y0)}lookAt(e,t,i){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),$n.crossVectors(i,Qt),$n.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),$n.crossVectors(i,Qt)),$n.normalize(),Fr.crossVectors(Qt,$n),s[0]=$n.x,s[4]=Fr.x,s[8]=Qt.x,s[1]=$n.y,s[5]=Fr.y,s[9]=Qt.y,s[2]=$n.z,s[6]=Fr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],p=i[5],m=i[9],_=i[13],y=i[2],b=i[6],h=i[10],g=i[14],P=i[3],A=i[7],M=i[11],C=i[15],I=s[0],D=s[4],$=s[8],S=s[12],L=s[1],de=s[5],fe=s[9],V=s[13],j=s[2],Q=s[6],ie=s[10],z=s[14],X=s[3],ve=s[7],ge=s[11],K=s[15];return r[0]=a*I+o*L+l*j+u*X,r[4]=a*D+o*de+l*Q+u*ve,r[8]=a*$+o*fe+l*ie+u*ge,r[12]=a*S+o*V+l*z+u*K,r[1]=f*I+p*L+m*j+_*X,r[5]=f*D+p*de+m*Q+_*ve,r[9]=f*$+p*fe+m*ie+_*ge,r[13]=f*S+p*V+m*z+_*K,r[2]=y*I+b*L+h*j+g*X,r[6]=y*D+b*de+h*Q+g*ve,r[10]=y*$+b*fe+h*ie+g*ge,r[14]=y*S+b*V+h*z+g*K,r[3]=P*I+A*L+M*j+C*X,r[7]=P*D+A*de+M*Q+C*ve,r[11]=P*$+A*fe+M*ie+C*ge,r[15]=P*S+A*V+M*z+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],m=e[10],_=e[14],y=e[3],b=e[7],h=e[11],g=e[15];return y*(+r*l*p-s*u*p-r*o*m+i*u*m+s*o*_-i*l*_)+b*(+t*l*_-t*u*m+r*a*m-s*a*_+s*u*f-r*l*f)+h*(+t*u*p-t*o*_-r*a*p+i*a*_+r*o*f-i*u*f)+g*(-s*o*f-t*l*p+t*o*m+s*a*p-i*a*m+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],m=e[10],_=e[11],y=e[12],b=e[13],h=e[14],g=e[15],P=p*h*u-b*m*u+b*l*_-o*h*_-p*l*g+o*m*g,A=y*m*u-f*h*u-y*l*_+a*h*_+f*l*g-a*m*g,M=f*b*u-y*p*u+y*o*_-a*b*_-f*o*g+a*p*g,C=y*p*l-f*b*l-y*o*m+a*b*m+f*o*h-a*p*h,I=t*P+i*A+s*M+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=P*D,e[1]=(b*m*r-p*h*r-b*s*_+i*h*_+p*s*g-i*m*g)*D,e[2]=(o*h*r-b*l*r+b*s*u-i*h*u-o*s*g+i*l*g)*D,e[3]=(p*l*r-o*m*r-p*s*u+i*m*u+o*s*_-i*l*_)*D,e[4]=A*D,e[5]=(f*h*r-y*m*r+y*s*_-t*h*_-f*s*g+t*m*g)*D,e[6]=(y*l*r-a*h*r-y*s*u+t*h*u+a*s*g-t*l*g)*D,e[7]=(a*m*r-f*l*r+f*s*u-t*m*u-a*s*_+t*l*_)*D,e[8]=M*D,e[9]=(y*p*r-f*b*r-y*i*_+t*b*_+f*i*g-t*p*g)*D,e[10]=(a*b*r-y*o*r+y*i*u-t*b*u-a*i*g+t*o*g)*D,e[11]=(f*o*r-a*p*r-f*i*u+t*p*u+a*i*_-t*o*_)*D,e[12]=C*D,e[13]=(f*b*s-y*p*s+y*i*m-t*b*m-f*i*h+t*p*h)*D,e[14]=(y*o*s-a*b*s-y*i*l+t*b*l+a*i*h-t*o*h)*D,e[15]=(a*p*s-f*o*s+f*i*l-t*p*l-a*i*m+t*o*m)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,u=r*a,f=r*o;return this.set(u*a+i,u*o-s*l,u*l+s*o,0,u*o+s*l,f*o+i,f*l-s*a,0,u*l-s*o,f*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,u=r+r,f=a+a,p=o+o,m=r*u,_=r*f,y=r*p,b=a*f,h=a*p,g=o*p,P=l*u,A=l*f,M=l*p,C=i.x,I=i.y,D=i.z;return s[0]=(1-(b+g))*C,s[1]=(_+M)*C,s[2]=(y-A)*C,s[3]=0,s[4]=(_-M)*I,s[5]=(1-(m+g))*I,s[6]=(h+P)*I,s[7]=0,s[8]=(y+A)*D,s[9]=(h-P)*D,s[10]=(1-(m+b))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const a=Ki.set(s[4],s[5],s[6]).length(),o=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const u=1/r,f=1/a,p=1/o;return an.elements[0]*=u,an.elements[1]*=u,an.elements[2]*=u,an.elements[4]*=f,an.elements[5]*=f,an.elements[6]*=f,an.elements[8]*=p,an.elements[9]*=p,an.elements[10]*=p,t.setFromRotationMatrix(an),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Gn){const l=this.elements,u=2*r/(t-e),f=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s);let _,y;if(o===Gn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===_o)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Gn){const l=this.elements,u=1/(t-e),f=1/(i-s),p=1/(a-r),m=(t+e)*u,_=(i+s)*f;let y,b;if(o===Gn)y=(a+r)*p,b=-2*p;else if(o===_o)y=r*p,b=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=b,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new B,an=new _t,q0=new B(0,0,0),Y0=new B(1,1,1),$n=new B,Fr=new B,Qt=new B,yu=new _t,Mu=new Di;class Io{constructor(e=0,t=0,i=0,s=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],f=s[9],p=s[2],m=s[6],_=s[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class Nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K0=0;const Au=new B,Zi=new Di,Nn=new _t,Br=new B,Gs=new B,Z0=new B,Q0=new Di,Eu=new B(1,0,0),Su=new B(0,1,0),Tu=new B(0,0,1),J0={type:"added"},$0={type:"removed"};class Ft extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new B,t=new Io,i=new Di,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Gs,Br,this.up):Nn.lookAt(Br,Gs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(J0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const p=l[u];r(e.shapes,p)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),p=a(e.shapes),m=a(e.skeletons),_=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new B(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new B,On=new B,ma=new B,Fn=new B,Qi=new B,Ji=new B,Cu=new B,ga=new B,_a=new B,va=new B;let Hr=!1;class fn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ln.subVectors(s,t),On.subVectors(i,t),ma.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(On),l=ln.dot(ma),u=On.dot(On),f=On.dot(ma),p=a*u-o*o;if(p===0)return r.set(-2,-1,-1);const m=1/p,_=(u*l-o*f)*m,y=(a*f-o*l)*m;return r.set(1-_-y,y,_)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,i,s,r,a,o,l){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Fn),l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l}static isFrontFacing(e,t,i,s){return ln.subVectors(i,t),On.subVectors(e,t),ln.cross(On).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),On.subVectors(this.a,this.b),ln.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,i),Ji.subVectors(r,i),ga.subVectors(e,i);const l=Qi.dot(ga),u=Ji.dot(ga);if(l<=0&&u<=0)return t.copy(i);_a.subVectors(e,s);const f=Qi.dot(_a),p=Ji.dot(_a);if(f>=0&&p<=f)return t.copy(s);const m=l*p-f*u;if(m<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Qi,a);va.subVectors(e,r);const _=Qi.dot(va),y=Ji.dot(va);if(y>=0&&_<=y)return t.copy(r);const b=_*u-l*y;if(b<=0&&u>=0&&y<=0)return o=u/(u-y),t.copy(i).addScaledVector(Ji,o);const h=f*y-_*p;if(h<=0&&p-f>=0&&_-y>=0)return Cu.subVectors(r,s),o=(p-f)/(p-f+(_-y)),t.copy(s).addScaledVector(Cu,o);const g=1/(h+b+m);return a=b*g,o=m*g,t.copy(i).addScaledVector(Qi,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ev=0;class Wn extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ps,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=bf,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=on.workingColorSpace){return this.r=e,this.g=t,this.b=i,on.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=on.workingColorSpace){if(e=Al(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xa(a,r,e+1/3),this.g=xa(a,r,e),this.b=xa(a,r,e-1/3)}return on.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=Of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return on.fromWorkingColorSpace(Dt.copy(this),e),Math.round(It(Dt.r*255,0,255))*65536+Math.round(It(Dt.g*255,0,255))*256+Math.round(It(Dt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=on.workingColorSpace){on.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=on.workingColorSpace){return on.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=dt){on.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,s=Dt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(cn),cn.h+=e,cn.s+=t,cn.l+=i,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(zr);const i=$s(cn.h,zr.h,t),s=$s(cn.s,zr.s,t),r=$s(cn.l,zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new tt;tt.NAMES=Of;class El extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new B,kr=new Xe;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_u,this.updateRange={offset:0,count:-1},this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ff extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bf extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tv=0;const tn=new _t,wa=new Ft,$i=new B,Jt=new fr,Vs=new fr,Tt=new B;class xn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lf(e)?Bf:Ff)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Jt.min,Vs.min),Jt.expandByPoint(Tt),Tt.addVectors(Jt.max,Vs.max),Jt.expandByPoint(Tt)):(Jt.expandByPoint(Vs.min),Jt.expandByPoint(Vs.max))}Jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Tt.fromBufferAttribute(o,u),l&&($i.fromBufferAttribute(e,u),Tt.add($i)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let L=0;L<o;L++)u[L]=new B,f[L]=new B;const p=new B,m=new B,_=new B,y=new Xe,b=new Xe,h=new Xe,g=new B,P=new B;function A(L,de,fe){p.fromArray(s,L*3),m.fromArray(s,de*3),_.fromArray(s,fe*3),y.fromArray(a,L*2),b.fromArray(a,de*2),h.fromArray(a,fe*2),m.sub(p),_.sub(p),b.sub(y),h.sub(y);const V=1/(b.x*h.y-h.x*b.y);isFinite(V)&&(g.copy(m).multiplyScalar(h.y).addScaledVector(_,-b.y).multiplyScalar(V),P.copy(_).multiplyScalar(b.x).addScaledVector(m,-h.x).multiplyScalar(V),u[L].add(g),u[de].add(g),u[fe].add(g),f[L].add(P),f[de].add(P),f[fe].add(P))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let L=0,de=M.length;L<de;++L){const fe=M[L],V=fe.start,j=fe.count;for(let Q=V,ie=V+j;Q<ie;Q+=3)A(i[Q+0],i[Q+1],i[Q+2])}const C=new B,I=new B,D=new B,$=new B;function S(L){D.fromArray(r,L*3),$.copy(D);const de=u[L];C.copy(de),C.sub(D.multiplyScalar(D.dot(de))).normalize(),I.crossVectors($,de);const V=I.dot(f[L])<0?-1:1;l[L*4]=C.x,l[L*4+1]=C.y,l[L*4+2]=C.z,l[L*4+3]=V}for(let L=0,de=M.length;L<de;++L){const fe=M[L],V=fe.start,j=fe.count;for(let Q=V,ie=V+j;Q<ie;Q+=3)S(i[Q+0]),S(i[Q+1]),S(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,u=new B,f=new B,p=new B;if(e)for(let m=0,_=e.count;m<_;m+=3){const y=e.getX(m+0),b=e.getX(m+1),h=e.getX(m+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,h),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,h),o.add(f),l.add(f),u.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let m=0,_=t.count;m<_;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),i.setXYZ(m+0,f.x,f.y,f.z),i.setXYZ(m+1,f.x,f.y,f.z),i.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,p=o.normalized,m=new u.constructor(l.length*f);let _=0,y=0;for(let b=0,h=l.length;b<h;b++){o.isInterleavedBufferAttribute?_=l[b]*o.data.stride+o.offset:_=l[b]*f;for(let g=0;g<f;g++)m[y++]=u[_++]}return new Cn(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=e(l,i);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let f=0,p=u.length;f<p;f++){const m=u[f],_=e(m,i);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let p=0,m=u.length;p<m;p++){const _=u[p];f.push(_.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],p=r[u];for(let m=0,_=p.length;m<_;m++)f.push(p[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new _t,_i=new Do,Gr=new hr,Pu=new B,es=new B,ts=new B,ns=new B,ba=new B,Vr=new B,Wr=new Xe,Xr=new Xe,jr=new Xe,Lu=new B,Du=new B,Iu=new B,qr=new B,Yr=new B;class rn extends Ft{constructor(e=new xn,t=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Vr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const f=o[l],p=r[l];f!==0&&(ba.fromBufferAttribute(p,e),a?Vr.addScaledVector(ba,f):Vr.addScaledVector(ba.sub(t),f))}t.add(Vr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(Gr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Gr,Pu)===null||_i.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Ru.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Ru),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,m=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=m.length;y<b;y++){const h=m[y],g=a[h.materialIndex],P=Math.max(h.start,_.start),A=Math.min(o.count,Math.min(h.start+h.count,_.start+_.count));for(let M=P,C=A;M<C;M+=3){const I=o.getX(M),D=o.getX(M+1),$=o.getX(M+2);s=Kr(this,g,e,i,u,f,p,I,D,$),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const y=Math.max(0,_.start),b=Math.min(o.count,_.start+_.count);for(let h=y,g=b;h<g;h+=3){const P=o.getX(h),A=o.getX(h+1),M=o.getX(h+2);s=Kr(this,a,e,i,u,f,p,P,A,M),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,b=m.length;y<b;y++){const h=m[y],g=a[h.materialIndex],P=Math.max(h.start,_.start),A=Math.min(l.count,Math.min(h.start+h.count,_.start+_.count));for(let M=P,C=A;M<C;M+=3){const I=M,D=M+1,$=M+2;s=Kr(this,g,e,i,u,f,p,I,D,$),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const y=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let h=y,g=b;h<g;h+=3){const P=h,A=h+1,M=h+2;s=Kr(this,a,e,i,u,f,p,P,A,M),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function nv(n,e,t,i,s,r,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ui,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Yr);return u<t.near||u>t.far?null:{distance:u,point:Yr.clone(),object:n}}function Kr(n,e,t,i,s,r,a,o,l,u){n.getVertexPosition(o,es),n.getVertexPosition(l,ts),n.getVertexPosition(u,ns);const f=nv(n,e,t,i,es,ts,ns,qr);if(f){s&&(Wr.fromBufferAttribute(s,o),Xr.fromBufferAttribute(s,l),jr.fromBufferAttribute(s,u),f.uv=fn.getInterpolation(qr,es,ts,ns,Wr,Xr,jr,new Xe)),r&&(Wr.fromBufferAttribute(r,o),Xr.fromBufferAttribute(r,l),jr.fromBufferAttribute(r,u),f.uv1=fn.getInterpolation(qr,es,ts,ns,Wr,Xr,jr,new Xe),f.uv2=f.uv1),a&&(Lu.fromBufferAttribute(a,o),Du.fromBufferAttribute(a,l),Iu.fromBufferAttribute(a,u),f.normal=fn.getInterpolation(qr,es,ts,ns,Lu,Du,Iu,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new B,materialIndex:0};fn.getNormal(es,ts,ns,p.normal),f.face=p}return f}class pr extends xn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],f=[],p=[];let m=0,_=0;y("z","y","x",-1,-1,i,t,e,a,r,0),y("z","y","x",1,-1,i,t,-e,a,r,1),y("x","z","y",1,1,e,i,t,s,a,2),y("x","z","y",1,-1,e,i,-t,s,a,3),y("x","y","z",1,-1,e,t,i,s,r,4),y("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(p,2));function y(b,h,g,P,A,M,C,I,D,$,S){const L=M/D,de=C/$,fe=M/2,V=C/2,j=I/2,Q=D+1,ie=$+1;let z=0,X=0;const ve=new B;for(let ge=0;ge<ie;ge++){const K=ge*de-V;for(let ee=0;ee<Q;ee++){const Se=ee*L-fe;ve[b]=Se*P,ve[h]=K*A,ve[g]=j,u.push(ve.x,ve.y,ve.z),ve[b]=0,ve[h]=0,ve[g]=I>0?1:-1,f.push(ve.x,ve.y,ve.z),p.push(ee/D),p.push(1-ge/$),z+=1}}for(let ge=0;ge<$;ge++)for(let K=0;K<D;K++){const ee=m+K+Q*ge,Se=m+K+Q*(ge+1),Pe=m+(K+1)+Q*(ge+1),Ce=m+(K+1)+Q*ge;l.push(ee,Se,Ce),l.push(Se,Pe,Ce),X+=6}o.addGroup(_,X,S),_+=X,m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Ms(n[t]);for(const s in i)e[s]=i[s]}return e}function iv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hf(n){return n.getRenderTarget()===null?n.outputColorSpace:Rn}const sv={clone:Ms,merge:Gt};var rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zf extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $t extends zf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/u,s*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,ss=1;class av extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const s=new $t(is,ss,e,t);s.layers=this.layers,this.add(s);const r=new $t(is,ss,e,t);r.layers=this.layers,this.add(r);const a=new $t(is,ss,e,t);a.layers=this.layers,this.add(a);const o=new $t(is,ss,e,t);o.layers=this.layers,this.add(o);const l=new $t(is,ss,e,t);l.layers=this.layers,this.add(l);const u=new $t(is,ss,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const u of t)this.remove(u);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,o,l,u]=this.children,f=e.getRenderTarget(),p=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,r),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class kf extends Kt{constructor(e,t,i,s,r,a,o,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:ws,super(e,t,i,s,r,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lv extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ci?dt:Ri),this.texture=new kf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pr(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:oi});r.uniforms.tEquirect.value=t;const a=new rn(s,r),o=t.minFilter;return t.minFilter===ar&&(t.minFilter=sn),new av(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ya=new B,cv=new B,uv=new Qe;class ti{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ya.subVectors(i,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ya),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uv.getNormalMatrix(e),s=this.coplanarPoint(ya).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new hr,Zr=new B;class Sl{constructor(e=new ti,t=new ti,i=new ti,s=new ti,r=new ti,a=new ti){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],f=s[5],p=s[6],m=s[7],_=s[8],y=s[9],b=s[10],h=s[11],g=s[12],P=s[13],A=s[14],M=s[15];if(i[0].setComponents(l-r,m-u,h-_,M-g).normalize(),i[1].setComponents(l+r,m+u,h+_,M+g).normalize(),i[2].setComponents(l+a,m+f,h+y,M+P).normalize(),i[3].setComponents(l-a,m-f,h-y,M-P).normalize(),i[4].setComponents(l-o,m-p,h-b,M-A).normalize(),t===Gn)i[5].setComponents(l+o,m+p,h+b,M+A).normalize();else if(t===_o)i[5].setComponents(o,p,b,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Zr.x=s.normal.x>0?e.max.x:e.min.x,Zr.y=s.normal.y>0?e.max.y:e.min.y,Zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dv(n,e){const t=e.isWebGL2,i=new WeakMap;function s(u,f){const p=u.array,m=u.usage,_=n.createBuffer();n.bindBuffer(f,_),n.bufferData(f,p,m),u.onUploadCallback();let y;if(p instanceof Float32Array)y=n.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=n.SHORT;else if(p instanceof Uint32Array)y=n.UNSIGNED_INT;else if(p instanceof Int32Array)y=n.INT;else if(p instanceof Int8Array)y=n.BYTE;else if(p instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function r(u,f,p){const m=f.array,_=f.updateRange;n.bindBuffer(p,u),_.count===-1?n.bufferSubData(p,0,m):(t?n.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count):n.bufferSubData(p,_.offset*m.BYTES_PER_ELEMENT,m.subarray(_.offset,_.offset+_.count)),_.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(n.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const m=i.get(u);(!m||m.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,s(u,f)):p.version<u.version&&(r(p.buffer,u,f),p.version=u.version)}return{get:a,remove:o,update:l}}class Uo extends xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),u=o+1,f=l+1,p=e/o,m=t/l,_=[],y=[],b=[],h=[];for(let g=0;g<f;g++){const P=g*m-a;for(let A=0;A<u;A++){const M=A*p-r;y.push(M,-P,0),b.push(0,0,1),h.push(A/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let P=0;P<o;P++){const A=P+u*g,M=P+u*(g+1),C=P+1+u*(g+1),I=P+1+u*g;_.push(A,M,I),_.push(M,C,I)}this.setIndex(_),this.setAttribute("position",new Wt(y,3)),this.setAttribute("normal",new Wt(b,3)),this.setAttribute("uv",new Wt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Av=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,cx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ux=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:fv,alphahash_pars_fragment:hv,alphamap_fragment:pv,alphamap_pars_fragment:mv,alphatest_fragment:gv,alphatest_pars_fragment:_v,aomap_fragment:vv,aomap_pars_fragment:xv,begin_vertex:wv,beginnormal_vertex:bv,bsdfs:yv,iridescence_fragment:Mv,bumpmap_pars_fragment:Av,clipping_planes_fragment:Ev,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:Cv,color_fragment:Rv,color_pars_fragment:Pv,color_pars_vertex:Lv,color_vertex:Dv,common:Iv,cube_uv_reflection_fragment:Uv,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Ov,displacementmap_vertex:Fv,emissivemap_fragment:Bv,emissivemap_pars_fragment:Hv,colorspace_fragment:zv,colorspace_pars_fragment:kv,envmap_fragment:Gv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:Wv,envmap_pars_vertex:Xv,envmap_physical_pars_fragment:ix,envmap_vertex:jv,fog_vertex:qv,fog_pars_vertex:Yv,fog_fragment:Kv,fog_pars_fragment:Zv,gradientmap_pars_fragment:Qv,lightmap_fragment:Jv,lightmap_pars_fragment:$v,lights_lambert_fragment:ex,lights_lambert_pars_fragment:tx,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ox,lights_phong_pars_fragment:ax,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:ux,lights_fragment_maps:dx,lights_fragment_end:fx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:_x,map_pars_fragment:vx,map_particle_fragment:xx,map_particle_pars_fragment:wx,metalnessmap_fragment:bx,metalnessmap_pars_fragment:yx,morphcolor_vertex:Mx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Ex,morphtarget_vertex:Sx,normal_fragment_begin:Tx,normal_fragment_maps:Cx,normal_pars_fragment:Rx,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Ox,opaque_fragment:Fx,packing:Bx,premultiplied_alpha_fragment:Hx,project_vertex:zx,dithering_fragment:kx,dithering_pars_fragment:Gx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:jx,shadowmap_vertex:qx,shadowmask_pars_fragment:Yx,skinbase_vertex:Kx,skinning_pars_vertex:Zx,skinning_vertex:Qx,skinnormal_vertex:Jx,specularmap_fragment:$x,specularmap_pars_fragment:ew,tonemapping_fragment:tw,tonemapping_pars_fragment:nw,transmission_fragment:iw,transmission_pars_fragment:sw,uv_pars_fragment:rw,uv_pars_vertex:ow,uv_vertex:aw,worldpos_vertex:lw,background_vert:cw,background_frag:uw,backgroundCube_vert:dw,backgroundCube_frag:fw,cube_vert:hw,cube_frag:pw,depth_vert:mw,depth_frag:gw,distanceRGBA_vert:_w,distanceRGBA_frag:vw,equirect_vert:xw,equirect_frag:ww,linedashed_vert:bw,linedashed_frag:yw,meshbasic_vert:Mw,meshbasic_frag:Aw,meshlambert_vert:Ew,meshlambert_frag:Sw,meshmatcap_vert:Tw,meshmatcap_frag:Cw,meshnormal_vert:Rw,meshnormal_frag:Pw,meshphong_vert:Lw,meshphong_frag:Dw,meshphysical_vert:Iw,meshphysical_frag:Uw,meshtoon_vert:Nw,meshtoon_frag:Ow,points_vert:Fw,points_frag:Bw,shadow_vert:Hw,shadow_frag:zw,sprite_vert:kw,sprite_frag:Gw},Re={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},An={basic:{uniforms:Gt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Gt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Gt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Gt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Gt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Gt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Gt([Re.points,Re.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Gt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Gt([Re.common,Re.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Gt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Gt([Re.sprite,Re.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Gt([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Gt([Re.lights,Re.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};An.physical={uniforms:Gt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Qr={r:0,b:0,g:0};function Vw(n,e,t,i,s,r,a){const o=new tt(0);let l=r===!0?0:1,u,f,p=null,m=0,_=null;function y(h,g){let P=!1,A=g.isScene===!0?g.background:null;A&&A.isTexture&&(A=(g.backgroundBlurriness>0?t:e).get(A)),A===null?b(o,l):A&&A.isColor&&(b(A,1),P=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||P)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Po)?(f===void 0&&(f=new rn(new pr(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ms(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=A.colorSpace!==dt,(p!==A||m!==A.version||_!==n.toneMapping)&&(f.material.needsUpdate=!0,p=A,m=A.version,_=n.toneMapping),f.layers.enableAll(),h.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new rn(new Uo(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ms(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=A.colorSpace!==dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||m!==A.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,p=A,m=A.version,_=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function b(h,g){h.getRGB(Qr,Hf(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(h,g=1){o.set(h),l=g,b(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,b(o,l)},render:y}}function Ww(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=h(null);let u=l,f=!1;function p(j,Q,ie,z,X){let ve=!1;if(a){const ge=b(z,ie,Q);u!==ge&&(u=ge,_(u.object)),ve=g(j,z,ie,X),ve&&P(j,z,ie,X)}else{const ge=Q.wireframe===!0;(u.geometry!==z.id||u.program!==ie.id||u.wireframe!==ge)&&(u.geometry=z.id,u.program=ie.id,u.wireframe=ge,ve=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ve||f)&&(f=!1,$(j,Q,ie,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function m(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function _(j){return i.isWebGL2?n.bindVertexArray(j):r.bindVertexArrayOES(j)}function y(j){return i.isWebGL2?n.deleteVertexArray(j):r.deleteVertexArrayOES(j)}function b(j,Q,ie){const z=ie.wireframe===!0;let X=o[j.id];X===void 0&&(X={},o[j.id]=X);let ve=X[Q.id];ve===void 0&&(ve={},X[Q.id]=ve);let ge=ve[z];return ge===void 0&&(ge=h(m()),ve[z]=ge),ge}function h(j){const Q=[],ie=[],z=[];for(let X=0;X<s;X++)Q[X]=0,ie[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ie,attributeDivisors:z,object:j,attributes:{},index:null}}function g(j,Q,ie,z){const X=u.attributes,ve=Q.attributes;let ge=0;const K=ie.getAttributes();for(const ee in K)if(K[ee].location>=0){const Pe=X[ee];let Ce=ve[ee];if(Ce===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(Ce=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(Ce=j.instanceColor)),Pe===void 0||Pe.attribute!==Ce||Ce&&Pe.data!==Ce.data)return!0;ge++}return u.attributesNum!==ge||u.index!==z}function P(j,Q,ie,z){const X={},ve=Q.attributes;let ge=0;const K=ie.getAttributes();for(const ee in K)if(K[ee].location>=0){let Pe=ve[ee];Pe===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(Pe=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(Pe=j.instanceColor));const Ce={};Ce.attribute=Pe,Pe&&Pe.data&&(Ce.data=Pe.data),X[ee]=Ce,ge++}u.attributes=X,u.attributesNum=ge,u.index=z}function A(){const j=u.newAttributes;for(let Q=0,ie=j.length;Q<ie;Q++)j[Q]=0}function M(j){C(j,0)}function C(j,Q){const ie=u.newAttributes,z=u.enabledAttributes,X=u.attributeDivisors;ie[j]=1,z[j]===0&&(n.enableVertexAttribArray(j),z[j]=1),X[j]!==Q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,Q),X[j]=Q)}function I(){const j=u.newAttributes,Q=u.enabledAttributes;for(let ie=0,z=Q.length;ie<z;ie++)Q[ie]!==j[ie]&&(n.disableVertexAttribArray(ie),Q[ie]=0)}function D(j,Q,ie,z,X,ve,ge){ge===!0?n.vertexAttribIPointer(j,Q,ie,X,ve):n.vertexAttribPointer(j,Q,ie,z,X,ve)}function $(j,Q,ie,z){if(i.isWebGL2===!1&&(j.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const X=z.attributes,ve=ie.getAttributes(),ge=Q.defaultAttributeValues;for(const K in ve){const ee=ve[K];if(ee.location>=0){let Se=X[K];if(Se===void 0&&(K==="instanceMatrix"&&j.instanceMatrix&&(Se=j.instanceMatrix),K==="instanceColor"&&j.instanceColor&&(Se=j.instanceColor)),Se!==void 0){const Pe=Se.normalized,Ce=Se.itemSize,Le=t.get(Se);if(Le===void 0)continue;const Ue=Le.buffer,Ne=Le.type,Ge=Le.bytesPerElement,rt=i.isWebGL2===!0&&(Ne===n.INT||Ne===n.UNSIGNED_INT||Se.gpuType===Mf);if(Se.isInterleavedBufferAttribute){const Ve=Se.data,x=Ve.stride,N=Se.offset;if(Ve.isInstancedInterleavedBuffer){for(let H=0;H<ee.locationSize;H++)C(ee.location+H,Ve.meshPerAttribute);j.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let H=0;H<ee.locationSize;H++)M(ee.location+H);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let H=0;H<ee.locationSize;H++)D(ee.location+H,Ce/ee.locationSize,Ne,Pe,x*Ge,(N+Ce/ee.locationSize*H)*Ge,rt)}else{if(Se.isInstancedBufferAttribute){for(let Ve=0;Ve<ee.locationSize;Ve++)C(ee.location+Ve,Se.meshPerAttribute);j.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ve=0;Ve<ee.locationSize;Ve++)M(ee.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Ve=0;Ve<ee.locationSize;Ve++)D(ee.location+Ve,Ce/ee.locationSize,Ne,Pe,Ce*Ge,Ce/ee.locationSize*Ve*Ge,rt)}}else if(ge!==void 0){const Pe=ge[K];if(Pe!==void 0)switch(Pe.length){case 2:n.vertexAttrib2fv(ee.location,Pe);break;case 3:n.vertexAttrib3fv(ee.location,Pe);break;case 4:n.vertexAttrib4fv(ee.location,Pe);break;default:n.vertexAttrib1fv(ee.location,Pe)}}}}I()}function S(){fe();for(const j in o){const Q=o[j];for(const ie in Q){const z=Q[ie];for(const X in z)y(z[X].object),delete z[X];delete Q[ie]}delete o[j]}}function L(j){if(o[j.id]===void 0)return;const Q=o[j.id];for(const ie in Q){const z=Q[ie];for(const X in z)y(z[X].object),delete z[X];delete Q[ie]}delete o[j.id]}function de(j){for(const Q in o){const ie=o[Q];if(ie[j.id]===void 0)continue;const z=ie[j.id];for(const X in z)y(z[X].object),delete z[X];delete ie[j.id]}}function fe(){V(),f=!0,u!==l&&(u=l,_(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:fe,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:de,initAttributes:A,enableAttribute:M,disableUnusedAttributes:I}}function Xw(n,e,t,i){const s=i.isWebGL2;let r;function a(u){r=u}function o(u,f){n.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,p){if(p===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,f,p),t.update(f,r,p)}this.setMode=a,this.render=o,this.renderInstances=l}function jw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),b=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,M=a||e.has("OES_texture_float"),C=A&&M,I=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:P,vertexTextures:A,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:I}}function qw(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ti,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const _=p.length!==0||m||i!==0||s;return s=m,i=p.length,_},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,_){const y=p.clippingPlanes,b=p.clipIntersection,h=p.clipShadows,g=n.get(p);if(!s||y===null||y.length===0||r&&!h)r?f(null):u();else{const P=r?0:i,A=P*4;let M=g.clippingState||null;l.value=M,M=f(y,m,A,_);for(let C=0;C!==A;++C)M[C]=t[C];g.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,m,_,y){const b=p!==null?p.length:0;let h=null;if(b!==0){if(h=l.value,y!==!0||h===null){const g=_+b*4,P=m.matrixWorldInverse;o.getNormalMatrix(P),(h===null||h.length<g)&&(h=new Float32Array(g));for(let A=0,M=_;A!==b;++A,M+=4)a.copy(p[A]).applyMatrix4(P,o),a.normal.toArray(h,M),h[M+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,h}}function Yw(n){let e=new WeakMap;function t(a,o){return o===ja?a.mapping=ws:o===qa&&(a.mapping=bs),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ja||o===qa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new lv(l.height/2);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",s),t(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Kw extends zf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cs=4,Uu=[.125,.215,.35,.446,.526,.582],Mi=20,Ma=new Kw,Nu=new tt;let Aa=null;const xi=(1+Math.sqrt(5))/2,rs=1/xi,Ou=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,xi,rs),new B(0,xi,-rs),new B(rs,0,xi),new B(-rs,0,xi),new B(xi,rs,0),new B(-xi,rs,0)];class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Aa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:lr,format:mn,colorSpace:Rn,depthBuffer:!1},s=Bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zw(r)),this._blurMaterial=Qw(r,e,t)}return s}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,i,s){const o=new $t(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(Nu),f.toneMapping=ai,f.autoClear=!1;const _=new El({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),y=new rn(new pr,_);let b=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,b=!0):(_.color.copy(Nu),b=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(o.up.set(0,l[g],0),o.lookAt(u[g],0,0)):P===1?(o.up.set(0,0,l[g]),o.lookAt(0,u[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,u[g]));const A=this._cubeSize;Jr(s,P*A,g>2?A:0,A,A),f.setRenderTarget(s),b&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ws||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new rn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ma)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ou[(s-1)%Ou.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new rn(this._lodPlanes[s],u),m=u.uniforms,_=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*_):2*Math.PI/(2*Mi-1),b=r/y,h=isFinite(r)?1+Math.floor(f*b):Mi;h>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Mi}`);const g=[];let P=0;for(let D=0;D<Mi;++D){const $=D/b,S=Math.exp(-$*$/2);g.push(S),D===0?P+=S:D<h&&(P+=2*S)}for(let D=0;D<g.length;D++)g[D]=g[D]/P;m.envMap.value=e.texture,m.samples.value=h,m.weights.value=g,m.latitudinal.value=a==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:A}=this;m.dTheta.value=y,m.mipInt.value=A-i;const M=this._sizeLods[s],C=3*M*(s>A-cs?s-A+cs:0),I=4*(this._cubeSize-M);Jr(t,C,I,3*M,2*M),l.setRenderTarget(t),l.render(p,Ma)}}function Zw(n){const e=[],t=[],i=[];let s=n;const r=n-cs+1+Uu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-cs?l=Uu[a-n+cs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,p=1+u,m=[f,f,p,f,p,p,f,f,p,p,f,p],_=6,y=6,b=3,h=2,g=1,P=new Float32Array(b*y*_),A=new Float32Array(h*y*_),M=new Float32Array(g*y*_);for(let I=0;I<_;I++){const D=I%3*2/3-1,$=I>2?0:-1,S=[D,$,0,D+2/3,$,0,D+2/3,$+1,0,D,$,0,D+2/3,$+1,0,D,$+1,0];P.set(S,b*y*I),A.set(m,h*y*I);const L=[I,I,I,I,I,I];M.set(L,g*y*I)}const C=new xn;C.setAttribute("position",new Cn(P,b)),C.setAttribute("uv",new Cn(A,h)),C.setAttribute("faceIndex",new Cn(M,g)),e.push(C),s>cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bu(n,e,t){const i=new Li(n,e,t);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qw(n,e,t){const i=new Float32Array(Mi),s=new B(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Hu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function zu(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jw(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===ja||l===qa,f=l===ws||l===bs;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=e.get(o);return t===null&&(t=new Fu(n)),p=u?t.fromEquirectangular(o,p):t.fromCubemap(o,p),e.set(o,p),p.texture}else{if(e.has(o))return e.get(o).texture;{const p=o.image;if(u&&p&&p.height>0||f&&p&&s(p)){t===null&&(t=new Fu(n));const m=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,m),o.addEventListener("dispose",r),m.texture}else return null}}}return o}function s(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $w(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function eb(n,e,t,i){const s={},r=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const b=m.morphAttributes[y];for(let h=0,g=b.length;h<g;h++)e.remove(b[h])}m.removeEventListener("dispose",a),delete s[m.id];const _=r.get(m);_&&(e.remove(_),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function o(p,m){return s[m.id]===!0||(m.addEventListener("dispose",a),s[m.id]=!0,t.memory.geometries++),m}function l(p){const m=p.attributes;for(const y in m)e.update(m[y],n.ARRAY_BUFFER);const _=p.morphAttributes;for(const y in _){const b=_[y];for(let h=0,g=b.length;h<g;h++)e.update(b[h],n.ARRAY_BUFFER)}}function u(p){const m=[],_=p.index,y=p.attributes.position;let b=0;if(_!==null){const P=_.array;b=_.version;for(let A=0,M=P.length;A<M;A+=3){const C=P[A+0],I=P[A+1],D=P[A+2];m.push(C,I,I,D,D,C)}}else if(y!==void 0){const P=y.array;b=y.version;for(let A=0,M=P.length/3-1;A<M;A+=3){const C=A+0,I=A+1,D=A+2;m.push(C,I,I,D,D,C)}}else return;const h=new(Lf(m)?Bf:Ff)(m,1);h.version=b;const g=r.get(p);g&&e.remove(g),r.set(p,h)}function f(p){const m=r.get(p);if(m){const _=p.index;_!==null&&m.version<_.version&&u(p)}else u(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function tb(n,e,t,i){const s=i.isWebGL2;let r;function a(m){r=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function f(m,_){n.drawElements(r,_,o,m*l),t.update(_,r,1)}function p(m,_,y){if(y===0)return;let b,h;if(s)b=n,h="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[h](r,_,o,m*l,y),t.update(_,r,y)}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=p}function nb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ib(n,e){return n[0]-e[0]}function sb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rb(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new ft,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,p){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,b=y!==void 0?y.length:0;let h=r.get(f);if(h===void 0||h.count!==b){let Q=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",Q)};var _=Q;h!==void 0&&h.texture.dispose();const A=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,I=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],$=f.morphAttributes.color||[];let S=0;A===!0&&(S=1),M===!0&&(S=2),C===!0&&(S=3);let L=f.attributes.position.count*S,de=1;L>e.maxTextureSize&&(de=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const fe=new Float32Array(L*de*4*b),V=new Uf(fe,L,de,b);V.type=ii,V.needsUpdate=!0;const j=S*4;for(let ie=0;ie<b;ie++){const z=I[ie],X=D[ie],ve=$[ie],ge=L*de*4*ie;for(let K=0;K<z.count;K++){const ee=K*j;A===!0&&(a.fromBufferAttribute(z,K),fe[ge+ee+0]=a.x,fe[ge+ee+1]=a.y,fe[ge+ee+2]=a.z,fe[ge+ee+3]=0),M===!0&&(a.fromBufferAttribute(X,K),fe[ge+ee+4]=a.x,fe[ge+ee+5]=a.y,fe[ge+ee+6]=a.z,fe[ge+ee+7]=0),C===!0&&(a.fromBufferAttribute(ve,K),fe[ge+ee+8]=a.x,fe[ge+ee+9]=a.y,fe[ge+ee+10]=a.z,fe[ge+ee+11]=ve.itemSize===4?a.w:1)}}h={count:b,texture:V,size:new Xe(L,de)},r.set(f,h),f.addEventListener("dispose",Q)}let g=0;for(let A=0;A<m.length;A++)g+=m[A];const P=f.morphTargetsRelative?1:1-g;p.getUniforms().setValue(n,"morphTargetBaseInfluence",P),p.getUniforms().setValue(n,"morphTargetInfluences",m),p.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),p.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const y=m===void 0?0:m.length;let b=i[f.id];if(b===void 0||b.length!==y){b=[];for(let M=0;M<y;M++)b[M]=[M,0];i[f.id]=b}for(let M=0;M<y;M++){const C=b[M];C[0]=M,C[1]=m[M]}b.sort(sb);for(let M=0;M<8;M++)M<y&&b[M][1]?(o[M][0]=b[M][0],o[M][1]=b[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(ib);const h=f.morphAttributes.position,g=f.morphAttributes.normal;let P=0;for(let M=0;M<8;M++){const C=o[M],I=C[0],D=C[1];I!==Number.MAX_SAFE_INTEGER&&D?(h&&f.getAttribute("morphTarget"+M)!==h[I]&&f.setAttribute("morphTarget"+M,h[I]),g&&f.getAttribute("morphNormal"+M)!==g[I]&&f.setAttribute("morphNormal"+M,g[I]),s[M]=D,P+=D):(h&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),g&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),s[M]=0)}const A=f.morphTargetsRelative?1:1-P;p.getUniforms().setValue(n,"morphTargetBaseInfluence",A),p.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function ob(n,e,t,i){let s=new WeakMap;function r(l){const u=i.render.frame,f=l.geometry,p=e.get(l,f);if(s.get(p)!==u&&(e.update(p),s.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return p}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:a}}const Vf=new Kt,Wf=new Uf,Xf=new X0,jf=new kf,ku=[],Gu=[],Vu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function Ps(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function No(n,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ab(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function db(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Et(t,i))return;Xu.set(i),n.uniformMatrix2fv(this.addr,!1,Xu),St(t,i)}}function fb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Et(t,i))return;Wu.set(i),n.uniformMatrix3fv(this.addr,!1,Wu),St(t,i)}}function hb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Et(t,i))return;Vu.set(i),n.uniformMatrix4fv(this.addr,!1,Vu),St(t,i)}}function pb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function gb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function vb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function yb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||Vf,s)}function Mb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xf,s)}function Ab(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jf,s)}function Eb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wf,s)}function Sb(n){switch(n){case 5126:return ab;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return db;case 35675:return fb;case 35676:return hb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return xb;case 36295:return wb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Eb}}function Tb(n,e){n.uniform1fv(this.addr,e)}function Cb(n,e){const t=Ps(e,this.size,2);n.uniform2fv(this.addr,t)}function Rb(n,e){const t=Ps(e,this.size,3);n.uniform3fv(this.addr,t)}function Pb(n,e){const t=Ps(e,this.size,4);n.uniform4fv(this.addr,t)}function Lb(n,e){const t=Ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Db(n,e){const t=Ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ib(n,e){const t=Ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ub(n,e){n.uniform1iv(this.addr,e)}function Nb(n,e){n.uniform2iv(this.addr,e)}function Ob(n,e){n.uniform3iv(this.addr,e)}function Fb(n,e){n.uniform4iv(this.addr,e)}function Bb(n,e){n.uniform1uiv(this.addr,e)}function Hb(n,e){n.uniform2uiv(this.addr,e)}function zb(n,e){n.uniform3uiv(this.addr,e)}function kb(n,e){n.uniform4uiv(this.addr,e)}function Gb(n,e,t){const i=this.cache,s=e.length,r=No(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vf,r[a])}function Vb(n,e,t){const i=this.cache,s=e.length,r=No(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xf,r[a])}function Wb(n,e,t){const i=this.cache,s=e.length,r=No(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||jf,r[a])}function Xb(n,e,t){const i=this.cache,s=e.length,r=No(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wf,r[a])}function jb(n){switch(n){case 5126:return Tb;case 35664:return Cb;case 35665:return Rb;case 35666:return Pb;case 35674:return Lb;case 35675:return Db;case 35676:return Ib;case 5124:case 35670:return Ub;case 35667:case 35671:return Nb;case 35668:case 35672:return Ob;case 35669:case 35673:return Fb;case 5125:return Bb;case 36294:return Hb;case 36295:return zb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return Xb}}class qb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Sb(t.type)}}class Yb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=jb(t.type)}}class Kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function ju(n,e){n.seq.push(e),n.map[e.id]=e}function Zb(n,e,t){const i=n.name,s=i.length;for(Ea.lastIndex=0;;){const r=Ea.exec(i),a=Ea.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){ju(t,u===void 0?new qb(o,n,e):new Yb(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Kb(o),ju(t,p)),t=p}}}class co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Zb(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function qu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Qb=0;function Jb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function $b(n){switch(n){case Rn:return["Linear","( value )"];case dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Yu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jb(n.getShaderSource(e),a)}else return s}function ey(n,e){const t=$b(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ty(n,e){let t;switch(e){case q_:t="Linear";break;case Y_:t="Reinhard";break;case K_:t="OptimizedCineon";break;case Z_:t="ACESFilmic";break;case Q_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ny(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qs).join(`
`)}function iy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qs(n){return n!==""}function Ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(n){return n.replace(ry,ay)}const oy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ay(n,e){let t=qe[e];if(t===void 0){const i=oy.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(n){return n.replace(ly,cy)}function cy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function dy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ws:case bs:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function hy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case X_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function py(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function my(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uy(t),u=dy(t),f=fy(t),p=hy(t),m=py(t),_=t.isWebGL2?"":ny(t),y=iy(r),b=s.createProgram();let h,g,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qs).join(`
`),h.length>0&&(h+=`
`),g=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(qs).join(`
`),g.length>0&&(g+=`
`)):(h=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),g=[_,Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==ai?ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ey("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=Ja(a),a=Ku(a,t),a=Zu(a,t),o=Ja(o),o=Ku(o,t),o=Zu(o,t),a=Qu(a),o=Qu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const A=P+h+a,M=P+g+o,C=qu(s,s.VERTEX_SHADER,A),I=qu(s,s.FRAGMENT_SHADER,M);if(s.attachShader(b,C),s.attachShader(b,I),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b),n.debug.checkShaderErrors){const S=s.getProgramInfoLog(b).trim(),L=s.getShaderInfoLog(C).trim(),de=s.getShaderInfoLog(I).trim();let fe=!0,V=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(fe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,C,I);else{const j=Yu(s,C,"vertex"),Q=Yu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+j+`
`+Q)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||de==="")&&(V=!1);V&&(this.diagnostics={runnable:fe,programLog:S,vertexShader:{log:L,prefix:h},fragmentShader:{log:de,prefix:g}})}s.deleteShader(C),s.deleteShader(I);let D;this.getUniforms=function(){return D===void 0&&(D=new co(s,b)),D};let $;return this.getAttributes=function(){return $===void 0&&($=sy(s,b)),$},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=I,this}let gy=0;class _y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new vy(e),t.set(e,i)),i}}class vy{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}}function xy(n,e,t,i,s,r,a){const o=new Nf,l=new _y,u=[],f=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return S===0?"uv":`uv${S}`}function h(S,L,de,fe,V){const j=fe.fog,Q=V.geometry,ie=S.isMeshStandardMaterial?fe.environment:null,z=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),X=z&&z.mapping===Po?z.image.height:null,ve=y[S.type];S.precision!==null&&(_=s.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,K=ge!==void 0?ge.length:0;let ee=0;Q.morphAttributes.position!==void 0&&(ee=1),Q.morphAttributes.normal!==void 0&&(ee=2),Q.morphAttributes.color!==void 0&&(ee=3);let Se,Pe,Ce,Le;if(ve){const ot=An[ve];Se=ot.vertexShader,Pe=ot.fragmentShader}else Se=S.vertexShader,Pe=S.fragmentShader,l.update(S),Ce=l.getVertexShaderID(S),Le=l.getFragmentShaderID(S);const Ue=n.getRenderTarget(),Ne=V.isInstancedMesh===!0,Ge=!!S.map,rt=!!S.matcap,Ve=!!z,x=!!S.aoMap,N=!!S.lightMap,H=!!S.bumpMap,Z=!!S.normalMap,q=!!S.displacementMap,me=!!S.emissiveMap,_e=!!S.metalnessMap,J=!!S.roughnessMap,ce=S.anisotropy>0,he=S.clearcoat>0,Ae=S.iridescence>0,E=S.sheen>0,w=S.transmission>0,F=ce&&!!S.anisotropyMap,G=he&&!!S.clearcoatMap,se=he&&!!S.clearcoatNormalMap,le=he&&!!S.clearcoatRoughnessMap,Ee=Ae&&!!S.iridescenceMap,pe=Ae&&!!S.iridescenceThicknessMap,k=E&&!!S.sheenColorMap,U=E&&!!S.sheenRoughnessMap,ue=!!S.specularMap,be=!!S.specularColorMap,xe=!!S.specularIntensityMap,Me=w&&!!S.transmissionMap,ze=w&&!!S.thicknessMap,Ye=!!S.gradientMap,O=!!S.alphaMap,Te=S.alphaTest>0,te=!!S.alphaHash,we=!!S.extensions,ye=!!Q.attributes.uv1,Ke=!!Q.attributes.uv2,nt=!!Q.attributes.uv3;let st=ai;return S.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:f,shaderID:ve,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:Pe,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:Le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Rn,map:Ge,matcap:rt,envMap:Ve,envMapMode:Ve&&z.mapping,envMapCubeUVHeight:X,aoMap:x,lightMap:N,bumpMap:H,normalMap:Z,displacementMap:m&&q,emissiveMap:me,normalMapObjectSpace:Z&&S.normalMapType===u0,normalMapTangentSpace:Z&&S.normalMapType===Pf,metalnessMap:_e,roughnessMap:J,anisotropy:ce,anisotropyMap:F,clearcoat:he,clearcoatMap:G,clearcoatNormalMap:se,clearcoatRoughnessMap:le,iridescence:Ae,iridescenceMap:Ee,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:k,sheenRoughnessMap:U,specularMap:ue,specularColorMap:be,specularIntensityMap:xe,transmission:w,transmissionMap:Me,thicknessMap:ze,gradientMap:Ye,opaque:S.transparent===!1&&S.blending===ps,alphaMap:O,alphaTest:Te,alphaHash:te,combine:S.combine,mapUv:Ge&&b(S.map.channel),aoMapUv:x&&b(S.aoMap.channel),lightMapUv:N&&b(S.lightMap.channel),bumpMapUv:H&&b(S.bumpMap.channel),normalMapUv:Z&&b(S.normalMap.channel),displacementMapUv:q&&b(S.displacementMap.channel),emissiveMapUv:me&&b(S.emissiveMap.channel),metalnessMapUv:_e&&b(S.metalnessMap.channel),roughnessMapUv:J&&b(S.roughnessMap.channel),anisotropyMapUv:F&&b(S.anisotropyMap.channel),clearcoatMapUv:G&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:k&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:U&&b(S.sheenRoughnessMap.channel),specularMapUv:ue&&b(S.specularMap.channel),specularColorMapUv:be&&b(S.specularColorMap.channel),specularIntensityMapUv:xe&&b(S.specularIntensityMap.channel),transmissionMapUv:Me&&b(S.transmissionMap.channel),thicknessMapUv:ze&&b(S.thicknessMap.channel),alphaMapUv:O&&b(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Z||ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:Ke,vertexUv3s:nt,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Ge||O),fog:!!j,useFog:S.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&de.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&S.map.colorSpace===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kn,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:we&&S.extensions.derivatives===!0,extensionFragDepth:we&&S.extensions.fragDepth===!0,extensionDrawBuffers:we&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function g(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const de in S.defines)L.push(de),L.push(S.defines[de]);return S.isRawShaderMaterial===!1&&(P(L,S),A(L,S),L.push(n.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function P(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function A(S,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.matcap&&o.enable(4),L.envMap&&o.enable(5),L.normalMapObjectSpace&&o.enable(6),L.normalMapTangentSpace&&o.enable(7),L.clearcoat&&o.enable(8),L.iridescence&&o.enable(9),L.alphaTest&&o.enable(10),L.vertexColors&&o.enable(11),L.vertexAlphas&&o.enable(12),L.vertexUv1s&&o.enable(13),L.vertexUv2s&&o.enable(14),L.vertexUv3s&&o.enable(15),L.vertexTangents&&o.enable(16),L.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.useLegacyLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){const L=y[S.type];let de;if(L){const fe=An[L];de=sv.clone(fe.uniforms)}else de=S.uniforms;return de}function C(S,L){let de;for(let fe=0,V=u.length;fe<V;fe++){const j=u[fe];if(j.cacheKey===L){de=j,++de.usedTimes;break}}return de===void 0&&(de=new my(n,L,S,r),u.push(de)),de}function I(S){if(--S.usedTimes===0){const L=u.indexOf(S);u[L]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function $(){l.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:M,acquireProgram:C,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:$}}function wy(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function by(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ed(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(p,m,_,y,b,h){let g=n[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:_,groupOrder:y,renderOrder:p.renderOrder,z:b,group:h},n[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=_,g.groupOrder=y,g.renderOrder=p.renderOrder,g.z=b,g.group=h),e++,g}function o(p,m,_,y,b,h){const g=a(p,m,_,y,b,h);_.transmission>0?i.push(g):_.transparent===!0?s.push(g):t.push(g)}function l(p,m,_,y,b,h){const g=a(p,m,_,y,b,h);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):t.unshift(g)}function u(p,m){t.length>1&&t.sort(p||by),i.length>1&&i.sort(m||$u),s.length>1&&s.sort(m||$u)}function f(){for(let p=e,m=n.length;p<m;p++){const _=n[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:f,sort:u}}function yy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new ed,n.set(i,[a])):s>=r.length?(a=new ed,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function My(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new tt};break;case"SpotLight":t={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Ay(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ey=0;function Sy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ty(n,e){const t=new My,i=Ay(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)s.probe.push(new B);const r=new B,a=new _t,o=new _t;function l(f,p){let m=0,_=0,y=0;for(let de=0;de<9;de++)s.probe[de].set(0,0,0);let b=0,h=0,g=0,P=0,A=0,M=0,C=0,I=0,D=0,$=0;f.sort(Sy);const S=p===!0?Math.PI:1;for(let de=0,fe=f.length;de<fe;de++){const V=f[de],j=V.color,Q=V.intensity,ie=V.distance,z=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=j.r*Q*S,_+=j.g*Q*S,y+=j.b*Q*S;else if(V.isLightProbe)for(let X=0;X<9;X++)s.probe[X].addScaledVector(V.sh.coefficients[X],Q);else if(V.isDirectionalLight){const X=t.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity*S),V.castShadow){const ve=V.shadow,ge=i.get(V);ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,s.directionalShadow[b]=ge,s.directionalShadowMap[b]=z,s.directionalShadowMatrix[b]=V.shadow.matrix,M++}s.directional[b]=X,b++}else if(V.isSpotLight){const X=t.get(V);X.position.setFromMatrixPosition(V.matrixWorld),X.color.copy(j).multiplyScalar(Q*S),X.distance=ie,X.coneCos=Math.cos(V.angle),X.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),X.decay=V.decay,s.spot[g]=X;const ve=V.shadow;if(V.map&&(s.spotLightMap[D]=V.map,D++,ve.updateMatrices(V),V.castShadow&&$++),s.spotLightMatrix[g]=ve.matrix,V.castShadow){const ge=i.get(V);ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,s.spotShadow[g]=ge,s.spotShadowMap[g]=z,I++}g++}else if(V.isRectAreaLight){const X=t.get(V);X.color.copy(j).multiplyScalar(Q),X.halfWidth.set(V.width*.5,0,0),X.halfHeight.set(0,V.height*.5,0),s.rectArea[P]=X,P++}else if(V.isPointLight){const X=t.get(V);if(X.color.copy(V.color).multiplyScalar(V.intensity*S),X.distance=V.distance,X.decay=V.decay,V.castShadow){const ve=V.shadow,ge=i.get(V);ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,ge.shadowCameraNear=ve.camera.near,ge.shadowCameraFar=ve.camera.far,s.pointShadow[h]=ge,s.pointShadowMap[h]=z,s.pointShadowMatrix[h]=V.shadow.matrix,C++}s.point[h]=X,h++}else if(V.isHemisphereLight){const X=t.get(V);X.skyColor.copy(V.color).multiplyScalar(Q*S),X.groundColor.copy(V.groundColor).multiplyScalar(Q*S),s.hemi[A]=X,A++}}P>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=_,s.ambient[2]=y;const L=s.hash;(L.directionalLength!==b||L.pointLength!==h||L.spotLength!==g||L.rectAreaLength!==P||L.hemiLength!==A||L.numDirectionalShadows!==M||L.numPointShadows!==C||L.numSpotShadows!==I||L.numSpotMaps!==D)&&(s.directional.length=b,s.spot.length=g,s.rectArea.length=P,s.point.length=h,s.hemi.length=A,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=I+D-$,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=$,L.directionalLength=b,L.pointLength=h,L.spotLength=g,L.rectAreaLength=P,L.hemiLength=A,L.numDirectionalShadows=M,L.numPointShadows=C,L.numSpotShadows=I,L.numSpotMaps=D,s.version=Ey++)}function u(f,p){let m=0,_=0,y=0,b=0,h=0;const g=p.matrixWorldInverse;for(let P=0,A=f.length;P<A;P++){const M=f[P];if(M.isDirectionalLight){const C=s.directional[m];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),m++}else if(M.isSpotLight){const C=s.spot[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(g),y++}else if(M.isRectAreaLight){const C=s.rectArea[b];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),o.identity(),a.copy(M.matrixWorld),a.premultiply(g),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){const C=s.point[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(g),_++}else if(M.isHemisphereLight){const C=s.hemi[h];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(g),h++}}}return{setup:l,setupView:u,state:s}}function td(n,e){const t=new Ty(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(p){i.push(p)}function o(p){s.push(p)}function l(p){t.setup(i,p)}function u(p){t.setupView(i,p)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Cy(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new td(n,e),t.set(r,[l])):a>=o.length?(l=new td(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ry extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Py extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iy(n,e,t){let i=new Sl;const s=new Xe,r=new Xe,a=new ft,o=new Ry({depthPacking:c0}),l=new Py,u={},f=t.maxTextureSize,p={[ui]:Yt,[Yt]:ui,[kn]:kn},m=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Ly,fragmentShader:Dy}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const y=new xn;y.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new rn(y,m),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf;let g=this.type;this.render=function(C,I,D){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||C.length===0)return;const $=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),de=n.state;de.setBlending(oi),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const fe=g!==Hn&&this.type===Hn,V=g===Hn&&this.type!==Hn;for(let j=0,Q=C.length;j<Q;j++){const ie=C[j],z=ie.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const X=z.getFrameExtents();if(s.multiply(X),r.copy(z.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/X.x),s.x=r.x*X.x,z.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/X.y),s.y=r.y*X.y,z.mapSize.y=r.y)),z.map===null||fe===!0||V===!0){const ge=this.type!==Hn?{minFilter:Vt,magFilter:Vt}:{};z.map!==null&&z.map.dispose(),z.map=new Li(s.x,s.y,ge),z.map.texture.name=ie.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ve=z.getViewportCount();for(let ge=0;ge<ve;ge++){const K=z.getViewport(ge);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),de.viewport(a),z.updateMatrices(ie,ge),i=z.getFrustum(),M(I,D,z.camera,ie,this.type)}z.isPointLightShadow!==!0&&this.type===Hn&&P(z,D),z.needsUpdate=!1}g=this.type,h.needsUpdate=!1,n.setRenderTarget($,S,L)};function P(C,I){const D=e.update(b);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,_.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Li(s.x,s.y)),m.uniforms.shadow_pass.value=C.map.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,D,m,b,null),_.uniforms.shadow_pass.value=C.mapPass.texture,_.uniforms.resolution.value=C.mapSize,_.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,D,_,b,null)}function A(C,I,D,$){let S=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const de=S.uuid,fe=I.uuid;let V=u[de];V===void 0&&(V={},u[de]=V);let j=V[fe];j===void 0&&(j=S.clone(),V[fe]=j),S=j}if(S.visible=I.visible,S.wireframe=I.wireframe,$===Hn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:p[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const de=n.properties.get(S);de.light=D}return S}function M(C,I,D,$,S){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Hn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const fe=e.update(C),V=C.material;if(Array.isArray(V)){const j=fe.groups;for(let Q=0,ie=j.length;Q<ie;Q++){const z=j[Q],X=V[z.materialIndex];if(X&&X.visible){const ve=A(C,X,$,S);n.renderBufferDirect(D,null,fe,ve,C,z)}}}else if(V.visible){const j=A(C,V,$,S);n.renderBufferDirect(D,null,fe,j,C,null)}}const de=C.children;for(let fe=0,V=de.length;fe<V;fe++)M(de[fe],I,D,$,S)}}function Uy(n,e,t){const i=t.isWebGL2;function s(){let O=!1;const Te=new ft;let te=null;const we=new ft(0,0,0,0);return{setMask:function(ye){te!==ye&&!O&&(n.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){O=ye},setClear:function(ye,Ke,nt,st,Bt){Bt===!0&&(ye*=st,Ke*=st,nt*=st),Te.set(ye,Ke,nt,st),we.equals(Te)===!1&&(n.clearColor(ye,Ke,nt,st),we.copy(Te))},reset:function(){O=!1,te=null,we.set(-1,0,0,0)}}}function r(){let O=!1,Te=null,te=null,we=null;return{setTest:function(ye){ye?Ue(n.DEPTH_TEST):Ne(n.DEPTH_TEST)},setMask:function(ye){Te!==ye&&!O&&(n.depthMask(ye),Te=ye)},setFunc:function(ye){if(te!==ye){switch(ye){case B_:n.depthFunc(n.NEVER);break;case H_:n.depthFunc(n.ALWAYS);break;case z_:n.depthFunc(n.LESS);break;case Xa:n.depthFunc(n.LEQUAL);break;case k_:n.depthFunc(n.EQUAL);break;case G_:n.depthFunc(n.GEQUAL);break;case V_:n.depthFunc(n.GREATER);break;case W_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ye}},setLocked:function(ye){O=ye},setClear:function(ye){we!==ye&&(n.clearDepth(ye),we=ye)},reset:function(){O=!1,Te=null,te=null,we=null}}}function a(){let O=!1,Te=null,te=null,we=null,ye=null,Ke=null,nt=null,st=null,Bt=null;return{setTest:function(ot){O||(ot?Ue(n.STENCIL_TEST):Ne(n.STENCIL_TEST))},setMask:function(ot){Te!==ot&&!O&&(n.stencilMask(ot),Te=ot)},setFunc:function(ot,Xt,Ct){(te!==ot||we!==Xt||ye!==Ct)&&(n.stencilFunc(ot,Xt,Ct),te=ot,we=Xt,ye=Ct)},setOp:function(ot,Xt,Ct){(Ke!==ot||nt!==Xt||st!==Ct)&&(n.stencilOp(ot,Xt,Ct),Ke=ot,nt=Xt,st=Ct)},setLocked:function(ot){O=ot},setClear:function(ot){Bt!==ot&&(n.clearStencil(ot),Bt=ot)},reset:function(){O=!1,Te=null,te=null,we=null,ye=null,Ke=null,nt=null,st=null,Bt=null}}}const o=new s,l=new r,u=new a,f=new WeakMap,p=new WeakMap;let m={},_={},y=new WeakMap,b=[],h=null,g=!1,P=null,A=null,M=null,C=null,I=null,D=null,$=null,S=!1,L=null,de=null,fe=null,V=null,j=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,z=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),ie=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ie=z>=2);let ve=null,ge={};const K=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),Se=new ft().fromArray(K),Pe=new ft().fromArray(ee);function Ce(O,Te,te,we){const ye=new Uint8Array(4),Ke=n.createTexture();n.bindTexture(O,Ke),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<te;nt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Te+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return Ke}const Le={};Le[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(Xa),q(!1),me(Hc),Ue(n.CULL_FACE),H(oi);function Ue(O){m[O]!==!0&&(n.enable(O),m[O]=!0)}function Ne(O){m[O]!==!1&&(n.disable(O),m[O]=!1)}function Ge(O,Te){return _[O]!==Te?(n.bindFramebuffer(O,Te),_[O]=Te,i&&(O===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=Te),O===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function rt(O,Te){let te=b,we=!1;if(O)if(te=y.get(Te),te===void 0&&(te=[],y.set(Te,te)),O.isWebGLMultipleRenderTargets){const ye=O.texture;if(te.length!==ye.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ke=0,nt=ye.length;Ke<nt;Ke++)te[Ke]=n.COLOR_ATTACHMENT0+Ke;te.length=ye.length,we=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,we=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,we=!0);we&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ve(O){return h!==O?(n.useProgram(O),h=O,!0):!1}const x={[os]:n.FUNC_ADD,[T_]:n.FUNC_SUBTRACT,[C_]:n.FUNC_REVERSE_SUBTRACT};if(i)x[Vc]=n.MIN,x[Wc]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(x[Vc]=O.MIN_EXT,x[Wc]=O.MAX_EXT)}const N={[R_]:n.ZERO,[P_]:n.ONE,[L_]:n.SRC_COLOR,[wf]:n.SRC_ALPHA,[F_]:n.SRC_ALPHA_SATURATE,[N_]:n.DST_COLOR,[I_]:n.DST_ALPHA,[D_]:n.ONE_MINUS_SRC_COLOR,[bf]:n.ONE_MINUS_SRC_ALPHA,[O_]:n.ONE_MINUS_DST_COLOR,[U_]:n.ONE_MINUS_DST_ALPHA};function H(O,Te,te,we,ye,Ke,nt,st){if(O===oi){g===!0&&(Ne(n.BLEND),g=!1);return}if(g===!1&&(Ue(n.BLEND),g=!0),O!==S_){if(O!==P||st!==S){if((A!==os||I!==os)&&(n.blendEquation(n.FUNC_ADD),A=os,I=os),st)switch(O){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.ONE,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,C=null,D=null,$=null,P=O,S=st}return}ye=ye||Te,Ke=Ke||te,nt=nt||we,(Te!==A||ye!==I)&&(n.blendEquationSeparate(x[Te],x[ye]),A=Te,I=ye),(te!==M||we!==C||Ke!==D||nt!==$)&&(n.blendFuncSeparate(N[te],N[we],N[Ke],N[nt]),M=te,C=we,D=Ke,$=nt),P=O,S=!1}function Z(O,Te){O.side===kn?Ne(n.CULL_FACE):Ue(n.CULL_FACE);let te=O.side===Yt;Te&&(te=!te),q(te),O.blending===ps&&O.transparent===!1?H(oi):H(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const we=O.stencilWrite;u.setTest(we),we&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),J(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function me(O){O!==M_?(Ue(n.CULL_FACE),O!==de&&(O===Hc?n.cullFace(n.BACK):O===A_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ne(n.CULL_FACE),de=O}function _e(O){O!==fe&&(ie&&n.lineWidth(O),fe=O)}function J(O,Te,te){O?(Ue(n.POLYGON_OFFSET_FILL),(V!==Te||j!==te)&&(n.polygonOffset(Te,te),V=Te,j=te)):Ne(n.POLYGON_OFFSET_FILL)}function ce(O){O?Ue(n.SCISSOR_TEST):Ne(n.SCISSOR_TEST)}function he(O){O===void 0&&(O=n.TEXTURE0+Q-1),ve!==O&&(n.activeTexture(O),ve=O)}function Ae(O,Te,te){te===void 0&&(ve===null?te=n.TEXTURE0+Q-1:te=ve);let we=ge[te];we===void 0&&(we={type:void 0,texture:void 0},ge[te]=we),(we.type!==O||we.texture!==Te)&&(ve!==te&&(n.activeTexture(te),ve=te),n.bindTexture(O,Te||Le[O]),we.type=O,we.texture=Te)}function E(){const O=ge[ve];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function k(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(O){Se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function xe(O){Pe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Pe.copy(O))}function Me(O,Te){let te=p.get(Te);te===void 0&&(te=new WeakMap,p.set(Te,te));let we=te.get(O);we===void 0&&(we=n.getUniformBlockIndex(Te,O.name),te.set(O,we))}function ze(O,Te){const we=p.get(Te).get(O);f.get(Te)!==we&&(n.uniformBlockBinding(Te,we,O.__bindingPointIndex),f.set(Te,we))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ve=null,ge={},_={},y=new WeakMap,b=[],h=null,g=!1,P=null,A=null,M=null,C=null,I=null,D=null,$=null,S=!1,L=null,de=null,fe=null,V=null,j=null,Se.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ue,disable:Ne,bindFramebuffer:Ge,drawBuffers:rt,useProgram:Ve,setBlending:H,setMaterial:Z,setFlipSided:q,setCullFace:me,setLineWidth:_e,setPolygonOffset:J,setScissorTest:ce,activeTexture:he,bindTexture:Ae,unbindTexture:E,compressedTexImage2D:w,compressedTexImage3D:F,texImage2D:U,texImage3D:ue,updateUBOMapping:Me,uniformBlockBinding:ze,texStorage2D:pe,texStorage3D:k,texSubImage2D:G,texSubImage3D:se,compressedTexSubImage2D:le,compressedTexSubImage3D:Ee,scissor:be,viewport:xe,reset:Ye}}function Ny(n,e,t,i,s,r,a){const o=s.isWebGL2,l=s.maxTextures,u=s.maxCubemapSize,f=s.maxTextureSize,p=s.maxSamples,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let b;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(E,w){return g?new OffscreenCanvas(E,w):ur("canvas")}function A(E,w,F,G){let se=1;if((E.width>G||E.height>G)&&(se=G/Math.max(E.width,E.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=w?vo:Math.floor,Ee=le(se*E.width),pe=le(se*E.height);b===void 0&&(b=P(Ee,pe));const k=F?P(Ee,pe):b;return k.width=Ee,k.height=pe,k.getContext("2d").drawImage(E,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+pe+")."),k}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return Qa(E.width)&&Qa(E.height)}function C(E){return o?!1:E.wrapS!==pn||E.wrapT!==pn||E.minFilter!==Vt&&E.minFilter!==sn}function I(E,w){return E.generateMipmaps&&w&&E.minFilter!==Vt&&E.minFilter!==sn}function D(E){n.generateMipmap(E)}function $(E,w,F,G,se=!1){if(o===!1)return w;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=w;return w===n.RED&&(F===n.FLOAT&&(le=n.R32F),F===n.HALF_FLOAT&&(le=n.R16F),F===n.UNSIGNED_BYTE&&(le=n.R8)),w===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(le=n.R8UI),F===n.UNSIGNED_SHORT&&(le=n.R16UI),F===n.UNSIGNED_INT&&(le=n.R32UI),F===n.BYTE&&(le=n.R8I),F===n.SHORT&&(le=n.R16I),F===n.INT&&(le=n.R32I)),w===n.RG&&(F===n.FLOAT&&(le=n.RG32F),F===n.HALF_FLOAT&&(le=n.RG16F),F===n.UNSIGNED_BYTE&&(le=n.RG8)),w===n.RGBA&&(F===n.FLOAT&&(le=n.RGBA32F),F===n.HALF_FLOAT&&(le=n.RGBA16F),F===n.UNSIGNED_BYTE&&(le=G===dt&&se===!1?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)),(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function S(E,w,F){return I(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function L(E){return E===Vt||E===Xc||E===$o?n.NEAREST:n.LINEAR}function de(E){const w=E.target;w.removeEventListener("dispose",de),V(w),w.isVideoTexture&&y.delete(w)}function fe(E){const w=E.target;w.removeEventListener("dispose",fe),Q(w)}function V(E){const w=i.get(E);if(w.__webglInit===void 0)return;const F=E.source,G=h.get(F);if(G){const se=G[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&j(E),Object.keys(G).length===0&&h.delete(F)}i.remove(E)}function j(E){const w=i.get(E);n.deleteTexture(w.__webglTexture);const F=E.source,G=h.get(F);delete G[w.__cacheKey],a.memory.textures--}function Q(E){const w=E.texture,F=i.get(E),G=i.get(w);if(G.__webglTexture!==void 0&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(F.__webglFramebuffer[se]))for(let le=0;le<F.__webglFramebuffer[se].length;le++)n.deleteFramebuffer(F.__webglFramebuffer[se][le]);else n.deleteFramebuffer(F.__webglFramebuffer[se]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[se])}else{if(Array.isArray(F.__webglFramebuffer))for(let se=0;se<F.__webglFramebuffer.length;se++)n.deleteFramebuffer(F.__webglFramebuffer[se]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let se=0;se<F.__webglColorRenderbuffer.length;se++)F.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[se]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let se=0,le=w.length;se<le;se++){const Ee=i.get(w[se]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(w[se])}i.remove(w),i.remove(E)}let ie=0;function z(){ie=0}function X(){const E=ie;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),ie+=1,E}function ve(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function ge(E,w){const F=i.get(E);if(E.isVideoTexture&&he(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(F,E,w);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+w)}function K(E,w){const F=i.get(E);if(E.version>0&&F.__version!==E.version){Ge(F,E,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+w)}function ee(E,w){const F=i.get(E);if(E.version>0&&F.__version!==E.version){Ge(F,E,w);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+w)}function Se(E,w){const F=i.get(E);if(E.version>0&&F.__version!==E.version){rt(F,E,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+w)}const Pe={[Ya]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},Ce={[Vt]:n.NEAREST,[Xc]:n.NEAREST_MIPMAP_NEAREST,[$o]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[J_]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},Le={[f0]:n.NEVER,[x0]:n.ALWAYS,[h0]:n.LESS,[m0]:n.LEQUAL,[p0]:n.EQUAL,[v0]:n.GEQUAL,[g0]:n.GREATER,[_0]:n.NOTEQUAL};function Ue(E,w,F){if(F?(n.texParameteri(E,n.TEXTURE_WRAP_S,Pe[w.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Pe[w.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Pe[w.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Ce[w.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Ce[w.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==pn||w.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,L(w.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,L(w.minFilter)),w.minFilter!==Vt&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Vt||w.minFilter!==$o&&w.minFilter!==ar||w.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===lr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ne(E,w){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",de));const G=w.source;let se=h.get(G);se===void 0&&(se={},h.set(G,se));const le=ve(w);if(le!==E.__cacheKey){se[le]===void 0&&(se[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),se[le].usedTimes++;const Ee=se[E.__cacheKey];Ee!==void 0&&(se[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&j(w)),E.__cacheKey=le,E.__webglTexture=se[le].texture}return F}function Ge(E,w,F){let G=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(G=n.TEXTURE_3D);const se=Ne(E,w),le=w.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+F);const Ee=i.get(le);if(le.version!==Ee.__version||se===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const pe=C(w)&&M(w.image)===!1;let k=A(w.image,pe,!1,f);k=Ae(w,k);const U=M(k)||o,ue=r.convert(w.format,w.colorSpace);let be=r.convert(w.type),xe=$(w.internalFormat,ue,be,w.colorSpace,w.isVideoTexture);Ue(G,w,U);let Me;const ze=w.mipmaps,Ye=o&&w.isVideoTexture!==!0,O=Ee.__version===void 0||se===!0,Te=S(w,k,U);if(w.isDepthTexture)xe=n.DEPTH_COMPONENT,o?w.type===ii?xe=n.DEPTH_COMPONENT32F:w.type===ni?xe=n.DEPTH_COMPONENT24:w.type===Si?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:w.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ti&&xe===n.DEPTH_COMPONENT&&w.type!==Ml&&w.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ni,be=r.convert(w.type)),w.format===ys&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,w.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Si,be=r.convert(w.type))),O&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,xe,k.width,k.height):t.texImage2D(n.TEXTURE_2D,0,xe,k.width,k.height,0,ue,be,null));else if(w.isDataTexture)if(ze.length>0&&U){Ye&&O&&t.texStorage2D(n.TEXTURE_2D,Te,xe,ze[0].width,ze[0].height);for(let te=0,we=ze.length;te<we;te++)Me=ze[te],Ye?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,ue,be,Me.data):t.texImage2D(n.TEXTURE_2D,te,xe,Me.width,Me.height,0,ue,be,Me.data);w.generateMipmaps=!1}else Ye?(O&&t.texStorage2D(n.TEXTURE_2D,Te,xe,k.width,k.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,k.width,k.height,ue,be,k.data)):t.texImage2D(n.TEXTURE_2D,0,xe,k.width,k.height,0,ue,be,k.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,xe,ze[0].width,ze[0].height,k.depth);for(let te=0,we=ze.length;te<we;te++)Me=ze[te],w.format!==mn?ue!==null?Ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,k.depth,ue,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,xe,Me.width,Me.height,k.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,k.depth,ue,be,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,xe,Me.width,Me.height,k.depth,0,ue,be,Me.data)}else{Ye&&O&&t.texStorage2D(n.TEXTURE_2D,Te,xe,ze[0].width,ze[0].height);for(let te=0,we=ze.length;te<we;te++)Me=ze[te],w.format!==mn?ue!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,ue,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,ue,be,Me.data):t.texImage2D(n.TEXTURE_2D,te,xe,Me.width,Me.height,0,ue,be,Me.data)}else if(w.isDataArrayTexture)Ye?(O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,xe,k.width,k.height,k.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,ue,be,k.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,k.width,k.height,k.depth,0,ue,be,k.data);else if(w.isData3DTexture)Ye?(O&&t.texStorage3D(n.TEXTURE_3D,Te,xe,k.width,k.height,k.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,ue,be,k.data)):t.texImage3D(n.TEXTURE_3D,0,xe,k.width,k.height,k.depth,0,ue,be,k.data);else if(w.isFramebufferTexture){if(O)if(Ye)t.texStorage2D(n.TEXTURE_2D,Te,xe,k.width,k.height);else{let te=k.width,we=k.height;for(let ye=0;ye<Te;ye++)t.texImage2D(n.TEXTURE_2D,ye,xe,te,we,0,ue,be,null),te>>=1,we>>=1}}else if(ze.length>0&&U){Ye&&O&&t.texStorage2D(n.TEXTURE_2D,Te,xe,ze[0].width,ze[0].height);for(let te=0,we=ze.length;te<we;te++)Me=ze[te],Ye?t.texSubImage2D(n.TEXTURE_2D,te,0,0,ue,be,Me):t.texImage2D(n.TEXTURE_2D,te,xe,ue,be,Me);w.generateMipmaps=!1}else Ye?(O&&t.texStorage2D(n.TEXTURE_2D,Te,xe,k.width,k.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,be,k)):t.texImage2D(n.TEXTURE_2D,0,xe,ue,be,k);I(w,U)&&D(G),Ee.__version=le.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function rt(E,w,F){if(w.image.length!==6)return;const G=Ne(E,w),se=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const le=i.get(se);if(se.version!==le.__version||G===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,k=[];for(let te=0;te<6;te++)!Ee&&!pe?k[te]=A(w.image[te],!1,!0,u):k[te]=pe?w.image[te].image:w.image[te],k[te]=Ae(w,k[te]);const U=k[0],ue=M(U)||o,be=r.convert(w.format,w.colorSpace),xe=r.convert(w.type),Me=$(w.internalFormat,be,xe,w.colorSpace),ze=o&&w.isVideoTexture!==!0,Ye=le.__version===void 0||G===!0;let O=S(w,U,ue);Ue(n.TEXTURE_CUBE_MAP,w,ue);let Te;if(Ee){ze&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Me,U.width,U.height);for(let te=0;te<6;te++){Te=k[te].mipmaps;for(let we=0;we<Te.length;we++){const ye=Te[we];w.format!==mn?be!==null?ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,ye.width,ye.height,be,xe,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Me,ye.width,ye.height,0,be,xe,ye.data)}}}else{Te=w.mipmaps,ze&&Ye&&(Te.length>0&&O++,t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Me,k[0].width,k[0].height));for(let te=0;te<6;te++)if(pe){ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,k[te].width,k[te].height,be,xe,k[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Me,k[te].width,k[te].height,0,be,xe,k[te].data);for(let we=0;we<Te.length;we++){const Ke=Te[we].image[te].image;ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Ke.width,Ke.height,be,xe,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Me,Ke.width,Ke.height,0,be,xe,Ke.data)}}else{ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be,xe,k[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Me,be,xe,k[te]);for(let we=0;we<Te.length;we++){const ye=Te[we];ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,be,xe,ye.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Me,be,xe,ye.image[te])}}}I(w,ue)&&D(n.TEXTURE_CUBE_MAP),le.__version=se.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function Ve(E,w,F,G,se,le){const Ee=r.convert(F.format,F.colorSpace),pe=r.convert(F.type),k=$(F.internalFormat,Ee,pe,F.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>le),be=Math.max(1,w.height>>le);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,le,k,ue,be,w.depth,0,Ee,pe,null):t.texImage2D(se,le,k,ue,be,0,Ee,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ce(w)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,se,i.get(F).__webglTexture,0,J(w)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,se,i.get(F).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function x(E,w,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),w.depthBuffer&&!w.stencilBuffer){let G=n.DEPTH_COMPONENT16;if(F||ce(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===ii?G=n.DEPTH_COMPONENT32F:se.type===ni&&(G=n.DEPTH_COMPONENT24));const le=J(w);ce(w)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,G,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,G,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,G,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(w.depthBuffer&&w.stencilBuffer){const G=J(w);F&&ce(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,w.width,w.height):ce(w)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<G.length;se++){const le=G[se],Ee=r.convert(le.format,le.colorSpace),pe=r.convert(le.type),k=$(le.internalFormat,Ee,pe,le.colorSpace),U=J(w);F&&ce(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,U,k,w.width,w.height):ce(w)?m.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U,k,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,k,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ge(w.depthTexture,0);const G=i.get(w.depthTexture).__webglTexture,se=J(w);if(w.depthTexture.format===Ti)ce(w)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(w.depthTexture.format===ys)ce(w)?m.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function H(E){const w=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");N(w.__webglFramebuffer,E)}else if(F){w.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[G]),w.__webglDepthbuffer[G]=n.createRenderbuffer(),x(w.__webglDepthbuffer[G],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),x(w.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(E,w,F){const G=i.get(E);w!==void 0&&Ve(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&H(E)}function q(E){const w=E.texture,F=i.get(E),G=i.get(w);E.addEventListener("dispose",fe),E.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=w.version,a.memory.textures++);const se=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,Ee=M(E)||o;if(se){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let k=0;k<w.mipmaps.length;k++)F.__webglFramebuffer[pe][k]=n.createFramebuffer()}else F.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)F.__webglFramebuffer[pe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(le)if(s.drawBuffers){const pe=E.texture;for(let k=0,U=pe.length;k<U;k++){const ue=i.get(pe[k]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ce(E)===!1){const pe=le?w:[w];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let k=0;k<pe.length;k++){const U=pe[k];F.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[k]);const ue=r.convert(U.format,U.colorSpace),be=r.convert(U.type),xe=$(U.internalFormat,ue,be,U.colorSpace,E.isXRRenderTarget===!0),Me=J(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,xe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,F.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),x(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,w,Ee);for(let pe=0;pe<6;pe++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let k=0;k<w.mipmaps.length;k++)Ve(F.__webglFramebuffer[pe][k],E,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,k);else Ve(F.__webglFramebuffer[pe],E,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);I(w,Ee)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const pe=E.texture;for(let k=0,U=pe.length;k<U;k++){const ue=pe[k],be=i.get(ue);t.bindTexture(n.TEXTURE_2D,be.__webglTexture),Ue(n.TEXTURE_2D,ue,Ee),Ve(F.__webglFramebuffer,E,ue,n.COLOR_ATTACHMENT0+k,n.TEXTURE_2D,0),I(ue,Ee)&&D(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,G.__webglTexture),Ue(pe,w,Ee),o&&w.mipmaps&&w.mipmaps.length>0)for(let k=0;k<w.mipmaps.length;k++)Ve(F.__webglFramebuffer[k],E,w,n.COLOR_ATTACHMENT0,pe,k);else Ve(F.__webglFramebuffer,E,w,n.COLOR_ATTACHMENT0,pe,0);I(w,Ee)&&D(pe),t.unbindTexture()}E.depthBuffer&&H(E)}function me(E){const w=M(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let G=0,se=F.length;G<se;G++){const le=F[G];if(I(le,w)){const Ee=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(le).__webglTexture;t.bindTexture(Ee,pe),D(Ee),t.unbindTexture()}}}function _e(E){if(o&&E.samples>0&&ce(E)===!1){const w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,G=E.height;let se=n.COLOR_BUFFER_BIT;const le=[],Ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),k=E.isWebGLMultipleRenderTargets===!0;if(k)for(let U=0;U<w.length;U++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let U=0;U<w.length;U++){le.push(n.COLOR_ATTACHMENT0+U),E.depthBuffer&&le.push(Ee);const ue=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ue===!1&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),k&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[U]),ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),k){const be=i.get(w[U]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,se,n.NEAREST),_&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let U=0;U<w.length;U++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,pe.__webglColorRenderbuffer[U]);const ue=i.get(w[U]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function J(E){return Math.min(p,E.samples)}function ce(E){const w=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function he(E){const w=a.render.frame;y.get(E)!==w&&(y.set(E,w),E.update())}function Ae(E,w){const F=E.colorSpace,G=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Za||F!==Rn&&F!==Ri&&(F===dt||F===Lo?o===!1?e.has("EXT_sRGB")===!0&&G===mn?(E.format=Za,E.minFilter=sn,E.generateMipmaps=!1):w=Df.sRGBToLinear(w):(G!==mn||se!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=ge,this.setTexture2DArray=K,this.setTexture3D=ee,this.setTextureCube=Se,this.rebindTextures=Z,this.setupRenderTarget=q,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=ce}const Oy=0,Mt=1;function Fy(n,e,t){const i=t.isWebGL2;function s(r,a=Ri){let o;const l=a===dt||a===Lo?Mt:Oy;if(r===li)return n.UNSIGNED_BYTE;if(r===Af)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ef)return n.UNSIGNED_SHORT_5_5_5_1;if(r===$_)return n.BYTE;if(r===e0)return n.SHORT;if(r===Ml)return n.UNSIGNED_SHORT;if(r===Mf)return n.INT;if(r===ni)return n.UNSIGNED_INT;if(r===ii)return n.FLOAT;if(r===lr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===t0)return n.ALPHA;if(r===mn)return n.RGBA;if(r===n0)return n.LUMINANCE;if(r===i0)return n.LUMINANCE_ALPHA;if(r===Ti)return n.DEPTH_COMPONENT;if(r===ys)return n.DEPTH_STENCIL;if(r===Za)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===s0)return n.RED;if(r===Sf)return n.RED_INTEGER;if(r===r0)return n.RG;if(r===Tf)return n.RG_INTEGER;if(r===Cf)return n.RGBA_INTEGER;if(r===ea||r===ta||r===na||r===ia)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ea)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ea)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===na)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jc||r===qc||r===Yc||r===Kc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===o0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zc||r===Qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Zc)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Qc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jc||r===$c||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===lu||r===cu||r===uu||r===du)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Jc)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$c)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===iu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===su)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ru)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ou)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===au)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uu)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===du)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sa||r===fu||r===hu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===sa)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===a0||r===pu||r===mu||r===gu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===sa)return o.COMPRESSED_RED_RGTC1_EXT;if(r===pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Si?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class By extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ys extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hy={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const h=t.getJointPose(b,i),g=this._getHandJoint(u,b);h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=h.radius),g.visible=h!==null}const f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],m=f.position.distanceTo(p.position),_=.02,y=.005;u.inputState.pinching&&m>_+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=_-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zy extends Kt{constructor(e,t,i,s,r,a,o,l,u,f){if(f=f!==void 0?f:Ti,f!==Ti&&f!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ti&&(i=ni),i===void 0&&f===ys&&(i=Si),super(null,s,r,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ky extends Ui{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,f=null,p=null,m=null,_=null,y=null;const b=t.getContextAttributes();let h=null,g=null;const P=[],A=[],M=new $t;M.layers.enable(1),M.viewport=new ft;const C=new $t;C.layers.enable(2),C.viewport=new ft;const I=[M,C],D=new By;D.layers.enable(1),D.layers.enable(2);let $=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=P[K];return ee===void 0&&(ee=new Sa,P[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=P[K];return ee===void 0&&(ee=new Sa,P[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=P[K];return ee===void 0&&(ee=new Sa,P[K]=ee),ee.getHandSpace()};function L(K){const ee=A.indexOf(K.inputSource);if(ee===-1)return;const Se=P[ee];Se!==void 0&&(Se.update(K.inputSource,K.frame,u||a),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function de(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",fe);for(let K=0;K<P.length;K++){const ee=A[K];ee!==null&&(A[K]=null,P[K].disconnect(ee))}$=null,S=null,e.setRenderTarget(h),_=null,m=null,p=null,s=null,g=null,ge.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",de),s.addEventListener("inputsourceschange",fe),b.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:_}),g=new Li(_.framebufferWidth,_.framebufferHeight,{format:mn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let ee=null,Se=null,Pe=null;b.depth&&(Pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=b.stencil?ys:Ti,Se=b.stencil?Si:ni);const Ce={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};p=new XRWebGLBinding(s,t),m=p.createProjectionLayer(Ce),s.updateRenderState({layers:[m]}),g=new Li(m.textureWidth,m.textureHeight,{format:mn,type:li,depthTexture:new zy(m.textureWidth,m.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Le=e.properties.get(g);Le.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function fe(K){for(let ee=0;ee<K.removed.length;ee++){const Se=K.removed[ee],Pe=A.indexOf(Se);Pe>=0&&(A[Pe]=null,P[Pe].disconnect(Se))}for(let ee=0;ee<K.added.length;ee++){const Se=K.added[ee];let Pe=A.indexOf(Se);if(Pe===-1){for(let Le=0;Le<P.length;Le++)if(Le>=A.length){A.push(Se),Pe=Le;break}else if(A[Le]===null){A[Le]=Se,Pe=Le;break}if(Pe===-1)break}const Ce=P[Pe];Ce&&Ce.connect(Se)}}const V=new B,j=new B;function Q(K,ee,Se){V.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const Pe=V.distanceTo(j),Ce=ee.projectionMatrix.elements,Le=Se.projectionMatrix.elements,Ue=Ce[14]/(Ce[10]-1),Ne=Ce[14]/(Ce[10]+1),Ge=(Ce[9]+1)/Ce[5],rt=(Ce[9]-1)/Ce[5],Ve=(Ce[8]-1)/Ce[0],x=(Le[8]+1)/Le[0],N=Ue*Ve,H=Ue*x,Z=Pe/(-Ve+x),q=Z*-Ve;ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(q),K.translateZ(Z),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const me=Ue+Z,_e=Ne+Z,J=N-q,ce=H+(Pe-q),he=Ge*Ne/_e*me,Ae=rt*Ne/_e*me;K.projectionMatrix.makePerspective(J,ce,he,Ae,me,_e),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function ie(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;D.near=C.near=M.near=K.near,D.far=C.far=M.far=K.far,($!==D.near||S!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),$=D.near,S=D.far);const ee=K.parent,Se=D.cameras;ie(D,ee);for(let Pe=0;Pe<Se.length;Pe++)ie(Se[Pe],ee);Se.length===2?Q(D,M,C):D.projectionMatrix.copy(M.projectionMatrix),z(K,D,ee)};function z(K,ee,Se){Se===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(m===null&&_===null))return l},this.setFoveation=function(K){l=K,m!==null&&(m.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)};let X=null;function ve(K,ee){if(f=ee.getViewerPose(u||a),y=ee,f!==null){const Se=f.views;_!==null&&(e.setRenderTargetFramebuffer(g,_.framebuffer),e.setRenderTarget(g));let Pe=!1;Se.length!==D.cameras.length&&(D.cameras.length=0,Pe=!0);for(let Ce=0;Ce<Se.length;Ce++){const Le=Se[Ce];let Ue=null;if(_!==null)Ue=_.getViewport(Le);else{const Ge=p.getViewSubImage(m,Le);Ue=Ge.viewport,Ce===0&&(e.setRenderTargetTextures(g,Ge.colorTexture,m.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(g))}let Ne=I[Ce];Ne===void 0&&(Ne=new $t,Ne.layers.enable(Ce),Ne.viewport=new ft,I[Ce]=Ne),Ne.matrix.fromArray(Le.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Le.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ce===0&&(D.matrix.copy(Ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pe===!0&&D.cameras.push(Ne)}}for(let Se=0;Se<P.length;Se++){const Pe=A[Se],Ce=P[Se];Pe!==null&&Ce!==void 0&&Ce.update(Pe,ee,u||a)}X&&X(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),y=null}const ge=new Gf;ge.setAnimationLoop(ve),this.setAnimationLoop=function(K){X=K},this.dispose=function(){}}}function Gy(n,e){function t(h,g){h.matrixAutoUpdate===!0&&h.updateMatrix(),g.value.copy(h.matrix)}function i(h,g){g.color.getRGB(h.fogColor.value,Hf(n)),g.isFog?(h.fogNear.value=g.near,h.fogFar.value=g.far):g.isFogExp2&&(h.fogDensity.value=g.density)}function s(h,g,P,A,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(h,g):g.isMeshToonMaterial?(r(h,g),p(h,g)):g.isMeshPhongMaterial?(r(h,g),f(h,g)):g.isMeshStandardMaterial?(r(h,g),m(h,g),g.isMeshPhysicalMaterial&&_(h,g,M)):g.isMeshMatcapMaterial?(r(h,g),y(h,g)):g.isMeshDepthMaterial?r(h,g):g.isMeshDistanceMaterial?(r(h,g),b(h,g)):g.isMeshNormalMaterial?r(h,g):g.isLineBasicMaterial?(a(h,g),g.isLineDashedMaterial&&o(h,g)):g.isPointsMaterial?l(h,g,P,A):g.isSpriteMaterial?u(h,g):g.isShadowMaterial?(h.color.value.copy(g.color),h.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(h,g){h.opacity.value=g.opacity,g.color&&h.diffuse.value.copy(g.color),g.emissive&&h.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(h.map.value=g.map,t(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,t(g.alphaMap,h.alphaMapTransform)),g.bumpMap&&(h.bumpMap.value=g.bumpMap,t(g.bumpMap,h.bumpMapTransform),h.bumpScale.value=g.bumpScale,g.side===Yt&&(h.bumpScale.value*=-1)),g.normalMap&&(h.normalMap.value=g.normalMap,t(g.normalMap,h.normalMapTransform),h.normalScale.value.copy(g.normalScale),g.side===Yt&&h.normalScale.value.negate()),g.displacementMap&&(h.displacementMap.value=g.displacementMap,t(g.displacementMap,h.displacementMapTransform),h.displacementScale.value=g.displacementScale,h.displacementBias.value=g.displacementBias),g.emissiveMap&&(h.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,h.emissiveMapTransform)),g.specularMap&&(h.specularMap.value=g.specularMap,t(g.specularMap,h.specularMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest);const P=e.get(g).envMap;if(P&&(h.envMap.value=P,h.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=g.reflectivity,h.ior.value=g.ior,h.refractionRatio.value=g.refractionRatio),g.lightMap){h.lightMap.value=g.lightMap;const A=n._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=g.lightMapIntensity*A,t(g.lightMap,h.lightMapTransform)}g.aoMap&&(h.aoMap.value=g.aoMap,h.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,h.aoMapTransform))}function a(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,g.map&&(h.map.value=g.map,t(g.map,h.mapTransform))}function o(h,g){h.dashSize.value=g.dashSize,h.totalSize.value=g.dashSize+g.gapSize,h.scale.value=g.scale}function l(h,g,P,A){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.size.value=g.size*P,h.scale.value=A*.5,g.map&&(h.map.value=g.map,t(g.map,h.uvTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,t(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function u(h,g){h.diffuse.value.copy(g.color),h.opacity.value=g.opacity,h.rotation.value=g.rotation,g.map&&(h.map.value=g.map,t(g.map,h.mapTransform)),g.alphaMap&&(h.alphaMap.value=g.alphaMap,t(g.alphaMap,h.alphaMapTransform)),g.alphaTest>0&&(h.alphaTest.value=g.alphaTest)}function f(h,g){h.specular.value.copy(g.specular),h.shininess.value=Math.max(g.shininess,1e-4)}function p(h,g){g.gradientMap&&(h.gradientMap.value=g.gradientMap)}function m(h,g){h.metalness.value=g.metalness,g.metalnessMap&&(h.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,h.metalnessMapTransform)),h.roughness.value=g.roughness,g.roughnessMap&&(h.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,h.roughnessMapTransform)),e.get(g).envMap&&(h.envMapIntensity.value=g.envMapIntensity)}function _(h,g,P){h.ior.value=g.ior,g.sheen>0&&(h.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),h.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(h.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,h.sheenColorMapTransform)),g.sheenRoughnessMap&&(h.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,h.sheenRoughnessMapTransform))),g.clearcoat>0&&(h.clearcoat.value=g.clearcoat,h.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(h.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,h.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(h.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yt&&h.clearcoatNormalScale.value.negate())),g.iridescence>0&&(h.iridescence.value=g.iridescence,h.iridescenceIOR.value=g.iridescenceIOR,h.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(h.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,h.iridescenceMapTransform)),g.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),g.transmission>0&&(h.transmission.value=g.transmission,h.transmissionSamplerMap.value=P.texture,h.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(h.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,h.transmissionMapTransform)),h.thickness.value=g.thickness,g.thicknessMap&&(h.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=g.attenuationDistance,h.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(h.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(h.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=g.specularIntensity,h.specularColor.value.copy(g.specularColor),g.specularColorMap&&(h.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,h.specularColorMapTransform)),g.specularIntensityMap&&(h.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,h.specularIntensityMapTransform))}function y(h,g){g.matcap&&(h.matcap.value=g.matcap)}function b(h,g){const P=e.get(g).light;h.referencePosition.value.setFromMatrixPosition(P.matrixWorld),h.nearDistance.value=P.shadow.camera.near,h.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Vy(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(P,A){const M=A.program;i.uniformBlockBinding(P,M)}function u(P,A){let M=s[P.id];M===void 0&&(y(P),M=f(P),s[P.id]=M,P.addEventListener("dispose",h));const C=A.program;i.updateUBOMapping(P,C);const I=e.render.frame;r[P.id]!==I&&(m(P),r[P.id]=I)}function f(P){const A=p();P.__bindingPointIndex=A;const M=n.createBuffer(),C=P.__size,I=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function p(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const A=s[P.id],M=P.uniforms,C=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let I=0,D=M.length;I<D;I++){const $=M[I];if(_($,I,C)===!0){const S=$.__offset,L=Array.isArray($.value)?$.value:[$.value];let de=0;for(let fe=0;fe<L.length;fe++){const V=L[fe],j=b(V);typeof V=="number"?($.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,S+de,$.__data)):V.isMatrix3?($.__data[0]=V.elements[0],$.__data[1]=V.elements[1],$.__data[2]=V.elements[2],$.__data[3]=V.elements[0],$.__data[4]=V.elements[3],$.__data[5]=V.elements[4],$.__data[6]=V.elements[5],$.__data[7]=V.elements[0],$.__data[8]=V.elements[6],$.__data[9]=V.elements[7],$.__data[10]=V.elements[8],$.__data[11]=V.elements[0]):(V.toArray($.__data,de),de+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,$.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(P,A,M){const C=P.value;if(M[A]===void 0){if(typeof C=="number")M[A]=C;else{const I=Array.isArray(C)?C:[C],D=[];for(let $=0;$<I.length;$++)D.push(I[$].clone());M[A]=D}return!0}else if(typeof C=="number"){if(M[A]!==C)return M[A]=C,!0}else{const I=Array.isArray(M[A])?M[A]:[M[A]],D=Array.isArray(C)?C:[C];for(let $=0;$<I.length;$++){const S=I[$];if(S.equals(D[$])===!1)return S.copy(D[$]),!0}}return!1}function y(P){const A=P.uniforms;let M=0;const C=16;let I=0;for(let D=0,$=A.length;D<$;D++){const S=A[D],L={boundary:0,storage:0},de=Array.isArray(S.value)?S.value:[S.value];for(let fe=0,V=de.length;fe<V;fe++){const j=de[fe],Q=b(j);L.boundary+=Q.boundary,L.storage+=Q.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,D>0){I=M%C;const fe=C-I;I!==0&&fe-L.boundary<0&&(M+=C-I,S.__offset=M)}M+=L.storage}return I=M%C,I>0&&(M+=C-I),P.__size=M,P.__cache={},this}function b(P){const A={boundary:0,storage:0};return typeof P=="number"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),A}function h(P){const A=P.target;A.removeEventListener("dispose",h);const M=a.indexOf(A.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function g(){for(const P in s)n.deleteBuffer(s[P]);a=[],s={},r={}}return{bind:l,update:u,dispose:g}}class qf{constructor(e={}){const{canvas:t=N0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;i!==null?m=i.getContextAttributes().alpha:m=a;const _=new Uint32Array(4),y=new Int32Array(4);let b=null,h=null;const g=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const A=this;let M=!1,C=0,I=0,D=null,$=-1,S=null;const L=new ft,de=new ft;let fe=null;const V=new tt(0);let j=0,Q=t.width,ie=t.height,z=1,X=null,ve=null;const ge=new ft(0,0,Q,ie),K=new ft(0,0,Q,ie);let ee=!1;const Se=new Sl;let Pe=!1,Ce=!1,Le=null;const Ue=new _t,Ne=new Xe,Ge=new B,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return D===null?z:1}let x=i;function N(T,W){for(let oe=0;oe<T.length;oe++){const Y=T[oe],ae=t.getContext(Y,W);if(ae!==null)return ae}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",we,!1),x===null){const W=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&W.shift(),x=N(W,T),x===null)throw N(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let H,Z,q,me,_e,J,ce,he,Ae,E,w,F,G,se,le,Ee,pe,k,U,ue,be,xe,Me,ze;function Ye(){H=new $w(x),Z=new jw(x,H,e),H.init(Z),xe=new Fy(x,H,Z),q=new Uy(x,H,Z),me=new nb(x),_e=new wy,J=new Ny(x,H,q,_e,Z,xe,me),ce=new Yw(A),he=new Jw(A),Ae=new dv(x,Z),Me=new Ww(x,H,Ae,Z),E=new eb(x,Ae,me,Me),w=new ob(x,E,Ae,me),U=new rb(x,Z,J),Ee=new qw(_e),F=new xy(A,ce,he,H,Z,Me,Ee),G=new Gy(A,_e),se=new yy,le=new Cy(H,Z),k=new Vw(A,ce,he,q,w,m,l),pe=new Iy(A,w,Z),ze=new Vy(x,me,Z,q),ue=new Xw(x,H,me,Z),be=new tb(x,H,me,Z),me.programs=F.programs,A.capabilities=Z,A.extensions=H,A.properties=_e,A.renderLists=se,A.shadowMap=pe,A.state=q,A.info=me}Ye();const O=new ky(A,x);this.xr=O,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=H.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=H.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(Q,ie,!1))},this.getSize=function(T){return T.set(Q,ie)},this.setSize=function(T,W,oe=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,ie=W,t.width=Math.floor(T*z),t.height=Math.floor(W*z),oe===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(Q*z,ie*z).floor()},this.setDrawingBufferSize=function(T,W,oe){Q=T,ie=W,z=oe,t.width=Math.floor(T*oe),t.height=Math.floor(W*oe),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,W,oe,Y){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,W,oe,Y),q.viewport(L.copy(ge).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,W,oe,Y){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,W,oe,Y),q.scissor(de.copy(K).multiplyScalar(z).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){q.setScissorTest(ee=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(T=!0,W=!0,oe=!0){let Y=0;if(T){let ae=!1;if(D!==null){const De=D.texture.format;ae=De===Cf||De===Tf||De===Sf}if(ae){const De=D.texture.type,Fe=De===li||De===ni||De===Ml||De===Si||De===Af||De===Ef,ke=k.getClearColor(),Be=k.getClearAlpha(),je=ke.r,He=ke.g,Oe=ke.b;Fe?(_[0]=je,_[1]=He,_[2]=Oe,_[3]=Be,x.clearBufferuiv(x.COLOR,0,_)):(y[0]=je,y[1]=He,y[2]=Oe,y[3]=Be,x.clearBufferiv(x.COLOR,0,y))}else Y|=x.COLOR_BUFFER_BIT}W&&(Y|=x.DEPTH_BUFFER_BIT),oe&&(Y|=x.STENCIL_BUFFER_BIT),x.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",we,!1),se.dispose(),le.dispose(),_e.dispose(),ce.dispose(),he.dispose(),w.dispose(),Me.dispose(),ze.dispose(),F.dispose(),O.dispose(),O.removeEventListener("sessionstart",ot),O.removeEventListener("sessionend",Xt),Le&&(Le.dispose(),Le=null),Ct.stop()};function Te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=me.autoReset,W=pe.enabled,oe=pe.autoUpdate,Y=pe.needsUpdate,ae=pe.type;Ye(),me.autoReset=T,pe.enabled=W,pe.autoUpdate=oe,pe.needsUpdate=Y,pe.type=ae}function we(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ye(T){const W=T.target;W.removeEventListener("dispose",ye),Ke(W)}function Ke(T){nt(T),_e.remove(T)}function nt(T){const W=_e.get(T).programs;W!==void 0&&(W.forEach(function(oe){F.releaseProgram(oe)}),T.isShaderMaterial&&F.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,oe,Y,ae,De){W===null&&(W=rt);const Fe=ae.isMesh&&ae.matrixWorld.determinant()<0,ke=Fo(T,W,oe,Y,ae);q.setMaterial(Y,Fe);let Be=oe.index,je=1;if(Y.wireframe===!0){if(Be=E.getWireframeAttribute(oe),Be===void 0)return;je=2}const He=oe.drawRange,Oe=oe.attributes.position;let lt=He.start*je,ht=(He.start+He.count)*je;De!==null&&(lt=Math.max(lt,De.start*je),ht=Math.min(ht,(De.start+De.count)*je)),Be!==null?(lt=Math.max(lt,0),ht=Math.min(ht,Be.count)):Oe!=null&&(lt=Math.max(lt,0),ht=Math.min(ht,Oe.count));const jt=ht-lt;if(jt<0||jt===1/0)return;Me.setup(ae,Y,ke,oe,Be);let en,gt=ue;if(Be!==null&&(en=Ae.get(Be),gt=be,gt.setIndex(en)),ae.isMesh)Y.wireframe===!0?(q.setLineWidth(Y.wireframeLinewidth*Ve()),gt.setMode(x.LINES)):gt.setMode(x.TRIANGLES);else if(ae.isLine){let Ze=Y.linewidth;Ze===void 0&&(Ze=1),q.setLineWidth(Ze*Ve()),ae.isLineSegments?gt.setMode(x.LINES):ae.isLineLoop?gt.setMode(x.LINE_LOOP):gt.setMode(x.LINE_STRIP)}else ae.isPoints?gt.setMode(x.POINTS):ae.isSprite&&gt.setMode(x.TRIANGLES);if(ae.isInstancedMesh)gt.renderInstances(lt,jt,ae.count);else if(oe.isInstancedBufferGeometry){const Ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ls=Math.min(oe.instanceCount,Ze);gt.renderInstances(lt,jt,Ls)}else gt.render(lt,jt)},this.compile=function(T,W){function oe(Y,ae,De){Y.transparent===!0&&Y.side===kn&&Y.forceSinglePass===!1?(Y.side=Yt,Y.needsUpdate=!0,jn(Y,ae,De),Y.side=ui,Y.needsUpdate=!0,jn(Y,ae,De),Y.side=kn):jn(Y,ae,De)}h=le.get(T),h.init(),P.push(h),T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights(A._useLegacyLights),T.traverse(function(Y){const ae=Y.material;if(ae)if(Array.isArray(ae))for(let De=0;De<ae.length;De++){const Fe=ae[De];oe(Fe,T,Y)}else oe(ae,T,Y)}),P.pop(),h=null};let st=null;function Bt(T){st&&st(T)}function ot(){Ct.stop()}function Xt(){Ct.start()}const Ct=new Gf;Ct.setAnimationLoop(Bt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(T){st=T,O.setAnimationLoop(T),T===null?Ct.stop():Ct.start()},O.addEventListener("sessionstart",ot),O.addEventListener("sessionend",Xt),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(W),W=O.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,W,D),h=le.get(T,P.length),h.init(),P.push(h),Ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Se.setFromProjectionMatrix(Ue),Ce=this.localClippingEnabled,Pe=Ee.init(this.clippingPlanes,Ce),b=se.get(T,g.length),b.init(),g.push(b),gr(T,W,0,A.sortObjects),b.finish(),A.sortObjects===!0&&b.sort(X,ve),this.info.render.frame++,Pe===!0&&Ee.beginShadows();const oe=h.state.shadowsArray;if(pe.render(oe,T,W),Pe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(b,T),h.setupLights(A._useLegacyLights),W.isArrayCamera){const Y=W.cameras;for(let ae=0,De=Y.length;ae<De;ae++){const Fe=Y[ae];wn(b,T,Fe,Fe.viewport)}}else wn(b,T,W);D!==null&&(J.updateMultisampleRenderTarget(D),J.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(A,T,W),Me.resetDefaultState(),$=-1,S=null,P.pop(),P.length>0?h=P[P.length-1]:h=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function gr(T,W,oe,Y){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Se.intersectsSprite(T)){Y&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const Fe=w.update(T),ke=T.material;ke.visible&&b.push(T,Fe,ke,oe,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Se.intersectsObject(T))){const Fe=w.update(T),ke=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ge.copy(Fe.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(ke)){const Be=Fe.groups;for(let je=0,He=Be.length;je<He;je++){const Oe=Be[je],lt=ke[Oe.materialIndex];lt&&lt.visible&&b.push(T,Fe,lt,oe,Ge.z,Oe)}}else ke.visible&&b.push(T,Fe,ke,oe,Ge.z,null)}}const De=T.children;for(let Fe=0,ke=De.length;Fe<ke;Fe++)gr(De[Fe],W,oe,Y)}function wn(T,W,oe,Y){const ae=T.opaque,De=T.transmissive,Fe=T.transparent;h.setupLightsView(oe),Pe===!0&&Ee.setGlobalState(A.clippingPlanes,oe),De.length>0&&Oo(ae,De,W,oe),Y&&q.viewport(L.copy(Y)),ae.length>0&&Ni(ae,W,oe),De.length>0&&Ni(De,W,oe),Fe.length>0&&Ni(Fe,W,oe),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Oo(T,W,oe,Y){const ae=Z.isWebGL2;Le===null&&(Le=new Li(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")?lr:li,minFilter:ar,samples:ae?4:0})),A.getDrawingBufferSize(Ne),ae?Le.setSize(Ne.x,Ne.y):Le.setSize(vo(Ne.x),vo(Ne.y));const De=A.getRenderTarget();A.setRenderTarget(Le),A.getClearColor(V),j=A.getClearAlpha(),j<1&&A.setClearColor(16777215,.5),A.clear();const Fe=A.toneMapping;A.toneMapping=ai,Ni(T,oe,Y),J.updateMultisampleRenderTarget(Le),J.updateRenderTargetMipmap(Le);let ke=!1;for(let Be=0,je=W.length;Be<je;Be++){const He=W[Be],Oe=He.object,lt=He.geometry,ht=He.material,jt=He.group;if(ht.side===kn&&Oe.layers.test(Y.layers)){const en=ht.side;ht.side=Yt,ht.needsUpdate=!0,_r(Oe,oe,Y,lt,ht,jt),ht.side=en,ht.needsUpdate=!0,ke=!0}}ke===!0&&(J.updateMultisampleRenderTarget(Le),J.updateRenderTargetMipmap(Le)),A.setRenderTarget(De),A.setClearColor(V,j),A.toneMapping=Fe}function Ni(T,W,oe){const Y=W.isScene===!0?W.overrideMaterial:null;for(let ae=0,De=T.length;ae<De;ae++){const Fe=T[ae],ke=Fe.object,Be=Fe.geometry,je=Y===null?Fe.material:Y,He=Fe.group;ke.layers.test(oe.layers)&&_r(ke,W,oe,Be,je,He)}}function _r(T,W,oe,Y,ae,De){T.onBeforeRender(A,W,oe,Y,ae,De),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ae.onBeforeRender(A,W,oe,Y,T,De),ae.transparent===!0&&ae.side===kn&&ae.forceSinglePass===!1?(ae.side=Yt,ae.needsUpdate=!0,A.renderBufferDirect(oe,W,Y,ae,T,De),ae.side=ui,ae.needsUpdate=!0,A.renderBufferDirect(oe,W,Y,ae,T,De),ae.side=kn):A.renderBufferDirect(oe,W,Y,ae,T,De),T.onAfterRender(A,W,oe,Y,ae,De)}function jn(T,W,oe){W.isScene!==!0&&(W=rt);const Y=_e.get(T),ae=h.state.lights,De=h.state.shadowsArray,Fe=ae.state.version,ke=F.getParameters(T,ae.state,De,W,oe),Be=F.getProgramCacheKey(ke);let je=Y.programs;Y.environment=T.isMeshStandardMaterial?W.environment:null,Y.fog=W.fog,Y.envMap=(T.isMeshStandardMaterial?he:ce).get(T.envMap||Y.environment),je===void 0&&(T.addEventListener("dispose",ye),je=new Map,Y.programs=je);let He=je.get(Be);if(He!==void 0){if(Y.currentProgram===He&&Y.lightsStateVersion===Fe)return vr(T,ke),He}else ke.uniforms=F.getUniforms(T),T.onBuild(oe,ke,A),T.onBeforeCompile(ke,A),He=F.acquireProgram(ke,Be),je.set(Be,He),Y.uniforms=ke.uniforms;const Oe=Y.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=Ee.uniform),vr(T,ke),Y.needsLights=Ho(T),Y.lightsStateVersion=Fe,Y.needsLights&&(Oe.ambientLightColor.value=ae.state.ambient,Oe.lightProbe.value=ae.state.probe,Oe.directionalLights.value=ae.state.directional,Oe.directionalLightShadows.value=ae.state.directionalShadow,Oe.spotLights.value=ae.state.spot,Oe.spotLightShadows.value=ae.state.spotShadow,Oe.rectAreaLights.value=ae.state.rectArea,Oe.ltc_1.value=ae.state.rectAreaLTC1,Oe.ltc_2.value=ae.state.rectAreaLTC2,Oe.pointLights.value=ae.state.point,Oe.pointLightShadows.value=ae.state.pointShadow,Oe.hemisphereLights.value=ae.state.hemi,Oe.directionalShadowMap.value=ae.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Oe.spotShadowMap.value=ae.state.spotShadowMap,Oe.spotLightMatrix.value=ae.state.spotLightMatrix,Oe.spotLightMap.value=ae.state.spotLightMap,Oe.pointShadowMap.value=ae.state.pointShadowMap,Oe.pointShadowMatrix.value=ae.state.pointShadowMatrix);const lt=He.getUniforms(),ht=co.seqWithValue(lt.seq,Oe);return Y.currentProgram=He,Y.uniformsList=ht,He}function vr(T,W){const oe=_e.get(T);oe.outputColorSpace=W.outputColorSpace,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function Fo(T,W,oe,Y,ae){W.isScene!==!0&&(W=rt),J.resetTextureUnits();const De=W.fog,Fe=Y.isMeshStandardMaterial?W.environment:null,ke=D===null?A.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Rn,Be=(Y.isMeshStandardMaterial?he:ce).get(Y.envMap||Fe),je=Y.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,He=!!oe.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!oe.morphAttributes.position,lt=!!oe.morphAttributes.normal,ht=!!oe.morphAttributes.color;let jt=ai;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(jt=A.toneMapping);const en=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,gt=en!==void 0?en.length:0,Ze=_e.get(Y),Ls=h.state.lights;if(Pe===!0&&(Ce===!0||T!==S)){const Ht=T===S&&Y.id===$;Ee.setState(Y,T,Ht)}let pt=!1;Y.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ls.state.version||Ze.outputColorSpace!==ke||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||Ze.envMap!==Be||Y.fog===!0&&Ze.fog!==De||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==je||Ze.vertexTangents!==He||Ze.morphTargets!==Oe||Ze.morphNormals!==lt||Ze.morphColors!==ht||Ze.toneMapping!==jt||Z.isWebGL2===!0&&Ze.morphTargetsCount!==gt)&&(pt=!0):(pt=!0,Ze.__version=Y.version);let Pn=Ze.currentProgram;pt===!0&&(Pn=jn(Y,W,ae));let Ds=!1,di=!1,Is=!1;const Rt=Pn.getUniforms(),Ln=Ze.uniforms;if(q.useProgram(Pn.program)&&(Ds=!0,di=!0,Is=!0),Y.id!==$&&($=Y.id,di=!0),Ds||S!==T){Rt.setValue(x,"projectionMatrix",T.projectionMatrix),Rt.setValue(x,"viewMatrix",T.matrixWorldInverse);const Ht=Rt.map.cameraPosition;Ht!==void 0&&Ht.setValue(x,Ge.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&Rt.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Rt.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,di=!0,Is=!0)}if(ae.isSkinnedMesh){Rt.setOptional(x,ae,"bindMatrix"),Rt.setOptional(x,ae,"bindMatrixInverse");const Ht=ae.skeleton;Ht&&(Z.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Rt.setValue(x,"boneTexture",Ht.boneTexture,J),Rt.setValue(x,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Us=oe.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&Z.isWebGL2===!0)&&U.update(ae,oe,Pn),(di||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,Rt.setValue(x,"receiveShadow",ae.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ln.envMap.value=Be,Ln.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),di&&(Rt.setValue(x,"toneMappingExposure",A.toneMappingExposure),Ze.needsLights&&Bo(Ln,Is),De&&Y.fog===!0&&G.refreshFogUniforms(Ln,De),G.refreshMaterialUniforms(Ln,Y,z,ie,Le),co.upload(x,Ze.uniformsList,Ln,J)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(co.upload(x,Ze.uniformsList,Ln,J),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Rt.setValue(x,"center",ae.center),Rt.setValue(x,"modelViewMatrix",ae.modelViewMatrix),Rt.setValue(x,"normalMatrix",ae.normalMatrix),Rt.setValue(x,"modelMatrix",ae.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ht=Y.uniformsGroups;for(let Ns=0,xr=Ht.length;Ns<xr;Ns++)if(Z.isWebGL2){const wr=Ht[Ns];ze.update(wr,Pn),ze.bind(wr,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Bo(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Ho(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,W,oe){_e.get(T.texture).__webglTexture=W,_e.get(T.depthTexture).__webglTexture=oe;const Y=_e.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=oe===void 0,Y.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const oe=_e.get(T);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,oe=0){D=T,C=W,I=oe;let Y=!0,ae=null,De=!1,Fe=!1;if(T){const Be=_e.get(T);Be.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(x.FRAMEBUFFER,null),Y=!1):Be.__webglFramebuffer===void 0?J.setupRenderTarget(T):Be.__hasExternalTextures&&J.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);const je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const He=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[W])?ae=He[W][oe]:ae=He[W],De=!0):Z.isWebGL2&&T.samples>0&&J.useMultisampledRTT(T)===!1?ae=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?ae=He[oe]:ae=He,L.copy(T.viewport),de.copy(T.scissor),fe=T.scissorTest}else L.copy(ge).multiplyScalar(z).floor(),de.copy(K).multiplyScalar(z).floor(),fe=ee;if(q.bindFramebuffer(x.FRAMEBUFFER,ae)&&Z.drawBuffers&&Y&&q.drawBuffers(T,ae),q.viewport(L),q.scissor(de),q.setScissorTest(fe),De){const Be=_e.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,oe)}else if(Fe){const Be=_e.get(T.texture),je=W||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Be.__webglTexture,oe||0,je)}$=-1},this.readRenderTargetPixels=function(T,W,oe,Y,ae,De,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){q.bindFramebuffer(x.FRAMEBUFFER,ke);try{const Be=T.texture,je=Be.format,He=Be.type;if(je!==mn&&xe.convert(je)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=He===lr&&(H.has("EXT_color_buffer_half_float")||Z.isWebGL2&&H.has("EXT_color_buffer_float"));if(He!==li&&xe.convert(He)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===ii&&(Z.isWebGL2||H.has("OES_texture_float")||H.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-Y&&oe>=0&&oe<=T.height-ae&&x.readPixels(W,oe,Y,ae,xe.convert(je),xe.convert(He),De)}finally{const Be=D!==null?_e.get(D).__webglFramebuffer:null;q.bindFramebuffer(x.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,W,oe=0){const Y=Math.pow(2,-oe),ae=Math.floor(W.image.width*Y),De=Math.floor(W.image.height*Y);J.setTexture2D(W,0),x.copyTexSubImage2D(x.TEXTURE_2D,oe,0,0,T.x,T.y,ae,De),q.unbindTexture()},this.copyTextureToTexture=function(T,W,oe,Y=0){const ae=W.image.width,De=W.image.height,Fe=xe.convert(oe.format),ke=xe.convert(oe.type);J.setTexture2D(oe,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,oe.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,oe.unpackAlignment),W.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,Y,T.x,T.y,ae,De,Fe,ke,W.image.data):W.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,Y,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Fe,W.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,Y,T.x,T.y,Fe,ke,W.image),Y===0&&oe.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(T,W,oe,Y,ae=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=T.max.x-T.min.x+1,Fe=T.max.y-T.min.y+1,ke=T.max.z-T.min.z+1,Be=xe.convert(Y.format),je=xe.convert(Y.type);let He;if(Y.isData3DTexture)J.setTexture3D(Y,0),He=x.TEXTURE_3D;else if(Y.isDataArrayTexture)J.setTexture2DArray(Y,0),He=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,Y.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,Y.unpackAlignment);const Oe=x.getParameter(x.UNPACK_ROW_LENGTH),lt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ht=x.getParameter(x.UNPACK_SKIP_PIXELS),jt=x.getParameter(x.UNPACK_SKIP_ROWS),en=x.getParameter(x.UNPACK_SKIP_IMAGES),gt=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,gt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,gt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,T.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,T.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,T.min.z),oe.isDataTexture||oe.isData3DTexture?x.texSubImage3D(He,ae,W.x,W.y,W.z,De,Fe,ke,Be,je,gt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(He,ae,W.x,W.y,W.z,De,Fe,ke,Be,gt.data)):x.texSubImage3D(He,ae,W.x,W.y,W.z,De,Fe,ke,Be,je,gt),x.pixelStorei(x.UNPACK_ROW_LENGTH,Oe),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,lt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ht),x.pixelStorei(x.UNPACK_SKIP_ROWS,jt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,en),ae===0&&Y.generateMipmaps&&x.generateMipmap(He),q.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){C=0,I=0,D=null,q.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Ci:Rf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ci?dt:Rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Wy extends qf{}Wy.prototype.isWebGL1Renderer=!0;class Xy extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class uo extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nd=new B,id=new B,sd=new _t,Ta=new Do,$r=new hr;class jy extends Ft{constructor(e=new xn,t=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)nd.fromBufferAttribute(t,s-1),id.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=nd.distanceTo(id);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;sd.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(sd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new B,f=new B,p=new B,m=new B,_=this.isLineSegments?2:1,y=i.index,h=i.attributes.position;if(y!==null){const g=Math.max(0,a.start),P=Math.min(y.count,a.start+a.count);for(let A=g,M=P-1;A<M;A+=_){const C=y.getX(A),I=y.getX(A+1);if(u.fromBufferAttribute(h,C),f.fromBufferAttribute(h,I),Ta.distanceSqToSegment(u,f,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const $=e.ray.origin.distanceTo(m);$<e.near||$>e.far||t.push({distance:$,point:p.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),P=Math.min(h.count,a.start+a.count);for(let A=g,M=P-1;A<M;A+=_){if(u.fromBufferAttribute(h,A),f.fromBufferAttribute(h,A+1),Ta.distanceSqToSegment(u,f,m,p)>l)continue;m.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(m);I<e.near||I>e.far||t.push({distance:I,point:p.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const rd=new B,od=new B;class ad extends jy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)rd.fromBufferAttribute(t,s),od.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+rd.distanceTo(od);e.setAttribute("lineDistance",new Wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ks extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ld=new _t,$a=new Do,eo=new hr,to=new B;class Ca extends Ft{constructor(e=new xn,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;ld.copy(s).invert(),$a.copy(e.ray).applyMatrix4(ld);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=m,b=_;y<b;y++){const h=u.getX(y);to.fromBufferAttribute(p,h),cd(to,h,l,s,e,t,this)}}else{const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let y=m,b=_;y<b;y++)to.fromBufferAttribute(p,y),cd(to,y,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cd(n,e,t,i,s,r,a){const o=$a.distanceSqToPoint(n);if(o<t){const l=new B;$a.closestPointToPoint(n,l),l.applyMatrix4(i);const u=s.ray.origin.distanceTo(l);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class qy extends Wn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const xo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Yy{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){const p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=u.length;p<m;p+=2){const _=u[p],y=u[p+1];if(_.global&&(_.lastIndex=0),_.test(f))return y}return null}}}const Ky=new Yy;class mr{constructor(e){this.manager=e!==void 0?e:Ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class Zy extends Error{constructor(e,t){super(e),this.response=t}}class Qy extends mr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:i,onError:s});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=Bn[e],p=u.body.getReader(),m=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),_=m?parseInt(m):0,y=_!==0;let b=0;const h=new ReadableStream({start(g){P();function P(){p.read().then(({done:A,value:M})=>{if(A)g.close();else{b+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:y,loaded:b,total:_});for(let I=0,D=f.length;I<D;I++){const $=f[I];$.onProgress&&$.onProgress(C)}g.enqueue(M),P()}})}}});return new Response(h)}else throw new Zy(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return u.json();default:if(o===void 0)return u.text();{const p=/charset="?([^;"\s]*)"?/i.exec(o),m=p&&p[1]?p[1].toLowerCase():void 0,_=new TextDecoder(m);return u.arrayBuffer().then(y=>_.decode(y))}}}).then(u=>{xo.add(e,u);const f=Bn[e];delete Bn[e];for(let p=0,m=f.length;p<m;p++){const _=f[p];_.onLoad&&_.onLoad(u)}}).catch(u=>{const f=Bn[e];if(f===void 0)throw this.manager.itemError(e),u;delete Bn[e];for(let p=0,m=f.length;p<m;p++){const _=f[p];_.onError&&_.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jy extends mr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=xo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ur("img");function l(){f(),xo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function u(p){f(),s&&s(p),r.manager.itemError(e),r.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class $y extends mr{constructor(e){super(e)}load(e,t,i,s){const r=new Kt,a=new Jy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class eM extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ra=new _t,ud=new B,dd=new B;class tM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fd=new _t,Ws=new B,Pa=new B;class nM extends tM{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ws),Pa.copy(i.position),Pa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pa),i.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}}class iM extends eM{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hd(){return(typeof performance>"u"?Date:performance).now()}class pd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);const md={type:"change"},La={type:"start"},gd={type:"end"},no=new Do,_d=new ti,rM=Math.cos(70*U0.DEG2RAD);class oM extends Ui{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",w),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(md),i.update(),r=s.NONE},this.update=function(){const U=new B,ue=new Di().setFromUnitVectors(e.up,new B(0,1,0)),be=ue.clone().invert(),xe=new B,Me=new Di,ze=new B,Ye=2*Math.PI;return function(Te=null){const te=i.object.position;U.copy(te).sub(i.target),U.applyQuaternion(ue),o.setFromVector3(U),i.autoRotate&&r===s.NONE&&de(S(Te)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let we=i.minAzimuthAngle,ye=i.maxAzimuthAngle;isFinite(we)&&isFinite(ye)&&(we<-Math.PI?we+=Ye:we>Math.PI&&(we-=Ye),ye<-Math.PI?ye+=Ye:ye>Math.PI&&(ye-=Ye),we<=ye?o.theta=Math.max(we,Math.min(ye,o.theta)):o.theta=o.theta>(we+ye)/2?Math.max(we,o.theta):Math.min(ye,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.zoomToCursor&&I||i.object.isOrthographicCamera?o.radius=ve(o.radius):o.radius=ve(o.radius*u),U.setFromSpherical(o),U.applyQuaternion(be),te.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let Ke=!1;if(i.zoomToCursor&&I){let nt=null;if(i.object.isPerspectiveCamera){const st=U.length();nt=ve(st*u);const Bt=st-nt;i.object.position.addScaledVector(M,Bt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const st=new B(C.x,C.y,0);st.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ke=!0;const Bt=new B(C.x,C.y,0);Bt.unproject(i.object),i.object.position.sub(Bt).add(st),i.object.updateMatrixWorld(),nt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;nt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(nt).add(i.object.position):(no.origin.copy(i.object.position),no.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(no.direction))<rM?e.lookAt(i.target):(_d.setFromNormalAndCoplanarPoint(i.object.up,i.target),no.intersectPlane(_d,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ke=!0);return u=1,I=!1,Ke||xe.distanceToSquared(i.object.position)>a||8*(1-Me.dot(i.object.quaternion))>a||ze.distanceToSquared(i.target)>0?(i.dispatchEvent(md),xe.copy(i.object.position),Me.copy(i.object.quaternion),ze.copy(i.target),Ke=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",se),i.domElement.removeEventListener("pointerdown",_e),i.domElement.removeEventListener("pointercancel",ce),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",J),i.domElement.removeEventListener("pointerup",ce),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",w),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new pd,l=new pd;let u=1;const f=new B,p=new Xe,m=new Xe,_=new Xe,y=new Xe,b=new Xe,h=new Xe,g=new Xe,P=new Xe,A=new Xe,M=new B,C=new Xe;let I=!1;const D=[],$={};function S(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function L(){return Math.pow(.95,i.zoomSpeed)}function de(U){l.theta-=U}function fe(U){l.phi-=U}const V=function(){const U=new B;return function(be,xe){U.setFromMatrixColumn(xe,0),U.multiplyScalar(-be),f.add(U)}}(),j=function(){const U=new B;return function(be,xe){i.screenSpacePanning===!0?U.setFromMatrixColumn(xe,1):(U.setFromMatrixColumn(xe,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(be),f.add(U)}}(),Q=function(){const U=new B;return function(be,xe){const Me=i.domElement;if(i.object.isPerspectiveCamera){const ze=i.object.position;U.copy(ze).sub(i.target);let Ye=U.length();Ye*=Math.tan(i.object.fov/2*Math.PI/180),V(2*be*Ye/Me.clientHeight,i.object.matrix),j(2*xe*Ye/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(be*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),j(xe*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(U){if(!i.zoomToCursor)return;I=!0;const ue=i.domElement.getBoundingClientRect(),be=U.clientX-ue.left,xe=U.clientY-ue.top,Me=ue.width,ze=ue.height;C.x=be/Me*2-1,C.y=-(xe/ze)*2+1,M.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function ve(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function ge(U){p.set(U.clientX,U.clientY)}function K(U){X(U),g.set(U.clientX,U.clientY)}function ee(U){y.set(U.clientX,U.clientY)}function Se(U){m.set(U.clientX,U.clientY),_.subVectors(m,p).multiplyScalar(i.rotateSpeed);const ue=i.domElement;de(2*Math.PI*_.x/ue.clientHeight),fe(2*Math.PI*_.y/ue.clientHeight),p.copy(m),i.update()}function Pe(U){P.set(U.clientX,U.clientY),A.subVectors(P,g),A.y>0?ie(L()):A.y<0&&z(L()),g.copy(P),i.update()}function Ce(U){b.set(U.clientX,U.clientY),h.subVectors(b,y).multiplyScalar(i.panSpeed),Q(h.x,h.y),y.copy(b),i.update()}function Le(U){X(U),U.deltaY<0?z(L()):U.deltaY>0&&ie(L()),i.update()}function Ue(U){let ue=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?fe(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?fe(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?de(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?de(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(-i.keyPanSpeed,0),ue=!0;break}ue&&(U.preventDefault(),i.update())}function Ne(){if(D.length===1)p.set(D[0].pageX,D[0].pageY);else{const U=.5*(D[0].pageX+D[1].pageX),ue=.5*(D[0].pageY+D[1].pageY);p.set(U,ue)}}function Ge(){if(D.length===1)y.set(D[0].pageX,D[0].pageY);else{const U=.5*(D[0].pageX+D[1].pageX),ue=.5*(D[0].pageY+D[1].pageY);y.set(U,ue)}}function rt(){const U=D[0].pageX-D[1].pageX,ue=D[0].pageY-D[1].pageY,be=Math.sqrt(U*U+ue*ue);g.set(0,be)}function Ve(){i.enableZoom&&rt(),i.enablePan&&Ge()}function x(){i.enableZoom&&rt(),i.enableRotate&&Ne()}function N(U){if(D.length==1)m.set(U.pageX,U.pageY);else{const be=k(U),xe=.5*(U.pageX+be.x),Me=.5*(U.pageY+be.y);m.set(xe,Me)}_.subVectors(m,p).multiplyScalar(i.rotateSpeed);const ue=i.domElement;de(2*Math.PI*_.x/ue.clientHeight),fe(2*Math.PI*_.y/ue.clientHeight),p.copy(m)}function H(U){if(D.length===1)b.set(U.pageX,U.pageY);else{const ue=k(U),be=.5*(U.pageX+ue.x),xe=.5*(U.pageY+ue.y);b.set(be,xe)}h.subVectors(b,y).multiplyScalar(i.panSpeed),Q(h.x,h.y),y.copy(b)}function Z(U){const ue=k(U),be=U.pageX-ue.x,xe=U.pageY-ue.y,Me=Math.sqrt(be*be+xe*xe);P.set(0,Me),A.set(0,Math.pow(P.y/g.y,i.zoomSpeed)),ie(A.y),g.copy(P)}function q(U){i.enableZoom&&Z(U),i.enablePan&&H(U)}function me(U){i.enableZoom&&Z(U),i.enableRotate&&N(U)}function _e(U){i.enabled!==!1&&(D.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",J),i.domElement.addEventListener("pointerup",ce)),le(U),U.pointerType==="touch"?F(U):he(U))}function J(U){i.enabled!==!1&&(U.pointerType==="touch"?G(U):Ae(U))}function ce(U){Ee(U),D.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",J),i.domElement.removeEventListener("pointerup",ce)),i.dispatchEvent(gd),r=s.NONE}function he(U){let ue;switch(U.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Gi.DOLLY:if(i.enableZoom===!1)return;K(U),r=s.DOLLY;break;case Gi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;ee(U),r=s.PAN}else{if(i.enableRotate===!1)return;ge(U),r=s.ROTATE}break;case Gi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;ge(U),r=s.ROTATE}else{if(i.enablePan===!1)return;ee(U),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(La)}function Ae(U){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;Se(U);break;case s.DOLLY:if(i.enableZoom===!1)return;Pe(U);break;case s.PAN:if(i.enablePan===!1)return;Ce(U);break}}function E(U){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(U.preventDefault(),i.dispatchEvent(La),Le(U),i.dispatchEvent(gd))}function w(U){i.enabled===!1||i.enablePan===!1||Ue(U)}function F(U){switch(pe(U),D.length){case 1:switch(i.touches.ONE){case Vi.ROTATE:if(i.enableRotate===!1)return;Ne(),r=s.TOUCH_ROTATE;break;case Vi.PAN:if(i.enablePan===!1)return;Ge(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ve(),r=s.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;x(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(La)}function G(U){switch(pe(U),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;N(U),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;H(U),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;q(U),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(U),i.update();break;default:r=s.NONE}}function se(U){i.enabled!==!1&&U.preventDefault()}function le(U){D.push(U)}function Ee(U){delete $[U.pointerId];for(let ue=0;ue<D.length;ue++)if(D[ue].pointerId==U.pointerId){D.splice(ue,1);return}}function pe(U){let ue=$[U.pointerId];ue===void 0&&(ue=new Xe,$[U.pointerId]=ue),ue.set(U.pageX,U.pageY)}function k(U){const ue=U.pointerId===D[0].pointerId?D[1]:D[0];return $[ue.pointerId]}i.domElement.addEventListener("contextmenu",se),i.domElement.addEventListener("pointerdown",_e),i.domElement.addEventListener("pointercancel",ce),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}}const aM=/^[og]\s*(.+)?/,lM=/^mtllib /,cM=/^usemtl /,uM=/^usemap /,vd=/\s+/,xd=new B,Da=new B,wd=new B,bd=new B,nn=new B,io=new tt;function dM(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const u={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,r=this.object.geometry.normals;xd.fromArray(s,e),Da.fromArray(s,t),wd.fromArray(s,i),nn.subVectors(wd,Da),bd.subVectors(xd,Da),nn.cross(bd),nn.normalize(),r.push(nn.x,nn.y,nn.z),r.push(nn.x,nn.y,nn.z),r.push(nn.x,nn.y,nn.z)},addColor:function(e,t,i){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&r.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,r,a,o,l,u){const f=this.vertices.length;let p=this.parseVertexIndex(e,f),m=this.parseVertexIndex(t,f),_=this.parseVertexIndex(i,f);if(this.addVertex(p,m,_),this.addColor(p,m,_),o!==void 0&&o!==""){const y=this.normals.length;p=this.parseNormalIndex(o,y),m=this.parseNormalIndex(l,y),_=this.parseNormalIndex(u,y),this.addNormal(p,m,_)}else this.addFaceNormal(p,m,_);if(s!==void 0&&s!==""){const y=this.uvs.length;p=this.parseUVIndex(s,y),m=this.parseUVIndex(r,y),_=this.parseUVIndex(a,y),this.addUV(p,m,_),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const r=this.parseVertexIndex(e[i],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],i));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return n.startObject("",!1),n}class fM extends mr{constructor(e){super(e),this.materials=null}load(e,t,i,s){const r=this,a=new Qy(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new dM;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let o=0,l=i.length;o<l;o++){const u=i[o].trimStart();if(u.length===0)continue;const f=u.charAt(0);if(f!=="#")if(f==="v"){const p=u.split(vd);switch(p[0]){case"v":t.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(io.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6])).convertSRGBToLinear(),t.colors.push(io.r,io.g,io.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":t.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(f==="f"){const m=u.slice(1).trim().split(vd),_=[];for(let b=0,h=m.length;b<h;b++){const g=m[b];if(g.length>0){const P=g.split("/");_.push(P)}}const y=_[0];for(let b=1,h=_.length-1;b<h;b++){const g=_[b],P=_[b+1];t.addFace(y[0],g[0],P[0],y[1],g[1],P[1],y[2],g[2],P[2])}}else if(f==="l"){const p=u.substring(1).trim().split(" ");let m=[];const _=[];if(u.indexOf("/")===-1)m=p;else for(let y=0,b=p.length;y<b;y++){const h=p[y].split("/");h[0]!==""&&m.push(h[0]),h[1]!==""&&_.push(h[1])}t.addLineGeometry(m,_)}else if(f==="p"){const m=u.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=aM.exec(u))!==null){const p=(" "+s[0].slice(1).trim()).slice(1);t.startObject(p)}else if(cM.test(u))t.object.startMaterial(u.substring(7).trim(),t.materialLibraries);else if(lM.test(u))t.materialLibraries.push(u.substring(7).trim());else if(uM.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(s=u.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const p=t.object.currentMaterial();p&&(p.smooth=t.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}t.finalize();const r=new Ys;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=t.objects.length;o<l;o++){const u=t.objects[o],f=u.geometry,p=u.materials,m=f.type==="Line",_=f.type==="Points";let y=!1;if(f.vertices.length===0)continue;const b=new xn;b.setAttribute("position",new Wt(f.vertices,3)),f.normals.length>0&&b.setAttribute("normal",new Wt(f.normals,3)),f.colors.length>0&&(y=!0,b.setAttribute("color",new Wt(f.colors,3))),f.hasUVIndices===!0&&b.setAttribute("uv",new Wt(f.uvs,2));const h=[];for(let P=0,A=p.length;P<A;P++){const M=p[P],C=M.name+"_"+M.smooth+"_"+y;let I=t.materials[C];if(this.materials!==null){if(I=this.materials.create(M.name),m&&I&&!(I instanceof uo)){const D=new uo;Wn.prototype.copy.call(D,I),D.color.copy(I.color),I=D}else if(_&&I&&!(I instanceof Ks)){const D=new Ks({size:10,sizeAttenuation:!1});Wn.prototype.copy.call(D,I),D.color.copy(I.color),D.map=I.map,I=D}}I===void 0&&(m?I=new uo:_?I=new Ks({size:1,sizeAttenuation:!1}):I=new qy,I.name=M.name,I.flatShading=!M.smooth,I.vertexColors=y,t.materials[C]=I),h.push(I)}let g;if(h.length>1){for(let P=0,A=p.length;P<A;P++){const M=p[P];b.addGroup(M.groupStart,M.groupCount,P)}m?g=new ad(b,h):_?g=new Ca(b,h):g=new rn(b,h)}else m?g=new ad(b,h[0]):_?g=new Ca(b,h[0]):g=new rn(b,h[0]);g.name=u.name,r.add(g)}else if(t.vertices.length>0){const o=new Ks({size:1,sizeAttenuation:!1}),l=new xn;l.setAttribute("position",new Wt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new Wt(t.colors,3)),o.vertexColors=!0);const u=new Ca(l,o);r.add(u)}return r}}const hM={id:"app",class:"bg-black"},pM={key:0,class:"loginform fixed right-4 z-20 mt-32 rounded shadow-lg shadow-black bg-white w-[350px]"},mM={class:"w-full h-full flex flex-col justify-center items-center pb-10 pt-10"},gM={class:"flex items-center rounded-t-sm p-4 text-[#ffffff] w-full -mt-20 z-10 mb-10 h-[60px] bg-custom-blue"},_M=ne("h2",{class:"icon"},"WebHive - log in",-1),vM=ne("img",{class:"w-full h-full",src:e_,alt:""},null,-1),xM=[vM],wM=ne("input",{class:"w-[80%] h-[40px] mt-4 p-2 rounded-lg outline-custom-blue border-[1px] textboxes border-[#888888]",type:"text",placeholder:"Email"},null,-1),bM=ne("input",{class:"w-[80%] h-[40px] mt-4 p-2 rounded-lg outline-custom-blue border-[1px] textboxes border-[#888888]",type:"text",placeholder:"Password"},null,-1),yM=ne("button",{class:"w-[80%] h-[40px] mt-4 p-2 rounded-lg bg-custom-blue text-white font-semibold"},"Log in",-1),MM=ne("button",{class:"flex items-center justify-center h-[25px] mt-2 p-2 rounded text-[#222222] font-semibold"},"Sign up",-1),AM={class:"sidenav -translate-x-[300px] h-full text-white font-bold flex items-center justify-center px-2 flex-col text-center rounded absolute z-[40] top-0 bg-[#222222] p-4 w-[300px] gap-12 text-2xl"},EM=ne("a",{class:"cursor-pointer border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Home",-1),SM=ne("a",{class:"cursor-pointer border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Courses",-1),TM=ne("a",{class:"cursor-pointer border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"Course info",-1),CM=ne("a",{class:"cursor-pointer border-custom-blue p-2 hover:border-b-4 hover:mt-1"},"About",-1),RM={class:"mainnav duration-150 fixed z-[30] text-white left-1/2 -translate-x-1/2 flex items-center font-semibold py-3 w-full bg-[#0d0d0dcf]"},PM=ne("a",{class:"w-6 opacity-0 sideicon ml-4",href:""},[ne("img",{src:t_,alt:""})],-1),LM=ne("a",{href:"",class:"icon labelsclass sm:left-5 sm:text-sm text-sm left-2 text-white absolute cursor-pointer"},"WebHive",-1),DM=ne("span",null,null,-1),IM=ne("span",null,null,-1),UM=ne("span",null,null,-1),NM=ne("span",null,null,-1),OM=[DM,IM,UM,NM],FM={class:"hidden md:flex absolute right-2 gap-3 text-sm navlinks"},BM=ne("a",{class:"cursor-pointer"},"home",-1),HM=ne("a",{class:"cursor-pointer"},"courses",-1),zM=ne("a",{class:"cursor-pointer"},"course info",-1),kM=ne("a",{class:"cursor-pointer"},"about",-1),GM={key:0,class:"hidden md:flex mr-6",href:""},VM=ne("img",{class:"w-4 h-4 ml-1 mt-[3px]",src:n_,alt:"login"},null,-1),WM=ne("img",{class:"w-3 h-3 mr-2 ml-1 mt-1.5",src:i_,alt:"login"},null,-1),XM={class:"h-[650px] w-full"},jM={class:"absolute left-10 top-[100px] text-white pb-14 w-[500px] max-w-md p-4 rounded-lg duration-200 z-20"},qM=ne("h1",{class:"text-[30px] font-black"},"Learn to code websites",-1),YM={class:"opacity-60 text-[15px] mt-0 w-full"},KM={key:0},ZM={key:0},QM={key:1},JM=ne("div",{class:"flex w-full mt-4"},[ne("a",{href:"#scrolltocourses",class:"bg-custom-blue text-[13.5px] font-semibold w-[135px] h-[40px] text-left pl-3 flex items-center cursor-pointer duration-500 hover:bg-[#1f4ff9] hover:scale-105"},[bi("LEARN NOW "),ne("img",{class:"w-5 ml-2",src:s_,alt:""})]),ne("a",{class:"bg-transparent text-[13.5px] flex items-center justify-center font-semibold w-[135px] h-[40px] text-center border-[1px] ml-4 cursor-pointer duration-500 hover:bg-white hover:text-black hover:scale-105"},"FIND OUT MORE")],-1),$M={ref:"webGl",class:"webGl absolute top-32 z-0 bg-transparent"},eA=ne("p",{class:"text-white text-3xl absolute right-10 top-52",id:"loading"},"loading",-1),tA=ne("button",{class:"absolute right-10 top-40 w-8 hover:scale-125 duration-200"},[ne("img",{src:r_,alt:""})],-1),nA={key:0,class:"contactsection pointer-events-none rounded-2xl bg-[#000000f2] w-[400px] h-[450px] fixed right-6 z-10 top-20 grid-cols-2 place-content-center"},iA=mf('<div class="w-[130px] h-full left-0 absolute bg-[#222222c0] rounded-l-xl contactbuttonsection"><h2 class="text-white text-2xl font-semibold ml-6 mt-4">Find us</h2><div class="grid grid-rows-5 grid-cols-1 place-items-center gap-2 mt-6 w-full"><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+o_+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+a_+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+l_+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+c_+'"></div><div class="h-16 rounded-full w-[64px] bg-[#222222] childdiv hover:cursor-pointer"><img class="mix-blend-lighten w-10 ml-3 mt-3" src="'+u_+'"></div></div></div>',1),sA=ne("div",{class:"w-[250px] h-full absolute right-[9px] rounded-r-xl formsection"},[ne("h2",{class:"text-white text-2xl font-semibold ml-6 mt-4"},"Write to us"),ne("form",{class:"grid place-items-center",action:"https://api.staticforms.xyz/submit",method:"post"},[ne("input",{class:"bg-[#222222] text-white rounded w-[90%] mt-6 h-11 p-2",type:"text",name:"name",placeholder:"Your Name"}),ne("input",{class:"bg-[#222222] text-white rounded w-[90%] mt-6 h-11 p-2",type:"text",name:"email",placeholder:"Your Email"}),ne("textarea",{placeholder:"Message",class:"bg-[#222222] text-sm w-[90%] rounded text-white mt-6 h-32 max-h-32 min-h-32 p-2",name:"message"}),ne("input",{type:"text",name:"honeypot",style:{display:"none"}}),ne("input",{type:"hidden",name:"accessKey",value:"aaaaaaaa-bbbb-cccc-dddd-eeee6666kkkk"}),ne("input",{type:"hidden",name:"subject",value:"Contact us from - example.com"}),ne("input",{type:"hidden",name:"replyTo",value:"@"}),ne("input",{type:"hidden",name:"redirectTo",value:"https://example.com/contact/success"}),ne("input",{class:"bg-white cursor-pointer mt-11 w-[60%] p-1 rounded-full font-semibold",type:"submit",value:"Submit"}),ne("img",{class:"submitimg w-6 relative -top-7 right-14 mr-2",src:vf})])],-1),rA=[iA,sA],oA={class:"h-full w-full bg-black"},aA={id:"scrolltocourses",class:"bg-black pb-4 text-center grid place-items-center mt-10 mb-10"},lA={class:"max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:p-10 p-2",id:"courses-container"},cA={class:"sm:h-[350px] h-[250px] max-w-[600px] lg:max-w-none mx-auto rounded bg-[#7F7CAF]"},uA=ne("img",{class:"w-28 mt-4 mr-2 float-right",src:dr,alt:""},null,-1),dA=ne("h2",{class:"text-left text-white font-[lemon] text-3xl ml-8 mt-6"},"Html Course",-1),fA=ne("p",{class:"text-left text-white font-bold ml-8 mt-1"},"10 lessons | 3 projects",-1),hA=ne("p",{class:"text-left text-white w-[60%] mt-6 ml-8 text-base"},"Learn the fundamentals of the programming language HTML. We start from the very bottom and cover everything.",-1),pA=ne("span",{class:"savetext"},"Save",-1),mA={key:0,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Ts,alt:"image of an x"},gA={key:1,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Cs,alt:"image of an x"},_A=ne("div",{class:"absolute sm:relative float-right flex flex-row right-10 sm:right-8 sm:mt-10"},[ne("button",{class:"px-4 py-2 bg-[#333333] text-white flex items-center justify-center rounded"},"Learn more"),ne("button",{class:"px-4 py-2 bg-[#333333] text-white flex items-center justify-center rounded ml-2"},"Add to basket")],-1),vA={class:"sm:h-[350px] h-[250px] max-w-[600px] lg:max-w-none mx-auto rounded bg-[#36151E]"},xA=ne("img",{class:"w-28 mt-4 mr-4 float-right",src:d_,alt:""},null,-1),wA=ne("h2",{class:"text-left text-white font-[lemon] text-3xl ml-8 mt-6"},"CSS Course",-1),bA=ne("p",{class:"text-left text-white font-bold ml-8 mt-1"},"10 lessons | 3 projects",-1),yA=ne("p",{class:"text-left text-white w-[60%] mt-6 ml-8 text-base"},"Learn the fundamentals of the programming language CSS. We start from the very bottom and cover everything.",-1),MA=ne("span",{class:"savetext"},"Save",-1),AA={key:0,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Ts,alt:"image of an x"},EA={key:1,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Cs,alt:"image of an x"},SA=ne("div",{class:"absolute sm:relative float-right flex flex-row right-10 sm:right-8 sm:mt-10"},[ne("button",{class:"px-4 py-2 bg-[#bababa] text-black flex items-center justify-center rounded"},"Learn more"),ne("button",{class:"px-4 py-2 bg-[#bababa] text-black flex items-center justify-center rounded ml-2"},"Add to basket")],-1),TA={class:"sm:h-[350px] h-[250px] max-w-[600px] lg:max-w-none mx-auto rounded bg-[#113537]"},CA=ne("img",{class:"w-32 mt-4 float-right",src:dr,alt:""},null,-1),RA=ne("h2",{class:"text-left text-white font-[lemon] text-3xl ml-8 mt-6"},"JavaScript Course",-1),PA=ne("p",{class:"text-left text-white font-bold ml-8 mt-1"},"10 lessons | 3 projects",-1),LA=ne("p",{class:"text-left text-white w-[60%] mt-6 ml-8 text-base"},"Learn the fundamentals of the programming language JavaScript. We start from the very bottom and cover everything.",-1),DA=ne("span",{class:"savetext"},"Save",-1),IA={key:0,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Ts,alt:"image of an x"},UA={key:1,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Cs,alt:"image of an x"},NA=ne("div",{class:"absolute sm:relative float-right flex flex-row right-10 sm:right-8 sm:mt-10"},[ne("button",{class:"px-4 py-2 bg-[#bababa] text-black flex items-center justify-center rounded"},"Learn more"),ne("button",{class:"px-4 py-2 bg-[#bababa] text-black flex items-center justify-center rounded ml-2"},"Add to basket")],-1),OA={class:"sm:h-[350px] h-[250px] max-w-[600px] lg:max-w-none mx-auto rounded bg-[#A4B494]"},FA=ne("img",{class:"w-32 mt-4 float-right",src:dr,alt:""},null,-1),BA=ne("h2",{class:"text-left text-white font-[lemon] text-3xl ml-8 mt-6"},"Tailwind Course",-1),HA=ne("p",{class:"text-left text-white font-bold ml-8 mt-1"},"10 lessons | 3 projects",-1),zA=ne("p",{class:"text-left text-white w-[60%] mt-6 ml-8 text-base"},"Learn the fundamentals of the programming language Tailwind. We start from the very bottom and cover everything.",-1),kA=ne("span",{class:"savetext"},"Save",-1),GA={key:0,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Ts,alt:"image of an x"},VA={key:1,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Cs,alt:"image of an x"},WA=ne("div",{class:"absolute sm:relative float-right flex flex-row right-10 sm:right-8 sm:mt-10"},[ne("button",{class:"px-4 py-2 bg-[#333333] text-white flex items-center justify-center rounded"},"Learn more"),ne("button",{class:"px-4 py-2 bg-[#333333] text-white flex items-center justify-center rounded ml-2"},"Add to basket")],-1),XA={class:"sm:h-[350px] h-[250px] max-w-[600px] lg:max-w-none mx-auto rounded bg-[#202030]"},jA=ne("img",{class:"w-32 mt-4 float-right",src:dr,alt:""},null,-1),qA=ne("h2",{class:"text-left text-white font-[lemon] text-3xl ml-8 mt-6"},"Vue Course",-1),YA=ne("p",{class:"text-left text-white font-bold ml-8 mt-1"},"10 lessons | 3 projects",-1),KA=ne("p",{class:"text-left text-white w-[60%] mt-6 ml-8 text-base"},"Learn the fundamentals of the programming language Vue. We start from the very bottom and cover everything.",-1),ZA=ne("span",{class:"savetext"},"Save",-1),QA={key:0,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Ts,alt:"image of an x"},JA={key:1,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Cs,alt:"image of an x"},$A=ne("div",{class:"absolute sm:relative float-right flex flex-row right-10 sm:right-8 sm:mt-10"},[ne("button",{class:"px-4 py-2 bg-[#bababa] text-black flex items-center justify-center rounded"},"Learn more"),ne("button",{class:"px-4 py-2 bg-[#bababa] text-black flex items-center justify-center rounded ml-2"},"Add to basket")],-1),eE={class:"sm:h-[350px] h-[250px] max-w-[600px] lg:max-w-none mx-auto rounded bg-[#AE9273]"},tE=ne("img",{class:"w-32 mt-4 float-right",src:dr,alt:""},null,-1),nE=ne("h2",{class:"text-left text-white font-[lemon] text-3xl ml-8 mt-6"},"Design Course",-1),iE=ne("p",{class:"text-left text-white font-bold ml-8 mt-1"},"10 lessons | 3 projects",-1),sE=ne("p",{class:"text-left text-white w-[60%] mt-6 ml-8 text-base"},"Learn the fundamentals of the programming language Design. We start from the very bottom and cover everything.",-1),rE=ne("span",{class:"savetext"},"Save",-1),oE={key:0,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Ts,alt:"image of an x"},aE={key:1,class:"saveicon w-4 opacity-60 mt-[5px] ml-1",src:Cs,alt:"image of an x"},lE=ne("div",{class:"absolute sm:relative float-right flex flex-row right-10 sm:right-8 sm:mt-10"},[ne("button",{class:"px-4 py-2 bg-[#333333] text-white flex items-center justify-center rounded"},"Learn more"),ne("button",{class:"px-4 py-2 bg-[#333333] text-white flex items-center justify-center rounded ml-2"},"Add to basket")],-1),cE=mf('<section id="rotate-content" class="w-full overflow-hidden h-[1100px] bg-[#111111]"><div id="image-section" class="w-[1000px] mt-22 h-[1100px] relative left-1/2 transform scale-75 sm:scale-100 -translate-x-1/2 grid grid-cols-4 place-items-center"><img class="first-column border-2 w-[200px] rounded-xl transform rotate-[-15deg] mt-60" src="'+f_+'"><img class="second-column border-2 w-[200px] rounded-xl transform rotate-[-15deg] mr-11 mb-32" src="'+h_+'"><img class="third-column border-2 w-[200px] rounded-xl transform rotate-[-15deg] mb-32" src="'+p_+'"><img class="fourth-column border-2 w-[200px] rounded-xl transform rotate-[-15deg]" src="'+m_+'"><h2 id="middle-title" class="text-white font-bold text-4xl mb-8 absolute ml-20">Create <span class="text-purple-500">real</span> content <br> learning from the <span class="text-purple-500">best</span></h2><img class="first-column border-2 w-[200px] rounded-xl transform -rotate-[15deg] mb-20 ml-28" src="'+g_+'"><img class="second-column border-2 w-[200px] rounded-xl transform -rotate-[15deg] mt-8 ml-40" src="'+__+'"><img class="third-column border-2 w-[200px] rounded-xl transform -rotate-[15deg] mt-8 ml-40" src="'+v_+'"><img class="fourth-column border-2 w-[190px] object-cover h-[250px] rounded-xl transform -rotate-[15deg] mb-52 ml-40" src="'+x_+'"></div></section>',1),uE={class:"reviewsection bg-no-repeat bg-center bg-cover w-full bg-[#111111]"},dE={id:"expand-words",class:"overflow-x-hidden circle-container text-white font-bold"},fE={class:"mt-20 ml-4 flex flex-row z-10"},hE={class:"text-3xl absolute -mt-10 ml-4"},pE={id:"slidenumber"},mE={id:"slidestotal"},gE={class:"p-8"},_E={class:"text-3xl"},vE={class:"font-normal w-[400px] mt-4 text-md"},xE={class:"flex items -ml-2 w-[50px] mt-4"},wE=ne("img",{class:"w-6 ml-3",src:b_},null,-1),bE=[wE],yE=ne("img",{class:"w-6 ml-3",src:vf},null,-1),ME=[yE],AE={__name:"Home",setup(n){const e=wt(0),t=wt(!1),i=wt(!1),s=wt(!1);wt(!1);const r=wt(!0);wt(""),wt(!1),wt(!1),wt(""),wt(!1),wt(!0),wt(!1);const a=wt(!1),o=wt(!1),l=wt(!1),u=wt(!1),f=wt(!1),p=wt(!1),m=wt([{name:"Antoine Leth",content:"Bought the package course not really knowing what I expect, but I was pleasantly surprised...",stars:[1,2,3,4,5]},{name:"Anonymous",content:"I'm a mum and I wanted to explore different career paths. I found a few courses online but settled on WebHive. I feel like I know more than my son now haha!",stars:[1,2,3,4,5]},{name:"Tim Rock",content:"I am currently a backend developer but wanted to be a full stack developer. I bought the package course and honestly i wasn't disapointed. Everything was so clear and concise. Will most likely purchase another course soon. Thanks.",stars:[1,2,3,4,5]},{name:"Muhammad",content:"I am student and dont have a lot of money. I contacted WebHive and they assisted me in which course would be the best for me. I purchased the javascript course. Thanks WebHive.",stars:[1,2,3,4]},{name:"Josh Humand",content:"Great communication and great education.",stars:[1,2,3,4,5]},{name:"Spencer Hill",content:"I am struggling with my univeristy web developing module at the moment so my parents bought the html and css course from WebHive to help me and in the end i passed with a first! Thank you.",stars:[1,2,3,4,5]}]),_=()=>{const A=document.querySelectorAll(".reviewcards"),M=A[e],C=document.getElementById("expand-words"),I=C.getBoundingClientRect(),D=M.getBoundingClientRect(),$=D.left,S=I.left,L=D.width,de=I.width,fe=$+L/2,V=S+de/2,j=fe-V,Q=C.scrollLeft,ie=Q+j;C.scrollTo({left:ie,behavior:"smooth"})},y=()=>{e<m.length-1&&(e++,_())},b=()=>{e>0&&(e--,_())},h=A=>{const M=A.getBoundingClientRect();return M.top>=0&&M.left>=0&&M.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&M.right<=(window.innerWidth||document.documentElement.clientWidth)},g=()=>{document.getElementById("nav-icon3").classList.toggle("open");const M=document.querySelector(".sidenav");M.classList.contains("slidenavin")?(M.classList.remove("slidenavin"),M.classList.add("slidenavinback")):(M.classList.toggle("slidenavin"),M.classList.remove("slidenavinback"))},P=()=>{const A=document.getElementById("middle-title"),M=document.querySelector("nav"),C=document.querySelector(".icon"),I=window.scrollY<1,D=document.querySelector(".sideicon");A.style.transition="transform 0.5s ease-in-out",h(A)&&(A.style.transform="rotate(-17deg)",document.addEventListener("mousemove",$=>{A.style.transition="transform 0s ease-in-out";const S=$.clientX,L=$.clientY,de=A.getBoundingClientRect(),fe=de.left+de.width/2,V=de.top+de.height/2,j=S-fe,Q=L-V,ie=Math.atan2(Q,j),z=50,X=(fe+z*Math.cos(ie)-S)*.04,ve=(V+z*Math.sin(ie)-L)*.04;A.style.transform=`translate(${X}px, ${ve}px) rotate(-17deg)`})),M.classList.toggle("ActiveScrollNav",!I),M.classList.toggle("NotActiveScrollNav",I),C.classList.toggle("ActiveScrollIcon",!I),C.classList.toggle("NotActiveScrollIcon",I),D.classList.toggle("ActiveScrollSideicon",!I),D.classList.toggle("NotActiveScrollSideicon",I)};return tf(()=>{window.addEventListener("scroll",P);const A=new Xy,M=new Uo(20,20),C=new El({opacity:0,transparent:!0}),I=new rn(M,C);I.rotation.x=-Math.PI*.5,A.add(I);const D={width:window.innerWidth,height:500},$=new $t(50,D.width/D.height);$.position.set(-50,0,0),$.lookAt(0,0,0),A.add($),new fM().load("../src/webgl/models/plane.obj",Q=>{Q.traverse(X=>{X instanceof rn&&(X.material.map=new $y().load("../src/webgl/textures/plane.jpg"))}),Q.scale.set(.01,.01,.01),Q.position.set(0,2,7);const ie=new sM,z=()=>{const X=ie.getElapsedTime();Q.rotation.y=X*.4,window.requestAnimationFrame(z)};z(),A.add(Q),setTimeout(()=>{const X=document.getElementById("loading");X.style.display="none"},1e3)});const L=document.querySelector(".webGl"),de=new qf({canvas:L,alpha:!0});de.setSize(D.width,D.height),de.render(A,$);const fe=new oM($,L);fe.enableDamping=!0,fe.enableZoom=!1,fe.enablePan=!1,fe.minDistance=15,fe.maxDistance=15,fe.maxPolarAngle=Math.PI/2,fe.target.set(2,5,2),fe.update();const V=()=>{fe.update(),de.render(A,$),window.requestAnimationFrame(V)};V();const j=new iM(16777215,120);j.position.set(0,10,0),A.add(j)}),(A,M)=>(at(),ct("div",hM,[t.value?(at(),ct("aside",pM,[ne("form",mM,[ne("div",gM,[_M,ne("button",{class:"w-6 h-6 absolute right-4 z-20",onClick:M[0]||(M[0]=C=>t.value=!t.value)},xM)]),wM,bM,yM,MM])])):Hs("",!0),ne("div",AM,[EM,SM,TM,CM,ne("a",{onClick:M[1]||(M[1]=C=>r.value=!r.value),class:"sm:mx-2 mx-1 cursor-pointer p-2 rounded-md"},"Contact")]),ne("nav",RM,[PM,LM,ne("div",{onClick:g,class:"block md:hidden",id:"nav-icon3"},OM),ne("div",FM,[BM,HM,zM,kM,ne("a",{onClick:M[2]||(M[2]=C=>r.value=!r.value),class:"cursor-pointer"},"contact")]),s.value?(at(),ct("button",GM,[bi("Basket "),VM])):Hs("",!0),s.value?(at(),ct("button",{key:1,onClick:M[3]||(M[3]=C=>t.value=!t.value),class:"hidden md:flex loginbutton",href:""},[bi("Log in "),WM])):Hs("",!0)]),ne("header",XM,[ne("div",jM,[qM,ne("p",YM,[bi("Learn how to make websites through coding HTML, CSS, and JavaScript. Additionally, master your design skills and learn frameworks. "),i.value?(at(),ct("span",KM," Learn Tailwind, SCSS, and Vue js, key features of front end web development if you want to broaden your skills and advance your websites. ")):Hs("",!0),ne("button",{onClick:M[4]||(M[4]=C=>i.value=!i.value),class:"text-white font-bold underline"},[bi(" See "),i.value?(at(),ct("span",ZM,"less")):(at(),ct("span",QM,"full"))])]),JM]),ne("canvas",$M,null,512),eA,tA,r.value?Hs("",!0):(at(),ct("div",nA,rA))]),ne("main",oA,[ne("section",aA,[ne("div",lA,[ne("div",cA,[uA,dA,fA,hA,ne("button",{onClick:M[5]||(M[5]=C=>a.value=!a.value),class:"text-[#ffffffb1] flex float-left mt-24 ml-8"},[pA,a.value?(at(),ct("img",mA)):(at(),ct("img",gA))]),_A]),ne("div",vA,[xA,wA,bA,yA,ne("button",{onClick:M[6]||(M[6]=C=>o.value=!o.value),class:"text-[#ffffffb1] flex float-left mt-24 ml-8"},[MA,o.value?(at(),ct("img",AA)):(at(),ct("img",EA))]),SA]),ne("div",TA,[CA,RA,PA,LA,ne("button",{onClick:M[7]||(M[7]=C=>l.value=!l.value),class:"text-[#ffffffb1] flex float-left mt-24 ml-8"},[DA,l.value?(at(),ct("img",IA)):(at(),ct("img",UA))]),NA]),ne("div",OA,[FA,BA,HA,zA,ne("button",{onClick:M[8]||(M[8]=C=>u.value=!u.value),class:"text-[#ffffffb1] flex float-left mt-24 ml-8"},[kA,u.value?(at(),ct("img",GA)):(at(),ct("img",VA))]),WA]),ne("div",XA,[jA,qA,YA,KA,ne("button",{onClick:M[9]||(M[9]=C=>f.value=!f.value),class:"text-[#ffffffb1] flex float-left mt-24 ml-8"},[ZA,f.value?(at(),ct("img",QA)):(at(),ct("img",JA))]),$A]),ne("div",eE,[tE,nE,iE,sE,ne("button",{onClick:M[10]||(M[10]=C=>p.value=!p.value),class:"text-[#ffffffb1] flex float-left mt-24 ml-8"},[rE,p.value?(at(),ct("img",oE)):(at(),ct("img",aE))]),lE])])]),cE,ne("section",uE,[ne("div",dE,[ne("div",fE,[ne("p",hE,[ne("span",pE,Sr(e.value+1),1),bi(" / "),ne("span",mE,Sr(m.value.length),1)]),(at(!0),ct(dn,null,xc(m.value,(C,I)=>(at(),ct("div",{key:I,class:Mo(["reviewcards rounded-lg bg-[#44444430] shadow-lg duration-200 w-[550px]",{"opacity-1":I===e.value,"opacity-50":I!==e.value}]),style:{margin:"4px"}},[ne("div",gE,[ne("h2",_E,Sr(C.name),1),ne("p",vE,Sr(C.content),1),ne("div",xE,[(at(!0),ct(dn,null,xc(C.stars,D=>(at(),ct("img",{key:D,src:w_}))),128))])])],2))),128))])]),ne("div",{class:"ml-4 mt-2"},[ne("button",{onClick:b,class:"w-12 h-12 text-white rounded-full m-1 active:border"},bE),ne("button",{onClick:y,class:"w-12 h-12 text-white rounded-full m-1 active:border"},ME)])])])]))}},EE={__name:"App",setup(n){return(e,t)=>(at(),hf(AE))}};Jg(EE).mount("#app");
