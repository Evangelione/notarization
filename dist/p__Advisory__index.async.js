(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"/j5V":function(e,t,a){"use strict";a("sPJy");var i=a("bE4q"),n=a("q1tI"),s=a.n(n),r=a("utR0"),o=a("mOP9"),l=a("iujR"),c=a.n(l);class d extends n["Component"]{render(){var e=this.props,t=e.location,a=e.children,n=t.query.module,r={"/dynamicList":`${n}`,"/notarization":`${n}`,"/notaryOffice":`${n}`,"/revokeCertificate":`${n}`,"/certificateGuide":`${n}`,"/advisory":`${n}`,"/reportDownload":`${n}`,"/searchPage":`${n}`,"/article":`${n}`},l=t.pathname.split("/").filter(e=>e),d=l.map((e,t)=>{var a=`/${l.slice(0,t+1).join("/")}`;return s.a.createElement(i["a"].Item,{key:a},s.a.createElement(o["a"],{to:a+`?module=${n}`},r[a]))}),m=[s.a.createElement(i["a"].Item,{key:"home"},s.a.createElement(o["a"],{to:"/"},"\u9996\u9875"))].concat(d);return s.a.createElement("div",{className:c.a["dynamic-container"]},s.a.createElement("div",{className:c.a["dynamic-nav"],style:{marginBottom:10}},s.a.createElement("div",{className:c.a["dynamic-title"]},n),s.a.createElement("div",{className:c.a["dynamic-breadcrumb"]},"\u60a8\u7684\u4f4d\u7f6e\uff1a",s.a.createElement(i["a"],{style:{display:"inline-block",marginLeft:5}},m))),a)}}t["a"]=Object(r["a"])(d)},iujR:function(e,t,a){e.exports={"dynamic-container":"dynamic-container___2GivA","dynamic-nav":"dynamic-nav___103_o","dynamic-title":"dynamic-title___2oqja","dynamic-breadcrumb":"dynamic-breadcrumb___2mWJo"}},lYP8:function(e,t,a){e.exports={"question-box":"question-box___2brjm",question:"question___3kbwt",answers:"answers___2Eyr5",extend:"extend___21V_L","red-link":"red-link___8_HD4"}},yGh3:function(e,t,a){"use strict";a.r(t);a("2qtc");var i,n,s,r=a("kLXV"),o=(a("DjyN"),a("NUBc")),l=(a("+L6B"),a("2/Rp")),c=(a("5NDa"),a("5rEg")),d=a("q1tI"),m=a.n(d),y=a("/j5V"),p=a("mjZG"),h=a("lYP8"),v=a.n(h),u=a("MuoO"),g=c["a"].TextArea,E=(i=Object(u["connect"])(e=>{var t=e.advisory;return{advisory:t}}),i((s=class extends d["Component"]{constructor(){super(...arguments),this.state={visible:!1,advisoryContent:""},this.showModal=(e=>{e&&e.stopPropagation(),this.setState({visible:!0,advisoryContent:""})}),this.hideModal=(e=>{e&&e.stopPropagation(),this.setState({visible:!1,advisoryContent:""})}),this.pageChange=(e=>{this.props.dispatch({type:"advisory/fetchAdvisoryList",payload:{pageNo:e}})}),this.changeAdvisoryContent=(e=>{this.setState({advisoryContent:e.target.value})}),this.postAdvisory=(()=>{this.props.dispatch({type:"advisory/postAdvisory",payload:{value:this.state.advisoryContent}}).then(()=>{this.hideModal()})}),this.useful=(e=>{this.props.dispatch({type:"advisory/useful",payload:{id:e}}).then(()=>{this.props.dispatch({type:"advisory/fetchAdvisoryList",payload:{pageNo:this.props.advisory.advisoryPage}})})})}componentDidMount(){this.props.dispatch({type:"advisory/fetchAdvisoryList",payload:{}})}render(){var e=this.state,t=e.visible,a=e.advisoryContent,i=this.props.advisory,n=i.advisoryList,s=i.advisoryPage,c=i.advisoryTotal;return m.a.createElement("div",null,m.a.createElement(y["a"],null,m.a.createElement("div",{style:{textAlign:"right",marginTop:20}},m.a.createElement(l["a"],{type:"primary",onClick:this.showModal},"\u6211\u8981\u54a8\u8be2"))),m.a.createElement("div",{style:{marginTop:24}},n.map((e,t)=>{return m.a.createElement("div",{className:v.a["question-box"],key:t},m.a.createElement("div",{className:v.a["question"]},m.a.createElement("span",{style:{fontSize:34}},"Q. "),e.content),m.a.createElement("div",{className:v.a["answers"]},m.a.createElement("div",null,m.a.createElement("span",{style:{fontSize:34,color:"#000"}},"A. "),e.reContent)),m.a.createElement("div",{className:v.a["extend"]},m.a.createElement("div",{style:{marginRight:44,cursor:"pointer"},onClick:this.useful.bind(null,e.id)},m.a.createElement(p["a"],{type:"icon-dianzan_",style:{marginRight:8,cursor:"pointer"}}),e.zan),m.a.createElement("div",null,m.a.createElement(p["a"],{type:"icon-shijian_",style:{marginRight:8}}),e.createDate)))})),m.a.createElement("div",{style:{textAlign:"center",marginBottom:30}},m.a.createElement(o["a"],{showQuickJumper:!0,defaultCurrent:s,total:c,onChange:this.pageChange,style:{marginTop:30,marginBottom:5}})),m.a.createElement(r["a"],{visible:t,footer:null,style:{textAlign:"center"},onCancel:this.hideModal},m.a.createElement("div",{style:{fontSize:24,textAlign:"center",marginBottom:30}},"\u54a8\u8be2"),m.a.createElement(g,{placeholder:"\u8bf7\u8f93\u5165\u4f60\u8981\u54a8\u8be2\u7684\u5185\u5bb9",style:{height:135},value:a,onChange:this.changeAdvisoryContent}),m.a.createElement(l["a"],{type:"primary",style:{marginTop:30,textAlign:"center"},onClick:this.postAdvisory},"\u54a8\u8be2")))}},n=s))||n);t["default"]=E}}]);