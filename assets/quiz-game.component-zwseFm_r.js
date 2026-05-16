import{a as e,r as t}from"./config-msfdsG27.js";import{A as n,B as r,C as i,D as a,E as o,F as s,G as c,H as l,I as u,J as d,K as f,L as p,M as m,N as h,O as g,R as _,S as v,T as y,U as b,V as x,W as S,_ as C,b as w,c as T,d as ee,g as te,h as ne,j as E,k as re,l as D,m as ie,n as O,p as ae,s as k,v as oe,w as se,x as ce,y as le,z as A}from"./index-Dab6msTD.js";import"./services-C_Dthk5B.js";import{r as ue}from"./character-variants.data-DG0wfiLE.js";import{a as de,i as fe,n as pe,o as me,r as he,t as ge}from"./hidden-levels.data-ChG0Vctj.js";import{a as _e,i as ve,n as ye,r as be,t as xe}from"./weapon-configs.data-CCpoKQmF.js";var j=d(f(),1),Se=[{type:`choice`,question:`下面哪个图形是圆形？`,options:[{id:`a`,text:``,shape:`circle`,shapeColor:`blue`},{id:`b`,text:``,shape:`triangle`,shapeColor:`red`},{id:`c`,text:``,shape:`square`,shapeColor:`green`},{id:`d`,text:``,shape:`rectangle`,shapeColor:`yellow`}],correctAnswer:`a`,explanation:`圆形是圆圆的，像一个球或者轮子，没有尖尖的角！`,hint:`想想哪些东西是圆圆的？比如皮球、时钟...`},{type:`choice`,question:`找出图中的三角形物体！`,questionImage:`/assets/shapes/triangle1.png`,options:[{id:`a`,text:`太阳伞 ☀️（伞面）`},{id:`b`,text:`皮球 🏀`},{id:`c`,text:`书本 📚`},{id:`d`,text:`窗户 🪟`}],correctAnswer:`a`,explanation:`太阳伞的伞面是三角形！三角形有三条边和三个角。`,hint:`三角形像一个小帐篷，有尖尖的角！`},{type:`choice`,question:`数一数，图中有几个正方形？

□ □ □`,options:[{id:`a`,text:`1个`},{id:`b`,text:`2个`},{id:`c`,text:`3个`},{id:`d`,text:`4个`}],correctAnswer:`c`,explanation:`我们来数一数：第1个是正方形，第2个是正方形，第3个是正方形。一共3个正方形！`,hint:`一个一个数，不要漏掉哦！`},{type:`choice`,question:`下面哪个图形是长方形，不是正方形？`,options:[{id:`a`,text:``,shape:`square`,shapeColor:`blue`},{id:`b`,text:``,shape:`rectangle`,shapeColor:`red`},{id:`c`,text:``,shape:`circle`,shapeColor:`green`},{id:`d`,text:``,shape:`square`,shapeColor:`yellow`}],correctAnswer:`b`,explanation:`长方形有两条长边和两条短边，正方形的四条边都一样长！`,hint:`长方形像一本书，长长的！`},{type:`drag`,question:`把图形拖到正确的名称上！`,instruction:`将图形拖到对应的位置`,items:[{id:`circle`,name:`⬤`,shape:`circle`},{id:`triangle`,name:`▲`,shape:`triangle`},{id:`square`,name:`◼`,shape:`square`},{id:`rectangle`,name:`▬`,shape:`rectangle`}],targets:[{id:`圆形`,name:`圆形`,accepts:[`circle`],position:{x:80,y:30},size:{width:170,height:150}},{id:`三角形`,name:`三角形`,accepts:[`triangle`],position:{x:330,y:30},size:{width:170,height:150}},{id:`正方形`,name:`正方形`,accepts:[`square`],position:{x:80,y:210},size:{width:170,height:150}},{id:`长方形`,name:`长方形`,accepts:[`rectangle`],position:{x:330,y:210},size:{width:170,height:150}}],explanation:`圆形圆圆的，三角形有三个角，正方形四条边一样长，长方形两条长两条短！`,hint:`仔细看看每个图形的样子！`}],Ce=[{type:`multi_select`,question:`圆形有什么特点？`,options:[{id:`a`,text:`没有尖尖的角`},{id:`b`,text:`圆圆的`},{id:`c`,text:`有直直的边`},{id:`d`,text:`可以滚动`}],correctAnswers:[`a`,`b`,`d`],explanation:`圆形圆圆的，没有角，可以滚动！但是圆形没有直直的边。`,hint:`想想皮球能做什么？`},{type:`link`,question:`把图形和它的特点连起来！`,pairs:[{id:`1`,left:`圆形`,right:`没有角`},{id:`2`,left:`三角形`,right:`三个角`},{id:`3`,left:`正方形`,right:`四条边一样长`},{id:`4`,left:`长方形`,right:`两条长两条短`}],explanation:`圆形没有角，三角形有三个角，正方形四条边一样长，长方形两条长两条短！`},{type:`choice`,question:`正方形和长方形有什么不同？`,options:[{id:`a`,text:`正方形有4条边，长方形有3条边`},{id:`b`,text:`正方形四条边一样长，长方形两条长两条短`},{id:`c`,text:`正方形有角，长方形没有角`},{id:`d`,text:`它们是一样的`}],correctAnswer:`b`,explanation:`正方形的四条边都一样长，长方形有两条长边和两条短边！`,hint:`想想书本和积木的区别！`},{type:`multi_select`,question:`用两个三角形可以拼成什么图形？`,options:[{id:`a`,text:`圆形`},{id:`b`,text:`正方形`},{id:`c`,text:`长方形`},{id:`d`,text:`大三角形`}],correctAnswers:[`b`,`c`,`d`],explanation:`两个直角三角形可以拼成正方形或长方形！两个相同的三角形可以拼成一个大三角形！圆形不能用三角形拼成。`,hint:`想想用积木拼一拼！`},{type:`circle`,question:`在图中圈出所有的圆形和三角形！`,instruction:`点击圈出圆形和三角形`,image:`/assets/shapes/mixed-shapes.svg`,answerAreas:[{id:`c1`,x:50,y:80,radius:30,label:`冰淇淋球`},{id:`c2`,x:135,y:120,radius:10,label:`窗户1`},{id:`c3`,x:165,y:120,radius:10,label:`窗户2`},{id:`c4`,x:215,y:145,radius:15,label:`轮子1`},{id:`c5`,x:265,y:145,radius:15,label:`轮子2`},{id:`c6`,x:205,y:115,radius:8,label:`车灯`},{id:`t1`,x:50,y:135,radius:25,label:`蛋筒`},{id:`t2`,x:150,y:80,radius:25,label:`屋顶`},{id:`t3`,x:285,y:120,radius:12,label:`车尾灯`}],tolerance:10,explanation:`你找到了所有的圆形和三角形！圆形包括冰淇淋球、窗户、轮子和车灯；三角形包括蛋筒、屋顶和车尾灯！太棒了！`,hint:`仔细看看每个图形里藏着什么形状！`}],we=[{type:`fill_blank`,question:`把一个大圆形分成4个相同的图形，可以怎么分？答：分成{{___}}个相同的扇形`,answer:[`4`],explanation:`圆形可以分成4个相同的扇形，像披萨饼一样切成4块！`,hint:`想想披萨是怎么切的？`},{type:`choice`,question:`一个三角形剪掉一个角，还剩几个角？`,options:[{id:`a`,text:`2个`},{id:`b`,text:`3个`},{id:`c`,text:`4个`},{id:`d`,text:`5个`}],correctAnswer:`c`,explanation:`三角形有3个角，剪掉一个角后，原来的那个角变成了两个角，所以一共4个角！`,hint:`在纸上画一个三角形试试剪掉一个角！`},{type:`choice`,question:`正方形对折两次后是什么图形？`,options:[{id:`a`,text:`三角形`},{id:`b`,text:`小正方形`},{id:`c`,text:`长方形`},{id:`d`,text:`圆形`}],correctAnswer:`b`,explanation:`正方形对折一次变成长方形，再对折一次变成小正方形！`,hint:`拿一张正方形的纸折一折试试！`},{type:`fill_blank`,question:`用七巧板拼出一个长方形，至少需要{{___}}块`,answer:[`2`],explanation:`用七巧板拼长方形，最少需要2块三角形，也可以用更多块！`,hint:`七巧板里有几种三角形？`},{type:`shape_compose`,question:`设计一个图形组合！`,instruction:`把图形拖到画布中，自由排列组合成有趣的图案`,items:[{id:`c1`,name:`圆形`,shape:`circle`},{id:`c2`,name:`圆形`,shape:`circle`},{id:`t1`,name:`三角形`,shape:`triangle`},{id:`t2`,name:`三角形`,shape:`triangle`},{id:`t3`,name:`三角形`,shape:`triangle`},{id:`s1`,name:`正方形`,shape:`square`}],canvasSize:{width:300,height:200},requiredCounts:{circle:2,triangle:3,square:1},explanation:`你成功设计了包含2个圆形、3个三角形和1个正方形的图形组合！炫蓝雷霆炮组装完成！`}],Te={[s.EASY]:Se,[s.MEDIUM]:Ce,[s.HARD]:we},M=A(),Ee=r.div`
  width: 100%;
`,De=r.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.5;
`,Oe=r.img`
  max-width: 30%;
  max-height: 60px;
  margin: 0 auto 24px;
  border-radius: 12px;
`,ke=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Ae=r(p.button)`
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  cursor: ${e=>e.$disabled?`default`:`pointer`};
  border: 3px solid transparent;
  transition: all 0.2s ease;
  background: white;
  color: ${e.textPrimary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 80px;

  ${t=>t.$isCorrect?`
        border-color: ${e.success};
        background: rgba(16, 185, 129, 0.1);
      `:t.$isWrong?`
        border-color: ${e.error};
        background: rgba(239, 68, 68, 0.1);
      `:t.$isSelected?`
        border-color: ${e.primary};
        background: rgba(79, 70, 229, 0.1);
      `:`
      &:hover {
        border-color: ${e.primaryLight};
        background: rgba(79, 70, 229, 0.05);
      }
    `}
`,je=r.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`,Me=r.span`
  flex: 1;
  text-align: left;
`,Ne=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`,N=r.span`
  color: ${e.success};
  font-size: 24px;
`,Pe=r.span`
  color: ${e.error};
  font-size: 24px;
`,Fe=({question:e,selectedAnswer:t,isAnswered:n,onAnswer:r})=>{let{playClick:i,playCorrect:a,playWrong:o}=k(),s=e=>{n||(i(),r(e.id))},c=r=>{if(!n)return{isSelected:t===r.id,isCorrect:!1,isWrong:!1};let i=r.id===e.correctAnswer,a=t===r.id&&!i;return{isSelected:t===r.id,isCorrect:i,isWrong:a}};return j.useEffect(()=>{n&&t&&(t===e.correctAnswer?a():o())},[n,t,e.correctAnswer,a,o]),(0,M.jsxs)(Ee,{children:[(0,M.jsx)(De,{children:e.question}),e.questionImage&&(0,M.jsx)(Oe,{src:e.questionImage,alt:`题目图片`}),(0,M.jsx)(ke,{children:e.options.map((e,t)=>{let r=c(e);return(0,M.jsxs)(Ae,{$isSelected:r.isSelected,$isCorrect:r.isCorrect,$isWrong:r.isWrong,$disabled:n,onClick:()=>s(e),whileHover:n?{}:{scale:1.02},whileTap:n?{}:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:t*.1},children:[e.shape&&(0,M.jsx)(Ne,{children:(0,M.jsx)(O,{type:e.shape,color:e.shapeColor||`blue`,size:`small`,showLabel:!1})}),e.image&&(0,M.jsx)(je,{src:e.image,alt:e.text}),(0,M.jsx)(Me,{children:e.text}),r.isCorrect&&(0,M.jsx)(N,{children:`✓`}),r.isWrong&&(0,M.jsx)(Pe,{children:`✕`})]},e.id)})})]})},P={circle:`#3B82F6`,triangle:`#EF4444`,"triangle-big":`#EF4444`,"triangle-small":`#F87171`,square:`#10B981`,rectangle:`#F59E0B`,parallelogram:`#F59E0B`},F=({shape:e,size:t})=>{let n=P[e]||`#4F46E5`;switch(e){case`circle`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,children:(0,M.jsx)(`circle`,{cx:`50`,cy:`50`,r:`40`,fill:n,stroke:`#333`,strokeWidth:`2`})});case`triangle`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,children:(0,M.jsx)(`polygon`,{points:`50,15 85,85 15,85`,fill:n,stroke:`#333`,strokeWidth:`2`})});case`square`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 100 100`,children:(0,M.jsx)(`rect`,{x:`15`,y:`15`,width:`70`,height:`70`,fill:n,stroke:`#333`,strokeWidth:`2`})});case`rectangle`:return(0,M.jsx)(`svg`,{width:t,height:t*.7,viewBox:`0 0 100 70`,children:(0,M.jsx)(`rect`,{x:`5`,y:`5`,width:`90`,height:`60`,fill:n,stroke:`#333`,strokeWidth:`2`})});case`parallelogram`:return(0,M.jsx)(`svg`,{width:t,height:t*.6,viewBox:`0 0 120 70`,children:(0,M.jsx)(`polygon`,{points:`25,5 115,5 95,65 5,65`,fill:n,stroke:`#333`,strokeWidth:`2`})});case`triangle-big`:return(0,M.jsx)(`svg`,{width:t*1.3,height:t*1.3,viewBox:`0 0 100 100`,children:(0,M.jsx)(`polygon`,{points:`50,10 90,85 10,85`,fill:n,stroke:`#333`,strokeWidth:`2`})});case`triangle-small`:return(0,M.jsx)(`svg`,{width:t*.7,height:t*.7,viewBox:`0 0 100 100`,children:(0,M.jsx)(`polygon`,{points:`50,20 80,80 20,80`,fill:n,stroke:`#333`,strokeWidth:`2`})});default:return null}},I=r.div`
  width: 100%;
`,Ie=r.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 12px;
`,L=r.p`
  font-size: 16px;
  color: ${e.textSecondary};
  text-align: center;
  margin-bottom: 24px;
`,Le=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,R=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
`,Re=r(p.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: ${e=>e.$isPlaced?`default`:`grab`};
  opacity: ${e=>e.$isPlaced?.5:1};
  user-select: none;
  touch-action: none;
  padding: ${e=>e.$hasShape?`8px`:`12px 20px`};
  min-width: ${e=>e.$hasShape?`60px`:`100px`};
  min-height: ${e=>e.$hasShape?`60px`:`auto`};
`,z=r.span`
  font-size: 16px;
  font-weight: 600;
  color: ${e.textPrimary};
`,ze=r.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  gap: 20px;
`,Be=r.div`
  position: relative;
  width: ${e=>e.$size.width}px;
  height: ${e=>e.$size.height}px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
`,Ve=r(p.div)`
  position: absolute;
  left: ${e=>e.$position.x}px;
  top: ${e=>e.$position.y}px;
  width: ${e=>e.$size.width}px;
  height: ${e=>e.$size.height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  background: ${e=>e.$isCorrect?`rgba(16, 185, 129, 0.2)`:e.$isWrong?`rgba(239, 68, 68, 0.2)`:`rgba(255, 255, 255, 0.8)`};
  border: 2px dashed ${t=>t.$isCorrect?e.success:t.$isWrong?e.error:e.primaryLight};
  border-radius: 8px;
  transition: all 0.2s ease;
`,B=r.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`,V=r.line`
  stroke: #4F46E5;
  stroke-width: 3;
  stroke-linecap: round;
  opacity: 0.6;
`,He=r(p.div)`
  width: ${e=>e.$size.width}px;
  height: ${e=>e.$size.height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px;
  background: ${e=>e.$isCorrect?`rgba(16, 185, 129, 0.2)`:e.$isWrong?`rgba(239, 68, 68, 0.2)`:`rgba(255, 255, 255, 0.8)`};
  border: 2px dashed ${t=>t.$isCorrect?e.success:t.$isWrong?e.error:e.primaryLight};
  border-radius: 8px;
  transition: all 0.2s ease;
`,Ue=r.span`
  font-size: 14px;
  font-weight: 600;
  color: ${e.textPrimary};
`,H=r(p.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  min-width: 80px;
  cursor: ${e=>e.$removable?`pointer`:`default`};
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`,We=r.span`
  font-size: 14px;
  font-weight: 600;
  color: ${e.textPrimary};
`,Ge=r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  width: 100%;
`,U=r.span`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${e.error};
  color: white;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10;
`,Ke=r(p.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
`,qe=r(p.button)`
  margin-top: 12px;
  padding: 8px 24px;
  background: white;
  color: ${e.textSecondary};
  border: 2px solid ${e.textSecondary};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${e.textSecondary};
    color: white;
  }
`,Je=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,W=r(p.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
  opacity: ${e=>e.$visible?1:0};
  transform: translateX(${e=>e.$visible?0:-20}px);
  transition: all 0.3s ease;
`,Ye=r.span`
  font-size: 18px;
  font-weight: 600;
  color: white;
`,Xe=r(p.span)`
  font-size: 28px;
  font-weight: 700;
  color: #FFD700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`,Ze=r.span`
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 4px;
`,Qe=r.span`
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-left: 4px;
`,$e=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: 20px;
`,et=r(p.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${e=>e.$isComplete?`rgba(16, 185, 129, 0.15)`:`rgba(255, 255, 255, 0.5)`};
  border: 3px solid ${t=>t.$isComplete?e.success:`rgba(79, 70, 229, 0.3)`};
  border-radius: 16px;
  transition: all 0.3s ease;
`,tt=r.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e.textSecondary};
`,nt=r.div`
  display: flex;
  gap: 12px;
`,rt=r.span`
  font-size: 12px;
  font-weight: 600;
  color: ${e.textSecondary};
`,it=r(p.div)`
  font-size: 32px;
  font-weight: 700;
  color: ${e.success};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,at=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.1) 100%);
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 16px;
  margin-bottom: 20px;
