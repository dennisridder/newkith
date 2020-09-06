<template>
  <div v-editable="blok" class="section-Wrapper section-Wrapper_Aboutpage">
    <blok-landing v-if="blok.disable_landing === false" :words="landingInput" />
    <section
      class="section section-About_Landing section-Media section-ImageContent vimeo fastScroll"
    >
      <div class="section-Media_Wrapper">
        <div id="movie" class="section-Media_Container ">
          <blok-vimeo-player :videoid="blok.vimeo_id" autoplay="true" />
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
import storyblokLivePreview from "@/mixins/storyblokLivePreview"
import carouselOnScroll from "@/mixins/carouselOnScroll"

gsap.registerPlugin(ScrollTrigger)

export default {
  mixins: [storyblokLivePreview, carouselOnScroll, fastScroll],
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
    console.log("ABOUT PAGE", this.blok)
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
