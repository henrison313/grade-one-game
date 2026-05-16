import{a as e,i as t}from"./config-msfdsG27.js";import{B as n,F as r,J as i,K as a,L as o,P as s,R as c,U as ee,a as l,l as u,o as d,q as f,r as p,s as m,z as h}from"./index-Dab6msTD.js";import{i as g,n as te,t as ne}from"./character-variants.data-DG0wfiLE.js";var _=i(a(),1),v=h(),y=n(o.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,b=n.div`
  background: linear-gradient(145deg, ${e=>t[e.$rarity].color} 0%, ${e=>t[e.$rarity].glow} 100%);
  padding: 20px;
  text-align: center;
  position: relative;
`,x=n.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,S=n.span`
  display: block;
  font-size: 12px;
  color: white;
  margin-top: 4px;
  font-weight: 600;
`,C=n.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  position: relative;
  z-index: 1;
`,w=n(o.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`,T=n.span`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: ${e.textSecondary};
  white-space: nowrap;
`,E=n(o.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: zoom-out;
`,re=n(o.img)`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,D=n.div`
  padding: 24px;
`,O=n.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 8px;
`,ie=n.p`
  font-size: 16px;
  color: ${e.textSecondary};
  text-align: center;
  margin-bottom: 20px;
`,ae=n.p`
  font-size: 14px;
  color: ${e.textSecondary};
  line-height: 1.6;
  margin-bottom: 20px;
`,oe=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,k=n.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
`,A=n.div`
  font-size: 12px;
  color: ${e.textSecondary};
  margin-bottom: 4px;
`,j=n.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
`,se=n.div`
  margin-bottom: 20px;
`,M=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
  margin-bottom: 12px;
`,ce=n.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 8px;
`,N=n.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e.primary};
  margin-bottom: 4px;
`,P=n.div`
  font-size: 12px;
  color: ${e.textSecondary};
`,F=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,I=n.span`
  padding: 6px 12px;
  background: rgba(79, 70, 229, 0.1);
  color: ${e.primary};
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`,L=n.div`
  padding: 16px 24px;
  background: #f9fafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,R=n.div`
  font-size: 12px;
  color: ${e.textSecondary};
`,z=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${e.star};
`,B=({character:e,variantImage:n,variantName:r,variantRarity:i,variantStats:a,collectedAt:o,stars:s,onClose:ee})=>{let[l,u]=(0,_.useState)(!1),d=n||e.cardImage||e.robotImage,f=r||e.name,p=i||e.rarity,m=a||e.stats;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(y,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[(0,v.jsxs)(b,{$rarity:p,children:[(0,v.jsxs)(x,{children:[`#`,e.number]}),(0,v.jsx)(S,{children:t[p]?.name||`普通`})]}),(0,v.jsxs)(C,{children:[(0,v.jsx)(w,{src:d,alt:f,onClick:()=>u(!0),whileHover:{scale:1.05},whileTap:{scale:.98}}),(0,v.jsx)(T,{children:`点击放大`})]}),(0,v.jsxs)(D,{children:[(0,v.jsx)(O,{children:f}),(0,v.jsx)(ie,{children:e.title}),(0,v.jsx)(ae,{children:e.description}),(0,v.jsxs)(oe,{children:[(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`身高`}),(0,v.jsx)(j,{children:m.height})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`体重`}),(0,v.jsx)(j,{children:m.weight})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`速度`}),(0,v.jsx)(j,{children:m.speed})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`力量`}),(0,v.jsx)(j,{children:m.power})]})]}),e.skills.length>0&&(0,v.jsxs)(se,{children:[(0,v.jsx)(M,{children:`技能`}),e.skills.map((e,t)=>(0,v.jsxs)(ce,{children:[(0,v.jsx)(N,{children:e.name}),(0,v.jsx)(P,{children:e.description})]},t))]}),e.knowledge.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(M,{children:`关联知识`}),(0,v.jsx)(F,{children:e.knowledge.map((e,t)=>(0,v.jsx)(I,{children:e},t))})]})]}),(o||s)&&(0,v.jsxs)(L,{children:[o&&(0,v.jsxs)(R,{children:[`收集于 `,new Date(o).toLocaleDateString()]}),s&&(0,v.jsxs)(z,{children:[`⭐ `,s]})]})]}),(0,v.jsx)(c,{children:l&&(0,v.jsx)(E,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>u(!1),children:(0,v.jsx)(re,{src:d,alt:f,initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{type:`spring`,damping:25}})})})]})},V=f({default:()=>Ne}),H=[`juli-fengbao`,`baoche-jiushi`,`liehuo-xiuluo`,`anying-tegong`,`tiebi-jueshi`,`penshi-jialun`,`liebian-qishi`,`baolie-zhongka`,`shenhai-tianmao`,`zhongli-jingang`,`xuantie-zhanshen`,`xuanlan-shandian-s`,`gangbi-lishi`,`xingji-youxia`,`baoxuan-luoke`,`shenhai-bawang`,`yinyi-qishi`,`zhongzhang-chihunwang`],U={...t,bronze:{name:`青铜`,color:`#CD7F32`,glow:`rgba(205, 127, 50, 0.5)`},silver:{name:`白银`,color:`#C0C0C0`,glow:`rgba(192, 192, 192, 0.5)`},gold:{name:`黄金`,color:`#FFD700`,glow:`rgba(255, 215, 0, 0.5)`},rainbow:{name:`彩虹`,color:`#FF0080`,glow:`rgba(255, 255, 255, 0.8)`},prismatic:{name:`炫彩`,color:`#FF0080`,glow:`rgba(255, 0, 128, 0.8)`}},W=n.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,G=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,le=n.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,ue=n(d)`
  background: rgba(255, 255, 255, 0.9);
  color: ${e.textPrimary};
`,de=n.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`,K=n.button`
  padding: 8px 16px;
  border: 2px solid ${t=>t.$active?e.primary:`rgba(255,255,255,0.5)`};
  background: ${t=>t.$active?e.primary:`rgba(255,255,255,0.2)`};
  color: ${e=>e.$active?`white`:`rgba(255,255,255,0.8)`};
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${t=>t.$active?e.primary:`rgba(255,255,255,0.3)`};
  }