`,ot=r.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${e.textSecondary};
  margin-bottom: 8px;
`,st=r(p.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3B82F6;
  border: 3px solid #1E40AF;
  cursor: grab;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

  &:hover {
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
  }
`,ct=r(p.div)`
  width: 80px;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${e=>e.$hasItems?`rgba(59, 130, 246, 0.1)`:`rgba(255, 255, 255, 0.8)`};
  border: 2px dashed ${e=>e.$hasItems?`#3B82F6`:`rgba(79, 70, 229, 0.3)`};
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s ease;
`,lt=r(p.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3B82F6;
  border: 2px solid #1E40AF;
  cursor: pointer;

  &:hover {
    background: #EF4444;
    border-color: #B91C1C;
  }
`,ut=({value:e,visible:t,unit:n})=>{let[r,i]=(0,j.useState)(0);return(0,j.useEffect)(()=>{if(!t){i(0);return}let n=e/30,r=0,a=setInterval(()=>{r+=n,r>=e?(i(e),clearInterval(a)):i(Math.round(r))},26.666666666666668);return()=>clearInterval(a)},[e,t]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Xe,{initial:{scale:.8},animate:{scale:t?1:.8},transition:{type:`spring`,stiffness:300},children:r}),n&&(0,M.jsx)(Qe,{children:n})]})},dt=({question:t,placements:n,isAnswered:r,onAnswer:i})=>{let{playDrag:a,playDrop:o,playCorrect:s,playWrong:c}=k(),[l,u]=(0,j.useState)(n||{}),[d,f]=(0,j.useState)(null),[p,m]=(0,j.useState)({}),[h,g]=(0,j.useState)(null),[_,v]=(0,j.useState)(!1),y=t.targets.length===2&&t.targets.some(e=>e.id===`tens`||e.id===`ones`)&&t.items.every(e=>e.shape===`circle`),[b,x]=(0,j.useState)({}),S=t.items.length,C=(0,j.useMemo)(()=>{if(!y)return[];let e=[];for(let t=0;t<=S;t++)e.push(t*10+(S-t));return e},[y,S]),w=()=>{let e=Object.values(b).filter(e=>e.tens+e.ones===S);if(e.length!==C.length)return!1;let t=e.map(e=>e.tens*10+e.ones);return t.every(e=>C.includes(e))&&new Set(t).size===C.length},T=(e,t)=>{r||(x(n=>{let r=n[e]||{tens:0,ones:0};return r.tens+r.ones>=S?n:{...n,[e]:{...r,[t]:r[t]+1}}}),o(),f(null))},ee=(e,t)=>{r||x(n=>{let r=n[e]||{tens:0,ones:0};return r[t]<=0?n:{...n,[e]:{...r,[t]:r[t]-1}}})},te=()=>{r||x({})},ne=()=>{r||(w()?(s(),i({__digitPlacementCorrect:!0})):(c(),i({})))},E=(e,t=0)=>p[e]??t,re=(e,t=0)=>{if(r)return;let n=(t+90)%360;m(t=>({...t,[e]:n}))},D=e=>{r||(v(!1),g(setTimeout(()=>{v(!0),re(e,E(e,0))},300)))},ie=e=>{h&&(clearTimeout(h),g(null)),!_&&!r&&A(e),v(!1)},O=()=>{h&&(clearTimeout(h),g(null)),v(!1)},ae=t.items.every(e=>Object.values(l).some(t=>t.includes(e.id))),oe=(0,j.useCallback)(()=>t.items.every(e=>{let n=Object.keys(l).find(t=>l[t].includes(e.id));if(!n)return!1;let r=t.targets.find(e=>e.id===n);if(!r||!r.accepts.includes(e.id))return!1;if(r.rotation!==void 0){let t=E(e.id,e.rotation||0),n=r.rotation,i=r.rotationTolerance||15,a=e=>(e%360+360)%360,o=a(t),s=a(n),c=Math.abs(o-s);if(Math.min(c,360-c)>i)return!1}return!0}),[l,t.items,t.targets,p]),se=e=>{r||(f(e),a())},ce=()=>{f(null)},le=e=>{if(!d||r)return;let t={...l};Object.keys(t).forEach(e=>{t[e]=(t[e]||[]).filter(e=>e!==d)}),t[e]||(t[e]=[]),t[e].includes(d)||t[e].push(d),u(t),o(),f(null)},A=e=>{if(r)return;let t={...l};Object.keys(t).forEach(n=>{t[n]=(t[n]||[]).filter(t=>t!==e)}),Object.keys(t).forEach(e=>{t[e].length===0&&delete t[e]}),u(t)},ue=()=>{r||u({})},de=()=>{!ae||r||(i(l),oe()?s():c())},fe=e=>{if(!r)return{hasItem:!!(l[e.id]&&l[e.id].length>0),isCorrect:!1,isWrong:!1};let t=l[e.id]||[],n=t.length>0&&t.every(t=>e.accepts.includes(t));return{hasItem:t.length>0,isCorrect:n,isWrong:!n&&t.length>0}},pe=(e,t)=>{let n=E(e.id,e.rotation||0);return(0,M.jsx)(Re,{"data-testid":`drag-item`,"data-item-id":e.id,$isPlaced:t,$hasShape:!!e.shape,draggable:!r&&!t,onDragStart:()=>se(e.id),onDragEnd:ce,onTouchStart:()=>{r||t||(f(e.id),a())},onTouchEnd:e=>{if(!d)return;let t=e.changedTouches[0],n=document.elementFromPoint(t.clientX,t.clientY)?.closest(`[data-target-id]`);if(n){let e=n.getAttribute(`data-target-id`);e&&le(e)}f(null)},animate:{rotate:n,scale:1},whileHover:!r&&!t?{scale:1.05}:{},whileTap:!r&&!t?{scale:.95}:{},transition:{type:`spring`,stiffness:300,damping:20},children:e.shape?(0,M.jsx)(F,{shape:e.shape,size:40}):(0,M.jsx)(z,{children:e.name})},e.id)},me=e=>{let n=fe(e),i=l[e.id]||[],a=i.map(e=>t.items.find(t=>t.id===e)).filter(Boolean),o=e.accepts.every(e=>i.includes(e)),s=t.calculation&&o&&!r;return(0,M.jsxs)(Je,{$centered:!!t.calculation,children:[(0,M.jsxs)(He,{"data-testid":`drop-target`,"data-target-id":e.id,$hasItem:n.hasItem,$isCorrect:n.isCorrect,$isWrong:n.isWrong,$size:e.size,onDragOver:e=>e.preventDefault(),onDrop:t=>{t.preventDefault(),le(e.id)},whileHover:{scale:1.02},children:[(0,M.jsx)(Ue,{children:e.name}),(0,M.jsx)(Ge,{children:a.map(e=>(0,M.jsxs)(H,{$removable:!r,initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:300},onMouseDown:()=>D(e.id),onMouseUp:()=>ie(e.id),onMouseLeave:O,whileHover:r?{}:{scale:1.05},whileTap:r?{}:{scale:.95},title:r?``:`长按旋转，单击移除`,children:[!r&&(0,M.jsx)(U,{children:`×`}),e.shape?(0,M.jsx)(`div`,{style:{transform:`rotate(${E(e.id,e.rotation||0)}deg)`,cursor:r?`default`:`pointer`,padding:`4px`},children:(0,M.jsx)(F,{shape:e.shape,size:60})}):(0,M.jsx)(We,{children:e.name})]},e.id))})]}),s&&t.calculation&&(0,M.jsxs)(W,{$visible:!0,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:`spring`,stiffness:300,delay:.2},children:[(0,M.jsx)(Ye,{children:t.calculation.label}),(0,M.jsx)(Ze,{children:`=`}),(0,M.jsx)(ut,{value:t.calculation.result,visible:!0,unit:t.calculation.unit})]})]},e.id)},he=e=>{let n=fe(e),i=(l[e.id]||[]).map(e=>t.items.find(t=>t.id===e)).filter(Boolean);return(0,M.jsxs)(Ve,{"data-testid":`drop-target`,"data-target-id":e.id,$hasItem:n.hasItem,$isCorrect:n.isCorrect,$isWrong:n.isWrong,$size:e.size,$position:e.position,onDragOver:e=>e.preventDefault(),onDrop:t=>{t.preventDefault(),le(e.id)},whileHover:{scale:1.02},children:[(0,M.jsx)(Ue,{children:e.name}),(0,M.jsx)(Ge,{children:i.map(e=>(0,M.jsxs)(H,{$removable:!r,initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:300},onMouseDown:()=>D(e.id),onMouseUp:()=>ie(e.id),onMouseLeave:O,whileHover:r?{}:{scale:1.05},whileTap:r?{}:{scale:.95},title:r?``:`长按旋转，单击移除`,children:[!r&&(0,M.jsx)(U,{children:`×`}),e.shape?(0,M.jsx)(`div`,{style:{transform:`rotate(${E(e.id,e.rotation||0)}deg)`,cursor:r?`default`:`pointer`,padding:`4px`},children:(0,M.jsx)(F,{shape:e.shape,size:50})}):(0,M.jsx)(We,{children:e.name})]},e.id))})]},e.id)},ge=t.useAbsoluteLayout,_e=t.layoutSize||{width:700,height:350};return(0,M.jsxs)(I,{children:[(0,M.jsx)(Ie,{children:t.question}),(0,M.jsx)(L,{children:t.instruction}),(0,M.jsxs)(Le,{children:[!y&&(0,M.jsx)(R,{children:t.items.map(e=>pe(e,Object.values(l).some(t=>t.includes(e.id))))}),y?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(at,{children:[(0,M.jsx)(ot,{children:`圆片库 - 拖出圆片放到下面的目标框中`}),Array.from({length:10}).map((e,t)=>(0,M.jsx)(st,{draggable:!r,onDragStart:()=>se(`lib-circle-${t}`),onDragEnd:ce,whileHover:{scale:1.1},whileTap:{scale:.9},onTouchStart:()=>{r||(f(`lib-circle-${t}`),a())}},`lib-${t}`))]}),(0,M.jsx)($e,{children:C.map((t,n)=>{let r=`group-${n}`,i=b[r]||{tens:0,ones:0},a=i.tens*10+i.ones,o=i.tens+i.ones===S,s=o&&a===t;return(0,M.jsxs)(et,{$isComplete:s,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:n*.1},children:[(0,M.jsxs)(tt,{children:[`组合 `,n+1]}),(0,M.jsxs)(nt,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,M.jsx)(rt,{children:`十位`}),(0,M.jsx)(ct,{$hasItems:i.tens>0,"data-target-id":`${r}-tens`,onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),T(r,`tens`)},onTouchEnd:e=>{if(!d)return;let t=e.changedTouches[0];document.elementFromPoint(t.clientX,t.clientY)?.closest(`[data-target-id]`)?.getAttribute(`data-target-id`)===`${r}-tens`&&T(r,`tens`),f(null)},whileHover:{scale:1.02},children:Array.from({length:i.tens}).map((e,t)=>(0,M.jsx)(lt,{onClick:()=>ee(r,`tens`),whileHover:{scale:1.2},title:`点击移除`},`t-${t}`))})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`4px`},children:[(0,M.jsx)(rt,{children:`个位`}),(0,M.jsx)(ct,{$hasItems:i.ones>0,"data-target-id":`${r}-ones`,onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault(),T(r,`ones`)},onTouchEnd:e=>{if(!d)return;let t=e.changedTouches[0];document.elementFromPoint(t.clientX,t.clientY)?.closest(`[data-target-id]`)?.getAttribute(`data-target-id`)===`${r}-ones`&&T(r,`ones`),f(null)},whileHover:{scale:1.02},children:Array.from({length:i.ones}).map((e,t)=>(0,M.jsx)(lt,{onClick:()=>ee(r,`ones`),whileHover:{scale:1.2},title:`点击移除`},`o-${t}`))})]})]}),o&&(0,M.jsxs)(it,{initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:300},style:{color:s?e.success:e.error},children:[`= `,a]}),!o&&i.tens+i.ones>0&&(0,M.jsxs)(`div`,{style:{fontSize:`12px`,color:e.textSecondary},children:[`还需 `,S-i.tens-i.ones,` 个圆片`]})]},r)})})]}):ge?(0,M.jsx)(Be,{$size:_e,children:t.targets.map(he)}):(0,M.jsxs)(ze,{children:[t.connections&&t.connections.length>0&&(0,M.jsxs)(B,{children:[(0,M.jsx)(`defs`,{children:(0,M.jsx)(`marker`,{id:`arrowhead`,markerWidth:`10`,markerHeight:`7`,refX:`9`,refY:`3.5`,orient:`auto`,children:(0,M.jsx)(`polygon`,{points:`0 0, 10 3.5, 0 7`,fill:`#4F46E5`})})}),t.connections.map((e,n)=>{let r=t.targets.find(t=>t.id===e.from),i=t.targets.find(t=>t.id===e.to);return!r||!i?null:(0,M.jsx)(V,{x1:r.position.x+r.size.width/2,y1:r.position.y+r.size.height/2,x2:i.position.x+i.size.width/2,y2:i.position.y+i.size.height/2,markerEnd:`url(#arrowhead)`},`conn-${n}`)})]}),t.targets.map(me)]}),y&&!r&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Ke,{onClick:ne,whileHover:{scale:1.05},whileTap:{scale:.95},style:{marginTop:`24px`},children:`确认答案`}),(0,M.jsx)(qe,{onClick:te,whileHover:{scale:1.05},whileTap:{scale:.95},children:`重置`}),(0,M.jsxs)(`div`,{style:{fontSize:`14px`,color:e.textSecondary,marginTop:`8px`},children:[`提示：每组合计需要 `,S,` 个圆片，共 `,C.length,` 种组合`]})]}),!y&&!r&&ae&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Ke,{onClick:de,whileHover:{scale:1.05},whileTap:{scale:.95},children:`确认答案`}),(0,M.jsx)(qe,{onClick:ue,whileHover:{scale:1.05},whileTap:{scale:.95},children:`重置`})]})]})]})},ft=r.div`
  width: 100%;
`,pt=r.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 12px;
`,mt=r.p`
  font-size: 16px;
  color: ${e.textSecondary};
  text-align: center;
  margin-bottom: 24px;
`,ht=r.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,gt=r.canvas`
  width: 100%;
  display: block;
  cursor: crosshair;
`,_t=r.div`
  position: absolute;
  left: ${e=>e.$x}px;
  top: ${e=>e.$y}px;
  width: ${e=>e.$radius*2}px;
  height: ${e=>e.$radius*2}px;
  border: 4px solid ${t=>t.$isCorrect?e.success:e.error};
  background: ${e=>e.$isCorrect?`rgba(16, 185, 129, 0.2)`:`rgba(239, 68, 68, 0.2)`};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`,vt=r.div`
  position: absolute;
  left: ${e=>e.$x}px;
  top: ${e=>e.$y}px;
  width: ${e=>e.$radius*2}px;
  height: ${e=>e.$radius*2}px;
  border: 3px dashed ${e.success};
  background: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: ${e.success};
`,yt=r(p.button)`
  margin-top: 16px;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.9);
  color: ${e.textPrimary};
  border: 2px solid ${e.primaryLight};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,bt=r(p.button)`
  margin-top: 16px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`,xt=r.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`,St=({question:e,marks:t,isAnswered:n,onAnswer:r})=>{let{playClick:i,playCorrect:a,playWrong:o}=k(),s=(0,j.useRef)(null),[c,l]=(0,j.useState)(t||[]),[u,d]=(0,j.useState)(!1),[f,p]=(0,j.useState)(1);(0,j.useEffect)(()=>{let t=s.current;if(!t)return;let n=t.getContext(`2d`);if(!n)return;let r=new Image;r.src=e.image||``,r.onload=()=>{let e=r.width,i=r.height;e>500&&(i=i*500/e,e=500),i>400&&(e=e*400/i,i=400),t.width=e,t.height=i,p(e/r.width),n.drawImage(r,0,0,e,i),d(!0)},r.onerror=()=>{t.width=500,t.height=360,p(1),n.fillStyle=`#F8FAFC`,n.fillRect(0,0,t.width,t.height);let r=[`#FF6B6B`,`#FF6B6B`,`#4ECDC4`,`#95E1D3`,`#FFA07A`,`#F7DC6F`,`#FFA07A`,`#4ECDC4`,`#95E1D3`],i=`#333`,a=(e,t,r,a,o=0)=>{n.save(),n.translate(e,t),n.rotate(o*Math.PI/180),n.fillStyle=a,n.strokeStyle=i,n.lineWidth=2,n.beginPath(),n.moveTo(0,0),n.lineTo(r,0),n.lineTo(0,-r),n.closePath(),n.fill(),n.stroke(),n.restore()},o=(e,t,r,a)=>{n.fillStyle=a,n.strokeStyle=i,n.lineWidth=2,n.beginPath(),n.arc(e,t,r,0,Math.PI*2),n.fill(),n.stroke()},s=(e,t,r,a)=>{n.fillStyle=a,n.strokeStyle=i,n.lineWidth=2,n.fillRect(e-r/2,t-r/2,r,r),n.strokeRect(e-r/2,t-r/2,r,r)},c=(e,t,r,a,o)=>{n.fillStyle=o,n.strokeStyle=i,n.lineWidth=2,n.fillRect(e-r/2,t-a/2,r,a),n.strokeRect(e-r/2,t-a/2,r,a)};e.answerAreas&&e.answerAreas.length>0?e.answerAreas.forEach((e,t)=>{let l=r[t%r.length],u=e.label||``;if(u.match(/\d+\s*[-+]\s*\d+/))n.fillStyle=`#E0F2FE`,n.strokeStyle=`#0EA5E9`,n.lineWidth=2,n.fillRect(e.x-100/2,e.y-60/2,100,60),n.strokeRect(e.x-100/2,e.y-60/2,100,60),n.fillStyle=`#0369A1`,n.font=`bold 20px sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(u,e.x,e.y);else if(u.includes(`三角形`)){let r=t===0?0:t===1?180:t===4?90:270;a(e.x,e.y,50,l,r),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+35)}else u.includes(`圆形`)?(o(e.x,e.y,25,l),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+35)):u.includes(`正方形`)?(s(e.x,e.y,45,l),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+35)):u.includes(`长方形`)?(c(e.x,e.y,60,40,l),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+35)):u.includes(`小鱼`)||u.includes(`鱼`)?(n.save(),n.translate(e.x,e.y),n.fillStyle=`#FF6B6B`,n.strokeStyle=i,n.lineWidth=2,n.beginPath(),n.moveTo(-25,0),n.lineTo(25,-20),n.lineTo(25,20),n.closePath(),n.fill(),n.stroke(),n.fillStyle=`#FFA07A`,n.beginPath(),n.moveTo(25,0),n.lineTo(45,-15),n.lineTo(45,15),n.closePath(),n.fill(),n.stroke(),n.restore(),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+45)):u.includes(`小船`)||u.includes(`船`)?(n.save(),n.translate(e.x,e.y),n.fillStyle=`#4ECDC4`,n.strokeStyle=i,n.lineWidth=2,n.beginPath(),n.moveTo(-30,10),n.lineTo(30,10),n.lineTo(20,-10),n.lineTo(-20,-10),n.closePath(),n.fill(),n.stroke(),n.fillStyle=`#F7DC6F`,n.beginPath(),n.moveTo(0,-10),n.lineTo(0,-40),n.lineTo(20,-10),n.closePath(),n.fill(),n.stroke(),n.restore(),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+50)):u.includes(`房子`)?(n.save(),n.translate(e.x,e.y),n.fillStyle=`#95E1D3`,n.strokeStyle=i,n.lineWidth=2,n.fillRect(-20,-5,40,35),n.strokeRect(-20,-5,40,35),n.fillStyle=`#FF6B6B`,n.beginPath(),n.moveTo(-25,-5),n.lineTo(0,-35),n.lineTo(25,-5),n.closePath(),n.fill(),n.stroke(),n.restore(),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+50)):u.includes(`猫`)?(n.save(),n.translate(e.x,e.y),n.fillStyle=`#FFA07A`,n.strokeStyle=i,n.lineWidth=2,n.beginPath(),n.moveTo(-20,20),n.lineTo(20,20),n.lineTo(0,-15),n.closePath(),n.fill(),n.stroke(),n.fillStyle=`#F7DC6F`,n.fillRect(-10,-30,20,20),n.strokeRect(-10,-30,20,20),n.fillStyle=`#FF6B6B`,n.beginPath(),n.moveTo(-10,-30),n.lineTo(-15,-40),n.lineTo(-5,-30),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(10,-30),n.lineTo(15,-40),n.lineTo(5,-30),n.closePath(),n.fill(),n.stroke(),n.restore(),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.textBaseline=`alphabetic`,n.fillText(u,e.x,e.y+50)):(n.fillStyle=`#E0E7FF`,n.strokeStyle=`#6366F1`,n.lineWidth=2,n.beginPath(),n.arc(e.x,e.y,30,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle=`#333`,n.font=`bold 14px sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(u,e.x,e.y))}):(a(120,160,50,`#3B82F6`,0),a(200,160,50,`#EF4444`,180),n.fillStyle=`#333`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.fillText(`三角形1`,120,195),n.fillText(`三角形2`,200,195)),d(!0)}},[e.image]);let m=e=>{if(n)return;let t=s.current;if(!t)return;let r=t.getBoundingClientRect(),a={x:e.clientX-r.left,y:e.clientY-r.top,radius:30};l([...c,a]),i()},h=e=>{if(n)return;let t=s.current;if(!t)return;let r=t.getBoundingClientRect(),a=e.touches[0],o={x:a.clientX-r.left,y:a.clientY-r.top,radius:30};l([...c,o]),i()},g=()=>{l([])},_=(0,j.useCallback)(()=>(e.correctAnswers||e.answerAreas.map(e=>e.id)).map(t=>{let n=e.answerAreas.find(e=>e.id===t);if(!n)return!1;let r={x:n.x*f,y:n.y*f,radius:n.radius*f};return c.some(t=>Math.sqrt((t.x-r.x)**2+(t.y-r.y)**2)<t.radius+r.radius-e.tolerance)}).every(e=>e),[c,e.answerAreas,e.correctAnswers,e.tolerance,f]);return(0,M.jsxs)(ft,{children:[(0,M.jsx)(pt,{children:e.question}),(0,M.jsx)(mt,{children:e.instruction}),(0,M.jsxs)(ht,{children:[(0,M.jsx)(gt,{ref:s,onClick:m,onTouchStart:h}),u&&(()=>{if(!n)return c.map((e,t)=>(0,M.jsx)(_t,{$x:e.x,$y:e.y,$radius:e.radius,$isCorrect:!1},t));let t=[],r=e.correctAnswers||e.answerAreas.map(e=>e.id);return r.forEach(n=>{let r=e.answerAreas.find(e=>e.id===n);if(!r)return;let i={x:r.x*f,y:r.y*f,radius:r.radius*f};c.some(t=>Math.sqrt((t.x-i.x)**2+(t.y-i.y)**2)<t.radius+i.radius-e.tolerance)||t.push((0,M.jsx)(vt,{$x:i.x,$y:i.y,$radius:i.radius,children:r.label},`correct-${n}`))}),c.forEach((n,i)=>{let a=e.answerAreas.find(t=>{let r={x:t.x*f,y:t.y*f,radius:t.radius*f};return Math.sqrt((n.x-r.x)**2+(n.y-r.y)**2)<n.radius+r.radius-e.tolerance}),o=a?r.includes(a.id):!1;t.push((0,M.jsx)(_t,{$x:n.x,$y:n.y,$radius:n.radius,$isCorrect:o},`mark-${i}`))}),t})()]}),(0,M.jsxs)(xt,{children:[!n&&c.length>0&&(0,M.jsx)(yt,{onClick:g,whileHover:{scale:1.05},whileTap:{scale:.95},children:`清除`}),!n&&c.length>0&&(0,M.jsx)(bt,{onClick:()=>{c.length===0||n||(r(c),_()?a():o())},whileHover:{scale:1.05},whileTap:{scale:.95},children:`确认答案`})]})]})},Ct=r.div`
  width: 100%;
