/**
  * vue2-auto-form v1.0.0
  * (c) 2018 vinhjaxt
  * @license MIT
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.VueAutoForm={})}(this,function(t){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(P){!function(t){var c,e=Object.prototype,p=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",n=r.toStringTag||"@@toStringTag",a=t.regeneratorRuntime;if(a)P.exports=a;else{(a=t.regeneratorRuntime=P.exports).wrap=b;var s="suspendedStart",h="suspendedYield",y="executing",l="completed",m={},f={};f[i]=function(){return this};var u=Object.getPrototypeOf,d=u&&u(u(O([])));d&&d!==e&&p.call(d,i)&&(f=d);var g=k.prototype=w.prototype=Object.create(f);x.prototype=g.constructor=k,k.constructor=x,k[n]=x.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(g),t},a.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[o]=function(){return this},a.AsyncIterator=L,a.async=function(t,e,r,o){var i=new L(b(t,e,r,o));return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(g),g[n]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},a.keys=function(r){var o=[];for(var t in r)o.push(t);return o.reverse(),function t(){for(;o.length;){var e=o.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=O,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&p.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){var t=this;if(this.done)throw r;var o=this;function e(t,e){return a.type="throw",a.arg=r,o.next=t,e&&(o.method="next",o.arg=c),!!e}for(var i=this.tryEntries.length-1;0<=i;--i){var n=t.tryEntries[i],a=n.completion;if("root"===n.tryLoc)return e("end");if(n.tryLoc<=t.prev){var f=p.call(n,"catchLoc"),u=p.call(n,"finallyLoc");if(f&&u){if(t.prev<n.catchLoc)return e(n.catchLoc,!0);if(t.prev<n.finallyLoc)return e(n.finallyLoc)}else if(f){if(t.prev<n.catchLoc)return e(n.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(t.prev<n.finallyLoc)return e(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&p.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var n=i?i.completion:{};return n.type=t,n.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var i=o.arg;R(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=c),m}}}function b(t,e,r,o){var n,a,f,u,i=e&&e.prototype instanceof w?e:w,c=Object.create(i.prototype),p=new C(o||[]);return c._invoke=(n=t,a=r,f=p,u=s,function(t,e){if(u===y)throw new Error("Generator is already running");if(u===l){if("throw"===t)throw e;return _()}for(f.method=t,f.arg=e;;){var r=f.delegate;if(r){var o=j(r,f);if(o){if(o===m)continue;return o}}if("next"===f.method)f.sent=f._sent=f.arg;else if("throw"===f.method){if(u===s)throw u=l,f.arg;f.dispatchException(f.arg)}else"return"===f.method&&f.abrupt("return",f.arg);u=y;var i=v(n,a,f);if("normal"===i.type){if(u=f.done?l:h,i.arg===m)continue;return{value:i.arg,done:f.done}}"throw"===i.type&&(u=l,f.method="throw",f.arg=i.arg)}}),c}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function w(){}function x(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(f){function u(t,e,r,o){var i=v(f[t],f,e);if("throw"!==i.type){var n=i.arg,a=n.value;return a&&"object"==typeof a&&p.call(a,"__await")?Promise.resolve(a.__await).then(function(t){u("next",t,r,o)},function(t){u("throw",t,r,o)}):Promise.resolve(a).then(function(t){n.value=t,r(n)},o)}o(i.arg)}var e;"object"==typeof t.process&&t.process.domain&&(u=t.process.domain.bind(u)),this._invoke=function(r,o){function t(){return new Promise(function(t,e){u(r,o,t,e)})}return e=e?e.then(t,t):t()}}function j(t,e){var r=t.iterator[e.method];if(r===c){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=c,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=v(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=c),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(p.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=c,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:c,done:!0}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:e)})(r={exports:{}},r.exports);var r,o="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:e,i=o.regeneratorRuntime&&0<=Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime"),n=i&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,i)o.regeneratorRuntime=n;else try{delete o.regeneratorRuntime}catch(t){o.regeneratorRuntime=void 0}!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}('[ui-pnotify].ui-pnotify .brighttheme{border-radius:0}[ui-pnotify].ui-pnotify .brighttheme.ui-pnotify-container{padding:1.3rem}[ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-confirm,[ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-text,[ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-title{margin-left:1.8rem}[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-confirm,[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-text,[dir=rtl] [ui-pnotify].ui-pnotify-with-icon .brighttheme .ui-pnotify-title{margin-left:0;margin-right:1.8rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-title{font-size:1.2rem;line-height:1.4rem;margin-bottom:1rem;margin-top:-.2rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-text{font-size:1rem;line-height:1.2rem;margin-top:0}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-icon{line-height:1}[ui-pnotify].ui-pnotify .brighttheme-notice{background-color:#ffffa2;border:0 solid #ff0;color:#4f4f00}[ui-pnotify].ui-pnotify .brighttheme-info{background-color:#8fcedd;border:0 solid #0286a5;color:#012831}[ui-pnotify].ui-pnotify .brighttheme-success{background-color:#aff29a;border:0 solid #35db00;color:#104300}[ui-pnotify].ui-pnotify .brighttheme-error{background-color:#ffaba2;background-image:repeating-linear-gradient(135deg,transparent,transparent 35px,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,.3) 70px);border:0 solid #ff1800;color:#4f0800}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-closer,[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-sticker{font-size:1rem;line-height:1.2rem}[ui-pnotify].ui-pnotify .brighttheme-icon-closer,[ui-pnotify].ui-pnotify .brighttheme-icon-error,[ui-pnotify].ui-pnotify .brighttheme-icon-info,[ui-pnotify].ui-pnotify .brighttheme-icon-notice,[ui-pnotify].ui-pnotify .brighttheme-icon-sticker,[ui-pnotify].ui-pnotify .brighttheme-icon-success{border-radius:50%;font-family:Courier New,Courier,monospace;font-size:1rem;font-weight:700;height:1rem;line-height:1rem;position:relative;width:1rem}[ui-pnotify].ui-pnotify .brighttheme-icon-closer:after,[ui-pnotify].ui-pnotify .brighttheme-icon-info:after,[ui-pnotify].ui-pnotify .brighttheme-icon-notice:after,[ui-pnotify].ui-pnotify .brighttheme-icon-sticker:after,[ui-pnotify].ui-pnotify .brighttheme-icon-success:after{left:.2rem;position:absolute;top:0}[ui-pnotify].ui-pnotify .brighttheme-icon-notice{background-color:#2e2e00;color:#ffffa2}[ui-pnotify].ui-pnotify .brighttheme-icon-notice:after{content:"!"}[ui-pnotify].ui-pnotify .brighttheme-icon-info{background-color:#012831;color:#8fcedd}[ui-pnotify].ui-pnotify .brighttheme-icon-info:after{content:"i"}[ui-pnotify].ui-pnotify .brighttheme-icon-success{background-color:#104300;color:#aff29a}[ui-pnotify].ui-pnotify .brighttheme-icon-success:after{content:"\\002713"}[ui-pnotify].ui-pnotify .brighttheme-icon-error{border-bottom:1.2rem solid #2e0400;border-left:.6rem solid transparent;border-radius:0;border-right:.6rem solid transparent;color:#ffaba2;font-size:0;height:0;line-height:0;width:0}[ui-pnotify].ui-pnotify .brighttheme-icon-error:after{content:"!";font-family:Courier New,Courier,monospace;font-size:.9rem;font-weight:700;left:-.25rem;line-height:1.4rem;position:absolute;top:.1rem}[ui-pnotify].ui-pnotify .brighttheme-icon-closer,[ui-pnotify].ui-pnotify .brighttheme-icon-sticker{display:inline-block}[ui-pnotify].ui-pnotify .brighttheme-icon-closer:after{content:"\\002715"}[ui-pnotify].ui-pnotify .brighttheme-icon-sticker:after{content:"\\002016";top:-1px}[ui-pnotify].ui-pnotify .brighttheme-icon-sticker.brighttheme-icon-stuck:after{content:"\\00003E"}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-confirm{margin-top:1rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-prompt-bar{margin-bottom:1rem}[ui-pnotify].ui-pnotify .brighttheme .ui-pnotify-action-button{background:0 0;border:none;cursor:pointer;font-weight:700;padding:.4rem 1rem;text-transform:uppercase}[ui-pnotify].ui-pnotify .brighttheme-notice .ui-pnotify-action-button.brighttheme-primary{background-color:#ff0;color:#4f4f00}[ui-pnotify].ui-pnotify .brighttheme-info .ui-pnotify-action-button.brighttheme-primary{background-color:#0286a5;color:#012831}[ui-pnotify].ui-pnotify .brighttheme-success .ui-pnotify-action-button.brighttheme-primary{background-color:#35db00;color:#104300}[ui-pnotify].ui-pnotify .brighttheme-error .ui-pnotify-action-button.brighttheme-primary{background-color:#ff1800;color:#4f0800}');var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function y(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var a=require("pnotify/dist/umd/PNotifyCompat"),l=(require("pnotify/dist/umd/PNotifyButtons"),function t(e,r){var o,i=[];for(o in e)if(e.hasOwnProperty(o)){var n=r?r+"["+o+"]":o,a=e[o];i.push(null!==a&&"object"===(void 0===a?"undefined":f(a))?t(a,n):encodeURIComponent(n)+"="+encodeURIComponent(a))}return i.join("&")});function m(t){if(!(t instanceof Node&&"FORM"===t.tagName.toUpperCase()))throw new Error("first argument is not HTMLFormElement");for(var e=null!=t.querySelector('[type="file"][name]'),r=e?new FormData:{},o=t.querySelectorAll("[name]"),i=0,n=o.length;i<n;i++){var a=o[i],f=a.getAttribute("name"),u=a.getAttribute("value");if(f)if(a.hasAttribute("type")&&"file"===a.getAttribute("type").toLowerCase()&&r instanceof FormData)for(var c=a.files,p=0,s=c.length;p<s;p++)r.append(f,c[p],c[p].webkitRelativePath?c[p].webkitRelativePath:c[p].name);else a.hasAttribute("type")&&["checkbox","radio"].includes(a.getAttribute("type").toLowerCase())?a.checked&&(e?r.append(f,u):r[f]=u):e?r.append(f,a.value):r[f]=a.value}return r}function d(t,e,r){var o=new a({title:e,text:r,type:t,desktop:{desktop:!1}});o.get().addEventListener("click",function(t){o.remove()})}var u,c,p=(u=regeneratorRuntime.mark(function t(r){var o,i,n,a,f,u,c,p,s,h;return regeneratorRuntime.wrap(function(t){for(var e=this;;)switch(t.prev=t.next){case 0:if(o=m(r.target),"function"!=typeof(i=e.validator)){t.next=18;break}if(t.prev=3,"function"!=typeof(n=i(o)).catch){t.next=9;break}return t.next=8,n;case 8:n=t.sent;case 9:if(!1!==n){t.next=11;break}return t.abrupt("return");case 11:if(n&&n instanceof Object)if(n instanceof Array)d.apply(void 0,y(n));else if(!n.success)for(a in n)d((""+a).toLowerCase(),(""+a).toUpperCase(),""+n[a]);t.next=18;break;case 14:throw t.prev=14,t.t0=t.catch(3),t.t0.message&&d("error","ERROR",t.t0.message),t.t0;case 18:return f=e.method?e.method.toUpperCase():"GET",u=[e.action||location.href,{method:f}],c={Accept:"application/json, */*"},"GET"!==f&&(o instanceof FormData?u[1].body=o:e.json&&"false"!==e.json?(c["Content-Type"]="application/json",u[1].body=JSON.stringify(o)):(u[1].body=l(o),c["Content-Type"]="application/x-www-form-urlencoded")),u[1].headers=c,"function"==typeof e.beforeSend&&e.beforeSend(u),s=p=void 0,t.prev=25,t.next=28,fetch.apply(void 0,u);case 28:return s=t.sent,t.prev=29,t.next=32,s.json();case 32:p=t.sent;try{if(p&&p instanceof Object)if(p.success)"function"==typeof e.success&&e.success(p,s),"string"==typeof p.success&&d("success","SUCCESS",p.success);else for(h in p)d((""+h).toLowerCase(),(""+h).toUpperCase(),""+p[h])}catch(t){}t.next=41;break;case 36:t.prev=36,t.t1=t.catch(29),console.error("vue-auto-form",t.t1),t.t1.message&&d("error","ERROR",t.t1.message),"function"==typeof e.error&&e.error(p,s);case 41:t.next=47;break;case 43:t.prev=43,t.t2=t.catch(25),t.t2.message&&d("error","ERROR",t.t2.message),"function"==typeof e.error&&e.error(t.t2,s);case 47:"function"==typeof e.complete&&e.complete(p,s);case 48:case"end":return t.stop()}},t,this,[[3,14],[25,43],[29,36]])}),c=function(){var f=u.apply(this,arguments);return new Promise(function(n,a){return function e(t,r){try{var o=f[t](r),i=o.value}catch(t){return void a(t)}if(!o.done)return Promise.resolve(i).then(function(t){e("next",t)},function(t){e("throw",t)});n(i)}("next")})},function(t){return c.apply(this,arguments)}),s={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._t("default")],2)},staticRenderFns:[],props:{method:{type:String,required:!1,default:"GET",validator:function(t){return["GET","POST","PUT","DELETE","PATCH"].includes(t.toUpperCase())}},action:{type:String,required:!1},json:{default:!1},validator:{type:Function,required:!1},httpagent:{type:Function,required:!1},success:{type:Function,required:!1},error:{type:Function,required:!1},complete:{type:Function,required:!1},beforeSend:{type:Function,required:!1}},methods:{onSubmit:function(t){p.call(this,t)}}};function h(t,e){t.component("auto-form",s)}var g="1.0.0",b={install:h,version:g};t.install=h,t.version=g,t.default=b,Object.defineProperty(t,"__esModule",{value:!0})});
