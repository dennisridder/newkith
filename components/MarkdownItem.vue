<template>
  <div class="markdown" v-html="compiledMarkdown"></div>
</template>

<script>
// https://marked.js.org/
const marked = require("marked")
// const renderer = new marked.Renderer()
marked.setOptions({
  // renderer: new marked.Renderer(),
  breaks: true
})

export default {
  name: "MarkdownItem",
  props: {
    input: String
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input)
    }
  }
}
</script>

<style lang="sass">
.markdown
  white-space: pre-line
  max-width: var(--max-width)
  p
    margin-bottom: 1.5rem
  p:last-child
    margin-bottom: 0
// Prefer style handling by cascading css (typography.sass) as much as possible.
</style>