`,wt=r.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 12px;
`,Tt=r.p`
  font-size: 16px;
  color: ${e.textSecondary};
  text-align: center;
  margin-bottom: 24px;
`,Et=r.img`
  max-width: 100%;
  max-height: 200px;
  margin: 0 auto 24px;
  border-radius: 12px;
`,Dt=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Ot=r(p.button)`
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  cursor: ${e=>e.$disabled?`default`:`pointer`};
  border: 3px solid transparent;
  transition: all 0.2s ease;
  background: white;
  color: ${e.textPrimary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 80px;

  ${t=>t.$isCorrect?`
        border-color: ${e.success};
        background: rgba(16, 185, 129, 0.1);
      `:t.$isWrong?`
        border-color: ${e.error};
        background: rgba(239, 68, 68, 0.1);
      `:t.$isSelected?`
        border-color: ${e.primary};
        background: rgba(79, 70, 229, 0.1);
      `:`
      &:hover {
        border-color: ${e.primaryLight};
        background: rgba(79, 70, 229, 0.05);
      }
    `}
`,kt=r.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`,At=r.span`
  flex: 1;
`,jt=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`,Mt=r.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${t=>t.$isCorrect?e.success:e.error};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
`,Nt=r(p.button)`
  margin: 24px auto 0;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
`,Pt=({question:e,selectedAnswers:t,isAnswered:n,onAnswer:r})=>{let{playClick:i,playCorrect:a,playWrong:o}=k(),[s,c]=(0,j.useState)(t||[]),l=e=>{n||(i(),c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]))},u=()=>{s.length===0||n||(r(s),s.length===e.correctAnswers.length&&s.every(t=>e.correctAnswers.includes(t))?a():o())},d=t=>{let r=s.includes(t.id),i=e.correctAnswers.includes(t.id);return n?{isSelected:r,isCorrect:i,isWrong:r&&!i}:{isSelected:r,isCorrect:!1,isWrong:!1}};return(0,M.jsxs)(Ct,{children:[(0,M.jsx)(wt,{children:e.question}),(0,M.jsx)(Tt,{children:`（请选择所有正确答案）`}),e.questionImage&&(0,M.jsx)(Et,{src:e.questionImage,alt:`题目图片`}),(0,M.jsx)(Dt,{children:e.options.map((e,t)=>{let r=d(e);return(0,M.jsxs)(Ot,{$isSelected:r.isSelected,$isCorrect:r.isCorrect,$isWrong:r.isWrong,$disabled:n,onClick:()=>l(e.id),whileHover:n?{}:{scale:1.02},whileTap:n?{}:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:t*.1},children:[e.shape&&(0,M.jsx)(jt,{children:(0,M.jsx)(O,{type:e.shape,color:e.shapeColor||`blue`,size:`small`,showLabel:!1})}),e.image&&(0,M.jsx)(kt,{src:e.image,alt:e.text}),(0,M.jsx)(At,{children:e.text}),n&&(r.isCorrect||r.isWrong)&&(0,M.jsx)(Mt,{$isCorrect:r.isCorrect,children:r.isCorrect?`✓`:`✕`})]},e.id)})}),!n&&s.length>0&&(0,M.jsx)(Nt,{onClick:u,whileHover:{scale:1.05},whileTap:{scale:.95},children:`确认答案`})]})},Ft=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,It=r.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.8;
`,Lt=r.img`
  max-width: 100%;
  max-height: 200px;
  margin: 0 auto 24px;
  border-radius: 12px;
`,Rt=r.input`
  display: inline-block;
  width: 80px;
  padding: 8px 12px;
  margin: 0 4px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  border: 3px solid
    ${t=>t.$isCorrect?e.success:t.$isWrong?e.error:e.primary};
  border-radius: 8px;
  outline: none;
  background: white;
  color: ${e.textPrimary};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${e.primary};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }

  &:disabled {
    background: #f5f5f5;
  }
`,zt=r.span`
  display: inline-block;
  padding: 8px 16px;
  margin: 0 4px;
  font-size: 20px;
  font-weight: 600;
  background: ${e=>e.$isCorrect?`rgba(16, 185, 129, 0.1)`:`rgba(239, 68, 68, 0.1)`};
  color: ${t=>t.$isCorrect?e.success:e.error};
  border-radius: 8px;
  border: 2px solid ${t=>t.$isCorrect?e.success:e.error};
`,Bt=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
`,Vt=r.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`,Ht=r.span`
  font-size: 18px;
  color: ${e.textSecondary};
`,Ut=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  margin-bottom: 24px;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(245, 158, 11, 0.3);
`,Wt=r.span`
  font-size: 20px;
`,Gt=r.span`
  font-size: 16px;
  color: ${e.textSecondary};
