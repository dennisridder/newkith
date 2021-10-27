<template>
  <div class="imageGridImage square ximage-Effect ximage-Effect_Tilt">
    <!-- <div :id="'effect-' + id"> -->
    <img
      v-if="image"
      v-lazy="`${transformImage(image, '1600x0')}`"
      :srcset="
        `${transformImage(image, '1901x0')} 2880w, 
          ${transformImage(image, '1690x0')} 2560w, 
          ${transformImage(image, '1268x0')} 1920w, 
          ${transformImage(image, '1109x0')} 1680w, 
          ${transformImage(image, '845x0')} 1280w,
          ${transformImage(image, '1024x0')} 1024w, 
          ${transformImage(image, '1537x0')} 768w`
      "
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
      class="lazy"
      :alt="alttitle"
    />
    <!-- </div> -->
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"

export default {
  props: { image: String, alttitle: String, id: String },
  mounted() {
    // window.addEventListener("scroll", this.imageTiltOnScroll)
  },
  destroyed() {
    // window.removeEventListener("scroll", this.imageTiltOnScroll)
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
        var el = $("#effect-" + this.id)
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
        var el = $("#effect-" + this.id)
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
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/styles/variables.sass'

.imageGridImage
  position: relative
  padding-top: 120%
  margin-bottom: calc(1em + 0.5vw)

  &.square
    padding-top: 100%
  img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    object-position: 50% 50%
    object-fit: cover
</style>
