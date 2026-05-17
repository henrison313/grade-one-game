import{a as e,r as t}from"./config-msfdsG27.js";import{B as n,G as r,H as i,I as a,R as o,U as s,V as c,W as l,Y as u,c as d,d as f,o as p,q as m,s as h,z as g}from"./index-DAd-0kkI.js";import"./services-C_Dthk5B.js";import{i as _,t as v}from"./hidden-levels.data-P7knKDFM.js";import{a as y,i as b}from"./weapon-configs.data-ZTuWufhY.js";var x=u(m(),1),S=n(),C=c.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,w=c(o.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`,T=c(o.h2)`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.5),
    0 0 16px rgba(255, 255, 255, 0.3),
    2px 2px 0px rgba(0, 0, 0, 0.4);
  margin-top: 16px;
  letter-spacing: 2px;
`,E=c(o.p)`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.5),
    0 0 12px rgba(255, 255, 255, 0.2),
    1px 1px 0px rgba(0, 0, 0, 0.4);
  margin-top: 8px;
  letter-spacing: 1px;
`,D=c(o.div)`
  position: absolute;
  left: ${e=>e.$x}%;
  top: ${e=>e.$y}%;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  filter: blur(1px);
`,O=c(o.div)`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  filter: blur(20px);
`,k={hidden:{opacity:0,scale:.5,rotate:-15},visible:{opacity:1,scale:1,rotate:0,transition:{type:`spring`,stiffness:200,damping:20,delay:.3}}},A={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{delay:.8}}},j=({character:e,onComplete:t,autoPlay:n=!0})=>{let[r,i]=(0,x.useState)(`hidden`);(0,x.useEffect)(()=>{if(n){i(`entering`);let e=setTimeout(()=>{i(`idle`),t?.()},1500);return()=>clearTimeout(e)}},[n,t]);let a=Array.from({length:12},(e,t)=>({id:t,x:Math.random()*100,y:Math.random()*100,delay:Math.random()*1.5}));return(0,S.jsxs)(C,{children:[(0,S.jsx)(O,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5}}),a.map(e=>(0,S.jsx)(D,{$x:e.x,$y:e.y,initial:{opacity:0,scale:0},animate:{opacity:[0,1,0],scale:[0,1,0]},transition:{duration:1,delay:e.delay,repeat:1/0,repeatDelay:2}},e.id)),(0,S.jsx)(g,{children:r!==`hidden`&&(0,S.jsx)(w,{src:e.vehicleImage,alt:e.name,variants:k,initial:`hidden`,animate:`visible`})}),(0,S.jsx)(T,{variants:A,initial:`hidden`,animate:`visible`,children:e.name}),(0,S.jsx)(E,{variants:A,initial:`hidden`,animate:`visible`,transition:{delay:1},children:e.title})]})};c.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,c(o.img)`
  width: 220px;
  height: 220px;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
`,c(o.h2)`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
`,c(o.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
`,c(o.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  transform-origin: center;
`,c(o.div)`
  position: absolute;
  bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  color: ${e.secondary};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;var M=c.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 24px;
  overflow: hidden;
  padding: 24px;
`,N=c(o.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
`,P=c(o.img)`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 3px solid rgba(255, 255, 255, 0.3);
`,ee=c(o.div)`
  font-size: 16px;
  font-weight: 600;
  color: ${e.secondary};
  margin-bottom: 12px;
`,te=c(o.p)`
  font-size: 18px;
  color: white;
  text-align: center;
  line-height: 1.8;
  max-width: 80%;
`,ne=c(o.p)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  text-align: center;
`,re=c.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`,ie=c.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${t=>t.$active?e.secondary:`rgba(255, 255, 255, 0.3)`};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e.secondaryLight};
  }
