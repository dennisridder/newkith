<template>
  <header class="header" :class="isActive" @mouseleave="mouseLeaveAll">
    <div
      class="header-Top header-Top_Desktop"
      @mouseenter="mouseEnterTop"
      @mouseleave="mouseLeaveTop"
    >
      <div class="header-Logo cursorInteract">
        <nuxt-link to="/">
          <div v-html="require('~/assets/images/newkith-logo.svg?include')" />
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
          <nuxt-link
            to="/talents"
            class="nav-Link cursorInteract"
            tag="li"
            @click="otherClick"
            >Talents</nuxt-link
          >
          <nuxt-link
            to="/blog"
            class="nav-Link cursorInteract"
            tag="li"
            @click="otherClick"
            >What's happening</nuxt-link
          >
          <nuxt-link
            to="/about"
            class="nav-Link header-Story cursorInteract"
            tag="li"
            @click="otherClick"
            >Our story</nuxt-link
          >
          <nuxt-link
            to="/contact"
            class="nav-Link cursorInteract"
            tag="li"
            @click="otherClick"
            >Contact</nuxt-link
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
            <div
              v-html="
                require('~/assets/images/newkith-logo-mobile.svg?include')
              "
            />
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
            <nuxt-link
              to="/talents"
              class="cursorInteract"
              tag="li"
              @click="otherClick"
              >Talents</nuxt-link
            >
            <nuxt-link
              to="/blog"
              class="cursorInteract"
              tag="li"
              @click="otherClick"
              >What's happening</nuxt-link
            >
            <nuxt-link
              to="/about"
              class="header-Story cursorInteract"
              tag="li"
              @click="otherClick"
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
        <nuxt-link to="/influencer-marketing" class="link header-ContentText cursorInteract">
          <span>influencer marketing</span>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </nuxt-link>
        <!-- <nuxt-link to="/talents" class="link header-ContentText cursorInteract">
          <span>our talents</span>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </nuxt-link> -->
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
import cursorInteraction from "@/mixins/cursorInteraction"

