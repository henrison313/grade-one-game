import{a as e,i as t}from"./config-msfdsG27.js";import{B as n,I as r,J as i,P as a,R as o,V as s,W as ee,Y as c,a as l,l as u,o as d,q as f,r as p,s as te,z as m}from"./index-DQp0kEH0.js";import{i as h,n as ne,t as re}from"./character-variants.data-Dfbxzioa.js";var g=c(f(),1),_=n(),v=s(o.div)`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`,y=s.div`
  background: linear-gradient(145deg, ${e=>t[e.$rarity].color} 0%, ${e=>t[e.$rarity].glow} 100%);
  padding: 20px;
  text-align: center;
  position: relative;
`,b=s.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`,x=s.span`
  display: block;
  font-size: 12px;
  color: white;
  margin-top: 4px;
  font-weight: 600;
`,S=s.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  position: relative;
  z-index: 1;
`,C=s(o.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`,w=s.span`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: ${e.textSecondary};
  white-space: nowrap;
`,T=s(o.div)`
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
`,E=s(o.img)`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`,D=s.div`
  padding: 24px;
`,ie=s.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 8px;
`,ae=s.p`
  font-size: 16px;
  color: ${e.textSecondary};
  text-align: center;
  margin-bottom: 20px;
`,oe=s.p`
  font-size: 14px;
  color: ${e.textSecondary};
  line-height: 1.6;
  margin-bottom: 20px;
`,se=s.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`,O=s.div`
  background: #f9fafb;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
`,k=s.div`
  font-size: 12px;
  color: ${e.textSecondary};
  margin-bottom: 4px;
`,A=s.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
`,ce=s.div`
  margin-bottom: 20px;
`,j=s.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
  margin-bottom: 12px;
`,M=s.div`
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
`,B=({character:e,variantImage:n,variantName:r,variantRarity:i,variantStats:a,collectedAt:o,stars:s,onClose:ee})=>{let[c,l]=(0,g.useState)(!1),u=n||e.cardImage||e.robotImage,d=r||e.name,f=i||e.rarity,p=a||e.stats;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(v,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[(0,_.jsxs)(y,{$rarity:f,children:[(0,_.jsxs)(b,{children:[`#`,e.number]}),(0,_.jsx)(x,{children:t[f]?.name||`普通`})]}),(0,_.jsxs)(S,{children:[(0,_.jsx)(C,{src:u,alt:d,onClick:()=>l(!0),whileHover:{scale:1.05},whileTap:{scale:.98}}),(0,_.jsx)(w,{children:`点击放大`})]}),(0,_.jsxs)(D,{children:[(0,_.jsx)(ie,{children:d}),(0,_.jsx)(ae,{children:e.title}),(0,_.jsx)(oe,{children:e.description}),(0,_.jsxs)(se,{children:[(0,_.jsxs)(O,{children:[(0,_.jsx)(k,{children:`身高`}),(0,_.jsx)(A,{children:p.height})]}),(0,_.jsxs)(O,{children:[(0,_.jsx)(k,{children:`体重`}),(0,_.jsx)(A,{children:p.weight})]}),(0,_.jsxs)(O,{children:[(0,_.jsx)(k,{children:`速度`}),(0,_.jsx)(A,{children:p.speed})]}),(0,_.jsxs)(O,{children:[(0,_.jsx)(k,{children:`力量`}),(0,_.jsx)(A,{children:p.power})]})]}),e.skills.length>0&&(0,_.jsxs)(ce,{children:[(0,_.jsx)(j,{children:`技能`}),e.skills.map((e,t)=>(0,_.jsxs)(M,{children:[(0,_.jsx)(N,{children:e.name}),(0,_.jsx)(P,{children:e.description})]},t))]}),e.knowledge.length>0&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(j,{children:`关联知识`}),(0,_.jsx)(F,{children:e.knowledge.map((e,t)=>(0,_.jsx)(I,{children:e},t))})]})]}),(o||s)&&(0,_.jsxs)(L,{children:[o&&(0,_.jsxs)(R,{children:[`收集于 `,new Date(o).toLocaleDateString()]}),s&&(0,_.jsxs)(z,{children:[`⭐ `,s]})]})]}),(0,_.jsx)(m,{children:c&&(0,_.jsx)(T,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>l(!1),children:(0,_.jsx)(E,{src:u,alt:d,initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},transition:{type:`spring`,damping:25}})})})]})},V=i({default:()=>Ne}),H=[`juli-fengbao`,`baoche-jiushi`,`liehuo-xiuluo`,`anying-tegong`,`tiebi-jueshi`,`penshi-jialun`,`liebian-qishi`,`baolie-zhongka`,`shenhai-tianmao`,`zhongli-jingang`,`xuantie-zhanshen`,`xuanlan-shandian-s`,`gangbi-lishi`,`xingji-youxia`,`baoxuan-luoke`,`shenhai-bawang`,`yinyi-qishi`,`zhongzhang-chihunwang`],U={...t,bronze:{name:`青铜`,color:`#CD7F32`,glow:`rgba(205, 127, 50, 0.5)`},silver:{name:`白银`,color:`#C0C0C0`,glow:`rgba(192, 192, 192, 0.5)`},gold:{name:`黄金`,color:`#FFD700`,glow:`rgba(255, 215, 0, 0.5)`},rainbow:{name:`彩虹`,color:`#FF0080`,glow:`rgba(255, 255, 255, 0.8)`},prismatic:{name:`炫彩`,color:`#FF0080`,glow:`rgba(255, 0, 128, 0.8)`}},W=s.div`
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
`,ue=s(d)`
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
`,pe=s(o.div)`
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
`,X=s(o.div)`
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
`,Ee=s(o.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,De=s(o.div)`
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
`,ke=s(o.div)`
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
`,Ne=()=>{let[e,t]=(0,g.useState)(`C`),[n,i]=(0,g.useState)(null),[o,s]=(0,g.useState)(null),[c,d]=(0,g.useState)(null),f=ee(),v=u.getUserData(),{playBGM:y,stopBGM:b}=te();(0,g.useEffect)(()=>(y(`collection`),()=>b()),[]);let x=(0,g.useMemo)(()=>{let e=v.collectedCards.length,t=re.length,n=v.totalStars,r={};return v.collectedCards.forEach(e=>{r[e.rarity]=(r[e.rarity]||0)+1}),{collected:e,totalVariants:t,totalStars:n,byRarity:r}},[v]),S=(0,g.useMemo)(()=>{let e={};return v.collectedCards.forEach(t=>{e[t.characterId]||(e[t.characterId]=[]),e[t.characterId].push(t)}),e},[v.collectedCards]),C=e=>{let t=h(e);if(t.length===0){let t=a(e);if(t)return[{characterId:e,variant:`base`,rarity:`rare`,image:t.robotImage,difficulty:r.EASY,displayName:t.name},{characterId:e,variant:`flame`,rarity:`gold`,image:t.robotImage,difficulty:r.MEDIUM,displayName:`${t.name}·进阶`},{characterId:e,variant:`ultimate`,rarity:`rainbow`,image:t.robotImage,difficulty:r.HARD,displayName:`${t.name}·终极`}]}return t},w=(0,g.useMemo)(()=>v.collectedCards.slice(-3).map(e=>{let t=a(e.characterId);return{image:h(e.characterId).find(t=>t.variant===e.variant)?.image||t?.robotImage||``,rarity:e.rarity}}).filter(e=>e.image),[v.collectedCards]),T=e=>{let t=a(e.characterId);if(t){let n=h(e.characterId).find(t=>t.variant===e.variant);i(e),s(t),d({image:n?.image||t.robotImage,displayName:n?.displayName||t.name,rarity:e.rarity,stats:n?.stats})}};return(0,_.jsxs)(W,{children:[x.collected>0&&(0,_.jsxs)(pe,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[(0,_.jsx)(p,{mode:`display`,displayCards:w}),(0,_.jsxs)(me,{children:[(0,_.jsx)(he,{children:`炫卡召唤器`}),(0,_.jsxs)(ge,{children:[`已收集 `,x.collected,` 张炫卡`]})]})]}),(0,_.jsxs)(G,{children:[(0,_.jsx)(le,{children:`卡牌收集册`}),(0,_.jsxs)(de,{children:[(0,_.jsx)(K,{$active:e===`A`,onClick:()=>t(`A`),children:`徽章墙`}),(0,_.jsx)(K,{$active:e===`C`,onClick:()=>t(`C`),children:`卡片`})]}),(0,_.jsx)(ue,{onClick:()=>f(`/levels`),children:`返回`})]}),(0,_.jsxs)(fe,{children:[(0,_.jsxs)(q,{children:[(0,_.jsx)(J,{children:x.collected}),(0,_.jsx)(Y,{children:`已收集`})]}),(0,_.jsxs)(q,{children:[(0,_.jsx)(J,{children:x.totalStars}),(0,_.jsx)(Y,{children:`总星星`})]}),Object.entries(U).filter(([e])=>(x.byRarity[e]||0)>0).map(([e,t])=>(0,_.jsxs)(q,{children:[(0,_.jsx)(J,{style:{color:t.color},children:x.byRarity[e]||0}),(0,_.jsx)(Y,{children:t.name})]},e))]}),(0,_.jsxs)(m,{mode:`wait`,children:[e===`A`&&(0,_.jsx)(Ee,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:H.map(e=>{let t=a(e);if(!t)return null;let n=C(e),r=S[e]||[],i=r.length,o=i>0;return(0,_.jsxs)(De,{$collected:o,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.2},children:[(0,_.jsxs)($,{children:[(0,_.jsx)(Oe,{$collected:o,children:(0,_.jsx)(`img`,{src:t.robotImage,alt:t.name})}),n.map((e,t)=>{let n=r.find(t=>t.variant===e.variant),i=!!n;return(0,_.jsx)(ke,{$collected:i,$angle:90+t*120,onClick:e=>{!i||!n||(e.stopPropagation(),T(n))},children:i?(0,_.jsx)(`img`,{src:e.image,alt:e.displayName}):(0,_.jsx)(Ae,{children:`?`})},e.variant)})]}),(0,_.jsx)(je,{children:t.name}),(0,_.jsxs)(Me,{children:[i,`/`,n.length,` 形态`]})]},e)})},`badge-wall`),e===`C`&&H.map(e=>{let t=a(e);if(!t)return null;let n=ne(e),r=C(e),i=S[e]||[],o=i.length;return(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(_e,{$color:n,children:[(0,_.jsx)(ve,{children:(0,_.jsx)(`img`,{src:t.robotImage,alt:t.name})}),(0,_.jsx)(ye,{children:t.name}),(0,_.jsxs)(be,{children:[o,`/`,r.length,` 形态`]})]}),(0,_.jsx)(xe,{children:r.map(t=>{let r=i.find(e=>e.variant===t.variant),a=!!r,o=t.image,s=t.displayName;return a&&r?(0,_.jsxs)(X,{$collected:!0,$groupColor:n,onClick:()=>T(r),whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,_.jsx)(Se,{src:o,alt:s}),(0,_.jsx)(Ce,{children:s}),(0,_.jsx)(Z,{children:t.variant===`base`?`基础`:t.variant===`flame`?`火焰`:t.variant===`battle`?`战地`:`终极`}),(0,_.jsx)(Q,{$rarity:t.rarity,children:U[t.rarity]?.name||`普通`})]},`${e}-${t.variant}`):(0,_.jsxs)(X,{$collected:!1,$groupColor:n,initial:{opacity:0},animate:{opacity:.5},children:[(0,_.jsx)(we,{children:`?`}),(0,_.jsx)(Te,{children:s}),(0,_.jsx)(Z,{children:t.variant===`base`?`基础`:t.variant===`flame`?`火焰`:t.variant===`battle`?`战地`:`终极`}),(0,_.jsx)(Q,{$rarity:t.rarity,children:`未获得`})]},`${e}-${t.variant}-empty`)})})]},e)})]}),v.collectedCards.length===0&&(0,_.jsxs)(`div`,{style:{textAlign:`center`,padding:`40px`,color:`white`},children:[(0,_.jsx)(`p`,{style:{fontSize:18},children:`还没有收集任何炫卡`}),(0,_.jsx)(`p`,{style:{fontSize:14,marginTop:8},children:`完成关卡即可获得炫卡！`})]}),(0,_.jsx)(l,{isOpen:!!o&&!!n,onClose:()=>{s(null),i(null),d(null)},showCloseButton:!0,children:o&&n&&c&&(0,_.jsx)(B,{character:o,variantImage:c.image,variantName:c.displayName,variantRarity:c.rarity,variantStats:c.stats,collectedAt:n.collectedAt,stars:n.stars})})]})};export{V as t};
//# sourceMappingURL=card-collection.component-Ddd-qK8G.js.map