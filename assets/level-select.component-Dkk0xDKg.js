import{a as e}from"./config-msfdsG27.js";import{B as t,J as n,K as r,L as i,U as a,f as o,i as s,l as c,o as l,s as u,u as d,z as f}from"./index-Dab6msTD.js";import"./services-C_Dthk5B.js";var p=n(r(),1),m=new class{h1Conditions=[{type:`levels_completed`,targetLevels:[`1-1`,`1-2`,`1-3`,`2-1`,`2-2`,`2-3`,`2-4`,`3-1`,`3-2`,`3-3`],minStars:3},{type:`stars_collected`,minStars:100}];h2Conditions=[{type:`levels_completed`,targetLevels:[`1-1`,`1-2`,`1-3`,`2-1`,`2-2`,`2-3`,`2-4`,`3-1`,`3-2`,`3-3`,`3-4`,`4-1`,`4-2`,`4-3`,`5-1`,`5-2`,`6`,`7-1`,`7-2`,`8`],minStars:3},{type:`stars_collected`,minStars:90}];getUnlockConditions(e){return e===`H1`?this.h1Conditions:e===`H2`?this.h2Conditions:[]}checkUnlock(e){let t=c.getUserData();if(t.hiddenLevelsUnlocked.includes(e))return!0;let n=this.getUnlockConditions(e);if(n.length===0)return!1;let r=n.every(e=>this.checkCondition(e));return r&&(t.hiddenLevelsUnlocked.push(e),c.saveUserData(t)),r}checkCondition(e){let t=c.getUserData();switch(e.type){case`levels_completed`:return this.checkLevelsCompleted(e,t);case`stars_collected`:return this.checkStarsCollected(e,t);case`accuracy`:return this.checkAccuracy(e,t);default:return!1}}checkLevelsCompleted(e,t){return!e.targetLevels||!e.minStars?!1:e.targetLevels.every(n=>{let r=t.levelProgress[n];return r&&r.status===`completed`&&r.stars>=e.minStars})}checkStarsCollected(e,t){return e.minStars?t.totalStars>=e.minStars:!1}checkAccuracy(e,t){if(!e.targetLevel||!e.minAccuracy)return!1;let n=t.levelProgress[e.targetLevel];if(!n||n.status!==`completed`)return!1;let r=o.find(t=>t.id===e.targetLevel);if(!r)return!1;let i=r.questions.length*10;return n.stars/i>=e.minAccuracy}getUnlockProgress(e){let t=this.getUnlockConditions(e),n=c.getUserData(),r=t.map(e=>{let{type:t}=e;switch(t){case`levels_completed`:{let r=e.targetLevels||[],i=r.filter(t=>n.levelProgress[t]?.status===`completed`&&n.levelProgress[t].stars>=(e.minStars||0)).length;return{type:t,current:i,required:r.length,description:`完成 ${r.join(`、`)} 且每关获得至少 ${e.minStars} 星`,isMet:i===r.length}}case`stars_collected`:{let r=n.totalStars,i=e.minStars||0;return{type:t,current:r,required:i,description:`收集 ${i} 颗星星`,isMet:r>=i}}case`accuracy`:{let r=n.levelProgress[e.targetLevel||``],i=o.find(t=>t.id===e.targetLevel);if(!r||!i)return{type:t,current:0,required:e.minAccuracy||0,description:`${e.targetLevel} 正确率达到 ${(e.minAccuracy||0)*100}%`,isMet:!1};let a=i.questions.length*10,s=r.stars/a;return{type:t,current:s,required:e.minAccuracy||0,description:`${e.targetLevel} 正确率达到 ${(e.minAccuracy||0)*100}%`,isMet:s>=(e.minAccuracy||0)}}default:return{type:t,current:0,required:0,description:`未知条件`,isMet:!1}}});return{levelId:e,conditions:r,allMet:r.every(e=>e.isMet)}}unlockAchievement(e){let t=c.getUserData(),n=t.achievements.find(t=>t.id===e);n&&!n.unlocked&&(n.unlocked=!0,n.unlockedAt=new Date().toISOString(),c.saveUserData(t))}isAchievementUnlocked(e){return c.getUserData().achievements.find(t=>t.id===e)?.unlocked||!1}},h=f(),g=t.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,_=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,v=t.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,y=t(l)`
  background: rgba(255, 255, 255, 0.9);
  color: ${e.textPrimary};
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,x=t(i.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 24px;
`,S=t.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${e.textPrimary};
  margin-bottom: 16px;
`,C=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`,w=t(i.button)`
  position: relative;
  padding: 20px 16px;
  background: ${t=>t.$completed?`linear-gradient(135deg, ${e.success} 0%, ${e.successLight} 100%)`:t.$locked?`#e5e7eb`:`white`};
  border: none;
  border-radius: 16px;
  cursor: ${e=>e.$locked?`not-allowed`:`pointer`};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  opacity: ${e=>e.$locked?.7:1};
