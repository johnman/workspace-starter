/******/ var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/workspace/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@openfin/workspace/index.js ***!
  \******************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={703:(e,t,n)=>{n.r(t),n.d(t,{CLIAction:()=>l.Pt,CLIFilterOptionType:()=>l.el,CLITemplate:()=>l.yW,deregister:()=>et,hide:()=>nt,register:()=>Ye,show:()=>tt});var o={};n.r(o),n.d(o,{subscribe:()=>ae});var r={};n.r(r),n.d(r,{create:()=>He});var i=n(678),s=n(532),a=n(436);const c="home";var d;!function(e){e.Commands="home-commands"}(d||(d={}));var u,p=n(806),l=(n(298),n(758));n(114),n(109),n(427);!function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(u||(u={}));var f=n(316);const w="all",g="0",h="5",y="6",v=()=>{};function m(e,t){return e?`${e}-${t}`:t}function S(e){return`__search-${e}-topic__`}const P=new Map;function C(e,t){P.has(e)||P.set(e,new Set),P.get(e).add(t)}function k(e,t){const n=P.get(e);n&&n.delete(t)}const W=new Map;function R(e,t){W.has(e)||W.set(e,new Set),W.get(e).add(t)}function T(e,t){const n=W.get(e);n&&n.delete(t)}const I=new Map;async function b(e,t){I.has(e)||I.set(e,new Map),I.get(e).set(t.id,t);const n=P.get(e);if(!n)return;const o=[...n].map((e=>e()));await Promise.all(o)}async function D(e,t){const n=I.get(e);if(!n)return;n.delete(t);const o=W.get(e);if(!o)return;const r=[...o].map((e=>e()));await Promise.all(r)}function B(e){return I.get(e)?[...I.get(e).values()]:[]}function F(e){const t=I.get(e);t&&t.clear()}function L(e,t){const n=I.get(e);return n?n.get(t):null}function A(e,t,n){return{...e,action:n||{...e.actions[0],trigger:f.px.UserAction},dispatcherIdentity:t}}function O(e,t,n="ascending"){const o=e||[];if(!t?.length)return o;const r=[],i=new Map;t.forEach((e=>{if(e.key)return i.set(e.key,e);r.push(e)}));let s=o.map((e=>{const{key:t}=e;if(t&&i.has(t)){const e=i.get(t);return i.delete(t),e}return e}));return s.push(...i.values(),...r),s="ascending"===n?s.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):s.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),s}function x(e){const t={};let n=[];let o=[];let r=u.Initial;t.getStatus=()=>r,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,n?.length&&t.onChange()},t.getRevokedBuffer=()=>o,t.setRevokedBuffer=e=>{o=e,o?.length&&t.onChange()},t.onChange=v;const i={};return t.res=i,i.close=()=>{r!==u.Close&&(r=u.Close,t.onChange())},i.open=()=>{r!==u.Open&&(r=u.Open,t.onChange())},i.respond=n=>{const o=O(t.getResultBuffer(),n,e);t.setResultBuffer(o)},i.revoke=(...e)=>{const n=new Set(e),o=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(o),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function E(e,t,n){const o=new Set;let r=!1;return{close:()=>{r=!0;for(const e of o)e()},req:{id:t,topic:e,...n,context:n?.context||{},onClose:e=>{o.add(e),r&&e()},removeListener:e=>{o.delete(e)}}}}function V(){return{name:fin.me.name,uuid:fin.me.uuid}}function M(){let e;try{const t=fin.Platform.getCurrentSync();if(!t?.identity)return;e=t.identity.uuid}catch(e){}return e}const _="deregistered or does not exist",$=new Error(`provider ${_}`),q=new Error("provider with name already exists"),G=new Error("bad payload"),H=new Error("subscription rejected"),N=new Error(`channel ${_}`),U=new Map;function j(e){const t=X(e);if(t)return t;throw N}function X(e){const t=U.get(e);if(t)return t}function K(e,t){U.set(e,t)}const J=new Map;function z(e){J.has(e)||J.set(e,new Map);const t=J.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function Z(e,t){return(await j(e)).dispatch(g,t)}function Q({namespacedTopic:e,topic:t}){const n=L.bind(null,e),o=z(e),r=Z.bind(null,e);return async(e,i)=>{if(!e||!e.id||!e.providerId){const e=G;return{error:e.message}}const{id:s,providerId:a}=e,c=n(a);if(!c){const e=$;return{error:e.message}}const d=o.getRequestsForIdentity(i);let u=d.get(e.id);u||(u=E(t,s,e),d.set(e.id,u));const p=x(),l=()=>{const e=p.getResultBuffer();p.setResultBuffer([]);const t=p.getRevokedBuffer();p.setRevokedBuffer([]);const n=p.getStatus();r({id:s,providerId:a,results:e,revoked:t,status:n})};let f=!0,w=!1;p.onChange=()=>{if(f)return f=!1,void l();w||(w=!0,setTimeout((()=>{w=!1,l()}),100))};try{const{results:e,context:t}=await c.onUserInput(u.req,p.res),n=p.getStatus();return{id:s,providerId:a,status:n,results:e,context:t}}catch(e){return{id:s,providerId:a,error:e.message}}}}async function Y(e,t,n){const o=n||await j(e),r=V(),i={identity:r,...t,onUserInput:void 0,onResultDispatch:void 0},s=await o.dispatch("2",i);return await b(e,{identity:r,...t}),s}async function ee(e,t){const n=await j(e);return await n.dispatch("3",t),D(e,t)}async function te(e,t,n,o){const r=A(n,V(),o),i=L(e,t);if(i){const{onResultDispatch:e}=i;if(!e)return;return e(r)}const s={providerId:t,result:r};return(await j(e)).dispatch(h,s)}async function ne(e,t){const n={...t,context:t?.context||{}},o={},r=async function*(e,t,{setState:n}){const o=await j(e);for(;;){const e=await o.dispatch("1",t),r=e.error;if(r)throw new Error(r);const i=e;if(t.id=i.id,n(i.state),i.done)return i.value;yield i.value}}(e,n,{setState:e=>{o.state=e}});let i=await r.next();return o.id=n.id,o.close=()=>{!async function(e,t){(await j(e)).dispatch(y,{id:t})}(e,o.id)},o.next=()=>{if(i){const e=i;return i=void 0,e}return r.next()},o}async function oe(e){return(await j(e)).dispatch("4",null)}async function re(e){const t=await j(e);var n;n=e,U.delete(n),F(e),await t.disconnect()}function ie(e){const{namespacedTopic:t}=e,n=z(t);return async o=>{if(!X(t))return;const r=n.getRequestsForIdentity(o);for(const{req:e,close:t}of r.values())t(),r.delete(e.id);K(t,(async e=>{const{namespacedTopic:t}=e,n=await se(e);for(const e of B(t))await Y(t,e,n);return n})(e))}}async function se(e){const{namespacedTopic:t}=e,n=S(t),o=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return o.register(g,Q(e)),o.register(y,function(e){const t=z(e);return(e,n)=>{const o=t.getRequestsForIdentity(n),r=o.get(e.id);r&&(r.close(),o.delete(e.id))}}(t)),o.register(h,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=L(e,t.providerId);if(!o)return;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o.onDisconnection(ie(e)),o}async function ae(e){const t=("string"==typeof e?e:e?.topic)||w,n=("string"==typeof e?null:e?.uuid)||M(),o=m(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=X(o);return i||(i=se(r),K(o,i),await i),{getAllProviders:oe.bind(null,o),register:Y.bind(null,o),search:ne.bind(null,o),deregister:ee.bind(null,o),dispatch:te.bind(null,o),disconnect:re.bind(null,o)}}const ce=new Map;function de(e){const t=ue(e);if(t)return t;throw N}function ue(e){const t=ce.get(e);if(t)return t}const pe=new Map;function le(e,t){pe.has(e)||pe.set(e,new Set),pe.get(e).add(t)}function fe(e,t){const n=pe.get(e);n&&n.delete(t)}function we(e){return[...B(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}async function ge(e,t){if(L(e,t.id))throw new Error("provider with name already exists");const n=V();await b(e,{identity:n,...t})}function he(e,t){D(e,t)}async function ye(e,t,n,o){const r=L(e,t);if(!r)throw $;const{onResultDispatch:i}=r;if(!i)return;return i(A(n,V(),o))}async function*ve(e,t,n){const o=function(e,t){const n=[],o=[],r=[],i=[];for(const s of e){const e=x(s.scoreOrder),a={results:[],provider:{id:s.id,identity:s.identity,title:s.title,scoreOrder:s.scoreOrder,icon:s.icon,dispatchFocusEvents:s.dispatchFocusEvents}};n.push(a),o.push(e);const c=(async()=>{try{const{results:n,context:o}=await s.onUserInput(t,e.res);a.results=O(a.results,n),a.context={...a.context,...o}}catch(e){a.error=e}})();c.finally((()=>{c.done=!0})),i.push(c),r.push(r.length)}return{providerResponses:n,listenerResponses:o,openListenerResponses:r,initialResponsePromises:i}}(t.targets?t.targets.map((t=>L(e,t))).filter((e=>!!e)):[...B(e).filter((e=>!e.hidden))],t),{providerResponses:r,listenerResponses:i}=o;let{openListenerResponses:s,initialResponsePromises:a}=o,c=f.De.Fetching;const d=e=>{c=e,n.setState(c)};let p,l=!1;t.onClose((()=>{l=!0,p&&p()}));do{let e=!1;if(a.length){const t=[];for(const n of a)n.done?e=!0:t.push(n);a=t,a.length||(d(f.De.Fetched),e=!0)}let t,n=!1;const o=()=>{n=!0,t&&t()},w=[];for(const t of s){const n=i[t],s=r[t],a=n.getStatus();(a===u.Open||c===f.De.Fetching&&a===u.Initial)&&(w.push(t),n.onChange=o);const d=n.getResultBuffer();d.length&&(n.setResultBuffer([]),s.results=O(s.results,d),e=!0);const p=n.getRevokedBuffer();if(p.length){n.setRevokedBuffer([]);const t=new Set(p);s.results=s.results.filter((({key:e})=>!t.has(e))),e=!0}}if(s=w,e&&(yield r),l)break;n||(s.length||a.length)&&await Promise.race([...a,new Promise((e=>{t=e})),new Promise((e=>{p=e}))])}while(s.length||a.length);return d(f.De.Complete),r}let me=0;function Se({namespacedTopic:e,topic:t},n){me+=1;const o=E(t,me.toString(),n),r=ve(e,o.req,{setState:e=>{r.state=e}});return r.id=me.toString(),r.close=o.close,r.state=f.De.Fetching,r}const Pe=new Map;function Ce(e,t){return`${e}:${t}`}function ke(e){return async(t,...n)=>{if(!t)return{error:G.message};let o;if(t.id)o=Ce(e.namespacedTopic,t.id);else{const n=Se(e,t);o=Ce(e.namespacedTopic,n.id),t.id=n.id,Pe.set(o,{generator:n})}const r=Pe.get(o);clearTimeout(r.timeout);const i=await r.generator.next();return r.timeout=function(e){return window.setTimeout((()=>{Pe.delete(e)}),1e4)}(o),{...i,id:t.id,state:r.generator.state}}}function We(e,t,n){return de(e).dispatch(t,y,{id:n})}function Re(e){return t=>function(e,t){const n=Ce(e,t),o=Pe.get(n);o&&o.generator.close()}(e,t.id)}async function Te(e,t,{id:n,query:o,context:r,targets:i}){const s=de(e),a={id:n,query:o,context:r,targets:i,providerId:t.id},c=await s.dispatch(t.identity,g,a),d=c.error;if(d)throw new Error(d);return c}const Ie=new Map;function be(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const De=new Map;function Be(e,t,n){return`${e}:${t}:${n}`}function Fe(e,t){const n=be.bind(null,e,t.identity),o=We.bind(null,e,t.identity),r=Te.bind(null,e,t);return async(i,s)=>{const a=n(i.id);if(!Ie.has(a)){const e=()=>{o(i.id),Ie.delete(a)};Ie.set(a,e),i.onClose(e)}const c=Be(e,t.id,i.id),d=()=>{De.delete(c),s.close()};i.onClose(d),De.set(c,(e=>{e.results?.length&&s.respond(e.results),e.revoked?.length&&s.revoke(...e.revoked),e.status===u.Open&&s.open(),e.status===u.Close&&d()}));const p=await r(i);return p.status===u.Open&&s.open(),p.status!==u.Close&&p.status!==u.Initial||d(),p}}function Le(e,t){return async n=>{const o=de(e),r={providerId:t.id,result:n};return o.dispatch(t.identity,h,r)}}const Ae=new Map;function Oe(e,t){return`${e}-${t.name}-${t.uuid}`}function xe(e){return async(t,n)=>{if(!t||!t.id)return void new Error(JSON.stringify(t));if(L(e,t.id))throw q;return t.identity=n,await async function(e,t){const n=Oe(e,t.identity);Ae.has(n)||Ae.set(n,[]),Ae.get(n).push(t.id),await b(e,{...t,onUserInput:Fe(e,t),onResultDispatch:Le(e,t)})}(e,t),{workspaceVersion:i.u0,clientAPIVersion:t.clientAPIVersion}}}function Ee(e){return t=>{t&&function(e,t){const n=L(e,t);if(!n)return;const o=Oe(e,n.identity),r=Ae.get(o);if(r){const n=r.findIndex((e=>e===t));-1!==n&&(r.splice(n,1),D(e,t))}}(e,t)}}const Ve=new Map;function Me(e,t){Ve.has(e)||Ve.set(e,new Set),Ve.get(e).add(t)}function _e(e,t){const n=Ve.get(e);n&&n.delete(t)}function $e(e){return async t=>{!function(e,t){const n=Oe(e,t),o=Ae.get(n);if(o){for(const t of o)D(e,t);Ae.delete(n)}}(e,t);const n=Ve.get(e);n&&n.forEach((e=>e(t)))}}async function qe(e){const{namespacedTopic:t}=e,n=S(e.namespacedTopic),o=await(r=n,fin.InterApplicationBus.Channel.create(r));var r;return o.onConnection(function({namespacedTopic:e}){return async t=>{const n=pe.get(e);if(n)for(const e of n)if(!await e(t))throw H}}(e)),o.onDisconnection($e(t)),o.register(y,Re(t)),o.register(g,function(e){return t=>{const n=Be(e,t.providerId,t.id),o=De.get(n);o&&o(t)}}(t)),o.register("2",xe(t)),o.register("3",Ee(t)),o.register("4",function(e){return async()=>we(e)}(t)),o.register("1",ke(e)),o.register(h,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=L(e,t.providerId);if(!o)throw $;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o}async function Ge(e){const t=de(e);var n;n=e,ce.delete(n),await t.destroy(),F(e)}async function He(e){const t=("string"==typeof e?e:e?.topic)||w,n=M(),o=m(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=ue(o);i||(i=await qe(r),function(e,t){ce.set(e,t)}(o,i));const s=fe.bind(null,o),a=_e.bind(null,o),c=k.bind(null,o),d=T.bind(null,o);return{getAllProviders:we.bind(null,o),search:Se.bind(null,r),register:ge.bind(null,o),deregister:he.bind(null,o),onSubscription:le.bind(null,o),onDisconnect:Me.bind(null,o),onRegister:C.bind(null,o),onDeregister:R.bind(null,o),dispatch:ye.bind(null,r),disconnect:Ge.bind(null,o),removeListener:e=>{s(e),a(e),c(e),d(e)}}}const{create:Ne}=r,{subscribe:Ue}=o,je={create:Ne,subscribe:Ue,defaultTopic:"all"},Xe=()=>{window.search=je},Ke=e=>{const t=()=>{Xe(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){Xe();const e="load",t=Ke(e);window.addEventListener(e,t);const n="DOMContentLoaded",o=Ke(n);window.addEventListener(n,o)}const Je=new Map;async function ze(){await async function(e){Je.set(e,await Ue({topic:e,uuid:p.q9.Workspace}))}(c)}let Ze;async function Qe(e){return await async function(){return Ze||(Ze=ze()),Ze}(),Je.get(e)}const Ye=async e=>{if(!e.icon)throw new Error(`${e.id} provider needs to have icon property defined.`);await(0,a.aB)();const t=await Qe(c);try{e.clientAPIVersion=i.u0;const n=await t.register(e);return(0,s.ck)({allowed:!0,componentVersion:n?.workspaceVersion}),n}catch(e){throw(0,s.ck)({allowed:!1,rejectionCode:e.message}),e}},et=async e=>{await(0,a.aB)();return(await Qe(c)).deregister(e)};async function tt(){return(await(0,a.Xl)()).dispatch(a.WF.ShowHome,void 0)}async function nt(){return(await(0,a.Xl)()).dispatch(a.WF.HideHome,void 0)}},298:(e,t,n)=>{n.d(t,{p:()=>o.px,w:()=>o.wt});var o=n(316)},427:(e,t,n)=>{var o;n.d(t,{v:()=>o}),function(e){e.ActionButton="ActionButton",e.DropdownButton="DropdownButton"}(o||(o={}))},758:(e,t,n)=>{var o,r,i;n.d(t,{Pt:()=>o,el:()=>i,yW:()=>r}),function(e){e.Suggestion="suggestion"}(o||(o={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(r||(r={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={}))},114:(e,t,n)=>{var o,r;n.d(t,{L:()=>o,T:()=>r}),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(o||(o={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(r||(r={}))},109:(e,t,n)=>{n.d(t,{Go:()=>r,ZJ:()=>s,bI:()=>i,p6:()=>o});const o={Container:"Container",Button:"Button"},r={Text:"Text",Image:"Image",List:"List"},i={...o,...r};var s;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(s||(s={}))},528:(e,t,n)=>{n.r(t),n.d(t,{AppManifestType:()=>s.L,StorefrontTemplate:()=>s.T,deregister:()=>g,hide:()=>h,register:()=>w,show:()=>y});var o=n(532),r=n(436),i=n(82),s=n(114),a=n(678);let c,d=!1;async function u(e,t,n){const o=await(0,r.Dm)();try{return await o.dispatch(e.action,e.payload)}catch(r){if(-1!==r.toString().indexOf(e.action))return d=!0,await o.dispatch(t.action,t.payload),n;throw r}}const p=new Map,l=e=>{if(!p.has(e))throw new Error(`Storefront Provider with id ${e} is not registered`);return p.get(e)},f=async e=>{const t=await(0,r.Xl)();if(p.has(e.id))throw new Error(`Storefront provider with id ${e.id} already registered`);return p.set(e.id,e),(e=>{e.isStorefrontActionsRegistered||(e.isStorefrontActionsRegistered=!0,e.register(r.WF.GetStorefrontProviderApps,(e=>l(e).getApps())),e.register(r.WF.GetStorefrontProviderFooter,(e=>l(e).getFooter())),e.register(r.WF.GetStorefrontProviderLandingPage,(e=>l(e).getLandingPage())),e.register(r.WF.GetStorefrontProviderNavigation,(e=>l(e).getNavigation())),e.register(r.WF.LaunchStorefrontProviderApp,(({id:e,app:t})=>l(e).launchApp(t))))})(t),e.clientAPIVersion=a.u0,u({action:r.WF.RegisterProvider,payload:{providerType:i.lP.Storefront,info:e}},{action:r.WF.RegisterStorefrontProvider,payload:e},{workspaceVersion:"unknown"})},w=e=>(c=new Promise((async(t,n)=>{try{const n=await f(e);(0,o.d9)({allowed:!0,componentVersion:n?.workspaceVersion}),t({clientAPIVersion:a.u0,workspaceVersion:n.workspaceVersion||""})}catch(e){(0,o.d9)({allowed:!1,rejectionCode:e.message}),n(e)}})),c),g=async e=>(await c,p.delete(e),await(0,r.aB)(),u({action:r.WF.DeregisterProvider,payload:{providerType:i.lP.Storefront,id:e}},{action:r.WF.DeregisterStorefrontProvider,payload:e})),h=async()=>(await c,await(0,r.aB)(),u({action:r.WF.HideProviderWindow,payload:{providerType:i.lP.Storefront}},{action:r.WF.HideStorefront})),y=async()=>(await c,await(0,r.aB)(),u({action:r.WF.ShowProviderWindow,payload:{providerType:i.lP.Storefront}},{action:r.WF.ShowStorefront}))},436:(e,t,n)=>{n.d(t,{WF:()=>s,Dm:()=>a,Xl:()=>p,aB:()=>u});var o=n(678);const r=o.Ax&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));var i=n(121);var s;!function(e){e.RegisterProvider="register-provider",e.DeregisterProvider="deregister-provider",e.CreateProviderWindow="create-provider-window",e.GetProviders="get-providers",e.ShowProviderWindow="show-provider-window",e.HideProviderWindow="hide-provider-window",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme",e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.HideStorefront="hide-storefront",e.ShowStorefront="show-storefront"}(s||(s={}));const a=function(e){let t;return()=>{if(!o.sS)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await r;const n={clientAPIVersion:o.u0},i=await fin.InterApplicationBus.Channel.connect(e,{payload:n});return i.onDisconnection((async()=>{t=void 0})),i})().then((e=>e)).catch((n=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${n}`)}))),t}}("__of_workspace_protocol__"),c="isLaunchedViaLib",d=e=>{const t=new URL(e);return t.searchParams.append(c,"true"),t.toString()},u=async()=>{if(!await(0,i.JV)(i.iW))return(o.ZK||-1===navigator.userAgent.indexOf("Win"))&&await fin.Application.startFromManifest(d(o.aW)),fin.System.openUrlWithBrowser(d(o.GX))},p=async()=>(await u(),a())},82:(e,t,n)=>{n.d(t,{R8:()=>s,X_:()=>i,lP:()=>o});var o,r=n(436);!function(e){e.Storefront="storefront",e.Dock="dock"}(o||(o={}));const i=async e=>(await(0,r.Dm)()).dispatch(r.WF.ShowProviderWindow,{providerType:e}),s=async e=>(await(0,r.Dm)()).dispatch(r.WF.HideProviderWindow,{providerType:e})},806:(e,t,n)=>{n.d(t,{q9:()=>o});var o,r,i,s=n(678);!function(e){e.Workspace="openfin-browser"}(o||(o={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(r||(r={})),function(e){e.FinProtocol="fin-protocol"}(i||(i={}));s.AB,o.Workspace},678:(e,t,n)=>{var o;n.d(t,{AB:()=>a,Ax:()=>i,GX:()=>u,ZK:()=>d,aW:()=>p,oC:()=>c,sS:()=>r,u0:()=>f}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(o||(o={}));const r="undefined"!=typeof window&&"undefined"!=typeof fin,i=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),s=i?window.origin:o.Local,a=r&&fin.me.uuid,c=r&&fin.me.name,d=(r&&fin.me.entityType,"prod"===o.Local),u=(o.Dev,o.Staging,o.Prod,"fins://system-apps/workspace"),p="https://cdn.openfin.co/workspace/9.0.9/app.json",l=e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e,f=(l("https://cdn.openfin.co/workspace/9.0.9"),l("https://cdn.openfin.co/workspace/9.0.9"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&l(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&l(WORKSPACE_DOCS_CLIENT_URL),"9.0.9")},532:(e,t,n)=>{n.d(t,{Wn:()=>d,ck:()=>a,d9:()=>c});var o,r=n(678),i=n(121);!function(e){e.Browser="Browser",e.Dock="Dock",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(o||(o={}));const s=async(e,t)=>{const n={apiVersion:t.apiVersion||r.u0,componentName:e,componentVersion:t.componentVersion||r.u0,allowed:t.allowed,rejectionCode:t.rejectionCode};fin.System.registerUsage({type:"workspace-licensing",data:n})},a=async e=>{i.OI.uuid===i.Gi.uuid&&i.OI.name===i.Gi.name||s(o.Home,e)},c=async e=>{s(o.Storefront,e)},d=async e=>{s(o.Dock,e)}},121:(e,t,n)=>{n.d(t,{Gi:()=>c,JV:()=>p,OI:()=>d,iW:()=>u});var o,r,i=n(806),s=n(678);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(o||(o={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.Closed="closed",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(r||(r={}));function a(e){if(!s.sS)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const c={name:s.oC,uuid:s.AB};const d={name:o.Home,uuid:i.q9.Workspace},u=(o.Dock,i.q9.Workspace,o.Storefront,i.q9.Workspace,{name:i.q9.Workspace,uuid:i.q9.Workspace});const p=e=>a(e).getOptions().then((()=>!0)).catch((()=>!1))},316:(e,t,n)=>{var o,r,i;n.d(t,{De:()=>o,px:()=>r,wt:()=>i}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(o||(o={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(r||(r={})),function(e){e.Active="active",e.Default="default"}(i||(i={}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{ActionTrigger:()=>P.p,AppManifestType:()=>W.L,ButtonStyle:()=>C.ZJ,CLIAction:()=>k.Pt,CLIFilterOptionType:()=>k.el,CLITemplate:()=>k.yW,ContainerTemplateFragmentNames:()=>C.p6,Dock:()=>e,DockButtonNames:()=>c.v,Home:()=>h,Legacy:()=>t,PresentationTemplateFragmentNames:()=>C.Go,SearchTagBackground:()=>P.w,Storefront:()=>S,StorefrontTemplate:()=>W.T,TemplateFragmentTypes:()=>C.bI});var e={};n.r(e),n.d(e,{DockButtonNames:()=>c.v,deregister:()=>l,minimize:()=>f,register:()=>p,show:()=>w});var t={};n.r(t),n.d(t,{getPages:()=>v,getWorkspaces:()=>m});var r=n(678),i=n(532),s=n(436),a=n(82),c=n(427);let d,u=!1;const p=e=>(d=new Promise((async(t,n)=>{try{const n=await(async e=>{const t=await(0,s.Xl)();if(u)throw new Error("A dock provider for the platform is already registered.");return u=!0,e.clientAPIVersion=r.u0,t.dispatch(s.WF.RegisterProvider,{providerType:a.lP.Dock,info:e})})(e);(0,i.Wn)({allowed:!0,componentVersion:n?.workspaceVersion}),t({clientAPIVersion:r.u0,workspaceVersion:n.workspaceVersion||""})}catch(e){(0,i.Wn)({allowed:!1,rejectionCode:e.message}),n(e),d=null}})),d),l=async()=>{await d,u=!1;return(await(0,s.Xl)()).dispatch(s.WF.DeregisterProvider,{providerType:a.lP.Dock})},f=async()=>{await d,await(0,s.aB)(),await(0,a.R8)(a.lP.Dock)},w=async()=>{await d,await(0,s.aB)(),await(0,a.X_)(a.lP.Dock)};var g,h=n(703);n(121);!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(g||(g={}));new Map;var y;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort",e.DockPosition="DockPosition"}(y||(y={}));const v=()=>async function(){return(await(0,s.Dm)()).dispatch(s.WF.GetLegacyPages,void 0)}(),m=()=>(async()=>(await(0,s.Dm)()).dispatch(s.WF.GetLegacyWorkspaces,void 0))();var S=n(528),P=n(298),C=n(109),k=n(758),W=n(114)})(),module.exports=o})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/lodash/_DataView.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_DataView.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "../../node_modules/lodash/_Map.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/_Map.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../../node_modules/lodash/_Promise.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_Promise.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "../../node_modules/lodash/_Set.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/_Set.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "../../node_modules/lodash/_Symbol.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_Symbol.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../node_modules/lodash/_WeakMap.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_WeakMap.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "../../node_modules/lodash/_arrayLikeKeys.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_arrayLikeKeys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../../node_modules/lodash/_arrayMap.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_arrayMap.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "../../node_modules/lodash/_asciiToArray.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_asciiToArray.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "../../node_modules/lodash/_baseGetTag.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseGetTag.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsArguments.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_baseIsArguments.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsNative.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_baseIsNative.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsTypedArray.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/_baseIsTypedArray.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/_baseKeys.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_baseKeys.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../../node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "../../node_modules/lodash/_baseTimes.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseTimes.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../../node_modules/lodash/_baseUnary.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseUnary.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../../node_modules/lodash/_baseValues.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseValues.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "../../node_modules/lodash/_copyArray.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_copyArray.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../../node_modules/lodash/_coreJsData.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_coreJsData.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../../node_modules/lodash/_freeGlobal.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_freeGlobal.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "../../node_modules/lodash/_getNative.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getNative.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../../node_modules/lodash/_getRawTag.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getRawTag.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../node_modules/lodash/_getTag.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_getTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "../../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "../../node_modules/lodash/_getValue.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_getValue.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../../node_modules/lodash/_hasUnicode.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_hasUnicode.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "../../node_modules/lodash/_isIndex.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_isIndex.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../../node_modules/lodash/_isMasked.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_isMasked.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../../node_modules/lodash/_isPrototype.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_isPrototype.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../../node_modules/lodash/_iteratorToArray.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_iteratorToArray.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

module.exports = iteratorToArray;


/***/ }),

/***/ "../../node_modules/lodash/_mapToArray.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_mapToArray.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "../../node_modules/lodash/_nativeKeys.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_nativeKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../node_modules/lodash/_nodeUtil.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_nodeUtil.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "../../node_modules/lodash/_objectToString.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_objectToString.js ***!
  \****************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../node_modules/lodash/_overArg.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_overArg.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../../node_modules/lodash/_root.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/_root.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../node_modules/lodash/_setToArray.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_setToArray.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "../../node_modules/lodash/_stringToArray.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_stringToArray.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "../../node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "../../node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "../../node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "../../node_modules/lodash/_toSource.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_toSource.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../../node_modules/lodash/_unicodeToArray.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_unicodeToArray.js ***!
  \****************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "../../node_modules/lodash/isArguments.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArguments.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../../node_modules/lodash/isArray.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/isArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../../node_modules/lodash/isArrayLike.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArrayLike.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../../node_modules/lodash/isBuffer.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "../../node_modules/lodash/isFunction.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/isFunction.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../../node_modules/lodash/isLength.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isLength.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../../node_modules/lodash/isObject.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isObject.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../node_modules/lodash/isObjectLike.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isObjectLike.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../node_modules/lodash/isString.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "../../node_modules/lodash/isTypedArray.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/keys.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/keys.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../../node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "../../node_modules/lodash/stubFalse.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/stubFalse.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../node_modules/lodash/toArray.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/toArray.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../../node_modules/lodash/_copyArray.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../node_modules/lodash/_getTag.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "../../node_modules/lodash/isString.js"),
    iteratorToArray = __webpack_require__(/*! ./_iteratorToArray */ "../../node_modules/lodash/_iteratorToArray.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "../../node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../../node_modules/lodash/_setToArray.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "../../node_modules/lodash/_stringToArray.js"),
    values = __webpack_require__(/*! ./values */ "../../node_modules/lodash/values.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

module.exports = toArray;


/***/ }),

/***/ "../../node_modules/lodash/values.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/values.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseValues = __webpack_require__(/*! ./_baseValues */ "../../node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "../../node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "../../node_modules/node-emoji/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/node-emoji/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/emoji */ "../../node_modules/node-emoji/lib/emoji.js");

/***/ }),

/***/ "../../node_modules/node-emoji/lib/emoji.js":
/*!**************************************************!*\
  !*** ../../node_modules/node-emoji/lib/emoji.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*jslint node: true*/
var toArray = __webpack_require__(/*! lodash/toArray */ "../../node_modules/lodash/toArray.js");
var emojiByName = __webpack_require__(/*! ./emoji.json */ "../../node_modules/node-emoji/lib/emoji.json");

"use strict";

/**
 * regex to parse emoji in a string - finds emoji, e.g. :coffee:
 */
var emojiNameRegex = /:([a-zA-Z0-9_\-\+]+):/g;

/**
 * regex to trim whitespace
 * use instead of String.prototype.trim() for IE8 support
 */
var trimSpaceRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

/**
 * Removes colons on either side
 * of the string if present
 * @param  {string} str
 * @return {string}
 */
function stripColons (str) {
  var colonIndex = str.indexOf(':');
  if (colonIndex > -1) {
    // :emoji: (http://www.emoji-cheat-sheet.com/)
    if (colonIndex === str.length - 1) {
      str = str.substring(0, colonIndex);
      return stripColons(str);
    } else {
      str = str.substr(colonIndex + 1);
      return stripColons(str);
    }
  }

  return str;
}

/**
 * Adds colons to either side
 * of the string
 * @param {string} str
 * @return {string}
 */
function wrapColons (str) {
  return (typeof str === 'string' && str.length > 0) ? ':' + str + ':' : str;
}

/**
 * Ensure that the word is wrapped in colons
 * by only adding them, if they are not there.
 * @param {string} str
 * @return {string}
 */
function ensureColons (str) {
  return (typeof str === 'string' && str[0] !== ':') ? wrapColons(str) : str;
}

// Non spacing mark, some emoticons have them. It's the 'Variant Form',
// which provides more information so that emoticons can be rendered as
// more colorful graphics. FE0E is a unicode text version, where as FE0F
// should be rendered as a graphical version. The code gracefully degrades.
var NON_SPACING_MARK = String.fromCharCode(65039); // 65039 - '️' - 0xFE0F;
var nonSpacingRegex = new RegExp(NON_SPACING_MARK, 'g')

// Remove the non-spacing-mark from the code, never send a stripped version
// to the client, as it kills graphical emoticons.
function stripNSB (code) {
  return code.replace(nonSpacingRegex, '');
};

// Reversed hash table, where as emojiByName contains a { heart: '❤' }
// dictionary emojiByCode contains { ❤: 'heart' }. The codes are normalized
// to the text version.
var emojiByCode = Object.keys(emojiByName).reduce(function(h,k) {
  h[stripNSB(emojiByName[k])] = k;
  return h;
}, {});

/**
 * Emoji namespace
 */
var Emoji = {
  emoji: emojiByName,
};

/**
 * get emoji code from name. return emoji code back if code is passed in.
 * @param  {string} emoji
 * @return {string}
 */
Emoji._get = function _get (emoji) {
  if (emojiByCode[stripNSB(emoji)]) {
    return emoji;
  } else if (emojiByName.hasOwnProperty(emoji)) {
    return emojiByName[emoji];
  }

  return ensureColons(emoji);
};

/**
 * get emoji code from :emoji: string or name
 * @param  {string} emoji
 * @return {string}
 */
Emoji.get = function get (emoji) {
  emoji = stripColons(emoji);

  return Emoji._get(emoji);
};

/**
 * find the emoji by either code or name
 * @param {string} nameOrCode The emoji to find, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.find = function find (nameOrCode) {
  return Emoji.findByName(nameOrCode) || Emoji.findByCode(nameOrCode);
};

/**
 * find the emoji by name
 * @param {string} name The emoji to find either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.findByName = function findByName (name) {
  var stripped = stripColons(name);
  var emoji = emojiByName[stripped];

  return emoji ? ({ emoji: emoji, key: stripped }) : undefined;
};

/**
 * find the emoji by code (emoji)
 * @param {string} code The emoji to find; for example `☕` or `☔`
 * @return {object}
 */
Emoji.findByCode = function findByCode (code) {
  var stripped = stripNSB(code);
  var name = emojiByCode[stripped];

  // lookup emoji to ensure the Variant Form is returned
  return name ? ({ emoji: emojiByName[name], key: name }) : undefined;
};


/**
 * Check if an emoji is known by this library
 * @param {string} nameOrCode The emoji to validate, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.hasEmoji = function hasEmoji (nameOrCode) {
  return Emoji.hasEmojiByName(nameOrCode) || Emoji.hasEmojiByCode(nameOrCode);
};

/**
 * Check if an emoji with given name is known by this library
 * @param {string} name The emoji to validate either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.hasEmojiByName = function hasEmojiByName (name) {
  var result = Emoji.findByName(name);
  return !!result && result.key === stripColons(name);
};

/**
 * Check if a given emoji is known by this library
 * @param {string} code The emoji to validate; for example `☕` or `☔`
 * @return {object}
 */
Emoji.hasEmojiByCode = function hasEmojiByCode (code) {
  var result = Emoji.findByCode(code);
  return !!result && stripNSB(result.emoji) === stripNSB(code);
};

/**
 * get emoji name from code
 * @param  {string} emoji
 * @param  {boolean} includeColons should the result include the ::
 * @return {string}
 */
Emoji.which = function which (emoji_code, includeColons) {
  var code = stripNSB(emoji_code);
  var word = emojiByCode[code];

  return includeColons ? wrapColons(word) : word;
};

/**
 * emojify a string (replace :emoji: with an emoji)
 * @param  {string} str
 * @param  {function} on_missing (gets emoji name without :: and returns a proper emoji if no emoji was found)
 * @param  {function} format (wrap the returned emoji in a custom element)
 * @return {string}
 */
Emoji.emojify = function emojify (str, on_missing, format) {
  if (!str) return '';

  return str.split(emojiNameRegex) // parse emoji via regex
            .map(function parseEmoji(s, i) {
              // every second element is an emoji, e.g. "test :fast_forward:" -> [ "test ", "fast_forward" ]
              if (i % 2 === 0) return s;
              var emoji = Emoji._get(s);
              var isMissing = emoji.indexOf(':') > -1;

              if (isMissing && typeof on_missing === 'function') {
                return on_missing(s);
              }

              if (!isMissing && typeof format === 'function') {
                return format(emoji, s);
              }

              return emoji;
            })
            .join('') // convert back to string
  ;
};

/**
 * return a random emoji
 * @return {string}
 */
Emoji.random = function random () {
  var emojiKeys = Object.keys(emojiByName);
  var randomIndex = Math.floor(Math.random() * emojiKeys.length);
  var key = emojiKeys[randomIndex];
  var emoji = Emoji._get(key);
  return { key: key, emoji: emoji };
}

/**
 *  return an collection of potential emoji matches
 *  @param {string} str
 *  @return {Array.<Object>}
 */
Emoji.search = function search (str) {
  var emojiKeys = Object.keys(emojiByName);
  var matcher = stripColons(str)
  var matchingKeys = emojiKeys.filter(function(key) {
    return key.toString().indexOf(matcher) === 0;
  });
  return matchingKeys.map(function(key) {
    return {
      key: key,
      emoji: Emoji._get(key),
    };
  });
}

/**
 * unemojify a string (replace emoji with :emoji:)
 * @param  {string} str
 * @return {string}
 */
Emoji.unemojify = function unemojify (str) {
  if (!str) return '';
  var words = toArray(str);

  return words.map(function(word) {
    return Emoji.which(word, true) || word;
  }).join('');
};

/**
 * replace emojis with replacement value
 * @param {string} str
 * @param {function|string} the string or callback function to replace the emoji with
 * @param {boolean} should trailing whitespaces be cleaned? Defaults false
 * @return {string}
 */
Emoji.replace = function replace (str, replacement, cleanSpaces) {
  if (!str) return '';

  var replace = typeof replacement === 'function' ? replacement : function() { return replacement; };
  var words = toArray(str);

  var replaced = words.map(function(word, idx) {
    var emoji = Emoji.findByCode(word);

    if (emoji && cleanSpaces && words[idx + 1] === ' ') {
      words[idx + 1] = '';
    }

    return emoji ? replace(emoji) : word;
  }).join('');

  return cleanSpaces ? replaced.replace(trimSpaceRegex, '') : replaced;
};


/**
 * remove all emojis from a string
 * @param {string} str
 * @return {string}
 */
Emoji.strip = function strip (str) {
  return Emoji.replace(str, '', true);
};

module.exports = Emoji;


/***/ }),

/***/ "./client/src/integrations/emoji/integration-provider.ts":
/*!***************************************************************!*\
  !*** ./client/src/integrations/emoji/integration-provider.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiIntegrationProvider": () => (/* binding */ EmojiIntegrationProvider)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-emoji */ "../../node_modules/node-emoji/index.js");
/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_emoji__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../templates */ "./client/src/templates.ts");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./client/src/integrations/emoji/templates.ts");




/**
 * Implement the integration provider for Emojis.
 */
class EmojiIntegrationProvider {
    /**
     * The module is being registered.
     * @param integrationManager The manager for the integration.
     * @param integration The integration details.
     * @returns Nothing.
     */
    async register(integrationManager, integration) {
        this._integrationManager = integrationManager;
    }
    /**
     * The module is being deregistered.
     * @param integration The integration details.
     * @returns Nothing.
     */
    async deregister(integration) { }
    /**
     * Get a list of the static help entries.
     * @param integration The integration details.
     * @returns The list of help entries.
     */
    async getHelpSearchEntries(integration) {
        return [
            {
                key: `${EmojiIntegrationProvider._PROVIDER_ID}-help`,
                title: "/emoji",
                label: "Help",
                icon: integration.icon,
                actions: [],
                data: {
                    providerId: EmojiIntegrationProvider._PROVIDER_ID
                },
                template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Custom,
                templateContent: await (0,_templates__WEBPACK_IMPORTED_MODULE_2__.createHelp)("/emoji", [
                    "The emoji command can be used to search for emojis by name.",
                    "For example to search for emojis which include `woman` or `man` in their name."
                ], ["/emoji woman", "/emoji man"])
            }
        ];
    }
    /**
     * An entry has been selected.
     * @param integration The integration details.
     * @param result The dispatched result.
     * @param lastResponse The last response.
     * @returns True if the item was handled.
     */
    async itemSelection(integration, result, lastResponse) {
        const data = result.data;
        if (result.action.trigger === "user-action") {
            if (result.action.name === EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION &&
                result.data.emoji) {
                await fin.Clipboard.writeText({ data: result.data.emoji });
                return true;
            }
            else if (result.action.name === EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_KEY_ACTION &&
                result.data.key) {
                await fin.Clipboard.writeText({ data: result.data.key });
                return true;
            }
            else if (result.action.name === EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION &&
                result.data.url &&
                this._integrationManager.openUrl) {
                await this._integrationManager.openUrl(data.url);
                return true;
            }
        }
        return false;
    }
    /**
     * Get a list of search results based on the query and filters.
     * @param integration The integration details.
     * @param query The query to search for.
     * @param filters The filters to apply.
     * @param lastResponse The last search response used for updating existing results.
     * @returns The list of results and new filters.
     */
    async getSearchResults(integration, query, filters, lastResponse) {
        const results = [];
        if (query.startsWith("/emoji ")) {
            let key = query.slice(7);
            if (key.length > 0) {
                key = key.toLowerCase();
                // Find exact match first if there is one
                const matchEmoji = node_emoji__WEBPACK_IMPORTED_MODULE_1__.get(key);
                if (matchEmoji && !matchEmoji.startsWith(":")) {
                    results.push(await this.createResult(key, matchEmoji));
                }
                // Find all other potential matches
                const searchResult = node_emoji__WEBPACK_IMPORTED_MODULE_1__.search(key);
                for (const result of searchResult) {
                    if (result.emoji !== matchEmoji) {
                        results.push(await this.createResult(result.key, result.emoji));
                    }
                }
            }
        }
        return {
            results
        };
    }
    /**
     * Create a search result.
     * @param key The key for the emoji.
     * @param symbol The emoji symbol.
     * @returns The search result.
     */
    async createResult(key, symbol) {
        return {
            key: `emoji-${key}`,
            title: key,
            label: "Information",
            actions: [
                {
                    name: EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION,
                    hotkey: "CmdOrCtrl+C"
                },
                {
                    name: EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION,
                    hotkey: "Enter"
                }
            ],
            data: {
                providerId: EmojiIntegrationProvider._PROVIDER_ID,
                key,
                emoji: symbol,
                url: `https://emojipedia.org/${key}/`
            },
            template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Custom,
            templateContent: {
                layout: await (0,_templates__WEBPACK_IMPORTED_MODULE_3__.getEmojiTemplate)({
                    copyEmojiAction: EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION,
                    copyKeyAction: EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_KEY_ACTION,
                    detailsAction: EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION
                }),
                data: {
                    keyTitle: "Key",
                    copyKeyTitle: "Copy Key",
                    key,
                    emojiTitle: "Emoji",
                    copyEmojiTitle: "Copy Emoji",
                    emoji: symbol,
                    detailsTitle: "Further Details"
                }
            }
        };
    }
}
/**
 * Provider id.
 * @internal
 */
EmojiIntegrationProvider._PROVIDER_ID = "emoji";
/**
 * The key to use for a emoji result.
 * @internal
 */
EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION = "Emoji Details";
/**
 * The key to use for a emoji copy key action.
 * @internal
 */
EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_KEY_ACTION = "Copy Key";
/**
 * The key to use for a emoji copy key action.
 * @internal
 */
EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION = "Copy Emoji";


/***/ }),

/***/ "./client/src/integrations/emoji/templates.ts":
/*!****************************************************!*\
  !*** ./client/src/integrations/emoji/templates.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEmojiTemplate": () => (/* binding */ getEmojiTemplate)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates */ "./client/src/templates.ts");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../themes */ "./client/src/themes.ts");



