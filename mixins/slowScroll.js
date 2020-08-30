import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.scrollSpeedTitles()
    this.scrollSpeedImageGridFooter()
  },
  methods: {
    scrollSpeedTitles() {
      var titles = document.querySelectorAll(".slowerScroll")
      const mq = window.matchMedia("(min-width: 768px)")
      if (mq.matches) {
        titles.forEach(el => {
          gsap.to(el, {
            y: ScrollTrigger.maxScroll(window) * 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "+=175%"
            }
          })
        })
      }
    },
    scrollSpeedImageGridFooter() {
      var titles = document.querySelectorAll(".slowScroll")
      const mq = window.matchMedia("(min-width: 768px)")
      if (mq.matches) {
        titles.forEach(el => {
          gsap.to(el, {
            y: ScrollTrigger.maxScroll(window) * 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "+=175%"
            }
          })
        })
      }
    }
  }
}
