
jQuery(document).ready(function () {
    jQuery('.mobileIcon').click(function () {
        jQuery("body").toggleClass('menu-open');
    });
});
gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray(".right-img img");
const rightElements = gsap.utils.toArray(".left-cont .left-hub-card");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroller-main",
    start: "top 5%",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: false
  }
});

images.forEach((img, i) => {
  if (images[i + 1]) {
    // Creates delay between sections
    //tl.to(img, { opacity: 0 }, "+=0.5")

    // This is one after the other without pause
    tl.to(img, { opacity: 0 })
      .to(images[i + 1], { opacity: 1 }, "<")
      .to(rightElements, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
  }
});

// Adds pause at the end of the timeline
tl.to({}, {}, "+=0.5");

