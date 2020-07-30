<template>
  <div v-editable="story.content">
    <p>HOME</p>
    <p>INTRO</p>
    <p>CASES</p>
    <ul class="imageGrid">
      <!-- prettier-ignore -->
      <li v-for="item in casesList" :id="item.id" :key="item.id">
        <nuxt-link :to="'cases/' + item.id" tag="div">
          <h2>{{ item.title }}</h2>
          <div class="image-Container">
            <img :src="item.thumbnail" alt />
          </div>
        </nuxt-link>
      </li>
    </ul>
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
      casesList: {}
    }
  },
  computed: {
    ...mapState({
      cases: state => state.cases.list
    })
  },
  mounted() {
    this.filterCases()
    console.log("HOME STORY", this.story)
    console.log("HOME CASESLIST", this.casesList)
  },
  methods: {
    filterCases() {
      let array = this.cases
      let filteredArray = array.slice(1)
      this.casesList = filteredArray
    }
  }
}
</script>
