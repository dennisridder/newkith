import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    this.onScroll()
  },
  methods: {
    onScroll() {
      setTimeout(function() {
        var targets = document.querySelectorAll(".carouselOnScroll")
        const sectionWidth = window.innerWidth / 1.5
        targets.forEach((el, index) => {
          var child = el.querySelectorAll(".carouselOnScroll-Wrapper")
          if (index % 2 === 0) {
            gsap.fromTo(
              child,
              {
                x: 0
              },
              {
                x: -sectionWidth,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  scrub: true,
                  start: "top bottom",
                  end: "bottom top"
                }
              }
            )
          } else {
            gsap.fromTo(
              child,
              { x: -sectionWidth },
              {
                x: 0,
                scrollTrigger: {
                  trigger: el,
                  scrub: true,
                  start: "top bottom",
                  end: "bottom top"
                }
              }
            )
          }
        })
      }, 100)
    }
  }
}
