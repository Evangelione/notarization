(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"/j5V":function(e,a,i){"use strict";i("sPJy");var t,s,l=i("bE4q"),r=i("q1tI"),n=i.n(r),d=i("utR0"),g=i("mOP9"),h=i("iujR"),o=i.n(h),c=i("MuoO"),p=(t=Object(c["connect"])(e=>{var a=e.global;return{global:a}}),t(s=class extends r["Component"]{render(){var e=this.props,a=e.location,i=e.children,t=a.query.module;console.log(t);var s={"/dynamicList":`${t}`,"/notarization":`${t}`,"/notaryOffice":`${t}`,"/revokeCertificate":`${t}`,"/certificateGuide":`${t}`,"/advisory":`${t}`,"/reportDownload":`${t}`,"/searchPage":`${t}`,"/article":`${t}`,"/notaryOffice/OfficeInfo":"\u516c\u8bc1\u673a\u6784\u8be6\u60c5","/pageFlip":`${t}`},r=a.pathname.split("/").filter(e=>e),d=r.map((e,a)=>{var i=`/${r.slice(0,a+1).join("/")}`;return n.a.createElement(l["a"].Item,{key:i},n.a.createElement(g["a"],{to:i+`?module=${t}`},s[i]))}),h=[n.a.createElement(l["a"].Item,{key:"home"},n.a.createElement(g["a"],{to:"/?module=\u9996\u9875"},"\u9996\u9875"))].concat(d);return n.a.createElement("div",{className:o.a["dynamic-container"]},n.a.createElement("div",{className:o.a["dynamic-nav"],style:{marginBottom:10}},n.a.createElement("div",{className:o.a["dynamic-title"]},t),n.a.createElement("div",{className:o.a["dynamic-breadcrumb"]},"\u60a8\u7684\u4f4d\u7f6e\uff1a",n.a.createElement(l["a"],{style:{display:"inline-block",marginLeft:5}},h))),i)}})||s);a["a"]=Object(d["a"])(p)},"4Oyz":function(e,a,i){e.exports={title:"title___205XR",desc:"desc___3kNgj",content:"content___3a8re","list-title":"list-title___1HAhn"}},iujR:function(e,a,i){e.exports={"dynamic-container":"dynamic-container___2GivA","dynamic-nav":"dynamic-nav___103_o","dynamic-title":"dynamic-title___2oqja","dynamic-breadcrumb":"dynamic-breadcrumb___2mWJo"}},usb3:function(e,a,i){"use strict";i.r(a);var t=i("q1tI"),s=i.n(t);class l{constructor(e,a){this.pages=a,this.audioUrl=i("zrRf"),this.transitionMs=500,this.hasPrevPage=!1,this.hasNextPage=!0,this.leftHiddenPage=-3,this.leftOverleaf=-2,this.leftPage=-1,this.rightPage=0,this.rightOverleaf=1,this.rightHiddenPage=2,this._el("#pageFlip").element.innerHTML="\n      <div id=\"page-flip\"><span class='page-flip-loader'></span></div>\n    ",this.preloadPages(()=>{this.preloadAudio(),this.buildMarkup("#pageFlip"),this.renderPages(),this.addClickOnGrabbers()})}preloadPages(e){var a=[],i=0;this.pages.forEach((t,s)=>{a[s]=new Image,a[s].onload=(()=>{++i===this.pages.length&&e()}),a[s].src=this.pages[s]})}preloadAudio(){this.audio=new Audio,this.audio.preload="auto",this.audio.src=this.audioUrl}organizePages(e){var a=this._el(".page-left"),i=this._el(".page-right");"prev"===e?(this.leftHiddenPage<=-1&&a.addClass("reduce-to-left"),this.addPage(this.leftHiddenPage,".hidden-left-page"),this.addPage(this.leftOverleaf,".prev-page"),this.leftHiddenPage-=2,this.leftOverleaf-=2,this.leftPage-=2,this.rightPage-=2,this.rightOverleaf-=2,this.rightHiddenPage-=2):(this.rightHiddenPage>=this.pages.length&&i.addClass("reduce-to-right"),this.addPage(this.rightHiddenPage,".hidden-right-page"),this.addPage(this.rightOverleaf,".next-page"),this.leftHiddenPage+=2,this.leftOverleaf+=2,this.leftPage+=2,this.rightPage+=2,this.rightOverleaf+=2,this.rightHiddenPage+=2),this.leftOverleaf<=-1?(a.addClass("disable-click"),this.hasPrevPage=!1):(a.removeClass("disable-click"),this.hasPrevPage=!0),this.rightOverleaf>this.pages.length?(i.addClass("disable-click"),this.hasNextPage=!1):(i.removeClass("disable-click"),this.hasNextPage=!0),this.delayTransition(()=>{this.renderPages()})}renderPages(){this.addPage(this.leftPage,".page-left"),this.addPage(this.rightPage,".page-right")}addClickOnGrabbers(){var e=this._el(".page-left .page-grabber").element,a=this._el(".page-right .page-grabber").element;e.addEventListener("click",()=>{this.leftGrabberOnClick()},!1),a.addEventListener("click",()=>{this.rightGrabberOnClick()},!1),this._el(".page-left").addClass("disable-click")}leftGrabberOnClick(){if(this.hasPrevPage||this.isTurningPage){this.audio.play(),this.isTurningPage=!0;var e=this._el(".prev-page"),a=this._el(".left-brightness"),i=this._el(".hidden-left-page"),t=this._el(".page-grabber");e.addClass("turning-prev-page"),a.addClass("turning-right"),i.addClass("show-hidden-left-page"),t.addClass("hide-page-fold"),this.organizePages("prev"),this.delayTransition(()=>{e.removeClass("turning-prev-page"),a.removeClass("turning-right"),i.removeClass("show-hidden-left-page"),t.removeClass("hide-page-fold"),this._el(".page-left").removeClass("reduce-to-left"),this.reset()})}}rightGrabberOnClick(){if(this.hasNextPage||this.isTurningPage){this.audio.play(),this.isTurningPage=!0;var e=this._el(".next-page"),a=this._el(".right-brightness"),i=this._el(".hidden-right-page"),t=this._el(".page-grabber");e.addClass("turning-next-page"),a.addClass("turning-left"),i.addClass("show-hidden-right-page"),t.addClass("hide-page-fold"),this.organizePages("next"),this.delayTransition(()=>{e.removeClass("turning-next-page"),a.removeClass("turning-left"),i.removeClass("show-hidden-right-page"),t.removeClass("hide-page-fold"),this._el(".page-right").removeClass("reduce-to-right"),this.reset()})}}delayTransition(e){setTimeout(()=>{e()},this.transitionMs)}addPage(e,a){void 0!==this.pages[e]?this._el(a).element.style.backgroundImage='url("'+this.pages[e]+'")':this._el(a).element.style.backgroundImage=null}reset(){this.audio.pause(),this.audio.currentTime=0,this.isTurningPage=!1}buildMarkup(e){this._el("#page-flip").element.innerHTML='\n      <div class="pages-container">\n        <div class="hidden-left-page"></div>\n        <div class="left-brightness"></div>\n        <div class="prev-page"></div>\n        <div class="page-left">\n          <div class="page-grabber">\n            <div class="page-fold"></div>\n          </div>\n          <div class="page-middle"></div>\n        </div>\n        <div class="page-right">\n          <div class="page-middle"></div>\n          <div class="page-grabber">\n            <div class="page-fold"></div>\n          </div>\n        </div>\n        <div class="next-page"></div>\n        <div class="right-brightness"></div>\n        <div class="hidden-right-page"></div>\n      </div>\n    '}_el(e){return{element:document.querySelector(e),addClass:function(e){return this.element.classList.add(e),this},removeClass:function(e){return this.element.classList.remove(e),this}}}}var r,n,d=i("MuoO"),g=i("/j5V"),h=i("4Oyz"),o=i.n(h),c=(r=Object(d["connect"])(e=>{var a=e.global;return{global:a}}),r(n=class extends t["Component"]{componentDidMount(){var e=this.props.location.query.articleId;console.log(e),this.props.dispatch({type:"global/fetchQK",payload:{articleId:e}}).then(()=>{var e=this.props.global.qkImages;new l("#pageFlip",e)})}render(){var e=this.props.location.query,a=e.title,i=e.createDate,t=e.userName;return s.a.createElement(g["a"],null,s.a.createElement("div",{className:o.a["title"]},a),s.a.createElement("div",{className:o.a["desc"]},s.a.createElement("div",null,"\u53d1\u8868\u65f6\u95f4\uff1a",i),s.a.createElement("div",null,"\u6765\u6e90\uff1a",t)),s.a.createElement("div",{id:"pageFlip",style:{width:"100%",height:700}}))}})||n);a["default"]=c},zrRf:function(e,a,i){e.exports=i.p+"static/page-flip.ac5e16b4.mp3"}}]);