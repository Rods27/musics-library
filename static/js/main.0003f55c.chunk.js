(this["webpackJsonpmusics-library"]=this["webpackJsonpmusics-library"]||[]).push([[0],{118:function(n,e,t){},119:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,s,u,l=t(0),d=t.n(l),p=t(24),h=t.n(p),b=t(6),x=t(7),f=t(9),j=t(8),m=t(10),g=t.n(m),v=t(17),O=t(12),y=t(1),k=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(x.a)(t,[{key:"componentDidMount",value:function(){var n=Object(v.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.props.history.push("/musics");case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return Object(y.jsx)("div",{children:"Home"})}}]),t}(d.a.Component),w=Object(O.b)(null,null)(k),S=t(3),z=t(4),M={lightBlack:"#333",lighterBlack:"#434343",lightestBlack:"#5d5c5c",darkWhite:"#ece8e8",darkerWhite:"#e2e2e2",darkestWhite:"#BBB5B5",lightblue:"royalblue",blue:"#275fb4",darkBlue:"#223C5B",darkestBlue:"#091c32",sucess:"#4bb543",white:"#ffffff",disabledGreen:"#0d311c",trybeGreen:"#0fa36b",enabledGreen:"#0e8859",libreyellow:"#fff159",jYellow:"#fbcc04",jYellowSelected:"#d3ae0d",pending:"#05caca",preparing:"crimson"},B=z.a.div(i||(i=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  margin: calc(2vh + 95px) 17px 30px 0;\n  border-radius: 9px;\n  max-width: 900px;\n  background-color: ",";\n  overflow-y: auto;\n  position: relative;\n  padding: 20px 0;\n  max-height: 1320px;\n  @media only screen and (max-width: 1400px) { \n    max-width: 600px;\n  }\n"])),M.lightestBlack),N=z.a.div(r||(r=Object(S.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 250px;\n  height: 180px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 10px;\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  border-radius: 7px;\n  text-shadow: 0 0 3px #000;\n  -moz-text-shadow: 0 0 3px #000;\n  -webkit-text-shadow: 0 0 3px #000;\n"]))),F=z.a.h1(a||(a=Object(S.a)(["\n  margin: 15px 0 0 15px;\n  color: white;\n  width: 50%;\n"]))),I=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){var n;return Object(b.a)(this,t),(n=e.call(this)).state={},n}return Object(x.a)(t,[{key:"render",value:function(){var n=this.props.stateGenres;return Object(y.jsx)(B,{children:n&&n.length>0&&n.map((function(n,e){return Object(y.jsx)(N,{style:{backgroundImage:"url(".concat(n.picture_big,")")},children:Object(y.jsx)(F,{children:n.name})},e)}))})}}]),t}(d.a.Component),C=Object(O.b)((function(n){return{stateGenres:n.musicsReducer.genres}}))(I),A=t(19),Q="GENRES",W="MAIN_MUSICS",J="MUSICS_BY_QUERY",R="FAVORITES",E=function(n){return{type:W,array:n}},G=function(n,e){return{type:J,render:e,array:n}},T=function(n){return{type:R,array:n}},_=z.a.div(o||(o=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  background-color: ",";\n  border-radius: 9px;\n  max-width: 850px;\n  margin: calc(2vh + 95px) 0 30px 17px;\n  overflow-y: auto;\n  padding: 20px 0;\n  max-height: 1320px;\n  @media only screen and (max-width: 1400px) { \n    max-width: 600px;\n  }\n  h1 {\n    position: absolute;\n  }\n  img {\n    width: 150px;\n    height: 150px;\n    background-size: 120%;\n    border-radius: 4px;\n  }\n  h4 {\n    font-size: 14px;\n    margin: 0;\n  }\n  span {\n    font-size: 13px;\n  }\n  a { color: inherit; } \n  .deezer {\n    position: absolute;\n    font-size: 32px;\n    right: 7px;\n    top: 5px;\n    width: 38px;\n    padding: 2px;\n    border-radius: 4px;\n    &:hover {\n      transition: .1s;\n      color: ",";\n      background-color: ",";\n      border: 0.1px solid rgba(0, 0, 0, 0.5);\n      opacity: 0.8;\n    }\n  }\n  button {\n    position: absolute;\n    right: 2px;\n    bottom: 8px;\n    background: none;\n    border: none;\n    i {\n      font-size: 20px;\n      color: #0fa36b\n    }\n  }\n  #duration {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n  }\n  "])),M.lightestBlack,M.lightBlack,M.darkWhite),D=z.a.div(c||(c=Object(S.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  width: 200px;\n  height: 250px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n"])),M.lightBlack),U=z.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  height: 80px;\n"]))),q=z.a.div(u||(u=Object(S.a)(["\n  position: absolute;\n  right: 3.5px;\n  bottom: 50px;\n  background: none;\n  border: none;\n  i {font-size: 25px;}\n  .on {\n    color: ","\n  }\n  .off {\n    color: ","\n  }\n"])),M.blue,M.darkerWhite);function Y(n,e,t){var i=t.dispatchFavorites,r=t.stateFavorites,a=JSON.parse(localStorage.getItem("favorites")),o=JSON.parse(localStorage.getItem("thumbs")),c=n.filter((function(n){return n.id===e}))[0],s=r.filter((function(n){return n.id===e}));if(s&&s.length<1)r.push(c),a.push(c),o.push(c.id),localStorage.setItem("favorites",JSON.stringify(a)),localStorage.setItem("thumbs",JSON.stringify(o)),i(r);else{i(r.filter((function(n){return n.id!==e})));var u=a.filter((function(n){return n.id!==e}));localStorage.setItem("favorites",JSON.stringify(u));var l=o.filter((function(n){return n!==e}));localStorage.setItem("thumbs",JSON.stringify(l))}}var P,L,H,V,K,X,Z,$,nn,en=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){var n;return Object(b.a)(this,t),(n=e.call(this)).state={preview:[]},n.listenAudio=n.listenAudio.bind(Object(A.a)(n)),n}return Object(x.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({preview:[]})}},{key:"listenAudio",value:function(n){var e=this,t=this.state.preview,i=document.getElementById("".concat(n)),r=document.querySelector(".play-".concat(n));if(t.includes(n)){i.pause();var a=t.indexOf(n);t.splice(a,1),this.setState({preview:t}),r.style.color="#0fa36b"}else i.play(),i.volume=.3,r.style.color="crimson",t.push(n),this.setState({preview:t}),setTimeout((function(){var i=t.indexOf(n);t.splice(i,1),e.setState({preview:t}),r.style.color="#0fa36b"}),3e4)}},{key:"render",value:function(){var n=this,e=this.props,t=e.stateMainMusics,i={stateFavorites:e.stateFavorites,dispatchFavorites:e.dispatchFavorites},r=JSON.parse(localStorage.getItem("thumbs"));return Object(y.jsx)(_,{children:t&&t.length>0?t.map((function(e,a){return Object(y.jsxs)(D,{children:[Object(y.jsx)("a",{href:e.artist.link,target:"blank",children:Object(y.jsx)("i",{className:"fab fa-deezer deezer"})}),Object(y.jsx)("img",{src:e.album.cover_medium,alt:"".concat(e.name)}),Object(y.jsxs)(U,{children:[Object(y.jsx)("h4",{children:e.title}),Object(y.jsx)("span",{children:e.album.title}),Object(y.jsx)("span",{children:e.artist.name}),Object(y.jsx)("span",{id:"duration",children:e.duration})]}),Object(y.jsx)(q,{onClick:function(){Y(t,e.id,i),n.setState({render:!0})},children:r.includes(e.id)?Object(y.jsx)("i",{className:"fas fa-thumbs-up on"}):Object(y.jsx)("i",{className:"far fa-thumbs-up off"})}),Object(y.jsx)("button",{onClick:function(){return n.listenAudio(e.id)},children:Object(y.jsx)("i",{className:"fas fa-play play-".concat(e.id)})}),Object(y.jsx)("audio",{src:e.preview,preload:"auto",id:e.id})]},a)})):Object(y.jsx)("div",{children:"a"})})}}]),t}(d.a.Component),tn=Object(O.b)((function(n){return{stateMainMusics:n.musicsReducer.mainMusics,stateFavorites:n.musicsReducer.favorites}}),(function(n){return{dispatchMusics:function(e){return n(E(e))},dispatchFavorites:function(e){return n(T(e))}}}))(en),rn=z.a.div(P||(P=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  background-color: ",";\n  border-radius: 9px;\n  max-width: 850px;\n  margin: calc(2vh + 95px) 0 30px 17px;\n  overflow-y: auto;\n  max-height: 1320px;\n  padding: 20px 0;\n  h1 {\n    position: absolute;\n  }\n  img {\n    width: 150px;\n    height: 150px;\n    background-size: 120%;\n    border-radius: 4px;\n  }\n  h4 {\n    font-size: 14px;\n    margin: 0;\n  }\n  span {\n    margin: 2px 0;\n    font-size: 13px;\n  }\n  a { color: inherit; } \n  .deezer {\n    position: absolute;\n    font-size: 32px;\n    right: 7px;\n    top: 5px;\n    width: 38px;\n    padding: 2px;\n    border-radius: 4px;\n    &:hover {\n      transition: .1s;\n      color: ",";\n      background-color: ",";\n      border: 0.1px solid rgba(0, 0, 0, 0.5);\n      opacity: 0.8;\n    }\n  }\n  button {\n    position: absolute;\n    right: 2px;\n    bottom: 8px;\n    background: none;\n    border: none;\n    i {\n      font-size: 20px;\n      color: #0fa36b\n    }\n  }\n  #duration {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n  }\n  "])),M.lightestBlack,M.lightBlack,M.darkWhite),an=z.a.div(L||(L=Object(S.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  width: 200px;\n  height: 250px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n"])),M.lightBlack),on=z.a.div(H||(H=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  height: 80px;\n"]))),cn=z.a.div(V||(V=Object(S.a)(["\n  position: absolute;\n  right: 3.5px;\n  bottom: 50px;\n  background: none;\n  border: none;\n  i {font-size: 25px;}\n  .on {\n    color: ","\n  }\n  .off {\n    color: ","\n  }\n"])),M.blue,M.darkerWhite),sn=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){var n;return Object(b.a)(this,t),(n=e.call(this)).state={preview:[]},n.listenAudio=n.listenAudio.bind(Object(A.a)(n)),n}return Object(x.a)(t,[{key:"componentDidMount",value:function(){var n=Object(v.a)(g.a.mark((function n(){var e,t,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=this.props,t=e.dispatchQueryMusics,i=e.stateQueryMusics,t(i,!0);case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setState({preview:[]})}},{key:"listenAudio",value:function(n){var e=this,t=this.state.preview,i=document.getElementById("".concat(n)),r=document.querySelector(".play-".concat(n));if(t.includes(n)){i.pause();var a=t.indexOf(n);t.splice(a,1),this.setState({preview:t}),r.style.color="#0fa36b"}else i.play(),i.volume=.3,r.style.color="crimson",t.push(n),this.setState({preview:t}),setTimeout((function(){var i=t.indexOf(n);t.splice(i,1),e.setState({preview:t}),r.style.color="#0fa36b"}),3e4)}},{key:"render",value:function(){var n=this,e=this.props,t=e.stateQueryMusics,i={stateFavorites:e.stateFavorites,dispatchFavorites:e.dispatchFavorites},r=JSON.parse(localStorage.getItem("thumbs"));return Object(y.jsx)(rn,{children:t&&t.length>0&&t.map((function(e,a){return Object(y.jsxs)(an,{children:[Object(y.jsx)("a",{href:e.artist.link,target:"blank",children:Object(y.jsx)("i",{className:"fab fa-deezer deezer"})}),Object(y.jsx)("img",{src:e.album.cover_medium,alt:"".concat(e.name)}),Object(y.jsxs)(on,{children:[Object(y.jsx)("h4",{children:e.title}),Object(y.jsx)("span",{children:e.album.title}),Object(y.jsx)("span",{children:e.artist.name}),Object(y.jsx)("span",{id:"duration",children:e.duration})]}),Object(y.jsx)(cn,{onClick:function(){Y(t,e.id,i),n.setState({render:!0})},children:r.includes(e.id)?Object(y.jsx)("i",{className:"fas fa-thumbs-up on"}):Object(y.jsx)("i",{className:"far fa-thumbs-up off"})}),Object(y.jsx)("button",{onClick:function(){return n.listenAudio(e.id)},children:Object(y.jsx)("i",{className:"fas fa-play play-".concat(e.id)})}),Object(y.jsx)("audio",{src:e.preview,preload:"auto",id:e.id})]},a)}))})}}]),t}(d.a.Component),un=Object(O.b)((function(n){return{stateQueryMusics:n.musicsReducer.stateQueryMusics,stateFavorites:n.musicsReducer.favorites}}),(function(n){return{dispatchQueryMusics:function(e,t){return n(G(e,t))},dispatchFavorites:function(e){return n(T(e))}}}))(sn),ln=t(46),dn=t.n(ln),pn="https://rods27-musics-library.herokuapp.com/";function hn(n){return bn.apply(this,arguments)}function bn(){return(bn=Object(v.a)(g.a.mark((function n(e){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,dn.a.get("".concat(pn),{headers:{url:e}}).then((function(n){return n.data})).catch(console.error);case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var xn,fn,jn,mn,gn,vn,On=z.a.div(K||(K=Object(S.a)(["\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  overflow-x: hidden;\n  background-color: ",";\n  height: 50px;\n"])),M.lightBlack),yn=z.a.div(X||(X=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-width: 800px;\n  max-width: 1850px;\n  position: relative;\n  input {\n    background-color: ",";\n    width: 550px;\n    height: 30px;\n    transition: 0.2s;\n    border-radius: 5px;\n    border: 0.1px solid ",";\n    font-size: 18px;\n    font-weight: 900;\n    color: ",";\n    padding-left: 12px;\n    font-weight: 500;\n    border: 0.1px rgba(0, 0, 0, 0.3) solid;\n    &:focus {\n      outline: none;\n      border-color: rgba(255, 255, 255, 0.2);\n      box-shadow: 0 0px 1.5px ",";\n    }\n    &:hover {\n      border-color: rgba(255, 255, 255, 0.2);\n      box-shadow: 0 0px 2px ",";\n    }\n  }\n"])),M.lightestBlack,M.lightBlack,M.darkWhite,M.darkWhite,M.darkWhite),kn=z.a.button(Z||(Z=Object(S.a)(["\n  color: inherit;\n  background-color: none;\n  background: none;\n  margin-right: 15px;\n  padding: 5px 2px 2px 2px;\n  border: 0.1px solid ",";\n  outline: none;\n  border-radius: 4px;\n  &:hover {\n    transition: .1s;\n    color: ",";\n    background-color: ",";\n    border: 0.1px solid rgba(0, 0, 0, 0.5);\n  }\n  i {\n    font-size: 33px;\n    width: 38px;\n  }\n"])),M.lightBlack,M.lightBlack,M.darkWhite),wn=z.a.button($||($=Object(S.a)(["\n  color: inherit;\n  background-color: none;\n  background: none;\n  position: relative;\n  left: 5px;\n  padding: 2px;\n  border: 0.1px solid ",";\n  outline: none;\n  border-radius: 4px;\n  &:hover {\n    transition: .1s;\n    color: ",";\n    background-color: ",";\n    border: 0.1px solid rgba(0, 0, 0, 0.5);\n  }\n  i {\n    font-size: 33px;\n    width: 38px;\n  }\n"])),M.lightBlack,M.lightBlack,M.darkWhite),Sn=z.a.button(nn||(nn=Object(S.a)(["\n  color: inherit;\n  background-color: none;\n  background: none;\n  position: relative;\n  left: 10px;\n  padding: 2px;\n  margin-right: 15px;\n  padding: 5px 2px 2px 2px;\n  border: 0.1px solid ",";\n  outline: none;\n  border-radius: 4px;\n  &:hover {\n    transition: .1s;\n    color: ",";\n  }\n  i {\n    font-size: 33px;\n    width: 38px;\n  }\n"])),M.lightBlack,M.preparing),zn=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(x.a)(t,[{key:"secondsToMinutes",value:function(n){n.forEach((function(n){var e,t=Number(n.duration),i=Math.floor(t%3600/60),r=Math.floor(t%3600%60);e=r<10?"0":"",n.duration="".concat(i,":").concat(e).concat(r)}))}},{key:"cutAlbumAndTitle",value:function(n){n.forEach((function(n){var e=n.title,t=n.album.title;if(e.length>30){var i=n.title.substr(0,30).concat("...");n.title=i}if(t.length>30){var r=n.album.title.substr(0,30).concat("...");n.album.title=r}}))}},{key:"searchForQuery",value:function(){var n=Object(v.a)(g.a.mark((function n(){var e,t,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=this.props.dispatchQueryMusics,!((t=document.getElementById("search").value)&&t.length>0)){n.next=9;break}return n.next=5,hn("https://api.deezer.com/search?q=".concat(t,"&limit=50"));case 5:i=n.sent,this.secondsToMinutes(i.data),this.cutAlbumAndTitle(i.data),e(i.data,!0);case 9:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,e=this.props.history;return Object(y.jsx)(On,{children:Object(y.jsxs)(yn,{children:[Object(y.jsx)(kn,{onClick:function(){return n.searchForQuery()},children:Object(y.jsx)("i",{className:"fas fa-search"})}),Object(y.jsx)("input",{id:"search"}),Object(y.jsx)(Sn,{onClick:function(){return e.push("/musics/favorites")},children:Object(y.jsx)("i",{className:"fas fa-heart"})}),Object(y.jsx)(wn,{onClick:function(){return e.push("/musics")},children:Object(y.jsx)("i",{className:"fas fa-home"})})]})})}}]),t}(d.a.Component),Mn=Object(O.b)(null,(function(n){return{dispatchQueryMusics:function(e,t){return n(G(e,t))}}}))(zn),Bn=z.a.div(xn||(xn=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),Nn=z.a.div(fn||(fn=Object(S.a)(["\n  display: flex;\n  justify-content: flex-start;\n  overflow-y: hidden;\n  max-height: 100vh;\n  min-width: 1000px;\n"]))),Fn=z.a.div(jn||(jn=Object(S.a)(["\n  display: flex;\n  position: absolute;\n  top: 40px;\n  width: 85%;\n  min-width: 800px;\n  max-width: 1630px;\n"]))),In=z.a.h1(mn||(mn=Object(S.a)(["\n  color: #333;\n"]))),Cn=z.a.h1(gn||(gn=Object(S.a)(["\n  position: absolute;\n  right: 20%;\n  color: #333;\n"]))),An=z.a.div(vn||(vn=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #333;\n  height: 100vh;\n  width: 100vh;\n"])));function Qn(){return(Qn=Object(v.a)(g.a.mark((function n(e){var t,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,hn("https://api.deezer.com/editorial?limit=28");case 2:t=n.sent,i=t.data.filter((function(n){return"All"!==n.name})),e(i);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Wn(n){n.forEach((function(n){var e,t=Number(n.duration),i=Math.floor(t%3600/60),r=Math.floor(t%3600%60);e=r<10?"0":"",n.duration="".concat(i,":").concat(e).concat(r)}))}function Jn(n){n.forEach((function(n){var e=n.title,t=n.album.title;if(e.length>30){var i=n.title.substr(0,30).concat("...");n.title=i}if(t.length>30){var r=n.album.title.substr(0,30).concat("...");n.album.title=r}n.thumbs=!1}))}function Rn(){return(Rn=Object(v.a)(g.a.mark((function n(e,t){var i,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return localStorage.thumbs||localStorage.setItem("thumbs",JSON.stringify([])),localStorage.favorites||localStorage.setItem("favorites",JSON.stringify([])),n.next=4,hn("https://api.deezer.com/playlist/3155776842/tracks&limit=50");case 4:i=n.sent,r=JSON.parse(localStorage.getItem("favorites")),t(r),Wn(i.data),Jn(i.data),e(i.data);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var En,Gn,Tn,_n,Dn,Un=t(47),qn=t.n(Un),Yn=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(x.a)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.dispatchGenres,t=n.dispatchMusics,i=n.dispatchFavorites;!function(n){Qn.apply(this,arguments)}(e),function(n,e){Rn.apply(this,arguments)}(t,i)}},{key:"render",value:function(){var n=this.props,e=n.history,t=n.renderQuery,i=n.stateMusics,r=n.stateGenres;return Object(y.jsxs)(Bn,{children:[Object(y.jsx)(Mn,{history:e}),i.length>0&&r.length>0?Object(y.jsxs)("div",{children:[Object(y.jsxs)(Fn,{children:[Object(y.jsx)(In,{children:"Generos"}),Object(y.jsx)(Cn,{children:"Principais M\xfasicas"})]}),Object(y.jsxs)(Nn,{children:[Object(y.jsx)(C,{history:e}),t?Object(y.jsx)(un,{history:e}):Object(y.jsx)(tn,{history:e})]})]}):Object(y.jsx)(An,{children:Object(y.jsx)(qn.a,{type:"spinner-cub",bgColor:"#333",size:120})})]})}}]),t}(d.a.Component),Pn=Object(O.b)((function(n){return{renderQuery:n.musicsReducer.renderQuery,stateMusics:n.musicsReducer.mainMusics,stateGenres:n.musicsReducer.genres}}),(function(n){return{dispatchMusics:function(e){return n(E(e))},dispatchGenres:function(e){return n(function(n){return{type:Q,array:n}}(e))},dispatchFavorites:function(e){return n(T(e))}}}))(Yn),Ln=z.a.div(En||(En=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),Hn=z.a.div(Gn||(Gn=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  flex-wrap: wrap;\n  background-color: ",";\n  border-radius: 9px;\n  margin: calc(2vh + 95px) 0 30px 17px;\n  overflow-y: auto;\n  padding: 20px 0;\n  min-width: 850px;\n  max-width: 1280px;\n  max-height: 820px;\n"])),M.lightestBlack),Vn=z.a.div(Tn||(Tn=Object(S.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n  width: 200px;\n  height: 250px;\n  background-position: 100% 100%;\n  background-size: 100%;\n  margin: 7px 15px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n  h1 {\n    position: absolute;\n  }\n  img {\n    width: 150px;\n    height: 150px;\n    background-size: 120%;\n    border-radius: 4px;\n  }\n  h4 {\n    font-size: 14px;\n    margin: 0;\n  }\n  span {\n    font-size: 13px;\n  }\n  a { color: inherit; } \n  .deezer {\n    position: absolute;\n    font-size: 32px;\n    right: 7px;\n    top: 5px;\n    width: 38px;\n    padding: 2px;\n    border-radius: 4px;\n    &:hover {\n      transition: .1s;\n      color: ",";\n      background-color: ",";\n      border: 0.1px solid rgba(0, 0, 0, 0.5);\n      opacity: 0.8;\n    }\n  }\n  button {\n    position: absolute;\n    right: 2px;\n    bottom: 8px;\n    background: none;\n    border: none;\n    i {\n      font-size: 20px;\n      color: #0fa36b\n    }\n  }\n  #duration {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n  }\n"])),M.lightBlack,M.lightBlack,M.darkWhite),Kn=z.a.div(_n||(_n=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  height: 80px;\n"]))),Xn=z.a.div(Dn||(Dn=Object(S.a)(["\n  position: absolute;\n  right: 3.5px;\n  bottom: 50px;\n  background: none;\n  border: none;\n  i {font-size: 25px;}\n  .on {\n    color: ","\n  }\n  .off {\n    color: ","\n  }\n"])),M.blue,M.darkerWhite),Zn=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){var n;return Object(b.a)(this,t),(n=e.call(this)).state={preview:[]},n.listenAudio=n.listenAudio.bind(Object(A.a)(n)),n}return Object(x.a)(t,[{key:"componentWillUnmount",value:function(){this.setState({preview:[]})}},{key:"componentDidMount",value:function(){var n=this.props.dispatchFavorites;localStorage.favorites||localStorage.setItem("favorites",JSON.stringify([])),localStorage.thumbs||localStorage.setItem("thumbs",JSON.stringify([])),n(JSON.parse(localStorage.getItem("favorites")))}},{key:"listenAudio",value:function(n){var e=this,t=this.state.preview,i=document.getElementById("".concat(n)),r=document.querySelector(".play-".concat(n));if(t.includes(n)){i.pause();var a=t.indexOf(n);t.splice(a,1),this.setState({preview:t}),r.style.color="#0fa36b"}else i.play(),i.volume=.3,r.style.color="crimson",t.push(n),this.setState({preview:t}),setTimeout((function(){var i=t.indexOf(n);t.splice(i,1),e.setState({preview:t}),r.style.color="#0fa36b"}),3e4)}},{key:"render",value:function(){var n=this,e=this.props,t=e.history,i=e.stateFavorites,r=e.dispatchFavorites,a={stateFavorites:i,dispatchFavorites:r},o=JSON.parse(localStorage.getItem("thumbs"));return Object(y.jsxs)(Ln,{children:[Object(y.jsx)(Mn,{history:t}),Object(y.jsx)(Hn,{children:i&&i.length?i.map((function(e,t){return Object(y.jsxs)(Vn,{children:[Object(y.jsx)("a",{href:e.artist.link,target:"blank",children:Object(y.jsx)("i",{className:"fab fa-deezer deezer"})}),Object(y.jsx)("img",{src:e.album.cover_medium,alt:"".concat(e.name)}),Object(y.jsxs)(Kn,{children:[Object(y.jsx)("h4",{children:e.title}),Object(y.jsx)("span",{children:e.album.title}),Object(y.jsx)("span",{children:e.artist.name}),Object(y.jsx)("span",{id:"duration",children:e.duration})]}),Object(y.jsx)(Xn,{onClick:function(){Y(i,e.id,a),n.setState({render:!0})},children:o.includes(e.id)?Object(y.jsx)("i",{className:"fas fa-thumbs-up on"}):Object(y.jsx)("i",{className:"far fa-thumbs-up off"})}),Object(y.jsx)("button",{onClick:function(){return n.listenAudio(e.id)},children:Object(y.jsx)("i",{className:"fas fa-play play-".concat(e.id)})}),Object(y.jsx)("audio",{src:e.preview,preload:"auto",id:e.id})]},t)})):"N\xe3o h\xe1 m\xfasicas favoritas."})]})}}]),t}(d.a.Component),$n=Object(O.b)((function(n){return{stateFavorites:n.musicsReducer.favorites}}),(function(n){return{dispatchFavorites:function(e){return n(T(e))}}}))(Zn),ne=t(5),ee=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return Object(y.jsxs)(ne.c,{children:[Object(y.jsx)(ne.a,{exact:!0,path:"/",component:w}),Object(y.jsx)(ne.a,{exact:!0,path:"/musics",component:Pn}),Object(y.jsx)(ne.a,{exact:!0,path:"/musics/favorites",component:$n})]})}}]),t}(d.a.Component),te=function(n){Object(f.a)(t,n);var e=Object(j.a)(t);function t(){return Object(b.a)(this,t),e.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return Object(y.jsx)(ee,{})}}]),t}(d.a.Component),ie=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,120)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))},re=t(50),ae=t(28),oe=t(22),ce=t(48),se=t(49),ue=t(18),le={renderQuery:!1,genres:[],mainMusics:[],stateQueryMusics:[],favorites:[]};var de=Object(oe.combineReducers)({musicsReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Q:return Object(ue.a)(Object(ue.a)({},n),{},{genres:e.array});case W:return Object(ue.a)(Object(ue.a)({},n),{},{mainMusics:e.array});case J:return Object(ue.a)(Object(ue.a)({},n),{},{renderQuery:e.render,stateQueryMusics:e.array});case R:return Object(ue.a)(Object(ue.a)({},n),{},{favorites:e.array});default:return n}}}),pe=Object(oe.createStore)(de,Object(ce.composeWithDevTools)(Object(oe.applyMiddleware)(se.a)));t(118);h.a.render(Object(y.jsx)(O.a,{store:pe,children:Object(y.jsx)(ae.a,{history:Object(re.a)(),basename:"/musics-library",children:Object(y.jsx)(te,{})})}),document.getElementById("root")),ie()}},[[119,1,2]]]);
//# sourceMappingURL=main.0003f55c.chunk.js.map