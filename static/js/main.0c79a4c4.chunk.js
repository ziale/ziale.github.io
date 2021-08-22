(this["webpackJsonpresume-app"]=this["webpackJsonpresume-app"]||[]).push([[0],[,,function(l,e,t){l.exports={Timeline__title:"Timeline_Timeline__title__1sAcH",Timeline__events:"Timeline_Timeline__events__39NTC",event:"Timeline_event__Zlbr8",type:"Timeline_type__3uoOw",icon:"Timeline_icon__JglNc",content:"Timeline_content__2ZpDE",date:"Timeline_date__eVnAj"}},function(l,e,t){l.exports={blobs:"BackgroundScene_blobs__31KIG","blobs--fast":"BackgroundScene_blobs--fast__QwcwC","blobs--normal":"BackgroundScene_blobs--normal__17oF4","blobs--slow":"BackgroundScene_blobs--slow__1mOoq",blur:"BackgroundScene_blur__5KSfc","blur--level-0":"BackgroundScene_blur--level-0__3U6pX","blur--level-1":"BackgroundScene_blur--level-1__1PhgT","blur--level-2":"BackgroundScene_blur--level-2__ugO_R"}},function(l,e,t){l.exports={App:"App_App__1SsKL",Contact:"App_Contact__16CTk",headline:"App_headline__PD9ug",item:"App_item__2Bc0M",type:"App_type__2s3m5"}},,,,function(l,e,t){l.exports={Hero__header:"Hero_Hero__header__2rzNf",Hero__headline:"Hero_Hero__headline__3VH5e",Hero__content:"Hero_Hero__content__1yeh2"}},,function(l,e,t){l.exports={Card:"Card_Card__1KEYD","Card--decorated":"Card_Card--decorated__3aQn2"}},,function(l,e,t){l.exports={Tags:"Tags_Tags__X_EWv",Tags__item:"Tags_Tags__item__CGQLd"}},function(l,e,t){l.exports={Title:"Title_Title__B9laX",Title__heading:"Title_Title__heading__2kFDk"}},function(l,e,t){l.exports={Skills__headline:"Skills_Skills__headline__36aY6"}},,,function(l,e,t){l.exports={section:"Section_section__ad-Z9"}},function(l,e,t){l.exports={CardGrid:"CardGrid_CardGrid__3mIVT"}},function(l,e,t){l.exports={ContactStrip:"ContactStrip_ContactStrip__2Z0D7"}},,,,,,function(l,e,t){},,,,function(l,e,t){"use strict";t.r(e);var n,a=t(0),i=t.n(a),s=t(15),c=t.n(s),r=(t(25),t(4)),o=t.n(r),d=t(7),h=t(20),m=t(9),j=t(5),b=t.n(j),p=t(16),u=t.n(p),g=t(3),_=t.n(g),f=t(1),v=function(){var l=Object(a.useState)(0),e=Object(h.a)(l,2),t=e[0],n=e[1],i=function(){var l=t-window.pageYOffset,e="easeOutSine";Object(m.a)({targets:"[data-anime=blobs--fast]",translateY:.3*l,easing:e}),Object(m.a)({targets:"[data-anime=blobs--slow]",translateY:.1*l,easing:e}),Object(m.a)({targets:"[data-anime=blobs--normal]",translateY:.05*l,easing:e})};return Object(a.useEffect)((function(){return n(window.pageYOffset),window.addEventListener("scroll",u()(i,300)),function(){window.removeEventListener("scroll",i)}}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:b()(_.a.blur,_.a["blur--level-0"])}),Object(f.jsx)("div",{className:b()(_.a.blobs,_.a["blobs--fast"]),"data-anime":"blobs--fast"}),Object(f.jsx)("div",{className:b()(_.a.blur,_.a["blur--level-1"])}),Object(f.jsx)("div",{className:b()(_.a.blobs,_.a["blobs--normal"]),"data-anime":"blobs--normal"}),Object(f.jsx)("div",{className:b()(_.a.blur,_.a["blur--level-2"])}),Object(f.jsx)("div",{className:b()(_.a.blobs,_.a["blobs--slow"]),"data-anime":"blobs--slow"})]})},O=t(17),x=t.n(O),w=function(l){var e=l.children,t=l.className;return Object(f.jsx)("section",{className:b()(t,x.a.section),children:e})},y=t(8),N=t.n(y),S=function(){return Object(f.jsxs)(w,{className:N.a.Hero,children:[Object(f.jsx)("h2",{className:N.a.Hero__header,children:"Hi, I'm Aletta"}),Object(f.jsx)("div",{className:N.a.Hero__headline,children:"Full-stack software developer with a passion for healthcare and life sciences"}),Object(f.jsx)("div",{className:N.a.Hero__content,children:"Delivering elegant software cures with speed and simplicity. I focus on front-end development with Angular and React but I am also skilled in backend development with Node.js and Amazon cloud services."})]})},k=t(6),F=t.n(k),T=t(12),C=t.n(T),I=function(l){var e=l.tags;return Object(f.jsx)("div",{className:C.a.Tags,children:e.map((function(l){return Object(f.jsx)("div",{className:C.a.Tags__item,children:l},F()())}))})},E=t(13),H=t.n(E),A=function(l){var e=l.icon,t=l.title;return Object(f.jsxs)("div",{className:H.a.Title,children:[e,Object(f.jsx)("h1",{className:H.a.Title__heading,children:t})]})},L=t(10),B=t.n(L),z=function(l){var e=l.children,t=l.icon,n=l.title,a=l.tags,i=l.decorated;return Object(f.jsxs)("div",{className:b()(B.a.Card,i&&B.a["Card--decorated"]),children:[Object(f.jsx)(A,{icon:t,title:n}),Object(f.jsx)("div",{className:B.a.Card__content,children:e}),a&&Object(f.jsx)(I,{tags:a})]})},M=t(18),P=t.n(M),D=function(l){var e=l.items;return Object(f.jsx)("div",{className:P.a.CardGrid,children:e.map((function(l){return Object(f.jsx)(z,{icon:l.icon,title:l.title,tags:l.tags,children:l.content},F()())}))})},V=t(14),G=t.n(V),J=function(l){var e=l.items;return Object(f.jsxs)(w,{className:G.a.Skills,children:[Object(f.jsx)("h1",{className:G.a.Skills__headline,children:"What do I do?"}),Object(f.jsx)("p",{children:"Always evolving. I believe in creating solutions with the best tech that fits the needs of the customer, even if it means that I have to work on my skills for it. React is currently my main focus to master but from time to time I use Go and Python which are the next in my learning queue."}),Object(f.jsx)(D,{items:e})]})},R=["title","titleId"];function U(){return(U=Object.assign||function(l){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(l[n]=t[n])}return l}).apply(this,arguments)}function W(l,e){if(null==l)return{};var t,n,a=function(l,e){if(null==l)return{};var t,n,a={},i=Object.keys(l);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(a[t]=l[t]);return a}(l,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(l,t)&&(a[t]=l[t])}return a}function X(l,e){var t=l.title,i=l.titleId,s=W(l,R);return a.createElement("svg",U({width:80,height:80,fill:"#0870D8",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":i},s),t?a.createElement("title",{id:i},t):null,n||(n=a.createElement("path",{d:"M12.001 24C5.385 24 0 18.647 0 11.999 0 5.385 5.385 0 12.001 0 18.614 0 24 5.385 24 11.999 24 18.647 18.614 24 12.001 24zm0-23.436C5.684.564.565 5.685.565 12c0 6.316 5.12 11.435 11.436 11.435 6.315 0 11.434-5.119 11.434-11.435C23.434 5.717 18.316.564 12.001.564zM22.169 15.42l-.062.013-.034-.043c.002-.019.403-1.202.4-2.56-.005-1.463-.599-2.36-1.363-2.36-.465 0-.798.334-.798.831 0 .898 1.097.964 1.097 2.926 0 .798-.166 1.561-.432 2.393-1.23 4.154-5.153 6.082-8.975 6.082-1.763 0-3.014-.361-3.387-.529-.015-.008-.028-.037-.016-.066l.048-.034c.151.06 1.226.397 2.556.397 1.463 0 2.327-.598 2.327-1.33a.823.823 0 0 0-.832-.829c-.898 0-.964 1.13-2.892 1.13-.831 0-1.561-.166-2.427-.432-4.122-1.263-6.087-5.154-6.084-9.01.002-1.878.527-3.372.536-3.388l.059-.01.035.043c-.049.155-.398 1.228-.398 2.556 0 1.463.598 2.327 1.362 2.327a.789.789 0 0 0 .799-.798c0-.898-1.098-.997-1.098-2.925 0-.831.167-1.562.432-2.426 1.265-4.12 5.154-6.052 8.977-6.081 1.776-.013 3.331.518 3.39.565l.011.06-.044.033c-.018-.002-1.029-.425-2.559-.425-1.429-.001-2.327.598-2.327 1.363 0 .432.333.798.831.798.898 0 .964-1.097 2.892-1.097.831 0 1.562.166 2.427.432 4.156 1.261 6.05 5.185 6.084 8.974.018 1.941-.529 3.41-.535 3.42zm-5.715-2.855c-1.13 0-1.995.832-1.995 1.828 0 .831.498 1.495 1.164 1.495.233 0 .465-.133.465-.432 0-.431-.573-.537-.528-1.184.028-.427.43-.711.828-.711.798 0 1.171.774 1.171 1.57-.034 1.23-.938 2.086-2.001 2.086-1.398 0-2.293-1.33-2.293-2.759 0-2.128 1.396-2.959 2.127-3.158.008-.001 1.911.34 1.852-.499-.026-.369-.575-.511-.974-.527-.441-.017-.885.142-.885.142-.233-.117-.393-.346-.492-.611 1.363-1.03 2.326-2.027 2.326-3.158 0-.598-.4-1.131-1.164-1.131-1.363 0-2.394 1.729-2.394 3.291 0 .266 0 .532.067.766-.865.631-1.507 1.023-2.671 1.721 0-.146.031-.521.128-1.008.399-.432.946-1.079.946-1.578 0-.233-.132-.432-.4-.432-.664 0-1.164.998-1.296 1.695-.3.366-.897.832-1.397.832-.399 0-.531-.366-.566-.498 1.263-.432 2.826-2.162 2.826-3.724 0-.333-.133-1.064-1.13-1.064-1.496 0-2.759 2.228-2.759 3.955-.532 0-.731-.565-.731-.996 0-.432.166-.865.166-.997 0-.134-.067-.3-.266-.3-.499 0-.798.664-.798 1.429.034 1.064.732 1.729 1.663 1.795.132.632.698 1.23 1.396 1.23.432 0 .964-.133 1.33-.465-.034.233-.067.431-.1.631-1.463.765-2.527 1.297-3.491 2.161-.762.698-1.195 1.628-1.195 2.359 0 .997.632 1.928 1.928 1.928 1.529 0 2.693-1.23 3.257-2.925.267-.798.373-1.958.44-3.022 1.529-.864 2.254-1.364 3.051-1.931.099.166.2.3.334.399-.699.366-2.36 1.397-2.36 3.823 0 1.729 1.164 3.656 3.457 3.656 1.895 0 3.191-1.562 3.191-3.057 0-1.362-.765-2.625-2.227-2.625zm-9.141 4.653c-.498.023-.83-.296-.83-.827 0-1.429 1.981-2.793 3.477-3.526-.266 1.996-.939 4.275-2.647 4.353zM8.41 9.374c0-1.097 1.082-3.182 1.745-2.962.781.26-.648 2.364-1.745 2.962zm6.283-.499c0-1.362.923-2.688 1.427-2.436.574.287-.43 1.572-1.427 2.436z"})))}var Y,K=a.forwardRef(X),q=(t.p,["title","titleId"]);function Z(){return(Z=Object.assign||function(l){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(l[n]=t[n])}return l}).apply(this,arguments)}function Q(l,e){if(null==l)return{};var t,n,a=function(l,e){if(null==l)return{};var t,n,a={},i=Object.keys(l);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(a[t]=l[t]);return a}(l,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(l,t)&&(a[t]=l[t])}return a}function $(l,e){var t=l.title,n=l.titleId,i=Q(l,q);return a.createElement("svg",Z({width:120,height:40,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"420 219.9 1452.5 354.1",enableBackground:"new 420 219.9 1452.5 354.1",xmlSpace:"preserve",ref:e,"aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,Y||(Y=a.createElement("g",{transform:"matrix(1.25,0,0,-1.25,0,354.0625)"},a.createElement("g",{transform:"scale(0.1,0.1)"},a.createElement("path",{fill:"#FF6357",d:"M3360-1759.5h11620.3V1073H3360V-1759.5z"}),a.createElement("path",{fill:"#FFFFFF",d:"M11298.8,135.5l-14-0.7l-13.8-0.6l-13.5-1.7l-13.3-2.4l-12.7-3.2l-13.6-3.8l-12-4.2l-12.2-4.8 l-12.1-5.6l-11.5-5.9l-11.5-6.8l-11.1-7.4l-10.9-7.1l-10.2-8.1l-9.8-8.6l-9-9l-9-9.8l-8.4-9.9l-8.7-10.3l-7.3-10.3l-7.4-10.9 l-6.7-11.7l-5.5-11.4L11049-31l-4.6-12.2l-4.3-12.7l-3.9-12.7l-2.7-13.8l-2.7-13.2l-1.9-13.3l-1.1-13.9l-0.5-13.8v-403l0.5-13.9 l1.1-13.9l1.9-13.4l2.7-13.2l2.7-13.7l3.9-12.8l4.3-12l4.6-12.8l5.5-12.4l5.5-11.4l6.7-11.1l7.4-11.7l7.3-10.3l8.7-10.2l8.4-9.9 l9-9.6l9-9.5l9.8-8.2l10.2-8l10.9-7.3l11.1-7.2l11.5-6.9l11.5-5.9l12.1-5.4l12.2-5l12-4.2l13.6-3.9l12.7-3l13.3-2.4l13.5-1.8 l13.8-0.5l14-0.8h862.4l14,0.8l13.8,0.5l13.6,1.8l13.4,2.4l12.8,3l12.6,3.9l13,4.2l12,5l12.1,5.4l11.7,5.9l11.5,6.9l11.1,7.2 l10.8,7.3l9.6,8l10.1,8.2l9.2,9.5l9.4,9.6l8.4,9.9l7.7,10.2l7.9,10.3l7,11.7l6.4,11.1l6.4,11.4l5.1,12.4l5,12.8l4.3,12l3.5,12.8 l3.3,13.7l2.3,13.2l1.8,13.4l1.3,13.9v430.7l-1.3,13.9l-1.8,13.3l-2.3,13.2l-3.3,13.8l-3.5,12.7l-4.3,12.7l-5,12.2l-5.1,12.4 l-6.4,11.4l-6.4,11.7l-7,10.9l-7.9,10.3l-7.7,10.3l-8.4,9.9l-9.4,9.8l-9.2,9l-10.1,8.6l-9.6,8.1l-10.8,7.1l-11.1,7.4l-11.5,6.8 l-11.7,5.9l-12.1,5.6l-12,4.8l-13,4.2l-12.6,3.8l-12.8,3.2l-13.4,2.4l-13.6,1.7l-13.8,0.6l-14,0.7L11298.8,135.5L11298.8,135.5z  M12029.4-703.1h-598.9V27h598.9V-703.1"}),a.createElement("path",{fill:"#FFFFFF",d:"M13761.9,126.2l13.4-0.5l13.8-1.3l13.3-1.8l13.5-2.4l13.4-3.1l12.8-3.9l12.6-3.8l12.1-5.2 l12.4-5.3l11.7-5.8l11.3-6.3l10.9-7.3l10.4-7.5l10.4-8.6l9.5-8.2l10-9.3l8.9-9l8.5-9.9l8.1-10.2l7.1-11.2l7.4-11.2l6.8-11.3 l6-11.7l5.5-12.2l4.7-12.2l4.3-12.5l3.7-13.1l3-12.8l2.3-13.2l2.2-13.7l0.3-13.9l0.6-14.3V-812h-233.9l-11,0.8l-10.3,1l-10.2,1.3 l-9.7,1.6l-9.9,2.1l-8.9,2.3l-8.6,3.3l-8.6,2.9l-8,3.1l-7.2,3.9l-7.2,3.9l-7.3,4.3l-6.4,5l-6,4.9l-5.9,5.4l-5.7,5.4l-4.7,5.8l-5,6 l-4.1,6.7l-4.5,7.1l-3.4,6.3l-3.2,7.1l-2.8,7.4l-2.5,8.2l-2.4,8l-1.8,7.7l-1.4,8.1l-1.1,8.4l-1.2,9l-0.5,8.6V17.2h-598.1V-812 h-234.2l-11.1,0.8l-10.1,1l-10.2,1.3l-10,1.6l-9.5,2.1l-9,2.3l-8.6,3.3l-8.6,2.9l-8.1,3.1l-7.6,3.9l-6.9,3.9l-7.3,4.3l-6.2,5 l-6.7,4.9l-5.5,5.4l-5.3,5.4l-4.8,5.8l-5.2,6l-3.9,6.7l-4.2,7.1l-3.8,6.3l-3.1,7.1l-3.2,7.4l-2.3,8.2l-2.5,8l-1.5,7.7l-1.4,8.6 l-1.2,8l-1.4,9l-0.3,8.6v782.3L13761.9,126.2"}),a.createElement("path",{fill:"#FFFFFF",d:"M8875.8-645.5v-9.4l0.7-8.3l0.6-9.2l1.4-8.4l1.8-8.6l1.8-8.1l2.1-7.8l2.6-8.1l3.1-7.3l2.9-7.2 l4-6.7l3.9-7l4.4-6.4l4-6l5.7-6.4l5.5-5.1l5.2-5.7l6.4-4.9l6.4-4.8l6.9-4.3l6.9-4.4l8.1-3.7l7.8-3.6l8.1-2.9l8.9-2.6l9.4-2.5 l8.9-2.6l10.3-1.6l9.8-1.3l11-1l10.7-0.8h203.9v665.5l-0.5,14.3l-0.8,13.9l-1.7,13.7l-2.5,13.2l-3.2,12.8l-3.2,13.4l-4.8,12.1 l-4.6,12.2l-5.5,12.2l-6.1,11.5l-6.8,11.4l-7.3,11.2l-7.1,11.2L9187,27l-8.2,9.9l-9,9.2l-10,9.2l-9.5,8.2l-10.5,8.6l-10.5,7.5 l-10.8,7.1l-11.5,6.3l-11.5,6l-12,5.3l-12.4,5.2l-12.7,3.8l-13,3.8l-13.1,3.2l-13.3,2.4l-13.6,1.8l-14,1.3l-13.3,0.5H7465.3 v-781.1l0.7-8.3l0.5-9.2l1.2-8.4l1.7-8.6l1.9-8.1l1.9-7.8l3.3-8.1l1.9-7.3l3.8-7.2l3.8-6.7l3.6-7l4.2-6.4l5-6l4.6-6.4l5.7-5.1 l5.9-5.7l5.9-4.9l6.7-4.8l7-4.3l7.3-4.4l7.1-3.7l8.6-3.6l7.9-2.9l9.3-2.6l8.9-2.5l9.4-2.6l9.5-1.6l10-1.3l11.2-0.5l11.2-0.5 l10.9-0.8h191.7V17.3h345.2v-672.1l0.2-8.3l1.4-9.2l1-8.4l1.3-8.6l2-8.1l2.4-7.8l2.1-8.1l3.1-7.3l3.3-7.2l3.3-6.7l4.5-7l4-6.4 l4.9-6l4.9-6.4l5.7-5.1l5.9-5.7l6-4.9l5.9-4.8l7.6-4.3l7.3-4.4l7.2-3.7l7.8-3.6l8.6-2.9l8.4-2.6l9.2-2.5l9.5-2.6l9.9-1.6l10.6-1.3 l10.2-1h10.7l11.8-0.8H8531V17.3h344.8L8875.8-645.5"}),a.createElement("path",{fill:"#FFFFFF",d:"M9848-703.1V27h585.3v-159.7h416.2l-0.5,13.2l-1.2,13.6l-1.8,13.2l-2.7,13.8l-3,12.5 l-3.3,12.7l-4.5,12.4l-4.8,12.4l-5.6,12l-6,11.4l-6.8,11.2l-6.4,11.2l-8.1,10.2l-8.1,10.3l-8.2,9.9l-9.2,8.9l-9.9,9.4l-9.4,8.4 l-10.7,7.8l-10.2,7.1l-11.4,7.3l-11.2,6.4l-11.4,5.9l-12.1,5.5l-12.1,4.9l-12.9,4.2l-12.8,3.8l-13.2,3.2l-13,2.3l-13.1,1.9 l-14,0.5l-14.1,0.7h-861.7l-14.3-0.7l-13.7-0.5l-13.7-1.9l-13.1-2.3l-13.6-3.2l-12.8-3.8l-12.5-4.2l-12.2-4.9l-12.4-5.5l-11.4-5.9 l-11.4-6.9l-11-7.3l-10.6-7.1l-10.1-8l-9.8-8.7l-9.8-9l-9-9.8l-8.7-9.9l-7.7-10.3l-7.1-10.3l-7.6-11.1l-6.5-11.5l-6.3-11.4 l-5.2-12.4l-5-12.2l-4.3-12.7l-3.3-12.8l-3.1-13.7l-2.6-13.2l-1.8-13.3l-0.8-13.9l-0.4-13.8v-403l0.4-13.9l0.8-13.9l1.8-13.4 l2.6-13.2l3.1-13.7l3.3-12.8l4.3-12l5-12.7l5.2-12.5l6.3-11.4l6.5-11.1l7.6-11.7l7.1-10.3l7.7-10.2l8.7-9.9l9-9.8l9.8-9.4l9.8-8.2 l10.1-8l10.6-7.3l11-7.2l11.4-6.8l11.4-6.1l12.4-5.4l12.2-5l12.5-4.2l12.8-3.8l13.6-3.1l13.1-2.4l13.7-1.8l13.7-0.5l14.3-0.8 h861.7l14.2,0.8l14,1l13.1,1.3l13,2.4l13.2,3.1l12.8,3.8l12.8,4.2l12.1,5l12.1,5.4l11.4,6.1l11.2,6.1l11.4,7.5l10.2,7.1l10.7,7.7 l9.4,8.6l9.9,9.4l9.2,8.9l8.2,9.9l8.1,10.3l8.1,10.3l6.4,11.2l6.8,10.9l6,11.7l5.6,11.8l4.8,12.5l4.5,12.4l3.3,12.4l3,13l2.7,13.4 l1.8,13.4l1.2,13.1l0.5,14.3h-416.2v-159.9L9848-703.1"}),a.createElement("path",{fill:"#FFFFFF",d:"M6892.5-293.1h-606.4V27h606.4L6892.5-293.1L6892.5-293.1z M7287.8-132.7v13.2l-1.3,13.6 l-1.8,13.2l-2.5,13.4l-3,13.2l-3.8,12.4l-4,12.4l-5,12.4l-5.5,12l-6,11.4l-6.7,11.2l-7.4,11.2l-7.4,10.2l-8.6,10.3l-8.3,9.9 l-9.2,8.9l-9.2,9.4l-10,8.4l-10.1,7.8l-11.1,7.1l-10.7,7.3l-11.7,6.4l-11.4,5.9l-11.9,5.5l-12.4,4.9l-12.6,4.2l-12.4,3.8 l-13.5,3.2l-13.3,2.3l-13.3,1.8l-13.3,0.9l-14,0.3h-862.8l-13.6-0.3l-13.5-0.9l-14.2-1.8l-13.2-2.3l-12.7-3.2l-13-3.8l-12.6-4.2 l-12.1-4.9l-12.4-5.5l-11.4-5.9l-11.5-6.9l-10.7-7.3l-11.1-7.1l-10-8.1l-10.1-8.6l-9.2-9l-9.2-9.8L5945,36l-7.7-10.3l-8.1-10.3 l-7.5-11.1l-5.7-11.5l-6.2-11.4L5904-31l-4.6-12.2l-4.4-12.7l-3.3-12.8l-3.4-13.7l-2.3-13.2l-1.9-13.2l-1-14v-430.8l1-13.8 l1.9-13.4l2.3-13.2l3.4-13.7l3.3-12.7l4.4-12l4.6-13l5.7-12.4l6.2-11.3l5.7-11.2l7.5-11.7l8.1-10.3l7.7-10.2l8.4-9.9l9.2-9.8 l9.2-9.4l10.1-8.2l10-8l11.1-7.3l10.7-7.1l11.5-7l11.4-5.9l12.4-5.4l12.1-5l12.6-4.2l13-3.9l12.7-3l13.2-2.3l14.2-1.9l13.5-0.5 l13.6-0.8h830.5l14.3,0.8l13.1,1l13.6,1.4l13.2,2.3l12.7,3l12.9,3.9l12.8,4.2l11.9,5l12.4,5.4l11.4,5.9l11.7,6.2l11.1,7.5 l10.7,7.1l9.9,7.7l10.5,8.7l9,9.3l9.1,9l8.6,9.8l8.3,10.3l7.4,10.3l7.1,11.1l6.9,11.1l6.4,11.7l5,11.8l5.1,12.5l4.2,12.4l3.6,12.4 l3,13l2.5,13.3l1.9,13.6l0.7,13.1l0.2,14.3h-416.3v-159.9h-552.8v301.5h730.5l14,0.6l13.3,0.5l13.3,1.8l13.3,2.4l13.6,3.3 l12.4,3.3l12.6,4.4l12.4,4.6l11.9,5.6l11.4,6.3l11.7,6.2l10.7,7.1l11.1,7.4l10.1,8l10,8.5l9.2,9l9.2,9.2l8.3,9.9l8.6,10.5 l7.4,10.2l7.4,11.2l6.7,10.9l6,11.2l5.5,12.5l5,12.1l4,12.1l3.8,12.8l3,13l2.5,13.2l1.8,13.6l1.3,13.2L7287.8-132.7"}),a.createElement("path",{fill:"#FFFFFF",d:"M4558.6,135.5l-12.7-0.7l-12.9-0.6l-12.9-1.7l-12.2-1.7l-12-3.5l-12.2-3.6l-11.4-3.4 l-11.2-4.5l-11.4-5.3l-10.2-5.7l-10.9-5.9l-10.5-6.4l-9.8-7l-9.2-7.3l-8.9-8.6l-9.4-7.8l-7.7-9.2l-7.9-9.3l-7.8-9.5l-6.7-9.9 l-6.8-10.6l-6.1-10.8l-5.6-11.1l-4.4-10.8l-5.2-11.7l-3.6-12.2l-3.8-12.1l-3.1-13l-1.4-12.1l-1.9-13.3l-0.7-13l-0.6-13.4l0.6-13.1 l0.7-13.8l1.9-13.2l1.4-12.8l3.1-12.6l3.8-12.4l3.6-12.2l5.2-11.8l4.4-11.4l5.6-10.8l6.1-11.1l6.8-10.3l6.7-10.6l7.8-9.5l7.9-9.3 l7.7-8.6l9.4-8.6l8.9-7.7l9.2-7.1l9.8-7.9l10.5-6.4l10.9-5.9l10.2-5.7l11.4-4.9l11.2-4.6l11.4-3.8l12.2-3.7l12-2.3l12.2-2.7 l12.9-1.2l12.9-1.1H5215l10.3-0.7l9.8-1.9l10.4-2.3l9.2-3.6l9.2-4.8l8.4-4.6l7.8-5.8l7.3-7l6.5-7.2l6.1-7.7l5.1-8.6l4.8-9.3l3-9.8 l3-9.9l1.2-10.1l0.5-10.5v-120.8l-0.5-10.3l-1.2-10.1l-3-9.8l-3-8.9l-4.3-9.4l-5.6-8.1l-6.1-8l-6.5-7.1l-7.3-6.1l-7.8-6.4 l-8.4-4.6l-9.2-4.4l-9.2-3.3l-9.9-2.6l-10.2-2l-10.3-0.5l-491.4,0.5v159.9h-416.2l0.6-14.3l0.7-13.1l1.9-13.6l1.9-13.3l3.6-13 l3.3-12.2l4.3-12.4l5-12.6l5.7-11.7l6-11.8l6.4-11.1l7.6-11.1l7.3-10.3l8.7-10.2l8.3-10l8.9-8.9l8.9-9.4l10.7-8.6l9.5-7.7 l10.9-7.1l11.2-7.5l11.4-6.2l11.7-5.9l11.9-5.4l12.4-5l12.8-4.2l12.6-3.9l12.8-3l13.2-2.4l13.2-1.3l13.7-1l13.9-0.8h829.3l15,0.8 l15.7,1l15.2,1.3l14.8,2.4l15.2,3l14.5,3.9l14,4.2l14,5l13.3,5.4l12.9,5.9l12.6,6.9l13.1,6.8l11.6,7.7l11.7,8l11.2,8.2l10.1,9.5 l10.6,8.9l9.4,9.8l9.2,10.3l8.7,10.6l7.7,10.8l7.1,11.9l6.9,11.3l6,12.2l5.5,12.4l5.2,12.6l3.8,12.8l3.8,13l2.5,13.2l1.8,13.7 l1.2,13.1l0.7,14.3l-0.7,13.7l-1.2,13.7l-1.8,14l-2.5,12.7l-3.8,13.2l-3.8,13l-5.2,12.4l-5.5,12.7l-6,11.5l-6.9,11.7l-7.1,11.7 l-7.7,10.5l-8.7,10.6l-9.2,10.4l-9.4,9.9l-10.6,9.8l-10.1,8.6l-11.2,8.6l-11.7,8.6l-11.6,7.4l-13.1,7.2l-12.6,6l-12.9,5.8 l-13.3,5.7l-14,5l-14,4.3l-14.5,3.7l-15.2,2.9l-14.8,2.6l-15.2,2l-15.7,0.5l-15,0.6h-603l-9.2,0.7l-9.1,0.7l-8.6,2.7l-9,3.3 l-9,3.3l-8.6,4.9l-7.9,5.3l-7.4,6.4l-7.2,7.4l-6.2,7.7l-6.2,8l-4.6,9l-3.8,9.9l-3.2,10.2l-1.1,5.5l-0.6,5.6l-0.5,6.1v111l0.5,8.4 l1.7,8.6l2.7,8.8l3.3,8.4l4.6,7.4l5.2,8l6.4,6.4l7.1,7l7.3,5.3l7.9,5.5l8.3,4.3l10,4.2l9.2,3.2l10.3,1.7l9.8,1.9l10.6,0.7h464.7 V-109h415.4l-2.3,12.8l-1.8,12.1l-2.9,12.1l-3.1,12.1l-3.6,12.4l-4.5,11.4l-4.6,11.5l-5.6,11.2l-5.9,10.8L5647,8.2l-6.7,10.3 l-7,9.8l-8.1,9.3l-8.1,9.8l-8.6,8.3l-8.9,8.4l-8.9,7.9l-10,8l-10,7.1l-10.7,6.8l-10.2,6.3l-10.8,5.9l-11.1,5.6l-11.4,4.9 l-11.7,4.4l-12.1,3.4l-12.1,3l-12.1,3.5l-12.9,1.7l-12.9,1.7l-12.6,0.6l-13.3,0.7L4558.6,135.5"})))))}var ll=a.forwardRef($),el=(t.p,t(2)),tl=t.n(el),nl=function(l){l.children;return Object(f.jsxs)(w,{className:tl.a.Timeline,children:[Object(f.jsx)("h1",{className:tl.a.Timeline__title,children:"Experience"}),Object(f.jsxs)("div",{className:tl.a.Timeline__events,children:[Object(f.jsxs)("div",{className:tl.a.event,children:[Object(f.jsx)(A,{icon:Object(f.jsx)(K,{className:"icon"}),title:"GE Healthcare"}),Object(f.jsx)("h2",{className:tl.a.title,children:"Software Engineer at Clinical Data Aggregation"}),Object(f.jsxs)("div",{className:tl.a.content,children:[Object(f.jsx)("p",{className:tl.a.date,children:"Apr 2020 \u2013 present (1 year) Budapest, Hungary"}),Object(f.jsx)("p",{children:"Redesigning and reimplementing old UI projects with a fresh design system to increase maintainability, code clarity, and user experience."}),Object(f.jsx)("p",{children:"Creating components for a distributed system that can generate and load realistic patient data for the engineers to use."}),Object(f.jsx)("p",{children:"Working with UX designers to implement and deliver application for medical statistics."}),Object(f.jsx)("p",{children:"Designing the architecture of and implementing a performance testing framework. "}),Object(f.jsx)("p",{children:"Creating design patterns and writing test. Creating testing pipelines that are easy to use and analyze."})]})]}),Object(f.jsxs)("div",{className:tl.a.event,children:[Object(f.jsx)(A,{icon:Object(f.jsx)(K,{className:"icon"}),title:"GE Healthcare"}),Object(f.jsx)("h2",{className:tl.a.title,children:"Software Engineer Specialist at Life Sciences"}),Object(f.jsxs)("div",{className:tl.a.content,children:[Object(f.jsx)("p",{className:tl.a.date,children:"May 2018 \u2013 Apr 2020 (2 years) Budapest, Hungary"}),Object(f.jsx)("p",{children:"Writing UI code that meets standards and delivers desired functionality in Angular 6+."}),Object(f.jsx)("p",{children:"Writing Lambdas on AWS in javascript that serve the front-end and interact with the DynamoDB database."}),Object(f.jsx)("p",{children:"Creating scenarios and implementing automated integration tests for UI projects using Protractor."}),Object(f.jsx)("p",{children:"Deploying and supporting UI applications in production. Researching customer needs and splitting requirements into stories ready for implementation."})]})]}),Object(f.jsxs)("div",{className:tl.a.event,children:[Object(f.jsx)(A,{icon:Object(f.jsx)(ll,{className:"icon"}),title:"Semcon"}),Object(f.jsx)("h2",{className:tl.a.title,children:"Technical writer"}),Object(f.jsxs)("div",{className:tl.a.content,children:[Object(f.jsx)("p",{className:tl.a.date,children:"May 2017 \u2013 Apr 2018 (1 years 2 months) Budapest, Hungary"}),Object(f.jsx)("p",{children:"Analyzing and creating customer documentation in XML for telecommunication networks. Planning and managing the schedule and content of parallel projects."})]})]}),Object(f.jsxs)("div",{className:tl.a.event,children:[Object(f.jsx)("h2",{className:tl.a.title,children:"Studies"}),Object(f.jsx)("div",{className:tl.a.content,children:Object(f.jsx)("p",{children:"I studied Applied Mathematics at Budapest University of Technology and Economics. I finished my Bachelor of Science degree in 2015. Aside from mathematical theories I took classes for Java and webprogramming."})})]})]})]})},al=t(19),il=t.n(al),sl=function(l){var e=l.items;return Object(f.jsx)("div",{className:il.a.ContactStrip,children:e.map((function(l){return Object(f.jsx)("div",{children:l},F()())}))})};var cl=function(){var l=[{title:"Frontend",icon:Object(f.jsx)(d.c,{className:"h-12 w-12 inline"}),tags:["React","Angular","SASS","Typescript","Tailwind","RxJS","Store Technologies","BEM, RSCSS, SMACSS"],content:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{children:"I am well versed in the holy trinity of HTML, JS, and CSS. However I like to use the best fitting technologies and concepts for my projects, delivering the desired functionality with performance, reliability and simplicity."}),Object(f.jsx)("p",{children:"Stunning looks and healthy code are my basic principles."})]})},{title:"Backend and cloud",icon:Object(f.jsx)(d.b,{className:"h-12 w-12 inline"}),tags:["Node.js","Python","Go","Java","Lambdas","API Gateway","DynamoDB","EC2","S3","Cloudfront","Cloudformation"],content:Object(f.jsx)("p",{children:"Contributing to back-end services built in Node.js. Serverless infrastructure is my preferred way to go for light application, but I also love working on on-premise solutions and distributed systems. I write scripts and services in Python or Go, but my main expertise is in Typscript."})},{title:"Testing",icon:Object(f.jsx)(d.a,{className:"h-12 w-12 inline"}),tags:["Jest","Jasmine","Protractor","Cypress","Puppeteer","k6","Grafana","Storybook"],content:Object(f.jsx)("p",{children:"Healthcare soultions should never overlook the importance of testing. As a Healthtech software engineer I gained a large experience in testing this lets me choose the best solutions for the projects and teams. Unit tests, component tests, integration tests, performance tests, visual regression tests, you name it I have it."})},{title:"Devops",icon:Object(f.jsx)(d.d,{className:"h-12 w-8 inline"}),tags:["Jenkins","Docker","Kubernetes","Groovy"],content:Object(f.jsx)("p",{children:"Working on and testing distributed systems required me to learn the basic aspects of containerizations. I also dabble with Jenkins pipelines."})},{title:"UX",icon:Object(f.jsx)(d.e,{className:"h-12 w-12 inline"}),content:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{children:"I have a passion for design and UX so I often work with Figma and create custom icons for my projects or come up with my own design systems."}),Object(f.jsx)("p",{children:"I know how to write documents for developers. I spent my early career as a Technical Writer and I often use the knowledge I have gained to created the documentations that deliver the information fast and clear with good examples. Helping your customers use the solutions that you build is half of the success."})]})}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:o.a.App,children:[Object(f.jsx)(sl,{items:["geczialetta@gmail.com","+36 30 340 5642",Object(f.jsx)("a",{href:"https://www.linkedin.com/in/alettageczi/",children:"LinkedIn: @alettageczi"},F()())]}),Object(f.jsx)(S,{}),Object(f.jsx)(J,{items:l}),Object(f.jsx)(nl,{}),Object(f.jsx)(w,{className:o.a.Contact,children:Object(f.jsxs)(z,{title:"Contact me",decorated:!0,children:[Object(f.jsxs)("div",{className:o.a.item,children:[Object(f.jsx)("span",{className:o.a.type,children:"Email:"}),Object(f.jsx)("span",{className:o.a.value,children:"geczialetta@gmail.com"})]}),Object(f.jsxs)("div",{className:o.a.item,children:[Object(f.jsx)("span",{className:o.a.type,children:"Phone:"}),Object(f.jsx)("span",{className:o.a.value,children:"+36 30 340 5642"})]}),Object(f.jsxs)("div",{className:o.a.item,children:[Object(f.jsx)("span",{className:o.a.type,children:"LinkedIn:"}),Object(f.jsx)("span",{className:o.a.value,children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/alettageczi/",children:"@alettageczi"})})]})]})})]})]})};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(cl,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.0c79a4c4.chunk.js.map