<template>
  <section class="section section-Title section-TextContent">
    <ul class="title title-Animated">
      <li>
        <h1 v-for="word in words" :key="word" class="section-Title_Word">
          {{ word }}&nbsp;
        </h1>
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
    this.scrollSpeedTitles()
  },
  methods: {
    scrollSpeedTitles() {
      var titles = document.querySelectorAll(".section-Title")
      const mq = window.matchMedia("(min-width: 768px)")
      if (mq.matches) {
        titles.forEach(el => {
          gsap.to(el, {
            y: ScrollTrigger.maxScroll(window) * 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "+=175%"
            }
          })
        })
      }
    },
    wordsLoad() {
      setTimeout(function() {
        let duration = 0.25
        let delay = 0.125
        gsap.to(".section-Title_Word", {
          duration: duration,
          stagger: delay,
          yPercent: -100,
          ease: "expo.out:"
        })
        gsap.to(".section-Title_Word", {
          duration: duration,
          stagger: delay,
          opacity: 1,
          ease: "ease.in:"
        })
      }, 125)
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
    &:nth-child(3)
      width: 100%
  &-Animated
    h1, h2, p, a
      transform: translate(0px, 100%)
      opacity: 0
</style>
