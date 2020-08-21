<template>
  <div class="section-Wrapper">
    <section class="section section-Landing">
      <blok-title-animated :words="['Read', 'our', 'cases']" />
    </section>
    <blok-filter-list :array="filterList" />
    <section class="section section-Cases">
      <blok-image-grid
        class="verticalRowIrregular"
        :array="casesList"
        slug="/cases/"
      />
    </section>
    <!-- <ul>
      <li v-for="post in casesList" :id="post.content.id" :key="post.content.id">
        <nuxt-link :to="post.full_slug" tag="div">
          <h2>{{ post.name }}</h2>
          <img :src="post.content.thumbnail" alt />
        </nuxt-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import titleScrollSpeed from "@/mixins/titleScrollSpeed"
import { mapState } from "vuex"

export default {
  mixins: [storyblokLivePreview, titleScrollSpeed],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "cases/"
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
      casesList: {},
      filterList: {}
    }
  },

  computed: {
    ...mapState({
      cases: state => state.cases.list
    })
  },
  mounted() {
    this.filterCases()
    this.filterArray()
    console.log("CASES", this.casesList)
  },
  methods: {
    filterCases() {
      let array = this.cases
      let filteredArray = array.slice(1)
      this.casesList = filteredArray
    },
    filterArray() {
      var array = this.casesList
      var filteredArray = array.map(el => {
        return el.taglist[0]
      })
      this.filterList = filteredArray
    }
  }
}
</script>
