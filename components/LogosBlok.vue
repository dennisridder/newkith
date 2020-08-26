<template>
  <section class="section section-Logos section-TextContent">
    <p>Our partners:</p>
    <div class="section-Logos_Content">
      <ul>
        <component
          :is="blok.component | dashify"
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
        ></component>
        <component
          :is="blok.component | dashify"
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
        ></component>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Logos
    padding-left: 0
    padding-right: 0
    p
        margin-left: var(--spacing-content-sides)
        margin-bottom: var(--spacing-one)
    &_Content
        width: 100vw
        overflow-x: auto
        display: flex
        flex-wrap: nowrap
        border-top: $border
        border-bottom: $border
        padding-top: 1.5rem
        padding-bottom: 1.5rem
    ul
        display: flex
        flex-wrap: nowrap
        height: 6.5rem
        animation: carouselLeft 60s infinite linear
        animation-direction: alternate
        animation-play-state: running
</style>
