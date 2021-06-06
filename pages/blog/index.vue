<template>
  <div class="section-Wrapper">
    <blok-landing :words="['What\'s', 'happening']" />
    <section class="section section-Filters section-TextContent">
      <ul class="section-Filters_Container">
        <li class="section-Filters_Item cursorInteract all" @click="showAll">
          <span>All</span>
        </li>
        <blok-filter-item
          v-for="tag in taglist"
          :id="tag"
          :key="tag"
          :tag="tag"
          @click.native="filterByValue(tag)"
        />
      </ul>
    </section>
    <section v-if="stories" class="section section-Blog">
      <ul class="blogList">
        <!-- prettier-ignore -->
        <li
          v-for="(post, index) in list"
          :key="index"
          class="blogList-Item carouselOnScroll"
        >
          <nuxt-link :id="index" class="blogList-Content cursorInteract carouselOnScroll-Wrapper" :class="{ index }" :to="post.slug" tag="div">
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
              <blok-tag-list :array="post.taglist" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.taglist" />
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
            <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
              <blok-tag-list :array="post.taglist" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.taglist" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.taglist" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.taglist" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.taglist" />
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div v-if="post.created_at" class="blogList-Content_Date">
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
       <div class="blogList-Content_Title">
              <h2>{{ post.title }}</h2>
            </div>
            <div>
               <blok-tag-list :array="post.taglist" />
            </div>
          </nuxt-link>
          <div v-if="post.thumbnail" class="blogList-Image">
            <blok-image-container
              :id="post.id"
              :image="post.thumbnail"
              :title="post.title"
            />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex"

import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import scrollFast from "@/mixins/scrollFast"
import scrollSlow from "@/mixins/scrollSlow"
import carouselOnScroll from "@/mixins/carouselOnScroll"

export default {
  mixins: [storyblokLivePreview, carouselOnScroll, scrollFast, scrollSlow],
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
      list: [],
      showAllToggle: true,
      taglist: []
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.list,
      general: state => state.general.list
    })
  },
  mounted() {
    this.resetList()
    this.getTags()
    this.changeActiveClass("all")
  },
  methods: {
    resetList() {
      this.list = [...this.posts]
      this.sortByDate(this.list)
    },
    sortByDate(values) {
      values.sort((a, b) =>
        a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0
      )
    },
    getTags() {
      var arrays = this.list.map(el => el.taglist)
      var mergedArray = [].concat.apply([], arrays)
      const duplicatesRemovedArray = new Set(mergedArray)
      const backToArray = [...duplicatesRemovedArray]
      this.taglist = backToArray
    },
    filterByValue(string) {
      this.changeActiveClass(string)
      this.resetList()
      this.showAllToggle = false
      var array = this.list.filter(o =>
        Object.keys(o).some(k =>
          String(o[k])
            .toLowerCase()
            .includes(string.toLowerCase())
        )
      )
      this.list = array
      this.onScroll()
    },
    showAll() {
      this.changeActiveClass("all")
      this.resetList()
      this.showAllToggle = true
      this.onScroll()
    },
    changeActiveClass(value) {
      var classArray = document.querySelectorAll(".section-Filters_Item")
      classArray.forEach(el => {
        el.classList.remove("active")
      })
      var item = document.querySelector(".section-Filters_Item." + value)
      item.classList.add("active")
    },
    formatDate(date) {
      var d = (new Date(date) + "").split(" ")
      return [d[2], d[1], d[3]].join(" ")
    }
  },
  head() {
    return {
      title: "BLOG — #NEWKITH",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.general[0].content.website_description
        }
      ]
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
    h1, h2, span, p
      hyphens: none
      overflow-wrap: normal
      break-word: normal
      white-space: nowrap
    &:last-child
      border-bottom: $border
    &:hover
      @media screen and ( hover: hover )
        h2
          color: $support-color
          font-family: 'FormaDJRDisplay', 'SohneSchmal HalbfettKursiv'
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
