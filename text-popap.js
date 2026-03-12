document.addEventListener("DOMContentLoaded", function () {
  // إنشاء overlay
  let overlay = document.createElement("div");
  overlay.className = "custom-overlay";

  // إنشاء popup
  let popup = document.createElement("div");
  popup.className = "custom-popup";

  // النص داخل البوباب
  let text = document.createElement("p");
  text.innerText = "احتفالًا بافتتاح Laperlita خصم 20% بمناسبة شهر رمضان والتاسيس";
  popup.appendChild(text);

  // زر الإغلاق
  let closeBtn = document.createElement("span");
  closeBtn.innerHTML = "&times;";
  closeBtn.className = "popup-close";

  closeBtn.addEventListener("click", function () {
    document.body.removeChild(overlay);
  });

  popup.appendChild(closeBtn);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
});



/*
.custom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.custom-popup {
  position: relative;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 12px;
  font-size: 20px;
  text-align:center;  
}
.popup-close {
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 30px;
  cursor:pointer;  
}
*/ 