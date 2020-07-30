<template>
  <section class="full">
    <ul class="words landing">
      <li v-for="word in words" :key="word">
        <p class="words-Single">{{ word }}&nbsp;</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { gsap } from "gsap"

export default {
  props: {
    words: Array
  },
  mounted() {
    this.wordsLoad()
    console.log("WORDS", this.words)
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
        ease: "expo.in:"
      })
    }
  }
}
</script>
