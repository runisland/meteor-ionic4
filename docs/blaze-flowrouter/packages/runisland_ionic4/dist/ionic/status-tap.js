/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:n}=window.Ionic;function o(n,o){o.read(async()=>{const t=n.innerWidth,e=n.innerWidth,i=n.document.elementFromPoint(t/2,e/2);if(!i)return;const c=i.closest("ion-content");c&&(await c.componentOnReady(),o.write(()=>{c.scrollToTop(300)}))})}export{o as startStatusTap};