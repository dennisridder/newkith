<template>
  <section class="full landing">
    <ul class="words">
      <li v-for="word in words" :key="word">
        <p class="words-Single">{{ word }}&nbsp;</p>
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
      console.log("MOUNTED")
      var el = document.querySelector(".words")
      gsap.to(el, {
        scrollTrigger: {
          scrub: true
        },
        y: -ScrollTrigger.maxScroll(window) * 20,
        ease: "none"
      })
    }
  }
}
</script>

<style lang="sass">
.landing
  pointer-events: none

.words
  position: fixed
  top: 50%
  left: 0
  display: flex
  flex-wrap: wrap
  text-transform: uppercase
  transform: translateY(-50%)
  padding: 3rem
  li
    // border: 1px solid red
    overflow: hidden
  p
    font-family: 'Basis Grotesk Bold', Helvetica, Arial, sans-serif
    font-size: 11vw
    line-height: 1
    transform: translate(0px, 100%)
</style>
