(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{70:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var r=n(1),c=n(32),a=n.n(c);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n(33),u=n(34),b=n(35),p=n(38),h=n(37),j=n(0),d=n(36),f=n.n(d),O=n(9),v=n(2),m=n(7),y=Object(j.lazy)((function(){return n.e(1).then(n.bind(null,69))})),g=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={id:null,poster_path:null,backdrop_path:null,release_date:null,runtime:null,title:null},t.handleGoBack=function(){var e,n=t.props,r=n.location;n.history.push((null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)||m.a.home)},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"0834b7bfd5fb91f9012c04990bc0fd7c",e=this.props.match.params.movieId,t.prev=2,t.next=5,f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("0834b7bfd5fb91f9012c04990bc0fd7c","&language=en-US"));case 5:n=t.sent,console.log(n.data),this.setState(s({},n.data)),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(2),console.log("error",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.backdrop_path,n=t.title,c=t.runtime,a=t.release_date,o=this.props.match;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",onClick:this.handleGoBack,children:"Back"}),Object(r.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e),alt:n}),Object(r.jsx)("h3",{children:n}),a&&Object(r.jsxs)("span",{children:[Object(r.jsxs)("p",{children:["Run time: ",c," min"]}),Object(r.jsxs)("p",{children:["Release date: ",a]})]}),Object(r.jsx)("br",{}),Object(r.jsx)(O.b,{to:"".concat(o.url).concat(m.a.cast),children:"Cast"}),Object(r.jsx)("br",{}),Object(r.jsx)(O.b,{to:"".concat(o.url).concat(m.a.reviews),children:"Reviews"}),Object(r.jsx)(v.a,{exact:!0,path:"".concat(m.a.movieDetails).concat(m.a.cast),component:y})]})}}]),n}(j.Component)}}]);
//# sourceMappingURL=movie-details-view.f9cd4766.chunk.js.map