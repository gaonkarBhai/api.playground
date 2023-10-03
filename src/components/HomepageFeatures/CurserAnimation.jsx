import React, { useEffect, useState } from "react";
import "./circleanimation.css";

const CurserAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    ></div>
  );
};

export default CurserAnimation;
