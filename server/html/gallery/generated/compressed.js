// Automatically generated file.  Do not edit!
function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:n(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}var q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function r(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var t=r(this);function v(a,b){if(b)a:{var c=t;a=a.split(".");for(var e=0;e<a.length-1;e++){var h=a[e];if(!(h in c))break a;c=c[h]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&q(c,a,{configurable:!0,writable:!0,value:b})}}
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});v("Array.prototype.includes",function(a){return a?a:function(b,c){var e=this;e instanceof String&&(e=String(e));var h=e.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var k=e[c];if(k===b||Object.is(k,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(b,c||0)}});
v("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(e+(k||"")+"_"+h++,k)}function c(k,m){this.l=k;q(this,"description",{configurable:!0,writable:!0,value:m})}if(a)return a;c.prototype.toString=function(){return this.l};var e="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",h=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var e=t[b[c]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&q(e.prototype,a,{configurable:!0,writable:!0,value:function(){return w(n(this))}})}return a});function w(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
v("WeakMap",function(a){function b(d){this.i=(f+=Math.random()+1).toString();if(d){d=p(d);for(var g;!(g=d.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function e(d){var g=typeof d;return"object"===g&&null!==d||"function"===g}function h(d){if(!x(d,m)){var g=new c;q(d,m,{value:g})}}function k(d){var g=Object[d];g&&(Object[d]=function(l){if(l instanceof c)return l;Object.isExtensible(l)&&h(l);return g(l)})}if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),g=Object.seal({}),
l=new a([[d,2],[g,3]]);if(2!=l.get(d)||3!=l.get(g))return!1;l.delete(d);l.set(g,4);return!l.has(d)&&4==l.get(g)}catch(u){return!1}}())return a;var m="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var f=0;b.prototype.set=function(d,g){if(!e(d))throw Error("Invalid WeakMap key");h(d);if(!x(d,m))throw Error("WeakMap key fail: "+d);d[m][this.i]=g;return this};b.prototype.get=function(d){return e(d)&&x(d,m)?d[m][this.i]:void 0};b.prototype.has=function(d){return e(d)&&x(d,
m)&&x(d[m],this.i)};b.prototype.delete=function(d){return e(d)&&x(d,m)&&x(d[m],this.i)?delete d[m][this.i]:!1};return b});
v("Map",function(a){function b(){var f={};return f.h=f.next=f.head=f}function c(f,d){var g=f[1];return w(function(){if(g){for(;g.head!=f[1];)g=g.h;for(;g.next!=g.head;)return g=g.next,{done:!1,value:d(g)};g=null}return{done:!0,value:void 0}})}function e(f,d){var g=d&&typeof d;"object"==g||"function"==g?k.has(d)?g=k.get(d):(g=""+ ++m,k.set(d,g)):g="p_"+d;var l=f[0][g];if(l&&x(f[0],g))for(f=0;f<l.length;f++){var u=l[f];if(d!==d&&u.key!==u.key||d===u.key)return{id:g,list:l,index:f,g:u}}return{id:g,list:l,
index:-1,g:void 0}}function h(f){this[0]={};this[1]=b();this.size=0;if(f){f=p(f);for(var d;!(d=f.next()).done;)d=d.value,this.set(d[0],d[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),d=new a(p([[f,"s"]]));if("s"!=d.get(f)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var g=d.entries(),l=g.next();if(l.done||l.value[0]!=f||"s"!=l.value[1])return!1;l=g.next();return l.done||4!=l.value[0].x||
"t"!=l.value[1]||!g.next().done?!1:!0}catch(u){return!1}}())return a;var k=new WeakMap;h.prototype.set=function(f,d){f=0===f?0:f;var g=e(this,f);g.list||(g.list=this[0][g.id]=[]);g.g?g.g.value=d:(g.g={next:this[1],h:this[1].h,head:this[1],key:f,value:d},g.list.push(g.g),this[1].h.next=g.g,this[1].h=g.g,this.size++);return this};h.prototype.delete=function(f){f=e(this,f);return f.g&&f.list?(f.list.splice(f.index,1),f.list.length||delete this[0][f.id],f.g.h.next=f.g.next,f.g.next.h=f.g.h,f.g.head=null,
this.size--,!0):!1};h.prototype.clear=function(){this[0]={};this[1]=this[1].h=b();this.size=0};h.prototype.has=function(f){return!!e(this,f).g};h.prototype.get=function(f){return(f=e(this,f).g)&&f.value};h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};h.prototype.keys=function(){return c(this,function(f){return f.key})};h.prototype.values=function(){return c(this,function(f){return f.value})};h.prototype.forEach=function(f,d){for(var g=this.entries(),l;!(l=g.next()).done;)l=
l.value,f.call(d,l[1],l[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
var y=function(){return"object"===typeof self?self:"object"===typeof window?window:"object"===typeof global?global:this}();
var z={};y.Blockly||(y.Blockly={});y.Blockly.Msg||(y.Blockly.Msg=z);
var A={am:"\u12a0\u121b\u122d\u129b",ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",be:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456","be-tarask":"Tara\u0161kievica",bg:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",bn:"\u09ac\u09be\u0982\u09b2\u09be",br:"Brezhoneg",ca:"Catal\u00e0",cs:"\u010cesky",da:"Dansk",de:"Deutsch",el:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",en:"English",eo:"Esperanto",es:"Espa\u00f1ol",eu:"Euskara",fa:"\u0641\u0627\u0631\u0633\u06cc",
fi:"Suomi",fo:"F\u00f8royskt",fr:"Fran\u00e7ais",gl:"Galego",ha:"Hausa",he:"\u05e2\u05d1\u05e8\u05d9\u05ea",hi:"\u0939\u093f\u0928\u094d\u0926\u0940",hr:"Hrvatski",hu:"Magyar",hy:"\u0570\u0561\u0575\u0565\u0580\u0567\u0576",ia:"Interlingua",id:"Bahasa Indonesia",ig:"As\u1ee5s\u1ee5 Igbo",is:"\u00cdslenska",it:"Italiano",ja:"\u65e5\u672c\u8a9e",kab:"Taqbaylit",kn:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",ko:"\ud55c\uad6d\uc5b4",lt:"Lietuvi\u0173",lv:"Latvie\u0161u",ms:"Bahasa Melayu",my:"\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
nb:"Norsk (bokm\u00e5l)",nl:"Nederlands, Vlaams",pl:"Polski",pms:"Piemont\u00e8is",pt:"Portugu\u00eas","pt-br":"Portugu\u00eas Brasileiro",ro:"Rom\u00e2n\u0103",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",sc:"Sardu",sk:"Sloven\u010dina",sl:"Sloven\u0161\u010dina",sq:"Shqip",sr:"\u0421\u0440\u043f\u0441\u043a\u0438","sr-latn":"Srpski",sv:"Svenska",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",ti:"\u1275\u130d\u122d\u129b",tr:"T\u00fcrk\u00e7e",uk:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
ur:"\u0627\u064f\u0631\u062f\u064f\u0648\u202c",vi:"Ti\u1ebfng Vi\u1ec7t",yo:"\u00c8d\u00e8 Yor\u00f9b\u00e1","zh-hans":"\u7b80\u4f53\u4e2d\u6587","zh-hant":"\u6b63\u9ad4\u4e2d\u6587"},B=window.BlocklyGamesLang,C=window.BlocklyGamesLanguages,D=["ar","fa","he","ur"].includes(B),E=/\.html$/.test(window.location.pathname),F=document.getElementById.bind(document);
function G(a){try{if(a.lineno||a.colno){var b=Date.now();if(!(G.j+1E4>b)){G.j=b;var c=new XMLHttpRequest,e="error="+encodeURIComponent((a.error&&a.error.stack||a.message+" "+a.filename+" "+a.lineno+":"+a.colno).trim())+"&url="+encodeURIComponent(window.location);c.open("POST","/scripts/errorReporter.py");c.setRequestHeader("Content-Type","application/x-www-form-urlencoded");c.send(e);console.log("Error reported.")}}}catch(h){console.log(a.error)}}G.j=0;E||window.addEventListener("error",G);
function H(a,b){return(a=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)")))?decodeURIComponent(a[1].replace(/\+/g,"%20")):b}H("level","NaN");
function I(){var a=J("Gallery",!0);document.title=J("Games.name",!0)+(a&&" : ")+a;document.dir=D?"rtl":"ltr";document.head.parentElement.setAttribute("lang",B);if(a=F("languageMenu")){for(var b=[],c=p(C),e=c.next();!e.done;e=c.next())e=e.value,b.push([A[e],e]);b.sort(function(h,k){return h[0]>k[0]?1:h[0]<k[0]?-1:0});a.options.length=0;b=p(b);for(c=b.next();!c.done;c=b.next())e=p(c.value),c=e.next().value,e=e.next().value,c=new Option(c,e),e===B&&(c.selected=!0),a.options.add(c);1>=a.options.length&&
(a.style.display="none")}for(a=1;10>=a;a++)b=F("level"+a),c=!!K(a),b&&c&&(b.className+=" level_done");(a=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&a.setAttribute("content","width=725, initial-scale=.35, user-scalable=no")}
function L(){var a=F("languageMenu");a=encodeURIComponent(a.options[a.selectedIndex].value);var b=window.location.search;b=1>=b.length?"?lang="+a:/[?&]lang=[^&]*/.test(b)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b}function K(a){var b=M;try{var c=window.localStorage[b+a]}catch(e){}return c}
function J(a,b){a=window.BlocklyGamesMsg[a];void 0===a&&(a="[Unknown message: ${name}]");return b?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):a};
var N=new Map;
function O(a,b){var c=P,e="GET";e=void 0===e?"POST":e;N.has(a)&&N.get(a).abort();var h=new XMLHttpRequest;N.set(a,h);h.onload=function(){if(200===this.status)c&&c.call(h);else if(b)b.call(h);else{var k=J("Games.httpRequestError",!1)+"\nXHR status: "+h.status;if("object"===typeof BlocklyDialogs){var m=F("linkButton");BlocklyDialogs.s(m,k)}else alert(k)}N.delete(a)};"POST"===e?(h.open(e,a),h.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),h.send("")):(h.open(e,a),h.send())};
var M="gallery",Q,R=!1,S="";function T(){if(!R&&null!==S){F("loading").style.visibility="visible";var a="/scripts/gallery_view.py?app="+encodeURIComponent(Q);S&&(a+="&cursor="+encodeURIComponent(S));O(a,function(){console.warn("Load returned status "+this.status);R=!1});R=!0}}function P(){R=!1;F("loading").style.visibility="hidden";var a=JSON.parse(this.responseText);if(a.length){var b=a[a.length-1];b.cursor?(S=b.cursor,a.pop()):S=null;a.forEach(U)}else S=null}
function U(a){var b=document.createElement("div"),c=a.key,e=Q;b.innerHTML='\n<div class="galleryThumb">\n  <a href="/'+e+"?level=10#"+c+'"><img src="'+a.thumb+'"></a>\n</div>\n<div class="galleryTitle">\n  <a href="/'+e+"?level=10#"+c+'">'+a.title+"</a>\n</div>\n";F("gallery").appendChild(b)}function V(){F("loading").getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)&&T()}
(function(a){function b(){window.BlocklyGamesMsg?(window.BlocklyMsg&&(z=window.BlocklyMsg),a()):setTimeout(b,99)}window.addEventListener("load",b)})(function(){Q=H("app","");var a={turtle:J("Games.turtle",!0)+" : ",movie:J("Games.movie",!0)+" : ",music:J("Games.music",!0)+" : "}[Q];if(void 0===a)throw Error("Unknown app: "+Q);var b=document.body,c=document.body.innerHTML,e={lang:B,m:E};a+=J("Gallery",!0);a='\n<span id="title">\n  <a href="'+(e.m?"index.html":"./")+"?lang="+e.lang+'">'+J("Games.name",
!0)+"</a> : "+a+"\n</span>\n";if(e.level){for(var h=" &nbsp ",k=1;k<=e.o;k++){var m="?lang="+e.lang+"&level="+k;h+=" ";h=k===e.level?h+('<span class="level_number level_done" id="level'+k+'">'+k+"</span>"):k===e.o?h+('<a class="level_number" id="level'+k+'" href="'+m+'">'+k+"</a>"):h+('<a class="level_dot" id="level'+k+'" href="'+m+'"></a>')}e=h}else e="";b.innerHTML=c+('\n\n<table width="100%">\n  <tr>\n    <td>\n      <h1>\n        '+(a+"\n        "+e+'\n      </h1>\n    </td>\n    <td id="header_cta" class="farSide">\n      <select id="languageMenu"></select>\n      \n      \n      \n    </td>\n  </tr>\n</table>\n\n<div id="gallery">\n</div>\n<div id="loading">\n  <img src="common/loading.gif">\n</div>\n'));
T();I();F("languageMenu").addEventListener("change",L,!0);setInterval(V,200)});
