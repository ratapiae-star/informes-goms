/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.5.1 Built on 2022-01-28T15:37:57.789Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2021 yWorks GmbH, http://www.yworks.com
 *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).jspdf={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(){return"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this}();function n(){r.console&&"function"==typeof r.console.log&&r.console.log.apply(r.console,arguments)}var i={log:n,warn:function(t){r.console&&("function"==typeof r.console.warn?r.console.warn.apply(r.console,arguments):n.call(null,arguments))},error:function(t){r.console&&("function"==typeof r.console.error?r.console.error.apply(r.console,arguments):n(t))}};function a(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,r)},n.onerror=function(){i.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function s(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var c,u,l=r.saveAs||("object"!==("undefined"==typeof window?"undefined":e(window))||window!==r?function(){}:"undefined"!=typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype?function(t,e,n){var i=r.URL||r.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin!==location.origin?o(c.href)?a(t,e,n):s(c,c.target="_blank"):s(c)):(c.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){s(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,r,n){if(r=r||t.name||"download","string"==typeof t)if(o(t))a(t,r,n);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout((function(){s(c)}))}else navigator.msSaveOrOpenBlob(function(t,r){return void 0===r?r={autoBom:!1}:"object"!==e(r)&&(i.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,n),r)}:function(t,n,i,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return a(t,n,i);var s="application/octet-stream"===t.type,c=/constructor/i.test(r.HTMLElement)||r.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&c)&&"object"===("undefined"==typeof FileReader?"undefined":e(FileReader))){var l=new FileReader;l.onloadend=function(){var t=l.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},l.readAsDataURL(t)}else{var h=r.URL||r.webkitURL,f=h.createObjectURL(t);o?o.location=f:location.href=f,o=null,setTimeout((function(){h.revokeObjectURL(f)}),4e4)}});
/**
   * A class to parse color values
   * @author Stoyan Stefanov <sstoo@gmail.com>
   * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
   * @license Use it if you like it
   */function h(t){var e;t=t||"",this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6));t={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[t=(t=t.replace(/ /g,"")).toLowerCase()]||t;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],n=0;n<r.length;n++){var i=r[n].re,a=r[n].process,o=i.exec(t);o&&(e=a(o),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),r=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==r.length&&(r="0"+r),"#"+t+e+r}}
/**
   * @license
   * Joseph Myers does not specify a particular license for his work.
   *
   * Author: Joseph Myers
   * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
   *
   * Modified by: Owen Leong
   */
function f(t,e){var r=t[0],n=t[1],i=t[2],a=t[3];r=p(r,n,i,a,e[0],7,-680876936),a=p(a,r,n,i,e[1],12,-389564586),i=p(i,a,r,n,e[2],17,606105819),n=p(n,i,a,r,e[3],22,-1044525330),r=p(r,n,i,a,e[4],7,-176418897),a=p(a,r,n,i,e[5],12,1200080426),i=p(i,a,r,n,e[6],17,-1473231341),n=p(n,i,a,r,e[7],22,-45705983),r=p(r,n,i,a,e[8],7,1770035416),a=p(a,r,n,i,e[9],12,-1958414417),i=p(i,a,r,n,e[10],17,-42063),n=p(n,i,a,r,e[11],22,-1990404162),r=p(r,n,i,a,e[12],7,1804603682),a=p(a,r,n,i,e[13],12,-40341101),i=p(i,a,r,n,e[14],17,-1502002290),r=g(r,n=p(n,i,a,r,e[15],22,1236535329),i,a,e[1],5,-165796510),a=g(a,r,n,i,e[6],9,-1069501632),i=g(i,a,r,n,e[11],14,643717713),n=g(n,i,a,r,e[0],20,-373897302),r=g(r,n,i,a,e[5],5,-701558691),a=g(a,r,n,i,e[10],9,38016083),i=g(i,a,r,n,e[15],14,-660478335),n=g(n,i,a,r,e[4],20,-405537848),r=g(r,n,i,a,e[9],5,568446438),a=g(a,r,n,i,e[14],9,-1019803690),i=g(i,a,r,n,e[3],14,-187363961),n=g(n,i,a,r,e[8],20,1163531501),r=g(r,n,i,a,e[13],5,-1444681467),a=g(a,r,n,i,e[2],9,-51403784),i=g(i,a,r,n,e[7],14,1735328473),r=m(r,n=g(n,i,a,r,e[12],20,-1926607734),i,a,e[5],4,-378558),a=m(a,r,n,i,e[8],11,-2022574463),i=m(i,a,r,n,e[11],16,1839030562),n=m(n,i,a,r,e[14],23,-35309556),r=m(r,n,i,a,e[1],4,-1530992060),a=m(a,r,n,i,e[4],11,1272893353),i=m(i,a,r,n,e[7],16,-155497632),n=m(n,i,a,r,e[10],23,-1094730640),r=m(r,n,i,a,e[13],4,681279174),a=m(a,r,n,i,e[0],11,-358537222),i=m(i,a,r,n,e[3],16,-722521979),n=m(n,i,a,r,e[6],23,76029189),r=m(r,n,i,a,e[9],4,-640364487),a=m(a,r,n,i,e[12],11,-421815835),i=m(i,a,r,n,e[15],16,530742520),r=v(r,n=m(n,i,a,r,e[2],23,-995338651),i,a,e[0],6,-198630844),a=v(a,r,n,i,e[7],10,1126891415),i=v(i,a,r,n,e[14],15,-1416354905),n=v(n,i,a,r,e[5],21,-57434055),r=v(r,n,i,a,e[12],6,1700485571),a=v(a,r,n,i,e[3],10,-1894986606),i=v(i,a,r,n,e[10],15,-1051523),n=v(n,i,a,r,e[1],21,-2054922799),r=v(r,n,i,a,e[8],6,1873313359),a=v(a,r,n,i,e[15],10,-30611744),i=v(i,a,r,n,e[6],15,-1560198380),n=v(n,i,a,r,e[13],21,1309151649),r=v(r,n,i,a,e[4],6,-145523070),a=v(a,r,n,i,e[11],10,-1120210379),i=v(i,a,r,n,e[2],15,718787259),n=v(n,i,a,r,e[9],21,-343485551),t[0]=S(r,t[0]),t[1]=S(n,t[1]),t[2]=S(i,t[2]),t[3]=S(a,t[3])}function d(t,e,r,n,i,a){return e=S(S(e,t),S(n,a)),S(e<<i|e>>>32-i,r)}function p(t,e,r,n,i,a,o){return d(e&r|~e&n,t,e,i,a,o)}function g(t,e,r,n,i,a,o){return d(e&n|r&~n,t,e,i,a,o)}function m(t,e,r,n,i,a,o){return d(e^r^n,t,e,i,a,o)}function v(t,e,r,n,i,a,o){return d(r^(e|~n),t,e,i,a,o)}function b(t){var e,r=t.length,n=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=t.length;e+=64)f(n,y(t.substring(e-64,e)));t=t.substring(e-64);var i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<t.length;e++)i[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(f(n,i),e=0;e<16;e++)i[e]=0;return i[14]=8*r,f(n,i),n}function y(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return r}c=r.atob.bind(r),u=r.btoa.bind(r);var w="0123456789abcdef".split("");function N(t){for(var e="",r=0;r<4;r++)e+=w[t>>8*r+4&15]+w[t>>8*r&15];return e}function L(t){return String.fromCharCode((255&t)>>0,(65280&t)>>8,(16711680&t)>>16,(4278190080&t)>>24)}function A(t){return function(t){return t.map(L).join("")}(b(t))}var x="5d41402abc4b2a76b9719d911017c592"!=function(t){for(var e=0;e<t.length;e++)t[e]=N(t[e]);return t.join("")}(b("hello"));function S(t,e){if(x){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}return t+e&4294967295}
/**
   * @license
   * FPDF is released under a permissive license: there is no usage restriction.
   * You may embed it freely in your application (commercial or not), with or
   * without modifications.
   *
   * Reference: http://www.fpdf.org/en/script/script37.php
   */function _(t,e){var r,n,i,a;if(t!==r){for(var o=(i=t,a=1+(256/t.length>>0),new Array(a+1).join(i)),s=[],c=0;c<256;c++)s[c]=c;var u=0;for(c=0;c<256;c++){var l=s[c];u=(u+l+o.charCodeAt(c))%256,s[c]=s[u],s[u]=l}r=t,n=s}else s=n;var h=e.length,f=0,d=0,p="";for(c=0;c<h;c++)d=(d+(l=s[f=(f+1)%256]))%256,s[f]=s[d],s[d]=l,o=s[(s[f]+s[d])%256],p+=String.fromCharCode(e.charCodeAt(c)^o);return p}
/**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   * Author: Owen Leong (@owenl131)
   * Date: 15 Oct 2020
   * References:
   * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
   * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
   * http://www.fpdf.org/en/script/script37.php
   */var P={print:4,modify:8,copy:16,"annot-forms":32};function k(t,e,r,n){this.v=1,this.r=2;var i=192;t.forEach((function(t){if(void 0!==P.perm)throw new Error("Invalid permission: "+t);i+=P[t]})),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var a=(e+this.padding).substr(0,32),o=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(a,o),this.P=-(1+(255^i)),this.encryptionKey=A(a+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(n)).substr(0,5),this.U=_(this.encryptionKey,this.padding)}function F(t){if(/[^\u0000-\u00ff]/.test(t))throw new Error("Invalid PDF Name Object: "+t+", Only accept ASCII characters.");for(var e="",r=t.length,n=0;n<r;n++){var i=t.charCodeAt(n);if(i<33||35===i||37===i||40===i||41===i||47===i||60===i||62===i||91===i||93===i||123===i||125===i||i>126)e+="#"+("0"+i.toString(16)).slice(-2);else e+=t[n]}return e}function I(t){if("object"!==e(t))throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var n={};this.subscribe=function(t,e,r){if(r=r||!1,"string"!=typeof t||"function"!=typeof e||"boolean"!=typeof r)throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");n.hasOwnProperty(t)||(n[t]={});var i=Math.random().toString(35);return n[t][i]=[e,!!r],i},this.unsubscribe=function(t){for(var e in n)if(n[e][t])return delete n[e][t],0===Object.keys(n[e]).length&&delete n[e],!0;return!1},this.publish=function(e){if(n.hasOwnProperty(e)){var a=Array.prototype.slice.call(arguments,1),o=[];for(var s in n[e]){var c=n[e][s];try{c[0].apply(t,a)}catch(t){r.console&&i.error("jsPDF PubSub Error",t.message,t)}c[1]&&o.push(s)}o.length&&o.forEach(this.unsubscribe)}},this.getTopics=function(){return n}}function C(t){if(!(this instanceof C))return new C(t);var e="opacity,stroke-opacity".split(",");for(var r in t)t.hasOwnProperty(r)&&e.indexOf(r)>=0&&(this[r]=t[r]);this.id="",this.objectNumber=-1}function j(t,e){this.gState=t,this.matrix=e,this.id="",this.objectNumber=-1}function O(t,e,r,n,i){if(!(this instanceof O))return new O(t,e,r,n,i);this.type="axial"===t?2:3,this.coords=e,this.colors=r,j.call(this,n,i)}function B(t,e,r,n,i){if(!(this instanceof B))return new B(t,e,r,n,i);this.boundingBox=t,this.xStep=e,this.yStep=r,this.stream="",this.cloneIndex=0,j.call(this,n,i)}function M(t){var n,a="string"==typeof arguments[0]?arguments[0]:"p",o=arguments[1],s=arguments[2],c=arguments[3],f=[],d=1,p=16,g="S",m=null;"object"===e(t=t||{})&&(a=t.orientation,o=t.unit||o,s=t.format||s,c=t.compress||t.compressPdf||c,null!==(m=t.encryption||null)&&(m.userPassword=m.userPassword||"",m.ownerPassword=m.ownerPassword||"",m.userPermissions=m.userPermissions||[]),d="number"==typeof t.userUnit?Math.abs(t.userUnit):1,void 0!==t.precision&&(n=t.precision),void 0!==t.floatPrecision&&(p=t.floatPrecision),g=t.defaultPathOperation||"S"),f=t.filters||(!0===c?["FlateEncode"]:f),o=o||"mm",a=(""+(a||"P")).toLowerCase();var v=t.putOnlyUsedFonts||!1,b={},y={internal:{},__private__:{}};y.__private__.PubSub=I;var w="1.3",N=y.__private__.getPdfVersion=function(){return w};y.__private__.setPdfVersion=function(t){w=t};var L={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};y.__private__.getPageFormats=function(){return L};var A=y.__private__.getPageFormat=function(t){return L[t]};s=s||"a4";var x={COMPAT:"compat",ADVANCED:"advanced"},S=x.COMPAT;function _(){this.saveGraphicsState(),ht(new Vt(_t,0,0,-_t,0,Rr()*_t).toString()+" cm"),this.setFontSize(this.getFontSize()/_t),g="n",S=x.ADVANCED}function P(){this.restoreGraphicsState(),g="S",S=x.COMPAT}var j=y.__private__.combineFontStyleAndFontWeight=function(t,e){if("bold"==t&&"normal"==e||"bold"==t&&400==e||"normal"==t&&"italic"==e||"bold"==t&&"italic"==e)throw new Error("Invalid Combination of fontweight and fontstyle");return e&&(t=400==e||"normal"===e?"italic"===t?"italic":"normal":700!=e&&"bold"!==e||"normal"!==t?(700==e?"bold":e)+""+t:"bold"),t};y.advancedAPI=function(t){var e=S===x.COMPAT;return e&&_.call(this),"function"!=typeof t||(t(this),e&&P.call(this)),this},y.compatAPI=function(t){var e=S===x.ADVANCED;return e&&P.call(this),"function"!=typeof t||(t(this),e&&_.call(this)),this},y.isAdvancedAPI=function(){return S===x.ADVANCED};var E,q=function(t){if(S!==x.ADVANCED)throw new Error(t+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},D=y.roundToPrecision=y.__private__.roundToPrecision=function(t,e){var r=n||e;if(isNaN(t)||isNaN(r))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return t.toFixed(r).replace(/0+$/,"")};E=y.hpf=y.__private__.hpf="number"==typeof p?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return D(t,p)}:"smart"===p?function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return D(t,t>-1&&t<1?16:5)}:function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.hpf");return D(t,16)};var R=y.f2=y.__private__.f2=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f2");return D(t,2)},T=y.__private__.f3=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.f3");return D(t,3)},U=y.scale=y.__private__.scale=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.scale");return S===x.COMPAT?t*_t:S===x.ADVANCED?t:void 0},z=function(t){return S===x.COMPAT?Rr()-t:S===x.ADVANCED?t:void 0},H=function(t){return U(z(t))};y.__private__.setPrecision=y.setPrecision=function(t){"number"==typeof parseInt(t,10)&&(n=parseInt(t,10))};var W,V="00000000000000000000000000000000",G=y.__private__.getFileId=function(){return V},Y=y.__private__.setFileId=function(t){return V=void 0!==t&&/^[a-fA-F0-9]{32}$/.test(t)?t.toUpperCase():V.split("").map((function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))})).join(""),null!==m&&(Ye=new k(m.userPermissions,m.userPassword,m.ownerPassword,V)),V};y.setFileId=function(t){return Y(t),this},y.getFileId=function(){return G()};var J=y.__private__.convertDateToPDFDate=function(t){var e=t.getTimezoneOffset(),r=e<0?"+":"-",n=Math.floor(Math.abs(e/60)),i=Math.abs(e%60),a=[r,Q(n),"'",Q(i),"'"].join("");return["D:",t.getFullYear(),Q(t.getMonth()+1),Q(t.getDate()),Q(t.getHours()),Q(t.getMinutes()),Q(t.getSeconds()),a].join("")},X=y.__private__.convertPDFDateToDate=function(t){var e=parseInt(t.substr(2,4),10),r=parseInt(t.substr(6,2),10)-1,n=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),a=parseInt(t.substr(12,2),10),o=parseInt(t.substr(14,2),10);return new Date(e,r,n,i,a,o,0)},K=y.__private__.setCreationDate=function(t){var e;if(void 0===t&&(t=new Date),t instanceof Date)e=J(t);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t))throw new Error("Invalid argument passed to jsPDF.setCreationDate");e=t}return W=e},Z=y.__private__.getCreationDate=function(t){var e=W;return"jsDate"===t&&(e=X(W)),e};y.setCreationDate=function(t){return K(t),this},y.getCreationDate=function(t){return Z(t)};var $,Q=y.__private__.padd2=function(t){return("0"+parseInt(t)).slice(-2)},tt=y.__private__.padd2Hex=function(t){return("00"+(t=t.toString())).substr(t.length)},et=0,rt=[],nt=[],it=0,at=[],ot=[],st=!1,ct=nt,ut=function(){et=0,it=0,nt=[],rt=[],at=[],Qt=Kt(),te=Kt()};y.__private__.setCustomOutputDestination=function(t){st=!0,ct=t};var lt=function(t){st||(ct=t)};y.__private__.resetCustomOutputDestination=function(){st=!1,ct=nt};var ht=y.__private__.out=function(t){return t=t.toString(),it+=t.length+1,ct.push(t),ct},ft=y.__private__.write=function(t){return ht(1===arguments.length?t.toString():Array.prototype.join.call(arguments," "))},dt=y.__private__.getArrayBuffer=function(t){for(var e=t.length,r=new ArrayBuffer(e),n=new Uint8Array(r);e--;)n[e]=t.charCodeAt(e);return r},pt=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];y.__private__.getStandardFonts=function(){return pt};var gt=t.fontSize||16;y.__private__.setFontSize=y.setFontSize=function(t){return gt=S===x.ADVANCED?t/_t:t,this};var mt,vt=y.__private__.getFontSize=y.getFontSize=function(){return S===x.COMPAT?gt:gt*_t},bt=t.R2L||!1;y.__private__.setR2L=y.setR2L=function(t){return bt=t,this},y.__private__.getR2L=y.getR2L=function(){return bt};var yt,wt=y.__private__.setZoomMode=function(t){var e=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t))mt=t;else if(isNaN(t)){if(-1===e.indexOf(t))throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+t+'" is not recognized.');mt=t}else mt=parseInt(t,10)};y.__private__.getZoomMode=function(){return mt};var Nt,Lt=y.__private__.setPageMode=function(t){if(-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(t))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+t+'" is not recognized.');yt=t};y.__private__.getPageMode=function(){return yt};var At=y.__private__.setLayoutMode=function(t){if(-1==[void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(t))throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+t+'" is not recognized.');Nt=t};y.__private__.getLayoutMode=function(){return Nt},y.__private__.setDisplayMode=y.setDisplayMode=function(t,e,r){return wt(t),At(e),Lt(r),this};var xt={title:"",subject:"",author:"",keywords:"",creator:""};y.__private__.getDocumentProperty=function(t){if(-1===Object.keys(xt).indexOf(t))throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return xt[t]},y.__private__.getDocumentProperties=function(){return xt},y.__private__.setDocumentProperties=y.setProperties=y.setDocumentProperties=function(t){for(var e in xt)xt.hasOwnProperty(e)&&t[e]&&(xt[e]=t[e]);return this},y.__private__.setDocumentProperty=function(t,e){if(-1===Object.keys(xt).indexOf(t))throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return xt[t]=e};var St,_t,Pt,kt,Ft,It={},Ct={},jt=[],Ot={},Bt={},Mt={},Et={},qt=null,Dt=0,Rt=[],Tt=new I(y),Ut=t.hotfixes||[],zt={},Ht={},Wt=[],Vt=function t(e,r,n,i,a,o){if(!(this instanceof t))return new t(e,r,n,i,a,o);isNaN(e)&&(e=1),isNaN(r)&&(r=0),isNaN(n)&&(n=0),isNaN(i)&&(i=1),isNaN(a)&&(a=0),isNaN(o)&&(o=0),this._matrix=[e,r,n,i,a,o]};Object.defineProperty(Vt.prototype,"sx",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Vt.prototype,"shy",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Vt.prototype,"shx",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Vt.prototype,"sy",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Vt.prototype,"tx",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Vt.prototype,"ty",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Vt.prototype,"a",{get:function(){return this._matrix[0]},set:function(t){this._matrix[0]=t}}),Object.defineProperty(Vt.prototype,"b",{get:function(){return this._matrix[1]},set:function(t){this._matrix[1]=t}}),Object.defineProperty(Vt.prototype,"c",{get:function(){return this._matrix[2]},set:function(t){this._matrix[2]=t}}),Object.defineProperty(Vt.prototype,"d",{get:function(){return this._matrix[3]},set:function(t){this._matrix[3]=t}}),Object.defineProperty(Vt.prototype,"e",{get:function(){return this._matrix[4]},set:function(t){this._matrix[4]=t}}),Object.defineProperty(Vt.prototype,"f",{get:function(){return this._matrix[5]},set:function(t){this._matrix[5]=t}}),Object.defineProperty(Vt.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(Vt.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(Vt.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(Vt.prototype,"isIdentity",{get:function(){return 1===this.sx&&(0===this.shy&&(0===this.shx&&(1===this.sy&&(0===this.tx&&0===this.ty))))}}),Vt.prototype.join=function(t){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(E).join(t)},Vt.prototype.multiply=function(t){var e=t.sx*this.sx+t.shy*this.shx,r=t.sx*this.shy+t.shy*this.sy,n=t.shx*this.sx+t.sy*this.shx,i=t.shx*this.shy+t.sy*this.sy,a=t.tx*this.sx+t.ty*this.shx+this.tx,o=t.tx*this.shy+t.ty*this.sy+this.ty;return new Vt(e,r,n,i,a,o)},Vt.prototype.decompose=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty,o=Math.sqrt(t*t+e*e),s=(t/=o)*r+(e/=o)*n;r-=t*s,n-=e*s;var c=Math.sqrt(r*r+n*n);return s/=c,t*(n/=c)<e*(r/=c)&&(t=-t,e=-e,s=-s,o=-o),{scale:new Vt(o,0,0,c,0,0),translate:new Vt(1,0,0,1,i,a),rotate:new Vt(t,e,-e,t,0,0),skew:new Vt(1,0,s,1,0,0)}},Vt.prototype.toString=function(t){return this.join(" ")},Vt.prototype.inversed=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty,o=1/(t*n-e*r),s=n*o,c=-e*o,u=-r*o,l=t*o;return new Vt(s,c,u,l,-s*i-u*a,-c*i-l*a)},Vt.prototype.applyToPoint=function(t){var e=t.x*this.sx+t.y*this.shx+this.tx,r=t.x*this.shy+t.y*this.sy+this.ty;return new Cr(e,r)},Vt.prototype.applyToRectangle=function(t){var e=this.applyToPoint(t),r=this.applyToPoint(new Cr(t.x+t.w,t.y+t.h));return new jr(e.x,e.y,r.x-e.x,r.y-e.y)},Vt.prototype.clone=function(){var t=this.sx,e=this.shy,r=this.shx,n=this.sy,i=this.tx,a=this.ty;return new Vt(t,e,r,n,i,a)},y.Matrix=Vt;var Gt=y.matrixMult=function(t,e){return e.multiply(t)},Yt=new Vt(1,0,0,1,0,0);y.unitMatrix=y.identityMatrix=Yt;var Jt=function(t,e){if(!Bt[t]){var r=(e instanceof O?"Sh":"P")+(Object.keys(Ot).length+1).toString(10);e.id=r,Bt[t]=r,Ot[r]=e,Tt.publish("addPattern",e)}};y.ShadingPattern=O,y.TilingPattern=B,y.addShadingPattern=function(t,e){return q("addShadingPattern()"),Jt(t,e),this},y.beginTilingPattern=function(t){q("beginTilingPattern()"),Br(t.boundingBox[0],t.boundingBox[1],t.boundingBox[2]-t.boundingBox[0],t.boundingBox[3]-t.boundingBox[1],t.matrix)},y.endTilingPattern=function(t,e){q("endTilingPattern()"),e.stream=ot[$].join("\n"),Jt(t,e),Tt.publish("endTilingPattern",e),Wt.pop().restore()};var Xt=y.__private__.newObject=function(){var t=Kt();return Zt(t,!0),t},Kt=y.__private__.newObjectDeferred=function(){return et++,rt[et]=function(){return it},et},Zt=function(t,e){return e="boolean"==typeof e&&e,rt[t]=it,e&&ht(t+" 0 obj"),t},$t=y.__private__.newAdditionalObject=function(){var t={objId:Kt(),content:""};return at.push(t),t},Qt=Kt(),te=Kt(),ee=y.__private__.decodeColorString=function(t){var e=t.split(" ");if(2!==e.length||"g"!==e[1]&&"G"!==e[1]){if(5===e.length&&("k"===e[4]||"K"===e[4])){e=[(1-e[0])*(1-e[3]),(1-e[1])*(1-e[3]),(1-e[2])*(1-e[3]),"r"]}}else{var r=parseFloat(e[0]);e=[r,r,r,"r"]}for(var n="#",i=0;i<3;i++)n+=("0"+Math.floor(255*parseFloat(e[i])).toString(16)).slice(-2);return n},re=y.__private__.encodeColorString=function(t){var r;"string"==typeof t&&(t={ch1:t});var n=t.ch1,i=t.ch2,a=t.ch3,o=t.ch4,s="draw"===t.pdfColorType?["G","RG","K"]:["g","rg","k"];if("string"==typeof n&&"#"!==n.charAt(0)){var c=new h(n);if(c.ok)n=c.toHex();else if(!/^\d*\.?\d*$/.test(n))throw new Error('Invalid color "'+n+'" passed to jsPDF.encodeColorString.')}if("string"==typeof n&&/^#[0-9A-Fa-f]{3}$/.test(n)&&(n="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),"string"==typeof n&&/^#[0-9A-Fa-f]{6}$/.test(n)){var u=parseInt(n.substr(1),16);n=u>>16&255,i=u>>8&255,a=255&u}if(void 0===i||void 0===o&&n===i&&i===a)if("string"==typeof n)r=n+" "+s[0];else switch(t.precision){case 2:r=R(n/255)+" "+s[0];break;case 3:default:r=T(n/255)+" "+s[0]}else if(void 0===o||"object"===e(o)){if(o&&!isNaN(o.a)&&0===o.a)return r=["1.","1.","1.",s[1]].join(" ");if("string"==typeof n)r=[n,i,a,s[1]].join(" ");else switch(t.precision){case 2:r=[R(n/255),R(i/255),R(a/255),s[1]].join(" ");break;default:case 3:r=[T(n/255),T(i/255),T(a/255),s[1]].join(" ")}}else if("string"==typeof n)r=[n,i,a,o,s[2]].join(" ");else switch(t.precision){case 2:r=[R(n),R(i),R(a),R(o),s[2]].join(" ");break;case 3:default:r=[T(n),T(i),T(a),T(o),s[2]].join(" ")}return r},ne=y.__private__.getFilters=function(){return f},ie=y.__private__.putStream=function(t){var e=(t=t||{}).data||"",r=t.filters||ne(),n=t.alreadyAppliedFilters||[],i=t.addLength1||!1,a=e.length,o=t.objectId,s=function(t){return t};if(null!==m&&void 0===o)throw new Error("ObjectId must be passed to putStream for file encryption");null!==m&&(s=Ye.encryptor(o,0));var c={};!0===r&&(r=["FlateEncode"]);var u=t.additionalKeyValues||[],l=(c=void 0!==M.API.processDataByFilters?M.API.processDataByFilters(e,r):{data:e,reverseChain:[]}).reverseChain+(Array.isArray(n)?n.join(" "):n.toString());if(0!==c.data.length&&(u.push({key:"Length",value:c.data.length}),!0===i&&u.push({key:"Length1",value:a})),0!=l.length)if(l.split("/").length-1==1)u.push({key:"Filter",value:l});else{u.push({key:"Filter",value:"["+l+"]"});for(var h=0;h<u.length;h+=1)if("DecodeParms"===u[h].key){for(var f=[],d=0;d<c.reverseChain.split("/").length-1;d+=1)f.push("null");f.push(u[h].value),u[h].value="["+f.join(" ")+"]"}}ht("<<");for(var p=0;p<u.length;p++)ht("/"+u[p].key+" "+u[p].value);ht(">>"),0!==c.data.length&&(ht("stream"),ht(s(c.data)),ht("endstream"))},ae=y.__private__.putPage=function(t){var e=t.number,r=t.data,n=t.objId,i=t.contentsObjId;Zt(n,!0),ht("<</Type /Page"),ht("/Parent "+t.rootDictionaryObjId+" 0 R"),ht("/Resources "+t.resourceDictionaryObjId+" 0 R"),ht("/MediaBox ["+parseFloat(E(t.mediaBox.bottomLeftX))+" "+parseFloat(E(t.mediaBox.bottomLeftY))+" "+E(t.mediaBox.topRightX)+" "+E(t.mediaBox.topRightY)+"]"),null!==t.cropBox&&ht("/CropBox ["+E(t.cropBox.bottomLeftX)+" "+E(t.cropBox.bottomLeftY)+" "+E(t.cropBox.topRightX)+" "+E(t.cropBox.topRightY)+"]"),null!==t.bleedBox&&ht("/BleedBox ["+E(t.bleedBox.bottomLeftX)+" "+E(t.bleedBox.bottomLeftY)+" "+E(t.bleedBox.topRightX)+" "+E(t.bleedBox.topRightY)+"]"),null!==t.trimBox&&ht("/TrimBox ["+E(t.trimBox.bottomLeftX)+" "+E(t.trimBox.bottomLeftY)+" "+E(t.trimBox.topRightX)+" "+E(t.trimBox.topRightY)+"]"),null!==t.artBox&&ht("/ArtBox ["+E(t.artBox.bottomLeftX)+" "+E(t.artBox.bottomLeftY)+" "+E(t.artBox.topRightX)+" "+E(t.artBox.topRightY)+"]"),"number"==typeof t.userUnit&&1!==t.userUnit&&ht("/UserUnit "+t.userUnit),Tt.publish("putPage",{objId:n,pageContext:Rt[e],pageNumber:e,page:r}),ht("/Contents "+i+" 0 R"),ht(">>"),ht("endobj");var a=r.join("\n");return S===x.ADVANCED&&(a+="\nQ"),Zt(i,!0),ie({data:a,filters:ne(),objectId:i}),ht("endobj"),n},oe=y.__private__.putPages=function(){var t,e,r=[];for(t=1;t<=Dt;t++)Rt[t].objId=Kt(),Rt[t].contentsObjId=Kt();for(t=1;t<=Dt;t++)r.push(ae({number:t,data:ot[t],objId:Rt[t].objId,contentsObjId:Rt[t].contentsObjId,mediaBox:Rt[t].mediaBox,cropBox:Rt[t].cropBox,bleedBox:Rt[t].bleedBox,trimBox:Rt[t].trimBox,artBox:Rt[t].artBox,userUnit:Rt[t].userUnit,rootDictionaryObjId:Qt,resourceDictionaryObjId:te}));Zt(Qt,!0),ht("<</Type /Pages");var n="/Kids [";for(e=0;e<Dt;e++)n+=r[e]+" 0 R ";ht(n+"]"),ht("/Count "+Dt),ht(">>"),ht("endobj"),Tt.publish("postPutPages")},se=function(t){Tt.publish("putFont",{font:t,out:ht,newObject:Xt,putStream:ie}),!0!==t.isAlreadyPutted&&(t.objectNumber=Xt(),ht("<<"),ht("/Type /Font"),ht("/BaseFont /"+F(t.postScriptName)),ht("/Subtype /Type1"),"string"==typeof t.encoding&&ht("/Encoding /"+t.encoding),ht("/FirstChar 32"),ht("/LastChar 255"),ht(">>"),ht("endobj"))},ce=function(){for(var t in It)It.hasOwnProperty(t)&&(!1===v||!0===v&&b.hasOwnProperty(t))&&se(It[t])},ue=function(t){t.objectNumber=Xt();var e=[];e.push({key:"Type",value:"/XObject"}),e.push({key:"Subtype",value:"/Form"}),e.push({key:"BBox",value:"["+[E(t.x),E(t.y),E(t.x+t.width),E(t.y+t.height)].join(" ")+"]"}),e.push({key:"Matrix",value:"["+t.matrix.toString()+"]"});var r=t.pages[1].join("\n");ie({data:r,additionalKeyValues:e,objectId:t.objectNumber}),ht("endobj")},le=function(){for(var t in zt)zt.hasOwnProperty(t)&&ue(zt[t])},he=function(t,e){var r,n=[],i=1/(e-1);for(r=0;r<1;r+=i)n.push(r);if(n.push(1),0!=t[0].offset){var a={offset:0,color:t[0].color};t.unshift(a)}if(1!=t[t.length-1].offset){var o={offset:1,color:t[t.length-1].color};t.push(o)}for(var s="",c=0,u=0;u<n.length;u++){for(r=n[u];r>t[c+1].offset;)c++;var l=t[c].offset,h=(r-l)/(t[c+1].offset-l),f=t[c].color,d=t[c+1].color;s+=tt(Math.round((1-h)*f[0]+h*d[0]).toString(16))+tt(Math.round((1-h)*f[1]+h*d[1]).toString(16))+tt(Math.round((1-h)*f[2]+h*d[2]).toString(16))}return s.trim()},fe=function(t,e){e||(e=21);var r=Xt(),n=he(t.colors,e),i=[];i.push({key:"FunctionType",value:"0"}),i.push({key:"Domain",value:"[0.0 1.0]"}),i.push({key:"Size",value:"["+e+"]"}),i.push({key:"BitsPerSample",value:"8"}),i.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),i.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),ie({data:n,additionalKeyValues:i,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:r}),ht("endobj"),t.objectNumber=Xt(),ht("<< /ShadingType "+t.type),ht("/ColorSpace /DeviceRGB");var a="/Coords ["+E(parseFloat(t.coords[0]))+" "+E(parseFloat(t.coords[1]))+" ";2===t.type?a+=E(parseFloat(t.coords[2]))+" "+E(parseFloat(t.coords[3])):a+=E(parseFloat(t.coords[2]))+" "+E(parseFloat(t.coords[3]))+" "+E(parseFloat(t.coords[4]))+" "+E(parseFloat(t.coords[5])),ht(a+="]"),t.matrix&&ht("/Matrix ["+t.matrix.toString()+"]"),ht("/Function "+r+" 0 R"),ht("/Extend [true true]"),ht(">>"),ht("endobj")},de=function(t,e){var r=Kt(),n=Xt();e.push({resourcesOid:r,objectOid:n}),t.objectNumber=n;var i=[];i.push({key:"Type",value:"/Pattern"}),i.push({key:"PatternType",value:"1"}),i.push({key:"PaintType",value:"1"}),i.push({key:"TilingType",value:"1"}),i.push({key:"BBox",value:"["+t.boundingBox.map(E).join(" ")+"]"}),i.push({key:"XStep",value:E(t.xStep)}),i.push({key:"YStep",value:E(t.yStep)}),i.push({key:"Resources",value:r+" 0 R"}),t.matrix&&i.push({key:"Matrix",value:"["+t.matrix.toString()+"]"}),ie({data:t.stream,additionalKeyValues:i,objectId:t.objectNumber}),ht("endobj")},pe=function(t){var e;for(e in Ot)Ot.hasOwnProperty(e)&&(Ot[e]instanceof O?fe(Ot[e]):Ot[e]instanceof B&&de(Ot[e],t))},ge=function(t){for(var e in t.objectNumber=Xt(),ht("<<"),t)switch(e){case"opacity":ht("/ca "+R(t[e]));break;case"stroke-opacity":ht("/CA "+R(t[e]))}ht(">>"),ht("endobj")},me=function(){var t;for(t in Mt)Mt.hasOwnProperty(t)&&ge(Mt[t])},ve=function(){for(var t in ht("/XObject <<"),zt)zt.hasOwnProperty(t)&&zt[t].objectNumber>=0&&ht("/"+t+" "+zt[t].objectNumber+" 0 R");Tt.publish("putXobjectDict"),ht(">>")},be=function(){Ye.oid=Xt(),ht("<<"),ht("/Filter /Standard"),ht("/V "+Ye.v),ht("/R "+Ye.r),ht("/U <"+Ye.toHexString(Ye.U)+">"),ht("/O <"+Ye.toHexString(Ye.O)+">"),ht("/P "+Ye.P),ht(">>"),ht("endobj")},ye=function(){for(var t in ht("/Font <<"),It)It.hasOwnProperty(t)&&(!1===v||!0===v&&b.hasOwnProperty(t))&&ht("/"+t+" "+It[t].objectNumber+" 0 R");ht(">>")},we=function(){if(Object.keys(Ot).length>0){for(var t in ht("/Shading <<"),Ot)Ot.hasOwnProperty(t)&&Ot[t]instanceof O&&Ot[t].objectNumber>=0&&ht("/"+t+" "+Ot[t].objectNumber+" 0 R");Tt.publish("putShadingPatternDict"),ht(">>")}},Ne=function(t){if(Object.keys(Ot).length>0){for(var e in ht("/Pattern <<"),Ot)Ot.hasOwnProperty(e)&&Ot[e]instanceof y.TilingPattern&&Ot[e].objectNumber>=0&&Ot[e].objectNumber<t&&ht("/"+e+" "+Ot[e].objectNumber+" 0 R");Tt.publish("putTilingPatternDict"),ht(">>")}},Le=function(){if(Object.keys(Mt).length>0){var t;for(t in ht("/ExtGState <<"),Mt)Mt.hasOwnProperty(t)&&Mt[t].objectNumber>=0&&ht("/"+t+" "+Mt[t].objectNumber+" 0 R");Tt.publish("putGStateDict"),ht(">>")}},Ae=function(t){Zt(t.resourcesOid,!0),ht("<<"),ht("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),ye(),we(),Ne(t.objectOid),Le(),ve(),ht(">>"),ht("endobj")},xe=function(){var t=[];ce(),me(),le(),pe(t),Tt.publish("putResources"),t.forEach(Ae),Ae({resourcesOid:te,objectOid:Number.MAX_SAFE_INTEGER}),Tt.publish("postPutResources")},Se=function(){Tt.publish("putAdditionalObjects");for(var t=0;t<at.length;t++){var e=at[t];Zt(e.objId,!0),ht(e.content),ht("endobj")}Tt.publish("postPutAdditionalObjects")},_e=function(t){Ct[t.fontName]=Ct[t.fontName]||{},Ct[t.fontName][t.fontStyle]=t.id},Pe=function(t,e,r,n,i){var a={id:"F"+(Object.keys(It).length+1).toString(10),postScriptName:t,fontName:e,fontStyle:r,encoding:n,isStandardFont:i||!1,metadata:{}};return Tt.publish("addFont",{font:a,instance:this}),It[a.id]=a,_e(a),a.id},ke=function(t){for(var e=0,r=pt.length;e<r;e++){var n=Pe.call(this,t[e][0],t[e][1],t[e][2],pt[e][3],!0);!1===v&&(b[n]=!0);var i=t[e][0].split("-");_e({id:n,fontName:i[0],fontStyle:i[1]||""})}Tt.publish("addFonts",{fonts:It,dictionary:Ct})},Fe=function(t){return t.foo=function(){try{return t.apply(this,arguments)}catch(t){var e=t.stack||"";~e.indexOf(" at ")&&(e=e.split(" at ")[1]);var n="Error in function "+e.split("\n")[0].split("<")[0]+": "+t.message;if(!r.console)throw new Error(n);r.console.error(n,t),r.alert&&alert(n)}},t.foo.bar=t,t.foo},Ie=function(t,e){var r,n,i,a,o,s,c,u,l;if(i=(e=e||{}).sourceEncoding||"Unicode",o=e.outputEncoding,(e.autoencode||o)&&It[St].metadata&&It[St].metadata[i]&&It[St].metadata[i].encoding&&(a=It[St].metadata[i].encoding,!o&&It[St].encoding&&(o=It[St].encoding),!o&&a.codePages&&(o=a.codePages[0]),"string"==typeof o&&(o=a[o]),o)){for(c=!1,s=[],r=0,n=t.length;r<n;r++)(u=o[t.charCodeAt(r)])?s.push(String.fromCharCode(u)):s.push(t[r]),s[r].charCodeAt(0)>>8&&(c=!0);t=s.join("")}for(r=t.length;void 0===c&&0!==r;)t.charCodeAt(r-1)>>8&&(c=!0),r--;if(!c)return t;for(s=e.noBOM?[]:[254,255],r=0,n=t.length;r<n;r++){if((l=(u=t.charCodeAt(r))>>8)>>8)throw new Error("Character at position "+r+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(l),s.push(u-(l<<8))}return String.fromCharCode.apply(void 0,s)},Ce=y.__private__.pdfEscape=y.pdfEscape=function(t,e){return Ie(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},je=y.__private__.beginPage=function(t){ot[++Dt]=[],Rt[Dt]={objId:0,contentsObjId:0,userUnit:Number(d),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(t[0]),topRightY:Number(t[1])}},Me(Dt),lt(ot[$])},Oe=function(t,e){var r,n,o;switch(a=e||a,"string"==typeof t&&(r=A(t.toLowerCase()),Array.isArray(r)&&(n=r[0],o=r[1])),Array.isArray(t)&&(n=t[0]*_t,o=t[1]*_t),isNaN(n)&&(n=s[0],o=s[1]),(n>14400||o>14400)&&(i.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),n=Math.min(14400,n),o=Math.min(14400,o)),s=[n,o],a.substr(0,1)){case"l":o>n&&(s=[o,n]);break;case"p":n>o&&(s=[o,n])}je(s),pr(fr),ht(Lr),0!==kr&&ht(kr+" J"),0!==Fr&&ht(Fr+" j"),Tt.publish("addPage",{pageNumber:Dt})},Be=function(t){t>0&&t<=Dt&&(ot.splice(t,1),Rt.splice(t,1),Dt--,$>Dt&&($=Dt),this.setPage($))},Me=function(t){t>0&&t<=Dt&&($=t)},Ee=y.__private__.getNumberOfPages=y.getNumberOfPages=function(){return ot.length-1},qe=function(t,e,r){var n,a=void 0;return r=r||{},t=void 0!==t?t:It[St].fontName,e=void 0!==e?e:It[St].fontStyle,n=t.toLowerCase(),void 0!==Ct[n]&&void 0!==Ct[n][e]?a=Ct[n][e]:void 0!==Ct[t]&&void 0!==Ct[t][e]?a=Ct[t][e]:!1===r.disableWarning&&i.warn("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts."),a||r.noFallback||null==(a=Ct.times[e])&&(a=Ct.times.normal),a},De=y.__private__.putInfo=function(){var t=Xt(),e=function(t){return t};for(var r in null!==m&&(e=Ye.encryptor(t,0)),ht("<<"),ht("/Producer ("+Ce(e("jsPDF "+M.version))+")"),xt)xt.hasOwnProperty(r)&&xt[r]&&ht("/"+r.substr(0,1).toUpperCase()+r.substr(1)+" ("+Ce(e(xt[r]))+")");ht("/CreationDate ("+Ce(e(W))+")"),ht(">>"),ht("endobj")},Re=y.__private__.putCatalog=function(t){var e=(t=t||{}).rootDictionaryObjId||Qt;switch(Xt(),ht("<<"),ht("/Type /Catalog"),ht("/Pages "+e+" 0 R"),mt||(mt="fullwidth"),mt){case"fullwidth":ht("/OpenAction [3 0 R /FitH null]");break;case"fullheight":ht("/OpenAction [3 0 R /FitV null]");break;case"fullpage":ht("/OpenAction [3 0 R /Fit]");break;case"original":ht("/OpenAction [3 0 R /XYZ null null 1]");break;default:var r=""+mt;"%"===r.substr(r.length-1)&&(mt=parseInt(mt)/100),"number"==typeof mt&&ht("/OpenAction [3 0 R /XYZ null null "+R(mt)+"]")}switch(Nt||(Nt="continuous"),Nt){case"continuous":ht("/PageLayout /OneColumn");break;case"single":ht("/PageLayout /SinglePage");break;case"two":case"twoleft":ht("/PageLayout /TwoColumnLeft");break;case"tworight":ht("/PageLayout /TwoColumnRight")}yt&&ht("/PageMode /"+yt),Tt.publish("putCatalog"),ht(">>"),ht("endobj")},Te=y.__private__.putTrailer=function(){ht("trailer"),ht("<<"),ht("/Size "+(et+1)),ht("/Root "+et+" 0 R"),ht("/Info "+(et-1)+" 0 R"),null!==m&&ht("/Encrypt "+Ye.oid+" 0 R"),ht("/ID [ <"+V+"> <"+V+"> ]"),ht(">>")},Ue=y.__private__.putHeader=function(){ht("%PDF-"+w),ht("%ºß¬à")},ze=y.__private__.putXRef=function(){var t="0000000000";ht("xref"),ht("0 "+(et+1)),ht("0000000000 65535 f ");for(var e=1;e<=et;e++){"function"==typeof rt[e]?ht((t+rt[e]()).slice(-10)+" 00000 n "):void 0!==rt[e]?ht((t+rt[e]).slice(-10)+" 00000 n "):ht("0000000000 00000 n ")}},He=y.__private__.buildDocument=function(){ut(),lt(nt),Tt.publish("buildDocument"),Ue(),oe(),Se(),xe(),null!==m&&be(),De(),Re();var t=it;return ze(),Te(),ht("startxref"),ht(""+t),ht("%%EOF"),lt(ot[$]),nt.join("\n")},We=y.__private__.getBlob=function(t){return new Blob([dt(t)],{type:"application/pdf"})},Ve=y.output=y.__private__.output=Fe((function(t,e){switch("string"==typeof(e=e||{})?e={filename:e}:e.filename=e.filename||"generated.pdf",t){case void 0:return He();case"save":y.save(e.filename);break;case"arraybuffer":return dt(He());case"blob":return We(He());case"bloburi":case"bloburl":if(void 0!==r.URL&&"function"==typeof r.URL.createObjectURL)return r.URL&&r.URL.createObjectURL(We(He()))||void 0;i.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var n="",a=He();try{n=u(a)}catch(t){n=u(unescape(encodeURIComponent(a)))}return"data:application/pdf;filename="+e.filename+";base64,"+n;case"pdfobjectnewwindow":if("[object Window]"===Object.prototype.toString.call(r)){var o="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",s=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';e.pdfObjectUrl&&(o=e.pdfObjectUrl,s="");var c='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+o+'"'+s+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(e)+");<\/script></body></html>",l=r.open();return null!==l&&l.document.write(c),l}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if("[object Window]"===Object.prototype.toString.call(r)){var h='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(e.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+e.filename+'" width="500px" height="400px" /></body></html>',f=r.open();if(null!==f){f.document.write(h);var d=this;f.document.documentElement.querySelector("#pdfViewer").onload=function(){f.document.title=e.filename,f.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(d.output("bloburl"))}}return f}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if("[object Window]"!==Object.prototype.toString.call(r))throw new Error("The option dataurlnewwindow just works in a browser-environment.");var p='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",e)+'"></iframe></body></html>',g=r.open();if(null!==g&&(g.document.write(p),g.document.title=e.filename),g||"undefined"==typeof safari)return g;break;case"datauri":case"dataurl":return r.document.location.href=this.output("datauristring",e);default:return null}})),Ge=function(t){return!0===Array.isArray(Ut)&&Ut.indexOf(t)>-1};switch(o){case"pt":_t=1;break;case"mm":_t=72/25.4;break;case"cm":_t=72/2.54;break;case"in":_t=72;break;case"px":_t=1==Ge("px_scaling")?.75:96/72;break;case"pc":case"em":_t=12;break;case"ex":_t=6;break;default:if("number"!=typeof o)throw new Error("Invalid unit: "+o);_t=o}var Ye=null;K(),Y();var Je=function(t){return null!==m?Ye.encryptor(t,0):function(t){return t}},Xe=y.__private__.getPageInfo=y.getPageInfo=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:Rt[t].objId,pageNumber:t,pageContext:Rt[t]}},Ke=y.__private__.getPageInfoByObjId=function(t){if(isNaN(t)||t%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var e in Rt)if(Rt[e].objId===t)break;return Xe(e)},Ze=y.__private__.getCurrentPageInfo=y.getCurrentPageInfo=function(){return{objId:Rt[$].objId,pageNumber:$,pageContext:Rt[$]}};y.addPage=function(){return Oe.apply(this,arguments),this},y.setPage=function(){return Me.apply(this,arguments),lt.call(this,ot[$]),this},y.insertPage=function(t){return this.addPage(),this.movePage($,t),this},y.movePage=function(t,e){var r,n;if(t>e){r=ot[t],n=Rt[t];for(var i=t;i>e;i--)ot[i]=ot[i-1],Rt[i]=Rt[i-1];ot[e]=r,Rt[e]=n,this.setPage(e)}else if(t<e){r=ot[t],n=Rt[t];for(var a=t;a<e;a++)ot[a]=ot[a+1],Rt[a]=Rt[a+1];ot[e]=r,Rt[e]=n,this.setPage(e)}return this},y.deletePage=function(){return Be.apply(this,arguments),this},y.__private__.text=y.text=function(t,r,n,i,a){var o,s,c,u,l,h,f,d,p,g=(i=i||{}).scope||this;if("number"==typeof t&&"number"==typeof r&&("string"==typeof n||Array.isArray(n))){var m=n;n=r,r=t,t=m}if(arguments[3]instanceof Vt==!1?(c=arguments[4],u=arguments[5],"object"===e(f=arguments[3])&&null!==f||("string"==typeof c&&(u=c,c=null),"string"==typeof f&&(u=f,f=null),"number"==typeof f&&(c=f,f=null),i={flags:f,angle:c,align:u})):(q("The transform parameter of text() with a Matrix value"),p=a),isNaN(r)||isNaN(n)||null==t)throw new Error("Invalid arguments passed to jsPDF.text");if(0===t.length)return g;var v="",y=!1,w="number"==typeof i.lineHeightFactor?i.lineHeightFactor:hr,N=g.internal.scaleFactor;function L(t){return t=t.split("\t").join(Array(i.TabLen||9).join(" ")),Ce(t,f)}function A(t){for(var e,r=t.concat(),n=[],i=r.length;i--;)"string"==typeof(e=r.shift())?n.push(e):Array.isArray(t)&&(1===e.length||void 0===e[1]&&void 0===e[2])?n.push(e[0]):n.push([e[0],e[1],e[2]]);return n}function _(t,e){var r;if("string"==typeof t)r=e(t)[0];else if(Array.isArray(t)){for(var n,i,a=t.concat(),o=[],s=a.length;s--;)"string"==typeof(n=a.shift())?o.push(e(n)[0]):Array.isArray(n)&&"string"==typeof n[0]&&(i=e(n[0],n[1],n[2]),o.push([i[0],i[1],i[2]]));r=o}return r}var P=!1,k=!0;if("string"==typeof t)P=!0;else if(Array.isArray(t)){var F=t.concat();s=[];for(var I,C=F.length;C--;)("string"!=typeof(I=F.shift())||Array.isArray(I)&&"string"!=typeof I[0])&&(k=!1);P=k}if(!1===P)throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');"string"==typeof t&&(t=t.match(/[\r?\n]/)?t.split(/\r\n|\r|\n/g):[t]);var j=gt/g.internal.scaleFactor,O=j*(w-1);switch(i.baseline){case"bottom":n-=O;break;case"top":n+=j-O;break;case"hanging":n+=j-2*O;break;case"middle":n+=j/2-O}if((h=i.maxWidth||0)>0&&("string"==typeof t?t=g.splitTextToSize(t,h):"[object Array]"===Object.prototype.toString.call(t)&&(t=t.reduce((function(t,e){return t.concat(g.splitTextToSize(e,h))}),[]))),o={text:t,x:r,y:n,options:i,mutex:{pdfEscape:Ce,activeFontKey:St,fonts:It,activeFontSize:gt}},Tt.publish("preProcessText",o),t=o.text,c=(i=o.options).angle,p instanceof Vt==!1&&c&&"number"==typeof c){c*=Math.PI/180,0===i.rotationDirection&&(c=-c),S===x.ADVANCED&&(c=-c);var B=Math.cos(c),M=Math.sin(c);p=new Vt(B,M,-M,B,0,0)}else c&&c instanceof Vt&&(p=c);S!==x.ADVANCED||p||(p=Yt),void 0!==(l=i.charSpace||_r)&&(v+=E(U(l))+" Tc\n",this.setCharSpace(this.getCharSpace()||0)),void 0!==(d=i.horizontalScale)&&(v+=E(100*d)+" Tz\n");i.lang;var D=-1,R=void 0!==i.renderingMode?i.renderingMode:i.stroke,T=g.internal.getCurrentPageInfo().pageContext;switch(R){case 0:case!1:case"fill":D=0;break;case 1:case!0:case"stroke":D=1;break;case 2:case"fillThenStroke":D=2;break;case 3:case"invisible":D=3;break;case 4:case"fillAndAddForClipping":D=4;break;case 5:case"strokeAndAddPathForClipping":D=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":D=6;break;case 7:case"addToPathForClipping":D=7}var z=void 0!==T.usedRenderingMode?T.usedRenderingMode:-1;-1!==D?v+=D+" Tr\n":-1!==z&&(v+="0 Tr\n"),-1!==D&&(T.usedRenderingMode=D),u=i.align||"left";var H,W=gt*w,V=g.internal.pageSize.getWidth(),G=It[St];l=i.charSpace||_r,h=i.maxWidth||0,f=Object.assign({autoencode:!0,noBOM:!0},i.flags);var Y=[];if("[object Array]"===Object.prototype.toString.call(t)){var J;s=A(t),"left"!==u&&(H=s.map((function(t){return g.getStringUnitWidth(t,{font:G,charSpace:l,fontSize:gt,doKerning:!1})*gt/N})));var X,K=0;if("right"===u){r-=H[0],t=[],C=s.length;for(var Z=0;Z<C;Z++)0===Z?(X=br(r),J=yr(n)):(X=U(K-H[Z]),J=-W),t.push([s[Z],X,J]),K=H[Z]}else if("center"===u){r-=H[0]/2,t=[],C=s.length;for(var $=0;$<C;$++)0===$?(X=br(r),J=yr(n)):(X=U((K-H[$])/2),J=-W),t.push([s[$],X,J]),K=H[$]}else if("left"===u){t=[],C=s.length;for(var Q=0;Q<C;Q++)t.push(s[Q])}else{if("justify"!==u)throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');t=[],C=s.length,h=0!==h?h:V;for(var tt=0;tt<C;tt++)J=0===tt?yr(n):-W,X=0===tt?br(r):0,tt<C-1?Y.push(E(U((h-H[tt])/(s[tt].split(" ").length-1)))):Y.push(0),t.push([s[tt],X,J])}}var et="boolean"==typeof i.R2L?i.R2L:bt;!0===et&&(t=_(t,(function(t,e,r){return[t.split("").reverse().join(""),e,r]}))),o={text:t,x:r,y:n,options:i,mutex:{pdfEscape:Ce,activeFontKey:St,fonts:It,activeFontSize:gt}},Tt.publish("postProcessText",o),t=o.text,y=o.mutex.isHex||!1;var rt=It[St].encoding;"WinAnsiEncoding"!==rt&&"StandardEncoding"!==rt||(t=_(t,(function(t,e,r){return[L(t),e,r]}))),s=A(t),t=[];for(var nt,it,at,ot=0,st=1,ct=Array.isArray(s[0])?st:ot,ut="",lt=function(t,e,r){var n="";return r instanceof Vt?(r="number"==typeof i.angle?Gt(r,new Vt(1,0,0,1,t,e)):Gt(new Vt(1,0,0,1,t,e),r),S===x.ADVANCED&&(r=Gt(new Vt(1,0,0,-1,0,0),r)),n=r.join(" ")+" Tm\n"):n=E(t)+" "+E(e)+" Td\n",n},ft=0;ft<s.length;ft++){switch(ut="",ct){case st:at=(y?"<":"(")+s[ft][0]+(y?">":")"),nt=parseFloat(s[ft][1]),it=parseFloat(s[ft][2]);break;case ot:at=(y?"<":"(")+s[ft]+(y?">":")"),nt=br(r),it=yr(n)}void 0!==Y&&void 0!==Y[ft]&&(ut=Y[ft]+" Tw\n"),0===ft?t.push(ut+lt(nt,it,p)+at):ct===ot?t.push(ut+at):ct===st&&t.push(ut+lt(nt,it,p)+at)}t=ct===ot?t.join(" Tj\nT* "):t.join(" Tj\n"),t+=" Tj\n";var dt="BT\n/";return dt+=St+" "+gt+" Tf\n",dt+=E(gt*w)+" TL\n",dt+=xr+"\n",dt+=v,dt+=t,ht(dt+="ET"),b[St]=!0,g};var $e=y.__private__.clip=y.clip=function(t){return ht("evenodd"===t?"W*":"W"),this};y.clipEvenOdd=function(){return $e("evenodd")},y.__private__.discardPath=y.discardPath=function(){return ht("n"),this};var Qe=y.__private__.isValidStyle=function(t){var e=!1;return-1!==[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(t)&&(e=!0),e};y.__private__.setDefaultPathOperation=y.setDefaultPathOperation=function(t){return Qe(t)&&(g=t),this};var tr=y.__private__.getStyle=y.getStyle=function(t){var e=g;switch(t){case"D":case"S":e="S";break;case"F":e="f";break;case"FD":case"DF":e="B";break;case"f":case"f*":case"B":case"B*":e=t}return e},er=y.close=function(){return ht("h"),this};y.stroke=function(){return ht("S"),this},y.fill=function(t){return rr("f",t),this},y.fillEvenOdd=function(t){return rr("f*",t),this},y.fillStroke=function(t){return rr("B",t),this},y.fillStrokeEvenOdd=function(t){return rr("B*",t),this};var rr=function(t,r){"object"===e(r)?ar(r,t):ht(t)},nr=function(t){null===t||S===x.ADVANCED&&void 0===t||(t=tr(t),ht(t))};function ir(t,e,r,n,i){var a=new B(e||this.boundingBox,r||this.xStep,n||this.yStep,this.gState,i||this.matrix);a.stream=this.stream;var o=t+"$$"+this.cloneIndex+++"$$";return Jt(o,a),a}var ar=function(t,e){var r=Bt[t.key],n=Ot[r];if(n instanceof O)ht("q"),ht(or(e)),n.gState&&y.setGState(n.gState),ht(t.matrix.toString()+" cm"),ht("/"+r+" sh"),ht("Q");else if(n instanceof B){var i=new Vt(1,0,0,-1,0,Rr());t.matrix&&(i=i.multiply(t.matrix||Yt),r=ir.call(n,t.key,t.boundingBox,t.xStep,t.yStep,i).id),ht("q"),ht("/Pattern cs"),ht("/"+r+" scn"),n.gState&&y.setGState(n.gState),ht(e),ht("Q")}},or=function(t){switch(t){case"f":case"F":return"W n";case"f*":return"W* n";case"B":return"W S";case"B*":return"W* S";case"S":return"W S";case"n":return"W n"}},sr=y.moveTo=function(t,e){return ht(E(U(t))+" "+E(H(e))+" m"),this},cr=y.lineTo=function(t,e){return ht(E(U(t))+" "+E(H(e))+" l"),this},ur=y.curveTo=function(t,e,r,n,i,a){return ht([E(U(t)),E(H(e)),E(U(r)),E(H(n)),E(U(i)),E(H(a)),"c"].join(" ")),this};y.__private__.line=y.line=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Qe(i))throw new Error("Invalid arguments passed to jsPDF.line");return S===x.COMPAT?this.lines([[r-t,n-e]],t,e,[1,1],i||"S"):this.lines([[r-t,n-e]],t,e,[1,1]).stroke()},y.__private__.lines=y.lines=function(t,e,r,n,i,a){var o,s,c,u,l,h,f,d,p,g,m,v;if("number"==typeof t&&(v=r,r=e,e=t,t=v),n=n||[1,1],a=a||!1,isNaN(e)||isNaN(r)||!Array.isArray(t)||!Array.isArray(n)||!Qe(i)||"boolean"!=typeof a)throw new Error("Invalid arguments passed to jsPDF.lines");for(sr(e,r),o=n[0],s=n[1],u=t.length,g=e,m=r,c=0;c<u;c++)2===(l=t[c]).length?(g=l[0]*o+g,m=l[1]*s+m,cr(g,m)):(h=l[0]*o+g,f=l[1]*s+m,d=l[2]*o+g,p=l[3]*s+m,g=l[4]*o+g,m=l[5]*s+m,ur(h,f,d,p,g,m));return a&&er(),nr(i),this},y.path=function(t){for(var e=0;e<t.length;e++){var r=t[e],n=r.c;switch(r.op){case"m":sr(n[0],n[1]);break;case"l":cr(n[0],n[1]);break;case"c":ur.apply(this,n);break;case"h":er()}}return this},y.__private__.rect=y.rect=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Qe(i))throw new Error("Invalid arguments passed to jsPDF.rect");return S===x.COMPAT&&(n=-n),ht([E(U(t)),E(H(e)),E(U(r)),E(U(n)),"re"].join(" ")),nr(i),this},y.__private__.triangle=y.triangle=function(t,e,r,n,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)||!Qe(o))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[r-t,n-e],[i-r,a-n],[t-i,e-a]],t,e,[1,1],o,!0),this},y.__private__.roundedRect=y.roundedRect=function(t,e,r,n,i,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a)||!Qe(o))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var s=4/3*(Math.SQRT2-1);return i=Math.min(i,.5*r),a=Math.min(a,.5*n),this.lines([[r-2*i,0],[i*s,0,i,a-a*s,i,a],[0,n-2*a],[0,a*s,-i*s,a,-i,a],[2*i-r,0],[-i*s,0,-i,-a*s,-i,-a],[0,2*a-n],[0,-a*s,i*s,-a,i,-a]],t+i,e,[1,1],o,!0),this},y.__private__.ellipse=y.ellipse=function(t,e,r,n,i){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||!Qe(i))throw new Error("Invalid arguments passed to jsPDF.ellipse");var a=4/3*(Math.SQRT2-1)*r,o=4/3*(Math.SQRT2-1)*n;return sr(t+r,e),ur(t+r,e-o,t+a,e-n,t,e-n),ur(t-a,e-n,t-r,e-o,t-r,e),ur(t-r,e+o,t-a,e+n,t,e+n),ur(t+a,e+n,t+r,e+o,t+r,e),nr(i),this},y.__private__.circle=y.circle=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||!Qe(n))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(t,e,r,r,n)},y.setFont=function(t,e,r){return r&&(e=j(e,r)),St=qe(t,e,{disableWarning:!1}),this};var lr=y.__private__.getFont=y.getFont=function(){return It[qe.apply(y,arguments)]};y.__private__.getFontList=y.getFontList=function(){var t,e,r={};for(t in Ct)if(Ct.hasOwnProperty(t))for(e in r[t]=[],Ct[t])Ct[t].hasOwnProperty(e)&&r[t].push(e);return r},y.addFont=function(t,e,r,n,i){var a=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&-1!==a.indexOf(arguments[3])?i=arguments[3]:arguments[3]&&-1==a.indexOf(arguments[3])&&(r=j(r,n)),i=i||"Identity-H",Pe.call(this,t,e,r,i)};var hr,fr=t.lineWidth||.200025,dr=y.__private__.getLineWidth=y.getLineWidth=function(){return fr},pr=y.__private__.setLineWidth=y.setLineWidth=function(t){return fr=t,ht(E(U(t))+" w"),this};y.__private__.setLineDash=M.API.setLineDash=M.API.setLineDashPattern=function(t,e){if(t=t||[],e=e||0,isNaN(e)||!Array.isArray(t))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return t=t.map((function(t){return E(U(t))})).join(" "),e=E(U(e)),ht("["+t+"] "+e+" d"),this};var gr=y.__private__.getLineHeight=y.getLineHeight=function(){return gt*hr};y.__private__.getLineHeight=y.getLineHeight=function(){return gt*hr};var mr=y.__private__.setLineHeightFactor=y.setLineHeightFactor=function(t){return"number"==typeof(t=t||1.15)&&(hr=t),this},vr=y.__private__.getLineHeightFactor=y.getLineHeightFactor=function(){return hr};mr(t.lineHeight);var br=y.__private__.getHorizontalCoordinate=function(t){return U(t)},yr=y.__private__.getVerticalCoordinate=function(t){return S===x.ADVANCED?t:Rt[$].mediaBox.topRightY-Rt[$].mediaBox.bottomLeftY-U(t)},wr=y.__private__.getHorizontalCoordinateString=y.getHorizontalCoordinateString=function(t){return E(br(t))},Nr=y.__private__.getVerticalCoordinateString=y.getVerticalCoordinateString=function(t){return E(yr(t))},Lr=t.strokeColor||"0 G";y.__private__.getStrokeColor=y.getDrawColor=function(){return ee(Lr)},y.__private__.setStrokeColor=y.setDrawColor=function(t,e,r,n){return Lr=re({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"draw",precision:2}),ht(Lr),this};var Ar=t.fillColor||"0 g";y.__private__.getFillColor=y.getFillColor=function(){return ee(Ar)},y.__private__.setFillColor=y.setFillColor=function(t,e,r,n){return Ar=re({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"fill",precision:2}),ht(Ar),this};var xr=t.textColor||"0 g",Sr=y.__private__.getTextColor=y.getTextColor=function(){return ee(xr)};y.__private__.setTextColor=y.setTextColor=function(t,e,r,n){return xr=re({ch1:t,ch2:e,ch3:r,ch4:n,pdfColorType:"text",precision:3}),this};var _r=t.charSpace,Pr=y.__private__.getCharSpace=y.getCharSpace=function(){return parseFloat(_r||0)};y.__private__.setCharSpace=y.setCharSpace=function(t){if(isNaN(t))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return _r=t,this};var kr=0;y.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},y.__private__.setLineCap=y.setLineCap=function(t){var e=y.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return kr=e,ht(e+" J"),this};var Fr=0;y.__private__.setLineJoin=y.setLineJoin=function(t){var e=y.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Fr=e,ht(e+" j"),this},y.__private__.setLineMiterLimit=y.__private__.setMiterLimit=y.setLineMiterLimit=y.setMiterLimit=function(t){if(t=t||0,isNaN(t))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return ht(E(U(t))+" M"),this},y.GState=C,y.setGState=function(t){(t="string"==typeof t?Mt[Et[t]]:Ir(null,t)).equals(qt)||(ht("/"+t.id+" gs"),qt=t)};var Ir=function(t,e){if(!t||!Et[t]){var r=!1;for(var n in Mt)if(Mt.hasOwnProperty(n)&&Mt[n].equals(e)){r=!0;break}if(r)e=Mt[n];else{var i="GS"+(Object.keys(Mt).length+1).toString(10);Mt[i]=e,e.id=i}return t&&(Et[t]=e.id),Tt.publish("addGState",e),e}};y.addGState=function(t,e){return Ir(t,e),this},y.saveGraphicsState=function(){return ht("q"),jt.push({key:St,size:gt,color:xr}),this},y.restoreGraphicsState=function(){ht("Q");var t=jt.pop();return St=t.key,gt=t.size,xr=t.color,qt=null,this},y.setCurrentTransformationMatrix=function(t){return ht(t.toString()+" cm"),this},y.comment=function(t){return ht("#"+t),this};var Cr=function(t,e){var r=t||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return r},set:function(t){isNaN(t)||(r=parseFloat(t))}});var n=e||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return n},set:function(t){isNaN(t)||(n=parseFloat(t))}});var i="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return i},set:function(t){i=t.toString()}}),this},jr=function(t,e,r,n){Cr.call(this,t,e),this.type="rect";var i=r||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return i},set:function(t){isNaN(t)||(i=parseFloat(t))}});var a=n||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return a},set:function(t){isNaN(t)||(a=parseFloat(t))}}),this},Or=function(){this.page=Dt,this.currentPage=$,this.pages=ot.slice(0),this.pagesContext=Rt.slice(0),this.x=Pt,this.y=kt,this.matrix=Ft,this.width=qr($),this.height=Rr($),this.outputDestination=ct,this.id="",this.objectNumber=-1};Or.prototype.restore=function(){Dt=this.page,$=this.currentPage,Rt=this.pagesContext,ot=this.pages,Pt=this.x,kt=this.y,Ft=this.matrix,Dr($,this.width),Tr($,this.height),ct=this.outputDestination};var Br=function(t,e,r,n,i){Wt.push(new Or),Dt=$=0,ot=[],Pt=t,kt=e,Ft=i,je([r,n])},Mr=function(t){if(Ht[t])Wt.pop().restore();else{var e=new Or,r="Xo"+(Object.keys(zt).length+1).toString(10);e.id=r,Ht[t]=r,zt[r]=e,Tt.publish("addFormObject",e),Wt.pop().restore()}};for(var Er in y.beginFormObject=function(t,e,r,n,i){return Br(t,e,r,n,i),this},y.endFormObject=function(t){return Mr(t),this},y.doFormObject=function(t,e){var r=zt[Ht[t]];return ht("q"),ht(e.toString()+" cm"),ht("/"+r.id+" Do"),ht("Q"),this},y.getFormObject=function(t){var e=zt[Ht[t]];return{x:e.x,y:e.y,width:e.width,height:e.height,matrix:e.matrix}},y.save=function(t,e){return t=t||"generated.pdf",(e=e||{}).returnPromise=e.returnPromise||!1,!1===e.returnPromise?(l(We(He()),t),"function"==typeof l.unload&&r.setTimeout&&setTimeout(l.unload,911),this):new Promise((function(e,n){try{var i=l(We(He()),t);"function"==typeof l.unload&&r.setTimeout&&setTimeout(l.unload,911),e(i)}catch(t){n(t.message)}}))},M.API)M.API.hasOwnProperty(Er)&&("events"===Er&&M.API.events.length?function(t,e){var r,n,i;for(i=e.length-1;-1!==i;i--)r=e[i][0],n=e[i][1],t.subscribe.apply(t,[r].concat("function"==typeof n?[n]:n))}(Tt,M.API.events):y[Er]=M.API[Er]);var qr=y.getPageWidth=function(t){return(Rt[t=t||$].mediaBox.topRightX-Rt[t].mediaBox.bottomLeftX)/_t},Dr=y.setPageWidth=function(t,e){Rt[t].mediaBox.topRightX=e*_t+Rt[t].mediaBox.bottomLeftX},Rr=y.getPageHeight=function(t){return(Rt[t=t||$].mediaBox.topRightY-Rt[t].mediaBox.bottomLeftY)/_t},Tr=y.setPageHeight=function(t,e){Rt[t].mediaBox.topRightY=e*_t+Rt[t].mediaBox.bottomLeftY};return y.internal={pdfEscape:Ce,getStyle:tr,getFont:lr,getFontSize:vt,getCharSpace:Pr,getTextColor:Sr,getLineHeight:gr,getLineHeightFactor:vr,getLineWidth:dr,write:ft,getHorizontalCoordinate:br,getVerticalCoordinate:yr,getCoordinateString:wr,getVerticalCoordinateString:Nr,collections:{},newObject:Xt,newAdditionalObject:$t,newObjectDeferred:Kt,newObjectDeferredBegin:Zt,getFilters:ne,putStream:ie,events:Tt,scaleFactor:_t,pageSize:{getWidth:function(){return qr($)},setWidth:function(t){Dr($,t)},getHeight:function(){return Rr($)},setHeight:function(t){Tr($,t)}},encryptionOptions:m,encryption:Ye,getEncryptor:Je,output:Ve,getNumberOfPages:Ee,pages:ot,out:ht,f2:R,f3:T,getPageInfo:Xe,getPageInfoByObjId:Ke,getCurrentPageInfo:Ze,getPDFVersion:N,Point:Cr,Rectangle:jr,Matrix:Vt,hasHotfix:Ge},Object.defineProperty(y.internal.pageSize,"width",{get:function(){return qr($)},set:function(t){Dr($,t)},enumerable:!0,configurable:!0}),Object.defineProperty(y.internal.pageSize,"height",{get:function(){return Rr($)},set:function(t){Tr($,t)},enumerable:!0,configurable:!0}),ke.call(y,pt),St="F1",Oe(s,a),Tt.publish("initialized"),y}k.prototype.lsbFirstWord=function(t){return String.fromCharCode(t>>0&255,t>>8&255,t>>16&255,t>>24&255)},k.prototype.toHexString=function(t){return t.split("").map((function(t){return("0"+(255&t.charCodeAt(0)).toString(16)).slice(-2)})).join("")},k.prototype.hexToBytes=function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(String.fromCharCode(parseInt(t.substr(r,2),16)));return e.join("")},k.prototype.processOwnerPassword=function(t,e){return _(A(e).substr(0,5),t)},k.prototype.encryptor=function(t,e){var r=A(this.encryptionKey+String.fromCharCode(255&t,t>>8&255,t>>16&255,255&e,e>>8&255)).substr(0,10);return function(t){return _(r,t)}},C.prototype.equals=function(t){var r,n="id,objectNumber,equals";if(!t||e(t)!==e(this))return!1;var i=0;for(r in this)if(!(n.indexOf(r)>=0)){if(this.hasOwnProperty(r)&&!t.hasOwnProperty(r))return!1;if(this[r]!==t[r])return!1;i++}for(r in t)t.hasOwnProperty(r)&&n.indexOf(r)<0&&i--;return 0===i},M.API={events:[]},M.version="2.5.1";var E=M.API,q=1,D=function(t){return t.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},R=function(t){return t.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},T=function(t){return t.toFixed(2)},U=function(t){return t.toFixed(5)};E.__acroform__={};var z=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},H=function(t){return t*q},W=function(t){var e=new ct,r=Lt.internal.getHeight(t)||0,n=Lt.internal.getWidth(t)||0;return e.BBox=[0,0,Number(T(n)),Number(T(r))],e},V=E.__acroform__.setBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return t|=1<<e},G=E.__acroform__.clearBit=function(t,e){if(t=t||0,e=e||0,isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return t&=~(1<<e)},Y=E.__acroform__.getBit=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return 0==(t&1<<e)?0:1},J=E.__acroform__.getBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return Y(t,e-1)},X=E.__acroform__.setBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return V(t,e-1)},K=E.__acroform__.clearBitForPdf=function(t,e){if(isNaN(t)||isNaN(e))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return G(t,e-1)},Z=E.__acroform__.calculateCoordinates=function(t,e){var r=e.internal.getHorizontalCoordinate,n=e.internal.getVerticalCoordinate,i=t[0],a=t[1],o=t[2],s=t[3],c={};return c.lowerLeft_X=r(i)||0,c.lowerLeft_Y=n(a+s)||0,c.upperRight_X=r(i+o)||0,c.upperRight_Y=n(a)||0,[Number(T(c.lowerLeft_X)),Number(T(c.lowerLeft_Y)),Number(T(c.upperRight_X)),Number(T(c.upperRight_Y))]},$=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],r=t._V||t.DV,n=Q(t,r),i=t.scope.internal.getFont(t.fontName,t.fontStyle).id;e.push("/Tx BMC"),e.push("q"),e.push("BT"),e.push(t.scope.__private__.encodeColorString(t.color)),e.push("/"+i+" "+T(n.fontSize)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push(n.text),e.push("ET"),e.push("Q"),e.push("EMC");var a=W(t);return a.scope=t.scope,a.stream=e.join("\n"),a}},Q=function(t,e){var r=0===t.fontSize?t.maxFontSize:t.fontSize,n={text:"",fontSize:""},i=(e=")"==(e="("==e.substr(0,1)?e.substr(1):e).substr(e.length-1)?e.substr(0,e.length-1):e).split(" ");i=t.multiline?i.map((function(t){return t.split("\n")})):i.map((function(t){return[t]}));var a=r,o=Lt.internal.getHeight(t)||0;o=o<0?-o:o;var s=Lt.internal.getWidth(t)||0;s=s<0?-s:s;var c=function(e,r,n){if(e+1<i.length){var a=r+" "+i[e+1][0];return tt(a,t,n).width<=s-4}return!1};a++;t:for(;a>0;){e="",a--;var u,l,h=tt("3",t,a).height,f=t.multiline?o-a:(o-h)/2,d=f+=2,p=0,g=0,m=0;if(a<=0){e="(...) Tj\n",e+="% Width of Text: "+tt(e,t,a=12).width+", FieldWidth:"+s+"\n";break}for(var v="",b=0,y=0;y<i.length;y++)if(i.hasOwnProperty(y)){var w=!1;if(1!==i[y].length&&m!==i[y].length-1){if((h+2)*(b+2)+2>o)continue t;v+=i[y][m],w=!0,g=y,y--}else{v=" "==(v+=i[y][m]+" ").substr(v.length-1)?v.substr(0,v.length-1):v;var N=parseInt(y),L=c(N,v,a),A=y>=i.length-1;if(L&&!A){v+=" ",m=0;continue}if(L||A){if(A)g=N;else if(t.multiline&&(h+2)*(b+2)+2>o)continue t}else{if(!t.multiline)continue t;if((h+2)*(b+2)+2>o)continue t;g=N}}for(var x="",S=p;S<=g;S++){var _=i[S];if(t.multiline){if(S===g){x+=_[m]+" ",m=(m+1)%_.length;continue}if(S===p){x+=_[_.length-1]+" ";continue}}x+=_[0]+" "}switch(x=" "==x.substr(x.length-1)?x.substr(0,x.length-1):x,l=tt(x,t,a).width,t.textAlign){case"right":u=s-l-2;break;case"center":u=(s-l)/2;break;case"left":default:u=2}e+=T(u)+" "+T(d)+" Td\n",e+="("+D(x)+") Tj\n",e+=-T(u)+" 0 Td\n",d=-(a+2),l=0,p=w?g:g+1,b++,v=""}else;break}return n.text=e,n.fontSize=a,n},tt=function(t,e,r){var n=e.scope.internal.getFont(e.fontName,e.fontStyle),i=e.scope.getStringUnitWidth(t,{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:e.scope.getStringUnitWidth("3",{font:n,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:i}},et={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},rt=function(t,e){var r={type:"reference",object:t};void 0===e.internal.getPageInfo(t.page).pageContext.annotations.find((function(t){return t.type===r.type&&t.object===r.object}))&&e.internal.getPageInfo(t.page).pageContext.annotations.push(r)},nt=function(t,r){for(var n in t)if(t.hasOwnProperty(n)){var i=n,a=t[n];r.internal.newObjectDeferredBegin(a.objId,!0),"object"===e(a)&&"function"==typeof a.putStream&&a.putStream(),delete t[i]}},it=function(t,r){if(r.scope=t,void 0!==t.internal&&(void 0===t.internal.acroformPlugin||!1===t.internal.acroformPlugin.isInitialized)){if(lt.FieldNum=0,t.internal.acroformPlugin=JSON.parse(JSON.stringify(et)),t.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");q=t.internal.scaleFactor,t.internal.acroformPlugin.acroFormDictionaryRoot=new ut,t.internal.acroformPlugin.acroFormDictionaryRoot.scope=t,t.internal.acroformPlugin.acroFormDictionaryRoot._eventID=t.internal.events.subscribe("postPutResources",(function(){!function(t){t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID,t.internal.acroformPlugin.printedOut=!0}(t)})),t.internal.events.subscribe("buildDocument",(function(){!function(t){t.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var e=t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];n.objId=void 0,n.hasAnnotation&&rt(n,t)}}(t)})),t.internal.events.subscribe("putCatalog",(function(){!function(t){if(void 0===t.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("putCatalogCallback: Root missing.");t.internal.write("/AcroForm "+t.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")}(t)})),t.internal.events.subscribe("postPutPages",(function(r){!function(t,r){var n=!t;for(var i in t||(r.internal.newObjectDeferredBegin(r.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),r.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),t=t||r.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(t.hasOwnProperty(i)){var a=t[i],o=[],s=a.Rect;if(a.Rect&&(a.Rect=Z(a.Rect,r)),r.internal.newObjectDeferredBegin(a.objId,!0),a.DA=Lt.createDefaultAppearanceStream(a),"object"===e(a)&&"function"==typeof a.getKeyValueListForStream&&(o=a.getKeyValueListForStream()),a.Rect=s,a.hasAppearanceStream&&!a.appearanceStreamContent){var c=$(a);o.push({key:"AP",value:"<</N "+c+">>"}),r.internal.acroformPlugin.xForms.push(c)}if(a.appearanceStreamContent){var u="";for(var l in a.appearanceStreamContent)if(a.appearanceStreamContent.hasOwnProperty(l)){var h=a.appearanceStreamContent[l];if(u+="/"+l+" ",u+="<<",Object.keys(h).length>=1||Array.isArray(h)){for(var i in h)if(h.hasOwnProperty(i)){var f=h[i];"function"==typeof f&&(f=f.call(r,a)),u+="/"+i+" "+f+" ",r.internal.acroformPlugin.xForms.indexOf(f)>=0||r.internal.acroformPlugin.xForms.push(f)}}else"function"==typeof(f=h)&&(f=f.call(r,a)),u+="/"+i+" "+f,r.internal.acroformPlugin.xForms.indexOf(f)>=0||r.internal.acroformPlugin.xForms.push(f);u+=">>"}o.push({key:"AP",value:"<<\n"+u+">>"})}r.internal.putStream({additionalKeyValues:o,objectId:a.objId}),r.internal.out("endobj")}n&&nt(r.internal.acroformPlugin.xForms,r)}(r,t)})),t.internal.acroformPlugin.isInitialized=!0}},at=E.__acroform__.arrayToPdfArray=function(t,r,n){var i=function(t){return t};if(Array.isArray(t)){for(var a="[",o=0;o<t.length;o++)switch(0!==o&&(a+=" "),e(t[o])){case"boolean":case"number":case"object":a+=t[o].toString();break;case"string":"/"!==t[o].substr(0,1)?(void 0!==r&&n&&(i=n.internal.getEncryptor(r)),a+="("+D(i(t[o].toString()))+")"):a+=t[o].toString()}return a+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")};var ot=function(t,e,r){var n=function(t){return t};return void 0!==e&&r&&(n=r.internal.getEncryptor(e)),(t=t||"").toString(),t="("+D(n(t))+")"},st=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(void 0===this._objId){if(void 0===this.scope)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(t){this._objId=t}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};st.prototype.toString=function(){return this.objId+" 0 R"},st.prototype.putStream=function(){var t=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:t,objectId:this.objId}),this.scope.internal.out("endobj")},st.prototype.getKeyValueListForStream=function(){var t=[],e=Object.getOwnPropertyNames(this).filter((function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"scope"!=t&&"objId"!=t&&"_"!=t.substring(0,1)}));for(var r in e)if(!1===Object.getOwnPropertyDescriptor(this,e[r]).configurable){var n=e[r],i=this[n];i&&(Array.isArray(i)?t.push({key:n,value:at(i,this.objId,this.scope)}):i instanceof st?(i.scope=this.scope,t.push({key:n,value:i.objId+" 0 R"})):"function"!=typeof i&&t.push({key:n,value:i}))}return t};var ct=function(){st.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var t,e=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(e){t=e.trim()},get:function(){return t||null}})};z(ct,st);var ut=function(){st.call(this);var t,e=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return e.length>0?e:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return e}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(t){var e=function(t){return t};return this.scope&&(e=this.scope.internal.getEncryptor(this.objId)),"("+D(e(t))+")"}},set:function(e){t=e}})};z(ut,st);var lt=function t(){st.call(this);var e=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return e},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute F supplied.');e=t}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(e,3))},set:function(t){!0===Boolean(t)?this.F=X(e,3):this.F=K(e,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(t){if(isNaN(t))throw new Error('Invalid value "'+t+'" for attribute Ff supplied.');r=t}});var n=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(0!==n.length)return n},set:function(t){n=void 0!==t?t:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[0])?0:n[0]},set:function(t){n[0]=t}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[1])?0:n[1]},set:function(t){n[1]=t}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[2])?0:n[2]},set:function(t){n[2]=t}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!n||isNaN(n[3])?0:n[3]},set:function(t){n[3]=t}});var i="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return i},set:function(t){switch(t){case"/Btn":case"/Tx":case"/Ch":case"/Sig":i=t;break;default:throw new Error('Invalid value "'+t+'" for attribute FT supplied.')}}});var a=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!a||a.length<1){if(this instanceof bt)return;a="FieldObject"+t.FieldNum++}var e=function(t){return t};return this.scope&&(e=this.scope.internal.getEncryptor(this.objId)),"("+D(e(a))+")"},set:function(t){a=t.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return a},set:function(t){a=t}});var o="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return o},set:function(t){o=t}});var s="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return s},set:function(t){s=t}});var c=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return c},set:function(t){c=t}});var u=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return void 0===u?50/q:u},set:function(t){u=t}});var l="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return l},set:function(t){l=t}});var h="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!h||this instanceof bt||this instanceof wt))return ot(h,this.objId,this.scope)},set:function(t){t=t.toString(),h=t}});var f=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(f)return this instanceof gt==!1?ot(f,this.objId,this.scope):f},set:function(t){t=t.toString(),f=this instanceof gt==!1?"("===t.substr(0,1)?R(t.substr(1,t.length-2)):R(t):t}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof gt==!0?R(f.substr(1,f.length-1)):f},set:function(t){t=t.toString(),f=this instanceof gt==!0?"/"+t:t}});var d=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(d)return d},set:function(t){this.V=t}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(d)return this instanceof gt==!1?ot(d,this.objId,this.scope):d},set:function(t){t=t.toString(),d=this instanceof gt==!1?"("===t.substr(0,1)?R(t.substr(1,t.length-2)):R(t):t}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof gt==!0?R(d.substr(1,d.length-1)):d},set:function(t){t=t.toString(),d=this instanceof gt==!0?"/"+t:t}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var p,g=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return g},set:function(t){t=Boolean(t),g=t}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(p)return p},set:function(t){p=t}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,1))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,1):this.Ff=K(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,2))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,2):this.Ff=K(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,3))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,3):this.Ff=K(this.Ff,3)}});var m=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(null!==m)return m},set:function(t){if(-1===[0,1,2].indexOf(t))throw new Error('Invalid value "'+t+'" for attribute Q supplied.');m=t}}),Object.defineProperty(this,"textAlign",{get:function(){var t;switch(m){case 0:default:t="left";break;case 1:t="center";break;case 2:t="right"}return t},configurable:!0,enumerable:!0,set:function(t){switch(t){case"right":case 2:m=2;break;case"center":case 1:m=1;break;case"left":case 0:default:m=0}}})};z(lt,st);var ht=function(){lt.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var t=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){t=e}});var e=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return at(e,this.objId,this.scope)},set:function(t){var r,n;n=[],"string"==typeof(r=t)&&(n=function(t,e,r){r||(r=1);for(var n,i=[];n=e.exec(t);)i.push(n[r]);return i}(r,/\((.*?)\)/g)),e=n}}),this.getOptions=function(){return e},this.setOptions=function(t){e=t,this.sort&&e.sort()},this.addOption=function(t){t=(t=t||"").toString(),e.push(t),this.sort&&e.sort()},this.removeOption=function(t,r){for(r=r||!1,t=(t=t||"").toString();-1!==e.indexOf(t)&&(e.splice(e.indexOf(t),1),!1!==r););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,18))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,18):this.Ff=K(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,19))},set:function(t){!0===this.combo&&(!0===Boolean(t)?this.Ff=X(this.Ff,19):this.Ff=K(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,20))},set:function(t){!0===Boolean(t)?(this.Ff=X(this.Ff,20),e.sort()):this.Ff=K(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,22))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,22):this.Ff=K(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,23):this.Ff=K(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,27))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,27):this.Ff=K(this.Ff,27)}}),this.hasAppearanceStream=!1};z(ht,lt);var ft=function(){ht.call(this),this.fontName="helvetica",this.combo=!1};z(ft,ht);var dt=function(){ft.call(this),this.combo=!0};z(dt,ft);var pt=function(){dt.call(this),this.edit=!0};z(pt,dt);var gt=function(){lt.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,15))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,15):this.Ff=K(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,16))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,16):this.Ff=K(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,17))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,17):this.Ff=K(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,26):this.Ff=K(this.Ff,26)}});var t,r={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t=function(t){return t};if(this.scope&&(t=this.scope.internal.getEncryptor(this.objId)),0!==Object.keys(r).length){var e,n=[];for(e in n.push("<<"),r)n.push("/"+e+" ("+D(t(r[e]))+")");return n.push(">>"),n.join("\n")}},set:function(t){"object"===e(t)&&(r=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return r.CA||""},set:function(t){"string"==typeof t&&(r.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return t.substr(1,t.length-1)},set:function(e){t="/"+e}})};z(gt,lt);var mt=function(){gt.call(this),this.pushButton=!0};z(mt,gt);var vt=function(){gt.call(this),this.radio=!0,this.pushButton=!1;var t=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=void 0!==e?e:[]}})};z(vt,gt);var bt=function(){var t,r;lt.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t}});var n,i={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var t=function(t){return t};this.scope&&(t=this.scope.internal.getEncryptor(this.objId));var e,r=[];for(e in r.push("<<"),i)r.push("/"+e+" ("+D(t(i[e]))+")");return r.push(">>"),r.join("\n")},set:function(t){"object"===e(t)&&(i=t)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return i.CA||""},set:function(t){"string"==typeof t&&(i.CA=t)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return n},set:function(t){n=t}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return n.substr(1,n.length-1)},set:function(t){n="/"+t}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=Lt.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};z(bt,lt),vt.prototype.setAppearance=function(t){if(!("createAppearanceStream"in t)||!("getCA"in t))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var e in this.Kids)if(this.Kids.hasOwnProperty(e)){var r=this.Kids[e];r.appearanceStreamContent=t.createAppearanceStream(r.optionName),r.caption=t.getCA()}},vt.prototype.createOption=function(t){var e=new bt;return e.Parent=this,e.optionName=t,this.Kids.push(e),At.call(this.scope,e),e};var yt=function(){gt.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=Lt.CheckBox.createAppearanceStream()};z(yt,gt);var wt=function(){lt.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,13))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,13):this.Ff=K(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,21))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,21):this.Ff=K(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,23))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,23):this.Ff=K(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,24))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,24):this.Ff=K(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,25))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,25):this.Ff=K(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,26))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,26):this.Ff=K(this.Ff,26)}});var t=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return t},set:function(e){t=e}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return t},set:function(e){Number.isInteger(e)&&(t=e)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};z(wt,lt);var Nt=function(){wt.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return Boolean(J(this.Ff,14))},set:function(t){!0===Boolean(t)?this.Ff=X(this.Ff,14):this.Ff=K(this.Ff,14)}}),this.password=!0};z(Nt,wt);var Lt={CheckBox:{createAppearanceStream:function(){return{N:{On:Lt.CheckBox.YesNormal},D:{On:Lt.CheckBox.YesPushDown,Off:Lt.CheckBox.OffPushDown}}},YesPushDown:function(t){var e=W(t);e.scope=t.scope;var r=[],n=t.scope.internal.getFont(t.fontName,t.fontStyle).id,i=t.scope.__private__.encodeColorString(t.color),a=Q(t,t.caption);return r.push("0.749023 g"),r.push("0 0 "+T(Lt.internal.getWidth(t))+" "+T(Lt.internal.getHeight(t))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+n+" "+T(a.fontSize)+" Tf "+i),r.push("BT"),r.push(a.text),r.push("ET"),r.push("Q"),r.push("EMC"),e.stream=r.join("\n"),e},YesNormal:function(t){var e=W(t);e.scope=t.scope;var r=t.scope.internal.getFont(t.fontName,t.fontStyle).id,n=t.scope.__private__.encodeColorString(t.color),i=[],a=Lt.internal.getHeight(t),o=Lt.internal.getWidth(t),s=Q(t,t.caption);return i.push("1 g"),i.push("0 0 "+T(o)+" "+T(a)+" re"),i.push("f"),i.push("q"),i.push("0 0 1 rg"),i.push("0 0 "+T(o-1)+" "+T(a-1)+" re"),i.push("W"),i.push("n"),i.push("0 g"),i.push("BT"),i.push("/"+r+" "+T(s.fontSize)+" Tf "+n),i.push(s.text),i.push("ET"),i.push("Q"),e.stream=i.join("\n"),e},OffPushDown:function(t){var e=W(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+T(Lt.internal.getWidth(t))+" "+T(Lt.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join("\n"),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:Lt.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=Lt.RadioButton.Circle.YesNormal,e.D[t]=Lt.RadioButton.Circle.YesPushDown,e},getCA:function(){return"l"},YesNormal:function(t){var e=W(t);e.scope=t.scope;var r=[],n=Lt.internal.getWidth(t)<=Lt.internal.getHeight(t)?Lt.internal.getWidth(t)/4:Lt.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=Lt.internal.Bezier_C,a=Number((n*i).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+U(Lt.internal.getWidth(t)/2)+" "+U(Lt.internal.getHeight(t)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+a+" "+a+" "+n+" 0 "+n+" c"),r.push("-"+a+" "+n+" -"+n+" "+a+" -"+n+" 0 c"),r.push("-"+n+" -"+a+" -"+a+" -"+n+" 0 -"+n+" c"),r.push(a+" -"+n+" "+n+" -"+a+" "+n+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e},YesPushDown:function(t){var e=W(t);e.scope=t.scope;var r=[],n=Lt.internal.getWidth(t)<=Lt.internal.getHeight(t)?Lt.internal.getWidth(t)/4:Lt.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=Number((2*n).toFixed(5)),a=Number((i*Lt.internal.Bezier_C).toFixed(5)),o=Number((n*Lt.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+U(Lt.internal.getWidth(t)/2)+" "+U(Lt.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),r.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),r.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),r.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+U(Lt.internal.getWidth(t)/2)+" "+U(Lt.internal.getHeight(t)/2)+" cm"),r.push(n+" 0 m"),r.push(n+" "+o+" "+o+" "+n+" 0 "+n+" c"),r.push("-"+o+" "+n+" -"+n+" "+o+" -"+n+" 0 c"),r.push("-"+n+" -"+o+" -"+o+" -"+n+" 0 -"+n+" c"),r.push(o+" -"+n+" "+n+" -"+o+" "+n+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=W(t);e.scope=t.scope;var r=[],n=Lt.internal.getWidth(t)<=Lt.internal.getHeight(t)?Lt.internal.getWidth(t)/4:Lt.internal.getHeight(t)/4;n=Number((.9*n).toFixed(5));var i=Number((2*n).toFixed(5)),a=Number((i*Lt.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+U(Lt.internal.getWidth(t)/2)+" "+U(Lt.internal.getHeight(t)/2)+" cm"),r.push(i+" 0 m"),r.push(i+" "+a+" "+a+" "+i+" 0 "+i+" c"),r.push("-"+a+" "+i+" -"+i+" "+a+" -"+i+" 0 c"),r.push("-"+i+" -"+a+" -"+a+" -"+i+" 0 -"+i+" c"),r.push(a+" -"+i+" "+i+" -"+a+" "+i+" 0 c"),r.push("f"),r.push("Q"),e.stream=r.join("\n"),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:Lt.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=Lt.RadioButton.Cross.YesNormal,e.D[t]=Lt.RadioButton.Cross.YesPushDown,e},getCA:function(){return"8"},YesNormal:function(t){var e=W(t);e.scope=t.scope;var r=[],n=Lt.internal.calculateCross(t);return r.push("q"),r.push("1 1 "+T(Lt.internal.getWidth(t)-2)+" "+T(Lt.internal.getHeight(t)-2)+" re"),r.push("W"),r.push("n"),r.push(T(n.x1.x)+" "+T(n.x1.y)+" m"),r.push(T(n.x2.x)+" "+T(n.x2.y)+" l"),r.push(T(n.x4.x)+" "+T(n.x4.y)+" m"),r.push(T(n.x3.x)+" "+T(n.x3.y)+" l"),r.push("s"),r.push("Q"),e.stream=r.join("\n"),e},YesPushDown:function(t){var e=W(t);e.scope=t.scope;var r=Lt.internal.calculateCross(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+T(Lt.internal.getWidth(t))+" "+T(Lt.internal.getHeight(t))+" re"),n.push("f"),n.push("q"),n.push("1 1 "+T(Lt.internal.getWidth(t)-2)+" "+T(Lt.internal.getHeight(t)-2)+" re"),n.push("W"),n.push("n"),n.push(T(r.x1.x)+" "+T(r.x1.y)+" m"),n.push(T(r.x2.x)+" "+T(r.x2.y)+" l"),n.push(T(r.x4.x)+" "+T(r.x4.y)+" m"),n.push(T(r.x3.x)+" "+T(r.x3.y)+" l"),n.push("s"),n.push("Q"),e.stream=n.join("\n"),e},OffPushDown:function(t){var e=W(t);e.scope=t.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+T(Lt.internal.getWidth(t))+" "+T(Lt.internal.getHeight(t))+" re"),r.push("f"),e.stream=r.join("\n"),e}}},createDefaultAppearanceStream:function(t){var e=t.scope.internal.getFont(t.fontName,t.fontStyle).id,r=t.scope.__private__.encodeColorString(t.color);return"/"+e+" "+t.fontSize+" Tf "+r}};Lt.internal={Bezier_C:.551915024494,calculateCross:function(t){var e=Lt.internal.getWidth(t),r=Lt.internal.getHeight(t),n=Math.min(e,r);return{x1:{x:(e-n)/2,y:(r-n)/2+n},x2:{x:(e-n)/2+n,y:(r-n)/2},x3:{x:(e-n)/2,y:(r-n)/2},x4:{x:(e-n)/2+n,y:(r-n)/2+n}}}},Lt.internal.getWidth=function(t){var r=0;return"object"===e(t)&&(r=H(t.Rect[2])),r},Lt.internal.getHeight=function(t){var r=0;return"object"===e(t)&&(r=H(t.Rect[3])),r};var At=E.addField=function(t){if(it(this,t),!(t instanceof lt))throw new Error("Invalid argument passed to jsPDF.addField.");var e;return(e=t).scope.internal.acroformPlugin.printedOut&&(e.scope.internal.acroformPlugin.printedOut=!1,e.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),t.page=t.scope.internal.getCurrentPageInfo().pageNumber,this};E.AcroFormChoiceField=ht,E.AcroFormListBox=ft,E.AcroFormComboBox=dt,E.AcroFormEditBox=pt,E.AcroFormButton=gt,E.AcroFormPushButton=mt,E.AcroFormRadioButton=vt,E.AcroFormCheckBox=yt,E.AcroFormTextField=wt,E.AcroFormPasswordField=Nt,E.AcroFormAppearance=Lt,E.AcroForm={ChoiceField:ht,ListBox:ft,ComboBox:dt,EditBox:pt,Button:gt,PushButton:mt,RadioButton:vt,CheckBox:yt,TextField:wt,PasswordField:Nt,Appearance:Lt},M.AcroForm={ChoiceField:ht,ListBox:ft,ComboBox:dt,EditBox:pt,Button:gt,PushButton:mt,RadioButton:vt,CheckBox:yt,TextField:wt,PasswordField:Nt,Appearance:Lt};var xt=M.AcroForm;function St(t){return t.reduce((function(t,e,r){return t[e]=r,t}),{})}!function(t){t.__addimage__={};var r="UNKNOWN",n={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},i=t.__addimage__.getImageFileTypeByImageData=function(t,e){var i,a,o,s,c,u=r;if("RGBA"===(e=e||r)||void 0!==t.data&&t.data instanceof Uint8ClampedArray&&"height"in t&&"width"in t)return"RGBA";if(x(t))for(c in n)for(o=n[c],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t[a]){s=!1;break}if(!0===s){u=c;break}}else for(c in n)for(o=n[c],i=0;i<o.length;i+=1){for(s=!0,a=0;a<o[i].length;a+=1)if(void 0!==o[i][a]&&o[i][a]!==t.charCodeAt(a)){s=!1;break}if(!0===s){u=c;break}}return u===r&&e!==r&&(u=e),u},a=function t(e){for(var r=this.internal.write,n=this.internal.putStream,i=(0,this.internal.getFilters)();-1!==i.indexOf("FlateEncode");)i.splice(i.indexOf("FlateEncode"),1);e.objectId=this.internal.newObject();var a=[];if(a.push({key:"Type",value:"/XObject"}),a.push({key:"Subtype",value:"/Image"}),a.push({key:"Width",value:e.width}),a.push({key:"Height",value:e.height}),e.colorSpace===b.INDEXED?a.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(e.palette.length/3-1)+" "+("sMask"in e&&void 0!==e.sMask?e.objectId+2:e.objectId+1)+" 0 R]"}):(a.push({key:"ColorSpace",value:"/"+e.colorSpace}),e.colorSpace===b.DEVICE_CMYK&&a.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),a.push({key:"BitsPerComponent",value:e.bitsPerComponent}),"decodeParameters"in e&&void 0!==e.decodeParameters&&a.push({key:"DecodeParms",value:"<<"+e.decodeParameters+">>"}),"transparency"in e&&Array.isArray(e.transparency)){for(var o="",s=0,c=e.transparency.length;s<c;s++)o+=e.transparency[s]+" "+e.transparency[s]+" ";a.push({key:"Mask",value:"["+o+"]"})}void 0!==e.sMask&&a.push({key:"SMask",value:e.objectId+1+" 0 R"});var u=void 0!==e.filter?["/"+e.filter]:void 0;if(n({data:e.data,additionalKeyValues:a,alreadyAppliedFilters:u,objectId:e.objectId}),r("endobj"),"sMask"in e&&void 0!==e.sMask){var l="/Predictor "+e.predictor+" /Colors 1 /BitsPerComponent "+e.bitsPerComponent+" /Columns "+e.width,h={width:e.width,height:e.height,colorSpace:"DeviceGray",bitsPerComponent:e.bitsPerComponent,decodeParameters:l,data:e.sMask};"filter"in e&&(h.filter=e.filter),t.call(this,h)}if(e.colorSpace===b.INDEXED){var f=this.internal.newObject();n({data:_(new Uint8Array(e.palette)),objectId:f}),r("endobj")}},o=function(){var t=this.internal.collections.addImage_images;for(var e in t)a.call(this,t[e])},s=function(){var t,e=this.internal.collections.addImage_images,r=this.internal.write;for(var n in e)r("/I"+(t=e[n]).index,t.objectId,"0","R")},u=function(){this.internal.collections.addImage_images||(this.internal.collections.addImage_images={},this.internal.events.subscribe("putResources",o),this.internal.events.subscribe("putXobjectDict",s))},l=function(){var t=this.internal.collections.addImage_images;return u.call(this),t},h=function(){return Object.keys(this.internal.collections.addImage_images).length},f=function(e){return"function"==typeof t["process"+e.toUpperCase()]},d=function(t){return"object"===e(t)&&1===t.nodeType},p=function(e,r){if("IMG"===e.nodeName&&e.hasAttribute("src")){var n=""+e.getAttribute("src");if(0===n.indexOf("data:image/"))return c(unescape(n).split("base64,").pop());var i=t.loadFile(n,!0);if(void 0!==i)return i}if("CANVAS"===e.nodeName){if(0===e.width||0===e.height)throw new Error("Given canvas must have data. Canvas width: "+e.width+", height: "+e.height);var a;switch(r){case"PNG":a="image/png";break;case"WEBP":a="image/webp";break;case"JPEG":case"JPG":default:a="image/jpeg"}return c(e.toDataURL(a,1).split("base64,").pop())}},g=function(t){var e=this.internal.collections.addImage_images;if(e)for(var r in e)if(t===e[r].alias)return e[r]},m=function(t,e,r){return t||e||(t=-96,e=-96),t<0&&(t=-1*r.width*72/t/this.internal.scaleFactor),e<0&&(e=-1*r.height*72/e/this.internal.scaleFactor),0===t&&(t=e*r.width/r.height),0===e&&(e=t*r.height/r.width),[t,e]},v=function(t,e,r,n,i,a){var o=m.call(this,r,n,i),s=this.internal.getCoordinateString,c=this.internal.getVerticalCoordinateString,u=l.call(this);if(r=o[0],n=o[1],u[i.index]=i,a){a*=Math.PI/180;var h=Math.cos(a),f=Math.sin(a),d=function(t){return t.toFixed(4)},p=[d(h),d(f),d(-1*f),d(h),0,0,"cm"]}this.internal.write("q"),a?(this.internal.write([1,"0","0",1,s(t),c(e+n),"cm"].join(" ")),this.internal.write(p.join(" ")),this.internal.write([s(r),"0","0",s(n),"0","0","cm"].join(" "))):this.internal.write([s(r),"0","0",s(n),s(t),c(e+n),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+i.index+" Do"),this.internal.write("Q")},b=t.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};t.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var y=t.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},w=t.__addimage__.sHashCode=function(t){var e,r,n=0;if("string"==typeof t)for(r=t.length,e=0;e<r;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;else if(x(t))for(r=t.byteLength/2,e=0;e<r;e++)n=(n<<5)-n+t[e],n|=0;return n},N=t.__addimage__.validateStringAsBase64=function(t){(t=t||"").toString().trim();var e=!0;return 0===t.length&&(e=!1),t.length%4!=0&&(e=!1),!1===/^[A-Za-z0-9+/]+$/.test(t.substr(0,t.length-2))&&(e=!1),!1===/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2))&&(e=!1),e},L=t.__addimage__.extractImageFromDataUrl=function(t){var e=(t=t||"").split("base64,"),r=null;if(2===e.length){var n=/^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);Array.isArray(n)&&(r={mimeType:n[1],charset:n[2],data:e[1]})}return r},A=t.__addimage__.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array};t.__addimage__.isArrayBuffer=function(t){return A()&&t instanceof ArrayBuffer};var x=t.__addimage__.isArrayBufferView=function(t){return A()&&"undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)},S=t.__addimage__.binaryStringToUint8Array=function(t){for(var e=t.length,r=new Uint8Array(e),n=0;n<e;n++)r[n]=t.charCodeAt(n);return r},_=t.__addimage__.arrayBufferToBinaryString=function(t){for(var e="",r=x(t)?t:new Uint8Array(t),n=0;n<r.length;n+=8192)e+=String.fromCharCode.apply(null,r.subarray(n,n+8192));return e};t.addImage=function(){var t,n,i,a,o,s,c,l,h;if("number"==typeof arguments[1]?(n=r,i=arguments[1],a=arguments[2],o=arguments[3],s=arguments[4],c=arguments[5],l=arguments[6],h=arguments[7]):(n=arguments[1],i=arguments[2],a=arguments[3],o=arguments[4],s=arguments[5],c=arguments[6],l=arguments[7],h=arguments[8]),"object"===e(t=arguments[0])&&!d(t)&&"imageData"in t){var f=t;t=f.imageData,n=f.format||n||r,i=f.x||i||0,a=f.y||a||0,o=f.w||f.width||o,s=f.h||f.height||s,c=f.alias||c,l=f.compression||l,h=f.rotation||f.angle||h}var p=this.internal.getFilters();if(void 0===l&&-1!==p.indexOf("FlateEncode")&&(l="SLOW"),isNaN(i)||isNaN(a))throw new Error("Invalid coordinates passed to jsPDF.addImage");u.call(this);var g=P.call(this,t,n,c,l);return v.call(this,i,a,o,s,g,h),this};var P=function(e,n,a,o){var s,c,u;if("string"==typeof e&&i(e)===r){e=unescape(e);var l=k(e,!1);(""!==l||void 0!==(l=t.loadFile(e,!0)))&&(e=l)}if(d(e)&&(e=p(e,n)),n=i(e,n),!f(n))throw new Error("addImage does not support files of type '"+n+"', please ensure that a plugin for '"+n+"' support is added.");if((null==(u=a)||0===u.length)&&(a=function(t){return"string"==typeof t||x(t)?w(t):x(t.data)?w(t.data):null}(e)),(s=g.call(this,a))||(A()&&(e instanceof Uint8Array||"RGBA"===n||(c=e,e=S(e))),s=this["process"+n.toUpperCase()](e,h.call(this),a,function(e){return e&&"string"==typeof e&&(e=e.toUpperCase()),e in t.image_compression?e:y.NONE}(o),c)),!s)throw new Error("An unknown error occurred whilst processing the image.");return s},k=t.__addimage__.convertBase64ToBinaryString=function(t,e){var r;e="boolean"!=typeof e||e;var n,i="";if("string"==typeof t){n=null!==(r=L(t))?r.data:t;try{i=c(n)}catch(t){if(e)throw N(n)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+t.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return i};t.getImageProperties=function(e){var n,a,o="";if(d(e)&&(e=p(e)),"string"==typeof e&&i(e)===r&&(""===(o=k(e,!1))&&(o=t.loadFile(e)||""),e=o),a=i(e),!f(a))throw new Error("addImage does not support files of type '"+a+"', please ensure that a plugin for '"+a+"' support is added.");if(!A()||e instanceof Uint8Array||(e=S(e)),!(n=this["process"+a.toUpperCase()](e)))throw new Error("An unknown error occurred whilst processing the image");return n.fileType=a,n}}(M.API),
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var e=function(t){if(void 0!==t&&""!=t)return!0};M.API.events.push(["addPage",function(t){this.internal.getPageInfo(t.pageNumber).pageContext.annotations=[]}]),t.events.push(["putPage",function(t){for(var r,n,i,a=this.internal.getCoordinateString,o=this.internal.getVerticalCoordinateString,s=this.internal.getPageInfoByObjId(t.objId),c=t.pageContext.annotations,u=!1,l=0;l<c.length&&!u;l++)switch((r=c[l]).type){case"link":(e(r.options.url)||e(r.options.pageNumber))&&(u=!0);break;case"reference":case"text":case"freetext":u=!0}if(0!=u){this.internal.write("/Annots [");for(var h=0;h<c.length;h++){r=c[h];var f=this.internal.pdfEscape,d=this.internal.getEncryptor(t.objId);switch(r.type){case"reference":this.internal.write(" "+r.object.objId+" 0 R ");break;case"text":var p=this.internal.newAdditionalObject(),g=this.internal.newAdditionalObject(),m=this.internal.getEncryptor(p.objId),v=r.title||"Note";i="<</Type /Annot /Subtype /Text "+(n="/Rect ["+a(r.bounds.x)+" "+o(r.bounds.y+r.bounds.h)+" "+a(r.bounds.x+r.bounds.w)+" "+o(r.bounds.y)+"] ")+"/Contents ("+f(m(r.contents))+")",i+=" /Popup "+g.objId+" 0 R",i+=" /P "+s.objId+" 0 R",i+=" /T ("+f(m(v))+") >>",p.content=i;var b=p.objId+" 0 R";i="<</Type /Annot /Subtype /Popup "+(n="/Rect ["+a(r.bounds.x+30)+" "+o(r.bounds.y+r.bounds.h)+" "+a(r.bounds.x+r.bounds.w+30)+" "+o(r.bounds.y)+"] ")+" /Parent "+b,r.open&&(i+=" /Open true"),i+=" >>",g.content=i,this.internal.write(p.objId,"0 R",g.objId,"0 R");break;case"freetext":n="/Rect ["+a(r.bounds.x)+" "+o(r.bounds.y)+" "+a(r.bounds.x+r.bounds.w)+" "+o(r.bounds.y+r.bounds.h)+"] ";var y=r.color||"#000000";i="<</Type /Annot /Subtype /FreeText "+n+"/Contents ("+f(d(r.contents))+")",i+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+y+")",i+=" /Border [0 0 0]",i+=" >>",this.internal.write(i);break;case"link":if(r.options.name){var w=this.annotations._nameMap[r.options.name];r.options.pageNumber=w.page,r.options.top=w.y}else r.options.top||(r.options.top=0);if(n="/Rect ["+r.finalBounds.x+" "+r.finalBounds.y+" "+r.finalBounds.w+" "+r.finalBounds.h+"] ",i="",r.options.url)i="<</Type /Annot /Subtype /Link "+n+"/Border [0 0 0] /A <</S /URI /URI ("+f(d(r.options.url))+") >>";else if(r.options.pageNumber){switch(i="<</Type /Annot /Subtype /Link "+n+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(r.options.pageNumber).objId+" 0 R",r.options.magFactor=r.options.magFactor||"XYZ",r.options.magFactor){case"Fit":i+=" /Fit]";break;case"FitH":i+=" /FitH "+r.options.top+"]";break;case"FitV":r.options.left=r.options.left||0,i+=" /FitV "+r.options.left+"]";break;case"XYZ":default:var N=o(r.options.top);r.options.left=r.options.left||0,void 0===r.options.zoom&&(r.options.zoom=0),i+=" /XYZ "+r.options.left+" "+N+" "+r.options.zoom+"]"}}""!=i&&(i+=" >>",this.internal.write(i))}}this.internal.write("]")}}]),t.createAnnotation=function(t){var e=this.internal.getCurrentPageInfo();switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":e.pageContext.annotations.push(t)}},t.link=function(t,e,r,n,i){var a=this.internal.getCurrentPageInfo(),o=this.internal.getCoordinateString,s=this.internal.getVerticalCoordinateString;a.pageContext.annotations.push({finalBounds:{x:o(t),y:s(e),w:o(t+r),h:s(e+n)},options:i,type:"link"})},t.textWithLink=function(t,e,r,n){var i,a,o=this.getTextWidth(t),s=this.internal.getLineHeight()/this.internal.scaleFactor;if(void 0!==n.maxWidth){a=n.maxWidth;var c=this.splitTextToSize(t,a).length;i=Math.ceil(s*c)}else a=o,i=s;return this.text(t,e,r,n),r+=.2*s,"center"===n.align&&(e-=o/2),"right"===n.align&&(e-=o),this.link(e,r-s,a,i,n),o},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor}}(M.API),
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var e={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},n={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},i=[1570,1571,1573,1575];t.__arabicParser__={};var a=t.__arabicParser__.isInArabicSubstitutionA=function(t){return void 0!==e[t.charCodeAt(0)]},o=t.__arabicParser__.isArabicLetter=function(t){return"string"==typeof t&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)},s=t.__arabicParser__.isArabicEndLetter=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length<=2},c=t.__arabicParser__.isArabicAlfLetter=function(t){return o(t)&&i.indexOf(t.charCodeAt(0))>=0};t.__arabicParser__.arabicLetterHasIsolatedForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=1};var u=t.__arabicParser__.arabicLetterHasFinalForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=2};t.__arabicParser__.arabicLetterHasInitialForm=function(t){return o(t)&&a(t)&&e[t.charCodeAt(0)].length>=3};var l=t.__arabicParser__.arabicLetterHasMedialForm=function(t){return o(t)&&a(t)&&4==e[t.charCodeAt(0)].length},h=t.__arabicParser__.resolveLigatures=function(t){var e=0,n=r,i="",a=0;for(e=0;e<t.length;e+=1)void 0!==n[t.charCodeAt(e)]?(a++,"number"==typeof(n=n[t.charCodeAt(e)])&&(i+=String.fromCharCode(n),n=r,a=0),e===t.length-1&&(n=r,i+=t.charAt(e-(a-1)),e-=a-1,a=0)):(n=r,i+=t.charAt(e-a),e-=a,a=0);return i};t.__arabicParser__.isArabicDiacritic=function(t){return void 0!==t&&void 0!==n[t.charCodeAt(0)]};var f=t.__arabicParser__.getCorrectForm=function(t,e,r){return o(t)?!1===a(t)?-1:!u(t)||!o(e)&&!o(r)||!o(r)&&s(e)||s(t)&&!o(e)||s(t)&&c(e)||s(t)&&s(e)?0:l(t)&&o(e)&&!s(e)&&o(r)&&u(r)?3:s(t)||!o(r)?1:2:-1},d=function(t){var r=0,n=0,i=0,a="",s="",c="",u=(t=t||"").split("\\s+"),l=[];for(r=0;r<u.length;r+=1){for(l.push(""),n=0;n<u[r].length;n+=1)a=u[r][n],s=u[r][n-1],c=u[r][n+1],o(a)?(i=f(a,s,c),l[r]+=-1!==i?String.fromCharCode(e[a.charCodeAt(0)][i]):a):l[r]+=a;l[r]=h(l[r])}return l.join(" ")},p=t.__arabicParser__.processArabic=t.processArabic=function(){var t,e="string"==typeof arguments[0]?arguments[0]:arguments[0].text,r=[];if(Array.isArray(e)){var n=0;for(r=[],n=0;n<e.length;n+=1)Array.isArray(e[n])?r.push([d(e[n][0]),e[n][1],e[n][2]]):r.push([d(e[n])]);t=r}else t=d(e);return"string"==typeof arguments[0]?t:(arguments[0].text=t,arguments[0])};t.events.push(["preProcessText",p])}(M.API),
/** @license
   * jsPDF Autoprint Plugin
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){t.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",(function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){this.internal.out("/OpenAction "+e+" 0 R")}))}return this}}(M.API),
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var e=function(){var t=void 0;Object.defineProperty(this,"pdf",{get:function(){return t},set:function(e){t=e}});var e=150;Object.defineProperty(this,"width",{get:function(){return e},set:function(t){e=isNaN(t)||!1===Number.isInteger(t)||t<0?150:t,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=e+1)}});var r=300;Object.defineProperty(this,"height",{get:function(){return r},set:function(t){r=isNaN(t)||!1===Number.isInteger(t)||t<0?300:t,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=r+1)}});var n=[];Object.defineProperty(this,"childNodes",{get:function(){return n},set:function(t){n=t}});var i={};Object.defineProperty(this,"style",{get:function(){return i},set:function(t){i=t}}),Object.defineProperty(this,"parentNode",{})};e.prototype.getContext=function(t,e){var r;if("2d"!==(t=t||"2d"))return null;for(r in e)this.pdf.context2d.hasOwnProperty(r)&&(this.pdf.context2d[r]=e[r]);return this.pdf.context2d._canvas=this,this.pdf.context2d},e.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},t.events.push(["initialized",function(){this.canvas=new e,this.canvas.pdf=this}])}(M.API),function(t){var r={left:0,top:0,bottom:0,right:0},n=!1,i=function(){void 0===this.internal.__cell__&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},r),this.internal.__cell__.margins.width=this.getPageWidth(),a.call(this))},a=function(){this.internal.__cell__.lastCell=new o,this.internal.__cell__.pages=1},o=function(){var t=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return t},set:function(e){t=e}});var e=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return e},set:function(t){e=t}});var r=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return r},set:function(t){r=t}});var n=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return n},set:function(t){n=t}});var i=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return i},set:function(t){i=t}});var a=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return a},set:function(t){a=t}});var o=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return o},set:function(t){o=t}}),this};o.prototype.clone=function(){return new o(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},o.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},t.setHeaderFunction=function(t){return i.call(this),this.internal.__cell__.headerFunction="function"==typeof t?t:void 0,this},t.getTextDimensions=function(t,e){i.call(this);var r=(e=e||{}).fontSize||this.getFontSize(),n=e.font||this.getFont(),a=e.scaleFactor||this.internal.scaleFactor,o=0,s=0,c=0,u=this;if(!Array.isArray(t)&&"string"!=typeof t){if("number"!=typeof t)throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");t=String(t)}var l=e.maxWidth;l>0?"string"==typeof t?t=this.splitTextToSize(t,l):"[object Array]"===Object.prototype.toString.call(t)&&(t=t.reduce((function(t,e){return t.concat(u.splitTextToSize(e,l))}),[])):t=Array.isArray(t)?t:[t];for(var h=0;h<t.length;h++)o<(c=this.getStringUnitWidth(t[h],{font:n})*r)&&(o=c);return 0!==o&&(s=t.length),{w:o/=a,h:Math.max((s*r*this.getLineHeightFactor()-r*(this.getLineHeightFactor()-1))/a,0)}},t.cellAddPage=function(){i.call(this),this.addPage();var t=this.internal.__cell__.margins||r;return this.internal.__cell__.lastCell=new o(t.left,t.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var s=t.cell=function(){var t;t=arguments[0]instanceof o?arguments[0]:new o(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),i.call(this);var e=this.internal.__cell__.lastCell,a=this.internal.__cell__.padding,s=this.internal.__cell__.margins||r,c=this.internal.__cell__.tableHeaderRow,u=this.internal.__cell__.printHeaders;return void 0!==e.lineNumber&&(e.lineNumber===t.lineNumber?(t.x=(e.x||0)+(e.width||0),t.y=e.y||0):e.y+e.height+t.height+s.bottom>this.getPageHeight()?(this.cellAddPage(),t.y=s.top,u&&c&&(this.printHeaderRow(t.lineNumber,!0),t.y+=c[0].height)):t.y=e.y+e.height||t.y),void 0!==t.text[0]&&(this.rect(t.x,t.y,t.width,t.height,!0===n?"FD":void 0),"right"===t.align?this.text(t.text,t.x+t.width-a,t.y+a,{align:"right",baseline:"top"}):"center"===t.align?this.text(t.text,t.x+t.width/2,t.y+a,{align:"center",baseline:"top",maxWidth:t.width-a-a}):this.text(t.text,t.x+a,t.y+a,{align:"left",baseline:"top",maxWidth:t.width-a-a})),this.internal.__cell__.lastCell=t,this};t.table=function(t,n,u,l,h){if(i.call(this),!u)throw new Error("No data for PDF table.");var f,d,p,g,m=[],v=[],b=[],y={},w={},N=[],L=[],A=(h=h||{}).autoSize||!1,x=!1!==h.printHeaders,S=h.css&&void 0!==h.css["font-size"]?16*h.css["font-size"]:h.fontSize||12,_=h.margins||Object.assign({width:this.getPageWidth()},r),P="number"==typeof h.padding?h.padding:3,k=h.headerBackgroundColor||"#c8c8c8",F=h.headerTextColor||"#000";if(a.call(this),this.internal.__cell__.printHeaders=x,this.internal.__cell__.margins=_,this.internal.__cell__.table_font_size=S,this.internal.__cell__.padding=P,this.internal.__cell__.headerBackgroundColor=k,this.internal.__cell__.headerTextColor=F,this.setFontSize(S),null==l)v=m=Object.keys(u[0]),b=m.map((function(){return"left"}));else if(Array.isArray(l)&&"object"===e(l[0]))for(m=l.map((function(t){return t.name})),v=l.map((function(t){return t.prompt||t.name||""})),b=l.map((function(t){return t.align||"left"})),f=0;f<l.length;f+=1)w[l[f].name]=l[f].width*(19.049976/25.4);else Array.isArray(l)&&"string"==typeof l[0]&&(v=m=l,b=m.map((function(){return"left"})));if(A||Array.isArray(l)&&"string"==typeof l[0])for(f=0;f<m.length;f+=1){for(y[g=m[f]]=u.map((function(t){return t[g]})),this.setFont(void 0,"bold"),N.push(this.getTextDimensions(v[f],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),d=y[g],this.setFont(void 0,"normal"),p=0;p<d.length;p+=1)N.push(this.getTextDimensions(d[p],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);w[g]=Math.max.apply(null,N)+P+P,N=[]}if(x){var I={};for(f=0;f<m.length;f+=1)I[m[f]]={},I[m[f]].text=v[f],I[m[f]].align=b[f];var C=c.call(this,I,w);L=m.map((function(e){return new o(t,n,w[e],C,I[e].text,void 0,I[e].align)})),this.setTableHeaderRow(L),this.printHeaderRow(1,!1)}var j=l.reduce((function(t,e){return t[e.name]=e.align,t}),{});for(f=0;f<u.length;f+=1){"rowStart"in h&&h.rowStart instanceof Function&&h.rowStart({row:f,data:u[f]},this);var O=c.call(this,u[f],w);for(p=0;p<m.length;p+=1){var B=u[f][m[p]];"cellStart"in h&&h.cellStart instanceof Function&&h.cellStart({row:f,col:p,data:B},this),s.call(this,new o(t,n,w[m[p]],O,B,f+2,j[m[p]]))}}return this.internal.__cell__.table_x=t,this.internal.__cell__.table_y=n,this};var c=function(t,e){var r=this.internal.__cell__.padding,n=this.internal.__cell__.table_font_size,i=this.internal.scaleFactor;return Object.keys(t).map((function(n){var i=t[n];return this.splitTextToSize(i.hasOwnProperty("text")?i.text:i,e[n]-r-r)}),this).map((function(t){return this.getLineHeightFactor()*t.length*n/i+r+r}),this).reduce((function(t,e){return Math.max(t,e)}),0)};t.setTableHeaderRow=function(t){i.call(this),this.internal.__cell__.tableHeaderRow=t},t.printHeaderRow=function(t,e){if(i.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var r;if(n=!0,"function"==typeof this.internal.__cell__.headerFunction){var a=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new o(a[0],a[1],a[2],a[3],void 0,-1)}this.setFont(void 0,"bold");for(var c=[],u=0;u<this.internal.__cell__.tableHeaderRow.length;u+=1){r=this.internal.__cell__.tableHeaderRow[u].clone(),e&&(r.y=this.internal.__cell__.margins.top||0,c.push(r)),r.lineNumber=t;var l=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),s.call(this,r),this.setTextColor(l)}c.length>0&&this.setTableHeaderRow(c),this.setFont(void 0,"normal"),n=!1}}(M.API);var _t={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},Pt=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],kt=St(Pt),Ft=[100,200,300,400,500,600,700,800,900],It=St(Ft);function Ct(t){var e=t.family.replace(/"|'/g,"").toLowerCase(),r=function(t){return _t[t=t||"normal"]?t:"normal"}(t.style),n=function(t){if(!t)return 400;if("number"==typeof t)return t>=100&&t<=900&&t%100==0?t:400;if(/^\d00$/.test(t))return parseInt(t);switch(t){case"bold":return 700;case"normal":default:return 400}}(t.weight),i=function(t){return"number"==typeof kt[t=t||"normal"]?t:"normal"}(t.stretch);return{family:e,style:r,weight:n,stretch:i,src:t.src||[],ref:t.ref||{name:e,style:[i,r,n].join(" ")}}}function jt(t,e,r,n){var i;for(i=r;i>=0&&i<e.length;i+=n)if(t[e[i]])return t[e[i]];for(i=r;i>=0&&i<e.length;i-=n)if(t[e[i]])return t[e[i]]}var Ot={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Bt={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Mt(t){return[t.stretch,t.style,t.weight,t.family].join(" ")}function Et(t,e,r){for(var n=(r=r||{}).defaultFontFamily||"times",i=Object.assign({},Ot,r.genericFontFamilies||{}),a=null,o=null,s=0;s<e.length;++s)if(i[(a=Ct(e[s])).family]&&(a.family=i[a.family]),t.hasOwnProperty(a.family)){o=t[a.family];break}if(!(o=o||t[n]))throw new Error("Could not find a font-family for the rule '"+Mt(a)+"' and default family '"+n+"'.");if(o=function(t,e){if(e[t])return e[t];var r=kt[t],n=r<=kt.normal?-1:1,i=jt(e,Pt,r,n);if(!i)throw new Error("Could not find a matching font-stretch value for "+t);return i}(a.stretch,o),o=function(t,e){if(e[t])return e[t];for(var r=_t[t],n=0;n<r.length;++n)if(e[r[n]])return e[r[n]];throw new Error("Could not find a matching font-style for "+t)}(a.style,o),!(o=function(t,e){if(e[t])return e[t];if(400===t&&e[500])return e[500];if(500===t&&e[400])return e[400];var r=It[t],n=jt(e,Ft,r,t<400?-1:1);if(!n)throw new Error("Could not find a matching font-weight for value "+t);return n}(a.weight,o)))throw new Error("Failed to resolve a font for the rule '"+Mt(a)+"'.");return o}function qt(t){return t.trimLeft()}function Dt(t,e){for(var r=0;r<t.length;){if(t.charAt(r)===e)return[t.substring(0,r),t.substring(r+1)];r+=1}return null}function Rt(t){var e=t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return null===e?null:[e[0],t.substring(e[0].length)]}var Tt=["times"];!function(t){var r,n,a,o,s,c,u,l,f,d=function(t){return t=t||{},this.isStrokeTransparent=t.isStrokeTransparent||!1,this.strokeOpacity=t.strokeOpacity||1,this.strokeStyle=t.strokeStyle||"#000000",this.fillStyle=t.fillStyle||"#000000",this.isFillTransparent=t.isFillTransparent||!1,this.fillOpacity=t.fillOpacity||1,this.font=t.font||"10px sans-serif",this.textBaseline=t.textBaseline||"alphabetic",this.textAlign=t.textAlign||"left",this.lineWidth=t.lineWidth||1,this.lineJoin=t.lineJoin||"miter",this.lineCap=t.lineCap||"butt",this.path=t.path||[],this.transform=void 0!==t.transform?t.transform.clone():new l,this.globalCompositeOperation=t.globalCompositeOperation||"normal",this.globalAlpha=t.globalAlpha||1,this.clip_path=t.clip_path||[],this.currentPoint=t.currentPoint||new c,this.miterLimit=t.miterLimit||10,this.lastPoint=t.lastPoint||new c,this.lineDashOffset=t.lineDashOffset||0,this.lineDash=t.lineDash||[],this.margin=t.margin||[0,0,0,0],this.prevPageLastElemOffset=t.prevPageLastElemOffset||0,this.ignoreClearRect="boolean"!=typeof t.ignoreClearRect||t.ignoreClearRect,this};t.events.push(["initialized",function(){this.context2d=new p(this),r=this.internal.f2,n=this.internal.getCoordinateString,a=this.internal.getVerticalCoordinateString,o=this.internal.getHorizontalCoordinate,s=this.internal.getVerticalCoordinate,c=this.internal.Point,u=this.internal.Rectangle,l=this.internal.Matrix,f=new d}]);var p=function(t){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var e=t;Object.defineProperty(this,"pdf",{get:function(){return e}});var r=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return r},set:function(t){r=Boolean(t)}});var n=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return n},set:function(t){n=Boolean(t)}});var i=0;Object.defineProperty(this,"posX",{get:function(){return i},set:function(t){isNaN(t)||(i=t)}});var a=0;Object.defineProperty(this,"posY",{get:function(){return a},set:function(t){isNaN(t)||(a=t)}}),Object.defineProperty(this,"margin",{get:function(){return f.margin},set:function(t){var e;"number"==typeof t?e=[t,t,t,t]:((e=new Array(4))[0]=t[0],e[1]=t.length>=2?t[1]:e[0],e[2]=t.length>=3?t[2]:e[0],e[3]=t.length>=4?t[3]:e[1]),f.margin=e}});var o=!1;Object.defineProperty(this,"autoPaging",{get:function(){return o},set:function(t){o=t}});var s=0;Object.defineProperty(this,"lastBreak",{get:function(){return s},set:function(t){s=t}});var c=[];Object.defineProperty(this,"pageBreaks",{get:function(){return c},set:function(t){c=t}}),Object.defineProperty(this,"ctx",{get:function(){return f},set:function(t){t instanceof d&&(f=t)}}),Object.defineProperty(this,"path",{get:function(){return f.path},set:function(t){f.path=t}});var u=[];Object.defineProperty(this,"ctxStack",{get:function(){return u},set:function(t){u=t}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(t){var e;e=g(t),this.ctx.fillStyle=e.style,this.ctx.isFillTransparent=0===e.a,this.ctx.fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(t){var e=g(t);this.ctx.strokeStyle=e.style,this.ctx.isStrokeTransparent=0===e.a,this.ctx.strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(t){-1!==["butt","round","square"].indexOf(t)&&(this.ctx.lineCap=t,this.pdf.setLineCap(t))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(t){isNaN(t)||(this.ctx.lineWidth=t,this.pdf.setLineWidth(t))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(t){-1!==["bevel","round","miter"].indexOf(t)&&(this.ctx.lineJoin=t,this.pdf.setLineJoin(t))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(t){isNaN(t)||(this.ctx.miterLimit=t,this.pdf.setMiterLimit(t))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(t){this.ctx.textBaseline=t}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(t){-1!==["right","end","center","left","start"].indexOf(t)&&(this.ctx.textAlign=t)}});var l=null;function h(t,e){if(null===l){var r=function(t){var e=[];return Object.keys(t).forEach((function(r){t[r].forEach((function(t){var n=null;switch(t){case"bold":n={family:r,weight:"bold"};break;case"italic":n={family:r,style:"italic"};break;case"bolditalic":n={family:r,weight:"bold",style:"italic"};break;case"":case"normal":n={family:r}}null!==n&&(n.ref={name:r,style:t},e.push(n))}))})),e}(t.getFontList());l=function(t){for(var e={},r=0;r<t.length;++r){var n=Ct(t[r]),i=n.family,a=n.stretch,o=n.style,s=n.weight;e[i]=e[i]||{},e[i][a]=e[i][a]||{},e[i][a][o]=e[i][a][o]||{},e[i][a][o][s]=n}return e}(r.concat(e))}return l}var p=null;Object.defineProperty(this,"fontFaces",{get:function(){return p},set:function(t){l=null,p=t}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(t){var e;if(this.ctx.font=t,null!==(e=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))){var r=e[1],n=(e[2],e[3]),i=e[4],a=(e[5],e[6]),o=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];i="px"===o?Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor):"em"===o?Math.floor(parseFloat(i)*this.pdf.getFontSize()):Math.floor(parseFloat(i)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(i);var s=function(t){var e,r,n=[],i=t.trim();if(""===i)return Tt;if(i in Bt)return[Bt[i]];for(;""!==i;){switch(r=null,e=(i=qt(i)).charAt(0)){case'"':case"'":r=Dt(i.substring(1),e);break;default:r=Rt(i)}if(null===r)return Tt;if(n.push(r[0]),""!==(i=qt(r[1]))&&","!==i.charAt(0))return Tt;i=i.replace(/^,/,"")}return n}(a);if(this.fontFaces){var c=Et(h(this.pdf,this.fontFaces),s.map((function(t){return{family:t,stretch:"normal",weight:n,style:r}})));this.pdf.setFont(c.ref.name,c.ref.style)}else{var u="";("bold"===n||parseInt(n,10)>=700||"bold"===r)&&(u="bold"),"italic"===r&&(u+="italic"),0===u.length&&(u="normal");for(var l="",f={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},d=0;d<s.length;d++){if(void 0!==this.pdf.internal.getFont(s[d],u,{noFallback:!0,disableWarning:!0})){l=s[d];break}if("bolditalic"===u&&void 0!==this.pdf.internal.getFont(s[d],"bold",{noFallback:!0,disableWarning:!0}))l=s[d],u="bold";else if(void 0!==this.pdf.internal.getFont(s[d],"normal",{noFallback:!0,disableWarning:!0})){l=s[d],u="normal";break}}if(""===l)for(var p=0;p<s.length;p++)if(f[s[p]]){l=f[s[p]];break}l=""===l?"Times":l,this.pdf.setFont(l,u)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(t){this.ctx.globalCompositeOperation=t}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(t){this.ctx.globalAlpha=t}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(t){this.ctx.lineDashOffset=t,T.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(t){this.ctx.lineDash=t,T.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(t){this.ctx.ignoreClearRect=Boolean(t)}})};p.prototype.setLineDash=function(t){this.lineDash=t},p.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},p.prototype.fill=function(){A.call(this,"fill",!1)},p.prototype.stroke=function(){A.call(this,"stroke",!1)},p.prototype.beginPath=function(){this.path=[{type:"begin"}]},p.prototype.moveTo=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var r=this.ctx.transform.applyToPoint(new c(t,e));this.path.push({type:"mt",x:r.x,y:r.y}),this.ctx.lastPoint=new c(t,e)},p.prototype.closePath=function(){var t=new c(0,0),r=0;for(r=this.path.length-1;-1!==r;r--)if("begin"===this.path[r].type&&"object"===e(this.path[r+1])&&"number"==typeof this.path[r+1].x){t=new c(this.path[r+1].x,this.path[r+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new c(t.x,t.y)},p.prototype.lineTo=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var r=this.ctx.transform.applyToPoint(new c(t,e));this.path.push({type:"lt",x:r.x,y:r.y}),this.ctx.lastPoint=new c(r.x,r.y)},p.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),A.call(this,null,!0)},p.prototype.quadraticCurveTo=function(t,e,r,n){if(isNaN(r)||isNaN(n)||isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var a=this.ctx.transform.applyToPoint(new c(r,n)),o=this.ctx.transform.applyToPoint(new c(t,e));this.path.push({type:"qct",x1:o.x,y1:o.y,x:a.x,y:a.y}),this.ctx.lastPoint=new c(a.x,a.y)},p.prototype.bezierCurveTo=function(t,e,r,n,a,o){if(isNaN(a)||isNaN(o)||isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var s=this.ctx.transform.applyToPoint(new c(a,o)),u=this.ctx.transform.applyToPoint(new c(t,e)),l=this.ctx.transform.applyToPoint(new c(r,n));this.path.push({type:"bct",x1:u.x,y1:u.y,x2:l.x,y2:l.y,x:s.x,y:s.y}),this.ctx.lastPoint=new c(s.x,s.y)},p.prototype.arc=function(t,e,r,n,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(a))throw i.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(o=Boolean(o),!this.ctx.transform.isIdentity){var s=this.ctx.transform.applyToPoint(new c(t,e));t=s.x,e=s.y;var u=this.ctx.transform.applyToPoint(new c(0,r)),l=this.ctx.transform.applyToPoint(new c(0,0));r=Math.sqrt(Math.pow(u.x-l.x,2)+Math.pow(u.y-l.y,2))}Math.abs(a-n)>=2*Math.PI&&(n=0,a=2*Math.PI),this.path.push({type:"arc",x:t,y:e,radius:r,startAngle:n,endAngle:a,counterclockwise:o})},p.prototype.arcTo=function(t,e,r,n,i){throw new Error("arcTo not implemented.")},p.prototype.rect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(t,e),this.lineTo(t+r,e),this.lineTo(t+r,e+n),this.lineTo(t,e+n),this.lineTo(t,e),this.lineTo(t+r,e),this.lineTo(t,e)},p.prototype.fillRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!m.call(this)){var a={};"butt"!==this.lineCap&&(a.lineCap=this.lineCap,this.lineCap="butt"),"miter"!==this.lineJoin&&(a.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(t,e,r,n),this.fill(),a.hasOwnProperty("lineCap")&&(this.lineCap=a.lineCap),a.hasOwnProperty("lineJoin")&&(this.lineJoin=a.lineJoin)}},p.prototype.strokeRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");v.call(this)||(this.beginPath(),this.rect(t,e,r,n),this.stroke())},p.prototype.clearRect=function(t,e,r,n){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n))throw i.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(t,e,r,n))},p.prototype.save=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,r=0;r<this.pdf.internal.getNumberOfPages();r++)this.pdf.setPage(r+1),this.pdf.internal.out("q");if(this.pdf.setPage(e),t){this.ctx.fontSize=this.pdf.internal.getFontSize();var n=new d(this.ctx);this.ctxStack.push(this.ctx),this.ctx=n}},p.prototype.restore=function(t){t="boolean"!=typeof t||t;for(var e=this.pdf.internal.getCurrentPageInfo().pageNumber,r=0;r<this.pdf.internal.getNumberOfPages();r++)this.pdf.setPage(r+1),this.pdf.internal.out("Q");this.pdf.setPage(e),t&&0!==this.ctxStack.length&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},p.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var g=function(t){var e,r,n,i;if(!0===t.isCanvasGradient&&(t=t.getColor()),!t)return{r:0,g:0,b:0,a:0,style:t};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t))e=0,r=0,n=0,i=0;else{var a=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);if(null!==a)e=parseInt(a[1]),r=parseInt(a[2]),n=parseInt(a[3]),i=1;else if(null!==(a=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t)))e=parseInt(a[1]),r=parseInt(a[2]),n=parseInt(a[3]),i=parseFloat(a[4]);else{if(i=1,"string"==typeof t&&"#"!==t.charAt(0)){var o=new h(t);t=o.ok?o.toHex():"#000000"}4===t.length?(e=t.substring(1,2),e+=e,r=t.substring(2,3),r+=r,n=t.substring(3,4),n+=n):(e=t.substring(1,3),r=t.substring(3,5),n=t.substring(5,7)),e=parseInt(e,16),r=parseInt(r,16),n=parseInt(n,16)}}return{r:e,g:r,b:n,a:i,style:t}},m=function(){return this.ctx.isFillTransparent||0==this.globalAlpha},v=function(){return Boolean(this.ctx.isStrokeTransparent||0==this.globalAlpha)};p.prototype.fillText=function(t,e,r,n){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw i.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(n=isNaN(n)?void 0:n,!m.call(this)){var a=q(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;C.call(this,{text:t,x:e,y:r,scale:o,angle:a,align:this.textAlign,maxWidth:n})}},p.prototype.strokeText=function(t,e,r,n){if(isNaN(e)||isNaN(r)||"string"!=typeof t)throw i.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!v.call(this)){n=isNaN(n)?void 0:n;var a=q(this.ctx.transform.rotation),o=this.ctx.transform.scaleX;C.call(this,{text:t,x:e,y:r,scale:o,renderingMode:"stroke",angle:a,align:this.textAlign,maxWidth:n})}},p.prototype.measureText=function(t){if("string"!=typeof t)throw i.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var e=this.pdf,r=this.pdf.internal.scaleFactor,n=e.internal.getFontSize(),a=e.getStringUnitWidth(t)*n/e.internal.scaleFactor,o=function(t){var e=(t=t||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return e}}),this};return new o({width:a*=Math.round(96*r/72*1e4)/1e4})},p.prototype.scale=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var r=new l(t,0,0,e,0,0);this.ctx.transform=this.ctx.transform.multiply(r)},p.prototype.rotate=function(t){if(isNaN(t))throw i.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var e=new l(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0);this.ctx.transform=this.ctx.transform.multiply(e)},p.prototype.translate=function(t,e){if(isNaN(t)||isNaN(e))throw i.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var r=new l(1,0,0,1,t,e);this.ctx.transform=this.ctx.transform.multiply(r)},p.prototype.transform=function(t,e,r,n,a,o){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(n)||isNaN(a)||isNaN(o))throw i.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var s=new l(t,e,r,n,a,o);this.ctx.transform=this.ctx.transform.multiply(s)},p.prototype.setTransform=function(t,e,r,n,i,a){t=isNaN(t)?1:t,e=isNaN(e)?0:e,r=isNaN(r)?0:r,n=isNaN(n)?1:n,i=isNaN(i)?0:i,a=isNaN(a)?0:a,this.ctx.transform=new l(t,e,r,n,i,a)};var b=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};p.prototype.drawImage=function(t,e,r,n,i,a,o,s,c){var h=this.pdf.getImageProperties(t),f=1,d=1,p=1,g=1;void 0!==n&&void 0!==s&&(p=s/n,g=c/i,f=h.width/n*s/n,d=h.height/i*c/i),void 0===a&&(a=e,o=r,e=0,r=0),void 0!==n&&void 0===s&&(s=n,c=i),void 0===n&&void 0===s&&(s=h.width,c=h.height);for(var m,v=this.ctx.transform.decompose(),w=q(v.rotate.shx),A=new l,S=(A=(A=(A=A.multiply(v.translate)).multiply(v.skew)).multiply(v.scale)).applyToRectangle(new u(a-e*p,o-r*g,n*f,i*d)),_=y.call(this,S),P=[],k=0;k<_.length;k+=1)-1===P.indexOf(_[k])&&P.push(_[k]);if(L(P),this.autoPaging)for(var F=P[0],I=P[P.length-1],C=F;C<I+1;C++){this.pdf.setPage(C);var j=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],O=1===C?this.posY+this.margin[0]:this.margin[0],B=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],M=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],E=1===C?0:B+(C-2)*M;if(0!==this.ctx.clip_path.length){var D=this.path;m=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=N(m,this.posX+this.margin[3],-E+O+this.ctx.prevPageLastElemOffset),x.call(this,"fill",!0),this.path=D}var R=JSON.parse(JSON.stringify(S));R=N([R],this.posX+this.margin[3],-E+O+this.ctx.prevPageLastElemOffset)[0];var T=(C>F||C<I)&&b.call(this);T&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],j,M,null).clip().discardPath()),this.pdf.addImage(t,"JPEG",R.x,R.y,R.w,R.h,null,null,w),T&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(t,"JPEG",S.x,S.y,S.w,S.h,null,null,w)};var y=function(t,e,r){var n=[];e=e||this.pdf.internal.pageSize.width,r=r||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var i=this.posY+this.ctx.prevPageLastElemOffset;switch(t.type){default:case"mt":case"lt":n.push(Math.floor((t.y+i)/r)+1);break;case"arc":n.push(Math.floor((t.y+i-t.radius)/r)+1),n.push(Math.floor((t.y+i+t.radius)/r)+1);break;case"qct":var a=D(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x,t.y);n.push(Math.floor((a.y+i)/r)+1),n.push(Math.floor((a.y+a.h+i)/r)+1);break;case"bct":var o=R(this.ctx.lastPoint.x,this.ctx.lastPoint.y,t.x1,t.y1,t.x2,t.y2,t.x,t.y);n.push(Math.floor((o.y+i)/r)+1),n.push(Math.floor((o.y+o.h+i)/r)+1);break;case"rect":n.push(Math.floor((t.y+i)/r)+1),n.push(Math.floor((t.y+t.h+i)/r)+1)}for(var s=0;s<n.length;s+=1)for(;this.pdf.internal.getNumberOfPages()<n[s];)w.call(this);return n},w=function(){var t=this.fillStyle,e=this.strokeStyle,r=this.font,n=this.lineCap,i=this.lineWidth,a=this.lineJoin;this.pdf.addPage(),this.fillStyle=t,this.strokeStyle=e,this.font=r,this.lineCap=n,this.lineWidth=i,this.lineJoin=a},N=function(t,e,r){for(var n=0;n<t.length;n++)switch(t[n].type){case"bct":t[n].x2+=e,t[n].y2+=r;case"qct":t[n].x1+=e,t[n].y1+=r;case"mt":case"lt":case"arc":default:t[n].x+=e,t[n].y+=r}return t},L=function(t){return t.sort((function(t,e){return t-e}))},A=function(t,e){for(var r,n,i=this.fillStyle,a=this.strokeStyle,o=this.lineCap,s=this.lineWidth,c=Math.abs(s*this.ctx.transform.scaleX),u=this.lineJoin,l=JSON.parse(JSON.stringify(this.path)),h=JSON.parse(JSON.stringify(this.path)),f=[],d=0;d<h.length;d++)if(void 0!==h[d].x)for(var p=y.call(this,h[d]),g=0;g<p.length;g+=1)-1===f.indexOf(p[g])&&f.push(p[g]);for(var m=0;m<f.length;m++)for(;this.pdf.internal.getNumberOfPages()<f[m];)w.call(this);if(L(f),this.autoPaging)for(var v=f[0],A=f[f.length-1],S=v;S<A+1;S++){this.pdf.setPage(S),this.fillStyle=i,this.strokeStyle=a,this.lineCap=o,this.lineWidth=c,this.lineJoin=u;var _=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],P=1===S?this.posY+this.margin[0]:this.margin[0],k=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],F=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],I=1===S?0:k+(S-2)*F;if(0!==this.ctx.clip_path.length){var C=this.path;r=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=N(r,this.posX+this.margin[3],-I+P+this.ctx.prevPageLastElemOffset),x.call(this,t,!0),this.path=C}if(n=JSON.parse(JSON.stringify(l)),this.path=N(n,this.posX+this.margin[3],-I+P+this.ctx.prevPageLastElemOffset),!1===e||0===S){var j=(S>v||S<A)&&b.call(this);j&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],_,F,null).clip().discardPath()),x.call(this,t,e),j&&this.pdf.restoreGraphicsState()}this.lineWidth=s}else this.lineWidth=c,x.call(this,t,e),this.lineWidth=s;this.path=l},x=function(t,e){if(("stroke"!==t||e||!v.call(this))&&("stroke"===t||e||!m.call(this))){for(var r,n,i=[],a=this.path,o=0;o<a.length;o++){var s=a[o];switch(s.type){case"begin":i.push({begin:!0});break;case"close":i.push({close:!0});break;case"mt":i.push({start:s,deltas:[],abs:[]});break;case"lt":var c=i.length;if(a[o-1]&&!isNaN(a[o-1].x)&&(r=[s.x-a[o-1].x,s.y-a[o-1].y],c>0))for(;c>=0;c--)if(!0!==i[c-1].close&&!0!==i[c-1].begin){i[c-1].deltas.push(r),i[c-1].abs.push(s);break}break;case"bct":r=[s.x1-a[o-1].x,s.y1-a[o-1].y,s.x2-a[o-1].x,s.y2-a[o-1].y,s.x-a[o-1].x,s.y-a[o-1].y],i[i.length-1].deltas.push(r);break;case"qct":var u=a[o-1].x+2/3*(s.x1-a[o-1].x),l=a[o-1].y+2/3*(s.y1-a[o-1].y),h=s.x+2/3*(s.x1-s.x),f=s.y+2/3*(s.y1-s.y),d=s.x,p=s.y;r=[u-a[o-1].x,l-a[o-1].y,h-a[o-1].x,f-a[o-1].y,d-a[o-1].x,p-a[o-1].y],i[i.length-1].deltas.push(r);break;case"arc":i.push({deltas:[],abs:[],arc:!0}),Array.isArray(i[i.length-1].abs)&&i[i.length-1].abs.push(s)}}n=e?null:"stroke"===t?"stroke":"fill";for(var g=!1,b=0;b<i.length;b++)if(i[b].arc)for(var y=i[b].abs,w=0;w<y.length;w++){var N=y[w];"arc"===N.type?P.call(this,N.x,N.y,N.radius,N.startAngle,N.endAngle,N.counterclockwise,void 0,e,!g):j.call(this,N.x,N.y),g=!0}else if(!0===i[b].close)this.pdf.internal.out("h"),g=!1;else if(!0!==i[b].begin){var L=i[b].start.x,A=i[b].start.y;O.call(this,i[b].deltas,L,A),g=!0}n&&k.call(this,n),e&&F.call(this)}},S=function(t){var e=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,r=e*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return t-r;case"top":return t+e-r;case"hanging":return t+e-2*r;case"middle":return t+e/2-r;case"ideographic":return t;case"alphabetic":default:return t}},_=function(t){return t+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};p.prototype.createLinearGradient=function(){var t=function(){};return t.colorStops=[],t.addColorStop=function(t,e){this.colorStops.push([t,e])},t.getColor=function(){return 0===this.colorStops.length?"#000000":this.colorStops[0][1]},t.isCanvasGradient=!0,t},p.prototype.createPattern=function(){return this.createLinearGradient()},p.prototype.createRadialGradient=function(){return this.createLinearGradient()};var P=function(t,e,r,n,i,a,o,s,c){for(var u=M.call(this,r,n,i,a),l=0;l<u.length;l++){var h=u[l];0===l&&(c?I.call(this,h.x1+t,h.y1+e):j.call(this,h.x1+t,h.y1+e)),B.call(this,t,e,h.x2,h.y2,h.x3,h.y3,h.x4,h.y4)}s?F.call(this):k.call(this,o)},k=function(t){switch(t){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},F=function(){this.pdf.clip(),this.pdf.discardPath()},I=function(t,e){this.pdf.internal.out(n(t)+" "+a(e)+" m")},C=function(t){var e;switch(t.align){case"right":case"end":e="right";break;case"center":e="center";break;case"left":case"start":default:e="left"}var r=this.pdf.getTextDimensions(t.text),n=S.call(this,t.y),i=_.call(this,n)-r.h,a=this.ctx.transform.applyToPoint(new c(t.x,n)),o=this.ctx.transform.decompose(),s=new l;s=(s=(s=s.multiply(o.translate)).multiply(o.skew)).multiply(o.scale);for(var h,f,d,p=this.ctx.transform.applyToRectangle(new u(t.x,n,r.w,r.h)),g=s.applyToRectangle(new u(t.x,i,r.w,r.h)),m=y.call(this,g),v=[],w=0;w<m.length;w+=1)-1===v.indexOf(m[w])&&v.push(m[w]);if(L(v),this.autoPaging)for(var A=v[0],P=v[v.length-1],k=A;k<P+1;k++){this.pdf.setPage(k);var F=1===k?this.posY+this.margin[0]:this.margin[0],I=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],C=this.pdf.internal.pageSize.height-this.margin[2],j=C-this.margin[0],O=this.pdf.internal.pageSize.width-this.margin[1],B=O-this.margin[3],M=1===k?0:I+(k-2)*j;if(0!==this.ctx.clip_path.length){var E=this.path;h=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=N(h,this.posX+this.margin[3],-1*M+F),x.call(this,"fill",!0),this.path=E}var q=N([JSON.parse(JSON.stringify(g))],this.posX+this.margin[3],-M+F+this.ctx.prevPageLastElemOffset)[0];t.scale>=.01&&(f=this.pdf.internal.getFontSize(),this.pdf.setFontSize(f*t.scale),d=this.lineWidth,this.lineWidth=d*t.scale);var D="text"!==this.autoPaging;if(D||q.y+q.h<=C){if(D||q.y>=F&&q.x<=O){var R=D?t.text:this.pdf.splitTextToSize(t.text,t.maxWidth||O-q.x)[0],T=N([JSON.parse(JSON.stringify(p))],this.posX+this.margin[3],-M+F+this.ctx.prevPageLastElemOffset)[0],U=D&&(k>A||k<P)&&b.call(this);U&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],B,j,null).clip().discardPath()),this.pdf.text(R,T.x,T.y,{angle:t.angle,align:e,renderingMode:t.renderingMode}),U&&this.pdf.restoreGraphicsState()}}else q.y<C&&(this.ctx.prevPageLastElemOffset+=C-q.y);t.scale>=.01&&(this.pdf.setFontSize(f),this.lineWidth=d)}else t.scale>=.01&&(f=this.pdf.internal.getFontSize(),this.pdf.setFontSize(f*t.scale),d=this.lineWidth,this.lineWidth=d*t.scale),this.pdf.text(t.text,a.x+this.posX,a.y+this.posY,{angle:t.angle,align:e,renderingMode:t.renderingMode,maxWidth:t.maxWidth}),t.scale>=.01&&(this.pdf.setFontSize(f),this.lineWidth=d)},j=function(t,e,r,i){r=r||0,i=i||0,this.pdf.internal.out(n(t+r)+" "+a(e+i)+" l")},O=function(t,e,r){return this.pdf.lines(t,e,r,null,null)},B=function(t,e,n,i,a,c,u,l){this.pdf.internal.out([r(o(n+t)),r(s(i+e)),r(o(a+t)),r(s(c+e)),r(o(u+t)),r(s(l+e)),"c"].join(" "))},M=function(t,e,r,n){for(var i=2*Math.PI,a=Math.PI/2;e>r;)e-=i;var o=Math.abs(r-e);o<i&&n&&(o=i-o);for(var s=[],c=n?-1:1,u=e;o>1e-5;){var l=u+c*Math.min(o,a);s.push(E.call(this,t,u,l)),o-=Math.abs(l-u),u=l}return s},E=function(t,e,r){var n=(r-e)/2,i=t*Math.cos(n),a=t*Math.sin(n),o=i,s=-a,c=o*o+s*s,u=c+o*i+s*a,l=4/3*(Math.sqrt(2*c*u)-u)/(o*a-s*i),h=o-l*s,f=s+l*o,d=h,p=-f,g=n+e,m=Math.cos(g),v=Math.sin(g);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:h*m-f*v,y2:h*v+f*m,x3:d*m-p*v,y3:d*v+p*m,x4:t*Math.cos(r),y4:t*Math.sin(r)}},q=function(t){return 180*t/Math.PI},D=function(t,e,r,n,i,a){var o=t+.5*(r-t),s=e+.5*(n-e),c=i+.5*(r-i),l=a+.5*(n-a),h=Math.min(t,i,o,c),f=Math.max(t,i,o,c),d=Math.min(e,a,s,l),p=Math.max(e,a,s,l);return new u(h,d,f-h,p-d)},R=function(t,e,r,n,i,a,o,s){var c,l,h,f,d,p,g,m,v,b,y,w,N,L,A=r-t,x=n-e,S=i-r,_=a-n,P=o-i,k=s-a;for(l=0;l<41;l++)v=(g=(h=t+(c=l/40)*A)+c*((d=r+c*S)-h))+c*(d+c*(i+c*P-d)-g),b=(m=(f=e+c*x)+c*((p=n+c*_)-f))+c*(p+c*(a+c*k-p)-m),0==l?(y=v,w=b,N=v,L=b):(y=Math.min(y,v),w=Math.min(w,b),N=Math.max(N,v),L=Math.max(L,b));return new u(Math.round(y),Math.round(w),Math.round(N-y),Math.round(L-w))},T=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var t,e,r=(t=this.ctx.lineDash,e=this.ctx.lineDashOffset,JSON.stringify({lineDash:t,lineDashOffset:e}));this.prevLineDash!==r&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=r)}}}(M.API);try{require("worker_threads").Worker}catch(t){}var Ut=Uint8Array,zt=Uint16Array,Ht=Uint32Array,Wt=new Ut([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Vt=new Ut([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Gt=new Ut([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yt=function(t,e){for(var r=new zt(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];var i=new Ht(r[30]);for(n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return[r,i]},Jt=Yt(Wt,2),Xt=Jt[0],Kt=Jt[1];Xt[28]=258,Kt[258]=28;for(var Zt=Yt(Vt,0),$t=Zt[0],Qt=Zt[1],te=new zt(32768),ee=0;ee<32768;++ee){var re=(43690&ee)>>>1|(21845&ee)<<1;re=(61680&(re=(52428&re)>>>2|(13107&re)<<2))>>>4|(3855&re)<<4,te[ee]=((65280&re)>>>8|(255&re)<<8)>>>1}var ne=function(t,e,r){for(var n=t.length,i=0,a=new zt(e);i<n;++i)++a[t[i]-1];var o,s=new zt(e);for(i=0;i<e;++i)s[i]=s[i-1]+a[i-1]<<1;if(r){o=new zt(1<<e);var c=15-e;for(i=0;i<n;++i)if(t[i])for(var u=i<<4|t[i],l=e-t[i],h=s[t[i]-1]++<<l,f=h|(1<<l)-1;h<=f;++h)o[te[h]>>>c]=u}else for(o=new zt(n),i=0;i<n;++i)o[i]=te[s[t[i]-1]++]>>>15-t[i];return o},ie=new Ut(288);for(ee=0;ee<144;++ee)ie[ee]=8;for(ee=144;ee<256;++ee)ie[ee]=9;for(ee=256;ee<280;++ee)ie[ee]=7;for(ee=280;ee<288;++ee)ie[ee]=8;var ae=new Ut(32);for(ee=0;ee<32;++ee)ae[ee]=5;var oe=ne(ie,9,0),se=ne(ie,9,1),ce=ne(ae,5,0),ue=ne(ae,5,1),le=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},he=function(t,e,r){var n=e/8>>0;return(t[n]|t[n+1]<<8)>>>(7&e)&r},fe=function(t,e){var r=e/8>>0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>>(7&e)},de=function(t){return(t/8>>0)+(7&t&&1)},pe=function(t,e,r){(null==e||e<0)&&(e=0),(null==r||r>t.length)&&(r=t.length);var n=new(t instanceof zt?zt:t instanceof Ht?Ht:Ut)(r-e);return n.set(t.subarray(e,r)),n},ge=function(t,e,r){r<<=7&e;var n=e/8>>0;t[n]|=r,t[n+1]|=r>>>8},me=function(t,e,r){r<<=7&e;var n=e/8>>0;t[n]|=r,t[n+1]|=r>>>8,t[n+2]|=r>>>16},ve=function(t,e){for(var r=[],n=0;n<t.length;++n)t[n]&&r.push({s:n,f:t[n]});var i=r.length,a=r.slice();if(!i)return[new Ut(0),0];if(1==i){var o=new Ut(r[0].s+1);return o[r[0].s]=1,[o,1]}r.sort((function(t,e){return t.f-e.f})),r.push({s:-1,f:25001});var s=r[0],c=r[1],u=0,l=1,h=2;for(r[0]={s:-1,f:s.f+c.f,l:s,r:c};l!=i-1;)s=r[r[u].f<r[h].f?u++:h++],c=r[u!=l&&r[u].f<r[h].f?u++:h++],r[l++]={s:-1,f:s.f+c.f,l:s,r:c};var f=a[0].s;for(n=1;n<i;++n)a[n].s>f&&(f=a[n].s);var d=new zt(f+1),p=be(r[l-1],d,0);if(p>e){n=0;var g=0,m=p-e,v=1<<m;for(a.sort((function(t,e){return d[e.s]-d[t.s]||t.f-e.f}));n<i;++n){var b=a[n].s;if(!(d[b]>e))break;g+=v-(1<<p-d[b]),d[b]=e}for(g>>>=m;g>0;){var y=a[n].s;d[y]<e?g-=1<<e-d[y]++-1:++n}for(;n>=0&&g;--n){var w=a[n].s;d[w]==e&&(--d[w],++g)}p=e}return[new Ut(d),p]},be=function(t,e,r){return-1==t.s?Math.max(be(t.l,e,r+1),be(t.r,e,r+1)):e[t.s]=r},ye=function(t){for(var e=t.length;e&&!t[--e];);for(var r=new zt(++e),n=0,i=t[0],a=1,o=function(t){r[n++]=t},s=1;s<=e;++s)if(t[s]==i&&s!=e)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=t[s]}return[r.subarray(0,n),e]},we=function(t,e){for(var r=0,n=0;n<e.length;++n)r+=t[n]*e[n];return r},Ne=function(t,e,r){var n=r.length,i=de(e+2);t[i]=255&n,t[i+1]=n>>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<n;++a)t[i+a+4]=r[a];return 8*(i+4+n)},Le=function(t,e,r,n,i,a,o,s,c,u,l){ge(e,l++,r),++i[256];for(var h=ve(i,15),f=h[0],d=h[1],p=ve(a,15),g=p[0],m=p[1],v=ye(f),b=v[0],y=v[1],w=ye(g),N=w[0],L=w[1],A=new zt(19),x=0;x<b.length;++x)A[31&b[x]]++;for(x=0;x<N.length;++x)A[31&N[x]]++;for(var S=ve(A,7),_=S[0],P=S[1],k=19;k>4&&!_[Gt[k-1]];--k);var F,I,C,j,O=u+5<<3,B=we(i,ie)+we(a,ae)+o,M=we(i,f)+we(a,g)+o+14+3*k+we(A,_)+(2*A[16]+3*A[17]+7*A[18]);if(O<=B&&O<=M)return Ne(e,l,t.subarray(c,c+u));if(ge(e,l,1+(M<B)),l+=2,M<B){F=ne(f,d,0),I=f,C=ne(g,m,0),j=g;var E=ne(_,P,0);ge(e,l,y-257),ge(e,l+5,L-1),ge(e,l+10,k-4),l+=14;for(x=0;x<k;++x)ge(e,l+3*x,_[Gt[x]]);l+=3*k;for(var q=[b,N],D=0;D<2;++D){var R=q[D];for(x=0;x<R.length;++x){var T=31&R[x];ge(e,l,E[T]),l+=_[T],T>15&&(ge(e,l,R[x]>>>5&127),l+=R[x]>>>12)}}}else F=oe,I=ie,C=ce,j=ae;for(x=0;x<s;++x)if(n[x]>255){T=n[x]>>>18&31;me(e,l,F[T+257]),l+=I[T+257],T>7&&(ge(e,l,n[x]>>>23&31),l+=Wt[T]);var U=31&n[x];me(e,l,C[U]),l+=j[U],U>3&&(me(e,l,n[x]>>>5&8191),l+=Vt[U])}else me(e,l,F[n[x]]),l+=I[n[x]];return me(e,l,F[256]),l+I[256]},Ae=new Ht([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),xe=new Ut(0),Se=function(t,e,r,n,i){return function(t,e,r,n,i,a){var o=t.length,s=new Ut(n+o+5*(1+Math.floor(o/7e3))+i),c=s.subarray(n,s.length-i),u=0;if(!e||o<8)for(var l=0;l<=o;l+=65535){var h=l+65535;h<o?u=Ne(c,u,t.subarray(l,h)):(c[l]=a,u=Ne(c,u,t.subarray(l,o)))}else{for(var f=Ae[e-1],d=f>>>13,p=8191&f,g=(1<<r)-1,m=new zt(32768),v=new zt(g+1),b=Math.ceil(r/3),y=2*b,w=function(e){return(t[e]^t[e+1]<<b^t[e+2]<<y)&g},N=new Ht(25e3),L=new zt(288),A=new zt(32),x=0,S=0,_=(l=0,0),P=0,k=0;l<o;++l){var F=w(l),I=32767&l,C=v[F];if(m[I]=C,v[F]=I,P<=l){var j=o-l;if((x>7e3||_>24576)&&j>423){u=Le(t,c,0,N,L,A,S,_,k,l-k,u),_=x=S=0,k=l;for(var O=0;O<286;++O)L[O]=0;for(O=0;O<30;++O)A[O]=0}var B=2,M=0,E=p,q=I-C&32767;if(j>2&&F==w(l-q))for(var D=Math.min(d,j)-1,R=Math.min(32767,l),T=Math.min(258,j);q<=R&&--E&&I!=C;){if(t[l+B]==t[l+B-q]){for(var U=0;U<T&&t[l+U]==t[l+U-q];++U);if(U>B){if(B=U,M=q,U>D)break;var z=Math.min(q,U-2),H=0;for(O=0;O<z;++O){var W=l-q+O+32768&32767,V=W-m[W]+32768&32767;V>H&&(H=V,C=W)}}}q+=(I=C)-(C=m[I])+32768&32767}if(M){N[_++]=268435456|Kt[B]<<18|Qt[M];var G=31&Kt[B],Y=31&Qt[M];S+=Wt[G]+Vt[Y],++L[257+G],++A[Y],P=l+B,++x}else N[_++]=t[l],++L[t[l]]}}u=Le(t,c,a,N,L,A,S,_,k,l-k,u),a||(u=Ne(c,u,xe))}return pe(s,0,n+de(u)+i)}(t,null==e.level?6:e.level,null==e.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(t.length)))):12+e.mem,r,n,!i)};function _e(t,e){void 0===e&&(e={});var r=function(){var t=1,e=0;return{p:function(r){for(var n=t,i=e,a=r.length,o=0;o!=a;){for(var s=Math.min(o+5552,a);o<s;++o)i+=n+=r[o];n%=65521,i%=65521}t=n,e=i},d:function(){return(t>>>8<<16|(255&e)<<8|e>>>8)+2*((255&t)<<23)}}}();r.p(t);var n=Se(t,e,2,4);return function(t,e){var r=e.level,n=0==r?0:r<6?1:9==r?3:2;t[0]=120,t[1]=n<<6|(n?32-2*n:1)}(n,e),function(t,e,r){for(;r;++e)t[e]=r,r>>>=8}(n,n.length-4,r.d()),n}function Pe(t,e){return function(t,e,r){var n=t.length,i=!e||r,a=!r||r.i;r||(r={}),e||(e=new Ut(3*n));var o=function(t){var r=e.length;if(t>r){var n=new Ut(Math.max(2*r,t));n.set(e),e=n}},s=r.f||0,c=r.p||0,u=r.b||0,l=r.l,h=r.d,f=r.m,d=r.n,p=8*n;do{if(!l){r.f=s=he(t,c,1);var g=he(t,c+1,3);if(c+=3,!g){var m=t[(P=de(c)+4)-4]|t[P-3]<<8,v=P+m;if(v>n){if(a)throw"unexpected EOF";break}i&&o(u+m),e.set(t.subarray(P,v),u),r.b=u+=m,r.p=c=8*v;continue}if(1==g)l=se,h=ue,f=9,d=5;else{if(2!=g)throw"invalid block type";var b=he(t,c,31)+257,y=he(t,c+10,15)+4,w=b+he(t,c+5,31)+1;c+=14;for(var N=new Ut(w),L=new Ut(19),A=0;A<y;++A)L[Gt[A]]=he(t,c+3*A,7);c+=3*y;var x=le(L),S=(1<<x)-1;if(!a&&c+w*(x+7)>p)break;var _=ne(L,x,1);for(A=0;A<w;){var P,k=_[he(t,c,S)];if(c+=15&k,(P=k>>>4)<16)N[A++]=P;else{var F=0,I=0;for(16==P?(I=3+he(t,c,3),c+=2,F=N[A-1]):17==P?(I=3+he(t,c,7),c+=3):18==P&&(I=11+he(t,c,127),c+=7);I--;)N[A++]=F}}var C=N.subarray(0,b),j=N.subarray(b);f=le(C),d=le(j),l=ne(C,f,1),h=ne(j,d,1)}if(c>p)throw"unexpected EOF"}i&&o(u+131072);for(var O=(1<<f)-1,B=(1<<d)-1,M=f+d+18;a||c+M<p;){var E=(F=l[fe(t,c)&O])>>>4;if((c+=15&F)>p)throw"unexpected EOF";if(!F)throw"invalid length/literal";if(E<256)e[u++]=E;else{if(256==E){l=null;break}var q=E-254;if(E>264){var D=Wt[A=E-257];q=he(t,c,(1<<D)-1)+Xt[A],c+=D}var R=h[fe(t,c)&B],T=R>>>4;if(!R)throw"invalid distance";c+=15&R;j=$t[T];if(T>3){D=Vt[T];j+=fe(t,c)&(1<<D)-1,c+=D}if(c>p)throw"unexpected EOF";i&&o(u+131072);for(var U=u+q;u<U;u+=4)e[u]=e[u-j],e[u+1]=e[u+1-j],e[u+2]=e[u+2-j],e[u+3]=e[u+3-j];u=U}}r.l=l,r.p=c,r.b=u,l&&(s=1,r.m=f,r.d=h,r.n=d)}while(!s);return u==e.length?e:pe(e,0,u)}((function(t){if(8!=(15&t[0])||t[0]>>>4>7||(t[0]<<8|t[1])%31)throw"invalid zlib data";if(32&t[1])throw"invalid zlib data: preset dictionaries not supported"}(t),t.subarray(2,-4)),e)}
/**
   * @license
   * jsPDF filters PlugIn
   * Copyright (c) 2014 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */!function(t){var e=function(t){var e,r,n,i,a,o,s,c,u,l;for(/[^\x00-\xFF]/.test(t),r=[],n=0,i=(t+=e="\0\0\0\0".slice(t.length%4||4)).length;i>n;n+=4)0!==(a=(t.charCodeAt(n)<<24)+(t.charCodeAt(n+1)<<16)+(t.charCodeAt(n+2)<<8)+t.charCodeAt(n+3))?(o=(a=((a=((a=((a=(a-(l=a%85))/85)-(u=a%85))/85)-(c=a%85))/85)-(s=a%85))/85)%85,r.push(o+33,s+33,c+33,u+33,l+33)):r.push(122);return function(t,e){for(var r=e;r>0;r--)t.pop()}(r,e.length),String.fromCharCode.apply(String,r)+"~>"},r=function(t){var e,r,n,i,a,o=String,s="length",c=255,u="charCodeAt",l="slice",h="replace";for(t[l](-2),t=t[l](0,-2)[h](/\s/g,"")[h]("z","!!!!!"),n=[],i=0,a=(t+=e="uuuuu"[l](t[s]%5||5))[s];a>i;i+=5)r=52200625*(t[u](i)-33)+614125*(t[u](i+1)-33)+7225*(t[u](i+2)-33)+85*(t[u](i+3)-33)+(t[u](i+4)-33),n.push(c&r>>24,c&r>>16,c&r>>8,c&r);return function(t,e){for(var r=e;r>0;r--)t.pop()}(n,e[s]),o.fromCharCode.apply(o,n)},n=function(t){var e=new RegExp(/^([0-9A-Fa-f]{2})+$/);if(-1!==(t=t.replace(/\s/g,"")).indexOf(">")&&(t=t.substr(0,t.indexOf(">"))),t.length%2&&(t+="0"),!1===e.test(t))return"";for(var r="",n=0;n<t.length;n+=2)r+=String.fromCharCode("0x"+(t[n]+t[n+1]));return r},i=function(t){for(var e=new Uint8Array(t.length),r=t.length;r--;)e[r]=t.charCodeAt(r);return t=(e=_e(e)).reduce((function(t,e){return t+String.fromCharCode(e)}),"")};t.processDataByFilters=function(t,a){var o=0,s=t||"",c=[];for("string"==typeof(a=a||[])&&(a=[a]),o=0;o<a.length;o+=1)switch(a[o]){case"ASCII85Decode":case"/ASCII85Decode":s=r(s),c.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":s=e(s),c.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":s=n(s),c.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":s=s.split("").map((function(t){return("0"+t.charCodeAt().toString(16)).slice(-2)})).join("")+">",c.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":s=i(s),c.push("/FlateDecode");break;default:throw new Error('The filter: "'+a[o]+'" is not implemented')}return{data:s,reverseChain:c.reverse().join(" ")}}}(M.API),
/**
   * @license
   * jsPDF fileloading PlugIn
   * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){t.loadFile=function(t,e,r){return function(t,e,r){e=!1!==e,r="function"==typeof r?r:function(){};var n=void 0;try{n=function(t,e,r){var n=new XMLHttpRequest,i=0,a=function(t){var e=t.length,r=[],n=String.fromCharCode;for(i=0;i<e;i+=1)r.push(n(255&t.charCodeAt(i)));return r.join("")};if(n.open("GET",t,!e),n.overrideMimeType("text/plain; charset=x-user-defined"),!1===e&&(n.onload=function(){200===n.status?r(a(this.responseText)):r(void 0)}),n.send(null),e&&200===n.status)return a(n.responseText)}(t,e,r)}catch(t){}return n}(t,e,r)},t.loadImageFile=t.loadFile}(M.API),function(n){function i(){return(r.html2canvas?Promise.resolve(r.html2canvas):"object"===(void 0===t?"undefined":e(t))&&"undefined"!=typeof module?new Promise((function(t,e){try{t(require("html2canvas"))}catch(t){e(t)}})):"function"==typeof define&&define.amd?new Promise((function(t,e){try{require(["html2canvas"],t)}catch(t){e(t)}})):Promise.reject(new Error("Could not load html2canvas"))).catch((function(t){return Promise.reject(new Error("Could not load html2canvas: "+t))})).then((function(t){return t.default?t.default:t}))}function a(){return(r.DOMPurify?Promise.resolve(r.DOMPurify):"object"===(void 0===t?"undefined":e(t))&&"undefined"!=typeof module?new Promise((function(t,e){try{t(require("dompurify"))}catch(t){e(t)}})):"function"==typeof define&&define.amd?new Promise((function(t,e){try{require(["dompurify"],t)}catch(t){e(t)}})):Promise.reject(new Error("Could not load dompurify"))).catch((function(t){return Promise.reject(new Error("Could not load dompurify: "+t))})).then((function(t){return t.default?t.default:t}))}var o=function(t){var r=e(t);return"undefined"===r?"undefined":"string"===r||t instanceof String?"string":"number"===r||t instanceof Number?"number":"function"===r||t instanceof Function?"function":t&&t.constructor===Array?"array":t&&1===t.nodeType?"element":"object"===r?"object":"unknown"},s=function(t,e){var r=document.createElement(t);for(var n in e.className&&(r.className=e.className),e.innerHTML&&e.dompurify&&(r.innerHTML=e.dompurify.sanitize(e.innerHTML)),e.style)r.style[n]=e.style[n];return r},c=function t(e){var r=Object.assign(t.convert(Promise.resolve()),JSON.parse(JSON.stringify(t.template))),n=t.convert(Promise.resolve(),r);return n=(n=n.setProgress(1,t,1,[t])).set(e)};(c.prototype=Object.create(Promise.prototype)).constructor=c,c.convert=function(t,e){return t.__proto__=e||c.prototype,t},c.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},c.prototype.from=function(t,e){return this.then((function(){switch(e=e||function(t){switch(o(t)){case"string":return"string";case"element":return"canvas"===t.nodeName.toLowerCase()?"canvas":"element";default:return"unknown"}}(t)){case"string":return this.then(a).then((function(e){return this.set({src:s("div",{innerHTML:t,dompurify:e})})}));case"element":return this.set({src:t});case"canvas":return this.set({canvas:t});case"img":return this.set({img:t});default:return this.error("Unknown source type.")}}))},c.prototype.to=function(t){switch(t){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},c.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then((function(){var t={position:"relative",display:"inline-block",width:("number"!=typeof this.opt.width||isNaN(this.opt.width)||"number"!=typeof this.opt.windowWidth||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},e=function t(e,r){for(var n=3===e.nodeType?document.createTextNode(e.nodeValue):e.cloneNode(!1),i=e.firstChild;i;i=i.nextSibling)!0!==r&&1===i.nodeType&&"SCRIPT"===i.nodeName||n.appendChild(t(i,r));return 1===e.nodeType&&("CANVAS"===e.nodeName?(n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(e,0,0)):"TEXTAREA"!==e.nodeName&&"SELECT"!==e.nodeName||(n.value=e.value),n.addEventListener("load",(function(){n.scrollTop=e.scrollTop,n.scrollLeft=e.scrollLeft}),!0)),n}(this.prop.src,this.opt.html2canvas.javascriptEnabled);"BODY"===e.tagName&&(t.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=s("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=s("div",{className:"html2pdf__container",style:t}),this.prop.container.appendChild(e),this.prop.container.firstChild.appendChild(s("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"}))},c.prototype.toCanvas=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(i).then((function(t){var e=Object.assign({},this.opt.html2canvas);return delete e.onrendered,t(this.prop.container,e)})).then((function(t){(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},c.prototype.toContext2d=function(){var t=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(t).then(i).then((function(t){var e=this.opt.jsPDF,r=this.opt.fontFaces,n="number"!=typeof this.opt.width||isNaN(this.opt.width)||"number"!=typeof this.opt.windowWidth||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,i=Object.assign({async:!0,allowTaint:!0,scale:n,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete i.onrendered,e.context2d.autoPaging=void 0===this.opt.autoPaging||this.opt.autoPaging,e.context2d.posX=this.opt.x,e.context2d.posY=this.opt.y,e.context2d.margin=this.opt.margin,e.context2d.fontFaces=r,r)for(var a=0;a<r.length;++a){var o=r[a],s=o.src.find((function(t){return"truetype"===t.format}));s&&e.addFont(s.url,o.ref.name,o.ref.style)}return i.windowHeight=i.windowHeight||0,i.windowHeight=0==i.windowHeight?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):i.windowHeight,e.context2d.save(!0),t(this.prop.container,i)})).then((function(t){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(t),this.prop.canvas=t,document.body.removeChild(this.prop.overlay)}))},c.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then((function(){var t=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=t}))},c.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then((function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF}))},c.prototype.output=function(t,e,r){return"img"===(r=r||"pdf").toLowerCase()||"image"===r.toLowerCase()?this.outputImg(t,e):this.outputPdf(t,e)},c.prototype.outputPdf=function(t,e){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){return this.prop.pdf.output(t,e)}))},c.prototype.outputImg=function(t){return this.thenList([function(){return this.prop.img||this.toImg()}]).then((function(){switch(t){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+t+'" is not supported.'}}))},c.prototype.save=function(t){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(t?{filename:t}:null).then((function(){this.prop.pdf.save(this.opt.filename)}))},c.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){this.prop.callback(this.prop.pdf)}))},c.prototype.set=function(t){if("object"!==o(t))return this;var e=Object.keys(t||{}).map((function(e){if(e in c.template.prop)return function(){this.prop[e]=t[e]};switch(e){case"margin":return this.setMargin.bind(this,t.margin);case"jsPDF":return function(){return this.opt.jsPDF=t.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,t.pageSize);default:return function(){this.opt[e]=t[e]}}}),this);return this.then((function(){return this.thenList(e)}))},c.prototype.get=function(t,e){return this.then((function(){var r=t in c.template.prop?this.prop[t]:this.opt[t];return e?e(r):r}))},c.prototype.setMargin=function(t){return this.then((function(){switch(o(t)){case"number":t=[t,t,t,t];case"array":if(2===t.length&&(t=[t[0],t[1],t[0],t[1]]),4===t.length)break;default:return this.error("Invalid margin array.")}this.opt.margin=t})).then(this.setPageSize)},c.prototype.setPageSize=function(t){function e(t,e){return Math.floor(t*e/72*96)}return this.then((function(){(t=t||M.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(t.inner={width:t.width-this.opt.margin[1]-this.opt.margin[3],height:t.height-this.opt.margin[0]-this.opt.margin[2]},t.inner.px={width:e(t.inner.width,t.k),height:e(t.inner.height,t.k)},t.inner.ratio=t.inner.height/t.inner.width),this.prop.pageSize=t}))},c.prototype.setProgress=function(t,e,r,n){return null!=t&&(this.progress.val=t),null!=e&&(this.progress.state=e),null!=r&&(this.progress.n=r),null!=n&&(this.progress.stack=n),this.progress.ratio=this.progress.val/this.progress.state,this},c.prototype.updateProgress=function(t,e,r,n){return this.setProgress(t?this.progress.val+t:null,e||null,r?this.progress.n+r:null,n?this.progress.stack.concat(n):null)},c.prototype.then=function(t,e){var r=this;return this.thenCore(t,e,(function(t,e){return r.updateProgress(null,null,1,[t]),Promise.prototype.then.call(this,(function(e){return r.updateProgress(null,t),e})).then(t,e).then((function(t){return r.updateProgress(1),t}))}))},c.prototype.thenCore=function(t,e,r){r=r||Promise.prototype.then;t&&(t=t.bind(this)),e&&(e=e.bind(this));var n=-1!==Promise.toString().indexOf("[native code]")&&"Promise"===Promise.name?this:c.convert(Object.assign({},this),Promise.prototype),i=r.call(n,t,e);return c.convert(i,this.__proto__)},c.prototype.thenExternal=function(t,e){return Promise.prototype.then.call(this,t,e)},c.prototype.thenList=function(t){var e=this;return t.forEach((function(t){e=e.thenCore(t)})),e},c.prototype.catch=function(t){t&&(t=t.bind(this));var e=Promise.prototype.catch.call(this,t);return c.convert(e,this)},c.prototype.catchExternal=function(t){return Promise.prototype.catch.call(this,t)},c.prototype.error=function(t){return this.then((function(){throw new Error(t)}))},c.prototype.using=c.prototype.set,c.prototype.saveAs=c.prototype.save,c.prototype.export=c.prototype.output,c.prototype.run=c.prototype.then,M.getPageSize=function(t,r,n){if("object"===e(t)){var i=t;t=i.orientation,r=i.unit||r,n=i.format||n}r=r||"mm",n=n||"a4",t=(""+(t||"P")).toLowerCase();var a,o=(""+n).toLowerCase(),s={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(r){case"pt":a=1;break;case"mm":a=72/25.4;break;case"cm":a=72/2.54;break;case"in":a=72;break;case"px":a=.75;break;case"pc":case"em":a=12;break;case"ex":a=6;break;default:throw"Invalid unit: "+r}var c,u=0,l=0;if(s.hasOwnProperty(o))u=s[o][1]/a,l=s[o][0]/a;else try{u=n[1],l=n[0]}catch(t){throw new Error("Invalid format: "+n)}if("p"===t||"portrait"===t)t="p",l>u&&(c=l,l=u,u=c);else{if("l"!==t&&"landscape"!==t)throw"Invalid orientation: "+t;t="l",u>l&&(c=l,l=u,u=c)}return{width:l,height:u,unit:r,k:a,orientation:t}},n.html=function(t,e){(e=e||{}).callback=e.callback||function(){},e.html2canvas=e.html2canvas||{},e.html2canvas.canvas=e.html2canvas.canvas||this.canvas,e.jsPDF=e.jsPDF||this,e.fontFaces=e.fontFaces?e.fontFaces.map(Ct):null;var r=new c(e);return e.worker?r:r.from(t).doCallback()}}(M.API),
/**
   * @license
   * ====================================================================
   * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * ====================================================================
   */
function(t){var e,r,n;t.addJS=function(t){return n=t,this.internal.events.subscribe("postPutResources",(function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(e+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),r=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+n+")"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){void 0!==e&&void 0!==r&&this.internal.out("/Names <</JavaScript "+e+" 0 R>>")})),this}}(M.API),
/**
   * @license
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var e;t.events.push(["postPutResources",function(){var t=this,r=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var n=t.outline.render().split(/\r\n/),i=0;i<n.length;i++){var a=n[i],o=r.exec(a);if(null!=o){var s=o[1];t.internal.newObjectDeferredBegin(s,!1)}t.internal.write(a)}if(this.outline.createNamedDestinations){var c=this.internal.pages.length,u=[];for(i=0;i<c;i++){var l=t.internal.newObject();u.push(l);var h=t.internal.getPageInfo(i+1);t.internal.write("<< /D["+h.objId+" 0 R /XYZ null null null]>> endobj")}var f=t.internal.newObject();t.internal.write("<< /Names [ ");for(i=0;i<u.length;i++)t.internal.write("(page_"+(i+1)+")"+u[i]+" 0 R");t.internal.write(" ] >>","endobj"),e=t.internal.newObject(),t.internal.write("<< /Dests "+f+" 0 R"),t.internal.write(">>","endobj")}}]),t.events.push(["putCatalog",function(){this.outline.root.children.length>0&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+e+" 0 R"))}]),t.events.push(["initialized",function(){var t=this;t.outline={createNamedDestinations:!1,root:{children:[]}},t.outline.add=function(t,e,r){var n={title:e,options:r,children:[]};return null==t&&(t=this.root),t.children.push(n),n},t.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=t,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},t.outline.genIds_r=function(e){e.id=t.internal.newObjectDeferred();for(var r=0;r<e.children.length;r++)this.genIds_r(e.children[r])},t.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),t.children.length>0&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},t.outline.renderItems=function(e){for(var r=this.ctx.pdf.internal.getVerticalCoordinateString,n=0;n<e.children.length;n++){var i=e.children[n];this.objStart(i),this.line("/Title "+this.makeString(i.title)),this.line("/Parent "+this.makeRef(e)),n>0&&this.line("/Prev "+this.makeRef(e.children[n-1])),n<e.children.length-1&&this.line("/Next "+this.makeRef(e.children[n+1])),i.children.length>0&&(this.line("/First "+this.makeRef(i.children[0])),this.line("/Last "+this.makeRef(i.children[i.children.length-1])));var a=this.count=this.count_r({count:0},i);if(a>0&&this.line("/Count "+a),i.options&&i.options.pageNumber){var o=t.internal.getPageInfo(i.options.pageNumber);this.line("/Dest ["+o.objId+" 0 R /XYZ 0 "+r(0)+" 0]")}this.objEnd()}for(var s=0;s<e.children.length;s++)this.renderItems(e.children[s])},t.outline.line=function(t){this.ctx.val+=t+"\r\n"},t.outline.makeRef=function(t){return t.id+" 0 R"},t.outline.makeString=function(e){return"("+t.internal.pdfEscape(e)+")"},t.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},t.outline.objEnd=function(){this.ctx.val+=">> \r\nendobj\r\n"},t.outline.count_r=function(t,e){for(var r=0;r<e.children.length;r++)t.count++,this.count_r(t,e.children[r]);return t.count}}])}(M.API),
/**
   * @license
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var e=[192,193,194,195,196,197,198,199];t.processJPEG=function(t,r,n,i,a,o){var s,c=this.decode.DCT_DECODE,u=null;if("string"==typeof t||this.__addimage__.isArrayBuffer(t)||this.__addimage__.isArrayBufferView(t)){switch(t=a||t,t=this.__addimage__.isArrayBuffer(t)?new Uint8Array(t):t,(s=function(t){for(var r,n=256*t.charCodeAt(4)+t.charCodeAt(5),i=t.length,a={width:0,height:0,numcomponents:1},o=4;o<i;o+=2){if(o+=n,-1!==e.indexOf(t.charCodeAt(o+1))){r=256*t.charCodeAt(o+5)+t.charCodeAt(o+6),a={width:256*t.charCodeAt(o+7)+t.charCodeAt(o+8),height:r,numcomponents:t.charCodeAt(o+9)};break}n=256*t.charCodeAt(o+2)+t.charCodeAt(o+3)}return a}(t=this.__addimage__.isArrayBufferView(t)?this.__addimage__.arrayBufferToBinaryString(t):t)).numcomponents){case 1:o=this.color_spaces.DEVICE_GRAY;break;case 4:o=this.color_spaces.DEVICE_CMYK;break;case 3:o=this.color_spaces.DEVICE_RGB}u={data:t,width:s.width,height:s.height,colorSpace:o,bitsPerComponent:8,filter:c,index:r,alias:n}}return u}}(M.API);var ke,Fe,Ie,Ce,je,Oe=function(){var t,e,n;function i(t){var e,r,n,i,a,o,s,c,u,l,h,f,d,p;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},o=null;;){switch(e=this.readUInt32(),u=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":o&&this.animation.frames.push(o),this.pos+=4,o={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},a=this.readUInt16(),i=this.readUInt16()||100,o.delay=1e3*a/i,o.disposeOp=this.data[this.pos++],o.blendOp=this.data[this.pos++],o.data=[];break;case"IDAT":case"fdAT":for("fdAT"===u&&(this.pos+=4,e-=4),t=(null!=o?o.data:void 0)||this.imgData,f=0;0<=e?f<e:f>e;0<=e?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(n=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>n)throw new Error("More transparent colors than palette size");if((l=n-this.transparency.indexed.length)>0)for(d=0;0<=l?d<l:d>l;0<=l?++d:--d)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":s=(h=this.read(e)).indexOf(0),c=String.fromCharCode.apply(String,h.slice(0,s)),this.text[c]=String.fromCharCode.apply(String,h.slice(s+1));break;case"IEND":return o&&this.animation.frames.push(o),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(p=this.colorType)||6===p,r=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*r,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}i.prototype.read=function(t){var e,r;for(r=[],e=0;0<=t?e<t:e>t;0<=t?++e:--e)r.push(this.data[this.pos++]);return r},i.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.decodePixels=function(t){var e=this.pixelBitlength/8,r=new Uint8Array(this.width*this.height*e),n=0,i=this;if(null==t&&(t=this.imgData),0===t.length)return new Uint8Array(0);function a(a,o,s,c){var u,l,h,f,d,p,g,m,v,b,y,w,N,L,A,x,S,_,P,k,F,I=Math.ceil((i.width-a)/s),C=Math.ceil((i.height-o)/c),j=i.width==I&&i.height==C;for(L=e*I,w=j?r:new Uint8Array(L*C),p=t.length,N=0,l=0;N<C&&n<p;){switch(t[n++]){case 0:for(f=S=0;S<L;f=S+=1)w[l++]=t[n++];break;case 1:for(f=_=0;_<L;f=_+=1)u=t[n++],d=f<e?0:w[l-e],w[l++]=(u+d)%256;break;case 2:for(f=P=0;P<L;f=P+=1)u=t[n++],h=(f-f%e)/e,A=N&&w[(N-1)*L+h*e+f%e],w[l++]=(A+u)%256;break;case 3:for(f=k=0;k<L;f=k+=1)u=t[n++],h=(f-f%e)/e,d=f<e?0:w[l-e],A=N&&w[(N-1)*L+h*e+f%e],w[l++]=(u+Math.floor((d+A)/2))%256;break;case 4:for(f=F=0;F<L;f=F+=1)u=t[n++],h=(f-f%e)/e,d=f<e?0:w[l-e],0===N?A=x=0:(A=w[(N-1)*L+h*e+f%e],x=h&&w[(N-1)*L+(h-1)*e+f%e]),g=d+A-x,m=Math.abs(g-d),b=Math.abs(g-A),y=Math.abs(g-x),v=m<=b&&m<=y?d:b<=y?A:x,w[l++]=(u+v)%256;break;default:throw new Error("Invalid filter algorithm: "+t[n-1])}if(!j){var O=((o+N*c)*i.width+a)*e,B=N*L;for(f=0;f<I;f+=1){for(var M=0;M<e;M+=1)r[O++]=w[B++];O+=(s-1)*e}}N++}}return t=Pe(t),1==i.interlaceMethod?(a(0,0,8,8),a(4,0,8,8),a(0,4,4,8),a(2,0,4,4),a(0,2,2,4),a(1,0,2,2),a(0,1,1,2)):a(0,0,1,1),r},i.prototype.decodePalette=function(){var t,e,r,n,i,a,o,s,c;for(r=this.palette,a=this.transparency.indexed||[],i=new Uint8Array((a.length||0)+r.length),n=0,t=0,e=o=0,s=r.length;o<s;e=o+=3)i[n++]=r[e],i[n++]=r[e+1],i[n++]=r[e+2],i[n++]=null!=(c=a[t++])?c:255;return i},i.prototype.copyToImageData=function(t,e){var r,n,i,a,o,s,c,u,l,h,f;if(n=this.colors,l=null,r=this.hasAlphaChannel,this.palette.length&&(l=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),n=4,r=!0),u=(i=t.data||t).length,o=l||e,a=s=0,1===n)for(;a<u;)c=l?4*e[a/4]:s,h=o[c++],i[a++]=h,i[a++]=h,i[a++]=h,i[a++]=r?o[c++]:255,s=c;else for(;a<u;)c=l?4*e[a/4]:s,i[a++]=o[c++],i[a++]=o[c++],i[a++]=o[c++],i[a++]=r?o[c++]:255,s=c},i.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};var a=function(){if("[object Window]"===Object.prototype.toString.call(r)){try{e=r.document.createElement("canvas"),n=e.getContext("2d")}catch(t){return!1}return!0}return!1};return a(),t=function(t){var r;if(!0===a())return n.width=t.width,n.height=t.height,n.clearRect(0,0,t.width,t.height),n.putImageData(t,0,0),(r=new Image).src=e.toDataURL(),r;throw new Error("This method requires a Browser with Canvas-capability.")},i.prototype.decodeFrames=function(e){var r,n,i,a,o,s,c,u;if(this.animation){for(u=[],n=o=0,s=(c=this.animation.frames).length;o<s;n=++o)r=c[n],i=e.createImageData(r.width,r.height),a=this.decodePixels(new Uint8Array(r.data)),this.copyToImageData(i,a),r.imageData=i,u.push(r.image=t(i));return u}},i.prototype.renderFrame=function(t,e){var r,n,i;return r=(n=this.animation.frames)[e],i=n[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===r.blendOp&&t.clearRect(r.xOffset,r.yOffset,r.width,r.height),t.drawImage(r.image,r.xOffset,r.yOffset)},i.prototype.animate=function(t){var e,r,n,i,a,o,s=this;return r=0,o=this.animation,i=o.numFrames,n=o.frames,a=o.numPlays,(e=function(){var o,c;if(o=r++%i,c=n[o],s.renderFrame(t,o),i>1&&r/i<a)return s.animation._timeout=setTimeout(e,c.delay)})()},i.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},i.prototype.render=function(t){var e,r;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(r=e.createImageData(this.width,this.height),this.copyToImageData(r,this.decodePixels()),e.putImageData(r,0,0))},i}();
/**
   * @license
   *
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * ====================================================================
   */
/**
   * @license
   * (c) Dean McNamee <dean@gmail.com>, 2013.
   *
   * https://github.com/deanm/omggif
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to
   * deal in the Software without restriction, including without limitation the
   * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
   * sell copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
   * IN THE SOFTWARE.
   *
   * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
   * including animation and compression.  It does not rely on any specific
   * underlying system, so should run in the browser, Node, or Plask.
   */
function Be(t){var e=0;if(71!==t[e++]||73!==t[e++]||70!==t[e++]||56!==t[e++]||56!=(t[e++]+1&253)||97!==t[e++])throw new Error("Invalid GIF 87a/89a header.");var r=t[e++]|t[e++]<<8,n=t[e++]|t[e++]<<8,i=t[e++],a=i>>7,o=1<<(7&i)+1;t[e++];t[e++];var s=null,c=null;a&&(s=e,c=o,e+=3*o);var u=!0,l=[],h=0,f=null,d=0,p=null;for(this.width=r,this.height=n;u&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(11!==t[e]||78==t[e+1]&&69==t[e+2]&&84==t[e+3]&&83==t[e+4]&&67==t[e+5]&&65==t[e+6]&&80==t[e+7]&&69==t[e+8]&&50==t[e+9]&&46==t[e+10]&&48==t[e+11]&&3==t[e+12]&&1==t[e+13]&&0==t[e+16])e+=14,p=t[e++]|t[e++]<<8,e++;else for(e+=12;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;case 249:if(4!==t[e++]||0!==t[e+4])throw new Error("Invalid graphics extension block.");var g=t[e++];h=t[e++]|t[e++]<<8,f=t[e++],0==(1&g)&&(f=null),d=g>>2&7,e++;break;case 254:for(;;){if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var m=t[e++]|t[e++]<<8,v=t[e++]|t[e++]<<8,b=t[e++]|t[e++]<<8,y=t[e++]|t[e++]<<8,w=t[e++],N=w>>6&1,L=1<<(7&w)+1,A=s,x=c,S=!1;if(w>>7){S=!0;A=e,x=L,e+=3*L}var _=e;for(e++;;){var P;if(!((P=t[e++])>=0))throw Error("Invalid block size");if(0===P)break;e+=P}l.push({x:m,y:v,width:b,height:y,has_local_palette:S,palette_offset:A,palette_size:x,data_offset:_,data_length:e-_,transparent_index:f,interlaced:!!N,delay:h,disposal:d});break;case 59:u=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return l.length},this.loopCount=function(){return p},this.frameInfo=function(t){if(t<0||t>=l.length)throw new Error("Frame index out of range.");return l[t]},this.decodeAndBlitFrameBGRA=function(e,n){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);Me(t,i.data_offset,o,a);var s=i.palette_offset,c=i.transparent_index;null===c&&(c=256);var u=i.width,l=r-u,h=u,f=4*(i.y*r+i.x),d=4*((i.y+i.height)*r+i.x),p=f,g=4*l;!0===i.interlaced&&(g+=4*r*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===h&&(h=u,(p+=g)>=d&&(g=4*l+4*r*(m-1),p=f+(u+l)*(m<<1),m>>=1)),y===c)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];n[p++]=L,n[p++]=N,n[p++]=w,n[p++]=255}--h}},this.decodeAndBlitFrameRGBA=function(e,n){var i=this.frameInfo(e),a=i.width*i.height,o=new Uint8Array(a);Me(t,i.data_offset,o,a);var s=i.palette_offset,c=i.transparent_index;null===c&&(c=256);var u=i.width,l=r-u,h=u,f=4*(i.y*r+i.x),d=4*((i.y+i.height)*r+i.x),p=f,g=4*l;!0===i.interlaced&&(g+=4*r*7);for(var m=8,v=0,b=o.length;v<b;++v){var y=o[v];if(0===h&&(h=u,(p+=g)>=d&&(g=4*l+4*r*(m-1),p=f+(u+l)*(m<<1),m>>=1)),y===c)p+=4;else{var w=t[s+3*y],N=t[s+3*y+1],L=t[s+3*y+2];n[p++]=w,n[p++]=N,n[p++]=L,n[p++]=255}--h}}}function Me(t,e,r,n){for(var a=t[e++],o=1<<a,s=o+1,c=s+1,u=a+1,l=(1<<u)-1,h=0,f=0,d=0,p=t[e++],g=new Int32Array(4096),m=null;;){for(;h<16&&0!==p;)f|=t[e++]<<h,h+=8,1===p?p=t[e++]:--p;if(h<u)break;var v=f&l;if(f>>=u,h-=u,v!==o){if(v===s)break;for(var b=v<c?v:m,y=0,w=b;w>o;)w=g[w]>>8,++y;var N=w;if(d+y+(b!==v?1:0)>n)return void i.log("Warning, gif stream longer than expected.");r[d++]=N;var L=d+=y;for(b!==v&&(r[d++]=N),w=b;y--;)w=g[w],r[--L]=255&w,w>>=8;null!==m&&c<4096&&(g[c++]=m<<8|N,c>=l+1&&u<12&&(++u,l=l<<1|1)),m=v}else c=s+1,l=(1<<(u=a+1))-1,m=null}return d!==n&&i.log("Warning, gif stream shorter than expected."),r}
/**
   * @license
    Copyright (c) 2008, Adobe Systems Incorporated
    All rights reserved.

    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are
    met:

    * Redistributions of source code must retain the above copyright notice, 
      this list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the 
      documentation and/or other materials provided with the distribution.
    
    * Neither the name of Adobe Systems Incorporated nor the names of its 
      contributors may be used to endorse or promote products derived from 
      this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
    IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
    THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */function Ee(t){var e,r,n,i,a,o=Math.floor,s=new Array(64),c=new Array(64),u=new Array(64),l=new Array(64),h=new Array(65535),f=new Array(65535),d=new Array(64),p=new Array(64),g=[],m=0,v=7,b=new Array(64),y=new Array(64),w=new Array(64),N=new Array(256),L=new Array(2048),A=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],x=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],S=[0,1,2,3,4,5,6,7,8,9,10,11],_=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],P=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],k=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],F=[0,1,2,3,4,5,6,7,8,9,10,11],I=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],C=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function j(t,e){for(var r=0,n=0,i=new Array,a=1;a<=16;a++){for(var o=1;o<=t[a];o++)i[e[n]]=[],i[e[n]][0]=r,i[e[n]][1]=a,n++,r++;r*=2}return i}function O(t){for(var e=t[0],r=t[1]-1;r>=0;)e&1<<r&&(m|=1<<v),r--,--v<0&&(255==m?(B(255),B(0)):B(m),v=7,m=0)}function B(t){g.push(t)}function M(t){B(t>>8&255),B(255&t)}function E(t,e,r,n,i){for(var a,o=i[0],s=i[240],c=function(t,e){var r,n,i,a,o,s,c,u,l,h,f=0;for(l=0;l<8;++l){r=t[f],n=t[f+1],i=t[f+2],a=t[f+3],o=t[f+4],s=t[f+5],c=t[f+6];var p=r+(u=t[f+7]),g=r-u,m=n+c,v=n-c,b=i+s,y=i-s,w=a+o,N=a-o,L=p+w,A=p-w,x=m+b,S=m-b;t[f]=L+x,t[f+4]=L-x;var _=.707106781*(S+A);t[f+2]=A+_,t[f+6]=A-_;var P=.382683433*((L=N+y)-(S=v+g)),k=.5411961*L+P,F=1.306562965*S+P,I=.707106781*(x=y+v),C=g+I,j=g-I;t[f+5]=j+k,t[f+3]=j-k,t[f+1]=C+F,t[f+7]=C-F,f+=8}for(f=0,l=0;l<8;++l){r=t[f],n=t[f+8],i=t[f+16],a=t[f+24],o=t[f+32],s=t[f+40],c=t[f+48];var O=r+(u=t[f+56]),B=r-u,M=n+c,E=n-c,q=i+s,D=i-s,R=a+o,T=a-o,U=O+R,z=O-R,H=M+q,W=M-q;t[f]=U+H,t[f+32]=U-H;var V=.707106781*(W+z);t[f+16]=z+V,t[f+48]=z-V;var G=.382683433*((U=T+D)-(W=E+B)),Y=.5411961*U+G,J=1.306562965*W+G,X=.707106781*(H=D+E),K=B+X,Z=B-X;t[f+40]=Z+Y,t[f+24]=Z-Y,t[f+8]=K+J,t[f+56]=K-J,f++}for(l=0;l<64;++l)h=t[l]*e[l],d[l]=h>0?h+.5|0:h-.5|0;return d}(t,e),u=0;u<64;++u)p[A[u]]=c[u];var l=p[0]-r;r=p[0],0==l?O(n[0]):(O(n[f[a=32767+l]]),O(h[a]));for(var g=63;g>0&&0==p[g];)g--;if(0==g)return O(o),r;for(var m,v=1;v<=g;){for(var b=v;0==p[v]&&v<=g;)++v;var y=v-b;if(y>=16){m=y>>4;for(var w=1;w<=m;++w)O(s);y&=15}a=32767+p[v],O(i[(y<<4)+f[a]]),O(h[a]),v++}return 63!=g&&O(o),r}function q(t){(t=Math.min(Math.max(t,1),100),a!=t)&&(!function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],r=0;r<64;r++){var n=o((e[r]*t+50)/100);n=Math.min(Math.max(n,1),255),s[A[r]]=n}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],a=0;a<64;a++){var h=o((i[a]*t+50)/100);h=Math.min(Math.max(h,1),255),c[A[a]]=h}for(var f=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],d=0,p=0;p<8;p++)for(var g=0;g<8;g++)u[d]=1/(s[A[d]]*f[p]*f[g]*8),l[d]=1/(c[A[d]]*f[p]*f[g]*8),d++}(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),a=t)}this.encode=function(t,a){a&&q(a),g=new Array,m=0,v=7,M(65496),M(65504),M(16),B(74),B(70),B(73),B(70),B(0),B(1),B(1),B(0),M(1),M(1),B(0),B(0),function(){M(65499),M(132),B(0);for(var t=0;t<64;t++)B(s[t]);B(1);for(var e=0;e<64;e++)B(c[e])}(),function(t,e){M(65472),M(17),B(8),M(e),M(t),B(3),B(1),B(17),B(0),B(2),B(17),B(1),B(3),B(17),B(1)}(t.width,t.height),function(){M(65476),M(418),B(0);for(var t=0;t<16;t++)B(x[t+1]);for(var e=0;e<=11;e++)B(S[e]);B(16);for(var r=0;r<16;r++)B(_[r+1]);for(var n=0;n<=161;n++)B(P[n]);B(1);for(var i=0;i<16;i++)B(k[i+1]);for(var a=0;a<=11;a++)B(F[a]);B(17);for(var o=0;o<16;o++)B(I[o+1]);for(var s=0;s<=161;s++)B(C[s])}(),M(65498),M(12),B(3),B(1),B(0),B(2),B(17),B(3),B(17),B(0),B(63),B(0);var o=0,h=0,f=0;m=0,v=7,this.encode.displayName="_encode_";for(var d,p,N,A,j,D,R,T,U,z=t.data,H=t.width,W=t.height,V=4*H,G=0;G<W;){for(d=0;d<V;){for(j=V*G+d,R=-1,T=0,U=0;U<64;U++)D=j+(T=U>>3)*V+(R=4*(7&U)),G+T>=W&&(D-=V*(G+1+T-W)),d+R>=V&&(D-=d+R-V+4),p=z[D++],N=z[D++],A=z[D++],b[U]=(L[p]+L[N+256>>0]+L[A+512>>0]>>16)-128,y[U]=(L[p+768>>0]+L[N+1024>>0]+L[A+1280>>0]>>16)-128,w[U]=(L[p+1280>>0]+L[N+1536>>0]+L[A+1792>>0]>>16)-128;o=E(b,u,o,e,n),h=E(y,l,h,r,i),f=E(w,l,f,r,i),d+=32}G+=8}if(v>=0){var Y=[];Y[1]=v+1,Y[0]=(1<<v+1)-1,O(Y)}return M(65497),new Uint8Array(g)},t=t||50,function(){for(var t=String.fromCharCode,e=0;e<256;e++)N[e]=t(e)}(),e=j(x,S),r=j(k,F),n=j(_,P),i=j(I,C),function(){for(var t=1,e=2,r=1;r<=15;r++){for(var n=t;n<e;n++)f[32767+n]=r,h[32767+n]=[],h[32767+n][1]=r,h[32767+n][0]=n;for(var i=-(e-1);i<=-t;i++)f[32767+i]=r,h[32767+i]=[],h[32767+i][1]=r,h[32767+i][0]=e-1+i;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)L[t]=19595*t,L[t+256>>0]=38470*t,L[t+512>>0]=7471*t+32768,L[t+768>>0]=-11059*t,L[t+1024>>0]=-21709*t,L[t+1280>>0]=32768*t+8421375,L[t+1536>>0]=-27439*t,L[t+1792>>0]=-5329*t}(),q(t)}
/**
   * @license
   * Copyright (c) 2017 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */function qe(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,-1===["BM","BA","CI","CP","IC","PT"].indexOf(this.flag))throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function De(t){function e(t){if(!t)throw Error("assert :P")}function r(t,e,r){for(var n=0;4>n;n++)if(t[e+n]!=r.charCodeAt(n))return!0;return!1}function n(t,e,r,n,i){for(var a=0;a<i;a++)t[e+a]=r[n+a]}function i(t,e,r,n){for(var i=0;i<n;i++)t[e+i]=r}function a(t){return new Int32Array(t)}function o(t,e){for(var r=[],n=0;n<t;n++)r.push(new e);return r}function s(t,e){var r=[];return function t(r,n,i){for(var a=i[n],o=0;o<a&&(r.push(i.length>n+1?[]:new e),!(i.length<n+1));o++)t(r[o],n+1,i)}(r,0,t),r}var c=function(){var t=this;function c(t,e){for(var r=1<<e-1>>>0;t&r;)r>>>=1;return r?(t&r-1)+r:t}function u(t,r,n,i,a){e(!(i%n));do{t[r+(i-=n)]=a}while(0<i)}function l(t,r,n,i,o){if(e(2328>=o),512>=o)var s=a(512);else if(null==(s=a(o)))return 0;return function(t,r,n,i,o,s){var l,f,d=r,p=1<<n,g=a(16),m=a(16);for(e(0!=o),e(null!=i),e(null!=t),e(0<n),f=0;f<o;++f){if(15<i[f])return 0;++g[i[f]]}if(g[0]==o)return 0;for(m[1]=0,l=1;15>l;++l){if(g[l]>1<<l)return 0;m[l+1]=m[l]+g[l]}for(f=0;f<o;++f)l=i[f],0<i[f]&&(s[m[l]++]=f);if(1==m[15])return(i=new h).g=0,i.value=s[0],u(t,d,1,p,i),p;var v,b=-1,y=p-1,w=0,N=1,L=1,A=1<<n;for(f=0,l=1,o=2;l<=n;++l,o<<=1){if(N+=L<<=1,0>(L-=g[l]))return 0;for(;0<g[l];--g[l])(i=new h).g=l,i.value=s[f++],u(t,d+w,o,A,i),w=c(w,l)}for(l=n+1,o=2;15>=l;++l,o<<=1){if(N+=L<<=1,0>(L-=g[l]))return 0;for(;0<g[l];--g[l]){if(i=new h,(w&y)!=b){for(d+=A,v=1<<(b=l)-n;15>b&&!(0>=(v-=g[b]));)++b,v<<=1;p+=A=1<<(v=b-n),t[r+(b=w&y)].g=v+n,t[r+b].value=d-r-b}i.g=l-n,i.value=s[f++],u(t,d+(w>>n),o,A,i),w=c(w,l)}}return N!=2*m[15]-1?0:p}(t,r,n,i,o,s)}function h(){this.value=this.g=0}function f(){this.value=this.g=0}function d(){this.G=o(5,h),this.H=a(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=o(Dr,f)}function p(t,r,n,i){e(null!=t),e(null!=r),e(2147483648>i),t.Ca=254,t.I=0,t.b=-8,t.Ka=0,t.oa=r,t.pa=n,t.Jd=r,t.Yc=n+i,t.Zc=4<=i?n+i-4+1:n,_(t)}function g(t,e){for(var r=0;0<e--;)r|=k(t,128)<<e;return r}function m(t,e){var r=g(t,e);return P(t)?-r:r}function v(t,r,n,i){var a,o=0;for(e(null!=t),e(null!=r),e(4294967288>i),t.Sb=i,t.Ra=0,t.u=0,t.h=0,4<i&&(i=4),a=0;a<i;++a)o+=r[n+a]<<8*a;t.Ra=o,t.bb=i,t.oa=r,t.pa=n}function b(t){for(;8<=t.u&&t.bb<t.Sb;)t.Ra>>>=8,t.Ra+=t.oa[t.pa+t.bb]<<Ur-8>>>0,++t.bb,t.u-=8;A(t)&&(t.h=1,t.u=0)}function y(t,r){if(e(0<=r),!t.h&&r<=Tr){var n=L(t)&Rr[r];return t.u+=r,b(t),n}return t.h=1,t.u=0}function w(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function N(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function L(t){return t.Ra>>>(t.u&Ur-1)>>>0}function A(t){return e(t.bb<=t.Sb),t.h||t.bb==t.Sb&&t.u>Ur}function x(t,e){t.u=e,t.h=A(t)}function S(t){t.u>=zr&&(e(t.u>=zr),b(t))}function _(t){e(null!=t&&null!=t.oa),t.pa<t.Zc?(t.I=(t.oa[t.pa++]|t.I<<8)>>>0,t.b+=8):(e(null!=t&&null!=t.oa),t.pa<t.Yc?(t.b+=8,t.I=t.oa[t.pa++]|t.I<<8):t.Ka?t.b=0:(t.I<<=8,t.b+=8,t.Ka=1))}function P(t){return g(t,1)}function k(t,e){var r=t.Ca;0>t.b&&_(t);var n=t.b,i=r*e>>>8,a=(t.I>>>n>i)+0;for(a?(r-=i,t.I-=i+1<<n>>>0):r=i+1,n=r,i=0;256<=n;)i+=8,n>>=8;return n=7^i+Hr[n],t.b-=n,t.Ca=(r<<n)-1,a}function F(t,e,r){t[e+0]=r>>24&255,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=r>>0&255}function I(t,e){return t[e+0]<<0|t[e+1]<<8}function C(t,e){return I(t,e)|t[e+2]<<16}function j(t,e){return I(t,e)|I(t,e+2)<<16}function O(t,r){var n=1<<r;return e(null!=t),e(0<r),t.X=a(n),null==t.X?0:(t.Mb=32-r,t.Xa=r,1)}function B(t,r){e(null!=t),e(null!=r),e(t.Xa==r.Xa),n(r.X,0,t.X,0,1<<r.Xa)}function M(){this.X=[],this.Xa=this.Mb=0}function E(t,r,n,i){e(null!=n),e(null!=i);var a=n[0],o=i[0];return 0==a&&(a=(t*o+r/2)/r),0==o&&(o=(r*a+t/2)/t),0>=a||0>=o?0:(n[0]=a,i[0]=o,1)}function q(t,e){return t+(1<<e)-1>>>e}function D(t,e){return((4278255360&t)+(4278255360&e)>>>0&4278255360)+((16711935&t)+(16711935&e)>>>0&16711935)>>>0}function R(e,r){t[r]=function(r,n,i,a,o,s,c){var u;for(u=0;u<o;++u){var l=t[e](s[c+u-1],i,a+u);s[c+u]=D(r[n+u],l)}}}function T(){this.ud=this.hd=this.jd=0}function U(t,e){return((4278124286&(t^e))>>>1)+(t&e)>>>0}function z(t){return 0<=t&&256>t?t:0>t?0:255<t?255:void 0}function H(t,e){return z(t+(t-e+.5>>1))}function W(t,e,r){return Math.abs(e-r)-Math.abs(t-r)}function V(t,e,r,n,i,a,o){for(n=a[o-1],r=0;r<i;++r)a[o+r]=n=D(t[e+r],n)}function G(t,e,r,n,i){var a;for(a=0;a<r;++a){var o=t[e+a],s=o>>8&255,c=16711935&(c=(c=16711935&o)+((s<<16)+s));n[i+a]=(4278255360&o)+c>>>0}}function Y(t,e){e.jd=t>>0&255,e.hd=t>>8&255,e.ud=t>>16&255}function J(t,e,r,n,i,a){var o;for(o=0;o<n;++o){var s=e[r+o],c=s>>>8,u=s,l=255&(l=(l=s>>>16)+((t.jd<<24>>24)*(c<<24>>24)>>>5));u=255&(u=(u=u+((t.hd<<24>>24)*(c<<24>>24)>>>5))+((t.ud<<24>>24)*(l<<24>>24)>>>5));i[a+o]=(4278255360&s)+(l<<16)+u}}function X(e,r,n,i,a){t[r]=function(t,e,r,n,o,s,c,u,l){for(n=c;n<u;++n)for(c=0;c<l;++c)o[s++]=a(r[i(t[e++])])},t[e]=function(e,r,o,s,c,u,l){var h=8>>e.b,f=e.Ea,d=e.K[0],p=e.w;if(8>h)for(e=(1<<e.b)-1,p=(1<<h)-1;r<o;++r){var g,m=0;for(g=0;g<f;++g)g&e||(m=i(s[c++])),u[l++]=a(d[m&p]),m>>=h}else t["VP8LMapColor"+n](s,c,d,p,u,l,r,o,f)}}function K(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=a>>0&255}}function Z(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>16&255,n[i++]=a>>8&255,n[i++]=a>>0&255,n[i++]=a>>24&255}}function $(t,e,r,n,i){for(r=e+r;e<r;){var a=(o=t[e++])>>16&240|o>>12&15,o=o>>0&240|o>>28&15;n[i++]=a,n[i++]=o}}function Q(t,e,r,n,i){for(r=e+r;e<r;){var a=(o=t[e++])>>16&248|o>>13&7,o=o>>5&224|o>>3&31;n[i++]=a,n[i++]=o}}function tt(t,e,r,n,i){for(r=e+r;e<r;){var a=t[e++];n[i++]=a>>0&255,n[i++]=a>>8&255,n[i++]=a>>16&255}}function et(t,e,r,i,a,o){if(0==o)for(r=e+r;e<r;)F(i,((o=t[e++])[0]>>24|o[1]>>8&65280|o[2]<<8&16711680|o[3]<<24)>>>0),a+=32;else n(i,a,t,e,r)}function rt(e,r){t[r][0]=t[e+"0"],t[r][1]=t[e+"1"],t[r][2]=t[e+"2"],t[r][3]=t[e+"3"],t[r][4]=t[e+"4"],t[r][5]=t[e+"5"],t[r][6]=t[e+"6"],t[r][7]=t[e+"7"],t[r][8]=t[e+"8"],t[r][9]=t[e+"9"],t[r][10]=t[e+"10"],t[r][11]=t[e+"11"],t[r][12]=t[e+"12"],t[r][13]=t[e+"13"],t[r][14]=t[e+"0"],t[r][15]=t[e+"0"]}function nt(t){return t==Hn||t==Wn||t==Vn||t==Gn}function it(){this.eb=[],this.size=this.A=this.fb=0}function at(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function ot(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new it,this.f.kb=new at,this.sd=null}function st(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function ct(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function ut(t){return alert("todo:WebPSamplerProcessPlane"),t.T}function lt(t,e){var r=t.T,i=e.ba.f.RGBA,a=i.eb,o=i.fb+t.ka*i.A,s=vi[e.ba.S],c=t.y,u=t.O,l=t.f,h=t.N,f=t.ea,d=t.W,p=e.cc,g=e.dc,m=e.Mc,v=e.Nc,b=t.ka,y=t.ka+t.T,w=t.U,N=w+1>>1;for(0==b?s(c,u,null,null,l,h,f,d,l,h,f,d,a,o,null,null,w):(s(e.ec,e.fc,c,u,p,g,m,v,l,h,f,d,a,o-i.A,a,o,w),++r);b+2<y;b+=2)p=l,g=h,m=f,v=d,h+=t.Rc,d+=t.Rc,o+=2*i.A,s(c,(u+=2*t.fa)-t.fa,c,u,p,g,m,v,l,h,f,d,a,o-i.A,a,o,w);return u+=t.fa,t.j+y<t.o?(n(e.ec,e.fc,c,u,w),n(e.cc,e.dc,l,h,N),n(e.Mc,e.Nc,f,d,N),r--):1&y||s(c,u,null,null,l,h,f,d,l,h,f,d,a,o+i.A,null,null,w),r}function ht(t,r,n){var i=t.F,a=[t.J];if(null!=i){var o=t.U,s=r.ba.S,c=s==Tn||s==Vn;r=r.ba.f.RGBA;var u=[0],l=t.ka;u[0]=t.T,t.Kb&&(0==l?--u[0]:(--l,a[0]-=t.width),t.j+t.ka+t.T==t.o&&(u[0]=t.o-t.j-l));var h=r.eb;l=r.fb+l*r.A;t=Sn(i,a[0],t.width,o,u,h,l+(c?0:3),r.A),e(n==u),t&&nt(s)&&An(h,l,c,o,u,r.A)}return 0}function ft(t){var e=t.ma,r=e.ba.S,n=11>r,i=r==qn||r==Rn||r==Tn||r==Un||12==r||nt(r);if(e.memory=null,e.Ib=null,e.Jb=null,e.Nd=null,!Mr(e.Oa,t,i?11:12))return 0;if(i&&nt(r)&&br(),t.da)alert("todo:use_scaling");else{if(n){if(e.Ib=ut,t.Kb){if(r=t.U+1>>1,e.memory=a(t.U+2*r),null==e.memory)return 0;e.ec=e.memory,e.fc=0,e.cc=e.ec,e.dc=e.fc+t.U,e.Mc=e.cc,e.Nc=e.dc+r,e.Ib=lt,br()}}else alert("todo:EmitYUV");i&&(e.Jb=ht,n&&mr())}if(n&&!Ci){for(t=0;256>t;++t)ji[t]=89858*(t-128)+_i>>Si,Mi[t]=-22014*(t-128)+_i,Bi[t]=-45773*(t-128),Oi[t]=113618*(t-128)+_i>>Si;for(t=Pi;t<ki;++t)e=76283*(t-16)+_i>>Si,Ei[t-Pi]=Vt(e,255),qi[t-Pi]=Vt(e+8>>4,15);Ci=1}return 1}function dt(t){var r=t.ma,n=t.U,i=t.T;return e(!(1&t.ka)),0>=n||0>=i?0:(n=r.Ib(t,r),null!=r.Jb&&r.Jb(t,r,n),r.Dc+=n,1)}function pt(t){t.ma.memory=null}function gt(t,e,r,n){return 47!=y(t,8)?0:(e[0]=y(t,14)+1,r[0]=y(t,14)+1,n[0]=y(t,1),0!=y(t,3)?0:!t.h)}function mt(t,e){if(4>t)return t+1;var r=t-2>>1;return(2+(1&t)<<r)+y(e,r)+1}function vt(t,e){return 120<e?e-120:1<=(r=((r=$n[e-1])>>4)*t+(8-(15&r)))?r:1;var r}function bt(t,e,r){var n=L(r),i=t[e+=255&n].g-8;return 0<i&&(x(r,r.u+8),n=L(r),e+=t[e].value,e+=n&(1<<i)-1),x(r,r.u+t[e].g),t[e].value}function yt(t,r,n){return n.g+=t.g,n.value+=t.value<<r>>>0,e(8>=n.g),t.g}function wt(t,r,n){var i=t.xc;return e((r=0==i?0:t.vc[t.md*(n>>i)+(r>>i)])<t.Wb),t.Ya[r]}function Nt(t,r,i,a){var o=t.ab,s=t.c*r,c=t.C;r=c+r;var u=i,l=a;for(a=t.Ta,i=t.Ua;0<o--;){var h=t.gc[o],f=c,d=r,p=u,g=l,m=(l=a,u=i,h.Ea);switch(e(f<d),e(d<=h.nc),h.hc){case 2:Gr(p,g,(d-f)*m,l,u);break;case 0:var v=f,b=d,y=l,w=u,N=(_=h).Ea;0==v&&(Wr(p,g,null,null,1,y,w),V(p,g+1,0,0,N-1,y,w+1),g+=N,w+=N,++v);for(var L=1<<_.b,A=L-1,x=q(N,_.b),S=_.K,_=_.w+(v>>_.b)*x;v<b;){var P=S,k=_,F=1;for(Vr(p,g,y,w-N,1,y,w);F<N;){var I=(F&~A)+L;I>N&&(I=N),(0,Zr[P[k++]>>8&15])(p,g+ +F,y,w+F-N,I-F,y,w+F),F=I}g+=N,w+=N,++v&A||(_+=x)}d!=h.nc&&n(l,u-m,l,u+(d-f-1)*m,m);break;case 1:for(m=p,b=g,N=(p=h.Ea)-(w=p&~(y=(g=1<<h.b)-1)),v=q(p,h.b),L=h.K,h=h.w+(f>>h.b)*v;f<d;){for(A=L,x=h,S=new T,_=b+w,P=b+p;b<_;)Y(A[x++],S),$r(S,m,b,g,l,u),b+=g,u+=g;b<P&&(Y(A[x++],S),$r(S,m,b,N,l,u),b+=N,u+=N),++f&y||(h+=v)}break;case 3:if(p==l&&g==u&&0<h.b){for(b=l,p=m=u+(d-f)*m-(w=(d-f)*q(h.Ea,h.b)),g=l,y=u,v=[],w=(N=w)-1;0<=w;--w)v[w]=g[y+w];for(w=N-1;0<=w;--w)b[p+w]=v[w];Yr(h,f,d,l,m,l,u)}else Yr(h,f,d,p,g,l,u)}u=a,l=i}l!=i&&n(a,i,u,l,s)}function Lt(t,r){var n=t.V,i=t.Ba+t.c*t.C,a=r-t.C;if(e(r<=t.l.o),e(16>=a),0<a){var o=t.l,s=t.Ta,c=t.Ua,u=o.width;if(Nt(t,a,n,i),a=c=[c],e((n=t.C)<(i=r)),e(o.v<o.va),i>o.o&&(i=o.o),n<o.j){var l=o.j-n;n=o.j;a[0]+=l*u}if(n>=i?n=0:(a[0]+=4*o.v,o.ka=n-o.j,o.U=o.va-o.v,o.T=i-n,n=1),n){if(c=c[0],11>(n=t.ca).S){var h=n.f.RGBA,f=(i=n.S,a=o.U,o=o.T,l=h.eb,h.A),d=o;for(h=h.fb+t.Ma*h.A;0<d--;){var p=s,g=c,m=a,v=l,b=h;switch(i){case En:Qr(p,g,m,v,b);break;case qn:tn(p,g,m,v,b);break;case Hn:tn(p,g,m,v,b),An(v,b,0,m,1,0);break;case Dn:nn(p,g,m,v,b);break;case Rn:et(p,g,m,v,b,1);break;case Wn:et(p,g,m,v,b,1),An(v,b,0,m,1,0);break;case Tn:et(p,g,m,v,b,0);break;case Vn:et(p,g,m,v,b,0),An(v,b,1,m,1,0);break;case Un:en(p,g,m,v,b);break;case Gn:en(p,g,m,v,b),xn(v,b,m,1,0);break;case zn:rn(p,g,m,v,b);break;default:e(0)}c+=u,h+=f}t.Ma+=o}else alert("todo:EmitRescaledRowsYUVA");e(t.Ma<=n.height)}}t.C=r,e(t.C<=t.i)}function At(t){var e;if(0<t.ua)return 0;for(e=0;e<t.Wb;++e){var r=t.Ya[e].G,n=t.Ya[e].H;if(0<r[1][n[1]+0].g||0<r[2][n[2]+0].g||0<r[3][n[3]+0].g)return 0}return 1}function xt(t,r,n,i,a,o){if(0!=t.Z){var s=t.qd,c=t.rd;for(e(null!=mi[t.Z]);r<n;++r)mi[t.Z](s,c,i,a,i,a,o),s=i,c=a,a+=o;t.qd=s,t.rd=c}}function St(t,r){var n=t.l.ma,i=0==n.Z||1==n.Z?t.l.j:t.C;i=t.C<i?i:t.C;if(e(r<=t.l.o),r>i){var a=t.l.width,o=n.ca,s=n.tb+a*i,c=t.V,u=t.Ba+t.c*i,l=t.gc;e(1==t.ab),e(3==l[0].hc),Xr(l[0],i,r,c,u,o,s),xt(n,i,r,o,s,a)}t.C=t.Ma=r}function _t(t,r,n,i,a,o,s){var c=t.$/i,u=t.$%i,l=t.m,h=t.s,f=n+t.$,d=f;a=n+i*a;var p=n+i*o,g=280+h.ua,m=t.Pb?c:16777216,v=0<h.ua?h.Wa:null,b=h.wc,y=f<p?wt(h,u,c):null;e(t.C<o),e(p<=a);var w=!1;t:for(;;){for(;w||f<p;){var N=0;if(c>=m){var _=f-n;e((m=t).Pb),m.wd=m.m,m.xd=_,0<m.s.ua&&B(m.s.Wa,m.s.vb),m=c+ti}if(u&b||(y=wt(h,u,c)),e(null!=y),y.Qb&&(r[f]=y.qb,w=!0),!w)if(S(l),y.jc){N=l,_=r;var P=f,k=y.pd[L(N)&Dr-1];e(y.jc),256>k.g?(x(N,N.u+k.g),_[P]=k.value,N=0):(x(N,N.u+k.g-256),e(256<=k.value),N=k.value),0==N&&(w=!0)}else N=bt(y.G[0],y.H[0],l);if(l.h)break;if(w||256>N){if(!w)if(y.nd)r[f]=(y.qb|N<<8)>>>0;else{if(S(l),w=bt(y.G[1],y.H[1],l),S(l),_=bt(y.G[2],y.H[2],l),P=bt(y.G[3],y.H[3],l),l.h)break;r[f]=(P<<24|w<<16|N<<8|_)>>>0}if(w=!1,++f,++u>=i&&(u=0,++c,null!=s&&c<=o&&!(c%16)&&s(t,c),null!=v))for(;d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else if(280>N){if(N=mt(N-256,l),_=bt(y.G[4],y.H[4],l),S(l),_=vt(i,_=mt(_,l)),l.h)break;if(f-n<_||a-f<N)break t;for(P=0;P<N;++P)r[f+P]=r[f+P-_];for(f+=N,u+=N;u>=i;)u-=i,++c,null!=s&&c<=o&&!(c%16)&&s(t,c);if(e(f<=a),u&b&&(y=wt(h,u,c)),null!=v)for(;d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N}else{if(!(N<g))break t;for(w=N-280,e(null!=v);d<f;)N=r[d++],v.X[(506832829*N&4294967295)>>>v.Mb]=N;N=f,e(!(w>>>(_=v).Xa)),r[N]=_.X[w],w=!0}w||e(l.h==A(l))}if(t.Pb&&l.h&&f<a)e(t.m.h),t.a=5,t.m=t.wd,t.$=t.xd,0<t.s.ua&&B(t.s.vb,t.s.Wa);else{if(l.h)break t;null!=s&&s(t,c>o?o:c),t.a=0,t.$=f-n}return 1}return t.a=3,0}function Pt(t){e(null!=t),t.vc=null,t.yc=null,t.Ya=null;var r=t.Wa;null!=r&&(r.X=null),t.vb=null,e(null!=t)}function kt(){var e=new or;return null==e?null:(e.a=0,e.xb=gi,rt("Predictor","VP8LPredictors"),rt("Predictor","VP8LPredictors_C"),rt("PredictorAdd","VP8LPredictorsAdd"),rt("PredictorAdd","VP8LPredictorsAdd_C"),Gr=G,$r=J,Qr=K,tn=Z,en=$,rn=Q,nn=tt,t.VP8LMapColor32b=Jr,t.VP8LMapColor8b=Kr,e)}function Ft(t,r,n,s,c){var u=1,f=[t],p=[r],g=s.m,m=s.s,v=null,b=0;t:for(;;){if(n)for(;u&&y(g,1);){var w=f,N=p,A=s,_=1,P=A.m,k=A.gc[A.ab],F=y(P,2);if(A.Oc&1<<F)u=0;else{switch(A.Oc|=1<<F,k.hc=F,k.Ea=w[0],k.nc=N[0],k.K=[null],++A.ab,e(4>=A.ab),F){case 0:case 1:k.b=y(P,3)+2,_=Ft(q(k.Ea,k.b),q(k.nc,k.b),0,A,k.K),k.K=k.K[0];break;case 3:var I,C=y(P,8)+1,j=16<C?0:4<C?1:2<C?2:3;if(w[0]=q(k.Ea,j),k.b=j,I=_=Ft(C,1,0,A,k.K)){var B,M=C,E=k,R=1<<(8>>E.b),T=a(R);if(null==T)I=0;else{var U=E.K[0],z=E.w;for(T[0]=E.K[0][0],B=1;B<1*M;++B)T[B]=D(U[z+B],T[B-1]);for(;B<4*R;++B)T[B]=0;E.K[0]=null,E.K[0]=T,I=1}}_=I;break;case 2:break;default:e(0)}u=_}}if(f=f[0],p=p[0],u&&y(g,1)&&!(u=1<=(b=y(g,4))&&11>=b)){s.a=3;break t}var H;if(H=u)e:{var W,V,G,Y=s,J=f,X=p,K=b,Z=n,$=Y.m,Q=Y.s,tt=[null],et=1,rt=0,nt=Qn[K];r:for(;;){if(Z&&y($,1)){var it=y($,3)+2,at=q(J,it),ot=q(X,it),st=at*ot;if(!Ft(at,ot,0,Y,tt))break r;for(tt=tt[0],Q.xc=it,W=0;W<st;++W){var ct=tt[W]>>8&65535;tt[W]=ct,ct>=et&&(et=ct+1)}}if($.h)break r;for(V=0;5>V;++V){var ut=Xn[V];!V&&0<K&&(ut+=1<<K),rt<ut&&(rt=ut)}var lt=o(et*nt,h),ht=et,ft=o(ht,d);if(null==ft)var dt=null;else e(65536>=ht),dt=ft;var pt=a(rt);if(null==dt||null==pt||null==lt){Y.a=1;break r}var gt=lt;for(W=G=0;W<et;++W){var mt=dt[W],vt=mt.G,bt=mt.H,wt=0,Nt=1,Lt=0;for(V=0;5>V;++V){ut=Xn[V],vt[V]=gt,bt[V]=G,!V&&0<K&&(ut+=1<<K);n:{var At,xt=ut,St=Y,kt=pt,It=gt,Ct=G,jt=0,Ot=St.m,Bt=y(Ot,1);if(i(kt,0,0,xt),Bt){var Mt=y(Ot,1)+1,Et=y(Ot,1),qt=y(Ot,0==Et?1:8);kt[qt]=1,2==Mt&&(kt[qt=y(Ot,8)]=1);var Dt=1}else{var Rt=a(19),Tt=y(Ot,4)+4;if(19<Tt){St.a=3;var Ut=0;break n}for(At=0;At<Tt;++At)Rt[Zn[At]]=y(Ot,3);var zt=void 0,Ht=void 0,Wt=St,Vt=Rt,Gt=xt,Yt=kt,Jt=0,Xt=Wt.m,Kt=8,Zt=o(128,h);i:for(;l(Zt,0,7,Vt,19);){if(y(Xt,1)){var $t=2+2*y(Xt,3);if((zt=2+y(Xt,$t))>Gt)break i}else zt=Gt;for(Ht=0;Ht<Gt&&zt--;){S(Xt);var Qt=Zt[0+(127&L(Xt))];x(Xt,Xt.u+Qt.g);var te=Qt.value;if(16>te)Yt[Ht++]=te,0!=te&&(Kt=te);else{var ee=16==te,re=te-16,ne=Jn[re],ie=y(Xt,Yn[re])+ne;if(Ht+ie>Gt)break i;for(var ae=ee?Kt:0;0<ie--;)Yt[Ht++]=ae}}Jt=1;break i}Jt||(Wt.a=3),Dt=Jt}(Dt=Dt&&!Ot.h)&&(jt=l(It,Ct,8,kt,xt)),Dt&&0!=jt?Ut=jt:(St.a=3,Ut=0)}if(0==Ut)break r;if(Nt&&1==Kn[V]&&(Nt=0==gt[G].g),wt+=gt[G].g,G+=Ut,3>=V){var oe,se=pt[0];for(oe=1;oe<ut;++oe)pt[oe]>se&&(se=pt[oe]);Lt+=se}}if(mt.nd=Nt,mt.Qb=0,Nt&&(mt.qb=(vt[3][bt[3]+0].value<<24|vt[1][bt[1]+0].value<<16|vt[2][bt[2]+0].value)>>>0,0==wt&&256>vt[0][bt[0]+0].value&&(mt.Qb=1,mt.qb+=vt[0][bt[0]+0].value<<8)),mt.jc=!mt.Qb&&6>Lt,mt.jc){var ce,ue=mt;for(ce=0;ce<Dr;++ce){var le=ce,he=ue.pd[le],fe=ue.G[0][ue.H[0]+le];256<=fe.value?(he.g=fe.g+256,he.value=fe.value):(he.g=0,he.value=0,le>>=yt(fe,8,he),le>>=yt(ue.G[1][ue.H[1]+le],16,he),le>>=yt(ue.G[2][ue.H[2]+le],0,he),yt(ue.G[3][ue.H[3]+le],24,he))}}}Q.vc=tt,Q.Wb=et,Q.Ya=dt,Q.yc=lt,H=1;break e}H=0}if(!(u=H)){s.a=3;break t}if(0<b){if(m.ua=1<<b,!O(m.Wa,b)){s.a=1,u=0;break t}}else m.ua=0;var de=s,pe=f,ge=p,me=de.s,ve=me.xc;if(de.c=pe,de.i=ge,me.md=q(pe,ve),me.wc=0==ve?-1:(1<<ve)-1,n){s.xb=pi;break t}if(null==(v=a(f*p))){s.a=1,u=0;break t}u=(u=_t(s,v,0,f,p,p,null))&&!g.h;break t}return u?(null!=c?c[0]=v:(e(null==v),e(n)),s.$=0,n||Pt(m)):Pt(m),u}function It(t,r){var n=t.c*t.i,i=n+r+16*r;return e(t.c<=r),t.V=a(i),null==t.V?(t.Ta=null,t.Ua=0,t.a=1,0):(t.Ta=t.V,t.Ua=t.Ba+n+r,1)}function Ct(t,r){var n=t.C,i=r-n,a=t.V,o=t.Ba+t.c*n;for(e(r<=t.l.o);0<i;){var s=16<i?16:i,c=t.l.ma,u=t.l.width,l=u*s,h=c.ca,f=c.tb+u*n,d=t.Ta,p=t.Ua;Nt(t,s,a,o),_n(d,p,h,f,l),xt(c,n,n+s,h,f,u),i-=s,a+=s*t.c,n+=s}e(n==r),t.C=t.Ma=r}function jt(){this.ub=this.yd=this.td=this.Rb=0}function Ot(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Bt(){this.Fb=this.Bb=this.Cb=0,this.Zb=a(4),this.Lb=a(4)}function Mt(){this.Yb=function(){var t=[];return function t(e,r,n){for(var i=n[r],a=0;a<i&&(e.push(n.length>r+1?[]:0),!(n.length<r+1));a++)t(e[a],r+1,n)}(t,0,[3,11]),t}()}function Et(){this.jb=a(3),this.Wc=s([4,8],Mt),this.Xc=s([4,17],Mt)}function qt(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new a(4),this.od=new a(4)}function Dt(){this.ld=this.La=this.dd=this.tc=0}function Rt(){this.Na=this.la=0}function Tt(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Ut(){this.ad=a(384),this.Za=0,this.Ob=a(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function zt(){this.uc=this.M=this.Nb=0,this.wa=Array(new Dt),this.Y=0,this.ya=Array(new Ut),this.aa=0,this.l=new Gt}function Ht(){this.y=a(16),this.f=a(8),this.ea=a(8)}function Wt(){this.cb=this.a=0,this.sc="",this.m=new w,this.Od=new jt,this.Kc=new Ot,this.ed=new qt,this.Qa=new Bt,this.Ic=this.$c=this.Aa=0,this.D=new zt,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=o(8,w),this.ia=0,this.pb=o(4,Tt),this.Pa=new Et,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Ht),this.Hd=0,this.rb=Array(new Rt),this.sb=0,this.wa=Array(new Dt),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Ut),this.L=this.aa=0,this.gd=s([4,2],Dt),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Vt(t,e){return 0>t?0:t>e?e:t}function Gt(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function Yt(){var t=new Wt;return null!=t&&(t.a=0,t.sc="OK",t.cb=0,t.Xb=0,ni||(ni=Zt)),t}function Jt(t,e,r){return 0==t.a&&(t.a=e,t.sc=r,t.cb=0),0}function Xt(t,e,r){return 3<=r&&157==t[e+0]&&1==t[e+1]&&42==t[e+2]}function Kt(t,r){if(null==t)return 0;if(t.a=0,t.sc="OK",null==r)return Jt(t,2,"null VP8Io passed to VP8GetHeaders()");var n=r.data,a=r.w,o=r.ha;if(4>o)return Jt(t,7,"Truncated header.");var s=n[a+0]|n[a+1]<<8|n[a+2]<<16,c=t.Od;if(c.Rb=!(1&s),c.td=s>>1&7,c.yd=s>>4&1,c.ub=s>>5,3<c.td)return Jt(t,3,"Incorrect keyframe parameters.");if(!c.yd)return Jt(t,4,"Frame not displayable.");a+=3,o-=3;var u=t.Kc;if(c.Rb){if(7>o)return Jt(t,7,"cannot parse picture header");if(!Xt(n,a,o))return Jt(t,3,"Bad code word");u.c=16383&(n[a+4]<<8|n[a+3]),u.Td=n[a+4]>>6,u.i=16383&(n[a+6]<<8|n[a+5]),u.Ud=n[a+6]>>6,a+=7,o-=7,t.za=u.c+15>>4,t.Ub=u.i+15>>4,r.width=u.c,r.height=u.i,r.Da=0,r.j=0,r.v=0,r.va=r.width,r.o=r.height,r.da=0,r.ib=r.width,r.hb=r.height,r.U=r.width,r.T=r.height,i((s=t.Pa).jb,0,255,s.jb.length),e(null!=(s=t.Qa)),s.Cb=0,s.Bb=0,s.Fb=1,i(s.Zb,0,0,s.Zb.length),i(s.Lb,0,0,s.Lb)}if(c.ub>o)return Jt(t,7,"bad partition length");p(s=t.m,n,a,c.ub),a+=c.ub,o-=c.ub,c.Rb&&(u.Ld=P(s),u.Kd=P(s)),u=t.Qa;var l,h=t.Pa;if(e(null!=s),e(null!=u),u.Cb=P(s),u.Cb){if(u.Bb=P(s),P(s)){for(u.Fb=P(s),l=0;4>l;++l)u.Zb[l]=P(s)?m(s,7):0;for(l=0;4>l;++l)u.Lb[l]=P(s)?m(s,6):0}if(u.Bb)for(l=0;3>l;++l)h.jb[l]=P(s)?g(s,8):255}else u.Bb=0;if(s.Ka)return Jt(t,3,"cannot parse segment header");if((u=t.ed).zd=P(s),u.Tb=g(s,6),u.wb=g(s,3),u.Pc=P(s),u.Pc&&P(s)){for(h=0;4>h;++h)P(s)&&(u.vd[h]=m(s,6));for(h=0;4>h;++h)P(s)&&(u.od[h]=m(s,6))}if(t.L=0==u.Tb?0:u.zd?1:2,s.Ka)return Jt(t,3,"cannot parse filter header");var f=o;if(o=l=a,a=l+f,u=f,t.Xb=(1<<g(t.m,2))-1,f<3*(h=t.Xb))n=7;else{for(l+=3*h,u-=3*h,f=0;f<h;++f){var d=n[o+0]|n[o+1]<<8|n[o+2]<<16;d>u&&(d=u),p(t.Jc[+f],n,l,d),l+=d,u-=d,o+=3}p(t.Jc[+h],n,l,u),n=l<a?0:5}if(0!=n)return Jt(t,n,"cannot parse partitions");for(n=g(l=t.m,7),o=P(l)?m(l,4):0,a=P(l)?m(l,4):0,u=P(l)?m(l,4):0,h=P(l)?m(l,4):0,l=P(l)?m(l,4):0,f=t.Qa,d=0;4>d;++d){if(f.Cb){var v=f.Zb[d];f.Fb||(v+=n)}else{if(0<d){t.pb[d]=t.pb[0];continue}v=n}var b=t.pb[d];b.Sc[0]=ei[Vt(v+o,127)],b.Sc[1]=ri[Vt(v+0,127)],b.Eb[0]=2*ei[Vt(v+a,127)],b.Eb[1]=101581*ri[Vt(v+u,127)]>>16,8>b.Eb[1]&&(b.Eb[1]=8),b.Qc[0]=ei[Vt(v+h,117)],b.Qc[1]=ri[Vt(v+l,127)],b.lc=v+l}if(!c.Rb)return Jt(t,4,"Not a key frame.");for(P(s),c=t.Pa,n=0;4>n;++n){for(o=0;8>o;++o)for(a=0;3>a;++a)for(u=0;11>u;++u)h=k(s,ui[n][o][a][u])?g(s,8):si[n][o][a][u],c.Wc[n][o].Yb[a][u]=h;for(o=0;17>o;++o)c.Xc[n][o]=c.Wc[n][li[o]]}return t.kc=P(s),t.kc&&(t.Bd=g(s,8)),t.cb=1}function Zt(t,e,r,n,i,a,o){var s=e[i].Yb[r];for(r=0;16>i;++i){if(!k(t,s[r+0]))return i;for(;!k(t,s[r+1]);)if(s=e[++i].Yb[0],r=0,16==i)return 16;var c=e[i+1].Yb;if(k(t,s[r+2])){var u=t,l=0;if(k(u,(f=s)[(h=r)+3]))if(k(u,f[h+6])){for(s=0,h=2*(l=k(u,f[h+8]))+(f=k(u,f[h+9+l])),l=0,f=ii[h];f[s];++s)l+=l+k(u,f[s]);l+=3+(8<<h)}else k(u,f[h+7])?(l=7+2*k(u,165),l+=k(u,145)):l=5+k(u,159);else l=k(u,f[h+4])?3+k(u,f[h+5]):2;s=c[2]}else l=1,s=c[1];c=o+ai[i],0>(u=t).b&&_(u);var h,f=u.b,d=(h=u.Ca>>1)-(u.I>>f)>>31;--u.b,u.Ca+=d,u.Ca|=1,u.I-=(h+1&d)<<f,a[c]=((l^d)-d)*n[(0<i)+0]}return 16}function $t(t){var e=t.rb[t.sb-1];e.la=0,e.Na=0,i(t.zc,0,0,t.zc.length),t.ja=0}function Qt(t,r){if(null==t)return 0;if(null==r)return Jt(t,2,"NULL VP8Io parameter in VP8Decode().");if(!t.cb&&!Kt(t,r))return 0;if(e(t.cb),null==r.ac||r.ac(r)){r.ob&&(t.L=0);var s=Ri[t.L];if(2==t.L?(t.yb=0,t.zb=0):(t.yb=r.v-s>>4,t.zb=r.j-s>>4,0>t.yb&&(t.yb=0),0>t.zb&&(t.zb=0)),t.Va=r.o+15+s>>4,t.Hb=r.va+15+s>>4,t.Hb>t.za&&(t.Hb=t.za),t.Va>t.Ub&&(t.Va=t.Ub),0<t.L){var c=t.ed;for(s=0;4>s;++s){var u;if(t.Qa.Cb){var l=t.Qa.Lb[s];t.Qa.Fb||(l+=c.Tb)}else l=c.Tb;for(u=0;1>=u;++u){var h=t.gd[s][u],f=l;if(c.Pc&&(f+=c.vd[0],u&&(f+=c.od[0])),0<(f=0>f?0:63<f?63:f)){var d=f;0<c.wb&&((d=4<c.wb?d>>2:d>>1)>9-c.wb&&(d=9-c.wb)),1>d&&(d=1),h.dd=d,h.tc=2*f+d,h.ld=40<=f?2:15<=f?1:0}else h.tc=0;h.La=u}}}s=0}else Jt(t,6,"Frame setup failed"),s=t.a;if(s=0==s){if(s){t.$c=0,0<t.Aa||(t.Ic=Ui);t:{s=t.Ic;c=4*(d=t.za);var p=32*d,g=d+1,m=0<t.L?d*(0<t.Aa?2:1):0,v=(2==t.Aa?2:1)*d;if((h=c+832+(u=3*(16*s+Ri[t.L])/2*p)+(l=null!=t.Fa&&0<t.Fa.length?t.Kc.c*t.Kc.i:0))!=h)s=0;else{if(h>t.Vb){if(t.Vb=0,t.Ec=a(h),t.Fc=0,null==t.Ec){s=Jt(t,1,"no memory during frame initialization.");break t}t.Vb=h}h=t.Ec,f=t.Fc,t.Ac=h,t.Bc=f,f+=c,t.Gd=o(p,Ht),t.Hd=0,t.rb=o(g+1,Rt),t.sb=1,t.wa=m?o(m,Dt):null,t.Y=0,t.D.Nb=0,t.D.wa=t.wa,t.D.Y=t.Y,0<t.Aa&&(t.D.Y+=d),e(!0),t.oc=h,t.pc=f,f+=832,t.ya=o(v,Ut),t.aa=0,t.D.ya=t.ya,t.D.aa=t.aa,2==t.Aa&&(t.D.aa+=d),t.R=16*d,t.B=8*d,d=(p=Ri[t.L])*t.R,p=p/2*t.B,t.sa=h,t.ta=f+d,t.qa=t.sa,t.ra=t.ta+16*s*t.R+p,t.Ha=t.qa,t.Ia=t.ra+8*s*t.B+p,t.$c=0,f+=u,t.mb=l?h:null,t.nb=l?f:null,e(f+l<=t.Fc+t.Vb),$t(t),i(t.Ac,t.Bc,0,c),s=1}}if(s){if(r.ka=0,r.y=t.sa,r.O=t.ta,r.f=t.qa,r.N=t.ra,r.ea=t.Ha,r.Vd=t.Ia,r.fa=t.R,r.Rc=t.B,r.F=null,r.J=0,!Cn){for(s=-255;255>=s;++s)Pn[255+s]=0>s?-s:s;for(s=-1020;1020>=s;++s)kn[1020+s]=-128>s?-128:127<s?127:s;for(s=-112;112>=s;++s)Fn[112+s]=-16>s?-16:15<s?15:s;for(s=-255;510>=s;++s)In[255+s]=0>s?0:255<s?255:s;Cn=1}an=ue,on=ae,cn=oe,un=se,ln=ce,sn=ie,hn=Je,fn=Xe,dn=$e,pn=Qe,gn=Ke,mn=Ze,vn=tr,bn=er,yn=ze,wn=He,Nn=We,Ln=Ve,fi[0]=xe,fi[1]=he,fi[2]=Le,fi[3]=Ae,fi[4]=Se,fi[5]=Pe,fi[6]=_e,fi[7]=ke,fi[8]=Ie,fi[9]=Fe,hi[0]=ve,hi[1]=de,hi[2]=pe,hi[3]=ge,hi[4]=be,hi[5]=ye,hi[6]=we,di[0]=Be,di[1]=fe,di[2]=Ce,di[3]=je,di[4]=Ee,di[5]=Me,di[6]=qe,s=1}else s=0}s&&(s=function(t,r){for(t.M=0;t.M<t.Va;++t.M){var o,s=t.Jc[t.M&t.Xb],c=t.m,u=t;for(o=0;o<u.za;++o){var l=c,h=u,f=h.Ac,d=h.Bc+4*o,p=h.zc,g=h.ya[h.aa+o];if(h.Qa.Bb?g.$b=k(l,h.Pa.jb[0])?2+k(l,h.Pa.jb[2]):k(l,h.Pa.jb[1]):g.$b=0,h.kc&&(g.Ad=k(l,h.Bd)),g.Za=!k(l,145)+0,g.Za){var m=g.Ob,v=0;for(h=0;4>h;++h){var b,y=p[0+h];for(b=0;4>b;++b){y=ci[f[d+b]][y];for(var w=oi[k(l,y[0])];0<w;)w=oi[2*w+k(l,y[w])];y=-w,f[d+b]=y}n(m,v,f,d,4),v+=4,p[0+h]=y}}else y=k(l,156)?k(l,128)?1:3:k(l,163)?2:0,g.Ob[0]=y,i(f,d,y,4),i(p,0,y,4);g.Dd=k(l,142)?k(l,114)?k(l,183)?1:3:2:0}if(u.m.Ka)return Jt(t,7,"Premature end-of-partition0 encountered.");for(;t.ja<t.za;++t.ja){if(u=s,l=(c=t).rb[c.sb-1],f=c.rb[c.sb+c.ja],o=c.ya[c.aa+c.ja],d=c.kc?o.Ad:0)l.la=f.la=0,o.Za||(l.Na=f.Na=0),o.Hc=0,o.Gc=0,o.ia=0;else{var N,L;l=f,f=u,d=c.Pa.Xc,p=c.ya[c.aa+c.ja],g=c.pb[p.$b];if(h=p.ad,m=0,v=c.rb[c.sb-1],y=b=0,i(h,m,0,384),p.Za)var A=0,x=d[3];else{w=a(16);var S=l.Na+v.Na;if(S=ni(f,d[1],S,g.Eb,0,w,0),l.Na=v.Na=(0<S)+0,1<S)an(w,0,h,m);else{var _=w[0]+3>>3;for(w=0;256>w;w+=16)h[m+w]=_}A=1,x=d[0]}var P=15&l.la,F=15&v.la;for(w=0;4>w;++w){var I=1&F;for(_=L=0;4>_;++_)P=P>>1|(I=(S=ni(f,x,S=I+(1&P),g.Sc,A,h,m))>A)<<7,L=L<<2|(3<S?3:1<S?2:0!=h[m+0]),m+=16;P>>=4,F=F>>1|I<<7,b=(b<<8|L)>>>0}for(x=P,A=F>>4,N=0;4>N;N+=2){for(L=0,P=l.la>>4+N,F=v.la>>4+N,w=0;2>w;++w){for(I=1&F,_=0;2>_;++_)S=I+(1&P),P=P>>1|(I=0<(S=ni(f,d[2],S,g.Qc,0,h,m)))<<3,L=L<<2|(3<S?3:1<S?2:0!=h[m+0]),m+=16;P>>=2,F=F>>1|I<<5}y|=L<<4*N,x|=P<<4<<N,A|=(240&F)<<N}l.la=x,v.la=A,p.Hc=b,p.Gc=y,p.ia=43690&y?0:g.ia,d=!(b|y)}if(0<c.L&&(c.wa[c.Y+c.ja]=c.gd[o.$b][o.Za],c.wa[c.Y+c.ja].La|=!d),u.Ka)return Jt(t,7,"Premature end-of-file encountered.")}if($t(t),c=r,u=1,o=(s=t).D,l=0<s.L&&s.M>=s.zb&&s.M<=s.Va,0==s.Aa)t:{if(o.M=s.M,o.uc=l,Or(s,o),u=1,o=(L=s.D).Nb,l=(y=Ri[s.L])*s.R,f=y/2*s.B,w=16*o*s.R,_=8*o*s.B,d=s.sa,p=s.ta-l+w,g=s.qa,h=s.ra-f+_,m=s.Ha,v=s.Ia-f+_,F=0==(P=L.M),b=P>=s.Va-1,2==s.Aa&&Or(s,L),L.uc)for(I=(S=s).D.M,e(S.D.uc),L=S.yb;L<S.Hb;++L){A=L,x=I;var C=(j=(U=S).D).Nb;N=U.R;var j=j.wa[j.Y+A],O=U.sa,B=U.ta+16*C*N+16*A,M=j.dd,E=j.tc;if(0!=E)if(e(3<=E),1==U.L)0<A&&wn(O,B,N,E+4),j.La&&Ln(O,B,N,E),0<x&&yn(O,B,N,E+4),j.La&&Nn(O,B,N,E);else{var q=U.B,D=U.qa,R=U.ra+8*C*q+8*A,T=U.Ha,U=U.Ia+8*C*q+8*A;C=j.ld;0<A&&(fn(O,B,N,E+4,M,C),pn(D,R,T,U,q,E+4,M,C)),j.La&&(mn(O,B,N,E,M,C),bn(D,R,T,U,q,E,M,C)),0<x&&(hn(O,B,N,E+4,M,C),dn(D,R,T,U,q,E+4,M,C)),j.La&&(gn(O,B,N,E,M,C),vn(D,R,T,U,q,E,M,C))}}if(s.ia&&alert("todo:DitherRow"),null!=c.put){if(L=16*P,P=16*(P+1),F?(c.y=s.sa,c.O=s.ta+w,c.f=s.qa,c.N=s.ra+_,c.ea=s.Ha,c.W=s.Ia+_):(L-=y,c.y=d,c.O=p,c.f=g,c.N=h,c.ea=m,c.W=v),b||(P-=y),P>c.o&&(P=c.o),c.F=null,c.J=null,null!=s.Fa&&0<s.Fa.length&&L<P&&(c.J=hr(s,c,L,P-L),c.F=s.mb,null==c.F&&0==c.F.length)){u=Jt(s,3,"Could not decode alpha data.");break t}L<c.j&&(y=c.j-L,L=c.j,e(!(1&y)),c.O+=s.R*y,c.N+=s.B*(y>>1),c.W+=s.B*(y>>1),null!=c.F&&(c.J+=c.width*y)),L<P&&(c.O+=c.v,c.N+=c.v>>1,c.W+=c.v>>1,null!=c.F&&(c.J+=c.v),c.ka=L-c.j,c.U=c.va-c.v,c.T=P-L,u=c.put(c))}o+1!=s.Ic||b||(n(s.sa,s.ta-l,d,p+16*s.R,l),n(s.qa,s.ra-f,g,h+8*s.B,f),n(s.Ha,s.Ia-f,m,v+8*s.B,f))}if(!u)return Jt(t,6,"Output aborted.")}return 1}(t,r)),null!=r.bc&&r.bc(r),s&=1}return s?(t.cb=0,s):0}function te(t,e,r,n,i){i=t[e+r+32*n]+(i>>3),t[e+r+32*n]=-256&i?0>i?0:255:i}function ee(t,e,r,n,i,a){te(t,e,0,r,n+i),te(t,e,1,r,n+a),te(t,e,2,r,n-a),te(t,e,3,r,n-i)}function re(t){return(20091*t>>16)+t}function ne(t,e,r,n){var i,o=0,s=a(16);for(i=0;4>i;++i){var c=t[e+0]+t[e+8],u=t[e+0]-t[e+8],l=(35468*t[e+4]>>16)-re(t[e+12]),h=re(t[e+4])+(35468*t[e+12]>>16);s[o+0]=c+h,s[o+1]=u+l,s[o+2]=u-l,s[o+3]=c-h,o+=4,e++}for(i=o=0;4>i;++i)c=(t=s[o+0]+4)+s[o+8],u=t-s[o+8],l=(35468*s[o+4]>>16)-re(s[o+12]),te(r,n,0,0,c+(h=re(s[o+4])+(35468*s[o+12]>>16))),te(r,n,1,0,u+l),te(r,n,2,0,u-l),te(r,n,3,0,c-h),o++,n+=32}function ie(t,e,r,n){var i=t[e+0]+4,a=35468*t[e+4]>>16,o=re(t[e+4]),s=35468*t[e+1]>>16;ee(r,n,0,i+o,t=re(t[e+1]),s),ee(r,n,1,i+a,t,s),ee(r,n,2,i-a,t,s),ee(r,n,3,i-o,t,s)}function ae(t,e,r,n,i){ne(t,e,r,n),i&&ne(t,e+16,r,n+4)}function oe(t,e,r,n){on(t,e+0,r,n,1),on(t,e+32,r,n+128,1)}function se(t,e,r,n){var i;for(t=t[e+0]+4,i=0;4>i;++i)for(e=0;4>e;++e)te(r,n,e,i,t)}function ce(t,e,r,n){t[e+0]&&un(t,e+0,r,n),t[e+16]&&un(t,e+16,r,n+4),t[e+32]&&un(t,e+32,r,n+128),t[e+48]&&un(t,e+48,r,n+128+4)}function ue(t,e,r,n){var i,o=a(16);for(i=0;4>i;++i){var s=t[e+0+i]+t[e+12+i],c=t[e+4+i]+t[e+8+i],u=t[e+4+i]-t[e+8+i],l=t[e+0+i]-t[e+12+i];o[0+i]=s+c,o[8+i]=s-c,o[4+i]=l+u,o[12+i]=l-u}for(i=0;4>i;++i)s=(t=o[0+4*i]+3)+o[3+4*i],c=o[1+4*i]+o[2+4*i],u=o[1+4*i]-o[2+4*i],l=t-o[3+4*i],r[n+0]=s+c>>3,r[n+16]=l+u>>3,r[n+32]=s-c>>3,r[n+48]=l-u>>3,n+=64}function le(t,e,r){var n,i=e-32,a=Bn,o=255-t[i-1];for(n=0;n<r;++n){var s,c=a,u=o+t[e-1];for(s=0;s<r;++s)t[e+s]=c[u+t[i+s]];e+=32}}function he(t,e){le(t,e,4)}function fe(t,e){le(t,e,8)}function de(t,e){le(t,e,16)}function pe(t,e){var r;for(r=0;16>r;++r)n(t,e+32*r,t,e-32,16)}function ge(t,e){var r;for(r=16;0<r;--r)i(t,e,t[e-1],16),e+=32}function me(t,e,r){var n;for(n=0;16>n;++n)i(e,r+32*n,t,16)}function ve(t,e){var r,n=16;for(r=0;16>r;++r)n+=t[e-1+32*r]+t[e+r-32];me(n>>5,t,e)}function be(t,e){var r,n=8;for(r=0;16>r;++r)n+=t[e-1+32*r];me(n>>4,t,e)}function ye(t,e){var r,n=8;for(r=0;16>r;++r)n+=t[e+r-32];me(n>>4,t,e)}function we(t,e){me(128,t,e)}function Ne(t,e,r){return t+2*e+r+2>>2}function Le(t,e){var r,i=e-32;i=new Uint8Array([Ne(t[i-1],t[i+0],t[i+1]),Ne(t[i+0],t[i+1],t[i+2]),Ne(t[i+1],t[i+2],t[i+3]),Ne(t[i+2],t[i+3],t[i+4])]);for(r=0;4>r;++r)n(t,e+32*r,i,0,i.length)}function Ae(t,e){var r=t[e-1],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96];F(t,e+0,16843009*Ne(t[e-1-32],r,n)),F(t,e+32,16843009*Ne(r,n,i)),F(t,e+64,16843009*Ne(n,i,a)),F(t,e+96,16843009*Ne(i,a,a))}function xe(t,e){var r,n=4;for(r=0;4>r;++r)n+=t[e+r-32]+t[e-1+32*r];for(n>>=3,r=0;4>r;++r)i(t,e+32*r,n,4)}function Se(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],c=t[e+2-32],u=t[e+3-32];t[e+0+96]=Ne(n,i,t[e-1+96]),t[e+1+96]=t[e+0+64]=Ne(r,n,i),t[e+2+96]=t[e+1+64]=t[e+0+32]=Ne(a,r,n),t[e+3+96]=t[e+2+64]=t[e+1+32]=t[e+0+0]=Ne(o,a,r),t[e+3+64]=t[e+2+32]=t[e+1+0]=Ne(s,o,a),t[e+3+32]=t[e+2+0]=Ne(c,s,o),t[e+3+0]=Ne(u,c,s)}function _e(t,e){var r=t[e+1-32],n=t[e+2-32],i=t[e+3-32],a=t[e+4-32],o=t[e+5-32],s=t[e+6-32],c=t[e+7-32];t[e+0+0]=Ne(t[e+0-32],r,n),t[e+1+0]=t[e+0+32]=Ne(r,n,i),t[e+2+0]=t[e+1+32]=t[e+0+64]=Ne(n,i,a),t[e+3+0]=t[e+2+32]=t[e+1+64]=t[e+0+96]=Ne(i,a,o),t[e+3+32]=t[e+2+64]=t[e+1+96]=Ne(a,o,s),t[e+3+64]=t[e+2+96]=Ne(o,s,c),t[e+3+96]=Ne(s,c,c)}function Pe(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1-32],o=t[e+0-32],s=t[e+1-32],c=t[e+2-32],u=t[e+3-32];t[e+0+0]=t[e+1+64]=a+o+1>>1,t[e+1+0]=t[e+2+64]=o+s+1>>1,t[e+2+0]=t[e+3+64]=s+c+1>>1,t[e+3+0]=c+u+1>>1,t[e+0+96]=Ne(i,n,r),t[e+0+64]=Ne(n,r,a),t[e+0+32]=t[e+1+96]=Ne(r,a,o),t[e+1+32]=t[e+2+96]=Ne(a,o,s),t[e+2+32]=t[e+3+96]=Ne(o,s,c),t[e+3+32]=Ne(s,c,u)}function ke(t,e){var r=t[e+0-32],n=t[e+1-32],i=t[e+2-32],a=t[e+3-32],o=t[e+4-32],s=t[e+5-32],c=t[e+6-32],u=t[e+7-32];t[e+0+0]=r+n+1>>1,t[e+1+0]=t[e+0+64]=n+i+1>>1,t[e+2+0]=t[e+1+64]=i+a+1>>1,t[e+3+0]=t[e+2+64]=a+o+1>>1,t[e+0+32]=Ne(r,n,i),t[e+1+32]=t[e+0+96]=Ne(n,i,a),t[e+2+32]=t[e+1+96]=Ne(i,a,o),t[e+3+32]=t[e+2+96]=Ne(a,o,s),t[e+3+64]=Ne(o,s,c),t[e+3+96]=Ne(s,c,u)}function Fe(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96];t[e+0+0]=r+n+1>>1,t[e+2+0]=t[e+0+32]=n+i+1>>1,t[e+2+32]=t[e+0+64]=i+a+1>>1,t[e+1+0]=Ne(r,n,i),t[e+3+0]=t[e+1+32]=Ne(n,i,a),t[e+3+32]=t[e+1+64]=Ne(i,a,a),t[e+3+64]=t[e+2+64]=t[e+0+96]=t[e+1+96]=t[e+2+96]=t[e+3+96]=a}function Ie(t,e){var r=t[e-1+0],n=t[e-1+32],i=t[e-1+64],a=t[e-1+96],o=t[e-1-32],s=t[e+0-32],c=t[e+1-32],u=t[e+2-32];t[e+0+0]=t[e+2+32]=r+o+1>>1,t[e+0+32]=t[e+2+64]=n+r+1>>1,t[e+0+64]=t[e+2+96]=i+n+1>>1,t[e+0+96]=a+i+1>>1,t[e+3+0]=Ne(s,c,u),t[e+2+0]=Ne(o,s,c),t[e+1+0]=t[e+3+32]=Ne(r,o,s),t[e+1+32]=t[e+3+64]=Ne(n,r,o),t[e+1+64]=t[e+3+96]=Ne(i,n,r),t[e+1+96]=Ne(a,i,n)}function Ce(t,e){var r;for(r=0;8>r;++r)n(t,e+32*r,t,e-32,8)}function je(t,e){var r;for(r=0;8>r;++r)i(t,e,t[e-1],8),e+=32}function Oe(t,e,r){var n;for(n=0;8>n;++n)i(e,r+32*n,t,8)}function Be(t,e){var r,n=8;for(r=0;8>r;++r)n+=t[e+r-32]+t[e-1+32*r];Oe(n>>4,t,e)}function Me(t,e){var r,n=4;for(r=0;8>r;++r)n+=t[e+r-32];Oe(n>>3,t,e)}function Ee(t,e){var r,n=4;for(r=0;8>r;++r)n+=t[e-1+32*r];Oe(n>>3,t,e)}function qe(t,e){Oe(128,t,e)}function De(t,e,r){var n=t[e-r],i=t[e+0],a=3*(i-n)+jn[1020+t[e-2*r]-t[e+r]],o=On[112+(a+4>>3)];t[e-r]=Bn[255+n+On[112+(a+3>>3)]],t[e+0]=Bn[255+i-o]}function Re(t,e,r,n){var i=t[e+0],a=t[e+r];return Mn[255+t[e-2*r]-t[e-r]]>n||Mn[255+a-i]>n}function Te(t,e,r,n){return 4*Mn[255+t[e-r]-t[e+0]]+Mn[255+t[e-2*r]-t[e+r]]<=n}function Ue(t,e,r,n,i){var a=t[e-3*r],o=t[e-2*r],s=t[e-r],c=t[e+0],u=t[e+r],l=t[e+2*r],h=t[e+3*r];return 4*Mn[255+s-c]+Mn[255+o-u]>n?0:Mn[255+t[e-4*r]-a]<=i&&Mn[255+a-o]<=i&&Mn[255+o-s]<=i&&Mn[255+h-l]<=i&&Mn[255+l-u]<=i&&Mn[255+u-c]<=i}function ze(t,e,r,n){var i=2*n+1;for(n=0;16>n;++n)Te(t,e+n,r,i)&&De(t,e+n,r)}function He(t,e,r,n){var i=2*n+1;for(n=0;16>n;++n)Te(t,e+n*r,1,i)&&De(t,e+n*r,1)}function We(t,e,r,n){var i;for(i=3;0<i;--i)ze(t,e+=4*r,r,n)}function Ve(t,e,r,n){var i;for(i=3;0<i;--i)He(t,e+=4,r,n)}function Ge(t,e,r,n,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,r,a,o))if(Re(t,e,r,s))De(t,e,r);else{var c=t,u=e,l=r,h=c[u-2*l],f=c[u-l],d=c[u+0],p=c[u+l],g=c[u+2*l],m=27*(b=jn[1020+3*(d-f)+jn[1020+h-p]])+63>>7,v=18*b+63>>7,b=9*b+63>>7;c[u-3*l]=Bn[255+c[u-3*l]+b],c[u-2*l]=Bn[255+h+v],c[u-l]=Bn[255+f+m],c[u+0]=Bn[255+d-m],c[u+l]=Bn[255+p-v],c[u+2*l]=Bn[255+g-b]}e+=n}}function Ye(t,e,r,n,i,a,o,s){for(a=2*a+1;0<i--;){if(Ue(t,e,r,a,o))if(Re(t,e,r,s))De(t,e,r);else{var c=t,u=e,l=r,h=c[u-l],f=c[u+0],d=c[u+l],p=On[112+((g=3*(f-h))+4>>3)],g=On[112+(g+3>>3)],m=p+1>>1;c[u-2*l]=Bn[255+c[u-2*l]+m],c[u-l]=Bn[255+h+g],c[u+0]=Bn[255+f-p],c[u+l]=Bn[255+d-m]}e+=n}}function Je(t,e,r,n,i,a){Ge(t,e,r,1,16,n,i,a)}function Xe(t,e,r,n,i,a){Ge(t,e,1,r,16,n,i,a)}function Ke(t,e,r,n,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4*r,r,1,16,n,i,a)}function Ze(t,e,r,n,i,a){var o;for(o=3;0<o;--o)Ye(t,e+=4,1,r,16,n,i,a)}function $e(t,e,r,n,i,a,o,s){Ge(t,e,i,1,8,a,o,s),Ge(r,n,i,1,8,a,o,s)}function Qe(t,e,r,n,i,a,o,s){Ge(t,e,1,i,8,a,o,s),Ge(r,n,1,i,8,a,o,s)}function tr(t,e,r,n,i,a,o,s){Ye(t,e+4*i,i,1,8,a,o,s),Ye(r,n+4*i,i,1,8,a,o,s)}function er(t,e,r,n,i,a,o,s){Ye(t,e+4,1,i,8,a,o,s),Ye(r,n+4,1,i,8,a,o,s)}function rr(){this.ba=new ot,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new ct,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function nr(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function ir(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function ar(){this.ua=0,this.Wa=new M,this.vb=new M,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new d,this.yc=new h}function or(){this.xb=this.a=0,this.l=new Gt,this.ca=new ot,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new N,this.Pb=0,this.wd=new N,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new ar,this.ab=0,this.gc=o(4,ir),this.Oc=0}function sr(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Gt,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function cr(t,e,r,n,i,a,o){for(t=null==t?0:t[e+0],e=0;e<o;++e)i[a+e]=t+r[n+e]&255,t=i[a+e]}function ur(t,e,r,n,i,a,o){var s;if(null==t)cr(null,null,r,n,i,a,o);else for(s=0;s<o;++s)i[a+s]=t[e+s]+r[n+s]&255}function lr(t,e,r,n,i,a,o){if(null==t)cr(null,null,r,n,i,a,o);else{var s,c=t[e+0],u=c,l=c;for(s=0;s<o;++s)u=l+(c=t[e+s])-u,l=r[n+s]+(-256&u?0>u?0:255:u)&255,u=c,i[a+s]=l}}function hr(t,r,i,o){var s=r.width,c=r.o;if(e(null!=t&&null!=r),0>i||0>=o||i+o>c)return null;if(!t.Cc){if(null==t.ga){var u;if(t.ga=new sr,(u=null==t.ga)||(u=r.width*r.o,e(0==t.Gb.length),t.Gb=a(u),t.Uc=0,null==t.Gb?u=0:(t.mb=t.Gb,t.nb=t.Uc,t.rc=null,u=1),u=!u),!u){u=t.ga;var l=t.Fa,h=t.P,f=t.qc,d=t.mb,p=t.nb,g=h+1,m=f-1,b=u.l;if(e(null!=l&&null!=d&&null!=r),mi[0]=null,mi[1]=cr,mi[2]=ur,mi[3]=lr,u.ca=d,u.tb=p,u.c=r.width,u.i=r.height,e(0<u.c&&0<u.i),1>=f)r=0;else if(u.$a=l[h+0]>>0&3,u.Z=l[h+0]>>2&3,u.Lc=l[h+0]>>4&3,h=l[h+0]>>6&3,0>u.$a||1<u.$a||4<=u.Z||1<u.Lc||h)r=0;else if(b.put=dt,b.ac=ft,b.bc=pt,b.ma=u,b.width=r.width,b.height=r.height,b.Da=r.Da,b.v=r.v,b.va=r.va,b.j=r.j,b.o=r.o,u.$a)t:{e(1==u.$a),r=kt();e:for(;;){if(null==r){r=0;break t}if(e(null!=u),u.mc=r,r.c=u.c,r.i=u.i,r.l=u.l,r.l.ma=u,r.l.width=u.c,r.l.height=u.i,r.a=0,v(r.m,l,g,m),!Ft(u.c,u.i,1,r,null))break e;if(1==r.ab&&3==r.gc[0].hc&&At(r.s)?(u.ic=1,l=r.c*r.i,r.Ta=null,r.Ua=0,r.V=a(l),r.Ba=0,null==r.V?(r.a=1,r=0):r=1):(u.ic=0,r=It(r,u.c)),!r)break e;r=1;break t}u.mc=null,r=0}else r=m>=u.c*u.i;u=!r}if(u)return null;1!=t.ga.Lc?t.Ga=0:o=c-i}e(null!=t.ga),e(i+o<=c);t:{if(r=(l=t.ga).c,c=l.l.o,0==l.$a){if(g=t.rc,m=t.Vc,b=t.Fa,h=t.P+1+i*r,f=t.mb,d=t.nb+i*r,e(h<=t.P+t.qc),0!=l.Z)for(e(null!=mi[l.Z]),u=0;u<o;++u)mi[l.Z](g,m,b,h,f,d,r),g=f,m=d,d+=r,h+=r;else for(u=0;u<o;++u)n(f,d,b,h,r),g=f,m=d,d+=r,h+=r;t.rc=g,t.Vc=m}else{if(e(null!=l.mc),r=i+o,e(null!=(u=l.mc)),e(r<=u.i),u.C>=r)r=1;else if(l.ic||mr(),l.ic){l=u.V,g=u.Ba,m=u.c;var y=u.i,w=(b=1,h=u.$/m,f=u.$%m,d=u.m,p=u.s,u.$),N=m*y,L=m*r,x=p.wc,_=w<L?wt(p,f,h):null;e(w<=N),e(r<=y),e(At(p));e:for(;;){for(;!d.h&&w<L;){if(f&x||(_=wt(p,f,h)),e(null!=_),S(d),256>(y=bt(_.G[0],_.H[0],d)))l[g+w]=y,++w,++f>=m&&(f=0,++h<=r&&!(h%16)&&St(u,h));else{if(!(280>y)){b=0;break e}y=mt(y-256,d);var P,k=bt(_.G[4],_.H[4],d);if(S(d),!(w>=(k=vt(m,k=mt(k,d)))&&N-w>=y)){b=0;break e}for(P=0;P<y;++P)l[g+w+P]=l[g+w+P-k];for(w+=y,f+=y;f>=m;)f-=m,++h<=r&&!(h%16)&&St(u,h);w<L&&f&x&&(_=wt(p,f,h))}e(d.h==A(d))}St(u,h>r?r:h);break e}!b||d.h&&w<N?(b=0,u.a=d.h?5:3):u.$=w,r=b}else r=_t(u,u.V,u.Ba,u.c,u.i,r,Ct);if(!r){o=0;break t}}i+o>=c&&(t.Cc=1),o=1}if(!o)return null;if(t.Cc&&(null!=(o=t.ga)&&(o.mc=null),t.ga=null,0<t.Ga))return alert("todo:WebPDequantizeLevels"),null}return t.nb+i*s}function fr(t,e,r,n,i,a){for(;0<i--;){var o,s=t,c=e+(r?1:0),u=t,l=e+(r?0:3);for(o=0;o<n;++o){var h=u[l+4*o];255!=h&&(h*=32897,s[c+4*o+0]=s[c+4*o+0]*h>>23,s[c+4*o+1]=s[c+4*o+1]*h>>23,s[c+4*o+2]=s[c+4*o+2]*h>>23)}e+=a}}function dr(t,e,r,n,i){for(;0<n--;){var a;for(a=0;a<r;++a){var o=t[e+2*a+0],s=15&(u=t[e+2*a+1]),c=4369*s,u=(240&u|u>>4)*c>>16;t[e+2*a+0]=(240&o|o>>4)*c>>16&240|(15&o|o<<4)*c>>16>>4&15,t[e+2*a+1]=240&u|s}e+=i}}function pr(t,e,r,n,i,a,o,s){var c,u,l=255;for(u=0;u<i;++u){for(c=0;c<n;++c){var h=t[e+c];a[o+4*c]=h,l&=h}e+=r,o+=s}return 255!=l}function gr(t,e,r,n,i){var a;for(a=0;a<i;++a)r[n+a]=t[e+a]>>8}function mr(){An=fr,xn=dr,Sn=pr,_n=gr}function vr(r,n,i){t[r]=function(t,r,a,o,s,c,u,l,h,f,d,p,g,m,v,b,y){var w,N=y-1>>1,L=s[c+0]|u[l+0]<<16,A=h[f+0]|d[p+0]<<16;e(null!=t);var x=3*L+A+131074>>2;for(n(t[r+0],255&x,x>>16,g,m),null!=a&&(x=3*A+L+131074>>2,n(a[o+0],255&x,x>>16,v,b)),w=1;w<=N;++w){var S=s[c+w]|u[l+w]<<16,_=h[f+w]|d[p+w]<<16,P=L+S+A+_+524296,k=P+2*(S+A)>>3;x=k+L>>1,L=(P=P+2*(L+_)>>3)+S>>1,n(t[r+2*w-1],255&x,x>>16,g,m+(2*w-1)*i),n(t[r+2*w-0],255&L,L>>16,g,m+(2*w-0)*i),null!=a&&(x=P+A>>1,L=k+_>>1,n(a[o+2*w-1],255&x,x>>16,v,b+(2*w-1)*i),n(a[o+2*w+0],255&L,L>>16,v,b+(2*w+0)*i)),L=S,A=_}1&y||(x=3*L+A+131074>>2,n(t[r+y-1],255&x,x>>16,g,m+(y-1)*i),null!=a&&(x=3*A+L+131074>>2,n(a[o+y-1],255&x,x>>16,v,b+(y-1)*i)))}}function br(){vi[En]=bi,vi[qn]=wi,vi[Dn]=yi,vi[Rn]=Ni,vi[Tn]=Li,vi[Un]=Ai,vi[zn]=xi,vi[Hn]=wi,vi[Wn]=Ni,vi[Vn]=Li,vi[Gn]=Ai}function yr(t){return t&~Ii?0>t?0:255:t>>Fi}function wr(t,e){return yr((19077*t>>8)+(26149*e>>8)-14234)}function Nr(t,e,r){return yr((19077*t>>8)-(6419*e>>8)-(13320*r>>8)+8708)}function Lr(t,e){return yr((19077*t>>8)+(33050*e>>8)-17685)}function Ar(t,e,r,n,i){n[i+0]=wr(t,r),n[i+1]=Nr(t,e,r),n[i+2]=Lr(t,e)}function xr(t,e,r,n,i){n[i+0]=Lr(t,e),n[i+1]=Nr(t,e,r),n[i+2]=wr(t,r)}function Sr(t,e,r,n,i){var a=Nr(t,e,r);e=a<<3&224|Lr(t,e)>>3,n[i+0]=248&wr(t,r)|a>>5,n[i+1]=e}function _r(t,e,r,n,i){var a=240&Lr(t,e)|15;n[i+0]=240&wr(t,r)|Nr(t,e,r)>>4,n[i+1]=a}function Pr(t,e,r,n,i){n[i+0]=255,Ar(t,e,r,n,i+1)}function kr(t,e,r,n,i){xr(t,e,r,n,i),n[i+3]=255}function Fr(t,e,r,n,i){Ar(t,e,r,n,i),n[i+3]=255}function Vt(t,e){return 0>t?0:t>e?e:t}function Ir(e,r,n){t[e]=function(t,e,i,a,o,s,c,u,l){for(var h=u+(-2&l)*n;u!=h;)r(t[e+0],i[a+0],o[s+0],c,u),r(t[e+1],i[a+0],o[s+0],c,u+n),e+=2,++a,++s,u+=2*n;1&l&&r(t[e+0],i[a+0],o[s+0],c,u)}}function Cr(t,e,r){return 0==r?0==t?0==e?6:5:0==e?4:0:r}function jr(t,e,r,n,i){switch(t>>>30){case 3:on(e,r,n,i,0);break;case 2:sn(e,r,n,i);break;case 1:un(e,r,n,i)}}function Or(t,e){var r,a,o=e.M,s=e.Nb,c=t.oc,u=t.pc+40,l=t.oc,h=t.pc+584,f=t.oc,d=t.pc+600;for(r=0;16>r;++r)c[u+32*r-1]=129;for(r=0;8>r;++r)l[h+32*r-1]=129,f[d+32*r-1]=129;for(0<o?c[u-1-32]=l[h-1-32]=f[d-1-32]=129:(i(c,u-32-1,127,21),i(l,h-32-1,127,9),i(f,d-32-1,127,9)),a=0;a<t.za;++a){var p=e.ya[e.aa+a];if(0<a){for(r=-1;16>r;++r)n(c,u+32*r-4,c,u+32*r+12,4);for(r=-1;8>r;++r)n(l,h+32*r-4,l,h+32*r+4,4),n(f,d+32*r-4,f,d+32*r+4,4)}var g=t.Gd,m=t.Hd+a,v=p.ad,b=p.Hc;if(0<o&&(n(c,u-32,g[m].y,0,16),n(l,h-32,g[m].f,0,8),n(f,d-32,g[m].ea,0,8)),p.Za){var y=c,w=u-32+16;for(0<o&&(a>=t.za-1?i(y,w,g[m].y[15],4):n(y,w,g[m+1].y,0,4)),r=0;4>r;r++)y[w+128+r]=y[w+256+r]=y[w+384+r]=y[w+0+r];for(r=0;16>r;++r,b<<=2)y=c,w=u+Di[r],fi[p.Ob[r]](y,w),jr(b,v,16*+r,y,w)}else if(y=Cr(a,o,p.Ob[0]),hi[y](c,u),0!=b)for(r=0;16>r;++r,b<<=2)jr(b,v,16*+r,c,u+Di[r]);for(r=p.Gc,y=Cr(a,o,p.Dd),di[y](l,h),di[y](f,d),b=v,y=l,w=h,255&(p=r>>0)&&(170&p?cn(b,256,y,w):ln(b,256,y,w)),p=f,b=d,255&(r>>=8)&&(170&r?cn(v,320,p,b):ln(v,320,p,b)),o<t.Ub-1&&(n(g[m].y,0,c,u+480,16),n(g[m].f,0,l,h+224,8),n(g[m].ea,0,f,d+224,8)),r=8*s*t.B,g=t.sa,m=t.ta+16*a+16*s*t.R,v=t.qa,p=t.ra+8*a+r,b=t.Ha,y=t.Ia+8*a+r,r=0;16>r;++r)n(g,m+r*t.R,c,u+32*r,16);for(r=0;8>r;++r)n(v,p+r*t.B,l,h+32*r,8),n(b,y+r*t.B,f,d+32*r,8)}}function Br(t,n,i,a,o,s,c,u,l){var h=[0],f=[0],d=0,p=null!=l?l.kd:0,g=null!=l?l:new nr;if(null==t||12>i)return 7;g.data=t,g.w=n,g.ha=i,n=[n],i=[i],g.gb=[g.gb];t:{var m=n,b=i,y=g.gb;if(e(null!=t),e(null!=b),e(null!=y),y[0]=0,12<=b[0]&&!r(t,m[0],"RIFF")){if(r(t,m[0]+8,"WEBP")){y=3;break t}var w=j(t,m[0]+4);if(12>w||4294967286<w){y=3;break t}if(p&&w>b[0]-8){y=7;break t}y[0]=w,m[0]+=12,b[0]-=12}y=0}if(0!=y)return y;for(w=0<g.gb[0],i=i[0];;){t:{var L=t;b=n,y=i;var A=h,x=f,S=m=[0];if((k=d=[d])[0]=0,8>y[0])y=7;else{if(!r(L,b[0],"VP8X")){if(10!=j(L,b[0]+4)){y=3;break t}if(18>y[0]){y=7;break t}var _=j(L,b[0]+8),P=1+C(L,b[0]+12);if(2147483648<=P*(L=1+C(L,b[0]+15))){y=3;break t}null!=S&&(S[0]=_),null!=A&&(A[0]=P),null!=x&&(x[0]=L),b[0]+=18,y[0]-=18,k[0]=1}y=0}}if(d=d[0],m=m[0],0!=y)return y;if(b=!!(2&m),!w&&d)return 3;if(null!=s&&(s[0]=!!(16&m)),null!=c&&(c[0]=b),null!=u&&(u[0]=0),c=h[0],m=f[0],d&&b&&null==l){y=0;break}if(4>i){y=7;break}if(w&&d||!w&&!d&&!r(t,n[0],"ALPH")){i=[i],g.na=[g.na],g.P=[g.P],g.Sa=[g.Sa];t:{_=t,y=n,w=i;var k=g.gb;A=g.na,x=g.P,S=g.Sa;P=22,e(null!=_),e(null!=w),L=y[0];var F=w[0];for(e(null!=A),e(null!=S),A[0]=null,x[0]=null,S[0]=0;;){if(y[0]=L,w[0]=F,8>F){y=7;break t}var I=j(_,L+4);if(4294967286<I){y=3;break t}var O=8+I+1&-2;if(P+=O,0<k&&P>k){y=3;break t}if(!r(_,L,"VP8 ")||!r(_,L,"VP8L")){y=0;break t}if(F[0]<O){y=7;break t}r(_,L,"ALPH")||(A[0]=_,x[0]=L+8,S[0]=I),L+=O,F-=O}}if(i=i[0],g.na=g.na[0],g.P=g.P[0],g.Sa=g.Sa[0],0!=y)break}i=[i],g.Ja=[g.Ja],g.xa=[g.xa];t:if(k=t,y=n,w=i,A=g.gb[0],x=g.Ja,S=g.xa,_=y[0],L=!r(k,_,"VP8 "),P=!r(k,_,"VP8L"),e(null!=k),e(null!=w),e(null!=x),e(null!=S),8>w[0])y=7;else{if(L||P){if(k=j(k,_+4),12<=A&&k>A-12){y=3;break t}if(p&&k>w[0]-8){y=7;break t}x[0]=k,y[0]+=8,w[0]-=8,S[0]=P}else S[0]=5<=w[0]&&47==k[_+0]&&!(k[_+4]>>5),x[0]=w[0];y=0}if(i=i[0],g.Ja=g.Ja[0],g.xa=g.xa[0],n=n[0],0!=y)break;if(4294967286<g.Ja)return 3;if(null==u||b||(u[0]=g.xa?2:1),c=[c],m=[m],g.xa){if(5>i){y=7;break}u=c,p=m,b=s,null==t||5>i?t=0:5<=i&&47==t[n+0]&&!(t[n+4]>>5)?(w=[0],k=[0],A=[0],v(x=new N,t,n,i),gt(x,w,k,A)?(null!=u&&(u[0]=w[0]),null!=p&&(p[0]=k[0]),null!=b&&(b[0]=A[0]),t=1):t=0):t=0}else{if(10>i){y=7;break}u=m,null==t||10>i||!Xt(t,n+3,i-3)?t=0:(p=t[n+0]|t[n+1]<<8|t[n+2]<<16,b=16383&(t[n+7]<<8|t[n+6]),t=16383&(t[n+9]<<8|t[n+8]),1&p||3<(p>>1&7)||!(p>>4&1)||p>>5>=g.Ja||!b||!t?t=0:(c&&(c[0]=b),u&&(u[0]=t),t=1))}if(!t)return 3;if(c=c[0],m=m[0],d&&(h[0]!=c||f[0]!=m))return 3;null!=l&&(l[0]=g,l.offset=n-l.w,e(4294967286>n-l.w),e(l.offset==l.ha-i));break}return 0==y||7==y&&d&&null==l?(null!=s&&(s[0]|=null!=g.na&&0<g.na.length),null!=a&&(a[0]=c),null!=o&&(o[0]=m),0):y}function Mr(t,e,r){var n=e.width,i=e.height,a=0,o=0,s=n,c=i;if(e.Da=null!=t&&0<t.Da,e.Da&&(s=t.cd,c=t.bd,a=t.v,o=t.j,11>r||(a&=-2,o&=-2),0>a||0>o||0>=s||0>=c||a+s>n||o+c>i))return 0;if(e.v=a,e.j=o,e.va=a+s,e.o=o+c,e.U=s,e.T=c,e.da=null!=t&&0<t.da,e.da){if(!E(s,c,r=[t.ib],a=[t.hb]))return 0;e.ib=r[0],e.hb=a[0]}return e.ob=null!=t&&t.ob,e.Kb=null==t||!t.Sd,e.da&&(e.ob=e.ib<3*n/4&&e.hb<3*i/4,e.Kb=0),1}function Er(t){if(null==t)return 2;if(11>t.S){var e=t.f.RGBA;e.fb+=(t.height-1)*e.A,e.A=-e.A}else e=t.f.kb,t=t.height,e.O+=(t-1)*e.fa,e.fa=-e.fa,e.N+=(t-1>>1)*e.Ab,e.Ab=-e.Ab,e.W+=(t-1>>1)*e.Db,e.Db=-e.Db,null!=e.F&&(e.J+=(t-1)*e.lb,e.lb=-e.lb);return 0}function qr(t,e,r,n){if(null==n||0>=t||0>=e)return 2;if(null!=r){if(r.Da){var i=r.cd,o=r.bd,s=-2&r.v,c=-2&r.j;if(0>s||0>c||0>=i||0>=o||s+i>t||c+o>e)return 2;t=i,e=o}if(r.da){if(!E(t,e,i=[r.ib],o=[r.hb]))return 2;t=i[0],e=o[0]}}n.width=t,n.height=e;t:{var u=n.width,l=n.height;if(t=n.S,0>=u||0>=l||!(t>=En&&13>t))t=2;else{if(0>=n.Rd&&null==n.sd){s=o=i=e=0;var h=(c=u*zi[t])*l;if(11>t||(o=(l+1)/2*(e=(u+1)/2),12==t&&(s=(i=u)*l)),null==(l=a(h+2*o+s))){t=1;break t}n.sd=l,11>t?((u=n.f.RGBA).eb=l,u.fb=0,u.A=c,u.size=h):((u=n.f.kb).y=l,u.O=0,u.fa=c,u.Fd=h,u.f=l,u.N=0+h,u.Ab=e,u.Cd=o,u.ea=l,u.W=0+h+o,u.Db=e,u.Ed=o,12==t&&(u.F=l,u.J=0+h+2*o),u.Tc=s,u.lb=i)}if(e=1,i=n.S,o=n.width,s=n.height,i>=En&&13>i)if(11>i)t=n.f.RGBA,e&=(c=Math.abs(t.A))*(s-1)+o<=t.size,e&=c>=o*zi[i],e&=null!=t.eb;else{t=n.f.kb,c=(o+1)/2,h=(s+1)/2,u=Math.abs(t.fa);l=Math.abs(t.Ab);var f=Math.abs(t.Db),d=Math.abs(t.lb),p=d*(s-1)+o;e&=u*(s-1)+o<=t.Fd,e&=l*(h-1)+c<=t.Cd,e=(e&=f*(h-1)+c<=t.Ed)&u>=o&l>=c&f>=c,e&=null!=t.y,e&=null!=t.f,e&=null!=t.ea,12==i&&(e&=d>=o,e&=p<=t.Tc,e&=null!=t.F)}else e=0;t=e?0:2}}return 0!=t||null!=r&&r.fd&&(t=Er(n)),t}var Dr=64,Rr=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Tr=24,Ur=32,zr=8,Hr=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];R("Predictor0","PredictorAdd0"),t.Predictor0=function(){return 4278190080},t.Predictor1=function(t){return t},t.Predictor2=function(t,e,r){return e[r+0]},t.Predictor3=function(t,e,r){return e[r+1]},t.Predictor4=function(t,e,r){return e[r-1]},t.Predictor5=function(t,e,r){return U(U(t,e[r+1]),e[r+0])},t.Predictor6=function(t,e,r){return U(t,e[r-1])},t.Predictor7=function(t,e,r){return U(t,e[r+0])},t.Predictor8=function(t,e,r){return U(e[r-1],e[r+0])},t.Predictor9=function(t,e,r){return U(e[r+0],e[r+1])},t.Predictor10=function(t,e,r){return U(U(t,e[r-1]),U(e[r+0],e[r+1]))},t.Predictor11=function(t,e,r){var n=e[r+0];return 0>=W(n>>24&255,t>>24&255,(e=e[r-1])>>24&255)+W(n>>16&255,t>>16&255,e>>16&255)+W(n>>8&255,t>>8&255,e>>8&255)+W(255&n,255&t,255&e)?n:t},t.Predictor12=function(t,e,r){var n=e[r+0];return(z((t>>24&255)+(n>>24&255)-((e=e[r-1])>>24&255))<<24|z((t>>16&255)+(n>>16&255)-(e>>16&255))<<16|z((t>>8&255)+(n>>8&255)-(e>>8&255))<<8|z((255&t)+(255&n)-(255&e)))>>>0},t.Predictor13=function(t,e,r){var n=e[r-1];return(H((t=U(t,e[r+0]))>>24&255,n>>24&255)<<24|H(t>>16&255,n>>16&255)<<16|H(t>>8&255,n>>8&255)<<8|H(t>>0&255,n>>0&255))>>>0};var Wr=t.PredictorAdd0;t.PredictorAdd1=V,R("Predictor2","PredictorAdd2"),R("Predictor3","PredictorAdd3"),R("Predictor4","PredictorAdd4"),R("Predictor5","PredictorAdd5"),R("Predictor6","PredictorAdd6"),R("Predictor7","PredictorAdd7"),R("Predictor8","PredictorAdd8"),R("Predictor9","PredictorAdd9"),R("Predictor10","PredictorAdd10"),R("Predictor11","PredictorAdd11"),R("Predictor12","PredictorAdd12"),R("Predictor13","PredictorAdd13");var Vr=t.PredictorAdd2;X("ColorIndexInverseTransform","MapARGB","32b",(function(t){return t>>8&255}),(function(t){return t})),X("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",(function(t){return t}),(function(t){return t>>8&255}));var Gr,Yr=t.ColorIndexInverseTransform,Jr=t.MapARGB,Xr=t.VP8LColorIndexInverseTransformAlpha,Kr=t.MapAlpha,Zr=t.VP8LPredictorsAdd=[];Zr.length=16,(t.VP8LPredictors=[]).length=16,(t.VP8LPredictorsAdd_C=[]).length=16,(t.VP8LPredictors_C=[]).length=16;var $r,Qr,tn,en,rn,nn,an,on,sn,cn,un,ln,hn,fn,dn,pn,gn,mn,vn,bn,yn,wn,Nn,Ln,An,xn,Sn,_n,Pn=a(511),kn=a(2041),Fn=a(225),In=a(767),Cn=0,jn=kn,On=Fn,Bn=In,Mn=Pn,En=0,qn=1,Dn=2,Rn=3,Tn=4,Un=5,zn=6,Hn=7,Wn=8,Vn=9,Gn=10,Yn=[2,3,7],Jn=[3,3,11],Xn=[280,256,256,256,40],Kn=[0,1,1,1,0],Zn=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],$n=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],Qn=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],ti=8,ei=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],ri=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ni=null,ii=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],ai=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],oi=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],si=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],ci=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],ui=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],li=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],hi=[],fi=[],di=[],pi=1,gi=2,mi=[],vi=[];vr("UpsampleRgbLinePair",Ar,3),vr("UpsampleBgrLinePair",xr,3),vr("UpsampleRgbaLinePair",Fr,4),vr("UpsampleBgraLinePair",kr,4),vr("UpsampleArgbLinePair",Pr,4),vr("UpsampleRgba4444LinePair",_r,2),vr("UpsampleRgb565LinePair",Sr,2);var bi=t.UpsampleRgbLinePair,yi=t.UpsampleBgrLinePair,wi=t.UpsampleRgbaLinePair,Ni=t.UpsampleBgraLinePair,Li=t.UpsampleArgbLinePair,Ai=t.UpsampleRgba4444LinePair,xi=t.UpsampleRgb565LinePair,Si=16,_i=1<<Si-1,Pi=-227,ki=482,Fi=6,Ii=(256<<Fi)-1,Ci=0,ji=a(256),Oi=a(256),Bi=a(256),Mi=a(256),Ei=a(ki-Pi),qi=a(ki-Pi);Ir("YuvToRgbRow",Ar,3),Ir("YuvToBgrRow",xr,3),Ir("YuvToRgbaRow",Fr,4),Ir("YuvToBgraRow",kr,4),Ir("YuvToArgbRow",Pr,4),Ir("YuvToRgba4444Row",_r,2),Ir("YuvToRgb565Row",Sr,2);var Di=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Ri=[0,2,8],Ti=[8,7,6,4,4,2,2,2,1,1,1,1],Ui=1;this.WebPDecodeRGBA=function(t,r,n,i,a){var o=qn,s=new rr,c=new ot;s.ba=c,c.S=o,c.width=[c.width],c.height=[c.height];var u=c.width,l=c.height,h=new st;if(null==h||null==t)var f=2;else e(null!=h),f=Br(t,r,n,h.width,h.height,h.Pd,h.Qd,h.format,null);if(0!=f?u=0:(null!=u&&(u[0]=h.width[0]),null!=l&&(l[0]=h.height[0]),u=1),u){c.width=c.width[0],c.height=c.height[0],null!=i&&(i[0]=c.width),null!=a&&(a[0]=c.height);t:{if(i=new Gt,(a=new nr).data=t,a.w=r,a.ha=n,a.kd=1,r=[0],e(null!=a),(0==(t=Br(a.data,a.w,a.ha,null,null,null,r,null,a))||7==t)&&r[0]&&(t=4),0==(r=t)){if(e(null!=s),i.data=a.data,i.w=a.w+a.offset,i.ha=a.ha-a.offset,i.put=dt,i.ac=ft,i.bc=pt,i.ma=s,a.xa){if(null==(t=kt())){s=1;break t}if(function(t,r){var n=[0],i=[0],a=[0];e:for(;;){if(null==t)return 0;if(null==r)return t.a=2,0;if(t.l=r,t.a=0,v(t.m,r.data,r.w,r.ha),!gt(t.m,n,i,a)){t.a=3;break e}if(t.xb=gi,r.width=n[0],r.height=i[0],!Ft(n[0],i[0],1,t,null))break e;return 1}return e(0!=t.a),0}(t,i)){if(i=0==(r=qr(i.width,i.height,s.Oa,s.ba))){e:{i=t;r:for(;;){if(null==i){i=0;break e}if(e(null!=i.s.yc),e(null!=i.s.Ya),e(0<i.s.Wb),e(null!=(n=i.l)),e(null!=(a=n.ma)),0!=i.xb){if(i.ca=a.ba,i.tb=a.tb,e(null!=i.ca),!Mr(a.Oa,n,Rn)){i.a=2;break r}if(!It(i,n.width))break r;if(n.da)break r;if((n.da||nt(i.ca.S))&&mr(),11>i.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),null!=i.ca.f.kb.F&&mr()),i.Pb&&0<i.s.ua&&null==i.s.vb.X&&!O(i.s.vb,i.s.Wa.Xa)){i.a=1;break r}i.xb=0}if(!_t(i,i.V,i.Ba,i.c,i.i,n.o,Lt))break r;a.Dc=i.Ma,i=1;break e}e(0!=i.a),i=0}i=!i}i&&(r=t.a)}else r=t.a}else{if(null==(t=new Yt)){s=1;break t}if(t.Fa=a.na,t.P=a.P,t.qc=a.Sa,Kt(t,i)){if(0==(r=qr(i.width,i.height,s.Oa,s.ba))){if(t.Aa=0,n=s.Oa,e(null!=(a=t)),null!=n){if(0<(u=0>(u=n.Md)?0:100<u?255:255*u/100)){for(l=h=0;4>l;++l)12>(f=a.pb[l]).lc&&(f.ia=u*Ti[0>f.lc?0:f.lc]>>3),h|=f.ia;h&&(alert("todo:VP8InitRandom"),a.ia=1)}a.Ga=n.Id,100<a.Ga?a.Ga=100:0>a.Ga&&(a.Ga=0)}Qt(t,i)||(r=t.a)}}else r=t.a}0==r&&null!=s.Oa&&s.Oa.fd&&(r=Er(s.ba))}s=r}o=0!=s?null:11>o?c.f.RGBA.eb:c.f.kb.y}else o=null;return o};var zi=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function u(t,e){for(var r="",n=0;n<4;n++)r+=String.fromCharCode(t[e++]);return r}function l(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16)>>>0}function h(t,e){return(t[e+0]<<0|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}new c;var f=[0],d=[0],p=[],g=new c,m=t,v=function(t,e){var r={},n=0,i=!1,a=0,o=0;if(r.frames=[],!
/** @license
     * Copyright (c) 2017 Dominik Homberger
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    https://webpjs.appspot.com
    WebPRiffParser dominikhlbg@gmail.com
    */
function(t,e,r,n){for(var i=0;i<n;i++)if(t[e+i]!=r.charCodeAt(i))return!0;return!1}(t,e,"RIFF",4)){var s,c;h(t,e+=4);for(e+=8;e<t.length;){var f=u(t,e),d=h(t,e+=4);e+=4;var p=d+(1&d);switch(f){case"VP8 ":case"VP8L":void 0===r.frames[n]&&(r.frames[n]={});(v=r.frames[n]).src_off=i?o:e-8,v.src_size=a+d+8,n++,i&&(i=!1,a=0,o=0);break;case"VP8X":(v=r.header={}).feature_flags=t[e];var g=e+4;v.canvas_width=1+l(t,g);g+=3;v.canvas_height=1+l(t,g);g+=3;break;case"ALPH":i=!0,a=p+8,o=e-8;break;case"ANIM":(v=r.header).bgcolor=h(t,e);g=e+4;v.loop_count=(s=t)[(c=g)+0]<<0|s[c+1]<<8;g+=2;break;case"ANMF":var m,v;(v=r.frames[n]={}).offset_x=2*l(t,e),e+=3,v.offset_y=2*l(t,e),e+=3,v.width=1+l(t,e),e+=3,v.height=1+l(t,e),e+=3,v.duration=l(t,e),e+=3,m=t[e++],v.dispose=1&m,v.blend=m>>1&1}"ANMF"!=f&&(e+=p)}return r}}(m,0);v.response=m,v.rgbaoutput=!0,v.dataurl=!1;var b=v.header?v.header:null,y=v.frames?v.frames:null;if(b){b.loop_counter=b.loop_count,f=[b.canvas_height],d=[b.canvas_width];for(var w=0;w<y.length&&0!=y[w].blend;w++);}var N=y[0],L=g.WebPDecodeRGBA(m,N.src_off,N.src_size,d,f);N.rgba=L,N.imgwidth=d[0],N.imgheight=f[0];for(var A=0;A<d[0]*f[0]*4;A++)p[A]=L[A];return this.width=d,this.height=f,this.data=p,this}!function(t){var e=function(){return!0},r=function(e,r,i,u){var l=4,h=o;switch(u){case t.image_compression.FAST:l=1,h=a;break;case t.image_compression.MEDIUM:l=6,h=s;break;case t.image_compression.SLOW:l=9,h=c}var f=_e(e=n(e,r,i,h),{level:l});return t.__addimage__.arrayBufferToBinaryString(f)},n=function(t,e,r,n){for(var i,a,o,s=t.length/e,c=new Uint8Array(t.length+s),u=l(),f=0;f<s;f+=1){if(o=f*e,i=t.subarray(o,o+e),n)c.set(n(i,r,a),o+f);else{for(var d,p=u.length,g=[];d<p;d+=1)g[d]=u[d](i,r,a);var m=h(g.concat());c.set(g[m],o+f)}a=i}return c},i=function(t){var e=Array.apply([],t);return e.unshift(0),e},a=function(t,e){var r,n=[],i=t.length;n[0]=1;for(var a=0;a<i;a+=1)r=t[a-e]||0,n[a+1]=t[a]-r+256&255;return n},o=function(t,e,r){var n,i=[],a=t.length;i[0]=2;for(var o=0;o<a;o+=1)n=r&&r[o]||0,i[o+1]=t[o]-n+256&255;return i},s=function(t,e,r){var n,i,a=[],o=t.length;a[0]=3;for(var s=0;s<o;s+=1)n=t[s-e]||0,i=r&&r[s]||0,a[s+1]=t[s]+256-(n+i>>>1)&255;return a},c=function(t,e,r){var n,i,a,o,s=[],c=t.length;s[0]=4;for(var l=0;l<c;l+=1)n=t[l-e]||0,i=r&&r[l]||0,a=r&&r[l-e]||0,o=u(n,i,a),s[l+1]=t[l]-o+256&255;return s},u=function(t,e,r){if(t===e&&e===r)return t;var n=Math.abs(e-r),i=Math.abs(t-r),a=Math.abs(t+e-r-r);return n<=i&&n<=a?t:i<=a?e:r},l=function(){return[i,a,o,s,c]},h=function(t){var e=t.map((function(t){return t.reduce((function(t,e){return t+Math.abs(e)}),0)}));return e.indexOf(Math.min.apply(null,e))};t.processPNG=function(n,i,a,o){var s,c,u,l,h,f,d,p,g,m,v,b,y,w,N,L=this.decode.FLATE_DECODE,A="";if(this.__addimage__.isArrayBuffer(n)&&(n=new Uint8Array(n)),this.__addimage__.isArrayBufferView(n)){if(n=(u=new Oe(n)).imgData,c=u.bits,s=u.colorSpace,h=u.colors,-1!==[4,6].indexOf(u.colorType)){if(8===u.bits){g=(p=32==u.pixelBitlength?new Uint32Array(u.decodePixels().buffer):16==u.pixelBitlength?new Uint16Array(u.decodePixels().buffer):new Uint8Array(u.decodePixels().buffer)).length,v=new Uint8Array(g*u.colors),m=new Uint8Array(g);var x,S=u.pixelBitlength-u.bits;for(w=0,N=0;w<g;w++){for(y=p[w],x=0;x<S;)v[N++]=y>>>x&255,x+=u.bits;m[w]=y>>>x&255}}if(16===u.bits){g=(p=new Uint32Array(u.decodePixels().buffer)).length,v=new Uint8Array(g*(32/u.pixelBitlength)*u.colors),m=new Uint8Array(g*(32/u.pixelBitlength)),b=u.colors>1,w=0,N=0;for(var _=0;w<g;)y=p[w++],v[N++]=y>>>0&255,b&&(v[N++]=y>>>16&255,y=p[w++],v[N++]=y>>>0&255),m[_++]=y>>>16&255;c=8}o!==t.image_compression.NONE&&e()?(n=r(v,u.width*u.colors,u.colors,o),d=r(m,u.width,1,o)):(n=v,d=m,L=void 0)}if(3===u.colorType&&(s=this.color_spaces.INDEXED,f=u.palette,u.transparency.indexed)){var P=u.transparency.indexed,k=0;for(w=0,g=P.length;w<g;++w)k+=P[w];if((k/=255)===g-1&&-1!==P.indexOf(0))l=[P.indexOf(0)];else if(k!==g){for(p=u.decodePixels(),m=new Uint8Array(p.length),w=0,g=p.length;w<g;w++)m[w]=P[p[w]];d=r(m,u.width,1)}}var F=function(e){var r;switch(e){case t.image_compression.FAST:r=11;break;case t.image_compression.MEDIUM:r=13;break;case t.image_compression.SLOW:r=14;break;default:r=12}return r}(o);return L===this.decode.FLATE_DECODE&&(A="/Predictor "+F+" "),A+="/Colors "+h+" /BitsPerComponent "+c+" /Columns "+u.width,(this.__addimage__.isArrayBuffer(n)||this.__addimage__.isArrayBufferView(n))&&(n=this.__addimage__.arrayBufferToBinaryString(n)),(d&&this.__addimage__.isArrayBuffer(d)||this.__addimage__.isArrayBufferView(d))&&(d=this.__addimage__.arrayBufferToBinaryString(d)),{alias:a,data:n,index:i,filter:L,decodeParameters:A,transparency:l,palette:f,sMask:d,predictor:F,width:u.width,height:u.height,bitsPerComponent:c,colorSpace:s}}}}(M.API),function(t){t.processGIF89A=function(e,r,n,i){var a=new Be(e),o=a.width,s=a.height,c=[];a.decodeAndBlitFrameRGBA(0,c);var u={data:c,width:o,height:s},l=new Ee(100).encode(u,100);return t.processJPEG.call(this,l,r,n,i)},t.processGIF87A=t.processGIF89A}(M.API),qe.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var r=this.datav.getUint8(this.pos++,!0),n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:n,blue:r,quad:a}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},qe.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(t){i.log("bit decode error:"+t)}},qe.prototype.bit1=function(){var t,e=Math.ceil(this.width/8),r=e%4;for(t=this.height-1;t>=0;t--){for(var n=this.bottom_up?t:this.height-1-t,i=0;i<e;i++)for(var a=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+8*i*4,s=0;s<8&&8*i+s<this.width;s++){var c=this.palette[a>>7-s&1];this.data[o+4*s]=c.blue,this.data[o+4*s+1]=c.green,this.data[o+4*s+2]=c.red,this.data[o+4*s+3]=255}0!==r&&(this.pos+=4-r)}},qe.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<t;i++){var a=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+2*i*4,s=a>>4,c=15&a,u=this.palette[s];if(this.data[o]=u.blue,this.data[o+1]=u.green,this.data[o+2]=u.red,this.data[o+3]=255,2*i+1>=this.width)break;u=this.palette[c],this.data[o+4]=u.blue,this.data[o+4+1]=u.green,this.data[o+4+2]=u.red,this.data[o+4+3]=255}0!==e&&(this.pos+=4-e)}},qe.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;e>=0;e--){for(var r=this.bottom_up?e:this.height-1-e,n=0;n<this.width;n++){var i=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+4*n;if(i<this.palette.length){var o=this.palette[i];this.data[a]=o.red,this.data[a+1]=o.green,this.data[a+2]=o.blue,this.data[a+3]=255}else this.data[a]=255,this.data[a+1]=255,this.data[a+2]=255,this.data[a+3]=255}0!==t&&(this.pos+=4-t)}},qe.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var n=this.bottom_up?r:this.height-1-r,i=0;i<this.width;i++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var o=(a&e)/e*255|0,s=(a>>5&e)/e*255|0,c=(a>>10&e)/e*255|0,u=a>>15?255:0,l=n*this.width*4+4*i;this.data[l]=c,this.data[l+1]=s,this.data[l+2]=o,this.data[l+3]=u}this.pos+=t}},qe.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),r=parseInt("111111",2),n=this.height-1;n>=0;n--){for(var i=this.bottom_up?n:this.height-1-n,a=0;a<this.width;a++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var s=(o&e)/e*255|0,c=(o>>5&r)/r*255|0,u=(o>>11)/e*255|0,l=i*this.width*4+4*a;this.data[l]=u,this.data[l+1]=c,this.data[l+2]=s,this.data[l+3]=255}this.pos+=t}},qe.prototype.bit24=function(){for(var t=this.height-1;t>=0;t--){for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=e*this.width*4+4*r;this.data[o]=a,this.data[o+1]=i,this.data[o+2]=n,this.data[o+3]=255}this.pos+=this.width%4}},qe.prototype.bit32=function(){for(var t=this.height-1;t>=0;t--)for(var e=this.bottom_up?t:this.height-1-t,r=0;r<this.width;r++){var n=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*r;this.data[s]=a,this.data[s+1]=i,this.data[s+2]=n,this.data[s+3]=o}},qe.prototype.getData=function(){return this.data},
/**
   * @license
   * Copyright (c) 2018 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){t.processBMP=function(e,r,n,i){var a=new qe(e,!1),o=a.width,s=a.height,c={data:a.getData(),width:o,height:s},u=new Ee(100).encode(c,100);return t.processJPEG.call(this,u,r,n,i)}}(M.API),De.prototype.getData=function(){return this.data},
/**
   * @license
   * Copyright (c) 2019 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){t.processWEBP=function(e,r,n,i){var a=new De(e,!1),o=a.width,s=a.height,c={data:a.getData(),width:o,height:s},u=new Ee(100).encode(c,100);return t.processJPEG.call(this,u,r,n,i)}}(M.API),
/**
   * @license
   *
   * Copyright (c) 2021 Antti Palola, https://github.com/Pantura
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * ====================================================================
   */
function(t){t.processRGBA=function(t,e,r){for(var n=t.data,i=n.length,a=new Uint8Array(i/4*3),o=new Uint8Array(i/4),s=0,c=0,u=0;u<i;u+=4){var l=n[u],h=n[u+1],f=n[u+2],d=n[u+3];a[s++]=l,a[s++]=h,a[s++]=f,o[c++]=d}var p=this.__addimage__.arrayBufferToBinaryString(a);return{alpha:this.__addimage__.arrayBufferToBinaryString(o),data:p,index:e,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:t.width,height:t.height}}}(M.API),
/**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){t.setLanguage=function(t){return void 0===this.internal.languageSettings&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),void 0!=={af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]&&(this.internal.languageSettings.languageCode=t,!1===this.internal.languageSettings.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")})),this.internal.languageSettings.isSubscribed=!0)),this}}(M.API),ke=M.API,Fe=ke.getCharWidthsArray=function(t,r){var n,i,a=(r=r||{}).font||this.internal.getFont(),o=r.fontSize||this.internal.getFontSize(),s=r.charSpace||this.internal.getCharSpace(),c=r.widths?r.widths:a.metadata.Unicode.widths,u=c.fof?c.fof:1,l=r.kerning?r.kerning:a.metadata.Unicode.kerning,h=l.fof?l.fof:1,f=!1!==r.doKerning,d=0,p=t.length,g=0,m=c[0]||u,v=[];for(n=0;n<p;n++)i=t.charCodeAt(n),"function"==typeof a.metadata.widthOfString?v.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(i))+s*(1e3/o)||0)/1e3):(d=f&&"object"===e(l[i])&&!isNaN(parseInt(l[i][g],10))?l[i][g]/h:0,v.push((c[i]||m)/u+d)),g=i;return v},Ie=ke.getStringUnitWidth=function(t,e){var r=(e=e||{}).fontSize||this.internal.getFontSize(),n=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return ke.processArabic&&(t=ke.processArabic(t)),"function"==typeof n.metadata.widthOfString?n.metadata.widthOfString(t,r,i)/r:Fe.apply(this,arguments).reduce((function(t,e){return t+e}),0)},Ce=function(t,e,r,n){for(var i=[],a=0,o=t.length,s=0;a!==o&&s+e[a]<r;)s+=e[a],a++;i.push(t.slice(0,a));var c=a;for(s=0;a!==o;)s+e[a]>n&&(i.push(t.slice(c,a)),s=0,c=a),s+=e[a],a++;return c!==a&&i.push(t.slice(c,a)),i},je=function(t,e,r){r||(r={});var n,i,a,o,s,c,u,l=[],h=[l],f=r.textIndent||0,d=0,p=0,g=t.split(" "),m=Fe.apply(this,[" ",r])[0];if(c=-1===r.lineIndent?g[0].length+2:r.lineIndent||0){var v=Array(c).join(" "),b=[];g.map((function(t){(t=t.split(/\s*\n/)).length>1?b=b.concat(t.map((function(t,e){return(e&&t.length?"\n":"")+t}))):b.push(t[0])})),g=b,c=Ie.apply(this,[v,r])}for(a=0,o=g.length;a<o;a++){var y=0;if(n=g[a],c&&"\n"==n[0]&&(n=n.substr(1),y=1),f+d+(p=(i=Fe.apply(this,[n,r])).reduce((function(t,e){return t+e}),0))>e||y){if(p>e){for(s=Ce.apply(this,[n,i,e-(f+d),e]),l.push(s.shift()),l=[s.pop()];s.length;)h.push([s.shift()]);p=i.slice(n.length-(l[0]?l[0].length:0)).reduce((function(t,e){return t+e}),0)}else l=[n];h.push(l),f=p+c,d=m}else l.push(n),f+=d+p,d=m}return u=c?function(t,e){return(e?v:"")+t.join(" ")}:function(t){return t.join(" ")},h.map(u)},ke.splitTextToSize=function(t,e,r){var n,i=(r=r||{}).fontSize||this.internal.getFontSize(),a=function(t){if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var e=this.internal.getFont(t.fontName,t.fontStyle);return e.metadata.Unicode?{widths:e.metadata.Unicode.widths||{0:1},kerning:e.metadata.Unicode.kerning||{}}:{font:e.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}.call(this,r);n=Array.isArray(t)?t:String(t).split(/\r?\n/);var o=1*this.internal.scaleFactor*e/i;a.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/i:0,a.lineIndent=r.lineIndent;var s,c,u=[];for(s=0,c=n.length;s<c;s++)u=u.concat(je.apply(this,[n[s],o,a]));return u},function(t){t.__fontmetrics__=t.__fontmetrics__||{};for(var r="klmnopqrstuvwxyz",n={},i={},a=0;a<r.length;a++)n[r[a]]="0123456789abcdef"[a],i["0123456789abcdef"[a]]=r[a];var o=function(t){return"0x"+parseInt(t,10).toString(16)},s=t.__fontmetrics__.compress=function(t){var r,n,a,c,u=["{"];for(var l in t){if(r=t[l],isNaN(parseInt(l,10))?n="'"+l+"'":(l=parseInt(l,10),n=(n=o(l).slice(2)).slice(0,-1)+i[n.slice(-1)]),"number"==typeof r)r<0?(a=o(r).slice(3),c="-"):(a=o(r).slice(2),c=""),a=c+a.slice(0,-1)+i[a.slice(-1)];else{if("object"!==e(r))throw new Error("Don't know what to do with value type "+e(r)+".");a=s(r)}u.push(n+a)}return u.push("}"),u.join("")},c=t.__fontmetrics__.uncompress=function(t){if("string"!=typeof t)throw new Error("Invalid argument passed to uncompress.");for(var e,r,i,a,o={},s=1,c=o,u=[],l="",h="",f=t.length-1,d=1;d<f;d+=1)"'"==(a=t[d])?e?(i=e.join(""),e=void 0):e=[]:e?e.push(a):"{"==a?(u.push([c,i]),c={},i=void 0):"}"==a?((r=u.pop())[0][r[1]]=c,i=void 0,c=r[0]):"-"==a?s=-1:void 0===i?n.hasOwnProperty(a)?(l+=n[a],i=parseInt(l,16)*s,s=1,l=""):l+=a:n.hasOwnProperty(a)?(h+=n[a],c[i]=parseInt(h,16)*s,s=1,i=void 0,h=""):h+=a;return o},u={codePages:["WinAnsiEncoding"],WinAnsiEncoding:c("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},l={Unicode:{Courier:u,"Courier-Bold":u,"Courier-BoldOblique":u,"Courier-Oblique":u,Helvetica:u,"Helvetica-Bold":u,"Helvetica-BoldOblique":u,"Helvetica-Oblique":u,"Times-Roman":u,"Times-Bold":u,"Times-BoldItalic":u,"Times-Italic":u}},h={Unicode:{"Courier-Oblique":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":c("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":c("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:c("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":c("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:c("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":c("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":c("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":c("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":c("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};t.events.push(["addFont",function(t){var e=t.font,r=h.Unicode[e.postScriptName];r&&(e.metadata.Unicode={},e.metadata.Unicode.widths=r.widths,e.metadata.Unicode.kerning=r.kerning);var n=l.Unicode[e.postScriptName];n&&(e.metadata.Unicode.encoding=n,e.encoding=n.codePages[0])}])}(M.API),
/**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var e=function(t){for(var e=t.length,r=new Uint8Array(e),n=0;n<e;n++)r[n]=t.charCodeAt(n);return r};t.API.events.push(["addFont",function(r){var n=void 0,i=r.font,a=r.instance;if(!i.isStandardFont){if(void 0===a)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");if("string"!=typeof(n=!1===a.existsFileInVFS(i.postScriptName)?a.loadFile(i.postScriptName):a.getFileFromVFS(i.postScriptName)))throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+i.postScriptName+"').");!function(r,n){n=/^\x00\x01\x00\x00/.test(n)?e(n):e(c(n)),r.metadata=t.API.TTFFont.open(n),r.metadata.Unicode=r.metadata.Unicode||{encoding:{},kerning:{},widths:[]},r.metadata.glyIdsUsed=[0]}(i,n)}}])}(M),function(n){function a(){return(r.canvg?Promise.resolve(r.canvg):"object"===(void 0===t?"undefined":e(t))&&"undefined"!=typeof module?new Promise((function(t,e){try{t(require("canvg"))}catch(t){e(t)}})):"function"==typeof define&&define.amd?new Promise((function(t,e){try{require(["canvg"],t)}catch(t){e(t)}})):Promise.reject(new Error("Could not load canvg"))).catch((function(t){return Promise.reject(new Error("Could not load canvg: "+t))})).then((function(t){return t.default?t.default:t}))}n.addSvgAsImage=function(t,e,r,n,o,s,c,u){if(isNaN(e)||isNaN(r))throw i.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(n)||isNaN(o))throw i.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var l=document.createElement("canvas");l.width=n,l.height=o;var h=l.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,l.width,l.height);var f={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},d=this;return a().then((function(e){return e.fromString(h,t,f)}),(function(){return Promise.reject(new Error("Could not load canvg."))})).then((function(t){return t.render(f)})).then((function(){d.addImage(l.toDataURL("image/jpeg",1),e,r,n,o,c,u)}))}}(M.API),
/**
   * @license
   * ====================================================================
   * Copyright (c) 2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * ====================================================================
   */
function(t){t.putTotalPages=function(t){var e,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(e=new RegExp(t,"g"),r=this.internal.getNumberOfPages()):(e=new RegExp(this.pdfEscape16(t,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var n=1;n<=this.internal.getNumberOfPages();n++)for(var i=0;i<this.internal.pages[n].length;i++)this.internal.pages[n][i]=this.internal.pages[n][i].replace(e,r);return this}}(M.API),function(t){t.viewerPreferences=function(t,r){var n;t=t||{},r=r||!1;var i,a,o,s={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},c=Object.keys(s),u=[],l=0,h=0,f=0;function d(t,e){var r,n=!1;for(r=0;r<t.length;r+=1)t[r]===e&&(n=!0);return n}if(void 0===this.internal.viewerpreferences&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(s)),this.internal.viewerpreferences.isSubscribed=!1),n=this.internal.viewerpreferences.configuration,"reset"===t||!0===r){var p=c.length;for(f=0;f<p;f+=1)n[c[f]].value=n[c[f]].defaultValue,n[c[f]].explicitSet=!1}if("object"===e(t))for(a in t)if(o=t[a],d(c,a)&&void 0!==o){if("boolean"===n[a].type&&"boolean"==typeof o)n[a].value=o;else if("name"===n[a].type&&d(n[a].valueSet,o))n[a].value=o;else if("integer"===n[a].type&&Number.isInteger(o))n[a].value=o;else if("array"===n[a].type){for(l=0;l<o.length;l+=1)if(i=!0,1===o[l].length&&"number"==typeof o[l][0])u.push(String(o[l]-1));else if(o[l].length>1){for(h=0;h<o[l].length;h+=1)"number"!=typeof o[l][h]&&(i=!1);!0===i&&u.push([o[l][0]-1,o[l][1]-1].join(" "))}n[a].value="["+u.join(" ")+"]"}else n[a].value=n[a].defaultValue;n[a].explicitSet=!0}return!1===this.internal.viewerpreferences.isSubscribed&&(this.internal.events.subscribe("putCatalog",(function(){var t,e=[];for(t in n)!0===n[t].explicitSet&&("name"===n[t].type?e.push("/"+t+" /"+n[t].value):e.push("/"+t+" "+n[t].value));0!==e.length&&this.internal.write("/ViewerPreferences\n<<\n"+e.join("\n")+"\n>>")})),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=n,this}}(M.API),
/** ====================================================================
   * @license
   * jsPDF XMP metadata plugin
   * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * ====================================================================
   */
function(t){var e=function(){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),r=unescape(encodeURIComponent(t)),n=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),i=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),a=unescape(encodeURIComponent("</x:xmpmeta>")),o=r.length+n.length+i.length+e.length+a.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+o+" >>"),this.internal.write("stream"),this.internal.write(e+r+n+i+a),this.internal.write("endstream"),this.internal.write("endobj")},r=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};t.addMetadata=function(t,n){return void 0===this.internal.__metadata__&&(this.internal.__metadata__={metadata:t,namespaceuri:n||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",r),this.internal.events.subscribe("postPutResources",e)),this}}(M.API),function(t){var e=t.API,r=e.pdfEscape16=function(t,e){for(var r,n=e.metadata.Unicode.widths,i=["","0","00","000","0000"],a=[""],o=0,s=t.length;o<s;++o){if(r=e.metadata.characterToGlyph(t.charCodeAt(o)),e.metadata.glyIdsUsed.push(r),e.metadata.toUnicode[r]=t.charCodeAt(o),-1==n.indexOf(r)&&(n.push(r),n.push([parseInt(e.metadata.widthOfGlyph(r),10)])),"0"==r)return a.join("");r=r.toString(16),a.push(i[4-r.length],r)}return a.join("")},n=function(t){var e,r,n,i,a,o,s;for(a="/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",n=[],o=0,s=(r=Object.keys(t).sort((function(t,e){return t-e}))).length;o<s;o++)e=r[o],n.length>=100&&(a+="\n"+n.length+" beginbfchar\n"+n.join("\n")+"\nendbfchar",n=[]),void 0!==t[e]&&null!==t[e]&&"function"==typeof t[e].toString&&(i=("0000"+t[e].toString(16)).slice(-4),e=("0000"+(+e).toString(16)).slice(-4),n.push("<"+e+"><"+i+">"));return n.length&&(a+="\n"+n.length+" beginbfchar\n"+n.join("\n")+"\nendbfchar\n"),a+="endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"};e.events.push(["putFont",function(e){!function(e){var r=e.font,i=e.out,a=e.newObject,o=e.putStream;if(r.metadata instanceof t.API.TTFFont&&"Identity-H"===r.encoding){for(var s=r.metadata.Unicode.widths,c=r.metadata.subset.encode(r.metadata.glyIdsUsed,1),u="",l=0;l<c.length;l++)u+=String.fromCharCode(c[l]);var h=a();o({data:u,addLength1:!0,objectId:h}),i("endobj");var f=a();o({data:n(r.metadata.toUnicode),addLength1:!0,objectId:f}),i("endobj");var d=a();i("<<"),i("/Type /FontDescriptor"),i("/FontName /"+F(r.fontName)),i("/FontFile2 "+h+" 0 R"),i("/FontBBox "+t.API.PDFObject.convert(r.metadata.bbox)),i("/Flags "+r.metadata.flags),i("/StemV "+r.metadata.stemV),i("/ItalicAngle "+r.metadata.italicAngle),i("/Ascent "+r.metadata.ascender),i("/Descent "+r.metadata.decender),i("/CapHeight "+r.metadata.capHeight),i(">>"),i("endobj");var p=a();i("<<"),i("/Type /Font"),i("/BaseFont /"+F(r.fontName)),i("/FontDescriptor "+d+" 0 R"),i("/W "+t.API.PDFObject.convert(s)),i("/CIDToGIDMap /Identity"),i("/DW 1000"),i("/Subtype /CIDFontType2"),i("/CIDSystemInfo"),i("<<"),i("/Supplement 0"),i("/Registry (Adobe)"),i("/Ordering ("+r.encoding+")"),i(">>"),i(">>"),i("endobj"),r.objectNumber=a(),i("<<"),i("/Type /Font"),i("/Subtype /Type0"),i("/ToUnicode "+f+" 0 R"),i("/BaseFont /"+F(r.fontName)),i("/Encoding /"+r.encoding),i("/DescendantFonts ["+p+" 0 R]"),i(">>"),i("endobj"),r.isAlreadyPutted=!0}}(e)}]);e.events.push(["putFont",function(e){!function(e){var r=e.font,i=e.out,a=e.newObject,o=e.putStream;if(r.metadata instanceof t.API.TTFFont&&"WinAnsiEncoding"===r.encoding){for(var s=r.metadata.rawData,c="",u=0;u<s.length;u++)c+=String.fromCharCode(s[u]);var l=a();o({data:c,addLength1:!0,objectId:l}),i("endobj");var h=a();o({data:n(r.metadata.toUnicode),addLength1:!0,objectId:h}),i("endobj");var f=a();i("<<"),i("/Descent "+r.metadata.decender),i("/CapHeight "+r.metadata.capHeight),i("/StemV "+r.metadata.stemV),i("/Type /FontDescriptor"),i("/FontFile2 "+l+" 0 R"),i("/Flags 96"),i("/FontBBox "+t.API.PDFObject.convert(r.metadata.bbox)),i("/FontName /"+F(r.fontName)),i("/ItalicAngle "+r.metadata.italicAngle),i("/Ascent "+r.metadata.ascender),i(">>"),i("endobj"),r.objectNumber=a();for(var d=0;d<r.metadata.hmtx.widths.length;d++)r.metadata.hmtx.widths[d]=parseInt(r.metadata.hmtx.widths[d]*(1e3/r.metadata.head.unitsPerEm));i("<</Subtype/TrueType/Type/Font/ToUnicode "+h+" 0 R/BaseFont/"+F(r.fontName)+"/FontDescriptor "+f+" 0 R/Encoding/"+r.encoding+" /FirstChar 29 /LastChar 255 /Widths "+t.API.PDFObject.convert(r.metadata.hmtx.widths)+">>"),i("endobj"),r.isAlreadyPutted=!0}}(e)}]);var i=function(t){var e,n=t.text||"",i=t.x,a=t.y,o=t.options||{},s=t.mutex||{},c=s.pdfEscape,u=s.activeFontKey,l=s.fonts,h=u,f="",d=0,p="",g=l[h].encoding;if("Identity-H"!==l[h].encoding)return{text:n,x:i,y:a,options:o,mutex:s};for(p=n,h=u,Array.isArray(n)&&(p=n[0]),d=0;d<p.length;d+=1)l[h].metadata.hasOwnProperty("cmap")&&(e=l[h].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),e||p[d].charCodeAt(0)<256&&l[h].metadata.hasOwnProperty("Unicode")?f+=p[d]:f+="";var m="";return parseInt(h.slice(1))<14||"WinAnsiEncoding"===g?m=c(f,h).split("").map((function(t){return t.charCodeAt(0).toString(16)})).join(""):"Identity-H"===g&&(m=r(f,l[h])),s.isHex=!0,{text:m,x:i,y:a,options:o,mutex:s}};e.events.push(["postProcessText",function(t){var e=t.text||"",r=[],n={text:e,x:t.x,y:t.y,options:t.options,mutex:t.mutex};if(Array.isArray(e)){var a=0;for(a=0;a<e.length;a+=1)Array.isArray(e[a])&&3===e[a].length?r.push([i(Object.assign({},n,{text:e[a][0]})).text,e[a][1],e[a][2]]):r.push(i(Object.assign({},n,{text:e[a]})).text);t.text=r}else t.text=i(Object.assign({},n,{text:e})).text}])}(M),
/**
   * @license
   * jsPDF virtual FileSystem functionality
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
function(t){var e=function(){return void 0===this.internal.vFS&&(this.internal.vFS={}),!0};t.existsFileInVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]},t.addFileToVFS=function(t,r){return e.call(this),this.internal.vFS[t]=r,this},t.getFileFromVFS=function(t){return e.call(this),void 0!==this.internal.vFS[t]?this.internal.vFS[t]:null}}(M.API),
/**
   * @license
   * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
   * MIT License
   */
function(t){t.__bidiEngine__=t.prototype.__bidiEngine__=function(t){var r,n,i,a,o,s,c,u=e,l=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],h=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],f={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},d={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},p=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],g=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),m=!1,v=0;this.__bidiEngine__={};var b=function(t){var e=t.charCodeAt(),r=e>>8,n=d[r];return void 0!==n?u[256*n+(255&e)]:252===r||253===r?"AL":g.test(r)?"L":8===r?"R":"N"},y=function(t){for(var e,r=0;r<t.length;r++){if("L"===(e=b(t.charAt(r))))return!1;if("R"===e)return!0}return!1},w=function(t,e,o,s){var c,u,l,h,f=e[s];switch(f){case"L":case"R":m=!1;break;case"N":case"AN":break;case"EN":m&&(f="AN");break;case"AL":m=!0,f="R";break;case"WS":f="N";break;case"CS":s<1||s+1>=e.length||"EN"!==(c=o[s-1])&&"AN"!==c||"EN"!==(u=e[s+1])&&"AN"!==u?f="N":m&&(u="AN"),f=u===c?u:"N";break;case"ES":f="EN"===(c=s>0?o[s-1]:"B")&&s+1<e.length&&"EN"===e[s+1]?"EN":"N";break;case"ET":if(s>0&&"EN"===o[s-1]){f="EN";break}if(m){f="N";break}for(l=s+1,h=e.length;l<h&&"ET"===e[l];)l++;f=l<h&&"EN"===e[l]?"EN":"N";break;case"NSM":if(i&&!a){for(h=e.length,l=s+1;l<h&&"NSM"===e[l];)l++;if(l<h){var d=t[s],p=d>=1425&&d<=2303||64286===d;if(c=e[l],p&&("R"===c||"AL"===c)){f="R";break}}}f=s<1||"B"===(c=e[s-1])?"N":o[s-1];break;case"B":m=!1,r=!0,f=v;break;case"S":n=!0,f="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":m=!1;break;case"BN":f="N"}return f},N=function(t,e,r){var n=t.split("");return r&&L(n,r,{hiLevel:v}),n.reverse(),e&&e.reverse(),n.join("")},L=function(t,e,i){var a,o,s,c,u,d=-1,p=t.length,g=0,y=[],N=v?h:l,L=[];for(m=!1,r=!1,n=!1,o=0;o<p;o++)L[o]=b(t[o]);for(s=0;s<p;s++){if(u=g,y[s]=w(t,L,y,s),a=240&(g=N[u][f[y[s]]]),g&=15,e[s]=c=N[g][5],a>0)if(16===a){for(o=d;o<s;o++)e[o]=1;d=-1}else d=-1;if(N[g][6])-1===d&&(d=s);else if(d>-1){for(o=d;o<s;o++)e[o]=c;d=-1}"B"===L[s]&&(e[s]=0),i.hiLevel|=c}n&&function(t,e,r){for(var n=0;n<r;n++)if("S"===t[n]){e[n]=v;for(var i=n-1;i>=0&&"WS"===t[i];i--)e[i]=v}}(L,e,p)},A=function(t,e,n,i,a){if(!(a.hiLevel<t)){if(1===t&&1===v&&!r)return e.reverse(),void(n&&n.reverse());for(var o,s,c,u,l=e.length,h=0;h<l;){if(i[h]>=t){for(c=h+1;c<l&&i[c]>=t;)c++;for(u=h,s=c-1;u<s;u++,s--)o=e[u],e[u]=e[s],e[s]=o,n&&(o=n[u],n[u]=n[s],n[s]=o);h=c}h++}}},x=function(t,e,r){var n=t.split(""),i={hiLevel:v};return r||(r=[]),L(n,r,i),function(t,e,r){if(0!==r.hiLevel&&c)for(var n,i=0;i<t.length;i++)1===e[i]&&(n=p.indexOf(t[i]))>=0&&(t[i]=p[n+1])}(n,r,i),A(2,n,e,r,i),A(1,n,e,r,i),n.join("")};return this.__bidiEngine__.doBidiReorder=function(t,e,r){if(function(t,e){if(e)for(var r=0;r<t.length;r++)e[r]=r;void 0===a&&(a=y(t)),void 0===s&&(s=y(t))}(t,e),i||!o||s)if(i&&o&&a^s)v=a?1:0,t=N(t,e,r);else if(!i&&o&&s)v=a?1:0,t=x(t,e,r),t=N(t,e);else if(!i||a||o||s){if(i&&!o&&a^s)t=N(t,e),a?(v=0,t=x(t,e,r)):(v=1,t=x(t,e,r),t=N(t,e));else if(i&&a&&!o&&s)v=1,t=x(t,e,r),t=N(t,e);else if(!i&&!o&&a^s){var n=c;a?(v=1,t=x(t,e,r),v=0,c=!1,t=x(t,e,r),c=n):(v=0,t=x(t,e,r),t=N(t,e),v=1,c=!1,t=x(t,e,r),c=n,t=N(t,e))}}else v=0,t=x(t,e,r);else v=a?1:0,t=x(t,e,r);return t},this.__bidiEngine__.setOptions=function(t){t&&(i=t.isInputVisual,o=t.isOutputVisual,a=t.isInputRtl,s=t.isOutputRtl,c=t.isSymmetricSwapping)},this.__bidiEngine__.setOptions(t),this.__bidiEngine__};var e=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new t.__bidiEngine__({isInputVisual:!0});t.API.events.push(["postProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),i=(t.mutex,n.lang,[]);if(n.isInputVisual="boolean"!=typeof n.isInputVisual||n.isInputVisual,r.setOptions(n),"[object Array]"===Object.prototype.toString.call(e)){var a=0;for(i=[],a=0;a<e.length;a+=1)"[object Array]"===Object.prototype.toString.call(e[a])?i.push([r.doBidiReorder(e[a][0]),e[a][1],e[a][2]]):i.push([r.doBidiReorder(e[a])]);t.text=i}else t.text=r.doBidiReorder(e);r.setOptions({isInputVisual:!0})}])}(M),M.API.TTFFont=function(){function t(t){var e;if(this.rawData=t,e=this.contents=new Te(t),this.contents.pos=4,"ttcf"===e.readString(4))throw new Error("TTCF not supported.");e.pos=0,this.parse(),this.subset=new ar(this),this.registerTTF()}return t.open=function(e){return new t(e)},t.prototype.parse=function(){return this.directory=new Ue(this.contents),this.head=new We(this),this.name=new Ze(this),this.cmap=new Ge(this),this.toUnicode={},this.hhea=new Ye(this),this.maxp=new $e(this),this.hmtx=new Qe(this),this.post=new Xe(this),this.os2=new Je(this),this.loca=new ir(this),this.glyf=new er(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},t.prototype.registerTTF=function(){var t,e,r,n,i;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=function(){var e,r,n,i;for(i=[],e=0,r=(n=this.bbox).length;e<r;e++)t=n[e],i.push(Math.round(t*this.scaleFactor));return i}.call(this),this.stemV=0,this.post.exists?(r=255&(n=this.post.italic_angle),0!=(32768&(e=n>>16))&&(e=-(1+(65535^e))),this.italicAngle=+(e+"."+r)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=1===(i=this.familyClass)||2===i||3===i||4===i||5===i||7===i,this.isScript=10===this.familyClass,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},t.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},t.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},t.prototype.widthOfString=function(t,e,r){var n,i,a,o;for(a=0,i=0,o=(t=""+t).length;0<=o?i<o:i>o;i=0<=o?++i:--i)n=t.charCodeAt(i),a+=this.widthOfGlyph(this.characterToGlyph(n))+r*(1e3/e)||0;return a*(e/1e3)},t.prototype.lineHeight=function(t,e){var r;return null==e&&(e=!1),r=e?this.lineGap:0,(this.ascender+r-this.decender)/1e3*t},t}();var Re,Te=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return(t=this.readUInt32())>=2147483648?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return(t=this.readUInt16())>=32768?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,r;for(r=[],e=0;0<=t?e<t:e>t;e=0<=t?++e:--e)r[e]=String.fromCharCode(this.readByte());return r.join("")},t.prototype.writeString=function(t){var e,r,n;for(n=[],e=0,r=t.length;0<=r?e<r:e>r;e=0<=r?++e:--e)n.push(this.writeByte(t.charCodeAt(e)));return n},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,r,n,i,a,o,s;return t=this.readByte(),e=this.readByte(),r=this.readByte(),n=this.readByte(),i=this.readByte(),a=this.readByte(),o=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^r)+4294967296*(255^n)+16777216*(255^i)+65536*(255^a)+256*(255^o)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*r+4294967296*n+16777216*i+65536*a+256*o+s},t.prototype.writeLongLong=function(t){var e,r;return e=Math.floor(t/4294967296),r=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.read=function(t){var e,r;for(e=[],r=0;0<=t?r<t:r>t;r=0<=t?++r:--r)e.push(this.readByte());return e},t.prototype.write=function(t){var e,r,n,i;for(i=[],r=0,n=t.length;r<n;r++)e=t[r],i.push(this.writeByte(e));return i},t}(),Ue=function(){var t;function e(t){var e,r,n;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},r=0,n=this.tableCount;0<=n?r<n:r>n;r=0<=n?++r:--r)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}return e.prototype.encode=function(e){var r,n,i,a,o,s,c,u,l,h,f,d,p;for(p in f=Object.keys(e).length,s=Math.log(2),l=16*Math.floor(Math.log(f)/s),a=Math.floor(l/s),u=16*f-l,(n=new Te).writeInt(this.scalarType),n.writeShort(f),n.writeShort(l),n.writeShort(a),n.writeShort(u),i=16*f,c=n.pos+i,o=null,d=[],e)for(h=e[p],n.writeString(p),n.writeInt(t(h)),n.writeInt(c),n.writeInt(h.length),d=d.concat(h),"head"===p&&(o=c),c+=h.length;c%4;)d.push(0),c++;return n.write(d),r=2981146554-t(n.data),n.pos=o+8,n.writeUInt32(r),n.data},t=function(t){var e,r,n,i;for(t=tr.call(t);t.length%4;)t.push(0);for(n=new Te(t),r=0,e=0,i=t.length;e<i;e=e+=4)r+=n.readUInt32();return 4294967295&r},e}(),ze={}.hasOwnProperty,He=function(t,e){for(var r in e)ze.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},We=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e.prototype.encode=function(t){var e;return(e=new Te).writeInt(this.version),e.writeInt(this.revision),e.writeInt(this.checkSumAdjustment),e.writeInt(this.magicNumber),e.writeShort(this.flags),e.writeShort(this.unitsPerEm),e.writeLongLong(this.created),e.writeLongLong(this.modified),e.writeShort(this.xMin),e.writeShort(this.yMin),e.writeShort(this.xMax),e.writeShort(this.yMax),e.writeShort(this.macStyle),e.writeShort(this.lowestRecPPEM),e.writeShort(this.fontDirectionHint),e.writeShort(t),e.writeShort(this.glyphDataFormat),e.data},e}(Re=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}()),Ve=function(){function t(t,e){var r,n,i,a,o,s,c,u,l,h,f,d,p,g,m,v,b;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=e+t.readInt(),l=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=0;s<256;++s)this.codeMap[s]=t.readByte();break;case 4:for(f=t.readUInt16(),h=f/2,t.pos+=6,i=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),t.pos+=2,p=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),c=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),u=function(){var e,r;for(r=[],s=e=0;0<=h?e<h:e>h;s=0<=h?++e:--e)r.push(t.readUInt16());return r}(),n=(this.length-t.pos+this.offset)/2,o=function(){var e,r;for(r=[],s=e=0;0<=n?e<n:e>n;s=0<=n?++e:--e)r.push(t.readUInt16());return r}(),s=m=0,b=i.length;m<b;s=++m)for(g=i[s],r=v=d=p[s];d<=g?v<=g:v>=g;r=d<=g?++v:--v)0===u[s]?a=r+c[s]:0!==(a=o[u[s]/2+(r-d)-(h-s)]||0)&&(a+=c[s]),this.codeMap[r]=65535&a}t.pos=l}return t.encode=function(t,e){var r,n,i,a,o,s,c,u,l,h,f,d,p,g,m,v,b,y,w,N,L,A,x,S,_,P,k,F,I,C,j,O,B,M,E,q,D,R,T,U,z,H,W,V,G,Y;switch(F=new Te,a=Object.keys(t).sort((function(t,e){return t-e})),e){case"macroman":for(p=0,g=function(){var t=[];for(d=0;d<256;++d)t.push(0);return t}(),v={0:0},i={},I=0,B=a.length;I<B;I++)null==v[W=t[n=a[I]]]&&(v[W]=++p),i[n]={old:t[n],new:v[t[n]]},g[n]=v[t[n]];return F.writeUInt16(1),F.writeUInt16(0),F.writeUInt32(12),F.writeUInt16(0),F.writeUInt16(262),F.writeUInt16(0),F.write(g),{charMap:i,subtable:F.data,maxGlyphID:p+1};case"unicode":for(P=[],l=[],b=0,v={},r={},m=c=null,C=0,M=a.length;C<M;C++)null==v[w=t[n=a[C]]]&&(v[w]=++b),r[n]={old:w,new:v[w]},o=v[w]-n,null!=m&&o===c||(m&&l.push(m),P.push(n),c=o),m=n;for(m&&l.push(m),l.push(65535),P.push(65535),S=2*(x=P.length),A=2*Math.pow(Math.log(x)/Math.LN2,2),h=Math.log(A/2)/Math.LN2,L=2*x-A,s=[],N=[],f=[],d=j=0,E=P.length;j<E;d=++j){if(_=P[d],u=l[d],65535===_){s.push(0),N.push(0);break}if(_-(k=r[_].new)>=32768)for(s.push(0),N.push(2*(f.length+x-d)),n=O=_;_<=u?O<=u:O>=u;n=_<=u?++O:--O)f.push(r[n].new);else s.push(k-_),N.push(0)}for(F.writeUInt16(3),F.writeUInt16(1),F.writeUInt32(12),F.writeUInt16(4),F.writeUInt16(16+8*x+2*f.length),F.writeUInt16(0),F.writeUInt16(S),F.writeUInt16(A),F.writeUInt16(h),F.writeUInt16(L),z=0,q=l.length;z<q;z++)n=l[z],F.writeUInt16(n);for(F.writeUInt16(0),H=0,D=P.length;H<D;H++)n=P[H],F.writeUInt16(n);for(V=0,R=s.length;V<R;V++)o=s[V],F.writeUInt16(o);for(G=0,T=N.length;G<T;G++)y=N[G],F.writeUInt16(y);for(Y=0,U=f.length;Y<U;Y++)p=f[Y],F.writeUInt16(p);return{charMap:r,subtable:F.data,maxGlyphID:b+1}}},t}(),Ge=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="cmap",e.prototype.parse=function(t){var e,r,n;for(t.pos=this.offset,this.version=t.readUInt16(),n=t.readUInt16(),this.tables=[],this.unicode=null,r=0;0<=n?r<n:r>n;r=0<=n?++r:--r)e=new Ve(t,this.offset),this.tables.push(e),e.isUnicode&&null==this.unicode&&(this.unicode=e);return!0},e.encode=function(t,e){var r,n;return null==e&&(e="macroman"),r=Ve.encode(t,e),(n=new Te).writeUInt16(0),n.writeUInt16(1),r.table=n.data.concat(r.subtable),r},e}(Re),Ye=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(Re),Je=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="OS/2",e.prototype.parse=function(t){if(t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var e,r;for(r=[],e=0;e<10;++e)r.push(t.readByte());return r}(),this.charRange=function(){var e,r;for(r=[],e=0;e<4;++e)r.push(t.readInt());return r}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var e,r;for(r=[],e=0;e<2;e=++e)r.push(t.readInt());return r}(),this.version>1))return this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()},e}(Re),Xe=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="post",e.prototype.parse=function(t){var e,r,n;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:break;case 131072:var i;for(r=t.readUInt16(),this.glyphNameIndex=[],i=0;0<=r?i<r:i>r;i=0<=r?++i:--i)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],n=[];t.pos<this.offset+this.length;)e=t.readByte(),n.push(this.names.push(t.readString(e)));return n;case 151552:return r=t.readUInt16(),this.offsets=t.read(r);case 196608:break;case 262144:return this.map=function(){var e,r,n;for(n=[],i=e=0,r=this.file.maxp.numGlyphs;0<=r?e<r:e>r;i=0<=r?++e:--e)n.push(t.readUInt32());return n}.call(this)}},e}(Re),Ke=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},Ze=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="name",e.prototype.parse=function(t){var e,r,n,i,a,o,s,c,u,l,h;for(t.pos=this.offset,t.readShort(),e=t.readShort(),o=t.readShort(),r=[],i=0;0<=e?i<e:i>e;i=0<=e?++i:--i)r.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+o+t.readShort()});for(s={},i=u=0,l=r.length;u<l;i=++u)n=r[i],t.pos=n.offset,c=t.readString(n.length),a=new Ke(c,n),null==s[h=n.nameID]&&(s[h]=[]),s[n.nameID].push(a);this.strings=s,this.copyright=s[0],this.fontFamily=s[1],this.fontSubfamily=s[2],this.uniqueSubfamily=s[3],this.fontName=s[4],this.version=s[5];try{this.postscriptName=s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch(t){this.postscriptName=s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=s[7],this.manufacturer=s[8],this.designer=s[9],this.description=s[10],this.vendorUrl=s[11],this.designerUrl=s[12],this.license=s[13],this.licenseUrl=s[14],this.preferredFamily=s[15],this.preferredSubfamily=s[17],this.compatibleFull=s[18],this.sampleText=s[19]},e}(Re),$e=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(Re),Qe=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="hmtx",e.prototype.parse=function(t){var e,r,n,i,a,o,s;for(t.pos=this.offset,this.metrics=[],e=0,o=this.file.hhea.numberOfMetrics;0<=o?e<o:e>o;e=0<=o?++e:--e)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(n=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var r,i;for(i=[],e=r=0;0<=n?r<n:r>n;e=0<=n?++r:--r)i.push(t.readInt16());return i}(),this.widths=function(){var t,e,r,n;for(n=[],t=0,e=(r=this.metrics).length;t<e;t++)i=r[t],n.push(i.advance);return n}.call(this),r=this.widths[this.widths.length-1],s=[],e=a=0;0<=n?a<n:a>n;e=0<=n?++a:--a)s.push(this.widths.push(r));return s},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(Re),tr=[].slice,er=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="glyf",e.prototype.parse=function(){return this.cache={}},e.prototype.glyphFor=function(t){var e,r,n,i,a,o,s,c,u,l;return t in this.cache?this.cache[t]:(i=this.file.loca,e=this.file.contents,r=i.indexOf(t),0===(n=i.lengthOf(t))?this.cache[t]=null:(e.pos=this.offset+r,a=(o=new Te(e.read(n))).readShort(),c=o.readShort(),l=o.readShort(),s=o.readShort(),u=o.readShort(),this.cache[t]=-1===a?new nr(o,c,l,s,u):new rr(o,a,c,l,s,u),this.cache[t]))},e.prototype.encode=function(t,e,r){var n,i,a,o,s;for(a=[],i=[],o=0,s=e.length;o<s;o++)n=t[e[o]],i.push(a.length),n&&(a=a.concat(n.encode(r)));return i.push(a.length),{table:a,offsets:i}},e}(Re),rr=function(){function t(t,e,r,n,i,a){this.raw=t,this.numberOfContours=e,this.xMin=r,this.yMin=n,this.xMax=i,this.yMax=a,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),nr=function(){function t(t,e,r,n,i){var a,o;for(this.raw=t,this.xMin=e,this.yMin=r,this.xMax=n,this.yMax=i,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],a=this.raw;o=a.readShort(),this.glyphOffsets.push(a.pos),this.glyphIDs.push(a.readUInt16()),32&o;)a.pos+=1&o?4:2,128&o?a.pos+=8:64&o?a.pos+=4:8&o&&(a.pos+=2)}return 1,8,32,64,128,t.prototype.encode=function(){var t,e,r;for(e=new Te(tr.call(this.raw.data)),t=0,r=this.glyphIDs.length;t<r;++t)e.pos=this.glyphOffsets[t];return e.data},t}(),ir=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return He(e,t),e.prototype.tag="loca",e.prototype.parse=function(t){var e,r;return t.pos=this.offset,e=this.file.head.indexToLocFormat,this.offsets=0===e?function(){var e,n;for(n=[],r=0,e=this.length;r<e;r+=2)n.push(2*t.readUInt16());return n}.call(this):function(){var e,n;for(n=[],r=0,e=this.length;r<e;r+=4)n.push(t.readUInt32());return n}.call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,e){for(var r=new Uint32Array(this.offsets.length),n=0,i=0,a=0;a<r.length;++a)if(r[a]=n,i<e.length&&e[i]==a){++i,r[a]=n;var o=this.offsets[a],s=this.offsets[a+1]-o;s>0&&(n+=s)}for(var c=new Array(4*r.length),u=0;u<r.length;++u)c[4*u+3]=255&r[u],c[4*u+2]=(65280&r[u])>>8,c[4*u+1]=(16711680&r[u])>>16,c[4*u]=(4278190080&r[u])>>24;return c},e}(Re),ar=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var t,e,r,n,i;for(e in n=this.font.cmap.tables[0].codeMap,t={},i=this.subset)r=i[e],t[e]=n[r];return t},t.prototype.glyphsFor=function(t){var e,r,n,i,a,o,s;for(n={},a=0,o=t.length;a<o;a++)n[i=t[a]]=this.font.glyf.glyphFor(i);for(i in e=[],n)(null!=(r=n[i])?r.compound:void 0)&&e.push.apply(e,r.glyphIDs);if(e.length>0)for(i in s=this.glyphsFor(e))r=s[i],n[i]=r;return n},t.prototype.encode=function(t,e){var r,n,i,a,o,s,c,u,l,h,f,d,p,g,m;for(n in r=Ge.encode(this.generateCmap(),"unicode"),a=this.glyphsFor(t),f={0:0},m=r.charMap)f[(s=m[n]).old]=s.new;for(d in h=r.maxGlyphID,a)d in f||(f[d]=h++);return u=function(t){var e,r;for(e in r={},t)r[t[e]]=e;return r}(f),l=Object.keys(u).sort((function(t,e){return t-e})),p=function(){var t,e,r;for(r=[],t=0,e=l.length;t<e;t++)o=l[t],r.push(u[o]);return r}(),i=this.font.glyf.encode(a,p,f),c=this.font.loca.encode(i.offsets,p),g={cmap:this.font.cmap.raw(),glyf:i.table,loca:c,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(e)},this.font.os2.exists&&(g["OS/2"]=this.font.os2.raw()),this.font.directory.encode(g)},t}();M.API.PDFObject=function(){var t;function e(){}return t=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},e.convert=function(r){var n,i,a,o;if(Array.isArray(r))return"["+function(){var t,i,a;for(a=[],t=0,i=r.length;t<i;t++)n=r[t],a.push(e.convert(n));return a}().join(" ")+"]";if("string"==typeof r)return"/"+r;if(null!=r?r.isString:void 0)return"("+r+")";if(r instanceof Date)return"(D:"+t(r.getUTCFullYear(),4)+t(r.getUTCMonth(),2)+t(r.getUTCDate(),2)+t(r.getUTCHours(),2)+t(r.getUTCMinutes(),2)+t(r.getUTCSeconds(),2)+"Z)";if("[object Object]"==={}.toString.call(r)){for(i in a=["<<"],r)o=r[i],a.push("/"+i+" "+e.convert(o));return a.push(">>"),a.join("\n")}return""+r},e}(),t.AcroForm=xt,t.AcroFormAppearance=Lt,t.AcroFormButton=gt,t.AcroFormCheckBox=yt,t.AcroFormChoiceField=ht,t.AcroFormComboBox=dt,t.AcroFormEditBox=pt,t.AcroFormListBox=ft,t.AcroFormPasswordField=Nt,t.AcroFormPushButton=mt,t.AcroFormRadioButton=vt,t.AcroFormTextField=wt,t.GState=C,t.ShadingPattern=O,t.TilingPattern=B,t.default=M,t.jsPDF=M,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=jspdf.umd.min.js.map

;
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).JSZip=e()}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l="function"==typeof require&&require,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});
;
/* ==========================================================================
   Informes de Calidad — GOMS
   Vanilla JS SPA. No build step, no external network dependency at runtime
   (jsPDF is vendored locally in /vendor). Data lives in IndexedDB so the
   app is fully usable offline; PDFs are generated on-device.
   ========================================================================== */

const ZUBLIN_LOGO_PNG = 'data:image/png;base64,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';
const ZUBLIN_LOGO_RATIO = 539/249; // w/h of the source PNG, keep image proportions when placing it

/* Custom tile icons for the home screen — provided by the user, one per report type. */
const ICON_FORTIFICACION_PNG = 'data:image/png;base64,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';
const ICON_TORQUE_PNG = 'data:image/png;base64,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';
const ICON_MALLA_PNG = 'data:image/png;base64,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';
const ICON_SHOTCRETE_PNG = 'data:image/png;base64,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';
const ICON_LECHADO_PNG = 'data:image/png;base64,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';
const ICON_CAMINATA_PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAYAAAA9dtSCAABB0ElEQVR42u29aZRd13Ue+O1zzh3e/GpEFWYQJEiC4iCRIiWKEkgrFh3ZlqXYYByn5UiJEnWcuNNJljvudHdArmWnlU7HXu5Od8eW2nKs1Y5DOLEs0ZQoWQZgjZRIkRQJkAQJYkbNb37vDmfY/eO+KlQBIAiShUHA+2pdEqgqvHuG7+zp7LMPMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMC1AhoMwYWBGbR37w55P4C9/e/dPzfOb+Yz9o7NEgAsfsb99++zRODB6A7wlgjJu3aJp5660+M9O9Qle++eHeqpp+70eNcuwTwQIAOJeiZBdkHg4V3A3r0Ce/c5egTurEEi4Pnnd/ob2r2fIsnKWkGAYynoY74n1ifaOTALQJweUQYABxC5wBMi1e6EdfyngCApHbMlc7yU/+qtt+5OmV+nXffvELj/foeHH8G52jUg6tVOzkd3SuwEgO1M9MgKAvCrHxtvNrtlkfq/YNj5gvBLUpDvHMty0dsISVhS1o7BjBXktNYCAKSUK75PBEDQ6VG3jFZHHxOCrHWcOsYfKRKp89M/qVQKLbr+T2dXSvpdAjhA2A3QQ7vtgKhXIzEBwi4Q7t8h6IF9ZvnPat/8mY1DI97aRiP+uBRiixB4QBuW1SHfAwNJbAFmMIA4sRZEvMQ/ZsoYCBARjDY49MoJAMDWG9ZDeQq8KC6ZQUS8JGyZKQykpL7IDsKM2I16qj1F1jnssc4drlbDL9QX9Knh9z927ExTAXv3OTwCXrZ0BkT9cbU3sXunWC6BeBdE68MP3hN43odA+IleZG8r51VVSoJzjE4v+1XnWPdJJWlplEj0RWlGDcpe0ichUm3w8otHAAA33rwZ/iJRibJnSfqKxda4fjtBgAUAIcgDgGJeQgiCtYxWzzTyOfkjMP4y0fpr5cefeHK5KZBpiN3uanbM6Fog6KM7IW/62DtuGR4d/mihUPhFKenmUlFBa4c4cdDGOSJyANMiGQnIpCUzmN1ywxNC+gAEmB2El4Pw8gAznHNYWGgBAEZGyhBCAERwugenIxAJAA7OpiuGn0hg6V1L0pEdQMzMwlNChIGA5wm0OwbW8ovdbvePa/O1L770py/sf2h3RvKrmbBXFVHPnKgX/9Ptm62z75Oe+qeVavmdkxMVESUOcWLhmK0ggEGCTjNmielgBwaDSEJ4OQACKqwCRBBeESRkXxTK7M99SJlJS2tPm77sLMAWIAI7C6c7ADNM3MiIqyMwWxD662R5O7LlwQR2jgFBJMNAIhcITE03XbPResZq89tSyG/f/LeeO/J6mmRA1CsAjz66U+5cRtCpJ+7eUm8k/8g6/rvVcm6oPFSBg4S1zvRdGspYccYwsAXzIjkLkEEZ0i+BVNhX/HKF4QsC4CyY7aIdAOf6UlfQ0veIJCDkMtW/jMAA2MSwaRs2acHpbkZaIoDkCkne/yP3pa6TUigBi1a9iUYrqktBvz9UDf6vyQe/f3iRsLt37xQPXQWE/bEmKu+CwC07aVFy8I9+7sPdbvzPjh2ffbcSriyDPIaGK5YdEzMLIjpH93mJMNIvQgQVSL8EoXKnickMBoNNAoBhk2afTBJO92B1F0JIaG1w9MgUAGDT5kl4noJzFtIrQHj5pX8jgwoAAqmgL0VpibjORLBpGy5pwqadZQuEcKbPlC0qciSI67WmtEkPxonWxg3jPygUwt+i2/7s8SVNs383/ziHuH4sicoAYc8OuejBL+z9ax/2Q+9/SON4R63WQrujMT4xbPP5UDjn6NzdzghKQkKFw5BhGdIvgoS39BZnYrBNYZMOnI1g025mErBdUsuL9iURQacGh1453vf6N8Dz+87UcjuXKJOwJCD9AoTMQQZFkPQhVLg0Jew0bNqBjVswcW2precibCbBBfd6sZudrslS0cPwcBl+GO5LY/2/jdz/F48vRQoe2Gd/HKMEP3ZEffTRnXJRldX3PLhZBvxPC3nvv6vVOnjtyLyTgnhy7ZjI5X1abiee7jEBzgIkoHLD8ApjmfTsO/QZMVswSQs2bYOtXrY8JFbYssu9NxLQ2uDwoSw8tWXrenieygh6jt9fNDWWzGPpQfolqKAMGZRB0u//qoMzEXR3DiaqZT7Won18BqQUiHopT52ac9YxXbd5VAwPF9Ht6f/DJvTbQw88ceTMMRwQ9SJI0b17dsgHHthn9nx+R/jObcG/tpb/fqXkF4+daLi5uTorJeXE5AjCIIB19gwzlPrS0EH6RQSVjZBefunHVndh4gZs3ITV3Uw1L3dszmjM2fynPlFP9om6rk9UvrBRX5K6DOkVIMMKVFiF9ArL2thD0jwGm3b6bRMrCMtgSCERJwmmpxZgjLVjY0O0cX1VNNtpR0r67DMHk3/5wCf3xXv27FD3/xhJ1x8LovKjO+WiHTq/7yc/lA/FZ3xfvLPVsWh1IjszVZNSCkxMDCPMBbDWncEvAjsDIX0ElQ2ZjUgi2yDSEXRvFiaqga3J1CuJ12fk6w3kmyHqG00Hu0zVS5VJ/fw4pJfrbxQ42KSJpHkczqYgoVa0kzmTrHGUYHq6Bmsd1kwO23IxJ8tFiTR1z/Ri9+ujO77+tTPHdkDUtxcTFURw33n0Pblta4r/zvfoU0KQ142cts6qmVM1MtZiYnIEYejDOXdWF9kZqKCMoLIO0i/1pZdF0j4F3Z07w/57cwQ9k6hHXjsFANh83dq3QNQzp+W0He0VxhCU1vbtW4JN20iaJ2GS1llk7dusiOMU01MLUFJizdphlkKaQk54zrFONX/u4Eznn9/70PeixTG+knkgrmSPnnmXIIKb2bPjvpsmC8/lQ/EPo9h67a5xzlpv5lSNjDFYMzGMIPBgTRZe4n4AhzmbaC8/ivzotr4adUh7c+jOHkDSns48ZyH7/871H37rz+LX2/mMZe1YbFvSnkZ39gDS3hwAB+kVkB/dBi8/CnZ2ZZ+ZYY1FEHhYMzEMYwxmTtXI2Wzsoth6+VD8w5smC8/N7NlxHxEc8y7Bu65cPtCVStLFUMrMNx54uFT0dsWpQ5Jay0xCKUFzMw00mx2sWz+GXL6v7lc49dn+fH54K7zcUH/nKEXcOA4d1U+HfXh1TLQliXq4L1G3vB2Jes4XLIXRvNwQwuoGCOEDRNBRHb3aIdCSLX5aL2QOVoKTJ+ZQqRQxtqYKYxwTsQt8KUNfoN3Rj6z54J6Hzxz7AVHPR9I9OxQ9sM9MPfGT40HO/bGS9EAvts5l++FCSoFGvY1arY1KtYjh4RIWf7jUJWYAjPzI9VC5YcBZOKcRLbwKk7RB0nvLKv6NiTrVJ+rk6hJ12XSx1VBBCbmR6yGEBwgJE9XQW3g1+x1aFsLibPOhVmuj2ehgeLiE6lAJ1jow4AQB+VAKY3lPEolfnHzw67OLczBQ/a+DPf0BOvQXP7FG+mZPPice6PSMcY4FwIIIiOMU9XobQehhaKgI59wyVQuwy9RmbmRrtuUJRhotoD39PEzaBQm1Oir+dVV/RpGL8tn9dpNQMGkX7ennkUYLABgqrCI3sjX7Hef6uTKZGeKcw9BQEUHooV5vI47TvrPJwjkWnZ4x+Zx4QPpmz6G/+Ik19MA+s+cSJo3/WBH1qafu9B54YJ859bUdHx8N6bu+Etvna9oAUIuSgRlYWGiCmTEyXFkiJ5Y/AHIjfXUPIO3OobfwGuCy/ctFW+7H+eHFJFjH6C28hrQ7t2QS5Ea2nlYWfHrclo9ZNoYrFIqar2njK7F9NKTvnvrajo8/8MA+89RTd3pXCj+uiFXDT93p0V1P6xNP7PhEMa8+n2qHOLVWCFKLmlMIgW43QhSlGB4uw/PVGR4+gW2C/PAW+PkRwDmkvYVMHZJczAG96CEKLMs/XXLsLqrlRujNvwqMAH5+BH5+BKwT9GqH+5sGvNQ0z1eoDpVRq7XQ7UYoFHJLYygEVKenbejLLcW8+sMTT+yQ6+/a9weLc3PNS9SnfjcbiKNfef8nSnn5+W6kbZRaSwTp3OmJNsZgYaEF31colcJM5S9Xt87AL47DK44DDOi4ie78K2ASfVV8kVT9Wc9pCXbxH5f1jQS6869Ax02AAa84Dr84DnZ6hRninEOpFML3FRYWWjDG9EmcJdMQQUaptd1I21Jefv7oV97/Cbrraf3U715+ySouN0nv+vTT+ujj7/87laL6fDc2VhsIAuRyQURE6LR7MNqgXMqDiFZKKudA0kNY3QAiAWsS9OrH+o4VXXxJepkDzeC+ZK0fgzUJiEQ2FjIAlmmdfhILyqU8jDbotHtYnqjTT+CW2kB0Y2MrRfX5o4+//+/c9enLT9bLRtQ9e3aouz79tD785/d9slKUf9CNjDWGBRETn6E2jTZotXrwfQ+5/s7TcgnmnEV++DpIFQBg9GqvwcRtMOQllKSZ47JoGL79WOqblawSJm6jt3AIACBViFx1I5yzKyS8tQ65XADf99BqZYsfZzh/REzGsOhGxlaK8g8O//l9n7zr00/ry+lgictF0gce2GcOP3bvJ6pF9fudyGYkxUqSLhK104mgtUGplAMJOmuiQIS4NQVrEiTtOaSdBUAoMNtLSJaVjt2lU/+LjwWEQtqrI25NwyQdRI3jSw7kCiIKQqmUg9YGnU50FlGZGYSMrJ3I2mpR/f7hx+79xAOXMRpAl4ukr33xvnuGh9T3upEx2kIKgbMOUBARrHU4dWoeSkpMTA4vntg4qxfOGig/OxKyqP4u6UASwRiLY0dnAAAbN62BUvIiO1PntAWyEJyzWSjrHOOwOIbTUzUYa7F27SikFGe3lQDnwJ6ELeSUqtXNe6776LeeXJzDq1ai8q5dYm5unA8/tmMiCPG5OLWcGnda3Z/51f9esZhDpVroD9w5fs8xhFCwOoY1CUACfM1+ZYs20zQC5xrXxQ2SSrWAYjG3YqzPHH8iptQ4EaeWgxCfO/zYjom5uXHmXbvEVSlRs+ofu4joEXfksXufq5a82+ptbQWR5PPsEBEIoq/u3RtIp8W0Pr4MmWuLEvX4sew4/oaN45dJoi6f1vO/W/QTvhcX//nG1THboZInG239o80/853bszoDj/ClOkh46VbF7p2C6BF3+MvvfbhckLfV21pn3j2/YXDbGAvr3AUFwq+GgP7bfxaN5PP/nnUOxlhcyBwQIOttrcsFedvhL7/3YaJHHHbvvGT8kZfELt21Q235x4/bV//0ng+PD/u/12gZDeCK2fVYLTjn0Gx1AQDlcmFJE1xFkGnq9GjV+4m/95GJH4z8wtcO7tm1Q/3HfUcvehLLRffgspOQ43z0sfuGiMxnG23trGMlrsLyHkuS6Qwv+mpBvxKRarS183367NHH7nvHk73xVj88e1E7etFF996Hd8iHHtptE61/Ox/KtYl2TAQa1Fr8MVyIWcSAEu04m0v92w89tNvufXiHvBSL5GJKU0EE9/Kf3PPhakX+ebdnDTPU1TiJi87UiZNZgsj6dWOX0Zm6FP2FKeSlajTtT9/4C08+frFPCaiLuPoIAJ/80p35FPhcqp2zjoW4iit6rSjIsyJgdJWRFIB1EKl2zvfxuZNfuvN64OmIV6Rt/7io/kd3CiJwpMWninkxGcXGESD4ave4l+vJq/Tp5wSIKDaumBeTkRafIgLj0YsXBVAXTZru387zj99dbiT8a73IAnz+eOnV4kzxVexMnd1hkr3IAgK/Nv/43X+AJ7d3LpZUvTgrYM8OSY884ha6/IlKQa6PE2uJQJd27/vyPEtJKddAX4lAcWJtpSDXL3T5E/TIIw57Lo5jJVZfqoCwd5+beuK2Asj9Wi+2DgA5Hvj5Vxv6c0q92DqQ+7WpJ24rYO8+dzHuILgIEnWnoEfgak31qWpRrY8S65AVE70mpAxflsypy6Q9MqKKKLGuWlTra031qewE6+rbqqvKfEaWAXXsj+6rpmH0rJS0IdWOcQXXD1jt8NTUVA0AMDk5fFWHp84Urr4nyFo+7se5Ozb+0rcaWSXk1bNVV5dAfU+/60X3FvJiY5waB4a4dvbXz/T6r5m8AxGnxhXyYmPXi+69GBGAVff6X3h0uw82v6K14kXv91rBubdQr5HOE6C1Y7D5lRce3f519O8kuOIkKu9CVoo7DjYqIT7cjSyBIRmDr2siC5Yhu5ElJcSHEQcb6aHddjVLBK3aBz299k4JAMJzP58PBbNjc02m2F0DAf/X3QhwbPKhYOG5n1/OiStK9be3FZl3QRwgvmnx6Oe1FpG6plX/YnASTEx8E++C2LutuGq9p1VqHhGBn/3D2wpS4agnaUQbZqJr52ZAIsBYh5mZBgBgzZoqlBTXFFGZwZ4i0pYXrMGmO375R93VSgFcHdW/N9uNIOK/Xi6IqtbOYnDP6rUI0trZckFUifivL+fGleX1E24SBMlgs3ip3TWm+0/bqdek6s82jwVBgXDTlReeun+fZQY9/0f8UBQ7MENcA9dzntNGZVzLNmqWgxzFDkT8EDN+E9hnrxyiZjYaP/uHnAr/4orS/qU5Z8XXl2wZyrbHGIRLftPiGUXSXreRV7dIhSDAWU77lZdWxQR82zYq79oliMDPfeHWGwNPbI5T5xyDHGeVHt/+Q7COoC3Bnr7XGXnfohisfEqBhRIOrl9vSluCcQTHhNVrz/nbuohL984r7qE4dS7wxObnvnDrjURYlRoAb1+i3nIgKwlrki35ghxptq1VYhUWQH+ipWD4ihH6DpEW0EbAOsL3Xs3DWEL/ZnEQAG0JW9ckmKhoWAeMFCysA2ItoG12By+Bz3kjz2p4/UwM9E9jCNKQV/N1z6/vp5AzcKWSHEliuwXAy4scucyqfzcAwFdJgxxxIFx2R/NbUOmLBb2dI/jKIfQYkZZ4bTbEgVN5vDyVw+HZAJ5izHTKKyRYdkKSMJTrIe8lUILw7uva2DCiccfGLobzBo6BWGcSVhKveO9qEJWIIalfZ59ieNcgURn9e4edYF9xYzlHLitR9+5fLE/CPytIkAMtPzr0pmAcwZcO+dBhqhFg/8kcHnt2CCfrAWIu4qZ1DqWxMaRW4PYt5ezc/HIrXgg0W120egaVXB1fOTCCbpSiHPSw48Y23n9TC5tHEoSeQyeWEMSrlo6+FOXg5RqBcC2m4XJWx57A7mcBfG+JI1eCM+WY37mY2f5WVqFzhEpeY6YV4AvfGcY3DlRgKY9KuYzNW4dQLhfgK+rX4D/tr5zJlJGRIYyMEAgjuHWY0e1GqDXa2PdaDV9+LsIta1v46J0N3HNdE51EwliCFKvDptOlJ7EiN/XaBPc5cSWFpzKe9Ni9+YlxnBGlkjP4q5er+MK3xzDVGcL1GyvYtt6DoQo0Z9IvNh4ksnpJQspzevVZlWoHxwqeTDFS9TFUGUNRBZitJThwuIrf+FIZP337PP7m3fMohRqtWEGtAllXSlRc00Rll3HiiiOqcxBv5jAbEWAdoRgYtGOF39q7Hn91cBi3X5/D3RNVSC/AfFSFEg55z2RqXioIkvAoRdFvo56O9G1CgoNAIGIEoot6MgSCRUApiBzYGczFIxgfaWLtiEKvC+x7wcOzRwv45Adm8Z7rGqj3vH5F/Ld+BPHsOOo1TFRmOLd6SU+rujN1ZgLRee1RSygGFi/PFPAf/nISC3EZH7qnDK0m0LYEZxXyvkPeS9HSQ7AuRDnowJcJmnoIPc7B98RShE0CYOTQdSFygUVJtTATrYHkGJ6IsbbYwkJUhqIIzq/gA3c1ceyExG9+OcQvv8/HT71jAdZlDtlqRQXezHhcjU7VakKtZsvYLUVnXt8jpIyk1bzBdw5V8Ttfm8T16wJsv3kcge8jR20wBRBCgylA00xgpFAH0EPiikjlKMo+IISEkOKsF2hjQGB0khzGc/MAM3o2h8iOYKI4j9QJCO7COeD6zRMoF2r4L08ZvDxVwD9/8ChiTVi8uZz5TUQEKOv7kgR1y8IY16jqX82+rxpRLRwYBHfeOptZrLMcanz3UBX/5vGNuPPGAq7fNIxIZ1fsSOHDko8UOXiCMZGbQcutRT5UyEkPC/M1tHSK2amTmJudgerfjscMKKVw3fXbIKTC8OgYlL8GnVggT9MgZRCZMgADJSwAC20d1owP4/6Kh698r4l/9wTjn/7kUcRGZAP9JiICGU9Py9BsNK5licqwq1jhZ/UkqsOZl2ydM/xUDA2eOVbGv/3qBtx1Uw53bPXQSRIUfB+ac5CSECgLRgxLRdhgAmOihlcOncSzLxxDozaDVBuowjD8XB7oxUtEMS7BocNfBzmNUqmEDRu34L13rAEXNsOkHeSpBY9iaCtgLCEUGsL1UCwAH31fDn/27RH8+284/OpfO45uIvo261vUd3xt637m82vXy6j6z18ZhAEIYnRiid//5gTedb3Elg2j6KYxEpTgE+BLgKQCiBAGAUDgY4e/yz945jWaalgqlKsY3vpO5IfGUc07GFWBc9nulGOBvOyh1UkQdRM0Z4/hwMFXcPCVg3jnTc/jllvvQLGQRxQZSOkgyMBZCe2KsCaG9Hx8+D0CX/9+hG8eHMJ9NyygE6s3Fbo6u1LKte1MrWbn1SoK1PNOjGVCKbT4zOOb0bFVrJkYg7YMUiFyyqISdOAoRNvmkc/56HVa/I19T9P8wjxNbLoO73/nBq5jPXmKwE6g7DfRtQ6WFIgYlgl5T4NLBeQKZZRH1yCHBtA6jCOvvob9Lz2OB95/O7ZctwVRYuFRipzXRGIUmkkezF2wGsENm4D/sFdiXTXCxuEIkc5CYxdko/NKicLuGlb9vKoCdfWIuhhDPRdRLRMqocZXXhjH/qkKHrynBPQlpyUPgUzhKEDHDGGs7HD4+Cn+k8efpuvWho0HP/aLh6Qnhl6Y8q+bCOusJMhQHi2zFrncyqGI7QQ8T2NULcBai4W4BFTfga13b8H80YP46l/+ENtONPGRD96EeidAzw3BF20QKWguwLHBDZsq6HZ7+OxfrcOujxwC0YWn6g2Sp85eqFem138O1c8APOlwvJ7Dl54Zxs3XDUGLIYQigRAepKBMkpoSJioW0yde5b/4+n5ae93dtX/1Lz75x2E4Xmt0rBx+7qsfeml25M4u59mToKEAENLrp/Nl78k5C+MUenYdNDMmilOwNkWqHbbeuAnVkSqeffI5fFNN44P334XpdhmRlZDZsURACSSasWHDejzzfII//9EYPnrHNDqJhBBvbG/yMiN9SfVfs0Rd3c6vWkB2uepf/jgH+NLhj78/gRhD2DhRQmx9gHyQUP37jSRKhRyOHp/hr+x5Affed1v03//K3/sTY4vtmbmpijWN3I6773/iulHv4GSpQ4VC4IJcHkGuiHwuRC4XIpfLwc+VkA99VPPAxuICtBqH8Moo5QjOMkaqeXz0p2/FXCPFV77xHAp5HyAPUhKUIDD5cFBQQR7Xbyxj91OTOFHPwZcOzp27f2c+Ky9Eu7af1VT9q3euH+70PUbM/eA5I/QsXpwq4qmjFWzZUIUlH55kGOTgRACCQD4fYH5+AX/4xf0orL2VhtZMpiOhbERxN/T9UBvHUlvHsrBx3obrMJ5roxw6jIZdhGEB+TBEKZQYDVuo5i2KISHyNmEi30A1TOF5AZRfQDFIoKTDhu134tsHUuz51vMoFX0AEkJKJFyCUll0Yny0CnhFfOWFEUjBGVEv8J6nZZdMXpFfS/Oz+PDr3DP19t90ZYanFoP+gXIQgtFNFDzp8NzxIvKFErZM5FBPSygFKYSUkIKRiiry3MPefU/h+s1F2nLDJp7rIH/g+PR179i67WC7Wy/mlEjakS3AtjaP+w10aBOFMoWShAL5/T1/BlnAuBJydhqB6sCYCjxqgyhFWdWxEA/D2BbYz+H+D9yAp77zLK7fNIzKmhvh4gUIoeATI7YF5P0YN24I8fyJMnpJ1lbHb2yXnWmvXgmqn3A6qZvACDwHSbws0kuItejf73s6x/eqDE+5/oVlQji8MldAJ1bYPtnCbMvHdw6NYKxMOFVj5AsWvmR0XRVFmoELh3Dg+Sex0I5xx+3vBoFJSum99NqLHy0HyZ9umtx8qNVLCq8d+9HHQiHXxnINj8kZ0moMrMoIyS4NuLZ5jOvX0HVVKFsDixixCAGS8FwbeZ/RjqvwRBdcmcTIhg6+++0n8eDHboATefhSo5muwWg4j4W4iolRjYNHi/jOoSo+eNMcOqk6bwTgjLN9K/b+LycsE0Ivu7bbOoGDM0W049OLTwngxokOAuVAxIjS7OCooLeX9+CuxPAUA7AWCKTFnz27Fs+drOBz/83TeHmmgEZaAiUOJ54/iHfddQ8s+SjILiJag1w6g6d+dBzbb9kM5w+BRAdS+pxTVr1y5NDPz8yemg9Et2C8sYIUgoe9OqX+BvheBUouO5BDAr61MP6NqCSvwWqHFEWUqAaLGHU9CYgeAqWh4aPWCXHjzRvxvT3HceLQ89iw7d2IdBt5r4dGNIIhfxYL8RhKpRa+f6SMHdsWsJhnS68X618e4L8CYqiWCUowSoHB4YUCvvrCGI7M++jpAM20CEkOjgVyKkYl6GKkaPHgOxZw69omtCUkWrz1FMhV1iar6vWDs3tJA88i71sIYvzwaAlhroRCHmg1GhB9L99DhCDM46UfPYOI8yiNb0DNBJgsdBHTMFVkC6RCockbl3IISgj2fI+EKqDgpfDEDKQQsP5asPAh9TSYYxgY6KACQQwhEqRUheUEATsYR0htHsYGCL0EbTOO9ZvX43vPHsfG67aDZACyCUgoEAhKAqPDFRw6VsJMK8BoMYY2r398gVf89/KeQLVMKPoarcTHf/zuBrw4lYdVwygNTeBdaw20nMjSISFRoHkcnrY4Ot/EZ/8qxPqhUfziu09h80gHzchbOg1xOb3+Vd9C5f4hLwKjnUjUOgqbxoFOnNUKlYIBISGVQpQyntl/AoWRtejwKCp+jC6PouA5GFVFIBV8ShiqiMBzlEcNrDwoJeGKN0KRga/8zCf0x6Gdgkxm4Uen4GQHxqVwXhnsGOAIPTcOz9bQMUUICXhOw1VuQuPFr+PFw23cfP0Ymm0fnnDomSqsI4xWFRamGScbIcZLPTiWr+uBnhVHvUwkdUwIPYvXFor4f7+1EW1TwT23j0Lk1yL0gI4dQlHa7NIoMBJbxk3Xt3HD5lHYZBgvHjyB//Urefy9+47jtrV1JPbNH4LjVXb7Vy88tbwUKBN8yZhqhDjWKKNSrcI5ByYBXxrkZRuJmMD8zClEvTZK4+shBMNXgKYCAuXQpUkEysH4ExRKR6SKQDgK38/D9wRKfAK5QhW5XAG50ENYGENBtpGnJjy/ABkMAf4QPCVBXg6shjPPXo4hlClSqiAUCbzCEHLlKk4dfQk9WwTIR8lrwiIEESMIc4BXwY9OFKAE4JZctyuzRppxhLyv8cJUFZ/56lYUS2U8cPc6lKtjKAUG5JVQKuSQLxRRyOeQzxdQLuQgvRIKgUOhUMLdt2/Ets1V/Id9G/DVF9eiFBgYR2+6XKy7EiUqw4Ed9aVXZoT70oKI0U5CEDVBcDAcoGOqKOcZC/NzIBUgKI8BbCClgpMhNEkMqwUkci0qog0TrEegIkjPhyctfElQfgipj0DmxoBgDNx6EUYSjOdBuBYiLw/POURiHMrOIpI+pNQoyHnMiAmEsgZ2PkgGKI6uxfzsEQgYsPDRTkchKAYRkFoPPe0h59kl04ZfRxWukKiOwZehqJEkh3bs4Y+eXIt3bPax/abNiG2AwHOwag0CpeCrFEwBLBUhOIXgHoyVSM04QjONJPVx87aNGC9r/PlzwC0Tdayv9JBYccFJOtn28ZUYnupPlHVgxwQlGT88XobwyygXAjQWAAmLsqrBiSE469DrdqCKwxgOOmAK0LYjKAcWToTQUiGUEqQKYH8ISmigsAGePQyZX5MRNleFV94IsINVN0DXXgLlxwBnIFGFFlV4cYRusBbKzIFlAamw8IRFjwK0zRDG/Hm0CmVEDPR6XUgvRCgbCDhGzRQhhMaakSL2T5VR682ygIPh8+xv9+fGOsBdQqIuhqAKgaP/+6+2IKEq1m9ch9j6KPkJhF+C8jogbwjKyyNXKMPJEiQnSHrziBODop6D1h586qGTSBSHt2Bi/AT+/d6t+F8+/CIkObZ84Zp/NbF6+ag2Oy6cD52SIjuP344VIDxIpQAwLCTabgwVSbDW4sSxoyivuxlOhFBSwlMMKQWE9FGgBThZhvGGURQmS5T2CqD8NnhuHr7y4KcnEKIMlRtGNHsQJB3YxXD5CRBGINtTUJQlvmhvHAX9GpxQEFJBSUKgAK0ViiNrcPJAirmZaWzeej3aSQHGBZCkM3sv8DE96yP0QHnPwvC5yxQ6BpzJmFrKOYhLSFTHmcp/8vAwjtdz+MDdo8iFAaRSyOcA4Ul4QQFhoYy2KeLZA6/CpBGIFLZuvR5jw4y03UOS9AAlkSIEpRHuvGUCf/VkG/teGcUv3nmSuql6wzirc1BEAtZegUTN+Za6icTnvl09eaymxlJH/ivTXhz4LueygBot940BQCgFsEZkcwgF4BMyA58YXbEBBSGhhAWJAAhGoSRBeiVIaHjD16M+ezwd47w0ccwdWs/IhSL0WabNBSgKoL08YCVk4uALjY6chKEeBEWLB/HRtUWw64AIEOLsMpGLPryxzJ/fV54TZB0znfO0CjOQ9onqK3FRCl2cT5sFHmP/3OTw2EjZS72NqDfTZMtkITjZckmlXJCkSZ986dngRy/sFzN1B2ILJoGnn9yHO27ZhMnNt0WlsORN1T07WoJ3qu5pFr63fm1DfH1/6mZr6YK11p7vsA4DTMT24/d11uV8Q1cMUff2/z/fUvZze6utv9gfzm/bJIeUB1Vr+sm6tcjxebcvCIIs6Ay/jmAAeEu1psgrZcNABK+8FQIWm7beqA4dfCV55eCB6Kd+9ueq3U6XjANU3gd3GiCVB6QAXKefvGLOyiwR9MbLngjQhvjxZ4t1a9nidazPbJ2JftfcJfb6maX0vImJcM264evQ7qbJ6Oio14hZh6EvnAzNCy88L5959gXh+x4K+dNp4Yl12PP9I7h+ntXd97xHl8t5Nddq6+rwuD81PZXK4iYfXlP8+XPDURL12iSExOsENYiAXir1dN0r/f0HanY5Ry4rUQ8c2MnAbvz6fx6f6caqt2HIeDI70QxP8RtH4JhBJM9ao0RyhcHT67ZsGAxLZsb0ySPpho0bvZdf3J9Orl3nrd/wQe/ooVe1H+YlE1G90eBCqaqajRlO05RJSJHdNCdwpiwkcWHlO4mASt4pzgpb0fmcSuDSF4d1zrlcISx5EtbzBFerlSAMfJg0sRNrxlWzWaPnnntWFPK5/gnR03EKQUC5mMOrhw6prVu34J13vMuLXnlFKyVpaGgoaLVaTgqYkbIoRcJFdJ5oFQOo5h09dyzs/vp/Hp8BZpc4ckWo/igV7PtM2p7WngwiIlpBjuVWtnMOJBV0GlnBisIwFNkAEuoLM6k/sdYnEjBGcy+ObXVoSLa7HZNGsXv14CuJtakbTlIozxfdbqxn52tWSCmFVIJkj7XRrtftsp8rCCk9NGvT2hEJIiEXUxLTqGtApM7yAJb9ud8Hsi4TlHyl1SgmEBw5xzIsVYZFqVRhIoJSqr8lLfiVV19TROKcOcPcnwvf8+m11454t2x/B3w/s2+lEAjDnBgeHqV2q5lzLJjd+eUPMbPvMUWpuPLumRLirERZYmvTNE2gtQYRwVrLnXYrdc5BSomNm7egPXsC1lg4m6XSOeeQpgnnihVljOF6bV6TVGSs5m6nY6eOH9cgAQiiUnnIC/MFZR2L4fHxgIQg5fliYX7B1BbmtdHGMRPFUcT1hTlTKFc9yyBjDKx1/fwEQntuGsVcgPGJSWitkcSx7UU9TSTgHHOSxLDWpOD+XsYVCmY4WpQNIDjnUCqVVRAEYn5+/gLmkFCv18HMGB4e9hYXLhGBhKA3E8JnzjhxxRF15QplBohMqru9bhc6TQkApJRUKpV95xwoW6mIuy1I5UlmRtRpGRICJk1dr92yxhinE41Ws6GdY545dUpbZ2l+ftYlcYpOt8PTMzOmG0U4deqkBgmxML9g4iTibrvN87OzlgE06rVUSEXdbtsmUdcwCEanHHVa2s+XVNprgwAEYQ7WWgRhKIMw5xlrAAC9bgc61V1nrcUVfi/BovRfrrW4X0if3sC7W/w5M8Muc9n7RL2s/bqobxdCCCJCksQmSx8TSJPEdjvtFAyMrZkEdIJufQ4WgGXLSZxwr9sxYaniNeoL2hFoYW7W9qIedXs9R0KxkEoY52h4bMJXXqDa7S7G1qwNhPSkYyeUF8hur+u0MagtzBmjNXe7bWuMgfQC1aovaJCENRZGJ2jNncDYxCQ8pZCm2rVbzVT0bVejtTNaO5JC4gqHEILSNHFpmtpFgjWbDR3Hsdu0aROMMfx6ZCUipKnGunXroJTCwsJ8uuTWGsNxFFkiQVcdUYUQpE2aJFEcddptCEHMzkFIJfOFoj8/P6tHx9egWq2gMXMMjsHWsYjjngEpWZ+bSRiCWvW6JgiKo57rtJq20+lQkmrki2VvYWHBtTsdJGmK2dlZJiml8gLR6XS50+lyu92y1jKiOEa303Gp1txtNlOhPNHrtC15AXUbC6x7bWzZug2dbtcYo5EvFv04jhwAxHFE3W4HLk3aTCTAV+DpEgYzkbA66XTaLUS9HpIkdaZvUhljaf26tWk+n2drLcQZ0lEIAcdZDHvTxg0JABhryVqLOE1ckiTcatbhdNLuH7ehq0qismPHxFprrYwx/dgloFPtMm+T3PqNm3WvNsO9Zt2Q8GS33TaWHUe9rot6XbZgykgjEBbLHkkppPLV9NSUnpubs71ejDjRaDQadurUlG73egjyeaX8UHhBTqZpzEmSwDmg02gY6xziXtdqo5mZsHD8VTM8NMTlSkUzs7BGW2YgjnqGGUiSRDBAxtr0SpeoxpoUgIjiSEa9jul0uwaC6NSpk6kxlu+5+65UCIEoipabCYjjGEZr3H7bbUm1UuUjR46kYHAUJ67T7ugoigQzpLuMY7CqRO2HEDNfv69iTJq0u5024jjuO1QOxqTMgOj2eu76G28G68Q2p4+wNtpaa6jbbhnrQMZaSuMUjUbdJElKSZxQt9e12lqRL1X8QqnixWmCdqcDFeZUrljyg1zBazVbNk5iaG2o02nbbqdjDDsyjhHFEXq9rnMQ6LUWdGv6qNi0ZWsa5vIijiLOVJ3mxXPp7WYTJk0ia0xKdOXekk0EYY1J0zRtnTh6RAvlq2azoaNeZJMkcb1eD2vWTPIHPvD+eOPGDZqIoLWGtRYTaybsve99T7xt2zYXJzGiOHZJmvLC/GwSBKF34sSxJOp1kzRNu5k4fuOo42pvdqxmNT8YRy5QJHud5mzcbQtJANs0iqOuyeXytO3GmwGA4ii21eEhr1GvJevXrw+23rAtfvmlF/3K+HrjhyGE1kJKgVa9mRZKFZXPF4M4SZ0Q2o2VJ/xGrWaMsSpfKAp2WX3DzH0jzE6dSnLFkop6selFXSbpK+UTN+ZmUyE95SCEsYatZlM7dtAPfWVvuHm7bDWa1jELKaVstVo6ly/6tdpCGkUd3+qkJcjRBTkUvCz6f2mpynAQNunV0sDfdPLE0XhsbJx6vS6ssdZZx/lCTm7auEndccc75czMNLQ2EEJgzfi4TFNNx44f1UkSu0a9aTzf841zojFzKum0GqE18TTYsJRS4A3C4ySYYiNY4ArK8N++fTcBwL/8yNTYF745mtt/Kj8f+CZy1rIQQrJzsRVprVTWYwxKBQllianV6mjf92mh1rLbbrqFpqam7dTLz9C6W+9l3ekZY1l40pNJkrCD73KBRLFS9eYX5u3Y+IQfJymnac0FYV4wO7Bz3Ot1XXFoJKgtzBntWJL0uN3qWWNTNo7IMlOv29RQoeotnBDzJ4/iAz/xQac1c5Im7Pm+qtXqSaVayTUazbjX7fitdpTO1ZI6kSS84Y3JpzcXmYFLn5EqwJHuRS6tkZwdzudysS1UoIhlbEBCM8/Nzdp6vW7L5bKsjlZlkiTu6NFjxhpNSWoRJQySQkWJdTrVOHniZNBsm26znjQAj4jOPwYCQKR9fcu6Xu7j982PffLF0xy5rES9H8AjALaOJsE/eXCu+vlvDjcEZZ/rAAhmZml4upujbqflCSF1KU9e4IEjo0xO1mFQoB3vf5f4+tf2qejUfrdm0+bYxbMcVkY8C59Lqi3acV5L1eHK0JA/depUUigWFbNjCynYOThrEMWJ60Qz7KyFH3hqbq4TVXKpihLLyHuSk3knA0fCteVrrx7w7n/frRhfM6GVXRCS2LEVGC2z1+z1jDUJNVodMVmO9G0TcUFbed67s0S/v0mSzWMQyKXvXerovy/musc7KL740iHxwL3XoWOqNJJryiAkFdMwQzB6UYw4SeGYhRDkaRGgGBoKbM1O9ZQpBzGeefmQi3td3j5ysqkrKF7IlaEuW5/mk++vVYfyabCcI1eE6m/1hB4tGfurf216HfPpzyUiCpXB538Q4sX5vLhxnQxiVFCUTZQ8JX1PgMiqXL6AnR++BX/5jW+J6mSSL0xuReoSeCqF7+fgAl/lvAQUT4G8scA6hlQeOt1uX4oRkfI9l2oQafj6FEqlUi6UKaphF62ug1f0UBR1PPfkM/jQ3WO48z03odFqh0IYlEOL1MQwxgohGejNqqjbxW99cq6wfigtJEacNxsqK6fJODGdFVleP5GHkpe+hj8z4CvG4blp/JvH1uH7zxzB+941gSCYRC/qIgw09fQwPKX75hJgLJFPbVjThhWhHM9Py28/M4M0buOX7jyC2yfn1mmnMpYS+uNAy4MOyHbslsbChL6w9bbQV5yNSmRLoadknArpe9Q/hQj0YkYUC/z1bYdx+Ds5HJkKsH4ygHNZ7NxYgVzgYEyCDevH8fMfeTf+8L8+B/+Uj3vu3orIeIhiQjmcRiMah6U8fNmD0QQhTucIMAB2Ds4xjHVYsFWMeDNIYo2WFijnHKZO1fHUd3+En7p7CPe971acqCUQlCJOCc5mlanZMXTSxouH2/jU/bNYU0qx0JYQb7AbmE040EuyBnViQMnLc8CvExPGSyn+9186gs/uWYOvfAu4e3sb+aGNSKwHRz0Yc9retpahYZDEDN09gqcP1LBltIN/9NOHEaoUsa4g7SSwffWQxGapeCwz4ClCLsiirEQEbdgLPQKRKV1RRGWG+MpviO93es71Yk6dc11BFAhJYRiod0vpj28oMX/8Aw36f/6ygK1rPSivAhBDKcCTGgW/i/nWEIaGrsNHf24Mj37xSXx37xw2bL8L5eEAh+qjmMjXkJMMbfKop1Xk/ZULNrUEYo1hfwE5OEy1SpDCR4g2fvTMK5g6/Brufud23PmeG3GypuFRD4p66NkinLPQJiuY8dqRU7hhvIcHb62jlwooyRewUPu3BvYXjuj//bIEXSkbCyUY//CD07hlXYQv/7CMp17qwgsruH0L0KMJsHOwLDHkz+PFYynqjQhrS3X8wl0d/PTtdQSeQmp9lInhhoOlRdfraYCAOLacJoaMcbO92PzAWY4dcyKEKCgin0g8xQyx9+FV6dJbw65dEA/fAqKHVhrXfOjOytEfNn/WOntrqOj9vYRvlBLDqSEu5wx95svr8P2jo/jg3eMIfAlfZtWjq7kemHw09TDyoQdnEuz71g9x9OgxDE9uxLrrNmOBN8P3BZgFxnN1tNISDGeXThiWGA3qaOs8YuvBWiCPeZjaazh26DVIED74wF2YXLsO3UjDpy5yoolEKzTiHBS6iG0OBw/P4fDxOn77bx/FmkqKWIsLq+bXh+7no3rq8keyFolVDB0SI7DvpTJemfLx0lQO820PSnL/zL/D7Rs6WDds8ZPvaGIor9GOJRxntjefEW4SfRuIAVYCZC1q+YBejg1/Uwr5/KZ3Vb5MW59urmjLo5AP7wc/8shbM9vprUpQouyFB3/n+mB4q7ljrs4fJ8JHlMR4tagC6xipYSQpwyyjsu8Bv/ZHG1EoFnDzDeuhKEHPleBJkWX3CwUigvICCK+A2akj+MHTL+HQyR5yhRzK4xuQH1qDclEBfmUpS8SBEFCMVquDuNtDY/oourU5FHM+7rl9DbbedDt8T0LHbThmsLOw1kBbwEMPghjtTgff+P4C/sXPTOPOze2lIg1vMp65giRXApwjCMHI+Q6+ZNS6HhJDSxJfEDBa1HAMRGl2y+Eb9XvpAjvOTJzAJ/iKIAWh0TGJsZhlxpfGhugLtUPq2W3/5NXkTO5cTKIuVfs+9J+2bFOKf5UZ9wtB7/A9QhQzjGVYx4ayW+sElvajsgHLBRYHp/P4n3ZvxLZNebx3ex6dNCuYlnLmgHiSwMKD4RCsRlAOejhyfAbPvnAc8zPHEccJRFCC8DycvsY3O6fEcRsEh+GREWzcvBX33DqKWE7CJQ0I7sKjGKkBrHUg1pCI4EuHVruH//LNGB955yw+ff80OrGAuGLD+2+RsP0L2pTkpSooi2TT/YN7JPit3Lq4uK/qsiPxpJQk5EJCqhnO8QtE2GsM/Z9b/9bhg2dyaVWJ2j+qj/27t3uBif7n0Mc/U4oKScqIUmYCLBEELyPmuWAdoZQzOHCygP9x90bctLGAW28cRU8rSAEoKWE4hEYOniQUVA91M4FCSFBeiEazA2sN5qZPYX5uFkp5S+UulVLYvPUGCClRLlcRqhT1rkRRzIAZiI0CO4NQdOCcgbYMXwJRt4Evf6eNn719Dr/ywVPoJPLKTpFalfSAVbIBX4e4hCV/WuZ8osAnGMPdOMVvJSr3G7fsPKBBF35NwoW2j5iB47+1PuyOq+9US+KOdo/hnDPInL03JXuMI1RzBj86UcRv/tkkxocCbNs6iUI+yNLShL9UBrKejmIsV4eDQOLycKKYlYmUHpQ6Y++DgSRNQWCkqUZeNiDJoJ3m4RyjohayI7+c9u/nZhw7uYADh+q4/+YO/vFPTqEdCYBw1RP1Ei8KB2YnhFClPKHRds8WZs29G/7ZiZgIF7QzckGpa0/97p3eurum7H/7y8O/MjYkP1lr2TSzNUi+lTkVBERaYm01wfu2dfHsEQ9Pv2IwXmWkNIJIe2inIbSTqPhNzEcVdHQRgYwQUBudRMGZHqJYI00SJEmCOEmg0xjGJLAmRVktYKY3il6qIDhCTrQx1anAWIvY5MA2wkuHpnHwWAe/+qFZ/I275tFLxUXZp77WkUWtSDCDk9Tp8SG1rqVodvT2xpNP/e6d3u89NvWGNusFhafap4p9Q5BnE82GAMlvM4FYiqxq3Jpygn/1sRP4T9+N8WdPG9y0qYvN64cRhCHmoypq1kfRX4AQAq24AkE+fNFFTsao6+Glw3mOBUIZIxQ91OMqekkFBTkPSRrWMU51S5go1gGXotWsYd/+CJuGWvjMQ3O4ZW0H9Z6XefcDkl5MxhIxZKLZgHh2BbdWg6h7sc8BwJe+cvTL994z6SbGQt8y2FmmtyOBhGBEOtvx+fv3z+CuLV18ds8Y/nQfYdO6Cm7domFFFa0kB0GM1GpIAaQg9HQRAjHMMhumowWarghCDOsIlgSk8OGYMJ6bw+GTCV483AHrNn7pvbP4uXfV4UmHha63KnehDnD+MJmQxJJIHj4Rpd95curLy7m1KkRdOwUJwK3dUPrU1ExHNjup2TBRULmc7Ic/eKlCyJsl7eK2ZK2jcOv6Ln5zZ4Innm/j8Wcr2PuDAnKFLkaGK6hWs9pIDD87HGQ17Jk1IHkxyE7whEaqHWrtHuZrbbRbDTjTw3u2tPGxu+q4ebKHdiyhrRyQ9GKSUwBSZpMURZaOT3dNr5vKtRtKnwLav7PIrVUh6qnJfvlPpukgIDlXS9NaU/PYUEDVsody0YPviaUKdtkNz2+OuEoy2rGEkg4P3T2Pn3xHE69Mh/izH1bx6skQrxwu4oYJh1SOwFiJifFKdpEvn2apEAKNRgfNrsZYronD0ymM1hgvRXjoXS3cu62DiUoKBqPRy+6QEjQg6WoSMyvkQf0aB0CqHerNFI2Wxlw9YWvZDZeFH3d5ejm3Vi88tQuCHgb/4a+XvzhSEh9pdByMcZqIZBAIUSn6GK76CHyBfE4tNdQ6XlGK8Y3Iy/14q5KM0HNgJpyoBXhlJsD+kzkcmvHhSeDwQgnWrazZYR1hotxDNZdACIF7b2hj/bDG9rU9hJ7LitP2i3eIgS26KqRc/L/sCw0G0IsMktSh1kjR7KRIEueY2SolvGpRYKHtvvTLn2l9lB8G0QXuVL2pOOrDu0D3A2LWVD5J4N/JBZSLUyBKnXUum3wpSeZzCsW8RKngoZBX8D0BQQQps2QV605HJJx7/dYwZ/U7PZWR1jqCY4J1hINTIYw77dERMbQlbBxJMVYyMA7wlYOx/fr0/c8aePQXQEI6O9h6evODIAX6pzWy8uepduj2DNpdjU7PohcZWMvW9Y9M53whQx+IEo4Y9E/GVfPzewH38CNZvHVVibrs9xkAfv/XSjfkFP62Y/yNUk7cavuV7KKU2dl+8UnHIgwlCSIqFhQKuczSGK76/V0BQhCcLmW4fNvRuf4h+n6GjmUsSWkAyHnuHNVVgNQQtKWl6nZEPJCe5xjf5WO2+DORlUs4+2cAksQtVdGuNbKjU93IoNM1cMwcx5ZJkCOAhCSR87MDEZKAduSeF4T/Ghn8f3/337ZfOZNLF4OoAECP7oR4aHeWjLJrF9SNaeWjgPuoJ8UN1vHdvpetOm2ARDOsYwuGc46JiIRSWZEEQYRK2euHqwgjQ0GfYEA+J5fs3sVBW95Yy4Czr2c8nKfxdPWS7o36KCWd6XuuGN9UO/Qiu5QDsFBPYPvVeJstneVIMNgYZmZ2QhCDIKQgGXgET2Xb2KlmSEHf19a9Aogvvuw3v/jII1mA5tGdkA/txpu+JP1tZU+tnYL89O9hRa7dH//LyruI+XoS+NnU4A5fYZunyFcqK02ZGvRzRrOG20xU0unAMAT3iep5ol8QljFSDbK/90dXSoFKyTuLokpS317ic5gS2bvPFwJe1HyOL30N/ixVkF73QovTbeTMYaFz2GdEsC7LuTjzx822hrWuXzER0NphoZGAQCCR/b0X2UUt5njZhQSLnruSUEIQfAVICRgDaMNpanDQV3iWHb7MRK/+4r9u/nD5u3/3H8A7NQl7SbOnzvyMXbsgbzkA3vkoXH+cAQCP7oK/xhsdOd5JdnqCKtrxRk/Qg8YhKOVofNEeWkzIdQ5IUnbLnDC3nGScaZKliQp9udQHooyEpaKHfChXlOVeJF4ukKiUvMwupvNLqzAQfZv64u8BLKbRWcuIE3d+qd9X0c22RpTYJWIvD/f1Yot2R58RFQHHqV1aqItDv/xdlEnHrISlT0vH/6VYXARAO+JZJZBox094go5px80NxWD3jJ5feOgRpMvGkHY/BLF/O+iRR2DxNlNzV30OeBfE7gOgse2gBx5Zisef/vmjkLu/W664EB/SFk4IjEuBv2mz66KqoU+32v5gempl8nGULMv4QSahmVkvH2znAMcsztzazWwwglIkzks+ympoFYsKgScuSbGpxVS7RDt0OiY7ds7nJ7Ux7Jw72zlkgAWRW5751T+h60mJZVegAbmAli3kzFRjMKQgxCk/D0ZDSpB1+M/OYdaTECLG13a+t9U8Mw8ZAPbsgpo7AN65HUyPrO5xMbrIE7AUKTg4BRqqwy3atq9nTtzhKu9sxUxKEjt2DwWKxrWFA8Nj4o8IUHD6cA7CSoHOkp6ZeXGO3jGQGLYXUu3EOqbFM0WXyubsh3ku4DgBKFAkz9U/IQBf4Swp2+wywIiXtA84IaYvgaA9CZEYnhUkHjWWqRwSPyuaz5xPTT+6E7I+BLFtEvxmPfgrjqiv905mYO/DkHuXCcJbDoDOR2IA+I+/XhopBk4mKcikYBJqfS7kDyWaGMzUd/IZwM9IibV2RaXrbOHkfLH5Qs4yXZbTzheQ4bN4NitK3ZEziMFSEFmLUwAeWxoLIg48piimr7EzJ5QPCnxwJxH273ymvXC+dz26E3L/9kzgA9lp0vsfXjIX+BIPzRUFenTn6ZTBse0r23cuU+J8E7q8xCkA3rUL4oao9GAgOacd2J3jkg+2ECTh4MTP+B62pIYdcNErpDhfkUg1DkO4x5bacAaEA3sClFiKXsm1n+hLvKUwzxl9fkPs2bVyZ3LuwGnyvRXP/Foi6hupxxXtffhhUH+veAU+/XvnqIF+7YB+9x+cvTV+ahL24YdXjskZftiV3alrbRYffRRy//437vctBy7PJO7ffgFtuwX80EOwGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggAEGGGCAqxD/PyKdZzQ6rEGSAAAAAElFTkSuQmCC';

/* ---------------------------- Report type catalog ---------------------------- */
/* CÓDIGO institucional único usado en TODOS los informes (franja roja del PDF y pantalla
   "Ver informe"). El correlativo (N° de informe, ej. "INF-001") se escribe a mano en cada
   informe desde el paso "Datos" — ver header.correlativo / stepDatos / persistCurrentStep. */
const CODIGO_INSTITUCIONAL = 'INF-INT-ZUBLIN-GCC-003';
/* Cambio de Turno uses its own distinct código (per its updated template) instead of the
   shared CODIGO_INSTITUCIONAL every other report type displays. */
const CODIGO_CAMBIO_TURNO = 'INF-GOMS-CL-001 REV.0';
/* Cambio de Turno General (the weekly/period summary, item A-J) has its own código per the
   client's real template — "RE-GOMS-CL-119-0 REV.0" on the PDF the person shared. */
const CODIGO_CAMBIO_TURNO_GENERAL = 'RE-GOMS-CL-119-0 REV.0';

/* Sector -> [ubicacion, area, sistema, subsistema] lookup for the Caminata Interna "Excel
   Punch" export. Extracted from the client's "01 - CONTROL DE AVANCE" (LABOR column -> short
   system/subsistema codes, per mining front) crossed with "subsistemas_actualizado" (short
   code -> the full "CODE [DESCRIPTION]" text and área, as printed in the real Punch
   template). ubicacion is the LABOR name exactly as the matrix has it (verbatim, no PK
   attached) — the Punch's "Ubic." column always uses this instead of whatever PK the person
   typed into the report's header, per the client's own instruction that Ubic. must match the
   matrix, not the free-typed PK. Area/sistema/subsistema come pre-formatted exactly as they
   appear in the Punch's C/D/E columns. Two sectors ('ACCESO IFF N', 'CAB 01/N51 HD') have no
   área on file — area comes back '' for those; sistema/subsistema still resolve to short
   codes so the export still works, just without the área text or the "[...]" long
   description for those two. Looked up via findSectorEntry() below, which tries an exact
   match first and falls back to a normalized (spaces/dashes/slashes stripped) match so
   "C-53 EXT" and "C53EXT" and "C 53 EXT" all resolve to the same entry — if nothing matches
   even loosely, the Excel export leaves ubicación/área/sistema/subsistema blank rather than
   guessing, same principle as ITEM/N° Punch: visibly incomplete beats silently wrong. */
/* The client's real "EXCEL PUNCH NUEVO.xlsx" template, embedded as-is (base64) so the
   Caminata Interna Excel export is built by editing a copy of the ACTUAL file byte-for-byte
   — not a lookalike recreated with a spreadsheet library — guaranteeing the column widths,
   header colors, merges, and every other visual detail match exactly. See
   buildPunchExcelBlob() for how it's used: unzip (it's a .xlsx = a zip of XML), replace only
   the worksheet's data rows with inline-text cells (leaving styles.xml, theme1.xml, and
   everything else byte-identical), then re-zip. */
const PUNCH_TEMPLATE_B64 = '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';

const SECTOR_KPI_DICT = [["C-47 W","C-47 W","224200 [NIVEL DE PRODUCCION]","224222F-02 [CALLES]","224222F-02-02 [C-47-PD-N52, INCLUYE ZANJAS AL SUR CONTINUIDAD]"],["C-49 W","C-49 W","224200 [NIVEL DE PRODUCCION]","224222F-02 [CALLES]","224222F-02-03 [C-49-PD-N52, INCLUYE ZANJAS SUR CONTINUIDAD]"],["C-51 W","C-51 W","224200 [NIVEL DE PRODUCCION]","224222F-02 [CALLES]","224222F-02-04 [C-51-PD-N52, INCLUYE ZANJAS SUR Y NORTE CONTINUIDAD]"],["C-53 W","C-53 W","221300 [ACCESOS A SUBNIVELES]","221345F-02 [ACCESO A SUBNIVEL DE PRODUCCION 05]","221345F-02-02 [C-53-PD-N52-N62 CONTINUIDAD, INCLUYE FRM-P-02 Y FRM-P-15]"],["FRM-P-02","FRM-P-02","221300 [ACCESOS A SUBNIVELES]","221345F-02 [ACCESO A SUBNIVEL DE PRODUCCION 05]","221345F-02-02 [C-53-PD-N52-N62 CONTINUIDAD, INCLUYE FRM-P-02 Y FRM-P-15]"],["FRM-P-15","FRM-P-15","221300 [ACCESOS A SUBNIVELES]","221345F-02 [ACCESO A SUBNIVEL DE PRODUCCION 05]","221345F-02-02 [C-53-PD-N52-N62 CONTINUIDAD, INCLUYE FRM-P-02 Y FRM-P-15]"],["TRAS E-W","TRAS E-W","224200 [NIVEL DE PRODUCCION]","224232F-02 [CALLES - TRAMO 2]","224232F-02-08 [FC-NP-N6 (C-57), TRASVASIJE, CONTINUIDAD]"],["GAL EST N-S","GAL EST N-S","221300 [ACCESOS A SUBNIVELES]","221340F-01 [ACCESO A SUBNIVEL DE PRODUCCION MB N04-N05]","221340F-01-06 [RAMPA ACCESO NP-NH (N52_N06); INCLUYE GALERIA ESTACIONAMIENTO Y CABLES EN INTERSECCIÓN CON XC (CONTINUIDAD)]"],["GAL EST N","GAL EST N","221300 [ACCESOS A SUBNIVELES]","221340F-01 [ACCESO A SUBNIVEL DE PRODUCCION MB N04-N05]","221340F-01-06 [RAMPA ACCESO NP-NH (N52_N06); INCLUYE GALERIA ESTACIONAMIENTO Y CABLES EN INTERSECCIÓN CON XC (CONTINUIDAD)]"],["RAC NP-NH","RAC NP-NH","221300 [ACCESOS A SUBNIVELES]","221340F-01 [ACCESO A SUBNIVEL DE PRODUCCION MB N04-N05]","221340F-01-06 [RAMPA ACCESO NP-NH (N52_N06); INCLUYE GALERIA ESTACIONAMIENTO Y CABLES EN INTERSECCIÓN CON XC (CONTINUIDAD)]"],["GAL EST S","GAL EST S","221300 [ACCESOS A SUBNIVELES]","221340F-01 [ACCESO A SUBNIVEL DE PRODUCCION MB N04-N05]","221340F-01-06 [RAMPA ACCESO NP-NH (N52_N06); INCLUYE GALERIA ESTACIONAMIENTO Y CABLES EN INTERSECCIÓN CON XC (CONTINUIDAD)]"],["FCPD N06-01","FCPD N06-01","224200 [NIVEL DE PRODUCCION]","224232F-02 [CALLES - TRAMO 2]","224232F-02-08 [FC-NP-N6 (C-57), TRASVASIJE, CONTINUIDAD]"],["ACCESO IFF N","ACCESO IFF N","","221340F-03","221340F-01-08"],["C-57","C-57","224200 [NIVEL DE PRODUCCION]","224232F-01 [CALLES - TRAMO 1]","224232F-01-03 [C-57-NP-N6 TRAMO 1, ZANJA 2 NORTE Y SUR Y ZANJAS SUR DE LA 3@16, FRE-PD-N6-02, FRI-PD-N6-04]"],["C-51","C-51","224200 [NIVEL DE PRODUCCION]","224212F-02 [CALLES]","224212F-02-03 [C-51-PD-N51, INCLUYE ZANJAS NORTE Y SUR, FRI-PD-N51-06, CONEX-PD-N51-03A CONTINUIDAD]"],["C-49","C-49","224200 [NIVEL DE PRODUCCION]","224212F-02 [CALLES]","224212F-02-02 [C-49-PD-N51, INCLUYE ZANJAS SUR, FRE-PD-N51-04 CONTINUIDAD]"],["C-49 E / CAB 01","C-49 E / CAB 01","224200 [NIVEL DE PRODUCCION]","224212F-02 [CALLES]","224212F-02-02 [C-49-PD-N51, INCLUYE ZANJAS SUR, FRE-PD-N51-04 CONTINUIDAD]"],["FR-SEU-N05-01","FR-SEU-N05-01","221300 [ACCESOS A SUBNIVELES]","221345F-02 [ACCESO A SUBNIVEL DE PRODUCCION 05]","221345F-02-01 [C-53-PD-N51-N06 CONTINUIDAD, INCLUYE FRM-P-14 Y FR-SEU-PD-N05-01]"],["FRM-P-14","FRM-P-14","221300 [ACCESOS A SUBNIVELES]","221345F-02 [ACCESO A SUBNIVEL DE PRODUCCION 05]","221345F-02-01 [C-53-PD-N51-N06 CONTINUIDAD, INCLUYE FRM-P-14 Y FR-SEU-PD-N05-01]"],["Z-09N/C-49","Z-09N/C-49","224200 [NIVEL DE PRODUCCION]","224212F-02 [CALLES]","224212F-02-03 [C-51-PD-N51, INCLUYE ZANJAS NORTE Y SUR, FRI-PD-N51-06, CONEX-PD-N51-03A CONTINUIDAD]"],["Z-09S/C-51","Z-09S/C-51","224200 [NIVEL DE PRODUCCION]","224212F-02 [CALLES]","224212F-02-03 [C-51-PD-N51, INCLUYE ZANJAS NORTE Y SUR, FRI-PD-N51-06, CONEX-PD-N51-03A CONTINUIDAD]"],["Z-16","Z-16","224200 [NIVEL DE PRODUCCION]","224212F-02 [CALLES]","224212F-02-03 [C-51-PD-N51, INCLUYE ZANJAS NORTE Y SUR, FRI-PD-N51-06, CONEX-PD-N51-03A CONTINUIDAD]"],["CONEX -03A","CONEX -03A","224200 [NIVEL DE PRODUCCION]","224212F-02 [CALLES]","224212F-02-03 [C-51-PD-N51, INCLUYE ZANJAS NORTE Y SUR, FRI-PD-N51-06, CONEX-PD-N51-03A CONTINUIDAD]"],["CAB-N6-01","CAB-N6-01","224200 [NIVEL DE PRODUCCION]","224231F-01 [CABECERAS]","224231F-01-01 [CAB-PD-N6-01 / FRI-PD-N6-01 / RE-PD-N6-02]"],["C 47 E/CAB01","C 47 E/CAB01","222600 [MB - N51 N1]","222612F-02 [CALLES]","222612F-02-04 [C-47-NH-N51 CONTINUIDAD]"],["C 41 E/ XC 02","C 41 E/ XC 02","222600 [MB - N51 N1]","222612F-02 [CALLES]","222612F-02-04 [C-47-NH-N51 CONTINUIDAD]"],["CAB 01/N51 HD","CAB 01/N51 HD","","244111F-01","244111F-01-01"],["C-41-NH-N52","C-41-NH-N52","222700 [MB - N52 N1]","222712F-02 [CALLES]","222712F-02-01 [C-41-NH-N52 CONTINUIDAD]"],["C-41-NH-XC-03","C-41-NH-XC-03","222700 [MB - N52 N1]","222712F-02 [CALLES]","222712F-02-01 [C-41-NH-N52 CONTINUIDAD]"],["C-43-NH-N52","C-43-NH-N52","222700 [MB - N52 N1]","222712F-02 [CALLES]","222712F-02-02 [C-43-NH-N52 CONTINUIDAD]"],["C-53 EXT","C-53 EXT","222700 [MB - N52 N1]","222712F-02 [CALLES]","222712F-02-08 [C-53 E-NH-N52 CONTINUIDAD]"],["C-47 E CAB01 HD","C-47 E CAB01 HD","222600 [MB - N51 N1]","222612F-02 [CALLES]","222612F-02-04 [C-47-NH-N51 CONTINUIDAD]"],["FR-INS-51-07","FR-INS-51-07","224300 [NIVEL DE INYECCION]","224312F-01 [FRONTONES MB-N51]","224312F-01-03 [FRONTONES FR-INS-N51-05_07_08_10_11]"],["FR-INS-51-08","FR-INS-51-08","224300 [NIVEL DE INYECCION]","224312F-01 [FRONTONES MB-N51]","224312F-01-03 [FRONTONES FR-INS-N51-05_07_08_10_11]"],["FR-INS-51-10","FR-INS-51-10","224300 [NIVEL DE INYECCION]","224312F-01 [FRONTONES MB-N51]","224312F-01-03 [FRONTONES FR-INS-N51-05_07_08_10_11]"],["FR-INS-51-15","FR-INS-51-15","224300 [NIVEL DE INYECCION]","224312F-01 [FRONTONES MB-N51]","224312F-01-04 [FRONTON FR-INS-N51-12@15]"],["FR-INS-51-14","FR-INS-51-14","224300 [NIVEL DE INYECCION]","224312F-01 [FRONTONES MB-N51]","224312F-01-03 [FRONTONES FR-INS-N51-05_07_08_10_11]"],["FR-INS-N52-04","FR-INS-N52-04","224300 [NIVEL DE INYECCION]","224322F-01 [FRONTONES MB-N52]","224322F-01-03 [FRONTONES FR-INS-N52-04@09]"],["FR-INS-N52-07","FR-INS-N52-07","224300 [NIVEL DE INYECCION]","224322F-01 [FRONTONES MB-N52]","224322F-01-03 [FRONTONES FR-INS-N52-04@09]"],["FR-EXS-N52-23","FR-EXS-N52-23","224400 [NIVEL DE EXTRACCION]","224422F-01 [FRONTONES MB-N52]","224422F-01-04 [FRONTONES XCE-05 MB-N52 SECTOR NORTE]"],["FR-EXS-N52-24","FR-EXS-N52-24","224400 [NIVEL DE EXTRACCION]","224422F-01 [FRONTONES MB-N52]","224422F-01-04 [FRONTONES XCE-05 MB-N52 SECTOR NORTE]"],["FRM-E-01","FRM-E-01","224400 [NIVEL DE EXTRACCION]","224422F-01 [FRONTONES MB-N52]","224422F-01-04 [FRONTONES XCE-05 MB-N52 SECTOR NORTE]"],["FRM-E-03","FRM-E-03","224400 [NIVEL DE EXTRACCION]","224422F-01 [FRONTONES MB-N52]","224422F-01-04 [FRONTONES XCE-05 MB-N52 SECTOR NORTE]"],["XCE-01","XCE-01","224400 [NIVEL DE EXTRACCION]","224412F-01 [FRONTONES MB-N51]","224412F-01-02 [FRONTONES XCE-01 MB-N51 SECTOR NORTE]"],["FR EXS N06-01","FR EXS N06-01","224400 [NIVEL DE EXTRACCION]","224422F-01 [FRONTONES MB-N52]","224422F-01-04 [FRONTONES XCE-05 MB-N52 SECTOR NORTE]"],["GA-03","GA-03","224500 [NIVEL DE ACARREO]","224521F-01 [DESARROLLOS HORIZONTALES MB-N52]","224521F-01-05 [GA-03 N52 (CONTINUIDAD)]"],["GA-03 E","GA-03 E","224500 [NIVEL DE ACARREO]","224521F-01 [DESARROLLOS HORIZONTALES MB-N52]","224521F-01-05 [GA-03 N52 (CONTINUIDAD)]"],["GA-03 W","GA-03 W","224500 [NIVEL DE ACARREO]","224511F-01 [DESARROLLOS HORIZONTALES MB-N51]","224511F-01-01 [GA-03 MB N51(CONTINUIDAD)]"],["RAC-A-01","RAC-A-01","224500 [NIVEL DE ACARREO]","224521F-01 [DESARROLLOS HORIZONTALES MB-N52]","224521F-01-07 [RAC-A-01 N52 (EX RAC-ACA-N52-01)]"],["RAC-A-02","RAC-A-02","224500 [NIVEL DE ACARREO]","224511F-01 [DESARROLLOS HORIZONTALES MB-N51]","224511F-01-07 [RAC-A-02 N51, INCLUYE FRCOMP-ACA-N51-01]"],["FR COM ACA","FR COM ACA","224500 [NIVEL DE ACARREO]","224511F-01 [DESARROLLOS HORIZONTALES MB-N51]","224511F-01-07 [RAC-A-02 N51, INCLUYE FRCOMP-ACA-N51-01]"],["XCA O5","XCA O5","224500 [NIVEL DE ACARREO]","224511F-01 [DESARROLLOS HORIZONTALES MB-N51]","224511F-01-05 [XCA-05 (CONTINUIDAD), INCLUYE FRONTONES]"]];

const REPORT_TYPES = {
  fortificacion: {
    id: 'fortificacion',
    short: 'Materiales Fortificación',
    name: 'INFORME MATERIALES DE FORTIFICACIÓN',
    code: CODIGO_INSTITUCIONAL,
    icon: `<img src="${ICON_FORTIFICACION_PNG}" alt="">`,
    laborLabel: 'Sector',
    objetivoPh: 'REVISIÓN SEMANAL DE ACOPIO DE MATERIALES DE FORTIFICACIÓN, PERIODICIDAD DE LOS MATERIALES, VERIFICACIÓN DE CUMPLIMIENTO DE FECHAS, DENTRO DE LOS PARÁMETROS DE ACEPTACIÓN QUE INDICA EL FABRICANTE.',
    antecedentesPh: 'SE VERIFICAN PLANCHUELAS Y LARGOS DE PERNOS HELICOIDALES, FECHAS DE VENCIMIENTO DE CEMENTO Y ADITIVOS, MALLAS DISPONIBLES, ORDEN Y ASEO DEL SECTOR.',
    antecedentesChecklist: true, // Antecedentes renders as a numbered vertical checklist instead of free text — see catalog 'antecedentesItems'
    correlativoEditable: true
  },
  torque: {
    id: 'torque',
    short: 'Torque Pernos Helicoidales',
    name: 'INFORME DE TORQUE PERNOS HELICOIDALES',
    code: CODIGO_INSTITUCIONAL,
    icon: `<img src="${ICON_TORQUE_PNG}" alt="">`,
    laborLabel: 'Punto verificado',
    objetivoPh: 'CHEQUEO SEGÚN N° DE PLANO Y NOTA DE ESPECIFICACIÓN DE TORQUE.',
    antecedentesPh: 'SE SELECCIONA FILA / PARADA / PERNO N° A VERIFICAR SU TORQUE SEGÚN VALOR ESPECIFICADO EN PLANO.',
    correlativoEditable: true,
    // Torque is the one report type where the observaciones dropdown's "＋ agregar / 🗑
    // quitar del listado" buttons stay visible — here they manage N° de Plano instead of a
    // generic frequent-observation phrase, since the plano number changes per inspection but
    // still gets reused across future ones. Every other report type hides these two buttons
    // (see condPaneHtml) since a plain phrase catalog didn't need its own add/remove UI
    // taking up space on every category tab.
    catalogCta: 'N° de Plano'
  },
  malla: {
    id: 'malla',
    short: 'Instalación de Malla',
    name: 'INFORME DE VERIFICACIÓN DE INSTALACIÓN DE MALLA',
    code: CODIGO_INSTITUCIONAL,
    icon: `<img src="${ICON_MALLA_PNG}" alt="">`,
    laborLabel: 'Sector / PK',
    objetivoPh: 'CHEQUEO DEL ACONDICIONAMIENTO DE LA MALLA REQUERIDO EN PLANOS DE FORTIFICACIÓN.',
    antecedentesPh: 'SE VERIFICA LA INSTALACIÓN Y ACONDICIONAMIENTO DE LA MALLA DE GRADIENTE A GRADIENTE, RESPETANDO EL TRASLAPE MÍNIMO SEGÚN PLANO DE FORTIFICACIÓN.',
    correlativoEditable: true,
    pdfInspeccion: true, procTitle: 'ACONDICIONAMIENTO E INSTALACIÓN DE MALLA' // printed with the "INFORME INSPECCIONES" layout, see buildInspeccionPdfBlob
  },
  shotcrete: {
    id: 'shotcrete',
    short: 'Proyección de Shotcrete',
    name: 'INFORME PROYECCIÓN DE SHOTCRETE',
    code: CODIGO_INSTITUCIONAL,
    icon: `<img src="${ICON_SHOTCRETE_PNG}" alt="">`,
    laborLabel: 'Etapa / Labor',
    objetivoPh: 'INSPECCIÓN DE PROYECCIÓN DE SHOTCRETE EN DESARROLLO DE LA LABOR.',
    antecedentesPh: 'DE ACUERDO CON EL PROCEDIMIENTO VIGENTE, SE OBSERVA LA PROYECCIÓN DE SHOTCRETE SOBRE MALLA EN LA LABOR MENCIONADA.',
    correlativoEditable: true,
    pdfInspeccion: true, procTitle: 'PROYECCIÓN DE SHOTCRETE'
  },
  lechado: {
    id: 'lechado',
    short: 'Lechado de Pernos Helicoidales',
    name: 'PROCESO DE LECHADO DE PERNOS HELICOIDALES',
    code: CODIGO_INSTITUCIONAL,
    icon: `<img src="${ICON_LECHADO_PNG}" alt="">`,
    laborLabel: 'Labor / Sector',
    objetivoPh: 'CUMPLIR DE ACUERDO A PROCEDIMIENTO DE FORTIFICACIÓN N° 4600031460000000-PROMI-00007.',
    antecedentesPh: 'LA CUADRILLA SE ENCONTRABA EN PROCESO DE LECHADO DE PERNOS HELICOIDALES DE 3 M, EN LA LABOR DE NIVEL DE PRODUCCIÓN ___.',
    correlativoEditable: true,
    pdfInspeccion: true, procTitle: 'LECHADO DE PERNOS HELICOIDALES'
  },
  cambioturno: {
    id: 'cambioturno',
    short: 'Cambio de Turno Diario',
    name: 'RESUMEN DE ACTIVIDADES CAMBIO DE TURNO',
    code: CODIGO_CAMBIO_TURNO,
    icon: '🔄',
    kind: 'turno', // uses the alternate section-based data model + PDF layout (see TURNO_SECTIONS)
    laborLabel: 'Frente',
    correlativoEditable: true
  },
  caminata: {
    id: 'caminata',
    short: 'Caminata Interna',
    name: 'INFORME CAMINATA INTERNA',
    code: CODIGO_INSTITUCIONAL,
    icon: `<img src="${ICON_CAMINATA_PNG}" alt="">`,
    laborLabel: 'Labor',
    objetivoPh: 'SE REALIZA CAMINATA INTERNA PREVENTIVA PARA ALERTAR DESVIACIONES QUE PUEDEN SER SUBSANADAS ANTES DE INSPECCIONES EN CONJUNTO CON EL CLIENTE.',
    antecedentesPh: 'SE INSPECCIONA LABOR, SE MARCAN DT PREVENTIVOS.',
    correlativoEditable: true, // shows a manually-editable correlative/report-number field in the red header band
    laborKind: 'paradas' // renders the structured "PARADA N° / PERNO N°" desviación builder instead of free chips
  },
  cambioturnogeneral: {
    id: 'cambioturnogeneral',
    short: 'Cambio de Turno General',
    name: 'RESUMEN DE ACTIVIDADES CAMBIO DE TURNO',
    code: CODIGO_CAMBIO_TURNO_GENERAL,
    icon: '🔁',
    kind: 'turnogeneral', // uses its own section-based data model + PDF layout (see TURNO_GENERAL_SECTIONS)
    laborLabel: 'Frente',
    correlativoEditable: true
  }
};

/* ---------------------------- Caminata Interna: "Parada / Perno" catalog ----------------------------
   Growable dropdown catalogs used by the structured desviación builder in laborKind:'paradas'
   report cards. Each is stored the same way as every other "＋ agregar" catalog (idb catalog
   store, keyed by report typeId), so anything added in the app is remembered for next time. */
const PARADA_TIPO_OPTS = ['CORTADO', 'DOBLADO', 'LARGO', 'SIN PLANCHUELA', 'SHOTCRETE SOPLADO', 'OQUEDAD'];
const PARADA_UBIC_OPTS = ['AMBAS CAJAS', 'CAJA IZQUIERDA', 'CAJA DERECHA', 'HOMBRO IZQUIERDO', 'HOMBRO DERECHO', 'TECHO'];
const PARADA_LABEL_OPTS = ['PARADA N°', 'PERNO N°'];

/* ---------------------------- Cambio de turno diario: section catalog ----------------------------
   This report type doesn't use the labor/cats model of the other 4 reports — it mirrors the
   original "RESUMEN DE ACTIVIDADES CAMBIO DE TURNO" template (A.-PERSONAL EN TURNO … I.-
   DESVIACIONES). Each
   section below is a growable list; every list gets its own "＋" to add a blank row, and any
   field marked with a `catalog` key gets a "frecuentes" dropdown + a "＋" to permanently save a
   new value into that catalog (goms-informes catalog store, key 'cambioturno') so it's offered
   again on the next informe — the same growable-catalog pattern used elsewhere in the app. */
const TURNO_SECTIONS = {
  frentes: {
    title: 'B.- Estatus de frentes último día', addLabel: '+ Agregar frente / protocolo',
    fields: [
      { key:'ubicacion', label:'Ubicación / frente', type:'text', catalog:'ubicaciones', ph:'Ej: NP C-49W /Z16 N51' },
      { key:'detalle',   label:'Detalle',            type:'textarea', catalog:'detalles', ph:'Ej: Lechado de pernos + malla ( falta mensura )' },
      { key:'protocolo', label:'PF protocolo (opcional)', type:'text', ph:'Ej: 0185' }
    ]
  },
  laboratorio: {
    title: 'C.- Laboratorio Idiem', addLabel: '+ Agregar registro de laboratorio',
    fields: [
      { key:'cantidad', label:'Cantidad de ensayos', type:'select', options: Array.from({length:20}, (_,i)=>String(i+1)) },
      { key:'tipoEnsayo', label:'Tipo de ensayo', type:'text', catalog:'tiposEnsayo', ph:'Ej: Tracción de pernos' },
      { key:'detalle', label:'Detalle (opcional)', type:'textarea', ph:'Ej: En GAL EST NORTE, Pk 3,6, parada 4, perno 15.' },
      { key:'boleta', label:'N° de Boleta', type:'text', ph:'Ej: 4582' }
    ]
  },
  observaciones: {
    title: 'D.- Detalles de terminación', addLabel: '+ Agregar nota',
    fields: [
      { key:'texto', label:'Nota', type:'textarea', catalog:'observaciones', ph:'Ej: 07 protocolos en JEJ. Para firmas ID: 0123A, 0140…' }
    ]
  },
  caminatas: {
    title: 'E.- Pernos cable', addLabel: '+ Agregar línea',
    fields: [ { key:'texto', label:'Pernos cable', type:'text', catalog:'caminatas', ph:'Ej: Se mantiene condición en RAC A 01.' } ]
  },
  cierreDT: {
    title: 'F.- Otros hitos del período', addLabel: '+ Agregar línea',
    fields: [ { key:'texto', label:'Hito', type:'text', catalog:'cierreDT', ph:'Ej: Queda coordinado y programado 6m3 de shotcrete S/F para pruebas.' } ]
  },
  // J / K / L go AFTER G-H-I (which are fixed text boxes, not lists) — see TURNO_TAIL_KEYS.
  protocolosProceso: {
    title: 'J.- Estatus de protocolos en proceso', addLabel: '+ Agregar línea',
    fields: [ { key:'texto', label:'Protocolo / estatus', type:'textarea', ph:'Ej: PF 0185 en revisión JEJ, pendiente firma.' } ]
  },
  logShotcrete: {
    title: 'K.- Log de shotcrete', addLabel: '+ Agregar línea',
    fields: [ { key:'texto', label:'Registro', type:'textarea', ph:'Ej: NP C-49W: 6 m3 proyectados, guía 1234.' } ]
  },
  logHormigones: {
    title: 'L.- Log de hormigones', addLabel: '+ Agregar línea',
    fields: [ { key:'texto', label:'Registro', type:'textarea', ph:'Ej: Radier Z16: 12 m3 H30, guía 5678.' } ]
  }
};
const TURNO_SECTION_KEYS = Object.keys(TURNO_SECTIONS);
const TURNO_TAIL_KEYS = ['protocolosProceso', 'logShotcrete', 'logHormigones'];
// B, C, E, F: the list sections drawn before G. D ('observaciones') is NOT a list any more —
// it's two fixed observation boxes (turnoDetallesTerminacionHtml); J/K/L come after I.
const TURNO_HEAD_KEYS = TURNO_SECTION_KEYS.filter(k => k !== 'observaciones' && !TURNO_TAIL_KEYS.includes(k));
/* Sections of the Diario that accept their own photos (D's two sub-headings, E, F, G, J, K, L -
   NOT B, C, H, I). Photos live in r.turno[<key>Fotos] and print right under their section. */
const TURNO_PHOTO_KEYS = ['dSistema', 'dInternos', 'caminatas', 'cierreDT', 'planilla', 'felicitaciones', 'desviaciones', 'protocolosProceso', 'logShotcrete', 'logHormigones'];
function emptyTurnoData(){
  const d = {
    planillaHormigon: '', felicitaciones: '', otros: '', fotos: [],
    // Two fixed KPI card blocks inside "D.- Detalles de terminación" — every value here is
    // typed in by hand (no calculation), matching the two summary-card layouts the person
    // showed screenshots of from another system. Kept as their own fixed objects (not another
    // TURNO_SECTIONS repeatable list) since these are a handful of named numbers filled in
    // once per report, not an open-ended list of lines.
    kpiInternos: { total: '', abiertos: '', cerradosHistorico: '', cerradosPeriodo: '', periodo: '', observaciones: '' },
    kpiSistema: { abiertas: '', abiertasPct: '', atrasadas: '', atrasadasPct: '', cerradas: '', cerradasPct: '', observaciones: '' },
  };
  TURNO_SECTION_KEYS.forEach(k => d[k] = []);
  TURNO_PHOTO_KEYS.forEach(k => d[k + 'Fotos'] = []);
  return d;
}
function newTurnoItem(sectionKey){
  const item = { id: uid() };
  TURNO_SECTIONS[sectionKey].fields.forEach(f => item[f.key] = '');
  return item;
}

/* ------------------------------------ Cambio de Turno General (ítems A-J, período completo) ------------------------------------
   A separate report type from Cambio de Turno Diario (which covers a single day/turn).
   General covers a whole period (e.g. "15-09 al 24-09-2026") and follows the client's own
   "RESUMEN DE ACTIVIDADES CAMBIO DE TURNO" template exactly: same lettered items B/C/D/F,
   but E and G split into named subtítulos, and — per what was asked — C, D, E (both
   subtítulos), F and G (all three subtítulos) each carry their OWN photo gallery, not one
   shared gallery at the end like Diario has. hasFotos on each section definition below
   drives that: turnoGeneralSectionHtml only renders a gallery block for sections where it's
   true, and bindDesarrolloTurnoGeneral only wires up add/remove-photo handlers for those. */
const TURNO_GENERAL_SECTIONS = {
  frentes: {
    title: 'B.- Estatus de frentes último día', addLabel: '+ Agregar frente / protocolo', hasFotos: false,
    fields: [
      { key:'ubicacion', label:'Ubicación / frente', type:'text', catalog:'ubicaciones', ph:'Ej: NP CAB-01 N51' },
      { key:'detalle',   label:'Detalle',            type:'textarea', catalog:'detalles', ph:'Ej: Lechado de pernos + malla parcial' },
      { key:'protocolo', label:'ID / PF (opcional)', type:'text', ph:'Ej: ID: 0299, o PF-236 (firmado)' }
    ]
  },
  laboratorio: {
    title: 'C.- Laboratorio Idiem', addLabel: '+ Agregar registro de laboratorio', hasFotos: true,
    fields: [
      { key:'cantidad', label:'Cantidad de ensayos', type:'select', options: Array.from({length:20}, (_,i)=>String(i+1)) },
      { key:'tipoEnsayo', label:'Tipo de ensayo', type:'text', catalog:'tiposEnsayo', ph:'Ej: Espesores, Tracción de perno, Docilidad…' },
      { key:'detalle', label:'Detalle (opcional)', type:'textarea', ph:'Ej: Resumen ensayos G2' },
      { key:'boleta', label:'N° de Boleta (opcional)', type:'text', ph:'Ej: 4582' }
    ]
  },
  protocolos: {
    title: 'D.- Resumen de protocolos (escaneados y subidos en turno)', addLabel: '+ Agregar nota', hasFotos: true,
    fields: [
      { key:'texto', label:'Nota', type:'textarea', catalog:'protocolos', ph:'Ej: Este punto está nulo ya que se estableció protocolización digital en Dalux.' }
    ]
  },
  terminacionInternos: {
    groupTitle: 'E.- Detalles de terminación', sub: true, title: 'Detalles de terminación internos', addLabel: '+ Agregar línea', hasFotos: true,
    fields: [ { key:'texto', label:'Detalle', type:'textarea', catalog:'terminacionInternos', ph:'Ej: Se cierran 86 DT internos de un total 396 durante el turno.' } ]
  },
  terminacionSistema: {
    sub: true, title: 'Detalles de terminación por sistema', addLabel: '+ Agregar línea', hasFotos: true,
    fields: [ { key:'texto', label:'Detalle', type:'textarea', catalog:'terminacionSistema', ph:'Ej: 396 total DT, 90 abiertas, 83 atrasadas, 223 cerradas — 56.3% cierre.' } ]
  },
  pernosCable: {
    title: 'F.- Pernos cable', addLabel: '+ Agregar línea', hasFotos: true,
    fields: [ { key:'texto', label:'Detalle', type:'textarea', catalog:'pernosCable', ph:'Ej: Se lechan 16 pernos cable en RAC-A-01, se actualiza monografía.' } ]
  },
  caminatasInternas: {
    groupTitle: 'G.- Otros hitos del período', sub: true, title: 'Caminatas internas', addLabel: '+ Agregar línea', hasFotos: true,
    fields: [ { key:'texto', label:'Caminata', type:'text', catalog:'caminatasInternasG', ph:'Ej: 19-09-2026, GAL EST-SUR: 12 DT\'s' } ]
  },
  informesInternos: {
    sub: true, title: 'Informes internos', addLabel: '+ Agregar línea', hasFotos: true,
    fields: [ { key:'texto', label:'Informe', type:'text', catalog:'informesInternosG', ph:'Ej: Materiales de Fortificación' } ]
  },
  alertas: {
    sub: true, title: 'Alertas', addLabel: '+ Agregar alerta', hasFotos: true,
    fields: [ { key:'texto', label:'Alerta', type:'textarea', catalog:'alertasG', ph:'Ej: Hacer seguimiento al tensado de cables para el laboratorio (RAC-A-01, 16 cables de 6m).' } ]
  }
};
const TURNO_GENERAL_SECTION_KEYS = Object.keys(TURNO_GENERAL_SECTIONS);
function emptyTurnoGeneralData(){
  const d = {};
  TURNO_GENERAL_SECTION_KEYS.forEach(k => {
    d[k] = [];
    if (TURNO_GENERAL_SECTIONS[k].hasFotos) d[k + 'Fotos'] = [];
  });
  return d;
}
function newTurnoGeneralItem(sectionKey){
  const item = { id: uid() };
  TURNO_GENERAL_SECTIONS[sectionKey].fields.forEach(f => item[f.key] = '');
  return item;
}

const CAT_KEYS = ['positiva', 'desviacion', 'correctiva'];
const CAT_LABELS = { positiva: 'Condición positiva', desviacion: 'Desviación / Hallazgo', correctiva: 'Acción correctiva' };
/* Photos are tagged with which category (positiva/desviacion/correctiva) they document, so
   annexes can group them. Older reports stored fotos as plain data-URL strings with no tag —
   these two helpers normalize both shapes so nothing breaks on existing saved reports. */
function fotoUrl(f){ return typeof f === 'string' ? f : f.url; }
function fotoCat(f){ return typeof f === 'string' ? 'positiva' : (f.cat || 'positiva'); }
/* Optional 1-based reference to a numbered "Desviación / Hallazgo" item (matches the chip
   numbers rendered by condPaneHtml / the PDF's categoryBlock) — lets a photo be tagged as
   "this documents desviación N°3" so the thumbnail and the PDF annex caption can show that
   number instead of just the category name. Only used by laborKind:'paradas' report types
   (Caminata Interna); everywhere else it stays unset and behaves as before. */
function fotoNum(f){ return (f && typeof f === 'object' && f.num) ? f.num : null; }
/* Free-typed caption for report types that AREN'T laborKind:'paradas' (Caminata Interna has
   its own automatic numbered-hallazgo captioning already — see fotoNum). Either typed by
   hand, or auto-filled by picking one of the category's already-written observations from
   a dropdown (see the photo-obs select in laborCardHtml) — same idea as Caminata Interna's
   "which hallazgo does this photo document" but for the plain positiva/desviación/correctiva
   categories, which don't have a fixed numbered list to point at. */
function fotoCaption(f){ return (f && typeof f === 'object' && f.caption) ? f.caption : ''; }
const CAT_COLORS = { positiva: 'var(--ok)', desviacion: 'var(--warn)', correctiva: 'var(--signal)' };

/* Seed lists of frequent observations per type/category — editable & growable via "+" in the app */
const CATALOG_DEFAULTS = {
  fortificacion: {
    positiva: ['Materiales dentro de fecha de vencimiento', 'Acopio ordenado y señalizado', 'Cantidad de pernos disponible según programa'],
    desviacion: ['Cemento / aditivo próximo a vencer', 'Falta de stock de planchuelas', 'Orden y aseo deficiente en el sector'],
    correctiva: ['Se solicita reposición de stock a bodega', 'Se reordena y señaliza el acopio']
  },
  torque: {
    positiva: ['Torque cumple valor especificado en plano', 'Perno correctamente instalado'],
    desviacion: ['Torque bajo el valor especificado', 'Perno suelto', 'Tuerca sin ajuste completo'],
    correctiva: ['Se reaprieta perno a valor especificado', 'Se reemplaza perno / tuerca']
  },
  malla: {
    positiva: ['Se instala malla de gradiente a gradiente', 'Se identifica uso de calibradores de shotcrete para respetar el espesor mínimo según sección A'],
    desviacion: ['Malla no cuenta en todo su perímetro con el traslape mínimo de 0.3m', 'Perno bajo malla'],
    correctiva: ['Se corrige traslape de malla', 'Se reinstala perno sobre malla']
  },
  shotcrete: {
    positiva: ['Espesor de shotcrete cumple lo especificado', 'Adose de malla correcto previo a proyección'],
    desviacion: ['Espesor de shotcrete bajo lo especificado', 'Shotcrete soplado en sectores puntuales'],
    correctiva: ['Se reproyecta shotcrete en sector observado']
  },
  lechado: {
    positiva: [
      'Cuenta con los pernos correspondientes a la labor (color verde) y balde graduado para la correcta dosificación',
      'Cuenta con aditivo Easy Grout dentro de fecha de utilización',
      'Cementos cumplen con las fechas de utilización'
    ],
    desviacion: [
      'No cuenta con balde graduado para la dosificación',
      'Cemento fuera de fecha de utilización',
      'No cuenta con aditivo Easy Grout disponible'
    ],
    correctiva: [
      'Se solicita balde graduado a bodega para la correcta dosificación',
      'Se retira cemento fuera de fecha y se reemplaza por stock vigente'
    ]
  },
  caminata: {
    positiva: ['Sin observaciones, labor conforme.'],
    desviacion: [],
    correctiva: ['Se marca en terreno para subsanar oportunamente la desviación observada.'],
    tipo: [...PARADA_TIPO_OPTS],
    ubicacionShotcrete: [...PARADA_UBIC_OPTS],
    labelSlot: [...PARADA_LABEL_OPTS]
  },
  cambioturno: {
    ubicaciones: ['NP C-49W /Z16 N51', 'NP C-49W CAB N52', 'NP C-51 W N52', 'NP GAL ESTACIONAMIENTO N N52', 'C-53 EXTENCION', 'NH C-43W', 'FR INY N51 15', 'FRM E 01', 'RAC A 02', 'RAC A 01'],
    detalles: ['Lechado de pernos + malla ( falta mensura )', 'Repaso SH ( recuperar primera guía y de repaso )', 'Shotcrete de sello ( recuperar guía )', 'Shotcrete de sello ( falta mensura )', 'Lechado + malla parcial ( falta mensura )', 'Adose de malla + SH', 'Malla + SH ( Recuperar guía )', 'SH de Sello ( Falta mensura, y guía )', 'Perforación parcial de pernos ( recuperar guía de sello )'],
    laboratorio: ['Tracción de pernos', 'Espesor de shotcrete'],
    tiposEnsayo: ['Espesores', 'Tracción de pernos', 'Docilidad', 'Absorción de energía', 'Panel compresión', 'Edades tempranas', '% de rechazo', 'Aforo Roboshot', 'Adherencia'],
    estatus: ['Malla lista', 'Malla adosada', 'SH sobre malla ( falta guía )', 'Falta guía SH sello', 'Falta guía SH último avance', 'Lechado pernos + malla ( falta mensura )', 'Sh de Sello ( falta guía )', 'Malla parcial ( falta mensura )', 'Sh de Sello ( falta guía, falta mensura )', 'DESQUINCHE'],
    observaciones: ['protocolos en JEJ para firmas', 'protocolos para firma JEJ', 'protocolos en proceso corrección', 'protocolos en proceso'],
    caminatas: ['Sin Caminatas.'],
    cierreDT: ['Sin cierre DT.']
  }
};
/* Cambio de Turno General: every "＋ Elegir frecuente…" list its sections use (see
   TURNO_GENERAL_SECTIONS). Ubicaciones/detalles/tipos de ensayo start from the same seed
   phrases as the Diario; the rest start with the wording used in the client's own template
   and grow through the "＋ Agregar al listado" button like every other catalog. */
CATALOG_DEFAULTS.cambioturnogeneral = {
  ubicaciones: [...CATALOG_DEFAULTS.cambioturno.ubicaciones],
  detalles: [...CATALOG_DEFAULTS.cambioturno.detalles],
  tiposEnsayo: ['Espesores', 'Tracciones de perno', 'Docilidades', 'Adherencia', 'Muestra de lechada', 'Absorción de energía', 'Conteo de fibra', 'Permeabilidad', 'Escurrimientos', 'Ensayo de aforo'],
  protocolos: ['Este punto está nulo ya que se estableció protocolización digital en Dalux.'],
  terminacionInternos: [],
  terminacionSistema: [],
  pernosCable: [],
  caminatasInternasG: [],
  informesInternosG: ['Materiales de fortificación', 'Proyección de shotcrete', 'Instalación de malla', 'Lechado de pernos'],
  alertasG: []
};
/* Every "labor kind" report type also gets a growable catalog for Sector, PK, Objetivo,
   Antecedentes and Conclusiones — the same "select a frequent value or ＋ to save a new
   one" pattern used for observaciones, applied to these single-value fields too, so a
   phrase typed once stays available for every future informe of that type. Objetivo and
   Antecedentes start pre-seeded with that type's own placeholder text as a first option. */
['fortificacion', 'torque', 'malla', 'shotcrete', 'lechado', 'caminata'].forEach(id => {
  const d = CATALOG_DEFAULTS[id];
  d.sector = d.sector || [];
  d.pk = d.pk || [];
  d.objetivo = [REPORT_TYPES[id].objetivoPh];
  d.antecedentes = [REPORT_TYPES[id].antecedentesPh];
  d.conclusiones = d.conclusiones || [];
});
/* Fortificación's Antecedentes is a numbered checklist (see antecedentesChecklist below)
   instead of a free-text field — seed the 6 fixed verification points as its catalog. */
CATALOG_DEFAULTS.fortificacion.antecedentesItems = [
  'Se verifica planchuela para perno helicoidal.',
  'Se verifica color según largo de pernos disponibles.',
  'Se verifica fechas de vencimiento de pallet de cemento según ficha fabricante.',
  'Se verifica mallas MFI 3500-100 y sus distintos largos disponibles.',
  'Se verifica aditivo EASY GROUT y sus fechas de vencimiento.',
  'Se verifica orden y aseo de materiales disponibles.'
];
/* Personal en turno (Inspector 1 / Inspector 2) uses a growable catalog too, shared
   across every report type — the same two inspectors work across all of them. */
CATALOG_DEFAULTS._personal = { nombres: ['ROSAMEL TAPIA ESCOBAR', 'JUVENAL QUINTANA COLIPUE'] };

/* Remembers which cond-block tab (positiva/desviacion/correctiva) was last open per
   labor card index, purely client-side, so re-rendering after adding an observation
   doesn't bounce the user back to the first tab. */
let ACTIVE_TAB = {};

/* ---------------------------------- IndexedDB ---------------------------------- */
const DB_NAME = 'goms-informes';
const DB_VER = 3;
let dbP = null;

function openDB(){
  if (dbP) return dbP;
  dbP = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VER);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('reports')) db.createObjectStore('reports', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('config')) db.createObjectStore('config', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('catalog')) db.createObjectStore('catalog', { keyPath: 'id' });
      // Sector -> ubicación/área/sistema/subsistema matrix used by the Caminata Interna
      // Excel Punch export (see buildPunchExcelBlob). Lives in its own store, one row per
      // sector, so it can be edited/imported from the app itself (Ajustes > Matriz de
      // Sistemas) instead of being baked into app.js and requiring a code update every time
      // the client's WBS changes. Seeded from SECTOR_KPI_DICT the first time the app runs
      // after this store is introduced — see ensureSectorMatrixSeeded().
      if (!db.objectStoreNames.contains('sectormatrix')) db.createObjectStore('sectormatrix', { keyPath: 'sector' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbP;
}
async function idbGet(store, key){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const r = tx.objectStore(store).get(key);
    r.onsuccess = () => res(r.result || null);
    r.onerror = () => rej(r.error);
  });
}
async function idbGetAll(store){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const r = tx.objectStore(store).getAll();
    r.onsuccess = () => res(r.result || []);
    r.onerror = () => rej(r.error);
  });
}
async function idbPut(store, val){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(val);
    tx.oncomplete = () => res(val);
    tx.onerror = () => rej(tx.error);
  });
}
async function idbDelete(store, key){
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).delete(key);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}

async function getConfig(){
  const c = await idbGet('config', 'main');
  return c || {
    id: 'main',
    empresaContratista: 'ZÜBLIN',
    contrato: '4600031460 / GCC-003',
    obra: 'Desarrollo y Construcción Nivel Superior e Inferior Mina Norte — División Chuquicamata',
    generadoPor: '',
    destinoCorreo: '',
    webhookUrl: '',
    oneDriveFolder: ''
  };
}
async function saveConfig(cfg){ cfg.id = 'main'; return idbPut('config', cfg); }

async function getCatalog(typeId){
  const d = CATALOG_DEFAULTS[typeId] || { positiva: [], desviacion: [], correctiva: [] };
  let c = await idbGet('catalog', typeId);
  if (!c){
    c = { id: typeId };
    Object.keys(d).forEach(k => c[k] = [...d[k]]);
    await idbPut('catalog', c);
  } else {
    // Backfill any category keys a newer version of the app added to this type's
    // defaults, without touching what the user already saved (e.g. an app update
    // that adds a new "＋" list to an existing report type).
    let changed = false;
    Object.keys(d).forEach(k => { if (!c[k]){ c[k] = [...d[k]]; changed = true; } });
    // Every "＋ elegir frecuente" catalog holds phrases that get shown/printed uppercase
    // (the app writes every text field in uppercase) — normalize on read so a phrase saved
    // in mixed case by an earlier version of the app (or before this rule existed) never
    // shows up looking different from everything else, in the dropdown or the report.
    Object.keys(c).forEach(k => {
      if (k === 'id' || !Array.isArray(c[k])) return;
      const upper = c[k].map(x => (x || '').toUpperCase());
      if (upper.some((v,i) => v !== c[k][i])){ c[k] = [...new Set(upper)]; changed = true; }
    });
    if (changed) await idbPut('catalog', c);
  }
  return c;
}
async function addCatalogItem(typeId, cat, phrase){
  const c = await getCatalog(typeId);
  c[cat] = c[cat] || [];
  const exists = c[cat].some(x => x.trim().toLowerCase() === phrase.trim().toLowerCase());
  if (!exists) c[cat].push(phrase.trim());
  await idbPut('catalog', c);
  return c;
}
async function removeCatalogItem(typeId, cat, phrase){
  const c = await getCatalog(typeId);
  c[cat] = (c[cat] || []).filter(x => x.trim().toLowerCase() !== phrase.trim().toLowerCase());
  await idbPut('catalog', c);
  return c;
}

/* ------------------------------------ Utils ------------------------------------ */
function uid(){ return 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); }
function pad2(n){ return String(n).padStart(2,'0'); }
function todayISO(){ const d = new Date(); return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
function nowHM(){ const d = new Date(); return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`; }
/* Lightweight deterministic verification code printed next to each signature (report id +
   signer + signing timestamp). Not a cryptographic signature — there's no server here to
   validate it against — but it gives a tamper-evident code tied to that specific signing
   moment, matching the "código de verificación" element of a compliant signature block. */
function shortHash(str){
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++){
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).toUpperCase().padStart(8, '0');
}
function fmtDateDisplay(iso){
  if (!iso) return '—';
  const [y,m,d] = iso.split('-');
  return `${d}-${m}-${y}`;
}
function escapeHtml(s){
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function toast(msg, ms=2600){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._h);
  toast._h = setTimeout(() => t.classList.remove('show'), ms);
}

/* ------------------------------------ In-app modal (replaces window.prompt/confirm) ------------------------------------
   window.prompt() and window.confirm() are unreliable inside an installed PWA — several
   mobile browsers (Safari in particular, in standalone/home-screen mode) either block them
   silently, degrade them to something non-blocking, or leave them visually "stuck" with the
   OK/Cancel buttons not responding — which is exactly what was reported: the "Nuevo tipo de
   desviación" prompt appearing, text getting typed, but Aceptar/Cancelar not doing anything
   and the app never recovering (having to reload and lose whatever wasn't saved yet). These
   two functions replace every window.prompt/confirm call in the app with a modal built from
   ordinary DOM elements the app fully controls, so there's no dependency on a browser-native
   dialog API that may not work in this context. Both return a Promise so call sites read
   almost the same as the functions they replace: `const text = await askText(...)`,
   `if (!(await askConfirm(...))) return;`. */
function closeModal(){
  const root = document.getElementById('modalRoot');
  root.innerHTML = '';
}
function messageToHtml(message){
  return escapeHtml(message).replace(/\n/g, '<br>');
}
function askText(message, initialValue=''){
  return new Promise(resolve => {
    const root = document.getElementById('modalRoot');
    root.innerHTML = `
    <div class="modal-backdrop" data-modalcancel>
      <div class="modal-box" role="dialog" aria-modal="true">
        <div class="modal-msg">${messageToHtml(message)}</div>
        <input type="text" class="modal-input" id="modalTextInput" value="${escapeHtml(initialValue)}">
        <div class="modal-actions">
          <button type="button" class="btn" data-modalcancel>Cancelar</button>
          <button type="button" class="btn btn-primary" data-modalok>Aceptar</button>
        </div>
      </div>
    </div>`;
    const input = document.getElementById('modalTextInput');
    input.focus();
    input.select();
    const finish = (value) => { closeModal(); resolve(value); };
    root.querySelector('[data-modalok]').addEventListener('click', () => finish(input.value));
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') finish(input.value); });
    root.querySelectorAll('[data-modalcancel]').forEach(el => el.addEventListener('click', (e) => {
      if (e.target === el) finish(null);
    }));
  });
}
function askConfirm(message){
  return new Promise(resolve => {
    const root = document.getElementById('modalRoot');
    root.innerHTML = `
    <div class="modal-backdrop" data-modalcancel>
      <div class="modal-box" role="dialog" aria-modal="true">
        <div class="modal-msg">${messageToHtml(message)}</div>
        <div class="modal-actions">
          <button type="button" class="btn" data-modalcancel>Cancelar</button>
          <button type="button" class="btn btn-primary" data-modalok>Aceptar</button>
        </div>
      </div>
    </div>`;
    const finish = (value) => { closeModal(); resolve(value); };
    root.querySelector('[data-modalok]').addEventListener('click', () => finish(true));
    root.querySelectorAll('[data-modalcancel]').forEach(el => el.addEventListener('click', (e) => {
      if (e.target === el) finish(false);
    }));
  });
}
/* Shows one full-width button per option (label/value pairs) and resolves with the chosen
   value, or null if the person taps outside/cancels. Used to ask "¿a qué corresponde esta
   foto?" before opening the camera/gallery — replacing a silent guess based on whichever
   category tab happened to be open last (ACTIVE_TAB), which is what let photos land under
   the wrong category invisibly: the button lived outside the Positiva/Desviación/Correctiva
   tabs entirely, so nothing on screen indicated which one a new photo would be tagged with. */
function askChoice(message, options){
  return new Promise(resolve => {
    const root = document.getElementById('modalRoot');
    const buttons = options.map(o => `<button type="button" class="btn modal-choice" data-modalchoice="${escapeHtml(o.value)}">${escapeHtml(o.label)}</button>`).join('');
    root.innerHTML = `
    <div class="modal-backdrop" data-modalcancel>
      <div class="modal-box" role="dialog" aria-modal="true">
        <div class="modal-msg">${messageToHtml(message)}</div>
        <div class="modal-choices">${buttons}</div>
        <div class="modal-actions">
          <button type="button" class="btn" data-modalcancel>Cancelar</button>
        </div>
      </div>
    </div>`;
    const finish = (value) => { closeModal(); resolve(value); };
    root.querySelectorAll('[data-modalchoice]').forEach(btn => btn.addEventListener('click', () => finish(btn.getAttribute('data-modalchoice'))));
    root.querySelectorAll('[data-modalcancel]').forEach(el => el.addEventListener('click', (e) => {
      if (e.target === el) finish(null);
    }));
  });
}
function emptyCat(){ return { sel: [], custom: '' }; }
function emptyReport(typeId){
  const t = REPORT_TYPES[typeId];
  const r = {
    id: uid(),
    typeId,
    status: 'draft', // draft -> listo -> enviado
    createdAt: Date.now(),
    updatedAt: Date.now(),
    header: { fecha: todayISO(), hora: nowHM(), turno: 'DIA', grupo: 'G1', area: 'MINERIA', proceso: '', sector: '', pk: '', sectorPk: '', correlativo: '', periodoInicio: '', periodoFin: '', cobertura: '' },
    personal: [ { nombre:'', cargo:'Inspector de Calidad', firma:null }, { nombre:'', cargo:'Inspector de Calidad', firma:null } ],
    objetivo: '',
    antecedentes: '',
    antecedentesSel: [],
    labores: [],
    conclusiones: '',
    sentAt: null,
    pdfMeta: null
  };
  if (t && t.antecedentesChecklist) r.antecedentesSel = [...(CATALOG_DEFAULTS[typeId]?.antecedentesItems || [])];
  if (t && t.kind === 'turno'){
    r.turno = emptyTurnoData();
    // Cambio de Turno splits "A.- PERSONAL EN TURNO" into Turno Noche / Turno Día, only one
    // of which is actually staffed on a given day (whichever r.header.turno points at) — the
    // other prints "Sin registro" in the PDF rather than an empty list. Kept separate from
    // the generic r.personal (still used for the signature step, same as every other report
    // type) so switching the DÍA/NOCHE toggle doesn't require moving people between lists.
    r.personalNoche = [];
    r.personalDia = [];
  }
  if (t && t.kind === 'turnogeneral'){
    r.turnoGeneral = emptyTurnoGeneralData();
    // Unlike Cambio de Turno Diario, General covers a whole period (e.g. "15-09 al
    // 24-09-2026") during which BOTH Turno Noche and Turno Día were actually staffed on
    // different days — there's no single "active" turn to toggle between, so (unlike
    // personalNoche/personalDia above) both lists print for real every time, never "Sin
    // registro". header.periodoInicio/periodoFin (already on every report) carry the date
    // range for item's own "PERIODO" line.
    r.personalNoche = [];
    r.personalDia = [];
  }
  return r;
}
function newLabor(){
  return { id: uid(), titulo: '', cats: { positiva: emptyCat(), desviacion: emptyCat(), correctiva: emptyCat() }, fotos: [], paradas: [] };
}
/* Caminata Interna: one structured desviación row = "PARADA N° 22: Perno Cortado." built from
   a free-typed number + a Parada/Perno toggle + a defect-type dropdown, plus (only for the
   SHOTCRETE SOPLADO defect) a second ubicación dropdown appended in parentheses. Stored
   separately from the free-text chips (l.cats.desviacion) so the structured pieces stay
   editable individually; composeParada() below turns one row into the final printed line
   that also gets pushed into l.cats.desviacion.sel for the existing chip/PDF machinery. */
/* Caminata Interna: one structured desviación row. paradaNum / pernoNum are both optional
   free-typed numbers — fill in whichever apply (often both: "la parada X, el perno Y de esa
   parada") — plus a defect-type dropdown and, only for SHOTCRETE SOPLADO, a second ubicación
   dropdown. composeParada() renders "PARADA N°X, PERNO N°Y TIPO (UBICACIÓN)." using whichever
   of paradaNum/pernoNum were filled in, all-caps, matching the paper report's handwriting
   convention. Old saved rows used a single numLabel+num field (Parada OR Perno, not both) —
   normalizeParada() upgrades those transparently so existing drafts keep working. */
/* Caminata Interna: one structured desviación row. slot1/slot2 are two independent "N°"
   entries — each has its own label dropdown (PARADA N° / PERNO N°, itself a growable catalog
   the user can extend with ＋ or trim with 🗑, same pattern as every other dropdown in the
   app) plus a free-typed number. Both slots are optional; fill in whichever apply (e.g. just
   "Parada N°1", or "Parada N°1" + "Perno N°2", or even "Parada N°1" + "Parada N°2"). Plus a
   defect-type dropdown and, only for SHOTCRETE SOPLADO, a second ubicación dropdown.
   composeParada() renders "PARADA N°1, PERNO N°2 TIPO (UBICACIÓN)." using whichever slots
   were filled in, all-caps, matching the paper report's handwriting convention. Old saved
   rows used a single numLabel+num field, and the format right before this one used a fixed
   paradaNum+pernoNum pair — normalizeParada() upgrades both transparently. */
function newParada(){ return { id: uid(), slot1Label: 'PARADA N°', slot1Num: '', slot2Label: 'PERNO N°', slot2Num: '', extras: [], tipo: '', ubic: '' }; }
/* One extra "N°" entry beyond slot1/slot2 — same shape as a slot but stored in an array
   instead of fixed slot3/slot4/... fields, so the person can add as many as a single parada
   actually needs (three, four, more pernos sharing the same defect) instead of being capped
   at one extra. */
function newExtraSlot(){ return { label: 'PERNO N°', num: '' }; }
function normalizeParada(p){
  if (!p) return p;
  if (p.slot1Label !== undefined){
    // Already current shape. May predate "extras" (added after slot3), or predate slot3
    // itself (added even earlier) — backfill either so every parada object ends up with a
    // consistent shape regardless of which version of the app created it.
    if (!Array.isArray(p.extras)){
      // Migrate the old fixed slot3Label/slot3Num/slot3Visible fields (used right before
      // "extras" existed) into the first entry of the new array, if it had a value.
      p.extras = (p.slot3Visible && p.slot3Num) ? [{ label: p.slot3Label || 'PERNO N°', num: p.slot3Num }] : [];
      delete p.slot3Label; delete p.slot3Num; delete p.slot3Visible;
    }
    return p;
  }
  if (p.paradaNum !== undefined || p.pernoNum !== undefined){
    // Migrate the paradaNum/pernoNum shape used right before this format existed.
    return {
      id: p.id, tipo: p.tipo || '', ubic: p.ubic || '',
      slot1Label: 'PARADA N°', slot1Num: p.paradaNum || '',
      slot2Label: 'PERNO N°', slot2Num: p.pernoNum || '',
      extras: []
    };
  }
  // Migrate the original { numLabel, num } shape used before either of those existed.
  return {
    id: p.id, tipo: p.tipo || '', ubic: p.ubic || '',
    slot1Label: p.numLabel === 'PERNO' ? 'PERNO N°' : 'PARADA N°', slot1Num: p.num || '',
    slot2Label: 'PERNO N°', slot2Num: '',
    extras: []
  };
}
/* Regular Spanish adjectives ending in -O pluralize by adding -S (CORTADO -> CORTADOS,
   DOBLADO -> DOBLADOS, LARGO -> LARGOS) — covers every tipo in PARADA_TIPO_OPTS that's a
   simple adjective. Anything that doesn't end in -O (OQUEDAD, SIN PLANCHUELA, SHOTCRETE
   SOPLADO — itself already two words where only SOPLADO would need to change) is left
   exactly as typed rather than risk producing an incorrect plural automatically; the person
   can still edit the composed line's wording by hand in that case. */
function pluralizeTipo(tipo){
  const t = (tipo || '').toUpperCase();
  if (t.endsWith('O')) return t + 'S';
  return t;
}
function composeParada(p){
  p = normalizeParada(p);
  const extraNums = (p.extras || []).map(e => e.num).filter(Boolean);
  if (!p || (!p.slot1Num && !p.slot2Num && !extraNums.length) || !p.tipo) return '';
  // Force everything to uppercase no matter what's stored — protects against any label,
  // tipo, or ubicación value saved in a mixed case from an older version of the app (or
  // typed before the global auto-uppercase rule applied to this field), so the composed
  // line is always fully uppercase and visually consistent, never mixed-case.
  const parts = [];
  if (p.slot1Num) parts.push(`${(p.slot1Label||'').toUpperCase()}${p.slot1Num}`);
  if (p.slot2Num) parts.push(`${(p.slot2Label||'').toUpperCase()}${p.slot2Num}`);
  (p.extras || []).forEach(e => { if (e.num) parts.push(`${(e.label||'PERNO N°').toUpperCase()}${e.num}`); });
  const lugar = parts.join(', ');
  // Two-or-more of the SAME kind of thing (e.g. Perno N°1 and Perno N°3, and any further
  // ones, all cortados) reads as "..., PERNO N°3, PERNO N°5 CORTADOS" — plural — matching
  // how it'd be written by hand. Slot1 is always "Parada N°" (the container, not a
  // countable defective thing) so it's never counted toward this — only slot2 and every
  // extra (which are usually "Perno N°", the actual items with the defect) count toward
  // whether the tipo pluralizes.
  const countableFilled = (p.slot2Num ? 1 : 0) + extraNums.length;
  const tipoTxt = countableFilled >= 2 ? pluralizeTipo(p.tipo) : p.tipo.toUpperCase();
  const ubicTxt = (p.tipo === 'SHOTCRETE SOPLADO' && p.ubic) ? ` ${p.ubic.toUpperCase()}` : '';
  return `${lugar} ${tipoTxt}${ubicTxt}.`;
}
/* Caminata Interna (laborKind:'paradas'): the composed "PARADA N°1, PERNO N°2 CORTADO." lines
   are derived LIVE from l.paradas on every render — there is no separate manual "save" step, so
   a row counts as a real desviación the moment at least one N° + the type are filled in, with
   no risk of the user filling the fields but forgetting to press a confirm button. This is what
   countsForReport(), the PDF's categoryBlock, the color pills, and the photo N° dropdown all
   read from for paradas-type labores instead of l.cats.desviacion. */
function paradasTexts(l){
  return (l.paradas || []).map(composeParada).filter(Boolean);
}
function joinCat(catObj){
  const parts = [];
  (catObj?.sel || []).forEach(s => parts.push(s));
  if (catObj?.custom && catObj.custom.trim()) parts.push(catObj.custom.trim());
  return parts;
}
/* Parses "metros caminados" out of a free-typed PK field like "Pk 130 al Pk 141",
   "PK 3,6 - PK 4,1", "130 a 141", etc. — looks for the first two numbers in the text
   (accepting comma or dot as decimal separator) and returns the absolute distance between
   them in meters. Returns null when the text doesn't contain two numbers (a single PK, or
   the field left blank) since there's nothing to subtract yet. Used to auto-calculate the
   KPI "Hallazgos / metro caminado" from the header's PK field — no separate metros input,
   so there's nothing extra for the user to fill in or forget to update. */
function metrosDelPk(pkText){
  if (!pkText) return null;
  const nums = (pkText.match(/\d+(?:[.,]\d+)?/g) || []).map(n => parseFloat(n.replace(',', '.')));
  if (nums.length < 2) return null;
  const metros = Math.abs(nums[1] - nums[0]);
  return metros > 0 ? metros : null;
}
/* KPI row shown just below Sector/PK in the "Datos" step, "Ver informe", and "Revisión":
   hallazgos ÷ metros caminados, fully derived from data already entered elsewhere (the
   desviación count from Desarrollo, the metros from the PK field above) — nothing new for
   the user to type or keep in sync. Shows only the label and the result, matching the plain
   "KPI: 0.650" look of the other header fields — no parenthetical breakdown underneath. */
function kpiCaminataHtml(r){
  const metros = metrosDelPk(r.header.pk);
  const hallazgos = countsForReport(r).desviacion;
  const kpi = (metros && metros > 0) ? (hallazgos / metros) : null;
  // If the PK field doesn't have two numbers to calculate metros from (missing, incomplete,
  // or just a single PK with nothing to subtract), don't show the KPI block at all — no
  // label, no dash placeholder — rather than displaying an empty-looking "KPI —".
  if (kpi === null) return '';
  return `
  <div class="field kpi-card">
    <label>KPI</label>
    <div class="kpi-value">${kpi.toFixed(3)}</div>
  </div>`;
}
function countsForReport(r){
  let positiva=0, desviacion=0, correctiva=0;
  const t = REPORT_TYPES[r.typeId];
  const isParadas = t && t.laborKind === 'paradas';
  r.labores.forEach(l => {
    positiva += joinCat(l.cats.positiva).length;
    desviacion += isParadas ? paradasTexts(l).length : joinCat(l.cats.desviacion).length;
    correctiva += joinCat(l.cats.correctiva).length;
  });
  return { positiva, desviacion, correctiva };
}

/* Downscale + compress a captured photo file to keep storage & PDF size sane */
/* Reads the EXIF orientation tag (1-8) from a JPEG File without any external library — walks
   the raw APP1/Exif segment by hand. Returns 1 (normal) if the file isn't a JPEG, has no EXIF
   block, or anything looks malformed; never throws. This exists because phone cameras (very
   commonly iPhones, but also many Android models) save the photo's pixels in the sensor's
   native landscape orientation and store how to *display* it upright in this EXIF tag instead
   of physically rotating the pixel data. Drawing straight into a <canvas> ignores that tag, so
   the compressed photo comes out sideways, upside-down, or mirrored — which is what "las fotos
   salen desvirtuadas" was. */
function readExifOrientation(arrayBuffer){
  try {
    const view = new DataView(arrayBuffer);
    if (view.getUint16(0, false) !== 0xFFD8) return 1; // not a JPEG
    let offset = 2;
    const length = view.byteLength;
    while (offset < length){
      const marker = view.getUint16(offset, false);
      offset += 2;
      if (marker === 0xFFE1){ // APP1 (Exif)
        const exifLength = view.getUint16(offset, false);
        const exifStart = offset + 2;
        if (view.getUint32(exifStart, false) !== 0x45786966) return 1; // "Exif"
        const tiffStart = exifStart + 6;
        const little = view.getUint16(tiffStart, false) === 0x4949;
        const firstIFDOffset = view.getUint32(tiffStart + 4, little);
        const dirStart = tiffStart + firstIFDOffset;
        const entries = view.getUint16(dirStart, little);
        for (let i = 0; i < entries; i++){
          const entryOffset = dirStart + 2 + i*12;
          if (view.getUint16(entryOffset, little) === 0x0112){ // Orientation tag
            return view.getUint16(entryOffset + 8, little);
          }
        }
        return 1;
      } else if ((marker & 0xFF00) !== 0xFF00){
        break;
      } else {
        offset += view.getUint16(offset, false);
      }
    }
  } catch (e) { /* malformed/unexpected data — fall through to "normal" */ }
  return 1;
}

function fileToCompressedDataURL(file, maxDim = 1280, quality = 0.72){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const orientation = readExifOrientation(reader.result);
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDim){ height = Math.round(height * (maxDim/width)); width = maxDim; }
        else if (height > maxDim){ width = Math.round(width * (maxDim/height)); height = maxDim; }
        // Orientations 5-8 involve a 90°/270° rotation, so the canvas needs its width/height
        // swapped relative to the source image, or the rotated result gets squashed/stretched
        // into the wrong aspect ratio — the "distorted" look.
        const swapDims = orientation >= 5 && orientation <= 8;
        const canvas = document.createElement('canvas');
        canvas.width = swapDims ? height : width;
        canvas.height = swapDims ? width : height;
        const ctx = canvas.getContext('2d');
        switch (orientation){
          case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;            // mirror horizontal
          case 3: ctx.transform(-1, 0, 0, -1, width, height); break;      // rotate 180°
          case 4: ctx.transform(1, 0, 0, -1, 0, height); break;           // mirror vertical
          case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;                 // mirror + rotate 270°
          case 6: ctx.transform(0, 1, -1, 0, height, 0); break;           // rotate 90°
          case 7: ctx.transform(0, -1, -1, 0, height, width); break;      // mirror + rotate 90°
          case 8: ctx.transform(0, -1, 1, 0, 0, width); break;            // rotate 270°
          default: break;                                                 // 1 (or unknown): no transform needed
        }
        ctx.drawImage(img, 0, 0, width, height);
        URL.revokeObjectURL(img.src);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = (e) => { URL.revokeObjectURL(img.src); reject(e); };
      const blob = new Blob([reader.result], { type: file.type || 'image/jpeg' });
      img.src = URL.createObjectURL(blob);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

/* Duplicate an existing report as a fresh draft — keeps header template, personnel,
   and the labor titles + frequently-used observations already selected, but clears
   photos, signatures, date/time and status so the crew doesn't retype everything. */
async function duplicateReport(id){
  const orig = await idbGet('reports', id);
  if (!orig) return null;
  const copy = JSON.parse(JSON.stringify(orig));
  copy.id = uid();
  copy.status = 'draft';
  copy.createdAt = Date.now();
  copy.updatedAt = Date.now();
  copy.sentAt = null;
  copy.header = { ...copy.header, fecha: todayISO(), hora: nowHM() };
  copy.personal.forEach(p => { p.firma = null; });
  if (copy.personalNoche) copy.personalNoche.forEach(p => { p.firma = null; });
  if (copy.personalDia) copy.personalDia.forEach(p => { p.firma = null; });
  // Photos come along with the duplicate (deep-cloned above, same as everything else in
  // labores) — only each labor's id is refreshed so it doesn't collide with the original's.
  // For Caminata Interna, each foto's "num" is a position within that labor's own hallazgo
  // list (see fotoNum), not a reference to any other report's data, and paradas is cloned
  // unchanged right alongside it — so a duplicated report's photo-to-hallazgo numbering
  // stays correct with no extra bookkeeping needed here.
  copy.labores.forEach(l => { l.id = uid(); });
  await idbPut('reports', copy);
  return copy.id;
}

/* ------------------------------------ Router ------------------------------------ */
let ROUTE = { screen: 'home', params: {} };
/* True for the exact duration of a go()-triggered render — see go()'s own comment for why
   this exists. #app.app-rendering (pointer-events:none, in styles.css) is the primary
   defense against a tap landing on a not-yet-wired button during that window; this flag is
   a second, JS-level check that doesn't depend on CSS pointer-events actually being honored,
   used by isRenderingGuard() below. */
let RENDERING = false;
function isRenderingGuard(){ return RENDERING; }
const WIZ_STEPS = ['datos','personal','resumen','desarrollo','conclusiones','revision'];
/* "Cambio de Turno Diario" follows its own template (no objetivo/antecedentes or
   conclusiones sections in the original document), so it skips those two steps. */
const WIZ_STEPS_TURNO = ['datos','personal','desarrollo','revision'];
const WIZ_TITLES = {
  datos: 'Datos generales', personal: 'Personal en turno', resumen: 'Resumen del turno',
  desarrollo: 'Desarrollo — registros', conclusiones: 'Conclusiones', firmas: 'Firmas',
  revision: 'Revisión y envío'
};
function wizStepsFor(t){ return (t && (t.kind === 'turno' || t.kind === 'turnogeneral')) ? WIZ_STEPS_TURNO : WIZ_STEPS; }

function go(screen, params={}){
  // Re-rendering the very same screen+step (e.g. after picking a catalog value, toggling
  // a checklist item, or adding a row) should not yank the page back to the top — only a
  // real navigation (different screen/step) resets scroll.
  const samePlace = ROUTE.screen === screen && ROUTE.params?.id === params.id && ROUTE.params?.step === params.step;
  const prevScroll = samePlace ? window.scrollY : 0;
  ROUTE = { screen, params };
  // render() is async (it re-reads from IndexedDB and, on the wizard screen, awaits
  // getCatalog() too) but go() itself is fire-and-forget — nothing here awaits render()
  // finishing. That's fine for go() callers that don't need to know when it's done, but it
  // means there's a real window, between the moment go() is called and the moment render()
  // actually replaces #app's HTML and re-binds every button, where the PREVIOUS screen's
  // buttons are still what's on screen but wired to the OLD data, or — worse — a screen with
  // many fields (several hallazgo lines, e.g.) can still be finishing its bindDesarrollo()
  // loop when a real tap lands, hitting a button whose click listener hasn't been attached
  // yet. That's what "ni Atrás ni Continuar responden" turned out to be: not a hang, and not
  // duplicated content on its own — a tap landing in that gap does nothing at all, silently,
  // because the button it hit has no handler yet. #app gets pointer-events:none (see
  // .app-rendering in styles.css) for the exact duration of the render so a tap physically
  // can't land on a not-yet-wired button, no matter how long getCatalog()/idbGet() take.
  const app = document.getElementById('app');
  app.classList.add('app-rendering');
  RENDERING = true;
  render().then(() => {
    app.classList.remove('app-rendering');
    RENDERING = false;
    if (samePlace) window.scrollTo(0, prevScroll);
    else { document.getElementById('app').scrollTo?.(0,0); window.scrollTo(0,0); }
  });
}

async function render(){
  const app = document.getElementById('app');
  let html = '';
  if (ROUTE.screen === 'home') html = await renderHome();
  else if (ROUTE.screen === 'historial') html = await renderHistorial();
  else if (ROUTE.screen === 'config') html = await renderConfig();
  else if (ROUTE.screen === 'sectormatrix') html = await renderSectorMatrix();
  else if (ROUTE.screen === 'wizard') html = await renderWizard(ROUTE.params.id, ROUTE.params.step);
  else if (ROUTE.screen === 'ver') html = await renderVer(ROUTE.params.id);
  app.innerHTML = html;
  bindGlobal();
  if (ROUTE.screen === 'home') bindHome();
  if (ROUTE.screen === 'historial') bindHistorial();
  if (ROUTE.screen === 'config') bindConfig();
  if (ROUTE.screen === 'sectormatrix') bindSectorMatrix();
  // bindWizard is async (it re-reads the report from IndexedDB before wiring any button up)
  // — calling it without awaiting left a real window where the wizard's HTML was already on
  // screen but NONE of its buttons had a working click handler yet, since render() itself
  // had already returned in the meantime. On a slow device, or a screen with a lot of
  // fields to bind (many hallazgo lines, e.g.), that window is wide enough for a real tap to
  // land in it and do nothing at all — which is exactly what "ni Atrás ni Continuar
  // responden" was: not a hang, but buttons that were never actually wired up yet.
  if (ROUTE.screen === 'wizard') await bindWizard(ROUTE.params.id, ROUTE.params.step);
  if (ROUTE.screen === 'ver') bindVer(ROUTE.params.id);
}

function topbar(title, opts={}){
  const back = opts.back !== false;
  return `
  <div class="topbar">
    ${back ? `<button class="back" data-nav="${opts.backTo || 'home'}">‹</button>` : `<span style="width:38px"></span>`}
    <h1>${escapeHtml(title)}</h1>
    <span class="net-pill" id="netPill"><span class="dot"></span><span id="netTxt">—</span></span>
  </div>`;
}

function bindGlobal(){
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => go(el.getAttribute('data-nav')));
  });
  document.querySelectorAll('[data-dupreport]').forEach(el => el.addEventListener('click', async (e) => {
    e.stopPropagation();
    const id = el.getAttribute('data-dupreport');
    const newId = await duplicateReport(id);
    if (newId){ toast('Informe duplicado — continúa editando'); go('wizard', { id: newId, step: 'datos' }); }
  }));
  document.querySelectorAll('[data-delreport]').forEach(el => el.addEventListener('click', async (e) => {
    e.stopPropagation();
    const id = el.getAttribute('data-delreport');
    if (!(await askConfirm('¿Eliminar este informe del dispositivo? Esta acción no se puede deshacer.'))) return;
    await idbDelete('reports', id);
    toast('Informe eliminado');
    render();
  }));
  updateNetPill();
}

function updateNetPill(){
  const pill = document.getElementById('netPill');
  const txt = document.getElementById('netTxt');
  if (!pill) return;
  const online = navigator.onLine;
  pill.classList.toggle('online', online);
  pill.classList.toggle('offline', !online);
  txt.textContent = online ? 'EN LÍNEA' : 'SIN SEÑAL';
}
window.addEventListener('online', () => { updateNetPill(); toast('Señal recuperada — sincronizando pendientes…'); attemptAutoSync(); });
window.addEventListener('offline', updateNetPill);

/* ------------------------------------ HOME ------------------------------------ */
async function renderHome(){
  const cfg = await getConfig();

  const cards = Object.values(REPORT_TYPES).map(t => `
    <button class="type-card" data-newtype="${t.id}">
      <span class="bar"></span>
      <span class="ic">${t.icon}</span>
      <span class="lbl">${escapeHtml(t.short)}</span>
    </button>
  `).join('');

  return `
  <div class="topbar">
    <span style="width:38px"></span>
    <h1>Informes GOMS</h1>
    <span class="net-pill" id="netPill"><span class="dot"></span><span id="netTxt">—</span></span>
  </div>
  <div class="screen">
    <div class="home-hero">
      <div class="stamp done">V°B°</div>
      <div class="txt">
        <div class="kicker">Departamento de Calidad</div>
        <h1>Terreno &amp; registro</h1>
        <div class="company-line"><span class="zublin-badge"><img src="${ZUBLIN_LOGO_PNG}" alt="ZÜBLIN"></span> Contrato N° ${escapeHtml(cfg.contrato)}</div>
      </div>
    </div>

    <div class="eyebrow">Nuevo informe</div>
    <div class="grid-types">${cards}</div>

    <button class="btn btn-ghost" data-nav="historial" style="justify-content:center; margin-top:14px;">📜 Ver historial de informes</button>
    <button class="btn btn-ghost" id="btnImportDraft" style="justify-content:center; margin-top:8px;">📥 Recibir informe compartido</button>
    <input type="file" id="importDraftInput" accept=".json,application/json,text/plain" style="display:none;">

    <div class="section-title" style="margin-top:20px;">
      <span>Ajustes</span>
    </div>
    <button class="btn btn-ghost" data-nav="config" style="justify-content:flex-start;">⚙ Configuración de envío y contrato</button>
  </div>
  <div class="spacer"></div>
  `;
}

function cardRow(r){
  const t = REPORT_TYPES[r.typeId];
  const chip = r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>'
             : r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>'
             : '<span class="status-chip draft">Borrador</span>';
  return `
  <div class="report-card">
    <div class="stamp ${r.status==='draft'?'pending':'done'}" style="--sz:34px;font-size:9px;" data-openreport="${r.id}">${t.icon}</div>
    <div class="meta" data-openreport="${r.id}">
      <div class="t1">${escapeHtml(t.short)} · ${escapeHtml(r.header.sectorPk || 'sin sector')}</div>
      <div class="t2">${t.kind === 'turnogeneral'
        ? ((r.header.periodoInicio || r.header.periodoFin) ? `${r.header.periodoInicio ? fmtDateDisplay(r.header.periodoInicio) : '—'} al ${r.header.periodoFin ? fmtDateDisplay(r.header.periodoFin) : '—'}` : fmtDateDisplay(r.header.fecha))
        : `${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.turno)} · ${escapeHtml(r.header.grupo)}`}</div>
    </div>
    ${chip}
    <button type="button" class="dup-btn" data-dupreport="${r.id}" title="Duplicar informe">⧉</button>
    <button type="button" class="dup-btn del-btn" data-delreport="${r.id}" title="Eliminar informe">🗑</button>
  </div>`;
}

function bindHome(){
  const importInput = document.getElementById('importDraftInput');
  document.getElementById('btnImportDraft').addEventListener('click', () => { importInput.value = ''; importInput.click(); });
  importInput.addEventListener('change', async () => {
    if (!importInput.files.length) return;
    const newId = await importSharedDraft(importInput.files[0]);
    if (newId){
      toast('Informe recibido — ya puedes seguir completándolo');
      go('wizard', { id: newId, step: 'datos' });
    }
  });
  document.querySelectorAll('[data-newtype]').forEach(el => el.addEventListener('click', async () => {
    const typeId = el.getAttribute('data-newtype');
    const r = emptyReport(typeId);
    await idbPut('reports', r);
    go('wizard', { id: r.id, step: 'datos' });
  }));
}

/* ------------------------------------ HISTORIAL ------------------------------------ */
async function renderHistorial(){
  const reports = await idbGetAll('reports');
  const groups = {};
  Object.keys(REPORT_TYPES).forEach(k => groups[k] = []);
  reports.forEach(r => { (groups[r.typeId] ||= []).push(r); });
  Object.values(groups).forEach(list => list.sort((a,b) => b.updatedAt - a.updatedAt));
  const total = reports.length;

  const boxes = Object.values(REPORT_TYPES).map(t => {
    const list = groups[t.id] || [];
    const rows = list.map(cardRow).join('');
    return `
    <div class="type-box">
      <div class="type-box-h">
        <span class="ic">${t.icon}</span>
        <span class="tb-name">${escapeHtml(t.short)}</span>
        <span class="tb-count">${list.length}</span>
      </div>
      ${list.length ? `<div class="queue-list">${rows}</div>` : `<div class="empty-hint sm">Sin informes todavía.</div>`}
    </div>`;
  }).join('');

  return `
  ${topbar('Historial')}
  <div class="screen">
    <p class="sub">${total ? `${total} informe${total===1?'':'s'} guardado${total===1?'':'s'} en este dispositivo, ordenados por tipo.` : 'Todos los informes guardados en este dispositivo, incluidos los generados sin señal.'}</p>
    ${boxes}
  </div>
  <div class="spacer"></div>`;
}
/* Historial: a "PDF listo"/"enviado" card opens the generated PDF directly; a "Borrador"
   card goes back into the wizard to keep editing it. */
async function openReportPdf(id){
  const r = await idbGet('reports', id);
  if (!r) return;
  const cfg = await getConfig();
  let blob;
  try { blob = safeBuildPdf(r, cfg); } catch(e){
    console.error(e);
    toast('No se pudo abrir el PDF: ' + (e && e.message ? e.message : 'error desconocido'), 6000);
    return;
  }
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (!win) window.location.href = url;
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
function bindHistorial(){
  document.querySelectorAll('[data-openreport]').forEach(el => el.addEventListener('click', async () => {
    const id = el.getAttribute('data-openreport');
    const r = await idbGet('reports', id);
    if (r && (r.status === 'listo' || r.status === 'enviado')){ await openReportPdf(id); return; }
    go('wizard', { id, step: 'datos' });
  }));
}

/* ------------------------------------ VER INFORME ------------------------------------ */
async function renderVer(id){
  const r = await idbGet('reports', id);
  if (!r) return `${topbar('Informe')}<div class="screen"><div class="empty-hint">Este informe ya no existe.</div></div>`;
  const t = REPORT_TYPES[r.typeId];
  return `
  ${topbar(t.short, { backTo: 'historial' })}
  <div class="screen">
    <div class="eyebrow">${escapeHtml(t.code)}${t.correlativoEditable && r.header.correlativo ? ' — N° ' + escapeHtml(r.header.correlativo) : ''}</div>
    <div class="h-page" style="font-size:20px;">${escapeHtml(t.name)}</div>
    <div class="kv" style="margin:16px 0;">
      <div><div class="k">Fecha</div><div class="v">${fmtDateDisplay(r.header.fecha)}</div></div>
      <div><div class="k">Hora</div><div class="v">${escapeHtml(r.header.hora)}</div></div>
      <div><div class="k">Turno</div><div class="v">${escapeHtml(r.header.turno)}</div></div>
      <div><div class="k">Grupo</div><div class="v">${escapeHtml(r.header.grupo)}</div></div>
      <div><div class="k">Área</div><div class="v">${escapeHtml(r.header.area)}</div></div>
      <div><div class="k">Sector / PK</div><div class="v">${escapeHtml(r.header.sectorPk||'—')}</div></div>
    </div>
    ${t.id === 'caminata' ? kpiCaminataHtml(r) : ''}
    <div class="rev-block"><h3>Estado</h3><p>${r.status === 'listo' ? 'PDF generado, pendiente de envío.' : r.status === 'enviado' ? 'Enviado.' : 'Borrador en curso.'}</p></div>
    <button class="btn btn-primary" style="margin-top:10px;" data-nav="wizard-edit">Abrir / continuar edición</button>
    <div class="btn-row">
      <button class="btn" id="btnPdfVer">Generar / ver PDF</button>
      <button class="btn" id="btnDupVer">Duplicar</button>
    </div>
    <button class="btn btn-danger" id="btnDelVer" style="margin-top:10px;">Eliminar</button>
  </div>
  <div class="spacer"></div>`;
}
function bindVer(id){
  const editBtn = document.querySelector('[data-nav="wizard-edit"]');
  if (editBtn) editBtn.addEventListener('click', () => go('wizard', { id, step:'datos' }));
  const pdfBtn = document.getElementById('btnPdfVer');
  if (pdfBtn) pdfBtn.addEventListener('click', async () => {
    const r = await idbGet('reports', id);
    await generateAndOfferPdf(r);
  });
  const dupBtn = document.getElementById('btnDupVer');
  if (dupBtn) dupBtn.addEventListener('click', async () => {
    const newId = await duplicateReport(id);
    toast('Informe duplicado — continúa editando');
    go('wizard', { id: newId, step: 'datos' });
  });
  const delBtn = document.getElementById('btnDelVer');
  if (delBtn) delBtn.addEventListener('click', async () => {
    if (await askConfirm('¿Eliminar este informe del dispositivo? Esta acción no se puede deshacer.')){
      await idbDelete('reports', id);
      toast('Informe eliminado');
      go('historial');
    }
  });
}

/* ------------------------------------ CONFIG ------------------------------------ */
/* ------------------------------------ Matriz de Sistemas (Ajustes > Matriz de Sistemas) ------------------------------------
   Editable Sector -> Ubicación/Área/Sistema/SubSistema table backing the Caminata Interna
   Excel Punch export (see buildPunchExcelBlob / findSectorEntry). Lets the person import an
   updated copy of the client's "01 - CONTROL DE AVANCE" + "subsistemas_actualizado" workbooks
   directly from the phone whenever the WBS changes, instead of needing a new build of the
   app — see importSectorMatrixFromFiles for the parsing/cross-reference logic. */
async function renderSectorMatrix(){
  const rows = (await getSectorMatrix()).slice().sort((a,b) => a.sector.localeCompare(b.sector));
  const rowsHtml = rows.map(row => `
    <div class="sm-row" data-smrow="${escapeHtml(row.sector)}">
      <div class="sm-row-head">
        <b>${escapeHtml(row.sector)}</b>
        <button type="button" class="sm-edit" data-smedit="${escapeHtml(row.sector)}">Editar</button>
        <button type="button" class="sm-del" data-smdel="${escapeHtml(row.sector)}">🗑</button>
      </div>
      <div class="sm-row-detail">
        <div><span class="k">Ubic.</span> ${escapeHtml(row.ubicacion || '—')}</div>
        <div><span class="k">Área</span> ${escapeHtml(row.area || '—')}</div>
        <div><span class="k">Sistema</span> ${escapeHtml(row.sistema || '—')}</div>
        <div><span class="k">SubSistema</span> ${escapeHtml(row.subsistema || '—')}</div>
      </div>
    </div>`).join('');

  return `
  ${topbar('Matriz de Sistemas', { backTo: 'config' })}
  <div class="screen">
    <p class="sub">Esta matriz completa Área, Sistema y SubSistema en el Excel Punch de Caminata Interna, según el Sector que escribas en cada informe. Actualízala aquí cuando el cliente entregue una nueva versión del WBS — no hace falta subir nada a GitHub.</p>

    <div class="section-title">Importar desde Excel</div>
    <p class="sub" style="margin-top:-6px;">Sube las dos planillas del cliente juntas — la app hace el cruce sola, igual que la primera vez.</p>
    <div class="field">
      <label>1. Control de Avance (una pestaña por frente)</label>
      <input type="file" id="smFileAvance" accept=".xlsx">
      <div class="hint" id="smAvanceStatus">Sin archivo elegido.</div>
    </div>
    <div class="field">
      <label>2. Subsistemas actualizado (Reporte Listado WBS)</label>
      <input type="file" id="smFileSubsistemas" accept=".xlsx">
      <div class="hint" id="smSubsisStatus">Sin archivo elegido.</div>
    </div>
    <button class="btn btn-primary" id="btnImportSectorMatrix" disabled>Importar y cruzar ambos archivos</button>
    <p class="hint" id="smImportResult"></p>

    <div class="section-title" style="margin-top:22px;">Agregar sector a mano</div>
    <div class="field"><label>Sector (tal como se escribe en el informe)</label><input type="text" id="smNewSector" placeholder="Ej: RAC-A-01"></div>
    <div class="field"><label>Ubicación</label><input type="text" id="smNewUbic" placeholder="Ej: RAC-A-01"></div>
    <div class="field"><label>Área</label><input type="text" id="smNewArea" placeholder="Ej: 224500 [NIVEL DE ACARREO]"></div>
    <div class="field"><label>Sistema</label><input type="text" id="smNewSistema" placeholder="Ej: 224521F-01 [DESARROLLOS HORIZONTALES MB-N52]"></div>
    <div class="field"><label>SubSistema</label><input type="text" id="smNewSubsistema" placeholder="Ej: 224521F-01-07 [RAC-A-01 N52]"></div>
    <button class="btn" id="btnAddSectorRow">+ Agregar sector</button>

    <div class="section-title" style="margin-top:22px;">Sectores en la matriz (${rows.length})</div>
    <input type="text" id="smSearch" placeholder="Buscar sector…" style="margin-bottom:10px;">
    <div id="smRowList">${rowsHtml || '<div class="empty-hint">Sin sectores cargados todavía.</div>'}</div>
  </div>
  <div class="spacer"></div>`;
}

function sectorMatrixRowEditHtml(row){
  return `
  <div class="sm-row-edit">
    <div class="field"><label>Ubicación</label><input type="text" data-smfield="ubicacion" value="${escapeHtml(row.ubicacion||'')}"></div>
    <div class="field"><label>Área</label><input type="text" data-smfield="area" value="${escapeHtml(row.area||'')}"></div>
    <div class="field"><label>Sistema</label><input type="text" data-smfield="sistema" value="${escapeHtml(row.sistema||'')}"></div>
    <div class="field"><label>SubSistema</label><input type="text" data-smfield="subsistema" value="${escapeHtml(row.subsistema||'')}"></div>
    <button type="button" class="btn btn-primary" data-smsave="${escapeHtml(row.sector)}">Guardar</button>
  </div>`;
}

function bindSectorMatrix(){
  const avanceInput = document.getElementById('smFileAvance');
  const subsisInput = document.getElementById('smFileSubsistemas');
  const importBtn = document.getElementById('btnImportSectorMatrix');
  const updateImportBtnState = () => {
    importBtn.disabled = !(avanceInput.files.length && subsisInput.files.length);
  };
  avanceInput.addEventListener('change', () => {
    document.getElementById('smAvanceStatus').textContent = avanceInput.files.length ? avanceInput.files[0].name : 'Sin archivo elegido.';
    updateImportBtnState();
  });
  subsisInput.addEventListener('change', () => {
    document.getElementById('smSubsisStatus').textContent = subsisInput.files.length ? subsisInput.files[0].name : 'Sin archivo elegido.';
    updateImportBtnState();
  });

  importBtn.addEventListener('click', async () => {
    const resultEl = document.getElementById('smImportResult');
    importBtn.disabled = true;
    importBtn.textContent = 'Importando…';
    resultEl.textContent = '';
    try {
      const { rows, resolved, unresolved, total } = await importSectorMatrixFromFiles(avanceInput.files[0], subsisInput.files[0]);
      if (!total){
        resultEl.textContent = 'No se encontraron sectores en los archivos — revisa que sean los correctos (Control de Avance con columnas SISTEMA/SUBSISTEMA/LABOR, y el Reporte Listado WBS de subsistemas).';
        resultEl.style.color = 'var(--warn)';
      } else {
        const db = await openDB();
        await new Promise((resolve, reject) => {
          const tx = db.transaction('sectormatrix', 'readwrite');
          const store = tx.objectStore('sectormatrix');
          rows.forEach(row => store.put(row));
          tx.oncomplete = resolve;
          tx.onerror = () => reject(tx.error);
        });
        invalidateSectorMatrixCache();
        resultEl.textContent = `Listo: ${total} sectores importados (${resolved} con Área/Sistema/SubSistema completos, ${unresolved} solo con el código corto).`;
        resultEl.style.color = 'var(--ok)';
        toast('Matriz de Sistemas actualizada');
        go('sectormatrix');
      }
    } catch(e){
      console.error(e);
      resultEl.textContent = 'No se pudo leer alguno de los archivos — confirma que ambos sean .xlsx exportados directamente desde Excel (no CSV ni una versión re-guardada por otra app).';
      resultEl.style.color = 'var(--danger, #d9534f)';
    }
    importBtn.disabled = false;
    importBtn.textContent = 'Importar y cruzar ambos archivos';
  });

  document.getElementById('btnAddSectorRow').addEventListener('click', async () => {
    const sector = document.getElementById('smNewSector').value.trim().toUpperCase();
    if (!sector){ toast('Escribe el nombre del Sector primero'); return; }
    // New manual entries go at the end of the matrix's own order (highest seq + 1) rather
    // than sorting alphabetically or landing wherever IndexedDB feels like — keeps the
    // Ubicación picker's order stable and predictable as sectors get added by hand.
    const currentRows = await getSectorMatrix();
    const maxSeq = currentRows.reduce((m, row) => Math.max(m, row.seq ?? -1), -1);
    const row = {
      sector,
      ubicacion: document.getElementById('smNewUbic').value.trim() || sector,
      area: document.getElementById('smNewArea').value.trim(),
      sistema: document.getElementById('smNewSistema').value.trim(),
      subsistema: document.getElementById('smNewSubsistema').value.trim(),
      seq: maxSeq + 1,
    };
    const db = await openDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction('sectormatrix', 'readwrite');
      tx.objectStore('sectormatrix').put(row);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    invalidateSectorMatrixCache();
    toast(`Sector "${sector}" agregado`);
    go('sectormatrix');
  });

  document.querySelectorAll('[data-smedit]').forEach(btn => btn.addEventListener('click', async () => {
    const sector = btn.getAttribute('data-smedit');
    const rowEl = document.querySelector(`[data-smrow="${CSS.escape(sector)}"]`);
    if (rowEl.querySelector('.sm-row-edit')){ rowEl.querySelector('.sm-row-edit').remove(); return; } // toggle closed
    const rows = await getSectorMatrix();
    const row = rows.find(r => r.sector === sector);
    if (!row) return;
    rowEl.insertAdjacentHTML('beforeend', sectorMatrixRowEditHtml(row));
    rowEl.querySelector('[data-smsave]').addEventListener('click', async () => {
      const updated = { sector, seq: row.seq }; // preserve the row's position in the matrix's own order
      rowEl.querySelectorAll('[data-smfield]').forEach(inp => { updated[inp.getAttribute('data-smfield')] = inp.value.trim(); });
      const db = await openDB();
      await new Promise((resolve, reject) => {
        const tx = db.transaction('sectormatrix', 'readwrite');
        tx.objectStore('sectormatrix').put(updated);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error);
      });
      invalidateSectorMatrixCache();
      toast('Sector actualizado');
      go('sectormatrix');
    });
  }));

  document.querySelectorAll('[data-smdel]').forEach(btn => btn.addEventListener('click', async () => {
    const sector = btn.getAttribute('data-smdel');
    if (!(await askConfirm(`¿Quitar "${sector}" de la matriz?\n\nLos informes que ya tenían ese sector no se ven afectados — esto solo evita que se autocompleten Área/Sistema/SubSistema para él de ahora en adelante.`))) return;
    const db = await openDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction('sectormatrix', 'readwrite');
      tx.objectStore('sectormatrix').delete(sector);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    invalidateSectorMatrixCache();
    toast('Sector eliminado');
    go('sectormatrix');
  }));

  const searchInput = document.getElementById('smSearch');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toUpperCase();
    document.querySelectorAll('[data-smrow]').forEach(el => {
      const sector = el.getAttribute('data-smrow').toUpperCase();
      el.style.display = sector.includes(q) ? '' : 'none';
    });
  });
}

async function renderConfig(){
  const c = await getConfig();
  return `
  ${topbar('Configuración')}
  <div class="screen">
    <p class="sub">Estos datos se usan para completar el encabezado y pie de página de cada PDF, y para el envío automático cuando el equipo tenga señal.</p>

    <div class="field"><label>Empresa contratista</label><input type="text" id="cfgEmpresa" value="${escapeHtml(c.empresaContratista)}"></div>
    <div class="field"><label>N° de contrato</label><input type="text" id="cfgContrato" value="${escapeHtml(c.contrato)}"></div>
    <div class="field"><label>Obra / proyecto</label><textarea id="cfgObra">${escapeHtml(c.obra)}</textarea></div>
    <div class="field"><label>Generado por (tu nombre)</label><input type="text" id="cfgGenPor" value="${escapeHtml(c.generadoPor)}"></div>

    <div class="section-title">Envío automático al recuperar señal</div>
    <div class="field">
      <label>Correo(s) de destino</label>
      <input type="text" id="cfgCorreo" data-no-upper placeholder="calidad@empresa.cl, jefe.terreno@empresa.cl" value="${escapeHtml(c.destinoCorreo)}">
      <div class="hint">Puedes escribir varios correos separados por coma. <b>Ojo:</b> escribirlos aquí no envía nada por sí solo — son solo datos que se incluyen en cada envío automático, y ese envío automático solo ocurre si configuras un webhook abajo. Sin webhook, el único envío real es el manual con "Compartir / enviar ahora".</div>
    </div>
    <div class="field">
      <label>Webhook / endpoint (opcional)</label>
      <input type="text" id="cfgWebhook" data-no-upper placeholder="https://tu-flujo.cl/recibir-informe" value="${escapeHtml(c.webhookUrl)}">
      <div class="hint">Si configuras una URL aquí, el PDF se sube automáticamente en segundo plano apenas el teléfono detecte señal — sin tocar nada.</div>
    </div>
    <div class="field">
      <label>Carpeta base en OneDrive (opcional)</label>
      <input type="text" id="cfgOneDrive" placeholder="Informes GOMS Züblin" value="${escapeHtml(c.oneDriveFolder||'')}">
      <div class="hint">
        Para guardar los PDF directo en tu OneDrive, ordenados por tipo de informe, la forma más simple sin necesitar un servidor propio es un flujo de <b>Power Automate</b>:
        crea un flujo con disparador "Cuando se recibe una solicitud HTTP", y una acción "Crear archivo" apuntando a tu OneDrive (usando el nombre de carpeta que escribas
        arriba + el tipo de informe, que la app ya envía en cada solicitud). Copia la URL que te entrega ese flujo y pégala en "Webhook / endpoint" arriba.
      </div>
    </div>

    <button class="btn btn-primary" id="btnSaveCfg" style="margin-top:14px;">Guardar configuración</button>
    <button class="btn" id="btnGoSectorMatrix" style="margin-top:10px;">Matriz de Sistemas / Subsistemas (Caminata Interna)</button>
    <p class="cfg-note">Nota: por seguridad, cada navegador aísla su almacenamiento. Si cambias de teléfono o borras datos del navegador, deberás volver a instalar la app y reconfigurar esta pantalla.</p>
  </div>
  <div class="spacer"></div>`;
}
function bindConfig(){
  document.getElementById('btnSaveCfg').addEventListener('click', async () => {
    const cfg = {
      id: 'main',
      empresaContratista: document.getElementById('cfgEmpresa').value.trim(),
      contrato: document.getElementById('cfgContrato').value.trim(),
      obra: document.getElementById('cfgObra').value.trim(),
      generadoPor: document.getElementById('cfgGenPor').value.trim(),
      destinoCorreo: document.getElementById('cfgCorreo').value.trim(),
      webhookUrl: document.getElementById('cfgWebhook').value.trim(),
      oneDriveFolder: document.getElementById('cfgOneDrive').value.trim()
    };
    await saveConfig(cfg);
    toast('Configuración guardada');
    go('home');
  });
  document.getElementById('btnGoSectorMatrix').addEventListener('click', () => go('sectormatrix'));
}

/* ------------------------------------ WIZARD ------------------------------------ */
async function renderWizard(id, step){
  const r = await idbGet('reports', id);
  if (!r) return `${topbar('Informe')}<div class="screen"><div class="empty-hint">Informe no encontrado.</div></div>`;
  const t = REPORT_TYPES[r.typeId];
  const steps = wizStepsFor(t);
  if (!steps.includes(step)) step = step === 'firmas' ? 'revision' : steps[0];
  const stepIdx = steps.indexOf(step);
  const progress = steps.map((s,i) => `<div class="seg-p ${i<=stepIdx?'on':''}"></div>`).join('');
  const isTurno = t.kind === 'turno';
  const isTurnoGeneral = t.kind === 'turnogeneral';
  const isAnyTurno = isTurno || isTurnoGeneral;
  // Sector/PK/Objetivo/Antecedentes/Conclusiones all use the growable-catalog field —
  // fetch that type's catalog once for whichever step needs it.
  const needsFieldCatalog = !isAnyTurno && ['datos','resumen','conclusiones'].includes(step);
  const catalog = needsFieldCatalog ? await getCatalog(t.id) : null;
  // Inspector 1/2 names use a catalog too, shared globally across every report type.
  const personalCatalog = (step === 'personal') ? await getCatalog('_personal') : null;

  let body = '';
  if (step === 'datos') body = await stepDatos(r, t, catalog);
  else if (step === 'personal') body = stepPersonal(r, t, personalCatalog);
  else if (step === 'resumen') body = stepResumen(r, t, catalog);
  else if (step === 'desarrollo') body = isTurnoGeneral ? await stepDesarrolloTurnoGeneral(r, t) : isTurno ? await stepDesarrolloTurno(r, t) : await stepDesarrollo(r, t);
  else if (step === 'conclusiones') body = stepConclusiones(r, catalog);
  else if (step === 'firmas'){
    // Cambio de Turno keeps "A.- Personal en turno" (personalNoche/personalDia — a variable-
    // length list, since staffing varies) separate from r.personal (always exactly 2 slots,
    // used only for the signature step, the same as every other report type). That split is
    // intentional — see emptyReport()'s own comment — but it means a name typed into
    // "Personal en turno" doesn't show up here on its own, and the person reasonably expects
    // it to: they already wrote the name once, in the step literally called "Personal en
    // turno", and had no way to know Firmas keeps its own separate copy. Bridge the two here,
    // once, right before rendering: copy the active shift's first two names into r.personal
    // wherever r.personal's own name is still blank — never overwriting a name someone
    // already typed directly into a signature slot, and never touching an already-signed
    // slot's data. This runs every time Firmas is opened, so adding a name in "Personal en
    // turno" later and coming back to Firmas picks it up too.
    if (isTurno){
      const activeList = r[r.header.turno === 'NOCHE' ? 'personalNoche' : 'personalDia'] || [];
      let changed = false;
      r.personal.forEach((p, i) => {
        if (!p.firma && !(p.nombre || '').trim() && activeList[i] && (activeList[i].nombre || '').trim()){
          p.nombre = activeList[i].nombre;
          if (!p.cargo && activeList[i].cargo) p.cargo = activeList[i].cargo;
          changed = true;
        }
      });
      if (changed){ r.updatedAt = Date.now(); await idbPut('reports', r); }
    }
    if (isTurnoGeneral){
      // Same bridge as Diario above, but General has no single "active" shift (see
      // personalTurnoListHtml) — both personalNoche and personalDia are real lists here. Pull
      // from whichever combined list of names exists, Noche first then Día, filling only the
      // 2 fixed signature slots in the order those names appear — same never-overwrite rule
      // as Diario (a blank + unsigned slot only).
      const combined = [...(r.personalNoche || []), ...(r.personalDia || [])].filter(p => (p.nombre || '').trim());
      let changed = false, ci = 0;
      r.personal.forEach((p) => {
        if (!p.firma && !(p.nombre || '').trim() && combined[ci]){
          p.nombre = combined[ci].nombre;
          if (!p.cargo && combined[ci].cargo) p.cargo = combined[ci].cargo;
          changed = true;
        }
        ci++;
      });
      if (changed){ r.updatedAt = Date.now(); await idbPut('reports', r); }
    }
    body = stepFirmas(r);
  }
  else if (step === 'revision') body = isTurnoGeneral ? stepRevisionTurnoGeneral(r, t) : isTurno ? stepRevisionTurno(r, t) : stepRevision(r, t);

  const isFirst = stepIdx === 0;
  const isLast = stepIdx === steps.length - 1;

  return `
  ${topbar(t.short, { backTo: isFirst ? 'home' : null })}
  <div class="screen">
    <div class="progress">${progress}</div>
    <div class="eyebrow">Paso ${stepIdx+1} de ${steps.length}</div>
    <div class="h-page" style="font-size:22px;">${WIZ_TITLES[step]}</div>
    <div id="stepBody">${body}</div>
  </div>
  <div class="fab-bar">
    ${!isFirst ? `<button class="btn" id="btnPrev">‹ Atrás</button>` : ''}
    ${!isLast ? `<button class="btn btn-primary" id="btnNext">Continuar ›</button>` : ''}
  </div>
  `;
}

/* Generic "single value with a growable catalog" field: a normal input/textarea plus a
   "frecuentes" dropdown and a "＋" that saves whatever is CURRENTLY typed into that field
   into its catalog (idb catalog store, keyed by report typeId + catKey), so it shows up as
   an option next time. Used for Sector, PK, Objetivo, Antecedentes and Conclusiones — any
   single-value field where the same phrase tends to repeat across future informes. */
function catFieldHtml(inputId, catKey, value, catalogOptions, opts={}){
  const val = escapeHtml((value || '').toUpperCase());
  const scope = opts.scope || 'type'; // 'type' -> saved per report type; 'global' -> shared across every informe (e.g. personal)
  const input = opts.textarea
    ? `<textarea id="${inputId}" placeholder="${escapeHtml(opts.ph||'')}">${val}</textarea>`
    : `<input type="text" id="${inputId}" value="${val}" placeholder="${escapeHtml(opts.ph||'')}">`;
  const options = (catalogOptions||[]).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
  return `
  <div class="field">
    ${opts.label ? `<label>${escapeHtml(opts.label)}</label>` : ''}
    ${input}
    <div class="chip-add-row">
      <select data-catfieldselect="${inputId}:${catKey}:${scope}">
        <option value="">＋ Elegir frecuente…</option>
        ${options}
      </select>
    </div>
    <div class="chip-add-actions">
      <button type="button" class="btn-plus" data-catfieldnew="${inputId}:${catKey}:${scope}" title="Guardar el valor actual en el listado para futuros informes">＋ Agregar al listado</button>
      <button type="button" class="btn-plus btn-minus" data-catfielddel="${inputId}:${catKey}:${scope}" title="Borrar del listado una frase">🗑 Quitar del listado</button>
    </div>
  </div>`;
}

/* Dropdown of every Ubicación in the sector matrix (see getSectorMatrix), shown just above
   the free-text Sector field in Caminata Interna's "Datos" step. Picking an option copies
   its exact text straight into the Sector field below — so the Sector always matches the
   matrix byte-for-byte instead of relying on typed-by-hand spelling, which is what makes
   Área/Sistema/SubSistema (and now Ubic. itself) resolve reliably in the Excel Punch export.
   Free typing in the Sector field below still works for a sector that isn't in the matrix
   yet — this is a shortcut, not a restriction. */
async function sectorMatrixPickerHtml(){
  // No re-sorting here — getSectorMatrix() already returns rows in the same order they
  // appear in the client's own Control de Avance workbook/PDF (see its "seq" comment), and
  // the picker should match that order exactly so it's easy to find a sector the same way
  // someone would flipping through the source document.
  const rows = await getSectorMatrix();
  if (!rows.length) return '';
  const options = rows.map(row => `<option value="${escapeHtml(row.sector)}">${escapeHtml(row.ubicacion || row.sector)}</option>`).join('');
  return `
  <div class="field">
    <label>Ubicación (matriz) — opcional, autocompleta el Sector</label>
    <select id="fSectorPicker">
      <option value="">＋ Elegir de la matriz…</option>
      ${options}
    </select>
    <div class="hint">Elige aquí para llenar el Sector exacto tal como está en la matriz del cliente, o sigue escribiéndolo a mano abajo si es un sector nuevo.</div>
  </div>`;
}

async function stepDatos(r, t, catalog){
  const h = r.header;
  const isTurno = t && t.kind === 'turno';
  const isTurnoGeneral = t && t.kind === 'turnogeneral';
  const isAnyTurno = isTurno || isTurnoGeneral;
  // Grupo (G1-G4) applies to every report type, Cambio de Turno included — the field already
  // lived in header.grupo for every type (see emptyReport), it just wasn't shown on this
  // screen for Cambio de Turno before. Built once here so both branches below render the
  // exact same control instead of keeping two copies in sync by hand.
  const grupoField = `
  <div class="field"><label>Grupo</label>
    <select id="fGrupo">
      ${['G1','G2','G3','G4'].map(g=>`<option value="${g}" ${h.grupo===g?'selected':''}>${g}</option>`).join('')}
    </select>
  </div>`;
  const periodoField = `
  <div class="field">
    <label>Periodo</label>
    <div class="row2 periodo-row">
      <input type="date" id="fPeriodoInicio" value="${h.periodoInicio||''}">
      <span class="periodo-al">al</span>
      <input type="date" id="fPeriodoFin" value="${h.periodoFin||''}">
    </div>
    <div class="hint">Se muestra como "PERIODO: ${h.periodoInicio ? fmtDateDisplay(h.periodoInicio) : '—'} al ${h.periodoFin ? fmtDateDisplay(h.periodoFin) : '—'}" en el PDF.</div>
  </div>`;
  return `
  ${t && t.correlativoEditable ? `
  <div class="field">
    <label>N° Correlativo del informe</label>
    <input type="text" id="fCorrelativo" value="${escapeHtml(h.correlativo||'')}" placeholder="Ej: INF-001">
    <div class="hint">Se muestra junto a CÓDIGO: ${escapeHtml(t.code || CODIGO_INSTITUCIONAL)} en la franja roja del PDF.</div>
  </div>` : ''}
  ${isAnyTurno ? periodoField : ''}
  ${isTurnoGeneral ? `
  <div class="field">
    <label>Cobertura de datos</label>
    <input type="text" id="fCobertura" value="${escapeHtml(h.cobertura||'')}" placeholder="Ej: Turno Noche 14-09 al 23-09-2026 | Turno Día 15-09 al 24-09-2026">
    <div class="hint">Se imprime tal cual en el PDF, en la línea "COBERTURA DE DATOS".</div>
  </div>` : ''}
  <div class="row2">
    <div class="field"><label>${isTurnoGeneral ? 'Fecha del informe' : isTurno ? 'Fecha (cobertura de datos)' : 'Fecha'}</label><input type="date" id="fFecha" value="${h.fecha}"></div>
    <div class="field"><label>Hora</label><input type="time" id="fHora" value="${h.hora}"></div>
  </div>
  ${isTurnoGeneral ? '' : `
  <div class="field">
    <label>Turno</label>
    <div class="seg">
      <button type="button" data-turno="DIA" class="${h.turno==='DIA'?'active':''}">Día</button>
      <button type="button" data-turno="NOCHE" class="${h.turno==='NOCHE'?'active':''}">Noche</button>
    </div>
  </div>`}
  ${isTurnoGeneral ? '' : isTurno ? grupoField : `
  <div class="row2">
    ${grupoField}
    <div class="field"><label>Área</label><input type="text" id="fArea" value="${escapeHtml(h.area)}"></div>
  </div>
  <div class="field"><label>Proceso</label><input type="text" id="fProceso" value="${escapeHtml(h.proceso)}" placeholder="Ej: Instalación de malla / Adose de malla"></div>
  ${t.id === 'caminata' ? await sectorMatrixPickerHtml() : ''}
  ${catFieldHtml('fSector', 'sector', h.sector, catalog?.sector, { label:'Sector', ph:'Ej: GA-03 W' })}
  ${catFieldHtml('fPk', 'pk', h.pk, catalog?.pk, { label:'PK', ph:'Ej: Pk 3,6' })}
  ${t.id === 'caminata' ? kpiCaminataHtml(r) : ''}
  `}
  `;
}

/* Cambio de Turno's "A.- PERSONAL EN TURNO" splits into Turno Noche / Turno Día. For Cambio
   de Turno DIARIO (a single day/turn), only the list matching the DÍA/NOCHE toggle picked in
   "Datos" (r.header.turno) is meant to be filled in — the other prints "Sin registro" in the
   PDF automatically (see buildTurnoPdfBlob) rather than needing a separate "no aplica"
   checkbox. Cambio de Turno GENERAL covers a whole period during which both shifts really
   were staffed on different days, so alwaysActive=true keeps BOTH lists editable there,
   regardless of r.header.turno (which General doesn't even show a toggle for — see
   stepDatos). */
function personalTurnoListHtml(r, turnoKey, label, personalCatalog, alwaysActive){
  const list = r[turnoKey] || [];
  const isActive = alwaysActive || ((turnoKey === 'personalNoche') === (r.header.turno === 'NOCHE'));
  const rows = list.map((p, i) => `
    <div class="personalturno-row" data-personalturnorow="${turnoKey}:${i}">
      ${catFieldHtml(`pt_${turnoKey}_${i}_nombre`, 'nombres', p.nombre, personalCatalog?.nombres, { label:`Inspector ${i+1} — Nombre`, ph:'Nombre y apellido', scope:'global' })}
      <div class="field"><label>Cargo</label><input type="text" data-personalturno="${turnoKey}:${i}:cargo" value="${escapeHtml(p.cargo)}"></div>
      <button type="button" class="personalturno-del" data-personalturnodel="${turnoKey}:${i}">🗑 Quitar este inspector</button>
    </div>`).join('');
  return `
  <div class="personalturno-block ${isActive ? '' : 'personalturno-inactive'}">
    <div class="section-title" style="margin-top:18px;">${escapeHtml(label)}</div>
    ${isActive ? `
      ${rows || '<div class="empty-hint">Sin inspectores agregados todavía.</div>'}
      <button type="button" class="btn" data-personalturnoadd="${turnoKey}">+ Agregar inspector</button>
    ` : `<div class="empty-hint">Sin registro — el turno activo (Datos) es ${r.header.turno === 'NOCHE' ? 'Noche' : 'Día'}, así que este turno se imprime como "Sin registro".</div>`}
  </div>`;
}
function stepPersonal(r, t, personalCatalog){
  if (t && t.kind === 'turno'){
    return personalTurnoListHtml(r, 'personalNoche', 'Turno Noche', personalCatalog)
         + personalTurnoListHtml(r, 'personalDia', 'Turno Día', personalCatalog);
  }
  if (t && t.kind === 'turnogeneral'){
    // Both shifts are always shown editable here — see personalTurnoListHtml's own comment
    // for why General never has an "inactive" shift the way Diario does.
    return personalTurnoListHtml(r, 'personalNoche', 'Turno Noche', personalCatalog, true)
         + personalTurnoListHtml(r, 'personalDia', 'Turno Día', personalCatalog, true);
  }
  return r.personal.map((p,i) => `
    ${catFieldHtml(`pNom${i}`, 'nombres', p.nombre, personalCatalog?.nombres, { label:`Inspector ${i+1} — Nombre`, ph:'Nombre y apellido', scope:'global' })}
    <div class="field" style="margin-bottom:24px;"><label>Cargo</label><input type="text" id="pCargo${i}" value="${escapeHtml(p.cargo)}"></div>
  `).join('');
}

/* Fortificación's "2. Antecedentes" is a fixed, vertically-numbered checklist (not a free
   text field) — each row toggles on/off, and "＋" appends a new point that's saved to the
   type's catalog (antecedentesItems) so it's offered on every future informe too. */
function antecedentesChecklistHtml(r, catalog){
  const items = (catalog?.antecedentesItems) || [];
  const sel = r.antecedentesSel || [];
  const rows = items.map((txt, i) => `
    <div class="antchk-row ${sel.includes(txt) ? 'on' : ''}" data-antchk="${i}">
      <span class="antchk-num">${i+1}.-</span>
      <span class="antchk-txt">${escapeHtml(txt)}</span>
      <span class="antchk-mark">✓</span>
      <button type="button" class="antchk-del" data-antchkdel="${i}" title="Borrar este punto del listado">🗑</button>
    </div>`).join('');
  return `
  <div class="field">
    <label>2. Antecedentes</label>
    <div class="sub" style="margin:-4px 0 10px;">Verificación de materiales disponibles:</div>
    <div class="antchk-list">${rows}</div>
    <div class="chip-add-row">
      <input type="text" id="fAntNuevo" placeholder="Agregar otro punto de verificación…">
      <button type="button" class="btn-plus" id="btnAntAdd" title="Agregar y guardar como nuevo punto para futuros informes">＋</button>
    </div>
  </div>`;
}

function stepResumen(r, t, catalog){
  const objetivoHtml = catFieldHtml('fObjetivo', 'objetivo', r.objetivo, catalog?.objetivo, { textarea:true, ph: t.objetivoPh, label:'1. Objetivo' });
  const antecedentesHtml = t.antecedentesChecklist
    ? antecedentesChecklistHtml(r, catalog)
    : catFieldHtml('fAntecedentes', 'antecedentes', r.antecedentes, catalog?.antecedentes, { textarea:true, ph: t.antecedentesPh, label:'2. Antecedentes' });
  return objetivoHtml + antecedentesHtml;
}

async function stepDesarrollo(r, t){
  const catalog = await getCatalog(t.id);
  /* Cumulative counter (positiva/desviacion/correctiva) so the chip numbers keep adding up
     across every registro in the order they appear — same numbering the PDF ends up using. */
  const numCounter = { positiva:0, desviacion:0, correctiva:0 };
  const cards = r.labores.map((l, idx) => laborCardHtml(l, idx, t, catalog, numCounter)).join('');
  return `
  <p class="sub mb-0" style="margin-bottom:14px;">${t.laborKind === 'paradas'
    ? `Agrega un bloque por cada ${t.laborLabel.toLowerCase()} inspeccionado. Dentro de cada bloque, cada línea "Parada/Perno N°" que completes se agrega automáticamente al listado de Desviación / Hallazgo — no hace falta guardarla aparte.`
    : `Agrega un bloque por cada ${t.laborLabel.toLowerCase()} inspeccionado. Elige observaciones frecuentes del listado o toca "＋" para agregar una nueva que quede guardada para la próxima vez.`}</p>
  <div id="laborList">${cards}</div>
  <button class="btn" id="btnAddLabor">+ Agregar ${t.laborLabel.toLowerCase()}</button>
  <input type="file" id="photoInput" accept="image/*" capture="environment" multiple style="display:none;">
  <input type="file" id="photoInputGallery" accept="image/*" multiple style="display:none;">
  `;
}

/* computedItems (optional): for laborKind:'paradas' report types, the "desviación" pane is
   driven live by l.paradas instead of manual chip-picking — computedItems are those composed
   lines, rendered as read-only numbered items (no × to remove individually; delete the whole
   parada row above instead) and the catalog/custom-text controls are hidden for that pane. */
function condPaneHtml(l, idx, cat, catalog, activeCat, counter, computedItems, t){
  if (computedItems){
    const items = computedItems.map((c, ci) => {
      const n = ++counter[cat];
      return `<span class="chip chip-${cat}"><b class="chip-num">${n}.</b> ${escapeHtml(c)}</span>`;
    }).join('');
    return `
    <div class="cond-body" data-condpane="${idx}:${cat}" style="display:${cat===activeCat?'block':'none'}">
      <div class="chip-list">${items || '<span class="chip-empty">Agrega una línea abajo (Parada/Perno N°) — se listará aquí automáticamente</span>'}</div>
    </div>`;
  }
  const chips = (l.cats[cat].sel || []).map((c, ci) => {
    const n = ++counter[cat];
    return `<span class="chip chip-${cat}"><b class="chip-num">${n}.</b> ${escapeHtml(c)}<button type="button" data-rmchip="${idx}:${cat}:${ci}">×</button></span>`;
  }).join('');
  const options = (catalog[cat] || []).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
  // Torque only: the "＋" button below (and the dedicated N° de Plano field replacing the
  // free-text "Otra observación" textarea) complete whatever selected observation already
  // ends in "...Plano" with the typed N° — see the data-newcatalog / data-torqueplanofield
  // handlers. The dropdown ABOVE this still lists whole catalog phrases (e.g. "Torque cumple
  // valor especificado en plano"), same as every other report type, so its own placeholder
  // stays the plain generic wording — it was wrongly saying "Elegir N° de Plano" before,
  // which didn't match what picking an option there actually does (choosing a full phrase,
  // not a bare plano number).
  const catalogLabel = 'Elegir observación frecuente';
  const isTorquePlano = t && t.catalogCta === 'N° de Plano';
  return `
  <div class="cond-body" data-condpane="${idx}:${cat}" style="display:${cat===activeCat?'block':'none'}">
    <div class="chip-list">${chips || '<span class="chip-empty">Sin observaciones seleccionadas</span>'}</div>
    <div class="chip-add-row">
      <select data-addchip="${idx}:${cat}">
        <option value="">＋ ${escapeHtml(catalogLabel)}…</option>
        ${options}
      </select>
    </div>
    <div class="chip-add-actions">
      <button type="button" class="btn-plus" data-newcatalog="${idx}:${cat}" title="${isTorquePlano ? 'Completa la observación que termina en \'Plano\' con el N° correspondiente' : 'Agregar nueva observación al listado'}">＋ Agregar al listado</button>
      <button type="button" class="btn-plus btn-minus" data-delcatalog="${idx}:${cat}" title="Borrar del listado una observación">🗑 Quitar del listado</button>
    </div>
    ${isTorquePlano
      ? `<input type="text" data-torqueplanofield="${idx}:${cat}" placeholder="N° de Plano — se agrega al final de la observación que termina en \u201cPlano\u201d…" value="">`
      : `<textarea data-laborfield="${idx}:${cat}:custom" placeholder="Otra observación (texto libre)…">${escapeHtml(l.cats[cat].custom || '')}</textarea>`}
  </div>`;
}

/* Caminata Interna: one row of the structured "PARADA N° 22: Cortado." builder. numLabel
   toggles Parada/Perno, num is free-typed, tipo is the defect dropdown, and ubic (only shown
   when tipo === SHOTCRETE SOPLADO) is the second "ubicación" dropdown. The composed line is
   derived live (see paradasTexts) — there is no separate "save" step, only 🗑 to remove the
   whole row; changing any field just re-renders the preview and updates 3.1 immediately. */
/* One "N°" slot inside a parada row: a label dropdown (PARADA N° / PERNO N°, growable via
   ＋ and trimmable via 🗑 like every other catalog dropdown in the app) plus its number
   field, laid out on one line. slotKey is 'slot1' or 'slot2' and maps to slot1Label/slot1Num
   or slot2Label/slot2Num on the parada object. */
function paradaSlotControlsHtml(idx, pi, p, slotKey, catalog){
  const labelKey = `${slotKey}Label`, numKey = `${slotKey}Num`;
  const currentLabel = (p[labelKey] || '').toUpperCase();
  const opts = (catalog.labelSlot || PARADA_LABEL_OPTS).map(o => `<option value="${escapeHtml(o)}" ${currentLabel===o?'selected':''}>${escapeHtml(o)}</option>`).join('');
  return `
      <select data-paradafield="${idx}:${pi}:${labelKey}" class="parada-numlabel">
        ${opts}
      </select>
      <input type="text" inputmode="numeric" data-paradafield="${idx}:${pi}:${numKey}" value="${escapeHtml(p[numKey])}" placeholder="—" class="parada-num">`;
}
function paradaSlotHtml(idx, pi, p, slotKey, catalog){
  return `
    <div class="parada-slot">${paradaSlotControlsHtml(idx, pi, p, slotKey, catalog)}
    </div>`;
}

function paradaRowHtml(l, idx, p, pi, catalog){
  p = normalizeParada(p);
  const pTipo = (p.tipo || '').toUpperCase();
  const pUbic = (p.ubic || '').toUpperCase();
  const tipoOpts = (catalog.tipo || PARADA_TIPO_OPTS).map(o => `<option value="${escapeHtml(o)}" ${pTipo===o?'selected':''}>${escapeHtml(o)}</option>`).join('');
  const ubicOpts = (catalog.ubicacionShotcrete || PARADA_UBIC_OPTS).map(o => `<option value="${escapeHtml(o)}" ${pUbic===o?'selected':''}>${escapeHtml(o)}</option>`).join('');
  const preview = composeParada(p);
  // Extra Parada/Perno entries beyond slot1/slot2, for the (occasional) case where the same
  // parada has three, four, or more pernos sharing the same defect — "PARADA N°3, PERNO N°1,
  // PERNO N°3, PERNO N°5 CORTADOS" instead of writing several separate lines for the same
  // parada. Each one starts hidden behind "+ Agregar otro Perno N°"; the button stays
  // available after adding one so another can be added right after it, with no fixed limit.
  const extras = p.extras || [];
  const extrasHtml = extras.map((ex, ei) => `
    <div class="parada-slot">
      <select data-paradaextrafield="${idx}:${pi}:${ei}:label" class="parada-numlabel">
        ${PARADA_LABEL_OPTS.map(o => `<option value="${escapeHtml(o)}" ${(ex.label||'').toUpperCase()===o?'selected':''}>${escapeHtml(o)}</option>`).join('')}
      </select>
      <input type="text" inputmode="numeric" data-paradaextrafield="${idx}:${pi}:${ei}:num" value="${escapeHtml(ex.num||'')}" placeholder="—" class="parada-num">
      <button type="button" class="btn-plus btn-minus" data-paradaextradel="${idx}:${pi}:${ei}" title="Quitar este Perno N°">🗑</button>
    </div>`).join('');
  return `
  <div class="parada-row" data-parada="${idx}:${pi}">
    <div class="parada-row-inputs">
      ${paradaSlotHtml(idx, pi, p, 'slot1', catalog)}
      ${paradaSlotHtml(idx, pi, p, 'slot2', catalog)}
      ${extrasHtml}
      <button type="button" class="parada-add-slot3" data-paradaextraadd="${idx}:${pi}">+ Agregar otro Perno N° (misma parada)</button>
      <div class="parada-catrow">
        <select data-paradafield="${idx}:${pi}:tipo" class="parada-tipo">
          <option value="">Elegir tipo…</option>
          ${tipoOpts}
        </select>
        <button type="button" class="btn-plus" data-paradacatnew="${idx}:${pi}:tipo" title="Guardar un nuevo tipo de desviación en el listado">＋</button>
        <button type="button" class="btn-plus btn-minus" data-paradacatdel="${idx}:${pi}:tipo" title="Borrar del listado el tipo elegido arriba (no borra esta línea)">🗑</button>
      </div>
      ${pTipo === 'SHOTCRETE SOPLADO' ? `
      <div class="parada-catrow">
        <select data-paradafield="${idx}:${pi}:ubic" class="parada-ubic">
          <option value="">Ubicación…</option>
          ${ubicOpts}
        </select>
        <button type="button" class="btn-plus" data-paradacatnew="${idx}:${pi}:ubic" title="Guardar una nueva ubicación en el listado">＋</button>
        <button type="button" class="btn-plus btn-minus" data-paradacatdel="${idx}:${pi}:ubic" title="Borrar del listado la ubicación elegida arriba (no borra esta línea)">🗑</button>
      </div>` : ''}
    </div>
    <button type="button" class="parada-row-del" data-paradadel="${idx}:${pi}">🗑 Quitar esta línea completa</button>
    ${preview
      ? `<div class="parada-preview parada-preview-ok">✓ Se agregará a Desviación / Hallazgo: “${escapeHtml(preview)}”</div>`
      : `<div class="parada-preview parada-preview-pending">Completa al menos un N° y el tipo para que se agregue automáticamente.</div>`}
  </div>`;
}

function laborCardHtml(l, idx, t, catalog, numCounter){
  const isParadas = t.laborKind === 'paradas';
  const devTexts = isParadas ? paradasTexts(l) : null;
  const numOptions = isParadas ? devTexts.map((_,i) => i+1) : [];
  const fotos = l.fotos.map((f, fi) => {
    const url = fotoUrl(f), cat = fotoCat(f), num = fotoNum(f);
    const numSelect = isParadas ? `
      <select class="photo-num" data-photonum="${idx}:${fi}" title="¿A qué desviación numerada corresponde esta foto?">
        <option value="">N° —</option>
        ${numOptions.map(n => `<option value="${n}" ${num===n?'selected':''}>N° ${n}</option>`).join('')}
      </select>` : '';
    const thumb = `
    <div class="photo-thumb">
      <img src="${url}"><button class="del" data-delphoto="${idx}:${fi}">×</button>
      ${numSelect}
      <select class="photo-cat" data-photocat="${idx}:${fi}" title="¿A qué corresponde esta foto?">
        ${CAT_KEYS.map(k => `<option value="${k}" ${cat===k?'selected':''}>${CAT_LABELS[k]}</option>`).join('')}
      </select>
    </div>`;
    // For Caminata Interna, wrap the thumbnail with the FULL text of the assigned hallazgo
    // printed underneath — no truncation, no need to remember what a number means — so the
    // description is always visible right below its photo.
    if (isParadas){
      const desc = num ? (devTexts[num-1] || '') : '';
      return `
      <div class="photo-card">
        ${thumb}
        <div class="photo-desc ${desc ? '' : 'photo-desc-empty'}">${desc ? `<b>N° ${num}:</b> ${escapeHtml(desc)}` : 'Sin N° asignado — elige arriba a qué desviación corresponde'}</div>
      </div>`;
    }
    // Every other report type: same idea as Caminata Interna's numbered hallazgo, but
    // pointed at whichever category the photo is CURRENTLY tagged with (Positiva/Desviación/
    // Correctiva) instead of a fixed numbered list — since these categories are free-text
    // chips, not numbered paradas. Picking one of the category's already-written
    // observations from the dropdown copies its text into the caption; the text field below
    // stays freely editable either way, for a photo that doesn't match any single
    // observation, or needs its own specific note.
    const catObs = joinCat(l.cats[cat]);
    const caption = fotoCaption(f);
    const obsSelect = catObs.length ? `
      <select class="photo-obs-select" data-photoobs="${idx}:${fi}">
        <option value="">＋ Elegir observación de "${escapeHtml(CAT_LABELS[cat])}"…</option>
        ${catObs.map(o => `<option value="${escapeHtml(o)}" ${caption===o?'selected':''}>${escapeHtml(o)}</option>`).join('')}
      </select>` : '';
    return `
    <div class="photo-card">
      ${thumb}
      ${obsSelect}
      <input type="text" class="photo-caption" data-photocaption="${idx}:${fi}" value="${escapeHtml(caption)}" placeholder="Leyenda de esta foto (opcional)…">
    </div>`;
  }).join('');
  const activeCat = ACTIVE_TAB[idx] || 'positiva';
  const tabs = CAT_KEYS.map(cat => `<button type="button" data-condtab="${idx}:${cat}" class="${cat===activeCat?'active':''}" data-k="${cat}">${CAT_LABELS[cat]}</button>`).join('');
  const panes = CAT_KEYS.map(cat => condPaneHtml(l, idx, cat, catalog, activeCat, numCounter, (isParadas && cat==='desviacion') ? devTexts : null, t)).join('');
  const paradasBlock = isParadas ? `
    <label class="section-title" style="margin:10px 0 6px;">Desviación / Hallazgo — se agrega automáticamente al punto 3.1</label>
    <div class="parada-list">
      ${(l.paradas||[]).map((p, pi) => paradaRowHtml(l, idx, p, pi, catalog)).join('') || '<span class="chip-empty">Sin líneas agregadas</span>'}
    </div>
    <button type="button" class="btn" style="margin-top:6px;" data-addparada="${idx}">+ Agregar línea (Parada/Perno N°)</button>
  ` : '';
  return `
  <div class="labor-card" data-labor="${idx}">
    <div class="lh">
      <input type="text" data-laborfield="${idx}:titulo" value="${escapeHtml(l.titulo)}" placeholder="${escapeHtml(t.laborLabel)} — ej: GA-03 W">
      <button class="rm" data-rmlabor="${idx}">✕</button>
    </div>
    ${paradasBlock}
    <div class="cond-block">
      <div class="cond-tabs">${tabs}</div>
      ${panes}
    </div>
    <label class="section-title" style="margin:10px 0 0;">Fotografías (${l.fotos.length})${isParadas ? ' — asigna el N° de desviación que documenta cada foto' : ' — agrega una leyenda a cada foto, o elige la observación a la que corresponde'}</label>
    <div class="photo-grid photo-grid-described">
      ${fotos}
      <button type="button" class="photo-add" data-addphoto="${idx}"><span class="plus">＋</span>Cámara</button>
      <button type="button" class="photo-add" data-addphotogallery="${idx}"><span class="plus">＋</span>Galería</button>
    </div>
  </div>`;
}

/* ---- Cambio de Turno Diario: section rendering (uses r.turno, not r.labores) ---- */
function turnoFieldHtml(sectionKey, idx, f, item){
  const val = escapeHtml(item[f.key] || '');
  let input;
  if (f.type === 'select'){
    const opts = (f.options||[]).map(o => `<option value="${escapeHtml(o)}" ${item[f.key]===o?'selected':''}>${escapeHtml(o)}</option>`).join('');
    input = `<select data-turnofield="${sectionKey}:${idx}:${f.key}"><option value="">Elegir…</option>${opts}</select>`;
  } else if (f.type === 'textarea'){
    input = `<textarea data-turnofield="${sectionKey}:${idx}:${f.key}" placeholder="${escapeHtml(f.ph||'')}">${val}</textarea>`;
  } else {
    input = `<input type="text" data-turnofield="${sectionKey}:${idx}:${f.key}" value="${val}" placeholder="${escapeHtml(f.ph||'')}">`;
  }
  const catalogRow = f.catalog ? `
    <div class="chip-add-row">
      <select data-turnoaddcat="${sectionKey}:${idx}:${f.key}:${f.catalog}">
        <option value="">＋ Elegir frecuente…</option>
      </select>
    </div>
    <div class="chip-add-actions">
      <button type="button" class="btn-plus" data-turnonewcat="${sectionKey}:${idx}:${f.key}:${f.catalog}" title="Guardar este valor en el listado para el próximo informe">＋ Agregar al listado</button>
      <button type="button" class="btn-plus btn-minus" data-turnodelcat="${sectionKey}:${idx}:${f.key}:${f.catalog}" title="Borrar del listado una frase">🗑 Quitar del listado</button>
    </div>` : '';
  return `<div class="field"><label>${escapeHtml(f.label)}</label>${input}${catalogRow}</div>`;
}
/* catalog options are injected after the fact (per section, not per field) via
   fillTurnoCatalogOptions() below so this stays a pure string-builder. */
function turnoItemCardHtml(sectionKey, item, idx){
  const def = TURNO_SECTIONS[sectionKey];
  const fieldsHtml = def.fields.map(f => turnoFieldHtml(sectionKey, idx, f, item)).join('');
  return `
  <div class="labor-card" data-turnoitem="${sectionKey}:${idx}">
    <div class="lh">
      <span style="flex:1; font-family:var(--font-display); font-size:14px; text-transform:uppercase; color:var(--ink-dim);">Registro ${idx+1}</span>
      <button class="rm" data-rmturno="${sectionKey}:${idx}">✕</button>
    </div>
    ${fieldsHtml}
  </div>`;
}
/* D.- Detalles de terminación: just two sub-headings, each with ONE observations box
   (por sistema first, then internos). Stored in r.turno.kpiSistema.observaciones /
   r.turno.kpiInternos.observaciones (the old numeric card values may still exist in older
   reports but are no longer shown or printed). */
function turnoDetallesTerminacionHtml(r){
  const ki = r.turno.kpiInternos || {};
  const ks = r.turno.kpiSistema || {};
  return `
  <div class="section-title" style="margin-top:18px;">D.- Detalles de terminación</div>
  <div class="field"><label style="font-weight:700;">Detalles de terminación por sistema</label>
    <textarea data-turnokpi="kpiSistema:observaciones" placeholder="Observaciones…">${escapeHtml(ks.observaciones||'')}</textarea></div>
  ${turnoSecPhotosHtml('dSistema', r)}
  <div class="field"><label style="font-weight:700;">Detalles de terminación internos</label>
    <textarea data-turnokpi="kpiInternos:observaciones" placeholder="Observaciones…">${escapeHtml(ki.observaciones||'')}</textarea></div>
  ${turnoSecPhotosHtml('dInternos', r)}
  `;
}

function turnoSecPhotosHtml(key, r){
  const fotos = (r.turno[key + 'Fotos'] || []);
  const cards = fotos.map((f, fi) => `
    <div class="photo-card">
      <div class="photo-thumb">
        <img src="${fotoUrl(f)}"><button class="del" data-secdelfoto="${key}:${fi}">×</button>
      </div>
      <input type="text" class="photo-caption" data-secfotocaption="${key}:${fi}" value="${escapeHtml(f.caption||'')}" placeholder="Leyenda de la foto (opcional)">
    </div>`).join('');
  return `
  <label class="section-title" style="margin:10px 0 0;">Fotografías (${fotos.length})</label>
  <div class="photo-grid photo-grid-described">
    ${cards}
    <button type="button" class="photo-add" data-secaddphoto="${key}"><span class="plus">＋</span>Cámara</button>
    <button type="button" class="photo-add" data-secaddphotogallery="${key}"><span class="plus">＋</span>Galería</button>
  </div>`;
}

function turnoSectionHtml(sectionKey, r){
  const def = TURNO_SECTIONS[sectionKey];
  const items = r.turno[sectionKey] || [];
  const cards = items.map((it, idx) => turnoItemCardHtml(sectionKey, it, idx)).join('');
  return `
  <div class="section-title" style="margin-top:18px;">${escapeHtml(def.title)}</div>
  ${cards || '<div class="empty-hint sm">Sin registros todavía.</div>'}
  <button type="button" class="btn" data-turnoadd="${sectionKey}">${escapeHtml(def.addLabel)}</button>
  ${TURNO_PHOTO_KEYS.includes(sectionKey) ? turnoSecPhotosHtml(sectionKey, r) : ''}
  `;
}
/* Fills every catalog <select> in the rendered HTML with the saved catalog options —
   run right after the section HTML is inserted into stepDesarrolloTurno's output, since
   options depend on an async getCatalog() read. Keeping option-building here (instead of
   threading the catalog object through every string builder above) keeps the templates simple. */
function turnoCatalogOptionsHtml(list){
  return (list || []).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
}
async function stepDesarrolloTurno(r, t){
  const catalog = await getCatalog(t.id);
  // Order: B, C, D (two observation boxes), E, F, then G/H/I (fixed text boxes) and J/K/L (lists).
  const labIdx = TURNO_HEAD_KEYS.indexOf('laboratorio');
  const sectionsBeforeD = TURNO_HEAD_KEYS.slice(0, labIdx+1).map(k => turnoSectionHtml(k, r)).join('');
  const sectionsAfterD = TURNO_HEAD_KEYS.slice(labIdx+1).map(k => turnoSectionHtml(k, r)).join('');
  const sections = sectionsBeforeD + turnoDetallesTerminacionHtml(r) + sectionsAfterD;
  const tailSections = TURNO_TAIL_KEYS.map(k => turnoSectionHtml(k, r)).join('');
  const fotos = (r.turno.fotos || []).map((f, fi) => `
    <div class="photo-card">
      <div class="photo-thumb">
        <img src="${fotoUrl(f)}"><button class="del" data-delturnofoto="${fi}">×</button>
      </div>
      <input type="text" class="photo-caption" data-turnofotocaption="${fi}" value="${escapeHtml(f.caption||'')}" placeholder="Leyenda de la foto (ej: Frente C-53, avance turno noche)">
    </div>`).join('');
  // Inject catalog options into each select's placeholder markup.
  let html = `
  <p class="sub mb-0" style="margin-bottom:14px;">Registra cada sección del cambio de turno. Elige un valor frecuente del listado o toca "＋" para guardarlo y que quede disponible en el próximo informe.</p>
  ${sections}
  <div class="section-title" style="margin-top:18px;">G.- Planilla control de hormigón y shotcrete</div>
  <div class="field"><textarea id="fTurnoPlanilla" placeholder="Ej: Sin ingresos (guías aún no llegaban).">${escapeHtml(r.turno.planillaHormigon||'')}</textarea></div>
  ${turnoSecPhotosHtml('planilla', r)}
  <div class="section-title" style="margin-top:18px;">H.- Felicitaciones</div>
  <div class="field"><textarea id="fTurnoFelicitaciones" placeholder="Ej: Sin registros.">${escapeHtml(r.turno.felicitaciones||'')}</textarea></div>
  ${turnoSecPhotosHtml('felicitaciones', r)}
  <div class="section-title" style="margin-top:18px;">I.- Desviaciones</div>
  <div class="field"><textarea id="fTurnoOtros" placeholder="Ej: Sin registros.">${escapeHtml(r.turno.otros||'')}</textarea></div>
  ${turnoSecPhotosHtml('desviaciones', r)}
  ${tailSections}
  <div class="section-title" style="margin-top:18px;">Evidencia fotográfica (${(r.turno.fotos||[]).length})</div>
  <p class="sub mb-0" style="margin-bottom:10px;">Agrega fotos de evidencia del turno, con una leyenda para cada una.</p>
  <div class="photo-grid photo-grid-described">
    ${fotos}
    <button type="button" class="photo-add" id="btnTurnoAddPhoto"><span class="plus">＋</span>Cámara</button>
    <button type="button" class="photo-add" id="btnTurnoAddPhotoGallery"><span class="plus">＋</span>Galería</button>
  </div>
  <input type="file" id="turnoPhotoInput" accept="image/*" capture="environment" multiple style="display:none;">
  <input type="file" id="turnoPhotoInputGallery" accept="image/*" multiple style="display:none;">
  <input type="file" id="secPhotoInput" accept="image/*" capture="environment" multiple style="display:none;">
  <input type="file" id="secPhotoInputGallery" accept="image/*" multiple style="display:none;">
  `;
  html = html.replace(/<select data-turnoaddcat="([^"]+)">\s*<option value="">＋ Elegir frecuente…<\/option>\s*<\/select>/g,
    (m, key) => {
      const catKey = key.split(':')[3];
      return `<select data-turnoaddcat="${key}"><option value="">＋ Elegir frecuente…</option>${turnoCatalogOptionsHtml(catalog[catKey])}</select>`;
    });
  return html;
}

/* ---- Cambio de Turno General: section rendering (uses r.turnoGeneral, see TURNO_GENERAL_SECTIONS) ----
   Same building blocks as the Diario's turnoFieldHtml / turnoItemCardHtml / turnoSectionHtml,
   with two differences: (1) every attribute is prefixed data-tg… so the two screens' handlers
   can never pick up each other's elements, and (2) sections flagged hasFotos also render
   their OWN photo gallery (camera / gallery, one caption per photo) stored next to the list
   as r.turnoGeneral[<section>Fotos] — the Diario only has one gallery for the whole report. */
function tgFieldHtml(sectionKey, idx, f, item){
  const val = escapeHtml(item[f.key] || '');
  let input;
  if (f.type === 'select'){
    const opts = (f.options||[]).map(o => `<option value="${escapeHtml(o)}" ${item[f.key]===o?'selected':''}>${escapeHtml(o)}</option>`).join('');
    input = `<select data-tgfield="${sectionKey}:${idx}:${f.key}"><option value="">Elegir…</option>${opts}</select>`;
  } else if (f.type === 'textarea'){
    input = `<textarea data-tgfield="${sectionKey}:${idx}:${f.key}" placeholder="${escapeHtml(f.ph||'')}">${val}</textarea>`;
  } else {
    input = `<input type="text" data-tgfield="${sectionKey}:${idx}:${f.key}" value="${val}" placeholder="${escapeHtml(f.ph||'')}">`;
  }
  const catalogRow = f.catalog ? `
    <div class="chip-add-row">
      <select data-tgaddcat="${sectionKey}:${idx}:${f.key}:${f.catalog}">
        <option value="">＋ Elegir frecuente…</option>
      </select>
    </div>
    <div class="chip-add-actions">
      <button type="button" class="btn-plus" data-tgnewcat="${sectionKey}:${idx}:${f.key}:${f.catalog}" title="Guardar este valor en el listado para el próximo informe">＋ Agregar al listado</button>
      <button type="button" class="btn-plus btn-minus" data-tgdelcat="${sectionKey}:${idx}:${f.key}:${f.catalog}" title="Borrar del listado una frase">🗑 Quitar del listado</button>
    </div>` : '';
  return `<div class="field"><label>${escapeHtml(f.label)}</label>${input}${catalogRow}</div>`;
}
function tgItemCardHtml(sectionKey, item, idx){
  const def = TURNO_GENERAL_SECTIONS[sectionKey];
  return `
  <div class="labor-card" data-tgitem="${sectionKey}:${idx}">
    <div class="lh">
      <span style="flex:1; font-family:var(--font-display); font-size:14px; text-transform:uppercase; color:var(--ink-dim);">${def.fields.length === 1 ? 'Línea' : 'Registro'} ${idx+1}</span>
      <button class="rm" data-tgrm="${sectionKey}:${idx}">✕</button>
    </div>
    ${def.fields.map(f => tgFieldHtml(sectionKey, idx, f, item)).join('')}
  </div>`;
}
function tgPhotosHtml(sectionKey, r){
  const fotos = (r.turnoGeneral[sectionKey + 'Fotos'] || []);
  const cards = fotos.map((f, fi) => `
    <div class="photo-card">
      <div class="photo-thumb">
        <img src="${fotoUrl(f)}"><button class="del" data-tgdelfoto="${sectionKey}:${fi}">×</button>
      </div>
      <input type="text" class="photo-caption" data-tgfotocaption="${sectionKey}:${fi}" value="${escapeHtml(f.caption||'')}" placeholder="Leyenda de la foto">
    </div>`).join('');
  return `
  <label class="section-title" style="margin:10px 0 0;">Fotografías (${fotos.length})</label>
  <div class="photo-grid photo-grid-described">
    ${cards}
    <button type="button" class="photo-add" data-tgaddphoto="${sectionKey}"><span class="plus">＋</span>Cámara</button>
    <button type="button" class="photo-add" data-tgaddphotogallery="${sectionKey}"><span class="plus">＋</span>Galería</button>
  </div>`;
}
function tgSectionHtml(sectionKey, r){
  const def = TURNO_GENERAL_SECTIONS[sectionKey];
  const items = r.turnoGeneral[sectionKey] || [];
  const cards = items.map((it, idx) => tgItemCardHtml(sectionKey, it, idx)).join('');
  // Items E and G split into named subtítulos: the lettered heading (groupTitle) is drawn once
  // above the first subtítulo of its group; the subtítulos themselves are plain sub-headings.
  const groupHead = def.groupTitle ? `<div class="section-title" style="margin-top:22px;">${escapeHtml(def.groupTitle)}</div>` : '';
  const titleHtml = def.sub
    ? `<div class="eyebrow" style="margin:14px 0 6px;">${escapeHtml(def.title)}</div>`
    : `<div class="section-title" style="margin-top:22px;">${escapeHtml(def.title)}</div>`;
  return `
  ${groupHead}
  ${titleHtml}
  ${cards || '<div class="empty-hint sm">Sin registros todavía.</div>'}
  <button type="button" class="btn" data-tgadd="${sectionKey}">${escapeHtml(def.addLabel)}</button>
  ${def.hasFotos ? tgPhotosHtml(sectionKey, r) : ''}
  `;
}
async function stepDesarrolloTurnoGeneral(r, t){
  const catalog = await getCatalog(t.id);
  let html = `
  <p class="sub mb-0" style="margin-bottom:14px;">Completa cada ítem del resumen. Desde el ítem C en adelante puedes agregar fotos (cámara o galería) en cada apartado. Elige un valor frecuente del listado o toca "＋" para guardarlo para el próximo informe.</p>
  ${TURNO_GENERAL_SECTION_KEYS.map(k => tgSectionHtml(k, r)).join('')}
  <input type="file" id="tgPhotoInput" accept="image/*" capture="environment" multiple style="display:none;">
  <input type="file" id="tgPhotoInputGallery" accept="image/*" multiple style="display:none;">
  `;
  html = html.replace(/<select data-tgaddcat="([^"]+)">\s*<option value="">＋ Elegir frecuente…<\/option>\s*<\/select>/g,
    (m, key) => {
      const catKey = key.split(':')[3];
      return `<select data-tgaddcat="${key}"><option value="">＋ Elegir frecuente…</option>${turnoCatalogOptionsHtml(catalog[catKey])}</select>`;
    });
  return html;
}
/* Copies every text field / photo caption currently on screen straight into the report object
   (no events, no re-render). Used both by the add/remove/photo buttons (so nothing typed since
   the last blur is lost when the screen redraws) and by persistCurrentStep (Atrás / Continuar). */
function tgReadDomInto(r){
  const g = r.turnoGeneral;
  if (!g) return;
  document.querySelectorAll('[data-tgfield]').forEach(el => {
    const [sk, idxStr, key] = el.getAttribute('data-tgfield').split(':');
    if (g[sk] && g[sk][+idxStr]) g[sk][+idxStr][key] = el.value;
  });
  document.querySelectorAll('[data-tgfotocaption]').forEach(el => {
    const [sk, fiStr] = el.getAttribute('data-tgfotocaption').split(':');
    const arr = g[sk + 'Fotos'];
    if (arr && arr[+fiStr]) arr[+fiStr].caption = el.value;
  });
}

function bindDesarrolloTurnoGeneral(id){
  async function flushTg(){
    const r = await idbGet('reports', id);
    if (!r || !r.turnoGeneral) return;
    tgReadDomInto(r);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }
  const rerender = () => go('wizard', { id, step: 'desarrollo' });

  document.querySelectorAll('[data-tgadd]').forEach(el => el.addEventListener('click', async () => {
    await flushTg();
    const sectionKey = el.getAttribute('data-tgadd');
    const r = await idbGet('reports', id);
    r.turnoGeneral[sectionKey].push(newTurnoGeneralItem(sectionKey));
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    rerender();
  }));

  document.querySelectorAll('[data-tgrm]').forEach(el => el.addEventListener('click', async () => {
    await flushTg();
    const [sectionKey, idxStr] = el.getAttribute('data-tgrm').split(':');
    const r = await idbGet('reports', id);
    const item = r.turnoGeneral[sectionKey][+idxStr];
    const hasContent = item && Object.keys(item).some(k => k !== 'id' && String(item[k] || '').trim());
    if (hasContent && !(await askConfirm('¿Quitar esta línea? Esta acción no se puede deshacer.'))) return;
    r.turnoGeneral[sectionKey].splice(+idxStr, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    rerender();
  }));

  // Live save while typing / on blur — no re-render, so the keyboard stays open.
  document.querySelectorAll('[data-tgfield], [data-tgfotocaption]').forEach(el => {
    el.addEventListener('change', async () => {
      const r = await idbGet('reports', id);
      if (!r || !r.turnoGeneral) return;
      tgReadDomInto(r);
      r.updatedAt = Date.now();
      await idbPut('reports', r);
    });
  });

  document.querySelectorAll('[data-tgaddcat]').forEach(sel => sel.addEventListener('change', async () => {
    await flushTg();
    const [sectionKey, idxStr, key] = sel.getAttribute('data-tgaddcat').split(':');
    const val = sel.value;
    if (!val) return;
    const r = await idbGet('reports', id);
    if (!r.turnoGeneral[sectionKey][+idxStr]) return;
    r.turnoGeneral[sectionKey][+idxStr][key] = val;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    rerender();
  }));

  document.querySelectorAll('[data-tgnewcat]').forEach(b => b.addEventListener('click', async () => {
    await flushTg();
    const [sectionKey, idxStr, key, catKey] = b.getAttribute('data-tgnewcat').split(':');
    const text = await askText('Nuevo valor — quedará guardado para elegirlo en futuros informes:');
    if (!text || !text.trim()) return;
    const phrase = text.trim();
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, catKey, phrase);
    if (r.turnoGeneral[sectionKey][+idxStr]) r.turnoGeneral[sectionKey][+idxStr][key] = phrase;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Valor agregado al listado para futuros informes');
    rerender();
  }));

  document.querySelectorAll('[data-tgdelcat]').forEach(b => b.addEventListener('click', async () => {
    await flushTg();
    const [, , , catKey] = b.getAttribute('data-tgdelcat').split(':');
    const r0 = await idbGet('reports', id);
    const catalog0 = await getCatalog(r0.typeId);
    const options = catalog0[catKey] || [];
    if (!options.length){ toast('No hay frases guardadas en el listado todavía'); return; }
    const value = await askChoice('¿Qué frase quieres borrar del listado?', options.map(o => ({ value:o, label:o })));
    if (!value) return;
    if (!(await askConfirm(`¿Borrar "${value}" del listado de frecuentes? No afecta a los informes ya guardados.`))) return;
    await removeCatalogItem(r0.typeId, catKey, value);
    toast('Frase eliminada del listado');
    rerender();
  }));

  // ---- Photos: one shared pair of hidden file inputs, pointed at whichever section's
  // Cámara / Galería button was tapped last. input.click() is called synchronously inside the
  // tap handler (no await before it) — phones only open the camera/gallery for a click that
  // happens directly inside the user's tap. ----
  const tgInput = document.getElementById('tgPhotoInput');
  const tgInputGallery = document.getElementById('tgPhotoInputGallery');
  let photoSection = null;
  document.querySelectorAll('[data-tgaddphoto]').forEach(b => b.addEventListener('click', () => {
    photoSection = b.getAttribute('data-tgaddphoto');
    tgInput.value = '';
    tgInput.click();
  }));
  document.querySelectorAll('[data-tgaddphotogallery]').forEach(b => b.addEventListener('click', () => {
    photoSection = b.getAttribute('data-tgaddphotogallery');
    tgInputGallery.value = '';
    tgInputGallery.click();
  }));
  async function handleTgFiles(fileList){
    if (!fileList.length || !photoSection) return;
    toast('Procesando fotos…', 1500);
    const section = photoSection;
    const r = await idbGet('reports', id);
    tgReadDomInto(r);
    const key = section + 'Fotos';
    r.turnoGeneral[key] = r.turnoGeneral[key] || [];
    for (const file of fileList){
      try { const dataUrl = await fileToCompressedDataURL(file); r.turnoGeneral[key].push({ url: dataUrl, caption: '' }); }
      catch(e){ console.error(e); }
    }
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    rerender();
  }
  tgInput.addEventListener('change', () => handleTgFiles(tgInput.files));
  tgInputGallery.addEventListener('change', () => handleTgFiles(tgInputGallery.files));

  document.querySelectorAll('[data-tgdelfoto]').forEach(b => b.addEventListener('click', async () => {
    await flushTg();
    const [sectionKey, fiStr] = b.getAttribute('data-tgdelfoto').split(':');
    if (!(await askConfirm('¿Quitar esta foto del informe?'))) return;
    const r = await idbGet('reports', id);
    (r.turnoGeneral[sectionKey + 'Fotos'] || []).splice(+fiStr, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    rerender();
  }));
}

function stepConclusiones(r, catalog){
  return catFieldHtml('fConclusiones', 'conclusiones', r.conclusiones, catalog?.conclusiones, {
    textarea:true, label:'Conclusiones',
    ph:'Resume el resultado final: cumple / no cumple, y cualquier acción pendiente.'
  });
}

function stepFirmas(r){
  return r.personal.map((p,i) => `
    <div class="sig-card">
      <div class="who">
        <div class="stamp ${p.firma?'done':'pending'}">V°B°</div>
        <div>
          <div class="nm">${escapeHtml(p.nombre || `Inspector ${i+1}`)}</div>
          <div class="rl">${escapeHtml(p.cargo)}</div>
        </div>
      </div>
      <canvas class="sigpad" id="sig${i}" data-sigidx="${i}"></canvas>
      <div class="sig-actions">
        <button type="button" class="link" data-clearsig="${i}">Borrar firma</button>
        <span class="sig-status ${p.firma?'signed':'pending'}" id="sigStatus${i}">${p.firma?'Firmado':'Pendiente'}</span>
      </div>
    </div>
  `).join('');
}

function catBlockReview(l, cat, counter){
  const arr = joinCat(l.cats[cat]);
  if (!arr.length) return '';
  const numbered = arr.map(it => { counter[cat] += 1; return `${counter[cat]}.- ${it}`; });
  return `<p><strong style="color:${CAT_COLORS[cat]}">${CAT_LABELS[cat]}:</strong> ${escapeHtml(numbered.join(' · '))}</p>`;
}

function stepRevision(r, t){
  /* Cumulative counters so numbering keeps adding up across every registro, matching the PDF. */
  const revCounter = { positiva:0, desviacion:0, correctiva:0 };
  const laboresHtml = r.labores.map(l => `
    <div class="rev-block">
      <h3>${escapeHtml(l.titulo || 'Sin título')}</h3>
      ${CAT_KEYS.map(cat => catBlockReview(l, cat, revCounter)).join('')}
      <p style="color:var(--ink-faint); font-size:12px;">${l.fotos.length} fotografía(s) adjunta(s)</p>
    </div>
  `).join('') || `<p class="sub">Aún no agregaste registros de desarrollo.</p>`;

  const statusChip = r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>' : r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>' : '<span class="status-chip draft">Borrador</span>';
  const counts = countsForReport(r);

  return `
  <div class="kv" style="margin-bottom:10px;">
    <div><div class="k">Fecha</div><div class="v">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.hora)}</div></div>
    <div><div class="k">Turno / Grupo</div><div class="v">${escapeHtml(r.header.turno)} · ${escapeHtml(r.header.grupo)}</div></div>
    <div><div class="k">Área</div><div class="v">${escapeHtml(r.header.area)}</div></div>
    <div><div class="k">Sector / PK</div><div class="v">${escapeHtml(r.header.sectorPk||'—')}</div></div>
  </div>
  <div style="margin-bottom:12px; display:flex; gap:6px; flex-wrap:wrap;">
    ${statusChip}
    <span class="status-chip" style="background:var(--warn-dim);color:var(--warn);">${counts.desviacion} Desviaciones/Hallazgos</span>
    <span class="status-chip" style="background:var(--ok-dim);color:var(--ok);">${counts.positiva} Cond. Positivas</span>
    <span class="status-chip" style="background:var(--signal-dim);color:var(--signal);">${counts.correctiva} Acciones Correctivas</span>
  </div>
  ${t.id === 'caminata' ? kpiCaminataHtml(r) : ''}

  <div class="rev-block"><h3>1. Objetivo</h3><p>${escapeHtml((r.objetivo || '—').toUpperCase())}</p></div>
  <div class="rev-block"><h3>2. Antecedentes</h3>${
    t.antecedentesChecklist
      ? ((r.antecedentesSel||[]).length ? (r.antecedentesSel||[]).map((txt,i) => `<p>${i+1}.- ${escapeHtml(txt.toUpperCase())}</p>`).join('') : '<p style="color:var(--ink-faint);">Sin puntos marcados.</p>')
      : `<p>${escapeHtml((r.antecedentes || '—').toUpperCase())}</p>`
  }</div>
  <div class="rev-block"><h3>3. Desarrollo</h3>${laboresHtml}</div>
  <div class="rev-block"><h3>4. Conclusiones</h3><p>${escapeHtml(r.conclusiones || '—')}</p></div>

  <button class="btn btn-primary" id="btnGenPdf" style="margin-top:16px;">📄 Vista previa del PDF</button>
  <p class="cfg-note" style="margin:6px 0 14px;">La vista previa no cierra el informe — puedes seguir revisando y editando después de verla.</p>
  <div class="btn-row">
    <button class="btn" id="btnSharePdf">Compartir / enviar ahora</button>
  </div>
  <p class="cfg-note" id="autoSyncNote">
    Al compartir / enviar, el informe queda marcado como listo. ${navigator.onLine
      ? 'Hay señal: si configuraste un webhook, el envío automático se intentará en ese momento.'
      : 'Sin señal: el PDF queda guardado en el equipo y se enviará automáticamente en cuanto el teléfono detecte conexión.'}
  </p>
  <button class="btn" data-nav="home" style="margin-top:6px;">Guardar y salir</button>
  `;
}

function stepRevisionTurno(r, t){
  const revSection = k => {
    const def = TURNO_SECTIONS[k];
    const items = r.turno[k] || [];
    const lines = items
      .map(it => def.fields.map(f => it[f.key]).filter(Boolean).join(' — '))
      .filter(Boolean);
    const nF = (r.turno[k + 'Fotos'] || []).length;
    return `<div class="rev-block"><h3>${escapeHtml(def.title)}</h3>${
      lines.length ? lines.map((l,i) => `<p>${i+1}.- ${escapeHtml(l)}</p>`).join('') : '<p style="color:var(--ink-faint);">Sin registros.</p>'
    }${nF ? `<p style="color:var(--ink-faint); font-size:12px;">${nF} fotografía(s) adjunta(s)</p>` : ''}</div>`;
  };
  const secHtml = TURNO_HEAD_KEYS.slice(0, TURNO_HEAD_KEYS.indexOf('laboratorio')+1).map(revSection).join('')
    + `<div class="rev-block"><h3>D.- Detalles de terminación</h3>
        <p><b>Detalles de terminación por sistema</b></p><p>${escapeHtml((r.turno.kpiSistema||{}).observaciones || '—')}</p>
        <p><b>Detalles de terminación internos</b></p><p>${escapeHtml((r.turno.kpiInternos||{}).observaciones || '—')}</p></div>`
    + TURNO_HEAD_KEYS.slice(TURNO_HEAD_KEYS.indexOf('laboratorio')+1).map(revSection).join('');
  const tailRevHtml = TURNO_TAIL_KEYS.map(revSection).join('');

  const statusChip = r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>' : r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>' : '<span class="status-chip draft">Borrador</span>';
  const periodoTxt = (r.header.periodoInicio || r.header.periodoFin)
    ? `${r.header.periodoInicio ? fmtDateDisplay(r.header.periodoInicio) : '—'} al ${r.header.periodoFin ? fmtDateDisplay(r.header.periodoFin) : '—'}`
    : '—';
  const personalTurnoRevHtml = (list, label) => `
    <p><b>${escapeHtml(label)}</b></p>
    ${list && list.length
      ? list.map((p,i)=>`<p>${i+1}.- ${escapeHtml(p.nombre||'(sin nombre)')} (${escapeHtml(p.cargo)}).</p>`).join('')
      : '<p style="color:var(--ink-faint);">Sin registro</p>'}`;

  return `
  <div class="kv" style="margin-bottom:10px;">
    <div><div class="k">Periodo</div><div class="v">${periodoTxt}</div></div>
    <div><div class="k">Cobertura de datos</div><div class="v">${fmtDateDisplay(r.header.fecha)} · ${escapeHtml(r.header.hora)}</div></div>
    <div><div class="k">Turnos</div><div class="v">${escapeHtml(r.header.turno)}</div></div>
  </div>
  <div style="margin-bottom:12px;">${statusChip}</div>

  <div class="rev-block"><h3>A.- Personal en turno</h3>
    ${personalTurnoRevHtml(r.personalNoche, 'Turno Noche:')}
    ${personalTurnoRevHtml(r.personalDia, 'Turno Día:')}
  </div>
  ${secHtml}
  <div class="rev-block"><h3>G.- Planilla control de hormigón y shotcrete</h3><p>${escapeHtml(r.turno.planillaHormigon || '—')}</p></div>
  <div class="rev-block"><h3>H.- Felicitaciones</h3><p>${escapeHtml(r.turno.felicitaciones || '—')}</p></div>
  <div class="rev-block"><h3>I.- Desviaciones</h3><p>${escapeHtml(r.turno.otros || '—')}</p></div>
  ${tailRevHtml}

  <button class="btn btn-primary" id="btnGenPdf" style="margin-top:16px;">📄 Vista previa del PDF</button>
  <p class="cfg-note" style="margin:6px 0 14px;">La vista previa no cierra el informe — puedes seguir revisando y editando después de verla.</p>
  <div class="btn-row">
    <button class="btn" id="btnSharePdf">Compartir / enviar ahora</button>
  </div>
  <p class="cfg-note" id="autoSyncNote">
    Al compartir / enviar, el informe queda marcado como listo. ${navigator.onLine
      ? 'Hay señal: si configuraste un webhook, el envío automático se intentará en ese momento.'
      : 'Sin señal: el PDF queda guardado en el equipo y se enviará automáticamente en cuanto el teléfono detecte conexión.'}
  </p>
  <button class="btn" data-nav="home" style="margin-top:6px;">Guardar y salir</button>
  `;
}

function stepRevisionTurnoGeneral(r, t){
  const g = r.turnoGeneral || {};
  const lineOf = (k, it) => {
    const def = TURNO_GENERAL_SECTIONS[k];
    return def.fields.map(f => it[f.key]).filter(Boolean).join(' — ');
  };
  const secHtml = TURNO_GENERAL_SECTION_KEYS.map(k => {
    const def = TURNO_GENERAL_SECTIONS[k];
    const lines = (g[k] || []).map(it => lineOf(k, it)).filter(Boolean);
    const nFotos = (g[k + 'Fotos'] || []).length;
    const head = (def.groupTitle ? `<h3 style="margin-top:14px;">${escapeHtml(def.groupTitle)}</h3>` : '');
    return `<div class="rev-block">${head}<h3${def.sub ? ' style="font-size:13px;color:var(--ink-dim);"' : ''}>${escapeHtml(def.title)}</h3>${
      lines.length ? lines.map((l,i) => `<p>${i+1}.- ${escapeHtml(l)}</p>`).join('') : '<p style="color:var(--ink-faint);">Sin registros.</p>'
    }${def.hasFotos ? `<p style="color:var(--ink-faint); font-size:12px;">${nFotos} fotografía(s) adjunta(s)</p>` : ''}</div>`;
  }).join('');

  const statusChip = r.status === 'enviado' ? '<span class="status-chip sent">Enviado</span>' : r.status === 'listo' ? '<span class="status-chip ready">PDF listo</span>' : '<span class="status-chip draft">Borrador</span>';
  const periodoTxt = (r.header.periodoInicio || r.header.periodoFin)
    ? `${r.header.periodoInicio ? fmtDateDisplay(r.header.periodoInicio) : '—'} al ${r.header.periodoFin ? fmtDateDisplay(r.header.periodoFin) : '—'}`
    : '—';
  const personalRevHtml = (list, label) => `
    <p><b>${escapeHtml(label)}</b></p>
    ${list && list.length
      ? list.map((p,i)=>`<p>${i+1}.- ${escapeHtml(p.nombre||'(sin nombre)')} (${escapeHtml(p.cargo)}).</p>`).join('')
      : '<p style="color:var(--ink-faint);">Sin registro</p>'}`;

  return `
  <div class="kv" style="margin-bottom:10px;">
    <div><div class="k">Periodo</div><div class="v">${periodoTxt}</div></div>
    <div><div class="k">Turnos</div><div class="v">Día y Noche</div></div>
    <div><div class="k">Cobertura de datos</div><div class="v">${escapeHtml(r.header.cobertura || '—')}</div></div>
  </div>
  <div style="margin-bottom:12px;">${statusChip}</div>

  <div class="rev-block"><h3>A.- Personal en turno</h3>
    ${personalRevHtml(r.personalNoche, 'Turno Noche:')}
    ${personalRevHtml(r.personalDia, 'Turno Día:')}
  </div>
  ${secHtml}

  <button class="btn btn-primary" id="btnGenPdf" style="margin-top:16px;">📄 Vista previa del PDF</button>
  <p class="cfg-note" style="margin:6px 0 14px;">La vista previa no cierra el informe — puedes seguir revisando y editando después de verla.</p>
  <div class="btn-row">
    <button class="btn" id="btnSharePdf">Compartir / enviar ahora</button>
  </div>
  <p class="cfg-note" id="autoSyncNote">
    Al compartir / enviar, el informe queda marcado como listo. ${navigator.onLine
      ? 'Hay señal: si configuraste un webhook, el envío automático se intentará en ese momento.'
      : 'Sin señal: el PDF queda guardado en el equipo y se enviará automáticamente en cuanto el teléfono detecte conexión.'}
  </p>
  <button class="btn" id="btnShareDraft" style="margin-top:10px;">🤝 Compartir borrador para que otra persona lo termine</button>
  <p class="cfg-note" style="margin:6px 0 14px;">Envía un archivo con todo lo que llevas (datos, fotos y firmas). La otra persona lo abre desde “Recibir informe compartido” en la pantalla de inicio de su app y sigue editando. Este informe no se cierra ni se marca como enviado.</p>
  <button class="btn" data-nav="home" style="margin-top:6px;">Guardar y salir</button>
  `;
}

/* ---- wizard bindings ---- */
async function bindWizard(id, step){
  const r = await idbGet('reports', id);
  const t = r ? REPORT_TYPES[r.typeId] : null;
  const steps = wizStepsFor(t);
  if (!steps.includes(step)) step = step === 'firmas' ? 'revision' : steps[0];
  const stepIdx = steps.indexOf(step);
  const isTurno = t && t.kind === 'turno';
  const isTurnoGeneral = t && t.kind === 'turnogeneral';
  const isAnyTurno = isTurno || isTurnoGeneral;

  document.getElementById('btnNext')?.addEventListener('click', async () => {
    await persistCurrentStep(id, step);
    go('wizard', { id, step: steps[stepIdx+1] });
  });
  document.getElementById('btnPrev')?.addEventListener('click', async () => {
    await persistCurrentStep(id, step);
    go('wizard', { id, step: steps[stepIdx-1] });
  });
  const backBtn = document.querySelector('.topbar .back');
  if (backBtn) backBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    await persistCurrentStep(id, step);
  });

  if (step === 'datos') { bindDatos(); bindCatFields(id); }
  if (step === 'personal') { bindCatFields(id); if (isAnyTurno) bindPersonalTurno(id); }
  if (step === 'resumen') { bindCatFields(id); if (t.antecedentesChecklist) bindAntecedentesChecklist(id); }
  if (step === 'conclusiones') bindCatFields(id);
  if (step === 'desarrollo') { if (isTurnoGeneral) bindDesarrolloTurnoGeneral(id); else if (isTurno) bindDesarrolloTurno(id); else bindDesarrollo(id, t.laborKind === 'paradas'); }
  if (step === 'firmas') bindFirmas(id);
  if (step === 'revision') bindRevision(id);
}

/* Cambio de Turno's Turno Noche / Turno Día inspector lists (see personalTurnoListHtml) —
   variable-length, so unlike the fixed two-slot r.personal this needs its own add/remove
   handlers. flushPendingFields(id) first on every action, same reasoning as the paradas
   rows in bindDesarrollo: don't let an in-progress edit get lost when the list re-renders. */
function bindPersonalTurno(id){
  document.querySelectorAll('[data-personalturnoadd]').forEach(btn => btn.addEventListener('click', async () => {
    await flushPendingFields(id);
    const turnoKey = btn.getAttribute('data-personalturnoadd');
    const r = await idbGet('reports', id);
    r[turnoKey] = r[turnoKey] || [];
    r[turnoKey].push({ nombre: '', cargo: 'Inspector de Calidad', firma: null });
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'personal' });
  }));
  document.querySelectorAll('[data-personalturnodel]').forEach(btn => btn.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [turnoKey, i] = btn.getAttribute('data-personalturnodel').split(':');
    const r = await idbGet('reports', id);
    const list = r[turnoKey] || [];
    const p = list[+i];
    const label = p && p.nombre ? p.nombre : `Inspector ${+i+1}`;
    if (!(await askConfirm(`¿Quitar a "${label}" de esta lista?`))) return;
    list.splice(+i, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'personal' });
  }));
}

function bindDatos(){
  document.querySelectorAll('[data-turno]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-turno]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  }));

  // Live-update the KPI value as the user types the PK, without waiting for the field to
  // lose focus (which is when the value normally gets saved) and without re-rendering the
  // whole step — that would drop keyboard focus mid-type. The card itself only exists in
  // the DOM when a KPI could be calculated at render time (see kpiCaminataHtml), so typing
  // a valid PK range needs to insert the card, and clearing it back out needs to remove it.
  const pkInput = document.getElementById('fPk');
  if (pkInput){
    pkInput.addEventListener('input', async () => {
      const metros = metrosDelPk(pkInput.value);
      const r = await idbGet('reports', ROUTE.params.id);
      const hallazgos = countsForReport(r).desviacion;
      const kpi = (metros && metros > 0) ? (hallazgos / metros) : null;
      let kpiCard = document.querySelector('.kpi-card');
      if (kpi === null){
        if (kpiCard) kpiCard.remove();
        return;
      }
      if (!kpiCard){
        kpiCard = document.createElement('div');
        kpiCard.className = 'field kpi-card';
        kpiCard.innerHTML = `<label>KPI</label><div class="kpi-value"></div>`;
        pkInput.closest('.field').insertAdjacentElement('afterend', kpiCard);
      }
      kpiCard.querySelector('.kpi-value').textContent = kpi.toFixed(3);
    });
  }

  // Caminata Interna: picking an Ubicación from the matrix dropdown copies its Sector text
  // straight into the free-text Sector field below (and saves it the same way that field
  // saves on its own "change") — this is what keeps Sector matching the matrix exactly,
  // instead of relying on it being typed by hand the same way every time.
  const sectorPicker = document.getElementById('fSectorPicker');
  if (sectorPicker){
    sectorPicker.addEventListener('change', async () => {
      if (!sectorPicker.value) return;
      const sectorInput = document.getElementById('fSector');
      if (sectorInput) sectorInput.value = sectorPicker.value;
      // Save every OTHER field on this screen first (Correlativo, Proceso, etc.) before
      // reading+writing the report here — without this, anything the person had already
      // typed above but hadn't left the screen yet (nothing on "Datos" saves until the step
      // is exited, via persistCurrentStep) would still be sitting unsaved in the DOM when
      // this handler's own idbGet() ran, and that OLD copy of the report is what would get
      // written back — silently wiping the not-yet-saved Correlativo/Proceso. This is what
      // was reported: picking a sector from the matrix, or typing Proceso, erasing whatever
      // was typed in a field above it.
      await persistCurrentStep(ROUTE.params.id, 'datos');
      const r = await idbGet('reports', ROUTE.params.id);
      applyCatFieldValue(r, 'fSector', sectorPicker.value);
      r.updatedAt = Date.now();
      await idbPut('reports', r);
      go('wizard', { id: ROUTE.params.id, step: 'datos' });
    });
  }
}

/* Maps a catFieldHtml() input id to where its value lives on the report object, and
   applies it. Sector/PK also keep header.sectorPk in sync for the existing display/PDF
   code (home cards, historial, PDF header row, filename) that already reads that field. */
function applyCatFieldValue(r, inputId, value){
  if (inputId === 'fSector'){ r.header.sector = value; r.header.sectorPk = [r.header.sector, r.header.pk].filter(Boolean).join(' / '); }
  else if (inputId === 'fPk'){ r.header.pk = value; r.header.sectorPk = [r.header.sector, r.header.pk].filter(Boolean).join(' / '); }
  else if (inputId === 'fObjetivo') r.objetivo = value;
  else if (inputId === 'fAntecedentes') r.antecedentes = value;
  else if (inputId === 'fConclusiones') r.conclusiones = value;
  else if (inputId.startsWith('pNom')){ const i = +inputId.slice(4); if (r.personal[i]) r.personal[i].nombre = value; }
  else if (inputId.startsWith('pt_')){
    // Cambio de Turno's Turno Noche/Día inspector lists (personalTurnoListHtml) — id shape is
    // "pt_<turnoKey>_<i>_nombre"; turnoKey itself is "personalNoche"/"personalDia" (contains
    // no underscores), so splitting on "_" and taking index 1 as turnoKey and the middle
    // segment as the numeric index is unambiguous.
    const parts = inputId.split('_'); // ['pt', turnoKey, i, 'nombre']
    const turnoKey = parts[1], i = +parts[2];
    if (r[turnoKey] && r[turnoKey][i]) r[turnoKey][i].nombre = value;
  }
}

/* Binds every catFieldHtml() instance on the current step: choosing a "frecuente" value
   fills the field and saves it right away; "＋" saves whatever is currently typed into
   that field into its catalog so it's offered as a "frecuente" option on future informes.
   scope 'global' (personal names) always saves under the shared '_personal' catalog
   instead of the current report's own typeId. */
function bindCatFields(id){
  document.querySelectorAll('[data-catfieldselect]').forEach(sel => sel.addEventListener('change', async () => {
    const [inputId, catKey] = sel.getAttribute('data-catfieldselect').split(':');
    const val = (sel.value || '').toUpperCase();
    if (!val) return;
    const el = document.getElementById(inputId);
    if (el) el.value = val;
    const r = await idbGet('reports', id);
    applyCatFieldValue(r, inputId, val);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }));

  document.querySelectorAll('[data-catfieldnew]').forEach(b => b.addEventListener('click', async () => {
    const [inputId, catKey, scope] = b.getAttribute('data-catfieldnew').split(':');
    const el = document.getElementById(inputId);
    const value = (el?.value || '').trim();
    if (!value){ toast('Escribe un valor en el campo antes de guardarlo en el listado'); return; }
    const r = await idbGet('reports', id);
    const catalogTypeId = scope === 'global' ? '_personal' : r.typeId;
    await addCatalogItem(catalogTypeId, catKey, value);
    applyCatFieldValue(r, inputId, value);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Guardado en el listado para futuros informes');
    go('wizard', { id, step: ROUTE.params.step });
  }));

  document.querySelectorAll('[data-catfielddel]').forEach(b => b.addEventListener('click', async () => {
    const [inputId, catKey, scope] = b.getAttribute('data-catfielddel').split(':');
    const sel = document.querySelector(`[data-catfieldselect="${inputId}:${catKey}:${scope}"]`);
    const value = sel ? sel.value : '';
    if (!value){ toast('Elige primero una frase del listado para poder borrarla'); return; }
    if (!(await askConfirm(`¿Borrar "${value}" del listado de frecuentes? No afecta a los informes ya guardados.`))) return;
    const r = await idbGet('reports', id);
    const catalogTypeId = scope === 'global' ? '_personal' : r.typeId;
    await removeCatalogItem(catalogTypeId, catKey, value);
    toast('Frase eliminada del listado');
    go('wizard', { id, step: ROUTE.params.step });
  }));
}

/* Fortificación's numbered Antecedentes checklist: clicking a row toggles it in/out of
   r.antecedentesSel; "＋" appends a brand-new point to the type's antecedentesItems
   catalog (so it's numbered and offered on every future informe) and checks it right away. */
function bindAntecedentesChecklist(id){
  document.querySelectorAll('[data-antchk]').forEach(row => row.addEventListener('click', async () => {
    const idx = +row.getAttribute('data-antchk');
    const r = await idbGet('reports', id);
    const catalog = await getCatalog(r.typeId);
    const txt = (catalog.antecedentesItems || [])[idx];
    if (!txt) return;
    r.antecedentesSel = r.antecedentesSel || [];
    const pos = r.antecedentesSel.indexOf(txt);
    if (pos >= 0) r.antecedentesSel.splice(pos, 1); else r.antecedentesSel.push(txt);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'resumen' });
  }));

  document.getElementById('btnAntAdd')?.addEventListener('click', async () => {
    const el = document.getElementById('fAntNuevo');
    const value = (el?.value || '').trim();
    if (!value){ toast('Escribe un punto de verificación antes de agregarlo'); return; }
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, 'antecedentesItems', value);
    r.antecedentesSel = r.antecedentesSel || [];
    r.antecedentesSel.push(value);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Agregado y guardado para futuros informes');
    go('wizard', { id, step: 'resumen' });
  });

  document.querySelectorAll('[data-antchkdel]').forEach(b => b.addEventListener('click', async (e) => {
    e.stopPropagation();
    const idx = +b.getAttribute('data-antchkdel');
    const r = await idbGet('reports', id);
    const catalog = await getCatalog(r.typeId);
    const txt = (catalog.antecedentesItems || [])[idx];
    if (!txt) return;
    if (!(await askConfirm(`¿Borrar el punto "${txt}" del listado? No afecta a los informes ya guardados.`))) return;
    await removeCatalogItem(r.typeId, 'antecedentesItems', txt);
    if (r.antecedentesSel){
      const pos = r.antecedentesSel.indexOf(txt);
      if (pos >= 0) r.antecedentesSel.splice(pos, 1);
    }
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Punto eliminado del listado');
    go('wizard', { id, step: 'resumen' });
  }));
}

async function persistCurrentStep(id, step){
  const r = await idbGet('reports', id);
  if (!r) return;
  if (step === 'datos'){
    const corEl = document.getElementById('fCorrelativo'); if (corEl) r.header.correlativo = corEl.value;
    r.header.fecha = document.getElementById('fFecha').value || r.header.fecha;
    r.header.hora = document.getElementById('fHora').value || r.header.hora;
    r.header.turno = document.querySelector('[data-turno].active')?.getAttribute('data-turno') || r.header.turno;
    const periodoInicioEl = document.getElementById('fPeriodoInicio'); if (periodoInicioEl) r.header.periodoInicio = periodoInicioEl.value;
    const periodoFinEl = document.getElementById('fPeriodoFin'); if (periodoFinEl) r.header.periodoFin = periodoFinEl.value;
    const coberturaEl = document.getElementById('fCobertura'); if (coberturaEl) r.header.cobertura = coberturaEl.value;
    const gEl = document.getElementById('fGrupo'); if (gEl) r.header.grupo = gEl.value;
    const aEl = document.getElementById('fArea'); if (aEl) r.header.area = aEl.value;
    const pEl = document.getElementById('fProceso'); if (pEl) r.header.proceso = pEl.value;
    const secEl = document.getElementById('fSector'); if (secEl) r.header.sector = secEl.value;
    const pkEl = document.getElementById('fPk'); if (pkEl) r.header.pk = pkEl.value;
    if (secEl || pkEl) r.header.sectorPk = [r.header.sector, r.header.pk].filter(Boolean).join(' / ');
  } else if (step === 'personal'){
    const t = REPORT_TYPES[r.typeId];
    if (t && (t.kind === 'turno' || t.kind === 'turnogeneral')){
      ['personalNoche', 'personalDia'].forEach(turnoKey => {
        (r[turnoKey] || []).forEach((p, i) => {
          const nombreEl = document.getElementById(`pt_${turnoKey}_${i}_nombre`);
          const cargoEl = document.querySelector(`[data-personalturno="${turnoKey}:${i}:cargo"]`);
          if (nombreEl) p.nombre = nombreEl.value;
          if (cargoEl) p.cargo = cargoEl.value;
        });
      });
    } else {
      r.personal.forEach((p, i) => {
        p.nombre = document.getElementById(`pNom${i}`).value;
        p.cargo = document.getElementById(`pCargo${i}`).value;
      });
    }
  } else if (step === 'resumen'){
    r.objetivo = document.getElementById('fObjetivo').value;
    // Fortificación's Antecedentes checklist persists live via its own click handlers
    // (bindAntecedentesChecklist) — there's no #fAntecedentes textarea to read here.
    const antEl = document.getElementById('fAntecedentes');
    if (antEl) r.antecedentes = antEl.value;
  } else if (step === 'desarrollo'){
    // labor/turno list fields are persisted live via their own handlers; only the plain
    // free-text sections (Planilla de hormigón, Felicitaciones, Desviaciones) for cambio de
    // turno need to be picked up here.
    if (r.turnoGeneral) tgReadDomInto(r);
    const planillaEl = document.getElementById('fTurnoPlanilla');
    if (planillaEl && r.turno) r.turno.planillaHormigon = planillaEl.value;
    const felicitacionesEl = document.getElementById('fTurnoFelicitaciones');
    if (felicitacionesEl && r.turno) r.turno.felicitaciones = felicitacionesEl.value;
    const otrosEl = document.getElementById('fTurnoOtros');
    if (otrosEl && r.turno) r.turno.otros = otrosEl.value;
    // "Detalles de Terminación Internos/por Sistema" manual KPI cards (turnoDetallesTerminacionHtml).
    if (r.turno){
      document.querySelectorAll('[data-turnokpi]').forEach(el => {
        const [blockKey, field] = el.getAttribute('data-turnokpi').split(':');
        if (!r.turno[blockKey]) r.turno[blockKey] = {};
        r.turno[blockKey][field] = el.value;
      });
      document.querySelectorAll('[data-secfotocaption]').forEach(el => {
        const [k, fi] = el.getAttribute('data-secfotocaption').split(':');
        const f = (r.turno[k + 'Fotos'] || [])[+fi];
        if (f) f.caption = el.value;
      });
    }
  } else if (step === 'conclusiones'){
    r.conclusiones = document.getElementById('fConclusiones').value;
  } else if (step === 'firmas'){
    // signatures persisted live on draw-end
  }
  r.updatedAt = Date.now();
  await idbPut('reports', r);
}

/* Forces any text/select field on the current screen that still has an unsaved edit to
   commit it (fires its 'change' handler) before an action button reads the report from
   IndexedDB and re-renders the whole step. Without this, a value the user just typed —
   most commonly a Parada/Perno N° — could still be sitting unsaved in the DOM when they
   tap an unrelated "+"/"🗑" button elsewhere on the screen; that button's own handler reads
   the OLD version of the report from storage, and go()'s re-render then wipes the on-screen
   value that was never actually saved. Called at the top of every add/remove handler in
   bindDesarrollo() so nothing typed just before tapping a button gets silently lost. */
/* Forces any text/select field on the current screen with an unsaved edit to commit it
   (fires its 'change' handler) before an action button reads the report from IndexedDB and
   re-renders the whole step. This checks EVERY text input/textarea/select on the page, not
   just document.activeElement — a real tap on a button can move focus to that button before
   the click handler even runs, so by the time this function checks activeElement it may
   already be too late to catch the field the person was just typing in. Dispatching 'change'
   on every field this way is cheap (there are only a handful per screen) and removes any
   dependency on focus timing entirely — this is what actually fixes "type in Otra
   observación, tap the catalog's + button right next to it, and the typed text disappears":
   that value is now saved before the button's own handler ever reads the report. */
/* Persists every text/select field currently on screen directly into the report object in
   ONE read + ONE write, without going through each field's own 'change' listener — used
   before any action button (add/remove a line, add a photo, etc.) reads the report from
   storage, so nothing the person just typed gets silently discarded by that action re-
   rendering the screen out from under it.
   This used to work by dispatching a synthetic 'change' event on every field instead, which
   correctly reached each field's own save logic — but several of those listeners (notably
   data-paradafield) end their own handler with a full go() re-render. With many hallazgo
   lines on screen (each with several fields), that meant a single flush could fire a dozen-
   plus 'change' events firing a dozen-plus concurrent async go() calls, all racing to
   rebuild the same #app div from their own half-updated copy of the report — which is what
   corrupted the screen into duplicated/stuck content with Atrás/Continuar not responding.
   Writing values directly here instead means flushPendingFields() itself never re-renders;
   only the action that called it does, once, after the flush completes. */
async function flushPendingFields(id){
  const r = await idbGet('reports', id);
  if (!r) return;
  document.querySelectorAll('[data-laborfield]').forEach(el => {
    const parts = el.getAttribute('data-laborfield').split(':');
    if (!r.labores[+parts[0]]) return;
    if (parts.length === 2) r.labores[+parts[0]][parts[1]] = el.value;
    else if (r.labores[+parts[0]].cats[parts[1]]) r.labores[+parts[0]].cats[parts[1]][parts[2]] = el.value;
  });
  document.querySelectorAll('[data-paradafield]').forEach(el => {
    const [idx, pi, key] = el.getAttribute('data-paradafield').split(':');
    const paradas = r.labores[+idx] && r.labores[+idx].paradas;
    if (!paradas || !paradas[+pi]) return;
    const p = normalizeParada(paradas[+pi]);
    paradas[+pi] = p;
    p[key] = el.value;
  });
  document.querySelectorAll('[data-paradaextrafield]').forEach(el => {
    const [idx, pi, ei, key] = el.getAttribute('data-paradaextrafield').split(':');
    const paradas = r.labores[+idx] && r.labores[+idx].paradas;
    if (!paradas || !paradas[+pi]) return;
    const p = normalizeParada(paradas[+pi]);
    paradas[+pi] = p;
    if (!p.extras || !p.extras[+ei]) return;
    p.extras[+ei][key] = el.value;
  });
  // Cambio de Turno's Turno Noche/Día inspector lists (personalTurnoListHtml): the Cargo
  // input uses data-personalturno; the Nombre field is rendered by catFieldHtml, which gives
  // it a plain id ("pt_<turnoKey>_<i>_nombre") rather than a data-* attribute, so it's read
  // by matching that id pattern instead.
  document.querySelectorAll('[data-personalturno]').forEach(el => {
    const [turnoKey, i, key] = el.getAttribute('data-personalturno').split(':');
    const list = r[turnoKey];
    if (!list || !list[+i]) return;
    list[+i][key] = el.value;
  });
  ['personalNoche', 'personalDia'].forEach(turnoKey => {
    (r[turnoKey] || []).forEach((p, i) => {
      const nombreEl = document.getElementById(`pt_${turnoKey}_${i}_nombre`);
      if (nombreEl) p.nombre = nombreEl.value;
    });
  });
  r.updatedAt = Date.now();
  await idbPut('reports', r);
}

function bindDesarrollo(id, isParadasType){
  let dragTargetIdx = null;

  document.getElementById('btnAddLabor').addEventListener('click', async () => {
    await flushPendingFields(id);
    const r = await idbGet('reports', id);
    const l = newLabor();
    // Pre-fill the new registro's title with the Sector entered back in "Datos" (step 1) —
    // saves retyping it for every registro of the same caminata/labor, since in practice
    // they're almost always in the same sector. Falls back to Sector/PK combined if both
    // were filled in; the field stays editable afterward if the user wants to refine it
    // (e.g. add a specific PK range for just this registro).
    l.titulo = r.header.sectorPk || r.header.sector || '';
    r.labores.push(l);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  });

  document.querySelectorAll('[data-rmlabor]').forEach(el => el.addEventListener('click', async () => {
    await flushPendingFields(id);
    const idx = +el.getAttribute('data-rmlabor');
    const r = await idbGet('reports', id);
    r.labores.splice(idx, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-condtab]').forEach(el => el.addEventListener('click', () => {
    const [idx, which] = el.getAttribute('data-condtab').split(':');
    ACTIVE_TAB[idx] = which;
    const card = document.querySelector(`.labor-card[data-labor="${idx}"]`);
    card.querySelectorAll('[data-condtab]').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    card.querySelectorAll('[data-condpane]').forEach(p => {
      const [, w] = p.getAttribute('data-condpane').split(':');
      p.style.display = (w === which) ? 'block' : 'none';
    });
  }));

  document.querySelectorAll('[data-laborfield]').forEach(el => {
    // Debounced save-as-you-type for free-text fields (the "custom" textareas), so the value
    // is committed to storage well before any button elsewhere on the screen gets tapped —
    // not dependent on the field ever firing 'blur'/'change' at all. This is what fixes the
    // report of typing something in "Otra observación" and having it vanish after tapping
    // the catalog's "+" button right next to it: previously that value only got saved on
    // blur, and a fast tap-away-to-another-control could beat the blur/change timing.
    let debounceTimer = null;
    const persist = async () => {
      const parts = el.getAttribute('data-laborfield').split(':');
      const r = await idbGet('reports', id);
      if (parts.length === 2){
        r.labores[+parts[0]][parts[1]] = el.value;
      } else {
        ACTIVE_TAB[parts[0]] = parts[1];
        r.labores[+parts[0]].cats[parts[1]][parts[2]] = el.value;
      }
      r.updatedAt = Date.now();
      await idbPut('reports', r);
    };
    if (el.tagName === 'TEXTAREA'){
      el.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(persist, 400);
      });
    }
    el.addEventListener('change', () => { clearTimeout(debounceTimer); persist(); });
  });

  /* ---- Caminata Interna: PARADA N° / PERNO N° structured builder ---- */
  document.querySelectorAll('[data-addparada]').forEach(el => el.addEventListener('click', async () => {
    await flushPendingFields(id);
    const idx = +el.getAttribute('data-addparada');
    const r = await idbGet('reports', id);
    r.labores[idx].paradas = r.labores[idx].paradas || [];
    r.labores[idx].paradas.push(newParada());
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-paradafield]').forEach(el => el.addEventListener('change', async () => {
    const [idx, pi, key] = el.getAttribute('data-paradafield').split(':');
    const r = await idbGet('reports', id);
    const paradas = r.labores[+idx].paradas || [];
    let p = paradas[+pi];
    if (!p) return;
    p = normalizeParada(p);
    paradas[+pi] = p;
    p[key] = el.value;
    if (key === 'tipo' && el.value !== 'SHOTCRETE SOPLADO') p.ubic = '';
    ACTIVE_TAB[idx] = 'desviacion';
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-paradadel]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, pi] = b.getAttribute('data-paradadel').split(':');
    const r = await idbGet('reports', id);
    const paradas = r.labores[+idx].paradas || [];
    const p = paradas[+pi];
    const preview = p ? composeParada(p) : '';
    // Confirm before deleting so an accidental tap (easy to do in the field, one-handed,
    // without signal) never silently wipes a filled-in Parada/Perno line — this is the exact
    // data-loss scenario reported after using the app offline.
    const msg = preview
      ? `¿Quitar esta línea?\n\n"${preview}"\n\nEsta acción no se puede deshacer.`
      : '¿Quitar esta línea (todavía vacía)?';
    if (!(await askConfirm(msg))) return;
    paradas.splice(+pi, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  // "+ Agregar otro Perno N°" — appends one more entry to the parada's "extras" array, for
  // the (occasional) case where the same Parada has three, four, or more Pernos sharing the
  // identical defect (e.g. "PARADA N°3, PERNO N°1, PERNO N°3, PERNO N°5 CORTADOS" instead of
  // writing several separate lines for the same parada). No fixed limit — the button stays
  // available after each addition so another can be appended right after it. Defaults each
  // new entry's label to "PERNO N°" since that's what this is for in practice; the person
  // can still switch any individual one to "PARADA N°" from its own dropdown if needed.
  document.querySelectorAll('[data-paradaextraadd]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, pi] = b.getAttribute('data-paradaextraadd').split(':');
    const r = await idbGet('reports', id);
    const paradas = r.labores[+idx].paradas || [];
    let p = paradas[+pi];
    if (!p) return;
    p = normalizeParada(p);
    paradas[+pi] = p;
    p.extras = p.extras || [];
    p.extras.push(newExtraSlot());
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));
  document.querySelectorAll('[data-paradaextradel]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, pi, ei] = b.getAttribute('data-paradaextradel').split(':');
    const r = await idbGet('reports', id);
    const paradas = r.labores[+idx].paradas || [];
    const p = paradas[+pi];
    if (!p || !p.extras) return;
    p.extras.splice(+ei, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));
  document.querySelectorAll('[data-paradaextrafield]').forEach(el => el.addEventListener('change', async () => {
    const [idx, pi, ei, key] = el.getAttribute('data-paradaextrafield').split(':');
    const r = await idbGet('reports', id);
    const paradas = r.labores[+idx].paradas || [];
    const p = paradas[+pi];
    if (!p || !p.extras || !p.extras[+ei]) return;
    p.extras[+ei][key] = el.value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  /* ＋ / 🗑 for the tipo / ubicación catalogs used by each parada row's dropdowns — same
     "add or remove a frequent phrase" pattern as Objetivo/Antecedentes (catFieldHtml), acting
     only on the shared catalog list, never on the parada row's own data. This is deliberately
     separate from data-paradadel (which removes the whole line) so there is exactly one place
     in the UI that can delete a filled-in Parada/Perno line, and it always asks first. */
  document.querySelectorAll('[data-paradacatnew]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, pi, key] = b.getAttribute('data-paradacatnew').split(':');
    const sel = document.querySelector(`[data-paradafield="${idx}:${pi}:${key}"]`);
    const current = sel ? sel.value : '';
    const label = key === 'ubic' ? 'ubicación' : 'tipo de desviación';
    const text = await askText(`Nuevo ${label} para guardar en el listado:`, current || '');
    if (!text || !text.trim()) return;
    const phrase = text.trim().toUpperCase();
    const catalogKey = key === 'ubic' ? 'ubicacionShotcrete' : 'tipo';
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, catalogKey, phrase);
    // Also apply it to this row right away, so the user doesn't have to pick it again.
    const paradas = r.labores[+idx].paradas || [];
    let p = normalizeParada(paradas[+pi]);
    if (p){ paradas[+pi] = p; p[key] = phrase; if (key === 'tipo' && phrase !== 'SHOTCRETE SOPLADO') p.ubic = ''; }
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast(`Agregado al listado de ${label==='ubicación'?'ubicaciones':'tipos'}`);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-paradacatdel]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, pi, key] = b.getAttribute('data-paradacatdel').split(':');
    const sel = document.querySelector(`[data-paradafield="${idx}:${pi}:${key}"]`);
    const value = sel ? sel.value : '';
    const label = key === 'ubic' ? 'ubicación' : 'tipo';
    if (!value){ toast(`Elige primero un ${label} del listado para poder borrarlo`); return; }
    if (!(await askConfirm(`¿Borrar "${value}" del listado de ${label==='ubicación'?'ubicaciones':'tipos'}?\n\nEsto solo afecta el listado de sugerencias — no borra ninguna línea ya guardada en este informe.`))) return;
    const catalogKey = key === 'ubic' ? 'ubicacionShotcrete' : 'tipo';
    const r = await idbGet('reports', id);
    await removeCatalogItem(r.typeId, catalogKey, value);
    toast('Eliminado del listado');
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-addchip]').forEach(sel => sel.addEventListener('change', async () => {
    const [idx, cat] = sel.getAttribute('data-addchip').split(':');
    const val = sel.value;
    if (!val) return;
    ACTIVE_TAB[idx] = cat;
    const r = await idbGet('reports', id);
    const arr = r.labores[+idx].cats[cat].sel;
    if (!arr.includes(val)) arr.push(val);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-rmchip]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, cat, ci] = b.getAttribute('data-rmchip').split(':');
    ACTIVE_TAB[idx] = cat;
    const r = await idbGet('reports', id);
    r.labores[+idx].cats[cat].sel.splice(+ci, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  /* Torque only: appends a typed plano number to whichever selected observation in this
     category ends in "...Plano" — used by both the "＋ Agregar al listado" button (which
     asks for the number via a modal) and the dedicated plano text field that replaces the
     free-text "Otra observación" textarea for this report type. Returns true if it applied
     the number, false if it couldn't (no matching observation, or the person cancelled a
     multi-match choice) so callers can decide what to do next (e.g. leave the input as-is). */
  async function appendPlanoNumber(idx, cat, num){
    if (!num || !num.trim()) return false;
    const r0 = await idbGet('reports', id);
    const sel = r0.labores[+idx].cats[cat].sel || [];
    const planoIdxs = sel.map((s,i) => /plano$/i.test(s.trim()) ? i : -1).filter(i => i >= 0);
    if (!planoIdxs.length){
      toast(`Primero elige (o agrega) una observación que termine en "Plano" en ${CAT_LABELS[cat]}, luego escribe aquí el N°`);
      return false;
    }
    let targetIdx = planoIdxs[0];
    if (planoIdxs.length > 1){
      const choice = await askChoice('¿A cuál observación corresponde este N° de Plano?', planoIdxs.map(i => ({ value:String(i), label:sel[i] })));
      if (choice === null) return false;
      targetIdx = +choice;
    }
    const r = await idbGet('reports', id);
    const selNow = r.labores[+idx].cats[cat].sel;
    // Re-locate the same observation by its (pre-edit) text, in case anything shifted the
    // array between the read above and this one — flushPendingFields/askText/askChoice all
    // yield to the event loop, so re-reading fresh here avoids acting on a stale index.
    const baseText = sel[targetIdx];
    const liveIdx = selNow.indexOf(baseText);
    if (liveIdx === -1){ toast('La observación ya no está seleccionada — vuelve a intentarlo'); return false; }
    selNow[liveIdx] = `${baseText} ${num.trim()}`;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    return true;
  }

  document.querySelectorAll('[data-newcatalog]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, cat] = b.getAttribute('data-newcatalog').split(':');
    const r0 = await idbGet('reports', id);
    const t0 = REPORT_TYPES[r0.typeId];
    const isTorquePlano = t0 && t0.catalogCta === 'N° de Plano';
    if (isTorquePlano){
      // Torque: the plano number doesn't create a new, separate list entry — it completes
      // whichever already-selected observation in this category ends in "...PLANO", turning
      // "TORQUE CUMPLE VALOR ESPECIFICADO EN PLANO" into "...EN PLANO 1234" in place. This
      // replaces the earlier version, which added "PLANO 1234" as its own numbered item —
      // that read as two disconnected lines in the PDF ("1. Torque cumple..." / "2. PLANO
      // 1234") instead of one complete sentence, which is what was actually wanted.
      const num = await askText('N° de Plano:');
      const applied = await appendPlanoNumber(idx, cat, num);
      if (applied){ toast('N° de Plano agregado'); go('wizard', { id, step: 'desarrollo' }); }
      return;
    }
    const text = await askText(`Nueva observación frecuente — ${CAT_LABELS[cat]}:`);
    if (!text || !text.trim()) return;
    let phrase = text.trim();
    ACTIVE_TAB[idx] = cat;
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, cat, phrase);
    if (!r.labores[+idx].cats[cat].sel.includes(phrase)) r.labores[+idx].cats[cat].sel.push(phrase);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Observación agregada al listado');
    go('wizard', { id, step: 'desarrollo' });
  }));

  // Torque's dedicated "N° de Plano" field, replacing the generic free-text "Otra
  // observación" textarea for this report type only (see condPaneHtml). Typing a number and
  // leaving the field appends it to whichever selected observation ends in "...Plano" —
  // same appendPlanoNumber() logic as the "＋" button above, just triggered by typing here
  // directly instead of a separate modal. The field clears itself afterward since the
  // number is now part of the observation text itself, not a value that field should keep
  // holding onto.
  document.querySelectorAll('[data-torqueplanofield]').forEach(inp => inp.addEventListener('change', async () => {
    const [idx, cat] = inp.getAttribute('data-torqueplanofield').split(':');
    const applied = await appendPlanoNumber(idx, cat, inp.value);
    if (applied){
      toast('N° de Plano agregado');
      go('wizard', { id, step: 'desarrollo' });
    } else {
      inp.value = ''; // clear rather than leave a number stuck with nowhere to attach
    }
  }));

  document.querySelectorAll('[data-delcatalog]').forEach(b => b.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, cat] = b.getAttribute('data-delcatalog').split(':');
    // Ask which catalog entry to remove via its own modal instead of reading whatever the
    // "＋ Elegir observación frecuente…" dropdown happens to have selected — that dropdown's
    // own 'change' handler (see [data-addchip] above) both adds the picked phrase as a chip
    // AND re-renders the whole screen, which resets the dropdown back to its blank default
    // option. That meant picking something there specifically to delete it actually added it
    // as an unwanted chip, and by the time this button was tapped the dropdown had already
    // reset — so this always silently found nothing selected and never deleted anything at
    // all. This is what "no me deja... borrar las que ya no use" turned out to be.
    const r0 = await idbGet('reports', id);
    const catalog0 = await getCatalog(r0.typeId);
    const options = catalog0[cat] || [];
    if (!options.length){ toast('No hay observaciones guardadas en el listado todavía'); return; }
    const value = await askChoice('¿Qué observación quieres borrar del listado?', options.map(o => ({ value:o, label:o })));
    if (!value) return;
    if (!(await askConfirm(`¿Borrar "${value}" del listado de observaciones frecuentes? No afecta a los informes ya guardados.`))) return;
    ACTIVE_TAB[idx] = cat;
    const r = await idbGet('reports', id);
    await removeCatalogItem(r.typeId, cat, value);
    toast('Observación eliminada del listado');
    go('wizard', { id, step: 'desarrollo' });
  }));

  const photoInput = document.getElementById('photoInput');
  const photoInputGallery = document.getElementById('photoInputGallery');
  let dragTargetCat = 'positiva';
  // Opens the file/camera picker for the given labor index + category, called either
  // directly (Caminata Interna, no category to ask about) or after the person answers the
  // category modal (every other report type) — see the two call sites below. Crucially,
  // openPicker() itself never awaits anything before calling input.click(): browsers only
  // honor a programmatic input.click() as a real user gesture when it happens synchronously
  // inside the click handler (or, for the modal path, inside the modal button's own click
  // handler) that the person actually tapped. Any `await` in between — even something as
  // innocuous as reading the report from IndexedDB — breaks that chain, and the browser
  // silently refuses to open the camera/gallery at all instead of erroring, which is exactly
  // what was reported: neither Cámara nor Galería did anything in Caminata Interna, because
  // the previous version awaited idbGet() before ever calling input.click().
  function openPicker(idx, cat, input){
    dragTargetIdx = idx;
    dragTargetCat = cat;
    input.value = '';
    input.click();
  }
  // Same category question as askChoice(), but built inline instead of going through that
  // shared Promise-returning helper — a Promise resolving via .then()/await still introduces
  // a microtask between "person tapped a category button" and "input.click() runs", and some
  // mobile browsers are strict enough that even that microtask-length gap is enough to no
  // longer treat input.click() as triggered by a trusted user gesture (silently refusing to
  // open the camera/gallery, no error, nothing — this was the second half of the reported
  // bug: it also broke Cámara/Galería in every OTHER report type, not just Caminata Interna,
  // once the category question was added there). Calling openPicker() directly inside each
  // choice button's own click handler keeps input.click() perfectly synchronous with that tap.
  function openCategoryModalThenPicker(idx, input){
    const root = document.getElementById('modalRoot');
    const buttons = CAT_KEYS.map(k => `<button type="button" class="btn modal-choice" data-photocatchoice="${k}">${escapeHtml(CAT_LABELS[k])}</button>`).join('');
    root.innerHTML = `
    <div class="modal-backdrop" data-modalcancel>
      <div class="modal-box" role="dialog" aria-modal="true">
        <div class="modal-msg">¿A qué corresponde esta foto?</div>
        <div class="modal-choices">${buttons}</div>
        <div class="modal-actions">
          <button type="button" class="btn" data-modalcancel>Cancelar</button>
        </div>
      </div>
    </div>`;
    root.querySelectorAll('[data-photocatchoice]').forEach(btn => btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-photocatchoice');
      closeModal();
      openPicker(idx, cat, input); // synchronous: still inside this button's own click handler
    }));
    root.querySelectorAll('[data-modalcancel]').forEach(el => el.addEventListener('click', (e) => {
      if (e.target === el) closeModal();
    }));
  }
  document.querySelectorAll('[data-addphoto]').forEach(el => el.addEventListener('click', () => {
    const idx = +el.getAttribute('data-addphoto');
    if (isParadasType){
      // Caminata Interna: photos are numbered against the desviación list (see the "N°"
      // dropdown on each thumbnail) rather than sorted into three tabs, so there's no real
      // category ambiguity to ask about — go straight to desviación, synchronously, so the
      // click-to-open-camera chain never breaks.
      openPicker(idx, 'desviacion', photoInput);
    } else {
      openCategoryModalThenPicker(idx, photoInput);
    }
  }));
  document.querySelectorAll('[data-addphotogallery]').forEach(el => el.addEventListener('click', () => {
    const idx = +el.getAttribute('data-addphotogallery');
    if (isParadasType){
      openPicker(idx, 'desviacion', photoInputGallery);
    } else {
      openCategoryModalThenPicker(idx, photoInputGallery);
    }
  }));
  async function handlePhotoFiles(fileList){
    if (!fileList.length) return;
    await flushPendingFields(id);
    toast('Procesando fotos…', 1500);
    const r = await idbGet('reports', id);
    const cat = dragTargetCat || 'positiva';
    for (const file of fileList){
      try { const dataUrl = await fileToCompressedDataURL(file); r.labores[dragTargetIdx].fotos.push({ url: dataUrl, cat }); }
      catch(e){ console.error(e); }
    }
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }
  photoInput.addEventListener('change', () => handlePhotoFiles(photoInput.files));
  photoInputGallery.addEventListener('change', () => handlePhotoFiles(photoInputGallery.files));

  document.querySelectorAll('[data-photocat]').forEach(sel => sel.addEventListener('change', async () => {
    const [idx, fi] = sel.getAttribute('data-photocat').split(':').map(Number);
    const r = await idbGet('reports', id);
    const f = r.labores[idx].fotos[fi];
    // Preserve caption across a category change — reconstructing the foto object here used
    // to drop it (only url/cat/num were carried over), silently erasing whatever leyenda had
    // been typed if the person then changed which category the photo belonged to.
    r.labores[idx].fotos[fi] = { url: fotoUrl(f), cat: sel.value, num: fotoNum(f), caption: fotoCaption(f) };
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-photonum]').forEach(sel => sel.addEventListener('change', async () => {
    const [idx, fi] = sel.getAttribute('data-photonum').split(':').map(Number);
    const r = await idbGet('reports', id);
    const f = r.labores[idx].fotos[fi];
    r.labores[idx].fotos[fi] = { url: fotoUrl(f), cat: fotoCat(f), num: sel.value ? +sel.value : null, caption: fotoCaption(f) };
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }));

  // Picking one of the category's already-written observations copies its full text into
  // the caption field right below — the caption stays freely editable afterward either way,
  // same idea as Caminata Interna's "N° hallazgo" dropdown but for the plain
  // positiva/desviación/correctiva categories (free-text chips, not a fixed numbered list).
  document.querySelectorAll('[data-photoobs]').forEach(sel => sel.addEventListener('change', async () => {
    if (!sel.value) return;
    const [idx, fi] = sel.getAttribute('data-photoobs').split(':').map(Number);
    const r = await idbGet('reports', id);
    const f = r.labores[idx].fotos[fi];
    r.labores[idx].fotos[fi] = { url: fotoUrl(f), cat: fotoCat(f), num: fotoNum(f), caption: sel.value };
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-photocaption]').forEach(inp => inp.addEventListener('change', async () => {
    const [idx, fi] = inp.getAttribute('data-photocaption').split(':').map(Number);
    const r = await idbGet('reports', id);
    const f = r.labores[idx].fotos[fi];
    r.labores[idx].fotos[fi] = { url: fotoUrl(f), cat: fotoCat(f), num: fotoNum(f), caption: inp.value };
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }));

  document.querySelectorAll('[data-delphoto]').forEach(el => el.addEventListener('click', async () => {
    await flushPendingFields(id);
    const [idx, fi] = el.getAttribute('data-delphoto').split(':').map(Number);
    const r = await idbGet('reports', id);
    r.labores[idx].fotos.splice(fi, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));
}

function bindDesarrolloTurno(id){
  /* Persists every data-turnofield currently on screen directly into the report in ONE
     read + ONE write, before any add/remove-row button reads the report from storage — same
     fix, same reasoning as flushPendingFields() for the paradas-based screens: those buttons
     only fired their own field's 'change' listener on blur, so typing into "Ubicación" or
     "ID protocolo" in one row and then tapping "+ Agregar fila" (or a nearby row's own "+")
     before that field lost focus meant the value was still sitting unsaved in the DOM when
     the button's own handler read the report — and its own re-render then wiped whatever
     hadn't been saved yet. This is what "agrego un registro nuevo y se me borra la
     ubicación/ID del anterior" turned out to be. */
  async function flushTurnoFields(){
    const r = await idbGet('reports', id);
    if (!r) return;
    document.querySelectorAll('[data-turnofield]').forEach(el => {
      const [sectionKey, idxStr, key] = el.getAttribute('data-turnofield').split(':');
      if (!r.turno[sectionKey] || !r.turno[sectionKey][+idxStr]) return;
      r.turno[sectionKey][+idxStr][key] = el.value;
    });
    const planillaEl = document.getElementById('fTurnoPlanilla');
    if (planillaEl) r.turno.planillaHormigon = planillaEl.value;
    const felicitacionesEl = document.getElementById('fTurnoFelicitaciones');
    if (felicitacionesEl) r.turno.felicitaciones = felicitacionesEl.value;
    const otrosEl = document.getElementById('fTurnoOtros');
    if (otrosEl) r.turno.otros = otrosEl.value;
    document.querySelectorAll('[data-turnokpi]').forEach(el => {
      const [blockKey, field] = el.getAttribute('data-turnokpi').split(':');
      if (!r.turno[blockKey]) r.turno[blockKey] = {};
      r.turno[blockKey][field] = el.value;
    });
    document.querySelectorAll('[data-secfotocaption]').forEach(el => {
      const [k, fi] = el.getAttribute('data-secfotocaption').split(':');
      const f = (r.turno[k + 'Fotos'] || [])[+fi];
      if (f) f.caption = el.value;
    });
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }

  document.querySelectorAll('[data-turnoadd]').forEach(el => el.addEventListener('click', async () => {
    await flushTurnoFields();
    const sectionKey = el.getAttribute('data-turnoadd');
    const r = await idbGet('reports', id);
    (r.turno[sectionKey] = r.turno[sectionKey] || []).push(newTurnoItem(sectionKey));
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-rmturno]').forEach(el => el.addEventListener('click', async () => {
    await flushTurnoFields();
    const [sectionKey, idxStr] = el.getAttribute('data-rmturno').split(':');
    const r = await idbGet('reports', id);
    r.turno[sectionKey].splice(+idxStr, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.querySelectorAll('[data-turnofield]').forEach(el => {
    el.addEventListener('change', async () => {
      const [sectionKey, idxStr, key] = el.getAttribute('data-turnofield').split(':');
      const r = await idbGet('reports', id);
      if (!r.turno[sectionKey][+idxStr]) return;
      r.turno[sectionKey][+idxStr][key] = el.value;
      r.updatedAt = Date.now();
      await idbPut('reports', r);
    });
  });

  document.querySelectorAll('[data-turnoaddcat]').forEach(sel => sel.addEventListener('change', async () => {
    await flushTurnoFields();
    const [sectionKey, idxStr, key] = sel.getAttribute('data-turnoaddcat').split(':');
    const val = sel.value;
    if (!val) return;
    const r = await idbGet('reports', id);
    r.turno[sectionKey][+idxStr][key] = val;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  // The "＋" next to each catalog dropdown: prompts for a brand-new value, saves it into
  // that field's catalog (so it shows up in the dropdown on this and future informes of
  // this type), and applies it to the current row right away.
  document.querySelectorAll('[data-turnonewcat]').forEach(b => b.addEventListener('click', async () => {
    await flushTurnoFields();
    const [sectionKey, idxStr, key, catKey] = b.getAttribute('data-turnonewcat').split(':');
    const text = await askText('Nuevo valor — quedará guardado para elegirlo en futuros informes:');
    if (!text || !text.trim()) return;
    const phrase = text.trim();
    const r = await idbGet('reports', id);
    await addCatalogItem(r.typeId, catKey, phrase);
    if (!r.turno[sectionKey][+idxStr]) r.turno[sectionKey][+idxStr] = newTurnoItem(sectionKey);
    r.turno[sectionKey][+idxStr][key] = phrase;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    toast('Valor agregado al listado para futuros informes');
    go('wizard', { id, step: 'desarrollo' });
  }));

  // The "🗑" next to each catalog dropdown: deletes whatever is currently selected in
  // that dropdown from the catalog itself (not just from this row), so a typo doesn't
  // stay offered forever.
  document.querySelectorAll('[data-turnodelcat]').forEach(b => b.addEventListener('click', async () => {
    await flushTurnoFields();
    const [sectionKey, idxStr, key, catKey] = b.getAttribute('data-turnodelcat').split(':');
    // Same fix as data-delcatalog above: ask via its own modal instead of reading the
    // "＋ Elegir…" dropdown's current selection, since picking anything there fires its own
    // 'change' handler which both applies that value to the row AND re-renders the screen —
    // resetting the dropdown back to blank before this delete button could ever read it.
    const r0 = await idbGet('reports', id);
    const catalog0 = await getCatalog(r0.typeId);
    const options = catalog0[catKey] || [];
    if (!options.length){ toast('No hay frases guardadas en el listado todavía'); return; }
    const value = await askChoice('¿Qué frase quieres borrar del listado?', options.map(o => ({ value:o, label:o })));
    if (!value) return;
    if (!(await askConfirm(`¿Borrar "${value}" del listado de frecuentes? No afecta a los informes ya guardados.`))) return;
    const r = await idbGet('reports', id);
    await removeCatalogItem(r.typeId, catKey, value);
    toast('Frase eliminada del listado');
    go('wizard', { id, step: 'desarrollo' });
  }));

  document.getElementById('fTurnoPlanilla')?.addEventListener('change', async () => {
    const r = await idbGet('reports', id);
    r.turno.planillaHormigon = document.getElementById('fTurnoPlanilla').value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  });

  document.getElementById('fTurnoFelicitaciones')?.addEventListener('change', async () => {
    const r = await idbGet('reports', id);
    r.turno.felicitaciones = document.getElementById('fTurnoFelicitaciones').value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  });

  document.getElementById('fTurnoOtros')?.addEventListener('change', async () => {
    const r = await idbGet('reports', id);
    r.turno.otros = document.getElementById('fTurnoOtros').value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  });

  // "Detalles de Terminación Internos/por Sistema" manual KPI card inputs (turnoDetallesTerminacionHtml).
  document.querySelectorAll('[data-turnokpi]').forEach(el => el.addEventListener('change', async () => {
    const [blockKey, field] = el.getAttribute('data-turnokpi').split(':');
    const r = await idbGet('reports', id);
    if (!r.turno[blockKey]) r.turno[blockKey] = {};
    r.turno[blockKey][field] = el.value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }));

  // ---- H.- Registro fotográfico: camera or gallery, each photo gets its own leyenda ----
  const turnoPhotoInput = document.getElementById('turnoPhotoInput');
  const turnoPhotoInputGallery = document.getElementById('turnoPhotoInputGallery');
  document.getElementById('btnTurnoAddPhoto')?.addEventListener('click', () => {
    turnoPhotoInput.value = '';
    turnoPhotoInput.click();
  });
  document.getElementById('btnTurnoAddPhotoGallery')?.addEventListener('click', () => {
    turnoPhotoInputGallery.value = '';
    turnoPhotoInputGallery.click();
  });
  async function handleTurnoPhotoFiles(fileList){
    if (!fileList.length) return;
    toast('Procesando fotos…', 1500);
    const r = await idbGet('reports', id);
    r.turno.fotos = r.turno.fotos || [];
    for (const file of fileList){
      try { const dataUrl = await fileToCompressedDataURL(file); r.turno.fotos.push({ url: dataUrl, caption: '' }); }
      catch(e){ console.error(e); }
    }
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }
  turnoPhotoInput?.addEventListener('change', () => handleTurnoPhotoFiles(turnoPhotoInput.files));
  turnoPhotoInputGallery?.addEventListener('change', () => handleTurnoPhotoFiles(turnoPhotoInputGallery.files));

  document.querySelectorAll('[data-delturnofoto]').forEach(b => b.addEventListener('click', async () => {
    const fi = +b.getAttribute('data-delturnofoto');
    if (!(await askConfirm('¿Quitar esta foto del registro? Esta acción no se puede deshacer.'))) return;
    await flushTurnoFields();
    const r = await idbGet('reports', id);
    (r.turno.fotos || []).splice(fi, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));

  // ---- Per-section photos (D, E, F, G, J, K, L): one shared pair of hidden inputs pointed at
  // whichever section's Cámara / Galería button was tapped last (input.click() stays
  // synchronous inside the tap so phones allow it). ----
  const secInput = document.getElementById('secPhotoInput');
  const secInputGallery = document.getElementById('secPhotoInputGallery');
  let secPhotoKey = null;
  document.querySelectorAll('[data-secaddphoto]').forEach(b => b.addEventListener('click', () => {
    secPhotoKey = b.getAttribute('data-secaddphoto');
    secInput.value = ''; secInput.click();
  }));
  document.querySelectorAll('[data-secaddphotogallery]').forEach(b => b.addEventListener('click', () => {
    secPhotoKey = b.getAttribute('data-secaddphotogallery');
    secInputGallery.value = ''; secInputGallery.click();
  }));
  async function handleSecFiles(fileList){
    if (!fileList.length || !secPhotoKey) return;
    toast('Procesando fotos…', 1500);
    const key = secPhotoKey + 'Fotos';
    await flushTurnoFields();
    const r = await idbGet('reports', id);
    r.turno[key] = r.turno[key] || [];
    for (const file of fileList){
      try { const dataUrl = await fileToCompressedDataURL(file); r.turno[key].push({ url: dataUrl, caption: '' }); }
      catch(e){ console.error(e); }
    }
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }
  secInput?.addEventListener('change', () => handleSecFiles(secInput.files));
  secInputGallery?.addEventListener('change', () => handleSecFiles(secInputGallery.files));
  document.querySelectorAll('[data-secdelfoto]').forEach(b => b.addEventListener('click', async () => {
    const [k, fiStr] = b.getAttribute('data-secdelfoto').split(':');
    if (!(await askConfirm('¿Quitar esta foto del registro? Esta acción no se puede deshacer.'))) return;
    await flushTurnoFields();
    const r = await idbGet('reports', id);
    (r.turno[k + 'Fotos'] || []).splice(+fiStr, 1);
    r.updatedAt = Date.now();
    await idbPut('reports', r);
    go('wizard', { id, step: 'desarrollo' });
  }));
  document.querySelectorAll('[data-secfotocaption]').forEach(el => el.addEventListener('change', async () => {
    const [k, fiStr] = el.getAttribute('data-secfotocaption').split(':');
    const r = await idbGet('reports', id);
    const f = (r.turno[k + 'Fotos'] || [])[+fiStr];
    if (!f) return;
    f.caption = el.value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }));

  document.querySelectorAll('[data-turnofotocaption]').forEach(el => el.addEventListener('change', async () => {
    const fi = +el.getAttribute('data-turnofotocaption');
    const r = await idbGet('reports', id);
    if (!r.turno.fotos || !r.turno.fotos[fi]) return;
    r.turno.fotos[fi].caption = el.value;
    r.updatedAt = Date.now();
    await idbPut('reports', r);
  }));
}

/* ---- signature pad ---- */
function setupSignaturePad(canvas, existingDataUrl, onChange){
  const ctx = canvas.getContext('2d');
  const ratio = window.devicePixelRatio || 1;
  function resize(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.scale(ratio, ratio);
    ctx.lineWidth = 2.0;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1a3fd1';
    if (existingDataUrl){
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
      img.src = existingDataUrl;
    }
  }
  resize();
  let drawing = false, last = null;
  function pos(e){
    const rect = canvas.getBoundingClientRect();
    const cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    return { x: cx, y: cy };
  }
  function start(e){ e.preventDefault(); drawing = true; last = pos(e); }
  function move(e){
    if (!drawing) return;
    e.preventDefault();
    const p = pos(e);
    ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke();
    last = p;
  }
  function end(e){
    if (!drawing) return;
    drawing = false;
    onChange(canvas.toDataURL('image/png'));
  }
  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  window.addEventListener('pointerup', end);
  canvas.addEventListener('touchstart', start, { passive:false });
  canvas.addEventListener('touchmove', move, { passive:false });
  canvas.addEventListener('touchend', end);
  return {
    clear(){ ctx.clearRect(0,0,canvas.width,canvas.height); onChange(null); }
  };
}

function bindFirmas(id){
  document.querySelectorAll('.sigpad').forEach(async (canvas) => {
    const idx = +canvas.getAttribute('data-sigidx');
    const r = await idbGet('reports', id);
    const pad = setupSignaturePad(canvas, r.personal[idx].firma, async (dataUrl) => {
      // A signature with no name saved next to it in the PDF prints "—" where the inspector's
      // name should go — the drawn signature alone doesn't identify who signed, so it isn't
      // real proof of terreno conformity even though it looks complete on screen. Block it
      // right here, at the moment of drawing, rather than letting an unnamed signature sit
      // saved until PDF generation surfaces the problem too late to fix on site.
      if (dataUrl){
        const rCheck = await idbGet('reports', id);
        if (!(rCheck.personal[idx].nombre || '').trim()){
          canvas._pad?.clear();
          await askConfirm(`Antes de firmar, completa el nombre del Inspector ${idx+1} en el paso "Personal en turno" — si no, en el PDF aparece la firma sin ningún nombre asociado.`);
          return;
        }
      }
      const rr = await idbGet('reports', id);
      rr.personal[idx].firma = dataUrl;
      rr.personal[idx].firmadoEn = dataUrl ? Date.now() : null;
      rr.updatedAt = Date.now();
      await idbPut('reports', rr);
      const statusEl = document.getElementById(`sigStatus${idx}`);
      if (statusEl){
        statusEl.textContent = dataUrl ? 'Firmado' : 'Pendiente';
        statusEl.classList.toggle('signed', !!dataUrl);
        statusEl.classList.toggle('pending', !dataUrl);
      }
    });
    canvas._pad = pad;
  });
  document.querySelectorAll('[data-clearsig]').forEach(el => el.addEventListener('click', () => {
    const idx = el.getAttribute('data-clearsig');
    const canvas = document.getElementById(`sig${idx}`);
    canvas._pad?.clear();
  }));
}

function bindRevision(id){
  document.getElementById('btnGenPdf').addEventListener('click', async () => {
    const r = await idbGet('reports', id);
    await previewPdf(r);
  });
  document.getElementById('btnSharePdf').addEventListener('click', async () => {
    const r = await idbGet('reports', id);
    await generateAndOfferPdf(r, { autoOfferShare:true });
  });
  // Only rendered for Cambio de Turno General (see stepRevisionTurnoGeneral) — every other
  // report type's revision screen has no such button, hence the null check.
  const btnShareDraft = document.getElementById('btnShareDraft');
  if (btnShareDraft){
    btnShareDraft.addEventListener('click', async () => {
      flushPendingFields();
      const r = await idbGet('reports', id);
      await shareDraftForHandoff(r);
    });
  }
}

/* ---------------------- Hand-off: share an unfinished informe so someone else can finish it ----------------------
   Cambio de Turno General only. Exports the whole report record (datos, personal, todas las
   secciones, fotos y firmas) as a small JSON file the other person imports from the home
   screen ("Recibir informe compartido" -> importSharedDraft). It never touches r.status on the
   sender's side: this is a hand-off of work in progress, not the PDF being finalized/sent. */
const DRAFT_FILE_MARKER = 'informes-goms-borrador';
function draftFilename(r){
  const t = REPORT_TYPES[r.typeId];
  const fecha = r.header.periodoInicio || r.header.fecha || todayISO();
  return `Borrador_${(t && t.short ? t.short : 'Informe').replace(/[^\w\-]+/g, '_')}_${fecha}.json`;
}
async function shareDraftForHandoff(r){
  if (!r) return;
  const payload = { marker: DRAFT_FILE_MARKER, version: 1, exportedAt: Date.now(), report: r };
  const json = JSON.stringify(payload);
  const filename = draftFilename(r);
  // Some mobile browsers only allow a short list of MIME types in the share sheet and reject
  // application/json — so try it first, then plain text with the same .json filename (the
  // importer reads the content, not the MIME type), then fall back to a plain download.
  const candidates = ['application/json', 'text/plain'].map(type => new File([json], filename, { type }));
  for (const file of candidates){
    if (navigator.canShare && navigator.canShare({ files: [file] })){
      try {
        await navigator.share({ files: [file], title: filename, text: 'Borrador de informe para que lo termines en la app Informes GOMS (Inicio → Recibir informe compartido).' });
        toast('Borrador compartido');
        return;
      } catch(e){
        if (e && e.name === 'AbortError') return; // person closed the share sheet on purpose
      }
    }
  }
  const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  toast('Borrador guardado en tus descargas — envíalo por WhatsApp o correo');
}
/* Reads a file produced by shareDraftForHandoff and adds it to this device as a NEW draft
   (fresh id, so it never overwrites a report that already exists here — including the
   sender's own copy if both happen to share a device). Returns the new report id or null. */
async function importSharedDraft(file){
  let data;
  try { data = JSON.parse(await file.text()); }
  catch(e){ toast('El archivo no se pudo leer. Pide que te lo vuelvan a enviar.'); return null; }
  const rep = data && data.marker === DRAFT_FILE_MARKER ? data.report : null;
  if (!rep || !rep.typeId || !REPORT_TYPES[rep.typeId] || !rep.header){
    toast('Ese archivo no es un borrador de Informes GOMS.');
    return null;
  }
  rep.id = uid();
  rep.status = 'draft';
  rep.sentAt = null;
  rep.createdAt = Date.now();
  rep.updatedAt = Date.now();
  await idbPut('reports', rep);
  return rep.id;
}

/* "Vista previa del PDF" — lets the person check the informe for mistakes without closing it:
   opens the PDF as it stands right now but never touches r.status, so it's still a "Borrador"
   afterward and Historial keeps sending them back into the editor. Only "Compartir / enviar
   ahora" (generateAndOfferPdf below) finalizes the informe. */
async function previewPdf(r){
  toast('Generando vista previa…', 1500);
  const cfg = await getConfig();
  let blob;
  try { blob = safeBuildPdf(r, cfg); }
  catch(e){
    console.error(e);
    toast('No se pudo generar el PDF: ' + (e && e.message ? e.message : 'error desconocido'), 6000);
    return;
  }
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (!win) window.location.href = url;
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

/* ------------------------------------ PDF GENERATION ------------------------------------ */
async function generateAndOfferPdf(r, opts={}){
  toast('Generando PDF…', 1800);
  const cfg = await getConfig();
  let blob;
  try {
    blob = safeBuildPdf(r, cfg);
  } catch(e){
    console.error(e);
    toast('No se pudo generar el PDF: ' + (e && e.message ? e.message : 'error desconocido'), 6000);
    return;
  }
  r.status = r.status === 'enviado' ? 'enviado' : 'listo';
  r.updatedAt = Date.now();
  await idbPut('reports', r);

  const filename = pdfFilename(r);
  const file = new File([blob], filename, { type: 'application/pdf' });
  const filesToShare = [file];

  // Caminata Interna also produces the client's "Excel Punch" alongside the PDF — one row
  // per numbered hallazgo, ready to paste into their master Punch list (see
  // buildPunchExcelBlob for what's filled in vs. left blank). Built from the same r object
  // that just went into the PDF, so both documents always describe the same hallazgos.
  let excelFile = null;
  if (REPORT_TYPES[r.typeId]?.id === 'caminata'){
    try {
      const excelBlob = await buildPunchExcelBlob(r);
      const excelName = punchExcelFilename(r);
      excelFile = new File([excelBlob], excelName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      filesToShare.push(excelFile);
    } catch(e){
      console.error('Excel Punch generation failed', e);
      toast('El PDF se generó bien, pero el Excel de hallazgos (Punch) no pudo generarse.');
    }
  }

  let shared = false;

  // Try native share sheet first (works fully offline, lets the person pick WhatsApp/Correo/
  // Drive/OneDrive themselves) — this is a MANUAL send: the app can't attach a file to an
  // email on its own, so whichever app the person picks in this sheet is what actually sends it.
  if (opts.autoOfferShare !== false && navigator.canShare && navigator.canShare({ files:filesToShare })){
    try {
      await navigator.share({ files:filesToShare, title: filename, text: `${REPORT_TYPES[r.typeId].name} — ${r.header.sectorPk}` });
      shared = true;
      toast(excelFile ? 'Informe y Excel de hallazgos compartidos' : 'Informe compartido');
    } catch(e){ /* person cancelled the share sheet — fall through to download below */ }
  }

  if (!shared){
    const downloadOne = (b, name) => {
      const url = URL.createObjectURL(b);
      const a = document.createElement('a');
      a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    };
    downloadOne(blob, filename);
    if (excelFile) downloadOne(excelFile, punchExcelFilename(r));
    toast(navigator.canShare
      ? (excelFile ? 'PDF y Excel de hallazgos guardados en tus descargas' : 'PDF guardado en tus descargas')
      : 'Tu navegador no admite compartir directo — los archivos quedaron en tus descargas; ábrelos y adjúntalos manualmente a tu correo o WhatsApp');
  }

  // Automatic sending ONLY happens if a webhook is configured in Ajustes — that is the one
  // path that can deliver the PDF without the person doing anything else (e.g. to email via
  // Power Automate/Apps Script, or straight into OneDrive). No webhook configured = nothing
  // is ever sent on its own; the share sheet above is the only "send" that happens by itself.
  if (cfg.webhookUrl){
    if (!navigator.onLine){
      toast('Sin señal: el envío automático a tu webhook se reintentará cuando vuelva la conexión');
    } else {
      try {
        await sendReportViaWebhook(r, blob, cfg);
        toast('Enviado automáticamente a tu webhook configurado');
      } catch(e){
        console.error(e);
        toast('No se pudo enviar automáticamente — revisa la URL del webhook en Configuración. El PDF sigue disponible para compartir manualmente.');
      }
    }
  }
}

function pdfFilename(r){
  const t = REPORT_TYPES[r.typeId];
  const safe = (r.header.sectorPk || 'sin-sector').replace(/[^a-z0-9]+/gi,'-');
  return `${t.short.replace(/\s+/g,'_')}_${r.header.fecha}_${safe}.pdf`;
}
function punchExcelFilename(r){
  const safe = (r.header.sectorPk || 'sin-sector').replace(/[^a-z0-9]+/gi,'-');
  return `Punch_Caminata_${r.header.fecha}_${safe}.xlsx`;
}

function bannerFor(counts){
  if (counts.correctiva > 0) return { text: `INFORME CON ACCIÓN CORRECTIVA (${counts.correctiva} registro${counts.correctiva===1?'':'s'})`, color: '#c76418' };
  if (counts.desviacion > 0) return { text: `INFORME DE HALLAZGOS (${counts.desviacion} registro${counts.desviacion===1?'':'s'})`, color: '#b7302f' };
  if (counts.positiva > 0) return { text: `INFORME DE CONDICIONES POSITIVAS (${counts.positiva} registro${counts.positiva===1?'':'s'})`, color: '#1c7a45' };
  return { text: 'INFORME SIN REGISTROS', color: '#5f6d78' };
}

/* ---------------------------- Caminata Interna: "Excel Punch" export ----------------------------
   Generates a .xlsx in the client's exact "EXCEL PUNCH NUEVO" format, filled in from Área
   through Fecha Comp. Cierre (columns C–U) — ITEM (A) and N° Punch (B) are left blank on
   purpose, since those get assigned by hand when the rows are pasted into the client's master
   Punch list. One row per numbered hallazgo (same paradasTexts() used in the PDF's "3.1"
   section and the "Anexo" photo captions), so the two documents always agree on what was
   found. Área/Sistema/SubSistema come from SECTOR_KPI_DICT, keyed off the Sector typed in
   "Datos" — see that constant's comment for what happens when a sector isn't in the dictionary. */

function xmlEscape(s){
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
/* One <c> element for a text value, using inline strings (t="inlineStr") rather than the
   sharedStrings.xml table the original file uses — inline cells need nothing else touched
   elsewhere in the workbook, which is what lets this function leave styles.xml (and every
   other part of the original .xlsx) completely untouched. col is the column letter, row the
   1-based row number, s the style index to carry over from the template (see the style map
   below, taken directly from the template's own data row 3). Empty values still get a cell
   (with the right style) so its border/fill/font renders even with nothing printed in it. */
function punchCellText(col, row, s, value){
  const v = (value === undefined || value === null || value === '') ? '' : xmlEscape(value);
  if (!v) return `<c r="${col}${row}" s="${s}"/>`;
  return `<c r="${col}${row}" s="${s}" t="inlineStr"><is><t xml:space="preserve">${v}</t></is></c>`;
}
function punchCellDate(col, row, s, isoDate){
  // Excel serial date: days since 1899-12-30 (the classic Excel epoch, including its
  // intentional leap-year bug), matching the template's own S/U columns (style 2, mm-dd-yy).
  // The number MUST be wrapped in <v>...</v> — a bare number as the <c> element's own text
  // content is invalid OOXML and openpyxl (and Excel) silently read it back as no value at
  // all, exactly like the original template's own date cells do it.
  if (!isoDate) return `<c r="${col}${row}" s="${s}"/>`;
  const d = new Date(isoDate + 'T00:00:00');
  const epoch = new Date(Date.UTC(1899, 11, 30));
  const serial = Math.round((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - epoch.getTime()) / 86400000);
  return `<c r="${col}${row}" s="${s}"><v>${serial}</v></c>`;
}

/* Per-column style index, copied from row 3 (the template's own example data row) of
   EXCEL_PUNCH_NUEVO.xlsx — see xl/worksheets/sheet1.xml. Columns A and B intentionally reuse
   their template styles too (9 and 12) even though this export leaves them blank, so a
   blank-but-styled cell still has the right border/font sitting there ready for the person
   to type the ITEM/Punch N° into by hand. */
const PUNCH_COL_STYLE = { A:9, B:12, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:14, O:16, P:15, Q:1, R:1, S:2, T:1, U:2 };

function punchDataRowXml(rowNum, vals){
  // vals: { area, sistema, subsistema, prio, clas, disc, ubic, plano, equipo, tipo, empresa,
  //         contrato, originador, ing, resp, descripcion, fechaEmision, estado, fechaCierre }
  const cells = [
    punchCellText('A', rowNum, PUNCH_COL_STYLE.A, ''), // ITEM — left blank, assigned by hand
    punchCellText('B', rowNum, PUNCH_COL_STYLE.B, ''), // N° Punch — left blank, assigned by hand
    punchCellText('C', rowNum, PUNCH_COL_STYLE.C, vals.area),
    punchCellText('D', rowNum, PUNCH_COL_STYLE.D, vals.sistema),
    punchCellText('E', rowNum, PUNCH_COL_STYLE.E, vals.subsistema),
    punchCellText('F', rowNum, PUNCH_COL_STYLE.F, vals.prio),
    punchCellText('G', rowNum, PUNCH_COL_STYLE.G, vals.clas),
    punchCellText('H', rowNum, PUNCH_COL_STYLE.H, vals.disc),
    punchCellText('I', rowNum, PUNCH_COL_STYLE.I, vals.ubic),
    punchCellText('J', rowNum, PUNCH_COL_STYLE.J, vals.plano),
    punchCellText('K', rowNum, PUNCH_COL_STYLE.K, vals.equipo),
    punchCellText('L', rowNum, PUNCH_COL_STYLE.L, vals.tipo),
    punchCellText('M', rowNum, PUNCH_COL_STYLE.M, vals.empresa),
    punchCellText('N', rowNum, PUNCH_COL_STYLE.N, vals.contrato),
    punchCellText('O', rowNum, PUNCH_COL_STYLE.O, vals.originador),
    punchCellText('P', rowNum, PUNCH_COL_STYLE.P, vals.ing),
    punchCellText('Q', rowNum, PUNCH_COL_STYLE.Q, vals.resp),
    punchCellText('R', rowNum, PUNCH_COL_STYLE.R, vals.descripcion),
    punchCellDate('S', rowNum, PUNCH_COL_STYLE.S, vals.fechaEmision),
    punchCellText('T', rowNum, PUNCH_COL_STYLE.T, vals.estado),
    punchCellDate('U', rowNum, PUNCH_COL_STYLE.U, vals.fechaCierre),
  ].join('');
  return `<row r="${rowNum}" spans="1:21" ht="22.5" x14ac:dyDescent="0.2">${cells}</row>`;
}

/* Adds N days to an ISO date string (YYYY-MM-DD), returning ISO — used for the default
   "Fecha Comp. Cierre" (30 days out), matching the template's own example rows. */
function addDaysISO(iso, days){
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
}

/* Trims a full "NOMBRE APELLIDO1 APELLIDO2" name down to just "NOMBRE APELLIDO1" — the
   Punch's "Originador" column only wants the first surname, not both. Keeps whatever the
   person typed if it's already 1-2 words (nothing to trim); only cuts anything past the
   second word. */
function firstSurnameOnly(fullName){
  const words = (fullName || '').trim().split(/\s+/).filter(Boolean);
  return words.slice(0, 2).join(' ');
}

function base64ToUint8Array(b64){
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

/* One-time migration: copies SECTOR_KPI_DICT (the built-in matrix baked into this file when
   it shipped) into the editable 'sectormatrix' IndexedDB store, but ONLY if that store is
   still empty — never overwrites entries the person has since edited or imported. Runs on
   every app load (cheap: a single getAll() against an empty or already-seeded store) so a
   fresh install always starts with the built-in matrix, but re-deploying updated app.js
   later never clobbers whatever the person has customized since. */
async function ensureSectorMatrixSeeded(){
  const existing = await idbGetAll('sectormatrix');
  if (existing.length) return;
  const db = await openDB();
  await new Promise((resolve, reject) => {
    const tx = db.transaction('sectormatrix', 'readwrite');
    const store = tx.objectStore('sectormatrix');
    // SECTOR_KPI_DICT is an array (not an object) specifically so its order — the same
    // order the sectors appear in the client's own Control de Avance workbook — carries
    // through as-is into each row's "seq" field below, instead of being lost to whatever
    // order Object.keys() or IndexedDB's own key-sorted getAll() would otherwise impose.
    SECTOR_KPI_DICT.forEach((entry, seq) => {
      const [sector, ubicacion, area, sistema, subsistema] = entry;
      store.put({ sector, ubicacion, area, sistema, subsistema, seq });
    });
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}
/* Cached in memory after first load per page-load (not persisted beyond that) since this is
   read on every Excel Punch export and shouldn't hit IndexedDB every time; invalidated
   (sectorMatrixCache = null) by any add/edit/delete/import in the Ajustes screen. */
let sectorMatrixCache = null;
async function getSectorMatrix(){
  if (sectorMatrixCache) return sectorMatrixCache;
  await ensureSectorMatrixSeeded();
  const rows = await idbGetAll('sectormatrix');
  // IndexedDB's getAll() returns rows sorted by keyPath (sector name, alphabetically) —
  // re-sort explicitly by "seq" so the matrix (and the Ubicación picker built from it) keeps
  // the same order as the client's own Control de Avance workbook / PDF, not alphabetical.
  // Rows without a seq (added by hand or imported before this field existed) sort after
  // every seq'd row, in whatever order IndexedDB happened to return them.
  rows.sort((a, b) => {
    const sa = a.seq, sb = b.seq;
    if (sa === undefined && sb === undefined) return 0;
    if (sa === undefined) return 1;
    if (sb === undefined) return -1;
    return sa - sb;
  });
  sectorMatrixCache = rows;
  return rows;
}
function invalidateSectorMatrixCache(){ sectorMatrixCache = null; }

/* Looks up a Sector in the sector matrix, tolerating the formatting differences that show up
   between how a Sector gets typed in a report and how the matrix spells the same LABOR (e.g.
   "C-53 EXT" vs "C 53 EXT" vs "C53EXT", "GA-03 W" vs "GA03W"). Tries an exact match first;
   if that fails, strips spaces/dashes/slashes from both sides and compares again — this
   catches the vast majority of real typos/formatting drift without risking a false match
   between two genuinely different sectors (stripped comparison is still an exact string
   match, just on a normalized alphanumeric core, not a fuzzy/partial one). Returns null if
   nothing matches even loosely. matrixRows must already be loaded (via getSectorMatrix()) —
   kept synchronous so it can be called per-hallazgo inside a tight loop without repeated
   IndexedDB round-trips. */
function findSectorEntry(sectorText, matrixRows){
  const key = (sectorText || '').trim().toUpperCase();
  if (!key) return null;
  const exact = matrixRows.find(row => row.sector.toUpperCase() === key);
  if (exact) return exact;
  const stripped = key.replace(/[\s\-\/]+/g, '');
  if (!stripped) return null;
  return matrixRows.find(row => row.sector.toUpperCase().replace(/[\s\-\/]+/g, '') === stripped) || null;
}

/* ---------------------------- Matriz de Sistemas: reading uploaded .xlsx files ----------------------------
   A from-scratch, read-only .xlsx parser (JSZip + regex over the raw sheet XML — no
   spreadsheet library, since the app only ever needs to pull flat rows of text/numbers out
   of a handful of predictable columns, never formulas or formatting). Used by the "Matriz de
   Sistemas" screen in Ajustes to import updated copies of the client's "01 - CONTROL DE
   AVANCE" and "subsistemas_actualizado" workbooks directly from the phone, instead of a
   developer having to re-bake SECTOR_KPI_DICT into app.js and redeploy every time the WBS
   changes. */

/* Parses xl/sharedStrings.xml into an array indexed the same way the sheet XML's t="s" cells
   reference it. Each <si> can contain a plain <t> or several "rich text" <r><t>...</t></r>
   runs (used when a cell has mixed formatting) — concatenates all <t> text within an <si>
   either way, which is all a plain read needs. */
function parseSharedStrings(xml){
  if (!xml) return [];
  const out = [];
  const siRe = /<si>([\s\S]*?)<\/si>/g;
  let m;
  while ((m = siRe.exec(xml))){
    const inner = m[1];
    const texts = [];
    const tRe = /<t[^>]*>([\s\S]*?)<\/t>/g;
    let tm;
    while ((tm = tRe.exec(inner))) texts.push(decodeXmlEntities(tm[1]));
    out.push(texts.join(''));
  }
  return out;
}
function decodeXmlEntities(s){
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, '&');
}
/* Splits a cell reference like "AB123" into { col:"AB", row:123 }. */
function splitCellRef(ref){
  const m = ref.match(/^([A-Z]+)(\d+)$/);
  return m ? { col: m[1], row: +m[2] } : { col: '', row: 0 };
}
/* Converts a column letter ("A".."Z","AA"...) to a 0-based index, for turning a row's sparse
   cell list into a dense array positioned by column. */
function colLetterToIndex(col){
  let n = 0;
  for (let i = 0; i < col.length; i++) n = n * 26 + (col.charCodeAt(i) - 64);
  return n - 1;
}
/* Parses one xl/worksheets/sheetN.xml into an array of rows, each row a dense array of cell
   values (strings/numbers, '' for empty/skipped cells) — enough to read a plain data table
   without caring about styles, formulas, or merged cells. sharedStrings resolves t="s" cells;
   t="inlineStr" and t="str" cells carry their own text inline; anything else is treated as a
   plain number (or left as the raw string if it doesn't parse as one). */
function parseSheetRows(xml, sharedStrings){
  const rows = [];
  const rowRe = /<row r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
  let rm;
  while ((rm = rowRe.exec(xml))){
    const rowNum = +rm[1];
    const rowXml = rm[2];
    const cellRe = /<c r="([A-Z]+)\d+"([^>]*)(?:\/>|>([\s\S]*?)<\/c>)/g;
    const rowArr = [];
    let cm;
    while ((cm = cellRe.exec(rowXml))){
      const col = cm[1], attrs = cm[2] || '', inner = cm[3] || '';
      const idx = colLetterToIndex(col);
      const typeMatch = attrs.match(/t="(\w+)"/);
      const type = typeMatch ? typeMatch[1] : 'n';
      let value = '';
      if (type === 's'){
        const vMatch = inner.match(/<v>([\s\S]*?)<\/v>/);
        const si = vMatch ? +vMatch[1] : -1;
        value = sharedStrings[si] || '';
      } else if (type === 'inlineStr'){
        const tMatch = inner.match(/<t[^>]*>([\s\S]*?)<\/t>/);
        value = tMatch ? decodeXmlEntities(tMatch[1]) : '';
      } else if (type === 'str'){
        const vMatch = inner.match(/<v>([\s\S]*?)<\/v>/);
        value = vMatch ? decodeXmlEntities(vMatch[1]) : '';
      } else {
        const vMatch = inner.match(/<v>([\s\S]*?)<\/v>/);
        const raw = vMatch ? vMatch[1] : '';
        value = raw === '' ? '' : (isNaN(+raw) ? raw : +raw);
      }
      while (rowArr.length < idx) rowArr.push('');
      rowArr[idx] = value;
    }
    while (rows.length < rowNum - 1) rows.push([]);
    rows.push(rowArr);
  }
  return rows;
}
/* Full read of an uploaded .xlsx File into { sheetName: rows[][] } for every sheet in the
   workbook, in the order xl/workbook.xml lists them (so sheet names line up with the right
   sheetN.xml — the file names inside the zip don't necessarily match the tab order). */
async function readXlsxFile(file){
  const buf = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(buf);
  const sharedStringsXml = zip.file('xl/sharedStrings.xml') ? await zip.file('xl/sharedStrings.xml').async('string') : '';
  const sharedStrings = parseSharedStrings(sharedStringsXml);

  const workbookXml = await zip.file('xl/workbook.xml').async('string');
  const relsXml = zip.file('xl/_rels/workbook.xml.rels') ? await zip.file('xl/_rels/workbook.xml.rels').async('string') : '';
  const relMap = {}; // r:id -> target path
  const relRe = /<Relationship[^>]*Id="(rId\d+)"[^>]*Target="([^"]+)"/g;
  let rm;
  while ((rm = relRe.exec(relsXml))) relMap[rm[1]] = rm[2];

  const sheets = {};
  const sheetRe = /<sheet[^>]*name="([^"]+)"[^>]*r:id="(rId\d+)"/g;
  let sm;
  while ((sm = sheetRe.exec(workbookXml))){
    const name = decodeXmlEntities(sm[1]);
    const target = relMap[sm[2]];
    if (!target) continue;
    const path = 'xl/' + target.replace(/^\.?\//, '');
    const sheetFile = zip.file(path);
    if (!sheetFile) continue;
    const xml = await sheetFile.async('string');
    sheets[name] = parseSheetRows(xml, sharedStrings);
  }
  return sheets;
}

/* Normalizes header text the same way the rest of the sector-matrix code does, for matching
   column headers regardless of accents/case/spacing quirks between workbook versions. */
function normHeader(s){
  return (s === undefined || s === null) ? '' : String(s).trim().toUpperCase().replace(/\s+/g, ' ');
}

/* Scans one Control de Avance-style sheet for its header row (must contain SISTEMA,
   SUBSISTEMA or SUBISTEMA — the client's own file has that typo on a couple of tabs — and
   LABOR) within the first 12 rows, then pulls (LABOR -> sistema code, subsistema code) out
   of every row below it. Returns a plain object keyed by normalized sector name. */
/* Same extraction as before, but also returns "order": the sectors in this sheet in the
   order their LABOR first appears (a sector repeats across many rows — one per Parada — so
   this only records each sector's FIRST row), which is what lets the overall import preserve
   the client's own document order end-to-end instead of collapsing to whatever order a plain
   object's keys would iterate in. */
function extractLaborMapFromSheet(rows){
  let headerRowIdx = -1, colMap = {};
  for (let i = 0; i < Math.min(rows.length, 12); i++){
    const vals = (rows[i] || []).map(normHeader);
    if (vals.includes('SISTEMA') && (vals.includes('SUBSISTEMA') || vals.includes('SUBISTEMA')) && vals.includes('LABOR')){
      headerRowIdx = i;
      vals.forEach((v, idx) => {
        if (v === 'SISTEMA') colMap.SISTEMA = idx;
        if (v === 'SUBSISTEMA' || v === 'SUBISTEMA') colMap.SUBSISTEMA = idx;
        if (v === 'LABOR') colMap.LABOR = idx;
      });
      break;
    }
  }
  const out = {}, order = [];
  if (headerRowIdx === -1) return { map: out, order };
  for (let i = headerRowIdx + 1; i < rows.length; i++){
    const row = rows[i] || [];
    const sistema = row[colMap.SISTEMA], subsistema = row[colMap.SUBSISTEMA], labor = row[colMap.LABOR];
    if (labor && sistema && subsistema){
      const key = normHeader(labor);
      if (!(key in out)) order.push(key);
      out[key] = { sistema: normHeader(sistema), subsistema: normHeader(subsistema) };
    }
  }
  return { map: out, order };
}

/* Reads the "subsistemas_actualizado" workbook's "Reporte Listado WBS" layout: fixed columns
   C=SubÁrea, E=Sistema (full "CODE [DESC]"), F=SubSistema (full "CODE [DESC]") starting at
   row 5, matching the structure of the client's real export. Returns a plain object keyed by
   the short subsistema CODE (the text before "[") -> { area, sistema_full, subsistema_full }. */
function extractSubsistemasDict(rows){
  const out = {};
  for (let i = 4; i < rows.length; i++){ // row 5 = index 4
    const row = rows[i] || [];
    const subArea = row[2], sistemaFull = row[4], subsistemaFull = row[5];
    if (!subsistemaFull) continue;
    const code = normHeader(String(subsistemaFull).split('[')[0]);
    if (!code) continue;
    out[code] = {
      area: subArea ? String(subArea).trim() : '',
      sistema_full: sistemaFull ? String(sistemaFull).trim() : '',
      subsistema_full: String(subsistemaFull).trim(),
    };
  }
  return out;
}

/* Full import pipeline: given the two uploaded files (Control de Avance workbook with one
   sheet per mining front, and subsistemas_actualizado's WBS listing), reproduces the same
   cross-reference that built the original SECTOR_KPI_DICT — scan every sheet except any
   named like a summary tab, collect LABOR -> sistema/subsistema codes, then look each code up
   in the subsistemas dictionary for the full "[...]" text and área. Returns an array of
   { sector, ubicacion, area, sistema, subsistema } rows ready to merge into the 'sectormatrix'
   store, plus a short summary of how many resolved fully vs. fell back to codes only. */
async function importSectorMatrixFromFiles(avanceFile, subsistemasFile){
  const avanceSheets = await readXlsxFile(avanceFile);
  const subsistemasSheets = await readXlsxFile(subsistemasFile);

  // Merge every sheet's { map, order } — later sheets overwrite an existing sector's
  // sistema/subsistema (matching the original "last sheet wins" rule) but a sector's
  // position in "sectorOrder" is fixed by wherever it FIRST appeared, across the whole
  // workbook — same two-part rule the original build used, just done incrementally here
  // instead of in one pass over pre-merged data.
  let laborMap = {};
  const sectorOrder = [];
  Object.keys(avanceSheets).forEach(sheetName => {
    const { map, order } = extractLaborMapFromSheet(avanceSheets[sheetName]);
    order.forEach(key => { if (!(key in laborMap)) sectorOrder.push(key); });
    laborMap = Object.assign(laborMap, map);
  });

  const subsistemasSheetName = Object.keys(subsistemasSheets)[0];
  const subsisDict = subsistemasSheetName ? extractSubsistemasDict(subsistemasSheets[subsistemasSheetName]) : {};

  const rows = [];
  let resolved = 0, unresolved = 0;
  sectorOrder.forEach((sector, seq) => {
    const { sistema, subsistema } = laborMap[sector];
    const entry = subsisDict[subsistema];
    if (entry){
      rows.push({ sector, ubicacion: sector, area: entry.area, sistema: entry.sistema_full, subsistema: entry.subsistema_full, seq });
      resolved++;
    } else {
      rows.push({ sector, ubicacion: sector, area: '', sistema, subsistema, seq });
      unresolved++;
    }
  });
  return { rows, resolved, unresolved, total: rows.length };
}

async function buildPunchExcelBlob(r){
  const t = REPORT_TYPES[r.typeId];
  const matrixRows = await getSectorMatrix();
  const dictEntry = findSectorEntry(r.header.sector, matrixRows);
  // No match at all (sector not typed, or not in the matrix even after tolerant matching):
  // leave ubicación/área/sistema/subsistema blank rather than guessing — the person can fill
  // them in by hand, same as ITEM/N° Punch, instead of the export silently attributing
  // hallazgos to the wrong system or printing a hand-typed PK as if it were the matrix's own
  // location text.
  const ubicacion = dictEntry ? dictEntry.ubicacion : '';
  const area = dictEntry ? dictEntry.area : '';
  const sistema = dictEntry ? dictEntry.sistema : '';
  const subsistema = dictEntry ? dictEntry.subsistema : '';

  const fechaEmision = r.header.fecha || todayISO();
  const fechaCierre = addDaysISO(fechaEmision, 30);

  // One row per numbered hallazgo across every labor/registro in the report, in the same
  // order they're numbered in the PDF — so "hallazgo N°3 in the PDF" and "row 3 in the
  // Excel" always refer to the same thing.
  const rows = [];
  let prioCounter = 0;
  r.labores.forEach(l => {
    const textos = paradasTexts(l);
    textos.forEach(desc => {
      prioCounter += 1;
      rows.push({
        area, sistema, subsistema,
        prio: `P${prioCounter}`,
        clas: 'C',
        disc: 'MI',
        ubic: ubicacion || r.header.sector || '',
        plano: '',
        equipo: '',
        tipo: 'Contratista',
        empresa: 'ZUBLIN',
        contrato: '4600031460/GCC-003',
        originador: (r.personal || []).map(p => firstSurnameOnly(p.nombre)).filter(Boolean).join(' / '),
        ing: '',
        resp: '',
        descripcion: desc.replace(/\.$/, ''), // template's own examples drop the trailing period
        fechaEmision, estado: 'ABIERTA', fechaCierre,
      });
    });
  });

  const rowsXml = rows.map((v, i) => punchDataRowXml(i + 3, v)).join('');
  const lastRow = rows.length ? rows.length + 2 : 2;

  // Unzip the embedded template, replace only xl/worksheets/sheet1.xml's <sheetData> (and
  // the <dimension> hint just above it), and re-zip — every other part of the archive
  // (styles.xml, theme, column widths, merges, page setup) passes through completely
  // untouched, which is what keeps the output visually identical to the client's template.
  const zip = await JSZip.loadAsync(base64ToUint8Array(PUNCH_TEMPLATE_B64));
  const sheetPath = 'xl/worksheets/sheet1.xml';
  let xml = await zip.file(sheetPath).async('string');

  xml = xml.replace(/<dimension ref="[^"]*"\/>/, `<dimension ref="A1:U${lastRow}"/>`);
  xml = xml.replace(/<sheetData>.*<\/sheetData>/s, () => {
    const header1 = '<row r="1" spans="1:21" x14ac:dyDescent="0.2"><c r="B1" s="10" t="inlineStr"><is><t>N°</t></is></c><c r="C1" s="4" t="inlineStr"><is><t>Área</t></is></c><c r="D1" s="4" t="inlineStr"><is><t>Sistema</t></is></c><c r="E1" s="4" t="inlineStr"><is><t>SubSistema</t></is></c><c r="F1" s="4" t="inlineStr"><is><t>Prio.</t></is></c><c r="G1" s="4" t="inlineStr"><is><t>Clas.</t></is></c><c r="H1" s="4" t="inlineStr"><is><t>Disc.</t></is></c><c r="I1" s="4" t="inlineStr"><is><t>Ubic.</t></is></c><c r="J1" s="4" t="inlineStr"><is><t>Plano</t></is></c><c r="K1" s="4" t="inlineStr"><is><t>Equipo</t></is></c><c r="L1" s="3" t="inlineStr"><is><t>Tipo/</t></is></c><c r="M1" s="4" t="inlineStr"><is><t>Empresa</t></is></c><c r="N1" s="4" t="inlineStr"><is><t>Contrato</t></is></c><c r="O1" s="4" t="inlineStr"><is><t>Originador</t></is></c><c r="P1" s="3" t="inlineStr"><is><t>Ing.</t></is></c><c r="Q1" s="3" t="inlineStr"><is><t>Resp.</t></is></c><c r="R1" s="4" t="inlineStr"><is><t>Descripción</t></is></c><c r="S1" s="3" t="inlineStr"><is><t>Fecha</t></is></c><c r="T1" s="4" t="inlineStr"><is><t>Estado</t></is></c><c r="U1" s="3" t="inlineStr"><is><t>Fecha</t></is></c></row>';
    const header2 = '<row r="2" spans="1:21" ht="24" x14ac:dyDescent="0.2"><c r="A2" s="5" t="inlineStr"><is><t>ITEM</t></is></c><c r="B2" s="11" t="inlineStr"><is><t>Punch</t></is></c><c r="C2" s="6"/><c r="D2" s="6"/><c r="E2" s="6"/><c r="F2" s="6"/><c r="G2" s="6"/><c r="H2" s="6"/><c r="I2" s="6"/><c r="J2" s="6"/><c r="K2" s="6"/><c r="L2" s="5" t="inlineStr"><is><t>Empresa</t></is></c><c r="M2" s="6"/><c r="N2" s="6"/><c r="O2" s="6"/><c r="P2" s="5" t="inlineStr"><is><t>Sistema</t></is></c><c r="Q2" s="5" t="inlineStr"><is><t>Construcción</t></is></c><c r="R2" s="6"/><c r="S2" s="5" t="inlineStr"><is><t>Emisión</t></is></c><c r="T2" s="6"/><c r="U2" s="5" t="inlineStr"><is><t>Comp. Cierre</t></is></c></row>';
    return `<sheetData>${header1}${header2}${rowsXml}</sheetData>`;
  });

  zip.file(sheetPath, xml);
  return await zip.generateAsync({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}

/* Rellena lo que falte en un informe (borradores antiguos o campos vacíos) para que el PDF
   se pueda generar siempre, aunque no estén todos los campos llenos. No modifica el original. */
function normalizeReportForPdf(r0){
  const r = Object.assign({}, r0);
  r.header = Object.assign({}, r0.header || {});
  r.personal = (Array.isArray(r0.personal) ? r0.personal : []).map(p => Object.assign({}, p || {}, { firma: null, firmadoEn: null }));
  ['objetivo','antecedentes','conclusiones'].forEach(k => { if (r[k] == null) r[k] = ''; });
  r.labores = (Array.isArray(r0.labores) ? r0.labores : []).filter(Boolean).map(l => {
    const c = Object.assign({}, l);
    c.cats = Object.assign({}, l.cats || {});
    ['positiva','desviacion','correctiva'].forEach(k => {
      const v = c.cats[k] || {};
      c.cats[k] = Object.assign({}, v, { sel: Array.isArray(v.sel) ? v.sel : [], custom: v.custom || '' });
    });
    c.fotos = (Array.isArray(l.fotos) ? l.fotos : []).filter(f => f && (typeof f === 'string' || f.url));
    return c;
  });
  if (r0.turno || (REPORT_TYPES[r0.typeId] && REPORT_TYPES[r0.typeId].kind === 'turno')){
    const base = emptyTurnoData();
    const tu = Object.assign({}, r0.turno || {});
    Object.keys(base).forEach(k => {
      if (tu[k] == null) tu[k] = base[k];
      else if (Array.isArray(base[k]) && !Array.isArray(tu[k])) tu[k] = base[k];
      else if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) tu[k] = Object.assign({}, base[k], tu[k]);
    });
    r.turno = tu;
  }
  ['personalNoche','personalDia'].forEach(k => { if (r0[k] != null) r[k] = (Array.isArray(r0[k]) ? r0[k] : []).filter(Boolean); });
  return r;
}
/* Todo texto de "falta completar" (Sin registros, (sin nombre), —…) se dibuja en ROJO en el PDF
   para que se vea de un vistazo qué falta, sin impedir generar el PDF. */
function markMissingRed(doc){
  const orig = doc.text.bind(doc);
  const RX = /^(Sin registros( ingresados| de laboratorio)?\.|Sin frentes registrados\.|Sin observaciones\.|Sin filas\.|—)$/;
  doc.text = function(text, ...rest){
    const flat = Array.isArray(text) ? text.join(' ') : String(text == null ? '' : text);
    const miss = RX.test(flat.trim()) || flat.includes('(sin nombre)');
    if (!miss) return orig(text, ...rest);
    let prev = null; try { prev = doc.getTextColor(); } catch(e){}
    doc.setTextColor('#d62828');
    const out = orig(text, ...rest);
    try { if (prev) doc.setTextColor(prev); } catch(e){}
    return out;
  };
}
/* Genera el PDF pase lo que pase: si falla (p. ej. una foto dañada), reintenta sin fotos. */
function safeBuildPdf(r, cfg){
  try { return buildPdfBlob(r, cfg); }
  catch(e1){
    console.error(e1);
    const c = JSON.parse(JSON.stringify(r));
    (c.labores || []).forEach(l => { if (l) l.fotos = []; });
    if (c.turno) Object.keys(c.turno).forEach(k => { if (/Fotos$|^fotos$/.test(k)) c.turno[k] = []; });
    const blob = buildPdfBlob(c, cfg);
    toast('El PDF se generó sin fotos (alguna foto estaba dañada).', 4000);
    return blob;
  }
}
function buildPdfBlob(r, cfg){
  r = normalizeReportForPdf(r); cfg = cfg || {};
  const t = REPORT_TYPES[r.typeId];
  if (t && t.kind === 'turnogeneral') return buildTurnoGeneralPdfBlob(r, cfg, t);
  if (t && t.kind === 'turno') return buildTurnoPdfBlob(r, cfg, t);
  if (t && t.pdfInspeccion) return buildInspeccionPdfBlob(r, cfg, t);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'letter' }); markMissingRed(doc);
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 42;
  const contentW = pageW - margin*2;
  let y = margin;

  const COL = {
    ink:'#141414', dim:'#5f6d78', ok:'#1c7a45', warn:'#b7302f', signal:'#c76418',
    line:'#c8ccd0', red:'#c8102e', blue:'#1a4fa0', black:'#141414'
  };
  const counts = countsForReport(r);
  const banner = bannerFor(counts);
  const CAT_PDF_LABELS = { positiva:'CONDICIÓN POSITIVA', desviacion:'DESVIACIONES / HALLAZGOS', correctiva:'ACCIÓN CORRECTIVA' };
  const CAT_PDF_COLORS = { positiva: COL.ok, desviacion: COL.warn, correctiva: COL.signal };

  function ensureSpace(h){
    if (y + h > pageH - 60){ doc.addPage(); y = margin; drawRunningHeader(); }
  }
  function drawRunningHeader(){
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
    doc.text(t.name, margin, 28);
    doc.setDrawColor(COL.line); doc.line(margin, 34, pageW-margin, 34);
    y = 48;
  }
  /* Major section headings ("A.- PERSONAL EN TURNO", "1. OBJETIVO", etc.) render in the
     brand red, matching the shared report templates. Pass color:COL.black for the black
     bold sub-headings used for each labor/registro title ("3.1 GA-03 W").
     minFollowing reserves extra room below the heading for whatever's about to be drawn
     right after it (its first line or two of body text) — without this, ensureSpace() only
     checked whether the heading ITSELF fit on the current page, so a heading could land as
     the very last thing on a page with its actual content pushed onto the next page with no
     title above it (this is what left "4. CONCLUSIONES" stranded at the bottom of page 1
     while the conclusión text itself started at the top of page 2 with nothing labeling it).
     Passing e.g. minFollowing:26 (~2 lines' worth) makes the heading itself jump to the next
     page instead, keeping it glued to its content. */
  function heading(text, size=11.5, opts={}){
    ensureSpace(size + 14 + (opts.minFollowing || 0));
    doc.setFont('helvetica','bold'); doc.setFontSize(size); doc.setTextColor(opts.color || COL.red);
    doc.text(text, margin, y);
    y += size*0.9 + 7;
  }
  function paragraph(text, opts={}){
    if (!text) { text = '—'; }
    doc.setFont('helvetica', opts.bold?'bold':'normal');
    doc.setFontSize(opts.size || 10);
    doc.setTextColor(opts.color || COL.ink);
    const lines = doc.splitTextToSize(text, contentW - (opts.indent||0));
    ensureSpace(lines.length * 13 + 6);
    doc.text(lines, margin + (opts.indent||0), y);
    y += lines.length * 13 + 8;
  }
  /* Category block: label + bullet list with a colored vertical accent bar on the left,
     mirroring the "CONDICIÓN POSITIVA / DESVIACIONES / ACCIÓN CORRECTIVA" blocks in the
     original templates. Skips the accent bar if a page break happened mid-block. */
  function bulletList(items, opts={}){
    if (!items.length) return;
    const size = opts.size || 10, color = opts.color || COL.ink;
    doc.setFont('helvetica', 'normal'); doc.setFontSize(size); doc.setTextColor(color);
    items.forEach(it => {
      const lines = doc.splitTextToSize('•  ' + it, contentW - (opts.indent||0));
      const pageBefore = doc.internal.getNumberOfPages();
      ensureSpace(lines.length * 13 + 2);
      // Same restore-after-page-break fix as categoryBlock() below: ensureSpace() can call
      // drawRunningHeader(), which leaves its own bold/small/dim style active — without
      // restoring this list's own style here, any item that lands right after a page break
      // would print in the header's font instead of its own.
      if (doc.internal.getNumberOfPages() !== pageBefore){
        doc.setFont('helvetica', 'normal'); doc.setFontSize(size); doc.setTextColor(color);
      }
      doc.text(lines, margin + (opts.indent||0), y);
      y += lines.length * 13 + 2;
    });
    y += 6;
  }
  /* Running per-category counters (positiva/desviacion/correctiva) so each item is numbered
     continuously across ALL registros of the report (1, 2, 3…) instead of restarting per
     registro — the numbers keep adding up automatically as more items come in. */
  const catCounter = { positiva:0, desviacion:0, correctiva:0 };
  function categoryBlock(catKey, items){
    if (!items.length) return;
    const startPage = doc.internal.getNumberOfPages();
    const startY = y;
    const indent = 12;
    ensureSpace(9+14);
    doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(CAT_PDF_COLORS[catKey]);
    doc.text(CAT_PDF_LABELS[catKey], margin+indent, y);
    y += 9*0.9 + 6;
    doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
    items.forEach(it => {
      catCounter[catKey] += 1;
      const lines = doc.splitTextToSize(`${catCounter[catKey]}.-  ` + it, contentW - indent);
      const pageBefore = doc.internal.getNumberOfPages();
      ensureSpace(lines.length * 13 + 2);
      // ensureSpace() may call addPage() + drawRunningHeader(), which sets its own bold/
      // small/dim style for the running header text at the top of the new page — restore
      // this list's normal-weight body style right before drawing, on every item, so a
      // hallazgo that gets pushed onto a fresh page never inherits the header's font size
      // and color instead of its own (this was item 13 showing up in a different size/color
      // after the page break in the report).
      if (doc.internal.getNumberOfPages() !== pageBefore){
        doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
      }
      doc.text(lines, margin+indent, y);
      y += lines.length * 13 + 2;
    });
    y += 6;
    if (doc.internal.getNumberOfPages() === startPage){
      doc.setDrawColor(CAT_PDF_COLORS[catKey]); doc.setLineWidth(2);
      doc.line(margin+2, startY-9, margin+2, y-8);
      doc.setLineWidth(0.75);
    }
  }

  // ---- Cover header: red Züblin band ----
  doc.setFillColor('#e2231a'); doc.rect(0, 0, pageW, 46, 'F');
  // real Züblin wordmark (extracted from the company's own report template)
  const logoH1 = 26, logoW1 = logoH1 * ZUBLIN_LOGO_RATIO;
  doc.setFillColor('#ffffff'); doc.roundedRect(margin, 10, logoW1 + 12, logoH1 + 6, 4, 4, 'F');
  doc.addImage(ZUBLIN_LOGO_PNG, 'PNG', margin + 6, 13, logoW1, logoH1);
  doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(11);
  doc.text('INFORME DE PROCESOS CONSTRUCTIVOS', margin + logoW1 + 24, 27, { maxWidth: contentW - (logoW1+24) });
  const codeLine = (t.correlativoEditable && r.header.correlativo) ? `CÓDIGO: ${t.code} N° ${r.header.correlativo}` : `CÓDIGO: ${t.code}`;
  doc.setFontSize(7.5); doc.setFont('helvetica','normal');
  doc.text(codeLine, pageW - margin, 18, { align:'right' });

  // ---- Contract band (wraps to 2 lines if needed so nothing gets cut off) ----
  doc.setFont('helvetica','normal'); doc.setFontSize(7.3);
  const contractLine = `Contrato N° ${cfg.contrato} — "${cfg.obra}" — Empresa Contratista: ${cfg.empresaContratista}`;
  const contractLines = doc.splitTextToSize(contractLine, contentW).slice(0, 2);
  const bandH = contractLines.length > 1 ? 32 : 22;
  doc.setFillColor('#141414'); doc.rect(0, 46, pageW, bandH, 'F');
  doc.setTextColor('#d5d8db');
  contractLines.forEach((ln, i) => doc.text(ln, margin, 58 + i*10));

  y = 46 + bandH + 14;

  // ---- Category banner (pill, full width) ----
  doc.setFillColor(banner.color); doc.roundedRect(margin, y, contentW, 22, 11, 11, 'F');
  doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(10);
  doc.text(banner.text, pageW/2, y + 15, { align:'center' });
  y += 22 + 16;

  // ---- Title ----
  doc.setFont('helvetica','bold'); doc.setFontSize(14); doc.setTextColor(COL.black);
  doc.text(t.name, margin, y, { maxWidth: contentW });
  y += 20;
  doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(COL.dim);
  doc.text('D E P A R T A M E N T O   D E   C A L I D A D', margin, y);
  y += 22;

  // ---- Info list (plain single column, no box — matches the original templates) ----
  const infoRows = [
    ['FECHA:', fmtDateDisplay(r.header.fecha)], ['HORA:', r.header.hora],
    ['TURNO:', r.header.turno], ['GRUPO:', r.header.grupo],
    ['ÁREA:', r.header.area], ['PROCESO:', r.header.proceso || '—'],
    ['SECTOR / PK:', r.header.sectorPk || '—'],
  ];
  if (t.id === 'caminata'){
    const metrosKpi = metrosDelPk(r.header.pk);
    const hallazgosKpi = countsForReport(r).desviacion;
    // Only add the KPI row at all when it's actually calculable (two PK numbers present) —
    // if the PK is missing or incomplete, the row is omitted entirely rather than showing
    // "KPI: —", matching the same rule used on-screen in kpiCaminataHtml().
    if (metrosKpi && metrosKpi > 0){
      infoRows.push(['KPI:', (hallazgosKpi / metrosKpi).toFixed(3)]);
    }
  }
  infoRows.forEach(row => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9.5); doc.setTextColor(COL.black);
    doc.text(row[0], margin, y);
    // Column offset scales with each label's own width (plus a fixed gap) instead of a flat
    // 92pt, so any label longer than the shortest ones (e.g. "SECTOR / PK:") still gets a
    // clean gap before its value instead of the value running straight into the label.
    const labelW = doc.getTextWidth(row[0]);
    doc.setFont('helvetica','normal'); doc.setFontSize(9.5); doc.setTextColor(COL.black);
    doc.text(String(row[1]), margin + Math.max(92, labelW + 8), y);
    y += 16;
  });
  y += 10;

  // ---- Stat pills ----
  const pillW = (contentW - 16)/3;
  const pills = [
    { label:`${counts.desviacion} Desviaciones/Hallazgos`, color: COL.warn },
    { label:`${counts.positiva} Condiciones Positivas`, color: COL.ok },
    { label:`${counts.correctiva} Acciones Correctivas`, color: COL.signal }
  ];
  pills.forEach((p, i) => {
    const x = margin + i*(pillW+8);
    doc.setFillColor(p.color); doc.roundedRect(x, y, pillW, 20, 10, 10, 'F');
    doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(7.8);
    doc.text(p.label, x + pillW/2, y + 13.5, { align:'center' });
  });
  y += 20 + 18;

  // ---- Personal en turno ----
  heading('A.- PERSONAL EN TURNO', 11.5, { minFollowing: 26 });
  r.personal.forEach((p, i) => paragraph(`${i+1}.- ${p.nombre || '(sin nombre)'} (${p.cargo}).`));
  y += 4;

  // ---- Resumen ----
  heading('RESUMEN DEL TURNO');
  heading('1. OBJETIVO', 10.5, { minFollowing: 26 }); paragraph((r.objetivo || '').toUpperCase());
  heading('2. ANTECEDENTES', 10.5, { minFollowing: 26 });
  if (t.antecedentesChecklist){
    const sel = r.antecedentesSel || [];
    if (!sel.length) paragraph('—');
    else sel.forEach((txt, i) => paragraph(`${i+1}.- ${(txt||'').toUpperCase()}`, { size:10 }));
  } else {
    paragraph((r.antecedentes || '').toUpperCase());
  }

  // ---- Desarrollo ----
  heading('3. DESARROLLO — REGISTROS DEL TURNO', 11.5, { minFollowing: 26 });
  if (!r.labores.length) paragraph('Sin registros ingresados.');
  r.labores.forEach((l, li) => {
    heading(l.titulo || `Registro ${li+1}`, 10.5, { color: COL.black, minFollowing: 20 });
    const pos = joinCat(l.cats.positiva), dev = (t.laborKind === 'paradas') ? paradasTexts(l) : joinCat(l.cats.desviacion), cor = joinCat(l.cats.correctiva);
    categoryBlock('positiva', pos);
    categoryBlock('desviacion', dev);
    categoryBlock('correctiva', cor);
    if (l.fotos.length) paragraph(`Ver Anexo ${li+1} (${l.fotos.length} fotografía(s)).`, { size:9, color: COL.dim, indent:12 });
    y += 4;
  });

  // ---- Conclusiones ----
  // minFollowing keeps this heading glued to at least the start of its own text — this is
  // the exact section that was reported landing at the bottom of one page with its content
  // starting fresh on the next, with nothing labeling it there.
  heading('4. CONCLUSIONES', 11.5, { minFollowing: 26 });
  bulletList(r.conclusiones ? [r.conclusiones] : []);
  if (!r.conclusiones) paragraph('—');

  // ---- Evidencia adjunta ----
  heading('5. EVIDENCIA ADJUNTA', 11.5, { minFollowing: 20 });
  if (r.labores.some(l=>l.fotos.length)){
    const items = r.labores.filter(l=>l.fotos.length).map((l, i) => `Anexo ${r.labores.indexOf(l)+1}: Fotografías — ${l.titulo || 'Registro '+(r.labores.indexOf(l)+1)}.`);
    bulletList(items);
  } else paragraph('Sin fotografías adjuntas.');

  // ---- Anexo photo pages — grouped by category (condición positiva / desviación / correctiva) ----
  r.labores.forEach((l, li) => {
    if (!l.fotos.length) return;
    // The FIRST Anexo only forces a page break if it genuinely doesn't fit (title + a full
    // photo row) in what's left of the current page — this is what produced an almost-blank
    // page whenever "5. Evidencia adjunta" left plenty of room but the Anexo was pushed to a
    // fresh page unconditionally anyway. Every Anexo AFTER the first still starts on its own
    // page regardless of space — those separate genuinely different labores/registros, so
    // keeping them each on a clean page avoids one register's photos running into another's
    // with no clear separation.
    if (li === 0 || !r.labores.slice(0, li).some(prev => prev.fotos.length)){
      // Reserve room for the title AND the first full photo row (150pt image + 26pt
      // caption) — reserving only the title's own height (as an earlier version of this fix
      // did, on the theory that a partial ~94pt gap was "enough") left the title stranded at
      // the bottom of a page with genuinely nowhere for its photos to go, pushing them onto
      // a fresh page with nothing else on it until they start. A gap smaller than one full
      // row is never actually usable for a photo row regardless of how close it gets, so
      // requiring the full row here is what actually keeps title and content glued together.
      const titleH = 26, firstRowH = 150 + 26;
      if (y + titleH + firstRowH > pageH - 50){ doc.addPage(); y = margin; }
    } else {
      doc.addPage(); y = margin;
    }
    doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(COL.blue);
    doc.text(`Anexo ${li+1}: Fotografías — ${l.titulo || 'Registro '+(li+1)}`, margin, y, { maxWidth: contentW });
    y += 26;
    const isParadasLabor = t.laborKind === 'paradas';
    const devTexts = isParadasLabor ? paradasTexts(l) : [];
    const gap = 10, cellW = (contentW - gap)/2, imgH = 150;
    // Reserve room under every photo for its caption/observación text — not just for
    // laborKind:'paradas' reports anymore, since every report type's photos can now carry a
    // caption (typed by hand, or copied from one of the category's own written
    // observaciones — see fotoCaption / the photo-obs-select dropdown in laborCardHtml).
    const descH = 26;
    const cellH = imgH + descH;
    CAT_KEYS.forEach(cat => {
      const fotos = l.fotos.filter(f => fotoCat(f) === cat)
        .slice()
        .sort((a,b) => (fotoNum(a)||999) - (fotoNum(b)||999));
      if (!fotos.length) return;
      if (y + 20 > pageH - 50){ doc.addPage(); y = margin; }
      doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(CAT_PDF_COLORS[cat]);
      // Header count: for Caminata Interna's "desviación" category this must be the number
      // of numbered hallazgos (matching the color-bar count on the cover page), not the
      // photo count — a hallazgo can have zero, one, or several photos attached, so those
      // two numbers legitimately differ and printing "fotos" under a "hallazgos" label read
      // as a contradiction. Every other category (and every other report type) still counts
      // photos here, which is what that heading has always meant for them.
      const countLabel = (isParadasLabor && cat === 'desviacion')
        ? `${devTexts.length} hallazgo${devTexts.length===1?'':'s'} — ${fotos.length} foto${fotos.length===1?'':'s'}`
        : `${fotos.length}`;
      doc.text(`${CAT_LABELS[cat]} (${countLabel})`, margin, y);
      y += 14;
      // rowY tracks the top of the CURRENT row and advances explicitly row-by-row (rather
      // than being computed from the photo's absolute index within the category) so that a
      // page break partway through a category correctly resets it to a fresh margin instead
      // of leaving later rows positioned as if no break had happened — that mismatch was
      // exactly what let a caption strip land underneath the footer text.
      let rowY = y;
      fotos.forEach((f, fi) => {
        const col = fi % 2;
        if (col === 0){
          if (fi > 0) rowY += cellH + gap;
          if (rowY + cellH > pageH - 50){ doc.addPage(); rowY = margin; }
        }
        const x = margin + col*(cellW+gap);
        const yy = rowY;
        try { doc.addImage(fotoUrl(f), 'JPEG', x, yy, cellW, imgH, undefined, 'FAST'); } catch(e){ /* ignore malformed image */ }
        const n = fotoNum(f);
        if (n){
          const capH = 16;
          doc.setFillColor(CAT_PDF_COLORS[cat]); doc.rect(x, yy + imgH - capH, cellW, capH, 'F');
          doc.setTextColor('#ffffff'); doc.setFont('helvetica','bold'); doc.setFontSize(8.5);
          doc.text(`N° ${n}`, x + cellW/2, yy + imgH - capH/2 + 3, { align:'center' });
        }
        // Caption box under the photo: for laborKind:'paradas' reports this is the full
        // numbered-hallazgo text (unchanged); for every other report type it's whatever
        // caption the person typed or picked from that category's own observations.
        const descText = isParadasLabor ? (n ? (devTexts[n-1] || '') : 'Sin N° asignado') : fotoCaption(f);
        const hasText = !!descText;
        // No caption typed -> no caption box at all (only Caminata Interna keeps its
        // "Sin N° asignado" box, since that one is real information, not a missing caption).
        if (hasText || isParadasLabor){
          doc.setDrawColor(COL.line); doc.setFillColor('#f4f5f6');
          doc.rect(x, yy + imgH, cellW, descH, 'FD');
          doc.setFont('helvetica', hasText ? 'normal' : 'italic'); doc.setFontSize(7.6);
          doc.setTextColor(hasText ? COL.ink : COL.dim);
          const lines = doc.splitTextToSize(hasText ? descText : 'Sin N° asignado', cellW - 8).slice(0, 3);
          doc.text(lines, x + 4, yy + imgH + 9);
        }
      });
      y = rowY + cellH + 6;
    });
  });

  // (Sin bloque de firmas: eliminado a pedido.)

  // ---- Footer + page numbers on every page ----
  const total = doc.internal.getNumberOfPages();
  for (let p=1; p<=total; p++){
    doc.setPage(p);
    doc.setDrawColor(COL.line); doc.line(margin, pageH-46, pageW-margin, pageH-46);
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(COL.dim);
    doc.text(`Generado por: ${cfg.generadoPor || '—'}  |  ${fmtDateDisplay(todayISO())}  |  ${t.name}`, margin, pageH-13);
    doc.text(`Página ${p} de ${total}`, pageW-margin, pageH-13, { align:'right' });
  }

  return doc.output('blob');
}

/* ------------------------------------ PDF GENERATION — "INFORME INSPECCIONES" ------------------------------------
   New layout used by Lechado de pernos, Instalación de malla and Proyección de shotcrete
   (t.pdfInspeccion): plain white pages, serif headings, ZÜBLIN mark + contract line on EVERY page,
   sections A (personal), B (resumen = objetivo), D (antecedentes), E (desarrollo), F (conclusión),
   G (evidencia adjunta) and an "Anexo 1 - Registro fotográfico". The data the person types in the
   app (objetivo, antecedentes, registros with their 3 categories, photos, conclusiones) is unchanged;
   only how it prints changes. A photo's caption box is only drawn when a caption was typed. */
function buildInspeccionPdfBlob(r, cfg, t){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'letter' }); markMissingRed(doc);
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 42;
  const contentW = pageW - margin*2;
  const BODY = '#4a4f55', BULLET = '#7a7f85', INK = '#111111', LINE = '#c8ccd0';
  const SZ = 10.3, LH = 13;
  let y = margin;

  const stripAccents = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '');
  const contratoNum = String(cfg.contrato || '').split('/')[0].trim();
  const obraTxt = stripAccents(String(cfg.obra || '').split('—')[0].trim()).toUpperCase();
  const codeLine = 'CODIGO: INF-GOMS-CL-002 REV.0' + ((t.correlativoEditable && r.header.correlativo) ? ` N° ${r.header.correlativo}` : '');

  function drawHeader(){
    const top = 38, logoH = 36, logoW = logoH * ZUBLIN_LOGO_RATIO;
    doc.addImage(ZUBLIN_LOGO_PNG, 'PNG', margin, top, logoW, logoH);
    doc.setFont('times','normal'); doc.setFontSize(8.5); doc.setTextColor(INK);
    doc.text(codeLine, pageW - margin, top + 9, { align:'right' });
    doc.text(fmtDateDisplay(r.header.fecha), pageW - margin, top + 22, { align:'right' });
    doc.setFontSize(7.2);
    const cx = margin + logoW + 14;
    const contractLines = doc.splitTextToSize(`CONTRATO N.° ${contratoNum} "${obraTxt}"`, pageW - margin - cx);
    doc.text(contractLines, cx, top + logoH - 2 - (contractLines.length - 1) * 9);
    y = top + logoH + 30;
  }
  function ensureSpace(h){
    if (y + h > pageH - 58){ doc.addPage(); drawHeader(); }
  }
  function heading(text, minFollowing){
    ensureSpace(24 + (minFollowing || 28));
    doc.setFont('times','bold'); doc.setFontSize(12.5); doc.setTextColor(INK);
    doc.text(text, margin, y);
    y += 20;
  }
  function detalle(rest){
    doc.setFont('helvetica','bold'); doc.setFontSize(SZ); doc.setTextColor(BODY);
    const lab = 'Detalle: ';
    const lw = doc.getTextWidth(lab);
    const lines = doc.splitTextToSize(rest, contentW - lw);
    ensureSpace(lines.length * LH + 10);
    doc.setFont('helvetica','bold'); doc.text(lab, margin, y);
    doc.setFont('helvetica','normal'); doc.text(lines[0], margin + lw, y);
    y += LH;
    if (lines.length > 1){ doc.text(doc.splitTextToSize(lines.slice(1).join(' '), contentW), margin, y); y += (lines.length - 1) * LH; }
    y += 8;
  }
  function plain(text){
    doc.setFont('helvetica','normal'); doc.setFontSize(SZ); doc.setTextColor(BODY);
    ensureSpace(LH + 6);
    doc.text(text, margin + 16, y); y += LH + 8;
  }
  // Greedy word wrap with a different width for the first line (so a bold title can sit on it).
  function wrap(text, firstW, otherW){
    const out = [];
    String(text || '').split('\n').forEach(par => {
      const words = par.split(/\s+/).filter(Boolean);
      let line = '', w = out.length ? otherW : firstW;
      if (!words.length){ out.push(''); return; }
      words.forEach(word => {
        const test = line ? line + ' ' + word : word;
        if (doc.getTextWidth(test) <= w || !line) line = test;
        else { out.push(line); line = word; w = otherW; }
      });
      out.push(line);
    });
    return out;
  }
  // • [bold title] text… — bullet dot, optional bold lead-in on the first line, wrapped text.
  function bullet(text, boldLead, opts){
    opts = opts || {};
    const bx = margin + (opts.level ? 36 : 16), tx = bx + 18;
    const dot = opts.level ? 'o' : '•';
    doc.setFontSize(SZ);
    let leadW = 0;
    if (boldLead){ doc.setFont('helvetica','bold'); leadW = doc.getTextWidth(boldLead + ' '); }
    doc.setFont('helvetica','normal');
    const lines = wrap(text, contentW - (tx - margin) - leadW, contentW - (tx - margin));
    ensureSpace(Math.min(lines.length, 3) * LH + 8);
    doc.setFont('helvetica','normal'); doc.setFontSize(SZ - 1); doc.setTextColor(BULLET);
    doc.text(dot, bx, y);
    doc.setFontSize(SZ); doc.setTextColor(BODY);
    let first = true;
    lines.forEach(ln => {
      if (y + LH > pageH - 58){ doc.addPage(); drawHeader(); doc.setFont('helvetica','normal'); doc.setFontSize(SZ); doc.setTextColor(BODY); }
      if (first && boldLead){
        doc.setFont('helvetica','bold'); doc.text(boldLead, tx, y);
        doc.setFont('helvetica','normal'); doc.text(ln, tx + leadW, y);
      } else { doc.setFont('helvetica','normal'); doc.text(ln, tx, y); }
      first = false; y += LH;
    });
    y += opts.gap == null ? 7 : opts.gap;
  }

  // ---- Page 1: header + title block ----
  drawHeader();
  doc.setFont('times','bold'); doc.setFontSize(20); doc.setTextColor(INK);
  doc.text('INFORME INSPECCIONES', margin, y); y += 30;
  doc.setFontSize(12.5); doc.text('DEPARTAMENTO DE CALIDAD', margin, y); y += 28;
  const turnoTxt = /^d/i.test(r.header.turno || '') ? 'Día' : 'Noche';
  const areas = []; (r.labores || []).forEach(l => { const a = (l.titulo || '').trim(); if (a && !areas.includes(a)) areas.push(a); });
  const areaTxt = areas.join(' / ') || r.header.sectorPk || r.header.area || '—';
  [['FECHA', fmtDateDisplay(r.header.fecha)], ['TURNO', turnoTxt], ['AREA', areaTxt]].forEach(([k, v]) => {
    doc.setFont('times','bold'); doc.setFontSize(11); doc.setTextColor(INK); doc.text(k, margin, y);
    doc.text(':', margin + 96, y);
    doc.setFont('times','normal');
    const vl = doc.splitTextToSize(String(v), contentW - 112);
    doc.text(vl, margin + 112, y); y += 17 * vl.length;
  });
  y += 20;

  // ---- A. Personal ----
  heading('A.- PERSONAL EN TURNO');
  if (!(r.personal || []).length) plain('Sin registros.');
  (r.personal || []).forEach(p => bullet(`${p.nombre || '(sin nombre)'} (${p.cargo || 'Inspector de Calidad'})`, '', { gap: 9 }));
  y += 2;

  // ---- B. Resumen (objetivo) ----
  heading('B.- RESUMEN DEL TURNO');
  const objetivo = (r.objetivo || '').trim().toUpperCase();
  if (objetivo) bullet(objetivo); else plain('Sin registros.');
  y += 2;

  // ---- D. Antecedentes ----
  heading('D.- ANTECEDENTES');
  const antecedentes = (r.antecedentes || '').trim().toUpperCase();
  if (antecedentes) bullet(antecedentes); else plain('Sin registros.');
  y += 2;

  // ---- E. Desarrollo ----
  heading('E.- DESARROLLO', 52);
  detalle('Análisis de los registros del turno y hallazgos que ameritaron corrección:');
  const labores = r.labores || [];
  if (!labores.length) plain('Sin registros.');
  labores.forEach((l, li) => {
    const isParadas = t.laborKind === 'paradas';
    const obs = joinCat(l.cats && l.cats.positiva).concat(isParadas ? paradasTexts(l) : joinCat(l.cats && l.cats.desviacion));
    const cor = joinCat(l.cats && l.cats.correctiva);
    const title = (t.procTitle || t.short.toUpperCase()) + (labores.length > 1 && (l.titulo || '').trim() ? ` — ${l.titulo.trim()}` : '') + ':';
    bullet(obs.length ? obs.join(' - ') : 'Sin observaciones.', title, { gap: cor.length ? 5 : 10 });
    if (cor.length){
      bullet('Se detectaron las siguientes desviaciones operativas que requieren intervención:', 'Acción Correctiva:', { gap: 5 });
      cor.forEach(c => bullet('- ' + c, '', { level: 1, gap: 5 }));
      y += 5;
    }
  });
  y += 2;

  // ---- F. Conclusión ----
  heading('F.- CONCLUSION', 52);
  detalle('Veredicto técnico del departamento de calidad sobre las condiciones del área evaluada:');
  const concl = (r.conclusiones || '').trim();
  if (concl) bullet(concl); else plain('Sin registros.');
  y += 2;

  // ---- G. Evidencia adjunta ----
  const fotos = []; labores.forEach(l => (l.fotos || []).forEach(f => fotos.push(f)));
  heading('G.- EVIDENCIA ADJUNTA');
  if (fotos.length) bullet(`Se adjunta Anexo 1 con ${fotos.length} fotografía${fotos.length === 1 ? '' : 's'} del registro visual.`);
  else plain('Sin fotografías adjuntas.');

  // ---- Anexo 1 ----
  if (fotos.length){
    doc.addPage(); drawHeader();
    doc.setFont('times','bold'); doc.setFontSize(13); doc.setTextColor(INK);
    doc.text('ANEXO 1 - REGISTRO FOTOGRÁFICO', margin, y); y += 26;
    const gap = 12, cellW = (contentW - gap) / 2, boxH = 190, descH = 28;
    for (let i = 0; i < fotos.length; i += 2){
      const row = fotos.slice(i, i + 2);
      const caps = row.map(f => (fotoCaption(f) || '').trim());
      const rowH = boxH + (caps.some(Boolean) ? descH : 0);
      if (y + rowH > pageH - 58){ doc.addPage(); drawHeader(); }
      row.forEach((f, ci) => {
        const x = margin + ci * (cellW + gap);
        let dim; try { const pr = doc.getImageProperties(fotoUrl(f)); dim = { w: pr.width, h: pr.height }; } catch(e){ dim = { w: 4, h: 3 }; }
        let w = cellW, h = w * dim.h / dim.w;
        if (h > boxH){ h = boxH; w = h * dim.w / dim.h; }
        const ix = x + (cellW - w) / 2;
        try { doc.addImage(fotoUrl(f), 'JPEG', ix, y, w, h, undefined, 'FAST'); } catch(e){}
        if (caps[ci]){
          doc.setDrawColor(LINE); doc.setFillColor('#f4f5f6');
          doc.rect(ix, y + h, w, descH, 'FD');
          doc.setFont('helvetica','normal'); doc.setFontSize(7.6); doc.setTextColor('#141414');
          doc.text(doc.splitTextToSize(caps[ci], w - 8).slice(0, 3), ix + 4, y + h + 10);
        }
      });
      y += rowH + 12;
    }
  }

  // ---- Footer on every page ----
  const total = doc.internal.getNumberOfPages();
  for (let p = 1; p <= total; p++){
    doc.setPage(p);
    doc.setFont('times','normal'); doc.setFontSize(8); doc.setTextColor(BULLET);
    doc.text('ZÜBLIN — Departamento de Calidad', pageW / 2, pageH - 28, { align:'center' });
    doc.text(`Página ${p} de ${total}`, pageW - margin, pageH - 28, { align:'right' });
  }
  return doc.output('blob');
}

/* ------------------------------------ PDF GENERATION — Cambio de Turno Diario ------------------------------------
   Dedicated builder so the output matches the original "RESUMEN DE ACTIVIDADES CAMBIO DE TURNO" template
   (plain white page, red ZÜBLIN mark, black section headings A.- … G.-) instead of the colored
   banner/pill style used for the other 4 report types. */
function buildTurnoPdfBlob(r, cfg, t){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'letter' }); markMissingRed(doc);
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 42;
  const contentW = pageW - margin*2;
  let y = margin;

  const COL = { ink:'#141414', dim:'#5f6d78', line:'#c8ccd0', red:'#e2231a', black:'#141414' };

  function ensureSpace(h){
    if (y + h > pageH - 50){ doc.addPage(); y = margin; drawRunningHeader(); }
  }
  function drawRunningHeader(){
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
    doc.text(t.name, margin, y);
    doc.setDrawColor(COL.line); doc.line(margin, y+6, pageW-margin, y+6);
    y += 22;
  }
  function heading(text, opts={}){
    // minFollowing reserves extra room below the heading for its own content, so the
    // heading itself jumps to the next page together with what follows it instead of being
    // stranded alone at the bottom of the current one — same fix as buildPdfBlob's heading().
    ensureSpace(20 + (opts.minFollowing || 0));
    doc.setFont('helvetica','bold'); doc.setFontSize(opts.size || 11); doc.setTextColor(opts.color || COL.black);
    doc.text(text, margin, y);
    y += (opts.size||11)*0.9 + 8;
  }
  function paragraph(text, opts={}){
    if (!text) text = '—';
    doc.setFont('helvetica', opts.bold?'bold':'normal');
    doc.setFontSize(opts.size || 10);
    doc.setTextColor(opts.color || COL.ink);
    const indent = opts.indent || 0;
    const lines = doc.splitTextToSize(text, contentW - indent);
    ensureSpace(lines.length * 13 + 4);
    doc.text(lines, margin + indent, y);
    y += lines.length * 13 + (opts.gap ?? 6);
  }
  function numberedList(items, opts={}){
    if (!items.length){ paragraph(opts.emptyText || 'Sin registros.', { indent: opts.indent||16, color: COL.dim }); return; }
    const size = 10, color = COL.ink;
    doc.setFont('helvetica','normal'); doc.setFontSize(size); doc.setTextColor(color);
    items.forEach((it, i) => {
      const lines = doc.splitTextToSize(`${i+1}. ${it}`, contentW - (opts.indent||16));
      const pageBefore = doc.internal.getNumberOfPages();
      ensureSpace(lines.length*13 + 2);
      // See categoryBlock()'s comment in buildPdfBlob: ensureSpace() can trigger a page break
      // that leaves the running header's own (bold/small/dim) style active — restore this
      // list's style right before drawing so an item pushed onto a new page doesn't inherit it.
      if (doc.internal.getNumberOfPages() !== pageBefore){
        doc.setFont('helvetica','normal'); doc.setFontSize(size); doc.setTextColor(color);
      }
      doc.text(lines, margin + (opts.indent||16), y);
      y += lines.length*13 + 2;
    });
    y += 6;
  }
  function bulletList(items, opts={}){
    if (!items.length){ paragraph(opts.emptyText || 'Sin registros.', { indent: opts.indent||16, color: COL.dim }); return; }
    const size = 10, color = COL.ink;
    doc.setFont('helvetica','normal'); doc.setFontSize(size); doc.setTextColor(color);
    items.forEach(it => {
      const lines = doc.splitTextToSize(`•  ${it}`, contentW - (opts.indent||16));
      const pageBefore = doc.internal.getNumberOfPages();
      ensureSpace(lines.length*13 + 2);
      if (doc.internal.getNumberOfPages() !== pageBefore){
        doc.setFont('helvetica','normal'); doc.setFontSize(size); doc.setTextColor(color);
      }
      doc.text(lines, margin + (opts.indent||16), y);
      y += lines.length*13 + 2;
    });
    y += 6;
  }
  function table(rows, cols, opts={}){
    if (!rows.length){ paragraph(opts.emptyText || 'Sin filas.', { indent:16, color: COL.dim }); return; }
    const rowH = 20, headH = 20;
    const widths = cols.map(c => c.w);
    ensureSpace(headH);
    let x = margin;
    doc.setFillColor('#e9ecef'); doc.rect(margin, y, contentW, headH, 'F');
    doc.setDrawColor(COL.line); doc.rect(margin, y, contentW, headH, 'S');
    doc.setFont('helvetica','bold'); doc.setFontSize(8.5); doc.setTextColor(COL.black);
    cols.forEach((c, i) => { doc.text(c.label, x + 6, y + 14); doc.line(x, y, x, y+headH); x += widths[i]; });
    doc.line(x, y, x, y+headH);
    y += headH;
    doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(COL.ink);
    rows.forEach(row => {
      // Compute row height from the tallest wrapped cell so long "estatus" text isn't clipped.
      const wrapped = cols.map((c,i) => doc.splitTextToSize(String(row[i] ?? '—'), widths[i]-10));
      const h = Math.max(rowH, Math.max(...wrapped.map(w => w.length))*11 + 8);
      const pageBefore = doc.internal.getNumberOfPages();
      ensureSpace(h);
      // Same restore-after-page-break fix as the lists above: a break here would otherwise
      // leave the table row using the header's bold style instead of the normal row style.
      if (doc.internal.getNumberOfPages() !== pageBefore){
        doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(COL.ink);
      }
      x = margin;
      doc.setDrawColor(COL.line); doc.rect(margin, y, contentW, h, 'S');
      wrapped.forEach((lines, i) => { doc.text(lines, x+6, y+13); doc.line(x, y, x, y+h); x += widths[i]; });
      doc.line(x, y, x, y+h);
      y += h;
    });
    y += 10;
  }

  // ---- Header: real ZÜBLIN mark + generation date ----
  const logoH2 = 30, logoW2 = logoH2 * ZUBLIN_LOGO_RATIO;
  doc.addImage(ZUBLIN_LOGO_PNG, 'PNG', margin, y, logoW2, logoH2);

  doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(COL.dim);
  doc.text(fmtDateDisplay(todayISO()), pageW - margin, y + 16, { align:'right' });
  const turnoCodeLine = (t.correlativoEditable && r.header.correlativo) ? `CÓDIGO: ${t.code} N° ${r.header.correlativo}` : `CÓDIGO: ${t.code}`;
  doc.setFontSize(7.5);
  doc.text(turnoCodeLine, pageW - margin, y + 28, { align:'right' });
  y += 40;

  doc.setDrawColor(COL.black); doc.setLineWidth(0.75); doc.line(margin, y, pageW-margin, y);
  y += 12;
  doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(COL.dim);
  const contractLine = `CONTRATO Nº ${cfg.contrato} "${cfg.obra}"`;
  const contractLines = doc.splitTextToSize(contractLine, contentW);
  doc.text(contractLines, margin, y);
  y += contractLines.length * 10 + 10;
  doc.line(margin, y, pageW-margin, y);
  y += 22;

  // ---- Title ----
  doc.setFont('helvetica','bold'); doc.setFontSize(17); doc.setTextColor(COL.black);
  doc.text(t.name, margin, y);
  y += 22;
  doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(COL.black);
  doc.text('DEPARTAMENTO DE CALIDAD', margin, y);
  y += 26;

  // ---- Periodo / Cobertura de datos / Hora / Turnos / Grupo ----
  const periodoTxt = (r.header.periodoInicio || r.header.periodoFin)
    ? `${r.header.periodoInicio ? fmtDateDisplay(r.header.periodoInicio) : '—'} al ${r.header.periodoFin ? fmtDateDisplay(r.header.periodoFin) : '—'}`
    : '—';
  [['PERIODO:', periodoTxt], ['COBERTURA DE DATOS:', fmtDateDisplay(r.header.fecha)], ['HORA:', r.header.hora], ['TURNOS:', r.header.turno === 'NOCHE' ? 'Noche' : 'Día'], ['GRUPO:', r.header.grupo]].forEach(row => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9.5); doc.setTextColor(COL.black);
    doc.text(row[0], margin, y);
    doc.setFont('helvetica','normal'); doc.setFontSize(9.5);
    doc.text(String(row[1]), margin + 128, y);
    y += 15;
  });
  y += 10;

  // ---- A.- Personal en turno ---- (original template uses "N.- Nombre (Cargo)." with a
  // dash) — split into Turno Noche / Turno Día; whichever one wasn't the active shift for
  // this report (r.header.turno) prints "Sin registro" rather than an empty sub-list, same
  // as the person's own "the one I didn't pick should say Sin registro" rule.
  heading('A.-PERSONAL EN TURNO:', { minFollowing: 26 });
  const personalTurnoBlock = (list, label) => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9.5); doc.setTextColor(COL.ink);
    ensureSpace(15);
    doc.text(label, margin + 16, y);
    y += 15;
    doc.setFont('helvetica','normal'); doc.setFontSize(10);
    if (!list || !list.length){
      ensureSpace(13);
      doc.setFont('helvetica','italic'); doc.setTextColor(COL.dim);
      doc.text('Sin registro', margin + 30, y);
      y += 15;
      return;
    }
    doc.setTextColor(COL.ink);
    list.forEach((p, i) => {
      const txt = `${i+1}.- ${p.nombre || '(sin nombre)'} (${p.cargo}).`;
      const lines = doc.splitTextToSize(txt, contentW - 30);
      ensureSpace(lines.length*13 + 2);
      doc.text(lines, margin + 30, y);
      y += lines.length*13 + 2;
    });
  };
  personalTurnoBlock(r.personalNoche, 'Turno Noche:');
  personalTurnoBlock(r.personalDia, 'Turno Día:');
  y += 6;

  // Per-section photos: harmonious size — never full-bleed, never tiny. Every photo is fitted
  // inside the same box (92 % of the content width, 300 pt tall), centered, aspect preserved.
  const PH_MAXW = contentW * 0.92, PH_MAXH = 300, PH_DESC = 26, PH_GAP = 10;
  function photoSize(f){
    let dim;
    try { const p = doc.getImageProperties(fotoUrl(f)); dim = { w: p.width, h: p.height }; }
    catch(e){ dim = { w: 4, h: 3 }; }
    let w = PH_MAXW, h = w * (dim.h / dim.w);
    if (h > PH_MAXH){ h = PH_MAXH; w = h * (dim.w / dim.h); }
    return { w, h };
  }
  function photoBlockH(f){ const { h } = photoSize(f); return h + ((f.caption || '').trim() ? PH_DESC : 0) + PH_GAP; }
  function photoGrid(photos){
    if (!photos || !photos.length) return;
    photos.forEach(f => {
      const { w, h } = photoSize(f);
      const caption = (f.caption || '').trim();
      const rowDescH = caption ? PH_DESC : 0;
      ensureSpace(h + rowDescH + PH_GAP);
      const x = margin + (contentW - w) / 2;
      try { doc.addImage(fotoUrl(f), 'JPEG', x, y, w, h, undefined, 'FAST'); } catch(e){}
      if (caption){
        doc.setDrawColor(COL.line); doc.setFillColor('#f4f5f6');
        doc.rect(x, y + h, w, PH_DESC, 'FD');
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7.6); doc.setTextColor(COL.ink);
        doc.text(doc.splitTextToSize(caption, w - 8).slice(0, 3), x + 4, y + h + 9);
      }
      y += h + rowDescH + PH_GAP;
    });
    y += 4;
  }
  // Keep a heading together with its text and its FIRST photo: if they don't fit in what is
  // left of the page (but would fit on a fresh page) jump to a new page BEFORE the heading.
  function keepTogether(textH, photos){
    let need = 30 + textH + ((photos && photos.length) ? photoBlockH(photos[0]) : 0);
    const usable = pageH - margin - 50 - 22;
    if (need > usable) need = Math.min(need, 30 + textH + 60);
    if (y + need > pageH - 50){ doc.addPage(); y = margin; drawRunningHeader(); }
  }
  function estLines(items, prefix, indent){
    doc.setFont('helvetica','normal'); doc.setFontSize(10);
    if (!items.length) return 15;
    return items.reduce((a, it) => a + doc.splitTextToSize(prefix + it, contentW - indent).length * 13 + 2, 0) + 6;
  }
  function estPara(text){
    doc.setFont('helvetica','normal'); doc.setFontSize(10);
    return doc.splitTextToSize(text || '—', contentW).length * 13 + 6;
  }

  // ---- B.- Estatus de frentes último día ----
  heading('B.- ESTATUS DE FRENTES ÚLTIMO DÍA:', { minFollowing: 20 });
  numberedList(r.turno.frentes.map(f => {
    const base = `${f.ubicacion || '(sin ubicación)'}: ${f.detalle || ''}`.trim();
    return f.protocolo ? `${base} PF : ${f.protocolo}` : base;
  }), { indent:16, emptyText: 'Sin frentes registrados.' });

  // ---- C.- Laboratorio Idiem ----
  heading('C.-LABORATORIO IDIEM', { minFollowing: 20 });
  numberedList(r.turno.laboratorio.map(l => {
    if (!l.tipoEnsayo && !l.detalle) return '';
    const cant = l.cantidad || '1';
    let line = `${cant} ${l.tipoEnsayo || '—'}`;
    if (l.detalle) line += ` — ${l.detalle}`;
    if (l.boleta) line += ` — N° de Boleta: ${l.boleta}`;
    return line;
  }).filter(Boolean), { indent:16, emptyText: 'Sin registros de laboratorio.' });

  // ---- D.- Detalles de terminación: two sub-headings, each with its observations only ----
  heading('D.-DETALLES DE TERMINACIÓN', { minFollowing: 60 });
  const subObs = (title, text, photos) => {
    keepTogether(estPara((text || '').trim()) + 8, photos);
    doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(COL.ink);
    doc.text(title, margin, y);
    y += 16;
    paragraph((text || '').trim() || '—');
    photoGrid(photos);
  };
  subObs('Detalles de terminación por sistema', (r.turno.kpiSistema || {}).observaciones, r.turno.dSistemaFotos);
  subObs('Detalles de terminación internos', (r.turno.kpiInternos || {}).observaciones, r.turno.dInternosFotos);

  // ---- E.- Pernos cable ----
  { const it = r.turno.caminatas.map(c => c.texto).filter(Boolean); keepTogether(estLines(it, '•  ', 16), r.turno.caminatasFotos);
  heading('E.- PERNOS CABLE', { minFollowing: 20 });
  bulletList(it, { indent:16, emptyText: 'Sin registros.' }); }
  photoGrid(r.turno.caminatasFotos);

  // ---- F.- Otros hitos del período ----
  { const it = r.turno.cierreDT.map(c => c.texto).filter(Boolean); keepTogether(estLines(it, '•  ', 16), r.turno.cierreDTFotos);
  heading('F.- OTROS HITOS DEL PERÍODO', { minFollowing: 20 });
  bulletList(it, { indent:16, emptyText: 'Sin registros.' }); }
  photoGrid(r.turno.cierreDTFotos);

  // ---- G.- Planilla control de hormigón y shotcrete ----
  keepTogether(estPara(r.turno.planillaHormigon), r.turno.planillaFotos);
  heading('G.- PLANILLA CONTROL DE HORMIGÓN Y SHOTCRETE', { minFollowing: 26 });
  paragraph(r.turno.planillaHormigon || '—');
  photoGrid(r.turno.planillaFotos);

  // ---- H.- Felicitaciones ----
  keepTogether(estPara(r.turno.felicitaciones), r.turno.felicitacionesFotos);
  heading('H.- FELICITACIONES', { minFollowing: 26 });
  paragraph(r.turno.felicitaciones || '—');
  photoGrid(r.turno.felicitacionesFotos);

  // ---- I.- Desviaciones ----
  keepTogether(estPara(r.turno.otros), r.turno.desviacionesFotos);
  heading('I.- DESVIACIONES', { minFollowing: 26 });
  paragraph(r.turno.otros || '—');
  photoGrid(r.turno.desviacionesFotos);

  // ---- J / K / L (lists) ----
  { const it = (r.turno.protocolosProceso || []).map(c => c.texto).filter(Boolean); keepTogether(estLines(it, '•  ', 16), r.turno.protocolosProcesoFotos);
  heading('J.- ESTATUS DE PROTOCOLOS EN PROCESO', { minFollowing: 20 });
  bulletList(it, { indent:16, emptyText: 'Sin registros.' }); }
  photoGrid(r.turno.protocolosProcesoFotos);
  { const it = (r.turno.logShotcrete || []).map(c => c.texto).filter(Boolean); keepTogether(estLines(it, '•  ', 16), r.turno.logShotcreteFotos);
  heading('K.- LOG DE SHOTCRETE', { minFollowing: 20 });
  bulletList(it, { indent:16, emptyText: 'Sin registros.' }); }
  photoGrid(r.turno.logShotcreteFotos);
  { const it = (r.turno.logHormigones || []).map(c => c.texto).filter(Boolean); keepTogether(estLines(it, '•  ', 16), r.turno.logHormigonesFotos);
  heading('L.- LOG DE HORMIGONES', { minFollowing: 20 });
  bulletList(it, { indent:16, emptyText: 'Sin registros.' }); }
  photoGrid(r.turno.logHormigonesFotos);

  // ---- Evidencia fotográfica — separate annex page(s). Every photo gets its own full-width
  // row, scaled from its real aspect ratio (via doc.getImageProperties(), never distorted)
  // and capped to fit within one page's height so a tall photo is shrunk rather than split
  // across a page break. Previously a "wide" photo got a full-width row while a normal one
  // was squeezed two-per-row into a half-width cell — content that happened to be roughly
  // square or portrait but still needed its full width to stay legible (a scanned table, for
  // instance) looked squashed next to a true landscape photo, and which treatment a photo got
  // looked inconsistent from one to the next. One column for everything removes that
  // inconsistency. The caption box below the photo is only drawn when the person actually
  // typed a leyenda — an empty box reading "Sin leyenda" for every caption-less photo was
  // noise, not information. ----
  if ((r.turno.fotos || []).length){
    // Pre-read every photo's real pixel dimensions up front so the space-reservation check
    // right here can use the ACTUAL height the first row will need, rather than a fixed
    // guess — otherwise the title could get approved for the current page while the real
    // first row still didn't fit, pushing it alone to a fresh page with the title stranded
    // above it on the previous one.
    const photoDims = r.turno.fotos.map(f => {
      try { const props = doc.getImageProperties(fotoUrl(f)); return { w: props.width, h: props.height }; }
      catch(e){ return { w: 1, h: 1 }; } // malformed image: treat as square so it still lays out somewhere
    });
    const descH = 26;
    const maxPageImgH = pageH - margin - 50 - descH; // leaves room for the caption box + footer
    const titleH = 26;
    const firstCaption = (r.turno.fotos[0].caption || '').trim();
    const firstH = Math.min(contentW * (photoDims[0].h / photoDims[0].w), maxPageImgH) + (firstCaption ? descH : 0);
    if (y + titleH + firstH > pageH - 50){ doc.addPage(); y = margin; }
    doc.setFont('helvetica','bold'); doc.setFontSize(13); doc.setTextColor(COL.blue || COL.red);
    doc.text('Evidencia fotográfica', margin, y, { maxWidth: contentW });
    y += 26;
    const gap = 10;

    let rowY = y;
    r.turno.fotos.forEach((f, i) => {
      const dim = photoDims[i];
      let w = contentW, h = w * (dim.h / dim.w);
      if (h > maxPageImgH){ h = maxPageImgH; w = h * (dim.w / dim.h); }
      const caption = (f.caption || '').trim();
      const rowDescH = caption ? descH : 0;
      const cellH = h + rowDescH;
      if (rowY + cellH > pageH - 50){ doc.addPage(); rowY = margin; }
      const x = margin + (contentW - w) / 2; // centered if capped narrower than the full width
      try { doc.addImage(fotoUrl(f), 'JPEG', x, rowY, w, h, undefined, 'FAST'); } catch(e){ /* ignore malformed image */ }
      if (caption){
        doc.setDrawColor(COL.line); doc.setFillColor('#f4f5f6');
        doc.rect(x, rowY + h, w, descH, 'FD');
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7.6); doc.setTextColor(COL.ink);
        doc.text(doc.splitTextToSize(caption, w - 8).slice(0, 3), x + 4, rowY + h + 9);
      }
      rowY += cellH + gap;
    });
    y = rowY + 6;
  }

  // Cambio de Turno (Diario) no lleva bloque de firmas al final — se eliminó a pedido.

  // ---- Footer + page numbers ----
  const total = doc.internal.getNumberOfPages();
  for (let p=1; p<=total; p++){
    doc.setPage(p);
    doc.setDrawColor(COL.line); doc.line(margin, pageH-46, pageW-margin, pageH-46);
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(COL.dim);
    doc.text(`Generado por: ${cfg.generadoPor || '—'}  |  ${fmtDateDisplay(todayISO())}  |  ${t.name}`, margin, pageH-13);
    doc.text(`Página ${p} de ${total}`, pageW-margin, pageH-13, { align:'right' });
  }

  return doc.output('blob');
}

/* ---- PDF: Cambio de Turno General (RESUMEN DE ACTIVIDADES CAMBIO DE TURNO, ítems A-G) ----
   Follows the client's own template: same header block as the Diario, then A.- Personal (both
   shifts printed for real — General covers a whole period), B.- to G.- in the template's
   order, and NO signature block at the end (removed on request for both Cambio de Turno
   types). Each section's photos print right under that section's list, never in a separate
   annex: normal photos two per row, a wide one (scanned table, plan) on its own full-width
   row. Every photo is fitted inside its cell keeping its real proportions — never stretched. */
function buildTurnoGeneralPdfBlob(r, cfg, t){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'pt', format:'letter' }); markMissingRed(doc);
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 42;
  const contentW = pageW - margin*2;
  let y = margin;
  const g = r.turnoGeneral || {};
  const COL = { ink:'#141414', dim:'#5f6d78', line:'#c8ccd0', red:'#e2231a', black:'#141414' };

  function ensureSpace(h){
    if (y + h > pageH - 50){ doc.addPage(); y = margin; drawRunningHeader(); }
  }
  function drawRunningHeader(){
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(COL.dim);
    doc.text(t.name, margin, y);
    doc.setDrawColor(COL.line); doc.line(margin, y+6, pageW-margin, y+6);
    y += 22;
  }
  function heading(text, opts={}){
    ensureSpace(20 + (opts.minFollowing || 0));
    doc.setFont('helvetica','bold'); doc.setFontSize(opts.size || 11); doc.setTextColor(opts.color || COL.black);
    doc.text(text, margin, y);
    y += (opts.size||11)*0.9 + 8;
  }
  function subheading(text){
    ensureSpace(16 + 20);
    doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(COL.ink);
    doc.text(text, margin + 8, y);
    y += 15;
  }
  function paragraph(text, opts={}){
    if (!text) text = '—';
    doc.setFont('helvetica', opts.bold?'bold':(opts.italic?'italic':'normal'));
    doc.setFontSize(opts.size || 10);
    doc.setTextColor(opts.color || COL.ink);
    const indent = opts.indent || 0;
    const lines = doc.splitTextToSize(text, contentW - indent);
    ensureSpace(lines.length * 13 + 4);
    doc.text(lines, margin + indent, y);
    y += lines.length * 13 + (opts.gap ?? 6);
  }
  // One list renderer for numbered / bulleted / plain lines. items: [{ text, bold }].
  function listOf(items, mode, indent){
    const size = 10;
    items.forEach((it, i) => {
      const prefix = mode === 'numbered' ? `${i+1}. ` : mode === 'bullet' ? '•  ' : '';
      const lines = doc.splitTextToSize(prefix + it.text, contentW - indent);
      const pageBefore = doc.internal.getNumberOfPages();
      ensureSpace(lines.length*13 + 2);
      // A page break inside the list leaves the running header's style active — restore ours.
      doc.setFont('helvetica', it.bold ? 'bold' : 'normal'); doc.setFontSize(size); doc.setTextColor(COL.ink);
      doc.text(lines, margin + indent, y);
      y += lines.length*13 + 2;
    });
    y += 6;
  }
  // Every photo gets its own full-width row, scaled from its real aspect ratio (never
  // distorted) and capped to fit within one page's height so a tall photo is shrunk rather
  // than split across a page break. Previously a "wide" photo (aspect ratio >= 1.6) got a
  // full-width row while anything else was squeezed two-per-row into a half-width cell — a
  // scanned table or chart that happened to be roughly square or portrait (like the one
  // reported) still needed its full width to stay legible, so it looked squashed next to a
  // normal photo, and which photos got which treatment looked inconsistent from one annex to
  // the next. One column for everything removes that inconsistency. The caption box below
  // the photo is only drawn when the person actually typed a leyenda — an empty box reading
  // "Sin leyenda" for every caption-less photo was noise, not information.
  function photoGrid(photos){
    if (!photos.length) return;
    const gap = 10, descH = 26;
    const maxPageImgH = pageH - margin - 50 - descH - 30;
    const dims = photos.map(f => {
      try { const p = doc.getImageProperties(fotoUrl(f)); return { w: p.width, h: p.height }; }
      catch(e){ return { w: 4, h: 3 }; }
    });
    photos.forEach((f, i) => {
      let w = contentW, h = w * (dims[i].h / dims[i].w);
      if (h > maxPageImgH){ h = maxPageImgH; w = h * (dims[i].w / dims[i].h); }
      const caption = (f.caption || '').trim();
      const rowDescH = caption ? descH : 0;
      ensureSpace(h + rowDescH + gap);
      const x = margin + (contentW - w) / 2;
      try { doc.addImage(fotoUrl(f), 'JPEG', x, y, w, h, undefined, 'FAST'); } catch(e){}
      if (caption){
        doc.setDrawColor(COL.line); doc.setFillColor('#f4f5f6');
        doc.rect(x, y + h, w, descH, 'FD');
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7.6); doc.setTextColor(COL.ink);
        doc.text(doc.splitTextToSize(caption, w - 8).slice(0, 3), x + 4, y + h + 9);
      }
      y += h + rowDescH + gap;
    });
    y += 4;
  }

  // ---- Header (same block as the Diario) ----
  const logoH2 = 30, logoW2 = logoH2 * ZUBLIN_LOGO_RATIO;
  doc.addImage(ZUBLIN_LOGO_PNG, 'PNG', margin, y, logoW2, logoH2);
  doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(COL.dim);
  doc.text(fmtDateDisplay(todayISO()), pageW - margin, y + 16, { align:'right' });
  doc.setFontSize(7.5);
  doc.text((t.correlativoEditable && r.header.correlativo) ? `CODIGO: ${t.code} N° ${r.header.correlativo}` : `CODIGO: ${t.code}`, pageW - margin, y + 28, { align:'right' });
  y += 40;
  doc.setDrawColor(COL.black); doc.setLineWidth(0.75); doc.line(margin, y, pageW-margin, y);
  y += 12;
  doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(COL.dim);
  const contractLines = doc.splitTextToSize(`CONTRATO Nº ${cfg.contrato} "${cfg.obra}"`, contentW);
  doc.text(contractLines, margin, y);
  y += contractLines.length * 10 + 10;
  doc.line(margin, y, pageW-margin, y);
  y += 22;

  doc.setFont('helvetica','bold'); doc.setFontSize(17); doc.setTextColor(COL.black);
  doc.text(t.name, margin, y);
  y += 22;
  doc.setFontSize(11);
  doc.text('DEPARTAMENTO DE CALIDAD', margin, y);
  y += 26;

  const periodoTxt = (r.header.periodoInicio || r.header.periodoFin)
    ? `${r.header.periodoInicio ? fmtDateDisplay(r.header.periodoInicio) : '—'} AL ${r.header.periodoFin ? fmtDateDisplay(r.header.periodoFin) : '—'}`
    : '—';
  [['PERIODO:', periodoTxt], ['TURNOS:', 'Día y Noche'], ['COBERTURA DE DATOS:', r.header.cobertura || '—']].forEach(row => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9.5); doc.setTextColor(COL.black);
    doc.text(row[0], margin, y);
    doc.setFont('helvetica','normal');
    const valLines = doc.splitTextToSize(String(row[1]), contentW - 128);
    doc.text(valLines, margin + 128, y);
    y += Math.max(15, valLines.length * 12 + 3);
  });
  y += 10;

  // ---- A.- Personal en turno — both shifts, printed for real ----
  heading('A.- PERSONAL EN TURNO', { minFollowing: 26 });
  const personalBlock = (list, label) => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9.5); doc.setTextColor(COL.ink);
    ensureSpace(15);
    doc.text(label, margin + 8, y);
    y += 15;
    if (!list || !list.length){
      ensureSpace(13);
      doc.setFont('helvetica','italic'); doc.setFontSize(10); doc.setTextColor(COL.dim);
      doc.text('Sin registro', margin + 30, y);
      y += 15;
      return;
    }
    list.forEach((p, i) => {
      const lines = doc.splitTextToSize(`•  ${p.nombre || '(sin nombre)'} (${p.cargo}).`, contentW - 30);
      ensureSpace(lines.length*13 + 2);
      doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(COL.ink);
      doc.text(lines, margin + 30, y);
      y += lines.length*13 + 2;
    });
  };
  personalBlock(r.personalNoche, 'Turno Noche:');
  personalBlock(r.personalDia, 'Turno Día:');
  y += 6;

  // ---- B.- to G.-: line builders + list style per section, in the template's order ----
  const txt = (k) => (g[k] || []).map(it => (it.texto || '').trim()).filter(Boolean).map(text => ({ text }));
  const builders = {
    frentes: () => (g.frentes || []).map(f => {
      if (!f.ubicacion && !f.detalle && !f.protocolo) return null;
      let base = `${f.ubicacion || '(sin ubicación)'}${f.detalle ? ' : ' + f.detalle : ''}`;
      if (f.protocolo) base += ` ${f.protocolo}`;
      return { text: base };
    }).filter(Boolean),
    laboratorio: () => (g.laboratorio || []).map(l => {
      const tipo = (l.tipoEnsayo || '').trim(), det = (l.detalle || '').trim(), cant = (l.cantidad || '').trim();
      if (!tipo && !det) return null;
      // A record with no test type is a sub-heading line inside the list (e.g. "Resumen ensayos G2:").
      if (!tipo) return { text: det, bold: true };
      let line = `${cant ? cant + ' ' : ''}${tipo}`;
      if (det) line += ` — ${det}`;
      if (l.boleta) line += ` — N° de Boleta: ${l.boleta}`;
      return { text: line };
    }).filter(Boolean),
    protocolos: () => txt('protocolos'),
    terminacionInternos: () => txt('terminacionInternos'),
    terminacionSistema: () => txt('terminacionSistema'),
    pernosCable: () => txt('pernosCable'),
    caminatasInternas: () => txt('caminatasInternas'),
    informesInternos: () => txt('informesInternos'),
    alertas: () => txt('alertas')
  };
  const listMode = { frentes:'numbered', laboratorio:'bullet', protocolos:'plain', terminacionInternos:'numbered', terminacionSistema:'numbered', pernosCable:'bullet', caminatasInternas:'numbered', informesInternos:'numbered', alertas:'bullet' };

  TURNO_GENERAL_SECTION_KEYS.forEach(k => {
    const def = TURNO_GENERAL_SECTIONS[k];
    const items = builders[k]();
    const photos = g[k + 'Fotos'] || [];
    if (def.groupTitle) heading(def.groupTitle.toUpperCase(), { minFollowing: 40 });
    if (def.sub) subheading(def.title.toUpperCase());
    else heading(def.title.toUpperCase(), { minFollowing: 30 });
    if (items.length) listOf(items, listMode[k], def.sub ? 24 : 16);
    else if (!photos.length) paragraph('Sin registros.', { indent: def.sub ? 24 : 16, color: COL.dim });
    photoGrid(photos);
  });

  // ---- Footer + page numbers (no signature block: removed on request) ----
  const total = doc.internal.getNumberOfPages();
  for (let p=1; p<=total; p++){
    doc.setPage(p);
    doc.setDrawColor(COL.line); doc.line(margin, pageH-46, pageW-margin, pageH-46);
    doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(COL.dim);
    doc.text(`Generado por: ${cfg.generadoPor || '—'}  |  ${fmtDateDisplay(todayISO())}  |  ${t.name}`, margin, pageH-13);
    doc.text(`Página ${p} de ${total}`, pageW-margin, pageH-13, { align:'right' });
  }
  return doc.output('blob');
}

/* ------------------------------------ SYNC (webhook auto-send) ------------------------------------ */
async function sendReportViaWebhook(r, blob, cfg){
  if (!cfg.webhookUrl) return false;
  const t = REPORT_TYPES[r.typeId];
  const form = new FormData();
  form.append('file', blob, pdfFilename(r));
  // Caminata Interna's Excel Punch rides along in the same webhook POST as a second file,
  // so a configured automatic-send destination (email/OneDrive via Power Automate, etc.)
  // gets both documents together without the person having to attach anything by hand.
  if (t?.id === 'caminata'){
    try {
      const excelBlob = await buildPunchExcelBlob(r);
      form.append('fileExcel', excelBlob, punchExcelFilename(r));
    } catch(e){ console.error('Excel Punch generation failed during webhook send', e); }
  }
  form.append('meta', JSON.stringify({
    tipo: t.name,
    tipoCorto: t.short,
    header: r.header,
    correosDestino: (cfg.destinoCorreo||'').split(',').map(s => s.trim()).filter(Boolean),
    // Suggested OneDrive path for a Power Automate flow to file this PDF under, grouped by report type.
    carpetaSugerida: `${cfg.oneDriveFolder || 'Informes GOMS'}/${t.short}`
  }));
  const res = await fetch(cfg.webhookUrl, { method:'POST', body: form });
  if (!res.ok) throw new Error('Webhook respondió ' + res.status);
  r.status = 'enviado'; r.sentAt = Date.now(); r.updatedAt = Date.now();
  await idbPut('reports', r);
  return true;
}

async function attemptAutoSync(){
  const cfg = await getConfig();
  if (!cfg.webhookUrl) return;
  const reports = await idbGetAll('reports');
  const pending = reports.filter(r => r.status === 'listo');
  for (const r of pending){
    try {
      const blob = safeBuildPdf(r, cfg);
      await sendReportViaWebhook(r, blob, cfg);
      toast(`Informe ${r.header.sectorPk || ''} enviado automáticamente`);
    } catch(e){ console.error('auto-sync failed for', r.id, e); }
  }
  if (ROUTE.screen === 'home' || ROUTE.screen === 'historial') render();
}

/* ------------------------------------ Service worker + init ------------------------------------ */
if ('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.warn('SW registration failed', err));
  });
}

/* Every text field in the app types in UPPERCASE, independent of the phone's keyboard case —
   a single delegated listener beats adding this to every input everywhere. Fields where case
   actually matters (emails, URLs) opt out with data-no-upper. Cursor position is preserved so
   mid-text edits don't jump to the end. */
document.addEventListener('input', (e) => {
  const el = e.target;
  if (!el.matches || !el.matches('input[type="text"], textarea')) return;
  if (el.hasAttribute('data-no-upper')) return;
  const upper = el.value.toUpperCase();
  if (upper === el.value) return;
  const start = el.selectionStart, end = el.selectionEnd;
  el.value = upper;
  if (start !== null && start !== undefined) el.setSelectionRange(start, end);
}, true);

// Capture-phase click guard: while a render is in progress (RENDERING === true, set by
// go() around every render() call), swallow every click before it reaches whatever button
// happens to be on screen. This is the JS-level backstop for #app.app-rendering's
// pointer-events:none — belt and suspenders against the exact race that let a tap land on a
// button mid-render with no listener attached yet (reported as the app "getting stuck" with
// neither Atrás nor Continuar responding). Capture phase (the `true` third argument) means
// this runs and can stopPropagation() before the click ever reaches an individual button's
// own listener, regardless of where in the DOM that listener lives.
document.addEventListener('click', (e) => {
  if (RENDERING){ e.stopPropagation(); e.preventDefault(); }
}, true);

document.addEventListener('DOMContentLoaded', () => {
  render();
  if (navigator.onLine) attemptAutoSync();
});
