<template>
  <header class="header" :class="isActive" @mouseleave="mouseLeaveAll">
    <div class="header-Background"></div>
    <div
      class="header-Top"
      @mouseenter="mouseEnterTop"
      @mouseleave="mouseLeaveTop"
    >
      <div class="header-Logo cursorInteract">
        <nuxt-link to="/" tag="li">
          <div v-html="require('~/assets/images/logo-hash.svg?include')" />
        </nuxt-link>
      </div>
      <!-- prettire-ignore -->
      <nav class="header-Nav">
        <ul v-if="mainNav == true">
          <li class="header-Services cursorInteract" @click="clickServices">
            Our services
          </li>
          <nuxt-link to="/blog" class="cursorInteract" tag="li"
            >What's happening</nuxt-link
          >
          <nuxt-link to="/about" class="cursorInteract" tag="li"
            >Our story</nuxt-link
          >
          <li class="icon cursorInteract">
            <div
              v-html="require('~/assets/images/icon-instagram.svg?include')"
            />
          </li>
          <li class="icon cursorInteract">
            <div v-html="require('~/assets/images/icon-mail.svg?include')" />
          </li>
          <li class="icon cursorInteract">
            <div v-html="require('~/assets/images/icon-call.svg?include')" />
          </li>
        </ul>
        <ul v-if="pageType === 'blogSlug'">
          <nuxt-link to="/blog" class="header-Back cursorInteract" tag="li"
            ><div
              class="icon"
              v-html="require('~/assets/images/icon-arrow.svg?include')"
            />
            &nbsp;back</nuxt-link
          >
        </ul>
        <ul v-if="pageType === 'talentSlug'">
          <nuxt-link to="/talents" class="header-Back cursorInteract" tag="li"
            ><div
              class="icon"
              v-html="require('~/assets/images/icon-arrow.svg?include')"
            />
            &nbsp;back</nuxt-link
          >
        </ul>
        <ul v-if="pageType === 'caseSlug'">
          <nuxt-link to="/" class="header-Back cursorInteract" tag="li"
            ><div
              class="icon"
              v-html="require('~/assets/images/icon-arrow.svg?include')"
            />
            &nbsp;back</nuxt-link
          >
        </ul>
      </nav>
    </div>
    <div class="header-Bottom">
      <div class="header-Bottom_Items">
        <h1 class="header-ContentTitle">New Kith Management</h1>
        <p class="header-ContentText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="header-Bottom_Items">
        <h1 class="header-ContentTitle">New Kith Creative</h1>
        <p class="header-ContentText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="header-Bottom_Items">
        <h1 class="header-ContentTitle">New Kith Academy</h1>
        <p class="header-ContentText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import gsap from "gsap"

export default {
  name: "TheNavigation",
  data() {
    return {
      isActive: "one",
      pageType: "initial",
      mainNav: false,
      services: false
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
    mouseEnterTop() {
      if (this.isActive === "one") {
        this.isActive = "two"
        gsap.to(".section-Wrapper", {
          y: document.querySelector(".header-Top").offsetHeight,
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: document.querySelector(".header-Top").offsetHeight,
          duration: "0.75",
          ease: "expo.out"
        })
      }
    },
    mouseLeaveTop() {
      if (this.isActive === "two") {
        gsap.to(".section-Wrapper", {
          y: "0",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: "0",
          duration: "0.75",
          ease: "expo.out"
        })
        this.isActive = "one"
      }
    },
    clickServices() {
      this.services = !this.services
      if (this.services === true) {
        this.isActive = "three"
        gsap.to(".section-Wrapper", {
          y: document.querySelector(".header").offsetHeight,
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: document.querySelector(".header").offsetHeight,
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-ContentTitle", {
          opacity: "1",
          duration: "0.7",
          delay: "0.1",
          ease: "ease"
        })
        gsap.to(".header-ContentText", {
          opacity: "1",
          duration: "0.6",
          delay: "0.2",
          ease: "ease"
        })
      } else {
        this.isActive = "two"
        gsap.to(".section-Wrapper", {
          y: document.querySelector(".header-Top").offsetHeight,
          duration: "0.65",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: document.querySelector(".header-Top").offsetHeight,
          duration: "0.65",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".header-ContentTitle", {
          opacity: "0",
          duration: "0.4",
          delay: "0.1",
          ease: "ease"
        })
        gsap.to(".header-ContentText", {
          opacity: "0",
          duration: "0.5",
          ease: "ease"
        })
      }
    },
    mouseLeaveAll() {
      if (this.isActive === "three") {
        gsap.to(".section-Wrapper", {
          y: "0",
          duration: "0.65",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: "0",
          duration: "0.65",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".header-ContentTitle", {
          opacity: "0",
          duration: "0.4",
          delay: "0.1",
          ease: "ease"
        })
        gsap.to(".header-ContentText", {
          opacity: "0",
          duration: "0.5",
          ease: "ease"
        })
        this.isActive = "one"
        this.services = false
      }
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
  flex-direction: column
  z-index: 999
  pointer-events: none
  // mix-blend-mode: difference
  &.one
    .header-Top
      pointer-events: auto
  &.two
    // mix-blend-mode: initial
    .header-Top
      pointer-events: auto
  &.three
    // mix-blend-mode: initial
    pointer-events: auto
    .header-Services
      border-bottom: $border
  &-Top
    display: flex
    justify-content: space-between
    padding: 3rem var(--spacing-content-sides)
  &-Bottom
    display: flex
    justify-content: space-between
    gap: var(--spacing-two)
    overflow: hidden
    padding: 3rem var(--spacing-content-sides)
  &-Services
    pointer-events: auto
  &-ContentTitle
    font-family: 'Sohne Buch', Helvetica, Arial, sans-serif
    font-size: 1rem
    margin-bottom: 1.5rem
  &-ContentTitle
    opacity: 0
  &-ContentText
    opacity: 0
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
      cursor: pointer
      padding-bottom: .5rem
      &:hover, &.nuxt-link-exact-active
        text-decoration: none
        border-bottom: $border
    .icon
      display: flex
      justify-content: center
      align-items: flex-start
      height: auto
      padding-bottom: .5rem
      svg
        object-position: top center
  &-Logo
    li
      svg
        height: 2rem
  &-Back
    display: flex
    .icon
      width: 1rem
    svg
      transform: rotate(180deg)
  &-Background
    position: absolute
    left: 0
    top: 0
    right: 0
    height: 0
    background: $support-color
    z-index: -1
    isolation: isolate
</style>
