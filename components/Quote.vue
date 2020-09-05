<template>
  <section class="section section-Quote section-TextContent animatedHorizontal">
    <ul ref="wrapper" class="section-Quote_Wrapper animatedHorizontal-Wrapper">
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
      </li>
      <li>
        <h1>{{ blok.quote }}&nbsp;</h1>
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
    blok: Object
  },
  mounted() {
    this.onScroll()
  },
  methods: {
    onScroll() {
      const sectionWidth = window.innerWidth / 1.5
      gsap.to(this.$refs.wrapper, {
        x: -sectionWidth,
        ease: "none",
        scrollTrigger: {
          trigger: this.$el,
          scrub: true,
          start: "top bottom",
          end: "bottom top"
        }
      })
    }
  }
}
</script>

<style lang="sass">
.section-Quote
    padding-left: 0
    padding-right: 0
    text-transform: uppercase
    width: 100vw
    overflow-x: auto
    ul
        display: flex
        flex-wrap: nowrap
        li
            h1
                white-space: nowrap
            &:first-child
                margin-left: var(--spacing-content-sides)
</style>
