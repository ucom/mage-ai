(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3512],{59739:function(e,n,t){"use strict";var r=t(56669);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},44152:function(e,n,t){"use strict";t.d(n,{r:function(){return l}});var r=t(82684);const i=e=>{let n;const t=new Set,r=(e,r)=>{const i="function"===typeof e?e(n):e;if(i!==n){const e=n;n=r?i:Object.assign({},n,i),t.forEach((t=>t(n,e)))}},i=()=>n,o={setState:r,getState:i,subscribe:e=>(t.add(e),()=>t.delete(e)),destroy:()=>t.clear()};return n=e(r,i,o),o};var o=t(81550);const{useSyncExternalStoreWithSelector:u}=o;const c=e=>{const n="function"===typeof e?(e=>e?i(e):i)(e):e,t=(e,t)=>function(e,n=e.getState,t){const i=u(e.subscribe,e.getState,e.getServerState||e.getState,n,t);return(0,r.useDebugValue)(i),i}(n,e,t);return Object.assign(t,n),t};var a=e=>e?c(e):c;const l=e=>{const n=a((()=>e)),t=(Object.keys(e),(e,t)=>{n.setState((n=>{return{[e]:(r=n[e],i=t,"function"==typeof i?i(r):i)};var r,i}))});return{useGlobalState:e=>{const i=(0,r.useCallback)((n=>n[e]),[e]);return[n(i),(0,r.useCallback)((n=>t(e,n)),[e])]},getGlobalState:e=>n.getState()[e],setGlobalState:t,subscribe:(e,t)=>{n.subscribe(((n,r)=>{n[e]!==r[e]&&t(n[e])}))}}}},1589:function(e,n,t){"use strict";var r=t(82684);var i="function"===typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},o=r.useState,u=r.useEffect,c=r.useLayoutEffect,a=r.useDebugValue;function l(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(r){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=o({inst:{value:t,getSnapshot:n}}),i=r[0].inst,s=r[1];return c((function(){i.value=t,i.getSnapshot=n,l(i)&&s({inst:i})}),[e,t,n]),u((function(){return l(i)&&s({inst:i}),e((function(){l(i)&&s({inst:i})}))}),[e]),a(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:s},73847:function(e,n,t){"use strict";var r=t(82684),i=t(48216);var o="function"===typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},u=i.useSyncExternalStore,c=r.useRef,a=r.useEffect,l=r.useMemo,s=r.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,t,r,i){var f=c(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=l((function(){function e(e){if(!a){if(a=!0,u=e,e=r(e),void 0!==i&&d.hasValue){var n=d.value;if(i(n,e))return c=n}return c=e}if(n=c,o(u,e))return n;var t=r(e);return void 0!==i&&i(n,t)?n:(u=e,c=t)}var u,c,a=!1,l=void 0===t?null:t;return[function(){return e(n())},null===l?void 0:function(){return e(l())}]}),[n,t,r,i]);var p=u(e,f[0],f[1]);return a((function(){d.hasValue=!0,d.value=p}),[p]),s(p),p}},48216:function(e,n,t){"use strict";e.exports=t(1589)},81550:function(e,n,t){"use strict";e.exports=t(73847)},1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(82394),i=t(21831),o=t(82684),u=t(47999),c=t(49894),a=t(93461),l=t(57384),s=t(41424),f=t(72454),d=t(28598);function p(e,n){var t=e.children;return(0,d.jsx)(f.HS,{ref:n,children:t})}var v=o.forwardRef(p),h=t(32063),S=t(85019),A=t(82531),T=t(66166),E=t(3055),R=t(49125),O=t(91427),g=t(24141);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e){var n,t=e.after,r=e.afterHidden,p=e.afterWidth,b=e.afterWidthOverride,y=e.before,D=e.beforeWidth,N=e.breadcrumbs,L=e.children,C=e.errors,P=e.headerMenuItems,w=e.headerOffset,Z=e.mainContainerHeader,_=e.navigationItems,k=e.setErrors,M=e.subheaderChildren,j=e.title,I=e.uuid,x=(0,g.i)().width,Y="dashboard_after_width_".concat(I),H="dashboard_before_width_".concat(I),B=(0,o.useRef)(null),U=(0,o.useState)(b?p:(0,O.U2)(Y,p)),W=U[0],X=U[1],K=(0,o.useState)(!1),V=K[0],F=K[1],G=(0,o.useState)(y?Math.max((0,O.U2)(H,D),13*R.iI):null),Q=G[0],q=G[1],J=(0,o.useState)(!1),$=J[0],z=J[1],ee=(0,o.useState)(null)[1],ne=A.ZP.projects.list({},{revalidateOnFocus:!1}).data,te=null===ne||void 0===ne?void 0:ne.projects,re=[];N?re.push.apply(re,(0,i.Z)(N)):(null===te||void 0===te?void 0:te.length)>=1&&re.push.apply(re,[{label:function(){var e;return null===(e=te[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return j}}]),(0,o.useEffect)((function(){null===B||void 0===B||!B.current||V||$||null===ee||void 0===ee||ee(B.current.getBoundingClientRect().width)}),[V,W,$,Q,B,ee,x]),(0,o.useEffect)((function(){V||(0,O.t8)(Y,W)}),[r,V,W,Y]),(0,o.useEffect)((function(){$||(0,O.t8)(H,Q)}),[$,Q,H]);var ie=(0,T.Z)(p);return(0,o.useEffect)((function(){b&&ie!==p&&X(p)}),[b,p,ie]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z,{title:j}),(0,d.jsx)(s.Z,{breadcrumbs:re,menuItems:P,project:null===te||void 0===te?void 0:te[0],version:null===te||void 0===te||null===(n=te[0])||void 0===n?void 0:n.version}),(0,d.jsxs)(f.Nk,{children:[0!==(null===_||void 0===_?void 0:_.length)&&(0,d.jsx)(f.lm,{showMore:!0,children:(0,d.jsx)(S.Z,{navigationItems:_,showMore:!0})}),(0,d.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,d.jsxs)(h.Z,{after:t,afterHeightOffset:E.Mz,afterHidden:r,afterMousedownActive:V,afterWidth:W,before:y,beforeHeightOffset:E.Mz,beforeMousedownActive:$,beforeWidth:f.k1+(y?Q:0),headerOffset:w,hideAfterCompletely:!0,leftOffset:y?f.k1:null,mainContainerHeader:Z,mainContainerRef:B,setAfterMousedownActive:F,setAfterWidth:X,setBeforeMousedownActive:z,setBeforeWidth:q,children:[M&&(0,d.jsx)(v,{children:M}),L]})})]}),C&&(0,d.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===k||void 0===k?void 0:k(null)},children:(0,d.jsx)(c.Z,m(m({},C),{},{onClose:function(){return null===k||void 0===k?void 0:k(null)}}))})]})}},32821:function(e,n,t){"use strict";t.d(n,{V3:function(){return f},a9:function(){return c},dq:function(){return d},jN:function(){return l},lr:function(){return s}});var r=t(17717),i=t(86422),o=t(73828),u=t(90211);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n||(t?null:null===e||void 0===e?void 0:e.name);if(null!==e&&void 0!==e&&e.parent){var o=[e.parent.name];return(null===i||void 0===i?void 0:i.length)>=1&&o.push(i),c(e.parent,o.join(r.sep))}return i}function a(e){return null===e||void 0===e?void 0:e.split(r.sep).slice(1).join(r.sep)}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=c(e,n,t);return a(r)}function s(e){var n,t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=c(e,a).split(r.sep);if(!l)return null;if(1===l.length)(l=null===e||void 0===e||null===(t=e.path)||void 0===t?void 0:t.split(r.sep))&&(n=l[0]===i.tf.CUSTOM?l[0]:(0,u.C5)(l[0]||""));else if(l[1]===i.tf.CUSTOM)n=l[1];else{var s=l[1];n=i.tf.DBT===s?s:(0,u.C5)(s||"")}if(!l||i.tf.DBT===n)return null;var f="";f=l.length>=3?l.slice(2,l.length).join(r.sep):l[l.length-1];var d=["\\.".concat(o.Lu.PY),"\\.".concat(o.Lu.R),"\\.".concat(o.Lu.SQL),"\\.".concat(o.Lu.YAML),"\\.".concat(o.Lu.YML)].join("|"),p=new RegExp("".concat(d,"$"));if(i.$W.concat(i.tf.DBT).includes(n)&&f.match(p)){var v=f.lastIndexOf("."),h=f.slice(v+1);return{language:o.nB[h],type:n,uuid:f.slice(0,v)}}}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=c(e,n).split(r.sep);if(t[1]){var a=(0,u.C5)(t[n?0:1]);t[1]===i.tf.DBT&&(a=i.tf.DBT);var l=t[t.length-1],s=new RegExp(".".concat(o.Lu.YAML,"$")),f=new RegExp(".".concat(o.Lu.R,"$")),d=new RegExp(".".concat(o.Lu.SQL,"$")),p=new RegExp(".".concat(o.Lu.MD,"$"));if(l.match(s)&&i.VZ.includes(a))return{type:a,uuid:l.replace(s,"")};if(l.match(f)&&i.J8.includes(a))return{type:a,uuid:l.replace(f,"")};if(l.match(d)&&i.HX.includes(a)){var v=l.replace(/[.]/g,"_"),h=a===i.tf.DBT?t.slice(2,-1).join("_").concat("_".concat(v)):l.replace(d,"");return{type:a,uuid:h}}return l.match(p)&&a===i.tf.MARKDOWN?{type:a,uuid:l.replace(p,"")}:void 0}}function d(e){var n=e.name.split("."),t=n[n.length-1];return o.n6.includes(t)&&n.pop(),n.join("")}},91207:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var r=t(82394),i=t(75582),o=t(17717),u=t(82684),c=t(37958),a=t(83455),l=t(35490),s=t(86422),f=t(60328),d=t(38626),p=t(93461),v=t(67971),h=t(28598),S=d.default.div.withConfig({displayName:"ButtonGroup__ButtonGroupStyle",componentId:"sc-15vbmc8-0"})([""]),A=d.default.div.withConfig({displayName:"ButtonGroup__VerticalDivider",componentId:"sc-15vbmc8-1"})(["width:1px;"]),T=function(e){var n=e.children,t=e.divider,r=u.Children.toArray(n).length;return(0,h.jsx)(S,{children:(0,h.jsx)(v.Z,{children:u.Children.map(n,(function(e,n){return e&&(0,h.jsxs)(p.Z,{children:[n>=1&&t&&(0,h.jsx)(A,{}),u.cloneElement(e,{borderRadiusLeft:r>=2&&0===n,borderRadiusRight:r>=2&&n===r-1,halfPaddingLeft:r>=2&&0!==n,halfPaddingRight:r>=2&&n!==r-1,noBorder:r>=2&&n>0&&n<r-1,noBorderRight:r>=2&&n!==r-1})]},"button-group-child-".concat(n))}))})})},E=t(57722),R=t(73828),O=t(11135),g=t(98781),b=t(86673),m=t(82531),y=t(16115),D=t(94353),N=t(60701),L=t(55512),C=t(24224),P=t(32821),w=t(90211),Z=t(96510),_=t(51504),k=t(41150);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I=function(e){var n=e.active,t=e.addNewBlock,d=e.disableRefreshWarning,p=e.fetchPipeline,S=e.fetchVariables,A=e.filePath,M=e.hideHeaderButtons,I=e.onContentChange,x=e.openSidekickView,Y=e.pipeline,H=e.saveFile,B=e.selectedFilePath,U=e.sendTerminalMessage,W=e.setDisableShortcuts,X=e.setErrors,K=e.setFilesTouched,V=e.setSelectedBlock,F=(0,c.j)("apiReloads"),G=(0,i.Z)(F,2)[1],Q=(0,u.useState)(null),q=Q[0],J=Q[1],$=(0,u.useState)(!1),z=$[0],ee=($[1],(0,u.useRef)(null)),ne=(0,u.useMemo)((function(){return new l.Z}),[]),te=(0,u.useMemo)((function(){return{api_key:D.l,token:ne.decodedToken.token}}),[ne]),re=m.ZP.statuses.list().data,ie=(0,u.useMemo)((function(){var e,n;return null===re||void 0===re||null===(e=re.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.repo_path}),[re]),oe=m.ZP.file_contents.detail(A).data;(0,u.useEffect)((function(){null!==oe&&void 0!==oe&&oe.file_content&&J(oe.file_content)}),[oe]);var ue=(0,u.useState)(null===q||void 0===q?void 0:q.content),ce=ue[0],ae=ue[1],le=(0,u.useCallback)((function(e){ae(e),I&&(null===I||void 0===I||I(e))}),[I]),se=(0,u.useState)(!1),fe=se[0],de=se[1];(0,u.useEffect)((function(){n&&W&&(null===W||void 0===W||W(!0))}),[n,W]),(0,u.useEffect)((function(){var e;B&&(null===ee||void 0===ee||null===(e=ee.current)||void 0===e||e.scrollIntoView())}),[B]);var pe=(0,a.Db)(m.ZP.file_contents.useUpdate((null===q||void 0===q?void 0:q.path)&&encodeURIComponent(null===q||void 0===q?void 0:q.path)),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(){G((function(e){return j(j({},e),{},(0,r.Z)({},"FileVersions/".concat(null===q||void 0===q?void 0:q.path),Number(new Date)))}))},onErrorCallback:function(e,n){return null===X||void 0===X?void 0:X({errors:n,response:e})}})}}),ve=(0,i.Z)(pe,1)[0],he=(0,u.useCallback)((function(e,n){if(H)return H(e,n);ve({file_content:j(j({},n),{},{content:e})}).then((function(){decodeURIComponent(A).split(o.sep).pop()===R.dT.METADATA_YAML&&S&&(null===S||void 0===S||S())})),K((function(e){return j(j({},e),{},(0,r.Z)({},null===n||void 0===n?void 0:n.path,!1))})),de(!1)}),[S,A,H,K,ve]),Se=(0,u.useMemo)((function(){return(0,L.lU)()}),[]),Ae=(0,u.useMemo)((function(){var e;return null===q||void 0===q||null===(e=q.path.match(Se)[0])||void 0===e?void 0:e.split(".")[1]}),[Se,q]),Te=(0,u.useMemo)((function(){if(null!==q&&void 0!==q&&q.path)return(0,h.jsx)(E.Z,{autoHeight:!0,language:R.nB[Ae],onChange:function(e){le(e),K((function(e){return j(j({},e),{},(0,r.Z)({},null===q||void 0===q?void 0:q.path,!0))})),de(!0)},onSave:function(e){he(e,q)},selected:!0,textareaFocused:!0,value:(0,w.Pb)(null===q||void 0===q?void 0:q.content)?JSON.stringify(JSON.parse(null===q||void 0===q?void 0:q.content),null,2):null===q||void 0===q?void 0:q.content,width:"100%"})}),[q,Ae,he,le,K]),Ee=null!==Y&&void 0!==Y&&Y.blocks?(0,C.sE)(null===Y||void 0===Y?void 0:Y.blocks,(function(e){var n=e.type;return s.tf.DATA_EXPORTER===n})):null,Re=(0,a.Db)(m.ZP.blocks.pipelines.useUpdate(null===Y||void 0===Y?void 0:Y.uuid,null===Ee||void 0===Ee?void 0:Ee.uuid),{onSuccess:function(e){return(0,Z.wD)(e,{callback:function(){null===p||void 0===p||p()}})}}),Oe=(0,i.Z)(Re,1)[0],ge=t&&Y&&(Ae===R.Lu.PY||Ae===R.Lu.SQL||(Ae===R.Lu.YAML||Ae===R.Lu.R)&&(0,P.V3)(q,null===q||void 0===q?void 0:q.path))&&(0,L.ck)(q.path.split(o.sep))!==s.tf.SCRATCHPAD&&(0,P.lr)(q)&&(0,h.jsx)(f.Z,{onClick:function(){var e=(null===Y||void 0===Y?void 0:Y.type)===g.qL.INTEGRATION,n=(0,L.TU)(q,ie,Y);t(n,(function(n){e&&Ee&&Oe({block:j(j({},Ee),{},{upstream_blocks:[n.uuid]})}),null===V||void 0===V||V(n)}))},primary:!0,children:"Add to current pipeline"}),be=U&&(0,h.jsx)(b.Z,{m:2,children:(0,h.jsx)(O.ZP,{disabled:!ie,inline:!0,loading:z,onClick:function(){null===x||void 0===x||x(N.cH.TERMINAL),null===U||void 0===U||U(JSON.stringify(j(j({},te),{},{command:["stdin","pip install -r ".concat(ie,"/requirements.txt\r")]})))},title:ie?"Pip install packages from your saved requirements.txt file (\u2318+S to save).":"Please use right panel terminal to install packages.",uuid:"FileEditor/InstallPackages",children:"Install packages"})}),me="FileEditor/".concat(null===q||void 0===q?void 0:q.path),ye=(0,k.y)(),De=ye.registerOnKeyDown,Ne=ye.unregisterOnKeyDown;return(0,u.useEffect)((function(){return function(){Ne(me)}}),[Ne,me]),De(me,(function(e,t){if(n&&!d)if((0,_.y)([y.zX,y.Um],t)||(0,_.y)([y.PQ,y.Um],t))e.preventDefault(),he(ce,q);else if(fe&&(0,_.y)([y.zX,y.hS],t)){e.preventDefault();var r="".concat(q.path," has changes that are unsaved. ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(r)&&location.reload()}}),[n,ce,d,q,he,fe]),(0,h.jsxs)("div",{ref:ee,children:[!M&&(0,h.jsx)(b.Z,{p:2,children:(0,h.jsxs)(v.Z,{justifyContent:"space-between",children:[(0,h.jsxs)(T,{children:[ge,(0,h.jsx)(f.Z,{disabled:!ce,onClick:function(e){e.preventDefault(),he(ce,q)},title:ce?null:"No changes have been made to this file.",children:"Save file content"})]}),x&&(0,h.jsx)(T,{children:(0,h.jsx)(f.Z,{compact:!0,onClick:function(){x(N.cH.FILE_VERSIONS)},small:!0,title:"View previous changes to this file.",children:"Show versions"})})]})}),Te,A===R.dT.REQS_TXT&&be]})}},55512:function(e,n,t){"use strict";t.d(n,{TU:function(){return d},ck:function(){return s},lU:function(){return f}});var r=t(21831),i=t(17717),o=t(86422),u=t(98781),c=t(73828),a=t(24224),l=t(90211),s=function(e){var n=e[0];return n===o.tf.DBT||n===o.tf.CUSTOM?n:e[0].slice(0,-1)};function f(){return new RegExp(Object.keys(c.nB).map((function(e){return".(".concat(e,")$")})).join("|"))}function d(e,n,t){var d,p,v=null===e||void 0===e||null===(d=e.path.match(f())[0])||void 0===d?void 0:d.split(".")[1],h=t.type===u.qL.INTEGRATION,S=(0,a.sE)(null===t||void 0===t?void 0:t.blocks,(function(e){var n=e.type;return o.tf.DATA_EXPORTER===n})),A=e.path.replace(n,"").split(i.sep),T=e.path.split(i.sep)[0]===o.tf.DBT,E=(p=A)[0]===o.tf.DBT?p.slice(1).join(i.sep):function(e){return e.at(-1)}(p).split(".")[0];if(A.length>=3&&!T){var R=A.slice(1,A.length-1).join(i.sep);E="".concat(R,"/").concat(E)}var O=s(e.path.split(i.sep)),g={configuration:{file_path:T?E:null},language:c.nB[v],name:(0,l.wE)(E),type:O};if(O===o.tf.CUSTOM&&(g.color=o.Lq.TEAL),h){var b=(0,a.sE)(t.blocks,(function(e){var n=e.type;return o.tf.DATA_LOADER===n})),m=(0,a.sE)(t.blocks,(function(e){var n=e.type;return o.tf.TRANSFORMER===n})),y=[];m?y.push(m.uuid):null!==S&&void 0!==S&&S.upstream_blocks?y.push.apply(y,(0,r.Z)(S.upstream_blocks)):b&&y.push(b.uuid),g.upstream_blocks=y}return g}},60701:function(e,n,t){"use strict";t.d(n,{Qq:function(){return d},Z7:function(){return p},cH:function(){return i},du:function(){return s},fp:function(){return l},j5:function(){return f},uM:function(){return a}});var r,i,o=t(82394),u=t(10503),c=t(24224),a="sideview",l=90;!function(e){e.ADDON_BLOCKS="addon_blocks",e.CALLBACKS="callbacks",e.CHARTS="charts",e.DATA="data",e.EXTENSIONS="power_ups",e.FILE_VERSIONS="file_versions",e.GRAPHS="graphs",e.REPORTS="reports",e.SECRETS="secrets",e.SETTINGS="settings",e.TERMINAL="terminal",e.TREE="tree",e.VARIABLES="variables"}(i||(i={}));i.CALLBACKS,i.CHARTS,i.DATA,i.EXTENSIONS,i.REPORTS,i.TREE;var s=[i.DATA,i.REPORTS,i.GRAPHS],f=[{key:i.TREE,label:"Tree"},{buildLabel:function(e){var n=(e.pipeline||{}).widgets,t=void 0===n?[]:n;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:i.CHARTS},{buildLabel:function(e){var n=e.variables;return(null===n||void 0===n?void 0:n.length)>=1?"Variables (".concat(n.length,")"):"Variables"},key:i.VARIABLES},{buildLabel:function(e){var n=e.secrets;return(null===n||void 0===n?void 0:n.length)>=1?"Secrets (".concat(n.length,")"):"Secrets"},key:i.SECRETS},{buildLabel:function(e){e.pipeline;return"Add-on blocks"},key:i.ADDON_BLOCKS},{buildLabel:function(e){var n=(e.pipeline||{}).extensions,t=void 0===n?{}:n,r=0;return Object.values(t).forEach((function(e){var n=e.blocks;r+=(null===n||void 0===n?void 0:n.length)||0})),r>=1?"Power ups (".concat(r,")"):"Power ups"},key:i.EXTENSIONS},{key:i.DATA,label:"Data"},{key:i.TERMINAL,label:"Terminal"}],d=(0,c.HK)(f,(function(e){return e.key})),p=(r={},(0,o.Z)(r,i.ADDON_BLOCKS,u.EJ),(0,o.Z)(r,i.CALLBACKS,u.AQ),(0,o.Z)(r,i.CHARTS,u.GQ),(0,o.Z)(r,i.DATA,u.iA),(0,o.Z)(r,i.EXTENSIONS,u.Bf),(0,o.Z)(r,i.GRAPHS,u.GQ),(0,o.Z)(r,i.REPORTS,u.Do),(0,o.Z)(r,i.SECRETS,u.Yo),(0,o.Z)(r,i.SETTINGS,u.Zr),(0,o.Z)(r,i.TERMINAL,u.oI),(0,o.Z)(r,i.TREE,u.mp),(0,o.Z)(r,i.VARIABLES,u.LO),r)},20103:function(e,n,t){"use strict";t.d(n,{L6:function(){return o},HF:function(){return c}});var r,i=t(81132);!function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(r||(r={}));var o,u=t(10503);function c(e,n,t){var c=e.owner,a=e.roles,l=[{Icon:u.Vz,id:o.WORKSPACES,isSelected:function(){return o.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}];return(c||a===i.No.ADMIN)&&l.push({Icon:u.NO,id:o.USERS,isSelected:function(){return o.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),n==r.MAIN&&l.push({Icon:u.Zr,id:o.SETTINGS,isSelected:function(){return o.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),l}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(o||(o={}))},3849:function(e,n,t){"use strict";var r=t(82684),i=t(1210),o=t(82531),u=t(49125),c=t(20103),a=t(9736),l=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,s=void 0===t?[]:t,f=e.children,d=e.errors,p=e.pageName,v=e.subheaderChildren,h=o.ZP.statuses.list().data,S=(0,r.useMemo)((function(){var e,n;return null===h||void 0===h||null===(e=h.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.project_type}),[h]),A=(0,a.PR)()||{};return(0,l.jsx)(i.Z,{before:n,beforeWidth:n?50*u.iI:0,breadcrumbs:s,errors:d,navigationItems:(0,c.HF)(A,S,p),subheaderChildren:v,title:"Workspaces",uuid:"workspaces/index",children:f})}},86422:function(e,n,t){"use strict";t.d(n,{$W:function(){return v},DA:function(){return p},HX:function(){return A},J8:function(){return S},L8:function(){return u},Lq:function(){return f},M5:function(){return d},Qj:function(){return T},Ut:function(){return g},V4:function(){return O},VZ:function(){return h},dO:function(){return s},f2:function(){return R},iZ:function(){return E},t6:function(){return c},tf:function(){return l}});var r,i,o,u,c,a=t(82394);!function(e){e.CONDITION="condition",e.DBT_SNAPSHOT="snapshot",e.DYNAMIC="dynamic",e.DYNAMIC_CHILD="dynamic_child",e.REDUCE_OUTPUT="reduce_output",e.REPLICA="replica"}(u||(u={})),function(e){e.MARKDOWN="markdown",e.PYTHON="python",e.R="r",e.SQL="sql",e.YAML="yaml"}(c||(c={}));var l,s=(r={},(0,a.Z)(r,c.MARKDOWN,"MD"),(0,a.Z)(r,c.PYTHON,"PY"),(0,a.Z)(r,c.R,"R"),(0,a.Z)(r,c.SQL,"SQL"),(0,a.Z)(r,c.YAML,"YAML"),r);!function(e){e.CALLBACK="callback",e.CHART="chart",e.CONDITIONAL="conditional",e.CUSTOM="custom",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.DBT="dbt",e.EXTENSION="extension",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.MARKDOWN="markdown",e.TRANSFORMER="transformer"}(l||(l={}));var f,d=[l.CALLBACK,l.CONDITIONAL,l.EXTENSION];!function(e){e.BLUE="blue",e.GREY="grey",e.PINK="pink",e.PURPLE="purple",e.TEAL="teal",e.YELLOW="yellow"}(f||(f={}));var p,v=[l.CHART,l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN,l.TRANSFORMER],h=[l.DATA_EXPORTER,l.DATA_LOADER],S=[l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],A=[l.DATA_EXPORTER,l.DATA_LOADER,l.DBT,l.TRANSFORMER],T=[l.CHART,l.SCRATCHPAD,l.SENSOR,l.MARKDOWN],E=[l.CALLBACK,l.CHART,l.EXTENSION,l.SCRATCHPAD,l.MARKDOWN];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(p||(p={}));var R=[l.CUSTOM,l.DATA_EXPORTER,l.DATA_LOADER,l.TRANSFORMER],O=(i={},(0,a.Z)(i,l.CALLBACK,"Callback"),(0,a.Z)(i,l.CUSTOM,"Custom"),(0,a.Z)(i,l.DATA_EXPORTER,"Data exporter"),(0,a.Z)(i,l.DATA_LOADER,"Data loader"),(0,a.Z)(i,l.EXTENSION,"Extension"),(0,a.Z)(i,l.SCRATCHPAD,"Scratchpad"),(0,a.Z)(i,l.SENSOR,"Sensor"),(0,a.Z)(i,l.MARKDOWN,"Markdown"),(0,a.Z)(i,l.TRANSFORMER,"Transformer"),i),g=[l.DATA_LOADER,l.TRANSFORMER,l.DATA_EXPORTER,l.SENSOR];o={},(0,a.Z)(o,l.DATA_EXPORTER,"DE"),(0,a.Z)(o,l.DATA_LOADER,"DL"),(0,a.Z)(o,l.SCRATCHPAD,"SP"),(0,a.Z)(o,l.SENSOR,"SR"),(0,a.Z)(o,l.MARKDOWN,"MD"),(0,a.Z)(o,l.TRANSFORMER,"TF")},73828:function(e,n,t){"use strict";t.d(n,{JD:function(){return S},Lu:function(){return o},PF:function(){return p},d2:function(){return d},dT:function(){return u},n6:function(){return l},nB:function(){return h},oy:function(){return v},xF:function(){return f}});var r,i,o,u,c=t(82394),a=t(86422);!function(e){e.CSV="csv",e.JSON="json",e.MD="md",e.PY="py",e.R="r",e.SQL="sql",e.TXT="txt",e.YAML="yaml",e.YML="yml"}(o||(o={})),function(e){e.INIT_PY="__init__.py",e.METADATA_YAML="metadata.yaml",e.REQS_TXT="requirements.txt"}(u||(u={}));var l=[o.PY,o.SQL],s=[o.JSON,o.MD,o.PY,o.R,o.SQL,o.TXT,o.YAML,o.YML],f=new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),d=new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),p="charts",v="pipelines",h=(r={},(0,c.Z)(r,o.MD,a.t6.MARKDOWN),(0,c.Z)(r,o.JSON,o.JSON),(0,c.Z)(r,o.PY,a.t6.PYTHON),(0,c.Z)(r,o.R,a.t6.R),(0,c.Z)(r,o.SQL,a.t6.SQL),(0,c.Z)(r,o.TXT,"text"),(0,c.Z)(r,o.YAML,a.t6.YAML),(0,c.Z)(r,o.YML,a.t6.YAML),r),S=(i={},(0,c.Z)(i,a.t6.MARKDOWN,o.MD),(0,c.Z)(i,a.t6.PYTHON,o.PY),(0,c.Z)(i,a.t6.R,o.R),(0,c.Z)(i,a.t6.SQL,o.SQL),(0,c.Z)(i,a.t6.YAML,o.YAML),(0,c.Z)(i,"text",o.TXT),i)},98781:function(e,n,t){"use strict";t.d(n,{$1:function(){return a},G7:function(){return s},QK:function(){return c},a_:function(){return f},qL:function(){return o},r0:function(){return l}});var r,i,o,u=t(82394);!function(e){e.INTEGRATION="integration",e.PYTHON="python",e.PYSPARK="pyspark",e.STREAMING="streaming"}(o||(o={}));var c,a,l,s=(r={},(0,u.Z)(r,o.INTEGRATION,"Integration"),(0,u.Z)(r,o.PYTHON,"Standard"),(0,u.Z)(r,o.PYSPARK,"PySpark"),(0,u.Z)(r,o.STREAMING,"Streaming"),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive",e.NO_SCHEDULES="no_schedules",e.RETRY="retry"}(c||(c={})),function(e){e.GROUP="group_by",e.STATUS="status[]",e.TYPE="type[]"}(a||(a={})),function(e){e.STATUS="status",e.TYPE="type"}(l||(l={}));var f=(i={},(0,u.Z)(i,o.PYTHON,"python3"),(0,u.Z)(i,o.PYSPARK,"pysparkkernel"),i)},3938:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(38860),o=t.n(i),u=t(82684),c=t(91207),a=t(41788),l=t(3849),s=t(20103),f=t(28598);function d(){var e=(0,u.useState)(null),n=e[0];e[1];return(0,f.jsx)(l.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"Settings"}}],errors:n,pageName:s.L6.SETTINGS,children:(0,f.jsx)(c.Z,{active:!0,filePath:"metadata.yaml",selectedFilePath:"metadata.yaml",setFilesTouched:function(){return null}})})}d.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,a.Z)(d)},37958:function(e,n,t){"use strict";t.d(n,{j:function(){return r}});var r=(0,t(44152).r)({apiReloads:{}}).useGlobalState},90211:function(e,n,t){"use strict";t.d(n,{RA:function(){return s},kC:function(){return f},vg:function(){return T},kE:function(){return m},T3:function(){return O},Mp:function(){return d},Pb:function(){return a},HW:function(){return R},wX:function(){return p},x6:function(){return v},_6:function(){return h},zf:function(){return E},Y6:function(){return b},wE:function(){return y},J3:function(){return S},We:function(){return l},QV:function(){return g},C5:function(){return A}});var r=t(75582),i=t(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],u=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),c=t(24224);function a(e){if(!e)return!1;try{JSON.parse(e)}catch(n){return!1}return!0}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return e.split(" ").join(n)}function s(e){return e.split(" ").join("_")}function f(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*e)}function p(e){return e.charAt(0).toLowerCase()+e.slice(1)}function v(e){if(null===e||"undefined"===typeof e)return"";var n=e.toString().split("."),t=(0,r.Z)(n,2),i=t[0],o=t[1],u=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(u,".").concat(o):u}function h(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n,o=void 0!==i&&null!==i;if(o||(i=2),1===i)t=e;else{var u=e.length,c=e[u-1];t="y"===c&&"day"!==e?"".concat(e.slice(0,u-1),"ies"):"".concat(e,"s"===c?"es":"s")}if(o){var a=r?v(i):i;return"".concat(a," ").concat(t)}return t}function S(e){return null===e||void 0===e?void 0:e.replace(/_/g," ")}function A(e){var n=e.length;return"ies"===e.slice(n-3,n)?"".concat(e.slice(0,n-3),"y"):"es"===e.slice(n-2,n)&&"ces"!==e.slice(n-3,n)?e.slice(0,n-2):e.slice(0,n-1)}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f(S(e.toLowerCase()))}function E(e){var n,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(i,o){if(!n){var u=(0,r.Z)(i,2),c=u[0],a=u[1],l=t.slice(0,o).reduce((function(e,n){return e*Number(n[1])}),1);e<Number(a)*l&&(n=h(c,Math.round(e/l)))}})),n}function R(e){return!isNaN(e)}function O(e){return"".concat(v(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((e||0)*Math.pow(100,n))/100}(e)),"%")}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,n);return Math.round((e||0)*t)/t}function b(){return"".concat((0,c.mp)(o)," ").concat((0,c.mp)(u))}function m(e){return null===e||void 0===e?void 0:e.toLowerCase().replace(/\W+/g,"_")}function y(e){var n,t=e.split(i.sep),r=t[t.length-1].split(".");return n=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(n).join(i.sep)}},1116:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/settings",function(){return t(3938)}])}},function(e){e.O(0,[844,7607,8789,1424,1005,7722,9774,2888,179],(function(){return n=1116,e(e.s=n);var n}));var n=e.O();_N_E=n}]);