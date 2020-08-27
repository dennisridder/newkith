<template>
  <ul class="imageGrid">
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
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [cursorInteraction],
  props: { array: Array, slug: String },
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.imageGrid
  position: relative
  display: flex
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
        // color: $support-color
        font-family: 'SohneSchmal HalbfettKursiv'
  &-Details
    max-width: 90%
  img
    max-width: 100%
  h2
    margin-top: .5rem
    margin-bottom: .5rem
    text-transform: uppercase
    font-family: 'SohneSchmal Halbfett'
    // font-family: 'Helvetica Neue Black', Helvetica, Arial, sans-serif
    font-size: 3.5vw
    line-height: .9

  // Vertical column, with irregular placement within rows
  &.verticalRowIrregular
    flex-direction: column
    .imageGrid-Row
      flex-direction: row
      &:nth-child(1)
        justify-content: flex-end
      &:nth-child(2)
        justify-content: flex-start
      &:nth-child(3)
        justify-content: center
      &:nth-child(4)
        justify-content: flex-start
      &:nth-child(5)
        justify-content: flex-end
      &:nth-child(6)
        justify-content: flex-start
      &:nth-child(7)
        justify-content: center
      &:last-child
        margin-bottom: 0
    .imageGrid-Item
      flex-basis: 33.3333% // 1/3
</style>
