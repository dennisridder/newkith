<template>
  <main>
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt class="main" />
    </transition>
    <blok-footer />
  </main>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    "the-navigation": TheNavigation
  },
  mounted() {
    this.footerPadding()
  },
  methods: {
    footerPadding() {
      var height = document.querySelector(".section-Footer").offsetHeight
      document.querySelector("main").style.marginBottom = height + "px"
    }
  }
}
</script>
