(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},19:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(12),r=a.n(c),l=a(2),o=function(e){var t=e.onFormSubmit,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],o=c[1];return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),t(r)}},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",name:"term",placeholder:"Search Video",value:r,onChange:function(e){return o(e.target.value)}}))))},m=(a(19),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),u=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return i.a.createElement(m,{key:e.id.videoId||t,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},s=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading..");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:a,title:t.snippet.title})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},d=a(13),v=a.n(d),f=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),i=a[0],c=a[1];Object(n.useEffect)((function(){r(e)}),[e]);var r=function(e){console.log("Perform api call from our app dev http://localhost:3000"),v.a.get("/.netlify/functions/getvideos").then((function(e){return c(e)})).catch((function(e){return console.log("Error:",e)}))};return[i,r]},E=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],r=f("buildings"),m=Object(l.a)(r,2),d=m[0],v=m[1];return Object(n.useEffect)((function(){c(d[0])}),[d]),i.a.createElement("div",{className:"ui container"},i.a.createElement(o,{onFormSubmit:v}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(s,{video:a})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(u,{onVideoSelect:c,videos:d})))))};r.a.render(i.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.39d10c65.chunk.js.map