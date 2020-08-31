<template>
  <div class="image-Effect image-Effect_Tilt">
    <div :id="'effect-' + id" @mousemove="imageTilt($event)">
      <img :src="image" :alt="title" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"

export default {
  props: { image: String, title: String, id: String },
  mounted() {
    window.addEventListener("scroll", this.imageTiltOnScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.imageTiltOnScroll)
  },
  methods: {
    imageTilt: function(event) {
      const mq = window.matchMedia("(min-width: 768px)")
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
      const mq = window.matchMedia("(max-width: 768px)")
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
