<template>
  <a
    :href="`mailto:${blok.button_mail_address}`"
    rel="noreferrer"
    class="button cursorInteract"
    ><span>{{ blok.button_text }}</span></a
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
