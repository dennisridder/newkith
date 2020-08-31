<template>
  <main>
    <div class="header-Background"></div>
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <blok-footer />
    <div class="cursor"></div>
  </main>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  components: {
    "the-navigation": TheNavigation
  },
  mixins: [cursorInteraction],
  mounted() {
    // this.footerPadding()
  },
  methods: {
    // footerPadding() {
    //   const mq = window.matchMedia("(min-width: 768px)")
    //   if (mq.matches) {
    //     var height = document.querySelector(".section-Footer").offsetHeight
    //     document.querySelector("main").style.marginBottom = height + "px"
    //   }
    // }
  }
}
</script>
