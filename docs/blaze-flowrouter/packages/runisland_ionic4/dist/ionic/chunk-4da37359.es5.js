/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(i,c)}u((r=r.apply(e,n||[])).next())})},__generator=this&&this.__generator||function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Ionic.loadBundle("chunk-4da37359.js",["exports"],function(e){window.Ionic.h,e.attachComponent=function(e,n,t,r,o){return __awaiter(this,void 0,void 0,function(){var a;return __generator(this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(n,t,o,r)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof t?n.ownerDocument.createElement(t):t,r&&r.forEach(function(e){return a.classList.add(e)}),o&&Object.assign(a,o),n.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})},e.detachComponent=function(e,n){if(n){if(e){var t=n.parentElement;return e.removeViewFromDom(t,n)}n.remove()}return Promise.resolve()}});