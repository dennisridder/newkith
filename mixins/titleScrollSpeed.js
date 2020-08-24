import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.scrollSpeedTitles()
  },
  methods: {
    scrollSpeedTitles() {
      var el = document.querySelector(".section-Landing")
      gsap.to(el, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top top",
          end: "bottom top"
        }
      })
    }
  }
}
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

// export default {
//   mounted() {
//     this.scrollSpeedTitles()
//     console.log("SCROLLSPEED MOUNTED")
//   },
//   beforeDestroy() {
//     // this.scrollSpeedTitles()
//     console.log("SCROLLSPEED DESTROYED")
//   },
//   methods: {
//     scrollSpeedTitles() {
//       //   console.log("SCROLLSPEED SLOW FIRED")
//       var titles = document.querySelectorAll("#scrollSlow")
//       // Get the last el
//       // const lastIndex = titles.length - 1
//       titles.forEach((el, i) => {
//         console.log("TEST", el, i)
//         gsap.to(el, {
//           y: ScrollTrigger.maxScroll(window) * 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: el,
//             scrub: true,
//             // First el has a different starting point
//             start: () => (i == 0 ? "center center" : "top bottom"),
//             // end: () => (i == lastIndex ? "top top" : "bottom top")
//             // end: "bottom top",
//             end: "+=175%",
//             markers: true
//           }
//         })
//       })
//     }
//   }
// }
