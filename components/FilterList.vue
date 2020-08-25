<template>
  <section class="section section-Filters section-TextContent">
    <ul class="section-Filters_Container">
      <li
        class="section-Filters_Item cursorInteract"
        v-for="tag in array"
        :id="tag"
        :key="tag"
      >
        <h4>#{{ tag }}</h4>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: { array: Array }
}
</script>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Filters
  display: flex
  justify-content: flex-end
  margin-bottom: 5rem
  &_Container
    display: flex
    justify-content: flex-end
    flex-wrap: wrap
    width: 100%
    max-width: var(--button-container-width)
  &_Item
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
