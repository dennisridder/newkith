<template>
  <component
    :is="story.content.component | dashify"
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
  ></component>
</template>

<script>
import { mapState } from "vuex"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import scrollFast from "@/mixins/scrollFast"
import scrollSlow from "@/mixins/scrollSlow"
import carouselOnScroll from "@/mixins/carouselOnScroll"

export default {
  mixins: [storyblokLivePreview, carouselOnScroll, scrollFast, scrollSlow],
  asyncData(context) {
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${context.params.slug}`, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data() {
    return { story: { content: {} } }
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  },
  head() {
    return {
      title: this.story.name.toUpperCase() + " — #NEWKITH",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.general[0].content.website_description
        }
      ]
    }
  }
}
</script>
