/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("nlciwwot",["exports","./chunk-db50cf96.js"],function(e,n){var t=window.Ionic.h,r={lines:{dur:1e3,lines:12,fn:function(e,n,t){return{y1:17,y2:29,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":e*n/t-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,n,t){return{y1:12,y2:20,style:{transform:"rotate("+(30*n+(n<6?180:-180))+"deg)","animation-delay":e*n/t-e+"ms"}}}},bubbles:{dur:1e3,circles:9,fn:function(e,n,t){var r=e*n/t-e+"ms",i=2*Math.PI*n/t;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,n,t){var r=n/t,i=e*r-e+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}}},i=function(){function e(){this.paused=!1}return e.prototype.getName=function(){var e=this.name||this.config.get("spinner");return e?("ios"===e?(console.warn('spinner "ios" has been renamed to "lines"'),e="lines"):"ios-small"===e&&(console.warn('spinner "ios-small" has been renamed to "lines-small"'),e="lines-small"),e):"md"===this.mode?"crescent":"lines"},e.prototype.hostData=function(){var e;return{class:Object.assign({},n.createColorClasses(this.color),(e={},e["spinner-"+this.getName()]=!0,e["spinner-paused"]=!!this.paused,e))}},e.prototype.render=function(){var e=this.getName(),n=r[e]||r.lines,t="number"==typeof this.duration&&this.duration>10?this.duration:n.dur,i=[];if(n.circles)for(var a=0;a<n.circles;a++)i.push(s(n,t,a,n.circles));else if(n.lines)for(a=0;a<n.lines;a++)i.push(o(n,t,a,n.lines));return i},Object.defineProperty(e,"is",{get:function(){return"ion-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},paused:{type:Boolean,attr:"paused"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-spinner-md-h{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ion-color.sc-ion-spinner-md-h{color:var(--ion-color-base)}svg.sc-ion-spinner-md{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}.spinner-lines.sc-ion-spinner-md-h   line.sc-ion-spinner-md, .spinner-lines-small.sc-ion-spinner-md-h   line.sc-ion-spinner-md{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines.sc-ion-spinner-md-h   svg.sc-ion-spinner-md, .spinner-lines-small.sc-ion-spinner-md-h   svg.sc-ion-spinner-md{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out}.spinner-bubbles.sc-ion-spinner-md-h   svg.sc-ion-spinner-md{-webkit-animation:1s linear infinite spinner-scale-out;animation:1s linear infinite spinner-scale-out;fill:currentColor}.spinner-circles.sc-ion-spinner-md-h   svg.sc-ion-spinner-md{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out;fill:currentColor}.spinner-crescent.sc-ion-spinner-md-h   circle.sc-ion-spinner-md{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent.sc-ion-spinner-md-h   svg.sc-ion-spinner-md{-webkit-animation:1s linear infinite spinner-rotate;animation:1s linear infinite spinner-rotate}.spinner-dots.sc-ion-spinner-md-h   circle.sc-ion-spinner-md{stroke-width:0;fill:currentColor}.spinner-dots.sc-ion-spinner-md-h   svg.sc-ion-spinner-md{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1s linear infinite spinner-dots;animation:1s linear infinite spinner-dots}.spinner-paused.sc-ion-spinner-md-h   svg.sc-ion-spinner-md{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\@-webkit-keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}\@keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();function s(e,n,r,i){var s=e.fn(n,r,i);return s.style["animation-duration"]=n+"ms",t("svg",{viewBox:"0 0 64 64",style:s.style},t("circle",{transform:"translate(32,32)",r:s.r}))}function o(e,n,r,i){var s=e.fn(n,r,i);return s.style["animation-duration"]=n+"ms",t("svg",{viewBox:"0 0 64 64",style:s.style},t("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))}e.IonSpinner=i,Object.defineProperty(e,"__esModule",{value:!0})});