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
            :class="{ ascending: sortByTitleToggle }"
            class="icon icon-Arrow"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
          />
        </li>
        <li class="section-Filters_Item cursorInteract all" @click="showAll">
          <span>All</span>
        </li>
        <blok-filter-item
          v-for="tag in taglist"
          :id="tag"
          :key="tag"
          :tag="tag"
          @click.native="filterByValue(tag)"
        />
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
      sortByTitleToggle: true,
      showAllToggle: true,
      taglist: []
    }
  },
  computed: {
    ...mapState({
      talents: state => state.talents.list,
      general: state => state.general.list
    })
  },
  mounted() {
    this.getLandingInput()
    this.resetTalentList()
    this.getTags()
    this.changeActiveClass("all")
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
    resetTalentList() {
      this.talentList = this.talents.slice(1)
      this.sortByTitle(this.talentList)
    },
    // Sort by title
    toggleSortByTitleToggle() {
      this.sortByTitleToggle = !this.sortByTitleToggle
      this.sortByTitle(this.talentList)
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
    },
    // Get tags list
    getTags() {
      // Get talist
      var arrays = this.talentList.map(el => el.taglist)
      // Merge into one array
      var mergedArray = [].concat.apply([], arrays)
      // Remove duplicates
      const duplicatesRemovedArray = new Set(mergedArray)
      const backToArray = [...duplicatesRemovedArray]
      this.taglist = backToArray
    },
    // Sort by tag filter
    filterByValue(string) {
      this.changeActiveClass(string)
      this.resetTalentList()
      this.showAllToggle = false
      var array = this.talentList.filter(o =>
        Object.keys(o).some(k =>
          String(o[k])
            .toLowerCase()
            .includes(string.toLowerCase())
        )
      )
      this.talentList = array
    },
    showAll() {
      this.changeActiveClass("all")
      this.resetTalentList()
      this.showAllToggle = true
    },
    changeActiveClass(value) {
      // Remove all active classes
      var classArray = document.querySelectorAll(".section-Filters_Item")
      classArray.forEach(el => {
        el.classList.remove("active")
      })
      var item = document.querySelector(".section-Filters_Item." + value)
      item.classList.add("active")
    }
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
