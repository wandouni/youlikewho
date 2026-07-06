# 你的古代生存人格是什么

一个轻量级 Web 娱乐测试页面。用户通过 15 道情境选择题，得到一个“如果生活在古代，会如何生存”的身份型人格结果。

本项目是纯前端静态实现，不需要后端、不需要构建工具，直接打开 `index.html` 即可使用。

## 功能

- 首页：展示测试标题、说明文案、开始测试按钮和部分结果预览。
- 答题页：15 道情境题，每题 4 个选项，支持返回上一题修改。
- 评分模型：根据 10 个维度累计得分并归一化到 0 至 100。
- 结果匹配：将用户人格向量与 50 个古代生存人格画像做距离匹配。
- 结果页：展示主结果、匹配度、关键词、历史气质参考、多维度分析、优势短板和相似人格前三名。
- 分享：优先调用浏览器系统分享，不支持时复制分享文案。
- 移动端与微信适配：支持小屏单列布局、触控按钮、安全区留白和微信内分享提示。
- 本地统计：使用 `localStorage` 记录匿名事件计数和答题进度。
- 关于页与隐私页：说明测试边界和本地数据使用方式。

## 运行方式

直接用浏览器打开：

```bash
open index.html
```

如果浏览器对本地文件权限较严格，也可以启动一个静态服务：

```bash
python3 -m http.server 5173
```

然后访问：

```text
http://localhost:5173
```

### 移动端访问

移动端测试访问

```bash
//启动服务
python3 -m http.server 5173

//查看本机IP
ipconfig getifaddr en0
//微信访问地址
http://你的电脑IP:5173
```

### 快速预览所有结果页

如果想快速查看每一种结果页效果，可以先启动本地服务并打开页面：

```bash
python3 -m http.server 5173
```

```text
http://localhost:5173
```

然后打开浏览器 DevTools Console，粘贴以下脚本：

```js
(() => {
  delete window.__resultNames;
  delete window.__showResult;
  delete window.__nextResult;

  let i = -1;
  const previewMatches = [
    96, 88, 91, 84, 93, 79, 86, 94, 82, 90,
    85, 97, 81, 89, 92, 78, 87, 95, 83, 90,
    86, 98, 80, 88, 94, 82, 91, 85, 93, 79,
    87, 96, 84, 92, 89, 81, 95, 83, 90, 86,
    97, 80, 88, 94, 82, 91, 85, 93, 79, 87,
  ];
  const previewMatch = (id) => previewMatches[(Number(id) - 1) % previewMatches.length];

  window.__resultNames = () => RESULTS.map((r) => `${r.id}. ${r.name}`);

  window.__showResult = (idOrName) => {
    const target = RESULTS.find(
      (r) => r.id === Number(idOrName) || r.name.includes(String(idOrName)),
    );
    if (!target) return console.warn("没找到结果：", idOrName);

    const oldRank = rankResults;
    const oldScores = calculateScores;
    const targetMatch = previewMatch(target.id);
    const rankedPreview = RESULTS.map((result) => {
      const distance = Math.sqrt(
        DIMENSIONS.reduce((sum, [key]) => sum + (target.vector[key] - result.vector[key]) ** 2, 0),
      );
      return {
        ...result,
        distance,
        match:
          result.id === target.id
            ? targetMatch
            : Math.max(52, Math.min(96, Math.round(100 - distance / 3.35))),
      };
    }).sort((a, b) => {
      if (a.id === target.id) return -1;
      if (b.id === target.id) return 1;
      return a.distance - b.distance;
    });
    const similarText = rankedPreview
      .slice(1, 3)
      .map((item) => `${item.name} ${item.match}%`)
      .join(" / ");

    calculateScores = () => ({ ...target.vector });
    rankResults = () => rankedPreview;

    state = {
      current: QUESTIONS.length - 1,
      answers: Array(QUESTIONS.length).fill(0),
      startedAt: Date.now(),
    };

    renderResult();

    calculateScores = oldScores;
    rankResults = oldRank;

    const similarNode = document.querySelector(".poster-block-similar p");
    if (similarNode) similarNode.textContent = similarText;

    console.log(
      `已切换到：${target.id}. ${target.name}，预览匹配度：${targetMatch}%，相似人格：${similarText}`,
    );
  };

  window.__nextResult = () => {
    i = (i + 1) % RESULTS.length;
    __showResult(RESULTS[i].id);
  };

  console.log("可用命令：__resultNames() / __showResult(37) / __showResult('城门') / __nextResult()");
})();
```

如果你之前已经在同一个 Console 粘贴过旧脚本，需要刷新页面后重新粘贴上面整段脚本。不要只继续执行旧的 `__nextResult()`，旧函数会保留旧的相似人格逻辑。新版脚本每次运行都会重置预览命令，并在 Console 里打印当前结果的预览匹配度和相似人格。

常用命令：

```js
__resultNames();      // 查看全部结果
__showResult(1);      // 按结果 ID 查看
__showResult("城门"); // 按名称关键词查看
__nextResult();       // 切换到下一种结果
```

## 文件结构

```text
.
├── index.html              # 页面入口
├── styles.css              # 页面样式与响应式布局
├── app.js                  # 题目、结果数据、评分和交互逻辑
├── spec.md                 # 产品需求文档
└── assets/
    └── ancient-desk.png    # 古风桌面背景图
```

## 评分维度

第一版使用 10 个维度：

- 权力驱动力
- 秩序偏好
- 风险承担
- 现实主义
- 理想主义
- 表达欲
- 人性洞察
- 组织能力
- 隐忍程度
- 自我超脱

每个选项会给 1 至 3 个维度加分。答题完成后，系统将各维度得分归一化，再与 50 个结果画像计算距离，距离最近的结果作为主结果。

## 数据与隐私

当前版本不需要登录，也不会向服务器提交答题数据。以下信息仅保存在用户本机浏览器：

- 当前答题进度
- 已选答案
- 开始、完成、分享、重新测试等匿名事件计数

清除浏览器站点数据即可删除这些本地记录。

## 移动端与微信说明

页面已针对手机浏览器和微信内网页做基础适配：

- 使用 `viewport-fit=cover` 兼容刘海屏安全区。
- 移动端改为单列布局，按钮触控区域不小于常见移动端推荐尺寸。
- 移动端不使用 `background-attachment: fixed`，避免 iOS/微信滚动卡顿或背景错位。
- 微信内不会强依赖 Web Share API；结果页会提示用户截图结果卡片或通过右上角菜单转发。
- 分享按钮在微信内优先复制分享文案。

## 验证

已执行：

```bash
rtk node --check app.js
```

并通过 Node DOM stub 跑通完整 15 题答题流程，确认可以进入结果页并记录完成事件。

## 产品边界

本测试仅供娱乐，不构成严肃心理测评、职业诊断、命理判断或历史学术评价。历史人物参考只用于气质类比，不代表用户与某位历史人物完全相同。
