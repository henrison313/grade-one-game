import{a as e,r as t}from"./config-msfdsG27.js";import{B as n,G as r,H as i,K as a,L as o,U as s,V as c,W as l,Y as u,Z as d,c as f,d as p,l as m,o as h,p as g,q as _,u as v}from"./index-DzK_59vN.js";import"./services-C_Dthk5B.js";import{i as y,t as b}from"./hidden-levels.data-BjWro3OD.js";import{a as x,i as S}from"./weapon-configs.data-D_wrGYxp.js";var C=d(u(),1),w=i(),T=s.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,E=s(n.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`,D=s(n.h2)`
  font-size: 28px;
  font-weight: 800;
  color: #FFFFFF;
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.5),
    0 0 16px rgba(255, 255, 255, 0.3),
    2px 2px 0px rgba(0, 0, 0, 0.4);
  margin-top: 16px;
  letter-spacing: 2px;
`,O=s(n.p)`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.5),
    0 0 12px rgba(255, 255, 255, 0.2),
    1px 1px 0px rgba(0, 0, 0, 0.4);
  margin-top: 8px;
  letter-spacing: 1px;
`,k=s(n.div)`
  position: absolute;
  left: ${e=>e.$x}%;
  top: ${e=>e.$y}%;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  filter: blur(1px);
