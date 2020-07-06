let popularItemHoverBuyButton = document.querySelectorAll('.popular-item-hover-buy-button');
let popupCartAdded = document.querySelector('.popup-cart-added');
let popupCartAddedButtonClose = document.querySelector('.popup-cart-added-button-close');

popupCartAdded.classList.add('display-none');

popularItemHoverBuyButton.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (popupCartAdded.classList.contains('display-none')) {
      popupCartAdded.classList.remove('display-none');
      popupCartAdded.classList.add('modal-show');
    }
  });
});

popupCartAddedButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupCartAdded.classList.remove('modal-show');
  popupCartAdded.classList.add('display-none');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popupCartAdded.classList.contains('modal-show')) {
      evt.preventDefault();
      popupCartAdded.classList.remove('modal-show');
      popupCartAdded.classList.add('display-none');
    }
  }
});


let sliderArrowLeft = document.querySelector('.slider-arrow-left');
let sliderArrowRight = document.querySelector('.slider-arrow-right');

let sliderRadio1 = document.querySelector('.slider-radio-1');
let sliderRadio2 = document.querySelector('.slider-radio-2');

let promoSliderPerfo = document.querySelector('.promo-slider-perfo');
let promoSliderDrill = document.querySelector('.promo-slider-drill');

sliderRadio1.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!sliderRadio1.classList.contains('slider-radio-active')) {
    sliderRadio1.classList.add('slider-radio-active');
    sliderRadio2.classList.remove('slider-radio-active');
  }

  if (promoSliderPerfo.classList.contains('display-none')) {
    promoSliderPerfo.classList.remove('display-none');
    promoSliderDrill.classList.add('display-none');
  }
});

sliderRadio2.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (!sliderRadio2.classList.contains('slider-radio-active')) {
    sliderRadio2.classList.add('slider-radio-active');
    sliderRadio1.classList.remove('slider-radio-active');
  }

  if (promoSliderDrill.classList.contains('display-none')) {
    promoSliderDrill.classList.remove('display-none');
    promoSliderPerfo.classList.add('display-none');
  }
});

sliderArrowLeft.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (!sliderRadio1.classList.contains('slider-radio-active')) {
    sliderRadio1.classList.add('slider-radio-active');
    sliderRadio2.classList.remove('slider-radio-active');
  }

  if (promoSliderPerfo.classList.contains('display-none')) {
    promoSliderPerfo.classList.remove('display-none');
    promoSliderDrill.classList.add('display-none');
  }
});

sliderArrowRight.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (!sliderRadio2.classList.contains('slider-radio-active')) {
    sliderRadio2.classList.add('slider-radio-active');
    sliderRadio1.classList.remove('slider-radio-active');
  }

  if (promoSliderDrill.classList.contains('display-none')) {
    promoSliderDrill.classList.remove('display-none');
    promoSliderPerfo.classList.add('display-none');
  }
});


let servicesDeliverySlide = document.querySelector('.services-delivery-slide');
let servicesWarrantySlide = document.querySelector('.services-warranty-slide');
let servicesCreditSlide = document.querySelector('.services-credit-slide');

let sliderDeliveryButton = document.querySelector('.slider-delivery-button');
let sliderWarrantyButton = document.querySelector('.slider-warranty-button');
let sliderCreditButton = document.querySelector('.slider-credit-button');

sliderDeliveryButton.classList.add('service-slider-button-active');
servicesWarrantySlide.classList.add('display-none');
servicesCreditSlide.classList.add('display-none');

sliderDeliveryButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  servicesDeliverySlide.classList.remove('display-none');
  sliderDeliveryButton.classList.add('service-slider-button-active');
  servicesWarrantySlide.classList.add('display-none');
  sliderWarrantyButton.classList.remove('service-slider-button-active');
  servicesCreditSlide.classList.add('display-none');
  sliderCreditButton.classList.remove('service-slider-button-active');
});

sliderWarrantyButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  servicesWarrantySlide.classList.remove('display-none');
  sliderWarrantyButton.classList.add('service-slider-button-active');
  servicesDeliverySlide.classList.add('display-none');
  sliderDeliveryButton.classList.remove('service-slider-button-active');
  servicesCreditSlide.classList.add('display-none');
  sliderCreditButton.classList.remove('service-slider-button-active');
});

sliderCreditButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  servicesCreditSlide.classList.remove('display-none');
  sliderCreditButton.classList.add('service-slider-button-active');
  servicesDeliverySlide.classList.add('display-none');
  sliderDeliveryButton.classList.remove('service-slider-button-active');
  servicesWarrantySlide.classList.add('display-none');
  sliderWarrantyButton.classList.remove('service-slider-button-active');
});



let contactsButton = document.querySelector('.contacts-button');
let writeUsPopupButtonClose = document.querySelector('.write-us-popup-button-close');
let writeUsPopup = document.querySelector('.write-us-popup');

writeUsPopup.classList.add('display-none');

contactsButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  writeUsPopup.classList.remove('display-none');
  writeUsPopup.classList.add('modal-show');
});

writeUsPopupButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault();

  writeUsPopup.classList.remove('modal-show');
  writeUsPopup.classList.add('display-none');
  writeUsPopup.classList.remove('modal-error');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      writeUsPopup.classList.remove('modal-show');
      writeUsPopup.classList.remove('modal-error');
      writeUsPopup.classList.add('display-none');
    }
  }
});

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}


let nameField = document.querySelector('#name-field');
let emailField = document.querySelector('#email-field');
let textField = document.querySelector('#text-field');

writeUsPopup.addEventListener('submit', function(evt) {
  if (!nameField.value || !emailField.value || !textField.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove('modal-error');
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('userName', nameField.value);
      localStorage.setItem('userEmail', emailField.value);
    }
  }
});

let mapPopupButtonClose = document.querySelector('.map-popup-button-close');
let mapPopup = document.querySelector('.map-popup');
let mapPopupButtonOpen = document.querySelector('.contacts-minimap-container');

mapPopup.classList.add('display-none');

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      mapPopup.classList.remove('modal-show');
      mapPopup.classList.add('display-none');
    }
  }
});

mapPopupButtonOpen.addEventListener('click', function(evt) {
  evt.preventDefault();

  mapPopup.classList.remove('display-none');
  mapPopup.classList.add('modal-show');
});

mapPopupButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault();

  mapPopup.classList.remove('modal-show');
  mapPopup.classList.add('display-none');
});
