document.addEventListener("DOMContentLoaded", function () {

  const sliders = document.querySelectorAll(
    "section.s-block.s-block--photos-slider"
  );

  if (sliders.length >= 2) {
    const targetSlider = sliders[1]; // الثاني

    if (document.querySelector(".moving-bar")) return;

    const bar = document.createElement("div");
    bar.className = "moving-bar";

    const track = document.createElement("div");
    track.className = "moving-track";

    const text = "✨ ستايلك غير معنا! 🔥 السعر الأوفر!";

    for (let i = 0; i < 8; i++) {
      const span = document.createElement("div");
      span.className = "moving-text";
      span.textContent = text;
      track.appendChild(span);
    }

    bar.appendChild(track);

    targetSlider.insertAdjacentElement("afterend", bar);
  }
});

/*
.moving-bar {
  width: 100%;
  background: #4b2e1a;
  overflow: hidden;
  white-space: nowrap;
  padding: 12px 0;
}

.moving-text {
  display: inline-block;
  color: #fff;
  font-size: 16px;
  animation: moveText 18s linear infinite;
}

@keyframes moveText {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
  */