import React, { useState, useEffect } from "react";
import Leaf from "./Leaf";

export default function Canvas() {
  // 所有叶子的状态数组
  const [leaves, setLeaves] = useState(() => {
    // 初始化时从 localStorage 读取
    const saved = localStorage.getItem("lumo-tree");
    return saved ? JSON.parse(saved) : [];
  });

  // 每当 leaves 变化就保存
  useEffect(() => {
    localStorage.setItem("lumo-tree", JSON.stringify(leaves));
  }, [leaves]);

  // 添加新叶子
  const addLeaf = () => {
    const newLeaf = {
      id: Date.now(),
      text: "New Leaf",
      color: "#facc15", // 默认黄色
      size: 150,
      x: 100,
      y: 100,
    };
    setLeaves([...leaves, newLeaf]);
  };

  // 更新单个叶子
  const updateLeaf = (id, updates) => {
    setLeaves(leaves.map(l => (l.id === id ? { ...l, ...updates } : l)));
  };

  return (
    <div className="relative w-full h-screen bg-green-50 overflow-hidden">
      {/* 添加叶子按钮 */}
      <button
        onClick={addLeaf}
        className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
      >
        Add Leaf 🍃
      </button>

      {/* 渲染所有叶子 */}
      {leaves.map((leaf) => (
        <Leaf
          key={leaf.id}
          {...leaf}
          onUpdate={(updates) => updateLeaf(leaf.id, updates)}
        />
      ))}
    </div>
  );
}
