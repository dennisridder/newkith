<template>
  <a :href="'https://' + blok.hyperlink" target="_blank" class="button">{{
    blok.text
  }}</a>
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

.buttons
  .button
    border: $border
    margin-right: var(--spacing-one)
    padding: var(--spacing-one) var(--spacing-one)
    line-height: 1
    transition: background $transition-button, color $transition-button
    text-decoration: none
    &:last-child
      margin-right: 0
    &:hover
      background: $bg-hover
      color: $color-hover
</style>
