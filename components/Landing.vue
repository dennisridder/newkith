<template>
  <section class="section section-Landing section-TextContent">
    <ul v-if="$route.name === 'index'" class="title title-Animated">
      <li>
        <h1 class="animated-Word">{{ firstWord }}</h1>
      </li>
      <li class="swapWordContainer">
        <h1 v-for="word in middleWords" :key="word" class="swapWord">
          {{ word.word }}
        </h1>
      </li>
      <li>
        <h1 class="animated-Word">{{ lastWord }}</h1>
      </li>
    </ul>
    <ul v-else class="title title-Animated">
      <li>
        <h1 v-for="word in words" :key="word" class="word">
          {{ word + "&nbsp;" }}
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
          let duration = 0
          let delay = 0.125
          gsap.fromTo(
            ".word",
            {
              y: function() {
                return this._targets[0].clientHeight
              },
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: duration,
              stagger: delay,
              ease: "expo.out:"
            }
          )
        }, 125)
      }
    },
    wordsLoadAnimated() {
      if (this.$route.name === "index") {
        setTimeout(function() {
          let duration = 0.25
          let delay = 0.25
          gsap.set(".title-Animated, .swapWordContainer h1:first-child", {
            opacity: 1,
            visibility: "visible"
          })
          gsap.fromTo(
            ".title-Animated > li",
            {
              y: function() {
                return this._targets[0].clientHeight
              },
              opacity: 0
            },
            {
              duration: duration,
              stagger: delay,
              y: 0,
              opacity: 1,
              ease: "expo.out:"
            }
          )
        }, 125)
      }
    },
    wordsSwap() {
      // var targets = document.querySelectorAll(".swapWord")
      // targets.forEach((el, index) => {
      //   if (index === 0)
      //     gsap.set(el, { opacity: 1, display: "block", yPercent: -100 })
      // })

      let duration = 0.125
      let delay = 1.25
      if (this.$route.name === "index") {
        setTimeout(function() {
          var targets = document.querySelectorAll(".swapWord")
          var wordSwap = gsap.timeline({
            repeat: -1
          })
          var targetHeight = targets[0].clientHeight
          console.log("targetHeight", targetHeight)
          console.log(targets)

          targets.forEach((el, index) => {
            var timeDelay = (duration + duration + delay) * (index + 1)
            wordSwap.fromTo(
              el,
              duration,
              {
                y: targetHeight
              },
              {
                y: 0,
                opacity: 1,
                display: "block",
                ease: "expo.out:"
              }
            )
            wordSwap.to(
              el,
              duration,
              {
                opacity: 0,
                display: "none",
                y: function() {
                  return -1 * this._targets[0].clientHeight
                },
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
  // text-transform: uppercase
  li
    overflow: hidden
    &:nth-child(3)
      width: 100%
  &-Animated
    opacity: 1
    li
      display: block
      width: 100%
    h1
      font-size: 17vw
      font-size: 8vw
      padding-bottom: 4vw
      margin-bottom: -3vw

      @media screen and (min-width: 1024px)
        // font-size: 13vw
        font-size: 5vw
    animated-Word
  .swapWordContainer
    width: 120vw
    h1
      display: none
      opacity: 0
    h1:first-child
      display: block
      visibility: hidden
</style>
