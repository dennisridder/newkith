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

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Logos
  &_Item
    height: 100%
    margin-left: var(--spacing-two)
    width: 10rem
    p
        margin-left: var(--spacing-content-sides)
        margin-bottom: var(--spacing-one)
    img
        height: 100%
        width: 100%
        object-fit: contain
</style>