async function getEmojiTemplate(actions) {
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_2__.getCurrentTheme)();
    return (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("column", [
        await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("keyTitle", 12, { color: theme.palette.brandPrimary, fontWeight: "bold" }),
        await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("row", [
            await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("key", 12, { color: theme.palette.textDefault, wordBreak: "break-all" }),
            await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createButton)(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Secondary, "copyKeyTitle", actions.copyKeyAction, {
                fontSize: "12px"
            })
        ], {
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px"
        }),
        await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("emojiTitle", 12, { color: theme.palette.brandPrimary, fontWeight: "bold" }),
        await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("row", [
            await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("emoji", 32, { color: theme.palette.textDefault }),
            await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createButton)(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Secondary, "copyEmojiTitle", actions.copyEmojiAction, {
                fontSize: "12px"
            })
        ], {
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px"
        }),
        await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("row", [
            await (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createButton)(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Primary, "detailsTitle", actions.detailsAction, {
                fontSize: "12px"
            })
        ], { justifyContent: "flex-end" })
    ], {
        padding: "10px"
    });
}


/***/ }),

/***/ "./client/src/settings.ts":
/*!********************************!*\
  !*** ./client/src/settings.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettings": () => (/* binding */ getSettings)
/* harmony export */ });
let settings;
async function getConfiguredSettings() {
    const app = await fin.Application.getCurrent();
    const manifest = await app.getManifest();
    if (manifest.customSettings !== undefined) {
        settings = manifest.customSettings;
    }
    else {
        settings = {};
    }
    return settings;
}
async function getSettings() {
    if (settings === undefined) {
        settings = await getConfiguredSettings();
    }
    return settings;
}


/***/ }),

/***/ "./client/src/templates.ts":
/*!*********************************!*\
  !*** ./client/src/templates.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createHelp": () => (/* binding */ createHelp),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createText": () => (/* binding */ createText),
/* harmony export */   "createTitle": () => (/* binding */ createTitle)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes */ "./client/src/themes.ts");


async function createHelp(title, description, examples
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_1__.getCurrentTheme)();
    const additionalData = {};
    const fragments = [];
    for (let i = 0; i < description.length; i++) {
        const descriptionKey = `desc-${i}`;
        additionalData[descriptionKey] = description[i];
        fragments.push(await createText(descriptionKey, 12, {
            padding: "6px 0px"
        }));
    }
    const exampleFragments = [];
    for (let i = 0; i < examples.length; i++) {
        const exampleKey = `line-${i}`;
        additionalData[exampleKey] = examples[i];
        exampleFragments.push(await createText(exampleKey, 12, {
            fontFamily: "monospace"
        }));
    }
    if (exampleFragments.length > 0) {
        fragments.push(await createContainer("column", exampleFragments, {
            padding: "10px",
            marginTop: "6px",
            backgroundColor: theme.palette.background5,
            color: theme.palette.inputColor,
            borderRadius: "5px"
        }));
    }
    return {
        layout: await createContainer("column", [await createTitle("title"), ...fragments], {
            padding: "10px"
        }),
        data: {
            title,
            ...additionalData
        }
    };
}
async function createContainer(containerType, children, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
        style: {
            display: "flex",
            flexDirection: containerType,
            ...style
        },
        children
    };
}
async function createTitle(dataKey, fontSize = 16, fontWeight = "bold", style) {
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_1__.getCurrentTheme)();
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
        dataKey,
        style: {
            color: theme.palette.brandPrimary,
            fontSize: `${fontSize ?? 16}px`,
            fontWeight,
            ...style
        }
    };
}
async function createText(dataKey, fontSize = 14, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
        dataKey,
        style: {
            fontSize: `${fontSize ?? 14}px`,
            ...style
        }
    };
}
async function createImage(dataKey, alternativeText, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Image,
        dataKey,
        alternativeText,
        style: {
            ...style
        }
    };
}
async function createButton(buttonStyle, titleKey, action, style) {
    const theme = await (0,_themes__WEBPACK_IMPORTED_MODULE_1__.getCurrentTheme)();
    const buttonOptions = buttonStyle === _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Secondary
        ? {
            border: `1px solid ${theme.palette.inputColor}`
        }
        : {};
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
        buttonStyle,
        children: [await createText(titleKey, 12)],
        action,
        style: {
            ...buttonOptions,
            ...style
        }
    };
}


/***/ }),

/***/ "./client/src/themes.ts":
/*!******************************!*\
  !*** ./client/src/themes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentTheme": () => (/* binding */ getCurrentTheme),
/* harmony export */   "getThemes": () => (/* binding */ getThemes),
/* harmony export */   "validateThemes": () => (/* binding */ validateThemes)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");

const DEFAULT_PALETTES = {
    light: {
        brandPrimary: "#504CFF",
        brandSecondary: "#1E1F23",
        backgroundPrimary: "#FAFBFE",
        background1: "#FFFFFF",
        background2: "#FAFBFE",
        background3: "#F3F5F8",
        background4: "#ECEEF1",
        background5: "#DDDFE4",
        background6: "#C9CBD2",
        statusSuccess: "#35C759",
        statusWarning: "#F48F00",
        statusCritical: "#BE1D1F",
        statusActive: "#0498FB",
        inputBackground: "#ECEEF1",
        inputColor: "#1E1F23",
        inputPlaceholder: "#383A40",
        inputDisabled: "#7D808A",
        inputFocused: "#C9CBD2",
        textDefault: "#1E1F23",
        textHelp: "#2F3136",
        textInactive: "#7D808A"
    },
    dark: {
        brandPrimary: "#504CFF",
        brandSecondary: "#383A40",
        backgroundPrimary: "#1E1F23",
        background1: "#111214",
        background2: "#1E1F23",
        background3: "#24262B",
        background4: "#2F3136",
        background5: "#383A40",
        background6: "#53565F",
        statusSuccess: "#35C759",
        statusWarning: "#F48F00",
        statusCritical: "#BE1D1F",
        statusActive: "#0498FB",
        inputBackground: "#53565F",
        inputColor: "#FFFFFF",
        inputPlaceholder: "#C9CBD2",
        inputDisabled: "#7D808A",
        inputFocused: "#C9CBD2",
        textDefault: "#FFFFFF",
        textHelp: "#C9CBD2",
        textInactive: "#7D808A"
    }
};
let validatedThemes;
function getSystemPreferredColorScheme() {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
}
async function getCurrentTheme() {
    const themes = await getThemes();
    if (themes.length === 0) {
        return {
            label: "default",
            palette: DEFAULT_PALETTES.dark
        };
    }
    return themes[0];
}
async function getThemes() {
    if (!validatedThemes) {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_0__.getSettings)();
        validatedThemes = validateThemes(settings?.themeProvider?.themes);
    }
    return validatedThemes.slice();
}
function validateThemes(themes) {
    const customThemes = [];
    if (Array.isArray(themes)) {
        const preferredColorScheme = getSystemPreferredColorScheme();
        for (let i = 0; i < themes.length; i++) {
            const themeToValidate = themes[i];
            const palette = validatePalette(themeToValidate.palette, themeToValidate.label);
            if (palette !== null) {
                themeToValidate.palette = palette;
            }
            else {
                // don't pass an empty object as there are no theme properties
                themeToValidate.palette = undefined;
            }
            if (themeToValidate.label.toLowerCase() === preferredColorScheme) {
                console.log(`Found a theme that matches system color scheme preferences and making it the default theme: ${preferredColorScheme}`);
                customThemes.unshift(themeToValidate);
            }
            else {
                customThemes.push(themeToValidate);
            }
        }
    }
    return customThemes;
}
function validatePalette(themePalette, themeLabel) {
    if (!themePalette) {
        return null;
    }
    const keys = Object.keys(themePalette);
    if (keys.length === 0) {
        return null;
    }
    const palette = {
        ...DEFAULT_PALETTES.dark
    };
    for (const key of keys) {
        if (themePalette[key] !== undefined &&
            themePalette[key] !== null &&
            themePalette[key].trim().length > 0) {
            palette[key] = themePalette[key];
        }
    }
    const brandPrimaryKey = "brandPrimary";
    const brandSecondaryKey = "brandSecondary";
    const backgroundPrimaryKey = "backgroundPrimary";
    if (!themePalette[brandPrimaryKey]) {
        console.warn(`Theme: ${themeLabel} : ${brandPrimaryKey} not specified (it is required if specifying other theme palette settings). Providing default of: ${DEFAULT_PALETTES.dark.brandPrimary}`);
    }
    if (!themePalette[brandSecondaryKey]) {
        console.warn(`Theme: ${themeLabel} : ${brandSecondaryKey} not specified (it is required if specifying other theme palette settings). Providing default of: ${DEFAULT_PALETTES.dark.brandSecondary}`);
    }
    if (!themePalette[backgroundPrimaryKey]) {
        console.warn(`Theme: ${themeLabel} : ${backgroundPrimaryKey} not specified (it is required if specifying other theme palette settings). Providing default of: ${DEFAULT_PALETTES.dark.brandPrimary}`);
    }
    return palette;
}


/***/ }),

