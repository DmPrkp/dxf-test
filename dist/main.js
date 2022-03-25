(()=>{var e={43:function(e,a,t){var r,n;!function(s,o){"use strict";r=function(){var e=function(){},a="undefined",t=typeof window!==a&&typeof window.navigator!==a&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function n(e,a){var t=e[a];if("function"==typeof t.bind)return t.bind(e);try{return Function.prototype.bind.call(t,e)}catch(a){return function(){return Function.prototype.apply.apply(t,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function o(r){return"debug"===r&&(r="log"),typeof console!==a&&("trace"===r&&t?s:void 0!==console[r]?n(console,r):void 0!==console.log?n(console,"log"):e)}function c(a,t){for(var n=0;n<r.length;n++){var s=r[n];this[s]=n<a?e:this.methodFactory(s,a,t)}this.log=this.debug}function l(e,t,r){return function(){typeof console!==a&&(c.call(this,t,r),this[e].apply(this,arguments))}}function i(e,a,t){return o(e)||l.apply(this,arguments)}function u(e,t,n){var s,o=this;t=null==t?"WARN":t;var l="loglevel";function u(){var e;if(typeof window!==a&&l){try{e=window.localStorage[l]}catch(e){}if(typeof e===a)try{var t=window.document.cookie,r=t.indexOf(encodeURIComponent(l)+"=");-1!==r&&(e=/^([^;]+)/.exec(t.slice(r))[1])}catch(e){}return void 0===o.levels[e]&&(e=void 0),e}}"string"==typeof e?l+=":"+e:"symbol"==typeof e&&(l=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=n||i,o.getLevel=function(){return s},o.setLevel=function(t,n){if("string"==typeof t&&void 0!==o.levels[t.toUpperCase()]&&(t=o.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=o.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(s=t,!1!==n&&function(e){var t=(r[e]||"silent").toUpperCase();if(typeof window!==a&&l){try{return void(window.localStorage[l]=t)}catch(e){}try{window.document.cookie=encodeURIComponent(l)+"="+t+";"}catch(e){}}}(t),c.call(o,t,e),typeof console===a&&t<o.levels.SILENT)return"No console available for logging"},o.setDefaultLevel=function(e){t=e,u()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(t,!1),function(){if(typeof window!==a&&l){try{return void window.localStorage.removeItem(l)}catch(e){}try{window.document.cookie=encodeURIComponent(l)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var d=u();null==d&&(d=t),o.setLevel(d,!1)}var d=new u,v={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var a=v[e];return a||(a=v[e]=new u(e,d.getLevel(),d.methodFactory)),a};var b=typeof window!==a?window.log:void 0;return d.noConflict=function(){return typeof window!==a&&window.log===d&&(window.log=b),d},d.getLoggers=function(){return v},d.default=d,d},void 0===(n=r.call(a,t,a,e))||(e.exports=n)}()}},a={};function t(r){var n=a[r];if(void 0!==n)return n.exports;var s=a[r]={exports:{}};return e[r].call(s.exports,s,s.exports,t),s.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{"use strict";class e{constructor(e){this._pointer=0,this._eof=!1,this._data=e}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const e={code:parseInt(this._data[this._pointer])};return this._pointer++,e.value=a(e.code,this._data[this._pointer].trim()),this._pointer++,0===e.code&&"EOF"===e.value&&(this._eof=!0),this.lastReadGroup=e,e}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const e={code:parseInt(this._data[this._pointer])};return e.value=a(e.code,this._data[this._pointer+1].trim()),e}rewind(e=1){this._pointer=this._pointer-2*e}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function a(e,a){return e<=9?a:e>=10&&e<=59?parseFloat(a):e>=60&&e<=99?parseInt(a):e>=100&&e<=109?a:e>=110&&e<=149?parseFloat(a):e>=160&&e<=179?parseInt(a):e>=210&&e<=239?parseFloat(a):e>=270&&e<=289?parseInt(a):e>=290&&e<=299?function(e){if("0"===e)return!1;if("1"===e)return!0;throw TypeError("String '"+e+"' cannot be cast to Boolean type")}(a):e>=300&&e<=369?a:e>=370&&e<=389?parseInt(a):e>=390&&e<=399?a:e>=400&&e<=409?parseInt(a):e>=410&&e<=419?a:e>=420&&e<=429?parseInt(a):e>=430&&e<=439?a:e>=440&&e<=459?parseInt(a):e>=460&&e<=469?parseFloat(a):e>=470&&e<=481||999===e||e>=1e3&&e<=1009?a:e>=1010&&e<=1059?parseFloat(a):e>=1060&&e<=1071?parseInt(a):(console.log("WARNING: Group code does not have a defined type: %j",{code:e,value:a}),a)}const r=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function n(e){const a={};e.rewind();let t=e.next(),r=t.code;if(a.x=t.value,r+=10,t=e.next(),t.code!=r)throw new Error("Expected code for point value to be "+r+" but got "+t.code+".");return a.y=t.value,r+=10,t=e.next(),t.code!=r?(e.rewind(),a):(a.z=t.value,a)}function s(e,a,t){switch(a.code){case 0:e.type=a.value;break;case 5:e.handle=a.value;break;case 6:e.lineType=a.value;break;case 8:e.layer=a.value;break;case 48:e.lineTypeScale=a.value;break;case 60:e.visible=0===a.value;break;case 62:e.colorIndex=a.value,e.color=(n=Math.abs(a.value),r[n]);break;case 67:e.inPaperSpace=0!==a.value;break;case 100:break;case 101:for(;0!=a.code;)a=t.next();t.rewind();break;case 330:e.ownerHandle=a.value;break;case 347:e.materialObjectHandle=a.value;break;case 370:e.lineweight=a.value;break;case 420:e.color=a.value;break;case 1e3:e.extendedData=e.extendedData||{},e.extendedData.customStrings=e.extendedData.customStrings||[],e.extendedData.customStrings.push(a.value);break;case 1001:e.extendedData=e.extendedData||{},e.extendedData.applicationName=a.value;break;default:return!1}var n;return!0}class o{constructor(){this.ForEntityName="3DFACE"}parseEntity(e,a){const t={type:a.value,vertices:[]};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 70:t.shape=1==(1&a.value),t.hasContinuousLinetypePattern=128==(128&a.value);break;case 10:t.vertices=c(e,a),a=e.lastReadGroup;break;default:s(t,a,e)}a=e.next()}return t}}function c(e,a){var t=[],r=!1,n=!1;for(let o=0;o<=4;o++){for(var s={};!e.isEOF()&&0!==a.code&&!n;){switch(a.code){case 10:case 11:case 12:case 13:if(r){n=!0;continue}s.x=a.value,r=!0;break;case 20:case 21:case 22:case 23:s.y=a.value;break;case 30:case 31:case 32:case 33:s.z=a.value;break;default:return t}a=e.next()}t.push(s),r=!1,n=!1}return e.rewind(),t}class l{constructor(){this.ForEntityName="ARC"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.center=n(e);break;case 40:t.radius=a.value;break;case 50:t.startAngle=Math.PI/180*a.value;break;case 51:t.endAngle=Math.PI/180*a.value,t.angleLength=t.endAngle-t.startAngle;break;case 210:t.extrusionDirectionX=a.value;break;case 220:t.extrusionDirectionY=a.value;break;case 230:t.extrusionDirectionZ=a.value;break;default:s(t,a,e)}a=e.next()}return t}}class i{constructor(){this.ForEntityName="ATTDEF"}parseEntity(e,a){var t={type:a.value,scale:1,textStyle:"STANDARD"};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 1:t.text=a.value;break;case 2:t.tag=a.value;break;case 3:t.prompt=a.value;break;case 7:t.textStyle=a.value;break;case 10:t.startPoint=n(e);break;case 11:t.endPoint=n(e);break;case 39:t.thickness=a.value;break;case 40:t.textHeight=a.value;break;case 41:t.scale=a.value;break;case 50:t.rotation=a.value;break;case 51:t.obliqueAngle=a.value;break;case 70:t.invisible=!!(1&a.value),t.constant=!!(2&a.value),t.verificationRequired=!!(4&a.value),t.preset=!!(8&a.value);break;case 71:t.backwards=!!(2&a.value),t.mirrored=!!(4&a.value);break;case 72:t.horizontalJustification=a.value;break;case 73:t.fieldLength=a.value;break;case 74:t.verticalJustification=a.value;break;case 100:break;case 210:t.extrusionDirectionX=a.value;break;case 220:t.extrusionDirectionY=a.value;break;case 230:t.extrusionDirectionZ=a.value;break;default:s(t,a,e)}a=e.next()}return t}}class u{constructor(){this.ForEntityName="CIRCLE"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.center=n(e);break;case 40:t.radius=a.value;break;case 50:t.startAngle=Math.PI/180*a.value;break;case 51:const r=Math.PI/180*a.value;r<t.startAngle?t.angleLength=r+2*Math.PI-t.startAngle:t.angleLength=r-t.startAngle,t.endAngle=r;break;default:s(t,a,e)}a=e.next()}return t}}class d{constructor(){this.ForEntityName="DIMENSION"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 2:t.block=a.value;break;case 10:t.anchorPoint=n(e);break;case 11:t.middleOfText=n(e);break;case 12:t.insertionPoint=n(e);break;case 13:t.linearOrAngularPoint1=n(e);break;case 14:t.linearOrAngularPoint2=n(e);break;case 15:t.diameterOrRadiusPoint=n(e);break;case 16:t.arcPoint=n(e);break;case 70:t.dimensionType=a.value;break;case 71:t.attachmentPoint=a.value;break;case 42:t.actualMeasurement=a.value;break;case 1:t.text=a.value;break;case 50:t.angle=a.value;break;default:s(t,a,e)}a=e.next()}return t}}class v{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.center=n(e);break;case 11:t.majorAxisEndPoint=n(e);break;case 40:t.axisRatio=a.value;break;case 41:t.startAngle=a.value;break;case 42:t.endAngle=a.value;break;case 2:t.name=a.value;break;default:s(t,a,e)}a=e.next()}return t}}class b{constructor(){this.ForEntityName="INSERT"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 2:t.name=a.value;break;case 41:t.xScale=a.value;break;case 42:t.yScale=a.value;break;case 43:t.zScale=a.value;break;case 10:t.position=n(e);break;case 50:t.rotation=a.value;break;case 70:t.columnCount=a.value;break;case 71:t.rowCount=a.value;break;case 44:t.columnSpacing=a.value;break;case 45:t.rowSpacing=a.value;break;case 210:t.extrusionDirection=n(e);break;default:s(t,a,e)}a=e.next()}return t}}class p{constructor(){this.ForEntityName="LINE"}parseEntity(e,a){const t={type:a.value,vertices:[]};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.vertices.unshift(n(e));break;case 11:t.vertices.push(n(e));break;case 210:t.extrusionDirection=n(e);break;case 100:break;default:s(t,a,e)}a=e.next()}return t}}class f{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(e,a){const t={type:a.value,vertices:[]};let r=0;for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 38:t.elevation=a.value;break;case 39:t.depth=a.value;break;case 70:t.shape=1==(1&a.value),t.hasContinuousLinetypePattern=128==(128&a.value);break;case 90:r=a.value;break;case 10:t.vertices=k(r,e);break;case 43:0!==a.value&&(t.width=a.value);break;case 210:t.extrusionDirectionX=a.value;break;case 220:t.extrusionDirectionY=a.value;break;case 230:t.extrusionDirectionZ=a.value;break;default:s(t,a,e)}a=e.next()}return t}}function k(e,a){if(!e||e<=0)throw Error("n must be greater than 0 verticies");const t=[];let r=!1,n=!1,s=a.lastReadGroup;for(let o=0;o<e;o++){const e={};for(;!a.isEOF()&&0!==s.code&&!n;){switch(s.code){case 10:if(r){n=!0;continue}e.x=s.value,r=!0;break;case 20:e.y=s.value;break;case 30:e.z=s.value;break;case 40:e.startWidth=s.value;break;case 41:e.endWidth=s.value;break;case 42:0!=s.value&&(e.bulge=s.value);break;default:return a.rewind(),r&&t.push(e),a.rewind(),t}s=a.next()}t.push(e),r=!1,n=!1}return a.rewind(),t}class h{constructor(){this.ForEntityName="MTEXT"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 3:case 1:t.text?t.text+=a.value:t.text=a.value;break;case 10:t.position=n(e);break;case 11:t.directionVector=n(e);break;case 40:t.height=a.value;break;case 41:t.width=a.value;break;case 50:t.rotation=a.value;break;case 71:t.attachmentPoint=a.value;break;case 72:t.drawingDirection=a.value;break;default:s(t,a,e)}a=e.next()}return t}}class x{constructor(){this.ForEntityName="POINT"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.position=n(e);break;case 39:t.thickness=a.value;break;case 210:t.extrusionDirection=n(e);break;case 100:break;default:s(t,a,e)}a=e.next()}return t}}class y{constructor(){this.ForEntityName="VERTEX"}parseEntity(e,a){var t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.x=a.value;break;case 20:t.y=a.value;break;case 30:t.z=a.value;break;case 40:case 41:case 50:break;case 42:0!=a.value&&(t.bulge=a.value);break;case 70:t.curveFittingVertex=0!=(1&a.value),t.curveFitTangent=0!=(2&a.value),t.splineVertex=0!=(8&a.value),t.splineControlPoint=0!=(16&a.value),t.threeDPolylineVertex=0!=(32&a.value),t.threeDPolylineMesh=0!=(64&a.value),t.polyfaceMeshVertex=0!=(128&a.value);break;case 71:t.faceA=a.value;break;case 72:t.faceB=a.value;break;case 73:t.faceC=a.value;break;case 74:t.faceD=a.value;break;default:s(t,a,e)}a=e.next()}return t}}class g{constructor(){this.ForEntityName="POLYLINE"}parseEntity(e,a){var t={type:a.value,vertices:[]};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:case 20:case 30:case 40:case 41:case 71:case 72:case 73:case 74:case 75:break;case 39:t.thickness=a.value;break;case 70:t.shape=0!=(1&a.value),t.includesCurveFitVertices=0!=(2&a.value),t.includesSplineFitVertices=0!=(4&a.value),t.is3dPolyline=0!=(8&a.value),t.is3dPolygonMesh=0!=(16&a.value),t.is3dPolygonMeshClosed=0!=(32&a.value),t.isPolyfaceMesh=0!=(64&a.value),t.hasContinuousLinetypePattern=0!=(128&a.value);break;case 210:t.extrusionDirection=n(e);break;default:s(t,a,e)}a=e.next()}return t.vertices=function(e,a){const t=new y,r=[];for(;!e.isEOF();)if(0===a.code)if("VERTEX"===a.value)r.push(t.parseEntity(e,a)),a=e.lastReadGroup;else if("SEQEND"===a.value){E(e,a);break}return r}(e,a),t}}function E(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!=a.code;)s(t,a,e),a=e.next();return t}class w{constructor(){this.ForEntityName="SOLID"}parseEntity(e,a){const t={type:a.value,points:[]};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.points[0]=n(e);break;case 11:t.points[1]=n(e);break;case 12:t.points[2]=n(e);break;case 13:t.points[3]=n(e);break;case 210:t.extrusionDirection=n(e);break;default:s(t,a,e)}a=e.next()}return t}}class m{constructor(){this.ForEntityName="SPLINE"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.controlPoints||(t.controlPoints=[]),t.controlPoints.push(n(e));break;case 11:t.fitPoints||(t.fitPoints=[]),t.fitPoints.push(n(e));break;case 12:t.startTangent=n(e);break;case 13:t.endTangent=n(e);break;case 40:t.knotValues||(t.knotValues=[]),t.knotValues.push(a.value);break;case 70:0!=(1&a.value)&&(t.closed=!0),0!=(2&a.value)&&(t.periodic=!0),0!=(4&a.value)&&(t.rational=!0),0!=(8&a.value)&&(t.planar=!0),0!=(16&a.value)&&(t.planar=!0,t.linear=!0);break;case 71:t.degreeOfSplineCurve=a.value;break;case 72:t.numberOfKnots=a.value;break;case 73:t.numberOfControlPoints=a.value;break;case 74:t.numberOfFitPoints=a.value;break;case 210:t.normalVector=n(e);break;default:s(t,a,e)}a=e.next()}return t}}class F{constructor(){this.ForEntityName="TEXT"}parseEntity(e,a){const t={type:a.value};for(a=e.next();!e.isEOF()&&0!==a.code;){switch(a.code){case 10:t.startPoint=n(e);break;case 11:t.endPoint=n(e);break;case 40:t.textHeight=a.value;break;case 41:t.xScale=a.value;break;case 50:t.rotation=a.value;break;case 1:t.text=a.value;break;case 72:t.halign=a.value;break;case 73:t.valign=a.value;break;default:s(t,a,e)}a=e.next()}return t}}var N=t(43),P=t.n(N);function T(e,a,t){return e.code===a&&e.value===t}function O(e){P().debug("unhandled group "+L(e))}function L(e){return e.code+":"+e.value}P().setLevel("error");window.parse=class{constructor(){var e;this._entityHandlers={},(e=this).registerEntityHandler(o),e.registerEntityHandler(l),e.registerEntityHandler(i),e.registerEntityHandler(u),e.registerEntityHandler(d),e.registerEntityHandler(v),e.registerEntityHandler(b),e.registerEntityHandler(p),e.registerEntityHandler(f),e.registerEntityHandler(h),e.registerEntityHandler(x),e.registerEntityHandler(g),e.registerEntityHandler(w),e.registerEntityHandler(m),e.registerEntityHandler(F)}parse(e){return"string"==typeof e?this._parse(e):(console.error("Cannot read dxf source of type `"+typeof e),null)}registerEntityHandler(e){const a=new e;this._entityHandlers[a.ForEntityName]=a}parseSync(e){return this.parse(e)}parseStream(e){let a="";const t=this;return new Promise(((r,n)=>{e.on("data",(e=>{a+=e})),e.on("end",(()=>{try{r(t._parse(a))}catch(e){n(e)}})),e.on("error",(e=>{n(e)}))}))}_parse(a){const t={};let n=0;const s=a.split(/\r\n|\r|\n/g),o=new e(s);if(!o.hasNext())throw Error("Empty file");const c=this;let l;function i(){let e=null,a=null;const t={};for(l=o.next();;){if(T(l,0,"ENDSEC")){e&&(t[e]=a);break}9===l.code?(e&&(t[e]=a),e=l.value):10===l.code?a={x:l.value}:20===l.code?a.y=l.value:30===l.code?a.z=l.value:a=l.value,l=o.next()}return l=o.next(),t}function u(){const e={};for(l=o.next();"EOF"!==l.value&&!T(l,0,"ENDSEC");)if(T(l,0,"BLOCK")){P().debug("block {");const a=d();P().debug("}"),x(a),a.name?e[a.name]=a:P().error('block with handle "'+a.handle+'" is missing a name.')}else O(l),l=o.next();return e}function d(){const e={};for(l=o.next();"EOF"!==l.value;){switch(l.code){case 1:e.xrefPath=l.value,l=o.next();break;case 2:e.name=l.value,l=o.next();break;case 3:e.name2=l.value,l=o.next();break;case 5:e.handle=l.value,l=o.next();break;case 8:e.layer=l.value,l=o.next();break;case 10:e.position=h(l),l=o.next();break;case 67:e.paperSpace=!(!l.value||1!=l.value),l=o.next();break;case 70:0!=l.value&&(e.type=l.value),l=o.next();break;case 100:l=o.next();break;case 330:e.ownerHandle=l.value,l=o.next();break;case 0:if("ENDBLK"==l.value)break;e.entities=k(!0);break;default:O(l),l=o.next()}if(T(l,0,"ENDBLK")){l=o.next();break}}return e}function v(){const e={};for(l=o.next();"EOF"!==l.value&&!T(l,0,"ENDSEC");)T(l,0,"TABLE")?(l=o.next(),f[l.value]?(P().debug(l.value+" Table {"),e[f[l.value].tableName]=p(l),P().debug("}")):P().debug("Unhandled Table "+l.value)):l=o.next();return l=o.next(),e}const b="ENDTAB";function p(e){const a=f[e.value],t={};let r=0;for(l=o.next();!T(l,0,b);)switch(l.code){case 5:t.handle=l.value,l=o.next();break;case 330:t.ownerHandle=l.value,l=o.next();break;case 100:"AcDbSymbolTable"===l.value||O(l),l=o.next();break;case 70:r=l.value,l=o.next();break;case 0:l.value===a.dxfSymbolName?t[a.tableRecordsProperty]=a.parseTableRecords():(O(l),l=o.next());break;default:O(l),l=o.next()}const n=t[a.tableRecordsProperty];if(n){let e=n.constructor===Array?n.length:"object"==typeof n?Object.keys(n).length:void 0;r!==e&&P().warn("Parsed "+e+" "+a.dxfSymbolName+"'s but expected "+r)}return l=o.next(),t}const f={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:function(){const e=[];let a={};for(P().debug("ViewPort {"),l=o.next();!T(l,0,b);)switch(l.code){case 2:a.name=l.value,l=o.next();break;case 10:a.lowerLeftCorner=h(l),l=o.next();break;case 11:a.upperRightCorner=h(l),l=o.next();break;case 12:a.center=h(l),l=o.next();break;case 13:a.snapBasePoint=h(l),l=o.next();break;case 14:a.snapSpacing=h(l),l=o.next();break;case 15:a.gridSpacing=h(l),l=o.next();break;case 16:a.viewDirectionFromTarget=h(l),l=o.next();break;case 17:a.viewTarget=h(l),l=o.next();break;case 42:a.lensLength=l.value,l=o.next();break;case 43:a.frontClippingPlane=l.value,l=o.next();break;case 44:a.backClippingPlane=l.value,l=o.next();break;case 45:a.viewHeight=l.value,l=o.next();break;case 50:a.snapRotationAngle=l.value,l=o.next();break;case 51:a.viewTwistAngle=l.value,l=o.next();break;case 79:a.orthographicType=l.value,l=o.next();break;case 110:case 110:a.ucsOrigin=h(l),l=o.next();break;case 111:a.ucsXAxis=h(l),l=o.next();break;case 112:a.ucsYAxis=h(l),l=o.next();break;case 281:a.renderMode=l.value,l=o.next();break;case 281:a.defaultLightingType=l.value,l=o.next();break;case 292:a.defaultLightingOn=l.value,l=o.next();break;case 330:a.ownerHandle=l.value,l=o.next();break;case 63:case 421:case 431:a.ambientColor=l.value,l=o.next();break;case 0:"VPORT"===l.value&&(P().debug("}"),e.push(a),P().debug("ViewPort {"),a={},l=o.next());break;default:O(l),l=o.next()}return P().debug("}"),e.push(a),e}},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:function(){const e={};let a,t={},r=0;for(P().debug("LType {"),l=o.next();!T(l,0,"ENDTAB");)switch(l.code){case 2:t.name=l.value,a=l.value,l=o.next();break;case 3:t.description=l.value,l=o.next();break;case 73:r=l.value,r>0&&(t.pattern=[]),l=o.next();break;case 40:t.patternLength=l.value,l=o.next();break;case 49:t.pattern.push(l.value),l=o.next();break;case 0:P().debug("}"),r>0&&r!==t.pattern.length&&P().warn("lengths do not match on LTYPE pattern"),e[a]=t,t={},P().debug("LType {"),l=o.next();break;default:l=o.next()}return P().debug("}"),e[a]=t,e}},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:function(){const e={};let a,t={};for(P().debug("Layer {"),l=o.next();!T(l,0,"ENDTAB");)switch(l.code){case 2:t.name=l.value,a=l.value,l=o.next();break;case 62:t.visible=l.value>=0,t.colorIndex=Math.abs(l.value),t.color=(n=t.colorIndex,r[n]),l=o.next();break;case 70:t.frozen=0!=(1&l.value)||0!=(2&l.value),l=o.next();break;case 0:"LAYER"===l.value&&(P().debug("}"),e[a]=t,P().debug("Layer {"),t={},a=void 0,l=o.next());break;default:O(l),l=o.next()}var n;return P().debug("}"),e[a]=t,e}}};function k(e){const a=[],t=e?"ENDBLK":"ENDSEC";for(e||(l=o.next());;)if(0===l.code){if(l.value===t)break;const e=c._entityHandlers[l.value];if(null==e){P().warn("Unhandled entity "+l.value),l=o.next();continue}{P().debug(l.value+" {");const t=e.parseEntity(o,l);l=o.lastReadGroup,P().debug("}"),x(t),a.push(t)}}else l=o.next();return"ENDSEC"==t&&(l=o.next()),a}function h(e){const a={};let t=e.code;if(a.x=e.value,t+=10,(e=o.next()).code!=t)throw new Error("Expected code for point value to be "+t+" but got "+e.code+".");return a.y=e.value,t+=10,(e=o.next()).code!=t?(o.rewind(),a):(a.z=e.value,a)}function x(e){if(!e)throw new TypeError("entity cannot be undefined or null");e.handle||(e.handle=n++)}return function(){for(l=o.next();!o.isEOF();)if(0===l.code&&"SECTION"===l.value){if(l=o.next(),2!==l.code){console.error("Unexpected code %s after 0:SECTION",L(l)),l=o.next();continue}"HEADER"===l.value?(P().debug("> HEADER"),t.header=i(),P().debug("<")):"BLOCKS"===l.value?(P().debug("> BLOCKS"),t.blocks=u(),P().debug("<")):"ENTITIES"===l.value?(P().debug("> ENTITIES"),t.entities=k(!1),P().debug("<")):"TABLES"===l.value?(P().debug("> TABLES"),t.tables=v(),P().debug("<")):"EOF"===l.value?P().debug("EOF"):P().warn("Skipping section '%s'",l.value)}else l=o.next()}(),t}}})()})();