`,Kt=r(p.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 12px 16px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
`,qt=r.span`
  font-size: 16px;
  color: ${e.textSecondary};
`,Jt=r.span`
  font-size: 18px;
  font-weight: 600;
  color: ${e.success};
`,Yt=r(p.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: ${t=>t.$disabled?`#ccc`:`linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%)`};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: ${e=>e.$disabled?`not-allowed`:`pointer`};
  align-self: center;
`,Xt=({question:e,selectedAnswer:t,isAnswered:n,onAnswer:r})=>{let[i,a]=(0,j.useState)(t?t.split(`,`):[]),o=(e.question.match(/\{\{___\}\}/g)||[]).length,s=o>1,c=t=>{let n=Array.isArray(e.answer)?e.answer:[e.answer];return s?t.length===o&&t.every((e,t)=>(n[t]||n[0]).split(`,`).map(e=>e.trim().toLowerCase()).includes(e.trim().toLowerCase())):n.some(e=>e.trim().toLowerCase()===t[0]?.trim().toLowerCase())},l=(e,t)=>{if(n)return;let r=[...i];r[e]=t,a(r)},u=()=>{i.some(e=>!e.trim())||r(i.map(e=>e.trim()).join(`,`))},d=(e,t)=>{e.key===`Enter`&&(t<i.length-1?document.getElementById(`blank-input-${t+1}`)?.focus():i.every(e=>e.trim())&&!n&&u())},f=()=>{let t=e.question.split(`{{___}}`),r=i.length>0?i:Array(o).fill(``),a=Array.isArray(e.answer)?e.answer:[e.answer],s=e=>{let t=(r[e]||``).trim().toLowerCase();return(a[e]||``).trim().toLowerCase().split(`,`).map(e=>e.trim()).includes(t)};return(0,M.jsx)(Bt,{children:t.map((e,i)=>(0,M.jsxs)(Vt,{children:[(0,M.jsx)(Ht,{children:e}),i<t.length-1&&(n?(0,M.jsx)(zt,{$isCorrect:s(i),children:a[i]||`?`}):(0,M.jsx)(Rt,{id:`blank-input-${i}`,type:`text`,value:r[i]||``,onChange:e=>l(i,e.target.value),onKeyDown:e=>d(e,i),placeholder:`?`,autoFocus:i===0,$isCorrect:!1,$isWrong:!1}))]},i))})},p=Array.isArray(e.answer)?e.answer:[e.answer],m=t?c(i):!1;return(0,M.jsxs)(Ft,{children:[s?f():(()=>{let t=e.question.split(`{{___}}`);return(0,M.jsx)(It,{children:(0,M.jsx)(`span`,{children:t.map((r,a)=>(0,M.jsxs)(j.Fragment,{children:[r,a<t.length-1&&(0,M.jsx)(M.Fragment,{children:n?(0,M.jsx)(zt,{$isCorrect:m,children:Array.isArray(e.answer)?e.answer[0]:e.answer}):(0,M.jsx)(Rt,{type:`text`,value:i[0]||``,onChange:e=>l(0,e.target.value),onKeyDown:e=>d(e,0),placeholder:`?`,autoFocus:!0,$isCorrect:!1,$isWrong:!1})})]},a))})})})(),e.questionImage&&(0,M.jsx)(Lt,{src:e.questionImage,alt:`题目图片`}),e.hint&&!n&&(0,M.jsxs)(Ut,{children:[(0,M.jsx)(Wt,{children:`💭`}),(0,M.jsxs)(Gt,{children:[`提示：`,e.hint]})]}),n&&!m&&(0,M.jsxs)(Kt,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[(0,M.jsx)(qt,{children:`正确答案：`}),(0,M.jsx)(Jt,{children:p.join(` 或 `)})]}),!n&&(0,M.jsx)(Yt,{onClick:u,disabled:i.some(e=>!e.trim()),$disabled:i.some(e=>!e.trim()),whileHover:i.every(e=>e.trim())?{scale:1.05}:{},whileTap:i.every(e=>e.trim())?{scale:.95}:{},children:`确认答案`})]})},Zt={circle:`#3B82F6`,triangle:`#EF4444`,"triangle-big":`#DC2626`,"triangle-medium":`#EF4444`,"triangle-small":`#F87171`,square:`#10B981`,"square-big":`#059669`,rectangle:`#F59E0B`,parallelogram:`#A78BFA`},Qt=60,$t=({shape:e,size:t,scale:n=1})=>{let r=Zt[e]||`#4F46E5`,i=((e,n)=>{let r=Qt*n,i=r*Math.SQRT2;switch(e){case`triangle-small`:return{width:r,height:r};case`triangle-medium`:case`triangle`:return{width:i,height:i};case`triangle-big`:return{width:r*2,height:r*2};case`square`:return{width:r,height:r};case`square-big`:return{width:r*1.5,height:r*1.5};case`parallelogram`:return{width:r*2,height:r};case`rectangle`:return{width:r*2,height:r/2};default:return{width:t||r,height:t||r}}})(e,n);switch(e){case`circle`:return(0,M.jsx)(`svg`,{width:t||60,height:t||60,viewBox:`0 0 100 100`,children:(0,M.jsx)(`circle`,{cx:`50`,cy:`50`,r:`40`,fill:r})});case`triangle-small`:return(0,M.jsx)(`svg`,{width:i.width,height:i.height,viewBox:`0 0 100 100`,children:(0,M.jsx)(`polygon`,{points:`0,100 100,100 0,0`,fill:r})});case`triangle-medium`:case`triangle`:return(0,M.jsx)(`svg`,{width:i.width,height:i.height,viewBox:`0 0 100 100`,children:(0,M.jsx)(`polygon`,{points:`0,100 100,100 0,0`,fill:r})});case`triangle-big`:return(0,M.jsx)(`svg`,{width:i.width,height:i.height,viewBox:`0 0 100 100`,children:(0,M.jsx)(`polygon`,{points:`0,100 100,100 0,0`,fill:r})});case`square`:return(0,M.jsx)(`svg`,{width:i.width,height:i.height,viewBox:`0 0 100 100`,children:(0,M.jsx)(`rect`,{x:`0`,y:`0`,width:`100`,height:`100`,fill:r})});case`square-big`:return(0,M.jsx)(`svg`,{width:i.width,height:i.height,viewBox:`0 0 100 100`,children:(0,M.jsx)(`rect`,{x:`0`,y:`0`,width:`100`,height:`100`,fill:r,rx:`4`})});case`parallelogram`:return(0,M.jsx)(`svg`,{width:i.width,height:i.height,viewBox:`0 0 120 60`,children:(0,M.jsx)(`polygon`,{points:`60,60 120,60 60,0 0,0`,fill:r})});case`rectangle`:return(0,M.jsx)(`svg`,{width:i.width,height:i.height,viewBox:`0 0 120 30`,children:(0,M.jsx)(`rect`,{x:`0`,y:`0`,width:`120`,height:`30`,fill:r,rx:`4`})});default:return null}},en=r.div`
  width: 100%;
`,tn=r.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e.textPrimary};
  text-align: center;
  margin-bottom: 12px;
`,nn=r.p`
  font-size: 16px;
  color: ${e.textSecondary};
  text-align: center;
  margin-bottom: 24px;
`,rn=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,an=r.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
`,on=r(p.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: grab;
  padding: 8px;
  min-width: 80px;
  min-height: 80px;
  user-select: none;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`,sn=r.span`
  font-size: 14px;
  font-weight: 700;
  color: ${e.textPrimary};
  margin-top: 4px;
`,cn=r.div`
  width: 100%;
  max-width: ${e=>e.$width}px;
  height: ${e=>e.$height}px;
  background: rgba(255, 255, 255, 0.8);
  border: 3px dashed ${e.primaryLight};
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: ${e=>e.$width}px) {
    width: 100%;
    height: ${e=>e.$height*.8}px;
  }
`,ln=r.button`
  position: absolute;
  left: -8px;
  top: -8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: white;
  border: 2px solid ${e.primary};
  cursor: grab;
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 0.15s ease, transform 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  pointer-events: ${({$visible:e})=>e?`auto`:`none`};
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: ${e.primaryLight};
    transform: scale(1.15);
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.95);
  }
`,un=r(p.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`,dn=(e,t=1)=>{let n=Qt*t,r=n*Math.SQRT2;switch(e){case`triangle-small`:return{width:n,height:n};case`triangle-medium`:case`triangle`:return{width:r,height:r};case`triangle-big`:return{width:n*2,height:n*2};case`square`:return{width:n,height:n};case`square-big`:return{width:n*1.5,height:n*1.5};case`parallelogram`:return{width:n*2,height:n};case`rectangle`:return{width:n*2,height:n/2};default:return{width:n,height:n}}},fn=r(p.button)`
  margin-top: 24px;
  padding: 12px 32px;
  background: linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
`,pn=r.div`
  margin-top: 16px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  text-align: center;
`,mn=r.div`
  font-size: 20px;
  font-weight: 700;
  color: ${t=>t.$isComplete?e.success:e.textPrimary};
`,hn=r.div`
  font-size: 14px;
  color: ${e.textSecondary};
  margin-top: 4px;
`,gn=({question:t,isAnswered:n,onAnswer:r})=>{let{playDrag:i,playDrop:a,playCorrect:o}=k(),[s,c]=(0,j.useState)([]),[l,u]=(0,j.useState)(null),[d,f]=(0,j.useState)(null),[p,m]=(0,j.useState)(null),[h,g]=(0,j.useState)(null),_=(0,j.useRef)({}),v=t.shapeScale||1,y=(0,j.useCallback)(()=>{let e=document.querySelector(`[data-canvas]`);if(e){let t=e.getBoundingClientRect();m({width:t.width,height:t.height})}},[]);j.useEffect(()=>(y(),window.addEventListener(`resize`,y),()=>window.removeEventListener(`resize`,y)),[y]);let b=(0,j.useCallback)((e,t,n,r)=>Math.atan2(t-r,e-n)*(180/Math.PI),[]),x=(0,j.useCallback)((e,t)=>{if(n)return;t.preventDefault(),t.stopPropagation();let r=s.find(t=>t.id===e);if(!r)return;let a=dn(r.shape,v),o=_.current[e];if(!o)return;let c=o.getBoundingClientRect(),l=c.left+a.width/2,u=c.top+a.height/2;g({shapeId:e,centerX:l,centerY:u,startAngle:b(`touches`in t?t.touches[0].clientX:t.clientX,`touches`in t?t.touches[0].clientY:t.clientY,l,u),initialRotation:r.rotation||0}),i()},[n,s,b,i]),S=(0,j.useCallback)(e=>{if(!h)return;let t=b(`touches`in e?e.touches[0].clientX:e.clientX,`touches`in e?e.touches[0].clientY:e.clientY,h.centerX,h.centerY)-h.startAngle,n=(h.initialRotation+t+360)%360;c(e=>e.map(e=>e.id===h.shapeId?{...e,rotation:n}:e))},[h,b]),C=(0,j.useCallback)(()=>{h&&a(),g(null)},[h,a]);(0,j.useEffect)(()=>{if(!h)return;let e=e=>S(e),t=()=>C(),n=e=>S(e),r=()=>C();return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`touchmove`,n),window.addEventListener(`touchend`,r),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`touchmove`,n),window.removeEventListener(`touchend`,r)}},[h,S,C]);let w=s.reduce((e,t)=>(e[t.shape]=(e[t.shape]||0)+1,e),{}),T=s.reduce((e,n)=>e+(t.items.find(e=>e.id===n.id)?.value||0),0),ee=t.targetValue?T===t.targetValue:t.allItemsRequired?s.length===t.items.length:t.requiredCounts?Object.entries(t.requiredCounts).every(([e,t])=>w[e]>=t):s.length>0,te=e=>{n||(u(e.id),i())},ne=()=>{u(null)},E=(0,j.useCallback)(e=>{if(!l||n)return;let r=t.items.find(e=>e.id===l);if(!r||!r.shape||s.some(e=>e.id===l))return;let i=e.currentTarget.getBoundingClientRect(),o=dn(r.shape,v),d=i.width-o.width-10,f=i.height-o.height-10,p=Math.max(10,Math.min(e.clientX-i.left-o.width/2,d)),m=Math.max(10,Math.min(e.clientY-i.top-o.height/2,f)),h=r.rotation||0,g={id:r.id,shape:r.shape,x:p,y:m,rotation:h};c([...s,g]),a(),u(null)},[l,n,s,t.items,a]),re=(0,j.useCallback)((e,t,r)=>{n||c(s.map(n=>n.id===e?{...n,x:t,y:r}:n))},[n,s]),D=()=>{!ee||n||(r(s),o())},ie=e=>{let r=s.some(t=>t.id===e.id),o=e.shape||`circle`,d=e.rotation||0;return(0,M.jsxs)(on,{draggable:!n&&!r,onDragStart:()=>te(e),onDragEnd:ne,onTouchStart:()=>{n||r||(u(e.id),i())},onTouchEnd:e=>{if(!l)return;let n=e.changedTouches[0],r=document.querySelector(`[data-canvas]`);if(r){let e=r.getBoundingClientRect();if(n.clientX>=e.left&&n.clientX<=e.right&&n.clientY>=e.top&&n.clientY<=e.bottom){let r=t.items.find(e=>e.id===l);if(r&&r.shape&&!s.some(e=>e.id===l)){let t=dn(r.shape,v),i=e.width-t.width-10,o=e.height-t.height-10,l=Math.max(10,Math.min(n.clientX-e.left-t.width/2,i)),u=Math.max(10,Math.min(n.clientY-e.top-t.height/2,o)),d=r.rotation||0;c([...s,{id:r.id,shape:r.shape,x:l,y:u,rotation:d}]),a()}}}u(null)},whileHover:!n&&!r?{scale:1.05}:{},whileTap:!n&&!r?{scale:.95}:{},style:{opacity:r?.4:1,transform:d?`rotate(${d}deg)`:void 0},children:[(0,M.jsx)($t,{shape:o,scale:v}),e.value&&(0,M.jsx)(sn,{children:e.value})]},e.id)},O=e=>{let r=d===e.id,i=dn(e.shape,v),o=t.items.find(t=>t.id===e.id)?.value,s=p?.width||t.canvasSize.width,c=p?.height||t.canvasSize.height,l=s>i.width+20&&c>i.height+20,u=l?Math.max(10,s-i.width-10):10,m=l?Math.max(10,c-i.height-10):10;return(0,M.jsxs)(un,{ref:t=>{_.current[e.id]=t},$isHovered:r,drag:!n&&!h,dragConstraints:{left:10,right:u,top:10,bottom:m},dragMomentum:!1,onDragStart:()=>f(null),onDragEnd:(t,n)=>{let r=e.x+n.offset.x,i=e.y+n.offset.y;re(e.id,r,i),a()},onMouseEnter:()=>f(e.id),onMouseLeave:()=>f(null),animate:{x:e.x,y:e.y,rotate:e.rotation||0,scale:1},transition:{type:`spring`,stiffness:500,damping:30},style:{cursor:n?`default`:`grab`},children:[(0,M.jsx)($t,{shape:e.shape,scale:v}),o&&(0,M.jsx)(sn,{children:o}),(0,M.jsx)(ln,{$visible:r&&!n,onMouseDown:t=>x(e.id,t),onTouchStart:t=>x(e.id,t),onMouseEnter:()=>f(e.id),title:`按住拖动旋转`,children:`🔄`})]},e.id)};return(0,M.jsxs)(en,{children:[(0,M.jsx)(tn,{children:t.question}),(0,M.jsx)(nn,{children:t.instruction}),(0,M.jsxs)(rn,{children:[(0,M.jsxs)(an,{children:[t.items.map(ie),t.requiredCounts&&(0,M.jsx)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,marginLeft:`16px`},children:Object.entries(t.requiredCounts).map(([t,n])=>(0,M.jsxs)(`span`,{style:{fontSize:`14px`,color:e.textSecondary},children:[t,`: `,w[t]||0,`/`,n]},t))})]}),(0,M.jsx)(cn,{"data-canvas":!0,$width:t.canvasSize.width,$height:t.canvasSize.height,onDragOver:e=>e.preventDefault(),onDrop:E,children:s.map(O)}),t.targetValue&&(0,M.jsxs)(pn,{children:[(0,M.jsxs)(mn,{$isComplete:T===t.targetValue,children:[`当前总值：`,T,` / 目标：`,t.targetValue]}),(0,M.jsx)(hn,{children:T===t.targetValue?`✓ 完美！可以提交了`:T>t.targetValue?`超出 ${T-t.targetValue}，请移除一些图形`:`还需要 ${t.targetValue-T}`})]}),!n&&ee&&(0,M.jsx)(fn,{onClick:D,whileHover:{scale:1.05},whileTap:{scale:.95},children:`确认答案`})]})]})},_n=r.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 12px;
  line-height: 1.5;
`,vn=r.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`,yn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 400px;
`,bn=r.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  position: relative;
  gap: 200px;
`,xn=r.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
`,Sn=r(p.div)`
  padding: 16px 24px;
  background: ${({selected:e,matched:t})=>t?`#10b981`:e?`#667eea`:`white`};
  color: ${({matched:e})=>e?`white`:`#333`};
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  text-align: center;
  border: 2px solid ${({selected:e})=>e?`#667eea`:`transparent`};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`,Cn=[`#FF5252`,`#FF9800`,`#FFEB3B`,`#4CAF50`,`#00BCD4`,`#3F51B5`,`#9C27B0`,`#E91E63`],wn=r.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`,Tn=r.line`
  stroke: ${({color:e})=>e||`#667eea`};
  stroke-width: 5;
  stroke-linecap: round;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
`,En=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`,Dn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,On=r.span`
  font-size: 12px;
  color: #666;
`,kn=r.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,An=r(p.button)`
  padding: 12px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
  }
`,jn=({question:e,onAnswer:t})=>{let[n,r]=(0,j.useState)(null),[i,a]=(0,j.useState)([]),o=(0,j.useRef)(null),[s,c]=(0,j.useState)([]),[l]=(0,j.useState)(()=>{let t=[...e.pairs.map(e=>({id:e.id,right:e.right}))];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}),u=e=>{if(i.find(t=>t.leftId===e)){a(i.filter(t=>t.leftId!==e)),r(null);return}r(e)},d=e=>{if(!n)return;i.find(t=>t.rightId===e)&&a(i.filter(t=>t.rightId!==e));let t={leftId:n,rightId:e};a([...i.filter(e=>e.leftId!==n),t]),r(null)};return j.useEffect(()=>{if(!o.current)return;let e=()=>{c(i.map(e=>{let t=document.getElementById(`left-${e.leftId}`),n=document.getElementById(`right-${e.rightId}`),r=o.current;if(!t||!n||!r)return{x1:0,y1:0,x2:0,y2:0};let i=t.getBoundingClientRect(),a=n.getBoundingClientRect(),s=r.getBoundingClientRect();return{x1:i.right-s.left,y1:i.top+i.height/2-s.top,x2:a.left-s.left,y2:a.top+a.height/2-s.top}}))};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[i]),(0,M.jsxs)(yn,{children:[e.question&&(0,M.jsx)(_n,{children:e.question}),(0,M.jsx)(En,{children:(0,M.jsxs)(Dn,{children:[(0,M.jsx)(On,{children:`已连接`}),(0,M.jsxs)(kn,{children:[i.length,`/`,e.pairs.length]})]})}),(0,M.jsx)(vn,{children:`点击左侧选项，然后点击右侧选项进行连线`}),(0,M.jsxs)(bn,{ref:o,children:[(0,M.jsx)(xn,{children:e.pairs.map(e=>(0,M.jsx)(Sn,{id:`left-${e.id}`,selected:n===e.id,matched:i.some(t=>t.leftId===e.id),onClick:()=>u(e.id),whileHover:{scale:1.02},whileTap:{scale:.98},children:e.left},e.id))}),(0,M.jsx)(xn,{children:l.map(e=>(0,M.jsx)(Sn,{id:`right-${e.id}`,matched:i.some(t=>t.rightId===e.id),onClick:()=>d(e.id),whileHover:{scale:1.02},whileTap:{scale:.98},children:e.right},e.id))}),(0,M.jsx)(wn,{children:s.map((e,t)=>(0,M.jsx)(Tn,{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,color:Cn[t%Cn.length]},t))})]}),(0,M.jsx)(An,{onClick:()=>{t(i)},whileHover:{scale:1.05},whileTap:{scale:.95},children:`提交答案`})]})},Mn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
`,Nn=r.div`
  display: grid;
  grid-template-columns: repeat(${({gridSize:e})=>e}, 60px);
  grid-template-rows: repeat(${({gridSize:e})=>e}, 60px);
  gap: 4px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin: 20px 0;
`,Pn=r(p.div)`
  width: 60px;
  height: 60px;
  background: ${({isPath:e,isStart:t,isEnd:n,isCurrent:r,isVisited:i,isObstacle:a})=>a?`#4b5563`:t?`#10b981`:n?`#f59e0b`:r?`#667eea`:i?`#34d399`:e?`rgba(255, 255, 255, 0.3)`:`rgba(255, 255, 255, 0.05)`};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: ${({isPath:e,isCurrent:t})=>e||t?`pointer`:`default`};
  box-shadow: ${({isCurrent:e})=>e?`0 0 20px rgba(102, 126, 234, 0.6)`:`none`};
  transition: all 0.3s ease;
`,Fn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`,In=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Ln=r.span`
  font-size: 12px;
  color: #666;
`,Rn=r.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,zn=r.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  margin-top: 20px;
`,Bn=r.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`,Vn=r.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
`,Hn=r(p.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({completed:e,active:t})=>e?`#10b981`:t?`#667eea`:`#d1d5db`};
`,Un=({question:e,onComplete:t})=>{let[n,r]=(0,j.useState)(e.start),[i,a]=(0,j.useState)([e.start]),[o,s]=(0,j.useState)(0),[c,l]=(0,j.useState)(!1),[d,f]=(0,j.useState)(e.questions[0]),p=(t,n)=>e.questions.find(e=>e.x===t&&e.y===n),m=(t,n)=>{if(e.obstacles.some(e=>e.x===t&&e.y===n))return!1;let r=e.path.some(e=>e.x===t&&e.y===n),i=e.start.x===t&&e.start.y===n,a=e.end.x===t&&e.end.y===n;return r||i||a},h=(e,t)=>{if(Math.abs(e-n.x)+Math.abs(t-n.y)!==1||!m(e,t))return;let r=p(e,t);if(r){f(r),l(!0);return}g(e,t)},g=(n,o)=>{if(r({x:n,y:o}),a([...i,{x:n,y:o}]),n===e.end.x&&o===e.end.y){let n=50+e.questions.length*5;setTimeout(()=>t(n),1e3)}},_=e=>{let t=d,n=t.correctAnswer;parseInt(e)===n&&(g(t.x,t.y),s(o+1)),l(!1)};return(0,M.jsxs)(Mn,{children:[(0,M.jsxs)(Fn,{children:[(0,M.jsxs)(In,{children:[(0,M.jsx)(Ln,{children:`位置`}),(0,M.jsxs)(Rn,{children:[`(`,n.x,`, `,n.y,`)`]})]}),(0,M.jsxs)(In,{children:[(0,M.jsx)(Ln,{children:`进度`}),(0,M.jsxs)(Rn,{children:[i.length-1,`/`,e.path.length]})]})]}),(0,M.jsx)(Bn,{children:`从起点🚩走到终点🏆，回答路径上的问题❓`}),(0,M.jsx)(Vn,{children:e.questions.map((e,t)=>(0,M.jsx)(Hn,{active:t===o,completed:t<o},t))}),(0,M.jsx)(Nn,{gridSize:e.gridSize,children:(()=>{let t=[];for(let r=0;r<e.gridSize;r++)for(let a=0;a<e.gridSize;a++){let o=e.path.some(e=>e.x===a&&e.y===r),s=e.start.x===a&&e.start.y===r,c=e.end.x===a&&e.end.y===r,l=n.x===a&&n.y===r,u=i.some(e=>e.x===a&&e.y===r),d=e.obstacles.some(e=>e.x===a&&e.y===r),f=p(a,r)?`❓`:s?`🚩`:c?`🏆`:``;t.push((0,M.jsx)(Pn,{isPath:o,isStart:s,isEnd:c,isCurrent:l,isVisited:u,isObstacle:d,onClick:()=>h(a,r),whileHover:{scale:m(a,r)?1.1:1},children:f},`${a}-${r}`))}return t})()}),c&&d&&(0,M.jsx)(zn,{children:(0,M.jsx)(Fe,{question:{type:u.CHOICE,question:d.question,options:d.options.map((e,t)=>({id:t.toString(),text:e})),correctAnswer:d.correctAnswer.toString(),explanation:e.explanation},selectedAnswer:null,isAnswered:!1,onAnswer:e=>_(e)})})]})};function Wn(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var Gn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 400px;
`,Kn=r.div`
  display: grid;
  grid-template-columns: repeat(${({cols:e})=>e}, 1fr);
  grid-template-rows: repeat(${({rows:e})=>e}, 1fr);
  gap: 12px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  margin: 20px 0;
`,qn=r(p.div)`
  width: 80px;
  height: 80px;
  cursor: pointer;
  perspective: 1000px;
`,Jn=r(p.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: ${({isFlipped:e})=>e?`rotateY(180deg)`:`rotateY(0deg)`};
  transition: transform 0.6s;
`,Yn=r.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  font-size: 32px;
`,Xn=r.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Zn=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`,Qn=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,$n=r.span`
  font-size: 12px;
  color: #666;
`,er=r.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,tr=r.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 12px;
`,nr=r(p.div)`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
`,rr=({config:e,onComplete:t})=>{let[n,r]=(0,j.useState)(()=>Wn([...e.items,...e.items]).map((e,t)=>({id:`card-${t}`,item:e,isFlipped:!1,isMatched:!1}))),[i,a]=(0,j.useState)([]),[o,s]=(0,j.useState)(0),[c,l]=(0,j.useState)(0),[u,d]=(0,j.useState)(0),[f,p]=(0,j.useState)(!0);(0,j.useEffect)(()=>{let e=setInterval(()=>{d(e=>e+1)},1e3);return()=>clearInterval(e)},[]),(0,j.useEffect)(()=>{if(c>=e.pairsCount&&c>0){p(!1);let n=Math.max(0,u-60),r=Math.max(0,o-e.pairsCount*2),i=Math.max(10,50-n-r);setTimeout(()=>t(i,u),1e3)}},[c,e.pairsCount,u,o,t]);let m=e=>{if(!f||n[e].isFlipped||n[e].isMatched||i.length>=2)return;let t=[...n];if(t[e].isFlipped=!0,r(t),a([...i,e]),i.length===1){s(e=>e+1);let t=i[0],o=e,c=n[t],u=n[o];c.item.type===u.item.type&&c.item.color===u.item.color?setTimeout(()=>{let e=[...n];e[t].isMatched=!0,e[o].isMatched=!0,r(e),l(e=>e+1),a([])},500):setTimeout(()=>{let e=[...n];e[t].isFlipped=!1,e[o].isFlipped=!1,r(e),a([])},1e3)}},h=e.items.length<=6?3:4,g=c/e.pairsCount*100;return(0,M.jsxs)(Gn,{children:[(0,M.jsxs)(Zn,{children:[(0,M.jsxs)(Qn,{children:[(0,M.jsx)($n,{children:`配对`}),(0,M.jsxs)(er,{children:[c,`/`,e.pairsCount]})]}),(0,M.jsxs)(Qn,{children:[(0,M.jsx)($n,{children:`移动`}),(0,M.jsx)(er,{children:o})]}),(0,M.jsxs)(Qn,{children:[(0,M.jsx)($n,{children:`时间`}),(0,M.jsxs)(er,{children:[u,`秒`]})]})]}),(0,M.jsx)(tr,{children:(0,M.jsx)(nr,{initial:{width:0},animate:{width:`${g}%`},transition:{duration:.3}})}),(0,M.jsx)(Kn,{rows:Math.ceil(e.items.length/h),cols:h,children:(0,M.jsx)(_,{children:n.map((e,t)=>(0,M.jsx)(qn,{onClick:()=>m(t),whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,M.jsxs)(Jn,{isFlipped:e.isFlipped,children:[(0,M.jsx)(Yn,{children:`?`}),(0,M.jsx)(Xn,{children:(0,M.jsx)(O,{type:e.item.type,color:e.item.color,size:`medium`})})]})},e.id))})})]})},G=300,K=60,ir=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
`,ar=r.div`
  display: flex;
  gap: 40px;
  padding: 20px;
  width: 100%;
  max-width: 900px;
`,or=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`,sr=r.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
`,cr=r.h3`
  font-size: 16px;
  color: white;
  margin: 0;
  text-align: center;
`,lr=r.svg`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`,ur=r.div`
  width: ${G}px;
  height: ${G}px;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 3px dashed rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin-bottom: 20px;
  overflow: hidden;
`,dr=r(p.div)`
  position: absolute;
  cursor: grab;
  transform: translate(${({$x:e})=>e}px, ${({$y:e})=>e}px) rotate(${({$rotation:e})=>e}deg);
  transform-origin: center center;
  user-select: none;
  padding-right: 50px; /* 扩大悬停检测区域，包含旋转按钮位置 */

  &:active {
    cursor: grabbing;
  }
`,fr=r.div`
  position: absolute;
  right: -40px;
  top: 0;
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`,pr=r.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid #4ECDC4;
  cursor: pointer;
  opacity: ${({$visible:e})=>e?1:0};
  pointer-events: ${({$visible:e})=>e?`auto`:`none`};
  transition: opacity 0.15s ease, transform 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 100;

  &:hover {
    background: white;
    transform: scale(1.15);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.9);
  }
`,mr=r.div`
  width: ${K}px;
  height: ${K}px;
  position: relative;
`,hr=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`,gr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,_r=r.span`
  font-size: 12px;
  color: #666;
`,vr=r.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,yr=r.div`
  text-align: center;
  color: white;
  font-size: 16px;
  margin: 10px 0;
`,br=r.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 100, 100, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 200;
`,q={triangle_large:`#FF6B6B`,triangle_medium:`#4ECDC4`,triangle_small:`#45B7D1`,square:`#96CEB4`,parallelogram:`#FFEAA7`};function xr(e,t){let n=t/2;switch(e){case`triangle_large`:return[{x:-n,y:-n},{x:n,y:-n},{x:-n,y:n}];case`triangle_medium`:return[{x:-n,y:-n},{x:n,y:-n},{x:n,y:n}];case`triangle_small`:return[{x:-n*.8,y:-n*.8},{x:n*.8,y:-n*.8},{x:-n*.8,y:n*.8}];case`square`:return[{x:-n*.8,y:-n*.8},{x:n*.8,y:-n*.8},{x:n*.8,y:n*.8},{x:-n*.8,y:n*.8}];case`parallelogram`:return[{x:-n*.6,y:-n*.8},{x:n*.6,y:-n*.8},{x:n,y:n*.8},{x:-n,y:n*.8}];default:return[]}}function Sr(e,t){let n=t*Math.PI/180,r=Math.cos(n),i=Math.sin(n);return e.map(e=>({x:e.x*r-e.y*i,y:e.x*i+e.y*r}))}function Cr(e,t,n,r,i){return Sr(xr(e,i),r).map(e=>({x:t+e.x+i/2,y:n+e.y+i/2}))}function wr(e,t){let n=[e,t];for(let r=0;r<n.length;r++){let i=n[r];for(let n=0;n<i.length;n++){let r=(n+1)%i.length,a={x:i[r].x-i[n].x,y:i[r].y-i[n].y},o={x:-a.y,y:a.x},s=1/0,c=-1/0,l=1/0,u=-1/0;for(let t of e){let e=t.x*o.x+t.y*o.y;s=Math.min(s,e),c=Math.max(c,e)}for(let e of t){let t=e.x*o.x+e.y*o.y;l=Math.min(l,t),u=Math.max(u,t)}if(c<l+5||u<s+5)return!1}}return!0}function Tr(e,t,n,r,i){let a=Cr(e,t,n,r,i),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);return{minX:o,minY:s,maxX:c,maxY:l}}function Er(e,t,n,r,i,a){let o=Tr(e,t,n,r,i);return o.minX>=0&&o.minY>=0&&o.maxX<=a&&o.maxY<=a}function Dr(e,t,n,r,i,a){if(Er(e,t,n,r,i,a))return{x:t,y:n};let o=Tr(e,t,n,r,i),s=t,c=n,l=Math.max(0,-o.minX),u=Math.max(0,-o.minY),d=Math.max(0,o.maxX-a),f=Math.max(0,o.maxY-a);s+=l-d,c+=u-f;let p=Tr(e,s,c,r,i);return p.minX<5&&(s=5+(t-p.minX+o.minX)),p.minY<5&&(c=5+(n-p.minY+o.minY)),p.maxX>a-5&&(s=a-5-(p.maxX-t)),p.maxY>a-5&&(c=a-5-(p.maxY-n)),s=Math.max(0,s),c=Math.max(0,c),{x:s,y:c}}var Or=({question:e,onComplete:t})=>{let[n,r]=(0,j.useState)(()=>e.puzzle.pieces.map(e=>({...e,color:q[e.type]||e.color})).map(e=>{let t=Dr(e.type,e.initialPosition.x,e.initialPosition.y,e.initialRotation,K,G);return{...e,initialPosition:t}})),[i,a]=(0,j.useState)(0),[o,s]=(0,j.useState)(!1),[c,l]=(0,j.useState)(!1),[u,d]=(0,j.useState)(null),[f,p]=(0,j.useState)(null),m=(0,j.useRef)({});(0,j.useEffect)(()=>{let e=setInterval(()=>{a(e=>e+1)},1e3);return()=>clearInterval(e)},[]),(0,j.useEffect)(()=>{n.forEach(e=>{m.current[e.id]={...e.initialPosition}})},[]);let h=(0,j.useCallback)((e,t,r,i)=>{let a=n.find(t=>t.id===e);if(!a)return!1;let o=Cr(a.type,t,r,i,K);for(let t of n)if(t.id!==e&&wr(o,Cr(t.type,t.initialPosition.x,t.initialPosition.y,t.initialRotation,K)))return!0;return!1},[n]),g=(0,j.useCallback)(()=>{if(n.every(t=>{let n=e.puzzle.targetOutline[0]?.x||150,r=e.puzzle.targetOutline[0]?.y||150,i=t.initialPosition.x-n,a=t.initialPosition.y-r;return Math.sqrt(i*i+a*a)<e.puzzle.tolerance})&&!o){s(!0);let e=Math.max(0,120-i)/2,n=Math.min(100,50+e);setTimeout(()=>t(Math.floor(n)),1e3)}},[n,e.puzzle,o,i,t]),_=(0,j.useCallback)((e,t)=>{let r=n.find(t=>t.id===e);if(!r)return;let i=m.current[e].x+t.offset.x,a=m.current[e].y+t.offset.y,o=h(e,i,a,r.initialRotation),s=Er(r.type,i,a,r.initialRotation,K,G);l(o||!s)},[n,h]),v=(0,j.useCallback)((e,t)=>{let i=n.find(t=>t.id===e);if(!i)return;let a=m.current[e].x+t.offset.x,o=m.current[e].y+t.offset.y,s=h(e,a,o,i.initialRotation),c=Er(i.type,a,o,i.initialRotation,K,G);if(s||!c)r(t=>t.map(t=>t.id===e?{...t,initialPosition:m.current[e]}:t));else{let t=Dr(i.type,a,o,i.initialRotation,K,G);r(n=>n.map(n=>n.id===e?{...n,initialPosition:t}:n)),m.current[e]=t}p(null),l(!1),setTimeout(g,100)},[n,h,g]),y=(0,j.useCallback)(e=>{let t=n.find(t=>t.id===e);if(!t)return;let i=(t.initialRotation+90)%360,a=Er(t.type,t.initialPosition.x,t.initialPosition.y,i,K,G),o=h(e,t.initialPosition.x,t.initialPosition.y,i);if(a)o?(l(!0),setTimeout(()=>l(!1),1e3)):r(t=>t.map(t=>t.id===e?{...t,initialRotation:i}:t));else{let n=Dr(t.type,t.initialPosition.x,t.initialPosition.y,i,K,G);h(e,n.x,n.y,i)?(l(!0),setTimeout(()=>l(!1),1e3)):(r(t=>t.map(t=>t.id===e?{...t,initialRotation:i,initialPosition:n}:t)),m.current[e]=n)}setTimeout(g,100)},[n,h,g]),b=()=>(0,M.jsxs)(lr,{width:`150`,height:`150`,viewBox:`0 0 150 150`,children:[(0,M.jsx)(`polygon`,{points:`0,0 75,0 0,75`,fill:q.triangle_large,stroke:`white`,strokeWidth:`1`}),(0,M.jsx)(`polygon`,{points:`75,0 150,0 75,75`,fill:q.triangle_large,stroke:`white`,strokeWidth:`1`}),(0,M.jsx)(`polygon`,{points:`75,75 150,75 150,150`,fill:q.triangle_medium,stroke:`white`,strokeWidth:`1`}),(0,M.jsx)(`polygon`,{points:`0,75 37.5,75 0,112.5`,fill:q.triangle_small,stroke:`white`,strokeWidth:`1`}),(0,M.jsx)(`polygon`,{points:`75,75 112.5,75 75,112.5`,fill:q.triangle_small,stroke:`white`,strokeWidth:`1`}),(0,M.jsx)(`rect`,{x:`37.5`,y:`75`,width:`37.5`,height:`37.5`,fill:q.square,stroke:`white`,strokeWidth:`1`}),(0,M.jsx)(`polygon`,{points:`75,112.5 112.5,75 150,75 112.5,112.5`,fill:q.parallelogram,stroke:`white`,strokeWidth:`1`})]}),x=(e,t=50)=>{let n=q[e]||`#fff`;switch(e){case`triangle_large`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 50 50`,children:(0,M.jsx)(`polygon`,{points:`0,0 50,0 0,50`,fill:n,stroke:`white`,strokeWidth:`1`})});case`triangle_medium`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 50 50`,children:(0,M.jsx)(`polygon`,{points:`0,0 50,0 50,50`,fill:n,stroke:`white`,strokeWidth:`1`})});case`triangle_small`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 40 40`,children:(0,M.jsx)(`polygon`,{points:`0,0 40,0 0,40`,fill:n,stroke:`white`,strokeWidth:`1`})});case`square`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 40 40`,children:(0,M.jsx)(`rect`,{x:`0`,y:`0`,width:`40`,height:`40`,fill:n,stroke:`white`,strokeWidth:`1`})});case`parallelogram`:return(0,M.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 50 40`,children:(0,M.jsx)(`polygon`,{points:`0,0 25,0 50,40 25,40`,fill:n,stroke:`white`,strokeWidth:`1`})});default:return null}},S=e=>{let t=q[e.type]||e.color,n=K;switch(e.type){case`triangle_large`:return(0,M.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 60 60`,children:(0,M.jsx)(`polygon`,{points:`0,0 60,0 0,60`,fill:t,stroke:`white`,strokeWidth:`2`,filter:`drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))`})});case`triangle_medium`:return(0,M.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 60 60`,children:(0,M.jsx)(`polygon`,{points:`0,0 60,0 60,60`,fill:t,stroke:`white`,strokeWidth:`2`,filter:`drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))`})});case`triangle_small`:return(0,M.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 50 50`,children:(0,M.jsx)(`polygon`,{points:`0,0 50,0 0,50`,fill:t,stroke:`white`,strokeWidth:`2`,filter:`drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))`})});case`square`:return(0,M.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 50 50`,children:(0,M.jsx)(`rect`,{x:`0`,y:`0`,width:`50`,height:`50`,fill:t,stroke:`white`,strokeWidth:`2`,filter:`drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))`})});case`parallelogram`:return(0,M.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 60 50`,children:(0,M.jsx)(`polygon`,{points:`0,0 30,0 60,50 30,50`,fill:t,stroke:`white`,strokeWidth:`2`,filter:`drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))`})});default:return null}};return(0,M.jsxs)(ir,{children:[(0,M.jsxs)(hr,{children:[(0,M.jsxs)(gr,{children:[(0,M.jsx)(_r,{children:`目标`}),(0,M.jsx)(vr,{children:e.puzzle.targetShape})]}),(0,M.jsxs)(gr,{children:[(0,M.jsx)(_r,{children:`时间`}),(0,M.jsxs)(vr,{children:[i,`秒`]})]})]}),(0,M.jsx)(yr,{children:`拖拽七巧板块到目标区域，悬停显示旋转按钮`}),(0,M.jsxs)(ar,{children:[(0,M.jsx)(or,{children:(0,M.jsxs)(ur,{children:[(0,M.jsx)(`svg`,{width:G,height:G,style:{position:`absolute`,top:0,left:0,pointerEvents:`none`},children:(0,M.jsx)(`path`,{d:e.puzzle.targetOutline.map((e,t)=>`${t===0?`M`:`L`} ${e.x} ${e.y}`).join(` `)+` Z`,fill:`none`,stroke:`rgba(255, 255, 255, 0.5)`,strokeWidth:`3`,strokeDasharray:`5,5`})}),n.map(e=>{let t=u===e.id,n=f===e.id;return(0,M.jsxs)(dr,{$rotation:e.initialRotation,$x:e.initialPosition.x,$y:e.initialPosition.y,$isHovered:t,drag:!0,dragMomentum:!1,dragElastic:0,onDragStart:()=>{p(e.id),m.current[e.id]||(m.current[e.id]={...e.initialPosition})},onDrag:(t,n)=>_(e.id,n),onDragEnd:(t,n)=>v(e.id,n),onMouseEnter:()=>!n&&d(e.id),onMouseLeave:e=>{let t=e.relatedTarget;(!t||!t.closest(`[data-rotate-btn-container]`))&&d(null)},whileHover:{scale:1.02},whileDrag:{scale:1.05,zIndex:50},style:{zIndex:n?50:t?10:1},children:[(0,M.jsx)(mr,{$color:q[e.type]||e.color,children:S(e)}),(0,M.jsx)(fr,{"data-rotate-btn-container":!0,onMouseEnter:()=>!n&&d(e.id),onMouseLeave:()=>d(null),children:(0,M.jsx)(pr,{$visible:t&&!n,onClick:t=>{t.stopPropagation(),t.preventDefault(),y(e.id)},title:`旋转 90°`,children:`🔄`})})]},e.id)}),c&&(0,M.jsx)(br,{children:`⚠️ 无法放置在此位置`})]})}),(0,M.jsxs)(sr,{children:[(0,M.jsx)(cr,{children:`七巧板`}),b(),(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,alignItems:`center`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[x(`triangle_large`,40),x(`triangle_medium`,40)]}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`4px`},children:[x(`triangle_small`,30),x(`square`,30),x(`parallelogram`,40)]})]})]})]})]})},kr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 500px;
`,Ar=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`,jr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Mr=r.span`
  font-size: 12px;
  color: #666;
`,Nr=r.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,Pr=r(p.div)`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  pointer-events: none;
  z-index: 100;
`,Fr=r(p.span)`
  font-size: 72px;
  font-weight: bold;
  color: #f59e0b;
  text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
`,Ir=r.span`
  font-size: 24px;
  color: #f59e0b;
  font-weight: bold;
`,Lr=r.div`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  overflow: hidden;
  margin: 10px 0;
`,Rr=r(p.div)`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #34d399 100%);
  border-radius: 6px;
`,zr=r.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  margin-top: 20px;
`,Br=r.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
`,Vr=r(p.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({completed:e,active:t})=>e?`#10b981`:t?`#667eea`:`#d1d5db`};
`,Hr=r.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`,Ur=({config:e,onComplete:t})=>{let[n,r]=(0,j.useState)(0),[i,a]=(0,j.useState)(0),[o,s]=(0,j.useState)(0),[c,l]=(0,j.useState)(e.config.timeLimit),[u,d]=(0,j.useState)(!1),f=(0,j.useRef)(null);(0,j.useEffect)(()=>(f.current=setInterval(()=>{l(e=>e<=1?(p(),0):e-1)},1e3),()=>{f.current&&clearInterval(f.current)}),[]);let p=()=>{f.current&&clearInterval(f.current),h()},m=t=>{{let t=i+1;a(t),s(Math.max(t,o)),t>=e.config.comboThreshold&&(d(!0),setTimeout(()=>d(!1),1500))}n<e.config.questions.length-1?r(n+1):h()},h=()=>{let n=e.config.comboBonusStars||2,r=e.config.questions,a=r.length*10,o=Math.floor(i/e.config.comboThreshold)*n,s=i===r.length?30:0,l=Math.floor(c/5),u=a+o+s+l;setTimeout(()=>t(u,i),1e3)},g=e.config.questions[n],v=c/e.config.timeLimit*100;return(0,M.jsxs)(kr,{children:[(0,M.jsxs)(Ar,{children:[(0,M.jsxs)(jr,{children:[(0,M.jsx)(Mr,{children:`题目`}),(0,M.jsxs)(Nr,{children:[n+1,`/`,e.config.questions.length]})]}),(0,M.jsxs)(jr,{children:[(0,M.jsx)(Mr,{children:`连击`}),(0,M.jsxs)(Nr,{children:[i,`🔥`]})]}),(0,M.jsxs)(jr,{children:[(0,M.jsx)(Mr,{children:`时间`}),(0,M.jsxs)(Nr,{children:[c,`秒`]})]})]}),(0,M.jsx)(Hr,{children:`快速答题，连续答对可触发连击奖励！`}),(0,M.jsx)(Lr,{children:(0,M.jsx)(Rr,{initial:{width:`100%`},animate:{width:`${v}%`},transition:{duration:1,ease:`linear`}})}),(0,M.jsx)(Br,{children:e.config.questions.map((e,t)=>(0,M.jsx)(Vr,{active:t===n,completed:t<n},t))}),(0,M.jsx)(_,{children:u&&i>=e.config.comboThreshold&&(0,M.jsxs)(Pr,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.5,opacity:0},children:[(0,M.jsx)(Fr,{children:i}),(0,M.jsx)(Ir,{children:`连击!`})]})}),(0,M.jsx)(zr,{children:g&&(0,M.jsx)(Fe,{question:g,selectedAnswer:null,isAnswered:!1,onAnswer:m})})]})},Wr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 400px;
`,Gr=r.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 20px auto;
`,Kr=r.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`,qr=r.circle`
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 8;
`,Jr=r(p.circle)`
  fill: none;
  stroke: ${({urgency:e})=>{switch(e){case`high`:return`#ef4444`;case`medium`:return`#f59e0b`;default:return`#10b981`}}};
  stroke-width: 8;
  stroke-linecap: round;
