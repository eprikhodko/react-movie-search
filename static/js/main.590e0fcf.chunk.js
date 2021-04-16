(this["webpackJsonpreact-movie-search"]=this["webpackJsonpreact-movie-search"]||[]).push([[0],{23:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(17),s=c.n(r),n=c(8),i=(c(23),c(9)),o=c.n(i),l=c(12),j=c(11),h=c(1);var u=function(e){var t=e.movies,c=e.searchMovies,a=e.query,r=e.handleChange,s=t.filter((function(e){return e.poster_path})).map((function(e){return Object(h.jsx)(n.b,{to:"/".concat(e.id),children:Object(h.jsxs)("div",{className:"movie-card",children:[Object(h.jsx)("img",{className:"movie-card-image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.title+" poster"}),Object(h.jsxs)("div",{className:"movie-info",children:[Object(h.jsx)("h2",{className:"movie-title",children:e.title}),Object(h.jsxs)("p",{className:"release-date",children:["Release year: ",e.release_date.slice(0,4)]}),Object(h.jsx)("p",{className:"movie-overview",children:e.overview})]})]},e.id)})}));return Object(h.jsxs)("div",{className:"container-search",children:[Object(h.jsxs)("form",{className:"form",onSubmit:c,children:[Object(h.jsx)("label",{className:"label",htmlFor:"query",children:"Movie Name"}),Object(h.jsx)("input",{className:"search-input",type:"text",name:"query",placeholder:"i.e. Star Wars",value:a,onChange:r}),Object(h.jsx)("button",{className:"button-search",type:"submit",children:"Search"})]}),Object(h.jsx)("div",{className:"search-results",children:s})]})},b=c(2);c(34);var d=function(){var e=Object(b.g)(),t=parseInt(e.movieId),c=Object(b.f)(),r=Object(a.useState)([]),s=Object(j.a)(r,2),n=s[0],i=s[1],u=function(){var e=Object(l.a)(o.a.mark((function e(c){var a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.tmdb.org/3/movie/".concat(t,"?api_key=").concat("496e7112180f6c0846886cf52e631b38","&language=en-US"),e.prev=1,e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:s=e.sent,i(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),Object(h.jsxs)("div",{className:"container-movie-details",children:[Object(h.jsx)("div",{className:"container-movie-backdrop",style:{backgroundImage:'url("https://image.tmdb.org/t/p/w1000_and_h450_multi_faces'.concat(n.backdrop_path,'")')},children:Object(h.jsx)("img",{className:"movie-poster",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(n.poster_path),alt:n.title+" poster"})}),Object(h.jsxs)("div",{className:"container-overview",children:[Object(h.jsx)("h2",{className:"title-movie-details",children:n.original_title}),Object(h.jsx)("h3",{className:"title-overview",children:"Overview"}),Object(h.jsx)("p",{className:"paragraph-overview",children:n.overview}),Object(h.jsx)("button",{className:"button-back",type:"button",onClick:function(){c.goBack()},children:"Back to search"})]})]})};function v(){return Object(h.jsx)("header",{children:Object(h.jsx)("h1",{className:"title",children:"React Movie Search"})})}var m=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)([]),n=Object(j.a)(s,2),i=n[0],m=n[1],p=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!c){e.next=17;break}return a="https://api.tmdb.org/3/search/movie?api_key=".concat("496e7112180f6c0846886cf52e631b38","&language=en-US&query=").concat(c,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(a);case 6:return s=e.sent,e.next=9,s.json();case 9:n=e.sent,m(n.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:r("");case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(u,{handleChange:function(e){return r(e.target.value)},query:c,searchMovies:p,movies:i})})}),Object(h.jsx)(b.a,{exact:!0,path:"/:movieId",children:Object(h.jsx)(d,{})})]})]})};s.a.render(Object(h.jsx)(n.a,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.590e0fcf.chunk.js.map