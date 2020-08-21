<template>
  <section v-editable="blok" class="section section-Image section-ImageContent">
    <img :src="blok.image" :alt="blok.image_title" />
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
.section-Image
  overflow: hidden
  width: 100%
  height: 100vh
  max-width: calc(#{var(--max-width)} * 2)
  img
    width: 100%
    height: 100%
    max-width: 100%
    max-height: 100%
    object-fit: contain
</style>
