<template>
  <section class="section section-Quote section-TextContent carouselOnScroll">
    <div class="section-Quote_Wrapper carouselOnScroll-Wrapper">
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
      <div class="section-Quote_Item">
        <h1>{{ blok.quote }}&nbsp;</h1>
      </div>
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
.section-Quote
    padding-left: 0
    padding-right: 0
    text-transform: uppercase
    width: 100vw
    overflow-x: hidden
    &_Wrapper
        display: flex
        flex-wrap: nowrap
    &_Item
        h1
            white-space: nowrap
            font-size: 15vw
        &:first-child
            margin-left: var(--spacing-content-sides)
</style>
