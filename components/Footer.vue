<template>
  <footer class="footer section-Footer" :class="{ active: showFooter }">
    <div class="footer-Background"></div>
    <div class="footer-Content">
      <ul>
        <li>
          We are a digital design studio from Auckland, New Zealand specialising
          in the fields of web, motion and new media design.
        </li>
        <li class="footer-Link navLink cursorInteract">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
          Read our story
        </li>
      </ul>
      <ul></ul>
      <ul>
        <nuxt-link class="navLink cursorInteract" to="/" tag="li"
          >Home</nuxt-link
        >
        <nuxt-link class="navLink cursorInteract" to="/cases" tag="li"
          >Cases</nuxt-link
        >
        <nuxt-link class="navLink cursorInteract" to="/talents" tag="li"
          >Talents</nuxt-link
        >
        <nuxt-link class="navLink cursorInteract" to="/blog" tag="li"
          >What's happening</nuxt-link
        >
        <nuxt-link class="navLink cursorInteract" to="/about" tag="li"
          >Our story</nuxt-link
        >
      </ul>
      <ul>
        <li class="navLink cursorInteract">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-mail.svg?include')"
          />
          <a href="mailto:info@newkith.com" target="_blank">
            info@newkith.com
          </a>
        </li>
        <li class="navLink cursorInteract">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-call.svg?include')"
          />
          <a href="tel:0031636101262" target="_blank">
            +31(0)636101262
          </a>
        </li>
        <li class="navLink cursorInteract">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-location.svg?include')"
          />
          <a href="https://goo.gl/maps/EQQuTb834wUmkuQy6" target="_blank">
            Directions
          </a>
        </li>
        <li class="navLink cursorInteract">
          <div
            class="icon"
            v-html="require('~/assets/images/icon-instagram.svg?include')"
          />
          <a href="https://www.instagram.com/new.kith/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </div>
    <nuxt-link class="footer-Logo cursorInteract" to="/" tag="div">
      <div v-html="require('~/assets/images/logo.svg?include')" />
    </nuxt-link>
  </footer>
</template>

<script>
import { gsap } from "gsap"
import lodash from "lodash"

export default {
  data() {
    return {
      scrollPosition: 0,
      showFooter: false
    }
  },
  mounted() {
    this.handleDebouncedScroll = lodash.debounce(this.updateScrollPosition, 50)
    window.addEventListener("scroll", this.handleDebouncedScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleDebouncedScroll)
  },
  methods: {
    updateScrollPosition() {
      this.scrollPosition = window.scrollY
      let scrollHeight = document.body.scrollHeight - window.innerHeight
      if (this.scrollPosition > scrollHeight - 20) {
        this.showFooter = true
      } else {
        this.showFooter = false
      }
      this.displayFooter()
    },
    displayFooter() {
      if (this.showFooter === true) {
        gsap.to(".footer-Background", {
          height: document.querySelector(".footer").offsetHeight,
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header", {
          yPercent: "-100",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".footer-Content", {
          opacity: "1",
          duration: "0.6",
          delay: "0.2",
          ease: "ease"
        })
        gsap.to(".footer-Logo", {
          opacity: "1",
          duration: "0.6",
          delay: "0.1",
          ease: "ease"
        })
      } else {
        gsap.to(".footer-Background", {
          height: "0",
          duration: "0.65",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".header", {
          yPercent: "0",
          duration: "0.65",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".footer-Content", {
          opacity: "0",
          duration: "0.4",
          delay: "0.1",
          ease: "ease"
        })
        gsap.to(".footer-Logo", {
          opacity: "0",
          duration: "0.5",
          ease: "ease"
        })
      }
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.footer
  position: fixed
  left: 0
  bottom: 0
  right: 0
  padding-top: var(--spacing-two)
  z-index: 888
  display: flex
  flex-direction: column
  pointer-events: none
  &.active
    pointer-events: auto
  &-Background
    position: absolute
    left: 0
    bottom: 0
    right: 0
    height: 0
    background: $support-color
    z-index: -1
  &-Content
    opacity: 0
    display: flex
    padding-left: var(--spacing-content-sides)
    padding-right: var(--spacing-content-sides)
    padding-bottom: var(--spacing-three)
    ul
      flex-basis: 25%
    a
      text-decoration: none
    .navLink
      display: flex
      align-items: center
      cursor: pointer
      line-height: 1.8
      .icon
        display: inline
        margin-right: .5rem
        width: 1rem
  &-Logo
    opacity: 0
    padding-left: var(--spacing-content-sides)
    padding-right: var(--spacing-content-sides)
    padding-bottom: var(--spacing-two)
</style>
