<template>
  <section class="section section-Filters filters">
    <ul class="filters-Container">
      <li class="filter" v-for="tag in array" :id="tag" :key="tag">
        <h4>#{{ tag }}</h4>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: { array: Array },
  mounted() {}
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.filters
  display: flex
  justify-content: flex-end
  padding-left: var(--spacing-content-sides)
  padding-right: var(--spacing-content-sides)
  margin-bottom: 5rem
  &-Container
    display: flex
    justify-content: flex-end
    flex-wrap: wrap
    width: 100%
    max-width: var(--button-container-width)
  .filter
    border: $border
    margin-left: var(--button-margins)
    margin-bottom: var(--button-margins)
    padding: var(--button-padding-top) var(--button-padding-sides)
    line-height: 1
    transition: background $transition-button, color $transition-button
    text-decoration: none
    cursor: pointer
    &:last-child
      margin-right: 0
    &:hover
      background: $bg-hover
      color: $color-hover
</style>
