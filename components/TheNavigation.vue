<template>
  <header class="header" :class="{ active: isActive }">
    <div class="header-Background"></div>
    <div class="header-Mega">
      <h1 @click="toggleHeader">NEWKITH</h1>
    </div>
    <!-- <ul class="header-Logo">
      <nuxt-link to="/" tag="li">
        <h2>#NewKith</h2>
      </nuxt-link>
    </ul>-->
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
// import gsap from "gsap"
// import $ from "jquery"

export default {
  name: "TheNavigation",
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    toggleHeader() {
      this.isActive = !this.isActive
    }
    // toggleHeader() {
    //   var mega = ".header-Mega"
    //   gsap.to(mega, 1, {})
    // }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header
  position: relative
  display: flex
  justify-content: flex-end
  padding: 2rem 3rem
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
      cursor: pointer
      &:hover, &.nuxt-link-exact-active
        text-decoration: none
        border-bottom: 2px solid white
        padding-bottom: .5rem
  &-Logo
    li
      opacity: 1
      text-transform: uppercase
  &-Mega
    position: absolute
    display: block
    left: 0
    top: 0
    padding-top: 2rem
    padding-left: 3rem
    h1
      font-size: 2rem
      cursor: pointer
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
  &.active
    height: 100vh
    .header-Background
      transform: translateY(0)
    .header-Mega
      position: absolute
      display: inline-block
      left: 0
      bottom: 0
      top: auto
      right: 0
      h1
        font-size: 21vw
  &:hover
    .header-Background
      transform: translateY(0)
</style>
