<template>
  <div v-editable="story.content" class="section-Wrapper">
    <section class="section section-Landing section-TextContent">
      <blok-title-animated
        :words="['Newkith', 'talent', 'Connective', 'Online', 'agency']"
        :wordswap="true"
      />
    </section>
    <blok-filter-list :array="filterListCases" />
    <blok-image-grid
      :array="casesListShuffled"
      slug="/cases/"
      title="Cases"
      rowtype="verticalRowIrregular"
      :footertitle="story.content.body[0].cases_imagegrid_title"
      :footertext="story.content.body[0].cases_imagegrid_text"
    />
    <blok-filter-list :array="filterListTalents" />
    <blok-image-grid
      :array="talentsListShuffled"
      slug="/talents/"
      title="Talents"
      rowtype="verticalRowIrregular"
      :footertitle="story.content.body[0].talents_imagegrid_title"
      :footertext="story.content.body[0].talents_imagegrid_text"
    />
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import landingScrollSpeed from "@/mixins/landingScrollSpeed"
import imageScrollSpeed from "@/mixins/imageScrollSpeed"
import titleScrollSpeed from "@/mixins/titleScrollSpeed"
import { mapState } from "vuex"

export default {
  mixins: [
    storyblokLivePreview,
    landingScrollSpeed,
    imageScrollSpeed,
    titleScrollSpeed
  ],
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
      casesListShuffled: [],
      talentsList: [],
      talentsListShuffled: [],
      filterListCases: [],
      filterListTalents: []
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
    this.filterArrayCases()
    this.filterArrayTalents()
    console.log("DATA HOMEPAGE", this.story)
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
      let array = this.cases
      let filteredArray = array.slice(1, 6)
      this.casesList = filteredArray
      this.shuffle(filteredArray)
      this.casesListShuffled = filteredArray
    },
    filterTalents() {
      let array = this.talents
      let filteredArray = array.slice(1, 4)
      this.talentsList = filteredArray
      this.shuffle(filteredArray)
      this.talentsListShuffled = filteredArray
    },
    filterArrayCases() {
      var array = this.casesList
      var filteredArray = array.map(el => {
        return el.taglist[0]
      })
      // Remove duplicates
      const uniqueSet = new Set(filteredArray)
      const backToArray = [...uniqueSet]
      // Set filterList data
      this.filterListCases = backToArray
    },
    filterArrayTalents() {
      var array = this.talentsList
      var filteredArray = array.map(el => {
        return el.taglist[0]
      })
      // Remove duplicates
      const uniqueSet = new Set(filteredArray)
      const backToArray = [...uniqueSet]
      // Set filterList data
      this.filterListTalents = backToArray
    }
  }
}
</script>
