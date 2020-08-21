<template>
  <ul id="scrollslow" class="title" data-speed="0">
    <li>
      <h1 class="title-Single">{{ words }}</h1>
    </li>
  </ul>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    words: String
  },
  mounted() {
    this.scrollSpeed()
  },
  methods: {
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
.title
  display: flex
  flex-wrap: wrap
  text-transform: uppercase
  padding-left: var(--spacing-content-sides)
  padding-right: var(--spacing-content-sides)
  li
    overflow: hidden
  h1, h2, p, a
    line-height: 1
    // transform: translate(0px, 100%)
    font-family: 'SohneSchmal Halbfett'
    font-size: 15vw
    line-height: .9
</style>
