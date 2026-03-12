let i = setInterval(() => 
    document.querySelector('.product-single') && 
    (document.querySelector('.s-add-product-button-mini-checkout-content')?.innerHTML === `<i class='sicon-gift-card px-4 text-xl'> </i> إهداء` || 
    (document.querySelector('.s-add-product-button-mini-checkout-content').innerHTML = `<i class='sicon-gift-card px-4 text-xl'> </i> إهداء`, clearInterval(i))), 100);

(function () {

  function insertMap() {
    if (document.getElementById("salla-map")) return;

    const target =
      document.querySelector(".store-footer") ||
      document.querySelector("footer") ||
      document.body;

    if (!target) return;

    const mapDiv = document.createElement("div");
    mapDiv.id = "salla-map";
    mapDiv.style.cssText = `
      width:100%;
      max-width:1600px;
      margin:40px auto;
      padding:0 16px;
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap:24px;
    `;

    mapDiv.innerHTML = `
      <iframe
        src="https://maps.google.com/maps?q=17.5691886,44.2305386&z=15&output=embed"
        style="width:100%;height:350px;border:0;border-radius:16px"
        loading="lazy">
      </iframe>

      <iframe
        src="https://maps.google.com/maps?q=17.5608141,44.3132195&z=15&output=embed"
        style="width:100%;height:350px;border:0;border-radius:16px"
        loading="lazy">
      </iframe>
    `;

    target.parentNode.insertBefore(mapDiv, target);
  }

  window.addEventListener("load", insertMap);
  new MutationObserver(insertMap).observe(document.body, {
    childList: true,
    subtree: true
  });

})();
//------------------------
document.addEventListener("DOMContentLoaded", function () {
if(window.location.pathname==="/%D8%A7%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D8%A7%D9%86/page-983539278"){
    // Select the target element
    const targetElement = document.querySelector(
      ".content.content--single-page"
    );

    if (targetElement) {
      // Replace its content with the form
      targetElement.innerHTML = `
        <div class="container">
          <form id="form" class="myform">
            <h2>تواصل معنا</h2>
            <div class="form-control">
              <label for="name">الاسم</label>
              <input type="text" id="name" name="name" placeholder="أدخل اسمك" />
              <small>الاسم مطلوب</small>
            </div>
            <div class="form-control">
              <label for="phone">رقم الجوال</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="أدخل رقم الجوال"
              />
              <small>رقم الجوال مطلوب</small>
            </div>
            <div class="form-control">
              <label for="service">نوع الخدمة</label>
              <select id="service" name="service">
                <option value="">اختر الخدمة</option>
                <option value="design-interfaces">خدمات المساج </option>
                <option value="bedrooms"> خدمات الحمام المغربي</option>
                <option value="kitchens"> البديكير </option>
                <option value="majalis">قسم البكجات</option>
              </select>
              <small>نوع الخدمة مطلوب</small>
            </div>
            <button type="submit">تسجيل</button>
          </form>
        </div>
      `;

      // Form validation and submission
      const form = document.getElementById("form");
      const name = document.getElementById("name");
      const phone = document.getElementById("phone");
      const service = document.getElementById("service");

      // New Google Sheets script URL
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxge3pROKi8yQOkagG6wDtyfigyTxsesA6YFHxch3CNkQ_quRnw1swbtb94bFEWQd7-/exec";

      // Helper functions for validation
      const showError = (input, message) => {
        const formControl = input.parentElement;
        formControl.classList.add("error");
        formControl.querySelector("small").innerText = message;
      };

      const showSuccess = (input) => {
        const formControl = input.parentElement;
        formControl.classList.remove("error");
        formControl.classList.add("success");
      };

      const checkRequired = (inputs) => {
        let isValid = true;
        inputs.forEach((input) => {
          if (!input.value.trim()) {
            showError(input, `${input.previousElementSibling.innerText} مطلوب`);
            isValid = false;
          } else {
            showSuccess(input);
          }
        });
        return isValid;
      };

      // Submit form data to Google Sheets
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Validate fields
        const isValid = checkRequired([name, phone, service]);

        if (isValid) {
          const formData = new FormData(form);

          try {
            const response = await fetch(scriptURL, {
              method: "POST",
              body: formData,
            });

            if (response.ok) {
              alert("تم التسجيل بنجاح!");
              form.reset();
              document.querySelectorAll(".form-control").forEach((fc) => {
                fc.classList.remove("success", "error");
              });
            } else {
              alert("حدث خطأ أثناء التسجيل. حاول مرة أخرى.");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("حدث خطأ أثناء الاتصال بالسيرفر.");
          }
        }
      });
    }
  }
   document.querySelector(".store-footer").before(container)
});/* Add custom Js code below */



function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var name = e.parameter.name;
    var phone = e.parameter.phone;
    var service = e.parameter.service;
    var timestamp = new Date();

    sheet.appendRow([name, phone, service, timestamp]);

    return ContentService
      .createTextOutput(
        JSON.stringify({ result: "success" })
      )
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({ result: "error", error: error })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}


/////////////////////////////////////////دى فورم عاوز اضيف فيها قسم اختيار الفرع 1 - فرع في العريسه بجانب بنك الرياض 2 - فرع في حي الفهد خلف فندق بارك ان


(function() {
  function initTicker() {
    const slide = document.querySelector(
      "section.s-block--photos-slider:nth-of-type(5) .swiper-slide-active"
    );
    if (!slide) return false;

    const img = slide.querySelector("img");
    if (!img) return false;

    // لو اتعمل قبل كده ما نكررش
    if (slide.dataset.ticker === "true") return true;
    slide.dataset.ticker = "true";

    // نعمل wrapper جديد
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.width = "max-content";
    wrapper.style.animation = "tickerMove 15s linear infinite";

    // نكرر الصورة 3 مرات على الأقل
    const clone1 = img.cloneNode(true);
    const clone2 = img.cloneNode(true);

    // ننقل الصورة الأصلية + النسخ للـ wrapper
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);
    wrapper.appendChild(clone1);
    wrapper.appendChild(clone2);

    // نخلي السلايد مخفي overflow
    slide.style.overflow = "hidden";

    // نضبط صور كل واحدة
    wrapper.querySelectorAll("img").forEach(i => {
      i.style.width = "100vw";
      i.style.flexShrink = "0";
      i.style.display = "block";
    });

    return true;
  }

  // نجرب كل 300ms لحد ما Swiper يجهز السلايد النشط
  const interval = setInterval(() => {
    if (initTicker()) clearInterval(interval);
  }, 300);
})();

/*
section.s-block--photos-slider:nth-of-type(5) .swiper-slide-active {
  width: 100%;
  overflow: hidden;
}

/* نحرك img مش a 
section.s-block--photos-slider:nth-of-type(5) a {
  display: flex;
  width: max-content;
}

section.s-block--photos-slider:nth-of-type(5) img {
  width: 100vw;
  flex-shrink: 0;
  animation: scroll 15s linear infinite !important;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200vw);
  }
}