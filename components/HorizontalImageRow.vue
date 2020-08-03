<template>
  <div class="horizontalImages">
    <ul class="horizontalImages-Container">
      <li
        v-for="item in list"
        :id="item.id"
        :key="item.id"
        class="horizontalImages-Item"
      >
        <div class="horizontalImages-Image">
          <img :src="item.thumbnail" alt />
        </div>
        <div class="horizontalImages-Title">
          <h2>{{ item.name }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"]
}
</script>

<style lang="sass">
$imageheight: 50vh
$paddingside: 3rem
$gutter: 2rem
$captionmargin: .5rem

.horizontalImages
  position: relative
  width: 100%
  &-Container
    position: relative
    display: flex
    flex-wrap: nowrap
    overflow-x: scroll
  &-Item
    position: relative
    display: flex
    flex-direction: column
    margin-right: $gutter
    &:first-child
      margin-left: $paddingside
    &:last-child
      padding-right: $paddingside
  &-Image
    position: relative
    img
      height: $imageheight
      max-height: 100%
  &-Title
    margin-top: $captionmargin
</style>
