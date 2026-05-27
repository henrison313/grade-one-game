import{a as e,i as t}from"./config-msfdsG27.js";import{B as n,H as r,I as i,K as a,L as o,U as s,V as c,X as l,Y as u,Z as d,a as f,c as p,d as m,o as h,r as ee}from"./index-D2uuPUim.js";import{i as g,n as te,t as ne}from"./character-variants.data-jke_ZPKY.js";var _=d(u(),1),v=r(),y=s(n.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,b=s.div`
  background: linear-gradient(145deg, ${e=>t[e.$rarity].color} 0%, ${e=>t[e.$rarity].glow} 100%);
  padding: 20px;
  text-align: center;
  position: relative;
`,x=s.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,S=s.span`
  display: block;
  font-size: 12px;
  color: white;
  margin-top: 4px;
  font-weight: 600;
`,C=s.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  position: relative;
  z-index: 1;
`,w=s(n.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`,T=s.span`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: ${e.textSecondary};
  white-space: nowrap;
`,E=s(n.div)`
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
`,re=s(n.img)`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,D=s.div`
  padding: 24px;
`,O=s.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 8px;
`,ie=s.p`
  font-size: 16px;
  color: ${e.textSecondary};
  text-align: center;
  margin-bottom: 20px;
`,ae=s.p`
  font-size: 14px;
  color: ${e.textSecondary};
  line-height: 1.6;
  margin-bottom: 20px;
`,oe=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,k=s.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
`,A=s.div`
  font-size: 12px;
  color: ${e.textSecondary};
  margin-bottom: 4px;
`,j=s.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
`,se=s.div`
  margin-bottom: 20px;
`,M=s.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
  margin-bottom: 12px;
`,ce=s.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 8px;
`,N=s.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e.primary};
  margin-bottom: 4px;
`,P=s.div`
  font-size: 12px;
  color: ${e.textSecondary};
`,F=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,I=s.span`
  padding: 6px 12px;
  background: rgba(79, 70, 229, 0.1);
  color: ${e.primary};
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
`,L=s.div`
  padding: 16px 24px;
  background: #f9fafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,R=s.div`
  font-size: 12px;
  color: ${e.textSecondary};
`,z=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${e.star};
`,B=({character:e,variantImage:n,variantName:r,variantRarity:i,variantStats:a,collectedAt:o,stars:s,onClose:l})=>{let[u,d]=(0,_.useState)(!1),f=n||e.cardImage||e.robotImage,p=r||e.name,m=i||e.rarity,h=a||e.stats;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(y,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[(0,v.jsxs)(b,{$rarity:m,children:[(0,v.jsxs)(x,{children:[`#`,e.number]}),(0,v.jsx)(S,{children:t[m]?.name||`普通`})]}),(0,v.jsxs)(C,{children:[(0,v.jsx)(w,{src:f,alt:p,onClick:()=>d(!0),whileHover:{scale:1.05},whileTap:{scale:.98}}),(0,v.jsx)(T,{children:`点击放大`})]}),(0,v.jsxs)(D,{children:[(0,v.jsx)(O,{children:p}),(0,v.jsx)(ie,{children:e.title}),(0,v.jsx)(ae,{children:e.description}),(0,v.jsxs)(oe,{children:[(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`身高`}),(0,v.jsx)(j,{children:h.height})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`体重`}),(0,v.jsx)(j,{children:h.weight})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`速度`}),(0,v.jsx)(j,{children:h.speed})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(A,{children:`力量`}),(0,v.jsx)(j,{children:h.power})]})]}),e.skills.length>0&&(0,v.jsxs)(se,{children:[(0,v.jsx)(M,{children:`技能`}),e.skills.map((e,t)=>(0,v.jsxs)(ce,{children:[(0,v.jsx)(N,{children:e.name}),(0,v.jsx)(P,{children:e.description})]},t))]}),e.knowledge.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(M,{children:`关联知识`}),(0,v.jsx)(F,{children:e.knowledge.map((e,t)=>(0,v.jsx)(I,{children:e},t))})]})]}),(o||s)&&(0,v.jsxs)(L,{children:[o&&(0,v.jsxs)(R,{children:[`收集于 `,new Date(o).toLocaleDateString()]}),s&&(0,v.jsxs)(z,{children:[`⭐ `,s]})]})]}),(0,v.jsx)(c,{children:u&&(0,v.jsx)(E,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>d(!1),children:(0,v.jsx)(re,{src:f,alt:p,initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{type:`spring`,damping:25}})})})]})},V=l({default:()=>Ne}),H=[`juli-fengbao`,`baoche-jiushi`,`liehuo-xiuluo`,`anying-tegong`,`tiebi-jueshi`,`penshi-jialun`,`liebian-qishi`,`baolie-zhongka`,`shenhai-tianmao`,`zhongli-jingang`,`xuantie-zhanshen`,`xuanlan-shandian-s`,`yanlong-zhanshen`,`pili-huoying`,`gangbi-lishi`,`liekong-hanjiang`,`xingji-youxia`,`baoxuan-luoke`,`shenhai-bawang`,`yinyi-qishi`,`zhongzhang-chihunwang`,`chaoxuan-dianguangwang`,`xuanlan-leitingwang`],U={...t,bronze:{name:`青铜`,color:`#CD7F32`,glow:`rgba(205, 127, 50, 0.5)`},silver:{name:`白银`,color:`#C0C0C0`,glow:`rgba(192, 192, 192, 0.5)`},gold:{name:`黄金`,color:`#FFD700`,glow:`rgba(255, 215, 0, 0.5)`},rainbow:{name:`彩虹`,color:`#FF0080`,glow:`rgba(255, 255, 255, 0.8)`},prismatic:{name:`炫彩`,color:`#FF0080`,glow:`rgba(255, 0, 128, 0.8)`}},W=s.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`,G=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,le=s.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textLight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,ue=s(h)`
  background: rgba(255, 255, 255, 0.9);
  color: ${e.textPrimary};