`,F=c(o.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`,I=c(o.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`,L={enter:{opacity:0,y:20},center:{opacity:1,y:0,transition:{duration:.5}},exit:{opacity:0,y:-20,transition:{duration:.3}}},R=({segments:e,onComplete:n,autoPlay:r=!0,showSkip:i=!0})=>{let[a,o]=(0,x.useState)(0),[s,c]=(0,x.useState)(!1),[l,u]=(0,x.useState)(``),[f,p]=(0,x.useState)(!1),m=e[a],h=a===e.length-1;(0,x.useEffect)(()=>{if(!m||!r)return;c(!0),u(``);let e=m.text,t=0,n=setInterval(()=>{t<e.length?(u(e.slice(0,t+1)),t++):(c(!1),clearInterval(n))},50);return()=>clearInterval(n)},[m,r]),(0,x.useEffect)(()=>{if(!m||!r||m.type!==`dialogue`&&m.type!==`narration`)return;d.stop(),p(!1);let e=setTimeout(()=>{let e=m.text;if(!e||!e.trim()){p(!0);return}d.speak(e,m.speaker,()=>{console.log(`[StoryPlayer] 语音播放完成:`,e.substring(0,20)),p(!0)})},200);return()=>{clearTimeout(e),d.stop()}},[m,r]),(0,x.useEffect)(()=>()=>{d.stop()},[]),(0,x.useEffect)(()=>{if(!r||s||h||!f)return;let e=setTimeout(()=>{_()},t.storyAutoPlayInterval);return()=>clearTimeout(e)},[r,s,h,m,f]);let _=(0,x.useCallback)(()=>{d.stop(),h?n?.():o(e=>e+1)},[h,n]),v=e=>{d.stop(),o(e)};return m?(0,S.jsxs)(M,{children:[i&&(0,S.jsx)(F,{onClick:()=>{d.stop(),n?.()},whileHover:{scale:1.05},whileTap:{scale:.95},children:`跳过`}),(0,S.jsx)(g,{mode:`wait`,children:(0,S.jsxs)(N,{variants:L,initial:`enter`,animate:`center`,exit:`exit`,children:[m.speakerImage&&(0,S.jsx)(P,{src:m.speakerImage,alt:m.speaker,initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:300}}),m.speaker&&(0,S.jsx)(ee,{children:m.speaker}),m.type===`action`?(0,S.jsx)(ne,{children:l||m.text}):(0,S.jsxs)(te,{children:[r?l:m.text,s&&(0,S.jsx)(`span`,{children:`|`})]}),h&&!s&&(0,S.jsx)(I,{onClick:()=>n?.(),whileHover:{scale:1.05},whileTap:{scale:.95},children:`开始挑战`})]},a)}),e.length>1&&(0,S.jsx)(re,{children:e.map((e,t)=>(0,S.jsx)(ie,{$active:t===a,onClick:()=>v(t)},t))})]}):null},z={pink:`#FFB5BA`,yellow:`#FFE66D`,mint:`#7FCCB0`,sky:`#89CFF0`,lavender:`#E6E6FA`,coral:`#FF7F7F`,peach:`#FFCBA4`,rainbowPink:`#FF6B9D`},B=i`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.6; transform: scale(0.9) rotate(10deg); }
`,V=i`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,H=i`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`,U=i`
  0%, 100% { box-shadow: 0 0 12px rgba(255, 182, 193, 0.4); }
  50% { box-shadow: 0 0 24px rgba(255, 182, 193, 0.6), 0 0 36px rgba(255, 230, 109, 0.3); }
`,W=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(135deg,
      rgba(255, 182, 193, 0.9) 0%,
      rgba(255, 230, 109, 0.8) 25%,
      rgba(127, 204, 176, 0.8) 50%,
      rgba(137, 207, 240, 0.8) 75%,
      rgba(230, 230, 250, 0.8) 100%);
  background-size: 400% 400%;
  animation: ${V} 12s ease infinite;
  padding: 20px;
  position: relative;

  &::before {
    content: '⭐';
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 28px;
    animation: ${B} 2s ease-in-out infinite;
    opacity: 0.7;
  }

  &::after {
    content: '✨';
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-size: 32px;
    animation: ${B} 3s ease-in-out infinite 0.5s;
    opacity: 0.6;
  }
`,G=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,K=c(o.h1)`
  font-size: 26px;
  font-weight: 700;
  color: #FFF;
  text-shadow:
    2px 2px 0px ${z.rainbowPink},
    4px 4px 0px rgba(255, 182, 193, 0.3);
  letter-spacing: 2px;
`,q=c.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,J=c(o.div)`
  background:
    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 245, 0.95) 100%);
  border-radius: 32px;
  padding: 28px 32px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  border: 4px solid ${z.pink};
  box-shadow:
    0 12px 32px rgba(255, 182, 193, 0.35),
    0 4px 12px rgba(137, 207, 240, 0.2);
  position: relative;

  &::before {
    content: '🌟';
    position: absolute;
    top: -16px;
    right: 24px;
    font-size: 24px;
    animation: ${B} 2s ease-in-out infinite;
  }
