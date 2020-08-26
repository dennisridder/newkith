import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.scrollSpeedTitles()
  },
  methods: {
    scrollSpeedTitles() {
      var titles = document.querySelectorAll(".scrollSlow")
      // console.log(titles)
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
  }
}
