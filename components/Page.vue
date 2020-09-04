<template>
  <div v-editable="blok" class="section-Wrapper">
    <blok-landing v-if="blok.disable_landing === false" :words="landingInput" />
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    blok: Object
  },
  data() {
    return {
      landingInput: []
    }
  },
  mounted() {
    this.getLandingInput()
  },
  methods: {
    getLandingInput() {
      if (this.blok.landing_text) {
        var landingTextArray = this.blok.landing_text.split(" ")
        this.landingInput = landingTextArray
      } else {
        var pathTitle = this.$route.path.replace(/\\|\//g, "")
        var pathTitleArray = pathTitle.split("-")
        this.landingInput = pathTitleArray
      }
    }
  }
}
</script>
