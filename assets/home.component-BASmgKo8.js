import{a as e}from"./config-msfdsG27.js";import{B as t,J as n,K as r,L as i,U as a,l as o,o as s,s as c,t as l,z as u}from"./index-Dab6msTD.js";import"./services-C_Dthk5B.js";var d=n(r(),1),f=u(),p=t.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,m=t(i.div)`
  font-size: 48px;
  font-weight: 800;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
`,h=t(i.p)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 48px;
  text-align: center;
`,g=t(i.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;
`,_=t(s)`
  width: 100%;
  padding: 16px 24px;
  font-size: 18px;
`,v=t(i.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 32px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
`,y=t(i.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 16px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
`,b=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,x=t.span`
  font-size: 18px;
`,S=t.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
`,C=t(i.button)`
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
`,w=()=>{let e=a(),t=o.getUserData(),{playBGM:n}=c(),[r,i]=d.useState(!1);return(0,d.useEffect)(()=>{n(`menu`)},[n]),(0,f.jsxs)(p,{children:[(0,f.jsx)(C,{onClick:()=>i(!0),whileHover:{scale:1.1},whileTap:{scale:.9},children:`🔊`}),(0,f.jsxs)(y,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:`⭐`}),(0,f.jsx)(S,{children:t.totalStars})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:`🃏`}),(0,f.jsx)(S,{children:t.collectedCards.length})]})]}),(0,f.jsx)(v,{src:`/assets/character/小俊.png`,alt:`主角`,initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:`spring`,stiffness:200,damping:20}}),(0,f.jsx)(m,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:`炫卡收集游戏`}),(0,f.jsx)(h,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:`学习数学，收集炫卡，成为炫卡斗士！`}),(0,f.jsxs)(g,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[(0,f.jsx)(_,{variant:`primary`,size:`large`,onClick:()=>{e(`/levels`)},children:`开始冒险`}),(0,f.jsx)(_,{variant:`secondary`,size:`large`,onClick:()=>{e(`/collection`)},children:`卡牌收集册`})]}),(0,f.jsx)(l,{isOpen:r,onClose:()=>i(!1)})]})};export{w as default};
//# sourceMappingURL=home.component-BASmgKo8.js.map