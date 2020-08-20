<template>
  <div v-editable="blok" class="image">
    <img :src="blok.image" :alt="blok.image_title" />
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  mounted() {
    console.log(this.blok, "IMAGE BLOK")
  }
}
</script>

<style lang="sass">
.image
  overflow: hidden
  width: 100%
  height: 100vh
  padding-left: var(--spacing-content-sides)
  padding-right: var(--spacing-content-sides)
  max-width: calc(#{var(--max-width)} * 2)
  img
    width: 100%
    height: 100%
    max-width: 100%
    max-height: 100%
    object-fit: contain
</style>
