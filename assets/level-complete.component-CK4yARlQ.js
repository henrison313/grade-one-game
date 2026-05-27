import{a as e,i as t,r as n}from"./config-msfdsG27.js";import{B as r,H as i,J as a,K as o,L as s,U as c,Y as l,Z as u,c as d,i as f,p,q as m,r as h}from"./index-DzK_59vN.js";import"./services-C_Dthk5B.js";import{r as g}from"./character-variants.data-BoTU5FZm.js";import"./card-collection.component-ClOORaNT.js";import{i as _,t as v}from"./hidden-levels.data-BjWro3OD.js";var y=u(l(),1),b=i(),x=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 20px;
  z-index: 1000;
`,S=c(r.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,C=c(r.div)`
  margin-bottom: 24px;
  text-align: center;
`,w=c.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${e.secondary};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`,T=c.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
`,E=c(r.div)`
  margin-top: 24px;
  text-align: center;
`,D=c.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`,O=c.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>t[e.$rarity].color};
`,k=c(r.div)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`,A=c.span`
  font-size: 24px;
`,j=c.span`
  font-size: 20px;
  font-weight: 700;
  color: ${e.star};
`,M=c(r.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${e.star};
  border-radius: 50%;
  filter: blur(1px);
  pointer-events: none;
`,N=({character:e,starsEarned:n,difficulty:r=s.EASY,onComplete:i})=>{let{playSummon:a}=d(),[o,c]=(0,y.useState)(!1),[l,u]=(0,y.useState)(!1),f=g(e.id,r),p=f?.rarity||e.rarity,m=f?.displayName||e.name;return(0,y.useEffect)(()=>{a();let e=setTimeout(()=>{c(!0)},800),t=setTimeout(()=>{c(!1),u(!0),i&&setTimeout(()=>{i()},1500)},3e3);return()=>{clearTimeout(e),clearTimeout(t)}},[a,i]),(0,b.jsxs)(x,{children:[Array.from({length:15},(e,t)=>({id:t,x:Math.random()*100,y:Math.random()*100,delay:Math.random()*2})).map(e=>(0,b.jsx)(M,{$delay:e.delay,style:{left:`${e.x}%`,top:`${e.y}%`},initial:{opacity:0,scale:0},animate:{opacity:[0,1,0],scale:[0,1,0]},transition:{duration:1.5,delay:e.delay,repeat:1/0,repeatDelay:3}},e.id)),(0,b.jsxs)(S,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:`spring`,stiffness:200,damping:20},children:[(0,b.jsx)(h,{mode:`capturing`,character:e,variantImage:f?.image,variantName:f?.displayName,variantRarity:f?.rarity,isCapturing:o}),l&&(0,b.jsxs)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,b.jsxs)(C,{children:[(0,b.jsx)(w,{children:`恭喜获得新卡牌！`}),(0,b.jsxs)(T,{children:[m,` 已收入炫卡召唤器`]})]}),(0,b.jsx)(D,{children:m}),(0,b.jsx)(O,{$rarity:p,children:t[p]?.name||`普通`}),(0,b.jsxs)(k,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:[(0,b.jsx)(A,{children:`⭐`}),(0,b.jsxs)(j,{children:[n,` 星星`]})]})]})]})]})},P={pink:`#FFB5BA`,mint:`#7FCCB0`,sky:`#89CFF0`,yellow:`#FFE66D`,coral:`#FF7F7F`,cream:`#FFF8E7`},F=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,
    rgba(255, 182, 193, 0.9) 0%,
    rgba(255, 230, 109, 0.85) 30%,
    rgba(127, 204, 176, 0.8) 50%,
    rgba(137, 207, 240, 0.85) 70%,
    rgba(230, 230, 250, 0.9) 100%
  );
  padding: 20px;
`,I=c(r.div)`
  background: ${P.cream};
  border-radius: 32px;
  padding: 36px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  border: 4px solid ${P.pink};
  box-shadow:
    0 8px 0 rgba(255, 182, 193, 0.25),
    0 20px 40px rgba(255, 182, 193, 0.2);
`,L=c(r.h1)`
  font-size: 36px;
  font-weight: 700;
  color: ${P.coral};
  margin-bottom: 16px;
`,R=c(r.div)`
  margin-bottom: 24px;
`,z=c(r.div)`
  font-size: 48px;
  font-weight: 700;
  color: ${P.yellow};
  margin-top: 8px;
`,B=c(r.p)`
  font-size: 18px;
  color: #5A5A5A;
  margin-bottom: 16px;
`,V=c(r.div)`
  font-size: 14px;
  color: #7A7A7A;
  margin-top: 8px;
`,H=()=>{let{levelId:e}=m(),[t]=a(),r=o(),{playLevelComplete:i,playBGM:c,stopBGM:l}=d(),[u,h]=(0,y.useState)(!0),[g,x]=(0,y.useState)(2),S=p(e||`1-1`)||v(e||``),C=parseInt(t.get(`stars`)||`0`,10),w=t.get(`maxStars`),T=t.get(`difficulty`)||`easy`,E=T===`medium`?s.MEDIUM:T===`hard`?s.HARD:s.EASY,D=_[E],O=w?parseInt(w,10):Math.floor((S?.questions.length||5)*n.starsPerQuestion*D.starMultiplier),k=Math.floor(O*D.starRequirement),A=Math.round(C/O*100);return(0,y.useEffect)(()=>{i(),c(`victory`);let e=setInterval(()=>{x(t=>t<=1?(clearInterval(e),h(!1),0):t-1)},1e3),t=setTimeout(()=>{h(!1)},2e3);return()=>{clearInterval(e),clearTimeout(t),l()}},[i,c,l]),S?(0,b.jsxs)(F,{children:[u&&(0,b.jsxs)(I,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[(0,b.jsx)(L,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:(()=>{if(C>=O)switch(E){case s.HARD:return`🏆 完美通关！`;case s.MEDIUM:return`⭐ 挑战成功！`;default:return`🎉 新手通关！`}else if(C>=k)switch(E){case s.HARD:return`🎯 高手过关！`;case s.MEDIUM:return`✨ 挑战通过！`;default:return`🌟 顺利过关！`}return`💪 再接再厉！`})()}),(0,b.jsxs)(R,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.3},children:[(0,b.jsx)(f,{count:Math.min(5,Math.ceil(C/(O/5))),maxCount:5,size:`large`,animate:!0}),(0,b.jsxs)(z,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:[`⭐ `,C,` / `,O]})]}),(0,b.jsxs)(B,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},children:[D.name,` - `,A,`% 星星！`]}),(0,b.jsx)(V,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},children:g>0?`${g}秒后自动收集炫卡...`:`正在进入炫卡收集...`})]}),!u&&(0,b.jsx)(N,{character:S.guardian,starsEarned:C,difficulty:E,onComplete:()=>{r(`/collection`)}})]}):(0,b.jsx)(F,{children:(0,b.jsx)(I,{children:`关卡不存在`})})};export{H as default};
//# sourceMappingURL=level-complete.component-CK4yARlQ.js.map