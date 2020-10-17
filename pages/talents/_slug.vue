<template>
  <div class="section section-Wrapper section-TalentSingle section-Single">
    <blok-landing :words="wordsArray" />
    <section
      v-if="story.content.thumbnail"
      class="section section-Thumbnail section-ImageContent scrollFast"
    >
      <div class="section-Thumbnail_Wrapper">
        <div
          :id="story.content._uid"
          class="section-Thumbnail_Container "
          @mousemove="imageTilt($event)"
        >
          <!-- <img :src="story.content.thumbnail" :alt="story.content.title" /> -->
          <!-- prettier-ignore -->
          <img
        v-if="story.content.thumbnail"
        :srcset="
          `${transformImage(story.content.thumbnail, '2880x0/filters:format(jpg):quality(50)')} 2880w,
           ${transformImage(story.content.thumbnail, '2560x0/filters:format(jpg):quality(50)')} 2560w, 
           ${transformImage(story.content.thumbnail, '1920x0/filters:format(jpg):quality(50)')} 1920w, 
           ${transformImage(story.content.thumbnail, '1680x0/filters:format(jpg):quality(50)')} 1680w, 
           ${transformImage(story.content.thumbnail, '1280x0/filters:format(jpg):quality(50)')} 1280w,
           ${transformImage(story.content.thumbnail, '1024x0/filters:format(jpg):quality(50)')} 1024w, 
           ${transformImage(story.content.thumbnail, '768x0/filters:format(jpg):quality(50)')} 768w`"
        sizes="100vw"
        :data-src="`${transformImage(story.content.thumbnail, '1680x0/filters:format(jpg):quality(50)')}`"
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
    <component
      :is="blok.component | dashify"
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
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
    let endpoint = `cdn/stories/talents/${context.params.slug}`
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
    })
  },
  mounted() {
    this.wordsToArray()
    window.addEventListener("scroll", this.imageTiltOnScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.imageTiltOnScroll)
  },
  methods: {
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
      if (this.story.content.name) {
        var string = this.story.content.name
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
