<template>
  <div class="image-Effect">
    <div :id="'effect-' + image.id" @mousemove="imageTilt($event)">
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
    $(window).resize(this.changePersective)
    // $("#effect-" + this.image.id).mousemove(this.imageTilt)
  },
  methods: {
    imageTilt: function(event) {
      // Codepen: https://codepen.io/driesbos/pen/NWNKwjM
      var el = $("#effect-" + this.image.id)
      var width = el.width()
      var xPos = (event.layerX / width - 0.5) * 60
      gsap.to(el, 1, {
        rotationY: xPos,
        transformPerspective: 900,
        ease: "power2.easeOut"
      })
    }
  }
}
</script>

<style lang="sass">
.image-Effect
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
