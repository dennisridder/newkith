import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.scrollFast()
  },
  methods: {
    scrollFast() {
      const mq = window.matchMedia("(min-width: 768px)")
      setTimeout(function() {
        var titles = document.querySelectorAll(".scrollFast")
        if (mq.matches) {
          titles.forEach(el => {
            gsap.to(el, {
              y: -window.innerHeight / 2,
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
      }, 250)
    }
  }
}
