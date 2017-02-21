!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports.reactTextMask=r(require("react")):e.reactTextMask=r(e.React)}(this,function(e){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=r.MaskedInput=void 0;var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var i=t(6),u=n(i),s=t(5),l=n(s),p=r.MaskedInput=u.default.createClass({displayName:"MaskedInput",propTypes:{mask:i.PropTypes.oneOfType([i.PropTypes.array,i.PropTypes.func,i.PropTypes.shape({mask:i.PropTypes.oneOfType([i.PropTypes.array,i.PropTypes.func]),pipe:i.PropTypes.func})]).isRequired,guide:i.PropTypes.bool,value:i.PropTypes.oneOfType([i.PropTypes.string,i.PropTypes.number]),pipe:i.PropTypes.func,placeholderChar:i.PropTypes.string,keepCharPositions:i.PropTypes.bool},componentDidMount:function(){var e=this.props,r=this.props.value;this.textMaskInputElement=(0,l.default)(o({inputElement:this.inputElement},e)),this.textMaskInputElement.update(r)},componentDidUpdate:function(){this.textMaskInputElement.update(this.props.value)},render:function(){var e=this,r=o({},this.props);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onChange,u.default.createElement("input",o({},r,{onInput:this.onChange,defaultValue:this.props.value,ref:function(r){return e.inputElement=r}}))},onChange:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}});r.default=p},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,s=t.previousConformedValue,l=void 0===s?i:s,p=t.placeholderChar,f=void 0===p?a.placeholderChar:p,d=t.placeholder,c=void 0===d?(0,o.convertMaskToPlaceholder)(r,f):d,h=t.currentCaretPosition,v=t.keepCharPositions,m=u===!1&&void 0!==l,y=e.length,g=l.length,C=c.length,P=r.length,b=y-g,T=b>0,k=h+(T?-b:0),x=k+Math.abs(b);if(v===!0&&!T){for(var O=i,M=k;M<x;M++)c[M]===f&&(O+=f);e=e.slice(0,k)+O+e.slice(k,y)}for(var j=e.split(i).map(function(e,r){return{char:e,isNew:r>=k&&r<x}}),w=y-1;w>=0;w--){var V=j[w].char;if(V!==f){var _=w>=k&&g===P;V===c[_?w-b:w]&&j.splice(w,1)}}var S=i,E=!1;e:for(var N=0;N<C;N++){var I=c[N];if(I===f){if(j.length>0)for(;j.length>0;){var R=j.shift(),q=R.char,J=R.isNew;if(q===f&&m!==!0){S+=f;continue e}if(r[N].test(q)){if(v===!0&&J!==!1&&l!==i&&u!==!1&&T){for(var D=j.length,L=null,W=0;W<D;W++){var A=j[W];if(A.char!==f&&A.isNew===!1)break;if(A.char===f){L=W;break}}null!==L?(S+=q,j.splice(L,1)):N--}else S+=q;continue e}E=!0}m===!1&&(S+=c.substr(N,C));break}S+=I}if(m&&T===!1){for(var U=null,z=0;z<S.length;z++)c[z]===f&&(U=z);S=null!==U?S.substr(0,U+1):i}return{conformedValue:S,meta:{someCharsRejected:E}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(3),a=t(1),i=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function i(e){for(var r=[],t=void 0;t=e.indexOf(l),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=a,r.processCaretTraps=i;var u=t(1),s=[],l="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,a=e.currentCaretPosition,i=void 0===a?0:a,u=e.conformedValue,s=e.rawValue,l=e.placeholderChar,p=e.placeholder,f=e.indexesOfPipedChars,d=void 0===f?n:f,c=e.caretTrapIndexes,h=void 0===c?n:c;if(0===i)return 0;var v=s.length,m=t.length,y=p.length,g=u.length,C=v-m,P=C>0,b=0===m,T=C>1&&!P&&!b;if(T)return i;var k=P&&(t===u||u===p),x=0;if(k)x=i-C;else for(var O=u.toLowerCase(),M=s.toLowerCase(),j=M.substr(0,i).split(o),w=j.filter(function(e){return O.indexOf(e)!==-1}),V=w[w.length-1],_=d.map(function(e){return O[e]}),S=_.filter(function(e){return e===V}).length,E=w.filter(function(e){return e===V}).length,N=p.substr(0,p.indexOf(l)).split(o).filter(function(e,r){return e===V&&s[r]!==e}).length,I=N+E+S,R=0,q=0;q<g;q++){var J=O[q];if(x=q+1,J===V&&R++,R>=I)break}if(P){for(var D=x,L=x;L<=y;L++)if(p[L]===l&&(D=L),p[L]===l||h.indexOf(L)!==-1||L===y)return D}else for(var W=x;W>=0;W--)if(p[W-1]===l||h.indexOf(W)!==-1||0===W)return W}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=e.mask,n=e.guide,o=e.pipe,l=e.placeholderChar,f=void 0===l?h.placeholderChar:l,y=e.keepCharPositions,C=void 0!==y&&y;("undefined"==typeof t?"undefined":s(t))===g&&void 0!==t.pipe&&void 0!==t.mask&&(o=t.pipe,t=t.mask);var P={previousConformedValue:m},b=void 0,T=void 0;return t instanceof Array&&(b=(0,c.convertMaskToPlaceholder)(t,f)),{state:P,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.value;if(t!==!1&&e!==P.previousConformedValue){var l=i(e),h=r.selectionStart,y=P.previousConformedValue,g=void 0;if(("undefined"==typeof t?"undefined":s(t))===v){if(T=t(l,{currentCaretPosition:h,previousConformedValue:y,placeholderChar:f}),T===!1)return;var k=(0,c.processCaretTraps)(T),x=k.maskWithoutCaretTraps,O=k.indexes;T=x,g=O,b=(0,c.convertMaskToPlaceholder)(T,f)}else T=t;var M={previousConformedValue:y,guide:n,placeholderChar:f,pipe:o,placeholder:b,currentCaretPosition:h,keepCharPositions:C},j=(0,d.default)(l,T,M),w=j.conformedValue,V=("undefined"==typeof o?"undefined":s(o))===v,_={};V&&(_=o(w,u({rawValue:l},M)),_===!1?_={value:y,rejected:!0}:(0,c.isString)(_)&&(_={value:_}));var S=V?_.value:w,E=(0,p.default)({previousConformedValue:y,conformedValue:S,placeholder:b,rawValue:l,currentCaretPosition:h,placeholderChar:f,indexesOfPipedChars:_.indexesOfPipedChars,caretTrapIndexes:g}),N=S===b&&0===E,I=N?m:S;P.previousConformedValue=I,r.value!==I&&(r.value=I,a(r,E))}}}}function a(e,r){document.activeElement===e&&setTimeout(function(){e.setSelectionRange(r,r,y)},0)}function i(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var l=t(4),p=n(l),f=t(2),d=n(f),c=t(3),h=t(1),v="function",m="",y="none",g="object"},function(r,t){r.exports=e}])});