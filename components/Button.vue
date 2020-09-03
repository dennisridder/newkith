<template>
  <a
    :href="'https://' + blok.hyperlink"
    target="_blank"
    class="button cursorInteract"
    ><h4>{{ blok.text }}</h4></a
  >
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [cursorInteraction],
  props: {
    blok: Object
  },
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Buttons
  .button
    border: $border
    margin-right: var(--button-margins)
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
