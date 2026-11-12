# 66CSLB_studying

加州 CSLB B（General Building）执照备考刷题网页，中英对照，适配 iPhone Safari。

**在线使用：** https://simon66-workshop.github.io/66CSLB_studying/

## 功能
- 练习模式：按科目练习，答完即判对错，错题立即显示中英讲解和法规出处
- 模拟考试：计时，按 CSLB 公布的科目权重抽题，可标记、跳题、交卷后分科出分
- 错题本：错题自动收集，连续答对 2 次自动移出
- 进度保存在本机浏览器（localStorage），可复制备份码迁移
- 首次联网打开后可离线使用（Service Worker 缓存）

## 重要声明
- 本题库为**原创练习题，不是 CSLB 考试真题**。CSLB 考题保密，不存在合法公开的“官方题目 + 标准答案”。
- 题目依据 CSLB 公开的 Law & Business 与 B Study Guide（13E-LAW / 13E-B，2026 年 3 月版）大纲编写，每题注明出处（B&P Code、Civil Code、Labor Code、2025 版加州建筑系列规范、Cal/OSHA Title 8 等）。
- 法规会更新，考前请以 [CSLB 官网](https://www.cslb.ca.gov/) 和法规原文为准。

## 文件
- `index.html`：完整网页（题库已内嵌）
- `questions.js`：题库源文件。正确答案固定写在 `o[0]`，网页显示时会打乱选项；每题必须有 `s`（出处）
- `sw.js`、`manifest.webmanifest`、图标：离线与添加到主屏幕

## 加题
在 `questions.js` 中按相同格式追加题目，然后把内容同步到 `index.html` 中的 `QUESTIONS` 数组。
