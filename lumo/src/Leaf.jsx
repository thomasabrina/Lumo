import React, { useState } from "react";
import Draggable from "react-draggable";
import ColorPicker from "./ColorPicker";

export default function Leaf({ id, text, color, size, x, y, onUpdate }) {
  const [showColors, setShowColors] = useState(false);

  return (
    <Draggable
      defaultPosition={{ x, y }}
      onStop={(_, data) => {
        onUpdate({ x: data.x, y: data.y });
      }}
    >
      <div
        className="absolute cursor-grab active:cursor-grabbing transition-all duration-300 ease-out"
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          borderRadius: size * 0.3,
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: Math.max(14, size / 10),
          fontWeight: 600,
          color: "#ffffff",
          textAlign: "center",
          padding: "8px",
          userSelect: "none",
        }}
        onDoubleClick={() => {
          const newText = prompt("Leaf text:", text);
          if (newText !== null) onUpdate({ text: newText });
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setShowColors(!showColors);
        }}
        onWheel={(e) => {
          e.preventDefault();
          const delta = e.deltaY < 0 ? 20 : -20;
          onUpdate({ size: Math.max(50, size + delta) });
        }}
      >
        {text}
        {showColors && (
          <ColorPicker
            onSelect={(newColor) => {
              onUpdate({ color: newColor });
              setShowColors(false);
            }}
          />
        )}
      </div>
    </Draggable>
  );
}
