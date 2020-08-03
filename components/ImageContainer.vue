<template>
  <div class="image-Tilt">
    <div :id="'tilt-' + image.id" @mousemove="imageTilt($event)">
      <img :src="image.thumbnail" :alt="image.title" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap"
import $ from "jquery"

export default {
  props: ["image"],
  mounted() {
    // console.log("IMAGE CONTAINER COMPONENT", this.image, typeof this.image)
  },
  methods: {
    imageTilt: function(event) {
      var el = $("#tilt-" + this.image.id)
      var xPos = (event.layerX / el.width() - 0.5) * 50
      console.log(xPos, event, this.image.id)
      gsap.to(el, {
        rotationY: xPos,
        transformPerspective: 900,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.5
      })
    }
  }
}
</script>

<style lang="sass">
.image-Tilt
  position: relative
  display: flex
  justify-content: center
  align-items: center
  #container
    position: relative
    display: flex
    justify-content: center
    align-items: center
    img
      width: 100%
</style>
