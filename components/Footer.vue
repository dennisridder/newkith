<template>
  <section class="section section-Footer">
    <ul>
      <li>
        <h1>Footer</h1>
      </li>
    </ul>
    <ul></ul>
    <ul>
      <li>
        <h4>What we do</h4>
      </li>
      <li>
        <h4>What's happening</h4>
      </li>
      <li>
        <h4>Who we are</h4>
      </li>
    </ul>
    <ul>
      <li>
        <h4>Cases</h4>
      </li>
      <li>
        <h4>Talens</h4>
      </li>
      <li>
        <h4>Academy</h4>
      </li>
      <li>
        <h4>Contact</h4>
      </li>
    </ul>
  </section>
</template>

<style lang="sass" scoped>
@import '~/assets/styles/variables.sass'

.section-Footer
  position: fixed
  right: 0
  bottom: 0
  left: 0
  display: flex
  background: $support-color
  z-index: -1
  ul
    flex-basis: 25%
</style>
