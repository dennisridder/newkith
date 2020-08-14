<template>
  <header class="header">
    <div class="header-Background"></div>
    <ul class="header-Logo">
      <nuxt-link to="/" tag="li">
        <h2>#NewKith</h2>
      </nuxt-link>
    </ul>
    <nav class="header-Nav">
      <ul>
        <nuxt-link to="/" tag="li">Our Services</nuxt-link>
        <!-- <nuxt-link to="/talents" tag="li">Talents</nuxt-link> -->
        <nuxt-link to="/blog" tag="li">Whats Happening</nuxt-link>
        <nuxt-link to="/about" tag="li">Who we ware</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header
  position: fixed
  display: flex
  justify-content: space-between
  top: 0
  left: 0
  right: 0
  padding: 2rem 3rem
  // mix-blend-mode: difference
  z-index: 999
  ul
    display: flex
    justify-content: flex-end
  li
    letter-spacing: .01rem
    cursor: pointer
    margin-right: 1rem
    &:last-child
      margin-right: 0
  &-Nav
    li
      border-bottom: 2px solid rgba(0, 0, 0, 0)
      transition: border-bottom .165s ease
      &:hover, &.nuxt-link-exact-active
        text-decoration: none
        border-bottom: 2px solid white
        padding-bottom: .5rem
  &-Logo
    li
      opacity: 1
      text-transform: uppercase
  &-Background
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    background: $support-color
    z-index: -1
    transform: translateY(-100%)
    transition: transform .165s ease
  &:hover
    .header-Background
      transform: translateY(0)
</style>
