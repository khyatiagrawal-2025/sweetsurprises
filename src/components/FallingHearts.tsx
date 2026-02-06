import { useEffect } from "react";

const hearts = ["💖", "💗", "💕", "💝", "❤️", "🩷"];

const FallingHearts = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "falling-heart";
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 4 + 5) + "s";
      heart.style.fontSize = (Math.random() * 12 + 14) + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 9000);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FallingHearts;
