/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='ionic']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(resourcesUrl){const t=window.Ionic=window.Ionic||{};Object.defineProperty(t,"queue",{get:()=>Context.queue});const e=Object.assign({},function(){const t=window.sessionStorage.getItem("ionic-persist-config");return t?JSON.parse(t):{}}(),{persistConfig:!1},t.config,function(){const t={};return window.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,e])=>[decodeURIComponent(t),decodeURIComponent(e)]).filter(([t])=>(function(e,n){return"ionic:"===t.substr(0,"ionic:".length)})()).map(([t,e])=>[t.slice("ionic:".length),e]).forEach(([e,n])=>{t[e]=n}),t}()),n=t.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,e){const n=this.m.get(t);return void 0!==n?n:e}getBoolean(t,e=!1){const n=this.m.get(t);return void 0===n?e:"string"==typeof n?"true"===n:!!n}getNumber(t,e){const n=parseFloat(this.m.get(t));return isNaN(n)?void 0!==e?e:NaN:n}set(t,e){this.m.set(t,e)}}(e);n.getBoolean("persistConfig")&&function(t){window.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}(e);const o=document.documentElement,i=n.get("mode",o.getAttribute("mode")||(function(t,e){return/iPad|iPhone|iPod/i.test(t.navigator.userAgent)}(window)?"ios":"md"));t.mode=Context.mode=i,n.set("mode",i),o.setAttribute("mode",i),o.classList.add(i);
})(resourcesUrl);
(function(t,n,e,o){"use strict";function i(t,n){return"sc-"+t.t+(n&&n!==E?"-"+n:"")}function c(t,n){return t+(n?"-h":"-s")}function f(t){return{n:t[0],e:t[1],o:!!t[2],i:!!t[3],c:!!t[4]}}function r(t,n){if(T(n)&&"object"!=typeof n&&"function"!=typeof n){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n);if(t===String||2===t)return n.toString()}return n}function s(t,n,e,o){const i=t.f.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.f.delete(n))}function l(t,n){let e,o,i=null,c=!1,f=!1;for(var r=arguments.length;r-- >2;)q.push(arguments[r]);for(;q.length>0;){let n=q.pop();if(n&&void 0!==n.pop)for(r=n.length;r--;)q.push(n[r]);else"boolean"==typeof n&&(n=null),(f="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(f=!1)),f&&c?i[i.length-1].vtext+=n:null===i?i=[f?{vtext:n}:n]:i.push(f?{vtext:n}:n),c=f}if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(r in n.class)n.class[r]&&q.push(r);n.class=q.join(" "),q.length=0}null!=n.key&&(e=n.key),null!=n.name&&(o=n.name)}return"function"==typeof t?t(n,i||[],B):{vtag:t,vchildren:i,vtext:void 0,vattrs:n,vkey:e,vname:o,r:void 0,s:!1}}function u(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function a(t,n){t.l.has(n)||(t.l.set(n,!0),t.u?t.queue.write(()=>p(t,n)):t.queue.tick(()=>p(t,n)))}function p(t,n,e,o,i,c){if(t.l.delete(n),!t.a.has(n)){if(o=t.p.get(n),e=!o){if((i=t.f.get(n))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{p(t,n)}),void(i.$onRender=i["s-rc"]);o=function f(t,n,e,o,i,c,r){try{o=new(i=t.v(n).d),function s(t,n,e,o,i,c,f){for(f in t.m.set(o,e),t.b.has(e)||t.b.set(e,{}),(c=Object.assign({color:{type:String}},n.properties)).mode={type:String},c)v(t,c[f],e,o,f,i)}(t,i,n,o,e),function l(t,n,e){if(n){const o=t.m.get(e);n.forEach(n=>{e[n.method]={emit:e=>{t.y(o,n.name,{bubbles:n.bubbles,composed:n.composed,cancelable:n.cancelable,detail:e})}}})}}(t,i.events,o);try{if(c=t.g.get(n)){for(r=0;r<c.length;r+=2)o[c[r]](c[r+1]);t.g.delete(n)}}catch(e){t.w(e,2,n)}}catch(e){o={},t.w(e,7,n,!0)}return t.p.set(n,o),o}(t,n,t.M.get(n));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(e){t.w(e,3,n)}}else try{o.componentWillUpdate&&(c=o.componentWillUpdate())}catch(e){t.w(e,5,n)}c&&c.then?c.then(()=>d(t,n,o,e)):d(t,n,o,e)}}function d(t,n,e,o){(function i(t,n,e,o){try{const i=n.d.host,f=n.d.encapsulation,r="shadow"===f&&t.C.k;let s,u;if(s=function i(t,n,e){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((e=e||{})[o]=n[o])}),e}(n.d.properties,o),u=r?e.shadowRoot:e,!e["s-rn"]){t.j(t,t.C,n,e);const i=e["s-sc"];i&&(t.C.x(e,c(i,!0)),o.render||t.C.x(e,c(i)))}if(o.render||o.hostData||i||s){t.W=!0;const n=o.render&&o.render();let i;i=o.hostData&&o.hostData(),s&&(i=i?Object.assign(i,s):s),t.W=!1;const c=t.O.get(e)||{};c.r=u;const a=l(null,i,n);a.s=!0,t.O.set(e,t.render(e,c,a,r,f))}e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.W=!1,t.w(n,8,e,!0)}})(t,t.v(n),n,e);try{o?n["s-init"]():(e.componentDidUpdate&&e.componentDidUpdate(),C(t.O.get(n)))}catch(e){t.w(e,6,n,!0)}}function v(t,n,e,o,i,c,f,s){if(n.type||n.state){const l=t.b.get(e);n.state||(!n.attr||void 0!==l[i]&&""!==l[i]||(f=c&&c.N)&&T(s=f[n.attr])&&(l[i]=r(n.type,s)),e.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=r(n.type,e[i])),"mode"!==i&&delete e[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),n.watchCallbacks&&(l[D+i]=n.watchCallbacks.slice()),h(o,i,function l(n){return(n=t.b.get(t.m.get(this)))&&n[i]},function u(e,o){(o=t.m.get(this))&&(n.state||n.mutable)&&m(t,o,i,e)})}else if(n.elementRef)b(o,i,e);else if(n.method)b(e,i,o[i].bind(o));else if(n.context){const c=t.S(n.context);void 0!==c&&b(o,i,c.A&&c.A(e)||c)}else n.connect&&b(o,i,t.T(n.connect))}function m(t,n,e,o,i,c,f){(i=t.b.get(n))||t.b.set(n,i={});const r=i[e];if(o!==r&&(i[e]=o,c=t.p.get(n))){if(f=i[D+e])for(let t=0;t<f.length;t++)try{c[f[t]].call(c,o,r,e)}catch(t){}!t.W&&n["s-rn"]&&a(t,n)}}function b(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}function h(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function y(t,n,e,o="boolean"==typeof e){const i=n!==(n=n.replace(/^xlink\:?/,""));null==e||o&&(!e||"false"===e)?i?t.removeAttributeNS(P,R(n)):t.removeAttribute(n):"function"!=typeof e&&(e=o?"":e.toString(),i?t.setAttributeNS(P,R(n),e):t.setAttribute(n,e))}function g(t,n,e,o,i,c,f){if("class"!==e||c)if("style"===e){for(const t in o)i&&null!=i[t]||(/-/.test(t)?n.style.R(t):n.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?n.style.setProperty(t,i[t]):n.style[t]=i[t])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!c&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.v(n);o&&o.L&&o.L[e]?(M(n,e,i),f&&o.L[e].q&&y(n,o.L[e].B,i,3===o.L[e].D)):"ref"!==e&&(M(n,e,null==i?"":i),null!=i&&!1!==i||t.C.P(n,e))}else null!=i&&"key"!==e?y(n,e,i):(c||t.C.F(n,e)&&(null==i||!1===i))&&t.C.P(n,e);else e=R(e)in n?R(e.substring(2)):R(e[2])+e.substring(3),i?i!==o&&t.C.H(n,e,i):t.C.I(n,e);else if(o!==i){const t=w(o),e=w(i),c=t.filter(t=>!e.includes(t)),f=w(n.className).filter(t=>!c.includes(t)),r=e.filter(n=>!t.includes(n)&&!f.includes(n));f.push(...r),n.className=f.join(" ")}}function w(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function M(t,n,e){try{t[n]=e}catch(t){}}function $(t,n,e,o,i){const c=11===e.r.nodeType&&e.r.host?e.r.host:e.r,f=n&&n.vattrs||S,r=e.vattrs||S;for(i in f)r&&null!=r[i]||null==f[i]||g(t,c,i,f[i],void 0,o,e.s);for(i in r)i in f&&r[i]===("value"===i||"checked"===i?c[i]:f[i])||g(t,c,i,f[i],r[i],o,e.s)}function k(t,n){function e(i,c,f,r,s,l,p,b,h){if(b=c.vchildren[f],u||(d=!0,"slot"===b.vtag&&(a&&n.x(r,a+"-s"),b.vchildren?b.U=!0:b.Q=!0)),T(b.vtext))b.r=n.Z(b.vtext);else if(b.Q)b.r=n.Z("");else{if(l=b.r=F||"svg"===b.vtag?n.z("http://www.w3.org/2000/svg",b.vtag):n.G(b.U?"slot-fb":b.vtag),F="svg"===b.vtag||"foreignObject"!==b.vtag&&F,$(t,null,b,F),T(a)&&l["s-si"]!==a&&n.x(l,l["s-si"]=a),b.vchildren)for(s=0;s<b.vchildren.length;++s)(p=e(i,b,s,l))&&n.J(l,p);"svg"===b.vtag&&(F=!1)}return b.r["s-hn"]=v,(b.U||b.Q)&&(b.r["s-sr"]=!0,b.r["s-cr"]=m,b.r["s-sn"]=b.vname||"",(h=i&&i.vchildren&&i.vchildren[f])&&h.vtag===b.vtag&&i.r&&o(i.r)),b.r}function o(e,i,c,f){t.K=!0;const l=n.V(e);for(c=l.length-1;c>=0;c--)(f=l[c])["s-hn"]!==v&&f["s-ol"]&&(n.X(f),n.Y(s(f),f,r(f)),n.X(f["s-ol"]),f["s-ol"]=null,d=!0),i&&o(f,i);t.K=!1}function i(t,o,i,c,f,s,l,u){const a=t["s-cr"]||t.$defaultHolder;for((l=a&&n._(a)||t).shadowRoot&&n.tt(l)===v&&(l=l.shadowRoot);f<=s;++f)c[f]&&(u=T(c[f].vtext)?n.Z(c[f].vtext):e(null,i,f,t))&&(c[f].r=u,n.Y(l,u,r(o)))}function c(t,e,i,c){for(;e<=i;++e)T(t[e])&&(c=t[e].r,p=!0,c["s-ol"]?n.X(c["s-ol"]):o(c,!0),n.X(c))}function f(t,n){return t.vtag===n.vtag&&t.vkey===n.vkey&&("slot"!==t.vtag||t.vname===n.vname)}function r(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return n._(t["s-ol"]?t["s-ol"]:t)}const l=[];let u,a,p,d,v,m;return function b(h,y,g,w,M,k,C,j,x,W,O,N){if(v=n.tt(h),m=h["s-cr"],u=w,a=h["s-sc"],d=p=!1,function l(u,a,p){const d=a.r=u.r,v=u.vchildren,m=a.vchildren;F=a.r&&T(n.nt(a.r))&&void 0!==a.r.ownerSVGElement,F="svg"===a.vtag||"foreignObject"!==a.vtag&&F,T(a.vtext)?(p=d["s-cr"]||d.$defaultHolder)?n.et(n._(p),a.vtext):u.vtext!==a.vtext&&n.et(d,a.vtext):("slot"!==a.vtag&&$(t,u,a,F),T(v)&&T(m)?function b(t,u,a,p,d,v,m,h){let y=0,g=0,w=u.length-1,M=u[0],$=u[w],k=p.length-1,C=p[0],j=p[k];for(;y<=w&&g<=k;)if(null==M)M=u[++y];else if(null==$)$=u[--w];else if(null==C)C=p[++g];else if(null==j)j=p[--k];else if(f(M,C))l(M,C),M=u[++y],C=p[++g];else if(f($,j))l($,j),$=u[--w],j=p[--k];else if(f(M,j))"slot"!==M.vtag&&"slot"!==j.vtag||o(n._(M.r)),l(M,j),n.Y(t,M.r,n.ot($.r)),M=u[++y],j=p[--k];else if(f($,C))"slot"!==M.vtag&&"slot"!==j.vtag||o(n._($.r)),l($,C),n.Y(t,$.r,M.r),$=u[--w],C=p[++g];else{for(d=null,v=y;v<=w;++v)if(u[v]&&T(u[v].vkey)&&u[v].vkey===C.vkey){d=v;break}T(d)?((h=u[d]).vtag!==C.vtag?m=e(u&&u[g],a,d,t):(l(h,C),u[d]=void 0,m=h.r),C=p[++g]):(m=e(u&&u[g],a,g,t),C=p[++g]),m&&n.Y(s(M.r),m,r(M.r))}y>w?i(t,null==p[k+1]?null:p[k+1].r,a,p,g,k):g>k&&c(u,y,w)}(d,v,a,m):T(m)?(T(u.vtext)&&n.et(d,""),i(d,null,a,m,0,m.length-1)):T(v)&&c(v,0,v.length-1)),F&&"svg"===a.vtag&&(F=!1)}(y,g),d){for(function t(e,o,i,c,f,r,s,u,a,d){for(f=0,r=(o=n.V(e)).length;f<r;f++){if((i=o[f])["s-sr"]&&(c=i["s-cr"]))for(u=n.V(n._(c)),a=i["s-sn"],s=u.length-1;s>=0;s--)(c=u[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(d=n.it(c))||8===d)&&""===a||1===d&&null===n.ct(c,"slot")&&""===a||1===d&&n.ct(c,"slot")===a)&&(l.some(t=>t.ft===c)||(p=!0,c["s-sn"]=a,l.push({rt:i,ft:c})));1===n.it(i)&&t(i)}}(g.r),C=0;C<l.length;C++)(j=l[C]).ft["s-ol"]||((x=n.Z(""))["s-nr"]=j.ft,n.Y(n._(j.ft),j.ft["s-ol"]=x,j.ft));for(t.K=!0,C=0;C<l.length;C++){for(j=l[C],O=n._(j.rt),N=n.ot(j.rt),x=j.ft["s-ol"];x=n.st(x);)if((W=x["s-nr"])&&W&&W["s-sn"]===j.ft["s-sn"]&&O===n._(W)&&(W=n.ot(W))&&W&&!W["s-nr"]){N=W;break}(!N&&O!==n._(j.ft)||n.ot(j.ft)!==N)&&j.ft!==N&&(n.X(j.ft),n.Y(O,j.ft,N))}t.K=!1}return p&&function t(e,o,i,c,f,r,s,l){for(c=0,f=(i=n.V(e)).length;c<f;c++)if(o=i[c],1===n.it(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,r=0;r<f;r++)if(i[r]["s-hn"]!==o["s-hn"])if(l=n.it(i[r]),""!==s){if(1===l&&s===n.ct(i[r],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==n.lt(i[r]).trim()){o.hidden=!0;break}t(o)}}(g.r),l.length=0,g}}function C(t,n){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(n?null:t.r),t.vchildren&&t.vchildren.forEach(t=>{C(t,n)}))}function j(t,n,e,o,i){const c=t.it(n);let f,r,s,l;if(i&&1===c){(r=t.ct(n,N))&&(s=r.split("."))[0]===o&&((l={}).vtag=t.tt(l.r=n),e.vchildren||(e.vchildren=[]),e.vchildren[s[1]]=l,e=l,i=""!==s[2]);for(let c=0;c<n.childNodes.length;c++)j(t,n.childNodes[c],e,o,i)}else 3===c&&(f=n.previousSibling)&&8===t.it(f)&&"s"===(s=t.lt(f).split("."))[0]&&s[1]===o&&((l={vtext:t.lt(n)}).r=n,e.vchildren||(e.vchildren=[]),e.vchildren[s[2]]=l)}function x(t,n,e,o){e.connectedCallback=function(){(function e(t,n,o){t.ut.has(o)||(t.ut.set(o,!0),function i(t,n){const e=t.v(n);e.at&&e.at.forEach(e=>{e.o||t.C.H(n,e.n,function o(t,n,e,i){return o=>{(i=t.p.get(n))?i[e](o):((i=t.g.get(n)||[]).push(e,o),t.g.set(n,i))}}(t,n,e.e),e.c,e.i)})}(t,o)),t.a.delete(o),t.pt.has(o)||(t.pt.set(o,!0),o["s-id"]||(o["s-id"]=t.dt()),function c(t,n,e){for(e=n;e=t.C.nt(e);)if(t.vt(e)){t.mt.has(n)||(t.f.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.queue.tick(()=>{t.M.set(o,function e(t,n,o,i,c){return o.mode||(o.mode=t.bt(o)),o["s-cr"]||t.ct(o,O)||t.k&&1===n.ht||(o["s-cr"]=t.Z(""),o["s-cr"]["s-cn"]=!0,t.Y(o,o["s-cr"],t.V(o)[0])),t.k||1!==n.ht||(o.shadowRoot=o),1===n.ht&&t.k&&!o.shadowRoot&&t.yt(o,{mode:"open"}),i={gt:o["s-id"],N:{}},n.L&&Object.keys(n.L).forEach(e=>{(c=n.L[e].B)&&(i.N[c]=t.ct(o,c))}),i}(t.C,n,o)),t.wt(n,o)}))})(t,n,this)},e.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,c,f,s){if(t&&o!==c)for(f in t)if((s=t[f]).B&&R(s.B)===R(e)){n[f]=r(s.D,c);break}})(n.L,this,t,e,o)},e.disconnectedCallback=function(){(function n(t,e){if(!t.K&&function o(t,n){for(;n;){if(!t._(n))return 9!==t.it(n);n=t._(n)}}(t.C,e)){t.a.set(e,!0),s(t,e),C(t.O.get(e),!0),t.C.I(e),t.ut.delete(e);{const n=t.p.get(e);n&&n.componentDidUnload&&n.componentDidUnload()}[t.f,t.Mt,t.M].forEach(t=>t.delete(e))}})(t,this)},e["s-init"]=function(){(function n(t,e,o,i,c){if(!t.mt.has(e)&&(i=t.p.get(e))&&!t.a.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.mt.set(e,!0);try{C(t.O.get(e)),(c=t.Mt.get(e))&&(c.forEach(t=>t(e)),t.Mt.delete(e)),i.componentDidLoad&&i.componentDidLoad()}catch(n){t.w(n,4,e)}t.C.x(e,o),s(t,e)}})(t,this,o)},e.forceUpdate=function(){a(t,this)},function i(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o],c=i.$t;1===c||2===c?h(e,o,function n(){return(t.b.get(this)||{})[o]},function n(e){m(t,this,o,r(i.D,e))}):6===c&&b(e,o,L)})}(t,n.L,e)}function W(t,n,e,o){return function(){const i=arguments;return function c(t,n,e){let o=n[e];const i=t.kt.body;return i?(o||(o=i.querySelector(e)),o||(o=n[e]=t.G(e),t.J(i,o)),o.componentOnReady()):Promise.resolve()}(t,n,e).then(t=>t[o].apply(t,i))}}const O="ssrv",N="ssrc",E="$",S={},A={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},T=t=>null!=t,R=t=>t.toLowerCase(),L=()=>{},q=[],B={forEach:(t,n)=>{t.forEach((t,e,o)=>n(u(t),e,o))},map:(t,n)=>t.map((t,e,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(n(u(t),e,o)))},D="wc-",P="http://www.w3.org/1999/xlink";let F=!1;(function H(t,n,e,o,c,r){function s(t,n){if(!e.customElements.get(t.t)){x(y,u[t.t]=t,n.prototype,r);{const e=n.observedAttributes=[];for(const n in t.L)t.L[n].B&&e.push(t.L[n].B)}e.customElements.define(t.t,n)}}const u={html:{}},p={},d=e[t]=e[t]||{},v=function m(t,n,e){t.ael||(t.ael=((t,n,e,o)=>t.addEventListener(n,e,o)),t.rel=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={kt:e,Ct:!1,it:t=>t.nodeType,G:t=>e.createElement(t),z:(t,n)=>e.createElementNS(t,n),Z:t=>e.createTextNode(t),jt:t=>e.createComment(t),Y:(t,n,e)=>t.insertBefore(n,e),X:t=>t.remove(),J:(t,n)=>t.appendChild(n),x:(t,n)=>t.classList.add(n),V:t=>t.childNodes,_:t=>t.parentNode,ot:t=>t.nextSibling,st:t=>t.previousSibling,tt:t=>R(t.nodeName),lt:t=>t.textContent,et:(t,n)=>t.textContent=n,ct:(t,n)=>t.getAttribute(n),xt:(t,n,e)=>t.setAttribute(n,e),Wt:(t,n,e,o)=>t.setAttributeNS(n,e,o),P:(t,n)=>t.removeAttribute(n),F:(t,n)=>t.hasAttribute(n),bt:n=>n.getAttribute("mode")||(t.Context||{}).mode,Ot:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.nt(t):"body"===o?e.body:"document"===o?e:"window"===o?n:t,H:(n,e,c,f,r,s,l,u)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Ot(n,s):"object"==typeof s?p=s:(u=e.split(":")).length>1&&(p=i.Ot(n,u[0]),e=u[1]),!p)return;let v=c;(u=e.split(".")).length>1&&(e=u[0],v=(t=>{t.keyCode===A[u[1]]&&c(t)})),l=i.Ct?{capture:!!f,passive:!!r}:!!f,t.ael(p,e,v,l),d||o.set(n,d={}),d[a]=(()=>{p&&t.rel(p,e,v,l),d[a]=null})},I:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},yt:(t,n)=>t.attachShadow(n)};i.k=!!i.kt.documentElement.attachShadow,i.Nt=((t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o)));try{n.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Ct=!0}))}catch(t){}return i.nt=((t,n)=>(n=i._(t))&&11===i.it(n)?n.host:n),i}(d,e,o);n.isServer=n.isPrerender=!(n.isClient=!0),n.window=e,n.location=e.location,n.document=o,n.resourcesUrl=n.publicPath=c,n.enableListener=((t,n,e,o,i)=>(function c(t,n,e,o,i,f){if(n){const c=t.m.get(n),r=t.v(c);if(r&&r.at)if(o){const o=r.at.find(t=>t.n===e);o&&t.C.H(c,e,t=>n[o.e](t),o.c,void 0===f?o.i:!!f,i)}else t.C.I(c,e)}})(y,t,n,e,o,i)),n.emit=((t,e,o)=>v.Nt(t,n.eventNameFn?n.eventNameFn(e):e,o)),d.h=l,d.Context=n;const b=e["s-defined"]=e.$definedCmps=e["s-defined"]||e.$definedCmps||{};let h=0;const y={C:v,Et:s,y:n.emit,v:t=>u[v.tt(t)],S:t=>n[t],isClient:!0,vt:t=>!(!b[v.tt(t)]&&!y.v(t)),dt:()=>t+h++,w:(t,n,e)=>void 0,T:t=>(function n(t,e,o){return{create:W(t,e,o,"create"),componentOnReady:W(t,e,o,"componentOnReady")}})(v,p,t),queue:n.queue=function g(t,n){function e(t){for(let n=0;n<t.length;n++)try{t[n](c())}catch(t){}t.length=0}function o(t,n){let e,o=0;for(;o<t.length&&(e=c())<n;)try{t[o++](e)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function i(){a++,e(s);const n=c()+7*Math.ceil(a*(1/22));o(l,n),o(u,n),l.length>0&&(u.push(...l),l.length=0),(p=s.length+l.length+u.length>0)?t.raf(i):a=0}const c=()=>n.performance.now(),f=Promise.resolve(),r=[],s=[],l=[],u=[];let a=0,p=!1;return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{tick(t){r.push(t),1===r.length&&f.then(()=>e(r))},read(n){s.push(n),p||(p=!0,t.raf(i))},write(n){l.push(n),p||(p=!0,t.raf(i))}}}(d,e),wt:function w(t,n,e){if(t.d)a(y,n);else{const e="string"==typeof t.St?t.St:t.St[n.mode],o=2===t.ht||1===t.ht&&!v.k;import(c+e+(o?".sc":"")+".js").then(e=>{try{t.d=e[(t=>R(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e,i,c){if(i){const e=n.t+(c||E);if(!n[e]){const o=t.G("template");n[e]=o,o.innerHTML=`<style>${i}</style>`,t.J(t.kt.head,o)}}}(v,t,t.ht,t.d.style,t.d.styleMode)}catch(n){t.d=class{}}a(y,n)}).catch(t=>void 0)}},f:new WeakMap,At:new WeakMap,pt:new WeakMap,ut:new WeakMap,mt:new WeakMap,m:new WeakMap,M:new WeakMap,p:new WeakMap,a:new WeakMap,l:new WeakMap,Mt:new WeakMap,g:new WeakMap,O:new WeakMap,b:new WeakMap};y.render=k(y,v);const M=v.kt.documentElement;M["s-ld"]=[],M["s-rn"]=!0,M["s-init"]=(()=>{y.mt.set(M,d.loaded=y.u=!0),v.Nt(e,"appload",{detail:{namespace:t}})}),function $(t,n,e){const o=e.querySelectorAll(`[${O}]`),i=o.length;let c,f,r,s,l,u;if(i>0)for(t.mt.set(e,!0),s=0;s<i;s++)for(c=o[s],f=n.ct(c,O),(r={}).vtag=n.tt(r.r=c),t.O.set(c,r),l=0,u=c.childNodes.length;l<u;l++)j(n,c.childNodes[l],r,f,!0)}(y,v,M),y.j=((t,n,e,o)=>{(function c(t,n,e,o){const c=2===e.ht||1===e.ht&&!t.C.k;let f=e.t+o.mode,r=e[f];if(c&&(o["s-sc"]=i(e,o.mode)),r||(r=e[f=e.t+E],c&&(o["s-sc"]=i(e))),r){let i=n.kt.head;if(n.k)if(1===e.ht)i=o.shadowRoot;else{let t=o;for(;t=n._(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let c=t.At.get(i);if(c||t.At.set(i,c={}),!c[f]){let t;{t=r.content.cloneNode(!0),c[f]=!0;const e=i.querySelectorAll("[data-styles]");n.Y(i,t,e.length&&e[e.length-1].nextSibling||i.firstChild)}}}})(t,n,e,o)}),(d.components||[]).map(t=>{const n=function e(t,n,o){const i={t:t[0],L:{color:{B:"color"}}};i.St=t[1];const c=t[3];if(c)for(n=0;n<c.length;n++)o=c[n],i.L[o[0]]={$t:o[1],q:!!o[2],B:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,D:o[4]};return i.ht=t[4],t[5]&&(i.at=t[5].map(f)),i}(t);return u[n.t]=n}).forEach(t=>s(t,class extends HTMLElement{})),function C(t,n,e,o,i,c){if(n.componentOnReady=((n,e)=>{if(!n.nodeName.includes("-"))return e(null),!1;const o=t.v(n);if(o)if(t.mt.has(n))e(n);else{const o=t.Mt.get(n)||[];o.push(e),t.Mt.set(n,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)n.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!e[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(y,d,e,e["s-apps"],e["s-cr"]),d.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"Ionic","hydrated");