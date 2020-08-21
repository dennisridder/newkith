<template>
  <main>
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt class="main" />
    </transition>
    <blok-footer />
  </main>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    "the-navigation": TheNavigation
  },
  watch: {
    $route() {
      this.scrollSpeedTitles()
    }
  },
  mounted() {
    this.footerPadding()
    this.scrollSpeedTitles()
  },
  updated() {
    this.scrollSpeedTitles()
  },
  destroyed() {
    this.scrollSpeedTitles()
  },
  methods: {
    footerPadding() {
      var height = document.querySelector(".section-Footer").offsetHeight
      document.querySelector("main").style.marginBottom = height + "px"
    },
    scrollSpeedTitles() {
      console.log("FIRED")
      var titles = document.querySelectorAll("#scrollSlow")
      // Get the last el
      // const lastIndex = titles.length - 1
      titles.forEach((el, i) => {
        console.log(el)
        gsap.fromTo(
          el,
          {
            y: "0vh"
            // y: () => (i == 0 ? "0vh" : "-20vh")
          },
          {
            y: "50vh",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              // First el has a different starting point
              start: () => (i == 0 ? "center center" : "top bottom"),
              // end: () => (i == lastIndex ? "top top" : "bottom top")
              end: "bottom top"
              // markers: true
            }
          }
        )
      })
    }
  }
}
</script>
