gsap.registerPlugin(ScrollTrigger);
//header
gsap.from(".navbar", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".navbar",
    start: "top center",
    toggleActions: "restart pause resume none",
  },
});
//
gsap.from([".text-box", ".btn-box"], {
  opacity: 0,
  x: -300,
  duration: 1,
  delay: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: [".text-box", ".btn-box"],
    start: "top center",
    toggleActions: "restart pause resume none",
  },
});
gsap.from(".img-box", {
  opacity: 0,
  x: 400,
  rotate: 360,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".img-box",
    start: "top center",
    toggleActions: "restart pause resume none",
  },
});
//
gsap.from("#block1", {
  opacity: 0,
  x: -200,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: "#block1",
    toggleActions: "restart pause resume none",
    start: "top center",
  },
});
gsap.from("#block2", {
  opacity: 0,
  x: 400,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: "#block2",
    start: "top center",
    toggleActions: "restart pause resume none",
  },
});
//
gsap.from(".heading", {
  opacity: 0,
  y: -100,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".heading",
    start: "top center",
    toggleActions: "restart pause resume none",
  },
});
gsap.from(".col", {
  opacity: 0,
  x: -500,
  duration: 1,
  ease: Power2.out,
  scrollTrigger: {
    trigger: ".col",
    start: "top center",
    toggleActions: "restart pause resume none",
  },
});
