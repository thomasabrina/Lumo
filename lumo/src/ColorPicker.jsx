import React from "react";

const COLORS = [
  "#f43f5e", // pink
  "#f97316", // orange
  "#facc15", // yellow
  "#22c55e", // green
  "#3b82f6", // blue
  "#8b5cf6", // purple
  "#14b8a6", // teal
  "#64748b", // gray
];

export default function ColorPicker({ onSelect }) {
  return (
    <div className="absolute top-full mt-2 flex flex-wrap gap-2 bg-white p-2 rounded shadow-lg border border-gray-200 z-10">
      {COLORS.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className="w-6 h-6 rounded-full"
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  );
}
