<template>
  <ul class="imageGrid">
    <!-- prettier-ignore -->
    <li v-for="item in array" :id="item.id" :key="item.id" class="imageGrid-Row">
      <nuxt-link :to="slug + '/' + item.id" class="imageGrid-Item" tag="div">
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
export default {
  props: { array: Object, slug: String },
  mounted() {
    console.log("IMAGE GRID", this.array)
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.imageGrid
  position: relative
  display: flex
  padding-left: var(--spacing-sides)
  padding-right: var(--spacing-sides)
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
        color: $support-color
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
    font-size: 5vw
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
