"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{4407:function(n,e,r){r.r(e),r.d(e,{MovieDetails:function(){return T},default:function(){return q}});var t,a,o,s,i,c,u,l,p,d,f,v=r(9439),g=r(5984),m=r(2791),h=r(7689),x=r(1087),w=r(6124),b=r(168),Z=r(1109),y=Z.Z.main(t||(t=(0,b.Z)(["\n  padding: 30px 30px;\n"]))),k=(0,Z.Z)(x.rU)(a||(a=(0,b.Z)(["\n  padding: 10px;\n  background-color: var(--button);\n  color: var(--light);\n  border-radius: 3px;\n  transition: transform 250ms ease-in-out;\n  display: inline-flex;\n  gap: 7px;\n  align-items: center;\n\n  position: absolute;\n  top: 10px;\n  left: 30px;\n\n  &:hover,\n  &:focus {\n    background-color: var(--accent);\n    color: var(--background);\n    transform: scale(1.1);\n  }\n"]))),j=Z.Z.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),_=Z.Z.h1(s||(s=(0,b.Z)(["\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 20px;\n"]))),S=Z.Z.div(i||(i=(0,b.Z)(["\n  margin-bottom: 30px;\n"]))),U=Z.Z.img(c||(c=(0,b.Z)(["\n  margin-bottom: 30px;\n"]))),E=Z.Z.h2(u||(u=(0,b.Z)(["\n  margin-bottom: 15px;\n"]))),N=Z.Z.div(l||(l=(0,b.Z)(["\n  margin-bottom: 30px;\n"]))),M=Z.Z.ul(p||(p=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  margin-bottom: 30px;\n"]))),R=Z.Z.ul(d||(d=(0,b.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n\n  margin-bottom: 30px;\n"]))),O=Z.Z.li(f||(f=(0,b.Z)(["\n  padding: 10px;\n  background-color: var(--button);\n  color: var(--light);\n  border-radius: 3px;\n  transition: transform 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: var(--accent);\n    color: var(--background);\n    transform: scale(1.1);\n  }\n"]))),A=r(1545),B=r(8367),C=r(184),P=(0,w.b)(),T=function(){var n,e,r=(0,m.useState)(""),t=(0,v.Z)(r,2),a=t[0],o=t[1],s=(0,h.UO)().movieId,i=(0,h.TH)(),c=(0,m.useRef)(null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,m.useEffect)((function(){P.getOneMovie(s).then((function(n){console.log("movie",n),o(n)}))}),[s]);var u,l,p=a.release_date;return(0,C.jsxs)(y,{children:[(0,C.jsxs)(k,{to:c.current,children:[(0,C.jsx)(A.xkQ,{}),(0,C.jsx)("span",{children:"Back to movies"})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(_,{children:[a.original_title||a.name," (",(l=String(p),l.split("-")[0]),")"]}),a.poster_path&&(0,C.jsx)(U,{src:"http://image.tmdb.org/t/p/w200".concat(a.poster_path),alt:a.original_title||a.name}),(0,C.jsxs)(S,{children:["Rating: ",(u=Number(a.vote_average),u.toFixed(1))]}),(0,C.jsx)(E,{children:"Overview"}),(0,C.jsx)(N,{children:a.overview}),(0,C.jsx)(E,{children:"Genres"}),(0,C.jsx)(M,{children:a.genres&&a.genres.map((function(n){var e=(0,g.x0)();return(0,C.jsx)("li",{children:n.name},e)}))}),(0,C.jsxs)(R,{children:[(0,C.jsx)(O,{children:(0,C.jsx)(x.rU,{to:"cast",children:"Actors"})},"cast"),(0,C.jsx)(O,{children:(0,C.jsx)(x.rU,{to:"reviews",children:"Reviews"})},"reviews")]}),(0,C.jsx)(m.Suspense,{fallback:(0,C.jsx)(B.Z,{}),children:(0,C.jsx)(h.j3,{})})]})]})},q=T},6124:function(n,e,r){r.d(e,{b:function(){return h}});var t=r(5861),a=r(4687),o=r.n(a),s=r(1243),i=r(1686),c="713e88f7db14c265e0543f2dd0843d0c",u="https://api.themoviedb.org/3/",l="trending/all/day",p="search/movie";s.Z.defaults.baseURL=u;var d=function(){var n=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get(l,{params:{api_key:c,language:"en-US"}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),i.Notify.failure("Sorry, something went wrong. Please try again."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get(p,{params:{api_key:c,language:"en-US",query:e}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),i.Notify.failure("Sorry, something went wrong. Please try again."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),i.Notify.failure("Sorry, we can't find any information about this movie :("),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),i.Notify.failure("Sorry, we can't find this actor."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),i.Notify.failure("Sorry, no one has written a review yet."),new Error(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){return{getTrendingMovies:d,getMovieBySearch:f,getOneMovie:v,getActors:g,getReviews:m}}}}]);
//# sourceMappingURL=407.7128358c.chunk.js.map