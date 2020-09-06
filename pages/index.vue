<template>
  <div class="section-Wrapper section-Wrapper_Homepage">
    <blok-landing
      :words="['Newkith', 'talent', 'Connective', 'Online', 'agency']"
    />
    <blok-title
      class="section-ImageGrid_Title"
      :words="[`${story.content.cases_header}`]"
    />
    <blok-image-grid
      v-if="casesList"
      :array="casesList"
      slug="/cases/"
      title="Cases"
    />
    <section class="section section-ImageGridFooter section-TextContent">
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.cases_footer_title }}</h2>
        <markdown-item :input="story.content.cases_footer_text" />
        <nuxt-link
          to="/cases"
          tag="div"
          class="section-ImageGridFooter_Link link cursorInteract"
        >
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
          <p>See all our cases</p>
        </nuxt-link>
      </div>
    </section>
    <blok-quote :blok="story.content" />
    <blok-title
      class="section-ImageGrid_Title"
      :words="[`${story.content.talents_header}`]"
    />
    <blok-image-grid
      v-if="talentsList"
      :array="talentsList"
      slug="/talents/"
      title="Talents"
    />
    <section class="section section-ImageGridFooter section-TextContent">
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.talents_footer_title }}</h2>
        <markdown-item :input="story.content.talents_footer_text" />
        <nuxt-link
          to="/talents"
          tag="div"
          class="section-ImageGridFooter_Link link cursorInteract"
        >
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
          <p>
            See all our talents
          </p>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import fastScroll from "@/mixins/fastScroll"
import slowScroll from "@/mixins/slowScroll"
import carouselOnScroll from "@/mixins/carouselOnScroll"
import MarkdownItem from "@/components/MarkdownItem.vue"
import { mapState } from "vuex"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  mixins: [storyblokLivePreview, fastScroll, slowScroll, carouselOnScroll],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: "Failed to receive content form api"
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          })
        }
      })
  },
  data() {
    return {
      story: { content: {} },
      casesList: [],
      talentsList: [],
      landingInput: []
    }
  },
  computed: {
    ...mapState({
      cases: state => state.cases.list,
      talents: state => state.talents.list
    })
  },
  mounted() {
    this.getLandingInput()
    this.filterCases()
    this.filterTalents()
    this.scrollSpeedTitles()
  },
  methods: {
    scrollSpeedTitles() {
      var titles = document.querySelectorAll(".section-Title")
      const mq = window.matchMedia("(min-width: 768px)")
      if (mq.matches) {
        titles.forEach(el => {
          gsap.to(el, {
            y: ScrollTrigger.maxScroll(window) * 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: true,
              start: "top bottom",
              end: "+=175%"
            }
          })
        })
      }
    },
    getLandingInput() {
      if (this.story.content.landing_text) {
        var landingTextArray = this.story.content.landing_text.split(" ")
        this.landingInput = Object.values(landingTextArray)
      } else {
        var pathTitle = this.$route.path.replace(/\\|\//g, "")
        var pathTitleArray = pathTitle.split("-")
        this.landingInput = Object.values(pathTitleArray)
      }
    },
    shuffle(arr) {
      function getRandomInt(n) {
        return Math.floor(Math.random() * n)
      }
      var n = arr.length // Length of the array

      for (var i = 0; i < n - 1; ++i) {
        var j = getRandomInt(n) // Get random of [0, n-1]

        var temp = arr[i] // Swap arr[i] and arr[j]
        arr[i] = arr[j]
        arr[j] = temp
      }
    },
    filterCases() {
      // Clone array
      let array = this.cases.slice(0)
      array.shift()
      this.shuffle(array)
      let filteredArray = array.slice(1, 4)
      this.casesList = filteredArray
    },
    filterTalents() {
      let array = this.talents.slice(0)
      array.shift()
      this.shuffle(array)
      let filteredArray = array.slice(1, 6)
      this.talentsList = filteredArray
    }
  }
}
</script>

<style lang="sass" scoped>
.imageGrid
  &.verticalRowIrregular
    .imageGrid-Row
      &:last-child
        justify-content: flex-end
</style>
