<template>
  <section
    :id="blok.title"
    v-editable="blok"
    class="section section-Text section-TextContent"
  >
    <h1
      v-if="blok.title_large"
      class="section-Text_Title section-Text_Title_Large"
    >
      {{ blok.title_large }}
    </h1>
    <h2
      v-if="blok.title_medium"
      class="section-Text_Title section-Text_Title_Medium"
    >
      {{ blok.title_medium }}
    </h2>
    <p
      v-if="blok.title_small"
      class="section-Text_Title section-Text_Title_Small"
    >
      {{ blok.title_small }}
    </p>
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
  },
  mounted() {}
}
</script>

<style lang="sass">
.section-Text
  overflow: hidden
  width: 100%
  &_Title
    margin-bottom: 1.55rem
    overflow: visible
    &_Large
      line-height: 1
    &_Medium
      line-height: 1
    &_Small
      line-height: 1.55
  img
    width: 100%
    height: auto
    max-width: 100%
    margin-top: 1.5rem
    margin-bottom: 1.5rem
  .markdown
    max-width: var(--max-width)
</style>
