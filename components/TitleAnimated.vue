<template>
  <ul class="title title-Animated">
    <li v-for="word in words" :key="word">
      <h1 class="animated-Word">{{ word }}&nbsp;</h1>
    </li>
  </ul>
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
  },
  methods: {
    wordsLoad() {
      var el = document.querySelectorAll(".animated-Word")
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
    }
  }
}
</script>

<style lang="sass">
.title
  display: flex
  flex-wrap: wrap
  text-transform: uppercase
  li
    overflow: hidden
  h1, h2, p, a
    line-height: 1
    font-family: 'SohneSchmal Halbfett'
    font-size: 15vw
    line-height: .9
  &-Animated
    h1, h2, p, a
      transform: translate(0px, 100%)
</style>
