<template>
  <section class="section section-ImageGrid section-Image-Content">
    <blok-title-animated
      v-if="title"
      class="scrollSlow section-ImageGrid_Title"
      :words="wordsArray"
      :wordswap="false"
    />
    <ul class="imageGrid" :class="rowtype">
      <!-- prettier-ignore -->
      <li v-for="item in array" :id="item.id" :key="item.id" class="imageGrid-Row">
      <nuxt-link :to="slug + item.id" class="imageGrid-Item cursorInteract" tag="div">
        <blok-image-container-tilt :id="item.id" :image="item.thumbnail" :title="item.title" />
        <div class="imageGrid-Details">
          <h2>{{ item.title }}</h2>
          <blok-tag-list v-if="item.taglist" :array="item.taglist" />
        </div>
      </nuxt-link>
    </li>
    </ul>
    <div v-if="footertext" class="section-ImageGrid_Footer">
      <h2>{{ footertitle }}</h2>
      <markdown-item :input="footertext" />
      <nuxt-link
        :to="slug"
        tag="div"
        class="section-ImageGrid_Footer_Link cursorInteract"
        ><h4>See more</h4>
        <div
          class="icon"
          v-html="require('~/assets/images/icon-arrow.svg?include')"
      /></nuxt-link>
    </div>
  </section>
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"
import MarkdownItem from "@/components/MarkdownItem.vue"

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  mixins: [cursorInteraction],
  props: {
    array: Array,
    slug: String,
    title: String,
    rowtype: String,
    footertitle: String,
    footertext: String
  },
  data() {
    return {
      wordsArray: []
    }
  },
  mounted() {
    this.wordsToArray()
    console.log("IMAGEGRID DATA", this.array, this.slug, this.title)
  },
  methods: {
    wordsToArray() {
      if (this.title) {
        var string = this.title
        var array = string.split(/\s+/)
        this.wordsArray = Object.values(array)
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section
  &-ImageGrid
    position: relative
    &_Title
      margin-left: var(--spacing-content-sides)
    &_Footer
      position: absolute
      left: 0
      bottom: 0
      margin-left: var(--spacing-content-sides)
      margin-bottom: var(--spacing-content-sides)
      max-width: 33.3333%
      &_Link
        display: flex
        margin-top: .5rem
        svg
          margin-left: 0.5rem

.imageGrid
  position: relative
  display: flex
  flex-direction: column
  padding-left: var(--spacing-image-sides)
  padding-right: var(--spacing-image-sides)
  &-Row
    position: relative
    display: flex
  &-Item
    position: relative
    display: flex
    flex-direction: column
    cursor: pointer
    margin-bottom: 3rem
    &:hover
      h2
        font-family: 'SohneSchmal HalbfettKursiv'
  &-Details
    max-width: 90%
  img
    max-width: 100%

  // Vertical column, with irregular placement within rows
  &.verticalRowIrregular
    flex-direction: row
    flex-direction: column
    .imageGrid-Row
      &:nth-child(1n)
        justify-content: flex-end
      &:nth-child(2n)
        justify-content: flex-start
      &:nth-child(3n)
        justify-content: flex-end
      &:nth-child(4n)
        justify-content: center
      &:nth-child(5n)
        justify-content: flex-end
      &:nth-child(6n)
        justify-content: flex-start
      &:nth-child(7n)
        justify-content: flex-end
      &:nth-child(8n)
        justify-content: flex-start
      &:nth-child(9n)
        justify-content: flex-end
      &:nth-child(10n)
        justify-content: flex-start
      &:last-child(2)
        justify-content: center
      &:last-child
        justify-content: flex-end
        .imageGrid-Item
          margin-bottom: 0
    .imageGrid-Item
      flex-basis: 33.3333% // 1/3
</style>
