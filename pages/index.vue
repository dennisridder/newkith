<template>
  <div v-editable="story.content" class="page">
    <section class="section section-Landing">
      <blok-title-animated :words="['Newkith', 'talent', 'agency']" />
    </section>
    <section class="section section-Cases">
      <blok-filter-list :array="filterListCases" />
      <blok-title v-if="story.name" words="Cases" />
      <blok-image-grid
        class="verticalRowIrregular"
        :array="casesList"
        slug="cases"
      />
    </section>
    <section class="section section-Cases">
      <blok-filter-list :array="filterListTalents" />
      <blok-title v-if="story.name" words="Talents" />
      <blok-image-grid
        class="verticalRowIrregular"
        :array="talentsList"
        slug="talents"
      />
    </section>
    <nuxt-link to="/talents">GO TO TALENTS</nuxt-link>
    <component
      :is="story.content.component | dashify"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    ></component>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import { mapState } from "vuex"
// import gsap from "gsap"
// import $ from "jquery"

export default {
  mixins: [storyblokLivePreview],
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
      casesList: {},
      talentsList: {},
      filterListCases: {},
      filterListTalents: {}
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
  },
  methods: {
    filterCases() {
      let array = this.cases
      let filteredArray = array.slice(1)
      this.casesList = filteredArray
    },
    filterTalents() {
      let array = this.talents
      let filteredArray = array.slice(1)
      this.talentsList = filteredArray
    },
    filterArrayCases() {
      var array = this.casesList
      var filteredArray = array.map(el => {
        return el.taglist[0]
      })
      this.filterListCases = filteredArray
    },
    filterArrayTalents() {
      var array = this.talentsList
      var filteredArray = array.map(el => {
        return el.taglist[0]
      })
      this.filterListTalents = filteredArray
    }
  }
}
</script>
