(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{56:function(t,e,r){"use strict";r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return p})),r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return h})),r.d(e,"e",(function(){return f}));var a=r(59),n=r.n(a),c=r(60),o=r(64),s=r.n(o),i="0834b7bfd5fb91f9012c04990bc0fd7c",u="https://api.themoviedb.org/3",l=function(){var t=Object(c.a)(n.a.mark((function t(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US,ru&page=1&include_adult=false&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},63:function(t,e,r){t.exports={list:"CardList_list__27pRG",item:"CardList_item__1rlF4",images:"CardList_images__3ro52",title:"CardList_title__1mE26",caption:"CardList_caption__2GOMP"}},65:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var a=r(1),n=(r(0),r(11)),c=r(3),o=r(63),s=r.n(o),i=function(t){var e=t.poster_path,r=t.title,n=t.vote_average,c=t.vote_count;return Object(a.jsxs)("div",{className:s.a.cards,children:[null!==e?Object(a.jsx)("div",{className:s.a.images,children:Object(a.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w400","/").concat(e),alt:r})}):Object(a.jsx)("img",{src:"https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((",alt:r}),Object(a.jsxs)("div",{className:s.a.review,children:[Object(a.jsx)("h2",{className:s.a.title,children:r}),Object(a.jsxs)("span",{children:[Object(a.jsxs)("p",{className:s.a.caption,children:["Vote: ",n,"/10"]}),Object(a.jsxs)("p",{className:s.a.caption,children:["Vote count: ",c," votes"]})]})]})]})},u=Object(c.f)((function(t){var e=t.films,r=t.location;return Object(a.jsx)("ul",{className:s.a.list,children:e.map((function(t){var e=t.id,c=t.poster_path,o=t.title,u=t.vote_average,l=t.vote_count;return Object(a.jsx)("li",{className:s.a.item,children:Object(a.jsx)(n.b,{to:{pathname:"/movies/".concat(e),state:{from:r}},children:Object(a.jsx)(i,{poster_path:c,title:o,vote_average:u,vote_count:l})})},e)}))})}))},92:function(t,e,r){},93:function(t,e,r){t.exports={searchBar:"SearchBar_searchBar__ZWPUg",searchForm:"SearchBar_searchForm__i6Mx4",searchFormButton:"SearchBar_searchFormButton__zgBhB",searchFormButtonLabel:"SearchBar_searchFormButtonLabel__F_akY",searchFormInput:"SearchBar_searchFormInput__2lpze"}},98:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return v}));var a=r(1);function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function c(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(57),s=r(58),i=r(62),u=r(61),l=r(0),p=r(17),m=r(56),h=r(65),f=(r(92),r(93)),b=r.n(f),d=function(t){Object(i.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={inputValue:""},t.handleInput=function(e){t.setState({inputValue:e.currentTarget.value.toLowerCase()})},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.inputValue.trim()?(t.props.onSubmit(t.state.inputValue),t.setState({inputValue:""})):p.b.error("enter something else")},t}return Object(s.a)(r,[{key:"render",value:function(){return Object(a.jsx)("header",{className:b.a.searchBar,children:Object(a.jsxs)("form",{className:b.a.searchForm,onSubmit:this.handleSubmit,children:[Object(a.jsx)("button",{type:"submit",className:b.a.searchFormButton,children:Object(a.jsx)("span",{className:b.a.searchFormButtonLabel,children:"Search"})}),Object(a.jsx)("input",{className:b.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",onChange:this.handleInput,value:this.state.inputValue})]})})}}]),r}(l.Component),v=function(t){Object(i.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={films:[],filmName:""},t.handleFormSubmit=function(e){t.setState({filmName:e})},t}return Object(s.a)(r,[{key:"componentDidUpdate",value:function(t,e){var r=this;e.filmName!==this.state.filmName&&m.c(this.state.filmName).then((function(t){0!==t.length?r.setState({films:c(t)}):p.b.error("enter something else")})).catch((function(t){r.setState({error:t})}))}},{key:"render",value:function(){var t=this.state.films;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{onSubmit:this.handleFormSubmit}),Object(a.jsx)("div",{children:Object(a.jsx)(h.a,{films:t})})]})}}]),r}(l.Component)}}]);
//# sourceMappingURL=movies-view.ccf0d7d4.chunk.js.map