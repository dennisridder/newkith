<template>
  <section
    v-editable="blok"
    class="section section-Image section-Media section-ImageContent scrollFast"
  >
    <div class="section-Media_Wrapper">
      <div class="section-Media_Container">
        <img :src="blok.image" :alt="blok.image_title" />
      </div>
    </div>
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
// @import '~/assets/styles/variables.sass'

// .section-Image
//   display: flex
//   justify-content: center
//   overflow: hidden
//   width: 100%
//   height: 100vh
//   img
//     width: 100%
//     height: 100%
//     max-width: 100%
//     max-width: $max-content-width
//     max-height: 100%
//     object-fit: contain
</style>
