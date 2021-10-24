<!-- prettier-ignore -->
<template>
  <section
    v-editable="blok"
    class="section section-Columns"
  >
    <div class="section-Columns-Column section-Columns-Column--Left" :style="{ 'text-align': blok.column_left_align }">
      <component
        :is="item.component | dashify"
        v-for="item in blok.column_left"
        :key="item._uid"
        :blok="item"
      ></component>
    </div>
    <div class="section-Columns-Column section-Columns-Column--Right" :style="{ 'text-align': blok.column_right_align }">
      <component
        :is="item.component | dashify"
        v-for="item in blok.column_right"
        :key="item._uid"
        :blok="item"
      ></component>
    </div>
  </section>
</template>

<script>
// import MarkdownItem from "@/components/MarkdownItem.vue"

export default {
  props: {
    blok: Object
  },
  mounted() {}
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Columns
  display: flex
  flex-flow: row wrap
  align-items: center
  margin-top: var(--spacing-content-top)
  margin-bottom: var(--spacing-content-bottom)

  &-Column
    flex-basis: 50%
    padding-left: var(--spacing-content-sides)
    padding-right: var(--spacing-content-sides)

    *
      --spacing-content-bottom: 1em

    @media screen and (max-width: $breakpoint-mobile)
      flex-basis: 100%

    .markdown
      max-width: 600px
      white-space: initial

      h2,
      h3,
      p
        margin-bottom: 1em

      strong
        font-weight: 700

    .section-ImageContent,
    .section-TextContent
      padding-left: 0
      padding-right: 0
</style>
