<template>
  <div
    class="section section-CaseSingle section-JobSingle section-Single section-Wrapper"
  >
    <blok-landing :words="wordsArray" />
    <div class="section-CaseSingle-Row">
      <div
        class="section-CaseSingle-Column section-CaseSingle-Column-Thumbnail"
      >
        <section
          v-if="story.content.thumbnail"
          class="section section-Thumbnail section-ImageContent scrollFast"
        >
          <div class="section-Thumbnail_Wrapper">
            <div :id="story.content._uid" class="section-Thumbnail_Container">
              <!-- <img :src="story.content.thumbnail" :alt="story.content.title" /> -->
              <!-- prettier-ignore -->
              <img
            v-if="story.content.thumbnail"
            v-lazy="`${transformImage(story.content.thumbnail, '1680x0/filters:format(jpg):quality(40)')}`"
            :srcset="
              `${transformImage(story.content.thumbnail, '2880x0/filters:format(jpg):quality(40)')} 2880w,
              ${transformImage(story.content.thumbnail, '2560x0/filters:format(jpg):quality(40)')} 2560w, 
              ${transformImage(story.content.thumbnail, '1920x0/filters:format(jpg):quality(40)')} 1920w, 
              ${transformImage(story.content.thumbnail, '1680x0/filters:format(jpg):quality(40)')} 1680w, 
              ${transformImage(story.content.thumbnail, '1280x0/filters:format(jpg):quality(40)')} 1280w,
              ${transformImage(story.content.thumbnail, '1024x0/filters:format(jpg):quality(40)')} 1024w, 
              ${transformImage(story.content.thumbnail, '768x0/filters:format(jpg):quality(40)')} 768w`"
            sizes="(max-width: 768px) 100vw, 50vw"
            class="lazy"
            :alt="story.content.title"
          />
            </div>
          </div>
        </section>
        <section
          v-if="story.tag_list"
          class="section section-TagList section-TextContent"
        >
          <blok-tag-list :array="story.tag_list" />
        </section>
      </div>
      <div class="section-CaseSingle-Column section-CaseSingle-Column-Content">
        <component
          :is="blok.component | dashify"
          v-for="blok in firstTextBlock"
          :key="blok._uid"
          :blok="blok"
        ></component>
      </div>
      <div
        class="section-CaseSingle-Column section-CaseSingle-Column-OtherContent"
      >
        <component
          :is="blok.component | dashify"
          v-for="blok in otherBlocks(story.content.body)"
          :key="blok._uid"
          :blok="blok"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import gsap from "gsap"
import $ from "jquery"

import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import scrollFast from "@/mixins/scrollFast"
import scrollSlow from "@/mixins/scrollSlow"
import carouselOnScroll from "@/mixins/carouselOnScroll"

export default {
  scrollToTop: true,
  mixins: [storyblokLivePreview, carouselOnScroll, scrollFast, scrollSlow],
  asyncData(context) {
    let endpoint = `cdn/stories/jobs/${context.params.slug}`
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
      story: { content: {} },
      wordsArray: []
    }
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    }),
    firstTextBlock() {
      return this.story.content.body
        .filter(block => ["text"].includes(block.component))
        .slice(0, 1)
    }
  },
  mounted() {
    this.wordsToArray()
    // window.addEventListener("scroll", this.imageTiltOnScroll)
  },
  destroyed() {
    // window.removeEventListener("scroll", this.imageTiltOnScroll)
  },
  methods: {
    otherBlocks(blocks) {
      const textBlockUid = this.firstTextBlock[0]._uid

      return blocks.filter(
        block =>
          ![textBlockUid].includes(block._uid) &&
          !["logos-container"].includes(block.component)
      )
    },
    transformImage(image, option) {
      if (!image) return ""
      if (!option) return ""
      let imageService = "//img2.storyblok.com/"
      let pathOne = image.replace("https://a.storyblok.com", "")
      let pathTwo = pathOne.replace("//a.storyblok.com", "")
      return imageService + option + pathTwo
    },
    imageTilt: function(event) {
      const mq = window.matchMedia("(hover: hover)")
      if (mq.matches) {
        // Codepen: https://codepen.io/driesbos/pen/NWNKwjM
        var el = $("#" + this.story.content._uid)
        var width = el.width()
        var xPos = (event.layerX / width - 0.5) * 75
        gsap.to(el, 1, {
          rotationY: xPos,
          ease: "power2.easeOut"
        })
      }
    },
    imageTiltOnScroll: function() {
      const mq = window.matchMedia("(hover: none)")
      if (mq.matches) {
        var el = $("#" + this.story.content._uid)
        var domRect = document
          .getElementById(this.story.content._uid)
          .getBoundingClientRect()
        if (domRect.top > 0 && domRect.top < window.innerHeight * 2) {
          gsap.to(el, 1, {
            rotationY: domRect.top / 15,
            ease: "power2.easeOut"
          })
        }
      }
    },
    wordsToArray() {
      if (this.story.content.title) {
        var string = this.story.content.title
        var array = string.split(/\s+/)
        this.wordsArray = Object.values(array)
      }
    }
  },
  head() {
    return {
      title: this.story.name.toUpperCase() + " — #NEWKITH",
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

.section-CaseSingle
  position: relative

.section-CaseSingle-Row
  display: flex
  flex-flow: row wrap
  padding-left: var(--spacing-content-sides)
  padding-right: var(--spacing-content-sides)
  margin-bottom: var(--spacing-three)

.section-CaseSingle-Column
  .section-TagList
    padding-left: 0
    padding-right: 0

  &-Thumbnail
    flex: 0 0 30%
    margin-right: 10%

    section:last-child
      margin-bottom: 0

    @media screen and (max-width: $breakpoint-mobile)
      width: 100%
      flex: none
      margin-right: 0
      margin-bottom: var(--spacing-content-bottom)

    .section-Thumbnail
      padding-left: 0
      padding-right: 0
      margin-bottom: 1.25em

      img
        object-fit: cover

  &-Content
    flex: 0 0 60%

    section:last-child
      margin-bottom: 0

    .section-TextContent
      padding-left: 0
      padding-right: 0

    @media screen and (max-width: $breakpoint-mobile)
      flex: 0 0 100%

  &-OtherContent
    flex: 0 0 100%
    display: flex
    flex-flow: row wrap
    // justify-content: space-between

    &:not(:empty)
      padding-top: var(--spacing-content-bottom)
      padding-bottom: 0

    .section-TextContent
      padding-left: 0
      padding-right: 0

    .section-Media
      flex: 1
      // flex: 0 0 calc(33.33% - var(--spacing-content-sides))
      // flex: 0 0 33.33%
      // margin-right: var(--spacing-content-sides)
      // padding-left: 0
      // padding-right: 0

      &:first-child
        margin-left: calc(var(--spacing-content-sides) / 2 * -1)

      &:last-child
        margin-right: calc(var(--spacing-content-sides) / 2 * -1)
        margin-bottom: 0

      &_Wrapper
        width: 100%
        padding-left: calc(var(--spacing-content-sides) / 3 * -1)
        padding-right: calc(var(--spacing-content-sides) / 3 * -1)

        .section-Media_Container.landscape
          padding-top: 100%

      @media screen and (max-width: $breakpoint-mobile)
        flex: 0 0 100%
        margin-right: 0
        padding-left: 0
        padding-right: 0

        &:first-child
          margin-left: 0
          margin-right: 0

        &_Wrapper
          .section-Media_Container.landscape
            padding-top: 0
</style>
