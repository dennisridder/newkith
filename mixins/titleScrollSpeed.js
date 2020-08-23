// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

// export default {
//   mounted() {
//     this.scrollSpeedTitles()
//   },
//   methods: {
//     scrollSpeedTitles() {
//       console.log("SCROLLSPEED SLOW FIRED")
//       var titles = document.querySelectorAll("#scrollSlow")
//       // Get the last el
//       // const lastIndex = titles.length - 1
//       titles.forEach((el, i) => {
//         console.log(el)
//         gsap.to(el, {
//           y: ScrollTrigger.maxScroll(window) * 0.2,
//           ease: "none",
//           scrollTrigger: {
//             trigger: el,
//             scrub: true,
//             // First el has a different starting point
//             start: () => (i == 0 ? "center center" : "top bottom"),
//             // end: () => (i == lastIndex ? "top top" : "bottom top")
//             // end: "bottom top",
//             end: "+=200%",
//             markers: true
//           }
//         })
//       })
//     }
//   }
// }
