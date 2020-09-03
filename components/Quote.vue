<template>
  <section class="section section-Quote section-TextContent animatedHorizontal">
    <ul class="section-Quote_Wrapper animatedHorizontal-Wrapper">
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
      const section = document.querySelector(".animatedHorizontal")
      const sectionWidth = section.offsetWidth / 1.5
      const wrapper = document.querySelector(".animatedHorizontal-Wrapper")
      gsap.utils.toArray(".animatedHorizontal").forEach(el => {
        gsap.fromTo(
          wrapper,
          { x: 0 },
          {
            x: -sectionWidth,
            scrollTrigger: {
              trigger: el,
              scrub: true
            }
          }
        )
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