`,A=s(n.div)`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  filter: blur(20px);
`,j={hidden:{opacity:0,scale:.5,rotate:-15},visible:{opacity:1,scale:1,rotate:0,transition:{type:`spring`,stiffness:200,damping:20,delay:.3}}},M={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{delay:.8}}},N=({character:e,onComplete:t,autoPlay:n=!0})=>{let[r,i]=(0,C.useState)(`hidden`);(0,C.useEffect)(()=>{if(n){i(`entering`);let e=setTimeout(()=>{i(`idle`),t?.()},1500);return()=>clearTimeout(e)}},[n,t]);let a=Array.from({length:12},(e,t)=>({id:t,x:Math.random()*100,y:Math.random()*100,delay:Math.random()*1.5}));return(0,w.jsxs)(T,{children:[(0,w.jsx)(A,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.5}}),a.map(e=>(0,w.jsx)(k,{$x:e.x,$y:e.y,initial:{opacity:0,scale:0},animate:{opacity:[0,1,0],scale:[0,1,0]},transition:{duration:1,delay:e.delay,repeat:1/0,repeatDelay:2}},e.id)),(0,w.jsx)(c,{children:r!==`hidden`&&(0,w.jsx)(E,{src:e.vehicleImage,alt:e.name,variants:j,initial:`hidden`,animate:`visible`})}),(0,w.jsx)(D,{variants:M,initial:`hidden`,animate:`visible`,children:e.name}),(0,w.jsx)(O,{variants:M,initial:`hidden`,animate:`visible`,transition:{delay:1},children:e.title})]})};s.div`
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,s(n.img)`
  width: 220px;
  height: 220px;
  object-fit: contain;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
  will-change: transform, opacity, filter;
`,s(n.h2)`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
`,s(n.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  will-change: transform;
`,s(n.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  transform-origin: center;
  will-change: transform, opacity;
`,s(n.div)`
  position: absolute;
  bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  color: ${e.secondary};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;var P=s.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 24px;
  overflow: hidden;
  padding: 24px;
`,F=s(n.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
`,ee=s(n.img)`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 50%;
  margin-bottom: 16px;
  border: 3px solid rgba(255, 255, 255, 0.3);
`,te=s(n.div)`
  font-size: 16px;
  font-weight: 600;
  color: ${e.secondary};
  margin-bottom: 12px;
`,ne=s(n.p)`
  font-size: 18px;
  color: white;
  text-align: center;
  line-height: 1.8;
  max-width: 80%;
`,re=s(n.p)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  text-align: center;
`,ie=s.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`,ae=s.button`
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
`,oe=s(n.button)`
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
`,I=s(n.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`,L=s(n.div)`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 60px;
  padding: 10px 14px;
  background: rgba(255, 193, 7, 0.9);
  color: #333;
  border-radius: 10px;
  font-size: 13px;
  line-height: 1.5;
  z-index: 10;
  cursor: pointer;
`,R={enter:{opacity:0,y:20},center:{opacity:1,y:0,transition:{duration:.5}},exit:{opacity:0,y:-20,transition:{duration:.3}}},z=({levelId:e,segments:n,onComplete:r,autoPlay:i=!0,showSkip:a=!0})=>{let[o,s]=(0,C.useState)(0),[l,u]=(0,C.useState)(!1),[d,f]=(0,C.useState)(``),[h,g]=(0,C.useState)(!1),[_,v]=(0,C.useState)(!1),y=(0,C.useRef)(!1),b=n[o],x=o===n.length-1;(0,C.useEffect)(()=>{e&&n.length>0&&m.preloadStoryAudio(e,n)},[e,n]),(0,C.useEffect)(()=>{if(!b||!i)return;u(!0),f(``);let e=b.text,t=0,n=setInterval(()=>{t<e.length?(f(e.slice(0,t+1)),t++):(u(!1),clearInterval(n))},50);return()=>clearInterval(n)},[b,i]),(0,C.useEffect)(()=>{if(!b||!i||b.type!==`dialogue`&&b.type!==`narration`)return;m.stop(),g(!1);let e=setTimeout(()=>{!y.current&&m.needsLocalVoice()&&(p.getUserData().settings?.voiceTipDismissed||v(!0));let e=b.text;if(!e||!e.trim()){g(!0);return}m.speak(e,b.speaker,()=>{console.log(`[StoryPlayer] 语音播放完成:`,e.substring(0,20)),g(!0)},o)},200);return()=>{clearTimeout(e),m.stop()}},[b,i]),(0,C.useEffect)(()=>()=>{m.stop()},[]),(0,C.useEffect)(()=>{if(!i||l||x||!h)return;let e=setTimeout(()=>{S()},t.storyAutoPlayInterval);return()=>clearTimeout(e)},[i,l,x,b,h]);let S=(0,C.useCallback)(()=>{m.stop(),x?r?.():s(e=>e+1)},[x,r]),T=e=>{m.stop(),s(e)};return b?(0,w.jsxs)(P,{children:[(0,w.jsx)(c,{children:_&&(0,w.jsx)(L,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},onClick:()=>{v(!1),y.current=!0;let e=p.getUserData();p.saveUserData({...e,settings:{...e.settings,voiceTipDismissed:!0}})},children:`语音提示：当前浏览器缺少本地中文语音，故事朗读可能无法正常播放。建议安装 Windows 中文语音（设置→时间和语言→语音→添加"中文(简体，中国)"），或使用 Edge 浏览器。点击关闭`})}),a&&(0,w.jsx)(oe,{onClick:()=>{m.stop(),r?.()},whileHover:{scale:1.05},whileTap:{scale:.95},children:`跳过`}),(0,w.jsx)(c,{mode:`wait`,children:(0,w.jsxs)(F,{variants:R,initial:`enter`,animate:`center`,exit:`exit`,children:[b.speakerImage&&(0,w.jsx)(ee,{src:b.speakerImage,alt:b.speaker,initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:300}}),b.speaker&&(0,w.jsx)(te,{children:b.speaker}),b.type===`action`?(0,w.jsx)(re,{children:d||b.text}):(0,w.jsxs)(ne,{children:[i?d:b.text,l&&(0,w.jsx)(`span`,{children:`|`})]}),x&&!l&&(0,w.jsx)(I,{onClick:()=>r?.(),whileHover:{scale:1.05},whileTap:{scale:.95},children:`开始挑战`})]},o)}),n.length>1&&(0,w.jsx)(ie,{children:n.map((e,t)=>(0,w.jsx)(ae,{$active:t===o,onClick:()=>T(t)},t))})]}):null},B={pink:`#FFB5BA`,yellow:`#FFE66D`,mint:`#7FCCB0`,sky:`#89CFF0`,lavender:`#E6E6FA`,coral:`#FF7F7F`,peach:`#FFCBA4`,rainbowPink:`#FF6B9D`},V=l`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.6; transform: scale(0.9) rotate(10deg); }
`,H=l`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,U=l`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`,W=l`
  0%, 100% { box-shadow: 0 0 12px rgba(255, 182, 193, 0.4); }
  50% { box-shadow: 0 0 24px rgba(255, 182, 193, 0.6), 0 0 36px rgba(255, 230, 109, 0.3); }
`,G=s.div`
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
  animation: ${H} 12s ease infinite;
  padding: 20px;
  position: relative;

  &::before {
    content: '⭐';
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 28px;
    animation: ${V} 2s ease-in-out infinite;
    opacity: 0.7;
  }

  &::after {
    content: '✨';
    position: absolute;
    bottom: 40px;
    right: 40px;
    font-size: 32px;
    animation: ${V} 3s ease-in-out infinite 0.5s;
    opacity: 0.6;
  }
`,K=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,se=s(n.h1)`
  font-size: 26px;
  font-weight: 700;
  color: #FFF;
  text-shadow:
    2px 2px 0px ${B.rainbowPink},
    4px 4px 0px rgba(255, 182, 193, 0.3);
  letter-spacing: 2px;
