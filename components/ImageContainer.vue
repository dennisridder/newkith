<template>
  <div class="image-Effect image-Effect_Tilt">
    <div :id="'effect-' + id" @mousemove="imageTilt($event)">
      <!-- prettier-ignore -->
      <img
        v-if="image"
        :srcset="
          `${transformImage(image, '1901x0/filters:format(webp)')} 2880w, 
           ${transformImage(image, '1690x0/filters:format(webp)')} 2560w, 
           ${transformImage(image, '1268x0/filters:format(webp)')} 1920w, 
           ${transformImage(image, '1109x0/filters:format(webp)')} 1680w, 
           ${transformImage(image, '845x0/filters:format(webp)')} 1280w,
           ${transformImage(image, '1024x0/filters:format(webp)')} 1024w, 
           ${transformImage(image, '1537x0/filters:format(webp)')} 768w`"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 34vw"
        :data-src="`${transformImage(image, '1600x0/filters:format(jpg)')}`"
        :alt="alttitle"
      />
    </div>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"

export default {
  props: { image: String, alttitle: String, id: String },
  mounted() {
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
      let path = image.replace("//a.storyblok.com", "")
      return imageService + option + path
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
