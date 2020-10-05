<template>
  <div class="section-Wrapper">
    <blok-landing :words="landingInput" />
    <section class="section section-Filters section-TextContent">
      <ul class="section-Filters_Container">
        <li
          class="section-Filters_Item cursorInteract"
          @click="toggleSortByTitleToggle"
        >
          <span>Sort by name</span>
          <div
            :class="{ active: sortByTitleToggle }"
            class="icon icon-Arrow"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </li>
      </ul>
    </section>
    <blok-image-grid v-if="talentList" :array="talentList" slug="/talents/" />
  </div>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import scrollFast from "@/mixins/scrollFast"
import scrollSlow from "@/mixins/scrollSlow"
import carouselOnScroll from "@/mixins/carouselOnScroll"

export default {
  mixins: [storyblokLivePreview, carouselOnScroll, scrollFast, scrollSlow],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "talents/"
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
      stories: { content: {} },
      landingInput: [],
      talentList: [],
      sortByTitleToggle: true
    }
  },
  computed: {
    ...mapState({
      talents: state => state.talents.list,
      general: state => state.general.list
    })
  },
  mounted() {
    // console.log("TALENT PAGE", this.talents)
    this.getLandingInput()
    this.removeFirst()
    this.toggleSortByTitleToggle()
  },
  methods: {
    getLandingInput() {
      if (this.stories[0].content.landing_text) {
        var landingTextArray = this.stories[0].content.landing_text.split(" ")
        this.landingInput = landingTextArray
      } else {
        var pathTitle = this.$route.path.replace(/\\|\//g, "")
        var pathTitleArray = pathTitle.split("-")
        this.landingInput = pathTitleArray
      }
    },
    removeFirst() {
      this.talentList = this.talents.slice(1)
    },
    toggleSortByTitleToggle() {
      this.sortByTitle(this.talentList)
      this.sortByTitleToggle = !this.sortByTitleToggle
    },
    sortByTitle(values) {
      if (this.sortByTitleToggle) {
        values.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        )
      } else {
        values.sort((a, b) =>
          a.title < b.title ? 1 : b.title < a.title ? -1 : 0
        )
      }
    }
    // filterArray() {
    //   var array = this.talentsList
    //   var filteredArray = array.map(el => {
    //     return el.taglist[0]
    //   })
    //   // Remove duplicates
    //   const uniqueSet = new Set(filteredArray)
    //   const backToArray = [...uniqueSet]
    //   // Set filterList data
    //   this.filterList = backToArray
    // }
  },
  head() {
    return {
      title: this.stories[0].name.toUpperCase() + " — #NEWKITH",
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
