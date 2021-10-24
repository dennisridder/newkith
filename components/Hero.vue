<!-- prettier-ignore -->
<template>
  <header
    v-editable="blok"
    class="section section-Hero"
    :style="styleObject"
  >
      <component
        :is="item.component | dashify"
        v-for="item in blok.items"
        :key="item._uid"
        :blok="item"
      ></component>
  </header>
</template>

<script>
// import MarkdownItem from "@/components/MarkdownItem.vue"

export default {
  props: {
    blok: Object
  },
  computed: {
    styleObject() {
      return {
        "background-image": `url(${this.blok.background.filename})`,
        "background-color": this.blok.background_color || null
      }
    }
  },
  mounted() {}
}
</script>

<style lang="sass">
.section-Hero
  overflow: hidden
  width: 100%
  min-height: 34.5vw
  padding-top: 3rem
  padding-bottom: 1rem
  display: flex
  flex-direction: column
  justify-content: center
  background-position: 50% 50%
  background-size: cover
  background-repeat: no-repeat
  background-color: #000
  color: #fff
  margin-bottom: var(--spacing-content-bottom)

  *
    --spacing-content-bottom: 1em

  .markdown
    max-width: 480px
    white-space: initial

    p
      margin-bottom: 1em

    strong
      font-weight: 800

  .button
    &:hover,
    &:focus
      color: #000
      background-color: #fff
      border-color: #fff
</style>
