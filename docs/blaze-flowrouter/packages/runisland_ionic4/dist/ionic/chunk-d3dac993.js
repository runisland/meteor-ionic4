/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;async function n(e,n,t,o,r){if(e)return e.attachViewToDom(n,t,r,o);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof t?n.ownerDocument.createElement(t):t;return o&&o.forEach(e=>i.classList.add(e)),r&&Object.assign(i,r),n.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i}function t(e,n){if(n){if(e){const t=n.parentElement;return e.removeViewFromDom(t,n)}n.remove()}return Promise.resolve()}export{n as a,t as b};