<template>
  <section class="section section-Filters section-TextContent">
    <ul class="section-Filters_Container">
      <!-- <li
        class="section-Filters_Item cursorInteract"
        v-for="tag in array"
        :id="tag"
        :key="tag"
      >
        <span>#{{ tag }}</span>
      </li> -->
      <filter-item v-for="tag in array" :id="tag" :key="tag" :tag="tag" />
    </ul>
  </section>
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [cursorInteraction],
  props: { array: Array }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Filters
  display: flex
  justify-content: flex-end
  margin-bottom: 5rem
  z-index: $z-filter
  &_Container
    display: flex
    justify-content: flex-end
    flex-wrap: wrap
    width: 100%
  &_Item
    display: flex
    align-items: center
    border: $border
    margin-left: var(--button-margins)
    margin-bottom: var(--button-margins)
    padding: var(--button-padding-top) var(--button-padding-sides)
    line-height: 1
    transition: background $transition-button, color $transition-button
    text-decoration: none
    cursor: pointer
    .icon
      margin-left: .5rem
      transform: rotate(-90deg)
      height: 1rem
      width: 1rem
      transition: transform .2s ease-in-out
      &.ascending
        transform: rotate(90deg)
    &:last-child
      margin-right: 0
    &.active
      background: $bg-hover
      color: $color-hover
    &:hover
      @media ( hover: hover )
        background: $bg-hover
        color: $color-hover
</style>
