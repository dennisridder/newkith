<template>
  <div v-editable="blok" class="section-Wrapper">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
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

.section-Bottom
  > section:not(:last-child)
    margin-bottom: calc(var(--spacing-content-bottom) / 2)
</style>
