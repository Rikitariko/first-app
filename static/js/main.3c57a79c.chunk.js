(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/loginIcon.6ed11006.png"},function(e,t,a){e.exports=a.p+"static/media/icon.105ff364.svg"},,,function(e,t,a){e.exports=a.p+"static/media/logo.4edd1b95.png"},,,function(e,t,a){e.exports=a.p+"static/media/record.e0d0f37c.svg"},function(e,t,a){e.exports=a(25)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,c,i,l,r,o=a(0),m=a.n(o),s=a(2),u=a.n(s),v=a(10),E=a.n(v),d=a(6),g=a.n(d),f=a(4),b=a(11),p=a(12),j=a(5),N=(a(19),a(1)),h=new(n=function(){function e(){Object(b.a)(this,e),Object(f.a)(this,"active",c,this),Object(f.a)(this,"activeProject",i,this),Object(f.a)(this,"activeSection",l,this),Object(f.a)(this,"projectInfo",r,this),this.active=!1,this.activeProject=1,this.activeSection=2,this.projectInfo=[{},{id:2,images:[]}]}return Object(p.a)(e,[{key:"toggleRightPanel",value:function(){this.active=!this.active}},{key:"changeSection",value:function(e){this.activeSection=e,console.log(this.activeSection)}},{key:"toggleActiveProject",value:function(e){this.activeProject=e,console.log("asdasd")}}]),e}(),c=Object(j.a)(n.prototype,"active",[N.g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=Object(j.a)(n.prototype,"activeProject",[N.g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=Object(j.a)(n.prototype,"activeSection",[N.g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),r=Object(j.a)(n.prototype,"projectInfo",[N.g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n),x=(a(21),function(){return m.a.createElement("div",{className:"logo"},m.a.createElement("img",{className:"logo-img",src:E.a,alt:"logo"}))}),P=function(){return m.a.createElement("div",{className:"login-box"},m.a.createElement("img",{className:"login-icon",src:g.a,alt:"login"}))},O=function(){return m.a.createElement("div",{className:"side-bar-icon-box",onClick:function(){h.toggleRightPanel()}},m.a.createElement("div",{className:"side-bar-icon"}))},w=function(){return m.a.createElement("div",{className:"header"},m.a.createElement(x,null),m.a.createElement("div",{className:"header-right"},m.a.createElement(P,null),m.a.createElement(O,null)))},y=(a(22),a(3)),S=a(7),k=a.n(S),C=a(13),I=a.n(C),z=a(9),A=function(e){var t="project-room";return!0===e.active&&(t+=" active"),m.a.createElement("div",{className:t},m.a.createElement("div",{className:"room-icon"},m.a.createElement("img",{src:I.a,alt:"Project Logo"})),m.a.createElement("div",null,m.a.createElement("span",null,"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 1")))},L=function(e){var t="project-tab",a="project-name";return!0===e.active&&(a+=" active",t+=" active"),!0===e.active?m.a.createElement("div",{className:t,onClick:function(){h.toggleActiveProject(e.id)}},m.a.createElement("div",{className:a},m.a.createElement("div",{className:"project-icon"},m.a.createElement("img",{src:k.a,alt:"Project Logo"})),m.a.createElement("div",null,m.a.createElement("span",null,"\u041f\u0440\u043e\u0435\u043a\u0442"))),m.a.createElement(A,null),m.a.createElement(A,{active:!0})):m.a.createElement("div",{className:"project-tab",onClick:function(){h.toggleActiveProject(e.id)}},m.a.createElement("div",{className:a},m.a.createElement("div",{className:"project-icon"},m.a.createElement("img",{src:k.a,alt:"Project Logo"})),m.a.createElement("div",null,m.a.createElement("span",null,"\u041f\u0440\u043e\u0435\u043a\u0442"))))},J=Object(y.a)(function(){var e=z({"side-bar":!0,active:h.active});return m.a.createElement("div",{className:e},m.a.createElement(L,{active:1===h.activeProject,id:1}),m.a.createElement(L,{active:2===h.activeProject,id:2}),m.a.createElement(L,{active:3===h.activeProject,id:3}))}),R=(a(23),Object(y.a)(function(e){return!0===e.active?m.a.createElement("div",{className:"main-button active",onClick:function(){h.changeSection(e.id)}}," ",m.a.createElement("div",null,m.a.createElement("span",null,e.text))," "):m.a.createElement("div",{className:"main-button",onClick:function(){h.changeSection(e.id)}}," ",m.a.createElement("div",null,m.a.createElement("span",null,e.text))," ")})),B=Object(y.a)(function(){return m.a.createElement("div",{className:"main-buttons"},m.a.createElement(R,{text:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",active:1===h.activeSection,id:1}),m.a.createElement(R,{text:"\u042d\u0441\u043a\u0438\u0437\u044b",active:2===h.activeSection,id:2}),m.a.createElement(R,{text:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",active:3===h.activeSection,id:3}),m.a.createElement(R,{text:"\u041c\u0435\u0431\u0435\u043b\u044c \u0438 \u0441\u0432\u0435\u0442",active:4===h.activeSection,id:4}))}),D=function(){return m.a.createElement("div",{className:"list-item"},m.a.createElement("img",{className:"list-img",src:g.a,alt:"logo"}))},q=function(){return m.a.createElement("div",{className:"list-body"},m.a.createElement(D,null),m.a.createElement(D,null),m.a.createElement(D,null),m.a.createElement(D,null),m.a.createElement(D,null),m.a.createElement(D,null))},F=function(){return m.a.createElement("div",{className:"action-button"},m.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))},G=function(){return m.a.createElement("div",{className:"main-body"},m.a.createElement(q,null),m.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse"}},m.a.createElement(F,null)))},H=function(){return m.a.createElement("div",{className:"main-box"},m.a.createElement(B,null),m.a.createElement(G,null))},K=(a(24),a(9)),M=Object(y.a)(function(){var e=K({main:!0,active:h.active});return m.a.createElement("div",{className:"root"},m.a.createElement("div",{className:e},m.a.createElement(w,null),m.a.createElement(H,null)),m.a.createElement(J,null))});u.a.render(m.a.createElement(M,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.3c57a79c.chunk.js.map