<template>
  <div v-editable="story.content" class="section-Wrapper">
    <section class="section section-Landing section-TextContent">
      <blok-title-animated
        :words="['Newkith', 'talent', 'Connective', 'Online', 'agency']"
        :wordswap="true"
      />
    </section>
    <section class="section section-Title section-TextContent slowerScroll">
      <blok-title-animated
        class="section-ImageGrid_Title"
        :words="['Cases']"
        :wordswap="false"
      />
    </section>
    <!-- <blok-filter-list v-if="filterListCases" :array="filterListCases" /> -->
    <blok-image-grid
      v-if="casesList"
      :array="casesList"
      slug="/cases/"
      title="Cases"
    />
    <section
      class="section section-ImageGridFooter section-TextContent slowScroll"
    >
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.body[0].cases_imagegrid_title }}</h2>
        <markdown-item :input="story.content.body[0].cases_imagegrid_text" />
        <nuxt-link
          to="/cases"
          tag="div"
          class="section-ImageGridFooter_Link cursorInteract"
          ><h4>See more</h4>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
        /></nuxt-link>
      </div>
    </section>
    <!-- <blok-filter-list v-if="filterListTalents" :array="filterListTalents" /> -->
    <section class="section section-Title section-TextContent slowerScroll">
      <blok-title-animated
        class="section-ImageGrid_Title"
        :words="['Talents']"
        :wordswap="false"
      />
    </section>
    <blok-image-grid
      v-if="talentsList"
      :array="talentsList"
      slug="/talents/"
      title="Talents"
    />
    <section
      class="section section-ImageGridFooter section-TextContent slowScroll"
    >
      <div class="section-ImageGridFooter_Content">
        <h2>{{ story.content.body[0].talents_imagegrid_title }}</h2>
        <markdown-item :input="story.content.body[0].talents_imagegrid_text" />
        <nuxt-link
          to="/talents"
          tag="div"
          class="section-ImageGridFooter_Link cursorInteract"
          ><h4>See more</h4>
          <div
            class="icon"
            v-html="require('~/assets/images/icon-arrow.svg?include')"
        /></nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import landingScroll from "@/mixins/landingScroll"
import fastScroll from "@/mixins/fastScroll"
import slowScroll from "@/mixins/slowScroll"
import MarkdownItem from "@/components/MarkdownItem.vue"
import { mapState } from "vuex"

export default {
  components: {
    "markdown-item": MarkdownItem
  },
  mixins: [storyblokLivePreview, landingScroll, fastScroll, slowScroll],
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
      talentsList: []
      // filterListCases: [],
      // filterListTalents: []
    }
  },
  computed: {
    ...mapState({
      cases: state => state.cases.list,
      talents: state => state.talents.list
    })
  },
  mounted() {
    this.filterCases()
    this.filterTalents()
  },
  methods: {
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
