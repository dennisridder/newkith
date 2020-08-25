<template>
  <main>
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
  watch: {
    $route() {
      // this.scrollSpeedTitles()
    }
  },
  mounted() {
    this.footerPadding()
    // this.scrollSpeedTitles()
  },
  updated() {
    // this.scrollSpeedTitles()
  },
  destroyed() {
    // this.scrollSpeedTitles()
  },
  methods: {
    footerPadding() {
      var height = document.querySelector(".section-Footer").offsetHeight
      document.querySelector("main").style.marginBottom = height + "px"
    }
  }
}
</script>
