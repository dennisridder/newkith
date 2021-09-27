<template>
  <!-- prettier-ignore -->
  <li class="iconTextGrid-Item cursorInteract" :title="item.title">
    <div class="iconTextGrid-Item-Icon">
      <img :src="item.icon.filename" :alt="item.title" />
    </div>

    <div class="iconTextGrid-Item-Details">
      <h3 v-if="item.title">{{ item.title }}</h3>
      <div v-html="richTextContent"></div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    richTextContent() {
      return this.$storyapi.richTextResolver.render(this.item.content)
    }
  },
  mounted() {}
}
</script>

<style lang="sass">

@import '~/assets/styles/variables.sass'

.iconTextGrid-Item
    position: relative
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    margin-bottom: calc(var(--spacing-content-bottom) / 2)

    h3
        font-size: 100%
        margin-bottom: 1em

    &-Icon
      position: relative
      max-width: calc(2rem + 1vw)
      margin-bottom: 1em

      img
        width: 100%
        height: auto
</style>
