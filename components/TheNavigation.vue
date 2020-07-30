<template>
  <header>
    <ul class="header-Logo">
      <nuxt-link to="/" tag="li">#NewKith</nuxt-link>
    </ul>
    <nav>
      <ul>
        <nuxt-link to="/" tag="li">Our work</nuxt-link>
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
header
  position: fixed
  display: flex
  justify-content: space-between
  top: 0
  left: 0
  right: 0
  padding: 2rem 3rem
  ul
    display: flex
    justify-content: flex-end
  li
    font-family: 'Basis Grotesk Bold', Helvetica, Arial, sans-serif
    text-transform: uppercase
    opacity: .25
    letter-spacing: .01rem
    text-decoration: none
    cursor: pointer
    margin-right: 1rem
    transition: opacity .33s ease
    &:last-child
      margin-right: 0
    &:hover
      opacity: 1
    &.nuxt-link-exact-active
      opacity: 1
      text-decoration: none
  .header-Logo
    li
      opacity: 1
</style>
