<template>
  <div class="horizontalImages">
    <ul class="horizontalImages-Container">
      <li
        v-for="item in list"
        :id="item.id"
        :key="item.id"
        class="horizontalImages-Item"
      >
        <div class="horizontalImages-Image">
          <img :src="item.thumbnail" alt />
        </div>
        <div class="horizontalImages-Title">
          <h2>{{ item.name }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import $ from "jquery"

gsap.registerPlugin(ScrollTrigger)

export default {
  props: ["list"],
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll() {
      const windowHeight = window.innerHeight
      var el = document.querySelector(".horizontalImages-Container")
      var elRect = el.getBoundingClientRect()
      var sPosition = (elRect.top / windowHeight) * 100 - 100
      if (elRect.top < 0) {
        sPosition = -100
      } else if (sPosition > 0) {
        sPosition = 0
      }
      console.log("RUNNING", sPosition, elRect)
      gsap.to(el, {
        scrollTrigger: {
          trigger: el, // start the animation when ".box" enters the viewport (once)
          scrub: 0 // Seconds to catch up after scroll stop
        },
        xPercent: sPosition / 10,
        ease: "expo.out:",
        onComplete: () => ScrollTrigger.refresh()
      })
    }
  }
}
</script>

<style lang="sass">
$imageheight: 50vh
$paddingside: 3rem
$gutter: 2rem
$captionmargin: .5rem

.horizontalImages
  position: relative
  width: 100%
  &-Container
    position: relative
    display: flex
    flex-wrap: nowrap
    overflow-x: scroll
  &-Item
    position: relative
    display: flex
    flex-direction: column
    margin-right: $gutter
    &:first-child
      margin-left: $paddingside
    &:last-child
      padding-right: $paddingside
  &-Image
    position: relative
    img
      height: $imageheight
      max-height: 100%
  &-Title
    margin-top: $captionmargin
</style>
