<template>
  <div v-editable="story.content" class="page">
    <!-- LANDING -->
    <blok-page-landing :words="['Newkith', 'talent', 'agency']" />
    <!-- TALENTS -->
    <!-- <section class="section section-Talents">
      <div class="section-Titles">
        <h1>Talent Management</h1>
        <nuxt-link class="talentsList-More" to="/talents" tag="div">
          <h1>All -></h1>
        </nuxt-link>
      </div>
      <blok-horizontal-image-row :list="talentsList" />
    </section>-->
    <!-- CASES -->
    <section class="section section-Cases">
      <blok-image-grid class="verticalRowIrregular" :array="casesList" />
    </section>
    <!-- <section class="section section-Academy">
      <div class="section-Titles">
        <h1>Academy</h1>
        <div class="talentsList-More">
          <h1>Enroll -></h1>
        </div>
      </div>
      <div class="image-Effect image-Effect_Tilt">
        <div id="effect-Tilt" @mousemove="imageTilt($event)">
          <img
            src="https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          />
        </div>
      </div>
    </section>-->
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
    console.log("HOME CASESLIST", this.casesList, typeof this.casesList)
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
    // imageTilt: function(event) {
    //   // Codepen: https://codepen.io/driesbos/pen/NWNKwjM
    //   var el = $("#effect-Tilt")
    //   var width = el.width()
    //   var xPos = (event.layerX / width - 0.5) * 25
    //   gsap.to(el, 1, {
    //     rotationY: xPos,
    //     ease: "power2.easeOut"
    //   })
    // }
  }
}
</script>
