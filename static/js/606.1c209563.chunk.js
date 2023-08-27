"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[606],{4216:function(e,t,n){n.d(t,{Z:function(){return p}});var r,o,a,i=n(168),s=n(1109),c=n(9126),u=s.Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: 5px;\n  box-shadow: 2px 2px 3px 1.5px var(--background);\n  outline: none;\n  padding: 10px;\n\n  background-color: var(--button);\n  color: var(--light);\n\n  transition: transform 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: var(--accent);\n    color: var(--background);\n    transform: rotate(5deg);\n  }\n"]))),l=s.Z.div(o||(o=(0,i.Z)(["\n  max-width: 200px;\n  justify-content: center;\n"]))),d=(0,s.Z)(c.boB)(a||(a=(0,i.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),f=n(184),p=function(e){var t=e.movie;return(0,f.jsxs)(u,{children:[t.poster_path?(0,f.jsx)("img",{alt:t.name||t.original_title,src:"http://image.tmdb.org/t/p/w200".concat(t.poster_path)}):(0,f.jsx)(d,{}),(0,f.jsxs)(l,{children:[" ",t.name||t.original_title]})]})}},1606:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var r=n(9439),o=n(2791),a=n(5984),i=n(9142);function s(e,t,n){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=n(3433);function f(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=f(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var p=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=f(e))&&(r&&(r+=" "),r+=t);return r},m=["theme","type"],v=["delay","staleId"],g=function(e){return"number"==typeof e&&!isNaN(e)},h=function(e){return"string"==typeof e},y=function(e){return"function"==typeof e},b=function(e){return h(e)||y(e)?e:null},E=function(e){return(0,o.isValidElement)(e)||h(e)||y(e)||g(e)};function T(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,d.Z)(n)))};(e=t.classList).add.apply(e,(0,d.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};p||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),o.createElement(o.Fragment,null,r)}}function x(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,d.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},O=function(e){var t=e.theme,n=e.type,r=l(e,m);return o.createElement("svg",u({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},_={info:function(e){return o.createElement(O,u({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(O,u({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(O,u({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(O,u({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function C(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),i=(0,r.Z)(a,2),s=i[0],c=i[1],f=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},T=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function O(e){var t=e.containerId;!T.props.limit||t&&T.containerId!==t||(T.count-=T.queue.length,T.queue=[])}function C(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function I(){var e=T.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function k(e,t){var a=t.delay,i=t.staleId,s=l(t,v);if(E(e)&&!function(e){return!f.current||T.props.enableMultiContainer&&e.containerId!==T.props.containerId||p.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,d=s.updateId,m=s.data,O=T.props,k=function(){return C(c)},N=null==d;N&&T.count++;var Z,R,P=u(u(u({},O),{},{style:O.toastStyle,key:T.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,r.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:d,data:m,closeToast:k,isIn:!1,className:b(s.className||O.toastClassName),bodyClassName:b(s.bodyClassName||O.bodyClassName),progressClassName:b(s.progressClassName||O.progressClassName),autoClose:!s.isLoading&&(Z=s.autoClose,R=O.autoClose,!1===Z||g(Z)&&Z>0?Z:R),deleteToast:function(){var e=x(p.get(c),"removed");p.delete(c),w.emit(4,e);var t=T.queue.length;if(T.count=null==c?T.count-T.displayedToast:T.count-1,T.count<0&&(T.count=0),t>0){var r=null==c?T.props.limit:1;if(1===t||1===r)T.displayedToast++,I();else{var o=r>t?t:r;T.displayedToast=o;for(var a=0;a<o;a++)I()}}else n()}});P.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(y(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):h(a)||g(a)?i=a:r?i=_.spinner():function(e){return e in _}(n)&&(i=_[n](s))),i}(P),y(s.onOpen)&&(P.onOpen=s.onOpen),y(s.onClose)&&(P.onClose=s.onClose),P.closeButton=O.closeButton,!1===s.closeButton||E(s.closeButton)?P.closeButton=s.closeButton:!0===s.closeButton&&(P.closeButton=!E(O.closeButton)||O.closeButton);var j=e;(0,o.isValidElement)(e)&&!h(e.type)?j=(0,o.cloneElement)(e,{closeToast:k,toastProps:P,data:m}):y(e)&&(j=e({closeToast:k,toastProps:P,data:m})),O.limit&&O.limit>0&&T.count>O.limit&&N?T.queue.push({toastContent:j,toastProps:P,staleId:i}):g(a)?setTimeout((function(){L(j,P,i)}),a):L(j,P,i)}}function L(e,t,n){var r=t.toastId;n&&p.delete(n);var o={content:e,props:t};p.set(r,o),c((function(e){return[].concat((0,d.Z)(e),[r]).filter((function(e){return e!==n}))})),w.emit(4,x(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return T.containerId=e.containerId,w.cancelEmit(3).on(0,k).on(1,(function(e){return f.current&&C(e)})).on(5,O).emit(2,T),function(){p.clear(),w.emit(3,T)}}),[]),(0,o.useEffect)((function(){T.props=e,T.isToastActive=m,T.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(p.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:f,isToastActive:m}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],i=n[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,b=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",_),document.addEventListener("touchmove",O),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(t.nativeEvent),f.y=k(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?w():x()}}function x(){i(!0)}function w(){i(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&w(),f.x=I(t),f.y=k(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),y(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;y(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",x),window.addEventListener("blur",w)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",w))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(C.onMouseEnter=w,C.onMouseLeave=x),b&&(C.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:x,pauseToast:w,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:C}}function N(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Z(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,i=void 0===a?"default":a,c=e.hide,l=e.className,d=e.style,f=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,h=e.theme,b=c||f&&0===m,E=u(u({},d),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});f&&(E.transform="scaleX(".concat(m,")"));var T=p("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),x=y(l)?l({rtl:v,type:i,defaultClassName:T}):p(T,l);return o.createElement("div",s({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:x,style:E},f&&m>=1?"onTransitionEnd":"onAnimationEnd",f&&m<1?null:function(){g&&r()}))}var R=function(e){var t=L(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,f=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,h=e.position,b=e.className,E=e.style,T=e.bodyClassName,x=e.bodyStyle,w=e.progressClassName,O=e.progressStyle,_=e.updateId,C=e.role,I=e.progress,k=e.rtl,R=e.toastId,P=e.deleteToast,j=e.isIn,S=e.isLoading,M=e.iconOut,D=e.closeOnClick,B=e.theme,A=p("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":D}),z=y(b)?b({rtl:k,position:h,type:f,defaultClassName:A}):p(A,b),F=!!I||!l,H={closeToast:v,type:f,theme:B},U=null;return!1===s||(U=y(s)?s(H):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,H):N(H)),o.createElement(g,{isIn:j,done:P,position:h,preventExitTransition:r,nodeRef:a},o.createElement("div",u(u({id:R,onClick:d,className:z},i),{},{style:E,ref:a}),o.createElement("div",u(u({},j&&{role:C}),{},{className:y(T)?T({type:f}):p("Toastify__toast-body",T),style:x}),null!=M&&o.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},M),o.createElement("div",null,c)),U,o.createElement(Z,u(u({},_&&!F?{key:"pb-".concat(_)}:{}),{},{rtl:k,theme:B,delay:l,isRunning:n,isIn:j,closeToast:v,hide:m,type:f,style:O,className:w,controlledProgress:F,progress:I||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},j=T(P("bounce",!0)),S=(T(P("slide",!0)),T(P("zoom")),T(P("flip")),(0,o.forwardRef)((function(e,t){var n=C(e),r=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,l=e.rtl,d=e.containerId;function f(e){var t=p("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return y(s)?s({position:e,rtl:l,defaultClassName:t}):p(t,b(s))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:d},r((function(e,t){var n=t.length?u({},c):u(u({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(R,u(u({},a),{},{isIn:i(a.toastId),style:u(u({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),r)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,D=new Map,B=[],A=1;function z(){return""+A++}function F(e){return e&&(h(e.toastId)||g(e.toastId))?e.toastId:z()}function H(e,t){return D.size>0?w.emit(0,e,t):B.push({content:e,options:t}),t.toastId}function U(e,t){return u(u({},t),{},{type:t&&t.type||e,toastId:F(t)})}function q(e){return function(t,n){return H(t,U(e,n))}}function Q(e,t){return H(e,U("default",t))}Q.loading=function(e,t){return H(e,U("default",u({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=h(o)?Q.loading(o,n):Q.loading(o.render,u(u({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=u(u(u({type:e},s),n),{},{data:o}),i=h(t)?{render:t}:t;return r?Q.update(r,u(u({},a),i)):Q(i.render,u(u({},a),i)),o}Q.dismiss(r)},l=y(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=function(e,t){return H(e,U("default",u({theme:"dark"},t)))},Q.dismiss=function(e){D.size>0?w.emit(1,e):B=B.filter((function(t){return null!=e&&t.options.toastId!==e}))},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},Q.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=D.get(n||M);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=u(u(u({delay:100},r),t),{},{toastId:t.toastId||e,updateId:z()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,H(i,a)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){M=e.containerId||e,D.set(M,e),B.forEach((function(e){w.emit(0,e.content,e.options)})),B=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&w.off(0).off(1).off(5)}));var V,G,W,X=n(6124),Y=n(1087),K=n(4216),J=n(8367),$=n(168),ee=n(1109),te=ee.Z.ul(V||(V=(0,$.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n\n  padding: 20px 30px;\n"]))),ne=n(184),re=(0,X.b)(),oe=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],d=(0,o.useState)(!1),f=(0,r.Z)(d,2),p=f[0],m=f[1];return(0,o.useEffect)((function(){l(!0),re.getTrendingMovies().then((function(e){if(0===e.length)throw Error();i(e)})).catch((function(e){m(!0),console.log(e)})).finally((function(){return l(!1)}))}),[]),p&&Q.error("Sorry, something went wrong. Please try again.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),u?(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("h1",{children:"Trending list is loading..."}),(0,ne.jsx)(J.Z,{})]}):(0,ne.jsx)(ne.Fragment,{children:(0,ne.jsx)(te,{children:n.map((function(e){var t=(0,a.x0)();return(0,ne.jsx)(Y.rU,{to:"movies/".concat(e.id),children:(0,ne.jsx)(K.Z,{movie:e})},t)}))})})},ae=ee.Z.h1(G||(G=(0,$.Z)(["\n  /* display: inline; */\n  align-self: center;\n  padding: 30px 30px;\n  margin: 0 auto;\n  border: 0.5px solid var(--background);\n\n  text-align: center;\n  max-width: 300px;\n  box-shadow: 50px -16px var(--background);\n"]))),ie=ee.Z.section(W||(W=(0,$.Z)(["\n  margin: 0 auto;\n  padding: 30px 30px;\n"]))),se=function(){return(0,ne.jsxs)(ie,{children:[(0,ne.jsx)(ae,{children:"TRENDING MOVIES"}),(0,ne.jsx)(oe,{})]})}},6124:function(e,t,n){n.d(t,{b:function(){return h}});var r=n(5861),o=n(4687),a=n.n(o),i=n(1243),s=n(1686),c="713e88f7db14c265e0543f2dd0843d0c",u="https://api.themoviedb.org/3/",l="trending/all/day",d="search/movie";i.Z.defaults.baseURL=u;var f=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get(l,{params:{api_key:c,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),s.Notify.failure("Sorry, something went wrong. Please try again."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get(d,{params:{api_key:c,language:"en-US",query:t}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),s.Notify.failure("Sorry, something went wrong. Please try again."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t),{params:{api_key:c,language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),s.Notify.failure("Sorry, we can't find any information about this movie :("),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),s.Notify.failure("Sorry, we can't find this actor."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),s.Notify.failure("Sorry, no one has written a review yet."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){return{getTrendingMovies:f,getMovieBySearch:p,getOneMovie:m,getActors:v,getReviews:g}}}}]);
//# sourceMappingURL=606.1c209563.chunk.js.map