(this["webpackJsonpmessenger-app"]=this["webpackJsonpmessenger-app"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),c=t.n(i),o=t(13),a=t.n(o),u=t(5),s=t(3),d=t(2);function l(){var n=Object(s.a)(["\n  body {\n    margin: 0;\n    font-family: sans-serif;\n  }\n"]);return l=function(){return n},n}var f=Object(d.b)(l()),h={colors:{primary:"#4f90ff",primaryWithOpacity:"#4f90ff8a",secondary:"#e1e1e1",grey:"#4e4e4e",black:"black",white:"white"}},b=t(8),m=t(11),j=t(17),p="Welcome User!",v="Type here",g="Send",x="Friends List";function O(){var n=Object(s.a)(["\n  color: ",";\n  background: ",";\n  cursor: pointer;\n  height: 100%;\n  width: 10%;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n"]);return O=function(){return n},n}function w(){var n=Object(s.a)(["\n  width: 90%;\n  border: none;\n  outline: none;\n  padding: 0 10px;  \n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  border-radius: 10px;\n  display: flex;\n  height: 35px;\n  background: ",";\n  width: 90%;\n  align-items: center;\n  overflow: hidden;\n"]);return y=function(){return n},n}function k(){var n=Object(s.a)(["\n  border: 1px solid ",";\n  height: 70px;\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return k=function(){return n},n}var C=d.d.div(k(),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondary})),S=d.d.div(y(),(function(n){return n.theme.colors.white})),A=d.d.input(w()),E=d.d.div(O(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),F=function(n){var e=n.inputValue,t=n.setInputValue,i=n.onClick;return Object(r.jsx)(C,{children:Object(r.jsxs)(S,{children:[Object(r.jsx)(A,{value:e,onChange:function(n){return t(n.target.value)},placeholder:v}),Object(r.jsx)(E,{onClick:i,children:g})]})})};function V(){var n=Object(s.a)(["\n  padding: 10px 20px;\n  border-radius: 20px;\n  background: ",";\n  color: ",";\n  margin-bottom: 8px;\n  width: fit-content;\n  &:first-child{\n      margin-top:auto;\n  }\n"]);return V=function(){return n},n}var I=d.d.div(V(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white})),L=function(n){var e=n.msg;return Object(r.jsx)(I,{children:e})};function M(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 85%;\n  align-items: flex-end;\n  padding: 10px;\n  overflow: scroll;\n"]);return M=function(){return n},n}function W(){var n=Object(s.a)(["\n  background: ",";\n  padding: 10px;\n  color: ",";;\n  text-align: center;\n"]);return W=function(){return n},n}function J(){var n=Object(s.a)(["\n  flex:1;\n  position:relative;\n"]);return J=function(){return n},n}var T=d.d.div(J()),_=d.d.div(W(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white})),B=d.d.div(M()),H=function(n){var e=n.id,t=Object(i.useState)(""),c=Object(u.a)(t,2),o=c[0],a=c[1],s=Object(i.useState)({}),d=Object(u.a)(s,2),l=d[0],f=d[1],h=Object(i.useRef)(),v=function(){if(o.trim()){var n=Object(j.a)(l[e]||[]);n.push({msg:o,sender:"me"}),a(""),f((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(b.a)({},e,n))})),h.current.scrollTop=h.current.scrollHeight}};return Object(i.useEffect)((function(){var n=function(n){"Enter"===n.key&&v()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}})),Object(r.jsxs)(T,{children:[Object(r.jsx)(_,{children:p}),Object(r.jsx)(B,{ref:h,children:l[e]?l[e].map((function(n,e){var t=n.msg;return Object(r.jsx)(L,{msg:t},e.toString())})):null}),Object(r.jsx)(F,{inputValue:o,setInputValue:a,onClick:v})]})};function P(){var n=Object(s.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 15px;\n"]);return P=function(){return n},n}function R(){var n=Object(s.a)(["\n    background: ",";\n    color:white;\n  "]);return R=function(){return n},n}function U(){var n=Object(s.a)(["\n  display:flex;\n  padding: 10px;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  &:hover{\n    background: ",";\n  }\n  ","\n"]);return U=function(){return n},n}var q=d.d.div(U(),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primaryWithOpacity}),(function(n){return n.isActive&&Object(d.c)(R(),(function(n){return n.theme.colors.primary}))})),z=d.d.img(P()),D=function(n){var e=n.id,t=n.name,i=n.img,c=n.onClick,o=n.isActive;return Object(r.jsxs)(q,{onClick:function(){return c(e)},isActive:o,children:[Object(r.jsx)(z,{src:i,alt:"avatar-".concat(t)}),t]})},G=[{id:1,name:"Sam",img:"https://www.w3schools.com/howto/img_avatar.png"},{id:2,name:"Maria",img:"https://www.w3schools.com/howto/img_avatar2.png"},{id:3,name:"Philipa",img:"https://www.w3schools.com/w3images/avatar6.png"},{id:4,name:"Michael",img:"https://www.w3schools.com/w3images/avatar3.png"}];function K(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  border-right: 1px solid ",";\n  height: 100%;\n  overflow: auto;\n"]);return K=function(){return n},n}function N(){var n=Object(s.a)(["\n  padding: 10px;\n  background: ",";\n  color: ",";\n"]);return N=function(){return n},n}var Q=d.d.div(N(),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.grey})),X=d.d.div(K(),(function(n){return n.theme.colors.secondary})),Y=function(n){var e=n.activeFriend,t=n.setActiveFriend;return Object(r.jsxs)(X,{children:[Object(r.jsx)(Q,{children:x}),G.map((function(n){var i=n.name,c=n.img,o=n.id;return Object(r.jsx)(D,{name:i,img:c,onClick:t,id:o,isActive:e===o},o)}))]})};function Z(){var n=Object(s.a)(["\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n"]);return Z=function(){return n},n}var $=d.d.div(Z()),nn=function(){var n=Object(i.useState)(1),e=Object(u.a)(n,2),t=e[0],c=e[1];return Object(r.jsxs)(d.a,{theme:h,children:[Object(r.jsx)(f,{}),Object(r.jsxs)($,{children:[Object(r.jsx)(Y,{activeFriend:t,setActiveFriend:c}),Object(r.jsx)(H,{id:t})]})]})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(nn,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.73b11b6f.chunk.js.map