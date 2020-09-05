<template>
  <div class="section section-CaseSingle section-Single section-Wrapper">
    <blok-landing :words="wordsArray" />
    <section
      v-if="story.content.thumbnail"
      class="section section-Thumbnail section-ImageContent fastScroll"
    >
      <div class="section-Thumbnail_Wrapper">
        <div
          :id="story.content._uid"
          class="section-Thumbnail_Container "
          @mousemove="imageTilt($event)"
        >
          <img :src="story.content.thumbnail" :alt="story.content.title" />
        </div>
      </div>
    </section>
    <section
      v-if="story.tag_list"
      class="section section-TagList section-TextContent"
    >
      <blok-tag-list :array="story.tag_list" />
    </section>
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import carouselOnScroll from "@/mixins/carouselOnScroll"
import fastScroll from "@/mixins/fastScroll"
import slowScroll from "@/mixins/slowScroll"
import gsap from "gsap"
import $ from "jquery"

export default {
  scrollToTop: true,
  mixins: [storyblokLivePreview, carouselOnScroll, fastScroll, slowScroll],
  asyncData(context) {
    let endpoint = `cdn/stories/cases/${context.params.slug}`
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
  mounted() {
    this.wordsToArray()
    window.addEventListener("scroll", this.imageTiltOnScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.imageTiltOnScroll)
  },
  methods: {
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
          .getElementById(`effect-${this.id}`)
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
  }
}
</script>
