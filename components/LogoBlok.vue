<template>
  <li class="section-Logos_Item">
    <img :src="blok.image.filename" alt="" />
  </li>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Logos
  li
    height: 100%
    margin-left: var(--spacing-two)
    width: 10rem
    img
        height: 100%
        width: 100%
        object-fit: contain
</style>
