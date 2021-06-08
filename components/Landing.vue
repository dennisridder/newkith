<template>
  <section class="section section-Landing section-TextContent">
    <ul v-if="$route.name === 'index'" class="title title-Animated">
      <li>
        <h1 class="animated-Word">{{ firstWord }}&nbsp;</h1>
      </li>
      <li class="swapWordContainer">
        <h1 v-for="word in middleWords" :key="word" class="swapWord">
          {{ word.word }}&nbsp;
        </h1>
      </li>
      <li>
        <h1 class="animated-Word">{{ lastWord }}&nbsp;</h1>
      </li>
    </ul>
    <ul v-else class="title title-Animated">
      <li>
        <h1 v-for="word in words" :key="word" class="word">{{ word }}&nbsp;</h1>
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
  data() {
    return {
      firstWord: "",
      lastWord: "",
      middleWords: []
    }
  },
  created() {
    this.wordsSort()
  },
  mounted() {
    this.wordsLoad()
    this.wordsLoadAnimated()
    this.wordsSwap()
    this.scrollSlowLanding()
  },
  methods: {
    wordsSort() {
      if (this.$route.name === "index") {
        this.firstWord = this.words[0].word
        this.lastWord = this.words[this.words.length - 1].word
        this.middleWords = this.words.slice(1, this.words.length - 1)
      }
    },
    wordsLoad() {
      if (this.$route.name !== "index") {
        setTimeout(function() {
          let duration = 0.25
          let delay = 0.125
          gsap.to(".word", {
            duration: duration,
            stagger: delay,
            yPercent: -100,
            ease: "expo.out:"
          })
          gsap.to(".word", {
            duration: duration,
            stagger: delay,
            opacity: 1,
            ease: "ease.in:"
          })
        }, 125)
      }
    },
    wordsLoadAnimated() {
      if (this.$route.name === "index") {
        setTimeout(function() {
          let duration = 0.25
          let delay = 0.25
          gsap.to(".animated-Word", {
            duration: duration,
            stagger: delay,
            yPercent: -100,
            ease: "expo.out:"
          })
          gsap.to(".animated-Word", {
            duration: duration,
            stagger: delay,
            opacity: 1,
            ease: "ease.in:"
          })
        }, 125)
      }
    },
    wordsSwap() {
      let duration = 0.125
      let delay = 1.25
      if (this.$route.name === "index") {
        setTimeout(function() {
          var targets = document.querySelectorAll(".swapWord")
          var wordSwap = gsap.timeline({ repeat: -1 })
          targets.forEach((el, index) => {
            var timeDelay = (duration + duration + delay) * (index + 1)
            wordSwap.to(el, duration, {
              opacity: 1,
              yPercent: -100,
              display: "block",
              ease: "expo.out:"
            })
            wordSwap.to(
              el,
              duration,
              {
                opacity: 0,
                yPercent: "-=100",
                display: "none",
                ease: "expo.in:"
              },
              timeDelay
            )
          })
        }, 250)
      }
    },
    scrollSlowLanding() {
      gsap.to(this.$el, {
        y: window.innerHeight,
        ease: "none",
        scrollTrigger: {
          trigger: this.$el,
          scrub: true,
          start: "top top",
          end: "+=200%"
        }
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
    &:nth-child(3)
      width: 100%
  &-Animated
    li
      display: block
    h1, h2, p, a
      transform: translate(0px, 100%)
      opacity: 0
    animated-Word
  .swapWordContainer
    h1
      display: none
</style>
