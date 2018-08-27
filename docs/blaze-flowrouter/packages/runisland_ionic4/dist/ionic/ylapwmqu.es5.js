/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("ylapwmqu",["exports","./chunk-db50cf96.js"],function(e,t){var n=window.Ionic.h,o=function(){function e(){this.disabled=!1}return e.prototype.valueChanged=function(e){this.updateButtons(),this.ionChange.emit({value:e})},e.prototype.segmentClick=function(e){var t=e.target;this.value=t.value},e.prototype.componentDidLoad=function(){if(void 0===this.value){var e=this.getButtons().find(function(e){return e.checked});e&&(this.value=e.value)}this.updateButtons()},e.prototype.updateButtons=function(){for(var e=this.value,t=0,n=this.getButtons();t<n.length;t++){var o=n[t];o.checked=o.value===e}},e.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))},e.prototype.hostData=function(){return{class:Object.assign({},t.createColorClasses(this.color),{"segment-disabled":this.disabled,"in-toolbar":t.hostContext("ion-toolbar",this.el),"in-color-toolbar":t.hostContext("ion-toolbar.ion-color",this.el)})}},e.prototype.render=function(){return n("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-segment"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionSelect",method:"segmentClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-base-rgb:var(--ion-color-primary-rgb, 56, 128, 255);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);--ion-color-shade:var(--ion-color-primary-shade, #3171e0);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;text-align:center;font-family:var(--ion-font-family,inherit)}:host(.segment-disabled){pointer-events:none;opacity:.4}::slotted(ion-segment-button){--border-radius:4px;--border-width:1px;--border-style:solid;--border-color:var(--ion-color-base);--background:transparent;--transition:100ms all linear;--icon-size:26px;height:32px;color:var(--ion-color-base);font-size:13px;line-height:37px}::slotted(.segment-checked){--background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted(.segment-button-disabled){pointer-events:none;color:rgba(var(--ion-color-base-rgb),.5)}::slotted(ion-segment-button):hover:not(.segment-checked){--background:rgba(var(--ion-color-base-rgb), 0.1)}::slotted(ion-segment-button):active:not(.segment-checked){--background:rgba(var(--ion-color-base-rgb), 0.1)}:host(.in-toolbar){left:0;right:0;top:0;bottom:0;position:absolute}:host(.in-toolbar) ::slotted(ion-segment-button){max-width:100px;height:30px;font-size:12px;line-height:22px}:host(.in-color-toolbar){--ion-color-base:inherit}:host(.in-color-toolbar) ::slotted(ion-segment-button){--border-color:currentColor;color:inherit}:host(.in-color-toolbar) ::slotted(ion-segment-button.segment-checked){--background:var(--ion-color-contrast);--border-color:var(--ion-color-contrast);color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),r=0,i=function(){function e(){this.checked=!1,this.disabled=!1,this.value="ion-sb-"+r++}return e.prototype.checkedChanged=function(e,t){e&&!t&&this.ionSelect.emit()},e.prototype.hostData=function(){var e=this.disabled,n=this.checked,o=this.color;return{class:Object.assign({},t.createColorClasses(o),{"segment-button-disabled":e,"segment-checked":n}),"ion-activable":!0}},e.prototype.render=function(){var e=this;return[n("button",{type:"button","aria-pressed":this.checked?"true":null,class:"segment-button-native",disabled:this.disabled,onClick:function(){return e.checked=!0}},n("slot",null),"md"===this.mode&&n("ion-ripple-effect",{tapClick:!0,parent:this.el}))]},Object.defineProperty(e,"is",{get:function(){return"ion-segment-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;-webkit-box-flex:1;-ms-flex:1;flex:1;color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}:host(:first-of-type) .segment-button-native{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}:host(:not(:first-of-type)) .segment-button-native{border-left-width:0}:host(:last-of-type) .segment-button-native{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.segment-button-native{font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:inherit;contain:content;cursor:pointer;overflow:hidden}.segment-button-native:active,.segment-button-native:focus{outline:0}::slotted(ion-icon){font-size:var(--icon-size)}"},enumerable:!0,configurable:!0}),e}();e.IonSegment=o,e.IonSegmentButton=i,Object.defineProperty(e,"__esModule",{value:!0})});