(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9,10],{Cia0:function(t,e,a){"use strict";a.r(e),a.d(e,"fetchJS",function(){return n}),a.d(e,"fetchSD",function(){return i}),a.d(e,"fetchNotarizationList",function(){return s});var r=a("y0tt");function n(t,e,a){return Object(r["a"])(`http://118.31.46.146:8080/api/gzsjs?year=${t}&bh=${e}&office=${a}`,{method:"GET",credentials:"omit"})}function i(t,e,a){return Object(r["a"])(`http://118.31.46.146:8080/api/gzssd?year=${t}&bh=${e}&office=${a}`,{method:"POST",credentials:"omit"})}function s(){return Object(r["a"])("http://118.31.46.146:8080/api/office/list",{method:"GET",credentials:"omit"})}},"OO/R":function(t,e,a){"use strict";a.r(e);var r=a("MVZn"),n=a.n(r),i=a("o0o1"),s=a.n(i),c=(a("miYZ"),a("tsqr")),o=a("Cia0");e["default"]={namespace:"notarization",state:{searchList:[],notarizationList:[]},subscriptions:{setup(t){t.dispatch;var e=t.history;return e.listen(t=>{t.pathname,t.query})}},effects:{fetchJS:s.a.mark(function t(e,a){var r,n,i,u,f,p,h,d;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=r.year,i=r.bh,u=r.office,f=a.call,p=a.put,t.next=4,f(o["fetchJS"],n,i,u);case 4:if(h=t.sent,d=h.data,1!==parseInt(d.code,10)){t.next=11;break}return t.next=9,p({type:"save",payload:{searchList:d.data.list}});case 9:t.next=12;break;case 11:c["a"].error(d.message);case 12:case"end":return t.stop()}},t,this)}),fetchSD:s.a.mark(function t(e,a){var r,n,i,c,u;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.payload,n=r.year,i=r.bh,c=r.office,u=a.call,t.next=4,u(o["fetchSD"],n,i,c);case 4:case"end":return t.stop()}},t,this)}),fetchNotarizationList:s.a.mark(function t(e,a){var r,n,i,u;return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.payload,r=a.call,n=a.put,t.next=4,r(o["fetchNotarizationList"]);case 4:if(i=t.sent,u=i.data,1!==parseInt(u.code,10)){t.next=11;break}return t.next=9,n({type:"save",payload:{notarizationList:u.data}});case 9:t.next=12;break;case 11:c["a"].error(u.message);case 12:case"end":return t.stop()}},t,this)})},reducers:{save(t,e){return n()({},t,e.payload)}}}}}]);