`,Y=c(o.h2)`
  font-size: 24px;
  font-weight: 700;
  color: ${z.coral};
  margin-bottom: 12px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`,X=c.p`
  font-size: 15px;
  color: #7A7A7A;
  margin-bottom: 20px;
  line-height: 1.5;
`,ae=c(o.div)`
  background:
    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 245, 0.95) 100%);
  border-radius: 32px;
  padding: 28px;
  width: 100%;
  max-width: 500px;
  border: 4px solid ${z.mint};
  box-shadow:
    0 12px 32px rgba(127, 204, 176, 0.35),
    0 4px 12px rgba(137, 207, 240, 0.2);
  position: relative;

  &::before {
    content: '✦';
    position: absolute;
    top: -14px;
    left: 20px;
    font-size: 22px;
    color: ${z.mint};
    animation: ${B} 2.5s ease-in-out infinite;
  }
`,oe=c.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${z.mint};
  margin-bottom: 18px;
  text-align: center;
`,se=c(p)`
  margin-top: 24px;
  background: linear-gradient(135deg, ${z.rainbowPink} 0%, ${z.coral} 100%) !important;
  border-radius: 20px !important;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(255, 182, 193, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(255, 182, 193, 0.5);
  }
`,ce=c.div`
  margin-top: 24px;
  text-align: center;
`,Z=c.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${z.coral};
  margin-bottom: 18px;
`,le=c.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`,ue=c(o.button)`
  padding: 16px 24px;
  border-radius: 24px;
  border: 4px solid ${e=>e.$selected?z.yellow:`rgba(255, 182, 193, 0.4)`};

  background: ${e=>e.$selected?`linear-gradient(135deg,
          ${z.rainbowPink} 0%,
          ${z.yellow} 50%,
          ${z.mint} 100%)`:`rgba(255, 255, 255, 0.8)`};

  color: ${e=>e.$selected?`#FFF`:`#7A7A7A`};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  min-width: 130px;
  transition: all 0.3s ease;
  position: relative;

  ${e=>e.$selected&&s`animation: ${U} 2s ease-in-out infinite;`}

  &:hover {
    border-color: ${z.yellow};
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(255, 230, 109, 0.35);
  }

  &::after {
    content: ${e=>e.$selected?`✨`:``};
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 16px;
    animation: ${B} 1.5s ease-in-out infinite;
  }
`,de=c(o.div)`
  margin-top: 16px;
  padding: 12px 20px;
  background:
    radial-gradient(ellipse at top, rgba(255, 230, 109, 0.2) 0%, rgba(255, 182, 193, 0.15) 100%);
  border-radius: 16px;
  border: 2px solid rgba(255, 230, 109, 0.4);
  font-size: 14px;
  color: #7A7A7A;
`,fe=c(o.div)`
  margin-top: 20px;
  padding: 20px;
  background:
    radial-gradient(ellipse at top, rgba(255, 230, 109, 0.3) 0%, rgba(255, 182, 193, 0.2) 100%);
  border-radius: 20px;
  border: 3px solid ${z.yellow};
  position: relative;

  &::before {
    content: '🎁';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    animation: ${H} 2s ease-in-out infinite;
  }
