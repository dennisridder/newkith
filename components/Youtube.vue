<template>
  <section
    v-editable="blok"
    class="section section-Media section-ImageContent youtube scrollFast"
  >
    <div class="section-Media_Wrapper" :class="blok.sizing">
      <div :id="blok._uid" class="section-Media_Container">
        <blok-youtube-player
          :videoid="blok.video_id"
          autoplay="1&mute=1"
          title=""
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
    // window.addEventListener("scroll", this.imageTiltOnScroll)
  },
  destroyed() {
    // window.removeEventListener("scroll", this.imageTiltOnScroll)
  },
  methods: {
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
