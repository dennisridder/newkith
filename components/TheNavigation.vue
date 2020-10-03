<template>
  <header class="header" :class="isActive" @mouseleave="mouseLeaveAll">
    <div
      class="header-Top header-Top_Desktop"
      @mouseenter="mouseEnterTop"
      @mouseleave="mouseLeaveTop"
    >
      <div class="header-Logo cursorInteract">
        <nuxt-link to="/">
          <div v-html="require('~/assets/images/logo-hash.svg?include')" />
        </nuxt-link>
      </div>
      <nav v-if="mainNav == true" class="header-Nav">
        <ul>
          <li
            class="nav-Link header-Services cursorInteract"
            :class="isActive"
            @click="clickServices"
          >
            Our services
          </li>
          <nuxt-link to="/blog" class="nav-Link cursorInteract" tag="li"
            >What's happening</nuxt-link
          >
          <nuxt-link
            to="/about"
            class="nav-Link header-Story cursorInteract"
            tag="li"
            >Our story</nuxt-link
          >
        </ul>
      </nav>
      <nav v-if="mainNav == true" class="header-Nav header-IconRow">
        <ul>
          <li class="cursorInteract">
            <a
              href="https://www.instagram.com/new.kith/"
              target="_blank"
              rel="noreferrer"
              title="instagram"
            >
              <div
                class="icon"
                v-html="require('~/assets/images/icon-instagram.svg?include')"
              />
            </a>
          </li>
          <li class="cursorInteract">
            <a
              :href="`mailto:${general[0].content.general_email}`"
              target="_blank"
              rel="noreferrer"
              title="mail"
            >
              <div
                class="icon"
                v-html="require('~/assets/images/icon-mail.svg?include')"
              />
            </a>
          </li>
          <li class="cursorInteract">
            <a
              :href="`tel:0031${general[0].content.general_phone_number}`"
              target="_blank"
              rel="noreferrer"
              title="call"
            >
              <div
                class="icon"
                v-html="require('~/assets/images/icon-call.svg?include')"
              />
            </a>
          </li>
        </ul>
      </nav>
      <nav v-if="pageType === 'blogSlug'" class="header-Nav">
        <ul>
          <nuxt-link to="/blog" class="header-Back link cursorInteract" tag="li"
            ><div
              class="icon"
              v-html="require('~/assets/images/icon-arrow.svg?include')"
            />
            <span>&nbsp;back</span></nuxt-link
          >
        </ul>
      </nav>
      <nav v-if="pageType === 'talentSlug'" class="header-Nav">
        <ul>
          <nuxt-link
            to="/talents"
            class="header-Back link cursorInteract"
            tag="li"
            ><div
              class="icon"
              v-html="require('~/assets/images/icon-arrow.svg?include')"
            />
            <span>&nbsp;back</span></nuxt-link
          >
        </ul>
      </nav>
      <nav v-if="pageType === 'caseSlug'" class="header-Nav">
        <ul>
          <nuxt-link
            to="/cases"
            class="header-Back link cursorInteract"
            tag="li"
            ><div
              class="icon"
              v-html="require('~/assets/images/icon-arrow.svg?include')"
            />
            <span>&nbsp;back</span></nuxt-link
          >
        </ul>
      </nav>
    </div>
    <!-- HEADER MOBILE -->
    <div class="header-Top header-Top_Mobile">
      <div class="header-Top_Mobile_Top">
        <div class="header-Logo cursorInteract">
          <nuxt-link to="/">
            <div v-html="require('~/assets/images/icon-hash.svg?include')" />
          </nuxt-link>
        </div>
        <nav class="header-Top_Mobile_Toggle">
          <ul>
            <nuxt-link
              v-if="pageType === 'blogSlug'"
              to="/talents"
              class="header-Back link cursorInteract"
              tag="li"
              ><div
                class="icon"
                v-html="require('~/assets/images/icon-arrow.svg?include')"
              />
              &nbsp;Back
            </nuxt-link>
            <nuxt-link
              v-if="pageType === 'talentSlug'"
              to="/talents"
              class="header-Back link cursorInteract"
              tag="li"
              ><div
                class="icon"
                v-html="require('~/assets/images/icon-arrow.svg?include')"
              />
              &nbsp;Back</nuxt-link
            >
            <nuxt-link
              v-if="pageType === 'caseSlug'"
              to="/cases"
              class="header-Back link cursorInteract"
              tag="li"
              ><div
                class="icon"
                v-html="require('~/assets/images/icon-arrow.svg?include')"
              />
              &nbsp;Back</nuxt-link
            >
            <li
              v-if="
                isActive === 'one' &&
                  pageType !== 'caseSlug' &&
                  pageType !== 'talentSlug' &&
                  pageType !== 'blogSlug'
              "
              class="cursorInteract"
              @click="mouseEnterTopMobile"
            >
              Menu
            </li>
            <li
              v-if="isActive === 'two' || isActive === 'three'"
              class="cursorInteract"
              @click="mouseLeaveAllMobile"
            >
              Close
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-Top_Mobile_Middle">
        <nav class="header-Nav">
          <ul>
            <li class="header-Services cursorInteract" @click="clickServices">
              Our services
            </li>
            <nuxt-link to="/blog" class="cursorInteract" tag="li"
              >What's happening</nuxt-link
            >
            <nuxt-link to="/about" class="header-Story cursorInteract" tag="li"
              >Our story</nuxt-link
            >
          </ul>
        </nav>
      </div>
    </div>
    <!-- HEADER BOTTOM -->
    <div class="header-Bottom">
      <div class="header-Bottom_Items">
        <p class="header-ContentTitle">
          {{ general[0].content.header_title_column_one }}
        </p>
        <markdown-item
          class="header-ContentText"
          :input="general[0].content.header_text_column_one"
        />
        <nuxt-link to="/talents" class="link header-ContentText cursorInteract">
          <span>our talents</span>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </nuxt-link>
      </div>
      <div class="header-Bottom_Items">
        <p class="header-ContentTitle">
          {{ general[0].content.header_title_column_two }}
        </p>
        <markdown-item
          class="header-ContentText"
          :input="general[0].content.header_text_column_two"
        />
        <nuxt-link to="/cases" class="link header-ContentText cursorInteract">
          <span>selected cases</span>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </nuxt-link>
      </div>
      <div class="header-Bottom_Items">
        <p class="header-ContentTitle">
          {{ general[0].content.header_title_column_three }}
        </p>
        <markdown-item
          class="header-ContentText"
          :input="general[0].content.header_text_column_three"
        />
      </div>
    </div>
  </header>
