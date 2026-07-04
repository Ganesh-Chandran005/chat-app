(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Th={exports:{}},la={},Ih={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Gv(){if(um)return Ie;um=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),P=Symbol.iterator;function V(O){return O===null||typeof O!="object"?null:(O=P&&O[P]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function $(O,j,ae){this.props=O,this.context=j,this.refs=Y,this.updater=ae||z}$.prototype.isReactComponent={},$.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},$.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function me(){}me.prototype=$.prototype;function _e(O,j,ae){this.props=O,this.context=j,this.refs=Y,this.updater=ae||z}var ve=_e.prototype=new me;ve.constructor=_e,Q(ve,$.prototype),ve.isPureReactComponent=!0;var we=Array.isArray,He=Object.prototype.hasOwnProperty,Se={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(O,j,ae){var Ee,Te={},Ce=null,xe=null;if(j!=null)for(Ee in j.ref!==void 0&&(xe=j.ref),j.key!==void 0&&(Ce=""+j.key),j)He.call(j,Ee)&&!N.hasOwnProperty(Ee)&&(Te[Ee]=j[Ee]);var Le=arguments.length-2;if(Le===1)Te.children=ae;else if(1<Le){for(var ze=Array(Le),pt=0;pt<Le;pt++)ze[pt]=arguments[pt+2];Te.children=ze}if(O&&O.defaultProps)for(Ee in Le=O.defaultProps,Le)Te[Ee]===void 0&&(Te[Ee]=Le[Ee]);return{$$typeof:i,type:O,key:Ce,ref:xe,props:Te,_owner:Se.current}}function A(O,j){return{$$typeof:i,type:O.type,key:j,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return j[ae]})}var x=/\/+/g;function S(O,j){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):j.toString(36)}function et(O,j,ae,Ee,Te){var Ce=typeof O;(Ce==="undefined"||Ce==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(Ce){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case i:case e:xe=!0}}if(xe)return xe=O,Te=Te(xe),O=Ee===""?"."+S(xe,0):Ee,we(Te)?(ae="",O!=null&&(ae=O.replace(x,"$&/")+"/"),et(Te,j,ae,"",function(pt){return pt})):Te!=null&&(C(Te)&&(Te=A(Te,ae+(!Te.key||xe&&xe.key===Te.key?"":(""+Te.key).replace(x,"$&/")+"/")+O)),j.push(Te)),1;if(xe=0,Ee=Ee===""?".":Ee+":",we(O))for(var Le=0;Le<O.length;Le++){Ce=O[Le];var ze=Ee+S(Ce,Le);xe+=et(Ce,j,ae,ze,Te)}else if(ze=V(O),typeof ze=="function")for(O=ze.call(O),Le=0;!(Ce=O.next()).done;)Ce=Ce.value,ze=Ee+S(Ce,Le++),xe+=et(Ce,j,ae,ze,Te);else if(Ce==="object")throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return xe}function Ct(O,j,ae){if(O==null)return O;var Ee=[],Te=0;return et(O,Ee,"","",function(Ce){return j.call(ae,Ce,Te++)}),Ee}function kt(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},J={transition:null},ue={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Se};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:Ct,forEach:function(O,j,ae){Ct(O,function(){j.apply(this,arguments)},ae)},count:function(O){var j=0;return Ct(O,function(){j++}),j},toArray:function(O){return Ct(O,function(j){return j})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ie.Component=$,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=_e,Ie.StrictMode=s,Ie.Suspense=y,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ie.act=ee,Ie.cloneElement=function(O,j,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ee=Q({},O.props),Te=O.key,Ce=O.ref,xe=O._owner;if(j!=null){if(j.ref!==void 0&&(Ce=j.ref,xe=Se.current),j.key!==void 0&&(Te=""+j.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for(ze in j)He.call(j,ze)&&!N.hasOwnProperty(ze)&&(Ee[ze]=j[ze]===void 0&&Le!==void 0?Le[ze]:j[ze])}var ze=arguments.length-2;if(ze===1)Ee.children=ae;else if(1<ze){Le=Array(ze);for(var pt=0;pt<ze;pt++)Le[pt]=arguments[pt+2];Ee.children=Le}return{$$typeof:i,type:O.type,key:Te,ref:Ce,props:Ee,_owner:xe}},Ie.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ie.createElement=I,Ie.createFactory=function(O){var j=I.bind(null,O);return j.type=O,j},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(O){return{$$typeof:m,render:O}},Ie.isValidElement=C,Ie.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:kt}},Ie.memo=function(O,j){return{$$typeof:v,type:O,compare:j===void 0?null:j}},Ie.startTransition=function(O){var j=J.transition;J.transition={};try{O()}finally{J.transition=j}},Ie.unstable_act=ee,Ie.useCallback=function(O,j){return Ue.current.useCallback(O,j)},Ie.useContext=function(O){return Ue.current.useContext(O)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Ie.useEffect=function(O,j){return Ue.current.useEffect(O,j)},Ie.useId=function(){return Ue.current.useId()},Ie.useImperativeHandle=function(O,j,ae){return Ue.current.useImperativeHandle(O,j,ae)},Ie.useInsertionEffect=function(O,j){return Ue.current.useInsertionEffect(O,j)},Ie.useLayoutEffect=function(O,j){return Ue.current.useLayoutEffect(O,j)},Ie.useMemo=function(O,j){return Ue.current.useMemo(O,j)},Ie.useReducer=function(O,j,ae){return Ue.current.useReducer(O,j,ae)},Ie.useRef=function(O){return Ue.current.useRef(O)},Ie.useState=function(O){return Ue.current.useState(O)},Ie.useSyncExternalStore=function(O,j,ae){return Ue.current.useSyncExternalStore(O,j,ae)},Ie.useTransition=function(){return Ue.current.useTransition()},Ie.version="18.3.1",Ie}var cm;function ld(){return cm||(cm=1,Ih.exports=Gv()),Ih.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Qv(){if(hm)return la;hm=1;var i=ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var w,P={},V=null,z=null;v!==void 0&&(V=""+v),y.key!==void 0&&(V=""+y.key),y.ref!==void 0&&(z=y.ref);for(w in y)s.call(y,w)&&!u.hasOwnProperty(w)&&(P[w]=y[w]);if(m&&m.defaultProps)for(w in y=m.defaultProps,y)P[w]===void 0&&(P[w]=y[w]);return{$$typeof:e,type:m,key:V,ref:z,props:P,_owner:o.current}}return la.Fragment=t,la.jsx=h,la.jsxs=h,la}var dm;function Yv(){return dm||(dm=1,Th.exports=Qv()),Th.exports}var Ze=Yv(),mr=ld(),nu={},Sh={exports:{}},Yt={},Ah={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function Xv(){return fm||(fm=1,(function(i){function e(J,ue){var ee=J.length;J.push(ue);e:for(;0<ee;){var O=ee-1>>>1,j=J[O];if(0<o(j,ue))J[O]=ue,J[ee]=j,ee=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ue=J[0],ee=J.pop();if(ee!==ue){J[0]=ee;e:for(var O=0,j=J.length,ae=j>>>1;O<ae;){var Ee=2*(O+1)-1,Te=J[Ee],Ce=Ee+1,xe=J[Ce];if(0>o(Te,ee))Ce<j&&0>o(xe,Te)?(J[O]=xe,J[Ce]=ee,O=Ce):(J[O]=Te,J[Ee]=ee,O=Ee);else if(Ce<j&&0>o(xe,ee))J[O]=xe,J[Ce]=ee,O=Ce;else break e}}return ue}function o(J,ue){var ee=J.sortIndex-ue.sortIndex;return ee!==0?ee:J.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],w=1,P=null,V=3,z=!1,Q=!1,Y=!1,$=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(J){for(var ue=t(v);ue!==null;){if(ue.callback===null)s(v);else if(ue.startTime<=J)s(v),ue.sortIndex=ue.expirationTime,e(y,ue);else break;ue=t(v)}}function we(J){if(Y=!1,ve(J),!Q)if(t(y)!==null)Q=!0,kt(He);else{var ue=t(v);ue!==null&&Ue(we,ue.startTime-J)}}function He(J,ue){Q=!1,Y&&(Y=!1,me(I),I=-1),z=!0;var ee=V;try{for(ve(ue),P=t(y);P!==null&&(!(P.expirationTime>ue)||J&&!D());){var O=P.callback;if(typeof O=="function"){P.callback=null,V=P.priorityLevel;var j=O(P.expirationTime<=ue);ue=i.unstable_now(),typeof j=="function"?P.callback=j:P===t(y)&&s(y),ve(ue)}else s(y);P=t(y)}if(P!==null)var ae=!0;else{var Ee=t(v);Ee!==null&&Ue(we,Ee.startTime-ue),ae=!1}return ae}finally{P=null,V=ee,z=!1}}var Se=!1,N=null,I=-1,A=5,C=-1;function D(){return!(i.unstable_now()-C<A)}function x(){if(N!==null){var J=i.unstable_now();C=J;var ue=!0;try{ue=N(!0,J)}finally{ue?S():(Se=!1,N=null)}}else Se=!1}var S;if(typeof _e=="function")S=function(){_e(x)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Ct=et.port2;et.port1.onmessage=x,S=function(){Ct.postMessage(null)}}else S=function(){$(x,0)};function kt(J){N=J,Se||(Se=!0,S())}function Ue(J,ue){I=$(function(){J(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Q||z||(Q=!0,kt(He))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return V},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(J){switch(V){case 1:case 2:case 3:var ue=3;break;default:ue=V}var ee=V;V=ue;try{return J()}finally{V=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ue){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=V;V=J;try{return ue()}finally{V=ee}},i.unstable_scheduleCallback=function(J,ue,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,J){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,J={id:w++,callback:ue,priorityLevel:J,startTime:ee,expirationTime:j,sortIndex:-1},ee>O?(J.sortIndex=ee,e(v,J),t(y)===null&&J===t(v)&&(Y?(me(I),I=-1):Y=!0,Ue(we,ee-O))):(J.sortIndex=j,e(y,J),Q||z||(Q=!0,kt(He))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var ue=V;return function(){var ee=V;V=ue;try{return J.apply(this,arguments)}finally{V=ee}}}})(Rh)),Rh}var pm;function Jv(){return pm||(pm=1,Ah.exports=Xv()),Ah.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function Zv(){if(mm)return Yt;mm=1;var i=ld(),e=Jv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},P={};function V(n){return y.call(P,n)?!0:y.call(w,n)?!1:v.test(n)?P[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Q(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];$[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function _e(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,_e);$[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,_e);$[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,_e);$[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ve(n,r,a,c){var d=$.hasOwnProperty(r)?$[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Q(r,a,d,c)&&(a=null),c||d===null?V(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),Se=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,O;function j(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ae=!1;function Ee(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(U){var c=U}Reflect.construct(n,[],r)}else{try{r.call()}catch(U){c=U}n.call(r.prototype)}else{try{throw Error()}catch(U){c=U}n()}}catch(U){if(U&&c&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function Te(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Se:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ct:return r=n.displayName||null,r!==null?r:Ce(n.type)||"Memo";case kt:r=n._payload,n=n._init;try{return Ce(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(n){var r=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Xn(n){n._valueTracker||(n._valueTracker=pt(n))}function Ji(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ci(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Zi(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function po(n,r){r=r.checked,r!=null&&ve(n,"checked",r,!1)}function mo(n,r){po(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?es(n,r.type,a):r.hasOwnProperty("defaultValue")&&es(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function ja(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function es(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Jn=Array.isArray;function Zn(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function go(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ts(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Jn(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function ns(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function yo(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var er,_o=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=er.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Cr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},di=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(n){di.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),hi[r]=hi[n]})});function vo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||hi.hasOwnProperty(n)&&hi[n]?(""+r).trim():r+"px"}function Eo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=vo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var wo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function To(n,r){if(r){if(wo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Io(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function rs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var is=null,on=null,Ln=null;function ss(n){if(n=Ko(n)){if(typeof is!="function")throw Error(t(280));var r=n.stateNode;r&&(r=yl(r),is(n.stateNode,n.type,r))}}function Mn(n){on?Ln?Ln.push(n):Ln=[n]:on=n}function So(){if(on){var n=on,r=Ln;if(Ln=on=null,ss(n),r)for(n=0;n<r.length;n++)ss(r[n])}}function pi(n,r){return n(r)}function Ao(){}var tr=!1;function Ro(n,r,a){if(tr)return n(r,a);tr=!0;try{return pi(n,r,a)}finally{tr=!1,(on!==null||Ln!==null)&&(Ao(),So())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=yl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var os=!1;if(m)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){os=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{os=!1}function mi(n,r,a,c,d,p,_,T,R){var U=Array.prototype.slice.call(arguments,3);try{r.apply(a,U)}catch(W){this.onError(W)}}var gi=!1,as=null,_n=!1,Po=null,Yu={onError:function(n){gi=!0,as=n}};function ls(n,r,a,c,d,p,_,T,R){gi=!1,as=null,mi.apply(Yu,arguments)}function Ba(n,r,a,c,d,p,_,T,R){if(ls.apply(this,arguments),gi){if(gi){var U=as;gi=!1,as=null}else throw Error(t(198));_n||(_n=!0,Po=U)}}function vn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function yi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function En(n){if(vn(n)!==n)throw Error(t(188))}function $a(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return En(d),n;if(p===c)return En(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Co(n){return n=$a(n),n!==null?us(n):null}function us(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=us(n);if(r!==null)return r;n=n.sibling}return null}var cs=e.unstable_scheduleCallback,ko=e.unstable_cancelCallback,qa=e.unstable_shouldYield,Xu=e.unstable_requestPaint,je=e.unstable_now,Wa=e.unstable_getCurrentPriorityLevel,_i=e.unstable_ImmediatePriority,kr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,No=e.unstable_LowPriority,Ha=e.unstable_IdlePriority,vi=null,Xt=null;function Ka(n){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(vi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Qa,Do=Math.log,Ga=Math.LN2;function Qa(n){return n>>>=0,n===0?32:31-(Do(n)/Ga|0)|0}var hs=64,ds=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ei(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Nr(T):(p&=_,p!==0&&(c=Nr(p)))}else _=a&~d,_!==0?c=Nr(_):p!==0&&(c=Nr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function Ju(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,R=d[_];R===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Ju(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wi(){var n=hs;return hs<<=1,(hs&4194240)===0&&(hs=64),n}function Dr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Vr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function be(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Re=0;function xr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ya,fs,Xa,Ja,Za,Vo=!1,Fn=[],Et=null,wn=null,Tn=null,Lr=new Map,ln=new Map,Un=[],Zu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function el(n,r){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Ko(r),r!==null&&fs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function ec(n,r,a,c,d){switch(r){case"focusin":return Et=$t(Et,n,r,a,c,d),!0;case"dragenter":return wn=$t(wn,n,r,a,c,d),!0;case"mouseover":return Tn=$t(Tn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Lr.set(p,$t(Lr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ln.set(p,$t(ln.get(p)||null,n,r,a,c,d)),!0}return!1}function tl(n){var r=Ri(n.target);if(r!==null){var a=vn(r);if(a!==null){if(r=a.tag,r===13){if(r=yi(a),r!==null){n.blockedOn=r,Za(n.priority,function(){Xa(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ps(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);fi=c,a.target.dispatchEvent(c),fi=null}else return r=Ko(a),r!==null&&fs(r),n.blockedOn=a,!1;r.shift()}return!0}function Ti(n,r,a){rr(n)&&a.delete(r)}function nl(){Vo=!1,Et!==null&&rr(Et)&&(Et=null),wn!==null&&rr(wn)&&(wn=null),Tn!==null&&rr(Tn)&&(Tn=null),Lr.forEach(Ti),ln.forEach(Ti)}function In(n,r){n.blockedOn===r&&(n.blockedOn=null,Vo||(Vo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nl)))}function Sn(n){function r(d){return In(d,n)}if(0<Fn.length){In(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Et!==null&&In(Et,n),wn!==null&&In(wn,n),Tn!==null&&In(Tn,n),Lr.forEach(r),ln.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)tl(a),a.blockedOn===null&&Un.shift()}var ir=we.ReactCurrentBatchConfig,Mr=!0;function Ke(n,r,a,c){var d=Re,p=ir.transition;ir.transition=null;try{Re=1,Oo(n,r,a,c)}finally{Re=d,ir.transition=p}}function tc(n,r,a,c){var d=Re,p=ir.transition;ir.transition=null;try{Re=4,Oo(n,r,a,c)}finally{Re=d,ir.transition=p}}function Oo(n,r,a,c){if(Mr){var d=ps(n,r,a,c);if(d===null)dc(n,r,c,Ii,a),el(n,c);else if(ec(d,n,r,a,c))c.stopPropagation();else if(el(n,c),r&4&&-1<Zu.indexOf(n)){for(;d!==null;){var p=Ko(d);if(p!==null&&Ya(p),p=ps(n,r,a,c),p===null&&dc(n,r,c,Ii,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else dc(n,r,c,null,a)}}var Ii=null;function ps(n,r,a,c){if(Ii=null,n=rs(c),n=Ri(n),n!==null)if(r=vn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=yi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ii=n,null}function xo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wa()){case _i:return 1;case kr:return 4;case an:case No:return 16;case Ha:return 536870912;default:return 16}default:return 16}}var Zt=null,ms=null,qt=null;function Lo(){if(qt)return qt;var n,r=ms,a=r.length,c,d="value"in Zt?Zt.value:Zt.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function gs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function bn(){return!0}function Mo(){return!1}function wt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?bn:Mo,this.isPropagationStopped=Mo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),r}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=wt(An),zn=ee({},An,{view:0,detail:0}),nc=wt(zn),_s,sr,Fr,Si=ee({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(_s=n.screenX-Fr.screenX,sr=n.screenY-Fr.screenY):sr=_s=0,Fr=n),_s)},movementY:function(n){return"movementY"in n?n.movementY:sr}}),vs=wt(Si),Fo=ee({},Si,{dataTransfer:0}),rl=wt(Fo),Es=ee({},zn,{relatedTarget:0}),ws=wt(Es),il=ee({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),or=wt(il),sl=ee({},An,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ol=wt(sl),al=ee({},An,{data:0}),Uo=wt(al),Ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ll={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ul(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ll[n])?!!r[n]:!1}function jn(){return ul}var l=ee({},zn,{key:function(n){if(n.key){var r=Ts[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=gs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(n){return n.type==="keypress"?gs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?gs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=wt(l),g=ee({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=wt(g),L=ee({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn}),b=wt(L),X=ee({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Me=wt(X),ct=ee({},Si,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ke=wt(ct),mt=[9,13,27,32],it=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var en=m&&"TextEvent"in window&&!un,Ai=m&&(!it||un&&8<un&&11>=un),Is=" ",nf=!1;function rf(n,r){switch(n){case"keyup":return mt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function W_(n,r){switch(n){case"compositionend":return sf(r);case"keypress":return r.which!==32?null:(nf=!0,Is);case"textInput":return n=r.data,n===Is&&nf?null:n;default:return null}}function H_(n,r){if(Ss)return n==="compositionend"||!it&&rf(n,r)?(n=Lo(),qt=ms=Zt=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ai&&r.locale!=="ko"?null:r.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function of(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!K_[n.type]:r==="textarea"}function af(n,r,a,c){Mn(c),r=pl(r,"onChange"),0<r.length&&(a=new ys("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var bo=null,zo=null;function G_(n){Af(n,0)}function cl(n){var r=ks(n);if(Ji(r))return n}function Q_(n,r){if(n==="change")return r}var lf=!1;if(m){var rc;if(m){var ic="oninput"in document;if(!ic){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),ic=typeof uf.oninput=="function"}rc=ic}else rc=!1;lf=rc&&(!document.documentMode||9<document.documentMode)}function cf(){bo&&(bo.detachEvent("onpropertychange",hf),zo=bo=null)}function hf(n){if(n.propertyName==="value"&&cl(zo)){var r=[];af(r,zo,n,rs(n)),Ro(G_,r)}}function Y_(n,r,a){n==="focusin"?(cf(),bo=r,zo=a,bo.attachEvent("onpropertychange",hf)):n==="focusout"&&cf()}function X_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return cl(zo)}function J_(n,r){if(n==="click")return cl(r)}function Z_(n,r){if(n==="input"||n==="change")return cl(r)}function ev(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Rn=typeof Object.is=="function"?Object.is:ev;function jo(n,r){if(Rn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!y.call(r,d)||!Rn(n[d],r[d]))return!1}return!0}function df(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ff(n,r){var a=df(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=df(a)}}function pf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?pf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function mf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function sc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function tv(n){var r=mf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&pf(a.ownerDocument.documentElement,a)){if(c!==null&&sc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=ff(a,p);var _=ff(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nv=m&&"documentMode"in document&&11>=document.documentMode,As=null,oc=null,Bo=null,ac=!1;function gf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ac||As==null||As!==Pr(c)||(c=As,"selectionStart"in c&&sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Bo&&jo(Bo,c)||(Bo=c,c=pl(oc,"onSelect"),0<c.length&&(r=new ys("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=As)))}function hl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Rs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},lc={},yf={};m&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function dl(n){if(lc[n])return lc[n];if(!Rs[n])return n;var r=Rs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in yf)return lc[n]=r[a];return n}var _f=dl("animationend"),vf=dl("animationiteration"),Ef=dl("animationstart"),wf=dl("transitionend"),Tf=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){Tf.set(n,r),u(r,[n])}for(var uc=0;uc<If.length;uc++){var cc=If[uc],rv=cc.toLowerCase(),iv=cc[0].toUpperCase()+cc.slice(1);Ur(rv,"on"+iv)}Ur(_f,"onAnimationEnd"),Ur(vf,"onAnimationIteration"),Ur(Ef,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(wf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function Sf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Ba(c,r,void 0,n),n.currentTarget=null}function Af(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,U=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;Sf(d,T,U),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,U=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;Sf(d,T,U),p=R}}}if(_n)throw n=Po,_n=!1,Po=null,n}function $e(n,r){var a=r[_c];a===void 0&&(a=r[_c]=new Set);var c=n+"__bubble";a.has(c)||(Rf(r,n,2,!1),a.add(c))}function hc(n,r,a){var c=0;r&&(c|=4),Rf(a,n,c,r)}var fl="_reactListening"+Math.random().toString(36).slice(2);function qo(n){if(!n[fl]){n[fl]=!0,s.forEach(function(a){a!=="selectionchange"&&(sv.has(a)||hc(a,!1,n),hc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[fl]||(r[fl]=!0,hc("selectionchange",!1,r))}}function Rf(n,r,a,c){switch(xo(r)){case 1:var d=Ke;break;case 4:d=tc;break;default:d=Oo}a=d.bind(null,r,a,n),d=void 0,!os||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function dc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Ri(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Ro(function(){var U=p,W=rs(a),K=[];e:{var q=Tf.get(n);if(q!==void 0){var Z=ys,ne=n;switch(n){case"keypress":if(gs(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":ne="focus",Z=ws;break;case"focusout":ne="blur",Z=ws;break;case"beforeblur":case"afterblur":Z=ws;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=b;break;case _f:case vf:case Ef:Z=or;break;case wf:Z=Me;break;case"scroll":Z=nc;break;case"wheel":Z=ke;break;case"copy":case"cut":case"paste":Z=ol;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,nt=!ie&&n==="scroll",M=ie?q!==null?q+"Capture":null:q;ie=[];for(var k=U,F;k!==null;){F=k;var G=F.stateNode;if(F.tag===5&&G!==null&&(F=G,M!==null&&(G=tt(k,M),G!=null&&ie.push(Wo(k,G,F)))),nt)break;k=k.return}0<ie.length&&(q=new Z(q,ne,null,a,W),K.push({event:q,listeners:ie}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",q&&a!==fi&&(ne=a.relatedTarget||a.fromElement)&&(Ri(ne)||ne[ar]))break e;if((Z||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,Z?(ne=a.relatedTarget||a.toElement,Z=U,ne=ne?Ri(ne):null,ne!==null&&(nt=vn(ne),ne!==nt||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(Z=null,ne=U),Z!==ne)){if(ie=vs,G="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,G="onPointerLeave",M="onPointerEnter",k="pointer"),nt=Z==null?q:ks(Z),F=ne==null?q:ks(ne),q=new ie(G,k+"leave",Z,a,W),q.target=nt,q.relatedTarget=F,G=null,Ri(W)===U&&(ie=new ie(M,k+"enter",ne,a,W),ie.target=F,ie.relatedTarget=nt,G=ie),nt=G,Z&&ne)t:{for(ie=Z,M=ne,k=0,F=ie;F;F=Ps(F))k++;for(F=0,G=M;G;G=Ps(G))F++;for(;0<k-F;)ie=Ps(ie),k--;for(;0<F-k;)M=Ps(M),F--;for(;k--;){if(ie===M||M!==null&&ie===M.alternate)break t;ie=Ps(ie),M=Ps(M)}ie=null}else ie=null;Z!==null&&Pf(K,q,Z,ie,!1),ne!==null&&nt!==null&&Pf(K,nt,ne,ie,!0)}}e:{if(q=U?ks(U):window,Z=q.nodeName&&q.nodeName.toLowerCase(),Z==="select"||Z==="input"&&q.type==="file")var oe=Q_;else if(of(q))if(lf)oe=Z_;else{oe=X_;var ce=Y_}else(Z=q.nodeName)&&Z.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(oe=J_);if(oe&&(oe=oe(n,U))){af(K,oe,a,W);break e}ce&&ce(n,q,U),n==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&es(q,"number",q.value)}switch(ce=U?ks(U):window,n){case"focusin":(of(ce)||ce.contentEditable==="true")&&(As=ce,oc=U,Bo=null);break;case"focusout":Bo=oc=As=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,gf(K,a,W);break;case"selectionchange":if(nv)break;case"keydown":case"keyup":gf(K,a,W)}var he;if(it)e:{switch(n){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Ss?rf(n,a)&&(de="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(Ai&&a.locale!=="ko"&&(Ss||de!=="onCompositionStart"?de==="onCompositionEnd"&&Ss&&(he=Lo()):(Zt=W,ms="value"in Zt?Zt.value:Zt.textContent,Ss=!0)),ce=pl(U,de),0<ce.length&&(de=new Uo(de,n,null,a,W),K.push({event:de,listeners:ce}),he?de.data=he:(he=sf(a),he!==null&&(de.data=he)))),(he=en?W_(n,a):H_(n,a))&&(U=pl(U,"onBeforeInput"),0<U.length&&(W=new Uo("onBeforeInput","beforeinput",null,a,W),K.push({event:W,listeners:U}),W.data=he))}Af(K,r)})}function Wo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function pl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Wo(n,p,d)),p=tt(n,r),p!=null&&c.push(Wo(n,p,d))),n=n.return}return c}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,U=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&U!==null&&(T=U,d?(R=tt(a,p),R!=null&&_.unshift(Wo(a,R,T))):d||(R=tt(a,p),R!=null&&_.push(Wo(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var ov=/\r\n?/g,av=/\u0000|\uFFFD/g;function Cf(n){return(typeof n=="string"?n:""+n).replace(ov,`
`).replace(av,"")}function ml(n,r,a){if(r=Cf(r),Cf(n)!==r&&a)throw Error(t(425))}function gl(){}var fc=null,pc=null;function mc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,lv=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,uv=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(n){return kf.resolve(null).then(n).catch(cv)}:gc;function cv(n){setTimeout(function(){throw n})}function yc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Sn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Sn(r)}function br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Nf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Cs,Ho="__reactProps$"+Cs,ar="__reactContainer$"+Cs,_c="__reactEvents$"+Cs,hv="__reactListeners$"+Cs,dv="__reactHandles$"+Cs;function Ri(n){var r=n[Bn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[ar]||a[Bn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Nf(n);n!==null;){if(a=n[Bn])return a;n=Nf(n)}return r}n=a,a=n.parentNode}return null}function Ko(n){return n=n[Bn]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function yl(n){return n[Ho]||null}var vc=[],Ns=-1;function zr(n){return{current:n}}function qe(n){0>Ns||(n.current=vc[Ns],vc[Ns]=null,Ns--)}function Be(n,r){Ns++,vc[Ns]=n.current,n.current=r}var jr={},Nt=zr(jr),Wt=zr(!1),Pi=jr;function Ds(n,r){var a=n.type.contextTypes;if(!a)return jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function _l(){qe(Wt),qe(Nt)}function Df(n,r,a){if(Nt.current!==jr)throw Error(t(168));Be(Nt,r),Be(Wt,a)}function Vf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,xe(n)||"Unknown",d));return ee({},a,c)}function vl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,Pi=Nt.current,Be(Nt,n),Be(Wt,Wt.current),!0}function Of(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Vf(n,r,Pi),c.__reactInternalMemoizedMergedChildContext=n,qe(Wt),qe(Nt),Be(Nt,n)):qe(Wt),Be(Wt,a)}var lr=null,El=!1,Ec=!1;function xf(n){lr===null?lr=[n]:lr.push(n)}function fv(n){El=!0,xf(n)}function Br(){if(!Ec&&lr!==null){Ec=!0;var n=0,r=Re;try{var a=lr;for(Re=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}lr=null,El=!1}catch(d){throw lr!==null&&(lr=lr.slice(n+1)),cs(_i,Br),d}finally{Re=r,Ec=!1}}return null}var Vs=[],Os=0,wl=null,Tl=0,cn=[],hn=0,Ci=null,ur=1,cr="";function ki(n,r){Vs[Os++]=Tl,Vs[Os++]=wl,wl=n,Tl=r}function Lf(n,r,a){cn[hn++]=ur,cn[hn++]=cr,cn[hn++]=Ci,Ci=n;var c=ur;n=cr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,ur=1<<32-Ut(r)+d|a<<d|c,cr=p+n}else ur=1<<p|a<<d|c,cr=n}function wc(n){n.return!==null&&(ki(n,1),Lf(n,1,0))}function Tc(n){for(;n===wl;)wl=Vs[--Os],Vs[Os]=null,Tl=Vs[--Os],Vs[Os]=null;for(;n===Ci;)Ci=cn[--hn],cn[hn]=null,cr=cn[--hn],cn[hn]=null,ur=cn[--hn],cn[hn]=null}var tn=null,nn=null,Ge=!1,Pn=null;function Mf(n,r){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Ff(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,tn=n,nn=br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,tn=n,nn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Ci!==null?{id:ur,overflow:cr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,tn=n,nn=null,!0):!1;default:return!1}}function Ic(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Sc(n){if(Ge){var r=nn;if(r){var a=r;if(!Ff(n,r)){if(Ic(n))throw Error(t(418));r=br(a.nextSibling);var c=tn;r&&Ff(n,r)?Mf(c,a):(n.flags=n.flags&-4097|2,Ge=!1,tn=n)}}else{if(Ic(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,tn=n}}}function Uf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;tn=n}function Il(n){if(n!==tn)return!1;if(!Ge)return Uf(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!mc(n.type,n.memoizedProps)),r&&(r=nn)){if(Ic(n))throw bf(),Error(t(418));for(;r;)Mf(n,r),r=br(r.nextSibling)}if(Uf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){nn=br(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}nn=null}}else nn=tn?br(n.stateNode.nextSibling):null;return!0}function bf(){for(var n=nn;n;)n=br(n.nextSibling)}function xs(){nn=tn=null,Ge=!1}function Ac(n){Pn===null?Pn=[n]:Pn.push(n)}var pv=we.ReactCurrentBatchConfig;function Go(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Sl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function zf(n){var r=n._init;return r(n._payload)}function jf(n){function r(M,k){if(n){var F=M.deletions;F===null?(M.deletions=[k],M.flags|=16):F.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=Yr(M,k),M.index=0,M.sibling=null,M}function p(M,k,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<k?(M.flags|=2,k):F):(M.flags|=2,k)):(M.flags|=1048576,k)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,F,G){return k===null||k.tag!==6?(k=gh(F,M.mode,G),k.return=M,k):(k=d(k,F),k.return=M,k)}function R(M,k,F,G){var oe=F.type;return oe===N?W(M,k,F.props.children,G,F.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&zf(oe)===k.type)?(G=d(k,F.props),G.ref=Go(M,k,F),G.return=M,G):(G=Gl(F.type,F.key,F.props,null,M.mode,G),G.ref=Go(M,k,F),G.return=M,G)}function U(M,k,F,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==F.containerInfo||k.stateNode.implementation!==F.implementation?(k=yh(F,M.mode,G),k.return=M,k):(k=d(k,F.children||[]),k.return=M,k)}function W(M,k,F,G,oe){return k===null||k.tag!==7?(k=Fi(F,M.mode,G,oe),k.return=M,k):(k=d(k,F),k.return=M,k)}function K(M,k,F){if(typeof k=="string"&&k!==""||typeof k=="number")return k=gh(""+k,M.mode,F),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case He:return F=Gl(k.type,k.key,k.props,null,M.mode,F),F.ref=Go(M,null,k),F.return=M,F;case Se:return k=yh(k,M.mode,F),k.return=M,k;case kt:var G=k._init;return K(M,G(k._payload),F)}if(Jn(k)||ue(k))return k=Fi(k,M.mode,F,null),k.return=M,k;Sl(M,k)}return null}function q(M,k,F,G){var oe=k!==null?k.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:T(M,k,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case He:return F.key===oe?R(M,k,F,G):null;case Se:return F.key===oe?U(M,k,F,G):null;case kt:return oe=F._init,q(M,k,oe(F._payload),G)}if(Jn(F)||ue(F))return oe!==null?null:W(M,k,F,G,null);Sl(M,F)}return null}function Z(M,k,F,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number")return M=M.get(F)||null,T(k,M,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case He:return M=M.get(G.key===null?F:G.key)||null,R(k,M,G,oe);case Se:return M=M.get(G.key===null?F:G.key)||null,U(k,M,G,oe);case kt:var ce=G._init;return Z(M,k,F,ce(G._payload),oe)}if(Jn(G)||ue(G))return M=M.get(F)||null,W(k,M,G,oe,null);Sl(k,G)}return null}function ne(M,k,F,G){for(var oe=null,ce=null,he=k,de=k=0,_t=null;he!==null&&de<F.length;de++){he.index>de?(_t=he,he=null):_t=he.sibling;var Ve=q(M,he,F[de],G);if(Ve===null){he===null&&(he=_t);break}n&&he&&Ve.alternate===null&&r(M,he),k=p(Ve,k,de),ce===null?oe=Ve:ce.sibling=Ve,ce=Ve,he=_t}if(de===F.length)return a(M,he),Ge&&ki(M,de),oe;if(he===null){for(;de<F.length;de++)he=K(M,F[de],G),he!==null&&(k=p(he,k,de),ce===null?oe=he:ce.sibling=he,ce=he);return Ge&&ki(M,de),oe}for(he=c(M,he);de<F.length;de++)_t=Z(he,M,de,F[de],G),_t!==null&&(n&&_t.alternate!==null&&he.delete(_t.key===null?de:_t.key),k=p(_t,k,de),ce===null?oe=_t:ce.sibling=_t,ce=_t);return n&&he.forEach(function(Xr){return r(M,Xr)}),Ge&&ki(M,de),oe}function ie(M,k,F,G){var oe=ue(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var ce=oe=null,he=k,de=k=0,_t=null,Ve=F.next();he!==null&&!Ve.done;de++,Ve=F.next()){he.index>de?(_t=he,he=null):_t=he.sibling;var Xr=q(M,he,Ve.value,G);if(Xr===null){he===null&&(he=_t);break}n&&he&&Xr.alternate===null&&r(M,he),k=p(Xr,k,de),ce===null?oe=Xr:ce.sibling=Xr,ce=Xr,he=_t}if(Ve.done)return a(M,he),Ge&&ki(M,de),oe;if(he===null){for(;!Ve.done;de++,Ve=F.next())Ve=K(M,Ve.value,G),Ve!==null&&(k=p(Ve,k,de),ce===null?oe=Ve:ce.sibling=Ve,ce=Ve);return Ge&&ki(M,de),oe}for(he=c(M,he);!Ve.done;de++,Ve=F.next())Ve=Z(he,M,de,Ve.value,G),Ve!==null&&(n&&Ve.alternate!==null&&he.delete(Ve.key===null?de:Ve.key),k=p(Ve,k,de),ce===null?oe=Ve:ce.sibling=Ve,ce=Ve);return n&&he.forEach(function(Kv){return r(M,Kv)}),Ge&&ki(M,de),oe}function nt(M,k,F,G){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case He:e:{for(var oe=F.key,ce=k;ce!==null;){if(ce.key===oe){if(oe=F.type,oe===N){if(ce.tag===7){a(M,ce.sibling),k=d(ce,F.props.children),k.return=M,M=k;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===kt&&zf(oe)===ce.type){a(M,ce.sibling),k=d(ce,F.props),k.ref=Go(M,ce,F),k.return=M,M=k;break e}a(M,ce);break}else r(M,ce);ce=ce.sibling}F.type===N?(k=Fi(F.props.children,M.mode,G,F.key),k.return=M,M=k):(G=Gl(F.type,F.key,F.props,null,M.mode,G),G.ref=Go(M,k,F),G.return=M,M=G)}return _(M);case Se:e:{for(ce=F.key;k!==null;){if(k.key===ce)if(k.tag===4&&k.stateNode.containerInfo===F.containerInfo&&k.stateNode.implementation===F.implementation){a(M,k.sibling),k=d(k,F.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=yh(F,M.mode,G),k.return=M,M=k}return _(M);case kt:return ce=F._init,nt(M,k,ce(F._payload),G)}if(Jn(F))return ne(M,k,F,G);if(ue(F))return ie(M,k,F,G);Sl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,F),k.return=M,M=k):(a(M,k),k=gh(F,M.mode,G),k.return=M,M=k),_(M)):a(M,k)}return nt}var Ls=jf(!0),Bf=jf(!1),Al=zr(null),Rl=null,Ms=null,Rc=null;function Pc(){Rc=Ms=Rl=null}function Cc(n){var r=Al.current;qe(Al),n._currentValue=r}function kc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Fs(n,r){Rl=n,Rc=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(Rc!==n)if(n={context:n,memoizedValue:r,next:null},Ms===null){if(Rl===null)throw Error(t(308));Ms=n,Rl.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return r}var Ni=null;function Nc(n){Ni===null?Ni=[n]:Ni.push(n)}function $f(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Nc(r)):(a.next=d.next,d.next=a),r.interleaved=a,hr(n,c)}function hr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var $r=!1;function Dc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,hr(n,a)}return d=c.interleaved,d===null?(r.next=r,Nc(c)):(r.next=d.next,d.next=r),c.interleaved=r,hr(n,a)}function Pl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function Wf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Cl(n,r,a,c){var d=n.updateQueue;$r=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,U=R.next;R.next=null,_===null?p=U:_.next=U,_=R;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==_&&(T===null?W.firstBaseUpdate=U:T.next=U,W.lastBaseUpdate=R))}if(p!==null){var K=d.baseState;_=0,W=U=R=null,T=p;do{var q=T.lane,Z=T.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var ne=n,ie=T;switch(q=r,Z=a,ie.tag){case 1:if(ne=ie.payload,typeof ne=="function"){K=ne.call(Z,K,q);break e}K=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ie.payload,q=typeof ne=="function"?ne.call(Z,K,q):ne,q==null)break e;K=ee({},K,q);break e;case 2:$r=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[T]:q.push(T))}else Z={eventTime:Z,lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(U=W=Z,R=K):W=W.next=Z,_|=q;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;q=T,T=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(R=K),d.baseState=R,d.firstBaseUpdate=U,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Oi|=_,n.lanes=_,n.memoizedState=K}}function Hf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Qo={},$n=zr(Qo),Yo=zr(Qo),Xo=zr(Qo);function Di(n){if(n===Qo)throw Error(t(174));return n}function Vc(n,r){switch(Be(Xo,r),Be(Yo,n),Be($n,Qo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}qe($n),Be($n,r)}function Us(){qe($n),qe(Yo),qe(Xo)}function Kf(n){Di(Xo.current);var r=Di($n.current),a=ut(r,n.type);r!==a&&(Be(Yo,n),Be($n,a))}function Oc(n){Yo.current===n&&(qe($n),qe(Yo))}var Qe=zr(0);function kl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var xc=[];function Lc(){for(var n=0;n<xc.length;n++)xc[n]._workInProgressVersionPrimary=null;xc.length=0}var Nl=we.ReactCurrentDispatcher,Mc=we.ReactCurrentBatchConfig,Vi=0,Ye=null,ht=null,gt=null,Dl=!1,Jo=!1,Zo=0,mv=0;function Dt(){throw Error(t(321))}function Fc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Rn(n[a],r[a]))return!1;return!0}function Uc(n,r,a,c,d,p){if(Vi=p,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Nl.current=n===null||n.memoizedState===null?vv:Ev,n=a(c,d),Jo){p=0;do{if(Jo=!1,Zo=0,25<=p)throw Error(t(301));p+=1,gt=ht=null,r.updateQueue=null,Nl.current=wv,n=a(c,d)}while(Jo)}if(Nl.current=xl,r=ht!==null&&ht.next!==null,Vi=0,gt=ht=Ye=null,Dl=!1,r)throw Error(t(300));return n}function bc(){var n=Zo!==0;return Zo=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ye.memoizedState=gt=n:gt=gt.next=n,gt}function fn(){if(ht===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=gt===null?Ye.memoizedState:gt.next;if(r!==null)gt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},gt===null?Ye.memoizedState=gt=n:gt=gt.next=n}return gt}function ea(n,r){return typeof r=="function"?r(n):r}function zc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,U=p;do{var W=U.lane;if((Vi&W)===W)R!==null&&(R=R.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),c=U.hasEagerState?U.eagerState:n(c,U.action);else{var K={lane:W,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};R===null?(T=R=K,_=c):R=R.next=K,Ye.lanes|=W,Oi|=W}U=U.next}while(U!==null&&U!==p);R===null?_=c:R.next=T,Rn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ye.lanes|=p,Oi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function jc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Rn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Gf(){}function Qf(n,r){var a=Ye,c=fn(),d=r(),p=!Rn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,Bc(Jf.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,ta(9,Xf.bind(null,a,c,d,r),void 0,null),yt===null)throw Error(t(349));(Vi&30)!==0||Yf(a,r,d)}return d}function Yf(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Xf(n,r,a,c){r.value=a,r.getSnapshot=c,Zf(r)&&ep(n)}function Jf(n,r,a){return a(function(){Zf(r)&&ep(n)})}function Zf(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Rn(n,a)}catch{return!0}}function ep(n){var r=hr(n,1);r!==null&&Dn(r,n,1,-1)}function tp(n){var r=qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},r.queue=n,n=n.dispatch=_v.bind(null,Ye,n),[r.memoizedState,n]}function ta(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function np(){return fn().memoizedState}function Vl(n,r,a,c){var d=qn();Ye.flags|=n,d.memoizedState=ta(1|r,a,void 0,c===void 0?null:c)}function Ol(n,r,a,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var _=ht.memoizedState;if(p=_.destroy,c!==null&&Fc(c,_.deps)){d.memoizedState=ta(r,a,p,c);return}}Ye.flags|=n,d.memoizedState=ta(1|r,a,p,c)}function rp(n,r){return Vl(8390656,8,n,r)}function Bc(n,r){return Ol(2048,8,n,r)}function ip(n,r){return Ol(4,2,n,r)}function sp(n,r){return Ol(4,4,n,r)}function op(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function ap(n,r,a){return a=a!=null?a.concat([n]):null,Ol(4,4,op.bind(null,r,n),a)}function $c(){}function lp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Fc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function up(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Fc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function cp(n,r,a){return(Vi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Rn(a,r)||(a=wi(),Ye.lanes|=a,Oi|=a,n.baseState=!0),r)}function gv(n,r){var a=Re;Re=a!==0&&4>a?a:4,n(!0);var c=Mc.transition;Mc.transition={};try{n(!1),r()}finally{Re=a,Mc.transition=c}}function hp(){return fn().memoizedState}function yv(n,r,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},dp(n))fp(r,a);else if(a=$f(n,r,a,c),a!==null){var d=jt();Dn(a,n,c,d),pp(a,r,c)}}function _v(n,r,a){var c=Gr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(dp(n))fp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Rn(T,_)){var R=r.interleaved;R===null?(d.next=d,Nc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=$f(n,r,d,c),a!==null&&(d=jt(),Dn(a,n,c,d),pp(a,r,c))}}function dp(n){var r=n.alternate;return n===Ye||r!==null&&r===Ye}function fp(n,r){Jo=Dl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function pp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var xl={readContext:dn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},vv={readContext:dn,useCallback:function(n,r){return qn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:rp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Vl(4194308,4,op.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Vl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Vl(4,2,n,r)},useMemo:function(n,r){var a=qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=yv.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var r=qn();return n={current:n},r.memoizedState=n},useState:tp,useDebugValue:$c,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=tp(!1),r=n[0];return n=gv.bind(null,n[1]),qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ye,d=qn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),yt===null)throw Error(t(349));(Vi&30)!==0||Yf(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,rp(Jf.bind(null,c,p,n),[n]),c.flags|=2048,ta(9,Xf.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=qn(),r=yt.identifierPrefix;if(Ge){var a=cr,c=ur;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Zo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=mv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Ev={readContext:dn,useCallback:lp,useContext:dn,useEffect:Bc,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:sp,useMemo:up,useReducer:zc,useRef:np,useState:function(){return zc(ea)},useDebugValue:$c,useDeferredValue:function(n){var r=fn();return cp(r,ht.memoizedState,n)},useTransition:function(){var n=zc(ea)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Gf,useSyncExternalStore:Qf,useId:hp,unstable_isNewReconciler:!1},wv={readContext:dn,useCallback:lp,useContext:dn,useEffect:Bc,useImperativeHandle:ap,useInsertionEffect:ip,useLayoutEffect:sp,useMemo:up,useReducer:jc,useRef:np,useState:function(){return jc(ea)},useDebugValue:$c,useDeferredValue:function(n){var r=fn();return ht===null?r.memoizedState=n:cp(r,ht.memoizedState,n)},useTransition:function(){var n=jc(ea)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Gf,useSyncExternalStore:Qf,useId:hp,unstable_isNewReconciler:!1};function Cn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function qc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ll={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Gr(n),p=dr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Dn(r,n,d,c),Pl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Gr(n),p=dr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Dn(r,n,d,c),Pl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=jt(),c=Gr(n),d=dr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(Dn(r,n,c,a),Pl(r,n,c))}};function mp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!jo(a,c)||!jo(d,p):!0}function gp(n,r,a){var c=!1,d=jr,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=Ht(r)?Pi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Ds(n,d):jr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ll,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function yp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ll.enqueueReplaceState(r,r.state,null)}function Wc(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Dc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=Ht(r)?Pi:Nt.current,d.context=Ds(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(qc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ll.enqueueReplaceState(d,d.state,null),Cl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,r){try{var a="",c=r;do a+=Te(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function Hc(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Kc(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Tv=typeof WeakMap=="function"?WeakMap:Map;function _p(n,r,a){a=dr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Bl||(Bl=!0,lh=c),Kc(n,r)},a}function vp(n,r,a){a=dr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){Kc(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Kc(n,r),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Ep(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Tv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=Mv.bind(null,n,r,a),r.then(n,n))}function wp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Tp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=dr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Iv=we.ReactCurrentOwner,Kt=!1;function zt(n,r,a,c){r.child=n===null?Bf(r,null,a,c):Ls(r,n.child,a,c)}function Ip(n,r,a,c,d){a=a.render;var p=r.ref;return Fs(r,d),c=Uc(n,r,a,c,p,d),a=bc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,fr(n,r,d)):(Ge&&a&&wc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Sp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!mh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Ap(n,r,p,c,d)):(n=Gl(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(_,c)&&n.ref===r.ref)return fr(n,r,d)}return r.flags|=1,n=Yr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Ap(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(jo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,fr(n,r,d)}return Gc(n,r,a,c,d)}function Rp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(js,rn),rn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Be(js,rn),rn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,Be(js,rn),rn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,Be(js,rn),rn|=c;return zt(n,r,d,a),r.child}function Pp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Gc(n,r,a,c,d){var p=Ht(a)?Pi:Nt.current;return p=Ds(r,p),Fs(r,d),a=Uc(n,r,a,c,p,d),c=bc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,fr(n,r,d)):(Ge&&c&&wc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Cp(n,r,a,c,d){if(Ht(a)){var p=!0;vl(r)}else p=!1;if(Fs(r,d),r.stateNode===null)Fl(n,r),gp(r,a,c),Wc(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,U=a.contextType;typeof U=="object"&&U!==null?U=dn(U):(U=Ht(a)?Pi:Nt.current,U=Ds(r,U));var W=a.getDerivedStateFromProps,K=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==U)&&yp(r,_,c,U),$r=!1;var q=r.memoizedState;_.state=q,Cl(r,c,_,d),R=r.memoizedState,T!==c||q!==R||Wt.current||$r?(typeof W=="function"&&(qc(r,a,W,c),R=r.memoizedState),(T=$r||mp(r,a,T,c,q,R,U))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=U,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,qf(n,r),T=r.memoizedProps,U=r.type===r.elementType?T:Cn(r.type,T),_.props=U,K=r.pendingProps,q=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=dn(R):(R=Ht(a)?Pi:Nt.current,R=Ds(r,R));var Z=a.getDerivedStateFromProps;(W=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||q!==R)&&yp(r,_,c,R),$r=!1,q=r.memoizedState,_.state=q,Cl(r,c,_,d);var ne=r.memoizedState;T!==K||q!==ne||Wt.current||$r?(typeof Z=="function"&&(qc(r,a,Z,c),ne=r.memoizedState),(U=$r||mp(r,a,U,c,q,ne,R)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ne,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ne,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ne),_.props=c,_.state=ne,_.context=R,c=U):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return Qc(n,r,a,c,p,d)}function Qc(n,r,a,c,d,p){Pp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Of(r,a,!1),fr(n,r,p);c=r.stateNode,Iv.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Ls(r,n.child,null,p),r.child=Ls(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&Of(r,a,!0),r.child}function kp(n){var r=n.stateNode;r.pendingContext?Df(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Df(n,r.context,!1),Vc(n,r.containerInfo)}function Np(n,r,a,c,d){return xs(),Ac(d),r.flags|=256,zt(n,r,a,c),r.child}var Yc={dehydrated:null,treeContext:null,retryLane:0};function Xc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dp(n,r,a){var c=r.pendingProps,d=Qe.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Be(Qe,d&1),n===null)return Sc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Ql(_,c,0,null),n=Fi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=Xc(a),r.memoizedState=Yc,n):Jc(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Sv(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Yr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Yr(T,p):(p=Fi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?Xc(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=Yc,c}return p=n.child,n=p.sibling,c=Yr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Jc(n,r){return r=Ql({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,a,c){return c!==null&&Ac(c),Ls(r,n.child,null,a),n=Jc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Sv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=Hc(Error(t(422))),Ml(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Ql({mode:"visible",children:c.children},d,0,null),p=Fi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Ls(r,n.child,null,_),r.child.memoizedState=Xc(_),r.memoizedState=Yc,p);if((r.mode&1)===0)return Ml(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=Hc(p,c,void 0),Ml(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=yt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,hr(n,d),Dn(c,n,d,-1))}return ph(),c=Hc(Error(t(421))),Ml(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Fv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,nn=br(d.nextSibling),tn=r,Ge=!0,Pn=null,n!==null&&(cn[hn++]=ur,cn[hn++]=cr,cn[hn++]=Ci,ur=n.id,cr=n.overflow,Ci=r),r=Jc(r,c.children),r.flags|=4096,r)}function Vp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),kc(n.return,r,a)}function Zc(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Op(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Qe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vp(n,a,r);else if(n.tag===19)Vp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Be(Qe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&kl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Zc(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&kl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Zc(r,!0,a,null,p);break;case"together":Zc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function fr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Oi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Yr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Av(n,r,a){switch(r.tag){case 3:kp(r),xs();break;case 5:Kf(r);break;case 1:Ht(r.type)&&vl(r);break;case 4:Vc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;Be(Al,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Be(Qe,Qe.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Dp(n,r,a):(Be(Qe,Qe.current&1),n=fr(n,r,a),n!==null?n.sibling:null);Be(Qe,Qe.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Op(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Be(Qe,Qe.current),c)break;return null;case 22:case 23:return r.lanes=0,Rp(n,r,a)}return fr(n,r,a)}var xp,eh,Lp,Mp;xp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},eh=function(){},Lp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Di($n.current);var p=null;switch(a){case"input":d=ci(n,d),c=ci(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=go(n,d),c=go(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=gl)}To(a,c);var _;a=null;for(U in d)if(!c.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var T=d[U];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in c){var R=c[U];if(T=d!=null?d[U]:void 0,c.hasOwnProperty(U)&&R!==T&&(R!=null||T!=null))if(U==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(U,a)),a=R;else U==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(U,R)):U==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(U,""+R):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(R!=null&&U==="onScroll"&&$e("scroll",n),p||T===R||(p=[])):(p=p||[]).push(U,R))}a&&(p=p||[]).push("style",a);var U=p;(r.updateQueue=U)&&(r.flags|=4)}},Mp=function(n,r,a,c){a!==c&&(r.flags|=4)};function na(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Rv(n,r,a){var c=r.pendingProps;switch(Tc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Ht(r.type)&&_l(),Vt(r),null;case 3:return c=r.stateNode,Us(),qe(Wt),qe(Nt),Lc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Il(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Pn!==null&&(hh(Pn),Pn=null))),eh(n,r),Vt(r),null;case 5:Oc(r);var d=Di(Xo.current);if(a=r.type,n!==null&&r.stateNode!=null)Lp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Di($n.current),Il(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Bn]=r,c[Ho]=p,n=(r.mode&1)!==0,a){case"dialog":$e("cancel",c),$e("close",c);break;case"iframe":case"object":case"embed":$e("load",c);break;case"video":case"audio":for(d=0;d<$o.length;d++)$e($o[d],c);break;case"source":$e("error",c);break;case"img":case"image":case"link":$e("error",c),$e("load",c);break;case"details":$e("toggle",c);break;case"input":Zi(c,p),$e("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},$e("invalid",c);break;case"textarea":ts(c,p),$e("invalid",c)}To(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&ml(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&ml(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&$e("scroll",c)}switch(a){case"input":Xn(c),ja(c,p,!0);break;case"textarea":Xn(c),yo(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=gl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Bn]=r,n[Ho]=c,xp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Io(a,c),a){case"dialog":$e("cancel",n),$e("close",n),d=c;break;case"iframe":case"object":case"embed":$e("load",n),d=c;break;case"video":case"audio":for(d=0;d<$o.length;d++)$e($o[d],n);d=c;break;case"source":$e("error",n),d=c;break;case"img":case"image":case"link":$e("error",n),$e("load",n),d=c;break;case"details":$e("toggle",n),d=c;break;case"input":Zi(n,c),d=ci(n,c),$e("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),$e("invalid",n);break;case"textarea":ts(n,c),d=go(n,c),$e("invalid",n);break;default:d=c}To(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Eo(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&_o(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Cr(n,R):typeof R=="number"&&Cr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&$e("scroll",n):R!=null&&ve(n,p,R,_))}switch(a){case"input":Xn(n),ja(n,c,!1);break;case"textarea":Xn(n),yo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Zn(n,!!c.multiple,p,!1):c.defaultValue!=null&&Zn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=gl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)Mp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Di(Xo.current),Di($n.current),Il(r)){if(c=r.stateNode,a=r.memoizedProps,c[Bn]=r,(p=c.nodeValue!==a)&&(n=tn,n!==null))switch(n.tag){case 3:ml(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ml(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Bn]=r,r.stateNode=c}return Vt(r),null;case 13:if(qe(Qe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&nn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)bf(),xs(),r.flags|=98560,p=!1;else if(p=Il(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Bn]=r}else xs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else Pn!==null&&(hh(Pn),Pn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Qe.current&1)!==0?dt===0&&(dt=3):ph())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Us(),eh(n,r),n===null&&qo(r.stateNode.containerInfo),Vt(r),null;case 10:return Cc(r.type._context),Vt(r),null;case 17:return Ht(r.type)&&_l(),Vt(r),null;case 19:if(qe(Qe),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)na(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=kl(n),_!==null){for(r.flags|=128,na(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Be(Qe,Qe.current&1|2),r.child}n=n.sibling}p.tail!==null&&je()>Bs&&(r.flags|=128,c=!0,na(p,!1),r.lanes=4194304)}else{if(!c)if(n=kl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),na(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Vt(r),null}else 2*je()-p.renderingStartTime>Bs&&a!==1073741824&&(r.flags|=128,c=!0,na(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=je(),r.sibling=null,a=Qe.current,Be(Qe,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return fh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(rn&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Pv(n,r){switch(Tc(r),r.tag){case 1:return Ht(r.type)&&_l(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Us(),qe(Wt),qe(Nt),Lc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Oc(r),null;case 13:if(qe(Qe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));xs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qe(Qe),null;case 4:return Us(),null;case 10:return Cc(r.type._context),null;case 22:case 23:return fh(),null;case 24:return null;default:return null}}var Ul=!1,Ot=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,te=null;function zs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Je(n,r,c)}else a.current=null}function th(n,r,a){try{a()}catch(c){Je(n,r,c)}}var Fp=!1;function kv(n,r){if(fc=Mr,n=mf(),sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,U=0,W=0,K=n,q=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==p||c!==0&&K.nodeType!==3||(R=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)q=K,K=Z;for(;;){if(K===n)break t;if(q===a&&++U===d&&(T=_),q===p&&++W===c&&(R=_),(Z=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=Z}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(pc={focusedElem:n,selectionRange:a},Mr=!1,te=r;te!==null;)if(r=te,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,te=n;else for(;te!==null;){r=te;try{var ne=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var ie=ne.memoizedProps,nt=ne.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Cn(r.type,ie),nt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Je(r,r.return,G)}if(n=r.sibling,n!==null){n.return=r.return,te=n;break}te=r.return}return ne=Fp,Fp=!1,ne}function ra(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&th(r,a,p)}d=d.next}while(d!==c)}}function bl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function nh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Up(n){var r=n.alternate;r!==null&&(n.alternate=null,Up(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Bn],delete r[Ho],delete r[_c],delete r[hv],delete r[dv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=gl));else if(c!==4&&(n=n.child,n!==null))for(rh(n,r,a),n=n.sibling;n!==null;)rh(n,r,a),n=n.sibling}function ih(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ih(n,r,a),n=n.sibling;n!==null;)ih(n,r,a),n=n.sibling}var Tt=null,kn=!1;function Wr(n,r,a){for(a=a.child;a!==null;)jp(n,r,a),a=a.sibling}function jp(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(vi,a)}catch{}switch(a.tag){case 5:Ot||zs(a,r);case 6:var c=Tt,d=kn;Tt=null,Wr(n,r,a),Tt=c,kn=d,Tt!==null&&(kn?(n=Tt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tt.removeChild(a.stateNode));break;case 18:Tt!==null&&(kn?(n=Tt,a=a.stateNode,n.nodeType===8?yc(n.parentNode,a):n.nodeType===1&&yc(n,a),Sn(n)):yc(Tt,a.stateNode));break;case 4:c=Tt,d=kn,Tt=a.stateNode.containerInfo,kn=!0,Wr(n,r,a),Tt=c,kn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&th(a,r,_),d=d.next}while(d!==c)}Wr(n,r,a);break;case 1:if(!Ot&&(zs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Je(a,r,T)}Wr(n,r,a);break;case 21:Wr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Wr(n,r,a),Ot=c):Wr(n,r,a);break;default:Wr(n,r,a)}}function Bp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Cv),r.forEach(function(c){var d=Uv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:Tt=T.stateNode,kn=!1;break e;case 3:Tt=T.stateNode.containerInfo,kn=!0;break e;case 4:Tt=T.stateNode.containerInfo,kn=!0;break e}T=T.return}if(Tt===null)throw Error(t(160));jp(p,_,d),Tt=null,kn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(U){Je(d,r,U)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)$p(r,n),r=r.sibling}function $p(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(r,n),Wn(n),c&4){try{ra(3,n,n.return),bl(3,n)}catch(ie){Je(n,n.return,ie)}try{ra(5,n,n.return)}catch(ie){Je(n,n.return,ie)}}break;case 1:Nn(r,n),Wn(n),c&512&&a!==null&&zs(a,a.return);break;case 5:if(Nn(r,n),Wn(n),c&512&&a!==null&&zs(a,a.return),n.flags&32){var d=n.stateNode;try{Cr(d,"")}catch(ie){Je(n,n.return,ie)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&po(d,p),Io(T,_);var U=Io(T,p);for(_=0;_<R.length;_+=2){var W=R[_],K=R[_+1];W==="style"?Eo(d,K):W==="dangerouslySetInnerHTML"?_o(d,K):W==="children"?Cr(d,K):ve(d,W,K,U)}switch(T){case"input":mo(d,p);break;case"textarea":ns(d,p);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?Zn(d,!!p.multiple,Z,!1):q!==!!p.multiple&&(p.defaultValue!=null?Zn(d,!!p.multiple,p.defaultValue,!0):Zn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ho]=p}catch(ie){Je(n,n.return,ie)}}break;case 6:if(Nn(r,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ie){Je(n,n.return,ie)}}break;case 3:if(Nn(r,n),Wn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Sn(r.containerInfo)}catch(ie){Je(n,n.return,ie)}break;case 4:Nn(r,n),Wn(n);break;case 13:Nn(r,n),Wn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ah=je())),c&4&&Bp(n);break;case 22:if(W=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(U=Ot)||W,Nn(r,n),Ot=U):Nn(r,n),Wn(n),c&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!W&&(n.mode&1)!==0)for(te=n,W=n.child;W!==null;){for(K=te=W;te!==null;){switch(q=te,Z=q.child,q.tag){case 0:case 11:case 14:case 15:ra(4,q,q.return);break;case 1:zs(q,q.return);var ne=q.stateNode;if(typeof ne.componentWillUnmount=="function"){c=q,a=q.return;try{r=c,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(ie){Je(c,a,ie)}}break;case 5:zs(q,q.return);break;case 22:if(q.memoizedState!==null){Hp(K);continue}}Z!==null?(Z.return=q,te=Z):Hp(K)}W=W.sibling}e:for(W=null,K=n;;){if(K.tag===5){if(W===null){W=K;try{d=K.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,R=K.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=vo("display",_))}catch(ie){Je(n,n.return,ie)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=U?"":K.memoizedProps}catch(ie){Je(n,n.return,ie)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Nn(r,n),Wn(n),c&4&&Bp(n);break;case 21:break;default:Nn(r,n),Wn(n)}}function Wn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Cr(d,""),c.flags&=-33);var p=zp(n);ih(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=zp(n);rh(n,T,_);break;default:throw Error(t(161))}}catch(R){Je(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Nv(n,r,a){te=n,qp(n)}function qp(n,r,a){for(var c=(n.mode&1)!==0;te!==null;){var d=te,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ul;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ot;T=Ul;var U=Ot;if(Ul=_,(Ot=R)&&!U)for(te=d;te!==null;)_=te,R=_.child,_.tag===22&&_.memoizedState!==null?Kp(d):R!==null?(R.return=_,te=R):Kp(d);for(;p!==null;)te=p,qp(p),p=p.sibling;te=d,Ul=T,Ot=U}Wp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,te=p):Wp(n)}}function Wp(n){for(;te!==null;){var r=te;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ot||bl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Cn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Hf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Hf(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var U=r.alternate;if(U!==null){var W=U.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&Sn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&nh(r)}catch(q){Je(r,r.return,q)}}if(r===n){te=null;break}if(a=r.sibling,a!==null){a.return=r.return,te=a;break}te=r.return}}function Hp(n){for(;te!==null;){var r=te;if(r===n){te=null;break}var a=r.sibling;if(a!==null){a.return=r.return,te=a;break}te=r.return}}function Kp(n){for(;te!==null;){var r=te;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{bl(4,r)}catch(R){Je(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Je(r,d,R)}}var p=r.return;try{nh(r)}catch(R){Je(r,p,R)}break;case 5:var _=r.return;try{nh(r)}catch(R){Je(r,_,R)}}}catch(R){Je(r,r.return,R)}if(r===n){te=null;break}var T=r.sibling;if(T!==null){T.return=r.return,te=T;break}te=r.return}}var Dv=Math.ceil,zl=we.ReactCurrentDispatcher,sh=we.ReactCurrentOwner,pn=we.ReactCurrentBatchConfig,De=0,yt=null,st=null,It=0,rn=0,js=zr(0),dt=0,ia=null,Oi=0,jl=0,oh=0,sa=null,Gt=null,ah=0,Bs=1/0,pr=null,Bl=!1,lh=null,Hr=null,$l=!1,Kr=null,ql=0,oa=0,uh=null,Wl=-1,Hl=0;function jt(){return(De&6)!==0?je():Wl!==-1?Wl:Wl=je()}function Gr(n){return(n.mode&1)===0?1:(De&2)!==0&&It!==0?It&-It:pv.transition!==null?(Hl===0&&(Hl=wi()),Hl):(n=Re,n!==0||(n=window.event,n=n===void 0?16:xo(n.type)),n)}function Dn(n,r,a,c){if(50<oa)throw oa=0,uh=null,Error(t(185));Vr(n,a,c),((De&2)===0||n!==yt)&&(n===yt&&((De&2)===0&&(jl|=a),dt===4&&Qr(n,It)),Qt(n,c),a===1&&De===0&&(r.mode&1)===0&&(Bs=je()+500,El&&Br()))}function Qt(n,r){var a=n.callbackNode;nr(n,r);var c=Ei(n,n===yt?It:0);if(c===0)a!==null&&ko(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&ko(a),r===1)n.tag===0?fv(Qp.bind(null,n)):xf(Qp.bind(null,n)),uv(function(){(De&6)===0&&Br()}),a=null;else{switch(xr(c)){case 1:a=_i;break;case 4:a=kr;break;case 16:a=an;break;case 536870912:a=Ha;break;default:a=an}a=rm(a,Gp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Gp(n,r){if(Wl=-1,Hl=0,(De&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=Ei(n,n===yt?It:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Kl(n,c);else{r=c;var d=De;De|=2;var p=Xp();(yt!==n||It!==r)&&(pr=null,Bs=je()+500,Li(n,r));do try{xv();break}catch(T){Yp(n,T)}while(!0);Pc(),zl.current=p,De=d,st!==null?r=0:(yt=null,It=0,r=dt)}if(r!==0){if(r===2&&(d=Jt(n),d!==0&&(c=d,r=ch(n,d))),r===1)throw a=ia,Li(n,0),Qr(n,c),Qt(n,je()),a;if(r===6)Qr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Vv(d)&&(r=Kl(n,c),r===2&&(p=Jt(n),p!==0&&(c=p,r=ch(n,p))),r===1))throw a=ia,Li(n,0),Qr(n,c),Qt(n,je()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Mi(n,Gt,pr);break;case 3:if(Qr(n,c),(c&130023424)===c&&(r=ah+500-je(),10<r)){if(Ei(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=gc(Mi.bind(null,n,Gt,pr),r);break}Mi(n,Gt,pr);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Dv(c/1960))-c,10<c){n.timeoutHandle=gc(Mi.bind(null,n,Gt,pr),c);break}Mi(n,Gt,pr);break;case 5:Mi(n,Gt,pr);break;default:throw Error(t(329))}}}return Qt(n,je()),n.callbackNode===a?Gp.bind(null,n):null}function ch(n,r){var a=sa;return n.current.memoizedState.isDehydrated&&(Li(n,r).flags|=256),n=Kl(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&hh(r)),n}function hh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function Vv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Rn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~oh,r&=~jl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function Qp(n){if((De&6)!==0)throw Error(t(327));$s();var r=Ei(n,0);if((r&1)===0)return Qt(n,je()),null;var a=Kl(n,r);if(n.tag!==0&&a===2){var c=Jt(n);c!==0&&(r=c,a=ch(n,c))}if(a===1)throw a=ia,Li(n,0),Qr(n,r),Qt(n,je()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Mi(n,Gt,pr),Qt(n,je()),null}function dh(n,r){var a=De;De|=1;try{return n(r)}finally{De=a,De===0&&(Bs=je()+500,El&&Br())}}function xi(n){Kr!==null&&Kr.tag===0&&(De&6)===0&&$s();var r=De;De|=1;var a=pn.transition,c=Re;try{if(pn.transition=null,Re=1,n)return n()}finally{Re=c,pn.transition=a,De=r,(De&6)===0&&Br()}}function fh(){rn=js.current,qe(js)}function Li(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,lv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Tc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&_l();break;case 3:Us(),qe(Wt),qe(Nt),Lc();break;case 5:Oc(c);break;case 4:Us();break;case 13:qe(Qe);break;case 19:qe(Qe);break;case 10:Cc(c.type._context);break;case 22:case 23:fh()}a=a.return}if(yt=n,st=n=Yr(n.current,null),It=rn=r,dt=0,ia=null,oh=jl=Oi=0,Gt=sa=null,Ni!==null){for(r=0;r<Ni.length;r++)if(a=Ni[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Ni=null}return n}function Yp(n,r){do{var a=st;try{if(Pc(),Nl.current=xl,Dl){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Dl=!1}if(Vi=0,gt=ht=Ye=null,Jo=!1,Zo=0,sh.current=null,a===null||a.return===null){dt=1,ia=r,st=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=It,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var U=R,W=T,K=W.tag;if((W.mode&1)===0&&(K===0||K===11||K===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var Z=wp(_);if(Z!==null){Z.flags&=-257,Tp(Z,_,T,p,r),Z.mode&1&&Ep(p,U,r),r=Z,R=U;var ne=r.updateQueue;if(ne===null){var ie=new Set;ie.add(R),r.updateQueue=ie}else ne.add(R);break e}else{if((r&1)===0){Ep(p,U,r),ph();break e}R=Error(t(426))}}else if(Ge&&T.mode&1){var nt=wp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),Tp(nt,_,T,p,r),Ac(bs(R,T));break e}}p=R=bs(R,T),dt!==4&&(dt=2),sa===null?sa=[p]:sa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=_p(p,R,r);Wf(p,M);break e;case 1:T=R;var k=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Hr===null||!Hr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=vp(p,T,r);Wf(p,G);break e}}p=p.return}while(p!==null)}Zp(a)}catch(oe){r=oe,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function Xp(){var n=zl.current;return zl.current=xl,n===null?xl:n}function ph(){(dt===0||dt===3||dt===2)&&(dt=4),yt===null||(Oi&268435455)===0&&(jl&268435455)===0||Qr(yt,It)}function Kl(n,r){var a=De;De|=2;var c=Xp();(yt!==n||It!==r)&&(pr=null,Li(n,r));do try{Ov();break}catch(d){Yp(n,d)}while(!0);if(Pc(),De=a,zl.current=c,st!==null)throw Error(t(261));return yt=null,It=0,dt}function Ov(){for(;st!==null;)Jp(st)}function xv(){for(;st!==null&&!qa();)Jp(st)}function Jp(n){var r=nm(n.alternate,n,rn);n.memoizedProps=n.pendingProps,r===null?Zp(n):st=r,sh.current=null}function Zp(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Rv(a,r,rn),a!==null){st=a;return}}else{if(a=Pv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);dt===0&&(dt=5)}function Mi(n,r,a){var c=Re,d=pn.transition;try{pn.transition=null,Re=1,Lv(n,r,a,c)}finally{pn.transition=d,Re=c}return null}function Lv(n,r,a,c){do $s();while(Kr!==null);if((De&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(be(n,p),n===yt&&(st=yt=null,It=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||$l||($l=!0,rm(an,function(){return $s(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=pn.transition,pn.transition=null;var _=Re;Re=1;var T=De;De|=4,sh.current=null,kv(n,a),$p(a,n),tv(pc),Mr=!!fc,pc=fc=null,n.current=a,Nv(a),Xu(),De=T,Re=_,pn.transition=p}else n.current=a;if($l&&($l=!1,Kr=n,ql=d),p=n.pendingLanes,p===0&&(Hr=null),Ka(a.stateNode),Qt(n,je()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Bl)throw Bl=!1,n=lh,lh=null,n;return(ql&1)!==0&&n.tag!==0&&$s(),p=n.pendingLanes,(p&1)!==0?n===uh?oa++:(oa=0,uh=n):oa=0,Br(),null}function $s(){if(Kr!==null){var n=xr(ql),r=pn.transition,a=Re;try{if(pn.transition=null,Re=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,ql=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,te=n.current;te!==null;){var p=te,_=p.child;if((te.flags&16)!==0){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var U=T[R];for(te=U;te!==null;){var W=te;switch(W.tag){case 0:case 11:case 15:ra(8,W,p)}var K=W.child;if(K!==null)K.return=W,te=K;else for(;te!==null;){W=te;var q=W.sibling,Z=W.return;if(Up(W),W===U){te=null;break}if(q!==null){q.return=Z,te=q;break}te=Z}}}var ne=p.alternate;if(ne!==null){var ie=ne.child;if(ie!==null){ne.child=null;do{var nt=ie.sibling;ie.sibling=null,ie=nt}while(ie!==null)}}te=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,te=_;else e:for(;te!==null;){if(p=te,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ra(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,te=M;break e}te=p.return}}var k=n.current;for(te=k;te!==null;){_=te;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,te=F;else e:for(_=k;te!==null;){if(T=te,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:bl(9,T)}}catch(oe){Je(T,T.return,oe)}if(T===_){te=null;break e}var G=T.sibling;if(G!==null){G.return=T.return,te=G;break e}te=T.return}}if(De=d,Br(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(vi,n)}catch{}c=!0}return c}finally{Re=a,pn.transition=r}}return!1}function em(n,r,a){r=bs(a,r),r=_p(n,r,1),n=qr(n,r,1),r=jt(),n!==null&&(Vr(n,1,r),Qt(n,r))}function Je(n,r,a){if(n.tag===3)em(n,n,a);else for(;r!==null;){if(r.tag===3){em(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=bs(a,n),n=vp(r,n,1),r=qr(r,n,1),n=jt(),r!==null&&(Vr(r,1,n),Qt(r,n));break}}r=r.return}}function Mv(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=jt(),n.pingedLanes|=n.suspendedLanes&a,yt===n&&(It&a)===a&&(dt===4||dt===3&&(It&130023424)===It&&500>je()-ah?Li(n,0):oh|=a),Qt(n,r)}function tm(n,r){r===0&&((n.mode&1)===0?r=1:(r=ds,ds<<=1,(ds&130023424)===0&&(ds=4194304)));var a=jt();n=hr(n,r),n!==null&&(Vr(n,r,a),Qt(n,a))}function Fv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),tm(n,a)}function Uv(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),tm(n,a)}var nm;nm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,Av(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ge&&(r.flags&1048576)!==0&&Lf(r,Tl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Fl(n,r),n=r.pendingProps;var d=Ds(r,Nt.current);Fs(r,a),d=Uc(null,r,c,n,d,a);var p=bc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(p=!0,vl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Dc(r),d.updater=Ll,r.stateNode=d,d._reactInternals=r,Wc(r,c,n,a),r=Qc(null,r,c,!0,p,a)):(r.tag=0,Ge&&p&&wc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Fl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=zv(c),n=Cn(c,n),d){case 0:r=Gc(null,r,c,n,a);break e;case 1:r=Cp(null,r,c,n,a);break e;case 11:r=Ip(null,r,c,n,a);break e;case 14:r=Sp(null,r,c,Cn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Gc(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Cp(n,r,c,d,a);case 3:e:{if(kp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,qf(n,r),Cl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=bs(Error(t(423)),r),r=Np(n,r,c,a,d);break e}else if(c!==d){d=bs(Error(t(424)),r),r=Np(n,r,c,a,d);break e}else for(nn=br(r.stateNode.containerInfo.firstChild),tn=r,Ge=!0,Pn=null,a=Bf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===d){r=fr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Kf(r),n===null&&Sc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,mc(c,d)?_=null:p!==null&&mc(c,p)&&(r.flags|=32),Pp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Sc(r),null;case 13:return Dp(n,r,a);case 4:return Vc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ls(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Ip(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,Be(Al,c._currentValue),c._currentValue=_,p!==null)if(Rn(p.value,_)){if(p.children===d.children&&!Wt.current){r=fr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=dr(-1,a&-a),R.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var W=U.pending;W===null?R.next=R:(R.next=W.next,W.next=R),U.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),kc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),kc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Fs(r,a),d=dn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Cn(c,r.pendingProps),d=Cn(c.type,d),Sp(n,r,c,d,a);case 15:return Ap(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Cn(c,d),Fl(n,r),r.tag=1,Ht(c)?(n=!0,vl(r)):n=!1,Fs(r,a),gp(r,c,d),Wc(r,c,d,a),Qc(null,r,c,!0,n,a);case 19:return Op(n,r,a);case 22:return Rp(n,r,a)}throw Error(t(156,r.tag))};function rm(n,r){return cs(n,r)}function bv(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,a,c){return new bv(n,r,a,c)}function mh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function zv(n){if(typeof n=="function")return mh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===Ct)return 14}return 2}function Yr(n,r){var a=n.alternate;return a===null?(a=mn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Gl(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")mh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return Fi(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=mn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=mn(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=mn(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return Ql(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:_=10;break e;case D:_=9;break e;case x:_=11;break e;case Ct:_=14;break e;case kt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Fi(n,r,a,c){return n=mn(7,n,c,r),n.lanes=a,n}function Ql(n,r,a,c){return n=mn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function gh(n,r,a){return n=mn(6,n,null,r),n.lanes=a,n}function yh(n,r,a){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function jv(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dr(0),this.expirationTimes=Dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _h(n,r,a,c,d,p,_,T,R){return n=new jv(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dc(p),n}function Bv(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function im(n){if(!n)return jr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Vf(n,a,r)}return r}function sm(n,r,a,c,d,p,_,T,R){return n=_h(a,c,!0,n,d,p,_,T,R),n.context=im(null),a=n.current,c=jt(),d=Gr(a),p=dr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Vr(n,d,c),Qt(n,c),n}function Yl(n,r,a,c){var d=r.current,p=jt(),_=Gr(d);return a=im(a),r.context===null?r.context=a:r.pendingContext=a,r=dr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(Dn(n,d,_,p),Pl(n,d,_)),_}function Xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function om(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function vh(n,r){om(n,r),(n=n.alternate)&&om(n,r)}function $v(){return null}var am=typeof reportError=="function"?reportError:function(n){console.error(n)};function Eh(n){this._internalRoot=n}Jl.prototype.render=Eh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Yl(n,r,null,null)},Jl.prototype.unmount=Eh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xi(function(){Yl(null,n,null,null)}),r[ar]=null}};function Jl(n){this._internalRoot=n}Jl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ja();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&tl(n)}};function wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function qv(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var U=Xl(_);p.call(U)}}var _=sm(r,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=_,n[ar]=_.current,qo(n.nodeType===8?n.parentNode:n),xi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var U=Xl(R);T.call(U)}}var R=_h(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=R,n[ar]=R.current,qo(n.nodeType===8?n.parentNode:n),xi(function(){Yl(r,R,a,c)}),R}function eu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=Xl(_);T.call(R)}}Yl(r,_,n,d)}else _=qv(a,r,n,d,c);return Xl(_)}Ya=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Nr(r.pendingLanes);a!==0&&(Or(r,a|1),Qt(r,je()),(De&6)===0&&(Bs=je()+500,Br()))}break;case 13:xi(function(){var c=hr(n,1);if(c!==null){var d=jt();Dn(c,n,1,d)}}),vh(n,1)}},fs=function(n){if(n.tag===13){var r=hr(n,134217728);if(r!==null){var a=jt();Dn(r,n,134217728,a)}vh(n,134217728)}},Xa=function(n){if(n.tag===13){var r=Gr(n),a=hr(n,r);if(a!==null){var c=jt();Dn(a,n,r,c)}vh(n,r)}},Ja=function(){return Re},Za=function(n,r){var a=Re;try{return Re=n,r()}finally{Re=a}},is=function(n,r,a){switch(r){case"input":if(mo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=yl(c);if(!d)throw Error(t(90));Ji(c),mo(c,d)}}}break;case"textarea":ns(n,a);break;case"select":r=a.value,r!=null&&Zn(n,!!a.multiple,r,!1)}},pi=dh,Ao=xi;var Wv={usingClientEntryPoint:!1,Events:[Ko,ks,yl,Mn,So,dh]},aa={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hv={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Co(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||$v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{vi=tu.inject(Hv),Xt=tu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wh(r))throw Error(t(200));return Bv(n,r,null,a)},Yt.createRoot=function(n,r){if(!wh(n))throw Error(t(299));var a=!1,c="",d=am;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=_h(n,1,!1,null,null,a,!1,c,d),n[ar]=r.current,qo(n.nodeType===8?n.parentNode:n),new Eh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Co(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return xi(n)},Yt.hydrate=function(n,r,a){if(!Zl(r))throw Error(t(200));return eu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=am;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=sm(r,null,n,1,a??null,d,!1,p,_),n[ar]=r.current,qo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Jl(r)},Yt.render=function(n,r,a){if(!Zl(r))throw Error(t(200));return eu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(xi(function(){eu(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},Yt.unstable_batchedUpdates=dh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!Zl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return eu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var gm;function eE(){if(gm)return Sh.exports;gm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Sh.exports=Zv(),Sh.exports}var ym;function tE(){if(ym)return nu;ym=1;var i=eE();return nu.createRoot=i.createRoot,nu.hydrateRoot=i.hydrateRoot,nu}var nE=tE(),_m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},rE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],y=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,y=o+2<i.length,v=y?i[o+2]:0,w=u>>2,P=(u&3)<<4|m>>4;let V=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(V=64)),s.push(t[w],t[P],t[V],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Lg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):rE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const P=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||P==null)throw new iE;const V=u<<2|m>>4;if(s.push(V),v!==64){const z=m<<4&240|v>>2;if(s.push(z),P!==64){const Q=v<<6&192|P;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class iE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sE=function(i){const e=Lg(i);return Mg.encodeByteArray(e,!0)},yu=function(i){return sE(i).replace(/\./g,"")},Fg=function(i){try{return Mg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=()=>oE().__FIREBASE_DEFAULTS__,lE=()=>{if(typeof process>"u"||typeof _m>"u")return;const i=_m.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},uE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Fg(i[1]);return e&&JSON.parse(e)},Ou=()=>{try{return aE()||lE()||uE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ug=i=>{var e,t;return(t=(e=Ou())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},cE=i=>{const e=Ug(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},bg=()=>{var i;return(i=Ou())===null||i===void 0?void 0:i.config},zg=i=>{var e;return(e=Ou())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[yu(JSON.stringify(t)),yu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function pE(){var i;const e=(i=Ou())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function yE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _E(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function vE(){return!pE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function EE(){try{return typeof indexedDB=="object"}catch{return!1}}function wE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="FirebaseError";class Rr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=TE,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?IE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Rr(o,m,s)}}function IE(i,e){return i.replace(SE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const SE=/\{\$([^}]+)}/g;function AE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function _u(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(vm(u)&&vm(h)){if(!_u(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function vm(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function RE(i,e){const t=new PE(i,e);return t.subscribe.bind(t)}class PE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");CE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Ph),o.error===void 0&&(o.error=Ph),o.complete===void 0&&(o.complete=Ph);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Ph(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(i){return i&&i._delegate?i._delegate:i}class qi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new hE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DE(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:NE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NE(i){return i===Ui?void 0:i}function DE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pe||(Pe={}));const OE={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},xE=Pe.INFO,LE={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},ME=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=LE[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ud{constructor(e){this.name=e,this._logLevel=xE,this._logHandler=ME,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const FE=(i,e)=>e.some(t=>i instanceof t);let Em,wm;function UE(){return Em||(Em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bE(){return wm||(wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jg=new WeakMap,bh=new WeakMap,Bg=new WeakMap,Ch=new WeakMap,cd=new WeakMap;function zE(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ri(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&jg.set(t,i)}).catch(()=>{}),cd.set(e,i),e}function jE(i){if(bh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});bh.set(i,e)}let zh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return bh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Bg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ri(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function BE(i){zh=i(zh)}function $E(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(kh(this),e,...t);return Bg.set(s,e.sort?e.sort():[e]),ri(s)}:bE().includes(i)?function(...e){return i.apply(kh(this),e),ri(jg.get(this))}:function(...e){return ri(i.apply(kh(this),e))}}function qE(i){return typeof i=="function"?$E(i):(i instanceof IDBTransaction&&jE(i),FE(i,UE())?new Proxy(i,zh):i)}function ri(i){if(i instanceof IDBRequest)return zE(i);if(Ch.has(i))return Ch.get(i);const e=qE(i);return e!==i&&(Ch.set(i,e),cd.set(e,i)),e}const kh=i=>cd.get(i);function WE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ri(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ri(h.result),y.oldVersion,y.newVersion,ri(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const HE=["get","getKey","getAll","getAllKeys","count"],KE=["put","add","delete","clear"],Nh=new Map;function Tm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Nh.get(e))return Nh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=KE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||HE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&y.done]))[0]};return Nh.set(e,u),u}BE(i=>({...i,get:(e,t,s)=>Tm(e,t)||i.get(e,t,s),has:(e,t)=>!!Tm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(QE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function QE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",Im="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new ud("@firebase/app"),YE="@firebase/app-compat",XE="@firebase/analytics-compat",JE="@firebase/analytics",ZE="@firebase/app-check-compat",ew="@firebase/app-check",tw="@firebase/auth",nw="@firebase/auth-compat",rw="@firebase/database",iw="@firebase/data-connect",sw="@firebase/database-compat",ow="@firebase/functions",aw="@firebase/functions-compat",lw="@firebase/installations",uw="@firebase/installations-compat",cw="@firebase/messaging",hw="@firebase/messaging-compat",dw="@firebase/performance",fw="@firebase/performance-compat",pw="@firebase/remote-config",mw="@firebase/remote-config-compat",gw="@firebase/storage",yw="@firebase/storage-compat",_w="@firebase/firestore",vw="@firebase/vertexai-preview",Ew="@firebase/firestore-compat",ww="firebase",Tw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="[DEFAULT]",Iw={[jh]:"fire-core",[YE]:"fire-core-compat",[JE]:"fire-analytics",[XE]:"fire-analytics-compat",[ew]:"fire-app-check",[ZE]:"fire-app-check-compat",[tw]:"fire-auth",[nw]:"fire-auth-compat",[rw]:"fire-rtdb",[iw]:"fire-data-connect",[sw]:"fire-rtdb-compat",[ow]:"fire-fn",[aw]:"fire-fn-compat",[lw]:"fire-iid",[uw]:"fire-iid-compat",[cw]:"fire-fcm",[hw]:"fire-fcm-compat",[dw]:"fire-perf",[fw]:"fire-perf-compat",[pw]:"fire-rc",[mw]:"fire-rc-compat",[gw]:"fire-gcs",[yw]:"fire-gcs-compat",[_w]:"fire-fst",[Ew]:"fire-fst-compat",[vw]:"fire-vertex","fire-js":"fire-js",[ww]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map,Sw=new Map,$h=new Map;function Sm(i,e){try{i.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Xs(i){const e=i.name;if($h.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;$h.set(e,i);for(const t of vu.values())Sm(t,i);for(const t of Sw.values())Sm(t,i);return!0}function hd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function yr(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new Na("app","Firebase",Aw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=Tw;function $g(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ii.create("bad-app-name",{appName:String(o)});if(t||(t=bg()),!t)throw ii.create("no-options");const u=vu.get(o);if(u){if(_u(t,u.options)&&_u(s,u.config))return u;throw ii.create("duplicate-app",{appName:o})}const h=new VE(o);for(const y of $h.values())h.addComponent(y);const m=new Rw(t,s,h);return vu.set(o,m),m}function qg(i=Bh){const e=vu.get(i);if(!e&&i===Bh&&bg())return $g();if(!e)throw ii.create("no-app",{appName:i});return e}function si(i,e,t){var s;let o=(s=Iw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(m.join(" "));return}Xs(new qi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebase-heartbeat-database",Cw=1,Ea="firebase-heartbeat-store";let Dh=null;function Wg(){return Dh||(Dh=WE(Pw,Cw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ea)}catch(t){console.warn(t)}}}}).catch(i=>{throw ii.create("idb-open",{originalErrorMessage:i.message})})),Dh}async function kw(i){try{const t=(await Wg()).transaction(Ea),s=await t.objectStore(Ea).get(Hg(i));return await t.done,s}catch(e){if(e instanceof Rr)Tr.warn(e.message);else{const t=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(t.message)}}}async function Am(i,e){try{const s=(await Wg()).transaction(Ea,"readwrite");await s.objectStore(Ea).put(e,Hg(i)),await s.done}catch(t){if(t instanceof Rr)Tr.warn(t.message);else{const s=ii.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tr.warn(s.message)}}}function Hg(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=1024,Dw=720*60*60*1e3;class Vw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Rm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=Dw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rm(),{heartbeatsToSend:s,unsentEntries:o}=Ow(this._heartbeatsCache.heartbeats),u=yu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Tr.warn(t),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function Ow(i,e=Nw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Pm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Pm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class xw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EE()?wE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Am(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Am(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Pm(i){return yu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(i){Xs(new qi("platform-logger",e=>new GE(e),"PRIVATE")),Xs(new qi("heartbeat",e=>new Vw(e),"PRIVATE")),si(jh,Im,i),si(jh,Im,"esm2017"),si("fire-js","")}Lw("");var Mw="firebase",Fw="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si(Mw,Fw,"app");function dd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uw=Kg,Gg=new Na("auth","Firebase",Kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new ud("@firebase/auth");function bw(i,...e){Eu.logLevel<=Pe.WARN&&Eu.warn(`Auth (${oo}): ${i}`,...e)}function lu(i,...e){Eu.logLevel<=Pe.ERROR&&Eu.error(`Auth (${oo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(i,...e){throw pd(i,...e)}function On(i,...e){return pd(i,...e)}function fd(i,e,t){const s=Object.assign(Object.assign({},Uw()),{[e]:t});return new Na("auth","Firebase",s).create(e,{appName:i.name})}function ji(i){return fd(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zw(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qn(i,"argument-error"),fd(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Gg.create(i,...e)}function fe(i,e,...t){if(!i)throw pd(e,...t)}function _r(i){const e="INTERNAL ASSERTION FAILED: "+i;throw lu(e),new Error(e)}function Ir(i,e){i||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function jw(){return Cm()==="http:"||Cm()==="https:"}function Cm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jw()||gE()||"connection"in navigator)?navigator.onLine:!0}function $w(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=fE()||yE()}get(){return Bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new Va(3e4,6e4);function gd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ao(i,e,t,s,o={}){return Yg(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Da(Object.assign({key:i.config.apiKey},h)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:y},u);return mE()||(v.referrerPolicy="no-referrer"),Qg.fetch()(Xg(i,i.config.apiHost,t,m),v)})}async function Yg(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},qw),e);try{const o=new Kw(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw ru(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw ru(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw ru(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw ru(i,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw fd(i,w,v);Qn(i,w)}}catch(o){if(o instanceof Rr)throw o;Qn(i,"network-request-failed",{message:String(o)})}}async function Hw(i,e,t,s,o={}){const u=await ao(i,e,t,s,o);return"mfaPendingCredential"in u&&Qn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Xg(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?md(i.config,o):`${i.config.apiScheme}://${o}`}class Kw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(On(this.auth,"network-request-failed")),Ww.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ru(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=On(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(i,e){return ao(i,"POST","/v1/accounts:delete",e)}async function Jg(i,e){return ao(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qw(i,e=!1){const t=Bt(i),s=await t.getIdToken(e),o=yd(s);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:pa(Vh(o.auth_time)),issuedAtTime:pa(Vh(o.iat)),expirationTime:pa(Vh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Vh(i){return Number(i)*1e3}function yd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Fg(t);return o?JSON.parse(o):(lu("Failed to decode base64 JWT payload"),null)}catch(o){return lu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function km(i){const e=yd(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rr&&Yw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Yw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await wa(i,Jg(t,{idToken:s}));fe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Zg(u.providerUserInfo):[],m=Zw(i.providerData,h),y=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=y?v:!1,P={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Wh(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,P)}async function Jw(i){const e=Bt(i);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zw(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Zg(i){return i.map(e=>{var{providerId:t}=e,s=dd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(i,e){const t=await Yg(i,{},async()=>{const s=Da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=Xg(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Qg.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function t0(i,e){return ao(i,"POST","/v2/accounts:revokeToken",gd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=km(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await e0(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Ks;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(fe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(fe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Wh(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await wa(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qw(this,e)}reload(){return Jw(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await wu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yr(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await wa(this,Gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,y,v,w;const P=(s=t.displayName)!==null&&s!==void 0?s:void 0,V=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,$=(y=t._redirectEventId)!==null&&y!==void 0?y:void 0,me=(v=t.createdAt)!==null&&v!==void 0?v:void 0,_e=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ve,emailVerified:we,isAnonymous:He,providerData:Se,stsTokenManager:N}=t;fe(ve&&N,e,"internal-error");const I=Ks.fromJSON(this.name,N);fe(typeof ve=="string",e,"internal-error"),Jr(P,e.name),Jr(V,e.name),fe(typeof we=="boolean",e,"internal-error"),fe(typeof He=="boolean",e,"internal-error"),Jr(z,e.name),Jr(Q,e.name),Jr(Y,e.name),Jr($,e.name),Jr(me,e.name),Jr(_e,e.name);const A=new vr({uid:ve,auth:e,email:V,emailVerified:we,displayName:P,isAnonymous:He,photoURL:Q,phoneNumber:z,tenantId:Y,stsTokenManager:I,createdAt:me,lastLoginAt:_e});return Se&&Array.isArray(Se)&&(A.providerData=Se.map(C=>Object.assign({},C))),$&&(A._redirectEventId=$),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ks;o.updateFromServerResponse(t);const u=new vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await wu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Zg(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Ks;m.updateFromIdToken(s);const y=new vr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Wh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Map;function Er(i){Ir(i instanceof Function,"Expected a class definition");let e=Nm.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Nm.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ey.type="NONE";const Dm=ey;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(i,e,t){return`firebase:${i}:${e}:${t}`}class Gs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=uu(this.userKey,o.apiKey,u),this.fullPersistenceKey=uu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Gs(Er(Dm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Er(Dm);const h=uu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const P=vr._fromJSON(e,w);v!==u&&(m=P),u=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new Gs(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Gs(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ty(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oy(e))return"Blackberry";if(ay(e))return"Webos";if(ny(e))return"Safari";if((e.includes("chrome/")||ry(e))&&!e.includes("edge/"))return"Chrome";if(sy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ty(i=Ft()){return/firefox\//i.test(i)}function ny(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ry(i=Ft()){return/crios\//i.test(i)}function iy(i=Ft()){return/iemobile/i.test(i)}function sy(i=Ft()){return/android/i.test(i)}function oy(i=Ft()){return/blackberry/i.test(i)}function ay(i=Ft()){return/webos/i.test(i)}function _d(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function n0(i=Ft()){var e;return _d(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function r0(){return _E()&&document.documentMode===10}function ly(i=Ft()){return _d(i)||sy(i)||ay(i)||oy(i)||/windows phone/i.test(i)||iy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(i,e=[]){let t;switch(i){case"Browser":t=Vm(Ft());break;case"Worker":t=`${Vm(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(i,e={}){return ao(i,"GET","/v2/passwordPolicy",gd(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=6;class a0{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:o0,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(t=y.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(o=y.containsLowercaseLetter)!==null&&o!==void 0?o:!0),y.isValid&&(y.isValid=(u=y.containsUppercaseLetter)!==null&&u!==void 0?u:!0),y.isValid&&(y.isValid=(h=y.containsNumericCharacter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(m=y.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),y}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Om(this),this.idTokenSubscription=new Om(this),this.beforeStateQueue=new i0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Er(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jg(this,{idToken:e}),s=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(e);(!h||h===m)&&(y!=null&&y.user)&&(o=y.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yr(this.app))return Promise.reject(ji(this));const t=e?Bt(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yr(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yr(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await s0(this),t=new a0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await t0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Er(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xu(i){return Bt(i)}class Om{constructor(e){this.auth=e,this.observer=null,this.addObserver=RE(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u0(i){vd=i}function c0(i){return vd.loadJS(i)}function h0(){return vd.gapiScript}function d0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(i,e){const t=hd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(_u(u,e??{}))return o;Qn(o,"already-initialized")}return t.initialize({options:e})}function p0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Er);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function m0(i,e,t){const s=xu(i);fe(s._canInitEmulator,s,"emulator-config-failed"),fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=cy(e),{host:h,port:m}=g0(e),y=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${y}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),y0()}function cy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function g0(i){const e=cy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:xm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:xm(h)}}}function xm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function y0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,t){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(i,e){return Hw(i,"POST","/v1/accounts:signInWithIdp",gd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="http://localhost";class Wi extends hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=dd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Wi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Qs(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Qs(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qs(e,t)}buildRequest(){const e={requestUri:_0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Da(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Oa{constructor(){super("facebook.com")}static credential(e){return Wi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return gr.credential(t,s)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Oa{constructor(){super("github.com")}static credential(e){return Wi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Oa{constructor(){super("twitter.com")}static credential(e,t){return Wi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ti.credential(t,s)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await vr._fromIdTokenResponse(e,s,o),h=Lm(s);return new Js({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Lm(s);return new Js({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Lm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends Rr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Tu(e,t,s,o)}}function dy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(i,u,e,s):u})}async function v0(i,e,t=!1){const s=await wa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Js._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(i,e,t=!1){const{auth:s}=i;if(yr(s.app))return Promise.reject(ji(s));const o="reauthenticate";try{const u=await wa(i,dy(s,o,e,i),t);fe(u.idToken,s,"internal-error");const h=yd(u.idToken);fe(h,s,"internal-error");const{sub:m}=h;return fe(i.uid===m,s,"user-mismatch"),Js._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(i,e,t=!1){if(yr(i.app))return Promise.reject(ji(i));const s="signIn",o=await dy(i,s,e),u=await Js._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function T0(i,e,t,s){return Bt(i).onIdTokenChanged(e,t,s)}function I0(i,e,t){return Bt(i).beforeAuthStateChanged(e,t)}function S0(i,e,t,s){return Bt(i).onAuthStateChanged(e,t,s)}function A0(i){return Bt(i).signOut()}const Iu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Iu,"1"),this.storage.removeItem(Iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=1e3,P0=10;class py extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);r0()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,P0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}py.type="LOCAL";const C0=py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}my.type="SESSION";const gy=my;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Lu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await k0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=wd("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(P){const V=P;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(V.data.response);break;default:clearTimeout(w),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){return window}function D0(i){Hn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function V0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function x0(){return yy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="firebaseLocalStorageDb",L0=1,Su="firebaseLocalStorage",vy="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mu(i,e){return i.transaction([Su],e?"readwrite":"readonly").objectStore(Su)}function M0(){const i=indexedDB.deleteDatabase(_y);return new xa(i).toPromise()}function Hh(){const i=indexedDB.open(_y,L0);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Su,{keyPath:vy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Su)?e(s):(s.close(),await M0(),e(await Hh()))})})}async function Mm(i,e,t){const s=Mu(i,!0).put({[vy]:e,value:t});return new xa(s).toPromise()}async function F0(i,e){const t=Mu(i,!1).get(e),s=await new xa(t).toPromise();return s===void 0?null:s.value}function Fm(i,e){const t=Mu(i,!0).delete(e);return new xa(t).toPromise()}const U0=800,b0=3;class Ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>b0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lu._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await V0(),!this.activeServiceWorker)return;this.sender=new N0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hh();return await Mm(e,Iu,"1"),await Fm(e,Iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>F0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Mu(o,!1).getAll();return new xa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ey.type="LOCAL";const z0=Ey;new Va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(i,e){return e?Er(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function j0(i){return w0(i.auth,new Td(i),i.bypassAuthState)}function B0(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),E0(t,new Td(i),i.bypassAuthState)}async function $0(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),v0(t,new Td(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j0;case"linkViaPopup":case"linkViaRedirect":return $0;case"reauthViaPopup":case"reauthViaRedirect":return B0;default:Qn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Va(2e3,1e4);async function W0(i,e,t){if(yr(i.app))return Promise.reject(On(i,"operation-not-supported-in-this-environment"));const s=xu(i);zw(i,e,Ed);const o=wy(s,t);return new bi(s,"signInViaPopup",e,o).executeNotNull()}class bi extends Ty{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,bi.currentPopupAction&&bi.currentPopupAction.cancel(),bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(On(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(On(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(On(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q0.get())};e()}}bi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="pendingRedirect",cu=new Map;class K0 extends Ty{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=cu.get(this.auth._key());if(!e){try{const s=await G0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}cu.set(this.auth._key(),e)}return this.bypassAuthState||cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G0(i,e){const t=X0(e),s=Y0(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function Q0(i,e){cu.set(i._key(),e)}function Y0(i){return Er(i._redirectPersistence)}function X0(i){return uu(H0,i.config.apiKey,i.name)}async function J0(i,e,t=!1){if(yr(i.app))return Promise.reject(ji(i));const s=xu(i),o=wy(s,e),h=await new K0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=600*1e3;class eT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Iy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(On(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Iy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iy(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(i,e={}){return ao(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function sT(i){if(i.config.emulator)return;const{authorizedDomains:e}=await nT(i);for(const t of e)try{if(oT(t))return}catch{}Qn(i,"unauthorized-domain")}function oT(i){const e=qh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!iT.test(t))return!1;if(rT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Va(3e4,6e4);function bm(){const i=Hn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function lT(i){return new Promise((e,t)=>{var s,o,u;function h(){bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bm(),t(On(i,"network-request-failed"))},timeout:aT.get()})}if(!((o=(s=Hn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Hn().gapi)===null||u===void 0)&&u.load)h();else{const m=d0("iframefcb");return Hn()[m]=()=>{gapi.load?h():t(On(i,"network-request-failed"))},c0(`${h0()}?onload=${m}`).catch(y=>t(y))}}).catch(e=>{throw hu=null,e})}let hu=null;function uT(i){return hu=hu||lT(i),hu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=new Va(5e3,15e3),hT="__/auth/iframe",dT="emulator/auth/iframe",fT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mT(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?md(e,dT):`https://${i.config.authDomain}/${hT}`,s={apiKey:e.apiKey,appName:i.name,v:oo},o=pT.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Da(s).slice(1)}`}async function gT(i){const e=await uT(i),t=Hn().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:mT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=On(i,"network-request-failed"),m=Hn().setTimeout(()=>{u(h)},cT.get());function y(){Hn().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_T=500,vT=600,ET="_blank",wT="http://localhost";class zm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TT(i,e,t,s=_T,o=vT){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y=Object.assign(Object.assign({},yT),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=ry(v)?ET:t),ty(v)&&(e=e||wT,y.scrollbars="yes");const w=Object.entries(y).reduce((V,[z,Q])=>`${V}${z}=${Q},`,"");if(n0(v)&&m!=="_self")return IT(e||"",m),new zm(null);const P=window.open(e||"",m,w);fe(P,i,"popup-blocked");try{P.focus()}catch{}return new zm(P)}function IT(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="__/auth/handler",AT="emulator/auth/handler",RT=encodeURIComponent("fac");async function jm(i,e,t,s,o,u){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:oo,eventId:o};if(e instanceof Ed){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",AE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,P]of Object.entries({}))h[w]=P}if(e instanceof Oa){const w=e.getScopes().filter(P=>P!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const y=await i._getAppCheckToken(),v=y?`#${RT}=${encodeURIComponent(y)}`:"";return`${PT(i)}?${Da(m).slice(1)}${v}`}function PT({config:i}){return i.emulator?md(i,AT):`https://${i.authDomain}/${ST}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="webStorageSupport";class CT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=J0,this._overrideRedirectResult=Q0}async _openPopup(e,t,s,o){var u;Ir((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await jm(e,t,s,qh(),o);return TT(e,h,wd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await jm(e,t,s,qh(),o);return D0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ir(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await gT(e),s=new eT(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oh,{type:Oh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Oh];h!==void 0&&t(!!h),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ly()||ny()||_d()}}const kT=CT;var Bm="@firebase/auth",$m="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VT(i){Xs(new qi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uy(i)},v=new l0(s,o,u,y);return p0(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Xs(new qi("auth-internal",e=>{const t=xu(e.getProvider("auth").getImmediate());return(s=>new NT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(Bm,$m,DT(i)),si(Bm,$m,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=300,xT=zg("authIdTokenMaxAge")||OT;let qm=null;const LT=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>xT)return;const o=t==null?void 0:t.token;qm!==o&&(qm=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function MT(i=qg()){const e=hd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=f0(i,{popupRedirectResolver:kT,persistence:[z0,C0,gy]}),s=zg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=LT(u.toString());I0(t,h,()=>h(t.currentUser)),T0(t,m=>h(m))}}const o=Ug("auth");return o&&m0(t,`http://${o}`),t}function FT(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}u0({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=On("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",FT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VT("Browser");var Wm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bi,Sy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(C,D,x){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[D].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var C=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)C[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)C[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var x=N.g[3],S=I+(x^A&(D^x))+C[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[1]+3905402710&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[2]+606105819&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+C[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[5]+1200080426&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[6]+2821735955&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+C[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[9]+2336552879&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[10]+4294925233&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(x^A&(D^x))+C[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=x+(D^I&(A^D))+C[13]+4254626195&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(A^x&(I^A))+C[14]+2792965006&4294967295,D=x+(S<<17&4294967295|S>>>15),S=A+(I^D&(x^I))+C[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^x&(A^D))+C[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[6]+3225465664&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[11]+643717713&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+C[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[10]+38016083&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[15]+3634488961&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+C[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[14]+3275163606&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[3]+4107603335&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(A^D))+C[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=x+(A^D&(I^A))+C[2]+4243563512&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(x^I))+C[7]+1735328473&4294967295,D=x+(S<<14&4294967295|S>>>18),S=A+(x^I&(D^x))+C[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^x)+C[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[8]+2272392833&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[11]+1839030562&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+C[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[4]+1272893353&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[7]+4139469664&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+C[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[0]+3936430074&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[3]+3572445317&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^x)+C[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=x+(I^A^D)+C[12]+3873151461&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^A)+C[15]+530742520&4294967295,D=x+(S<<16&4294967295|S>>>16),S=A+(D^x^I)+C[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~x))+C[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[7]+1126891415&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[14]+2878612391&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+C[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[3]+2399980690&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[10]+4293915773&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+C[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[15]+4264355552&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[6]+2734768916&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~x))+C[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=x+(A^(I|~D))+C[11]+3174756917&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~A))+C[2]+718787259&4294967295,D=x+(S<<15&4294967295|S>>>17),S=A+(x^(D|~I))+C[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+x&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,C=this.B,D=this.h,x=0;x<I;){if(D==0)for(;x<=A;)o(this,N,x),x+=this.blockSize;if(typeof N=="string"){for(;x<I;)if(C[D++]=N.charCodeAt(x++),D==this.blockSize){o(this,C),D=0;break}}else for(;x<I;)if(C[D++]=N[x++],D==this.blockSize){o(this,C),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var C=0;32>C;C+=8)N[A++]=this.g[I]>>>C&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],C=!0,D=N.length-1;0<=D;D--){var x=N[D]|0;C&&x==I||(A[D]=x,C=!1)}this.g=A}var m={};function y(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return P;if(0>N)return $(v(-N));for(var I=[],A=1,C=0;N>=A;C++)I[C]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return $(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),C=P,D=0;D<N.length;D+=8){var x=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+x),I);8>x?(x=v(Math.pow(I,x)),C=C.j(x).add(v(S))):(C=C.j(A),C=C.add(v(S)))}return C}var P=y(0),V=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(Y(this))return-$(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var C=this.i(A);N+=(0<=C?C:4294967296+C)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Q(this))return"0";if(Y(this))return"-"+$(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,C="";;){var D=we(A,I).g;A=me(A,D.j(I));var x=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,Q(A))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Q(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=me(this,N),Y(N)?-1:Q(N)?0:1};function $(N){for(var I=N.g.length,A=[],C=0;C<I;C++)A[C]=~N.g[C];return new h(A,~N.h).add(V)}i.abs=function(){return Y(this)?$(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0,D=0;D<=I;D++){var x=C+(this.i(D)&65535)+(N.i(D)&65535),S=(x>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);C=S>>>16,x&=65535,S&=65535,A[D]=S<<16|x}return new h(A,A[A.length-1]&-2147483648?-1:0)};function me(N,I){return N.add($(I))}i.j=function(N){if(Q(this)||Q(N))return P;if(Y(this))return Y(N)?$(this).j($(N)):$($(this).j(N));if(Y(N))return $(this.j($(N)));if(0>this.l(z)&&0>N.l(z))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],C=0;C<2*I;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<N.g.length;D++){var x=this.i(C)>>>16,S=this.i(C)&65535,et=N.i(D)>>>16,Ct=N.i(D)&65535;A[2*C+2*D]+=S*Ct,_e(A,2*C+2*D),A[2*C+2*D+1]+=x*Ct,_e(A,2*C+2*D+1),A[2*C+2*D+1]+=S*et,_e(A,2*C+2*D+1),A[2*C+2*D+2]+=x*et,_e(A,2*C+2*D+2)}for(C=0;C<I;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=I;C<2*I;C++)A[C]=0;return new h(A,0)};function _e(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ve(N,I){this.g=N,this.h=I}function we(N,I){if(Q(I))throw Error("division by zero");if(Q(N))return new ve(P,P);if(Y(N))return I=we($(N),I),new ve($(I.g),$(I.h));if(Y(I))return I=we(N,$(I)),new ve($(I.g),I.h);if(30<N.g.length){if(Y(N)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var A=V,C=I;0>=C.l(N);)A=He(A),C=He(C);var D=Se(A,1),x=Se(C,1);for(C=Se(C,2),A=Se(A,2);!Q(C);){var S=x.add(C);0>=S.l(N)&&(D=D.add(A),x=S),C=Se(C,1),A=Se(A,1)}return I=me(N,D.j(I)),new ve(D,I)}for(D=P;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=v(A),S=x.j(I);Y(S)||0<S.l(N);)A-=C,x=v(A),S=x.j(I);Q(x)&&(x=V),D=D.add(x),N=me(N,S)}return new ve(D,N)}i.A=function(N){return we(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)&N.i(C);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)|N.i(C);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)^N.i(C);return new h(A,this.h^N.h)};function He(N){for(var I=N.g.length+1,A=[],C=0;C<I;C++)A[C]=N.i(C)<<1|N.i(C-1)>>>31;return new h(A,N.h)}function Se(N,I){var A=I>>5;I%=32;for(var C=N.g.length-A,D=[],x=0;x<C;x++)D[x]=0<I?N.i(x+A)>>>I|N.i(x+A+1)<<32-I:N.i(x+A);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Sy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Bi=h}).apply(typeof Wm<"u"?Wm:typeof self<"u"?self:typeof window<"u"?window:{});var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ay,ca,Ry,du,Kh,Py,Cy,ky;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof iu=="object"&&iu];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in g))break e;g=g[L]}l=l[l.length-1],E=g[l],f=f(E),f!=E&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var g=0,E=!1,L={next:function(){if(!E&&g<l.length){var b=g++;return{value:f(b,l[b]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,g){return l.call.apply(l.bind,arguments)}function P(l,f,g){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function V(l,f,g){return V=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:P,V.apply(null,arguments)}function z(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Q(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(E,L,b){for(var X=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)X[Me-2]=arguments[Me];return f.prototype[L].apply(E,X)}}function Y(l){const f=l.length;if(0<f){const g=Array(f);for(let E=0;E<f;E++)g[E]=l[E];return g}return[]}function $(l,f){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(y(E)){const L=l.length||0,b=E.length||0;l.length=L+b;for(let X=0;X<b;X++)l[L+X]=E[X]}else l.push(E)}}class me{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _e(l){return/^[\s\xa0]*$/.test(l)}function ve(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var He=ve().indexOf("Gecko")!=-1&&!(ve().toLowerCase().indexOf("webkit")!=-1&&ve().indexOf("Edge")==-1)&&!(ve().indexOf("Trident")!=-1||ve().indexOf("MSIE")!=-1)&&ve().indexOf("Edge")==-1;function Se(l,f,g){for(const E in l)f.call(g,l[E],E,l)}function N(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function I(l){const f={};for(const g in l)f[g]=l[g];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)l[g]=E[g];for(let b=0;b<A.length;b++)g=A[b],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function D(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function x(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,g){const E=Ct.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Ct=new me(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,ue=new et,ee=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){x(g)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ee=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return l})();function Te(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(He){e:{try{we(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ce[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Te.aa.h.call(this)}}Q(Te,ae);var Ce={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function ze(l,f,g,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++Le,this.da=this.fa=!1}function pt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Xn(l){this.src=l,this.g={},this.h=0}Xn.prototype.add=function(l,f,g,E,L){var b=l.toString();l=this.g[b],l||(l=this.g[b]=[],this.h++);var X=Pr(l,f,E,L);return-1<X?(f=l[X],g||(f.fa=!1)):(f=new ze(f,this.src,b,!!E,L),f.fa=g,l.push(f)),f};function Ji(l,f){var g=f.type;if(g in l.g){var E=l.g[g],L=Array.prototype.indexOf.call(E,f,void 0),b;(b=0<=L)&&Array.prototype.splice.call(E,L,1),b&&(pt(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Pr(l,f,g,E){for(var L=0;L<l.length;++L){var b=l[L];if(!b.da&&b.listener==f&&b.capture==!!g&&b.ha==E)return L}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),Zi={};function po(l,f,g,E,L){if(Array.isArray(f)){for(var b=0;b<f.length;b++)po(l,f[b],g,E,L);return null}return g=yo(g),l&&l[xe]?l.K(f,g,v(E)?!!E.capture:!1,L):mo(l,f,g,!1,E,L)}function mo(l,f,g,E,L,b){if(!f)throw Error("Invalid event type");var X=v(L)?!!L.capture:!!L,Me=ts(l);if(Me||(l[ci]=Me=new Xn(l)),g=Me.add(f,g,E,X,b),g.proxy)return g;if(E=ja(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)Ee||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(Zn(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ja(){function l(g){return f.call(l.src,l.listener,g)}const f=go;return l}function es(l,f,g,E,L){if(Array.isArray(f))for(var b=0;b<f.length;b++)es(l,f[b],g,E,L);else E=v(E)?!!E.capture:!!E,g=yo(g),l&&l[xe]?(l=l.i,f=String(f).toString(),f in l.g&&(b=l.g[f],g=Pr(b,g,E,L),-1<g&&(pt(b[g]),Array.prototype.splice.call(b,g,1),b.length==0&&(delete l.g[f],l.h--)))):l&&(l=ts(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,g,E,L)),(g=-1<l?f[l]:null)&&Jn(g))}function Jn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[xe])Ji(f.i,l);else{var g=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(g,E,l.capture):f.detachEvent?f.detachEvent(Zn(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=ts(f))?(Ji(g,l),g.h==0&&(g.src=null,f[ci]=null)):pt(l)}}}function Zn(l){return l in Zi?Zi[l]:Zi[l]="on"+l}function go(l,f){if(l.da)l=!0;else{f=new Te(f,this);var g=l.listener,E=l.ha||l.src;l.fa&&Jn(l),l=g.call(E,f)}return l}function ts(l){return l=l[ci],l instanceof Xn?l:null}var ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function yo(l){return typeof l=="function"?l:(l[ns]||(l[ns]=function(f){return l.handleEvent(f)}),l[ns])}function lt(){j.call(this),this.i=new Xn(this),this.M=this,this.F=null}Q(lt,j),lt.prototype[xe]=!0,lt.prototype.removeEventListener=function(l,f,g,E){es(this,l,f,g,E)};function ut(l,f){var g,E=l.F;if(E)for(g=[];E;E=E.F)g.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(E,l),C(f,L)}if(L=!0,g)for(var b=g.length-1;0<=b;b--){var X=f.g=g[b];L=er(X,E,!0,f)&&L}if(X=f.g=l,L=er(X,E,!0,f)&&L,L=er(X,E,!1,f)&&L,g)for(b=0;b<g.length;b++)X=f.g=g[b],L=er(X,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],E=0;E<g.length;E++)pt(g[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,g,E){return this.i.add(String(l),f,!1,g,E)},lt.prototype.L=function(l,f,g,E){return this.i.add(String(l),f,!0,g,E)};function er(l,f,g,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,b=0;b<f.length;++b){var X=f[b];if(X&&!X.da&&X.capture==g){var Me=X.listener,ct=X.ha||X.src;X.fa&&Ji(l.i,X),L=Me.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function _o(l,f,g){if(typeof l=="function")g&&(l=V(l,g));else if(l&&typeof l.handleEvent=="function")l=V(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Cr(l){l.g=_o(()=>{l.g=null,l.i&&(l.i=!1,Cr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class hi extends j{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function di(l){j.call(this),this.h=l,this.g={}}Q(di,j);var vo=[];function Eo(l){Se(l.g,function(f,g){this.g.hasOwnProperty(g)&&Jn(f)},l),l.g={}}di.prototype.N=function(){di.aa.N.call(this),Eo(this)},di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=m.JSON.stringify,To=m.JSON.parse,Io=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function fi(){}fi.prototype.h=null;function rs(l){return l.h||(l.h=l.i())}function is(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ln(){ae.call(this,"d")}Q(Ln,ae);function ss(){ae.call(this,"c")}Q(ss,ae);var Mn={},So=null;function pi(){return So=So||new lt}Mn.La="serverreachability";function Ao(l){ae.call(this,Mn.La,l)}Q(Ao,ae);function tr(l){const f=pi();ut(f,new Ao(f))}Mn.STAT_EVENT="statevent";function Ro(l,f){ae.call(this,Mn.STAT_EVENT,l),this.stat=f}Q(Ro,ae);function tt(l){const f=pi();ut(f,new Ro(f,l))}Mn.Ma="timingevent";function os(l,f){ae.call(this,Mn.Ma,l),this.size=f}Q(os,ae);function yn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function gi(l,f,g,E,L,b){l.info(function(){if(l.g)if(b)for(var X="",Me=b.split("&"),ct=0;ct<Me.length;ct++){var ke=Me[ct].split("=");if(1<ke.length){var mt=ke[0];ke=ke[1];var it=mt.split("_");X=2<=it.length&&it[1]=="type"?X+(mt+"="+ke+"&"):X+(mt+"=redacted&")}}else X=null;else X=b;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+X})}function as(l,f,g,E,L,b,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+b+" "+X})}function _n(l,f,g,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Yu(l,g)+(E?" "+E:"")})}function Po(l,f){l.info(function(){return"TIMEOUT: "+f})}mi.prototype.info=function(){};function Yu(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var E=g[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var b=L[0];if(b!="noop"&&b!="stop"&&b!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return wo(g)}catch{return f}}var ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function yi(){}Q(yi,fi),yi.prototype.g=function(){return new XMLHttpRequest},yi.prototype.i=function(){return{}},vn=new yi;function En(l,f,g,E){this.j=l,this.i=f,this.l=g,this.R=E||1,this.U=new di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}var Co={},us={};function cs(l,f,g){l.L=1,l.v=Or(Jt(f)),l.m=g,l.P=!0,ko(l,null)}function ko(l,f){l.F=Date.now(),je(l),l.A=Jt(l.v);var g=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Lr(g.i,"t",E),l.C=0,g=l.j.J,l.h=new $a,l.g=al(l.j,g?f:null,!l.m),0<l.O&&(l.M=new hi(V(l.Y,l,l.g),l.O)),f=l.U,g=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(vo[0]=L.toString()),L=vo);for(var b=0;b<L.length;b++){var X=po(g,L[b],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),tr(),gi(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const it=qt(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Lo(this.g)))){this.J||it!=4||f==7||(f==8||0>=un?tr(3):tr(2)),_i(this);var g=this.g.Z();this.X=g;t:if(qa(this)){var E=Lo(this.g);l="";var L=E.length,b=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),kr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(b&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,as(this.i,this.u,this.A,this.l,this.R,it,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ct=this.g;if((Me=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(Me)){var ke=Me;break t}}ke=null}if(g=ke)_n(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,g);else{this.o=!1,this.s=3,tt(12),an(this),kr(this);break e}}if(this.P){g=!0;let en;for(;!this.J&&this.C<X.length;)if(en=Xu(this,X),en==us){it==4&&(this.s=4,tt(14),g=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Co){this.s=4,tt(15),_n(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else _n(this.i,this.l,en,null),No(this,en);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||X.length!=0||this.h.h||(this.s=1,tt(16),g=!1),this.o=this.o&&g,!g)_n(this.i,this.l,X,"[Invalid Chunked Response]"),an(this),kr(this);else if(0<X.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Fo(mt),mt.M=!0,tt(11))}}else _n(this.i,this.l,X,null),No(this,X);it==4&&an(this),this.o&&!this.J&&(it==4?ws(this.j,this):(this.o=!1,je(this)))}else gs(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),an(this),kr(this)}}}catch{}finally{}};function qa(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Xu(l,f){var g=l.C,E=f.indexOf(`
`,g);return E==-1?us:(g=Number(f.substring(g,E)),isNaN(g)?Co:(E+=1,E+g>f.length?us:(f=f.slice(E,E+g),l.C=E+g,f)))}En.prototype.cancel=function(){this.J=!0,an(this)};function je(l){l.S=Date.now()+l.I,Wa(l,l.I)}function Wa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=yn(V(l.ba,l),f)}function _i(l){l.B&&(m.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Po(this.i,this.A),this.L!=2&&(tr(),tt(17)),an(this),this.s=2,kr(this)):Wa(this,this.S-l)};function kr(l){l.j.G==0||l.J||ws(l.j,l)}function an(l){_i(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Eo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function No(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Ut(g.h,l))){if(!l.K&&Ut(g.h,l)&&g.G==3){try{var E=g.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Es(g),An(g);else break e;vs(g),tt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=yn(V(g.Za,g),6e3));if(1>=Ka(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else or(g,11)}else if((l.K||g.g==l)&&Es(g),!_e(f))for(L=g.Da.g.parse(f),f=0;f<L.length;f++){let ke=L[f];if(g.T=ke[0],ke=ke[1],g.G==2)if(ke[0]=="c"){g.K=ke[1],g.ia=ke[2];const mt=ke[3];mt!=null&&(g.la=mt,g.j.info("VER="+g.la));const it=ke[4];it!=null&&(g.Aa=it,g.j.info("SVER="+g.Aa));const un=ke[5];un!=null&&typeof un=="number"&&0<un&&(E=1.5*un,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const en=l.g;if(en){const Ai=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var b=E.h;b.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Do(b,b.h),b.h=null))}if(E.D){const Is=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Is&&(E.ya=Is,be(E.I,E.D,Is))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var X=l;if(E.qa=ol(E,E.J?E.ia:null,E.W),X.K){Ga(E.h,X);var Me=X,ct=E.L;ct&&(Me.I=ct),Me.B&&(_i(Me),je(Me)),E.g=X}else Si(E);0<g.i.length&&zn(g)}else ke[0]!="stop"&&ke[0]!="close"||or(g,7);else g.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?or(g,7):wt(g):ke[0]!="noop"&&g.l&&g.l.ta(ke),g.v=0)}}tr(4)}catch{}}var Ha=class{constructor(l,f){this.g=l,this.map=f}};function vi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ka(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Do(l,f){l.g?l.g.add(f):l.h=f}function Ga(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}vi.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qa(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return Y(l.i)}function hs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],g=l.length,E=0;E<g;E++)f.push(l[E]);return f}f=[],g=0;for(E in l)f[g++]=l[E];return f}function ds(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const E in l)f[g++]=E;return f}}}function Nr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ds(l),E=hs(l),L=E.length,b=0;b<L;b++)f.call(void 0,E[b],g&&g[b],l)}var Ei=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ju(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var E=l[g].indexOf("="),L=null;if(0<=E){var b=l[g].substring(0,E);L=l[g].substring(E+1)}else b=l[g];f(b,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function nr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof nr){this.h=l.h,wi(this,l.j),this.o=l.o,this.g=l.g,Dr(this,l.s),this.l=l.l;var f=l.i,g=new Fn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Vr(this,g),this.m=l.m}else l&&(f=String(l).match(Ei))?(this.h=!1,wi(this,f[1]||"",!0),this.o=Re(f[2]||""),this.g=Re(f[3]||"",!0),Dr(this,f[4]),this.l=Re(f[5]||"",!0),Vr(this,f[6]||"",!0),this.m=Re(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}nr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(xr(f,fs,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(xr(f,fs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(xr(g,g.charAt(0)=="/"?Ja:Xa,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",xr(g,Vo)),l.join("")};function Jt(l){return new nr(l)}function wi(l,f,g){l.j=g?Re(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Dr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vr(l,f,g){f instanceof Fn?(l.i=f,Un(l.i,l.h)):(g||(f=xr(f,Za)),l.i=new Fn(f,l.h))}function be(l,f,g){l.i.set(f,g)}function Or(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Re(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xr(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Ya),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ya(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var fs=/[#\/\?@]/g,Xa=/[#\?:]/g,Ja=/[#\?]/g,Za=/[#\?@]/g,Vo=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&Ju(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}i=Fn.prototype,i.add=function(l,f){Et(this),this.i=null,l=ln(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function wn(l,f){Et(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Tn(l,f){return Et(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(g,E){g.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let E=0;E<f.length;E++){const L=l[E];for(let b=0;b<L.length;b++)g.push(f[E])}return g},i.V=function(l){Et(this);let f=[];if(typeof l=="string")Tn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},i.set=function(l,f){return Et(this),this.i=null,l=ln(this,l),Tn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,g){wn(l,f),0<g.length&&(l.i=null,l.g.set(ln(l,f),Y(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var E=f[g];const b=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=b;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(wn(this,E),Lr(this,L,g))},l)),l.j=f}function Zu(l,f){const g=new mi;if(m.Image){const E=new Image;E.onload=z($t,g,"TestLoadImage: loaded",!0,f,E),E.onerror=z($t,g,"TestLoadImage: error",!1,f,E),E.onabort=z($t,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=z($t,g,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function el(l,f){const g=new mi,E=new AbortController,L=setTimeout(()=>{E.abort(),$t(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(b=>{clearTimeout(L),b.ok?$t(g,"TestPingServer: ok",!0,f):$t(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),$t(g,"TestPingServer: error",!1,f)})}function $t(l,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function ec(){this.g=new Io}function tl(l,f,g){const E=g||"";try{Nr(l,function(L,b){let X=L;v(L)&&(X=wo(L)),f.push(E+b+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function rr(l){this.l=l.Ub||null,this.j=l.eb||!1}Q(rr,fi),rr.prototype.g=function(){return new Ti(this.l,this.j)},rr.prototype.i=(function(l){return function(){return l}})({});function Ti(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(Ti,lt),i=Ti.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Sn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function nl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?In(this):Sn(this),this.readyState==3&&nl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,In(this))},i.Qa=function(l){this.g&&(this.response=l,In(this))},i.ga=function(){this.g&&In(this)};function In(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Sn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Sn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ir(l){let f="";return Se(l,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Mr(l,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=ir(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):be(l,f,g))}function Ke(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(Ke,lt);var tc=/^https?$/i,Oo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?rs(this.o):rs(vn),this.g.onreadystatechange=V(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(b){Ii(this,b);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const b of E.keys())g.set(b,E.get(b));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(b=>b.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Oo,f,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,X]of g)this.g.setRequestHeader(b,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ms(this),this.u=!0,this.g.send(l),this.u=!1}catch(b){Ii(this,b)}};function Ii(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ps(l),Zt(l)}function ps(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),Zt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zt(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},i.bb=function(){xo(this)};function xo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)_o(l.Ea,0,l);else if(ut(l,"readystatechange"),qt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=X===0){var L=String(l.D).match(Ei)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!tc.test(L?L.toLowerCase():"")}g=E}if(g)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var b=2<qt(l)?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.Z()+"]",ps(l)}}finally{Zt(l)}}}}function Zt(l,f){if(l.g){ms(l);const g=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{g.onreadystatechange=E}catch{}}}function ms(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),To(f)}};function Lo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function gs(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(_e(l[E]))continue;var g=D(l[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const b=f[L]||[];f[L]=b,b.push(g)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bn(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Mo(l){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bn("baseRetryDelayMs",5e3,l),this.cb=bn("retryDelaySeedMs",1e4,l),this.Wa=bn("forwardChannelMaxRetries",2,l),this.wa=bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vi(l&&l.concurrentRequestLimit),this.Da=new ec,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Mo.prototype,i.la=8,i.G=1,i.connect=function(l,f,g,E){tt(0),this.W=l,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=ol(this,null,this.W),zn(this)};function wt(l){if(ys(l),l.G==3){var f=l.U++,g=Jt(l.I);if(be(g,"SID",l.K),be(g,"RID",f),be(g,"TYPE","terminate"),sr(l,g),f=new En(l,l.j,f),f.L=2,f.v=Or(Jt(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=al(f.j,null),f.g.ea(f.v)),f.F=Date.now(),je(f)}sl(l)}function An(l){l.g&&(Fo(l),l.g.cancel(),l.g=null)}function ys(l){An(l),l.u&&(m.clearTimeout(l.u),l.u=null),Es(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function zn(l){if(!Xt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),J||(Ue(),J=!0),ue.add(f,l),l.B=0}}function nc(l,f){return Ka(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=yn(V(l.Ga,l,f),il(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new En(this,this.j,l);let b=this.o;if(this.S&&(b?(b=I(b),C(b,this.S)):b=this.S),this.m!==null||this.O||(L.H=b,b=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Fr(this,L,f),g=Jt(this.I),be(g,"RID",l),be(g,"CVER",22),this.D&&be(g,"X-HTTP-Session-Id",this.D),sr(this,g),b&&(this.O?f="headers="+encodeURIComponent(String(ir(b)))+"&"+f:this.m&&Mr(g,this.m,b)),Do(this.h,L),this.Ua&&be(g,"TYPE","init"),this.P?(be(g,"$req",f),be(g,"SID","null"),L.T=!0,cs(L,g,null)):cs(L,g,f),this.G=2}}else this.G==3&&(l?_s(this,l):this.i.length==0||Xt(this.h)||_s(this))};function _s(l,f){var g;f?g=f.l:g=l.U++;const E=Jt(l.I);be(E,"SID",l.K),be(E,"RID",g),be(E,"AID",l.T),sr(l,E),l.m&&l.o&&Mr(E,l.m,l.o),g=new En(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Do(l.h,g),cs(g,E,f)}function sr(l,f){l.H&&Se(l.H,function(g,E){be(f,E,g)}),l.l&&Nr({},function(g,E){be(f,E,g)})}function Fr(l,f,g){g=Math.min(l.i.length,g);var E=l.l?V(l.l.Na,l.l,l):null;e:{var L=l.i;let b=-1;for(;;){const X=["count="+g];b==-1?0<g?(b=L[0].g,X.push("ofs="+b)):b=0:X.push("ofs="+b);let Me=!0;for(let ct=0;ct<g;ct++){let ke=L[ct].g;const mt=L[ct].map;if(ke-=b,0>ke)b=Math.max(0,L[ct].g-100),Me=!1;else try{tl(mt,X,"req"+ke+"_")}catch{E&&E(mt)}}if(Me){E=X.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,E}function Si(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),J||(Ue(),J=!0),ue.add(f,l),l.v=0}}function vs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=yn(V(l.Fa,l),il(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,rl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=yn(V(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),An(this),rl(this))};function Fo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function rl(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Jt(l.qa);be(f,"RID","rpc"),be(f,"SID",l.K),be(f,"AID",l.T),be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(f,"TO",l.ja),be(f,"TYPE","xmlhttp"),sr(l,f),l.m&&l.o&&Mr(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Or(Jt(f)),g.m=null,g.P=!0,ko(g,l)}i.Za=function(){this.C!=null&&(this.C=null,An(this),vs(this),tt(19))};function Es(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function ws(l,f){var g=null;if(l.g==f){Es(l),Fo(l),l.g=null;var E=2}else if(Ut(l.h,f))g=f.D,Ga(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=pi(),ut(E,new os(E,g)),zn(l)}else Si(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&nc(l,f)||E==2&&vs(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),L){case 1:or(l,5);break;case 4:or(l,10);break;case 3:or(l,6);break;default:or(l,2)}}}function il(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function or(l,f){if(l.j.info("Error code "+f),f==2){var g=V(l.fb,l),E=l.Xa;const L=!E;E=new nr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||wi(E,"https"),Or(E),L?Zu(E.toString(),g):el(E.toString(),g)}else tt(2);l.G=0,l.l&&l.l.sa(f),sl(l),ys(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function sl(l){if(l.G=0,l.ka=[],l.l){const f=Qa(l.h);(f.length!=0||l.i.length!=0)&&($(l.ka,f),$(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function ol(l,f,g){var E=g instanceof nr?Jt(g):new nr(g);if(E.g!="")f&&(E.g=f+"."+E.g),Dr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var b=new nr(null);E&&wi(b,E),f&&(b.g=f),L&&Dr(b,L),g&&(b.l=g),E=b}return g=l.D,f=l.ya,g&&f&&be(E,g,f),be(E,"VER",l.la),sr(l,E),E}function al(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new rr({eb:g})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uo(){}i=Uo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ts(){}Ts.prototype.g=function(l,f){return new bt(l,f)};function bt(l,f){lt.call(this),this.g=new Mo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!_e(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_e(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new jn(this)}Q(bt,lt),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){wt(this.g)},bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=wo(l),l=g);f.i.push(new Ha(f.Ya++,l)),f.G==3&&zn(f)},bt.prototype.N=function(){this.g.l=null,delete this.j,wt(this.g),delete this.g,bt.aa.N.call(this)};function ll(l){Ln.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Q(ll,Ln);function ul(){ss.call(this),this.status=1}Q(ul,ss);function jn(l){this.g=l}Q(jn,Uo),jn.prototype.ua=function(){ut(this.g,"a")},jn.prototype.ta=function(l){ut(this.g,new ll(l))},jn.prototype.sa=function(l){ut(this.g,new ul)},jn.prototype.ra=function(){ut(this.g,"b")},Ts.prototype.createWebChannel=Ts.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,ky=function(){return new Ts},Cy=function(){return pi()},Py=Mn,Kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ls.NO_ERROR=0,ls.TIMEOUT=8,ls.HTTP_ERROR=6,du=ls,Ba.COMPLETE="complete",Ry=Ba,is.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",lt.prototype.listen=lt.prototype.K,ca=is,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Ay=Ke}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});const Hm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new ud("@firebase/firestore");function ua(){return Hi.logLevel}function se(i,...e){if(Hi.logLevel<=Pe.DEBUG){const t=e.map(Id);Hi.debug(`Firestore (${lo}): ${i}`,...t)}}function Sr(i,...e){if(Hi.logLevel<=Pe.ERROR){const t=e.map(Id);Hi.error(`Firestore (${lo}): ${i}`,...t)}}function Zs(i,...e){if(Hi.logLevel<=Pe.WARN){const t=e.map(Id);Hi.warn(`Firestore (${lo}): ${i}`,...t)}}function Id(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(i="Unexpected state"){const e=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: `+i;throw Sr(e),new Error(e)}function Fe(i,e){i||pe()}function ye(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class bT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class zT{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new $i;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new $i,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},m=y=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new $i)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string"),new Ny(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Lt(e)}}class jT{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BT{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new jT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $T{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const s=u=>{u.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new $T(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=WT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Oe(i,e){return i<e?-1:i>e?1:0}function eo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new re(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ft(0,0))}static max(){return new ge(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(),s===void 0?s=e.length-t:s>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class We extends Ta{construct(e,t,s){return new We(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new re(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new We(t)}static emptyPath(){return new We([])}}const HT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends Ta{construct(e,t,s){return new At(e,t,s)}static isValidIdentifier(e){return HT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new At(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new re(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new re(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new re(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(t)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(We.fromString(e))}static fromName(e){return new le(We.fromString(e).popFirst(5))}static empty(){return new le(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return We.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new We(e.slice()))}}function KT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=ge.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new ai(o,le.empty(),e)}function GT(i){return new ai(i.readTime,i.key,-1)}class ai{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ai(ge.min(),le.empty(),-1)}static max(){return new ai(ge.max(),le.empty(),-1)}}function QT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(i){if(i.code!==B.FAILED_PRECONDITION||i.message!==YT)throw i;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new H(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof H?t:H.resolve(t)}catch(t){return H.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):H.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):H.reject(t)}static resolve(e){return new H(((t,s)=>{t(e)}))}static reject(e){return new H(((t,s)=>{s(e)}))}static waitFor(e){return new H(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(y=>s(y)))})),h=!0,u===o&&t()}))}static or(e){let t=H.resolve(!1);for(const s of e)t=t.next((o=>o?H.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new H(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((w=>{h[v]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new H(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function JT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ma(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sd.oe=-1;function Fu(i){return i==null}function Au(i){return i===0&&1/i==-1/0}function ZT(i){return typeof i=="number"&&Number.isInteger(i)&&!Au(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function uo(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Vy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new Xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??St.RED,this.left=o??St.EMPTY,this.right=u??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new St(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return St.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,t,s,o,u){return this}insert(e,t,s){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gm(this.data.getIterator())}getIteratorFrom(e){return new Gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class Gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Rt(At.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Oy("Invalid base64 string: "+u):u}})(e);return new Pt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const eI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(i){if(Fe(!!i),typeof i=="string"){let e=0;const t=eI.exec(i);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ki(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Rd(i){const e=i.mapValue.fields.__previous_value__;return Ad(e)?Rd(e):e}function Ia(i){const e=li(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,s,o,u,h,m,y,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v}}class Sa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={mapValue:{}};function Gi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ad(i)?4:rI(i)?9007199254740991:nI(i)?10:11:pe()}function Yn(i,e){if(i===e)return!0;const t=Gi(i);if(t!==Gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ia(i).isEqual(Ia(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=li(o.timestampValue),m=li(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Ki(o.bytesValue).isEqual(Ki(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Au(h)===Au(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return eo(i.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Km(h)!==Km(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!Yn(h[y],m[y])))return!1;return!0})(i,e);default:return pe()}}function Aa(i,e){return(i.values||[]).find((t=>Yn(t,e)))!==void 0}function to(i,e){if(i===e)return 0;const t=Gi(i),s=Gi(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=rt(u.integerValue||u.doubleValue),y=rt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return Qm(i.timestampValue,e.timestampValue);case 4:return Qm(Ia(i),Ia(e));case 5:return Oe(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ki(u),y=Ki(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const w=Oe(m[v],y[v]);if(w!==0)return w}return Oe(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Oe(rt(u.latitude),rt(h.latitude));return m!==0?m:Oe(rt(u.longitude),rt(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return Ym(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,y,v,w;const P=u.fields||{},V=h.fields||{},z=(m=P.value)===null||m===void 0?void 0:m.arrayValue,Q=(y=V.value)===null||y===void 0?void 0:y.arrayValue,Y=Oe(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((w=Q==null?void 0:Q.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:Ym(z,Q)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===ou.mapValue&&h===ou.mapValue)return 0;if(u===ou.mapValue)return 1;if(h===ou.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let P=0;P<y.length&&P<w.length;++P){const V=Oe(y[P],w[P]);if(V!==0)return V;const z=to(m[y[P]],v[w[P]]);if(z!==0)return z}return Oe(y.length,w.length)})(i.mapValue,e.mapValue);default:throw pe()}}function Qm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=li(i),s=li(e),o=Oe(t.seconds,s.seconds);return o!==0?o:Oe(t.nanos,s.nanos)}function Ym(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=to(t[o],s[o]);if(u)return u}return Oe(t.length,s.length)}function no(i){return Gh(i)}function Gh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=li(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ki(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return le.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Gh(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Gh(t.fields[h])}`;return o+"}"})(i.mapValue):pe()}function Xm(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Qh(i){return!!i&&"integerValue"in i}function Pd(i){return!!i&&"arrayValue"in i}function Jm(i){return!!i&&"nullValue"in i}function Zm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function fu(i){return!!i&&"mapValue"in i}function nI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ma(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return uo(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ma(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ma(i.arrayValue.values[t]);return e}return Object.assign({},i)}function rI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(t)}setAll(e){let t=At.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=ma(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){uo(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new gn(ma(this.value))}}function xy(i){const e=[];return uo(i.fields,((t,s)=>{const o=new At([t]);if(fu(s)){const u=xy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,ge.min(),ge.min(),ge.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,ge.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,ge.min(),ge.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,ge.min(),ge.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t){this.position=e,this.inclusive=t}}function eg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=to(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function tg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Yn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t="asc"){this.field=e,this.dir=t}}function iI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{}class at extends Ly{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new oI(e,t,s):t==="array-contains"?new uI(e,s):t==="in"?new cI(e,s):t==="not-in"?new hI(e,s):t==="array-contains-any"?new dI(e,s):new at(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new aI(e,s):new lI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(to(t,this.value)):t!==null&&Gi(this.value)===Gi(t)&&this.matchesComparison(to(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends Ly{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new xn(e,t)}matches(e){return My(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function My(i){return i.op==="and"}function Fy(i){return sI(i)&&My(i)}function sI(i){for(const e of i.filters)if(e instanceof xn)return!1;return!0}function Yh(i){if(i instanceof at)return i.field.canonicalString()+i.op.toString()+no(i.value);if(Fy(i))return i.filters.map((e=>Yh(e))).join(",");{const e=i.filters.map((t=>Yh(t))).join(",");return`${i.op}(${e})`}}function Uy(i,e){return i instanceof at?(function(s,o){return o instanceof at&&s.op===o.op&&s.field.isEqual(o.field)&&Yn(s.value,o.value)})(i,e):i instanceof xn?(function(s,o){return o instanceof xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&Uy(h,o.filters[m])),!0):!1})(i,e):void pe()}function by(i){return i instanceof at?(function(t){return`${t.field.canonicalString()} ${t.op} ${no(t.value)}`})(i):i instanceof xn?(function(t){return t.op.toString()+" {"+t.getFilters().map(by).join(" ,")+"}"})(i):"Filter"}class oI extends at{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class aI extends at{constructor(e,t){super(e,"in",t),this.keys=zy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lI extends at{constructor(e,t){super(e,"not-in",t),this.keys=zy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>le.fromName(s.referenceValue)))}class uI extends at{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pd(t)&&Aa(t.arrayValue,this.value)}}class cI extends at{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Aa(this.value.arrayValue,t)}}class hI extends at{constructor(e,t){super(e,"not-in",t)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Aa(this.value.arrayValue,t)}}class dI extends at{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Aa(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function ng(i,e=null,t=[],s=[],o=null,u=null,h=null){return new fI(i,e,t,s,o,u,h)}function Cd(i){const e=ye(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Yh(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Fu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>no(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>no(s))).join(",")),e.ue=t}return e.ue}function kd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!iI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Uy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!tg(i.startAt,e.startAt)&&tg(i.endAt,e.endAt)}function Xh(i){return le.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pI(i,e,t,s,o,u,h,m){return new co(i,e,t,s,o,u,h,m)}function Nd(i){return new co(i)}function rg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function jy(i){return i.collectionGroup!==null}function ga(i){const e=ye(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Rt(At.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Ra(u,s))})),t.has(At.keyField().canonicalString())||e.ce.push(new Ra(At.keyField(),s))}return e.ce}function Kn(i){const e=ye(i);return e.le||(e.le=mI(e,ga(i))),e.le}function mI(i,e){if(i.limitType==="F")return ng(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ra(o.field,u)}));const t=i.endAt?new Ru(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ru(i.startAt.position,i.startAt.inclusive):null;return ng(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Jh(i,e){const t=i.filters.concat([e]);return new co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Zh(i,e,t){return new co(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Uu(i,e){return kd(Kn(i),Kn(e))&&i.limitType===e.limitType}function By(i){return`${Cd(Kn(i))}|lt:${i.limitType}`}function qs(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>by(o))).join(", ")}]`),Fu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>no(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>no(o))).join(",")),`Target(${s})`})(Kn(i))}; limitType=${i.limitType})`}function bu(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):le.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of ga(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,y){const v=eg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,ga(s),o)||s.endAt&&!(function(h,m,y){const v=eg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,ga(s),o))})(i,e)}function gI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function $y(i){return(e,t)=>{let s=!1;for(const o of ga(i)){const u=yI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function yI(i,e,t){const s=i.field.isKeyField()?le.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?to(y,v):pe()})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){uo(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return Vy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=new Xe(le.comparator);function Ar(){return _I}const qy=new Xe(le.comparator);function ha(...i){let e=qy;for(const t of i)e=e.insert(t.key,t);return e}function Wy(i){let e=qy;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function zi(){return ya()}function Hy(){return ya()}function ya(){return new ho((i=>i.toString()),((i,e)=>i.isEqual(e)))}const vI=new Xe(le.comparator),EI=new Rt(le.comparator);function Ae(...i){let e=EI;for(const t of i)e=e.add(t);return e}const wI=new Rt(Oe);function TI(){return wI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function Ky(i){return{integerValue:""+i}}function II(i,e){return ZT(e)?Ky(e):Dd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(){this._=void 0}}function SI(i,e,t){return i instanceof Pa?(function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ad(u)&&(u=Rd(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}})(t,e):i instanceof Ca?Qy(i,e):i instanceof ka?Yy(i,e):(function(o,u){const h=Gy(o,u),m=ig(h)+ig(o.Pe);return Qh(h)&&Qh(o.Pe)?Ky(m):Dd(o.serializer,m)})(i,e)}function AI(i,e,t){return i instanceof Ca?Qy(i,e):i instanceof ka?Yy(i,e):t}function Gy(i,e){return i instanceof Pu?(function(s){return Qh(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Pa extends zu{}class Ca extends zu{constructor(e){super(),this.elements=e}}function Qy(i,e){const t=Xy(e);for(const s of i.elements)t.some((o=>Yn(o,s)))||t.push(s);return{arrayValue:{values:t}}}class ka extends zu{constructor(e){super(),this.elements=e}}function Yy(i,e){let t=Xy(e);for(const s of i.elements)t=t.filter((o=>!Yn(o,s)));return{arrayValue:{values:t}}}class Pu extends zu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ig(i){return rt(i.integerValue||i.doubleValue)}function Xy(i){return Pd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t){this.field=e,this.transform=t}}function PI(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Ca&&o instanceof Ca||s instanceof ka&&o instanceof ka?eo(s.elements,o.elements,Yn):s instanceof Pu&&o instanceof Pu?Yn(s.Pe,o.Pe):s instanceof Pa&&o instanceof Pa})(i.transform,e.transform)}class CI{constructor(e,t){this.version=e,this.transformResults=t}}class wr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ju{}function Jy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new e_(i.key,wr.none()):new Fa(i.key,i.data,wr.none());{const t=i.data,s=gn.empty();let o=new Rt(At.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Qi(i.key,s,new Vn(o.toArray()),wr.none())}}function kI(i,e,t){i instanceof Fa?(function(o,u,h){const m=o.value.clone(),y=og(o.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Qi?(function(o,u,h){if(!pu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=og(o.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(Zy(o)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function _a(i,e,t,s){return i instanceof Fa?(function(u,h,m,y){if(!pu(u.precondition,h))return m;const v=u.value.clone(),w=ag(u.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Qi?(function(u,h,m,y){if(!pu(u.precondition,h))return m;const v=ag(u.fieldTransforms,y,h),w=h.data;return w.setAll(Zy(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((P=>P.field)))})(i,e,t,s):(function(u,h,m){return pu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function NI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Gy(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function sg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&eo(s,o,((u,h)=>PI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Fa extends ju{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends ju{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Zy(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function og(i,e,t){const s=new Map;Fe(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,AI(h,m,t[o]))}return s}function ag(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,SI(u,h,e))}return s}class e_ extends ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DI extends ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&kI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=_a(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=_a(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Hy();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const y=Jy(h,m);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(ge.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ae())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,((t,s)=>sg(t,s)))&&eo(this.baseMutations,e.baseMutations,((t,s)=>sg(t,s)))}}class Vd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length);let o=(function(){return vI})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Vd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Ne;function LI(i){switch(i){default:return pe();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function t_(i){if(i===void 0)return Sr("GRPC error has no .code"),B.UNKNOWN;switch(i){case ot.OK:return B.OK;case ot.CANCELLED:return B.CANCELLED;case ot.UNKNOWN:return B.UNKNOWN;case ot.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ot.INTERNAL:return B.INTERNAL;case ot.UNAVAILABLE:return B.UNAVAILABLE;case ot.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ot.NOT_FOUND:return B.NOT_FOUND;case ot.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ot.ABORTED:return B.ABORTED;case ot.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ot.DATA_LOSS:return B.DATA_LOSS;default:return pe()}}(Ne=ot||(ot={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new Bi([4294967295,4294967295],0);function lg(i){const e=MI().encode(i),t=new Sy;return t.update(e),new Uint8Array(t.digest())}function ug(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Bi([t,s],0),new Bi([o,u],0)]}class Od{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new da(`Invalid padding: ${t}`);if(s<0)throw new da(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new da(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new da(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Bi.fromNumber(this.Ie)}Ee(e,t,s){let o=e.add(t.multiply(Bi.fromNumber(s)));return o.compare(FI)===1&&(o=new Bi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=lg(e),[s,o]=ug(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Od(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.Ie===0)return;const t=lg(e),[s,o]=ug(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Bu(ge.min(),o,new Xe(Oe),Ar(),Ae())}}class Ua{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ua(s,t,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class n_{constructor(e,t){this.targetId=e,this.me=t}}class r_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class cg{constructor(){this.fe=0,this.ge=dg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),t=Ae(),s=Ae();return this.ge.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe()}})),new Ua(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=dg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class UI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=hg(),this.Qe=new Xe(Oe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const s=this.Ge(t);switch(e.state){case 0:this.ze(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),s.De(e.resumeToken));break;default:pe()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((s,o)=>{this.ze(o)&&t(o)}))}He(e){const t=e.targetId,s=e.me.count,o=this.Je(t);if(o){const u=o.target;if(Xh(u))if(s===0){const h=new le(u.path);this.Ue(t,h,Mt.newNoDocument(h,ge.min()))}else Fe(s===1);else{const h=this.Ye(t);if(h!==s){const m=this.Ze(e),y=m?this.Xe(m,e,h):1;if(y!==0){this.je(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,v)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=Ki(s).toUint8Array()}catch(y){if(y instanceof Oy)return Zs("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Od(h,o,u)}catch(y){return Zs(y instanceof da?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Ie===0?null:m}Xe(e,t,s){return t.me.count===s-this.nt(e,t.targetId)?0:2}nt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.Le.tt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.Ue(t,u,null),o++)})),o}rt(e){const t=new Map;this.Be.forEach(((u,h)=>{const m=this.Je(h);if(m){if(u.current&&Xh(m.target)){const y=new le(m.target.path);this.ke.get(y)!==null||this.it(h,y)||this.Ue(h,y,Mt.newNoDocument(y,e))}u.be&&(t.set(h,u.ve()),u.Ce())}}));let s=Ae();this.qe.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.Je(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.ke.forEach(((u,h)=>h.setReadTime(e)));const o=new Bu(e,t,this.Qe,this.ke,s);return this.ke=Ar(),this.qe=hg(),this.Qe=new Xe(Oe),o}$e(e,t){if(!this.ze(e))return;const s=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,s){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new cg,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Rt(Oe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cg),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function hg(){return new Xe(le.comparator)}function dg(){return new Xe(le.comparator)}const bI={asc:"ASCENDING",desc:"DESCENDING"},zI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jI={and:"AND",or:"OR"};class BI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ed(i,e){return i.useProto3Json||Fu(e)?e:{value:e}}function Cu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function $I(i,e){return Cu(i,e.toTimestamp())}function Gn(i){return Fe(!!i),ge.fromTimestamp((function(t){const s=li(t);return new ft(s.seconds,s.nanos)})(i))}function xd(i,e){return td(i,e).canonicalString()}function td(i,e){const t=(function(o){return new We(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function s_(i){const e=We.fromString(i);return Fe(c_(e)),e}function nd(i,e){return xd(i.databaseId,e.path)}function xh(i,e){const t=s_(e);if(t.get(1)!==i.databaseId.projectId)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new re(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new le(a_(t))}function o_(i,e){return xd(i.databaseId,e)}function qI(i){const e=s_(i);return e.length===4?We.emptyPath():a_(e)}function rd(i){return new We(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function a_(i){return Fe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function fg(i,e,t){return{name:nd(i,e),fields:t.value.mapValue.fields}}function WI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:pe()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(v,w){return v.useProto3Json?(Fe(w===void 0||typeof w=="string"),Pt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Pt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const w=v.code===void 0?B.UNKNOWN:t_(v.code);return new re(w,v.message||"")})(h);t=new r_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=xh(i,s.document.name),u=Gn(s.document.updateTime),h=s.document.createTime?Gn(s.document.createTime):ge.min(),m=new gn({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new mu(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=xh(i,s.document),u=s.readTime?Gn(s.readTime):ge.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new mu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=xh(i,s.document),u=s.removedTargetIds||[];t=new mu([],u,o,null)}else{if(!("filter"in e))return pe();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new xI(o,u),m=s.targetId;t=new n_(m,h)}}return t}function HI(i,e){let t;if(e instanceof Fa)t={update:fg(i,e.key,e.value)};else if(e instanceof e_)t={delete:nd(i,e.key)};else if(e instanceof Qi)t={update:fg(i,e.key,e.data),updateMask:tS(e.fieldMask)};else{if(!(e instanceof DI))return pe();t={verify:nd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Pa)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ca)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ka)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Pu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw pe()})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:$I(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe()})(i,e.precondition)),t}function KI(i,e){return i&&i.length>0?(Fe(e!==void 0),i.map((t=>(function(o,u){let h=o.updateTime?Gn(o.updateTime):Gn(u);return h.isEqual(ge.min())&&(h=Gn(u)),new CI(h,o.transformResults||[])})(t,e)))):[]}function GI(i,e){return{documents:[o_(i,e.path)]}}function QI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=o_(i,o);const u=(function(v){if(v.length!==0)return u_(xn.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((w=>(function(V){return{field:Ws(V.field),direction:JI(V.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=ed(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{_t:t,parent:o}}function YI(i){let e=qI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(P){const V=l_(P);return V instanceof xn&&Fy(V)?V.getFilters():[V]})(t.where));let h=[];t.orderBy&&(h=(function(P){return P.map((V=>(function(Q){return new Ra(Hs(Q.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(V)))})(t.orderBy));let m=null;t.limit&&(m=(function(P){let V;return V=typeof P=="object"?P.value:P,Fu(V)?null:V})(t.limit));let y=null;t.startAt&&(y=(function(P){const V=!!P.before,z=P.values||[];return new Ru(z,V)})(t.startAt));let v=null;return t.endAt&&(v=(function(P){const V=!P.before,z=P.values||[];return new Ru(z,V)})(t.endAt)),pI(e,o,h,u,m,"F",y,v)}function XI(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function l_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Hs(t.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Hs(t.unaryFilter.field);return at.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Hs(t.unaryFilter.field);return at.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Hs(t.unaryFilter.field);return at.create(h,"!=",{nullValue:"NULL_VALUE"});default:return pe()}})(i):i.fieldFilter!==void 0?(function(t){return at.create(Hs(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return xn.create(t.compositeFilter.filters.map((s=>l_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe()}})(t.compositeFilter.op))})(i):pe()}function JI(i){return bI[i]}function ZI(i){return zI[i]}function eS(i){return jI[i]}function Ws(i){return{fieldPath:i.canonicalString()}}function Hs(i){return At.fromServerFormat(i.fieldPath)}function u_(i){return i instanceof at?(function(t){if(t.op==="=="){if(Zm(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NAN"}};if(Jm(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zm(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NOT_NAN"}};if(Jm(t.value))return{unaryFilter:{field:Ws(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(t.field),op:ZI(t.op),value:t.value}}})(i):i instanceof xn?(function(t){const s=t.getFilters().map((o=>u_(o)));return s.length===1?s[0]:{compositeFilter:{op:eS(t.op),filters:s}}})(i):pe()}function tS(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function c_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,s,o,u=ge.min(),h=ge.min(),m=Pt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.ct=e}}function rS(i){const e=YI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Zh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.un=new sS}addToCollectionParentIndex(e,t){return this.un.add(t),H.resolve()}getCollectionParents(e,t){return H.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return H.resolve()}deleteFieldIndex(e,t){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,t){return H.resolve()}getDocumentsMatchingTarget(e,t){return H.resolve(null)}getIndexType(e,t){return H.resolve(0)}getFieldIndexes(e,t){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,t){return H.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,t){return H.resolve(ai.min())}updateCollectionGroup(e,t,s){return H.resolve()}updateIndexEntries(e,t){return H.resolve()}}class sS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Rt(We.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Rt(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ro(0)}static kn(){return new ro(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.changes=new ho((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?H.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&_a(s.mutation,o,Vn.empty(),ft.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Ae()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Ae()){const o=zi();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=ha();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=zi();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Ae())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ar();const h=ya(),m=(function(){return ya()})();return t.forEach(((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Qi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),_a(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>{var P;return m.set(v,new aS(w,(P=h.get(v))!==null&&P!==void 0?P:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=ya();let o=new Xe(((h,m)=>h-m)),u=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||Vn.empty();w=m.applyToLocalView(v,w),s.set(y,w);const P=(o.get(m.batchId)||Ae()).add(y);o=o.insert(m.batchId,P)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,w=y.value,P=Hy();w.forEach((V=>{if(!u.has(V)){const z=Jy(t.get(V),s.get(V));z!==null&&P.set(V,z),u=u.add(V)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,P))}return H.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return le.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):H.resolve(zi());let m=-1,y=u;return h.next((v=>H.forEach(v,((w,P)=>(m<P.largestBatchId&&(m=P.largestBatchId),u.get(w)?H.resolve():this.remoteDocumentCache.getEntry(e,w).next((V=>{y=y.insert(w,V)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,Ae()))).next((w=>({batchId:m,changes:Wy(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next((s=>{let o=ha();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ha();return this.indexManager.getCollectionParents(e,u).next((m=>H.forEach(m,(y=>{const v=(function(P,V){return new co(V,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((P,V)=>{h=h.insert(P,V)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))}));let m=ha();return h.forEach(((y,v)=>{const w=u.get(y);w!==void 0&&_a(w.mutation,v,Vn.empty(),ft.now()),bu(t,v)&&(m=m.insert(y,v))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return H.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Gn(o.createTime)}})(t)),H.resolve()}getNamedQuery(e,t){return H.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,(function(o){return{name:o.name,query:rS(o.bundledQuery),readTime:Gn(o.readTime)}})(t)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.overlays=new Xe(le.comparator),this.Ir=new Map}getOverlay(e,t){return H.resolve(this.overlays.get(t))}getOverlays(e,t){const s=zi();return H.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.ht(e,t,u)})),H.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Ir.delete(s)),H.resolve()}getOverlaysForCollection(e,t,s){const o=zi(),u=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return H.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Xe(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=zi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=zi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>m.set(v,w))),!(m.size()>=o)););return H.resolve(m)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new OI(t,s));let u=this.Ir.get(t);u===void 0&&(u=Ae(),this.Ir.set(t,u)),this.Ir.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Tr=new Rt(vt.Er),this.dr=new Rt(vt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new vt(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Vr(new vt(e,t))}mr(e,t){e.forEach((s=>this.removeReference(s,t)))}gr(e){const t=new le(new We([])),s=new vt(t,e),o=new vt(t,e+1),u=[];return this.dr.forEachInRange([s,o],(h=>{this.Vr(h),u.push(h.key)})),u}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new le(new We([])),s=new vt(t,e),o=new vt(t,e+1);let u=Ae();return this.dr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new vt(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class vt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return le.comparator(e.key,t.key)||Oe(e.wr,t.wr)}static Ar(e,t){return Oe(e.wr,t.wr)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Rt(vt.Er)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new VI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.br=this.br.add(new vt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,t){return H.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),u=o<0?0:o;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new vt(t,0),o=new vt(t,Number.POSITIVE_INFINITY),u=[];return this.br.forEachInRange([s,o],(h=>{const m=this.Dr(h.wr);u.push(m)})),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Rt(Oe);return t.forEach((o=>{const u=new vt(o,0),h=new vt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([u,h],(m=>{s=s.add(m.wr)}))})),H.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;le.isDocumentKey(u)||(u=u.child(""));const h=new vt(new le(u),0);let m=new Rt(Oe);return this.br.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(y.wr)),!0)}),h),H.resolve(this.Cr(m))}Cr(e){const t=[];return e.forEach((s=>{const o=this.Dr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return H.forEach(t.mutations,(o=>{const u=new vt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.br=s}))}On(e){}containsKey(e,t){const s=new vt(t,0),o=this.br.firstAfterOrEqual(s);return H.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.Mr=e,this.docs=(function(){return new Xe(le.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return H.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))})),H.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ar();const h=t.path,m=new le(h.child("")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||QT(GT(w),s)<=0||(o.has(w.key)||bu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe()}Or(e,t){return H.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new pS(this)}getSize(e){return H.resolve(this.size)}}class pS extends oS{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)})),H.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.persistence=e,this.Nr=new ho((t=>Cd(t)),kd),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ld,this.targetCount=0,this.kr=ro.Bn()}forEachTarget(e,t){return this.Nr.forEach(((s,o)=>t(o))),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),H.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ro(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,H.resolve()}updateTargetData(e,t){return this.Kn(t),H.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Nr.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Nr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),H.waitFor(u).next((()=>o))}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return H.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),H.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),H.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),H.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return H.resolve(s)}containsKey(e,t){return H.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Sd(0),this.Kr=!1,this.Kr=!0,this.$r=new hS,this.referenceDelegate=e(this),this.Ur=new mS(this),this.indexManager=new iS,this.remoteDocumentCache=(function(o){return new fS(o)})((s=>this.referenceDelegate.Wr(s))),this.serializer=new nS(t),this.Gr=new uS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new dS(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){se("MemoryPersistence","Starting transaction:",e);const o=new yS(this.Qr.next());return this.referenceDelegate.zr(),s(o).next((u=>this.referenceDelegate.jr(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Hr(e,t){return H.or(Object.values(this.qr).map((s=>()=>s.containsKey(e,t))))}}class yS extends XT{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.Jr=new Ld,this.Yr=null}static Zr(e){return new Md(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),H.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),H.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((o=>this.Xr.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.Xr.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Xr,(s=>{const o=le.fromPath(s);return this.ei(e,o).next((u=>{u||t.removeEntry(o,ge.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return H.or([()=>H.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=Ae(),o=Ae();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Fd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return vE()?8:JT(Ft())>0?6:4})()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Yi(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.Zi(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new _S;return this.Xi(e,t,h).next((m=>{if(u.result=m,this.zi)return this.es(e,t,h,m.size)}))})).next((()=>u.result))}es(e,t,s,o){return s.documentReadCount<this.ji?(ua()<=Pe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",qs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),H.resolve()):(ua()<=Pe.DEBUG&&se("QueryEngine","Query:",qs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(ua()<=Pe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",qs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(t))):H.resolve())}Yi(e,t){if(rg(t))return H.resolve(null);let s=Kn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Zh(t,null,"F"),s=Kn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=Ae(...u);return this.Ji.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.ts(t,m);return this.ns(t,v,h,y.readTime)?this.Yi(e,Zh(t,null,"F")):this.rs(e,v,t,y)}))))})))))}Zi(e,t,s,o){return rg(t)||o.isEqual(ge.min())?H.resolve(null):this.Ji.getDocuments(e,s).next((u=>{const h=this.ts(t,u);return this.ns(t,h,s,o)?H.resolve(null):(ua()<=Pe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),qs(t)),this.rs(e,h,t,KT(o,-1)).next((m=>m)))}))}ts(e,t){let s=new Rt($y(e));return t.forEach(((o,u)=>{bu(e,u)&&(s=s.add(u))})),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Xi(e,t,s){return ua()<=Pe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",qs(t)),this.Ji.getDocumentsMatchingQuery(e,t,ai.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Xe(Oe),this._s=new ho((u=>Cd(u)),kd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}function wS(i,e,t,s){return new ES(i,e,t,s)}async function h_(i,e){const t=ye(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.ls(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=Ae();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((v=>({hs:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function TS(i,e){const t=ye(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.cs.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,w){const P=v.batch,V=P.keys();let z=H.resolve();return V.forEach((Q=>{z=z.next((()=>w.getEntry(y,Q))).next((Y=>{const $=v.docVersions.get(Q);Fe($!==null),Y.version.compareTo($)<0&&(P.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,P)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=Ae();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function d_(i){const e=ye(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function IS(i,e){const t=ye(i),s=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const m=[];e.targetChanges.forEach(((w,P)=>{const V=o.get(P);if(!V)return;m.push(t.Ur.removeMatchingKeys(u,w.removedDocuments,P).next((()=>t.Ur.addMatchingKeys(u,w.addedDocuments,P))));let z=V.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(P)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(P,z),(function(Y,$,me){return Y.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=3e8?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(V,z,w)&&m.push(t.Ur.updateTargetData(u,z))}));let y=Ar(),v=Ae();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(SS(u,h,e.documentUpdates).next((w=>{y=w.Ps,v=w.Is}))),!s.isEqual(ge.min())){const w=t.Ur.getLastRemoteSnapshotVersion(u).next((P=>t.Ur.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return H.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.os=o,u)))}function SS(i,e,t){let s=Ae(),o=Ae();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ar();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(ge.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):se("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{Ps:h,Is:o}}))}function AS(i,e){const t=ye(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function RS(i,e){const t=ye(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Ur.getTargetData(s,e).next((u=>u?(o=u,H.resolve(o)):t.Ur.allocateTargetId(s).next((h=>(o=new ni(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ur.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.os.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(s.targetId,s),t._s.set(e,s.targetId)),s}))}async function id(i,e,t){const s=ye(i),o=s.os.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!Ma(h))throw h;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.os=s.os.remove(e),s._s.delete(o.target)}function pg(i,e,t){const s=ye(i);let o=ge.min(),u=Ae();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,w){const P=ye(y),V=P._s.get(w);return V!==void 0?H.resolve(P.os.get(V)):P.Ur.getTargetData(v,w)})(s,h,Kn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.ss.getDocumentsMatchingQuery(h,e,t?o:ge.min(),t?u:Ae()))).next((m=>(PS(s,gI(e),m),{documents:m,Ts:u})))))}function PS(i,e,t){let s=i.us.get(e)||ge.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.us.set(e,s)}class mg{constructor(){this.activeTargetIds=TI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CS{constructor(){this.so=new mg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new mg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au=null;function Lh(){return au===null?au=(function(){return 268435456+Math.round(2147483648*Math.random())})():au++,"0x"+au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class VS extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${u}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}get Fo(){return!1}Mo(t,s,o,u,h){const m=Lh(),y=this.xo(t,s.toUriEncodedString());se("RestConnection",`Sending RPC '${t}' ${m}:`,y,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,u,h),this.No(t,y,v,o).then((w=>(se("RestConnection",`Received RPC '${t}' ${m}: `,w),w)),(w=>{throw Zs("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",y,"request:",o),w}))}Lo(t,s,o,u,h,m){return this.Mo(t,s,o,u,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+lo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach(((u,h)=>t[h]=u)),o&&o.headers.forEach(((u,h)=>t[h]=u))}xo(t,s){const o=NS[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const u=Lh();return new Promise(((h,m)=>{const y=new Ay;y.setWithCredentials(!0),y.listenOnce(Ry.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case du.NO_ERROR:const w=y.getResponseJson();se(xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case du.TIMEOUT:se(xt,`RPC '${e}' ${u} timed out`),m(new re(B.DEADLINE_EXCEEDED,"Request time out"));break;case du.HTTP_ERROR:const P=y.getStatus();if(se(xt,`RPC '${e}' ${u} failed with status:`,P,"response text:",y.getResponseText()),P>0){let V=y.getResponseJson();Array.isArray(V)&&(V=V[0]);const z=V==null?void 0:V.error;if(z&&z.status&&z.message){const Q=(function($){const me=$.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(me)>=0?me:B.UNKNOWN})(z.status);m(new re(Q,z.message))}else m(new re(B.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new re(B.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{se(xt,`RPC '${e}' ${u} completed.`)}}));const v=JSON.stringify(o);se(xt,`RPC '${e}' ${u} sending request:`,o),y.send(t,"POST",v,s,15)}))}Bo(e,t,s){const o=Lh(),u=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=ky(),m=Cy(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Oo(y.initMessageHeaders,t,s),y.encodeInitMessageHeaders=!0;const w=u.join("");se(xt,`Creating RPC '${e}' stream ${o}: ${w}`,y);const P=h.createWebChannel(w,y);let V=!1,z=!1;const Q=new DS({Io:$=>{z?se(xt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(V||(se(xt,`Opening RPC '${e}' stream ${o} transport.`),P.open(),V=!0),se(xt,`RPC '${e}' stream ${o} sending:`,$),P.send($))},To:()=>P.close()}),Y=($,me,_e)=>{$.listen(me,(ve=>{try{_e(ve)}catch(we){setTimeout((()=>{throw we}),0)}}))};return Y(P,ca.EventType.OPEN,(()=>{z||(se(xt,`RPC '${e}' stream ${o} transport opened.`),Q.yo())})),Y(P,ca.EventType.CLOSE,(()=>{z||(z=!0,se(xt,`RPC '${e}' stream ${o} transport closed`),Q.So())})),Y(P,ca.EventType.ERROR,($=>{z||(z=!0,Zs(xt,`RPC '${e}' stream ${o} transport errored:`,$),Q.So(new re(B.UNAVAILABLE,"The operation could not be completed")))})),Y(P,ca.EventType.MESSAGE,($=>{var me;if(!z){const _e=$.data[0];Fe(!!_e);const ve=_e,we=ve.error||((me=ve[0])===null||me===void 0?void 0:me.error);if(we){se(xt,`RPC '${e}' stream ${o} received error:`,we);const He=we.status;let Se=(function(A){const C=ot[A];if(C!==void 0)return t_(C)})(He),N=we.message;Se===void 0&&(Se=B.INTERNAL,N="Unknown error status: "+He+" with message "+we.message),z=!0,Q.So(new re(Se,N)),P.close()}else se(xt,`RPC '${e}' stream ${o} received:`,_e),Q.bo(_e)}})),Y(m,Py.STAT_EVENT,($=>{$.stat===Kh.PROXY?se(xt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Kh.NOPROXY&&se(xt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Q.wo()}),0),Q}}function Mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(i){return new BI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=u,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,s,o,u,h,m,y){this.ui=e,this.Ho=s,this.Jo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new f_(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.Yo===t&&this.P_(s,o)}),(s=>{e((()=>{const o=new re(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)}))}))}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{s((()=>this.listener.Eo()))})),this.stream.Ro((()=>{s((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((o=>{s((()=>this.I_(o)))})),this.stream.onMessage((o=>{s((()=>++this.e_==1?this.E_(o):this.onNext(o)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class OS extends p_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=WI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ge.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ge.min():h.readTime?Gn(h.readTime):ge.min()})(e);return this.listener.d_(t,s)}A_(e){const t={};t.database=rd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=Xh(y)?{documents:GI(u,y)}:{query:QI(u,y)._t},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=i_(u,h.resumeToken);const v=ed(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ge.min())>0){m.readTime=Cu(u,h.snapshotVersion.toTimestamp());const v=ed(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=XI(this.serializer,e);s&&(t.labels=s),this.a_(t)}R_(e){const t={};t.database=rd(this.serializer),t.removeTarget=e,this.a_(t)}}class xS extends p_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=KI(e.writeResults,e.commitTime),s=Gn(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=rd(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>HI(this.serializer,s)))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Mo(e,td(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new re(B.UNKNOWN,u.toString())}))}Lo(e,t,s,o,u){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Lo(e,td(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new re(B.UNKNOWN,h.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class MS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Sr(t),this.D_=!1):se("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=u,this.k_._o((h=>{s.enqueueAndForget((async()=>{Yi(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await(async function(y){const v=ye(y);v.L_.add(4),await ba(v),v.q_.set("Unknown"),v.L_.delete(4),await qu(v)})(this))}))})),this.q_=new MS(s,o)}}async function qu(i){if(Yi(i))for(const e of i.B_)await e(!0)}async function ba(i){for(const e of i.B_)await e(!1)}function m_(i,e){const t=ye(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),jd(t)?zd(t):fo(t).r_()&&bd(t,e))}function Ud(i,e){const t=ye(i),s=fo(t);t.N_.delete(e),s.r_()&&g_(t,e),t.N_.size===0&&(s.r_()?s.o_():Yi(t)&&t.q_.set("Unknown"))}function bd(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fo(i).A_(e)}function g_(i,e){i.Q_.xe(e),fo(i).R_(e)}function zd(i){i.Q_=new UI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),fo(i).start(),i.q_.v_()}function jd(i){return Yi(i)&&!fo(i).n_()&&i.N_.size>0}function Yi(i){return ye(i).L_.size===0}function y_(i){i.Q_=void 0}async function US(i){i.q_.set("Online")}async function bS(i){i.N_.forEach(((e,t)=>{bd(i,e)}))}async function zS(i,e){y_(i),jd(i)?(i.q_.M_(e),zd(i)):i.q_.set("Unknown")}async function jS(i,e,t){if(i.q_.set("Online"),e instanceof r_&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.N_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.N_.delete(m),o.Q_.removeTarget(m))})(i,e)}catch(s){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ku(i,s)}else if(e instanceof mu?i.Q_.Ke(e):e instanceof n_?i.Q_.He(e):i.Q_.We(e),!t.isEqual(ge.min()))try{const s=await d_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.Q_.rt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=u.N_.get(v);w&&u.N_.set(v,w.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const w=u.N_.get(y);if(!w)return;u.N_.set(y,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),g_(u,y);const P=new ni(w.target,y,v,w.sequenceNumber);bd(u,P)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){se("RemoteStore","Failed to raise snapshot:",s),await ku(i,s)}}async function ku(i,e,t){if(!Ma(e))throw e;i.L_.add(1),await ba(i),i.q_.set("Offline"),t||(t=()=>d_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{se("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await qu(i)}))}function __(i,e){return e().catch((t=>ku(i,t,e)))}async function Wu(i){const e=ye(i),t=ui(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;BS(e);)try{const o=await AS(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,$S(e,o)}catch(o){await ku(e,o)}v_(e)&&E_(e)}function BS(i){return Yi(i)&&i.O_.length<10}function $S(i,e){i.O_.push(e);const t=ui(i);t.r_()&&t.V_&&t.m_(e.mutations)}function v_(i){return Yi(i)&&!ui(i).n_()&&i.O_.length>0}function E_(i){ui(i).start()}async function qS(i){ui(i).p_()}async function WS(i){const e=ui(i);for(const t of i.O_)e.m_(t.mutations)}async function HS(i,e,t){const s=i.O_.shift(),o=Vd.from(s,e,t);await __(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await Wu(i)}async function KS(i,e){e&&ui(i).V_&&await(async function(s,o){if((function(h){return LI(h)&&h!==B.ABORTED})(o.code)){const u=s.O_.shift();ui(s).s_(),await __(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Wu(s)}})(i,e),v_(i)&&E_(i)}async function yg(i,e){const t=ye(i);t.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const s=Yi(t);t.L_.add(3),await ba(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await qu(t)}async function GS(i,e){const t=ye(i);e?(t.L_.delete(2),await qu(t)):e||(t.L_.add(2),await ba(t),t.q_.set("Unknown"))}function fo(i){return i.K_||(i.K_=(function(t,s,o){const u=ye(t);return u.w_(),new OS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:US.bind(null,i),Ro:bS.bind(null,i),mo:zS.bind(null,i),d_:jS.bind(null,i)}),i.B_.push((async e=>{e?(i.K_.s_(),jd(i)?zd(i):i.q_.set("Unknown")):(await i.K_.stop(),y_(i))}))),i.K_}function ui(i){return i.U_||(i.U_=(function(t,s,o){const u=ye(t);return u.w_(),new xS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:qS.bind(null,i),mo:KS.bind(null,i),f_:WS.bind(null,i),g_:HS.bind(null,i)}),i.B_.push((async e=>{e?(i.U_.s_(),await Wu(i)):(await i.U_.stop(),i.O_.length>0&&(se("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))}))),i.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new $i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Bd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $d(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),Ma(i))return new re(B.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=ha(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ys;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.W_=new Xe(le.comparator)}track(e){const t=e.doc.key,s=this.W_.get(t);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(t,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(t):e.type===1&&s.type===2?this.W_=this.W_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,s)=>{e.push(s)})),e}}class io{constructor(e,t,s,o,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new io(e,t,Ys.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class YS{constructor(){this.queries=vg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=ye(t),u=o.queries;o.queries=vg(),u.forEach(((h,m)=>{for(const y of m.j_)y.onError(s)}))})(this,new re(B.ABORTED,"Firestore shutting down"))}}function vg(){return new ho((i=>By(i)),Uu)}async function XS(i,e){const t=ye(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.H_()&&e.J_()&&(s=2):(u=new QS,s=e.J_()?0:1);try{switch(s){case 0:u.z_=await t.onListen(o,!0);break;case 1:u.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=$d(h,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.j_.push(e),e.Z_(t.onlineState),u.z_&&e.X_(u.z_)&&qd(t)}async function JS(i,e){const t=ye(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.j_.indexOf(e);h>=0&&(u.j_.splice(h,1),u.j_.length===0?o=e.J_()?0:1:!u.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function ZS(i,e){const t=ye(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.j_)m.X_(o)&&(s=!0);h.z_=o}}s&&qd(t)}function eA(i,e,t){const s=ye(i),o=s.queries.get(e);if(o)for(const u of o.j_)u.onError(t);s.queries.delete(e)}function qd(i){i.Y_.forEach((e=>{e.next()}))}var sd,Eg;(Eg=sd||(sd={})).ea="default",Eg.Cache="cache";class tA{constructor(e,t,s){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const s=t!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==sd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){this.key=e}}class T_{constructor(e){this.key=e}}class nA{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ae(),this.mutatedKeys=Ae(),this.Aa=$y(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,t){const s=t?t.fa:new _g,o=t?t.Ra:this.Ra;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,P)=>{const V=o.get(w),z=bu(this.query,P)?P:null,Q=!!V&&this.mutatedKeys.has(V.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let $=!1;V&&z?V.data.isEqual(z.data)?Q!==Y&&(s.track({type:3,doc:z}),$=!0):this.ga(V,z)||(s.track({type:2,doc:z}),$=!0,(y&&this.Aa(z,y)>0||v&&this.Aa(z,v)<0)&&(m=!0)):!V&&z?(s.track({type:0,doc:z}),$=!0):V&&!z&&(s.track({type:1,doc:V}),$=!0,(y||v)&&(m=!0)),$&&(z?(h=h.add(z),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Ra:h,fa:s,ns:m,mutatedKeys:u}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const h=e.fa.G_();h.sort(((w,P)=>(function(z,Q){const Y=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return Y(z)-Y(Q)})(w.type,P.type)||this.Aa(w.doc,P.doc))),this.pa(s),o=o!=null&&o;const m=t&&!o?this.ya():[],y=this.da.size===0&&this.current&&!o?1:0,v=y!==this.Ea;return this.Ea=y,h.length!==0||v?{snapshot:new io(this.query,e.Ra,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:m}:{wa:m}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _g,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ae(),this.Ra.forEach((s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))}));const t=[];return e.forEach((s=>{this.da.has(s)||t.push(new T_(s))})),this.da.forEach((s=>{e.has(s)||t.push(new w_(s))})),t}ba(e){this.Ta=e.Ts,this.da=Ae();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return io.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class iA{constructor(e){this.key=e,this.va=!1}}class sA{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new ho((m=>By(m)),Uu),this.Ma=new Map,this.xa=new Set,this.Oa=new Xe(le.comparator),this.Na=new Map,this.La=new Ld,this.Ba={},this.ka=new Map,this.qa=ro.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oA(i,e,t=!0){const s=C_(i);let o;const u=s.Fa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Da()):o=await I_(s,e,t,!0),o}async function aA(i,e){const t=C_(i);await I_(t,e,!0,!1)}async function I_(i,e,t,s){const o=await RS(i.localStore,Kn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await lA(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&m_(i.remoteStore,o),m}async function lA(i,e,t,s,o){i.Ka=(P,V,z)=>(async function(Y,$,me,_e){let ve=$.view.ma(me);ve.ns&&(ve=await pg(Y.localStore,$.query,!1).then((({documents:N})=>$.view.ma(N,ve))));const we=_e&&_e.targetChanges.get($.targetId),He=_e&&_e.targetMismatches.get($.targetId)!=null,Se=$.view.applyChanges(ve,Y.isPrimaryClient,we,He);return Tg(Y,$.targetId,Se.wa),Se.snapshot})(i,P,V,z);const u=await pg(i.localStore,e,!0),h=new nA(e,u.Ts),m=h.ma(u.documents),y=Ua.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,y);Tg(i,t,v.wa);const w=new rA(e,t,h);return i.Fa.set(e,w),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),v.snapshot}async function uA(i,e,t){const s=ye(i),o=s.Fa.get(e),u=s.Ma.get(o.targetId);if(u.length>1)return s.Ma.set(o.targetId,u.filter((h=>!Uu(h,e)))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await id(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Ud(s.remoteStore,o.targetId),od(s,o.targetId)})).catch(La)):(od(s,o.targetId),await id(s.localStore,o.targetId,!0))}async function cA(i,e){const t=ye(i),s=t.Fa.get(e),o=t.Ma.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ud(t.remoteStore,s.targetId))}async function hA(i,e,t){const s=_A(i);try{const o=await(function(h,m){const y=ye(h),v=ft.now(),w=m.reduce(((z,Q)=>z.add(Q.key)),Ae());let P,V;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let Q=Ar(),Y=Ae();return y.cs.getEntries(z,w).next(($=>{Q=$,Q.forEach(((me,_e)=>{_e.isValidDocument()||(Y=Y.add(me))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,Q))).next(($=>{P=$;const me=[];for(const _e of m){const ve=NI(_e,P.get(_e.key).overlayedDocument);ve!=null&&me.push(new Qi(_e.key,ve,xy(ve.value.mapValue),wr.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,me,m)})).next(($=>{V=$;const me=$.applyToLocalDocumentSet(P,Y);return y.documentOverlayCache.saveOverlays(z,$.batchId,me)}))})).then((()=>({batchId:V.batchId,changes:Wy(P)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,y){let v=h.Ba[h.currentUser.toKey()];v||(v=new Xe(Oe)),v=v.insert(m,y),h.Ba[h.currentUser.toKey()]=v})(s,o.batchId,t),await za(s,o.changes),await Wu(s.remoteStore)}catch(o){const u=$d(o,"Failed to persist write");t.reject(u)}}async function S_(i,e){const t=ye(i);try{const s=await IS(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Na.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.va=!0:o.modifiedDocuments.size>0?Fe(h.va):o.removedDocuments.size>0&&(Fe(h.va),h.va=!1))})),await za(t,s,e)}catch(s){await La(s)}}function wg(i,e,t){const s=ye(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach(((u,h)=>{const m=h.view.Z_(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const y=ye(h);y.onlineState=m;let v=!1;y.queries.forEach(((w,P)=>{for(const V of P.j_)V.Z_(m)&&(v=!0)})),v&&qd(y)})(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function dA(i,e,t){const s=ye(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Na.get(e),u=o&&o.key;if(u){let h=new Xe(le.comparator);h=h.insert(u,Mt.newNoDocument(u,ge.min()));const m=Ae().add(u),y=new Bu(ge.min(),new Map,new Xe(Oe),h,m);await S_(s,y),s.Oa=s.Oa.remove(u),s.Na.delete(e),Wd(s)}else await id(s.localStore,e,!1).then((()=>od(s,e,t))).catch(La)}async function fA(i,e){const t=ye(i),s=e.batch.batchId;try{const o=await TS(t.localStore,e);R_(t,s,null),A_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await za(t,o)}catch(o){await La(o)}}async function pA(i,e,t){const s=ye(i);try{const o=await(function(h,m){const y=ye(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return y.mutationQueue.lookupMutationBatch(v,m).next((P=>(Fe(P!==null),w=P.keys(),y.mutationQueue.removeMutationBatch(v,P)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>y.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);R_(s,e,t),A_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await za(s,o)}catch(o){await La(o)}}function A_(i,e){(i.ka.get(e)||[]).forEach((t=>{t.resolve()})),i.ka.delete(e)}function R_(i,e,t){const s=ye(i);let o=s.Ba[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}function od(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Ma.get(e))i.Fa.delete(s),t&&i.Ca.$a(s,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach((s=>{i.La.containsKey(s)||P_(i,s)}))}function P_(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&(Ud(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),Wd(i))}function Tg(i,e,t){for(const s of t)s instanceof w_?(i.La.addReference(s.key,e),mA(i,s)):s instanceof T_?(se("SyncEngine","Document no longer in limbo: "+s.key),i.La.removeReference(s.key,e),i.La.containsKey(s.key)||P_(i,s.key)):pe()}function mA(i,e){const t=e.key,s=t.path.canonicalString();i.Oa.get(t)||i.xa.has(s)||(se("SyncEngine","New document in limbo: "+t),i.xa.add(s),Wd(i))}function Wd(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new le(We.fromString(e)),s=i.qa.next();i.Na.set(s,new iA(t)),i.Oa=i.Oa.insert(t,s),m_(i.remoteStore,new ni(Kn(Nd(t.path)),s,"TargetPurposeLimboResolution",Sd.oe))}}async function za(i,e,t){const s=ye(i),o=[],u=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach(((m,y)=>{h.push(s.Ka(y,e,t).then((v=>{var w;if((v||t)&&s.isPrimaryClient){const P=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(y.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(y.targetId,P?"current":"not-current")}if(v){o.push(v);const P=Fd.Wi(y.targetId,v);u.push(P)}})))})),await Promise.all(h),s.Ca.d_(o),await(async function(y,v){const w=ye(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(P=>H.forEach(v,(V=>H.forEach(V.$i,(z=>w.persistence.referenceDelegate.addReference(P,V.targetId,z))).next((()=>H.forEach(V.Ui,(z=>w.persistence.referenceDelegate.removeReference(P,V.targetId,z)))))))))}catch(P){if(!Ma(P))throw P;se("LocalStore","Failed to update sequence numbers: "+P)}for(const P of v){const V=P.targetId;if(!P.fromCache){const z=w.os.get(V),Q=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(Q);w.os=w.os.insert(V,Y)}}})(s.localStore,u))}async function gA(i,e){const t=ye(i);if(!t.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const s=await h_(t.localStore,e);t.currentUser=e,(function(u,h){u.ka.forEach((m=>{m.forEach((y=>{y.reject(new re(B.CANCELLED,h))}))})),u.ka.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await za(t,s.hs)}}function yA(i,e){const t=ye(i),s=t.Na.get(e);if(s&&s.va)return Ae().add(s.key);{let o=Ae();const u=t.Ma.get(e);if(!u)return o;for(const h of u){const m=t.Fa.get(h);o=o.unionWith(m.view.Va)}return o}}function C_(i){const e=ye(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=S_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dA.bind(null,e),e.Ca.d_=ZS.bind(null,e.eventManager),e.Ca.$a=eA.bind(null,e.eventManager),e}function _A(i){const e=ye(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pA.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$u(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return wS(this.persistence,new vS,e.initialUser,this.serializer)}Ga(e){return new gS(Md.Zr,this.serializer)}Wa(e){return new CS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class ad{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>wg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=gA.bind(null,this.syncEngine),await GS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new YS})()}createDatastore(e){const t=$u(e.databaseInfo.databaseId),s=(function(u){return new VS(u)})(e.databaseInfo);return(function(u,h,m,y){return new LS(u,h,m,y)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new FS(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>wg(this.syncEngine,t,0)),(function(){return gg.D()?new gg:new kS})())}createSyncEngine(e,t){return(function(o,u,h,m,y,v,w){const P=new sA(o,u,h,m,y,v);return w&&(P.Qa=!0),P})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=ye(o);se("RemoteStore","RemoteStore shutting down."),u.L_.add(5),await ba(u),u.k_.shutdown(),u.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ad.provider={build:()=>new ad};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=Dy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{se("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(se("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=$d(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Fh(i,e){i.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await h_(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Ig(i,e){i.asyncQueue.verifyOperationInProgress();const t=await wA(i);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>yg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>yg(e.remoteStore,o))),i._onlineComponents=e}async function wA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Zs("Error using user provided cache. Falling back to memory cache: "+t),await Fh(i,new Nu)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Fh(i,new Nu);return i._offlineComponents}async function k_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await Ig(i,i._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await Ig(i,new ad))),i._onlineComponents}function TA(i){return k_(i).then((e=>e.syncEngine))}async function Sg(i){const e=await k_(i),t=e.eventManager;return t.onListen=oA.bind(null,e.syncEngine),t.onUnlisten=uA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cA.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(i,e,t){if(!t)throw new re(B.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function IA(i,e,t,s){if(e===!0&&s===!0)throw new re(B.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Rg(i){if(!le.isDocumentKey(i))throw new re(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Pg(i){if(le.isDocumentKey(i))throw new re(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Hu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe()}function va(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new re(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hu(i);throw new re(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new re(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=N_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new re(B.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ku{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new UT;switch(s.type){case"firstParty":return new BT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new re(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ag.get(t);s&&(se("ComponentProvider","Removing Datastore"),Ag.delete(t),s.terminate())})(this),Promise.resolve()}}function SA(i,e,t,s={}){var o;const u=(i=va(i,Ku))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Lt.MOCK_USER;else{m=dE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new re(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Lt(v)}i._authCredentials=new bT(new Ny(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xi(this.firestore,e,this._query)}}class sn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class oi extends Xi{constructor(e,t,s){super(e,t,Nd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new le(e))}withConverter(e){return new oi(this.firestore,e,this._path)}}function kg(i,e,...t){if(i=Bt(i),D_("collection","path",e),i instanceof Ku){const s=We.fromString(e,...t);return Pg(s),new oi(i,null,s)}{if(!(i instanceof sn||i instanceof oi))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Pg(s),new oi(i.firestore,null,s)}}function AA(i,e,...t){if(i=Bt(i),arguments.length===1&&(e=Dy.newId()),D_("doc","path",e),i instanceof Ku){const s=We.fromString(e,...t);return Rg(s),new sn(i,null,new le(s))}{if(!(i instanceof sn||i instanceof oi))throw new re(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(We.fromString(e,...t));return Rg(s),new sn(i.firestore,i instanceof oi?i.converter:null,new le(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new f_(this,"async_queue_retry"),this.Vu=()=>{const s=Mh();s&&se("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Mh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Mh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new $i;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ma(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((s=>{this.Eu=s,this.du=!1;const o=(function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m})(s);throw Sr("INTERNAL UNHANDLED ERROR: ",o),s})).then((s=>(this.du=!1,s))))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Bd.createAndSchedule(this,e,t,s,(u=>this.yu(u)));return this.Tu.push(o),o}fu(){this.Eu&&pe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Dg(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class Du extends Ku{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Ng,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ng(e),this._firestoreClient=void 0,await e}}}function RA(i,e){const t=typeof i=="object"?i:qg(),s=typeof i=="string"?i:"(default)",o=hd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=cE("firestore");u&&SA(o,...u)}return o}function V_(i){if(i._terminated)throw new re(B.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||PA(i),i._firestoreClient}function PA(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,y,v,w){return new tI(m,y,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,N_(w.experimentalLongPollingOptions),w.useFetchStreams)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new EA(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(Pt.fromBase64String(e))}catch(t){throw new re(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new so(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new re(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new re(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new re(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=/^__.*__$/;class kA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fa(e,this.data,t,this.fieldTransforms)}}function O_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Yd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.vu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(O_(this.Cu)&&CA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class NA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||$u(e)}Qu(e,t,s,o=!1){return new Yd({Cu:e,methodName:t,qu:s,path:At.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function x_(i){const e=i._freezeSettings(),t=$u(i._databaseId);return new NA(i._databaseId,!!e.ignoreUndefinedProperties,t)}function DA(i,e,t,s,o,u={}){const h=i.Qu(u.merge||u.mergeFields?2:0,e,t,o);F_("Data must be an object, but it was:",h,s);const m=L_(s,h);let y,v;if(u.merge)y=new Vn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const P of u.mergeFields){const V=OA(e,P,t);if(!h.contains(V))throw new re(B.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);LA(w,V)||w.push(V)}y=new Vn(w),v=h.fieldTransforms.filter((P=>y.covers(P.field)))}else y=null,v=h.fieldTransforms;return new kA(new gn(m),y,v)}class Xd extends Kd{_toFieldTransform(e){return new RI(e.path,new Pa)}isEqual(e){return e instanceof Xd}}function VA(i,e,t,s=!1){return Jd(t,i.Qu(s?4:3,e))}function Jd(i,e){if(M_(i=Bt(i)))return F_("Unsupported field value:",e,i),L_(i,e);if(i instanceof Kd)return(function(s,o){if(!O_(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let y=Jd(m,o.Lu(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=Bt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return II(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Cu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Cu(o.serializer,u)}}if(s instanceof Gd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof so)return{bytesValue:i_(o.serializer,s._byteString)};if(s instanceof sn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:xd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Qd)return(function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map((y=>{if(typeof y!="number")throw m.Bu("VectorValues must only contain numeric values.");return Dd(m.serializer,y)}))}}}}}})(s,o);throw o.Bu(`Unsupported field value: ${Hu(s)}`)})(i,e)}function L_(i,e){const t={};return Vy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):uo(i,((s,o)=>{const u=Jd(o,e.Mu(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function M_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof Gd||i instanceof so||i instanceof sn||i instanceof Kd||i instanceof Qd)}function F_(i,e,t){if(!M_(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const s=Hu(t);throw s==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+s)}}function OA(i,e,t){if((e=Bt(e))instanceof Hd)return e._internalPath;if(typeof e=="string")return U_(i,e);throw Vu("Field path arguments must be of type string or ",i,!1,void 0,t)}const xA=new RegExp("[~\\*/\\[\\]]");function U_(i,e,t){if(e.search(xA)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Hd(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Vu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new re(B.INVALID_ARGUMENT,m+i+y)}function LA(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MA extends b_{data(){return super.data()}}function Gu(i,e){return typeof e=="string"?U_(i,e):e instanceof Hd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new re(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zd{}class z_ extends Zd{}function UA(i,e,...t){let s=[];e instanceof Zd&&s.push(e),s=s.concat(t),(function(u){const h=u.filter((y=>y instanceof ef)).length,m=u.filter((y=>y instanceof Qu)).length;if(h>1||h>0&&m>0)throw new re(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Qu extends z_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Qu(e,t,s)}_apply(e){const t=this._parse(e);return j_(e._query,t),new Xi(e.firestore,e.converter,Jh(e._query,t))}_parse(e){const t=x_(e.firestore);return(function(u,h,m,y,v,w,P){let V;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new re(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Og(P,w);const z=[];for(const Q of P)z.push(Vg(y,u,Q));V={arrayValue:{values:z}}}else V=Vg(y,u,P)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Og(P,w),V=VA(m,h,P,w==="in"||w==="not-in");return at.create(v,w,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function bA(i,e,t){const s=e,o=Gu("where",i);return Qu._create(o,s,t)}class ef extends Zd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ef(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:xn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let h=o;const m=u.getFlattenedFilters();for(const y of m)j_(h,y),h=Jh(h,y)})(e._query,t),new Xi(e.firestore,e.converter,Jh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tf extends z_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tf(e,t)}_apply(e){const t=(function(o,u,h){if(o.startAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new re(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ra(u,h)})(e._query,this._field,this._direction);return new Xi(e.firestore,e.converter,(function(o,u){const h=o.explicitOrderBy.concat([u]);return new co(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function zA(i,e="asc"){const t=e,s=Gu("orderBy",i);return tf._create(s,t)}function Vg(i,e,t){if(typeof(t=Bt(t))=="string"){if(t==="")throw new re(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jy(e)&&t.indexOf("/")!==-1)throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(We.fromString(t));if(!le.isDocumentKey(s))throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Xm(i,new le(s))}if(t instanceof sn)return Xm(i,t._key);throw new re(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(t)}.`)}function Og(i,e){if(!Array.isArray(i)||i.length===0)throw new re(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function j_(i,e){const t=(function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jA{convertValue(e,t="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return uo(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>rt(h.doubleValue)));return new Qd(u)}convertGeoPoint(e){return new Gd(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Rd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ia(e));default:return null}}convertTimestamp(e){const t=li(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=We.fromString(e);Fe(c_(s));const o=new Sa(s.get(1),s.get(3)),u=new le(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class B_ extends b_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Gu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class gu extends B_{data(e={}){return super.data(e)}}class $A{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new fa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new gu(this._firestore,this._userDataWriter,s.key,s,new fa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new re(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const y=new gu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new fa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new gu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new fa(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:qA(m.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class $_ extends jA{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,t)}}function WA(i,e){const t=va(i.firestore,Du),s=AA(i),o=BA(i.converter,e);return KA(t,[DA(x_(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,wr.exists(!1))]).then((()=>s))}function HA(i,...e){var t,s,o;i=Bt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Dg(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Dg(e[h])){const P=e[h];e[h]=(t=P.next)===null||t===void 0?void 0:t.bind(P),e[h+1]=(s=P.error)===null||s===void 0?void 0:s.bind(P),e[h+2]=(o=P.complete)===null||o===void 0?void 0:o.bind(P)}let y,v,w;if(i instanceof sn)v=va(i.firestore,Du),w=Nd(i._key.path),y={next:P=>{e[h]&&e[h](GA(v,i,P))},error:e[h+1],complete:e[h+2]};else{const P=va(i,Xi);v=va(P.firestore,Du),w=P._query;const V=new $_(v);y={next:z=>{e[h]&&e[h](new $A(v,V,P,z))},error:e[h+1],complete:e[h+2]},FA(i._query)}return(function(V,z,Q,Y){const $=new vA(Y),me=new tA(z,$,Q);return V.asyncQueue.enqueueAndForget((async()=>XS(await Sg(V),me))),()=>{$.Za(),V.asyncQueue.enqueueAndForget((async()=>JS(await Sg(V),me)))}})(V_(v),w,m,y)}function KA(i,e){return(function(s,o){const u=new $i;return s.asyncQueue.enqueueAndForget((async()=>hA(await TA(s),o,u))),u.promise})(V_(i),e)}function GA(i,e,t){const s=t.docs.get(e._key),o=new $_(i);return new B_(i,o,e._key,s,new fa(t.hasPendingWrites,t.fromCache),e.converter)}function QA(){return new Xd("serverTimestamp")}(function(e,t=!0){(function(o){lo=o})(oo),Xs(new qi("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Du(new zT(s.getProvider("auth-internal")),new qT(s.getProvider("app-check-internal")),(function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new re(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sa(v.options.projectId,w)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),si(Hm,"4.7.3",e),si(Hm,"4.7.3","esm2017")})();const YA={apiKey:"AIzaSyAaqw26SBYCr-WNKs5X0hqQKzc-iZVY5yc",authDomain:"chat-app-efaf3.firebaseapp.com",projectId:"chat-app-efaf3",storageBucket:"chat-app-efaf3.firebasestorage.app",messagingSenderId:"900244562691",appId:"1:900244562691:web:15ed49c0a505b0dac13f36",measurementId:"G-EYH8B5SPGW"},q_=$g(YA),Uh=MT(q_),XA=new gr,xg=RA(q_);function JA(){const[i,e]=mr.useState(null),[t,s]=mr.useState("General"),[o,u]=mr.useState([]),[h,m]=mr.useState(""),y=mr.useRef(null),v=["General","Gaming","Coding","Music"];mr.useEffect(()=>{const V=S0(Uh,z=>{e(z)});return()=>V()},[]),mr.useEffect(()=>{if(!i)return;const V=UA(kg(xg,"messages"),bA("room","==",t),zA("createdAt","asc")),z=HA(V,Q=>{const Y=Q.docs.map($=>({id:$.id,...$.data()}));u(Y)});return()=>z()},[t,i]),mr.useEffect(()=>{var V;(V=y.current)==null||V.scrollIntoView({behavior:"smooth"})},[o]);const w=async()=>{try{await W0(Uh,XA)}catch(V){console.error("Auth error:",V.message)}},P=async V=>{V.preventDefault(),h.trim()!==""&&(await WA(kg(xg,"messages"),{text:h,createdAt:QA(),user:i.displayName,uid:i.uid,room:t}),m(""))};return i?Ze.jsxs("div",{className:"chat-app",children:[Ze.jsxs("div",{className:"sidebar",children:[Ze.jsx("h2",{children:"💬 Chat Rooms"}),Ze.jsx("div",{className:"room-list",children:v.map(V=>Ze.jsxs("button",{className:t===V?"active":"",onClick:()=>s(V),children:["# ",V]},V))}),Ze.jsx("button",{className:"room-list logout-btn",onClick:()=>A0(Uh),children:"Log Out"})]}),Ze.jsxs("div",{className:"chat-window",children:[Ze.jsxs("div",{className:"chat-header",children:["# ",t," Channel"]}),Ze.jsxs("div",{className:"messages-container",children:[o.map(V=>Ze.jsxs("div",{className:`message ${V.uid===i.uid?"user":""}`,children:[Ze.jsx("span",{className:"message-user",children:V.user}),Ze.jsx("p",{className:"message-text",children:V.text})]},V.id)),Ze.jsx("div",{ref:y})]}),Ze.jsxs("form",{onSubmit:P,className:"message-form",children:[Ze.jsx("input",{type:"text",placeholder:`Message #${t}...`,value:h,onChange:V=>m(V.target.value)}),Ze.jsx("button",{type:"submit",children:"Send"})]})]})]}):Ze.jsxs("div",{className:"auth-container",children:[Ze.jsx("h1",{children:"Multi-Room Chat Application"}),Ze.jsx("p",{children:"Sign in with your Google account to join discussions."}),Ze.jsx("button",{className:"google-btn",onClick:w,children:"Sign In with Google"})]})}nE.createRoot(document.getElementById("root")).render(Ze.jsx(mr.StrictMode,{children:Ze.jsx(JA,{})}));