`,fe=n.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
`,q=n.div`
  text-align: center;
`,J=n.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e.primary};
`,Y=n.div`
  font-size: 12px;
  color: ${e.textSecondary};
`,pe=n(o.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`,me=n.div`
  margin-left: 16px;
  text-align: left;
`,he=n.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textLight};
  margin-bottom: 4px;
`,ge=n.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,_e=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  border-left: 4px solid ${e=>e.$color};
`,ve=n.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,ye=n.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
`,be=n.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-left: auto;
`,xe=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`,X=n(o.div)`
  aspect-ratio: 3/4;
  background: ${e=>e.$collected?`white`:`rgba(255, 255, 255, 0.1)`};
  border-radius: 16px;
  border-left: 4px solid ${e=>e.$groupColor};
  overflow: hidden;
  cursor: ${e=>e.$collected?`pointer`:`default`};
  box-shadow: ${e=>e.$collected?`0 4px 12px rgba(0, 0, 0, 0.1)`:`none`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: ${e=>e.$collected?1:.5};
`,Se=n.img`
  width: 70%;
  height: 55%;
  object-fit: contain;
`,Ce=n.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e.textPrimary};
  margin-top: 8px;
  text-align: center;
`,Z=n.div`
  font-size: 11px;
  color: ${e.textSecondary};
`,Q=n.div`
  font-size: 10px;
  color: ${e=>U[e.$rarity]?.color||`#9CA3AF`};
  margin-top: 4px;
  padding: 2px 8px;
  border-radius: 8px;
  background: ${e=>U[e.$rarity]?.glow||`transparent`};
`,we=n.div`
  width: 70%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.3);
