(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},122:function(e,t,n){},133:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(25),r=n.n(o),s=(n(82),n(4)),c=n(5),l=n(7),u=n(6),m=n(8),p=n(27),d=(n(120),n(122),n(22),"http://127.0.0.1"),f=n(23),h=n.n(f),v=function(e){function t(){for(var e,n,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return Object(s.a)(this,t),(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).registerBackButton=function(){var e=p.a.getComponent("Component"),t=p.a.extend(e,{constructor:function(t,n){e.apply(this,arguments)},createEl:function(){return p.a.dom.createEl("i",{className:"vjs-back-button ion-md-arrow-back"})}});p.a.registerComponent("BackButton",t)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.registerBackButton();var e=Object(p.a)("video");e.addChild("BackButton"),e.src(d+":8080/api/data/"+this.props.location.state.fileName+".mp4"),e.duration=function(){return e.theDuration},e.start=0;var t=this.props;e.oldCurrentTime=e.currentTime,e.currentTime=function(n){return void 0===n?e.oldCurrentTime()+e.start:(console.log(n),e.start=n,e.oldCurrentTime(0),e.src(d+":8080/api/data/"+t.location.state.fileName+".mp4?start="+n),e.play(),this)},h.a.getJSON(d+":8080/api/data/"+this.props.location.state.fileName+".js",function(t){e.theDuration=t.duration}),h()(function(){var e=h()("#refresh"),t=h()("#css_result");function n(){var e=h()("style.cp-pen-styles").text();t.html(e)}n(),e.click(n),t.click(function(){h()(this).select()})}),document.querySelector("i").addEventListener("click",function(){window.location.replace("/"),console.log(e.currentTime())})}},{key:"render",value:function(){return i.a.createElement("div",{className:"videoplayer"},i.a.createElement("video",{id:"video",className:"video-js vjs-16-9 vjs-default-skin",controls:!0,preload:"auto"}))}}]),t}(a.Component),b=n(33),E=n.n(b),O=n(10),y=n(196),I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password};n.props.login(t)},n.state={username:"",password:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.authenticated?i.a.createElement(y.a,{to:"/"}):i.a.createElement("div",{id:"vertical-flip",className:"card"},i.a.createElement("div",{className:"flip"},i.a.createElement("div",{className:"front"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:E.a,alt:"The is not available"}))),i.a.createElement("div",{className:"back"},i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("div",{className:"box-input"},i.a.createElement("input",{className:"auth-input",type:"text",name:"username",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},placeholder:"Username",required:!0}),i.a.createElement("br",null),i.a.createElement("input",{className:"auth-input",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},placeholder:"Password",required:!0}),i.a.createElement("br",null),i.a.createElement("button",{type:"submit"},"Submit"))))))}}]),t}(a.Component),j=Object(O.b)(function(e){return{authenticated:e.authData.authenticated}},{login:function(e){return function(t){fetch(d+":8080/api/login",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.login?t({type:"LOGIN_SUCCESS",payload:e.user_id}):(e.login,t({type:"LOGIN_FAILED"}))})}}})(I),g=n(197),N=n(198),T=n(199),D=(n(133),n(12),n(73)),w=n(19),C=n(74),R=n(9),S={authenticated:null,isLoading:!1,user_id:null},A={isSearching:!1,isRecload:!1,movies:[],movieInfo:null,movieInfoimdbID:null},k={transition_state:null,data:"gibberish",fileName:"gibberish"},_={display:0},F=Object(w.combineReducers)({authData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(R.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(R.a)({},e,{authenticated:!0,isLoading:!1});case"LOGIN_SUCCESS":return Object(R.a)({},e,{user_id:t.payload,authenticated:!0,isLoading:!1});case"AUTH_ERROR":case"LOGIN_FAILED":return Object(R.a)({},e,{authenticated:!1,isLoading:!1});case"LOGOUT_SUCCESS":return Object(R.a)({},e,{user_id:null,authenticated:!1,isLoading:!1});default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCHING_MOVIES":return Object(R.a)({},e,{isRecload:!1,isSearching:!0});case"MOVIE_SEARCH_ERROR":return Object(R.a)({},e,{isRecload:!1,isSearching:!1,movies:[]});case"MOVIES_LOADED":return Object(R.a)({},e,{isSearching:!1,isRecload:!1,movies:t.payload});case"FETCHING_MOVIE_INFO":return Object(R.a)({},e,{isSearching:!0,isRecload:!1});case"MOVIE_INFO_LOADED":return Object(R.a)({},e,{isSearching:!1,isRecload:!1,movieInfo:t.payload.movieInfo,movieInfoimdbID:t.payload.imdbID});case"MOVIE_INFO_NOT_FOUND":case"MOVIE_INFO_CLOSE":return Object(R.a)({},e,{isRecload:!1,movieInfo:null,movieInfoimdbID:null});case"GET_SEASON_INFO":var n=Object(R.a)({},e.movieInfo,{isRecload:!1,Type:"seriesT",episodeList:t.payload});return Object(R.a)({},e,{movieInfo:n});case"GET_RECOMMENDATIONS":var a=Object(R.a)({},e.movieInfo,{isRecload:!0,recommendations:t.payload});return Object(R.a)({},e,{movieInfo:a});default:return e}},watch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETTING_TORRENT_FILE":return Object(R.a)({},e,{transition_state:"Getting the torrent file"});case"ADDING_TORRENT_TO_QUEUE":return Object(R.a)({},e,{transition_state:"Adding torrent file to queue",data:t.payload});case"INITIATE_BUFFER":return Object(R.a)({},e,{transition_state:"Initiating buffer"});case"BUFFER_READY":return Object(R.a)({},e,{fileName:t.payload.fileName});default:return e}},trailerbox:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;switch((arguments.length>1?arguments[1]:void 0).type){case"TRAILERBOX_OVERVIEW_MODE":return Object(R.a)({},e,{isRecload:!1,display:0});case"TRAILERBOX_EPISODES_MODE":return Object(R.a)({},e,{isRecload:!1,display:1});case"TRAILERBOX_MORE_MODE":return Object(R.a)({},e,{display:2});case"TRAILERBOX_DETAILS_MODE":return Object(R.a)({},e,{display:3});default:return e}}}),M=n(75),L=[C.a],x=Object(w.createStore)(F,{},Object(M.composeWithDevTools)(w.applyMiddleware.apply(void 0,L))),P=n(24),G=n.n(P),W=function(e,t){return function(n){n({type:"FETCHING_MOVIE_INFO"});var a={URL:"https://tastedive.com/api/similar?q="+e+"&type=movies&info=1&limit=1&k=329105-hrothgar-MA57KNVO"};fetch("http://144.24.174.202:8080/api/cors",{method:"POST",credentials:"omit",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){if(e.Similar.Info[0].yUrl){var a={ytURL:e.Similar.Info[0].yUrl};fetch("http://www.omdbapi.com/?apikey=d209dab&plot=full&i="+t).then(function(e){return e.json()}).then(function(e){a.Title=e.Title,a.Runtime=e.Runtime,a.Plot=e.Plot,a.Actors=e.Actors,a.Awards=e.Awards,a.imdbID=e.imdbID,a.Type=e.Type,"series"===a.Type&&(a.totalSeasons=e.totalSeasons),n({type:"MOVIE_INFO_LOADED",payload:{movieInfo:a,imdbID:t}})})}else n({type:"MOVIE_INFO_NOT_FOUND"})})}},U=function(){return function(e){e({type:"MOVIE_INFO_CLOSE"})}},B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){n.setState({searchdata:e.target.value})},n.onKeyUp=function(){n.state.timeout&&clearTimeout(n.state.timeout),n.setState({timeout:setTimeout(function(){n.props.search(n.state.searchdata)},500)})},n.state={searchdata:"",timeout:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"search_bar"},i.a.createElement("input",{id:"searchOne",type:"checkbox"}),i.a.createElement("label",{htmlFor:"searchOne"},i.a.createElement("i",{className:"icon ion-md-search"}),i.a.createElement("i",{className:"last icon ion-md-close"}),i.a.createElement("p",null,"|")),i.a.createElement("input",{value:this.state.searchdata,onKeyUp:this.onKeyUp,onChange:this.onChange,placeholder:"Search...",type:"text"})))}}]),t}(a.Component),V=Object(O.b)(function(e){return{movies:e.movies.movies}},{search:function(e){return function(t){t({type:"SEARCHING_MOVIES"}),fetch("http://www.omdbapi.com/?apikey=d209dab&plot=full&s="+e).then(function(e){return e.json()}).then(function(e){"True"===e.Response?t({type:"MOVIES_LOADED",payload:e.Search}):t({type:"MOVIE_SEARCH_ERROR"})})}}})(B),K=function(e){return x.dispatch(function(e){fetch(d+":8080/api/logout",{credentials:"include"}).then(function(e){return e.json()}).then(function(t){t.logout&&e({type:"LOGOUT_SUCCESS"})})}),i.a.createElement(y.a,{to:"/login"})},H=function(){return i.a.createElement("div",{className:"secondary-navigation"},i.a.createElement(V,null),i.a.createElement("div",{className:"iconalign"},i.a.createElement("i",{className:"logout ion-md-log-out",onClick:K})))},J=n(195),q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",null,i.a.createElement("div",{className:"logo-container"},i.a.createElement(J.a,{to:"/"},i.a.createElement("img",{className:"main-logo",src:E.a,alt:"idk"}))),i.a.createElement(H,null))}}]),t}(a.Component),X=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return function(o){o({type:"GETTING_TORRENT_FILE"});var r=null;r="seriesT"===t?{imdbID:e,type:t,title:n,season:a,episode:i}:{imdbID:e,type:t,title:n},fetch(d+":8080/api/torrent",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(r)}).then(function(e){return e.json()}).then(function(r){r.message&&o("seriesT"===t?{type:"ADDING_TORRENT_TO_QUEUE",payload:{imdbID:e,title:n,type:t,season:a,episode:i}}:{type:"ADDING_TORRENT_TO_QUEUE",payload:{imdbID:e,title:n,type:t}})})}},Y={position:"absolute",top:"25%",left:"40%",display:"inline-block",margin:"0 auto",bottom:"0"},z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){"gibberish"!==e.data.title&&"gibberish"===e.fileName&&this.props.initiateBuffer(this.props.data,this.props.imdbID,this.props.userID)}},{key:"render",value:function(){return"gibberish"!==this.props.fileName?i.a.createElement(y.a,{to:{pathname:"/watch",state:{fileName:this.props.fileName}}}):i.a.createElement(i.a.Fragment,null,i.a.createElement(q,null),i.a.createElement("div",{className:"transiton-box"},i.a.createElement(D.ClipLoader,{css:Y,sizeUnit:"px",size:240,color:"#D50000",loading:!0})),i.a.createElement("div",{className:"message-container"},i.a.createElement("h2",null,this.props.currentMessage)))}}]),t}(a.Component),Q={initiateBuffer:function(e,t,n){return function(a){a({type:"INITIATE_BUFFER"}),fetch(d+":8080/api/download",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.file_name&&(function(e,t){fetch(d+":8080/api/insertmovie",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({imdbID:e,fileName:t})})}(t,e.file_name),function(e,t,n){fetch(d+":8080/api/movie_user_relation",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify({imdbID:e,userID:t,timePos:n})})}(t,n,"0:00:00"),setTimeout(function(){a({type:"BUFFER_READY",payload:{fileName:e.file_name}})},15e3))})}}},Z=Object(O.b)(function(e){return{currentMessage:e.watch.transition_state,data:e.watch.data,imdbID:e.movies.movieInfo.imdbID,userID:e.authData.user_id,fileName:e.watch.fileName}},Q)(z),$=function(e){return function(t){switch(e){case 0:return void t({type:"TRAILERBOX_OVERVIEW_MODE"});case 1:return void t({type:"TRAILERBOX_EPISODES_MODE"});case 2:return void t({type:"TRAILERBOX_MORE_MODE"});case 3:return void t({type:"TRAILERBOX_DETAILS_MODE"});default:return}}},ee=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).onYourClick=function(e){n.props.toggleMenu(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:"menu"},i.a.createElement("li",{onClick:function(){return e.onYourClick(0)},className:0===this.props.display?"current":""},i.a.createElement("a",null,"OVERVIEW"),i.a.createElement("span",null)),"series"===this.props.type||"seriesT"===this.props.type?i.a.createElement("li",{onClick:function(){return e.onYourClick(1)},className:1===this.props.display?"current":""},i.a.createElement("a",null,"EPISODES"),i.a.createElement("span",null)):"",i.a.createElement("li",{onClick:function(){return e.onYourClick(2)},className:2===this.props.display?"current":""},i.a.createElement("a",null,"MORE LIKE THIS"),i.a.createElement("span",null))))}}]),t}(a.Component),te={toggleMenu:$},ne=Object(O.b)(function(e){return{type:e.movies.movieInfo.Type}},te)(ee),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).onCloseClick=function(){n.props.closeMovieInfo()},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"movie-info"},i.a.createElement("h1",null,this.props.movieInfo.Title),i.a.createElement("p",null,this.props.movieInfo.Plot),i.a.createElement("div",{id:"actors"},i.a.createElement("h2",null,"Stars:"),i.a.createElement("p",{style:{paddingTop:"1vh",paddingLeft:"2vh",fontFamily:"Gotham Light Italic"}},this.props.movieInfo.Actors)),i.a.createElement("button",{onClick:this.onCloseClick},"Close")),i.a.createElement("div",{className:"trailer-holder"},i.a.createElement("iframe",{title:"trailer",width:"640px",height:"480px",src:this.props.movieInfo.ytURL+"?rel=0&controls=0&autoplay=1&loop=1&modestbranding=1",frameborder:"0",allow:"autoplay"})))}}]),t}(a.Component),ie={closeMovieInfo:U,getTorrentFile:X},oe=Object(O.b)(function(e){return{movieInfo:e.movies.movieInfo}},ie)(ae),re=n(26),se=n.n(re),ce=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("p",{className:"ep_number"},this.props.number),i.a.createElement("img",{className:"tile__img",src:this.props.poster,onClick:function(){return e.props.getTorrentFile(e.props.movieInfo.imdbID,e.props.movieInfo.Type,e.props.movieInfo.Title,"Full Season "+e.props.season,e.props.number)}}),i.a.createElement("h4",null,this.props.title),i.a.createElement("p",null,this.props.plot))}}]),t}(a.Component),le={getTorrentFile:X},ue=Object(O.b)(function(e){return{movieInfo:e.movies.movieInfo}},le)(ce),me=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClick=function(e){n.props.getEpisodes(n.props.movieInfo.imdbID,e)},n.state={episodes:n.props.episodes,season:1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getEpisodes(this.props.movieInfo.imdbID,1)}},{key:"render",value:function(){for(var e=this,t={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:4},n=[],a=1;a<=this.props.movieInfo.totalSeasons;a++)n.push(a);return"seriesT"===this.props.movieInfo.Type?i.a.createElement("div",{className:"carousel"},i.a.createElement("h1",null,this.props.movieInfo.Title),i.a.createElement("div",{className:"label-container"},i.a.createElement("div",{className:"label"}," Season ",this.state.season," ",i.a.createElement("i",{className:"ion-md-arrow-dropdown"})),i.a.createElement("div",{className:"sub-menu"},i.a.createElement("ul",{className:"sub-menu-list"},n.map(function(t){return i.a.createElement("li",{className:"sub-menu-item",onClick:function(){e.setState(Object(R.a)({},e.state,{season:t})),e.props.getEpisodes(e.props.movieInfo.imdbID,t)}},i.a.createElement("a",null,"Season ",t))})))),i.a.createElement(se.a,t,this.props.movieInfo.episodeList.map(function(t){return i.a.createElement(ue,{season:e.state.season,number:t.Episode,plot:t.Plot,title:t.Title,poster:t.Poster})}))):i.a.createElement("div",{className:"carousel"},i.a.createElement("h1",null,"Movie Title"),i.a.createElement("div",{className:"label"}," Season 1 ",i.a.createElement("i",{className:"ion-md-arrow-dropdown"})),i.a.createElement(se.a,t,i.a.createElement("div",null,"Getting your info...")))}}]),t}(a.Component),pe={getEpisodes:function(e,t){return function(n){var a="http://www.omdbapi.com/?apikey=d209dab&plot=short&i=",i=[];fetch(a+e+"&season="+t).then(function(e){return e.json()}).then(function(e){for(var t=e.Episodes,o=[],r=0;r<t.length;r++)o.push(G.a.get(a+t[r].imdbID));G.a.all(o).then(G.a.spread(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0;a<t.length;a++)i.push(t[a].data)})).then(function(){n({type:"GET_SEASON_INFO",payload:i})})})}}},de=Object(O.b)(function(e){return{movieInfo:e.movies.movieInfo}},pe)(me),fe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).myOnClick=function(){n.props.toggleMenu(0),n.props.fetchMovieInfo(n.props.title,n.props.imdbID)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{className:"rec_tile_img",src:this.props.poster,onClick:this.myOnClick}),i.a.createElement("h4",null,this.props.title),i.a.createElement("p",null,this.props.plot))}}]),t}(a.Component),he={closeMovieInfo:U,fetchMovieInfo:W,toggleMenu:$},ve=Object(O.b)(function(e){return{movieInfoimdbID:e.movies.movieInfoimdbID}},he)(fe),be=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getRecommendations(this.props.movieInfo.Title,this.props.movieInfo.Type)}},{key:"render",value:function(){var e={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:4};return this.props.movieInfo.isRecload?i.a.createElement("div",{className:"carousel"},i.a.createElement("h1",null,this.props.movieInfo.Title),i.a.createElement(se.a,e,this.props.movieInfo.recommendations.map(function(e){return i.a.createElement(ve,{plot:e.Plot,title:e.Title,poster:e.Poster,imdbID:e.imdbID})}))):i.a.createElement("div",{className:"carousel"},i.a.createElement("h1",null,this.props.movieInfo.Title),i.a.createElement(se.a,e,i.a.createElement("div",null,"Getting your info...")))}}]),t}(a.Component),Ee={getRecommendations:function(e,t){return function(n){var a={URL:"https://tastedive.com/api/similar?q="+e+"&type="+("movie"===t)+"&k=329105-hrothgar-MA57KNVO"},i=[];fetch("http://144.24.174.202:8080/api/cors",{method:"POST",credentials:"include",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){for(var t=e.Similar.Results,a=[],o=0;o<t.length;o++)a.push(G.a.get("http://www.omdbapi.com/?apikey=d209dab&plot=short&t="+t[o].Name));G.a.all(a).then(G.a.spread(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var a=0;a<t.length;a++)i.push(t[a].data)})).then(function(){n({type:"GET_RECOMMENDATIONS",payload:i})})})}}},Oe=Object(O.b)(function(e){return{movieInfo:e.movies.movieInfo}},Ee)(be),ye=(document.getElementById("trailer-overlay"),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return"Getting the torrent file"===this.props.transition_state?i.a.createElement(y.a,{to:"/transition"}):0===this.props.display?i.a.createElement("div",{className:"trailer-box"},i.a.createElement(oe,null),i.a.createElement(ne,{display:this.props.display,type:this.props.movieInfo.Type})):1===this.props.display?i.a.createElement("div",{className:"trailer-box"},i.a.createElement(de,null),i.a.createElement(ne,{display:this.props.display,type:this.props.movieInfo.Type})):2===this.props.display?i.a.createElement("div",{className:"trailer-box"},i.a.createElement(Oe,null),i.a.createElement(ne,{display:this.props.display,type:this.props.movieInfo.Type})):i.a.createElement("div",null)}}]),t}(a.Component)),Ie=Object(O.b)(function(e){return{movieInfo:e.movies.movieInfo,transition_state:e.watch.transition_state,display:e.trailerbox.display}})(ye),je=document.getElementById("trailer-overlay"),ge=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClick=function(){n.props.fetchMovieInfo(n.state.title,n.state.ownimdbID)},n.state={trailerbox:null,title:n.props.title,poster:n.props.poster,ownimdbID:n.props.imdbID},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(this.state.ownimdbID===e.movieInfoimdbID&&null!==e.movieInfo){var t=i.a.createElement(Ie,{closeMovieInfo:U});this.setState({trailerbox:t})}else null===e.movieInfo&&this.setState({trailerbox:null})}},{key:"render",value:function(){return i.a.createElement("div",{id:this.state.imdbID,className:"movie-container"},i.a.createElement("img",{src:this.state.poster,alt:"...",className:"movie-poster"}),i.a.createElement("i",{onClick:this.onClick,className:"ion-ios-more"}),r.a.createPortal(this.state.trailerbox,je))}}]),t}(a.Component),Ne=Object(O.b)(function(e){return{movieInfo:e.movies.movieInfo,movieInfoimdbID:e.movies.movieInfoimdbID}},{fetchMovieInfo:W})(ge),Te=n(76),De=n.n(Te),we=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"movie-board"},this.props.movies.map(function(e){return i.a.createElement(Ne,{key:e.imdbID,imdbID:e.imdbID,title:e.Title,poster:"N/A"===e.Poster?De.a:e.Poster})}))}}]),t}(a.Component),Ce=Object(O.b)(function(e){return{movies:e.movies.movies}})(we),Re=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(q,null),i.a.createElement(Ce,null))}}]),t}(a.Component),Se=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(g.a,null,i.a.createElement("div",null,i.a.createElement(N.a,null,i.a.createElement(T.a,{exact:!0,path:"/transition",component:Z}),i.a.createElement(T.a,{exact:!0,path:"/",component:Re}),i.a.createElement(T.a,{exact:!0,path:"/watch",component:v}),i.a.createElement(T.a,{exact:!0,path:"/login",component:j}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O.a,{store:x},i.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/logo.c8dc4fd6.png"},76:function(e,t){e.exports="data:image/png;base64,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"},77:function(e,t,n){e.exports=n(194)},82:function(e,t,n){}},[[77,2,1]]]);
//# sourceMappingURL=main.4cf390b1.chunk.js.map