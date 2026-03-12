document.addEventListener("DOMContentLoaded", function () {

  function insertVideoAboveSection() {
    const firstSection = document.querySelector("section.s-block:nth-of-type(1)");

    // لو السكشن مش موجود أو الفيديو اتحط قبل كده
    if (!firstSection || document.querySelector(".full-width-video-section")) return;

    const section = document.createElement("section");
    section.className = "full-width-video-section";

    const video = document.createElement("video");
    video.src = "https://github.com/mohamedkhalid3002-create/mp4/raw/refs/heads/main/IMG_0773.mp4";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";

    section.appendChild(video);

    // 👈 هنا الحتة المهمة
    firstSection.parentNode.insertBefore(section, firstSection);
  }

  // نجرب أول مرة
  insertVideoAboveSection();

  // نراقب تحميل الصفحة (عشان سلة)
  const observer = new MutationObserver(insertVideoAboveSection);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

});