<template>
  <div class="section-Wrapper section-Wrapper_Homepage">
    <blok-landing :words="story.content.landing_animation_words" />
    <blok-title :words="[`${story.content.cases_header}`]" />
    <blok-image-grid
      v-if="caseList"
      :array="caseList | shuffle | showOnlyFirstX(3)"
      slug="/cases/"
    />
    <section
      class="section section-ImageGridFooter section-TextContent scrollFast"
    >
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.cases_footer_title }}</h2>
        <markdown-item :input="story.content.cases_footer_text" />
        <nuxt-link
          to="/cases"
          tag="div"
          class="section-ImageGridFooter_Link cursorInteract button"
        >
          <span>See all our cases</span>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </nuxt-link>
      </div>
    </section>
    <blok-quote :blok="story.content" />
    <blok-title :words="[`${story.content.talents_header}`]" />
    <blok-image-grid
      v-if="talentList"
      :array="talentList | shuffle | showOnlyFirstX(5)"
      slug="/talents/"
    />
    <section
      class="section section-ImageGridFooter section-TextContent scrollFast"
    >
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.talents_footer_title }}</h2>
        <markdown-item :input="story.content.talents_footer_text" />
        <nuxt-link
          to="/talents"
          tag="div"
          class="section-ImageGridFooter_Link button cursorInteract"
        >
          <span>
            See all our talents
          </span>
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
      landingInput: [],
      talentList: [],
      caseList: []
    }
  },
  computed: {
    ...mapState({
      cases: state => state.cases.list,
      talents: state => state.talents.list,
      general: state => state.general.list
    })
  },
  mounted() {
    this.getLandingInput()
    this.filterTalents()
    this.filterCases()
  },
  methods: {
    filterTalents() {
      this.talentList = this.talents.slice(1)
    },
    filterCases() {
      this.caseList = this.cases.slice(1)
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
    }
  },
  head() {
    return {
      title: this.story.name.toUpperCase() + " — #NEWKITH",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.general[0].content.website_description
        }
      ]
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