/***/ "../../node_modules/node-emoji/lib/emoji.json":
/*!****************************************************!*\
  !*** ../../node_modules/node-emoji/lib/emoji.json ***!
  \****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"100":"💯","1234":"🔢","umbrella_with_rain_drops":"☔","coffee":"☕","aries":"♈","taurus":"♉","sagittarius":"♐","capricorn":"♑","aquarius":"♒","pisces":"♓","anchor":"⚓","white_check_mark":"✅","sparkles":"✨","question":"❓","grey_question":"❔","grey_exclamation":"❕","exclamation":"❗","heavy_exclamation_mark":"❗","heavy_plus_sign":"➕","heavy_minus_sign":"➖","heavy_division_sign":"➗","hash":"#️⃣","keycap_star":"*️⃣","zero":"0️⃣","one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","copyright":"©️","registered":"®️","mahjong":"🀄","black_joker":"🃏","a":"🅰️","b":"🅱️","o2":"🅾️","parking":"🅿️","ab":"🆎","cl":"🆑","cool":"🆒","free":"🆓","id":"🆔","new":"🆕","ng":"🆖","ok":"🆗","sos":"🆘","up":"🆙","vs":"🆚","flag-ac":"🇦🇨","flag-ad":"🇦🇩","flag-ae":"🇦🇪","flag-af":"🇦🇫","flag-ag":"🇦🇬","flag-ai":"🇦🇮","flag-al":"🇦🇱","flag-am":"🇦🇲","flag-ao":"🇦🇴","flag-aq":"🇦🇶","flag-ar":"🇦🇷","flag-as":"🇦🇸","flag-at":"🇦🇹","flag-au":"🇦🇺","flag-aw":"🇦🇼","flag-ax":"🇦🇽","flag-az":"🇦🇿","flag-ba":"🇧🇦","flag-bb":"🇧🇧","flag-bd":"🇧🇩","flag-be":"🇧🇪","flag-bf":"🇧🇫","flag-bg":"🇧🇬","flag-bh":"🇧🇭","flag-bi":"🇧🇮","flag-bj":"🇧🇯","flag-bl":"🇧🇱","flag-bm":"🇧🇲","flag-bn":"🇧🇳","flag-bo":"🇧🇴","flag-bq":"🇧🇶","flag-br":"🇧🇷","flag-bs":"🇧🇸","flag-bt":"🇧🇹","flag-bv":"🇧🇻","flag-bw":"🇧🇼","flag-by":"🇧🇾","flag-bz":"🇧🇿","flag-ca":"🇨🇦","flag-cc":"🇨🇨","flag-cd":"🇨🇩","flag-cf":"🇨🇫","flag-cg":"🇨🇬","flag-ch":"🇨🇭","flag-ci":"🇨🇮","flag-ck":"🇨🇰","flag-cl":"🇨🇱","flag-cm":"🇨🇲","cn":"🇨🇳","flag-cn":"🇨🇳","flag-co":"🇨🇴","flag-cp":"🇨🇵","flag-cr":"🇨🇷","flag-cu":"🇨🇺","flag-cv":"🇨🇻","flag-cw":"🇨🇼","flag-cx":"🇨🇽","flag-cy":"🇨🇾","flag-cz":"🇨🇿","de":"🇩🇪","flag-de":"🇩🇪","flag-dg":"🇩🇬","flag-dj":"🇩🇯","flag-dk":"🇩🇰","flag-dm":"🇩🇲","flag-do":"🇩🇴","flag-dz":"🇩🇿","flag-ea":"🇪🇦","flag-ec":"🇪🇨","flag-ee":"🇪🇪","flag-eg":"🇪🇬","flag-eh":"🇪🇭","flag-er":"🇪🇷","es":"🇪🇸","flag-es":"🇪🇸","flag-et":"🇪🇹","flag-eu":"🇪🇺","flag-fi":"🇫🇮","flag-fj":"🇫🇯","flag-fk":"🇫🇰","flag-fm":"🇫🇲","flag-fo":"🇫🇴","fr":"🇫🇷","flag-fr":"🇫🇷","flag-ga":"🇬🇦","gb":"🇬🇧","uk":"🇬🇧","flag-gb":"🇬🇧","flag-gd":"🇬🇩","flag-ge":"🇬🇪","flag-gf":"🇬🇫","flag-gg":"🇬🇬","flag-gh":"🇬🇭","flag-gi":"🇬🇮","flag-gl":"🇬🇱","flag-gm":"🇬🇲","flag-gn":"🇬🇳","flag-gp":"🇬🇵","flag-gq":"🇬🇶","flag-gr":"🇬🇷","flag-gs":"🇬🇸","flag-gt":"🇬🇹","flag-gu":"🇬🇺","flag-gw":"🇬🇼","flag-gy":"🇬🇾","flag-hk":"🇭🇰","flag-hm":"🇭🇲","flag-hn":"🇭🇳","flag-hr":"🇭🇷","flag-ht":"🇭🇹","flag-hu":"🇭🇺","flag-ic":"🇮🇨","flag-id":"🇮🇩","flag-ie":"🇮🇪","flag-il":"🇮🇱","flag-im":"🇮🇲","flag-in":"🇮🇳","flag-io":"🇮🇴","flag-iq":"🇮🇶","flag-ir":"🇮🇷","flag-is":"🇮🇸","it":"🇮🇹","flag-it":"🇮🇹","flag-je":"🇯🇪","flag-jm":"🇯🇲","flag-jo":"🇯🇴","jp":"🇯🇵","flag-jp":"🇯🇵","flag-ke":"🇰🇪","flag-kg":"🇰🇬","flag-kh":"🇰🇭","flag-ki":"🇰🇮","flag-km":"🇰🇲","flag-kn":"🇰🇳","flag-kp":"🇰🇵","kr":"🇰🇷","flag-kr":"🇰🇷","flag-kw":"🇰🇼","flag-ky":"🇰🇾","flag-kz":"🇰🇿","flag-la":"🇱🇦","flag-lb":"🇱🇧","flag-lc":"🇱🇨","flag-li":"🇱🇮","flag-lk":"🇱🇰","flag-lr":"🇱🇷","flag-ls":"🇱🇸","flag-lt":"🇱🇹","flag-lu":"🇱🇺","flag-lv":"🇱🇻","flag-ly":"🇱🇾","flag-ma":"🇲🇦","flag-mc":"🇲🇨","flag-md":"🇲🇩","flag-me":"🇲🇪","flag-mf":"🇲🇫","flag-mg":"🇲🇬","flag-mh":"🇲🇭","flag-mk":"🇲🇰","flag-ml":"🇲🇱","flag-mm":"🇲🇲","flag-mn":"🇲🇳","flag-mo":"🇲🇴","flag-mp":"🇲🇵","flag-mq":"🇲🇶","flag-mr":"🇲🇷","flag-ms":"🇲🇸","flag-mt":"🇲🇹","flag-mu":"🇲🇺","flag-mv":"🇲🇻","flag-mw":"🇲🇼","flag-mx":"🇲🇽","flag-my":"🇲🇾","flag-mz":"🇲🇿","flag-na":"🇳🇦","flag-nc":"🇳🇨","flag-ne":"🇳🇪","flag-nf":"🇳🇫","flag-ng":"🇳🇬","flag-ni":"🇳🇮","flag-nl":"🇳🇱","flag-no":"🇳🇴","flag-np":"🇳🇵","flag-nr":"🇳🇷","flag-nu":"🇳🇺","flag-nz":"🇳🇿","flag-om":"🇴🇲","flag-pa":"🇵🇦","flag-pe":"🇵🇪","flag-pf":"🇵🇫","flag-pg":"🇵🇬","flag-ph":"🇵🇭","flag-pk":"🇵🇰","flag-pl":"🇵🇱","flag-pm":"🇵🇲","flag-pn":"🇵🇳","flag-pr":"🇵🇷","flag-ps":"🇵🇸","flag-pt":"🇵🇹","flag-pw":"🇵🇼","flag-py":"🇵🇾","flag-qa":"🇶🇦","flag-re":"🇷🇪","flag-ro":"🇷🇴","flag-rs":"🇷🇸","ru":"🇷🇺","flag-ru":"🇷🇺","flag-rw":"🇷🇼","flag-sa":"🇸🇦","flag-sb":"🇸🇧","flag-sc":"🇸🇨","flag-sd":"🇸🇩","flag-se":"🇸🇪","flag-sg":"🇸🇬","flag-sh":"🇸🇭","flag-si":"🇸🇮","flag-sj":"🇸🇯","flag-sk":"🇸🇰","flag-sl":"🇸🇱","flag-sm":"🇸🇲","flag-sn":"🇸🇳","flag-so":"🇸🇴","flag-sr":"🇸🇷","flag-ss":"🇸🇸","flag-st":"🇸🇹","flag-sv":"🇸🇻","flag-sx":"🇸🇽","flag-sy":"🇸🇾","flag-sz":"🇸🇿","flag-ta":"🇹🇦","flag-tc":"🇹🇨","flag-td":"🇹🇩","flag-tf":"🇹🇫","flag-tg":"🇹🇬","flag-th":"🇹🇭","flag-tj":"🇹🇯","flag-tk":"🇹🇰","flag-tl":"🇹🇱","flag-tm":"🇹🇲","flag-tn":"🇹🇳","flag-to":"🇹🇴","flag-tr":"🇹🇷","flag-tt":"🇹🇹","flag-tv":"🇹🇻","flag-tw":"🇹🇼","flag-tz":"🇹🇿","flag-ua":"🇺🇦","flag-ug":"🇺🇬","flag-um":"🇺🇲","flag-un":"🇺🇳","us":"🇺🇸","flag-us":"🇺🇸","flag-uy":"🇺🇾","flag-uz":"🇺🇿","flag-va":"🇻🇦","flag-vc":"🇻🇨","flag-ve":"🇻🇪","flag-vg":"🇻🇬","flag-vi":"🇻🇮","flag-vn":"🇻🇳","flag-vu":"🇻🇺","flag-wf":"🇼🇫","flag-ws":"🇼🇸","flag-xk":"🇽🇰","flag-ye":"🇾🇪","flag-yt":"🇾🇹","flag-za":"🇿🇦","flag-zm":"🇿🇲","flag-zw":"🇿🇼","koko":"🈁","sa":"🈂️","u7121":"🈚","u6307":"🈯","u7981":"🈲","u7a7a":"🈳","u5408":"🈴","u6e80":"🈵","u6709":"🈶","u6708":"🈷️","u7533":"🈸","u5272":"🈹","u55b6":"🈺","ideograph_advantage":"🉐","accept":"🉑","cyclone":"🌀","foggy":"🌁","closed_umbrella":"🌂","night_with_stars":"🌃","sunrise_over_mountains":"🌄","sunrise":"🌅","city_sunset":"🌆","city_sunrise":"🌇","rainbow":"🌈","bridge_at_night":"🌉","ocean":"🌊","volcano":"🌋","milky_way":"🌌","earth_africa":"🌍","earth_americas":"🌎","earth_asia":"🌏","globe_with_meridians":"🌐","new_moon":"🌑","waxing_crescent_moon":"🌒","first_quarter_moon":"🌓","moon":"🌔","waxing_gibbous_moon":"🌔","full_moon":"🌕","waning_gibbous_moon":"🌖","last_quarter_moon":"🌗","waning_crescent_moon":"🌘","crescent_moon":"🌙","new_moon_with_face":"🌚","first_quarter_moon_with_face":"🌛","last_quarter_moon_with_face":"🌜","full_moon_with_face":"🌝","sun_with_face":"🌞","star2":"🌟","stars":"🌠","thermometer":"🌡️","mostly_sunny":"🌤️","sun_small_cloud":"🌤️","barely_sunny":"🌥️","sun_behind_cloud":"🌥️","partly_sunny_rain":"🌦️","sun_behind_rain_cloud":"🌦️","rain_cloud":"🌧️","snow_cloud":"🌨️","lightning":"🌩️","lightning_cloud":"🌩️","tornado":"🌪️","tornado_cloud":"🌪️","fog":"🌫️","wind_blowing_face":"🌬️","hotdog":"🌭","taco":"🌮","burrito":"🌯","chestnut":"🌰","seedling":"🌱","evergreen_tree":"🌲","deciduous_tree":"🌳","palm_tree":"🌴","cactus":"🌵","hot_pepper":"🌶️","tulip":"🌷","cherry_blossom":"🌸","rose":"🌹","hibiscus":"🌺","sunflower":"🌻","blossom":"🌼","corn":"🌽","ear_of_rice":"🌾","herb":"🌿","four_leaf_clover":"🍀","maple_leaf":"🍁","fallen_leaf":"🍂","leaves":"🍃","mushroom":"🍄","tomato":"🍅","eggplant":"🍆","grapes":"🍇","melon":"🍈","watermelon":"🍉","tangerine":"🍊","lemon":"🍋","banana":"🍌","pineapple":"🍍","apple":"🍎","green_apple":"🍏","pear":"🍐","peach":"🍑","cherries":"🍒","strawberry":"🍓","hamburger":"🍔","pizza":"🍕","meat_on_bone":"🍖","poultry_leg":"🍗","rice_cracker":"🍘","rice_ball":"🍙","rice":"🍚","curry":"🍛","ramen":"🍜","spaghetti":"🍝","bread":"🍞","fries":"🍟","sweet_potato":"🍠","dango":"🍡","oden":"🍢","sushi":"🍣","fried_shrimp":"🍤","fish_cake":"🍥","icecream":"🍦","shaved_ice":"🍧","ice_cream":"🍨","doughnut":"🍩","cookie":"🍪","chocolate_bar":"🍫","candy":"🍬","lollipop":"🍭","custard":"🍮","honey_pot":"🍯","cake":"🍰","bento":"🍱","stew":"🍲","fried_egg":"🍳","cooking":"🍳","fork_and_knife":"🍴","tea":"🍵","sake":"🍶","wine_glass":"🍷","cocktail":"🍸","tropical_drink":"🍹","beer":"🍺","beers":"🍻","baby_bottle":"🍼","knife_fork_plate":"🍽️","champagne":"🍾","popcorn":"🍿","ribbon":"🎀","gift":"🎁","birthday":"🎂","jack_o_lantern":"🎃","christmas_tree":"🎄","santa":"🎅","fireworks":"🎆","sparkler":"🎇","balloon":"🎈","tada":"🎉","confetti_ball":"🎊","tanabata_tree":"🎋","crossed_flags":"🎌","bamboo":"🎍","dolls":"🎎","flags":"🎏","wind_chime":"🎐","rice_scene":"🎑","school_satchel":"🎒","mortar_board":"🎓","medal":"🎖️","reminder_ribbon":"🎗️","studio_microphone":"🎙️","level_slider":"🎚️","control_knobs":"🎛️","film_frames":"🎞️","admission_tickets":"🎟️","carousel_horse":"🎠","ferris_wheel":"🎡","roller_coaster":"🎢","fishing_pole_and_fish":"🎣","microphone":"🎤","movie_camera":"🎥","cinema":"🎦","headphones":"🎧","art":"🎨","tophat":"🎩","circus_tent":"🎪","ticket":"🎫","clapper":"🎬","performing_arts":"🎭","video_game":"🎮","dart":"🎯","slot_machine":"🎰","8ball":"🎱","game_die":"🎲","bowling":"🎳","flower_playing_cards":"🎴","musical_note":"🎵","notes":"🎶","saxophone":"🎷","guitar":"🎸","musical_keyboard":"🎹","trumpet":"🎺","violin":"🎻","musical_score":"🎼","running_shirt_with_sash":"🎽","tennis":"🎾","ski":"🎿","basketball":"🏀","checkered_flag":"🏁","snowboarder":"🏂","woman-running":"🏃‍♀️","man-running":"🏃‍♂️","runner":"🏃‍♂️","running":"🏃‍♂️","woman-surfing":"🏄‍♀️","man-surfing":"🏄‍♂️","surfer":"🏄‍♂️","sports_medal":"🏅","trophy":"🏆","horse_racing":"🏇","football":"🏈","rugby_football":"🏉","woman-swimming":"🏊‍♀️","man-swimming":"🏊‍♂️","swimmer":"🏊‍♂️","woman-lifting-weights":"🏋️‍♀️","man-lifting-weights":"🏋️‍♂️","weight_lifter":"🏋️‍♂️","woman-golfing":"🏌️‍♀️","man-golfing":"🏌️‍♂️","golfer":"🏌️‍♂️","racing_motorcycle":"🏍️","racing_car":"🏎️","cricket_bat_and_ball":"🏏","volleyball":"🏐","field_hockey_stick_and_ball":"🏑","ice_hockey_stick_and_puck":"🏒","table_tennis_paddle_and_ball":"🏓","snow_capped_mountain":"🏔️","camping":"🏕️","beach_with_umbrella":"🏖️","building_construction":"🏗️","house_buildings":"🏘️","cityscape":"🏙️","derelict_house_building":"🏚️","classical_building":"🏛️","desert":"🏜️","desert_island":"🏝️","national_park":"🏞️","stadium":"🏟️","house":"🏠","house_with_garden":"🏡","office":"🏢","post_office":"🏣","european_post_office":"🏤","hospital":"🏥","bank":"🏦","atm":"🏧","hotel":"🏨","love_hotel":"🏩","convenience_store":"🏪","school":"🏫","department_store":"🏬","factory":"🏭","izakaya_lantern":"🏮","lantern":"🏮","japanese_castle":"🏯","european_castle":"🏰","rainbow-flag":"🏳️‍🌈","transgender_flag":"🏳️‍⚧️","waving_white_flag":"🏳️","pirate_flag":"🏴‍☠️","flag-england":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","flag-scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","flag-wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","waving_black_flag":"🏴","rosette":"🏵️","label":"🏷️","badminton_racquet_and_shuttlecock":"🏸","bow_and_arrow":"🏹","amphora":"🏺","skin-tone-2":"🏻","skin-tone-3":"🏼","skin-tone-4":"🏽","skin-tone-5":"🏾","skin-tone-6":"🏿","rat":"🐀","mouse2":"🐁","ox":"🐂","water_buffalo":"🐃","cow2":"🐄","tiger2":"🐅","leopard":"🐆","rabbit2":"🐇","black_cat":"🐈‍⬛","cat2":"🐈","dragon":"🐉","crocodile":"🐊","whale2":"🐋","snail":"🐌","snake":"🐍","racehorse":"🐎","ram":"🐏","goat":"🐐","sheep":"🐑","monkey":"🐒","rooster":"🐓","chicken":"🐔","service_dog":"🐕‍🦺","dog2":"🐕","pig2":"🐖","boar":"🐗","elephant":"🐘","octopus":"🐙","shell":"🐚","bug":"🐛","ant":"🐜","bee":"🐝","honeybee":"🐝","ladybug":"🐞","lady_beetle":"🐞","fish":"🐟","tropical_fish":"🐠","blowfish":"🐡","turtle":"🐢","hatching_chick":"🐣","baby_chick":"🐤","hatched_chick":"🐥","bird":"🐦","penguin":"🐧","koala":"🐨","poodle":"🐩","dromedary_camel":"🐪","camel":"🐫","dolphin":"🐬","flipper":"🐬","mouse":"🐭","cow":"🐮","tiger":"🐯","rabbit":"🐰","cat":"🐱","dragon_face":"🐲","whale":"🐳","horse":"🐴","monkey_face":"🐵","dog":"🐶","pig":"🐷","frog":"🐸","hamster":"🐹","wolf":"🐺","polar_bear":"🐻‍❄️","bear":"🐻","panda_face":"🐼","pig_nose":"🐽","feet":"🐾","paw_prints":"🐾","chipmunk":"🐿️","eyes":"👀","eye-in-speech-bubble":"👁️‍🗨️","eye":"👁️","ear":"👂","nose":"👃","lips":"👄","tongue":"👅","point_up_2":"👆","point_down":"👇","point_left":"👈","point_right":"👉","facepunch":"👊","punch":"👊","wave":"👋","ok_hand":"👌","+1":"👍","thumbsup":"👍","-1":"👎","thumbsdown":"👎","clap":"👏","open_hands":"👐","crown":"👑","womans_hat":"👒","eyeglasses":"👓","necktie":"👔","shirt":"👕","tshirt":"👕","jeans":"👖","dress":"👗","kimono":"👘","bikini":"👙","womans_clothes":"👚","purse":"👛","handbag":"👜","pouch":"👝","mans_shoe":"👞","shoe":"👞","athletic_shoe":"👟","high_heel":"👠","sandal":"👡","boot":"👢","footprints":"👣","bust_in_silhouette":"👤","busts_in_silhouette":"👥","boy":"👦","girl":"👧","male-farmer":"👨‍🌾","male-cook":"👨‍🍳","man_feeding_baby":"👨‍🍼","male-student":"👨‍🎓","male-singer":"👨‍🎤","male-artist":"👨‍🎨","male-teacher":"👨‍🏫","male-factory-worker":"👨‍🏭","man-boy-boy":"👨‍👦‍👦","man-boy":"👨‍👦","man-girl-boy":"👨‍👧‍👦","man-girl-girl":"👨‍👧‍👧","man-girl":"👨‍👧","man-man-boy":"👨‍👨‍👦","man-man-boy-boy":"👨‍👨‍👦‍👦","man-man-girl":"👨‍👨‍👧","man-man-girl-boy":"👨‍👨‍👧‍👦","man-man-girl-girl":"👨‍👨‍👧‍👧","man-woman-boy":"👨‍👩‍👦","family":"👨‍👩‍👦","man-woman-boy-boy":"👨‍👩‍👦‍👦","man-woman-girl":"👨‍👩‍👧","man-woman-girl-boy":"👨‍👩‍👧‍👦","man-woman-girl-girl":"👨‍👩‍👧‍👧","male-technologist":"👨‍💻","male-office-worker":"👨‍💼","male-mechanic":"👨‍🔧","male-scientist":"👨‍🔬","male-astronaut":"👨‍🚀","male-firefighter":"👨‍🚒","man_with_probing_cane":"👨‍🦯","red_haired_man":"👨‍🦰","curly_haired_man":"👨‍🦱","bald_man":"👨‍🦲","white_haired_man":"👨‍🦳","man_in_motorized_wheelchair":"👨‍🦼","man_in_manual_wheelchair":"👨‍🦽","male-doctor":"👨‍⚕️","male-judge":"👨‍⚖️","male-pilot":"👨‍✈️","man-heart-man":"👨‍❤️‍👨","man-kiss-man":"👨‍❤️‍💋‍👨","man":"👨","female-farmer":"👩‍🌾","female-cook":"👩‍🍳","woman_feeding_baby":"👩‍🍼","female-student":"👩‍🎓","female-singer":"👩‍🎤","female-artist":"👩‍🎨","female-teacher":"👩‍🏫","female-factory-worker":"👩‍🏭","woman-boy-boy":"👩‍👦‍👦","woman-boy":"👩‍👦","woman-girl-boy":"👩‍👧‍👦","woman-girl-girl":"👩‍👧‍👧","woman-girl":"👩‍👧","woman-woman-boy":"👩‍👩‍👦","woman-woman-boy-boy":"👩‍👩‍👦‍👦","woman-woman-girl":"👩‍👩‍👧","woman-woman-girl-boy":"👩‍👩‍👧‍👦","woman-woman-girl-girl":"👩‍👩‍👧‍👧","female-technologist":"👩‍💻","female-office-worker":"👩‍💼","female-mechanic":"👩‍🔧","female-scientist":"👩‍🔬","female-astronaut":"👩‍🚀","female-firefighter":"👩‍🚒","woman_with_probing_cane":"👩‍🦯","red_haired_woman":"👩‍🦰","curly_haired_woman":"👩‍🦱","bald_woman":"👩‍🦲","white_haired_woman":"👩‍🦳","woman_in_motorized_wheelchair":"👩‍🦼","woman_in_manual_wheelchair":"👩‍🦽","female-doctor":"👩‍⚕️","female-judge":"👩‍⚖️","female-pilot":"👩‍✈️","woman-heart-man":"👩‍❤️‍👨","woman-heart-woman":"👩‍❤️‍👩","woman-kiss-man":"👩‍❤️‍💋‍👨","woman-kiss-woman":"👩‍❤️‍💋‍👩","woman":"👩","man_and_woman_holding_hands":"👫","woman_and_man_holding_hands":"👫","couple":"👫","two_men_holding_hands":"👬","men_holding_hands":"👬","two_women_holding_hands":"👭","women_holding_hands":"👭","female-police-officer":"👮‍♀️","male-police-officer":"👮‍♂️","cop":"👮‍♂️","women-with-bunny-ears-partying":"👯‍♀️","woman-with-bunny-ears-partying":"👯‍♀️","dancers":"👯‍♀️","men-with-bunny-ears-partying":"👯‍♂️","man-with-bunny-ears-partying":"👯‍♂️","woman_with_veil":"👰‍♀️","man_with_veil":"👰‍♂️","bride_with_veil":"👰","blond-haired-woman":"👱‍♀️","blond-haired-man":"👱‍♂️","person_with_blond_hair":"👱‍♂️","man_with_gua_pi_mao":"👲","woman-wearing-turban":"👳‍♀️","man-wearing-turban":"👳‍♂️","man_with_turban":"👳‍♂️","older_man":"👴","older_woman":"👵","baby":"👶","female-construction-worker":"👷‍♀️","male-construction-worker":"👷‍♂️","construction_worker":"👷‍♂️","princess":"👸","japanese_ogre":"👹","japanese_goblin":"👺","ghost":"👻","angel":"👼","alien":"👽","space_invader":"👾","imp":"👿","skull":"💀","woman-tipping-hand":"💁‍♀️","information_desk_person":"💁‍♀️","man-tipping-hand":"💁‍♂️","female-guard":"💂‍♀️","male-guard":"💂‍♂️","guardsman":"💂‍♂️","dancer":"💃","lipstick":"💄","nail_care":"💅","woman-getting-massage":"💆‍♀️","massage":"💆‍♀️","man-getting-massage":"💆‍♂️","woman-getting-haircut":"💇‍♀️","haircut":"💇‍♀️","man-getting-haircut":"💇‍♂️","barber":"💈","syringe":"💉","pill":"💊","kiss":"💋","love_letter":"💌","ring":"💍","gem":"💎","couplekiss":"💏","bouquet":"💐","couple_with_heart":"💑","wedding":"💒","heartbeat":"💓","broken_heart":"💔","two_hearts":"💕","sparkling_heart":"💖","heartpulse":"💗","cupid":"💘","blue_heart":"💙","green_heart":"💚","yellow_heart":"💛","purple_heart":"💜","gift_heart":"💝","revolving_hearts":"💞","heart_decoration":"💟","diamond_shape_with_a_dot_inside":"💠","bulb":"💡","anger":"💢","bomb":"💣","zzz":"💤","boom":"💥","collision":"💥","sweat_drops":"💦","droplet":"💧","dash":"💨","hankey":"💩","poop":"💩","shit":"💩","muscle":"💪","dizzy":"💫","speech_balloon":"💬","thought_balloon":"💭","white_flower":"💮","moneybag":"💰","currency_exchange":"💱","heavy_dollar_sign":"💲","credit_card":"💳","yen":"💴","dollar":"💵","euro":"💶","pound":"💷","money_with_wings":"💸","chart":"💹","seat":"💺","computer":"💻","briefcase":"💼","minidisc":"💽","floppy_disk":"💾","cd":"💿","dvd":"📀","file_folder":"📁","open_file_folder":"📂","page_with_curl":"📃","page_facing_up":"📄","date":"📅","calendar":"📆","card_index":"📇","chart_with_upwards_trend":"📈","chart_with_downwards_trend":"📉","bar_chart":"📊","clipboard":"📋","pushpin":"📌","round_pushpin":"📍","paperclip":"📎","straight_ruler":"📏","triangular_ruler":"📐","bookmark_tabs":"📑","ledger":"📒","notebook":"📓","notebook_with_decorative_cover":"📔","closed_book":"📕","book":"📖","open_book":"📖","green_book":"📗","blue_book":"📘","orange_book":"📙","books":"📚","name_badge":"📛","scroll":"📜","memo":"📝","pencil":"📝","telephone_receiver":"📞","pager":"📟","fax":"📠","satellite_antenna":"📡","loudspeaker":"📢","mega":"📣","outbox_tray":"📤","inbox_tray":"📥","package":"📦","e-mail":"📧","incoming_envelope":"📨","envelope_with_arrow":"📩","mailbox_closed":"📪","mailbox":"📫","mailbox_with_mail":"📬","mailbox_with_no_mail":"📭","postbox":"📮","postal_horn":"📯","newspaper":"📰","iphone":"📱","calling":"📲","vibration_mode":"📳","mobile_phone_off":"📴","no_mobile_phones":"📵","signal_strength":"📶","camera":"📷","camera_with_flash":"📸","video_camera":"📹","tv":"📺","radio":"📻","vhs":"📼","film_projector":"📽️","prayer_beads":"📿","twisted_rightwards_arrows":"🔀","repeat":"🔁","repeat_one":"🔂","arrows_clockwise":"🔃","arrows_counterclockwise":"🔄","low_brightness":"🔅","high_brightness":"🔆","mute":"🔇","speaker":"🔈","sound":"🔉","loud_sound":"🔊","battery":"🔋","electric_plug":"🔌","mag":"🔍","mag_right":"🔎","lock_with_ink_pen":"🔏","closed_lock_with_key":"🔐","key":"🔑","lock":"🔒","unlock":"🔓","bell":"🔔","no_bell":"🔕","bookmark":"🔖","link":"🔗","radio_button":"🔘","back":"🔙","end":"🔚","on":"🔛","soon":"🔜","top":"🔝","underage":"🔞","keycap_ten":"🔟","capital_abcd":"🔠","abcd":"🔡","symbols":"🔣","abc":"🔤","fire":"🔥","flashlight":"🔦","wrench":"🔧","hammer":"🔨","nut_and_bolt":"🔩","hocho":"🔪","knife":"🔪","gun":"🔫","microscope":"🔬","telescope":"🔭","crystal_ball":"🔮","six_pointed_star":"🔯","beginner":"🔰","trident":"🔱","black_square_button":"🔲","white_square_button":"🔳","red_circle":"🔴","large_blue_circle":"🔵","large_orange_diamond":"🔶","large_blue_diamond":"🔷","small_orange_diamond":"🔸","small_blue_diamond":"🔹","small_red_triangle":"🔺","small_red_triangle_down":"🔻","arrow_up_small":"🔼","arrow_down_small":"🔽","om_symbol":"🕉️","dove_of_peace":"🕊️","kaaba":"🕋","mosque":"🕌","synagogue":"🕍","menorah_with_nine_branches":"🕎","clock1":"🕐","clock2":"🕑","clock3":"🕒","clock4":"🕓","clock5":"🕔","clock6":"🕕","clock7":"🕖","clock8":"🕗","clock9":"🕘","clock10":"🕙","clock11":"🕚","clock12":"🕛","clock130":"🕜","clock230":"🕝","clock330":"🕞","clock430":"🕟","clock530":"🕠","clock630":"🕡","clock730":"🕢","clock830":"🕣","clock930":"🕤","clock1030":"🕥","clock1130":"🕦","clock1230":"🕧","candle":"🕯️","mantelpiece_clock":"🕰️","hole":"🕳️","man_in_business_suit_levitating":"🕴️","female-detective":"🕵️‍♀️","male-detective":"🕵️‍♂️","sleuth_or_spy":"🕵️‍♂️","dark_sunglasses":"🕶️","spider":"🕷️","spider_web":"🕸️","joystick":"🕹️","man_dancing":"🕺","linked_paperclips":"🖇️","lower_left_ballpoint_pen":"🖊️","lower_left_fountain_pen":"🖋️","lower_left_paintbrush":"🖌️","lower_left_crayon":"🖍️","raised_hand_with_fingers_splayed":"🖐️","middle_finger":"🖕","reversed_hand_with_middle_finger_extended":"🖕","spock-hand":"🖖","black_heart":"🖤","desktop_computer":"🖥️","printer":"🖨️","three_button_mouse":"🖱️","trackball":"🖲️","frame_with_picture":"🖼️","card_index_dividers":"🗂️","card_file_box":"🗃️","file_cabinet":"🗄️","wastebasket":"🗑️","spiral_note_pad":"🗒️","spiral_calendar_pad":"🗓️","compression":"🗜️","old_key":"🗝️","rolled_up_newspaper":"🗞️","dagger_knife":"🗡️","speaking_head_in_silhouette":"🗣️","left_speech_bubble":"🗨️","right_anger_bubble":"🗯️","ballot_box_with_ballot":"🗳️","world_map":"🗺️","mount_fuji":"🗻","tokyo_tower":"🗼","statue_of_liberty":"🗽","japan":"🗾","moyai":"🗿","grinning":"😀","grin":"😁","joy":"😂","smiley":"😃","smile":"😄","sweat_smile":"😅","laughing":"😆","satisfied":"😆","innocent":"😇","smiling_imp":"😈","wink":"😉","blush":"😊","yum":"😋","relieved":"😌","heart_eyes":"😍","sunglasses":"😎","smirk":"😏","neutral_face":"😐","expressionless":"😑","unamused":"😒","sweat":"😓","pensive":"😔","confused":"😕","confounded":"😖","kissing":"😗","kissing_heart":"😘","kissing_smiling_eyes":"😙","kissing_closed_eyes":"😚","stuck_out_tongue":"😛","stuck_out_tongue_winking_eye":"😜","stuck_out_tongue_closed_eyes":"😝","disappointed":"😞","worried":"😟","angry":"😠","rage":"😡","cry":"😢","persevere":"😣","triumph":"😤","disappointed_relieved":"😥","frowning":"😦","anguished":"😧","fearful":"😨","weary":"😩","sleepy":"😪","tired_face":"😫","grimacing":"😬","sob":"😭","face_exhaling":"😮‍💨","open_mouth":"😮","hushed":"😯","cold_sweat":"😰","scream":"😱","astonished":"😲","flushed":"😳","sleeping":"😴","face_with_spiral_eyes":"😵‍💫","dizzy_face":"😵","face_in_clouds":"😶‍🌫️","no_mouth":"😶","mask":"😷","smile_cat":"😸","joy_cat":"😹","smiley_cat":"😺","heart_eyes_cat":"😻","smirk_cat":"😼","kissing_cat":"😽","pouting_cat":"😾","crying_cat_face":"😿","scream_cat":"🙀","slightly_frowning_face":"🙁","slightly_smiling_face":"🙂","upside_down_face":"🙃","face_with_rolling_eyes":"🙄","woman-gesturing-no":"🙅‍♀️","no_good":"🙅‍♀️","man-gesturing-no":"🙅‍♂️","woman-gesturing-ok":"🙆‍♀️","ok_woman":"🙆‍♀️","man-gesturing-ok":"🙆‍♂️","woman-bowing":"🙇‍♀️","man-bowing":"🙇‍♂️","bow":"🙇‍♂️","see_no_evil":"🙈","hear_no_evil":"🙉","speak_no_evil":"🙊","woman-raising-hand":"🙋‍♀️","raising_hand":"🙋‍♀️","man-raising-hand":"🙋‍♂️","raised_hands":"🙌","woman-frowning":"🙍‍♀️","person_frowning":"🙍‍♀️","man-frowning":"🙍‍♂️","woman-pouting":"🙎‍♀️","person_with_pouting_face":"🙎‍♀️","man-pouting":"🙎‍♂️","pray":"🙏","rocket":"🚀","helicopter":"🚁","steam_locomotive":"🚂","railway_car":"🚃","bullettrain_side":"🚄","bullettrain_front":"🚅","train2":"🚆","metro":"🚇","light_rail":"🚈","station":"🚉","tram":"🚊","train":"🚋","bus":"🚌","oncoming_bus":"🚍","trolleybus":"🚎","busstop":"🚏","minibus":"🚐","ambulance":"🚑","fire_engine":"🚒","police_car":"🚓","oncoming_police_car":"🚔","taxi":"🚕","oncoming_taxi":"🚖","car":"🚗","red_car":"🚗","oncoming_automobile":"🚘","blue_car":"🚙","truck":"🚚","articulated_lorry":"🚛","tractor":"🚜","monorail":"🚝","mountain_railway":"🚞","suspension_railway":"🚟","mountain_cableway":"🚠","aerial_tramway":"🚡","ship":"🚢","woman-rowing-boat":"🚣‍♀️","man-rowing-boat":"🚣‍♂️","rowboat":"🚣‍♂️","speedboat":"🚤","traffic_light":"🚥","vertical_traffic_light":"🚦","construction":"🚧","rotating_light":"🚨","triangular_flag_on_post":"🚩","door":"🚪","no_entry_sign":"🚫","smoking":"🚬","no_smoking":"🚭","put_litter_in_its_place":"🚮","do_not_litter":"🚯","potable_water":"🚰","non-potable_water":"🚱","bike":"🚲","no_bicycles":"🚳","woman-biking":"🚴‍♀️","man-biking":"🚴‍♂️","bicyclist":"🚴‍♂️","woman-mountain-biking":"🚵‍♀️","man-mountain-biking":"🚵‍♂️","mountain_bicyclist":"🚵‍♂️","woman-walking":"🚶‍♀️","man-walking":"🚶‍♂️","walking":"🚶‍♂️","no_pedestrians":"🚷","children_crossing":"🚸","mens":"🚹","womens":"🚺","restroom":"🚻","baby_symbol":"🚼","toilet":"🚽","wc":"🚾","shower":"🚿","bath":"🛀","bathtub":"🛁","passport_control":"🛂","customs":"🛃","baggage_claim":"🛄","left_luggage":"🛅","couch_and_lamp":"🛋️","sleeping_accommodation":"🛌","shopping_bags":"🛍️","bellhop_bell":"🛎️","bed":"🛏️","place_of_worship":"🛐","octagonal_sign":"🛑","shopping_trolley":"🛒","hindu_temple":"🛕","hut":"🛖","elevator":"🛗","hammer_and_wrench":"🛠️","shield":"🛡️","oil_drum":"🛢️","motorway":"🛣️","railway_track":"🛤️","motor_boat":"🛥️","small_airplane":"🛩️","airplane_departure":"🛫","airplane_arriving":"🛬","satellite":"🛰️","passenger_ship":"🛳️","scooter":"🛴","motor_scooter":"🛵","canoe":"🛶","sled":"🛷","flying_saucer":"🛸","skateboard":"🛹","auto_rickshaw":"🛺","pickup_truck":"🛻","roller_skate":"🛼","large_orange_circle":"🟠","large_yellow_circle":"🟡","large_green_circle":"🟢","large_purple_circle":"🟣","large_brown_circle":"🟤","large_red_square":"🟥","large_blue_square":"🟦","large_orange_square":"🟧","large_yellow_square":"🟨","large_green_square":"🟩","large_purple_square":"🟪","large_brown_square":"🟫","pinched_fingers":"🤌","white_heart":"🤍","brown_heart":"🤎","pinching_hand":"🤏","zipper_mouth_face":"🤐","money_mouth_face":"🤑","face_with_thermometer":"🤒","nerd_face":"🤓","thinking_face":"🤔","face_with_head_bandage":"🤕","robot_face":"🤖","hugging_face":"🤗","the_horns":"🤘","sign_of_the_horns":"🤘","call_me_hand":"🤙","raised_back_of_hand":"🤚","left-facing_fist":"🤛","right-facing_fist":"🤜","handshake":"🤝","crossed_fingers":"🤞","hand_with_index_and_middle_fingers_crossed":"🤞","i_love_you_hand_sign":"🤟","face_with_cowboy_hat":"🤠","clown_face":"🤡","nauseated_face":"🤢","rolling_on_the_floor_laughing":"🤣","drooling_face":"🤤","lying_face":"🤥","woman-facepalming":"🤦‍♀️","man-facepalming":"🤦‍♂️","face_palm":"🤦","sneezing_face":"🤧","face_with_raised_eyebrow":"🤨","face_with_one_eyebrow_raised":"🤨","star-struck":"🤩","grinning_face_with_star_eyes":"🤩","zany_face":"🤪","grinning_face_with_one_large_and_one_small_eye":"🤪","shushing_face":"🤫","face_with_finger_covering_closed_lips":"🤫","face_with_symbols_on_mouth":"🤬","serious_face_with_symbols_covering_mouth":"🤬","face_with_hand_over_mouth":"🤭","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"🤭","face_vomiting":"🤮","face_with_open_mouth_vomiting":"🤮","exploding_head":"🤯","shocked_face_with_exploding_head":"🤯","pregnant_woman":"🤰","breast-feeding":"🤱","palms_up_together":"🤲","selfie":"🤳","prince":"🤴","woman_in_tuxedo":"🤵‍♀️","man_in_tuxedo":"🤵‍♂️","person_in_tuxedo":"🤵","mrs_claus":"🤶","mother_christmas":"🤶","woman-shrugging":"🤷‍♀️","man-shrugging":"🤷‍♂️","shrug":"🤷","woman-cartwheeling":"🤸‍♀️","man-cartwheeling":"🤸‍♂️","person_doing_cartwheel":"🤸","woman-juggling":"🤹‍♀️","man-juggling":"🤹‍♂️","juggling":"🤹","fencer":"🤺","woman-wrestling":"🤼‍♀️","man-wrestling":"🤼‍♂️","wrestlers":"🤼","woman-playing-water-polo":"🤽‍♀️","man-playing-water-polo":"🤽‍♂️","water_polo":"🤽","woman-playing-handball":"🤾‍♀️","man-playing-handball":"🤾‍♂️","handball":"🤾","diving_mask":"🤿","wilted_flower":"🥀","drum_with_drumsticks":"🥁","clinking_glasses":"🥂","tumbler_glass":"🥃","spoon":"🥄","goal_net":"🥅","first_place_medal":"🥇","second_place_medal":"🥈","third_place_medal":"🥉","boxing_glove":"🥊","martial_arts_uniform":"🥋","curling_stone":"🥌","lacrosse":"🥍","softball":"🥎","flying_disc":"🥏","croissant":"🥐","avocado":"🥑","cucumber":"🥒","bacon":"🥓","potato":"🥔","carrot":"🥕","baguette_bread":"🥖","green_salad":"🥗","shallow_pan_of_food":"🥘","stuffed_flatbread":"🥙","egg":"🥚","glass_of_milk":"🥛","peanuts":"🥜","kiwifruit":"🥝","pancakes":"🥞","dumpling":"🥟","fortune_cookie":"🥠","takeout_box":"🥡","chopsticks":"🥢","bowl_with_spoon":"🥣","cup_with_straw":"🥤","coconut":"🥥","broccoli":"🥦","pie":"🥧","pretzel":"🥨","cut_of_meat":"🥩","sandwich":"🥪","canned_food":"🥫","leafy_green":"🥬","mango":"🥭","moon_cake":"🥮","bagel":"🥯","smiling_face_with_3_hearts":"🥰","yawning_face":"🥱","smiling_face_with_tear":"🥲","partying_face":"🥳","woozy_face":"🥴","hot_face":"🥵","cold_face":"🥶","ninja":"🥷","disguised_face":"🥸","pleading_face":"🥺","sari":"🥻","lab_coat":"🥼","goggles":"🥽","hiking_boot":"🥾","womans_flat_shoe":"🥿","crab":"🦀","lion_face":"🦁","scorpion":"🦂","turkey":"🦃","unicorn_face":"🦄","eagle":"🦅","duck":"🦆","bat":"🦇","shark":"🦈","owl":"🦉","fox_face":"🦊","butterfly":"🦋","deer":"🦌","gorilla":"🦍","lizard":"🦎","rhinoceros":"🦏","shrimp":"🦐","squid":"🦑","giraffe_face":"🦒","zebra_face":"🦓","hedgehog":"🦔","sauropod":"🦕","t-rex":"🦖","cricket":"🦗","kangaroo":"🦘","llama":"🦙","peacock":"🦚","hippopotamus":"🦛","parrot":"🦜","raccoon":"🦝","lobster":"🦞","mosquito":"🦟","microbe":"🦠","badger":"🦡","swan":"🦢","mammoth":"🦣","dodo":"🦤","sloth":"🦥","otter":"🦦","orangutan":"🦧","skunk":"🦨","flamingo":"🦩","oyster":"🦪","beaver":"🦫","bison":"🦬","seal":"🦭","guide_dog":"🦮","probing_cane":"🦯","bone":"🦴","leg":"🦵","foot":"🦶","tooth":"🦷","female_superhero":"🦸‍♀️","male_superhero":"🦸‍♂️","superhero":"🦸","female_supervillain":"🦹‍♀️","male_supervillain":"🦹‍♂️","supervillain":"🦹","safety_vest":"🦺","ear_with_hearing_aid":"🦻","motorized_wheelchair":"🦼","manual_wheelchair":"🦽","mechanical_arm":"🦾","mechanical_leg":"🦿","cheese_wedge":"🧀","cupcake":"🧁","salt":"🧂","beverage_box":"🧃","garlic":"🧄","onion":"🧅","falafel":"🧆","waffle":"🧇","butter":"🧈","mate_drink":"🧉","ice_cube":"🧊","bubble_tea":"🧋","woman_standing":"🧍‍♀️","man_standing":"🧍‍♂️","standing_person":"🧍","woman_kneeling":"🧎‍♀️","man_kneeling":"🧎‍♂️","kneeling_person":"🧎","deaf_woman":"🧏‍♀️","deaf_man":"🧏‍♂️","deaf_person":"🧏","face_with_monocle":"🧐","farmer":"🧑‍🌾","cook":"🧑‍🍳","person_feeding_baby":"🧑‍🍼","mx_claus":"🧑‍🎄","student":"🧑‍🎓","singer":"🧑‍🎤","artist":"🧑‍🎨","teacher":"🧑‍🏫","factory_worker":"🧑‍🏭","technologist":"🧑‍💻","office_worker":"🧑‍💼","mechanic":"🧑‍🔧","scientist":"🧑‍🔬","astronaut":"🧑‍🚀","firefighter":"🧑‍🚒","people_holding_hands":"🧑‍🤝‍🧑","person_with_probing_cane":"🧑‍🦯","red_haired_person":"🧑‍🦰","curly_haired_person":"🧑‍🦱","bald_person":"🧑‍🦲","white_haired_person":"🧑‍🦳","person_in_motorized_wheelchair":"🧑‍🦼","person_in_manual_wheelchair":"🧑‍🦽","health_worker":"🧑‍⚕️","judge":"🧑‍⚖️","pilot":"🧑‍✈️","adult":"🧑","child":"🧒","older_adult":"🧓","woman_with_beard":"🧔‍♀️","man_with_beard":"🧔‍♂️","bearded_person":"🧔","person_with_headscarf":"🧕","woman_in_steamy_room":"🧖‍♀️","man_in_steamy_room":"🧖‍♂️","person_in_steamy_room":"🧖‍♂️","woman_climbing":"🧗‍♀️","person_climbing":"🧗‍♀️","man_climbing":"🧗‍♂️","woman_in_lotus_position":"🧘‍♀️","person_in_lotus_position":"🧘‍♀️","man_in_lotus_position":"🧘‍♂️","female_mage":"🧙‍♀️","mage":"🧙‍♀️","male_mage":"🧙‍♂️","female_fairy":"🧚‍♀️","fairy":"🧚‍♀️","male_fairy":"🧚‍♂️","female_vampire":"🧛‍♀️","vampire":"🧛‍♀️","male_vampire":"🧛‍♂️","mermaid":"🧜‍♀️","merman":"🧜‍♂️","merperson":"🧜‍♂️","female_elf":"🧝‍♀️","male_elf":"🧝‍♂️","elf":"🧝‍♂️","female_genie":"🧞‍♀️","male_genie":"🧞‍♂️","genie":"🧞‍♂️","female_zombie":"🧟‍♀️","male_zombie":"🧟‍♂️","zombie":"🧟‍♂️","brain":"🧠","orange_heart":"🧡","billed_cap":"🧢","scarf":"🧣","gloves":"🧤","coat":"🧥","socks":"🧦","red_envelope":"🧧","firecracker":"🧨","jigsaw":"🧩","test_tube":"🧪","petri_dish":"🧫","dna":"🧬","compass":"🧭","abacus":"🧮","fire_extinguisher":"🧯","toolbox":"🧰","bricks":"🧱","magnet":"🧲","luggage":"🧳","lotion_bottle":"🧴","thread":"🧵","yarn":"🧶","safety_pin":"🧷","teddy_bear":"🧸","broom":"🧹","basket":"🧺","roll_of_paper":"🧻","soap":"🧼","sponge":"🧽","receipt":"🧾","nazar_amulet":"🧿","ballet_shoes":"🩰","one-piece_swimsuit":"🩱","briefs":"🩲","shorts":"🩳","thong_sandal":"🩴","drop_of_blood":"🩸","adhesive_bandage":"🩹","stethoscope":"🩺","yo-yo":"🪀","kite":"🪁","parachute":"🪂","boomerang":"🪃","magic_wand":"🪄","pinata":"🪅","nesting_dolls":"🪆","ringed_planet":"🪐","chair":"🪑","razor":"🪒","axe":"🪓","diya_lamp":"🪔","banjo":"🪕","military_helmet":"🪖","accordion":"🪗","long_drum":"🪘","coin":"🪙","carpentry_saw":"🪚","screwdriver":"🪛","ladder":"🪜","hook":"🪝","mirror":"🪞","window":"🪟","plunger":"🪠","sewing_needle":"🪡","knot":"🪢","bucket":"🪣","mouse_trap":"🪤","toothbrush":"🪥","headstone":"🪦","placard":"🪧","rock":"🪨","fly":"🪰","worm":"🪱","beetle":"🪲","cockroach":"🪳","potted_plant":"🪴","wood":"🪵","feather":"🪶","anatomical_heart":"🫀","lungs":"🫁","people_hugging":"🫂","blueberries":"🫐","bell_pepper":"🫑","olive":"🫒","flatbread":"🫓","tamale":"🫔","fondue":"🫕","teapot":"🫖","bangbang":"‼️","interrobang":"⁉️","tm":"™️","information_source":"ℹ️","left_right_arrow":"↔️","arrow_up_down":"↕️","arrow_upper_left":"↖️","arrow_upper_right":"↗️","arrow_lower_right":"↘️","arrow_lower_left":"↙️","leftwards_arrow_with_hook":"↩️","arrow_right_hook":"↪️","watch":"⌚","hourglass":"⌛","keyboard":"⌨️","eject":"⏏️","fast_forward":"⏩","rewind":"⏪","arrow_double_up":"⏫","arrow_double_down":"⏬","black_right_pointing_double_triangle_with_vertical_bar":"⏭️","black_left_pointing_double_triangle_with_vertical_bar":"⏮️","black_right_pointing_triangle_with_double_vertical_bar":"⏯️","alarm_clock":"⏰","stopwatch":"⏱️","timer_clock":"⏲️","hourglass_flowing_sand":"⏳","double_vertical_bar":"⏸️","black_square_for_stop":"⏹️","black_circle_for_record":"⏺️","m":"Ⓜ️","black_small_square":"▪️","white_small_square":"▫️","arrow_forward":"▶️","arrow_backward":"◀️","white_medium_square":"◻️","black_medium_square":"◼️","white_medium_small_square":"◽","black_medium_small_square":"◾","sunny":"☀️","cloud":"☁️","umbrella":"☂️","snowman":"☃️","comet":"☄️","phone":"☎️","telephone":"☎️","ballot_box_with_check":"☑️","shamrock":"☘️","point_up":"☝️","skull_and_crossbones":"☠️","radioactive_sign":"☢️","biohazard_sign":"☣️","orthodox_cross":"☦️","star_and_crescent":"☪️","peace_symbol":"☮️","yin_yang":"☯️","wheel_of_dharma":"☸️","white_frowning_face":"☹️","relaxed":"☺️","female_sign":"♀️","male_sign":"♂️","gemini":"♊","cancer":"♋","leo":"♌","virgo":"♍","libra":"♎","scorpius":"♏","chess_pawn":"♟️","spades":"♠️","clubs":"♣️","hearts":"♥️","diamonds":"♦️","hotsprings":"♨️","recycle":"♻️","infinity":"♾️","wheelchair":"♿","hammer_and_pick":"⚒️","crossed_swords":"⚔️","medical_symbol":"⚕️","staff_of_aesculapius":"⚕️","scales":"⚖️","alembic":"⚗️","gear":"⚙️","atom_symbol":"⚛️","fleur_de_lis":"⚜️","warning":"⚠️","zap":"⚡","transgender_symbol":"⚧️","white_circle":"⚪","black_circle":"⚫","coffin":"⚰️","funeral_urn":"⚱️","soccer":"⚽","baseball":"⚾","snowman_without_snow":"⛄","partly_sunny":"⛅","thunder_cloud_and_rain":"⛈️","ophiuchus":"⛎","pick":"⛏️","helmet_with_white_cross":"⛑️","chains":"⛓️","no_entry":"⛔","shinto_shrine":"⛩️","church":"⛪","mountain":"⛰️","umbrella_on_ground":"⛱️","fountain":"⛲","golf":"⛳","ferry":"⛴️","boat":"⛵","sailboat":"⛵","skier":"⛷️","ice_skate":"⛸️","woman-bouncing-ball":"⛹️‍♀️","man-bouncing-ball":"⛹️‍♂️","person_with_ball":"⛹️‍♂️","tent":"⛺","fuelpump":"⛽","scissors":"✂️","airplane":"✈️","email":"✉️","envelope":"✉️","fist":"✊","hand":"✋","raised_hand":"✋","v":"✌️","writing_hand":"✍️","pencil2":"✏️","black_nib":"✒️","heavy_check_mark":"✔️","heavy_multiplication_x":"✖️","latin_cross":"✝️","star_of_david":"✡️","eight_spoked_asterisk":"✳️","eight_pointed_black_star":"✴️","snowflake":"❄️","sparkle":"❇️","x":"❌","negative_squared_cross_mark":"❎","heavy_heart_exclamation_mark_ornament":"❣️","heart_on_fire":"❤️‍🔥","mending_heart":"❤️‍🩹","heart":"❤️","arrow_right":"➡️","curly_loop":"➰","loop":"➿","arrow_heading_up":"⤴️","arrow_heading_down":"⤵️","arrow_left":"⬅️","arrow_up":"⬆️","arrow_down":"⬇️","black_large_square":"⬛","white_large_square":"⬜","star":"⭐","o":"⭕","wavy_dash":"〰️","part_alternation_mark":"〽️","congratulations":"㊗️","secret":"㊙️"}');

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		loaded: false,
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Flag the module as loaded
/******/ 	module.loaded = true;
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/node module decorator */
/******/ (() => {
/******/ 	__webpack_require__.nmd = (module) => {
/******/ 		module.paths = [];
/******/ 		if (!module.children) module.children = [];
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./client/src/integrations/emoji/index.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "integration": () => (/* binding */ integration)
/* harmony export */ });
/* harmony import */ var _integration_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-provider */ "./client/src/integrations/emoji/integration-provider.ts");