`,q=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`,J=s(n.div)`
  background:
    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 245, 0.95) 100%);
  border-radius: 32px;
  padding: 28px 32px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  border: 4px solid ${B.pink};
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
    animation: ${V} 2s ease-in-out infinite;
  }
`,Y=s(n.h2)`
  font-size: 24px;
  font-weight: 700;
  color: ${B.coral};
  margin-bottom: 12px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`,X=s.p`
  font-size: 15px;
  color: #7A7A7A;
  margin-bottom: 20px;
  line-height: 1.5;
`,ce=s(n.div)`
  background:
    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 245, 0.95) 100%);
  border-radius: 32px;
  padding: 28px;
  width: 100%;
  max-width: 500px;
  border: 4px solid ${B.mint};
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
    color: ${B.mint};
    animation: ${V} 2.5s ease-in-out infinite;
  }
`,le=s.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${B.mint};
  margin-bottom: 18px;
  text-align: center;
`,ue=s(h)`
  margin-top: 24px;
  background: linear-gradient(135deg, ${B.rainbowPink} 0%, ${B.coral} 100%) !important;
  border-radius: 20px !important;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(255, 182, 193, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(255, 182, 193, 0.5);
  }
`,de=s.div`
  margin-top: 24px;
  text-align: center;
`,fe=s.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${B.coral};
  margin-bottom: 18px;
`,pe=s.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`,me=s(n.button)`
  padding: 16px 24px;
  border-radius: 24px;
  border: 4px solid ${e=>e.$selected?B.yellow:`rgba(255, 182, 193, 0.4)`};

  background: ${e=>e.$selected?`linear-gradient(135deg,
          ${B.rainbowPink} 0%,
          ${B.yellow} 50%,
          ${B.mint} 100%)`:`rgba(255, 255, 255, 0.8)`};

  color: ${e=>e.$selected?`#FFF`:`#7A7A7A`};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  min-width: 130px;
  transition: all 0.3s ease;
  position: relative;

  ${e=>e.$selected&&r`animation: ${W} 2s ease-in-out infinite;`}

  &:hover {
    border-color: ${B.yellow};
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(255, 230, 109, 0.35);
  }

  &::after {
    content: ${e=>e.$selected?`✨`:``};
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 16px;
    animation: ${V} 1.5s ease-in-out infinite;
  }
`,he=s(n.div)`
  margin-top: 16px;
  padding: 12px 20px;
  background:
    radial-gradient(ellipse at top, rgba(255, 230, 109, 0.2) 0%, rgba(255, 182, 193, 0.15) 100%);
  border-radius: 16px;
  border: 2px solid rgba(255, 230, 109, 0.4);
  font-size: 14px;
  color: #7A7A7A;
`,Z=s(n.div)`
  margin-top: 20px;
  padding: 20px;
  background:
    radial-gradient(ellipse at top, rgba(255, 230, 109, 0.3) 0%, rgba(255, 182, 193, 0.2) 100%);
  border-radius: 20px;
  border: 3px solid ${B.yellow};
  position: relative;

  &::before {
    content: '🎁';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    animation: ${U} 2s ease-in-out infinite;
  }
`,ge=s(n.p)`
  font-size: 18px;
  font-weight: 700;
  color: ${B.coral};
  margin-bottom: 12px;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
