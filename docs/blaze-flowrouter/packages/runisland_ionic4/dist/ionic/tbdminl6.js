/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{f as e,g as s,i as o,a,b as i,c as n,d as r}from"./chunk-13543983.js";import{a as l,e as c}from"./chunk-f7b6af08.js";function d(t,e,s){const o=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),s){case"top":a.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":const t=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=`${t}px`,a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(a))}function m(t,e,s){const o=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),s){case"top":a.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}function p(t,e,s){const o=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),s){case"top":a.fromTo("translateY","-100%","0%");break;case"middle":const t=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=`${t}px`,a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","0%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(a))}function u(t,e,s){const o=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),s){case"top":a.fromTo("translateY","0px","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","0px","100%")}return Promise.resolve(o.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}class h{constructor(){this.presented=!1,this.keyboardClose=!1,this.showCloseButton=!1,this.translucent=!1,this.willAnimate=!0}componentDidLoad(){this.ionToastDidLoad.emit()}componentDidUnload(){this.ionToastDidUnload.emit()}onDismiss(t){t.stopPropagation(),t.preventDefault(),this.dismiss()}async present(){await o(this,"toastEnter",d,p,this.position),this.duration&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration))}dismiss(t,s){return this.durationTimeout&&clearTimeout(this.durationTimeout),e(this,t,s,"toastLeave",m,u,this.position)}onDidDismiss(t){return s(this.el,"ionToastDidDismiss",t)}onWillDismiss(t){return s(this.el,"ionToastWillDismiss",t)}hostData(){const t=this.translucent?l(this.mode,"toast-translucent"):{};return{class:Object.assign({},t,l(this.mode,"toast"),c(this.cssClass))}}render(){const e=this.position?this.position:"bottom";return t("div",{class:{"toast-wrapper":!0,[`toast-${e}`]:!0}},t("div",{class:"toast-container"},this.message?t("div",{class:"toast-message"},this.message):null,this.showCloseButton?t("ion-button",{fill:"clear",color:"light","ion-activable":!0,class:"toast-button",onClick:()=>this.dismiss()},this.closeButtonText||"Close"):null))}static get is(){return"ion-toast"}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionDismiss",method:"onDismiss"}]}static get style(){return"ion-toast{left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);contain:strict;z-index:1000;pointer-events:none}.toast-wrapper{background:var(--background)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-md{--background:var(--ion-text-color-step-150, #262626);--color:var(--ion-background-color, #fff);font-family:var(--ion-font-family,inherit);font-size:15px}.toast-md .toast-wrapper{left:0;right:0;margin:auto;display:block;position:absolute;width:100%;max-width:700px;z-index:10}.toast-md .toast-wrapper.toast-top{padding-top:var(--ion-safe-area-top)}.toast-md .toast-wrapper.toast-bottom{padding-bottom:var(--ion-safe-area-bottom)}.toast-md .toast-wrapper.toast-middle{opacity:.01}.toast-md .toast-message{padding:19px 16px 17px}"}static get styleMode(){return"md"}}class b{constructor(){this.toasts=new Map}toastWillPresent(t){this.toasts.set(t.target.overlayId,t.target)}toastWillDismiss(t){this.toasts.delete(t.target.overlayId)}escapeKeyUp(){r(this.toasts)}create(t){return a(this.doc.createElement("ion-toast"),t)}dismiss(t,e,s=-1){return i(t,e,this.toasts,s)}getTop(){return n(this.toasts)}static get is(){return"ion-toast-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}static get listeners(){return[{name:"body:ionToastWillPresent",method:"toastWillPresent"},{name:"body:ionToastWillDismiss",method:"toastWillDismiss"},{name:"body:ionToastDidUnload",method:"toastWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]}}export{h as IonToast,b as IonToastController};