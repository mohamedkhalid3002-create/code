document.addEventListener("DOMContentLoaded", function () {
if(window.location.pathname==="/%D8%A7%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D8%A7%D9%86/page-1461214003"){
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
                <option value="kitchens">قسم البديكير والعنايه</option>
                <option value="majalis">قسم البكجات والهداية</option>
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
        "https://script.google.com/macros/s/AKfycbzzRQUHGL16LgsqURmFY7MRZ6WW-OyThFJyQ_X-m5BZDLM6GtEpqFap2_U6cl9-uopg/exec";

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


//---------------------------------whatsapp code-------------------------------
/* Add custom Js styles below */
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname ===
    "/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D9%85%D9%84%D8%A9/c700980373"
  ) {
    // Select the target element
    const targetElement = document.querySelector("div.main-content");

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
                <option value="Summer fabrics">اقمشة صيفية</option>
                <option value="Winter fabrics">اقمشة شتوية</option>
                <option value="Bouquets and gifts">الباقات والاهداءات</option>
                <option value="Wholesale orders">طلبات الجملة</option>
              </select>
              <small>نوع الخدمة مطلوب</small>
            </div>

            <button type="submit">تسجيل</button>
          </form>
        </div>
      `;

      // Form validation and WhatsApp submission
      const form = document.getElementById("form");
      const name = document.getElementById("name");
      const phone = document.getElementById("phone");
      const service = document.getElementById("service");

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
            showError(
              input,
              `${input.previousElementSibling.innerText} مطلوب`
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        });
        return isValid;
      };

      // Submit to WhatsApp ONLY
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const isValid = checkRequired([name, phone, service]);

        if (isValid) {
          const whatsappNumber = "201001234567"; // ← عدل رقمك هنا

          const message =
`الاسم:
${name.value}

رقم الجوال:
${phone.value}

نوع الخدمة:
${service.options[service.selectedIndex].text}
`;

          const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

          window.open(whatsappURL, "_blank");
        }
      });
    }
  }
});
/* Add custom Js code below */


//---------------------------------whatsapp code upgred-------------------------------

/* Add custom Js styles below */
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname ===
    "/%D8%B7%D9%84%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D9%85%D9%84%D8%A9/c700980373"
  ) {
    const targetElement = document.querySelector("div.main-content");

    if (targetElement) {
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
              <label for="email">البريد الإلكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
              />
              <small>البريد الإلكتروني مطلوب</small>
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
              <label for="address">العنوان</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="المدينة - الحي - الشارع"
              />
              <small>العنوان مطلوب</small>
            </div>

            <div class="form-control">
              <label for="service">نوع الخدمة</label>
              <select id="service" name="service">
                <option value="">اختر الخدمة</option>
                <option value="Summer fabrics">اقمشة صيفية</option>
                <option value="Winter fabrics">اقمشة شتوية</option>
                <option value="Bouquets and gifts">الباقات والاهداءات</option>
                <option value="Wholesale orders">طلبات الجملة</option>
              </select>
              <small>نوع الخدمة مطلوب</small>
            </div>

            <button type="submit">تسجيل</button>
          </form>
        </div>
      `;

      const form = document.getElementById("form");
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const address = document.getElementById("address");
      const service = document.getElementById("service");

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
            showError(
              input,
              `${input.previousElementSibling.innerText} مطلوب`
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        });
        return isValid;
      };

      // Submit to WhatsApp ONLY
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const isValid = checkRequired([
          name,
          email,
          phone,
          address,
          service,
        ]);

        if (isValid) {
          const whatsappNumber = "201001234567"; // ← غير الرقم هنا

          const message =
`الاسم:
${name.value}

البريد الإلكتروني:
${email.value}

رقم الجوال:
${phone.value}

العنوان:
${address.value}

نوع الخدمة:
${service.options[service.selectedIndex].text}
`;

          const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

          window.open(whatsappURL, "_blank");
        }
      });
    }
  }
});
/* Add custom Js code below */



const changeName = { companyName: "شركة عوائد", companyUrl: "https://awaeed.com/" };

const selectText = document.querySelector(".copyright-text a"); 
selectText.innerText = changeName.companyName; 
selectText.href = changeName.companyUrl;








/* Add custom Js styles below */ 
/* Add custom Js styles below */
document.addEventListener("DOMContentLoaded", function () {
  if (
    window.location.pathname ===
    "/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7/page-1997221199"
  ) {
    const targetElement = document.querySelector("div.main-content");

    if (targetElement) {
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
              <label for="phone">الجوال</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="أدخل رقم الجوال"
              />
              <small>رقم الجوال مطلوب</small>
            </div>

            <div class="form-control">
              <label for="city">المدينة</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="المدينة"
              />
              <small>المدينة مطلوبة</small>
            </div>

            <div class="form-control">
              <label for="request">الطلب</label>
              <select id="request" name="request">
                <option value="">اختر الطلب</option>
                <option value="تصميم ثري دي واشراف كامل مع التأثيث">تصميم ثري دي واشراف كامل مع التأثيث</option>
                <option value="تصميم ثري دي فقط">تصميم ثري دي فقط</option>
                <option value="تصميم جداريات ثري دي واشراف بدون تأثيث">تصميم جداريات ثري دي واشراف بدون تأثيث</option>
                <option value="تأثيث فقط">تأثيث فقط</option>
                <option value="استشارات ميدانية">استشارات ميدانية</option>
                <option value="استشارات عن بعد">استشارات عن بعد</option>
                <option value="تنسيق اكسسوارات">تنسيق اكسسوارات</option>
              </select>
              <small>نوع الطلب مطلوب</small>
            </div>

            <button type="submit">تسجيل</button>
          </form>
        </div>
      `;

      const form = document.getElementById("form");
      const name = document.getElementById("name");
      const phone = document.getElementById("phone");
      const city = document.getElementById("city");
      const request = document.getElementById("request");

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
            showError(
              input,
              `${input.previousElementSibling.innerText} مطلوب`
            );
            isValid = false;
          } else {
            showSuccess(input);
          }
        });
        return isValid;
      };

      // Submit to WhatsApp ONLY
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const isValid = checkRequired([
          name,
          phone,
          city,
          request,
        ]);

        if (isValid) {
          const whatsappNumber = "966544780447"; // رقم الواتس الجديد

          const message = 
`الاسم:
${name.value}

الجوال:
${phone.value}

المدينة:
${city.value}

الطلب:
${request.options[request.selectedIndex].text}
`;

          const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

          window.open(whatsappURL, "_blank");
        }
      });
    }
  }
});