import{S as ot,i as st,s as it,a as lt,e as B,c as ct,b as J,g as pe,t as F,d as he,f as M,h as G,j as ft,o as Ae,k as ut,l as dt,m as pt,n as Ee,p as q,q as ht,r as mt,u as _t,v as Y,w as X,x as Ue,y as Z,z as x,A as fe}from"./chunks/index-167c35bc.js";import{S as tt,I as C,g as Ke,f as ze,a as ke,b as ue,s as V,i as We,c as ne,P as Ye,d as gt,e as yt,h as wt}from"./chunks/singletons-aa407fd2.js";function bt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function vt(a){return a.split("%25").map(decodeURI).join("%25")}function Et(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const kt=["href","pathname","search","searchParams","toString","toJSON"];function St(a,e){const n=new URL(a);for(const i of kt){let o=n[i];Object.defineProperty(n,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Lt="/__data.json";function It(a){return a.replace(/\/$/,"")+Lt}function At(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete($e(a)),me(a,e));const ae=new Map;function Ot(a,e){const n=$e(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:o,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ae.set(n,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return me(a,e)}function Pt(a,e,n){if(ae.size>0){const i=$e(a,n),o=ae.get(i);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);ae.delete(i)}}return me(e,n)}function $e(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${At(e.body)}"]`),i}const Ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Tt(a).map(i=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,h)=>{if(h%2){if(_.startsWith("x+"))return Se(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Se(String.fromCharCode(..._.slice(2).split("-").map(I=>parseInt(I,16))));const g=Ut.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,R,T,D]=g;return e.push({name:T,matcher:D,optional:!!w,rest:!!R,chained:R?h===1&&t[0]==="":!1}),R?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return Se(_)}).join("")}).join("")}/?$`),params:e}}function Nt(a){return!/^\([^)]+\)$/.test(a)}function Tt(a){return a.slice(1).split("/").filter(Nt)}function jt(a,e,n){const i={},o=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=o[t];if(f.chained&&f.rest&&d&&(_=_?d+"/"+_:d),d="",_===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let h=o.indexOf(void 0,t);if(h===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=_;else return}for(;h>=t;)o[h]=o[h-1],h-=1;continue}return}i[f.name]=_}}if(!d)return i}function Se(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(a,e,n,i){const o=new Set(e);return Object.entries(n).map(([f,[_,h,g]])=>{const{pattern:w,params:R}=$t(f),T={id:f,exec:D=>{const I=w.exec(D);if(I)return jt(I,R,i)},errors:[1,...g||[]].map(D=>a[D]),layouts:[0,...h||[]].map(t),leaf:d(_)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function d(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function Ct(a){let e,n,i;var o=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Y(o,d(a))),{c(){e&&X(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&Z(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){pe();const h=e;F(h.$$.fragment,1,0,()=>{x(h,1)}),he()}o?(e=Y(o,d(t)),X(e.$$.fragment),M(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&x(e,t)}}}function qt(a){let e,n,i;var o=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return o&&(e=Y(o,d(a))),{c(){e&&X(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&Z(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){pe();const h=e;F(h.$$.fragment,1,0,()=>{x(h,1)}),he()}o?(e=Y(o,d(t)),X(e.$$.fragment),M(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&x(e,t)}}}function Vt(a){let e,n,i;var o=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Y(o,d(a))),{c(){e&&X(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&Z(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){pe();const h=e;F(h.$$.fragment,1,0,()=>{x(h,1)}),he()}o?(e=Y(o,d(t)),X(e.$$.fragment),M(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&x(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ut("div"),n&&n.c(),this.h()},l(i){e=dt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=pt(e);n&&n.l(o),o.forEach(G),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,o){J(i,e,o),n&&n.m(e,null)},p(i,o){i[5]?n?n.p(i,o):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=ht(a[6])},l(n){e=mt(n,a[6])},m(n,i){J(n,e,i)},p(n,i){i&64&&_t(e,n[6])},d(n){n&&G(e)}}}function Bt(a){let e,n,i,o,d;const t=[qt,Ct],f=[];function _(g,w){return g[0][1]?0:1}e=_(a),n=f[e]=t[e](a);let h=a[4]&&Xe(a);return{c(){n.c(),i=lt(),h&&h.c(),o=B()},l(g){n.l(g),i=ct(g),h&&h.l(g),o=B()},m(g,w){f[e].m(g,w),J(g,i,w),h&&h.m(g,w),J(g,o,w),d=!0},p(g,[w]){let R=e;e=_(g),e===R?f[e].p(g,w):(pe(),F(f[R],1,1,()=>{f[R]=null}),he(),n=f[e],n?n.p(g,w):(n=f[e]=t[e](g),n.c()),M(n,1),n.m(i.parentNode,i)),g[4]?h?h.p(g,w):(h=Xe(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){d||(M(n),d=!0)},o(g){F(n),d=!1},d(g){f[e].d(g),g&&G(i),h&&h.d(g),g&&G(o)}}}function Ft(a,e,n){let{stores:i}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;ft(i.page.notify);let h=!1,g=!1,w=null;return Ae(()=>{const R=i.page.subscribe(()=>{h&&(n(5,g=!0),n(6,w=document.title||"untitled page"))});return n(4,h=!0),R}),a.$$set=R=>{"stores"in R&&n(7,i=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,d=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&i.page.set(o)},[d,t,f,_,h,g,w,i,o]}class Mt extends ot{constructor(e){super(),st(this,e,Ft,Bt,it,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Gt="modulepreload",Ht=function(a,e){return new URL(a,e).href},xe={},de=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Ht(d,i),d in xe)return;xe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const w=o[g];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":Gt,t||(h.as="script",h.crossOrigin=""),h.href=d,document.head.appendChild(h),t)return new Promise((g,w)=>{h.addEventListener("load",g),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Jt={},_e=[()=>de(()=>import("./chunks/0-16956672.js"),["./chunks/0-16956672.js","./components/layout.svelte-c29ad5be.js","./chunks/index-167c35bc.js"],import.meta.url),()=>de(()=>import("./chunks/1-6626eab3.js"),["./chunks/1-6626eab3.js","./components/error.svelte-51cd7944.js","./chunks/index-167c35bc.js","./chunks/singletons-aa407fd2.js","./chunks/index-daf517e5.js"],import.meta.url),()=>de(()=>import("./chunks/2-c20c844d.js"),["./chunks/2-c20c844d.js","./components/pages/_page.svelte-a1952fcb.js","./chunks/index-167c35bc.js","./chunks/index-daf517e5.js","./assets/_page-6641a91c.css"],import.meta.url),()=>de(()=>import("./chunks/3-aa7be404.js"),["./chunks/3-aa7be404.js","./components/pages/train/_page.svelte-26d2778b.js","./chunks/index-167c35bc.js"],import.meta.url)],nt=[],Kt={"/":[2],"/train":[3]},zt={handleError:({error:a})=>{console.error(a)}};let Oe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Qe=class{constructor(e,n){this.status=e,this.location=n}};async function Wt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,o])=>[i,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Yt=-1,Xt=-2,Zt=-3,xt=-4,Qt=-5,en=-6;function tn(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(o,d=!1){if(o===Yt)return;if(o===Zt)return NaN;if(o===xt)return 1/0;if(o===Qt)return-1/0;if(o===en)return-0;if(d)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let w=1;w<t.length;w+=1)_.add(i(t[w]));break;case"Map":const h=new Map;n[o]=h;for(let w=1;w<t.length;w+=2)h.set(i(t[w]),i(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let w=1;w<t.length;w+=2)g[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const h=t[_];h!==Xt&&(f[_]=i(h))}}else{const f={};n[o]=f;for(const _ in t){const h=t[_];f[_]=i(h)}}return n[o]}return i(0)}function nn(a){return a.filter(e=>e!=null)}const Re=Dt(_e,nt,Kt,Jt),at=_e[0],Pe=_e[1];at();Pe();let W={};try{W=JSON.parse(sessionStorage[tt])}catch{}function Le(a){W[a]=ne()}function an({target:a,base:e}){var Ge;const n=document.documentElement,i=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,h=!0,g=!1,w=!1,R=!1,T=!1,D,I=(Ge=history.state)==null?void 0:Ge[C];I||(I=Date.now(),history.replaceState({...history.state,[C]:I},"",location.href));const ge=W[I];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let H,Ne,re;async function Te(){re=re||Promise.resolve(),await re,re=null;const r=new URL(location.href),s=ie(r,!0);o=null,await De(s,r,[])}async function ye(r,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:u=!1},m,v){return typeof r=="string"&&(r=new URL(r,Ke(document))),ce({url:r,scroll:s?ne():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{u&&(T=!0)},blocked:()=>{},type:"goto"})}async function je(r){const s=ie(r,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return o={id:s.id,promise:Ve(s).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function oe(...r){const c=Re.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function De(r,s,c,l,p={},u){var v,b;Ne=p;let m=r&&await Ve(r);if(m||(m=await Me(s,{id:null},await te(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(r==null?void 0:r.url)||s,Ne!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(s.pathname))m=await se({status:500,error:await te(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ye(new URL(m.location,s).href,{},[...c,s.pathname],p),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await V.updated.check()&&await ee(s);if(i.length=0,T=!1,g=!0,l&&l.details){const{details:y}=l,k=y.replaceState?0:1;y.state[C]=I+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",s)}if(o=null,_?(t=m.state,m.props.page&&(m.props.page.url=s),D.$set(m.props)):Ce(m),l){const{scroll:y,keepfocus:k}=l,{activeElement:P}=document;await fe();const j=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!j&&await Ie(),h){const L=s.hash&&document.getElementById(s.hash.slice(1));y?scrollTo(y.x,y.y):L?L.scrollIntoView():scrollTo(0,0)}}else await fe();h=!0,m.props.page&&(H=m.props.page),u&&u(),g=!1}function Ce(r){var l;t=r.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),H=r.props.page,D=new Mt({target:a,props:{...r.props,stores:V},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),_=!0}async function Q({url:r,params:s,branch:c,status:l,error:p,route:u,form:m}){let v="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(v=L.slash);r.pathname=bt(r.pathname,v),r.search=r.search;const b={type:"loaded",state:{url:r,params:s,branch:c,error:p,route:u},props:{components:nn(c).map(L=>L.node.component)}};m!==void 0&&(b.props.form=m);let y={},k=!H,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],U=t.branch[L];(E==null?void 0:E.data)!==(U==null?void 0:U.data)&&(k=!0),E&&(y={...y,...E.data},k&&(b.props[`data_${P}`]=y),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0&&m!==H.form||k)&&(b.props.page={error:p,params:s,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(r),form:m??null,data:k?y:H.data}),b}async function we({loader:r,parent:s,url:c,params:l,route:p,server_data_node:u}){var y,k,P;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((y=b.universal)!=null&&y.load){let j=function(...E){for(const U of E){const{href:N}=new URL(U,c);v.dependencies.add(N)}};const L={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(E,U)=>(v.params.add(U),E[U])}),data:(u==null?void 0:u.data)??null,url:St(c,()=>{v.url=!0}),async fetch(E,U){let N;E instanceof Request?(N=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):N=E;const S=new URL(N,c).href;return j(S),_?Pt(N,S,U):Ot(N,U)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,s()}};m=await b.universal.load.call(null,L)??null,m=m?await Wt(m):null}return{node:b,loader:r,server:u,universal:(k=b.universal)!=null&&k.load?{type:"data",data:m,uses:v}:null,data:m??(u==null?void 0:u.data)??null,slash:((P=b.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function qe(r,s,c,l,p){if(T)return!0;if(!l)return!1;if(l.parent&&r||l.route&&s||l.url&&c)return!0;for(const u of l.params)if(p[u]!==t.params[u])return!0;for(const u of l.dependencies)if(i.some(m=>m(new URL(u))))return!0;return!1}function be(r,s){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?s??null:null}async function Ve({id:r,invalidating:s,url:c,params:l,route:p}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:u,layouts:m,leaf:v}=p,b=[...m,v];u.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let y=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?p.id!==t.route.id:!1,j=b.reduce((S,O,$)=>{var z;const A=t.branch[$],K=!!(O!=null&&O[0])&&((A==null?void 0:A.loader)!==O[1]||qe(S.some(Boolean),P,k,(z=A.server)==null?void 0:z.uses,l));return S.push(K),S},[]);if(j.some(Boolean)){try{y=await et(c,j)}catch(S){return se({status:500,error:await te(S,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const L=y==null?void 0:y.nodes;let E=!1;const U=b.map(async(S,O)=>{var z;if(!S)return;const $=t.branch[O],A=L==null?void 0:L[O];if((!A||A.type==="skip")&&S[1]===($==null?void 0:$.loader)&&!qe(E,P,k,(z=$.universal)==null?void 0:z.uses,l))return $;if(E=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:S[1],url:c,params:l,route:p,parent:async()=>{var Je;const He={};for(let ve=0;ve<O;ve+=1)Object.assign(He,(Je=await U[ve])==null?void 0:Je.data);return He},server_data_node:be(A===void 0&&S[0]?{type:"skip"}:A??null,$==null?void 0:$.server)})});for(const S of U)S.catch(()=>{});const N=[];for(let S=0;S<b.length;S+=1)if(b[S])try{N.push(await U[S])}catch(O){if(O instanceof Qe)return{type:"redirect",location:O.location};let $=500,A;if(L!=null&&L.includes(O))$=O.status??$,A=O.error;else if(O instanceof Oe)$=O.status,A=O.body;else{if(await V.updated.check())return await ee(c);A=await te(O,{params:l,url:c,route:{id:p.id}})}const K=await Be(S,N,u);return K?await Q({url:c,params:l,branch:N.slice(0,K.idx).concat(K.node),status:$,error:A,route:p}):await Me(c,{id:p.id},A,$)}else N.push(void 0);return await Q({url:c,params:l,branch:N,status:200,error:null,route:p,form:s?void 0:null})}async function Be(r,s,c){for(;r--;)if(c[r]){let l=r;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:r,error:s,url:c,route:l}){const p={};let u=null;if(nt[0]===0)try{const y=await et(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;u=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ee(c)}const v=await we({loader:at,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:be(u)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[v,b],status:r,error:s,route:null})}function ie(r,s){if(We(r,e))return;const c=le(r);for(const l of Re){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:s,route:l,params:Et(p),url:r}}}function le(r){return vt(r.pathname.slice(e.length)||"/")}function Fe({url:r,type:s,intent:c,delta:l}){var v,b;let p=!1;const u={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:s};l!==void 0&&(u.delta=l);const m={...u,cancel:()=>{p=!0}};return w||d.before_navigate.forEach(y=>y(m)),p?null:u}async function ce({url:r,scroll:s,keepfocus:c,redirect_chain:l,details:p,type:u,delta:m,nav_token:v,accepted:b,blocked:y}){const k=ie(r,!1),P=Fe({url:r,type:u,delta:m,intent:k});if(!P){y();return}Le(I),b(),w=!0,_&&V.navigating.set(P),await De(k,r,l,{scroll:s,keepfocus:c,details:p},v,()=>{w=!1,d.after_navigate.forEach(j=>j(P)),V.navigating.set(null)})}async function Me(r,s,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await se({status:l,error:c,url:r,route:s}):await ee(r)}function ee(r){return location.href=r.href,new Promise(()=>{})}function rt(){let r;n.addEventListener("mousemove",u=>{const m=u.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function s(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(u=>{for(const m of u)m.isIntersecting&&(oe(le(new URL(m.target.href))),c.unobserve(m.target))},{threshold:0});function l(u,m){const v=ze(u,n);if(!v)return;const{url:b,external:y}=ke(v,e);if(y)return;const k=ue(v);k.reload||(m<=k.preload_data?je(b):m<=k.preload_code&&oe(le(b)))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:m,external:v}=ke(u,e);if(v)continue;const b=ue(u);b.reload||(b.preload_code===Ye.viewport&&c.observe(u),b.preload_code===Ye.eager&&oe(le(m)))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Ae(()=>(d.after_navigate.push(r),()=>{const s=d.after_navigate.indexOf(r);d.after_navigate.splice(s,1)}))},before_navigate:r=>{Ae(()=>(d.before_navigate.push(r),()=>{const s=d.before_navigate.indexOf(r);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!_)&&(h=!1)},goto:(r,s={})=>ye(r,s,[]),invalidate:r=>{if(typeof r=="function")i.push(r);else{const{href:s}=new URL(r,location.href);i.push(c=>c.href===s)}return Te()},invalidateAll:()=>(T=!0,Te()),preload_data:async r=>{const s=new URL(r,Ke(document));await je(s)},preload_code:oe,apply_action:async r=>{if(r.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const u=await Q({url:s,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=u.state,D.$set(u.props),fe().then(Ie)}}else if(r.type==="redirect")ye(r.location,{invalidateAll:!0},[]);else{const s={form:r.data,page:{...H,form:r.data,status:r.status}};D.$set(s),r.type==="success"&&fe().then(Ie)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!w){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(p))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(I);try{sessionStorage[tt]=JSON.stringify(W)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||rt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=ze(s.composedPath()[0],n);if(!c)return;const{url:l,external:p,target:u}=ke(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const m=ue(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||m.reload){Fe({url:l,type:"link"})||s.preventDefault(),w=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){R=!0,Le(I),t.url=l,V.page.set({...H,url:l}),V.page.notify();return}ce({url:l,scroll:m.noscroll?ne():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(u,e))return;const m=s.target,{noscroll:v,reload:b}=ue(m);if(b)return;s.preventDefault(),s.stopPropagation();const y=new FormData(m),k=l==null?void 0:l.getAttribute("name");k&&y.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(y).toString(),ce({url:u,scroll:v?ne():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[C]){if(s.state[C]===I)return;const l=W[s.state[C]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){W[I]=ne(),I=s.state[C],scrollTo(l.x,l.y);return}const p=s.state[C]-I;ce({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[C]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[C]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&V.navigating.set(null)})},_hydrate:async({status:r=200,error:s,node_ids:c,params:l,route:p,data:u,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=ie(v,!1)||{});let b;try{const y=c.map(async(k,P)=>{const j=u[P];return we({loader:_e[k],url:v,params:l,route:p,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await y[E]).data);return L},server_data_node:be(j)})});b=await Q({url:v,params:l,branch:await Promise.all(y),status:r,error:s,form:m,route:Re.find(({id:k})=>k===p.id)??null})}catch(y){if(y instanceof Qe){await ee(new URL(y.location,location.href));return}b=await se({status:y instanceof Oe?y.status:500,error:await te(y,{url:v,params:l,route:p}),url:v,route:p})}Ce(b)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=It(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(n.href),o=await i.json();if(!i.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=tn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function te(a,e){return a instanceof Oe?a.body:zt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var o;i((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function cn({env:a,hydrate:e,paths:n,target:i,version:o}){gt(n),wt(o);const d=an({target:i,base:n.base});yt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{cn as start};
