// ==============================
// 1) Copitos navideños suaves
// ==============================
(function snowEffect() {
  const snowEmojis = ["❄️", "✨", "🎄"];
  const totalSnow = 25;

  for (let i = 0; i < totalSnow; i++) {
    const snow = document.createElement("span");
    snow.textContent = snowEmojis[Math.floor(Math.random() * snowEmojis.length)];

    snow.style.position = "fixed";
    snow.style.top = "-10px";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.fontSize = 12 + Math.random() * 18 + "px";
    snow.style.opacity = String(0.2 + Math.random() * 0.8);
    snow.style.zIndex = "5";
    snow.style.pointerEvents = "none";

    document.body.appendChild(snow);

    const duration = 8000 + Math.random() * 5000;
    const drift = (Math.random() - 0.5) * 80;

    snow.animate(
      [
        { transform: "translateY(0) translateX(0)" },
        { transform: `translateY(110vh) translateX(${drift}px)` }
      ],
      {
        duration,
        iterations: Infinity,
        easing: "linear"
      }
    );
  }
})();

// ==============================
// 2) Confetti simple (botón)
// ==============================
const btn = document.getElementById("confettiBtn");

btn.addEventListener("click", () => {
  const emojis = ["🎄", "✨", "🎁", "❤️", "❄️", "🌟"];
  const total = 40;

  for (let i = 0; i < total; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.position = "fixed";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "-10px";
    span.style.fontSize = 16 + Math.random() * 18 + "px";
    span.style.zIndex = "9999";
    span.style.transition = "transform 1.6s linear, opacity 1.6s linear";
    span.style.pointerEvents = "none";

    document.body.appendChild(span);

    const fall = 110 + Math.random() * 120;
    const drift = (Math.random() - 0.5) * 60;

    requestAnimationFrame(() => {
      span.style.transform = `translate(${drift}px, ${fall}vh) rotate(${Math.random() * 360}deg)`;
      span.style.opacity = "0";
    });

    setTimeout(() => span.remove(), 1700);
  }
});
