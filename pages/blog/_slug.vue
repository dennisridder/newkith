<template>
  <section>
    <nuxt-link to="/blog">Close</nuxt-link>
    <h2>{{ story.name }}</h2>
    <img :src="story.content.thumbnail" alt />
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  scrollToTop: true,
  mixins: [storyblokLivePreview],
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
      story: { content: {} }
    }
  },
  mounted() {
    // console.log(this.stories)
  }
}
</script>
