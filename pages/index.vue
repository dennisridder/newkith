<template>
  <div v-editable="story.content" class="page">
    <!-- LANDING -->
    <blok-page-landing :words="['Newkith', 'talent', 'agency']" />
    <!-- CASES -->
    <section>
      <ul class="imageGrid">
        <li
          v-for="item in casesList"
          :id="item.id"
          :key="item.id"
          class="imageGrid-Row"
        >
          <nuxt-link :to="'cases/' + item.id" class="imageGrid-Item" tag="div">
            <div class="image-Container">
              <img :src="item.thumbnail" alt />
            </div>
            <h2>{{ item.title }}</h2>
            <ul class="tagList">
              <li v-for="tag in item.taglist" :id="tag" :key="tag">
                #{{ tag }}<span>,</span>
              </li>
            </ul>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <!-- TALENTS -->
    <section>
      <div class="talentsList">
        <ul class="talentsList-Container">
          <li
            v-for="item in talentsList"
            :id="item.id"
            :key="item.id"
            class="talentsList-Item"
          >
            <div class="talentsList-Image">
              <img :src="item.thumbnail" alt />
            </div>
            <div>
              <h2>{{ item.name }}</h2>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
      casesList: {},
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
    this.filterCases()
    this.filterTalents()
    // console.log("HOME STORY", this.story)
    // console.log("HOME CASESLIST", this.casesList)
    console.log("HOME TALENTSLIST", this.talentsList)
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
    }
  }
}
</script>