</template>

<script>
import gsap from "gsap"
import { mapState } from "vuex"
import MarkdownItem from "@/components/MarkdownItem.vue"

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  data() {
    return {
      isActive: "one",
      servicesIsActive: false,
      pageType: "initial",
      mainNav: false,
      services: false
    }
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  watch: {
    $route() {
      this.checkPageType()
      this.toggleMainNav()
      this.routeChange()
    }
  },
  mounted() {
    this.checkPageType()
    this.toggleMainNav()
  },
  methods: {
    routeChange() {
      this.mouseLeaveAllMobile()
    },
    mouseEnterTop() {
      var headerTopHeight = document.querySelector(".header-Top_Desktop")
        .offsetHeight
      if (this.isActive === "one") {
        this.isActive = "two"
        this.servicesIsActive = true
        gsap.to(".section-Wrapper", {
          css: {
            marginTop: headerTopHeight
          },
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: headerTopHeight,
          duration: "0.75",
          ease: "expo.out"
        })
      }
    },
    mouseEnterTopMobile() {
      var headerTopHeight = document.querySelector(".header-Top_Mobile")
        .offsetHeight
      if (this.isActive === "one") {
        this.isActive = "two"
        this.servicesIsActive = true
        gsap.to(".section-Wrapper", {
          css: {
            marginTop: headerTopHeight
          },
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: headerTopHeight,
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Top_Mobile_Middle", {
          opacity: "1",
          duration: "0.6",
          delay: "0.2",
          ease: "ease"
        })
      }
    },
    mouseLeaveTop() {
      if (this.isActive === "two") {
        gsap.to(".section-Wrapper", {
          css: {
            marginTop: 0
          },
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: "0",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Top_Mobile_Middle", {
          opacity: "0",
          duration: "0.4",
          delay: "0",
          ease: "ease"
        })
        this.isActive = "one"
        this.servicesIsActive = false
      }
    },
    clickServices() {
      this.services = !this.services
      if (this.services === true) {
        this.isActive = "three"
        gsap.to(".section-Wrapper", {
          css: {
            marginTop: document.querySelector(".header").offsetHeight
          },
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
        var topHeight =
          document.querySelector(".header-Top_Desktop").offsetHeight +
          document.querySelector(".header-Top_Mobile").offsetHeight
        gsap.to(".section-Wrapper", {
          css: {
            marginTop: topHeight
          },
          duration: "0.65",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: topHeight,
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
          css: {
            marginTop: 0
          },
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
        gsap.to(".header-Top_Mobile_Middle", {
          opacity: "0",
          duration: "0.4",
          delay: "0.1",
          ease: "ease"
        })
        this.isActive = "one"
        this.services = false
      }
    },
    mouseLeaveAllMobile() {
      gsap.to(".section-Wrapper", {
        css: {
          marginTop: 0
        },
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
      gsap.to(".header-Top_Mobile_Middle", {
        opacity: "0",
        duration: "0.4",
        delay: "0.1",
        ease: "ease"
      })
      this.isActive = "one"
      this.services = false
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
  max-height: 100vh
  overflow-y: auto
  @media screen and (max-width: $breakpoint-mobile)
    bottom: 0
  &.two
    .header-Top_Mobile_Middle
      pointer-events: auto
  &.three
    pointer-events: auto
  &-Top
    display: flex
    flex-wrap: nowrap
    flex-shrink: 0
    @media screen and (max-width: $breakpoint-mobile)
      align-items: flex-start
  &-Top_Desktop
    align-items: center
    pointer-events: auto
    padding: 3rem var(--spacing-content-sides)
    .header-Logo
      flex-grow: 1
      svg
        height: 2rem
    @media screen and (max-width: $breakpoint-mobile)
      display: none
  &-Top_Mobile
    flex-direction: column
    &_Toggle
      pointer-events: auto
      .icon
        transform: translateY(2px)
    &_Top
      display: flex
      width: 100%
      padding: var(--spacing-content-sides)
      justify-content: space-between
      align-items: center
      .header-Logo
        pointer-events: auto
        svg
          height: 2rem
    &_Middle
      width: 100%
      padding-left: var(--spacing-content-sides)
      padding-right: var(--spacing-content-sides)
      padding-bottom: var(--spacing-content-sides)
      opacity: 0
    @media screen and (min-width: $breakpoint-mobile)
      display: none
  &-Bottom
    display: flex
    justify-content: space-between
    padding: 3rem var(--spacing-content-sides)
    @media screen and (max-width: $breakpoint-mobile)
      flex-direction: column
      justify-content: flex-start
    &_Items
      @media screen and (min-width: $breakpoint-mobile)
        flex-basis: 33.3333%
        padding-left: 1.25rem
        padding-right: 1.25rem
      @media screen and (max-width: $breakpoint-mobile)
        margin-bottom: var(--spacing-three)
      &:first-child
        padding-left: 0
      &:last-child
        padding-right: 0
        @media screen and (max-width: $breakpoint-mobile)
          margin-bottom: var(--spacing-content-bottom)
          padding-bottom: var(--spacing-content-bottom)
  &-Nav
    flex-shrink: 0
    @media screen and (min-width: $breakpoint-mobile)
      margin-left: var(--spacing-content-sides)
    ul
      display: flex
      flex-wrap: wrap
    li
      --var: 0%
      position: relative
      display: flex
      align-items: center
      cursor: pointer
      flex-shrink: 0
      .icon
        margin-right: 0
      &::before
        content: ''
        position: absolute
        left: 0
        display: inline-block
        bottom: -5px
        top: 0
        width: var(--var)
        z-index: 0
        border-bottom: $border
      &:hover, &.nuxt-link-exact-active
        text-decoration: none
      &.nuxt-link-exact-active, &.three
        &::before
          animation: hyperLink .33s ease-out
          animation-iteration-count: 1
          animation-fill-mode: both
  &-Services
    pointer-events: auto
  &-ContentTitle
    margin-bottom: 1.5rem
  &-ContentTitle, &-ContentText
    opacity: 0
  li
    letter-spacing: .01rem
    cursor: pointer
    margin-right: 1rem
    &:last-child
      margin-right: 0
      .icon
        margin-right: 0
  &-Back
    display: flex
    span
      margin-left: .5rem
      line-height: 1.25
    svg
      transform: rotate(180deg)
  &-Background
    position: fixed
    left: 0
    top: 0
    right: 0
    height: 0
    background: $support-color
    z-index: 1
    isolation: isolate
</style>
