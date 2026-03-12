document.addEventListener('DOMContentLoaded', function () {
  // Form 1 (متبني)
  if (window.location.href.includes('c369226246')) {
    const targetElement = `
      <div class="form-container">
        <h2 class="form-title">قطط شارع</h2>
        <form id="adoptionForm" class="form custom-form">
            <img class='cat-top' src='https://cdn.files.salla.network/homepage/225572407/76c334de-5741-46a2-8d72-16170c1a9c81.webp' alt='form_bg'/>
            <img class='cat-bot' src='https://cdn.files.salla.network/homepage/225572407/93eb2f60-9fbf-4811-9857-ad281dbca314.webp' alt='form_bg'/>

            <div class="form-group-wrapper adoption-type">
              <div class="form-group phone-field">
                <label>نوع التبني</label>
                <label><input type="radio" name="adoptionType" value="مؤقت" required> مؤقت</label>
                <label><input type="radio" name="adoptionType" value="دائم" required> دائم</label>
                <label><input type="radio" name="adoptionType" value="قطط شارع" required> قطط شارع</label>
              </div>
            </div>

            <div class="form-group-wrapper basic-info">
              <h2>المعلومات الأساسية</h2>
              <div class="form-group full-name">
                <label>الاسم الكامل</label>
                <input type="text" id="fullName" name="fullName" required>
              </div>
              <div class="form-group phone-field">
                <label>رقم الجوال</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
              <div class="form-group age-field">
                <label>العمر</label>
                <input type="number" id="age" name="age" min="18" max="80" required>
              </div>
              <div class="form-group city-field">
                <label>المدينة</label>
                <select id="city" name="city" required>
                  <option value="">اختر المدينة</option>
                  <option value="الرياض">الرياض</option>
                  <option value="مكة المكرمة">مكة المكرمة</option>
                  <option value="المدينة المنورة">المدينة المنورة</option>
                  <option value="الشرقية">الشرقية</option>
                  <option value="القصيم">القصيم</option>
                  <option value="عسير">عسير</option>
                  <option value="تبوك">تبوك</option>
                  <option value="حائل">حائل</option>
                  <option value="الحدود الشمالية">الحدود الشمالية</option>
                  <option value="جازان">جازان</option>
                  <option value="نجران">نجران</option>
                  <option value="الباحة">الباحة</option>
                  <option value="الجوف">الجوف</option>
                </select>
              </div>
            </div>

            <div class="form-group owned-cat">
              <label>هل سبق لك امتلاك أو رعاية قط؟</label>
              <label><input type="radio" name="ownedCat" value="نعم" required> نعم</label>
              <label><input type="radio" name="ownedCat" value="لا" required> لا</label>
            </div>

            <hr class='horizontal-line' />

            <div class="form-group-wrapper hosting-ability">
              <h2>السكن والقدرة على الاستضافة</h2>
              <div class="form-group housing-desc">
                <label>نوع السكن</label>
                <textarea id="housingType" name="housingType" placeholder="مثال: شقة / فيلا" required></textarea>
              </div>
              <div class="form-group children-check">
                <label>هل يوجد اطفال في المنزل؟</label>
                <label><input type="radio" name="childrenCheck" value="نعم" required> نعم</label>
                <label><input type="radio" name="childrenCheck" value="لا" required> لا</label>
              </div>
            </div>

            <hr class='horizontal-line' />

            <div class="form-group-wrapper hosting-details">
              <h2>تفاصيل الاستضافة</h2>
              <div class="form-group allergy-check">
                <label>المدة التي تستطيع استضافة القط خلالها: </label>
                <label><input type="radio" name="hosting-duration" value="أسبوع" required> أسبوع</label>
                <label><input type="radio" name="hosting-duration" value="أسبوعين" required> أسبوعين</label>
                <label><input type="radio" name="hosting-duration" value="شهر" required> شهر</label>
                <label><input type="radio" name="hosting-duration" value="أكثر" required> أكثر</label>
              </div>
              <div class="form-group pets-check">
                <label>هل لديك القدرة على العناية الطبية البسيطة إذا احتاج القط؟</label>
                <label><input type="radio" name="basic-care__ability" value="نعم" required> نعم</label>
                <label><input type="radio" name="basic-care__ability" value="لا" required> لا</label>
              </div>
            </div>

            <hr class='horizontal-line' />

            <div class="form-group-wrapper commitment">
              <h2>الالتزام والضمانات</h2>
              <div class="form-group care-commitment">
                <label>هل تتعهد بالمحافظة على القط وعدم التسبب بأي ضرر له؟</label>
                <label><input type="radio" name="careCommitment" value="نعم" required> نعم</label>
                <label><input type="radio" name="careCommitment" value="لا" required> لا</label>
              </div>
              <div class="form-group safe-env">
                <label>هل توافق على توقيع عقد استضافة مؤقتة؟</label>
                <label><input type="radio" name="tempHosting" value="نعم" required> نعم</label>
                <label><input type="radio" name="tempHosting" value="لا" required> لا</label>
              </div>
            </div>

            <hr class='horizontal-line' />

            <div class="form-group-wrapper notes">
              <h2>ملاحظات إضافية</h2>
              <div class="form-group notes-field">
                <label> هل لديك أي شروط أو ملاحظات؟</label>
                <textarea id="notes" name="notes"></textarea>
              </div>
            </div>

            <button type="submit">إرسال</button>
        </form>
      </div>`;

    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
      breadcrumbs.insertAdjacentHTML('afterend', targetElement);
    }

    const form = document.querySelector('#adoptionForm');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Trigger native validation for required fields
      if (!form.reportValidity()) {
        return;
      }

      const data = {
        adoptionType:
          document.querySelector('input[name="adoptionType"]:checked')?.value ||
          '',
        fullName: document.querySelector('#fullName')?.value || '',
        phone: document.querySelector('#phone')?.value || '',
        age: document.querySelector('#age')?.value || '',
        city: document.querySelector('#city')?.value || '',
        ownedCat:
          document.querySelector('input[name="ownedCat"]:checked')?.value || '',
        housingType: document.querySelector('#housingType')?.value || '',
        childrenCheck:
          document.querySelector('input[name="childrenCheck"]:checked')
            ?.value || '',
        catHostDuration:
          document.querySelector('input[name="hosting-duration"]:checked')
            ?.value || '',
        basicPetCare:
          document.querySelector('input[name="basic-care__ability"]:checked')
            ?.value || '',
        careCommitment:
          document.querySelector('input[name="careCommitment"]:checked')
            ?.value || '',
        signTempHosting:
          document.querySelector('input[name="tempHosting"]:checked')?.value ||
          '',
        notes: document.querySelector('#notes')?.value || '',
      };

      const message = `طلب تبني قط:

نوع التبني: ${data.adoptionType}
الاسم: ${data.fullName}
الجوال: ${data.phone}
العمر: ${data.age}
المدينة: ${data.city}
سبق له رعاية قط؟ ${data.ownedCat}

نوع السكن: ${data.housingType}

هل يوجد أطفال في المنزل: ${data.childrenCheck}
المدة التي يستطيع استضافة القط خلالها: ${data.catHostDuration}

هل لديك القدرة على العناية الطبية البسيطة إذا احتاج القط؟: ${data.basicPetCare}
هل تتعهد بالمحافظة على القط وعدم التسبب بأي ضرر له؟: ${data.careCommitment}
هل توافق على توقيع عقد استضافة مؤقتة؟: ${data.signTempHosting}

ملاحظات: ${data.notes}`;

      const phoneNumber = '+201557882790';
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, '_blank');
    });
  }

  // Form 2 (متبني)
  if (window.location.href.includes('c1451868418')) {
    const targetElement = `
      <div class="form-container">
        <h2 class="form-title">باحث عن متبني مؤقت</h2>
        <form id="adoptionForm" class="form custom-form form-two">
            <img class='cat-top' src='https://cdn.files.salla.network/homepage/225572407/76c334de-5741-46a2-8d72-16170c1a9c81.webp' alt='form_bg'/>
            <img class='cat-bot' src='https://cdn.files.salla.network/homepage/225572407/93eb2f60-9fbf-4811-9857-ad281dbca314.webp' alt='form_bg'/>

            <div class="form-group-wrapper adoption-type">
              <div class="form-group phone-field">
                <label>نوع التبني</label>
                <label><input type="radio" name="adoptionType" value="مؤقت" required> مؤقت</label>
                <label><input type="radio" name="adoptionType" value="دائم" required> دائم</label>
                <label><input type="radio" name="adoptionType" value="قطط شارع" required> قطط شارع</label>
              </div>
            </div>

            <div class="form-group-wrapper basic-info">
              <h2>معلومات عن صاحب القط</h2>
              <div class="form-group full-name">
                <label>الاسم بالكامل</label>
                <input type="text" id="fullName" name="fullName" required>
              </div>
              <div class="form-group phone-field">
                <label>رقم الجوال</label>
                <input type="tel" id="phone" name="phone" required>
              </div>
              <div class="form-group city-field">
                <label>المدينة</label>
                <select id="city" name="city" required>
                  <option value="">اختر المدينة</option>
                  <option value="الرياض">الرياض</option>
                  <option value="مكة المكرمة">مكة المكرمة</option>
                  <option value="المدينة المنورة">المدينة المنورة</option>
                  <option value="الشرقية">الشرقية</option>
                  <option value="القصيم">القصيم</option>
                  <option value="عسير">عسير</option>
                  <option value="تبوك">تبوك</option>
                  <option value="حائل">حائل</option>
                  <option value="الحدود الشمالية">الحدود الشمالية</option>
                  <option value="جازان">جازان</option>
                  <option value="نجران">نجران</option>
                  <option value="الباحة">الباحة</option>
                  <option value="الجوف">الجوف</option>
                </select>
              </div>
            </div>

            <div class="form-group why-temp-hosting">
              <label>سبب الحاجة للاستضافة المؤقتة</label>
              <label><input type="radio" name="whyTempHosting" value="سفر" required> سفر</label>
              <label><input type="radio" name="whyTempHosting" value="ظروف طارئة " required> ظروف طارئة </label>
              <label><input type="radio" name="whyTempHosting" value="صيانة منزل" required> صيانة منزل</label>
              <label><input type="radio" name="whyTempHosting" value="أخرى" required> أخرى</label>
            </div>

            <hr class='horizontal-line' />

            <div class="form-group-wrapper cat-info">
              <h2>معلومات عن القط</h2>
              <div class="form-group cat-breed">
                <label>فصيلة القط</label>
                <textarea id="catBreed" name="catBreed" required></textarea>
              </div>
              <div class="form-group cat-name">
                <label>اسم القط</label>
                <textarea id="catName" name="catName" required></textarea>
              </div>
              <div class="form-group cat-age">
                <label>العمر</label>
                <textarea id="catAge" name="catAge" required></textarea>
              </div>
              <div class="radio-data">
                <div class="form-group is-vaccinated">
                  <label>هل هو مطعم؟</label>
                  <label><input type="radio" name="isVaccinated" value="نعم" required> نعم</label>
                  <label><input type="radio" name="isVaccinated" value="لا" required> لا</label>
                </div>
                <div class="form-group cat-gender">
                  <label> الجنس</label>
                  <label><input type="radio" name="catGender" value="ذكر" required> ذكر</label>
                  <label><input type="radio" name="catGender" value="أنثى" required> أنثى</label>
                </div>
                <div class="form-group is-sterile">
                  <label>هل هو معقم؟</label>
                  <label><input type="radio" name="isSterile" value="نعم" required> نعم</label>
                  <label><input type="radio" name="isSterile" value="لا" required> لا</label>
                </div>
                <div class="form-group cat-behavior">
                  <label>هل هو اجتماعي أم يخاف؟ </label>
                  <label><input type="radio" name="catBehavior" value="اجتماعي" required> اجتماعي</label>
                  <label><input type="radio" name="catBehavior" value="يخاف" required> يخاف</label>
                </div>
              </div>

              <div class="form-group cat-description">
                <label>مواصفات القط</label>
                <textarea id="catDescription" name="catDescription" required></textarea>
              </div>
              
              <div class="form-group has-deseases">
                <label>هل لديه أمراض مزمنة أو علاجات معينة؟</label>
                <label><input type="radio" name="hasDeseases" value="نعم" required> نعم</label>
                <label><input type="radio" name="hasDeseases" value="لا" required> لا</label>
              </div>
              
              <div class="form-group calify-desease">
                <label>إذا نعم، وضّح العلاج أو الحالة</label>
                <textarea id="califyDesease" name="califyDesease" required></textarea>
              </div>
            </div>

            <hr class='horizontal-line' />

            <div class="form-group-wrapper hosting-requirements">
              <h2>متطلبات الاستضافة</h2>
              <div class="form-group hosting-duration">
                <label>المدة المطلوبة للاستضافة: </label>
                <label><input type="radio" name="hostingDuration" value="أسبوع" required> أسبوع</label>
                <label><input type="radio" name="hostingDuration" value="أسبوعين" required> أسبوعين</label>
                <label><input type="radio" name="hostingDuration" value="شهر" required> شهر</label>
                <label><input type="radio" name="hostingDuration" value="أكثر" required> أكثر</label>
              </div>

              <div class="form-group living-availability">
                <label>هل ستوفر الأكل والرمل أثناء فترة الاستضافة؟</label>
                <label><input type="radio" name="livingAvailability" value="نعم" required> نعم</label>
                <label><input type="radio" name="livingAvailability" value="لا" required> لا</label>
              </div>

              <div class="form-group certain-conditions">
                <label>هل لديك شروط معينة للمستضيف؟</label>
                <textarea id="certainConditions" name="certainConditions" required placeholder="مثال:يكون بدون حيوانات / يكون لديه خبرة / يكون متفرغ… إلخ"></textarea>
              </div>

              <div class="form-group sign-temp-hosting">
                <label>هل توافق على توقيع عقد استضافة مؤقتة؟</label>
                <label><input type="radio" name="signTempHosting" value="نعم" required> نعم</label>
                <label><input type="radio" name="signTempHosting" value="لا" required> لا</label>
              </div>
            </div>

            <hr class='horizontal-line' />

            <div class="form-group-wrapper notes">
              <h2>ملاحظات أخرى</h2>
              <div class="form-group notes-field">
                <label>أي معلومات إضافية ترغب بذكرها؟</label>
                <textarea id="notes" name="notes"></textarea>
              </div>
            </div>

            <button type="submit">إرسال</button>
        </form>
      </div>`;

    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
      breadcrumbs.insertAdjacentHTML('afterend', targetElement);
    }

    const form = document.querySelector('#adoptionForm');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Trigger native validation for required fields
      if (!form.reportValidity()) {
        return;
      }

      const data = {
        adoptionType:
          document.querySelector('input[name="adoptionType"]:checked')?.value ||
          '',
        fullName: document.querySelector('#fullName')?.value || '',
        phone: document.querySelector('#phone')?.value || '',
        age: document.querySelector('#age')?.value || '',
        city: document.querySelector('#city')?.value || '',
        whyTempHosting:
          document.querySelector('input[name="whyTempHosting"]:checked')
            ?.value || '',
        catBreed: document.querySelector('#catBreed')?.value || '',
        catName: document.querySelector('input[name="catName"]')?.value || '',
        catAge: document.querySelector('#catAge')?.value || '',
        isVaccinated:
          document.querySelector('input[name="isVaccinated"]:checked')?.value ||
          '',
        catGender:
          document.querySelector('input[name="catGender"]:checked')?.value ||
          '',
        isSterile:
          document.querySelector('input[name="isSterile"]:checked')?.value ||
          '',
        catBehavior:
          document.querySelector('input[name="catBehavior"]:checked')?.value ||
          '',
        catDescription:
          document.querySelector('input[name="catDescription"]:checked')
            ?.value || '',
        hasDeseases:
          document.querySelector('input[name="hasDeseases"]:checked')?.value ||
          '',
        califyDesease: document.querySelector('#califyDesease')?.value || '',
        hostingDuration:
          document.querySelector('input[name="hostingDuration"]:checked')
            ?.value || '',
        livingAvailability:
          document.querySelector('input[name="hostingDuration"]:checked')
            ?.value || '',
        certainConditions:
          document.querySelector('#certainConditions')?.value || '',
        signTempHosting:
          document.querySelector('input[name="signTempHosting"]:checked')
            ?.value || '',

        notes: document.querySelector('#notes')?.value || '',
      };

      const message = `طلب تبني قط:

نوع التبني: ${data.adoptionType}
الاسم: ${data.fullName}
الجوال: ${data.phone}
المدينة: ${data.city}
سبب الحاجة للاستضافة المؤقتة: ${data.whyTempHosting}

فصيلة القط: ${data.catBreed}
اسم القط: ${data.catName}
العمر: ${data.catAge}
هل هو مطعم؟: ${data.isVaccinated}
الجنس: ${data.catGender}
هل هو معقّم؟: ${data.isSterile}
هل هو اجتماعي أم يخاف؟: ${data.catBehavior}
مواصفات القط: ${data.catDescription}
هل لديه أمراض مزمنة أو علاجات معينة؟: ${data.hasDeseases}
إذا نعم، وضّح العلاج أو الحالة: ${data.califyDesease}

المدة المطلوبة للاستضافة: ${data.hostingDuration}
هل ستوفر الأكل والرمل أثناء فترة الاستضافة؟: ${data.hostingDuration}
هل لديك شروط معينة للمستضيف؟ ${data.certainConditions}
هل توافق على توقيع عقد استضافة مؤقتة؟ ${data.signTempHosting}
أي معلومات إضافية ترغب بذكرها؟ ${data.notes}

ملاحظات: ${data.notes}`;

      const phoneNumber = '+201557882790';
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, '_blank');
    });
  }
});




































