<template>
  <div class="section-Wrapper">
    <blok-landing :words="landingInput" />
    <component
      :is="stories[0].content.component | dashify"
      v-if="stories[0].content.component"
      :key="stories[0].content._uid"
      :blok="stories[0].content"
    ></component>
    <!-- <section class="section section-Filters section-TextContent">
      <ul class="section-Filters_Container">
        <li class="section-Filters_Item cursorInteract">
          <input v-model="searchQuery" placeholder="Search..." />
          <div
            class="icon icon-Search"
            v-html="require('~/assets/images/icon-search.svg?include')"
          />
        </li>
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
    </section> -->
    <blok-image-grid v-if="list" :array="list" slug="/talents/" />

    <div
      v-if="bottomContent && bottomContent.length"
      class="section-Wrapper section-Bottom"
    >
      <component
        :is="blok.component | dashify"
        v-for="blok in bottomContent"
        :key="blok._uid"
        v-editable="blok"
        :blok="blok"
      ></component>
    </div>
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
      list: [],
      sortByTitleToggle: true,
      showAllToggle: true,
      taglist: [],
      searchQuery: ""
    }
  },
  computed: {
    ...mapState({
      talents: state => state.talents.list,
      general: state => state.general.list
    }),
    bottomContent() {
      return this.stories ? this.stories[0].content.bottom : []
    }
  },
  mounted() {
    this.getLandingInput()
    this.resetList()
    this.getTags()
    // this.changeActiveClass("all")
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
    resetList() {
      this.list = this.talents.slice(1)
      this.sortByTitle(this.list)
    },
    filterItems(presets) {
      // https://stackoverflow.com/questions/46274647/use-v-model-to-search-in-v-for-array-vue-js
      this.showAllToggle = false
      var app = this
      return presets.filter(function(preset) {
        let regex = new RegExp("(" + app.searchQuery + ")", "i")
        return preset.title.match(regex)
      })
    },
    toggleSortByTitleToggle() {
      this.sortByTitleToggle = !this.sortByTitleToggle
      this.sortByTitle(this.list)
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
    getTags() {
      var arrays = this.list.map(el => el.taglist)
      var mergedArray = [].concat.apply([], arrays)
      const duplicatesRemovedArray = new Set(mergedArray)
      const backToArray = [...duplicatesRemovedArray]
      this.taglist = backToArray
    },
    filterByValue(string) {
      this.changeActiveClass(string)
      this.resetList()
      this.showAllToggle = false
      var array = this.list.filter(o =>
        Object.keys(o).some(k =>
          String(o[k])
            .toLowerCase()
            .includes(string.toLowerCase())
        )
      )
      this.list = array
    },
    showAll() {
      this.changeActiveClass("all")
      this.resetList()
      this.showAllToggle = true
    },
    changeActiveClass(value) {
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
