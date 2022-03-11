var he=Object.defineProperty;var G=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var H=(v,s,l)=>s in v?he(v,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):v[s]=l,I=(v,s)=>{for(var l in s||(s={}))we.call(s,l)&&H(v,l,s[l]);if(G)for(var l of G(s))ge.call(s,l)&&H(v,l,s[l]);return v};import{c as pe,r as K,a as h,w as j,o as ke,b as y,d as _,e as w,t as O,u as g,F as S,f as V,n as C,g as ye,h as Q,i as _e}from"./vendor.2af224f4.js";const Ce=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))A(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&A(c)}).observe(document,{childList:!0,subtree:!0});function l(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function A(u){if(u.ep)return;u.ep=!0;const i=l(u);fetch(u.href,i)}};Ce();function W(){return pe(9,.7)}function Ae(v){let s=JSON.parse(JSON.stringify(v));function l(i,c,p){let $=s[i];for(let d=0;d<$.length;++d)if($[d]===p)return!1;for(let d=0;d<s.length;++d)if(s[d][c]===p)return!1;for(let d=Math.floor(i/3)*3,T=d+3;d<T;++d)for(let b=Math.floor(c/3)*3,U=b+3;b<U;++b)if(s[d][b]===p)return!1;return!0}function A(){for(let i=0;i<9;++i)for(let c=0;c<9;++c)if(s[i][c]===0)return!1;return!0}function u(i,c){if(!(i>=9)){if(c>=9){u(i+1,0);return}if(s[i][c]===0){for(let p=1;p<=9;++p)if(l(i,c,p)){if(s[i][c]=p,u(i,c+1),A())return;s[i][c]=0}}else u(i,c+1)}}return u(0,0),s}var be=(v,s)=>{const l=v.__vccOpts||v;for(const[A,u]of s)l[A]=u;return l};const Ne={class:"time"},Me={class:"sudoku"},$e={class:"row"},Ue=["onClick"],Oe={class:"candidates"},Se=["onClick"],Te={class:"actions"},Ve=ye("\u5907\u6CE8"),Le={setup(v){const s=[1,2,3,4,5,6,7,8,9],l={Answer:"Answer",Normal:"Normal",Candidate:"Candidate"};function A(t,e){for(let n=0;n<t.length;++n)for(let o=0;o<t[n].length;++o)e(t[n][o],n,o)}function u(t,e){let n=[];return A(t,(o,a,m)=>{n[a]=n[a]||[],n[a][m]=e({i:a,j:m,row:a+1,col:m+1,value:o})}),n}function i(t,e,n){return{i:t,j:e,row:t+1,col:e+1,grid:Math.floor(t/3)*3+Math.floor(e/3)+1,value:n,writable:n===0,candidates:[]}}function c(t){return u(t,({i:e,j:n})=>i(e,n,t[e][n]))}function p(t){return{value:t,className:{1:["top","left"],2:["top","center"],3:["top","right"],4:["middle","left"],5:["middle","center"],6:["middle","right"],7:["bottom","left"],8:["bottom","center"],9:["bottom","right"]}[t]}}function $(t,e=0){return{value:t,n:e}}function d(t,e,n){if(e<1||n<1||e>9||n>9)return;let o=(e-1+9)%9,a=(n-1+9)%9;return t[o][a]}function T(t){if(r.mode===l.Answer)return s.map(n=>$(n,9));let e=s.map(n=>$(n));return A(t,n=>{n.value&&e[n.value-1].n++}),e}const b=K({value:W()}),U=h(()=>Ae(b.value)),F={row:0,col:0,node:null},r=K({sudoku:null,history:[],mode:l.Normal,selected:null,candidates:[],robot:!1,autoValidate:!0,time:0,timer:null}),X=h(()=>{let t=r.time,e=t%60,n=(t-e)%60;return[(t-n*60-e)%60,n,e].map(a=>a<10?"0"+a:a).join(":")}),Y=h(()=>u(r.sudoku,t=>{let e=f.value,n=t.value,{i:o,j:a,row:m,col:B,grid:ve}=n;return{raw:n,value:r.mode===l.Answer?U.value[o][a]:n.value,className:{col:[`row-${m}`,`col-${B}`,`grid-${ve}`,...r.mode===l.Answer?[]:[n.col===e.col||n.row===e.row||n.grid===e.grid?"highlight-related":"",n.col===e.col&&n.row===e.row?"highlight-cell":"",n.value===e.value&&n.value!==0?"highlight-cell":""]],answer:[n.writable?"answer-user":"answer-default",r.mode===l.Answer?"answer-right":r.autoValidate?U.value[o][a]===n.value?"answer-right":"answer-wrong":""].filter(E=>E)},candidates:n.candidates.map(E=>{let D=p(E);return{value:D.value,className:[...D.className,D.value===e.value?"highlight-candidate":""].filter(me=>me)}})}}));function P(){r.timer&&clearTimeout(r.timer),r.timer=setTimeout(()=>{k.value===!1&&r.time++,P()},1e3)}j(b,()=>{r.sudoku=c(b.value),r.history=[],r.mode=l.Normal,r.selected=I({},F),r.candidates=T(r.sudoku),r.time=0,z(),P()},{immediate:!0});const L=h(()=>r.candidates.every(t=>t.n===9));j(L,t=>{t&&(r.history=[],r.selected=I({},F),r.timer&&clearInterval(r.timer),setTimeout(()=>{alert("done")}))},{flush:"post"});const k=h(()=>r.mode===l.Answer),Z=h(()=>{if(k.value||L.value)return!1;let{row:t,col:e}=f.value,n=d(r.sudoku,t,e);return n&&n.writable&&(n.value||n.candidates.length)}),ee=h(()=>!k.value&&r.history.length>0),te=h(()=>!k.value&&r.history.length>0),ne=h(()=>!k.value),re=h(()=>!k.value&&L.value===!1&&f.value.row!==0),N=h(()=>{const t="action-enabled",e="action-disabled";return{clear:Z.value?t:e,undo:ee.value?t:e,reset:te.value?t:e,mode:ne.value?t:e,answer:re.value?t:e,on:r.mode===l.Candidate?"candidate-on":"candidate-off"}});function oe({row:t,col:e,value:n}){if(t<1||t>9||e<1||e>9)return;let o=r.sudoku[t-1][e-1];if(o.writable!==!1){if(r.mode===l.Answer)o.value=n;else if(r.mode===l.Normal){let a=n,m=o.value;if(a===m&&a===0)return;a===m&&(a=0),r.history.push({node:o,action:()=>{o.writable&&(o.value=m)}}),o.value=a,z(o)}else if(r.mode===l.Candidate){if(n!==0&&s.includes(n)===!1)return;let a=[...o.candidates],m=a.includes(n)?a.filter(B=>B!==n):n==0?[]:[...a,n];r.history.push({node:o,action:()=>{o.candidates=a}}),o.candidates=m}}}function x(t){if(k.value)return;let{row:e,col:n}=f.value;oe({row:e,col:n,value:t})}function le(t,e,n){let o=d(r.sudoku,t,e);o.value=n,o.writable=!1;let a=r.history;for(;a.length;){let{node:m}=a[a.length-1];if(m.row!==t||m.col!==e)break;a.pop()}}function R(t=0){if(k.value)return;let e=r.history;for(;t>0&&e.length>0;){let{node:n,action:o}=e.pop();n.writable&&(t--,typeof o=="function"&&o())}}function J(t){let e=r.mode;e===t?r.mode=l.Normal:e!==l.Answer&&(r.mode=t)}const f=h(()=>{let t=r.selected;return{row:t.row,col:t.col,grid:Math.floor((t.row-1)/3)*3+Math.floor((t.col-1)/3)+1,value:t.node?t.node.value:0}});function M(t){if(t==null)return;let e=r.selected;t.row===e.row&&t.col===e.col?(e.row=e.col=0,e.node=null):(e.row=t.row,e.col=t.col,e.node=t)}const ae=t=>{k.value||t.n===9||x(t.value)},se=()=>R(1),q=()=>x(0),ie=()=>R(r.history.length),ue=()=>J(l.Candidate),ce=()=>J(l.Answer),de=()=>{let{row:t,col:e}=f.value,n=U.value[t-1][e-1];return le(t,e,n)},fe=()=>b.value=W();ke(()=>{document.addEventListener("keydown",t=>{let e=t.key;if(s.includes(+e))return x(+e);switch(e){case"ArrowLeft":M(d(r.sudoku,f.value.row,f.value.col-1));break;case"ArrowRight":M(d(r.sudoku,f.value.row,f.value.col+1));break;case"ArrowDown":M(d(r.sudoku,f.value.row+1,f.value.col));break;case"ArrowUp":M(d(r.sudoku,f.value.row-1,f.value.col));break;case"Escape":M(d(r.sudoku,f.value.row,f.value.col));break;case"Backspace":q();break}})});function z(t){t&&(r.candidates=T(r.sudoku))}return(t,e)=>(y(),_(S,null,[w("div",Ne,O(g(X)),1),w("div",Me,[(y(!0),_(S,null,V(g(Y),n=>(y(),_("div",$e,[(y(!0),_(S,null,V(n,o=>(y(),_("div",{class:C(["col",o.className.col]),onClick:a=>M(o.raw)},[o.value?(y(),_("div",{key:0,class:C(["answer",o.className.answer])},O(o.value),3)):Q("",!0),o.value===0?(y(!0),_(S,{key:1},V(o.candidates,a=>(y(),_("div",{class:C(["candidate",a.className])},O(a.value),3))),256)):Q("",!0)],10,Ue))),256))]))),256))]),w("div",Oe,[(y(!0),_(S,null,V(g(r).candidates,n=>(y(),_("div",{class:C(["the-candidate",[g(k)||n.n===9?"the-candidate-disabled":""]]),onClick:o=>ae(n)},O(n.value),11,Se))),256))]),w("div",Te,[w("div",{class:C(g(N).undo),onClick:e[0]||(e[0]=n=>se())},"\u64A4\u6D88",2),w("div",{class:C(g(N).clear),onClick:e[1]||(e[1]=n=>q())},"\u64E6\u9664",2),w("div",{class:C(g(N).reset),onClick:e[2]||(e[2]=n=>ie())},"\u6E05\u7A7A",2),w("div",{class:C(g(N).mode),onClick:e[3]||(e[3]=n=>ue())},[Ve,w("sup",{class:C(g(N).on)},O(g(r).mode===l.Candidate?"On":"Off"),3)],2),w("div",{class:C(g(N).answer),onClick:e[4]||(e[4]=n=>de())},"\u63D0\u793A",2),w("div",{onClick:e[5]||(e[5]=n=>ce())},"\u7B54\u6848"),w("div",{onClick:fe},"New")])],64))}};var xe=be(Le,[["__scopeId","data-v-02f313c2"]]);_e(xe).mount("#app");
