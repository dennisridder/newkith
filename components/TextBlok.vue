<template>
  <section
    :id="blok.title"
    v-editable="blok"
    class="section section-Text section-TextContent"
  >
    <!-- <h1 v-if="blok.title" class="text-Title">{{ blok.title }}</h1> -->
    <markdown-item :input="blok.text" />
  </section>
</template>

<script>
import MarkdownItem from "@/components/MarkdownItem.vue"

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
.section-Text
  overflow: hidden
  width: 100%
  img
    width: 100%
    height: auto
    max-width: 100%
    margin-top: 1.5rem
    margin-bottom: 1.5rem
  .markdown
    max-width: var(--max-width)
</style>
