<template>
  <div v-editable="blok" class="section-Wrapper section-Wrapper_About ">
    <blok-landing v-if="blok.disable_landing === false" :words="landingInput" />
    <section
      class="section section-About_Landing section-Media section-ImageContent vimeo fastScroll"
    >
      <div class="section-Media_Wrapper">
        <div id="movie" class="section-Media_Container ">
          <iframe
            :src="'https://player.vimeo.com/video/' + blok.vimeo_id"
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
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import fastScroll from "@/mixins/fastScroll"
import slowScroll from "@/mixins/slowScroll"
import storyblokLivePreview from "@/mixins/storyblokLivePreview"

gsap.registerPlugin(ScrollTrigger)

export default {
  mixins: [storyblokLivePreview, fastScroll, slowScroll],
  props: {
    blok: Object
  },
  data() {
    return {
      landingInput: []
    }
  },
  mounted() {
    this.getLandingInput()
    this.videoOnScroll()
  },
  methods: {
    getLandingInput() {
      if (this.blok.landing_text) {
        var landingTextArray = this.blok.landing_text.split(" ")
        this.landingInput = landingTextArray
      } else {
        var pathTitle = this.$route.path.replace(/\\|\//g, "")
        var pathTitleArray = pathTitle.split("-")
        this.landingInput = pathTitleArray
      }
    },
    videoOnScroll() {
      var el = $("#movie")
      gsap.fromTo(
        el,
        {
          rotationY: -45
        },
        {
          rotationY: 0,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: "top bottom",
            end: "bottom bottom"
          },
          ease: "power2.easeIn"
        }
      )
      gsap.fromTo(
        el,
        {
          rotationY: 0
        },
        {
          rotationY: 45,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: "top top",
            end: "bottom top"
          },
          ease: "power2.easeIn"
        }
      )
    }
  }
}
</script>