`,pe=c(o.p)`
  font-size: 18px;
  font-weight: 700;
  color: ${z.coral};
  margin-bottom: 12px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`,me=c.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`,he=c.span`
  padding: 8px 14px;
  background: ${e=>e.$index%4==0?`linear-gradient(135deg, ${z.pink} 0%, ${z.coral} 100%)`:e.$index%4==1?`linear-gradient(135deg, ${z.yellow} 0%, ${z.peach} 100%)`:e.$index%4==2?`linear-gradient(135deg, ${z.mint} 0%, ${z.sky} 100%)`:`linear-gradient(135deg, ${z.lavender} 0%, ${z.pink} 100%)`};
  border-radius: 14px;
  font-size: 12px;
  font-weight: 600;
  color: #FFF;
  box-shadow: 0 3px 10px rgba(255, 182, 193, 0.25);
`,Q=c(o.p)`
  font-size: 14px;
  color: ${z.yellow};
  font-weight: 700;
  margin-top: 14px;
`,$={STORY:`story`,GUARDIAN:`guardian`,DIFFICULTY:`difficulty`,READY:`ready`},ge=()=>{let{levelId:e}=r(),t=l(),{playBGM:n,stopBGM:i}=h(),[s,c]=(0,x.useState)($.STORY),[u,d]=(0,x.useState)(a.EASY),[m,g]=(0,x.useState)(3);(0,x.useEffect)(()=>(n(`story`),()=>{i()}),[n,i]);let C=f(e||`1-1`)||v(e||``);if((0,x.useEffect)(()=>{(!C?.story||C.story.length===0)&&c($.GUARDIAN)},[C]),!C)return(0,S.jsx)(W,{children:(0,S.jsx)(q,{children:`关卡不存在`})});let w=()=>{c($.GUARDIAN)},T=()=>{c($.DIFFICULTY)},E=e=>{d(e)},D=()=>{c($.READY)};(0,x.useEffect)(()=>{if(s===$.READY){g(3);let n=setInterval(()=>{g(e=>e<=1?(clearInterval(n),0):e-1)},1e3),r=setTimeout(()=>{t(`/level/${e}/play?difficulty=${u}`)},3e3);return()=>{clearTimeout(r),clearInterval(n)}}},[s,t,e,u]);let O=()=>{t(`/levels`)},k=_[u],A=y(e||`1-1`,u),M=b(e||`1-1`,u);return(0,S.jsxs)(W,{children:[(0,S.jsxs)(G,{children:[(0,S.jsx)(K,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:C.chapterName}),(0,S.jsx)(p,{variant:`secondary`,size:`small`,onClick:O,children:`返回`})]}),(0,S.jsxs)(q,{children:[s===$.STORY&&C.story.length>0&&(0,S.jsx)(o.div,{initial:{opacity:0},animate:{opacity:1},style:{width:`100%`,maxWidth:500},children:(0,S.jsx)(R,{segments:C.story,onComplete:w,showSkip:!0})}),s===$.GUARDIAN&&(0,S.jsxs)(ae,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,S.jsx)(oe,{children:`关卡守护者`}),(0,S.jsx)(j,{character:C.guardian,onComplete:T})]}),s===$.DIFFICULTY&&(0,S.jsxs)(J,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,S.jsx)(Y,{children:C.name}),(0,S.jsx)(X,{children:C.description}),(0,S.jsxs)(ce,{children:[(0,S.jsx)(Z,{children:`✦ 选择挑战难度 ✦`}),(0,S.jsx)(le,{children:Object.values(a).map(e=>(0,S.jsx)(ue,{$selected:u===e,$difficulty:e,onClick:()=>E(e),whileHover:{scale:1.05},whileTap:{scale:.95},children:_[e].name},e))}),(0,S.jsx)(de,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:k.description},u),(0,S.jsxs)(fe,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[(0,S.jsxs)(pe,{initial:{scale:.9},animate:{scale:1},children:[`⚔️ `,M,` ⚔️`]}),(0,S.jsx)(me,{children:A.slice(0,4).map((e,t)=>(0,S.jsxs)(he,{$index:t,children:[t+1,`. `,e.name]},e.id))})]}),(0,S.jsxs)(Q,{animate:{scale:[1,1.05,1],transition:{repeat:1/0,duration:2}},children:[`⭐ 星星奖励 ×`,k.starMultiplier,` ⭐`]})]}),(0,S.jsx)(se,{variant:`primary`,size:`large`,onClick:D,children:`开始挑战 🚀`})]}),s===$.READY&&(0,S.jsxs)(J,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,S.jsx)(Y,{children:C.name}),(0,S.jsx)(X,{children:C.description}),(0,S.jsxs)(o.p,{style:{fontSize:16,color:z.coral,fontWeight:700,marginTop:12},animate:{scale:[1,1.02,1],transition:{repeat:1/0,duration:1.5}},children:[`🎯 挑战难度：`,k.name]}),(0,S.jsxs)(o.p,{style:{fontSize:16,color:z.yellow,fontWeight:700,marginTop:8},children:[`⚔️ 目标武器：`,M]}),(0,S.jsxs)(`p`,{style:{fontSize:14,color:`#7A7A7A`,marginTop:12},children:[`📝 共 `,C.questions.length,` 道题目`]}),(0,S.jsxs)(Q,{children:[`⭐ 答对每题可获得 `,Math.floor(C.starReward*k.starMultiplier),` 颗星星`]}),(0,S.jsxs)(o.p,{style:{fontSize:28,color:z.rainbowPink,fontWeight:700,marginTop:24},animate:{scale:[1,1.2,1],transition:{repeat:1/0,duration:1}},children:[`⏱️ `,m,` 秒后开始...`]})]})]})]})};export{ge as default};
//# sourceMappingURL=level-intro.component-DZBFYlsa.js.map