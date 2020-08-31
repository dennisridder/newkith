<template>
  <section
    v-editable="blok"
    class="section section-ImageBlok section-Media section-ImageContent fastScroll"
  >
    <div class="section-Media_Wrapper" :class="blok.sizing">
      <div
        :id="blok._uid"
        class="section-Media_Container"
        :class="blok.orientation"
        @mousemove="imageTilt($event)"
      >
        <img :src="blok.image" :alt="blok.image_title" />
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
    console.log(this.blok)
  },
  methods: {
    imageTilt: function(event) {
      var el = $("#" + this.blok._uid)
      var width = el.width()
      var xPos = (event.layerX / width - 0.5) * 75
      gsap.to(el, 1, {
        rotationY: xPos,
        ease: "power2.easeOut"
      })
    }
  }
}
</script>
