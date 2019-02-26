var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var btn = document.querySelector(".main-nav__item-btn");

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
});

btn.addEventListener("animationstart", function(event) {
  console.log("Animation started", event);
});

btn.addEventListener("animationend", function(event) {
  console.log("Animation ended", event);
});

btn.addEventListener("animationiteration", function(event) {
  console.log("Animation iteration", event);
});

$(document).ready(function () {
  /* Scroll on button */
  $('.btn-ghost').click(function () {
    $('html, body').animate({ scrollTop: $('.plan__recommended').offset().top }, 1000);
  });
});