<template>
  <div class="section-Wrapper">
    <section class="section section-Landing section-TextContent">
      <blok-title-animated :words="['What\'s', 'happening']" />
    </section>
    <blok-filter-list :array="filterList" />
    <section class="section section-Blog">
      <ul class="blogList">
        <!-- prettier-ignore -->
        <li
          v-for="post in blogList"
          :id="post.content.id"
          :key="post.content.id"
          class="blogList-Item"
          @mousemove="registerMouse($event)"
        >
          <nuxt-link class="blogList-Content" :to="post.full_slug" tag="div">
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.content.date" class="blogList-Content_Date">
              <h2>{{ post.content.date }}</h2>
            </div>
            <div>
              <blok-tag-list :array="post.tag_list" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.content.date" class="blogList-Content_Date">
              <h2>{{ post.content.date }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.content.date" class="blogList-Content_Date">
              <h2>{{ post.content.date }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.content.date" class="blogList-Content_Date">
              <h2>{{ post.content.date }}</h2>
            </div>
            <div>
<blok-tag-list :array="post.tag_list" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.content.date" class="blogList-Content_Date">
              <h2>{{ post.content.date }}</h2>
            </div>
            <div>
<blok-tag-list :array="post.tag_list" />
            </div>
          </nuxt-link>
          <div class="blogList-Image">
            <blok-image-container-blog
              :id="post.content._uid"
              :image="post.content.thumbnail"
              :title="post.content.title"
              :event="tiltNumber"
            />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import titleScrollSpeed from "@/mixins/titleScrollSpeed"

export default {
  mixins: [storyblokLivePreview, titleScrollSpeed],
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
      blogList: [],
      tiltNumber: 0,
      filterList: []
    }
  },
  mounted() {
    this.removeFirstOfarray()
    this.filterArray()
  },
  methods: {
    removeFirstOfarray() {
      var arr = this.stories
      arr.shift()
      this.blogList = arr
    },
    registerMouse(event) {
      this.tiltNumber = event.clientX
    },
    filterArray() {
      // Map tag values to new array
      var array = this.blogList
      var filteredArray = array.map(el => {
        return el.tag_list[0]
      })
      // Remove duplicates
      const uniqueSet = new Set(filteredArray)
      const backToArray = [...uniqueSet]
      // Set filterList data
      this.filterList = backToArray
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
    border-top: $border
    &:hover
      .blogList-Content
        animation-play-state: running
        h2
          color: $support-color
        h2
          font-family: 'SohneSchmal HalbfettKursiv'
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
    .image-Effect
      > div
        width: 40vw
        height: 75vh
        display: flex
        justify-content: center
        align-items: center
      img
        max-width: 100%
        width: 100%
        object-fit: contain
        max-height: 100%
  &-Content
    display: flex
    flex-wrap: nowrap
    cursor: pointer
    align-items: center
    margin-left: 3rem
    animation: carouselLeft 60s infinite linear
    animation-direction: alternate
    animation-play-state: running
    h2
      font-family: 'SohneSchmal Halbfett'
      font-size: 5vw
      // font-family: 'Sohne Kraftig'
      // font-size: 3.5vw
    > div
      flex-shrink: 0
      margin-right: 3rem
    &_Title
      max-width: 30em

  &-Item:nth-child(2n)
    .blogList-Content
      animation: carouselRight 60s infinite linear

@keyframes carouselLeft
  0%
    transform: translateX(0vw)

  100%
    transform: translateX(-100vw)

@keyframes carouselRight
  0%
    transform: translateX(-100vw)

  100%
    transform: translateX(0vw)
</style>