`,_e=s.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`,ve=s.span`
  padding: 8px 14px;
  background: ${e=>e.$index%4==0?`linear-gradient(135deg, ${B.pink} 0%, ${B.coral} 100%)`:e.$index%4==1?`linear-gradient(135deg, ${B.yellow} 0%, ${B.peach} 100%)`:e.$index%4==2?`linear-gradient(135deg, ${B.mint} 0%, ${B.sky} 100%)`:`linear-gradient(135deg, ${B.lavender} 0%, ${B.pink} 100%)`};
  border-radius: 14px;
  font-size: 12px;
  font-weight: 600;
  color: #FFF;
  box-shadow: 0 3px 10px rgba(255, 182, 193, 0.25);
`,Q=s(n.p)`
  font-size: 14px;
  color: ${B.yellow};
  font-weight: 700;
  margin-top: 14px;
`,$={STORY:`story`,GUARDIAN:`guardian`,DIFFICULTY:`difficulty`,READY:`ready`},ye=()=>{let{levelId:e}=_(),t=a(),{playBGM:r,stopBGM:i}=f(),[s,c]=(0,C.useState)($.STORY),[l,u]=(0,C.useState)(o.EASY),[d,p]=(0,C.useState)(3);(0,C.useEffect)(()=>(r(`story`),()=>{i()}),[r,i]);let m=g(e||`1-1`)||b(e||``);if((0,C.useEffect)(()=>{(async()=>{await v.preloadBGM(`battle`),await v.preloadSFX([`correct`,`wrong`,`click`,`drag`,`drop`,`star-earn`,`combo-1`,`combo-5`,`combo-10`]),x(e||`1-1`,o.EASY).forEach(e=>{if(e.iconImage){let t=new Image;t.src=e.iconImage}})})().catch(()=>{})},[e]),(0,C.useEffect)(()=>{(!m?.story||m.story.length===0)&&c($.GUARDIAN)},[m]),!m)return(0,w.jsx)(G,{children:(0,w.jsx)(q,{children:`关卡不存在`})});let T=()=>{c($.GUARDIAN)},E=()=>{c($.DIFFICULTY)},D=e=>{u(e)},O=()=>{c($.READY)};(0,C.useEffect)(()=>{if(s===$.READY){p(3);let n=setInterval(()=>{p(e=>e<=1?(clearInterval(n),0):e-1)},1e3),r=setTimeout(()=>{t(`/level/${e}/play?difficulty=${l}`)},3e3);return()=>{clearTimeout(r),clearInterval(n)}}},[s,t,e,l]);let k=()=>{t(`/levels`)},A=y[l],j=x(e||`1-1`,l),M=S(e||`1-1`,l);return(0,w.jsxs)(G,{children:[(0,w.jsxs)(K,{children:[(0,w.jsx)(se,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:m.chapterName}),(0,w.jsx)(h,{variant:`secondary`,size:`small`,onClick:k,children:`返回`})]}),(0,w.jsxs)(q,{children:[s===$.STORY&&m.story.length>0&&(0,w.jsx)(n.div,{initial:{opacity:0},animate:{opacity:1},style:{width:`100%`,maxWidth:500},children:(0,w.jsx)(z,{levelId:e||`1-1`,segments:m.story,onComplete:T,showSkip:!0})}),s===$.GUARDIAN&&(0,w.jsxs)(ce,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,w.jsx)(le,{children:`关卡守护者`}),(0,w.jsx)(N,{character:m.guardian,onComplete:E})]}),s===$.DIFFICULTY&&(0,w.jsxs)(J,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,w.jsx)(Y,{children:m.name}),(0,w.jsx)(X,{children:m.description}),(0,w.jsxs)(de,{children:[(0,w.jsx)(fe,{children:`✦ 选择挑战难度 ✦`}),(0,w.jsx)(pe,{children:Object.values(o).map(e=>(0,w.jsx)(me,{$selected:l===e,$difficulty:e,onClick:()=>D(e),whileHover:{scale:1.05},whileTap:{scale:.95},children:y[e].name},e))}),(0,w.jsx)(he,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:A.description},l),(0,w.jsxs)(Z,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[(0,w.jsxs)(ge,{initial:{scale:.9},animate:{scale:1},children:[`⚔️ `,M,` ⚔️`]}),(0,w.jsx)(_e,{children:j.slice(0,4).map((e,t)=>(0,w.jsxs)(ve,{$index:t,children:[t+1,`. `,e.name]},e.id))})]}),(0,w.jsxs)(Q,{animate:{scale:[1,1.05,1],transition:{repeat:1/0,duration:2}},children:[`⭐ 星星奖励 ×`,A.starMultiplier,` ⭐`]})]}),(0,w.jsx)(ue,{variant:`primary`,size:`large`,onClick:O,children:`开始挑战 🚀`})]}),s===$.READY&&(0,w.jsxs)(J,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[(0,w.jsx)(Y,{children:m.name}),(0,w.jsx)(X,{children:m.description}),(0,w.jsxs)(n.p,{style:{fontSize:16,color:B.coral,fontWeight:700,marginTop:12},animate:{scale:[1,1.02,1],transition:{repeat:1/0,duration:1.5}},children:[`🎯 挑战难度：`,A.name]}),(0,w.jsxs)(n.p,{style:{fontSize:16,color:B.yellow,fontWeight:700,marginTop:8},children:[`⚔️ 目标武器：`,M]}),(0,w.jsxs)(`p`,{style:{fontSize:14,color:`#7A7A7A`,marginTop:12},children:[`📝 共 `,m.questions.length,` 道题目`]}),(0,w.jsxs)(Q,{children:[`⭐ 答对每题可获得 `,Math.floor(m.starReward*A.starMultiplier),` 颗星星`]}),(0,w.jsxs)(n.p,{style:{fontSize:28,color:B.rainbowPink,fontWeight:700,marginTop:24},animate:{scale:[1,1.2,1],transition:{repeat:1/0,duration:1}},children:[`⏱️ `,d,` 秒后开始...`]})]})]})]})};export{ye as default};
//# sourceMappingURL=level-intro.component-BYOs5Gvl.js.map