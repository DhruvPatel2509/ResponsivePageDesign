const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 0.5,
  duration: 1,
});
// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 0.9,
  duration: 1,
  stagger: 0.3,
});
// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 0.9,
  duration: 1,
});
// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 1.2,
  duration: 1,
});
// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 1.4,
  duration: 1,
});
// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 1.4,
  duration: 1,
});
// ==== TEAM IMAGE ==== //
gsap.from(".slider", {
  opacity: 0,
  y: 20,
  delay: 2,
  duration: 1,
});
