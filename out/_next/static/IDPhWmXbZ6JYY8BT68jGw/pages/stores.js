(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2oaA":function(t,n,e){"use strict";var r=e("qNsG"),a=e("q1tI"),o=e.n(a),c=e("YFqc"),i=e.n(c),s=e("d04V"),u=e.n(s),l=o.a.createElement,p=function(t){var n=t.value,e=t.name,r=void 0===e?"rating":e;return l("span",{className:"Rating"},u()({length:5}).reduce((function(t,e,a){return t.push(l("input",{type:"radio",name:r,id:"".concat(r,"-").concat(a),defaultChecked:5-n===a,key:"input-".concat(a)})),t.push(l("label",{key:"label-".concat(a),title:"".concat(5-a," star rating"),htmlFor:"".concat(r,"-").concat(a)},a)),t}),[]))},f=(e("cLRb"),o.a.createElement,e("pHiV")),d=e.n(f),v=o.a.createElement;n.a=function(t){var n=t.storename,e=t.location,a=t.coordinates,o=(t.missings,t.id),c=t.rating,s=void 0!==c&&c;Object(r.a)(t,["storename","location","coordinates","missings","id","rating"]);return v("div",{className:d.a.stores},v("h2",null,v(i.a,{as:"/stores/".concat(o,"?rating=4"),href:"/stores?id=".concat(o,"&rating=4")},v("a",null,n," ")),"@ ",e),v("p",null,"Longitude: ",a.split(",")[1]," \xa0 Langitude:  ",a.split(",")[0]),s&&v(p,{value:s}))}},"4mXO":function(t,n,e){t.exports=e("7TPF")},"7TPF":function(t,n,e){e("AUvm"),t.exports=e("WEpk").Object.getOwnPropertySymbols},Q1v8:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stores",function(){return e("k1ib")}])},k1ib:function(t,n,e){"use strict";e.r(n);var r=e("ln6h"),a=e.n(r),o=e("kOwS"),c=e("q1tI"),i=e.n(c),s=e("Zttt"),u=e("vcXL"),l=e.n(u),p=e("2oaA"),f=i.a.createElement,d=function(t){var n=t.store,e=t.rating;return f(s.a,null,f(p.a,Object(o.a)({},n,{rating:e})))};d.getInitialProps=function(t){var n,e,r;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.query,o.next=3,a.a.awrap(l()("http://localhost:3001/stores/".concat(n.id)));case 3:return e=o.sent,o.next=6,a.a.awrap(e.json());case 6:return r=o.sent,console.log(r),o.abrupt("return",{store:r,rating:n.rating});case 9:case"end":return o.stop()}}))},n.default=d},kOwS:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("UXZV"),a=e.n(r);function o(){return(o=a.a||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}},qNsG:function(t,n,e){"use strict";var r=e("4mXO"),a=e.n(r),o=e("pLtp"),c=e.n(o);function i(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,a={},o=c()(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(a.a){var i=a()(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}e.d(n,"a",(function(){return i}))},vcXL:function(t,n,e){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["Q1v8",1,0,2]]]);