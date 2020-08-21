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