`,de=s.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`,K=s.button`
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
`,fe=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
`,q=s.div`
  text-align: center;
`,J=s.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e.primary};
`,Y=s.div`
  font-size: 12px;
  color: ${e.textSecondary};
`,pe=s(n.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`,me=s.div`
  margin-left: 16px;
  text-align: left;
`,he=s.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textLight};
  margin-bottom: 4px;
`,ge=s.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,_e=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  border-left: 4px solid ${e=>e.$color};
`,ve=s.div`
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
`,ye=s.div`
  font-size: 18px;
  font-weight: 600;
  color: white;
`,be=s.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-left: auto;
`,xe=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`,X=s(n.div)`
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
`,Se=s.img`
  width: 70%;
  height: 55%;
  object-fit: contain;
`,Ce=s.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e.textPrimary};
  margin-top: 8px;
  text-align: center;
`,Z=s.div`
  font-size: 11px;
  color: ${e.textSecondary};
`,Q=s.div`
  font-size: 10px;
  color: ${e=>U[e.$rarity]?.color||`#9CA3AF`};
  margin-top: 4px;
  padding: 2px 8px;
  border-radius: 8px;
  background: ${e=>U[e.$rarity]?.glow||`transparent`};
`,we=s.div`
  width: 70%;
  height: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.3);
`,Te=s.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`,Ee=s(n.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,De=s(n.div)`
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
`,$=s.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin-bottom: 12px;
`,Oe=s.div`
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
`,ke=s(n.div)`
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
`,Ae=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #9CA3AF;
`,je=s.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e.textPrimary};
  text-align: center;
`,Me=s.div`
  font-size: 11px;
  color: ${e.textSecondary};
  margin-top: 2px;
