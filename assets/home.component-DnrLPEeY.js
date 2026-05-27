import{a as e}from"./config-msfdsG27.js";import{B as t,H as n,K as r,U as i,Y as a,Z as o,c as s,d as c,o as l,t as u,u as d,z as f}from"./index-DzK_59vN.js";import"./services-C_Dthk5B.js";var p=o(a(),1),m=n(),h=i.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,g=i(t.div)`
  font-size: 48px;
  font-weight: 800;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
`,_=i(t.p)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 48px;
  text-align: center;
`,v=i(t.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;
`,y=i(l)`
  width: 100%;
  padding: 16px 24px;
  font-size: 18px;
`,b=i(t.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 32px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`,x=i(t.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
`,S=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,C=i.span`
  font-size: 18px;
`,w=i.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
`,T=i(t.button)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`,E=()=>{let e=r(),t=c.getUserData(),{playBGM:n}=s(),[i,a]=(0,p.useState)(!1);(0,p.useEffect)(()=>{n(`menu`)},[n]);let o=(0,p.useCallback)(()=>{d.isPreloaded()||d.preloadAll().catch(()=>{}),e(`/levels`)},[e]),l=(0,p.useCallback)(()=>{d.isPreloaded()||d.preloadAll().catch(()=>{}),e(`/collection`)},[e]);return(0,m.jsxs)(h,{children:[(0,m.jsx)(T,{onClick:()=>a(!0),whileHover:{scale:1.1},whileTap:{scale:.9},children:`🔊`}),(0,m.jsxs)(x,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,m.jsxs)(S,{children:[(0,m.jsx)(C,{children:`⭐`}),(0,m.jsx)(w,{children:t.totalStars})]}),(0,m.jsxs)(S,{children:[(0,m.jsx)(C,{children:`🃏`}),(0,m.jsx)(w,{children:t.collectedCards.length})]})]}),(0,m.jsx)(b,{src:f(`/assets/character/xiaojun.webp`),alt:`主角`,initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:`spring`,stiffness:200,damping:20}}),(0,m.jsx)(g,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:`炫卡收集游戏`}),(0,m.jsx)(_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:`学习数学，收集炫卡，成为炫卡斗士！`}),(0,m.jsxs)(v,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,m.jsx)(y,{variant:`primary`,size:`large`,onClick:o,children:`开始冒险`}),(0,m.jsx)(y,{variant:`secondary`,size:`large`,onClick:l,children:`卡牌收集册`})]}),(0,m.jsx)(u,{isOpen:i,onClose:()=>a(!1)})]})};export{E as default};
//# sourceMappingURL=home.component-DnrLPEeY.js.map