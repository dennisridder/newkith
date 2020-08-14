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
          <nuxt-link class="blogList-Content" :to="post.full_slug" tag="div">
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
              <h4>{{ post.content.component }}</h4>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
              <h4>{{ post.content.component }}</h4>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
              <h4>{{ post.content.component }}</h4>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
              <h4>{{ post.content.component }}</h4>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
              <h4>{{ post.content.component }}</h4>
            </div>
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
    console.log("BLOG STORY", this.story)
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
    padding-top: 3rem
    padding-bottom: 3rem
    width: 100%
    overflow-x: auto
    &:hover
      .blogList-Content
        animation-play-state: running
        h1, h2, h3, h4, p
          color: $support-color
        h2
          font-family: 'Sohne KraftigKursiv'
      .blogList-Image
        visibility: visible
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
      width: 40vw
      height: 70vh
      display: flex
      justify-content: center
      align-items: center
      pointer-events: auto
      img
        max-width: 100%
        width: 100%
  &-Content
    display: flex
    flex-wrap: nowrap
    cursor: pointer
    align-items: center
    margin-left: 3rem
    animation: carousel 15s infinite linear
    animation-direction: alternate
    animation-play-state: paused
    h2
      font-family: 'SohneSchmal Halbfett'
      font-size: 5vw
      font-family: 'Sohne Kraftig'
      font-size: 3.5vw
    > div
      flex-shrink: 0
      margin-right: 3rem
    &_Title
      max-width: 30em

@keyframes carousel
  0%
    transform: translateX(0vw)

  100%
    transform: translateX(-100vw)
</style>
