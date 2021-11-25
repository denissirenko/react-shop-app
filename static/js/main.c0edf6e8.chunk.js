(this["webpackJsonpreact-shop-app"]=this["webpackJsonpreact-shop-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(7),s=n.n(a),r=(n(13),n(0)),o=function(){return Object(r.jsx)("nav",{className:"green darken-1",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"https://github.com/denissirenko",className:"brand-logo",children:"React Shop"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/denissirenko",children:"My Repo"})})})]})})},l=function(){return Object(r.jsx)("footer",{className:"page-footer green lighten-4",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/denissirenko",children:"My Repo"})]})})})},d=n(8),j=n(1),u=n(3),b=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})})},h=function(e){var t=e.id,n=e.name,c=e.description,i=e.price,a=e.full_background,s=e.addToBasket,o=void 0===s?Function.prototype:s;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("img",{src:a,alt:n})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title",children:n}),Object(r.jsx)("p",{children:c})]}),Object(r.jsxs)("div",{className:"card-action",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:n,price:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(r.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," uhy"]})]})]})},m=function(e){var t=e.goods,n=void 0===t?[]:t,c=e.addToBasket,i=void 0===c?Function.prototype:c;return n.length?Object(r.jsx)("div",{className:"goods",children:n.map((function(e){return Object(r.jsx)(h,Object(j.a)(Object(j.a)({},e),{},{addToBasket:i}),e.id)}))}):Object(r.jsx)("h3",{children:"Nothing here"})},O=function(e){var t=e.quantity,n=void 0===t?0:t,c=e.handleBasketShow,i=void 0===c?Function.prototype:c;return Object(r.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:i,children:[Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(r.jsx)("span",{className:"cart-quantity",children:n}):null]})},p=function(e){var t=e.id,n=e.name,c=e.price,i=e.quantity,a=e.removeFromBasket,s=void 0===a?Function.prototype:a,o=e.incQuantity,l=void 0===o?Function.prototype:o,d=e.decQuantity,j=void 0===d?Function.prototype:d;return Object(r.jsxs)("li",{className:"collection-item",children:[n," ",Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return j(t)},children:"remove"})," ","x",i," ",Object(r.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"add"})," ","= ",c*i," \u0440\u0443\u0431.",Object(r.jsx)("span",{className:"secondary-content",onClick:function(){return s(t)},children:Object(r.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})},x=function(e){var t=e.order,n=void 0===t?[]:t,c=e.handleBasketShow,i=void 0===c?Function.prototype:c,a=e.removeFromBasket,s=void 0===a?Function.prototype:a,o=e.incQuantity,l=e.decQuantity,d=n.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(r.jsxs)("ul",{className:"collection basket-list",children:[Object(r.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?n.map((function(e){return Object(r.jsx)(p,Object(j.a)({removeFromBasket:s,incQuantity:o,decQuantity:l},e),e.id)})):Object(r.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(r.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",d," uhy"]}),Object(r.jsx)("li",{className:"collection-item",children:Object(r.jsx)("button",{className:"btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(r.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})},f=function(e){var t=e.name,n=void 0===t?"":t,i=e.closeAlert,a=void 0===i?Function.prototype:i;return Object(c.useEffect)((function(){var e=setTimeout(a,3e3);return function(){clearTimeout(e)}}),[n]),Object(r.jsx)("div",{id:"toast-container",children:Object(r.jsxs)("div",{className:"toast",children:[n," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})},v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!0),s=Object(u.a)(a,2),o=s[0],l=s[1],h=Object(c.useState)([]),p=Object(u.a)(h,2),v=p[0],y=p[1],N=Object(c.useState)(!1),g=Object(u.a)(N,2),k=g[0],F=g[1],q=Object(c.useState)(""),B=Object(u.a)(q,2),S=B[0],w=B[1],Q=function(){F(!k)};return Object(c.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"b1036bbb-be62e965-f85a8fe6-9d3c4535"}}).then((function(e){return e.json()})).then((function(e){e.featured&&i(e.featured),l(!1)}))}),[]),Object(r.jsxs)("div",{className:"container content",children:[Object(r.jsx)(O,{quantity:v.length,handleBasketShow:Q}),o?Object(r.jsx)(b,{}):Object(r.jsx)(m,{goods:n,addToBasket:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var n=Object(j.a)(Object(j.a)({},e),{},{quantity:1});y([].concat(Object(d.a)(v),[n]))}else{var c=v.map((function(e,n){return n===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));y(c)}w(e.name)}}),k&&Object(r.jsx)(x,{order:v,handleBasketShow:Q,removeFromBasket:function(e){var t=v.filter((function(t){return t.id!==e}));y(t)},incQuantity:function(e){var t=v.map((function(t){if(t.id===e){var n=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n})}return t}));y(t)},decQuantity:function(e){var t=v.map((function(t){if(t.id===e){var n=t.quantity-1;return Object(j.a)(Object(j.a)({},t),{},{quantity:n>=0?n:0})}return t}));y(t)}}),S&&Object(r.jsx)(f,{name:S,closeAlert:function(){w("")}})]})};var y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(v,{}),Object(r.jsx)(l,{})]})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c0edf6e8.chunk.js.map