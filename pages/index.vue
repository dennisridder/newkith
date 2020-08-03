<template>
  <div v-editable="story.content" class="page">
    <!-- LANDING -->
    <blok-page-landing :words="['Newkith', 'talent', 'agency']" />
    <!-- TALENTS -->
    <section class="section section-Talents">
      <div class="section-Titles">
        <h1>Talent Management</h1>
        <nuxt-link class="talentsList-More" to="/talents" tag="div">
          <h1>All -></h1>
        </nuxt-link>
      </div>
      <blok-horizontal-image-row :list="talentsList" />
    </section>
    <section class="section section-ServiceList serviceList">
      <ul>
        <li>
          <h1>Services</h1>
        </li>
      </ul>
      <ul>
        <li>
          <h1>Management</h1>
        </li>
        <li>
          <h4>Collaborations</h4>
        </li>
        <li>
          <h4>Branding</h4>
        </li>
        <li>
          <h4>Marketing</h4>
        </li>
      </ul>
      <ul>
        <li>
          <h1>Creative</h1>
        </li>
        <li>
          <h4>Production</h4>
        </li>
        <li>
          <h4>Distribution</h4>
        </li>
      </ul>
      <ul>
        <li>
          <h1>Advertising</h1>
        </li>
        <li>
          <h4>Campaigns</h4>
        </li>
        <li>
          <h4>&nbsp;</h4>
        </li>
        <li>
          <h4>More about us -></h4>
        </li>
      </ul>
    </section>
    <!-- CASES -->
    <section>
      <h1>Cases</h1>
      <blok-image-grid class="verticalRowIrregular" :array="casesList" />
    </section>
    <section class="section section-Academy">
      <div class="section-Titles">
        <h1>Academy</h1>
        <div class="talentsList-More">
          <h1>Enroll -></h1>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        alt
      />
    </section>
    <section class="section section-ServiceList serviceList">
      <ul>
        <li>
          <h1>Footer</h1>
        </li>
      </ul>
      <ul></ul>
      <ul>
        <li>
          <h4>What we do</h4>
        </li>
        <li>
          <h4>What's happening</h4>
        </li>
        <li>
          <h4>Who we are</h4>
        </li>
      </ul>
      <ul>
        <li>
          <h4>Cases</h4>
        </li>
        <li>
          <h4>Talens</h4>
        </li>
        <li>
          <h4>Academy</h4>
        </li>
        <li>
          <h4>Contact</h4>
        </li>
      </ul>
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
    // console.log("HOME CASESLIST", this.casesList, typeof this.casesList)
    // console.log("HOME TALENTSLIST", this.talentsList)
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
