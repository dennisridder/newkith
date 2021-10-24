<template>
  <main lang="en-US" translate="no">
    <div class="header-Background"></div>
    <the-navigation />
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <blok-footer />
    <!-- <div class="cursor"></div> -->
  </main>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"
import cursorInteraction from "@/mixins/cursorInteraction"
import ogImage from "@/static/newkith.png"

export default {
  components: {
    "the-navigation": TheNavigation
  },
  mixins: [cursorInteraction],
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: this.BASE_URL + ogImage
        }
      ]
    }
  }
}
</script>
