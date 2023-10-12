function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

gsap.to("#desktop-nav", {
  backgroundColor: "#d3d0d0ea",
  height: "7.5vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#desktop-nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
