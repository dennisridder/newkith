<template>
  <div class="section-Wrapper">
    <section class="section section-Landing section-TextContent">
      <blok-title-animated
        :words="['Meet', 'our', 'talents']"
        wordswap="false"
      />
    </section>
    <blok-filter-list :array="filterList" />
    <section class="section section-Talents">
      <blok-image-grid
        class="verticalRowIrregular"
        :array="talentsList"
        slug="/talents/"
      />
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import landingScrollSpeed from "@/mixins/landingScrollSpeed"
import { mapState } from "vuex"

export default {
  mixins: [storyblokLivePreview, landingScrollSpeed],
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
      talentsList: [],
      filterList: []
    }
  },
  computed: {
    ...mapState({
      talents: state => state.talents.list
    })
  },
  mounted() {
    this.filterTalents()
    this.filterArray()
  },
  methods: {
    filterTalents() {
      let array = this.talents
      let filteredArray = array.slice(1)
      this.talentsList = filteredArray
    },
    filterArray() {
      var array = this.talentsList
      var filteredArray = array.map(el => {
        return el.taglist[0]
      })
      // Remove duplicates
      const uniqueSet = new Set(filteredArray)
      const backToArray = [...uniqueSet]
      // Set filterList data
      this.filterList = backToArray
    }
  }
}
</script>
