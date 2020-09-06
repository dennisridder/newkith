import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.scrollSlow()
  },
  methods: {
    scrollSlow() {
      const mq = window.matchMedia("(min-width: 768px)")
      setTimeout(function() {
        var targets = document.querySelectorAll(".scrollSlow")
        if (mq.matches) {
          targets.forEach(el => {
            gsap.to(el, {
              y: window.innerHeight,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                scrub: true,
                start: "top bottom",
                end: "+=200%"
              }
            })
          })
        }
      }, 250)
    }
  }
}
