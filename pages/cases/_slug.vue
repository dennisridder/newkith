<template>
  <div class="section section-CaseSingle section-Single section-Wrapper">
    <section class="section section-Landing section-TextContent">
      <blok-title-animated
        v-if="story.name"
        :words="wordsArray"
        :wordswap="false"
      />
    </section>
    <section
      v-if="story.content.thumbnail"
      class="section section-Thumbnail section-ImageContent scrollFast"
    >
      <img :src="story.content.thumbnail" alt />
    </section>
    <section class="section section-TagList section-TextContent">
      <blok-tag-list v-if="story.tag_list" :array="story.tag_list" />
    </section>
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import landingScrollSpeed from "@/mixins/landingScrollSpeed"
import imageScrollSpeed from "@/mixins/imageScrollSpeed"
import titleScrollSpeed from "@/mixins/titleScrollSpeed"

export default {
  scrollToTop: true,
  mixins: [
    storyblokLivePreview,
    landingScrollSpeed,
    imageScrollSpeed,
    titleScrollSpeed
  ],
  asyncData(context) {
    let endpoint = `cdn/stories/cases/${context.params.slug}`
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published"
    return context.app.$storyapi
      .get(endpoint, {
        version: version,
        cv: context.store.state.cacheVersion
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
      wordsArray: []
    }
  },
  mounted() {
    this.wordsToArray()
  },
  methods: {
    wordsToArray() {
      var string = this.story.name
      var array = string.split(/\s+/)
      this.wordsArray = Object.values(array)
    }
  }
}
</script>
