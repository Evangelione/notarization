(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"7h9Q":function(e,t,a){e.exports={title:"title___1wW_j",more:"more___2fv72"}},ITHA:function(e,t,a){"use strict";a("R9oj");var i=a("ECub"),n=a("q1tI"),l=a.n(n),r=a("vt1u"),s=a.n(r),c=a("usdK"),o=a("utR0");class m extends n["Component"]{constructor(){super(...arguments),this.goArticle=((e,t)=>{var a=this.props.title;if("\u516c\u8bc1\u671f\u520a"===a)return c["a"].push({pathname:"/pageFlip",query:{module:this.props.title,articleId:e,title:t.title,createDate:t.createDate,userName:t.user?t.user.name:"\u6682\u65e0"}}),!1;var i=this.props.location.query.module;"\u62a5\u8868\u4e0b\u8f7d"===i?c["a"].push({pathname:"/reportDownload",query:{module:this.props.title?this.props.title:i,articleId:e}}):"\u516c\u8bc1\u671f\u520a"===i?c["a"].push({pathname:"/pageFlip",query:{module:this.props.title?this.props.title:i,articleId:e,title:t.title,createDate:t.createDate,userName:t.user?t.user.name:"\u6682\u65e0"}}):c["a"].push({pathname:"/article",query:{module:this.props.title?this.props.title:i,articleId:e}})})}render(){var e=this.props,t=e.list,a=e.hasLine;return l.a.createElement("div",{style:{display:"inline-block",width:"100%"}},t&&t.map((e,t)=>{return t&&(t+1)%a===0?l.a.createElement("div",{key:t,onClick:this.goArticle.bind(null,e.id,e)},l.a.createElement("div",{className:s.a["list-item"]},l.a.createElement("div",null,e.title),l.a.createElement("div",null,"[",e.updateDate.substr(0,10),"]")),l.a.createElement("div",{className:s.a["dashed-line"]})):l.a.createElement("div",{key:t,className:s.a["list-item"],onClick:this.goArticle.bind(null,e.id,e)},l.a.createElement("div",null,e.title),l.a.createElement("div",null,"[",e.updateDate.substr(0,10),"]"))}),!t.length&&l.a.createElement(i["a"],{style:{marginTop:10}}))}}t["a"]=Object(o["a"])(m)},RXBc:function(e,t,a){"use strict";a.r(t);var i,n,l,r=a("q1tI"),s=a.n(r),c=(a("fV52"),a("3I+P")),o=a("XRBN"),m=a.n(o),p=a("MuoO"),d=a("usdK"),u=a("mjZG"),h=(i=Object(p["connect"])(e=>{var t=e.global;return{global:t}}),i((l=class extends r["Component"]{constructor(){super(...arguments),this.goArticle=(e=>{d["a"].push({pathname:"/article",query:{module:"\u8f6e\u64ad\u65b0\u95fb",articleId:e}})})}componentDidMount(){this.props.dispatch({type:"global/fetchCarouselMap",payload:{}})}render(){var e=this.props.global.carouselMap;return s.a.createElement(c["a"],{autoplay:!0,style:{display:"inline-block"},className:m.a["carousel"]},e.map((e,t)=>s.a.createElement("div",{key:t,style:{position:"relative"},onClick:this.goArticle.bind(null,e.id)},s.a.createElement("img",{src:`${u["b"]}${e.image}`,style:{width:"100%",height:360,cursor:"pointer"},alt:""}),s.a.createElement("div",{className:m.a["title"]},s.a.createElement("div",{style:{paddingLeft:15}},e.title)))))}},n=l))||n),g=h,y=a("ITHA"),v=a("7h9Q"),E=a.n(v);class k extends r["Component"]{constructor(){super(...arguments),this.goDynamicList=((e,t,a)=>{d["a"].push({pathname:e,query:{module:t,id:a}})})}render(){var e=this.props,t=e.title,a=e.link,i=e.id;return s.a.createElement("div",{style:{position:"relative"}},s.a.createElement("div",{className:E.a["title"]},t),a?s.a.createElement("div",{className:E.a["more"],onClick:this.goDynamicList.bind(null,"/dynamicList",t,i)},s.a.createElement("span",{style:{fontSize:15,cursor:"pointer",marginRight:6}},"\u66f4\u591a"),s.a.createElement(u["a"],{type:"icon-icongengduocopy"})):null)}}var b,L,f,_=k,N=a("TSYQ"),w=a.n(N),T=a("XfOM"),x=a.n(T),C=(b=Object(p["connect"])(e=>{var t=e.global;return{global:t}}),b((f=class extends r["Component"]{constructor(){super(...arguments),this.state={currList:[],currTitle:"\u5de5\u4f5c\u52a8\u6001"},this.changeBarLink=((e,t)=>{this.props.dispatch({type:"global/save",payload:{barLink:e}}),this.setState({currList:this.props.global.threeNavBarList[e],currTitle:t})}),this.goDynamicList=((e,t,a)=>{d["a"].push({pathname:e,query:{module:t,id:a}})}),this.openWindow=(e=>{window.location.href=`http://${e}`})}componentDidMount(){this.props.dispatch({type:"global/fetchNavBarList",payload:{}}).then(()=>{this.setState({currList:this.props.global.threeNavBarList.work})}),this.props.dispatch({type:"global/fetchMiddleBar",payload:{}}),this.props.dispatch({type:"global/fetchFriendLink",payload:{}}),this.props.dispatch({type:"global/fetchOutLink",payload:{}}),this.props.dispatch({type:"global/fetchMainList",payload:{}})}render(){var e=this.state,t=e.currList,i=e.currTitle,n=this.props.global,l=n.barLink,r=n.middleBar,c=n.friendLink,o=n.outLink,m=n.mainList;return s.a.createElement("div",null,s.a.createElement("div",{className:x.a["container"],style:{padding:"18px 18px 8px"}},s.a.createElement(g,null),s.a.createElement("div",{className:x.a["list-box"]},s.a.createElement("div",null,s.a.createElement("div",{className:"work"===l?x.a["currentLink"]:"",onClick:this.changeBarLink.bind(null,"work","\u5de5\u4f5c\u52a8\u6001")},"\u5de5\u4f5c\u52a8\u6001"),s.a.createElement("div",{className:"industry"===l?x.a["currentLink"]:"",onClick:this.changeBarLink.bind(null,"industry","\u884c\u4e1a\u52a8\u6001")},"\u884c\u4e1a\u52a8\u6001"),s.a.createElement("div",{className:"notify"===l?x.a["currentLink"]:"",onClick:this.changeBarLink.bind(null,"notify","\u901a\u77e5\u516c\u544a")},"\u901a\u77e5\u516c\u544a")),s.a.createElement(y["a"],{list:t,title:i}))),s.a.createElement("div",{className:w()(x.a["container"],x.a["service-center"]),style:{marginTop:24}},s.a.createElement("div",{style:{marginLeft:0}},"\u670d\u52a1",s.a.createElement("br",null),"\u4e2d\u5fc3"),r.map((e,t)=>{return s.a.createElement("div",{key:t,onClick:this.goDynamicList.bind(null,e.href,e.name,e.id)},s.a.createElement("img",{src:`http://admin.zjgz.org${e.image}`,style:{width:26,height:26},alt:""}),s.a.createElement("div",{style:{width:70}},e.name))})),m.slice(0,2).map((e,t)=>{return s.a.createElement("div",{className:x.a["container"],key:t,style:{marginTop:24,marginLeft:1===t?24:0,width:0===t?658:418,minHeight:212}},s.a.createElement(_,{title:e.category.name,link:!0,id:e.category.id}),s.a.createElement(y["a"],{list:e.data.list,title:e.category.name}))}),s.a.createElement("div",{className:w()(x.a["container"],x.a["image-content"]),style:{marginTop:24,width:"100%"}},o.map((e,t)=>{return s.a.createElement("div",{key:t,onClick:this.openWindow.bind(null,e.href),style:{marginLeft:0===t?0:14}},s.a.createElement("img",{src:a("aqY+"),alt:""}),s.a.createElement("div",null,e.title))}),!o.length&&s.a.createElement("div",{style:{marginLeft:0}},s.a.createElement("img",{src:a("aqY+"),alt:""}),s.a.createElement("div",null,"\u656c\u8bf7\u671f\u5f85"))),m.slice(2).map((e,t)=>{return s.a.createElement("div",{className:x.a["container"],key:t,style:{marginTop:24,marginLeft:0===t?0:24,width:350,minHeight:212}},s.a.createElement(_,{title:e.category.name,link:!0,id:e.category.id}),s.a.createElement(y["a"],{list:e.data.list,title:e.category.name}))}),s.a.createElement("div",{className:x.a["container"],style:{marginTop:24,marginBottom:24,width:538,verticalAlign:"top"}},s.a.createElement(_,{title:"\u53cb\u60c5\u94fe\u63a5",link:!1}),s.a.createElement("div",{style:{paddingTop:14}},c.map((e,t)=>{return s.a.createElement("a",{key:t,href:e.href,style:{display:"inline-block",marginRight:48,marginTop:12,color:"#4A4A4A"}},e.title)}))),s.a.createElement("div",{className:x.a["container"],style:{marginTop:24,marginLeft:24,marginBottom:24,width:538,height:160}},s.a.createElement(_,{title:"\u6295\u8bc9\u4e2d\u5fc3",link:!1}),s.a.createElement("div",{style:{paddingTop:14}},s.a.createElement("div",{style:{display:"inline-block",marginRight:48,marginTop:12}},"\u7535\u8bdd\uff1a0571-81956940"),s.a.createElement("div",{style:{display:"inline-block",marginRight:48,marginTop:12}},"\u90ae\u7bb1\uff1azjsgzxhtszx@163.com"),s.a.createElement("div",{style:{display:"inline-block",marginRight:48,marginTop:12}},"\u5730\u5740\uff1a\u676d\u5dde\u5e02\u6587\u4e09\u8def252\u53f7\u4f1f\u661f\u5927\u53a620\u697cA\u5ea7"))))}},L=f))||L);t["default"]=C},XRBN:function(e,t,a){e.exports={carousel:"carousel___2PzFk",title:"title___3Pq5s"}},XfOM:function(e,t,a){e.exports={container:"container___1jQQ3","list-box":"list-box___LM5Wo","service-center":"service-center___3gJIA","image-content":"image-content___3lVyf",currentLink:"currentLink___2FnhM"}},"aqY+":function(e,t,a){e.exports=a.p+"static/006bYgeozy7pHERNHmg18&690.6e7982e7.jpg"},vt1u:function(e,t,a){e.exports={"list-item":"list-item___P3kKI","dashed-line":"dashed-line___3Z8bA"}}}]);