`,Yr=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: bold;
  color: #333;
`,Xr=r.div`
  display: flex;
  gap: 24px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
`,Zr=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Qr=r.span`
  font-size: 12px;
  color: #666;
`,$r=r.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`,ei=r.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 10px 0;
`,ti=r(p.div)`
  padding: 8px 16px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 8px;
  color: #f59e0b;
  font-size: 14px;
  margin: 10px 0;
`,ni=({question:e,onAnswer:t})=>{let[n,r]=(0,j.useState)(e.timeLimit),i=(0,j.useRef)(null);(0,j.useEffect)(()=>(i.current=setInterval(()=>{r(e=>e<=1?(a(),0):e-1)},1e3),()=>{i.current&&clearInterval(i.current)}),[]);let a=()=>{i.current&&clearInterval(i.current),t(null,0)},o=e=>{i.current&&clearInterval(i.current),t(e,n)},s=()=>{let t=n/e.timeLimit;return t>.5?`low`:t>.2?`medium`:`high`},c=2*Math.PI*50,l=n/e.timeLimit*c,u=Math.floor(n*e.bonusPerSecond);return(0,M.jsxs)(Wr,{children:[(0,M.jsxs)(Xr,{children:[(0,M.jsxs)(Zr,{children:[(0,M.jsx)(Qr,{children:`限时`}),(0,M.jsxs)($r,{children:[e.timeLimit,`秒`]})]}),(0,M.jsxs)(Zr,{children:[(0,M.jsx)(Qr,{children:`奖励/秒`}),(0,M.jsxs)($r,{children:[`+`,e.bonusPerSecond,`⭐`]})]})]}),(0,M.jsx)(ei,{children:`在规定时间内完成答题，剩余时间可兑换额外星星！`}),(0,M.jsxs)(ti,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},children:[`当前可获额外奖励：+`,u,`⭐`]},n),(0,M.jsxs)(Gr,{urgency:s(),children:[(0,M.jsxs)(Kr,{children:[(0,M.jsx)(qr,{urgency:s(),cx:`60`,cy:`60`,r:50}),(0,M.jsx)(Jr,{urgency:s(),cx:`60`,cy:`60`,r:50,strokeDasharray:c,initial:{strokeDashoffset:0},animate:{strokeDashoffset:c-l},transition:{duration:1,ease:`linear`}})]}),(0,M.jsx)(Yr,{children:n})]}),(0,M.jsx)(`div`,{style:{width:`100%`,maxWidth:`500px`},children:(0,M.jsx)(Fe,{question:e.baseQuestion,selectedAnswer:null,isAnswered:!1,onAnswer:e=>o(e)})})]})},J={pink:`#FFB5BA`,mint:`#7FCCB0`,sky:`#89CFF0`,yellow:`#FFE66D`,lavender:`#E6E6FA`,coral:`#FF7F7F`,peach:`#FFCBA4`,cream:`#FFF8E7`,rose:`#FF9EAA`},ri=x`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-3px) rotate(15deg); }
`,ii=x`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,ai=x`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
`,oi=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${J.cream};
  border-radius: 50px;
  box-shadow:
    0 4px 0 rgba(255, 182, 193, 0.3),
    0 8px 20px rgba(255, 182, 193, 0.2),
    inset 0 -2px 10px rgba(255, 230, 109, 0.1);
  border: 3px solid ${J.pink};
  width: 100%;
  position: relative;

  /* 云朵装饰 */
  &::before {
    content: '☁️';
    position: absolute;
    left: -15px;
    top: -8px;
    font-size: 20px;
    opacity: 0.8;
    animation: ${ai} 2s ease-in-out infinite;
  }

  &::after {
    content: '☁️';
    position: absolute;
    right: -15px;
    bottom: -8px;
    font-size: 16px;
    opacity: 0.6;
    animation: ${ai} 2s ease-in-out infinite 0.5s;
  }
`,si=r.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: ${J.mint};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
`,ci=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,li=r.span`
  font-size: 18px;
  animation: ${ri} 1s ease-in-out infinite;
