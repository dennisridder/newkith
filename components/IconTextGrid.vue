<template>
  <section class="section section-iconTextGrid">
    <ul class="iconTextGrid verticalRowIrregular">
      <!-- prettier-ignore -->
      <component
        :is="item.component | dashify"
        v-for="item in blok.items"
        :key="item._uid"
        :item="item"
      ></component>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.iconTextGrid
  position: relative
  display: grid
  grid-template-columns: repeat(3, 1fr)
  margin-top: calc(var(--spacing-content-bottom) / 2 * -1)
  margin-bottom: var(--spacing-content-bottom)

  @media screen and (max-width: $breakpoint-tablet)
    grid-template-columns: repeat(2, 1fr)

  @media screen and (max-width: $breakpoint-mobile)
    grid-template-columns: repeat(1, 1fr)
</style>
