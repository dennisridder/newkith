<template>
  <div class="section section-Wrapper">
    <section
      v-if="wordsArray"
      class="section section-Landing section-TextContent"
    >
      <blok-title-animated :words="wordsArray" :wordswap="false" />
    </section>
    <section
      v-if="story.content.thumbnail"
      class="section section-Thumbnail section-ImageContent scrollFast"
    >
      <div class="section-Thumbnail_Container">
        <img :src="story.content.thumbnail" alt />
      </div>
    </section>
    <section
      v-if="story.tag_list"
      class="section section-TagList section-TextContent"
    >
      <h4 class="date">{{ formatDate(story.created_at) }}</h4>
      <blok-tag-list :array="story.tag_list" />
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
    let endpoint = `cdn/stories/blog/${context.params.slug}`
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
    formatDate(date) {
      console.log("DATE", date)

      var d = (new Date(date) + "").split(" ")
      // d[2] = d[2] + ","

      return [d[2], d[1], d[3]].join(" ")
    },
    wordsToArray() {
      if (this.story.content.title) {
        var string = this.story.content.title
        var array = string.split(/\s+/)
        this.wordsArray = Object.values(array)
      }
    }
  }
}
</script>
