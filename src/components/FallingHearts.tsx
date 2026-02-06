import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const hearts = ["💖", "💗", "💕", "💝", "❤️", "🩷"];

const FallingHearts = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const delay = isMobile ? 800 : 400;
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "falling-heart";
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 4 + 5) + "s";
      heart.style.fontSize = (isMobile ? Math.random() * 8 + 10 : Math.random() * 12 + 14) + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 9000);
    }, delay);

    return () => clearInterval(interval);
  }, [isMobile]);

  return null;
};

export default FallingHearts;