`,Ne=()=>{let[e,t]=(0,_.useState)(`C`),[n,r]=(0,_.useState)(null),[s,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),h=a(),y=m.getUserData(),{playBGM:b,stopBGM:x}=p();(0,_.useEffect)(()=>(b(`collection`),()=>x()),[]);let S=(0,_.useMemo)(()=>{let e=y.collectedCards.length,t=ne.length,n=y.totalStars,r={};return y.collectedCards.forEach(e=>{r[e.rarity]=(r[e.rarity]||0)+1}),{collected:e,totalVariants:t,totalStars:n,byRarity:r}},[y]),C=(0,_.useMemo)(()=>{let e={};return y.collectedCards.forEach(t=>{e[t.characterId]||(e[t.characterId]=[]),e[t.characterId].push(t)}),e},[y.collectedCards]),w=e=>{let t=g(e);if(t.length===0){let t=i(e);if(t)return[{characterId:e,variant:`base`,rarity:`rare`,image:t.robotImage,difficulty:o.EASY,displayName:t.name},{characterId:e,variant:`flame`,rarity:`gold`,image:t.robotImage,difficulty:o.MEDIUM,displayName:`${t.name}·进阶`},{characterId:e,variant:`ultimate`,rarity:`rainbow`,image:t.robotImage,difficulty:o.HARD,displayName:`${t.name}·终极`}]}return t},T=(0,_.useMemo)(()=>y.collectedCards.slice(-3).map(e=>{let t=i(e.characterId);return{image:g(e.characterId).find(t=>t.variant===e.variant)?.image||t?.robotImage||``,rarity:e.rarity}}).filter(e=>e.image),[y.collectedCards]),E=e=>{let t=i(e.characterId);if(t){let n=g(e.characterId).find(t=>t.variant===e.variant);r(e),l(t),d({image:n?.image||t.robotImage,displayName:n?.displayName||t.name,rarity:e.rarity,stats:n?.stats})}};return(0,v.jsxs)(W,{children:[S.collected>0&&(0,v.jsxs)(pe,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[(0,v.jsx)(ee,{mode:`display`,displayCards:T}),(0,v.jsxs)(me,{children:[(0,v.jsx)(he,{children:`炫卡召唤器`}),(0,v.jsxs)(ge,{children:[`已收集 `,S.collected,` 张炫卡`]})]})]}),(0,v.jsxs)(G,{children:[(0,v.jsx)(le,{children:`卡牌收集册`}),(0,v.jsxs)(de,{children:[(0,v.jsx)(K,{$active:e===`A`,onClick:()=>t(`A`),children:`徽章墙`}),(0,v.jsx)(K,{$active:e===`C`,onClick:()=>t(`C`),children:`卡片`})]}),(0,v.jsx)(ue,{onClick:()=>h(`/levels`),children:`返回`})]}),(0,v.jsxs)(fe,{children:[(0,v.jsxs)(q,{children:[(0,v.jsx)(J,{children:S.collected}),(0,v.jsx)(Y,{children:`已收集`})]}),(0,v.jsxs)(q,{children:[(0,v.jsx)(J,{children:S.totalStars}),(0,v.jsx)(Y,{children:`总星星`})]}),Object.entries(U).filter(([e])=>(S.byRarity[e]||0)>0).map(([e,t])=>(0,v.jsxs)(q,{children:[(0,v.jsx)(J,{style:{color:t.color},children:S.byRarity[e]||0}),(0,v.jsx)(Y,{children:t.name})]},e))]}),(0,v.jsxs)(c,{mode:`wait`,children:[e===`A`&&(0,v.jsx)(Ee,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:H.map(e=>{let t=i(e);if(!t)return null;let n=w(e),r=C[e]||[],a=r.length,o=a>0;return(0,v.jsxs)(De,{$collected:o,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.2},children:[(0,v.jsxs)($,{children:[(0,v.jsx)(Oe,{$collected:o,children:(0,v.jsx)(`img`,{src:t.robotImage,alt:t.name})}),n.map((e,t)=>{let n=r.find(t=>t.variant===e.variant),i=!!n;return(0,v.jsx)(ke,{$collected:i,$angle:90+t*120,onClick:e=>{!i||!n||(e.stopPropagation(),E(n))},children:i?(0,v.jsx)(`img`,{src:e.image,alt:e.displayName}):(0,v.jsx)(Ae,{children:`?`})},e.variant)})]}),(0,v.jsx)(je,{children:t.name}),(0,v.jsxs)(Me,{children:[a,`/`,n.length,` 形态`]})]},e)})},`badge-wall`),e===`C`&&H.map(e=>{let t=i(e);if(!t)return null;let n=te(e),r=w(e),a=C[e]||[],o=a.length;return(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(_e,{$color:n,children:[(0,v.jsx)(ve,{children:(0,v.jsx)(`img`,{src:t.robotImage,alt:t.name})}),(0,v.jsx)(ye,{children:t.name}),(0,v.jsxs)(be,{children:[o,`/`,r.length,` 形态`]})]}),(0,v.jsx)(xe,{children:r.map(t=>{let r=a.find(e=>e.variant===t.variant),i=!!r,o=t.image,s=t.displayName;return i&&r?(0,v.jsxs)(X,{$collected:!0,$groupColor:n,onClick:()=>E(r),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,v.jsx)(Se,{src:o,alt:s}),(0,v.jsx)(Ce,{children:s}),(0,v.jsx)(Z,{children:t.variant===`base`?`基础`:t.variant===`flame`?`火焰`:t.variant===`battle`?`战地`:`终极`}),(0,v.jsx)(Q,{$rarity:t.rarity,children:U[t.rarity]?.name||`普通`})]},`${e}-${t.variant}`):(0,v.jsxs)(X,{$collected:!1,$groupColor:n,initial:{opacity:0},animate:{opacity:.5},children:[(0,v.jsx)(we,{children:`?`}),(0,v.jsx)(Te,{children:s}),(0,v.jsx)(Z,{children:t.variant===`base`?`基础`:t.variant===`flame`?`火焰`:t.variant===`battle`?`战地`:`终极`}),(0,v.jsx)(Q,{$rarity:t.rarity,children:`未获得`})]},`${e}-${t.variant}-empty`)})})]},e)})]}),y.collectedCards.length===0&&(0,v.jsxs)(`div`,{style:{textAlign:`center`,padding:`40px`,color:`white`},children:[(0,v.jsx)(`p`,{style:{fontSize:18},children:`还没有收集任何炫卡`}),(0,v.jsx)(`p`,{style:{fontSize:14,marginTop:8},children:`完成关卡即可获得炫卡！`})]}),(0,v.jsx)(f,{isOpen:!!s&&!!n,onClose:()=>{l(null),r(null),d(null)},showCloseButton:!0,children:s&&n&&u&&(0,v.jsx)(B,{character:s,variantImage:u.image,variantName:u.displayName,variantRarity:u.rarity,variantStats:u.stats,collectedAt:n.collectedAt,stars:n.stars})})]})};export{V as t};
//# sourceMappingURL=card-collection.component-CDrkKoPV.js.map