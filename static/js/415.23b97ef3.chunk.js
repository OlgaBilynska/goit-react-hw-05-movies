"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4216:function(n,e,r){r.d(e,{Z:function(){return d}});var t,a,o,i=r(168),c=r(1109),u=r(9126),s=c.Z.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: 5px;\n  box-shadow: 2px 2px 3px 1.5px var(--background);\n  outline: none;\n  padding: 10px;\n  height: 340px;\n\n  background-color: var(--button);\n  color: var(--light);\n\n  transition: transform5 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: var(--accent);\n    color: var(--background);\n    transform: rotate(5deg);\n  }\n"]))),p=c.Z.div(a||(a=(0,i.Z)(["\n  max-width: 200px;\n  justify-content: center;\n"]))),l=(0,c.Z)(u.boB)(o||(o=(0,i.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),f=r(184),d=function(n){var e=n.movie;return(0,f.jsxs)(s,{children:[e.poster_path?(0,f.jsx)("img",{alt:e.name||e.original_title,src:"http://image.tmdb.org/t/p/w200".concat(e.poster_path)}):(0,f.jsx)(l,{}),(0,f.jsxs)(p,{children:[" ",e.name||e.original_title]})]})}},7415:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t=r(9439),a=r(1686),o=r(5984),i=r(2791),c=r(6124);var u=!("undefined"==typeof window||!window.document||!window.document.createElement);u&&(window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition);var s,p,l,f,d,v,g,m=r(1087),h=r(7689),x=r(4216),w=r(168),y=r(1109),b=y.Z.section(s||(s=(0,w.Z)(["\n  padding: 30px 30px;\n"]))),Z=y.Z.div(p||(p=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),k=y.Z.div(l||(l=(0,w.Z)(["\n  font-size: 22px;\n  font-weight: 550;\n"]))),S=y.Z.form(f||(f=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n"]))),j=y.Z.input(d||(d=(0,w.Z)(["\n  background-color: var(--light);\n  color: var(--text);\n  padding-left: 7px;\n  font-size: 20px;\n  border-radius: 5px;\n\n  &:focus {\n    background-color: var(--background);\n  }\n"]))),_=y.Z.button(v||(v=(0,w.Z)(["\n  background-color: var(--button);\n  color: var(--light);\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-size: 15px;\n  outline: transparent;\n  transition: transform 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: var(--accent);\n    color: var(--background);\n    transform: scale(1.1);\n  }\n"]))),E=y.Z.ul(g||(g=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n\n  padding: 20px 30px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  }\n"]))),U=r(184),N=(0,c.b)(),R=function(){var n,e=(0,i.useState)([]),r=(0,t.Z)(e,2),c=r[0],u=r[1],s=(0,m.lr)(),p=(0,t.Z)(s,2),l=p[0],f=p[1],d=null!==(n=l.get("query"))&&void 0!==n?n:"",v=function(n,e){var r=(0,i.useState)(n),t=r[0],a=r[1];return(0,i.useEffect)((function(){var r=setTimeout((function(){a(n)}),e);return function(){clearTimeout(r)}}),[n,e]),t}(d,250),g=(0,h.TH)();(0,i.useEffect)((function(){N.getMovieBySearch(v).then((function(n){return u(n)}))}),[d,v]);return(0,U.jsxs)(b,{children:[(0,U.jsxs)(Z,{children:[(0,U.jsx)(k,{children:"FIND YOUR FAVORITE MOVIE"}),(0,U.jsxs)(S,{onSubmit:function(n){n.preventDefault();var e=n.target.query.value;if(""===e)return a.Notify.info("\ud83e\udd84 Please type a movie name.");f({query:e})},children:[(0,U.jsx)(j,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies here",value:d,onChange:function(n){var e=n.target.value;if(""===e.trim())return f({});f({query:e})}}),(0,U.jsx)(_,{type:"submit",children:"Search"})]})]}),(0,U.jsx)(E,{children:c.map((function(n){var e=(0,o.x0)();return(0,U.jsx)(m.rU,{to:"".concat(n.id),state:{from:g},children:(0,U.jsx)(x.Z,{movie:n})},e)}))})]})}},6124:function(n,e,r){r.d(e,{b:function(){return h}});var t=r(5861),a=r(4687),o=r.n(a),i=r(1243),c=r(1686),u="713e88f7db14c265e0543f2dd0843d0c",s="https://api.themoviedb.org/3/",p="trending/all/day",l="search/movie";i.Z.defaults.baseURL=s;var f=function(){var n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get(p,{params:{api_key:u,language:"en-US"}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),c.Notify.failure("Sorry, something went wrong. Please try again."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get(l,{params:{api_key:u,language:"en-US",query:e}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),c.Notify.failure("Sorry, something went wrong. Please try again."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e),{params:{api_key:u,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),c.Notify.failure("Sorry, we can't find any information about this movie :("),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/credits"),{params:{api_key:u,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),c.Notify.failure("Sorry, we can't find information about actors of this movie."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:u,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),c.Notify.failure("Sorry, no one has written a review yet."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){return{getTrendingMovies:f,getMovieBySearch:d,getOneMovie:v,getActors:g,getReviews:m}}}}]);
//# sourceMappingURL=415.23b97ef3.chunk.js.map