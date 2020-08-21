<template>
  <section class="section section-TalentSingle section-Single">
    <div
      v-if="story.name"
      class="section-TalentSingle_Title section-Single_Title"
    >
      <h2>{{ story.name }}</h2>
    </div>
    <div
      v-if="story.content.thumbnail"
      class="section-TalentSingle_Thumbnail section-Single_Thumbnail"
    >
      <img :src="story.content.thumbnail" alt />
    </div>
    <blok-tag-list v-if="story.tag_list" :array="story.tag_list" />
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  scrollToTop: true,
  mixins: [storyblokLivePreview],
  asyncData(context) {
    let endpoint = `cdn/stories/talents/${context.params.slug}`
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
  mounted() {}
}
</script>
