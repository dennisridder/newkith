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
        color: $support-color
  &-Details
    display: flex
    flex-direction: column
  img
    max-width: 100%

  // Vertical column, with irregular placement within rows
  &.verticalRowIrregular
    flex-direction: row
    flex-direction: column
    .imageGrid-Row
      &:nth-child(1), &:nth-child(11), &:nth-child(21), &:nth-child(31), &:nth-child(41)
        justify-content: flex-end
      &:nth-child(2), &:nth-child(12), &:nth-child(22), &:nth-child(32), &:nth-child(42)
        justify-content: flex-start
      &:nth-child(3), &:nth-child(13), &:nth-child(23), &:nth-child(33), &:nth-child(43)
        justify-content: flex-end
      &:nth-child(4), &:nth-child(14), &:nth-child(24), &:nth-child(34), &:nth-child(44)
        justify-content: center
      &:nth-child(5), &:nth-child(15), &:nth-child(25), &:nth-child(35), &:nth-child(45)
        justify-content: flex-end
      &:nth-child(6), &:nth-child(16), &:nth-child(26), &:nth-child(36), &:nth-child(46)
        justify-content: flex-start
      &:nth-child(7), &:nth-child(17), &:nth-child(27), &:nth-child(37), &:nth-child(47)
        justify-content: flex-end
      &:nth-child(8), &:nth-child(18), &:nth-child(28), &:nth-child(38), &:nth-child(48)
        justify-content: flex-start
      &:nth-child(9), &:nth-child(19), &:nth-child(29), &:nth-child(39), &:nth-child(49)
        justify-content: flex-end
      &:nth-child(10), &:nth-child(20), &:nth-child(30), &:nth-child(40), &:nth-child(50)
        justify-content: flex-start
      &:last-child
        justify-content: flex-end
        .imageGrid-Item
          margin-bottom: 0
    .imageGrid-Item
      flex-basis: 33.3333% // 1/3
</style>
