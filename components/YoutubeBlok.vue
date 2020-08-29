<template>
  <section
    v-editable="blok"
    class="section section-Media section-ImageContent youtube scrollFast"
  >
    <div class="section-Media_Wrapper">
      <div
        :id="blok._uid"
        class="section-Media_Container"
        @mousemove="imageTilt($event)"
      >
        <iframe
          id="mediaPlayer"
          type="text/html"
          width="640"
          height="360"
          frameborder="0"
          :src="'https://www.youtube.com/embed/' + blok.video_id"
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
  }
  methods: {
    imageTilt: function(event) {
      var el = $("#" + this.blok._uid)
      var width = el.width()
      var xPos = (event.layerX / width - 0.5) * 25
      gsap.to(el, 1, {
        rotationY: xPos,
        ease: "power2.easeOut"
      })
    }
  }
}
</script>
