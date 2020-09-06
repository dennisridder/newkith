<template>
  <section
    v-editable="blok"
    class="section section-Media section-ImageContent vimeo fastScroll"
  >
    <div class="section-Media_Wrapper" :class="blok.sizing">
      <div
        :id="blok._uid"
        class="section-Media_Container "
        @mousemove="imageTilt($event)"
      >
        <!-- prettier-ignore -->
        <iframe
          :src="'https://player.vimeo.com/video/' + blok.video_id + '?autoplay=true'"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay"
          transparent="true"
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
