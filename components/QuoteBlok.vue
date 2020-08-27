<template>
  <section class="section section-Quote section-TextContent">
    <ul class="section-Quote_Wrapper">
      <li class="section-Quote_Item">
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
    console.log(this.blok)
    this.onScroll()
  },
  methods: {
    onScroll() {
      const section = document.querySelector(".section-Quote")
      const sectionWidth = section.offsetWidth
      const wrapper = document.querySelector(".section-Quote_Wrapper")
      //   const wrapperWidth = wrapper.scrollWidth
      gsap.utils.toArray(".section-Quote").forEach(el => {
        gsap.fromTo(
          wrapper,
          { x: 0 },
          {
            x: 0 - sectionWidth,
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
