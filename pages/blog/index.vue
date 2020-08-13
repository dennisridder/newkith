<template>
  <div class="page">
    <blok-page-landing :words="['What\'s', 'is', 'Happening']" />
    <section class="section section-Blog">
      <ul class="blogList">
        <!-- prettier-ignore -->
        <li
          v-for="post in blogList"
          :id="post.content.id"
          :key="post.content.id"
          class="blogList-Item"
        >
          <nuxt-link :to="post.full_slug" tag="div">
            <h2>{{ post.content.title }}</h2>
          </nuxt-link>
          <div class="blogList-Image">
            <blok-image-container
              :id="post.content._uid"
              :image="post.content.thumbnail"
              :title="post.content.title"
            />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"

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
    console.log("BLOGLIST", this.blogList)
  },
  methods: {
    removeFirstOfarray() {
      var arr = this.stories
      arr.shift()
      this.blogList = arr
    },
    imageTilt: function(event, title) {
      // Codepen: https://codepen.io/driesbos/pen/NWNKwjM
      var el = $(`#effect-${title}`)
      var width = el.width()
      var xPos = (event.layerX / width - 0.5) * 75
      console.log(event, title, el)
      gsap.to(el, 1, {
        rotationY: xPos,
        ease: "power2.easeOut"
      })
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-Blog
  padding-left: 0
  padding-right: 0

.blogList
  &-Item
    border-top: 1px solid $color
    padding-top: 3rem
    padding-bottom: 3rem
  &-Item:last-child
    border-bottom: 1px solid $color
  &-Image
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    display: flex
    justify-content: center
    align-items: center
    visibility: hidden
    pointer-events: none
    z-index: -1
    .image-Effect
      width: 60vw
      height: 80vh
      display: flex
      justify-content: center
      align-items: center
      pointer-events: auto
      img
        max-width: 100%
        width: 100%
  &-Item:hover > .blogList-Image
    visibility: visible
</style>
