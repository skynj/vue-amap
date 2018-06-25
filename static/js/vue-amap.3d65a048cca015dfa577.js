!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueAMap",[],e):"object"==typeof exports?exports.VueAMap=e():t.VueAMap=e()}("undefined"!=typeof self?self:this,function(){return webpackJsonpVueAMap([1],[function(t,e,n){"use strict";var i=n(46),o=n.n(i),a=n(6),r=n(49),s=n(13),u=n(48),c=n(28);e.a={data:function(){return{unwatchFns:[]}},mounted:function(){var t=this;s.b&&s.b.load().then(function(){t.__contextReady&&t.__contextReady.call(t,t.convertProps())}),this.$amap=this.$amap||this.$parent.$amap,this.$amap?this.register():this.$on(u.a.AMAP_READY_EVENT,function(e){t.$amap=e,t.register()})},destroyed:function(){this.unregisterEvents(),this.$amapComponent&&(this.$amapComponent.setMap&&this.$amapComponent.setMap(null),this.$amapComponent.close&&this.$amapComponent.close(),this.$amapComponent.editor&&this.$amapComponent.editor.close(),this.unwatchFns.forEach(function(t){return t()}),this.unwatchFns=[])},methods:{getHandlerFun:function(t){return this.handlers&&this.handlers[t]?this.handlers[t]:this.$amapComponent["set"+o()(t)]||this.$amapComponent.setOptions},convertProps:function(){var t=this,e={};this.$amap&&(e.map=this.$amap);var n=this.$options.propsData,i=void 0===n?{}:n,o=this.propsRedirect;return Object.keys(i).reduce(function(n,a){var r=a,s=t.convertSignalProp(r,i[r]);return void 0===s?n:(o&&o[a]&&(r=o[r]),e[r]=s,n)},e)},convertSignalProp:function(t,e){var n="",i="";if(this.amapTagName)try{var r=o()(this.amapTagName).replace(/^El/,"");i=(c.default[r]||"").props[t].$type,n=a.a[i]}catch(t){}if(i&&n)return n(e);if(this.converters&&this.converters[t])return this.converters[t].call(this,e);var s=a.a[t];return s?s(e):e},registerEvents:function(){if(this.setEditorEvents&&this.setEditorEvents(),this.$options.propsData){if(this.$options.propsData.events)for(var t in this.events)r.a.addListener(this.$amapComponent,t,this.events[t]);if(this.$options.propsData.onceEvents)for(var e in this.onceEvents)r.a.addListenerOnce(this.$amapComponent,e,this.onceEvents[e])}},unregisterEvents:function(){r.a.clearListeners(this.$amapComponent)},setPropWatchers:function(){var t=this,e=this.propsRedirect,n=this.$options.propsData,i=void 0===n?{}:n;Object.keys(i).forEach(function(n){var i=n;e&&e[n]&&(i=e[n]);var o=t.getHandlerFun(i);if(o||"events"===n){var a=t.$watch(n,function(e){if("events"===n)return t.unregisterEvents(),void t.registerEvents();if(o&&o===t.$amapComponent.setOptions){var a;return o.call(t.$amapComponent,(a={},a[i]=t.convertSignalProp(n,e),a))}o.call(t.$amapComponent,t.convertSignalProp(n,e))});t.unwatchFns.push(a)}})},registerToManager:function(){var t=this.amapManager||this.$parent.amapManager;t&&void 0!==this.vid&&t.setComponent(this.vid,this.$amapComponent)},initProps:function(){var t=this;["editable","visible"].forEach(function(e){if(void 0!==t[e]){var n=t.getHandlerFun(e);n&&n.call(t.$amapComponent,t.convertSignalProp(e,t[e]))}})},printReactiveProp:function(){var t=this;Object.keys(this._props).forEach(function(e){t.$amapComponent["set"+o()(e)]&&console.log(e)})},register:function(){var t=this,e=this.__initComponent&&this.__initComponent(this.convertProps());e&&e.then?e.then(function(e){return t.registerRest(e)}):this.registerRest(e)},registerRest:function(t){!this.$amapComponent&&t&&(this.$amapComponent=t),this.registerEvents(),this.initProps(),this.setPropWatchers(),this.registerToManager(),this.events&&this.events.init&&this.events.init(this.$amapComponent,this.$amap,this.amapManager||this.$parent.amapManager)},$$getInstance:function(){return this.$amapComponent}}}},,,,,,function(t,e,n){"use strict";function i(t){return new AMap.Pixel(t[0],t[1])}function o(t){return new AMap.Size(t[0],t[1])}function a(t){return Array.isArray(t)?t:[t.getX(),t.getY()]}function r(t){return new AMap.LngLat(t[0],t[1])}function s(t){if(t)return Array.isArray(t)?t.slice():[t.getLng(),t.getLat()]}function u(t){return new AMap.Bounds(r(t[0]),r(t[1]))}e.e=i,e.c=a,e.d=r,e.b=s,n.d(e,"a",function(){return c});var c={position:r,offset:i,bounds:u,LngLat:r,Pixel:i,Size:o,Bounds:u}},,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a});var i=n(96),o=n(19),a=null,r=function(t){o.a.prototype.$isServer||a||(a||(a=new i.a(t)),a.load())}},,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(49);e.a={methods:{setEditorEvents:function(){var t=this;if(this.$amapComponent.editor&&this.events){var e=["addnode","adjust","removenode","end","move"],n={};Object.keys(this.events).forEach(function(i){-1!==e.indexOf(i)&&(n[i]=t.events[i])}),Object.keys(n).forEach(function(e){i.a.addListener(t.$amapComponent.editor,e,n[e])})}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(64),n(46)),o=n.n(i),a=n(13),r=n(102),s=n(107),u=n(108),c=n(111),p=n(113),l=n(115),f=n(116),d=n(118),h=n(120),m=n(122),v=n(124),y=n(126),g=n(128),b=n(130),_=n(131);n.d(e,"AMapManager",function(){return b.a}),n.d(e,"initAMapApiLoader",function(){return a.a}),n.d(e,"createCustomComponent",function(){return _.a}),n.d(e,"lazyAMapApiLoaderInstance",function(){return a.b});var $=[r.a,s.a,u.a,c.a,p.a,l.a,d.a,f.a,h.a,m.a,v.a,y.a,g.a],C={initAMapApiLoader:a.a,AMapManager:b.a};C.install=function(t){C.installed||(t.config.optionMergeStrategies.deferredReady=t.config.optionMergeStrategies.created,$.map(function(e){t.component(e.name,e),C[o()(e.name).replace(/^El/,"")]=e}))};"undefined"!=typeof window&&window.Vue&&function t(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.installed||C.install(e)}(window.Vue),e.default=C},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(105),o=n(48),a=n(6),r=n(0),s=n(13),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"el-amap",mixins:[r.a],props:["viewMode","skyColor","rotateEnable","pitch","buildingAnimation","pitchEnable","vid","events","center","zoom","draggEnable","level","zooms","lang","cursor","crs","animateEnable","isHotspot","defaultLayer","rotateEnable","resizeEnable","showIndoorMap","indoorMap","expandZoomRange","dragEnable","zoomEnable","doubleClickZoom","keyboardEnable","jogEnable","scrollWheel","touchZoom","mapStyle","plugin","features","amapManager"],beforeCreate:function(){this._loadPromise=s.b.load()},destroyed:function(){this.$amap&&this.$amap.destroy()},computed:{plugins:function(){var t=[],e=/^AMap./,n=function(t){return e.test(t)?t:"AMap."+t},i=function(t){return t.replace(e,"")};return"string"==typeof this.plugin?t.push({pName:n(this.plugin),sName:i(this.plugin)}):this.plugin instanceof Array&&(t=this.plugin.map(function(t){var e={};return"string"==typeof t?e={pName:n(t),sName:i(t)}:(t.pName=n(t.pName),t.sName=i(t.pName),e=t),e})),t}},data:function(){return{converters:{center:function(t){return Object(a.d)(t)}},handlers:{zoomEnable:function(t){this.setStatus({zoomEnable:t})},dragEnable:function(t){this.setStatus({dragEnable:t})},rotateEnable:function(t){this.setStatus({rotateEnable:t})}}}},mounted:function(){this.createMap()},addEvents:function(){var t=this;this.$amapComponent.on("moveend",function(){var e=t.$amapComponent.getCenter();t.center=[e.getLng(),e.getLat()]})},methods:{addPlugins:function(){var t=this.plugins.filter(function(t){return!AMap[t.sName]});return t&&t.length?this.$amapComponent.plugin(t,this.addMapControls):this.addMapControls()},addMapControls:function(){var t=this;this.plugins&&this.plugins.length&&(this.$plugins=this.$plugins||{},this.plugins.forEach(function(e){var n=t.convertAMapPluginProps(e),i=t.$plugins[n.pName]=new AMap[n.sName](n);if(t.$amapComponent.addControl(i),e.events)for(var o in e.events){var a=e.events[o];"init"===o?a(i):AMap.event.addListener(i,o,a)}}))},convertAMapPluginProps:function(t){if("object"===(void 0===t?"undefined":u(t))&&t.pName){switch(t.pName){case"AMap.ToolBar":case"AMap.Scale":t.offset&&t.offset instanceof Array&&(t.offset=Object(a.e)(t.offset))}return t}return""},setStatus:function(t){this.$amap.setStatus(t)},createMap:function(){var t=this;this._loadPromise.then(function(){var e=t.$el.querySelector(".el-vue-amap"),n=t.vid||Object(i.a)();e.id=n,t.$amap=t.$amapComponent=new AMap.Map(n,t.convertProps()),t.amapManager&&t.amapManager.setMap(t.$amap),t.$emit(o.a.AMAP_READY_EVENT,t.$amap),t.$children.forEach(function(e){e.$emit(o.a.AMAP_READY_EVENT,t.$amap)}),t.plugins&&t.plugins.length&&t.addPlugins()})},$$getCenter:function(){return this.$amap?Object(a.b)(this.$amap.getCenter()):Object(a.b)(this.center)}}}},function(t,e,n){"use strict";e.a={AMAP_READY_EVENT:"AMAP_READY_EVENT"}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=void 0,a=function(){function t(){i(this,t),this._listener=new Map}return t.prototype.addListener=function(t,e,n,i){if(!AMap.event)throw new Error("please wait for Map API load");var o=AMap.event.addListener(t,e,n,i);this._listener.get(t)||this._listener.set(t,{});var a=this._listener.get(t);a[e]||(a[e]=[]),a[e].push(o)},t.prototype.removeListener=function(t,e,n){if(!AMap.event)throw new Error("please wait for Map API load");if(this._listener.get(t)&&this._listener.get(t)[e]){var i=this._listener.get(t)[e];if(n){var o=i.indexOf(n);AMap.event.removeListener(i[o]),i.splice(o,1)}else i.forEach(function(t){AMap.event.removeListener(t)}),this._listener.get(t)[e]=[]}},t.prototype.addListenerOnce=function(t,e,n,i){return AMap.event.addListenerOnce(t,e,n,i)},t.prototype.trigger=function(t,e,n){return AMap.event.trigger(t,e,n)},t.prototype.clearListeners=function(t){var e=this,n=this._listener.get(t);n&&Object.keys(n).map(function(n){e.removeListener(t,n)})},t}();o=o||new a,e.a=o},function(t,e,n){"use strict";var i=n(0),o=n(6),a=n(51),r=n(19),s="el-amap-marker";e.a={name:s,mixins:[i.a],props:["vid","position","offset","icon","content","topWhenClick","bubble","draggable","raiseOnDrag","cursor","visible","zIndex","angle","autoRotation","animation","shadow","title","clickable","shape","extData","label","events","onceEvents","template","vnode","contentRender"],data:function(){var t=this;return{$tagName:s,withSlots:!1,tmpVM:null,propsRedirect:{template:"content",vnode:"content",contentRender:"content"},converters:{shape:function(t){return new AMap.MarkerShape(t)},shadow:function(t){return new AMap.Icon(t)},template:function(e){var n=Object(a.a)(e,t);return this.$customContent=n,n.$el},vnode:function(e){var n="function"==typeof e?e(t):e,i=Object(a.c)(n);return this.$customContent=i,i.$el},contentRender:function(e){var n=Object(a.b)(e,t);return this.$customContent=n,n.$el},label:function(t){var e=t.content,n=void 0===e?"":e,i=t.offset,a=void 0===i?[0,0]:i;return{content:n,offset:Object(o.e)(a)}}},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()}}}},created:function(){this.tmpVM=new r.a({data:function(){return{node:""}},render:function(t){var e=this.node;return t("div",{ref:"node"},Array.isArray(e)?e:[e])}}).$mount()},methods:{__initComponent:function(t){this.$slots.default&&this.$slots.default.length&&(t.content=this.tmpVM.$refs.node),this.$amapComponent=new AMap.Marker(t)},$$getExtData:function(){return this.$amapComponent.getExtData()},$$getPosition:function(){return Object(o.b)(this.$amapComponent.getPosition())},$$getOffset:function(){return Object(o.c)(this.$amapComponent.getOffset())}},render:function(t){var e=this.$slots.default||[];return e.length&&(this.tmpVM.node=e),null},destroyed:function(){this.tmpVM.$destroy(),this.$customContent&&this.$customContent.$destroy&&this.$customContent.$destroy()}}},function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return s});var i=n(19),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(t,e){var n=["methods","computed","data","filters"],a={},r=i.a.compile(t);n.forEach(function(t){a[t]=e.$parent.$parent.$options[t],"data"===t&&"function"==typeof a[t]&&(a[t]=a[t]())});var s=new i.a(o({},a,r));return s.$mount(),s},r=function(t){var e=new i.a({render:function(e){return e("div",t)}});return e.$mount(),e},s=function(t,e){var n=new i.a({render:function(n){return t(n,e)}});return n.$mount(),n}},function(t,e,n){"use strict";var i=n(0),o=n(13);e.a={name:"el-amap-search-box",mixins:[i.a],props:["searchOption","onSearchResult","events","default"],data:function(){return{keyword:this.default||"",tips:[],selectedTip:-1,loaded:!1}},mounted:function(){var t=this;o.b.load().then(function(){t.loaded=!0,t._onSearchResult=t.onSearchResult,t.events&&t.events.init&&t.events.init({autoComplete:t._autoComplete,placeSearch:t._placeSearch})})},computed:{_autoComplete:function(){if(this.loaded)return new AMap.Autocomplete(this.searchOption||{})},_placeSearch:function(){if(this.loaded)return new AMap.PlaceSearch(this.searchOption||{})}},methods:{autoComplete:function(){var t=this;this.keyword&&this._autoComplete&&this._autoComplete.search(this.keyword,function(e,n){"complete"===e&&(t.tips=n.tips)})},search:function(){var t=this;this.tips=[],this._placeSearch&&this._placeSearch.search(this.keyword,function(e,n){if(n&&n.poiList&&n.poiList.count){var i=n.poiList.pois,o=i.map(function(t){return t.lat=t.location.lat,t.lng=t.location.lng,t});t._onSearchResult(o)}else if(void 0===n.poiList)throw new Error(n)})},changeTip:function(t){this.keyword=t.name,this.search()},selectTip:function(t){"up"===t&&this.selectedTip>0?(this.selectedTip-=1,this.keyword=this.tips[this.selectedTip].name):"down"===t&&this.selectedTip+1<this.tips.length&&(this.selectedTip+=1,this.keyword=this.tips[this.selectedTip].name)}}}},function(t,e,n){"use strict";var i=n(0),o=n(6),a=n(27);e.a={name:"el-amap-circle",mixins:[i.a,a.a],props:["vid","zIndex","center","bubble","radius","strokeColor","strokeOpacity","strokeWeight","editable","fillColor","fillOpacity","strokeStyle","extData","strokeDasharray","events","visible","extData","onceEvents"],data:function(){return{converters:{center:function(t){return Object(o.d)(t)}},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()},editable:function(t){!0===t?this.editor.open():this.editor.close()}}}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.Circle(t),this.$amapComponent.editor=new AMap.CircleEditor(this.$amap,this.$amapComponent)},$$getCenter:function(){return Object(o.b)(this.$amapComponent.getCenter())}}}},function(t,e,n){"use strict";var i=n(0);e.a={name:"el-amap-ground-image",mixins:[i.a],props:["vid","clickable","opacity","url","bounds","visible","events","onceEvents"],destroyed:function(){this.$amapComponent.setMap(null)},data:function(){return{converters:{},handlers:{visible:function(t){!1===t?this.setMap(null):this.setMap(this.$amap)}}}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.ImageLayer(t)}}}},function(t,e,n){"use strict";var i=n(6),o=n(0),a=n(51),r=n(19);e.a={name:"el-amap-info-window",mixins:[o.a],props:["vid","isCustom","autoMove","closeWhenClickMap","content","size","offset","position","showShadow","visible","events","template","vnode","contentRender"],data:function(){var t=this;return{withSlots:!1,tmpVM:null,propsRedirect:{template:"content",vnode:"content",contentRender:"content"},converters:{template:function(e){var n=Object(a.a)(e,t);return this.$customContent=n,n.$el},vnode:function(e){var n="function"==typeof e?e(t):e,i=Object(a.c)(n);return this.$customContent=i,i.$el},contentRender:function(e){var n=Object(a.b)(e,t);return this.$customContent=n,n.$el}},handlers:{visible:function(e){var n=this.getPosition();n&&(!1===e?this.close():this.open(t.$amap,[n.lng,n.lat]))},template:function(t){this.setContent(t)}}}},created:function(){this.tmpVM=new r.a({data:function(){return{node:""}},render:function(t){var e=this.node;return t("div",{ref:"node"},Array.isArray(e)?e:[e])}}).$mount()},destroyed:function(){this.$amapComponent.close(),this.tmpVM.$destroy(),this.$customContent&&this.$customContent.$destroy&&this.$customContent.$destroy()},methods:{__initComponent:function(t){this.$slots.default&&this.$slots.default.length&&(t.content=this.tmpVM.$refs.node),delete t.map,this.$amapComponent=new AMap.InfoWindow(t),!1!==this.visible&&this.$amapComponent.open(this.$amap,Object(i.d)(this.position))}},render:function(t){var e=this.$slots.default||[];return e.length&&(this.tmpVM.node=e),null}}},function(t,e,n){"use strict";var i=n(0),o=n(27),a=n(6);e.a={name:"el-amap-polyline",mixins:[i.a,o.a],props:["vid","zIndex","visible","editable","bubble","geodesic","isOutline","outlineColor","path","strokeColor","strokeOpacity","strokeWeight","strokeStyle","strokeDasharray","events","extData","onceEvents","lineJoin"],data:function(){return{converters:{},handlers:{visible:function(t){!1===t?this.hide():this.show()},editable:function(t){!0===t?this.editor.open():this.editor.close()}}}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.Polyline(t),this.$amapComponent.editor=new AMap.PolyEditor(this.$amap,this.$amapComponent)},$$getPath:function(){return this.$amapComponent.getPath().map(a.b)},$$getBounds:function(){return this.$amapComponent.getBounds()},$$getExtData:function(){return this.$amapComponent.getExtData()}}}},function(t,e,n){"use strict";var i=n(0),o=n(27),a=n(6);e.a={name:"el-amap-polygon",mixins:[i.a,o.a],props:["vid","zIndex","path","bubble","strokeColor","strokeOpacity","strokeWeight","fillColor","editable","fillOpacity","extData","strokeStyle","visible","strokeDasharray","events","onceEvents","draggable"],data:function(){return{converters:{},handlers:{visible:function(t){!1===t?this.hide():this.show()},zIndex:function(t){this.setOptions({zIndex:t})},editable:function(t){!0===t?this.editor.open():this.editor.close()}}}},methods:{__initComponent:function(){var t=this.convertProps();this.$amapComponent=new AMap.Polygon(t),this.$amapComponent.editor=new AMap.PolyEditor(this.$amap,this.$amapComponent)},$$getPath:function(){return this.$amapComponent.getPath().map(a.b)},$$getExtData:function(){return this.$amapComponent.getExtData()},$$contains:function(t){return Array.isArray(t)&&(t=new AMap.LngLat(t[0],t[1])),this.$amapComponent.getBounds().contains(t)}}}},function(t,e,n){"use strict";var i=n(0),o="el-amap-text";e.a={name:o,mixins:[i.a],props:{vid:{type:String,default:""},text:{type:String,default:""},textAlign:{type:String,default:""},verticalAlign:{type:String,default:""},position:{type:Array,default:function(){return[0,0]},$type:"LngLat"},offset:{type:Array,default:function(){return[0,0]},$type:"Pixel"},topWhenClick:{type:Boolean,default:function(){return!1}},bubble:{type:Boolean,default:function(){return!1}},draggable:{type:Boolean,default:function(){return!1}},raiseOnDrag:{type:Boolean,default:function(){return!1}},cursor:{type:String,default:function(){return""}},visible:{type:Boolean,default:function(){return!0}},zIndex:{type:Number,default:function(){return 100}},angle:{type:Number,default:function(){return 0}},autoRotation:{type:Boolean,default:function(){return!1}},animation:{type:String,default:function(){return"“AMAP_ANIMATION_NONE”"}},shadow:{type:Object,default:function(){return{}},$type:"Icon"},title:{type:String,default:function(){return""}},clickable:{type:Boolean,default:!0},events:{type:Object,default:function(){return{}}}},data:function(){return{converters:{},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()}},amapTagName:o}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.Text(t)}}}},function(t,e,n){"use strict";var i=n(0),o="el-amap-bezier-curve";e.a={name:o,mixins:[i.a],props:{vid:{type:String},path:{type:Array},strokeColor:{type:String},strokeOpacity:{type:Number},strokeWeight:{type:Number,default:function(){return 1}},strokeStyle:{type:String},strokeDasharray:{type:Array},zIndex:{type:Number},showDir:{type:Boolean},bubble:{type:Boolean},cursor:{type:String},outlineColor:{type:Boolean},isOutline:{type:Boolean},visible:{type:Boolean,default:!0},events:{type:Object,default:function(){return{}}}},data:function(){return{converters:{},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()}},amapTagName:o}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.BezierCurve(t)}}}},function(t,e,n){"use strict";var i=n(0),o="el-amap-circle-marker";e.a={name:o,mixins:[i.a],props:{vid:{type:String},zIndex:{type:Number},visible:{type:Boolean,default:!0},center:{type:Array,$type:"LngLat"},bubble:{type:Boolean},radius:{type:Number},strokeColor:{type:String},strokeOpacity:{type:Number},strokeWeight:{type:Number},fillColor:{type:String},fillOpacity:{type:Number},extData:{type:Object},events:{type:Object,default:function(){return{}}}},data:function(){return{converters:{},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()}},amapTagName:o}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.CircleMarker(t)}}}},function(t,e,n){"use strict";var i=n(0),o="el-amap-ellipse";e.a={name:o,mixins:[i.a],props:{vid:{type:String},zIndex:{type:Number},center:{type:Array,$type:"LngLat"},radius:{type:Array,default:function(){return[1e3,1e3]}},bubble:{type:Boolean},cursor:{type:String},strokeColor:{type:String},strokeOpacity:{type:Number},strokeWeight:{type:Number},fillColor:{type:String},fillOpacity:{type:Number},strokeStyle:{type:String},extData:{type:Object,default:function(){return{}}},visible:{type:Boolean,default:!0},events:{type:Object,default:function(){return{}}}},data:function(){return{converters:{},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()}},amapTagName:o}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.Ellipse(t)}}}},function(t,e,n){"use strict";var i=n(0),o="el-amap-rectangle";e.a={name:o,mixins:[i.a],props:{vid:{type:String},zIndex:{type:Number},center:{type:Array,$type:"LngLat"},bounds:{type:Array,$type:"Bounds"},bubble:{type:Boolean},cursor:{type:String},strokeColor:{type:String},strokeOpacity:{type:Number},strokeWeight:{type:Number},fillColor:{type:String},fillOpacity:{type:Number},strokeStyle:{type:String},extData:{type:Object,default:function(){return{}}},visible:{type:Boolean,default:!0},events:{type:Object,default:function(){return{}}}},data:function(){return{converters:{},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()}},amapTagName:o}},methods:{__initComponent:function(t){this.$amapComponent=new AMap.Rectangle(t)}}}},function(t,e,n){t.exports=n(28)},function(t,e,n){"use strict";var i=n(65);n.n(i)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(97),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r={key:null,v:"1.4.4",protocol:"https",hostAndPath:"webapi.amap.com/maps",plugin:[],callback:"amapInitComponent"},s=function(){function t(e){i(this,t),this._config=a({},r,e),this._document=document,this._window=window,this._scriptLoaded=!1,this._queueEvents=[o.a]}return t.prototype.load=function(){var t=this;if(this._window.AMap&&this._window.AMap.Map)return this.loadUIAMap();if(this._scriptLoadingPromise)return this._scriptLoadingPromise;var e=this._document.createElement("script");e.type="text/javascript",e.async=!0,e.defer=!0,e.src=this._getScriptSrc();var n=this._config.uiVersion?this.loadUIAMap():null;return this._scriptLoadingPromise=new Promise(function(i,o){t._window.amapInitComponent=function(){for(;t._queueEvents.length;)t._queueEvents.pop().apply();if(!n)return i();n.then(function(){window.initAMapUI(),setTimeout(i)})},e.onerror=function(t){return o(t)}}),this._document.head.appendChild(e),this._scriptLoadingPromise},t.prototype.loadUIAMap=function(){var t=this;return!this._config.uiVersion||window.AMapUI?Promise.resolve():new Promise(function(e,n){var i=document.createElement("script"),o=t._config.uiVersion.split("."),a=o[0],r=o[1],s=o[2];if(void 0===a||void 0===r)return void console.error("amap ui version is not correct, please check! version: ",t._config.uiVersion);var u=t._config.protocol+"://webapi.amap.com/ui/"+a+"."+r+"/main-async.js";s&&(u+="?v="+a+"."+r+"."+s),i.src=u,i.type="text/javascript",i.async=!0,t._document.head.appendChild(i),i.onload=function(){setTimeout(e,0)},i.onerror=function(){return n()}})},t.prototype._getScriptSrc=function(){var t=/^AMap./,e=this._config,n=["v","key","plugin","callback"];e.plugin&&e.plugin.length>0&&(e.plugin.push("Autocomplete","PlaceSearch","PolyEditor","CircleEditor"),e.plugin=e.plugin.map(function(e){return t.test(e)?e:"AMap."+e}));var i=Object.keys(e).filter(function(t){return~n.indexOf(t)}).filter(function(t){return null!=e[t]}).filter(function(t){return!Array.isArray(e[t])||Array.isArray(e[t])&&e[t].length>0}).map(function(t){var n=e[t];return Array.isArray(n)?{key:t,value:n.join(",")}:{key:t,value:n}}).map(function(t){return t.key+"="+t.value}).join("&");return this._config.protocol+"://"+this._config.hostAndPath+"?"+i},t}();e.a=s},function(t,e,n){"use strict";function i(){if(AMap.UA.ios&&"https:"!==document.location.protocol){var t=new o.a;navigator.geolocation.getCurrentPosition=function(){return t.getCurrentPosition.apply(t,arguments)},navigator.geolocation.watchPosition=function(){return t.watchPosition.apply(t,arguments)}}}e.a=i;var o=n(98)},function(t,e,n){"use strict";function i(){this._remoteSvrUrl="https://webapi.amap.com/html/geolocate.html",this._callbackList=[],this._seqBase=1,this._frameReady=0,this._watchIdMap={}}i.prototype={_getSeq:function(){return this._seqBase++},_onRrameReady:function(t){if(0===this._frameReady)return this._frameReadyList||(this._frameReadyList=[]),this._frameReadyList.push(t),void this._prepareIframe();t.call(this)},_prepareIframe:function(){if(!this._iframeWin){var t=document.createElement("iframe");t.src=this._remoteSvrUrl+(this._remoteSvrUrl.indexOf("?")>0?"&":"?"),t.width="0px",t.height="0px",t.style.position="absolute",t.style.display="none",t.allow="geolocation";var e=this,n=setTimeout(function(){e._frameReady=!1,e._callbackFrameReadyList()},5e3);t.onload=function(){clearTimeout(n),e._frameReady=!0,e._callbackFrameReadyList(),t.onload=null},document.body.appendChild(t),this._iframeWin=t.contentWindow,window.addEventListener("message",function(t){0===e._remoteSvrUrl.indexOf(t.origin)&&e._handleRemoteMsg(t.data)},!1)}},_callbackFrameReadyList:function(){if(this._frameReadyList){var t=this._frameReadyList;this._frameReadyList=null;for(var e=0,n=t.length;e<n;e++)t[e].call(this,this._frameReady)}},_pickCallback:function(t,e){for(var n=this._callbackList,i=0,o=n.length;i<o;i++){var a=n[i];if(t===a.seq)return e||n.splice(i,1),a}},_handleRemoteMsg:function(t){var e=t.seq,n=this._pickCallback(e,!!t.notify);n?n.cbk.call(null,t.error,t.result):console.warn("Receive remote msg: ",t)},_postMessage:function(t,e,n,i){this._prepareIframe();var o={cmd:t,args:e,seq:i||this._getSeq()};this._callbackList.push({cbk:n,seq:o.seq}),this._onRrameReady(function(){if(!0===this._frameReady)try{this._iframeWin.postMessage(o,"*")}catch(t){this._pickCallback(o.seq),n(t)}else this._pickCallback(o.seq),n({message:"iFrame load failed!"})})},getCurrentPosition:function(t,e,n){this._postMessage("getCurrentPosition",[n],function(n,i){if(n)return void(e&&e(n));t&&t(i)})},watchPosition:function(t,e,n){var i="wk"+this._getSeq(),o=this._getSeq();this._watchIdMap[i]={stat:0,seq:o};var a=this;return this._postMessage("watchPosition",[n],function(n,o){var r=null;o&&(r=o.id);var s=a._watchIdMap[i];if(s.id=r,s.stat=1,s.callbackList){var u=s.callbackList;s.callbackList=null;for(var c=0,p=u.length;c<p;c++)u[c].call(a,r)}if(n)return void(e&&e(n));t&&t(o.pos)},o),i},clearWatch:function(t,e){function n(n){o._postMessage("clearWatch",[n],function(n,a){n||(o._pickCallback(i.seq),delete o._watchIdMap[t]),e&&e(n,a)})}if(!this._watchIdMap[t])return void e("Id not exists: "+t);var i=this._watchIdMap[t],o=this;i.stat<1?(i.callbackList||(i.callbackList=[]),i.callbackList.push(function(t){n(t)})):n(i.id)}},e.a=i},,,,function(t,e,n){"use strict";function i(t){n(103)}var o=n(47),a=n(106),r=n(1),s=i,u=Object(r.a)(o.a,a.a,a.b,!1,s,null,null);e.a=u.exports},function(t,e){},,function(t,e,n){"use strict";function i(){for(var t=[],e="0123456789abcdef",n=0;n<36;n++)t[n]=e.substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}e.a=i},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-vue-amap-container"},[n("div",{staticClass:"el-vue-amap"}),t._v(" "),t._t("default")],2)},o=[]},function(t,e,n){"use strict";var i=n(50),o=n(1),a=Object(o.a)(i.a,void 0,void 0,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";function i(t){n(109)}var o=n(52),a=n(110),r=n(1),s=i,u=Object(r.a)(o.a,a.a,a.b,!1,s,null,null);e.a=u.exports},function(t,e){},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-vue-search-box-container",on:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;t.selectTip("up")},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;t.selectTip("down")}]}},[n("div",{staticClass:"search-box-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text"},domProps:{value:t.keyword},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},input:[function(e){e.target.composing||(t.keyword=e.target.value)},t.autoComplete]}}),t._v(" "),n("span",{staticClass:"search-btn",on:{click:t.search}},[t._v("搜索")])]),t._v(" "),n("div",{staticClass:"search-tips"},[n("ul",t._l(t.tips,function(e,i){return n("li",{key:i,class:{"autocomplete-selected":i===t.selectedTip},on:{click:function(n){t.changeTip(e)},mouseover:function(e){t.selectedTip=i}}},[t._v(t._s(e.name))])}))])])},o=[]},function(t,e,n){"use strict";var i=n(53),o=n(112),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(54),o=n(114),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(55),o=n(1),a=Object(o.a)(i.a,void 0,void 0,!1,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var i=n(56),o=n(117),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(57),o=n(119),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(58),o=n(121),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(59),o=n(123),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(60),o=n(125),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(61),o=n(127),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";var i=n(62),o=n(129),a=n(1),r=Object(a.a)(i.a,o.a,o.b,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[]},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(){i(this,t),this._componentMap=new Map,this._map=null}return t.prototype.setMap=function(t){this._map=t},t.prototype.getMap=function(){return this._map},t.prototype.setComponent=function(t,e){this._componentMap.set(t,e)},t.prototype.getComponent=function(t){return this._componentMap.get(t)},t.prototype.getChildInstance=function(t){return this.getComponent(t)},t.prototype.removeComponent=function(t){this._componentMap.delete(t)},t}();e.a=o},function(t,e,n){"use strict";var i=n(0),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};e.a=function(t){var e=t.init,n=t.data,a=void 0===n?function(){return{}}:n,r=t.converters,s=void 0===r?{}:r,u=t.handlers,c=void 0===u?{}:u,p=t.computed,l=t.methods,f=t.name,d=t.render,h=t.contextReady,m=t.template,v=t.mixins,y=void 0===v?[]:v,g=t.props,b=void 0===g?{}:g,_=o({},t,{props:b,data:function(){return o({},a(),{converters:s,handlers:c})},mixins:[i.a].concat(y),computed:p,methods:o({},l,{__initComponent:e,__contextReady:h})});return m||d||(_.render=function(){return null}),_.install=function(t){return t.use(f,_)},_}}],[63])});
//# sourceMappingURL=vue-amap.3d65a048cca015dfa577.js.map