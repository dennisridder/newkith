<template>
  <ul class="title title-Animated">
    <li>
      <h1 class="animated-Word">{{ firstWord }}&nbsp;</h1>
    </li>
    <li class="swapWordContainer">
      <h1 v-for="word in middleWords" :key="word" class="swapWord">
        {{ word }}&nbsp;
      </h1>
    </li>
    <li>
      <h1 class="animated-Word">{{ lastWord }}&nbsp;</h1>
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
  data() {
    return {
      firstWord: "",
      lastWord: "",
      middleWords: []
    }
  },
  mounted() {
    this.wordsSort()
    this.wordsLoad()
    this.wordsSwap()
  },
  methods: {
    wordsSort() {
      this.firstWord = this.words[0]
      this.lastWord = this.words[this.words.length - 1]
      this.middleWords = this.words.slice(1, this.words.length - 1)
    },
    wordsLoad() {
      let duration = 0.5
      let delay = 0.5
      gsap.to(".animated-Word", {
        duration: duration,
        stagger: delay,
        yPercent: -100,
        opacity: 1,
        ease: "expo.in:"
      })
    },
    wordsSwap() {
      let duration = 0.5
      let delay = 2

      setTimeout(function() {
        var targets = document.querySelectorAll(".swapWord")
        var wordSwap = gsap.timeline({ repeat: -1 })
        targets.forEach((el, index) => {
          var timeDelay = (duration + duration + delay) * (index + 1)
          wordSwap.to(el, duration, {
            opacity: 1,
            yPercent: -100,
            display: "inline-block",
            ease: "expo.in:"
          })
          wordSwap.to(
            el,
            duration,
            {
              opacity: 0,
              yPercent: "-=100",
              display: "none",
              ease: "expo.out:"
            },
            timeDelay
          )
        })
      }, 200)
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
  h1, h2, p, a
    display: inline-block
    line-height: 1
    font-family: 'SohneSchmal Halbfett'
    font-size: 15vw
    line-height: .9
    overflow: hidden
  &-Animated
    h1, h2, p, a
      transform: translate(0px, 100%)
      opacity: 0
  .swapWordContainer
    h1
      display: none
</style>