`,ui=r(p.span)`
  font-size: 16px;
  font-weight: 800;
  color: ${J.coral};
  padding: 2px 8px;
  background: rgba(255, 230, 109, 0.3);
  border-radius: 12px;
`,di=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,fi=r(p.div)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${e=>{switch(e.$status){case`done`:return J.mint;case`current`:return J.coral;case`pending`:return`#E8E8E8`}}};
  border: 2px solid ${e=>{switch(e.$status){case`done`:return`#5FB090`;case`current`:return`#FF6B6B`;case`pending`:return`#D0D0D0`}}};
  position: relative;

  ${e=>e.$status===`current`&&l`
    animation: ${ai} 0.8s ease-in-out infinite;
    &::after {
      content: '✦';
      position: absolute;
      top: -10px;
      left: 2px;
      font-size: 10px;
      color: ${J.yellow};
      animation: ${ai} 0.6s ease-in-out infinite;
    }
  `}
`,pi=r.div`
  flex: 1;
  height: 8px;
  background: rgba(255, 230, 109, 0.2);
  border-radius: 4px;
  margin: 0 12px;
  overflow: hidden;
`,mi=r(p.div)`
  height: 100%;
  background: linear-gradient(90deg,
    ${J.pink},
    ${J.yellow},
    ${J.mint},
    ${J.sky}
  );
  background-size: 200% 100%;
  animation: ${ii} 3s ease infinite;
  border-radius: 4px;
`,hi=r.span`
  font-size: 12px;
  font-weight: 700;
  color: ${J.coral};
  min-width: 36px;
`,gi=({currentQuestion:e,totalQuestions:t,starsEarned:n,levelName:r})=>{let i=Math.round(e/t*100);return(0,M.jsxs)(oi,{children:[(0,M.jsxs)(si,{children:[`📍 `,r]}),(0,M.jsxs)(ci,{children:[(0,M.jsx)(li,{children:`⭐`}),(0,M.jsx)(ui,{initial:{scale:1.5,rotate:10},animate:{scale:1,rotate:0},transition:{type:`spring`,stiffness:400},children:n},n)]}),(0,M.jsx)(di,{children:Array.from({length:t},(t,n)=>(0,M.jsx)(fi,{$status:n<e?`done`:n===e?`current`:`pending`,initial:{scale:0},animate:{scale:1},transition:{delay:n*.05,type:`spring`}},n))}),(0,M.jsx)(pi,{children:(0,M.jsx)(mi,{initial:{width:0},animate:{width:`${i}%`},transition:{duration:.5,ease:`easeOut`}})}),(0,M.jsxs)(hi,{children:[i,`%`]})]})},_i=r(p.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
`,vi=r(p.div)`
  position: relative;
  z-index: 1;
  background: white;
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  border: 4px solid ${t=>t.$isCorrect?e.success:e.error};
`,yi=r(p.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${t=>t.$isCorrect?`linear-gradient(135deg, ${e.success} 0%, ${e.successLight} 100%)`:`linear-gradient(135deg, ${e.error} 0%, ${e.errorLight} 100%)`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 40px;
  color: white;
`,bi=r.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${t=>t.$isCorrect?e.success:e.error};
`,xi=r.p`
  font-size: 16px;
  color: ${e.textSecondary};
  line-height: 1.6;
  margin-bottom: 24px;
`,Si=r(p.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
`,Ci=r.span`
  font-size: 32px;
`,wi=r.span`
  font-size: 24px;
  font-weight: 700;
  color: ${e.star};
`,Ti=r(p.button)`
  padding: 14px 40px;
  background: linear-gradient(135deg, ${e.primary} 0%, ${e.primaryLight} 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`,Ei=r(p.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`,Di=r(p.div)`
  font-size: 14px;
  color: ${e.textSecondary};
  margin-bottom: 16px;
`,Oi=({isCorrect:e,explanation:n,onNext:r,isLastQuestion:i,autoNext:a=!1})=>{let[o,s]=(0,j.useState)(2);return(0,j.useEffect)(()=>{if(e&&a){let e=setInterval(()=>{s(t=>t<=1?(clearInterval(e),0):t-1)},1e3),t=setTimeout(()=>{r()},2e3);return()=>{clearInterval(e),clearTimeout(t)}}},[e,a,r]),(0,M.jsx)(_,{children:(0,M.jsxs)(_i,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[(0,M.jsx)(Ei,{}),(0,M.jsxs)(vi,{$isCorrect:e,initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{type:`spring`,stiffness:300,damping:25},children:[(0,M.jsx)(yi,{$isCorrect:e,initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{type:`spring`,stiffness:300,damping:20,delay:.2},children:e?`✓`:`✕`}),(0,M.jsx)(bi,{$isCorrect:e,children:e?`答对了！`:`答错了`}),e&&(0,M.jsxs)(Si,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,M.jsx)(Ci,{children:`⭐`}),(0,M.jsxs)(wi,{children:[`+`,t.starsPerQuestion]})]}),(0,M.jsx)(xi,{children:n}),e&&a&&(0,M.jsx)(Di,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:o>0?`${o}秒后自动进入下一题...`:`正在跳转...`}),(!e||!a)&&(0,M.jsx)(Ti,{onClick:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:i?`查看结果`:`下一题`})]})]})})},Y={pink:`#FFB5BA`,mint:`#7FCCB0`,sky:`#89CFF0`,yellow:`#FFE66D`,lavender:`#E6E6FA`,coral:`#FF7F7F`,gold:`#FFD700`,cream:`#FFF8E7`},ki=x`
  0% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0.5; }
`,Ai=x`
  0%, 100% { opacity: 1; filter: brightness(1); }
  50% { opacity: 0.7; filter: brightness(1.5); }
`,ji=r.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(135deg,
    rgba(255, 182, 193, 0.9) 0%,
    rgba(255, 230, 109, 0.85) 30%,
    rgba(127, 204, 176, 0.8) 50%,
    rgba(137, 207, 240, 0.85) 70%,
    rgba(230, 230, 250, 0.9) 100%
  );
  overflow: hidden;
`,Mi=r(p.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 4px solid ${Y.gold};
  box-shadow:
    0 0 30px ${Y.yellow},
    0 0 60px ${Y.sky},
    inset 0 0 30px rgba(255, 255, 255, 0.3);
  animation: ${ki} 2s ease-in-out infinite;
`,Ni=r(p.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid ${Y.coral};
  box-shadow: 0 0 20px ${Y.coral};
`,Pi=r(p.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Fi=r(p.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 0 20px ${Y.gold});
  animation: ${Ai} 1.5s ease-in-out infinite;
`,Ii=r(p.div)`
  margin-top: 80px;
  padding: 12px 32px;
  background: ${Y.cream};
  border-radius: 20px;
  border: 3px solid ${Y.pink};
  font-size: 20px;
  font-weight: 700;
  color: #5A5A5A;
  text-align: center;
  box-shadow: 0 4px 12px rgba(255, 182, 193, 0.3);
`,Li=r(p.button)`
  margin-top: 48px;
  padding: 16px 48px;
  background: linear-gradient(135deg, ${Y.coral} 0%, ${Y.gold} 100%);
  border: 4px solid ${Y.yellow};
  border-radius: 24px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  box-shadow:
    0 6px 0 rgba(255, 182, 193, 0.4),
    0 12px 24px rgba(255, 182, 193, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 8px 0 rgba(255, 182, 193, 0.5),
      0 16px 32px rgba(255, 182, 193, 0.4);
  }
`,Ri=r(p.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$color};
  box-shadow: 0 0 10px ${e=>e.$color};
`,zi=r(p.div)`
  margin-top: 16px;
  font-size: 14px;
  color: #7A7A7A;
  font-weight: 600;
`,Bi=({weaponImage:e,weaponName:t,onComplete:n})=>{let[r,i]=(0,j.useState)(!1),[a,o]=(0,j.useState)(!1),{playCardReveal:s,playStarEarn:c}=k();(0,j.useEffect)(()=>{let e=setTimeout(()=>{s()},1e3),t=setTimeout(()=>{o(!0),c()},2e3),n=setTimeout(()=>{i(!0)},3e3);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(n)}},[s,c]);let l=Array.from({length:20},(e,t)=>({id:t,color:[Y.gold,Y.yellow,Y.sky,Y.pink][t%4],angle:t*18%360,delay:t*.1}));return(0,M.jsxs)(ji,{children:[(0,M.jsx)(Mi,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:.6},transition:{duration:.8,ease:`easeOut`}}),(0,M.jsx)(_,{children:a&&(0,M.jsx)(Ni,{initial:{scale:.5,opacity:1},animate:{scale:3,opacity:0},exit:{opacity:0},transition:{duration:.8,ease:`easeOut`}})}),l.map(e=>(0,M.jsx)(Ri,{$color:e.color,initial:{x:Math.cos(e.angle*Math.PI/180)*100,y:Math.sin(e.angle*Math.PI/180)*100,opacity:0,scale:0},animate:{x:Math.cos(e.angle*Math.PI/180)*250,y:Math.sin(e.angle*Math.PI/180)*250,opacity:[0,1,0],scale:[0,1.5,0]},transition:{duration:2,delay:e.delay,repeat:1/0,repeatDelay:1}},e.id)),(0,M.jsxs)(Pi,{children:[(0,M.jsx)(Fi,{src:e,alt:t,initial:{scale:.5,y:100,opacity:0},animate:{scale:1.8,y:0,opacity:1},transition:{duration:1.2,ease:`easeOut`,type:`spring`,stiffness:100}}),(0,M.jsxs)(Ii,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.5,duration:.5},children:[`⚔️ `,t,` 完成！`]}),(0,M.jsx)(_,{children:r&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(zi,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:`武器能量已充满，准备战斗！`}),(0,M.jsx)(Li,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{type:`spring`,stiffness:200},whileHover:{scale:1.08},whileTap:{scale:.95},onClick:n,children:`⚡ 进入战斗`})]})})]})]})},X={pink:`#FFB5BA`,mint:`#7FCCB0`,sky:`#89CFF0`,yellow:`#FFE66D`,lavender:`#E6E6FA`,coral:`#FF7F7F`,gold:`#FFD700`,cream:`#FFF8E7`,purple:`#9B59B6`},Vi=x`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 30px ${X.gold}, 0 0 60px ${X.sky};
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 50px ${X.gold}, 0 0 100px ${X.sky};
  }
`,Hi=x`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Ui=x`
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-100px) scale(0); opacity: 0; }
`,Wi=r.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(180deg,
    rgba(26, 26, 46, 0.95) 0%,
    rgba(42, 42, 74, 0.9) 50%,
    rgba(74, 74, 127, 0.85) 100%
  );
  overflow: hidden;
`,Gi=r(p.div)`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(255, 215, 0, 0.3) 0%,
    rgba(255, 215, 0, 0.1) 50%,
    transparent 70%
  );
  animation: ${Vi} 1.5s ease-in-out infinite;
`,Ki=r.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    ${X.gold} 30deg,
    transparent 60deg,
    ${X.sky} 90deg,
    transparent 120deg,
    ${X.yellow} 150deg,
    transparent 180deg,
    ${X.gold} 210deg,
    transparent 240deg,
    ${X.sky} 270deg,
    transparent 300deg,
    ${X.yellow} 330deg,
    transparent 360deg
  );
  opacity: 0.4;
  animation: ${Hi} 4s linear infinite;
  filter: blur(10px);
`,qi=r(p.div)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ji=r(p.img)`
  width: 280px;
  height: 280px;
  object-fit: contain;
  filter: drop-shadow(0 0 30px ${X.gold});
`,Yi=r(p.div)`
  margin-top: 24px;
  padding: 12px 36px;
  background: linear-gradient(135deg, ${X.purple} 0%, ${X.coral} 100%);
  border-radius: 24px;
  border: 3px solid ${X.gold};
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 6px 20px rgba(155, 89, 182, 0.4);
`,Xi=r(p.div)`
  margin-bottom: 20px;
  padding: 8px 24px;
  background: ${X.gold};
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  text-align: center;
`,Zi=r(p.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${X.gold};
  box-shadow: 0 0 15px ${X.gold};
  animation: ${Ui} 2s ease-out infinite;
  animation-delay: ${e=>e.$delay}s;
`,Qi=r(p.div)`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: 3px solid ${X.sky};
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-align: center;
  max-width: 80%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
`,$i=({guardian:e,difficulty:t,onComplete:n})=>{let[r,i]=(0,j.useState)(!1),{playCardReveal:a,playStarEarn:o}=k(),s=ue(e.id,t),c=s?.image||e.robotImage,l=s?.displayName||e.name,u={easy:`炫光形态觉醒！`,medium:`闪电形态觉醒！`,hard:`雷霆形态觉醒！`},d={easy:`"终于等到你了！让我展示真正的实力吧！"`,medium:`"想要击败我？那就来试试我的闪电形态吧！"`,hard:`"雷霆之力已经觉醒，准备好面对最强的我了吗？"`};(0,j.useEffect)(()=>{let e=setTimeout(()=>{a()},500),t=setTimeout(()=>{i(!0),o()},1500),r=setTimeout(()=>{n()},4e3);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(r)}},[n,a,o]);let f=Array.from({length:12},(e,t)=>({id:t,angle:t*30%360,radius:150+Math.random()*50,delay:Math.random()*.5}));return(0,M.jsxs)(Wi,{children:[(0,M.jsx)(Ki,{}),(0,M.jsx)(Gi,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:.8},transition:{duration:.8,ease:`easeOut`}}),f.map(e=>(0,M.jsx)(Zi,{$delay:e.delay,style:{left:`calc(50% + ${Math.cos(e.angle*Math.PI/180)*e.radius}px - 5px)`,bottom:`calc(50% + ${Math.sin(e.angle*Math.PI/180)*e.radius}px - 5px)`}},e.id)),(0,M.jsxs)(qi,{children:[(0,M.jsxs)(Xi,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.5},children:[`⭐ `,u[t],` ⭐`]}),(0,M.jsx)(Ji,{src:c,alt:l,initial:{scale:.3,opacity:0,rotateY:180},animate:{scale:1,opacity:1,rotateY:0},transition:{duration:1,ease:`easeOut`,type:`spring`,stiffness:80}}),(0,M.jsxs)(Yi,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.8,duration:.5},children:[`🤖 `,l]})]}),(0,M.jsx)(_,{children:r&&(0,M.jsx)(Qi,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:d[t]})})]})},Z={lightning:`#FFD700`,storm:`#7FCCB0`,sky:`#89CFF0`,energy:`#FFE66D`,glow:`#E6E6FA`,impact:`#FF7F7F`},ea=x`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(100%) skewX(-15deg); }
`,ta=x`
  0% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(2); }
  100% { opacity: 0; transform: scale(3); }
`,na=x`
  0%, 100% {
    filter: drop-shadow(0 0 15px ${Z.lightning}) drop-shadow(0 0 30px ${Z.energy});
    transform: scale(1);
  }
  50% {
    filter: drop-shadow(0 0 25px ${Z.lightning}) drop-shadow(0 0 50px ${Z.energy}) drop-shadow(0 0 70px #FF4500);
    transform: scale(1.1);
  }
`,ra=x`
  0% {
    width: 0;
    opacity: 0;
  }
  20% {
    width: 50px;
    opacity: 1;
  }
  100% {
    width: 400px;
    opacity: 0;
  }
`,ia=r.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
  overflow: hidden;
`,aa=r.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`,oa=r(p.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$side===`left`?`align-self: flex-start;`:`align-self: flex-end;`}
`,sa=r(p.img)`
  width: 180px;
  height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
`,ca=r(p.img)`
  width: ${e=>e.$firing?`150px`:`120px`};
  height: ${e=>e.$firing?`150px`:`120px`};
  object-fit: contain;
  filter: drop-shadow(0 0 20px ${Z.lightning});
  margin-top: 16px;
  ${e=>e.$firing&&l`
    animation: ${na} 0.5s ease-in-out infinite;
  `}
`,la=r(p.div)`
  position: absolute;
  height: 8px;
  background: linear-gradient(90deg,
    ${Z.lightning} 0%,
    ${Z.energy} 50%,
    transparent 100%
  );
  border-radius: 4px;
  box-shadow:
    0 0 10px ${Z.lightning},
    0 0 20px ${Z.energy},
    0 0 30px ${Z.lightning};
  animation: ${ra} 1s ease-out forwards;
`,ua=r(p.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,da=r(p.div)`
  margin-top: 12px;
  padding: 8px 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  color: white;
`,fa=r(p.div)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 48px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 230, 109, 0.9) 100%);
  border-radius: 24px;
  border: 4px solid white;
  font-size: 28px;
  font-weight: 800;
  color: #1e1b4b;
  text-align: center;
  box-shadow:
    0 0 30px rgba(255, 215, 0, 0.8),
    0 0 60px rgba(255, 230, 109, 0.6);
