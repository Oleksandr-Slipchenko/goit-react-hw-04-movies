(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{40:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(32),i=c.n(s),o=(c(39),c(40),c(15)),l=c(2),u=c(4),b=c.n(u),j=c(9),h=c(10),p=c(11),d=c(14),f=c(13),v=c(12),m=c.n(v),O=function(e){Object(d.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={films:[]},e}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0834b7bfd5fb91f9012c04990bc0fd7c",e.prev=1,e.next=4,m.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("0834b7bfd5fb91f9012c04990bc0fd7c"));case 4:t=e.sent,this.setState({films:t.data.results}),console.log(t.data.results),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log("error",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"C\u043f\u0438\u0441\u043e\u043a \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f:"}),Object(n.jsx)("ul",{children:this.state.films.map((function(e){return Object(n.jsx)("li",{children:e.title},e.id)}))})]})}}]),c}(a.Component),x=function(e){Object(d.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={films:[]},e}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0834b7bfd5fb91f9012c04990bc0fd7c",e.prev=1,e.next=4,m.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("0834b7bfd5fb91f9012c04990bc0fd7c","&language=en-US&page=1&include_adult=false&query=dog"));case 4:t=e.sent,this.setState({films:t.data.results}),console.log(t.data.results),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log("error",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"\u041f\u043e\u0438\u0441\u043a \u043a\u0438\u043d\u043e\u0444\u0438\u043b\u044c\u043c\u0430 \u043f\u043e \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u043c\u0443 \u0441\u043b\u043e\u0432\u0443:"}),Object(n.jsx)("ul",{children:this.state.films.map((function(t){return Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"".concat(e.props.match.url,"/").concat(t.id),children:t.title})},t.id)}))})]})}}]),c}(a.Component),g=c(18),y=function(e){Object(d.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0834b7bfd5fb91f9012c04990bc0fd7c",t=this.props.match.params.movieId,e.next=4,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat("0834b7bfd5fb91f9012c04990bc0fd7c","&language=en-US&page=1"));case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Reviews"}),Object(n.jsx)("ul",{})]})}}]),c}(a.Component),k=function(e){Object(d.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={id:null,original_title:null,poster_path:null,release_date:null,runtime:null,title:null},e}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0834b7bfd5fb91f9012c04990bc0fd7c",t=this.props.match.params.movieId,e.prev=2,e.next=5,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("0834b7bfd5fb91f9012c04990bc0fd7c","&language=en-US"));case 5:c=e.sent,console.log(c.data),this.setState(Object(g.a)({},c.data)),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),console.log("error",e.t0),e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.title,c=e.poster_path,a=e.original_title,r=e.overview,s=e.runtime,i=e.release_date,u=this.props.match;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h2",{children:["Movie details: ",t]}),Object(n.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(c),alt:a}),Object(n.jsx)("h3",{children:a}),s&&Object(n.jsxs)("span",{children:[Object(n.jsx)("b",{children:"Run time:"})," ",s," min"]}),Object(n.jsx)("br",{}),i&&Object(n.jsxs)("span",{children:[Object(n.jsx)("b",{children:"Release date:"})," ",i]}),Object(n.jsx)("br",{}),Object(n.jsx)(o.c,{to:"".concat(u.url,"/cast"),children:"Cast"}),Object(n.jsx)("br",{}),Object(n.jsx)(o.c,{to:"".concat(u.url,"/reviews"),children:"Reviews"}),r&&Object(n.jsx)(l.a,{path:"".concat(u.path,"/reviews"),render:function(e){Object(g.a)(Object(g.a)({},e),{},{overview:r})}})]})}}]),c}(a.Component),w=function(e){Object(d.a)(c,e);var t=Object(f.a)(c);function c(){var e;Object(h.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={actors:[]},e}return Object(p.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0834b7bfd5fb91f9012c04990bc0fd7c",t=this.props.match.params.movieId,e.next=4,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("0834b7bfd5fb91f9012c04990bc0fd7c","&language=en-US"));case 4:c=e.sent,this.setState({actors:c.data.cast}),console.log(c.data.cast);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.actors;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Cast"}),Object(n.jsx)("ul",{children:e.map((function(t){return Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(t.profile_path),alt:t.name}),e&&Object(n.jsxs)("span",{children:[Object(n.jsxs)("p",{children:["Actor name: ",t.name]}),Object(n.jsxs)("p",{children:["Character: ",t.character]}),Object(n.jsxs)("p",{children:["Popularity: ",t.popularity]})]})]},t.id)}))})]})}}]),c}(a.Component),_=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.c,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink--active",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.c,{exact:!0,to:"/movies",className:"NavLink",activeClassName:"NavLink--active",children:"Movies"})})]}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(n.jsx)(l.a,{exact:!0,path:"/movies",component:x}),Object(n.jsx)(l.a,{exact:!0,path:"/movies/:movieId",component:k}),Object(n.jsx)(l.a,{exact:!0,path:"/movies/:movieId/cast",component:w}),Object(n.jsx)(l.a,{path:"/movies/:movieId/reviews",component:y}),Object(n.jsx)(l.a,{component:O})]})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(_,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.5d7d1e95.chunk.js.map