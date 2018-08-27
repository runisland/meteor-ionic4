/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function c(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,c)}u((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Ionic.loadBundle("zc2ug0jy",["exports","./chunk-db50cf96.js"],function(t,e){var n=window.Ionic.h,o=function(){function t(){}return t.prototype.onClick=function(t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(o){return(n=this.el.closest("ion-nav"))&&n.canGoBack()?(t.preventDefault(),n.isAnimating()||n.pop()):this.defaultHref&&e.openURL(this.win,this.defaultHref,t,"back"),[2]})})},t.prototype.hostData=function(){var t=!!this.defaultHref;return{class:Object.assign({},e.createColorClasses(this.color),{button:!0,"show-back-button":t}),"ion-activable":!0}},t.prototype.render=function(){var t=this,e=this.icon||this.config.get("backButtonIcon","arrow-back"),o=null!=this.text?this.text:this.config.get("backButtonText","Back");return n("button",{type:"button",class:"back-button-native",onClick:function(e){return t.onClick(e)}},n("span",{class:"back-button-inner"},e&&n("ion-icon",{icon:e,lazy:!1}),"ios"===this.mode&&o&&n("span",{class:"button-text"},o),"md"===this.mode&&n("ion-ripple-effect",{tapClick:!0,parent:this.el})))},Object.defineProperty(t,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:none;color:var(--ion-color-base);pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none;--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.show-back-button),:host-context(.can-go-back>ion-header){display:block}.back-button-native{font-family:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;outline:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;margin:0;min-height:32px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background-color:transparent;font-size:17px;line-height:1;overflow:visible;z-index:99}.back-button-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.back-button-native.activated{opacity:.4}ion-icon{padding:0;margin:0 -5px 0 -4px;display:inherit;font-size:1.85em;pointer-events:none}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();t.IonBackButton=o,Object.defineProperty(t,"__esModule",{value:!0})});