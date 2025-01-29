
jQuery(document).ready(function () {
    jQuery('.mobileIcon').click(function () {
        jQuery("body").toggleClass('menu-open');
    });
});

// gsap.registerPlugin(ScrollTrigger);

// const images = gsap.utils.toArray(".left-content img");
// const rightElements = gsap.utils.toArray(".right-content .right-element");

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".container",
//     start: "top top",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true
//   }
// });

// images.forEach((img, i) => {
//   if (images[i + 1]) {
//     // Creates delay between sections
//     //tl.to(img, { opacity: 0 }, "+=0.5")

//     // This is one after the other without pause
//     tl.to(img, { opacity: 0 })
//       .to(images[i + 1], { opacity: 1 }, "<")
//       .to(rightElements, { yPercent: -(100 * (i + 1)), ease: "none" }, "<");
//   }
// });

// // Adds pause at the end of the timeline
// tl.to({}, {}, "+=0.5");
