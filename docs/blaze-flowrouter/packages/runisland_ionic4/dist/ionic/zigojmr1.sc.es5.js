/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(a,r){function o(e){try{u(i.next(e))}catch(e){r(e)}}function s(e){try{u(i.throw(e))}catch(e){r(e)}}function u(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,s)}u((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};Ionic.loadBundle("zigojmr1",["require","exports","./chunk-5b27ab2d.js","./chunk-db50cf96.js"],function(e,t,n,i){var a=window.Ionic.h,r=function(){function t(){this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.disabled=!1,this.value=0}return t.prototype.debounceChanged=function(){this.ionChange=n.debounceEvent(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()},t.prototype.valueChanged=function(e){this.noUpdate||this.updateRatio(),this.ionChange.emit({value:e})},t.prototype.componentWillLoad=function(){this.ionStyle=n.deferEvent(this.ionStyle),this.updateRatio(),this.debounceChanged(),this.emitStyle()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return t=this,[4,new Promise(function(t,n){e(["./gesture.js"],t,n)})];case 1:return t.gesture=n.sent().createGesture({el:this.rangeSlider,queue:this.queue,gestureName:"range",gesturePriority:100,threshold:0,onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.gesture.setDisabled(this.disabled),[2]}})})},t.prototype.keyChng=function(e){var t=this.step;t=t>0?t:1,t/=this.max-this.min,e.detail.isIncrease||(t*=-1),"A"===e.detail.knob?this.ratioA+=t:this.ratioB+=t,this.updateValue()},t.prototype.handleKeyboard=function(e,t){var n=this.step;n=n>0?n:1,n/=this.max-this.min,t||(n*=-1),"A"===e?this.ratioA+=n:this.ratioB+=n,this.updateValue()},t.prototype.getValue=function(){var e=this.value||0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e},t.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},t.prototype.fireBlur=function(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},t.prototype.fireFocus=function(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},t.prototype.onDragStart=function(e){this.fireFocus();var t=this.rect=this.rangeSlider.getBoundingClientRect(),i=e.currentX,a=n.clamp(0,(i-t.left)/t.width,1);this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.update(i)},t.prototype.onDragMove=function(e){this.update(e.currentX)},t.prototype.onDragEnd=function(e){this.update(e.currentX),this.pressedKnob=void 0,this.fireBlur()},t.prototype.update=function(e){var t=this.rect,i=n.clamp(0,(e-t.left)/t.width,1);this.snaps&&(i=u(s(i,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=i:this.ratioB=i,this.updateValue()},Object.defineProperty(t.prototype,"valA",{get:function(){return s(this.ratioA,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"valB",{get:function(){return s(this.ratioB,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratioLower",{get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ratioUpper",{get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA},enumerable:!0,configurable:!0}),t.prototype.updateRatio=function(){var e=this.getValue(),t=this.min,n=this.max;this.dualKnobs?(this.ratioA=u(e.lower,t,n),this.ratioB=u(e.upper,t,n)):this.ratioA=u(e,t,n)},t.prototype.updateValue=function(){this.noUpdate=!0;var e=this.valA,t=this.valB;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.noUpdate=!1},t.prototype.hostData=function(){return{class:Object.assign({},i.createColorClasses(this.color),{"in-item":i.hostContext(".item",this.el),"range-disabled":this.disabled,"range-pressed":void 0!==this.pressedKnob,"range-has-pin":this.pin})}},t.prototype.render=function(){var e=this,t=this,n=t.min,i=t.max,r=t.step,s=t.ratioLower,l=t.ratioUpper,h=100*s+"%",c=100-100*l+"%",d=[];if(this.snaps)for(var p=n;p<=i;p+=r){var b=u(p,n,i);d.push({ratio:b,active:b>=s&&b<=l,left:100*b+"%"})}return[a("slot",{name:"start"}),a("div",{class:"range-slider",ref:function(t){return e.rangeSlider=t}},d.map(function(e){return a("div",{style:{left:e.left},role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active}})}),a("div",{class:"range-bar",role:"presentation"}),a("div",{class:"range-bar range-bar-active",role:"presentation",style:{left:h,right:c}}),o({knob:"A",pressed:"A"===this.pressedKnob,value:this.valA,ratio:this.ratioA,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:n,max:i}),this.dualKnobs&&o({knob:"B",pressed:"B"===this.pressedKnob,value:this.valB,ratio:this.ratioB,pin:this.pin,disabled:this.disabled,handleKeyboard:this.handleKeyboard.bind(this),min:n,max:i})),a("slot",{name:"end"})]},Object.defineProperty(t,"is",{get:function(){return"ion-range"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dualKnobs:{type:Boolean,attr:"dual-knobs"},el:{elementRef:!0},max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},pin:{type:Boolean,attr:"pin"},pressedKnob:{state:!0},queue:{context:"queue"},ratioA:{state:!0},ratioB:{state:!0},snaps:{type:Boolean,attr:"snaps"},step:{type:Number,attr:"step"},value:{type:Number,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionIncrease",method:"keyChng"},{name:"ionDecrease",method:"keyChng"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-range-ios-h{--knob-handle-size:calc(var(--knob-size) * 2);--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--knob-border-radius:50%;--knob-background:var(--ion-background-color, #fff);--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1),0 4px 8px rgba(0, 0, 0, 0.13),0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:1px;--bar-background:var(--ion-background-color-step-250, #bfbfbf);--height:42px;padding:8px 16px;font-family:var(--ion-font-family,inherit)}.sc-ion-range-ios-s > ion-label{-webkit-box-flex:initial;-ms-flex:initial;flex:initial}.sc-ion-range-ios-s > ion-icon[slot]{font-size:24px}.range-slider.sc-ion-range-ios{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab}.range-pressed.sc-ion-range-ios-h   .range-slider.sc-ion-range-ios{cursor:-webkit-grabbing;cursor:grabbing}.range-pin.sc-ion-range-ios{background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle.sc-ion-range-ios{left:0;top:calc((var(--height) - var(--knob-handle-size))/ 2);margin-left:calc(0px - var(--knob-handle-size)/ 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle.sc-ion-range-ios:active, .range-knob-handle.sc-ion-range-ios:focus{outline:0}.range-bar.sc-ion-range-ios{left:0;top:calc((var(--height) - var(--bar-height))/ 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob.sc-ion-range-ios{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size)/ 2);top:calc(50% - var(--knob-size)/ 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-pressed.sc-ion-range-ios-h   .range-bar-active.sc-ion-range-ios{will-change:left,right}.range-pressed.sc-ion-range-ios-h   .range-knob-handle.sc-ion-range-ios{will-change:left}.in-item.sc-ion-range-ios-h{width:100%}.sc-ion-range-ios-h.in-item .sc-ion-range-ios-s > ion-label{-ms-flex-item-align:center;align-self:center}.range-has-pin.sc-ion-range-ios-h{padding-top:20px}.range-bar-active.sc-ion-range-ios{bottom:0;width:auto;background:var(--ion-color-base)}.range-tick.sc-ion-range-ios{margin-left:-.5px;border-radius:0;position:absolute;top:17.5px;width:1px;height:8px;background:var(--ion-background-color-step-250,#bfbfbf);pointer-events:none}.range-tick-active.sc-ion-range-ios{background:var(--ion-color-base)}.range-pin.sc-ion-range-ios{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease,-webkit-transform 120ms ease;background:0 0;color:var(--ion-text-color,#000);font-size:12px;text-align:center}.range-knob-pressed.sc-ion-range-ios   .range-pin.sc-ion-range-ios{-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}.range-disabled.sc-ion-range-ios-h{opacity:.5}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function o(e){var t=e.knob,n=e.value,i=e.ratio,r=e.min,o=e.max,s=e.disabled,u=e.pressed,l=e.pin,h=e.handleKeyboard;return a("div",{onKeyDown:function(e){var n=e.key;"ArrowLeft"===n||"ArrowDown"===n?(h(t,!1),e.preventDefault(),e.stopPropagation()):"ArrowRight"!==n&&"ArrowUp"!==n||(h(t,!0),e.preventDefault(),e.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-pressed":u,"range-knob-min":n===r,"range-knob-max":n===o},style:{left:100*i+"%"},role:"slider",tabindex:s?-1:0,"aria-valuemin":r,"aria-valuemax":o,"aria-disabled":s?"true":null,"aria-valuenow":n},l&&a("div",{class:"range-pin",role:"presentation"},Math.round(n)),a("div",{class:"range-knob",role:"presentation"}))}function s(e,t,i,a){var r=(i-t)*e;return a>0&&(r=Math.round(r/a)*a+t),n.clamp(t,r,i)}function u(e,t,i){return n.clamp(0,(e-t)/(i-t),1)}t.IonRange=r,Object.defineProperty(t,"__esModule",{value:!0})});