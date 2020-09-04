<template>
  <section class="section section-Buttons section-TextContent">
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
.section-Buttons
  display: flex
  flex-wrap: wrap
</style>
