# Git Commit Message Generator

🌸 **可爱风格的 Git Commit Message 生成器**

一个专为开发者设计的、界面温柔可爱的 Git 提交信息生成工具，支持自定义类型、emoji 自动匹配、一键复制、重置与个性化设置，助你轻松规范提交信息，让每一次 commit 都充满仪式感！

![screenshot](https://img.vegecai.moe/gic.png)

---

## ✨ 主要特性

- **可爱少女风 UI**：粉色渐变、圆角卡片、柔和阴影、萌趣插画与动画，界面温暖治愈
- **类型自定义**：支持自定义 commit type（类型/emoji/标签）
- **自动生成**：根据输入实时生成符合规范的 commit message
- **一键复制**：点击即可复制生成结果，支持复制提示
- **重置与恢复默认**：快速清空内容或恢复默认类型配置
- **设置面板**：可视化编辑类型列表，随时个性化
- **响应式设计**：移动端与桌面端均有良好体验

---

## 🚀 快速开始

1. **安装依赖**

```bash
pnpm install
```

2. **启动开发环境**

```bash
pnpm dev
```

3. **访问应用**

浏览器打开 [http://localhost:3000](http://localhost:3000)

---

## 🛠️ 技术栈

- [Next.js 14](https://nextjs.org/)  
- [React 18](https://react.dev/)  
- [Tailwind CSS 3.x](https://tailwindcss.com/)  
- TypeScript  
- 现代前端工程化

---

## 🎀 界面美化说明

- 主色调为粉色系，渐变背景与圆角卡片营造温柔氛围
- 按钮、输入框均采用柔和阴影与动画反馈
- 顶部与结果区配有可爱 emoji（如 🧸、🌸、🧁、🍰）点缀
- 设置面板采用弹窗形式，编辑体验友好
- 字体加粗、色彩明快，整体风格少女心满满

---

## ⚙️ 类型自定义

点击右上角「设置」按钮，可自定义类型（支持 value、label、emoji），保存后下拉菜单实时更新。

类型配置示例：

```json
[
  { "value": "feat", "label": "新功能", "emoji": "✨" },
  { "value": "fix", "label": "修复", "emoji": "🐞" },
  { "value": "docs", "label": "文档", "emoji": "📚" }
]
```

---

## 📄 License

MIT

---

## 灵感来源 & 感谢项目

- [fish-island-frontend](https://github.com/lhccong/fish-island-frontend)
