<template>
  <header class="header" :class="{ active: isActive }">
    <!-- <div class="header-Background"></div> -->
    <div class="header-Logo">
      <nuxt-link to="/" tag="li">
        <div v-html="require('~/assets/images/logo-hash.svg?include')" />
      </nuxt-link>
    </div>
    <nav class="header-Nav">
      <!-- prettier-ignore -->
      <ul v-if="mainNav == true">
        <li :class="{ active: isActive }" @click="toggleHeader">Our services</li>
        <nuxt-link  to="/blog" tag="li" @click="unToggleHeader">What's happening</nuxt-link>
        <nuxt-link to="/about" tag="li" @click="unToggleHeader">Our story</nuxt-link>
      </ul>
      <ul v-if="pageType === 'blogSlug'">
        <nuxt-link to="/blog" tag="li">back</nuxt-link>
      </ul>
      <ul v-if="pageType === 'talentSlug'">
        <nuxt-link to="/talents" tag="li">back</nuxt-link>
      </ul>
      <ul v-if="pageType === 'caseSlug'">
        <nuxt-link to="/" tag="li">back</nuxt-link>
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
      isActive: false,
      pageType: "initial",
      mainNav: false
    }
  },
  watch: {
    $route() {
      this.checkPageType()
      this.toggleMainNav()
    }
  },
  mounted() {
    this.checkPageType()
    this.toggleMainNav()
  },
  methods: {
    toggleHeader() {
      this.isActive = !this.isActive
    },
    unToggleHeader() {
      this.isActive = false
    },
    checkPageType() {
      if (this.$route.name === "blog-slug") {
        this.pageType = "blogSlug"
      } else if (this.$route.name === "cases-slug") {
        this.pageType = "caseSlug"
      } else if (this.$route.name === "talents-slug") {
        this.pageType = "talentSlug"
      } else {
        this.pageType = "error"
      }
    },
    toggleMainNav() {
      if (
        this.$route.name === "blog-slug" ||
        this.$route.name === "cases-slug" ||
        this.$route.name === "talents-slug"
      ) {
        this.mainNav = false
      } else {
        this.mainNav = true
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.header
  position: fixed
  left: 0
  top: 0
  right: 0
  display: flex
  justify-content: space-between
  padding: 3rem var(--spacing-content-sides)
  z-index: 999
  color: white !important
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
      svg
        height: 1.75rem
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
