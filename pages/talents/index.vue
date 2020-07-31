<template>
  <div class="page">
    <blok-page-landing :words="['Meet', 'our', 'talents']" />
    <section>
      <nuxt-link class="" to="/" tag="div">
        <h1>BACK</h1>
      </nuxt-link>
      <ul class="imageGrid">
        <!-- prettier-ignore -->
        <li v-for="item in talentsList" :id="item.id" :key="item.id" class="imageGrid-Row">
          <nuxt-link :to="'talents' + item.id" class="imageGrid-Item" tag="div">
            <div class="image-Container">
              <img :src="item.content.thumbnail" alt />
            </div>
            <h2>{{ item.content.name }}</h2>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
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
      talentsList: {}
    }
  },
  mounted() {
    // console.log("TALENTS INDEX", this.stories)
    // console.log("TALENTS LIST", this.talentsList)
    this.removeFirstOfarray()
  },
  methods: {
    removeFirstOfarray() {
      var arr = this.stories
      arr.shift()
      this.talentsList = arr
    }
  }
}
</script>
