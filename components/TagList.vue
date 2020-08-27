<template>
  <ul class="tagList">
    <li v-for="tag in array" :id="tag" :key="tag">
      <h4>#{{ tag }}</h4>
    </li>
  </ul>
</template>

<script>
export default {
  props: { array: Array },
  mounted() {
    // console.log("TAGLIST", this.array)
  }
}
</script>
<style lang="sass">
.tagList
  display: flex
  flex-wrap: wrap
  li
    margin-right: .5em
    flex-shrink: 0
    &:last-child
      margin-right: 0
</style>
