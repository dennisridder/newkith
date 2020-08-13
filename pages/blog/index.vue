<template>
  <div class="page">
    <blok-page-landing :words="['What\'s', 'is', 'Happening']" />
    <section>
      <ul class="blogList">
        <!-- prettier-ignore -->
        <li v-for="post in blogList" :id="post.content.id" :key="post.content.id">
          <nuxt-link :to="post.full_slug" tag="div">
            <h2>{{ post.content.title }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// import gsap from "gsap"
// import $ from "jquery"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

export default {
  mixins: [storyblokLivePreview],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "blog/"
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
      blogList: {}
    }
  },
  mounted() {
    this.removeFirstOfarray()
  },
  methods: {
    removeFirstOfarray() {
      var arr = this.stories
      arr.shift()
      this.blogList = arr
    }
  }
}
</script>

<style lang="sass">
.blogList
</style>
