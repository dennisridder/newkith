<template>
  <div class="page">
    <blok-page-landing :words="['Meet', 'our', 'talents']" />
    <section class="section section-Talents">
      <blok-image-grid
        class="verticalRowIrregular"
        :array="talentsList"
        slug="talents"
      />
      <!-- <ul class="imageGrid">
        <li v-for="item in talentsList" :id="item.id" :key="item.id" class="imageGrid-Row">
          <nuxt-link :to="'talents' + item.id" class="imageGrid-Item" tag="div">
            <div class="image-Container">
              <img :src="item.content.thumbnail" alt />
            </div>
            <h2>{{ item.content.name }}</h2>
          </nuxt-link>
        </li>
      </ul> -->
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import { mapState } from "vuex"

export default {
  mixins: [storyblokLivePreview],
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
      talentsList: {}
    }
  },
  computed: {
    ...mapState({
      cases: state => state.cases.list,
      talents: state => state.talents.list
    })
  },
  mounted() {
    // console.log("TALENTS INDEX", this.stories)
    // console.log("TALENTS LIST", this.talentsList)
    this.filterTalents()
  },
  methods: {
    // removeFirstOfarray() {
    //   var arr = this.stories
    //   arr.shift()
    //   this.talentsList = arr
    // },
    filterTalents() {
      let array = this.talents
      let filteredArray = array.slice(1)
      this.talentsList = filteredArray
    }
  }
}
</script>
