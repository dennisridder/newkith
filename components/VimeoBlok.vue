<template>
  <section
    v-editable="blok"
    class="section section-Media section-ImageContent vimeo scrollFast"
  >
    <div class="section-Media_Wrapper">
      <div
        :id="blok._uid"
        class="section-Media_Container"
        @mousemove="imageTilt($event)"
      >
        <iframe
          :src="'https://player.vimeo.com/video/' + blok.video_id"
          width="640"
          height="360"
          frameborder="0"
          transparent="true"
          autoplay="true"
          autopause="true"
          :title="blok.video_title"
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
