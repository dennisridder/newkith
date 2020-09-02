<template>
  <div v-editable="story.content" class="section-Wrapper section-About">
    <!-- <section
      class="section section-Media section-ImageContent youtube fastScroll"
    >
      <div class="section-Media_Wrapper medium">
        <div id="movie" class="section-Media_Container ">
          <iframe
            id="mediaPlayer"
            type="text/html"
            width="640"
            height="360"
            frameborder="0"
            src="'https://www.youtube.com/embed/6QPIiX7SCu4?autoplay=1&loop=1&modestbranding=1&color=blue&iv_load_policy=3&rel=0'"
          />
        </div>
      </div>
    </section> -->
    <section class="section section-Landing section-TextContent">
      <blok-title-animated
        :words="['We', 'are', 'New', 'Kith']"
        :wordswap="false"
      />
    </section>
    <section
      v-editable="story.content"
      class="section section-About_Landing section-Media section-ImageContent vimeo fastScroll"
    >
      <div class="section-Media_Wrapper">
        <div id="movie" class="section-Media_Container ">
          <iframe
            src="https://player.vimeo.com/video/451626607"
            width="640"
            height="360"
            frameborder="0"
            transparent="true"
            autoplay="true"
            autopause="true"
            title="We are New Kith"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>
      </div>
    </section>
    <section>
      <component
        :is="story.content.component | dashify"
        v-if="story.content.component"
        :key="story.content._uid"
        :blok="story.content"
      ></component>
    </section>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import landingScroll from "@/mixins/landingScroll"
import fastScroll from "@/mixins/fastScroll"
import slowScroll from "@/mixins/slowScroll"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
// import MarkdownItem from "@/components/MarkdownItem.vue"

gsap.registerPlugin(ScrollTrigger)

export default {
  // components: {
  //   "markdown-item": MarkdownItem
  // },
  mixins: [storyblokLivePreview, landingScroll, fastScroll, slowScroll],
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/about", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
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
      story: { content: {} }
    }
  },
  mounted() {
    // console.log(this.story.content.body)
    // window.addEventListener("scroll", this.imageTiltOnScroll)
    this.videoScrollsIn()
  },
  destroyed() {
    // window.removeEventListener("scroll", this.imageTiltOnScroll)
  },
  methods: {
    videoScrollsIn() {
      console.log("GO!")
      // Codepen: https://codepen.io/driesbos/pen/NWNKwjM
      var el = $("#movie")
      // gsap.fromTo(
      //   el,
      //   5,
      //   {
      //     rotationY: -35,
      //     opacity: 1
      //   },
      //   {
      //     rotationY: 0,
      //     ease: "power2.easeIn"
      //   }
      // )
      gsap.fromTo(
        el,
        {
          rotationY: -35
        },
        {
          rotationY: 0,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: "center bottom",
            end: "center center"
          },
          ease: "power2.easeIn"
        }
      )
      // gsap.fromTo(
      //   el,
      //   2,
      //   {
      //     rotationY: 0
      //   },
      //   {
      //     rotationY: 360,
      //     // scrollTrigger: {
      //     //   trigger: el,
      //     //   scrub: true,
      //     //   start: "center center",
      //     //   end: "bottom top"
      //     // },
      //     ease: "power2.easeIn",
      //     delay: 14
      //   }
      // )
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.section-About
  // &_Landing
  #movie
    opacity: 1
</style>