`,pa=r(p.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, white 0%, ${Z.energy} 30%, transparent 70%);
  animation: ${ta} 0.5s ease-out;
`,ma=r(p.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 215, 0, 0.3) 50%,
    transparent 100%
  );
  animation: ${ea} 1s ease-out;
`,ha=r(p.div)`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.$color};
  opacity: 0.6;
`,ga=r(p.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center,
    rgba(255, 215, 0, 0.5) 0%,
    transparent 50%
  );
`,_a=r(p.div)`
  position: absolute;
  top: 16px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
`,va=r(p.div)`
  position: absolute;
  bottom: 16px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: white;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px;
`,ya=r(p.button)`
  position: absolute;
  bottom: 24px;
  right: 24px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,ba=(e,t)=>{let n={easy:[{name:e.ultimateSkill,effect:`pulse`,color:`#7FCCB0`},{name:`强化版 ${e.ultimateSkill}`,effect:`swirl`,color:`#89CFF0`}],medium:[{name:`进阶版 ${e.ultimateSkill}`,effect:`shake`,color:`#FF4500`},{name:e.ultimateSkill,effect:`swirl`,color:`#E6E6FA`}],hard:[{name:`终极版 ${e.ultimateSkill}`,effect:`swirl`,color:`#EC4899`},{name:`完美版 ${e.ultimateSkill}`,effect:`shake`,color:`#7FCCB0`}]}[t];return n[Math.floor(Math.random()*n.length)]},xa=({hero:e,enemy:t,difficulty:n,weaponComplete:r=!1,weaponImage:i,enemyWeaponImage:a,isUpgrade:o=!1,isFusion:s=!1,onComplete:c})=>{let l=s,[u,d]=(0,j.useState)(`entry`),{playCardReveal:f,playStarEarn:p,playCorrect:m,playVictory:h,playBGM:g}=k(),v=(0,j.useMemo)(()=>ue(e.id,n),[e.id,n]),y=v?.image||e.robotImage||e.vehicleImage,b=v?.displayName||e.name,x=(0,j.useMemo)(()=>ue(t.id,n),[t.id,n]),S=x?.image||t.robotImage||t.vehicleImage,C=x?.displayName||t.name,w=(0,j.useMemo)(()=>ba(e,n),[e,n]),T=(0,j.useMemo)(()=>ba(t,n),[t,n]);return(0,j.useEffect)(()=>{g(`battle`);let e=setTimeout(()=>{d(`heroUltimate`),f()},1e3),t=setTimeout(()=>{d(`enemyUltimate`),p()},2500),n=setTimeout(()=>{d(`collision`),m()},4e3),r=setTimeout(()=>{d(`victory`),h()},5500),i=setTimeout(()=>{c()},7500);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(n),clearTimeout(r),clearTimeout(i)}},[c,g,f,p,m,h]),(0,M.jsxs)(ia,{children:[Array.from({length:30},(e,t)=>({id:t,color:[Z.lightning,Z.storm,Z.sky][t%3],x:Math.random()*100,y:Math.random()*100})).map(e=>(0,M.jsx)(ha,{$color:e.color,style:{left:`${e.x}%`,top:`${e.y}%`},animate:{y:[0,-20,0],opacity:[.3,.8,.3]},transition:{duration:3,repeat:1/0,delay:e.id*.1}},e.id)),(0,M.jsx)(_,{children:u===`victory`&&(0,M.jsx)(ga,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1}})}),(0,M.jsxs)(_a,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:[`难度：`,n===`easy`?`简单`:n===`medium`?`中等`:`困难`]}),(0,M.jsxs)(aa,{children:[(0,M.jsxs)(oa,{$side:`left`,children:[(0,M.jsxs)(ua,{initial:{x:-200,opacity:0},animate:{x:u===`heroUltimate`?50:u===`collision`?100:0,opacity:1},transition:{duration:.8,ease:`easeOut`},children:[(0,M.jsx)(sa,{src:y,alt:b,animate:{scale:u===`heroUltimate`?1.2:1},transition:{duration:.3}}),r&&i&&(0,M.jsx)(ca,{src:i,alt:`炫蓝光能枪`,$firing:u===`heroUltimate`,initial:{opacity:0},animate:{opacity:1,scale:u===`heroUltimate`?1.2:1},transition:{delay:.3,duration:.5}}),(0,M.jsx)(_,{children:r&&u===`heroUltimate`&&(0,M.jsx)(la,{initial:{opacity:0,x:60},animate:{opacity:1},exit:{opacity:0},style:{top:`50%`,left:`100%`}})})]}),(0,M.jsx)(da,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:b})]}),(0,M.jsxs)(oa,{$side:`right`,children:[(0,M.jsxs)(ua,{initial:{x:200,opacity:0},animate:{x:u===`enemyUltimate`?-50:u===`collision`?-100:0,opacity:1},transition:{duration:.8,ease:`easeOut`},children:[(0,M.jsx)(sa,{src:S,alt:t.name,animate:{scale:u===`enemyUltimate`?1.2:1},transition:{duration:.3}}),a&&(0,M.jsx)(ca,{src:a,alt:`${t.name}武器`,$firing:u===`enemyUltimate`,initial:{opacity:0},animate:{opacity:1,scale:u===`enemyUltimate`?1.2:1},transition:{delay:.3,duration:.5}})]}),(0,M.jsx)(da,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:C})]}),(0,M.jsx)(_,{children:(u===`heroUltimate`||u===`enemyUltimate`)&&(0,M.jsx)(ma,{initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},transition:{duration:.5}})}),(0,M.jsx)(_,{children:u===`collision`&&(0,M.jsx)(pa,{initial:{scale:0,opacity:0},animate:{scale:2,opacity:1},exit:{scale:3,opacity:0},transition:{duration:.5}})})]}),(0,M.jsxs)(_,{children:[u===`heroUltimate`&&(0,M.jsxs)(fa,{initial:{opacity:0,y:30,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-30},transition:{type:`spring`,stiffness:200},children:[`⚡ `,w.name]}),u===`enemyUltimate`&&(0,M.jsxs)(fa,{initial:{opacity:0,y:30,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-30},transition:{type:`spring`,stiffness:200},children:[`🌪️ `,T.name]}),u===`victory`&&(0,M.jsx)(fa,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1.2},transition:{type:`spring`,stiffness:150},children:l?`✨ 合体成功！`:o?`⬆️ 升级成功！`:`🏆 战斗胜利！`})]}),(0,M.jsxs)(va,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:[u===`entry`&&`双方战士入场...`,u===`heroUltimate`&&(r?`${e.name} 使用炫蓝光能枪使出 ${w.name}！`:`${e.name} 使出 ${w.name}！`),u===`enemyUltimate`&&`${t.name} 使出 ${T.name}！`,u===`collision`&&(r?`炫蓝光能枪威力爆发！能量冲击！`:`绝招碰撞！能量爆发！`),u===`victory`&&(s?`十一位炫卡斗士成功合体！超炫电光王觉醒！`:o?`${e.name} 升级成功！即将进化为炫蓝闪电S...`:`${e.name} 获得胜利！即将获得炫卡...`)]}),(0,M.jsx)(ya,{onClick:c,whileHover:{scale:1.05},whileTap:{scale:.95},children:`跳过`})]})},Q={pink:`#FFB5BA`,mint:`#7FCCB0`,sky:`#89CFF0`,yellow:`#FFE66D`,lavender:`#E6E6FA`,coral:`#FF7F7F`,peach:`#FFCBA4`,cream:`#FFF8E7`,rose:`#FF9EAA`,gold:`#FFD700`,silver:`#C0C0C0`},Sa=x`
  0%, 100% {
    box-shadow:
      0 0 10px rgba(255, 230, 109, 0.6),
      0 0 20px rgba(255, 182, 193, 0.4),
      inset 0 0 10px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow:
      0 0 15px rgba(255, 230, 109, 0.8),
      0 0 30px rgba(255, 182, 193, 0.6),
      0 0 45px rgba(137, 207, 240, 0.4),
      inset 0 0 15px rgba(255, 255, 255, 0.5);
  }
`,Ca=x`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.7; transform: scale(0.9) rotate(10deg); }
`,wa=x`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ta=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 16px;
  background: ${Q.cream};
  border-radius: 24px;
  width: 100%;
  border: 3px solid rgba(255, 182, 193, 0.5);
  box-shadow:
    0 6px 0 rgba(255, 182, 193, 0.2),
    0 12px 24px rgba(255, 182, 193, 0.15);
`,Ea=r(p.div)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: ${e=>e.$collected?`radial-gradient(circle at 35% 35%,
          rgba(255, 255, 255, 1) 0%,
          ${e.$gemColor} 50%,
          rgba(255, 182, 193, 0.7) 100%)`:`radial-gradient(circle at 35% 35%,
          #F8F8F8 0%,
          #E8E8E8 50%,
          #D8D8D8 100%)`};

  ${e=>e.$collected&&l`animation: ${Sa} 2s ease-in-out infinite;`}
  ${e=>e.$isCurrent&&!e.$collected&&l`
    animation: ${Ca} 0.8s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(255, 127, 127, 0.5);
  `}

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    filter: ${e=>e.$collected?`drop-shadow(0 2px 4px rgba(255, 255, 255, 0.6))`:`grayscale(100%) opacity(0.5)`};
  }

  /* 宝石顶部闪光 */
  ${e=>e.$collected&&l`
    &::before {
      content: '✦';
      position: absolute;
      top: -6px;
      right: 4px;
      font-size: 10px;
      color: ${Q.gold};
      animation: ${Ca} 0.6s ease-in-out infinite;
    }
  `}
`,Da=r.div`
  width: 16px;
  height: 6px;
  border-radius: 3px;
  background: ${e=>e.$active?`linear-gradient(90deg,
          ${Q.pink},
          ${Q.yellow},
          ${Q.mint},
          ${Q.sky})`:`#E0E0E0`};

  ${e=>e.$active&&l`
    background-size: 200% 100%;
    animation: ${wa} 2s ease infinite;
    box-shadow: 0 0 6px rgba(255, 182, 193, 0.4);
  `}
`,Oa=r.span`
  font-size: 10px;
  font-weight: 600;
  color: ${e=>e.$collected?Q.coral:`#A0A0A0`};
  text-align: center;
  margin-top: 4px;
  padding: 2px 6px;
  border-radius: 8px;
  background: ${e=>e.$collected?`rgba(255, 230, 109, 0.3)`:`transparent`};
`,ka=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Aa=r(p.div)`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$collected?`radial-gradient(circle at 35% 35%,
          rgba(255, 255, 255, 1) 0%,
          ${Q.gold} 50%,
          ${Q.peach} 100%)`:`#E8E8E8`};
  position: relative;

  ${e=>e.$collected&&l`
    animation: ${Sa} 1.5s ease-in-out infinite;
  `}

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: ${e=>e.$collected?`drop-shadow(0 3px 6px rgba(255, 230, 109, 0.8))`:`grayscale(100%) opacity(0.5)`};
  }

  /* 完成星星装饰 */
  ${e=>e.$collected&&l`
    &::after {
      content: '⭐';
      position: absolute;
      top: -10px;
      right: -8px;
      font-size: 14px;
      animation: ${Ca} 0.5s ease-in-out infinite;
    }
  `}
`,ja=r(p.div)`
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 3px solid ${Q.gold};
  pointer-events: none;
`,Ma=(e,t)=>({easy:[Q.pink,Q.yellow,Q.mint,Q.sky,Q.gold],medium:[Q.sky,Q.lavender,Q.mint,Q.pink,Q.gold],hard:[Q.lavender,Q.coral,Q.mint,Q.sky,Q.gold]})[t][e]||Q.pink,Na=({parts:e,currentIndex:t,collectedParts:n,difficulty:r,weaponImage:i})=>{let a=()=>{if(i)return i;switch(r){case`easy`:return`/assets/weapons/easy-weapon.png`;case`medium`:return`/assets/weapons/medium-weapon.png`;case`hard`:return`/assets/weapons/hard-weapon.png`;default:return`/assets/weapons/easy-weapon.png`}};return(0,M.jsx)(Ta,{children:e.map((i,o)=>{let s=n.includes(i.id),c=o===t,l=o<t,u=Ma(o,r),d=i.shapeType===`composite`;return(0,M.jsxs)(j.Fragment,{children:[(0,M.jsxs)(ka,{children:[d?(0,M.jsx)(Aa,{$collected:s,children:(0,M.jsx)(`img`,{src:a(),alt:`武器完成`})}):(0,M.jsxs)(Ea,{$collected:s,$isCurrent:c,$gemColor:u,whileHover:{scale:1.1,y:-3},initial:{scale:.8,opacity:.5},animate:{scale:s?1:c?[1,1.08,1]:.8,opacity:s||c?1:.5},transition:{duration:c?1:.3,repeat:c&&!s?1/0:0},children:[i.iconImage&&(0,M.jsx)(`img`,{src:i.iconImage,alt:i.name}),(0,M.jsx)(_,{children:s&&(0,M.jsx)(ja,{initial:{scale:0,opacity:1},animate:{scale:2,opacity:0},exit:{opacity:0},transition:{duration:.6}})})]}),!d&&(0,M.jsx)(Oa,{$collected:s,children:s?`✓ ${i.name}`:i.name})]}),o<e.length-1&&(0,M.jsx)(Da,{$active:l||s})]},i.id)})})},Pa={forest:`linear-gradient(180deg, #98D8AA 0%, #B8E6C8 40%, #D8F4E8 100%)`,ocean:`linear-gradient(180deg, #89CFF0 0%, #A8D8F0 40%, #C8E8F8 100%)`,volcano:`linear-gradient(180deg, #FFCBA4 0%, #FFD8B8 40%, #FFE8D0 100%)`,desert:`linear-gradient(180deg, #FFE66D 0%, #FFE88D 40%, #FFEAB0 100%)`,space:`linear-gradient(180deg, #E6E6FA 0%, #D0D0F8 40%, #B8B8F0 100%)`},Fa=x`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
`,Ia=x`
  0%, 100% { transform: translateX(0px); }
  50% { transform: translateX(15px); }
`,La=x`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`,Ra=x`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`,za=x`
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(137, 207, 240, 0.6));
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(137, 207, 240, 0.8))
           drop-shadow(0 0 24px rgba(255, 230, 109, 0.4));
  }
`,Ba=r.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  border-radius: 24px;
  overflow: hidden;

  border: 3px solid rgba(255, 182, 193, 0.3);
`,Va=r(p.div)`
  position: absolute;
  inset: 0;
  background: ${e=>e.$gradient};
  opacity: 0.6;
  z-index: 0;
`,Ha=r(p.div)`
  position: absolute;
  font-size: ${e=>e.$size===`big`?`48px`:`32px`};
  opacity: 0.7;
  animation: ${Ia} ${e=>e.$size===`big`?`6s`:`4s`} ease-in-out infinite;
  ${e=>e.$position};
`,Ua=r(p.div)`
  position: absolute;
  font-size: ${e=>e.$size===`big`?`20px`:`14px`};
  animation: ${Fa} ${e=>e.$size===`big`?`2s`:`3s`} ease-in-out infinite;
`,Wa=r(p.div)`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`,Ga=r.div`
  position: relative;
  z-index: 3;
  padding: 24px;
  padding-top: 80px;
`,Ka=r(p.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${e=>e.$color} 0%,
    transparent 70%
  );
  opacity: 0.4;
  animation: ${La} 5s ease-in-out infinite;
