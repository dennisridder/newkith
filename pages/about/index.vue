<template>
  <div v-editable="story.content" class="section-Wrapper section-About">
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
            src="https://player.vimeo.com/video/453611222"
            width="640"
            height="360"
            frameborder="0"
            transparent="true"
            autoplay="true"
            autopause="true"
            loop="true"
            playsinline="true"
            title="false"
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

gsap.registerPlugin(ScrollTrigger)

export default {
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
    this.videoScrollsIn()
  },
  methods: {
    videoScrollsIn() {
      console.log("GO!")
      var el = $("#movie")
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
    }
  }
}
</script>
