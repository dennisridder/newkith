<template>
  <a :href="`mailto:${blok.button_mail_address}`" class="button cursorInteract"
    ><h4>{{ blok.button_text }}</h4></a
  >
</template>

<script>
import cursorInteraction from "@/mixins/cursorInteraction"
import { mapState } from "vuex"

export default {
  mixins: [cursorInteraction],
  props: {
    blok: Object
  },
  computed: {
    ...mapState({
      general: state => state.general.list
    })
  }
}
</script>
