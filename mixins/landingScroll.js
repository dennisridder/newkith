import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.scrollSpeedLanding()
  },
  methods: {
    scrollSpeedLanding() {
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
