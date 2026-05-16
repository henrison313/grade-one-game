import{a as e}from"./config-msfdsG27.js";import{B as t,F as n,R as r,V as i,W as a,Y as o,l as s,o as c,q as l,s as u,t as d}from"./index-Usl2QjJl.js";import"./services-C_Dthk5B.js";var f=o(l(),1),p=t(),m=i.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,h=i(r.div)`
  font-size: 48px;
  font-weight: 800;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
`,g=i(r.p)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 48px;
  text-align: center;
`,_=i(r.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;
`,v=i(c)`
  width: 100%;
  padding: 16px 24px;
  font-size: 18px;
`,y=i(r.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 32px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`,b=i(r.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
`,x=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,S=i.span`
  font-size: 18px;
`,C=i.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
`,w=i(r.button)`
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
`,T=()=>{let e=a(),t=s.getUserData(),{playBGM:r}=u(),[i,o]=f.useState(!1);return(0,f.useEffect)(()=>{r(`menu`)},[r]),(0,p.jsxs)(m,{children:[(0,p.jsx)(w,{onClick:()=>o(!0),whileHover:{scale:1.1},whileTap:{scale:.9},children:`🔊`}),(0,p.jsxs)(b,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:`⭐`}),(0,p.jsx)(C,{children:t.totalStars})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:`🃏`}),(0,p.jsx)(C,{children:t.collectedCards.length})]})]}),(0,p.jsx)(y,{src:n(`/assets/character/xiaojun.png`),alt:`主角`,initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:`spring`,stiffness:200,damping:20}}),(0,p.jsx)(h,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:`炫卡收集游戏`}),(0,p.jsx)(g,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:`学习数学，收集炫卡，成为炫卡斗士！`}),(0,p.jsxs)(_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,p.jsx)(v,{variant:`primary`,size:`large`,onClick:()=>{e(`/levels`)},children:`开始冒险`}),(0,p.jsx)(v,{variant:`secondary`,size:`large`,onClick:()=>{e(`/collection`)},children:`卡牌收集册`})]}),(0,p.jsx)(d,{isOpen:i,onClose:()=>o(!1)})]})};export{T as default};
//# sourceMappingURL=home.component-DEsi8rJq.js.map