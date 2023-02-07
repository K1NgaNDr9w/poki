"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7529],{7529:(e,t,r)=>{r.r(t),r.d(t,{checkForSmartRefreshEpic:()=>R,enableDumbRefreshEpic:()=>I,enableRefreshEpic:()=>S,hideAdsStatusEpic:()=>J,refreshAdsEpic:()=>V,setAdStatusEpic:()=>F,setAdTimingsEpic:()=>Z,showAdsStatusEpic:()=>$,smartRefreshEpic:()=>k,startImmersiveTakeoverEpic:()=>K,stopImmersiveTakeoverEpic:()=>x});var n=r(5069),p=r(2817),i=r(6697),u=r(564),l=r(3071),o=r(1545),s=r(9127),a=r(4975),c=r(7877),h=r(4978),v=r(8966),d=r(4727),f=r(2006),y=r(533),U=r(7782),T=r(7753),m=r(4862),_=r(8813),w=r(905),E=r(4927),g=r(9317),D=r(7250),B=r(8855),A=r(8656),O=r(3748),b=r(9563);let L=Date.now();function S(e,t){return e.pipe((0,n.l)(_.JV.type,E.o8.type),(0,s.U)((()=>(0,A.Wj)(t.value))),(0,a.h)((e=>"game"===e||"preview"===e)),(0,s.U)((()=>(0,m.oI)())))}function V(e,t){let r=Date.now();return e.pipe((0,n.l)(m._g.type),(0,a.h)((()=>!(0,B.Eo)(t.value))),(0,a.h)((e=>{let{refreshType:t}=e;return Date.now()-r>=1e4||"initial"===t})),(0,c.z)((e=>{let{refreshType:n}=e;const i=(0,D.O)(t.value).map((e=>{let{code:t}=e;return(0,m.SB)({code:t,refreshType:n})}));return r=Date.now(),(0,p.of)(...i)})))}function I(e){const t=e.pipe((0,n.l)(m.xL.type,E.o8.type));return e.pipe((0,n.l)(m.oI.type),(0,h.w)((()=>(0,i.F)(6e4).pipe((0,s.U)((()=>(0,m._g)({trigger:"dumb",refreshType:"dumb"}))),(0,v.R)(t)))))}function R(e,t){return(0,u.a)(e.pipe((0,n.l)(_.JV.type),(0,d.q)(1)),e.pipe((0,n.l)(w.aw.type))).pipe((0,s.U)((e=>e[1])),(0,f.b)((e=>{(0,O.A)("sdk","details",e)})),(0,s.U)((e=>{let{version:t}=e;return t})),(0,a.h)((e=>Number(e[0])>=2)),(0,a.h)((()=>{const e=(0,A.J1)(t.value);return e&&e.allow_smart_refresh})),(0,s.U)((()=>(0,m.xL)())))}function k(e){const t=e.pipe((0,n.l)(E.o8.type)),r=[b.$4,b.Fd,b.rV],p=e.pipe((0,n.l)(w.OB.type),(0,s.U)((e=>{let{event:t}=e;return t})),(0,a.h)((e=>r.includes(e))),(0,a.h)((()=>Date.now()-L>=3e4)),(0,s.U)((e=>(0,m._g)({trigger:e,refreshType:"smart"}))),(0,f.b)((()=>{L=Date.now()})),(0,v.R)(t));return(0,l.T)(e.pipe((0,n.l)(m.xL.type),(0,f.b)((()=>{L=Date.now()})),(0,h.w)((()=>p))),e.pipe((0,n.l)(m.V6.type),(0,f.b)((()=>{L=Date.now()})),(0,y.l)()))}function K(e,t){return e.pipe((0,n.l)(w.OB.type),(0,a.h)((e=>{let{event:t}=e;return t===b.T4})),(0,s.U)((e=>{var t;return null==e||null===(t=e.data)||void 0===t?void 0:t.creativeId})),(0,s.U)((e=>({creativeId:e,config:((0,A.Br)(t.value)||{})[e]}))),(0,a.h)((e=>!!e.config)),(0,s.U)((e=>(0,m.WY)({takeover:e}))))}function x(e,t){const r=e.pipe((0,n.l)(m._g.type)),p=e.pipe((0,n.l)(E.o8.type)),i=e.pipe((0,n.l)(w.OB.type),(0,a.h)((e=>{let{event:t}=e;return t===b.$K}))),u=i.pipe((0,U.g)(5e3),(0,d.q)(1),(0,h.w)((()=>r)),(0,v.R)(p)),o=(0,g.sY)(t.value);return(0,l.T)(p.pipe((0,a.h)((()=>!!(0,g.xU)(t.value))),(0,s.U)((()=>(0,m.V6)()))),p.pipe((0,a.h)((()=>o&&o.immersiveTakeover)),(0,s.U)((()=>(0,m.ST)()))),i.pipe((0,h.w)((()=>r.pipe((0,T.T)(1),(0,s.U)((()=>(0,m.V6)())))))),u.pipe((0,s.U)((()=>(0,m.ST)()))))}function F(e){return e.pipe((0,n.l)(w.OB.type),(0,a.h)((e=>{let{event:t}=e;return[b.Zg,b.T4,b.$K].includes(t)})),(0,s.U)((e=>{let{event:t}=e;return(0,w.Iy)({event:t})})))}function Z(e){return e.pipe((0,n.l)(w.OB.type),(0,a.h)((e=>{let{event:t}=e;return[b.T4,b.cV].includes(t)})),(0,c.z)((e=>{const{data:t,event:r}=e;switch(r){case b.T4:return(0,p.of)((0,w.BZ)({duration:t.duration,currentTime:0}));case b.cV:return(0,p.of)((0,w.BZ)({duration:t.duration,currentTime:t.currentTime}));default:return o.E}})))}function $(e){return e.pipe((0,n.l)(w.OB.type),(0,a.h)((e=>{let{event:t}=e;return[b.Fd,b.rV].includes(t)})),(0,s.U)((()=>(0,w.rg)())))}function J(e){return e.pipe((0,n.l)(w.OB.type,E.o8.type),(0,a.h)((e=>{let{event:t,type:r}=e;return[b.$K,b.Uo,b.jZ].includes(t)||r===E.o8.type})),(0,s.U)((()=>(0,w.oK)())))}}}]);