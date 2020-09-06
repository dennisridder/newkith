<template>
  <section class="section section-ImageGrid section-ImageContent scrollFast">
    <ul class="imageGrid verticalRowIrregular">
      <!-- prettier-ignore -->
      <li v-for="item in array" :id="item.id" :key="item.id" class="imageGrid-Row">
      <nuxt-link :to="slug + item.id" class="imageGrid-Item cursorInteract" tag="div">
        <blok-image-container :id="item.id" :image="item.thumbnail" :title="item.title" />
        <div class="imageGrid-Details">
          <h2>{{ item.title }}</h2>
          <blok-tag-list v-if="item.taglist" :array="item.taglist" />
        </div>
      </nuxt-link>
    </li>
    </ul>
  </section>
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"

export default {
  mixins: [cursorInteraction],
  props: {
    array: Array,
    slug: String
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.imageGrid
  position: relative
  display: flex
  flex-direction: column
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
      @media ( hover: hover )
        h2
          font-family: 'SohneSchmal HalbfettKursiv'
          color: $support-color
  &-Details
    display: flex
    flex-direction: column

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
        .imageGrid-Item
          margin-bottom: 0
    .imageGrid-Item
      flex-basis: 33.3333%
    @media screen and (max-width: $breakpoint-tablet)
      .imageGrid-Item
        flex-basis: 50%
    @media screen and (max-width: $breakpoint-mobile)
      .imageGrid-Item
        flex-basis: 100%
</style>
