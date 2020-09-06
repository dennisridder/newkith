<template>
  <div class="section-Wrapper section-Wrapper_Homepage">
    <blok-landing
      :words="['Newkith', 'talent', 'Connective', 'Online', 'agency']"
    />
    <blok-title :words="[`${story.content.cases_header}`]" />
    <blok-image-grid v-if="casesList" :array="casesList" slug="/cases/" />
    <section
      class="section section-ImageGridFooter section-TextContent scrollFast"
    >
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.cases_footer_title }}</h2>
        <markdown-item :input="story.content.cases_footer_text" />
        <nuxt-link
          to="/cases"
          tag="div"
          class="section-ImageGridFooter_Link link cursorInteract"
        >
          <h4>See all our cases</h4>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </nuxt-link>
      </div>
    </section>
    <blok-quote :blok="story.content" />
    <blok-title :words="[`${story.content.talents_header}`]" />
    <blok-image-grid v-if="talentsList" :array="talentsList" slug="/talents/" />
    <section
      class="section section-ImageGridFooter section-TextContent scrollFast"
    >
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.talents_footer_title }}</h2>
        <markdown-item :input="story.content.talents_footer_text" />
        <nuxt-link
          to="/talents"
          tag="div"
          class="section-ImageGridFooter_Link link cursorInteract"
        >
          <h4>
            See all our talents
          </h4>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import scrollFast from "@/mixins/scrollFast"
import scrollSlow from "@/mixins/scrollSlow"
import carouselOnScroll from "@/mixins/carouselOnScroll"
import MarkdownItem from "@/components/MarkdownItem.vue"

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  mixins: [storyblokLivePreview, carouselOnScroll, scrollFast, scrollSlow],
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
  },
  methods: {
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
