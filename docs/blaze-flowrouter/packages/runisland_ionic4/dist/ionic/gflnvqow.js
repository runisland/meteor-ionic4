/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e}from"./chunk-8ef9ea06.js";const s=!!(CSS&&CSS.supports&&CSS.supports("--a","0")),r=["","xs","sm","md","lg","xl"];class l{onResize(){this.el.forceUpdate()}getColumns(t){let s;for(const l of r){const r=e(l),i=this[t+l.charAt(0).toUpperCase()+l.slice(1)];r&&void 0!==i&&(s=i)}return s}calculateSize(){const t=this.getColumns("size");if(!t||""===t)return;const e="auto"===t?"auto":s?`calc(calc(${t} / var(--ion-grid-columns, 12)) * 100%)`:t/12*100+"%";return{flex:`0 0 ${e}`,width:`${e}`,"max-width":`${e}`}}calculatePosition(t,e){const r=this.getColumns(t);if(r)return{[e]:s?`calc(calc(${r} / var(--ion-grid-columns, 12)) * 100%)`:r>0&&r<12?r/12*100+"%":"auto"}}calculateOffset(){return this.calculatePosition("offset","margin-left")}calculatePull(){return this.calculatePosition("pull","right")}calculatePush(){return this.calculatePosition("push","left")}hostData(){return{style:Object.assign({},this.calculateOffset(),this.calculatePull(),this.calculatePush(),this.calculateSize())}}render(){return t("slot",null)}static get is(){return"ion-col"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0},offset:{type:String,attr:"offset"},offsetLg:{type:String,attr:"offset-lg"},offsetMd:{type:String,attr:"offset-md"},offsetSm:{type:String,attr:"offset-sm"},offsetXl:{type:String,attr:"offset-xl"},offsetXs:{type:String,attr:"offset-xs"},pull:{type:String,attr:"pull"},pullLg:{type:String,attr:"pull-lg"},pullMd:{type:String,attr:"pull-md"},pullSm:{type:String,attr:"pull-sm"},pullXl:{type:String,attr:"pull-xl"},pullXs:{type:String,attr:"pull-xs"},push:{type:String,attr:"push"},pushLg:{type:String,attr:"push-lg"},pushMd:{type:String,attr:"push-md"},pushSm:{type:String,attr:"push-sm"},pushXl:{type:String,attr:"push-xl"},pushXs:{type:String,attr:"push-xs"},size:{type:String,attr:"size"},sizeLg:{type:String,attr:"size-lg"},sizeMd:{type:String,attr:"size-md"},sizeSm:{type:String,attr:"size-sm"},sizeXl:{type:String,attr:"size-xl"},sizeXs:{type:String,attr:"size-xs"}}}static get listeners(){return[{name:"window:resize",method:"onResize",passive:!0}]}static get style(){return":host{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@media (min-width:576px){:host{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}\@media (min-width:768px){:host{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}\@media (min-width:992px){:host{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}\@media (min-width:1200px){:host{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}"}}class i{constructor(){this.fixed=!1}hostData(){return{class:{"grid-fixed":this.fixed}}}render(){return t("slot",null)}static get is(){return"ion-grid"}static get encapsulation(){return"shadow"}static get properties(){return{fixed:{type:Boolean,attr:"fixed"}}}static get style(){return":host{padding:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}:host(.grid-fixed){width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){:host{padding:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}:host(.grid-fixed){width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){:host{padding:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}:host(.grid-fixed){width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){:host{padding:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}:host(.grid-fixed){width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){:host{padding:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}:host(.grid-fixed){width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}:host([no-padding]){padding:0}:host([no-padding]) ::slotted(ion-col){padding:0}"}}class a{render(){return t("slot",null)}static get is(){return"ion-row"}static get encapsulation(){return"shadow"}static get style(){return":host{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"}}export{l as IonCol,i as IonGrid,a as IonRow};