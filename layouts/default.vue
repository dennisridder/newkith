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

export default {
  components: {
    "the-navigation": TheNavigation
  }
}
</script>
