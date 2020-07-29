<template>
  <section>
    <p>TALENTS</p>
    <ul>
      <!-- prettier-ignore -->
      <li v-for="post in talentList" :id="post.content.id" :key="post.content.id">
        <nuxt-link :to="post.full_slug" tag="div">
          <h2>{{ post.name }}</h2>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

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
      talentList: {}
    }
  },
  mounted() {
    // console.log("TALENTS INDEX", this.stories)
    this.removeFirstOfarray()
  },
  methods: {
    removeFirstOfarray() {
      var arr = this.stories
      arr.shift()
      this.talentList = arr
    }
  }
}
</script>
