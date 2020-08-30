import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.scrollSpeedImages()
  },
  methods: {
    scrollSpeedImages() {
      var titles = document.querySelectorAll(".fastScroll")
      titles.forEach(el => {
        gsap.to(el, {
          y: ScrollTrigger.maxScroll(window) * -0.1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: "top bottom",
            end: "bottom top"
          }
        })
      })
    }
  }
}