`,Te=n.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`,Ee=n(o.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,De=n(o.div)`
  width: 180px;
  height: 200px;
  background: ${e=>e.$collected?`white`:`rgba(255,255,255,0.3)`};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-shadow: ${e=>e.$collected?`0 4px 12px rgba(0,0,0,0.1)`:`none`};
  opacity: ${e=>e.$collected?1:.6};
`,$=n.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin-bottom: 12px;
`,Oe=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${e=>e.$collected?`linear-gradient(135deg, #FFD700, #FFA500)`:`rgba(255,255,255,0.3)`};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`,ke=n(o.div)`
  position: absolute;
  width: 40px;
  height: 50px;
  background: ${e=>e.$collected?`white`:`rgba(255,255,255,0.5)`};
  border-radius: 8px;
  border: 2px solid ${e=>e.$collected?`#E5E7EB`:`rgba(255,255,255,0.3)`};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: ${e=>e.$collected?`pointer`:`default`};
  box-shadow: ${e=>e.$collected?`0 2px 6px rgba(0,0,0,0.1)`:`none`};
  opacity: ${e=>e.$collected?1:.5};
  z-index: 3;
  transition: box-shadow 0.2s, transform 0.2s;
  /* 环绕布局：基于角度定位 */
  top: 50%;
  left: 50%;
  transform: ${e=>{let t=(e.$angle-90)*Math.PI/180;return`translate(calc(-50% + ${Math.cos(t)*55}px), calc(-50% + ${Math.sin(t)*55}px))`}};

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transform: ${e=>{let t=(e.$angle-90)*Math.PI/180;return`translate(calc(-50% + ${Math.cos(t)*55}px), calc(-50% + ${Math.sin(t)*55}px)) scale(1.1)`}};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,Ae=n.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #9CA3AF;
`,je=n.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e.textPrimary};
  text-align: center;
`,Me=n.div`
  font-size: 11px;
  color: ${e.textSecondary};
  margin-top: 2px;
`,Ne=()=>{let[e,t]=(0,_.useState)(`C`),[n,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),h=ee(),y=u.getUserData(),{playBGM:b,stopBGM:x}=m();(0,_.useEffect)(()=>(b(`collection`),()=>x()),[]);let S=(0,_.useMemo)(()=>{let e=y.collectedCards.length,t=ne.length,n=y.totalStars,r={};return y.collectedCards.forEach(e=>{r[e.rarity]=(r[e.rarity]||0)+1}),{collected:e,totalVariants:t,totalStars:n,byRarity:r}},[y]),C=(0,_.useMemo)(()=>{let e={};return y.collectedCards.forEach(t=>{e[t.characterId]||(e[t.characterId]=[]),e[t.characterId].push(t)}),e},[y.collectedCards]),w=e=>{let t=g(e);if(t.length===0){let t=s(e);if(t)return[{characterId:e,variant:`base`,rarity:`rare`,image:t.robotImage,difficulty:r.EASY,displayName:t.name},{characterId:e,variant:`flame`,rarity:`gold`,image:t.robotImage,difficulty:r.MEDIUM,displayName:`${t.name}·进阶`},{characterId:e,variant:`ultimate`,rarity:`rainbow`,image:t.robotImage,difficulty:r.HARD,displayName:`${t.name}·终极`}]}return t},T=(0,_.useMemo)(()=>y.collectedCards.slice(-3).map(e=>{let t=s(e.characterId);return{image:g(e.characterId).find(t=>t.variant===e.variant)?.image||t?.robotImage||``,rarity:e.rarity}}).filter(e=>e.image),[y.collectedCards]),E=e=>{let t=s(e.characterId);if(t){let n=g(e.characterId).find(t=>t.variant===e.variant);i(e),o(t),f({image:n?.image||t.robotImage,displayName:n?.displayName||t.name,rarity:e.rarity,stats:n?.stats})}};return(0,v.jsxs)(W,{children:[S.collected>0&&(0,v.jsxs)(pe,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[(0,v.jsx)(p,{mode:`display`,displayCards:T}),(0,v.jsxs)(me,{children:[(0,v.jsx)(he,{children:`炫卡召唤器`}),(0,v.jsxs)(ge,{children:[`已收集 `,S.collected,` 张炫卡`]})]})]}),(0,v.jsxs)(G,{children:[(0,v.jsx)(le,{children:`卡牌收集册`}),(0,v.jsxs)(de,{children:[(0,v.jsx)(K,{$active:e===`A`,onClick:()=>t(`A`),children:`徽章墙`}),(0,v.jsx)(K,{$active:e===`C`,onClick:()=>t(`C`),children:`卡片`})]}),(0,v.jsx)(ue,{onClick:()=>h(`/levels`),children:`返回`})]}),(0,v.jsxs)(fe,{children:[(0,v.jsxs)(q,{children:[(0,v.jsx)(J,{children:S.collected}),(0,v.jsx)(Y,{children:`已收集`})]}),(0,v.jsxs)(q,{children:[(0,v.jsx)(J,{children:S.totalStars}),(0,v.jsx)(Y,{children:`总星星`})]}),Object.entries(U).filter(([e])=>(S.byRarity[e]||0)>0).map(([e,t])=>(0,v.jsxs)(q,{children:[(0,v.jsx)(J,{style:{color:t.color},children:S.byRarity[e]||0}),(0,v.jsx)(Y,{children:t.name})]},e))]}),(0,v.jsxs)(c,{mode:`wait`,children:[e===`A`&&(0,v.jsx)(Ee,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:H.map(e=>{let t=s(e);if(!t)return null;let n=w(e),r=C[e]||[],i=r.length,a=i>0;return(0,v.jsxs)(De,{$collected:a,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.2},children:[(0,v.jsxs)($,{children:[(0,v.jsx)(Oe,{$collected:a,children:(0,v.jsx)(`img`,{src:t.robotImage,alt:t.name})}),n.map((e,t)=>{let n=r.find(t=>t.variant===e.variant),i=!!n;return(0,v.jsx)(ke,{$collected:i,$angle:90+t*120,onClick:e=>{!i||!n||(e.stopPropagation(),E(n))},children:i?(0,v.jsx)(`img`,{src:e.image,alt:e.displayName}):(0,v.jsx)(Ae,{children:`?`})},e.variant)})]}),(0,v.jsx)(je,{children:t.name}),(0,v.jsxs)(Me,{children:[i,`/`,n.length,` 形态`]})]},e)})},`badge-wall`),e===`C`&&H.map(e=>{let t=s(e);if(!t)return null;let n=te(e),r=w(e),i=C[e]||[],a=i.length;return(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(_e,{$color:n,children:[(0,v.jsx)(ve,{children:(0,v.jsx)(`img`,{src:t.robotImage,alt:t.name})}),(0,v.jsx)(ye,{children:t.name}),(0,v.jsxs)(be,{children:[a,`/`,r.length,` 形态`]})]}),(0,v.jsx)(xe,{children:r.map(t=>{let r=i.find(e=>e.variant===t.variant),a=!!r,o=t.image,s=t.displayName;return a&&r?(0,v.jsxs)(X,{$collected:!0,$groupColor:n,onClick:()=>E(r),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,v.jsx)(Se,{src:o,alt:s}),(0,v.jsx)(Ce,{children:s}),(0,v.jsx)(Z,{children:t.variant===`base`?`基础`:t.variant===`flame`?`火焰`:t.variant===`battle`?`战地`:`终极`}),(0,v.jsx)(Q,{$rarity:t.rarity,children:U[t.rarity]?.name||`普通`})]},`${e}-${t.variant}`):(0,v.jsxs)(X,{$collected:!1,$groupColor:n,initial:{opacity:0},animate:{opacity:.5},children:[(0,v.jsx)(we,{children:`?`}),(0,v.jsx)(Te,{children:s}),(0,v.jsx)(Z,{children:t.variant===`base`?`基础`:t.variant===`flame`?`火焰`:t.variant===`battle`?`战地`:`终极`}),(0,v.jsx)(Q,{$rarity:t.rarity,children:`未获得`})]},`${e}-${t.variant}-empty`)})})]},e)})]}),y.collectedCards.length===0&&(0,v.jsxs)(`div`,{style:{textAlign:`center`,padding:`40px`,color:`white`},children:[(0,v.jsx)(`p`,{style:{fontSize:18},children:`还没有收集任何炫卡`}),(0,v.jsx)(`p`,{style:{fontSize:14,marginTop:8},children:`完成关卡即可获得炫卡！`})]}),(0,v.jsx)(l,{isOpen:!!a&&!!n,onClose:()=>{o(null),i(null),f(null)},showCloseButton:!0,children:a&&n&&d&&(0,v.jsx)(B,{character:a,variantImage:d.image,variantName:d.displayName,variantRarity:d.rarity,variantStats:d.stats,collectedAt:n.collectedAt,stars:n.stars})})]})};export{V as t};
//# sourceMappingURL=card-collection.component-DaOu8jNQ.js.map