const integration = new _integration_provider__WEBPACK_IMPORTED_MODULE_0__.EmojiIntegrationProvider();

})();

var __webpack_exports__integration = __webpack_exports__.integration;
export { __webpack_exports__integration as integration };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7VUFDQTtVQUNBLENBQUM7Ozs7O1VDUEQ7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0prRTtBQUUzRCxNQUFNLFdBQVcsR0FBRyxJQUFJLDJFQUF3QixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9Ab3BlbmZpbi93b3Jrc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXRlcmF0b3JUb0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9ub2RlLWVtb2ppL2luZGV4LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL25vZGUtZW1vamkvbGliL2Vtb2ppLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi9jbGllbnQvc3JjL2ludGVncmF0aW9ucy9lbW9qaS9pbnRlZ3JhdGlvbi1wcm92aWRlci50cyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4vY2xpZW50L3NyYy9pbnRlZ3JhdGlvbnMvZW1vamkvdGVtcGxhdGVzLnRzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi9jbGllbnQvc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi9jbGllbnQvc3JjL3RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4vY2xpZW50L3NyYy90aGVtZXMudHMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4vY2xpZW50L3NyYy9pbnRlZ3JhdGlvbnMvZW1vamkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9ezcwMzooZSx0LG4pPT57bi5yKHQpLG4uZCh0LHtDTElBY3Rpb246KCk9PmwuUHQsQ0xJRmlsdGVyT3B0aW9uVHlwZTooKT0+bC5lbCxDTElUZW1wbGF0ZTooKT0+bC55VyxkZXJlZ2lzdGVyOigpPT5ldCxoaWRlOigpPT5udCxyZWdpc3RlcjooKT0+WWUsc2hvdzooKT0+dHR9KTt2YXIgbz17fTtuLnIobyksbi5kKG8se3N1YnNjcmliZTooKT0+YWV9KTt2YXIgcj17fTtuLnIociksbi5kKHIse2NyZWF0ZTooKT0+SGV9KTt2YXIgaT1uKDY3OCkscz1uKDUzMiksYT1uKDQzNik7Y29uc3QgYz1cImhvbWVcIjt2YXIgZDshZnVuY3Rpb24oZSl7ZS5Db21tYW5kcz1cImhvbWUtY29tbWFuZHNcIn0oZHx8KGQ9e30pKTt2YXIgdSxwPW4oODA2KSxsPShuKDI5OCksbig3NTgpKTtuKDExNCksbigxMDkpLG4oNDI3KTshZnVuY3Rpb24oZSl7ZVtlLkluaXRpYWw9MF09XCJJbml0aWFsXCIsZVtlLk9wZW49MV09XCJPcGVuXCIsZVtlLkNsb3NlPTJdPVwiQ2xvc2VcIn0odXx8KHU9e30pKTt2YXIgZj1uKDMxNik7Y29uc3Qgdz1cImFsbFwiLGc9XCIwXCIsaD1cIjVcIix5PVwiNlwiLHY9KCk9Pnt9O2Z1bmN0aW9uIG0oZSx0KXtyZXR1cm4gZT9gJHtlfS0ke3R9YDp0fWZ1bmN0aW9uIFMoZSl7cmV0dXJuYF9fc2VhcmNoLSR7ZX0tdG9waWNfX2B9Y29uc3QgUD1uZXcgTWFwO2Z1bmN0aW9uIEMoZSx0KXtQLmhhcyhlKXx8UC5zZXQoZSxuZXcgU2V0KSxQLmdldChlKS5hZGQodCl9ZnVuY3Rpb24gayhlLHQpe2NvbnN0IG49UC5nZXQoZSk7biYmbi5kZWxldGUodCl9Y29uc3QgVz1uZXcgTWFwO2Z1bmN0aW9uIFIoZSx0KXtXLmhhcyhlKXx8Vy5zZXQoZSxuZXcgU2V0KSxXLmdldChlKS5hZGQodCl9ZnVuY3Rpb24gVChlLHQpe2NvbnN0IG49Vy5nZXQoZSk7biYmbi5kZWxldGUodCl9Y29uc3QgST1uZXcgTWFwO2FzeW5jIGZ1bmN0aW9uIGIoZSx0KXtJLmhhcyhlKXx8SS5zZXQoZSxuZXcgTWFwKSxJLmdldChlKS5zZXQodC5pZCx0KTtjb25zdCBuPVAuZ2V0KGUpO2lmKCFuKXJldHVybjtjb25zdCBvPVsuLi5uXS5tYXAoKGU9PmUoKSkpO2F3YWl0IFByb21pc2UuYWxsKG8pfWFzeW5jIGZ1bmN0aW9uIEQoZSx0KXtjb25zdCBuPUkuZ2V0KGUpO2lmKCFuKXJldHVybjtuLmRlbGV0ZSh0KTtjb25zdCBvPVcuZ2V0KGUpO2lmKCFvKXJldHVybjtjb25zdCByPVsuLi5vXS5tYXAoKGU9PmUoKSkpO2F3YWl0IFByb21pc2UuYWxsKHIpfWZ1bmN0aW9uIEIoZSl7cmV0dXJuIEkuZ2V0KGUpP1suLi5JLmdldChlKS52YWx1ZXMoKV06W119ZnVuY3Rpb24gRihlKXtjb25zdCB0PUkuZ2V0KGUpO3QmJnQuY2xlYXIoKX1mdW5jdGlvbiBMKGUsdCl7Y29uc3Qgbj1JLmdldChlKTtyZXR1cm4gbj9uLmdldCh0KTpudWxsfWZ1bmN0aW9uIEEoZSx0LG4pe3JldHVybnsuLi5lLGFjdGlvbjpufHx7Li4uZS5hY3Rpb25zWzBdLHRyaWdnZXI6Zi5weC5Vc2VyQWN0aW9ufSxkaXNwYXRjaGVySWRlbnRpdHk6dH19ZnVuY3Rpb24gTyhlLHQsbj1cImFzY2VuZGluZ1wiKXtjb25zdCBvPWV8fFtdO2lmKCF0Py5sZW5ndGgpcmV0dXJuIG87Y29uc3Qgcj1bXSxpPW5ldyBNYXA7dC5mb3JFYWNoKChlPT57aWYoZS5rZXkpcmV0dXJuIGkuc2V0KGUua2V5LGUpO3IucHVzaChlKX0pKTtsZXQgcz1vLm1hcCgoZT0+e2NvbnN0e2tleTp0fT1lO2lmKHQmJmkuaGFzKHQpKXtjb25zdCBlPWkuZ2V0KHQpO3JldHVybiBpLmRlbGV0ZSh0KSxlfXJldHVybiBlfSkpO3JldHVybiBzLnB1c2goLi4uaS52YWx1ZXMoKSwuLi5yKSxzPVwiYXNjZW5kaW5nXCI9PT1uP3Muc29ydCgoKGUsdCk9PihudWxsIT09ZS5zY29yZSYmdm9pZCAwIT09ZS5zY29yZT9lLnNjb3JlOjEvMCktKG51bGwhPT10LnNjb3JlJiZ2b2lkIDAhPT10LnNjb3JlP3Quc2NvcmU6MS8wKSkpOnMuc29ydCgoKGUsdCk9PihudWxsIT09dC5zY29yZSYmdm9pZCAwIT09dC5zY29yZT90LnNjb3JlOjEvMCktKG51bGwhPT1lLnNjb3JlJiZ2b2lkIDAhPT1lLnNjb3JlP2Uuc2NvcmU6MS8wKSkpLHN9ZnVuY3Rpb24geChlKXtjb25zdCB0PXt9O2xldCBuPVtdO2xldCBvPVtdO2xldCByPXUuSW5pdGlhbDt0LmdldFN0YXR1cz0oKT0+cix0LmdldFJlc3VsdEJ1ZmZlcj0oKT0+bix0LnNldFJlc3VsdEJ1ZmZlcj1lPT57bj1lLG4/Lmxlbmd0aCYmdC5vbkNoYW5nZSgpfSx0LmdldFJldm9rZWRCdWZmZXI9KCk9Pm8sdC5zZXRSZXZva2VkQnVmZmVyPWU9PntvPWUsbz8ubGVuZ3RoJiZ0Lm9uQ2hhbmdlKCl9LHQub25DaGFuZ2U9djtjb25zdCBpPXt9O3JldHVybiB0LnJlcz1pLGkuY2xvc2U9KCk9PntyIT09dS5DbG9zZSYmKHI9dS5DbG9zZSx0Lm9uQ2hhbmdlKCkpfSxpLm9wZW49KCk9PntyIT09dS5PcGVuJiYocj11Lk9wZW4sdC5vbkNoYW5nZSgpKX0saS5yZXNwb25kPW49Pntjb25zdCBvPU8odC5nZXRSZXN1bHRCdWZmZXIoKSxuLGUpO3Quc2V0UmVzdWx0QnVmZmVyKG8pfSxpLnJldm9rZT0oLi4uZSk9Pntjb25zdCBuPW5ldyBTZXQoZSksbz10LmdldFJlc3VsdEJ1ZmZlcigpLmZpbHRlcigoKHtrZXk6ZX0pPT57Y29uc3QgdD1uLmhhcyhlKTtyZXR1cm4gdCYmbi5kZWxldGUoZSksIXR9KSk7dC5zZXRSZXN1bHRCdWZmZXIobyksbi5zaXplJiYodC5nZXRSZXZva2VkQnVmZmVyKCkuZm9yRWFjaCgoZT0+bi5hZGQoZSkpKSx0LnNldFJldm9rZWRCdWZmZXIoWy4uLm5dKSl9LHR9ZnVuY3Rpb24gRShlLHQsbil7Y29uc3Qgbz1uZXcgU2V0O2xldCByPSExO3JldHVybntjbG9zZTooKT0+e3I9ITA7Zm9yKGNvbnN0IGUgb2YgbyllKCl9LHJlcTp7aWQ6dCx0b3BpYzplLC4uLm4sY29udGV4dDpuPy5jb250ZXh0fHx7fSxvbkNsb3NlOmU9PntvLmFkZChlKSxyJiZlKCl9LHJlbW92ZUxpc3RlbmVyOmU9PntvLmRlbGV0ZShlKX19fX1mdW5jdGlvbiBWKCl7cmV0dXJue25hbWU6ZmluLm1lLm5hbWUsdXVpZDpmaW4ubWUudXVpZH19ZnVuY3Rpb24gTSgpe2xldCBlO3RyeXtjb25zdCB0PWZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO2lmKCF0Py5pZGVudGl0eSlyZXR1cm47ZT10LmlkZW50aXR5LnV1aWR9Y2F0Y2goZSl7fXJldHVybiBlfWNvbnN0IF89XCJkZXJlZ2lzdGVyZWQgb3IgZG9lcyBub3QgZXhpc3RcIiwkPW5ldyBFcnJvcihgcHJvdmlkZXIgJHtffWApLHE9bmV3IEVycm9yKFwicHJvdmlkZXIgd2l0aCBuYW1lIGFscmVhZHkgZXhpc3RzXCIpLEc9bmV3IEVycm9yKFwiYmFkIHBheWxvYWRcIiksSD1uZXcgRXJyb3IoXCJzdWJzY3JpcHRpb24gcmVqZWN0ZWRcIiksTj1uZXcgRXJyb3IoYGNoYW5uZWwgJHtffWApLFU9bmV3IE1hcDtmdW5jdGlvbiBqKGUpe2NvbnN0IHQ9WChlKTtpZih0KXJldHVybiB0O3Rocm93IE59ZnVuY3Rpb24gWChlKXtjb25zdCB0PVUuZ2V0KGUpO2lmKHQpcmV0dXJuIHR9ZnVuY3Rpb24gSyhlLHQpe1Uuc2V0KGUsdCl9Y29uc3QgSj1uZXcgTWFwO2Z1bmN0aW9uIHooZSl7Si5oYXMoZSl8fEouc2V0KGUsbmV3IE1hcCk7Y29uc3QgdD1KLmdldChlKTtyZXR1cm57Z2V0UmVxdWVzdHNGb3JJZGVudGl0eTplPT57Y29uc3Qgbj1mdW5jdGlvbihlKXtyZXR1cm5gJHtlLnV1aWR9OiR7ZS5uYW1lfWB9KGUpO3JldHVybiB0LmhhcyhuKXx8dC5zZXQobixuZXcgTWFwKSx0LmdldChuKX19fWFzeW5jIGZ1bmN0aW9uIFooZSx0KXtyZXR1cm4oYXdhaXQgaihlKSkuZGlzcGF0Y2goZyx0KX1mdW5jdGlvbiBRKHtuYW1lc3BhY2VkVG9waWM6ZSx0b3BpYzp0fSl7Y29uc3Qgbj1MLmJpbmQobnVsbCxlKSxvPXooZSkscj1aLmJpbmQobnVsbCxlKTtyZXR1cm4gYXN5bmMoZSxpKT0+e2lmKCFlfHwhZS5pZHx8IWUucHJvdmlkZXJJZCl7Y29uc3QgZT1HO3JldHVybntlcnJvcjplLm1lc3NhZ2V9fWNvbnN0e2lkOnMscHJvdmlkZXJJZDphfT1lLGM9bihhKTtpZighYyl7Y29uc3QgZT0kO3JldHVybntlcnJvcjplLm1lc3NhZ2V9fWNvbnN0IGQ9by5nZXRSZXF1ZXN0c0ZvcklkZW50aXR5KGkpO2xldCB1PWQuZ2V0KGUuaWQpO3V8fCh1PUUodCxzLGUpLGQuc2V0KGUuaWQsdSkpO2NvbnN0IHA9eCgpLGw9KCk9Pntjb25zdCBlPXAuZ2V0UmVzdWx0QnVmZmVyKCk7cC5zZXRSZXN1bHRCdWZmZXIoW10pO2NvbnN0IHQ9cC5nZXRSZXZva2VkQnVmZmVyKCk7cC5zZXRSZXZva2VkQnVmZmVyKFtdKTtjb25zdCBuPXAuZ2V0U3RhdHVzKCk7cih7aWQ6cyxwcm92aWRlcklkOmEscmVzdWx0czplLHJldm9rZWQ6dCxzdGF0dXM6bn0pfTtsZXQgZj0hMCx3PSExO3Aub25DaGFuZ2U9KCk9PntpZihmKXJldHVybiBmPSExLHZvaWQgbCgpO3d8fCh3PSEwLHNldFRpbWVvdXQoKCgpPT57dz0hMSxsKCl9KSwxMDApKX07dHJ5e2NvbnN0e3Jlc3VsdHM6ZSxjb250ZXh0OnR9PWF3YWl0IGMub25Vc2VySW5wdXQodS5yZXEscC5yZXMpLG49cC5nZXRTdGF0dXMoKTtyZXR1cm57aWQ6cyxwcm92aWRlcklkOmEsc3RhdHVzOm4scmVzdWx0czplLGNvbnRleHQ6dH19Y2F0Y2goZSl7cmV0dXJue2lkOnMscHJvdmlkZXJJZDphLGVycm9yOmUubWVzc2FnZX19fX1hc3luYyBmdW5jdGlvbiBZKGUsdCxuKXtjb25zdCBvPW58fGF3YWl0IGooZSkscj1WKCksaT17aWRlbnRpdHk6ciwuLi50LG9uVXNlcklucHV0OnZvaWQgMCxvblJlc3VsdERpc3BhdGNoOnZvaWQgMH0scz1hd2FpdCBvLmRpc3BhdGNoKFwiMlwiLGkpO3JldHVybiBhd2FpdCBiKGUse2lkZW50aXR5OnIsLi4udH0pLHN9YXN5bmMgZnVuY3Rpb24gZWUoZSx0KXtjb25zdCBuPWF3YWl0IGooZSk7cmV0dXJuIGF3YWl0IG4uZGlzcGF0Y2goXCIzXCIsdCksRChlLHQpfWFzeW5jIGZ1bmN0aW9uIHRlKGUsdCxuLG8pe2NvbnN0IHI9QShuLFYoKSxvKSxpPUwoZSx0KTtpZihpKXtjb25zdHtvblJlc3VsdERpc3BhdGNoOmV9PWk7aWYoIWUpcmV0dXJuO3JldHVybiBlKHIpfWNvbnN0IHM9e3Byb3ZpZGVySWQ6dCxyZXN1bHQ6cn07cmV0dXJuKGF3YWl0IGooZSkpLmRpc3BhdGNoKGgscyl9YXN5bmMgZnVuY3Rpb24gbmUoZSx0KXtjb25zdCBuPXsuLi50LGNvbnRleHQ6dD8uY29udGV4dHx8e319LG89e30scj1hc3luYyBmdW5jdGlvbiooZSx0LHtzZXRTdGF0ZTpufSl7Y29uc3Qgbz1hd2FpdCBqKGUpO2Zvcig7Oyl7Y29uc3QgZT1hd2FpdCBvLmRpc3BhdGNoKFwiMVwiLHQpLHI9ZS5lcnJvcjtpZihyKXRocm93IG5ldyBFcnJvcihyKTtjb25zdCBpPWU7aWYodC5pZD1pLmlkLG4oaS5zdGF0ZSksaS5kb25lKXJldHVybiBpLnZhbHVlO3lpZWxkIGkudmFsdWV9fShlLG4se3NldFN0YXRlOmU9PntvLnN0YXRlPWV9fSk7bGV0IGk9YXdhaXQgci5uZXh0KCk7cmV0dXJuIG8uaWQ9bi5pZCxvLmNsb3NlPSgpPT57IWFzeW5jIGZ1bmN0aW9uKGUsdCl7KGF3YWl0IGooZSkpLmRpc3BhdGNoKHkse2lkOnR9KX0oZSxvLmlkKX0sby5uZXh0PSgpPT57aWYoaSl7Y29uc3QgZT1pO3JldHVybiBpPXZvaWQgMCxlfXJldHVybiByLm5leHQoKX0sb31hc3luYyBmdW5jdGlvbiBvZShlKXtyZXR1cm4oYXdhaXQgaihlKSkuZGlzcGF0Y2goXCI0XCIsbnVsbCl9YXN5bmMgZnVuY3Rpb24gcmUoZSl7Y29uc3QgdD1hd2FpdCBqKGUpO3ZhciBuO249ZSxVLmRlbGV0ZShuKSxGKGUpLGF3YWl0IHQuZGlzY29ubmVjdCgpfWZ1bmN0aW9uIGllKGUpe2NvbnN0e25hbWVzcGFjZWRUb3BpYzp0fT1lLG49eih0KTtyZXR1cm4gYXN5bmMgbz0+e2lmKCFYKHQpKXJldHVybjtjb25zdCByPW4uZ2V0UmVxdWVzdHNGb3JJZGVudGl0eShvKTtmb3IoY29uc3R7cmVxOmUsY2xvc2U6dH1vZiByLnZhbHVlcygpKXQoKSxyLmRlbGV0ZShlLmlkKTtLKHQsKGFzeW5jIGU9Pntjb25zdHtuYW1lc3BhY2VkVG9waWM6dH09ZSxuPWF3YWl0IHNlKGUpO2Zvcihjb25zdCBlIG9mIEIodCkpYXdhaXQgWSh0LGUsbik7cmV0dXJuIG59KShlKSl9fWFzeW5jIGZ1bmN0aW9uIHNlKGUpe2NvbnN0e25hbWVzcGFjZWRUb3BpYzp0fT1lLG49Uyh0KSxvPWF3YWl0IGFzeW5jIGZ1bmN0aW9uKGUpe2ZvcihsZXQgdD0wO3Q8NTA7dCsrKXRyeXtyZXR1cm4gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KGUse3dhaXQ6ITF9KX1jYXRjaChlKXtpZig0OT09PXQpdGhyb3cgZTthd2FpdCBuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLDFlMykpKX19KG4pO3JldHVybiBvLnJlZ2lzdGVyKGcsUShlKSksby5yZWdpc3Rlcih5LGZ1bmN0aW9uKGUpe2NvbnN0IHQ9eihlKTtyZXR1cm4oZSxuKT0+e2NvbnN0IG89dC5nZXRSZXF1ZXN0c0ZvcklkZW50aXR5KG4pLHI9by5nZXQoZS5pZCk7ciYmKHIuY2xvc2UoKSxvLmRlbGV0ZShlLmlkKSl9fSh0KSksby5yZWdpc3RlcihoLGZ1bmN0aW9uKGUpe3JldHVybiBhc3luYyh0LG4pPT57aWYoIXR8fCF0LnByb3ZpZGVySWR8fCF0LnJlc3VsdClyZXR1cm47Y29uc3Qgbz1MKGUsdC5wcm92aWRlcklkKTtpZighbylyZXR1cm47Y29uc3R7b25SZXN1bHREaXNwYXRjaDpyfT1vO3JldHVybiByPyh0LnJlc3VsdC5kaXNwYXRjaGVySWRlbnRpdHk9bixyKHQucmVzdWx0KSk6dm9pZCAwfX0odCkpLG8ub25EaXNjb25uZWN0aW9uKGllKGUpKSxvfWFzeW5jIGZ1bmN0aW9uIGFlKGUpe2NvbnN0IHQ9KFwic3RyaW5nXCI9PXR5cGVvZiBlP2U6ZT8udG9waWMpfHx3LG49KFwic3RyaW5nXCI9PXR5cGVvZiBlP251bGw6ZT8udXVpZCl8fE0oKSxvPW0obix0KSxyPXt0b3BpYzp0LG5hbWVzcGFjZTpuLG5hbWVzcGFjZWRUb3BpYzpvfTtsZXQgaT1YKG8pO3JldHVybiBpfHwoaT1zZShyKSxLKG8saSksYXdhaXQgaSkse2dldEFsbFByb3ZpZGVyczpvZS5iaW5kKG51bGwsbykscmVnaXN0ZXI6WS5iaW5kKG51bGwsbyksc2VhcmNoOm5lLmJpbmQobnVsbCxvKSxkZXJlZ2lzdGVyOmVlLmJpbmQobnVsbCxvKSxkaXNwYXRjaDp0ZS5iaW5kKG51bGwsbyksZGlzY29ubmVjdDpyZS5iaW5kKG51bGwsbyl9fWNvbnN0IGNlPW5ldyBNYXA7ZnVuY3Rpb24gZGUoZSl7Y29uc3QgdD11ZShlKTtpZih0KXJldHVybiB0O3Rocm93IE59ZnVuY3Rpb24gdWUoZSl7Y29uc3QgdD1jZS5nZXQoZSk7aWYodClyZXR1cm4gdH1jb25zdCBwZT1uZXcgTWFwO2Z1bmN0aW9uIGxlKGUsdCl7cGUuaGFzKGUpfHxwZS5zZXQoZSxuZXcgU2V0KSxwZS5nZXQoZSkuYWRkKHQpfWZ1bmN0aW9uIGZlKGUsdCl7Y29uc3Qgbj1wZS5nZXQoZSk7biYmbi5kZWxldGUodCl9ZnVuY3Rpb24gd2UoZSl7cmV0dXJuWy4uLkIoZSldLm1hcCgoZT0+KHsuLi5lLG9uVXNlcklucHV0OnZvaWQgMCxvblJlc3VsdERpc3BhdGNoOnZvaWQgMH0pKSl9YXN5bmMgZnVuY3Rpb24gZ2UoZSx0KXtpZihMKGUsdC5pZCkpdGhyb3cgbmV3IEVycm9yKFwicHJvdmlkZXIgd2l0aCBuYW1lIGFscmVhZHkgZXhpc3RzXCIpO2NvbnN0IG49VigpO2F3YWl0IGIoZSx7aWRlbnRpdHk6biwuLi50fSl9ZnVuY3Rpb24gaGUoZSx0KXtEKGUsdCl9YXN5bmMgZnVuY3Rpb24geWUoZSx0LG4sbyl7Y29uc3Qgcj1MKGUsdCk7aWYoIXIpdGhyb3cgJDtjb25zdHtvblJlc3VsdERpc3BhdGNoOml9PXI7aWYoIWkpcmV0dXJuO3JldHVybiBpKEEobixWKCksbykpfWFzeW5jIGZ1bmN0aW9uKnZlKGUsdCxuKXtjb25zdCBvPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXSxvPVtdLHI9W10saT1bXTtmb3IoY29uc3QgcyBvZiBlKXtjb25zdCBlPXgocy5zY29yZU9yZGVyKSxhPXtyZXN1bHRzOltdLHByb3ZpZGVyOntpZDpzLmlkLGlkZW50aXR5OnMuaWRlbnRpdHksdGl0bGU6cy50aXRsZSxzY29yZU9yZGVyOnMuc2NvcmVPcmRlcixpY29uOnMuaWNvbixkaXNwYXRjaEZvY3VzRXZlbnRzOnMuZGlzcGF0Y2hGb2N1c0V2ZW50c319O24ucHVzaChhKSxvLnB1c2goZSk7Y29uc3QgYz0oYXN5bmMoKT0+e3RyeXtjb25zdHtyZXN1bHRzOm4sY29udGV4dDpvfT1hd2FpdCBzLm9uVXNlcklucHV0KHQsZS5yZXMpO2EucmVzdWx0cz1PKGEucmVzdWx0cyxuKSxhLmNvbnRleHQ9ey4uLmEuY29udGV4dCwuLi5vfX1jYXRjaChlKXthLmVycm9yPWV9fSkoKTtjLmZpbmFsbHkoKCgpPT57Yy5kb25lPSEwfSkpLGkucHVzaChjKSxyLnB1c2goci5sZW5ndGgpfXJldHVybntwcm92aWRlclJlc3BvbnNlczpuLGxpc3RlbmVyUmVzcG9uc2VzOm8sb3Blbkxpc3RlbmVyUmVzcG9uc2VzOnIsaW5pdGlhbFJlc3BvbnNlUHJvbWlzZXM6aX19KHQudGFyZ2V0cz90LnRhcmdldHMubWFwKCh0PT5MKGUsdCkpKS5maWx0ZXIoKGU9PiEhZSkpOlsuLi5CKGUpLmZpbHRlcigoZT0+IWUuaGlkZGVuKSldLHQpLHtwcm92aWRlclJlc3BvbnNlczpyLGxpc3RlbmVyUmVzcG9uc2VzOml9PW87bGV0e29wZW5MaXN0ZW5lclJlc3BvbnNlczpzLGluaXRpYWxSZXNwb25zZVByb21pc2VzOmF9PW8sYz1mLkRlLkZldGNoaW5nO2NvbnN0IGQ9ZT0+e2M9ZSxuLnNldFN0YXRlKGMpfTtsZXQgcCxsPSExO3Qub25DbG9zZSgoKCk9PntsPSEwLHAmJnAoKX0pKTtkb3tsZXQgZT0hMTtpZihhLmxlbmd0aCl7Y29uc3QgdD1bXTtmb3IoY29uc3QgbiBvZiBhKW4uZG9uZT9lPSEwOnQucHVzaChuKTthPXQsYS5sZW5ndGh8fChkKGYuRGUuRmV0Y2hlZCksZT0hMCl9bGV0IHQsbj0hMTtjb25zdCBvPSgpPT57bj0hMCx0JiZ0KCl9LHc9W107Zm9yKGNvbnN0IHQgb2Ygcyl7Y29uc3Qgbj1pW3RdLHM9clt0XSxhPW4uZ2V0U3RhdHVzKCk7KGE9PT11Lk9wZW58fGM9PT1mLkRlLkZldGNoaW5nJiZhPT09dS5Jbml0aWFsKSYmKHcucHVzaCh0KSxuLm9uQ2hhbmdlPW8pO2NvbnN0IGQ9bi5nZXRSZXN1bHRCdWZmZXIoKTtkLmxlbmd0aCYmKG4uc2V0UmVzdWx0QnVmZmVyKFtdKSxzLnJlc3VsdHM9TyhzLnJlc3VsdHMsZCksZT0hMCk7Y29uc3QgcD1uLmdldFJldm9rZWRCdWZmZXIoKTtpZihwLmxlbmd0aCl7bi5zZXRSZXZva2VkQnVmZmVyKFtdKTtjb25zdCB0PW5ldyBTZXQocCk7cy5yZXN1bHRzPXMucmVzdWx0cy5maWx0ZXIoKCh7a2V5OmV9KT0+IXQuaGFzKGUpKSksZT0hMH19aWYocz13LGUmJih5aWVsZCByKSxsKWJyZWFrO258fChzLmxlbmd0aHx8YS5sZW5ndGgpJiZhd2FpdCBQcm9taXNlLnJhY2UoWy4uLmEsbmV3IFByb21pc2UoKGU9Pnt0PWV9KSksbmV3IFByb21pc2UoKGU9PntwPWV9KSldKX13aGlsZShzLmxlbmd0aHx8YS5sZW5ndGgpO3JldHVybiBkKGYuRGUuQ29tcGxldGUpLHJ9bGV0IG1lPTA7ZnVuY3Rpb24gU2Uoe25hbWVzcGFjZWRUb3BpYzplLHRvcGljOnR9LG4pe21lKz0xO2NvbnN0IG89RSh0LG1lLnRvU3RyaW5nKCksbikscj12ZShlLG8ucmVxLHtzZXRTdGF0ZTplPT57ci5zdGF0ZT1lfX0pO3JldHVybiByLmlkPW1lLnRvU3RyaW5nKCksci5jbG9zZT1vLmNsb3NlLHIuc3RhdGU9Zi5EZS5GZXRjaGluZyxyfWNvbnN0IFBlPW5ldyBNYXA7ZnVuY3Rpb24gQ2UoZSx0KXtyZXR1cm5gJHtlfToke3R9YH1mdW5jdGlvbiBrZShlKXtyZXR1cm4gYXN5bmModCwuLi5uKT0+e2lmKCF0KXJldHVybntlcnJvcjpHLm1lc3NhZ2V9O2xldCBvO2lmKHQuaWQpbz1DZShlLm5hbWVzcGFjZWRUb3BpYyx0LmlkKTtlbHNle2NvbnN0IG49U2UoZSx0KTtvPUNlKGUubmFtZXNwYWNlZFRvcGljLG4uaWQpLHQuaWQ9bi5pZCxQZS5zZXQobyx7Z2VuZXJhdG9yOm59KX1jb25zdCByPVBlLmdldChvKTtjbGVhclRpbWVvdXQoci50aW1lb3V0KTtjb25zdCBpPWF3YWl0IHIuZ2VuZXJhdG9yLm5leHQoKTtyZXR1cm4gci50aW1lb3V0PWZ1bmN0aW9uKGUpe3JldHVybiB3aW5kb3cuc2V0VGltZW91dCgoKCk9PntQZS5kZWxldGUoZSl9KSwxZTQpfShvKSx7Li4uaSxpZDp0LmlkLHN0YXRlOnIuZ2VuZXJhdG9yLnN0YXRlfX19ZnVuY3Rpb24gV2UoZSx0LG4pe3JldHVybiBkZShlKS5kaXNwYXRjaCh0LHkse2lkOm59KX1mdW5jdGlvbiBSZShlKXtyZXR1cm4gdD0+ZnVuY3Rpb24oZSx0KXtjb25zdCBuPUNlKGUsdCksbz1QZS5nZXQobik7byYmby5nZW5lcmF0b3IuY2xvc2UoKX0oZSx0LmlkKX1hc3luYyBmdW5jdGlvbiBUZShlLHQse2lkOm4scXVlcnk6byxjb250ZXh0OnIsdGFyZ2V0czppfSl7Y29uc3Qgcz1kZShlKSxhPXtpZDpuLHF1ZXJ5Om8sY29udGV4dDpyLHRhcmdldHM6aSxwcm92aWRlcklkOnQuaWR9LGM9YXdhaXQgcy5kaXNwYXRjaCh0LmlkZW50aXR5LGcsYSksZD1jLmVycm9yO2lmKGQpdGhyb3cgbmV3IEVycm9yKGQpO3JldHVybiBjfWNvbnN0IEllPW5ldyBNYXA7ZnVuY3Rpb24gYmUoZSx0LG4pe3JldHVybmAke2V9OiR7dC5uYW1lfToke3QudXVpZH06JHtufWB9Y29uc3QgRGU9bmV3IE1hcDtmdW5jdGlvbiBCZShlLHQsbil7cmV0dXJuYCR7ZX06JHt0fToke259YH1mdW5jdGlvbiBGZShlLHQpe2NvbnN0IG49YmUuYmluZChudWxsLGUsdC5pZGVudGl0eSksbz1XZS5iaW5kKG51bGwsZSx0LmlkZW50aXR5KSxyPVRlLmJpbmQobnVsbCxlLHQpO3JldHVybiBhc3luYyhpLHMpPT57Y29uc3QgYT1uKGkuaWQpO2lmKCFJZS5oYXMoYSkpe2NvbnN0IGU9KCk9PntvKGkuaWQpLEllLmRlbGV0ZShhKX07SWUuc2V0KGEsZSksaS5vbkNsb3NlKGUpfWNvbnN0IGM9QmUoZSx0LmlkLGkuaWQpLGQ9KCk9PntEZS5kZWxldGUoYykscy5jbG9zZSgpfTtpLm9uQ2xvc2UoZCksRGUuc2V0KGMsKGU9PntlLnJlc3VsdHM/Lmxlbmd0aCYmcy5yZXNwb25kKGUucmVzdWx0cyksZS5yZXZva2VkPy5sZW5ndGgmJnMucmV2b2tlKC4uLmUucmV2b2tlZCksZS5zdGF0dXM9PT11Lk9wZW4mJnMub3BlbigpLGUuc3RhdHVzPT09dS5DbG9zZSYmZCgpfSkpO2NvbnN0IHA9YXdhaXQgcihpKTtyZXR1cm4gcC5zdGF0dXM9PT11Lk9wZW4mJnMub3BlbigpLHAuc3RhdHVzIT09dS5DbG9zZSYmcC5zdGF0dXMhPT11LkluaXRpYWx8fGQoKSxwfX1mdW5jdGlvbiBMZShlLHQpe3JldHVybiBhc3luYyBuPT57Y29uc3Qgbz1kZShlKSxyPXtwcm92aWRlcklkOnQuaWQscmVzdWx0Om59O3JldHVybiBvLmRpc3BhdGNoKHQuaWRlbnRpdHksaCxyKX19Y29uc3QgQWU9bmV3IE1hcDtmdW5jdGlvbiBPZShlLHQpe3JldHVybmAke2V9LSR7dC5uYW1lfS0ke3QudXVpZH1gfWZ1bmN0aW9uIHhlKGUpe3JldHVybiBhc3luYyh0LG4pPT57aWYoIXR8fCF0LmlkKXJldHVybiB2b2lkIG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh0KSk7aWYoTChlLHQuaWQpKXRocm93IHE7cmV0dXJuIHQuaWRlbnRpdHk9bixhd2FpdCBhc3luYyBmdW5jdGlvbihlLHQpe2NvbnN0IG49T2UoZSx0LmlkZW50aXR5KTtBZS5oYXMobil8fEFlLnNldChuLFtdKSxBZS5nZXQobikucHVzaCh0LmlkKSxhd2FpdCBiKGUsey4uLnQsb25Vc2VySW5wdXQ6RmUoZSx0KSxvblJlc3VsdERpc3BhdGNoOkxlKGUsdCl9KX0oZSx0KSx7d29ya3NwYWNlVmVyc2lvbjppLnUwLGNsaWVudEFQSVZlcnNpb246dC5jbGllbnRBUElWZXJzaW9ufX19ZnVuY3Rpb24gRWUoZSl7cmV0dXJuIHQ9Pnt0JiZmdW5jdGlvbihlLHQpe2NvbnN0IG49TChlLHQpO2lmKCFuKXJldHVybjtjb25zdCBvPU9lKGUsbi5pZGVudGl0eSkscj1BZS5nZXQobyk7aWYocil7Y29uc3Qgbj1yLmZpbmRJbmRleCgoZT0+ZT09PXQpKTstMSE9PW4mJihyLnNwbGljZShuLDEpLEQoZSx0KSl9fShlLHQpfX1jb25zdCBWZT1uZXcgTWFwO2Z1bmN0aW9uIE1lKGUsdCl7VmUuaGFzKGUpfHxWZS5zZXQoZSxuZXcgU2V0KSxWZS5nZXQoZSkuYWRkKHQpfWZ1bmN0aW9uIF9lKGUsdCl7Y29uc3Qgbj1WZS5nZXQoZSk7biYmbi5kZWxldGUodCl9ZnVuY3Rpb24gJGUoZSl7cmV0dXJuIGFzeW5jIHQ9PnshZnVuY3Rpb24oZSx0KXtjb25zdCBuPU9lKGUsdCksbz1BZS5nZXQobik7aWYobyl7Zm9yKGNvbnN0IHQgb2YgbylEKGUsdCk7QWUuZGVsZXRlKG4pfX0oZSx0KTtjb25zdCBuPVZlLmdldChlKTtuJiZuLmZvckVhY2goKGU9PmUodCkpKX19YXN5bmMgZnVuY3Rpb24gcWUoZSl7Y29uc3R7bmFtZXNwYWNlZFRvcGljOnR9PWUsbj1TKGUubmFtZXNwYWNlZFRvcGljKSxvPWF3YWl0KHI9bixmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShyKSk7dmFyIHI7cmV0dXJuIG8ub25Db25uZWN0aW9uKGZ1bmN0aW9uKHtuYW1lc3BhY2VkVG9waWM6ZX0pe3JldHVybiBhc3luYyB0PT57Y29uc3Qgbj1wZS5nZXQoZSk7aWYobilmb3IoY29uc3QgZSBvZiBuKWlmKCFhd2FpdCBlKHQpKXRocm93IEh9fShlKSksby5vbkRpc2Nvbm5lY3Rpb24oJGUodCkpLG8ucmVnaXN0ZXIoeSxSZSh0KSksby5yZWdpc3RlcihnLGZ1bmN0aW9uKGUpe3JldHVybiB0PT57Y29uc3Qgbj1CZShlLHQucHJvdmlkZXJJZCx0LmlkKSxvPURlLmdldChuKTtvJiZvKHQpfX0odCkpLG8ucmVnaXN0ZXIoXCIyXCIseGUodCkpLG8ucmVnaXN0ZXIoXCIzXCIsRWUodCkpLG8ucmVnaXN0ZXIoXCI0XCIsZnVuY3Rpb24oZSl7cmV0dXJuIGFzeW5jKCk9PndlKGUpfSh0KSksby5yZWdpc3RlcihcIjFcIixrZShlKSksby5yZWdpc3RlcihoLGZ1bmN0aW9uKGUpe3JldHVybiBhc3luYyh0LG4pPT57aWYoIXR8fCF0LnByb3ZpZGVySWR8fCF0LnJlc3VsdClyZXR1cm47Y29uc3Qgbz1MKGUsdC5wcm92aWRlcklkKTtpZighbyl0aHJvdyAkO2NvbnN0e29uUmVzdWx0RGlzcGF0Y2g6cn09bztyZXR1cm4gcj8odC5yZXN1bHQuZGlzcGF0Y2hlcklkZW50aXR5PW4scih0LnJlc3VsdCkpOnZvaWQgMH19KHQpKSxvfWFzeW5jIGZ1bmN0aW9uIEdlKGUpe2NvbnN0IHQ9ZGUoZSk7dmFyIG47bj1lLGNlLmRlbGV0ZShuKSxhd2FpdCB0LmRlc3Ryb3koKSxGKGUpfWFzeW5jIGZ1bmN0aW9uIEhlKGUpe2NvbnN0IHQ9KFwic3RyaW5nXCI9PXR5cGVvZiBlP2U6ZT8udG9waWMpfHx3LG49TSgpLG89bShuLHQpLHI9e3RvcGljOnQsbmFtZXNwYWNlOm4sbmFtZXNwYWNlZFRvcGljOm99O2xldCBpPXVlKG8pO2l8fChpPWF3YWl0IHFlKHIpLGZ1bmN0aW9uKGUsdCl7Y2Uuc2V0KGUsdCl9KG8saSkpO2NvbnN0IHM9ZmUuYmluZChudWxsLG8pLGE9X2UuYmluZChudWxsLG8pLGM9ay5iaW5kKG51bGwsbyksZD1ULmJpbmQobnVsbCxvKTtyZXR1cm57Z2V0QWxsUHJvdmlkZXJzOndlLmJpbmQobnVsbCxvKSxzZWFyY2g6U2UuYmluZChudWxsLHIpLHJlZ2lzdGVyOmdlLmJpbmQobnVsbCxvKSxkZXJlZ2lzdGVyOmhlLmJpbmQobnVsbCxvKSxvblN1YnNjcmlwdGlvbjpsZS5iaW5kKG51bGwsbyksb25EaXNjb25uZWN0Ok1lLmJpbmQobnVsbCxvKSxvblJlZ2lzdGVyOkMuYmluZChudWxsLG8pLG9uRGVyZWdpc3RlcjpSLmJpbmQobnVsbCxvKSxkaXNwYXRjaDp5ZS5iaW5kKG51bGwsciksZGlzY29ubmVjdDpHZS5iaW5kKG51bGwsbykscmVtb3ZlTGlzdGVuZXI6ZT0+e3MoZSksYShlKSxjKGUpLGQoZSl9fX1jb25zdHtjcmVhdGU6TmV9PXIse3N1YnNjcmliZTpVZX09byxqZT17Y3JlYXRlOk5lLHN1YnNjcmliZTpVZSxkZWZhdWx0VG9waWM6XCJhbGxcIn0sWGU9KCk9Pnt3aW5kb3cuc2VhcmNoPWplfSxLZT1lPT57Y29uc3QgdD0oKT0+e1hlKCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0KX07cmV0dXJuIHR9O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe1hlKCk7Y29uc3QgZT1cImxvYWRcIix0PUtlKGUpO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKGUsdCk7Y29uc3Qgbj1cIkRPTUNvbnRlbnRMb2FkZWRcIixvPUtlKG4pO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKG4sbyl9Y29uc3QgSmU9bmV3IE1hcDthc3luYyBmdW5jdGlvbiB6ZSgpe2F3YWl0IGFzeW5jIGZ1bmN0aW9uKGUpe0plLnNldChlLGF3YWl0IFVlKHt0b3BpYzplLHV1aWQ6cC5xOS5Xb3Jrc3BhY2V9KSl9KGMpfWxldCBaZTthc3luYyBmdW5jdGlvbiBRZShlKXtyZXR1cm4gYXdhaXQgYXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4gWmV8fChaZT16ZSgpKSxaZX0oKSxKZS5nZXQoZSl9Y29uc3QgWWU9YXN5bmMgZT0+e2lmKCFlLmljb24pdGhyb3cgbmV3IEVycm9yKGAke2UuaWR9IHByb3ZpZGVyIG5lZWRzIHRvIGhhdmUgaWNvbiBwcm9wZXJ0eSBkZWZpbmVkLmApO2F3YWl0KDAsYS5hQikoKTtjb25zdCB0PWF3YWl0IFFlKGMpO3RyeXtlLmNsaWVudEFQSVZlcnNpb249aS51MDtjb25zdCBuPWF3YWl0IHQucmVnaXN0ZXIoZSk7cmV0dXJuKDAscy5jaykoe2FsbG93ZWQ6ITAsY29tcG9uZW50VmVyc2lvbjpuPy53b3Jrc3BhY2VWZXJzaW9ufSksbn1jYXRjaChlKXt0aHJvdygwLHMuY2spKHthbGxvd2VkOiExLHJlamVjdGlvbkNvZGU6ZS5tZXNzYWdlfSksZX19LGV0PWFzeW5jIGU9Pnthd2FpdCgwLGEuYUIpKCk7cmV0dXJuKGF3YWl0IFFlKGMpKS5kZXJlZ2lzdGVyKGUpfTthc3luYyBmdW5jdGlvbiB0dCgpe3JldHVybihhd2FpdCgwLGEuWGwpKCkpLmRpc3BhdGNoKGEuV0YuU2hvd0hvbWUsdm9pZCAwKX1hc3luYyBmdW5jdGlvbiBudCgpe3JldHVybihhd2FpdCgwLGEuWGwpKCkpLmRpc3BhdGNoKGEuV0YuSGlkZUhvbWUsdm9pZCAwKX19LDI5ODooZSx0LG4pPT57bi5kKHQse3A6KCk9Pm8ucHgsdzooKT0+by53dH0pO3ZhciBvPW4oMzE2KX0sNDI3OihlLHQsbik9Pnt2YXIgbztuLmQodCx7djooKT0+b30pLGZ1bmN0aW9uKGUpe2UuQWN0aW9uQnV0dG9uPVwiQWN0aW9uQnV0dG9uXCIsZS5Ecm9wZG93bkJ1dHRvbj1cIkRyb3Bkb3duQnV0dG9uXCJ9KG98fChvPXt9KSl9LDc1ODooZSx0LG4pPT57dmFyIG8scixpO24uZCh0LHtQdDooKT0+byxlbDooKT0+aSx5VzooKT0+cn0pLGZ1bmN0aW9uKGUpe2UuU3VnZ2VzdGlvbj1cInN1Z2dlc3Rpb25cIn0ob3x8KG89e30pKSxmdW5jdGlvbihlKXtlLkNvbnRhY3Q9XCJDb250YWN0XCIsZS5DdXN0b209XCJDdXN0b21cIixlLkxpc3Q9XCJMaXN0XCIsZS5QbGFpbj1cIlBsYWluXCIsZS5TaW1wbGVUZXh0PVwiU2ltcGxlVGV4dFwiLGUuTG9hZGluZz1cIkxvYWRpbmdcIixlLkVycm9yPVwiRXJyb3JcIn0ocnx8KHI9e30pKSxmdW5jdGlvbihlKXtlLk11bHRpU2VsZWN0PVwiTXVsdGlTZWxlY3RcIn0oaXx8KGk9e30pKX0sMTE0OihlLHQsbik9Pnt2YXIgbyxyO24uZCh0LHtMOigpPT5vLFQ6KCk9PnJ9KSxmdW5jdGlvbihlKXtlLlNuYXBzaG90PVwic25hcHNob3RcIixlLk1hbmlmZXN0PVwibWFuaWZlc3RcIixlLlZpZXc9XCJ2aWV3XCIsZS5FeHRlcm5hbD1cImV4dGVybmFsXCJ9KG98fChvPXt9KSksZnVuY3Rpb24oZSl7ZS5MYW5kaW5nUGFnZT1cImxhbmRpbmdQYWdlXCIsZS5BcHBHcmlkPVwiYXBwR3JpZFwifShyfHwocj17fSkpfSwxMDk6KGUsdCxuKT0+e24uZCh0LHtHbzooKT0+cixaSjooKT0+cyxiSTooKT0+aSxwNjooKT0+b30pO2NvbnN0IG89e0NvbnRhaW5lcjpcIkNvbnRhaW5lclwiLEJ1dHRvbjpcIkJ1dHRvblwifSxyPXtUZXh0OlwiVGV4dFwiLEltYWdlOlwiSW1hZ2VcIixMaXN0OlwiTGlzdFwifSxpPXsuLi5vLC4uLnJ9O3ZhciBzOyFmdW5jdGlvbihlKXtlLlByaW1hcnk9XCJwcmltYXJ5XCIsZS5TZWNvbmRhcnk9XCJzZWNvbmRhcnlcIixlLlRleHRPbmx5PVwidGV4dE9ubHlcIn0oc3x8KHM9e30pKX0sNTI4OihlLHQsbik9PntuLnIodCksbi5kKHQse0FwcE1hbmlmZXN0VHlwZTooKT0+cy5MLFN0b3JlZnJvbnRUZW1wbGF0ZTooKT0+cy5ULGRlcmVnaXN0ZXI6KCk9PmcsaGlkZTooKT0+aCxyZWdpc3RlcjooKT0+dyxzaG93OigpPT55fSk7dmFyIG89big1MzIpLHI9big0MzYpLGk9big4Mikscz1uKDExNCksYT1uKDY3OCk7bGV0IGMsZD0hMTthc3luYyBmdW5jdGlvbiB1KGUsdCxuKXtjb25zdCBvPWF3YWl0KDAsci5EbSkoKTt0cnl7cmV0dXJuIGF3YWl0IG8uZGlzcGF0Y2goZS5hY3Rpb24sZS5wYXlsb2FkKX1jYXRjaChyKXtpZigtMSE9PXIudG9TdHJpbmcoKS5pbmRleE9mKGUuYWN0aW9uKSlyZXR1cm4gZD0hMCxhd2FpdCBvLmRpc3BhdGNoKHQuYWN0aW9uLHQucGF5bG9hZCksbjt0aHJvdyByfX1jb25zdCBwPW5ldyBNYXAsbD1lPT57aWYoIXAuaGFzKGUpKXRocm93IG5ldyBFcnJvcihgU3RvcmVmcm9udCBQcm92aWRlciB3aXRoIGlkICR7ZX0gaXMgbm90IHJlZ2lzdGVyZWRgKTtyZXR1cm4gcC5nZXQoZSl9LGY9YXN5bmMgZT0+e2NvbnN0IHQ9YXdhaXQoMCxyLlhsKSgpO2lmKHAuaGFzKGUuaWQpKXRocm93IG5ldyBFcnJvcihgU3RvcmVmcm9udCBwcm92aWRlciB3aXRoIGlkICR7ZS5pZH0gYWxyZWFkeSByZWdpc3RlcmVkYCk7cmV0dXJuIHAuc2V0KGUuaWQsZSksKGU9PntlLmlzU3RvcmVmcm9udEFjdGlvbnNSZWdpc3RlcmVkfHwoZS5pc1N0b3JlZnJvbnRBY3Rpb25zUmVnaXN0ZXJlZD0hMCxlLnJlZ2lzdGVyKHIuV0YuR2V0U3RvcmVmcm9udFByb3ZpZGVyQXBwcywoZT0+bChlKS5nZXRBcHBzKCkpKSxlLnJlZ2lzdGVyKHIuV0YuR2V0U3RvcmVmcm9udFByb3ZpZGVyRm9vdGVyLChlPT5sKGUpLmdldEZvb3RlcigpKSksZS5yZWdpc3RlcihyLldGLkdldFN0b3JlZnJvbnRQcm92aWRlckxhbmRpbmdQYWdlLChlPT5sKGUpLmdldExhbmRpbmdQYWdlKCkpKSxlLnJlZ2lzdGVyKHIuV0YuR2V0U3RvcmVmcm9udFByb3ZpZGVyTmF2aWdhdGlvbiwoZT0+bChlKS5nZXROYXZpZ2F0aW9uKCkpKSxlLnJlZ2lzdGVyKHIuV0YuTGF1bmNoU3RvcmVmcm9udFByb3ZpZGVyQXBwLCgoe2lkOmUsYXBwOnR9KT0+bChlKS5sYXVuY2hBcHAodCkpKSl9KSh0KSxlLmNsaWVudEFQSVZlcnNpb249YS51MCx1KHthY3Rpb246ci5XRi5SZWdpc3RlclByb3ZpZGVyLHBheWxvYWQ6e3Byb3ZpZGVyVHlwZTppLmxQLlN0b3JlZnJvbnQsaW5mbzplfX0se2FjdGlvbjpyLldGLlJlZ2lzdGVyU3RvcmVmcm9udFByb3ZpZGVyLHBheWxvYWQ6ZX0se3dvcmtzcGFjZVZlcnNpb246XCJ1bmtub3duXCJ9KX0sdz1lPT4oYz1uZXcgUHJvbWlzZSgoYXN5bmModCxuKT0+e3RyeXtjb25zdCBuPWF3YWl0IGYoZSk7KDAsby5kOSkoe2FsbG93ZWQ6ITAsY29tcG9uZW50VmVyc2lvbjpuPy53b3Jrc3BhY2VWZXJzaW9ufSksdCh7Y2xpZW50QVBJVmVyc2lvbjphLnUwLHdvcmtzcGFjZVZlcnNpb246bi53b3Jrc3BhY2VWZXJzaW9ufHxcIlwifSl9Y2F0Y2goZSl7KDAsby5kOSkoe2FsbG93ZWQ6ITEscmVqZWN0aW9uQ29kZTplLm1lc3NhZ2V9KSxuKGUpfX0pKSxjKSxnPWFzeW5jIGU9Pihhd2FpdCBjLHAuZGVsZXRlKGUpLGF3YWl0KDAsci5hQikoKSx1KHthY3Rpb246ci5XRi5EZXJlZ2lzdGVyUHJvdmlkZXIscGF5bG9hZDp7cHJvdmlkZXJUeXBlOmkubFAuU3RvcmVmcm9udCxpZDplfX0se2FjdGlvbjpyLldGLkRlcmVnaXN0ZXJTdG9yZWZyb250UHJvdmlkZXIscGF5bG9hZDplfSkpLGg9YXN5bmMoKT0+KGF3YWl0IGMsYXdhaXQoMCxyLmFCKSgpLHUoe2FjdGlvbjpyLldGLkhpZGVQcm92aWRlcldpbmRvdyxwYXlsb2FkOntwcm92aWRlclR5cGU6aS5sUC5TdG9yZWZyb250fX0se2FjdGlvbjpyLldGLkhpZGVTdG9yZWZyb250fSkpLHk9YXN5bmMoKT0+KGF3YWl0IGMsYXdhaXQoMCxyLmFCKSgpLHUoe2FjdGlvbjpyLldGLlNob3dQcm92aWRlcldpbmRvdyxwYXlsb2FkOntwcm92aWRlclR5cGU6aS5sUC5TdG9yZWZyb250fX0se2FjdGlvbjpyLldGLlNob3dTdG9yZWZyb250fSkpfSw0MzY6KGUsdCxuKT0+e24uZCh0LHtXRjooKT0+cyxEbTooKT0+YSxYbDooKT0+cCxhQjooKT0+dX0pO3ZhciBvPW4oNjc4KTtjb25zdCByPW8uQXgmJlwiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUmJm5ldyBQcm9taXNlKChlPT5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCgoKT0+e1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmUoKX0pKSkpO3ZhciBpPW4oMTIxKTt2YXIgczshZnVuY3Rpb24oZSl7ZS5SZWdpc3RlclByb3ZpZGVyPVwicmVnaXN0ZXItcHJvdmlkZXJcIixlLkRlcmVnaXN0ZXJQcm92aWRlcj1cImRlcmVnaXN0ZXItcHJvdmlkZXJcIixlLkNyZWF0ZVByb3ZpZGVyV2luZG93PVwiY3JlYXRlLXByb3ZpZGVyLXdpbmRvd1wiLGUuR2V0UHJvdmlkZXJzPVwiZ2V0LXByb3ZpZGVyc1wiLGUuU2hvd1Byb3ZpZGVyV2luZG93PVwic2hvdy1wcm92aWRlci13aW5kb3dcIixlLkhpZGVQcm92aWRlcldpbmRvdz1cImhpZGUtcHJvdmlkZXItd2luZG93XCIsZS5HZXRTdG9yZWZyb250UHJvdmlkZXJBcHBzPVwiZ2V0LXN0b3JlZnJvbnQtcHJvdmlkZXItYXBwc1wiLGUuR2V0U3RvcmVmcm9udFByb3ZpZGVyTGFuZGluZ1BhZ2U9XCJnZXQtc3RvcmVmcm9udC1wcm92aWRlci1sYW5kaW5nLXBhZ2VcIixlLkdldFN0b3JlZnJvbnRQcm92aWRlckZvb3Rlcj1cImdldC1zdG9yZWZyb250LXByb3ZpZGVyLWZvb3RlclwiLGUuR2V0U3RvcmVmcm9udFByb3ZpZGVyTmF2aWdhdGlvbj1cImdldC1zdG9yZWZyb250LXByb3ZpZGVyLW5hdmlnYXRpb25cIixlLkxhdW5jaFN0b3JlZnJvbnRQcm92aWRlckFwcD1cImxhdW5jaC1zdG9yZWZyb250LXByb3ZpZGVyLWFwcFwiLGUuU2hvd0hvbWU9XCJzaG93LWhvbWVcIixlLkhpZGVIb21lPVwiaGlkZS1ob21lXCIsZS5Bc3NpZ25Ib21lU2VhcmNoQ29udGV4dD1cImFzc2lnbi1ob21lLXNlYXJjaC1jb250ZXh0XCIsZS5HZXRMZWdhY3lQYWdlcz1cImdldC1sZWdhY3ktcGFnZXNcIixlLkdldExlZ2FjeVdvcmtzcGFjZXM9XCJnZXQtbGVnYWN5LXdvcmtzcGFjZXNcIixlLkdldENvbXB1dGVkUGxhdGZvcm1UaGVtZT1cImdldC1jb21wdXRlZC1wbGF0Zm9ybS10aGVtZVwiLGUuUmVnaXN0ZXJTdG9yZWZyb250UHJvdmlkZXI9XCJyZWdpc3Rlci1zdG9yZWZyb250LXByb3ZpZGVyXCIsZS5EZXJlZ2lzdGVyU3RvcmVmcm9udFByb3ZpZGVyPVwiZGVyZWdpc3Rlci1zdG9yZWZyb250LXByb3ZpZGVyXCIsZS5IaWRlU3RvcmVmcm9udD1cImhpZGUtc3RvcmVmcm9udFwiLGUuU2hvd1N0b3JlZnJvbnQ9XCJzaG93LXN0b3JlZnJvbnRcIn0oc3x8KHM9e30pKTtjb25zdCBhPWZ1bmN0aW9uKGUpe2xldCB0O3JldHVybigpPT57aWYoIW8uc1MpdGhyb3cgbmV3IEVycm9yKFwiZ2V0Q2hhbm5lbENsaWVudCBjYW5ub3QgYmUgdXNlZCBvdXRzaWRlIGFuIE9wZW5GaW4gZW52LiBBdm9pZCB1c2luZyB0aGlzIG1ldGhvZCBkdXJpbmcgcHJlLXJlbmRlcmluZy5cIik7cmV0dXJuIHR8fCh0PShhc3luYygpPT57YXdhaXQgcjtjb25zdCBuPXtjbGllbnRBUElWZXJzaW9uOm8udTB9LGk9YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KGUse3BheWxvYWQ6bn0pO3JldHVybiBpLm9uRGlzY29ubmVjdGlvbigoYXN5bmMoKT0+e3Q9dm9pZCAwfSkpLGl9KSgpLnRoZW4oKGU9PmUpKS5jYXRjaCgobj0+e3Rocm93IHQ9dm9pZCAwLG5ldyBFcnJvcihgZmFpbGVkIHRvIGNvbm5lY3QgdG8gY2hhbm5lbCBwcm92aWRlciAke2V9OiAke259YCl9KSkpLHR9fShcIl9fb2Zfd29ya3NwYWNlX3Byb3RvY29sX19cIiksYz1cImlzTGF1bmNoZWRWaWFMaWJcIixkPWU9Pntjb25zdCB0PW5ldyBVUkwoZSk7cmV0dXJuIHQuc2VhcmNoUGFyYW1zLmFwcGVuZChjLFwidHJ1ZVwiKSx0LnRvU3RyaW5nKCl9LHU9YXN5bmMoKT0+e2lmKCFhd2FpdCgwLGkuSlYpKGkuaVcpKXJldHVybihvLlpLfHwtMT09PW5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIldpblwiKSkmJmF3YWl0IGZpbi5BcHBsaWNhdGlvbi5zdGFydEZyb21NYW5pZmVzdChkKG8uYVcpKSxmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3NlcihkKG8uR1gpKX0scD1hc3luYygpPT4oYXdhaXQgdSgpLGEoKSl9LDgyOihlLHQsbik9PntuLmQodCx7Ujg6KCk9PnMsWF86KCk9PmksbFA6KCk9Pm99KTt2YXIgbyxyPW4oNDM2KTshZnVuY3Rpb24oZSl7ZS5TdG9yZWZyb250PVwic3RvcmVmcm9udFwiLGUuRG9jaz1cImRvY2tcIn0ob3x8KG89e30pKTtjb25zdCBpPWFzeW5jIGU9Pihhd2FpdCgwLHIuRG0pKCkpLmRpc3BhdGNoKHIuV0YuU2hvd1Byb3ZpZGVyV2luZG93LHtwcm92aWRlclR5cGU6ZX0pLHM9YXN5bmMgZT0+KGF3YWl0KDAsci5EbSkoKSkuZGlzcGF0Y2goci5XRi5IaWRlUHJvdmlkZXJXaW5kb3cse3Byb3ZpZGVyVHlwZTplfSl9LDgwNjooZSx0LG4pPT57bi5kKHQse3E5OigpPT5vfSk7dmFyIG8scixpLHM9big2NzgpOyFmdW5jdGlvbihlKXtlLldvcmtzcGFjZT1cIm9wZW5maW4tYnJvd3NlclwifShvfHwobz17fSkpLGZ1bmN0aW9uKGUpe2UuUnVuUmVxdWVzdGVkPVwicnVuLXJlcXVlc3RlZFwiLGUuV2luZG93T3B0aW9uc0NoYW5nZWQ9XCJ3aW5kb3ctb3B0aW9ucy1jaGFuZ2VkXCIsZS5XaW5kb3dDbG9zZWQ9XCJ3aW5kb3ctY2xvc2VkXCIsZS5XaW5kb3dDcmVhdGVkPVwid2luZG93LWNyZWF0ZWRcIn0ocnx8KHI9e30pKSxmdW5jdGlvbihlKXtlLkZpblByb3RvY29sPVwiZmluLXByb3RvY29sXCJ9KGl8fChpPXt9KSk7cy5BQixvLldvcmtzcGFjZX0sNjc4OihlLHQsbik9Pnt2YXIgbztuLmQodCx7QUI6KCk9PmEsQXg6KCk9PmksR1g6KCk9PnUsWks6KCk9PmQsYVc6KCk9PnAsb0M6KCk9PmMsc1M6KCk9PnIsdTA6KCk9PmZ9KSxmdW5jdGlvbihlKXtlLkxvY2FsPVwibG9jYWxcIixlLkRldj1cImRldlwiLGUuU3RhZ2luZz1cInN0YWdpbmdcIixlLlByb2Q9XCJwcm9kXCJ9KG98fChvPXt9KSk7Y29uc3Qgcj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZmluLGk9KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBwcm9jZXNzfHxwcm9jZXNzLmVudj8uSkVTVF9XT1JLRVJfSUQsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdykscz1pP3dpbmRvdy5vcmlnaW46by5Mb2NhbCxhPXImJmZpbi5tZS51dWlkLGM9ciYmZmluLm1lLm5hbWUsZD0ociYmZmluLm1lLmVudGl0eVR5cGUsXCJwcm9kXCI9PT1vLkxvY2FsKSx1PShvLkRldixvLlN0YWdpbmcsby5Qcm9kLFwiZmluczovL3N5c3RlbS1hcHBzL3dvcmtzcGFjZVwiKSxwPVwiaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby93b3Jrc3BhY2UvOS4wLjkvYXBwLmpzb25cIixsPWU9PmUuc3RhcnRzV2l0aChcImh0dHA6Ly9cIil8fGUuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpP2U6cytlLGY9KGwoXCJodHRwczovL2Nkbi5vcGVuZmluLmNvL3dvcmtzcGFjZS85LjAuOVwiKSxsKFwiaHR0cHM6Ly9jZG4ub3BlbmZpbi5jby93b3Jrc3BhY2UvOS4wLjlcIiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdPUktTUEFDRV9ET0NTX1BMQVRGT1JNX1VSTCYmbChXT1JLU1BBQ0VfRE9DU19QTEFURk9STV9VUkwpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBXT1JLU1BBQ0VfRE9DU19DTElFTlRfVVJMJiZsKFdPUktTUEFDRV9ET0NTX0NMSUVOVF9VUkwpLFwiOS4wLjlcIil9LDUzMjooZSx0LG4pPT57bi5kKHQse1duOigpPT5kLGNrOigpPT5hLGQ5OigpPT5jfSk7dmFyIG8scj1uKDY3OCksaT1uKDEyMSk7IWZ1bmN0aW9uKGUpe2UuQnJvd3Nlcj1cIkJyb3dzZXJcIixlLkRvY2s9XCJEb2NrXCIsZS5Ib21lPVwiSG9tZVwiLGUuTm90aWZpY2F0aW9uPVwiTm90aWZpY2F0aW9uXCIsZS5TdG9yZWZyb250PVwiU3RvcmVmcm9udFwiLGUuUGxhdGZvcm09XCJQbGF0Zm9ybVwiLGUuVGhlbWluZz1cIlRoZW1pbmdcIn0ob3x8KG89e30pKTtjb25zdCBzPWFzeW5jKGUsdCk9Pntjb25zdCBuPXthcGlWZXJzaW9uOnQuYXBpVmVyc2lvbnx8ci51MCxjb21wb25lbnROYW1lOmUsY29tcG9uZW50VmVyc2lvbjp0LmNvbXBvbmVudFZlcnNpb258fHIudTAsYWxsb3dlZDp0LmFsbG93ZWQscmVqZWN0aW9uQ29kZTp0LnJlamVjdGlvbkNvZGV9O2Zpbi5TeXN0ZW0ucmVnaXN0ZXJVc2FnZSh7dHlwZTpcIndvcmtzcGFjZS1saWNlbnNpbmdcIixkYXRhOm59KX0sYT1hc3luYyBlPT57aS5PSS51dWlkPT09aS5HaS51dWlkJiZpLk9JLm5hbWU9PT1pLkdpLm5hbWV8fHMoby5Ib21lLGUpfSxjPWFzeW5jIGU9PntzKG8uU3RvcmVmcm9udCxlKX0sZD1hc3luYyBlPT57cyhvLkRvY2ssZSl9fSwxMjE6KGUsdCxuKT0+e24uZCh0LHtHaTooKT0+YyxKVjooKT0+cCxPSTooKT0+ZCxpVzooKT0+dX0pO3ZhciBvLHIsaT1uKDgwNikscz1uKDY3OCk7IWZ1bmN0aW9uKGUpe2UuSG9tZT1cIm9wZW5maW4taG9tZVwiLGUuRG9jaz1cIm9wZW5maW4tZG9ja1wiLGUuU3RvcmVmcm9udD1cIm9wZW5maW4tc3RvcmVmcm9udFwiLGUuSG9tZUludGVybmFsPVwib3BlbmZpbi1ob21lLWludGVybmFsXCIsZS5Ccm93c2VyTWVudT1cIm9wZW5maW4tYnJvd3Nlci1tZW51XCIsZS5Ccm93c2VySW5kaWNhdG9yPVwib3BlbmZpbi1icm93c2VyLWluZGljYXRvclwiLGUuQnJvd3NlcldpbmRvdz1cImludGVybmFsLWdlbmVyYXRlZC13aW5kb3dcIn0ob3x8KG89e30pKSxmdW5jdGlvbihlKXtlLlNob3duPVwic2hvd25cIixlLkJvdW5kc0NoYW5nZWQ9XCJib3VuZHMtY2hhbmdlZFwiLGUuTGF5b3V0UmVhZHk9XCJsYXlvdXQtcmVhZHlcIixlLkVuZFVzZXJCb3VuZHNDaGFuZ2luZz1cImVuZC11c2VyLWJvdW5kcy1jaGFuZ2luZ1wiLGUuQmx1cnJlZD1cImJsdXJyZWRcIixlLkNsb3NlZD1cImNsb3NlZFwiLGUuQ2xvc2VSZXF1ZXN0ZWQ9XCJjbG9zZS1yZXF1ZXN0ZWRcIixlLkZvY3VzZWQ9XCJmb2N1c2VkXCIsZS5TaG93UmVxdWVzdGVkPVwic2hvdy1yZXF1ZXN0ZWRcIixlLlZpZXdDcmFzaGVkPVwidmlldy1jcmFzaGVkXCIsZS5WaWV3QXR0YWNoZWQ9XCJ2aWV3LWF0dGFjaGVkXCIsZS5WaWV3RGV0YWNoZWQ9XCJ2aWV3LWRldGFjaGVkXCIsZS5WaWV3UGFnZVRpdGxlVXBkYXRlZD1cInZpZXctcGFnZS10aXRsZS11cGRhdGVkXCIsZS5WaWV3RGVzdHJveWVkPVwidmlldy1kZXN0cm95ZWRcIixlLk9wdGlvbnNDaGFuZ2VkPVwib3B0aW9ucy1jaGFuZ2VkXCJ9KHJ8fChyPXt9KSk7ZnVuY3Rpb24gYShlKXtpZighcy5zUyl0aHJvdyBuZXcgRXJyb3IoXCJnZXRPRldpbmRvdyBjYW4gb25seSBiZSB1c2VkIGluIGFuIE9wZW5GaW4gZW52LiBBdm9pZCBjYWxsaW5nIHRoaXMgbWV0aG9kIGR1cmluZyBwcmUtcmVuZGVyaW5nLlwiKTtyZXR1cm4gZmluLldpbmRvdy53cmFwU3luYyhlKX1jb25zdCBjPXtuYW1lOnMub0MsdXVpZDpzLkFCfTtjb25zdCBkPXtuYW1lOm8uSG9tZSx1dWlkOmkucTkuV29ya3NwYWNlfSx1PShvLkRvY2ssaS5xOS5Xb3Jrc3BhY2Usby5TdG9yZWZyb250LGkucTkuV29ya3NwYWNlLHtuYW1lOmkucTkuV29ya3NwYWNlLHV1aWQ6aS5xOS5Xb3Jrc3BhY2V9KTtjb25zdCBwPWU9PmEoZSkuZ2V0T3B0aW9ucygpLnRoZW4oKCgpPT4hMCkpLmNhdGNoKCgoKT0+ITEpKX0sMzE2OihlLHQsbik9Pnt2YXIgbyxyLGk7bi5kKHQse0RlOigpPT5vLHB4OigpPT5yLHd0OigpPT5pfSksZnVuY3Rpb24oZSl7ZS5GZXRjaGluZz1cImZldGNoaW5nXCIsZS5GZXRjaGVkPVwiZmV0Y2hlZFwiLGUuQ29tcGxldGU9XCJjb21wbGV0ZVwifShvfHwobz17fSkpLGZ1bmN0aW9uKGUpe2UuVXNlckFjdGlvbj1cInVzZXItYWN0aW9uXCIsZS5Gb2N1c0NoYW5nZT1cImZvY3VzLWNoYW5nZVwiLGUuUmVsb2FkPVwicmVsb2FkXCJ9KHJ8fChyPXt9KSksZnVuY3Rpb24oZSl7ZS5BY3RpdmU9XCJhY3RpdmVcIixlLkRlZmF1bHQ9XCJkZWZhdWx0XCJ9KGl8fChpPXt9KSl9fSx0PXt9O2Z1bmN0aW9uIG4obyl7dmFyIHI9dFtvXTtpZih2b2lkIDAhPT1yKXJldHVybiByLmV4cG9ydHM7dmFyIGk9dFtvXT17ZXhwb3J0czp7fX07cmV0dXJuIGVbb10oaSxpLmV4cG9ydHMsbiksaS5leHBvcnRzfW4uZD0oZSx0KT0+e2Zvcih2YXIgbyBpbiB0KW4ubyh0LG8pJiYhbi5vKGUsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8se2VudW1lcmFibGU6ITAsZ2V0OnRbb119KX0sbi5vPShlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KSxuLnI9ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9O3ZhciBvPXt9OygoKT0+e24ucihvKSxuLmQobyx7QWN0aW9uVHJpZ2dlcjooKT0+UC5wLEFwcE1hbmlmZXN0VHlwZTooKT0+Vy5MLEJ1dHRvblN0eWxlOigpPT5DLlpKLENMSUFjdGlvbjooKT0+ay5QdCxDTElGaWx0ZXJPcHRpb25UeXBlOigpPT5rLmVsLENMSVRlbXBsYXRlOigpPT5rLnlXLENvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnROYW1lczooKT0+Qy5wNixEb2NrOigpPT5lLERvY2tCdXR0b25OYW1lczooKT0+Yy52LEhvbWU6KCk9PmgsTGVnYWN5OigpPT50LFByZXNlbnRhdGlvblRlbXBsYXRlRnJhZ21lbnROYW1lczooKT0+Qy5HbyxTZWFyY2hUYWdCYWNrZ3JvdW5kOigpPT5QLncsU3RvcmVmcm9udDooKT0+UyxTdG9yZWZyb250VGVtcGxhdGU6KCk9PlcuVCxUZW1wbGF0ZUZyYWdtZW50VHlwZXM6KCk9PkMuYkl9KTt2YXIgZT17fTtuLnIoZSksbi5kKGUse0RvY2tCdXR0b25OYW1lczooKT0+Yy52LGRlcmVnaXN0ZXI6KCk9PmwsbWluaW1pemU6KCk9PmYscmVnaXN0ZXI6KCk9PnAsc2hvdzooKT0+d30pO3ZhciB0PXt9O24ucih0KSxuLmQodCx7Z2V0UGFnZXM6KCk9PnYsZ2V0V29ya3NwYWNlczooKT0+bX0pO3ZhciByPW4oNjc4KSxpPW4oNTMyKSxzPW4oNDM2KSxhPW4oODIpLGM9big0MjcpO2xldCBkLHU9ITE7Y29uc3QgcD1lPT4oZD1uZXcgUHJvbWlzZSgoYXN5bmModCxuKT0+e3RyeXtjb25zdCBuPWF3YWl0KGFzeW5jIGU9Pntjb25zdCB0PWF3YWl0KDAscy5YbCkoKTtpZih1KXRocm93IG5ldyBFcnJvcihcIkEgZG9jayBwcm92aWRlciBmb3IgdGhlIHBsYXRmb3JtIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cIik7cmV0dXJuIHU9ITAsZS5jbGllbnRBUElWZXJzaW9uPXIudTAsdC5kaXNwYXRjaChzLldGLlJlZ2lzdGVyUHJvdmlkZXIse3Byb3ZpZGVyVHlwZTphLmxQLkRvY2ssaW5mbzplfSl9KShlKTsoMCxpLlduKSh7YWxsb3dlZDohMCxjb21wb25lbnRWZXJzaW9uOm4/LndvcmtzcGFjZVZlcnNpb259KSx0KHtjbGllbnRBUElWZXJzaW9uOnIudTAsd29ya3NwYWNlVmVyc2lvbjpuLndvcmtzcGFjZVZlcnNpb258fFwiXCJ9KX1jYXRjaChlKXsoMCxpLlduKSh7YWxsb3dlZDohMSxyZWplY3Rpb25Db2RlOmUubWVzc2FnZX0pLG4oZSksZD1udWxsfX0pKSxkKSxsPWFzeW5jKCk9Pnthd2FpdCBkLHU9ITE7cmV0dXJuKGF3YWl0KDAscy5YbCkoKSkuZGlzcGF0Y2gocy5XRi5EZXJlZ2lzdGVyUHJvdmlkZXIse3Byb3ZpZGVyVHlwZTphLmxQLkRvY2t9KX0sZj1hc3luYygpPT57YXdhaXQgZCxhd2FpdCgwLHMuYUIpKCksYXdhaXQoMCxhLlI4KShhLmxQLkRvY2spfSx3PWFzeW5jKCk9Pnthd2FpdCBkLGF3YWl0KDAscy5hQikoKSxhd2FpdCgwLGEuWF8pKGEubFAuRG9jayl9O3ZhciBnLGg9big3MDMpO24oMTIxKTshZnVuY3Rpb24oZSl7ZS5UYWJDcmVhdGVkPVwidGFiLWNyZWF0ZWRcIixlLkNvbnRhaW5lckNyZWF0ZWQ9XCJjb250YWluZXItY3JlYXRlZFwiLGUuQ29udGFpbmVyUmVzaXplZD1cImNvbnRhaW5lci1yZXNpemVkXCJ9KGd8fChnPXt9KSk7bmV3IE1hcDt2YXIgeTshZnVuY3Rpb24oZSl7ZS5DdXJyZW50V29ya3NwYWNlSWQ9XCJjdXJyZW50V29ya3NwYWNlSWRcIixlLkxhc3RGb2N1c2VkQnJvd3NlcldpbmRvdz1cImxhc3RGb2N1c2VkQnJvd3NlcldpbmRvd1wiLGUuTWFjaGluZU5hbWU9XCJtYWNoaW5lTmFtZVwiLGUuTmV3VGFiUGFnZUxheW91dD1cIk5ld1RhYlBhZ2VMYXlvdXRcIixlLk5ld1RhYlBhZ2VTb3J0PVwiTmV3VGFiUGFnZVNvcnRcIixlLkRvY2tQb3NpdGlvbj1cIkRvY2tQb3NpdGlvblwifSh5fHwoeT17fSkpO2NvbnN0IHY9KCk9PmFzeW5jIGZ1bmN0aW9uKCl7cmV0dXJuKGF3YWl0KDAscy5EbSkoKSkuZGlzcGF0Y2gocy5XRi5HZXRMZWdhY3lQYWdlcyx2b2lkIDApfSgpLG09KCk9Pihhc3luYygpPT4oYXdhaXQoMCxzLkRtKSgpKS5kaXNwYXRjaChzLldGLkdldExlZ2FjeVdvcmtzcGFjZXMsdm9pZCAwKSkoKTt2YXIgUz1uKDUyOCksUD1uKDI5OCksQz1uKDEwOSksaz1uKDc1OCksVz1uKDExNCl9KSgpLG1vZHVsZS5leHBvcnRzPW99KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQ29udmVydHMgYW4gQVNDSUkgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlUb0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnZhbHVlc2AgYW5kIGBfLnZhbHVlc0luYCB3aGljaCBjcmVhdGVzIGFuXG4gKiBhcnJheSBvZiBgb2JqZWN0YCBwcm9wZXJ0eSB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkgbmFtZXNcbiAqIG9mIGBwcm9wc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBnZXQgdmFsdWVzIGZvci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZVZhbHVlcyhvYmplY3QsIHByb3BzKSB7XG4gIHJldHVybiBhcnJheU1hcChwcm9wcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVmFsdWVzO1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsIi8qKlxuICogQ29udmVydHMgYGl0ZXJhdG9yYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGl0ZXJhdG9yIFRoZSBpdGVyYXRvciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yVG9BcnJheShpdGVyYXRvcikge1xuICB2YXIgZGF0YSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICghKGRhdGEgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICByZXN1bHQucHVzaChkYXRhLnZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZXJhdG9yVG9BcnJheTtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZSkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVRvQXJyYXk7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNTdHJpbmcgPSByZXF1aXJlKCcuL2lzU3RyaW5nJyksXG4gICAgaXRlcmF0b3JUb0FycmF5ID0gcmVxdWlyZSgnLi9faXRlcmF0b3JUb0FycmF5JyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpLFxuICAgIHN0cmluZ1RvQXJyYXkgPSByZXF1aXJlKCcuL19zdHJpbmdUb0FycmF5JyksXG4gICAgdmFsdWVzID0gcmVxdWlyZSgnLi92YWx1ZXMnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1JdGVyYXRvciA9IFN5bWJvbCA/IFN5bWJvbC5pdGVyYXRvciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9BcnJheSh7ICdhJzogMSwgJ2InOiAyIH0pO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogXy50b0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXVxuICpcbiAqIF8udG9BcnJheSgxKTtcbiAqIC8vID0+IFtdXG4gKlxuICogXy50b0FycmF5KG51bGwpO1xuICogLy8gPT4gW11cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gc3RyaW5nVG9BcnJheSh2YWx1ZSkgOiBjb3B5QXJyYXkodmFsdWUpO1xuICB9XG4gIGlmIChzeW1JdGVyYXRvciAmJiB2YWx1ZVtzeW1JdGVyYXRvcl0pIHtcbiAgICByZXR1cm4gaXRlcmF0b3JUb0FycmF5KHZhbHVlW3N5bUl0ZXJhdG9yXSgpKTtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgIGZ1bmMgPSB0YWcgPT0gbWFwVGFnID8gbWFwVG9BcnJheSA6ICh0YWcgPT0gc2V0VGFnID8gc2V0VG9BcnJheSA6IHZhbHVlcyk7XG5cbiAgcmV0dXJuIGZ1bmModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXk7XG4iLCJ2YXIgYmFzZVZhbHVlcyA9IHJlcXVpcmUoJy4vX2Jhc2VWYWx1ZXMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnR5IHZhbHVlcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy52YWx1ZXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbMSwgMl0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLnZhbHVlcygnaGknKTtcbiAqIC8vID0+IFsnaCcsICdpJ11cbiAqL1xuZnVuY3Rpb24gdmFsdWVzKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBbXSA6IGJhc2VWYWx1ZXMob2JqZWN0LCBrZXlzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvZW1vamknKTsiLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbnZhciB0b0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL3RvQXJyYXknKTtcbnZhciBlbW9qaUJ5TmFtZSA9IHJlcXVpcmUoJy4vZW1vamkuanNvbicpO1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiByZWdleCB0byBwYXJzZSBlbW9qaSBpbiBhIHN0cmluZyAtIGZpbmRzIGVtb2ppLCBlLmcuIDpjb2ZmZWU6XG4gKi9cbnZhciBlbW9qaU5hbWVSZWdleCA9IC86KFthLXpBLVowLTlfXFwtXFwrXSspOi9nO1xuXG4vKipcbiAqIHJlZ2V4IHRvIHRyaW0gd2hpdGVzcGFjZVxuICogdXNlIGluc3RlYWQgb2YgU3RyaW5nLnByb3RvdHlwZS50cmltKCkgZm9yIElFOCBzdXBwb3J0XG4gKi9cbnZhciB0cmltU3BhY2VSZWdleCA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztcblxuLyoqXG4gKiBSZW1vdmVzIGNvbG9ucyBvbiBlaXRoZXIgc2lkZVxuICogb2YgdGhlIHN0cmluZyBpZiBwcmVzZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpcENvbG9ucyAoc3RyKSB7XG4gIHZhciBjb2xvbkluZGV4ID0gc3RyLmluZGV4T2YoJzonKTtcbiAgaWYgKGNvbG9uSW5kZXggPiAtMSkge1xuICAgIC8vIDplbW9qaTogKGh0dHA6Ly93d3cuZW1vamktY2hlYXQtc2hlZXQuY29tLylcbiAgICBpZiAoY29sb25JbmRleCA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgY29sb25JbmRleCk7XG4gICAgICByZXR1cm4gc3RyaXBDb2xvbnMoc3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gc3RyLnN1YnN0cihjb2xvbkluZGV4ICsgMSk7XG4gICAgICByZXR1cm4gc3RyaXBDb2xvbnMoc3RyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIEFkZHMgY29sb25zIHRvIGVpdGhlciBzaWRlXG4gKiBvZiB0aGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHdyYXBDb2xvbnMgKHN0cikge1xuICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPiAwKSA/ICc6JyArIHN0ciArICc6JyA6IHN0cjtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCB0aGUgd29yZCBpcyB3cmFwcGVkIGluIGNvbG9uc1xuICogYnkgb25seSBhZGRpbmcgdGhlbSwgaWYgdGhleSBhcmUgbm90IHRoZXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbnN1cmVDb2xvbnMgKHN0cikge1xuICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICYmIHN0clswXSAhPT0gJzonKSA/IHdyYXBDb2xvbnMoc3RyKSA6IHN0cjtcbn1cblxuLy8gTm9uIHNwYWNpbmcgbWFyaywgc29tZSBlbW90aWNvbnMgaGF2ZSB0aGVtLiBJdCdzIHRoZSAnVmFyaWFudCBGb3JtJyxcbi8vIHdoaWNoIHByb3ZpZGVzIG1vcmUgaW5mb3JtYXRpb24gc28gdGhhdCBlbW90aWNvbnMgY2FuIGJlIHJlbmRlcmVkIGFzXG4vLyBtb3JlIGNvbG9yZnVsIGdyYXBoaWNzLiBGRTBFIGlzIGEgdW5pY29kZSB0ZXh0IHZlcnNpb24sIHdoZXJlIGFzIEZFMEZcbi8vIHNob3VsZCBiZSByZW5kZXJlZCBhcyBhIGdyYXBoaWNhbCB2ZXJzaW9uLiBUaGUgY29kZSBncmFjZWZ1bGx5IGRlZ3JhZGVzLlxudmFyIE5PTl9TUEFDSU5HX01BUksgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1MDM5KTsgLy8gNjUwMzkgLSAn77iPJyAtIDB4RkUwRjtcbnZhciBub25TcGFjaW5nUmVnZXggPSBuZXcgUmVnRXhwKE5PTl9TUEFDSU5HX01BUkssICdnJylcblxuLy8gUmVtb3ZlIHRoZSBub24tc3BhY2luZy1tYXJrIGZyb20gdGhlIGNvZGUsIG5ldmVyIHNlbmQgYSBzdHJpcHBlZCB2ZXJzaW9uXG4vLyB0byB0aGUgY2xpZW50LCBhcyBpdCBraWxscyBncmFwaGljYWwgZW1vdGljb25zLlxuZnVuY3Rpb24gc3RyaXBOU0IgKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUucmVwbGFjZShub25TcGFjaW5nUmVnZXgsICcnKTtcbn07XG5cbi8vIFJldmVyc2VkIGhhc2ggdGFibGUsIHdoZXJlIGFzIGVtb2ppQnlOYW1lIGNvbnRhaW5zIGEgeyBoZWFydDogJ+KdpCcgfVxuLy8gZGljdGlvbmFyeSBlbW9qaUJ5Q29kZSBjb250YWlucyB7IOKdpDogJ2hlYXJ0JyB9LiBUaGUgY29kZXMgYXJlIG5vcm1hbGl6ZWRcbi8vIHRvIHRoZSB0ZXh0IHZlcnNpb24uXG52YXIgZW1vamlCeUNvZGUgPSBPYmplY3Qua2V5cyhlbW9qaUJ5TmFtZSkucmVkdWNlKGZ1bmN0aW9uKGgsaykge1xuICBoW3N0cmlwTlNCKGVtb2ppQnlOYW1lW2tdKV0gPSBrO1xuICByZXR1cm4gaDtcbn0sIHt9KTtcblxuLyoqXG4gKiBFbW9qaSBuYW1lc3BhY2VcbiAqL1xudmFyIEVtb2ppID0ge1xuICBlbW9qaTogZW1vamlCeU5hbWUsXG59O1xuXG4vKipcbiAqIGdldCBlbW9qaSBjb2RlIGZyb20gbmFtZS4gcmV0dXJuIGVtb2ppIGNvZGUgYmFjayBpZiBjb2RlIGlzIHBhc3NlZCBpbi5cbiAqIEBwYXJhbSAge3N0cmluZ30gZW1vamlcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkuX2dldCA9IGZ1bmN0aW9uIF9nZXQgKGVtb2ppKSB7XG4gIGlmIChlbW9qaUJ5Q29kZVtzdHJpcE5TQihlbW9qaSldKSB7XG4gICAgcmV0dXJuIGVtb2ppO1xuICB9IGVsc2UgaWYgKGVtb2ppQnlOYW1lLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgIHJldHVybiBlbW9qaUJ5TmFtZVtlbW9qaV07XG4gIH1cblxuICByZXR1cm4gZW5zdXJlQ29sb25zKGVtb2ppKTtcbn07XG5cbi8qKlxuICogZ2V0IGVtb2ppIGNvZGUgZnJvbSA6ZW1vamk6IHN0cmluZyBvciBuYW1lXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVtb2ppXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLmdldCA9IGZ1bmN0aW9uIGdldCAoZW1vamkpIHtcbiAgZW1vamkgPSBzdHJpcENvbG9ucyhlbW9qaSk7XG5cbiAgcmV0dXJuIEVtb2ppLl9nZXQoZW1vamkpO1xufTtcblxuLyoqXG4gKiBmaW5kIHRoZSBlbW9qaSBieSBlaXRoZXIgY29kZSBvciBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZU9yQ29kZSBUaGUgZW1vamkgdG8gZmluZCwgZWl0aGVyIGBjb2ZmZWVgLCBgOmNvZmZlZTpgIG9yIGDimJVgO1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5FbW9qaS5maW5kID0gZnVuY3Rpb24gZmluZCAobmFtZU9yQ29kZSkge1xuICByZXR1cm4gRW1vamkuZmluZEJ5TmFtZShuYW1lT3JDb2RlKSB8fCBFbW9qaS5maW5kQnlDb2RlKG5hbWVPckNvZGUpO1xufTtcblxuLyoqXG4gKiBmaW5kIHRoZSBlbW9qaSBieSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgZW1vamkgdG8gZmluZCBlaXRoZXIgYGNvZmZlZWAgb3IgYDpjb2ZmZWU6YDtcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuRW1vamkuZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUgKG5hbWUpIHtcbiAgdmFyIHN0cmlwcGVkID0gc3RyaXBDb2xvbnMobmFtZSk7XG4gIHZhciBlbW9qaSA9IGVtb2ppQnlOYW1lW3N0cmlwcGVkXTtcblxuICByZXR1cm4gZW1vamkgPyAoeyBlbW9qaTogZW1vamksIGtleTogc3RyaXBwZWQgfSkgOiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIGZpbmQgdGhlIGVtb2ppIGJ5IGNvZGUgKGVtb2ppKVxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgVGhlIGVtb2ppIHRvIGZpbmQ7IGZvciBleGFtcGxlIGDimJVgIG9yIGDimJRgXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbkVtb2ppLmZpbmRCeUNvZGUgPSBmdW5jdGlvbiBmaW5kQnlDb2RlIChjb2RlKSB7XG4gIHZhciBzdHJpcHBlZCA9IHN0cmlwTlNCKGNvZGUpO1xuICB2YXIgbmFtZSA9IGVtb2ppQnlDb2RlW3N0cmlwcGVkXTtcblxuICAvLyBsb29rdXAgZW1vamkgdG8gZW5zdXJlIHRoZSBWYXJpYW50IEZvcm0gaXMgcmV0dXJuZWRcbiAgcmV0dXJuIG5hbWUgPyAoeyBlbW9qaTogZW1vamlCeU5hbWVbbmFtZV0sIGtleTogbmFtZSB9KSA6IHVuZGVmaW5lZDtcbn07XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbW9qaSBpcyBrbm93biBieSB0aGlzIGxpYnJhcnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lT3JDb2RlIFRoZSBlbW9qaSB0byB2YWxpZGF0ZSwgZWl0aGVyIGBjb2ZmZWVgLCBgOmNvZmZlZTpgIG9yIGDimJVgO1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5FbW9qaS5oYXNFbW9qaSA9IGZ1bmN0aW9uIGhhc0Vtb2ppIChuYW1lT3JDb2RlKSB7XG4gIHJldHVybiBFbW9qaS5oYXNFbW9qaUJ5TmFtZShuYW1lT3JDb2RlKSB8fCBFbW9qaS5oYXNFbW9qaUJ5Q29kZShuYW1lT3JDb2RlKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZW1vamkgd2l0aCBnaXZlbiBuYW1lIGlzIGtub3duIGJ5IHRoaXMgbGlicmFyeVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGVtb2ppIHRvIHZhbGlkYXRlIGVpdGhlciBgY29mZmVlYCBvciBgOmNvZmZlZTpgO1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5FbW9qaS5oYXNFbW9qaUJ5TmFtZSA9IGZ1bmN0aW9uIGhhc0Vtb2ppQnlOYW1lIChuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBFbW9qaS5maW5kQnlOYW1lKG5hbWUpO1xuICByZXR1cm4gISFyZXN1bHQgJiYgcmVzdWx0LmtleSA9PT0gc3RyaXBDb2xvbnMobmFtZSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gZW1vamkgaXMga25vd24gYnkgdGhpcyBsaWJyYXJ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSBUaGUgZW1vamkgdG8gdmFsaWRhdGU7IGZvciBleGFtcGxlIGDimJVgIG9yIGDimJRgXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbkVtb2ppLmhhc0Vtb2ppQnlDb2RlID0gZnVuY3Rpb24gaGFzRW1vamlCeUNvZGUgKGNvZGUpIHtcbiAgdmFyIHJlc3VsdCA9IEVtb2ppLmZpbmRCeUNvZGUoY29kZSk7XG4gIHJldHVybiAhIXJlc3VsdCAmJiBzdHJpcE5TQihyZXN1bHQuZW1vamkpID09PSBzdHJpcE5TQihjb2RlKTtcbn07XG5cbi8qKlxuICogZ2V0IGVtb2ppIG5hbWUgZnJvbSBjb2RlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVtb2ppXG4gKiBAcGFyYW0gIHtib29sZWFufSBpbmNsdWRlQ29sb25zIHNob3VsZCB0aGUgcmVzdWx0IGluY2x1ZGUgdGhlIDo6XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLndoaWNoID0gZnVuY3Rpb24gd2hpY2ggKGVtb2ppX2NvZGUsIGluY2x1ZGVDb2xvbnMpIHtcbiAgdmFyIGNvZGUgPSBzdHJpcE5TQihlbW9qaV9jb2RlKTtcbiAgdmFyIHdvcmQgPSBlbW9qaUJ5Q29kZVtjb2RlXTtcblxuICByZXR1cm4gaW5jbHVkZUNvbG9ucyA/IHdyYXBDb2xvbnMod29yZCkgOiB3b3JkO1xufTtcblxuLyoqXG4gKiBlbW9qaWZ5IGEgc3RyaW5nIChyZXBsYWNlIDplbW9qaTogd2l0aCBhbiBlbW9qaSlcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25fbWlzc2luZyAoZ2V0cyBlbW9qaSBuYW1lIHdpdGhvdXQgOjogYW5kIHJldHVybnMgYSBwcm9wZXIgZW1vamkgaWYgbm8gZW1vamkgd2FzIGZvdW5kKVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGZvcm1hdCAod3JhcCB0aGUgcmV0dXJuZWQgZW1vamkgaW4gYSBjdXN0b20gZWxlbWVudClcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkuZW1vamlmeSA9IGZ1bmN0aW9uIGVtb2ppZnkgKHN0ciwgb25fbWlzc2luZywgZm9ybWF0KSB7XG4gIGlmICghc3RyKSByZXR1cm4gJyc7XG5cbiAgcmV0dXJuIHN0ci5zcGxpdChlbW9qaU5hbWVSZWdleCkgLy8gcGFyc2UgZW1vamkgdmlhIHJlZ2V4XG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIHBhcnNlRW1vamkocywgaSkge1xuICAgICAgICAgICAgICAvLyBldmVyeSBzZWNvbmQgZWxlbWVudCBpcyBhbiBlbW9qaSwgZS5nLiBcInRlc3QgOmZhc3RfZm9yd2FyZDpcIiAtPiBbIFwidGVzdCBcIiwgXCJmYXN0X2ZvcndhcmRcIiBdXG4gICAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkgcmV0dXJuIHM7XG4gICAgICAgICAgICAgIHZhciBlbW9qaSA9IEVtb2ppLl9nZXQocyk7XG4gICAgICAgICAgICAgIHZhciBpc01pc3NpbmcgPSBlbW9qaS5pbmRleE9mKCc6JykgPiAtMTtcblxuICAgICAgICAgICAgICBpZiAoaXNNaXNzaW5nICYmIHR5cGVvZiBvbl9taXNzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uX21pc3Npbmcocyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzTWlzc2luZyAmJiB0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChlbW9qaSwgcyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZW1vamk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpIC8vIGNvbnZlcnQgYmFjayB0byBzdHJpbmdcbiAgO1xufTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gZW1vamlcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkucmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tICgpIHtcbiAgdmFyIGVtb2ppS2V5cyA9IE9iamVjdC5rZXlzKGVtb2ppQnlOYW1lKTtcbiAgdmFyIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1vamlLZXlzLmxlbmd0aCk7XG4gIHZhciBrZXkgPSBlbW9qaUtleXNbcmFuZG9tSW5kZXhdO1xuICB2YXIgZW1vamkgPSBFbW9qaS5fZ2V0KGtleSk7XG4gIHJldHVybiB7IGtleToga2V5LCBlbW9qaTogZW1vamkgfTtcbn1cblxuLyoqXG4gKiAgcmV0dXJuIGFuIGNvbGxlY3Rpb24gb2YgcG90ZW50aWFsIGVtb2ppIG1hdGNoZXNcbiAqICBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiAgQHJldHVybiB7QXJyYXkuPE9iamVjdD59XG4gKi9cbkVtb2ppLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCAoc3RyKSB7XG4gIHZhciBlbW9qaUtleXMgPSBPYmplY3Qua2V5cyhlbW9qaUJ5TmFtZSk7XG4gIHZhciBtYXRjaGVyID0gc3RyaXBDb2xvbnMoc3RyKVxuICB2YXIgbWF0Y2hpbmdLZXlzID0gZW1vamlLZXlzLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCkuaW5kZXhPZihtYXRjaGVyKSA9PT0gMDtcbiAgfSk7XG4gIHJldHVybiBtYXRjaGluZ0tleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGVtb2ppOiBFbW9qaS5fZ2V0KGtleSksXG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogdW5lbW9qaWZ5IGEgc3RyaW5nIChyZXBsYWNlIGVtb2ppIHdpdGggOmVtb2ppOilcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLnVuZW1vamlmeSA9IGZ1bmN0aW9uIHVuZW1vamlmeSAoc3RyKSB7XG4gIGlmICghc3RyKSByZXR1cm4gJyc7XG4gIHZhciB3b3JkcyA9IHRvQXJyYXkoc3RyKTtcblxuICByZXR1cm4gd29yZHMubWFwKGZ1bmN0aW9uKHdvcmQpIHtcbiAgICByZXR1cm4gRW1vamkud2hpY2god29yZCwgdHJ1ZSkgfHwgd29yZDtcbiAgfSkuam9pbignJyk7XG59O1xuXG4vKipcbiAqIHJlcGxhY2UgZW1vamlzIHdpdGggcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb258c3RyaW5nfSB0aGUgc3RyaW5nIG9yIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlcGxhY2UgdGhlIGVtb2ppIHdpdGhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkIHRyYWlsaW5nIHdoaXRlc3BhY2VzIGJlIGNsZWFuZWQ/IERlZmF1bHRzIGZhbHNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChzdHIsIHJlcGxhY2VtZW50LCBjbGVhblNwYWNlcykge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuXG4gIHZhciByZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gcmVwbGFjZW1lbnQgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcGxhY2VtZW50OyB9O1xuICB2YXIgd29yZHMgPSB0b0FycmF5KHN0cik7XG5cbiAgdmFyIHJlcGxhY2VkID0gd29yZHMubWFwKGZ1bmN0aW9uKHdvcmQsIGlkeCkge1xuICAgIHZhciBlbW9qaSA9IEVtb2ppLmZpbmRCeUNvZGUod29yZCk7XG5cbiAgICBpZiAoZW1vamkgJiYgY2xlYW5TcGFjZXMgJiYgd29yZHNbaWR4ICsgMV0gPT09ICcgJykge1xuICAgICAgd29yZHNbaWR4ICsgMV0gPSAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZW1vamkgPyByZXBsYWNlKGVtb2ppKSA6IHdvcmQ7XG4gIH0pLmpvaW4oJycpO1xuXG4gIHJldHVybiBjbGVhblNwYWNlcyA/IHJlcGxhY2VkLnJlcGxhY2UodHJpbVNwYWNlUmVnZXgsICcnKSA6IHJlcGxhY2VkO1xufTtcblxuXG4vKipcbiAqIHJlbW92ZSBhbGwgZW1vamlzIGZyb20gYSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkuc3RyaXAgPSBmdW5jdGlvbiBzdHJpcCAoc3RyKSB7XG4gIHJldHVybiBFbW9qaS5yZXBsYWNlKHN0ciwgJycsIHRydWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbW9qaTtcbiIsImltcG9ydCB7XG5cdENMSVRlbXBsYXRlLFxuXHR0eXBlIENMSUZpbHRlcixcblx0dHlwZSBIb21lRGlzcGF0Y2hlZFNlYXJjaFJlc3VsdCxcblx0dHlwZSBIb21lU2VhcmNoTGlzdGVuZXJSZXNwb25zZSxcblx0dHlwZSBIb21lU2VhcmNoUmVzcG9uc2UsXG5cdHR5cGUgSG9tZVNlYXJjaFJlc3VsdFxufSBmcm9tIFwiQG9wZW5maW4vd29ya3NwYWNlXCI7XG5pbXBvcnQgKiBhcyBlbW9qaSBmcm9tIFwibm9kZS1lbW9qaVwiO1xuaW1wb3J0IHR5cGUgeyBJbnRlZ3JhdGlvbiwgSW50ZWdyYXRpb25NYW5hZ2VyLCBJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9pbnRlZ3JhdGlvbnMtc2hhcGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVIZWxwIH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHR5cGUgeyBFbW9qaVNldHRpbmdzIH0gZnJvbSBcIi4vc2hhcGVzXCI7XG5pbXBvcnQgeyBnZXRFbW9qaVRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVzXCI7XG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBpbnRlZ3JhdGlvbiBwcm92aWRlciBmb3IgRW1vamlzLlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyIGltcGxlbWVudHMgSW50ZWdyYXRpb25Nb2R1bGU8RW1vamlTZXR0aW5ncz4ge1xuXHQvKipcblx0ICogUHJvdmlkZXIgaWQuXG5cdCAqIEBpbnRlcm5hbFxuXHQgKi9cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX1BST1ZJREVSX0lEID0gXCJlbW9qaVwiO1xuXG5cdC8qKlxuXHQgKiBUaGUga2V5IHRvIHVzZSBmb3IgYSBlbW9qaSByZXN1bHQuXG5cdCAqIEBpbnRlcm5hbFxuXHQgKi9cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0VNT0pJX1BST1ZJREVSX0RFVEFJTFNfQUNUSU9OID0gXCJFbW9qaSBEZXRhaWxzXCI7XG5cblx0LyoqXG5cdCAqIFRoZSBrZXkgdG8gdXNlIGZvciBhIGVtb2ppIGNvcHkga2V5IGFjdGlvbi5cblx0ICogQGludGVybmFsXG5cdCAqL1xuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRU1PSklfUFJPVklERVJfQ09QWV9LRVlfQUNUSU9OID0gXCJDb3B5IEtleVwiO1xuXG5cdC8qKlxuXHQgKiBUaGUga2V5IHRvIHVzZSBmb3IgYSBlbW9qaSBjb3B5IGtleSBhY3Rpb24uXG5cdCAqIEBpbnRlcm5hbFxuXHQgKi9cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX0VNT0pJX1BST1ZJREVSX0NPUFlfRU1PSklfQUNUSU9OID0gXCJDb3B5IEVtb2ppXCI7XG5cblx0LyoqXG5cdCAqIFRoZSBpbnRlZ3JhdGlvbiBtYW5hZ2VyLlxuXHQgKiBAaW50ZXJuYWxcblx0ICovXG5cdHByaXZhdGUgX2ludGVncmF0aW9uTWFuYWdlcjogSW50ZWdyYXRpb25NYW5hZ2VyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbW9kdWxlIGlzIGJlaW5nIHJlZ2lzdGVyZWQuXG5cdCAqIEBwYXJhbSBpbnRlZ3JhdGlvbk1hbmFnZXIgVGhlIG1hbmFnZXIgZm9yIHRoZSBpbnRlZ3JhdGlvbi5cblx0ICogQHBhcmFtIGludGVncmF0aW9uIFRoZSBpbnRlZ3JhdGlvbiBkZXRhaWxzLlxuXHQgKiBAcmV0dXJucyBOb3RoaW5nLlxuXHQgKi9cblx0cHVibGljIGFzeW5jIHJlZ2lzdGVyKFxuXHRcdGludGVncmF0aW9uTWFuYWdlcjogSW50ZWdyYXRpb25NYW5hZ2VyLFxuXHRcdGludGVncmF0aW9uOiBJbnRlZ3JhdGlvbjxFbW9qaVNldHRpbmdzPlxuXHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aGlzLl9pbnRlZ3JhdGlvbk1hbmFnZXIgPSBpbnRlZ3JhdGlvbk1hbmFnZXI7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG1vZHVsZSBpcyBiZWluZyBkZXJlZ2lzdGVyZWQuXG5cdCAqIEBwYXJhbSBpbnRlZ3JhdGlvbiBUaGUgaW50ZWdyYXRpb24gZGV0YWlscy5cblx0ICogQHJldHVybnMgTm90aGluZy5cblx0ICovXG5cdHB1YmxpYyBhc3luYyBkZXJlZ2lzdGVyKGludGVncmF0aW9uOiBJbnRlZ3JhdGlvbjxFbW9qaVNldHRpbmdzPik6IFByb21pc2U8dm9pZD4ge31cblxuXHQvKipcblx0ICogR2V0IGEgbGlzdCBvZiB0aGUgc3RhdGljIGhlbHAgZW50cmllcy5cblx0ICogQHBhcmFtIGludGVncmF0aW9uIFRoZSBpbnRlZ3JhdGlvbiBkZXRhaWxzLlxuXHQgKiBAcmV0dXJucyBUaGUgbGlzdCBvZiBoZWxwIGVudHJpZXMuXG5cdCAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0SGVscFNlYXJjaEVudHJpZXM/KGludGVncmF0aW9uOiBJbnRlZ3JhdGlvbjxFbW9qaVNldHRpbmdzPik6IFByb21pc2U8SG9tZVNlYXJjaFJlc3VsdFtdPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0a2V5OiBgJHtFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX1BST1ZJREVSX0lEfS1oZWxwYCxcblx0XHRcdFx0dGl0bGU6IFwiL2Vtb2ppXCIsXG5cdFx0XHRcdGxhYmVsOiBcIkhlbHBcIixcblx0XHRcdFx0aWNvbjogaW50ZWdyYXRpb24uaWNvbixcblx0XHRcdFx0YWN0aW9uczogW10sXG5cdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRwcm92aWRlcklkOiBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX1BST1ZJREVSX0lEXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRlbXBsYXRlOiBDTElUZW1wbGF0ZS5DdXN0b20sXG5cdFx0XHRcdHRlbXBsYXRlQ29udGVudDogYXdhaXQgY3JlYXRlSGVscChcblx0XHRcdFx0XHRcIi9lbW9qaVwiLFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFwiVGhlIGVtb2ppIGNvbW1hbmQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBlbW9qaXMgYnkgbmFtZS5cIixcblx0XHRcdFx0XHRcdFwiRm9yIGV4YW1wbGUgdG8gc2VhcmNoIGZvciBlbW9qaXMgd2hpY2ggaW5jbHVkZSBgd29tYW5gIG9yIGBtYW5gIGluIHRoZWlyIG5hbWUuXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFtcIi9lbW9qaSB3b21hblwiLCBcIi9lbW9qaSBtYW5cIl1cblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdF07XG5cdH1cblxuXHQvKipcblx0ICogQW4gZW50cnkgaGFzIGJlZW4gc2VsZWN0ZWQuXG5cdCAqIEBwYXJhbSBpbnRlZ3JhdGlvbiBUaGUgaW50ZWdyYXRpb24gZGV0YWlscy5cblx0ICogQHBhcmFtIHJlc3VsdCBUaGUgZGlzcGF0Y2hlZCByZXN1bHQuXG5cdCAqIEBwYXJhbSBsYXN0UmVzcG9uc2UgVGhlIGxhc3QgcmVzcG9uc2UuXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGl0ZW0gd2FzIGhhbmRsZWQuXG5cdCAqL1xuXHRwdWJsaWMgYXN5bmMgaXRlbVNlbGVjdGlvbihcblx0XHRpbnRlZ3JhdGlvbjogSW50ZWdyYXRpb248RW1vamlTZXR0aW5ncz4sXG5cdFx0cmVzdWx0OiBIb21lRGlzcGF0Y2hlZFNlYXJjaFJlc3VsdCxcblx0XHRsYXN0UmVzcG9uc2U6IEhvbWVTZWFyY2hMaXN0ZW5lclJlc3BvbnNlXG5cdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdGNvbnN0IGRhdGE6IHsgdXJsPzogc3RyaW5nIH0gPSByZXN1bHQuZGF0YTtcblxuXHRcdGlmIChyZXN1bHQuYWN0aW9uLnRyaWdnZXIgPT09IFwidXNlci1hY3Rpb25cIikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRyZXN1bHQuYWN0aW9uLm5hbWUgPT09IEVtb2ppSW50ZWdyYXRpb25Qcm92aWRlci5fRU1PSklfUFJPVklERVJfQ09QWV9FTU9KSV9BQ1RJT04gJiZcblx0XHRcdFx0cmVzdWx0LmRhdGEuZW1vamlcblx0XHRcdCkge1xuXHRcdFx0XHRhd2FpdCBmaW4uQ2xpcGJvYXJkLndyaXRlVGV4dCh7IGRhdGE6IHJlc3VsdC5kYXRhLmVtb2ppIH0pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdHJlc3VsdC5hY3Rpb24ubmFtZSA9PT0gRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyLl9FTU9KSV9QUk9WSURFUl9DT1BZX0tFWV9BQ1RJT04gJiZcblx0XHRcdFx0cmVzdWx0LmRhdGEua2V5XG5cdFx0XHQpIHtcblx0XHRcdFx0YXdhaXQgZmluLkNsaXBib2FyZC53cml0ZVRleHQoeyBkYXRhOiByZXN1bHQuZGF0YS5rZXkgfSk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0cmVzdWx0LmFjdGlvbi5uYW1lID09PSBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX0VNT0pJX1BST1ZJREVSX0RFVEFJTFNfQUNUSU9OICYmXG5cdFx0XHRcdHJlc3VsdC5kYXRhLnVybCAmJlxuXHRcdFx0XHR0aGlzLl9pbnRlZ3JhdGlvbk1hbmFnZXIub3BlblVybFxuXHRcdFx0KSB7XG5cdFx0XHRcdGF3YWl0IHRoaXMuX2ludGVncmF0aW9uTWFuYWdlci5vcGVuVXJsKGRhdGEudXJsKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhIGxpc3Qgb2Ygc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gdGhlIHF1ZXJ5IGFuZCBmaWx0ZXJzLlxuXHQgKiBAcGFyYW0gaW50ZWdyYXRpb24gVGhlIGludGVncmF0aW9uIGRldGFpbHMuXG5cdCAqIEBwYXJhbSBxdWVyeSBUaGUgcXVlcnkgdG8gc2VhcmNoIGZvci5cblx0ICogQHBhcmFtIGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gYXBwbHkuXG5cdCAqIEBwYXJhbSBsYXN0UmVzcG9uc2UgVGhlIGxhc3Qgc2VhcmNoIHJlc3BvbnNlIHVzZWQgZm9yIHVwZGF0aW5nIGV4aXN0aW5nIHJlc3VsdHMuXG5cdCAqIEByZXR1cm5zIFRoZSBsaXN0IG9mIHJlc3VsdHMgYW5kIG5ldyBmaWx0ZXJzLlxuXHQgKi9cblx0cHVibGljIGFzeW5jIGdldFNlYXJjaFJlc3VsdHMoXG5cdFx0aW50ZWdyYXRpb246IEludGVncmF0aW9uPEVtb2ppU2V0dGluZ3M+LFxuXHRcdHF1ZXJ5OiBzdHJpbmcsXG5cdFx0ZmlsdGVyczogQ0xJRmlsdGVyW10sXG5cdFx0bGFzdFJlc3BvbnNlOiBIb21lU2VhcmNoTGlzdGVuZXJSZXNwb25zZVxuXHQpOiBQcm9taXNlPEhvbWVTZWFyY2hSZXNwb25zZT4ge1xuXHRcdGNvbnN0IHJlc3VsdHM6IEhvbWVTZWFyY2hSZXN1bHRbXSA9IFtdO1xuXG5cdFx0aWYgKHF1ZXJ5LnN0YXJ0c1dpdGgoXCIvZW1vamkgXCIpKSB7XG5cdFx0XHRsZXQga2V5ID0gcXVlcnkuc2xpY2UoNyk7XG5cblx0XHRcdGlmIChrZXkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0XHQvLyBGaW5kIGV4YWN0IG1hdGNoIGZpcnN0IGlmIHRoZXJlIGlzIG9uZVxuXHRcdFx0XHRjb25zdCBtYXRjaEVtb2ppID0gZW1vamkuZ2V0KGtleSk7XG5cdFx0XHRcdGlmIChtYXRjaEVtb2ppICYmICFtYXRjaEVtb2ppLnN0YXJ0c1dpdGgoXCI6XCIpKSB7XG5cdFx0XHRcdFx0cmVzdWx0cy5wdXNoKGF3YWl0IHRoaXMuY3JlYXRlUmVzdWx0KGtleSwgbWF0Y2hFbW9qaSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRmluZCBhbGwgb3RoZXIgcG90ZW50aWFsIG1hdGNoZXNcblx0XHRcdFx0Y29uc3Qgc2VhcmNoUmVzdWx0ID0gZW1vamkuc2VhcmNoKGtleSk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCByZXN1bHQgb2Ygc2VhcmNoUmVzdWx0KSB7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdC5lbW9qaSAhPT0gbWF0Y2hFbW9qaSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKGF3YWl0IHRoaXMuY3JlYXRlUmVzdWx0KHJlc3VsdC5rZXksIHJlc3VsdC5lbW9qaSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRyZXN1bHRzXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzZWFyY2ggcmVzdWx0LlxuXHQgKiBAcGFyYW0ga2V5IFRoZSBrZXkgZm9yIHRoZSBlbW9qaS5cblx0ICogQHBhcmFtIHN5bWJvbCBUaGUgZW1vamkgc3ltYm9sLlxuXHQgKiBAcmV0dXJucyBUaGUgc2VhcmNoIHJlc3VsdC5cblx0ICovXG5cdHByaXZhdGUgYXN5bmMgY3JlYXRlUmVzdWx0KGtleTogc3RyaW5nLCBzeW1ib2w6IHN0cmluZyk6IFByb21pc2U8SG9tZVNlYXJjaFJlc3VsdD4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRrZXk6IGBlbW9qaS0ke2tleX1gLFxuXHRcdFx0dGl0bGU6IGtleSxcblx0XHRcdGxhYmVsOiBcIkluZm9ybWF0aW9uXCIsXG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX0VNT0pJX1BST1ZJREVSX0NPUFlfRU1PSklfQUNUSU9OLFxuXHRcdFx0XHRcdGhvdGtleTogXCJDbWRPckN0cmwrQ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX0VNT0pJX1BST1ZJREVSX0RFVEFJTFNfQUNUSU9OLFxuXHRcdFx0XHRcdGhvdGtleTogXCJFbnRlclwiXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHByb3ZpZGVySWQ6IEVtb2ppSW50ZWdyYXRpb25Qcm92aWRlci5fUFJPVklERVJfSUQsXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0ZW1vamk6IHN5bWJvbCxcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy8ke2tleX0vYFxuXHRcdFx0fSxcblx0XHRcdHRlbXBsYXRlOiBDTElUZW1wbGF0ZS5DdXN0b20sXG5cdFx0XHR0ZW1wbGF0ZUNvbnRlbnQ6IHtcblx0XHRcdFx0bGF5b3V0OiBhd2FpdCBnZXRFbW9qaVRlbXBsYXRlKHtcblx0XHRcdFx0XHRjb3B5RW1vamlBY3Rpb246IEVtb2ppSW50ZWdyYXRpb25Qcm92aWRlci5fRU1PSklfUFJPVklERVJfQ09QWV9FTU9KSV9BQ1RJT04sXG5cdFx0XHRcdFx0Y29weUtleUFjdGlvbjogRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyLl9FTU9KSV9QUk9WSURFUl9DT1BZX0tFWV9BQ1RJT04sXG5cdFx0XHRcdFx0ZGV0YWlsc0FjdGlvbjogRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyLl9FTU9KSV9QUk9WSURFUl9ERVRBSUxTX0FDVElPTlxuXHRcdFx0XHR9KSxcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdGtleVRpdGxlOiBcIktleVwiLFxuXHRcdFx0XHRcdGNvcHlLZXlUaXRsZTogXCJDb3B5IEtleVwiLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRlbW9qaVRpdGxlOiBcIkVtb2ppXCIsXG5cdFx0XHRcdFx0Y29weUVtb2ppVGl0bGU6IFwiQ29weSBFbW9qaVwiLFxuXHRcdFx0XHRcdGVtb2ppOiBzeW1ib2wsXG5cdFx0XHRcdFx0ZGV0YWlsc1RpdGxlOiBcIkZ1cnRoZXIgRGV0YWlsc1wiXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgeyBCdXR0b25TdHlsZSwgVGVtcGxhdGVGcmFnbWVudCB9IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiwgY3JlYXRlQ29udGFpbmVyLCBjcmVhdGVUZXh0IH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFRoZW1lIH0gZnJvbSBcIi4uLy4uL3RoZW1lc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1vamlUZW1wbGF0ZShhY3Rpb25zOiB7XG5cdGNvcHlFbW9qaUFjdGlvbjogc3RyaW5nO1xuXHRjb3B5S2V5QWN0aW9uOiBzdHJpbmc7XG5cdGRldGFpbHNBY3Rpb246IHN0cmluZztcbn0pOiBQcm9taXNlPFRlbXBsYXRlRnJhZ21lbnQ+IHtcblx0Y29uc3QgdGhlbWUgPSBhd2FpdCBnZXRDdXJyZW50VGhlbWUoKTtcblxuXHRyZXR1cm4gY3JlYXRlQ29udGFpbmVyKFxuXHRcdFwiY29sdW1uXCIsXG5cdFx0W1xuXHRcdFx0YXdhaXQgY3JlYXRlVGV4dChcImtleVRpdGxlXCIsIDEyLCB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLmJyYW5kUHJpbWFyeSwgZm9udFdlaWdodDogXCJib2xkXCIgfSksXG5cdFx0XHRhd2FpdCBjcmVhdGVDb250YWluZXIoXG5cdFx0XHRcdFwicm93XCIsXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRhd2FpdCBjcmVhdGVUZXh0KFwia2V5XCIsIDEyLCB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHREZWZhdWx0LCB3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCIgfSksXG5cdFx0XHRcdFx0YXdhaXQgY3JlYXRlQnV0dG9uKEJ1dHRvblN0eWxlLlNlY29uZGFyeSwgXCJjb3B5S2V5VGl0bGVcIiwgYWN0aW9ucy5jb3B5S2V5QWN0aW9uLCB7XG5cdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMnB4XCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRdLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuXHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0Z2FwOiBcIjEwcHhcIixcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IFwiMTBweFwiXG5cdFx0XHRcdH1cblx0XHRcdCksXG5cblx0XHRcdGF3YWl0IGNyZWF0ZVRleHQoXCJlbW9qaVRpdGxlXCIsIDEyLCB7IGNvbG9yOiB0aGVtZS5wYWxldHRlLmJyYW5kUHJpbWFyeSwgZm9udFdlaWdodDogXCJib2xkXCIgfSksXG5cdFx0XHRhd2FpdCBjcmVhdGVDb250YWluZXIoXG5cdFx0XHRcdFwicm93XCIsXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRhd2FpdCBjcmVhdGVUZXh0KFwiZW1vamlcIiwgMzIsIHsgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dERlZmF1bHQgfSksXG5cdFx0XHRcdFx0YXdhaXQgY3JlYXRlQnV0dG9uKEJ1dHRvblN0eWxlLlNlY29uZGFyeSwgXCJjb3B5RW1vamlUaXRsZVwiLCBhY3Rpb25zLmNvcHlFbW9qaUFjdGlvbiwge1xuXHRcdFx0XHRcdFx0Zm9udFNpemU6IFwiMTJweFwiXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcblx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdGdhcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuXHRcdFx0XHR9XG5cdFx0XHQpLFxuXG5cdFx0XHRhd2FpdCBjcmVhdGVDb250YWluZXIoXG5cdFx0XHRcdFwicm93XCIsXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRhd2FpdCBjcmVhdGVCdXR0b24oQnV0dG9uU3R5bGUuUHJpbWFyeSwgXCJkZXRhaWxzVGl0bGVcIiwgYWN0aW9ucy5kZXRhaWxzQWN0aW9uLCB7XG5cdFx0XHRcdFx0XHRmb250U2l6ZTogXCIxMnB4XCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRdLFxuXHRcdFx0XHR7IGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfVxuXHRcdFx0KVxuXHRcdF0sXG5cdFx0e1xuXHRcdFx0cGFkZGluZzogXCIxMHB4XCJcblx0XHR9XG5cdCk7XG59XG4iLCJpbXBvcnQgeyBDdXN0b21TZXR0aW5ncyB9IGZyb20gXCIuL3NoYXBlc1wiO1xuXG5sZXQgc2V0dGluZ3M6IEN1c3RvbVNldHRpbmdzO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDb25maWd1cmVkU2V0dGluZ3MoKTogUHJvbWlzZTxDdXN0b21TZXR0aW5ncz4ge1xuXHRjb25zdCBhcHAgPSBhd2FpdCBmaW4uQXBwbGljYXRpb24uZ2V0Q3VycmVudCgpO1xuXHRjb25zdCBtYW5pZmVzdDogT3BlbkZpbi5NYW5pZmVzdCAmIHsgY3VzdG9tU2V0dGluZ3M/OiBDdXN0b21TZXR0aW5ncyB9ID0gYXdhaXQgYXBwLmdldE1hbmlmZXN0KCk7XG5cblx0aWYgKG1hbmlmZXN0LmN1c3RvbVNldHRpbmdzICE9PSB1bmRlZmluZWQpIHtcblx0XHRzZXR0aW5ncyA9IG1hbmlmZXN0LmN1c3RvbVNldHRpbmdzO1xuXHR9IGVsc2Uge1xuXHRcdHNldHRpbmdzID0ge307XG5cdH1cblxuXHRyZXR1cm4gc2V0dGluZ3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXR0aW5ncygpOiBQcm9taXNlPEN1c3RvbVNldHRpbmdzPiB7XG5cdGlmIChzZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0c2V0dGluZ3MgPSBhd2FpdCBnZXRDb25maWd1cmVkU2V0dGluZ3MoKTtcblx0fVxuXHRyZXR1cm4gc2V0dGluZ3M7XG59XG4iLCJpbXBvcnQge1xuXHRCdXR0b25TdHlsZSxcblx0QnV0dG9uVGVtcGxhdGVGcmFnbWVudCxcblx0SW1hZ2VUZW1wbGF0ZUZyYWdtZW50LFxuXHRQbGFpbkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnQsXG5cdFRlbXBsYXRlRnJhZ21lbnQsXG5cdFRlbXBsYXRlRnJhZ21lbnRUeXBlcyxcblx0VGV4dFRlbXBsYXRlRnJhZ21lbnRcbn0gZnJvbSBcIkBvcGVuZmluL3dvcmtzcGFjZVwiO1xuaW1wb3J0ICogYXMgQ1NTIGZyb20gXCJjc3N0eXBlXCI7XG5pbXBvcnQgeyBnZXRDdXJyZW50VGhlbWUgfSBmcm9tIFwiLi90aGVtZXNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUhlbHAoXG5cdHRpdGxlOiBzdHJpbmcsXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdbXSxcblx0ZXhhbXBsZXM6IHN0cmluZ1tdXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4pOiBQcm9taXNlPHsgbGF5b3V0OiBQbGFpbkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnQ7IGRhdGE6IGFueSB9PiB7XG5cdGNvbnN0IHRoZW1lID0gYXdhaXQgZ2V0Q3VycmVudFRoZW1lKCk7XG5cdGNvbnN0IGFkZGl0aW9uYWxEYXRhID0ge307XG5cdGNvbnN0IGZyYWdtZW50czogVGVtcGxhdGVGcmFnbWVudFtdID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZGVzY3JpcHRpb24ubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBkZXNjcmlwdGlvbktleSA9IGBkZXNjLSR7aX1gO1xuXHRcdGFkZGl0aW9uYWxEYXRhW2Rlc2NyaXB0aW9uS2V5XSA9IGRlc2NyaXB0aW9uW2ldO1xuXHRcdGZyYWdtZW50cy5wdXNoKFxuXHRcdFx0YXdhaXQgY3JlYXRlVGV4dChkZXNjcmlwdGlvbktleSwgMTIsIHtcblx0XHRcdFx0cGFkZGluZzogXCI2cHggMHB4XCJcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXHRjb25zdCBleGFtcGxlRnJhZ21lbnRzOiBUZW1wbGF0ZUZyYWdtZW50W10gPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBleGFtcGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGV4YW1wbGVLZXkgPSBgbGluZS0ke2l9YDtcblx0XHRhZGRpdGlvbmFsRGF0YVtleGFtcGxlS2V5XSA9IGV4YW1wbGVzW2ldO1xuXHRcdGV4YW1wbGVGcmFnbWVudHMucHVzaChcblx0XHRcdGF3YWl0IGNyZWF0ZVRleHQoZXhhbXBsZUtleSwgMTIsIHtcblx0XHRcdFx0Zm9udEZhbWlseTogXCJtb25vc3BhY2VcIlxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cdGlmIChleGFtcGxlRnJhZ21lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRmcmFnbWVudHMucHVzaChcblx0XHRcdGF3YWl0IGNyZWF0ZUNvbnRhaW5lcihcImNvbHVtblwiLCBleGFtcGxlRnJhZ21lbnRzLCB7XG5cdFx0XHRcdHBhZGRpbmc6IFwiMTBweFwiLFxuXHRcdFx0XHRtYXJnaW5Ub3A6IFwiNnB4XCIsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kNSxcblx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUuaW5wdXRDb2xvcixcblx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjVweFwiXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRsYXlvdXQ6IGF3YWl0IGNyZWF0ZUNvbnRhaW5lcihcImNvbHVtblwiLCBbYXdhaXQgY3JlYXRlVGl0bGUoXCJ0aXRsZVwiKSwgLi4uZnJhZ21lbnRzXSwge1xuXHRcdFx0cGFkZGluZzogXCIxMHB4XCJcblx0XHR9KSxcblx0XHRkYXRhOiB7XG5cdFx0XHR0aXRsZSxcblx0XHRcdC4uLmFkZGl0aW9uYWxEYXRhXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKFxuXHRjb250YWluZXJUeXBlOiBcImNvbHVtblwiIHwgXCJyb3dcIixcblx0Y2hpbGRyZW46IFRlbXBsYXRlRnJhZ21lbnRbXSxcblx0c3R5bGU/OiBDU1MuUHJvcGVydGllc1xuKTogUHJvbWlzZTxQbGFpbkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnQ+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUZW1wbGF0ZUZyYWdtZW50VHlwZXMuQ29udGFpbmVyLFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdGZsZXhEaXJlY3Rpb246IGNvbnRhaW5lclR5cGUsXG5cdFx0XHQuLi5zdHlsZVxuXHRcdH0sXG5cdFx0Y2hpbGRyZW5cblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKFxuXHRkYXRhS2V5OiBzdHJpbmcsXG5cdGZvbnRTaXplOiBudW1iZXIgPSAxNixcblx0Zm9udFdlaWdodDogc3RyaW5nID0gXCJib2xkXCIsXG5cdHN0eWxlPzogQ1NTLlByb3BlcnRpZXNcbik6IFByb21pc2U8VGV4dFRlbXBsYXRlRnJhZ21lbnQ+IHtcblx0Y29uc3QgdGhlbWUgPSBhd2FpdCBnZXRDdXJyZW50VGhlbWUoKTtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUZW1wbGF0ZUZyYWdtZW50VHlwZXMuVGV4dCxcblx0XHRkYXRhS2V5LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS5icmFuZFByaW1hcnksXG5cdFx0XHRmb250U2l6ZTogYCR7Zm9udFNpemUgPz8gMTZ9cHhgLFxuXHRcdFx0Zm9udFdlaWdodCxcblx0XHRcdC4uLnN0eWxlXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGV4dChcblx0ZGF0YUtleTogc3RyaW5nLFxuXHRmb250U2l6ZTogbnVtYmVyID0gMTQsXG5cdHN0eWxlPzogQ1NTLlByb3BlcnRpZXNcbik6IFByb21pc2U8VGV4dFRlbXBsYXRlRnJhZ21lbnQ+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUZW1wbGF0ZUZyYWdtZW50VHlwZXMuVGV4dCxcblx0XHRkYXRhS2V5LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRmb250U2l6ZTogYCR7Zm9udFNpemUgPz8gMTR9cHhgLFxuXHRcdFx0Li4uc3R5bGVcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbWFnZShcblx0ZGF0YUtleTogc3RyaW5nLFxuXHRhbHRlcm5hdGl2ZVRleHQ6IHN0cmluZyxcblx0c3R5bGU/OiBDU1MuUHJvcGVydGllc1xuKTogUHJvbWlzZTxJbWFnZVRlbXBsYXRlRnJhZ21lbnQ+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUZW1wbGF0ZUZyYWdtZW50VHlwZXMuSW1hZ2UsXG5cdFx0ZGF0YUtleSxcblx0XHRhbHRlcm5hdGl2ZVRleHQsXG5cdFx0c3R5bGU6IHtcblx0XHRcdC4uLnN0eWxlXG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKFxuXHRidXR0b25TdHlsZTogQnV0dG9uU3R5bGUsXG5cdHRpdGxlS2V5OiBzdHJpbmcsXG5cdGFjdGlvbjogc3RyaW5nLFxuXHRzdHlsZT86IENTUy5Qcm9wZXJ0aWVzXG4pOiBQcm9taXNlPEJ1dHRvblRlbXBsYXRlRnJhZ21lbnQ+IHtcblx0Y29uc3QgdGhlbWUgPSBhd2FpdCBnZXRDdXJyZW50VGhlbWUoKTtcblx0Y29uc3QgYnV0dG9uT3B0aW9ucyA9XG5cdFx0YnV0dG9uU3R5bGUgPT09IEJ1dHRvblN0eWxlLlNlY29uZGFyeVxuXHRcdFx0PyB7XG5cdFx0XHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5pbnB1dENvbG9yfWBcblx0XHRcdCAgfVxuXHRcdFx0OiB7fTtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBUZW1wbGF0ZUZyYWdtZW50VHlwZXMuQnV0dG9uLFxuXHRcdGJ1dHRvblN0eWxlLFxuXHRcdGNoaWxkcmVuOiBbYXdhaXQgY3JlYXRlVGV4dCh0aXRsZUtleSwgMTIpXSxcblx0XHRhY3Rpb24sXG5cdFx0c3R5bGU6IHtcblx0XHRcdC4uLmJ1dHRvbk9wdGlvbnMsXG5cdFx0XHQuLi5zdHlsZVxuXHRcdH1cblx0fTtcbn1cbiIsImltcG9ydCB7IEN1c3RvbVRoZW1lcyB9IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2UtcGxhdGZvcm1cIjtcbmltcG9ydCB7IEN1c3RvbVBhbGV0dGVTZXQsIEN1c3RvbVRoZW1lT3B0aW9ucyB9IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2UtcGxhdGZvcm0vY29tbW9uL3NyYy9hcGkvdGhlbWluZ1wiO1xuaW1wb3J0IHsgZ2V0U2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuXG5jb25zdCBERUZBVUxUX1BBTEVUVEVTID0ge1xuXHRsaWdodDoge1xuXHRcdGJyYW5kUHJpbWFyeTogXCIjNTA0Q0ZGXCIsXG5cdFx0YnJhbmRTZWNvbmRhcnk6IFwiIzFFMUYyM1wiLFxuXHRcdGJhY2tncm91bmRQcmltYXJ5OiBcIiNGQUZCRkVcIixcblx0XHRiYWNrZ3JvdW5kMTogXCIjRkZGRkZGXCIsXG5cdFx0YmFja2dyb3VuZDI6IFwiI0ZBRkJGRVwiLFxuXHRcdGJhY2tncm91bmQzOiBcIiNGM0Y1RjhcIixcblx0XHRiYWNrZ3JvdW5kNDogXCIjRUNFRUYxXCIsXG5cdFx0YmFja2dyb3VuZDU6IFwiI0REREZFNFwiLFxuXHRcdGJhY2tncm91bmQ2OiBcIiNDOUNCRDJcIixcblx0XHRzdGF0dXNTdWNjZXNzOiBcIiMzNUM3NTlcIixcblx0XHRzdGF0dXNXYXJuaW5nOiBcIiNGNDhGMDBcIixcblx0XHRzdGF0dXNDcml0aWNhbDogXCIjQkUxRDFGXCIsXG5cdFx0c3RhdHVzQWN0aXZlOiBcIiMwNDk4RkJcIixcblx0XHRpbnB1dEJhY2tncm91bmQ6IFwiI0VDRUVGMVwiLFxuXHRcdGlucHV0Q29sb3I6IFwiIzFFMUYyM1wiLFxuXHRcdGlucHV0UGxhY2Vob2xkZXI6IFwiIzM4M0E0MFwiLFxuXHRcdGlucHV0RGlzYWJsZWQ6IFwiIzdEODA4QVwiLFxuXHRcdGlucHV0Rm9jdXNlZDogXCIjQzlDQkQyXCIsXG5cdFx0dGV4dERlZmF1bHQ6IFwiIzFFMUYyM1wiLFxuXHRcdHRleHRIZWxwOiBcIiMyRjMxMzZcIixcblx0XHR0ZXh0SW5hY3RpdmU6IFwiIzdEODA4QVwiXG5cdH0sXG5cdGRhcms6IHtcblx0XHRicmFuZFByaW1hcnk6IFwiIzUwNENGRlwiLFxuXHRcdGJyYW5kU2Vjb25kYXJ5OiBcIiMzODNBNDBcIixcblx0XHRiYWNrZ3JvdW5kUHJpbWFyeTogXCIjMUUxRjIzXCIsXG5cdFx0YmFja2dyb3VuZDE6IFwiIzExMTIxNFwiLFxuXHRcdGJhY2tncm91bmQyOiBcIiMxRTFGMjNcIixcblx0XHRiYWNrZ3JvdW5kMzogXCIjMjQyNjJCXCIsXG5cdFx0YmFja2dyb3VuZDQ6IFwiIzJGMzEzNlwiLFxuXHRcdGJhY2tncm91bmQ1OiBcIiMzODNBNDBcIixcblx0XHRiYWNrZ3JvdW5kNjogXCIjNTM1NjVGXCIsXG5cdFx0c3RhdHVzU3VjY2VzczogXCIjMzVDNzU5XCIsXG5cdFx0c3RhdHVzV2FybmluZzogXCIjRjQ4RjAwXCIsXG5cdFx0c3RhdHVzQ3JpdGljYWw6IFwiI0JFMUQxRlwiLFxuXHRcdHN0YXR1c0FjdGl2ZTogXCIjMDQ5OEZCXCIsXG5cdFx0aW5wdXRCYWNrZ3JvdW5kOiBcIiM1MzU2NUZcIixcblx0XHRpbnB1dENvbG9yOiBcIiNGRkZGRkZcIixcblx0XHRpbnB1dFBsYWNlaG9sZGVyOiBcIiNDOUNCRDJcIixcblx0XHRpbnB1dERpc2FibGVkOiBcIiM3RDgwOEFcIixcblx0XHRpbnB1dEZvY3VzZWQ6IFwiI0M5Q0JEMlwiLFxuXHRcdHRleHREZWZhdWx0OiBcIiNGRkZGRkZcIixcblx0XHR0ZXh0SGVscDogXCIjQzlDQkQyXCIsXG5cdFx0dGV4dEluYWN0aXZlOiBcIiM3RDgwOEFcIlxuXHR9XG59O1xuXG5sZXQgdmFsaWRhdGVkVGhlbWVzOiBDdXN0b21UaGVtZXM7XG5cbmZ1bmN0aW9uIGdldFN5c3RlbVByZWZlcnJlZENvbG9yU2NoZW1lKCk6IFwibGlnaHRcIiB8IFwiZGFya1wiIHtcblx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhPy4oXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcblx0XHRyZXR1cm4gXCJkYXJrXCI7XG5cdH1cblx0cmV0dXJuIFwibGlnaHRcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRUaGVtZSgpOiBQcm9taXNlPEN1c3RvbVRoZW1lT3B0aW9ucz4ge1xuXHRjb25zdCB0aGVtZXMgPSBhd2FpdCBnZXRUaGVtZXMoKTtcblx0aWYgKHRoZW1lcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bGFiZWw6IFwiZGVmYXVsdFwiLFxuXHRcdFx0cGFsZXR0ZTogREVGQVVMVF9QQUxFVFRFUy5kYXJrXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gdGhlbWVzWzBdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGhlbWVzKCk6IFByb21pc2U8Q3VzdG9tVGhlbWVzPiB7XG5cdGlmICghdmFsaWRhdGVkVGhlbWVzKSB7XG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBnZXRTZXR0aW5ncygpO1xuXHRcdHZhbGlkYXRlZFRoZW1lcyA9IHZhbGlkYXRlVGhlbWVzKHNldHRpbmdzPy50aGVtZVByb3ZpZGVyPy50aGVtZXMpO1xuXHR9XG5cdHJldHVybiB2YWxpZGF0ZWRUaGVtZXMuc2xpY2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGhlbWVzKHRoZW1lczogQ3VzdG9tVGhlbWVzKTogQ3VzdG9tVGhlbWVzIHtcblx0Y29uc3QgY3VzdG9tVGhlbWVzOiBDdXN0b21UaGVtZXMgPSBbXTtcblxuXHRpZiAoQXJyYXkuaXNBcnJheSh0aGVtZXMpKSB7XG5cdFx0Y29uc3QgcHJlZmVycmVkQ29sb3JTY2hlbWUgPSBnZXRTeXN0ZW1QcmVmZXJyZWRDb2xvclNjaGVtZSgpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGVtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHRoZW1lVG9WYWxpZGF0ZSA9IHRoZW1lc1tpXTtcblx0XHRcdGNvbnN0IHBhbGV0dGUgPSB2YWxpZGF0ZVBhbGV0dGUodGhlbWVUb1ZhbGlkYXRlLnBhbGV0dGUsIHRoZW1lVG9WYWxpZGF0ZS5sYWJlbCk7XG5cdFx0XHRpZiAocGFsZXR0ZSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGVtZVRvVmFsaWRhdGUucGFsZXR0ZSA9IHBhbGV0dGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBkb24ndCBwYXNzIGFuIGVtcHR5IG9iamVjdCBhcyB0aGVyZSBhcmUgbm8gdGhlbWUgcHJvcGVydGllc1xuXHRcdFx0XHR0aGVtZVRvVmFsaWRhdGUucGFsZXR0ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICh0aGVtZVRvVmFsaWRhdGUubGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gcHJlZmVycmVkQ29sb3JTY2hlbWUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdFx0YEZvdW5kIGEgdGhlbWUgdGhhdCBtYXRjaGVzIHN5c3RlbSBjb2xvciBzY2hlbWUgcHJlZmVyZW5jZXMgYW5kIG1ha2luZyBpdCB0aGUgZGVmYXVsdCB0aGVtZTogJHtwcmVmZXJyZWRDb2xvclNjaGVtZX1gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN1c3RvbVRoZW1lcy51bnNoaWZ0KHRoZW1lVG9WYWxpZGF0ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdXN0b21UaGVtZXMucHVzaCh0aGVtZVRvVmFsaWRhdGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXN0b21UaGVtZXM7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFsZXR0ZShcblx0dGhlbWVQYWxldHRlOiBDdXN0b21QYWxldHRlU2V0IHwgdW5kZWZpbmVkLFxuXHR0aGVtZUxhYmVsOiBzdHJpbmdcbik6IEN1c3RvbVBhbGV0dGVTZXQgfCBudWxsIHtcblx0aWYgKCF0aGVtZVBhbGV0dGUpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGVtZVBhbGV0dGUpO1xuXHRpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHBhbGV0dGU6IEN1c3RvbVBhbGV0dGVTZXQgPSB7XG5cdFx0Li4uREVGQVVMVF9QQUxFVFRFUy5kYXJrXG5cdH07XG5cblx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuXHRcdGlmIChcblx0XHRcdHRoZW1lUGFsZXR0ZVtrZXldICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdHRoZW1lUGFsZXR0ZVtrZXldICE9PSBudWxsICYmXG5cdFx0XHR0aGVtZVBhbGV0dGVba2V5XS50cmltKCkubGVuZ3RoID4gMFxuXHRcdCkge1xuXHRcdFx0cGFsZXR0ZVtrZXldID0gdGhlbWVQYWxldHRlW2tleV07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgYnJhbmRQcmltYXJ5S2V5ID0gXCJicmFuZFByaW1hcnlcIjtcblx0Y29uc3QgYnJhbmRTZWNvbmRhcnlLZXkgPSBcImJyYW5kU2Vjb25kYXJ5XCI7XG5cdGNvbnN0IGJhY2tncm91bmRQcmltYXJ5S2V5ID0gXCJiYWNrZ3JvdW5kUHJpbWFyeVwiO1xuXG5cdGlmICghdGhlbWVQYWxldHRlW2JyYW5kUHJpbWFyeUtleV0pIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRgVGhlbWU6ICR7dGhlbWVMYWJlbH0gOiAke2JyYW5kUHJpbWFyeUtleX0gbm90IHNwZWNpZmllZCAoaXQgaXMgcmVxdWlyZWQgaWYgc3BlY2lmeWluZyBvdGhlciB0aGVtZSBwYWxldHRlIHNldHRpbmdzKS4gUHJvdmlkaW5nIGRlZmF1bHQgb2Y6ICR7REVGQVVMVF9QQUxFVFRFUy5kYXJrLmJyYW5kUHJpbWFyeX1gXG5cdFx0KTtcblx0fVxuXG5cdGlmICghdGhlbWVQYWxldHRlW2JyYW5kU2Vjb25kYXJ5S2V5XSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdGBUaGVtZTogJHt0aGVtZUxhYmVsfSA6ICR7YnJhbmRTZWNvbmRhcnlLZXl9IG5vdCBzcGVjaWZpZWQgKGl0IGlzIHJlcXVpcmVkIGlmIHNwZWNpZnlpbmcgb3RoZXIgdGhlbWUgcGFsZXR0ZSBzZXR0aW5ncykuIFByb3ZpZGluZyBkZWZhdWx0IG9mOiAke0RFRkFVTFRfUEFMRVRURVMuZGFyay5icmFuZFNlY29uZGFyeX1gXG5cdFx0KTtcblx0fVxuXG5cdGlmICghdGhlbWVQYWxldHRlW2JhY2tncm91bmRQcmltYXJ5S2V5XSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdGBUaGVtZTogJHt0aGVtZUxhYmVsfSA6ICR7YmFja2dyb3VuZFByaW1hcnlLZXl9IG5vdCBzcGVjaWZpZWQgKGl0IGlzIHJlcXVpcmVkIGlmIHNwZWNpZnlpbmcgb3RoZXIgdGhlbWUgcGFsZXR0ZSBzZXR0aW5ncykuIFByb3ZpZGluZyBkZWZhdWx0IG9mOiAke0RFRkFVTFRfUEFMRVRURVMuZGFyay5icmFuZFByaW1hcnl9YFxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gcGFsZXR0ZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsImltcG9ydCB7IEVtb2ppSW50ZWdyYXRpb25Qcm92aWRlciB9IGZyb20gXCIuL2ludGVncmF0aW9uLXByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBpbnRlZ3JhdGlvbiA9IG5ldyBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==