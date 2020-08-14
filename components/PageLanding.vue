<template>
  <section class="landing">
    <ul id="scrollslow" class="words parallax-bg" data-speed="5">
      <li v-for="word in words" :key="word">
        <h1 class="words-Single">{{ word }}&nbsp;</h1>
      </li>
    </ul>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    words: Array
  },
  mounted() {
    this.wordsLoad()
    this.scrollSpeed()
  },
  methods: {
    wordsLoad() {
      var el = document.querySelectorAll(".words-Single")
      gsap.to(el, {
        scrollTrigger: {
          trigger: el
        },
        duration: 0.25,
        stagger: {
          amount: 0.25
        },
        delay: 0.25,
        yPercent: -100,
        ease: "expo.in:",
        onComplete: () => ScrollTrigger.refresh()
      })
    },
    scrollSpeed() {
      gsap.to("#scrollslow", {
        scrollTrigger: {
          scrub: true
        },
        y: (i, target) =>
          -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
      })
    }
  }
}
</script>

<style lang="sass">
.landing
  position: relative
  padding: 0
  min-height: 100vh
  pointer-events: none

.words
  position: fixed
  left: 50%
  top: 50%
  width: 100%
  transform: translate(-50%, -50%)
  display: flex
  flex-wrap: wrap
  text-transform: uppercase
  padding-left: 3rem
  padding-right: 3rem
  li
    overflow: hidden
  h1, h2, p, a
    line-height: 1
    transform: translate(0px, 100%)
</style>
