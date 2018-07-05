/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("ujn9ab3j",["exports"],function(t){window.Ionic.h;var e=2;function i(t,i,r,n,o,s,l,h,a,d){for(var c=[],u=d+a,p=a;p<u;p++){var f,g=t[p];r&&null!=(f=r(g,p,t))&&c.push({i:h++,type:1,value:f,index:p,height:o,reads:e,visible:!1}),c.push({i:h++,type:0,value:g,index:p,height:i?i(g,p):l,reads:i?0:e,visible:!!i}),n&&null!=(f=n(g,p,t))&&c.push({i:h++,type:2,value:f,index:p,height:s,reads:2,visible:!1})}return c}var r=function(){function t(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.totalHeight=0,this.heightChanged=!1,this.lastItemLen=0,this.approxItemHeight=45,this.approxHeaderHeight=40,this.approxFooterHeight=40}return t.prototype.itemsChanged=function(){this.calcCells()},t.prototype.componentDidLoad=function(){var t=this,e=this.el.closest("ion-scroll");e?(this.scrollEl=e,e.componentOnReady().then(function(){t.calcDimensions(),t.calcCells(),t.updateState()})):console.error("virtual-scroll must be used inside ion-scroll/ion-content")},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){this.updateVirtualScroll()},t.prototype.onResize=function(){this.indexDirty=0,this.calcDimensions(),this.calcCells(),this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return function(t,e,i){var r=e.find(function(e){return 0===e.type&&e.index===t});return r?i[r.i]:-1}(t,this.cells,this.getHeightIndex())},t.prototype.markDirty=function(t,e){if(void 0===e&&(e=-1),this.items){-1===e&&(e=this.items.length-t);var r=this.lastItemLen,n=0;if(t>0&&t<r)n=function(t,e){return 0===e?0:t.findIndex(function(t){return t.index===e})}(this.cells,t);else if(0===t)n=0;else{if(t!==r)return void console.warn("bad values for markDirty");n=this.cells.length}var o=i(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,n,t,e);o.length,this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var r=0;r<e.length;r++)t[r+i]=e[r];return t}(this.cells,o,t),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}},t.prototype.markDirtyTail=function(){if(this.items){var t=this.lastItemLen;this.markDirty(t,this.items.length-t)}},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=null),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=0,e=this.el;e&&e!==this.scrollEl;)t+=e.offsetTop,e=e.parentElement;this.viewportOffset=t,this.scrollEl&&(this.currentScrollTop=this.scrollEl.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=function(t,e,i){return{top:Math.max(t-100,0),bottom:t+e+100}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),r=function(t,e,i){for(var r=e.top,n=e.bottom,o=0;o<t.length&&!(t[o]>r);o++);for(var s=Math.max(o-2-1,0);o<t.length&&!(t[o]>=n);o++);return{offset:s,length:Math.min(o+2,t.length)-s}}(i,e);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(t,this.range,r)&&(this.range=r,function(t,e,i,r){for(var n=0,o=t;n<o.length;n++){var s=o[n];s.change=0,s.d=!0}for(var l=[],h=r.offset+r.length,a=function(r){var n=i[r],o=t.find(function(t){return t.d&&t.cell===n});if(o){var s=e[r];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else l.push(n)},d=r.offset;d<h;d++)a(d);for(var c=t.filter(function(t){return t.d}),u=function(i){var r=c.find(function(t){return t.d&&t.cell.type===i.type}),n=i.index;r?(r.d=!1,r.change=2,r.cell=i,r.top=e[n]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[n]})},p=0,f=l;p<f.length;p++)u(f[p]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=1,t.top=-9999})}(this.virtualDom,i,this.cells,r),this.nodeRender?function(t,e,i,r){for(var n,o=t.children,s=o.length,l=0;l<i.length;l++){var h=i[l],a=h.cell;2===h.change?(l<s?e(n=o[l],a,l):((n=e(null,a,l)).classList.add("virtual-item"),t.appendChild(n)),n.$ionCell=a):n=o[l],0!==h.change&&(n.style.transform="translate3d(0,"+h.top+"px,0)");var d=a.visible;h.visible!==d&&(d?n.classList.remove("virtual-loading"):n.classList.add("virtual-loading"),h.visible=d),a.reads>0&&(r(a,n),a.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate(),this.heightChanged&&(this.el.style.height=this.totalHeight+"px",this.heightChanged=!1))},t.prototype.updateCellHeight=function(t,e){var i=this,r=function(){if(e.$ionCell===t){var r=i.win.getComputedStyle(e),n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};"componentOnReady"in e?e.componentOnReady(r):r()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.visible=!0,t.height!==e&&(t.height,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!!(this.scrollEl&&this.cells&&this.viewportHeight>1);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=i(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.cells.length,this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length);var e=function(t,e,i){for(var r=t[i];i<t.length;i++)t[i]=r,r+=e[i].height;return r}(this.heightIndex,this.cells,t);e!==this.totalHeight&&(this.totalHeight,this.totalHeight=e,this.heightChanged=!0),this.heightIndex.length,this.indexDirty=1/0},t.prototype.calcDimensions=function(){this.scrollEl&&(this.viewportHeight=this.scrollEl.offsetHeight)},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))},t.prototype.renderVirtualNode=function(t){var e=t.cell;switch(e.type){case 0:return this.renderItem(e.value,e.index);case 1:return this.renderHeader(e.value,e.index);case 2:return this.renderFooter(e.value,e.index)}},t.prototype.render=function(){var t=this;if(this.renderItem)return this.virtualDom.map(function(e){var i=t.renderVirtualNode(e),r=["virtual-item"];return i.vattrs||(i.vattrs={}),i.vattrs.class+=" virtual-item",e.visible||r.push("virtual-loading"),i.vattrs.class+=" "+r.join(" "),i.vattrs.style||(i.vattrs.style={}),i.vattrs.style.transform="translate3d(0,"+e.top+"px,0)",i})},Object.defineProperty(t,"is",{get:function(){return"ion-virtual-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},markDirty:{method:!0},markDirtyTail:{method:!0},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{position:relative;display:block;width:100%;contain:strict}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0s;transition-duration:0s;will-change:transform}"},enumerable:!0,configurable:!0}),t}();t.IonVirtualScroll=r,Object.defineProperty(t,"__esModule",{value:!0})});