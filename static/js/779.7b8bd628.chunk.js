"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{9779:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n,a,s,i,o,u=r(9439),c=r(5984),p=r(1686),f=r(7689),l=r(2791),h=r(6124),v=r(168),d=r(1109),g=r(6856),m=d.Z.ul(n||(n=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: flex-start; */\n"]))),w=d.Z.h2(a||(a=(0,v.Z)(["\n  margin-bottom: 30px;\n  text-align: center;\n"]))),y=d.Z.li(s||(s=(0,v.Z)(["\n  text-align: start;\n  margin-bottom: 10px;\n\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),x=(0,d.Z)(g.I8D)(i||(i=(0,v.Z)(["\n  width: 15px;\n  height: 15px;\n  min-width: 15%;\n"]))),Z=(d.Z.p(o||(o=(0,v.Z)([""]))),r(184)),k=(0,h.b)(),b=function(){var e=(0,l.useState)([]),t=(0,u.Z)(e,2),r=t[0],n=t[1],a=(0,f.UO)().movieId;(0,l.useEffect)((function(){k.getReviews(a).then((function(e){0===e.length&&p.Notify.info("Sorry, there're no reviews yet"),n(e)}))}),[a]);var s=(0,c.x0)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,{children:"Reviews of the movie:"}),(0,Z.jsx)(m,{children:0===r.length?(0,Z.jsx)("div",{children:"Sorry, we didn't find any reviews of this movie."}):r.map((function(e){return(0,Z.jsxs)(y,{children:[(0,Z.jsx)(x,{}),(0,Z.jsx)(m,{children:e.content})]},s)}))})]})}},6124:function(e,t,r){r.d(t,{b:function(){return m}});var n=r(5861),a=r(4687),s=r.n(a),i=r(1243),o=r(1686),u="713e88f7db14c265e0543f2dd0843d0c",c="https://api.themoviedb.org/3/",p="trending/all/day",f="search/movie";i.Z.defaults.baseURL=c;var l=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get(p,{params:{api_key:u,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Sorry, something went wrong. Please try again."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get(f,{params:{api_key:u,language:"en-US",query:t}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Sorry, something went wrong. Please try again."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t),{params:{api_key:u,language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Sorry, we can't find any information about this movie :("),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/credits"),{params:{api_key:u,language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Sorry, we can't find this actor."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(t,"/reviews"),{params:{api_key:u,language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Sorry, no one has written a review yet."),new Error(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){return{getTrendingMovies:l,getMovieBySearch:h,getOneMovie:v,getActors:d,getReviews:g}}}}]);
//# sourceMappingURL=779.7b8bd628.chunk.js.map