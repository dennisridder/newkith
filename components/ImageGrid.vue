<template>
  <ul class="imageGrid">
    <!-- prettier-ignore -->
    <li v-for="item in array" :id="item.id" :key="item.id" class="imageGrid-Row">
      <nuxt-link :to="'cases/' + item.id" class="imageGrid-Item" tag="div">
        <blok-image-container :image="item" />
        <h2>{{ item.title }}</h2>
        <ul class="tagList">
          <li v-for="tag in item.taglist" :id="tag" :key="tag">
            <h4>#{{ tag }}</h4>
          </li>
        </ul>
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["array"],
  mounted() {
    // console.log("IMAGE GRID COMPONENT", this.array, typeof this.array)
  }
}
</script>

<style lang="sass">
// Testing
// .imageGrid
//   &-Row
//     border: 1px solid blue
//   &-Item
//     border: 1px solid red

.imageGrid
  position: relative
  display: flex
  &-Row
    position: relative
    display: flex
  &-Item
    position: relative
    display: flex
    flex-direction: column
    cursor: pointer
    margin-bottom: 3rem
  img
    max-width: 100%
  h2
    margin-top: 1rem
    text-transform: uppercase

  // Vertical column, with irregular placement within rows
  &.verticalRowIrregular
    flex-direction: column
    .imageGrid-Row
      flex-direction: row
      &:nth-child(1)
        justify-content: flex-start
      &:nth-child(2)
        justify-content: flex-end
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
