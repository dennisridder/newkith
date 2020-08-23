<template>
  <header
    class="header"
    :class="isActive"
    @mouseenter="mouseEnterHeader"
    @mouseleave="mouseLeaveHeader"
  >
    <div class="header-Background"></div>
    <div class="header-Logo">
      <nuxt-link to="/" tag="li">
        <div v-html="require('~/assets/images/logo-hash.svg?include')" />
      </nuxt-link>
    </div>
    <!-- prettire-ignore -->
    <nav class="header-Nav">
      <ul v-if="mainNav == true">
        <li @click="clickServices">
          Our services
        </li>
        <nuxt-link to="/blog" tag="li">What's happening</nuxt-link>
        <nuxt-link to="/about" tag="li">Our story</nuxt-link>
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
export default {
  name: "TheNavigation",
  data() {
    return {
      isActive: "two",
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
    mouseEnterHeader() {
      console.log("ENTER")
      var headerHeight = document.querySelector("header").offsetHeight
      var contentContainer = document.querySelector(".section-Wrapper")
      contentContainer.style.marginTop = headerHeight + "px"
      this.isActive = "two"
    },
    mouseLeaveHeader() {
      console.log("LEAVE")
      var contentContainer = document.querySelector(".section-Wrapper")
      contentContainer.style.marginTop = "0px"
      this.isActive = "one"
    },
    clickServices() {
      this.isActive = "three"
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
$transition-header: .165s ease

.header
  position: fixed
  left: 0
  top: 0
  right: 0
  display: flex
  justify-content: space-between
  align-items: center
  padding: 3rem var(--spacing-content-sides)
  z-index: 999
  color: white !important
  transition: mix-blend-mode $transition-header
  &.one
    mix-blend-mode: difference
  &.two
    .header-Background
      transform: translateY(0)
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
      transition: border-bottom $transition-header
      cursor: pointer
      &:hover, &.nuxt-link-exact-active
        text-decoration: none
        border-bottom: 2px solid white
        padding-bottom: .5rem
  &-Logo
    li
      svg
        height: 2rem
  &-Background
    position: absolute
    left: 0
    top: 0
    right: 0
    height: 100%
    background: $support-color
    z-index: -1
    transform: translateY(-100%)
    transition: transform $transition-header
</style>
