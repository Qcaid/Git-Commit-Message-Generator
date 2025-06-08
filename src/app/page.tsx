"use client";
import React, { useState, useEffect } from "react";

const defaultTypes = [
  { value: "feat", label: "新功能(feat)", emoji: "✨" },
  { value: "fix", label: "修复bug(fix)", emoji: "🐛" },
  { value: "docs", label: "文档变更(docs)", emoji: "📝" },
  { value: "style", label: "代码格式(style)", emoji: "🎨" },
  { value: "refactor", label: "重构(refactor)", emoji: "♻️" },
  { value: "perf", label: "性能优化(perf)", emoji: "⚡️" },
  { value: "test", label: "增加或者更新测试(test)", emoji: "✅" },
  { value: "build", label: "构建系统或者外部依赖更改(build)", emoji: "🛠️" },
  { value: "ci", label: "CI配置或者脚本变动(ci)", emoji: "👷" },
  { value: "chore", label: "不影响代码的其余变动(chore)", emoji: "📦" },
  { value: "revert", label: "回退(revert)", emoji: "⏪" },
];

export default function Home() {
  const [type, setType] = useState("feat");
  const [scope, setScope] = useState("");
  const [description, setDescription] = useState("");
  const [detailContent, setDetailContent] = useState("");
  const [result, setResult] = useState("");
  const [showCopied, setShowCopied] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [customTypes, setCustomTypes] = useState(defaultTypes);
  const [tempTypes, setTempTypes] = useState(
    JSON.stringify(defaultTypes, null, 2)
  );

  useEffect(() => {
    const selectedType = customTypes.find((t) => t.value === type);
    let msg = selectedType ? `${selectedType.emoji} ${type}` : type;
    if (scope) msg += `(${scope})`;
    msg += ": ";
    msg += description;
    if (detailContent) msg += `\n\n${detailContent}`;
    setResult(msg);
  }, [type, scope, description, detailContent, customTypes]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1200);
  };

  const handleReset = () => {
    setType("feat");
    setScope("");
    setDescription("");
    setDetailContent("");
  };

  const handleSaveSettings = () => {
    try {
      const parsed = JSON.parse(tempTypes);
      if (Array.isArray(parsed)) {
        setCustomTypes(parsed);
        setShowSettings(false);
      }
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex flex-col items-center py-8 relative">
      <div className="absolute top-6 left-6 text-4xl select-none animate-bounce">
        🧸
      </div>
      <div className="absolute top-6 right-6 text-4xl select-none animate-spin-slow">
        🌸
      </div>
      <div className="w-full max-w-xl bg-white/80 rounded-3xl shadow-xl p-8 border-4 border-pink-200 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-pink-500 flex items-center gap-2">
            <span>💖</span>Git 提交信息生成器<span>🎀</span>
          </h1>
          <button
            className="px-4 py-1 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 transition font-bold shadow"
            onClick={() => setShowSettings(true)}
            type="button"
          >
            设置
          </button>
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold text-pink-600">类型</label>
          <select
            className="w-full border-2 border-pink-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-pink-300 bg-pink-50 text-pink-700 font-bold"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {customTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.emoji} {t.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold text-pink-600">
            范围（可选）
          </label>
          <input
            className="w-full border-2 border-pink-200 rounded-xl px-3 py-2 bg-pink-50 text-pink-700"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            placeholder="如：core, api, utils"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold text-pink-600">
            简要描述
          </label>
          <input
            className="w-full border-2 border-pink-200 rounded-xl px-3 py-2 bg-pink-50 text-pink-700"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="简要说明本次提交的主要内容"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold text-pink-600">
            详细内容（可选）
          </label>
          <textarea
            className="w-full border-2 border-pink-200 rounded-xl px-3 py-2 bg-pink-50 text-pink-700"
            rows={3}
            value={detailContent}
            onChange={(e) => setDetailContent(e.target.value)}
            placeholder="补充说明（如有）"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-semibold text-pink-600">
            生成结果
          </label>
          <textarea
            className="w-full border-2 border-pink-200 rounded-xl px-3 py-2 bg-pink-100 text-pink-700 font-mono"
            rows={3}
            value={result}
            readOnly
          />
          <div className="flex gap-2 mt-3">
            <button
              className="px-4 py-1 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition font-bold shadow"
              onClick={handleCopy}
              type="button"
            >
              复制
            </button>
            <button
              className="px-4 py-1 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 transition font-bold shadow"
              onClick={handleReset}
              type="button"
            >
              重置
            </button>
            <button
              className="px-4 py-1 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 transition font-bold shadow"
              onClick={() => {
                setType("feat");
                setScope("");
                setDescription("");
                setDetailContent("");
              }}
              type="button"
            >
              恢复默认
            </button>
          </div>
          {showCopied && (
            <span className="text-pink-500 ml-2 font-bold animate-bounce">
              已复制！
            </span>
          )}
        </div>
      </div>
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative border-4 border-pink-200">
            <h2 className="text-xl font-extrabold text-pink-500 mb-3 flex items-center gap-2">
              🎀 自定义类型设置
            </h2>
            <textarea
              className="w-full border-2 border-pink-200 rounded-xl px-3 py-2 mb-2 font-mono bg-pink-50 text-pink-700"
              rows={10}
              value={tempTypes}
              onChange={(e) => setTempTypes(e.target.value)}
            />
            <div className="flex gap-2 justify-end">
              <button
                className="px-4 py-1 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition font-bold shadow"
                onClick={handleSaveSettings}
                type="button"
              >
                保存
              </button>
              <button
                className="px-4 py-1 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 transition font-bold shadow"
                onClick={() => setShowSettings(false)}
                type="button"
              >
                取消
              </button>
            </div>
            <div className="text-xs text-pink-400 mt-2">
              请以 JSON 数组格式编辑类型（包含 value、label、emoji 字段）。
            </div>
            <div className="absolute -top-8 right-4 text-3xl select-none animate-bounce">
              🧁
            </div>
          </div>
        </div>
      )}
      <div className="absolute bottom-6 right-6 text-4xl select-none animate-bounce">
        🍰
      </div>
    </div>
  );
}
