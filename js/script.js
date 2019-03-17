var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".overlay-modal-feedback");
var close = document.querySelector(".feedback-modal-close");
var byname = popup.querySelector(".feedback-item-name");
var userMail = popup.querySelector(".feedback-item-mail");
var message = popup.querySelector(".feedback-item-text");
var form = popup.querySelector(".feedback-form");
var sectionForm = popup.querySelector(".modal-feedback-form");
var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".overlay-modal-map");
var mapClose = document.querySelector(".map-modal-close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("overlay-modal-feedback-show");
  byname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("overlay-modal-feedback-show");
  sectionForm.classList.remove("modal-feedback-form-error");
  byname.classList.remove("feedback-item-invalid");
  userMail.classList.remove("feedback-item-invalid");
  message.classList.remove("feedback-item-invalid");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("overlay-modal-feedback-show")) {
      popup.classList.remove("overlay-modal-feedback-show");
      sectionForm.classList.remove("modal-feedback-form-error");
      byname.classList.remove("feedback-item-invalid");
      userMail.classList.remove("feedback-item-invalid");
      message.classList.remove("feedback-item-invalid");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (byname.value) {
    byname.classList.remove("feedback-item-invalid");
  }
  if (userMail.value) {
    userMail.classList.remove("feedback-item-invalid");
  }
  if (message.value) {
    message.classList.remove("feedback-item-invalid");
  }
});

form.addEventListener("submit", function (evt) {
  if (!byname.value || !userMail.value || !message.value) {
    evt.preventDefault();
    sectionForm.classList.remove("modal-feedback-form-error");
    sectionForm.offsetWidth = sectionForm.offsetWidth;
    sectionForm.classList.add("modal-feedback-form-error");
    if (!byname.value) {
      byname.classList.add("feedback-item-invalid");
    }
    if (!userMail.value) {
      userMail.classList.add("feedback-item-invalid");
    }
    if (!message.value) {
      message.classList.add("feedback-item-invalid");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("overlay-modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("overlay-modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("overlay-modal-map-show")) {
      mapPopup.classList.remove("overlay-modal-map-show");
    }
  }
});
