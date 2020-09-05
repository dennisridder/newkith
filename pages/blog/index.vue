<template>
  <div class="section-Wrapper">
    <blok-landing :words="['What\'s', 'happening']" />
    <section v-if="stories" class="section section-Blog">
      <ul class="blogList">
        <!-- prettier-ignore -->
        <li
          v-for="(post, index) in stories"
          :key="index"
          class="blogList-Item carouselOnScroll"
        >
          <nuxt-link :id="index" class="blogList-Content cursorInteract carouselOnScroll-Wrapper" :class="{ index }" :to="post.full_slug" tag="div">
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
              <blok-tag-list :array="post.tag_list" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
              <blok-tag-list :array="post.tag_list" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <h4>{{ formatDate(post.created_at) }}</h4>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.content.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.tag_list" />
            </div>
          </nuxt-link>
          <div v-if="post.content.thumbnail" class="blogList-Image">
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
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import carouselOnScroll from "@/mixins/carouselOnScroll"

export default {
  mixins: [storyblokLivePreview, carouselOnScroll],
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
      filterList: []
    }
  },
  mounted() {
    this.filterArray()
    // this.onScroll()
  },
  methods: {
    formatDate(date) {
      var d = (new Date(date) + "").split(" ")
      return [d[2], d[1], d[3]].join(" ")
    },
    // onScroll() {
    //   setTimeout(function() {
    //     const sections = document.querySelectorAll(".carouselOnScroll")
    //     const sectionWidth = window.innerWidth / 1.5
    //     sections.forEach((el, index) => {
    //       const wrapper = el.querySelectorAll(".carouselOnScroll-Wrapper")
    //       if (index % 2 === 0) {
    //         gsap.fromTo(
    //           wrapper,
    //           { x: 0 },
    //           {
    //             x: -sectionWidth,
    //             scrollTrigger: {
    //               trigger: el,
    //               scrub: true
    //             }
    //           }
    //         )
    //       } else {
    //         gsap.fromTo(
    //           wrapper,
    //           { x: -sectionWidth },
    //           {
    //             x: 0,
    //             scrollTrigger: {
    //               trigger: el,
    //               scrub: true
    //             }
    //           }
    //         )
    //       }
    //     })
    //   }, 100)
    // },
    filterArray() {
      // Map tag values to new array
      var array = this.stories
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
    h1, h2, h4, p
      hyphens: none
      overflow-wrap: normal
      break-word: normal
      white-space: nowrap
    &:last-child
      border-bottom: $border
    &:hover
      h2
        color: $support-color
      h2
        font-family: 'SohneSchmal HalbfettKursiv'
      & .blogList-Image
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
    z-index: +100
    pointer-events: none
    @media screen and ( hover: none )
      display: none
    .image-Effect
      > div
        width: 45vw
        height: 45vw
        display: flex
        justify-content: center
        align-items: center
        @media screen and (max-width: $breakpoint-tablet)
          width: 55vw
          height: 55vw
        @media screen and (max-width: $breakpoint-tablet)
          width: 75vw
          height: 75vw
      img
        pointer-events: auto
  &-Content
    display: flex
    flex-wrap: nowrap
    cursor: pointer
    align-items: center
    margin-left: 3rem
    > div
      flex-shrink: 0
      margin-right: 3rem
    &_Title
      max-width: 30em
</style>
