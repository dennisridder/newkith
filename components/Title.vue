<template>
  <section class="section section-Title section-TextContent">
    <ul class="title">
      <li>
        <h1 v-for="word in words" :key="word" class="section-Title_Word">
          {{ word }}&nbsp;
        </h1>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    words: Array
  }
}
</script>

<style lang="sass">
.title
  display: flex
  flex-wrap: wrap
  text-transform: uppercase
  li
    overflow: hidden
    &:nth-child(3)
      width: 100%
  &-Animated
    h1, h2, p, a
      transform: translate(0px, 100%)
      opacity: 0
</style>