`,T=t.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e.textPrimary};
  margin-bottom: 8px;
`,E=t.div`
  font-size: 12px;
  color: ${e.textSecondary};
  margin-bottom: 12px;
`,D=t.div`
  display: flex;
  justify-content: center;
`,O=t.div`
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 16px;
`,k=t.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 8px;
`,A=t(i.button)`
  position: relative;
  width: 100%;
  padding: 24px 20px;
  background: ${e=>e.$unlocked?`linear-gradient(135deg, #FDB931 0%, #FF6B6B 50%, #8B5CF6 100%)`:`#e5e7eb`};
  border: none;
  border-radius: 20px;
  cursor: ${e=>e.$unlocked?`pointer`:`not-allowed`};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  opacity: ${e=>e.$unlocked?1:.7};
  overflow: hidden;

  ${e=>e.$unlocked&&`
    &::before {
      content: '✨';
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 24px;
      animation: sparkle 1.5s ease-in-out infinite;
    }

    @keyframes sparkle {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }
  `}
`,j=t.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,M=t.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
`,N=t.div`
  font-size: 12px;
  color: white;
  font-weight: 600;
`,P=t.span`
  position: absolute;
  top: 8px;
  left: 12px;
  background: #FF4444;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 8px;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`,F=()=>{let e=a(),t=c.getUserData(),n=d(),{playBGM:r,stopBGM:i}=u();(0,p.useEffect)(()=>(r(`menu`),()=>{i()}),[r,i]);let o=m.checkUnlock(`H1`),l=m.checkUnlock(`H2`),f=p.useMemo(()=>{let e=new Map;return n.forEach(t=>{e.has(t.chapter)||e.set(t.chapter,[]),e.get(t.chapter).push(t)}),e},[n]),F=(t,n)=>{n||e(`/level/${t}/intro`)},I=()=>{e(`/`)},L=(t,n)=>{n&&e(`/level/${t}/intro`)};return(0,h.jsxs)(g,{children:[(0,h.jsxs)(_,{children:[(0,h.jsx)(v,{children:`选择关卡`}),(0,h.jsx)(y,{size:`small`,onClick:I,children:`返回`})]}),(0,h.jsxs)(b,{children:[Array.from(f.entries()).map(([e,n],r)=>(0,h.jsxs)(x,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:r*.1},children:[(0,h.jsxs)(S,{children:[`第`,e,`章：`,n[0]?.chapterName||`待定`]}),(0,h.jsx)(C,{children:n.map((e,n)=>{let i=t.levelProgress[e.id],a=!i||i.status===`locked`;if(e.requiredHiddenLevel&&!a){let n=t.levelProgress[e.requiredHiddenLevel];a=!n||n.status!==`completed`}let o=i?.status===`completed`,c=i?.stars||0;return(0,h.jsxs)(w,{$locked:a,$completed:o,onClick:()=>F(e.id,a),whileHover:a?{}:{scale:1.05},whileTap:a?{}:{scale:.95},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:r*.1+n*.05},children:[a&&(0,h.jsx)(O,{children:`🔒`}),(0,h.jsx)(k,{src:e.guardian.vehicleImage,alt:e.guardian.name,style:{opacity:a?.5:1}}),(0,h.jsx)(T,{children:e.name}),(0,h.jsx)(E,{children:e.description}),(0,h.jsx)(D,{children:(0,h.jsx)(s,{count:Math.floor(c/10),maxCount:5,size:`small`,animate:!1,showCount:!1})})]},e.id)})})]},e)),(o||l)&&(0,h.jsxs)(x,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,h.jsx)(S,{children:`⭐ 隐藏关卡`}),(0,h.jsxs)(C,{children:[o&&(0,h.jsxs)(A,{$unlocked:!0,onClick:()=>L(`H1`,!0),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[(0,h.jsx)(P,{children:`NEW!`}),(0,h.jsx)(j,{children:`✨ 超炫电光王的秘密基地 ✨`}),(0,h.jsx)(M,{children:`数位大师的终极挑战`}),(0,h.jsx)(N,{children:t.levelProgress.H1?.status===`completed`?`⭐ 已通关`:`🎮 进入挑战`})]}),l&&(0,h.jsxs)(A,{$unlocked:!0,onClick:()=>L(`H2`,!0),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[(0,h.jsx)(P,{children:`NEW!`}),(0,h.jsx)(j,{children:`⚡ 炫蓝雷霆王的时空裂缝 ⚡`}),(0,h.jsx)(M,{children:`跨单元综合挑战`}),(0,h.jsx)(N,{children:t.levelProgress.H2?.status===`completed`?`⭐ 已通关`:`🎮 进入挑战`})]})]})]})]})]})};export{F as default};
//# sourceMappingURL=level-select.component-Dkk0xDKg.js.map