(this["webpackJsonpmusics-library"]=this["webpackJsonpmusics-library"]||[]).push([[0],{114:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(21),a=t.n(i),s=t(1);var c=function(n){var e=n.history;return Object(r.useEffect)((function(){return e.push("/musics")})),Object(s.jsx)("div",{children:"Home"})},o=t(6),d=t(15),u=t.n(d),l=t(7),b=t.n(l),p=t(16),h=t(40),x=t.n(h),f="http://localhost:3001/";function j(n){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(b.a.mark((function n(e){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.get("".concat(f),{headers:{url:e}}).then((function(n){return n.data})).catch(console.error);case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){n.forEach((function(n){var e,t=Number(n.duration),r=Math.floor(t%3600/60),i=Math.floor(t%3600%60);e=i<10?"0":"",n.duration="".concat(r,":").concat(e).concat(i)}))}function O(n){n.forEach((function(n){var e=n.title,t=n.album.title;if(e.length>30){var r=n.title.substr(0,30).concat("...");n.title=r}if(t.length>30){var i=n.album.title.substr(0,30).concat("...");n.album.title=i}}))}function v(){return(v=Object(p.a)(b.a.mark((function n(e){var t,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j("https://api.deezer.com/editorial?limit=28");case 2:t=n.sent,r=t.data.filter((function(n){return"All"!==n.name&&"Todos"!==n.name})),e(r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(){return(y=Object(p.a)(b.a.mark((function n(e,t){var r,i;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return localStorage.thumbs||localStorage.setItem("thumbs",JSON.stringify([])),localStorage.favorites||localStorage.setItem("favorites",JSON.stringify([])),n.next=4,j("https://api.deezer.com/playlist/3155776842/tracks&limit=50");case 4:r=n.sent,i=JSON.parse(localStorage.getItem("favorites")),t(i),m(r.data),O(r.data),e(r.data);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var k,w,z,S,B="GENRES",M="MAIN_MUSICS",F="MUSICS_BY_QUERY",N="FAVORITES",A="MUSICS_BY_GENDER",I="ARTISTS_BY_GENDER",R="MANIPULATE_RENDER",G=function(n){return{type:M,array:n}},C=function(n,e){return{type:F,render:e,array:n}},E=function(n){return{type:N,array:n}},J=t(2),W=t(3),Q={lightBlack:"#333",lighterBlack:"#434343",lightestBlack:"#5d5c5c",darkWhite:"#ece8e8",darkerWhite:"#e2e2e2",darkestWhite:"#BBB5B5",trybeGreen:"#0fa36b",blue:"royalblue"},_=W.b.div(k||(k=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  position: relative;\n  margin: calc(2vh + 95px) 17px 30px 0;\n  background-color: ",";\n  border-radius: 9px;\n  max-width: 900px;\n  padding: 20px 0;\n  width: 800px;\n  max-height: 1320px;\n  button {\n    background: none;\n    border: none;\n    padding: 0;\n  }\n  @media (min-width: 1250px) { \n    width: 45%;\n  }\n"])),Q.lightestBlack),T=W.b.div(w||(w=Object(J.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 250px;\n  height: 180px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  border-radius: 7px;\n  text-shadow: 0 0 3px #000;\n  -moz-text-shadow: 0 0 3px #000;\n  -webkit-text-shadow: 0 0 3px #000;\n"]))),U=W.b.h1(z||(z=Object(J.a)(["\n  margin: 15px 0 0 15px;\n  color: white;\n  width: 50%;\n"]))),D=W.b.div(S||(S=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vh;\n  height: 100%;\n"])));var H,Y,q,P,L,V=Object(o.b)((function(n){return{stateGenres:n.musicsReducer.genres}}),(function(n){return{dispatchArtistsByGenre:function(e,t){var r=e.renderArtists,i=e.renderMusics;return n(function(n,e){var t=n.renderMusics,r=n.renderArtists;return{type:I,renderMusics:t,renderArtists:r,array:e}}({renderArtists:r,renderMusics:i},t))}}}))((function(n){var e=n.dispatchArtistsByGenre,t=n.stateGenres;function r(){return(r=Object(p.a)(b.a.mark((function n(t){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j("https://api.deezer.com/genre/".concat(t,"/artists"));case 2:r=n.sent,e({renderArtists:!0,renderMusics:!1},r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(s.jsx)(_,{children:t&&t.length>0?t.map((function(n,e){return Object(s.jsx)("button",{onClick:function(){return function(n){return r.apply(this,arguments)}(n.id)},children:Object(s.jsx)(T,{style:{backgroundImage:"url(".concat(n.picture_big,")")},children:Object(s.jsx)(U,{children:n.name})})},e)})):Object(s.jsx)(D,{children:Object(s.jsx)(u.a,{type:"spinner-cub",bgColor:"#FFFF",size:100})})})})),K=t(13),X=W.b.div(H||(H=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  background-color: ",";\n  border-radius: 9px;\n  margin: calc(2vh + 95px) 0 30px 17px;\n  overflow-y: auto;\n  padding: 20px 0;\n  width: 800px;\n  max-height: 1320px;\n  @media (min-width: 1300px) { \n    width: 45%;\n  }\n  h1 {\n    position: absolute;\n  }\n  img {\n    width: 150px;\n    height: 150px;\n    background-size: 120%;\n    border-radius: 4px;\n  }\n  h4 {\n    font-size: 14px;\n    margin: 0;\n  }\n  span {\n    font-size: 13px;\n  }\n  a { color: inherit; } \n  .deezer {\n    position: absolute;\n    font-size: 32px;\n    right: 7px;\n    top: 5px;\n    width: 38px;\n    padding: 2px;\n    border-radius: 4px;\n    &:hover {\n      transition: .1s;\n      color: ",";\n      background-color: ",";\n      border: 0.1px solid rgba(0, 0, 0, 0.5);\n      opacity: 0.8;\n    }\n  }\n  button {\n    position: absolute;\n    right: 2px;\n    bottom: 8px;\n    background: none;\n    border: none;\n    i {\n      font-size: 20px;\n      color: #0fa36b\n    }\n  }\n  #duration {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n  }\n  "])),Q.lightestBlack,Q.lightBlack,Q.darkWhite),Z=W.b.div(Y||(Y=Object(J.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  width: 200px;\n  height: 250px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n"])),Q.lightBlack),$=W.b.div(q||(q=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  height: 80px;\n"]))),nn=W.b.div(P||(P=Object(J.a)(["\n  position: absolute;\n  right: 3.5px;\n  bottom: 50px;\n  background: none;\n  border: none;\n  i {font-size: 25px;}\n  .on {\n    color: ","\n  }\n  .off {\n    color: ","\n  }\n"])),Q.blue,Q.darkerWhite),en=W.b.div(L||(L=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vh;\n  height: 100%;\n"])));function tn(n,e,t){var r=t.dispatchFavorites,i=t.stateFavorites,a=JSON.parse(localStorage.getItem("favorites")),s=JSON.parse(localStorage.getItem("thumbs")),c=n.filter((function(n){return n.id===e}))[0],o=i.filter((function(n){return n.id===e}));if(o&&o.length<1)i.push(c),a.push(c),s.push(c.id),localStorage.setItem("favorites",JSON.stringify(a)),localStorage.setItem("thumbs",JSON.stringify(s)),r(i);else{r(i.filter((function(n){return n.id!==e})));var d=a.filter((function(n){return n.id!==e}));localStorage.setItem("favorites",JSON.stringify(d));var u=s.filter((function(n){return n!==e}));localStorage.setItem("thumbs",JSON.stringify(u))}}var rn=function(){var n=Object(r.useState)([]),e=Object(K.a)(n,2),t=e[0],i=e[1];return[t,function(n){var e=document.getElementById("".concat(n)),r=document.querySelector(".play-".concat(n)),a=t;if(t.includes(n)){e.pause();var s=t.indexOf(n);a.splice(s,1),i(a),r.style.color="#0fa36b"}else e.play(),e.volume=.3,r.style.color="crimson",a.push(n),i(a),setTimeout((function(){var e=a.indexOf(n);a.splice(e,1),i(a),r.style.color="#0fa36b"}),3e4)}]};var an,sn,cn,on,dn,un=Object(o.b)((function(n){return{stateMainMusics:n.musicsReducer.mainMusics,stateFavorites:n.musicsReducer.favorites}}),(function(n){return{dispatchMusics:function(e){return n(G(e))},dispatchFavorites:function(e){return n(E(e))}}}))((function(n){var e=n.stateMainMusics,t=n.stateFavorites,i=n.dispatchFavorites,a=Object(r.useState)([]),c=Object(K.a)(a,2)[1],o={stateFavorites:t,dispatchFavorites:i},d=JSON.parse(localStorage.getItem("thumbs")),l=rn(),b=Object(K.a)(l,2),p=b[0],h=b[1];return Object(r.useEffect)((function(){console.log("useEffect")}),[p]),Object(s.jsx)(X,{children:e&&e.length>0?e.map((function(n,t){return Object(s.jsxs)(Z,{children:[Object(s.jsx)("a",{href:n.artist.link,target:"blank",children:Object(s.jsx)("i",{className:"fab fa-deezer deezer"})}),Object(s.jsx)("img",{src:n.album.cover_medium,alt:"".concat(n.name)}),Object(s.jsxs)($,{children:[Object(s.jsx)("h4",{children:n.title}),Object(s.jsx)("span",{children:n.album.title}),Object(s.jsx)("span",{children:n.artist.name}),Object(s.jsx)("span",{id:"duration",children:n.duration})]}),Object(s.jsx)(nn,{onClick:function(){tn(e,n.id,o),c([])},children:d.includes(n.id)?Object(s.jsx)("i",{className:"fas fa-thumbs-up on"}):Object(s.jsx)("i",{className:"far fa-thumbs-up off"})}),Object(s.jsx)("button",{onClick:function(){return h(n.id)},children:Object(s.jsx)("i",{className:"fas fa-play play-".concat(n.id)})}),Object(s.jsx)("audio",{src:n.preview,preload:"auto",id:n.id})]},t)})):Object(s.jsx)(en,{children:Object(s.jsx)(u.a,{type:"spinner-cub",bgColor:"#FFFF",size:100})})})})),ln=W.b.div(an||(an=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  background-color: ",";\n  border-radius: 9px;\n  margin: calc(2vh + 95px) 0 30px 17px;\n  overflow-y: auto;\n  padding: 20px 0;\n  width: 800px;\n  max-height: 1320px;\n  @media (min-width: 1300px) { \n    width: 45%;\n  }\n  h1 {\n    position: absolute;\n  }\n  img {\n    width: 150px;\n    height: 150px;\n    background-size: 120%;\n    border-radius: 4px;\n  }\n  h4 {\n    font-size: 14px;\n    margin: 0;\n  }\n  span {\n    margin: 2px 0;\n    font-size: 13px;\n  }\n  a { color: inherit; } \n  .deezer {\n    position: absolute;\n    font-size: 32px;\n    right: 7px;\n    top: 5px;\n    width: 38px;\n    padding: 2px;\n    border-radius: 4px;\n    &:hover {\n      transition: .1s;\n      color: ",";\n      background-color: ",";\n      border: 0.1px solid rgba(0, 0, 0, 0.5);\n      opacity: 0.8;\n    }\n  }\n  button {\n    position: absolute;\n    right: 2px;\n    bottom: 8px;\n    background: none;\n    border: none;\n    i {\n      font-size: 20px;\n      color: #0fa36b\n    }\n  }\n  #duration {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n  }\n  "])),Q.lightestBlack,Q.lightBlack,Q.darkWhite),bn=W.b.div(sn||(sn=Object(J.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  width: 200px;\n  height: 250px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n"])),Q.lightBlack),pn=W.b.div(cn||(cn=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  height: 80px;\n"]))),hn=W.b.div(on||(on=Object(J.a)(["\n  position: absolute;\n  right: 3.5px;\n  bottom: 50px;\n  background: none;\n  border: none;\n  i {font-size: 25px;}\n  .on {\n    color: ","\n  }\n  .off {\n    color: ","\n  }\n"])),Q.blue,Q.darkerWhite),xn=W.b.div(dn||(dn=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vh;\n  height: 100%;\n"])));var fn,jn,gn,mn,On=Object(o.b)((function(n){return{stateQueryMusics:n.musicsReducer.stateQueryMusics,stateFavorites:n.musicsReducer.favorites}}),(function(n){return{dispatchQueryMusics:function(e,t){return n(C(e,t))},dispatchFavorites:function(e){return n(E(e))}}}))((function(n){var e=n.dispatchQueryMusics,t=n.stateQueryMusics,i=n.stateFavorites,a=n.dispatchFavorites,c=Object(r.useState)([]),o=Object(K.a)(c,2),d=o[0],l=o[1],b=Object(r.useState)([]),p=Object(K.a)(b,2)[1];Object(r.useEffect)((function(){e(t,!0)}),[e,t]);var h={stateFavorites:i,dispatchFavorites:a},x=JSON.parse(localStorage.getItem("thumbs"));return Object(s.jsx)(ln,{children:t&&t.length>0?t.map((function(n,e){return Object(s.jsxs)(bn,{children:[Object(s.jsx)("a",{href:n.artist.link,target:"blank",children:Object(s.jsx)("i",{className:"fab fa-deezer deezer"})}),Object(s.jsx)("img",{src:n.album.cover_medium,alt:"".concat(n.name)}),Object(s.jsxs)(pn,{children:[Object(s.jsx)("h4",{children:n.title}),Object(s.jsx)("span",{children:n.album.title}),Object(s.jsx)("span",{children:n.artist.name}),Object(s.jsx)("span",{id:"duration",children:n.duration})]}),Object(s.jsx)(hn,{onClick:function(){tn(t,n.id,h),p([])},children:x.includes(n.id)?Object(s.jsx)("i",{className:"fas fa-thumbs-up on"}):Object(s.jsx)("i",{className:"far fa-thumbs-up off"})}),Object(s.jsx)("button",{onClick:function(){return rn(n.id,d,l)},children:Object(s.jsx)("i",{className:"fas fa-play play-".concat(n.id)})}),Object(s.jsx)("audio",{src:n.preview,preload:"auto",id:n.id})]},e)})):Object(s.jsx)(xn,{children:Object(s.jsx)(u.a,{type:"spinner-cub",bgColor:"#FFFF",size:100})})})})),vn=W.b.div(fn||(fn=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  position: relative;\n  margin: calc(2vh + 95px) 17px 30px 0;\n  background-color: ",";\n  border-radius: 9px;\n  max-width: 900px;\n  padding: 20px 0;\n  max-height: 1320px;\n  button {\n    background: none;\n    border: none;\n    padding: 0;\n  }\n  @media (min-width: 1300px) { \n    width: 45%;\n  }\n"])),Q.lightestBlack),yn=W.b.div(jn||(jn=Object(J.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 250px;\n  height: 180px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  border-radius: 7px;\n  text-shadow: 0 0 3px #000;\n  -moz-text-shadow: 0 0 3px #000;\n  -webkit-text-shadow: 0 0 3px #000;\n"]))),kn=W.b.h1(gn||(gn=Object(J.a)(["\n  margin: 15px 0 0 15px;\n  color: white;\n  width: 50%;\n"]))),wn=W.b.div(mn||(mn=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vh;\n  height: 100%;\n"])));var zn,Sn,Bn,Mn,Fn,Nn=Object(o.b)((function(n){return{stateAristsByGender:n.artistsReducer.artistsByGender}}),(function(n){return{dispatchMusicsByGenre:function(e,t){var r=e.renderArtists,i=e.renderMusics;return n(function(n,e){var t=n.renderArtists,r=n.renderMusics;return{type:A,renderArtists:t,renderMusics:r,array:e}}({renderArtists:r,renderMusics:i},t))}}}))((function(n){var e=n.stateAristsByGender,t=n.dispatchMusicsByGenre;function r(){return(r=Object(p.a)(b.a.mark((function n(e){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j("https://api.deezer.com/artist/".concat(e,"/top?limit=50"));case 2:O((r=n.sent).data),m(r.data),t({renderArtists:!1,renderMusics:!0},r.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(s.jsx)(vn,{children:e&&e.length>0?e.map((function(n,e){return Object(s.jsx)("button",{onClick:function(){return function(n){return r.apply(this,arguments)}(n.id)},children:Object(s.jsx)(yn,{style:{backgroundImage:"url(".concat(n.picture_big,")")},children:Object(s.jsx)(kn,{children:n.name})})},e)})):Object(s.jsx)(wn,{children:Object(s.jsx)(u.a,{type:"spinner-cub",bgColor:"#FFFF",size:100})})})})),An=W.b.div(zn||(zn=Object(J.a)(["\n  display: flex;\n  position: relative;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  border-radius: 9px;\n  background-color: ",";\n  margin: calc(2vh + 95px) 0 30px 17px;\n  padding: 20px 0;\n  width: 800px;\n  max-height: 1320px;\n  @media (min-width: 1300px) { \n    width: 45%;\n  }\n  h1 {\n    position: absolute;\n  }\n  img {\n    width: 150px;\n    height: 150px;\n    background-size: 120%;\n    border-radius: 4px;\n  }\n  h4 {\n    font-size: 14px;\n    margin: 0;\n  }\n  span {\n    font-size: 13px;\n  }\n  a { color: inherit; } \n  .deezer {\n    position: absolute;\n    font-size: 32px;\n    right: 7px;\n    top: 5px;\n    width: 38px;\n    padding: 2px;\n    border-radius: 4px;\n    &:hover {\n      transition: .1s;\n      color: ",";\n      background-color: ",";\n      border: 0.1px solid rgba(0, 0, 0, 0.5);\n      opacity: 0.8;\n    }\n  }\n  button {\n    position: absolute;\n    right: 2px;\n    bottom: 8px;\n    background: none;\n    border: none;\n    i {\n      font-size: 20px;\n      color: #0fa36b\n    }\n  }\n  #duration {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n  }\n  "])),Q.lightestBlack,Q.lightBlack,Q.darkWhite),In=W.b.div(Sn||(Sn=Object(J.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  width: 200px;\n  height: 250px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n"])),Q.lightBlack),Rn=W.b.div(Bn||(Bn=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  height: 80px;\n"]))),Gn=W.b.div(Mn||(Mn=Object(J.a)(["\n  position: absolute;\n  right: 3.5px;\n  bottom: 50px;\n  background: none;\n  border: none;\n  i {font-size: 25px;}\n  .on {\n    color: ","\n  }\n  .off {\n    color: ","\n  }\n"])),Q.blue,Q.darkerWhite),Cn=W.b.div(Fn||(Fn=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vh;\n  height: 100%;\n"])));var En,Jn,Wn,Qn,_n,Tn=Object(o.b)((function(n){return{musicsByGender:n.artistsReducer.musicsByGender,stateFavorites:n.musicsReducer.favorites}}),(function(n){return{dispatchFavorites:function(e){return n(E(e))}}}))((function(n){var e=n.musicsByGender,t=n.stateFavorites,i=n.dispatchFavorites,a=Object(r.useState)([]),c=Object(K.a)(a,2),o=c[0],d=c[1],l=Object(r.useState)([]),b=Object(K.a)(l,2)[1],p={stateFavorites:t,dispatchFavorites:i},h=JSON.parse(localStorage.getItem("thumbs"));return Object(s.jsx)(An,{children:e&&e.length>0?e.map((function(n,t){return Object(s.jsxs)(In,{children:[Object(s.jsx)("a",{href:n.link,target:"blank",children:Object(s.jsx)("i",{className:"fab fa-deezer deezer"})}),Object(s.jsx)("img",{src:n.album.cover_medium,alt:"".concat(n.name)}),Object(s.jsxs)(Rn,{children:[Object(s.jsx)("h4",{children:n.title}),Object(s.jsx)("span",{children:n.album.title}),Object(s.jsx)("span",{children:n.artist.name}),Object(s.jsx)("span",{id:"duration",children:n.duration})]}),Object(s.jsx)(Gn,{onClick:function(){tn(e,n.id,p),b([])},children:h.includes(n.id)?Object(s.jsx)("i",{className:"fas fa-thumbs-up on"}):Object(s.jsx)("i",{className:"far fa-thumbs-up off"})}),Object(s.jsx)("button",{onClick:function(){return rn(n.id,o,d)},children:Object(s.jsx)("i",{className:"fas fa-play play-".concat(n.id)})}),Object(s.jsx)("audio",{src:n.preview,preload:"auto",id:n.id})]},t)})):Object(s.jsx)(Cn,{children:Object(s.jsx)(u.a,{type:"spinner-cub",bgColor:"#FFFF",size:100})})})})),Un=W.b.div(En||(En=Object(J.a)(["\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  overflow-x: hidden;\n  background-color: ",";\n  height: 50px;\n"])),Q.lightBlack),Dn=W.b.div(Jn||(Jn=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-width: 800px;\n  max-width: 1850px;\n  position: relative;\n  input {\n    background-color: ",";\n    width: 550px;\n    height: 30px;\n    transition: 0.2s;\n    border-radius: 5px;\n    border: 0.1px solid ",";\n    font-size: 18px;\n    font-weight: 900;\n    color: ",";\n    padding-left: 12px;\n    font-weight: 500;\n    border: 0.1px rgba(0, 0, 0, 0.3) solid;\n    &:focus {\n      outline: none;\n      border-color: rgba(255, 255, 255, 0.2);\n      box-shadow: 0 0px 1.5px ",";\n    }\n    &:hover {\n      border-color: rgba(255, 255, 255, 0.2);\n      box-shadow: 0 0px 2px ",";\n    }\n  }\n"])),Q.lightestBlack,Q.lightBlack,Q.darkWhite,Q.darkWhite,Q.darkWhite),Hn=W.b.button(Wn||(Wn=Object(J.a)(["\n  color: inherit;\n  background-color: none;\n  background: none;\n  margin-right: 15px;\n  padding: 5px 2px 2px 2px;\n  border: 0.1px solid ",";\n  outline: none;\n  border-radius: 4px;\n  &:hover {\n    transition: .1s;\n    color: ",";\n    background-color: ",";\n    border: 0.1px solid rgba(0, 0, 0, 0.5);\n  }\n  i {\n    font-size: 33px;\n    width: 38px;\n  }\n"])),Q.lightBlack,Q.lightBlack,Q.darkWhite),Yn=W.b.button(Qn||(Qn=Object(J.a)(["\n  color: inherit;\n  background-color: none;\n  background: none;\n  position: relative;\n  left: 5px;\n  padding: 2px;\n  border: 0.1px solid ",";\n  outline: none;\n  border-radius: 4px;\n  &:hover {\n    transition: .1s;\n    color: ",";\n    background-color: ",";\n    border: 0.1px solid rgba(0, 0, 0, 0.5);\n  }\n  i {\n    font-size: 33px;\n    width: 38px;\n  }\n"])),Q.lightBlack,Q.lightBlack,Q.darkWhite),qn=W.b.button(_n||(_n=Object(J.a)(["\n  color: inherit;\n  background-color: none;\n  background: none;\n  position: relative;\n  left: 10px;\n  padding: 2px;\n  margin-right: 15px;\n  padding: 5px 2px 2px 2px;\n  border: 0.1px solid ",";\n  outline: none;\n  border-radius: 4px;\n  &:hover {\n    transition: .1s;\n    color: crimson;\n  }\n  i {\n    font-size: 33px;\n    width: 38px;\n  }\n"])),Q.lightBlack);var Pn,Ln,Vn,Kn,Xn,Zn,$n,ne=Object(o.b)(null,(function(n){return{dispatchQueryMusics:function(e,t){return n(C(e,t))}}}))((function(n){var e=n.history,t=n.dispatchQueryMusics;function r(){return(r=Object(p.a)(b.a.mark((function n(){var e,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!((e=document.getElementById("search").value)&&e.length>0)){n.next=8;break}return n.next=4,j("https://api.deezer.com/search?q=".concat(e,"&limit=50"));case 4:m((r=n.sent).data),O(r.data),t(r.data,!0);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(s.jsx)(Un,{children:Object(s.jsxs)(Dn,{children:[Object(s.jsx)(Hn,{"data-testid":"search-btn",onClick:function(){return function(){return r.apply(this,arguments)}()},children:Object(s.jsx)("i",{className:"fas fa-search"})}),Object(s.jsx)("input",{"data-testid":"search-input",id:"search"}),Object(s.jsx)(qn,{"data-testid":"favorite-btn",onClick:function(){return e.push("/musics/favorites")},children:Object(s.jsx)("i",{className:"fas fa-heart"})}),Object(s.jsx)(Yn,{"data-testid":"home-btn",onClick:function(){return e.push("/musics")},children:Object(s.jsx)("i",{className:"fas fa-home"})})]})})})),ee=W.b.div(Pn||(Pn=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),te=W.b.div(Ln||(Ln=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  overflow-y: hidden;\n  max-height: 100vh;\n  min-width: 1000px;\n"]))),re=W.b.div(Vn||(Vn=Object(J.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  position: absolute;\n  top: 40px;\n  right: 0;\n  min-width: 100%;\n  height: 50vh;\n"]))),ie=W.b.h1(Kn||(Kn=Object(J.a)(["\n  color: #333;\n  min-width: 35%;\n"]))),ae=W.b.h1(Xn||(Xn=Object(J.a)(["\n  min-width: 40%;\n  color: #333;\n"]))),se=W.b.div(Zn||(Zn=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n  height: 100vh;\n  width: 100vh;\n"]))),ce=W.b.button($n||($n=Object(J.a)(["\n  position: absolute;\n  bottom: 0;\n  opacity: 0.7;\n  padding: 5px;\n  border-radius: 5px;\n  z-index: 10;\n  left: 25px;\n  background: none;\n  border: none;\n  text-shadow: 0 0 2px #fff;\n  -moz-text-shadow: 0 0 2px #fff;\n  -webkit-text-shadow: 0 0 2px #fff;\n  color: ",";\n  &:hover {\n    transition: .1s;\n    color: ",";\n    text-shadow: 0 0 2px #000;\n    -moz-text-shadow: 0 0 2px #000;\n    -webkit-text-shadow: 0 0 2px #000;\n  }\n  i {\n    font-size: 35px;\n  }\n"])),Q.lightBlack,Q.darkestWhite);var oe,de,ue,le,be,pe=Object(o.b)((function(n){return{renderQuery:n.musicsReducer.renderQuery,renderArtists:n.artistsReducer.renderArtists,renderMusics:n.artistsReducer.renderMusics,stateMusics:n.musicsReducer.mainMusics,stateGenres:n.musicsReducer.genres}}),(function(n){return{dispatchMusics:function(e){return n(G(e))},dispatchGenres:function(e){return n(function(n){return{type:B,array:n}}(e))},dispatchFavorites:function(e){return n(E(e))},manipulateRender:function(e,t){return n(function(n,e){return{type:R,artists:n,musics:e}}(e,t))}}}))((function(n){var e=n.dispatchGenres,t=n.dispatchMusics,i=n.dispatchFavorites,a=n.history,c=n.renderQuery,o=n.stateMusics,d=n.stateGenres,l=n.renderArtists,b=n.renderMusics,p=n.manipulateRender;return Object(r.useEffect)((function(){!function(n){v.apply(this,arguments)}(e),function(n,e){y.apply(this,arguments)}(t,i)}),[i,e,t]),Object(s.jsxs)(ee,{children:[Object(s.jsx)(ne,{history:a}),o.length>0&&d.length>0?Object(s.jsxs)("div",{children:[Object(s.jsxs)(re,{children:[Object(s.jsx)(ce,{onClick:function(){return p(!1,!1)},children:Object(s.jsx)("i",{className:"fas fa-backward"})}),Object(s.jsx)(ie,{children:"Generos"}),Object(s.jsx)(ae,{children:"Principais M\xfasicas"})]}),Object(s.jsxs)(te,{children:[b||l?l?Object(s.jsx)(Nn,{history:a}):Object(s.jsx)(Tn,{history:a}):Object(s.jsx)(V,{history:a}),c?Object(s.jsx)(On,{history:a}):Object(s.jsx)(un,{history:a})]})]}):Object(s.jsx)(se,{children:Object(s.jsx)(u.a,{type:"spinner-cub",bgColor:"#333",size:120})})]})})),he=W.b.div(oe||(oe=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  max-height: 100vh;\n"]))),xe=W.b.div(de||(de=Object(J.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  background-color: ",";\n  border-radius: 9px;\n  margin: calc(2vh + 95px) 0 30px 17px;\n  overflow-y: auto;\n  padding: 20px 0;\n  min-width: 850px;\n  max-width: 1280px;\n  max-height: 1320px;\n"])),Q.lightestBlack),fe=W.b.div(ue||(ue=Object(J.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  width: 200px;\n  height: 250px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n  h1 {\n    position: absolute;\n  }\n  img {\n    width: 150px;\n    height: 150px;\n    background-size: 120%;\n    border-radius: 4px;\n  }\n  h4 {\n    font-size: 14px;\n    margin: 0;\n  }\n  span {\n    font-size: 13px;\n  }\n  a { color: inherit; } \n  .deezer {\n    position: absolute;\n    font-size: 32px;\n    right: 7px;\n    top: 5px;\n    width: 38px;\n    padding: 2px;\n    border-radius: 4px;\n    &:hover {\n      transition: .1s;\n      color: ",";\n      background-color: ",";\n      border: 0.1px solid rgba(0, 0, 0, 0.5);\n      opacity: 0.8;\n    }\n  }\n  button {\n    position: absolute;\n    right: 2px;\n    bottom: 8px;\n    background: none;\n    border: none;\n    i {\n      font-size: 20px;\n      color: #0fa36b\n    }\n  }\n  #duration {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n  }\n"])),Q.lightBlack,Q.lightBlack,Q.darkWhite),je=W.b.div(le||(le=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  height: 80px;\n"]))),ge=W.b.div(be||(be=Object(J.a)(["\n  position: absolute;\n  right: 3.5px;\n  bottom: 50px;\n  background: none;\n  border: none;\n  i {font-size: 25px;}\n  .on {\n    color: ","\n  }\n  .off {\n    color: ","\n  }\n"])),Q.blue,Q.darkerWhite);var me=Object(o.b)((function(n){return{stateFavorites:n.musicsReducer.favorites}}),(function(n){return{dispatchFavorites:function(e){return n(E(e))}}}))((function(n){var e=n.history,t=n.dispatchFavorites,i=n.stateFavorites,a=Object(r.useState)([]),c=Object(K.a)(a,2),o=c[0],d=c[1];Object(r.useEffect)((function(){localStorage.favorites||localStorage.setItem("favorites",JSON.stringify([])),localStorage.thumbs||localStorage.setItem("thumbs",JSON.stringify([]));var n=JSON.parse(localStorage.getItem("favorites"));t(n)}),[t]);var u={stateFavorites:i,dispatchFavorites:t},l=JSON.parse(localStorage.getItem("thumbs"));return Object(s.jsxs)(he,{children:[Object(s.jsx)(ne,{history:e}),Object(s.jsx)(xe,{children:i&&i.length?i.map((function(n,e){return Object(s.jsxs)(fe,{children:[Object(s.jsx)("a",{href:n.link,target:"blank",children:Object(s.jsx)("i",{className:"fab fa-deezer deezer"})}),Object(s.jsx)("img",{src:n.album.cover_medium,alt:"".concat(n.name)}),Object(s.jsxs)(je,{children:[Object(s.jsx)("h4",{children:n.title}),Object(s.jsx)("span",{children:n.album.title}),Object(s.jsx)("span",{children:n.artist.name}),Object(s.jsx)("span",{id:"duration",children:n.duration})]}),Object(s.jsx)(ge,{onClick:function(){tn(i,n.id,u)},children:l.includes(n.id)?Object(s.jsx)("i",{className:"fas fa-thumbs-up on"}):Object(s.jsx)("i",{className:"far fa-thumbs-up off"})}),Object(s.jsx)("button",{onClick:function(){return rn(n.id,o,d)},children:Object(s.jsx)("i",{className:"fas fa-play play-".concat(n.id)})}),Object(s.jsx)("audio",{src:n.preview,preload:"auto",id:n.id})]},e)})):"N\xe3o h\xe1 m\xfasicas favoritas."})]})})),Oe=t(5);var ve=function(){return Object(s.jsxs)(Oe.c,{children:[Object(s.jsx)(Oe.a,{exact:!0,path:"/",component:c}),Object(s.jsx)(Oe.a,{exact:!0,path:"/musics",component:pe}),Object(s.jsx)(Oe.a,{exact:!0,path:"/musics/favorites",component:me})]})},ye=t(25),ke=t(19),we=t(44),ze=t(45),Se=t(10),Be={renderQuery:!1,genres:[],mainMusics:[],stateQueryMusics:[],favorites:[]};var Me={renderArtists:!1,renderMusics:!1,artistsByGender:[],musicsByGender:[]};var Fe,Ne=Object(ke.combineReducers)({musicsReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return Object(Se.a)(Object(Se.a)({},n),{},{genres:e.array});case M:return Object(Se.a)(Object(Se.a)({},n),{},{mainMusics:e.array});case F:return Object(Se.a)(Object(Se.a)({},n),{},{renderQuery:e.render,stateQueryMusics:e.array});case N:return Object(Se.a)(Object(Se.a)({},n),{},{favorites:e.array});default:return n}},artistsReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(Se.a)(Object(Se.a)({},n),{},{renderArtists:e.renderArtists,renderMusics:e.renderMusics,artistsByGender:e.array});case A:return Object(Se.a)(Object(Se.a)({},n),{},{renderArtists:e.renderArtists,renderMusics:e.renderMusics,musicsByGender:e.array});case R:return Object(Se.a)(Object(Se.a)({},n),{},{renderArtists:e.artists,renderMusics:e.musics});default:return n}}}),Ae=Object(ke.createStore)(Ne,Object(we.composeWithDevTools)(Object(ke.applyMiddleware)(ze.a))),Ie=Object(W.a)(Fe||(Fe=Object(J.a)(["\n  body{\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background-color: #ece8e8;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #BBB5B5;\n    border-radius: 5px;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background: #434343;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #333;\n}\n"]))),Re=t(46),Ge=Object(Re.a)();var Ce=function(){return Object(s.jsx)(o.a,{store:Ae,children:Object(s.jsxs)(ye.a,{basename:"/musics-library",children:[Object(s.jsx)(Ie,{}),Object(s.jsx)(ve,{history:Ge})]})})};a.a.render(Object(s.jsx)(Ce,{}),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.6def1d38.chunk.js.map