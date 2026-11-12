// ---------- STUDY PLAN / KEY POINTS / FULL MOCK ----------
const PLAN=[
 {w:1,ex:"LB",focus:"法律商务：合同 + 执照",tasks:["读 CSLB《Get Licensed to Build》和 Law Study Guide","背“执照与合同”必背重点","练习：合同要求与执行、企业组织与执照"],goal:"这两科正确率 ≥ 80%",secs:["con","org"]},
 {w:2,ex:"LB",focus:"法律商务：雇佣 + 财务",tasks:["读 EDD DE 44、IRS Pub 15 重点章节","练计算：流动比率、毛利定价、盈亏平衡","练习：雇佣要求、企业财务"],goal:"计算题全对",secs:["emp","fin"]},
 {w:3,ex:"LB",focus:"法律商务：保险留置权、安全、公共工程",tasks:["画留置权时间轴：20 / 30 / 60 / 90 / 90 天","读 DIR Public Works Manual 概要","练习：全部科目随机"],goal:"全科随机练习 ≥ 85%",secs:["ins","saf","pub"]},
 {w:4,ex:"LB",focus:"法律商务冲刺",tasks:["每两天一次全真模拟（纯英文、交卷后看答案）","清空法律商务错题本","连续 3 次 ≥ 85% 就去 PSI 约考"],goal:"连续 3 次模拟 ≥ 85%",secs:[]},
 {w:5,ex:"B",focus:"B：核心工种（30%）",tasks:["管道、电气、暖通、混凝土、屋面","对照 2025 CPC / CEC 原文核对数字","练习：核心工种"],goal:"核心工种 ≥ 80%",secs:["core"]},
 {w:6,ex:"B",focus:"B：框架 + 装饰",tasks:["找出“现场习惯 ≠ 规范”的点，单独记一页","特别记加州修订：护栏 42 英寸","练习：框架与结构、装饰工种"],goal:"两科 ≥ 85%",secs:["frame","fin"]},
 {w:7,ex:"B",focus:"B：估算 + 安全 + 交通管制",tasks:["每天 10 道算量题（立方码、板英尺、立柱数）","Cal/OSHA：沟槽、梯子、坠落、矽尘","MUTCD 旗手规则"],goal:"计算题全对",secs:["plan","saf"]},
 {w:8,ex:"B",focus:"B 冲刺",tasks:["全真模拟（纯英文、交卷后看答案）","每天过一遍必背重点","清空 B 错题本"],goal:"连续 3 次 ≥ 85%，去考",secs:[]}
];
// [[ ]] marks a key number/term to highlight
const KEYS=[
 {ex:"LB",cat:"执照与合同",items:[
  "无照小工程豁免：总价低于 [[$1,000]]，且不需许可证、不雇人（B&P §7048，2025 起）",
  "承包商保证金 [[$25,000]]（§7071.6）",
  "LLC 责任险至少 [[$1,000,000]]（≤5 人）＋ [[$100,000]] 员工保证金",
  "信息变更 [[90 天]] 内通知 CSLB；资格人离开 [[90 天]] 内通知、[[90 天]] 内补人",
  "执照每 [[2 年]] 续期；非活跃执照每 [[4 年]]",
  "家装首付 ≤ [[$1,000 或 10%]]（取较低）；总价超过 [[$500]] 适用 §7159 合同要求",
  "取消期 [[3 个工作日]]；65 岁以上 [[5 个工作日]]；2026 起可 [[邮件取消]]（AB 1327）",
  "维修服务合同总价低于 [[$750]]",
  "收到进度款 [[7 天]] 内付分包商（§7108.5）",
  "纪律处分时效 [[4 年]]，隐蔽结构缺陷 [[10 年]]；诉讼时效 明显缺陷 [[4 年]] / 隐蔽缺陷 [[10 年]]",
  "2026-07 起无照施工最低罚款 [[$1,500]]（SB 779）"]},
 {ex:"LB",cat:"留置权",items:[
  "初步通知：首次供货/施工后 [[20 天]] 内",
  "直接承包商：完工后 [[90 天]] 内，或完工通知登记后 [[60 天]] 内登记留置权",
  "分包商/供应商：完工通知登记后 [[30 天]] 内",
  "登记后 [[90 天]] 内起诉执行",
  "钱没到账签 [[有条件]] 弃权；到账后才签 [[无条件]]"]},
 {ex:"LB",cat:"雇佣与工资",items:[
  "新员工 [[20 天]] 内向 EDD 申报（DE 34）",
  "I-9 第 2 部分：入职 [[3 个工作日]] 内；保存 雇用后 [[3 年]] 或离职后 [[1 年]]（取较晚）",
  "加班：日超 [[8 小时]] 或周超 [[40 小时]] 付 [[1.5 倍]]；日超 [[12 小时]] 付 [[2 倍]]",
  "解雇 [[立即]] 结清工资；未通知辞职 [[72 小时]] 内",
  "每月至少发 [[2 次]] 工资；工资记录保存 [[3 年]]",
  "社保 [[6.2%]]、医保 [[1.45%]]（各付一份）；941 表 [[每季度]]",
  "有 [[1 名]] 员工就须工伤险；报伤后 [[1 个工作日]] 内给 DWC-1；全员强制推迟到 [[2028]]",
  "工作超过 [[5 小时]] 给 [[30 分钟]] 用餐；每 [[4 小时]] 给 [[10 分钟]] 休息"]},
 {ex:"LB",cat:"公共工程与安全",items:[
  "超过 [[$1,000]] 的公共工程付现行工资；须在 [[DIR]] 注册；做 [[认证工资单]]",
  "公共工程超过 [[$25,000]] 须付款保证金",
  "每个雇主须有书面 [[IIPP]]；重伤 [[8 小时]] 内报 Cal/OSHA",
  "工具箱会议至少每 [[10 个工作日]] 一次",
  "[[1978]] 年前的房子适用 EPA RRP 铅漆规则"]},
 {ex:"B",cat:"楼梯、护栏、出口（2025 CRC）",items:[
  "踢面最高 [[7¾″]]，踏面最小 [[10″]]，净空 [[6′8″]]（R318.7）",
  "扶手高 [[34–38″]]（R320）",
  "加州护栏至少 [[42″]]（IRC 是 36″）；高差超过 [[30″]] 就要设；间隙挡住 [[4″]] 球（R321）",
  "逃生窗净开口 [[5.7 sq ft]]（地坪层 5.0），净高 ≥ [[24″]]、净宽 ≥ [[20″]]，窗台 ≤ [[44″]]（R319）",
  "出口门净宽 [[32″]]、净高 [[78″]]；居住空间层高 [[7 ft]]",
  "烟雾报警：[[每间卧室]]、卧室外区域、[[每一层]]（R310）"]},
 {ex:"B",cat:"结构与基础",items:[
  "基础底面在原状土下至少 [[12″]]",
  "锚栓 [[½″]]，埋深 [[7″]]，间距 [[6 ft]]，离板端 [[12″]] 以内",
  "格栅开槽 ≤ 高度的 [[1/6]]，钻孔 ≤ [[1/3]]，不在跨中三分之一",
  "承重墙立柱开槽 ≤ [[25%]]，钻孔 ≤ [[40%]]（双柱 60%）",
  "混凝土上的地梁板用 [[防腐处理]] 木材",
  "车库侧墙面 [[½″]] 石膏板；上有住人房间用 [[⅝″ X 型]]；车库通室内的门厚 [[1⅜″]]、自闭自锁"]},
 {ex:"B",cat:"核心工种",items:[
  "混凝土按 [[28 天]] 强度设计；加水 → 坍落度↑ [[强度↓]]",
  "直接浇在土上的混凝土，钢筋保护层 [[3″]]",
  "楼板下防潮膜 [[6 密尔]]（2025 版）",
  "存水弯水封 [[2–4″]]（CPC §1005.1）；排水坡度 [[¼″/ft]]",
  "热水器绑带：上 [[1/3]] 和下 [[1/3]]，下带离控制器 ≥ [[4″]]",
  "干衣机排气管 ≤ [[14 ft]]（含 2 个弯头，多一个减 2 ft）",
  "GFCI：浴室、车库、室外、厨房；厨房台面至少 [[2 路 20A]]",
  "沥青瓦最小坡度 [[2:12]]，2:12 到 4:12 之间 [[双层衬垫]]",
  "抹灰：刮糙→找平→面层；泄水条高出泥地 [[4″]] / 铺装面 [[2″]]"]},
 {ex:"B",cat:"安全与算量",items:[
  "Cal/OSHA 坠落防护 [[7.5 ft]]（联邦 OSHA 6 ft）",
  "沟槽 [[5 ft]] 须保护系统和许可证；[[4 ft]] 起每 [[25 ft]] 内要有出口；弃土离边 [[2 ft]]",
  "梯子高出平台 [[3 ft]]；摆放角度 [[4:1]]",
  "挖土前至少 [[2 个工作日]] 联系 811",
  "1 立方码 = [[27]] 立方英尺；板英尺 = 厚×宽×长(ft) [[÷12]]",
  "售价 = 成本 ÷ [[(1 − 毛利率)]]"]}
];
const PASS=[["2014-15","79/22/62","62/25/45"],["2015-16","76/20/57","60/26/45"],["2016-17","74/18/53","59/23/42"],["2017-18","74/19/53","60/23/42"]];
function hlKey(s){return esc(s).replace(/\[\[(.+?)\]\]/g,'<b class="hl">$1</b>')}
function planPage(){
  stopTimer();rerender=planPage;setTitle("8周备考计划",home);
  S.plan=S.plan||{};
  const done=PLAN.filter(p=>S.plan[p.w]).length;
  const cur=PLAN.find(p=>!S.plan[p.w]);
  $app.innerHTML=`
  <section class="card hero">
    <div class="eyebrow">目标</div>
    <h2 style="margin:0">两门<span class="hl-big">一次通过</span></h2>
    <p style="margin:0">CSLB 数据：重考通过率只有约 <b class="hl warnc">20%</b>。首次通过率：法律商务约 <b class="hl">74–79%</b>，B 专业约 <b class="hl">60%</b>。宁可晚两周考，不要“先去试试”。</p>
    <div class="meter"><i style="width:${Math.round(done/8*100)}%"></i></div>
    <div class="small muted">已完成 ${done} / 8 周${cur?` · 本周：第 ${cur.w} 周 ${esc(cur.focus)}`:" · 全部完成，去考吧"}</div>
  </section>
  ${PLAN.map(p=>`<section class="card week ${S.plan[p.w]?"is-done":""} ${cur&&cur.w===p.w?"is-cur":""}">
    <div class="topline"><span class="wk ${p.ex==="LB"?"lb":"bt"}">第 ${p.w} 周 · ${p.ex==="LB"?"法律商务":"B专业"}</span>${cur&&cur.w===p.w?`<span class="pill warn">本周</span>`:""}</div>
    <h3>${esc(p.focus)}</h3>
    <ul class="plain">${p.tasks.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
    <div class="goal">达标线：<b class="hl">${esc(p.goal)}</b></div>
    <div class="row">
      ${p.secs.length?`<button class="btn blue grow" data-pr="${p.ex}:${p.secs.join(",")}">练本周科目</button>`:`<button class="btn blue grow" data-full="${p.ex}">全真模拟</button>`}
      <button class="btn grow" data-wk="${p.w}">${S.plan[p.w]?"✓ 已完成（点击撤销）":"标记本周完成"}</button>
    </div></section>`).join("")}
  <section class="card"><h3>为什么达标线是 85%</h3><p style="margin:0" class="small">CSLB 不公布及格分，真实考题比练习题更绕、范围更广。把练习门槛定高，是给自己留安全余量。</p></section>
  <section class="card"><h3>历年首次 / 重考 / 合计通过率</h3>
    <table><thead><tr><th>财年</th><th class="n">法律商务</th><th class="n">B专业</th></tr></thead><tbody>
    ${PASS.map(r=>`<tr><td>${r[0]}</td><td class="n">${r[1]}%</td><td class="n">${r[2]}%</td></tr>`).join("")}</tbody></table>
    <div class="src">来源：CSLB 2018 Sunset Report 草稿 Table 8。最近 5 年分科数据未能获取，可查 CSLB 2023 Sunset Report 第 57 页。</div></section>
  <section class="card"><h3>考场技巧</h3><ul class="plain">
    <li><b class="hl">每题都要答</b>：空着的题一定不得分，没把握先选一个再标记。</li>
    <li>3.5 小时够用：先快速做一遍，第二遍处理标记题。</li>
    <li>圈出限定词：<b class="hl">minimum / maximum / except / NOT / within</b>。</li>
    <li>数字题用排除法：干扰项常是相邻条款的数字，比如 <b class="hl">20/30/60/90 天</b>、<b class="hl">36″/42″</b>、<b class="hl">$500/$750/$1,000</b>。</li>
    <li>加州规定和全国通用做法不一致时，<b class="hl">选加州的</b>。</li></ul></section>`;
  $app.onclick=e=>{const b=e.target.closest("button");if(!b)return;
    if(b.dataset.wk){const w=b.dataset.wk;S.plan[w]=!S.plan[w];save();planPage()}
    if(b.dataset.pr){const [ex,secs]=b.dataset.pr.split(":");startPracticeSecs(ex,secs.split(","))}
    if(b.dataset.full){fullMockSetup(b.dataset.full)}};
  window.scrollTo(0,0);
}
function startPracticeSecs(ex,secs){
  let qs=QUESTIONS.filter(q=>q.ex===ex&&secs.includes(q.sec));
  qs=shuffle(qs).sort((a,b)=>score(a)-score(b));
  practiceQ({ex,sec:secs.length===1?secs[0]:null,wrongOnly:false,list:qs.map(q=>({id:q.id,order:shuffle([0,1,2,3]),pick:null})),i:0,c:0});
}
function keysPage(tab){
  stopTimer();tab=tab||keysPage.tab||"LB";keysPage.tab=tab;rerender=()=>keysPage(tab);setTitle("必背重点",home);
  $app.innerHTML=`
  <div class="seg" role="tablist"><button data-tab="LB" aria-pressed="${tab==="LB"}">法律与商务</button><button data-tab="B" aria-pressed="${tab==="B"}">B 专业</button></div>
  <p class="small muted" style="margin:0"><b class="hl">橙色</b> 是必背数字或关键词。每天过一遍，考前一周每天两遍。</p>
  ${KEYS.filter(k=>k.ex===tab).map(k=>`<section class="card keycard ${tab==="LB"?"lb":"bt"}"><h3>${esc(k.cat)}</h3><ul class="keys">${k.items.map(i=>`<li>${hlKey(i)}</li>`).join("")}</ul></section>`).join("")}
  <button class="btn primary" data-go="${tab}">背完了，去练这一门</button>`;
  $app.onclick=e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.tab)keysPage(b.dataset.tab);if(b.dataset.go)startPractice(b.dataset.go,null,false)};
  window.scrollTo(0,0);
}
function fullMockSetup(ex){
  stopTimer();rerender=()=>fullMockSetup(ex);setTitle("全真模拟 · "+(ex==="LB"?"法律商务":"B专业"),home);
  const n=bank(ex).length;fullMockSetup.t=fullMockSetup.t||"pace";
  const mins=fullMockSetup.t==="official"?210:Math.round(n*1.8);
  $app.innerHTML=`<section class="card hero">
    <div class="eyebrow">Full mock · 真实考场规则</div>
    <h2 style="margin:0">${esc(EXAMS[ex].name[1])}：全部 <span class="hl-big">${n}</span> 题</h2>
    <ul class="plain">
      <li><b class="hl">纯英文</b>出题（和正式考试一致），交卷后可切回中英对照看讲解</li>
      <li><b class="hl">交卷后</b>才显示对错和讲解</li>
      <li>按考纲权重排列，题目和选项全部打乱</li>
      <li>可标记题目、看题号总览、提前交卷；时间到自动交卷</li></ul>
    <div class="eyebrow">计时</div>
    <div class="seg"><button data-t="pace" aria-pressed="${fullMockSetup.t==="pace"}">训练节奏 1.8 分钟/题（${Math.round(n*1.8)} 分钟）</button><button data-t="official" aria-pressed="${fullMockSetup.t==="official"}">官方时长 3.5 小时</button></div>
    <p class="small muted" style="margin:0">本题库题量少于真实考试，用官方 3.5 小时会显得很宽裕，平时建议用训练节奏。达标线 <b class="hl">85%</b>。</p>
    <button class="btn primary" id="go">开始全真模拟（${mins} 分钟）</button>
  </section>`;
  $app.onclick=e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.t){fullMockSetup.t=b.dataset.t;fullMockSetup(ex)}if(b.id==="go")startFullMock(ex,mins)};
}
function startFullMock(ex,mins){
  const qs=weightedSample(ex,bank(ex).length);
  S.prevLang=S.lang;S.lang="en";syncLang();
  const sess={ex,full:true,feedback:false,list:qs.map(q=>({id:q.id,order:shuffle([0,1,2,3]),pick:null,flag:false})),i:0,end:Date.now()+mins*60000,showGrid:false,done:false};
  stopTimer();timerId=setInterval(()=>tick(sess),1000);mockQ(sess);
}
function restoreLang(){if(S.prevLang){S.lang=S.prevLang;delete S.prevLang;save();syncLang()}}
function hlExp(s){ // escape, then color citations and key numbers
  let h=esc(s);
  h=h.replace(/(§\s?[0-9][0-9A-Za-z.()\-–]*)/g,'<span class="cite">$1</span>');
  h=h.replace(/(\$[\d,]+(?:\.\d+)?|\b\d+(?:[.,\/\-–]\d+)*(?:\s?\d\/\d)?\s?(?:%|percent|business days|working days|calendar days|days|day|hours|minutes|feet|ft\.?|inches|in\.|years|months|mil|sq ft|square feet|cubic yards|cubic feet|个工作日|个日历日|天|小时|分钟|英尺|英寸|年|个月|密尔|平方英尺|立方码|立方英尺|倍)|\b\d+(?:\.\d+)?\s?×)/g,'<b class="hl">$1</b>');
  return h;
}