var timeline = gsap.timeline()

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  mixins: [cursorInteraction],
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
    this.setSectionWrapper()
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
            marginTop: headerTopHeight + "px"
          },
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: headerTopHeight,
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(
          ".header-Nav, .header-Nav li .icon, .header-Top_Mobile_Toggle",
          {
            color: "white",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(
          ".header-Top_Desktop .header-Logo svg, .header-Top_Mobile_Top .header-Logo svg",
          {
            fill: "white",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(".header-Top_Desktop", {
          backgroundColor: "transparent",
          boxShadow: "none",
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
        timeline.clear()
        timeline
          .to(
            ".section-Wrapper",
            {
              css: {
                marginTop: headerTopHeight + "px"
              },
              duration: "0.75",
              ease: "expo.out"
            },
            0
          )
          .to(
            ".header-Background",
            {
              height: headerTopHeight,
              duration: "0.75",
              ease: "expo.out"
            },
            0
          )
          .to(
            ".header-Top_Mobile_Top",
            {
              backgroundColor: "transparent",
              boxShadow: "none",
              duration: "0.75",
              ease: "expo.out"
            },
            0
          )
          .to(
            ".header-Top_Mobile_Top .header-Logo svg, .header-Top_Mobile_Middle, .header-Nav, .header-Top_Mobile_Toggle",
            {
              color: "white",
              fill: "white",
              duration: "0.75",
              ease: "expo.out"
            },
            0
          )
          .to(
            ".header-Top_Mobile_Middle",
            {
              height: "auto",
              opacity: "1",
              duration: "0.6",
              ease: "ease"
            },
            0.2
          )
      }
    },
    mouseLeaveTop() {
      if (this.isActive === "two") {
        gsap.to(".section-Wrapper", {
          css: {
            // marginTop: "10vw"
            marginTop: "140px"
          },
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Background", {
          height: "0",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(
          ".header-Nav, .header-Nav li .icon, .header-Top_Mobile_Toggle",
          {
            color: "black",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(
          ".header-Top_Desktop .header-Logo svg, .header-Top_Mobile_Top .header-Logo svg",
          {
            fill: "black",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(".header-Top_Desktop", {
          backgroundColor: "white",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Top_Mobile_Middle", {
          height: 0,
          opacity: "0",
          duration: "0.4",
          delay: "0",
          ease: "ease"
        })
        this.isActive = "one"
        this.servicesIsActive = false
      }
    },
    otherClick() {
      gsap.to(".header-Top_Desktop, .header-Top_Mobile_Top", {
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        duration: "0.75",
        ease: "expo.out"
      })
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
        gsap.to(
          ".header-Nav, .header-Nav li .icon, .header-Top_Mobile_Toggle",
          {
            color: "white",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(
          ".header-Top_Desktop .header-Logo svg, .header-Top_Mobile_Top .header-Logo svg",
          {
            fill: "white",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(".header-Top_Desktop", {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-ContentTitle, .header-Bottom_Items", {
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
        gsap.to(
          ".header-Nav, .header-Nav li .icon, .header-Top_Mobile_Toggle",
          {
            color: "white",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(
          ".header-Top_Desktop .header-Logo svg, .header-Top_Mobile_Top .header-Logo svg",
          {
            fill: "white",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(".header-Top_Desktop", {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-ContentTitle, .header-Bottom_Items", {
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
            // marginTop: "10vw"
            marginTop: "140px"
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
        gsap.to(
          ".header-Nav, .header-Nav li .icon, .header-Top_Mobile_Toggle",
          {
            color: "black",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(
          ".header-Top_Desktop .header-Logo svg, .header-Top_Mobile_Top .header-Logo svg",
          {
            fill: "black",
            duration: "0.75",
            ease: "expo.out"
          }
        )
        gsap.to(".header-Top_Desktop", {
          backgroundColor: "white",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
          duration: "0.75",
          ease: "expo.out"
        })
        gsap.to(".header-Top_Mobile_Top", {
          backgroundColor: "white",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
          duration: "0.75",
          delay: "0.25",
          ease: "expo.out"
        })
        gsap.to(".header-ContentTitle, .header-Bottom_Items", {
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
      timeline.clear()
      timeline
        .to(
          ".section-Wrapper",
          {
            css: {
              marginTop: ""
            },
            duration: "0.65",
            ease: "expo.out"
          },
          0.25
        )
        .to(
          ".header-Background",
          {
            height: "0",
            duration: "0.65",
            ease: "expo.out"
          },
          0.25
        )
        .to(
          ".header-Nav, .header-Nav li .icon, .header-Top_Mobile_Toggle",
          {
            color: "black",
            duration: "0.75",
            ease: "expo.out"
          },
          0
        )
        .to(
          ".header-Top_Desktop .header-Logo svg, .header-Top_Mobile_Top .header-Logo svg",
          {
            fill: "black",
            duration: "0.75",
            ease: "expo.out"
          },
          0
        )
        .to(".header-Top_Desktop", {
          backgroundColor: "white",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
          duration: "0.75",
          ease: "expo.out"
        })
        .to(
          ".header-Top_Mobile_Top",
          {
            backgroundColor: "white",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
            ease: "expo.out"
          },
          0.25
        )
        .to(".header-ContentTitle, .header-Bottom_Items", {
          opacity: "0",
          duration: "0.4",
          ease: "ease"
        })
        .to(
          ".header-ContentText",
          {
            opacity: "0",
            duration: "0.5",
            ease: "ease"
          },
          0
        )
        .to(
          ".header-Top_Mobile_Middle",
          {
            opacity: "0",
            duration: "0.4",
            ease: "ease"
          },
          0.1
        )
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
    },
    setSectionWrapper() {
      gsap.set(".section-Wrapper", {
        marginTop: ""
      })
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Wrapper
  // margin-top: 10vw
  margin-top: 140px
  > .section-Wrapper
    margin-top: 0 !important

  @media screen and (max-width: $breakpoint-mobile)
    margin-top: 82px !important
    > .section-Wrapper
      margin-top: 0 !important

.header
  position: fixed
  left: 0
  top: 0
  right: 0
  display: flex
  flex-direction: column
  z-index: $z-header
  pointer-events: none
  max-height: 100vh
  max-width: 100vw
  overflow-y: hidden
  @media screen and (max-width: $breakpoint-mobile)
    bottom: 0
  p, a, .icon
    color: white
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
    box-shadow: 0px 2px 10px rgba(0,0,0,0.2)
    -webkit-box-shadow: 0px 2px 10px rgba(0,0,0,0.2)
    background-color: white
    align-items: center
    pointer-events: auto
    padding: 2rem var(--spacing-content-sides)
    .header-Logo
      flex-grow: 1
      svg
        height: 2.125rem
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
      background-color: $bg
      box-shadow: 0px 2px 10px rgba(0,0,0,0.2)
      -webkit-box-shadow: 0px 2px 10px rgba(0,0,0,0.2)
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
      opacity: 0
      padding: 1.25rem
      margin: 0 1.25rem
      @media screen and (min-width: $breakpoint-mobile)
        flex-basis: 33.3333%
      @media screen and (max-width: $breakpoint-mobile)
        margin-bottom: var(--spacing-three)
        @media screen and (max-width: $breakpoint-mobile)
          margin-bottom: var(--spacing-content-bottom)
          padding-bottom: var(--spacing-content-bottom)
  &-Nav
    flex-shrink: 0
    @media screen and (min-width: $breakpoint-mobile)
      margin-left: var(--spacing-content-sides)
    ul
      align-content: center
      display: flex
      flex-wrap: wrap

      @media screen and (max-width: $breakpoint-laptop)
        font-size: 0.875em
    li
      --var: 0%
      position: relative
      display: flex
      align-items: center
      cursor: pointer
      flex-shrink: 0
      .icon
        margin-right: 0
        color: black;
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
    &.hover
      color: red
  &-Services
    pointer-events: auto
  &-ContentTitle
    font-weight: 700
    margin-bottom: 1.5rem
  &-ContentTitle, &-ContentText
    opacity: 0
  li
    letter-spacing: .01rem
    cursor: pointer
    margin-right: 1rem
    padding-top: 0.5rem
    padding-bottom: 0.5rem
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