document.addEventListener('DOMContentLoaded', function () {

  // Form 1 (متبني)
  if (window.location.href.includes('c369226246')) {

    const targetElement = `
      <div class="form-container">
        <h2 class="form-title">قطط شارع</h2>

        <form id="adoptionForm" class="form custom-form">

          <img class='cat-top' src='https://cdn.files.salla.network/homepage/225572407/76c334de-5741-46a2-8d72-16170c1a9c81.webp' />
          <img class='cat-bot' src='https://cdn.files.salla.network/homepage/225572407/93eb2f60-9fbf-4811-9857-ad281dbca314.webp' />

          <!-- نوع التبني -->
          <div class="form-group-wrapper adoption-type">
            <div class="form-group phone-field">
              <label>نوع التبني</label>
              <label><input type="radio" name="adoptionType" value="مؤقت" required> مؤقت</label>
              <label><input type="radio" name="adoptionType" value="دائم" required> دائم</label>
              <label><input type="radio" name="adoptionType" value="قطط شارع" required> قطط شارع</label>
            </div>
          </div>

          <!-- المعلومات الأساسية -->
          <div class="form-group-wrapper basic-info">
            <h2>المعلومات الأساسية</h2>

            <div class="form-group full-name">
              <label>الاسم الكامل</label>
              <input type="text" id="fullName" required>
            </div>

            <div class="form-group phone-field">
              <label>رقم الجوال</label>
              <input type="tel" id="phone" required>
            </div>

            <div class="form-group age-field">
              <label>العمر</label>
              <input type="number" id="age" min="18" max="80" required>
            </div>

            <div class="form-group city-field">
              <label>المدينة</label>
              <select id="city" required>
                <option value="">اختر المدينة</option>
                <option value="الرياض">الرياض</option>
                <option value="مكة المكرمة">مكة المكرمة</option>
                <option value="المدينة المنورة">المدينة المنورة</option>
                <option value="الشرقية">الشرقية</option>
                <option value="القصيم">القصيم</option>
              </select>
            </div>
          </div>

          <hr class="horizontal-line" />

          <!-- إضافة صورة -->
          <div class="form-group-wrapper upload-image">
            <h2>إضافة صورة</h2>

            <div class="form-group image-upload">
              <input
                type="file"
                id="catImage"
                accept="image/*"
                style="display:none"
                required
              />

              <button type="button" id="uploadBtn">
                📷 إضافة صورة القط
              </button>

              <p id="imageName" style="margin-top:8px;font-size:14px;"></p>
            </div>
          </div>

          <hr class="horizontal-line" />

          <!-- ملاحظات إضافية (نفس الكلاس بدون تغيير) -->
          <div class="form-group-wrapper notes">
            <h2>ملاحظات إضافية</h2>
            <div class="form-group notes-field">
              <textarea id="notes"></textarea>
            </div>
          </div>

          <button type="submit">إرسال</button>
        </form>
      </div>
    `;

    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
      breadcrumbs.insertAdjacentHTML('afterend', targetElement);
    }

    const form = document.getElementById('adoptionForm');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('catImage');
    const imageName = document.getElementById('imageName');

    if (!form) return;

    // فتح اختيار الصورة
    uploadBtn.addEventListener('click', function () {
      fileInput.click();
    });

    // عرض اسم الصورة
    fileInput.addEventListener('change', function () {
      if (fileInput.files.length > 0) {
        imageName.textContent = `تم اختيار: ${fileInput.files[0].name}`;
      }
    });

    // إرسال الفورم
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.reportValidity()) return;

      if (!fileInput.files.length) {
        alert('يرجى إضافة صورة القط');
        return;
      }

      const message = `طلب تبني قط:

📸 تم رفع صورة للقط (يرجى إرسالها داخل المحادثة)

نوع التبني: ${document.querySelector('input[name="adoptionType"]:checked')?.value}
الاسم: ${document.getElementById('fullName').value}
الجوال: ${document.getElementById('phone').value}
العمر: ${document.getElementById('age').value}
المدينة: ${document.getElementById('city').value}

ملاحظات:
${document.getElementById('notes').value}
`;

      const phoneNumber = '201557882790';
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    });
  }
});