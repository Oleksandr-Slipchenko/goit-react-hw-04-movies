(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{96:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r(1),a=r(59),c=r.n(a),s=r(60),i=r(57),o=r(58),p=r(62),u=r(61),h=r(0),j=r(56),l=function(t){Object(p.a)(r,t);var e=Object(u.a)(r);function r(){var t;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={actors:[]},t}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(c.a.mark((function t(){var e=this;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.a(this.props.match.params.movieId).then((function(t){e.setState({actors:t})}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.actors;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(e.profile_path),alt:e.name}),t&&Object(n.jsxs)("span",{children:[Object(n.jsxs)("p",{children:["Actor name: ",e.name]}),Object(n.jsxs)("p",{children:["Character: ",e.character]}),Object(n.jsxs)("p",{children:["Popularity: ",e.popularity]})]})]},e.id)}))})})}}]),r}(h.Component)}}]);
//# sourceMappingURL=cast-view.b4a4ac4d.chunk.js.map