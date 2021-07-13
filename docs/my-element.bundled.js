/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const o=globalThis.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,l="?"+n,h=`<${l}>`,a=document,d=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,f=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,b=/"/g,w=/^(?:script|style|textarea)$/i,y=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),_=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),S=new WeakMap,k=a.createTreeWalker(a,129,null,!1),C=(t,i)=>{const s=t.length-1,e=[];let o,l=2===i?"<svg>":"",a=v;for(let i=0;i<s;i++){const s=t[i];let r,d,c=-1,u=0;for(;u<s.length&&(a.lastIndex=u,d=a.exec(s),null!==d);)u=a.lastIndex,a===v?"!--"===d[1]?a=p:void 0!==d[1]?a=f:void 0!==d[2]?(w.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=m):void 0!==d[3]&&(a=m):a===m?">"===d[0]?(a=null!=o?o:v,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,r=d[1],a=void 0===d[3]?m:'"'===d[3]?b:g):a===b||a===g?a=m:a===p||a===f?a=v:(a=m,o=void 0);const y=a===m&&t[i+1].startsWith("/>")?" ":"";l+=a===v?s+h:c>=0?(e.push(r),s.slice(0,c)+"$lit$"+s.slice(c)+n+y):s+n+(-2===c?(e.push(void 0),i):y)}const d=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==r?r.createHTML(d):d,e]};class ${constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let r=0,h=0;const a=t.length-1,c=this.parts,[u,v]=C(t,i);if(this.el=$.createElement(u,s),k.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=k.nextNode())&&c.length<a;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n)){const s=v[h++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?E:"?"===i[1]?O:"@"===i[1]?T:A})}else c.push({type:6,index:r})}for(const i of t)e.removeAttribute(i)}if(w.test(e.tagName)){const t=e.textContent.split(n),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],d()),k.nextNode(),c.push({type:2,index:++r});e.append(t[i],d())}}}else if(8===e.nodeType)if(e.data===l)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)c.push({type:7,index:r}),t+=n.length-1}r++}}static createElement(t,i){const s=a.createElement("template");return s.innerHTML=t,s}}function j(t,i,s=t,e){var o,r,n,l;if(i===_)return i;let h=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const a=c(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h.O)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,s,e)),void 0!==e?(null!==(n=(l=s).Σi)&&void 0!==n?n:l.Σi=[])[e]=h:s.Σo=h),void 0!==h&&(i=j(t,h.S(t,i.values),h,e)),i}class M{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:a).importNode(s,!0);k.currentNode=o;let r=k.nextNode(),n=0,l=0,h=e[0];for(;void 0!==h;){if(n===h.index){let i;2===h.type?i=new z(r,r.nextSibling,this,t):1===h.type?i=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(i=new N(r,this,t)),this.l.push(i),h=e[++l]}n!==(null==h?void 0:h.index)&&(r=k.nextNode(),n++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class z{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=j(this,t,i),c(t)?t===x||null==t||""===t?(this.H!==x&&this.R(),this.H=x):t!==this.H&&t!==_&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(a.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=$.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=S.get(t.strings);return void 0===i&&S.set(t.strings,i=new $(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new z(this.k(d()),this.k(d()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class A{constructor(t,i,s,e,o){this.type=1,this.H=x,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(x),this.strings=s):this.H=x}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let r=!1;if(void 0===o)t=j(this,t,i,0),r=!c(t)||t!==this.H&&t!==_,r&&(this.H=t);else{const e=t;let n,l;for(t=o[0],n=0;n<o.length-1;n++)l=j(this,e[s+n],i,n),l===_&&(l=this.H[n]),r||(r=!c(l)||l!==this.H[n]),l===x?t=x:t!==x&&(t+=(null!=l?l:"")+o[n+1]),this.H[n]=l}r&&!e&&this.W(t)}W(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class E extends A{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===x?void 0:t}}class O extends A{constructor(){super(...arguments),this.type=4}W(t){t&&t!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class T extends A{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=j(this,t,i,0))&&void 0!==s?s:x)===_)return;const e=this.H,o=t===x&&e!==x||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,r=t!==x&&(e===x||o);o&&this.element.removeEventListener(this.name,this,e),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class N{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){j(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,$,z),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const U=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol();class R{constructor(t,i){if(i!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return U&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const H=new Map,P=U?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new R(t+"",I))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var B,L,V,W;const q={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},D=(t,i)=>i!==t&&(i==i||t==t),J={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:D};class F extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=J){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||J}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(P(t))}else void 0!==t&&i.push(P(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{U?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=J){var e,o;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:q.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null}}K(t,i){var s,e,o;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,h=null!==(o=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==o?o:q.fromAttribute;this.Πh=n,this[n]=h(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||D)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Z,Q,G,X,Y;F.finalized=!0,F.shadowRootOptions={mode:"open"},null===(L=(B=globalThis).reactiveElementPlatformSupport)||void 0===L||L.call(B,{ReactiveElement:F}),(null!==(V=(W=globalThis).reactiveElementVersions)&&void 0!==V?V:W.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(K=(Y=globalThis).litElementVersions)&&void 0!==K?K:Y.litElementVersions=[]).push("3.0.0-rc.1");class tt extends F{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const r=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new z(i.insertBefore(d(),t),t,void 0,s)}return n.I(t),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return _}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=(Z=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(Z,{LitElement:tt}),null===(X=(G=globalThis).litElementPlatformSupport)||void 0===X||X.call(G,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,st=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function et(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):st(t,i)}var ot=function(t,i,s,e){for(var o,r=arguments.length,n=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(i,s,n):o(i,s))||n);return r>3&&n&&Object.defineProperty(i,s,n),n};let rt=class extends tt{render(){return y`<div>Pill goes here</div>`}};rt=ot([it("example-pill")],rt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt=function(t,i,s,e){for(var o,r=arguments.length,n=r<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(o=t[l])&&(n=(r<3?o(n):r>3?o(i,s,n):o(i,s))||n);return r>3&&n&&Object.defineProperty(i,s,n),n};let lt=class extends tt{constructor(){super(...arguments),this.email="hello@flerp.com",this.telephone="1-202-555-1111",this.count=0}render(){return y`
      <div class="card">
        <div class="card__top">
          <img
            class="card__image"
            src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          />
          <h3 class="card__title">Courtney Henry</h3>

          <dl class="card__details">
            <dt class="sr-only">Title</dt>
            <dd class="card__details-title">Investor Factors Associate</dd>
            <dt class="sr-only">Role</dt>
            <dd class="card__details-role">
              <example-pill></example-pill>
              <span class="card__details-role-pill">Admin</span>
            </dd>
          </dl>
        </div>
        <div class="card__bottom">
          <div class="card__bottom-inner">
            <div class="card__bottom-block">
              <a href="#" class="card__bottom-text">
                <svg
                  class="card__bottom-icon"
                  x-description="Heroicon name: solid/mail"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
                <span class="card__bottom-block-text">Email</span>
              </a>
            </div>
            <div class="card__bottom-block">
              <a href="tel:1-202-555-0104" class="card__bottom-text">
                <svg
                  class="card__bottom-icon"
                  x-description="Heroicon name: solid/phone"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  ></path>
                </svg>
                <span class="card__bottom-block-text">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `}foo(){return"foo"}};lt.styles=((t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof R)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=H.get(s);return void 0===e&&H.set(s,e=new R(s,I)),e})`
    *,
    ::after,
    ::before {
      box-sizing: border-box;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    blockquote,
    dd,
    dl,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    pre {
      margin: 0;
    }
    audio,
    canvas,
    embed,
    iframe,
    img,
    object,
    svg,
    video {
      display: block;
      vertical-align: middle;
    }
    a {
      text-decoration: inherit;
    }
    :host {
      display: block;
      max-width: 240px;
      text-align: center;
      background-color: #fff;

      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      -webkit-font-smoothing: antialiased;
      font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol', 'Noto Color Emoji';
    }
    .sr-only {
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
    .card__top {
      flex-direction: column;
      flex: 1 1 0%;
      padding: 2rem;
    }
    .card__image {
      border-radius: 9999px;
      flex-shrink: 0;
      width: 8rem;
      height: 8rem;
      margin-left: auto;
      margin-right: auto;
    }
    .card__title {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-top: 1.5rem;
    }
    .card__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      margin-top: 0.25rem;
    }
    .card__details-title {
      color: rgba(107, 114, 128, 1);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .card__details-role {
      margin-top: 0.75rem;
    }
    .card__details-role-pill {
      color: rgba(6, 95, 70, 1);
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 1rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      background-color: rgba(209, 250, 229);
      border-radius: 9999px;
    }
    .card__bottom {
      border-top: 1px solid rgba(229, 231, 235, 1);
    }
    .card__bottom-inner {
      display: flex;
    }
    .card__bottom-block {
      display: flex;
      flex: 1 1 0%;
      width: 0;
    }
    .card__bottom-text {
      color: rgba(55, 65, 81, 1);
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom-left-radius: 0.5rem;
      justify-content: center;
      align-items: center;
      flex: 1 1 0%;
      width: 0;
      display: inline-flex;
    }
    .card__bottom-icon {
      width: 1.25rem;
      height: 1.25rem;
    }
    .card__bottom-block-text {
      margin-left: 0.75rem;
    }
  `,nt([et()],lt.prototype,"email",void 0),nt([et()],lt.prototype,"telephone",void 0),nt([et({type:Number})],lt.prototype,"count",void 0),lt=nt([it("example-card")],lt);export{lt as ExampleCard};
