const st=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}};st();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),B=new Map;class X{constructor(t,e){if(this._$cssResult$=!0,e!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=B.get(this.cssText);return z&&t===void 0&&(B.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const nt=n=>new X(typeof n=="string"?n:n+"",I),ot=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new X(e,I)},rt=(n,t)=>{z?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},D=z?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return nt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var N;const j=window.trustedTypes,lt=j?j.emptyScript:"",V=window.reactiveElementPolyfillSupport,L={toAttribute(n,t){switch(t){case Boolean:n=n?lt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Y=(n,t)=>t!==n&&(t==t||n==n),M={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:Y};class _ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||M}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(D(s))}else t!==void 0&&e.push(D(t));return e}static _$Eh(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return rt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=M){var s,o;const r=this.constructor._$Eh(t,i);if(r!==void 0&&i.reflect===!0){const d=((o=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:L.toAttribute)(e,i.type);this._$Ei=t,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Ei=null}}_$AK(t,e){var i,s,o;const r=this.constructor,d=r._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const l=r.getPropertyOptions(d),h=l.converter,p=(o=(s=(i=h)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof h=="function"?h:null)!==null&&o!==void 0?o:L.fromAttribute;this._$Ei=d,this[d]=p(e,l.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,o)=>this[o]=s),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$ES(i,this[i],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},V==null||V({ReactiveElement:_}),((N=globalThis.reactiveElementVersions)!==null&&N!==void 0?N:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;const m=globalThis.trustedTypes,W=m?m.createPolicy("lit-html",{createHTML:n=>n}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,tt="?"+v,ht=`<${tt}>`,A=document,w=(n="")=>A.createComment(n),x=n=>n===null||typeof n!="object"&&typeof n!="function",et=Array.isArray,at=n=>{var t;return et(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,G=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,K=/'/g,J=/"/g,it=/^(?:script|style|textarea|title)$/i,dt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ct=dt(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Z=new WeakMap,ut=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new U(t.insertBefore(w(),d),d,void 0,e!=null?e:{})}return r._$AI(n),r},f=A.createTreeWalker(A,129,null,!1),pt=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=E;for(let l=0;l<e;l++){const h=n[l];let p,a,c=-1,$=0;for(;$<h.length&&(r.lastIndex=$,a=r.exec(h),a!==null);)$=r.lastIndex,r===E?a[1]==="!--"?r=q:a[1]!==void 0?r=G:a[2]!==void 0?(it.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=g):a[3]!==void 0&&(r=g):r===g?a[0]===">"?(r=s!=null?s:E,c=-1):a[1]===void 0?c=-2:(c=r.lastIndex-a[2].length,p=a[1],r=a[3]===void 0?g:a[3]==='"'?J:K):r===J||r===K?r=g:r===q||r===G?r=E:(r=g,s=void 0);const P=r===g&&n[l+1].startsWith("/>")?" ":"";o+=r===E?h+ht:c>=0?(i.push(p),h.slice(0,c)+"$lit$"+h.slice(c)+v+P):h+v+(c===-2?(i.push(void 0),l):P)}const d=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[W!==void 0?W.createHTML(d):d,i]};class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,l=this.parts,[h,p]=pt(t,e);if(this.el=C.createElement(h,i),f.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(s=f.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(v)){const $=p[r++];if(a.push(c),$!==void 0){const P=s.getAttribute($.toLowerCase()+"$lit$").split(v),T=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:T[2],strings:P,ctor:T[1]==="."?vt:T[1]==="?"?_t:T[1]==="@"?ft:H})}else l.push({type:6,index:o})}for(const c of a)s.removeAttribute(c)}if(it.test(s.tagName)){const a=s.textContent.split(v),c=a.length-1;if(c>0){s.textContent=m?m.emptyScript:"";for(let $=0;$<c;$++)s.append(a[$],w()),f.nextNode(),l.push({type:2,index:++o});s.append(a[c],w())}}}else if(s.nodeType===8)if(s.data===tt)l.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:o}),a+=v.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function b(n,t,e=n,i){var s,o,r,d;if(t===y)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const h=x(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Cl)!==null&&r!==void 0?r:d._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=b(n,l._$AS(n,t.values),l,i)),t}class $t{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);f.currentNode=o;let r=f.nextNode(),d=0,l=0,h=s[0];for(;h!==void 0;){if(d===h.index){let p;h.type===2?p=new U(r,r.nextSibling,this,t):h.type===1?p=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(p=new mt(r,this,t)),this.v.push(p),h=s[++l]}d!==(h==null?void 0:h.index)&&(r=f.nextNode(),d++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),x(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):at(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&x(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const r=new $t(o,this),d=r.p(this.options);r.m(i),this.k(d),this._$AH=r}}_$AC(t){let e=Z.get(t.strings);return e===void 0&&Z.set(t.strings,e=new C(t)),e}S(t){et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.M(w()),this.M(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=b(this,t,e,0),r=!x(t)||t!==this._$AH&&t!==y,r&&(this._$AH=t);else{const d=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=b(this,d[i+l],e,l),h===y&&(h=this._$AH[l]),r||(r=!x(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h!=null?h:"")+o[l+1]),this._$AH[l]=h}r&&!s&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class vt extends H{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const gt=m?m.emptyScript:"";class _t extends H{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,gt):this.element.removeAttribute(this.name)}}class ft extends H{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=b(this,t,e,0))!==null&&i!==void 0?i:u)===y)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class mt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const F=window.litHtmlPolyfillSupport;F==null||F(C,U),((O=globalThis.litHtmlVersions)!==null&&O!==void 0?O:globalThis.litHtmlVersions=[]).push("2.2.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k,R;class S extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return y}}S.finalized=!0,S._$litElement$=!0,(k=globalThis.litElementHydrateSupport)===null||k===void 0||k.call(globalThis,{LitElement:S});const Q=globalThis.litElementPolyfillSupport;Q==null||Q({LitElement:S});((R=globalThis.litElementVersions)!==null&&R!==void 0?R:globalThis.litElementVersions=[]).push("3.2.0");var At="/assets/logo-universal.cb3119ea.png";function yt(n){return window.go.main.App.Greet(n)}class bt extends S{static get styles(){return ot`
  #logo {
    display: block;
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 10% 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-origin: content-box;
  }

  .result {
    height: 20px;
    line-height: 20px;
    margin: 1.5rem auto;
  }

  .input-box .btn {
    width: 60px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    margin: 0 0 0 20px;
    padding: 0 8px;
    cursor: pointer;
  }

  .input-box .btn:hover {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    color: #333333;
  }

  .input-box .input {
    border: none;
    border-radius: 3px;
    outline: none;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: rgba(240, 240, 240, 1);
    -webkit-font-smoothing: antialiased;
  }

  .input-box .input:hover {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

  .input-box .input:focus {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

    `}constructor(){super(),this.resultText="Please enter your name below \u{1F447}"}static get properties(){return{resultText:{type:String}}}greet(){let t=this.shadowRoot.getElementById("name").value;yt(t).then(e=>{this.resultText=e})}render(){return ct`
      <main>
        <img id="logo" src=${At} alt="Wails logo">
        <div class="result" id="result">${this.resultText}</div>
        <div class="input-box" id="input">
          <input class="input" id="name" type="text" autocomplete="off"/>
          <button @click=${this.greet} class="btn">Greet</button>
        </div>
      </main>
    `}}window.customElements.define("my-element",bt);
