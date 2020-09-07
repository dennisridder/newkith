<template>
  <section
    v-editable="blok"
    class="section section-ImageBlok section-Media section-ImageContent scrollFast"
  >
    <div class="section-Media_Wrapper" :class="blok.sizing">
      <div
        :id="blok._uid"
        class="section-Media_Container"
        :class="blok.orientation"
        @mousemove="imageTilt($event)"
      >
        <!-- prettier-ignore -->
        <img
        v-if="blok.image"
        :srcset="
          `${transformImage(blok.image, '2880x0')} 2880w, 
           ${transformImage(blok.image, '2560x0')} 2560w, 
           ${transformImage(blok.image, '1920x0')} 1920w, 
           ${transformImage(blok.image, '1680x0')} 1680w, 
           ${transformImage(blok.image, '1280x0')} 1280w,
           ${transformImage(blok.image, '1024x0')} 1024w, 
           ${transformImage(blok.image, '768x0')} 768w`"
        sizes="100vw"
        :data-src="`${transformImage(blok.image, '1600x0')}`"
        :alt="blok.image_title"
      />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"

export default {
  props: {
    blok: Object
  },
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
        var el = $("#" + this.blok._uid)
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
        var el = $("#" + this.blok._uid)
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
