"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4639],{3845:(i,p,e)=>{e.r(p),e.d(p,{default:()=>C});var t=e(8661),n=e(278),r=e(4593),a=e(5858),l=e(6727),o=e(4135),s=e(8656),c=e(4927),m=e(2255),d=e(5452),u=e(4434),f,h;const y=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-SummaryTile",isReady(i){const p=this.resolve(i);return!0===this.resolved[p]&&!!e.m[p]},importAsync:()=>Promise.resolve().then(e.bind(e,4237)),requireAsync(i){const p=this.resolve(i);return this.resolved[p]=!1,this.importAsync(i).then((i=>(this.resolved[p]=!0,i)))},requireSync(i){const p=this.resolve(i);return e(p)},resolve(){return 4237}}),g=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-contentTypes-PokiKids",isReady(i){const p=this.resolve(i);return!0===this.resolved[p]&&!!e.m[p]},importAsync:()=>e.e(5759).then(e.bind(e,1515)),requireAsync(i){const p=this.resolve(i);return this.resolved[p]=!1,this.importAsync(i).then((i=>(this.resolved[p]=!0,i)))},requireSync(i){const p=this.resolve(i);return e(p)},resolve(){return 1515}}),v=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-Description",isReady(i){const p=this.resolve(i);return!0===this.resolved[p]&&!!e.m[p]},importAsync:()=>Promise.all([e.e(9674),e.e(9369)]).then(e.bind(e,3107)),requireAsync(i){const p=this.resolve(i);return this.resolved[p]=!1,this.importAsync(i).then((i=>(this.resolved[p]=!0,i)))},requireSync(i){const p=this.resolve(i);return e(p)},resolve(){return 3107}}),E=(0,l.ZP)({resolved:{},chunkName:()=>"app-components-PageLoader",isReady(i){const p=this.resolve(i);return!0===this.resolved[p]&&!!e.m[p]},importAsync:()=>Promise.resolve().then(e.bind(e,3316)),requireAsync(i){const p=this.resolve(i);return this.resolved[p]=!1,this.importAsync(i).then((i=>(this.resolved[p]=!0,i)))},requireSync(i){const p=this.resolve(i);return e(p)},resolve(){return 3316}}),k="home",b=24,A=28933;function w(i){let{homepageGames:p,content:e}=i;const r=p.splice(0,b-1),a=p.reduce(((i,p,e)=>{const t=Math.floor(e/b);return i[t]||(i[t]=[]),i[t].push(p),i}),[]),l=e.categories.filter((i=>i.mobile)).map(((i,p)=>{const e="category";return t.default.createElement(y,{contentType:"basic-category",data:i,key:"c-".concat(i.id),type:e,list:e,idx:p,componentKey:k})}));return[[[r,...a].map(((i,p)=>0===p?t.default.createElement(u.k,null,i):t.default.createElement(n.Z,{noWrapper:!0,whenVisible:!0},t.default.createElement(u.k,null,i))))],[t.default.createElement(n.Z,{whenVisible:!0},l)]]}function Z(i){let{homepageGames:p,content:e}=i;const r=e.categories.filter((i=>i.id<=9)).map((i=>{const p="promoted-category";return t.default.createElement(y,{contentType:p,data:i,key:"c-".concat(i.id),type:"category",list:p,componentKey:k})})),a=e.categories.filter((i=>i.id>9)).map((i=>{const p="basic-category";return t.default.createElement(y,{contentType:p,data:i,key:"c-".concat(i.id),type:"category",list:p,componentKey:k})})),l=[...p.splice(0,10)],o=[...p];return[[t.default.createElement(n.Z,{on:"mouseover"},t.default.createElement(d.NG,null,l.map((i=>t.default.createElement("li",null,i))))),t.default.createElement(n.Z,{on:"mouseover"},o)],[t.default.createElement(n.Z,{on:"mouseover"},r),f||(f=t.default.createElement(n.Z,{ssrOnly:!0},t.default.createElement(g,null))),t.default.createElement(n.Z,{on:"mouseover"},a)]]}function T(i){let{page:p,isMobile:e}=i;const{content:n}=p,{homepage:r}=n,a=e?(0,m.Pi)(r):r;let l=0,o=0;const s=a.map((i=>{const p="most-played";if(e){const n=t.default.createElement(d.tu,{isMobile:e,idx:l,trackingIndex:o,data:i,key:"g-".concat(i.id),type:"game",list:p,componentKey:k});return o++,l++,l>=b&&(l=0),n}if(i.id===A)return t.default.createElement(d.U4,{key:"context-".concat(k,"-").concat(i.id),list:"multiverse-promo",data:i,idx:0,componentKey:k});const n=t.default.createElement(d.tu,{isMobile:e,idx:o,trackingIndex:o,data:i,key:"g-".concat(i.id),type:"game",list:p,componentKey:k});return o++,n}));return e?w({homepageGames:s,content:n}):Z({homepageGames:s,content:n})}function C(){if("home"!==(0,a.v9)((i=>(0,s.Wj)(i))))return h||(h=t.default.createElement(E,{forceLoadingState:!0}));const i=(0,a.I0)(),p=(0,a.v9)((i=>(0,s.Zp)(i))),{isMobile:e}=(0,t.useContext)(o.kn),l=(0,a.v9)((i=>(0,s.GD)(i)));(0,t.useEffect)((()=>{i((0,c.ZB)({path:l}))}),[]);const[m,d]=T({page:p,isMobile:e});return t.default.createElement(t.default.Fragment,null,!!p.jsonLD&&t.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(p.jsonLD)}}),t.default.createElement(r.q,null,p.meta.title&&t.default.createElement("title",null,p.meta.title),p.meta.description&&t.default.createElement("meta",{name:"description",content:p.meta.description}),t.default.createElement("link",{key:"canonical",rel:"canonical",href:p.meta.canonical}),(p.meta.alternates||[]).map((i=>{let{href:p,hrefLang:e}=i;return t.default.createElement("link",{key:e,rel:"alternate",href:p,hrefLang:e})})),p.og&&Object.entries(p.og).map((i=>{let[p,e]=i;return t.default.createElement("meta",{property:"og:".concat(p),content:e})})),p.twitter&&Object.entries(p.twitter).map((i=>{let[p,e]=i;return t.default.createElement("meta",{property:"twitter:".concat(p),content:e})}))),e&&t.default.createElement(t.default.Fragment,null,m,t.default.createElement(u.k,null,d)),!e&&t.default.createElement(t.default.Fragment,null,t.default.createElement(u.s,null,m),t.default.createElement(u.s,null,d)),t.default.createElement(n.Z,{ssrOnly:!0,noWrapper:!0},t.default.createElement(v,{data:p.description})))}},4434:(i,p,e)=>{e.d(p,{k:()=>a,s:()=>l});var t=e(1893),n=e(3032),r=e(5452);const a=t.ZP.div.withConfig({componentId:"sc-13nflho-0"})([""," & + &{&:before{display:none}}","{grid-template-areas:'... ip0 ip0' '... ip0 ip0' '... ... ...' 'ip1 ip1 ...' 'ip1 ip1 ...' '... ... ...' '... ip2 ip2' '... ip2 ip2' '... ... ...' 'ip3 ip3 ...' 'ip3 ip3 ...' '... ... ...';}","{--gridTemplateColumns:5;grid-template-areas:'... ... ip0 ip0 ...' 'ip1 ip1 ip0 ip0 ...' 'ip1 ip1 ... ... ...' 'ip2 ip2 ip2 ... ...' 'ip2 ip2 ip2 ip3 ip3' 'ip2 ip2 ip2 ip3 ip3' '... ... ip4 ip4 ...' '... ... ip4 ip4 ...' 'ip5 ip5 ip6 ip6 ip6' 'ip5 ip5 ip6 ip6 ip6' '... ... ip6 ip6 ip6';}","{--gridTemplateColumns:6;grid-template-areas:'... ip0 ip0 ... ... ...' '... ip0 ip0 ... ip1 ip1' 'ip2 ip2 ... ... ip1 ip1' 'ip2 ip2 ... ip3 ip3 ip3' 'ip4 ip4 ip4 ip3 ip3 ip3' 'ip4 ip4 ip4 ip3 ip3 ip3' 'ip4 ip4 ip4 ip5 ip5 ip5' '... ... ... ip5 ip5 ip5' '... ip6 ip6 ip5 ip5 ip5' '... ip6 ip6 ... ... ...';}","{--gridTemplateColumns:8;grid-template-areas:'... ip0 ip0 ... ... ... ... ...' '... ip0 ip0 ip1 ip1 ip1 ip2 ip2' 'ip3 ip3 ... ip1 ip1 ip1 ip2 ip2' 'ip3 ip3 ... ip1 ip1 ip1 ip4 ip4' 'ip5 ip5 ip5 ip6 ip6 ip6 ip4 ip4' 'ip5 ip5 ip5 ip6 ip6 ip6 ip7 ip7' 'ip5 ip5 ip5 ip6 ip6 ip6 ip7 ip7' 'ip8 ip8 ip9 ip9 ip10 ip10 ... ...' 'ip8 ip8 ip9 ip9 ip10 ip10 ... ...';}"],r.k6,(0,n.w5)(1,5),(0,n.w5)(5,6),(0,n.w5)(6,8),(0,n.w5)(8,18)),l=t.ZP.div.withConfig({componentId:"sc-13nflho-1"})([""," & + &{&:before{display:none}}","{--gridTemplateColumns:7;grid-template-areas:'...  ...  ip0  ip0  ip0  ip1  ip1' '...  ...  ip0  ip0  ip0  ip1  ip1' 'ip2  ip2  ip0  ip0  ip0  ...  ...' 'ip2  ip2  ...  ip3  ip3  ...  ...' '...  ...  ...  ip3  ip3  imp  imp' '...  ...  ...  ...  ...  imp  imp' 'ip4  ip4  ip4  ...  ...  ...  ...' 'ip4  ip4  ip4  ...  ip5  ip5  ...' 'ip4  ip4  ip4  ...  ip5  ip5  ...' '...  ...  ip6  ip6  ...  ...  ...' '...  ...  ip6  ip6  ...  ...  ...' '...  ...  ...  ip7  ip7  ip7  ...' '...  ...  ...  ip7  ip7  ip7  ...' 'ip8  ip8  ...  ip7  ip7  ip7  ...' 'ip8  ip8  ...  ...  ...  ip9  ip9' '...  ...  ...  ...  ...  ip9  ip9' 'ip10 ip10 ip10 ...  ip12 ip12 ...' 'ip10 ip10 ip10 ...  ip12 ip12 ...' 'ip10 ip10 ip10 ...  ...  ...  ...' '...  ...  ip13 ip13 ...  ...  ...' '...  ...  ip13 ip13 ip11 ip11 ip11' '...  ...  ...  ...  ip11 ip11 ip11' '...  ...  ...  ...  ip11 ip11 ip11' 'ip14 ip14 ...  ...  ...  ...  ...' 'ip14 ip14 ...  ...  ...  ...  ...' '...  ...  ip15 ip15 ...  ...  ...' '...  ...  ip15 ip15 ...  ...  ...' '...  ...  ...  ip16 ip16 ...  ...' '...  ip17 ip17 ip16 ip16 ...  ...' '...  ip17 ip17 ...  ...  ip18 ip18' '...  ...  ...  ...  ...  ip18 ip18';}","{--gridTemplateColumns:9;grid-template-areas:'...  ...  ip0  ip0  ip0  ip2  ip2  ip3  ip3' 'imp  imp  ip0  ip0  ip0  ip2  ip2  ip3  ip3' 'imp  imp  ip0  ip0  ip0  ip1  ip1  ip1  ...' '...  ...  ...  ip5  ip5  ip1  ip1  ip1  ...' '...  ip4  ip4  ip5  ip5  ip1  ip1  ip1  ...' '...  ip4  ip4  ip7  ip7  ...  ip8  ip8  ...' '...  ip6  ip6  ip7  ip7  ...  ip8  ip8  ...' '...  ip6  ip6  ...  ...  ...  ...  ...  ...' '...  ...  ip9  ip9  ip9  ...  ip12 ip12 ...' '...  ...  ip9  ip9  ip9  ...  ip12 ip12 ...' '...  ...  ip9  ip9  ip9  ...  ...  ...  ...' 'ip13 ip13 ...  ...  ...  ...  ...  ...  ...' 'ip13 ip13 ...  ...  ...  ...  ip10 ip10 ip10' '...  ...  ...  ...  ...  ...  ip10 ip10 ip10' '...  ip14 ip14 ...  ...  ...  ip10 ip10 ip10' '...  ip14 ip14 ...  ...  ...  ...  ...  ...' '...  ...  ...  ...  ...  ...  ...  ...  ...' '...  ...  ...  ...  ip11 ip11 ip11 ...  ...' '...  ...  ...  ...  ip11 ip11 ip11 ...  ...' '...  ip15 ip15 ...  ip11 ip11 ip11 ...  ...' '...  ip15 ip15 ip16 ip16 ...  ...  ...  ...' '...  ...  ...  ip16 ip16 ...  ...  ...  ...' '...  ...  ...  ...  ...  ...  ...  ip17 ip17' '...  ...  ...  ...  ...  ...  ...  ip17 ip17';}","{--gridTemplateColumns:11;grid-template-areas:'...  ...  ip0  ip0  ip0  imp  imp  ip2  ip2  ip3  ip3' 'ip4  ip4  ip0  ip0  ip0  imp  imp  ip2  ip2  ip3  ip3' 'ip4  ip4  ip0  ip0  ip0  ip1  ip1  ip1  ...  ip5  ip5' '...  ...  ...  ...  ...  ip1  ip1  ip1  ...  ip5  ip5' '...  ip6  ip6  ip7  ip7  ip1  ip1  ip1  ...  ip8  ip8' '...  ip6  ip6  ip7  ip7  ...  ...  ...  ...  ip8  ip8' '...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...' '...  ...  ...  ...  ...  ...  ip9  ip9  ip9  ...  ...' 'ip10 ip10 ...  ...  ...  ...  ip9  ip9  ip9  ...  ...' 'ip10 ip10 ip11 ip11 ...  ...  ip9  ip9  ip9  ...  ...' '...  ...  ip11 ip11 ...  ...  ...  ...  ...  ...  ...' '...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...' '...  ...  ...  ip12 ip12 ip12 ...  ...  ...  ...  ...' '...  ...  ...  ip12 ip12 ip12 ...  ip13 ip13 ...  ...' '...  ...  ...  ip12 ip12 ip12 ...  ip13 ip13 ...  ...' '...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...' '...  ip14 ip14 ...  ...  ...  ...  ...  ...  ip15 ip15' '...  ip14 ip14 ip16 ip16 ...  ...  ...  ...  ip15 ip15' '...  ...  ...  ip16 ip16 ...  ...  ...  ...  ...  ...';}","{--gridTemplateColumns:12;grid-template-areas:'...  ...  ip0  ip0  ip0  ip2  ip2  ip3  ip3  ip4  ip4  ...' 'imp  imp  ip0  ip0  ip0  ip2  ip2  ip3  ip3  ip4  ip4  ...' 'imp  imp  ip0  ip0  ip0  ip1  ip1  ip1  ...  ip5  ip5  ...' '...  ...  ...  ...  ...  ip1  ip1  ip1  ...  ip5  ip5  ...' '...  ip6  ip6  ip7  ip7  ip1  ip1  ip1  ...  ip8  ip8  ...' '...  ip6  ip6  ip7  ip7  ...  ...  ...  ...  ip8  ip8  ...' '...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...' '...  ...  ...  ...  ...  ...  ...  ip9  ip9  ...  ...  ...' 'ip10 ip10 ...  ...  ...  ...  ...  ip9  ip9  ...  ...  ...' 'ip10 ip10 ip11 ip11 ...  ...  ...  ...  ...  ...  ...  ...' '...  ...  ip11 ip11 ...  ...  ...  ...  ...  ...  ...  ...' '...  ...  ...  ...  ...  ...  ip12 ip12 ...  ...  ...  ...' '...  ...  ...  ...  ...  ...  ip12 ip12 ...  ...  ...  ...' '...  ip13 ip13 ...  ...  ...  ...  ...  ...  ...  ...  ...' '...  ip13 ip13 ...  ...  ...  ...  ...  ...  ip14 ip14 ...' '...  ...  ...  ...  ...  ...  ...  ...  ...  ip14 ip14 ...';}","{--gridTemplateColumns:14;grid-template-areas:'...  ...  ip0  ip0  ip0  imp  imp  ...  ...  ...  ...  ...  ip4  ip4' '...  ...  ip0  ip0  ip0  imp  imp  ...  ip3  ip3  ip3  ...  ip4  ip4' 'ip2  ip2  ip0  ip0  ip0  ...  ...  ...  ip3  ip3  ip3  ...  ip5  ip5' 'ip2  ip2  ...  ...  ...  ip1  ip1  ip1  ip3  ip3  ip3  ...  ip5  ip5' 'ip6  ip6  ...  ip7  ip7  ip1  ip1  ip1  ip8  ip8  ip9  ip9  ...  ...' 'ip6  ip6  ...  ip7  ip7  ip1  ip1  ip1  ip8  ip8  ip9  ip9  ...  ...' '...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ... ' '...  ...  ...  ...  ...  ...  ...  ...  ip11 ip11 ip11 ...  ...  ... ' 'ip12 ip12 ...  ...  ...  ...  ...  ...  ip11 ip11 ip11 ...  ...  ... ' 'ip12 ip12 ...  ...  ...  ...  ...  ...  ip11 ip11 ip11 ...  ...  ... ' '...  ...  ip13 ip13 ...  ...  ...  ...  ...  ...  ...  ...  ...  ... ' '...  ...  ip13 ip13 ...  ...  ...  ...  ...  ...  ...  ...  ...  ... ' '...  ...  ...  ...  ...  ...  ip14 ip14 ...  ...  ...  ip15 ip15 ip15' 'ip10 ip10 ...  ...  ...  ...  ip14 ip14 ...  ...  ...  ip15 ip15 ip15' 'ip10 ip10 ...  ...  ...  ...  ...  ...  ...  ...  ...  ip15 ip15 ip15';}","{--gridTemplateColumns:17;grid-template-areas:'...  ...  ip0  ip0  ip0  ...  ...  ...  ...  ...  ...  ...  ...  ip7  ip7  ip8  ip8' '...  ...  ip0  ip0  ip0  ip4  ip4  ip5  ip5  ip2  ip2  ip2  ...  ip7  ip7  ip8  ip8' '...  ip9  ip0  ip0  ip0  ip4  ip4  ip5  ip5  ip2  ip2  ip2  ip6  ip6  ip3  ip3  ip3' 'imp  imp  ip10 ip10 ip11 ip11 ip1  ip1  ip1  ip2  ip2  ip2  ip6  ip6  ip3  ip3  ip3' 'imp  imp  ip10 ip10 ip11 ip11 ip1  ip1  ip1  ip12 ip12 ip13 ip13 ...  ip3  ip3  ip3' 'ip14 ip15 ip15 ip16 ip16 ...  ip1  ip1  ip1  ip12 ip12 ip13 ip13 ip17 ip17 ip18 ip18' '...  ip15 ip15 ip16 ip16 ...  ip20 ip20 ip21 ip21 ip22 ip22 ...  ip17 ip17 ip18 ip18' '...  ip19 ...  ...  ...  ...  ip20 ip20 ip21 ip21 ip22 ip22 ...  ...  ...  ...  ... ' '...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ... ' 'ip24 ip24 ...  ...  ...  ...  ...  ...  ...  ...  ip23 ip23 ip23 ...  ...  ...  ... ' 'ip24 ip24 ...  ...  ...  ...  ip26 ip26 ...  ...  ip23 ip23 ip23 ...  ...  ...  ... ' '...  ...  ip25 ip25 ...  ...  ip26 ip26 ...  ...  ip23 ip23 ip23 ...  ...  ...  ... ' '...  ...  ip25 ip25 ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ip27 ip27' '...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ...  ip27 ip27';}"],r.k6,(0,n.w5)(1,9),(0,n.w5)(9,11),(0,n.w5)(11,12),(0,n.w5)(12,14),(0,n.w5)(14,17),(0,n.w5)(17,18))}}]);