`,qa=r(p.div)`
  position: absolute;
  left: 8px;
  top: 8px;
  width: 60px;
  height: 60px;
  z-index: 2;
  animation: ${Ra} 3s ease-in-out infinite, ${za} 2s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,Ja=r(p.div)`
  position: absolute;
  left: 72px;
  top: 12px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 6px 10px;
  font-size: 11px;
  color: #7A7A7A;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(137, 207, 240, 0.3);
  border: 2px solid rgba(137, 207, 240, 0.4);
  max-width: 70px;
  text-align: center;
  z-index: 2;
`,Ya={initial:{opacity:0},animate:{opacity:.6,transition:{duration:.4}},exit:{opacity:0,transition:{duration:.2}}},Xa={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1,transition:{type:`spring`,stiffness:200,damping:20}},exit:{opacity:0,scale:.5,transition:{duration:.2}}},Za={forest:{emoji:`🌳🌲🌸`,color:`#98D8AA`,hint:`森林探险！`},ocean:{emoji:`🌊🐚🐬`,color:`#89CFF0`,hint:`深海寻宝！`},volcano:{emoji:`🔥🌋🔴`,color:`#FFCBA4`,hint:`火山勇士！`},desert:{emoji:`☀️🏜️🌵`,color:`#FFE66D`,hint:`沙漠探险！`},space:{emoji:`🚀🌙⭐`,color:`#E6E6FA`,hint:`太空英雄！`}},Qa=`/assets/character/炫蓝闪电 1.png`,$a=({scene:e,children:t,showHero:n=!0})=>{let r=Pa[e],i=Za[e];return(0,M.jsxs)(Ba,{children:[(0,M.jsxs)(_,{mode:`wait`,children:[(0,M.jsx)(Va,{$gradient:r,variants:Ya,initial:`initial`,animate:`animate`,exit:`exit`},`gradient-${e}`),(0,M.jsx)(Ka,{$color:i.color,initial:{x:-30,y:-30},animate:{x:-30,y:-30}},`glow-${e}`),n&&(0,M.jsx)(qa,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{delay:.2,type:`spring`,stiffness:200},children:(0,M.jsx)(`img`,{src:Qa,alt:`炫蓝闪电`})},`hero-${e}`),n&&(0,M.jsx)(Ja,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.4},children:i.hint},`hint-${e}`),(0,M.jsxs)(Wa,{variants:Xa,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,M.jsx)(p.div,{style:{position:`absolute`,top:`12px`,right:`16px`,fontSize:`36px`,opacity:.8},animate:{y:[0,-5,0]},transition:{repeat:1/0,duration:3,ease:`easeInOut`},children:i.emoji.split(``)[0]}),(e===`forest`||e===`ocean`)&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Ha,{$size:`big`,$position:`top: 20px; left: 150px;`,children:`☁️`}),(0,M.jsx)(Ha,{$size:`small`,$position:`top: 60px; right: 80px;`,children:`☁️`})]}),(0,M.jsx)(Ua,{$size:`big`,style:{top:`24px`,left:`45%`},children:`⭐`}),(0,M.jsx)(Ua,{$size:`small`,style:{top:`48px`,left:`75%`},children:`✨`}),(0,M.jsx)(Ua,{$size:`small`,style:{bottom:`32px`,left:`25%`},children:`🌟`}),(0,M.jsx)(p.div,{style:{position:`absolute`,bottom:`20px`,right:`24px`,fontSize:`24px`,opacity:.6},animate:{y:[0,-3,0]},transition:{repeat:1/0,duration:2,ease:`easeInOut`},children:i.emoji.split(``)[1]})]},`decor-${e}`)]}),(0,M.jsx)(Ga,{children:t})]})},$={pink:`#FFB5BA`,mint:`#7FCCB0`,sky:`#89CFF0`,yellow:`#FFE66D`,lavender:`#E6E6FA`,coral:`#FF7F7F`,peach:`#FFCBA4`,cream:`#FFF8E7`},eo=x`
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-4px) translateX(2px);
  }
  50% {
    transform: translateY(-6px) translateX(0px);
  }
  75% {
    transform: translateY(-3px) translateX(-2px);
  }
`,to=x`
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.7; transform: scale(0.9) rotate(10deg); }
`,no=x`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`,ro=r(p.div)`
  max-width: 80%;
  margin: 12px auto;
  padding: 16px 24px;
  position: relative;
  animation: ${eo} 4s ease-in-out infinite, ${no} 3s ease-in-out infinite;

  /* 云朵形状背景 */
  background: ${$.cream};
  border-radius: 20px;
  border: 3px solid ${$.sky};
  box-shadow:
    0 8px 0 rgba(137, 207, 240, 0.2),
    0 16px 32px rgba(137, 207, 240, 0.15),
    inset 0 -4px 12px rgba(255, 230, 109, 0.1);

  /* 云朵尾巴 */
  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 20px;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: ${$.sky};
    border-bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 23px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${$.cream};
    border-bottom: 0;
  }

  /* 云朵装饰 */
  .cloud-decor {
    position: absolute;
    font-size: 16px;
    animation: ${to} 2s ease-in-out infinite;
  }
`,io=r.span`
  position: absolute;
  top: -10px;
  right: 16px;
  font-size: 14px;
  animation: ${to} 1.5s ease-in-out infinite;
`,ao=r.span`
  position: absolute;
  top: 8px;
  left: -12px;
  font-size: 12px;
  animation: ${to} 2s ease-in-out infinite 0.3s;
`,oo=r(p.p)`
  font-size: 16px;
  font-weight: 600;
  color: #5A5A5A;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`,so=r.span`
  color: ${$.coral};
  font-weight: 700;
  padding: 2px 8px;
  background: rgba(255, 230, 109, 0.3);
  border-radius: 10px;
  display: inline-block;
`,co=r(p.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 8px;
  font-size: 12px;
  color: ${$.mint};
  font-weight: 600;
`,lo=r.span`
  font-size: 14px;
  animation: ${to} 0.8s ease-in-out infinite;
`,uo={initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0,transition:{type:`spring`,stiffness:200,damping:20}},exit:{opacity:0,scale:.9,y:-10,transition:{duration:.3}}},fo=({narrative:e,partName:t,enableSpeech:n=!0,speaker:r=`炫蓝闪电`})=>{let i=(0,j.useRef)(!1);return(0,j.useEffect)(()=>{if(!n||!e)return;T.stop();let t=setTimeout(()=>{i.current=!0,T.speak(e,r,()=>{i.current=!1})},300);return()=>{clearTimeout(t),T.stop(),i.current=!1}},[e,n,r]),(0,M.jsx)(_,{mode:`wait`,children:(0,M.jsxs)(ro,{variants:uo,initial:`initial`,animate:`animate`,exit:`exit`,children:[(0,M.jsx)(io,{children:`✨`}),(0,M.jsx)(ao,{children:`☁️`}),(0,M.jsx)(oo,{children:(()=>{if(!t)return e;let n=RegExp(`"(${t})"`,`g`);return e.split(n).map((e,n)=>e===t?(0,M.jsxs)(so,{children:[`"`,e,`"`]},n):e)})()}),n&&(0,M.jsxs)(co,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:[(0,M.jsx)(lo,{children:`🎵`}),`正在朗读...`]})]},e)})},po={pink:`#FFB5BA`,mint:`#7FCCB0`,sky:`#89CFF0`,yellow:`#FFE66D`,lavender:`#E6E6FA`,coral:`#FF7F7F`,peach:`#FFCBA4`,cream:`#FFF8E7`},mo=x`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
    opacity: 0.9;
  }
`,ho=x`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,go=x`
  0%, 100% {
    transform: translateX(0px) translateY(0px);
  }
  25% {
    transform: translateX(10px) translateY(-5px);
  }
  50% {
    transform: translateX(0px) translateY(-8px);
  }
  75% {
    transform: translateX(-10px) translateY(-3px);
  }
`;function _o(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function vo(e){switch(e.type){case`choice`:{let t=e;return{...t,options:_o(t.options)}}case`multi_select`:{let t=e;return{...t,options:_o(t.options)}}case`link`:{let t=e;return{...t,pairs:_o(t.pairs)}}case`drag`:{let t=e;return{...t,items:_o(t.items)}}default:return e}}var yo=r.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;
  overflow: hidden;

  /* 网格渐变背景 */
  background:
    linear-gradient(135deg,
      rgba(255, 182, 193, 0.95) 0%,
      rgba(255, 230, 109, 0.9) 25%,
      rgba(127, 204, 176, 0.85) 50%,
      rgba(137, 207, 240, 0.9) 75%,
      rgba(230, 230, 250, 0.85) 100%);
  background-size: 400% 400%;
  animation: ${ho} 15s ease infinite;

  /* 装饰星星 */
  &::before {
    content: '⭐';
    position: fixed;
    top: 15%;
    left: 10%;
    font-size: 24px;
    animation: ${mo} 3s ease-in-out infinite;
    opacity: 0.7;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '✨';
    position: fixed;
    bottom: 20%;
    right: 8%;
    font-size: 28px;
    animation: ${mo} 4s ease-in-out infinite 1s;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;
  }
`,bo=r.div`
  position: fixed;
  ${e=>e.$position};
  font-size: 32px;
  opacity: 0.4;
  animation: ${go} 6s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`,xo=r.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,So=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  flex: 1;
`,Co=r(p.div)`
  width: 100%;
  min-width: 320px;
  max-width: min(90vw, 800px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 32px;
  background: ${po.cream};
  border-radius: 32px;
  box-shadow:
    0 8px 0 rgba(255, 182, 193, 0.25),
    0 20px 40px rgba(255, 182, 193, 0.2),
    inset 0 -6px 20px rgba(255, 230, 109, 0.1);
  border: 4px solid rgba(255, 182, 193, 0.4);
  position: relative;

  /* 卡片顶部装饰 */
  &::before {
    content: '🌟';
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 18px;
    animation: ${mo} 2s ease-in-out infinite;
  }

  &::after {
    content: '🌈';
    position: absolute;
    top: -12px;
    right: 24px;
    font-size: 16px;
    opacity: 0.8;
  }
`,wo=r(p.button)`
  margin-top: 16px;
  padding: 10px 24px;
  background: ${po.cream};
  border: 3px solid ${po.lavender};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: #7A7A7A;
  cursor: pointer;
  box-shadow:
    0 4px 0 rgba(230, 230, 250, 0.3),
    0 8px 16px rgba(230, 230, 250, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 182, 193, 0.3);
    border-color: ${po.coral};
    transform: translateY(-3px);
    box-shadow:
      0 6px 0 rgba(255, 127, 127, 0.3),
      0 12px 24px rgba(255, 127, 127, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      0 2px 0 rgba(255, 127, 127, 0.3),
      0 4px 8px rgba(255, 127, 127, 0.2);
  }
`,To=()=>{let{levelId:e}=S(),[r]=c(),l=b(),{playBGM:u,stopBGM:d}=k(),f=r.get(`difficulty`)||s.EASY,p=r.get(`question`);(0,j.useEffect)(()=>(u(`battle`),()=>{d()}),[u,d]);let x=ee(e||`1-1`)||ge(e||``),T=fe[f],O=de[e||`1-1`]?.[f]||me[f],A=(0,j.useMemo)(()=>e===`1-1`&&Te[f]?Te[f]:e===`1-2`&&m[f]?m[f]:e===`1-3`&&E[f]?E[f]:e===`2-1`&&n[f]?n[f]:e===`2-2`&&re[f]?re[f]:e===`2-3`&&g[f]?g[f]:e===`2-4`&&a[f]?a[f]:e===`3-1`&&o[f]?o[f]:e===`3-2`&&y[f]?y[f]:e===`3-3`&&se[f]?se[f]:e===`3-4`&&i[f]?i[f]:e===`4-1`&&v[f]?v[f]:e===`4-2`&&ce[f]?ce[f]:e===`4-3`&&w[f]?w[f]:e===`5-1`&&le[f]?le[f]:e===`5-2`&&oe[f]?oe[f]:e===`6`&&C[f]?C[f]:e===`7-1`&&te[f]?te[f]:e===`7-2`&&ne[f]?ne[f]:e===`8`&&ie[f]?ie[f]:e===`9`&&ae[f]?ae[f]:(e===`h1`||e===`H1`)&&he[f]?he[f]:(e===`h2`||e===`H2`)&&pe[f]?pe[f]:x?.questions||[],[e,x,f]),Se=e=>e&&[`4-2`,`4-3`,`5-1`,`5-2`,`6`,`7-1`,`7-2`,`8`,`9`,`H1`,`H2`].includes(e)?`xuanlan-shandian-s`:`xuanlan-shandian`,Ce=e=>e===`4-1`,we=Se(e),Ee=xe(we,f),De=be(we,f),Oe=ye(e||``,f),ke=ve(e||``,f),Ae=e===`1-1`,je=Ae?Ee:Oe,Me=Ae?De:ke,Ne=_e(e||``,f),N=O?{...O,weapon:{...O.weapon,name:Me,completeImage:je,parts:Ne}}:void 0,Pe=(0,j.useMemo)(()=>{if(!p)return 0;let e=parseInt(p,10);if(isNaN(e)||e<1)return 0;let t=e-1;return t>=A.length?0:t},[p,A.length]),[P,F]=(0,j.useState)(f===`easy`?`quiz`:`guardianUpgrade`),[I,Ie]=(0,j.useState)(Pe),[L,Le]=(0,j.useState)([]),[R,Re]=(0,j.useState)(0),[z,ze]=(0,j.useState)(!1),[Be,Ve]=(0,j.useState)(!1),[B,V]=(0,j.useState)({selectedAnswer:null,placements:{},marks:[]}),[He,Ue]=(0,j.useState)([]),H=A[I],We=A.length,Ge=I===We-1,U=(0,j.useMemo)(()=>H?vo(H):null,[H]),Ke=Math.floor(We*t.starsPerQuestion*T.starMultiplier),qe=R>=Math.floor(Ke*T.starRequirement),Je=N?.weapon?.parts?He.length===N.weapon.parts.length:!1,W=(0,j.useCallback)((e,n=0)=>{if(!H)return;ze(!0);let r=!1,i=Math.floor((t.starsPerQuestion+n)*T.starMultiplier);switch(H.type){case`choice`:r=e===H.correctAnswer,V(t=>({...t,selectedAnswer:e}));break;case`multi_select`:{let t=H,n=e;r=Array.isArray(n)&&n.length===t.correctAnswers.length&&n.every(e=>t.correctAnswers.includes(e)),V(e=>({...e,selectedAnswer:n}));break}case`drag`:{let t=e;if(t.__digitPlacementCorrect){r=!0,V(e=>({...e,placements:{}}));break}let n=H;r=n.items.every(e=>{let r=Object.keys(t).find(n=>t[n].includes(e.id));if(!r)return!1;let i=n.targets.find(e=>e.id===r);return i?e.group&&i.group?e.group===i.group:i.accepts.includes(e.id):!1}),V(e=>({...e,placements:t}));break}case`circle`:V(t=>({...t,marks:e}));return;case`fill_blank`:{let t=H,n=e,i=Array.isArray(t.answer)?t.answer:[t.answer],a=n.split(`,`).map(e=>e.trim().toLowerCase()),o=(t.question.match(/\{\{___\}\}/g)||[]).length;r=o===1?i.some(e=>e.trim().toLowerCase()===a[0]):a.length===o&&a.every((e,t)=>(i[t]||i[0]).split(`,`).map(e=>e.trim().toLowerCase()).includes(e)),V(e=>({...e,selectedAnswer:n}));break}case`link`:{let t=H,n=e,i=t.pairs;if(n.length!==i.length){r=!1;break}r=n.every(e=>{let t=i.find(t=>t.id===e.leftId),n=i.find(t=>t.id===e.rightId);return!t||!n?!1:t.group&&n.group?t.group===n.group:e.leftId===e.rightId});break}case`maze`:case`shape_match`:case`tangram`:case`combo`:case`shape_compose`:r=!0,i=n;break;case`timed`:r=e?.isCorrect||!1,i=t.starsPerQuestion+(e?.timeRemaining||0);break}let a={questionId:`q${I+1}`,isCorrect:r,timeSpent:0,answer:e};if(Le(e=>[...e,a]),r){Re(e=>e+i);let e=N?.weapon?.parts?.[I];e&&Ue(t=>[...t,e.id])}setTimeout(()=>Ve(!0),500)},[H,I,T,N]),Ye=(0,j.useCallback)(e=>{if(!H)return;ze(!0),V(t=>({...t,marks:e}));let n=e.length>0,r=Math.floor(t.starsPerQuestion*T.starMultiplier),i={questionId:`q${I+1}`,isCorrect:n,timeSpent:0,answer:e};if(Le(e=>[...e,i]),n){Re(e=>e+r);let e=N?.weapon?.parts?.[I];e&&Ue(t=>[...t,e.id])}setTimeout(()=>Ve(!0),500)},[H,I,T,N]),Xe=(0,j.useCallback)(()=>{Ve(!1),ze(!1),V({selectedAnswer:null,placements:{},marks:[]}),Ge?qe?F(`weaponShowcase`):Ze():Ie(e=>e+1)},[Ge,qe,R,x,e]),Ze=(0,j.useCallback)(()=>{if(x){D.updateLevelProgress(x.id,{status:`completed`,stars:R},f),D.unlockNextLevel(x.id);let e=ue(x.guardian.id,f),t,n;if(e)t=e.variant,n=e.rarity;else switch(f){case s.MEDIUM:t=`flame`,n=`gold`;break;case s.HARD:t=`ultimate`,n=`rainbow`;break;default:t=`base`,n=`rare`}D.hasCollectedCard(x.guardian.id,t)||D.addCollectedCard(x.guardian.id,x.id,R,t,n,f)}l(`/level/${e}/complete?stars=${R}&difficulty=${f}&maxStars=${Ke}`)},[x,e,l,R,f,Ke]),Qe=()=>{l(`/levels`)},$e=()=>{if(!H||!U)return null;switch(U.type){case`choice`:return(0,M.jsx)(Fe,{question:U,selectedAnswer:B.selectedAnswer,isAnswered:z,onAnswer:e=>W(e)});case`drag`:return(0,M.jsx)(dt,{question:U,placements:B.placements,isAnswered:z,onAnswer:e=>W(e)});case`circle`:return(0,M.jsx)(St,{question:U,marks:B.marks,isAnswered:z,onAnswer:e=>Ye(e)});case`multi_select`:return(0,M.jsx)(Pt,{question:U,selectedAnswers:B.selectedAnswer,isAnswered:z,onAnswer:e=>W(e)});case`fill_blank`:return(0,M.jsx)(Xt,{question:U,selectedAnswer:B.selectedAnswer,isAnswered:z,onAnswer:e=>W(e)});case`link`:return(0,M.jsx)(jn,{question:U,onAnswer:e=>W(e)});case`maze`:return(0,M.jsx)(Un,{question:U,onComplete:e=>W(null,e)});case`shape_match`:return(0,M.jsx)(rr,{config:U,onComplete:e=>W(null,e)});case`tangram`:return(0,M.jsx)(Or,{question:U,onComplete:e=>W(null,e)});case`combo`:return(0,M.jsx)(Ur,{config:U,onComplete:e=>W(null,e)});case`timed`:return(0,M.jsx)(ni,{question:U,onAnswer:(e,t)=>{W({isCorrect:!0,timeRemaining:t},t)}});case`shape_compose`:return(0,M.jsx)(gn,{question:U,isAnswered:z,onAnswer:e=>W(e,t.starsPerQuestion)});default:return(0,M.jsxs)(`div`,{children:[`未知题目类型：`,U.type]})}};return x?(0,M.jsxs)(yo,{children:[(0,M.jsx)(bo,{$position:`top: 25%; left: -20px;`,children:`☁️`}),(0,M.jsx)(bo,{$position:`top: 60%; right: -25px; animation-delay: 2s;`,children:`☁️`}),P===`quiz`&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(xo,{children:[(0,M.jsx)(gi,{currentQuestion:I,totalQuestions:We,starsEarned:R,levelName:x.name}),N?.weapon?.parts&&(0,M.jsx)(Na,{parts:N.weapon.parts,currentIndex:I,collectedParts:He,difficulty:f,weaponImage:N.weapon.completeImage})]}),N?.narratives?.[I]&&(0,M.jsx)(fo,{narrative:N.narratives[I].text,partName:N.weapon.parts?.[I]?.name},I),(0,M.jsxs)(So,{children:[(0,M.jsxs)(Co,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,type:`spring`,stiffness:200},children:[N?.narratives?.[I]?.sceneBackground&&(0,M.jsx)($a,{scene:N.narratives[I].sceneBackground,children:$e()}),!N?.narratives?.[I]?.sceneBackground&&$e()]},I),(0,M.jsx)(wo,{onClick:Qe,whileHover:{scale:1.08},whileTap:{scale:.95},children:`🚪 退出`})]}),(0,M.jsx)(_,{children:Be&&(0,M.jsx)(Oi,{isCorrect:L[L.length-1]?.isCorrect||!1,explanation:H&&H.explanation||``,onNext:Xe,isLastQuestion:Ge,autoNext:L[L.length-1]?.isCorrect})})]}),P===`guardianUpgrade`&&x&&(0,M.jsx)($i,{guardian:x.guardian,difficulty:f,onComplete:()=>F(`quiz`)}),P===`weaponShowcase`&&N?.weapon&&(0,M.jsx)(Bi,{weaponImage:N.weapon.completeImage||`/assets/weapons/easy-weapon.png`,weaponName:N.weapon.name||`超级武器`,difficulty:f,onComplete:()=>F(`battleScene`)}),P===`battleScene`&&x&&(0,M.jsx)(xa,{hero:h.find(e=>e.id===we)||h[0],enemy:x.guardian,difficulty:f,weaponComplete:Je,weaponImage:Ee,enemyWeaponImage:Oe,isUpgrade:Ce(e),isFusion:e===`H1`||e===`h1`,onComplete:()=>{F(`complete`),Ze()}})]}):(0,M.jsx)(yo,{children:(0,M.jsx)(Co,{children:`关卡不存在`})})};export{To as default};
//# sourceMappingURL=quiz-game.component-zwseFm_r.js.map