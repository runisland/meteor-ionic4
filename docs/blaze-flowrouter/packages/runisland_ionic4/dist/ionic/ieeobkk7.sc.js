/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{e}from"./chunk-76b36062.js";import{b as o}from"./chunk-f7b6af08.js";class s{constructor(){this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}debounceChanged(){this.ionChange=e(this.ionChange,this.debounce)}valueChanged(){const t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.ionChange.emit({value:e})}componentDidLoad(){this.positionElements(),this.debounceChanged()}clearInput(t){this.ionClear.emit(),t&&(t.preventDefault(),t.stopPropagation()),setTimeout(()=>{const t=this.value;void 0!==t&&""!==t&&(this.value="",this.ionInput.emit())},64)}cancelSearchbar(){this.ionCancel.emit(),this.clearInput()}onInput(t){const e=t.target;e&&(this.value=e.value),this.ionInput.emit(t)}onBlur(){this.focused=!1,this.ionBlur.emit(),this.positionElements()}onFocus(){this.focused=!0,this.ionFocus.emit(),this.positionElements()}positionElements(){const t=this.shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this.shouldAlignLeft=e,"ios"===this.mode&&(t!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const t="rtl"===this.doc.dir,e=this.nativeInput,o=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),o.removeAttribute("style");else{const s=this.doc,i=s.createElement("span");i.innerHTML=this.placeholder,s.body.appendChild(i);const n=i.offsetWidth;i.remove();const a="calc(50% - "+n/2+"px)",c="calc(50% - "+(n/2+30)+"px)";t?(e.style.paddingRight=a,o.style.marginRight=c):(e.style.paddingLeft=a,o.style.marginLeft=c)}}positionCancelButton(){const t="rtl"===this.doc.dir,e=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),o=this.focused;if(e&&o!==this.isCancelVisible){const s=e.style;if(this.isCancelVisible=o,o)t?s.marginLeft="0":s.marginRight="0";else{const o=e.offsetWidth;o>0&&(t?s.marginLeft=-o+"px":s.marginRight=-o+"px")}}}hostData(){return{class:Object.assign({},o(this.color),{"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused})}}render(){const e=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),o=this.searchIcon||"search",s=this.showCancelButton?t("button",{type:"button",tabIndex:"ios"!==this.mode||this.focused?void 0:-1,onClick:this.cancelSearchbar.bind(this),class:"searchbar-cancel-button"},"md"===this.mode?t("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText):null;return[t("div",{class:"searchbar-input-container"},t("input",{ref:t=>this.nativeInput=t,class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===this.mode&&s,t("ion-icon",{mode:this.mode,icon:o,lazy:!1,class:"searchbar-search-icon"}),t("button",{type:"button","no-blur":!0,class:"searchbar-clear-button",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this),onTouchStart:this.clearInput.bind(this)},t("ion-icon",{mode:this.mode,icon:e,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===this.mode&&s]}static get is(){return"ion-searchbar"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-searchbar-ios-h{--placeholder-color:currentColor;--placeholder-weight:inherit;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{--background:var(--ion-color-base);--color-button-clear:inherit;--color-button-cancel:inherit;--color-icon:inherit;color:var(--ion-color-contrast)}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--color-icon);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--color-button-cancel)}.searchbar-clear-button.sc-ion-searchbar-ios{margin:0;padding:0;display:none;min-height:0;outline:0;color:var(--button-color-clear);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.sc-ion-searchbar-ios-h{--color-button-clear:var(--ion-text-color-step-400, #666666);--color-button-cancel:var(--ion-color-primary, #3880ff);--color-icon:var(--ion-text-color-step-400, #666666);--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);padding:12px;height:60px;color:var(--ion-text-color,#000);font-family:var(--ion-font-family,inherit);contain:strict}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:8px;top:0;position:absolute;width:16px;height:100%;contain:strict}.searchbar-input.sc-ion-searchbar-ios{padding:0 28px;border-radius:10px;height:100%;font-size:14px;font-weight:400;contain:strict}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding:0 0 0 8px;display:none;-ms-flex-negative:0;flex-shrink:0;border:0;outline:0;background-color:transparent;font-size:16px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}.searchbar-show-cancel.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-show-cancel.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}"}static get styleMode(){return"ios"}}export{s as IonSearchbar};