(function(t){function e(e){for(var s,i,a=e[0],u=e[1],c=e[2],d=0,p=[];d<a.length;d++)i=a[d],r[i]&&p.push(r[i][0]),r[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={1:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://mikatalk.github.io/fsi/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;o.push([5,0]),n()})({"+5i3":function(t,e,n){},"2YRr":function(t,e,n){"use strict";var s=n("JTHr"),r=n.n(s);r.a},5:function(t,e,n){t.exports=n("Vtdi")},JTHr:function(t,e,n){},Js3Z:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);var s={};n.r(s),n.d(s,"loadAll",function(){return ot});n("VRzm"),n("+5i3");var r=n("Kw5r"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("nNx0"),n("KHd+")),u={},c=Object(a["a"])(u,o,i,!1,null,null,null),l=c.exports,d=n("jE9Z"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("transition",{attrs:{name:"fade"}},[t.isLoading?n("loading-background"):t._e()],1),t._l(t.shows,function(e,s){return t.isLoading?t._e():n("show-card",{key:s,attrs:{"card-index":s,show:e}})})],2)},f=[],h=n("yT7P"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show-card"},[n("h2",{staticClass:"title"},[t._v(t._s(t.show.name))]),n("p",{staticClass:"summary",domProps:{innerHTML:t._s(t.show.summary)}}),n("ol",{staticClass:"seasons"},t._l(t.show.seasons,function(e,s){return n("li",{key:s},[t._v("\n      Season "+t._s(s+1)+"\n      "),n("episodes-list",{attrs:{episodes:e.episodes}})],1)}))])},b=[],v=(n("xfY5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"episodes-list"},[t._v("\n  Episodes list\n  "),t._l(t.episodes,function(e,s){return n("div",{key:s},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("h4",{staticClass:"caption"},[t._v(t._s(e.caption))]),n("p",{staticClass:"description",domProps:{innerHTML:t._s(e.description)}}),n("img",{attrs:{width:"60",src:e.pictureUrl}})])})],2)}),g=[],w={name:"EpisodesList",props:{episodes:{type:Array,required:!0}}},_=w,j=(n("xj8Y"),Object(a["a"])(_,v,g,!1,null,null,null)),y=j.exports,O={name:"ShowCard",components:{"episodes-list":y},props:{show:{type:Object,required:!0},cardIndex:{type:Number,required:!0}}},x=O,C=(n("XY62"),Object(a["a"])(x,m,b,!1,null,null,null)),E=C.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-background"},[t._v("\n  Loading...\n")])},S=[],T={name:"LoadingBackground"},k=T,P=(n("2YRr"),Object(a["a"])(k,L,S,!1,null,null,null)),q=P.exports,J=n("L2JU"),R={name:"Home",components:{"show-card":E,"loading-background":q},created:function(){this.$store.dispatch("shows/loadAll")},computed:Object(h["a"])({},Object(J["b"])({isLoading:"shows/isLoading",shows:"shows/shows"}))},A=R,H=Object(a["a"])(A,p,f,!1,null,null,null),Y=H.exports;r["a"].use(d["a"]);var $,M=new d["a"]({routes:[{path:"/",name:"home",component:Y}]}),Z=n("sFTC"),K=n.n(Z),U={loading:!0,shows:[]},W=n("oyJW"),I=n("iv4g"),N="SET_LOADING_STATE",z="SET_LIST_OF_SHOWS",F=($={},Object(W["a"])($,N,function(t,e){t.loading=e}),Object(W["a"])($,z,function(t,e){var n;t.shows.length=0,(n=t.shows).push.apply(n,Object(I["a"])(e))}),$),V=n("xmWZ"),D=n("qpph"),G=n("vDqi"),X=n.n(G),B=n("bKGl"),Q={base:"https://gist.githubusercontent.com/",route:"memikequinn/475999c535ef4e1341f1262484244c68/raw/d77d0f6f4d7e53d7bf5dd7bd1997b27d291d4b0b/db.json"},tt=X.a.create({baseURL:Q.base,transformResponse:Object(I["a"])(X.a.defaults.transformResponse).concat([function(t){return Object(B["camelizeKeys"])(t)}]),transformRequest:[function(t){return Object(B["decamelizeKeys"])(t)}].concat(Object(I["a"])(X.a.defaults.transformRequest))}),et=function(){function t(){Object(V["a"])(this,t)}return Object(D["a"])(t,null,[{key:"loadAll",value:function(){return tt.get(Q.route)}}]),t}(),nt=(n("f3/d"),n("pIFo"),function t(e,n,s,r){Object(V["a"])(this,t),this.title=e,this.caption=n,this.description=s,this.pictureUrl=r}),st=function t(e,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(V["a"])(this,t),this.slug=e,this.title=n,this.episodes=s.map(function(t){return new nt(t.title,t.caption,t.description,(t.pictureUrl||"").replace("http://","https://"))})},rt=function t(e){var n=e.name,s=e.summary,r=e.seasons;Object(V["a"])(this,t),this.name=n,this.summary=s,this.seasons=r.map(function(t){return new st(t.slug,t.title,t.showEpisodes)})},ot=function(t){var e=t.commit;e(N,!0),et.loadAll().then(function(t){var n=t.data.map(function(t){return new rt(t)});console.log("data received:",n),e(z,n),e(N,!1)})},it={shows:function(t){return t.shows},isLoading:function(t){return t.loading}},at={namespaced:!0,state:U,getters:it,actions:s,mutations:F},ut=!1;r["a"].use(J["a"]);var ct=new J["a"].Store({namespaced:!0,state:{},actions:{},mutations:{},getters:{},modules:{shows:at},strict:ut,plugins:ut?[K()()]:[]}),lt=ct;r["a"].config.productionTip=!1,new r["a"]({router:M,store:lt,render:function(t){return t(l)}}).$mount("#app")},XY62:function(t,e,n){"use strict";var s=n("Js3Z"),r=n.n(s);r.a},Zwn5:function(t,e,n){},nNx0:function(t,e,n){"use strict";var s=n("uWEC"),r=n.n(s);r.a},uWEC:function(t,e,n){},xj8Y:function(t,e,n){"use strict";var s=n("Zwn5"),r=n.n(s);r.a}});
//# sourceMappingURL=app.bdb75f09.js.map