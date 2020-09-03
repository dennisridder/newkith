<template>
  <section class="section section-Logos section-TextContent ">
    <p>Our partners:</p>
    <div class="section-Logos_Content animatedHorizontal">
      <div class="animatedHorizontal-Wrapper">
        <ul>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '1'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '2'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '3'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '4'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '5'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '6'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '7'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '8'"
            :blok="blok"
          ></component>
          <component
            :is="blok.component | dashify"
            v-for="blok in blok.body"
            :key="blok._uid + '9'"
            :blok="blok"
          ></component>
        </ul>
      </div>
    </div>
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
@import '~/assets/styles/variables.sass'

.section-Logos
    padding-left: 0
    padding-right: 0
    p
        margin-left: var(--spacing-content-sides)
        margin-bottom: var(--spacing-one)
    &_Content
        width: 100vw
        overflow-x: auto
        display: flex
        flex-wrap: nowrap
        border-top: $border
        border-bottom: $border
        padding-top: 1.5rem
        padding-bottom: 1.5rem
    ul
        display: flex
        flex-wrap: nowrap
        height: 6.5rem
</style>
