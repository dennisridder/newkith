<template>
  <div>
    <transition name="pages" mode="out-in">
      <nuxt />
    </transition>
    <the-navigation />
  </div>
</template>

<script>
import TheNavigation from "~/components/TheNavigation.vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    "the-navigation": TheNavigation
  }
}
</script>
