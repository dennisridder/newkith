<template>
  <section class="section section-Title section-TextContent scrollSlow">
    <ul>
      <li>
        <h1 v-for="(word, i) in words" :key="i">{{ word }}&nbsp;</h1>
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
.section-Title
  ul
    display: flex
    flex-wrap: wrap
    // text-transform: uppercase
</style>
